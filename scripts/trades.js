var playerProd = 0;
var merchantProd = 0;

function playerProduct()
{
    let x = Math.floor(Math.random() * 11) + 1;
    let a = Math.floor(Math.random() * 5000) + 1;
    let b = Math.floor(Math.random() * 50) + 1;
    
    if(x > 3)
        playerProd = b;
    else playerProd = a;
    
    // Normal resources
    if(x == 1)
    {
        document.getElementById("playerProduct").innerHTML = "You give: " + a + " <span id='playerProductName'>" + "</span>" + "&nbsp;";
        document.getElementById("playerProductName").innerHTML = "Food";
    }
    if(x == 2) 
    {
        document.getElementById("playerProduct").innerHTML = "You give: " + a + " <span id='playerProductName'>" + "</span>" + "&nbsp;";
        document.getElementById("playerProductName").innerHTML = "Wood";
    }
    if(x == 3) 
    {
        document.getElementById("playerProduct").innerHTML = "You give: " + a + " <span id='playerProductName'>" + "</span>" + "&nbsp;";
        document.getElementById("playerProductName").innerHTML = "Stone";
    }

        // Extra resources
    if(x == 4)
    {
        document.getElementById("playerProduct").innerHTML = "You give: " + b + " <span id='playerProductName'>" + "</span>" + "&nbsp;";
        document.getElementById("playerProductName").innerHTML = "Apples";
    }
    if(x == 5) 
    {
        document.getElementById("playerProduct").innerHTML = "You give: " + b + " <span id='playerProductName'>" + "</span>" + "&nbsp;";
        document.getElementById("playerProductName").innerHTML = "Leather";
    }
    if(x == 6)
    {
        document.getElementById("playerProduct").innerHTML = "You give: " + b + " <span id='playerProductName'>" + "</span>" + "&nbsp;";
        document.getElementById("playerProductName").innerHTML = "Coal";
    }
    if(x == 7)
    {   
        document.getElementById("playerProduct").innerHTML = "You give: " + b + " <span id='playerProductName'>" + "</span>" + "&nbsp;";
        document.getElementById("playerProductName").innerHTML = "Charcoal";
    }
    if(x == 8)
    {
        document.getElementById("playerProduct").innerHTML = "You give: " + b + " <span id='playerProductName'>" + "</span>" + "&nbsp;";
        document.getElementById("playerProductName").innerHTML = "Iron";
    }
    if(x == 9) 
    {
        document.getElementById("playerProduct").innerHTML = "You give: " + b + " <span id='playerProductName'>" + "</span>" + "&nbsp;";
        document.getElementById("playerProductName").innerHTML = "Silver";
    }
    if(x == 10) 
    {
        document.getElementById("playerProduct").innerHTML = "You give: " + b + " <span id='playerProductName'>" + "</span>" + "&nbsp;";
        document.getElementById("playerProductName").innerHTML = "Gold";
    }
    if(x == 11)
    {
        document.getElementById("playerProduct").innerHTML = "You give: " + b + " <span id='playerProductName'>" + "</span>" + "&nbsp;";
        document.getElementById("playerProductName").innerHTML = "Gunpowder";
    }
}

