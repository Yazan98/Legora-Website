import React from 'react';
import ArrowExpandIconComponent from './icons/ArrowExpandIconComponent';
import ArrowCollapseIconComponent from './icons/ArrowCollapseIconComponent';

export default function DocumentationNavLinkComponent({ item, title, childs, hasChilds, onClickItem }) {
    const [isExpanded, setExpanded] = React.useState(false);
    return (
        <div className={"ml-5 overflow-y-auto overflow-scroll overflow-auto"} onClick={() => {
            setExpanded(!isExpanded)
            onClickItem(item)
        }}>
            <div className={"flex flex-start justify-start flex-row items-center align-middle cursor-pointer"}>
                {hasChilds ? (!isExpanded ? <ArrowExpandIconComponent /> : <ArrowCollapseIconComponent />): null}
                <h1 className={"text-black p-1"}>{title}</h1>
            </div>
            {isExpanded && hasChilds && childs ? <div className={"pt-1 pb-2"}>
                {childs.map((value,  index) => {
                        return <h3 className={"pl-10 pt-2 cursor-pointer"} key={index}>{value.title}</h3>
                    })}
            </div> : null}
        </div>
    )
}