import{_ as d,y as m,c as u,a as t,b as a,w as p,o as h,d as f,p as x,e as g}from"./entry.978b97f1.js";import{U as b}from"./index.e2c36c98.js";import{_ as v}from"./index.03d61709.js";import"./_getTag.cf4696dc.js";import"./index.esm.201addbf.js";import"./AntdIcon.22ef303b.js";import"./InsertStyle.d154dc06.js";import"./useMergedState.1581dfbf.js";import"./firstNotUndefined.9a4a1b8d.js";import"./motion.ddb0acb0.js";import"./vnode.1e6e4dd3.js";import"./ResizeObserver.es.0f9f8adb.js";import"./index.84c27b45.js";import"./index.77e35669.js";import"./devWarning.642abf93.js";import"./Compact.ff18982f.js";import"./EyeOutlined.ee04c144.js";import"./index.50fb9c59.js";import"./zoom.e2a25d90.js";import"./Keyframes.e2f385c2.js";import"./index.0c40136e.js";import"./CloseOutlined.92919b35.js";import"./CheckOutlined.61cd5a30.js";import"./CloseCircleFilled.3288826c.js";import"./collapseMotion.083a49ed.js";import"./FormItemContext.6a0e0e16.js";import"./useFlexGapSupport.2d7d1ead.js";const k={data(){return{action_url:"localhost:xxxx/api/example/uploadExtension"}},methods:{handleChange(o){const e=o.file.status;if(e!=="uploading"&&console.log(o.file),e==="done"){const n=o.file.response;console.log("uploadRes:",n)}else e==="error"&&this.$message.error(`${o.file.name} file upload failed.`)}}},s=o=>(x("data-v-717fb896"),o=o(),g(),o),C={id:"app-base-extension"},y=s(()=>t("div",{class:"one-block-1"},[t("span",null," 1. 上传扩展程序（crx文件格式） ")],-1)),I={class:"one-block-2"},$={class:"ant-upload-drag-icon"},w=s(()=>t("p",{class:"ant-upload-text"},"上传",-1)),z=s(()=>t("p",{class:"ant-upload-hint"},null,-1)),B=s(()=>t("div",{class:"one-block-1"},"2. chrome扩展商店（crx下载）",-1)),N={class:"one-block-2"};function S(o,e,n,V,i,c){const r=m("a-icon"),l=b,_=v;return h(),u("div",C,[y,t("div",I,[a(l,{name:"file",multiple:!0,action:i.action_url,onChange:c.handleChange},{default:p(()=>[t("p",$,[a(r,{type:"inbox"})]),w,z]),_:1},8,["action","onChange"])]),B,t("div",N,[a(_,null,{default:p(()=>[f(" 极简插件：https://chrome.zzzmh.cn/ ")]),_:1})])])}const no=d(k,[["render",S],["__scopeId","data-v-717fb896"]]);export{no as default};
