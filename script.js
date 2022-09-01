$(document).ready(function() {
$("#comment-submit").click(function() {

    $("#comment-section").append(
            `<div class="comment-container">
                <img class="profile-image" src="user.png">
                <div class="controls">
                    <a class="edit">Edit</a>
                    <a class="delete">Delete</a>
                </div>
                <div class="comment">
                    <h3 class="comment-handle">@` + $("#handle-input").val() + `</h3>
                    <p class="comment-text">` + $("#comment-input").val() + `</p>
                </div>
            </div>`);

});

$("#comment-section").on("click", ".delete", function() {
    $(this).parents().eq(1).remove()
});

$("#comment-section").on("click", ".edit", function() {

    $(this).parents().eq(1).append(`
    <div class="edit-form">
        <input class="edit-input" type="text" placeholder="` + $(this).parents().eq(1).find(".comment-text").text() + `">
        <input class="edit-submit" type="button" value="Submit">
    </div>
    `);
    
});
});

$("#comment-section").on("click", ".edit-submit", function() {
    $(this).parents().eq(1).find(".comment-text").text( $("#comment-section").find(".edit-input").val() );
    $(this).parents().eq(0).remove();
});