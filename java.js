$(window).on("load", startAnim);

function startAnim() {
    console.log("hånd kommer ind");
    $("#hand_container").addClass("hand_move_up");
    $("#lower").addClass("lower_hand");
    setTimeout(function () {
        $("#phone").fadeIn(500);
    }, 500);
    $("#hand_container").on("animationend", fingers);
}

function fingers() {
    console.log("fingre kommer ind")
    $("#hand_container").off("animationend", fingers);

    $("#lower").addClass("lower_hand");
    $("#hand_container").addClass("fingers");
    $("#hand_container").removeClass("hand_move_up");
}
