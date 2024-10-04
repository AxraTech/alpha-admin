(()=>{var e={};e.id=8450,e.ids=[8450],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},39409:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>d.a,__next_app__:()=>_,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>l}),a(80759),a(5114),a(32687),a(85133);var i=a(79193),r=a(71854),s=a(33997),d=a.n(s),n=a(73320),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);a.d(t,o);let l=["",{children:["[lang]",{children:["(dashboard)",{children:["ewarranties",{children:["list",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,80759)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\ewarranties\\list\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,5114)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,32687)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\ewarranties\\list\\page.jsx"],c="/[lang]/(dashboard)/ewarranties/list/page",_={require:a,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/[lang]/(dashboard)/ewarranties/list/page",pathname:"/[lang]/ewarranties/list",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},22694:(e,t,a)=>{Promise.resolve().then(a.bind(a,57722))},93889:(e,t,a)=>{"use strict";a.d(t,{Pg:()=>n,c7:()=>r,sE:()=>d,uH:()=>i,zh:()=>s});let i={completed:"success",rejected:"error","received token":"info","picking up":"primary",processing:"warning",delivering:"secondary"},r={pending:"warning",completed:"success",accepted:"info",rejected:"error",negotiation:"primary"},s={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},d={paid:"secondary","partially paid":"info",rejected:"error",unpaid:"primary",pending:"warning"},n={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},66718:(e,t,a)=>{"use strict";a.d(t,{BM:()=>C,DR:()=>U,Ff:()=>c,HT:()=>$,Hd:()=>b,J2:()=>B,J9:()=>o,JB:()=>I,KN:()=>A,Lh:()=>H,MP:()=>d,MZ:()=>D,O7:()=>F,Qm:()=>Z,SB:()=>p,SZ:()=>f,Sf:()=>y,Si:()=>G,Zq:()=>N,aY:()=>_,bc:()=>z,dE:()=>h,dn:()=>J,en:()=>L,hB:()=>r,he:()=>T,hq:()=>s,jN:()=>R,ju:()=>g,mU:()=>S,mt:()=>O,oe:()=>m,pE:()=>Q,rV:()=>M,si:()=>V,tC:()=>q,tt:()=>P,tz:()=>v,u7:()=>u,ui:()=>W,uv:()=>l,vl:()=>E,wU:()=>x,yG:()=>k,yn:()=>w,z7:()=>j,zN:()=>n});var i=a(12738);let r=(0,i.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,s=(0,i.Ps)`
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
`,d=(0,i.Ps)`
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
`,n=(0,i.Ps)`
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
`,o=(0,i.Ps)`
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
`,u=(0,i.Ps)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`,c=(0,i.Ps)`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`,_=(0,i.Ps)`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`,m=(0,i.Ps)`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`,p=(0,i.Ps)`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`,g=(0,i.Ps)`
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
`;let $=(0,i.Ps)`
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
`;let b=(0,i.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,h=(0,i.Ps)`
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
`,w=(0,i.Ps)`
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
`,P=(0,i.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,x=(0,i.Ps)`
  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {
    updateServiceStatus(service_token_id: $service_token_id, status: $status) {
      message
    }
  }
`,v=(0,i.Ps)`
  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {
    acceptServiceToken(
      is_warranty_valid: $is_warranty_valid
      service_fee: $service_fee
      service_token_id: $service_token_id
    ) {
      message
    }
  }
`,S=(0,i.Ps)`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`,f=(0,i.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,j=(0,i.Ps)`
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
`,N=(0,i.Ps)`
  mutation updateInvoiceStatus($invoice_id: uuid!, $status: String!, $rejected_reason: String) {
    updateInvoiceStatus(invoice_id: $invoice_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,C=(0,i.Ps)`
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
`,A=(0,i.Ps)`
  mutation sendQInvoice($quotation_id: uuid!) {
    sendInvoice(quotation_id: $quotation_id) {
      message
    }
  }
`,E=(0,i.Ps)`
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
`,U=(0,i.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,I=(0,i.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,M=(0,i.Ps)`
  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {
    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      email
      role
    }
  }
`,R=(0,i.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,F=(0,i.Ps)`
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
`,L=(0,i.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,T=(0,i.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      phone
      address
    }
  }
`,Z=(0,i.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,O=(0,i.Ps)`
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
`,H=(0,i.Ps)`
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
`,J=(0,i.Ps)`
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
`,z=(0,i.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,G=(0,i.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,B=(0,i.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`,Q=(0,i.Ps)`
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
`},26808:(e,t,a)=>{"use strict";a.d(t,{Q:()=>i});let i=e=>e.split(/\s/).reduce((e,t)=>e+=t.slice(0,1),"")},57722:(e,t,a)=>{"use strict";a.d(t,{default:()=>C});var i=a(27486),r=a(618),s=a(38165),d=a(46811),n=a(69121),o=a(51259),l=a(12964),u=a(72660),c=a(9594),_=a(30785),m=a(2598),p=a(19396),g=a.n(p),$=a(61359),b=a(36514),h=a(57229);a(48398),a(81636),a(93889),a(26808);var w=a(11158),y=a(31538),P=a.n(y),x=a(45882),v=a(25009);a(66718);var S=a(24458);let f=(e,t,a,i)=>{let r=(0,$.O4)(e.getValue(t),a);return i({itemRank:r}),r.passed},j=({value:e,onChange:t,debounce:a=500,...s})=>{let[d,n]=(0,r.useState)(e);return(0,r.useEffect)(()=>{n(e)},[e]),(0,r.useEffect)(()=>{let e=setTimeout(()=>{t(d)},a);return()=>clearTimeout(e)},[d]),console.log("value ",d),i.jsx(_.Z,{...s,value:d,onChange:e=>n(e.target.value),size:"small"})},k=(0,b.Cl)(),N=[{label:"E-Warranty Number",key:"ewarranty_number"},{label:"User Name",key:"user_name"},{label:"Customer Name",key:"customer_name"},{label:"Customer Phone",key:"customer_phone"},{label:"Model Number",key:"model_number"},{label:"Serial Number",key:"serial_number"},{label:"Shop Name",key:"shop_name"},{label:"Created At",key:"created_at"},{label:"Updated At",key:"updated_at"}],C=()=>{let{data:e}=(0,x.kJ)(v.yP),{data:t}=(0,x.kJ)(v.DF),[a,_]=(0,r.useState)(""),[p,$]=(0,r.useState)({}),[y,C]=(0,r.useState)(e.ewarranties),[q,A]=(0,r.useState)(y),[E,D]=(0,r.useState)(""),{lang:U}=(0,d.useParams)(),I=q.map(e=>({...e,ewarranty_number:e.ewarranty_number,customer_name:e.customer_name,user_name:e?.user?.name,customer_phone:e.customer_phone,model_number:e.model_number,serial_number:e.serial_number,shop_name:e.shop_name,created_at:new Date(e.created_at).toLocaleString(),updated_at:new Date(e.updated_at).toLocaleString()})),M=(0,r.useMemo)(()=>[k.accessor("ewarranty_number",{header:"E-Warranty Number",cell:({row:e})=>i.jsx(u.Z,{component:s.default,href:(0,w.U)(`/ewarranties/details/${e.original.id}`,U),color:"primary",children:`${e.original?.ewarranty_number}`})}),k.accessor("user.name",{header:"User Name",cell:({row:e})=>i.jsx(u.Z,{children:`${e.original.user?.name!==null?e.original?.user?.name:"-"}`})}),k.accessor("customer_name",{header:"Customer Name",cell:({row:e})=>i.jsx("div",{className:"flex items-center gap-4 ",children:(0,i.jsxs)("div",{className:"flex flex-col  text-wrap",children:[i.jsx(u.Z,{className:"font-medium",color:"text.primary",children:e.original?.customer_name}),i.jsx(u.Z,{variant:"body2",children:e.original?.customer_phone})]})})}),k.accessor("model_number",{header:"Model Number",cell:({row:e})=>i.jsx("div",{className:"flex items-center gap-3",children:i.jsx("div",{className:"flex flex-col",children:i.jsx(u.Z,{className:"font-medium",color:"text.primary",children:e.original?.model_number})})})}),k.accessor("serial_number",{header:"Serial Number",cell:({row:e})=>i.jsx(u.Z,{children:`${null!==e.original.serial_number?e.original?.serial_number:"-"}`})}),k.accessor("created_at",{header:"Date",cell:({row:e})=>i.jsx(u.Z,{children:new Date(e.original.created_at)?.toLocaleString()})}),k.accessor("action",{header:"Action",cell:({row:e})=>i.jsx("div",{className:"flex items-center",children:i.jsx(c.Z,{children:i.jsx(s.default,{href:(0,w.U)(`/ewarranties/details/${e.original?.id}`,U),className:"flex",children:i.jsx("i",{className:"ri-eye-line text-textSecondary"})})})}),enableSorting:!1})],[y,q]),R=(0,h.b7)({data:q,columns:M,filterFns:{fuzzy:f},state:{rowSelection:p,globalFilter:E},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:f,onRowSelectionChange:$,getCoreRowModel:(0,b.sC)(),onGlobalFilterChange:D,getFilteredRowModel:(0,b.vL)(),getSortedRowModel:(0,b.tj)(),getPaginationRowModel:(0,b.G_)(),getFacetedRowModel:(0,b.o6)(),getFacetedUniqueValues:(0,b.JG)(),getFacetedMinMaxValues:(0,b.HO)()});return(0,r.useEffect)(()=>{A(y?.filter(e=>!a||e.status.toLowerCase().replace(/\s+/g,"-")===a))},[a,y,A]),(0,i.jsxs)(n.Z,{children:[(0,i.jsxs)(o.Z,{className:"flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center",children:[i.jsx("div",{className:"flex flex-col sm:flex-row max-sm:is-full items-center gap-4",children:i.jsx(j,{value:E??"",onChange:e=>D(String(e)),placeholder:"Search E-Warranty",className:"max-sm:is-full min-is-[200px]"})}),i.jsx(l.Z,{color:"secondary",variant:"outlined",startIcon:i.jsx("i",{className:"ri-upload-2-line text-xl"}),className:"max-sm:is-full",children:i.jsx(S.CSVLink,{className:"exportBtn",data:I,headers:N,filename:`all-ewarranties-${new Date().toISOString()}.csv`,children:"Export"})})]}),i.jsx("div",{className:"overflow-x-auto",children:(0,i.jsxs)("table",{className:P().table,children:[i.jsx("thead",{children:R.getHeaderGroups().map(e=>i.jsx("tr",{children:e.headers.map(e=>i.jsx("th",{children:e.isPlaceholder?null:i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:g()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,h.ie)(e.column.columnDef.header,e.getContext()),{asc:i.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:i.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===R.getFilteredRowModel().rows.length?i.jsx("tbody",{children:i.jsx("tr",{children:i.jsx("td",{colSpan:R.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):i.jsx("tbody",{children:R.getRowModel().rows.slice(0,R.getState().pagination.pageSize).map(e=>i.jsx("tr",{className:g()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>i.jsx("td",{children:(0,h.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),i.jsx(m.Z,{rowsPerPageOptions:[10,25,50],component:"div",className:"border-bs",count:R.getFilteredRowModel().rows.length,rowsPerPage:R.getState().pagination.pageSize,page:R.getState().pagination.pageIndex,SelectProps:{inputProps:{"aria-label":"rows per page"}},onPageChange:(e,t)=>{R.setPageIndex(t)},onRowsPerPageChange:e=>R.setPageSize(Number(e.target.value))})]})}},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},80759:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var i=a(79703),r=a(92334);let s=(0,r.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\views\ewarranties\list\EwarrantyListTable.jsx`),{__esModule:d,$$typeof:n}=s;s.default;let o=(0,r.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\views\ewarranties\list\EwarrantyListTable.jsx#default`);var l=a(45170);let u=async()=>(await (0,l.getEcommerceData)(),i.jsx(o,{}))}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[9357,6491,1598,8743,8520,168,195,785,6695,3697,2598,9077,5670,6532,603,7364,9947,9058,6591],()=>a(39409));module.exports=i})();