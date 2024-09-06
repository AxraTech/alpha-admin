<<<<<<< HEAD
const CHUNK_PUBLIC_PATH = "server/app/[lang]/(dashboard)/quotations/page.js";
const runtime = require("../../../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/_f6d5f9._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_7baa17._.js");
runtime.loadChunk("server/chunks/ssr/src_data_dictionaries_e37087._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/[lang]/(dashboard)/quotations/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/[lang]/(dashboard)/quotations/page { COMPONENT_0 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_1 => \"[project]/src/app/[lang]/layout.jsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_2 => \"[project]/src/app/[lang]/(dashboard)/layout.jsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_3 => \"[project]/src/app/[lang]/(dashboard)/quotations/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <facade>", CHUNK_PUBLIC_PATH).exports;
=======
(()=>{var e={};e.id=6826,e.ids=[6826],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},91631:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>l}),i(87419),i(5114),i(32687),i(85133);var a=i(79193),s=i(71854),r=i(33997),n=i.n(r),d=i(73320),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);i.d(t,o);let l=["",{children:["[lang]",{children:["(dashboard)",{children:["quotations",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,87419)),"D:\\projects\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\quotations\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5114)),"D:\\projects\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,32687)),"D:\\projects\\alpha-admin\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\projects\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\quotations\\page.jsx"],c="/[lang]/(dashboard)/quotations/page",m={require:i,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[lang]/(dashboard)/quotations/page",pathname:"/[lang]/quotations",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},76435:(e,t,i)=>{Promise.resolve().then(i.bind(i,82491))},48398:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>P});var a=i(27486),s=i(618),r=i(38165),n=i(36370),d=i(29454),o=i(39926),l=i(48152),u=i(64037),c=i(29597),m=i(98108),p=i(5773),_=i(1416),g=i(7556),x=i(19396),$=i.n(x),h=i(63665);let j=e=>{let{tooltipProps:t,children:i}=e;return t?.title?a.jsx(n.Z,{...t,children:i}):i},f=({children:e,option:t})=>t.href?a.jsx(d.Z,{component:r.default,href:t.href,...t.linkProps,children:e}):a.jsx(a.Fragment,{children:e}),P=e=>{let{tooltipProps:t,icon:i,iconClassName:r,options:n,leftAlignMenu:d,iconButtonProps:x}=e,[P,b]=(0,s.useState)(!1),v=(0,s.useRef)(null),{settings:y}=(0,h.r)(),w=e=>{v.current&&v.current.contains(e.target)||b(!1)};return(0,a.jsxs)(a.Fragment,{children:[a.jsx(j,{tooltipProps:t,children:a.jsx(_.Z,{ref:v,size:"small",onClick:()=>{b(e=>!e)},...x,children:"string"==typeof i?a.jsx("i",{className:$()(i,r)}):i||a.jsx("i",{className:$()("ri-more-2-line",r)})})}),a.jsx(o.Z,{open:P,anchorEl:v.current,placement:d?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:({TransitionProps:e})=>a.jsx(m.Z,{...e,children:a.jsx(p.Z,{className:"bordered"===y.skin?"border shadow-none":"shadow-lg",children:a.jsx(c.d,{onClickAway:w,children:a.jsx(u.Z,{autoFocusItem:P,children:n.map((e,t)=>"string"==typeof e?a.jsx(l.Z,{onClick:w,children:e},t):"divider"in e?e.divider&&a.jsx(g.Z,{...e.dividerProps},t):a.jsx(l.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{w(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,a.jsxs)(f,{option:e,children:[("string"==typeof e.icon?a.jsx("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})})]})}},93889:(e,t,i)=>{"use strict";i.d(t,{Pg:()=>d,c7:()=>s,sE:()=>n,uH:()=>a,zh:()=>r});let a={completed:"success",canceled:"error","received token":"info","picking up":"primary",processing:"warning"},s={pending:"warning",completed:"success",accepted:"info",rejected:"error"},r={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},n={paid:"primary","partially paid":"info",completed:"success",unpaid:"error",pending:"warning"},d={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>k,DR:()=>I,Ff:()=>c,HT:()=>x,Hd:()=>$,J2:()=>E,J9:()=>o,JB:()=>F,KN:()=>q,Lh:()=>Q,MP:()=>n,MZ:()=>Z,O7:()=>M,Qm:()=>D,SB:()=>_,SZ:()=>v,Sf:()=>f,Si:()=>A,Zq:()=>S,aY:()=>m,bc:()=>G,dE:()=>h,en:()=>z,hB:()=>s,he:()=>U,hq:()=>r,jN:()=>R,ju:()=>g,oe:()=>p,tC:()=>N,tt:()=>P,u7:()=>u,uv:()=>l,vl:()=>C,wU:()=>b,yG:()=>w,yn:()=>j,z7:()=>y,zN:()=>d});var a=i(12738);let s=(0,a.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,r=(0,a.Ps)`
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
`,n=(0,a.Ps)`
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
`,d=(0,a.Ps)`
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
`,m=(0,a.Ps)`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`,p=(0,a.Ps)`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`,_=(0,a.Ps)`
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
`;let x=(0,a.Ps)`
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
`;let $=(0,a.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,h=(0,a.Ps)`
  mutation editNewProducts($id: uuid!, $data: news_set_input!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,j=(0,a.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,f=(0,a.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,P=(0,a.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,b=(0,a.Ps)`
  mutation changeOrderStatus($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`,v=(0,a.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,y=(0,a.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,w=(0,a.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status) {
      message
    }
  }
`,S=(0,a.Ps)`
  mutation changeInvoiceStatus($id: uuid!, $data: invoices_set_input!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`,k=(0,a.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,N=(0,a.Ps)`
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
  mutation sendQInvoice($discounted_amount: numeric!, $quotation_id: uuid!) {
    sendInvoice(discounted_amount: $discounted_amount, quotation_id: $quotation_id) {
      message
    }
  }
`,C=(0,a.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,Z=(0,a.Ps)`
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
`,F=(0,a.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,R=(0,a.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,M=(0,a.Ps)`
  mutation addSeriveCenter($data: service_centers_insert_input!) {
    insert_service_centers_one(object: $data) {
      id
    }
  }
`,z=(0,a.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,U=(0,a.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,D=(0,a.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,Q=(0,a.Ps)`
  mutation addDiscount($data: product_discounts_insert_input!) {
    insert_product_discounts_one(object: $data) {
      id
    }
  }
`,G=(0,a.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,A=(0,a.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,E=(0,a.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
    }
  }
`},26808:(e,t,i)=>{"use strict";i.d(t,{Q:()=>a});let a=e=>e.split(/\s/).reduce((e,t)=>e+=t.slice(0,1),"")},82491:(e,t,i)=>{"use strict";i.d(t,{default:()=>U});var a=i(27486),s=i(97687),r=i(618),n=i(38165),d=i(46811),o=i(42453),l=i(35549),u=i(30675),c=i(52839),m=i(1416),p=i(30965),_=i(12741),g=i(80013),x=i(74054),$=i(48152),h=i(46797),j=i(19396),f=i.n(j),P=i(61359),b=i(36514),v=i(57229);i(48398);var y=i(81636),w=i(93889);i(26808);var S=i(11158),k=i(31538),N=i.n(k),q=i(45162),C=i(25009),Z=i(48366);i(66718);let I=(e,t,i,a)=>{let s=(0,P.O4)(e.getValue(t),i);return a({itemRank:s}),s.passed},F=({value:e,onChange:t,debounce:i=500,...s})=>{let[n,d]=(0,r.useState)(e);return(0,r.useEffect)(()=>{d(e)},[e]),(0,r.useEffect)(()=>{let e=setTimeout(()=>{t(n)},i);return()=>clearTimeout(e)},[n]),a.jsx(p.Z,{...s,value:n,onChange:e=>d(e.target.value),size:"small"})},R=(0,b.Cl)(),M=()=>{let{data:e}=(0,q.kJ)(C.kQ),{data:t}=(0,q.kJ)(C.KH),[i,s]=(0,r.useState)(""),[p,j]=(0,r.useState)({}),[P,y]=(0,r.useState)(e.quotations),[k,M]=(0,r.useState)(P),[z,U]=(0,r.useState)(""),{lang:D}=(0,d.useParams)(),Q=(0,r.useMemo)(()=>[R.accessor("id",{header:"Quotation Number",cell:({row:e})=>a.jsx(u.Z,{component:n.default,href:(0,S.U)(`/quotation/preview${e.original.quotation_number}`,D),color:"primary",children:`${e.original.quotation_number}`})}),R.accessor("user.name ",{header:"Client",cell:({row:e})=>(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[a.jsx(Z.Z,{src:e.original.user.profile_picture_url,width:"100px",height:"100px"}),a.jsx("div",{className:"flex flex-col",children:a.jsx(u.Z,{className:"font-medium",color:"text.primary",children:e.original.user.name})})]})}),R.accessor("dealer_remark ",{header:"Dealer Remark",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex flex-col",children:a.jsx(u.Z,{className:"font-medium",color:"text.primary",children:e.original.dealer_remark})})})}),R.accessor("total_amount",{header:"Total",cell:({row:e})=>a.jsx(u.Z,{children:`${null!==e.original.total_amount?e.original.total_amount:"-"}`})}),R.accessor("created_at",{header:"Date",cell:({row:e})=>a.jsx(u.Z,{children:e.original.created_at.substring(0,10)})}),R.accessor("status",{header:"Status",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex flex-col",children:a.jsx(c.Z,{label:e.original.status,color:w.c7[e.original.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})})})}),R.accessor("action",{header:"Action",cell:({row:e})=>a.jsx("div",{className:"flex items-center",children:a.jsx(m.Z,{children:a.jsx(n.default,{href:(0,S.U)(`/quotations/preview/${e.original.id}`,D),className:"flex",children:a.jsx("i",{className:"ri-eye-line text-textSecondary"})})})}),enableSorting:!1})],[P,k]),G=(0,v.b7)({data:k,columns:Q,filterFns:{fuzzy:I},state:{rowSelection:p,globalFilter:z},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:I,onRowSelectionChange:j,getCoreRowModel:(0,b.sC)(),onGlobalFilterChange:U,getFilteredRowModel:(0,b.vL)(),getSortedRowModel:(0,b.tj)(),getPaginationRowModel:(0,b.G_)(),getFacetedRowModel:(0,b.o6)(),getFacetedUniqueValues:(0,b.JG)(),getFacetedMinMaxValues:(0,b.HO)()});return(0,r.useEffect)(()=>{M(P?.filter(e=>!i||e.status.toLowerCase().replace(/\s+/g,"-")===i))},[i,P,M]),(0,a.jsxs)(o.Z,{children:[a.jsx(l.Z,{className:"flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center",children:(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row max-sm:is-full items-center gap-4",children:[a.jsx(F,{value:z??"",onChange:e=>U(String(e)),placeholder:"Search Quotation",className:"max-sm:is-full min-is-[200px]"}),(0,a.jsxs)(_.Z,{fullWidth:!0,size:"small",className:"min-is-[175px]",children:[a.jsx(g.Z,{id:"status-select",children:"Quotation Status"}),(0,a.jsxs)(x.Z,{fullWidth:!0,id:"select-status",value:i,onChange:e=>s(e.target.value),label:"Invoice Status",labelId:"status-select",children:[a.jsx($.Z,{value:"",children:"none"}),t.quotation_status.map(e=>a.jsx($.Z,{value:e.name,children:e.name},e.id))]})]})]})}),a.jsx("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:N().table,children:[a.jsx("thead",{children:G.getHeaderGroups().map(e=>a.jsx("tr",{children:e.headers.map(e=>a.jsx("th",{children:e.isPlaceholder?null:a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:f()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,v.ie)(e.column.columnDef.header,e.getContext()),{asc:a.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:a.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===G.getFilteredRowModel().rows.length?a.jsx("tbody",{children:a.jsx("tr",{children:a.jsx("td",{colSpan:G.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):a.jsx("tbody",{children:G.getRowModel().rows.slice(0,G.getState().pagination.pageSize).map(e=>a.jsx("tr",{className:f()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>a.jsx("td",{children:(0,v.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),a.jsx(h.Z,{rowsPerPageOptions:[10,25,50],component:"div",className:"border-bs",count:G.getFilteredRowModel().rows.length,rowsPerPage:G.getState().pagination.pageSize,page:G.getState().pagination.pageIndex,SelectProps:{inputProps:{"aria-label":"rows per page"}},onPageChange:(e,t)=>{G.setPageIndex(t)},onRowsPerPageChange:e=>G.setPageSize(Number(e.target.value))})]})},z=({count:e,title:t})=>a.jsx("div",{children:a.jsx(o.Z,{children:(0,a.jsxs)(l.Z,{className:"flex justify-between gap-1 ",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1 flex-grow",children:[a.jsx(u.Z,{color:"text.primary",variant:"h3",children:e}),a.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:a.jsx(u.Z,{variant:"h5",color:`${"Pending"===t?"orange":"User"===t?"primary":"Reject"===t?"error":"Complete"===t?"green":"grey"}`,children:t})})]}),a.jsx(y.default,{skin:"light",variant:"rounded",size:42,children:a.jsx("i",{class:`${"Pending"===t?"ri-pass-pending-fill":"User"===t?"ri-user-add-line":"Reject"===t?"ri-user-unfollow-fill ":"Complete"===t?"ri-check-double-fill":"grey"}`})})]})})}),U=()=>{let{data:e}=(0,q.kJ)(C.aN),{data:t}=(0,q.kJ)(C.$X);return(0,a.jsxs)(s.ZP,{container:!0,spacing:6,children:[a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(z,{count:t.users_aggregate.aggregate.count,title:"User"})}),a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(z,{count:e.pendingQuotation.aggregate.count,title:"Pending"})}),a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(z,{count:e.rejectedQuotation.aggregate.count,title:"Reject"})}),a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(z,{count:e.completedQuotation.aggregate.count,title:"Complete"})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx(M,{})})]})}},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},87419:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var a=i(79703),s=i(92334);let r=(0,s.createProxy)(String.raw`D:\projects\alpha-admin\src\views\quotations\list\index.jsx`),{__esModule:n,$$typeof:d}=r;r.default;let o=(0,s.createProxy)(String.raw`D:\projects\alpha-admin\src\views\quotations\list\index.jsx#default`),l=async()=>a.jsx(o,{})}};var t=require("../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[9357,6491,3302,3440,3198,7541,3133,965,8229,6514,5073,6797,764,9599],()=>i(91631));module.exports=a})();
>>>>>>> 44527182998c4519db88e5929896761b783cb2ba
