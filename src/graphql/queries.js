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
    products(order_by: { updated_at: desc }) {
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
    brands(order_by: { updated_at: desc }) {
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
    news(order_by: { updated_at: desc }) {
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
    invoices(order_by: { updated_at: desc }) {
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
export const INVOICE_TABS = gql`
  query invoiceTabs($user_id: uuid!) {
    invoices(where: { user_id: { _eq: $user_id } }) {
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

export const INVOICE_STATUS = gql`
  query invoiceStatus {
    invoice_status {
      id
      name
    }
  }
`

export const INVOICE_BY_ID = gql`
  query invoiceById($id: uuid!) {
    invoices_by_pk(id: $id) {
      id
      balance
      status
      note
      total
      created_at
      updated_at
      user {
        id
        name
        email
        phone
      }
      order {
        id
        items_total
        order_items {
          product {
            title
            id
            price
            brand {
              id
              title
            }
          }

          quantity
          total
        }
      }
    }
  }
`

export const PRODUCT_SELECT = gql`
  query productSelect {
    products {
      id
      title
    }
  }
`
export const GET_ALL_QUOTATIONS = gql`
  query getAllQuotations {
    quotations(order_by: { updated_at: desc }) {
      id
      dealer_remark
      created_at
      updated_at
      status
      quotation_status {
        id
        name
      }
      user {
        id
        name
        profile_picture_url
      }
      quotation_file_url
      quotation_number
      total_amount
    }
  }
`
export const QUOTATION_TABS = gql`
  query quotationTabs($user_id: uuid!) {
    quotations(where: { user_id: { _eq: $user_id } }) {
      id
      dealer_remark
      created_at
      updated_at
      status
      quotation_status {
        id
        name
      }
      user {
        id
        name
        profile_picture_url
      }
      quotation_file_url
      quotation_number
      total_amount
    }
  }
`
export const GET_ALL_SERVICE_CENTERS = gql`
  query serviceCenters {
    service_centers(order_by: { updated_at: desc }) {
      id
      name
      address
      phone
      created_at
      updated_at
    }
  }
`
export const QUOTATION_STATUS = gql`
  query aa {
    quotation_status {
      id
      name
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
      user {
        id
        name
        phone
      }
      quotation_items {
        id
        quantity
        product {
          price
          title

          brand {
            id
            title
          }
        }
      }
    }
  }
`
export const GET_ALL_SERVICE_TOKENS = gql`
  query getAllServiceTokens {
    service_tokens(order_by: { updated_at: desc }) {
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
        profile_picture_url
      }
    }
  }
`
export const SERVICE_TOKEN_TABS = gql`
  query serviceTokenTabs($user_id: uuid!) {
    service_tokens(where: { user_id: { _eq: $user_id } }) {
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
        profile_picture_url
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
        phone
        email
      }
    }
  }
`
export const ORDER_STATUS = gql`
  query OrderStatus {
    order_status {
      id
      name
    }
  }
`
export const GET_ALL_ORDERS = gql`
  query getAllOrders {
    orders(order_by: { updated_at: desc }) {
      id
      order_number
      completion_photo_url
      completed_at
      created_at
      delivering_at
      delivery_fee
      discount
      items_total
      order_status {
        name
        id
      }
      ordered_at
      preparing_at
      receiver_address
      receiver_name
      receiver_phone
      remark
      status
      total
      updated_at
      user {
        id
        name
        profile_picture_url
        user_role {
          role_name
        }
      }
      user_id
    }
  }
`
export const ORDERS_TABS = gql`
  query orderTabs($user_id: uuid!) {
    orders(where: { user_id: { _eq: $user_id } }) {
      order_number
      completion_photo_url
      completed_at
      created_at
      delivering_at
      delivery_fee
      discount
      items_total
      order_status {
        name
        id
      }
      ordered_at
      preparing_at
      receiver_address
      receiver_name
      receiver_phone
      remark
      status
      total
      updated_at
      user {
        id
        name
        profile_picture_url
        user_role {
          role_name
        }
      }
      user_id
    }
  }
`
export const ORDERS_BY_ID = gql`
  query ordersById($id: uuid!) {
    orders_by_pk(id: $id) {
      id
      order_number
      completion_photo_url
      completed_at
      created_at
      delivering_at
      delivery_fee
      discount
      items_total
      order_status {
        name
        id
      }
      ordered_at
      preparing_at
      receiver_address
      receiver_name
      receiver_phone
      remark
      status
      total
      updated_at
      receiver_name
      receiver_phone
      order_items {
        id
        quantity
        total
        unit_price
        product {
          id
          title
          brand {
            id
            title
          }
        }
      }
      user {
        id
        name
        phone
        email
        profile_picture_url
        user_role {
          role_name
        }
      }
      user_id
    }
  }
`
export const ORDERS_AGGREGATE = gql`
  query orderAggregate {
    activeOrder: orders_aggregate(
      where: {
        _and: [{ status: { _neq: "completed" } }, { status: { _neq: "canceled" } }, { status: { _neq: "refunded" } }]
      }
    ) {
      aggregate {
        count
      }
    }
    completeOrder: orders_aggregate(where: { status: { _eq: "completed" } }) {
      aggregate {
        count
      }
    }
    refundedOrder: orders_aggregate(where: { status: { _eq: "refunded" } }) {
      aggregate {
        count
      }
    }
    canceledOrder: orders_aggregate(where: { status: { _eq: "canceled" } }) {
      aggregate {
        count
      }
    }
  }
`
export const PRODUCT_AGGREGATE = gql`
  query productAggregate {
    brandProduct: products_aggregate(distinct_on: brand_id) {
      aggregate {
        count
      }
    }
    categoryProduct: products_aggregate(distinct_on: category_id) {
      aggregate {
        count
      }
    }
    disableProduct: products_aggregate(where: { disabled: { _eq: true } }) {
      aggregate {
        count
      }
    }
    activeProduct: products_aggregate(where: { disabled: { _eq: false } }) {
      aggregate {
        count
      }
    }
  }
`
export const NEWS_AGGREGATE = gql`
  query productAggregate {
    totalNews: news_aggregate {
      aggregate {
        count
      }
    }
    categoryNews: news_aggregate(distinct_on: news_category_id) {
      aggregate {
        count
      }
    }
    disableNews: news_aggregate(where: { disabled: { _eq: true } }) {
      aggregate {
        count
      }
    }
    activeNews: news_aggregate(where: { disabled: { _eq: false } }) {
      aggregate {
        count
      }
    }
  }
`
export const GET_ALL_DEALERS = gql`
  query getAllDealers {
    dealers {
      id
      address
      city_name
      name
      phone
      township_name
      user {
        id
        name
      }
    }
  }
`
export const GET_ALL_ADMINS = gql`
  query admins {
    admins(order_by: { updated_at: desc }) {
      id
      name
      email
      role
      created_at
      updated_at
    }
  }
`
export const USER_ROLES = gql`
  query userRoles {
    user_roles {
      id
      role_name
    }
  }
`
export const ADMIN_ROLES = gql`
  query adminRoles {
    admin_roles {
      id
      role_name
    }
  }
`
export const ADMIN_ROLES_AGGREGATE = gql`
  query orderAggregate {
    saleRole: admin_roles_aggregate(where: { role_name: { _eq: "sale" } }) {
      aggregate {
        count
      }
    }
    financeRole: admin_roles_aggregate(where: { role_name: { _eq: "finance" } }) {
      aggregate {
        count
      }
    }
    serviceRole: admin_roles_aggregate(where: { role_name: { _eq: "service" } }) {
      aggregate {
        count
      }
    }
    adminRole: admin_roles_aggregate(where: { role_name: { _eq: "admin" } }) {
      aggregate {
        count
      }
    }

    managerRole: admin_roles_aggregate(where: { role_name: { _eq: "manager" } }) {
      aggregate {
        count
      }
    }

    deliveryRole: admin_roles_aggregate(where: { role_name: { _eq: "delivery" } }) {
      aggregate {
        count
      }
    }
  }
`

export const DEALERS_BY_ID = gql`
  query dealerById($id: uuid!) {
    dealers_by_pk(id: $id) {
      id
      address
      city_name
      name
      phone
      township_name
      user {
        id
        name
      }
    }
  }
`

export const USER_STATUS_AGGREGATE = gql`
  query userAggregate {
    activeUser: users_aggregate(where: { status: { _eq: "active" } }) {
      aggregate {
        count
      }
    }
    pendingUser: users_aggregate(where: { status: { _eq: "pending" } }) {
      aggregate {
        count
      }
    }
    disabelUser: users_aggregate(where: { status: { _eq: "disabled" } }) {
      aggregate {
        count
      }
    }
  }
`

export const USERS_ROLE_AGGREGATES = gql`
  query userAggregate {
    consumerUser: users_aggregate(where: { role: { _eq: "consumer" } }) {
      aggregate {
        count
      }
    }
    dealerUser: users_aggregate(where: { role: { _eq: "dealer" } }) {
      aggregate {
        count
      }
    }
  }
`

export const SERVICE_AGGREGATE = gql`
  query userAggregate {
    completedService: service_tokens_aggregate(where: { status: { _eq: "complete" } }) {
      aggregate {
        count
      }
    }
    activeService: service_tokens_aggregate(
      where: { _and: [{ status: { _neq: "completed" } }, { status: { _neq: "canceled" } }] }
    ) {
      aggregate {
        count
      }
    }
    canceledService: service_tokens_aggregate(where: { status: { _eq: "canceled" } }) {
      aggregate {
        count
      }
    }
    pickService: service_tokens_aggregate(where: { status: { _eq: "picking up" } }) {
      aggregate {
        count
      }
    }
    receivedService: service_tokens_aggregate(where: { status: { _eq: "received token" } }) {
      aggregate {
        count
      }
    }
    processingService: service_tokens_aggregate(where: { status: { _eq: "processing" } }) {
      aggregate {
        count
      }
    }
    deliverService: service_tokens_aggregate(where: { status: { _eq: "delivering" } }) {
      aggregate {
        count
      }
    }
  }
`

export const USER_SERVICE_AGGREGATE = gql`
  query userServiceAggregate {
    users_aggregate(where: { service_tokens: { id: { _is_null: false } } }) {
      aggregate {
        count
      }
    }
  }
`

export const USER_INVOICE_AGGREGATE = gql`
  query userServiceAggregate {
    users_aggregate(where: { invoices: { id: { _is_null: false } } }) {
      aggregate {
        count
      }
    }
  }
`

export const USER_QUOTATION_AGGREGATE = gql`
  query userServiceAggregate {
    users_aggregate(where: { quotations: { id: { _is_null: false } } }) {
      aggregate {
        count
      }
    }
  }
`

export const INVOICE_AGGREGATE = gql`
  query userAggregate {
    paidInvoice: invoices_aggregate(where: { status: { _eq: "paid" } }) {
      aggregate {
        count
      }
    }
    UnPaindInvoice: users_aggregate(where: { status: { _eq: "unpaid" } }) {
      aggregate {
        count
      }
    }
    completeInvoice: users_aggregate(where: { status: { _eq: "completed" } }) {
      aggregate {
        count
      }
    }
    pendingInvoice: users_aggregate(where: { status: { _eq: "pending" } }) {
      aggregate {
        count
      }
    }
    partiallPaidInvoice: users_aggregate(where: { status: { _eq: "partially paid" } }) {
      aggregate {
        count
      }
    }
  }
`

export const QUOTATION_AGGREGATE = gql`
  query quotationAggregate {
    pendingQuotation: quotations_aggregate(where: { status: { _eq: "pending" } }) {
      aggregate {
        count
      }
    }
    acceptedQuotation: quotations_aggregate(where: { status: { _eq: "accepted" } }) {
      aggregate {
        count
      }
    }
    rejectedQuotation: quotations_aggregate(where: { status: { _eq: "rejected" } }) {
      aggregate {
        count
      }
    }
    completedQuotation: quotations_aggregate(where: { status: { _eq: "completed" } }) {
      aggregate {
        count
      }
    }
  }
`

export const SERVICE_STATUS = gql`
  query serviceStatus {
    service_status {
      id
      name
    }
  }
`
