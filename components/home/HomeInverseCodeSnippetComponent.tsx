import React from "react";
import {ApplicationStringsUtils} from "../../content/utils/ApplicationStringsUtils";
import CodeSnippet from '/assets/images/home_code_2.png';

export default function HomeInverseCodeSnippetComponent() {
    return (
        <section className={"p-4 md:p-8 lg:p-8 xl:p-8 m-5"}>
            <div className={"flex flex-col-reverse lg:flex-row items-center place-center-center text-black md:p-2 lg:p-10"}>
                <div className={"flex-1 lg:p-20 items-center place-center-center"}>
                    <h1 className={"font-bold"}>ViewModel Code Snippet in Vanite</h1>
                    <p>This Example about How to handle Actions, State in ViewModels Inside Vanite</p>

                    <br />
                    <br />
                    <br />

                    <h1 className={"font-bold"}>Vanite Highlighted Information</h1>
                    <p>Vanite ViewModels Has More Than 3 Types, Each One For Specific UseCase, With Specific Parameters</p>

                    <br />
                    <br />
                    <br />

                    <h1 className={"font-bold"}>Vanite ViewModels Information</h1>
                    <p>Vanite is Depending on State, Actions, To Execute Events in ViewModels and Return Them to View Via onChangeState Method</p>

                    <br />
                    <br />
                    <br />
                </div>

                <div className="flex flex-1 flex-col items-center lg:items-start md:p-5 lg:p-5 xl:p-5">
                    <img
                        src={CodeSnippet.src}
                        title={"Vanite Code Snippet ViewModel Example"}
                        alt={"Vanite Code Snippet ViewModel Example"}
                        loading={"lazy"}
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain"
                        }}/>
                    <br />
                </div>
            </div>
        </section>
    );
}