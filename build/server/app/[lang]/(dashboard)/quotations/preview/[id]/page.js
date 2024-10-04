(()=>{var e={};e.id=6926,e.ids=[6926],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},79773:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>_,tree:()=>l}),r(33641),r(5114),r(32687),r(85133);var i=r(79193),a=r(71854),n=r(33997),s=r.n(n),o=r(73320),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["[lang]",{children:["(dashboard)",{children:["quotations",{children:["preview",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,33641)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\quotations\\preview\\[id]\\page.jsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5114)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,32687)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\quotations\\preview\\[id]\\page.jsx"],u="/[lang]/(dashboard)/quotations/preview/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},_=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[lang]/(dashboard)/quotations/preview/[id]/page",pathname:"/[lang]/quotations/preview/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},51910:(e,t,r)=>{Promise.resolve().then(r.bind(r,74861))},69121:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var i=r(13211),a=r(6520),n=r(618),s=r(69360),o=r(47150),d=r(26829),l=r(28502),c=r(24687),u=r(41922),p=r(27486);let _=["className","raised"],m=e=>{let{classes:t}=e;return(0,o.Z)({root:["root"]},u.y,t)},h=(0,d.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),f=n.forwardRef(function(e,t){let r=(0,l.i)({props:e,name:"MuiCard"}),{className:n,raised:o=!1}=r,d=(0,a.Z)(r,_),c=(0,i.Z)({},r,{raised:o}),u=m(c);return(0,p.jsx)(h,(0,i.Z)({className:(0,s.Z)(u.root,n),elevation:o?8:void 0,ref:t,ownerState:c},d))})},41922:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s,y:()=>n});var i=r(66875),a=r(62209);function n(e){return(0,a.ZP)("MuiCard",e)}let s=(0,i.Z)("MuiCard",["root"])},76295:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var i=r(13211),a=r(6520),n=r(618),s=r(69360),o=r(47150),d=r(72660),l=r(26829),c=r(28502),u=r(80560),p=r(63998),_=r(27486);let m=["className","id"],h=e=>{let{classes:t}=e;return(0,o.Z)({root:["root"]},u.a,t)},f=(0,l.ZP)(d.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),x=n.forwardRef(function(e,t){let r=(0,c.i)({props:e,name:"MuiDialogTitle"}),{className:o,id:d}=r,l=(0,a.Z)(r,m),u=h(r),{titleId:x=d}=n.useContext(p.Z);return(0,_.jsx)(f,(0,i.Z)({component:"h2",className:(0,s.Z)(u.root,o),ownerState:r,ref:t,variant:"h6",id:null!=d?d:x},l))})},91347:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var i=r(27486);r(618);var a=r(27319),n=r(22405);let s=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,n.q)();return i.jsx("div",{children:i.jsx(a.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},93889:(e,t,r)=>{"use strict";r.d(t,{Pg:()=>o,c7:()=>a,sE:()=>s,uH:()=>i,zh:()=>n});let i={completed:"success",rejected:"error","received token":"info","picking up":"primary",processing:"warning",delivering:"secondary"},a={pending:"warning",completed:"success",accepted:"info",rejected:"error",negotiation:"primary"},n={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},s={paid:"secondary","partially paid":"info",rejected:"error",unpaid:"primary",pending:"warning"},o={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},66718:(e,t,r)=>{"use strict";r.d(t,{BM:()=>N,DR:()=>M,Ff:()=>u,HT:()=>f,Hd:()=>x,J2:()=>H,J9:()=>d,JB:()=>O,KN:()=>C,Lh:()=>z,MP:()=>s,MZ:()=>D,O7:()=>E,Qm:()=>U,SB:()=>m,SZ:()=>w,Sf:()=>y,Si:()=>L,Zq:()=>Z,aY:()=>p,bc:()=>G,dE:()=>g,dn:()=>B,en:()=>Q,hB:()=>a,he:()=>F,hq:()=>n,jN:()=>A,ju:()=>h,mU:()=>P,mt:()=>I,oe:()=>_,pE:()=>J,rV:()=>T,si:()=>V,tC:()=>q,tt:()=>j,tz:()=>b,u7:()=>c,ui:()=>W,uv:()=>l,vl:()=>R,wU:()=>$,yG:()=>k,yn:()=>v,z7:()=>S,zN:()=>o});var i=r(12738);let a=(0,i.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,n=(0,i.Ps)`
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
`,s=(0,i.Ps)`
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
`,o=(0,i.Ps)`
  mutation addProduct(
    $title: String!
    $description_html: String!
    $brand_id: uuid!
    $category_id: uuid!
    $serial_number: String!
    $price: numeric!
    $dealer_price: numeric!
    $consumer_price: numeric!
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
        dealer_price: $dealer_price
        consumer_price: $consumer_price
        warranty_period: $warranty_period
        product_medias: $product_medias
      }
    ) {
      id
      title
      price
      consumer_price
      dealer_price
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
`,d=(0,i.Ps)`
  mutation editProduct(
    $id: uuid!
    $title: String!
    $description_html: String!
    $brand_id: uuid!
    $category_id: uuid!
    $serial_number: String
    $price: numeric!
    $dealer_price: numeric!
    $consumer_price: numeric!
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
        dealer_price: $dealer_price
        consumer_price: $consumer_price
        warranty_period: $warranty_period
      }
    ) {
      id
      title
      price
      consumer_price
      dealer_price
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
`,l=(0,i.Ps)`
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
`,c=(0,i.Ps)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`,u=(0,i.Ps)`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`,p=(0,i.Ps)`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`,_=(0,i.Ps)`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`,m=(0,i.Ps)`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`,h=(0,i.Ps)`
  mutation deleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
    }
  }
`;(0,i.Ps)`
  mutation deleteInvoice($id: uuid!) {
    delete_invoices_by_pk(id: $id) {
      id
    }
  }
`;let f=(0,i.Ps)`
  mutation aa($id: uuid!) {
    delete_orders_by_pk(id: $id) {
      id
    }
  }
`;(0,i.Ps)`
  mutation deleteDealer($id: uuid!) {
    delete_dealers_by_pk(id: $id) {
      id
    }
  }
`,(0,i.Ps)`
  mutation addDealer($data: dealers_insert_input!) {
    insert_dealers_one(object: $data) {
      id
    }
  }
`;let x=(0,i.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,g=(0,i.Ps)`
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
`,v=(0,i.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,y=(0,i.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,j=(0,i.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,$=(0,i.Ps)`
  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {
    updateServiceStatus(service_token_id: $service_token_id, status: $status) {
      message
    }
  }
`,b=(0,i.Ps)`
  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {
    acceptServiceToken(
      is_warranty_valid: $is_warranty_valid
      service_fee: $service_fee
      service_token_id: $service_token_id
    ) {
      message
    }
  }
`,P=(0,i.Ps)`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`,w=(0,i.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,S=(0,i.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,k=(0,i.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!, $rejected_reason: String) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,Z=(0,i.Ps)`
  mutation updateInvoiceStatus($invoice_id: uuid!, $status: String!, $rejected_reason: String) {
    updateInvoiceStatus(invoice_id: $invoice_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,N=(0,i.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,q=(0,i.Ps)`
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
`,C=(0,i.Ps)`
  mutation sendQInvoice($quotation_id: uuid!) {
    sendInvoice(quotation_id: $quotation_id) {
      message
    }
  }
`,R=(0,i.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,D=(0,i.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,M=(0,i.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,O=(0,i.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,T=(0,i.Ps)`
  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {
    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      email
      role
    }
  }
`,A=(0,i.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,E=(0,i.Ps)`
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
`,Q=(0,i.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,F=(0,i.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      phone
      address
    }
  }
`,U=(0,i.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,I=(0,i.Ps)`
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
`,z=(0,i.Ps)`
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
`,B=(0,i.Ps)`
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
`,G=(0,i.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,L=(0,i.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,H=(0,i.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`,J=(0,i.Ps)`
  mutation imageUpload($data: product_medias_insert_input!) {
    insert_product_medias_one(object: $data) {
      id
      product_id
      media_url
      media_type
    }
  }
`,V=(0,i.Ps)`
  mutation deleteProductImage($id: uuid!) {
    delete_product_medias_by_pk(id: $id) {
      id
      media_url
      media_type
    }
  }
`,W=(0,i.Ps)`
  mutation resetUserPassword($user_id: uuid!, $confirmNewPassword: String!, $newPassword: String!) {
    UpdateUserPassword(confirmNewPassword: $confirmNewPassword, user_id: $user_id, newPassword: $newPassword) {
      message
    }
  }
`},74861:(e,t,r)=>{"use strict";r.d(t,{default:()=>F});var i=r(27486),a=r(61766),n=r(618),s=r(46811),o=r(12964),d=r(69121),l=r(51259),c=r(39800),u=r(9594),p=r(72660),_=r(30785),m=r(20700),h=r(58894),f=r(83398),x=r(66718),g=r(86016),v=r(22405),y=r(57971),j=r(91347);let $=({open:e,handleClose:t,quotationData:r})=>{let[a,s]=(0,n.useState)(),[d]=(0,f.D)(x.Sf),[l]=(0,f.D)(x.BM),{setGlobalMsg:j}=(0,v.q)(),$=(0,n.useRef)(null),{control:b,reset:P,handleSubmit:w,formState:{errors:S}}=(0,h.cI)({defaultValues:{title:"",description:""}}),k=async e=>{try{let e=await d({variables:{content_type:"pdf",folder:"quotations"}}),t=await (0,g.c)(a[0],e.data.getFileUploadUrl.fileUploadUrl,"image"),i=await l({variables:{quotation_id:r.id,quotation_file_url:t}});console.log("res ",i),s(""),j("✅ Send Quotation file suceessful")}catch(e){j("❌ Send file error")}},Z=()=>{s(""),t()};return i.jsx(i.Fragment,{children:(0,i.jsxs)(c.ZP,{open:e,anchor:"right",variant:"temporary",onClose:Z,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,i.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[i.jsx(p.Z,{variant:"h5",children:"Send Quotation File"}),i.jsx(u.Z,{size:"small",onClick:()=>{t()},children:i.jsx("i",{className:"ri-close-line text-2xl"})})]}),i.jsx(m.Z,{}),i.jsx("div",{className:"p-5",children:(0,i.jsxs)("form",{onSubmit:w(e=>k(e)),className:"flex flex-col gap-5",children:[(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[i.jsx(_.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:a?a[0].name:"",className:"flex-auto",InputProps:{readOnly:!0,endAdornment:a?i.jsx(y.Z,{position:"end",children:i.jsx(u.Z,{size:"small",edge:"end",onClick:()=>setFileName(""),children:i.jsx("i",{className:"ri-close-line"})})}):null}}),(0,i.jsxs)(o.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",i.jsx("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:t}=e.target;t&&0!==t.length&&s(t)},ref:$})]})]}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[i.jsx(o.Z,{variant:"contained",type:"submit",children:"Add"}),i.jsx(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:Z,children:"Discard"})]})]})})]})})},b=({open:e,handleClose:t,quotationData:r})=>{let[a,s]=(0,n.useState)(),[d]=(0,f.D)(x.Sf),[l]=(0,f.D)(x.KN),{setGlobalMsg:g}=(0,v.q)();(0,n.useRef)(null);let{control:y,reset:$,handleSubmit:b,formState:{errors:P}}=(0,h.cI)({defaultValues:{title:"",description:""}}),w=async e=>{try{await l({variables:{quotation_id:r.id,discounted_amount:e.price}}),g("✅ Send Quotation Invoice file suceessful")}catch(e){g("❌ Send file error")}},S=()=>{$({price:""}),t()};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c.ZP,{open:e,anchor:"right",variant:"temporary",onClose:S,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,i.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[i.jsx(p.Z,{variant:"h5",children:"Send Invoice "}),i.jsx(u.Z,{size:"small",onClick:()=>{t()},children:i.jsx("i",{className:"ri-close-line text-2xl"})})]}),i.jsx(m.Z,{}),i.jsx("div",{className:"p-5",children:(0,i.jsxs)("form",{onSubmit:b(e=>w(e)),className:"flex flex-col gap-5",children:[i.jsx(h.Qr,{name:"price",control:y,rules:{required:!0},render:({field:e})=>i.jsx(_.Z,{...e,fullWidth:!0,type:"number",label:"Amount",placeholder:"Enter discounted Amount",...P.price&&{error:!0,helperText:"This field is required."}})}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[i.jsx(o.Z,{variant:"contained",type:"submit",children:"Send"}),i.jsx(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:S,children:"Discard"})]})]})})]}),i.jsx(j.Z,{})]})};var P=r(64275);let w=({open:e,handleClose:t,quotationData:r})=>{let[a,s]=(0,n.useState)(),[d]=(0,f.D)(x.Sf),[l]=(0,f.D)(x.BM),{setGlobalMsg:j,loading:$,setLoading:b}=(0,v.q)(),[w,S]=(0,n.useState)(),k=(0,n.useRef)(null),{control:Z,reset:N,handleSubmit:q,formState:{errors:C}}=(0,h.cI)({defaultValues:{title:"",description:""}}),R=async e=>{try{if(!a||"application/pdf"!==a[0].type){S("Please upload a PDF file.");return}b(!0);let e=await d({variables:{content_type:"pdf",folder:"quotations"}}),t=await (0,g.c)(a[0],e.data.getFileUploadUrl.fileUploadUrl,"image");await l({variables:{quotation_id:r.id,quotation_file_url:t}}),s(""),j("✅ Send Quotation file suceessful"),b(!1)}catch(e){j(`❌ ${e.message}`)}},D=()=>{s(""),t(),S("")};return i.jsx(i.Fragment,{children:(0,i.jsxs)(c.ZP,{open:e,anchor:"right",variant:"temporary",onClose:D,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,i.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[i.jsx(p.Z,{variant:"h5",children:"Send Quotation File"}),i.jsx(u.Z,{size:"small",onClick:()=>{t()},children:i.jsx("i",{className:"ri-close-line text-2xl"})})]}),i.jsx(m.Z,{}),i.jsx("div",{className:"p-5",children:(0,i.jsxs)("form",{onSubmit:q(e=>R(e)),className:"flex flex-col gap-5",children:[(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[i.jsx(_.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:a?a[0].name:"",className:"flex-auto",InputProps:{readOnly:!0,endAdornment:a?i.jsx(y.Z,{position:"end",children:i.jsx(u.Z,{size:"small",edge:"end",onClick:()=>setFileName(""),children:i.jsx("i",{className:"ri-close-line"})})}):null}}),(0,i.jsxs)(o.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",i.jsx("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:t}=e.target;t&&0!==t.length&&("application/pdf"!==t[0].type?(S("Invalid file type. Please upload a PDF."),s(null)):(S(""),s(t)))},ref:k})]})]}),w&&i.jsx(p.Z,{variant:"body2",color:"error",children:w}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[i.jsx(P.Z,{variant:"contained",type:"submit",children:"Add"}),i.jsx(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:D,children:"Discard"})]})]})})]})})},S=({id:e,onButtonClick:t,quotationData:r})=>{let[a,c]=(0,n.useState)(!1),[u,p]=(0,n.useState)(!1),[_,m]=(0,n.useState)(!1),[h,f]=(0,n.useState)(!1),{lang:x}=(0,s.useParams)();return(0,i.jsxs)(i.Fragment,{children:[(r?.status==="negotiation"||r?.status==="accepted")&&i.jsx(d.Z,{children:i.jsx(l.Z,{className:"flex flex-col gap-4",children:i.jsx(o.Z,{fullWidth:!0,color:"success",variant:"contained",className:"capitalize",startIcon:i.jsx("i",{className:"ri-send-plane-line"}),onClick:()=>p(!0),children:"Send Quotation File"})})}),i.jsx(w,{open:u,handleClose:()=>p(!1),quotationData:r}),i.jsx(b,{open:h,handleClose:()=>f(!1),quotationData:r}),i.jsx($,{open:_,handleClose:()=>m(!1),quotationData:r})]})};var k=r(6096),Z=r(31538),N=r.n(Z);r(12612);var q=r(25009),C=r(16561),R=r(93889);let D=({quotationData:e})=>i.jsx(d.Z,{className:"previewCard",children:i.jsx(l.Z,{className:"sm:!p-12",children:(0,i.jsxs)(a.ZP,{container:!0,spacing:6,children:[i.jsx(a.ZP,{item:!0,xs:12,children:i.jsx("div",{className:"p-6 bg-actionHover rounded",children:(0,i.jsxs)("div",{className:"flex justify-between gap-y-4 flex-col sm:flex-row",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-6",children:[i.jsx("div",{className:"flex items-center",children:i.jsx(k.Z,{})}),(0,i.jsxs)("div",{children:[i.jsx(p.Z,{color:"text.primary",children:"No. 297, Marlar Myaing Street,"}),i.jsx(p.Z,{color:"text.primary",children:"Tharkayta Industrial Zone,"}),i.jsx(p.Z,{color:"text.primary",children:"Yangon, Myanmar"}),i.jsx(p.Z,{color:"text.primary",children:"09- 428 694 996 09- 762 509 157"})]})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,i.jsxs)("div",{className:"flex flex-row gap-3",children:[i.jsx(p.Z,{variant:"h5",children:"Quotation"}),i.jsx(C.Z,{label:e?.status,color:R.c7[e.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,i.jsxs)(p.Z,{color:"text.primary",children:["Quotation Number : ",e?.quotation_number]}),(0,i.jsxs)(p.Z,{color:"text.primary",children:["Due Date : ",new Date(e?.updated_at).toLocaleDateString()]})]})]})]})})}),i.jsx(a.ZP,{item:!0,xs:12,children:i.jsx(a.ZP,{container:!0,spacing:6,children:i.jsx(a.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsxs)("div",{className:"flex flex-col gap-4",children:[i.jsx(p.Z,{className:"font-medium",color:"text.primary",children:"Delivery Address To:"}),(0,i.jsxs)("div",{children:[i.jsx(p.Z,{children:e?.user?.orders[0]?.receiver_name}),i.jsx(p.Z,{className:"my-1",children:e?.user.orders[0]?.receiver_phone}),i.jsx(p.Z,{children:e?.user.orders[0]?.receiver_address})]})]})})})}),i.jsx(a.ZP,{item:!0,xs:12,children:i.jsx("div",{className:"overflow-x-auto border rounded",children:(0,i.jsxs)("table",{className:N().table,children:[i.jsx("thead",{children:(0,i.jsxs)("tr",{className:"border-be",children:[i.jsx("th",{className:"!bg-transparent",children:"Product"}),i.jsx("th",{className:"!bg-transparent",children:"Brand"}),i.jsx("th",{className:"!bg-transparent",children:"Price"}),i.jsx("th",{className:"!bg-transparent",children:"Qty"})]})}),i.jsx("tbody",{children:e?.quotation_items.map((e,t)=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx(p.Z,{color:"text.primary",className:"w-60 text-wrap",children:e.product.title})}),i.jsx("td",{children:i.jsx(p.Z,{color:"text.primary",children:e.product.brand.title})}),i.jsx("td",{children:i.jsx(p.Z,{color:"text.primary",children:e.product.price})}),i.jsx("td",{children:i.jsx(p.Z,{color:"text.primary",children:e.quantity})})]},t))})]})})}),i.jsx(a.ZP,{item:!0,xs:12,children:i.jsx("div",{className:"flex justify-end flex-col gap-y-4 sm:flex-row"})}),i.jsx(a.ZP,{item:!0,xs:12,children:i.jsx(m.Z,{className:"border-dashed"})}),i.jsx(a.ZP,{item:!0,xs:12,children:(0,i.jsxs)(p.Z,{children:[(0,i.jsxs)(p.Z,{component:"span",className:"font-medium",color:"text.primary",children:["Dealer Remark :"," "]}),e.dealer_remark?e.dealer_remark:" - "]})})]})})});var M=r(19412),O=r(76295),T=r(56239),A=r(53544);let E=({quotationData:e})=>{let{setGlobalMsg:t}=(0,v.q)(),[r,a]=(0,n.useState)(!1),[s]=(0,f.D)(x.yG,{refetchQueries:[q._n]}),[d]=(0,f.D)(x.KN,{refetchQueries:[q._n]}),l=async(e,r)=>{try{await s({variables:{quotation_id:e,status:r}}),t("✅ Change Quotation Status")}catch(e){console.log("Change Status Error ",e)}};return(0,i.jsxs)("div",{children:[i.jsx("div",{children:i.jsx(o.Z,{variant:"outlined",color:"primary",size:"large",fullWidth:!0,onClick:()=>l(e?.id,"negotiation"),children:"Negotiate"})}),(0,i.jsxs)("div",{className:"flex  justify-center gap-3 mt-4",children:[i.jsx(o.Z,{variant:"outlined",color:"info",size:"large",onClick:async()=>{await d({variables:{quotation_id:e.id}}),t("✅ Quotation Accepted")},children:"Accepted"}),i.jsx(o.Z,{variant:"outlined",className:"text-error",onClick:()=>{a(!0)},children:"Reject"})]}),i.jsx("div",{children:(0,i.jsxs)(M.Z,{fullWidth:"md",open:r,onClose:()=>a(!1),PaperProps:{component:"form",onSubmit:async r=>{r.preventDefault();let i=Object.fromEntries(new FormData(r.currentTarget).entries()).rejected_reason;await s({variables:{quotation_id:e?.id,status:"rejected",rejected_reason:i}}),t("✅ Reject reason send successfull"),a(!1)}},children:[i.jsx(O.Z,{children:"Reject Reason"}),i.jsx(T.Z,{children:i.jsx(_.Z,{multiline:!0,autoFocus:!0,margin:"dense",id:"rejected_reason",name:"rejected_reason",label:"Reason",fullWidth:!0,variant:"standard"})}),(0,i.jsxs)(A.Z,{children:[i.jsx(o.Z,{color:"error",onClick:()=>a(!1),children:"Cancel"}),i.jsx(o.Z,{color:"success",type:"submit",children:"OK"})]})]})}),i.jsx(j.Z,{})]})};var Q=r(45882);let F=()=>{let{id:e}=(0,s.useParams)(),{data:t}=(0,Q.kJ)(q._n,{variables:{id:e}});return i.jsx(i.Fragment,{children:(0,i.jsxs)(a.ZP,{container:!0,spacing:6,children:[i.jsx(a.ZP,{item:!0,xs:12,md:9,children:i.jsx(D,{quotationData:t?.quotations_by_pk})}),(0,i.jsxs)(a.ZP,{item:!0,xs:12,md:3,className:"flex flex-col gap-5",children:[i.jsx(E,{quotationData:t?.quotations_by_pk}),i.jsx(S,{onButtonClick:()=>{window.print()},quotationData:t?.quotations_by_pk})]})]})})}},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},31976:(e,t,r)=>{"use strict";var i=r(74549);r.o(i,"redirect")&&r.d(t,{redirect:function(){return i.redirect}})},74549:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return s},RedirectType:function(){return i.RedirectType},notFound:function(){return a.notFound},permanentRedirect:function(){return i.permanentRedirect},redirect:function(){return i.redirect}});let i=r(84365),a=r(35984);class n extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class s extends URLSearchParams{append(){throw new n}delete(){throw new n}set(){throw new n}sort(){throw new n}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},35984:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return a},notFound:function(){return i}});let r="NEXT_NOT_FOUND";function i(){let e=Error(r);throw e.digest=r,e}function a(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},78429:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},84365:(e,t,r)=>{"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return i},getRedirectError:function(){return d},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return _},getURLFromRedirectError:function(){return p},isRedirectError:function(){return u},permanentRedirect:function(){return c},redirect:function(){return l}});let a=r(54580),n=r(72934),s=r(78429),o="NEXT_REDIRECT";function d(e,t,r){void 0===r&&(r=s.RedirectStatusCode.TemporaryRedirect);let i=Error(o);i.digest=o+";"+t+";"+e+";"+r+";";let n=a.requestAsyncStorage.getStore();return n&&(i.mutableCookies=n.mutableCookies),i}function l(e,t){void 0===t&&(t="replace");let r=n.actionAsyncStorage.getStore();throw d(e,t,(null==r?void 0:r.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.TemporaryRedirect)}function c(e,t){void 0===t&&(t="replace");let r=n.actionAsyncStorage.getStore();throw d(e,t,(null==r?void 0:r.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.PermanentRedirect)}function u(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,i,a]=e.digest.split(";",4),n=Number(a);return t===o&&("replace"===r||"push"===r)&&"string"==typeof i&&!isNaN(n)&&n in s.RedirectStatusCode}function p(e){return u(e)?e.digest.split(";",3)[2]:null}function _(e){if(!u(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!u(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(i||(i={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},33641:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var i=r(79703);r(31976);var a=r(92334);let n=(0,a.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\views\quotations\preview\index.jsx`),{__esModule:s,$$typeof:o}=n;n.default;let d=(0,a.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\views\quotations\preview\index.jsx#default`),l=async()=>i.jsx(d,{})},12612:()=>{},45882:(e,t,r)=>{"use strict";r.d(t,{kJ:()=>v});var i=r(3513),a=r(86415),n=r.t(a,2),s=r(67733),o=r(9407),d=r(34408),l=r(19328),c=r(90406),u=r(94491),p=Symbol.for("apollo.hook.wrappers"),_=r(4261),m=n.use||function(e){var t=(0,_.Bd)(e);switch(t.status){case"pending":throw t;case"rejected":throw t.reason;case"fulfilled":return t.value}},h=r(93868),f=r(70194),x=r(99375),g=Symbol.for("apollo.skipToken");function v(e,t){var r,i,a,n;return void 0===t&&(t=Object.create(null)),(r=y,(n=(a=(i=(0,c.x)("object"==typeof t?t.client:void 0).queryManager)&&i[p])&&a.useSuspenseQuery)?n(r):r)(e,t)}function y(e,t){var r,n,d,l,p,_,v,y=(0,c.x)(t.client),$=(0,f.Y)(y),b=(p=(r={client:y,query:e,options:t}).client,_=r.query,v=r.options,n=function(){if(v===g)return{query:_,fetchPolicy:"standby"};var e,t,r,a,n,o=v.fetchPolicy||(null===(n=p.defaultOptions.watchQuery)||void 0===n?void 0:n.fetchPolicy)||"cache-first",d=(0,i.pi)((0,i.pi)({},v),{fetchPolicy:o,query:_,notifyOnNetworkStatusChange:!1,nextFetchPolicy:void 0});return!1!==globalThis.__DEV__&&(t=d.query,r=d.fetchPolicy,a=d.returnPartialData,(0,u.Vp)(t,u.n_.Query),void 0===(e=r)&&(e="cache-first"),(0,s.kG)(["cache-first","network-only","no-cache","cache-and-network"].includes(e),58,e),"no-cache"===r&&a&&!1!==globalThis.__DEV__&&s.kG.warn(59)),v.skip&&(d.fetchPolicy="standby"),d},d=[p,v,_],(l=a.useRef()).current&&(0,h.D)(l.current.deps,d)||(l.current={value:n(),deps:d}),l.current.value),P=b.fetchPolicy,w=b.variables,S=t.queryKey,k=(0,i.ev)([e,(0,x.B)(w)],[].concat(void 0===S?[]:S),!0),Z=$.getQueryRef(k,function(){return y.watchQuery(b)}),N=a.useState([Z.key,Z.promise]),q=N[0],C=N[1];q[0]!==Z.key&&(q[0]=Z.key,q[1]=Z.promise);var R=q[1];Z.didChangeOptions(b)&&(q[1]=R=Z.applyOptions(b)),a.useEffect(function(){var e=Z.retain(),t=Z.listen(function(e){C([Z.key,e])});return function(){t(),e()}},[Z]);var D=a.useMemo(function(){var e=j(Z.result);return{loading:!1,data:Z.result.data,networkStatus:e?o.Ie.error:o.Ie.ready,error:e}},[Z.result]),M="standby"===P?D:m(R),O=a.useCallback(function(e){var t=Z.fetchMore(e);return C([Z.key,Z.promise]),t},[Z]),T=a.useCallback(function(e){var t=Z.refetch(e);return C([Z.key,Z.promise]),t},[Z]),A=Z.observable.subscribeToMore;return a.useMemo(function(){return{client:y,data:M.data,error:j(M),networkStatus:M.networkStatus,fetchMore:O,refetch:T,subscribeToMore:A}},[y,O,T,M,A])}function j(e){return(0,l.O)(e.errors)?new d.cA({graphQLErrors:e.errors}):e.error}},94491:(e,t,r)=>{"use strict";r.d(t,{Vp:()=>u,n_:()=>i});var i,a,n=r(67733),s=r(21454),o=r(55047),d=r(1262);function l(e){var t;switch(e){case i.Query:t="Query";break;case i.Mutation:t="Mutation";break;case i.Subscription:t="Subscription"}return t}function c(e){a||(a=new s.s(o.Q.parser||1e3));var t,r,d=a.get(e);if(d)return d;(0,n.kG)(!!e&&!!e.kind,62,e);for(var l=[],c=[],u=[],p=[],_=0,m=e.definitions;_<m.length;_++){var h=m[_];if("FragmentDefinition"===h.kind){l.push(h);continue}if("OperationDefinition"===h.kind)switch(h.operation){case"query":c.push(h);break;case"mutation":u.push(h);break;case"subscription":p.push(h)}}(0,n.kG)(!l.length||c.length||u.length||p.length,63),(0,n.kG)(c.length+u.length+p.length<=1,64,e,c.length,p.length,u.length),r=c.length?i.Query:i.Mutation,c.length||u.length||(r=i.Subscription);var f=c.length?c:u.length?u:p;(0,n.kG)(1===f.length,65,e,f.length);var x=f[0];t=x.variableDefinitions||[];var g={name:x.name&&"Name"===x.name.kind?x.name.value:"data",type:r,variables:t};return a.set(e,g),g}function u(e,t){var r=c(e),i=l(t),a=l(r.type);(0,n.kG)(r.type===t,66,i,i,a)}(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(i||(i={})),c.resetCache=function(){a=void 0},!1!==globalThis.__DEV__&&(0,d.zP)("parser",function(){return a?a.size:0})}};var t=require("../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[9357,6491,1598,8743,8520,168,195,785,1766,8894,9800,1738,1908,5670,6532],()=>r(79773));module.exports=i})();