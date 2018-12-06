//Check off todos by clicking
$("ul").on("click","li",function()
{
    //toggling strikethrough
    $(this).toggleClass("completed");
});
//click on x to delete todos
$("ul").on("click","span",function(event)
{
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event)
{
    if(event.which===13)
    {
        //new todo text
        var todoText= $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+todoText+"</li>");
    }
});

$(".fa-plus-square").click(function()
{
    $("input[type='text']").fadeToggle();
});