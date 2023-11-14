$(document).ready(function(){
    window.edit_user = edit_user;
    window.close_modal = close_modal;
    window.save_user = save_user;
    window.delete_user = delete_user;
    window.reset_pwd = reset_pwd;

    var user_table = $('#user_table').DataTable({
        ajax: BASE_URL + 'getUsers',
		language: {
			paginate: {
			  next: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
			  previous: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>' 
			}
		},
        columns: [ 
            { 'data': 'avatar'}, 
            { 'data': 'name' }, 
            { 'data': 'email' },
            { 'data': 'role' },
            { 'data': 'status' }
        ],
        columnDefs: [
            {
                render: (data, type, row) => '<div class="d-flex justify-content-center"><img class="avatar" src="' + data + '"></div>',
                orderable:false,
                targets: 0
            },
            {
                render: (data, type, row, meta) => {
                    return '<div class="d-flex justify-content-center"><a href="#" class="btn btn-primary shadow btn-xs sharp me-1"  onclick="reset_pwd('+row.id+')"><i class="fas fa-key"></i></a><a href="#" class="btn btn-primary shadow btn-xs sharp me-1"  onclick="edit_user('+meta.row+')"><i class="fas fa-pencil-alt"></i></a><a href="#" class="btn btn-danger shadow btn-xs sharp" onclick="delete_user(' +row.id+ ')"><i class="fa fa-trash"></i></a></div>'
                },
                orderable:false,
                targets: 5
            },
            {
                render: (data, type, row) => {
                    switch (data) {
                        case 'Super admin':
                            return '<span class="badge badge-success">Super admin</span>'
                        case 'Admin':
                            return '<span class="badge light badge-warning">Admin</span>'
                        case 'Translator':
                            return '<span class="badge badge-warning">Translator</span>'
                        case 'Reviewer':
                            return '<span class="badge badge-success light">Reviewer</span>'
                        case 'Client':
                            return '<span class="badge badge-danger">Client</span>'
                        default:
                            return '<span class="badge badge-danger">Client</span>'
                    }
                },
                targets: 3
            },
            {
                render: (data, type, row) => {
                    if(data === 'Active')
                        return '<span class="badge light badge-success"><i class="fa fa-circle text-success me-1"></i>' + data + '</span>'
                    else if(data === 'inactive')
                        return '<span class="badge light badge-warning"><i class="fa fa-circle text-danger me-1"></i>' + data + '</span>'
                    else
                        return '<span class="badge light badge-danger"><i class="fa fa-circle text-danger me-1"></i>' + data + '</span>'
                },
                targets: 4
            },
        ]
    });

    function edit_user(rowIndex=-1){
        if(rowIndex != -1){
            let edit_data = user_table.row(rowIndex).data();
            $('#selected_image').attr('src', edit_data.avatar).width(210).height(195);
            $('#full_name').val(edit_data.name);
            $('#id').val(edit_data.id);
            $('#email').val(edit_data.email);
            if(edit_data.status == 'Active')
                $('#status').val(0);
            else
                $('#status').val(1);
        }else{
            $('#full_name').val('');
            $('#email').val('');
            $('#status').val(0);
            $('#id').val(0);
        }
                
        $('#userModal').show();
    }

    function close_modal(){
        $('#userModal').hide();
    }

    async function delete_user(id){
        let response = await fetch('delete_user', {
            method:"POST",
            body:JSON.stringify(
                {
                    id : id,
                }
            )
        });

        const result = await response.json();
        if(result == 200){
            toastr.success("Updated successfuly", "Bottom Right", {
                positionClass: "toast-bottom-right",
                timeOut: 5e3,
                closeButton: !0,
                debug: !1,
                newestOnTop: !0,
                progressBar: !0,
                preventDuplicates: !0,
                onclick: null,
                showDuration: "300",
                hideDuration: "1000",
                extendedTimeOut: "1000",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut",
                tapToDismiss: !1
            })

            user_table.ajax.reload();
        }
        else
            toastr.error("Error", "Bottom Left", {
                positionClass: "toast-bottom-left",
                timeOut: 5e3,
                closeButton: !0,
                debug: !1,
                newestOnTop: !0,
                progressBar: !0,
                preventDuplicates: !0,
                onclick: null,
                showDuration: "300",
                hideDuration: "1000",
                extendedTimeOut: "1000",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut",
                tapToDismiss: !1
            })
    }

    async function save_user(){
        let response = await fetch('save_user', {
            method:"POST",
            body:JSON.stringify(
                {
                    id : $('#id').val(),
                    name : $('#full_name').val(),
                    email : $('#email').val(),
                    role : $('#role').val(),
                    status : $('#status').val()
                }
            )
        });

        const result = await response.json();
        if(result == 200){
            toastr.success("Updated successfuly", "Bottom Right", {
                positionClass: "toast-bottom-right",
                timeOut: 5e3,
                closeButton: !0,
                debug: !1,
                newestOnTop: !0,
                progressBar: !0,
                preventDuplicates: !0,
                onclick: null,
                showDuration: "300",
                hideDuration: "1000",
                extendedTimeOut: "1000",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut",
                tapToDismiss: !1
            })
            $('#userModal').hide();
            user_table.ajax.reload();
        }
        else
            toastr.error("Error", "Bottom Left", {
                positionClass: "toast-bottom-left",
                timeOut: 5e3,
                closeButton: !0,
                debug: !1,
                newestOnTop: !0,
                progressBar: !0,
                preventDuplicates: !0,
                onclick: null,
                showDuration: "300",
                hideDuration: "1000",
                extendedTimeOut: "1000",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut",
                tapToDismiss: !1
            })
    }

    async function reset_pwd(id){
        let response = await fetch('reset_password', {
            method:"POST",
            body:JSON.stringify(
                {
                    id : id,
                }
            )
        });

        const result = await response.json();
        if(result == 200)
            toastr.success("Updated successfuly", "Bottom Right", {
                positionClass: "toast-bottom-right",
                timeOut: 5e3,
                closeButton: !0,
                debug: !1,
                newestOnTop: !0,
                progressBar: !0,
                preventDuplicates: !0,
                onclick: null,
                showDuration: "300",
                hideDuration: "1000",
                extendedTimeOut: "1000",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut",
                tapToDismiss: !1
            })
        else
            toastr.error("Error", "Bottom Left", {
                positionClass: "toast-bottom-left",
                timeOut: 5e3,
                closeButton: !0,
                debug: !1,
                newestOnTop: !0,
                progressBar: !0,
                preventDuplicates: !0,
                onclick: null,
                showDuration: "300",
                hideDuration: "1000",
                extendedTimeOut: "1000",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut",
                tapToDismiss: !1
            })
    }
})