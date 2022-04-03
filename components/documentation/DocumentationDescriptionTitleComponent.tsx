import React from 'react';

export default function DocumentationDescriptionTitleComponent({ content }) {
    return (
        <div className={"mt-10 ml-5"} style={{
            maxWidth: "60%"
        }}>
            <p>{content}</p>
            <hr />
        </div>
    );
}
