exports.id=9345,exports.ids=[9345],exports.modules={4099:(e,t,i)=>{"use strict";i.d(t,{default:()=>r});var d=i(10326),a=i(17577);let r=e=>{let{element:t,dialog:i,elementProps:r,dialogProps:s,dataId:n,setData:o,data:u}=e,[c,l]=(0,a.useState)(!1),{onClick:_,...m}=r;return(0,d.jsxs)(d.Fragment,{children:[d.jsx(t,{onClick:e=>{_&&_(e),l(!0)},...m}),d.jsx(i,{open:c,setOpen:l,...s,dataId:n,setData:o,data:u})]})}},92474:(e,t,i)=>{"use strict";i.d(t,{Z:()=>y});var d=i(10326),a=i(17577),r=i(69995),s=i(28591),n=i(10163),o=i(25609),u=i(87700),c=i(48029),l=i.n(c),_=i(18753),m=i(24443),p=i(35047),$=i(29084);let y=({open:e,setOpen:t,type:i,dataId:c,data:y,setData:g})=>{let{userId:b}=(0,p.useParams)(),[v]=(0,_.D)(m.HT),[P]=(0,_.D)(m.SZ,{refetchQueries:[$.L5]}),[f]=(0,_.D)(m.z7,{refetchQueries:[$.L5]}),[S]=(0,_.D)(m.aY),[h]=(0,_.D)(m.Ff),[w]=(0,_.D)(m.ju),[x]=(0,_.D)(m.oe),[C]=(0,_.D)(m.DR),[k]=(0,_.D)(m.Qm),[j,D]=(0,a.useState)(!1),[N,Z]=(0,a.useState)(!1),U="disable-account"===i?"div":a.Fragment,Y=()=>{D(!1),t(!1)},A=async e=>{if(!0===e)try{"disable-account"===i&&await P({variables:{id:b,data:{status:"disable"}}}),"enable-account"===i&&await P({variables:{id:b,data:{status:"verified"}}}),"verified-account"===i&&await f({variables:{user_id:b,is_verified:!0}}),"unverified-account"===i&&await f({variables:{user_id:b,is_verified:!1}}),"deleteProductCategory"===i&&(await S({variables:{id:c}}),g(y.filter(e=>e.id!==c))),"deleteProductBrand"===i&&(await h({variables:{id:c}}),g(y.filter(e=>e.id!==c))),"deletePost"===i&&(await w({variables:{id:c}}),g(y.filter(e=>e.id!==c))),"deleteNewCategory"===i&&(await x({variables:{id:c}}),g(y.filter(e=>e.id!==c))),"deleteServiceCenter"===i&&(await C({variables:{id:c}}),g(y.filter(e=>e.id!==c))),"deleteProductDiscount"===i&&(await k({variables:{id:c}}),g(y.filter(e=>e.id!==c))),Z(e),t(!1)}catch(e){console.log("Error",e)}else t(!1);Z(e),D(!0),t(!1)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.Z,{fullWidth:!0,maxWidth:"xs",open:e,onClose:()=>t(!1),children:[(0,d.jsxs)(s.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[d.jsx("i",{className:"ri-error-warning-line text-[88px] mbe-6 text-warning"}),(0,d.jsxs)(U,{..."disable-account"===i&&{className:"flex flex-col items-center gap-2"},children:[(0,d.jsxs)(o.Z,{variant:"h4",children:["unsubscribe"===i&&"Are you sure to cancel your subscription?","disable-account"===i&&"Are you sure?","delete-order"===i&&"Are you sure?","delete-customer"===i&&"Are you sure?"]}),"verified-account"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to verify your account?"}),"unverified-account"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to unverify your account?"}),"disable-account"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to disalbe user!"}),"enable-account"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to enable user!"}),"deleteProductCategory"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductDiscount"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteServiceCenter"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductBrand"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deletePost"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteNewCategory"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"})]})]}),(0,d.jsxs)(n.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:[d.jsx(u.Z,{variant:"contained",onClick:()=>A(!0),children:"disable-account"===i?"Yes, Disabel User!":"enable-account"===i?"Yes, Enable User!":"deleteProductCategory"===i?"Yes, Delete Category!":"deleteProductBrand"===i?"Yes, Delete Brand":"delete-customer"===i?"Yes, Delete Customer!":"verified-account"===i?"Yes , User Verify":"unverified-account"===i?"Yes, User Unverify":"deletePost"===i?"Yes, Delete Post":"deleteNewCategory"===i?"Yes, Delete Category":"deleteServiceCenter"===i?"Yes, Delete Service Center":"deleteProductDiscount"===i?"Yes, Delete Product Discount":"Yes"}),d.jsx(u.Z,{variant:"outlined",color:"secondary",onClick:()=>{A(!1)},children:"Cancel"})]})]}),(0,d.jsxs)(r.Z,{open:j,onClose:Y,children:[(0,d.jsxs)(s.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[d.jsx("i",{className:l()("text-[88px] mbe-6",{"ri-checkbox-circle-line":N,"text-success":N,"ri-close-circle-line":!N,"text-error":!N})}),d.jsx(o.Z,{variant:"h4",className:"mbe-2",children:N?`${"disable-account"===i?"User Disabled":"enable-account"===i?"User Enabled":"verified-account"===i?"User Verified":"deleteProductCategory"===i?"Delete Category":"unverified"===i?"User Unverified":"deleteProductBrand"===i?"Delete Brand":"deletePost"===i?"Delete Post":"deleteNewCategory"===i?"Delete New Category":"deleteServiceCenter"===i?"Delete Service Center":"deleteProductDiscount"===i?"Delete Product Discount":"yes"}`:"Cancelled"}),d.jsx(o.Z,{color:"text.primary",children:N?(0,d.jsxs)(d.Fragment,{children:["verified-account"===i&&"Your account has been verified successfully.","unverified-account"===i&&"Your account has been unverified successfully.","disable-account"===i&&"User has been disabled.","enable-account"===i&&"User has been enabled.","deleteProductCategory"===i&&"Your Category has been deleted successfully.","deleteServiceCenter"===i&&"Your Service Center has been deleted successfully.","deleteNewCategory"===i&&"Your New Category has been deleted successfully.","deleteProductDiscount"===i&&"Your Product Discount has been deleted successfully.","deleteProductBrand"===i&&"Your Category has been deleted successfully.","deletePost"===i&&"Your Post has been deleted successfully.","delete-customer"===i&&"Your customer removed successfully."]}):(0,d.jsxs)(d.Fragment,{children:["verified-account"===i&&"User Verify Cancelled!","unverified-account"===i&&"User Unverify Cancelled!","disable-account"===i&&"Cancelled Disabled :)","deleteProductCategory"===i&&"Category Deletion Cancelled","deleteProductDiscount"===i&&"Product Discount Deletion Cancelled","deleteServiceCenter"===i&&"Service Center Deletion Cancelled","deleteNewCategory"===i&&"New Category Deletion Cancelled","deleteProductBrand"===i&&"Brand Deletion Cancelled","deletePost"===i&&"Post Deletion Cancelled!","delete-customer"===i&&"Customer Deletion Cancelled"]})})]}),d.jsx(n.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:d.jsx(u.Z,{variant:"contained",color:"success",onClick:Y,children:"Ok"})})]})]})}},24443:(e,t,i)=>{"use strict";i.d(t,{BM:()=>D,DR:()=>A,Ff:()=>l,HT:()=>y,Hd:()=>g,J2:()=>W,J9:()=>o,JB:()=>B,KN:()=>Z,Lh:()=>E,MP:()=>s,MZ:()=>Y,O7:()=>Q,Qm:()=>z,SB:()=>p,SZ:()=>x,Sf:()=>P,Si:()=>V,Zq:()=>j,aY:()=>_,bc:()=>O,dE:()=>b,dn:()=>L,en:()=>F,hB:()=>a,he:()=>T,hq:()=>r,jN:()=>I,ju:()=>$,mU:()=>w,oe:()=>m,rV:()=>q,tC:()=>N,tt:()=>f,tz:()=>h,u7:()=>c,uv:()=>u,vl:()=>U,wU:()=>S,yG:()=>k,yn:()=>v,z7:()=>C,zN:()=>n});var d=i(24293);let a=(0,d.Ps)`
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
`,o=(0,d.Ps)`
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
`,c=(0,d.Ps)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`,l=(0,d.Ps)`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`,_=(0,d.Ps)`
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
`,P=(0,d.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,f=(0,d.Ps)`
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
`,h=(0,d.Ps)`
  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {
    acceptServiceToken(
      is_warranty_valid: $is_warranty_valid
      service_fee: $service_fee
      service_token_id: $service_token_id
    ) {
      message
    }
  }
`,w=(0,d.Ps)`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`,x=(0,d.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,C=(0,d.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,k=(0,d.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status) {
      message
    }
  }
`,j=(0,d.Ps)`
  mutation changeInvoiceStatus($id: uuid!, $data: invoices_set_input!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
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
  mutation sendQInvoice($discounted_amount: numeric!, $quotation_id: uuid!) {
    sendInvoice(discounted_amount: $discounted_amount, quotation_id: $quotation_id) {
      message
    }
  }
`,U=(0,d.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,Y=(0,d.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,A=(0,d.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,B=(0,d.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,q=(0,d.Ps)`
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
  mutation addDiscount($data: product_discounts_insert_input!) {
    insert_product_discounts_one(object: $data) {
      id
      min_order
      discount_type
      customer_type
      created_at
      updated_at
    }
  }
`,L=(0,d.Ps)`
  mutation updateProductDiscount($id: uuid!, $data: product_discounts_set_input!) {
    update_product_discounts_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      min_order
      discount_type
      customer_type
      created_at
      updated_at
    }
  }
`,O=(0,d.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,V=(0,d.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,W=(0,d.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`},89307:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}};