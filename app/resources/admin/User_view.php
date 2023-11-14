<div class="col-12">
    <div class="card">
        <div class="card-header d-flex justify-content-end">
            <button type="button" class="btn btn-rounded btn-outline-primary" onclick='edit_user()'>Create user</button>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table id="user_table" style="width:100%">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
    <div class="modal fade show" id="userModal" aria-modal="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="user_modal_title">Modal title</h5>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Full name</label>
                                <input type="text" class="form-control" placeholder="Full name" id="full_name" name="full_name">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="Email"  id="email" name="email">
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="mb-3 d-flex justify-content-center">
                                <div>
                                    <img src="<?php echo base_url('assets/img/default-avatar.jpg')?>" style="width:190px;height:190px;border-radius:10px" id="selected_image">
                                    <input name="id" hidden id="id">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <select id="status" name='status' class="default-select form-control wide">
                                    <option value='0' selected>Active</option>
                                    <option value='1'>Inactive</option>
                                    <option value='2'>Delete</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Role</label>
                                <select id="role" name='role' class="default-select form-control wide">
                                    <option value='-1' selected>None</option>
                                    <option value='0'>Super admin</option>
                                    <option value='1'>Admin</option>
                                    <option value='2'>Client</option>
                                    <option value='3'>Translator</option>
                                    <option value='4'>Reviewer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger light" onclick="close_modal()">Close</button>
                    <button type="button" class="btn btn-primary" onclick="save_user()">Save</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="<?php echo base_url('assets/action/user.js')?>"></script>