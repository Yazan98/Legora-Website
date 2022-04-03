import React from 'react';
import InnerToolbarComponent from "../common/InnerToolbarComponent";
import {ApplicationColors} from "../../content/utils/ApplicationColors";
import PhonesImage from '../../assets/images/home_header.png';

export default function HomePageCoverComponent() {
    return (
        <section className={"relative h-screen w-screen overflow-hidden"} style={{
            background: "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(254,99,99,1) 100%)"
        }}>
            <InnerToolbarComponent isTitleWhite={true} />
            <div className="flex flex-col-reverse lg:flex-row items-center place-content-center text-white md:p-2 lg:p-10" style={{
                height: "93vh"
            }}>
                <div className="Text flex flex-1 flex-col items-center lg:items-start md:p-5 lg:p-5 xl:p-5">
                    <div className={"lg:pl-20 sm:p-5 md:p-5"}>
                        <p className="md:text-4 lg:text-5x1 lg:text-left">Project Starter</p>
                        <h2 className="text-3xl md:text-4 lg:text-5x1 lg:text-left mb-2" style={{color: ApplicationColors.PRIMARY_COLOR}}>Legora</h2>
                        <p className={"text-xs sm:text-base max-w-prose text-center lg:text-left mb-6 lg:text-md lg:block hidden"}>
                            Legora is a Project Starter and Code Generator to Generate Applications With Several Languages
                            Frameworks, Platforms With Ready Configurations, No Need to Start Your Configurations From Zero
                            Legora Will Generate The Projects That is Ready to Run Directly
                        </p>
                        <p className={"text-md mb-2"} style={{color: ApplicationColors.PRIMARY_COLOR}}>Currently The Project is Under Development</p>
                        <div className="flex justify-left flex-wrap pt-10">
                            <a
                                href="https://github.com/legora-io"
                                className={"rounded-full text-black bg-white transition duration=300 ease-in-out flex items-start animate-bounce p-5 text-xs"}>
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center flex-1 lg:p-20">
                    <img loading="lazy"
                         className={"w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-3/4 md:h-full lg:w-full"}
                         src={PhonesImage.src}
                         alt="Projects Phone Logo"
                         style={{
                             maxWidth: "100%",
                             maxHeight: "100%",
                             objectFit: "contain"
                         }}/>
                </div>
            </div>
        </section>
    );
}