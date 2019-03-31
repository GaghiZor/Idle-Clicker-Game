// ================ Variabile ================
/* Resurse */
var foodAmount = 120;
var woodAmount = 100;
var stoneAmount = 0;

/* Muncitori */
var workers = 0;
var foodWorkers = 0;
var woodWorkers = 0;
var stoneWorkers = 0;

/* Populatie */
var maxPopulation = 0;
var Population = 0;

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
	document.getElementById("totalPopulation").value = maxPopulation;
	document.getElementById("idlePopulation").value = Population;
	
    document.getElementById("food").innerHTML = Math.round(foodAmount*100) / 100;
    document.getElementById("wood").innerHTML = Math.round(woodAmount*100) / 100;
    document.getElementById("stone").innerHTML = Math.round(stoneAmount*100) / 100;
	
    document.getElementById("workers").innerHTML = workers; // Numarul de muncitori disponibili
	document.getElementById("foodWA").innerHTML = foodWorkers; // Food Workers Amount
	document.getElementById("woodWA").innerHTML = woodWorkers; // Wood Workers Amount
	document.getElementById("stoneWA").innerHTML = stoneWorkers; // Stone Workers Amount
    
    document.getElementById("foodSec").innerHTML = Math.round((foodWorkers/2) + (Population/4) *100) / 100; // Food pe secunda
    document.getElementById("woodSec").innerHTML = Math.round((woodWorkers/2)*100) / 100; // Food pe secunda
    document.getElementById("stoneSec").innerHTML = Math.round((stoneWorkers/2)*100) / 100; // Food pe secunda
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
    document.getElementById("ore").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("secunde").innerHTML = s;
}

// Actualizare resure primite de la muncitori
function foodAuto()
{
    if(foodWorkers >= 1)
    {
        foodAmount += foodWorkers / 2; // de refacut
    }
    
    if(Population >= 1)
        foodAmount += -(Population / 4);
}

function woodAuto()
{
	woodAmount += woodWorkers / 2;

}

function stoneAuto()
{
	stoneAmount += stoneWorkers / 2;

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
		maxPopulation += 1;
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
		maxPopulation += 2;
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
		maxPopulation += 3;
		update();
	}
	else alert("Not enough resources.");
}
// ----------------------------------------------

// ----------------------------------------------
//Creeaza muncitori
function createWorker(x)
{
    if(foodAmount >= 30 && Population < maxPopulation)
    {
        workers += x;
        foodAmount -= 30;
        Population += x;
        update();
    }
    else alert("Not enough Food or houses.");
}

// Angajeaza muncitori
function addWorker(x,job)
{	
	//Muncitori pentru ferma
	if( workers >= x && job == "farmer" )
	{
		foodWorkers += x;
		workers -= x;
	}
	//else alert("No workers are available");
	
	//Muncitori pentru lemne
	else if( workers >= x && job == "woodcutter" )
	{
		woodWorkers += x;
		workers -= x;
	}
	//else alert("No workers are available");
	
	//Muncitori pentru piatra
	else if( workers >= x && job == "miner" )
	{
		stoneWorkers += x;
		workers -= x;
	}
	else alert("No workers are available");
	
	update();
}


// ----------------------------------------------

// ----------------------------------------------
// Optiuni

// Save/Load script
  function save()
  {
    alert("Game Saved");

    localStorage.setItem("foodAmount",foodAmount); // Salveaza foodAmount
    localStorage.setItem("woodAmount",woodAmount); // Salveaza woodAmount
    localStorage.setItem("stoneAmount",stoneAmount); // Salveaza stoneAmount
	
    localStorage.setItem("foodWorkers",foodWorkers); // Salveaza numarul de muncitori la ferma (foodWorkers)
    localStorage.setItem("woodWorkers",woodWorkers); // Salveaza numarul de taietori de lemne (woodWorkers)
    localStorage.setItem("stoneWorkers",stoneWorkers); // Salveaza numarul mineri (stoneWorkers)
      
    localStorage.setItem("hours", h); // Salveaza Orele
    localStorage.setItem("minutes", m); // Salveaza Minutele
    localStorage.setItem("seconds", s); // Salveaza Secundele
  }
  function load()
  {
    alert("Load Complete");

    foodAmount = localStorage.getItem("foodAmount"); // Incarca foodAmount
    foodAmount = parseInt(foodAmount);
	
    woodAmount = localStorage.getItem("woodAmount"); // Incarca woodAmount
    woodAmount = parseInt(woodAmount);
	
    stoneAmount = localStorage.getItem("stoneAmount"); // Incarca stoneAmount
    stoneAmount = parseInt(stoneAmount);
	
	foodWorkers = localStorage.getItem("foodWorkers"); // Incarca numarul de muncitori de la ferma (foodWorkers)
	foodWorkers = parseInt(foodWorkers);
	
	woodWorkers = localStorage.getItem("woodWorkers"); // Incarca numarul de taietori de lemne (woodWorkers)
	woodWorkers = parseInt(woodWorkers);
	
	stoneWorkers = localStorage.getItem("stoneWorkers"); // Incarca numarul de mineri (stoneWorkers)
	stoneWorkers = parseInt(stoneWorkers);

      
    h = localStorage.getItem("hours");
    h = parseInt(h);
      
    m = localStorage.getItem("minutes");
    m = parseInt(m);
      
    s = localStorage.getItem("seconds");
    s = parseInt(s);

    update();
  }

// Text Shadow




// ----------------------------------------------

// ----------------------------------------------
// Test

// ----------------------------------------------