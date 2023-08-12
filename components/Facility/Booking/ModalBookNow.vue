<template>
    <div class="modal fade in" id="modalBookNow" tabindex="-1" aria-labelledby="modalBookNowLabel" aria-hidden="false">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"><IconsXMark /></button>

                <div class="modalContainer">
                    <div class="modalTitleContainer">
                        <div>
                            <h3 class="modalTitle" id="modalBookNowLabel">Book NCAS (New College of Arts & Sciences Hall)
                            </h3>
                            <address>Pedro R. Sandoval Ave. Los Baños, Laguna</address>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 pt-4">
                            <div class="spacesTileTable">
                                <div class="row1 label">Capacity:</div>
                                <div class="row1">> 300</div>
                                <div class="row2 label">Availability:</div>
                                <div class="row2">Mon to Fri, 7am to 7pm</div>
                                <div class="row1 label">U.P. Rate:</div>
                                <div class="row1">Php 1,000.00 / hr</div>
                                <div class="row2 label">Non-U.P. Rate:</div>
                                <div class="row2">Php 1,600.00 / hr</div>
                            </div>
                            <div style="margin-top: 10px;">
                                <label for="modalBookNowForm-date">Enter your event date</label>
                                <input type="date" id="modalBookNowForm-date" class="form-control form-control-sm rounded">
                                <label for="modalBookNowForm-timestart">Enter your event time</label>
                                <div class="d-flex align-items-center">
                                    <input type="time" id="modalBookNowForm-timestart"
                                        class="form-control form-control-sm rounded me-1"> to
                                    <input type="time" id="modalBookNowForm-timeend"
                                        class="form-control form-control-sm rounded ms-1">
                                </div>
                                <div class="d-grid align-items-center">
                                    <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Book</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 ps-5">
                            <label style="margin-top: 0 !important;">Available Dates:</label>
                            <table class="myTable">
                                <thead>
                                    <tr>
                                        <th>&lt;</th>
                                        <th colspan="5">JULY</th>
                                        <th>&gt;</th>
                                    </tr>
                                    <tr>
                                        <th>Sun</th>
                                        <th>Mon</th>
                                        <th>Tue</th>
                                        <th>Wed</th>
                                        <th>Thu</th>
                                        <th>Fri</th>
                                        <th>Sat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td class="fb">3</td>
                                        <td>4</td>
                                        <td class="pb">5</td>
                                        <td>6</td>
                                        <td class="pb">7</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>10</td>
                                        <td class="fb">11</td>
                                        <td class="pb">12</td>
                                        <td>13</td>
                                        <td>14</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td class="fb">17</td>
                                    <td class="pb">18</td>
                                    <td>19</td>
                                    <td>20</td>
                                    <td>21</td>
                                    <td>22</td>
                                </tr>
                                <tr>
                                    <td>23</td>
                                    <td>24</td>
                                    <td>25</td>
                                    <td class="pb">26</td>
                                    <td class="fb">27</td>
                                    <td class="fb">28</td>
                                    <td>29</td>
                                </tr>
                                <tr>
                                    <td>30</td>
                                    <td class="pb">31</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="legend">
                            <div class="ms-auto"><IconsSquare class="l-vacant" /> Vacant</div>
                            <div class="mx-auto"><IconsSquare class="l-partial" /> Partially Booked</div>
                            <div class="me-auto"><IconsSquare class="l-full" /> Fully Booked</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div></template>