// ==============================================
// Build Menu
function buyTent()
{
	if( foodAmount >= tentCost[0] && woodAmount >= tentCost[1] && stoneAmount >= tentCost[2] )
	{
        numberBuilds.tent += 1;
        
		foodAmount -= tentCost[0];
		woodAmount -= tentCost[1];
        stoneAmount -= tentCost[2];
		maxPopulation += 1;
        
        tentCost[0] += (numberBuilds.tent * 6) / 3 ;
        tentCost[1] += (numberBuilds.tent * 6) / 3;
        tentCost[2] += (numberBuilds.tent * 6) / 3;
        
        ageProgress += 5;

		updateAll();
	}
	else alert("Not enough resources.");
}

function buySmallHouse()
{
	if( foodAmount >= smallHouseCost[0] && woodAmount >= smallHouseCost[1] && stoneAmount >= smallHouseCost[2] )
	{
        numberBuilds.smallHouse += 1;
        
		foodAmount -= smallHouseCost[0];
		woodAmount -= smallHouseCost[1];
		stoneAmount -= smallHouseCost[2];
		maxPopulation += 2;
        
        smallHouseCost[0] += (numberBuilds.smallHouse * 6) / 3;
        smallHouseCost[1] += (numberBuilds.smallHouse * 6) / 3;
        smallHouseCost[2] += (numberBuilds.smallHouse * 6) / 3;

        ageProgress += 5;
        
		updateAll();
	}
	else alert("Not enough resources.");
}

function buyMediumHouse()
{
	if( foodAmount >= mediumHouseCost[0] && woodAmount >= mediumHouseCost[1] && stoneAmount >= mediumHouseCost[2] )
	{
        numberBuilds.mediumHouse += 1;
        
		foodAmount -= mediumHouseCost[0];
		woodAmount -= mediumHouseCost[1];
		stoneAmount -= mediumHouseCost[2];
		maxPopulation += 3;
        
        mediumHouseCost[0] += (numberBuilds.mediumHouse * 6) / 3;
        mediumHouseCost[1] += (numberBuilds.mediumHouse * 6) / 3;
        mediumHouseCost[2] += (numberBuilds.mediumHouse * 6) / 3;

        ageProgress += 5;
        
		updateAll();
	}
	else alert("Not enough resources.");
}

function createBarrack()
{
    if( foodAmount >= 1000 && woodAmount >= 1000 && stoneAmount >= 1000 && ageNumber >= 2)
        {
            foodAmount -= 1000;
            woodAmount -= 1000;
            stoneAmount -= 1000;
            boolHasBarrack = 1;
            ageProgress += 10;
            updateAll();
            
            document.getElementById("barrack").disabled = true;
            document.getElementById("barrackOwned").innerHTML = "Yes";
        }
    else if(foodAmount < 1000 || woodAmount < 1000 || stoneAmount < 1000)
            alert("Not enough resources.");
    else alert("Unlocked in 'Iron Age'");
}

function createKiln()
{
    if( foodAmount >= 1000 && woodAmount >= 1000 && stoneAmount >= 1000 && ageNumber >= 3)
        {
            foodAmount -= 1000;
            woodAmount -= 1000;
            stoneAmount -= 1000;
            boolHasKiln = 1;
            ageProgress += 10;
            updateAll();
            
            document.getElementById("kiln").disabled = true;
            document.getElementById("kilnOwned").innerHTML = "Yes";
        }
    else if(foodAmount < 1000 || woodAmount < 1000 || stoneAmount < 1000)
            alert("Not enough resources.");
    else alert("Unlocked in 'Middle Ages'");
}

function createPowdermill()
{
    if( foodAmount >= 1000 && woodAmount >= 1000 && stoneAmount >= 1000 && ageNumber >= 4)
        {
            foodAmount -= 1000;
            woodAmount -= 1000;
            stoneAmount -= 1000;
            boolHasPowdermill = 1;
            ageProgress += 10;
            updateAll();
            
            document.getElementById("powdermill").disabled = true;
            document.getElementById("powdermillOwned").innerHTML = "Yes";
        }
    else if(foodAmount < 1000 || woodAmount < 1000 || stoneAmount < 1000)
            alert("Not enough resources.");
    else alert("Unlocked in 'Early Modern Period'");
}
// ==============================================