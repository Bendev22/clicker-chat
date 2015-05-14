"use strict";

if (!Game) { var Game = {}; }

/*==========
 Variables
 ===========*/

Game.variables = {

    spawnTime : 1200, //1200
    seconds : 0,
    minutes : 0,
    hours : 0,
    autoClicker : 0,
    autoSpeed : 10,
    autoDamage : 1,
    blurDamage : 0,
    focusDamage : 0,
    currentDamage : 0,
    autoAtkCost : 50,
    autoSpdCost : 50,
    autoDps : 0,
    monsterHit : false,
    playerDied : false,
    achievementPopup : false,
    showAchievements : false,
    showAchievementsTwo : false,
    pageRefresh : false,
    upgradesResetTimer : false,
    executeTimer : false,
    cathyTimer : false,
    stopAutoClick : false,
    toggleSettings : false,
    toggleLog : false,
    reduceFont : false,
    hasDonated : false,
    transcend : false,
    monstersUpgrade : false,
    upgradeCounter : 0,

    monsterIds : [
        "greenSlime",
        "redSlime",
        "treeSmall",
        "scorpionSmall",
        "boarSmall",
        "giantSmall",
        "gargoyleSmall",
        "bunnySmall",
        "manaBeast",
        "specterSmall",
        "dragonSmall"
    ],

    monsterNames : [
        "Green Slime",
        "Red Slime",
        "Tree",
        "Scorpion",
        "Boar",
        "Giant",
        "Gargoyle",
        "Bunny",
        "Mana Beast",
        "Specter",
        "Dragon"
    ],

    monsterSprites : [
        "sprites/greenSlime.png",
        "sprites/redSlime.png",
        "sprites/treeSmall.png",
        "sprites/scorpionSmall.png",
        "sprites/boarSmall.png",
        "sprites/giantSmall.png",
        "sprites/gargoyleSmall.png",
        "sprites/bunnySmall.png",
        "sprites/manaBeast.png",
        "sprites/specterSmall.png",
        "sprites/dragonSmall.png",
        "sprites/slimeBoss.png",
        "sprites/BOSS.png",
        "sprites/BOSS.png",
        "sprites/BOSS.png",
        "sprites/BOSS.png",
        "sprites/BOSS.png",
        "sprites/BOSS.png",
        "sprites/BOSS.png",
        "sprites/BOSS.png",
        "sprites/BOSS.png",
        "sprites/BOSS.png"
    ],

    monsterTitles : [ "Boss", "Lord", "King", "Emperor" ],

    monsterLevels : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],

    bossIds : [
        "greenBoss",
        "redBoss",
        "treeBoss",
        "scorpionBoss",
        "boarBoss",
        "giantBoss",
        "gargoyleBoss",
        "bunnyBoss",
        "manaBoss",
        "specterBoss",
        "dragonBoss"
    ],

    mPageIds : [
        "mName",
        "mLevel",
        "mInfoHp",
        "mHpValue",
        "mInfoExp",
        "mInfoAtk",
        "mAtkValue",
        "mCores",
        "mInfoDef",
        "mDefValue",
        "mFlavor"
    ],

    playerIds : [
        "pName",
        "pLevelValue",
        "pExpValue",
        "pExpTotal",
        "pHpValue",
        "pAtkValue",
        "pDefValue",
        "pHpCost",
        "pAtkCost",
        "pDefCost",
        "pCores",
        "cAtkValue",
        "cSpdValue",
        "cDps",
        "atkUpgradeIncrement",
        "cAtkCost",
        "spdUpgradeIncrement",
        "cSpdCost"
    ],

    playerPrefixes : [
        "",
        "",
        "",
        "/",
        "",
        "",
        "",
        "Cost: ",
        "Cost: ",
        "Cost: ",
        "Cores: ",
        "",
        "",
        "DPS: ",
        "",
        "Cost: ",
        "",
        "Cost: "
    ],

    upgradeButtons : [
        "btnHp",
        "btnAtk",
        "btnDef",
        "cathyBtnAtk",
        "cathyBtnSpd"
    ],

    toggleBtns : [
        "toggleMInfo",
        "togglePInfo",
        "toggleSInfo",
        "toggleCInfo"
    ],
    toggleDivs : [
        "monsterInfo",
        "playerInfo",
        "information",
        "upgradeCathy"
    ],

    tooltipSelectors : [
        "aOne",
        "aTwo",
        "aThree",
        "aFour",
        "aFive",
        "aSix",
        "aSeven",
        "aEight",
        "aNine",
        "aTen",
        "aEleven",
        "aTwelve",
        "aThirteen",
        "aFourteen",
        "aFifteen",
        "aSixteen",
        "aSeventeen",
        "aEighteen",
        "aNineteen",
        "aTwenty",
        "aTwentyOne",
        "aTwentyTwo",
        "aTwentyThree",
        "aTwentyFour",
        "aTwentyFive",
        "aTwentySix",
        "aTwentySeven",
        "aTwentyEight",
        "aTwentyNine",
        "aThirty",
        "aThirtyOne",
        "aThirtyTwo"
    ],

    tooltipTitles : [
        "WARM FINGER",
        "SORE HAND",
        "BROKEN MOUSE",
        "SEASONED CLICKER",
        "ALL BY HAND",
        "GUILTY CONSCIOUS",
        "NOT SO BAD",
        "NATURAL AS BREATHING",
        "LOVE IT",
        "ADDICTION",
        "NEED A BELT",
        "BUSTED POCKETS",
        "PANTS ON THE GROUND",
        "THE 1%",
        "EXCLUSIVE MEMBER",
        "BROKEN LOCK",
        "GUILLOTINE MASTER",
        "MODEL CITIZEN",
        "CLEANSE THE LAND",
        "FRESH START",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST"
    ],

    tooltipContents : [
        "Click 4000 times.",
        "Click 7500 times",
        "Click 12000 times",
        "Click 20000 times",
        "Click 35000 times",
        "450 Kills",
        "600 Kills",
        "900 Kills",
        "1500 Kills",
        "2500 Kills",
        "2000 Cores",
        "6000 Cores",
        "30000 Cores",
        "80000 Cores",
        "300000 Cores",
        "Open 20 Chests",
        "Execute 30 Monsters",
        "Gain 20 Levels",
        "Full Extinction",
        "All Achievements",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST"
    ],

    tooltipRewards : [
        "Rewards: +1 Attack",
        "Rewards: +2 Attack",
        "Rewards: +4 Attack",
        "Rewards: +8 Attack",
        "Rewards: +15 Attack",
        "Rewards: +2 Experience Bonus",
        "Rewards: +8 Experience Bonus",
        "Rewards: +12 Experience Bonus",
        "Rewards: +18 Experience Bonus",
        "Rewards: +20 Experience Bonus",
        "Rewards: +4 Cores Bonus",
        "Rewards: +6 Cores Bonus",
        "Rewards: +12 Cores Bonus",
        "Rewards: +20 Cores Bonus",
        "Rewards: +30 Cores Bonus",
        "Rewards: Reduced Chest Health",
        "Rewards: Reduced Execute Timer",
        "Rewards: No Refocus Cores Timer",
        "Rewards: +50 Cathy Attack +50 Cathy Speed",
        "Rewards: ?????", //game reset
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST"
    ]
};

/*==========
 Other
 ===========*/

Game.autoClicker = function (currentMonster) {
    if (!Game.variables.stopAutoClick) {
        //console.log("BLUR DMG: " + Game.variables.blurDamage);
        //currentMonster.monsterHealth -= Game.variables.autoDamage; //original (no onblur)
        //currentMonster.monsterHealth -= Game.variables.currentDamage; //original
        //console.log("damage: " + Math.round(Game.variables.currentDamage));
        currentMonster.monsterHealth -= Math.round(Game.variables.currentDamage);
        Game.healthBar(currentMonster);
        localStorage.setItem('currentmonsterhealth', currentMonster.monsterHealth);
        document.getElementById("mHpValue").innerHTML = currentMonster.monsterHealth;
        if (currentMonster.monsterHealth <= 0) {
            Game.removeMonster(currentMonster);
        }
    }
};

Game.setTooltips = function (which) {
    var title = document.getElementById("aPopupText");
    var description = document.getElementById("aPopupDescription");

    for (var i = 0; i < Game.variables.tooltipSelectors.length; i++) {
        if (which == Game.variables.tooltipSelectors[i]) {
            title.innerHTML = Game.variables.tooltipTitles[i];
            description.innerHTML = Game.variables.tooltipContents[i];
            if (!Game.variables.pageRefresh) { Game.achievementPopup(); }
            $("#"+which).tooltipster('content', $('<span class="aTooltipTitle">'+Game.variables.tooltipTitles[i]+'<br><span class="aTooltipContents">'+Game.variables.tooltipContents[i]+'</span><br><span class="aTooltipRewardComplete">'+Game.variables.tooltipRewards[i]+'</span></span>'));
        }
    }
};

Game.displayStatistics = function () {
    var statisticsIds = [
        "spanClicks",
        "spanKills",
        "spanCores",
        "spanChests",
        "spanExecutes",
        "spanTranscends",
        "spanSuperCores",
        "spanLevels",
        "spanSpawn",
        "spanBonusHp",
        "spanBonusAtk",
        "spanBonusDef",
        "spanBonusExp",
        "spanBonusCores"
    ];

    var playerStatistics = [
        Game.player.totalClicks,
        Game.player.totalKills,
        Game.player.totalCores,
        Game.player.monsterKills.chestSmall,
        Game.player.totalExecutes,
        Game.player.totalTranscends,
        Game.player.superCores,
        Game.player.totalLevels,
        Game.variables.spawnTime,
        Game.player.bonusHp,
        Game.player.bonusAtk,
        Game.player.bonusDef,
        Game.player.bonusExp,
        Game.player.bonusCores
    ];

    for (var i = 0; i < statisticsIds.length; i++) {
        document.getElementById(statisticsIds[i]).innerHTML = playerStatistics[i];
    }
};

//Game.showTime = function () { //for clock -no longer using
//    var now = new Date();
//    var hours = now.getHours();
//    var minutes = now.getMinutes();
//    var seconds = now.getSeconds();
//    var timeValue = "" + ((hours > 12) ? hours - 12 : hours);
//    timeValue  += ((minutes < 10) ? ":0" : ":") + minutes;
//    timeValue  += ((seconds < 10) ? ":0" : ":") + seconds;
//    document.getElementById('playTime').innerHTML = timeValue; //ORIGINAL
//    setTimeout(function() { Game.showTime();}, 1000);
//};

Game.playTime = function () {

    var timer = setInterval(function () { //DONT DECLARE A VAR HERE

        Game.variables.seconds += 1;

        if (Game.variables.seconds >= 60) {
            Game.variables.seconds = 0;
            Game.variables.minutes += 1;
            if (Game.variables.minutes >= 60) {
                Game.variables.minutes = 0;
                Game.variables.hours += 1;
            }
        }

        var timeValue = (Game.variables.hours == 0) ? "" : Game.variables.hours + ":";
        timeValue  += ((Game.variables.minutes < 10) ? "0" : "") + Game.variables.minutes;
        timeValue  += ((Game.variables.seconds < 10) ? ":0" : ":") + Game.variables.seconds;
        document.getElementById('playTime').innerHTML = timeValue;

        Game.save();
    }, 1000);

};

Game.forYou = function () {
    Game.player.currentCores += 250000;
    Game.showPlayerInfo();
};

Game.healthBar = function (currentMonster) {
    document.getElementById("monsterBar").value = currentMonster.monsterHealth;
};

Game.clickCounter = function () {
    document.getElementById('clickCount').innerHTML = Game.player.currentClicks.toString();
};

Game.achievementPopup = function () {
    //find a way to queue this -not that important
    Game.variables.achievementPopup = true;
    $("#achievementPopup").slideDown(200);

    setTimeout(function () {
        $("#achievementPopup").slideUp(200);
    }, 3000);
};

