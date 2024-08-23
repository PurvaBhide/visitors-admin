<div class="modal fade " id="assignBatchModal" tabindex="-1" aria-modal="true" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form id="assignBatchForm" action="">

                <div class="modal-header">
                    <h5 class="modal-title" id="assignBatchModalLabel1">Assign Batch </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="">
                        <div class="card-header p-0 m-0">
                            <h3 class="text-center">Assign Batch </h3>
                        </div>
                        <div class="card-body mt-0 py-2">
                            <div class="row pt-0">
                                <div class="col-md-6  mb-3 form-group">
                                    <label for="" class="form-label">Select Subject<sup class="text-danger">*</sup></label>
                                    <select required name="subject_id" id="subject_id" class="form-control">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                    </select>
                                </div>
                                <div class="col-md-6  mb-3 form-group">
                                    <label for="" class="form-label">Select Teacher<sup class="text-danger">*</sup></label>
                                    <select name="teacher_id" id="teacher_id" class="form-control">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                    </select>
                                    <input type="hidden" id="batch_id" name="batch_id">
                                </div>
                            </div>
                            <div id="assign-alert-div" class="mb-3 col-md-8 mx-auto  d-none"></div>
                            <!-- <div class="row">
                                <div class="col-md-12 d-flex justify-content-center" id="">
                                    <button type="submit" class="btn btn-primary my-2" id="submit" value="">Register </button>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div id="batch-alert-div" class="mb-3 col-md-8 mx-auto  d-none"></div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="submit" id="submit" class="btn btn-primary">Assign</button>
                </div>
            </form>
        </div>
    </div>
</div>