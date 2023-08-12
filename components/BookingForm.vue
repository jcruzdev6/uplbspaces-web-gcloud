<template>
    <div class="tile" id="homeGridOneBg">
        <div id="homeGridOne">
            <div id="homeGridOneContent">
                <div id="homeGridOneLeftCol">
                    <h1 id="homeGridOneTitle">Rent a facility in U.P. Los Baños</h1>
                    <p>Just fill up the form or choose a category</p>
                </div>
                <div class="d-grid" id="homeGridOneRightCol">
                    <label for="homeSearchForm-search">Which space do you need?</label>
                    <input type="text" id="homeSearchForm-search" class="form-control form-control-sm rounded"
                        placeholder="ex. Umali Hall">

                    <label for="homeSearchForm-cap">For how many persons?</label>
                    <div class="d-flex">
                        <input type="number" id="homeSearchForm-cap-min" class="form-control form-control-sm rounded me-1"
                            placeholder="min">
                    </div>

                    <label for="homeSearchForm-date">When do you need it?</label>
                    <input type="date" id="homeSearchForm-date" class="form-control form-control-sm rounded"
                        placeholder="no. of persons">

                    <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Search</button>
                </div>
            </div>
        </div>
    </div>
</template>