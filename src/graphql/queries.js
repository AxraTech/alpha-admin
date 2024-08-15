import { gql } from '@apollo/client'
import { PRODUCT_BASE_FIELDS } from './fragments'

export const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      phone
      profile_picture_url
      role
      status
      delivery_name
      delivery_phone
      delivery_address
      disabled
      dealer {
        id
        name
        phone
        address
        city_name
        township_name
      }
    }
  }
`

export const GET_USER_BY_ID = gql`
  query getUsers($userId: uuid!) {
    users_by_pk(id: $userId) {
      id
      name
      phone
      profile_picture_url
      role
      status
      delivery_name
      delivery_phone
      delivery_address
      disabled
      dealer {
        id
        name
        phone
        address
        city_name
        township_name
      }
    }
  }
`

// product
export const GET_PRODUCT_CATEGORIES = gql`
  query getProductCategories {
    product_categories {
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

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      title
      serial_number
      product_medias(order_by: { updated_at: desc }, limit: 1) {
        id
        media_url
      }
      product_category {
        id
        title
        image_url
      }
      brand {
        id
        title
        image_url
      }
      price
      sku
      disabled
    }
  }
`

export const PRODUCT_BRANDs = gql`
  query productBrand {
    brands {
      id
      title
    }
  }
`
export const PRODUCT_CATS = gql`
  query productCat {
    product_categories {
      id
      title
    }
  }
`
export const GET_BRANDS = gql`
  query brands {
    brands {
      id
      title
      image_url
      products_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`
export const GET_NEWS_CATS = gql`
  query newCategorys {
    news_categories {
      id
      title
      news_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`

export const NEW_CAT_BY_ID = gql`
  query newCatById($id: uuid!) {
    news_categories_by_pk(id: $id) {
      id
      title
    }
  }
`

export const GET_NEWS = gql`
  query news {
    news {
      id
      title
      body_html
      image_url
      disabled
      news_category_id
      news_category {
        id
        title
      }
    }
  }
`
export const NEW_BY_ID = gql`
  query newId($id: uuid!) {
    news_by_pk(id: $id) {
      id
      title
      image_url
    }
  }
`
