(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_d92ecb._.js", {

"[project]/src/graphql/mutations.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ACCEPT_SERVICE_TOKEN": ()=>ACCEPT_SERVICE_TOKEN,
    "ADD_ADMIN": ()=>ADD_ADMIN,
    "ADD_BRAND": ()=>ADD_BRAND,
    "ADD_CATEGORY": ()=>ADD_CATEGORY,
    "ADD_DEALERS": ()=>ADD_DEALERS,
    "ADD_DISCOUNT": ()=>ADD_DISCOUNT,
    "ADD_NEWS": ()=>ADD_NEWS,
    "ADD_NEWS_CAT": ()=>ADD_NEWS_CAT,
    "ADD_NEWS_PRODUCTS": ()=>ADD_NEWS_PRODUCTS,
    "ADD_PARYMENT": ()=>ADD_PARYMENT,
    "ADD_PRODUCT": ()=>ADD_PRODUCT,
    "ADD_SERVICE_CENTER": ()=>ADD_SERVICE_CENTER,
    "ADD_USER": ()=>ADD_USER,
    "ADMIN_SIGN_IN": ()=>ADMIN_SIGN_IN,
    "CHANGE_INVOICE_STATUS": ()=>CHANGE_INVOICE_STATUS,
    "CHANGE_ORDER_STATUS": ()=>CHANGE_ORDER_STATUS,
    "CHANGE_QUOTATION_STATUS": ()=>CHANGE_QUOTATION_STATUS,
    "CHANGE_SERVICE_STATUS": ()=>CHANGE_SERVICE_STATUS,
    "CHANGE_USER_ACTIVATE": ()=>CHANGE_USER_ACTIVATE,
    "CHANGE_USER_STATUS": ()=>CHANGE_USER_STATUS,
    "DELETE_ADMIN": ()=>DELETE_ADMIN,
    "DELETE_DEALER": ()=>DELETE_DEALER,
    "DELETE_INVOICE": ()=>DELETE_INVOICE,
    "DELETE_NEWS": ()=>DELETE_NEWS,
    "DELETE_NEW_CAT": ()=>DELETE_NEW_CAT,
    "DELETE_NEW_RELATED_PRODUCTS": ()=>DELETE_NEW_RELATED_PRODUCTS,
    "DELETE_ORDERS": ()=>DELETE_ORDERS,
    "DELETE_PRODUCT": ()=>DELETE_PRODUCT,
    "DELETE_PRODUCT_BRAND": ()=>DELETE_PRODUCT_BRAND,
    "DELETE_PRODUCT_CAT": ()=>DELETE_PRODUCT_CAT,
    "DELETE_PRODUCT_DISCOUNT": ()=>DELETE_PRODUCT_DISCOUNT,
    "DELETE_PRODUCT_IMAGE": ()=>DELETE_PRODUCT_IMAGE,
    "DELETE_SERVICE_CENTER": ()=>DELETE_SERVICE_CENTER,
    "EDIT_ADMIN": ()=>EDIT_ADMIN,
    "EDIT_BRAND": ()=>EDIT_BRAND,
    "EDIT_DISCOUNT": ()=>EDIT_DISCOUNT,
    "EDIT_NEWS": ()=>EDIT_NEWS,
    "EDIT_PRODUCT_CATEGORY": ()=>EDIT_PRODUCT_CATEGORY,
    "EDIT_RPODUCTS": ()=>EDIT_RPODUCTS,
    "EDIT_SERVICE_CENTER": ()=>EDIT_SERVICE_CENTER,
    "EDIt_NEWS_CAT": ()=>EDIt_NEWS_CAT,
    "IMGAE_UPLOAD": ()=>IMGAE_UPLOAD,
    "IS_WARRANTY_VALID": ()=>IS_WARRANTY_VALID,
    "ORDER_COMPLETE": ()=>ORDER_COMPLETE,
    "PRODUCT_IMAGE_UPLOAD": ()=>PRODUCT_IMAGE_UPLOAD,
    "REJECT_SERVICE_TOKEN": ()=>REJECT_SERVICE_TOKEN,
    "SEND_INVOICE_FILE": ()=>SEND_INVOICE_FILE,
    "SEND_QUOTATION_FILE": ()=>SEND_QUOTATION_FILE,
    "SEND_Q_INVOICE_FILE": ()=>SEND_Q_INVOICE_FILE
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.9.0/node_modules/graphql-tag/lib/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const ADMIN_SIGN_IN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`;
const ADD_CATEGORY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
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
`;
const ADD_BRAND = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
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
`;
const ADD_PRODUCT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addProduct(
    $title: String!
    $description_html: String!
    $brand_id: uuid!
    $category_id: uuid!
    $serial_number: String!
    $price: numeric!
    $product_medias: product_medias_arr_rel_insert_input!
  ) {
    insert_products_one(
      object: {
        title: $title
        description_html: $description_html
        brand_id: $brand_id
        category_id: $category_id
        serial_number: $serial_number
        price: $price
        product_medias: $product_medias
      }
    ) {
      id
    }
  }
`;
const EDIT_RPODUCTS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation editProduct(
    $id: uuid!
    $title: String!
    $description_html: String!
    $brand_id: uuid!
    $category_id: uuid!
    $serial_number: String!
    $price: numeric!
  ) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _set: {
        title: $title
        description_html: $description_html
        brand_id: $brand_id
        category_id: $category_id
        serial_number: $serial_number
        price: $price
      }
    ) {
      id
    }
  }
