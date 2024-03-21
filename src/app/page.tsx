import React, { FC } from 'react';
import RoomsAndGuests from './components/RoomsAndGuests/RoomsAndGuests';
import LandingPage from './components/Landing Page/LandingPage';


// type ClassName = 'bg-black' | 'bg-white' | 'text-red' | 'text-blue';
type ClassName = string;

interface Props {
    className: ClassName;
    styles?: React.CSSProperties;
}

const HomePage: FC = () => {
    return (
        <div>
            {/* ROOMS AND GUESTS DROPDOWN */}
            <RoomsAndGuests className="my-[10%] mx-[38%] h-[279px] w-[356px] border p-3 flex flex-col justify-between rounded-lg "/>

            {/* LANDING PAGE */}
            <LandingPage/>
        </div>
    );
};

export default HomePage;
