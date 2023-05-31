import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
import BlogMain from './blogMain';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Blog" breadcrumbSubTitle="Blog" />
                <BlogMain />
            </main>
            <Footer />
        </>
    );
};

export default index;