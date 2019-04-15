// ================ Variables ================
/* Resources */
var foodAmount = 0;
var woodAmount = 0;
var stoneAmount = 0;

var stats = {
    maxPop: 0,
    currentPop: 0,
    
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
    
    shovelMiner: 0,
    pickaxeMiner: 0,
    chiselMiner: 0,
    
    soldierTotal: 0,
    officerTotal: 0,
    
    clicks: 0
}

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

var name = "";

/* Building Cost */
var tentCost = [20, 15, 5];
var smallHouseCost = [40, 80, 120];
var mediumHouseCost = [60, 150, 200];

/* Army */
var boolHasBarrack = 0;
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

var oficerRanks = [
    "Second Lieutenant",
    "First Lieutenant",
    "Captain", "Major",
    "Lieutenant Colonel",
    "Colonel", "Brigadier General",
    "Major General", "Lieutenant General",
    "General",
    "General of the Army"
];

var soldier = {
    amount: 0,
    n: 0,
    rank: soldierRanks[0],
    gun: 1,
    stamina: 1,
    efficienty: 1
}

// ==================================================================================================================

window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null)
	{
        name = window.prompt("How should I call you? ");
        localStorage.setItem("hasCodeRunBefore", true);
    }
    else load();
    
    updateName();
}
	
// ==================================================================================================================

function timer()
{
	idleTime();
	update();
	
	foodAuto();
	woodAuto();
	stoneAuto();
}

setInterval(timer, 1000);

// Update values
function updateStats()
{
    document.getElementById("clicks").innerHTML = stats.clicks;
    
    document.getElementById("stats1").innerHTML = stats.maxPop;
    document.getElementById("stats2").innerHTML = stats.currentPop;
    
    document.getElementById("stats3").innerHTML = stats.foodTotal;
    document.getElementById("stats4").innerHTML = stats.woodTotal;
    document.getElementById("stats5").innerHTML = stats.stoneTotal;
    
    document.getElementById("stats6").innerHTML = stats.apples;
    document.getElementById("stats7").innerHTML = stats.leather;
    document.getElementById("stats8").innerHTML = stats.iron;
    document.getElementById("stats9").innerHTML = stats.silver;
    document.getElementById("stats10").innerHTML = stats.gold;
    document.getElementById("stats11").innerHTML = stats.coal;
    document.getElementById("stats12").innerHTML = stats.charcoal;
    document.getElementById("stats13").innerHTML = stats.gunpowder;
    
    document.getElementById("stats14").innerHTML = stats.soldierTotal;
    document.getElementById("stats15").innerHTML = stats.officerTotal;
    
    document.getElementById("stats16").innerHTML = stats.shovelFarmer;
    document.getElementById("stats17").innerHTML = stats.hoeFarmer;
    document.getElementById("stats18").innerHTML = stats.axeWoodcutter;
    document.getElementById("stats19").innerHTML = stats.handSawWoodcutter;
    document.getElementById("stats20").innerHTML = stats.pickaxeMiner;
    document.getElementById("stats21").innerHTML = stats.shovelMiner;
    document.getElementById("stats22").innerHTML = stats.chiselMiner;
}

function update()
{
	document.getElementById("totalPopulation").value = maxPopulation;
	document.getElementById("idlePopulation").value = Population;
	
    document.getElementById("food").innerHTML = Math.round((foodAmount*100)/100);
    document.getElementById("wood").innerHTML = Math.round((woodAmount*100)/100);
    document.getElementById("stone").innerHTML = Math.round((stoneAmount*100)/100);
    
    document.getElementById("foodSec").innerHTML = parseFloat(Math.round(((farmer.total * farmer.level) * (1+(farmer.efficienty * farmer.shovel * farmer.hoe)) / 10)*100)/100).toFixed(2) + " /s"; // Food / s - foodEff
    document.getElementById("woodSec").innerHTML = parseFloat(Math.round(((woodcutter.total * woodcutter.level) * (1+(woodcutter.efficienty * woodcutter.axe * woodcutter.handSaw)) / 10) *100)/100).toFixed(2) + " /s"; // Wood / s - woodEff
    document.getElementById("stoneSec").innerHTML = miner.total + " /s"; // Stone / s - stoneEff
    
    document.getElementById("costTent").innerHTML = tentCost[0] + " Food | " + tentCost[1] + " Wood | " + tentCost[2] + " Stone"; // Tent's Cost
    document.getElementById("costSmallHouse").innerHTML = smallHouseCost[0] + " Food | " + smallHouseCost[1] + " Wood | " + smallHouseCost[2] + " Stone"; // SmallHouse's Cost
    document.getElementById("costMediumHouse").innerHTML = mediumHouseCost[0] + " Food | " + mediumHouseCost[1] + " Wood | " + mediumHouseCost[2] + " Stone"; // MediumHouse's Cost
}

