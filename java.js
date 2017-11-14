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

    setTimeout(twoHandsIn, 5000);
}

function twoHandsIn() {
    console.log("to hænder ind");

    $("#mobil_container").removeClass("mobil_c");
    $("#mobil_container").removeClass("mobil_c");
    $("#knap_container").removeClass("vidersend");
    $("#finger_container").removeClass("finger_move_up");

    $("#baggrund_one").addClass("baggrund");
    $("#hand_p").addClass("hands_one");
    $("#hand_b").addClass("hand_brun");
    setTimeout(allHands, 5000);
}



function allHands() {
    console.log("alle hænder kommer ind");

    $("#baggrund_one").removeClass("baggrund");
    $("#hand_p").removeClass("hands_one");
    $("#hand_b").removeClass("hand_brun");

    $("#baggrund_two").addClass("baggrund_2");
    $("#forskellig_hand_one").addClass("forskellig_one");
    $("#forskellig_hand_two").addClass("forskellig_two");
    $("#forskellig_hand_tre").addClass("forskellig_tre");
    $("#forskellig_hand_fire").addClass("forskellig_fire");
    setTimeout(vidersendKnap, 5000);
}

function vidersendKnap() {
    console.log("tryk på vidersend knap");

    $("#baggrund_two").removeClass("baggrund_2");
    $("#forskellig_hand_one").removeClass("forskellig_one");
    $("#forskellig_hand_two").removeClass("forskellig_two");
    $("#forskellig_hand_tre").removeClass("forskellig_tre");
    $("#forskellig_hand_fire").removeClass("forskellig_fire");

    $("#vidersend").addClass("v_knap");
    $("#finger_klik").addClass("f_klik");
    setTimeout(laptopIpadIn, 5000);

}

function laptopIpadIn() {
    console.log("laptop kommer ind");

    $("#vidersend").removeClass("v_knap");
    $("#finger_klik").removeClass("f_klik");

    $("#comp").addClass("desktop");
    $("#ipad").addClass("ipad_in");
    $("#ipad").addClass("ipad_in");
    $("#ipad_s").addClass("ipad_in_sort");
    setTimeout(billedeIn, 6000);
}

function billedeIn() {
    console.log("billeder der hører til");
    $("#laptop_billede").addClass("censo_lap");
    $("#ipad_h_billede").addClass("censo_ipad");
    $("#ipad_s_billede").addClass("censo_s_ipad");
    setTimeout(earthCycle, 4000);

}

function earthCycle() {
    console.log("jordklode kommer ind");
    $("#comp").removeClass("desktop");
    $("#ipad").removeClass("ipad_in");
    $("#ipad").removeClass("ipad_in");
    $("#ipad_s").removeClass("ipad_in_sort");
    $("#laptop_billede").removeClass("censo_lap");
    $("#ipad_h_billede").removeClass("censo_ipad");
    $("#ipad_s_billede").removeClass("censo_s_ipad");

    $("#stars").addClass("stars_in");
    $("#earth_sprite").addClass("earth_walkcycle");
    setTimeout(jaEllerNej, 4000);
}

function jaEllerNej() {
    console.log("vil du dele billedet");
    $("#stars").removeClass("stars_in");
    $("#earth_sprite").removeClass("earth_walkcycle");


    $("#hand_del").addClass("hand_del_censo");
    setTimeout(tagValg, 2000);
}


function tagValg() {
    console.log("ja eller nej");

    $("#tekst_del").addClass("del");
    $("#knap_ja").addClass("ja");
    $("#knap_nej").addClass("nej");
    setTimeout(trykJa, 2000);
}

$("#knap_ja").on("click", trykJa);

function trykJa() {
    console.log("valg ja");


}

$("#knap_nej").on("click", trykNej);

function trykNej() {
    console.log("valg nej");


}
