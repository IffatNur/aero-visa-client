import React from 'react';

const About = () => {
    return (
      <div className="grid grid-cols-2 my-20 mx-20">
        <div>
          <img
            className="rounded-xl"
            src="https://media.istockphoto.com/id/1330547068/photo/doing-business-with-a-smile.jpg?b=1&s=170667a&w=0&k=20&c=TwDWQaxszmFw3q3kRvjUF7oSzFQQJGailuxRU9MzvII="
            alt=""
          ></img>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-yellow-600 my-4">
            The journey started at <span className='text-red-600 text-6xl'>2009</span>
          </h1>
          <p className="text-xl my-5 w-3/4">
            People having issues with immigration and visa related information.
            The main intention is to provide best service about it and make
            immigration a journey of pleasure.
          </p>
        </div>
      </div>
    );
};

export default About;