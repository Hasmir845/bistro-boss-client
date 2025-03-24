import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './featured.css';

import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
    return (
        <div className=' featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
            heading='Featured Item'
            subHeading='Check it out'
            >
            </SectionTitle>
            <div className=' md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className=' md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className=' uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, amet nostrum aperiam eveniet mollitia cum laboriosam iusto animi esse consectetur impedit enim facere laudantium eligendi quisquam itaque odit harum tenetur.</p>
                    <button className=' btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;