function updateExtraRes()
{
    document.getElementById("apples").innerHTML = Math.round((extraRes.apples*100)/100);
    document.getElementById("leather").innerHTML = Math.round((extraRes.leather*100)/100);
    document.getElementById("iron").innerHTML = Math.round((extraRes.iron*100)/100);
    document.getElementById("silver").innerHTML = Math.round((extraRes.silver*100)/100);
    document.getElementById("gold").innerHTML = Math.round((extraRes.gold*100)/100);
    document.getElementById("gunpowder").innerHTML = Math.round((extraRes.gunpowder*100)/100);
    document.getElementById("charcoal").innerHTML = Math.round((extraRes.charcoal*100)/100);
    document.getElementById("coal").innerHTML = Math.round((extraRes.coal*100)/100);
}

function updateWorkers()
{
    document.getElementById("workers").innerHTML = workers; // Workers Available
	document.getElementById("foodWA").innerHTML = farmer.total; // Food Workers Amount
	document.getElementById("woodWA").innerHTML = woodcutter.total; // Wood Workers Amount
	document.getElementById("stoneWA").innerHTML = miner.total; // Stone Workers Amount
}

function updateName()
{
    if(name === "")
	   document.getElementById("name").innerHTML = "This nation has no ruler." + name;
    else document.getElementById("name").innerHTML = "The Ruler of this nation is: " + name;
}

function updateArmy()
{
    if(boolHasBarrack == 0)
        document.getElementById("barrack").disabled = false;
        else document.getElementById("barrack").disable = true;
    
    document.getElementById("soldierMenu1").innerHTML = "Train Soldier";
    document.getElementById("soldierMenu2").innerHTML = "Upgrade Soldiers Rank";
    document.getElementById("soldierMenu3").innerHTML = "Upgrade Gun";
    document.getElementById("soldierMenu4").innerHTML = "Upgrade Stamina";
    
    document.getElementById("soldierNumber").innerHTML = "You currently have: " + soldier.amount + " soldier(s).";
    document.getElementById("soldierRank").innerHTML = "Current soldier's rank: " + soldier.rank + " .";
}

function updateFarmer()
{
    document.getElementById("farmerMenu0").innerHTML = "Upgrade Farmer";
    document.getElementById("farmerMenu1").innerHTML = "Upgrade Shovel";
    document.getElementById("farmerMenu2").innerHTML = "Upgrade Hoe";
    
    document.getElementById("farmerEfficienty").innerHTML = "Farmer's Efficienty: " + farmer.efficienty;
}

// Idle time
function idleTime()
{
	s++;
    if(m >= 60 )
       {
           h++;
           m = 0;
       }
    if(s >= 60)
        {
            m++;     
            s = 0;
        }
    document.getElementById("ore").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("secunde").innerHTML = s;
}

// Update resources from workers
function foodAuto()
{

    foodAmount += (farmer.total * farmer.level) * (1+(farmer.efficienty * farmer.shovel * farmer.hoe)) / 10;
}

function woodAuto()
{
	woodAmount += (woodcutter.total * woodcutter.level) * (1+(woodcutter.efficienty * woodcutter.axe * woodcutter.handSaw)) / 10;
}

function stoneAuto()
{
	stoneAmount += miner.total;

}

