(()=>{var e={};e.id=5328,e.ids=[5328],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},12088:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>_,tree:()=>o}),i(73817),i(88418),i(10634),i(35866);var a=i(23191),r=i(88716),s=i(37922),n=i.n(s),d=i(95231),l={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>d[e]);i.d(t,l);let o=["",{children:["[lang]",{children:["(dashboard)",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,73817)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\admin\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,88418)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,10634)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\admin\\page.jsx"],c="/[lang]/(dashboard)/admin/page",m={require:i,loadChunk:()=>Promise.resolve()},_=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/[lang]/(dashboard)/admin/page",pathname:"/[lang]/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},10053:(e,t,i)=>{Promise.resolve().then(i.bind(i,37567))},37567:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Q});var a=i(10326),r=i(29084),s=i(40529),n=i(19518),d=i(84187),l=i(25609),o=i(17577);let u=({count:e,title:t})=>a.jsx(n.Z,{children:(0,a.jsxs)(d.Z,{className:"flex justify-between gap-1 ",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1 flex-grow",children:[a.jsx(l.Z,{color:"text.primary",variant:"h3",children:e}),a.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:a.jsx(l.Z,{variant:"h5",color:`${"Admin"===t?"red":"Manager"===t?"orange":"Sale"===t?"green":"Finance"===t?"blue":"Service"===t?"yellow":"brown"}`,children:t})})]}),a.jsx(s.default,{skin:"light",variant:"rounded",size:42,children:a.jsx("i",{className:`${"Admin"===t?"ri-user-settings-fill":"Manager"===t?"ri-admin-fill":"Sale"===t?"ri-discount-percent-fill":"Finance"===t?"ri-money-pound-circle-fill":"Service"===t?"ri-service-fill":"ri-caravan-fill"}`})})]})});var c=i(87700),m=i(48260),_=i(95684),p=i(78077),g=i(48029),x=i.n(g),h=i(5606),$=i(11798),v=i(86508),j=i(19074),f=i(53913),b=i(918),S=i(37841),y=i(56390),P=i(99207),w=i(74723),k=i(18753),Z=i(84875),N=i(24443),C=i(5330),q=i(76865);let D=e=>{let{setGlobalMsg:t}=(0,q.q)(),{open:i,handleClose:s,adminData:n,setData:d}=e,[u,_]=(0,o.useState)(),[g]=(0,k.D)(N.JB),{data:x}=(0,Z.kJ)(r.kI);(0,o.useRef)(null);let{control:h,reset:$,handleSubmit:v,formState:{errors:D}}=(0,w.cI)({defaultValues:{title:""}}),A=async e=>{d([...n??[],await g({variables:{email:e.email,name:e.name,password:e.password,role:e.role}})]),M(),t("➕ Added New Data")},M=()=>{s(),$({title:"",description:""})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(j.ZP,{open:i,anchor:"right",variant:"temporary",onClose:M,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[a.jsx(l.Z,{variant:"h5",children:"Add Admin"}),a.jsx(m.Z,{size:"small",onClick:M,children:a.jsx("i",{className:"ri-close-line text-2xl"})})]}),a.jsx(P.Z,{}),a.jsx("div",{className:"p-5",children:(0,a.jsxs)("form",{onSubmit:v(e=>A(e)),className:"flex flex-col gap-5",children:[a.jsx(w.Qr,{name:"name",control:h,rules:{required:!0},render:({field:e})=>a.jsx(p.Z,{...e,fullWidth:!0,label:"Name",placeholder:"",...D.name&&{error:!0,helperText:"This field is required."}})}),a.jsx(w.Qr,{name:"email",control:h,rules:{required:!0},render:({field:e})=>a.jsx(p.Z,{...e,fullWidth:!0,label:"Email",type:"email",placeholder:"",...D.email&&{error:!0,helperText:"This field is required."}})}),(0,a.jsxs)(f.Z,{fullWidth:!0,children:[a.jsx(b.Z,{id:"country",error:!!D.role,children:"Select Role"}),a.jsx(w.Qr,{name:"role",control:h,rules:{required:!0},render:({field:e})=>(0,a.jsxs)(y.Z,{label:"Select Role",...e,error:!!D.role,children:[a.jsx(S.Z,{value:"sale",children:"Sale"}),a.jsx(S.Z,{value:"finance",children:"Finance"}),a.jsx(S.Z,{value:"service",children:"Service"}),a.jsx(S.Z,{value:"delivery",children:"Delivery"}),a.jsx(S.Z,{value:"admin",children:"Admin"}),a.jsx(S.Z,{value:"manager",children:"Manager"})]})}),D.role&&a.jsx(FormHelperText,{error:!0,children:"This field is required."})]}),a.jsx(w.Qr,{name:"password",control:h,rules:{required:!0},render:({field:e})=>a.jsx(p.Z,{...e,fullWidth:!0,label:"Password",type:"password",placeholder:"",...D.password&&{error:!0,helperText:"This field is required."}})}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[a.jsx(c.Z,{variant:"contained",type:"submit",children:"Add"}),a.jsx(c.Z,{variant:"outlined",color:"error",type:"reset",onClick:M,children:"Discard"})]})]})})]}),a.jsx(C.Z,{})]})},A=e=>{let{setGlobalMsg:t}=(0,q.q)(),{open:i,handleClose:s,adminData:n,setData:d}=e,[u]=(0,k.D)(N.rV),{data:_}=(0,Z.kJ)(r.kI),{control:g,reset:x,handleSubmit:h,formState:{errors:$}}=(0,w.cI)({defaultValues:{name:"",email:"",role:""}}),v=async e=>{let i=await u({variables:{id:n.id,data:{email:e.email,name:e.name,role:e.role}}});d(e=>e.map(e=>e.id===n?.id?{...e,...i.data.update_admins_by_pk}:e)),D(),t("✅ Staff Data has been updated")};(0,o.useEffect)(()=>{n&&x({name:n.name,email:n.email,role:n.role})},[n,x]);let D=()=>{s(),x({title:"",description:""})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(j.ZP,{open:i,anchor:"right",variant:"temporary",onClose:D,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[a.jsx(l.Z,{variant:"h5",children:"Edit Staff"}),a.jsx(m.Z,{size:"small",onClick:D,children:a.jsx("i",{className:"ri-close-line text-2xl"})})]}),a.jsx(P.Z,{}),a.jsx("div",{className:"p-5",children:(0,a.jsxs)("form",{onSubmit:h(e=>v(e)),className:"flex flex-col gap-5",children:[a.jsx(w.Qr,{name:"name",control:g,rules:{required:!0},render:({field:e})=>a.jsx(p.Z,{...e,fullWidth:!0,label:"Name",placeholder:"",...$.name&&{error:!0,helperText:"This field is required."}})}),a.jsx(w.Qr,{name:"email",control:g,rules:{required:!0},render:({field:e})=>a.jsx(p.Z,{...e,fullWidth:!0,label:"Email",type:"email",placeholder:"",...$.email&&{error:!0,helperText:"This field is required."}})}),(0,a.jsxs)(f.Z,{fullWidth:!0,children:[a.jsx(b.Z,{id:"country",error:!!$.role,children:"Select Role"}),a.jsx(w.Qr,{name:"role",control:g,rules:{required:!0},render:({field:e})=>(0,a.jsxs)(y.Z,{label:"Select Role",...e,error:!!$.role,children:[a.jsx(S.Z,{value:"sale",children:"Sale"}),a.jsx(S.Z,{value:"finance",children:"Finance"}),a.jsx(S.Z,{value:"service",children:"Service"}),a.jsx(S.Z,{value:"delivery",children:"Delivery"}),a.jsx(S.Z,{value:"admin",children:"Admin"}),a.jsx(S.Z,{value:"manager",children:"Manager"})]})}),$.role&&a.jsx(FormHelperText,{error:!0,children:"This field is required."})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[a.jsx(c.Z,{variant:"contained",type:"submit",children:"Update"}),a.jsx(c.Z,{variant:"outlined",color:"error",type:"reset",onClick:D,children:"Discard"})]})]})})]}),a.jsx(C.Z,{})]})};i(60003);var M=i(89307),R=i.n(M),E=i(71463);let I=(e,t,i,a)=>{let r=(0,h.O4)(e.getValue(t),i);return a({itemRank:r}),r.passed},T=({value:e,onChange:t,debounce:i=500,...r})=>{let[s,n]=(0,o.useState)(e);return(0,o.useEffect)(()=>{n(e)},[e]),(0,o.useEffect)(()=>{let e=setTimeout(()=>{t(s)},i);return()=>clearTimeout(e)},[s]),a.jsx(p.Z,{...r,value:s,onChange:e=>n(e.target.value),size:"small"})},F=(0,$.Cl)(),J=[{label:"Name",key:"name"},{label:"Email",key:"Email"},{label:"Role",key:"role"},{label:"Created At",key:"created_at"},{label:"Updated At",key:"updated_at"}],O=()=>{let{setGlobalMsg:e}=(0,q.q)(),{data:t}=(0,Z.kJ)(r.RV),[i]=(0,k.D)(N.MZ),[s,d]=(0,o.useState)(!1),[u,p]=(0,o.useState)({}),[g,h]=(0,o.useState)(t.admins),[j,f]=(0,o.useState)(""),[b,S]=(0,o.useState)(!1),[y,P]=(0,o.useState)(),w=g.map(e=>({...e,created_at:new Date(e.created_at).toLocaleString(),updated_at:new Date(e.updated_at).toLocaleString()})),M=e=>{P(e),S(!b)},O=(0,o.useMemo)(()=>[F.accessor("id",{header:"ID",cell:({row:e})=>a.jsx(l.Z,{children:e.index+1})}),F.accessor("name",{header:"Name",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex flex-col items-start",children:a.jsx(l.Z,{className:"font-medium",color:"text.primary",children:e.original.name})})})}),F.accessor("email",{header:"Email",cell:({row:e})=>a.jsx(l.Z,{children:e.original.email})}),F.accessor("role",{header:"Role",cell:({row:e})=>a.jsx(l.Z,{children:e.original.role})}),F.accessor("created_at",{header:"Date",cell:({row:e})=>a.jsx(l.Z,{children:e.original.created_at?.substring(0,10)})}),F.accessor("actions",{header:"Actions",cell:({row:e})=>a.jsx("div",{className:"flex items-center",children:a.jsx(m.Z,{size:"small",onClick:()=>M(e.original),children:a.jsx("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})})}),enableSorting:!1})],[g]),z=(0,v.b7)({data:g,columns:O,filterFns:{fuzzy:I},state:{rowSelection:u,globalFilter:j},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:I,onRowSelectionChange:p,getCoreRowModel:(0,$.sC)(),onGlobalFilterChange:f,getFilteredRowModel:(0,$.vL)(),getSortedRowModel:(0,$.tj)(),getPaginationRowModel:(0,$.G_)(),getFacetedRowModel:(0,$.o6)(),getFacetedUniqueValues:(0,$.JG)(),getFacetedMinMaxValues:(0,$.HO)()});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.Z,{children:[(0,a.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[a.jsx(T,{value:j??"",onChange:e=>f(String(e)),placeholder:"Search",className:"max-sm:is-full"}),(0,a.jsxs)("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:[a.jsx(c.Z,{color:"secondary",variant:"outlined",startIcon:a.jsx("i",{className:"ri-upload-2-line text-xl"}),className:"max-sm:is-full",children:a.jsx(E.CSVLink,{className:"exportBtn",data:w,headers:J,filename:`all-staffs-${new Date().toISOString()}.csv`,children:"Export"})}),a.jsx(c.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>d(!s),startIcon:a.jsx("i",{className:"ri-add-line"}),children:"Add User Role"})]})]}),a.jsx("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:R().table,children:[a.jsx("thead",{children:z.getHeaderGroups().map(e=>a.jsx("tr",{children:e.headers.map(e=>a.jsx("th",{children:e.isPlaceholder?null:a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:x()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,v.ie)(e.column.columnDef.header,e.getContext()),{asc:a.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:a.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===z.getFilteredRowModel().rows.length?a.jsx("tbody",{children:a.jsx("tr",{children:a.jsx("td",{colSpan:z.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):a.jsx("tbody",{children:z.getRowModel().rows.slice(0,z.getState().pagination.pageSize).map(e=>a.jsx("tr",{className:x()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>a.jsx("td",{children:(0,v.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),a.jsx(_.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:z.getFilteredRowModel().rows.length,rowsPerPage:z.getState().pagination.pageSize,page:z.getState().pagination.pageIndex,onPageChange:(e,t)=>{z.setPageIndex(t)},onRowsPerPageChange:e=>z.setPageSize(Number(e.target.value))})]}),a.jsx(D,{open:s,adminData:g,setData:h,handleClose:()=>d(!s)}),a.jsx(A,{open:b,adminData:y,setData:h,handleClose:()=>S(!b)}),a.jsx(C.Z,{})]})};var z=i(32634);let Q=()=>{let{data:e}=(0,Z.kJ)(r.mq);return(0,a.jsxs)(z.ZP,{container:!0,spacing:3,children:[a.jsx(z.ZP,{item:!0,md:2,xs:12,sm:6,children:a.jsx(u,{count:e.adminRole.aggregate.count,title:"Admin"})}),a.jsx(z.ZP,{item:!0,md:2,xs:12,sm:6,children:a.jsx(u,{count:e.managerRole.aggregate.count,title:"Manager"})}),a.jsx(z.ZP,{item:!0,md:2,xs:12,sm:6,children:a.jsx(u,{count:e.saleRole.aggregate.count,title:"Sale"})}),a.jsx(z.ZP,{item:!0,md:2,xs:12,sm:6,children:a.jsx(u,{count:e.financeRole.aggregate.count,title:"Finance"})}),a.jsx(z.ZP,{item:!0,md:2,xs:12,sm:6,children:a.jsx(u,{count:e.deliveryRole.aggregate.count,title:"Delivery"})}),a.jsx(z.ZP,{item:!0,md:2,xs:12,sm:6,children:a.jsx(u,{count:e.serviceRole.aggregate.count,title:"Service"})}),a.jsx(z.ZP,{item:!0,xs:12,children:a.jsx(O,{})})]})}},5330:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var a=i(10326);i(17577);var r=i(38506),s=i(76865);let n=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,s.q)();return a.jsx("div",{children:a.jsx(r.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},24443:(e,t,i)=>{"use strict";i.d(t,{BM:()=>N,DR:()=>M,Ff:()=>c,HT:()=>x,Hd:()=>h,J2:()=>L,J9:()=>l,JB:()=>R,KN:()=>q,Lh:()=>z,MP:()=>n,MZ:()=>A,O7:()=>T,Qm:()=>O,SB:()=>p,SZ:()=>P,Sf:()=>j,Si:()=>H,Zq:()=>Z,aY:()=>m,bc:()=>U,dE:()=>$,dn:()=>Q,en:()=>F,hB:()=>r,he:()=>J,hq:()=>s,jN:()=>I,ju:()=>g,mU:()=>y,oe:()=>_,rV:()=>E,tC:()=>C,tt:()=>f,tz:()=>S,u7:()=>u,uv:()=>o,vl:()=>D,wU:()=>b,yG:()=>k,yn:()=>v,z7:()=>w,zN:()=>d});var a=i(24293);let r=(0,a.Ps)`
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
`,_=(0,a.Ps)`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`,p=(0,a.Ps)`
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
`,v=(0,a.Ps)`
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
`,f=(0,a.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,b=(0,a.Ps)`
  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {
    updateServiceStatus(service_token_id: $service_token_id, status: $status) {
      message
    }
  }
`,S=(0,a.Ps)`
  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {
    acceptServiceToken(
      is_warranty_valid: $is_warranty_valid
      service_fee: $service_fee
      service_token_id: $service_token_id
    ) {
      message
    }
  }
`,y=(0,a.Ps)`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
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
`,w=(0,a.Ps)`
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
`,Z=(0,a.Ps)`
  mutation changeInvoiceStatus($id: uuid!, $data: invoices_set_input!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`,N=(0,a.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,C=(0,a.Ps)`
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
`,D=(0,a.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,A=(0,a.Ps)`
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
`,R=(0,a.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,E=(0,a.Ps)`
  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {
    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      email
      role
    }
  }
`,I=(0,a.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,T=(0,a.Ps)`
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
`,F=(0,a.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,J=(0,a.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      phone
      address
    }
  }
`,O=(0,a.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,z=(0,a.Ps)`
  mutation addDiscount($data: product_discounts_insert_input!) {
    insert_product_discounts_one(object: $data) {
      id
      min_order
      discount_type
      customer_type
      created_at
      updated_at
    }
  }
`,Q=(0,a.Ps)`
  mutation updateProductDiscount($id: uuid!, $data: product_discounts_set_input!) {
    update_product_discounts_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      min_order
      discount_type
      customer_type
      created_at
      updated_at
    }
  }
`,U=(0,a.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,H=(0,a.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,L=(0,a.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`},89307:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},73817:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>n,__esModule:()=>s,default:()=>d});var a=i(68570);let r=(0,a.createProxy)(String.raw`D:\ALPHA PROJECT\Admin Dashboard\alpha-admin\src\app\[lang]\(dashboard)\admin\page.jsx`),{__esModule:s,$$typeof:n}=r;r.default;let d=(0,a.createProxy)(String.raw`D:\ALPHA PROJECT\Admin Dashboard\alpha-admin\src\app\[lang]\(dashboard)\admin\page.jsx#default`)},18753:(e,t,i)=>{"use strict";i.d(t,{D:()=>c});var a=i(65826),r=i(66126),s=i(34837),n=i(20208),d=i(76049),l=i(17267),o=i(88571),u=i(51047).Nq?r.useLayoutEffect:r.useEffect;function c(e,t){var i=(0,o.x)(null==t?void 0:t.client);(0,d.Vp)(e,d.n_.Mutation);var c=r.useState({called:!1,loading:!1,client:i}),m=c[0],_=c[1],p=r.useRef({result:m,mutationId:0,isMounted:!0,client:i,mutation:e,options:t});u(function(){Object.assign(p.current,{client:i,options:t,mutation:e})});var g=r.useCallback(function(e){void 0===e&&(e={});var t=p.current,i=t.options,r=t.mutation,d=(0,a.pi)((0,a.pi)({},i),{mutation:r}),o=e.client||p.current.client;p.current.result.loading||d.ignoreResults||!p.current.isMounted||_(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:o});var u=++p.current.mutationId,c=(0,s.J)(d,e);return o.mutate(c).then(function(t){var i,a,r=t.data,s=t.errors,d=s&&s.length>0?new l.cA({graphQLErrors:s}):void 0,m=e.onError||(null===(i=p.current.options)||void 0===i?void 0:i.onError);if(d&&m&&m(d,c),u===p.current.mutationId&&!c.ignoreResults){var g={called:!0,loading:!1,data:r,error:d,client:o};p.current.isMounted&&!(0,n.D)(p.current.result,g)&&_(p.current.result=g)}var x=e.onCompleted||(null===(a=p.current.options)||void 0===a?void 0:a.onCompleted);return d||null==x||x(t.data,c),t}).catch(function(t){if(u===p.current.mutationId&&p.current.isMounted){var i,a={loading:!1,error:t,data:void 0,called:!0,client:o};(0,n.D)(p.current.result,a)||_(p.current.result=a)}var r=e.onError||(null===(i=p.current.options)||void 0===i?void 0:i.onError);if(r)return r(t,c),{data:void 0,errors:t};throw t})},[]),x=r.useCallback(function(){if(p.current.isMounted){var e={called:!1,loading:!1,client:p.current.client};Object.assign(p.current,{mutationId:0,result:e}),_(e)}},[]);return r.useEffect(function(){var e=p.current;return e.isMounted=!0,function(){e.isMounted=!1}},[]),[g,(0,a.pi)({reset:x},m)]}}};var t=require("../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[8948,4471,4674,4366,8522,4313,2825,8077,1994,1798,8117,4723,9074,5684,6860,7251,5674],()=>i(12088));module.exports=a})();