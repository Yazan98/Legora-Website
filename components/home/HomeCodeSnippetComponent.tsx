import React from "react";
import {ApplicationColors} from "../../content/utils/ApplicationColors";
import CodeSnippet from '/assets/images/home_code_1.png';

export default function HomeCodeSnippetComponent({ title, description }) {
    return (
        <section className={"p-4 md:p-8 lg:p-8 xl:p-8 m-5"}>
            <h2 className={"mt-10 w-screen"} style={{ color: ApplicationColors.TEXT_COLOR }}>{title}</h2>
            <p className="w-screen">{description}</p>
            <div className={"flex flex-col-reverse lg:flex-row items-center place-center-center text-black md:p-2 lg:p-10"}>
                <div className="flex flex-1 flex-col items-center lg:items-start md:p-5 lg:p-5 xl:p-5">
                   <img
                       src={CodeSnippet.src}
                       title={"Vanite Code Snippet Fragment Example"}
                       alt={"Vanite Code Snippet Fragment Example"}
                       loading={"lazy"}
                       style={{
                           maxWidth: "100%",
                           maxHeight: "100%",
                           objectFit: "contain"
                       }}/>
                    <br />
                </div>
                <div className={"flex-1 lg:p-20 items-center place-center-center"}>
                    <h1 className={"font-bold"}>Fragment Code Snippet in Vanite</h1>
                    <p>This Example about How to handle Loading, Success, Error State in Each Fragment inside Vanite</p>

                    <br />
                    <br />
                    <br />

                    <h1 className={"font-bold"}>Vanite Highlighted Information</h1>
                    <p>Vanite is Depending Completely on Fragments, States, Actions, ViewModels While Creating Fragments</p>

                    <br />
                    <br />
                    <br />

                    <h1 className={"font-bold"}>Vanite Dependencies Information</h1>
                    <p>Vanite is Depending Completely on Multiple Dependencies, For Each Section You Need to Include The required Dependency in Each Module of the project</p>

                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </section>
    );
}