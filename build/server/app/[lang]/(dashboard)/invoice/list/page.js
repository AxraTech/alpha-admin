(()=>{var e={};e.id=6913,e.ids=[6913],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},71118:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>r.a,__next_app__:()=>_,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>l}),i(42279),i(88418),i(10634),i(35866);var a=i(23191),s=i(88716),d=i(37922),r=i.n(d),n=i(95231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);i.d(t,o);let l=["",{children:["[lang]",{children:["(dashboard)",{children:["invoice",{children:["list",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,42279)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\invoice\\list\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,88418)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,10634)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\invoice\\list\\page.jsx"],u="/[lang]/(dashboard)/invoice/list/page",_={require:i,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[lang]/(dashboard)/invoice/list/page",pathname:"/[lang]/invoice/list",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},76456:(e,t,i)=>{Promise.resolve().then(i.bind(i,37786))},11594:(e,t,i)=>{"use strict";i.d(t,{Pg:()=>n,c7:()=>s,sE:()=>r,uH:()=>a,zh:()=>d});let a={completed:"success",rejected:"error","received token":"info","picking up":"primary",processing:"warning",delivering:"secondary"},s={pending:"warning",completed:"success",accepted:"info",rejected:"error"},d={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},r={paid:"primary","partially paid":"info",completed:"success",unpaid:"error",pending:"warning"},n={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},24443:(e,t,i)=>{"use strict";i.d(t,{BM:()=>C,DR:()=>I,Ff:()=>u,HT:()=>$,Hd:()=>x,J2:()=>H,J9:()=>o,JB:()=>U,KN:()=>A,Lh:()=>z,MP:()=>r,MZ:()=>D,O7:()=>F,Qm:()=>L,SB:()=>p,SZ:()=>S,Sf:()=>P,Si:()=>B,Zq:()=>N,aY:()=>_,bc:()=>O,dE:()=>h,dn:()=>J,en:()=>M,hB:()=>s,he:()=>T,hq:()=>d,jN:()=>E,ju:()=>g,mU:()=>j,oe:()=>m,rV:()=>R,tC:()=>Z,tt:()=>b,tz:()=>f,u7:()=>c,uv:()=>l,vl:()=>q,wU:()=>y,yG:()=>k,yn:()=>v,z7:()=>w,zN:()=>n});var a=i(24293);let s=(0,a.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,d=(0,a.Ps)`
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
`,r=(0,a.Ps)`
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
`,o=(0,a.Ps)`
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
`,c=(0,a.Ps)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`,u=(0,a.Ps)`
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
`,j=(0,a.Ps)`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`,S=(0,a.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,w=(0,a.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,k=(0,a.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status) {
      message
    }
  }
`,N=(0,a.Ps)`
  mutation changeInvoiceStatus($id: uuid!, $data: invoices_set_input!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
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
`,A=(0,a.Ps)`
  mutation sendQInvoice($discounted_amount: numeric!, $quotation_id: uuid!) {
    sendInvoice(discounted_amount: $discounted_amount, quotation_id: $quotation_id) {
      message
    }
  }
`,q=(0,a.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,D=(0,a.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,I=(0,a.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,U=(0,a.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,R=(0,a.Ps)`
  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {
    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      email
      role
    }
  }
`,E=(0,a.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,F=(0,a.Ps)`
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
`,M=(0,a.Ps)`
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
`,J=(0,a.Ps)`
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
`,O=(0,a.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,B=(0,a.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,H=(0,a.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`},20802:(e,t,i)=>{"use strict";i.d(t,{Q:()=>a});let a=e=>e.split(/\s/).reduce((e,t)=>e+=t.slice(0,1),"")},37786:(e,t,i)=>{"use strict";i.d(t,{default:()=>T});var a=i(10326),s=i(32634),d=i(17577),r=i(90434),n=i(35047),o=i(19518),l=i(84187),c=i(87700),u=i(25609),_=i(13405),m=i(48260),p=i(78077),g=i(53913),$=i(918),x=i(56390),h=i(37841),v=i(95684),P=i(48029),b=i.n(P),y=i(5606),f=i(11798),j=i(86508);i(60003);var S=i(40529);i(20802);var w=i(86045),k=i(89307),N=i.n(k),C=i(84875),Z=i(29084),A=i(45643);i(24443);var q=i(11594),D=i(71463);let I=(e,t,i,a)=>{let s=(0,y.O4)(e.getValue(t),i);return a({itemRank:s}),s.passed},U=({value:e,onChange:t,debounce:i=500,...s})=>{let[r,n]=(0,d.useState)(e);return(0,d.useEffect)(()=>{n(e)},[e]),(0,d.useEffect)(()=>{let e=setTimeout(()=>{t(r)},i);return()=>clearTimeout(e)},[r]),a.jsx(p.Z,{...s,value:r,onChange:e=>n(e.target.value),size:"small"})},R=(0,f.Cl)(),E=[{label:"Invoice Number",key:"invoice_number"},{label:"UserName",key:"name"},{label:"Balance",key:"balance"},{label:"Total",key:"total"},{label:"Status",key:"status"},{label:"Created At",key:"created_at"},{label:"Updated At",key:"updated_at"}],F=()=>{let{data:e}=(0,C.kJ)(Z.FL),{data:t}=(0,C.kJ)(Z.Ux),[i,s]=(0,d.useState)(""),[p,P]=(0,d.useState)({}),[y,S]=(0,d.useState)(e.invoices),[k,F]=(0,d.useState)(y),[M,T]=(0,d.useState)(""),{lang:L}=(0,n.useParams)(),z=k.map(e=>({...e,username:e.user.name,created_at:new Date(e.created_at).toLocaleString(),updated_at:new Date(e.updated_at).toLocaleString()})),J=(0,d.useMemo)(()=>[R.accessor("id",{header:"Invoice Number",cell:({row:e})=>a.jsx(u.Z,{component:r.default,href:(0,w.U)(`/invoice/preview/${e.original.id}`,L),color:"primary",children:`${e.original.invoice_number}`})}),R.accessor("user.name ",{header:"Client",cell:({row:e})=>(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[a.jsx(A.Z,{src:e.original.user.profile_picture_url,width:"100px",height:"100px"}),a.jsx("div",{className:"flex flex-col",children:a.jsx(u.Z,{className:"font-medium",color:"text.primary",children:e.original.user.name})})]})}),R.accessor("balance ",{header:"Balance",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex flex-col",children:a.jsx(u.Z,{className:"font-medium",color:"text.primary",children:e.original.balance.toLocaleString()})})})}),R.accessor("total",{header:"Total",cell:({row:e})=>a.jsx(u.Z,{children:`${e.original.total.toLocaleString()}`})}),R.accessor("created_at",{header:"Date",cell:({row:e})=>a.jsx(u.Z,{children:e.original.created_at.substring(0,10)})}),R.accessor("status ",{header:"Status",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex flex-col",children:a.jsx(_.Z,{label:e.original.status,color:q.sE[e.original.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})})})}),R.accessor("action",{header:"Action",cell:({row:e})=>a.jsx("div",{className:"flex items-center",children:a.jsx(m.Z,{children:a.jsx(r.default,{href:(0,w.U)(`/invoice/preview/${e.original.id}`,L),className:"flex",children:a.jsx("i",{className:"ri-eye-line text-textSecondary"})})})}),enableSorting:!1})],[y,k]),O=(0,j.b7)({data:k,columns:J,filterFns:{fuzzy:I},state:{rowSelection:p,globalFilter:M},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:I,onRowSelectionChange:P,getCoreRowModel:(0,f.sC)(),onGlobalFilterChange:T,getFilteredRowModel:(0,f.vL)(),getSortedRowModel:(0,f.tj)(),getPaginationRowModel:(0,f.G_)(),getFacetedRowModel:(0,f.o6)(),getFacetedUniqueValues:(0,f.JG)(),getFacetedMinMaxValues:(0,f.HO)()});return(0,d.useEffect)(()=>{F(y?.filter(e=>!i||e.status.toLowerCase().replace(/\s+/g,"-")===i))},[i,y,F]),(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(l.Z,{className:"flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row max-sm:is-full items-center gap-4",children:[a.jsx(U,{value:M??"",onChange:e=>T(String(e)),placeholder:"Search Quotation",className:"max-sm:is-full min-is-[200px]"}),(0,a.jsxs)(g.Z,{fullWidth:!0,size:"small",className:"min-is-[175px]",children:[a.jsx($.Z,{id:"status-select",children:"Quotation Status"}),(0,a.jsxs)(x.Z,{fullWidth:!0,id:"select-status",value:i,onChange:e=>s(e.target.value),label:"Invoice Status",labelId:"status-select",children:[a.jsx(h.Z,{value:"",children:"none"}),t.invoice_status.map(e=>a.jsx(h.Z,{value:e.name,children:e.name},e.id))]})]})]}),a.jsx(c.Z,{color:"secondary",variant:"outlined",startIcon:a.jsx("i",{className:"ri-upload-2-line text-xl"}),className:"max-sm:is-full",children:a.jsx(D.CSVLink,{className:"exportBtn",data:z,headers:E,filename:`all-invoices-${new Date().toISOString()}.csv`,children:"Export"})})]}),a.jsx("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:N().table,children:[a.jsx("thead",{children:O.getHeaderGroups().map(e=>a.jsx("tr",{children:e.headers.map(e=>a.jsx("th",{children:e.isPlaceholder?null:a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:b()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,j.ie)(e.column.columnDef.header,e.getContext()),{asc:a.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:a.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===O.getFilteredRowModel().rows.length?a.jsx("tbody",{children:a.jsx("tr",{children:a.jsx("td",{colSpan:O.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):a.jsx("tbody",{children:O.getRowModel().rows.slice(0,O.getState().pagination.pageSize).map(e=>a.jsx("tr",{className:b()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>a.jsx("td",{children:(0,j.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),a.jsx(v.Z,{rowsPerPageOptions:[10,25,50],component:"div",className:"border-bs",count:O.getFilteredRowModel().rows.length,rowsPerPage:O.getState().pagination.pageSize,page:O.getState().pagination.pageIndex,SelectProps:{inputProps:{"aria-label":"rows per page"}},onPageChange:(e,t)=>{O.setPageIndex(t)},onRowsPerPageChange:e=>O.setPageSize(Number(e.target.value))})]})},M=({count:e,title:t})=>a.jsx("div",{children:a.jsx(o.Z,{children:(0,a.jsxs)(l.Z,{className:"flex justify-between gap-1 ",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1 flex-grow",children:[a.jsx(u.Z,{color:"text.primary",variant:"h3",children:e}),a.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:a.jsx(u.Z,{variant:"h5",color:`${"Paid"===t?"orange":"User"===t?"primary":"UnPaid"===t?"error":"Partially Paid"===t?"green":"grey"}`,children:t})})]}),a.jsx(S.default,{skin:"light",variant:"rounded",size:42,children:a.jsx("i",{class:`${"Paid"===t?"ri-wallet-line ":"User"===t?"ri-user-add-line":"UnPaid"===t?"ri-refund-2-line ":"Partially Paid"===t?"ri-wechat-pay-fill ":"grey"}`})})]})})}),T=()=>{let{data:e}=(0,C.kJ)(Z.RF),{data:t}=(0,C.kJ)(Z.R);return(0,a.jsxs)(s.ZP,{container:!0,spacing:6,children:[a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(M,{count:t.users_aggregate.aggregate.count,title:"User"})}),a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(M,{count:e.paidInvoice.aggregate.count,title:"Paid"})}),a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(M,{count:e.partiallPaidInvoice.aggregate.count,title:"Partially Paid"})}),a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(M,{count:e.UnPaindInvoice.aggregate.count,title:"UnPaid"})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx(F,{})})]})}},89307:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},42279:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var a=i(19510),s=i(68570);let d=(0,s.createProxy)(String.raw`D:\ALPHA PROJECT\Admin Dashboard\alpha-admin\src\views\invoice\list\index.jsx`),{__esModule:r,$$typeof:n}=d;d.default;let o=(0,s.createProxy)(String.raw`D:\ALPHA PROJECT\Admin Dashboard\alpha-admin\src\views\invoice\list\index.jsx#default`),l=async()=>a.jsx(o,{})}};var t=require("../../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[8948,4471,4674,4366,8522,4313,2825,8077,1994,1798,8117,5684,6860,7251,5674],()=>i(71118));module.exports=a})();