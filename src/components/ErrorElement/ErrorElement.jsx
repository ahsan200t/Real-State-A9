import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div>
            <Helmet>
                <title>Haven Vacation/Error</title>
            </Helmet>
            <div className="text-center mb-8">
              <h1 className="text-[300px] font-bold">404</h1>
              <p className="text-5xl font-bold mb-3">Your Content</p>              
              <h2 className="text-4xl font-bold">Not Found</h2>
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-2 text-green-500">Back to Home</h1>
              <Link to='/'>  <button className="btn text-xl font-bold w-1/6 my-3 btn-primary">Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;