//Made by: MrAndroPC
//Currently WIP, doesn't work as it should be yet

/**@typedef {import('../../gamedata_typedefs.js').GameData} GameData */
module.exports = {
    signature: "playerVassalizingAI",
    args: [
        {
            name: "changePoliticalScore",
            type: "number",
            desc: "Required argument, range (-10, 10). Specifies {{aiName}} vassalization acceptance by {{playerName}}. Positive values mean that {{aiName}} tends to accept vassalization by {{playerName}}. Negative values mean that {{aiName}} tends to reject vassalization by {{playerName}}."
        }
        // {
        //     name: "changePlayerPoliticalScore",
        //     type: "number",
        //     desc: "Required argument, range (-10, 20). Specifies how strong {{playerName}}'s proposal score to vassalize {{aiName}} will be added in this after last message"
        // }
    ],
    description: `Execute when {{aiName}} and {{playerName}} are debating about {{playerName}}'s vassalization of {{aiName}}.`,
    
    /**
     * @param {GameData} gameData 
     */
    check: (gameData) => {
        let ai = gameData.getAi();
        let player = gameData.getPlayer();

        console.log(`PVAI: ${ai.opinionOfPlayer} ${player.isLandedRuler} ${ai.isLandedRuler}`)
            if ((ai.opinionOfPlayer >= -30) && (player.isLandedRuler) && (ai.isLandedRuler)){
                if (ai.hasTrait("VassalizationDebateScore")) {
                    let aiScore = Number(ai.traits.find(trait => trait.name === "VassalizationDebateScore").desc);
                    return (aiScore > -20)
                }
                else {
                    ai.addTrait({
                        category: "politicalVariable",
                        name: "VassalizationDebateScore",
                        desc: `0`
                    });
                    console.log(`PVAI: Added trait to ${ai.shortName}`);
                return true
                }
        }
        else {
            return false
        }
        
    },

    /**
     * @param {GameData} gameData 
     * @param {Function} runGameEffect
     * @param {string[]} args 
     */
    run: (gameData, runGameEffect, args) => {
        let ai = gameData.getAi();
        
        console.log(`PVAI: score: ${ai.traits.find(trait => trait.name === "VassalizationDebateScore").desc}`)
        
        let aiScore = Number(ai.traits.find(trait => trait.name === "VassalizationDebateScore").desc) + Number(args[0]);
        console.log(`PVAI: new_score: ${aiScore}`)

        if (aiScore >= 30) {
            runGameEffect(`
                global_var:talk_second_scope = {
                    change_liege = {
                        liege = global_var:talk_first_scope
                        change = scope:change
                    }
                }
            `); 
        } else {
            ai.traits.find(trait => trait.name === "VassalizationDebateScore").desc = aiScore;
            runGameEffect(``); 
        }
        args[1] = aiScore
    },

    chatMessage: (args) => {
        let aiScore = args[1]
        console.log(`PVAIchat: score: ${aiScore}`)
        if (aiScore > 30) {
            console.log(`PVAIchat: if`)
            return `{{aiName}} agreed to be vassalized by {{playerName}}.`;
        } else {
            console.log(`PVAIchat: else`)
            return `Acceptance score: ${aiScore} | Vassalization if score > 30, negotiations breakdown if < -20`;
        }
    },
    
    chatMessageClass: "positive-action-message"
};
