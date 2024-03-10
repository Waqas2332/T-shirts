import Button from "../components/ui-components/Button";
import { FaAmazon, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section className="mt-8">
      <div className="w-[90%] login rounded-xl font-inter flex-col gap-4 text-white flex justify-center items-center  max-md:w-[95%] mx-auto">
        <p className=" font-medium">
          Home &nbsp;&nbsp; &gt; &nbsp;&nbsp; Account
        </p>
        <h2 className="font-heading text-4xl leading-[44px] lg:leading-[60px] lg:text-5xl font-bold text-white">
          Log in
        </h2>
      </div>
      <div className="mt-20 pb-20">
        <form className="max-w-sm mx-auto font-inter text-sm ">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-[#0B8E98]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#0B8E98]"
            />
          </div>
          <Button className="w-full mt-2 p-2">Login</Button>
        </form>
        <div className="max-w-sm mt-4 flex gap-2 mx-auto justify-center items-center">
          <hr className="w-[180px]" />
          <p className="text-[#7993A1]">OR</p>
          <hr className="w-[180px]" />
        </div>
        <div className="max-w-sm mx-auto flex gap-3 mt-4">
          <button className="w-[120px] flex justify-center items-center h-[44px] bg-none border border-gray-200 rounded-md">
            <FaFacebook size={24} color="#1877F2" />
          </button>
          <button className="w-[120px] flex justify-center items-center h-[44px] bg-none border border-gray-200 rounded-md">
            <FcGoogle size={24} />
          </button>

          <button className="w-[120px] bg-[#FFA100] flex justify-center items-center h-[44px] bg-none border border-gray-200 rounded-md">
            <FaAmazon size={24} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
