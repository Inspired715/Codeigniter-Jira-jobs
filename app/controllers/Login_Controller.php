<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login_Controller extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('Login_Model');
	}

	public function index()
	{
		$this->load->view('auth/Login_view');
	}

	public function checkAuth() {
		$email = isset($_POST['email'])?$_POST['email']	 :'';
		$password = isset($_POST['password'])?$_POST['password']	 :'';

		$res = $this->Login_Model->checkAuth($email, $password);
		
		echo $res;
	}
}
