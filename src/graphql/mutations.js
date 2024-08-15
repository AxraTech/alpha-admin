import { gql } from '@apollo/client'

export const ADMIN_SIGN_IN = gql`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`
export const ADD_CATEGORY = gql`
  mutation addCategory($data: product_categories_insert_input!) {
    insert_product_categories_one(object: $data) {
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
export const ADD_BRAND = gql`
  mutation addCategory($data: brands_insert_input!) {
    insert_brands_one(object: $data) {
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
export const ADD_PRODUCT = gql`
  mutation addProduct($data: products_insert_input!) {
    insert_products_one(object: $data) {
      id
    }
  }
`

// delete
export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`

export const DELETE_PRODUCT_BRAND = gql`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`

export const DELETE_PRODUCT_CAT = gql`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`

export const DELETE_NEW_CAT = gql`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`

export const ADD_NEWS_CAT = gql`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`
export const DELETE_NEWS = gql`
  mutation deleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
    }
  }
`
