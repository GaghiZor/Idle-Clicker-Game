// Firebase function
const data = database.collection("users");

var userId = "";

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      userID = user.uid;
    } else {
      // User not logged in or has just logged out.
    }
  });

function saveDB()
{
	data.doc(userID).set({
        name: name,
      // --- Resources ---
        foodAmount: foodAmount,
        woodAmount: woodAmount,
        stoneAmount: stoneAmount,
      // --- Extra Res ---
		    gunpowder: extraRes.gunpowder,
        charcoal: extraRes.charcoal,
        coal: extraRes.coal,
        leather: extraRes.leather,
        gold: extraRes.gold,
        iron: extraRes.iron,
        silver: extraRes.silver,
        apples: extraRes.apples,
        chance: extraRes.chance,
      // --- Stats ---
        foodTotal: stats.foodTotal,
        woodTotal: stats.woodTotal,
        stoneTotal: stats.stoneTotal,
      // ------------------------------------
        statsgunpowder: stats.gunpowder,
        statscharcoal: stats.charcoal,
        statscoal: stats.coal,
        statsleather: stats.leather,
        statsgold: stats.gold,
        statsiron: stats.iron,
        statssilver: stats.silver,
        statsapples: stats.apples,
      // ------------------------------------
        shovelFarmer: stats.shovelFarmer,
        hoeFarmer: stats.hoeFarmer,
      // ------------------------------------
        axeWoodcutter: stats.axeWoodcutter,
        handSawWoodcutter: stats.handSawWoodcutter,
      // ------------------------------------
        pickaxeMiner: stats.pickaxeMiner,
        shovelMiner: stats.shovelMiner,
        chiselMiner: stats.chiselMiner,
      // ------------------------------------
        clicks: stats.clicks,

      // --- Workers ---
        workers: workers,
      //------------------------------------
        farmerTotal: farmer.total,
        farmerShovel: farmer.shovel,
        farmerHoe: farmer.hoe,
        farmerLevel: farmer.level,
        farmerEfficienty: farmer.efficienty,
      // ------------------------------------
        woodcutterTotal: woodcutter.total,
        woodcutterAxe: woodcutter.axe,
        woodcutterHandSaw: woodcutter.handSaw,
        woodcutterLevel: woodcutter.level,
        woodcutterEfficienty: woodcutter.efficienty,
       // ------------------------------------
        minerTotal: miner.total,
        minerPickaxe: miner.pickaxe,
        minerShovel: miner.shovel,
        minerChisel: miner.chisel,
        minerLevel: miner.level,
        minerEfficienty: miner.efficienty,

      // --- Buildings Number
        tent: numberBuilds.tent,
        smallHouse: numberBuilds.smallHouse,
        mediumHouse: numberBuilds.mediumHouse,

      // --- Army ---
        victories: victories,
        defeats: defeats,
        //boolSoldierMaxRank: boolSoldierMaxRank,
        soldierAmount: soldier.amount,
        soldierN: soldier.n,
        soldierRank: soldier.rank,
        soldierGun: soldier.gun,
        soldierStamina: soldier.stamina,
        soldierEfficienty: soldier.efficienty,

      // --- Timer ---
        h: h,
        m: m,
        s: s,

      // --- Population ---
        maxPopulation: maxPopulation,
        Population: Population,

      // --- Booleans ---
        boolHasBarrack: boolHasBarrack,
        boolHasKiln: boolHasKiln,
        boolHasPowdermill: boolHasPowdermill,

      // --- Age ----
        ageProgress: ageProgress,
        ageNumber: ageNumber
    });
	
	alert("Saved to DataBase");
}

