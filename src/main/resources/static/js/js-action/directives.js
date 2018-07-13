/**
 * Created by Administrator on 2018/7/13 0013.
 */
actionApp.dircetive('datePicker',function(){
    return {
        restrict:'AC',
        link:function(scope,elem,attrs){
            elem.datepicker();
        }
    };
})
