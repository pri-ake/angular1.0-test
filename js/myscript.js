var myApp = angular.module("myApp", []);

myApp.controller('mainCtrl', function ($scope){
  $scope.addUser = function() {
    // ユーザーを追加する処理を書くよ
  }
  $scope.user = {
    "adult":"adult",
    "phone":"Android",
    "color":"green"
  };
  $scope.colors = ['red', 'blue', 'pink','yellow', 'green'];
});