import Image from "next/image";
import config from "../config";
import pointerLogo from "../utils/Pointerlogo";
import Icons from "./icons_base64";

const {
	protocol,
	themecolor
} = config;

const mirror = process.env.MIRROR;
const twitterhandle = "AnotherSoftware";
const director = "another.software";

const CMS = {
	META: {
		URL: `https://${mirror}/`,
		DOMAIN: mirror,
		NAME: pointerLogo(),
		AUTHOR: `${protocol}://sh1tt.${mirror}/`,
		THEME: themecolor,
		SITE: pointerLogo(),
		TWITTER: `https://twitter.com/${twitterhandle}`,
		IMAGE: `/cutout.png`
	},
	CONTENT: {
		ART: {
			TITLE: `Descriptions Moon Art`,
			DESC: `Some desc...`,
			HEADER: pointerLogo(),
			ARTWORKS: [
				{
					name: `Artwork 1`,
					image: `/artwork1.png`,
					description: "Artwork description",
					museum: "MoonMars Museum",
					artist_name: "Houston Vandergriff",
					country: "US",
					social_media: {
						twitter_handle: "@DownsAndTowns",
						instagram_handle: "@DownsAndTowns",
					},
					website: "www.downsandtowns.com",
					artwork_title: "Trilogy",
					artwork_description: `
						Trilogy: three windows representing three chromosomes. A girl in the window looking
						to the sea and sky representing humanity planning for the future and imagining
						distant destinations. We were visiting Novigrad, Croatia for the day – wandering
						cobblestone streets, taking photos of boats in the harbor, ancient buildings, and all
						else we could find. Down one narrow road, we stumbled upon this pavilion on the edge
						of the Adriatic Sea. We took turns modeling in the windows. I took this photo of
					`,
					bio: `
						Houston Vandergriff is an award-winning travel photographer, content creator, and 
						influencer rocking an extra 21st chromosome. Based in Knoxville, Tennessee Houston 
						has traveled to 26 countries and 49 of the 50 United States. His camera opens doors 
						around the world and helps build relationships around three pillars of travel, 
						photography, and advocacy - and the magic that happens when you combine all three.
					`,
				},
				{
					name: `Artwork 2`,
					image: `/artwork2.png`,
					description: "Artwork description",
					museum: "MoonMars Museum",
					artist_name: "Houston Vandergriff",
					country: "US",
					social_media: {
						twitter_handle: "@DownsAndTowns",
						instagram_handle: "@DownsAndTowns",
					},
					website: "www.downsandtowns.com",
					artwork_title: "Trilogy",
					artwork_description: `
						Trilogy: three windows representing three chromosomes. A ..
					`,
					bio: `
						Houston Vandergriff is an award-winning travel photographer, content creator, and 
						influencer rocking an extra 21st chromosome. Based in Knoxville, Tennessee Houston 
						has traveled to 26 countries and 49 of the 50 United States. His camera opens doors 
						around the world and helps build relationships around three pillars of travel, 
						photography, and advocacy - and the magic that happens when you combine all three.
					`,
				},
			],
		},
		HOME: {
			TITLE: pointerLogo(),
			DESC: "Browse the web using handshakenames",
			HEADER: pointerLogo(),
			WEBSITES: [
				{
					name: `theshake/`,
					link: `http://theshake.${mirror}/`,
					hns: `https://theshake/`,
					icon: ``
				},
				{
					name: `niami/`,
					link: `https://niami.io/`,
					hns: `https://niami/`,
					icon: ``
				},
				{
					name: `nameserver`,
					link: `https://nameserver.pages.dev`,
					hns: `https://nameserver.pages.dev`,
					icon: ``
				},
				{
					name: `twitter`,
					link: `https://twitter.com`,
					hns: `https://twitter.com`,
					icon: ``
				},
				{
					name: `findwaldo/`,
					link: `http://www.findwaldo.${mirror}/`,
					hns: `http://www.findwaldo/`,
					icon: ``
				},
				{
					name: `hnsnetwork`,
					link: `https://hnsnetwork.com`,
					hns: `https://hnsnetwork.com`,
					icon: ``
				},
				{
					name: `blockclock/`,
					link: `http://hns.blockclock.${mirror}/`,
					hns: `https://hns.blockclock/`,
					icon: ``
				},
				{
					name: `hnschat/`,
					link: `https://hns.chat/`,
					hns: `https://hnschat/`,
					icon: ``
				},
				{
					name: `varo/`,
					link: `https://varo.io/`,
					hns: `https://varo/`,
					icon: ``
				},
				{
					name: `github`,
					link: `https://github.com/`,
					hns: `https://github.com/`,
					icon: ``
				},
				{
					name: `chatgpt`,
					link: `https://chat.openai.com/`,
					hns: `https://chat.openai.com/`,
					icon: ``
				},
				{
					name: `impervious`,
					link: `https://impervious.com/`,
					hns: `https://impervious.com/`,
					icon: ``
				},
				{
					name: `htools`,
					link: `https://htools.work/`,
					hns: `https://htools.work/`,
					icon: ``
				},
				{
					name: `RareWeave`,
					link: `https://rareweave.store/`,
					hns: `https://rareweave/`,
					icon: ``
				}
			],
		},
	},
	
	FOOTER: {
		DIRECTORS: [
			{
				name: `${director}`,
				link: `https://twitter.com/${twitterhandle}`,
				hns: ``,
			}
		],
		ORGANISATIONS: [
			{
				name: `Another Software`,
				link: `https://another.software/`,
				hns: ``,
				logo: <Image 
					alt="Another software logo" 
					width="24"
					height="24" 
					src={Icons.ANOTHERSOFTWARE}
				/> ,
			}
		]
	},
	ERROR: {
		LINK: "https://learn.namebase.io/starting-from-zero/how-to-access-handshake-sites"
	},
	ICONS: Icons
};

export default CMS;