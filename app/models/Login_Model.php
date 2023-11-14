<?php
	defined('BASEPATH') OR exit('No direct script access allowed');

	class Login_Model extends CI_Model {
		
	// Login User
    public function checkAuth($email, $password)
    {
        $sql = "SELECT * FROM pg_users WHERE user_email = ? AND status = 0 and user_pwd= ? limit 1";

        $query = $this->db->query($sql, array($email, md5($password)));

        $user = $query->result();

        if(count($user) != 1)
            return 403;

        $_SESSION['email'] = $user[0]->user_email;
        $_SESSION['name'] = $user[0]->full_name;
        $_SESSION['role'] = $user[0]->role;

        if($user[0]->avatar){
            $_SESSION['avatar'] = base_url('uploads/avatars/').$user[0]->avatar;
        }else{
            print_r(2);
            $_SESSION['avatar'] = base_url('assets/img/default-avatar.jpg');
        }

        return 200;
    }
}