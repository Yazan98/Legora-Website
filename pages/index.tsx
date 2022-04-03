import type { NextPage } from 'next'
import LegoraLayout from "../components/LegoraLayout";
import {PagesTitleConstants} from "../content/constants/PagesTitleConstants";
import HomePageCoverComponent from "../components/home/HomePageCoverComponent";
import ServicesComponent from "../components/home/ServicesComponent";
import {HomeServicesContent} from "../content/content/HomeServicesContent";
import HomeCodeSnippetComponent from "../components/home/HomeCodeSnippetComponent";
import {ApplicationStringsUtils} from "../content/utils/ApplicationStringsUtils";
import HomeInverseCodeSnippetComponent from "../components/home/HomeInverseCodeSnippetComponent";

const Home: NextPage = () => {
  return (
    <LegoraLayout title={PagesTitleConstants.HOME_PAGE} description={PagesTitleConstants.HOME_PAGE_DESCRIPTION}>
        <main>
            <HomePageCoverComponent />

            {/*<br />*/}
            {/*<ServicesComponent*/}
            {/*    services={HomeServicesContent.getServices()}*/}
            {/*    title={HomeServicesContent.TITLE}*/}
            {/*    description={HomeServicesContent.DESCRIPTION} />*/}

            {/*<ServicesComponent*/}
            {/*    services={HomeServicesContent.getDependenciesList()}*/}
            {/*    title={HomeServicesContent.DEPENDENCIES_TITLE}*/}
            {/*    description={HomeServicesContent.DEPENDENCIES_DESCRIPTION} />*/}

            {/*<HomeCodeSnippetComponent*/}
            {/*    title={ApplicationStringsUtils.HOME_CODE_SNIPPET}*/}
            {/*    description={ApplicationStringsUtils.HOME_CODE_SNIPPET_DESCRIPTION} />*/}

            {/*<HomeInverseCodeSnippetComponent />*/}

        </main>
    </LegoraLayout>
  )
}

export default Home
