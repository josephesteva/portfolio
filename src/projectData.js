export const projectData = [
	{
		id: 'tetross',
		title: 'TetRoss',
		description: 'A tetris clone with a fun twist, implemented to practice DOM manipulation using basic HTML, CSS, and JavaScript. The game features block manipulation, scoring, leveling, increasing difficulty, music, and variable styling.',
		tech: 'The base game board was set up using html and css. The game logic and other functionalities were implemented using Javascript to manipulate the DOM, primarily via updates to CSS as the game progresses.',
		siteLink: 'https://josephesteva.github.io/tetris/',
		githubLink: 'https://github.com/josephesteva/tetris',
		images: [
			'/portfolio/images/tetross2.png', '/portfolio/images/tetross3.png', '/portfolio/images/tetross4.png'
		],
		techIcons: [
			{
				name: 'JavaScript',
				path: '/portfolio/images/icons/javascript.png'
			}, {
				name: 'HTML5',
				path: '/portfolio/images/icons/html.png'
			},
			{
				name: 'CSS3',
				path: '/portfolio/images/icons/css.png'
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
			'/portfolio/images/deckbuilder1.png', '/portfolio/images/deckbuilder2.png', '/portfolio/images/deckbuilder3.png'
		],
		techIcons: [
			{
				name: 'React',
				path: '/portfolio/images/icons/react.png'
			},
			{
				name: 'JavaScript',
				path: '/portfolio/images/icons/javascript.png'
			},
			{
				name: 'CSS3',
				path: '/portfolio/images/icons/css.png'
			},
			{
				name: 'NodeJS',
				path: '/portfolio/images/icons/nodejs.png'
			},
			{
				name: 'Express',
				path: '/portfolio/images/icons/express.png'
			},
			{
				name: 'Prisma',
				path: '/portfolio/images/icons/prisma.png'
			},
			{
				name: 'PostgreSQL',
				path: '/portfolio/images/icons/postgresql.png'
			}
		]
	},
	{
		id: 'game-portfolio',
		title: 'Retro Game Portfolio',
		description: 'This project was created to offer an alternative version of my portfolio that is customizable and interactive!',
		tech: 'The skeleton and positioning for the application was set up using basic HTML and CSS. The scripting was done JavaScript with Kaboom JS serving as the game engine.',
		siteLink: "https://josephesteva.github.io/2d-game-portfolio/",
		githubLink: "https://github.com/josephesteva/2d-game-portfolio",
		images: [
			'/portfolio/images/gameportfolio1.png', '/portfolio/images/gameportfolio2.png', '/portfolio/images/gameportfolio3.png'
		],
		techIcons: [
			{
				name: 'JavaScript',
				path: '/portfolio/images/icons/javascript.png'
			}, {
				name: 'HTML5',
				path: '/portfolio/images/icons/html.png'
			},
			{
				name: 'CSS3',
				path: '/portfolio/images/icons/css.png'
			},
			{
				name: 'KaboomJS',
				path: '/portfolio/images/icons/kaboomjs.png'
			},
		]
	}

]