// ==============================================
// Gather resources
function increment(name)
{
    var x, y, z;
    
    if(name === "food")
        foodAmount += 1;
    
    if(name === "wood")
        woodAmount += 1;
    
    if(name === "stone")
        stoneAmount += 1;
    
// ----------------------------------
    
    x = Math.random();
    
    y = Math.floor(Math.random() * 10) + 1;
    
    z = Math.floor(Math.random() * 30) + 1;
    
    if(x < extraRes.chance && name === "food")
        if(y == 5)
            extraRes.leather += 1;
    
    if(x < extraRes.chance && name === "wood")
        if(y == 5)
            extraRes.apples += 1;
    
    if(x < extraRes.chance && name === "stone")
        if(z <= 2)
            extraRes.iron += 1;
        else if(z >= 6 && z <= 7)
            extraRes.silver += 1;
        else if(z == 18)
            extraRes.gold +=1 ;
        else if(z >= 9 && z <= 11)
            extraRes.coal += 1;
    
    update();
    updateExtraRes();
}
// ==============================================

// ==============================================
// Build Menu
function buyTent()
{
	if( foodAmount >= tentCost[0] && woodAmount >= tentCost[1] && stoneAmount >= tentCost[2] )
	{
		foodAmount -= tentCost[0];
		woodAmount -= tentCost[1];
        stoneAmount -= tentCost[2];
		maxPopulation += 1;
        
        tentCost[0] *= 2;
        tentCost[1] *= 2;
        tentCost[2] *= 2;
        
		update();
	}
	else alert("Not enough resources.");
}

function buySmallHouse()
{
	if( foodAmount >= smallHouseCost[0] && woodAmount >= smallHouseCost[1] && stoneAmount >= smallHouseCost[2] )
	{
		foodAmount -= smallHouseCost[0];
		woodAmount -= smallHouseCost[1];
		stoneAmount -= smallHouseCost[2];
		maxPopulation += 2;
        
        smallHouseCost[0] *= 2;
        smallHouseCost[1] *= 2;
        smallHouseCost[2] *= 2;
        
		update();
	}
	else alert("Not enough resources.");
}

function buyMediumHouse()
{
	if( foodAmount >= mediumHouseCost[0] && woodAmount >= mediumHouseCost[1] && stoneAmount >= mediumHouseCost[2] )
	{
		foodAmount -= mediumHouseCost[0];
		woodAmount -= mediumHouseCost[1];
		stoneAmount -= mediumHouseCost[2];
		maxPopulation += 3;
        
        mediumHouseCost[0] *= 2;
        mediumHouseCost[1] *= 2;
        mediumHouseCost[2] *= 2;
        
		update();
	}
	else alert("Not enough resources.");
}

function createBarrack()
{
    if( foodAmount >= 1000 && woodAmount >= 1000 && stoneAmount >= 1000)
        {
            foodAmount -= 1000;
            woodAmount -= 1000;
            stoneAmount -= 1000;
            boolHasBarrack = 1;
            update();
            
            document.getElementById("barrack").disabled = true;
        }
    else alert("Not enough resources.");
}
// ==============================================

// ==============================================
//Create workers
function createWorker(x)
{
    if(foodAmount >= 30 && (Population + x) <= maxPopulation)
    {
        workers += x;
        foodAmount = foodAmount - (30*x);
        Population += x;
        updateWorkers();
        update();
    }
    else alert("Not enough Food or houses.");
}

// Hire Workers
function addWorker(x,job)
{	
	//Workers for food
	if( workers >= x && job == "farmer" )
	{
		farmer.total += x;
		workers -= x;
	}
	
	//Workers for wood
	else if( workers >= x && job == "woodcutter" )
	{
		woodcutter.total += x;
		workers -= x;
	}
	
	//Workers for stone
	else if( workers >= x && job == "miner" )
	{
		miner.total += x;
		workers -= x;
	}
	else alert("No workers are available");
    	
	updateWorkers();
}

// Fire Workers
function removeWorker(x,job)
{
	//Workers for food
	if(job == "farmer" && farmer.total >= x)
	{
		farmer.total -= x;
		workers += x;
	}
	
	//Workers for wood
	if(job == "woodcutter" && woodcutter.total >= x)
	{
		woodcutter.total -= x;
		workers += x;
	}
	
	//Workers for stone
	if(job == "miner" && miner.total >= x)
	{
		miner.total -= x;
		workers += x;
	}
	
	updateWorkers();
    update();
}


