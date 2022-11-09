import React from 'react';
import Title from '../../layout/Title';

const Blog = () => {
    return (
      <div className="w-1/2 mx-auto">
        <Title title='Blog'></Title>
        <div className="collapse border-2 border-x-stone-800 mb-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-gray-500 text-primary-content peer-checked:bg-teal-900 peer-checked:text-secondary-content">
            Difference between SQL and NoSQL
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-teal-700 peer-checked:text-secondary-content">
            <p>
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL. There are
              five practical differences between SQL and NoSQL: <br /> Language
              <br /> Scalability <br /> Structure <br /> Properties <br />{" "}
              Support and <br /> communities
            </p>
          </div>
        </div>
        <div className="collapse border-2 border-x-stone-800 mb-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-gray-500 text-primary-content peer-checked:bg-teal-900 peer-checked:text-secondary-content">
            What is JWT, and how does it work?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-teal-700 peer-checked:text-secondary-content">
            <p>
              JWTs or JSON Web Tokens are most commonly used to identify an
              authenticated user. They are issued by an authentication server
              and are consumed by the client-server (to secure its APIs). <br />
              A JWT contains three parts: <br /> Header: The header is the part
              that identifies which algorithm is being used to generate the
              signature. It usually consists of two parts, the type of the
              token, which is JWT, and the hashing algorithm, like HMAC-SHA256.{" "}
              <br /> Payload: The payload is the part that contains a set of
              claims. Claims are used to transmit information between two
              parties. There are no mandatory claims, but JWT specification
              defines a set of standard claims, such as iat and sub, which are
              short for issues at and subject. Custom Claims are also included
              in the payload if required. <br /> Signature: The signature is the
              part that securely validates the token. The encoded
              header(Base64url) is concatenated with the encoded
              payload(Base64url) and then signed by hashed with the algorithm
              already mentioned in the header with the secret-key only known to
              the issuer. Then this whole string is again encoded with Base64url
              to obtain the final signature.
            </p>
          </div>
        </div>
        <div className="collapse border-2 border-x-stone-800 mb-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-gray-500 text-primary-content peer-checked:bg-teal-900 peer-checked:text-secondary-content">
            What is the difference between javascript and NodeJS?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-teal-700 peer-checked:text-secondary-content">
            <p>
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language. <br />
              Node. js is a cross-platform JavaScript runtime environment for
              servers and applications. It is built on a single-threaded,
              non-blocking event loop, the Google Chrome V8 JavaScript engine,
              and a low-level I/O API.
            </p>
          </div>
        </div>
        <div className="collapse border-2 border-x-stone-800 mb-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-gray-500 text-primary-content peer-checked:bg-teal-900 peer-checked:text-secondary-content">
            How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-teal-700 peer-checked:text-secondary-content">
            <p>
              How NodeJS handle multiple client requests? NodeJS receives
              multiple client requests and places them into EventQueue. NodeJS
              is built with the concept of event-driven architecture. NodeJS has
              its own EventLoop which is an infinite loop that receives requests
              and processes them.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;