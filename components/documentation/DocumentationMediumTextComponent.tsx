import React from 'react';

export default function DocumentationMediumTextComponent({ content }) {
    return (
        <div className={"m-5"}>
            <h1 style={{ fontSize: "large" }}>{content}</h1>
        </div>
    );
}
