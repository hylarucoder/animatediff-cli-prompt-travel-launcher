import{d as j,e as k,N as D,i as _,a7 as N,a8 as O,a as w,a9 as A,aa as T,ab as L,w as F,k as K,_ as I,P as v,J as y,p as S,c as b}from"./_getTag.cf4696dc.js";import{O as B,C as E,f as H,D as J,z as i,s as C,b as x}from"./entry.978b97f1.js";function M(t){const o=Symbol("contextKey");return{useProvide:(s,r)=>{const a=B({});return E(o,a),H(()=>{j(a,s,r||{})}),a},useInject:()=>J(o,t)||{}}}const R=t=>{const{componentCls:o}=t;return{[o]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},V=R,q=t=>{const{componentCls:o}=t;return{[o]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${o}-space-item`]:{"&:empty":{display:"none"}}}}},G=k("Space",t=>[q(t),V(t)]);var Q="[object Map]",U="[object Set]",W=Object.prototype,X=W.hasOwnProperty;function h(t){if(t==null)return!0;if(D(t)&&(_(t)||typeof t=="string"||typeof t.splice=="function"||N(t)||O(t)||w(t)))return!t.length;var o=A(t);if(o==Q||o==U)return!t.size;if(T(t))return!L(t).length;for(var e in t)if(X.call(t,e))return!1;return!0}const Y=()=>({compactSize:String,compactDirection:v.oneOf(y("horizontal","vertical")).def("horizontal"),isFirstItem:S(),isLastItem:S()}),l=M(null),at=(t,o)=>{const e=l.useInject(),n=i(()=>{if(!e||h(e))return"";const{compactDirection:s,isFirstItem:r,isLastItem:a}=e,c=s==="vertical"?"-vertical-":"-";return b({[`${t.value}-compact${c}item`]:!0,[`${t.value}-compact${c}first-item`]:r,[`${t.value}-compact${c}last-item`]:a,[`${t.value}-compact${c}item-rtl`]:o.value==="rtl"})});return{compactSize:i(()=>e==null?void 0:e.compactSize),compactDirection:i(()=>e==null?void 0:e.compactDirection),compactItemClassnames:n}},nt=C({name:"NoCompactStyle",setup(t,o){let{slots:e}=o;return l.useProvide(null),()=>{var n;return(n=e.default)===null||n===void 0?void 0:n.call(e)}}}),Z=()=>({prefixCls:String,size:{type:String},direction:v.oneOf(y("horizontal","vertical")).def("horizontal"),align:v.oneOf(y("start","end","center","baseline")),block:{type:Boolean,default:void 0}}),tt=C({name:"CompactItem",props:Y(),setup(t,o){let{slots:e}=o;return l.useProvide(t),()=>{var n;return(n=e.default)===null||n===void 0?void 0:n.call(e)}}}),st=C({name:"ASpaceCompact",inheritAttrs:!1,props:Z(),setup(t,o){let{attrs:e,slots:n}=o;const{prefixCls:s,direction:r}=F("space-compact",t),a=l.useInject(),[c,$]=G(s),P=i(()=>b(s.value,$.value,{[`${s.value}-rtl`]:r.value==="rtl",[`${s.value}-block`]:t.block,[`${s.value}-vertical`]:t.direction==="vertical"}));return()=>{var m;const p=K(((m=n.default)===null||m===void 0?void 0:m.call(n))||[]);return p.length===0?null:c(x("div",I(I({},e),{},{class:[P.value,e.class]}),[p.map((u,d)=>{var f;const z=u&&u.key||`${s.value}-item-${d}`,g=!a||h(a);return x(tt,{key:z,compactSize:(f=t.size)!==null&&f!==void 0?f:"middle",compactDirection:t.direction,isFirstItem:d===0&&(g||(a==null?void 0:a.isFirstItem)),isLastItem:d===p.length-1&&(g||(a==null?void 0:a.isLastItem))},{default:()=>[u]})})]))}}});export{st as C,nt as N,G as a,M as c,at as u};
