(()=>{var e={};e.id=3513,e.ids=[3513],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},12318:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>o}),i(84472),i(5114),i(32687),i(85133);var a=i(79193),s=i(71854),n=i(33997),r=i.n(n),d=i(73320),l={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>d[e]);i.d(t,l);let o=["",{children:["[lang]",{children:["(dashboard)",{children:["invoice",{children:["preview",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,84472)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/invoice/preview/[id]/page.jsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5114)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,32687)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/invoice/preview/[id]/page.jsx"],u="/[lang]/(dashboard)/invoice/preview/[id]/page",m={require:i,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[lang]/(dashboard)/invoice/preview/[id]/page",pathname:"/[lang]/invoice/preview/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},68241:(e,t,i)=>{Promise.resolve().then(i.bind(i,68614))},36858:(e,t,i)=>{"use strict";i.d(t,{default:()=>r});var a=i(27486),s=i(618),n=i(38165);let r=(0,s.forwardRef)((e,t)=>{let{href:i,onClick:s,...r}=e;return a.jsx(n.default,{ref:t,...r,href:i||"/",onClick:s?e=>s(e):i?void 0:e=>e.preventDefault()})})},91347:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var a=i(27486);i(618);var s=i(72277),n=i(22405);let r=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,n.q)();return a.jsx("div",{children:a.jsx(s.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>Z,DR:()=>q,Ff:()=>u,HT:()=>h,Hd:()=>g,J2:()=>T,J9:()=>l,JB:()=>A,KN:()=>k,Lh:()=>U,MP:()=>r,MZ:()=>D,O7:()=>I,Qm:()=>z,SB:()=>_,SZ:()=>b,Sf:()=>$,Si:()=>G,Zq:()=>S,aY:()=>m,bc:()=>B,dE:()=>j,en:()=>F,hB:()=>s,he:()=>R,hq:()=>n,jN:()=>M,ju:()=>x,oe:()=>p,tC:()=>N,tt:()=>y,u7:()=>c,uv:()=>o,vl:()=>C,wU:()=>f,yG:()=>w,yn:()=>v,z7:()=>P,zN:()=>d});var a=i(12738);let s=(0,a.Ps)`
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
`,l=(0,a.Ps)`
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
`,o=(0,a.Ps)`
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
`,x=(0,a.Ps)`
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
`;let h=(0,a.Ps)`
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
`;let g=(0,a.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,j=(0,a.Ps)`
  mutation editNewProducts($id: uuid!, $data: news_set_input!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
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
`,$=(0,a.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,y=(0,a.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,f=(0,a.Ps)`
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
`,P=(0,a.Ps)`
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
`,Z=(0,a.Ps)`
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
`,k=(0,a.Ps)`
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
`,D=(0,a.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,q=(0,a.Ps)`
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
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,I=(0,a.Ps)`
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
`,R=(0,a.Ps)`
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
`,U=(0,a.Ps)`
  mutation addDiscount($data: product_discounts_insert_input!) {
    insert_product_discounts_one(object: $data) {
      id
    }
  }
`,B=(0,a.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,G=(0,a.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,T=(0,a.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
    }
  }
`},83541:(e,t,i)=>{"use strict";i.d(t,{c:()=>a});let a=async(e,t,i)=>{try{return(await fetch(t,{method:"PUT",headers:{"Content-Type":`${i}/*`,"x-amz-acl":"public-read"},body:e})).url.split("?")[0]}catch(e){throw alert(e),console.log(e),Error(e)}}},68614:(e,t,i)=>{"use strict";i.d(t,{default:()=>B});var a=i(27486),s=i(97687),n=i(618);i(38165);var r=i(46811),d=i(42453),l=i(35549),o=i(15532),c=i(5436),u=i(40136),m=i(1416),p=i(30675),_=i(30965),x=i(7556),h=i(58894),g=i(38860),j=i(66718),v=i(83541),$=i(22405),y=i(81239);let f=({open:e,handleClose:t,invoiceData:i})=>{let[s,r]=(0,n.useState)(),[d]=(0,g.D)(j.Sf),[l]=(0,g.D)(j.vl),{setGlobalMsg:c}=(0,$.q)(),f=(0,n.useRef)(null),{control:b,reset:P,handleSubmit:w,formState:{errors:S}}=(0,h.cI)({defaultValues:{title:"",description:""}}),Z=async e=>{try{let e=await d({variables:{content_type:"pdf",folder:"quotations"}}),t=await (0,v.c)(s[0],e.data.getFileUploadUrl.fileUploadUrl,"image");await l({variables:{id:i.id,invoice_file_url:t}}),r(""),c("➕ Send Invoice file suceessful")}catch(e){c("❌ Send file error")}},N=()=>{r(""),t()};return(0,a.jsxs)(u.ZP,{open:e,anchor:"right",variant:"temporary",onClose:N,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[a.jsx(p.Z,{variant:"h5",children:"Send Invoice File"}),a.jsx(m.Z,{size:"small",onClick:N,children:a.jsx("i",{className:"ri-close-line text-2xl"})})]}),a.jsx(x.Z,{}),a.jsx("div",{className:"p-5",children:(0,a.jsxs)("form",{onSubmit:w(e=>Z(e)),className:"flex flex-col gap-5",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[a.jsx(_.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:s,className:"flex-auto",InputProps:{readOnly:!0,endAdornment:s?a.jsx(y.Z,{position:"end",children:a.jsx(m.Z,{size:"small",edge:"end",onClick:()=>r(""),children:a.jsx("i",{className:"ri-close-line"})})}):null}}),(0,a.jsxs)(o.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",a.jsx("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:t}=e.target;t&&0!==t.length&&r(t)},ref:f})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[a.jsx(o.Z,{variant:"contained",type:"submit",children:"Add"}),a.jsx(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:N,children:"Discard"})]})]})})]})};i(11158);var b=i(45162),P=i(25009);let w=({id:e,onButtonClick:t,invoiceData:i})=>{let[s,u]=(0,n.useState)(!1),[m,p]=(0,n.useState)(!1),{data:_}=(0,b.kJ)(P.i2),{lang:x}=(0,r.useParams)();return(0,a.jsxs)(a.Fragment,{children:[a.jsx(d.Z,{children:(0,a.jsxs)(l.Z,{className:"flex flex-col gap-4",children:[a.jsx(o.Z,{fullWidth:!0,variant:"contained",className:"capitalize",startIcon:a.jsx("i",{className:"ri-send-plane-line"}),onClick:()=>p(!0),children:"Send Invoice File"}),a.jsx(o.Z,{fullWidth:!0,color:"success",variant:"contained",className:"capitalize",onClick:()=>u(!0),startIcon:a.jsx("i",{className:"ri-money-dollar-circle-line"}),children:"Add Payment"})]})}),a.jsx(c.Z,{open:s,handleClose:()=>u(!1),invoiceData:i,paymentMethods:_}),a.jsx(f,{open:m,handleClose:()=>p(!1),invoiceData:i})]})};var S=i(6096),Z=i(31538),N=i.n(Z);i(67040);var k=i(52839),C=i(19396),D=i.n(C),q=i(61359),A=i(36514),M=i(57229);i(36858);let I=(e,t,i,a)=>{let s=(0,q.O4)(e.getValue(t),i);return a({itemRank:s}),s.passed},F=(0,A.Cl)(),R=({invoiceData:e})=>{let{data:t}=(0,b.kJ)(P.jh,{variables:{invoice_id:e.invoices_by_pk.id}}),[i,s]=(0,n.useState)({}),[r,d]=(0,n.useState)(t.payments),[l,o]=(0,n.useState)(""),c=(0,n.useMemo)(()=>[F.accessor("#",{header:"#",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3 text-wrap",children:a.jsx("div",{className:"flex flex-col items-start  ",children:a.jsx(p.Z,{color:"text.primary",className:"font-medium ",children:e.index+1})})})}),F.accessor("amount",{header:"Amount",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3 text-wrap",children:a.jsx("div",{className:"flex flex-col items-start  ",children:a.jsx(p.Z,{color:"text.primary",className:"font-medium ",children:e.original.amount})})})}),F.accessor("payment_method",{header:"Payment Method",cell:({row:e})=>(0,a.jsxs)(p.Z,{children:[`${e.original.payment_method}`," Ks"]})}),F.accessor("payment_date",{header:"Payment Date",cell:({row:e})=>a.jsx(p.Z,{children:`${new Date(e.original.payment_date).toLocaleDateString()}`})})],[]),u=(0,M.b7)({data:r,columns:c,filterFns:{fuzzy:I},state:{rowSelection:i,globalFilter:l},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:I,onRowSelectionChange:s,getCoreRowModel:(0,A.sC)(),onGlobalFilterChange:o,getFilteredRowModel:(0,A.vL)(),getSortedRowModel:(0,A.tj)(),getPaginationRowModel:(0,A.G_)(),getFacetedRowModel:(0,A.o6)(),getFacetedUniqueValues:(0,A.JG)(),getFacetedMinMaxValues:(0,A.HO)()});return(0,a.jsxs)(a.Fragment,{children:[a.jsx(p.Z,{className:"my-4",children:"Payment Table"}),a.jsx("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:N().table,children:[a.jsx("thead",{children:u.getHeaderGroups().map(e=>a.jsx("tr",{children:e.headers.map(e=>a.jsx("th",{children:e.isPlaceholder?null:a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:D()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,M.ie)(e.column.columnDef.header,e.getContext()),{asc:a.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:a.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),u.getFilteredRowModel().rows?.length===0?a.jsx("tbody",{children:a.jsx("tr",{children:a.jsx("td",{colSpan:u.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):a.jsx("tbody",{className:"border-be",children:u.getRowModel().rows.slice(0,u.getState().pagination.pageSize).map(e=>a.jsx("tr",{className:D()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>a.jsx("td",{className:"first:is-14",children:(0,M.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})})]})},z={paid:"secondary","partially paid":"info",completed:"success",unpaid:"error",pending:"primary"},U=({invoiceData:e})=>{let t=e?.invoices_by_pk,{setGlobalMsg:i}=(0,$.q)(),[n]=(0,g.D)(j.Zq);return a.jsx(d.Z,{className:"previewCard",children:a.jsx(l.Z,{className:"sm:!p-12",children:(0,a.jsxs)(s.ZP,{container:!0,spacing:6,children:[a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx("div",{className:"p-6 bg-actionHover rounded",children:(0,a.jsxs)("div",{className:"flex justify-between gap-y-4 flex-col sm:flex-row",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-6",children:[a.jsx("div",{className:"flex items-center",children:a.jsx(S.Z,{})}),(0,a.jsxs)("div",{children:[a.jsx(p.Z,{color:"text.primary",children:"Office 149, 450 South Brand Brooklyn"}),a.jsx(p.Z,{color:"text.primary",children:"San Diego County, CA 91905, USA"}),a.jsx(p.Z,{color:"text.primary",children:"+1 (123) 456 7891, +44 (876) 543 2198"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,a.jsxs)("div",{className:"flex flex-row gap-3",children:[a.jsx(p.Z,{variant:"h5",children:"Invoice #"}),a.jsx(k.Z,{label:t?.status,color:z[t?.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsxs)(p.Z,{color:"text.primary",children:["Invoice Number : ",t.invoice_number]}),(0,a.jsxs)(p.Z,{color:"text.primary",children:["Date Issued : ",new Date(t?.created_at).toLocaleDateString()]}),(0,a.jsxs)(p.Z,{color:"text.primary",children:["Date Due : ",new Date(t?.updated_at).toLocaleDateString()]})]})]})]})})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx(s.ZP,{container:!0,spacing:6,children:a.jsx(s.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[a.jsx(p.Z,{className:"font-medium",color:"text.primary",children:"Invoice To:"}),(0,a.jsxs)("div",{children:[a.jsx(p.Z,{children:t?.user.name}),a.jsx(p.Z,{children:t?.company}),a.jsx(p.Z,{children:t?.address}),a.jsx(p.Z,{children:t?.user.phone}),a.jsx(p.Z,{children:t?.user.email})]})]})})})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx("div",{className:"overflow-x-auto border rounded",children:(0,a.jsxs)("table",{className:N().table,children:[a.jsx("thead",{children:(0,a.jsxs)("tr",{className:"border-be",children:[a.jsx("th",{className:"!bg-transparent",children:"Product"}),a.jsx("th",{className:"!bg-transparent",children:"Brand"}),a.jsx("th",{className:"!bg-transparent",children:"Price"}),a.jsx("th",{className:"!bg-transparent",children:"Qty"}),a.jsx("th",{className:"!bg-transparent",children:"Total"})]})}),(0,a.jsxs)("tbody",{children:["`",t?.order?.order_items.map((e,t)=>a.jsxs("tr",{children:[a.jsx("td",{className:"w-70 text-wrap",children:a.jsx(p.Z,{color:"text.primary",children:e.product.title})}),a.jsx("td",{children:a.jsx(p.Z,{color:"text.primary",children:e.product.brand.title})}),a.jsx("td",{children:a.jsx(p.Z,{color:"text.primary",children:e.product.price})}),a.jsx("td",{children:a.jsx(p.Z,{color:"text.primary",children:e.quantity})}),a.jsx("td",{children:a.jsx(p.Z,{color:"text.primary",children:e.total})})]},t))]})]})})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx("div",{className:"flex justify-end flex-col gap-y-4 sm:flex-row",children:(0,a.jsxs)("div",{className:"min-is-[200px]",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[a.jsx(p.Z,{children:"Subtotal:"}),a.jsx(p.Z,{className:"font-medium",color:"text.primary",children:t?.order?.items_total})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[a.jsx(p.Z,{children:"Discount:"}),a.jsx(p.Z,{className:"font-medium",color:"text.primary",children:t?.order?.discount})]}),a.jsx(x.Z,{className:"mlb-2"}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[a.jsx(p.Z,{children:"Total:"}),a.jsx(p.Z,{className:"font-medium",color:"text.primary",children:t?.total})]})]})})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx(x.Z,{className:"border-dashed"})}),a.jsx(s.ZP,{item:!0,xs:12,children:(0,a.jsxs)(p.Z,{children:[(0,a.jsxs)(p.Z,{component:"span",className:"font-medium",color:"text.primary",children:["Note :"," "]}),t?.note]})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx(R,{invoiceData:e})})]})})})},B=()=>{let{id:e}=(0,r.useParams)(),{data:t}=(0,b.kJ)(P.xU,{variables:{id:e}});return(0,a.jsxs)(s.ZP,{container:!0,spacing:6,children:[a.jsx(s.ZP,{item:!0,xs:12,md:9,children:a.jsx(U,{invoiceData:t})}),"paid"!==t.invoices_by_pk.status&&a.jsx(s.ZP,{item:!0,xs:12,md:3,children:a.jsx(w,{onButtonClick:()=>{window.print()},invoiceData:t?.invoices_by_pk})})]})}},5436:(e,t,i)=>{"use strict";i.d(t,{Z:()=>f});var a=i(27486),s=i(618),n=i(40136),r=i(1416),d=i(30675),l=i(30965),o=i(12741),c=i(80013),u=i(81239),m=i(74054),p=i(48152),_=i(15532),x=i(7556),h=i(32475),g=i(38860),j=i(66718),v=i(91347),$=i(22405);let y={paymentDate:new Date,paymentMethod:"select-method",paymentAmount:500,paymentNote:""},f=({open:e,handleClose:t,invoiceData:i,paymentMethods:f})=>{let{setGlobalMsg:b}=(0,$.q)(),[P,w]=(0,s.useState)(!1),[S,Z]=(0,s.useState)(y),[N]=(0,g.D)(j.tC),k=async e=>{e.preventDefault();try{w(!0),await N({variables:{amount:S.amount,invoice_id:i.id,payment_date:S.payment_date,payment_method:S.payment_method}}),w(!1),b("✅ Payment Send Successful"),Z(""),t()}catch(e){console.log("Error ",e)}},C=()=>{t(),Z(y)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ZP,{open:e,anchor:"right",variant:"temporary",onClose:C,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[a.jsx(d.Z,{variant:"h5",children:"Add Payment"}),a.jsx(r.Z,{size:"small",onClick:C,children:a.jsx("i",{className:"ri-close-line text-2xl"})})]}),a.jsx(x.Z,{}),(0,a.jsxs)("div",{className:"p-5",children:[(0,a.jsxs)(d.Z,{className:"flex justify-end text-red-600",children:["Balance : ",i.balance?i.balance.toLocaleString():0]}),(0,a.jsxs)("form",{onSubmit:k,className:"flex flex-col gap-5 mt-5",children:[a.jsx(l.Z,{fullWidth:!0,id:"amount",label:"Payment Amount",type:"number",InputProps:{startAdornment:a.jsx(u.Z,{position:"start"})},value:S.amount,onChange:e=>Z({...S,amount:+e.target.value})}),a.jsx(h.Z,{selected:S.payment_date,id:"payment-date",onChange:e=>null!==e&&Z({...S,payment_date:e}),customInput:a.jsx(l.Z,{fullWidth:!0,label:"Payment Date"})}),(0,a.jsxs)(o.Z,{fullWidth:!0,children:[a.jsx(c.Z,{htmlFor:"payment-method",children:"Payment Method"}),(0,a.jsxs)(m.Z,{label:"Payment Method",labelId:"payment-method",id:"payment-method-select",value:S.payment_method,onChange:e=>Z({...S,payment_method:e.target.value}),children:[a.jsx(p.Z,{value:"select-method",disabled:!0,children:"Select Payment Method"}),f.payment_methods.map(e=>a.jsx(p.Z,{value:e.name,children:e.name},e.id))]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[a.jsx(_.Z,{loading:P,size:"large",variant:"contained",type:"submit",children:"Send"}),a.jsx(_.Z,{size:"large",variant:"outlined",color:"secondary",type:"reset",onClick:C,children:"Cancel"})]})]})]})]}),a.jsx(v.Z,{})]})}},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},84472:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o});var a=i(79703);i(31976);var s=i(92334);let n=(0,s.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/invoice/preview/index.jsx`),{__esModule:r,$$typeof:d}=n;n.default;let l=(0,s.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/invoice/preview/index.jsx#default`),o=async()=>a.jsx(l,{})},67040:()=>{}};var t=require("../../../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[9357,6491,4588,3440,3198,7541,3133,965,7110,6514,5073,8894,136,264,5396,751,5262,2475],()=>i(12318));module.exports=a})();