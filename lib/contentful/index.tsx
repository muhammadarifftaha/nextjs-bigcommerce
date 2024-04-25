import { createClient } from 'contentful';

const contentfulClient = createClient({
  space: 'jhf0apvy4fhs',
  accessToken: 'cTPlIfx_O15U6vVUUCsLX7jycvMTS_YJC68AZjGlbFY',
  environment: 'master'
});

export default contentfulClient;
