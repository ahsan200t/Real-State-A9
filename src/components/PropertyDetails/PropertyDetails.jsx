/* eslint-disable react/jsx-key */
import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const detail = details.find((item) => item.id == id);
  return (
    <div>
     <div className="grid grid-cols-1 p-3 lg:grid-cols-2 gap-8 mb-8 border rounded-3xl p-2">

        <div>
            <img className="rounded-3xl h-full" src={detail.image} alt="" />
        </div>
        <div className="space-y-1]">
            <h1><span className="text-xl font-bold">{detail.estate_title}</span> <span className="bg-secondary text-white p-1 rounded-2xl">New</span></h1>
            <p><span className="font-semibold">Location: </span>{detail.location}</p>
            <p><span className="font-semibold">Area: </span>{detail.area}</p>
            <p><span className="font-semibold">Price: </span>{detail.price}</p>
            <p className="font-bold mt-3 bg-gray-100 rounded-lg text-center">Our Facilities:</p>
            <p>{detail.facilities.map((facility)=><li>{facility}</li>)}</p>
            <h1 className="font-bold mt-2 bg-gray-100 rounded-lg text-center">Details</h1>
            <p>{detail.description}</p>
            <button className="btn btn-secondary my-6 w-full">Buy Now</button>
        </div>
    </div>
    </div>
    
  );
};

export default PropertyDetails;
