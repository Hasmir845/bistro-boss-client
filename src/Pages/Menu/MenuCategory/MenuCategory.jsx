import React from 'react';
import MenuItems from '../../Shared/menuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className=' mt-16'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className=' grid md:grid-cols-2 gap-10 my-16'>
            {
                items.map(item => <MenuItems
                key={item._id}
                item={item}
                ></MenuItems>)
            }
        </div>
        <Link to={`/order/${title}`}>
        <button className=' btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
        </Link>
        </div>
    );
};

export default MenuCategory;