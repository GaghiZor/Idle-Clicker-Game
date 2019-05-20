// ================ Variables ================
var name = "";

var ageProgress = 0;
var ageNumber = 0;
var ageName = [
    "Stone Age",
    "Bronze Age",
    "Iron Age",
    "Middle Ages",
    "Early Modern Period",
    "Late Modern Period",
    "Contemporary History"
]

/* Booleans */
var boolHasBarrack = 0;
var boolHasKiln = 0;
var boolHasPowdermill = 0;

/* Resources */
var foodAmount = 0;
var woodAmount = 0;
var stoneAmount = 0;

var extraRes = {
    gunpowder: 0,
    charcoal: 0,
    coal: 0,
    leather: 0,
    gold: 0,
    iron: 0,
    silver: 0,
    apples: 0,
    chance: 1
}

/* Stats Tab */
var stats = {   
    foodTotal: 0,
    woodTotal: 0,
    stoneTotal: 0,
    
    gunpowder: 0,
    charcoal: 0,
    coal: 0,
    leather: 0,
    gold: 0,
    iron: 0,
    silver: 0,
    apples: 0,
    
    shovelFarmer: 0,
    hoeFarmer: 0,
    
    axeWoodcutter: 0,
    handSawWoodcutter: 0,
    
    pickaxeMiner: 0,
    shovelMiner: 0,
    chiselMiner: 0,
    
    clicks: 0,
    tradesAccepted: 0,
    tradesRefused: 0
}

/* Workers */
var workers = 0;

var farmer = {
    total: 0,
    shovel: 1,
    hoe: 1,
    level: 1,
    efficienty: 1
}

var woodcutter = {
    total: 0,
    axe: 1,
    handSaw: 1,
    level: 1,
    efficienty: 1
}

var miner = {
    total: 0,
    pickaxe: 1,
    shovel: 1,
    chisel: 1,
    level: 1,
    efficienty: 1
}

/* Population */
var maxPopulation = 0;
var Population = 0;

/* Timer Variables */
var h = 0; // Hours
var m = 0; // Minutes
var s = 0; // Seconds

/* Building Cost */
var tentCost = [20, 15, 5];
var smallHouseCost = [40, 80, 120];
var mediumHouseCost = [60, 150, 200];

var numberBuilds = {
    tent: 0,
    smallHouse: 0,
    mediumHouse: 0
}

/* Army */
var boolSoldierMaxRank = 0;

var soldierRanks = [
    "Private",
    "Private First Class",
    "Specialist",
    "Corporal",
    "Sergeant",
    "Staff Sergeant",
    "Sergeant First Class",
    "Master Sergeant",
    "First Sergeant",
    "Sergeant Major",
    "Command Sergeant Major",
    "Sergeant Major of the Army"
];

var soldier = {
    amount: 0,
    n: 0,
    rank: soldierRanks[0],
    gun: 1,
    stamina: 1,
    efficienty: 1
}