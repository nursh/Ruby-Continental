import gql from 'graphql-tag';


const getMenuItems = gql`
  query {
    menuItems {
      name
      price
      category
    }
  }
`;

export { getMenuItems };