import{d as p}from"./_getTag.cf4696dc.js";import{r as i,x as g,f,h,v}from"./entry.978b97f1.js";const y=`accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`,C=`onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`,c=`${y} ${C}`.split(/[\s\n]+/),w="aria-",b="data-";function u(t,o){return t.indexOf(o)===0}function P(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n;o===!1?n={aria:!0,data:!0,attr:!0}:o===!0?n={aria:!0}:n=p({},o);const a={};return Object.keys(t).forEach(e=>{(n.aria&&(e==="role"||u(e,w))||n.data&&u(e,b)||n.attr&&(c.includes(e)||c.includes(e.toLowerCase())))&&(a[e]=t[e])}),a}function M(t,o){const{defaultValue:n,value:a=i()}=o||{};let e=typeof t=="function"?t():t;a.value!==void 0&&(e=g(a)),n!==void 0&&(e=typeof n=="function"?n():n);const l=i(e),s=i(e);f(()=>{let r=a.value!==void 0?a.value:l.value;o.postState&&(r=o.postState(r)),s.value=r});function d(r){const m=s.value;l.value=r,v(s.value)!==r&&o.onChange&&o.onChange(r,m)}return h(a,()=>{l.value=a.value}),[s,d]}export{P as p,M as u};
