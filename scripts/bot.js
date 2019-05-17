var attack = 0;
var timeToAttack = Math.floor(Math.random() * 5000 + 400);

var victories = 0;
var defeats = 0;

var attackNumbers = 0;

var boolEnemyAttacks = 0;

var enemy = {
    amount: 1,
    health: 1,
    damage: 0.5
}

function canAttack()
{
    if(stats.foodTotal >= 8000 &&
       stats.woodTotal >= 8000 &&
       stats.stoneTotal >= 800)
        attack = 1;
    
    verify();
}

setInterval(canAttack, 5000);

function verify()
{
    if(attack == 1)
    {
        clearInterval(canAttack);
        setInterval(siege, timeToAttack*10000);
    }
}

function siege()
{
    gameLog("Invaders are attacking your land.");
    attackNumbers += 1;
    
    if(soldier.amount >= enemy.amount)
        {
            if(soldier.amount % 2 == 0)
                soldier.amount = soldier.amount / 2;
            else soldier.amount = (soldier.amount - 1) / 2;
            
            enemy.amount += Math.round(soldier.amount / 3);
            enemy.health += 1;
            enemy.damage += 0.5;
            
            victories += 1;
            gameLog("You emerged victorious.");
        }
    else {
        workers += (soldier.amount / 2);
        soldier.amount = 0;
        foodAmount -= (enemy.amount * (soldier.amount+1)) * 10;
        woodAmount -= (enemy.amount * (soldier.amount+1)) * 10;
        stoneAmount -= (enemy.amount * (soldier.amount+1)) * 10;
        
        defeats += 1;
        gameLog("Your army couldn't stop the conquerors.");
    }
}