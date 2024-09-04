(()=>{var t={};t.id=3357,t.ids=[3357],t.modules={47849:t=>{"use strict";t.exports=require("next/dist/client/components/action-async-storage.external")},72934:t=>{"use strict";t.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:t=>{"use strict";t.exports=require("next/dist/client/components/request-async-storage.external")},54580:t=>{"use strict";t.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:t=>{"use strict";t.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:t=>{"use strict";t.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:t=>{"use strict";t.exports=require("path")},57310:t=>{"use strict";t.exports=require("url")},97005:(t,e,i)=>{"use strict";i.r(e),i.d(e,{GlobalError:()=>r.a,__next_app__:()=>l,originalPathname:()=>_,pages:()=>c,routeModule:()=>p,tree:()=>u}),i(69635),i(5114),i(32687),i(85133);var a=i(79193),d=i(71854),n=i(33997),r=i.n(n),s=i(73320),o={};for(let t in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(t)&&(o[t]=()=>s[t]);i.d(e,o);let u=["",{children:["[lang]",{children:["(dashboard)",{children:["products",{children:["discount",{children:["list",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,69635)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/products/discount/list/page.jsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5114)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,32687)),"/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/layout.jsx"],metadata:{icon:[async t=>(await Promise.resolve().then(i.bind(i,85529))).default(t)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async t=>(await Promise.resolve().then(i.bind(i,85529))).default(t)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/axra/AXRA/office-cicd/alpha-admin/src/app/[lang]/(dashboard)/products/discount/list/page.jsx"],_="/[lang]/(dashboard)/products/discount/list/page",l={require:i,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:d.x.APP_PAGE,page:"/[lang]/(dashboard)/products/discount/list/page",pathname:"/[lang]/products/discount/list",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},84328:(t,e,i)=>{Promise.resolve().then(i.bind(i,16154))},45336:(t,e,i)=>{"use strict";i(27486),i(19396),i(81636),i(25009)},66718:(t,e,i)=>{"use strict";i.d(e,{BM:()=>j,DR:()=>E,Ff:()=>_,HT:()=>g,Hd:()=>v,J2:()=>J,J9:()=>o,JB:()=>M,KN:()=>A,Lh:()=>Q,MP:()=>r,MZ:()=>I,O7:()=>R,Qm:()=>B,SB:()=>m,SZ:()=>x,Sf:()=>h,Si:()=>X,Zq:()=>w,aY:()=>l,bc:()=>G,dE:()=>b,en:()=>U,hB:()=>d,he:()=>D,hq:()=>n,jN:()=>N,ju:()=>$,oe:()=>p,tC:()=>q,tt:()=>f,u7:()=>c,uv:()=>u,vl:()=>C,wU:()=>y,yG:()=>k,yn:()=>P,z7:()=>S,zN:()=>s});var a=i(12738);let d=(0,a.Ps)`
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
`,s=(0,a.Ps)`
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
`,u=(0,a.Ps)`
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
`,_=(0,a.Ps)`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`,l=(0,a.Ps)`
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
`,m=(0,a.Ps)`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`,$=(0,a.Ps)`
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
`;let g=(0,a.Ps)`
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
`;let v=(0,a.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,b=(0,a.Ps)`
  mutation editNewProducts($id: uuid!, $data: news_set_input!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,P=(0,a.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,h=(0,a.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,f=(0,a.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,y=(0,a.Ps)`
  mutation changeOrderStatus($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`,x=(0,a.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,S=(0,a.Ps)`
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
`,j=(0,a.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,q=(0,a.Ps)`
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
`,C=(0,a.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,I=(0,a.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,E=(0,a.Ps)`
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
`,N=(0,a.Ps)`
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
`,U=(0,a.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,D=(0,a.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,B=(0,a.Ps)`
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
`,X=(0,a.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`,J=(0,a.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
    }
  }
`},16154:(t,e,i)=>{"use strict";i.d(e,{default:()=>o});var a=i(27486),d=i(97687),n=i(5060),r=i(45162),s=i(25009);i(45336),i(19396),i(81636),i(618);let o=()=>{let{data:t}=(0,r.kJ)(s.Jv);return a.jsx(a.Fragment,{children:a.jsx(d.ZP,{container:!0,spacing:6,children:a.jsx(d.ZP,{item:!0,xs:12,children:a.jsx(n.Z,{})})})})}},31538:t=>{t.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},69635:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var a=i(79703),d=i(92334);let n=(0,d.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/products/discount/list/index.jsx`),{__esModule:r,$$typeof:s}=n;n.default;let o=(0,d.createProxy)(String.raw`/home/axra/AXRA/office-cicd/alpha-admin/src/views/products/discount/list/index.jsx#default`);var u=i(45170);let c=async()=>(await (0,u.getEcommerceData)(),a.jsx(o,{}))},38860:(t,e,i)=>{"use strict";i.d(e,{D:()=>_});var a=i(39942),d=i(4550),n=i(36759),r=i(93868),s=i(12576),o=i(23644),u=i(91053),c=i(3678).Nq?d.useLayoutEffect:d.useEffect;function _(t,e){var i=(0,u.x)(null==e?void 0:e.client);(0,s.Vp)(t,s.n_.Mutation);var _=d.useState({called:!1,loading:!1,client:i}),l=_[0],p=_[1],m=d.useRef({result:l,mutationId:0,isMounted:!0,client:i,mutation:t,options:e});c(function(){Object.assign(m.current,{client:i,options:e,mutation:t})});var $=d.useCallback(function(t){void 0===t&&(t={});var e=m.current,i=e.options,d=e.mutation,s=(0,a.pi)((0,a.pi)({},i),{mutation:d}),u=t.client||m.current.client;m.current.result.loading||s.ignoreResults||!m.current.isMounted||p(m.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:u});var c=++m.current.mutationId,_=(0,n.J)(s,t);return u.mutate(_).then(function(e){var i,a,d=e.data,n=e.errors,s=n&&n.length>0?new o.cA({graphQLErrors:n}):void 0,l=t.onError||(null===(i=m.current.options)||void 0===i?void 0:i.onError);if(s&&l&&l(s,_),c===m.current.mutationId&&!_.ignoreResults){var $={called:!0,loading:!1,data:d,error:s,client:u};m.current.isMounted&&!(0,r.D)(m.current.result,$)&&p(m.current.result=$)}var g=t.onCompleted||(null===(a=m.current.options)||void 0===a?void 0:a.onCompleted);return s||null==g||g(e.data,_),e}).catch(function(e){if(c===m.current.mutationId&&m.current.isMounted){var i,a={loading:!1,error:e,data:void 0,called:!0,client:u};(0,r.D)(m.current.result,a)||p(m.current.result=a)}var d=t.onError||(null===(i=m.current.options)||void 0===i?void 0:i.onError);if(d)return d(e,_),{data:void 0,errors:e};throw e})},[]),g=d.useCallback(function(){if(m.current.isMounted){var t={called:!1,loading:!1,client:m.current.client};Object.assign(m.current,{mutationId:0,result:t}),p(t)}},[]);return d.useEffect(function(){var t=m.current;return t.isMounted=!0,function(){t.isMounted=!1}},[]),[$,(0,a.pi)({reset:g},l)]}}};var e=require("../../../../../../webpack-runtime.js");e.C(t);var i=t=>e(e.s=t),a=e.X(0,[9357,6491,4588,3440,3198,7541,3133,965,7110,6514,5073,6797,2990,751,5262,603,7364,9947,4989,5060],()=>i(97005));module.exports=a})();