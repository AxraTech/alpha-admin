import {gql} from "@apollo/client";
import {PRODUCT_BASE_FIELDS} from "./fragments";


export const GET_USERS = gql`
query getUsers {
  users{
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
`;


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
`;


export const GET_NOTIFICATIONS_COUNT = gql`
query getNotificationsCount {
  notifications_aggregate {
    aggregate {
      count
    }
  }
}
`;


export const GET_NOTIFICATIONS = gql`
query getNotifications {
  notifications(order_by: {created_at: desc}) {
    id
    title
    body
    created_at
  }
}

`;

export const GET_CART_ITEMS = gql`
query getCartItems {
  cart_items(order_by: {created_at: desc}) {
    id
    quantity
    created_at
    product_discount {
      id
      discounted_value
    }
    product {
      ...productBaseFields
    }
  }
}
${PRODUCT_BASE_FIELDS}
`;


export const GET_HOME_ADS = gql`
query getHomeAds {
  home_ads(order_by: {created_at: desc}) {
    id
    title
    linking_url
    image_url
    created_at
  }
}
`;


export const GET_NEW_ARRIVAL_PRODUCTS = gql`
query getNewArrivalProducts($limit: Int!) {
  products(order_by: {created_at: desc}, limit: $limit) {
    ...productBaseFields
  }
}
${PRODUCT_BASE_FIELDS}
`;

export const GET_PRODUCT_CATEGORIES = gql`
query getProductCategories {
  product_categories(order_by: {updated_at: desc}) {
    id
    title
    image_url
    created_at
  }
}
`;

export const GET_PRODUCTS = gql`
query getProducts($where: products_bool_exp!, $order_by: [products_order_by!]!, $limit: Int!) {
  products(
    where: $where,
    order_by: $order_by,
    limit: $limit
  ) {
    ...productBaseFields
  }
}
${PRODUCT_BASE_FIELDS}
`;


export const GET_PRODUCT_DETAIL = gql`
query getProductDetail($productId: uuid!) {
  products_by_pk(id: $productId) {
    id
    title
    description_html
    price
    product_medias {
      id
      media_url
      media_type
    }
    product_category {
      id
      title
      image_url
    }
    product_variants {
      id
      image_url
      price
      stock
      sku
      product_variant_options {
        id
        option_name {
          id
          name
          option_values {
            id
            name
          }
        }
      }
    }
    option_names {
      id
      name
      option_values {
        id
        name
      }
    }
  }
}
`;

export const GET_PRODUCT_DISCOUNT = gql`
query getProductDiscount($productId: uuid!) {
  product_discounts(where: {product_id: {_eq: $productId}}, order_by: {min_order: asc}) {
    id
    min_order
    customer_type
    discounted_value
  }
}

`;

export const GET_NEWS = gql`
query getNews($where: news_bool_exp!) {
  news(
  where: $where,
  order_by: {created_at: desc}
  ) {
    id
    title
    image_url
    created_at
    news_category {
      id
      title
    }
  }
}
`;


export const GET_NEW_CATEGORIES = gql`
query getNewsCategories {
  news_categories(order_by: {updated_at: desc}) {
    id
    title
  }
}

`;


export const GET_NEWS_DETAIL = gql`
query getNewsDetail($newsId: uuid!) {
  news_by_pk(id: $newsId) {
    id
    title
    image_url
    body_html
    created_at
    news_category {
      id
      title
    }
    news_related_products {
      id
      product {
        ...productBaseFields
      }
    }
  }
}
${PRODUCT_BASE_FIELDS}
`;


export const GET_SERVICE_CENTERS = gql`
query getServiceCenters {
  service_centers(order_by: {
    updated_at:desc
  }) {
    id
    name
    address
    phone
    latitude
    longitude
  }
}
`;


export const GET_SAVED_PRODUCTS = gql`
query getSavedProducts($userId: uuid!) {
  saved_products(where: {user_id: {_eq: $userId}}) {
    id
    product {
      ...productBaseFields
    }
  }
}
${PRODUCT_BASE_FIELDS}
`;


export const GET_CITY = gql`
query getCities {
  cities(order_by: {name: asc}) {
    id
    name
  }
}

`;

export const GET_TOWNSHIP = gql`
query getTownships($city_name: String!) {
  townships(order_by: {name: asc}, where: {city_name: {_eq: $city_name}}) {
    id
    name
  }
}

`;


export const GET_ORDERS = gql`
query getOrders {
  orders(order_by: {created_at: desc}) {
    id
    order_number
    status
    total
    created_at
    ordered_at
    preparing_at
    delivering_at
    completed_at
  }
}
`;


export const GET_ORDER_DETAIL = gql`
query getOrderDetail($orderId: uuid!) {
  orders_by_pk(id: $orderId) {
    id
    order_number
    status
    items_total
    discount
    total
    created_at
    ordered_at
    preparing_at
    delivering_at
    completed_at
    invoice {
      id
      invoice_number
    }
    order_items {
      id
      discounted_price
      quantity
      total
      unit_price
      product {
        ...productBaseFields
      }
    }
  }
}
${PRODUCT_BASE_FIELDS}
`;

export const CHECK_SAVED_PRODUCT = gql`
query checkSavedProduct($user_id: uuid!, $product_id: uuid!) {
  saved_products_aggregate(where: {user_id: {_eq: $user_id}, product_id: {_eq: $product_id}}) {
    aggregate {
      count
    }
  }
}
`;

export const GET_BRANDS = gql`
query getBrands {
  brands(order_by: {updated_at: desc}) {
    id
    title
    image_url
  }
}
`;

export const GET_SERVICE_TOKENS = gql`
query getServiceTokens($where: service_tokens_bool_exp!) {
  service_tokens(order_by: {created_at: desc}, where: $where) {
    id
    token_number
    description
    is_warranty_valid
    service_fee
    status
    created_at
  }
}
`;

export const GET_SERVICE_DETAIL = gql`
query getServiceDetail($serviceId: uuid!) {
  service_tokens_by_pk(id: $serviceId) {
    id
    product
    token_number
    service_fee
    status
    description
    is_warranty_valid
    created_at
    picking_up_at
    processing_at
    delivering_at
    completed_at
  }
}
`;


export const GET_INVOICES = gql`
query getInvoices($where: invoices_bool_exp) {
  invoices(order_by: {created_at: desc}, where: $where) {
    id
    invoice_number
    discount
    total
    status
    created_at
    balance
    order {
      order_number
    }
  }
}

`;


export const GET_INVOICE_DETAIL = gql`
query getInvoiceDetail($invoiceId: uuid!) {
  invoices_by_pk(id: $invoiceId) {
    id
    invoice_number
    discount
    total
    status
    note
    invoice_file_url
    created_at
    balance
    order {
      id
      order_number
      status
      total
      order_items {
        id
        quantity
        total
        unit_price
        product {
          id
          title
        }
      }
    }
  }
}
`;


export const GET_QUOTATIONS = gql`
query getQuotations($where: quotations_bool_exp) {
  quotations(order_by: {created_at: desc}, where: $where) {
    id
    status
    quotation_number
    quotation_file_url
    created_at
  }
}

`;


export const GET_FILTER_BRANDS = gql`
query getBrands($where: brands_bool_exp) {
  brands(
   where: $where,
   order_by: {updated_at: desc}
  ) {
    id
    title
    image_url
  }
}
`;


export const GET_FILTER_CATEGORIES = gql`
query getProductCategories($where: product_categories_bool_exp) {
  product_categories(
   where: $where,
   order_by: {updated_at: desc}
  ) {
    id
    title
    image_url
    created_at
  }
}
`;
