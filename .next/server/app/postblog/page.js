(()=>{var e={};e.id=649,e.ids=[649],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},58489:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>r.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d}),t(49156),t(60737),t(35866);var l=t(23191),i=t(88716),n=t(37922),r=t.n(n),s=t(95231),o={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>s[e]);t.d(a,o);let d=["",{children:["postblog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,49156)),"A:\\Web D\\CC\\college-counsel\\src\\app\\postblog\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,60737)),"A:\\Web D\\CC\\college-counsel\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["A:\\Web D\\CC\\college-counsel\\src\\app\\postblog\\page.jsx"],p="/postblog/page",u={require:t,loadChunk:()=>Promise.resolve()},m=new l.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/postblog/page",pathname:"/postblog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},13456:(e,a,t)=>{Promise.resolve().then(t.bind(t,40710))},59167:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var l=t(10326);t(17577);let i=()=>l.jsx("div",{className:"loader"})},40710:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>B});var l=t(10326),i=t(17577),n=t(59167),r=t(61481),s=t(33198),o=t(78220),d=t(69883),c=t(91367),p=t(45353),u=t(41135),m=t(18782),h=t(54214),x=t(54641),g=t(59690),b=t(48467),f=t(60893),v=t(54117),y=t(91703),j=t(44647),w=t(36004);function Z(e){return(0,w.ZP)("MuiDialog",e)}let C=(0,j.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),S=i.createContext({});var k=t(7783),P=t(23743);let W=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],N=(0,y.ZP)(k.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,a)=>a.backdrop})({zIndex:-1}),D=e=>{let{classes:a,scroll:t,maxWidth:l,fullWidth:i,fullScreen:n}=e,r={root:["root"],container:["container",`scroll${(0,x.Z)(t)}`],paper:["paper",`paperScroll${(0,x.Z)(t)}`,`paperWidth${(0,x.Z)(String(l))}`,i&&"paperFullWidth",n&&"paperFullScreen"]};return(0,m.Z)(r,Z,a)},$=(0,y.ZP)(g.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,a)=>a.root})({"@media print":{position:"absolute !important"}}),M=(0,y.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,a)=>{let{ownerState:t}=e;return[a.container,a[`scroll${(0,x.Z)(t.scroll)}`]]}})(({ownerState:e})=>(0,p.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),_=(0,y.ZP)(f.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,a)=>{let{ownerState:t}=e;return[a.paper,a[`scrollPaper${(0,x.Z)(t.scroll)}`],a[`paperWidth${(0,x.Z)(String(t.maxWidth))}`],t.fullWidth&&a.paperFullWidth,t.fullScreen&&a.paperFullScreen]}})(({theme:e,ownerState:a})=>(0,p.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===a.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===a.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===a.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${C.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},a.maxWidth&&"xs"!==a.maxWidth&&{maxWidth:`${e.breakpoints.values[a.maxWidth]}${e.breakpoints.unit}`,[`&.${C.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[a.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${C.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),A=i.forwardRef(function(e,a){let t=(0,v.Z)({props:e,name:"MuiDialog"}),n=(0,P.Z)(),r={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":s,"aria-labelledby":o,BackdropComponent:d,BackdropProps:m,children:x,className:g,disableEscapeKeyDown:y=!1,fullScreen:j=!1,fullWidth:w=!1,maxWidth:Z="sm",onBackdropClick:C,onClick:k,onClose:A,open:F,PaperComponent:q=f.Z,PaperProps:B={},scroll:O="paper",TransitionComponent:R=b.Z,transitionDuration:E=r,TransitionProps:T}=t,z=(0,c.Z)(t,W),G=(0,p.Z)({},t,{disableEscapeKeyDown:y,fullScreen:j,fullWidth:w,maxWidth:Z,scroll:O}),H=D(G),X=i.useRef(),I=(0,h.Z)(o),V=i.useMemo(()=>({titleId:I}),[I]);return(0,l.jsx)($,(0,p.Z)({className:(0,u.Z)(H.root,g),closeAfterTransition:!0,components:{Backdrop:N},componentsProps:{backdrop:(0,p.Z)({transitionDuration:E,as:d},m)},disableEscapeKeyDown:y,onClose:A,open:F,ref:a,onClick:e=>{k&&k(e),X.current&&(X.current=null,C&&C(e),A&&A(e,"backdropClick"))},ownerState:G},z,{children:(0,l.jsx)(R,(0,p.Z)({appear:!0,in:F,timeout:E,role:"presentation"},T,{children:(0,l.jsx)(M,{className:(0,u.Z)(H.container),onMouseDown:e=>{X.current=e.target===e.currentTarget},ownerState:G,children:(0,l.jsx)(_,(0,p.Z)({as:q,elevation:24,role:"dialog","aria-describedby":s,"aria-labelledby":I},B,{className:(0,u.Z)(H.paper,B.className),ownerState:G,children:(0,l.jsx)(S.Provider,{value:V,children:x})}))})}))}))});var F=t(71728),q=t(44046);let B=()=>{let[e,a]=(0,i.useState)(!1),[t,c]=(0,i.useState)(!1),[p,u]=(0,i.useState)([]),[m,h]=(0,i.useState)({title:"",subtitle:"",content:"",subheading1:"",subheading2:"",subheading3:"",subheading4:"",subheading5:"",subcontent1:"",subcontent2:"",subcontent3:"",subcontent4:"",subcontent5:""}),[x,g]=(0,i.useState)({image1:null,image2:null,image3:null,image4:null,image5:null,image6:null}),[b,f]=(0,i.useState)({image1:null,image2:null,image3:null,image4:null,image5:null,image6:null}),[v,y]=(0,i.useState)({numberOfField:0}),j=(e,a)=>{let t=e.target.files[0];g({...x,[`image${a+1}`]:t});let l=new FileReader;l.onload=e=>{e.target&&"string"==typeof e.target.result&&f({...b,[`image${a+1}`]:e.target.result})},l.readAsDataURL(t)},w=e=>{let{name:a,value:t}=e.target;h({...m,[a]:t})},Z=async()=>{let t=new FormData;Object.entries(m).forEach(([e,a])=>{t.append(e,a)}),Object.entries(x).forEach(([e,a])=>{t.append(e,a)}),t.append("keyhead",v.keyhead),t.append("valuehead",v.valuehead);let l=v.fields.map(e=>e.key),i=v.fields.map(e=>e.value);t.append("fields[keys]",JSON.stringify(l)),t.append("fields[values]",JSON.stringify(i));try{if(e)return;a(!0);let l=await fetch("/api/blog/postBlog",{method:"POST",body:t});a(!1),l.ok?alert("Blog post successful"):alert("Failed to post blog")}catch(e){console.error("Error posting blog:",e)}},C=(e,a)=>{let t={...m};t[`subheading${e+1}`]=a,h(t)},S=(e,a)=>{let t={...m};t[`subcontent${e+1}`]=a,h(t)};return(0,l.jsxs)("div",{className:"w-screen mt-20 h-screen",children:[l.jsx(O,{open:t,setTableRow:e=>y({...v,numberOfField:e}),handleClose:()=>c(!1)}),l.jsx("h1",{className:"text-3xl",children:"Post blog"}),l.jsx("div",{className:" flex flex-col items-center",children:(0,l.jsxs)("div",{className:"w-[80vw] pb-10 items-center mt-5 flex flex-col gap-5",children:[l.jsx(r.Z,{anchorOrigin:{vertical:"top",horizontal:"left"},sx:{"& .MuiBadge-badge":{fontSize:"1.3rem",padding:1.5}},color:"primary",badgeContent:"Title",children:(0,l.jsxs)("div",{className:"flex w-[80vw] items-center gap-2 border rounded-lg bg-white p-4",children:[l.jsx(s.Z,{src:b.image6,sx:{width:100,height:100},children:l.jsx("input",{className:"h-full w-full opacity-0",onChange:e=>j(e,5),type:"file",name:"",id:""})}),(0,l.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,l.jsxs)("div",{className:" flex w-full gap-2",children:[l.jsx(o.Z,{className:"w-full",id:"outlined-basic",name:"title",onChange:w,label:"Title",variant:"outlined"}),l.jsx(o.Z,{className:"w-full",id:"outlined-basic",name:"subtitle",onChange:w,label:"Subtitle",variant:"outlined"})]}),l.jsx(o.Z,{id:"outlined-basic",multiline:!0,name:"content",onChange:w,label:"Discription",variant:"outlined"})]})]})}),p&&p.map((e,a)=>l.jsx(r.Z,{anchorOrigin:{vertical:"top",horizontal:"left"},sx:{"& .MuiBadge-badge":{fontSize:"1.3rem",padding:1.5}},color:"primary",badgeContent:"Subtille",children:(0,l.jsxs)("div",{className:"flex items-center gap-2 w-[80vw] border rounded-lg bg-white p-4",children:[l.jsx(s.Z,{src:b[`image${a+1}`],sx:{width:100,height:100},children:l.jsx("input",{className:"h-full w-full opacity-0",onChange:e=>j(e,a),type:"file",name:"",id:""})}),(0,l.jsxs)("div",{className:"flex w-full gap-2 flex-col",children:[l.jsx(o.Z,{id:"outlined-basic",onChange:e=>C(a,e.target.value),label:"Subtitle",value:m[`subheading${a+1}`],variant:"outlined"}),l.jsx(o.Z,{id:"outlined-basic",onChange:e=>S(a,e.target.value),multiline:!0,value:m[`subcontent${a+1}`],label:"Discription",variant:"outlined"})]})]})},a)),v.numberOfField&&l.jsx(R,{table:v,Submit:e=>y(e)}),p.length<5&&l.jsx(d.Z,{variant:"outlined",onClick:()=>{p.length>4||u(e=>[...e,1])},className:"h-12 w-12 text-xl",children:l.jsx(q.wEH,{})}),l.jsx(d.Z,{variant:"outlined",onClick:()=>c(!0),className:"h-12 w-12 text-xl",children:l.jsx(q.WHV,{})}),l.jsx(d.Z,{variant:"outlined",className:"submit w-full h-12 text-xl",onClick:Z,children:e?l.jsx(n.Z,{}):"Submit"})]})})]})},O=({open:e,handleClose:a,setTableRow:t})=>{let[n,r]=(0,i.useState)(0);return l.jsx(A,{open:e,onClose:a,children:(0,l.jsxs)(F.Z,{sx:{padding:2,display:"flex",flexDirection:"column",gap:2},children:[l.jsx("h1",{children:"How many rows you want"}),l.jsx(o.Z,{sx:{width:"80%"},id:"rows",type:"number",label:"No. of fields",variant:"outlined",value:n,onChange:e=>r(e.target.value),error:!n,helperText:!n&&"Required"}),l.jsx(d.Z,{onClick:()=>{t(n),a()},variant:"outlined",children:"Set"})]})})},R=({table:e,Submit:a})=>{let[t,n]=(0,i.useState)({keyhead:"",valuehead:"",fields:Array.from({length:e.numberOfField},()=>({key:"",value:""}))}),r=e=>{let{name:a,value:t}=e.target;n(e=>({...e,[a]:t}))},s=(e,a)=>{let{name:l,value:i}=a.target,r=t.fields.map((a,t)=>t===e?{...a,[l]:i}:a);n(e=>({...e,fields:r}))};return(0,l.jsxs)("div",{className:"bg-white p-3",children:[(0,l.jsxs)("div",{className:"flex mb-4",children:[l.jsx(o.Z,{id:"outlined-basic",name:"keyhead",label:"Field heading",variant:"outlined",value:t.keyhead,onChange:r}),l.jsx(o.Z,{id:"outlined-basic",className:"ml-3",name:"valuehead",label:"Value heading",variant:"outlined",value:t.valuehead,onChange:r})]}),t.fields.map((e,a)=>(0,l.jsxs)("div",{className:"flex mb-4",children:[l.jsx(o.Z,{id:"outlined-basic",name:"key",label:"Field",variant:"outlined",value:e.key,onChange:e=>s(a,e)}),l.jsx(o.Z,{id:"outlined-basic",className:"ml-3",name:"value",label:"Value",variant:"outlined",value:e.value,onChange:e=>s(a,e)})]},a)),l.jsx(d.Z,{variant:"contained",color:"primary",onClick:()=>{t.keyhead&&t.valuehead?a(t):alert("fill all the field")},children:"Submit"})]})}},49156:(e,a,t)=>{"use strict";t.r(a),t.d(a,{$$typeof:()=>r,__esModule:()=>n,default:()=>s});var l=t(68570);let i=(0,l.createProxy)(String.raw`A:\Web D\CC\college-counsel\src\app\postblog\page.jsx`),{__esModule:n,$$typeof:r}=i;i.default;let s=(0,l.createProxy)(String.raw`A:\Web D\CC\college-counsel\src\app\postblog\page.jsx#default`)},73881:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>i});var l=t(66621);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,l.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),l=a.X(0,[948,333,621,381,937,577,115,864],()=>t(58489));module.exports=l})();