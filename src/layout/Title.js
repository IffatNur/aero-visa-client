import React from 'react';
import { Helmet } from 'react-helmet';

const Title = ({title}) => {
    return (
      <div>
        <Helmet>
          <title>AeroVIsa-{title}</title>
        </Helmet>
      </div>
    );
};

export default Title;