"use strict";exports.id=7680,exports.ids=[7680],exports.modules={91347:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(27486);i(618);var d=i(27319),a=i(22405);let n=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,a.q)();return r.jsx("div",{children:r.jsx(d.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},66718:(e,t,i)=>{i.d(t,{BM:()=>C,DR:()=>U,Ff:()=>c,HT:()=>g,Hd:()=>y,J2:()=>H,J9:()=>s,JB:()=>q,KN:()=>M,Lh:()=>z,MP:()=>n,MZ:()=>Z,O7:()=>T,Qm:()=>A,SB:()=>m,SZ:()=>k,Sf:()=>b,Si:()=>L,Zq:()=>R,aY:()=>l,bc:()=>G,dE:()=>f,dn:()=>B,en:()=>F,hB:()=>d,he:()=>I,hq:()=>a,jN:()=>E,ju:()=>$,mU:()=>w,mt:()=>Q,oe:()=>p,pE:()=>J,rV:()=>D,si:()=>V,tC:()=>N,tt:()=>v,tz:()=>P,u7:()=>_,ui:()=>W,uv:()=>u,vl:()=>O,wU:()=>S,yG:()=>x,yn:()=>h,z7:()=>j,zN:()=>o});var r=i(12738);let d=(0,r.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,a=(0,r.Ps)`
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
`,o=(0,r.Ps)`
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
      title
      price
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
`,s=(0,r.Ps)`
  mutation editProduct(
    $id: uuid!
    $title: String!
    $description_html: String!
    $brand_id: uuid!
    $category_id: uuid!
    $serial_number: String
    $price: numeric!
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
        warranty_period: $warranty_period
      }
    ) {
      id
      title
      price
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
`,_=(0,r.Ps)`
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
`,l=(0,r.Ps)`
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
`,m=(0,r.Ps)`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`,$=(0,r.Ps)`
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
`;let y=(0,r.Ps)`
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
`,h=(0,r.Ps)`
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
`,v=(0,r.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,S=(0,r.Ps)`
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
`,w=(0,r.Ps)`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`,k=(0,r.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,j=(0,r.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,x=(0,r.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!, $rejected_reason: String) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,R=(0,r.Ps)`
  mutation updateInvoiceStatus($invoice_id: uuid!, $status: String!, $rejected_reason: String) {
    updateInvoiceStatus(invoice_id: $invoice_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,C=(0,r.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,N=(0,r.Ps)`
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
`,M=(0,r.Ps)`
  mutation sendQInvoice($quotation_id: uuid!) {
    sendInvoice(quotation_id: $quotation_id) {
      message
    }
  }
`,O=(0,r.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,Z=(0,r.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,U=(0,r.Ps)`
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
`,E=(0,r.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,T=(0,r.Ps)`
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
`,F=(0,r.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,I=(0,r.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      phone
      address
    }
  }
`,A=(0,r.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,Q=(0,r.Ps)`
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
`,z=(0,r.Ps)`
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
`,B=(0,r.Ps)`
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
`,G=(0,r.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,L=(0,r.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,H=(0,r.Ps)`
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
`,V=(0,r.Ps)`
  mutation deleteProductImage($id: uuid!) {
    delete_product_medias_by_pk(id: $id) {
      id
      media_url
      media_type
    }
  }
`,W=(0,r.Ps)`
  mutation resetUserPassword($user_id: uuid!, $confirmNewPassword: String!, $newPassword: String!) {
    UpdateUserPassword(confirmNewPassword: $confirmNewPassword, user_id: $user_id, newPassword: $newPassword) {
      message
    }
  }
`},5436:(e,t,i)=>{i.d(t,{Z:()=>S});var r=i(27486),d=i(618),a=i(39800),n=i(9594),o=i(72660),s=i(30785),u=i(44182),_=i(50822),c=i(57971),l=i(95727),p=i(23467),m=i(12964),$=i(20700),g=i(32475),y=i(83398),f=i(66718),h=i(91347),b=i(22405);let v={paymentDate:new Date,paymentMethod:"select-method",paymentAmount:500,paymentNote:""},S=({open:e,handleClose:t,invoiceData:i,paymentMethods:S})=>{let{setGlobalMsg:P}=(0,b.q)(),[w,k]=(0,d.useState)(!1),[j,x]=(0,d.useState)(v),[R]=(0,y.D)(f.tC),C=async e=>{e.preventDefault();try{k(!0),await R({variables:{amount:j.amount,invoice_id:i.id,payment_date:j.payment_date,payment_method:j.payment_method}}),k(!1),P("✅ Payment Send Successful"),x(""),t()}catch(e){console.log("Error ",e)}},N=()=>{t(),x(v)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.ZP,{open:e,anchor:"right",variant:"temporary",onClose:N,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[r.jsx(o.Z,{variant:"h5",children:"Add Payment"}),r.jsx(n.Z,{size:"small",onClick:N,children:r.jsx("i",{className:"ri-close-line text-2xl"})})]}),r.jsx($.Z,{}),(0,r.jsxs)("div",{className:"p-5",children:[(0,r.jsxs)(o.Z,{className:"flex justify-end text-white",children:["Balance : ",i.balance?i.balance.toLocaleString():0]}),(0,r.jsxs)("form",{onSubmit:C,className:"flex flex-col gap-5 mt-5",children:[r.jsx(s.Z,{fullWidth:!0,id:"amount",label:"Payment Amount",type:"number",InputProps:{startAdornment:r.jsx(c.Z,{position:"start"})},value:j.amount,onChange:e=>x({...j,amount:+e.target.value})}),r.jsx(g.Z,{selected:j.payment_date,id:"payment-date",onChange:e=>null!==e&&x({...j,payment_date:e}),customInput:r.jsx(s.Z,{fullWidth:!0,label:"Payment Date"})}),(0,r.jsxs)(u.Z,{fullWidth:!0,children:[r.jsx(_.Z,{htmlFor:"payment-method",children:"Payment Method"}),(0,r.jsxs)(l.Z,{label:"Payment Method",labelId:"payment-method",id:"payment-method-select",value:j.payment_method,onChange:e=>x({...j,payment_method:e.target.value}),children:[r.jsx(p.Z,{value:"select-method",disabled:!0,children:"Select Payment Method"}),S.payment_methods.map(e=>r.jsx(p.Z,{value:e.name,children:e.name},e.id))]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[r.jsx(m.Z,{loading:w,size:"large",variant:"contained",type:"submit",children:"Send"}),r.jsx(m.Z,{size:"large",variant:"outlined",color:"secondary",type:"reset",onClick:N,children:"Cancel"})]})]})]})]}),r.jsx(h.Z,{})]})}},31976:(e,t,i)=>{var r=i(74549);i.o(r,"redirect")&&i.d(t,{redirect:function(){return r.redirect}})},74549:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{ReadonlyURLSearchParams:function(){return n},RedirectType:function(){return r.RedirectType},notFound:function(){return d.notFound},permanentRedirect:function(){return r.permanentRedirect},redirect:function(){return r.redirect}});let r=i(84365),d=i(35984);class a extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class n extends URLSearchParams{append(){throw new a}delete(){throw new a}set(){throw new a}sort(){throw new a}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},35984:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{isNotFoundError:function(){return d},notFound:function(){return r}});let i="NEXT_NOT_FOUND";function r(){let e=Error(i);throw e.digest=i,e}function d(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===i}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},78429:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return i}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(i||(i={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},84365:(e,t,i)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{RedirectType:function(){return r},getRedirectError:function(){return s},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return p},getURLFromRedirectError:function(){return l},isRedirectError:function(){return c},permanentRedirect:function(){return _},redirect:function(){return u}});let d=i(54580),a=i(72934),n=i(78429),o="NEXT_REDIRECT";function s(e,t,i){void 0===i&&(i=n.RedirectStatusCode.TemporaryRedirect);let r=Error(o);r.digest=o+";"+t+";"+e+";"+i+";";let a=d.requestAsyncStorage.getStore();return a&&(r.mutableCookies=a.mutableCookies),r}function u(e,t){void 0===t&&(t="replace");let i=a.actionAsyncStorage.getStore();throw s(e,t,(null==i?void 0:i.isAction)?n.RedirectStatusCode.SeeOther:n.RedirectStatusCode.TemporaryRedirect)}function _(e,t){void 0===t&&(t="replace");let i=a.actionAsyncStorage.getStore();throw s(e,t,(null==i?void 0:i.isAction)?n.RedirectStatusCode.SeeOther:n.RedirectStatusCode.PermanentRedirect)}function c(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,i,r,d]=e.digest.split(";",4),a=Number(d);return t===o&&("replace"===i||"push"===i)&&"string"==typeof r&&!isNaN(a)&&a in n.RedirectStatusCode}function l(e){return c(e)?e.digest.split(";",3)[2]:null}function p(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!c(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},94491:(e,t,i)=>{i.d(t,{Vp:()=>c,n_:()=>r});var r,d,a=i(67733),n=i(21454),o=i(55047),s=i(1262);function u(e){var t;switch(e){case r.Query:t="Query";break;case r.Mutation:t="Mutation";break;case r.Subscription:t="Subscription"}return t}function _(e){d||(d=new n.s(o.Q.parser||1e3));var t,i,s=d.get(e);if(s)return s;(0,a.kG)(!!e&&!!e.kind,62,e);for(var u=[],_=[],c=[],l=[],p=0,m=e.definitions;p<m.length;p++){var $=m[p];if("FragmentDefinition"===$.kind){u.push($);continue}if("OperationDefinition"===$.kind)switch($.operation){case"query":_.push($);break;case"mutation":c.push($);break;case"subscription":l.push($)}}(0,a.kG)(!u.length||_.length||c.length||l.length,63),(0,a.kG)(_.length+c.length+l.length<=1,64,e,_.length,l.length,c.length),i=_.length?r.Query:r.Mutation,_.length||c.length||(i=r.Subscription);var g=_.length?_:c.length?c:l;(0,a.kG)(1===g.length,65,e,g.length);var y=g[0];t=y.variableDefinitions||[];var f={name:y.name&&"Name"===y.name.kind?y.name.value:"data",type:i,variables:t};return d.set(e,f),f}function c(e,t){var i=_(e),r=u(t),d=u(i.type);(0,a.kG)(i.type===t,66,r,r,d)}(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(r||(r={})),_.resetCache=function(){d=void 0},!1!==globalThis.__DEV__&&(0,s.zP)("parser",function(){return d?d.size:0})}};