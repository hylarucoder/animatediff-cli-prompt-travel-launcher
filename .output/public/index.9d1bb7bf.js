import{e as ae,m as ie,d as x,w as E,c as _,_ as j,P as p,J as W}from"./_getTag.cf4696dc.js";import{S as U,a as le}from"./index.de8e57d0.js";import{s as H,b as g,r as se,C as V,z as de,D as ce,A as z,h as F,B as ue,j as ge}from"./entry.978b97f1.js";import{A as fe,i as pe}from"./AntdIcon.22ef303b.js";import{R as X,L as Z}from"./LeftOutlined.b6276360.js";const me=e=>!isNaN(parseFloat(e))&&isFinite(e),he=me,ye=e=>{const{componentCls:o,colorBgContainer:t,colorBgBody:i,colorText:r}=e;return{[`${o}-sider-light`]:{background:t,[`${o}-sider-trigger`]:{color:r,background:t},[`${o}-sider-zero-width-trigger`]:{color:r,background:t,border:`1px solid ${i}`,borderInlineStart:0}}}},ve=ye,xe=e=>{const{antCls:o,componentCls:t,colorText:i,colorTextLightSolid:r,colorBgHeader:f,colorBgBody:d,colorBgTrigger:l,layoutHeaderHeight:c,layoutHeaderPaddingInline:h,layoutHeaderColor:y,layoutFooterPadding:n,layoutTriggerHeight:s,layoutZeroTriggerSize:v,motionDurationMid:S,motionDurationSlow:a,fontSize:m,borderRadius:u}=e;return{[t]:x(x({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:d,"&, *":{boxSizing:"border-box"},[`&${t}-has-sider`]:{flexDirection:"row",[`> ${t}, > ${t}-content`]:{width:0}},[`${t}-header, &${t}-footer`]:{flex:"0 0 auto"},[`${t}-header`]:{height:c,paddingInline:h,color:y,lineHeight:`${c}px`,background:f,[`${o}-menu`]:{lineHeight:"inherit"}},[`${t}-footer`]:{padding:n,color:i,fontSize:m,background:d},[`${t}-content`]:{flex:"auto",minHeight:0},[`${t}-sider`]:{position:"relative",minWidth:0,background:f,transition:`all ${S}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${o}-menu${o}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:s},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:s,color:r,lineHeight:`${s}px`,textAlign:"center",background:l,cursor:"pointer",transition:`all ${S}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:c,insetInlineEnd:-v,zIndex:1,width:v,height:v,color:r,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:f,borderStartStartRadius:0,borderStartEndRadius:u,borderEndEndRadius:u,borderEndStartRadius:0,cursor:"pointer",transition:`background ${a} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${a}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-v,borderStartStartRadius:u,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:u}}}}},ve(e)),{"&-rtl":{direction:"rtl"}})}},be=ae("Layout",e=>{const{colorText:o,controlHeightSM:t,controlHeight:i,controlHeightLG:r,marginXXS:f}=e,d=r*1.25,l=ie(e,{layoutHeaderHeight:i*2,layoutHeaderPaddingInline:d,layoutHeaderColor:o,layoutFooterPadding:`${t}px ${d}px`,layoutTriggerHeight:r+f*2,layoutZeroTriggerSize:r});return[xe(l)]},e=>{const{colorBgLayout:o}=e;return{colorBgHeader:"#001529",colorBgBody:o,colorBgTrigger:"#002140"}}),N=()=>({prefixCls:String,hasSider:{type:Boolean,default:void 0},tagName:String});function B(e){let{suffixCls:o,tagName:t,name:i}=e;return r=>H({compatConfig:{MODE:3},name:i,props:N(),setup(d,l){let{slots:c}=l;const{prefixCls:h}=E(o,d);return()=>{const y=x(x({},d),{prefixCls:h.value,tagName:t});return g(r,y,c)}}})}const I=H({compatConfig:{MODE:3},props:N(),setup(e,o){let{slots:t}=o;return()=>g(e.tagName,{class:e.prefixCls},t)}}),Se=H({compatConfig:{MODE:3},inheritAttrs:!1,props:N(),setup(e,o){let{slots:t,attrs:i}=o;const{prefixCls:r,direction:f}=E("",e),[d,l]=be(r),c=se([]);V(U,{addSider:n=>{c.value=[...c.value,n]},removeSider:n=>{c.value=c.value.filter(s=>s!==n)}});const y=de(()=>{const{prefixCls:n,hasSider:s}=e;return{[l.value]:!0,[`${n}`]:!0,[`${n}-has-sider`]:typeof s=="boolean"?s:c.value.length>0,[`${n}-rtl`]:f.value==="rtl"}});return()=>{const{tagName:n}=e;return d(g(n,x(x({},i),{class:[y.value,i.class]}),t))}}}),$e=B({suffixCls:"layout",tagName:"section",name:"ALayout"})(Se),T=B({suffixCls:"layout-header",tagName:"header",name:"ALayoutHeader"})(I),P=B({suffixCls:"layout-footer",tagName:"footer",name:"ALayoutFooter"})(I),C=B({suffixCls:"layout-content",tagName:"main",name:"ALayoutContent"})(I),A=$e;var Ce={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};const we=Ce;function G(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?Object(arguments[o]):{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),i.forEach(function(r){He(e,r,t[r])})}return e}function He(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var R=function(o,t){var i=G({},o,t.attrs);return g(fe,G({},i,{icon:we}),null)};R.displayName="BarsOutlined";R.inheritAttrs=!1;const Be=R,J={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1999.98px"},Le=()=>({prefixCls:String,collapsible:{type:Boolean,default:void 0},collapsed:{type:Boolean,default:void 0},defaultCollapsed:{type:Boolean,default:void 0},reverseArrow:{type:Boolean,default:void 0},zeroWidthTriggerStyle:{type:Object,default:void 0},trigger:p.any,width:p.oneOfType([p.number,p.string]),collapsedWidth:p.oneOfType([p.number,p.string]),breakpoint:p.oneOf(W("xs","sm","md","lg","xl","xxl","xxxl")),theme:p.oneOf(W("light","dark")).def("dark"),onBreakpoint:Function,onCollapse:Function}),ke=(()=>{let e=0;return function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,`${o}${e}`}})(),w=H({compatConfig:{MODE:3},name:"ALayoutSider",inheritAttrs:!1,props:pe(Le(),{collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80}),emits:["breakpoint","update:collapsed","collapse"],setup(e,o){let{emit:t,attrs:i,slots:r}=o;const{prefixCls:f}=E("layout-sider",e),d=ce(U,void 0),l=z(!!(e.collapsed!==void 0?e.collapsed:e.defaultCollapsed)),c=z(!1);F(()=>e.collapsed,()=>{l.value=!!e.collapsed}),V(le,l);const h=(a,m)=>{e.collapsed===void 0&&(l.value=a),t("update:collapsed",a),t("collapse",a,m)},y=z(a=>{c.value=a.matches,t("breakpoint",a.matches),l.value!==a.matches&&h(a.matches,"responsive")});let n;function s(a){return y.value(a)}const v=ke("ant-sider-");d&&d.addSider(v),ue(()=>{F(()=>e.breakpoint,()=>{try{n==null||n.removeEventListener("change",s)}catch{n==null||n.removeListener(s)}if(typeof window<"u"){const{matchMedia:a}=window;if(a&&e.breakpoint&&e.breakpoint in J){n=a(`(max-width: ${J[e.breakpoint]})`);try{n.addEventListener("change",s)}catch{n.addListener(s)}s(n)}}},{immediate:!0})}),ge(()=>{try{n==null||n.removeEventListener("change",s)}catch{n==null||n.removeListener(s)}d&&d.removeSider(v)});const S=()=>{h(!l.value,"clickTrigger")};return()=>{var a,m;const u=f.value,{collapsedWidth:D,width:K,reverseArrow:L,zeroWidthTriggerStyle:Q,trigger:$=(a=r.trigger)===null||a===void 0?void 0:a.call(r),collapsible:M,theme:Y}=e,k=l.value?D:K,b=he(k)?`${k}px`:String(k),O=parseFloat(String(D||0))===0?g("span",{onClick:S,class:_(`${u}-zero-width-trigger`,`${u}-zero-width-trigger-${L?"right":"left"}`),style:Q},[$||g(Be,null,null)]):null,q={expanded:L?g(X,null,null):g(Z,null,null),collapsed:L?g(Z,null,null):g(X,null,null)},ee=l.value?"collapsed":"expanded",te=q[ee],oe=$!==null?O||g("div",{class:`${u}-trigger`,onClick:S,style:{width:b}},[$||te]):null,ne=[i.style,{flex:`0 0 ${b}`,maxWidth:b,minWidth:b,width:b}],re=_(u,`${u}-${Y}`,{[`${u}-collapsed`]:!!l.value,[`${u}-has-trigger`]:M&&$!==null&&!O,[`${u}-below`]:!!c.value,[`${u}-zero-width`]:parseFloat(b)===0},i.class);return g("aside",j(j({},i),{},{class:re,style:ne}),[g("div",{class:`${u}-children`},[(m=r.default)===null||m===void 0?void 0:m.call(r)]),M||c.value&&O?oe:null])}}}),Ee=w,Ne=C,Ie=x(A,{Header:T,Footer:P,Content:C,Sider:w,install:e=>(e.component(A.name,A),e.component(T.name,T),e.component(P.name,P),e.component(w.name,w),e.component(C.name,C),e)});export{Ee as L,Ie as _,Ne as a};
