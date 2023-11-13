 <?php
defined('BASEPATH') OR exit('No direct script access allowed');

 class MY_Controller extends CI_Controller{

    public function __construct(){
       parent::__construct();
       $this->isLogined();
    }

    public function load_view($page_name, $params, $title){        
        $this->data = array(
           "page" => APPPATH.'resources/'.$page_name.'.php',
           "params" => $params,
           "title" => $title
        );

        $this->load->view('Main_view', $this->data);
    }

    public function isLogined(){
      if ($_SESSION['user_name']) {

      }else{
        redirect(base_url('/'));
      }
    }
  }