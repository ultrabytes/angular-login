
/********************************************************************************
 * Angular Login servive page for define service
 *********************************************************************************
 * Author: Ultra Bytes
 * Email: 
 * Website: http://www.bytesultra.com/
 *
 * File: loginService.js
 * Version: 1.0
 * Copyright: (c) 2017 - Ultra Bytes
 * You are free to use, distribute, and modify this software
 * under the terms of the GNU General Public License. See the
 * included license.txt file.
 *
 ********************************************************************************/

myApp.factory('loginService',function($http){

return {

	login: function(user,scope){
		var $promise=$http.post('app/data/user.php',user);//send data to user.php
		$promise.then(function(msg){
			if(msg.data=='success')
			scope.msg='correct information';			
			else
			scope.msg='invalid credentials';
				
		});
	
	}
}

});