exports.id=1894,exports.ids=[1894],exports.modules={36839:(e,t,i)=>{"use strict";i.d(t,{default:()=>s});var d=i(27486),a=i(618);let s=e=>{let{element:t,dialog:i,elementProps:s,dialogProps:r,dataId:n,setData:o,data:u}=e,[l,c]=(0,a.useState)(!1),{onClick:_,...m}=s;return(0,d.jsxs)(d.Fragment,{children:[d.jsx(t,{onClick:e=>{_&&_(e),c(!0)},...m}),d.jsx(i,{open:l,setOpen:c,...r,dataId:n,setData:o,data:u})]})}},5632:(e,t,i)=>{"use strict";i.d(t,{Z:()=>y});var d=i(27486),a=i(618),s=i(68170),r=i(68589),n=i(46213),o=i(30675),u=i(15532),l=i(19396),c=i.n(l),_=i(38860),m=i(66718),$=i(46811),p=i(25009);let y=({open:e,setOpen:t,type:i,dataId:l,data:y,setData:b})=>{let{userId:g}=(0,$.useParams)(),[P]=(0,_.D)(m.HT),[v]=(0,_.D)(m.SZ,{refetchQueries:[p.L5]}),[f]=(0,_.D)(m.z7,{refetchQueries:[p.L5]}),[h]=(0,_.D)(m.aY),[x]=(0,_.D)(m.Ff),[w]=(0,_.D)(m.ju),[C]=(0,_.D)(m.oe),[S,k]=(0,a.useState)(!1),[j,D]=(0,a.useState)(!1),N="disable-account"===i?"div":a.Fragment,U=()=>{k(!1),t(!1)},Z=async e=>{if(!0===e)try{"disable-account"===i&&await v({variables:{id:g,data:{status:"disable"}}}),"enable-account"===i&&await v({variables:{id:g,data:{status:"verified"}}}),"verified-account"===i&&await f({variables:{user_id:g,is_verified:!0}}),"unverified-account"===i&&await f({variables:{user_id:g,is_verified:!1}}),"deleteProductCategory"===i&&(await h({variables:{id:l}}),b(y.filter(e=>e.id!==l))),"deleteProductBrand"===i&&(await x({variables:{id:l}}),b(y.filter(e=>e.id!==l))),"deletePost"===i&&(await w({variables:{id:l}}),b(y.filter(e=>e.id!==l))),"deleteNewCategory"===i&&(await C({variables:{id:l}}),b(y.filter(e=>e.id!==l))),D(e),t(!1)}catch(e){console.log("Error",e)}else t(!1);D(e),k(!0),t(!1)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.Z,{fullWidth:!0,maxWidth:"xs",open:e,onClose:()=>t(!1),children:[(0,d.jsxs)(r.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[d.jsx("i",{className:"ri-error-warning-line text-[88px] mbe-6 text-warning"}),(0,d.jsxs)(N,{..."disable-account"===i&&{className:"flex flex-col items-center gap-2"},children:[(0,d.jsxs)(o.Z,{variant:"h4",children:["unsubscribe"===i&&"Are you sure to cancel your subscription?","disable-account"===i&&"Are you sure?","delete-order"===i&&"Are you sure?","delete-customer"===i&&"Are you sure?"]}),"verified-account"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to verify your account?"}),"unverified-account"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to unverify your account?"}),"disable-account"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to disalbe user!"}),"enable-account"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to enable user!"}),"deleteProductCategory"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductBrand"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deletePost"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteNewCategory"===i&&d.jsx(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"})]})]}),(0,d.jsxs)(n.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:[d.jsx(u.Z,{variant:"contained",onClick:()=>Z(!0),children:"disable-account"===i?"Yes, Disabel User!":"enable-account"===i?"Yes, Enable User!":"deleteProductCategory"===i?"Yes, Delete Category!":"deleteProductBrand"===i?"Yes, Delete Brand":"delete-customer"===i?"Yes, Delete Customer!":"verified-account"===i?"Yes , User Verify":"unverified-account"===i?"Yes, User Unverify":"deletePost"===i?"Yes, Delete Post":"deleteNewCategory"===i?"Yes, Delete Category":"Yes"}),d.jsx(u.Z,{variant:"outlined",color:"secondary",onClick:()=>{Z(!1)},children:"Cancel"})]})]}),(0,d.jsxs)(s.Z,{open:S,onClose:U,children:[(0,d.jsxs)(r.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[d.jsx("i",{className:c()("text-[88px] mbe-6",{"ri-checkbox-circle-line":j,"text-success":j,"ri-close-circle-line":!j,"text-error":!j})}),d.jsx(o.Z,{variant:"h4",className:"mbe-2",children:j?`${"disable-account"===i?"User Disabled":"enable-account"===i?"User Enabled":"verified-account"===i?"User Verified":"deleteProductCategory"===i?"Delete Category":"unverified"===i?"User Unverified":"deleteProductBrand"===i?"Delete Brand":"deletePost"===i?"Delete Post":"deleteNewCategory"===i?"Delete New Category":"yes"}`:"Cancelled"}),d.jsx(o.Z,{color:"text.primary",children:j?(0,d.jsxs)(d.Fragment,{children:["verified-account"===i&&"Your account has been verified successfully.","unverified-account"===i&&"Your account has been unverified successfully.","disable-account"===i&&"User has been disabled.","enable-account"===i&&"User has been enabled.","deleteProductCategory"===i&&"Your Category has been deleted successfully.","deleteNewCategory"===i&&"Your New Category has been deleted successfully.","deleteProductBrand"===i&&"Your Category has been deleted successfully.","deletePost"===i&&"Your Post has been deleted successfully.","delete-customer"===i&&"Your customer removed successfully."]}):(0,d.jsxs)(d.Fragment,{children:["verified-account"===i&&"User Verify Cancelled!","unverified-account"===i&&"User Unverify Cancelled!","disable-account"===i&&"Cancelled Disabled :)","deleteProductCategory"===i&&"Category Deletion Cancelled","deleteNewCategory"===i&&"New Category Deletion Cancelled","deleteProductBrand"===i&&"Brand Deletion Cancelled","deletePost"===i&&"Post Deletion Cancelled!","delete-customer"===i&&"Customer Deletion Cancelled"]})})]}),d.jsx(n.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:d.jsx(u.Z,{variant:"contained",color:"success",onClick:U,children:"Ok"})})]})]})}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>k,DR:()=>Z,Ff:()=>c,HT:()=>y,Hd:()=>b,J2:()=>L,J9:()=>o,JB:()=>Y,KN:()=>D,Lh:()=>Q,MP:()=>r,MZ:()=>U,O7:()=>A,Qm:()=>F,SB:()=>$,SZ:()=>x,Sf:()=>v,Si:()=>E,Zq:()=>S,aY:()=>_,bc:()=>O,dE:()=>g,en:()=>q,hB:()=>a,he:()=>I,hq:()=>s,jN:()=>B,ju:()=>p,oe:()=>m,tC:()=>j,tt:()=>f,u7:()=>l,uv:()=>u,vl:()=>N,wU:()=>h,yG:()=>C,yn:()=>P,z7:()=>w,zN:()=>n});var d=i(12738);let a=(0,d.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,s=(0,d.Ps)`
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
`,r=(0,d.Ps)`
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
    }
  }
`,l=(0,d.Ps)`
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
`,$=(0,d.Ps)`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`,p=(0,d.Ps)`
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
`;let b=(0,d.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,g=(0,d.Ps)`
  mutation editNewProducts($id: uuid!, $data: news_set_input!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,P=(0,d.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,v=(0,d.Ps)`
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
`,h=(0,d.Ps)`
  mutation changeOrderStatus($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
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
`,w=(0,d.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,C=(0,d.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status) {
      message
    }
  }
`,S=(0,d.Ps)`
  mutation changeInvoiceStatus($id: uuid!, $data: invoices_set_input!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`,k=(0,d.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,j=(0,d.Ps)`
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
`,D=(0,d.Ps)`
  mutation sendQInvoice($discounted_amount: numeric!, $quotation_id: uuid!) {
    sendInvoice(discounted_amount: $discounted_amount, quotation_id: $quotation_id) {
      message
    }
  }
`,N=(0,d.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,U=(0,d.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,Z=(0,d.Ps)`
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
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,A=(0,d.Ps)`
  mutation addSeriveCenter($data: service_centers_insert_input!) {
    insert_service_centers_one(object: $data) {
      id
    }
  }
`,q=(0,d.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,I=(0,d.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,F=(0,d.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,Q=(0,d.Ps)`
  mutation addDiscount($data: product_discounts_insert_input!) {
    insert_product_discounts_one(object: $data) {
      id
    }
  }
`,O=(0,d.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,E=(0,d.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,L=(0,d.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
    }
  }
`},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}};