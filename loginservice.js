'use strict';
myapp.factory('loginservice',function($http,$location){
	return{
		islogged:function(){
			var $checksession=$http.post('data/check.php');
			return $checksession;
		}
	}
});