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

// Update resources from workers
function autoResources()
{
    foodAmount += (farmer.total * farmer.level) * (1+(farmer.efficienty * farmer.shovel * farmer.hoe)) / 10;
    woodAmount += (woodcutter.total * woodcutter.level) * (1+(woodcutter.efficienty * woodcutter.axe * woodcutter.handSaw)) / 10;
    stoneAmount += (miner.total * miner.level) * (1+(miner.efficienty * miner.chisel * miner.pickaxe * miner.shovel)) / 10;
    
    stats.foodTotal += (farmer.total * farmer.level) * (1+(farmer.efficienty * farmer.shovel * farmer.hoe)) / 10;
    stats.woodTotal += (woodcutter.total * woodcutter.level) * (1+(woodcutter.efficienty * woodcutter.axe * woodcutter.handSaw)) / 10;
    stats.stoneTotal += (miner.total * miner.level) * (1+(miner.efficienty * miner.chisel * miner.pickaxe * miner.shovel)) / 10;
}

// ==============================================
// Gather resources
function increment(name)
{
    var x, y, z;
    
    if(name === "food")
    {
        foodAmount += 1;
        stats.foodTotal += 1;
    }
    
    if(name === "wood")
    {
        woodAmount += 1;
        stats.woodTotal += 1;
    }
    
    if(name === "stone")
    {
        stoneAmount += 1;
        stats.stoneTotal += 1;
    }
    
// ----------------------------------
// Obtain extra resources
    x = Math.random();
    
    y = Math.floor(Math.random() * 10) + 1;
    
    z = Math.floor(Math.random() * 30) + 1;
    
    if(x < extraRes.chance && name === "food")
        if(y == 5)
        {
            extraRes.leather += 1;
            stats.leather += 1;
        }
    
    if(x < extraRes.chance && name === "wood")
        if(y == 5)
        {
            extraRes.apples += 1;
            stats.apples += 1;
        }
    
    if(x < extraRes.chance && name === "stone")
        if(z >= 2 && z <= 4)
        {
            extraRes.iron += 1;
            stats.iron += 1;
        }
        else if(z >= 12 && z <= 14)
        {
            extraRes.silver += 1;
            stats.silver += 1;
        }
        else if(z == 27)
        {
            extraRes.gold +=1 ;
            stats.gold += 1;
        }
        else if(z >= 9 && z <= 11)
        {
            extraRes.coal += 1;
            stats.coal += 1;
        }
    
    stats.clicks += 1;
    
    update();
    updateExtraRes();
}
// ==============================================

// ==============================================
//Create workers
function createWorker(x)
{
    if(foodAmount >= (30 * x ) && (Population + x) <= maxPopulation)
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
// ==============================================
// Test


// ==============================================

