(()=>{var e={};e.id=6913,e.ids=[6913],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},26295:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>d.a,__next_app__:()=>_,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>l}),i(27429),i(5114),i(32687),i(85133);var a=i(79193),r=i(71854),s=i(33997),d=i.n(s),n=i(73320),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);i.d(t,o);let l=["",{children:["[lang]",{children:["(dashboard)",{children:["invoice",{children:["list",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,27429)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\invoice\\list\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5114)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,32687)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\invoice\\list\\page.jsx"],c="/[lang]/(dashboard)/invoice/list/page",_={require:i,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/[lang]/(dashboard)/invoice/list/page",pathname:"/[lang]/invoice/list",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},93765:(e,t,i)=>{Promise.resolve().then(i.bind(i,28385))},51259:(e,t,i)=>{"use strict";i.d(t,{Z:()=>g});var a=i(13211),r=i(6520),s=i(618),d=i(69360),n=i(47150),o=i(26829),l=i(28502),u=i(78360),c=i(27486);let _=["className","component"],m=e=>{let{classes:t}=e;return(0,n.Z)({root:["root"]},u.N,t)},p=(0,o.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),g=s.forwardRef(function(e,t){let i=(0,l.i)({props:e,name:"MuiCardContent"}),{className:s,component:n="div"}=i,o=(0,r.Z)(i,_),u=(0,a.Z)({},i,{component:n}),g=m(u);return(0,c.jsx)(p,(0,a.Z)({as:n,className:(0,d.Z)(g.root,s),ownerState:u,ref:t},o))})},78360:(e,t,i)=>{"use strict";i.d(t,{N:()=>s,Z:()=>d});var a=i(66875),r=i(62209);function s(e){return(0,r.ZP)("MuiCardContent",e)}let d=(0,a.Z)("MuiCardContent",["root"])},93889:(e,t,i)=>{"use strict";i.d(t,{Pg:()=>n,c7:()=>r,sE:()=>d,uH:()=>a,zh:()=>s});let a={completed:"success",rejected:"error","received token":"info","picking up":"primary",processing:"warning",delivering:"secondary"},r={pending:"warning",completed:"success",accepted:"info",rejected:"error",negotiation:"primary"},s={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},d={paid:"secondary","partially paid":"info",rejected:"error",unpaid:"primary",pending:"warning"},n={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>C,DR:()=>R,Ff:()=>c,HT:()=>$,Hd:()=>x,J2:()=>G,J9:()=>o,JB:()=>A,KN:()=>q,Lh:()=>J,MP:()=>d,MZ:()=>I,O7:()=>E,Qm:()=>L,SB:()=>p,SZ:()=>j,Sf:()=>P,Si:()=>H,Zq:()=>N,aY:()=>_,bc:()=>O,dE:()=>h,dn:()=>B,en:()=>F,hB:()=>r,he:()=>T,hq:()=>s,jN:()=>D,ju:()=>g,mU:()=>w,mt:()=>z,oe:()=>m,pE:()=>Q,rV:()=>M,si:()=>V,tC:()=>Z,tt:()=>b,tz:()=>f,u7:()=>u,ui:()=>W,uv:()=>l,vl:()=>U,wU:()=>y,yG:()=>k,yn:()=>v,z7:()=>S,zN:()=>n});var a=i(12738);let r=(0,a.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,s=(0,a.Ps)`
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
`,d=(0,a.Ps)`
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
`,n=(0,a.Ps)`
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
    }
  }
`,o=(0,a.Ps)`
  mutation editProduct(
    $id: uuid!
    $title: String!
    $description_html: String!
    $brand_id: uuid!
    $category_id: uuid!
    $serial_number: String
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
`,l=(0,a.Ps)`
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
`,u=(0,a.Ps)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`,c=(0,a.Ps)`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`,_=(0,a.Ps)`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`,m=(0,a.Ps)`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`,p=(0,a.Ps)`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`,g=(0,a.Ps)`
  mutation deleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
    }
  }
`;(0,a.Ps)`
  mutation deleteInvoice($id: uuid!) {
    delete_invoices_by_pk(id: $id) {
      id
    }
  }
`;let $=(0,a.Ps)`
  mutation aa($id: uuid!) {
    delete_orders_by_pk(id: $id) {
      id
    }
  }
`;(0,a.Ps)`
  mutation deleteDealer($id: uuid!) {
    delete_dealers_by_pk(id: $id) {
      id
    }
  }
`,(0,a.Ps)`
  mutation addDealer($data: dealers_insert_input!) {
    insert_dealers_one(object: $data) {
      id
    }
  }
`;let x=(0,a.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,h=(0,a.Ps)`
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
`,v=(0,a.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,P=(0,a.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,b=(0,a.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,y=(0,a.Ps)`
  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {
    updateServiceStatus(service_token_id: $service_token_id, status: $status) {
      message
    }
  }
`,f=(0,a.Ps)`
  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {
    acceptServiceToken(
      is_warranty_valid: $is_warranty_valid
      service_fee: $service_fee
      service_token_id: $service_token_id
    ) {
      message
    }
  }
`,w=(0,a.Ps)`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`,j=(0,a.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,S=(0,a.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,k=(0,a.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!, $rejected_reason: String) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,N=(0,a.Ps)`
  mutation updateInvoiceStatus($invoice_id: uuid!, $status: String!, $rejected_reason: String) {
    updateInvoiceStatus(invoice_id: $invoice_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,C=(0,a.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,Z=(0,a.Ps)`
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
`,q=(0,a.Ps)`
  mutation sendQInvoice($quotation_id: uuid!) {
    sendInvoice(quotation_id: $quotation_id) {
      message
    }
  }
`,U=(0,a.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,I=(0,a.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,R=(0,a.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,A=(0,a.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,M=(0,a.Ps)`
  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {
    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      email
      role
    }
  }
`,D=(0,a.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,E=(0,a.Ps)`
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
`,F=(0,a.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,T=(0,a.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      phone
      address
    }
  }
`,L=(0,a.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,z=(0,a.Ps)`
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
`,J=(0,a.Ps)`
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
`,B=(0,a.Ps)`
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
`,O=(0,a.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,H=(0,a.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,G=(0,a.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`,Q=(0,a.Ps)`
  mutation imageUpload($data: product_medias_insert_input!) {
    insert_product_medias_one(object: $data) {
      id
      product_id
      media_url
      media_type
    }
  }
`,V=(0,a.Ps)`
  mutation deleteProductImage($id: uuid!) {
    delete_product_medias_by_pk(id: $id) {
      id
      media_url
      media_type
    }
  }
`,W=(0,a.Ps)`
  mutation resetUserPassword($user_id: uuid!, $confirmNewPassword: String!, $newPassword: String!) {
    UpdateUserPassword(confirmNewPassword: $confirmNewPassword, user_id: $user_id, newPassword: $newPassword) {
      message
    }
  }
`},26808:(e,t,i)=>{"use strict";i.d(t,{Q:()=>a});let a=e=>e.split(/\s/).reduce((e,t)=>e+=t.slice(0,1),"")},28385:(e,t,i)=>{"use strict";i.d(t,{default:()=>T});var a=i(27486),r=i(61766),s=i(618),d=i(38165),n=i(46811),o=i(69121),l=i(51259),u=i(12964),c=i(72660),_=i(16561),m=i(9594),p=i(30785),g=i(44182),$=i(50822),x=i(95727),h=i(23467),v=i(2598),P=i(19396),b=i.n(P),y=i(61359),f=i(36514),w=i(57229);i(48398);var j=i(81636);i(26808);var S=i(11158),k=i(31538),N=i.n(k),C=i(45882),Z=i(25009),q=i(86528);i(66718);var U=i(93889),I=i(24458);let R=(e,t,i,a)=>{let r=(0,y.O4)(e.getValue(t),i);return a({itemRank:r}),r.passed},A=({value:e,onChange:t,debounce:i=500,...r})=>{let[d,n]=(0,s.useState)(e);return(0,s.useEffect)(()=>{n(e)},[e]),(0,s.useEffect)(()=>{let e=setTimeout(()=>{t(d)},i);return()=>clearTimeout(e)},[d]),a.jsx(p.Z,{...r,value:d,onChange:e=>n(e.target.value),size:"small"})},M=(0,f.Cl)(),D=[{label:"Invoice Number",key:"invoice_number"},{label:"UserName",key:"name"},{label:"Balance",key:"balance"},{label:"Total",key:"total"},{label:"Status",key:"status"},{label:"Created At",key:"created_at"},{label:"Updated At",key:"updated_at"}],E=()=>{let{data:e}=(0,C.kJ)(Z.FL),{data:t}=(0,C.kJ)(Z.Ux),[i,r]=(0,s.useState)(""),[p,P]=(0,s.useState)({}),[y,j]=(0,s.useState)(e.invoices),[k,E]=(0,s.useState)(y),[F,T]=(0,s.useState)(""),{lang:L}=(0,n.useParams)(),z=k.map(e=>({...e,username:e.user.name,created_at:new Date(e.created_at).toLocaleString(),updated_at:new Date(e.updated_at).toLocaleString()})),J=(0,s.useMemo)(()=>[M.accessor("invoice_number",{header:"Invoice Number",cell:({row:e})=>a.jsx(c.Z,{component:d.default,href:(0,S.U)(`/invoice/preview/${e.original.id}`,L),color:"primary",children:`${e.original.invoice_number}`})}),M.accessor("user.name",{header:"Client",cell:({row:e})=>(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[a.jsx(q.Z,{src:e.original.user.profile_picture_url,width:"100px",height:"100px"}),a.jsx("div",{className:"flex flex-col",children:a.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.user.name})})]})}),M.accessor("user.user_role.role_name",{header:"User Role",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex flex-col",children:a.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.user?.user_role?.role_name})})})}),M.accessor("balance",{header:"Balance",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex flex-col",children:a.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.balance.toLocaleString()})})})}),M.accessor("total",{header:"Total",cell:({row:e})=>a.jsx(c.Z,{children:`${e.original.total.toLocaleString()}`})}),M.accessor("created_at",{header:"Date",cell:({row:e})=>a.jsx(c.Z,{children:e.original.created_at.substring(0,10)})}),M.accessor("status",{header:"Status",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex flex-col",children:a.jsx(_.Z,{label:e.original.status,color:U.sE[e.original.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})})})}),M.accessor("action",{header:"Action",cell:({row:e})=>a.jsx("div",{className:"flex items-center",children:a.jsx(m.Z,{children:a.jsx(d.default,{href:(0,S.U)(`/invoice/preview/${e.original.id}`,L),className:"flex",children:a.jsx("i",{className:"ri-eye-line text-textSecondary"})})})}),enableSorting:!1})],[y,k]),B=(0,w.b7)({data:k,columns:J,filterFns:{fuzzy:R},state:{rowSelection:p,globalFilter:F},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:R,onRowSelectionChange:P,getCoreRowModel:(0,f.sC)(),onGlobalFilterChange:T,getFilteredRowModel:(0,f.vL)(),getSortedRowModel:(0,f.tj)(),getPaginationRowModel:(0,f.G_)(),getFacetedRowModel:(0,f.o6)(),getFacetedUniqueValues:(0,f.JG)(),getFacetedMinMaxValues:(0,f.HO)()});return(0,s.useEffect)(()=>{E(y?.filter(e=>!i||e.status.toLowerCase().replace(/\s+/g,"-")===i))},[i,y,E]),(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(l.Z,{className:"flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row max-sm:is-full items-center gap-4",children:[a.jsx(A,{value:F??"",onChange:e=>T(String(e)),placeholder:"Search Invoice",className:"max-sm:is-full min-is-[200px]"}),(0,a.jsxs)(g.Z,{fullWidth:!0,size:"small",className:"min-is-[175px]",children:[a.jsx($.Z,{id:"status-select",children:"Invoice Status"}),(0,a.jsxs)(x.Z,{fullWidth:!0,id:"select-status",value:i,onChange:e=>r(e.target.value),label:"Invoice Status",labelId:"status-select",children:[a.jsx(h.Z,{value:"",children:"none"}),t.invoice_status.map(e=>a.jsx(h.Z,{value:e.name,children:e.name},e.id))]})]})]}),a.jsx(u.Z,{color:"secondary",variant:"outlined",startIcon:a.jsx("i",{className:"ri-upload-2-line text-xl"}),className:"max-sm:is-full",children:a.jsx(I.CSVLink,{className:"exportBtn",data:z,headers:D,filename:`all-invoices-${new Date().toISOString()}.csv`,children:"Export"})})]}),a.jsx("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:N().table,children:[a.jsx("thead",{children:B.getHeaderGroups().map(e=>a.jsx("tr",{children:e.headers.map(e=>a.jsx("th",{children:e.isPlaceholder?null:a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:b()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,w.ie)(e.column.columnDef.header,e.getContext()),{asc:a.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:a.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===B.getFilteredRowModel().rows.length?a.jsx("tbody",{children:a.jsx("tr",{children:a.jsx("td",{colSpan:B.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):a.jsx("tbody",{children:B.getRowModel().rows.slice(0,B.getState().pagination.pageSize).map(e=>a.jsx("tr",{className:b()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>a.jsx("td",{children:(0,w.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),a.jsx(v.Z,{rowsPerPageOptions:[10,25,50],component:"div",className:"border-bs",count:B.getFilteredRowModel().rows.length,rowsPerPage:B.getState().pagination.pageSize,page:B.getState().pagination.pageIndex,SelectProps:{inputProps:{"aria-label":"rows per page"}},onPageChange:(e,t)=>{B.setPageIndex(t)},onRowsPerPageChange:e=>B.setPageSize(Number(e.target.value))})]})},F=({count:e,title:t})=>a.jsx("div",{children:a.jsx(o.Z,{children:(0,a.jsxs)(l.Z,{className:"flex justify-between gap-1 ",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1 flex-grow",children:[a.jsx(c.Z,{color:"text.primary",variant:"h3",children:e}),a.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:a.jsx(c.Z,{variant:"h5",color:`${"Paid"===t?"green":"User"===t?"primary":"UnPaid"===t?"error":"Partially Paid"===t?"green":"grey"}`,children:t})})]}),a.jsx(j.default,{skin:"light",variant:"rounded",size:42,children:a.jsx("i",{class:`${"Paid"===t?"ri-wallet-line ":"User"===t?"ri-user-add-line":"UnPaid"===t?"ri-refund-2-line ":"Partially Paid"===t?"ri-wechat-pay-fill ":"grey"}`})})]})})}),T=()=>{let{data:e}=(0,C.kJ)(Z.RF),{data:t}=(0,C.kJ)(Z.R);return(0,a.jsxs)(r.ZP,{container:!0,spacing:6,children:[a.jsx(r.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(F,{count:t.users_aggregate.aggregate.count,title:"User"})}),a.jsx(r.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(F,{count:e.paidInvoice.aggregate.count,title:"Paid"})}),a.jsx(r.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(F,{count:e.UnPaindInvoice.aggregate.count,title:"UnPaid"})}),a.jsx(r.ZP,{item:!0,xs:12,children:a.jsx(E,{})})]})}},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},27429:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var a=i(79703),r=i(92334);let s=(0,r.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\views\invoice\list\index.jsx`),{__esModule:d,$$typeof:n}=s;s.default;let o=(0,r.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\views\invoice\list\index.jsx#default`),l=async()=>a.jsx(o,{})}};var t=require("../../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[9357,6491,1598,8743,8520,168,195,785,1766,6695,3697,2598,5670,6532,6591],()=>i(26295));module.exports=a})();