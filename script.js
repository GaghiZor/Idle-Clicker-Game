// ================ Variabile ================
/* Resurse */
var foodAmount = 0;
var woodAmount = 0;
var stoneAmount = 0;

/* Muncitori */
var foodWorkers = 0;
var woodWorkers = 0;
var stoneWorkers = 0;

/* Populatie */
var totalPopulation = 0;
var idlePopulation = 0;

/* Variabile timer */
var h = 0; // Hours
var m = 0; // Minutes
var s = 0; // Seconds
	
// ----------------------------------------------------------------------------------------------

function timer()
{
	idleTime();
	update();
	
	foodAuto();
	woodAuto();
	stoneAuto();
}

setInterval(timer, 1000);

// Actualizare valori
function update()
{
	document.getElementById("totalPopulation").value = totalPopulation;
	document.getElementById("idlePopulation").value = idlePopulation;
    document.getElementById("food").innerHTML = foodAmount;
    document.getElementById("wood").innerHTML = woodAmount;
    document.getElementById("stone").innerHTML = stoneAmount;
	
	document.getElementById("foodWA").innerHTML = foodWorkers;
	document.getElementById("woodWA").innerHTML = woodWorkers;
	document.getElementById("stoneWA").innerHTML = stoneWorkers;
}

// Timp idle
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
    document.getElementById("ore").innerHTML = h + " hours, ";
    document.getElementById("minute").innerHTML = m + " minutes, ";
    document.getElementById("secunde").innerHTML = s + " seconds.";
}

// Actualizare resure primite de la muncitori
function foodAuto()
{
	foodAmount += foodWorkers;
	if(foodWorkers > 10)
		foodAmount += 5;
}

function woodAuto()
{
	woodAmount += woodWorkers;
	if(woodWorkers > 10)
		woodAmount += 5;
}

function stoneAuto()
{
	stoneAmount += stoneWorkers;
	if(stoneWorkers > 10)
		stoneAmount += 5;
}

// ---------------------------------------------
// Aduna resursele
function getFood()
{
    foodAmount += 1;
    update();
}

function getWood()
{
    woodAmount += 1;
    update();
}

function getStone()
{
    stoneAmount += 1;
    update();
}
// ----------------------------------------------

// ----------------------------------------------
// Build Menu
function buyTent()
{
	if( foodAmount >= 6 && woodAmount >= 3 )
	{
		foodAmount -= 6;
		woodAmount -= 3;
		totalPopulation += 2;
		idlePopulation += 2;
		update();
	}
	else alert("Not enough resources.");
}

function buySmallHouse()
{
	if( foodAmount >= 18 && woodAmount >= 40 && stoneAmount >= 40 )
	{
		foodAmount -= 18;
		woodAmount -= 40;
		stoneAmount -= 40;
		totalPopulation += 6;
		idlePopulation += 6;
		update();
	}
	else alert("Not enough resources.");
}

function buyMediumHouse()
{
	if( foodAmount >= 30 && woodAmount >= 90 && stoneAmount >= 110 )
	{
		foodAmount -= 30;
		woodAmount -= 90;
		stoneAmount -= 110;
		totalPopulation += 10;
		idlePopulation += 10;
		update();
	}
	else alert("Not enough resources.");
}
// ----------------------------------------------

// ----------------------------------------------
// Angajeaza muncitori
function addWorker(x,job)
{	
	//Muncitori pentru ferma
	if( idlePopulation >= x && job == "farmer" )
	{
		foodWorkers += x;
		idlePopulation -= x;
	}
	//else alert("No workers are available");
	
	//Muncitori pentru lemne
	if( idlePopulation >= x && job == "woodcutter" )
	{
		woodWorkers += x;
		idlePopulation -= x;
	}
	//else alert("No workers are available");
	
	//Muncitori pentru piatra
	if( idlePopulation >= x && job == "miner" )
	{
		stoneWorkers += x;
		idlePopulation -= x;
	}
	//else alert("No workers are available");
	
	update();
}

// ----------------------------------------------

// ----------------------------------------------
// Optiuni

// ----------------------------------------------

// ----------------------------------------------
// Test

// ----------------------------------------------