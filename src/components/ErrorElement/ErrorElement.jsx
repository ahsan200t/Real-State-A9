import { Helmet } from "react-helmet-async";

const ErrorElement = () => {
    return (
        <div>
            <Helmet>
                <title>Haven Vacation/Error</title>
            </Helmet>
            <div className="text-center mb-8">
              <h1 className="text-[400px] font-bold">404</h1>
              <h2 className="text-5xl font-bold">Not Found</h2>
            </div>
        </div>
    );
};

export default ErrorElement;