import React, { CSSProperties, FC } from 'react';
import HeaderPara from './sub components/HeaderPara';
import PersonCount from './sub components/PersonCount';
import AgeofChild from './sub components/AgeofChild';
import Footer from './sub components/Footer';

type ClassName = string;
type childcounts = string

// Define the Props interface with className prop
interface Props {
    className: ClassName;
    styles?:CSSProperties;
}

const RoomsAndGuests:FC<Props> = ({ className }) => {


    return (
        <div className={className}>
            
            {/* HEADER PARAGRAPH SECTION*/}
            <HeaderPara />

            {/* PERSON COUNT SECTION */}
            <PersonCount />


            {/* AGE OF CHILD SECTION */}
            <AgeofChild />

            {/* FOOTER BUTTONS*/}
            <Footer/>
        </div >
    );
};

export default RoomsAndGuests;
// background: #86C8C4;
