import React from 'react'
import Header from './../../MyComponents/Header/Index';
import Career from './../../MyComponents/Career/Index';
import JobTable from './../../MyComponents/JobTable/Index';
import SuggestionBox from './../../MyComponents/SuggestionBox/Index';
import Footer from './../../MyComponents/Footer/Index';
// import ChatBox from '../../MyComponents/ChatBox/Index';
import Circles from '../../MyComponents/Circles/circles';
import Cardview from '../../MyComponents/Title/Cardview';

export default function Index() {
    return (
        <>
            <Header />
            {/* <ChatBox/> */}
            <Career />
            <Cardview/>
            <Circles/>
            <JobTable />
            <SuggestionBox/>
            <Footer/>
        </>
    )
}
