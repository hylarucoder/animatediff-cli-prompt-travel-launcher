import{i as n}from"./main.429c1dad.js";import{i as r}from"./ipcRenderer.ac34f8e7.js";import{_ as f,v as h,c as x,a as o,b as a,w as i,o as b,d as c,t as l,p as k,e as N}from"./entry.978b97f1.js";import{B as w}from"./index.77e35669.js";import{_ as D,a as g}from"./index.65ab467b.js";import"./_getTag.cf4696dc.js";import"./index.esm.201addbf.js";import"./index.84c27b45.js";import"./AntdIcon.22ef303b.js";import"./InsertStyle.d154dc06.js";import"./devWarning.642abf93.js";import"./Compact.ff18982f.js";import"./Keyframes.e2f385c2.js";import"./LeftOutlined.b6276360.js";import"./firstNotUndefined.9a4a1b8d.js";import"./motion.ddb0acb0.js";import"./vnode.1e6e4dd3.js";import"./ResizeObserver.es.0f9f8adb.js";import"./Col.48aa6d63.js";import"./responsiveObserve.66660026.js";import"./useFlexGapSupport.2d7d1ead.js";import"./useMergedState.1581dfbf.js";import"./slide.031977cf.js";import"./index.12b374c1.js";import"./omit.fb3562ba.js";import"./CheckOutlined.61cd5a30.js";import"./CloseOutlined.92919b35.js";import"./CloseCircleFilled.3288826c.js";import"./FormItemContext.6a0e0e16.js";const S={data(){return{defaultDeviceName:"",printerList:[],views:[{type:"html",content:"/public/html/view_example.html"}]}},mounted(){this.init()},methods:{init(){r.removeAllListeners(n.printStatus),r.on(n.printStatus,(t,e)=>{console.log("result",e),this.$message.info("打印中...")})},getPrinter(){r.invoke(n.getPrinterList,{}).then(t=>{this.printerList=t})},doPrint(t){console.log("defaultDeviceName:",this.defaultDeviceName);const e={view:h(this.views[t]),deviceName:this.defaultDeviceName};r.send(n.print,e)},defaultDevice(t){let e="";return t.isDefault&&(e="- 默认",this.defaultDeviceName=t.name),e}}},m=t=>(k("data-v-6a64e887"),t=t(),N(),t),y={id:"app-hw-bluetooth"},B=m(()=>o("div",{class:"one-block-1"},[o("span",null," 1. 打印机设备 ")],-1)),I={class:"one-block-2"},L={class:"one-block-2"},P=m(()=>o("div",null,"设备列表",-1)),C=m(()=>o("div",{class:"one-block-1"},[o("span",null," 2. 打印内容 ")],-1)),V={class:"one-block-2"};function $(t,e,A,R,_,p){const d=w,u=g,v=D;return b(),x("div",y,[B,o("div",I,[a(d,{onClick:e[0]||(e[0]=s=>p.getPrinter())},{default:i(()=>[c(" 获取打印机列表 ")]),_:1})]),o("div",L,[a(v,{size:"small",bordered:"","data-source":_.printerList},{renderItem:i(({item:s})=>[a(u,null,{default:i(()=>[c(l(s.displayName)+" "+l(p.defaultDevice(s)),1)]),_:2},1024)]),header:i(()=>[P]),_:1},8,["data-source"])]),C,o("div",V,[a(d,{onClick:e[1]||(e[1]=s=>p.doPrint(0))},{default:i(()=>[c(" 打印一个页面 ")]),_:1})])])}const dt=f(S,[["render",$],["__scopeId","data-v-6a64e887"]]);export{dt as default};