import{aj as Pe,d as p,k as it,_ as E,P as ye,o as De,q as at,c as he,ak as Ne,A as rt,a2 as wt,h as Mt,e as Kt,m as je,T as Ve,x as We,r as Ot,Y as Pt,w as Tt}from"./_getTag.cf4696dc.js";import{b as f,D as ae,C as de,z as m,v as Ge,s as Z,M as Ye,A as H,j as Ie,h as Y,m as st,r as L,T as kt,H as Et,K as _t,F as _e,B as Bt,f as Te,ab as Dt,x as be}from"./entry.978b97f1.js";import{d as Se}from"./devWarning.642abf93.js";import{s as ut,c as At,d as zt,T as Rt}from"./firstNotUndefined.9a4a1b8d.js";import{O as fe,i as Xe}from"./slide.031977cf.js";import{c as Ae}from"./vnode.1e6e4dd3.js";import{T as Ht}from"./index.50fb9c59.js";import{K as Ft}from"./LeftOutlined.b6276360.js";import{A as Lt,w as ke,g as Nt}from"./AntdIcon.22ef303b.js";import{g as jt,c as Vt}from"./collapseMotion.083a49ed.js";import{i as Wt}from"./zoom.e2a25d90.js";function Gt(){}function Yt(e,n,t,o){for(var l=e.length,a=t+(o?1:-1);o?a--:++a<l;)if(n(e[a],a,e))return a;return-1}function Xt(e){return e!==e}function qt(e,n,t){for(var o=t-1,l=e.length;++o<l;)if(e[o]===n)return o;return-1}function Ut(e,n,t){return n===n?qt(e,n,t):Yt(e,Xt,t)}function Zt(e,n){var t=e==null?0:e.length;return!!t&&Ut(e,n,0)>-1}function Jt(e,n,t){for(var o=-1,l=e==null?0:e.length;++o<l;)if(t(n,e[o]))return!0;return!1}var Qt=1/0,en=Pe&&1/ut(new Pe([,-0]))[1]==Qt?function(e){return new Pe(e)}:Gt;const tn=en;var nn=200;function on(e,n,t){var o=-1,l=Zt,a=e.length,d=!0,r=[],s=r;if(t)d=!1,l=Jt;else if(a>=nn){var v=n?null:tn(e);if(v)return ut(v);d=!1,l=zt,s=new At}else s=n?[]:r;e:for(;++o<a;){var c=e[o],i=n?n(c):c;if(c=t||c!==0?c:0,d&&i===i){for(var $=s.length;$--;)if(s[$]===i)continue e;n&&s.push(i),r.push(c)}else l(s,i,t)||(s!==r&&s.push(i),r.push(c))}return r}function Ee(e){return e&&e.length?on(e):[]}var ln={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const an=ln;function qe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),o.forEach(function(l){rn(e,l,t[l])})}return e}function rn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ze=function(n,t){var o=qe({},n,t.attrs);return f(Lt,qe({},o,{icon:an}),null)};ze.displayName="EllipsisOutlined";ze.inheritAttrs=!1;const sn=ze,ct=Symbol("OverrideContextKey"),dt=()=>ae(ct,void 0),Xn=e=>{var n,t,o;const{prefixCls:l,mode:a,selectable:d,validator:r,onClick:s,expandIcon:v}=dt()||{};de(ct,{prefixCls:m(()=>{var c,i;return(i=(c=e.prefixCls)===null||c===void 0?void 0:c.value)!==null&&i!==void 0?i:l==null?void 0:l.value}),mode:m(()=>{var c,i;return(i=(c=e.mode)===null||c===void 0?void 0:c.value)!==null&&i!==void 0?i:a==null?void 0:a.value}),selectable:m(()=>{var c,i;return(i=(c=e.selectable)===null||c===void 0?void 0:c.value)!==null&&i!==void 0?i:d==null?void 0:d.value}),validator:(n=e.validator)!==null&&n!==void 0?n:r,onClick:(t=e.onClick)!==null&&t!==void 0?t:s,expandIcon:(o=e.expandIcon)!==null&&o!==void 0?o:v==null?void 0:v.value})};function un(e,n,t,o){let l=t?t.call(o,e,n):void 0;if(l!==void 0)return!!l;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;const a=Object.keys(e),d=Object.keys(n);if(a.length!==d.length)return!1;const r=Object.prototype.hasOwnProperty.bind(n);for(let s=0;s<a.length;s++){const v=a[s];if(!r(v))return!1;const c=e[v],i=n[v];if(l=t?t.call(o,c,i,v):void 0,l===!1||l===void 0&&c!==i)return!1}return!0}function ve(e,n){return un(Ge(e),Ge(n))}const mt=Symbol("menuContextKey"),vt=e=>{de(mt,e)},J=()=>ae(mt),ft=Symbol("ForceRenderKey"),cn=e=>{de(ft,e)},pt=()=>ae(ft,!1),gt=Symbol("menuFirstLevelContextKey"),bt=e=>{de(gt,e)},dn=()=>ae(gt,!0),Ce=Z({compatConfig:{MODE:3},name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0}},setup(e,n){let{slots:t}=n;const o=J(),l=p({},o);return e.mode!==void 0&&(l.mode=Ye(e,"mode")),e.overflowDisabled!==void 0&&(l.overflowDisabled=Ye(e,"overflowDisabled")),vt(l),()=>{var a;return(a=t.default)===null||a===void 0?void 0:a.call(t)}}}),mn=vt,vn=Symbol("siderCollapsed"),qn=Symbol("siderHookProvider"),$e="$$__vc-menu-more__key",$t=Symbol("KeyPathContext"),Re=()=>ae($t,{parentEventKeys:m(()=>[]),parentKeys:m(()=>[]),parentInfo:{}}),fn=(e,n,t)=>{const{parentEventKeys:o,parentKeys:l}=Re(),a=m(()=>[...o.value,e]),d=m(()=>[...l.value,n]);return de($t,{parentEventKeys:a,parentKeys:d,parentInfo:t}),d},yt=Symbol("measure"),Ue=Z({compatConfig:{MODE:3},setup(e,n){let{slots:t}=n;return de(yt,!0),()=>{var o;return(o=t.default)===null||o===void 0?void 0:o.call(t)}}}),He=()=>ae(yt,!1),pn=fn;function ht(e){const{mode:n,rtl:t,inlineIndent:o}=J();return m(()=>n.value!=="inline"?null:t.value?{paddingRight:`${e.value*o.value}px`}:{paddingLeft:`${e.value*o.value}px`})}let gn=0;const bn=()=>({id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:ye.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function,originItemValue:De()}),pe=Z({compatConfig:{MODE:3},name:"AMenuItem",inheritAttrs:!1,props:bn(),slots:Object,setup(e,n){let{slots:t,emit:o,attrs:l}=n;const a=st(),d=He(),r=typeof a.vnode.key=="symbol"?String(a.vnode.key):a.vnode.key;Se(typeof a.vnode.key!="symbol","MenuItem",`MenuItem \`:key="${String(r)}"\` not support Symbol type`);const s=`menu_item_${++gn}_$$_${r}`,{parentEventKeys:v,parentKeys:c}=Re(),{prefixCls:i,activeKeys:$,disabled:y,changeActiveKeys:g,rtl:x,inlineCollapsed:w,siderCollapsed:P,onItemClick:M,selectedKeys:N,registerMenuInfo:q,unRegisterMenuInfo:I}=J(),K=dn(),z=H(!1),A=m(()=>[...c.value,r]);q(s,{eventKey:s,key:r,parentEventKeys:v,parentKeys:c,isLeaf:!0}),Ie(()=>{I(s)}),Y($,()=>{z.value=!!$.value.find(h=>h===r)},{immediate:!0});const O=m(()=>y.value||e.disabled),W=m(()=>N.value.includes(r)),G=m(()=>{const h=`${i.value}-item`;return{[`${h}`]:!0,[`${h}-danger`]:e.danger,[`${h}-active`]:z.value,[`${h}-selected`]:W.value,[`${h}-disabled`]:O.value}}),X=h=>({key:r,eventKey:s,keyPath:A.value,eventKeyPath:[...v.value,s],domEvent:h,item:p(p({},e),l)}),re=h=>{if(O.value)return;const _=X(h);o("click",h),M(_)},se=h=>{O.value||(g(A.value),o("mouseenter",h))},Q=h=>{O.value||(g([]),o("mouseleave",h))},le=h=>{if(o("keydown",h),h.which===Ft.ENTER){const _=X(h);o("click",h),M(_)}},ue=h=>{g(A.value),o("focus",h)},j=(h,_)=>{const F=f("span",{class:`${i.value}-title-content`},[_]);return(!h||at(_)&&_.type==="span")&&_&&w.value&&K&&typeof _=="string"?f("div",{class:`${i.value}-inline-collapsed-noicon`},[_.charAt(0)]):F},me=ht(m(()=>A.value.length));return()=>{var h,_,F,U,ee;if(d)return null;const u=(h=e.title)!==null&&h!==void 0?h:(_=t.title)===null||_===void 0?void 0:_.call(t),b=it((F=t.default)===null||F===void 0?void 0:F.call(t)),C=b.length;let T=u;typeof u>"u"?T=K&&C?b:"":u===!1&&(T="");const B={title:T};!P.value&&!w.value&&(B.title=null,B.open=!1);const R={};e.role==="option"&&(R["aria-selected"]=W.value);const k=(U=e.icon)!==null&&U!==void 0?U:(ee=t.icon)===null||ee===void 0?void 0:ee.call(t,e);return f(Ht,E(E({},B),{},{placement:x.value?"left":"right",overlayClassName:`${i.value}-inline-collapsed-tooltip`}),{default:()=>[f(fe.Item,E(E(E({component:"li"},l),{},{id:e.id,style:p(p({},l.style||{}),me.value),class:[G.value,{[`${l.class}`]:!!l.class,[`${i.value}-item-only-child`]:(k?C+1:C)===1}],role:e.role||"menuitem",tabindex:e.disabled?null:-1,"data-menu-id":r,"aria-disabled":e.disabled},R),{},{onMouseenter:se,onMouseleave:Q,onClick:re,onKeydown:le,onFocus:ue,title:typeof u=="string"?u:void 0}),{default:()=>[Ae(typeof k=="function"?k(e.originItemValue):k,{class:`${i.value}-item-icon`},!1),j(k,b)]})]})}}}),oe={adjustX:1,adjustY:1},$n={topLeft:{points:["bl","tl"],overflow:oe,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:oe,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:oe,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:oe,offset:[4,0]}},yn={topLeft:{points:["bl","tl"],overflow:oe,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:oe,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:oe,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:oe,offset:[4,0]}},hn={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"},Ze=Z({compatConfig:{MODE:3},name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:Object,emits:["visibleChange"],setup(e,n){let{slots:t,emit:o}=n;const l=H(!1),{getPopupContainer:a,rtl:d,subMenuOpenDelay:r,subMenuCloseDelay:s,builtinPlacements:v,triggerSubMenuAction:c,forceSubMenuRender:i,motion:$,defaultMotions:y,rootClassName:g}=J(),x=pt(),w=m(()=>d.value?p(p({},yn),v.value):p(p({},$n),v.value)),P=m(()=>hn[e.mode]),M=H();Y(()=>e.visible,I=>{ke.cancel(M.value),M.value=ke(()=>{l.value=I})},{immediate:!0}),Ie(()=>{ke.cancel(M.value)});const N=I=>{o("visibleChange",I)},q=m(()=>{var I,K;const z=$.value||((I=y.value)===null||I===void 0?void 0:I[e.mode])||((K=y.value)===null||K===void 0?void 0:K.other),A=typeof z=="function"?z():z;return A?Nt(A.name,{css:!0}):void 0});return()=>{const{prefixCls:I,popupClassName:K,mode:z,popupOffset:A,disabled:V}=e;return f(Rt,{prefixCls:I,popupClassName:he(`${I}-popup`,{[`${I}-rtl`]:d.value},K,g.value),stretch:z==="horizontal"?"minWidth":null,getPopupContainer:a.value,builtinPlacements:w.value,popupPlacement:P.value,popupVisible:l.value,popupAlign:A&&{offset:A},action:V?[]:[c.value],mouseEnterDelay:r.value,mouseLeaveDelay:s.value,onPopupVisibleChange:N,forceRender:x||i.value,popupAnimation:q.value},{popup:t.popup,default:t.default})}}}),It=(e,n)=>{let{slots:t,attrs:o}=n;var l;const{prefixCls:a,mode:d}=J();return f("ul",E(E({},o),{},{class:he(a.value,`${a.value}-sub`,`${a.value}-${d.value==="inline"?"inline":"vertical"}`),"data-menu-list":!0}),[(l=t.default)===null||l===void 0?void 0:l.call(t)])};It.displayName="SubMenuList";const St=It,In=Z({compatConfig:{MODE:3},name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup(e,n){let{slots:t}=n;const o=m(()=>"inline"),{motion:l,mode:a,defaultMotions:d}=J(),r=m(()=>a.value===o.value),s=L(!r.value),v=m(()=>r.value?e.open:!1);Y(a,()=>{r.value&&(s.value=!1)},{flush:"post"});const c=m(()=>{var i,$;const y=l.value||((i=d.value)===null||i===void 0?void 0:i[o.value])||(($=d.value)===null||$===void 0?void 0:$.other),g=typeof y=="function"?y():y;return p(p({},g),{appear:e.keyPath.length<=1})});return()=>{var i;return s.value?null:f(Ce,{mode:o.value},{default:()=>[f(kt,c.value,{default:()=>[Et(f(St,{id:e.id},{default:()=>[(i=t.default)===null||i===void 0?void 0:i.call(t)]}),[[_t,v.value]])]})]})}}});let Je=0;const Sn=()=>({icon:ye.any,title:ye.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,theme:String,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function,originItemValue:De()}),ce=Z({compatConfig:{MODE:3},name:"ASubMenu",inheritAttrs:!1,props:Sn(),slots:Object,setup(e,n){let{slots:t,attrs:o,emit:l}=n;var a,d;bt(!1);const r=He(),s=st(),v=typeof s.vnode.key=="symbol"?String(s.vnode.key):s.vnode.key;Se(typeof s.vnode.key!="symbol","SubMenu",`SubMenu \`:key="${String(v)}"\` not support Symbol type`);const c=Ne(v)?v:`sub_menu_${++Je}_$$_not_set_key`,i=(a=e.eventKey)!==null&&a!==void 0?a:Ne(v)?`sub_menu_${++Je}_$$_${v}`:c,{parentEventKeys:$,parentInfo:y,parentKeys:g}=Re(),x=m(()=>[...g.value,c]),w=H([]),P={eventKey:i,key:c,parentEventKeys:$,childrenEventKeys:w,parentKeys:g};(d=y.childrenEventKeys)===null||d===void 0||d.value.push(i),Ie(()=>{var S;y.childrenEventKeys&&(y.childrenEventKeys.value=(S=y.childrenEventKeys)===null||S===void 0?void 0:S.value.filter(D=>D!=i))}),pn(i,c,P);const{prefixCls:M,activeKeys:N,disabled:q,changeActiveKeys:I,mode:K,inlineCollapsed:z,openKeys:A,overflowDisabled:V,onOpenChange:O,registerMenuInfo:W,unRegisterMenuInfo:G,selectedSubMenuKeys:X,expandIcon:re,theme:se}=J(),Q=v!=null,le=!r&&(pt()||!Q);cn(le),(r&&Q||!r&&!Q||le)&&(W(i,P),Ie(()=>{G(i)}));const ue=m(()=>`${M.value}-submenu`),j=m(()=>q.value||e.disabled),me=H(),h=H(),_=m(()=>A.value.includes(c)),F=m(()=>!V.value&&_.value),U=m(()=>X.value.includes(c)),ee=H(!1);Y(N,()=>{ee.value=!!N.value.find(S=>S===c)},{immediate:!0});const u=S=>{j.value||(l("titleClick",S,c),K.value==="inline"&&O(c,!_.value))},b=S=>{j.value||(I(x.value),l("mouseenter",S))},C=S=>{j.value||(I([]),l("mouseleave",S))},T=ht(m(()=>x.value.length)),B=S=>{K.value!=="inline"&&O(c,S)},R=()=>{I(x.value)},k=i&&`${i}-popup`,te=m(()=>he(M.value,`${M.value}-${e.theme||se.value}`,e.popupClassName)),ge=(S,D)=>{if(!D)return z.value&&!g.value.length&&S&&typeof S=="string"?f("div",{class:`${M.value}-inline-collapsed-noicon`},[S.charAt(0)]):f("span",{class:`${M.value}-title-content`},[S]);const ne=at(S)&&S.type==="span";return f(_e,null,[Ae(typeof D=="function"?D(e.originItemValue):D,{class:`${M.value}-item-icon`},!1),ne?S:f("span",{class:`${M.value}-title-content`},[S])])},Me=m(()=>K.value!=="inline"&&x.value.length>1?"vertical":K.value),Ct=m(()=>K.value==="horizontal"?"vertical":K.value),xt=m(()=>Me.value==="horizontal"?"vertical":Me.value),Fe=()=>{var S,D;const ne=ue.value,Ke=(S=e.icon)!==null&&S!==void 0?S:(D=t.icon)===null||D===void 0?void 0:D.call(t,e),Le=e.expandIcon||t.expandIcon||re.value,Oe=ge(rt(t,e,"title"),Ke);return f("div",{style:T.value,class:`${ne}-title`,tabindex:j.value?null:-1,ref:me,title:typeof Oe=="string"?Oe:null,"data-menu-id":c,"aria-expanded":F.value,"aria-haspopup":!0,"aria-controls":k,"aria-disabled":j.value,onClick:u,onFocus:R},[Oe,K.value!=="horizontal"&&Le?Le(p(p({},e),{isOpen:F.value})):f("i",{class:`${ne}-arrow`},null)])};return()=>{var S;if(r)return Q?(S=t.default)===null||S===void 0?void 0:S.call(t):null;const D=ue.value;let ne=()=>null;if(!V.value&&K.value!=="inline"){const Ke=K.value==="horizontal"?[0,8]:[10,0];ne=()=>f(Ze,{mode:Me.value,prefixCls:D,visible:!e.internalPopupClose&&F.value,popupClassName:te.value,popupOffset:e.popupOffset||Ke,disabled:j.value,onVisibleChange:B},{default:()=>[Fe()],popup:()=>f(Ce,{mode:xt.value},{default:()=>[f(St,{id:k,ref:h},{default:t.default})]})})}else ne=()=>f(Ze,null,{default:Fe});return f(Ce,{mode:Ct.value},{default:()=>[f(fe.Item,E(E({component:"li"},o),{},{role:"none",class:he(D,`${D}-${K.value}`,o.class,{[`${D}-open`]:F.value,[`${D}-active`]:ee.value,[`${D}-selected`]:U.value,[`${D}-disabled`]:j.value}),onMouseenter:b,onMouseleave:C,"data-submenu-id":c}),{default:()=>f(_e,null,[ne(),!V.value&&f(In,{id:k,open:F.value,keyPath:x.value},{default:t.default})])})]})}}}),Cn=()=>({title:ye.any,originItemValue:De()}),xe=Z({compatConfig:{MODE:3},name:"AMenuItemGroup",inheritAttrs:!1,props:Cn(),slots:Object,setup(e,n){let{slots:t,attrs:o}=n;const{prefixCls:l}=J(),a=m(()=>`${l.value}-item-group`),d=He();return()=>{var r,s;return d?(r=t.default)===null||r===void 0?void 0:r.call(t):f("li",E(E({},o),{},{onClick:v=>v.stopPropagation(),class:a.value}),[f("div",{title:typeof e.title=="string"?e.title:void 0,class:`${a.value}-title`},[rt(t,e,"title")]),f("ul",{class:`${a.value}-list`},[(s=t.default)===null||s===void 0?void 0:s.call(t)])])}}}),xn=()=>({prefixCls:String,dashed:Boolean}),we=Z({compatConfig:{MODE:3},name:"AMenuDivider",props:xn(),setup(e){const{prefixCls:n}=J(),t=m(()=>({[`${n.value}-item-divider`]:!0,[`${n.value}-item-divider-dashed`]:!!e.dashed}));return()=>f("li",{class:t.value},null)}});var wn=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(t[o[l]]=e[o[l]]);return t};function Be(e,n,t){return(e||[]).map((o,l)=>{if(o&&typeof o=="object"){const a=o,{label:d,children:r,key:s,type:v}=a,c=wn(a,["label","children","key","type"]),i=s??`tmp-${l}`,$=t?t.parentKeys.slice():[],y=[],g={eventKey:i,key:i,parentEventKeys:L($),parentKeys:L($),childrenEventKeys:L(y),isLeaf:!1};if(r||v==="group"){if(v==="group"){const w=Be(r,n,t);return f(xe,E(E({key:i},c),{},{title:d,originItemValue:o}),{default:()=>[w]})}n.set(i,g),t&&t.childrenEventKeys.push(i);const x=Be(r,n,{childrenEventKeys:y,parentKeys:[].concat($,i)});return f(ce,E(E({key:i},c),{},{title:d,originItemValue:o}),{default:()=>[x]})}return v==="divider"?f(we,E({key:i},c),null):(g.isLeaf=!0,n.set(i,g),f(pe,E(E({key:i},c),{},{originItemValue:o}),{default:()=>[d]}))}return null}).filter(o=>o)}function Mn(e){const n=H([]),t=H(!1),o=H(new Map);return Y(()=>e.items,()=>{const l=new Map;t.value=!1,e.items?(t.value=!0,n.value=Be(e.items,l)):n.value=void 0,o.value=l},{immediate:!0,deep:!0}),{itemsNodes:n,store:o,hasItmes:t}}const Kn=e=>{const{componentCls:n,motionDurationSlow:t,menuHorizontalHeight:o,colorSplit:l,lineWidth:a,lineType:d,menuItemPaddingInline:r}=e;return{[`${n}-horizontal`]:{lineHeight:`${o}px`,border:0,borderBottom:`${a}px ${d} ${l}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${n}-item, ${n}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:r},[`> ${n}-item:hover,
        > ${n}-item-active,
        > ${n}-submenu ${n}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${n}-item, ${n}-submenu-title`]:{transition:[`border-color ${t}`,`background ${t}`].join(",")},[`${n}-submenu-arrow`]:{display:"none"}}}},On=Kn,Pn=e=>{let{componentCls:n,menuArrowOffset:t}=e;return{[`${n}-rtl`]:{direction:"rtl"},[`${n}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${n}-rtl${n}-vertical,
    ${n}-submenu-rtl ${n}-vertical`]:{[`${n}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(-${t})`},"&::after":{transform:`rotate(45deg) translateY(${t})`}}}}},Tn=Pn,Qe=e=>p({},wt(e)),kn=(e,n)=>{const{componentCls:t,colorItemText:o,colorItemTextSelected:l,colorGroupTitle:a,colorItemBg:d,colorSubItemBg:r,colorItemBgSelected:s,colorActiveBarHeight:v,colorActiveBarWidth:c,colorActiveBarBorderSize:i,motionDurationSlow:$,motionEaseInOut:y,motionEaseOut:g,menuItemPaddingInline:x,motionDurationMid:w,colorItemTextHover:P,lineType:M,colorSplit:N,colorItemTextDisabled:q,colorDangerItemText:I,colorDangerItemTextHover:K,colorDangerItemTextSelected:z,colorDangerItemBgActive:A,colorDangerItemBgSelected:V,colorItemBgHover:O,menuSubMenuBg:W,colorItemTextSelectedHorizontal:G,colorItemBgSelectedHorizontal:X}=e;return{[`${t}-${n}`]:{color:o,background:d,[`&${t}-root:focus-visible`]:p({},Qe(e)),[`${t}-item-group-title`]:{color:a},[`${t}-submenu-selected`]:{[`> ${t}-submenu-title`]:{color:l}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{color:`${q} !important`},[`${t}-item:hover, ${t}-submenu-title:hover`]:{[`&:not(${t}-item-selected):not(${t}-submenu-selected)`]:{color:P}},[`&:not(${t}-horizontal)`]:{[`${t}-item:not(${t}-item-selected)`]:{"&:hover":{backgroundColor:O},"&:active":{backgroundColor:s}},[`${t}-submenu-title`]:{"&:hover":{backgroundColor:O},"&:active":{backgroundColor:s}}},[`${t}-item-danger`]:{color:I,[`&${t}-item:hover`]:{[`&:not(${t}-item-selected):not(${t}-submenu-selected)`]:{color:K}},[`&${t}-item:active`]:{background:A}},[`${t}-item a`]:{"&, &:hover":{color:"inherit"}},[`${t}-item-selected`]:{color:l,[`&${t}-item-danger`]:{color:z},"a, a:hover":{color:"inherit"}},[`& ${t}-item-selected`]:{backgroundColor:s,[`&${t}-item-danger`]:{backgroundColor:V}},[`${t}-item, ${t}-submenu-title`]:{[`&:not(${t}-item-disabled):focus-visible`]:p({},Qe(e))},[`&${t}-submenu > ${t}`]:{backgroundColor:W},[`&${t}-popup > ${t}`]:{backgroundColor:d},[`&${t}-horizontal`]:p(p({},n==="dark"?{borderBottom:0}:{}),{[`> ${t}-item, > ${t}-submenu`]:{top:i,marginTop:-i,marginBottom:0,borderRadius:0,"&::after":{position:"absolute",insetInline:x,bottom:0,borderBottom:`${v}px solid transparent`,transition:`border-color ${$} ${y}`,content:'""'},"&:hover, &-active, &-open":{"&::after":{borderBottomWidth:v,borderBottomColor:G}},"&-selected":{color:G,backgroundColor:X,"&::after":{borderBottomWidth:v,borderBottomColor:G}}}}),[`&${t}-root`]:{[`&${t}-inline, &${t}-vertical`]:{borderInlineEnd:`${i}px ${M} ${N}`}},[`&${t}-inline`]:{[`${t}-sub${t}-inline`]:{background:r},[`${t}-item, ${t}-submenu-title`]:i&&c?{width:`calc(100% + ${i}px)`}:{},[`${t}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${c}px solid ${l}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${w} ${g}`,`opacity ${w} ${g}`].join(","),content:'""'},[`&${t}-item-danger`]:{"&::after":{borderInlineEndColor:z}}},[`${t}-selected, ${t}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${w} ${y}`,`opacity ${w} ${y}`].join(",")}}}}}},et=kn,tt=e=>{const{componentCls:n,menuItemHeight:t,itemMarginInline:o,padding:l,menuArrowSize:a,marginXS:d,marginXXS:r}=e,s=l+a+d;return{[`${n}-item`]:{position:"relative"},[`${n}-item, ${n}-submenu-title`]:{height:t,lineHeight:`${t}px`,paddingInline:l,overflow:"hidden",textOverflow:"ellipsis",marginInline:o,marginBlock:r,width:`calc(100% - ${o*2}px)`},[`${n}-submenu`]:{paddingBottom:.02},[`> ${n}-item,
            > ${n}-submenu > ${n}-submenu-title`]:{height:t,lineHeight:`${t}px`},[`${n}-item-group-list ${n}-submenu-title,
            ${n}-submenu-title`]:{paddingInlineEnd:s}}},En=e=>{const{componentCls:n,iconCls:t,menuItemHeight:o,colorTextLightSolid:l,dropdownWidth:a,controlHeightLG:d,motionDurationMid:r,motionEaseOut:s,paddingXL:v,fontSizeSM:c,fontSizeLG:i,motionDurationSlow:$,paddingXS:y,boxShadowSecondary:g}=e,x={height:o,lineHeight:`${o}px`,listStylePosition:"inside",listStyleType:"disc"};return[{[n]:{"&-inline, &-vertical":p({[`&${n}-root`]:{boxShadow:"none"}},tt(e))},[`${n}-submenu-popup`]:{[`${n}-vertical`]:p(p({},tt(e)),{boxShadow:g})}},{[`${n}-submenu-popup ${n}-vertical${n}-sub`]:{minWidth:a,maxHeight:`calc(100vh - ${d*2.5}px)`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${n}-inline`]:{width:"100%",[`&${n}-root`]:{[`${n}-item, ${n}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${$}`,`background ${$}`,`padding ${r} ${s}`].join(","),[`> ${n}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${n}-sub${n}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${n}-submenu > ${n}-submenu-title`]:x,[`& ${n}-item-group-title`]:{paddingInlineStart:v}},[`${n}-item`]:x}},{[`${n}-inline-collapsed`]:{width:o*2,[`&${n}-root`]:{[`${n}-item, ${n}-submenu ${n}-submenu-title`]:{[`> ${n}-inline-collapsed-noicon`]:{fontSize:i,textAlign:"center"}}},[`> ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-submenu > ${n}-submenu-title,
          > ${n}-submenu > ${n}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${c}px)`,textOverflow:"clip",[`
            ${n}-submenu-arrow,
            ${n}-submenu-expand-icon
          `]:{opacity:0},[`${n}-item-icon, ${t}`]:{margin:0,fontSize:i,lineHeight:`${o}px`,"+ span":{display:"inline-block",opacity:0}}},[`${n}-item-icon, ${t}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${n}-item-icon, ${t}`]:{display:"none"},"a, a:hover":{color:l}},[`${n}-item-group-title`]:p(p({},Mt),{paddingInline:y})}}]},_n=En,nt=e=>{const{componentCls:n,fontSize:t,motionDurationSlow:o,motionDurationMid:l,motionEaseInOut:a,motionEaseOut:d,iconCls:r,controlHeightSM:s}=e;return{[`${n}-item, ${n}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${o}`,`background ${o}`,`padding ${o} ${a}`].join(","),[`${n}-item-icon, ${r}`]:{minWidth:t,fontSize:t,transition:[`font-size ${l} ${d}`,`margin ${o} ${a}`,`color ${o}`].join(","),"+ span":{marginInlineStart:s-t,opacity:1,transition:[`opacity ${o} ${a}`,`margin ${o}`,`color ${o}`].join(",")}},[`${n}-item-icon`]:p({},Pt()),[`&${n}-item-only-child`]:{[`> ${r}, > ${n}-item-icon`]:{marginInlineEnd:0}}},[`${n}-item-disabled, ${n}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${n}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},ot=e=>{const{componentCls:n,motionDurationSlow:t,motionEaseInOut:o,borderRadius:l,menuArrowSize:a,menuArrowOffset:d}=e;return{[`${n}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:a,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${t} ${o}, opacity ${t}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:a*.6,height:a*.15,backgroundColor:"currentcolor",borderRadius:l,transition:[`background ${t} ${o}`,`transform ${t} ${o}`,`top ${t} ${o}`,`color ${t} ${o}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(-${d})`},"&::after":{transform:`rotate(-45deg) translateY(${d})`}}}}},Bn=e=>{const{antCls:n,componentCls:t,fontSize:o,motionDurationSlow:l,motionDurationMid:a,motionEaseInOut:d,lineHeight:r,paddingXS:s,padding:v,colorSplit:c,lineWidth:i,zIndexPopup:$,borderRadiusLG:y,radiusSubMenuItem:g,menuArrowSize:x,menuArrowOffset:w,lineType:P,menuPanelMaskInset:M}=e;return[{"":{[`${t}`]:p(p({},We()),{"&-hidden":{display:"none"}})},[`${t}-submenu-hidden`]:{display:"none"}},{[t]:p(p(p(p(p(p(p({},Ot(e)),We()),{marginBottom:0,paddingInlineStart:0,fontSize:o,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${l} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${t}-item`]:{flex:"none"}},[`${t}-item, ${t}-submenu, ${t}-submenu-title`]:{borderRadius:e.radiusItem},[`${t}-item-group-title`]:{padding:`${s}px ${v}px`,fontSize:o,lineHeight:r,transition:`all ${l}`},[`&-horizontal ${t}-submenu`]:{transition:[`border-color ${l} ${d}`,`background ${l} ${d}`].join(",")},[`${t}-submenu, ${t}-submenu-inline`]:{transition:[`border-color ${l} ${d}`,`background ${l} ${d}`,`padding ${a} ${d}`].join(",")},[`${t}-submenu ${t}-sub`]:{cursor:"initial",transition:[`background ${l} ${d}`,`padding ${l} ${d}`].join(",")},[`${t}-title-content`]:{transition:`color ${l}`},[`${t}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${t}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:c,borderStyle:P,borderWidth:0,borderTopWidth:i,marginBlock:i,padding:0,"&-dashed":{borderStyle:"dashed"}}}),nt(e)),{[`${t}-item-group`]:{[`${t}-item-group-list`]:{margin:0,padding:0,[`${t}-item, ${t}-submenu-title`]:{paddingInline:`${o*2}px ${v}px`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:$,background:"transparent",borderRadius:y,boxShadow:"none",transformOrigin:"0 0","&::before":{position:"absolute",inset:`${M}px 0 0`,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:M},[`> ${t}`]:p(p(p({borderRadius:y},nt(e)),ot(e)),{[`${t}-item, ${t}-submenu > ${t}-submenu-title`]:{borderRadius:g},[`${t}-submenu-title::after`]:{transition:`transform ${l} ${d}`}})}}),ot(e)),{[`&-inline-collapsed ${t}-submenu-arrow,
        &-inline ${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${w})`},"&::after":{transform:`rotate(45deg) translateX(-${w})`}},[`${t}-submenu-open${t}-submenu-inline > ${t}-submenu-title > ${t}-submenu-arrow`]:{transform:`translateY(-${x*.2}px)`,"&::after":{transform:`rotate(-45deg) translateX(-${w})`},"&::before":{transform:`rotate(45deg) translateX(${w})`}}})},{[`${n}-layout-header`]:{[t]:{lineHeight:"inherit"}}}]},Dn=(e,n)=>Kt("Menu",(o,l)=>{let{overrideComponentToken:a}=l;if((n==null?void 0:n.value)===!1)return[];const{colorBgElevated:d,colorPrimary:r,colorError:s,colorErrorHover:v,colorTextLightSolid:c}=o,{controlHeightLG:i,fontSize:$}=o,y=$/7*5,g=je(o,{menuItemHeight:i,menuItemPaddingInline:o.margin,menuArrowSize:y,menuHorizontalHeight:i*1.15,menuArrowOffset:`${y*.25}px`,menuPanelMaskInset:-7,menuSubMenuBg:d}),x=new Ve(c).setAlpha(.65).toRgbString(),w=je(g,{colorItemText:x,colorItemTextHover:c,colorGroupTitle:x,colorItemTextSelected:c,colorItemBg:"#001529",colorSubItemBg:"#000c17",colorItemBgActive:"transparent",colorItemBgSelected:r,colorActiveBarWidth:0,colorActiveBarHeight:0,colorActiveBarBorderSize:0,colorItemTextDisabled:new Ve(c).setAlpha(.25).toRgbString(),colorDangerItemText:s,colorDangerItemTextHover:v,colorDangerItemTextSelected:c,colorDangerItemBgActive:s,colorDangerItemBgSelected:s,menuSubMenuBg:"#001529",colorItemTextSelectedHorizontal:c,colorItemBgSelectedHorizontal:r},p({},a));return[Bn(g),On(g),_n(g),et(g,"light"),et(w,"dark"),Tn(g),jt(g),Xe(g,"slide-up"),Xe(g,"slide-down"),Wt(g,"zoom-big")]},o=>{const{colorPrimary:l,colorError:a,colorTextDisabled:d,colorErrorBg:r,colorText:s,colorTextDescription:v,colorBgContainer:c,colorFillAlter:i,colorFillContent:$,lineWidth:y,lineWidthBold:g,controlItemBgActive:x,colorBgTextHover:w}=o;return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,colorItemText:s,colorItemTextHover:s,colorItemTextHoverHorizontal:l,colorGroupTitle:v,colorItemTextSelected:l,colorItemTextSelectedHorizontal:l,colorItemBg:c,colorItemBgHover:w,colorItemBgActive:$,colorSubItemBg:i,colorItemBgSelected:x,colorItemBgSelectedHorizontal:"transparent",colorActiveBarWidth:0,colorActiveBarHeight:g,colorActiveBarBorderSize:y,colorItemTextDisabled:d,colorDangerItemText:a,colorDangerItemTextHover:a,colorDangerItemTextSelected:a,colorDangerItemBgActive:r,colorDangerItemBgSelected:r,itemMarginInline:o.marginXXS}})(e),An=()=>({id:String,prefixCls:String,items:Array,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},tabindex:{type:[Number,String]},motion:Object,role:String,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:0},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}),lt=[],ie=Z({compatConfig:{MODE:3},name:"AMenu",inheritAttrs:!1,props:An(),slots:Object,setup(e,n){let{slots:t,emit:o,attrs:l}=n;const{direction:a,getPrefixCls:d}=Tt("menu",e),r=dt(),s=m(()=>{var u;return d("menu",e.prefixCls||((u=r==null?void 0:r.prefixCls)===null||u===void 0?void 0:u.value))}),[v,c]=Dn(s,m(()=>!r)),i=H(new Map),$=ae(vn,L(void 0)),y=m(()=>$.value!==void 0?$.value:e.inlineCollapsed),{itemsNodes:g}=Mn(e),x=H(!1);Bt(()=>{x.value=!0}),Te(()=>{Se(!(e.inlineCollapsed===!0&&e.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),Se(!($.value!==void 0&&e.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});const w=L([]),P=L([]),M=L({});Y(i,()=>{const u={};for(const b of i.value.values())u[b.key]=b;M.value=u},{flush:"post"}),Te(()=>{if(e.activeKey!==void 0){let u=[];const b=e.activeKey?M.value[e.activeKey]:void 0;b&&e.activeKey!==void 0?u=Ee([].concat(be(b.parentKeys),e.activeKey)):u=[],ve(w.value,u)||(w.value=u)}}),Y(()=>e.selectedKeys,u=>{u&&(P.value=u.slice())},{immediate:!0,deep:!0});const N=L([]);Y([M,P],()=>{let u=[];P.value.forEach(b=>{const C=M.value[b];C&&(u=u.concat(be(C.parentKeys)))}),u=Ee(u),ve(N.value,u)||(N.value=u)},{immediate:!0});const q=u=>{if(e.selectable){const{key:b}=u,C=P.value.includes(b);let T;e.multiple?C?T=P.value.filter(R=>R!==b):T=[...P.value,b]:T=[b];const B=p(p({},u),{selectedKeys:T});ve(T,P.value)||(e.selectedKeys===void 0&&(P.value=T),o("update:selectedKeys",T),C&&e.multiple?o("deselect",B):o("select",B))}O.value!=="inline"&&!e.multiple&&I.value.length&&X(lt)},I=L([]);Y(()=>e.openKeys,function(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:I.value;ve(I.value,u)||(I.value=u.slice())},{immediate:!0,deep:!0});let K;const z=u=>{clearTimeout(K),K=setTimeout(()=>{e.activeKey===void 0&&(w.value=u),o("update:activeKey",u[u.length-1])})},A=m(()=>!!e.disabled),V=m(()=>a.value==="rtl"),O=L("vertical"),W=H(!1);Te(()=>{var u;(e.mode==="inline"||e.mode==="vertical")&&y.value?(O.value="vertical",W.value=y.value):(O.value=e.mode,W.value=!1),!((u=r==null?void 0:r.mode)===null||u===void 0)&&u.value&&(O.value=r.mode.value)});const G=m(()=>O.value==="inline"),X=u=>{I.value=u,o("update:openKeys",u),o("openChange",u)},re=L(I.value),se=H(!1);Y(I,()=>{G.value&&(re.value=I.value)},{immediate:!0}),Y(G,()=>{if(!se.value){se.value=!0;return}G.value?I.value=re.value:X(lt)},{immediate:!0});const Q=m(()=>({[`${s.value}`]:!0,[`${s.value}-root`]:!0,[`${s.value}-${O.value}`]:!0,[`${s.value}-inline-collapsed`]:W.value,[`${s.value}-rtl`]:V.value,[`${s.value}-${e.theme}`]:!0})),le=m(()=>d()),ue=m(()=>({horizontal:{name:`${le.value}-slide-up`},inline:Vt,other:{name:`${le.value}-zoom-big`}}));bt(!0);const j=function(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];const b=[],C=i.value;return u.forEach(T=>{const{key:B,childrenEventKeys:R}=C.get(T);b.push(B,...j(be(R)))}),b},me=u=>{var b;o("click",u),q(u),(b=r==null?void 0:r.onClick)===null||b===void 0||b.call(r)},h=(u,b)=>{var C;const T=((C=M.value[u])===null||C===void 0?void 0:C.childrenEventKeys)||[];let B=I.value.filter(R=>R!==u);if(b)B.push(u);else if(O.value!=="inline"){const R=j(be(T));B=Ee(B.filter(k=>!R.includes(k)))}ve(I,B)||X(B)},_=(u,b)=>{i.value.set(u,b),i.value=new Map(i.value)},F=u=>{i.value.delete(u),i.value=new Map(i.value)},U=L(0),ee=m(()=>{var u;return e.expandIcon||t.expandIcon||!((u=r==null?void 0:r.expandIcon)===null||u===void 0)&&u.value?b=>{let C=e.expandIcon||t.expandIcon;return C=typeof C=="function"?C(b):C,Ae(C,{class:`${s.value}-submenu-expand-icon`},!1)}:null});return mn({prefixCls:s,activeKeys:w,openKeys:I,selectedKeys:P,changeActiveKeys:z,disabled:A,rtl:V,mode:O,inlineIndent:m(()=>e.inlineIndent),subMenuCloseDelay:m(()=>e.subMenuCloseDelay),subMenuOpenDelay:m(()=>e.subMenuOpenDelay),builtinPlacements:m(()=>e.builtinPlacements),triggerSubMenuAction:m(()=>e.triggerSubMenuAction),getPopupContainer:m(()=>e.getPopupContainer),inlineCollapsed:W,theme:m(()=>e.theme),siderCollapsed:$,defaultMotions:m(()=>x.value?ue.value:null),motion:m(()=>x.value?e.motion:null),overflowDisabled:H(void 0),onOpenChange:h,onItemClick:me,registerMenuInfo:_,unRegisterMenuInfo:F,selectedSubMenuKeys:N,expandIcon:ee,forceSubMenuRender:m(()=>e.forceSubMenuRender),rootClassName:c}),()=>{var u,b;const C=g.value||it((u=t.default)===null||u===void 0?void 0:u.call(t)),T=U.value>=C.length-1||O.value!=="horizontal"||e.disabledOverflow,B=O.value!=="horizontal"||e.disabledOverflow?C:C.map((k,te)=>f(Ce,{key:k.key,overflowDisabled:te>U.value},{default:()=>k})),R=((b=t.overflowedIndicator)===null||b===void 0?void 0:b.call(t))||f(sn,null,null);return v(f(fe,E(E({},l),{},{onMousedown:e.onMousedown,prefixCls:`${s.value}-overflow`,component:"ul",itemComponent:pe,class:[Q.value,l.class,c.value],role:"menu",id:e.id,data:B,renderRawItem:k=>k,renderRawRest:k=>{const te=k.length,ge=te?C.slice(-te):null;return f(_e,null,[f(ce,{eventKey:$e,key:$e,title:R,disabled:T,internalPopupClose:te===0},{default:()=>ge}),f(Ue,null,{default:()=>[f(ce,{eventKey:$e,key:$e,title:R,disabled:T,internalPopupClose:te===0},{default:()=>ge})]})])},maxCount:O.value!=="horizontal"||e.disabledOverflow?fe.INVALIDATE:fe.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:k=>{U.value=k}}),{default:()=>[f(Dt,{to:"body"},{default:()=>[f("div",{style:{display:"none"},"aria-hidden":!0},[f(Ue,null,{default:()=>[B]})])]})]}))}}});ie.install=function(e){return e.component(ie.name,ie),e.component(pe.name,pe),e.component(ce.name,ce),e.component(we.name,we),e.component(xe.name,xe),e};ie.Item=pe;ie.Divider=we;ie.SubMenu=ce;ie.ItemGroup=xe;export{sn as E,ie as M,qn as S,pe as _,vn as a,Xn as u};
