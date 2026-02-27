import type { TechName } from '@/types/tech';

const techMap: Record<
	TechName,
	{ icon: React.ReactNode; gradientTo?: string }
> = {
	'Next.js': {
		icon: (
			<img
				src="/tech/nextjs.svg"
				alt="Next.js"
				className="w-20 sm:w-24"
			/>
		),
		gradientTo: 'to-white/35',
	},
	'Tailwind CSS': {
		icon: (
			<img
				src="/tech/tailwindcss.svg"
				alt="Tailwind CSS"
				className="w-20 sm:w-24"
			/>
		),
		gradientTo: 'to-[#38BDF8]/50',
	},
	Supabase: {
		icon: (
			<img
				src="/tech/supabase-logo-icon.svg"
				alt="Supabase"
				className="w-16 sm:w-20"
			/>
		),
		gradientTo: 'to-[#3ECF8E]/45',
	},
	Zustand: {
		icon: (
			<img
				src="/tech/zustand.svg"
				alt="Zustand"
				className="w-20 sm:w-24"
			/>
		),
		gradientTo: 'to-[#443E38]',
	},
	GSAP: {
		icon: <img src="/tech/gsap.svg" alt="GSAP" className="w-28 sm:w-32" />,
		gradientTo: 'to-[#0AE448]/40',
	},
	Lenis: {
		icon: (
			<img src="/tech/lenis.svg" alt="Lenis" className="w-18 sm:w-20" />
		),
		gradientTo: 'to-[#FF98A2]/50',
	},
	'Node.js': {
		icon: (
			<img
				src="/tech/nodejs.svg"
				alt="Node.js"
				className="w-18 sm:w-20"
			/>
		),
		gradientTo: 'to-[#417E38]/55',
	},
	Express: {
		icon: (
			<img
				src="/tech/express.svg"
				alt="Express"
				className="w-20 sm:w-24"
			/>
		),
		gradientTo: 'to-neutral-100/30',
	},
	React: {
		icon: (
			<img src="/tech/react.svg" alt="React" className="w-20 sm:w-24" />
		),
		gradientTo: 'to-[#58C4DC]/45',
	},
	SQLite: {
		icon: (
			<img src="/tech/sqlite.svg" alt="SQLite" className="w-20 sm:w-24" />
		),
		gradientTo: 'to-[#399BD9]/45',
	},
	'dnd kit': {
		icon: (
			<img
				src="/tech/dnd-kit.png"
				alt="dnd kit"
				className="w-20 sm:w-24"
			/>
		),
		gradientTo: 'to-neutral-300/30',
	},
	Resend: {
		icon: (
			<img src="/tech/resend.svg" alt="Resend" className="w-28 sm:w-32" />
		),
		gradientTo: 'to-white/40',
	},
	Vite: {
		icon: <img src="/tech/vite.svg" alt="Vite" className="w-18 sm:w-22" />,
		gradientTo: 'to-[#9954FF]/50',
	},
	Motion: {
		icon: (
			<img src="/tech/motion.png" alt="Motion" className="w-20 sm:w-24" />
		),
		gradientTo: 'to-[#FEF62A]/40',
	},
	'yt-dlp': {
		icon: (
			<img src="/tech/yt-dlp.png" alt="yt-dlp" className="w-20 sm:w-24" />
		),
		gradientTo: 'to-[#FF0000]/35',
	},
	TypeScript: {
		icon: (
			<img
				src="/tech/typescript.png"
				alt="TypeScript"
				className="w-18 sm:w-20"
			/>
		),
		gradientTo: 'to-[#3178C6]/50',
	},
	MongoDB: {
		icon: (
			<img
				src="/tech/mongodb.svg"
				alt="MongoDB"
				className="h-20 sm:h-20"
			/>
		),
		gradientTo: 'to-[#00ED64]/45',
	},
	Jest: {
		icon: (
			<img
				src="/tech/jest.svg"
				alt="Jest"
				className="w-[4.8rem] sm:w-[5.5rem]"
			/>
		),
		gradientTo: 'to-[#15C213]/55',
	},
	JWT: {
		icon: (
			<img src="/tech/jwt.svg" alt="JWT" className="w-20 sm:w-[5.5rem]" />
		),
		gradientTo: 'to-neutral-200/35',
	},
	Mongoose: {
		icon: (
			<img
				src="/tech/mongoose.svg"
				alt="Mongoose"
				className="w-20 sm:w-28"
			/>
		),
		gradientTo: 'to-[#FF5E5E]/55',
	},
	OpenAPI: {
		icon: (
			<img
				src="/tech/openapi.svg"
				alt="OpenAPI"
				className="w-20 sm:w-24"
			/>
		),
		gradientTo: 'to-[#68A338]/50',
	},
	'Swagger UI': {
		icon: (
			<img
				src="/tech/swaggerui.svg"
				alt="Swagger UI"
				className="w-20 sm:w-24"
			/>
		),
		gradientTo: 'to-[#85EA2D]/45',
	},
	Docker: {
		icon: (
			<img
				src="/tech/docker.svg"
				alt="Docker"
				className="w-20 sm:w-[6rem]"
			/>
		),
		gradientTo: 'to-[#1D63ED]/45',
	},
	'Redux Toolkit': {
		icon: (
			<img
				src="/tech/redux.svg"
				alt="Redux"
				className="w-20 sm:w-[5.5rem]"
			/>
		),
		gradientTo: 'to-[#764ABC]/60',
	},
	'React Testing Library': {
		icon: (
			<img
				src="/tech/react-testing-library.svg"
				alt="React Testing Library"
				className="w-[4.75rem] sm:w-[5.25rem]"
			/>
		),
		gradientTo: 'to-[#E33332]/50',
	},
	Electron: {
		icon: (
			<img
				src="/tech/electron.svg"
				alt="Electron"
				className="w-24 sm:w-[7rem]"
			/>
		),
		gradientTo: 'to-[#47848F]/50',
	},
	Storybook: {
		icon: (
			<img
				src="/tech/storybook.svg"
				alt="Storybook"
				className="w-16 sm:w-[4.5rem]"
			/>
		),
		gradientTo: 'to-[#FF4785]/50',
	},
	'Celebrate (Joi)': {
		icon: (
			<img
				src="/tech/celebrate.svg"
				alt="Celebrate (Joi)"
				className="w-[7.3rem] sm:w-[8rem]"
			/>
		),
		gradientTo: 'to-fuchsia-300/40',
	},
	'Spotify Web API': {
		icon: (
			<img
				src="/tech/spotify.svg"
				alt="Spotify Web API"
				className="w-20 sm:w-24"
			/>
		),
		gradientTo: 'to-spotify-green/45',
	},
	'Spotify Web Playback SDK': {
		icon: (
			<img
				src="/tech/spotify.svg"
				alt="Spotify Web API"
				className="w-20 sm:w-24"
			/>
		),
		gradientTo: 'to-spotify-green/45',
	},
};

export default techMap;
