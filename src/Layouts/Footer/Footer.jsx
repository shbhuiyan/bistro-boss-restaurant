import { FaGithub, FaLinkedin, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/icon/logo.png"

const Footer = () => {


    return (
        <footer> 
            <div className="flex mt-20 flex-col md:flex-row max-md:gap-20 justify-between items-center p-32 lg:p-40 bg-base-100 border-t-2 rounded-lg">
            <div className="">
            <img className="w-32" src={logo} alt="" />
            <div to={'/'} className="font-cinzel"><p className="text-xl font-bold uppercase">Bistro Boss</p><p className="font-medium uppercase tracking-[3px] max-md:hidden">Restaurant</p></div>
            </div>
                <div className="flex justify-center items-center gap-10 text-4xl">
                    <a target="_blank" href="https://www.facebook.com/"><FaSquareFacebook className="text-blue-600" /></a>
                    <a target="_blank" href="https://x.com/?lang=en"><FaXTwitter /></a>
                    <a target="_blank" href="https://www.linkedin.com/"><FaLinkedin className="text-blue-600" /></a>
                    <a target="_blank" href="https://github.com/shbhuiyan"><FaGithub /></a>
                </div>
                <div className="text-center">
                  <h6 className="footer-title">Newsletter</h6>
                  <fieldset className="form-control w-80">
                    <div className="join">
                      <input
                        type="text"
                        placeholder="enter your email"
                        className="input input-bordered join-item" />
                      <button className="btn btn-info join-item">Subscribe</button>
                    </div>
                  </fieldset>
                </div>
            </div>
            <div className="footer footer-center bg-base-300 text-base-content p-4">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by SH Bhuiyan</p>
            </div>
        </footer>
    );
};

export default Footer;