function merchantProduct()
{
    let y = Math.floor(Math.random() * 11) + 1;
    let a = Math.floor(Math.random() * 5000) + 1;
    let b = Math.floor(Math.random() * 50) + 1;
    
    if(y > 3)
        merchantProd = b;
    else merchantProd = a;
    
    // Normal resources
    if(y == 1)
    {
        document.getElementById("merchantProduct").innerHTML = "You get: " + a + " <span id='merchantProductName'>" + "</span>";
        document.getElementById("merchantProductName").innerHTML = "Food";
    }
    if(y == 2) 
    {
        document.getElementById("merchantProduct").innerHTML = "You get: " + a + " <span id='merchantProductName'>" + "</span>";
        document.getElementById("merchantProductName").innerHTML = "Wood";
    }
    if(y == 3) 
    {
        document.getElementById("merchantProduct").innerHTML = "You get: " + a + " <span id='merchantProductName'>" + "</span>";
        document.getElementById("merchantProductName").innerHTML = "Stone";
    }

        // Extra resources
    if(y == 4)
    {
        document.getElementById("merchantProduct").innerHTML = "You get: " + b + " <span id='merchantProductName'>" + "</span>";
        document.getElementById("merchantProductName").innerHTML = "Apples";
    }
    if(y == 5) 
    {
        document.getElementById("merchantProduct").innerHTML = "You get: " + b + " <span id='merchantProductName'>" + "</span>";
        document.getElementById("merchantProductName").innerHTML = "Leather";
    }
    if(y == 6)
    {
        document.getElementById("merchantProduct").innerHTML = "You get: " + b + " <span id='merchantProductName'>" + "</span>";
        document.getElementById("merchantProductName").innerHTML = "Coal";
    }
    if(y == 7)
    {   
        document.getElementById("merchantProduct").innerHTML = "You get: " + b + " <span id='merchantProductName'>" + "</span>";
        document.getElementById("merchantProductName").innerHTML = "Charcoal";
    }
    if(y == 8)
    {
        document.getElementById("merchantProduct").innerHTML = "You get: " + b + " <span id='merchantProductName'>" + "</span>";
        document.getElementById("merchantProductName").innerHTML = "Iron";
    }
    if(y == 9) 
    {
        document.getElementById("merchantProduct").innerHTML = "You get: " + b + " <span id='merchantProductName'>" + "</span>";
        document.getElementById("merchantProductName").innerHTML = "Silver";
    }
    if(y == 10) 
    {
        document.getElementById("merchantProduct").innerHTML = "You get: " + b + " <span id='merchantProductName'>" + "</span> " ;
        document.getElementById("merchantProductName").innerHTML = "Gold";
    }
    if(y == 11)
    {
        document.getElementById("merchantProduct").innerHTML = "You get: " + b + " <span id='merchantProductName'>" + "</span>";
        document.getElementById("merchantProductName").innerHTML = "Gunpowder";
    }
}

function merchant()
{
    if(ageNumber >= 2)
    {
        gameLog("A merchant has arrived");
        document.getElementById("merchantHere").innerHTML = "&bull;A merchant has come to your nation and offers you a trade.";

        playerProduct();
        merchantProduct();

        document.getElementById("playerProduct").style.display = "block";
        document.getElementById("merchantProduct").style.display = "block";

        document.getElementById("acceptTrade").style.display = "block";
        document.getElementById("refuseTrade").style.display = "block";
    }
}


