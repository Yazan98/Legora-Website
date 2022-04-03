import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import {ApplicationColors} from "../../content/utils/ApplicationColors";

export default function ToolbarComponent() {
    const router = useRouter()
    return (
        <nav className={"flex justify-between items-center h-16 bg-white text-black relative font-mono"} role={"navigation"}>
            <div style={{ fontSize: "large", color: ApplicationColors.TEXT_COLOR }} className={"pl-8"}>
                <Link href={"/"}><a>Legora</a></Link>
            </div>
            <div className={"px-4 cursor-pointer md:hidden"} onClick={() => router.push("/nav")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className={"pr-4 sm:hidden md:hidden lg:block xlg:block hidden lg:flex md:flex justify-between items-center"}>
                <div style={{ color: router.pathname === "/" ? ApplicationColors.TEXT_COLOR : "" }} className={"p-2"}>
                    <Link href="/"><a>Home</a></Link>
                </div>
                {/*<div style={{ color: router.pathname === "/documentation" ? ApplicationColors.TEXT_COLOR : ""}} className={"p-2"}>*/}
                {/*    <Link href="/documentation"><a>Documentation</a></Link>*/}
                {/*</div>*/}
                {/*<div style={{ color: router.pathname === "/skills" ? ApplicationColors.TEXT_COLOR : "" }} className={"p-2"}>*/}
                {/*    <Link href="/skills"><a>Tools</a></Link>*/}
                {/*</div>*/}
                {/*<div style={{ color: router.pathname === "/archive" ? ApplicationColors.TEXT_COLOR : "" }} className={"p-2"}>*/}
                {/*    <Link href="/archive"><a>Versions</a></Link>*/}
                {/*</div>*/}
            </div>
        </nav>
    );
}