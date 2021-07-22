import React, {useState} from "react";
import {FullMap} from "./Map/FullMap";
import {MainToolbar} from "./Toolbar/MainToolbar";

export function CombatContainer(){

    const [button, setButton] = useState("drag");

    const toolBarButton = (buttonClicked) => {
        console.log(buttonClicked);
        setButton(buttonClicked);
    }

    return (<div className={"container"}>
        <MainToolbar buttonClick={toolBarButton}/>
        <FullMap button={button}/>
    </div>)
}