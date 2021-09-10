import { faPen, faPlus, faSquare } from '@fortawesome/free-solid-svg-icons';
import erase from './assets/erase.png';
import hand from './assets/hand.png';
import pointer from './assets/pointer.png';


export const tools = ["move", "pen", "shape", "erase", "drag", "add"];
export const toolIcons = {
    drag: {type: "image", source: hand},
    move: {type: "image", source: pointer},
    pen: {type: "icon", source: faPen},
    shape: {type: "icon", source: faSquare},
    erase: {type: "image", source: erase},
    add: {type: "icon", source: faPlus},
}

export const colors = ["black", "red", "blue", "yellow", "orange", "purple", "green", "white"];
export const strokes = [2,6,10,20];
export const opacity = [1.0, 0.01];
export const shapes = ["rect", "circle", "polygon"];


//examples

export const allies = [
    {name: "bob", maxHP: 100},
    {name: "steve", maxHP: 150}
]

export const enemies = [
    {name: "monster", maxHP: 300}
]