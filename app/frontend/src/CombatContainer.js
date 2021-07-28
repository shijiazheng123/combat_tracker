import React, {useEffect, useState} from "react";
import {FullMap} from "./Map/FullMap";
import {MainToolbar} from "./Toolbar/MainToolbar";
import {PenTools} from "./Toolbar/PenTools";
import {tools,colors,strokes} from "./UIconstants";



export function CombatContainer(){

    const [button, setButton] = useState(tools[0]);
    const [currentColor, setColor] = useState(colors[0]);
    const [currentStroke, setStroke] = useState(strokes[0]);



    //keep track of which tool is active
    const toolBarButton = (buttonClicked) => {
        setButton(buttonClicked);
    }

    const infoBuilder = () => {
        switch (button){
            case "pen":
                return {color: currentColor, stroke: currentStroke};
            default:
                return {};
        }
    }


    return (<div className={"container"}>
        <div className={"background"}/>
        <MainToolbar buttonClick={toolBarButton} tools={tools}/>
        {button === "pen" && <PenTools
            currentColor={currentColor}
            currentStroke={currentStroke}
            setColor={setColor}
            setStroke={setStroke}
        />}
        <FullMap button={button}
                 info={infoBuilder()}
        />
    </div>)
}