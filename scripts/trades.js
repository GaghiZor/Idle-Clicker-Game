function merchant(ans)
{
    let x = Math.floor(Math.random() * 11) + 1;
    let y = Math.floor(Math.random() * 11) + 1;

    if(x == y)
        {
            if(x == 11)
                x -= 1;
            else x += 1;
        }

    let a = Math.floor(Math.random() * 5000) + 1;
    let b = Math.floor(Math.random() * 50) + 1;

    switch(x)
    {
        // Normal resources ( food, wood, stone)
        case 1 : 
            document.getElementById("playerProduct").innerHTML = " " + a + " Food";
            break;
        case 2 : 
            document.getElementById("playerProduct").innerHTML = " " + a + " Wood";
            break;
        case 3 : 
            document.getElementById("playerProduct").innerHTML = " " + a + " Stone";
            break;

        // Extra resources
        case 4 : 
            document.getElementById("playerProduct").innerHTML = " " + b + " Apples";
            break;
        case 5 : 
            document.getElementById("playerProduct").innerHTML = " " + b + " Leather";
            break;
        case 6 : 
            document.getElementById("playerProduct").innerHTML = " " + b + " Coal";
            break;
        case 7 : 
            document.getElementById("playerProduct").innerHTML = " " + b + " Charcoal";
            break;
        case 8 : 
            document.getElementById("playerProduct").innerHTML = " " + b + " Iron";
            break;
        case 9 : 
            document.getElementById("playerProduct").innerHTML = " " + b + " Silver";
            break;
        case 10 : 
            document.getElementById("playerProduct").innerHTML = " " + b + " Gold";
            break;
        case 11 : 
            document.getElementById("playerProduct").innerHTML = " " + b + " Gunpowder";
            break;
    }

    switch(y)
    {
        // Normal resources ( food, wood, stone)
        case 1 : 
            document.getElementById("merchantProduct").innerHTML = " " + a + " Food";
            break;
        case 2 : 
            document.getElementById("merchantProduct").innerHTML = " " + a + " Wood";
            break;
        case 3 : 
            document.getElementById("merchantProduct").innerHTML = " " + a + " Stone";
            break;

        // Extra resources
        case 4 : 
            document.getElementById("merchantProduct").innerHTML = " " + b + " Apples";
            break;
        case 5 : 
            document.getElementById("merchantProduct").innerHTML = " " + b + " Leather";
            break;
        case 6 : 
            document.getElementById("merchantProduct").innerHTML = " " + b + " Coal";
            break;
        case 7 : 
            document.getElementById("merchantProduct").innerHTML = " " + b + " Charcoal";
            break;
        case 8 : 
            document.getElementById("merchantProduct").innerHTML = " " + b + " Iron";
            break;
        case 9 : 
            document.getElementById("merchantProduct").innerHTML = " " + b + " Silver";
            break;
        case 10 : 
            document.getElementById("merchantProduct").innerHTML = " " + b + " Gold";
            break;
        case 11 : 
            document.getElementById("merchantProduct").innerHTML = " " + b + " Gunpowder";
            break;
    }

    if(ans === "accept")
    {
        stats.tradesAccepted += 1;

        // Player Product
        switch(x)
        {
            // Normal Resources
            case 1 : 
                foodAmount -= a;
                break;
            case 2 : 
                woodAmount -= a;
                break;
            case 3 : 
                stoneAmount -= a;
                break;

            // Extra Resources
            case 4 : 
                extraRes.apples -= a
                break;
            case 5 : 
                extraRes.leather -= a
                break;
            case 6 : 
                extraRes.coal -= a
                break;
            case 7 : 
                extraRes.charcoal -= a
                break;
            case 8 : 
                extraRes.iron -= a
                break;
            case 9 : 
                extraRes.silver -= a
                break;
            case 10 : 
                extraRes.gold -= a
                break;
            case 11 : 
                extraRes.gunpowder -= a
                break;
        }

        // Merchant Product
        switch(y)
        {
            // Normal Resources
            case 1 : 
                foodAmount += b;
                stats.foodTotal += b;
                break;
            case 2 : 
                woodAmount += b;
                stats.woodTotal += b;
                break;
            case 3 : 
                stoneAmount += b;
                stats.stoneTotal += b;
                break;

            // Extra Resources
            case 4 : 
                extraRes.apples += b;
                stats.apples += b;
                break;
            case 5 : 
                extraRes.leather += b;
                stats.leather += b;
                break;
            case 6 : 
                extraRes.coal += b;
                stats.coal += b;
                break;
            case 7 : 
                extraRes.charcoal += b;
                stats.charcoal += b;
                break;
            case 8 : 
                extraRes.iron += b;
                stats.iron += b;
                break;
            case 9 : 
                extraRes.silver += b;
                stats.silver += b;
                break;
            case 10 : 
                extraRes.gold += b;
                stats.gold += b;
                break;
            case 11 : 
                extraRes.gunpowder += b;
                stats.gunpowder += b;
                break;
        }
    }
    else if(ans === "refuse")
        {
            stats.tradesRefused += 1;
        }
    
}

setInterval(merchant, 120000);