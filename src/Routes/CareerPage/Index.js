import React from 'react'
import Header from './../../MyComponents/Header/Index';
import Career from './../../MyComponents/Career/Index';
import JobTable from './../../MyComponents/JobTable/Index';
import Footer from './../../MyComponents/Footer/Index';
import Circles from '../../MyComponents/Circles/circles';
import Cardview from '../../MyComponents/Title/Cardview';

export default function Index() {
    return (
        <>
            <Header />
            <Career />
            <Cardview/>
            <Circles/>
            <JobTable />
            <Footer/>
        </>
    )
}
