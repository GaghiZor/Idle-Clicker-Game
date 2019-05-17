var trades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var merchantProduct = [0, 0];

function merchant()
{
    let x = Math.floor(Math.random() * 11) + 1;
    let y = Math.floor(Math.random() * 11) + 1;

    if(x == y)
        {
            if(x == 11)
                x -= 1;
            else x += 1;
        }

    switch(x)
    {
        // Normal resources ( food, wood, stone)
        case 1 : merchantProduct[0] = Math.floor(Math.random() * 5000) + 1; break;
        case 2 : merchantProduct[0] = Math.floor(Math.random() * 5000) + 1; break;
        case 3 : merchantProduct[0] = Math.floor(Math.random() * 5000) + 1; break;
        // Extra resources
        case 4 : merchantProduct[0] = Math.floor(Math.random() * 50) + 1; break;
        case 5 : merchantProduct[0] = Math.floor(Math.random() * 50) + 1; break;
        case 6 : merchantProduct[0] = Math.floor(Math.random() * 50) + 1; break;
        case 7 : merchantProduct[0] = Math.floor(Math.random() * 50) + 1; break;
        case 8 : merchantProduct[0] = Math.floor(Math.random() * 50) + 1; break;
        case 9 : merchantProduct[0] = Math.floor(Math.random() * 50) + 1; break;
        case 10 : merchantProduct[0] = Math.floor(Math.random() * 50) + 1; break;
        case 11 : merchantProduct[0] = Math.floor(Math.random() * 50) + 1; break;
    }

    switch(y)
    {
        // Normal resources ( food, wood, stone)
        case 1 : merchantProduct[1] = Math.floor(Math.random() * 5000) + 1; break;
        case 2 : merchantProduct[1] = Math.floor(Math.random() * 5000) + 1; break;
        case 3 : merchantProduct[1] = Math.floor(Math.random() * 5000) + 1; break;
        // Extra resources
        case 4 : merchantProduct[1] = Math.floor(Math.random() * 50) + 1; break;
        case 5 : merchantProduct[1] = Math.floor(Math.random() * 50) + 1; break;
        case 6 : merchantProduct[1] = Math.floor(Math.random() * 50) + 1; break;
        case 7 : merchantProduct[1] = Math.floor(Math.random() * 50) + 1; break;
        case 8 : merchantProduct[1] = Math.floor(Math.random() * 50) + 1; break;
        case 9 : merchantProduct[1] = Math.floor(Math.random() * 50) + 1; break;
        case 10 : merchantProduct[1] = Math.floor(Math.random() * 50) + 1; break;
        case 11 : merchantProduct[1] = Math.floor(Math.random() * 50) + 1; break;
    }

    if(x == 1)
        {
            foodAmount += merchantProduct[0];
            stats.foodTotal += merchantProduct[0];
        }
    
}

setInterval(merchant, 120000);