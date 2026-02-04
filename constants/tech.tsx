import type { TechName } from '@/types/tech';

const techMap: Record<TechName, { icon: React.ReactNode }> = {
	'Next.js': {
		icon: (
			<img
				src="/tech/nextjs.svg"
				alt="Next.js"
				className="w-20 sm:w-24"
			/>
		),
	},
	'Tailwind CSS': {
		icon: (
			<img
				src="/tech/tailwindcss.svg"
				alt="Tailwind CSS"
				className="w-20 sm:w-24"
			/>
		),
	},
	Supabase: {
		icon: (
			<img
				src="/tech/supabase-logo-icon.svg"
				alt="Supabase"
				className="w-16 sm:w-20"
			/>
		),
	},
	Zustand: {
		icon: (
			<img
				src="/tech/zustand.svg"
				alt="Zustand"
				className="w-20 sm:w-24"
			/>
		),
	},
	GSAP: {
		icon: (
			<img
				src="/tech/gsap-white.svg"
				alt="GSAP"
				className="w-28 sm:w-32"
			/>
		),
	},
	Lenis: {
		icon: (
			<img src="/tech/lenis.svg" alt="Lenis" className="w-18 sm:w-20" />
		),
	},
	'Node.js': {
		icon: (
			<img
				src="/tech/nodejs.svg"
				alt="Node.js"
				className="w-18 sm:w-20"
			/>
		),
	},
	Express: {
		icon: (
			<img
				src="/tech/express.svg"
				alt="Express"
				className="w-20 sm:w-24"
			/>
		),
	},
	React: {
		icon: (
			<img src="/tech/react.svg" alt="React" className="w-20 sm:w-24" />
		),
	},
	SQLite: {
		icon: (
			<img src="/tech/sqlite.svg" alt="SQLite" className="w-20 sm:w-24" />
		),
	},
	'dnd kit': {
		icon: (
			<img
				src="/tech/dnd-kit.png"
				alt="dnd kit"
				className="w-20 sm:w-24"
			/>
		),
	},
	Motion: {
		icon: (
			<img src="/tech/motion.png" alt="Motion" className="w-20 sm:w-24" />
		),
	},
	'yt-dlp': {
		icon: (
			<img src="/tech/yt-dlp.png" alt="yt-dlp" className="w-20 sm:w-24" />
		),
	},
	TypeScript: {
		icon: (
			<img
				src="/tech/typescript.png"
				alt="TypeScript"
				className="w-18 sm:w-20"
			/>
		),
	},
	MongoDB: {
		icon: (
			<img
				src="/tech/mongodb.svg"
				alt="MongoDB"
				className="h-20 sm:h-20"
			/>
		),
	},
	Jest: {
		icon: (
			<img
				src="/tech/jest.svg"
				alt="Jest"
				className="w-[4.8rem] sm:w-[5.5rem]"
			/>
		),
	},
	JWT: {
		icon: (
			<img src="/tech/jwt.svg" alt="JWT" className="w-20 sm:w-[5.5rem]" />
		),
	},
	Mongoose: {
		icon: (
			<img
				src="/tech/mongoose.svg"
				alt="Mongoose"
				className="w-20 sm:w-28"
			/>
		),
	},
	OpenAPI: {
		icon: (
			<img
				src="/tech/openapi.svg"
				alt="OpenAPI"
				className="w-20 sm:w-24"
			/>
		),
	},
	'Swagger UI': {
		icon: (
			<img
				src="/tech/swaggerui.svg"
				alt="Swagger UI"
				className="w-20 sm:w-24"
			/>
		),
	},
	Docker: {
		icon: (
			<img
				src="/tech/docker.svg"
				alt="Docker"
				className="w-20 sm:w-[6rem]"
			/>
		),
	},
	'Redux Toolkit': {
		icon: (
			<img
				src="/tech/redux.svg"
				alt="Redux"
				className="w-20 sm:w-[5.5rem]"
			/>
		),
	},
	'React Testing Library': {
		icon: (
			<img
				src="/tech/react-testing-library.svg"
				alt="React Testing Library"
				className="w-[4.75rem] sm:w-[5.25rem]"
			/>
		),
	},
	Electron: {
		icon: (
			<img
				src="/tech/electron.svg"
				alt="Electron"
				className="w-24 sm:w-[7rem]"
			/>
		),
	},
	Storybook: {
		icon: (
			<img
				src="/tech/storybook.svg"
				alt="Storybook"
				className="w-16 sm:w-[4.5rem]"
			/>
		),
	},
	'Celebrate (Joi)': {
		icon: (
			<img
				src="/tech/celebrate.svg"
				alt="Celebrate (Joi)"
				className="w-[7.3rem] sm:w-[8rem]"
			/>
		),
	},
	'Spotify Web API': {
		icon: (
			<img
				src="/tech/spotify.svg"
				alt="Spotify Web API"
				className="w-20 sm:w-24"
			/>
		),
	},
	'Spotify Web Playback SDK': {
		icon: (
			<img
				src="/tech/spotify.svg"
				alt="Spotify Web API"
				className="w-20 sm:w-24"
			/>
		),
	},
};

export default techMap;
