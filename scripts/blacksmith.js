function farmerUpgrade(x)
{
    switch(x)
        {
            case 0 : if(extraRes.iron >= (100 * farmer.efficienty) && extraRes.silver >= (100 * farmer.efficienty) && extraRes.gold >= (100 * farmer.efficienty))
                        {
                            extraRes.iron -= 100 * farmer.efficienty;
                            extraRes.silver -= 100 * farmer.efficienty;
                            extraRes.gold -= 100 * farmer.efficienty;
                            farmer.efficienty += 1;
                            ageProgress += 2;
                            updateExtraRes();
                            updateFarmer();
                        }
                else alert("Not enough resources.");
					break;
            // Upgrade Shovel
            case 1 : if(extraRes.iron >= Math.round((15 * farmer.efficienty * farmer.shovel)) && extraRes.silver >= Math.round((10 * farmer.efficienty * farmer.shovel)) && extraRes.gold >= Math.round((5 * farmer.efficienty * farmer.shovel)))
                        {
                            extraRes.iron -= 15 * farmer.efficienty * farmer.shovel;
                            extraRes.silver -= 10 * farmer.efficienty * farmer.shovel;
                            extraRes.gold -= 5 * farmer.efficienty * farmer.shovel;
                            farmer.shovel += 0.2;
                            stats.shovelFarmer += 1;
                            ageProgress += 0.5;
                            updateExtraRes();
                            updateFarmer();
                        }
                else alert("Not enough resources.");
                    break;
            // Upgrade Hoe
            case 2 : if(extraRes.iron >= Math.round((15 * farmer.efficienty * farmer.hoe)) && extraRes.silver >= Math.round((10 * farmer.efficienty * farmer.hoe)) && extraRes.gold >= Math.round((5 * farmer.efficienty * farmer.hoe)))
                        {
                            extraRes.iron -= 15 * farmer.efficienty * farmer.hoe;
                            extraRes.silver -= 10 * farmer.efficienty * farmer.hoe;
                            extraRes.gold -= 5 * farmer.efficienty * farmer.hoe;
                            farmer.hoe += 0.2;
                            stats.hoeFarmer += 1;
                            ageProgress += 0.5;
                            updateExtraRes();
                            updateFarmer();
                        }
                else alert("Not enough resources.");
                    break;
                    break;
            // Improve Gathering
            case 3 : if(extraRes.leather >= 20 && foodAmount >= 500 && extraRes.apples >= 10)
                        {
                            extraRes.leather -= 20;
                            extraRes.apples -= 10;
                            foodAmount -= 500;
                            boolCanGetLeather = 1;
                            ageProgress += 0.5;
                            updateAll();
                        }
                else alert("Not enough resources.");
                    break;
                
        }
    updateFarmer();
}

function woodcutterUpgrade(x)
{
    switch(x)
        {
            case 0 : if(extraRes.iron >= (100 * woodcutter.efficienty) && extraRes.silver >= (100 * woodcutter.efficienty) && extraRes.gold >= (100 * woodcutter.efficienty))
                        {
                            extraRes.iron -= 100 * woodcutter.efficienty;
                            extraRes.silver -= 100 * woodcutter.efficienty;
                            extraRes.gold -= 100 * woodcutter.efficienty;
                            woodcutter.efficienty += 1;
                            ageProgress += 0.5;
                            updateExtraRes();
                            updateWoodcutter();
                        }
                else alert("Not enough resources.");
					break;
            // Upgrade Axe
            case 1 : if(extraRes.iron >= Math.round((15 * woodcutter.efficienty * woodcutter.axe)) && extraRes.silver >= Math.round((10 * woodcutter.efficienty * woodcutter.axe)) && extraRes.gold >= Math.round((5 * woodcutter.efficienty * woodcutter.axe)))
                        {
                            extraRes.iron -= 15 * woodcutter.efficienty * woodcutter.axe;
                            extraRes.silver -= 10 * woodcutter.efficienty * woodcutter.axe;
                            extraRes.gold -= 5 * woodcutter.efficienty * woodcutter.axe;
                            woodcutter.axe += 0.2;
                            stats.axeWoodcutter += 1;
                            ageProgress += 0.5;
                            updateExtraRes();
                            updateWoodcutter();
                        }
                else alert("Not enough resources.");
                    break;
            // Upgrade Hand Saw
            case 2 : if(extraRes.iron >= Math.round((15 * woodcutter.efficienty * woodcutter.handSaw)) && extraRes.silver >= Math.round((10 * woodcutter.efficienty * woodcutter.handSaw)) && extraRes.gold >= Math.round((5 * woodcutter.efficienty * woodcutter.handSaw)))
                        {
                            extraRes.iron -= 15 * woodcutter.efficienty * woodcutter.handSaw;
                            extraRes.silver -= 10 * woodcutter.efficienty * woodcutter.handSaw;
                            extraRes.gold -= 5 * woodcutter.efficienty * woodcutter.handSaw;
                            woodcutter.handSaw += 0.2;
                            stats.handSawWoodcutter += 1;
                            ageProgress += 0.5;
                            updateExtraRes();
                            updateWoodcutter();
                        }
                else alert("Not enough resources.");
                    break;
                    break;
            // Improve Chopping Trees
            case 3 : if(extraRes.leather >= 10 && woodAmount >= 500 && extraRes.apples >= 50)
                        {
                            extraRes.leather -= 10;
                            extraRes.apples -= 50;
                            woodAmount -= 500;
                            boolCanGetApple = 1;
                            ageProgress += 0.5;
                            updateAll();
                        }
                else alert("Not enough resources.");
                    break;
        }
    updateWoodcutter();
}

