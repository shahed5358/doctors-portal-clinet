import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Reviews from './Reviews';
import Services from './Services';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className="px-12">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;