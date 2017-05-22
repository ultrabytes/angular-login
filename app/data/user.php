<?php
$user =json_decode(file_get_contents('php://input'));//get user from json headers
if($user->mail=='ubexpertz@example.com' && $user->pass=='123456')
{
	print 'success';
} else {

	print'error';
}

?>