import type { NextPage } from 'next'
import LegoraLayout from "../components/LegoraLayout";
import {PagesTitleConstants} from "../content/constants/PagesTitleConstants";
import HomePageCoverComponent from "../components/home/HomePageCoverComponent";
import ServicesComponent from "../components/home/ServicesComponent";
import {ApplicationStringsUtils} from "../content/utils/ApplicationStringsUtils";
import {ApplicationColors} from "../content/utils/ApplicationColors";

const Home: NextPage = () => {
  return (
    <LegoraLayout title={PagesTitleConstants.HOME_PAGE} description={PagesTitleConstants.HOME_PAGE_DESCRIPTION}>
        <main>
            <HomePageCoverComponent />
        </main>
    </LegoraLayout>
  )
}

export default Home
