import React from "react";

const Footer = () => {
  return (
    <div className="pt-24 bg-gray-100 ">
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold text-black">Gadget Heaven</h1>
        <p className="text-gray-600 mt-2">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>


      <footer className="mt-12 bg-gray-800 text-gray-300 py-10 flex flex-col justify-center">
        <div className="container mx-auto grid grid-cols-3 gap-8 px-5">
          <div className="flex flex-col justify-center items-center">
            <h6 className="text-lg font-semibold mb-4 text-white">Services</h6>
            <ul className="pl-7">
              <li>
                <a className="link-hover text-gray-400 hover:text-white" href="#">
                  Branding
                </a>
              </li>
              <li>
                <a className="link-hover text-gray-400 hover:text-white" href="#">
                  Design
                </a>
              </li>
              <li>
                <a className="link-hover text-gray-400 hover:text-white" href="#">
                  Marketing
                </a>
              </li>
              <li>
                <a className="link-hover text-gray-400 hover:text-white" href="#">
                  Advertisement
                </a>
              </li>
            </ul>
          </div>


          <div className="flex flex-col justify-center items-center">
            <h6 className="text-lg font-semibold mb-4 text-white">Company</h6>
            <ul>
              <li>
                <a className="link-hover text-gray-400 hover:text-white" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="link-hover text-gray-400 hover:text-white" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="link-hover text-gray-400 hover:text-white" href="#">
                  Jobs
                </a>
              </li>
              <li>
                <a className="link-hover text-gray-400 hover:text-white" href="#">
                  Press kit
                </a>
              </li>
            </ul>
          </div>



          <div className="flex flex-col justify-center items-center">
            <h6 className="text-lg font-semibold mb-4 text-white">Legal</h6>
            <ul>
              <li>
                <a className="link-hover text-gray-400 hover:text-white" href="#">
                  Terms of use
                </a>
              </li>
              <li>
                <a className="link-hover text-gray-400 hover:text-white" href="#">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="link-hover text-gray-400 hover:text-white" href="#">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
        </div>


        <div className="mt-10 text-center border-t border-gray-700 pt-5">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Gadget Heaven. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
