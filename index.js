(function(){
var app;

app=angular.module("git",[]);

app.controller("versionController", function($scope){
  $scope.commit = [];
  for(var i=0;i<11;i++){
    $scope.commit[i] = 0;
  }
  $scope.commit[10] = 1;
	
  $scope.show = function(n){
    
    for(var i=0;i<11;i++){
      $scope.commit[i] = 0;
      if(i==n){
        $scope.commit[i] = 1;
      }
    }

  };

});

app.directive('commitOne',function(){
  return {
    restrict:'E',
    templateUrl:'7e6e8.html',
    scope:false,
    link:function(scope,element){
     
      }
    };
  });

app.directive('commitTwo',function(){
  return {
    restrict:'E',
    templateUrl:'b13f8.html',
    scope:false,
    link:function(scope,element){
     
      }
    };
  });

app.directive('commitThree',function(){
  return {
    restrict:'E',
    templateUrl:'e89bc.html',
    scope:false,
    link:function(scope,element){
     
      }
    };
  });

app.directive('commitFour',function(){
  return {
    restrict:'E',
    templateUrl:'5acd8.html',
    scope:false,
    link:function(scope,element){
     
      }
    };
  });

app.directive('commitFive',function(){
  return {
    restrict:'E',
    templateUrl:'561e5.html',
    scope:false,
    link:function(scope,element){
     
      }
    };
  });

app.directive('commitSix',function(){
  return {
    restrict:'E',
    templateUrl:'e1c9f.html',
    scope:false,
    link:function(scope,element){
     
      }
    };
  });

app.directive('commitSeven',function(){
  return {
    restrict:'E',
    templateUrl:'3fa59.html',
    scope:false,
    link:function(scope,element){
     
      }
    };
  });

app.directive('commitEight',function(){
  return {
    restrict:'E',
    templateUrl:'77c3c.html',
    scope:false,
    link:function(scope,element){
     
      }
    };
  });

app.directive('commitNine',function(){
  return {
    restrict:'E',
    templateUrl:'f8d86.html',
    scope:false,
    link:function(scope,element){
     
      }
    };
  });

app.directive('commitTen',function(){
  return {
    restrict:'E',
    templateUrl:'3e694.html',
    scope:false,
    link:function(scope,element){
     
      }
    };
  });

app.directive('commitEleven',function(){
  return {
    restrict:'E',
    templateUrl:'3ffd9.html',
    scope:false,
    link:function(scope,element){
     
      }
    };
  });
})();