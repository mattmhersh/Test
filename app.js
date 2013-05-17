var ngMongo = angular.module("ngMongo", [])

ngMongo.factory("Mongo", function($http) {
    return {
        database : function() {
            var url = "https://api.mongolab.com/api/1/databases/matthersh/collections/Beers/?apiKey=kQCb_3UOG14wG_RZlSanbD-rPMoa7cgK";
            return $http.get(url);
        }
    }
});

ngMongo.controller("ListCtrl", function($scope, Mongo) {
    var result = Mongo.database();
    result.success(function(data)
    {
        $scope.items = data;
    });
});

