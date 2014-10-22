'use strict';

/* Controllers */
var result = []
var matchAPI = "http://localhost:5000/match/";

angular.module('myApp.controllers', []).
controller('VisualCtrl', ['$scope', '$rootScope', '$http',
    function($scope, $rootScope, $http) {
        $scope.data = [[]]

        $http.get(matchAPI + $rootScope.matchID)
            .then(function(res) {
                var result = res.data.result;
                var votes = result.positive_votes - result.negative_votes;
                var players = result.players;

                var data = [
                    ['Vote', 'Ratio']
                ]
                for (var i in players) {
                    data.push([votes, players[i].kills - players[i].deaths])
                }

                var d = google.visualization.arrayToDataTable(data);
                var options = {
                    hAxis: {
                        title: 'Votes',
                        minValue: -15,
                        maxValue: 15
                    },
                    vAxis: {
                        title: 'Kill/Death',
                        minValue: -15,
                        maxValue: 15
                    },
                    legend: 'none'
                };

                var chart = new google.visualization.ScatterChart(document.getElementById('visualization'));

                chart.draw(d, options);

                console.log(data);
                console.log(res)
            });

    }
])
    .controller('MainCtrl', ['$scope', '$rootScope', '$location',
        function($scope, $rootScope, $location) {
            $scope.visualize = function() {
                $rootScope.matchID = $scope.matchID;
                $location.path("visualization");
            }
        }
    ]);