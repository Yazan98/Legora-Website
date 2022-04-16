import type { NextPage } from 'next'
import React from 'react';
import {ApplicationColors} from "../../content/utils/ApplicationColors";

export default function ProjectViewComponent({ project }) {
    return (
        <div className={"justify-center relative"}>
            <div style={{
                padding: '1.5em',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: ApplicationColors.DESCRIPTION_COLOR,
                borderRadius: '10px',
            }}>
               <div style={{ width: "100px", height: "100px" }}>
                   <img alt={project.name} src={project.icon} loading="lazy" width="80px" height="80px" />
               </div>
                <h3 className="SkillsItemTitle pt-5">{project.name}</h3>
                <p style={{
                        color: ApplicationColors.DESCRIPTION_COLOR,
                        height: '80px',
                        fontSize: 'small',
                        paddingTop: '5px',
                    }}>
                    {project.description}
                </p>

                <div className="flex justify-left flex-wrap mt-1">
                    <p
                        className={"rounded-full text-white bg-white flex items-start p-3 m-2 text-xs"}
                        style={{ backgroundColor: ApplicationColors.PRIMARY_COLOR, position: "absolute", top: "0", right: "0", margin: "1em", fontSize: "x-small" }}>
                        {project.status}
                    </p>
                </div>
            </div>
        </div>
    );
}