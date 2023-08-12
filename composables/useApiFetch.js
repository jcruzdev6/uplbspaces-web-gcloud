import { useRequestHeaders } from "nuxt/app";

export function useApiFetch(path, options = {}) {
  const API_URL = useRuntimeConfig().public.jsonApiUrl;
  const WEB_URL = useRuntimeConfig().public.webUrl;
  let headers = {
    accept: "application/json",
    referer: WEB_URL
  };

  const token = useCookie('XSRF-TOKEN');

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value;
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
    };
  }

  return useFetch(API_URL + path, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  })
}