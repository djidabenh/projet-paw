$(document).ready(function() {

    // Add Category
    $("#add-category").click(function() {
        var newCategory = $("#new-category").val();
        if (newCategory !== "") {
            var categoryHTML = '<div class="category"><div class="category-info"><h2>' + newCategory + '</h2><button class="delete-category"><span class="iconify" data-icon="typcn:delete"></span></button></div><ul class="task-list"></ul></div>';
            $(".tasks").append(categoryHTML);
            $("#new-category").val("");
        }
    });


  // Add Task
  $(".tasks").on("click", ".category", function() {
    var category = $(this);
    var taskName = prompt("Enter a new task:");
    if (taskName !== null && taskName !== "") {
        category.find(".task-list").append('<li class="task">' + taskName + '<button class="done-task"><span class="iconify" data-icon="mdi:done-outline"></span></button><button class="delete-task"><span class="iconify" data-icon="material-symbols:delete-outline"></span></button></li>');
    }
});


    // Delete Task
    $(".tasks").on("click", ".delete-task", function() {
        var task = $(this).parent();
        task.remove();
    });
    
    $(".tasks").on("click", ".done-task", function() {
        var task = $(this).parent();
        task.toggleClass("done");
    });
       

     // Delete Category
     $(".tasks").on("click", ".delete-category", function() {
        var category = $(this).parent().parent(); // Pour supprimer la catégorie entière
        category.remove();
    });
})
    


