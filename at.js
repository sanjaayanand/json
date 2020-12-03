angular.module('myapp',[])
.controller('myctrl',function($at)
{
    $at.studentlist=[
        {id:'2047202',name:'sanjay',cousre:'MCA',present:'1'}
    ];
    $at.save=function()
    {
        var index=getindex($at.id);
        $at.studentlist[index].name=$at.name;
        $at.studentlist[index].cousre=$at.cousre;
        $at.studentlist[index].present=$at.present;
    }
    $at.add=function()
    {
        $at.studentlist.push({
            id:$at.id,name:$at.name,cousre:$at.cousre,present:$at.present
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$at.studentlist.length;i++)
        if($at.studentlist[i].id==id)
        return i;
        return -1;
    }
    $at.edit=function(id)
    {
        var index=this.$index;
        var student=$at.studentlist[index];
        $at.id=student.id;
        $at.name=student.name;
        $at.cousre=student.cousre;
        $at.present=student.present;
    }
    $at.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $at.studentlist.splice(index,1);
        }
    };
});