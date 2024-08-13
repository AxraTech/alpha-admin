import {gql} from "@apollo/client";

export const ADMIN_SIGN_IN = gql`
mutation adminSignIn($email: String!, $password: String!) {
  AdminSignIn(email: $email, password: $password) {
    token
    message
  }
}
`;

export const ADD_CATEGORY = gql`
mutation addCategory($data: product_categories_insert_input!) {
  insert_product_categories_one (object: $data) {
    id
    title
    image_url
    created_at
    products_aggregate {
      aggregate {
        count
      }
    }
  }
}
`
