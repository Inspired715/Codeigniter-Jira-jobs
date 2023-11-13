<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_Controller extends MY_Controller {
	
	public function __construct(){
		parent::__construct();
	}

	public function index() {			 
		$this->load_view('admin/User_view', '', 'User management');
	}
}
