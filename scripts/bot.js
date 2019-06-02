var victories = 0;
var defeats = 0;

var boolEnemyAttacks = 0;

var enemy = {
    amount: 1,
    health: 0.2,
    damage: 0.2,
    stamina: 0.2
}

var newEnemy = 0;

function siege()
{
    if(ageNumber >= 4)
    {
        gameLog("Invaders are attacking your land.");
        setTimeout(attack, 20000);
    }

}
setInterval(siege, 600000);

function attack()
{
    let x = Math.floor(Math.random() * 10) + 1;
    while(soldier.amount >= enemy.amount || enemy.amount >= soldier.amount)
        {
            if(soldier.amount <= 0)
            {
                soldier.amount = 0;
                newEnemy = 0;

                foodAmount -= enemy.amount * x;
                woodAmount -= enemy.amount * x;
                stoneAmount -= enemy.amount * x;

                defeats += 1;
                gameLog("Your army couldn't stop the conquerors.");
                ageProgress += 1;
                updateAll();
                break;
            }
            
            enemy.health -= soldier.gun;
            soldier.stamina -= enemy.damage;

            if(enemy.health <= 0)
            {
                enemy.amount -= 1;
                enemy.health = enemy.stamina;
            }
            if(soldier.stamina <= 0)
            {
                soldier.amount -= 1;
                soldier.stamina = 0;
                newEnemy += 1;
            }

            if(enemy.amount <= 0)
            {
                enemy.amount = 0;
                enemy.amount += newEnemy + x;
                enemy.health = enemy.stamina + 0.2;
                enemy.stamina = enemy.health;
                enemy.damage += 0.2;
                newEnemy = 0;

                victories += 1;
                gameLog("You emerged victorious.");
                ageProgress += 10;
                updateAll();
                break;
            }
        }
}