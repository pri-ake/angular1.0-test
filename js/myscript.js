var mainCtrl = function($scope) {
  $scope.users = [
    {"name":"taguchi", "score":52.22},
    {"name":"tanaka", "score":38.22},
    {"name":"yamada", "score":11.11},
    {"name":"himeda", "score":100.100},
    {"name":"iino", "score":60.22},
    {"name":"ohara", "score":22.22},
    {"name":"shimoda", "score":90.11},
    {"name":"kakei", "score":40.100},
  ];
  $scope.today = new Date();
}

var userItemCtrl = function($scope) {
  $scope.increment = function() {
    $scope.user.score++;  // score += 1
  }
  $scope.decrement = function() {
    $scope.user.score--;  // score -= 1
  }
}