(()=>{var e={};e.id=6926,e.ids=[6926],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},62670:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l}),i(33641),i(5114),i(32687),i(85133);var a=i(79193),s=i(71854),n=i(33997),r=i.n(n),d=i(73320),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);i.d(t,o);let l=["",{children:["[lang]",{children:["(dashboard)",{children:["quotations",{children:["preview",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,33641)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/quotations/preview/[id]/page.jsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5114)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,32687)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/quotations/preview/[id]/page.jsx"],u="/[lang]/(dashboard)/quotations/preview/[id]/page",m={require:i,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[lang]/(dashboard)/quotations/preview/[id]/page",pathname:"/[lang]/quotations/preview/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},74099:(e,t,i)=>{Promise.resolve().then(i.bind(i,74233))},91347:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var a=i(27486);i(618);var s=i(72277),n=i(22405);let r=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,n.q)();return a.jsx("div",{children:a.jsx(s.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>S,DR:()=>D,Ff:()=>u,HT:()=>x,Hd:()=>f,J2:()=>G,J9:()=>o,JB:()=>M,KN:()=>N,Lh:()=>T,MP:()=>r,MZ:()=>C,O7:()=>Q,Qm:()=>F,SB:()=>_,SZ:()=>$,Sf:()=>j,Si:()=>U,Zq:()=>w,aY:()=>m,bc:()=>B,dE:()=>g,en:()=>I,hB:()=>s,he:()=>z,hq:()=>n,jN:()=>A,ju:()=>h,oe:()=>p,tC:()=>Z,tt:()=>v,u7:()=>c,uv:()=>l,vl:()=>q,wU:()=>b,yG:()=>k,yn:()=>y,z7:()=>P,zN:()=>d});var a=i(12738);let s=(0,a.Ps)`
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
`,h=(0,a.Ps)`
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
`;let f=(0,a.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,g=(0,a.Ps)`
  mutation editNewProducts($id: uuid!, $data: news_set_input!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,y=(0,a.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,j=(0,a.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,v=(0,a.Ps)`
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
`,$=(0,a.Ps)`
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
`,k=(0,a.Ps)`
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
`,S=(0,a.Ps)`
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
`,N=(0,a.Ps)`
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
`,C=(0,a.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,D=(0,a.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,M=(0,a.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,A=(0,a.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,Q=(0,a.Ps)`
  mutation addSeriveCenter($data: service_centers_insert_input!) {
    insert_service_centers_one(object: $data) {
      id
    }
  }
`,I=(0,a.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,z=(0,a.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,F=(0,a.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,T=(0,a.Ps)`
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
`,U=(0,a.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,G=(0,a.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
    }
  }
`},83541:(e,t,i)=>{"use strict";i.d(t,{c:()=>a});let a=async(e,t,i)=>{try{return(await fetch(t,{method:"PUT",headers:{"Content-Type":`${i}/*`,"x-amz-acl":"public-read"},body:e})).url.split("?")[0]}catch(e){throw alert(e),console.log(e),Error(e)}}},5436:(e,t,i)=>{"use strict";i.d(t,{Z:()=>b});var a=i(27486),s=i(618),n=i(40136),r=i(1416),d=i(30675),o=i(30965),l=i(12741),c=i(80013),u=i(81239),m=i(74054),p=i(48152),_=i(15532),h=i(7556),x=i(32475),f=i(38860),g=i(66718),y=i(91347),j=i(22405);let v={paymentDate:new Date,paymentMethod:"select-method",paymentAmount:500,paymentNote:""},b=({open:e,handleClose:t,invoiceData:i,paymentMethods:b})=>{let{setGlobalMsg:$}=(0,j.q)(),[P,k]=(0,s.useState)(!1),[w,S]=(0,s.useState)(v),[Z]=(0,f.D)(g.tC),N=async e=>{e.preventDefault();try{k(!0),await Z({variables:{amount:w.amount,invoice_id:i.id,payment_date:w.payment_date,payment_method:w.payment_method}}),k(!1),$("✅ Payment Send Successful"),S(""),t()}catch(e){console.log("Error ",e)}},q=()=>{t(),S(v)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ZP,{open:e,anchor:"right",variant:"temporary",onClose:q,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[a.jsx(d.Z,{variant:"h5",children:"Add Payment"}),a.jsx(r.Z,{size:"small",onClick:q,children:a.jsx("i",{className:"ri-close-line text-2xl"})})]}),a.jsx(h.Z,{}),(0,a.jsxs)("div",{className:"p-5",children:[(0,a.jsxs)(d.Z,{className:"flex justify-end text-red-600",children:["Balance : ",i.balance?i.balance.toLocaleString():0]}),(0,a.jsxs)("form",{onSubmit:N,className:"flex flex-col gap-5 mt-5",children:[a.jsx(o.Z,{fullWidth:!0,id:"amount",label:"Payment Amount",type:"number",InputProps:{startAdornment:a.jsx(u.Z,{position:"start"})},value:w.amount,onChange:e=>S({...w,amount:+e.target.value})}),a.jsx(x.Z,{selected:w.payment_date,id:"payment-date",onChange:e=>null!==e&&S({...w,payment_date:e}),customInput:a.jsx(o.Z,{fullWidth:!0,label:"Payment Date"})}),(0,a.jsxs)(l.Z,{fullWidth:!0,children:[a.jsx(c.Z,{htmlFor:"payment-method",children:"Payment Method"}),(0,a.jsxs)(m.Z,{label:"Payment Method",labelId:"payment-method",id:"payment-method-select",value:w.payment_method,onChange:e=>S({...w,payment_method:e.target.value}),children:[a.jsx(p.Z,{value:"select-method",disabled:!0,children:"Select Payment Method"}),b.payment_methods.map(e=>a.jsx(p.Z,{value:e.name,children:e.name},e.id))]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[a.jsx(_.Z,{loading:P,size:"large",variant:"contained",type:"submit",children:"Send"}),a.jsx(_.Z,{size:"large",variant:"outlined",color:"secondary",type:"reset",onClick:q,children:"Cancel"})]})]})]})]}),a.jsx(y.Z,{})]})}},74233:(e,t,i)=>{"use strict";i.d(t,{default:()=>A});var a=i(27486),s=i(97687),n=i(618);i(38165);var r=i(46811),d=i(42453),o=i(35549),l=i(15532);i(5436);var c=i(40136),u=i(1416),m=i(30675),p=i(30965),_=i(7556),h=i(58894),x=i(38860),f=i(66718),g=i(83541),y=i(22405),j=i(81239),v=i(91347);let b=({open:e,handleClose:t,quotationData:i})=>{let[s,r]=(0,n.useState)(),[d]=(0,x.D)(f.Sf),[o]=(0,x.D)(f.BM),{setGlobalMsg:v}=(0,y.q)(),b=(0,n.useRef)(null),{control:$,reset:P,handleSubmit:k,formState:{errors:w}}=(0,h.cI)({defaultValues:{title:"",description:""}}),S=async e=>{try{let e=await d({variables:{content_type:"pdf",folder:"quotations"}}),t=await (0,g.c)(s[0],e.data.getFileUploadUrl.fileUploadUrl,"image"),a=await o({variables:{quotation_id:i.id,quotation_file_url:t}});console.log("res ",a),r(""),v("✅ Send Quotation file suceessful")}catch(e){v("❌ Send file error")}},Z=()=>{r("")};return a.jsx(a.Fragment,{children:(0,a.jsxs)(c.ZP,{open:e,anchor:"right",variant:"temporary",onClose:Z,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[a.jsx(m.Z,{variant:"h5",children:"Send Quotation File"}),a.jsx(u.Z,{size:"small",onClick:()=>{t()},children:a.jsx("i",{className:"ri-close-line text-2xl"})})]}),a.jsx(_.Z,{}),a.jsx("div",{className:"p-5",children:(0,a.jsxs)("form",{onSubmit:k(e=>S(e)),className:"flex flex-col gap-5",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[a.jsx(p.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:s,className:"flex-auto",InputProps:{readOnly:!0,endAdornment:s?a.jsx(j.Z,{position:"end",children:a.jsx(u.Z,{size:"small",edge:"end",onClick:()=>setFileName(""),children:a.jsx("i",{className:"ri-close-line"})})}):null}}),(0,a.jsxs)(l.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",a.jsx("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:t}=e.target;t&&0!==t.length&&r(t)},ref:b})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[a.jsx(l.Z,{variant:"contained",type:"submit",children:"Add"}),a.jsx(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:Z,children:"Discard"})]})]})})]})})},$=({open:e,handleClose:t,quotationData:i})=>{let[s,r]=(0,n.useState)(),[d]=(0,x.D)(f.Sf),[o]=(0,x.D)(f.KN),{setGlobalMsg:g}=(0,y.q)();(0,n.useRef)(null);let{control:j,reset:b,handleSubmit:$,formState:{errors:P}}=(0,h.cI)({defaultValues:{title:"",description:""}}),k=async e=>{try{await o({variables:{quotation_id:i.id,discounted_amount:e.price}}),g("✅ Send Quotation Invoice file suceessful")}catch(e){g("❌ Send file error")}},w=()=>{b({price:""})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.ZP,{open:e,anchor:"right",variant:"temporary",onClose:w,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[a.jsx(m.Z,{variant:"h5",children:"Send Invoice File"}),a.jsx(u.Z,{size:"small",onClick:()=>{t()},children:a.jsx("i",{className:"ri-close-line text-2xl"})})]}),a.jsx(_.Z,{}),a.jsx("div",{className:"p-5",children:(0,a.jsxs)("form",{onSubmit:$(e=>k(e)),className:"flex flex-col gap-5",children:[a.jsx(h.Qr,{name:"price",control:j,rules:{required:!0},render:({field:e})=>a.jsx(p.Z,{...e,fullWidth:!0,type:"number",label:"Price",placeholder:"",...P.price&&{error:!0,helperText:"This field is required."}})}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[a.jsx(l.Z,{variant:"contained",type:"submit",children:"Add"}),a.jsx(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:w,children:"Discard"})]})]})})]}),a.jsx(v.Z,{})]})};i(11158);var P=i(25009);let k=({quotationData:e})=>{let{setGlobalMsg:t}=(0,y.q)(),[i]=(0,x.D)(f.yG,{refetchQueries:[P._n]}),s=async(e,a)=>{try{await i({variables:{quotation_id:e,status:a}}),t("✅ Change Quotation Status")}catch(e){console.log("Change Status Error ",e)}};return a.jsx("div",{children:(0,a.jsxs)("div",{className:"flex gap-4 justify-end",children:[a.jsx(l.Z,{variant:"outlined",color:"info",size:"large",onClick:()=>s(e?.id,"accepted"),children:"Accepted"}),a.jsx(l.Z,{variant:"outlined",color:"error",size:"large",onClick:()=>s(e?.id,"rejected"),children:"Reject"})]})})},w=({id:e,onButtonClick:t,quotationData:i})=>{let[s,c]=(0,n.useState)(!1),[u,m]=(0,n.useState)(!1),[p,_]=(0,n.useState)(!1),{lang:h}=(0,r.useParams)();return(0,a.jsxs)(a.Fragment,{children:[a.jsx(d.Z,{children:(0,a.jsxs)(o.Z,{className:"flex flex-col gap-4",children:[a.jsx(l.Z,{fullWidth:!0,color:"success",variant:"contained",className:"capitalize",startIcon:a.jsx("i",{className:"ri-send-plane-line"}),onClick:()=>m(!0),children:"Send Quotation File"}),a.jsx(l.Z,{fullWidth:!0,variant:"contained",className:"capitalize",startIcon:a.jsx("i",{className:"ri-send-plane-line"}),onClick:()=>_(!0),children:"Send Invoice"})]})}),a.jsx(b,{open:u,handleClose:()=>m(!1),quotationData:i}),a.jsx($,{open:p,handleClose:()=>_(!1),quotationData:i})]})};var S=i(6096),Z=i(31538),N=i.n(Z);i(12612);var q=i(52839);let C={pending:"warning",completed:"success",accepted:"info",rejected:"error"},D=({quotationData:e})=>a.jsx(d.Z,{className:"previewCard",children:a.jsx(o.Z,{className:"sm:!p-12",children:(0,a.jsxs)(s.ZP,{container:!0,spacing:6,children:[a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx("div",{className:"p-6 bg-actionHover rounded",children:(0,a.jsxs)("div",{className:"flex justify-between gap-y-4 flex-col sm:flex-row",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-6",children:[a.jsx("div",{className:"flex items-center",children:a.jsx(S.Z,{})}),(0,a.jsxs)("div",{children:[a.jsx(m.Z,{color:"text.primary",children:"Office 149, 450 South Brand Brooklyn"}),a.jsx(m.Z,{color:"text.primary",children:"San Diego County, CA 91905, USA"}),a.jsx(m.Z,{color:"text.primary",children:"+1 (123) 456 7891, +44 (876) 543 2198"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,a.jsxs)("div",{className:"flex flex-row gap-3",children:[a.jsx(m.Z,{variant:"h5",children:"Invoice #"}),a.jsx(q.Z,{label:e?.status,color:C[e.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsxs)(m.Z,{color:"text.primary",children:["Quotation Number : ",e?.quotation_number]}),(0,a.jsxs)(m.Z,{color:"text.primary",children:["Date Due : ",new Date(e?.updated_at).toLocaleDateString()]})]})]})]})})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx(s.ZP,{container:!0,spacing:6,children:a.jsx(s.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[a.jsx(m.Z,{className:"font-medium",color:"text.primary",children:"Invoice To:"}),(0,a.jsxs)("div",{children:[a.jsx(m.Z,{children:e?.user.name}),a.jsx(m.Z,{children:e?.company}),a.jsx(m.Z,{children:e?.address}),a.jsx(m.Z,{children:e?.user.phone}),a.jsx(m.Z,{children:e?.user.email})]})]})})})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx("div",{className:"overflow-x-auto border rounded",children:(0,a.jsxs)("table",{className:N().table,children:[a.jsx("thead",{children:(0,a.jsxs)("tr",{className:"border-be",children:[a.jsx("th",{className:"!bg-transparent",children:"Product"}),a.jsx("th",{className:"!bg-transparent",children:"Brand"}),a.jsx("th",{className:"!bg-transparent",children:"Price"}),a.jsx("th",{className:"!bg-transparent",children:"Qty"}),a.jsx("th",{className:"!bg-transparent",children:"Total"})]})}),a.jsx("tbody",{children:e?.quotation_items.map((e,t)=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx(m.Z,{color:"text.primary",children:e.product.title})}),a.jsx("td",{children:a.jsx(m.Z,{color:"text.primary",children:e.product.brand.title})}),a.jsx("td",{children:a.jsx(m.Z,{color:"text.primary",children:e.product.price})}),a.jsx("td",{children:a.jsx(m.Z,{color:"text.primary",children:e.quantity})}),a.jsx("td",{children:a.jsx(m.Z,{color:"text.primary",children:e.total})})]},t))})]})})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx("div",{className:"flex justify-end flex-col gap-y-4 sm:flex-row",children:(0,a.jsxs)("div",{className:"min-is-[200px]",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[a.jsx(m.Z,{children:"Subtotal:"}),a.jsx(m.Z,{className:"font-medium",color:"text.primary",children:e?.order?.items_total})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[a.jsx(m.Z,{children:"Discount:"}),a.jsx(m.Z,{className:"font-medium",color:"text.primary",children:e?.order?.discount})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[a.jsx(m.Z,{children:"Tax:"}),a.jsx(m.Z,{className:"font-medium",color:"text.primary",children:"21%"})]}),a.jsx(_.Z,{className:"mlb-2"}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[a.jsx(m.Z,{children:"Total:"}),a.jsx(m.Z,{className:"font-medium",color:"text.primary",children:e?.total})]})]})})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx(_.Z,{className:"border-dashed"})}),a.jsx(s.ZP,{item:!0,xs:12,children:(0,a.jsxs)(m.Z,{children:[(0,a.jsxs)(m.Z,{component:"span",className:"font-medium",color:"text.primary",children:["Dealer Remark :"," "]}),e.dealer_remark?e.dealer_remark:" - "]})})]})})});var M=i(45162);let A=()=>{let{id:e}=(0,r.useParams)(),{data:t}=(0,M.kJ)(P._n,{variables:{id:e}});return a.jsx(a.Fragment,{children:(0,a.jsxs)(s.ZP,{container:!0,spacing:6,children:[a.jsx(s.ZP,{item:!0,xs:12,md:9,children:a.jsx(D,{quotationData:t.quotations_by_pk})}),(0,a.jsxs)(s.ZP,{item:!0,xs:12,md:3,className:"flex flex-col gap-5",children:[a.jsx(k,{quotationData:t.quotations_by_pk}),"accepted"===t.quotations_by_pk.status&&a.jsx(w,{onButtonClick:()=>{window.print()},quotationData:t.quotations_by_pk})]})]})})}},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},33641:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var a=i(79703);i(31976);var s=i(92334);let n=(0,s.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/quotations/preview/index.jsx`),{__esModule:r,$$typeof:d}=n;n.default;let o=(0,s.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/quotations/preview/index.jsx#default`),l=async()=>a.jsx(o,{})},12612:()=>{},45162:(e,t,i)=>{"use strict";i.d(t,{kJ:()=>y});var a=i(39942),s=i(4550),n=i.t(s,2),r=i(5075),d=i(11469),o=i(23644),l=i(58217),c=i(91053),u=i(12576),m=Symbol.for("apollo.hook.wrappers"),p=i(86234),_=n.use||function(e){var t=(0,p.Bd)(e);switch(t.status){case"pending":throw t;case"rejected":throw t.reason;case"fulfilled":return t.value}},h=i(93868),x=i(30040),f=i(86953),g=Symbol.for("apollo.skipToken");function y(e,t){var i,a,s,n;return void 0===t&&(t=Object.create(null)),(i=j,(n=(s=(a=(0,c.x)("object"==typeof t?t.client:void 0).queryManager)&&a[m])&&s.useSuspenseQuery)?n(i):i)(e,t)}function j(e,t){var i,n,o,l,m,p,y,j=(0,c.x)(t.client),b=(0,x.Y)(j),$=(m=(i={client:j,query:e,options:t}).client,p=i.query,y=i.options,n=function(){if(y===g)return{query:p,fetchPolicy:"standby"};var e,t,i,s,n,d=y.fetchPolicy||(null===(n=m.defaultOptions.watchQuery)||void 0===n?void 0:n.fetchPolicy)||"cache-first",o=(0,a.pi)((0,a.pi)({},y),{fetchPolicy:d,query:p,notifyOnNetworkStatusChange:!1,nextFetchPolicy:void 0});return!1!==globalThis.__DEV__&&(t=o.query,i=o.fetchPolicy,s=o.returnPartialData,(0,u.Vp)(t,u.n_.Query),void 0===(e=i)&&(e="cache-first"),(0,r.kG)(["cache-first","network-only","no-cache","cache-and-network"].includes(e),58,e),"no-cache"===i&&s&&!1!==globalThis.__DEV__&&r.kG.warn(59)),y.skip&&(o.fetchPolicy="standby"),o},o=[m,y,p],(l=s.useRef()).current&&(0,h.D)(l.current.deps,o)||(l.current={value:n(),deps:o}),l.current.value),P=$.fetchPolicy,k=$.variables,w=t.queryKey,S=(0,a.ev)([e,(0,f.B)(k)],[].concat(void 0===w?[]:w),!0),Z=b.getQueryRef(S,function(){return j.watchQuery($)}),N=s.useState([Z.key,Z.promise]),q=N[0],C=N[1];q[0]!==Z.key&&(q[0]=Z.key,q[1]=Z.promise);var D=q[1];Z.didChangeOptions($)&&(q[1]=D=Z.applyOptions($)),s.useEffect(function(){var e=Z.retain(),t=Z.listen(function(e){C([Z.key,e])});return function(){t(),e()}},[Z]);var M=s.useMemo(function(){var e=v(Z.result);return{loading:!1,data:Z.result.data,networkStatus:e?d.Ie.error:d.Ie.ready,error:e}},[Z.result]),A="standby"===P?M:_(D),Q=s.useCallback(function(e){var t=Z.fetchMore(e);return C([Z.key,Z.promise]),t},[Z]),I=s.useCallback(function(e){var t=Z.refetch(e);return C([Z.key,Z.promise]),t},[Z]),z=Z.observable.subscribeToMore;return s.useMemo(function(){return{client:j,data:A.data,error:v(A),networkStatus:A.networkStatus,fetchMore:Q,refetch:I,subscribeToMore:z}},[j,Q,I,A,z])}function v(e){return(0,l.O)(e.errors)?new o.cA({graphQLErrors:e.errors}):e.error}},12576:(e,t,i)=>{"use strict";i.d(t,{Vp:()=>u,n_:()=>a});var a,s,n=i(5075),r=i(22586),d=i(91730),o=i(18453);function l(e){var t;switch(e){case a.Query:t="Query";break;case a.Mutation:t="Mutation";break;case a.Subscription:t="Subscription"}return t}function c(e){s||(s=new r.s(d.Q.parser||1e3));var t,i,o=s.get(e);if(o)return o;(0,n.kG)(!!e&&!!e.kind,62,e);for(var l=[],c=[],u=[],m=[],p=0,_=e.definitions;p<_.length;p++){var h=_[p];if("FragmentDefinition"===h.kind){l.push(h);continue}if("OperationDefinition"===h.kind)switch(h.operation){case"query":c.push(h);break;case"mutation":u.push(h);break;case"subscription":m.push(h)}}(0,n.kG)(!l.length||c.length||u.length||m.length,63),(0,n.kG)(c.length+u.length+m.length<=1,64,e,c.length,m.length,u.length),i=c.length?a.Query:a.Mutation,c.length||u.length||(i=a.Subscription);var x=c.length?c:u.length?u:m;(0,n.kG)(1===x.length,65,e,x.length);var f=x[0];t=f.variableDefinitions||[];var g={name:f.name&&"Name"===f.name.kind?f.name.value:"data",type:i,variables:t};return s.set(e,g),g}function u(e,t){var i=c(e),a=l(t),s=l(i.type);(0,n.kG)(i.type===t,66,a,a,s)}(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(a||(a={})),c.resetCache=function(){s=void 0},!1!==globalThis.__DEV__&&(0,o.zP)("parser",function(){return s?s.size:0})}};var t=require("../../../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[9357,6491,4588,3440,3198,7541,3133,965,7110,8894,136,264,5396,751,5262,2475],()=>i(62670));module.exports=a})();