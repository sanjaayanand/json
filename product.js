angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listProducts=[
        {id:'01',name:'sam',price:MCA},
        {id:'02',name:'ram',price:MCA},
        {id:'03',name:'som',price:MCA},
        {id:'04',name:'deena',price:MSC}
    ];
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
        $scope.price=product.price;
        $scope.quantity=product.quantity;
    }
    $scope.delete=function()
    {
        var result=confirm('once deleted they cannot be added again.');
        if(result==true)
        {
            var index=this.$index;
            $scope.listProducts.splice(index,1);
        }
    };
});
