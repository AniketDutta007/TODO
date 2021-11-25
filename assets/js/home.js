$( document ).ready(function() {
    $( function() {
        $( "#datepicker" ).datepicker({
            changeMonth: true,
            changeYear: true
        });
    });
    $( "#datepicker" ).datepicker({
        dateFormat: "dd-M-yy"
    });
    $("#del-tasks").click(function(){
        let delTasks = new Array();
        $("input:checkbox[name=tasks]:checked").each(function () {
            delTasks.push($(this).val());
        });
        $.post("/delete-tasks",
        {
            _id: delTasks
        },
        function(data, status){
            location.reload();
        });
    });
    $("input[type=checkbox]").change(function(){
        $.post("/task-complete",
        {
            _id: $(this).attr('id'),
            status: $(this).is(':checked')
        },
        function(data, status){
        });
    });
    $(".toast").toast({delay:5000});
    $(".toast").toast("show");
});