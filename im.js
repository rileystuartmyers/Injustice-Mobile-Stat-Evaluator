var character_chosen = [];
var character_health_initial = [];
var character_damage_initial = [];
var character_rating = [];

var character_health_final = [];
var character_damage_final = [];
var character_rating = [];

const character_dictionary = {
    //// Health, Damage, Rating
    //// Spaces = _ , / = 9
      "Catwoman9Regime":[180,220,"Bronze"],
      "Cyborg":[250,190,"Bronze"],
      "Deathstroke9Insurgency":[200,270,"Bronze"],
      "Green_Arrow9Insurgency":[230,190,"Bronze"],
      "Green_Lantern":[200,260,"Bronze"],
      "Green_Lantern9New_52":[210,270,"Bronze"],
      "Harley_Quinn":[200,200,"Bronze"],
      "Lex_Luthor":[220,220,"Bronze"],
      "Nightwing":[210,210,"Bronze"],
      "Sinestro":[200,260,"Bronze"],
      "Solomon_Grundy9Regime":[260,200,"Bronze"],
      "The_Flash":[180,280,"Bronze"],
      "The_Flash9New_52":[180,280,"Bronze"],
      "Aquaman":[1050,950,"Gold"],
      "Aquaman9Flashpoint":[1250,1350,"Gold"],
      "Aquaman9Injustice_2":[1400,1400,"Gold"],
      "Aquaman9Regime":[1050,800,"Gold"],
      "Ares":[900,1200,"Gold"],
      "Bane":[1000,650,"Gold"],
      "Bane9Arkham_Origins":[1100,1100,"Gold"],
      "Bane9Luchador":[800,1100,"Gold"],
      "Batgirl":[1000,850,"Gold"],
      "Batgirl9Arkham_Knight":[1325,1375,"Gold"],
      "Batgirl9Cassandra_Cain":[950,1150,"Gold"],
      "Batman":[1100,700,"Gold"],
      "Batman9Arkham_Knight":[1300,1200,"Gold"],
      "Batman9Arkham_Origins":[1150,1000,"Gold"],
      "Batman9Batman_Ninja":[1500,1300,"Gold"],
      "Batman9Beyond":[900,850,"Gold"],
      "Batman9Beyond_Animated":[1050,1100,"Gold"],
      "Batman9Blackest_Night":[1000,1250,"Gold"],
      "Batman9Dawn_of_Justice":[1200,1300,"Gold"],
      "Batman9Flashpoint":[1300,1500,"Gold"],
      "Batman9Gaslight":[1400,1400,"Gold"],
      "Batman9Insurgency":[1050,750,"Gold"],
      "Batman9Red_Son":[1000,900,"Gold"],
      "Black_Adam9Kahndaq":[1200,1100,"Gold"],
      "Black_Adam9Regime":[750,750,"Gold"],
      "Catwoman9Ame-Comi":[1400,1200,"Gold"],
      "Catwoman9Arkham_Knight":[1000,1300,"Gold"],
      "Catwoman9Batman_Returns":[850,950,"Gold"],
      "Cyborg9Teen_Titans":[1000,700,"Gold"],
      "Darkseid":[1200,1050,"Gold"],
      "Darkseid9Apokolips":[1400,1100,"Gold"],
      "Deadshot9Arkham_Origins":[1250,1450,"Gold"],
      "Deadshot9Suicide_Squad":[1250,1450,"Gold"],
      "Deathstroke9Arkham_Origins":[1100,850,"Gold"],
      "Deathstroke9Flashpoint":[1360,1240,"Gold"],
      "Deathstroke9Red_Son":[900,950,"Gold"],
      "Doomsday":[1050,850,"Gold"],
      "Doomsday9Blackest_Night":[1400,1050,"Gold"],
      "Doomsday9Containment":[600,700,"Gold"],
      "General_Zod9Man_of_Steel":[1200,800,"Gold"],
      "Green_Arrow9Arrow":[950,900,"Gold"],
      "Green_Arrow9Rebirth":[1350,1300,"Gold"],
      "Green_Lantern9John_Stewart":[950,750,"Gold"],
      "Green_Lantern9Red_Son":[1150,850,"Gold"],
      "Hal_Jordan9Red_Lantern":[1400,950,"Gold"],
      "Hal_Jordan9Yellow_Lantern":[1300,1400,"Gold"],
      "Harley_Quinn9Animated":[900,700,"Gold"],
      "Harley_Quinn9Arkham":[950,900,"Gold"],
      "Harley_Quinn9Arkham_Knight":[1000,1100,"Gold"],
      "Harley_Quinn9Suicide_Squad":[1450,1250,"Gold"],
      "Hawkgirl":[950,900,"Gold"],
      "Hawkgirl9Blackest_Night":[1360,1240,"Gold"],
      "Hawkgirl9Earth_2":[1300,1400,"Gold"],
      "Hawkgirl9Regime":[1000,1150,"Gold"],
      "Jessica_Cruz9Rebirth":[1325,1325,"Gold"],
      "Killer_Croc9Arkham":[1360,1240,"Gold"],
      "Killer_Frost":[1200,850,"Gold"],
      "Killer_Frost9Regime":[1250,700,"Gold"],
      "Lex_Luthor9Krypto":[950,800,"Gold"],
      "Lobo":[1000,850,"Gold"],
      "Lobo9Bounty_Hunter":[950,1250,"Gold"],
      "Lord_Joker9Batman_Ninja":[1300,1500,"Gold"],
      "Martian_Manhunter":[1200,750,"Gold"],
      "Martian_Manhunter9Blackest_Night":[1300,1000,"Gold"],
      "Nightwing9New_52":[950,850,"Gold"],
      "Raven":[1000,1050,"Gold"],
      "Raven9Rebirth":[1350,1300,"Gold"],
      "Raven9Regime":[950,950,"Gold"],
      "Raven9Teen_Titans":[1200,1400,"Gold"],
      "Reverse_Flash":[1000,1000,"Gold"],
      "Scorpion9Klassic":[1200,1400,"Gold"],
      "Scorpion9Mortal_Kombat":[850,950,"Gold"],
      "Scorpion9Mortal_Kombat_X":[1000,1200,"Gold"],
      "Shazam":[1350,950,"Gold"],
      "Sinestro9Antimatter":[1200,1200,"Gold"],
      "Sinestro9Green_Lantern":[950,900,"Gold"],
      "Solomon_Grundy9Boss":[1250,550,"Gold"],
      "Solomon_Grundy9Earth_2":[1300,1100,"Gold"],
      "Solomon_Grundy9Red_Son":[900,800,"Gold"],
      "Static":[1050,1050,"Gold"],
      "Superman":[1200,800,"Gold"],
      "Superman9Blackest_Night":[1425,1375,"Gold"],
      "Superman9Dawn_of_Justice":[1300,1300,"Gold"],
      "Superman9Godfall":[1250,1000,"Gold"],
      "Superman9Injustice_2":[1500,1300,"Gold"],
      "Superman9Man_of_Steel":[1200,800,"Gold"],
      "Superman9New_52":[1500,1300,"Gold"],
      "Superman9Prison":[800,700,"Gold"],
      "Superman9Red_Son":[1100,1000,"Gold"],
      "Superman9Regime":[1100,900,"Gold"],
      "The_Arkham_Knight9Arkham_Knight":[1200,1100,"Gold"],
      "The_Flash9Blackest_Night":[1300,1500,"Gold"],
      "The_Flash9Earth_2":[1350,1350,"Gold"],
      "The_Flash9Elseworld":[750,750,"Gold"],
      "The_Flash9Metahuman":[1200,1200,"Gold"],
      "The_Joker9Arkham_Origins":[850,1150,"Gold"],
      "The_Joker9Insurgency":[850,750,"Gold"],
      "The_Joker9Suicide_Squad":[1350,1350,"Gold"],
      "The_Joker9The_Killing_Joke":[750,950,"Gold"],
      "The_Joker_Unhinged9Suicide_Squad":[1300,1400,"Gold"],
      "Wally_West9Rebirth":[1300,1350,"Gold"],
      "Wonder_Woman9600":[1100,800,"Gold"],
      "Wonder_Woman9Dawn_of_Justice":[1400,1100,"Gold"],
      "Wonder_Woman9New_52":[1200,1300,"Gold"],
      "Wonder_Woman9Red_Son":[1000,900,"Gold"],
      "Wonder_Woman9Regime":[1050,750,"Gold"],
      "Zatanna":[1150,900,"Gold"],
      "Zod":[1200,800,"Gold"],
      "Black_Adam9New_52":[3000,2600,"Metal"],
      "Catwoman9Batman_Ninja":[2700,2900,"Metal"],
      "Nightwing9Batman_Ninja":[2750,2850,"Metal"],
      "Shazam9New_52":[2700,3000,"Metal"],
      "The_Batman_Who_Laughs9Metal":[2800,2800,"Metal"],
      "The_Merciless9Metal":[2900,2700,"Metal"],
      "Bane9Knightfall":[420,470,"Silver"],
      "Bane9Regime":[400,460,"Silver"],
      "Black_Adam":[400,500,"Silver"],
      "Catwoman":[300,400,"Silver"],
      "Cyborg9Regime":[450,370,"Silver"],
      "Deathstroke":[400,460,"Silver"],
      "Doomsday9Regime":[500,400,"Silver"],
      "Green_Arrow":[420,380,"Silver"],
      "Green_Lantern9Regime":[400,450,"Silver"],
      "Harley_Quinn9Insurgency":[320,380,"Silver"],
      "Lex_Luthor9Insurgency":[420,420,"Silver"],
      "Nightwing9Regime":[380,420,"Silver"],
      "Sinestro9Regime":[400,450,"Silver"],
      "Solomon_Grundy":[480,350,"Silver"],
      "The_Flash9Regime":[370,480,"Silver"],
      "The_Joker":[400,470,"Silver"],
      "Wonder_Woman":[460,420,"Silver"]
};

