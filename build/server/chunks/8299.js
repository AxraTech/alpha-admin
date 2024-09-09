"use strict";exports.id=8299,exports.ids=[8299],exports.modules={5330:(e,t,i)=>{i.d(t,{Z:()=>s});var d=i(10326);i(17577);var a=i(38506),n=i(76865);let s=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,n.q)();return d.jsx("div",{children:d.jsx(a.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},24443:(e,t,i)=>{i.d(t,{BM:()=>C,DR:()=>U,Ff:()=>c,HT:()=>g,Hd:()=>y,J2:()=>E,J9:()=>o,JB:()=>M,KN:()=>q,Lh:()=>H,MP:()=>s,MZ:()=>I,O7:()=>z,Qm:()=>T,SB:()=>p,SZ:()=>j,Sf:()=>P,Si:()=>W,Zq:()=>Z,aY:()=>l,bc:()=>O,dE:()=>v,dn:()=>J,en:()=>Q,hB:()=>a,he:()=>F,hq:()=>n,jN:()=>A,ju:()=>$,mU:()=>w,oe:()=>m,rV:()=>B,tC:()=>N,tt:()=>b,tz:()=>k,u7:()=>_,uv:()=>u,vl:()=>D,wU:()=>S,yG:()=>f,yn:()=>h,z7:()=>x,zN:()=>r});var d=i(24293);let a=(0,d.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,n=(0,d.Ps)`
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
`,r=(0,d.Ps)`
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
`;let g=(0,d.Ps)`
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
`;let y=(0,d.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,v=(0,d.Ps)`
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
`,h=(0,d.Ps)`
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
`,b=(0,d.Ps)`
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
`,w=(0,d.Ps)`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`,j=(0,d.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,x=(0,d.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,f=(0,d.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status) {
      message
    }
  }
`,Z=(0,d.Ps)`
  mutation changeInvoiceStatus($id: uuid!, $data: invoices_set_input!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`,C=(0,d.Ps)`
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
`,q=(0,d.Ps)`
  mutation sendQInvoice($discounted_amount: numeric!, $quotation_id: uuid!) {
    sendInvoice(discounted_amount: $discounted_amount, quotation_id: $quotation_id) {
      message
    }
  }
`,D=(0,d.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,I=(0,d.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,U=(0,d.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,M=(0,d.Ps)`
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
`,A=(0,d.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,z=(0,d.Ps)`
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
`,Q=(0,d.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,F=(0,d.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      phone
      address
    }
  }
`,T=(0,d.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,H=(0,d.Ps)`
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
`,J=(0,d.Ps)`
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
`,W=(0,d.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,E=(0,d.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`},8299:(e,t,i)=>{i.d(t,{Z:()=>S});var d=i(10326),a=i(17577),n=i(19074),s=i(48260),r=i(25609),o=i(78077),u=i(53913),_=i(918),c=i(57329),l=i(56390),m=i(37841),p=i(87700),$=i(99207),g=i(11684),y=i(18753),v=i(24443),h=i(5330),P=i(76865);let b={paymentDate:new Date,paymentMethod:"select-method",paymentAmount:500,paymentNote:""},S=({open:e,handleClose:t,invoiceData:i,paymentMethods:S})=>{let{setGlobalMsg:k}=(0,P.q)(),[w,j]=(0,a.useState)(!1),[x,f]=(0,a.useState)(b),[Z]=(0,y.D)(v.tC),C=async e=>{e.preventDefault();try{j(!0),await Z({variables:{amount:x.amount,invoice_id:i.id,payment_date:x.payment_date,payment_method:x.payment_method}}),j(!1),k("✅ Payment Send Successful"),f(""),t()}catch(e){console.log("Error ",e)}},N=()=>{t(),f(b)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ZP,{open:e,anchor:"right",variant:"temporary",onClose:N,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,d.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[d.jsx(r.Z,{variant:"h5",children:"Add Payment"}),d.jsx(s.Z,{size:"small",onClick:N,children:d.jsx("i",{className:"ri-close-line text-2xl"})})]}),d.jsx($.Z,{}),(0,d.jsxs)("div",{className:"p-5",children:[(0,d.jsxs)(r.Z,{className:"flex justify-end text-white",children:["Balance : ",i.balance?i.balance.toLocaleString():0]}),(0,d.jsxs)("form",{onSubmit:C,className:"flex flex-col gap-5 mt-5",children:[d.jsx(o.Z,{fullWidth:!0,id:"amount",label:"Payment Amount",type:"number",InputProps:{startAdornment:d.jsx(c.Z,{position:"start"})},value:x.amount,onChange:e=>f({...x,amount:+e.target.value})}),d.jsx(g.Z,{selected:x.payment_date,id:"payment-date",onChange:e=>null!==e&&f({...x,payment_date:e}),customInput:d.jsx(o.Z,{fullWidth:!0,label:"Payment Date"})}),(0,d.jsxs)(u.Z,{fullWidth:!0,children:[d.jsx(_.Z,{htmlFor:"payment-method",children:"Payment Method"}),(0,d.jsxs)(l.Z,{label:"Payment Method",labelId:"payment-method",id:"payment-method-select",value:x.payment_method,onChange:e=>f({...x,payment_method:e.target.value}),children:[d.jsx(m.Z,{value:"select-method",disabled:!0,children:"Select Payment Method"}),S.payment_methods.map(e=>d.jsx(m.Z,{value:e.name,children:e.name},e.id))]})]}),(0,d.jsxs)("div",{className:"flex items-center gap-4",children:[d.jsx(p.Z,{loading:w,size:"large",variant:"contained",type:"submit",children:"Send"}),d.jsx(p.Z,{size:"large",variant:"outlined",color:"secondary",type:"reset",onClick:N,children:"Cancel"})]})]})]})]}),d.jsx(h.Z,{})]})}}};