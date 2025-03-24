import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/menuItems/MenuItems';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category=== 'popular');

    return (
        <section className=' mb-12'>
            <SectionTitle
        subHeading={"Check it out"}
      heading={"From Our Menu"}
        ></SectionTitle>

        <div className=' grid md:grid-cols-2 gap-10'>
            {
                popular.map(item => <MenuItems
                key={item._id}
                item={item}
                ></MenuItems>)
            }
        </div>
        <div className=' flex justify-center mt-5'>
        <button className=' btn btn-outline border-0 border-b-4 mt-4'>View Full Menu</button>
        </div>
        </section>
    );
};

export default PopularMenu;