const promotion_bronze_dictionary = {
 
  /// Health Multiplier, Damage Multiplier
  "P0":[1,1],
  "P1":[1.2,1.2],
  "P2":[1.4,1.4],
  "P3":[1.6,1.6],
  "P4":[1.8,1.8],
  "P5":[2,2],
  "P6":[2.2,2.2],
  "P7":[2.4,2.4],
  "P8":[2.6,2.6],
  "P9":[2.8,2.8],
  "P10":[3,3]
 
};

const promotion_silver_dictionary = {
 
  /// Health Multiplier, Damage Multiplier
  "P0":[1,1],
  "P1":[1.4,1.4],
  "P2":[1.8,1.8],
  "P3":[2.2,2.2],
  "P4":[2.6,2.6],
  "P5":[3,3],
  "P6":[3.4,3.4],
  "P7":[3.8,3.8],
  "P8":[4.2,4.2],
  "P9":[4.6,4.6],
  "P10":[5,5]
 
};

const promotion_gold_dictionary = {
 
  /// Health Multiplier, Damage Multiplier
  "P0":[1,1],
  "P1":[1.5,1.5],
  "P2":[2,2],
  "P3":[3,3],
  "P4":[3.6,3.5],
  "P5":[4,4],
  "P6":[4.5,4.5],
  "P7":[5,5],
  "P8":[5.5,5.5],
  "P9":[6,6],
  "P10":[6.5,6.5]
 
};

