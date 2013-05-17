var ngMongo = angular.module("ngMongo", ['ngResource'])

ngMongo.factory("Mongo", function($resource) {
    return {
        database : $resource("https://api.mongolab.com/api/1/databases/matthersh/collections/Beers/?apiKey=kQCb_3UOG14wG_RZlSanbD-rPMoa7cgK")
    }
});

ngMongo.controller("ListCtrl", function($scope, Mongo) {
    $scope.items = Mongo.database.query({});
});