Game.achievements = function () {

    var clicksNeeded = [ 4000, 7500, 12000, 20000, 35000 ]; //4000, 7500, 12000, 20000, 35000
    //var clicksNeeded = [ 1, 2, 3, 4, 5 ]; //for testing
    var clicksRewards = [ 1, 2, 4, 8, 15 ];
    var clicksIds = [ "aOne", "aTwo", "aThree", "aFour", "aFive" ];
    var killsNeeded = [ 450, 600, 900, 1500, 2500 ]; //[ 450, 600, 900, 1500, 2500 ]
    //var killsNeeded = [ 1, 2, 3, 4, 5 ]; //for testing
    var killsRewards = [ 2, 8, 12, 18, 20 ];
    var killsIds = [ "aSix", "aSeven", "aEight", "aNine", "aTen" ];
    var coresNeeded = [ 2000, 6000, 30000, 80000, 300000 ]; //2000, 6000, 30000, 80000, 300000
    //var coresNeeded = [ 1, 2, 3, 4, 5 ]; //for testing
    var coresRewards = [ 4, 6, 12, 20, 30];
    var coresIds = [ "aEleven", "aTwelve", "aThirteen", "aFourteen", "aFifteen" ];

    //clicks
    for (var i = 0; i < clicksNeeded.length; i++) {
        if (Game.player.totalClicks == clicksNeeded[i] && !Game.player.achievements[clicksIds[i]]) {
            //console.log("CLICK ID : " + Game.player.achievements[clicksIds[i]]);
            Game.player.achievements[clicksIds[i]] = true;
            Game.player.bonusAtk += clicksRewards[i];
            Game.player.playerAttack += clicksRewards[i];
            Game.setTooltips(clicksIds[i]);
            Game.player.totalAchievements++;
        }
    }

    //kills
    for (var j = 0; j < killsNeeded.length; j++) {
        if (Game.player.totalKills == killsNeeded[j] && !Game.player.achievements[killsIds[j]]) {
            Game.player.achievements[killsIds[j]] = true;
            Game.player.bonusExp += killsRewards[j];
            Game.setTooltips(killsIds[j]);
            Game.player.totalAchievements++;
        }
    }

    //cores
    for (var k = 0; k < coresNeeded.length; k++) {
        if (Game.player.totalCores >= coresNeeded[k] && !Game.player.achievements[coresIds[k]]) {
            Game.player.achievements[coresIds[k]] = true;
            Game.player.bonusCores += coresRewards[k];
            Game.setTooltips(coresIds[k]);
            Game.player.totalAchievements++;
        }
    }

    if (!Game.player.achievements.aSixteen && Game.player.monsterKills.chestSmall >= 20) {
    //if (!Game.player.achievements.aSixteen && Game.player.monsterKills.chestSmall >= 0) { //for testing
        Game.setTooltips("aSixteen");
        //Game.player.chestBonus = 800; //delete
        Game.player.achievements.aSixteen = true;
        Game.player.totalAchievements++;
    }
    if (!Game.player.achievements.aSeventeen && Game.player.totalExecutes >= 30) { //50
    //if (!Game.player.achievements.aSeventeen && Game.player.totalExecutes >= 1) { //for testing
        Game.setTooltips("aSeventeen");
        Game.player.executeBonus = 10;
        Game.player.achievements.aSeventeen = true;
        Game.player.totalAchievements++;
    }
    if (!Game.player.achievements.aEighteen && Game.player.totalLevels >= 20) {
    //if (!Game.player.achievements.aEighteen && Game.player.totalLevels >= 0) { //for testing
        Game.setTooltips("aEighteen");
        Game.player.achievements.aEighteen = true;
        Game.player.totalAchievements++;
    }
    if (!Game.player.achievements.aNineteen && Game.variables.bossIds.length == 0) {
    //if (!Game.player.achievements.aNineteen && Game.variables.bossIds.length == 11) { //for testing
        console.log("extinct");
        Game.setTooltips("aNineteen");
        Game.player.bonusAutoAtk += 50;
        Game.player.bonusAutoSpd += 50;
        Game.player.achievements.aNineteen = true;
        Game.player.totalAchievements++;
    }
    if (!Game.player.achievements.aTwenty && Game.player.totalAchievements == 19) {
        console.log("19 achievements");
        Game.setTooltips("aTwenty");
        Game.player.achievements.aTwenty = true;
        Game.player.totalAchievements++;
        console.log("total achievements 20 called"); //COMBINE WITH THE IF THAT IS RIGHT DOWN THERE
        //if (Game.cathy.achievementsString == 0) {
        //    //Game.variables.stopAutoClick = true;
        //    Game.cathy.achievementsArray = true;
        //    Game.cathy.talk(null);
        //}
    }
    if (Game.player.totalAchievements == 20 && Game.cathy.achievementsString == 0) { //CHANGE THIS
        console.log("total achievements 20 called");
        if (Game.cathy.achievementsString == 0) {
            Game.variables.stopAutoClick = true;
            Game.cathy.achievementsArray = true;
            Game.cathy.talk(null);
        }
    }

    //if (!Game.player.achievements.aTwentyOne) {
    //    Game.setTooltips("aTwentyOne");
    //    Game.player.achievements.aTwentyOne = true;
    //    Game.player.totalAchievementsTwo++;
    //}
    //more clicks, kills, cores
    //100 total levels
    //number of duels
    //total levels
    //kill supreme god

    document.getElementById("aCount").innerHTML = String(Game.player.totalAchievements + "/20");
    Game.showPlayerInfo();

    //change opacity
    var which;
    for (var elements in Game.player.achievements) {
        if (Game.player.achievements.hasOwnProperty(elements)) {
            if (Game.player.achievements[elements] == false) {
                which = document.getElementById(elements);
                which.style.opacity = 0.2;
            } else {
                which = document.getElementById(elements);
                which.style.opacity = 1;
            }
        }
    }
    Game.save();
};

Game.toggle = {

    achievements : function (event) {

        var which = document.getElementById(event.target.id);

        if (!Game.variables.showAchievements && which.id == "toggleAchievements") {
            document.getElementById("achievementWindow").style.display = "inherit";
            Game.variables.showAchievements = true;
        } else {
            document.getElementById("achievementWindow").style.display = "none";
            Game.variables.showAchievements = false;
        }

        if (!Game.variables.showAchievementsTwo && which.id == "toggleAchievementsTwo") {
            document.getElementById("achievementWindowTwo").style.display = "inherit";
            Game.variables.showAchievementsTwo = true;
        } else {
            document.getElementById("achievementWindowTwo").style.display = "none";
            Game.variables.showAchievementsTwo = false;
        }
    },

    auto : function () {
        if (!Game.variables.stopAutoClick) {
            Game.variables.stopAutoClick = true;
            document.getElementById("stopClickBtn").innerHTML = "Resume";
        } else {
            document.getElementById("stopClickBtn").innerHTML = "Pause";
            Game.variables.stopAutoClick = false;
        }
    },

    settings : function () {
        if (!Game.variables.toggleSettings) {

            document.getElementById("gameSettings").style.display = "inherit";
            Game.variables.toggleSettings = true;
        } else {
            document.getElementById("gameSettings").style.display = "none";
            Game.variables.toggleSettings = false;
        }
    },

    log : function () {
        if (!Game.variables.toggleLog) {
            document.getElementById("cathyLog").style.display = "inherit";
            Game.variables.toggleLog = true;
        } else {
            document.getElementById("cathyLog").style.display = "none";
            Game.variables.toggleLog = false;
        }
    }
};

/*==========
 Buttons
 ===========*/

Game.showPanels = function () {

    var whatButton = this.id;

    var buttonTextHide = [
        "Hide Monster",
        "Hide Player",
        "Hide Statistics",
        "Hide Cathy"
    ];

    for (var elements in Game.variables.toggleBtns) {
        if (Game.variables.toggleBtns.hasOwnProperty(elements)) {
            if (Game.variables.toggleBtns[elements] == whatButton) {
                var theDiv = Game.variables.toggleDivs[elements];
                var whatToHide = document.getElementById(theDiv);
                $('#' + whatToHide.id).slideDown(500);
                var again = document.getElementById(whatButton);
                again.innerHTML = buttonTextHide[elements];
                again.onclick = Game.hidePanels;

            }
        }
    }
};

Game.hidePanels = function () { //combine in to one function togglePanels
    var whatButton = this.id;

    var buttonTextShow = [
        "Show Monster",
        "Show Player",
        "Show Statistics",
        "Show Cathy"
    ];

    for (var elements in Game.variables.toggleBtns) {
        if (Game.variables.toggleBtns.hasOwnProperty(elements)) {
            if (Game.variables.toggleBtns[elements] == whatButton) {
                var theDiv = Game.variables.toggleDivs[elements];
                var whatToHide = document.getElementById(theDiv);
                $('#' + whatToHide.id).slideUp(500);
                var again = document.getElementById(whatButton);
                again.innerHTML = buttonTextShow[elements];
                again.onclick = Game.showPanels;
            }
        }
    }
};

