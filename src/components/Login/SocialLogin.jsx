import UseAuth from "../../Hooks/UseAuth";

const SocialLogin = () => {
  const { googleLogIn, githubLogIn } = UseAuth();
  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold mb-3 divider">Login With</h1>
      <button
        onClick={() => googleLogIn()}
        className="btn btn-outline btn-sm btn-success w-1/3 mr-2"
      >
        Google
      </button>
      <button onClick={()=>githubLogIn()} className="btn btn-outline btn-sm btn-success w-1/3">
        Github
      </button>
    </div>
  );
};

export default SocialLogin;
