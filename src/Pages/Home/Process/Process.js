import React from 'react';
import { FaAddressCard, FaBook, FaRegAddressBook } from "react-icons/fa";

const Process = () => {
    return (
      <div>
        <div className='text-center my-10'>
          <h1 className="text-4xl font-bold text-yellow-600 my-4">
            To get started
          </h1>
        </div>
        <div className="grid grid-clos-1 md:grid-cols-3 mx-20 my-10">
          <div className="text-center flex items-center">
            <FaAddressCard className="text-5xl mr-5"></FaAddressCard>
            <h3 className="text-3xl">1. Apply Online</h3>
          </div>
          <div className="text-center flex items-center">
            <FaBook className="text-5xl mr-5"></FaBook>
            <h3 className="text-3xl">2. Submit Docs</h3>
          </div>
          <div className="text-center flex items-center">
            <FaRegAddressBook className="text-5xl mr-5"></FaRegAddressBook>
            <h3 className="text-3xl">3. Receive Visa</h3>
          </div>
        </div>
      </div>
    );
};

export default Process;