<<<<<<< HEAD
const CHUNK_PUBLIC_PATH = "server/app/[lang]/(dashboard)/admin/page.js";
const runtime = require("../../../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_b3d312._.js");
runtime.loadChunk("server/chunks/ssr/_c75555._.js");
runtime.loadChunk("server/chunks/ssr/src_data_dictionaries_f671ca._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/[lang]/(dashboard)/admin/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/[lang]/(dashboard)/admin/page { COMPONENT_0 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_1 => \"[project]/src/app/[lang]/layout.jsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_2 => \"[project]/src/app/[lang]/(dashboard)/layout.jsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_3 => \"[project]/src/app/[lang]/(dashboard)/admin/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <facade>", CHUNK_PUBLIC_PATH).exports;
=======
(()=>{var e={};e.id=5328,e.ids=[5328],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},56366:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>o}),i(80318),i(5114),i(32687),i(85133);var r=i(79193),a=i(71854),s=i(33997),n=i.n(s),d=i(73320),l={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>d[e]);i.d(t,l);let o=["",{children:["[lang]",{children:["(dashboard)",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,80318)),"D:\\projects\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\admin\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5114)),"D:\\projects\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,32687)),"D:\\projects\\alpha-admin\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\projects\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\admin\\page.jsx"],u="/[lang]/(dashboard)/admin/page",m={require:i,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[lang]/(dashboard)/admin/page",pathname:"/[lang]/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},41521:(e,t,i)=>{Promise.resolve().then(i.bind(i,45392))},48398:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>f});var r=i(27486),a=i(618),s=i(38165),n=i(36370),d=i(29454),l=i(39926),o=i(48152),c=i(64037),u=i(29597),m=i(98108),p=i(5773),_=i(1416),x=i(7556),g=i(19396),h=i.n(g),j=i(63665);let $=e=>{let{tooltipProps:t,children:i}=e;return t?.title?r.jsx(n.Z,{...t,children:i}):i},v=({children:e,option:t})=>t.href?r.jsx(d.Z,{component:s.default,href:t.href,...t.linkProps,children:e}):r.jsx(r.Fragment,{children:e}),f=e=>{let{tooltipProps:t,icon:i,iconClassName:s,options:n,leftAlignMenu:d,iconButtonProps:g}=e,[f,b]=(0,a.useState)(!1),P=(0,a.useRef)(null),{settings:S}=(0,j.r)(),y=e=>{P.current&&P.current.contains(e.target)||b(!1)};return(0,r.jsxs)(r.Fragment,{children:[r.jsx($,{tooltipProps:t,children:r.jsx(_.Z,{ref:P,size:"small",onClick:()=>{b(e=>!e)},...g,children:"string"==typeof i?r.jsx("i",{className:h()(i,s)}):i||r.jsx("i",{className:h()("ri-more-2-line",s)})})}),r.jsx(l.Z,{open:f,anchorEl:P.current,placement:d?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:({TransitionProps:e})=>r.jsx(m.Z,{...e,children:r.jsx(p.Z,{className:"bordered"===S.skin?"border shadow-none":"shadow-lg",children:r.jsx(u.d,{onClickAway:y,children:r.jsx(c.Z,{autoFocusItem:f,children:n.map((e,t)=>"string"==typeof e?r.jsx(o.Z,{onClick:y,children:e},t):"divider"in e?e.divider&&r.jsx(x.Z,{...e.dividerProps},t):r.jsx(o.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{y(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,r.jsxs)(v,{option:e,children:[("string"==typeof e.icon?r.jsx("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})})]})}},45392:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Q});var r=i(27486),a=i(25009),s=i(81636),n=i(42453),d=i(35549),l=i(30675),o=i(618);let c=({count:e,title:t})=>r.jsx(n.Z,{children:(0,r.jsxs)(d.Z,{className:"flex justify-between gap-1 ",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-1 flex-grow",children:[r.jsx(l.Z,{color:"text.primary",variant:"h3",children:e}),r.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:r.jsx(l.Z,{variant:"h5",color:`${"Admin"===t?"red":"Manager"===t?"orange":"Sale"===t?"green":"Finance"===t?"blue":"Service"===t?"yellow":"brown"}`,children:t})})]}),r.jsx(s.default,{skin:"light",variant:"rounded",size:42,children:r.jsx("i",{className:`${"Admin"===t?"ri-user-settings-fill":"Manager"===t?"ri-admin-fill":"Sale"===t?"ri-discount-percent-fill":"Finance"===t?"ri-money-pound-circle-fill":"Service"===t?"ri-service-fill":"ri-caravan-fill"}`})})]})});var u=i(15532),m=i(1416),p=i(46797),_=i(30965),x=i(19396),g=i.n(x),h=i(61359),j=i(36514),$=i(57229),v=i(40136),f=i(12741),b=i(80013),P=i(48152),S=i(74054),y=i(7556),w=i(58894),Z=i(38860),k=i(45162),N=i(66718),q=i(91347),C=i(22405);let M=e=>{let{setGlobalMsg:t}=(0,C.q)(),{open:i,handleClose:s,adminData:n,setData:d}=e,[c,p]=(0,o.useState)(),[x]=(0,Z.D)(N.JB),{data:g}=(0,k.kJ)(a.kI);(0,o.useRef)(null);let{control:h,reset:j,handleSubmit:$,formState:{errors:M}}=(0,w.cI)({defaultValues:{title:""}}),D=async e=>{d([...n??[],await x({variables:{email:e.email,name:e.name,password:e.password,role:e.role}})]),I(),t("➕ Added New Data")},I=()=>{s(),j({title:"",description:""})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v.ZP,{open:i,anchor:"right",variant:"temporary",onClose:I,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[r.jsx(l.Z,{variant:"h5",children:"Add Admin"}),r.jsx(m.Z,{size:"small",onClick:I,children:r.jsx("i",{className:"ri-close-line text-2xl"})})]}),r.jsx(y.Z,{}),r.jsx("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:$(e=>D(e)),className:"flex flex-col gap-5",children:[r.jsx(w.Qr,{name:"name",control:h,rules:{required:!0},render:({field:e})=>r.jsx(_.Z,{...e,fullWidth:!0,label:"Name",placeholder:"",...M.name&&{error:!0,helperText:"This field is required."}})}),r.jsx(w.Qr,{name:"email",control:h,rules:{required:!0},render:({field:e})=>r.jsx(_.Z,{...e,fullWidth:!0,label:"Email",type:"email",placeholder:"",...M.email&&{error:!0,helperText:"This field is required."}})}),(0,r.jsxs)(f.Z,{fullWidth:!0,children:[r.jsx(b.Z,{id:"country",error:!!M.role,children:"Select Role"}),r.jsx(w.Qr,{name:"role",control:h,rules:{required:!0},render:({field:e})=>(0,r.jsxs)(S.Z,{label:"Select Role",...e,error:!!M.role,children:[r.jsx(P.Z,{value:"sale",children:"Sale"}),r.jsx(P.Z,{value:"finance",children:"Finance"}),r.jsx(P.Z,{value:"service",children:"Service"}),r.jsx(P.Z,{value:"delivery",children:"Delivery"}),r.jsx(P.Z,{value:"admin",children:"Admin"}),r.jsx(P.Z,{value:"manager",children:"Manager"})]})}),M.role&&r.jsx(FormHelperText,{error:!0,children:"This field is required."})]}),r.jsx(w.Qr,{name:"password",control:h,rules:{required:!0},render:({field:e})=>r.jsx(_.Z,{...e,fullWidth:!0,label:"Password",type:"password",placeholder:"",...M.password&&{error:!0,helperText:"This field is required."}})}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[r.jsx(u.Z,{variant:"contained",type:"submit",children:"Add"}),r.jsx(u.Z,{variant:"outlined",color:"error",type:"reset",onClick:I,children:"Discard"})]})]})})]}),r.jsx(q.Z,{})]})},D=e=>{let{setGlobalMsg:t}=(0,C.q)(),{open:i,handleClose:s,adminData:n,setData:d}=e,[c,p]=(0,o.useState)(),[x]=(0,Z.D)(N.JB),{data:g}=(0,k.kJ)(a.kI);(0,o.useRef)(null);let{control:h,reset:j,handleSubmit:$,formState:{errors:M}}=(0,w.cI)({defaultValues:{title:""}}),D=async e=>{d([...n??[],await x({variables:{email:e.email,name:e.name,password:e.password,role:e.role}})]),I(),t("➕ Added New Data")};console.log("adminData",n),(0,o.useEffect)(()=>{n&&j({name:n.name,email:n.email,password:n.password,role:n.role})});let I=()=>{s(),j({title:"",description:""})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v.ZP,{open:i,anchor:"right",variant:"temporary",onClose:I,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[r.jsx(l.Z,{variant:"h5",children:"Edit Staff"}),r.jsx(m.Z,{size:"small",onClick:I,children:r.jsx("i",{className:"ri-close-line text-2xl"})})]}),r.jsx(y.Z,{}),r.jsx("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:$(e=>D(e)),className:"flex flex-col gap-5",children:[r.jsx(w.Qr,{name:"name",control:h,rules:{required:!0},render:({field:e})=>r.jsx(_.Z,{...e,fullWidth:!0,label:"Name",placeholder:"",...M.name&&{error:!0,helperText:"This field is required."}})}),r.jsx(w.Qr,{name:"email",control:h,rules:{required:!0},render:({field:e})=>r.jsx(_.Z,{...e,fullWidth:!0,label:"Email",type:"email",placeholder:"",...M.email&&{error:!0,helperText:"This field is required."}})}),(0,r.jsxs)(f.Z,{fullWidth:!0,children:[r.jsx(b.Z,{id:"country",error:!!M.role,children:"Select Role"}),r.jsx(w.Qr,{name:"role",control:h,rules:{required:!0},render:({field:e})=>(0,r.jsxs)(S.Z,{label:"Select Role",...e,error:!!M.role,children:[r.jsx(P.Z,{value:"sale",children:"Sale"}),r.jsx(P.Z,{value:"finance",children:"Finance"}),r.jsx(P.Z,{value:"service",children:"Service"}),r.jsx(P.Z,{value:"delivery",children:"Delivery"}),r.jsx(P.Z,{value:"admin",children:"Admin"}),r.jsx(P.Z,{value:"manager",children:"Manager"})]})}),M.role&&r.jsx(FormHelperText,{error:!0,children:"This field is required."})]}),r.jsx(w.Qr,{name:"password",control:h,rules:{required:!0},render:({field:e})=>r.jsx(_.Z,{...e,fullWidth:!0,label:"Password",type:"password",placeholder:"",...M.password&&{error:!0,helperText:"This field is required."}})}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[r.jsx(u.Z,{variant:"contained",type:"submit",children:"Edit"}),r.jsx(u.Z,{variant:"outlined",color:"error",type:"reset",onClick:I,children:"Discard"})]})]})})]}),r.jsx(q.Z,{})]})};i(48398);var I=i(31538),R=i.n(I);let F=(e,t,i,r)=>{let a=(0,h.O4)(e.getValue(t),i);return r({itemRank:a}),a.passed},A=({value:e,onChange:t,debounce:i=500,...a})=>{let[s,n]=(0,o.useState)(e);return(0,o.useEffect)(()=>{n(e)},[e]),(0,o.useEffect)(()=>{let e=setTimeout(()=>{t(s)},i);return()=>clearTimeout(e)},[s]),r.jsx(_.Z,{...a,value:s,onChange:e=>n(e.target.value),size:"small"})},E=(0,j.Cl)(),T=()=>{let{setGlobalMsg:e}=(0,C.q)(),{data:t}=(0,k.kJ)(a.RV),[i]=(0,Z.D)(N.MZ),[s,d]=(0,o.useState)(!1),[c,_]=(0,o.useState)({}),[x,h]=(0,o.useState)(t.admins),[v,f]=(0,o.useState)(""),[b,P]=(0,o.useState)(!1),[S,y]=(0,o.useState)(),w=e=>{y(e),P(!b)},I=(0,o.useMemo)(()=>[E.accessor("id",{header:"ID",cell:({row:e})=>r.jsx(l.Z,{children:e.index+1})}),E.accessor("name",{header:"Name",cell:({row:e})=>r.jsx("div",{className:"flex items-center gap-3",children:r.jsx("div",{className:"flex flex-col items-start",children:r.jsx(l.Z,{className:"font-medium",color:"text.primary",children:e.original.name})})})}),E.accessor("email",{header:"Email",cell:({row:e})=>r.jsx(l.Z,{children:e.original.email})}),E.accessor("role",{header:"Role",cell:({row:e})=>r.jsx(l.Z,{children:e.original.role})}),E.accessor("created_at",{header:"Date",cell:({row:e})=>r.jsx(l.Z,{children:e.original.created_at.substring(0,10)})}),E.accessor("actions",{header:"Actions",cell:({row:e})=>r.jsx("div",{className:"flex items-center",children:r.jsx(m.Z,{size:"small",onClick:()=>w(e.original),children:r.jsx("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})})}),enableSorting:!1})],[x]),T=(0,$.b7)({data:x,columns:I,filterFns:{fuzzy:F},state:{rowSelection:c,globalFilter:v},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:F,onRowSelectionChange:_,getCoreRowModel:(0,j.sC)(),onGlobalFilterChange:f,getFilteredRowModel:(0,j.vL)(),getSortedRowModel:(0,j.tj)(),getPaginationRowModel:(0,j.G_)(),getFacetedRowModel:(0,j.o6)(),getFacetedUniqueValues:(0,j.JG)(),getFacetedMinMaxValues:(0,j.HO)()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.Z,{children:[(0,r.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[r.jsx(A,{value:v??"",onChange:e=>f(String(e)),placeholder:"Search",className:"max-sm:is-full"}),r.jsx("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:r.jsx(u.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>d(!s),startIcon:r.jsx("i",{className:"ri-add-line"}),children:"Add User Role"})})]}),r.jsx("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:R().table,children:[r.jsx("thead",{children:T.getHeaderGroups().map(e=>r.jsx("tr",{children:e.headers.map(e=>r.jsx("th",{children:e.isPlaceholder?null:r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:g()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,$.ie)(e.column.columnDef.header,e.getContext()),{asc:r.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:r.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===T.getFilteredRowModel().rows.length?r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx("td",{colSpan:T.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):r.jsx("tbody",{children:T.getRowModel().rows.slice(0,T.getState().pagination.pageSize).map(e=>r.jsx("tr",{className:g()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>r.jsx("td",{children:(0,$.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),r.jsx(p.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:T.getFilteredRowModel().rows.length,rowsPerPage:T.getState().pagination.pageSize,page:T.getState().pagination.pageIndex,onPageChange:(e,t)=>{T.setPageIndex(t)},onRowsPerPageChange:e=>T.setPageSize(Number(e.target.value))})]}),r.jsx(M,{open:s,adminData:x,setData:h,handleClose:()=>d(!s)}),console.log("edit admin ",S),r.jsx(D,{open:b,adminData:S,setData:h,handleClose:()=>P(!addServiceOpen)}),r.jsx(q.Z,{})]})};var z=i(97687);let Q=()=>{let{data:e}=(0,k.kJ)(a.mq);return(0,r.jsxs)(z.ZP,{container:!0,spacing:3,children:[r.jsx(z.ZP,{item:!0,md:2,xs:12,sm:6,children:r.jsx(c,{count:e.adminRole.aggregate.count,title:"Admin"})}),r.jsx(z.ZP,{item:!0,md:2,xs:12,sm:6,children:r.jsx(c,{count:e.managerRole.aggregate.count,title:"Manager"})}),r.jsx(z.ZP,{item:!0,md:2,xs:12,sm:6,children:r.jsx(c,{count:e.saleRole.aggregate.count,title:"Sale"})}),r.jsx(z.ZP,{item:!0,md:2,xs:12,sm:6,children:r.jsx(c,{count:e.financeRole.aggregate.count,title:"Finance"})}),r.jsx(z.ZP,{item:!0,md:2,xs:12,sm:6,children:r.jsx(c,{count:e.deliveryRole.aggregate.count,title:"Delivery"})}),r.jsx(z.ZP,{item:!0,md:2,xs:12,sm:6,children:r.jsx(c,{count:e.serviceRole.aggregate.count,title:"Service"})}),r.jsx(z.ZP,{item:!0,xs:12,children:r.jsx(T,{})})]})}},91347:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var r=i(27486);i(618);var a=i(72277),s=i(22405);let n=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,s.q)();return r.jsx("div",{children:r.jsx(a.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>Z,DR:()=>M,Ff:()=>u,HT:()=>g,Hd:()=>h,J2:()=>U,J9:()=>l,JB:()=>D,KN:()=>N,Lh:()=>T,MP:()=>n,MZ:()=>C,O7:()=>R,Qm:()=>E,SB:()=>_,SZ:()=>P,Sf:()=>v,Si:()=>Q,Zq:()=>w,aY:()=>m,bc:()=>z,dE:()=>j,en:()=>F,hB:()=>a,he:()=>A,hq:()=>s,jN:()=>I,ju:()=>x,oe:()=>p,tC:()=>k,tt:()=>f,u7:()=>c,uv:()=>o,vl:()=>q,wU:()=>b,yG:()=>y,yn:()=>$,z7:()=>S,zN:()=>d});var r=i(12738);let a=(0,r.Ps)`
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
`,l=(0,r.Ps)`
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
`,o=(0,r.Ps)`
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
`,x=(0,r.Ps)`
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
`;let h=(0,r.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,j=(0,r.Ps)`
  mutation editNewProducts($id: uuid!, $data: news_set_input!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
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
`,v=(0,r.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,f=(0,r.Ps)`
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
`,Z=(0,r.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,k=(0,r.Ps)`
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
`,N=(0,r.Ps)`
  mutation sendQInvoice($discounted_amount: numeric!, $quotation_id: uuid!) {
    sendInvoice(discounted_amount: $discounted_amount, quotation_id: $quotation_id) {
      message
    }
  }
`,q=(0,r.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,C=(0,r.Ps)`
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
`,D=(0,r.Ps)`
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
`,R=(0,r.Ps)`
  mutation addSeriveCenter($data: service_centers_insert_input!) {
    insert_service_centers_one(object: $data) {
      id
    }
  }
`,F=(0,r.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,A=(0,r.Ps)`
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
`,U=(0,r.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
    }
  }
`},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},80318:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>n,__esModule:()=>s,default:()=>d});var r=i(92334);let a=(0,r.createProxy)(String.raw`D:\projects\alpha-admin\src\app\[lang]\(dashboard)\admin\page.jsx`),{__esModule:s,$$typeof:n}=a;a.default;let d=(0,r.createProxy)(String.raw`D:\projects\alpha-admin\src\app\[lang]\(dashboard)\admin\page.jsx#default`)},38860:(e,t,i)=>{"use strict";i.d(t,{D:()=>u});var r=i(39942),a=i(4550),s=i(36759),n=i(93868),d=i(12576),l=i(23644),o=i(91053),c=i(3678).Nq?a.useLayoutEffect:a.useEffect;function u(e,t){var i=(0,o.x)(null==t?void 0:t.client);(0,d.Vp)(e,d.n_.Mutation);var u=a.useState({called:!1,loading:!1,client:i}),m=u[0],p=u[1],_=a.useRef({result:m,mutationId:0,isMounted:!0,client:i,mutation:e,options:t});c(function(){Object.assign(_.current,{client:i,options:t,mutation:e})});var x=a.useCallback(function(e){void 0===e&&(e={});var t=_.current,i=t.options,a=t.mutation,d=(0,r.pi)((0,r.pi)({},i),{mutation:a}),o=e.client||_.current.client;_.current.result.loading||d.ignoreResults||!_.current.isMounted||p(_.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:o});var c=++_.current.mutationId,u=(0,s.J)(d,e);return o.mutate(u).then(function(t){var i,r,a=t.data,s=t.errors,d=s&&s.length>0?new l.cA({graphQLErrors:s}):void 0,m=e.onError||(null===(i=_.current.options)||void 0===i?void 0:i.onError);if(d&&m&&m(d,u),c===_.current.mutationId&&!u.ignoreResults){var x={called:!0,loading:!1,data:a,error:d,client:o};_.current.isMounted&&!(0,n.D)(_.current.result,x)&&p(_.current.result=x)}var g=e.onCompleted||(null===(r=_.current.options)||void 0===r?void 0:r.onCompleted);return d||null==g||g(t.data,u),t}).catch(function(t){if(c===_.current.mutationId&&_.current.isMounted){var i,r={loading:!1,error:t,data:void 0,called:!0,client:o};(0,n.D)(_.current.result,r)||p(_.current.result=r)}var a=e.onError||(null===(i=_.current.options)||void 0===i?void 0:i.onError);if(a)return a(t,u),{data:void 0,errors:t};throw t})},[]),g=a.useCallback(function(){if(_.current.isMounted){var e={called:!1,loading:!1,client:_.current.client};Object.assign(_.current,{mutationId:0,result:e}),p(e)}},[]);return a.useEffect(function(){var e=_.current;return e.isMounted=!0,function(){e.isMounted=!1}},[]),[x,(0,r.pi)({reset:g},m)]}}};var t=require("../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[9357,6491,3302,3440,3198,7541,3133,965,8229,6514,5073,8894,6797,136,764,9599],()=>i(56366));module.exports=r})();
>>>>>>> 44527182998c4519db88e5929896761b783cb2ba
