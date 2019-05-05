function timer()
{
	idleTime();
	update();
    updateStats();
    updateExtraRes();
	
	autoResources();
}

function updateAll()
{
    update();
    updateArmy();
    updateExtraRes();
    updateFarmer();
    updateWoodcutter();
    updateMiner();
    updateWorkers();
    
    updateStats();
    updateName();
}

setInterval(timer, 1000);

// Time Spent
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

// Update values
function updateStats()
{
    document.getElementById("clicks").innerHTML = stats.clicks;
    document.getElementById("victories").innerHTML = victories;
    document.getElementById("defeats").innerHTML = defeats;
    
    document.getElementById("stats1").innerHTML = maxPopulation;
    document.getElementById("stats2").innerHTML = Population;
    
    document.getElementById("stats3").innerHTML = Math.round((stats.foodTotal)*100/100);
    document.getElementById("stats4").innerHTML = Math.round((stats.woodTotal)*100/100);
    document.getElementById("stats5").innerHTML = Math.round((stats.stoneTotal)*100/100);
    
    document.getElementById("stats6").innerHTML = stats.apples;
    document.getElementById("stats7").innerHTML = stats.leather;
    document.getElementById("stats8").innerHTML = stats.iron;
    document.getElementById("stats9").innerHTML = stats.silver;
    document.getElementById("stats10").innerHTML = stats.gold;
    document.getElementById("stats11").innerHTML = stats.coal;
    document.getElementById("stats12").innerHTML = stats.charcoal;
    document.getElementById("stats13").innerHTML = stats.gunpowder;
    
    document.getElementById("stats14").innerHTML = soldier.amount;
    //document.getElementById("stats15").innerHTML = officer.amount;
    
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
    document.getElementById("stoneSec").innerHTML = parseFloat(Math.round(((miner.total * miner.level) * (1+(miner.efficienty * miner.chisel * miner.pickaxe * miner.shovel)) / 10) *100)/100).toFixed(2) + " /s"; // Stone / s - stoneEff
    
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
    else document.getElementById("name").innerHTML = "The Ruler of this nation is " + name;
}

function updateArmy()
{
    if(boolHasBarrack == 0)
        document.getElementById("barrack").disabled = false;
        else document.getElementById("barrack").disable = true;
    
    document.getElementById("soldierCost2a").innerHTML = 5000 * (1+soldier.n) + " Food";
    document.getElementById("soldierCost2b").innerHTML = 5000 * (1+soldier.n) + " Wood";
    document.getElementById("soldierCost2c").innerHTML = 5000 * (1+soldier.n) + " Stone";
    
    document.getElementById("soldierNumber").innerHTML = "You currently have: " + soldier.amount + " soldier(s).";
    document.getElementById("soldierRank").innerHTML = "Current soldier's rank: " + soldier.rank + " .";
}

function updateFarmer()
{
    document.getElementById("farmerCost0a").innerHTML = 100*farmer.efficienty + " Iron";
    document.getElementById("farmerCost0b").innerHTML = 100*farmer.efficienty + " Silver";
    document.getElementById("farmerCost0c").innerHTML = 100*farmer.efficienty + " Gold";
    
    document.getElementById("farmerCost1a").innerHTML = Math.round((15 * farmer.efficienty * farmer.shovel)) + " Iron";      
    document.getElementById("farmerCost1b").innerHTML = Math.round((10 * farmer.efficienty * farmer.shovel)) + " Silver";
    document.getElementById("farmerCost1c").innerHTML = Math.round((5 * farmer.efficienty * farmer.shovel)) + " Gold";
    
    document.getElementById("farmerCost2a").innerHTML = Math.round((15 * farmer.efficienty * farmer.hoe)) + " Iron";      
    document.getElementById("farmerCost2b").innerHTML = Math.round((10 * farmer.efficienty * farmer.hoe)) + " Silver";
    document.getElementById("farmerCost2c").innerHTML = Math.round((5 * farmer.efficienty * farmer.hoe)) + " Gold";
    
    document.getElementById("farmerEff").innerHTML = farmer.efficienty;
}

function updateWoodcutter()
{
    document.getElementById("woodcutterCost0a").innerHTML = 100*woodcutter.efficienty + " Iron";
    document.getElementById("woodcutterCost0b").innerHTML = 100*woodcutter.efficienty + " Silver";
    document.getElementById("woodcutterCost0c").innerHTML = 100*woodcutter.efficienty + " Gold";
    
    document.getElementById("woodcutterCost1a").innerHTML = Math.round((15 * woodcutter.efficienty * woodcutter.axe)) + " Iron";      
    document.getElementById("woodcutterCost1b").innerHTML = Math.round((10 * woodcutter.efficienty * woodcutter.axe)) + " Silver";
    document.getElementById("woodcutterCost1c").innerHTML = Math.round((5 * woodcutter.efficienty * woodcutter.axe)) + " Gold";
    
    document.getElementById("woodcutterCost2a").innerHTML = Math.round((15 * woodcutter.efficienty * woodcutter.handSaw)) + " Iron";      
    document.getElementById("woodcutterCost2b").innerHTML = Math.round((10 * woodcutter.efficienty * woodcutter.handSaw)) + " Silver";
    document.getElementById("woodcutterCost2c").innerHTML = Math.round((5 * woodcutter.efficienty * woodcutter.handSaw)) + " Gold";
    
    document.getElementById("woodcutterEff").innerHTML = woodcutter.efficienty;
}

function updateMiner()
{
    document.getElementById("minerCost0a").innerHTML = 100*miner.efficienty + " Iron";
    document.getElementById("minerCost0b").innerHTML = 100*miner.efficienty + " Silver";
    document.getElementById("minerCost0c").innerHTML = 100*miner.efficienty + " Gold";
    
    document.getElementById("minerCost1a").innerHTML = Math.round((15 * miner.efficienty * miner.pickaxe)) + " Iron";      
    document.getElementById("minerCost1b").innerHTML = Math.round((10 * miner.efficienty * miner.pickaxe)) + " Silver";
    document.getElementById("minerCost1c").innerHTML = Math.round((5 * miner.efficienty * miner.pickaxe)) + " Gold";
    
    document.getElementById("minerCost2a").innerHTML = Math.round((15 * miner.efficienty * miner.shovel)) + " Iron";      
    document.getElementById("minerCost2b").innerHTML = Math.round((10 * miner.efficienty * miner.shovel)) + " Silver";
    document.getElementById("minerCost2c").innerHTML = Math.round((5 * miner.efficienty * miner.shovel)) + " Gold";
	
    document.getElementById("minerCost3a").innerHTML = Math.round((15 * miner.efficienty * miner.chisel)) + " Iron";      
    document.getElementById("minerCost3b").innerHTML = Math.round((10 * miner.efficienty * miner.chisel)) + " Silver";
    document.getElementById("minerCost3c").innerHTML = Math.round((5 * miner.efficienty * miner.chisel)) + " Gold";
    
    document.getElementById("minerEff").innerHTML = miner.efficienty;
}

function updateEvents()
{
    if(boolEnemyAttacks == 0)
    {
        document.getElementById("events").innerHTML = "&bull;Your nation is safe ( for now )";
        document.getElementById("result").innerHTML = "";
    }
}

setInterval(updateEvents, 30000);