<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_Controller extends MY_Controller {
	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('User_Model');
	}

	public function index() {			 
		$this->load_view('admin/User_view', '', 'Users');
	}

	public function getUsers()
	{
		$result = $this->User_Model->getUsers();
		$render = [];
		foreach ($result as $item) {
			$temp = [];
			$temp['avatar'] = base_url('uploads/avatars/').$item->avatar;
			$temp['email'] = $item->user_email;
			$temp['name'] = $item->full_name;
			$temp['id'] = $item->id;
			switch ($item->role) {
				case 0:
					$temp['role'] = 'Super admin';
					break;
				case 1:
					$temp['role'] = 'Admin';
					break;
				case 2:
					$temp['role'] = 'Client';
					break;
				case 3:
					$temp['role'] = 'Translator';
					break;
				case 4:
					$temp['role'] = 'Reviewer';
					break;
				default:
					$temp['role'] = 'Client';
					break;
			}

			if($item->status == 0)
				$temp['status'] = 'Active';
			elseif($item->status == 1)
				$temp['status'] = 'Inactive';
			else
				$temp['status'] = 'Deleted';
			$render[] = $temp;
		}

		echo json_encode(array('status' => 200, 'data' => $render));
	}

	public function uploadAvatar()
	{
		$file = $_FILES['file']['name'];
		$location = 'uploads/avatars/'.time().'-'.$file;
		if(move_uploaded_file($_FILES['file']['tmp_name'], $location)){
			echo json_encode(base_url($location));
		}else{
			echo '';
		}
	}

	public function delete_user(){
		$data = json_decode(file_get_contents('php://input'), true);
		if($data['id'] == ''){
			echo json_encode('Invalid option');
			return;
		}

		$result = $this->User_Model->delete_user($data['id']);
		echo json_encode(200);
	}

	public function save_user(){
		
		$data = json_decode(file_get_contents('php://input'), true);

		$id = isset($data['id'])?$data['id']:'';
		$name = isset($data['name'])?$data['name']:'';
		$status = isset($data['status'])?$data['status']:'';
		$role = isset($data['role'])?$data['role']:'';
		$email = isset($data['email'])?$data['email']:'';

		if($name == '' || $email == ''){
			echo json_encode('Invalid option');
			return;
		}

		if($id != '0'){
			$result = $this->User_Model->update_user($id, $name, $status, $role, $email);
		}else{
			$result = $this->User_Model->create_user($name, $status, $role, $email);
		}
		
		echo json_encode(200);
	}

	public function reset_password(){
		$data = json_decode(file_get_contents('php://input'), true);
		if($data['id'] == ''){
			echo json_encode('Invalid option');
			return;
		}

		$pwd = md5('123456');
		$result = $this->User_Model->reset_pwd($data['id'], $pwd);

		echo json_encode(200);
	}
}