const promotion_metal_dictionary = {
 
  /// Health Multiplier, Damage Multiplier
  "P0":[1,1],
  "P1":[1.2,1.2],
  "P2":[1.5,1.5],
  "P3":[2.19,2.19],
  "P4":[2.41,2.41],
  "P5":[2.7,2.7],
  "P6":[3.08,3.08],
  "P7":[3.57,3.57]
 
};

const level_multiplier_dictionary = {
 
  "L1":[1.0,1.0],
  "L2":[1.2,1.2],
  "L3":[1.4,1.4],
  "L4":[1.6,1.6],
  "L5":[1.8,1.8],
  "L6":[2.0,2.0],
  "L7":[2.2,2.2],
  "L8":[2.4,2.4],
  "L9":[2.6,2.6],
  "L10":[2.8,2.8],
  "L11":[3.0,2.9],
  "L12":[3.2,3.0],
  "L13":[3.4,3.1],
  "L14":[3.6,3.2],
  "L15":[3.8,3.3],
  "L16":[4.0,3.4],
  "L17":[4.2,3.5],
  "L18":[4.4,3.6],
  "L19":[4.6,3.7],
  "L20":[4.8,3.8],
  "L21":[5.0,3.9],
  "L22":[5.2,4.0],
  "L23":[5.4,4.1],
  "L24":[5.6,4.2],
  "L25":[5.8,4.3],
  "L26":[6.0,4.4],
  "L27":[6.2,4.5],
  "L28":[6.4,4.6],
  "L29":[6.6,4.7],
  "L30":[6.8,4.8],
  "L31":[7.0,4.85],
  "L32":[7.2,4.9],
  "L33":[7.4,4.95],
  "L34":[7.6,5.0],
  "L35":[7.8,5.05],
  "L36":[8.0,5.1],
  "L37":[8.2,5.15],
  "L38":[8.4,5.2],
  "L39":[8.6,5.25],
  "L40":[8.8,5.3],
  "L41":[9.0,5.35],
  "L42":[9.2,5.4],
  "L43":[9.4,5.45],
  "L44":[9.6,5.5],
  "L45":[9.8,5.55],
  "L46":[10.0,5.6],
  "L47":[10.2,5.65],
  "L48":[10.4,5.7],
  "L49":[10.6,5.75],
  "L50":[10.8,5.8],
  "L51":[11.0,5.85],
  "L52":[11.2,5.9],
  "L53":[11.4,5.95],
  "L54":[11.6,6.0],
  "L55":[11.8,6.05],
  "L56":[12.0,6.1],
  "L57":[12.2,6.15],
  "L58":[12.4,6.2],
  "L59":[12.6,6.25],
  "L60":[12.8,6.3]
 
 
};

