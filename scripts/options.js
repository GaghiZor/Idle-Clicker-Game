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
        boolSoldierMaxRank: boolSoldierMaxRank,
        farmer: farmer,
        woodcutter: woodcutter,
        miner: miner,
        stats: stats,
        numberBuilds: numberBuilds,
        
        boolHasBarrack: boolHasBarrack,
        boolHasKiln: boolHasKiln,
        boolHasPowdermill: boolHasPowdermill,
        boolHasBlacksmith: boolHasBlacksmith,
        boolCanGetApple: boolCanGetApple,
        boolCanGetLeather: boolCanGetLeather,
        boolCanGetOre: boolCanGetOre,
        
        victories: victories,
        defeats: defeats,

        ageNumber: ageNumber,
        ageProgress: ageProgress,

        enemy: enemy
    }
      
    try {
        localStorage.setItem("saveVar1", JSON.stringify(saveVar1));
    } catch(err) {
        console.log("Can not acces localStorage");
    }

    gameLog('Saved game in localStorage.');
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
    if(loadVar.stats.tradesAccepted != null) stats.tradesAccepted = loadVar.stats.tradesAccepted;
    if(loadVar.stats.tradesRefused != null) stats.tradesRefused = loadVar.stats.tradesRefused;
// Loading Number of Builds
    if(loadVar.numberBuilds.tent != null) numberBuilds.tent = loadVar.numberBuilds.tent;
    if(loadVar.numberBuilds.smallHouse != null) numberBuilds.smallHouse = loadVar.numberBuilds.smallHouse;
    if(loadVar.numberBuilds.mediumHouse != null) numberBuilds.mediumHouse = loadVar.numberBuilds.mediumHouse;
// Loading for AI
    if(loadVar.victories != null) victories = loadVar.victories;
    if(loadVar.defeats != null) defeats = loadVar.defeats;
    if(loadVar.enemy != null) enemy = loadVar.enemy;

// Loading Age
    if(loadVar.ageNumber != null) ageNumber = loadVar.ageNumber;
    if(loadVar.ageProgress != null) ageProgress = loadVar.ageProgress;
    
      
// Loading Booleans
    if(loadVar.boolHasBarrack != null) boolHasBarrack = loadVar.boolHasBarrack;
    if(loadVar.boolHasKiln != null) boolHasKiln = loadVar.boolHasKiln;
    if(loadVar.boolHasPowdermill != null) boolHasPowdermill = loadVar.boolHasPowdermill;
    if(loadVar.boolHasBlacksmith != null) boolHasBlacksmith = loadVar.boolHasBlacksmith;
    if(loadVar.boolCanGetApple != null) boolCanGetApple = loadVar.boolCanGetApple;
    if(loadVar.boolCanGetLeather != null) boolCanGetLeather = loadVar.boolCanGetLeather;
    if(loadVar.boolCanGetOre != null) boolCanGetOre = loadVar.boolCanGetOre;

    updateAll();
    gameLog("Loaded from localStorage");
}
  
function changeName()
 {
     name = window.prompt("How should I call you? ");
	 updateName();
 }

function reset()
{
    let r = confirm("Are you sure you want to reset EVERYTHING ?");
    if(r == true)
    {
        boolHasBarrack = 0;
        boolHasKiln = 0;
        boolHasPowdermill = 0;
		boolHasBlacksmith = 0;

        boolCanGetLeather = 0;
        boolCanGetApple = 0;
        boolCanGetOre = 0;
        
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
		
		numberBuilds = {
			tent: 0,
			smallHouse: 0,
			mediumHouse: 0
		}
        
        h = 0;
        m = 0;
        s = 0;
        
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
        
        victories = 0;
        defeats = 0;

        ageProgress = 0;
        ageNumber = 0;

        stats = {   
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
		localStorage.removeItem("hasCodeRunBefore");
             
        save();
        saveDB();
        location.reload();
    }
}

function gameLog(message){
	//Not strictly a debug function so much as it is letting the user know when something happens without needing to watch the console.
	var time = '0.00';
		//get the current date, extract the current time in HH.MM format
    	d = new Date();
		if (d.getMinutes() < 10){
			time = d.getHours() + ".0" + d.getMinutes();
		} else {
			time = d.getHours() + "." + d.getMinutes();
		}
		//Check to see if the last message was the same as this one, if so just increment the (xNumber) value
		if (document.getElementById('logM').innerHTML == message){
			logRepeat += 1;
			document.getElementById('log0').innerHTML = '<span id="logT">' + time + ' </span><span id="logM">' + message + '</span><span id="logR"> (x' + logRepeat + ')</span>';
		} else {
			//Reset the (x Number) value
			logRepeat = 1;
			//Go through all the logs in order, moving them down one and successively overwriting them.
			//document.getElementById('log4').innerHTML = document.getElementById('log3').innerHTML;
			//document.getElementById('log3').innerHTML = document.getElementById('log2').innerHTML;
			document.getElementById('log2').innerHTML = document.getElementById('log1').innerHTML;
			//Since ids need to be unique, log1 strips the ids from the log0 elements when copying the contents.
			document.getElementById('log1').innerHTML = '<span>' + document.getElementById('logT').innerHTML + '</span><span>' + document.getElementById('logM').innerHTML + '</span><span>' + document.getElementById('logR').innerHTML + '</span>';
			//creates new contents with new time, message, and x1
			document.getElementById('log0').innerHTML = '<span id="logT">' + time + ' </span><span id="logM">' + message + '</span><span id="logR"> (x' + logRepeat + ')</span>';
		}
}

var menuIconStat = 1;
var menuTextStat = 1;

function menuIcons()
{
    let toogleIcons = document.getElementsByClassName("iconMenu");

    if(menuTextStat == 1)
        for(i = 0; i < toogleIcons.length; i++)
            if(toogleIcons[i].style.display != "none")
                {
                    toogleIcons[i].style.display = "none";
                    document.getElementById("menuIconButton").innerHTML = "Enable Menu Icons";
                    menuIconStat = 0;
                }
            else 
            {
                toogleIcons[i].style.display = "inline";
                document.getElementById("menuIconButton").innerHTML = "Disable Menu Icons";
                menuIconStat = 1;
            }
}

function menuText()
{
    let toogleText = document.getElementsByClassName("textMenu");

    if(menuIconStat == 1)
        for(i = 0; i < toogleText.length; i++)
            if(toogleText[i].style.display != "none")
                {
                    toogleText[i].style.display = "none";
                    document.getElementById("menuTextButton").innerHTML = "Enable Menu Icons";
                    menuTextStat = 0;
                }
            else 
            {
                toogleText[i].style.display = "inline";
                document.getElementById("menuTextButton").innerHTML = "Disable Menu Icons";
                menuTextStat = 1;
            }
}

function autoSave()
{
    save();
}
setInterval(autoSave, 300000);