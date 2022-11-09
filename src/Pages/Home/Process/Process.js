import React from 'react';
import { FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

const Process = () => {
    return (
      <div>
        <div className='text-center my-20'>
          <h1 className="text-4xl font-bold text-yellow-600 my-4">
            Contact 
          </h1>
        </div>
        <div className="grid grid-clos-1 md:grid-cols-3 mx-20 my-10">
          <div className="text-center flex items-center">
            <FaPhone className="text-2xl mr-5"></FaPhone>
            <h3 className="text-2xl">Phone: 01xxxxx</h3>
          </div>
          <div className="text-center flex items-center mx-4">
            <FaEnvelope className="text-2xl mr-5"></FaEnvelope>
            <h3 className="text-2xl">Email: aero@visa.com</h3>
          </div>
          <div className="text-center flex items-center">
            <FaTwitter className="text-2xl mr-5"></FaTwitter>
            <h3 className="text-2xl">Twitter: aero visa</h3>
          </div>
        </div>
      </div>
    );
};

export default Process;