`;
const ADD_NEWS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addNews($data: news_insert_input!) {
    insert_news_one(object: $data) {
      id
      image_url
      body_html
      created_at
      news_category {
        title
        id
      }
      disabled
      news_category_id
      title
      updated_at
    }
  }
`;
const DELETE_PRODUCT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_PRODUCT_BRAND = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_PRODUCT_CAT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_NEW_CAT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`;
const ADD_NEWS_CAT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`;
const DELETE_NEWS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_INVOICE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteInvoice($id: uuid!) {
    delete_invoices_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_ORDERS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation aa($id: uuid!) {
    delete_orders_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_DEALER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteDealer($id: uuid!) {
    delete_dealers_by_pk(id: $id) {
      id
    }
  }
`;
const ADD_DEALERS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addDealer($data: dealers_insert_input!) {
    insert_dealers_one(object: $data) {
      id
    }
  }
`;
const ADD_NEWS_PRODUCTS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`;
const EDIT_NEWS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation editNewProducts($id: uuid!, $data: news_set_input!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      image_url
      body_html
      created_at
      news_category {
        title
        id
      }
      disabled
      news_category_id
      title
      updated_at
    }
  }
`;
const DELETE_NEW_RELATED_PRODUCTS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`;
const IMGAE_UPLOAD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`;
const CHANGE_ORDER_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`;
const CHANGE_SERVICE_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {
    updateServiceStatus(service_token_id: $service_token_id, status: $status) {
      message
    }
  }
`;
const ACCEPT_SERVICE_TOKEN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {
    acceptServiceToken(
      is_warranty_valid: $is_warranty_valid
      service_fee: $service_fee
      service_token_id: $service_token_id
    ) {
      message
    }
  }
`;
const REJECT_SERVICE_TOKEN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`;
const CHANGE_USER_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`;
const CHANGE_USER_ACTIVATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`;
const CHANGE_QUOTATION_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!, $rejected_reason: String) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`;
const CHANGE_INVOICE_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateInvoiceStatus($invoice_id: uuid!, $status: String!, $rejected_reason: String) {
    updateInvoiceStatus(invoice_id: $invoice_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`;
const SEND_QUOTATION_FILE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`;
const ADD_PARYMENT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addPayment($amount: numeric!, $invoice_id: uuid!, $payment_date: timestamp!, $payment_method: String!) {
    addInvoicePayment(
      amount: $amount
      invoice_id: $invoice_id
      payment_date: $payment_date
      payment_method: $payment_method
    ) {
      message
    }
  }
`;
const SEND_Q_INVOICE_FILE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation sendQInvoice($quotation_id: uuid!) {
    sendInvoice(quotation_id: $quotation_id) {
      message
    }
  }
`;
const SEND_INVOICE_FILE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`;
const DELETE_ADMIN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_SERVICE_CENTER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`;
const ADD_ADMIN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`;
const EDIT_ADMIN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {
    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      email
      role
    }
  }
`;
const ADD_USER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`;
const ADD_SERVICE_CENTER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addSeriveCenter($data: service_centers_insert_input!) {
    insert_service_centers_one(object: $data) {
      id
      name
      phone
      address
      created_at
      updated_at
    }
  }
`;
const IS_WARRANTY_VALID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`;
const EDIT_SERVICE_CENTER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      phone
      address
    }
  }
