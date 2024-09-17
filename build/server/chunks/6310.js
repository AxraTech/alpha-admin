"use strict";exports.id=6310,exports.ids=[6310],exports.modules={66310:(e,t,r)=>{var a=r(16493);(0,a.Ps)`
fragment productBaseFields on products {
  id
  title
  price
  product_medias(order_by: {updated_at: desc}, limit: 1) {
    id
    media_url
  }
  product_discounts(limit: 1, order_by: {discounted_value: desc}) {
    id
    discount_type
    discounted_value
  }
}
`,(0,a.Ps)`
  query getUsers {
    users {
      id
      name
      phone
      profile_picture_url
      role
      status
      email
      delivery_name
      delivery_phone
      delivery_address
      created_at
      updated_at
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
  query getProductCategories {
    product_categories(order_by: { updated_at: desc }) {
      id
      title
      image_url
      created_at
      updated_at
      products_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`,(0,a.Ps)`
  query getProducts {
    products(order_by: { updated_at: desc }) {
      id
      title
      created_at
      updated_at
      description_html
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
`,(0,a.Ps)`
  query productById($id: uuid!) {
    products_by_pk(id: $id) {
      id
      title
      serial_number
      description_html
      product_medias {
        id
        media_url
      }
      product_category {
        id
        title
        image_url
      }
      product_discounts {
        id
        min_order
        discounted_value
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
`,(0,a.Ps)`
  query productBrand {
    brands {
      id
      title
    }
  }
`,(0,a.Ps)`
  query productCat {
    product_categories {
      id
      title
    }
  }
`,(0,a.Ps)`
  query brands {
    brands(order_by: { updated_at: desc }) {
      id
      title
      image_url
      created_at
      updated_at
      products_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`,(0,a.Ps)`
  query newCategorys {
    news_categories {
      id
      title
      created_at
      updated_at
      news_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`,(0,a.Ps)`
  query newCatById($id: uuid!) {
    news_categories_by_pk(id: $id) {
      id
      title
    }
  }
`,(0,a.Ps)`
  query news {
    news(order_by: { updated_at: desc }) {
      id
      title
      body_html
      image_url
      disabled
      updated_at
      created_at
      news_category_id
      news_category {
        id
        title
      }
    }
  }
`,(0,a.Ps)`
  query newId($id: uuid!) {
    news_by_pk(id: $id) {
      id
      title
      image_url
      news_category {
        id
        title
      }
      news_related_products {
        product {
          id
        }
      }
    }
  }
`,(0,a.Ps)`
  query newCats {
    news_categories {
      id
      title
    }
  }
`,(0,a.Ps)`
  query getAllInvoices {
    invoices(order_by: { updated_at: desc }) {
      id
      invoice_number
      status
      balance
      created_at
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
  query invoiceStatus {
    invoice_status {
      id
      name
    }
  }
`,(0,a.Ps)`
  query invoiceById($id: uuid!) {
    invoices_by_pk(id: $id) {
      id
      balance
      invoice_number
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
        receiver_name
        receiver_phone
        receiver_address
      }
    }
  }
`,(0,a.Ps)`
  query payments($invoice_id: uuid!) {
    payments(where: { invoice_id: { _eq: $invoice_id } }) {
      id
      amount
      payment_date
      payment_method
      updated_at
      created_at
      invoice_id
    }
  }
`,(0,a.Ps)`
  query newProduct($news_id: uuid!) {
    news_related_products(where: { news_id: { _eq: $news_id } }) {
      id
      news_id
      product_id
    }
  }
`,(0,a.Ps)`
  query productSelect {
    products {
      id
      title
    }
  }
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
  query aa {
    quotation_status {
      id
      name
    }
  }
`,(0,a.Ps)`
  query quotationById($id: uuid!) {
    quotations_by_pk(id: $id) {
      id
      created_at
      updated_at
      dealer_remark
      total_amount
      quotation_number
      status
      user {
        id
        name
        phone
        orders {
          receiver_address
          receiver_name
          receiver_phone
        }
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
      received_at
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
`,(0,a.Ps)`
  query OrderStatus {
    order_status {
      id
      name
    }
  }
`,(0,a.Ps)`
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
      order_items {
        quantity
        product {
          price
          title
          brand {
            title
          }
          product_category {
            title
          }
        }
      }
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
`,(0,a.Ps)`
  query orderTabs($user_id: uuid!) {
    orders(where: { user_id: { _eq: $user_id } }) {
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
  query admins {
    admins(order_by: { updated_at: desc }) {
      id
      name
      email
      role
      password
      created_at
      updated_at
    }
  }
`,(0,a.Ps)`
  query userRoles {
    user_roles {
      id
      role_name
    }
  }
`,(0,a.Ps)`
  query paymentMethods {
    payment_methods {
      id
      name
    }
  }
`,(0,a.Ps)`
  query adminById($id: uuid!) {
    admins_by_pk(id: $id) {
      id
      name
    }
  }
`,(0,a.Ps)`
  query adminRoles {
    admin_roles {
      id
      role_name
    }
  }
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
  query userServiceAggregate {
    users_aggregate(where: { service_tokens: { id: { _is_null: false } } }) {
      aggregate {
        count
      }
    }
  }
`,(0,a.Ps)`
  query userServiceAggregate {
    users_aggregate(where: { invoices: { id: { _is_null: false } } }) {
      aggregate {
        count
      }
    }
  }
`,(0,a.Ps)`
  query userServiceAggregate {
    users_aggregate(where: { quotations: { id: { _is_null: false } } }) {
      aggregate {
        count
      }
    }
  }
`,(0,a.Ps)`
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
`,(0,a.Ps)`
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
`,(0,a.Ps)`
  query serviceStatus {
    service_status {
      id
      name
    }
  }
`,(0,a.Ps)`
  query produtDiscount($product_id: uuid!) {
    product_discounts(order_by: { updated_at: desc }, where: { product_id: { _eq: $product_id } }) {
      id
      customer_type
      product_id
      discount_type
      created_at
      updated_at
      discounted_value
      min_order
      product {
        title
        brand {
          id
          title
        }
      }
    }
  }
`,(0,a.Ps)`
  query productDiscountById($id: uuid!) {
    product_discounts_by_pk(id: $id) {
      id
      customer_type
      discount_type
      created_at
      updated_at
      discounted_value

      min_order
      user_role {
        role_name
      }
      product {
        brand {
          id
          title
        }
      }
    }
  }
`}};