var app = angular.module("myApp",['ngAnimate']);
				app.controller("myCtrl", function($scope){
					//$scope.men_menu_div = false;
					
					//men menu categories start
					$scope.men_open = function(){
						$scope.men_menu_div = true
						$scope.men_menu_border={
							"border-bottom" : "5px #ee5f73 solid"
						}
					}
					$scope.men_close = function(){
						$scope.men_menu_div = false
						$scope.men_menu_border={
							"border-bottom" : "none"
						}
					}
					//men menu categories end
					
					//women menu categories start
					$scope.women_open = function(){
						$scope.women_menu_div = true
						$scope.women_menu_border={
							"border-bottom" : "5px #fb56c1 solid"
						}
					}
					$scope.women_close = function(){
						$scope.women_menu_div = false
						$scope.women_menu_border={
							"border-bottom" : "none"
						}
					}
					//Women menu categories end
					
					//kids menu categories start
					$scope.kids_open = function(){
						$scope.kids_menu_div = true
						$scope.kids_menu_border={
							"border-bottom" : "5px #f26a10 solid"
						}
					}
					$scope.kids_close = function(){
						$scope.kids_menu_div = false
						$scope.kids_menu_border={
							"border-bottom" : "none"
						}
					}
					//kids menu categories end
					
					//home & living menu categories start
					$scope.home_and_living_open = function(){
						$scope.home_and_living_menu_div = true
						$scope.home_menu_border={
							"border-bottom" : "5px #f2c210 solid"
						}
					}
					$scope.home_and_living_close = function(){
						$scope.home_and_living_menu_div = false
						$scope.home_menu_border={
							"border-bottom" : "none"
						}
					}
					//home&leaving menu categories end
					
					//user Login sign up start
					$scope.user_login_open = function(){
						$scope.user_login_div = true
						$scope.user_menu_border={ 
							"border-bottom" : "5px red solid"
						}
					}
					$scope.user_login_close = function(){
						$scope.user_login_div = false
						$scope.user_menu_border={
							"border-bottom" : "none"
						}
					}
					//user login sign up end
					
					//search items start
					$scope.search = function(){
						if($scope.search_key == "")
						{
							$scope.search_box_show = false
						}
						else
						{
							$scope.search_box_show = true
						}	
					}
					//search items end
				});
		//-------------------search items---------------------//
				function myFunction() {
					var input, filter, ul, li, a, i;
					input = document.getElementById("myInput");
					filter = input.value.toUpperCase();
					ul = document.getElementById("item-list");
					li = ul.getElementsByTagName("li");
					for (i = 0; i < li.length; i++) {
						a = li[i].getElementsByTagName("a")[0];
						if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
							li[i].style.display = "";
						} else {
							li[i].style.display = "none";

						}
					}
				}
