/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Services = ({item}) => {
  const {id}=item;
    return (
        <div>
           <div className="card card-compact bg-base-100 border h-[500px]">
        <figure>
          <img
            src={item.image}
          />
        </figure>
        <div className="card-body">
            <p className="card-title">{item.segment_name}</p>
        </div>
        <div className="card-body">
          <h2 className="card-title">{item.estate_title}</h2>
          <p>{item.description}</p>
         <div>
         <div className="flex">
         <p className="font-medium">Status: </p>
         <h1 className="font-bold text-secondary">{item.status}</h1>
         </div>
        <div className="flex">
        <p className="font-medium">Price: </p>
         <h1 className="font-medium">{item.price}</h1>
        </div>
        <div className="flex">
        <p className="font-medium">Area: </p>
         <h2 className="font-medium">{item.area}</h2>
        </div>
         </div>
          
          <div>
          <Link to={`/property-details/${id}`}>
         <div>
         <button className="btn btn-secondary w-full">View Property</button>
         </div>
          </Link>
          </div>
        </div>
      </div>  
        </div>
    );
};

export default Services;








