var MyCtrl = function($scope) {
    $scope.items = [
         { name: "Idiot IPA", price: 8.99, lastDrank: "2013-05-17" },
         { name: "Inversion IPA", price: 6.99, lastDrank: "2013-05-17" } ]

    $scope.pluralizer = {
        0 : "No beers!",
        1 : "Only one left!",
        other: "{} Beers in Fridge"
    }

}

