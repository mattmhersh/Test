var MyCtrl = function($scope) {
    $scope.items = [
         { name: "Idiot IPA", price: 8.99, lastDrank: "2013-05-17" },
         { name: "Inversion IPA", price: 6.99, lastDrank: "2013-05-17" } ]

    $scope.pluralizer = {
        0 : "No beers!",
        1 : "Only one left!",
        other: "{} Beers in Fridge"
    }

    $scope.addBeer = function() {
        var newBeer = { name : $scope.name, price : $scope.price, lastDrank : new Date() };
        $scope.items.push(newBeer);
    }

}

