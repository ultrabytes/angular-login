/********************************************************************************
 * Angular routing configuration 
 *********************************************************************************
 * Author: Ultra Bytes
 * Email: 
 * Website: http://www.bytesultra.com/
 *
 * File: routes.js
 * Version: 1.0
 * Copyright: (c) 2017 - Ultra Bytes
 * You are free to use, distribute, and modify this software
 * under the terms of the GNU General Public License. See the
 * included license.txt file.
 *
 ********************************************************************************/


myApp.config(["$routeProvider",function($routeProvider){

	$routeProvider.when("/",{
	templateUrl: "views/partial/login.html",
	controller: "loginController"
	}).otherwise('/');




}]);



