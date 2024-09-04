(()=>{var e={};e.id=6913,e.ids=[6913],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},25662:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l}),i(27429),i(5114),i(32687),i(85133);var a=i(79193),s=i(71854),n=i(33997),r=i.n(n),d=i(73320),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);i.d(t,o);let l=["",{children:["[lang]",{children:["(dashboard)",{children:["invoice",{children:["list",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,27429)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/invoice/list/page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5114)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,32687)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/invoice/list/page.jsx"],u="/[lang]/(dashboard)/invoice/list/page",m={require:i,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[lang]/(dashboard)/invoice/list/page",pathname:"/[lang]/invoice/list",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},58774:(e,t,i)=>{Promise.resolve().then(i.bind(i,28385))},48398:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>P});var a=i(27486),s=i(618),n=i(38165),r=i(36370),d=i(29454),o=i(39926),l=i(48152),c=i(64037),u=i(29597),m=i(98108),p=i(5773),_=i(1416),g=i(7556),x=i(19396),$=i.n(x),h=i(63665);let f=e=>{let{tooltipProps:t,children:i}=e;return t?.title?a.jsx(r.Z,{...t,children:i}):i},v=({children:e,option:t})=>t.href?a.jsx(d.Z,{component:n.default,href:t.href,...t.linkProps,children:e}):a.jsx(a.Fragment,{children:e}),P=e=>{let{tooltipProps:t,icon:i,iconClassName:n,options:r,leftAlignMenu:d,iconButtonProps:x}=e,[P,j]=(0,s.useState)(!1),b=(0,s.useRef)(null),{settings:y}=(0,h.r)(),w=e=>{b.current&&b.current.contains(e.target)||j(!1)};return(0,a.jsxs)(a.Fragment,{children:[a.jsx(f,{tooltipProps:t,children:a.jsx(_.Z,{ref:b,size:"small",onClick:()=>{j(e=>!e)},...x,children:"string"==typeof i?a.jsx("i",{className:$()(i,n)}):i||a.jsx("i",{className:$()("ri-more-2-line",n)})})}),a.jsx(o.Z,{open:P,anchorEl:b.current,placement:d?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:({TransitionProps:e})=>a.jsx(m.Z,{...e,children:a.jsx(p.Z,{className:"bordered"===y.skin?"border shadow-none":"shadow-lg",children:a.jsx(u.d,{onClickAway:w,children:a.jsx(c.Z,{autoFocusItem:P,children:r.map((e,t)=>"string"==typeof e?a.jsx(l.Z,{onClick:w,children:e},t):"divider"in e?e.divider&&a.jsx(g.Z,{...e.dividerProps},t):a.jsx(l.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{w(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,a.jsxs)(v,{option:e,children:[("string"==typeof e.icon?a.jsx("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})})]})}},93889:(e,t,i)=>{"use strict";i.d(t,{Pg:()=>d,c7:()=>s,sE:()=>r,uH:()=>a,zh:()=>n});let a={completed:"success",canceled:"error","received token":"info","picking up":"primary",processing:"warning"},s={pending:"warning",completed:"success",accepted:"info",rejected:"error"},n={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},r={paid:"primary","partially paid":"info",completed:"success",unpaid:"error",pending:"warning"},d={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>k,DR:()=>I,Ff:()=>u,HT:()=>x,Hd:()=>$,J2:()=>B,J9:()=>o,JB:()=>A,KN:()=>Z,Lh:()=>E,MP:()=>r,MZ:()=>q,O7:()=>U,Qm:()=>z,SB:()=>_,SZ:()=>b,Sf:()=>v,Si:()=>Q,Zq:()=>S,aY:()=>m,bc:()=>G,dE:()=>h,en:()=>F,hB:()=>s,he:()=>M,hq:()=>n,jN:()=>R,ju:()=>g,oe:()=>p,tC:()=>N,tt:()=>P,u7:()=>c,uv:()=>l,vl:()=>C,wU:()=>j,yG:()=>w,yn:()=>f,z7:()=>y,zN:()=>d});var a=i(12738);let s=(0,a.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,n=(0,a.Ps)`
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
`,f=(0,a.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,v=(0,a.Ps)`
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
`,j=(0,a.Ps)`
  mutation changeOrderStatus($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`,b=(0,a.Ps)`
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
`,Z=(0,a.Ps)`
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
`,q=(0,a.Ps)`
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
`,A=(0,a.Ps)`
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
`,U=(0,a.Ps)`
  mutation addSeriveCenter($data: service_centers_insert_input!) {
    insert_service_centers_one(object: $data) {
      id
    }
  }
`,F=(0,a.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,M=(0,a.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,z=(0,a.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,E=(0,a.Ps)`
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
`,Q=(0,a.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,B=(0,a.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
    }
  }
`},26808:(e,t,i)=>{"use strict";i.d(t,{Q:()=>a});let a=e=>e.split(/\s/).reduce((e,t)=>e+=t.slice(0,1),"")},28385:(e,t,i)=>{"use strict";i.d(t,{default:()=>M});var a=i(27486),s=i(97687),n=i(618),r=i(38165),d=i(46811),o=i(42453),l=i(35549),c=i(30675),u=i(52839),m=i(1416),p=i(30965),_=i(12741),g=i(80013),x=i(74054),$=i(48152),h=i(46797),f=i(19396),v=i.n(f),P=i(61359),j=i(36514),b=i(57229);i(48398);var y=i(81636);i(26808);var w=i(11158),S=i(31538),k=i.n(S),N=i(45162),Z=i(25009),C=i(48366);i(66718);var q=i(93889);let I=(e,t,i,a)=>{let s=(0,P.O4)(e.getValue(t),i);return a({itemRank:s}),s.passed},A=({value:e,onChange:t,debounce:i=500,...s})=>{let[r,d]=(0,n.useState)(e);return(0,n.useEffect)(()=>{d(e)},[e]),(0,n.useEffect)(()=>{let e=setTimeout(()=>{t(r)},i);return()=>clearTimeout(e)},[r]),a.jsx(p.Z,{...s,value:r,onChange:e=>d(e.target.value),size:"small"})},R=(0,j.Cl)(),U=()=>{let{data:e}=(0,N.kJ)(Z.FL),{data:t}=(0,N.kJ)(Z.Ux),[i,s]=(0,n.useState)(""),[p,f]=(0,n.useState)({}),[P,y]=(0,n.useState)(e.invoices),[S,U]=(0,n.useState)(P),[F,M]=(0,n.useState)(""),{lang:z}=(0,d.useParams)(),E=(0,n.useMemo)(()=>[R.accessor("id",{header:"Invoice Number",cell:({row:e})=>a.jsx(c.Z,{component:r.default,href:(0,w.U)(`/invoice/preview/${e.original.id}`,z),color:"primary",children:`${e.original.invoice_number}`})}),R.accessor("user.name ",{header:"Client",cell:({row:e})=>(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[a.jsx(C.Z,{src:e.original.user.profile_picture_url,width:"100px",height:"100px"}),a.jsx("div",{className:"flex flex-col",children:a.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.user.name})})]})}),R.accessor("balance ",{header:"Balance",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex flex-col",children:a.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.balance.toLocaleString()})})})}),R.accessor("total",{header:"Total",cell:({row:e})=>a.jsx(c.Z,{children:`${e.original.total.toLocaleString()}`})}),R.accessor("status ",{header:"Status",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex flex-col",children:a.jsx(u.Z,{label:e.original.status,color:q.sE[e.original.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})})})}),R.accessor("action",{header:"Action",cell:({row:e})=>a.jsx("div",{className:"flex items-center",children:a.jsx(m.Z,{children:a.jsx(r.default,{href:(0,w.U)(`/invoice/preview/${e.original.id}`,z),className:"flex",children:a.jsx("i",{className:"ri-eye-line text-textSecondary"})})})}),enableSorting:!1})],[P,S]),G=(0,b.b7)({data:S,columns:E,filterFns:{fuzzy:I},state:{rowSelection:p,globalFilter:F},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:I,onRowSelectionChange:f,getCoreRowModel:(0,j.sC)(),onGlobalFilterChange:M,getFilteredRowModel:(0,j.vL)(),getSortedRowModel:(0,j.tj)(),getPaginationRowModel:(0,j.G_)(),getFacetedRowModel:(0,j.o6)(),getFacetedUniqueValues:(0,j.JG)(),getFacetedMinMaxValues:(0,j.HO)()});return(0,n.useEffect)(()=>{U(P?.filter(e=>!i||e.status.toLowerCase().replace(/\s+/g,"-")===i))},[i,P,U]),(0,a.jsxs)(o.Z,{children:[a.jsx(l.Z,{className:"flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center",children:(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row max-sm:is-full items-center gap-4",children:[a.jsx(A,{value:F??"",onChange:e=>M(String(e)),placeholder:"Search Quotation",className:"max-sm:is-full min-is-[200px]"}),(0,a.jsxs)(_.Z,{fullWidth:!0,size:"small",className:"min-is-[175px]",children:[a.jsx(g.Z,{id:"status-select",children:"Quotation Status"}),(0,a.jsxs)(x.Z,{fullWidth:!0,id:"select-status",value:i,onChange:e=>s(e.target.value),label:"Invoice Status",labelId:"status-select",children:[a.jsx($.Z,{value:"",children:"none"}),t.invoice_status.map(e=>a.jsx($.Z,{value:e.name,children:e.name},e.id))]})]})]})}),a.jsx("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:k().table,children:[a.jsx("thead",{children:G.getHeaderGroups().map(e=>a.jsx("tr",{children:e.headers.map(e=>a.jsx("th",{children:e.isPlaceholder?null:a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:v()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,b.ie)(e.column.columnDef.header,e.getContext()),{asc:a.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:a.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===G.getFilteredRowModel().rows.length?a.jsx("tbody",{children:a.jsx("tr",{children:a.jsx("td",{colSpan:G.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):a.jsx("tbody",{children:G.getRowModel().rows.slice(0,G.getState().pagination.pageSize).map(e=>a.jsx("tr",{className:v()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>a.jsx("td",{children:(0,b.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),a.jsx(h.Z,{rowsPerPageOptions:[10,25,50],component:"div",className:"border-bs",count:G.getFilteredRowModel().rows.length,rowsPerPage:G.getState().pagination.pageSize,page:G.getState().pagination.pageIndex,SelectProps:{inputProps:{"aria-label":"rows per page"}},onPageChange:(e,t)=>{G.setPageIndex(t)},onRowsPerPageChange:e=>G.setPageSize(Number(e.target.value))})]})},F=({count:e,title:t})=>a.jsx("div",{children:a.jsx(o.Z,{children:(0,a.jsxs)(l.Z,{className:"flex justify-between gap-1 ",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1 flex-grow",children:[a.jsx(c.Z,{color:"text.primary",variant:"h3",children:e}),a.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:a.jsx(c.Z,{variant:"h5",color:`${"Paid"===t?"orange":"User"===t?"primary":"UnPaid"===t?"error":"Partially Paid"===t?"green":"grey"}`,children:t})})]}),a.jsx(y.default,{skin:"light",variant:"rounded",size:42,children:a.jsx("i",{class:`${"Paid"===t?"ri-wallet-line ":"User"===t?"ri-user-add-line":"UnPaid"===t?"ri-refund-2-line ":"Partially Paid"===t?"ri-wechat-pay-fill ":"grey"}`})})]})})}),M=()=>{let{data:e}=(0,N.kJ)(Z.RF),{data:t}=(0,N.kJ)(Z.R);return(0,a.jsxs)(s.ZP,{container:!0,spacing:6,children:[a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(F,{count:t.users_aggregate.aggregate.count,title:"User"})}),a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(F,{count:e.paidInvoice.aggregate.count,title:"Paid"})}),a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(F,{count:e.partiallPaidInvoice.aggregate.count,title:"Partially Paid"})}),a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(F,{count:e.UnPaindInvoice.aggregate.count,title:"UnPaid"})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx(U,{})})]})}},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},27429:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var a=i(79703),s=i(92334);let n=(0,s.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/invoice/list/index.jsx`),{__esModule:r,$$typeof:d}=n;n.default;let o=(0,s.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/invoice/list/index.jsx#default`),l=async()=>a.jsx(o,{})}};var t=require("../../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[9357,6491,4588,3440,3198,7541,3133,965,7110,6514,5073,6797,751,5262],()=>i(25662));module.exports=a})();