// ================ Variables ================
/* Resources */
var foodAmount = 500;
var woodAmount = 500;
var stoneAmount = 500;

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

window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) 
	{
        name = window.prompt("How should I cal you? ");
        localStorage.setItem("hasCodeRunBefore", true);
    }
}
	
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

// Update resources from workers
function foodAuto()
{
    if(foodWorkers >= 1)
    {
        foodAmount += foodWorkers; // de refacut
    }
}

function woodAuto()
{
	woodAmount += woodWorkers;

}

function stoneAuto()
{
	stoneAmount += stoneWorkers;

}

// ---------------------------------------------
// Gather resources
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
//Create workers
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

// Hire Workers
function addWorker(x,job)
{	
	//Workers for food
	if( workers >= x && job == "farmer" )
	{
		foodWorkers += x;
		workers -= x;
	}
	//else alert("No workers are available");
	
	//Workers for wood
	else if( workers >= x && job == "woodcutter" )
	{
		woodWorkers += x;
		workers -= x;
	}
	//else alert("No workers are available");
	
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
}



// ----------------------------------------------

// ----------------------------------------------
// Options

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
  
 function changeName()
 {
	 name = window.prompt("How should I cal you next? ");
	 updateName();
 }


// ----------------------------------------------

// ----------------------------------------------
// Test



// ----------------------------------------------