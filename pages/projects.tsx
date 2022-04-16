import type { NextPage } from 'next'
import LegoraLayout from "../components/LegoraLayout";
import {PagesTitleConstants} from "../content/constants/PagesTitleConstants";
import InnerToolbarComponent from "../components/common/InnerToolbarComponent";
import {ApplicationColors} from "../content/utils/ApplicationColors";
import ProjectViewComponent from "../components/childs/ProjectViewComponent";
import {ProjectsListContent} from "../content/utils/ProjectsListContent";

const Projects: NextPage = () => {
    return (
        <LegoraLayout title={PagesTitleConstants.PROJECTS_PAGE} description={PagesTitleConstants.PROJECTS_PAGE_DESCRIPTION}>
            <main>
                <InnerToolbarComponent isTitleWhite={false} />

                <div style={{ padding: "4em" }}>
                    <h2 style={{ color: ApplicationColors.PRIMARY_COLOR }}>Projects List</h2>
                    <p className="ProjectsDescription">List of Supported Projects in Legora To Generate Applications</p>
                    <div style={{ justifyContent: 'center', display: 'flex', marginTop: '2em' }}>
                        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start gap-5 items-center mt-10"}>
                            {ProjectsListContent.getProjectsList().map((item) => <ProjectViewComponent project={item} />)}
                        </div>
                    </div>
                </div>
            </main>
        </LegoraLayout>
    )
}

export default Projects
