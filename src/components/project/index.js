import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
import ProjectTab from './projectTab';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Projects" breadcrumbSubTitle="Projects" />
                <ProjectTab />
            </main>
            <Footer />
        </>
    );
};

export default index;