"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			"Songs",
			[
				{
					title: "Grave Digger",
					youtube_link: "ImyqYYSSQIU",
					artist_id: "1",
					album_id: "1",
					length: "238",
					track_number: "1",
					lyrics: `I can't run to you, father\nI need love\nI can't talk to you, mother\nI know it's got you caught up\nBut your sweet sinless sensation is not my style\nAnd I'm not giving up\nBut tell me if I run away\nHow long will I bleed?\nSo tell me if I run away\nHow long will I bleed?\nColors blend\nThey're all black and white\nGod damnit, I can not bend\nI'm all shriveled inside\nBut your sweet sinless sensation is not my style\nAnd I'm not giving up\nSo tell me if I run away\nHow long will I bleed?\nTell me if I run away\nHow long will I bleed?\nAin't no point in tryna picking me up when I'm down\nYeah, you can stick out your hand\nAnd you can lean towards the ground\nI'll be tryna suck all of the liquid out the dirt\nTryna catch a curve, digging my own grave\nOoh mama\nI'll be tryna suck the liquid out the dirt\nTryna catch a curve, digging my own grave\nOoh mama\nBut your sweet sinless sensation is not my style\nAnd I'm not giving up\nSo tell me if I run away\nHow long will I bleed?\nTell me if I run away\nHow long will I bleed?`,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					title: "Cringe",
					youtube_link: "eoJtlPQzqkQ",
					artist_id: "1",
					album_id: "1",
					length: "225",
					track_number: "2",
					lyrics: `Lover come over\nLook what I done\nI been alone so long\nI feel like I'm on the run\nLover come over\nKick up the dust\nI got a secret\nStarting to rust\nShe said I'm looking like a bad man\nSmooth criminal\nShe said my spirit doesn't move like it did before\nShe said that I don't look like me no more no more\nI said I'm just tired\nShe said you're just high\nI said I saw you in the water\nI said I saw you in the water\nLover come hold me\nHeads on the fritz\nBody intoxicated\nFeelings comfortably mixed\nLover come hold me\nCould you forget?\nI got a secret\nDigging a ditch\nShe said I'm looking like a bad man\nSmooth criminal\nShe said my spirit doesn't move like it did before\nShe said that I don't look like me no more no more\nI said I'm just tired\nShe said you're just high\nI said I saw you in the water\nI said I saw you in the water\nSweating all your sins out\nPutting all your thoughts back together\nOh, we just don't blend out\nAll of my attempts seem to weather\nOh, I make you cringe now\nDon't I make you cringe?\nOh, I make you cringe now\nDon't I make you cringe?\nShe said I'm looking like a bad man\nSmooth criminal\nShe said my spirit doesn't move like it did before\nShe said that I don't look like me no more no more\nI said I'm just tired\nShe said I'm looking like a bad man\nSmooth criminal\nShe said my spirit doesn't move like it did before\nShe said that I don't look like me no more no more\nI said I'm just tired\nShe said you're just high\nI said I saw you in the water (do I make you cringe?)\nI said I saw you in the water (do I make you cringe?)\nI said I saw you in the water (do I make you cringe?)\nI said I saw you in the water (do I make you cringe?)`,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					title: "Me And My Friends Are Lonely",
					youtube_link: "UN0aiXcksu0",
					artist_id: "1",
					album_id: "1",
					length: "180",
					track_number: "3",
					lyrics: `I can't open up to you\nMe and my friends are lonely\nI don't know what to do\nI always figured I'd be the one to die alone\nI cope smothered in smoke\nDeep high, drape my soul in\nI know things that you don't\nI've met murdering folk\nAnd they took one of our own\nThey took our innocent home\nSo I can't open up to you\nMe and my friends are lonely\nI don't know what to do\nI always figured I'd be the one to die alone\nSo is there any lesson in confessing that you posted up\nLike Jesus on the corner selling baggies full of blessing?\nIs it stressing all the things that you have morally accepted?\nIs it vexing wearing clothes that you have bled in?\nPicture perfect victim, overwhelmed and so sadistic\nI was looking for a purpose, what a chance you had some with you\nOn the street when I forgot, the city breathes when I do not\nIf I leave it does not stop here, no\nSo is there any treason in the tricky little price I pay?\nOh is there any treason in the tricky little price I pay?\nI can't open up to you\nMe and my friends are lonely\nI don't know what to do\nI always figured I'd be the one to die alone\nI always figured I'd be the one to die alone\nI always figured that I'd be the one to die alone`,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					title: "Straight Razor",
					youtube_link: "-kujDa4D4EQ",
					artist_id: "1",
					album_id: "1",
					length: "262",
					track_number: "4",
					lyrics: `Hey Mr. Stargazer\nGive me a straight razor\nDon't let it all faze her\nWhen my news gets so major\n'Cause it don't stop\nNo it don't end\nOh when the seams will start wearing thin\nOh and we'll see if the same thing goes for them\nOh and I tried to start caring like you and like them\nWhen you said that I was killing myself\nI healed everything but my shame\nHey Mr. Trailblazer\nSpare you a joint paper\nIt's strange how the days layer\nAnd weigh on you years later\n'Cause it don't stop\nNo it don't end\nOh when the seams will start wearing thin\nOh and we'll see if the same thing goes for them\nOh and I tried to start caring like you and like them\nWhen you said that I was killing myself\nI've killed everything but my shame\nOh and I'll try to convince myself I'm worth it\nOh and you'll lie with your strange and fitting purpose\nOh and I'll try to convince myself I'm worth it\nOh and you'll lie with your strange and fitting purpose\nWell, I swore I would never go there\nOh oh\nI've killed everything but my shame\nShame shame shame\nWell, I swore I would never go there\nOh oh oh\nI've healed everything but my shame\nShame shame shame\nHey Mr. Stargazer\nGive me a straight razor\nHey Mr. Trailblazer\nSpare you a joint paper\nHey Mr. Stargazer\nGive me a straight razor`,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					title: "Tribulation",
					youtube_link: "E44rXf8696w",
					artist_id: "1",
					album_id: "1",
					length: "203",
					track_number: "5",
					lyrics: `Darlin', can't you see\nI'm a broken man\nWith addictive tendencies\nAnd I think I love you\nBut I don't ever think I can\nEver learn how to love just right\nSo run away from me\nRun as far as your\nDark brown eyes can see\nJust as soon as you know\nThat I don't ever think I can\nEver learn how to love you right\nOh and all the ways you wont bend\nAre the only ways I live my life\nOh and I'm tryin' to cope\nAnd burn just right, yeah\nOh and I don't ever think I can\nEver learn how to love you right\nDarlin', can't you see\nI'm a broken man\nWith addictive tendencies\nAnd I think I love you\nBut I don't ever think I can\nEver learn how to love just right\nSo run away from me\nRun as far as your\nDark brown eyes can see\nJust as soon as you know\nThat I don't ever think I can\nEver learn how to love you right\nOh and all the ways you won't bend\nAre the only ways I live my life\nOh and I'm tryin' to cope\nAnd burn just right, yeah\nOh and I don't ever think I can\nEver learn how to love you right\nI think I'm better on my own\nBut I get so lost in you\nI think I'm better on my own\nBut I'm so obsessed with you\nI think I'm better on my own\nBut I get so lost in you\nI think I'm better on my own\nBut I'm so obsessed with you\nAnd I don't ever think I can\nEver learn how to love you right\nOh and all the ways you won't bend\nAre the only ways I live my life\nOh and I'm tryin' to cope\nAnd burn just right, yeah\nOh and I don't ever think I can\nEver learn how to love you right\nAnd I don't ever think I can\nLove you right\nOh, and I don't ever think I can\nEver learn how to love you right`,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					title: "Twenty Twelve",
					youtube_link: "oz8NDZ9ids4",
					artist_id: "1",
					album_id: "1",
					length: "174",
					track_number: "6",
					lyrics: `Maybe I'll stay right here\nMaybe I'll keep this mind\nMaybe I'll live in this moment forever\nMaybe I'll speak to you\nMaybe I'll walk this line\nMaybe I'll adjust to adjusting together\nI could open the door and breathe in the dust\nAnd I could walk through those flames till I don't feel their touch\nOh but how can I leave when I know what's out there\nMaybe I'll lie to you\nMaybe I'll play this role\nMaybe I'll act like my act is together\nMaybe I'll go through life without hope\nAnd maybe I'll open the door and fall through the floor\nI could open the door and breathe in the dust\nAnd I could walk through those flames till I don't feel their touch\nOh but how can I leave when I know what's out there\nMaybe I could stop\nFocusing on the particular\nCould you help me\nStop focusing on the particular\nOh focusing on the particular`,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					title: "Aura",
					youtube_link: "1bGI3fwz40c",
					artist_id: "2",
					album_id: "2",
					length: "179",
					track_number: "2",
					lyrics: `Oh, when we fuck\nOh, when we fuck\nOh, when we fuck\nOh, when we fuck\nI gave you everything\nYou gave me nothing for what I have done\nI gave you everything\nYou gave me reasons, oh, baby, I'm done\nYou had no aura, I had no wings\nYou had your troubles and I had my things\nI wrote you a letter, \"Dear future wife\nYou brought the emptiness into my life\"\nI'm on my own, I'm better alone\nAnd now that you're gone, yeah, I feel alive\nI'm on my own, I'm better alone\nAnd now that you're gone, yeah, I feel alive\nWhen you hold me like that\nWhen you touch me like that\nWhen we fuck, oh, when we fuck\nWell, I'm burning myself\nAnd I'm hurting myself\nWhen we fuck, oh, when we fuck\nOh, when we fuck\nOh, when we fuck\nOh, when we fuck\nOh, when we fuck\nI'm on my own, I'm better alone\nAnd now that you're gone, yeah, I feel alive\nI'm on my own, I'm better alone\nAnd now that you're gone, yeah, I feel alive\nWhen you hold me like that\nWhen you touch me like that\nWhen we fuck, oh, when we fuck\nWell, I'm burning myself\nAnd I'm hurting myself\nWhen we fuck, oh, when we fuck`,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					title: "Introducción",
					youtube_link: "H03pQeneb5M",
					artist_id: "2",
					album_id: "2",
					length: "54",
					track_number: "1",
					lyrics: `I remember the time with you\nThe good times, the bad times\nI'm sorry for what I'm about to say, my love\n\"I love you\", excuse me`,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					title: "Never Go Back",
					youtube_link: "lhGl9D514Bc",
					artist_id: "2",
					album_id: "2",
					length: "176",
					track_number: "3",
					lyrics: `I never go back\nNo, no, no\nI never go\nI never go back\nI never go back\nNo, no, no\nI never go\nI never go back\nIt's not my baby\nNot the girl I knew then\nNot the girl I know now, anymore\nI wanna leave you\nBaby don't you leave me\nBaby don't you love me? Mi amor\nAlways look around girl\nTryna see the good things\nWhy you'd always say that you never done wrong?\nWhy you never hold me?\nTell me that you love me\nWhy you'd always say that you'd never let go?\nI never go back\nNo, no, no\nI never go\nI never go back\nI never go back\nNo, no, no\nI never go\nI never go back\nI wanna do this\nI don't wanna do this\nGirl, we shouldn't do this anymore\nQuiero dejarte, ¿no me necesitas?\n¿Por qué siempre dices\nEso mi amor?\nAlways look around girl\nTryna see the good things\nWhy you'd always say that you never done wrong?\nWhy you never hold me?\nTell me that you love me\nWhy you'd always say that you'd never let go?\nI never go back\nNo, no, no\nI never go\nI never go back\nI never go back\nNo, no, no\nI never go\nI never go back\n(I never go back)\nI wanna leave you, wanna leave you\nBut I can't let go (I can't do it)\nI wanna leave you, wanna leave you\nBut I can't let go (I can't do it)\nI wanna leave you, wanna leave you\nBut I can't let go (I can't do it)\nI wanna leave you, wanna leave you\nBut I can't let go (I can't do it)\nAlways look around girl\nTryna see the good things (I wanna leave you, wanna leave you)\nWhy you'd always say that you never done wrong? (I wanna leave you, wanna leave you)\nWhy you never hold me? (I wanna leave you)\nTell me that you love me (wanna leave you)\nWhy you'd always say that you'd never let go?\nI never go back\nNo, no, no\nI never go (I never go)\nI never go back (I never go back)\nI never go back\nNo, no, no\nI never go (I never go)\nI never go back\nAlways look around girl\nTryna see the good things\nWhy you'd always say that you never done wrong?\nWhy you never hold me?\nTell me that you love me\nWhy you'd always say that you'd never let go?\nI never go back\nNo, no, no\nI never go\nI never go back (I wanna leave you)\nI never go back\nNo, no, no\nI never go\nI never go back`,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					title: "GFY",
					youtube_link: "CIqiB9zSLmM",
					artist_id: "2",
					album_id: "2",
					length: "224",
					track_number: "4",
					lyrics: `Gotta think about it\nGotta think about it\nGotta think about it\nGotta think about it\nHere I am, girl, talking to myself again\nEvery night I think about a way to end\nAll these accusations, all these allegations\nDo you wanna know what I really think about them?\nAll these situations, riding on my patience\nDo you wanna know what I really think about you, baby?\nGo fuck yourself\nBitch, I gotta say that\nBitch, I gotta say that\nGo\nGo fuck yourself\nBitch, I gotta say that\nBitch, I gotta say that\nGo\nHere I am, girl, talking to myself again\nEvery day I think about the words you said yeah\nAll these accusations, all these allegations\nDo you wanna know what I really think about them?\nAll these situations, riding on my patience\nDo you wanna know what I really think about you, baby?\nGo fuck yourself\nBitch, I gotta say that\nBitch, I gotta say that\nGo\nGo fuck yourself\nBitch, I gotta say that\nBitch, I gotta say that\nGo\nAnd whether your relationship is awful, good, or great\nWe don't like endings\nWe don't like to lose things\nAnd especially, we don't like to lose things that are important to us\nAnd make no mistake\nRelationships are the single most important thing to you and your life\nIt's the source of all of your best memories\nIt's the source of all of your worst memories\nWhen you think back on your life\nAnd you're 95, a hundred years old\nAnd you look back over the course of your lifetime\nYou're not gonna think\nI wish I owned a better phone\nI wish I spent more time on the internet\nI wish I spent more time at work or sleeping\nIt's not gonna be any of those kinds of things\nIt's gonna be I wish I spent more time with the people I love\nWhere do you belong if I gotta think about it?\nGotta think about it, baby\nWhere do you belong if I gotta think about it?\nGotta think about it, baby\nWhere do you belong if I gotta think about it?\nGotta think about it, baby\nWhere do you belong if I gotta think about it?\nGotta think about it, baby\nWhere do you belong if I gotta think about it?\nGotta think about it, baby\nWhere do you belong if I gotta think about it?\nGotta think about it`,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					title: "Runaway",
					youtube_link: "qUL1Ng3dj0I",
					artist_id: "2",
					album_id: "2",
					length: "220",
					track_number: "5",
					lyrics: `I remember when\nI remember when you told me, baby\nThoughts I've never had\nI remember how you loved them, baby\nBaby, don't you love me?\nBaby, don't you need me?\nWhy you never tolerate?\nLoca Colombiana\nLivin' off my honey\nDrinkin' all my money\nI ain't gonna tell you that\nFuck you, baby\nRun, run, run away\nI don't wanna think about you, baby\nRun, run, run away\nI don't wanna think about you, baby\nI remember when\nI remember when you told me, baby\nThoughts I've never had\nI remember how you loved them, baby\nBaby, don't you love me?\nBaby, don't you need me?\nWhy you never tolerate?\nLoca Colombiana\nLivin' off my honey\nDrinkin' all my money\nI ain't gonna tell you that\nFuck you, baby\nRun, run, run away\nI don't wanna think about you, baby\nRun, run, run away\nI don't wanna think about you, baby\nFuck you, baby\nRun, run, run away\nI don't wanna think about you, baby\n(I don't wanna think no more)\nRun, run, run away\nI don't wanna think about you, baby\n(No more, no more)`,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				}
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("Songs", null, {});
	}
};
