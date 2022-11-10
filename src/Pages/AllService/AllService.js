import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../layout/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllService = () => {
  useTitle('Services');
  const [allServices, setAllservices] = useState([]);

    useEffect(()=>{
      fetch("http://localhost:5000/services")
      .then(res=>res.json())
      .then(data => setAllservices(data));
    },[])

    return (
      <div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-20 my-10">
          {allServices.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    );
};

export default AllService;