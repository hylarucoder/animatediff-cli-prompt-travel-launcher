import{s as x,r as c,y as n,o as b,c as C,b as e,w as t,d as o,a as k}from"./entry.978b97f1.js";const w={style:{"margin-bottom":"12px"}},U=x({__name:"index",setup(B){const _=c(null),r=c("/Users/twocucao/Workspace/01-Code/projects-aigc/animatediff-cli-prompt-travel-launcher"),u=c(""),i=l=>{console.log("before upload",l),r.value=l.file.path},f=async()=>{u.value=await readTextFile("README.md",{dir:r.value}).catch(l=>{console.error(l)})};return(l,s)=>{const d=n("n-input"),a=n("n-button"),m=n("n-icon"),v=n("n-text"),g=n("n-upload-dragger"),h=n("n-upload"),y=n("n-space");return b(),C("div",null,[e(d,{value:r.value,"onUpdate:value":s[0]||(s[0]=p=>r.value=p),type:"text",placeholder:"Basic Input"},null,8,["value"]),e(a,{onClick:f},{default:t(()=>[o(" readme")]),_:1}),e(d,{value:u.value,"onUpdate:value":s[1]||(s[1]=p=>u.value=p),type:"text",placeholder:"read me"},null,8,["value"]),e(h,{ref_key:"upload",ref:_,onBeforeUpload:i,multiple:"","directory-dnd":"","default-upload":!1,action:"/",max:1},{default:t(()=>[e(g,null,{default:t(()=>[k("div",w,[e(m,{size:"48",depth:3})]),e(v,{style:{"font-size":"16px"}},{default:t(()=>[o(" drag dir animatediff-cli-prompt-travel to this area to config ")]),_:1})]),_:1})]),_:1},512),e(y,null,{default:t(()=>[e(a,{ghost:""},{default:t(()=>[o(" Default ")]),_:1}),e(a,{type:"primary",ghost:""},{default:t(()=>[o(" Primary ")]),_:1}),e(a,{type:"info",ghost:""},{default:t(()=>[o(" Info ")]),_:1}),e(a,{type:"success",ghost:""},{default:t(()=>[o(" Success ")]),_:1}),e(a,{type:"warning",ghost:""},{default:t(()=>[o(" Warning ")]),_:1}),e(a,{type:"error",ghost:""},{default:t(()=>[o(" Error ")]),_:1})]),_:1})])}}});export{U as default};
