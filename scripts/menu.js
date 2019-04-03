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