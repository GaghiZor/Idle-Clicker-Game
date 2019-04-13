// Toggle GAME Interface
function tab(x)
{
    switch(x)
        {
            case 'game' :
                document.getElementById("game").style.display = "block";
                
                document.getElementById("army").style.display = "none";
                document.getElementById("blacksmith").style.display = "none";
                document.getElementById("trades").style.display = "none";
                document.getElementById("stats").style.display = "none";
                break;
                
            case 'army' :
                document.getElementById("army").style.display = "block";
                
                document.getElementById("game").style.display = "none";
                document.getElementById("blacksmith").style.display = "none";
                document.getElementById("trades").style.display = "none";
                document.getElementById("stats").style.display = "none";
                break;
                
            case 'blacksmith' :
                document.getElementById("blacksmith").style.display = "block";
                
                document.getElementById("army").style.display = "none";
                document.getElementById("game").style.display = "none";
                document.getElementById("trades").style.display = "none";
                document.getElementById("stats").style.display = "none";
                break;
                
            case 'trades' :
                document.getElementById("trades").style.display = "block";
                
                document.getElementById("army").style.display = "none";
                document.getElementById("blacksmith").style.display = "none";
                document.getElementById("game").style.display = "none";
                document.getElementById("stats").style.display = "none";
                break;
                
            case 'stats' :
                document.getElementById("stats").style.display = "block";
                
                document.getElementById("army").style.display = "none";
                document.getElementById("blacksmith").style.display = "none";
                document.getElementById("trades").style.display = "none";
                document.getElementById("game").style.display = "none";
                break;
                
            default : document.getElementById("game").style.display = "block";;

        }
}

function armyTab(x)
{
    switch(x)
        {
            case 'soldier' :
                document.getElementById("soldierUpgrade").style.display = "block";
                
                document.getElementById("officerUpgrade").style.display = "none";
                break;
                
            case 'officer' :
                document.getElementById("officerUpgrade").style.display = "block";
                
                document.getElementById("soldierUpgrade").style.display = "none";
                break;
        }
}

function blacksmithTab(x)
{
    switch(x)
        {
            case 1 :
                document.getElementById("farmer").style.display = "block";
                
                document.getElementById("woodcutter").style.display = "none";
                document.getElementById("miner").style.display = "none";
                document.getElementById("kiln").style.display = "none";
                document.getElementById("powdermill").style.display = "none";
                break;
            case 2 :
                document.getElementById("woodcutter").style.display = "block";
                
                document.getElementById("farmer").style.display = "none";
                document.getElementById("miner").style.display = "none";
                document.getElementById("kiln").style.display = "none";
                document.getElementById("powdermill").style.display = "none";
                break;
                
            case 3 :
                document.getElementById("miner").style.display = "block";
                
                document.getElementById("farmer").style.display = "none";
                document.getElementById("woodcutter").style.display = "none";
                document.getElementById("kiln").style.display = "none";
                document.getElementById("powdermill").style.display = "none";
                break;
                
            case 4 :
                document.getElementById("kiln").style.display = "block";
                
                document.getElementById("farmer").style.display = "none";
                document.getElementById("miner").style.display = "none";
                document.getElementById("woodcutter").style.display = "none";
                document.getElementById("powdermill").style.display = "none";
                break;
                
            case 5 :
                document.getElementById("powdermill").style.display = "block";
                
                document.getElementById("farmer").style.display = "none";
                document.getElementById("miner").style.display = "none";
                document.getElementById("kiln").style.display = "none";
                document.getElementById("woodcutter").style.display = "none";
                break;
        }
}