<<<<<<< HEAD
const CHUNK_PUBLIC_PATH = "server/app/[lang]/(dashboard)/products/list/page.js";
const runtime = require("../../../../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/_24f35d._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_fac3e2._.js");
runtime.loadChunk("server/chunks/ssr/src_data_dictionaries_4d815b._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/[lang]/(dashboard)/products/list/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/[lang]/(dashboard)/products/list/page { COMPONENT_0 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_1 => \"[project]/src/app/[lang]/layout.jsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_2 => \"[project]/src/app/[lang]/(dashboard)/layout.jsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_3 => \"[project]/src/app/[lang]/(dashboard)/products/list/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <facade>", CHUNK_PUBLIC_PATH).exports;
=======
(()=>{var e={};e.id=6804,e.ids=[6804],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},78535:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l}),i(26743),i(5114),i(32687),i(85133);var a=i(79193),r=i(71854),s=i(33997),n=i.n(s),d=i(73320),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);i.d(t,o);let l=["",{children:["[lang]",{children:["(dashboard)",{children:["products",{children:["list",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,26743)),"D:\\projects\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\products\\list\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5114)),"D:\\projects\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,32687)),"D:\\projects\\alpha-admin\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\projects\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\products\\list\\page.jsx"],u="/[lang]/(dashboard)/products/list/page",m={require:i,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/[lang]/(dashboard)/products/list/page",pathname:"/[lang]/products/list",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},70672:(e,t,i)=>{Promise.resolve().then(i.bind(i,92986))},80018:(e,t,i)=>{"use strict";i.d(t,{Z:()=>v});var a=i(63594),r=i(60170),s=i(618),n=i(69360),d=i(82029),o=i(30675),l=i(54509),c=i(6593),u=i(70224),m=i(27486);let p=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],_=e=>{let{classes:t}=e;return(0,d.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u.J,t)},g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,r.Z)({[`& .${u.Z.title}`]:t.title,[`& .${u.Z.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),x=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),h=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),$=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),v=s.forwardRef(function(e,t){let i=(0,l.i)({props:e,name:"MuiCardHeader"}),{action:s,avatar:d,className:c,component:u="div",disableTypography:v=!1,subheader:b,subheaderTypographyProps:j,title:f,titleTypographyProps:P}=i,y=(0,a.Z)(i,p),S=(0,r.Z)({},i,{component:u,disableTypography:v}),w=_(S),Z=f;null==Z||Z.type===o.Z||v||(Z=(0,m.jsx)(o.Z,(0,r.Z)({variant:d?"body2":"h5",className:w.title,component:"span",display:"block"},P,{children:Z})));let k=b;return null==k||k.type===o.Z||v||(k=(0,m.jsx)(o.Z,(0,r.Z)({variant:d?"body2":"body1",className:w.subheader,color:"text.secondary",component:"span",display:"block"},j,{children:k}))),(0,m.jsxs)(g,(0,r.Z)({className:(0,n.Z)(w.root,c),as:u,ref:t,ownerState:S},y,{children:[d&&(0,m.jsx)(x,{className:w.avatar,ownerState:S,children:d}),(0,m.jsxs)($,{className:w.content,ownerState:S,children:[Z,k]}),s&&(0,m.jsx)(h,{className:w.action,ownerState:S,children:s})]}))})},70224:(e,t,i)=>{"use strict";i.d(t,{J:()=>s,Z:()=>n});var a=i(3546),r=i(82517);function s(e){return(0,r.ZP)("MuiCardHeader",e)}let n=(0,a.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"])},48398:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>j});var a=i(27486),r=i(618),s=i(38165),n=i(36370),d=i(29454),o=i(39926),l=i(48152),c=i(64037),u=i(29597),m=i(98108),p=i(5773),_=i(1416),g=i(7556),x=i(19396),h=i.n(x),$=i(63665);let v=e=>{let{tooltipProps:t,children:i}=e;return t?.title?a.jsx(n.Z,{...t,children:i}):i},b=({children:e,option:t})=>t.href?a.jsx(d.Z,{component:s.default,href:t.href,...t.linkProps,children:e}):a.jsx(a.Fragment,{children:e}),j=e=>{let{tooltipProps:t,icon:i,iconClassName:s,options:n,leftAlignMenu:d,iconButtonProps:x}=e,[j,f]=(0,r.useState)(!1),P=(0,r.useRef)(null),{settings:y}=(0,$.r)(),S=e=>{P.current&&P.current.contains(e.target)||f(!1)};return(0,a.jsxs)(a.Fragment,{children:[a.jsx(v,{tooltipProps:t,children:a.jsx(_.Z,{ref:P,size:"small",onClick:()=>{f(e=>!e)},...x,children:"string"==typeof i?a.jsx("i",{className:h()(i,s)}):i||a.jsx("i",{className:h()("ri-more-2-line",s)})})}),a.jsx(o.Z,{open:j,anchorEl:P.current,placement:d?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:({TransitionProps:e})=>a.jsx(m.Z,{...e,children:a.jsx(p.Z,{className:"bordered"===y.skin?"border shadow-none":"shadow-lg",children:a.jsx(u.d,{onClickAway:S,children:a.jsx(c.Z,{autoFocusItem:j,children:n.map((e,t)=>"string"==typeof e?a.jsx(l.Z,{onClick:S,children:e},t):"divider"in e?e.divider&&a.jsx(g.Z,{...e.dividerProps},t):a.jsx(l.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{S(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,a.jsxs)(b,{option:e,children:[("string"==typeof e.icon?a.jsx("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})})]})}},91347:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var a=i(27486);i(618);var r=i(72277),s=i(22405);let n=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,s.q)();return a.jsx("div",{children:a.jsx(r.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>Z,DR:()=>M,Ff:()=>u,HT:()=>x,Hd:()=>h,J2:()=>B,J9:()=>o,JB:()=>I,KN:()=>C,Lh:()=>z,MP:()=>n,MZ:()=>q,O7:()=>R,Qm:()=>A,SB:()=>_,SZ:()=>P,Sf:()=>b,Si:()=>U,Zq:()=>w,aY:()=>m,bc:()=>H,dE:()=>$,en:()=>E,hB:()=>r,he:()=>F,hq:()=>s,jN:()=>D,ju:()=>g,oe:()=>p,tC:()=>k,tt:()=>j,u7:()=>c,uv:()=>l,vl:()=>N,wU:()=>f,yG:()=>S,yn:()=>v,z7:()=>y,zN:()=>d});var a=i(12738);let r=(0,a.Ps)`
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
`;let h=(0,a.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,$=(0,a.Ps)`
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
`,b=(0,a.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,j=(0,a.Ps)`
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
`,P=(0,a.Ps)`
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
`,S=(0,a.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status) {
      message
    }
  }
`,w=(0,a.Ps)`
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
`,k=(0,a.Ps)`
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
`,C=(0,a.Ps)`
  mutation sendQInvoice($discounted_amount: numeric!, $quotation_id: uuid!) {
    sendInvoice(discounted_amount: $discounted_amount, quotation_id: $quotation_id) {
      message
    }
  }
`,N=(0,a.Ps)`
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
`,M=(0,a.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,I=(0,a.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,D=(0,a.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,R=(0,a.Ps)`
  mutation addSeriveCenter($data: service_centers_insert_input!) {
    insert_service_centers_one(object: $data) {
      id
    }
  }
`,E=(0,a.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,F=(0,a.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,A=(0,a.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,z=(0,a.Ps)`
  mutation addDiscount($data: product_discounts_insert_input!) {
    insert_product_discounts_one(object: $data) {
      id
    }
  }
`,H=(0,a.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,U=(0,a.Ps)`
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
`},92986:(e,t,i)=>{"use strict";i.d(t,{default:()=>Q});var a=i(27486),r=i(25009),s=i(45162),n=i(97687),d=i(618),o=i(42453),l=i(35549),c=i(30675),u=i(67138),m=i(19396),p=i.n(m),_=i(81636);let g=({count:e,title:t})=>((0,u.Z)(e=>e.breakpoints.down("md")),(0,u.Z)(e=>e.breakpoints.down("sm")),a.jsx(o.Z,{children:(0,a.jsxs)(l.Z,{className:"flex justify-between gap-1 ",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1 flex-grow",children:[a.jsx(c.Z,{color:"text.primary",variant:"h3",children:e}),a.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:a.jsx(c.Z,{variant:"h5",color:`${"Active"===t?"green":"Brand"===t?"yellow":"Category"===t?"orange":"red"}`,children:t})})]}),a.jsx(_.default,{skin:"light",variant:"rounded",size:42,children:a.jsx("i",{className:`${"Active"===t?"ri-check-double-fill":"Brand"===t?"ri-store-3-fill":"Category"===t?"ri-discount-percent-fill":"ri-close-circle-fill"}`})})]})}));var x=i(38165),h=i(46811),$=i(80018),v=i(15532),b=i(52839),j=i(7556),f=i(1416),P=i(46797),y=i(30965),S=i(61359),w=i(36514),Z=i(57229),k=i(12741),C=i(80013),N=i(48152),q=i(74054);let M={"In Stock":!0,"Out of Stock":!1},I=({setData:e,productData:t})=>{let[i,o]=(0,d.useState)(""),[c,u]=(0,d.useState)(""),[m,p]=(0,d.useState)(""),{data:_}=(0,s.kJ)(r.xH);return(0,d.useEffect)(()=>{e(t?.filter(e=>(!i||e.product_category.title===i)&&(!c||e.stock===M[c])&&(""===m||e.disabled===("false"===m)))??[])},[i,c,m,t]),a.jsx(l.Z,{children:(0,a.jsxs)(n.ZP,{container:!0,spacing:6,children:[a.jsx(n.ZP,{item:!0,xs:12,sm:4,children:(0,a.jsxs)(k.Z,{fullWidth:!0,children:[a.jsx(C.Z,{id:"status-select",children:"Status"}),(0,a.jsxs)(q.Z,{fullWidth:!0,id:"select-status",label:"Status",value:m,onChange:e=>p(e.target.value),labelId:"status-select",children:[a.jsx(N.Z,{value:"",children:"Select Status"}),a.jsx(N.Z,{value:"true",children:"Enabled"}),a.jsx(N.Z,{value:"false",children:"Disabled"})]})]})}),a.jsx(n.ZP,{item:!0,xs:12,sm:4,children:(0,a.jsxs)(k.Z,{fullWidth:!0,children:[a.jsx(C.Z,{id:"category-select",children:"Category"}),(0,a.jsxs)(q.Z,{fullWidth:!0,id:"select-category",value:i,onChange:e=>o(e.target.value),label:"Category",labelId:"category-select",children:[a.jsx(N.Z,{value:"",children:"Select Category"}),_.product_categories.map(e=>a.jsx(N.Z,{value:e.title,children:e.title},e.id))]})]})})]})})};i(48398);var D=i(11158),R=i(31538),E=i.n(R),F=i(38860),A=i(48366),z=i(66718),H=i(22405),U=i(91347);let B=(e,t,i,a)=>{let r=(0,S.O4)(e.getValue(t),i);return a({itemRank:r}),r.passed},G=({value:e,onChange:t,debounce:i=500,...r})=>{let[s,n]=(0,d.useState)(e);return(0,d.useEffect)(()=>{n(e)},[e]),(0,d.useEffect)(()=>{let e=setTimeout(()=>{t(s)},i);return()=>clearTimeout(e)},[s]),a.jsx(y.Z,{...r,value:s,onChange:e=>n(e.target.value),size:"small"})},O={false:{title:"Enabled",color:"success"},true:{title:"Disabled",color:"error"}},J=(0,w.Cl)(),T=()=>{let{setGlobalMsg:e}=(0,H.q)(),{data:t}=(0,s.kJ)(r.tT,{fetchPolicy:"network-only"}),[i]=(0,F.D)(z.u7),[n,l]=(0,d.useState)({}),[u,m]=(0,d.useState)(t.products),[_,g]=(0,d.useState)(u),[y,S]=(0,d.useState)(""),{lang:k}=(0,h.useParams)(),C=(0,d.useMemo)(()=>[J.accessor("title",{header:"Product",cell:({row:e})=>(0,a.jsxs)("div",{className:"flex items-center gap-4 ",children:[a.jsx("img",{src:e.original?.product_medias[0]?.media_url,width:38,height:38,className:"rounded bg-actionHover"}),(0,a.jsxs)("div",{className:"flex flex-col w-60 text-wrap",children:[a.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.title}),a.jsx(c.Z,{variant:"body2",children:e.original.brand.title})]})]})}),J.accessor("product_category.title",{header:"Category",cell:({row:e})=>(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[a.jsx(A.Z,{src:e.original.product_category.image_url}),a.jsx(c.Z,{color:"text.primary",children:e.original.product_category.title})]})}),J.accessor("serial_number",{header:"Serial No.",cell:({row:e})=>a.jsx(c.Z,{children:e.original.serial_number?e.original.serial_number:"-"})}),J.accessor("price",{header:"Price",cell:({row:e})=>a.jsx(c.Z,{children:e.original.price.toLocaleString()})}),J.accessor("created_at",{header:"Date",cell:({row:e})=>a.jsx(c.Z,{children:e.original.created_at.substring(0,10)})}),J.accessor("disabled",{header:"Status",cell:({row:e})=>a.jsx(b.Z,{label:!0===e.original.disabled?"Disabled":"Enabled",variant:"tonal",color:O[e.original.disabled].color,size:"small"})}),J.accessor("actions",{header:"Actions",cell:({row:e})=>(0,a.jsxs)("div",{className:"flex items-center",children:[a.jsx(f.Z,{size:"small",children:a.jsx(x.default,{href:(0,D.U)(`/products/edit/${e.original.id}`,k),className:"flex",children:a.jsx("i",{className:"ri-edit-box-line text-[22px] "})})}),a.jsx(f.Z,{children:a.jsx(x.default,{href:(0,D.U)(`/products/details/${e.original.id}`,k),className:"flex",children:a.jsx("i",{className:"ri-eye-line text-textSecondary"})})})]}),enableSorting:!1})],[u,_]),N=(0,Z.b7)({data:_,columns:C,filterFns:{fuzzy:B},state:{rowSelection:n,globalFilter:y},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:B,onRowSelectionChange:l,getCoreRowModel:(0,w.sC)(),onGlobalFilterChange:S,getFilteredRowModel:(0,w.vL)(),getSortedRowModel:(0,w.tj)(),getPaginationRowModel:(0,w.G_)(),getFacetedRowModel:(0,w.o6)(),getFacetedUniqueValues:(0,w.JG)(),getFacetedMinMaxValues:(0,w.HO)()});return console.log("data ",u),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.Z,{children:[a.jsx($.Z,{title:"Filters",className:"pbe-4"}),a.jsx(I,{setData:g,productData:u}),a.jsx(j.Z,{}),(0,a.jsxs)("div",{className:"flex justify-between flex-col items-start sm:flex-row sm:items-center gap-y-4 p-5",children:[a.jsx(G,{value:y??"",onChange:e=>S(String(e)),placeholder:"Search Product",className:"max-sm:is-full"}),a.jsx("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:a.jsx(v.Z,{variant:"contained",component:x.default,href:(0,D.U)("/products/add",k),startIcon:a.jsx("i",{className:"ri-add-line"}),className:"max-sm:is-full is-auto",children:"Add Product"})})]}),a.jsx("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:E().table,children:[a.jsx("thead",{children:N.getHeaderGroups().map(e=>a.jsx("tr",{children:e.headers.map(e=>a.jsx("th",{children:e.isPlaceholder?null:a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:p()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,Z.ie)(e.column.columnDef.header,e.getContext()),{asc:a.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:a.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===N.getFilteredRowModel().rows.length?a.jsx("tbody",{children:a.jsx("tr",{children:a.jsx("td",{colSpan:N.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):a.jsx("tbody",{children:N.getRowModel().rows.slice(0,N.getState().pagination.pageSize).map(e=>a.jsx("tr",{className:p()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>a.jsx("td",{children:(0,Z.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),a.jsx(P.Z,{rowsPerPageOptions:[10,25,50],component:"div",className:"border-bs",count:N.getFilteredRowModel().rows.length,rowsPerPage:N.getState().pagination.pageSize,page:N.getState().pagination.pageIndex,onPageChange:(e,t)=>{N.setPageIndex(t)},onRowsPerPageChange:e=>N.setPageSize(Number(e.target.value))})]}),a.jsx(U.Z,{})]})},Q=()=>{let{data:e}=(0,s.kJ)(r.ld);return(0,a.jsxs)(n.ZP,{container:!0,spacing:6,children:[a.jsx(n.ZP,{item:!0,xs:12,md:3,sm:6,children:a.jsx(g,{count:e.activeProduct.aggregate.count,title:"Active"})}),a.jsx(n.ZP,{item:!0,xs:12,md:3,sm:6,children:a.jsx(g,{count:e.brandProduct.aggregate.count,title:"Brand"})}),a.jsx(n.ZP,{item:!0,xs:12,md:3,sm:6,children:a.jsx(g,{count:e.categoryProduct.aggregate.count,title:"Category"})}),a.jsx(n.ZP,{item:!0,xs:12,md:3,sm:6,children:a.jsx(g,{count:e.disableProduct.aggregate.count,title:"Disable"})}),a.jsx(n.ZP,{item:!0,xs:12,children:a.jsx(T,{})})]})}},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},26743:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var a=i(79703),r=i(92334);let s=(0,r.createProxy)(String.raw`D:\projects\alpha-admin\src\views\products\list\index.jsx`),{__esModule:n,$$typeof:d}=s;s.default;let o=(0,r.createProxy)(String.raw`D:\projects\alpha-admin\src\views\products\list\index.jsx#default`),l=async()=>a.jsx(o,{})},38860:(e,t,i)=>{"use strict";i.d(t,{D:()=>u});var a=i(39942),r=i(4550),s=i(36759),n=i(93868),d=i(12576),o=i(23644),l=i(91053),c=i(3678).Nq?r.useLayoutEffect:r.useEffect;function u(e,t){var i=(0,l.x)(null==t?void 0:t.client);(0,d.Vp)(e,d.n_.Mutation);var u=r.useState({called:!1,loading:!1,client:i}),m=u[0],p=u[1],_=r.useRef({result:m,mutationId:0,isMounted:!0,client:i,mutation:e,options:t});c(function(){Object.assign(_.current,{client:i,options:t,mutation:e})});var g=r.useCallback(function(e){void 0===e&&(e={});var t=_.current,i=t.options,r=t.mutation,d=(0,a.pi)((0,a.pi)({},i),{mutation:r}),l=e.client||_.current.client;_.current.result.loading||d.ignoreResults||!_.current.isMounted||p(_.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:l});var c=++_.current.mutationId,u=(0,s.J)(d,e);return l.mutate(u).then(function(t){var i,a,r=t.data,s=t.errors,d=s&&s.length>0?new o.cA({graphQLErrors:s}):void 0,m=e.onError||(null===(i=_.current.options)||void 0===i?void 0:i.onError);if(d&&m&&m(d,u),c===_.current.mutationId&&!u.ignoreResults){var g={called:!0,loading:!1,data:r,error:d,client:l};_.current.isMounted&&!(0,n.D)(_.current.result,g)&&p(_.current.result=g)}var x=e.onCompleted||(null===(a=_.current.options)||void 0===a?void 0:a.onCompleted);return d||null==x||x(t.data,u),t}).catch(function(t){if(c===_.current.mutationId&&_.current.isMounted){var i,a={loading:!1,error:t,data:void 0,called:!0,client:l};(0,n.D)(_.current.result,a)||p(_.current.result=a)}var r=e.onError||(null===(i=_.current.options)||void 0===i?void 0:i.onError);if(r)return r(t,u),{data:void 0,errors:t};throw t})},[]),x=r.useCallback(function(){if(_.current.isMounted){var e={called:!1,loading:!1,client:_.current.client};Object.assign(_.current,{mutationId:0,result:e}),p(e)}},[]);return r.useEffect(function(){var e=_.current;return e.isMounted=!0,function(){e.isMounted=!1}},[]),[g,(0,a.pi)({reset:x},m)]}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[9357,6491,3302,3440,3198,7541,3133,965,8229,6514,5073,6797,764,9599],()=>i(78535));module.exports=a})();
>>>>>>> 44527182998c4519db88e5929896761b783cb2ba
