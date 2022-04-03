import React from 'react';

export default function DocumentationImageComponent({ content, isBigImage }) {
    return (
        <div className={"mt-10 ml-5"} style={{
            maxWidth: "60%"
        }}>
            <img loading="lazy"
                 className={isBigImage ? "w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-3/4 lg:w-full" : ""}
                 src={content}
                 alt="Vanite Documentation Image"
                 style={{
                     maxWidth: "100%",
                     objectFit: "contain"
                 }}/>
        </div>
    );
}
