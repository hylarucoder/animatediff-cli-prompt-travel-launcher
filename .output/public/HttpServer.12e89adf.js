import{i as p}from"./main.429c1dad.js";import{i as v}from"./ipcRenderer.ac34f8e7.js";import{a as l}from"./axios.21b846bc.js";import{s as d}from"./store2.eb3b016a.js";import{_ as g,c as S,a as s,t as u,d as r,b as _,w as m,o as k,p as b,e as R}from"./entry.978b97f1.js";import{B as q}from"./index.77e35669.js";import"./_commonjsHelpers.725317a4.js";import"./_getTag.cf4696dc.js";import"./index.esm.201addbf.js";import"./index.84c27b45.js";import"./AntdIcon.22ef303b.js";import"./InsertStyle.d154dc06.js";import"./devWarning.642abf93.js";import"./Compact.ff18982f.js";const x={data(){return{currentStatus:"关闭",servicAddress:"无"}},mounted(){this.init()},methods:{init(){v.invoke(p.checkHttpServer,{}).then(t=>{t.enable&&(this.currentStatus="开启",this.servicAddress=t.server,d.set("httpServiceConfig",t))})},sendRequest(t){if(this.currentStatus=="关闭"){this.$message.error("http服务未开启");return}this.requestHttp(p.doHttpRequest,{id:t}).then(e=>{})},requestHttp(t,e){const i=d.get("httpServiceConfig").server||"http://localhost:7071";let o=t.split(".").join("/");return o=i+"/"+o,console.log("url:",o),l({url:o,method:"post",data:e,timeout:6e4})},backendRequest(){console.log("GO_URL:",{}.VITE_GO_URL);const t={baseURL:{}.VITE_GO_URL,method:"get",url:"/hello",timeout:6e4};l(t).then(e=>{console.log("res:",e);const n=e.data||null;this.$message.info(`go服务返回: ${n}`)})}}},h=t=>(b("data-v-8c49c4f1"),t=t(),R(),t),H={id:"app-base-httpserver"},I=h(()=>s("div",{class:"one-block-1"},[s("span",null," 1. 使用http与主进程通信 ")],-1)),B={class:"one-block-2"},C=h(()=>s("div",{class:"one-block-1"},[s("span",null," 2. 使用http与服务端通信 ")],-1)),V={class:"one-block-2"};function $(t,e,n,i,o,c){const a=q;return k(),S("div",H,[I,s("div",B,[s("p",null,"* 状态："+u(o.currentStatus),1),s("p",null,"* 地址："+u(o.servicAddress),1),s("p",null,[r(" * 发送请求： "),_(a,{onClick:e[0]||(e[0]=f=>c.sendRequest("pictures"))},{default:m(()=>[r(" 打开【我的图片】 ")]),_:1})])]),C,s("div",V,[s("p",null,[_(a,{onClick:e[1]||(e[1]=f=>c.backendRequest())},{default:m(()=>[r(" 发送请求 ")]),_:1}),r(" （请自行创建服务） ")])])])}const J=g(x,[["render",$],["__scopeId","data-v-8c49c4f1"]]);export{J as default};