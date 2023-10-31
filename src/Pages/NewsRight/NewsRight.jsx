import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import bgImg from "../../assets/bg.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const NewsRight = () => {
  const { signInGoogle, signInGithub } = useContext(AuthContext);

  const bgImage = {
    backgroundImage: `url(${bgImg})`,
  };

  const handleGoogleLogin = () => {
    return signInGoogle();
  };
  const handleGithubLogin = () => {
    return signInGithub();
  };

  return (
    <div className="sticky -top-[1050px] ">
      {/* login with  */}
      <div>
        <h2 className="text-2xl font-semibold">Login With</h2>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-info w-full mt-5 flex items-center"
        >
          <FaGoogle />
          Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="btn btn-outline w-full mt-2 flex items-center"
        >
          <FaGithub />
          Github
        </button>
      </div>

      {/* find us on  */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Find Us On</h2>

        <a
          className="border flex items-center gap-3 font-medium text-[#706F6F] p-4 rounded-t border-b-0 mt-6"
          href=""
        >
          <span className="bg-[#F3F3F3] p-3 rounded-full">
            <FaFacebookF className="text-[#3B599C]" />
          </span>{" "}
          Facebook
        </a>
        <a
          className="border flex items-center gap-3 font-medium text-[#706F6F] p-4 border-b-0"
          href=""
        >
          <span className="bg-[#F3F3F3] p-3 rounded-full">
            <FaTwitter className="text-[#58A7DE]" />
          </span>{" "}
          Twitter
        </a>
        <a
          className="border flex items-center gap-3 font-medium text-[#706F6F] p-4 rounded-b "
          href=""
        >
          <span className="bg-[#F3F3F3] p-3 rounded-full">
            <FaInstagram className="text-[#bb3071]" />
          </span>{" "}
          Intagram
        </a>
      </div>

      {/* Q-zone  */}
      <div className="bg-[#F3F3F3] mt-4 p-4">
        <h2 className="text-2xl font-semibold">Q-Zone</h2>

        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>

      {/* learn more  */}

      <div style={bgImage} className="bg-gray-400 py-14 mt-5 px-10 text-center">
        <h2 className="text-3xl text-white font-semibold">
          Create an Amazing Newspaper
        </h2>
        <p className="text-base text-white font-normal mt-5">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn btn-error bg-[#D72050] border-0 mt-8 rounded-none text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default NewsRight;
