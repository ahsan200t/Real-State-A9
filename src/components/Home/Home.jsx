import Banner from "../Banner/Banner";
import '../../App.css'
import {useLoaderData} from 'react-router-dom'
import Services from "../Services/Services";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const data= useLoaderData()
    return (
        <div>
          <Helmet>
            <title>Haven Vacation/Home</title>
          </Helmet>
            <Banner></Banner>
          <div>
            <h1 className="text-3xl font-bold font-poppins text-center mt-10">Our Services</h1>
          <div className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
           {
                data.map((item)=><Services
                key={item.id}
                item={item}
                ></Services>)
            }
           </div>
          </div>
            
        </div>
    );
};

export default Home;