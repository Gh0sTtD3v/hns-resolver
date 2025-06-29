import Image from "next/image";
import Link from "next/link";

import handshake from "../../../public/articles/handshake.svg";
import bobwallet from "../../../public/articles/bobwallet.svg";
import htools from "../../../public/articles/htools.svg";
import fingertip from "../../../public/articles/fingertip.svg";
import hnshosting from "../../../public/articles/wordpress_70s.svg";
import findwaldo from "../../../public/articles/findwaldo_blue.svg";
import hnsgrant from "../../../public/articles/handshake_grant.svg";
import unvs from "../../../public/articles/unvs.svg";
import theshake from "../../../public/articles/theshake.svg";
import heytx from "../../../public/articles/heytx.svg";

import styles from "../../../styles/Home.module.css";

const HeroArticle = props => (
	<Link href={props.source}>
		<a style={{ display: "flex", flexDirection: "column" }}>
			<span style={{ borderRadius: "1.0rem", overflow: "hidden" }}>
				<Image src={props.image} alt={props.title} layout="intrinsic" loading="lazy" />
			</span>
			<h2 style={{ width: "100%", textAlign: "left", margin: "0.5rem 0", padding: "0.25rem 0.5rem" }}>
				{props.title}
			</h2>
			{props.children}
		</a>
	</Link>
);

const Lenks = props => {
    return (<>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            background: "rgba(16,17,23,0.5)",
            backdropFilter: "blur(5px)",
            margin: "0 auto 0 5%",
            padding: "0.675em 1.25em 0",
            width: "90%",
            maxWidth: props.width > 1920 ? "1720px" : "1260px",
            borderRadius: "1.5rem 1.5rem 0 0",
            textShadow: "0px 0px 5px #000",
        }}>
            <h4 className={styles.section__header}>
                Tools and resources:
            </h4>
        </div>
        <div style={{
            display: "grid",
            gridTemplateColumns: props.width > 1920 ? "1fr 1fr 1fr 1fr" : props.width > 1260 ? "1fr 1fr 1fr" : props.width > 720 ? "1fr 1fr" : "1fr",
            gridGap: "1.5rem",
            alignItems: "start",
            justifyItems: "start",
            textAlign: "center",
            margin: "0 auto 0 5%",
            padding: "0.675em 1.25em",
            width: "90%",
            maxWidth: props.width > 1920 ? "1720px" : "1260px",
            background: "rgba(16,17,23,0.5)",
            backdropFilter: "blur(5px)",
        }}>
            <HeroArticle
                source="https://handshake.org/"
                image={handshake}
                title="handshake.org"
            >
                <p style={{ width: "100%", textAlign: "left", margin: "0", padding: "0.25rem 0.5rem" }}>
                    Handshake is a decentralized, permissionless naming protocol compatible with DNS where every peer is validating and in charge of managing the root zone with the goal of creating an alternative to existing Certificate Authorities and naming systems.
                </p>
            </HeroArticle>
            <HeroArticle
                source="https://bobwallet.io/"
                image={bobwallet}
                title="bob-wallet"
            >
                <p style={{ width: "100%", textAlign: "left", margin: "0", padding: "0.25rem 0.5rem" }}>
                    Bob Wallet is a secure, open source, javascript based wallet for the Handshake blockchain. ... 
                </p>
            </HeroArticle>
            <HeroArticle 
                source="https://htools.work/"
                image={htools}
                title="htools.work"
            >
                <p style={{ width: "100%", textAlign: "left", margin: "0", padding: "0.25rem 0.5rem" }}>
                    All things handshake. A comprehensive suite for the Handshake community, offering authentication, identity management, network insights, Handshake login, Wireshark Dissector and much more..
                </p>
            </HeroArticle>
            <HeroArticle
                source="https://impervious.com/fingertip"
                image={fingertip}
                title="Fingertip DNS resolver"
            >
                <p style={{ width: "100%", textAlign: "left", margin: "0", padding: "0.25rem 0.5rem" }}>
                    Fingertip is a DNS resolver using on-chain handshake root zones. It runs an light node syncing only block headers. This allows for a much faster sync time and a 12mb memory footprint.
                </p>
            </HeroArticle>
            <HeroArticle
                source="https://hnshosting.au/"
                image={hnshosting}
                title="hnshosting.au"
            >
                <p style={{ width: "100%", textAlign: "left", margin: "0", padding: "0.25rem 0.5rem" }}>
                    Simplify your Handshake domain usage with easy WordPress hosting. Secure over SSL with DANE, our fully managed service includes secure hosting, regular backups, and control over plugins and users. Currently hosting 24 WordPress sites. Free tier available with 1 GB storage.
                </p>
            </HeroArticle>
            <HeroArticle
                source={props.native ? `http://www.findwaldo/` : `http://www.findwaldo.rsvr.xyz/"`}
                image={findwaldo}
                title="findwaldo"
            >
                <p style={{ width: "100%", textAlign: "left", margin: "0", padding: "0.25rem 0.5rem" }}>
                    Findwaldo helps you track down domain owners and trade, with the possibility to remain completely anonymous. Generating both hot and cold leads for domain owners and investors.
                </p>
            </HeroArticle>
            <HeroArticle
                source="https://github.com/opensystm/handshake-micro-grants/issues/17"
                image={hnsgrant}
                title="handshake micro grants"
            >
                <p style={{ width: "100%", textAlign: "left", margin: "0", padding: "0.25rem 0.5rem" }}>
                    The Holiday Special of 200,000 HNS has been granted to Rithvik Vibhu for his stateless DANE proposaL.
                </p>
            </HeroArticle>
            <HeroArticle
                source="https://unvs.com/"
                image={unvs}
                title="unvs.com"
            >
                <p style={{ width: "100%", textAlign: "left", margin: "0", padding: "0.25rem 0.5rem" }}>
                    Become a citizen of the UNVS.. 
                </p>
            </HeroArticle>
            <HeroArticle
                source={props.native ? `http://www.findwaldo/` : `http://theshake.xyz/`}
                image={theshake}
                title="theshake.xyz"
            >
                <p style={{ width: "100%", textAlign: "left", margin: "0", padding: "0.25rem 0.5rem" }}>
                    The Shake is a newsoutlet and information center for the Handshake blockchain and it&apos;s ecosystem.
                </p>
            </HeroArticle>
            <HeroArticle
                source="https://heytx.substack.com/p/hns-over-the-years"
                image={heytx}
                title="HNS over the years"
            >
                <p style={{ width: "100%", textAlign: "left", margin: "0", padding: "0.25rem 0.5rem" }}>
                    Hey.TX presents: A look back at the history of Handshake. Check out heytx.io for more Handshake content.
                </p>
            </HeroArticle>
        </div>
    </>);
};

export default Lenks;