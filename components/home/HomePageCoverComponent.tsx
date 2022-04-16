import React from 'react';
import InnerToolbarComponent from "../common/InnerToolbarComponent";
import {ApplicationColors} from "../../content/utils/ApplicationColors";
import MainImage from '../../assets/images/main.png';

export default function HomePageCoverComponent() {
    return (
        <section className={"relative h-screen w-screen overflow-hidden"}>
            <div className="flex flex-col-reverse lg:flex-row text-white" style={{ height: "100vh" }}>
                <div style={{ width: "60vw" }}>
                    <InnerToolbarComponent isTitleWhite={false} />
                    <div className="flex flex-col-reverse lg:flex-row items-center place-content-center text-white md:p-2 lg:p-10" style={{
                        height: "100vh"
                    }}>
                        <div className="Text flex flex-1 flex-col items-center lg:items-start md:p-5 lg:p-5 xl:p-5">
                            <div className={"lg:pl-20 sm:p-5 md:p-5"}>
                                <h2 className="text-3xl md:text-4 lg:text-5x1 lg:text-left" style={{color: ApplicationColors.PRIMARY_COLOR}}>Project Starter</h2>
                                <h2 className={"text-2xl md:text-4 lg:text-5x1 lg:text-left mt-4"} style={{ color: ApplicationColors.TEXT_COLOR, width: "70%" }}>Code Generator To Build Applications With Ready Configurations</h2>
                                <div className="flex justify-left flex-wrap pt-10">
                                    <a
                                        href="https://github.com/legora-io"
                                        className={"rounded-full text-white bg-white transition duration=300 ease-in-out flex items-start animate-bounce p-5 text-xs"}
                                        style={{ backgroundColor: ApplicationColors.PRIMARY_COLOR, paddingLeft: "3em", paddingRight: "3em" }}>
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"HomeHero"} style={{ backgroundColor: ApplicationColors.PRIMARY_COLOR, width: "40vw" }}>
                    <div className={"flex justify-between"} style={{ width: "100%" }}>
                        <div/>
                        <div className="flex justify-left flex-wrap mt-1">
                            <a
                                href="https://github.com/Yazan98/Legora"
                                className={"rounded-full text-black bg-white flex items-start p-3 m-2 text-xs"}
                                style={{ backgroundColor: ApplicationColors.BACKGROUND_COLOR, paddingLeft: "2em", paddingRight: "2em" }}>
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center flex-1 lg:p-20 HomeHero">

                    </div>
                </div>
            </div>

            <img loading="lazy"
                 src={MainImage.src}
                 alt="Legora Main Screen"
                 style={{
                     position: "absolute",
                     right: "0%",
                     top: "15%",
                     objectFit: "contain"
                 }}/>
        </section>
    );
}