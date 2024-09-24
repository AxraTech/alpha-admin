exports.id=1894,exports.ids=[1894],exports.modules={36839:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var d=i(27486),a=i(618);let r=e=>{let{element:t,dialog:i,elementProps:r,dialogProps:s,dataId:n,setData:o,data:u}=e,[_,c]=(0,a.useState)(!1),{onClick:l,...m}=r;return(0,d.jsxs)(d.Fragment,{children:[d.jsx(t,{onClick:e=>{l&&l(e),c(!0)},...m}),d.jsx(i,{open:_,setOpen:c,...s,dataId:n,setData:o,data:u})]})}},5632:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var d=i(27486),a=i(618),r=i(19412),s=i(56239),n=i(53544),o=i(72660),u=i(12964);i(19396);var _=i(83398),c=i(66718),l=i(46811),m=i(25009);let p=({open:e,setOpen:t,type:i,dataId:p,data:$,setData:y})=>{let{userId:g}=(0,l.useParams)(),[b]=(0,_.D)(c.HT),[v]=(0,_.D)(c.SZ,{refetchQueries:[m.L5]}),[w]=(0,_.D)(c.z7,{refetchQueries:[m.L5]}),[P]=(0,_.D)(c.aY),[S]=(0,_.D)(c.Ff),[k]=(0,_.D)(c.ju),[h]=(0,_.D)(c.oe),[f]=(0,_.D)(c.DR),[j]=(0,_.D)(c.Qm),[x,C]=(0,a.useState)(!1),[D,N]=(0,a.useState)(!1),Z="disable-account"===i?"div":a.Fragment,U=async e=>{if(!0===e)try{"disable-account"===i&&await v({variables:{id:g,data:{status:"disable"}}}),"enable-account"===i&&await v({variables:{id:g,data:{status:"verified"}}}),"verified-account"===i&&await w({variables:{user_id:g,is_verified:!0}}),"unverified-account"===i&&await w({variables:{user_id:g,is_verified:!1}}),"deleteProductCategory"===i&&(await P({variables:{id:p}}),y($.filter(e=>e.id!==p))),"deleteProductBrand"===i&&(await S({variables:{id:p}}),y($.filter(e=>e.id!==p))),"deletePost"===i&&(await k({variables:{id:p}}),y($.filter(e=>e.id!==p))),"deleteNewCategory"===i&&(await h({variables:{id:p}}),y($.filter(e=>e.id!==p))),"deleteServiceCenter"===i&&(await f({variables:{id:p}}),y($.filter(e=>e.id!==p))),"deleteProductDiscount"===i&&(await j({variables:{id:p}}),y($.filter(e=>e.id!==p))),N(e),t(!1)}catch(e){console.log("Error",e)}else t(!1);N(e),C(!0),t(!1)};return d.jsx(d.Fragment,{children:(0,d.jsxs)(r.Z,{fullWidth:!0,maxWidth:"xs",open:e,onClose:()=>t(!1),children:[(0,d.jsxs)(s.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[d.jsx("i",{className:"ri-error-warning-line text-[88px] mbe-6 text-warning"}),(0,d.jsxs)(Z,{..."disable-account"===i&&{className:"flex flex-col items-center gap-2"},children:[(0,d.jsxs)(o.Z,{variant:"h4",children:["unsubscribe"===i&&"Are you sure to cancel your subscription?","disable-account"===i&&"Are you sure?","delete-order"===i&&"Are you sure?","delete-customer"===i&&"Are you sure?"]}),"verified-account"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to verify your account?"}),"unverified-account"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to unverify your account?"}),"disable-account"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to disalbe user!"}),"enable-account"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to enable user!"}),"deleteProductCategory"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductDiscount"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteServiceCenter"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductBrand"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deletePost"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteNewCategory"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"})]})]}),(0,d.jsxs)(n.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:[d.jsx(u.Z,{variant:"contained",onClick:()=>U(!0),children:"disable-account"===i?"Yes, Disabel User!":"enable-account"===i?"Yes, Enable User!":"deleteProductCategory"===i?"Yes, Delete Category!":"deleteProductBrand"===i?"Yes, Delete Brand":"delete-customer"===i?"Yes, Delete Customer!":"verified-account"===i?"Yes , User Verify":"unverified-account"===i?"Yes, User Unverify":"deletePost"===i?"Yes, Delete Post":"deleteNewCategory"===i?"Yes, Delete Category":"deleteServiceCenter"===i?"Yes, Delete Service Center":"deleteProductDiscount"===i?"Yes, Delete Product Discount":"Yes"}),d.jsx(u.Z,{variant:"outlined",color:"secondary",onClick:()=>{U(!1)},children:"Cancel"})]})]})})}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>D,DR:()=>q,Ff:()=>c,HT:()=>y,Hd:()=>g,J2:()=>M,J9:()=>o,JB:()=>Y,KN:()=>Z,Lh:()=>L,MP:()=>s,MZ:()=>A,O7:()=>Q,Qm:()=>z,SB:()=>p,SZ:()=>f,Sf:()=>w,Si:()=>J,Zq:()=>C,aY:()=>l,bc:()=>H,dE:()=>b,dn:()=>W,en:()=>F,hB:()=>a,he:()=>T,hq:()=>r,jN:()=>I,ju:()=>$,mU:()=>h,mt:()=>E,oe:()=>m,pE:()=>O,rV:()=>B,si:()=>R,tC:()=>N,tt:()=>P,tz:()=>k,u7:()=>_,ui:()=>V,uv:()=>u,vl:()=>U,wU:()=>S,yG:()=>x,yn:()=>v,z7:()=>j,zN:()=>n});var d=i(12738);let a=(0,d.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,r=(0,d.Ps)`
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
`,s=(0,d.Ps)`
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
`,n=(0,d.Ps)`
  mutation addProduct(
    $title: String!
    $description_html: String!
    $brand_id: uuid!
    $category_id: uuid!
    $serial_number: String!
    $price: numeric!
    $warranty_period: String
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
        warranty_period: $warranty_period
        product_medias: $product_medias
      }
    ) {
      id
      title
      price
      created_at
      description_html
      serial_number
      warranty_period
      product_medias {
        media_url
        media_type
      }
      brand {
        title
      }
    }
  }
`,o=(0,d.Ps)`
  mutation editProduct(
    $id: uuid!
    $title: String!
    $description_html: String!
    $brand_id: uuid!
    $category_id: uuid!
    $serial_number: String
    $price: numeric!
    $warranty_period: String
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
        warranty_period: $warranty_period
      }
    ) {
      id
      title
      price
      created_at
      description_html
      serial_number
      warranty_period
      product_medias {
        media_url
        media_type
      }
      brand {
        title
      }
    }
  }
`,u=(0,d.Ps)`
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
`,_=(0,d.Ps)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`,c=(0,d.Ps)`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`,l=(0,d.Ps)`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`,m=(0,d.Ps)`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`,p=(0,d.Ps)`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`,$=(0,d.Ps)`
  mutation deleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
    }
  }
