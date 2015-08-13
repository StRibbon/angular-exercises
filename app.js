var app = angular.module("firstApp", ['ngSanitize']);

app.controller("MyFirstController", function($scope){
    $scope.name = "Severus Snape";
    $scope.number = 5;
    $scope.pickRandomNumber = function(){
      $scope.number = Math.floor(Math.random() * 10) + 1
    };
    $scope.reverse = function(s){
      var o = '';
      for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
        $scope.word = o;
    }
})

app.controller("ExercisesController", function($scope){
	$scope.FavColor = "Violet";
	$scope.secondsInACentury = 60*60*24*365*100;
	$scope.currentTime = new Date();
})

app.controller("DirectivesController", function($scope){
	$scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
})

app.controller("SymbolsController", function($scope,$sce){

	$scope.syms = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

	$scope.dupes = [1,1,2,5,6,9,9,9];
	$scope.obj = {
		name: "Stephen",
		age: "29",
		location: "SF"
	};

})

app.controller("CameraController", function($scope){
	$scope.sortOptions = ["Price", "Rating"];
	// $scope.sort = "Rating";
	$scope.setSort = function(type){
		$scope.sort = type.toLowerCase();
	};

	$scope.cameras = [
        {
            title: "Nikon D3100 DSLR",
            image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
            rating: 3.4,
            price: 369.99,
            onSale: true
        },
        {
            title: "Canon EOS 70D",
            image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
            rating: 2.0,
            price: 1099.0,
            onSale: false
        },
        {
            title: "Nikon D810A",
            image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
            rating: 4.2,
            price: 3796.95,
            onSale: true
        }
    ];
})

app.controller("PingPongController", function($scope){
  $scope.p1 = 0;
  $scope.p1serving = true;
  $scope.p2 = 0;
  $scope.p2serving = false;
  $scope.total = 0;
  $scope.plusOne = function(){  	  
    if($scope.p1 < 11){  
      $scope.p1 = $scope.p1 + 1;
      $scope.total = $scope.total +1;
      if($scope.total !=0 && $scope.total % 2 == 0){
      	$scope.p1serving = !$scope.p1serving;
      	$scope.p2serving = !$scope.p2serving;
      }
    }  
  };
  $scope.plusTwo = function(){
     if($scope.p2 < 11){  	  
      $scope.p2 = $scope.p2 + 1;
      $scope.total = $scope.total +1;
      if($scope.total !=0 && $scope.total % 2 == 0){
      	$scope.p1serving = !$scope.p1serving;
      	$scope.p2serving = !$scope.p2serving;
      }
    }  
  };
  $scope.reset = function(){
  	$scope.p1 = 0;
  	$scope.p2 = 0;
  	$scope.p1serving = true;
  	$scope.p2serving = false;
  	$scope.total = 0;
  };
  $scope.switch = function(){
  	$scope.p1serving = !$scope.p1serving;
    $scope.p2serving = !$scope.p2serving;
  }  
})

app.controller("ContactsController", function($scope, ContactService){
	$scope.contacts = ContactService.getContacts();

	$scope.removeContact = function (item) {
      var index = $scope.contacts.indexOf(item);
      $scope.contacts.splice(index, 1);
      $scope.removed = 'Contact successfully removed.';
  };

});

app.controller("AddContactsController", function($scope, ContactService){
	$scope.contacts = ContactService.getContacts();

	$scope.addContact = function(contact){		
		contact.id = $scope.contacts.length;
		contactToPush = {id: contact.id, name: contact.name, phone: contact.phone, email:contact.email};
		$scope.contacts.push(contactToPush);
		$scope.newContact = {};
		$scope.contact_form.$setPristine();
	}
});

app.factory("ContactService", [function () {
  var factory = {};

  factory.getContacts = function () {
    return contactList;
  }

  var contactList = [
    {id: 0, name: 'Ned Stark', email: 'ned@winterfell.com', phone: '123-456-7890'},
    {id: 1, name: 'Theon Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890'},
    {id: 2, name: 'Samwell Tarly', email: 'starly@castleblack.com', phone: '123-456-7890'},
    {id: 3, name: 'Jon Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890'},
    {id: 4, name: 'Arya Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890'},
    {id: 5, name: 'Jora Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890'},
    {id: 6, name: 'Tyrion Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890'},
    {id: 7, name: 'Stannis Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890'},
    {id: 8, name: 'Hodor', email: 'hodor@hodor.com', phone: '123-456-7890'},
    {id: 9, name: 'Margaery Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890'},
    {id: 10, name: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890'},
    {id: 11, name: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890'},
  ];

  return factory;
}]);

