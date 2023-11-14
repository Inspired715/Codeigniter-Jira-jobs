<!DOCTYPE html>
<html lang="en" class="h-100" dir="ltr">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="robots" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/png" href="<?php echo base_url('assets/img/logo.png')?>">
    <title>TransEase</title>
    <script>
        var BASE_URL = '<?php echo base_url()?>';
    </script>
    <link href="<?php echo base_url('assets/css/style.css')?>" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/vendor/toastr/toastr.css')?>">
	<script src="<?php echo base_url('assets/js/global.js')?>"></script>
    <script src="<?php echo base_url('assets/vendor/toastr/toastr.js')?>"></script>
</head>

<body class="vh-100" data-typography="poppins" data-theme-version="light" data-sidebar-style="full"
    data-layout="horizontal" data-nav-headerbg="color_1" data-headerbg="color_1" data-sibebarbg="color_5"
    data-sidebar-position="fixed" data-header-position="fixed" data-container="wide" direction="ltr"
    data-primary="color_5">
    <div class="authincation h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">
                                    <div class="text-center mb-3">
                                        <a href="<?php echo base_url('/')?>"><img
                                                src="<?php echo base_url('assets/img/logo-full.png')?>" alt=""></a>
                                    </div>
                                    <h4 class="text-center mb-4">Sign in your account</h4>
                                    <form id="login_form">
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Email</strong></label>
                                            <input type="email" class="form-control" name="email" placeholder="hello@example.com" required>
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" class="form-control" name="password" placeholder="Password" required>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="<?php echo base_url('assets/action/login.js')?>"></script>
</html>