function loadDB()
{
	data.doc(userID).get().then(function(doc) {
		if(doc.exists) {
			name = doc.data().name;
      // --- Resources ---
        foodAmount = doc.data().foodAmount;
        woodAmount = doc.data().woodAmount;
        stoneAmount = doc.data().stoneAmount;
      // --- Extra Res ---
		    extraRes.gunpowder = doc.data().gunpowder;
        extraRes.charcoal = doc.data().charcoal;
        extraRes.coal = doc.data().coal;
        extraRes.leather = doc.data().leather;
        extraRes.gold = doc.data().gold;
        extraRes.iron = doc.data().iron;
        extraRes.silver = doc.data().silver;
        extraRes.apples = doc.data().apples;
        extraRes.chance = doc.data().chance;
      // --- Stats ---
        stats.foodTotal = doc.data().foodTotal;
        stats.woodTotal = doc.data().woodTotal;
        stats.stoneTotal = doc.data().stoneTotal;
      // ------------------------------------
        stats.gunpowder = doc.data().statsgunpowder;
        stats.charcoal = doc.data().statscharcoal;
        stats.coal = doc.data().statscoal;
        stats.leather = doc.data().statsleather;
        stats.gold = doc.data().statsgold;
        stats.iron = doc.data().statsiron;
        stats.silver = doc.data().statssilver;
        stats.apples = doc.data().statsapples;
      // ------------------------------------
        stats.shovelFarmer = doc.data().shovelFarmer;
        stats.hoeFarmer = doc.data().hoeFarmer;
      // ------------------------------------
        stats.axeWoodcutter = doc.data().axeWoodcutter;
        stats.handSawWoodcutter = doc.data().handSawWoodcutter;
      // ------------------------------------
        stats.pickaxeMiner = doc.data().pickaxeMiner;
        stats.shovelMiner = doc.data().shovelMiner;
        stats.chiselMiner = doc.data().chiselMiner;
      // ------------------------------------
        stats.clicks = doc.data().clicks;

      // --- Workers ---
        workers = doc.data().workers;
      //------------------------------------
        farmer.total = doc.data().farmerTotal;
        farmer.shovel = doc.data().farmerShovel;
        farmer.hoe = doc.data().farmerHoe;
        farmer.level = doc.data().farmerLevel;
        farmer.efficienty = doc.data().farmerEfficienty;
      // ------------------------------------
        woodcutter.total = doc.data().woodcutterTotal;
        woodcutter.axe = doc.data().woodcutterAxe;
        woodcutter.handSaw = doc.data().woodcutterHandSaw;
        woodcutter.level = doc.data().woodcutterLevel;
        woodcutter.efficienty = doc.data().woodcutterEfficienty;
       // ------------------------------------
        miner.total = doc.data().minerTotal ;
        miner.pickaxe = doc.data().minerPickaxe;
        miner.shovel = doc.data().minerShovel;
        miner.chisel = doc.data().minerChisel;
        miner.level = doc.data().minerLevel;
        miner.efficienty = doc.data().minerEfficienty;

      // --- Buildings Number
        numberBuilds.tent = doc.data().tent;
        numberBuilds.smallHouse = doc.data().smallHouse;
        numberBuilds.mediumHouse = doc.data().mediumHouse;

      // --- Army ---
        victories = doc.data().victories;
        defeats = defeats;
        boolSoldierMaxRank = doc.data().boolSoldierMaxRank;
        soldier.amount = doc.data().soldierAmount;
        soldier.n = doc.data().soldierN;
        soldier.rank = doc.data().soldierRank;
        soldier.gun = doc.data().soldierGun;
        soldier.stamina = doc.data().soldierStamina;
        soldier.efficienty = doc.data().soldierEfficienty;

      // --- Timer ---
        h = doc.data().h;
        m = doc.data().m;
        s = doc.data().s;

      // --- Population ---
        maxPopulation = doc.data().maxPopulation
        Population = doc.data().Population

      // --- Booleans ---
        boolHasBarrack = doc.data().boolHasBarrack;
        boolHasKiln = doc.data().boolHasKiln;
        boolHasPowdermill = doc.data().boolHasPowdermill;

      // --- Age ----
        ageProgress = doc.data().ageProgress;
        ageNumber = doc.data().ageNumber;

        alert("Loaded from DataBase");
        updateAll();
		} else {
			gameLog("No document found in database.");
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});
}