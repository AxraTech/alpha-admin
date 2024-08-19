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
export const NEWS_CATS = gql`
  query newCats {
    news_categories {
      id
      title
    }
  }
`

export const GET_ALL_INVOICES = gql`
  query getAllInvoices {
    invoices {
      id
      invoice_number
      status
      balance
      total
      discount
      invoice_status {
        id
        name
      }
      user {
        id
        name
        profile_picture_url
      }
      created_at
      updated_at

      invoice_file_url
    }
  }
`

export const INVOICE_BY_ID = gql`
  query invoiceById($id: uuid!) {
    invoices_by_pk(id: $id) {
      id
      user {
        id
        name
      }
      balance
      status
      total
      created_at
      updated_at
    }
  }
`
export const GET_ALL_QUOTATIONS = gql`
  query getAllQuotations {
    quotations {
      id
      dealer_remark
      created_at
      updated_at
      status
      user {
        id
        name
      }
      quotation_file_url
      quotation_number
      total_amount
    }
  }
`
export const QUOTATION_BY_ID = gql`
  query quotationById($id: uuid!) {
    quotations_by_pk(id: $id) {
      id
      created_at
      updated_at
      total_amount
      quotation_number
      status
      quotation_file_url
      status
      user {
        id
        name
      }
    }
  }
`

export const GET_ALL_SERVICE_TOKENS = gql`
  query getAllServiceTokens {
    service_tokens {
      id
      completed_at
      created_at
      description
      delivering_at
      document_photo_url
      is_warranty_valid
      issue_media_type
      issue_media_url
      picking_up_at
      product
      processing_at
      service_fee
      service_status {
        name
      }
      status
      token_number
      updated_at
      user {
        name
        id
      }
    }
  }
`

export const SERVICE_TOKEN_BY_ID = gql`
  query serviceTokensById($id: uuid!) {
    service_tokens_by_pk(id: $id) {
      id
      completed_at
      created_at
      description
      delivering_at
      document_photo_url
      is_warranty_valid
      issue_media_type
      issue_media_url
      picking_up_at
      product
      processing_at
      service_fee
      service_status {
        name
      }
      status
      token_number
      updated_at
      user {
        name
        id
      }
    }
  }
`
