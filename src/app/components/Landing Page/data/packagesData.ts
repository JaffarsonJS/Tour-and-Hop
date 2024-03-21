import { StaticImageData } from "next/image";
import lbt from "../../../assets/Images/Popular Tour Section Imsges/luka-bike-tour.png";
import ct from "../../../assets/Images/Popular Tour Section Imsges/cinque-terre.jpeg";
import wt from "../../../assets/Images/Popular Tour Section Imsges/wine-tasting.png";

interface items {
    src:string | StaticImageData;
    tourName:string;
    price:number;
    about:string;
    id:number;
}

let data : items[] = [
    {
        src:lbt,
        tourName:"Luca Bike Tour",
        price:3000,
        about:"The real magic is here where you can enjoy the best Tuscan wine and eat ...",
        id:1
    },
    {
        src:wt,
        tourName:"Wine tasting In Tuscany",
        price:2000,
        about:"The real magic is here where you can njoy the best Tuscan wine and eat ...",
        id:2
    },
    {
        src:ct,
        tourName:"Cinque Terre Tour",
        price:4000,
        about:"The real magic is here where you can enjoy the bst Tuscan wine and eat ...",
        id:3
    },
]

export default data;