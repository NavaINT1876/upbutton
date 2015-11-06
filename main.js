
jQuery(document).ready(function(){
    $('input').on("change",function(){
        var $filesArray = $('input[type=file]')[0].files;
        for(key in $filesArray){
            if(typeof($filesArray[key]) === "object"){
                console.log($filesArray[key].name);
                $('#first-child').after('<p id="p-'+key+'">'+ $filesArray[key].name +'<a href="#" id="'+'item-'+key+'"><i class="fa fa-times"></i></a></p>');
            }
        }
    });

    $('body').on("click", "#item-0",function(){
        var $filesArray = $('input[type=file]')[0].files;
        //$filesArray.splice(0,1);
        $('#p-0').remove();
        $filesArray[0].remove();
        FileListReadOnly;
        //delete($filesArray);
        console.log($filesArray[0]);
        //$('#first-child').after('<p id="p-'+key+'">'+ $filesArray[key].name +'<a href="#" id="'+'item-'+key+'"><i class="fa fa-times"></i></a></p>');
        //for(key in $filesArray){
        //    if(typeof($filesArray[key]) === "object"){
        //        console.log($filesArray[key].name);
        //        $('#first-child').after('<p>'+ $filesArray[key].name +'<a href="#" id="'+'item-'+key+'"><i class="fa fa-times"></i></a></p>');
        //    }
        //}
    });
});