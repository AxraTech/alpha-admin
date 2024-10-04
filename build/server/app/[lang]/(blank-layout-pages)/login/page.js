(()=>{var e={};e.id=6243,e.ids=[6243],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},94036:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>l,routeModule:()=>m,tree:()=>u}),i(32990),i(11314),i(32687),i(85133);var r=i(79193),a=i(71854),n=i(33997),s=i.n(n),o=i(73320),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);i.d(t,d);let u=["",{children:["[lang]",{children:["(blank-layout-pages)",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,32990)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(blank-layout-pages)\\login\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,11314)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(blank-layout-pages)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,32687)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(blank-layout-pages)\\login\\page.jsx"],c="/[lang]/(blank-layout-pages)/login/page",p={require:i,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[lang]/(blank-layout-pages)/login/page",pathname:"/[lang]/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},74859:(e,t,i)=>{Promise.resolve().then(i.bind(i,86338)),Promise.resolve().then(i.bind(i,75831)),Promise.resolve().then(i.bind(i,92117)),Promise.resolve().then(i.bind(i,77696)),Promise.resolve().then(i.bind(i,80878)),Promise.resolve().then(i.bind(i,84802))},7506:(e,t,i)=>{Promise.resolve().then(i.bind(i,14995))},9594:(e,t,i)=>{"use strict";i.d(t,{Z:()=>y});var r=i(6520),a=i(13211),n=i(618),s=i(69360),o=i(47150),d=i(54913),u=i(26829),l=i(28502),c=i(90961),p=i(46324),m=i(66875),_=i(62209);function g(e){return(0,_.ZP)("MuiIconButton",e)}let v=(0,m.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var h=i(27486);let f=["edge","children","className","color","disabled","disableFocusRipple","size"],$=e=>{let{classes:t,disabled:i,color:r,edge:a,size:n}=e,s={root:["root",i&&"disabled","default"!==r&&`color${(0,p.Z)(r)}`,a&&`edge${(0,p.Z)(a)}`,`size${(0,p.Z)(n)}`]};return(0,o.Z)(s,g,t)},b=(0,u.ZP)(c.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,"default"!==i.color&&t[`color${(0,p.Z)(i.color)}`],i.edge&&t[`edge${(0,p.Z)(i.edge)}`],t[`size${(0,p.Z)(i.size)}`]]}})(({theme:e,ownerState:t})=>(0,a.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12}),({theme:e,ownerState:t})=>{var i;let r=null==(i=(e.vars||e).palette)?void 0:i[t.color];return(0,a.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,a.Z)({color:null==r?void 0:r.main},!t.disableRipple&&{"&:hover":(0,a.Z)({},r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(r.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${v.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),y=n.forwardRef(function(e,t){let i=(0,l.i)({props:e,name:"MuiIconButton"}),{edge:n=!1,children:o,className:d,color:u="default",disabled:c=!1,disableFocusRipple:p=!1,size:m="medium"}=i,_=(0,r.Z)(i,f),g=(0,a.Z)({},i,{edge:n,color:u,disabled:c,disableFocusRipple:p,size:m}),v=$(g);return(0,h.jsx)(b,(0,a.Z)({className:(0,s.Z)(v.root,d),centerRipple:!0,focusRipple:!p,disabled:c,ref:t},_,{ownerState:g,children:o}))})},57971:(e,t,i)=>{"use strict";i.d(t,{Z:()=>P});var r,a=i(6520),n=i(13211),s=i(618),o=i(69360),d=i(47150),u=i(46324),l=i(72660),c=i(19910),p=i(3488),m=i(26829),_=i(66875),g=i(62209);function v(e){return(0,g.ZP)("MuiInputAdornment",e)}let h=(0,_.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var f=i(28502),$=i(27486);let b=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=e=>{let{classes:t,disablePointerEvents:i,hiddenLabel:r,position:a,size:n,variant:s}=e,o={root:["root",i&&"disablePointerEvents",a&&`position${(0,u.Z)(a)}`,s,r&&"hiddenLabel",n&&`size${(0,u.Z)(n)}`]};return(0,d.Z)(o,v,t)},A=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`position${(0,u.Z)(i.position)}`],!0===i.disablePointerEvents&&t.disablePointerEvents,t[i.variant]]}})(({theme:e,ownerState:t})=>(0,n.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&{[`&.${h.positionStart}&:not(.${h.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})),P=s.forwardRef(function(e,t){let i=(0,f.i)({props:e,name:"MuiInputAdornment"}),{children:d,className:u,component:m="div",disablePointerEvents:_=!1,disableTypography:g=!1,position:v,variant:h}=i,P=(0,a.Z)(i,b),k=(0,p.Z)()||{},x=h;h&&k.variant,k&&!x&&(x=k.variant);let w=(0,n.Z)({},i,{hiddenLabel:k.hiddenLabel,size:k.size,disablePointerEvents:_,position:v,variant:x}),j=y(w);return(0,$.jsx)(c.Z.Provider,{value:null,children:(0,$.jsx)(A,(0,n.Z)({as:m,ownerState:w,className:(0,o.Z)(j.root,u),ref:t},P,{children:"string"!=typeof d||g?(0,$.jsxs)(s.Fragment,{children:["start"===v?r||(r=(0,$.jsx)("span",{className:"notranslate",children:"​"})):null,d]}):(0,$.jsx)(l.Z,{color:"text.secondary",children:d})}))})})},10194:(e,t,i)=>{"use strict";i.d(t,{I:()=>s});var r=i(618),a=i(23203),n=i(63665);let s=(e,t,i,s,o)=>{let{settings:d}=(0,n.r)(),{mode:u,systemMode:l}=(0,a.tv)();return(0,r.useMemo)(()=>{let r=d?.skin==="bordered",a="dark"===e;return r&&s&&o?a?o:s:a?i:t},[e,u,l])}},75831:(e,t,i)=>{"use strict";i.d(t,{default:()=>u});var r=i(27486),a=i(19396),n=i.n(a),s=i(63665),o=i(95346),d=i(6303);let u=e=>{let{children:t,systemMode:i}=e,{settings:a}=(0,s.r)();return(0,o.Z)(i),r.jsx("div",{className:n()(d.jh.root,"is-full bs-full"),"data-skin":a.skin,children:t})}},9044:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var r=i(618),a=i(92117);let n=()=>{let e=(0,r.useContext)(a.Z);if(void 0===e)throw Error("VerticalNav Component is required!");return e}},60552:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u});var r=i(27486),a=i(39044),n=i(26829),s=i(86746),o=i(10194);let d=(0,n.ZP)("img")({inlineSize:"100%",position:"absolute",insetBlockEnd:0,zIndex:-1}),u=e=>{let{image1:t,image2:i,maskImg:n,mode:u}=e,l=(0,s.Z)(),c=(0,a.Z)(l.breakpoints.down("md")),p=(0,o.I)(u,"/images/pages/misc-mask-light.png","/images/pages/misc-mask-dark.png");function m(e){return e&&"object"==typeof e&&"src"in e}return c?null:(0,r.jsxs)(r.Fragment,{children:[void 0===t||m(t)?r.jsx("img",{alt:t?.alt||"tree-1",src:t?.src||"/images/illustrations/objects/tree-1.png",className:t?.className||"absolute inline-start-0 block-end-0",width:t?.width,height:t?.height||200}):t,void 0===n||m(n)?r.jsx(d,{alt:n?.alt||"mask",src:n?.src||p,className:n?.className,width:n?.width,height:n?.height}):n,void 0===i||m(i)?r.jsx("img",{alt:i?.alt||"tree-2",src:i?.src||"/images/illustrations/objects/tree-2.png",className:i?.className||"absolute inline-end-0 block-end-0",width:i?.width,height:i?.height||200}):i]})}},6096:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var r=i(27486),a=i(618),n=i(39998),s=i(36354),o=i(9044),d=i(63665),u=i(42761);let l={src:"/_next/static/media/logo.d5ae22de.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAr4P/xAAbEAEAAgIDAAAAAAAAAAAAAAABAhEAAwQTYf/aAAgBAQABPwCRuORGQy6yxKKfc//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:8},c=n.Z.span`
  color: ${({color:e})=>e??"var(--mui-palette-text-primary)"};
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  transition: ${({transitionDuration:e})=>`margin-inline-start ${e}ms ease-in-out, opacity ${e}ms ease-in-out`};

  ${({isHovered:e,isCollapsed:t,isBreakpointReached:i})=>i||!t||e?"opacity: 1; margin-inline-start: 10px;":"opacity: 0; margin-inline-start: 0;"}
`,p=({color:e})=>{let t=(0,a.useRef)(null),{isHovered:i,transitionDuration:n,isBreakpointReached:p}=(0,o.Z)(),{settings:m}=(0,d.r)(),{layout:_}=m;return(0,a.useEffect)(()=>{"collapsed"===_&&t&&t.current&&(p||"collapsed"!==_||i?t.current.classList.remove("hidden"):t.current?.classList.add("hidden"))},[i,_,p]),(0,r.jsxs)("div",{className:"flex items-center min-bs-[24px]",children:[r.jsx(u.default,{src:l,width:42,height:42,className:"rounded-full bg-contain",placeholder:"blur",alt:"logo"}),r.jsx(c,{color:e,ref:t,isHovered:i,isCollapsed:"collapsed"===_,transitionDuration:n,isBreakpointReached:p,children:s.Z.templateName})]})}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>E,DR:()=>N,Ff:()=>c,HT:()=>v,Hd:()=>h,J2:()=>V,J9:()=>d,JB:()=>q,KN:()=>Z,Lh:()=>L,MP:()=>s,MZ:()=>R,O7:()=>Q,Qm:()=>O,SB:()=>_,SZ:()=>x,Sf:()=>b,Si:()=>G,Zq:()=>S,aY:()=>p,bc:()=>F,dE:()=>f,dn:()=>T,en:()=>B,hB:()=>a,he:()=>z,hq:()=>n,jN:()=>M,ju:()=>g,mU:()=>k,mt:()=>U,oe:()=>m,pE:()=>J,rV:()=>D,si:()=>H,tC:()=>C,tt:()=>y,tz:()=>P,u7:()=>l,ui:()=>K,uv:()=>u,vl:()=>I,wU:()=>A,yG:()=>j,yn:()=>$,z7:()=>w,zN:()=>o});var r=i(12738);let a=(0,r.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,n=(0,r.Ps)`
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
`,s=(0,r.Ps)`
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
`,o=(0,r.Ps)`
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
`,d=(0,r.Ps)`
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
`,u=(0,r.Ps)`
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
`,l=(0,r.Ps)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`,c=(0,r.Ps)`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`,p=(0,r.Ps)`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`,m=(0,r.Ps)`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`,_=(0,r.Ps)`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`,g=(0,r.Ps)`
  mutation deleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
    }
  }
`;(0,r.Ps)`
  mutation deleteInvoice($id: uuid!) {
    delete_invoices_by_pk(id: $id) {
      id
    }
  }
`;let v=(0,r.Ps)`
  mutation aa($id: uuid!) {
    delete_orders_by_pk(id: $id) {
      id
    }
  }
`;(0,r.Ps)`
  mutation deleteDealer($id: uuid!) {
    delete_dealers_by_pk(id: $id) {
      id
    }
  }
`,(0,r.Ps)`
  mutation addDealer($data: dealers_insert_input!) {
    insert_dealers_one(object: $data) {
      id
    }
  }
`;let h=(0,r.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,f=(0,r.Ps)`
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
`,$=(0,r.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,b=(0,r.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,y=(0,r.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,A=(0,r.Ps)`
  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {
    updateServiceStatus(service_token_id: $service_token_id, status: $status) {
      message
    }
  }
`,P=(0,r.Ps)`
  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {
    acceptServiceToken(
      is_warranty_valid: $is_warranty_valid
      service_fee: $service_fee
      service_token_id: $service_token_id
    ) {
      message
    }
  }
`,k=(0,r.Ps)`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`,x=(0,r.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,w=(0,r.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,j=(0,r.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!, $rejected_reason: String) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,S=(0,r.Ps)`
  mutation updateInvoiceStatus($invoice_id: uuid!, $status: String!, $rejected_reason: String) {
    updateInvoiceStatus(invoice_id: $invoice_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,E=(0,r.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,C=(0,r.Ps)`
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
`,Z=(0,r.Ps)`
  mutation sendQInvoice($quotation_id: uuid!) {
    sendInvoice(quotation_id: $quotation_id) {
      message
    }
  }
`,I=(0,r.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,R=(0,r.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,N=(0,r.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,q=(0,r.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,D=(0,r.Ps)`
  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {
    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      email
      role
    }
  }
`,M=(0,r.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,Q=(0,r.Ps)`
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
`,B=(0,r.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,z=(0,r.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      phone
      address
    }
  }
`,O=(0,r.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,U=(0,r.Ps)`
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
`,L=(0,r.Ps)`
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
`,T=(0,r.Ps)`
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
`,F=(0,r.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,G=(0,r.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,V=(0,r.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`,J=(0,r.Ps)`
  mutation imageUpload($data: product_medias_insert_input!) {
    insert_product_medias_one(object: $data) {
      id
      product_id
      media_url
      media_type
    }
  }
`,H=(0,r.Ps)`
  mutation deleteProductImage($id: uuid!) {
    delete_product_medias_by_pk(id: $id) {
      id
      media_url
      media_type
    }
  }
`,K=(0,r.Ps)`
  mutation resetUserPassword($user_id: uuid!, $confirmNewPassword: String!, $newPassword: String!) {
    UpdateUserPassword(confirmNewPassword: $confirmNewPassword, user_id: $user_id, newPassword: $newPassword) {
      message
    }
  }
`},14995:(e,t,i)=>{"use strict";i.d(t,{default:()=>L});var r,a,n,s,o=i(27486),d=i(618);i(38165);var u=i(46811),l=i(72660),c=i(30785),p=i(9594),m=i(57971),_=i(12964),g=i(58894);let v=(e,t,i)=>{if(e&&"reportValidity"in e){let r=(0,g.U2)(i,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},h=(e,t)=>{for(let i in t.fields){let r=t.fields[i];r&&r.ref&&"reportValidity"in r.ref?v(r.ref,i,e):r.refs&&r.refs.forEach(t=>v(t,i,e))}},f=(e,t)=>{t.shouldUseNativeValidation&&h(e,t);let i={};for(let r in e){let a=(0,g.U2)(t.fields,r),n=Object.assign(e[r]||{},{ref:a&&a.ref});if($(t.names||Object.keys(e),r)){let e=Object.assign({},(0,g.U2)(i,r));(0,g.t8)(e,"root",n),(0,g.t8)(i,r,e)}else(0,g.t8)(i,r,n)}return i},$=(e,t)=>e.some(e=>e.startsWith(t+"."));var b=/^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu;function y(e,t,i,r,o){var d,u,l,c;let p=o&&"input"in o?o.input:i.value,m=o?.expected??e.expects??null,_=o?.received??function(e){let t=typeof e;return"string"===t?`"${e}"`:"number"===t||"bigint"===t||"boolean"===t?`${e}`:"object"===t||"function"===t?(e&&Object.getPrototypeOf(e)?.constructor?.name)??"null":t}(p),g={kind:e.kind,type:e.type,input:p,expected:m,received:_,message:`Invalid ${t}: ${m?`Expected ${m} but r`:"R"}eceived ${_}`,requirement:e.requirement,path:o?.path,issues:o?.issues,lang:r.lang,abortEarly:r.abortEarly,abortPipeEarly:r.abortPipeEarly},v="schema"===e.kind,h=o?.message??e.message??(d=e.reference,u=g.lang,s?.get(d)?.get(u))??(v?(l=g.lang,n?.get(l)):null)??r.message??(c=g.lang,a?.get(c));h&&(g.message="function"==typeof h?h(g):h),v&&(i.typed=!1),i.issues?i.issues.push(g):i.issues=[g]}function A(e,t){return{kind:"validation",type:"min_length",reference:A,async:!1,expects:`>=${e}`,requirement:e,message:t,_run(e,t){return e.typed&&e.value.length<this.requirement&&y(this,"length",e,t,{received:`${e.value.length}`}),e}}}function P(e,t,i){return"function"==typeof e.fallback?e.fallback(t,i):e.fallback}function k(e,t,i){return"function"==typeof e.default?e.default(t,i):e.default}function x(e){if("entries"in e){let t={};for(let i in e.entries)t[i]=x(e.entries[i]);return t}return"items"in e?e.items.map(x):k(e)}async function w(e){return"entries"in e?Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async([e,t])=>[e,await w(t)]))):"items"in e?Promise.all(e.items.map(w)):k(e)}function j(e){if("entries"in e){let t={};for(let i in e.entries)t[i]=j(e.entries[i]);return t}return"items"in e?e.items.map(j):P(e)}async function S(e){return"entries"in e?Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async([e,t])=>[e,await S(t)]))):"items"in e?Promise.all(e.items.map(S)):P(e)}function E(e){return{kind:"schema",type:"string",reference:E,expects:"string",async:!1,message:e,_run(e,t){return"string"==typeof e.value?e.typed=!0:y(this,"type",e,t),e}}}function C(...e){return{...e[0],pipe:e,_run(t,i){for(let r=0;r<e.length;r++){if(t.issues&&("schema"===e[r].kind||"transformation"===e[r].kind)){t.typed=!1;break}t.issues&&(i.abortEarly||i.abortPipeEarly)||(t=e[r]._run(t,i))}return t}}}async function Z(e,t,i){var a;let n=await e._run({typed:!1,value:t},(a=i,{lang:a?.lang??r?.lang,message:a?.message,abortEarly:a?.abortEarly??r?.abortEarly,abortPipeEarly:a?.abortPipeEarly??r?.abortPipeEarly}));return{typed:n.typed,success:!n.issues,output:n.value,issues:n.issues}}var I=i(19396),R=i.n(I),N=i(6096),q=i(60552),D=i(36354),M=i(10194),Q=i(63665);i(11158);var B=i(83398),z=i(66718),O=i(42030);let U=function e(t,i){return{kind:"schema",type:"object",reference:e,expects:"Object",async:!1,entries:t,message:i,_run(e,t){let i=e.value;if(i&&"object"==typeof i)for(let r in e.typed=!0,e.value={},this.entries){let a=i[r],n=this.entries[r]._run({typed:!1,value:a},t);if(n.issues){let s={type:"object",origin:"value",input:i,key:r,value:a};for(let t of n.issues)t.path?t.path.unshift(s):t.path=[s],e.issues?.push(t);if(e.issues||(e.issues=n.issues),t.abortEarly){e.typed=!1;break}}n.typed||(e.typed=!1),(void 0!==n.value||r in i)&&(e.value[r]=n.value)}else y(this,"type",e,t);return e}}}({email:C(E(),A(1,"This field is required"),function e(t){return{kind:"validation",type:"email",reference:e,expects:null,async:!1,requirement:b,message:t,_run(e,t){return e.typed&&!this.requirement.test(e.value)&&y(this,"email",e,t),e}}}("Please enter a valid email address")),password:C(E(),function e(t){return{kind:"validation",type:"non_empty",reference:e,async:!1,expects:"!0",message:t,_run(e,t){return e.typed&&0===e.value.length&&y(this,"length",e,t,{received:"0"}),e}}}("This field is required"),A(5,"Password must be at least 5 characters long"))}),L=({mode:e})=>{let[t,i]=(0,d.useState)(!1),[r,a]=(0,d.useState)(null),n=(0,u.useRouter)(),s=(0,u.useSearchParams)(),{lang:v}=(0,u.useParams)(),{settings:h}=(0,Q.r)(),{control:$,handleSubmit:b,formState:{errors:y}}=(0,g.cI)({resolver:function(e,t,i){return void 0===i&&(i={}),function(t,r,a){try{var n=!a.shouldUseNativeValidation&&"all"===a.criteriaMode;return Promise.resolve(Z(e,t,Object.assign({},void 0,{abortPipeEarly:!n}))).then(function(e){if(e.issues){for(var r={};e.issues.length;){var s=e.issues[0],o=function(e){if(e.path){let t="";for(let i of e.path){if("string"!=typeof i.key&&"number"!=typeof i.key)return null;t?t+=`.${i.key}`:t+=i.key}return t}return null}(s);if(o&&(r[o]||(r[o]={message:s.message,type:s.type}),n)){var d=r[o].types,u=d&&d[s.type];r[o]=(0,g.KN)(o,n,r,s.type,u?[].concat(u,s.message):s.message)}e.issues.shift()}return{values:{},errors:f(r,a)}}return{values:i.raw?t:e.output,errors:{}}})}catch(e){return Promise.reject(e)}}}(U),defaultValues:{}}),A=(0,M.I)(e,"/images/pages/auth-v2-mask-light.png","/images/pages/auth-v2-mask-dark.png"),P=(0,M.I)(e,"/images/illustrations/auth/v2-login-light.png","/images/illustrations/auth/v2-login-dark.png","/images/illustrations/auth/v2-login-light-border.png","/images/illustrations/auth/v2-login-dark-border.png"),k=()=>i(e=>!e),[x]=(0,B.D)(z.hB),w=async e=>{try{let t=await x({variables:{email:e.email,password:e.password}});O.Z.set("token",t.data.AdminSignIn.token);let i=s.get("redirectTo")??"/en/dashboards/crm";n.replace(i)}catch(e){a(e.message)}};return(0,o.jsxs)("div",{className:"flex bs-full justify-center",children:[(0,o.jsxs)("div",{className:R()("flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden",{"border-ie":"bordered"===h.skin}),children:[o.jsx("div",{className:"plb-12 pis-12",children:o.jsx("img",{src:P,alt:"character-illustration",className:"max-bs-[500px] max-is-full bs-auto"})}),o.jsx(q.Z,{image1:{src:"/images/illustrations/objects/tree-2.png"},image2:null,maskImg:{src:A}})]}),(0,o.jsxs)("div",{className:"flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]",children:[o.jsx("div",{className:"absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]",children:o.jsx(N.Z,{})}),(0,o.jsxs)("div",{className:"flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]",children:[(0,o.jsxs)("div",{children:[o.jsx(l.Z,{variant:"h4",children:`Welcome to ${D.Z.templateName}!👋🏻`}),o.jsx(l.Z,{children:"Please sign-in to your account"})]}),(0,o.jsxs)("form",{noValidate:!0,action:()=>{},autoComplete:"off",onSubmit:b(w),className:"flex flex-col gap-5",children:[o.jsx(g.Qr,{name:"email",control:$,rules:{required:!0},render:({field:e})=>o.jsx(c.Z,{...e,fullWidth:!0,autoFocus:!0,type:"email",label:"Email",onChange:t=>{e.onChange(t.target.value),null!==r&&a(null)},...(y.email||null!==r)&&{error:!0,helpertext:y?.email?.message||r}})}),o.jsx(g.Qr,{name:"password",control:$,rules:{required:!0},render:({field:e})=>o.jsx(c.Z,{...e,fullWidth:!0,label:"Password",id:"login-password",type:t?"text":"password",onChange:t=>{e.onChange(t.target.value),null!==r&&a(null)},InputProps:{endAdornment:o.jsx(m.Z,{position:"end",children:o.jsx(p.Z,{size:"small",edge:"end",onClick:k,onMouseDown:e=>e.preventDefault(),"aria-label":"toggle password visibility",children:o.jsx("i",{className:t?"ri-eye-off-line":"ri-eye-line"})})})},...y.password&&{error:!0,helpertext:y.password.message}})}),o.jsx(_.Z,{fullWidth:!0,variant:"contained",type:"submit",children:"Log In"})]})]})]})]})}},72582:(e,t,i)=>{"use strict";i.d(t,{ZP:()=>o});var r=i(92334);let a=(0,r.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\@layouts\BlankLayout.jsx`),{__esModule:n,$$typeof:s}=a;a.default;let o=(0,r.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\@layouts\BlankLayout.jsx#default`)},11314:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d});var r=i(79703),a=i(74946),n=i(72582),s=i(62846),o=i(41121);let d=({children:e,params:t})=>{let i=s.a.langDirection[t.lang],d=(0,o.Cu)();return r.jsx(a.Z,{direction:i,children:r.jsx(n.ZP,{systemMode:d,children:e})})}},32990:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c,metadata:()=>l});var r=i(79703),a=i(92334);let n=(0,a.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\views\Login.jsx`),{__esModule:s,$$typeof:o}=n;n.default;let d=(0,a.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\views\Login.jsx#default`);var u=i(41121);let l={title:"Login",description:"Login to your account"},c=()=>{let e=(0,u.gb)();return r.jsx(d,{mode:e})}},83398:(e,t,i)=>{"use strict";i.d(t,{D:()=>c});var r=i(3513),a=i(86415),n=i(55480),s=i(93868),o=i(94491),d=i(34408),u=i(90406),l=i(31487).Nq?a.useLayoutEffect:a.useEffect;function c(e,t){var i=(0,u.x)(null==t?void 0:t.client);(0,o.Vp)(e,o.n_.Mutation);var c=a.useState({called:!1,loading:!1,client:i}),p=c[0],m=c[1],_=a.useRef({result:p,mutationId:0,isMounted:!0,client:i,mutation:e,options:t});l(function(){Object.assign(_.current,{client:i,options:t,mutation:e})});var g=a.useCallback(function(e){void 0===e&&(e={});var t=_.current,i=t.options,a=t.mutation,o=(0,r.pi)((0,r.pi)({},i),{mutation:a}),u=e.client||_.current.client;_.current.result.loading||o.ignoreResults||!_.current.isMounted||m(_.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:u});var l=++_.current.mutationId,c=(0,n.J)(o,e);return u.mutate(c).then(function(t){var i,r,a=t.data,n=t.errors,o=n&&n.length>0?new d.cA({graphQLErrors:n}):void 0,p=e.onError||(null===(i=_.current.options)||void 0===i?void 0:i.onError);if(o&&p&&p(o,c),l===_.current.mutationId&&!c.ignoreResults){var g={called:!0,loading:!1,data:a,error:o,client:u};_.current.isMounted&&!(0,s.D)(_.current.result,g)&&m(_.current.result=g)}var v=e.onCompleted||(null===(r=_.current.options)||void 0===r?void 0:r.onCompleted);return o||null==v||v(t.data,c),t}).catch(function(t){if(l===_.current.mutationId&&_.current.isMounted){var i,r={loading:!1,error:t,data:void 0,called:!0,client:u};(0,s.D)(_.current.result,r)||m(_.current.result=r)}var a=e.onError||(null===(i=_.current.options)||void 0===i?void 0:i.onError);if(a)return a(t,c),{data:void 0,errors:t};throw t})},[]),v=a.useCallback(function(){if(_.current.isMounted){var e={called:!1,loading:!1,client:_.current.client};Object.assign(_.current,{mutationId:0,result:e}),m(e)}},[]);return a.useEffect(function(){var e=_.current;return e.isMounted=!0,function(){e.isMounted=!1}},[]),[g,(0,r.pi)({reset:v},p)]}},94491:(e,t,i)=>{"use strict";i.d(t,{Vp:()=>c,n_:()=>r});var r,a,n=i(67733),s=i(21454),o=i(55047),d=i(1262);function u(e){var t;switch(e){case r.Query:t="Query";break;case r.Mutation:t="Mutation";break;case r.Subscription:t="Subscription"}return t}function l(e){a||(a=new s.s(o.Q.parser||1e3));var t,i,d=a.get(e);if(d)return d;(0,n.kG)(!!e&&!!e.kind,62,e);for(var u=[],l=[],c=[],p=[],m=0,_=e.definitions;m<_.length;m++){var g=_[m];if("FragmentDefinition"===g.kind){u.push(g);continue}if("OperationDefinition"===g.kind)switch(g.operation){case"query":l.push(g);break;case"mutation":c.push(g);break;case"subscription":p.push(g)}}(0,n.kG)(!u.length||l.length||c.length||p.length,63),(0,n.kG)(l.length+c.length+p.length<=1,64,e,l.length,p.length,c.length),i=l.length?r.Query:r.Mutation,l.length||c.length||(i=r.Subscription);var v=l.length?l:c.length?c:p;(0,n.kG)(1===v.length,65,e,v.length);var h=v[0];t=h.variableDefinitions||[];var f={name:h.name&&"Name"===h.name.kind?h.name.value:"data",type:i,variables:t};return a.set(e,f),f}function c(e,t){var i=l(e),r=u(t),a=u(i.type);(0,n.kG)(i.type===t,66,r,r,a)}(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(r||(r={})),l.resetCache=function(){a=void 0},!1!==globalThis.__DEV__&&(0,d.zP)("parser",function(){return a?a.size:0})},42030:(e,t,i)=>{"use strict";/*! js-cookie v3.0.5 | MIT */function r(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)e[r]=i[r]}return e}i.d(t,{Z:()=>a});var a=function e(t,i){function a(e,a,n){if("undefined"!=typeof document){"number"==typeof(n=r({},i,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var o in n)n[o]&&(s+="; "+o,!0!==n[o]&&(s+="="+n[o].split(";")[0]));return document.cookie=e+"="+t.write(a,e)+s}}return Object.create({set:a,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var i=document.cookie?document.cookie.split("; "):[],r={},a=0;a<i.length;a++){var n=i[a].split("="),s=n.slice(1).join("=");try{var o=decodeURIComponent(n[0]);if(r[o]=t.read(s,o),e===o)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){a(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}};var t=require("../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[9357,6491,1598,8743,8520,785,8894,5670],()=>i(94036));module.exports=r})();