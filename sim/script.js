var helmetStats = document.getElementById("helmetStats");
var chestplateStats = document.getElementById("chestplateStats");
var greavesStats = document.getElementById("greavesStats");
var helmet = document.getElementById("helmet");
var chestplate = document.getElementById("chestplate");
var greaves = document.getElementById("greaves");
var helmetValue = helmet.value;
var chestplateValue = chestplate.value;
var greavesValue = greaves.value;
var setBonus = document.getElementById("setBonus");
var totalDef = document.getElementById("totalDefense");

//Checks whether or not 3 of the same armor set are equipped and updates the set bonus accordingly
function setBonusCheck (){
    if (helmetValue == "wood" && chestplateValue == "wood" && greavesValue == "wood"){
        setBonus.innerHTML = "Set Bonus: +1 Defense"
    }

    else if (helmetValue == "cactus" && chestplateValue == "cactus" && greavesValue == "cactus"){
        setBonus.innerHTML = "Set Bonus: Thorns Effect"
    }

    else if (helmetValue == "iron" && chestplateValue == "iron" && greavesValue == "iron") {
        setBonus.innerHTML = "Set Bonus: +2 Defense"
    }

    else {
        setBonus.innerHTML = " ";
    }
}

//Helmet event logic
helmet.addEventListener("change", function () {
    helmetValue = helmet.value;
  
    if (helmetValue == "wood"){
        helmetStats.innerHTML = "Defense: 1";
    }
   
    else if (helmetValue == "cactus"){
        helmetStats.innerHTML = "Defense: 1";
    }
   
    else if (helmetValue == "iron"){
        helmetStats.innerHTML = "Defense: 2";
    }

    setBonusCheck();
});



//Chestplate event logic
chestplate.addEventListener("change", function () {
    chestplateValue = chestplate.value;
  
    if (chestplateValue == "wood"){
        chestplateStats.innerHTML = "Defense: 1";
    }
   
    else if (chestplateValue == "cactus"){
        chestplateStats.innerHTML = "Defense: 1";
    }
   
    else if (chestplateValue == "iron"){
        chestplateStats.innerHTML = "Defense: 3";
    }

    setBonusCheck();
});



//Greaves event logic
greaves.addEventListener("change", function () {
    greavesValue = greaves.value;
  
    if (greavesValue == "wood"){
        greavesStats.innerHTML = "Defense: 0";
    }
   
    else if (greavesValue == "cactus"){
        greavesStats.innerHTML = "Defense: 1";
    }
   
    else if (greavesValue == "iron"){
        greavesStats.innerHTML = "Defense: 2";
    }

    setBonusCheck();
});