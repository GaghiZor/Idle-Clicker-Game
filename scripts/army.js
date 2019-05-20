/* Soldier Upgrades */
function soldierUpgrade(x)
{
    if(boolHasBarrack == 1)
        switch(x)
            {
                // Train Soldier
                case 1 : if(foodAmount >= 150 && workers >= 1)
                            {
                                foodAmount -= 150;
                                workers -= 1;
                                soldier.amount += 1;
                                update();
                                updateArmy();
                                updateWorkers();
                            }
                    else alert("Not enough resources.");
                            break;
                // Rank Upgrade
                case 2 : if(foodAmount >= (5000 * (1+soldier.n)) && woodAmount >= (5000 * (1+soldier.n)) && stoneAmount >= (5000 * (1+soldier.n)))
                            {
                                soldier.n += 1;
                                soldier.rank = soldierRanks[soldier.n];
                                foodAmount = foodAmount - (5000 * soldier.n);
                                woodAmount = woodAmount - (5000 * soldier.n);
                                stoneAmount = stoneAmount - (5000 * soldier.n);
                                soldier.efficienty += 1;
                                update();
                                updateArmy();
                            }
                    else alert("Not enough resources.");
                        if (soldier.n == 11)
                            {
                                boolSoldierMaxRank = 1;
                                document.getElementById("soldierMenu2").disabled = true;
                            }
                        break;
                // Upgrade Gun
                case 3 : if(extraRes.gunpowder >= 800)
                            {
                                soldier.gun += 1;
                                extraRes.gunpowder -= 800;
                                updateExtraRes();
                                updateArmy();
                            }
                    else alert("Not enough resources.");
                        break;
                case 4 : if(foodAmount >= 300)
                            {
                                foodAmount -= 300;
                                soldier.stamina += 1;
                                update();
                                updateArmy();
                            }
                    else alert("Not enough resources.");
            }
    else alert("You don't own 'Barrack'");
    updateArmy();
}