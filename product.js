angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listProducts=[
        {id:'s01',name:'sam',cprograming:45,webstacks:24},
        {id:'s02',name:'ram',cprograming:35,webstacks:24},
        {id:'s03',name:'som',cprograming:75,webstacks:12},
        {id:'s04',name:'geetha',cprograming:50,webstacks:40},
        {id:'s05',name:'sarvanan',cprograming:50,webstacks:40}
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listProducts[index].name=$scope.name;
        $scope.listProducts[index].cprograming=$scope.cprograming;
        $scope.listProducts[index].webstacks=$scope.webstacks;
    }
    $scope.add=function()
    {
        $scope.listProducts.push({
            id:$scope.id,name:$scope.name,cprograming:$scope.cprograming,webstacks:$scope.webstacks
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listProducts.length;i++)
        if($scope.listProducts[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var product=$scope.listProducts[index];
        $scope.id=product.id;
        $scope.name=product.name;
        $scope.cprograming=product.cprograming;
        $scope.webstacks=product.webstacks;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listProducts.splice(index,1);
        }
    };
});