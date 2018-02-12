/* setTimer = setTimeout(function(){
 console.log("123333");
 // gameService.won = "Поздравляем!!! Вы победили!";
 /!*  $scope.hide();
 window.location.href = '#/tables'*!/}, 1000);*/
// var setTimer;
// clearTimeout(setTimer)
// window.location.reload();
// window.location.href = '#/'
angular.module('RDash')
    .controller('AboutCTRL', ['$scope', AboutCTRL]);

function AboutCTRL($scope) {
    $scope.recipient="5625210";
    $scope.at = String.fromCharCode(64);
    $scope.dotcom="gmail.com";
    $scope.mail="mailto:";

$scope.send = function () {
    setTimeout(function() {
        window.open($scope.mail+$scope.recipient+$scope.at+$scope.dotcom);
    }, 500);
};

}