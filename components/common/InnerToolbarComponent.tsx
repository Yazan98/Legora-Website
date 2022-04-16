import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import {ApplicationColors} from "../../content/utils/ApplicationColors";
import Logo from '../../assets/images/icon_red.png';

export default function InnerToolbarComponent({ isTitleWhite }) {
    const router = useRouter()
    return (
        <nav className={"flex justify-between items-center h-16 text-white relative font-mono"} role={"navigation"}>
            <div style={{ marginTop: "1em", fontSize: "large", color: isTitleWhite ? "white":  ApplicationColors.PRIMARY_COLOR }} className={"pl-8 text-3x1 flex items-center"}>
                <img src={Logo.src} alt={"Legora Logo"} height={"50px"} width={"50px"} style={{ marginRight: "1em" }} />
                <Link href={"/"}><a style={{ color: isTitleWhite ? "white":  ApplicationColors.PRIMARY_COLOR, fontSize: "medium" }}>Legora</a></Link>
            </div>
            <div className={"px-4 cursor-pointer md:hidden"} onClick={() => router.push("nav")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className={"pr-4 sm:hidden md:hidden lg:block xlg:block hidden lg:flex md:flex justify-between items-center"}>
                <div style={{ color: isTitleWhite ? "white": router.pathname === "/" ? ApplicationColors.PRIMARY_COLOR : "" }} className={"p-2"}>
                    <Link href="/"><a>Home</a></Link>
                </div>
                <div style={{ color: isTitleWhite ? "white": router.pathname === "/versions" ?  ApplicationColors.PRIMARY_COLOR : "black"}} className={"p-2"}>
                    <Link href="/versions"><a>Versions</a></Link>
                </div>
                <div style={{ color: isTitleWhite ? "white": router.pathname === "/generator" ?  ApplicationColors.PRIMARY_COLOR : "black" }} className={"p-2"}>
                    <Link href="/generator"><a>Generator</a></Link>
                </div>
                <div style={{ color: isTitleWhite ? "white": router.pathname === "/about" ?  ApplicationColors.PRIMARY_COLOR : "black" }} className={"p-2"}>
                    <Link href="/about"><a>About</a></Link>
                </div>
            </div>
        </nav>
    );
}