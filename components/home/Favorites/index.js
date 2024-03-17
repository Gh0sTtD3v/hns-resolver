import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../../context/User";

// import styles from "../../../styles/Home.module.css";

const initialState = {
    favorites: [
        "name=google;url=https://google.com;type=website;icon=https://google.com/favicon.ico",
        "name=fmoviesz;url=https://fmoviesz.to;type=website;icon=https://s3.bunnycdn.ru/assets/sites/fmovies/favicon.png",
        "name=niami;url=https://niami.io;type=website;icon=https://niami.io/favicon.ico",
        "name=handshake;url=https://handshake.org;type=website;icon=https://handshake.org/img/favicon/hns-favicon.ico",
        "name=theshake;url=https://theshake.xyz;type=website;icon=https://theshake.xyz/favicon.ico",
    ],
    hover: false,
};

const Favorite = props => (
    <div key={props.key} style={{
        position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", width: "100%", aspectRatio: "1/1", margin: "0", padding: "0",
    }}>
        <Link href={props.url}>
            <a style={{
                backgroundColor: "rgba(43,46,64,1)", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "0.5rem", overflow: "hidden", margin: "0.75em 0", padding: "0",
            }}>
                <span style={{
                    position: "relative", backgroundImage: `url(${props.icon})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", alignItems: "center", width: "60%", height: "60%", margin: "0", padding: "0",
                }}></span>
            </a>
        </Link>
        {props.name}
    </div>
);

const Edit = props => (
    <div style={{
        position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", width: "100%", aspectRatio: "1/1", margin: "0", padding: "0",
    }}>
        <Link href="/settings">
            <a style={{
                backgroundColor: "rgba(243,246,264,0.25)", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "0.5rem", overflow: "hidden", margin: "0.75em 0", padding: "0",
                border: "1px solid rgba(216,217,223,0.75)", borderRadius: "0.5rem", overflow: "hidden", margin: "0.75em 0", padding: "0",
            }}>
                <span style={{
                    position: "relative", backgroundImage: `url(/edit.svg)`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", alignItems: "center", width: "60%", height: "60%", margin: "0", padding: "0",
                }}></span>
            </a>
        </Link>
        Edit
    </div>
);

const Favorites = () => {
    const { favorites } = useContext(UserContext);

    const [ hover, setHover ] = useState(initialState.hover);

    return (
        <div style={{
            width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", margin: "0 auto 5em 5%", padding: "0.675em 1.25em", textShadow: "0px 0px 5px #000", maxWidth: "1260px",
        }}>
            <div>
                <h4>
                    Favorites:
                </h4>
            </div>
            <div style={{
                position: "relative", width: "100%", height: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(64px, 6%))", gridGap: "1.75rem", alignItems: "center", justifyItems: "center", textAlign: "center",
                transition: "all 0.4s ease-in-out",
            }} onMouseOver={
                e => {
                    setHover(true);
                }
            } onMouseOut={
                e => {
                    setHover(false);
                }
            }>           
                {(favorites.length > 0 ? favorites : initialState.favorites)
                    .map((_,i) => {
                        const params = _.split(/;/);
                        const getParam = index => params[index].split(/=/)[1];
                        const name = getParam(0);
                        const url = getParam(1);
                        const icon = getParam(3);
                        return (
                            <Favorite
                                key={`favorite-${i}`}
                                name={name}
                                url={url}
                                icon={icon}
                            />
                        );
                    })
                }
                {hover && <Edit />}
            </div>
        </div>
    );
};

export default Favorites;