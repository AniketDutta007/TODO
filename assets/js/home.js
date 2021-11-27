$( document ).ready(function() {
    // date formating for date picker by jQuery UI
    $( function() {
        $( "#datepicker" ).datepicker({
            changeMonth: true,
            changeYear: true
        });
    });
    $( "#datepicker" ).datepicker({
        dateFormat: "dd-M-yy",
        minDate: new Date()
    });
    // AJAX delete requests
    $("#del-tasks").click(function(){// function invoked on click of delete button
        let delTasks = new Array();// store the id's or tasks to be deleted
        $("input:checkbox[name=tasks]:checked").each(function () {// loop hrough the checked checkboxes and store their ids
            delTasks.push($(this).val());
        });
        $.post("/delete-tasks",{// send post resquest for deletion
            _id: delTasks
        },
        function(data, status){
            location.reload();// reload on request being processed
        });
    });
    // AJAX task complete request
    $("input[type=checkbox]").change(function(){// function invoked on status change of the checked box
        $.post("/task-complete",{// send post request for updating task status on change in status of checked box field
            _id: $(this).attr('id'),
            status: $(this).is(':checked')
        },
        function(data, status){
        });
    });
});