// ==============================================

// ==============================================
// Options

// Save/Load script
function save()
{
    //alert("Save Complete");
      
    localStorage.setItem("foodAmount",foodAmount); // Save foodAmount
    localStorage.setItem("woodAmount",woodAmount); // Save woodAmount
    localStorage.setItem("stoneAmount",stoneAmount); // Save stoneAmount
	
    localStorage.setItem("workers", workers); // Save number of workers
      
    localStorage.setItem("maxPopulation", maxPopulation); // Save number of maxPopulation
    localStorage.setItem("Population", Population); // Save number of current Population
      
    localStorage.setItem("hours", h); // Save hours
    localStorage.setItem("minutes", m); // Save minutes
    localStorage.setItem("seconds", s); // Save seconds
      
    localStorage.setItem("name", name) //Save name
      
    // Saving Building Costs
    localStorage.setItem("tentCost", JSON.stringify(tentCost));
    localStorage.setItem("smallHouseCost", JSON.stringify(smallHouseCost));
    localStorage.setItem("mediumHouseCost", JSON.stringify(mediumHouseCost));
      
    // Save extra resources + army   
    saveVar1 = {
        extraRes: extraRes,
        soldier: soldier,
        boolHasBarrack: boolHasBarrack,
        boolSoldierMaxRank: boolSoldierMaxRank,
        farmer: farmer,
        woodcutter: woodcutter,
        miner: miner,
        stats: stats
    }
      
    try {
        localStorage.setItem("saveVar1", JSON.stringify(saveVar1));
    } catch(err) {
        console.log("Can not acces localStorage");
    }
}

