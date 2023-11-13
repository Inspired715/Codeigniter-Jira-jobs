<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login_Controller extends CI_Controller {

	public function index()
	{
		$this->load->view('auth/Login_view');
	}

	public function checkAuth() {			 
		$_SESSION['user_name'] = 'admin';
		echo 'success';
	}
}