`;(0,d.Ps)`
  mutation deleteInvoice($id: uuid!) {
    delete_invoices_by_pk(id: $id) {
      id
    }
  }
`;let y=(0,d.Ps)`
  mutation aa($id: uuid!) {
    delete_orders_by_pk(id: $id) {
      id
    }
  }
`;(0,d.Ps)`
  mutation deleteDealer($id: uuid!) {
    delete_dealers_by_pk(id: $id) {
      id
    }
  }
`,(0,d.Ps)`
  mutation addDealer($data: dealers_insert_input!) {
    insert_dealers_one(object: $data) {
      id
    }
  }
`;let g=(0,d.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,b=(0,d.Ps)`
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
`,v=(0,d.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,w=(0,d.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,P=(0,d.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,S=(0,d.Ps)`
  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {
    updateServiceStatus(service_token_id: $service_token_id, status: $status) {
      message
    }
  }
`,k=(0,d.Ps)`
  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {
    acceptServiceToken(
      is_warranty_valid: $is_warranty_valid
      service_fee: $service_fee
      service_token_id: $service_token_id
    ) {
      message
    }
  }
`,h=(0,d.Ps)`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`,f=(0,d.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,j=(0,d.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,x=(0,d.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!, $rejected_reason: String) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,C=(0,d.Ps)`
  mutation updateInvoiceStatus($invoice_id: uuid!, $status: String!, $rejected_reason: String) {
    updateInvoiceStatus(invoice_id: $invoice_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,D=(0,d.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,N=(0,d.Ps)`
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
`,Z=(0,d.Ps)`
  mutation sendQInvoice($quotation_id: uuid!) {
    sendInvoice(quotation_id: $quotation_id) {
      message
    }
  }
`,U=(0,d.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,A=(0,d.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,q=(0,d.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,Y=(0,d.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,B=(0,d.Ps)`
  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {
    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      email
      role
    }
  }
`,I=(0,d.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,Q=(0,d.Ps)`
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
`,F=(0,d.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,T=(0,d.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      phone
      address
    }
  }
`,z=(0,d.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,E=(0,d.Ps)`
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
`,L=(0,d.Ps)`
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
`,W=(0,d.Ps)`
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
`,H=(0,d.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,J=(0,d.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,M=(0,d.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`,O=(0,d.Ps)`
  mutation imageUpload($data: product_medias_insert_input!) {
    insert_product_medias_one(object: $data) {
      id
      product_id
      media_url
      media_type
    }
  }
`,R=(0,d.Ps)`
  mutation deleteProductImage($id: uuid!) {
    delete_product_medias_by_pk(id: $id) {
      id
      media_url
      media_type
    }
  }
`,V=(0,d.Ps)`
  mutation resetUserPassword($user_id: uuid!, $confirmNewPassword: String!, $newPassword: String!) {
    UpdateUserPassword(confirmNewPassword: $confirmNewPassword, user_id: $user_id, newPassword: $newPassword) {
      message
    }
  }
`},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}};