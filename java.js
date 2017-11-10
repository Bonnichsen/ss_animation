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
    $("#besked_container").addClass("besked_ind");
    $("#stjerne_container").addClass("stjerne_ind");

    setTimeout(censoreret, 3000);
    $("#stjerne_container").on("animationend", censoreret);
}


function censoreret() {
    console.log("censoreret billede");
    $("#hand_container").off("animationend", censoreret);
    $("#besked_container").removeClass("besked_ind");
    $("#stjerne_container").removeClass("stjerne_ind");
    $("#lower").removeClass("lower_hand");
    $("#phone").hide();
    $("#hand_container").removeClass("fingers");
    $("#hand_container").removeClass("hand_move_up");

    $("#mobil_container").addClass("mobil_c");
    $("#censoreret_container").addClass("censoreret_billede");
    setTimeout(vidersend, 2000);
}


function vidersend() {
    console.log("vidersend billede");
    $("#mobil_container").addClass("mobil_c");
    $("#censoreret_container").removeClass("censoreret_billede");
    $("#mobil_container").addClass("mobil_c");
    $("#knap_container").addClass("vidersend");
    $("#finger_container").addClass("finger_move_up");


}
