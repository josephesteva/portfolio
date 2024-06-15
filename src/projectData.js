export const projectData = [
	{
		id: 'tetross',
		title: 'TetRoss',
		description: 'A tetris clone with a fun twist, implemented to practice DOM manipulation using basic HTML, CSS, and JavaScript. The game features block manipulation, scoring, leveling, increasing difficulty, music, and variable styling.',
		tech: 'The basse game board was set up using html and css. The game logic and other functionalities were implemented using Javascript to manipulate the DOM, primarily via updates to CSS as the game progresses.',
		siteLink: 'https://josephesteva.github.io/tetris/',
		githubLink: 'https://github.com/josephesteva/tetris',
		images: [
			'/images/tetross1.png', '/images/tetross2.png', '/images/tetross3.png'
		],
		techIcons: [
			{
				name: 'JavaScript',
				path: '/images/icons/javascript.png'
			}, {
				name: 'HTML5',
				path: '/images/icons/html.png'
			},
			{
				name: 'CSS3',
				path: '/images/icons/css.png'
			},
		]
	},
	{
		id: 'deckbuilder',
		title: 'DeckBuilder',
		description: "A fullstack Pokemon Trading Card Game deckbuilding and mock social media application. Users can build their own Pokemon Decks, review other users' decks, and post comments. Originally a group project built at the end of my bootcamp, I have since refactored the codebase, added additional features, and updated styling. Currently configured to include Gen 1 pokemon cards, the allowable cards can be updated on the backend.",
		tech: 'The front end was built with a system of pages and components using React JS. All styling was done with vanilla CSS in order to practice fundamentals and allow maximum flexibilty. The backend was built with NodeJS, with Express being used for routing and APIs. Prisma ORM was used to set up and interact with a PostgreSQL database.',
		siteLink: 'https://deckbuilder.onrender.com/',
		githubLink: 'https://github.com/josephesteva/DeckBuilder',
		images: [
			'/images/deckbuilder1.png', '/images/deckbuilder2.png', '/images/deckbuilder3.png'
		],
		techIcons: [
			{
				name: 'React',
				path: '/images/icons/react.png'
			},
			{
				name: 'JavaScript',
				path: '/images/icons/javascript.png'
			},
			{
				name: 'CSS3',
				path: '/images/icons/css.png'
			},
			{
				name: 'NodeJS',
				path: '/images/icons/nodejs.png'
			},
			{
				name: 'Express',
				path: '/images/icons/express.png'
			},
			{
				name: 'Prisma',
				path: '/images/icons/prisma.png'
			},
			{
				name: 'PostgreSQL',
				path: '/images/icons/postgresql.png'
			}
		]
	},
	{
		id: 'game-portfolio',
		title: 'Retro Game Portfolio',
		description: 'This project was created to offer an alternative version of my portfolio that is customizable and interactive',
		tech: 'JavaScript, Kaboom, HTML, CSS',
		siteLink: "TODO",
		githubLink: "TODO",
		images: [
			'/images/gameportfolio1.png', '/images/gameportfolio2.png', '/images/gameportfolio3.png'
		],
		techIcons: [
			{
				name: 'JavaScript',
				path: '/images/icons/javascript.png'
			}, {
				name: 'HTML5',
				path: '/images/icons/html.png'
			},
			{
				name: 'CSS3',
				path: '/images/icons/css.png'
			},
			{
				name: 'KaboomJS',
				path: '/images/icons/kaboomjs.png'
			},
		]
	}

]