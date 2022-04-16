import type { NextPage } from 'next'
import LegoraLayout from "../components/LegoraLayout";
import {PagesTitleConstants} from "../content/constants/PagesTitleConstants";
import HomePageCoverComponent from "../components/home/HomePageCoverComponent";

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
