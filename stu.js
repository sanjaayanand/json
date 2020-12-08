angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var students=[
        {name:'ram',dob:new Date("July 21,1990"),gender:"Male",attendance:55},
        {name:'sam',dob:new Date("July 20,1987"),gender:"Female",attendance:65},
        {name:'som',dob:new Date("November 19,1983"),gender:"Male",attendance:55},
        {name:'geetha',dob:new Date("August 21,1990"),gender:"Female",attendance:55},
        {name:'sarvanan',dob:new Date("August 21,1990"),gender:"Male",attendance:55}
    ];
    console.log(students);
    $scope.students=students;
    $scope.rowlimit=4;
});