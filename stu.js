angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.stu_list=[
        {id:'std_01',name:'sanjay',cousre:MCA,present:1}
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.stu_list[index].name=$scope.name;
        $scope.stu_list[index].cousre=$scope.cousre;
        $scope.stu_list[index].present=$scope.present;
    }
    $scope.add=function()
    {
        $scope.stu_list.push({
            id:$scope.id,name:$scope.name,cousre:$scope.cousre,present:$scope.present
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.stu_list.length;i++)
        if($scope.stu_list[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var stu=$scope.stu_list[index];
        $scope.id=stu.id;
        $scope.name=stu.name;
        $scope.cousre=stu.cousre;
        $scope.present=stu.present;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.stu_list.splice(index,1);
        }
    };
});