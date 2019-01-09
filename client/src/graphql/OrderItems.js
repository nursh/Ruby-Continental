import gql from 'graphql-tag';


const createOrderItem = gql`
  mutation($name: String!, $quantity: Int!, $price: Float!, $order: ID!) {
    createOrderItem(data: {
      name: $name,
      quantity: $quantity,
      price: $price,
      order: $order
    }) {
      id
    }
  }
`;

export { createOrderItem };