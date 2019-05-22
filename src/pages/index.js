import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi everyone!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eligendi
      maiores libero id rem aliquid deleniti perspiciatis quidem consectetur
      dignissimos!
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
