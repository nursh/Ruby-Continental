import gql from 'graphql-tag';

const processPayment = gql`
  mutation($amount: Float!, $token: String!, $order: ID!) {
    processPayment(data: {
      amount: $amount,
      token: $token,
      order: $order
    }) {
      id
    }
  }
`;

export { processPayment };