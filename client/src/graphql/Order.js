import gql from 'graphql-tag';

const createOrder = gql`
  mutation {
    createOrder {
      id
    }
  }
`;

const updateOrder = gql`
  mutation($id: ID!, $total: Float!){
    updateOrder(id: $id, data: { total: $total })
  }
`;

export { createOrder, updateOrder };