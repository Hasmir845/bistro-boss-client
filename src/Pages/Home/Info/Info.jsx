import React from "react";

import chefService from "../../../assets/home/chef-service.jpg";

const Info = () => {
  return (
    <div
    className=" mb-8 flex items-center justify-center"
    style=
      {{
        backgroundImage: `url(${chefService})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px", // 
        width: "100%", 
      }}
    >
      <div className=" w-2/3 bg-white h-2/3 mx-auto flex items-center justify-center">

        <div className=" text-center">
            <h2 className=" uppercase text-3xl font-light">Bistro boss</h2>
        <p className=" w-3/4 mx-auto my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga incidunt sed consequuntur officia adipisci, quia dignissimos exercitationem enim, quasi accusantium sequi odit hic laboriosam nesciunt pariatur? Eum sequi explicabo eligendi.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
