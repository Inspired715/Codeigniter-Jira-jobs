<?php
	defined('BASEPATH') OR exit('No direct script access allowed');

	class User_Model extends CI_Model {
		
    public function getUsers()
    {
        $sql = "SELECT user_email, full_name, role, status, avatar, id FROM pg_users";

        $query = $this->db->query($sql);

        return $query->result();
    }

    public function reset_pwd($id, $pwd){
        $sql = "update pg_users set user_pwd = ? where id=?";

        $query = $this->db->query($sql, array($pwd, $id));

        return 'success';
    }

    public function delete_user($id){
        $sql = "update pg_users set status = 2 where id=?";

        $query = $this->db->query($sql, array($id));

        return 'success';
    }

    public function update_user($id, $name, $status, $role, $email){
        $sql = "update pg_users set full_name=?, user_email=?, status=?, role=? where id=?";

        $query = $this->db->query($sql, array($name, $email, $status, $role, $id));

        return 'success';
    }

    public function create_user($name, $status, $role, $email){
        $sql = "insert into pg_users (full_name, user_email, user_pwd, status,  role,  created_date, avatar) values(?,?,?,?,?,?,?)";
        $pwd = md5('123456');
        $date = date('Y-m-d');
        $query = $this->db->query($sql, array($name, $email, $pwd, 0, $status, $date, base_url('default-avatar.jpg')));

        return 'success';
    }   
}