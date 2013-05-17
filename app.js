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
    $scope.removeItem = function(item) {
        if (confirm("Remove this beer?")) {
            $scope.items.splice($scope.items.indexOf(item),1);
        }
    }
}

var ListCtrl = function($scope, $http) {

    //https://api.mongolab.com/api/1/databases?apiKey=kQCb_3UOG14wG_RZlSanbD-rPMoa7cgK
    var url = "https://api.mongolab.com/api/1/databases/matthersh/collections/Beers/?apiKey=kQCb_3UOG14wG_RZlSanbD-rPMoa7cgK";
    var result = $http.get(url);
    result.success(function(data)
    {
       $scope.items = data;
       /*
       for (x in $scope.items)
       {
           alert($scope.items[x].name);
       }
       */
    });
}

