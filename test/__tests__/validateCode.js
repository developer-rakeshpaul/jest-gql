import { gql } from 'react-apollo';
import runGQLTest from '../../src/gqlTest';
import allWorks from './allWorks';

const test = {
  previous: [allWorks],
  name: 'Validate senseless code',
  gql: gql`
    mutation validateCode($longCode: String!, $lang: String!) {
      validateCode(longCode: $longCode, lang: $lang) {
        available
      }
    }
  `,
  vars: data => ({ longCode: data.workId, lang: 'es' }),
  result: data => ({ available: data.validateCode.available }),
  test: data => !data.available,
  repeat: 2,
  endPoint: process.env.GQL_API_URL,
};

runGQLTest(test);
export default test;
