$(function () {
    $("#newLastDrank").datepicker();
    $("#newLastDrank").datepicker("option", "dateFormat", "yy-mm-dd");
});


// This is a module for cloud persistance in mongolab - https://mongolab.com
var ngMongo = angular.module('ngMongo', ['ngResource']).
    factory('Mongo', function ($resource) {
        var database = $resource('https://api.mongolab.com/api/1/databases' +
            '/matthersh/collections/Beers/:id',
            { apiKey: 'kQCb_3UOG14wG_RZlSanbD-rPMoa7cgK' }, {
                update: { method: 'PUT' }
            }
        );

        database.prototype.update = function (cb) {
            return database.update({id: this._id.$oid},
                angular.extend({}, this, {_id: undefined}), cb);
        };

        database.prototype.delete = function (cb) {
            return database.remove({id: this._id.$oid}, cb);
        };

        return database;
    });


ngMongo.controller("ListCtrl", function ($scope, Mongo) {
    $scope.items = Mongo.query({});
    $scope.addDb = function () {
        var newBeerName = $scope.newBeerName;
        var newPrice = $scope.newPrice;
        var newLastDrank = $scope.newLastDrank;
        alert(newLastDrank);
        return;
        if (newBeerName) {
            var newDb = new Mongo({name: newBeerName, price: newPrice, lastDrank: newLastDrank});
            newDb.$save();
            $scope.items.push(newDb);
        }
    }

    $scope.removeDb = function (db) {
        if (confirm("Are you sure you would like to delete this?")) {
            $scope.items.splice($scope.items.indexOf(db), 1);
            db.delete(db);
        }
    }
});


