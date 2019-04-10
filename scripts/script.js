// ================ Variables ================
/* Resources */
var foodAmount = 0;
var woodAmount = 0;
var stoneAmount = 0;

var extraRes = {
    gunpowder: 0,
    leather: 0,
    gold: 0,
    iron: 0,
    silver: 0,
    apples: 0,
    chance: 1
}

/* Workers */
var workers = 0;
var foodWorkers = 0;
var woodWorkers = 0;
var stoneWorkers = 0;

/* Population */
var maxPopulation = 0;
var Population = 0;

/* Timer Variables */
var h = 0; // Hours
var m = 0; // Minutes
var s = 0; // Seconds

var name;

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
        name = window.prompt("How should I cal you? ");
        localStorage.setItem("hasCodeRunBefore", true);
    }
    document.getElementById("name").innerHTML = "The Ruler of this nation is: " + name;
    load();
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
function update()
{
	document.getElementById("totalPopulation").value = maxPopulation;
	document.getElementById("idlePopulation").value = Population;
	
    document.getElementById("food").innerHTML = foodAmount;
    document.getElementById("wood").innerHTML = woodAmount;
    document.getElementById("stone").innerHTML = stoneAmount;
    
    document.getElementById("foodSec").innerHTML = foodWorkers + " /s"; // Food / s - foodEff
    document.getElementById("woodSec").innerHTML = woodWorkers + " /s"; // Wood / s - woodEff
    document.getElementById("stoneSec").innerHTML = stoneWorkers + " /s"; // Stone / s - stoneEff
    
    document.getElementById("costTent").innerHTML = tentCost[0] + " Food | " + tentCost[1] + " Wood | " + tentCost[2] + " Stone"; // Tent's Cost
    document.getElementById("costSmallHouse").innerHTML = smallHouseCost[0] + " Food | " + smallHouseCost[1] + " Wood | " + smallHouseCost[2] + " Stone"; // SmallHouse's Cost
    document.getElementById("costMediumHouse").innerHTML = mediumHouseCost[0] + " Food | " + mediumHouseCost[1] + " Wood | " + mediumHouseCost[2] + " Stone"; // MediumHouse's Cost
}

function updateExtraRes()
{
    document.getElementById("apples").innerHTML = extraRes.apples;
    document.getElementById("leather").innerHTML = extraRes.leather;
    document.getElementById("iron").innerHTML = extraRes.iron;
    document.getElementById("silver").innerHTML = extraRes.silver;
    document.getElementById("gold").innerHTML = extraRes.gold;
    document.getElementById("gunpowder").innerHTML = extraRes.gunpowder;
}

function updateWorkers()
{
    document.getElementById("workers").innerHTML = workers; // Workers Available
	document.getElementById("foodWA").innerHTML = foodWorkers; // Food Workers Amount
	document.getElementById("woodWA").innerHTML = woodWorkers; // Wood Workers Amount
	document.getElementById("stoneWA").innerHTML = stoneWorkers; // Stone Workers Amount
}

function updateName()
{
	document.getElementById("name").innerHTML = "The Ruler of this nation is: " + name;
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

    foodAmount += foodWorkers; // de refacut
}

function woodAuto()
{
	woodAmount += woodWorkers;

}

function stoneAuto()
{
	stoneAmount += stoneWorkers;

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
        if(z <= 5)
            extraRes.iron += 1;
        else if(z >= 6 && z <= 8)
            extraRes.silver += 1;
        else if(z == 18)
            extraRes.gold +=1 ;
    
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
		foodWorkers += x;
		workers -= x;
	}
	
	//Workers for wood
	else if( workers >= x && job == "woodcutter" )
	{
		woodWorkers += x;
		workers -= x;
	}
	
	//Workers for stone
	else if( workers >= x && job == "miner" )
	{
		stoneWorkers += x;
		workers -= x;
	}
	else alert("No workers are available");
    	
	updateWorkers();
}

// Fire Workers
function removeWorker(x,job)
{
	//Workers for food
	if(job == "farmer" && foodWorkers >= x)
	{
		foodWorkers -= x;
		workers += x;
	}
	
	//Workers for wood
	if(job == "woodcutter" && woodWorkers >= x)
	{
		woodWorkers -= x;
		workers += x;
	}
	
	//Workers for stone
	if(job == "miner" && stoneWorkers >= x)
	{
		stoneWorkers -= x;
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
    localStorage.setItem("foodWorkers",foodWorkers); // Save number of farmers (foodWorkers)
    localStorage.setItem("woodWorkers",woodWorkers); // Save number of woodcutter (woodWorkers)
    localStorage.setItem("stoneWorkers",stoneWorkers); // Save number of miners (stoneWorkers)
      
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
        boolSoldierMaxRank: boolSoldierMaxRank
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
      
	foodWorkers = localStorage.getItem("foodWorkers"); // Load number of farmers (foodWorkers)
	foodWorkers = parseInt(foodWorkers);
	
	woodWorkers = localStorage.getItem("woodWorkers"); // Load number of woodcutters (woodWorkers)
	woodWorkers = parseInt(woodWorkers);
	
	stoneWorkers = localStorage.getItem("stoneWorkers"); // Load number of miners (stoneWorkers)
	stoneWorkers = parseInt(stoneWorkers);
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
// Loading soldier
    if(loadVar.soldier.amount != null) soldier.amount = loadVar.soldier.amount;
    if(loadVar.soldier.n != null) soldier.n = loadVar.soldier.n;
    if(loadVar.soldier.rank != null) soldier.rank = loadVar.soldier.rank;
    if(loadVar.soldier.gun != null) soldier.gun = loadVar.soldier.gun;
    if(loadVar.soldier.efficienty != null) soldier.efficienty = loadVar.soldier.efficienty;
    if(loadVar.soldier.stamina != null) soldier.stamina = loadVar.soldier.stamina;
    if(loadVar.boolHasBarrack != null) boolHasBarrack = loadVar.boolHasBarrack;
    if(loadVar.boolSoldierMaxRank != null) boolSoldierMaxRank = load.boolSoldierMaxRank;
      
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
	 name = window.prompt("How should I cal you? ");
	 updateName();
 }

function reset()
{
    foodAmount = 0;
    woodAmount = 0;
    stoneAmount = 0;
    
    workers = 0;
    foodWorkers = 0;
    woodWorkers = 0;
    stoneWorkers = 0;
    
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
        leather: 0,
        gold: 0,
        iron: 0,
        silver: 0,
        apples: 0
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
                case 3 : 
                    
            }
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

// ==============================================