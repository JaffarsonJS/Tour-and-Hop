import { StaticImageData } from "next/image";
import germany from "../../../assets/Images/Trending Destination Images/Germany.png"
import Greece from "../../../assets/Images/Trending Destination Images/Greece.png"
import Italy from "../../../assets/Images/Trending Destination Images/Italy.png"
import Turkey from "../../../assets/Images/Trending Destination Images/Turkey.png"

interface ListItem {
    src : string | StaticImageData;
    place:string;
}

let data : ListItem[] = [
    {
        src:Italy,
        place:"Italy"
    },
    {
        src:germany,
        place:"Germany"
    },
    {
        src:Greece,
        place:"Greece"
    },
    {
        src:Turkey,
        place:"Turkey"
    },
]

export default data;