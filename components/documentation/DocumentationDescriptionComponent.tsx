import React from 'react';
import {ApplicationColors} from "../../content/utils/ApplicationColors";

export default function DocumentationDescriptionComponent({ content }) {
    return (
        <div className={"m-5"}>
            <p style={{
                maxWidth: "60%",
                color: ApplicationColors.DESCRIPTION_COLOR
            }}>{content}</p>
        </div>
    );
}