// health = 0, attack = 1, rating = 2
//var example_output = character_dictionary.Sinestro9Antimatter[0];
// bronze_selection

function onChangeBronze() {
 
  let a = document.getElementById("bronze_selection").value;
  let b = a.replace(/ /g, "_");
  character_chosen = b.replace("/","9");
  character_health_initial = eval('character_dictionary.'+character_chosen+'[0];');
  character_damage_initial = eval('character_dictionary.'+character_chosen+'[1];');
  character_rating = eval('character_dictionary.'+character_chosen+'[2];');
 
  document.getElementById("output").innerHTML = character_chosen;
  document.getElementById("output2").innerHTML = character_health_initial;
  document.getElementById("output3").innerHTML = character_rating;

}


function onChangeSilver() {
 
  let a = document.getElementById("silver_selection").value;
  let b = a.replace(/ /g, "_");
  character_chosen = b.replace("/","9");
  character_health_initial = eval('character_dictionary.'+character_chosen+'[0];');
  character_damage_initial = eval('character_dictionary.'+character_chosen+'[1];');
  character_rating = eval('character_dictionary.'+character_chosen+'[2];');
 
  document.getElementById("output").innerHTML = character_chosen;
  document.getElementById("output2").innerHTML = character_health_initial;
  document.getElementById("output3").innerHTML = character_rating;

}

function onChangeGold() {
 
  let a = document.getElementById("gold_selection").value;
  let b = a.replace(/ /g, "_");
  character_chosen = b.replace("/","9");
  character_health_initial = eval('character_dictionary.'+character_chosen+'[0];');
  character_damage_initial = eval('character_dictionary.'+character_chosen+'[1];');
  character_rating = eval('character_dictionary.'+character_chosen+'[2];');
 
  document.getElementById("output").innerHTML = character_chosen;
  document.getElementById("output2").innerHTML = character_health_initial;
  document.getElementById("output3").innerHTML = character_rating;

}

function onChangeMetal() {
 
  let a = document.getElementById("metal_selection").value;
  let b = a.replace(/ /g, "_");
  character_chosen = b.replace("/","9");
  character_health_initial = eval('character_dictionary.'+character_chosen+'[0];');
  character_damage_initial = eval('character_dictionary.'+character_chosen+'[1];');
  character_rating = eval('character_dictionary.'+character_chosen+'[2];');
 
  document.getElementById("output").innerHTML = character_chosen;
  document.getElementById("output2").innerHTML = character_health_initial;
  document.getElementById("output3").innerHTML = character_rating;

}



document.getElementById("bronze_selection").onchange = onChangeBronze;
document.getElementById("silver_selection").onchange = onChangeSilver;
document.getElementById("gold_selection").onchange = onChangeGold;
document.getElementById("metal_selection").onchange = onChangeMetal;

onChangeBronze();
onChangeSilver();
onChangeGold();
onChangeMetal();
