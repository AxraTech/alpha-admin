exports.id=9932,exports.ids=[9932],exports.modules={58701:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r}),i(17577);var d=i(51426),a=i(10326);let r=(0,d.Z)((0,a.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},79186:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r}),i(17577);var d=i(51426),a=i(10326);let r=(0,d.Z)((0,a.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},18500:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var d=i(87700),a=i(91703),r=i(92107);let n=(0,a.ZP)(d.Z)(({color:e,size:t,theme:i,variant:d})=>({minInlineSize:0,..."small"===t?{fontSize:"20px",padding:i.spacing("outlined"===d?1.5:1.75),"& i, & svg":{fontSize:"inherit"}}:{..."large"===t?{fontSize:"24px",padding:i.spacing("outlined"===d?2:2.25),"& i, & svg":{fontSize:"inherit"}}:{fontSize:"22px",padding:i.spacing("outlined"===d?1.75:2),"& i, & svg":{fontSize:"inherit"}}},...!e&&{color:"var(--mui-palette-action-active)","&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active":{backgroundColor:"rgb(var(--mui-palette-text-primaryChannel) / 0.08)"},...r.Z.disableRipple&&{"&.Mui-focusVisible:not(.Mui-disabled)":{backgroundColor:"rgb(var(--mui-palette-text-primaryChannel) / 0.08)"}},"&.Mui-disabled":{opacity:.45,color:"var(--mui-palette-action-active)"},..."outlined"===d&&{border:"none !important",..."small"===t?{padding:i.spacing(1.75)}:{..."large"===t?{padding:i.spacing(2.25)}:{padding:i.spacing(2)}}},..."contained"===d&&{boxShadow:"none !important",backgroundColor:"transparent"}}}))},79913:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var d=i(10326),a=i(22557);let r=(0,i(91703).ZP)(a.Z)(({color:e,pill:t,theme:i,orientation:d})=>({..."true"===t&&{minHeight:38,..."vertical"===d?{borderInlineEnd:0}:{borderBlockEnd:0},"&, & .MuiTabs-scroller":{..."vertical"===d&&{boxSizing:"content-box"},margin:`${i.spacing(-1,-1,-1.5,-1)} !important`,padding:i.spacing(1,1,1.5,1)},"& .MuiTabs-indicator":{display:"none"},"& .MuiTabs-flexContainer":{gap:i.spacing(1)},"& .Mui-selected":{backgroundColor:`var(--mui-palette-${e}-main) !important`,color:`var(--mui-palette-${e}-contrastText) !important`,boxShadow:"var(--mui-customShadows-xs)"},"& .MuiTab-root":{minHeight:38,padding:i.spacing(2,5.5),borderRadius:"var(--mui-shape-borderRadius)","&:hover":{border:0,backgroundColor:`var(--mui-palette-${e}-lightOpacity)`,color:`var(--mui-palette-${e}-main)`,..."vertical"===d?{paddingInlineEnd:i.spacing(5.5)}:{paddingBlockEnd:i.spacing(2)}}}}})),n=e=>{let{color:t="primary",...i}=e;return d.jsx(r,{color:t,...i})}},53190:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var d=i(10326);let a=e=>{let{onSubmit:t,...i}=e;return d.jsx("form",{...i,onSubmit:t?e=>t(e):e=>e.preventDefault()})}},81547:(e,t,i)=>{"use strict";i.d(t,{default:()=>n});var d=i(10326),a=i(17577),r=i(90434);let n=(0,a.forwardRef)((e,t)=>{let{href:i,onClick:a,...n}=e;return d.jsx(r.default,{ref:t,...n,href:i||"/",onClick:a?e=>a(e):i?void 0:e=>e.preventDefault()})})},5330:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var d=i(10326);i(17577);var a=i(38506),r=i(76865);let n=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,r.q)();return d.jsx("div",{children:d.jsx(a.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},24443:(e,t,i)=>{"use strict";i.d(t,{BM:()=>Z,DR:()=>I,Ff:()=>p,HT:()=>g,Hd:()=>v,J2:()=>J,J9:()=>o,JB:()=>T,KN:()=>q,Lh:()=>H,MP:()=>n,MZ:()=>R,O7:()=>B,Qm:()=>L,SB:()=>m,SZ:()=>w,Sf:()=>S,Si:()=>O,Zq:()=>C,aY:()=>l,bc:()=>F,dE:()=>b,dn:()=>E,en:()=>D,hB:()=>a,he:()=>A,hq:()=>r,jN:()=>U,ju:()=>$,mU:()=>f,mt:()=>Q,oe:()=>c,rV:()=>N,tC:()=>M,tt:()=>k,tz:()=>P,u7:()=>_,uv:()=>u,vl:()=>z,wU:()=>h,yG:()=>j,yn:()=>y,z7:()=>x,zN:()=>s});var d=i(24293);let a=(0,d.Ps)`
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
`,n=(0,d.Ps)`
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
`,s=(0,d.Ps)`
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
`,p=(0,d.Ps)`
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
`,c=(0,d.Ps)`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`,m=(0,d.Ps)`
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
`;let v=(0,d.Ps)`
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
`,y=(0,d.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,S=(0,d.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,k=(0,d.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,h=(0,d.Ps)`
  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {
    updateServiceStatus(service_token_id: $service_token_id, status: $status) {
      message
    }
  }
`,P=(0,d.Ps)`
  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {
    acceptServiceToken(
      is_warranty_valid: $is_warranty_valid
      service_fee: $service_fee
      service_token_id: $service_token_id
    ) {
      message
    }
  }
`,f=(0,d.Ps)`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`,w=(0,d.Ps)`
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
`,j=(0,d.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status) {
      message
    }
  }
`,C=(0,d.Ps)`
  mutation changeInvoiceStatus($id: uuid!, $data: invoices_set_input!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`,Z=(0,d.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,M=(0,d.Ps)`
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
  mutation sendQInvoice($quotation_id: uuid!) {
    sendInvoice(quotation_id: $quotation_id) {
      message
    }
  }
`,z=(0,d.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,R=(0,d.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,I=(0,d.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,T=(0,d.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,N=(0,d.Ps)`
  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {
    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      email
      role
    }
  }
`,U=(0,d.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,B=(0,d.Ps)`
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
`,D=(0,d.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,A=(0,d.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      phone
      address
    }
  }
`,L=(0,d.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,Q=(0,d.Ps)`
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
`,E=(0,d.Ps)`
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
`,F=(0,d.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,O=(0,d.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,J=(0,d.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`},64926:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var d=i(71728);let a=(0,i(91703).ZP)(d.Z)(({theme:e})=>({"& .dropzone":{minHeight:300,display:"flex",flexWrap:"wrap",cursor:"pointer",position:"relative",alignItems:"center",justifyContent:"center",padding:e.spacing(4),borderRadius:"var(--mui-shape-borderRadius)",border:"2px dashed var(--mui-palette-divider)",[e.breakpoints.down("xs")]:{textAlign:"center"},"&:focus":{outline:"none"},"& + .MuiList-root":{padding:0,marginTop:e.spacing(6.25),"& .MuiListItem-root":{display:"flex",justifyContent:"space-between",borderRadius:"var(--mui-shape-borderRadius)",padding:e.spacing(2.5,2.4,2.5,6),border:"1px solid var(--mui-palette-divider)","& .file-details":{display:"flex",alignItems:"center"},"& .file-preview":{display:"flex",marginRight:e.spacing(3.75),"& svg":{fontSize:"2rem"}},"& img":{width:38,height:38,padding:e.spacing(.75),borderRadius:"var(--mui-shape-borderRadius)",border:"1px solid var(--mui-palette-divider)"},"& .file-name":{fontWeight:600},"& + .MuiListItem-root":{marginTop:e.spacing(3.5)}},"& + .buttons":{display:"flex",justifyContent:"flex-end",marginTop:e.spacing(6.25),"& > :first-of-type":{marginRight:e.spacing(3.5)}}},"& img.single-file-image":{objectFit:"cover",position:"absolute",width:"calc(100% - 1rem)",height:"calc(100% - 1rem)",borderRadius:"var(--mui-shape-borderRadius)"}}}))},59104:()=>{}};