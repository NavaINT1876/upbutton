
jQuery(document).ready(function(){

    $('input').on("change",function(){
        var $filesAmount = $('input[type=file]')[0].files.length;
        //console.log($filesAmount);
        var $filesArray = $('input[type=file]')[0].files;
        //console.log(filesArray);
        if($filesAmount > 0){
            for(key in $filesArray){
                //console.log(filesArray[key]);
                if(typeof($filesArray[key]) === "object"){
                    console.log($filesArray[key].name);
                    $('#first-child').after('<p>'+ $filesArray[key].name +'<a href="#" id="'+'item-'+key+'"><i class="fa fa-times"></i></a></p>');
                }
            }
        }
    });


    $('body').on("click", "#item-0",function(){
        //alert('Hello!');
        console.log('item-0 click');
    });
});