function load()
{
    //alert("Load Complete");

    foodAmount = localStorage.getItem("foodAmount"); // Load foodAmount
    foodAmount = parseInt(foodAmount);
	
    woodAmount = localStorage.getItem("woodAmount"); // Load woodAmount
    woodAmount = parseInt(woodAmount);
	
    stoneAmount = localStorage.getItem("stoneAmount"); // Load stoneAmount
    stoneAmount = parseInt(stoneAmount);
// ===============================================================================================================
    workers = localStorage.getItem("workers"); // Load number of workers
    workers = parseInt(workers);
// ===============================================================================================================
    maxPopulation = localStorage.getItem("maxPopulation"); // Load number of maxPopulation
    maxPopulation = parseInt(maxPopulation);
      
    Population = localStorage.getItem("Population"); // Load number of current Population
    Population = parseInt(Population);
// ===============================================================================================================
    h = localStorage.getItem("hours");
    h = parseInt(h);
      
    m = localStorage.getItem("minutes");
    m = parseInt(m);
      
    s = localStorage.getItem("seconds");
    s = parseInt(s);
// ===============================================================================================================
    name = localStorage.getItem("name"); // Load name
// ===============================================================================================================
    tentCost = JSON.parse(localStorage.getItem("tentCost"));
    smallHouseCost = JSON.parse(localStorage.getItem("smallHouseCost"));
    mediumHouseCost = JSON.parse(localStorage.getItem("mediumHouseCost"));
      
    var loadVar = {};
    try {
        string1 = localStorage.getItem("saveVar1");
    } catch(err) {
        console.log("Can not acces localStorage");
    }
    
    if(string1)
        {
            loadVar = JSON.parse(string1);
        }
      else console.log("Can not find variables in localStorage");
    
// Loading extraRes
    if(loadVar.extraRes.gunpowder != null) extraRes.gunpowder = loadVar.extraRes.gunpowder;
    if(loadVar.extraRes.apples != null) extraRes.apples = loadVar.extraRes.apples;
    if(loadVar.extraRes.leather != null) extraRes.leather = loadVar.extraRes.leather;
    if(loadVar.extraRes.gold != null) extraRes.gold = loadVar.extraRes.gold;
    if(loadVar.extraRes.silver != null) extraRes.silver = loadVar.extraRes.silver;
    if(loadVar.extraRes.iron != null) extraRes.iron = loadVar.extraRes.iron;
    if(loadVar.extraRes.coal != null) extraRes.coal = loadVar.extraRes.coal;
    if(loadVar.extraRes.charcoal != null) extraRes.charcoal = loadVar.extraRes.charcoal;
// Loading soldier
    if(loadVar.soldier.amount != null) soldier.amount = loadVar.soldier.amount;
    if(loadVar.soldier.n != null) soldier.n = loadVar.soldier.n;
    if(loadVar.soldier.rank != null) soldier.rank = loadVar.soldier.rank;
    if(loadVar.soldier.gun != null) soldier.gun = loadVar.soldier.gun;
    if(loadVar.soldier.efficienty != null) soldier.efficienty = loadVar.soldier.efficienty;
    if(loadVar.soldier.stamina != null) soldier.stamina = loadVar.soldier.stamina;
    if(loadVar.boolHasBarrack != null) boolHasBarrack = loadVar.boolHasBarrack;
    if(loadVar.boolSoldierMaxRank != null) boolSoldierMaxRank = load.boolSoldierMaxRank;
// Loading Farmers, Woodcutter and Miners
    if(loadVar.farmer.total != null) farmer.total = loadVar.farmer.total;
    if(loadVar.farmer.shovel != null) farmer.shovel = loadVar.farmer.shovel;
    if(loadVar.farmer.hoe != null) farmer.hoe = loadVar.farmer.hoe;
    if(loadVar.farmer.level != null) farmer.level = loadVar.farmer.level;
    if(loadVar.farmer.efficienty != null) farmer.efficienty = loadVar.farmer.efficienty;
      //-------------
    if(loadVar.woodcutter.total != null) woodcutter.total = loadVar.woodcutter.total;
    if(loadVar.woodcutter.axe != null) woodcutter.axe = loadVar.woodcutter.axe;
    if(loadVar.woodcutter.handSaw != null) woodcutter.handSaw = loadVar.woodcutter.handSaw;
    if(loadVar.woodcutter.level != null) woodcutter.level = loadVar.woodcutter.level;
    if(loadVar.woodcutter.efficienty != null) woodcutter.efficienty = loadVar.woodcutter.efficienty;
      //-------------
    if(loadVar.miner.total != null) miner.total = loadVar.miner.total;
    if(loadVar.miner.pickaxe != null) miner.pickaxe = loadVar.miner.pickaxe;
    if(loadVar.miner.shovel != null) miner.shovel = loadVar.miner.shovel;
    if(loadVar.miner.chisel != null) miner.chisel = loadVar.miner.chisel;
    if(loadVar.miner.level != null) miner.level = loadVar.miner.level;
    if(loadVar.miner.efficienty != null) miner.efficienty = loadVar.miner.efficienty;
// Loading Stats
    if(loadVar.stats.click != null) stats.clicks = loadVar.stats.clicks;
    if(loadVar.stats.maxPop != null) stats.maxPop = loadVar.stats.maxPop;
    if(loadVar.stats.currentPop != null) stats.currentPop = loadVar.stats.currentPop;
    if(loadVar.stats.foodTotal != null) stats.foodTotal = loadVar.stats.foodTotal;
    if(loadVar.stats.woodTotal != null) stats.woodTotal = loadVar.stats.woodTotal;
    if(loadVar.stats.stoneTotal != null) stats.stoneTotal = loadVar.stats.stoneTotal;
    if(loadVar.stats.gunpowder != null) stats.gunpowder = loadVar.stats.gunpowder;
    if(loadVar.stats.apples != null) stats.apples = loadVar.stats.apples;
    if(loadVar.stats.leather != null) stats.leather = loadVar.stats.leather;
    if(loadVar.stats.gold != null) stats.gold = loadVar.stats.gold;
    if(loadVar.stats.iron != null) stats.iron = loadVar.stats.iron;
    if(loadVar.stats.silver != null) stats.silver = loadVar.stats.silver;
    if(loadVar.stats.coal != null) stats.coal = loadVar.stats.coal;
    if(loadVar.stats.charcoal != null) stats.charcoal = loadVar.stats.charcoal;
    if(loadVar.stats.shovelFarmer != null) stats.shovelFarmer = loadVar.stats.shovelFarmer;
    if(loadVar.stats.hoeFarmer != null) stats.hoeFarmer = loadVar.stats.hoeFarmer;
    if(loadVar.stats.axeWoodcutter != null) stats.axeWoodcutter = loadVar.stats.axeWoodcutter;
    if(loadVar.stats.handSawWoodcutter != null) stats.handSawWoodcutter = loadVar.stats.handSawWoodcutter;
    if(loadVar.stats.shovelMiner != null) stats.shovelMiner = loadVar.stats.shovelMiner;
    if(loadVar.stats.pickaxeMiner != null) stats.pickaxeMiner = loadVar.stats.pickaxeMiner;
    if(loadVar.stats.chiselMiner != null) stats.chiselMiner = loadVar.stats.chiselMiner;
    if(loadVar.stats.soldierTotal != null) stats.soldierTotal = loadVar.stats.soldierTotal;
    if(loadVar.stats.officerTotal != null) stats.officerTotal = loadVar.stats.officerTotal;
      
    if(boolHasBarrack == 1)
        document.getElementById("barrack").disabled = true;
    if(boolSoldierMaxRank == 1)
        document.getElementById("soldierMenu2").disabled = true;

    update();
    updateWorkers();
    updateName();
    updateArmy();
    updateExtraRes();
}
  
 function changeName()
 {
     name = window.prompt("How should I call you? ");
	 updateName();
 }

