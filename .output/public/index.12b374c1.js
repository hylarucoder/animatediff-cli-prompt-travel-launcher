import{a6 as R,d as h}from"./_getTag.cf4696dc.js";import{i as w}from"./ResizeObserver.es.0f9f8adb.js";import{s as C,O as x,B as M,N as H,P as W,h as B,m as D}from"./entry.978b97f1.js";const U=C({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup(i,v){let{slots:l}=v;const n=x({width:0,height:0,offsetHeight:0,offsetWidth:0});let c=null,s=null;const r=()=>{s&&(s.disconnect(),s=null)},b=e=>{const{onResize:t}=i,o=e[0].target,{width:O,height:p}=o.getBoundingClientRect(),{offsetWidth:d,offsetHeight:f}=o,g=Math.floor(O),m=Math.floor(p);if(n.width!==g||n.height!==m||n.offsetWidth!==d||n.offsetHeight!==f){const u={width:g,height:m,offsetWidth:d,offsetHeight:f};h(n,u),t&&Promise.resolve().then(()=>{t(h(h({},u),{offsetWidth:d,offsetHeight:f}),o)})}},z=D(),a=()=>{const{disabled:e}=i;if(e){r();return}const t=R(z);t!==c&&(r(),c=t),!s&&t&&(s=new w(b),s.observe(t))};return M(()=>{a()}),H(()=>{a()}),W(()=>{r()}),B(()=>i.disabled,()=>{a()},{flush:"post"}),()=>{var e;return(e=l.default)===null||e===void 0?void 0:e.call(l)[0]}}});export{U as R};