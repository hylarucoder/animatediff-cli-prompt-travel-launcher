import{i as A}from"./main.429c1dad.js";import{i as O}from"./ipcRenderer.ac34f8e7.js";import{s as R,z as M,R as W,r as C,h as X,B as j,I as K,b as d,_ as N,c as U,a as _,w as p,o as G,p as J,e as Q}from"./entry.978b97f1.js";import{_ as q,b as Y,a as Z}from"./index.65ab467b.js";import{e as k,m as nn,T as en,d as S,r as tn,j as an,F as cn,J as sn,I as on,L as x,w as dn,_ as f,A as b,P as a}from"./_getTag.cf4696dc.js";import{L as ln,W as rn}from"./index.84c27b45.js";import{K as y}from"./LeftOutlined.b6276360.js";import{u as hn}from"./FormItemContext.6a0e0e16.js";import{o as un}from"./omit.fb3562ba.js";import"./AntdIcon.22ef303b.js";import"./InsertStyle.d154dc06.js";import"./index.esm.201addbf.js";import"./Keyframes.e2f385c2.js";import"./firstNotUndefined.9a4a1b8d.js";import"./motion.ddb0acb0.js";import"./vnode.1e6e4dd3.js";import"./ResizeObserver.es.0f9f8adb.js";import"./Col.48aa6d63.js";import"./responsiveObserve.66660026.js";import"./useFlexGapSupport.2d7d1ead.js";import"./useMergedState.1581dfbf.js";import"./slide.031977cf.js";import"./index.12b374c1.js";import"./CheckOutlined.61cd5a30.js";import"./CloseOutlined.92919b35.js";import"./CloseCircleFilled.3288826c.js";import"./Compact.ff18982f.js";const gn=n=>{const{componentCls:i}=n,e=`${i}-inner`;return{[i]:{[`&${i}-small`]:{minWidth:n.switchMinWidthSM,height:n.switchHeightSM,lineHeight:`${n.switchHeightSM}px`,[`${i}-inner`]:{paddingInlineStart:n.switchInnerMarginMaxSM,paddingInlineEnd:n.switchInnerMarginMinSM,[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${n.switchPinSizeSM+n.switchPadding*2}px - ${n.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(100% - ${n.switchPinSizeSM+n.switchPadding*2}px + ${n.switchInnerMarginMaxSM*2}px)`},[`${e}-unchecked`]:{marginTop:-n.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${i}-handle`]:{width:n.switchPinSizeSM,height:n.switchPinSizeSM},[`${i}-loading-icon`]:{top:(n.switchPinSizeSM-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize},[`&${i}-checked`]:{[`${i}-inner`]:{paddingInlineStart:n.switchInnerMarginMinSM,paddingInlineEnd:n.switchInnerMarginMaxSM,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${n.switchPinSizeSM+n.switchPadding*2}px + ${n.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(-100% + ${n.switchPinSizeSM+n.switchPadding*2}px - ${n.switchInnerMarginMaxSM*2}px)`}},[`${i}-handle`]:{insetInlineStart:`calc(100% - ${n.switchPinSizeSM+n.switchPadding}px)`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2}},[`&${i}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2}}}}}}},wn=n=>{const{componentCls:i}=n;return{[i]:{[`${i}-loading-icon${n.iconCls}`]:{position:"relative",top:(n.switchPinSize-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"},[`&${i}-checked ${i}-loading-icon`]:{color:n.switchColor}}}},mn=n=>{const{componentCls:i}=n,e=`${i}-handle`;return{[i]:{[e]:{position:"absolute",top:n.switchPadding,insetInlineStart:n.switchPadding,width:n.switchPinSize,height:n.switchPinSize,transition:`all ${n.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n.colorWhite,borderRadius:n.switchPinSize/2,boxShadow:n.switchHandleShadow,transition:`all ${n.switchDuration} ease-in-out`,content:'""'}},[`&${i}-checked ${e}`]:{insetInlineStart:`calc(100% - ${n.switchPinSize+n.switchPadding}px)`},[`&:not(${i}-disabled):active`]:{[`${e}::before`]:{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0},[`&${i}-checked ${e}::before`]:{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}}}}},pn=n=>{const{componentCls:i}=n,e=`${i}-inner`;return{[i]:{[e]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:n.switchInnerMarginMax,paddingInlineEnd:n.switchInnerMarginMin,transition:`padding-inline-start ${n.switchDuration} ease-in-out, padding-inline-end ${n.switchDuration} ease-in-out`,[`${e}-checked, ${e}-unchecked`]:{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:`margin-inline-start ${n.switchDuration} ease-in-out, margin-inline-end ${n.switchDuration} ease-in-out`,pointerEvents:"none"},[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${n.switchPinSize+n.switchPadding*2}px - ${n.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(100% - ${n.switchPinSize+n.switchPadding*2}px + ${n.switchInnerMarginMax*2}px)`},[`${e}-unchecked`]:{marginTop:-n.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${i}-checked ${e}`]:{paddingInlineStart:n.switchInnerMarginMin,paddingInlineEnd:n.switchInnerMarginMax,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${n.switchPinSize+n.switchPadding*2}px + ${n.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(-100% + ${n.switchPinSize+n.switchPadding*2}px - ${n.switchInnerMarginMax*2}px)`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:n.switchPadding*2,marginInlineEnd:-n.switchPadding*2}},[`&${i}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-n.switchPadding*2,marginInlineEnd:n.switchPadding*2}}}}}},Sn=n=>{const{componentCls:i}=n;return{[i]:S(S(S(S({},tn(n)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n.switchMinWidth,height:n.switchHeight,lineHeight:`${n.switchHeight}px`,verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${n.motionDurationMid}`,userSelect:"none",[`&:hover:not(${i}-disabled)`]:{background:n.colorTextTertiary}}),an(n)),{[`&${i}-checked`]:{background:n.switchColor,[`&:hover:not(${i}-disabled)`]:{background:n.colorPrimaryHover}},[`&${i}-loading, &${i}-disabled`]:{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${i}-rtl`]:{direction:"rtl"}})}},$n=k("Switch",n=>{const i=n.fontSize*n.lineHeight,e=n.controlHeight/2,c=2,r=i-c*2,s=e-c*2,l=nn(n,{switchMinWidth:r*2+c*4,switchHeight:i,switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchInnerMarginMin:r/2,switchInnerMarginMax:r+c+c*2,switchPadding:c,switchPinSize:r,switchBg:n.colorBgContainer,switchMinWidthSM:s*2+c*2,switchHeightSM:e,switchInnerMarginMinSM:s/2,switchInnerMarginMaxSM:s+c+c*2,switchPinSizeSM:s,switchHandleShadow:`0 2px 4px 0 ${new en("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:n.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${n.opacityLoading})`,switchHandleActiveInset:"-30%"});return[Sn(l),pn(l),mn(l),wn(l),gn(l)]}),In=sn("small","default"),Mn=()=>({id:String,prefixCls:String,size:a.oneOf(In),disabled:{type:Boolean,default:void 0},checkedChildren:a.any,unCheckedChildren:a.any,tabindex:a.oneOfType([a.string,a.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:a.oneOfType([a.string,a.number,a.looseBool]),checkedValue:a.oneOfType([a.string,a.number,a.looseBool]).def(!0),unCheckedValue:a.oneOfType([a.string,a.number,a.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}),fn=R({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:Mn(),slots:Object,setup(n,i){let{attrs:e,slots:c,expose:r,emit:s}=i;const l=hn(),$=on(),u=M(()=>{var t;return(t=n.disabled)!==null&&t!==void 0?t:$.value});W(()=>{x(),x()});const g=C(n.checked!==void 0?n.checked:e.defaultChecked),w=M(()=>g.value===n.checkedValue);X(()=>n.checked,()=>{g.value=n.checked});const{prefixCls:o,direction:z,size:L}=dn("switch",n),[E,H]=$n(o),m=C(),v=()=>{var t;(t=m.value)===null||t===void 0||t.focus()};r({focus:v,blur:()=>{var t;(t=m.value)===null||t===void 0||t.blur()}}),j(()=>{K(()=>{n.autofocus&&!u.value&&m.value.focus()})});const I=(t,h)=>{u.value||(s("update:checked",t),s("change",t,h),l.onFieldChange())},T=t=>{s("blur",t)},B=t=>{v();const h=w.value?n.unCheckedValue:n.checkedValue;I(h,t),s("click",h,t)},D=t=>{t.keyCode===y.LEFT?I(n.unCheckedValue,t):t.keyCode===y.RIGHT&&I(n.checkedValue,t),s("keydown",t)},V=t=>{var h;(h=m.value)===null||h===void 0||h.blur(),s("mouseup",t)},F=M(()=>({[`${o.value}-small`]:L.value==="small",[`${o.value}-loading`]:n.loading,[`${o.value}-checked`]:w.value,[`${o.value}-disabled`]:u.value,[o.value]:!0,[`${o.value}-rtl`]:z.value==="rtl",[H.value]:!0}));return()=>{var t;return E(d(rn,null,{default:()=>[d("button",f(f(f({},un(n,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),e),{},{id:(t=n.id)!==null&&t!==void 0?t:l.id.value,onKeydown:D,onClick:B,onBlur:T,onMouseup:V,type:"button",role:"switch","aria-checked":g.value,disabled:u.value||n.loading,class:[e.class,F.value],ref:m}),[d("div",{class:`${o.value}-handle`},[n.loading?d(ln,{class:`${o.value}-loading-icon`},null):null]),d("span",{class:`${o.value}-inner`},[d("span",{class:`${o.value}-inner-checked`},[b(c,n,"checkedChildren")]),d("span",{class:`${o.value}-inner-unchecked`},[b(c,n,"unCheckedChildren")])])])]}))}}}),_n=cn(fn);const vn={data(){return{autoLaunchChecked:!1}},mounted(){this.init()},methods:{init(){O.invoke(A.autoLaunch,"check").then(n=>{console.log("[ipcRenderer] [autoLaunch] result:",n),this.autoLaunchChecked=n.status})},autoLaunchChange(n){console.log("[ipcRenderer] [autoLaunch] self.autoLaunchChecked:",this.autoLaunchChecked)}}},P=n=>(J("data-v-31feb7d4"),n=n(),Q(),n),Cn={id:"app-base-system-launch"},xn={class:"one-block-2"},bn=P(()=>_("a",null,"启动",-1)),yn=P(()=>_("span",null," 开机自动启动 ",-1));function Pn(n,i,e,c,r,s){const l=Y,$=_n,u=Z,g=q;return G(),U("div",Cn,[_("div",xn,[d(g,{class:"set-auto",itemLayout:"horizontal"},{default:p(()=>[d(u,{style:{"text-align":"left"}},{actions:p(()=>[d($,{modelValue:r.autoLaunchChecked,"onUpdate:modelValue":i[0]||(i[0]=w=>r.autoLaunchChecked=w),checkedChildren:"开",unCheckedChildren:"关",onChange:i[1]||(i[1]=w=>s.autoLaunchChange())},null,8,["modelValue"])]),default:p(()=>[d(l,null,{title:p(()=>[bn]),description:p(()=>[yn]),_:1})]),_:1})]),_:1})])])}const ti=N(vn,[["render",Pn],["__scopeId","data-v-31feb7d4"]]);export{ti as default};
