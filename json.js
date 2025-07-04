const tb_json = [
  {
    "id": "_meta",
    "author": "The Pandemonium Institute",
    "name": "Trouble Brewing"
  },
  "chef",
  "investigator",
  "washerwoman",
  "librarian",
  "empath",
  "fortuneteller",
  "undertaker",
  "monk",
  "slayer",
  "soldier",
  "ravenkeeper",
  "mayor",
  "virgin",
  "butler",
  "drunk",
  "recluse",
  "saint",
  "poisoner",
  "spy",
  "scarletwoman",
  "baron",
  "imp"
]

const snv_json = [
  {
    "id": "_meta",
    "author": "The Pandemonium Institute",
    "name": "Sects and Violets"
  },
  "artist",
  "clockmaker",
  "dreamer",
  "flowergirl",
  "juggler",
  "mathematician",
  "oracle",
  "philosopher",
  "sage",
  "savant",
  "seamstress",
  "snakecharmer",
  "towncrier",
  "barber",
  "klutz",
  "mutant",
  "sweetheart",
  "cerenovus",
  "eviltwin",
  "pithag",
  "witch",
  "fanggu",
  "nodashii",
  "vigormortis",
  "vortox"
]

const bmr_json = [
  {
    "id": "_meta",
    "author": "The Pandemonium Institute",
    "name": "Bad Moon Rising"
  },
  "grandmother",
  "sailor",
  "chambermaid",
  "innkeeper",
  "gambler",
  "exorcist",
  "gossip",
  "courtier",
  "professor",
  "minstrel",
  "tealady",
  "fool",
  "pacifist",
  "goon",
  "lunatic",
  "tinker",
  "moonchild",
  "godfather",
  "devilsadvocate",
  "assassin",
  "mastermind",
  "pukka",
  "shabaloth",
  "po",
  "zombuul"
]

const first_night_order_json = [
  "dusk",
  "lord of typhon",
  "apprentice",
  "barista",
  "bureaucrate",
  "thief",
  "philosopher",
  "kazali",
  "alchemist",
  "poppy",
  "grower",
  "yaggababble",
  "magician",
  "minion info",
  "snitch",
  "lunatic",
  "demon info & bluffs",
  "king",
  "sailor",
  "marionette",
  "engineer",
  "preacher",
  "lil' monsta",
  "lleech",
  "poisoner",
  "widow",
  "courtier",
  "snake charmer",
  "godfather",
  "devil's advocate",
  "evil twin",
  "witch",
  "cerenovus",
  "fearmonger",
  "harpy",
  "mezepheles",
  "pukka",
  "pixie",
  "huntsman",
  "damsel",
  "amnesiac",
  "washerwoman",
  "librarian",
  "investigator",
  "chef",
  "empath",
  "fortune teller",
  "butler",
  "grandmother",
  "clockmaker",
  "dreamer",
  "seamstress",
  "steward",
  "knight",
  "noble",
  "balloonist",
  "shugenja",
  "village idiot",
  "bounty hunter",
  "nightwatchman",
  "cult leader",
  "spy",
  "ogre",
  "high priestess",
  "general",
  "chambermaid",
  "mathematician",
  "dawn",
  "leviathan",
  "vizier"
]

const other_night_order_json = [
  "dusk",
  "barista",
  "bone collector",
  "bureaucrate",
  "harlot",
  "thief",
  "philosopher",
  "poppy grower",
  "sailor",
  "engineer",
  "preacher",
  "poisoner",
  "courtier",
  "inkeeper",
  "gambler",
  "snake charmer",
  "monk",
  "devil's advocate",
  "witch",
  "cerenovus",
  "pit-hag",
  "fearmonger",
  "harpy",
  "mezepheles",
  "scarlet woman",
  "summoner",
  "lunatic",
  "exorcist",
  "lycanthrope",
  "legion",
  "imp",
  "zombuul",
  "pukka",
  "shabaloth",
  "po",
  "fang gu",
  "no dashii",
  "vortox",
  "lord of typhon",
  "vigormortis",
  "ojo",
  "al-hadikhia",
  "lleech",
  "lil' monsta",
  "yaggababble",
  "kazali",
  "assassin",
  "godfather",
  "gossip",
  "sweetheart",
  "banshee",
  "professor",
  "choirboy",
  "huntsman",
  "damsel",
  "grandmother",
  "ravenkeeper",
  "empath",
  "balloonist",
  "king",
  "bounty hunter",
  "nightwatchman",
  "acrobat",
  "hatter",
  "barber",
  "sage",
  "amnesiac",
  "farmer",
  "tinker",
  "moonchild",
  "fortune teller",
  "undertaker",
  "dreamer",
  "flowergirl",
  "town crier",
  "oracle",
  "seamstress",
  "juggler",
  "village idiot",
  "cult leader",
  "butler",
  "spy",
  "high priestess",
  "general",
  "chambermaid",
  "mathematician",
  "dawn",
  "leviathan"
]

