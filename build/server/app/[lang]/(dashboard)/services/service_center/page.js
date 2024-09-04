(()=>{var e={};e.id=2510,e.ids=[2510],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},92775:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l}),i(36847),i(5114),i(32687),i(85133);var r=i(79193),a=i(71854),s=i(33997),n=i.n(s),d=i(73320),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);i.d(t,o);let l=["",{children:["[lang]",{children:["(dashboard)",{children:["services",{children:["service_center",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,36847)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/services/service_center/page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5114)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,32687)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/services/service_center/page.jsx"],u="/[lang]/(dashboard)/services/service_center/page",m={require:i,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[lang]/(dashboard)/services/service_center/page",pathname:"/[lang]/services/service_center",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},40727:(e,t,i)=>{Promise.resolve().then(i.bind(i,5255))},42453:(e,t,i)=>{"use strict";i.d(t,{Z:()=>g});var r=i(60170),a=i(63594),s=i(618),n=i(69360),d=i(82029),o=i(6593),l=i(54509),c=i(5773),u=i(50876),m=i(27486);let p=["className","raised"],_=e=>{let{classes:t}=e;return(0,d.Z)({root:["root"]},u.y,t)},h=(0,o.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),g=s.forwardRef(function(e,t){let i=(0,l.i)({props:e,name:"MuiCard"}),{className:s,raised:d=!1}=i,o=(0,a.Z)(i,p),c=(0,r.Z)({},i,{raised:d}),u=_(c);return(0,m.jsx)(h,(0,r.Z)({className:(0,n.Z)(u.root,s),elevation:d?8:void 0,ref:t,ownerState:c},o))})},50876:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n,y:()=>s});var r=i(3546),a=i(82517);function s(e){return(0,a.ZP)("MuiCard",e)}let n=(0,r.Z)("MuiCard",["root"])},48398:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>j});var r=i(27486),a=i(618),s=i(38165),n=i(36370),d=i(29454),o=i(39926),l=i(48152),c=i(64037),u=i(29597),m=i(98108),p=i(5773),_=i(1416),h=i(7556),g=i(19396),x=i.n(g),$=i(63665);let v=e=>{let{tooltipProps:t,children:i}=e;return t?.title?r.jsx(n.Z,{...t,children:i}):i},f=({children:e,option:t})=>t.href?r.jsx(d.Z,{component:s.default,href:t.href,...t.linkProps,children:e}):r.jsx(r.Fragment,{children:e}),j=e=>{let{tooltipProps:t,icon:i,iconClassName:s,options:n,leftAlignMenu:d,iconButtonProps:g}=e,[j,b]=(0,a.useState)(!1),P=(0,a.useRef)(null),{settings:S}=(0,$.r)(),y=e=>{P.current&&P.current.contains(e.target)||b(!1)};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(v,{tooltipProps:t,children:r.jsx(_.Z,{ref:P,size:"small",onClick:()=>{b(e=>!e)},...g,children:"string"==typeof i?r.jsx("i",{className:x()(i,s)}):i||r.jsx("i",{className:x()("ri-more-2-line",s)})})}),r.jsx(o.Z,{open:j,anchorEl:P.current,placement:d?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:({TransitionProps:e})=>r.jsx(m.Z,{...e,children:r.jsx(p.Z,{className:"bordered"===S.skin?"border shadow-none":"shadow-lg",children:r.jsx(u.d,{onClickAway:y,children:r.jsx(c.Z,{autoFocusItem:j,children:n.map((e,t)=>"string"==typeof e?r.jsx(l.Z,{onClick:y,children:e},t):"divider"in e?e.divider&&r.jsx(h.Z,{...e.dividerProps},t):r.jsx(l.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{y(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,r.jsxs)(f,{option:e,children:[("string"==typeof e.icon?r.jsx("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})})]})}},91347:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var r=i(27486);i(618);var a=i(72277),s=i(22405);let n=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,s.q)();return r.jsx("div",{children:r.jsx(a.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>k,DR:()=>M,Ff:()=>u,HT:()=>g,Hd:()=>x,J2:()=>G,J9:()=>o,JB:()=>A,KN:()=>Z,Lh:()=>T,MP:()=>n,MZ:()=>q,O7:()=>D,Qm:()=>E,SB:()=>_,SZ:()=>P,Sf:()=>f,Si:()=>Q,Zq:()=>w,aY:()=>m,bc:()=>z,dE:()=>$,en:()=>R,hB:()=>a,he:()=>F,hq:()=>s,jN:()=>I,ju:()=>h,oe:()=>p,tC:()=>C,tt:()=>j,u7:()=>c,uv:()=>l,vl:()=>N,wU:()=>b,yG:()=>y,yn:()=>v,z7:()=>S,zN:()=>d});var r=i(12738);let a=(0,r.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,s=(0,r.Ps)`
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
`,n=(0,r.Ps)`
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
`,d=(0,r.Ps)`
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
`,o=(0,r.Ps)`
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
`,l=(0,r.Ps)`
  mutation addNews($data: news_insert_input!) {
    insert_news_one(object: $data) {
      id
    }
  }
`,c=(0,r.Ps)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`,u=(0,r.Ps)`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`,m=(0,r.Ps)`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`,p=(0,r.Ps)`
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
`,h=(0,r.Ps)`
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
`;let g=(0,r.Ps)`
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
`;let x=(0,r.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,$=(0,r.Ps)`
  mutation editNewProducts($id: uuid!, $data: news_set_input!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,v=(0,r.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,f=(0,r.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,j=(0,r.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,b=(0,r.Ps)`
  mutation changeOrderStatus($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`,P=(0,r.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,S=(0,r.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,y=(0,r.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status) {
      message
    }
  }
`,w=(0,r.Ps)`
  mutation changeInvoiceStatus($id: uuid!, $data: invoices_set_input!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`,k=(0,r.Ps)`
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
  mutation sendQInvoice($discounted_amount: numeric!, $quotation_id: uuid!) {
    sendInvoice(discounted_amount: $discounted_amount, quotation_id: $quotation_id) {
      message
    }
  }
`,N=(0,r.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,q=(0,r.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,M=(0,r.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,A=(0,r.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,I=(0,r.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,D=(0,r.Ps)`
  mutation addSeriveCenter($data: service_centers_insert_input!) {
    insert_service_centers_one(object: $data) {
      id
    }
  }
`,R=(0,r.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,F=(0,r.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,E=(0,r.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,T=(0,r.Ps)`
  mutation addDiscount($data: product_discounts_insert_input!) {
    insert_product_discounts_one(object: $data) {
      id
    }
  }
`,z=(0,r.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,Q=(0,r.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,G=(0,r.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
    }
  }
`},5255:(e,t,i)=>{"use strict";i.d(t,{default:()=>M});var r=i(27486),a=i(618),s=i(42453),n=i(15532),d=i(1416),o=i(46797),l=i(30965),c=i(30675),u=i(19396),m=i.n(u),p=i(61359),_=i(36514),h=i(57229),g=i(40136),x=i(7556),$=i(58894),v=i(38860),f=i(45162),j=i(66718),b=i(91347),P=i(22405),S=i(25009);let y=e=>{let{setGlobalMsg:t}=(0,P.q)(),{open:i,handleClose:s,serviceCenterData:o,setData:u}=e,[m,p]=(0,a.useState)(),[_]=(0,v.D)(j.O7),{data:h}=(0,f.kJ)(S.kI);(0,a.useRef)(null);let{control:y,reset:w,handleSubmit:k,formState:{errors:C}}=(0,$.cI)({defaultValues:{name:"",phone:"",address:""}}),Z=async e=>{u([...o??[],(await _({variables:{data:{address:e.address,name:e.name,phone:e.phone}}})).data.insert_service_centers_one]),N(),t("➕ Added New Data")},N=()=>{s(),w({title:"",description:""})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(g.ZP,{open:i,anchor:"right",variant:"temporary",onClose:N,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[r.jsx(c.Z,{variant:"h5",children:"Add Admin"}),r.jsx(d.Z,{size:"small",onClick:N,children:r.jsx("i",{className:"ri-close-line text-2xl"})})]}),r.jsx(x.Z,{}),r.jsx("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:k(e=>Z(e)),className:"flex flex-col gap-5",children:[r.jsx($.Qr,{name:"name",control:y,rules:{required:!0},render:({field:e})=>r.jsx(l.Z,{...e,fullWidth:!0,label:"Name",placeholder:"",...C.name&&{error:!0,helperText:"This field is required."}})}),r.jsx($.Qr,{name:"phone",control:y,rules:{required:!0},render:({field:e})=>r.jsx(l.Z,{...e,fullWidth:!0,label:"Phone",type:"phone",placeholder:"",...C.phone&&{error:!0,helperText:"This field is required."}})}),r.jsx($.Qr,{name:"address",control:y,rules:{required:!0},render:({field:e})=>r.jsx(l.Z,{...e,fullWidth:!0,label:"Address",placeholder:"",...C.address&&{error:!0,helperText:"This field is required."}})}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[r.jsx(n.Z,{variant:"contained",type:"submit",children:"Add"}),r.jsx(n.Z,{variant:"outlined",color:"error",type:"reset",onClick:N,children:"Discard"})]})]})})]}),r.jsx(b.Z,{})]})},w=e=>{let{setGlobalMsg:t}=(0,P.q)(),{open:i,handleClose:s,serviceCenterData:o,setData:u}=e,[m]=(0,v.D)(j.he),{data:p}=(0,f.kJ)(S.kI);(0,a.useRef)(null),console.log("servie data ",o);let{control:_,reset:h,handleSubmit:y,formState:{errors:w}}=(0,$.cI)({defaultValues:{title:""}}),k=async e=>{let i=await m({variables:{id:o.id,data:{phone:e.phone,name:e.name,address:e.address}}});u(e=>e.map(e=>e.id===o?.id?{...e,...i.data.update_service_centers_by_pk}:e)),C(),t("➕ Service Data has been updated")};(0,a.useEffect)(()=>{o&&h({name:o.name,address:o.address,phone:o.phone})},[o]);let C=()=>{s(),h({})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(g.ZP,{open:i,anchor:"right",variant:"temporary",onClose:C,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[r.jsx(c.Z,{variant:"h5",children:"Add Admin"}),r.jsx(d.Z,{size:"small",onClick:C,children:r.jsx("i",{className:"ri-close-line text-2xl"})})]}),r.jsx(x.Z,{}),r.jsx("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:y(e=>k(e)),className:"flex flex-col gap-5",children:[r.jsx($.Qr,{name:"name",control:_,rules:{required:!0},render:({field:e})=>r.jsx(l.Z,{...e,fullWidth:!0,label:"Name",placeholder:"",...w.name&&{error:!0,helperText:"This field is required."}})}),r.jsx($.Qr,{name:"phone",control:_,rules:{required:!0},render:({field:e})=>r.jsx(l.Z,{...e,fullWidth:!0,label:"Phone",placeholder:"",...w.phone&&{error:!0,helperText:"This field is required."}})}),r.jsx($.Qr,{name:"address",control:_,rules:{required:!0},render:({field:e})=>r.jsx(l.Z,{...e,fullWidth:!0,label:"Address",placeholder:"",...w.address&&{error:!0,helperText:"This field is required."}})}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[r.jsx(n.Z,{variant:"contained",type:"submit",children:"Edit"}),r.jsx(n.Z,{variant:"outlined",color:"error",type:"reset",onClick:C,children:"Discard"})]})]})})]}),r.jsx(b.Z,{})]})};i(48398);var k=i(31538),C=i.n(k);let Z=(e,t,i,r)=>{let a=(0,p.O4)(e.getValue(t),i);return r({itemRank:a}),a.passed},N=({value:e,onChange:t,debounce:i=500,...s})=>{let[n,d]=(0,a.useState)(e);return(0,a.useEffect)(()=>{d(e)},[e]),(0,a.useEffect)(()=>{let e=setTimeout(()=>{t(n)},i);return()=>clearTimeout(e)},[n]),r.jsx(l.Z,{...s,value:n,onChange:e=>d(e.target.value),size:"small"})},q=(0,_.Cl)(),M=()=>{let{setGlobalMsg:e}=(0,P.q)(),{data:t}=(0,f.kJ)(S.TX),[i]=(0,v.D)(j.DR),[l,u]=(0,a.useState)(!1),[p,g]=(0,a.useState)(!1),[x,$]=(0,a.useState)(),[k,M]=(0,a.useState)({}),[A,I]=(0,a.useState)(t.service_centers),[D,R]=(0,a.useState)(""),F=async t=>{try{await i({variables:{id:t}}),I(A.filter(e=>e.id!==t)),e("✅ Delete Successful")}catch(t){e("❌ Delete Error"),console.log("Delete Error")}},E=e=>{$(e),g(!p)},T=(0,a.useMemo)(()=>[q.accessor("id",{header:"ID",cell:({row:e})=>r.jsx(c.Z,{children:e.original.id?.substring(0,10)})}),q.accessor("name",{header:"Name",cell:({row:e})=>r.jsx("div",{className:"flex items-center gap-3",children:r.jsx("div",{className:"flex flex-col items-start",children:r.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.name})})})}),q.accessor("phone",{header:"Phone",cell:({row:e})=>r.jsx(c.Z,{type:"phone",children:e.original.phone})}),q.accessor("address",{header:"Address",cell:({row:e})=>r.jsx(c.Z,{className:"w-80 text-wrap",children:e.original.address})}),q.accessor("actions",{header:"Actions",cell:({row:e})=>(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(d.Z,{size:"small",onClick:()=>E(e.original),children:r.jsx("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),r.jsx(d.Z,{size:"small",onClick:()=>F(e?.original?.id),children:r.jsx("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"})})]}),enableSorting:!1})],[A]),z=(0,h.b7)({data:A,columns:T,filterFns:{fuzzy:Z},state:{rowSelection:k,globalFilter:D},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:Z,onRowSelectionChange:M,getCoreRowModel:(0,_.sC)(),onGlobalFilterChange:R,getFilteredRowModel:(0,_.vL)(),getSortedRowModel:(0,_.tj)(),getPaginationRowModel:(0,_.G_)(),getFacetedRowModel:(0,_.o6)(),getFacetedUniqueValues:(0,_.JG)(),getFacetedMinMaxValues:(0,_.HO)()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[r.jsx(N,{value:D??"",onChange:e=>R(String(e)),placeholder:"Search",className:"max-sm:is-full"}),r.jsx("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:r.jsx(n.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>u(!l),startIcon:r.jsx("i",{className:"ri-add-line"}),children:"Add Service Center"})})]}),r.jsx("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:C().table,children:[r.jsx("thead",{children:z.getHeaderGroups().map(e=>r.jsx("tr",{children:e.headers.map(e=>r.jsx("th",{children:e.isPlaceholder?null:r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:m()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,h.ie)(e.column.columnDef.header,e.getContext()),{asc:r.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:r.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===z.getFilteredRowModel().rows.length?r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx("td",{colSpan:z.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):r.jsx("tbody",{children:z.getRowModel().rows.slice(0,z.getState().pagination.pageSize).map(e=>r.jsx("tr",{className:m()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>r.jsx("td",{children:(0,h.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),r.jsx(o.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:z.getFilteredRowModel().rows.length,rowsPerPage:z.getState().pagination.pageSize,page:z.getState().pagination.pageIndex,onPageChange:(e,t)=>{z.setPageIndex(t)},onRowsPerPageChange:e=>z.setPageSize(Number(e.target.value))})]}),r.jsx(y,{open:l,serviceCenterData:A,setData:I,handleClose:()=>u(!l)}),r.jsx(w,{open:p,serviceCenterData:x,setData:I,handleClose:()=>g(!l)}),r.jsx(b.Z,{})]})}},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},36847:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var r=i(79703),a=i(92334);let s=(0,a.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/service_center/lists/ServiceCenterTable.jsx`),{__esModule:n,$$typeof:d}=s;s.default;let o=(0,a.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/service_center/lists/ServiceCenterTable.jsx#default`),l=()=>r.jsx(o,{})},38860:(e,t,i)=>{"use strict";i.d(t,{D:()=>u});var r=i(39942),a=i(4550),s=i(36759),n=i(93868),d=i(12576),o=i(23644),l=i(91053),c=i(3678).Nq?a.useLayoutEffect:a.useEffect;function u(e,t){var i=(0,l.x)(null==t?void 0:t.client);(0,d.Vp)(e,d.n_.Mutation);var u=a.useState({called:!1,loading:!1,client:i}),m=u[0],p=u[1],_=a.useRef({result:m,mutationId:0,isMounted:!0,client:i,mutation:e,options:t});c(function(){Object.assign(_.current,{client:i,options:t,mutation:e})});var h=a.useCallback(function(e){void 0===e&&(e={});var t=_.current,i=t.options,a=t.mutation,d=(0,r.pi)((0,r.pi)({},i),{mutation:a}),l=e.client||_.current.client;_.current.result.loading||d.ignoreResults||!_.current.isMounted||p(_.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:l});var c=++_.current.mutationId,u=(0,s.J)(d,e);return l.mutate(u).then(function(t){var i,r,a=t.data,s=t.errors,d=s&&s.length>0?new o.cA({graphQLErrors:s}):void 0,m=e.onError||(null===(i=_.current.options)||void 0===i?void 0:i.onError);if(d&&m&&m(d,u),c===_.current.mutationId&&!u.ignoreResults){var h={called:!0,loading:!1,data:a,error:d,client:l};_.current.isMounted&&!(0,n.D)(_.current.result,h)&&p(_.current.result=h)}var g=e.onCompleted||(null===(r=_.current.options)||void 0===r?void 0:r.onCompleted);return d||null==g||g(t.data,u),t}).catch(function(t){if(c===_.current.mutationId&&_.current.isMounted){var i,r={loading:!1,error:t,data:void 0,called:!0,client:l};(0,n.D)(_.current.result,r)||p(_.current.result=r)}var a=e.onError||(null===(i=_.current.options)||void 0===i?void 0:i.onError);if(a)return a(t,u),{data:void 0,errors:t};throw t})},[]),g=a.useCallback(function(){if(_.current.isMounted){var e={called:!1,loading:!1,client:_.current.client};Object.assign(_.current,{mutationId:0,result:e}),p(e)}},[]);return a.useEffect(function(){var e=_.current;return e.isMounted=!0,function(){e.isMounted=!1}},[]),[h,(0,r.pi)({reset:g},m)]}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[9357,6491,4588,3440,3198,7541,3133,965,6514,5073,8894,6797,136,751,5262],()=>i(92775));module.exports=r})();