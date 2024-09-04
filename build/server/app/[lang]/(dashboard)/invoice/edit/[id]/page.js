(()=>{var e={};e.id=1323,e.ids=[1323],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},35113:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>o}),i(15307),i(5114),i(32687),i(85133);var s=i(79193),a=i(71854),n=i(33997),r=i.n(n),d=i(73320),l={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>d[e]);i.d(t,l);let o=["",{children:["[lang]",{children:["(dashboard)",{children:["invoice",{children:["edit",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,15307)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/invoice/edit/[id]/page.jsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5114)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,32687)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/invoice/edit/[id]/page.jsx"],u="/[lang]/(dashboard)/invoice/edit/[id]/page",m={require:i,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[lang]/(dashboard)/invoice/edit/[id]/page",pathname:"/[lang]/invoice/edit/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},87847:(e,t,i)=>{Promise.resolve().then(i.bind(i,13159)),Promise.resolve().then(i.bind(i,43687)),Promise.resolve().then(i.bind(i,69479))},13159:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s.ZP,getGridUtilityClass:()=>a.H,gridClasses:()=>a.Z});var s=i(97687),a=i(35638)},91347:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var s=i(27486);i(618);var a=i(72277),n=i(22405);let r=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,n.q)();return s.jsx("div",{children:s.jsx(a.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>w,DR:()=>D,Ff:()=>u,HT:()=>_,Hd:()=>j,J2:()=>G,J9:()=>l,JB:()=>I,KN:()=>k,Lh:()=>W,MP:()=>r,MZ:()=>A,O7:()=>z,Qm:()=>B,SB:()=>x,SZ:()=>b,Sf:()=>g,Si:()=>F,Zq:()=>N,aY:()=>m,bc:()=>U,dE:()=>f,en:()=>M,hB:()=>a,he:()=>T,hq:()=>n,jN:()=>q,ju:()=>h,oe:()=>p,tC:()=>S,tt:()=>y,u7:()=>c,uv:()=>o,vl:()=>C,wU:()=>$,yG:()=>P,yn:()=>v,z7:()=>Z,zN:()=>d});var s=i(12738);let a=(0,s.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,n=(0,s.Ps)`
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
`,r=(0,s.Ps)`
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
`,d=(0,s.Ps)`
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
`,l=(0,s.Ps)`
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
`,o=(0,s.Ps)`
  mutation addNews($data: news_insert_input!) {
    insert_news_one(object: $data) {
      id
    }
  }
`,c=(0,s.Ps)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`,u=(0,s.Ps)`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`,m=(0,s.Ps)`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`,p=(0,s.Ps)`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`,x=(0,s.Ps)`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`,h=(0,s.Ps)`
  mutation deleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
    }
  }
`;(0,s.Ps)`
  mutation deleteInvoice($id: uuid!) {
    delete_invoices_by_pk(id: $id) {
      id
    }
  }
`;let _=(0,s.Ps)`
  mutation aa($id: uuid!) {
    delete_orders_by_pk(id: $id) {
      id
    }
  }
`;(0,s.Ps)`
  mutation deleteDealer($id: uuid!) {
    delete_dealers_by_pk(id: $id) {
      id
    }
  }
`,(0,s.Ps)`
  mutation addDealer($data: dealers_insert_input!) {
    insert_dealers_one(object: $data) {
      id
    }
  }
`;let j=(0,s.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,f=(0,s.Ps)`
  mutation editNewProducts($id: uuid!, $data: news_set_input!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,v=(0,s.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,g=(0,s.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,y=(0,s.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,$=(0,s.Ps)`
  mutation changeOrderStatus($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`,b=(0,s.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,Z=(0,s.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,P=(0,s.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status) {
      message
    }
  }
`,N=(0,s.Ps)`
  mutation changeInvoiceStatus($id: uuid!, $data: invoices_set_input!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`,w=(0,s.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,S=(0,s.Ps)`
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
`,k=(0,s.Ps)`
  mutation sendQInvoice($discounted_amount: numeric!, $quotation_id: uuid!) {
    sendInvoice(discounted_amount: $discounted_amount, quotation_id: $quotation_id) {
      message
    }
  }
`,C=(0,s.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,A=(0,s.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,D=(0,s.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,I=(0,s.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,q=(0,s.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,z=(0,s.Ps)`
  mutation addSeriveCenter($data: service_centers_insert_input!) {
    insert_service_centers_one(object: $data) {
      id
    }
  }
`,M=(0,s.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,T=(0,s.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,B=(0,s.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,W=(0,s.Ps)`
  mutation addDiscount($data: product_discounts_insert_input!) {
    insert_product_discounts_one(object: $data) {
      id
    }
  }
`,U=(0,s.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,F=(0,s.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,G=(0,s.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
    }
  }
`},43687:(e,t,i)=>{"use strict";i.d(t,{default:()=>v});var s=i(27486),a=i(618),n=i(38165),r=i(46811),d=i(42453),l=i(35549),o=i(15532),c=i(97687),u=i(12741),m=i(80013),p=i(74054),x=i(48152),h=i(37368),_=i(5436),j=i(84781),f=i(11158);let v=({id:e})=>{let[t,i]=(0,a.useState)(!1),[v,g]=(0,a.useState)(!1),{lang:y}=(0,r.useParams)();return(0,s.jsxs)(c.ZP,{container:!0,spacing:6,children:[(0,s.jsxs)(c.ZP,{item:!0,xs:12,children:[s.jsx(d.Z,{children:(0,s.jsxs)(l.Z,{className:"flex flex-col gap-4",children:[s.jsx(o.Z,{fullWidth:!0,variant:"contained",className:"capitalize",startIcon:s.jsx("i",{className:"ri-send-plane-line"}),onClick:()=>g(!0),children:"Send Invoice"}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(o.Z,{fullWidth:!0,component:n.default,color:"secondary",variant:"outlined",className:"capitalize",href:(0,f.U)(`/invoice/preview/${e}`,y),children:"Preview"}),s.jsx(o.Z,{fullWidth:!0,color:"secondary",variant:"outlined",className:"capitalize",children:"Save"})]}),s.jsx(o.Z,{fullWidth:!0,color:"success",variant:"contained",className:"capitalize",onClick:()=>i(!0),startIcon:s.jsx("i",{className:"ri-money-dollar-circle-line"}),children:"Add Payment"})]})}),s.jsx(_.Z,{open:t,handleClose:()=>i(!1)}),s.jsx(j.Z,{open:v,handleClose:()=>g(!1)})]}),(0,s.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,s.jsxs)(u.Z,{fullWidth:!0,className:"mbe-4",children:[s.jsx(m.Z,{id:"payment-select",children:"Accept payments via"}),(0,s.jsxs)(p.Z,{fullWidth:!0,defaultValue:"Internet Banking",label:"Accept payments via",labelId:"payment-select",children:[s.jsx(x.Z,{value:"Internet Banking",children:"Internet Banking"}),s.jsx(x.Z,{value:"Debit Card",children:"Debit Card"}),s.jsx(x.Z,{value:"Credit Card",children:"Credit Card"}),s.jsx(x.Z,{value:"Paypal",children:"Paypal"}),s.jsx(x.Z,{value:"UPI Transfer",children:"UPI Transfer"})]})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between gap-6",children:[s.jsx(m.Z,{htmlFor:"invoice-edit-payment-terms",className:"cursor-pointer",children:"Payment Terms"}),s.jsx(h.Z,{defaultChecked:!0,id:"invoice-edit-payment-terms"})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between gap-6",children:[s.jsx(m.Z,{htmlFor:"invoice-edit-client-notes",className:"cursor-pointer",children:"Client Notes"}),s.jsx(h.Z,{id:"invoice-edit-client-notes"})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between gap-6",children:[s.jsx(m.Z,{htmlFor:"invoice-edit-payment-stub",className:"cursor-pointer",children:"Payment Stub"}),s.jsx(h.Z,{id:"invoice-edit-payment-stub"})]})]})]})}},69479:(e,t,i)=>{"use strict";i.d(t,{default:()=>b});var s=i(27486),a=i(618),n=i(97687),r=i(42453),d=i(35549),l=i(30675),o=i(30965),c=i(81239),u=i(74054),m=i(48152),p=i(1416),x=i(15532),h=i(36370),_=i(7556),j=i(80013),f=i(67138),v=i(19396),g=i.n(v),y=i(6096),$=i(32475);let b=({invoiceData:e,id:t,data:i})=>{let[v,b]=(0,a.useState)(i?.[0]||null),[Z,P]=(0,a.useState)(1),[N,w]=(0,a.useState)(new Date(e?.issuedDate??"")),[S,k]=(0,a.useState)(new Date(e?.dueDate??"")),C=(0,f.Z)(e=>e.breakpoints.down("md")),A=e=>{e.preventDefault(),e.target.closest(".repeater-item").remove()};return s.jsx(s.Fragment,{children:s.jsx(r.Z,{children:s.jsx(d.Z,{className:"sm:!p-12",children:(0,s.jsxs)(n.ZP,{container:!0,spacing:6,children:[s.jsx(n.ZP,{item:!0,xs:12,children:s.jsx("div",{className:"p-6 rounded bg-actionHover",children:(0,s.jsxs)("div",{className:"flex justify-between gap-4 flex-col sm:flex-row",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-6",children:[s.jsx("div",{className:"flex items-center",children:s.jsx(y.Z,{})}),(0,s.jsxs)("div",{children:[s.jsx(l.Z,{color:"text.primary",children:"Office 149, 450 South Brand Brooklyn"}),s.jsx(l.Z,{color:"text.primary",children:"San Diego County, CA 91905, USA"}),s.jsx(l.Z,{color:"text.primary",children:"+1 (123) 456 7891, +44 (876) 543 2198"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(l.Z,{variant:"h5",className:"min-is-[95px]",children:"Invoice"}),s.jsx(o.Z,{fullWidth:!0,size:"small",value:t,InputProps:{disabled:!0,startAdornment:s.jsx(c.Z,{position:"start",children:"#"})}})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[s.jsx(l.Z,{className:"min-is-[95px] mie-4",color:"text.primary",children:"Date Issued:"}),s.jsx($.Z,{boxProps:{className:"is-full"},selected:N,id:"payment-date",onChange:e=>null!==e&&w(e),customInput:s.jsx(o.Z,{fullWidth:!0,size:"small"})})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[s.jsx(l.Z,{className:"min-is-[95px] mie-4",color:"text.primary",children:"Date Due:"}),s.jsx($.Z,{boxProps:{className:"is-full"},selected:S,id:"payment-date",onChange:e=>null!==e&&k(e),customInput:s.jsx(o.Z,{fullWidth:!0,size:"small"})})]})]})]})})}),s.jsx(n.ZP,{item:!0,xs:12,children:(0,s.jsxs)("div",{className:"flex justify-between flex-col gap-4 flex-wrap sm:flex-row",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[s.jsx(l.Z,{className:"font-medium",color:"text.primary",children:"Invoice To:"}),s.jsx(u.Z,{className:"is-1/2 min-is-[220px] sm:is-auto",size:"small",value:v?.id,onChange:e=>{b(i?.slice(0,5).filter(t=>t.id===e.target.value)[0]||null)},children:i?.slice(0,5).map((e,t)=>s.jsx(m.Z,{value:e.id,children:e.name},t))}),(0,s.jsxs)("div",{children:[s.jsx(l.Z,{children:v?.name}),s.jsx(l.Z,{children:v?.company}),s.jsx(l.Z,{children:v?.address}),s.jsx(l.Z,{children:v?.contact}),s.jsx(l.Z,{children:v?.companyEmail})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[s.jsx(l.Z,{className:"font-medium",color:"text.primary",children:"Bill To:"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(l.Z,{className:"min-is-[100px]",children:"Total Due:"}),s.jsx(l.Z,{children:"$12,110.55"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(l.Z,{className:"min-is-[100px]",children:"Bank name:"}),s.jsx(l.Z,{children:"American Bank"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(l.Z,{className:"min-is-[100px]",children:"Country:"}),s.jsx(l.Z,{children:"United States"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(l.Z,{className:"min-is-[100px]",children:"IBAN:"}),s.jsx(l.Z,{children:"ETD95476213874685"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(l.Z,{className:"min-is-[100px]",children:"SWIFT code:"}),s.jsx(l.Z,{children:"BR91905"})]})]})]})]})}),s.jsx(n.ZP,{item:!0,xs:12,children:s.jsx(_.Z,{className:"border-dashed"})}),(0,s.jsxs)(n.ZP,{item:!0,xs:12,children:[Array.from(Array(Z).keys()).map((e,t)=>(0,s.jsxs)("div",{className:g()("repeater-item flex relative mbe-4 border rounded",{"mbs-8":!C,"!mbs-14":0!==t&&!C,"gap-5":C}),children:[(0,s.jsxs)(n.ZP,{container:!0,spacing:5,className:"m-0 pbe-5",children:[(0,s.jsxs)(n.ZP,{item:!0,lg:6,md:5,xs:12,children:[s.jsx(l.Z,{className:"font-medium md:absolute md:-top-8",color:"text.primary",children:"Item"}),(0,s.jsxs)(u.Z,{fullWidth:!0,size:"small",defaultValue:"App Design",className:"mbe-5",children:[s.jsx(m.Z,{value:"App Design",children:"App Design"}),s.jsx(m.Z,{value:"App Customization",children:"App Customization"}),s.jsx(m.Z,{value:"ABC Template",children:"ABC Template"}),s.jsx(m.Z,{value:"App Development",children:"App Development"})]}),s.jsx(o.Z,{rows:2,fullWidth:!0,multiline:!0,size:"small",defaultValue:"Customization & Bug Fixes"})]}),(0,s.jsxs)(n.ZP,{item:!0,lg:2,md:3,xs:12,children:[s.jsx(l.Z,{className:"font-medium md:absolute md:-top-8",color:"text.primary",children:"Cost"}),s.jsx(o.Z,{...C&&{fullWidth:!0},size:"small",type:"number",placeholder:"24",defaultValue:"24",className:"mbe-5",InputProps:{inputProps:{min:0}}}),(0,s.jsxs)("div",{className:"flex flex-col",children:[s.jsx(l.Z,{component:"span",color:"text.primary",children:"Discount:"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[s.jsx(l.Z,{component:"span",color:"text.primary",children:"0%"}),s.jsx(h.Z,{title:"Tax 1",placement:"top",children:s.jsx(l.Z,{component:"span",color:"text.primary",children:"0%"})}),s.jsx(h.Z,{title:"Tax 2",placement:"top",children:s.jsx(l.Z,{component:"span",color:"text.primary",children:"0%"})})]})]})]}),(0,s.jsxs)(n.ZP,{item:!0,md:2,xs:12,children:[s.jsx(l.Z,{className:"font-medium md:absolute md:-top-8",color:"text.primary",children:"Hours"}),s.jsx(o.Z,{...C&&{fullWidth:!0},size:"small",type:"number",placeholder:"1",defaultValue:"1",InputProps:{inputProps:{min:0}}})]}),(0,s.jsxs)(n.ZP,{item:!0,md:2,xs:12,children:[s.jsx(l.Z,{className:"font-medium md:absolute md:-top-8",color:"text.primary",children:"Price"}),s.jsx(l.Z,{children:"$24.00"})]})]}),s.jsx("div",{className:"flex flex-col justify-start border-is",children:s.jsx(p.Z,{size:"small",onClick:A,children:s.jsx("i",{className:"ri-close-line text-actionActive text-2xl"})})})]},t)),s.jsx(n.ZP,{item:!0,xs:12,children:s.jsx(x.Z,{size:"small",variant:"contained",onClick:()=>P(Z+1),startIcon:s.jsx("i",{className:"ri-add-line"}),children:"Add Item"})})]}),s.jsx(n.ZP,{item:!0,xs:12,children:s.jsx(_.Z,{className:"border-dashed"})}),s.jsx(n.ZP,{item:!0,xs:12,children:(0,s.jsxs)("div",{className:"flex justify-between flex-col gap-4 sm:flex-row",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4 order-2 sm:order-[unset]",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx(l.Z,{className:"font-medium",color:"text.primary",children:"Salesperson:"}),s.jsx(o.Z,{size:"small",defaultValue:"Tommy Shelby"})]}),s.jsx(o.Z,{size:"small",defaultValue:"Thanks for your business"})]}),(0,s.jsxs)("div",{className:"min-is-[200px]",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx(l.Z,{children:"Subtotal:"}),s.jsx(l.Z,{className:"font-medium",color:"text.primary",children:"$1800"})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx(l.Z,{children:"Discount:"}),s.jsx(l.Z,{className:"font-medium",color:"text.primary",children:"$28"})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx(l.Z,{children:"Tax:"}),s.jsx(l.Z,{className:"font-medium",color:"text.primary",children:"21%"})]}),s.jsx(_.Z,{className:"mlb-2"}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx(l.Z,{children:"Total:"}),s.jsx(l.Z,{className:"font-medium",color:"text.primary",children:"$1690"})]})]})]})}),s.jsx(n.ZP,{item:!0,xs:12,children:s.jsx(_.Z,{className:"border-dashed"})}),(0,s.jsxs)(n.ZP,{item:!0,xs:12,children:[s.jsx(j.Z,{htmlFor:"invoice-note",className:"inline-flex mbe-1 text-textPrimary",children:"Note:"}),s.jsx(o.Z,{id:"invoice-note",rows:2,fullWidth:!0,multiline:!0,className:"border rounded",defaultValue:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"})]})]})})})})}},5436:(e,t,i)=>{"use strict";i.d(t,{Z:()=>$});var s=i(27486),a=i(618),n=i(40136),r=i(1416),d=i(30675),l=i(30965),o=i(12741),c=i(80013),u=i(81239),m=i(74054),p=i(48152),x=i(15532),h=i(7556),_=i(32475),j=i(38860),f=i(66718),v=i(91347),g=i(22405);let y={paymentDate:new Date,paymentMethod:"select-method",paymentAmount:500,paymentNote:""},$=({open:e,handleClose:t,invoiceData:i,paymentMethods:$})=>{let{setGlobalMsg:b}=(0,g.q)(),[Z,P]=(0,a.useState)(!1),[N,w]=(0,a.useState)(y),[S]=(0,j.D)(f.tC),k=async e=>{e.preventDefault();try{P(!0),await S({variables:{amount:N.amount,invoice_id:i.id,payment_date:N.payment_date,payment_method:N.payment_method}}),P(!1),b("✅ Payment Send Successful"),w(""),t()}catch(e){console.log("Error ",e)}},C=()=>{t(),w(y)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ZP,{open:e,anchor:"right",variant:"temporary",onClose:C,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,s.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[s.jsx(d.Z,{variant:"h5",children:"Add Payment"}),s.jsx(r.Z,{size:"small",onClick:C,children:s.jsx("i",{className:"ri-close-line text-2xl"})})]}),s.jsx(h.Z,{}),(0,s.jsxs)("div",{className:"p-5",children:[(0,s.jsxs)(d.Z,{className:"flex justify-end text-red-600",children:["Balance : ",i.balance?i.balance.toLocaleString():0]}),(0,s.jsxs)("form",{onSubmit:k,className:"flex flex-col gap-5 mt-5",children:[s.jsx(l.Z,{fullWidth:!0,id:"amount",label:"Payment Amount",type:"number",InputProps:{startAdornment:s.jsx(u.Z,{position:"start"})},value:N.amount,onChange:e=>w({...N,amount:+e.target.value})}),s.jsx(_.Z,{selected:N.payment_date,id:"payment-date",onChange:e=>null!==e&&w({...N,payment_date:e}),customInput:s.jsx(l.Z,{fullWidth:!0,label:"Payment Date"})}),(0,s.jsxs)(o.Z,{fullWidth:!0,children:[s.jsx(c.Z,{htmlFor:"payment-method",children:"Payment Method"}),(0,s.jsxs)(m.Z,{label:"Payment Method",labelId:"payment-method",id:"payment-method-select",value:N.payment_method,onChange:e=>w({...N,payment_method:e.target.value}),children:[s.jsx(p.Z,{value:"select-method",disabled:!0,children:"Select Payment Method"}),$.payment_methods.map(e=>s.jsx(p.Z,{value:e.name,children:e.name},e.id))]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(x.Z,{loading:Z,size:"large",variant:"contained",type:"submit",children:"Send"}),s.jsx(x.Z,{size:"large",variant:"outlined",color:"secondary",type:"reset",onClick:C,children:"Cancel"})]})]})]})]}),s.jsx(v.Z,{})]})}},84781:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var s=i(27486),a=i(618),n=i(40136),r=i(1416),d=i(30675),l=i(30965),o=i(15532),c=i(7556),u=i(58894);let m={from:"shelbyComapny@email.com",to:"qConsolidated@email.com",subject:"Invoice of purchased Admin Templates",message:`Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`},p=({open:e,handleClose:t})=>{let[i,p]=(0,a.useState)(m),[x,h]=(0,a.useState)(""),_=(0,a.useRef)(null),{control:j,reset:f,handleSubmit:v,formState:{errors:g}}=(0,u.cI)({defaultValues:{title:"",description:""}}),y=async e=>{},$=()=>{t(),p(m)};return(0,s.jsxs)(n.ZP,{open:e,anchor:"right",variant:"temporary",onClose:$,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,s.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[s.jsx(d.Z,{variant:"h5",children:"Send Invoice File"}),s.jsx(r.Z,{size:"small",onClick:$,children:s.jsx("i",{className:"ri-close-line text-2xl"})})]}),s.jsx(c.Z,{}),s.jsx("div",{className:"p-5",children:(0,s.jsxs)("form",{onSubmit:v(e=>y(e)),className:"flex flex-col gap-5",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(l.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:x,className:"flex-auto",InputProps:{readOnly:!0,endAdornment:x?s.jsx(InputAdornment,{position:"end",children:s.jsx(r.Z,{size:"small",edge:"end",onClick:()=>h(""),children:s.jsx("i",{className:"ri-close-line"})})}):null}}),(0,s.jsxs)(o.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",s.jsx("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:t}=e.target;t&&0!==t.length&&h(t[0].name)},ref:_})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(o.Z,{variant:"contained",type:"submit",children:"Add"}),s.jsx(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:$,children:"Discard"})]})]})})]})}},44346:(e,t,i)=>{let{createProxy:s}=i(92334);e.exports=s("/home/axra/AXRA/office-cicd/alpha-admin/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1__@emotion+styled_brxipnv4yvqheosgxcawdxdyay/node_modules/@mui/material/Grid/index.js")},15307:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>j});var s=i(79703),a=i(31976),n=i(44346),r=i.n(n),d=i(92334);let l=(0,d.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/invoice/edit/EditCard.jsx`),{__esModule:o,$$typeof:c}=l;l.default;let u=(0,d.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/invoice/edit/EditCard.jsx#default`),m=(0,d.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/invoice/edit/EditActions.jsx`),{__esModule:p,$$typeof:x}=m;m.default;let h=(0,d.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/invoice/edit/EditActions.jsx#default`);var _=i(45170);let j=async({params:e})=>{let t=await (0,_.getInvoiceData)(),i=t?.filter(t=>t.id===e.id)[0];return i||(0,a.redirect)("/not-found"),i?(0,s.jsxs)(r(),{container:!0,spacing:6,children:[s.jsx(r(),{item:!0,xs:12,md:9,children:s.jsx(u,{data:t,invoiceData:i,id:e.id})}),s.jsx(r(),{item:!0,xs:12,md:3,children:s.jsx(h,{id:e.id})})]}):null}},12576:(e,t,i)=>{"use strict";i.d(t,{Vp:()=>u,n_:()=>s});var s,a,n=i(5075),r=i(22586),d=i(91730),l=i(18453);function o(e){var t;switch(e){case s.Query:t="Query";break;case s.Mutation:t="Mutation";break;case s.Subscription:t="Subscription"}return t}function c(e){a||(a=new r.s(d.Q.parser||1e3));var t,i,l=a.get(e);if(l)return l;(0,n.kG)(!!e&&!!e.kind,62,e);for(var o=[],c=[],u=[],m=[],p=0,x=e.definitions;p<x.length;p++){var h=x[p];if("FragmentDefinition"===h.kind){o.push(h);continue}if("OperationDefinition"===h.kind)switch(h.operation){case"query":c.push(h);break;case"mutation":u.push(h);break;case"subscription":m.push(h)}}(0,n.kG)(!o.length||c.length||u.length||m.length,63),(0,n.kG)(c.length+u.length+m.length<=1,64,e,c.length,m.length,u.length),i=c.length?s.Query:s.Mutation,c.length||u.length||(i=s.Subscription);var _=c.length?c:u.length?u:m;(0,n.kG)(1===_.length,65,e,_.length);var j=_[0];t=j.variableDefinitions||[];var f={name:j.name&&"Name"===j.name.kind?j.name.value:"data",type:i,variables:t};return a.set(e,f),f}function u(e,t){var i=c(e),s=o(t),a=o(i.type);(0,n.kG)(i.type===t,66,s,s,a)}(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(s||(s={})),c.resetCache=function(){a=void 0},!1!==globalThis.__DEV__&&(0,l.zP)("parser",function(){return a?a.size:0})}};var t=require("../../../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),s=t.X(0,[9357,6491,4588,3440,3198,7541,3133,965,7110,8894,136,264,2990,5396,751,5262,2475,603,7364,9947,4989],()=>i(35113));module.exports=s})();