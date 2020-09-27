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
			"songs",
			[
				{
					title: "Grave Digger",
					youtube_link: "ImyqYYSSQIU",
					artist_id: 5,
					album_id: 5,
					length: 238,
					track_number: 1,
					lyrics: `I can't run to you, father
          I need love
          I can't talk to you, mother
          I know it's got you caught up
          But your sweet sinless sensation is not my style
          And I'm not giving up
          But tell me if I run away
          How long will I bleed?
          So tell me if I run away
          How long will I bleed?
          Colors blend
          They're all black and white
          God damnit, I can not bend
          I'm all shriveled inside
          But your sweet sinless sensation is not my style
          And I'm not giving up
          So tell me if I run away
          How long will I bleed?
          Tell me if I run away
          How long will I bleed?
          Ain't no point in tryna picking me up when I'm down
          Yeah, you can stick out your hand
          And you can lean towards the ground
          I'll be tryna suck all of the liquid out the dirt
          Tryna catch a curve, digging my own grave
          Ooh mama
          I'll be tryna suck the liquid out the dirt
          Tryna catch a curve, digging my own grave
          Ooh mama
          But your sweet sinless sensation is not my style
          And I'm not giving up
          So tell me if I run away
          How long will I bleed?
          Tell me if I run away
          How long will I bleed?`,
					upload_at: new Date(),
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: "Cringe",
					youtube_link: "eoJtlPQzqkQ",
					artist_id: 5,
					album_id: 5,
					length: 225,
					track_number: 2,
					lyrics: `Lover come over
          Look what I done
          I been alone so long
          I feel like I'm on the run
          Lover come over
          Kick up the dust
          I got a secret
          Starting to rust
          She said I'm looking like a bad man
          Smooth criminal
          She said my spirit doesn't move like it did before
          She said that I don't look like me no more no more
          I said I'm just tired
          She said you're just high
          I said I saw you in the water
          I said I saw you in the water
          Lover come hold me
          Heads on the fritz
          Body intoxicated
          Feelings comfortably mixed
          Lover come hold me
          Could you forget?
          I got a secret
          Digging a ditch
          She said I'm looking like a bad man
          Smooth criminal
          She said my spirit doesn't move like it did before
          She said that I don't look like me no more no more
          I said I'm just tired
          She said you're just high
          I said I saw you in the water
          I said I saw you in the water
          Sweating all your sins out
          Putting all your thoughts back together
          Oh, we just don't blend out
          All of my attempts seem to weather
          Oh, I make you cringe now
          Don't I make you cringe?
          Oh, I make you cringe now
          Don't I make you cringe?
          She said I'm looking like a bad man
          Smooth criminal
          She said my spirit doesn't move like it did before
          She said that I don't look like me no more no more
          I said I'm just tired
          She said I'm looking like a bad man
          Smooth criminal
          She said my spirit doesn't move like it did before
          She said that I don't look like me no more no more
          I said I'm just tired
          She said you're just high
          I said I saw you in the water (do I make you cringe?)
          I said I saw you in the water (do I make you cringe?)
          I said I saw you in the water (do I make you cringe?)
          I said I saw you in the water (do I make you cringe?)`,
					upload_at: new Date(),
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: "Me And My Friends Are Lonely",
					youtube_link: "UN0aiXcksu0",
					artist_id: 5,
					album_id: 5,
					length: 180,
					track_number: 3,
					lyrics: `I can't open up to you
          Me and my friends are lonely
          I don't know what to do
          I always figured I'd be the one to die alone
          I cope smothered in smoke
          Deep high, drape my soul in
          I know things that you don't
          I've met murdering folk
          And they took one of our own
          They took our innocent home
          So I can't open up to you
          Me and my friends are lonely
          I don't know what to do
          I always figured I'd be the one to die alone
          So is there any lesson in confessing that you posted up
          Like Jesus on the corner selling baggies full of blessing?
          Is it stressing all the things that you have morally accepted?
          Is it vexing wearing clothes that you have bled in?
          Picture perfect victim, overwhelmed and so sadistic
          I was looking for a purpose, what a chance you had some with you
          On the street when I forgot, the city breathes when I do not
          If I leave it does not stop here, no
          So is there any treason in the tricky little price I pay?
          Oh is there any treason in the tricky little price I pay?
          I can't open up to you
          Me and my friends are lonely
          I don't know what to do
          I always figured I'd be the one to die alone
          I always figured I'd be the one to die alone
          I always figured that I'd be the one to die alone`,
					upload_at: new Date(),
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: "Straight Razor",
					youtube_link: "-kujDa4D4EQ",
					artist_id: 5,
					album_id: 5,
					length: 262,
					track_number: 4,
					lyrics: `Hey Mr. Stargazer
          Give me a straight razor
          Don't let it all faze her
          When my news gets so major
          'Cause it don't stop
          No it don't end
          Oh when the seams will start wearing thin
          Oh and we'll see if the same thing goes for them
          Oh and I tried to start caring like you and like them
          When you said that I was killing myself
          I healed everything but my shame
          Hey Mr. Trailblazer
          Spare you a joint paper
          It's strange how the days layer
          And weigh on you years later
          'Cause it don't stop
          No it don't end
          Oh when the seams will start wearing thin
          Oh and we'll see if the same thing goes for them
          Oh and I tried to start caring like you and like them
          When you said that I was killing myself
          I've killed everything but my shame
          Oh and I'll try to convince myself I'm worth it
          Oh and you'll lie with your strange and fitting purpose
          Oh and I'll try to convince myself I'm worth it
          Oh and you'll lie with your strange and fitting purpose
          Well, I swore I would never go there
          Oh oh
          I've killed everything but my shame
          Shame shame shame
          Well, I swore I would never go there
          Oh oh oh
          I've healed everything but my shame
          Shame shame shame
          Hey Mr. Stargazer
          Give me a straight razor
          Hey Mr. Trailblazer
          Spare you a joint paper
          Hey Mr. Stargazer
          Give me a straight razor`,
					upload_at: new Date(),
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: "Tribulation",
					youtube_link: "E44rXf8696w",
					artist_id: 5,
					album_id: 5,
					length: 203,
					track_number: 5,
					lyrics: `Darlin', can't you see
          I'm a broken man
          With addictive tendencies
          And I think I love you
          But I don't ever think I can
          Ever learn how to love just right
          So run away from me
          Run as far as your
          Dark brown eyes can see
          Just as soon as you know
          That I don't ever think I can
          Ever learn how to love you right
          Oh and all the ways you wont bend
          Are the only ways I live my life
          Oh and I'm tryin' to cope
          And burn just right, yeah
          Oh and I don't ever think I can
          Ever learn how to love you right
          Darlin', can't you see
          I'm a broken man
          With addictive tendencies
          And I think I love you
          But I don't ever think I can
          Ever learn how to love just right
          So run away from me
          Run as far as your
          Dark brown eyes can see
          Just as soon as you know
          That I don't ever think I can
          Ever learn how to love you right
          Oh and all the ways you won't bend
          Are the only ways I live my life
          Oh and I'm tryin' to cope
          And burn just right, yeah
          Oh and I don't ever think I can
          Ever learn how to love you right
          I think I'm better on my own
          But I get so lost in you
          I think I'm better on my own
          But I'm so obsessed with you
          I think I'm better on my own
          But I get so lost in you
          I think I'm better on my own
          But I'm so obsessed with you
          And I don't ever think I can
          Ever learn how to love you right
          Oh and all the ways you won't bend
          Are the only ways I live my life
          Oh and I'm tryin' to cope
          And burn just right, yeah
          Oh and I don't ever think I can
          Ever learn how to love you right
          And I don't ever think I can
          Love you right
          Oh, and I don't ever think I can
          Ever learn how to love you right`,
					upload_at: new Date(),
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: "Twenty Twelve",
					youtube_link: "oz8NDZ9ids4",
					artist_id: 5,
					album_id: 5,
					length: 174,
					track_number: 6,
					lyrics: `Maybe I'll stay right here
          Maybe I'll keep this mind
          Maybe I'll live in this moment forever
          Maybe I'll speak to you
          Maybe I'll walk this line
          Maybe I'll adjust to adjusting together
          I could open the door and breathe in the dust
          And I could walk through those flames till I don't feel their touch
          Oh but how can I leave when I know what's out there
          Maybe I'll lie to you
          Maybe I'll play this role
          Maybe I'll act like my act is together
          Maybe I'll go through life without hope
          And maybe I'll open the door and fall through the floor
          I could open the door and breathe in the dust
          And I could walk through those flames till I don't feel their touch
          Oh but how can I leave when I know what's out there
          Maybe I could stop
          Focusing on the particular
          Could you help me
          Stop focusing on the particular
          Oh focusing on the particular`,
					upload_at: new Date(),
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: "Aura",
					youtube_link: "1bGI3fwz40c",
					artist_id: 6,
					album_id: 6,
					length: 179,
					track_number: 2,
					lyrics: `Oh, when we fuck
          Oh, when we fuck
          Oh, when we fuck
          Oh, when we fuck
          I gave you everything
          You gave me nothing for what I have done
          I gave you everything
          You gave me reasons, oh, baby, I'm done
          You had no aura, I had no wings
          You had your troubles and I had my things
          I wrote you a letter, "Dear future wife
          You brought the emptiness into my life"
          I'm on my own, I'm better alone
          And now that you're gone, yeah, I feel alive
          I'm on my own, I'm better alone
          And now that you're gone, yeah, I feel alive
          When you hold me like that
          When you touch me like that
          When we fuck, oh, when we fuck
          Well, I'm burning myself
          And I'm hurting myself
          When we fuck, oh, when we fuck
          Oh, when we fuck
          Oh, when we fuck
          Oh, when we fuck
          Oh, when we fuck
          I'm on my own, I'm better alone
          And now that you're gone, yeah, I feel alive
          I'm on my own, I'm better alone
          And now that you're gone, yeah, I feel alive
          When you hold me like that
          When you touch me like that
          When we fuck, oh, when we fuck
          Well, I'm burning myself
          And I'm hurting myself
          When we fuck, oh, when we fuck`,
					upload_at: new Date(),
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: "Introducción",
					youtube_link: "H03pQeneb5M",
					artist_id: 6,
					album_id: 6,
					length: 54,
					track_number: 1,
					lyrics: `I remember the time with you
          The good times, the bad times
          I'm sorry for what I'm about to say, my love
          "I love you", excuse me`,
					upload_at: new Date(),
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: "Never Go Back",
					youtube_link: "lhGl9D514Bc",
					artist_id: 6,
					album_id: 6,
					length: 176,
					track_number: 3,
					lyrics: `I never go back
          No, no, no
          I never go
          I never go back
          I never go back
          No, no, no
          I never go
          I never go back
          It's not my baby
          Not the girl I knew then
          Not the girl I know now, anymore
          I wanna leave you
          Baby don't you leave me
          Baby don't you love me? Mi amor
          Always look around girl
          Tryna see the good things
          Why you'd always say that you never done wrong?
          Why you never hold me?
          Tell me that you love me
          Why you'd always say that you'd never let go?
          I never go back
          No, no, no
          I never go
          I never go back
          I never go back
          No, no, no
          I never go
          I never go back
          I wanna do this
          I don't wanna do this
          Girl, we shouldn't do this anymore
          Quiero dejarte, ¿no me necesitas?
          ¿Por qué siempre dices
          Eso mi amor?
          Always look around girl
          Tryna see the good things
          Why you'd always say that you never done wrong?
          Why you never hold me?
          Tell me that you love me
          Why you'd always say that you'd never let go?
          I never go back
          No, no, no
          I never go
          I never go back
          I never go back
          No, no, no
          I never go
          I never go back
          (I never go back)
          I wanna leave you, wanna leave you
          But I can't let go (I can't do it)
          I wanna leave you, wanna leave you
          But I can't let go (I can't do it)
          I wanna leave you, wanna leave you
          But I can't let go (I can't do it)
          I wanna leave you, wanna leave you
          But I can't let go (I can't do it)
          Always look around girl
          Tryna see the good things (I wanna leave you, wanna leave you)
          Why you'd always say that you never done wrong? (I wanna leave you, wanna leave you)
          Why you never hold me? (I wanna leave you)
          Tell me that you love me (wanna leave you)
          Why you'd always say that you'd never let go?
          I never go back
          No, no, no
          I never go (I never go)
          I never go back (I never go back)
          I never go back
          No, no, no
          I never go (I never go)
          I never go back
          Always look around girl
          Tryna see the good things
          Why you'd always say that you never done wrong?
          Why you never hold me?
          Tell me that you love me
          Why you'd always say that you'd never let go?
          I never go back
          No, no, no
          I never go
          I never go back (I wanna leave you)
          I never go back
          No, no, no
          I never go
          I never go back`,
					upload_at: new Date(),
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: "GFY",
					youtube_link: "CIqiB9zSLmM",
					artist_id: 6,
					album_id: 6,
					length: 224,
					track_number: 4,
					lyrics: `Gotta think about it
          Gotta think about it
          Gotta think about it
          Gotta think about it
          Here I am, girl, talking to myself again
          Every night I think about a way to end
          All these accusations, all these allegations
          Do you wanna know what I really think about them?
          All these situations, riding on my patience
          Do you wanna know what I really think about you, baby?
          Go fuck yourself
          Bitch, I gotta say that
          Bitch, I gotta say that
          Go
          Go fuck yourself
          Bitch, I gotta say that
          Bitch, I gotta say that
          Go
          Here I am, girl, talking to myself again
          Every day I think about the words you said yeah
          All these accusations, all these allegations
          Do you wanna know what I really think about them?
          All these situations, riding on my patience
          Do you wanna know what I really think about you, baby?
          Go fuck yourself
          Bitch, I gotta say that
          Bitch, I gotta say that
          Go
          Go fuck yourself
          Bitch, I gotta say that
          Bitch, I gotta say that
          Go
          And whether your relationship is awful, good, or great
          We don't like endings
          We don't like to lose things
          And especially, we don't like to lose things that are important to us
          And make no mistake
          Relationships are the single most important thing to you and your life
          It's the source of all of your best memories
          It's the source of all of your worst memories
          When you think back on your life
          And you're 95, a hundred years old
          And you look back over the course of your lifetime
          You're not gonna think
          I wish I owned a better phone
          I wish I spent more time on the internet
          I wish I spent more time at work or sleeping
          It's not gonna be any of those kinds of things
          It's gonna be I wish I spent more time with the people I love
          Where do you belong if I gotta think about it?
          Gotta think about it, baby
          Where do you belong if I gotta think about it?
          Gotta think about it, baby
          Where do you belong if I gotta think about it?
          Gotta think about it, baby
          Where do you belong if I gotta think about it?
          Gotta think about it, baby
          Where do you belong if I gotta think about it?
          Gotta think about it, baby
          Where do you belong if I gotta think about it?
          Gotta think about it`,
					upload_at: new Date(),
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: "Runaway",
					youtube_link: "qUL1Ng3dj0I",
					artist_id: 6,
					album_id: 6,
					length: 220,
					track_number: 5,
					lyrics: `I remember when
          I remember when you told me, baby
          Thoughts I've never had
          I remember how you loved them, baby
          Baby, don't you love me?
          Baby, don't you need me?
          Why you never tolerate?
          Loca Colombiana
          Livin' off my honey
          Drinkin' all my money
          I ain't gonna tell you that
          Fuck you, baby
          Run, run, run away
          I don't wanna think about you, baby
          Run, run, run away
          I don't wanna think about you, baby
          I remember when
          I remember when you told me, baby
          Thoughts I've never had
          I remember how you loved them, baby
          Baby, don't you love me?
          Baby, don't you need me?
          Why you never tolerate?
          Loca Colombiana
          Livin' off my honey
          Drinkin' all my money
          I ain't gonna tell you that
          Fuck you, baby
          Run, run, run away
          I don't wanna think about you, baby
          Run, run, run away
          I don't wanna think about you, baby
          Fuck you, baby
          Run, run, run away
          I don't wanna think about you, baby
          (I don't wanna think no more)
          Run, run, run away
          I don't wanna think about you, baby
          (No more, no more)`,
					upload_at: new Date(),
					created_at: new Date(),
					updated_at: new Date()
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
		await queryInterface.bulkDelete("songs", null, {});
	}
};
