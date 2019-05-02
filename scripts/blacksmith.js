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
                            updateExtraRes();
                            updateFarmer();
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
                            updateExtraRes();
                            updateWoodcutter();
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
                            updateExtraRes();
                            updateMiner();
                        }
                else alert("Not enough resources.");
                    break;
                
        }
    updateMiner();
}