const required_night_order_json = [
  "dusk",
  "minion info",
  "demon info & bluffs",
  "dawn"
]

const characters_json = [
  {
    "Name": "Acrobat",
    "ID":  "acrobat",
    "Team": "Townsfolk",
    "Ability": "Each night*, choose a player: if they are or become drunk or poisoned tonight, you die."
  },
  {
    "Name": "Alchemist",
    "ID": "alchemist",
    "Team": "Townsfolk",
    "Ability": "You have a Minion ability. When using this, the Storyteller may prompt you to choose differently."
  },
  {
    "Name": "Alsaahir",
    "ID": "alsaahir",
    "Team": "Townsfolk",
    "Ability": "Each day, if you publicly guess which players are Minion(s) and which are Demon(s), good wins."
  },
  {
    "Name": "Amnesiac",
    "ID": "amnesiac",
    "Team": "Townsfolk",
    "Ability": "You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are."
  },
  {
    "Name": "Artist",
    "ID": "artist",
    "Team": "Townsfolk",
    "Ability": "Once per game, during the day, privately ask the Storyteller any yes/no question."
  },
  {
    "Name": "Atheist",
    "ID": "atheist",
    "Team": "Townsfolk",
    "Ability": "The Storyteller can break the game rules, and if executed, good wins, even if you are dead. [No evil characters]"
  },
  {
    "Name": "Balloonist",
    "ID": "balloonist",
    "Team": "Townsfolk",
    "Ability": "Each night, you learn a player of a different character type than last night. [+0 or +1 Outsider]"
  },
  {
    "Name": "Banshee",
    "ID": "banshee",
    "Team": "Townsfolk",
    "Ability": "If the Demon kills you, all players learn this. From now on, you may nominate twice per day and vote twice per nomination."
  },
  {
    "Name": "Bounty Hunter",
    "ID": "bountyhunter",
    "Team": "Townsfolk",
    "Ability": "You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]"
  },
  {
    "Name": "Cannibal",
    "ID": "cannibal",
    "Team": "Townsfolk",
    "Ability": "You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution."
  },
  {
    "Name": "Chambermaid",
    "ID": "chambermaid",
    "Team": "Townsfolk",
    "Ability": "Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability."
  },
  {
    "Name": "Chef",
    "ID": "chef",
    "Team": "Townsfolk",
    "Ability": "You start knowing how many pairs of evil players there are."
  },
  {
    "Name": "Choirboy",
    "ID": "choirboy",
    "Team": "Townsfolk",
    "Ability": "If the Demon kills the King, you learn which player is the Demon. [+the King]"
  },
  {
    "Name": "Clockmaker",
    "ID": "clockmaker",
    "Team": "Townsfolk",
    "Ability": "You start knowing how many steps from the Demon to its nearest Minion."
  },
  {
    "Name": "Courtier",
    "ID": "courtier",
    "Team": "Townsfolk",
    "Ability": "Once per game, at night, choose a character: they are drunk for 3 nights & 3 days."
  },
  {
    "Name": "Cult Leader",
    "ID": "cultleader",
    "Team": "Townsfolk",
    "Ability": "Each night, you become the alignment of an alive neighbor. If all good players choose to join your cult, your team wins."
  },
  {
    "Name": "Dreamer",
    "ID": "dreamer",
    "Team": "Townsfolk",
    "Ability": "Each night, choose a player (not yourself or Travellers): you learn 1 good & 1 evil character, 1 of which is correct."
  },
  {
    "Name": "Empath",
    "ID": "empath",
    "Team": "Townsfolk",
    "Ability": "Each night, you learn how many of your 2 alive neighbors are evil."
  },
  {
    "Name": "Engineer",
    "ID": "engineer",
    "Team": "Townsfolk",
    "Ability": "Once per game, at night, choose which Minions or which Demon is in play."
  },
  {
    "Name": "Exorcist",
    "ID": "exorcist",
    "Team": "Townsfolk",
    "Ability": "Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn't wake tonight."
  },
  {
    "Name": "Farmer",
    "ID": "farmer",
    "Team": "Townsfolk",
    "Ability": "When you die at night, an alive good player becomes a Farmer."
  },
  {
    "Name": "Fisherman",
    "ID": "fisherman",
    "Team": "Townsfolk",
    "Ability": "Once per game, during the day, visit the Storyteller for some advice to help your team win."
  },
  {
    "Name": "Flowergirl",
    "ID": "flowergirl",
    "Team": "Townsfolk",
    "Ability": "Each night*, you learn if a Demon voted today."
  },
  {
    "Name": "Fool",
    "ID": "fool",
    "Team": "Townsfolk",
    "Ability": "The 1st time you die, you don't."
  },
  {
    "Name": "Fortune Teller",
    "ID": "fortuneteller",
    "Team": "Townsfolk",
    "Ability": "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you."
  },
  {
    "Name": "Gambler",
    "ID": "gambler",
    "Team": "Townsfolk",
    "Ability": "Each night*, choose a player & guess their character: if you guess wrong, you die."
  },
  {
    "Name": "General",
    "ID": "general",
    "Team": "Townsfolk",
    "Ability": "Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither."
  },
  {
    "Name": "Gossip",
    "ID": "gossip",
    "Team": "Townsfolk",
    "Ability": "Each day, you may make a public statement. Tonight, if it was true, a player dies."
  },
  {
    "Name": "Grandmother",
    "ID": "grandmother",
    "Team": "Townsfolk",
    "Ability": "You start knowing a good player & their character. If the Demon kills them, you die too."
  },
  {
    "Name": "High Priestess",
    "ID": "highpriestess",
    "Team": "Townsfolk",
    "Ability": "Each night, learn which player the Storyteller believes you should talk to most."
  },
  {
    "Name": "Huntsman",
    "ID": "huntsman",
    "Team": "Townsfolk",
    "Ability": "Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]"
  },
  {
    "Name": "Innkeeper",
    "ID": "innkeeper",
    "Team": "Townsfolk",
    "Ability": "Each night*, choose 2 players: they can't die tonight, but 1 is drunk until dusk."
  },
  {
    "Name": "Investigator",
    "ID": "investigator",
    "Team": "Townsfolk",
    "Ability": "You start knowing that 1 of 2 players is a particular Minion."
  },
  {
    "Name": "Juggler",
    "ID": "juggler",
    "Team": "Townsfolk",
    "Ability": "On your 1st day, publicly guess up to 5 players' characters. That night, you learn how many you got correct."
  },
  {
    "Name": "King",
    "ID": "king",
    "Team": "Townsfolk",
    "Ability": "Each night, if the dead equal or outnumber the living, you learn 1 alive character. The Demon knows you are the King."
  },
  {
    "Name": "Knight",
    "ID": "knight",
    "Team": "Townsfolk",
    "Ability": "You start knowing 2 players that are not the Demon."
  },
  {
    "Name": "Librarian",
    "ID": "librarian",
    "Team": "Townsfolk",
    "Ability": "You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)"
  },
  {
    "Name": "Lycanthrope",
    "ID": "lycanthrope",
    "Team": "Townsfolk",
    "Ability": "Each night*, choose an alive player. If good, they die & the Demon doesn’t kill tonight. One good player registers as evil."
  },
  {
    "Name": "Magician",
    "ID": "magician",
    "Team": "Townsfolk",
    "Ability": "The Demon thinks you are a Minion. Minions think you are a Demon."
  },
  {
    "Name": "Mathematician",
    "ID": "mathematician",
    "Team": "Townsfolk",
    "Ability": "Each night, you learn how many players' abilities worked abnormally (since dawn) due to another character's ability."
  },
  {
    "Name": "Mayor",
    "ID": "mayor",
    "Team": "Townsfolk",
    "Ability": "If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead."
  },
  {
    "Name": "Minstrel",
    "ID": "minstrel",
    "Team": "Townsfolk",
    "Ability": "When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow."
  },
  {
    "Name": "Monk",
    "ID": "monk",
    "Team": "Townsfolk",
    "Ability": "Each night*, choose a player (not yourself): they are safe from the Demon tonight."
  },
  {
    "Name": "Nightwatchman",
    "ID": "nightwatchman",
    "Team": "Townsfolk",
    "Ability": "Once per game, at night, choose a player: they learn you are the Nightwatchman."
  },
  {
    "Name": "Noble",
    "ID": "noble",
    "Team": "Townsfolk",
    "Ability": "You start knowing 3 players, 1 and only 1 of which is evil."
  },
  {
    "Name": "Oracle",
    "ID": "oracle",
    "Team": "Townsfolk",
    "Ability": "Each night*, you learn how many dead players are evil."
  },
  {
    "Name": "Pacifist",
    "ID": "pacifist",
    "Team": "Townsfolk",
    "Ability": "Executed good players might not die."
  },
  {
    "Name": "Philosopher",
    "ID": "philosopher",
    "Team": "Townsfolk",
    "Ability": "Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk."
  },
  {
    "Name": "Pixie",
    "ID": "pixie",
    "Team": "Townsfolk",
    "Ability": "You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die."
  },
  {
    "Name": "Poppy Grower",
    "ID": "poppygrower",
    "Team": "Townsfolk",
    "Ability": "Minions & Demons do not know each other. If you die, they learn who each other are that night."
  },
  {
    "Name": "Preacher",
    "ID": "preacher",
    "Team": "Townsfolk",
    "Ability": "Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability."
  },
  {
    "Name": "Professor",
    "ID": "professor",
    "Team": "Townsfolk",
    "Ability": "Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected."
  },
  {
    "Name": "Ravenkeeper",
    "ID": "ravenkeeper",
    "Team": "Townsfolk",
    "Ability": "If you die at night, you are woken to choose a player: you learn their character."
  },
  {
    "Name": "Sage",
    "ID": "sage",
    "Team": "Townsfolk",
    "Ability": "If the Demon kills you, you learn that it is 1 of 2 players."
  },
  {
    "Name": "Sailor",
    "ID": "sailor",
    "Team": "Townsfolk",
    "Ability": "Each night, choose an alive player: either you or they are drunk until dusk. You can't die."
  },
  {
    "Name": "Savant",
    "ID": "savant",
    "Team": "Townsfolk",
    "Ability": "Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false."
  },
  {
    "Name": "Seamstress",
    "ID": "seamstress",
    "Team": "Townsfolk",
    "Ability": "Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment."
  },
  {
    "Name": "Shugenja",
    "ID": "shugenja",
    "Team": "Townsfolk",
    "Ability": "You start knowing if your closest evil player is clockwise or anti-clockwise. If equidistant, this info is arbitrary."
  },
  {
    "Name": "Slayer",
    "ID": "slayer",
    "Team": "Townsfolk",
    "Ability": "Once per game, during the day, publicly choose a player: if they are the Demon, they die."
  },
  {
    "Name": "Snake Charmer",
    "ID": "snakecharmer",
    "Team": "Townsfolk",
    "Ability": "Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned."
  },
  {
    "Name": "Soldier",
    "ID": "soldier",
    "Team": "Townsfolk",
    "Ability": "You are safe from the Demon."
  },
  {
    "Name": "Steward",
    "ID": "steward",
    "Team": "Townsfolk",
    "Ability": "You start knowing 1 good player."
  },
  {
    "Name": "Tea Lady",
    "ID": "tealady",
    "Team": "Townsfolk",
    "Ability": "If both your alive neighbors are good, they can't die."
  },
  {
    "Name": "Town Crier",
    "ID": "towncrier",
    "Team": "Townsfolk",
    "Ability": "Each night*, you learn if a Minion nominated today."
  },
  {
    "Name": "Undertaker",
    "ID": "undertaker",
    "Team": "Townsfolk",
    "Ability": "Each night*, you learn which character died by execution today."
  },
  {
    "Name": "Village Idiot",
    "ID": "villageidiot",
    "Team": "Townsfolk",
    "Ability": "Each night, choose a player: you learn their alignment. [+0 to +2 Village Idiots. 1 of the extras is drunk]"
  },
  {
    "Name": "Virgin",
    "ID": "virgin",
    "Team": "Townsfolk",
    "Ability": "The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately."
  },
  {
    "Name": "Washerwoman",
    "ID": "washerwoman",
    "Team": "Townsfolk",
    "Ability": "You start knowing that 1 of 2 players is a particular Townsfolk."
  },
  {
    "Name": "Barber",
    "ID": "barber",
    "Team": "Outsiders",
    "Ability": "If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters."
  },
  {
    "Name": "Butler",
    "ID": "butler",
    "Team": "Outsiders",
    "Ability": "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too."
  },
  {
    "Name": "Damsel",
    "ID": "damsel",
    "Team": "Outsiders",
    "Ability": "All Minions know a Damsel is in play. If a Minion publicly guesses you (once), your team loses."
  },
  {
    "Name": "Drunk",
    "ID": "drunk",
    "Team": "Outsiders",
    "Ability": "You do not know you are the Drunk. You think you are a Townsfolk character, but you are not."
  },
  {
    "Name": "Golem",
    "ID": "golem",
    "Team": "Outsiders",
    "Ability": "You may only nominate once per game. When you do, if the nominee is not the Demon, they die."
  },
  {
    "Name": "Goon",
    "ID": "goon",
    "Team": "Outsiders",
    "Ability": "Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment."
  },
  {
    "Name": "Hatter",
    "ID": "hatter",
    "Team": "Outsiders",
    "Ability": "If you died today or tonight, the Minion & Demon players may choose new Minion & Demon characters to be."
  },
  {
    "Name": "Heretic",
    "ID": "heretic",
    "Team": "Outsiders",
    "Ability": "Whoever wins, loses & whoever loses, wins, even if you are dead."
  },
  {
    "Name": "Klutz",
    "ID": "klutz",
    "Team": "Outsiders",
    "Ability": "When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses."
  },
  {
    "Name": "Lunatic",
    "ID": "lunatic",
    "Team": "Outsiders",
    "Ability": "You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night."
  },
  {
    "Name": "Moonchild",
    "ID": "moonchild",
    "Team": "Outsiders",
    "Ability": "When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die."
  },
  {
    "Name": "Mutant",
    "ID": "mutant",
    "Team": "Outsiders",
    "Ability": "If you are \"mad\" about being an Outsider, you might be executed."
  },
  {
    "Name": "Ogre",
    "ID": "ogre",
    "Team": "Outsiders",
    "Ability": "On your 1st night, choose a player (not yourself): you become their alignment (you don't know which) even if drunk or poisoned."
  },
  {
    "Name": "Plague Doctor",
    "ID": "plaguedoctor",
    "Team": "Outsiders",
    "Ability": "When you die, the Storyteller gains a Minion ability."
  },
  {
    "Name": "Politician",
    "ID": "politician",
    "Team": "Outsiders",
    "Ability": "If you were the player most responsible for your team losing, you change alignment & win, even if dead."
  },
  {
    "Name": "Puzzlemaster",
    "ID": "puzzlemaster",
    "Team": "Outsiders",
    "Ability": "1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info."
  },
  {
    "Name": "Recluse",
    "ID": "recluse",
    "Team": "Outsiders",
    "Ability": "You might register as evil & as a Minion or Demon, even if dead."
  },
  {
    "Name": "Saint",
    "ID": "saint",
    "Team": "Outsiders",
    "Ability": "If you die by execution, your team loses."
  },
  {
    "Name": "Snitch",
    "ID": "snitch",
    "Team": "Outsiders",
    "Ability": "Each Minion gets 3 bluffs."
  },
  {
    "Name": "Sweetheart",
    "ID": "sweetheart",
    "Team": "Outsiders",
    "Ability": "When you die, 1 player is drunk from now on."
  },
  {
    "Name": "Tinker",
    "ID": "tinker",
    "Team": "Outsiders",
    "Ability": "You might die at any time."
  },
  {
    "Name": "Zealot",
    "ID": "zealot",
    "Team": "Outsiders",
    "Ability": "If there are 5 or more players alive, you must vote for every nomination."
  },
  {
    "Name": "Assassin",
    "ID": "assassin",
    "Team": "Minions",
    "Ability": "Once per game, at night*, choose a player: they die, even if for some reason they could not."
  },
  {
    "Name": "Baron",
    "ID": "baron",
    "Team": "Minions",
    "Ability": "There are extra Outsiders in play. [+2 Outsiders]"
  },
  {
    "Name": "Boffin",
    "ID": "boffin",
    "Team": "Minions",
    "Ability": "The Demon (even if drunk or poisoned) has a not-in-play good character's ability. You both know which."
  },
  {
    "Name": "Boomdandy",
    "ID": "boomdandy",
    "Team": "Minions",
    "Ability": "If you are executed, all but 3 players die. After a 10 to 1 countdown, the player with the most players pointing at them, dies."
  },
  {
    "Name": "Cerenovus",
    "ID": "cerenovus",
    "Team": "Minions",
    "Ability": "Each night, choose a player & a good character: they are \"mad\" they are this character tomorrow, or might be executed."
  },
  {
    "Name": "Devil's Advocate",
    "ID": "devilsadvocate",
    "Team": "Minions",
    "Ability": "Each night, choose a living player (different to last night): if executed tomorrow, they don't die."
  },
  {
    "Name": "Evil Twin",
    "ID": "eviltwin",
    "Team": "Minions",
    "Ability": "You & an opposing player know each other. If the good player is executed, evil wins. Good can't win if you both live."
  },
  {
    "Name": "Fearmonger",
    "ID": "fearmonger",
    "Team": "Minions",
    "Ability": "Each night, choose a player: if you nominate & execute them, their team loses. All players know if you choose a new player."
  },
  {
    "Name": "Goblin",
    "ID": "goblin",
    "Team": "Minions",
    "Ability": "If you publicly claim to be the Goblin when nominated & are executed that day, your team wins."
  },
  {
    "Name": "Godfather",
    "ID": "godfather",
    "Team": "Minions",
    "Ability": "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]"
  },
  {
    "Name": "Harpy",
    "ID": "harpy",
    "Team": "Minions",
    "Ability": "Each night, choose 2 players: tomorrow, the 1st player is mad that the 2nd is evil, or one or both might die."
  },
  {
    "Name": "Marionette",
    "ID": "marionette",
    "Team": "Minions",
    "Ability": "You think you are a good character, but you are not. The Demon knows who you are. [You neighbor the Demon]"
  },
  {
    "Name": "Mastermind",
    "ID": "mastermind",
    "Team": "Minions",
    "Ability": "If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses."
  },
  {
    "Name": "Mezepheles",
    "ID": "mezepheles",
    "Team": "Minions",
    "Ability": "You start knowing a secret word. The 1st good player to say this word becomes evil that night."
  },
  {
    "Name": "Organ Grinder",
    "ID": "organgrinder",
    "Team": "Minions",
    "Ability": "All players keep their eyes closed when voting & the vote tally is secret. Each night, choose if you are drunk or not."
  },
  {
    "Name": "Pit-Hag",
    "ID": "pithag",
    "Team": "Minions",
    "Ability": "Each night*, choose a player & a character they become (if not in play). If a Demon is made, deaths tonight are arbitrary."
  },
  {
    "Name": "Poisoner",
    "ID": "poisoner",
    "Team": "Minions",
    "Ability": "Each night, choose a player: they are poisoned tonight and tomorrow day."
  },
  {
    "Name": "Psychopath",
    "ID": "psychopath",
    "Team": "Minions",
    "Ability": "Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo."
  },
  {
    "Name": "Scarlet Woman",
    "ID": "scarletwoman",
    "Team": "Minions",
    "Ability": "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don't count)"
  },
  {
    "Name": "Spy",
    "ID": "spy",
    "Team": "Minions",
    "Ability": "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead."
  },
  {
    "Name": "Summoner",
    "ID": "summoner",
    "Team": "Minions",
    "Ability": "You get 3 bluffs. On the 3rd night, choose a player: they become an evil Demon of your choice. [No Demon]"
  },
  {
    "Name": "Vizier",
    "ID": "vizier",
    "Team": "Minions",
    "Ability": "All players know you are the Vizier. You can not die during the day. If good voted, you may choose to execute immediately."
  },
  {
    "Name": "Widow",
    "ID": "widow",
    "Team": "Minions",
    "Ability": "On your first night, look at the Grimoire & choose a player: they are poisoned. 1 good player knows a Widow is in play."
  },
  {
    "Name": "Witch",
    "ID": "witch",
    "Team": "Minions",
    "Ability": "Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability."
  },
  {
    "Name": "Xaan",
    "ID": "xaan",
    "Team": "Minions",
    "Ability": "On night X, all Townsfolk are poisoned until dusk. [X Outsiders]"
  },
  {
    "Name": "Al-Hadikhia",
    "ID": "alhadikhia",
    "Team": "Demons",
    "Ability": "Each night*, you may choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die."
  },
  {
    "Name": "Fang Gu",
    "ID": "fanggu",
    "Team": "Demons",
    "Ability": "Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]"
  },
  {
    "Name": "Imp",
    "ID": "imp",
    "Team": "Demons",
    "Ability": "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp."
  },
  {
    "Name": "Kazali",
    "ID": "kazali",
    "Team": "Demons",
    "Ability": "Each night*, choose a player: they die. [You choose which players are which Minions. -? to +? Outsiders]"
  },
  {
    "Name": "Legion",
    "ID": "legion",
    "Team": "Demons",
    "Ability": "Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]"
  },
  {
    "Name": "Leviathan",
    "ID": "leviathan",
    "Team": "Demons",
    "Ability": "If more than 1 good player is executed, evil wins. All players know you are in play. After day 5, evil wins."
  },
  {
    "Name": "Lil' Monsta",
    "ID": "lilmonsta",
    "Team": "Demons",
    "Ability": "Each night, Minions choose who babysits Lil' Monsta & 'is the Demon'. Each night*, a player might die. [+1 Minion]"
  },
  {
    "Name": "Lleech",
    "ID": "lleech",
    "Team": "Demons",
    "Ability": "Each night*, choose a player: they die. You start by choosing a player: they are poisoned. You die if & only if they are dead."
  },
  {
    "Name": "Lord of Typhon",
    "ID": "lordoftyphon",
    "Team": "Demons",
    "Ability": "Each night*, choose a player: they die. [Evil characters are in a line. You are in the middle. +1 Minion. -? to +? Outsiders]"
  },
  {
    "Name": "No Dashii",
    "ID": "nodashii",
    "Team": "Demons",
    "Ability": "Each night*, choose a player: they die. Your 2 Townsfolk neighbors are poisoned."
  },
  {
    "Name": "Ojo",
    "ID": "ojo",
    "Team": "Demons",
    "Ability": "Each night*, choose a character: they die. If they are not in play, the Storyteller chooses who dies."
  },
  {
    "Name": "Po",
    "ID": "po",
    "Team": "Demons",
    "Ability": "Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight."
  },
  {
    "Name": "Pukka",
    "ID": "pukka",
    "Team": "Demons",
    "Ability": "Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy."
  },
  {
    "Name": "Riot",
    "ID": "riot",
    "Team": "Demons",
    "Ability": "On day 3, Minions become Riot & nominees die but nominate an alive player immediately. This must happen."
  },
  {
    "Name": "Shabaloth",
    "ID": "shabaloth",
    "Team": "Demons",
    "Ability": "Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated."
  },
  {
    "Name": "Vigormortis",
    "ID": "vigormortis",
    "Team": "Demons",
    "Ability": "Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor. [-1 Outsider]"
  },
  {
    "Name": "Vortox",
    "ID": "vortox",
    "Team": "Demons",
    "Ability": "Each night*, choose a player: they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins."
  },
  {
    "Name": "Yaggababble",
    "ID": "yaggababble",
    "Team": "Demons",
    "Ability": "You start knowing a secret phrase. For each time you said it publicly today, a player might die."
  },
  {
    "Name": "Zombuul",
    "ID": "zombuul",
    "Team": "Demons",
    "Ability": "Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead."
  }
]