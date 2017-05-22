
/********************************************************************************
 * Angular Home controller with API integration
 *********************************************************************************
 * Author: Ultra Bytes
 * Email: 
 * Website: http://www.bytesultra.com/
 *
 * File: logincontroller.js
 * Version: 1.0
 * Copyright: (c) 2017 - Ultra Bytes
 * You are free to use, distribute, and modify this software
 * under the terms of the GNU General Public License. See the
 * included license.txt file.
 *
 ********************************************************************************/

myApp.controller('loginController',['$scope','loginService',function($scope,loginService,Application) {

$scope.msg='';
$scope.login=function(user) {
	loginService.login(user,$scope);
}
}]);