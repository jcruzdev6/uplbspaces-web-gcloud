export default defineNuxtPlugin(async () => {
  const auth = useAuthStore();
  console.log('loadUser called')
  if (!auth.isLoggedIn) {
    console.log('not logged in')
    await auth.fetchUser();
  }
});