function merchantAnswer(ans)
{
    var tradeComplete = 0;
    
    if(ans === "accept")
    {
        
        let playerProdName = $("#playerProductName").text();
        let merchantProdName = $("#merchantProductName").text();
        
        switch(playerProdName)
        {
            // Normal resources
            case "Food" :
                if(foodAmount >= playerProd)
                {
                    foodAmount -= playerProd;
                    tradeComplete = 1;
                }
                break;
            case "Wood" :
                if(woodAmount >= playerProd)
                {
                    woodAmount -= playerProd;
                    tradeComplete = 1;
                }
                break;
            case "Stone" : 
                if(stoneAmount >= playerProd)
                {
                    stoneAmount -= playerProd;
                    tradeComplete = 1;
                }
                break;
            
            // Extra resources
            case "Apples" :
                if(extraRes.apples >= playerProd)
                {
                    extraRes.apples -= playerProd;
                    tradeComplete = 1;
                }
                break;
            case "Leather" :
                if(extraRes.leather >= playerProd)
                {
                    extraRes.leather -= playerProd;
                    tradeComplete = 1;
                }
                break;
            case "Coal" :
                if(extraRes.coal >= playerProd)
                {
                    extraRes.coal -= playerProd;
                    tradeComplete = 1;
                }
                break;
            case "Charcoal" :
                if(extraRes.charcoal >= playerProd)
                {
                    extraRes.charcoal -= playerProd;
                    tradeComplete = 1;
                }
                break;
            case "Iron" :
                if(extraRes.iron >= playerProd)
                {
                    extraRes.iron -= playerProd;
                    tradeComplete = 1;
                }
                break;
            case "Silver" :
                if(extraRes.silver >= playerProd)
                {
                    extraRes.silver -= playerProd;
                    tradeComplete = 1;
                }
                break;
            case "Gold" :
                if(extraRes.gold >= playerProd)
                {
                    extraRes.gold -= playerProd;
                    tradeComplete = 1;
                }
                break;
            case "Gunpowder" :
                if(extraRes.gunpowder >= playerProd)
                {
                    extraRes.gunpowder -= playerProd;
                    tradeComplete = 1;
                }
                break;
        }
        
        switch(merchantProdName)
        {
            // Normal resources
            case "Food" :
                if(foodAmount >= (foodAmount - playerProd) && tradeComplete == 1)
                {
                    foodAmount += merchantProd;
                    stats.foodTotal += merchantProd;
                }
                break;
            case "Wood" :
                if(woodAmount >= (woodAmount - playerProd) && tradeComplete == 1)
                {
                    woodAmount += merchantProd;
                    stats.woodTotal += merchantProd;
                }
                break;
            case "Stone" : 
                if(stoneAmount >= (stoneAmount - playerProd) && tradeComplete == 1)
                {
                    stoneAmount += merchantProd;
                    stats.stoneTotal += merchantProd;
                }
                break;
            
            // Extra resources
            case "Apples" :
                if(extraRes.apples >= (extraRes.apples - playerProd) && tradeComplete == 1)
                {
                    extraRes.apples += merchantProd;
                    stats.apples += merchantProd;
                }
                break;
            case "Leather" :
                if(extraRes.leather >= (extraRes.leather - playerProd) && tradeComplete == 1)
                {
                    extraRes.leather += merchantProd;
                    stats.leather += merchantProd;
                }
                break;
            case "Coal" :
                if(extraRes.coal >= (extraRes.coal - playerProd) && tradeComplete == 1)
                {
                    extraRes.coal += merchantProd;
                    stats.coal += merchantProd;
                }
                break;
            case "Charcoal" :
                if(extraRes.charcoal >= (extraRes.charcoal - playerProd) && tradeComplete == 1)
                {
                    extraRes.charcoal += merchantProd;
                    stats.charcoal += merchantProd;
                }
                break;
            case "Iron" :
                if(extraRes.iron >= (extraRes.iron - playerProd) && tradeComplete == 1)
                {
                    extraRes.iron += merchantProd;
                    stats.iron += merchantProd;
                }
                break;
            case "Silver" :
                if(extraRes.silver >= (extraRes.silver - playerProd) && tradeComplete == 1)
                {
                    extraRes.silver += merchantProd;
                    stats.silver += merchantProd;
                }
                break;
            case "Gold" :
                if(extraRes.gold >= (extraRes.gold - playerProd) && tradeComplete == 1)
                {
                    extraRes.gold += merchantProd;
                    stats.gold += merchantProd;
                }
                break;
            case "Gunpowder" :
                if(extraRes.gunpowder >= (extraRes.gunpowder - playerProd) && tradeComplete == 1)
                {
                    extraRes.gunpowder += merchantProd;
                    stats.gunpowder += merchantProd;
                }
                break;
        }
        
        if(tradeComplete == 1)
        {
            stats.tradesAccepted += 1;

            gameLog("Trade accepted");
            
            document.getElementById("merchantHere").innerHTML = "&bull;Currently there is no merchant in your nation.";

            document.getElementById("playerProduct").style.display = "none";
            document.getElementById("merchantProduct").style.display = "none";

            document.getElementById("acceptTrade").style.display = "none";
            document.getElementById("refuseTrade").style.display = "none";
        }
        else alert("You don't have enough resources.");
        
    }
    else if(ans === "refuse")
        {
            stats.tradesRefused += 1;
            
            gameLog("Trade refused");
            
            document.getElementById("merchantHere").innerHTML = "&bull;Currently there is no merchant in your nation.";

            document.getElementById("playerProduct").style.display = "none";
            document.getElementById("merchantProduct").style.display = "none";

            document.getElementById("acceptTrade").style.display = "none";
            document.getElementById("refuseTrade").style.display = "none";
        }
}

setInterval(merchant, 120000);