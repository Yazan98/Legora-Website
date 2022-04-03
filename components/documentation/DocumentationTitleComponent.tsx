import React from 'react';

export default function DocumentationTitleComponent({ content }) {
    return (
        <div className={"m-5"}>
            <h1 style={{ fontSize: "x-large" }}>{content}</h1>
        </div>
    );
}
