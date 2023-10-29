import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='mt-5'>Journalism Without Fear or Favour</p>
            <p className='mt-3'> {moment().format("dddd, MMMM D, YYYY")}</p>

            <div className='bg-[#F3F3F3] mt-7 rounded-sm p-4 flex items-center justify-between font-medium'>
                <button className="py-3 px-6 rounded-sm hover:bg-blue-700 hover:scale-[.97] hover:transition-all bg-[#D72050] text-white ">Latest</button>
                <Marquee >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
            </div>
        </div>
    );
};

export default Header;