function reset()
{
    foodAmount = 0;
    woodAmount = 0;
    stoneAmount = 0;
    
    workers = 0;
    farmer = {
        total: 0,
        shovel: 1,
        hoe: 1,
        level: 1,
        efficienty: 1
    }

    woodcutter = {
        total: 0,
        axe: 1,
        handSaw: 1,
        level: 1,
        efficienty: 1
    }

    miner = {
        total: 0,
        pickaxe: 1,
        shovel: 1,
        chisel: 1,
        level: 1,
        efficienty: 1
    }
    
    maxPopulation = 0;
    Population = 0;
	
	tentCost = [20, 15, 5];
	smallHouseCost = [40, 80, 120];
	mediumHouseCost = [60, 150, 200];
    
    localStorage.removeItem("hasCodeRunBefore");
    
    h = 0;
    m = 0;
    s = 0;
    
    boolHasBarrack = 0;
    boolSoldierMaxRank = 0;
    
    soldier = {
        amount: 0,
        n: 0,
        rank: soldierRanks[0],
        gun: 1,
        stamina: 1,
        efficienty: 1
    }
    
    extraRes = {
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
    
    save();
    location.reload();
    
//    changeName();
}


// ==============================================
// Developer Mode
function add(res)
{
    if(res === 'food')
        foodAmount += 100000;
    if(res === 'wood')
        woodAmount += 100000;
    if(res === 'stone')
        stoneAmount += 100000;
    
    if(res === 'extra')
        {
            extraRes.apples += 100;
            extraRes.charcoal += 100;
            extraRes.coal += 100;
            extraRes.iron += 100;
            extraRes.silver += 100;
            extraRes.gold += 100;
            extraRes.gunpowder += 100;
            extraRes.leather += 100;
        }
    updateExtraRes();
    update();
}

// ==============================================
// Test

function autoResources()
{
    
}

/* Soldier Upgrades */
function soldierUpgrade(x)
{
    if(boolHasBarrack == 1)
        switch(x)
            {
                // Train Soldier
                case 1 : if(foodAmount >= 150 && workers >= 1)
                            {
                                foodAmount -= 150;
                                workers -= 1;
                                soldier.amount += 1;
                                update();
                                updateArmy();
                                updateWorkers();
                            }
                            break;
                // Rank Upgrade
                case 2 : if(foodAmount >= (5000 * (1+soldier.n)) && woodAmount >= (5000 * (1+soldier.n)) && stoneAmount >= (5000 * (1+soldier.n)))
                            {
                                soldier.n += 1;
                                soldier.rank = soldierRanks[soldier.n];
                                foodAmount = foodAmount - (5000 * soldier.n);
                                woodAmount = woodAmount - (5000 * soldier.n);
                                stoneAmount = stoneAmount - (5000 * soldier.n);
                                soldier.efficienty += 1;
                                update();
                                updateArmy();
                                
                                
                            }
                        if (soldier.n == 11)
                            {
                                boolSoldierMaxRank = 1;
                                document.getElementById("soldierMenu2").disabled = true;
                            }
                        break;
                // Upgrade Gun
                case 3 : if(extraRes.gunpowder >= 800)
                            {
                                soldier.gun += 1;
                                extraRes.gunpowder -= 800;
                                updateExtraRes();
                                updateArmy();
                            }
                        break;
                case 4 : if(foodAmount >= 300)
                            {
                                foodAmount -= 300;
                                soldier.stamina += 1;
                                update();
                                updateArmy();
                            }
                    
            }
    updateArmy();
}

function farmerUpgrade(x)
{
    switch(x)
        {
            case 0 : if(extraRes.iron >= Math.round((100 * farmer.efficienty)) && extraRes.silver >= Math.round((100 * farmer.efficienty)) && extraRes.gold >= Math.round((100 * farmer.efficienty)))
                        {
                            extraRes.iron -= 100 * farmer.efficienty;
                            extraRes.silver -= 100 * farmer.efficienty;
                            extraRes.gold -= 100 * farmer.efficienty;
                            farmer.efficienty += 1;
                            updateExtraRes();
                            updateFarmer();
                        }
					break;
            // Upgrade Shovel
            case 1 : if(extraRes.iron >= Math.round((15 * farmer.efficienty * farmer.shovel)) && extraRes.silver >= Math.round((10 * farmer.efficienty * farmer.shovel)) && extraRes.gold >= Math.round((5 * farmer.efficienty * farmer.shovel)))
                        {
                            extraRes.iron -= 15 * farmer.efficienty * farmer.shovel;
                            extraRes.silver -= 10 * farmer.efficienty * farmer.shovel;
                            extraRes.gold -= 5 * farmer.efficienty * farmer.shovel;
                            farmer.shovel += 0.2;
                            updateExtraRes();
                            updateFarmer();
                        }
                    break;
            // Upgrade Hoe
            case 2 : if(extraRes.iron >= Math.round((15 * farmer.efficienty * farmer.hoe)) && extraRes.silver >= Math.round((10 * farmer.efficienty * farmer.hoe)) && extraRes.gold >= Math.round((5 * farmer.efficienty * farmer.hoe)))
                        {
                            extraRes.iron -= 15 * farmer.efficienty * farmer.hoe;
                            extraRes.silver -= 10 * farmer.efficienty * farmer.hoe;
                            extraRes.gold -= 5 * farmer.efficienty * farmer.hoe;
                            farmer.hoe += 0.2;
                            updateExtraRes();
                            updateFarmer();
                        }
                    break;
                
        }
    updateFarmer();
}

function costSoldier(x)
{
    switch(x)
    {
        case 1 : document.getElementById("soldierMenu1").innerHTML = "1 Worker Available + 150 Food"; break;
        case 2 : document.getElementById("soldierMenu2").innerHTML = (5000 * (1+soldier.n)) + " Food | " + (5000 * (1+soldier.n)) + " Wood | " + (5000 * (1+soldier.n)) + " Stone"; break;
        case 3 : document.getElementById("soldierMenu3").innerHTML = "800 Gunpowder"; break;
        case 4 : document.getElementById("soldierMenu4").innerHTML = 300 + " Food"; break;
    }
}

function costFarmer(x)
{
    switch(x)
        {
            case 0 : document.getElementById("farmerMenu0").innerHTML = 100*farmer.efficienty + " Iron | " + 100*farmer.efficienty + " Silver | " + 100*farmer.efficienty + " Gold"; break;
            case 1 : document.getElementById("farmerMenu1").innerHTML = Math.round((15 * farmer.efficienty * farmer.shovel)) + " Iron | " + Math.round((10 * farmer.efficienty * farmer.shovel)) + " Silver | " +           Math.round((5 * farmer.efficienty * farmer.shovel)) + " Gold"; break;
            case 2 : document.getElementById("farmerMenu2").innerHTML = Math.round((15 * farmer.efficienty * farmer.hoe)) + " Iron | " + Math.round((10 * farmer.efficienty * farmer.hoe)) + " Silver | " + Math.round((5 * farmer.efficienty * farmer.hoe)) + " Gold"; break;
        }
}

// ==============================================