`;
const DELETE_PRODUCT_DISCOUNT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`;
const ORDER_COMPLETE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation orderComplete($id: uuid!, $completion_photo_url: String!, $remark: String!) {
    update_orders_by_pk(
      pk_columns: { id: $id }
      _set: { completion_photo_url: $completion_photo_url, remark: $remark }
    ) {
      id
      completion_photo_url
      remark
    }
  }
`;
const ADD_DISCOUNT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addDiscount($data: product_discounts_insert_input!) {
    insert_product_discounts_one(object: $data) {
      id
      min_order
      product_id
      discount_type
      discounted_value
      customer_type
      created_at
      updated_at
    }
  }
`;
const EDIT_DISCOUNT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateProductDiscount($id: uuid!, $data: product_discounts_set_input!) {
    update_product_discounts_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      min_order
      discount_type
      customer_type
      discounted_value
      created_at
      updated_at
    }
  }
`;
const EDIT_PRODUCT_CATEGORY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`;
const EDIT_BRAND = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`;
const EDIt_NEWS_CAT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`;
const PRODUCT_IMAGE_UPLOAD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation imageUpload($data: product_medias_insert_input!) {
    insert_product_medias_one(object: $data) {
      id
      product_id
      media_url
      media_type
    }
  }
`;
const DELETE_PRODUCT_IMAGE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteProductImage($id: uuid!) {
    delete_product_medias_by_pk(id: $id) {
      id
      media_url
      media_type
    }
  }
`;

})()),
"[project]/src/components/helper/Alert.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Snackbar/Snackbar.js [app-client] (ecmascript) <export default as Snackbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ApolloWrapper.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
const Alert = ()=>{
    _s();
    const { globalMsg, setGlobalMsg } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__["Snackbar"], {
            anchorOrigin: {
                horizontal: 'center',
                vertical: 'top'
            },
            open: Boolean(globalMsg),
            autoHideDuration: 3000,
            onClose: ()=>setGlobalMsg(null),
            message: globalMsg
        }, void 0, false, {
            fileName: "[project]/src/components/helper/Alert.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/helper/Alert.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_s(Alert, "BRiBwMbwGjABxf9mRxpRr6+T3yI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = Alert;
const __TURBOPACK__default__export__ = Alert;
var _c;
__turbopack_refresh__.register(_c, "Alert");

})()),
"[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$52$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-hook-form@7.52.1_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Drawer/Drawer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Chip/Chip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Divider/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/react/hooks/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ApolloWrapper.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$helper$2f$Alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/helper/Alert.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Vars
const initialData = {
    from: 'shelbyComapny@email.com',
    to: 'qConsolidated@email.com',
    subject: 'Invoice of purchased Admin Templates',
    message: `Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`
};
const SendNegotiationDrawer = ({ open, handleClose, quotationData })=>{
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [getFileUploadUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMGAE_UPLOAD"]);
    const [sendQuotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEND_QUOTATION_FILE"]);
    const { setGlobalMsg } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hooks
    const { control, reset: resetForm, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$52$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            title: '',
            description: ''
        }
    });
    // Handle Form Submit
    const handleFormSubmit = async (data)=>{
        try {
            const fileUploadUrl = await getFileUploadUrl({
                variables: {
                    content_type: 'pdf',
                    folder: 'quotations'
                }
            });
            const uploadedFileUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFile"])(file[0], fileUploadUrl.data.getFileUploadUrl.fileUploadUrl, 'image');
            const res = await sendQuotation({
                variables: {
                    quotation_id: quotationData.id,
                    quotation_file_url: uploadedFileUrl
                }
            });
            console.log('res ', res);
            setFile('');
            setGlobalMsg('✅ Send Quotation file suceessful');
        } catch (e) {
            setGlobalMsg('❌ Send file error');
        }
    };
    // Handle File Upload
    const handleFileUpload = (event)=>{
        const { files } = event.target;
        if (files && files.length !== 0) {
            setFile(files);
        }
    };
    const handleReset = ()=>{
        setFile('');
        handleClose();
    // setFormData(initialData)
    };
    const handleCloseDrawer = ()=>{
        handleClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            open: open,
            anchor: "right",
            variant: "temporary",
            onClose: handleReset,
            ModalProps: {
                keepMounted: true
            },
            sx: {
                '& .MuiDrawer-paper': {
                    width: {
                        xs: 300,
                        sm: 400
                    }
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pli-5 plb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variant: "h5",
                            children: "Send Quotation File"
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: "small",
                            onClick: handleCloseDrawer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "ri-close-line text-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit((data)=>handleFormSubmit(data)),
                        className: "flex flex-col gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        size: "small",
                                        placeholder: "No file chosen",
                                        variant: "outlined",
                                        value: file ? file[0].name : '',
                                        className: "flex-auto",
                                        InputProps: {
                                            readOnly: true,
                                            endAdornment: file ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                                position: "end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    size: "small",
                                                    edge: "end",
                                                    onClick: ()=>setFileName(''),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "ri-close-line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                                                        lineNumber: 125,
                                                        columnNumber: 25
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, void 0) : null
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        component: "label",
                                        variant: "outlined",
                                        htmlFor: "contained-button-file",
                                        className: "min-is-fit",
                                        children: [
                                            "Choose",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                hidden: true,
                                                id: "contained-button-file",
                                                type: "file",
                                                onChange: handleFileUpload,
                                                ref: fileInputRef
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "contained",
                                        type: "submit",
                                        children: "Add"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "outlined",
                                        color: "error",
                                        type: "reset",
                                        onClick: handleReset,
                                        children: "Discard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(SendNegotiationDrawer, "+aLF051NPKrLu2vgZ22yaXiwh8A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$52$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = SendNegotiationDrawer;
const __TURBOPACK__default__export__ = SendNegotiationDrawer;
var _c;
__turbopack_refresh__.register(_c, "SendNegotiationDrawer");

})()),
"[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$52$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-hook-form@7.52.1_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Drawer/Drawer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Chip/Chip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Divider/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/react/hooks/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ApolloWrapper.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Grid/Grid.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$helper$2f$Alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/helper/Alert.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Vars
const initialData = {
    from: 'shelbyComapny@email.com',
    to: 'qConsolidated@email.com',
    subject: 'Invoice of purchased Admin Templates',
    message: `Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`
};
const SendQInvoiceDrawer = ({ open, handleClose, quotationData })=>{
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [getFileUploadUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMGAE_UPLOAD"]);
    const [sendQInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEND_Q_INVOICE_FILE"]);
    const { setGlobalMsg } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hooks
    const { control, reset: resetForm, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$52$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            title: '',
            description: ''
        }
    });
    // Handle Form Submit
    const handleFormSubmit = async (data)=>{
        try {
            // const fileUploadUrl = await getFileUploadUrl({
            //   variables: {
            //     content_type: 'pdf',
            //     folder: 'quotations'
            //   }
            // })
            // const uploadedFileUrl = await uploadFile(file[0], fileUploadUrl.data.getFileUploadUrl.fileUploadUrl, 'image')
            const res = await sendQInvoice({
                variables: {
                    quotation_id: quotationData.id,
                    discounted_amount: data.price
                }
            });
            setGlobalMsg('✅ Send Quotation Invoice file suceessful');
        } catch (e) {
            setGlobalMsg('❌ Send file error');
        }
    };
    // Handle File Upload
    const handleFileUpload = (event)=>{
        const { files } = event.target;
        if (files && files.length !== 0) {
            setFile(files);
        }
    };
    const handleReset = ()=>{
        resetForm({
            price: ''
        });
        handleClose();
    // setFormData(initialData)
    };
    const handleCloseDrawer = ()=>{
        handleClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                anchor: "right",
                variant: "temporary",
                onClose: handleReset,
                ModalProps: {
                    keepMounted: true
                },
                sx: {
                    '& .MuiDrawer-paper': {
                        width: {
                            xs: 300,
                            sm: 400
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pli-5 plb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "h5",
                                children: "Send Invoice "
                            }, void 0, false, {
                                fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: "small",
                                onClick: handleCloseDrawer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ri-close-line text-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit((data)=>handleFormSubmit(data)),
                            className: "flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$52$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                    name: "price",
                                    control: control,
                                    rules: {
                                        required: true
                                    },
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            ...field,
                                            fullWidth: true,
                                            type: "number",
                                            label: "Amount",
                                            placeholder: "Enter discounted Amount",
                                            ...errors.price && {
                                                error: true,
                                                helperText: 'This field is required.'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "contained",
                                            type: "submit",
                                            children: "Send"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "outlined",
                                            color: "error",
                                            type: "reset",
                                            onClick: handleReset,
                                            children: "Discard"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$helper$2f$Alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(SendQInvoiceDrawer, "K6RpS7KHKbRZT+vb5Nh84ArJs6w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$52$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = SendQInvoiceDrawer;
const __TURBOPACK__default__export__ = SendQInvoiceDrawer;
var _c;
__turbopack_refresh__.register(_c, "SendQInvoiceDrawer");

})()),
"[project]/src/views/quotations/shared/SendQuotationDrawer.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ApolloWrapper.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/react/hooks/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Divider/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Drawer/Drawer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$52$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-hook-form@7.52.1_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$lab$40$5$2e$0$2e$0$2d$alpha$2e$172_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$st_gocggnyd3t4rtzbhqu23ohyol4$2f$node_modules$2f40$mui$2f$lab$2f$LoadingButton$2f$LoadingButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+lab@5.0.0-alpha.172_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+st_gocggnyd3t4rtzbhqu23ohyol4/node_modules/@mui/lab/LoadingButton/LoadingButton.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Vars
const initialData = {
    from: 'shelbyComapny@email.com',
    to: 'qConsolidated@email.com',
    subject: 'Invoice of purchased Admin Templates',
    message: `Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`
};
const SendQuotationDrawer = ({ open, handleClose, quotationData })=>{
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [getFileUploadUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMGAE_UPLOAD"]);
    const [sendQuotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEND_QUOTATION_FILE"]);
    const { setGlobalMsg, loading, setLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hooks
    const { control, reset: resetForm, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$52$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            title: '',
            description: ''
        }
    });
    // Handle Form Submit
    const handleFormSubmit = async (data)=>{
        try {
            setLoading(true);
            const fileUploadUrl = await getFileUploadUrl({
                variables: {
                    content_type: 'pdf',
                    folder: 'quotations'
                }
            });
            const uploadedFileUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFile"])(file[0], fileUploadUrl.data.getFileUploadUrl.fileUploadUrl, 'image');
            const res = await sendQuotation({
                variables: {
                    quotation_id: quotationData.id,
                    quotation_file_url: uploadedFileUrl
                }
            });
            setFile('');
            setGlobalMsg('✅ Send Quotation file suceessful');
            setLoading(false);
        } catch (e) {
            setGlobalMsg(`❌ ${e.message}`);
        }
    };
    // Handle File Upload
    const handleFileUpload = (event)=>{
        const { files } = event.target;
        if (files && files.length !== 0) {
            setFile(files);
        }
    };
    const handleReset = ()=>{
        setFile('');
        handleClose();
    // setFormData(initialData)
    };
    const handleCloseDrawer = ()=>{
        handleClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            open: open,
            anchor: "right",
            variant: "temporary",
            onClose: handleReset,
            ModalProps: {
                keepMounted: true
            },
            sx: {
                '& .MuiDrawer-paper': {
                    width: {
                        xs: 300,
                        sm: 400
                    }
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pli-5 plb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variant: "h5",
                            children: "Send Quotation File"
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: "small",
                            onClick: handleCloseDrawer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "ri-close-line text-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit((data)=>handleFormSubmit(data)),
                        className: "flex flex-col gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        size: "small",
                                        placeholder: "No file chosen",
                                        variant: "outlined",
                                        value: file ? file[0].name : '',
                                        className: "flex-auto",
                                        InputProps: {
                                            readOnly: true,
                                            endAdornment: file ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                                position: "end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    size: "small",
                                                    edge: "end",
                                                    onClick: ()=>setFileName(''),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "ri-close-line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                                                        lineNumber: 125,
                                                        columnNumber: 25
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, void 0) : null
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        component: "label",
                                        variant: "outlined",
                                        htmlFor: "contained-button-file",
                                        className: "min-is-fit",
                                        children: [
                                            "Choose",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                hidden: true,
                                                id: "contained-button-file",
                                                type: "file",
                                                onChange: handleFileUpload,
                                                ref: fileInputRef
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$lab$40$5$2e$0$2e$0$2d$alpha$2e$172_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$st_gocggnyd3t4rtzbhqu23ohyol4$2f$node_modules$2f40$mui$2f$lab$2f$LoadingButton$2f$LoadingButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "contained",
                                        type: "submit",
                                        children: "Add"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "outlined",
                                        color: "error",
                                        type: "reset",
                                        onClick: handleReset,
                                        children: "Discard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/quotations/shared/SendQuotationDrawer.jsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(SendQuotationDrawer, "7CZ8YflJV+HGkQpnfgpxaRcXsJA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$52$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = SendQuotationDrawer;
const __TURBOPACK__default__export__ = SendQuotationDrawer;
var _c;
__turbopack_refresh__.register(_c, "SendQuotationDrawer");

})()),
"[project]/src/views/quotations/preview/PreviewActions.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardContent/CardContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$quotations$2f$shared$2f$SendNegotiationDrawer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/quotations/shared/SendNegotiationDrawer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$quotations$2f$shared$2f$SendQInvoiceDrawer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/quotations/shared/SendQInvoiceDrawer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$quotations$2f$shared$2f$SendQuotationDrawer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/quotations/shared/SendQuotationDrawer.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
// Util Imports
const PreviewActions = ({ id, onButtonClick, quotationData })=>{
    _s();
    // States
    const [paymentDrawerOpen, setPaymentDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sendDrawerOpen, setSendDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sendNegoOpen, setSendNegoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sendQInvoiceDrawerOpen, setSendQInvoiceDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Hooks
    const { lang: locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (quotationData?.status === 'negotiation' || quotationData?.status === 'accepted') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "flex flex-col gap-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fullWidth: true,
                        color: "success",
                        variant: "contained",
                        className: "capitalize",
                        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "ri-send-plane-line"
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/preview/PreviewActions.jsx",
                            lineNumber: 40,
                            columnNumber: 26
                        }, void 0),
                        onClick: ()=>setSendDrawerOpen(true),
                        children: "Send Quotation File"
                    }, void 0, false, {
                        fileName: "[project]/src/views/quotations/preview/PreviewActions.jsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/quotations/preview/PreviewActions.jsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/quotations/preview/PreviewActions.jsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$quotations$2f$shared$2f$SendQuotationDrawer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: sendDrawerOpen,
                handleClose: ()=>setSendDrawerOpen(false),
                quotationData: quotationData
            }, void 0, false, {
                fileName: "[project]/src/views/quotations/preview/PreviewActions.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$quotations$2f$shared$2f$SendQInvoiceDrawer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: sendQInvoiceDrawerOpen,
                handleClose: ()=>setSendQInvoiceDrawerOpen(false),
                quotationData: quotationData
            }, void 0, false, {
                fileName: "[project]/src/views/quotations/preview/PreviewActions.jsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$quotations$2f$shared$2f$SendNegotiationDrawer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: sendNegoOpen,
                handleClose: ()=>setSendNegoOpen(false),
                quotationData: quotationData
            }, void 0, false, {
                fileName: "[project]/src/views/quotations/preview/PreviewActions.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(PreviewActions, "rEiYR5CvUcOekJv2QEWxbw6y+Ts=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = PreviewActions;
const __TURBOPACK__default__export__ = PreviewActions;
var _c;
__turbopack_refresh__.register(_c, "PreviewActions");

})()),
"[project]/src/@core/styles/table.module.css [app-client] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "cellWithInput": "table-module__Mig-TG__cellWithInput",
  "table": "table-module__Mig-TG__table",
});

})()),
"[project]/src/components/helper/StatusColor.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "invoiceStatusColor": ()=>invoiceStatusColor,
    "orderStatusColor": ()=>orderStatusColor,
    "quotationstatusChipColor": ()=>quotationstatusChipColor,
    "serviceStatusChipColor": ()=>serviceStatusChipColor,
    "userStatusObj": ()=>userStatusObj
});
const serviceStatusChipColor = {
    completed: 'success',
    rejected: 'error',
    'received token': 'info',
    'picking up': 'primary',
    processing: 'warning',
    delivering: 'secondary'
};
const quotationstatusChipColor = {
    pending: 'warning',
    completed: 'success',
    accepted: 'info',
    rejected: 'error'
};
const orderStatusColor = {
    delivering: 'secondary',
    completed: 'success',
    ordered: 'info',
    preparing: 'primary',
    refunded: 'warning',
    canceled: 'error'
};
const invoiceStatusColor = {
    paid: 'secondary',
    'partially paid': 'info',
    rejected: 'error',
    unpaid: 'primary',
    pending: 'warning'
};
const userStatusObj = {
    verified: 'success',
    pending: 'warning',
    unverified: 'primary',
    disable: 'error'
};

})()),
"[project]/src/views/quotations/preview/PreviewCard.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "statusChipColor": ()=>statusChipColor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardContent/CardContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Grid/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Divider/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$shared$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/layout/shared/Logo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$styles$2f$table$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/@core/styles/table.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/react/hooks/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/queries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$helper$2f$StatusColor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/helper/StatusColor.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const statusChipColor = {
    pending: 'warning',
    completed: 'success',
    accepted: 'info',
    rejected: 'error',
    negotiation: 'primary'
};
const PreviewCard = ({ quotationData })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "previewCard",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "sm:!p-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                container: true,
                spacing: 6,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 bg-actionHover rounded",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between gap-y-4 flex-col sm:flex-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$shared$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                    lineNumber: 39,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                lineNumber: 38,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        color: "text.primary",
                                                        children: "No. 297, Marlar Myaing Street,"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                        lineNumber: 42,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        color: "text.primary",
                                                        children: "Tharkayta Industrial Zone,"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                        lineNumber: 43,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        color: "text.primary",
                                                        children: "Yangon, Myanmar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                        lineNumber: 44,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        color: "text.primary",
                                                        children: "09- 428 694 996 09- 762 509 157"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                        lineNumber: 45,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        variant: "h5",
                                                        children: `Quotation`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                        lineNumber: 61,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                        label: quotationData?.status,
                                                        //  color={statusChipColor[quotationData.status]}
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$helper$2f$StatusColor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quotationstatusChipColor"][quotationData.status],
                                                        style: {
                                                            textTransform: 'capitalize'
                                                        },
                                                        variant: "tonal",
                                                        size: "small"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                        lineNumber: 62,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                lineNumber: 60,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        color: "text.primary",
                                                        children: [
                                                            "Quotation Number : ",
                                                            quotationData?.quotation_number
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                        lineNumber: 72,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        color: "text.primary",
                                                        children: [
                                                            "Due Date : ",
                                                            new Date(quotationData?.updated_at).toLocaleDateString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                        lineNumber: 73,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            container: true,
                            spacing: 6,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                item: true,
                                xs: 12,
                                sm: 6,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "font-medium",
                                            color: "text.primary",
                                            children: "Delivery Address To:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: quotationData?.user?.orders[0]?.receiver_name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "my-1",
                                                    children: quotationData?.user.orders[0]?.receiver_phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: quotationData?.user.orders[0]?.receiver_address
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                    lineNumber: 91,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto border rounded",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$styles$2f$table$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-be",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "!bg-transparent",
                                                    children: "Product"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "!bg-transparent",
                                                    children: "Brand"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "!bg-transparent",
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "!bg-transparent",
                                                    children: "Qty"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: quotationData?.quotation_items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            color: "text.primary",
                                                            className: "w-60 text-wrap",
                                                            children: item.product.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            color: "text.primary",
                                                            children: item.product.brand.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                            lineNumber: 148,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                        lineNumber: 147,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            color: "text.primary",
                                                            children: item.product.price
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                            lineNumber: 151,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                        lineNumber: 150,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            color: "text.primary",
                                                            children: item.quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                            lineNumber: 154,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                                lineNumber: 140,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end flex-col gap-y-4 sm:flex-row"
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "border-dashed"
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    component: "span",
                                    className: "font-medium",
                                    color: "text.primary",
                                    children: [
                                        "Dealer Remark :",
                                        ' '
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this),
                                quotationData.dealer_remark ? quotationData.dealer_remark : ' - '
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/quotations/preview/PreviewCard.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
_c = PreviewCard;
const __TURBOPACK__default__export__ = PreviewCard;
var _c;
__turbopack_refresh__.register(_c, "PreviewCard");

})()),
"[project]/src/views/quotations/preview/QuotationStatus.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ApolloWrapper.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$helper$2f$Alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/helper/Alert.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/queries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/react/hooks/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
const QuotationStatus = ({ quotationData })=>{
    _s();
    const { setGlobalMsg } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const [rejectServicerOpen, setRejectServicerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [changeQuotationStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANGE_QUOTATION_STATUS"], {
        refetchQueries: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUOTATION_BY_ID"]
        ]
    });
    const [sendQInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEND_Q_INVOICE_FILE"], {
        refetchQueries: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUOTATION_BY_ID"]
        ]
    });
    const handleChangeOrderStatus = async (id, status)=>{
        try {
            const result = await changeQuotationStatus({
                variables: {
                    quotation_id: id,
                    status: status
                }
            });
            setGlobalMsg('✅ Change Quotation Status');
        } catch (e) {
            console.log('Change Status Error ', e);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    variant: "outlined",
                    color: "primary",
                    size: "large",
                    fullWidth: true,
                    onClick: ()=>handleChangeOrderStatus(quotationData?.id, 'negotiation'),
                    children: "Negotiate"
                }, void 0, false, {
                    fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex  justify-center gap-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "outlined",
                        color: "info",
                        size: "large",
                        // onClick={() => handleChangeOrderStatus(quotationData?.id, 'accepted')}
                        onClick: async ()=>{
                            await sendQInvoice({
                                variables: {
                                    quotation_id: quotationData.id
                                }
                            });
                            setGlobalMsg('✅ Quotation Accepted');
                        },
                        children: "Accepted"
                    }, void 0, false, {
                        fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "outlined",
                        className: "text-error",
                        onClick: ()=>{
                            setRejectServicerOpen(true);
                        },
                        children: "Reject"
                    }, void 0, false, {
                        fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                    fullWidth: "md",
                    open: rejectServicerOpen,
                    onClose: ()=>setRejectServicerOpen(false),
                    PaperProps: {
                        component: 'form',
                        onSubmit: async (event)=>{
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries(formData.entries());
                            const reasons = formJson.rejected_reason;
                            await changeQuotationStatus({
                                variables: {
                                    quotation_id: quotationData?.id,
                                    status: 'rejected',
                                    rejected_reason: reasons
                                }
                            });
                            setGlobalMsg('✅ Reject reason send successfull');
                            setRejectServicerOpen(false);
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                            children: "Reject Reason"
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                multiline: true,
                                autoFocus: true,
                                margin: "dense",
                                id: "rejected_reason",
                                name: "rejected_reason",
                                label: "Reason",
                                fullWidth: true,
                                variant: "standard"
                            }, void 0, false, {
                                fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    color: "error",
                                    onClick: ()=>setRejectServicerOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    color: "success",
                                    type: "submit",
                                    children: "OK"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$helper$2f$Alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/quotations/preview/QuotationStatus.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
_s(QuotationStatus, "7zb44NvO2YRIZfLlMtM8TdoPCe0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = QuotationStatus;
const __TURBOPACK__default__export__ = QuotationStatus;
var _c;
__turbopack_refresh__.register(_c, "QuotationStatus");

})()),
"[project]/src/views/quotations/preview/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Grid/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$quotations$2f$preview$2f$PreviewActions$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/quotations/preview/PreviewActions.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$quotations$2f$preview$2f$PreviewCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/quotations/preview/PreviewCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$quotations$2f$preview$2f$QuotationStatus$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/quotations/preview/QuotationStatus.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/queries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/react/hooks/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSuspenseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/react/hooks/useSuspenseQuery.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
const Preview = ()=>{
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { data: quotationData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSuspenseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSuspenseQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUOTATION_BY_ID"], {
        variables: {
            id: id
        }
    });
    // Handle Print Button Click
    const handleButtonClick = ()=>{
        window.print();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            container: true,
            spacing: 6,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    item: true,
                    xs: 12,
                    md: 9,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$quotations$2f$preview$2f$PreviewCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        quotationData: quotationData?.quotations_by_pk
                    }, void 0, false, {
                        fileName: "[project]/src/views/quotations/preview/index.jsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/quotations/preview/index.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    item: true,
                    xs: 12,
                    md: 3,
                    className: "flex flex-col gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$quotations$2f$preview$2f$QuotationStatus$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            quotationData: quotationData?.quotations_by_pk
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/preview/index.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$quotations$2f$preview$2f$PreviewActions$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onButtonClick: handleButtonClick,
                            quotationData: quotationData?.quotations_by_pk
                        }, void 0, false, {
                            fileName: "[project]/src/views/quotations/preview/index.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/quotations/preview/index.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/quotations/preview/index.jsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(Preview, "L7nBshMtZDWUH9ZO+hVA1AZ2KSE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSuspenseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSuspenseQuery"]
    ];
});
_c = Preview;
const __TURBOPACK__default__export__ = Preview;
var _c;
__turbopack_refresh__.register(_c, "Preview");

})()),
"[project]/src/app/[lang]/(dashboard)/quotations/preview/[id]/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_d92ecb._.js.map