Game.cathyTimer = function () {

    var duration;

    if (!Game.variables.cathyTimer) {
        duration = 60 * 60; //original
    } else {
        duration = JSON.parse(localStorage.getItem('cathycountdown'));
    }

    Game.variables.cathyTimer = true;

    if (Game.variables.cathyTimer) {

        var button = document.getElementById("fightCathyBtn");
        button.disabled = true; //redundant

        var timer = setInterval(function () {
            var minutes = parseInt(duration / 60, 10);
            var seconds = parseInt(duration % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            button.innerHTML = "Fight: " + minutes + ":" + seconds;
            localStorage.setItem('cathycountdown', JSON.stringify(duration));
            if (--duration < 0) {
                button.disabled = false;
                clearInterval(timer);
                Game.variables.cathyTimer = false;
                localStorage.removeItem("cathycountdown");
            }
        }, 1000);
    }
};

Game.execute = {

    timer : 0,

    removeMonster : function () {
        if (!Game.variables.executeTimer) {
            Game.player.totalExecutes++;
            Game.variables.executeTimer = true;
            Game.removeMonster(this.what);
            Game.execute.timer = (Game.player.playerHealth <= 105) ? 125 - Game.player.playerHealth - Game.player.executeBonus : 20 - Game.player.executeBonus;
            Game.execute.startTimer();
        } else {
            Game.execute.timer = JSON.parse(localStorage.getItem('executecountdown'));
            Game.execute.startTimer();
        }
    },

    startTimer : function () {

        if (Game.variables.executeTimer) {

            var button = document.getElementById("executeButton");
            button.disabled = true;

            var theTimer = setInterval(function () {
                button.innerHTML = "Execute: " + Game.execute.timer;
                localStorage.setItem('executecountdown', JSON.stringify(Game.execute.timer));
                if (--Game.execute.timer < 0) {
                    button.disabled = false;
                    Game.variables.executeTimer = false;
                    clearInterval(theTimer);
                    localStorage.removeItem("executecountdown");
                }
            }, 1000);
        }
    }
};

Game.upgrades = {

    //MIGHT NEED TO USE event.target.id AND PASS IN EVENT

    check : function () {
        switch (this.id) {
            case 'btnHp' :
                if (Game.player.currentCores >= Game.player.upgradesCostHp) { Game.player.currentCores -= Game.player.upgradesCostHp; }
                Game.player.totalUpgradesCost += Game.player.upgradesCostHp;
                Game.player.playerHealth += 1;
                Game.player.hpUpgrades += 1;
                Game.player.upgradesCostHp += 50;
                break;
            case 'btnAtk' :
                if (Game.player.currentCores >= Game.player.upgradesCostAtk) { Game.player.currentCores -= Game.player.upgradesCostAtk; }
                Game.player.totalUpgradesCost += Game.player.upgradesCostAtk;
                Game.player.playerAttack += 1;
                Game.player.atkUpgrades += 1;
                Game.player.upgradesCostAtk += 50;
                break;
            case 'btnDef' :
                if (Game.player.currentCores >= Game.player.upgradesCostDef) { Game.player.currentCores -= Game.player.upgradesCostDef; }
                Game.player.totalUpgradesCost += Game.player.upgradesCostDef;
                Game.player.playerDefense += 1;
                Game.player.defUpgrades += 1;
                Game.player.upgradesCostDef += 50;
                break;
            case 'cathyBtnAtk' :
                if (Game.player.currentCores >= Game.variables.autoAtkCost) { Game.player.currentCores -= Game.variables.autoAtkCost; }
                Game.player.totalUpgradesCost += Game.variables.autoAtkCost;
                Game.variables.autoDamage += Math.floor(Math.pow(Game.player.superCores, .5) + 1);
                Game.player.autoAtkUpgrades += Math.floor(Math.pow(Game.player.superCores, .5) + 1);
                Game.variables.autoAtkCost += 50;
                break;
            case 'cathyBtnSpd' :
                if (Game.player.currentCores >= Game.variables.autoSpdCost) { Game.player.currentCores -= Game.variables.autoSpdCost; }
                Game.player.totalUpgradesCost += Game.variables.autoSpdCost;
                //Game.variables.autoSpeed += 1 + Game.player.superCores;
                Game.variables.autoSpeed += Math.floor(Math.pow(Game.player.superCores, .5) + 1);
                Game.player.autoSpdUpgrades += Math.floor(Math.pow(Game.player.superCores, .5) + 1);
                Game.variables.autoSpdCost += 50;
                break;
            default :
                break;
        }

        Game.variables.currentDamage = Game.variables.autoDamage + Game.player.bonusAutoAtk;
        Game.showPlayerInfo();
        Game.displayStatistics();

        for (var j = 0; j < Game.variables.upgradeButtons.length; j++) {
            var button = document.getElementById(Game.variables.upgradeButtons[j]);
            button.disabled = false;
        }

        if (Game.player.upgradesCostHp > Game.player.currentCores) { document.getElementById("btnHp").disabled = true; }
        if (Game.player.upgradesCostAtk > Game.player.currentCores) { document.getElementById("btnAtk").disabled = true; }
        if (Game.player.upgradesCostDef > Game.player.currentCores) { document.getElementById("btnDef").disabled = true; }
        if (Game.variables.autoAtkCost > Game.player.currentCores) { document.getElementById("cathyBtnAtk").disabled = true; }
        if (Game.variables.autoSpdCost > Game.player.currentCores) { document.getElementById("cathyBtnSpd").disabled = true; }
    },

    timer : function () {

        var duration;

        if (!Game.variables.upgradesResetTimer) {
            duration = (!Game.player.achievements.aEighteen) ? 60 * 2 : 0;
        } else {
            duration = JSON.parse(localStorage.getItem('upgradesresetcountdown'));
        }

        Game.variables.upgradesResetTimer = true;

        if (Game.variables.upgradesResetTimer) {
            var button = document.getElementById("resetUpgradesBtn");
            button.disabled = true;

            var theTimer = setInterval(function () {
                var minutes = parseInt(duration / 60, 10);
                var seconds = parseInt(duration % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                button.innerHTML = "Refocus Cores: " + minutes + ":" + seconds;
                localStorage.setItem('upgradesresetcountdown', JSON.stringify(duration));
                if (--duration < 0) {
                    button.disabled = false;
                    Game.variables.upgradesResetTimer = false;
                    localStorage.removeItem("upgradesresetcountdown");
                    clearInterval(theTimer);
                }
            }, 1000);
        }
    },

    reset : function () {
        Game.player.playerHealth -= Game.player.hpUpgrades;
        Game.player.playerAttack -= Game.player.atkUpgrades ;
        Game.player.playerDefense -= Game.player.defUpgrades;
        Game.variables.autoDamage -= Game.player.autoAtkUpgrades;
        Game.variables.autoSpeed -= Game.player.autoSpdUpgrades;
        Game.player.upgradesCostHp = 50;
        Game.player.upgradesCostAtk = 50;
        Game.player.upgradesCostDef = 50;
        Game.variables.autoAtkCost = 50;
        Game.variables.autoSpdCost = 50;
        Game.player.hpUpgrades = 0;
        Game.player.atkUpgrades = 0;
        Game.player.defUpgrades = 0;
        Game.player.autoAtkUpgrades = 0;
        Game.player.autoSpdUpgrades = 0;
        Game.player.currentCores += Game.player.totalUpgradesCost;
        Game.player.totalUpgradesCost = 0;
        Game.upgrades.check();
        Game.showPlayerInfo();
        Game.upgrades.timer();
    }
};

/*==========
 Cathy
 ===========*/

Game.cathy = {

    cathyArray : 0,
    achievementsString : 0,
    fightString : 0,
    pause : true,
    inFight : false,
    achievementsArray : false,
    fightArray : false,

    check : function () {
        console.log("monsters (check): " + Game.player.totalMonsters);
        switch (Game.player.totalMonsters) {
            case 12 : //playTime
                $("#topDiv").fadeIn(1000);
                $("#playTime").fadeIn(5000);
                Game.player.pageElements.topDiv = true;
                Game.player.pageElements.playTime = true;
                break;
            case 34 : //monster stats
                $("#monsterInfo").fadeIn(3000);
                $("#toggleMInfo").fadeIn(3000);
                $("#monsterBar").fadeIn(3000);
                Game.player.pageElements.monsterInfo = true;
                Game.player.pageElements.toggleMInfo = true;
                Game.player.pageElements.monsterBar = true;
                break;
            case 80 : //click counter
                $("#clickCount").fadeIn(3000);
                Game.player.pageElements.clickCount = true;
                break;
            case 99 : //player name
                $("#playerInfo").fadeIn(3000);
                $("#togglePInfo").fadeIn(3000);
                $("#playerName").fadeIn(600);
                $("#playerStats").fadeIn(3000);
                Game.player.pageElements.playerInfo = true;
                Game.player.pageElements.playerName = true;
                Game.player.pageElements.playerStats = true;
                Game.player.pageElements.togglePInfo = true;
                break;
            case 152 : //bottom div
                //$("#bottomDiv").fadeIn(3000);
                $("#logPage").fadeIn(3000);
                //Game.player.pageElements.bottomDiv = true;
                Game.player.pageElements.logPage = true;
                break;
            case 175 : //tree
                if (Game.player.currentClicks == 20 || Game.player.currentClicks == 40 || Game.player.currentClicks == 55 || Game.player.currentClicks == 70) {
                    this.cathyArray++;
                    this.talk(null);
                } else if (Game.player.currentClicks == 85 || Game.player.currentClicks == 95) {
                    this.cathyArray++;
                    this.talk(null);
                    $("#playerUpgrades").fadeIn(3000);
                    Game.player.pageElements.playerUpgrades = true;
                    if (Game.player.atkUpgrades == 0) { document.getElementById("btnHp").disabled = true; }
                    if (Game.player.atkUpgrades == 0) { document.getElementById("btnAtk").disabled = false; }
                    if (Game.player.atkUpgrades == 0) { document.getElementById("btnDef").disabled = true; }
                } else if (Game.player.currentClicks == 95) {
                    this.cathyArray++;
                    this.talk(null);
                    Game.cathy.pause = false; //back to update on kill
                }
                break;
            case 183 : //refocus button
                $("#resetUpgradesBtn").fadeIn(3000);
                Game.player.pageElements.resetUpgradesBtn = true;
                break;
            case 212 : //execute button
                $("#executeButton").fadeIn(3000);
                Game.player.pageElements.executeButton = true;
                break;
            case 250 : //conservation status
                $("#information").fadeIn(3000);
                $("#statisticsRight").fadeIn(3000);
                Game.player.pageElements.information = true;
                Game.player.pageElements.statisticsRight = true;
                Game.player.pageElements.toggleSInfo = true;
                break;
            case 283 : //statistics / achievements
                $("#statisticsLeft").fadeIn(3000);
                $("#toggleSInfo").fadeIn(3000);
                $("#toggleAchievements").fadeIn(3000);
                $("#toggleAchievementsTwo").fadeIn(3000);
                Game.player.pageElements.toggleAchievementsTwo = true;
                Game.player.pageElements.toggleAchievements = true;
                Game.player.pageElements.statisticsLeft = true;
                break;
            case 333 : //auto click
                Game.variables.stopAutoClick = false;
                break;
            case 334 : //upgrade cathy
                $("#upgradeCathy").fadeIn(3000);
                $("#stopClickBtn").fadeIn(3000);
                $("#toggleCInfo").fadeIn(3000);
                Game.player.pageElements.upgradeCathy = true;
                Game.player.pageElements.stopClickBtn = true;
                Game.player.pageElements.toggleCInfo = true;
                break;
            case 344 :
                Game.cathy.pause = true;
                break;
            case 400 : //donate
                $("#donate").fadeIn(1000);
                Game.player.pageElements.donate = true;
                break;
            case 500 : //fight cathy
                $("#fightCathyBtn").fadeIn(1000);
                Game.player.pageElements.fightCathyBtn = true;
                break;
            default :
                break;
        }
    },

    talk : function (theString) {
        if (theString && this.achievementsArray == false && this.inFight == false && theString != "treasure") { //CHECK theString != treasure -its probably not being used anymore
            console.log("string passed");
            Game.variables.cathyText.splice(Game.variables.cathyText[this.cathyArray], 0, theString);
        } else if (this.achievementsArray) {
            console.log("all achievements");
            this.achievementsString++;
            theString = Game.variables.cathyAchievementsText[this.achievementsString];
            if (this.achievementsString == Game.variables.cathyAchievementsText.length - 1) {
                $("#transcendButton").fadeIn(1000);
                Game.player.pageElements.transcendButton = true;
                document.getElementById("toggleAchievementsTwo").disabled = false;
                this.achievementsArray = false;
            }
        } else if (Game.cathy.fightArray) {
            console.log("fight string array");
            theString = Game.variables.cathyBossText[this.fightString];
        } else { //normal
            theString = Game.variables.cathyText[this.cathyArray];
        }

        //a lot of code just to change some text -innerhtml might be better here (maybe not with log)
        var parent = document.getElementById("chattyCathy");
        var child = document.getElementById("cathyString");
        var newParagraph = document.createElement("p");
        newParagraph.id = "cathyString";
        var newNode = document.createTextNode(theString);
        newParagraph.appendChild(newNode);
        parent.replaceChild(newParagraph, child);

        //just no. in the words of mr sword, just say no
        //update log at the same time cathy is updated
        //fix -log deleted on transcend, will not append anything besides the main cathy text, duplicate text in log
        //add auto scroll http://www.mediacollege.com/internet/javascript/page/scroll.html
        var parentT = document.getElementById("cathyLog");
        var newParagraphT = document.createElement("p");
        var newNodeT = document.createTextNode(Game.variables.cathyText[this.cathyArray]);
        newParagraphT.appendChild(newNodeT);
        parentT.appendChild(newParagraphT);
    },

    fight : function () {
        console.log("fight cathy called");
        document.getElementById("executeButton").disabled = true;
        Game.cathy.inFight = true;
        Game.cathy.fightArray = true;
        Game.cathyTimer();
    }
};

/*==========
Player
 ===========*/

Game.player = {

    playerName : "Player",
    playerLevel : 0,
    playerExperience : 0,
    playerHealth : 5,
    playerAttack : 1,
    playerDefense : 1,
    currentCores : 0,
    playerLevels : [ 75 ],

    //upgrades
    upgradesCostHp : 50,
    upgradesCostAtk : 50,
    upgradesCostDef : 50,

    hpUpgrades : 0,
    atkUpgrades : 0,
    defUpgrades : 0,
    autoAtkUpgrades : 0,
    autoSpdUpgrades : 0,
    totalUpgradesCost : 0,

    currentClicks : 0,
    totalClicks : 0,
    totalKills : 0,
    totalMonsters : 0,
    totalCores : 0,
    totalTranscends : 0,
    superCores : 0,
    totalExecutes : 0,
    totalLevels : 0,
    totalAchievements : 0,
    totalAchievementsTwo : 0,
    cathyKills : 0,
    bonusHp : 0,
    bonusAtk : 0,
    bonusDef : 0,
    bonusExp : 0,
    bonusCores : 0,
    bonusAutoSpd : 0,
    bonusAutoAtk : 0,
    executeBonus : 0,

    monsterKills : {
        greenSlime : 0,
        redSlime : 0,
        treeSmall : 0,
        scorpionSmall : 0,
        boarSmall : 0,
        giantSmall : 0,
        gargoyleSmall : 0,
        bunnySmall : 0,
        manaBeast : 0,
        specterSmall : 0,
        dragonSmall : 0,
        chestSmall : 0,
        greenBoss : 0,
        redBoss : 0,
        treeBoss : 0,
        scorpionBoss : 0,
        boarBoss : 0,
        giantBoss : 0,
        gargoyleBoss : 0,
        bunnyBoss : 0,
        manaBoss : 0,
        specterBoss : 0,
        dragonBoss : 0,
        cathyBoss : 0
    },

    monsterStatus : {
        greenSlime : false,
        redSlime : false,
        treeSmall : false,
        scorpionSmall : false,
        boarSmall : false,
        giantSmall : false,
        gargoyleSmall : false,
        bunnySmall : false,
        manaBeast : false,
        specterSmall : false,
        dragonSmall : false
    },

    totalExtinct : function () { //theres a better way to do this -look it up, also do it in removemonster
        var extinctTotal = 0;
        for (var elements in this.monsterStatus) {
            if (this.monsterStatus.hasOwnProperty(elements)) {
                if (this.monsterStatus[elements] === true) {
                    extinctTotal += 1;
                }
            }
        }
        return extinctTotal;
    },

    pageElements : {
        topDiv : false,
        playTime : false,
        monsterInfo : false,
        monsterBar : false,
        toggleMInfo : false,
        clickCount : false,
        playerInfo : false,
        playerName : false,
        playerStats : false,
        togglePInfo : false,
        logPage : false,
        playerUpgrades : false,
        resetUpgradesBtn : false,
        executeButton : false,
        information : false,
        statisticsRight : false,
        toggleSInfo : false,
        statisticsLeft : false,
        toggleAchievements : false,
        toggleAchievementsTwo : false,
        upgradeCathy : false,
        stopClickBtn : false,
        toggleCInfo : false,
        donate : false,
        fightCathyBtn : false,
        transcendButton : false
    },

    achievements : {
        aOne : false,
        aTwo : false,
        aThree : false,
        aFour : false,
        aFive : false,
        aSix : false,
        aSeven : false,
        aEight : false,
        aNine : false,
        aTen : false,
        aEleven : false,
        aTwelve : false,
        aThirteen : false,
        aFourteen : false,
        aFifteen : false,
        aSixteen : false,
        aSeventeen : false,
        aEighteen : false,
        aNineteen : false,
        aTwenty : false,
        aTwentyOne : false,
        aTwentyTwo : false,
        aTwentyThree : false,
        aTwentyFour : false,
        aTwentyFive : false,
        aTwentySix : false,
        aTwentySeven : false,
        aTwentyEight : false,
        aTwentyNine : false,
        aThirty : false,
        aThirtyOne : false,
        aThirtyTwo : false
    }
};

Game.showPlayerInfo = function () {

    var playerInfo = [
        Game.player.playerName,
        Game.player.playerLevel,
        Game.player.playerExperience,
        Game.player.playerLevels[Game.player.playerLevel],
        Game.player.playerHealth,
        Game.player.playerAttack,
        Game.player.playerDefense,
        Game.player.hpUpgrades * 50 + (50),
        Game.player.atkUpgrades * 50 + (50),
        Game.player.defUpgrades * 50 + (50),
        Game.player.currentCores,
        Game.variables.autoDamage + Game.player.bonusAutoAtk,
        Game.variables.autoSpeed + Game.player.bonusAutoSpd,
        ((Game.variables.autoDamage + Game.player.bonusAutoAtk) * (Game.variables.autoSpeed * .1)).toFixed(2),
        Math.floor(Math.pow(Game.player.superCores, .5) + 1),
        Game.variables.autoAtkCost,
        Math.floor(Math.pow(Game.player.superCores, .5) + 1),
        Game.variables.autoSpdCost
    ];

    for (var i = 0; i < Game.variables.playerIds.length; i++) {
        document.getElementById(Game.variables.playerIds[i]).innerHTML = Game.variables.playerPrefixes[i] + playerInfo[i];
    }

    //reduce experience text size -find better way (aka overhaul ui)
    if (Game.player.playerExperience >= 1000000 && !Game.variables.reduceFont) {
        document.getElementById("pExp").style.fontSize = "85%";
        document.getElementById("pExpValue").style.fontSize = "85%";
        document.getElementById("pExpTotal").style.fontSize = "85%";
        Game.variables.reduceFont = true;
    }
    if (Game.player.playerExperience < 1000000 && Game.variables.reduceFont) {
        document.getElementById("pExp").style.fontSize = "inherit";
        document.getElementById("pExpValue").style.fontSize = "inherit";
        document.getElementById("pExpTotal").style.fontSize = "inherit";
        Game.variables.reduceFont = false;
    }
};

Game.checkPlayerLevel = function () {

    if (Game.player.playerExperience >= Game.player.playerLevels[Game.player.playerLevel]) { //if player experience is > than the value in player level of the array (level 2, spot 3)
        console.log("level up");
        if (Game.player.playerLevel == 0) { Game.player.playerLevels.push(200); }
        if (Game.player.playerLevel == 1) { Game.player.playerLevels.push(330); }
        if (Game.player.playerLevel > 1) { //remember, level 0 and 1 exp is manually set
            var nextLevel = Math.floor(Game.player.playerLevels[Game.player.playerLevel] * 1.17);
            Game.player.playerLevels.push(nextLevel);
        }
        for (var i = 0; i < Game.player.playerLevels.length; i++) { //loop through levels until current
            if (i > Game.player.playerLevel) {
                Game.player.playerLevel = i; //level = i
                //Game.player.playerHealth = 5 + (Game.player.playerLevel * 5) + (Game.player.superCores * 5) + (Game.player.hpUpgrades + Game.player.bonusHp); //original
                //Game.player.playerAttack = 1 + (Game.player.playerLevel + (Game.player.superCores)) + (Game.player.atkUpgrades + Game.player.bonusAtk); //original
                //Game.player.playerDefense = 1 + (Game.player.playerLevel + (Game.player.superCores)) + (Game.player.defUpgrades + Game.player.bonusDef); //original
                Game.player.playerHealth = 5 + (Game.player.playerLevel * 5) + (Game.player.superCores * Game.player.playerLevel * 5) + (Game.player.hpUpgrades + Game.player.bonusHp);
                Game.player.playerAttack = 1 + (Game.player.playerLevel + (Game.player.superCores * Game.player.playerLevel)) + (Game.player.atkUpgrades + Game.player.bonusAtk);
                Game.player.playerDefense = 1 + (Game.player.playerLevel + (Game.player.superCores * Game.player.playerLevel)) + (Game.player.defUpgrades + Game.player.bonusDef);
                console.log("LEVEL CALCULATED");
                Game.player.playerExperience -= Game.player.playerLevels[i - 1];
                Game.player.totalLevels++;
                if (Game.player.playerLevel % 11 == 0) { Game.variables.monstersUpgrade = true; } //upgrade monsters every 10 levels
                break;
            }
        }
    }
};

Game.playerHits = function (currentMonster) {
    var hit;

    if (!Game.variables.playerHit) {
        Game.variables.playerHit = true;
        if (Game.player.playerAttack - currentMonster.monsterDefense < 0) { //shorten
            hit = 0;
        } else {
            hit = Game.player.playerAttack - currentMonster.monsterDefense;
        }
        currentMonster.monsterHealth -= hit;
        Game.healthBar(currentMonster);
        localStorage.setItem('currentmonsterhealth', currentMonster.monsterHealth);
        document.getElementById("mHpValue").innerHTML = currentMonster.monsterHealth;
        if (currentMonster.monsterHealth <= 0) { //if the monster dies
            Game.removeMonster(currentMonster);
        } else { //if the monster didn't die
            Game.monsterHits(currentMonster);
        }
        Game.variables.playerHit = true;
    }
};

/*==========
 Monster
 ===========*/

Game.Monster = function (id, sprite, name, level, hp, atk, def, exp, cores, flavor) {
    this.id = id;
    this.monsterSprite = sprite;
    this.monsterName = name;
    this.monsterLevel = level;
    this.monsterHealth = hp;
    this.monsterAttack = atk;
    this.monsterDefense = def;
    this.monsterExperience = exp;
    this.monsterCores = cores;
    this.monsterFlavor = flavor;
};

Game.setConservation = function () {
    var which;
    for (var elements in Game.player.monsterKills) {
        if (Game.player.monsterKills.hasOwnProperty(elements)) {
            if (elements != "greenBoss" && elements != "redBoss" && elements != "treeBoss" && elements != "scorpionBoss" && elements != "boarBoss" && elements != "giantBoss" && elements != "gargoyleBoss" && elements != "bunnyBoss" && elements != "manaBoss" && elements != "specterBoss" && elements != "dragonBoss" && elements != "chestSmall" && elements != "cathyBoss") { //haven't figure out how to loop this
                which = document.getElementById(String("s" + elements));
                if (elements == "greenSlime" && Game.player.monsterKills.greenSlime < 75 && !Game.player.monsterStatus.greenSlime) { //FIX THIS MESS
                    $('#' + which.closest("div").id).fadeIn(500);
                    which.innerHTML = "Abundant"; //THIS MIGHT NOT WORK IN OLDER BROWSERS
                    which.className = "abundant";
                }
                if (elements == "greenSlime" && Game.player.monsterKills.greenSlime == 75 && !Game.player.monsterStatus.greenSlime) { //maybe set green slime kills to 225 so i don't need all this
                    $("#sGreen").fadeIn(500);
                    $("#sgreenSlime").fadeIn(500);
                    Game.player.monsterStatus.greenSlime = true;
                    Game.variables.monsterIds.shift(); //remove greenslime
                    Game.variables.monsterIds.push(Game.variables.bossIds[0]); //add in boss
                    Game.variables.bossIds.splice(0, 1); //splice out boss
                        which.innerHTML = "Extinct";
                        which.className = "extinct";
                } else if (Game.player.monsterKills[elements] > 0 && Game.player.monsterKills[elements] < 120 && elements != "greenSlime") { //150
                    $('#' + which.closest("div").id).fadeIn(500);
                    which.innerHTML = "Abundant";
                    which.className = "abundant";
                } else if (Game.player.monsterKills[elements] > 0 && Game.player.monsterKills[elements] >= 120 && Game.player.monsterKills[elements] < 150 && elements != "greenSlime") { //200
                    $('#' + which.closest("div").id).fadeIn(500);
                    which.innerHTML = "Threatened";
                    which.className = "threatened";
                } else if (Game.player.monsterKills[elements] > 0 && Game.player.monsterKills[elements] >= 150 && Game.player.monsterKills[elements] < 160 && elements != "greenSlime") { //225
                    $('#' + which.closest("div").id).fadeIn(500);
                    which.innerHTML = "Endangered";
                    which.className = "endangered";
                } else if (Game.player.monsterKills[elements] > 0 && Game.player.monsterKills[elements] == 160 && Game.player.monsterStatus[elements] == false && elements != "greenSlime") { //190
                    var a;
                    a = Game.variables.monsterIds.indexOf(elements);
                    console.log("MONSTER INDEX: " + a);
                    Game.variables.monsterIds.splice(a, 1); //splice out monster
                    console.log("PUSH: " + Game.variables.bossIds[a]);
                    Game.variables.monsterIds.push(Game.variables.bossIds[a]); //add in boss
                    Game.variables.bossIds.splice(a, 1); //splice out boss
                    Game.player.monsterStatus[elements] = true;
                    if (Game.player.monsterStatus[elements] == true) {
                        $('#' + which.closest("li").id).fadeIn(500);
                        which.innerHTML = "Extinct";
                        which.className = "extinct";
                    }
                }
            }
        }
    }
};

Game.saveMonster = function () {
    var currentMonster;
    if(localStorage.getItem('currentmonster')) { //if page is refreshed (current monster is set)
        currentMonster = JSON.parse(localStorage.getItem('currentmonster'));
        currentMonster.monsterHealth = JSON.parse(localStorage.getItem('currentmonsterhealth'));
        Game.createMonster(currentMonster);
    } else {
        currentMonster = Game.createMonster();
        localStorage.setItem('currentmonsterhealth', currentMonster.monsterHealth);
        localStorage.setItem('currentmonster', JSON.stringify(currentMonster));
    }
    return currentMonster;
};

Game.monsterHits = function (currentMonster) {
    if (!Game.variables.monsterHit) {
        Game.variables.monsterHit = true;
        var hit;
        if (currentMonster.monsterAttack - Game.player.playerDefense < 0) { //shorten
            hit = 0;
        } else {
            hit = currentMonster.monsterAttack - Game.player.playerDefense;
        }
        Game.player.playerHealth -= hit;

        document.getElementById("pHpValue").innerHTML = Game.player.playerHealth.toString(); //dont need to string
        if (Game.player.playerHealth <= 0) { //player died
            console.log("MONSTER KILLS PLAYER");
            Game.player.playerExperience = 0;
            Game.variables.playerDied = true;
            Game.removeMonster(currentMonster);
        } else {
            Game.playerHits(currentMonster);
        }
        Game.variables.monsterHit = true;
        if (!Game.variables.playerDied) { Game.playerHits(currentMonster); }
    }
};

Game.removeMonster = function (currentMonster) {

    //cleanup
    if (localStorage["currentmonsterhealth"]) { localStorage.removeItem("currentmonsterhealth"); } //reset monster health
    clearInterval(Game.variables.autoClicker); //this must be cleared every time
    Game.player.currentClicks = 0;

    //if player didnt die
    if (!Game.variables.playerDied) {
        for (var elements in Game.player.monsterKills) { //update kills
            if (Game.player.monsterKills.hasOwnProperty(elements)) {
                if (elements == currentMonster.id) {
                    Game.player.monsterKills[elements] += 1;
                }
            }
        }
        Game.player.playerExperience += currentMonster.monsterExperience;
        Game.player.totalKills++;
        Game.player.currentCores += currentMonster.monsterCores;
        Game.player.totalCores += currentMonster.monsterCores;

        //lower spawn timer (eventually have this be a purchasable upgrade instead of kill based)
        if (Game.variables.spawnTime > 500) {
            Game.variables.spawnTime -= 1;
        } else if (Game.variables.spawnTime <= 500 && Game.variables.spawnTime > 100) {
            var newTime = Game.variables.spawnTime - .10;
            Game.variables.spawnTime = newTime.toFixed(2);
        } else {
            Game.variables.spawnTime = 100;
        }
    } //end if didnt die

    Game.player.totalMonsters++;
    Game.variables.playerDied = false;

    if (currentMonster.id == "cathyBoss") { //after cathy fight
        if (Game.execute.timer == 0) { document.getElementById("executeButton").disabled = false; } //re-enable execute
        Game.cathy.fightArray = false; //re-enable regular update text
        Game.player.playerHealth += 5 * Game.player.monsterKills.cathyBoss;
        Game.player.playerAttack += Game.player.monsterKills.cathyBoss;
        Game.player.playerDefense += Game.player.monsterKills.cathyBoss;
        document.getElementById("stopClickBtn").disabled = false;
        //Game.player.bonusExp += 10 * Game.player.monsterKills.cathyBoss; //maybe give an xp and cores bonus as well
        //Game.player.bonusCores += 10 * Game.player.monsterKills.cathyBoss;
    }

    //if (currentMonster.id == "chestLarge") {
    //    Game.player.superCores += 1;
    //}

    Game.player.playerHealth = 5 + (Game.player.playerLevel * 5) + (Game.player.playerLevel * Game.player.superCores * 5) + (Game.player.hpUpgrades + Game.player.bonusHp); //reset player health

    if (Game.player.totalTranscends < 1) {
        if (!Game.cathy.achievementsArray && !Game.cathy.fightArray) { //if something else isn't going on, normal cathy text
            if (!Game.cathy.pause) { Game.cathy.cathyArray++; } //progress chat unless it's paused
            Game.cathy.check();
            Game.cathy.talk(null);
        } else if (Game.player.totalAchievements == 20) { //all achievements chat
            Game.cathy.talk();
        }

        if (Game.player.totalAchievements != 20) { //no
            Game.achievements();
        }
    } //end if totaltranscends

    Game.upgrades.check();
    Game.checkPlayerLevel();

    Game.showPlayerInfo();
    //if (!Game.player.achievements.aNineteen) { Game.setConservation(); } //wont be called on transcend -fix
    Game.setConservation();

    //remove the monster
    var node = document.getElementById(currentMonster.id);
    var nodeTwo = document.getElementById("healthBar");

    if (node.parentNode) {
        nodeTwo.style.display = "none";
        node.parentNode.removeChild(node);
    }

    //hide monster info
    for (var i = 0; i < Game.variables.mPageIds.length; i++) {
        document.getElementById(Game.variables.mPageIds[i]).innerHTML = "";
    }

    localStorage.removeItem("currentmonster");

    var nextMonster = Game.saveMonster();

    setTimeout(function() { Game.summonMonster(nextMonster) }, Game.variables.spawnTime);
};

Game.showMonsterInfo = function (currentMonster) {

    //var show = this.what; //for mouseover

    var monsterPrefix = [ //not a fan of this
        "",
        "Level ",
        "Health: ",
        "",
        "Experience: ",
        "Attack: ",
        "",
        "Cores: ",
        "Defense: ",
        "",
        ""
    ];

    var monsterInfo = [ //find a better way -avoid mixed types
        currentMonster.monsterName,
        currentMonster.monsterLevel,
        "",
        currentMonster.monsterHealth,
        currentMonster.monsterExperience,
        "",
        currentMonster.monsterAttack,
        currentMonster.monsterCores,
        "",
        currentMonster.monsterDefense,
        currentMonster.monsterFlavor
    ];

    for (var i = 0; i < Game.variables.mPageIds.length; i++) {
        document.getElementById(Game.variables.mPageIds[i]).innerHTML = monsterPrefix[i] + monsterInfo[i];
    }
};

Game.clickMonster = function () {
    Game.player.currentClicks++;
    Game.player.totalClicks++;
    Game.clickCounter();

    //update cathy on click
    if (Game.player.totalTranscends < 1) {
        if (Game.player.totalMonsters < 2) { //first two monsters
            Game.cathy.pause = true;
            Game.cathy.cathyArray++;
            Game.cathy.check();
            Game.cathy.talk(null);
        } else if (Game.player.totalMonsters == 175) { //tree
            Game.cathy.check();
            Game.cathy.talk(null);
        } else {
            Game.cathy.pause = false;
        }

        if (Game.cathy.fightArray) { //make this happen on first kill only
            if (Game.player.currentClicks == 10 || Game.player.currentClicks == 20) {
                Game.cathy.fightString++;
                Game.cathy.talk();
            }
        }
    } //end totaltranscends

    var currentMonster = this.what;

    Game.playerHits(currentMonster); //player always hits first

    Game.variables.playerHit = false;
    Game.variables.monsterHit = false;
    if (Game.player.totalAchievements != 20) { Game.achievements(); } //no
    Game.displayStatistics();
};

//this is still messy -organize it
Game.summonMonster = function (currentMonster) {
    document.getElementById("monsterBar").value = currentMonster.monsterHealth;
    document.getElementById("monsterBar").max = currentMonster.monsterHealth;

    var sprite = document.createElement("img");
    sprite.id = currentMonster.id;
    sprite.src = currentMonster.monsterSprite;
    sprite.what = currentMonster;
    sprite.onclick = Game.clickMonster;
    //sprite.onmouseover = Game.showMonsterInfo;

    var whereBar = document.getElementById("healthBar");

    //var spriteContainer = document.createElement("div"); //ORIGINAL
    var spriteContainer = document.getElementById("spriteContainer");
    //console.log(spriteContainer);
    //spriteContainer.id = "spriteContainer";
    spriteContainer.appendChild(sprite);
    spriteContainer.appendChild(whereBar);
    //document.body.appendChild(spriteContainer);

    sprite.onload = function() { //doesn't work with div
        if (Game.variables.autoSpeed != 0) {
            var interval = (1000 / ((Game.variables.autoSpeed / 10))); //original
            //var interval = (1000 / (((Game.variables.autoSpeed + Game.player.bonusAutoSpd) / 10))); //with achievement bonus
            Game.variables.autoClicker = setInterval(function(){Game.autoClicker(currentMonster)}, interval);
        } else {} //prevent infinite loop

        var execute = document.getElementById("executeButton");
        execute.what = currentMonster;
        execute.onclick = Game.execute.removeMonster;

        var w = window.innerWidth;
        var h = window.innerHeight;
        var spawnHeight = (h / 2) - Math.floor(sprite.height / 2) - 30;
        var spawnWidth = (w / 2) - Math.floor(sprite.width / 2) - 100;
        spriteContainer.style.top = spawnHeight + "px";
        spriteContainer.style.left = spawnWidth + "px"; //UNCOMMENT
        //spriteContainer.style.left = 130 + "px"; //delete
        spriteContainer.style.display = "inherit";
        document.getElementById("monsterBar").style.width = sprite.width + "px";
        whereBar.style.display = "inherit";

        if (currentMonster.id == "cathyBoss") {
            spriteContainer.style.left = 0;
            spriteContainer.style.top = 0;
            clearInterval(Game.variables.autoClicker);
        }

        Game.showMonsterInfo(currentMonster);
    };

    //update cathy on summon
    if (Game.player.totalTranscends < 1) {
        if (Game.player.totalMonsters == 1) {
            Game.cathy.cathyArray++;
            Game.cathy.check();
            Game.cathy.talk(null);
        } else if (Game.player.totalMonsters == 75) {
            Game.cathy.cathyArray++;
            Game.cathy.check();
            Game.cathy.talk(null);
        } else if (Game.player.totalMonsters == 328) {
            Game.cathy.cathyArray++;
            Game.cathy.talk(null);
        }
        else if (Game.player.totalMonsters == 349) {
            Game.cathy.cathyArray++;
            Game.cathy.talk(null);
        }
    }

    if (Game.cathy.inFight) {
        Game.cathy.talk();
        Game.cathy.inFight = false;
    }

    Game.clickCounter(); //update counter on spawn
};

Game.randomMonster = function () {

    //===random not equal probability method one===

    //var monsters = ["greenSlime", "redSlime", "tree", "scorpion", "boar"];

    //var chance;
    //var chanceArray = [];
    //var percentArray = [1, 1, 1, 1, 1];
    //var sum = percentArray.reduce(function(a, b){return a+b;});
    //
    //for (var i = 0; i < monsters.length; i++) {
    //    if (i == 0) {
    //        chance = (percentArray[i] / sum) * 100;
    //        chanceArray.push(chance);
    //    } else {
    //        chance = (percentArray[i] / sum) * 100;
    //        chanceArray.push(chance);
    //    }
    //}

    //===random not equal probability method two===

    //console.log(chanceArray);
    //var bonus = [100, 100, 100, 100, 100, 100, 100];
    //var sum = bonus.reduce(function(x, y) { return x + y; });
    //var chance = bonus.map(function(num) { return num / sum; });
    //console.log(chance);

    //===random not equal probability method three -with choose functionality complete===

    //var monsters = ['a', 'b', 'c', 'd'];
    //var bonus = [100, 100, 100, 100];
    //var sum = bonus.reduce(function(x, y) { return x + y; });
    //var chance = bonus.map(function(num) { return num / sum; });
    //var culmChance = chance.concat();
    //for(var i = 0; i < culmChance.length; i++) {
    //    culmChance[i] = chance.slice(0, i + 1).reduce(function(p, i) { return p+ i; });
    //}
    //var roll = Math.random();
    //console.log(roll);
    //var index = 0;
    //while(roll > culmChance[index]) {
    //    index++;
    //}
    //console.log(index);

    var randomMonster;
    var randomTreasure = Math.floor((Math.random() * 33) + 1); //3% chance
    //var randomTreasureTwo = Math.floor((Math.random() * 333) + 1); //.3% chance

    if (Game.player.playerLevel == 0) {
        randomMonster = Game.variables.monsterIds[0]; //greenslime, then red
    } else if (Game.player.playerLevel == 2 && Game.player.totalMonsters == 175) { //force tree to summon once at level 2 -only do this if 0 transcends
        randomMonster = Game.variables.monsterIds[1];
    } else if (Game.player.playerLevel - Game.player.totalExtinct() < Game.variables.monsterIds.length) { //level is lower than array //REMOVE THE +1, MAKE EQUAL TO ARRAY
        randomMonster = Game.variables.monsterIds[(Math.floor((Math.random() * (Game.player.playerLevel - Game.player.totalExtinct() +1))))]; //+1
    } else {
        //console.log("HIGHER THAN ARRAY");
        randomMonster = Game.variables.monsterIds[Math.floor((Math.random() * (Game.variables.monsterIds.length)))];
    }

    if (Game.player.playerLevel > 4 && randomTreasure == 1 && Game.player.monsterKills.chestSmall > 0) {
        randomMonster = "chestSmall";
    }
    //if (Game.player.hasDonated && randomTreasureTwo == 1) {
    //    randomMonster = "chestLarge";
    //}
    if (Game.player.totalMonsters == 328) { //force chest to spawn
        console.log("where cathy: " + Game.cathy.cathyArray);
        randomMonster = "chestSmall";
    }
    if (Game.cathy.inFight) {
        randomMonster = "cathyBoss";
        document.getElementById("executeButton").disabled = true;
        document.getElementById("stopClickBtn").disabled = true;
    }

    return randomMonster;
};

Game.createMonster = function (id) {

    if (!id) { id = Game.randomMonster(); } //get a random monster

    var currentMonster;
    var chestHealth = (!Game.player.achievements.aSixteen) ? Game.player.playerAttack * 50 : Game.player.playerAttack * 5; //redundant
    var randomFlavor = Math.floor((Math.random() * 10));
    var bH = 0;
    var bA = 0;
    var bD = 0;
    var uH = 0;
    var uA = 0;
    var uD = 0;
    var uC = 0;
    var uE = 0;
    var bE = Game.player.bonusExp;
    var bC = Game.player.bonusCores;

    var monsterIds = [ //redundant (game.variables)
        "greenSlime",
        "redSlime",
        "treeSmall",
        "scorpionSmall",
        "boarSmall",
        "giantSmall",
        "gargoyleSmall",
        "bunnySmall",
        "manaBeast",
        "specterSmall",
        "dragonSmall",
        "greenBoss",
        "redBoss",
        "treeBoss",
        "scorpionBoss",
        "boarBoss",
        "giantBoss",
        "gargoyleBoss",
        "bunnyBoss",
        "manaBoss",
        "specterBoss",
        "dragonBoss"
    ];

    //level up monsters every 10 levels, starting at 20 -RECALCUATE ON STATS OVERHAUL
    if (Game.player.playerLevel >= 20) {
        if (Game.variables.monstersUpgrade) {
            console.log("UPGRADE");
            Game.variables.upgradeCounter++; //saving the counter isnt the best way to do this probably
            uH += 60 * Game.variables.upgradeCounter;
            uA += 2 * Game.variables.upgradeCounter;
            uD += 2 * Game.variables.upgradeCounter;
            uC += 6 * Game.variables.upgradeCounter; //temp
            uE += 4 * Game.variables.upgradeCounter; //temp
            Game.variables.monstersUpgrade = false;
        }
    }

                   // g  r   t   s   bo   gi   gar  bu   m    sp   d     g        r     t   s    bo    gi    gar    bu   m    sp   d
    var baseHp =    [ 5, 10, 40, 90, 160, 250, 360, 490, 640, 810, 1000, 1252, 1528, 1828, 2352, 2700, 3072, 3468, 3888, 4332, 4800, 5292 ];
    var baseAtk =   [ 0,  1,  2,  5,   7,  10,  12,  13,  15,  16,   19,   21,   25,   29,   33,   44,   46,   48,   53,   58,   63,   68 ];
    var baseDef =   [ 0,  1,  3,  5,   7,   9,  10,  11,  14,  15,   17,   21,   22,   28,   31,   33,   35,   38,   40,   43,   46,   49 ];
    var baseExp =   [ 1,  2,  4,  9,  16,  25,  36,  49,  64,  81,  100,   121, 144,  169,  196,   225,  256, 289,  324,  361,  400,  440 ];
    var baseCores = [ 0,  2,  6,  12, 20,  30,  42,  56,  70,  90,  110,   132, 156,  182,  210,   240,  272, 306,  342,  380,  420,  460 ];

    if (id != "chestSmall" && id != "chestLarge" && id != "cathyBoss") {
        for (var j = 0; j < monsterIds.length; j++) {
            if (monsterIds[j] == id) {
                if (Game.player.superCores > 0) {
                    bH = Math.ceil(baseHp[j] * (.5 + (Game.player.superCores * .1)));
                    bA = Math.ceil(baseAtk[j] * (.05 + (Game.player.superCores * .1)));
                    bD = Math.ceil(baseDef[j] * (.05 + (Game.player.superCores * .1)));
                }
                currentMonster = new Game.Monster(monsterIds[j], Game.variables.monsterSprites[j], Game.variables.monsterNames[j], Game.variables.monsterLevels[j], baseHp[j] + bH + uH, baseAtk[j] + bA + uA, baseDef[j] + bD + uD, baseExp[j] + bE + uE, baseCores[j] + bC + uC, monsterFlavor[j][randomFlavor]);
                //console.log("CURRENT: " + currentMonster.id);
            }
        }
    } else {
        //console.log("special");
        switch (id) {
            case "chestSmall" :
                currentMonster = new Game.Monster("chestSmall", "sprites/chestSmall.png", "Core Repository", 10, chestHealth, 0, 0, 10 * Game.player.playerLevel, 75 * Game.player.playerLevel, chestSmallFlavor[randomFlavor]);
                break;
            case "chestLarge" :
                currentMonster = new Game.Monster("redSlime", "sprites/chestSmall.png", "Super Core Repository", 99, Game.player.playerAttack * 10, 0, 0, 5000, 0, chestLargeFlavor[randomFlavor]);
                break;
            case "cathyBoss":
                currentMonster = new Game.Monster("cathyBoss", "sprites/cathyBoss.png", "Cathy", "??", 200 + Game.player.monsterKills.cathyBoss * 50, 0, Game.player.playerAttack - 1, 0, 0, 0, cathyBossFlavor[randomFlavor]);
                break;
            default :
                //console.log("special monster data was not set");
                break;
        }
    }
    return currentMonster;
};


/*==========
 Setup
 ===========*/

Game.transcendLoad = function () {
    Game.variables.seconds = JSON.parse(localStorage.getItem('seconds'));
    Game.variables.minutes = JSON.parse(localStorage.getItem('minutes'));
    Game.variables.hours = JSON.parse(localStorage.getItem('hours'));

    Game.player.totalClicks = JSON.parse(localStorage.getItem('totalclicks'));
    Game.player.totalKills = JSON.parse(localStorage.getItem('totalkills'));
    Game.player.totalMonsters = JSON.parse(localStorage.getItem('totalmonsters'));
    Game.player.totalCores = JSON.parse(localStorage.getItem('totalcores'));
    Game.player.totalTranscends = JSON.parse(localStorage.getItem('totaltranscends'));
    Game.player.superCores = JSON.parse(localStorage.getItem('supercores'));
    Game.player.totalExecutes = JSON.parse(localStorage.getItem('totalexecutes'));
    Game.player.totalLevels = JSON.parse(localStorage.getItem('totallevels'));
    Game.player.totalAchievements = JSON.parse(localStorage.getItem('totalachievements'));
    Game.player.cathyKills = JSON.parse(localStorage.getItem('cathykills'));
    Game.player.bonusHp = JSON.parse(localStorage.getItem('bonushp'));
    Game.player.bonusAtk = JSON.parse(localStorage.getItem('bonusatk'));
    Game.player.bonusDef = JSON.parse(localStorage.getItem('bonusdef'));
    Game.player.bonusExp = JSON.parse(localStorage.getItem('bonusexp'));
    Game.player.bonusCores = JSON.parse(localStorage.getItem('bonuscores'));
    Game.player.bonusAutoAtk = JSON.parse(localStorage.getItem('bonusautoatk'));
    Game.player.bonusAutoSpd = JSON.parse(localStorage.getItem('bonusautospd'));
    Game.player.executeBonus = JSON.parse(localStorage.getItem('executebonus'));

    Game.player.pageElements.topDiv = JSON.parse(localStorage.getItem('topdiv'));
    Game.player.pageElements.playTime = JSON.parse(localStorage.getItem('playTime'));
    Game.player.pageElements.clickCount = JSON.parse(localStorage.getItem('clickcount'));
    Game.player.pageElements.executeButton = JSON.parse(localStorage.getItem('executebutton'));
    Game.player.pageElements.monsterInfo = JSON.parse(localStorage.getItem('monsterinfo'));
    Game.player.pageElements.toggleMInfo = JSON.parse(localStorage.getItem('toggleminfo'));
    Game.player.pageElements.playerInfo = JSON.parse(localStorage.getItem('playerinfo'));
    Game.player.pageElements.playerName = JSON.parse(localStorage.getItem('playername'));
    Game.player.pageElements.playerStats = JSON.parse(localStorage.getItem('playerstats'));
    Game.player.pageElements.togglePInfo = JSON.parse(localStorage.getItem('togglepinfo'));
    Game.player.pageElements.playerUpgrades = JSON.parse(localStorage.getItem('playerupgrades'));
    Game.player.pageElements.resetUpgradesBtn = JSON.parse(localStorage.getItem('resetupgradesbtn'));
    Game.player.pageElements.information = JSON.parse(localStorage.getItem('information'));
    Game.player.pageElements.statisticsLeft = JSON.parse(localStorage.getItem('statisticsleft'));
    Game.player.pageElements.statisticsRight = JSON.parse(localStorage.getItem('statisticsright'));
    Game.player.pageElements.toggleSInfo = JSON.parse(localStorage.getItem('togglesinfo'));
    Game.player.pageElements.toggleAchievements = JSON.parse(localStorage.getItem('toggleachievements'));
    Game.player.pageElements.toggleAchievementsTwo = JSON.parse(localStorage.getItem('toggleachievementstwo'));
    Game.player.pageElements.transcendButton = JSON.parse(localStorage.getItem('transcendbutton'));
    Game.player.pageElements.fightCathyBtn = JSON.parse(localStorage.getItem('fightcathybtn'));
    Game.player.pageElements.logPage = JSON.parse(localStorage.getItem('logpage'));
    Game.player.pageElements.donate = JSON.parse(localStorage.getItem('donate'));
    Game.player.pageElements.upgradeCathy = JSON.parse(localStorage.getItem('upgradecathy'));
    Game.player.pageElements.toggleCInfo = JSON.parse(localStorage.getItem('togglecinfo'));
    Game.player.pageElements.stopClickBtn = JSON.parse(localStorage.getItem('stopclickbtn'));
    Game.player.pageElements.monsterBar = JSON.parse(localStorage.getItem('monsterbar'));

    //==achievements==//
    Game.player.achievements.aOne = JSON.parse(localStorage.getItem('aOne'));
    Game.player.achievements.aTwo = JSON.parse(localStorage.getItem('aTwo'));
    Game.player.achievements.aThree = JSON.parse(localStorage.getItem('aThree'));
    Game.player.achievements.aFour = JSON.parse(localStorage.getItem('aFour'));
    Game.player.achievements.aFive = JSON.parse(localStorage.getItem('aFive'));
    Game.player.achievements.aSix = JSON.parse(localStorage.getItem('aSix'));
    Game.player.achievements.aSeven = JSON.parse(localStorage.getItem('aSeven'));
    Game.player.achievements.aEight = JSON.parse(localStorage.getItem('aEight'));
    Game.player.achievements.aNine = JSON.parse(localStorage.getItem('aNine'));
    Game.player.achievements.aTen = JSON.parse(localStorage.getItem('aTen'));
    Game.player.achievements.aEleven = JSON.parse(localStorage.getItem('aEleven'));
    Game.player.achievements.aTwelve = JSON.parse(localStorage.getItem('aTwelve'));
    Game.player.achievements.aThirteen = JSON.parse(localStorage.getItem('aThirteen'));
    Game.player.achievements.aFourteen = JSON.parse(localStorage.getItem('aFourteen'));
    Game.player.achievements.aFifteen = JSON.parse(localStorage.getItem('aFifteen'));
    Game.player.achievements.aSixteen = JSON.parse(localStorage.getItem('aSixteen'));
    Game.player.achievements.aSeventeen = JSON.parse(localStorage.getItem('aSeventeen'));
    Game.player.achievements.aEighteen = JSON.parse(localStorage.getItem('aEighteen'));
    Game.player.achievements.aNineteen = JSON.parse(localStorage.getItem('aNineteen'));
    Game.player.achievements.aTwenty = JSON.parse(localStorage.getItem('aTwenty'));

    Game.variables.transcend = JSON.parse(localStorage.getItem('transcend'));
    Game.variables.hasDonated = JSON.parse(localStorage.getItem('hasdonated'));
    Game.variables.spawnTime = JSON.parse(localStorage.getItem('spawntime'));
};

Game.transcendSave = function () {

    localStorage.setItem('seconds', Game.variables.seconds);
    localStorage.setItem('minutes', Game.variables.minutes);
    localStorage.setItem('hours', Game.variables.hours);

    localStorage.setItem('totalclicks', Game.player.totalClicks);
    localStorage.setItem('totalkills', Game.player.totalKills);
    localStorage.setItem('totalmonsters', Game.player.totalMonsters);
    localStorage.setItem('totalcores', Game.player.totalCores);
    localStorage.setItem('totaltranscends', Game.player.totalTranscends);
    localStorage.setItem('supercores', Game.player.superCores);
    localStorage.setItem('totalexecutes', Game.player.totalExecutes);
    localStorage.setItem('totallevels', Game.player.totalLevels);
    localStorage.setItem('totalachievements', Game.player.totalAchievements);
    localStorage.setItem('cathykills', Game.player.cathyKills);
    localStorage.setItem('bonushp', Game.player.bonusHp);
    localStorage.setItem('bonusatk', Game.player.bonusAtk);
    localStorage.setItem('bonusdef', Game.player.bonusDef);
    localStorage.setItem('bonusexp', Game.player.bonusExp);
    localStorage.setItem('bonuscores', Game.player.bonusCores);
    localStorage.setItem('bonusautoatk', Game.player.bonusAutoAtk);
    localStorage.setItem('bonusautospd', Game.player.bonusAutoSpd);
    localStorage.setItem('executebonus', Game.player.executeBonus);

    localStorage.setItem('topdiv', Game.player.pageElements.topDiv);
    localStorage.setItem('playTime', Game.player.pageElements.playTime);
    localStorage.setItem('clickcount', Game.player.pageElements.clickCount);
    localStorage.setItem('executebutton', Game.player.pageElements.executeButton);
    localStorage.setItem('monsterinfo', Game.player.pageElements.monsterInfo);
    localStorage.setItem('toggleminfo', Game.player.pageElements.toggleMInfo);
    localStorage.setItem('playerinfo', Game.player.pageElements.playerInfo);
    localStorage.setItem('playername', Game.player.pageElements.playerName);
    localStorage.setItem('playerstats', Game.player.pageElements.playerStats);
    localStorage.setItem('togglepinfo', Game.player.pageElements.togglePInfo);
    localStorage.setItem('playerupgrades', Game.player.pageElements.playerUpgrades);
    localStorage.setItem('resetupgradesbtn', Game.player.pageElements.resetUpgradesBtn);
    localStorage.setItem('information', Game.player.pageElements.information);
    localStorage.setItem('statisticsleft', Game.player.pageElements.statisticsLeft);
    localStorage.setItem('statisticsright', Game.player.pageElements.statisticsRight);
    localStorage.setItem('togglesinfo', Game.player.pageElements.toggleSInfo);
    localStorage.setItem('toggleachievements', Game.player.pageElements.toggleAchievements);
    localStorage.setItem('toggleachievementstwo', Game.player.pageElements.toggleAchievementsTwo);
    localStorage.setItem('transcendbutton', Game.player.pageElements.transcendButton);
    localStorage.setItem('fightcathybtn', Game.player.pageElements.fightCathyBtn);
    localStorage.setItem('logpage', Game.player.pageElements.logPage);
    localStorage.setItem('donate', Game.player.pageElements.donate);
    localStorage.setItem('upgradecathy', Game.player.pageElements.upgradeCathy);
    localStorage.setItem('togglecinfo', Game.player.pageElements.toggleCInfo);
    localStorage.setItem('stopclickbtn', Game.player.pageElements.stopClickBtn);
    localStorage.setItem('monsterbar', Game.player.pageElements.monsterBar);

    localStorage.setItem('aOne', Game.player.achievements.aOne);
    localStorage.setItem('aTwo', Game.player.achievements.aTwo);
    localStorage.setItem('aThree', Game.player.achievements.aThree);
    localStorage.setItem('aFour', Game.player.achievements.aFour);
    localStorage.setItem('aFive', Game.player.achievements.aFive);
    localStorage.setItem('aSix', Game.player.achievements.aSix);
    localStorage.setItem('aSeven', Game.player.achievements.aSeven);
    localStorage.setItem('aEight', Game.player.achievements.aEight);
    localStorage.setItem('aNine', Game.player.achievements.aNine);
    localStorage.setItem('aTen', Game.player.achievements.aTen);
    localStorage.setItem('aEleven', Game.player.achievements.aEleven);
    localStorage.setItem('aTwelve', Game.player.achievements.aTwelve);
    localStorage.setItem('aThirteen', Game.player.achievements.aThirteen);
    localStorage.setItem('aFourteen', Game.player.achievements.aFourteen);
    localStorage.setItem('aFifteen', Game.player.achievements.aFifteen);
    localStorage.setItem('aSixteen', Game.player.achievements.aSixteen);
    localStorage.setItem('aSeventeen', Game.player.achievements.aSeventeen);
    localStorage.setItem('aEighteen', Game.player.achievements.aEighteen);
    localStorage.setItem('aNineteen', Game.player.achievements.aNineteen);
    localStorage.setItem('aTwenty', Game.player.achievements.aTwenty);

    localStorage.setItem('hasdonated', Game.variables.hasDonated);
    localStorage.setItem('spawntime', Game.variables.spawnTime); //move
};

Game.exportSave = function () {
    var textArea = document.getElementById("gameDataString");
    document.getElementById("settingsPopup").innerHTML = "Copy and save this to a plain text file.";
    document.getElementById("settingsPopup").style.visibility = "visible";
    textArea.innerHTML = JSON.stringify(localStorage);
    textArea.focus();
    textArea.select();
};

Game.importSave = function () {

    //change this to text area, prompt is clunky
    var input = prompt("Paste the entire contents of exported save");
    if (input !="") {
        var data = JSON.parse(input);
        for (var key in data) {
            localStorage[key] = data[key]; //add hasOwnProperty to shut jetbrains up
            location.reload();
        }
    }
};

Game.deleteData = function (event)   {

    if (event.target.id == "transcendButton") {
        clearInterval(Game.variables.autoClicker);
        Game.upgrades.reset();
        localStorage.clear();
        Game.player.totalTranscends += 1;
        //Game.player.superCores += 1; //for testing -delete
        Game.player.superCores += Math.floor(Game.player.currentCores / 250000);
        Game.variables.transcend = true;
        localStorage.setItem('transcend', Game.variables.transcend); //why arent these in transcend save
        localStorage.setItem('supercores', Game.player.superCores);
        Game.transcendSave();
    } else {
        if (confirm('DELETE ALL DATA AND START OVER?')) {
            clearInterval(Game.variables.autoClicker);
            localStorage.clear();
        } else { }
    }

    if (Game.variables.hasDonated) { localStorage.setItem('hasdonated', true); }

    location.reload();
};

Game.save = function () {
    Game.transcendSave();

    //==Game.player==//
    localStorage.setItem('playerlevel', Game.player.playerLevel);
    localStorage.setItem('playerexperience', Game.player.playerExperience);
    localStorage.setItem('playerhealth', Game.player.playerHealth);
    localStorage.setItem('playerattack', Game.player.playerAttack);
    localStorage.setItem('playerdefense', Game.player.playerDefense);
    localStorage.setItem('currentCores', Game.player.currentCores);
    localStorage.setItem('playerlevels', JSON.stringify(Game.player.playerLevels));

    localStorage.setItem('upgradescosthp', Game.player.upgradesCostHp);
    localStorage.setItem('upgradescostatk', Game.player.upgradesCostAtk);
    localStorage.setItem('upgradescostdef', Game.player.upgradesCostDef);
    localStorage.setItem('autoatkcost', Game.variables.autoAtkCost);
    localStorage.setItem('autospdcost', Game.variables.autoSpdCost);

    localStorage.setItem('hpupgrades', Game.player.hpUpgrades);
    localStorage.setItem('atkupgrades', Game.player.atkUpgrades);
    localStorage.setItem('defupgrades', Game.player.defUpgrades);
    localStorage.setItem('autoatkupgrades', Game.player.autoAtkUpgrades);
    localStorage.setItem('autospdupgrades', Game.player.autoSpdUpgrades);
    localStorage.setItem('totalupgradescost', Game.player.totalUpgradesCost);

    localStorage.setItem('currentclicks', Game.player.currentClicks);

    localStorage.setItem('kgreenslime', Game.player.monsterKills.greenSlime);
    localStorage.setItem('kredslime', Game.player.monsterKills.redSlime);
    localStorage.setItem('ktreesmall', Game.player.monsterKills.treeSmall);
    localStorage.setItem('kscorpionsmall', Game.player.monsterKills.scorpionSmall);
    localStorage.setItem('kboarsmall', Game.player.monsterKills.boarSmall);
    localStorage.setItem('kgiantsmall', Game.player.monsterKills.giantSmall);
    localStorage.setItem('kgargoylesmall', Game.player.monsterKills.gargoyleSmall);
    localStorage.setItem('kbunnysmall', Game.player.monsterKills.bunnySmall);
    localStorage.setItem('kmanabeast', Game.player.monsterKills.manaBeast);
    localStorage.setItem('kspectersmall', Game.player.monsterKills.specterSmall);
    localStorage.setItem('kdragonsmall', Game.player.monsterKills.dragonSmall);
    localStorage.setItem('kchestsmall', Game.player.monsterKills.chestSmall);
    localStorage.setItem('kgreenboss', Game.player.monsterKills.greenBoss);
    localStorage.setItem('kredboss', Game.player.monsterKills.redBoss);
    localStorage.setItem('ktreeboss', Game.player.monsterKills.treeBoss);
    localStorage.setItem('kscorpionboss', Game.player.monsterKills.scorpionBoss);
    localStorage.setItem('kboarboss', Game.player.monsterKills.boarBoss);
    localStorage.setItem('kgiantboss', Game.player.monsterKills.giantBoss);
    localStorage.setItem('kgargoyleboss', Game.player.monsterKills.gargoyleBoss);
    localStorage.setItem('kbunnyboss', Game.player.monsterKills.bunnyBoss);
    localStorage.setItem('kmanaboss', Game.player.monsterKills.manaBoss);
    localStorage.setItem('kspecterboss', Game.player.monsterKills.specterBoss);
    localStorage.setItem('kdragonboss', Game.player.monsterKills.dragonBoss);
    localStorage.setItem('kcathyboss', Game.player.monsterKills.cathyBoss);

    localStorage.setItem('greenslime', Game.player.monsterStatus.greenSlime);
    localStorage.setItem('redslime', Game.player.monsterStatus.redSlime);
    localStorage.setItem('treesmall', Game.player.monsterStatus.treeSmall);
    localStorage.setItem('scorpionsmall', Game.player.monsterStatus.scorpionSmall);
    localStorage.setItem('boarsmall', Game.player.monsterStatus.boarSmall);
    localStorage.setItem('giantsmall', Game.player.monsterStatus.giantSmall);
    localStorage.setItem('gargoylesmall', Game.player.monsterStatus.gargoyleSmall);
    localStorage.setItem('bunnysmall', Game.player.monsterStatus.bunnySmall);
    localStorage.setItem('manabeast', Game.player.monsterStatus.manaBeast);
    localStorage.setItem('spectersmall', Game.player.monsterStatus.specterSmall);
    localStorage.setItem('dragonsmall', Game.player.monsterStatus.dragonSmall);

    //==Game.cathy==//
    localStorage.setItem('cathyarray', Game.cathy.cathyArray);
    localStorage.setItem('achievementsstring', Game.cathy.achievementsString);
    localStorage.setItem('fightstring', Game.cathy.fightString);
    localStorage.setItem('pause', Game.cathy.pause);
    localStorage.setItem('inFight', Game.cathy.inFight);
    localStorage.setItem('achievementsarray', Game.cathy.achievementsArray);
    localStorage.setItem('fightarray', Game.cathy.fightArray);

    //==Game.variables==//
    localStorage.setItem('monsterids', JSON.stringify(Game.variables.monsterIds));
    localStorage.setItem('bossids', JSON.stringify(Game.variables.bossIds));
    //localStorage.setItem('spawntime', Game.variables.spawnTime);
    localStorage.setItem('stopautoclick', Game.variables.stopAutoClick);
    localStorage.setItem('cathytimer', Game.variables.cathyTimer);
    localStorage.setItem('upgradesresettimer', Game.variables.upgradesResetTimer);
    localStorage.setItem('executetimer', Game.variables.executeTimer);
    localStorage.setItem('autodamage', Game.variables.autoDamage);
    localStorage.setItem('autospeed', Game.variables.autoSpeed);
    localStorage.setItem('upgradecounter', Game.variables.upgradeCounter);
};

Game.load = function () {
    Game.transcendLoad();

    //==Game.player==//
    Game.player.playerLevel = JSON.parse(localStorage.getItem('playerlevel'));
    Game.player.playerExperience = JSON.parse(localStorage.getItem('playerexperience'));
    Game.player.playerHealth = JSON.parse(localStorage.getItem('playerhealth'));
    Game.player.playerAttack = JSON.parse(localStorage.getItem('playerattack'));
    Game.player.playerDefense = JSON.parse(localStorage.getItem('playerdefense'));
    Game.player.currentCores = JSON.parse(localStorage.getItem('currentCores'));
    Game.player.playerLevels = JSON.parse(localStorage.getItem('playerlevels'));

    Game.player.upgradesCostHp = JSON.parse(localStorage.getItem('upgradescosthp'));
    Game.player.upgradesCostAtk = JSON.parse(localStorage.getItem('upgradescostatk'));
    Game.player.upgradesCostDef = JSON.parse(localStorage.getItem('upgradescostdef'));
    Game.variables.autoAtkCost = JSON.parse(localStorage.getItem('autoatkcost'));
    Game.variables.autoSpdCost = JSON.parse(localStorage.getItem('autospdcost'));

    Game.player.hpUpgrades = JSON.parse(localStorage.getItem('hpupgrades'));
    Game.player.atkUpgrades = JSON.parse(localStorage.getItem('atkupgrades'));
    Game.player.defUpgrades = JSON.parse(localStorage.getItem('defupgrades'));
    Game.player.autoAtkUpgrades = JSON.parse(localStorage.getItem('autoatkupgrades'));
    Game.player.autoSpdUpgrades = JSON.parse(localStorage.getItem('autospdupgrades'));
    Game.player.totalUpgradesCost = JSON.parse(localStorage.getItem('totalupgradescost'));

    Game.player.currentClicks = JSON.parse(localStorage.getItem('currentclicks'));

    Game.player.monsterKills.greenSlime = JSON.parse(localStorage.getItem('kgreenslime'));
    Game.player.monsterKills.redSlime = JSON.parse(localStorage.getItem('kredslime'));
    Game.player.monsterKills.treeSmall = JSON.parse(localStorage.getItem('ktreesmall'));
    Game.player.monsterKills.scorpionSmall = JSON.parse(localStorage.getItem('kscorpionsmall'));
    Game.player.monsterKills.boarSmall = JSON.parse(localStorage.getItem('kboarsmall'));
    Game.player.monsterKills.giantSmall = JSON.parse(localStorage.getItem('kgiantsmall'));
    Game.player.monsterKills.gargoyleSmall = JSON.parse(localStorage.getItem('kgargoylesmall'));
    Game.player.monsterKills.bunnySmall = JSON.parse(localStorage.getItem('kbunnysmall'));
    Game.player.monsterKills.manaBeast = JSON.parse(localStorage.getItem('kmanabeast'));
    Game.player.monsterKills.specterSmall = JSON.parse(localStorage.getItem('kspectersmall'));
    Game.player.monsterKills.dragonSmall = JSON.parse(localStorage.getItem('kdragonsmall'));
    Game.player.monsterKills.chestSmall = JSON.parse(localStorage.getItem('kchestsmall'));
    Game.player.monsterKills.greenBoss = JSON.parse(localStorage.getItem('kgreenboss'));
    Game.player.monsterKills.redBoss = JSON.parse(localStorage.getItem('kredboss'));
    Game.player.monsterKills.treeBoss = JSON.parse(localStorage.getItem('ktreeboss'));
    Game.player.monsterKills.scorpionBoss = JSON.parse(localStorage.getItem('kscorpionboss'));
    Game.player.monsterKills.boarBoss = JSON.parse(localStorage.getItem('kboarboss'));
    Game.player.monsterKills.giantBoss = JSON.parse(localStorage.getItem('kgiantboss'));
    Game.player.monsterKills.gargoyleBoss = JSON.parse(localStorage.getItem('kgargoyleboss'));
    Game.player.monsterKills.bunnyBoss = JSON.parse(localStorage.getItem('kbunnyboss'));
    Game.player.monsterKills.manaBoss = JSON.parse(localStorage.getItem('kmanaboss'));
    Game.player.monsterKills.specterBoss = JSON.parse(localStorage.getItem('kspecterboss'));
    Game.player.monsterKills.dragonBoss = JSON.parse(localStorage.getItem('kdragonboss'));
    Game.player.monsterKills.cathyBoss = JSON.parse(localStorage.getItem('kcathyboss'));

    Game.player.monsterStatus.greenSlime = JSON.parse(localStorage.getItem('greenslime'));
    Game.player.monsterStatus.redSlime = JSON.parse(localStorage.getItem('redslime'));
    Game.player.monsterStatus.treeSmall = JSON.parse(localStorage.getItem('treesmall'));
    Game.player.monsterStatus.scorpionSmall = JSON.parse(localStorage.getItem('scorpionsmall'));
    Game.player.monsterStatus.boarSmall = JSON.parse(localStorage.getItem('boarsmall'));
    Game.player.monsterStatus.giantSmall = JSON.parse(localStorage.getItem('giantsmall'));
    Game.player.monsterStatus.gargoyleSmall = JSON.parse(localStorage.getItem('gargoylesmall'));
    Game.player.monsterStatus.bunnySmall = JSON.parse(localStorage.getItem('bunnysmall'));
    Game.player.monsterStatus.manaBeast = JSON.parse(localStorage.getItem('manabeast'));
    Game.player.monsterStatus.specterSmall = JSON.parse(localStorage.getItem('spectersmall'));
    Game.player.monsterStatus.dragonSmall = JSON.parse(localStorage.getItem('dragonsmall'));

    //==Game.cathy==//
    Game.cathy.cathyArray = JSON.parse(localStorage.getItem('cathyarray'));
    Game.cathy.achievementsString = JSON.parse(localStorage.getItem('achievementsstring'));
    Game.cathy.fightString = JSON.parse(localStorage.getItem('fightstring'));
    Game.cathy.pause = JSON.parse(localStorage.getItem('pause'));
    Game.cathy.inFight = JSON.parse(localStorage.getItem('inFight'));
    Game.cathy.achievementsArray = JSON.parse(localStorage.getItem('achievementsarray'));
    Game.cathy.fightArray = JSON.parse(localStorage.getItem('fightarray'));

    //==Game.variables==//
    Game.variables.monsterIds = JSON.parse(localStorage.getItem('monsterids'));
    Game.variables.bossIds = JSON.parse(localStorage.getItem('bossids'));
    //Game.variables.spawnTime = JSON.parse(localStorage.getItem('spawntime'));
    Game.variables.stopAutoClick = JSON.parse(localStorage.getItem('stopautoclick'));
    Game.variables.cathyTimer = JSON.parse(localStorage.getItem('cathytimer'));
    Game.variables.upgradesResetTimer = JSON.parse(localStorage.getItem('upgradesresettimer'));
    Game.variables.executeTimer = JSON.parse(localStorage.getItem('executetimer'));
    Game.variables.autoDamage = JSON.parse(localStorage.getItem('autodamage'));
    Game.variables.autoSpeed = JSON.parse(localStorage.getItem('autospeed'));
    Game.variables.upgradeCounter = JSON.parse(localStorage.getItem('upgradecounter'));
};

Game.setup = function () {
    if (localStorage.length <= 1) { //its 1 because donate variable should never be deleted even on full clear
        console.log("first play");
        Game.variables.hasDonated = JSON.parse(localStorage.getItem('hasdonated'));
        Game.variables.pageRefresh = false;
        Game.save(); //this needs to be here
    } else if (localStorage["transcend"]) { //if they transcended
        console.log("transcend");
        Game.variables.pageRefresh = true;
        Game.transcendLoad();
        //Game.player.bonusExp += Game.player.superCores * 4; //no
        //Game.player.bonusCores += Game.player.superCores * 6; //no
        //Game.variables.autoDamage += Game.player.superCores * 10; //no
        //Game.variables.autoSpeed += Game.player.superCores * 20; //no
        Game.variables.transcend = false;
        localStorage.removeItem("transcend");
        Game.save();
    }
    else { //if the page is refreshed
        Game.variables.pageRefresh = true;
    }

    Game.load();

    var elements;

    //show all page elements for testing -delete
    Game.player.pageElements.setElements = true;
    if (Game.player.pageElements.setElements) {
        for (elements in Game.player.pageElements) {
            Game.player.pageElements[elements] = true;
        }
        delete Game.player.pageElements.setElements;
    } //for testing -delete

    //check for obtained page elements
    for (elements in Game.player.pageElements) {
        if (Game.player.pageElements.hasOwnProperty(elements)) {
            if (Game.player.pageElements[elements] === true) {
                var show = document.getElementById(elements);
                show.style.display = "inherit";
            }
        }
    }

    //populate cathy log -this shares with cathy, make it a method
    for (var n = 0; n < Game.cathy.cathyArray; n++) {
        var parent = document.getElementById("cathyLog");
        var newParagraph = document.createElement("p");
        //newParagraph.id = "line + n";
        var newNode = document.createTextNode(Game.variables.cathyText[n]);
        //newNode.id = "node" + n;
        newParagraph.appendChild(newNode);
        parent.appendChild(newParagraph);
    }

    //==BUTTONS==

    //upgrade buttons
    for (var j = 0; j < Game.variables.upgradeButtons.length; j++) {
        var buttonClick = document.getElementById(Game.variables.upgradeButtons[j]);
        buttonClick.onclick = Game.upgrades.check;
    }

    //toggle buttons
    for (var i = 0; i < Game.variables.toggleBtns.length; i++) { //
        var whichToggle = document.getElementById(Game.variables.toggleBtns[i]);
        whichToggle.onclick = Game.hidePanels;
        whichToggle.which = whichToggle.id;
    }
    //other buttons
    document.getElementById("resetUpgradesBtn").addEventListener("click", function(){ Game.upgrades.reset(); });
    document.getElementById("toggleAchievements").addEventListener("click", function(event){ Game.toggle.achievements(event); });
    document.getElementById("toggleAchievementsTwo").addEventListener("click", function(event){ Game.toggle.achievements(event); });
    document.getElementById("achievementWindow").addEventListener("click", function(event){ Game.toggle.achievements(event); });
    document.getElementById("achievementWindowTwo").addEventListener("click", function(event){ Game.toggle.achievements(event); });
    document.getElementById("stopClickBtn").addEventListener("click", function(event){ Game.toggle.auto(event); });
    document.getElementById("settings").addEventListener("click", function(event){ Game.toggle.settings(event); });
    document.getElementById("logPage").addEventListener("click", function(event){ Game.toggle.log(event); });
    document.getElementById("fightCathyBtn").addEventListener("click", function(){ Game.cathy.fight(); });
    document.getElementById("fightCathyBtn").disabled = true;
    document.getElementById("transcendButton").addEventListener("click", function(event){ Game.deleteData(event); });
    document.getElementById("deleteData").addEventListener("click", function(event){ Game.deleteData(event); });
    document.getElementById("exportSave").addEventListener("click", Game.exportSave);
    document.getElementById("importSave").addEventListener("click", Game.importSave);
    document.getElementById("special").addEventListener("click", Game.forYou);
    if (Game.player.transcendButton) { document.getElementById("toggleAchievementsTwo").disabled = false; }


    //set achievement tooltips
    for (var l = 0; l < Game.variables.tooltipSelectors.length; l++) {
        $("#"+Game.variables.tooltipSelectors[l]).tooltipster({ content: $('<span class="aTooltipTitle">'+Game.variables.tooltipTitles[l]+'<br><span class="aTooltipContents">'+Game.variables.tooltipContents[l]+'</span><br><span class="aTooltipReward">'+Game.variables.tooltipRewards[l]+'</span></span>') });
    }

    //check for achievements
    for (elements in Game.player.achievements) {
        if (Game.player.achievements.hasOwnProperty(elements)) {
            if (Game.player.achievements[elements] === true) {
                //console.log("true*");
                Game.setTooltips(elements);
            }
        }
    }

    //set bonuses
    if (!Game.variables.pageRefresh) { Game.player.playerAttack = Game.player.bonusAtk + 1; }
    Game.variables.stopAutoClick = true; //for testing -dont put this here!

    //set gui
    Game.playTime();
    Game.clickCounter();
    Game.showPlayerInfo();
    Game.achievements();
    Game.upgrades.check();
    Game.setConservation();
    if (Game.player.totalTranscends < 1) { Game.cathy.talk(null); }

    //check for timers and set them if active
    if (localStorage["executecountdown"]) { Game.execute.removeMonster(); }
    if (localStorage["upgradesresetcountdown"]) { Game.upgrades.timer(); }
    if (localStorage["cathycountdown"]) { Game.cathyTimer(); }

    //set conservation status
    for (elements in Game.player.monsterStatus) {
        if (Game.player.monsterStatus.hasOwnProperty(elements)) {
            if (Game.player.monsterStatus[elements] == true) {
                var which = document.getElementById(String("s" + elements));
                $('#' + which.closest("li").id).fadeIn(500);
                which.innerHTML = "Extinct";
                which.className = "extinct";
            }
        }
    }

    //set monster titles
    for (var k = 0; k < 11; k++) {
        if (Game.player.superCores < Game.variables.monsterTitles.length) {
            Game.variables.monsterNames.push(Game.variables.monsterNames[k] + " " + Game.variables.monsterTitles[Game.player.superCores]);
        } else {
            Game.variables.monsterNames.push(Game.variables.monsterNames[k] + " " + "Supreme God");
        }
    }

    //set monster levels
    for (var m = 1; m <= 11; m++) {
        if (Game.player.superCores < Game.variables.monsterTitles.length) {
            if (Game.player.superCores < 1) {
                Game.variables.monsterLevels.push(m + 10);
            } else {
                Game.variables.monsterLevels.push(Game.player.superCores * 10 + m);
            }
        } else {
            Game.variables.monsterLevels.push(99);
        }
    }

    //on blur set auto damage equal to dps (because browsers cap intervals at 1 second)
    Game.variables.currentDamage = Game.variables.autoDamage + Game.player.bonusAutoAtk;

    $(window).blur(function(){
        Game.variables.currentDamage = ((Game.variables.autoDamage + Game.player.bonusAutoAtk) * (Game.variables.autoSpeed * .1)).toFixed(2);
        //console.log("BLUR DMG: " + Game.variables.currentDamage);
    });
    $(window).focus(function(){
        Game.variables.currentDamage = Game.variables.autoDamage + Game.player.bonusAutoAtk;
        //console.log("FOCUS DMG: " + Game.variables.currentDamage);
    });

    var currentMonster = Game.saveMonster();

    Game.summonMonster(currentMonster);

    Game.variables.pageRefresh = false;
};

Game.start = function () {
    //Game.deleteData(); //for testing
    Game.setup();
};

window.onload = function () { Game.start(); };

//TODO REMOVE ABOUT PAGE COMPLETELY -have it be a popup
//TODO confirm dialogue on transcend
//TODO make a save/load module
//TODO making clicking more beneficial (stats overhaul)
//TODO player gets hit indicator http://stackoverflow.com/questions/275931/how-do-you-make-an-element-flash-in-jquery
//TODO log page
//TODO about page
//TODO "e" to execute
//TODO use getters and setters for player cores
//TODO remove all saves except the one -will only save every second (maybe give option to save for their peace of mind

//stats overhaul
//TODO

//low priority
//TODO elite achievements disabled on transcend -possibly fixed -test
//TODO pause cathy when necessary and at end of main array (or find a better way)
//TODO transcend button on "how many clicks does it take to get to the core" -test