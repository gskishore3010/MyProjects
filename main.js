var app = angular.module('userApp', []);

app.controller('userController', function PostController($scope) {
    $scope.users = [
			{ fName: 'ss', lName: 'rr', uEmail: 'ss@s.com', ContactNo: '9012345678', uStatus:'Active' },
			{ fName: 'rr', lName: 'ss', uEmail: 'rr@s.com', ContactNo: '8012345678', uStatus:'Inactive' },
		];
    //$scope.users = [];
    $scope.user = null;
    $scope.editMode = false;

    // add User
    $scope.add = function () {
        var currentUser = this.user;
        if (currentUser != null && currentUser.fName != null && currentUser.lName != null && currentUser.uEmail && currentUser.ContactNo && currentUser.uStatus) {
             $scope.addMode = false;
             currentUser.UserId =  $scope.users;
             $scope.users.push(currentUser);

             //reset form
             $scope.user = null;
             // $scope.adduserform.$setPristine(); //for form reset

             $('#userModel').modal('hide');
            
        }
    };

    //edit user
    $scope.edit = function () {
        $scope.user = this.user;
        $scope.editMode = true;
        $('#userModel').modal('show');
    };

    //update user
    $scope.update = function () {
        var currentUser = this.user;
        currentUser.editMode = false;
        $('#userModel').modal('hide');
    };

    // delete User
    $scope.delete = function () {
        currentUser = $scope.user;
         $('#confirmModal').modal('hide');
            $scope.users.pop(currentUser);
    };

    //Model popup events
    $scope.showadd = function () {
        $scope.user = null;
        $scope.editMode = false;
        $('#userModel').modal('show');
    };

    $scope.showedit = function () {
        $('#userModel').modal('show');
    };

    $scope.showconfirm = function () {
        $scope.user = $scope.users;
        $('#confirmModal').modal('show');
    };

    $scope.cancel = function () {
        $scope.user = null;
        $('#userModel').modal('hide');
    }

});