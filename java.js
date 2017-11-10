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

    setTimeout(besked, 1000);
    $("#hand_container").on("animationend", besked);
}

function besked() {
    console.log("besked kommer ind")
    $("#hand_container").off("animationend", besked);
    $("#besked").addClass("besked_ind");
    $("#stjerne").addClass("stjerne_ind");

    setTimeout(censoreret, 3000);
    $("#stjerne").on("animationend", censoreret);
}


function censoreret() {
    console.log("censoreret billede");
    $("#hand_container").off("animationend", censoreret);
    $("#besked").removeClass("besked_ind");
    $("#stjerne").removeClass("stjerne_ind");
    $("#lower").removeClass("lower_hand");
    $("#phone").hide();
    $("#hand_container").removeClass("fingers");
    $("#hand_container").removeClass("hand_move_up");

    $("#mobil").addClass("mobil_c");
    $("#censoreret").addClass("censoreret_billede");
    setTimeout(vidersend, 2000);
}


function vidersend() {
    console.log("vidersend billede");
    $("#mobil").addClass("mobil_c");
    $("#censoreret").removeClass("censoreret_billede");
    $("#mobil").addClass("mobil_c");
    $("#knap").addClass("vidersend");
    $("#finger").addClass("finger_move_up");


}
