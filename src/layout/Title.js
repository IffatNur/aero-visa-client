import React from 'react';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
const Title = ({title}) => {
    return (
      <HelmetProvider>
          <Helmet>
            <title>AeroVisa-{title}</title>
          </Helmet>
      </HelmetProvider>
    );
};

export default Title;