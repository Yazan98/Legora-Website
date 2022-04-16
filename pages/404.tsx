import React from 'react';
import {NextPage} from "next";
import LegoraLayout from "../components/LegoraLayout";
import {PagesTitleConstants} from "../content/constants/PagesTitleConstants";
import InnerToolbarComponent from "../components/common/InnerToolbarComponent";

const NotFoundPage: NextPage = () => {
    return (
        <LegoraLayout title={PagesTitleConstants.HOME_PAGE} description={PagesTitleConstants.HOME_PAGE_DESCRIPTION}>
            <InnerToolbarComponent isTitleWhite={false} />
            <main className={"relative w-screen overflow-hidden center items-center place-content-center text-black md:p-2 lg:p-10"}>
                <div className={""}>
                    <h1>404</h1>
                    <h4>Content Not Found</h4>
                </div>
            </main>
        </LegoraLayout>
    )
}

export default NotFoundPage