function minerUpgrade(x)
{
    switch(x)
        {
            case 0 : if(extraRes.iron >= (100 * miner.efficienty) && extraRes.silver >= (100 * miner.efficienty) && extraRes.gold >= (100 * miner.efficienty))
                        {
                            extraRes.iron -= 100 * miner.efficienty;
                            extraRes.silver -= 100 * miner.efficienty;
                            extraRes.gold -= 100 * miner.efficienty;
                            miner.efficienty += 1;
                            ageProgress += 0.5;
                            updateExtraRes();
                            updateMiner();
                        }
                else alert("Not enough resources.");
					break;
            // Upgrade Pickaxe
            case 1 : if(extraRes.iron >= Math.round((15 * miner.efficienty * miner.pickaxe)) && extraRes.silver >= Math.round((10 * miner.efficienty * miner.pickaxe)) && extraRes.gold >= Math.round((5 * miner.efficienty * miner.pickaxe)))
                        {
                            extraRes.iron -= 15 * miner.efficienty * miner.pickaxe;
                            extraRes.silver -= 10 * miner.efficienty * miner.pickaxe;
                            extraRes.gold -= 5 * miner.efficienty * miner.pickaxe;
                            miner.pickaxe += 0.2;
                            stats.pickaxeMiner += 1;
                            ageProgress += 0.5;
                            updateExtraRes();
                            updateMiner();
                        }
                else alert("Not enough resources.");
                    break;
            // Upgrade Shovel
            case 2 : if(extraRes.iron >= Math.round((15 * miner.efficienty * miner.shovel)) && extraRes.silver >= Math.round((10 * miner.efficienty * miner.shovel)) && extraRes.gold >= Math.round((5 * miner.efficienty * miner.shovel)))
                        {
                            extraRes.iron -= 15 * miner.efficienty * miner.shovel;
                            extraRes.silver -= 10 * miner.efficienty * miner.shovel;
                            extraRes.gold -= 5 * miner.efficienty * miner.shovel;
                            miner.shovel += 0.2;
                            stats.shovelMiner += 1;
                            ageProgress += 0.5;
                            updateExtraRes();
                            updateMiner();
                        }
                else alert("Not enough resources.");
                    break;
			// Upgrade Chisel
            case 3 : if(extraRes.iron >= Math.round((15 * miner.efficienty * miner.chisel)) && extraRes.silver >= Math.round((10 * miner.efficienty * miner.chisel)) && extraRes.gold >= Math.round((5 * miner.efficienty * miner.chisel)))
                        {
                            extraRes.iron -= 15 * miner.efficienty * miner.chisel;
                            extraRes.silver -= 10 * miner.efficienty * miner.chisel;
                            extraRes.gold -= 5 * miner.efficienty * miner.chisel;
                            miner.chisel += 0.2;
                            stats.chiselMiner += 1;
                            ageProgress += 0.5;
                            updateExtraRes();
                            updateMiner();
                        }
                else alert("Not enough resources.");
                    break;
                    break;
			// Improve Mining
            case 4 : if(extraRes.iron >= 10 && stoneAmount >= 500 && extraRes.gold >= 5)
                        {
                            extraRes.iron -= 10;
                            extraRes.gold -= 5;
                            stoneAmount -= 500;
                            boolCanGetOre = 1;
                            ageProgress += 0.5;
                            updateAll();
                        }
                else alert("Not enough resources.");
                    break;
        }
    updateMiner();
}

function kiln(x)
{
    if(boolHasKiln == 1)
    {
        if(woodAmount >= (5*x) && extraRes.coal >= (1*x))
            {
                woodAmount -= 5 * x;
                extraRes.coal -= 1 * x;
                
                document.getElementById("kilnButton1").disabled = true;
                document.getElementById("kilnButton2").disabled = true;
                document.getElementById("kilnButton3").disabled = true;
                
                let elem = document.getElementById("bar1"); 
                let width = 1;
                let id = setInterval(frame, (10*x));
                function frame() 
                {
                    if(width >= 100) 
                    {
                        clearInterval(id);
                        elem.style.width = 0;
                        
                        extraRes.charcoal += 1 * x;

                        document.getElementById("kilnButton1").disabled = false;
                        document.getElementById("kilnButton2").disabled = false;
                        document.getElementById("kilnButton3").disabled = false;
                    } 
                    else 
                    {
                          width++; 
                          elem.style.width = width + '%'; 
                    }
                }
            }
    }
}

function powdermill(x)
{
    if(boolHasPowdermill == 1)
    {
        if(extraRes.charcoal >= (3*x))
            {
                extraRes.charcoal -= 3 * x;
                
                document.getElementById("powdermillButton1").disabled = true;
                document.getElementById("powdermillButton2").disabled = true;
                document.getElementById("powdermillButton3").disabled = true;
                
                let elem2 = document.getElementById("bar2"); 
                let width2 = 1;
                let id2 = setInterval(frame2, (10*x));
                function frame2()
                {
                    if(width2 >= 100)
                    {
                        clearInterval(id2);
                        elem2.style.width = 0;
                        
                        extraRes.gunpowder += 1 * x;

                        document.getElementById("powdermillButton1").disabled = false;
                        document.getElementById("powdermillButton2").disabled = false;
                        document.getElementById("powdermillButton3").disabled = false;
                    } 
                    else 
                    {
                          width2++; 
                          elem2.style.width = width2 + '%'; 
                    }
                }
            }
    }
}