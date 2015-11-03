jQuery(document).ready(function(){

    $('input').on("change",function(){
        console.log($('input[type=file]')[0].files.length);
        var filesArray = $('input[type=file]')[0].files;
        console.log(filesArray);
        filesArray.each(function(i,elem){
           //var name = elem.name;
           // console.log(name);
        });
    });
});