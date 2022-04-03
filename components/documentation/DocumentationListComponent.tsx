import React from 'react';

export default function DocumentationListComponent({ content }) {
    return (
        <div className={"m-5"}>
            <ol style={{ marginLeft: "1em" }}>
                {content.map((item, index) => {
                    return <li key={index} style={{ marginTop: "5px" }}>{(index + 1)}. {item}</li>
                })
                }
            </ol>
        </div>
    );
}
