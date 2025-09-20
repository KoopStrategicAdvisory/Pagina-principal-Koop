function Th(e,n){for(var t=0;t<n.length;t++){const a=n[t];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(a,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function Ih(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vd={exports:{}},bi={},bd={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),Rh=Symbol.for("react.portal"),zh=Symbol.for("react.fragment"),Oh=Symbol.for("react.strict_mode"),Dh=Symbol.for("react.profiler"),Lh=Symbol.for("react.provider"),Ph=Symbol.for("react.context"),_h=Symbol.for("react.forward_ref"),Mh=Symbol.for("react.suspense"),Vh=Symbol.for("react.memo"),Bh=Symbol.for("react.lazy"),Rl=Symbol.iterator;function Fh(e){return e===null||typeof e!="object"?null:(e=Rl&&e[Rl]||e["@@iterator"],typeof e=="function"?e:null)}var yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wd=Object.assign,jd={};function at(e,n,t){this.props=e,this.context=n,this.refs=jd,this.updater=t||yd}at.prototype.isReactComponent={};at.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};at.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kd(){}kd.prototype=at.prototype;function Es(e,n,t){this.props=e,this.context=n,this.refs=jd,this.updater=t||yd}var As=Es.prototype=new kd;As.constructor=Es;wd(As,at.prototype);As.isPureReactComponent=!0;var zl=Array.isArray,Nd=Object.prototype.hasOwnProperty,Ts={current:null},Cd={key:!0,ref:!0,__self:!0,__source:!0};function Sd(e,n,t){var a,i={},o=null,s=null;if(n!=null)for(a in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)Nd.call(n,a)&&!Cd.hasOwnProperty(a)&&(i[a]=n[a]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:ra,type:e,key:o,ref:s,props:i,_owner:Ts.current}}function Uh(e,n){return{$$typeof:ra,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Is(e){return typeof e=="object"&&e!==null&&e.$$typeof===ra}function Zh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ol=/\/+/g;function $i(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Zh(""+e.key):n.toString(36)}function Ra(e,n,t,a,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ra:case Rh:s=!0}}if(s)return s=e,i=i(s),e=a===""?"."+$i(s,0):a,zl(i)?(t="",e!=null&&(t=e.replace(Ol,"$&/")+"/"),Ra(i,n,t,"",function(d){return d})):i!=null&&(Is(i)&&(i=Uh(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ol,"$&/")+"/")+e)),n.push(i)),1;if(s=0,a=a===""?".":a+":",zl(e))for(var l=0;l<e.length;l++){o=e[l];var c=a+$i(o,l);s+=Ra(o,n,t,c,i)}else if(c=Fh(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=a+$i(o,l++),s+=Ra(o,n,t,c,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function ua(e,n,t){if(e==null)return e;var a=[],i=0;return Ra(e,a,"","",function(o){return n.call(t,o,i++)}),a}function Kh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},za={transition:null},Hh={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:za,ReactCurrentOwner:Ts};function Ed(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:ua,forEach:function(e,n,t){ua(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ua(e,function(){n++}),n},toArray:function(e){return ua(e,function(n){return n})||[]},only:function(e){if(!Is(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=at;X.Fragment=zh;X.Profiler=Dh;X.PureComponent=Es;X.StrictMode=Oh;X.Suspense=Mh;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hh;X.act=Ed;X.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=wd({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=Ts.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)Nd.call(n,c)&&!Cd.hasOwnProperty(c)&&(a[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)a.children=t;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:ra,type:e.type,key:i,ref:o,props:a,_owner:s}};X.createContext=function(e){return e={$$typeof:Ph,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lh,_context:e},e.Consumer=e};X.createElement=Sd;X.createFactory=function(e){var n=Sd.bind(null,e);return n.type=e,n};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:_h,render:e}};X.isValidElement=Is;X.lazy=function(e){return{$$typeof:Bh,_payload:{_status:-1,_result:e},_init:Kh}};X.memo=function(e,n){return{$$typeof:Vh,type:e,compare:n===void 0?null:n}};X.startTransition=function(e){var n=za.transition;za.transition={};try{e()}finally{za.transition=n}};X.unstable_act=Ed;X.useCallback=function(e,n){return _e.current.useCallback(e,n)};X.useContext=function(e){return _e.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};X.useEffect=function(e,n){return _e.current.useEffect(e,n)};X.useId=function(){return _e.current.useId()};X.useImperativeHandle=function(e,n,t){return _e.current.useImperativeHandle(e,n,t)};X.useInsertionEffect=function(e,n){return _e.current.useInsertionEffect(e,n)};X.useLayoutEffect=function(e,n){return _e.current.useLayoutEffect(e,n)};X.useMemo=function(e,n){return _e.current.useMemo(e,n)};X.useReducer=function(e,n,t){return _e.current.useReducer(e,n,t)};X.useRef=function(e){return _e.current.useRef(e)};X.useState=function(e){return _e.current.useState(e)};X.useSyncExternalStore=function(e,n,t){return _e.current.useSyncExternalStore(e,n,t)};X.useTransition=function(){return _e.current.useTransition()};X.version="18.3.1";bd.exports=X;var b=bd.exports;const $h=Ih(b),Wh=Th({__proto__:null,default:$h},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh=b,Yh=Symbol.for("react.element"),Gh=Symbol.for("react.fragment"),Jh=Object.prototype.hasOwnProperty,Qh=qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xh={key:!0,ref:!0,__self:!0,__source:!0};function Ad(e,n,t){var a,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(a in n)Jh.call(n,a)&&!Xh.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)i[a]===void 0&&(i[a]=n[a]);return{$$typeof:Yh,type:e,key:o,ref:s,props:i,_owner:Qh.current}}bi.Fragment=Gh;bi.jsx=Ad;bi.jsxs=Ad;vd.exports=bi;var r=vd.exports,Td={exports:{}},Xe={},Id={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(L,W){var T=L.length;L.push(W);e:for(;0<T;){var B=T-1>>>1,P=L[B];if(0<i(P,W))L[B]=W,L[T]=P,T=B;else break e}}function t(L){return L.length===0?null:L[0]}function a(L){if(L.length===0)return null;var W=L[0],T=L.pop();if(T!==W){L[0]=T;e:for(var B=0,P=L.length,ee=P>>>1;B<ee;){var V=2*(B+1)-1,se=L[V],te=V+1,xe=L[te];if(0>i(se,T))te<P&&0>i(xe,se)?(L[B]=xe,L[te]=T,B=te):(L[B]=se,L[V]=T,B=V);else if(te<P&&0>i(xe,T))L[B]=xe,L[te]=T,B=te;else break e}}return W}function i(L,W){var T=L.sortIndex-W.sortIndex;return T!==0?T:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],d=[],p=1,u=null,m=3,y=!1,g=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var W=t(d);W!==null;){if(W.callback===null)a(d);else if(W.startTime<=L)a(d),W.sortIndex=W.expirationTime,n(c,W);else break;W=t(d)}}function j(L){if(x=!1,v(L),!g)if(t(c)!==null)g=!0,pe(N);else{var W=t(d);W!==null&&Be(j,W.startTime-L)}}function N(L,W){g=!1,x&&(x=!1,f(z),z=-1),y=!0;var T=m;try{for(v(W),u=t(c);u!==null&&(!(u.expirationTime>W)||L&&!H());){var B=u.callback;if(typeof B=="function"){u.callback=null,m=u.priorityLevel;var P=B(u.expirationTime<=W);W=e.unstable_now(),typeof P=="function"?u.callback=P:u===t(c)&&a(c),v(W)}else a(c);u=t(c)}if(u!==null)var ee=!0;else{var V=t(d);V!==null&&Be(j,V.startTime-W),ee=!1}return ee}finally{u=null,m=T,y=!1}}var R=!1,D=null,z=-1,F=5,S=-1;function H(){return!(e.unstable_now()-S<F)}function J(){if(D!==null){var L=e.unstable_now();S=L;var W=!0;try{W=D(!0,L)}finally{W?q():(R=!1,D=null)}}else R=!1}var q;if(typeof h=="function")q=function(){h(J)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,on=Q.port2;Q.port1.onmessage=J,q=function(){on.postMessage(null)}}else q=function(){w(J,0)};function pe(L){D=L,R||(R=!0,q())}function Be(L,W){z=w(function(){L(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,pe(N))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var T=m;m=W;try{return L()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var T=m;m=L;try{return W()}finally{m=T}},e.unstable_scheduleCallback=function(L,W,T){var B=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?B+T:B):T=B,L){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=T+P,L={id:p++,callback:W,priorityLevel:L,startTime:T,expirationTime:P,sortIndex:-1},T>B?(L.sortIndex=T,n(d,L),t(c)===null&&L===t(d)&&(x?(f(z),z=-1):x=!0,Be(j,T-B))):(L.sortIndex=P,n(c,L),g||y||(g=!0,pe(N))),L},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(L){var W=m;return function(){var T=m;m=W;try{return L.apply(this,arguments)}finally{m=T}}}})(Rd);Id.exports=Rd;var ef=Id.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf=b,Qe=ef;function I(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zd=new Set,Pt={};function Ar(e,n){Gr(e,n),Gr(e+"Capture",n)}function Gr(e,n){for(Pt[e]=n,e=0;e<n.length;e++)zd.add(n[e])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),No=Object.prototype.hasOwnProperty,rf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dl={},Ll={};function tf(e){return No.call(Ll,e)?!0:No.call(Dl,e)?!1:rf.test(e)?Ll[e]=!0:(Dl[e]=!0,!1)}function af(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function of(e,n,t,a){if(n===null||typeof n>"u"||af(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Me(e,n,t,a,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Te[n]=new Me(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rs=/[\-:]([a-z])/g;function zs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Rs,zs);Te[n]=new Me(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Rs,zs);Te[n]=new Me(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Rs,zs);Te[n]=new Me(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Os(e,n,t,a){var i=Te.hasOwnProperty(n)?Te[n]:null;(i!==null?i.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(of(n,t,i,a)&&(t=null),a||i===null?tf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,a=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Bn=nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),zr=Symbol.for("react.portal"),Or=Symbol.for("react.fragment"),Ds=Symbol.for("react.strict_mode"),Co=Symbol.for("react.profiler"),Od=Symbol.for("react.provider"),Dd=Symbol.for("react.context"),Ls=Symbol.for("react.forward_ref"),So=Symbol.for("react.suspense"),Eo=Symbol.for("react.suspense_list"),Ps=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),Ld=Symbol.for("react.offscreen"),Pl=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=Pl&&e[Pl]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Wi;function kt(e){if(Wi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Wi=n&&n[1]||""}return`
`+Wi+e}var qi=!1;function Yi(e,n){if(!e||qi)return"";qi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var a=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){a=d}e.call(n.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=a.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{qi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?kt(e):""}function sf(e){switch(e.tag){case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return kt("Suspense");case 19:return kt("SuspenseList");case 0:case 2:case 15:return e=Yi(e.type,!1),e;case 11:return e=Yi(e.type.render,!1),e;case 1:return e=Yi(e.type,!0),e;default:return""}}function Ao(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Or:return"Fragment";case zr:return"Portal";case Co:return"Profiler";case Ds:return"StrictMode";case So:return"Suspense";case Eo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dd:return(e.displayName||"Context")+".Consumer";case Od:return(e._context.displayName||"Context")+".Provider";case Ls:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ps:return n=e.displayName||null,n!==null?n:Ao(e.type)||"Memo";case Zn:n=e._payload,e=e._init;try{return Ao(e(n))}catch{}}return null}function lf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ao(n);case 8:return n===Ds?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ir(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cf(e){var n=Pd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fa(e){e._valueTracker||(e._valueTracker=cf(e))}function _d(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Pd(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function $a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function To(e,n){var t=n.checked;return fe({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function _l(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=ir(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Md(e,n){n=n.checked,n!=null&&Os(e,"checked",n,!1)}function Io(e,n){Md(e,n);var t=ir(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ro(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ro(e,n.type,ir(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ml(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ro(e,n,t){(n!=="number"||$a(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Nt=Array.isArray;function Kr(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+ir(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function zo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(I(91));return fe({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(I(92));if(Nt(t)){if(1<t.length)throw Error(I(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ir(t)}}function Vd(e,n){var t=ir(n.value),a=ir(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function Bl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Bd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Bd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ma,Fd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function _t(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},df=["Webkit","ms","Moz","O"];Object.keys(Et).forEach(function(e){df.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Et[n]=Et[e]})});function Ud(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Et.hasOwnProperty(e)&&Et[e]?(""+n).trim():n+"px"}function Zd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,i=Ud(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,i):e[t]=i}}var pf=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Do(e,n){if(n){if(pf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(I(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(I(61))}if(n.style!=null&&typeof n.style!="object")throw Error(I(62))}}function Lo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Po=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _o=null,Hr=null,$r=null;function Fl(e){if(e=ia(e)){if(typeof _o!="function")throw Error(I(280));var n=e.stateNode;n&&(n=Ni(n),_o(e.stateNode,e.type,n))}}function Kd(e){Hr?$r?$r.push(e):$r=[e]:Hr=e}function Hd(){if(Hr){var e=Hr,n=$r;if($r=Hr=null,Fl(e),n)for(e=0;e<n.length;e++)Fl(n[e])}}function $d(e,n){return e(n)}function Wd(){}var Gi=!1;function qd(e,n,t){if(Gi)return e(n,t);Gi=!0;try{return $d(e,n,t)}finally{Gi=!1,(Hr!==null||$r!==null)&&(Wd(),Hd())}}function Mt(e,n){var t=e.stateNode;if(t===null)return null;var a=Ni(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(I(231,n,typeof t));return t}var Mo=!1;if(Pn)try{var ht={};Object.defineProperty(ht,"passive",{get:function(){Mo=!0}}),window.addEventListener("test",ht,ht),window.removeEventListener("test",ht,ht)}catch{Mo=!1}function uf(e,n,t,a,i,o,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(p){this.onError(p)}}var At=!1,Wa=null,qa=!1,Vo=null,hf={onError:function(e){At=!0,Wa=e}};function ff(e,n,t,a,i,o,s,l,c){At=!1,Wa=null,uf.apply(hf,arguments)}function mf(e,n,t,a,i,o,s,l,c){if(ff.apply(this,arguments),At){if(At){var d=Wa;At=!1,Wa=null}else throw Error(I(198));qa||(qa=!0,Vo=d)}}function Tr(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Yd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ul(e){if(Tr(e)!==e)throw Error(I(188))}function gf(e){var n=e.alternate;if(!n){if(n=Tr(e),n===null)throw Error(I(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Ul(i),e;if(o===a)return Ul(i),n;o=o.sibling}throw Error(I(188))}if(t.return!==a.return)t=i,a=o;else{for(var s=!1,l=i.child;l;){if(l===t){s=!0,t=i,a=o;break}if(l===a){s=!0,a=i,t=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===t){s=!0,t=o,a=i;break}if(l===a){s=!0,a=o,t=i;break}l=l.sibling}if(!s)throw Error(I(189))}}if(t.alternate!==a)throw Error(I(190))}if(t.tag!==3)throw Error(I(188));return t.stateNode.current===t?e:n}function Gd(e){return e=gf(e),e!==null?Jd(e):null}function Jd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Jd(e);if(n!==null)return n;e=e.sibling}return null}var Qd=Qe.unstable_scheduleCallback,Zl=Qe.unstable_cancelCallback,xf=Qe.unstable_shouldYield,vf=Qe.unstable_requestPaint,ve=Qe.unstable_now,bf=Qe.unstable_getCurrentPriorityLevel,Ms=Qe.unstable_ImmediatePriority,Xd=Qe.unstable_UserBlockingPriority,Ya=Qe.unstable_NormalPriority,yf=Qe.unstable_LowPriority,ep=Qe.unstable_IdlePriority,yi=null,En=null;function wf(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(yi,e,void 0,(e.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:Nf,jf=Math.log,kf=Math.LN2;function Nf(e){return e>>>=0,e===0?32:31-(jf(e)/kf|0)|0}var ga=64,xa=4194304;function Ct(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ga(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var l=s&~i;l!==0?a=Ct(l):(o&=s,o!==0&&(a=Ct(o)))}else s=t&~i,s!==0?a=Ct(s):o!==0&&(a=Ct(o));if(a===0)return 0;if(n!==0&&n!==a&&!(n&i)&&(i=a&-a,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-vn(n),i=1<<t,a|=e[t],n&=~i;return a}function Cf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sf(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-vn(o),l=1<<s,c=i[s];c===-1?(!(l&t)||l&a)&&(i[s]=Cf(l,n)):c<=n&&(e.expiredLanes|=l),o&=~l}}function Bo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function np(){var e=ga;return ga<<=1,!(ga&4194240)&&(ga=64),e}function Ji(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ta(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-vn(n),e[n]=t}function Ef(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-vn(t),o=1<<i;n[i]=0,a[i]=-1,e[i]=-1,t&=~o}}function Vs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-vn(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}var ie=0;function rp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tp,Bs,ap,ip,op,Fo=!1,va=[],Gn=null,Jn=null,Qn=null,Vt=new Map,Bt=new Map,Hn=[],Af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kl(e,n){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Vt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bt.delete(n.pointerId)}}function ft(e,n,t,a,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},n!==null&&(n=ia(n),n!==null&&Bs(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Tf(e,n,t,a,i){switch(n){case"focusin":return Gn=ft(Gn,e,n,t,a,i),!0;case"dragenter":return Jn=ft(Jn,e,n,t,a,i),!0;case"mouseover":return Qn=ft(Qn,e,n,t,a,i),!0;case"pointerover":var o=i.pointerId;return Vt.set(o,ft(Vt.get(o)||null,e,n,t,a,i)),!0;case"gotpointercapture":return o=i.pointerId,Bt.set(o,ft(Bt.get(o)||null,e,n,t,a,i)),!0}return!1}function sp(e){var n=mr(e.target);if(n!==null){var t=Tr(n);if(t!==null){if(n=t.tag,n===13){if(n=Yd(t),n!==null){e.blockedOn=n,op(e.priority,function(){ap(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Uo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Po=a,t.target.dispatchEvent(a),Po=null}else return n=ia(t),n!==null&&Bs(n),e.blockedOn=t,!1;n.shift()}return!0}function Hl(e,n,t){Oa(e)&&t.delete(n)}function If(){Fo=!1,Gn!==null&&Oa(Gn)&&(Gn=null),Jn!==null&&Oa(Jn)&&(Jn=null),Qn!==null&&Oa(Qn)&&(Qn=null),Vt.forEach(Hl),Bt.forEach(Hl)}function mt(e,n){e.blockedOn===n&&(e.blockedOn=null,Fo||(Fo=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,If)))}function Ft(e){function n(i){return mt(i,e)}if(0<va.length){mt(va[0],e);for(var t=1;t<va.length;t++){var a=va[t];a.blockedOn===e&&(a.blockedOn=null)}}for(Gn!==null&&mt(Gn,e),Jn!==null&&mt(Jn,e),Qn!==null&&mt(Qn,e),Vt.forEach(n),Bt.forEach(n),t=0;t<Hn.length;t++)a=Hn[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<Hn.length&&(t=Hn[0],t.blockedOn===null);)sp(t),t.blockedOn===null&&Hn.shift()}var Wr=Bn.ReactCurrentBatchConfig,Ja=!0;function Rf(e,n,t,a){var i=ie,o=Wr.transition;Wr.transition=null;try{ie=1,Fs(e,n,t,a)}finally{ie=i,Wr.transition=o}}function zf(e,n,t,a){var i=ie,o=Wr.transition;Wr.transition=null;try{ie=4,Fs(e,n,t,a)}finally{ie=i,Wr.transition=o}}function Fs(e,n,t,a){if(Ja){var i=Uo(e,n,t,a);if(i===null)so(e,n,a,Qa,t),Kl(e,a);else if(Tf(i,e,n,t,a))a.stopPropagation();else if(Kl(e,a),n&4&&-1<Af.indexOf(e)){for(;i!==null;){var o=ia(i);if(o!==null&&tp(o),o=Uo(e,n,t,a),o===null&&so(e,n,a,Qa,t),o===i)break;i=o}i!==null&&a.stopPropagation()}else so(e,n,a,null,t)}}var Qa=null;function Uo(e,n,t,a){if(Qa=null,e=_s(a),e=mr(e),e!==null)if(n=Tr(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Yd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Qa=e,null}function lp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bf()){case Ms:return 1;case Xd:return 4;case Ya:case yf:return 16;case ep:return 536870912;default:return 16}default:return 16}}var Wn=null,Us=null,Da=null;function cp(){if(Da)return Da;var e,n=Us,t=n.length,a,i="value"in Wn?Wn.value:Wn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===i[o-a];a++);return Da=i.slice(e,1<a?1-a:void 0)}function La(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ba(){return!0}function $l(){return!1}function en(e){function n(t,a,i,o,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ba:$l,this.isPropagationStopped=$l,this}return fe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),n}var it={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=en(it),aa=fe({},it,{view:0,detail:0}),Of=en(aa),Qi,Xi,gt,wi=fe({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gt&&(gt&&e.type==="mousemove"?(Qi=e.screenX-gt.screenX,Xi=e.screenY-gt.screenY):Xi=Qi=0,gt=e),Qi)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),Wl=en(wi),Df=fe({},wi,{dataTransfer:0}),Lf=en(Df),Pf=fe({},aa,{relatedTarget:0}),eo=en(Pf),_f=fe({},it,{animationName:0,elapsedTime:0,pseudoElement:0}),Mf=en(_f),Vf=fe({},it,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bf=en(Vf),Ff=fe({},it,{data:0}),ql=en(Ff),Uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Kf[e])?!!n[e]:!1}function Ks(){return Hf}var $f=fe({},aa,{key:function(e){if(e.key){var n=Uf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=La(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(e){return e.type==="keypress"?La(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?La(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wf=en($f),qf=fe({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yl=en(qf),Yf=fe({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),Gf=en(Yf),Jf=fe({},it,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qf=en(Jf),Xf=fe({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),em=en(Xf),nm=[9,13,27,32],Hs=Pn&&"CompositionEvent"in window,Tt=null;Pn&&"documentMode"in document&&(Tt=document.documentMode);var rm=Pn&&"TextEvent"in window&&!Tt,dp=Pn&&(!Hs||Tt&&8<Tt&&11>=Tt),Gl=" ",Jl=!1;function pp(e,n){switch(e){case"keyup":return nm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function tm(e,n){switch(e){case"compositionend":return up(n);case"keypress":return n.which!==32?null:(Jl=!0,Gl);case"textInput":return e=n.data,e===Gl&&Jl?null:e;default:return null}}function am(e,n){if(Dr)return e==="compositionend"||!Hs&&pp(e,n)?(e=cp(),Da=Us=Wn=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var im={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ql(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!im[e.type]:n==="textarea"}function hp(e,n,t,a){Kd(a),n=Xa(n,"onChange"),0<n.length&&(t=new Zs("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var It=null,Ut=null;function om(e){Np(e,0)}function ji(e){var n=_r(e);if(_d(n))return e}function sm(e,n){if(e==="change")return n}var fp=!1;if(Pn){var no;if(Pn){var ro="oninput"in document;if(!ro){var Xl=document.createElement("div");Xl.setAttribute("oninput","return;"),ro=typeof Xl.oninput=="function"}no=ro}else no=!1;fp=no&&(!document.documentMode||9<document.documentMode)}function ec(){It&&(It.detachEvent("onpropertychange",mp),Ut=It=null)}function mp(e){if(e.propertyName==="value"&&ji(Ut)){var n=[];hp(n,Ut,e,_s(e)),qd(om,n)}}function lm(e,n,t){e==="focusin"?(ec(),It=n,Ut=t,It.attachEvent("onpropertychange",mp)):e==="focusout"&&ec()}function cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(Ut)}function dm(e,n){if(e==="click")return ji(n)}function pm(e,n){if(e==="input"||e==="change")return ji(n)}function um(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var yn=typeof Object.is=="function"?Object.is:um;function Zt(e,n){if(yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!No.call(n,i)||!yn(e[i],n[i]))return!1}return!0}function nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rc(e,n){var t=nc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=nc(t)}}function gp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xp(){for(var e=window,n=$a();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=$a(e.document)}return n}function $s(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function hm(e){var n=xp(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&gp(t.ownerDocument.documentElement,t)){if(a!==null&&$s(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(a.start,i);a=a.end===void 0?o:Math.min(a.end,i),!e.extend&&o>a&&(i=a,a=o,o=i),i=rc(t,o);var s=rc(t,a);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>a?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fm=Pn&&"documentMode"in document&&11>=document.documentMode,Lr=null,Zo=null,Rt=null,Ko=!1;function tc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ko||Lr==null||Lr!==$a(a)||(a=Lr,"selectionStart"in a&&$s(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Rt&&Zt(Rt,a)||(Rt=a,a=Xa(Zo,"onSelect"),0<a.length&&(n=new Zs("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Lr)))}function ya(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Pr={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},to={},vp={};Pn&&(vp=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function ki(e){if(to[e])return to[e];if(!Pr[e])return e;var n=Pr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in vp)return to[e]=n[t];return e}var bp=ki("animationend"),yp=ki("animationiteration"),wp=ki("animationstart"),jp=ki("transitionend"),kp=new Map,ac="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(e,n){kp.set(e,n),Ar(n,[e])}for(var ao=0;ao<ac.length;ao++){var io=ac[ao],mm=io.toLowerCase(),gm=io[0].toUpperCase()+io.slice(1);sr(mm,"on"+gm)}sr(bp,"onAnimationEnd");sr(yp,"onAnimationIteration");sr(wp,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(jp,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var St="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xm=new Set("cancel close invalid load scroll toggle".split(" ").concat(St));function ic(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,mf(a,n,void 0,e),e.currentTarget=null}function Np(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var s=a.length-1;0<=s;s--){var l=a[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;ic(i,l,d),o=c}else for(s=0;s<a.length;s++){if(l=a[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;ic(i,l,d),o=c}}}if(qa)throw e=Vo,qa=!1,Vo=null,e}function le(e,n){var t=n[Yo];t===void 0&&(t=n[Yo]=new Set);var a=e+"__bubble";t.has(a)||(Cp(n,e,2,!1),t.add(a))}function oo(e,n,t){var a=0;n&&(a|=4),Cp(t,e,a,n)}var wa="_reactListening"+Math.random().toString(36).slice(2);function Kt(e){if(!e[wa]){e[wa]=!0,zd.forEach(function(t){t!=="selectionchange"&&(xm.has(t)||oo(t,!1,e),oo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wa]||(n[wa]=!0,oo("selectionchange",!1,n))}}function Cp(e,n,t,a){switch(lp(n)){case 1:var i=Rf;break;case 4:i=zf;break;default:i=Fs}t=i.bind(null,n,t,e),i=void 0,!Mo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function so(e,n,t,a,i){var o=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=a.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=mr(l),s===null)return;if(c=s.tag,c===5||c===6){a=o=s;continue e}l=l.parentNode}}a=a.return}qd(function(){var d=o,p=_s(t),u=[];e:{var m=kp.get(e);if(m!==void 0){var y=Zs,g=e;switch(e){case"keypress":if(La(t)===0)break e;case"keydown":case"keyup":y=Wf;break;case"focusin":g="focus",y=eo;break;case"focusout":g="blur",y=eo;break;case"beforeblur":case"afterblur":y=eo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Gf;break;case bp:case yp:case wp:y=Mf;break;case jp:y=Qf;break;case"scroll":y=Of;break;case"wheel":y=em;break;case"copy":case"cut":case"paste":y=Bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Yl}var x=(n&4)!==0,w=!x&&e==="scroll",f=x?m!==null?m+"Capture":null:m;x=[];for(var h=d,v;h!==null;){v=h;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,f!==null&&(j=Mt(h,f),j!=null&&x.push(Ht(h,j,v)))),w)break;h=h.return}0<x.length&&(m=new y(m,g,null,t,p),u.push({event:m,listeners:x}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==Po&&(g=t.relatedTarget||t.fromElement)&&(mr(g)||g[_n]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(g=t.relatedTarget||t.toElement,y=d,g=g?mr(g):null,g!==null&&(w=Tr(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=d),y!==g)){if(x=Wl,j="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Yl,j="onPointerLeave",f="onPointerEnter",h="pointer"),w=y==null?m:_r(y),v=g==null?m:_r(g),m=new x(j,h+"leave",y,t,p),m.target=w,m.relatedTarget=v,j=null,mr(p)===d&&(x=new x(f,h+"enter",g,t,p),x.target=v,x.relatedTarget=w,j=x),w=j,y&&g)n:{for(x=y,f=g,h=0,v=x;v;v=Ir(v))h++;for(v=0,j=f;j;j=Ir(j))v++;for(;0<h-v;)x=Ir(x),h--;for(;0<v-h;)f=Ir(f),v--;for(;h--;){if(x===f||f!==null&&x===f.alternate)break n;x=Ir(x),f=Ir(f)}x=null}else x=null;y!==null&&oc(u,m,y,x,!1),g!==null&&w!==null&&oc(u,w,g,x,!0)}}e:{if(m=d?_r(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var N=sm;else if(Ql(m))if(fp)N=pm;else{N=cm;var R=lm}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=dm);if(N&&(N=N(e,d))){hp(u,N,t,p);break e}R&&R(e,m,d),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&Ro(m,"number",m.value)}switch(R=d?_r(d):window,e){case"focusin":(Ql(R)||R.contentEditable==="true")&&(Lr=R,Zo=d,Rt=null);break;case"focusout":Rt=Zo=Lr=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,tc(u,t,p);break;case"selectionchange":if(fm)break;case"keydown":case"keyup":tc(u,t,p)}var D;if(Hs)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Dr?pp(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(dp&&t.locale!=="ko"&&(Dr||z!=="onCompositionStart"?z==="onCompositionEnd"&&Dr&&(D=cp()):(Wn=p,Us="value"in Wn?Wn.value:Wn.textContent,Dr=!0)),R=Xa(d,z),0<R.length&&(z=new ql(z,e,null,t,p),u.push({event:z,listeners:R}),D?z.data=D:(D=up(t),D!==null&&(z.data=D)))),(D=rm?tm(e,t):am(e,t))&&(d=Xa(d,"onBeforeInput"),0<d.length&&(p=new ql("onBeforeInput","beforeinput",null,t,p),u.push({event:p,listeners:d}),p.data=D))}Np(u,n)})}function Ht(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Xa(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mt(e,t),o!=null&&a.unshift(Ht(e,o,i)),o=Mt(e,n),o!=null&&a.push(Ht(e,o,i))),e=e.return}return a}function Ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oc(e,n,t,a,i){for(var o=n._reactName,s=[];t!==null&&t!==a;){var l=t,c=l.alternate,d=l.stateNode;if(c!==null&&c===a)break;l.tag===5&&d!==null&&(l=d,i?(c=Mt(t,o),c!=null&&s.unshift(Ht(t,c,l))):i||(c=Mt(t,o),c!=null&&s.push(Ht(t,c,l)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var vm=/\r\n?/g,bm=/\u0000|\uFFFD/g;function sc(e){return(typeof e=="string"?e:""+e).replace(vm,`
`).replace(bm,"")}function ja(e,n,t){if(n=sc(n),sc(e)!==n&&t)throw Error(I(425))}function ei(){}var Ho=null,$o=null;function Wo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qo=typeof setTimeout=="function"?setTimeout:void 0,ym=typeof clearTimeout=="function"?clearTimeout:void 0,lc=typeof Promise=="function"?Promise:void 0,wm=typeof queueMicrotask=="function"?queueMicrotask:typeof lc<"u"?function(e){return lc.resolve(null).then(e).catch(jm)}:qo;function jm(e){setTimeout(function(){throw e})}function lo(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(a===0){e.removeChild(i),Ft(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=i}while(t);Ft(n)}function Xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function cc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ot=Math.random().toString(36).slice(2),Sn="__reactFiber$"+ot,$t="__reactProps$"+ot,_n="__reactContainer$"+ot,Yo="__reactEvents$"+ot,km="__reactListeners$"+ot,Nm="__reactHandles$"+ot;function mr(e){var n=e[Sn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[_n]||t[Sn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=cc(e);e!==null;){if(t=e[Sn])return t;e=cc(e)}return n}e=t,t=e.parentNode}return null}function ia(e){return e=e[Sn]||e[_n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Ni(e){return e[$t]||null}var Go=[],Mr=-1;function lr(e){return{current:e}}function ce(e){0>Mr||(e.current=Go[Mr],Go[Mr]=null,Mr--)}function oe(e,n){Mr++,Go[Mr]=e.current,e.current=n}var or={},De=lr(or),Ze=lr(!1),jr=or;function Jr(e,n){var t=e.type.contextTypes;if(!t)return or;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function ni(){ce(Ze),ce(De)}function dc(e,n,t){if(De.current!==or)throw Error(I(168));oe(De,n),oe(Ze,t)}function Sp(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var i in a)if(!(i in n))throw Error(I(108,lf(e)||"Unknown",i));return fe({},t,a)}function ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||or,jr=De.current,oe(De,e),oe(Ze,Ze.current),!0}function pc(e,n,t){var a=e.stateNode;if(!a)throw Error(I(169));t?(e=Sp(e,n,jr),a.__reactInternalMemoizedMergedChildContext=e,ce(Ze),ce(De),oe(De,e)):ce(Ze),oe(Ze,t)}var zn=null,Ci=!1,co=!1;function Ep(e){zn===null?zn=[e]:zn.push(e)}function Cm(e){Ci=!0,Ep(e)}function cr(){if(!co&&zn!==null){co=!0;var e=0,n=ie;try{var t=zn;for(ie=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}zn=null,Ci=!1}catch(i){throw zn!==null&&(zn=zn.slice(e+1)),Qd(Ms,cr),i}finally{ie=n,co=!1}}return null}var Vr=[],Br=0,ti=null,ai=0,sn=[],ln=0,kr=null,On=1,Dn="";function hr(e,n){Vr[Br++]=ai,Vr[Br++]=ti,ti=e,ai=n}function Ap(e,n,t){sn[ln++]=On,sn[ln++]=Dn,sn[ln++]=kr,kr=e;var a=On;e=Dn;var i=32-vn(a)-1;a&=~(1<<i),t+=1;var o=32-vn(n)+i;if(30<o){var s=i-i%5;o=(a&(1<<s)-1).toString(32),a>>=s,i-=s,On=1<<32-vn(n)+i|t<<i|a,Dn=o+e}else On=1<<o|t<<i|a,Dn=e}function Ws(e){e.return!==null&&(hr(e,1),Ap(e,1,0))}function qs(e){for(;e===ti;)ti=Vr[--Br],Vr[Br]=null,ai=Vr[--Br],Vr[Br]=null;for(;e===kr;)kr=sn[--ln],sn[ln]=null,Dn=sn[--ln],sn[ln]=null,On=sn[--ln],sn[ln]=null}var Je=null,Ge=null,de=!1,xn=null;function Tp(e,n){var t=cn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function uc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Je=e,Ge=Xn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Je=e,Ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=kr!==null?{id:On,overflow:Dn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=cn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Je=e,Ge=null,!0):!1;default:return!1}}function Jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qo(e){if(de){var n=Ge;if(n){var t=n;if(!uc(e,n)){if(Jo(e))throw Error(I(418));n=Xn(t.nextSibling);var a=Je;n&&uc(e,n)?Tp(a,t):(e.flags=e.flags&-4097|2,de=!1,Je=e)}}else{if(Jo(e))throw Error(I(418));e.flags=e.flags&-4097|2,de=!1,Je=e}}}function hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function ka(e){if(e!==Je)return!1;if(!de)return hc(e),de=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Wo(e.type,e.memoizedProps)),n&&(n=Ge)){if(Jo(e))throw Ip(),Error(I(418));for(;n;)Tp(e,n),n=Xn(n.nextSibling)}if(hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ge=Xn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ge=null}}else Ge=Je?Xn(e.stateNode.nextSibling):null;return!0}function Ip(){for(var e=Ge;e;)e=Xn(e.nextSibling)}function Qr(){Ge=Je=null,de=!1}function Ys(e){xn===null?xn=[e]:xn.push(e)}var Sm=Bn.ReactCurrentBatchConfig;function xt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(I(309));var a=t.stateNode}if(!a)throw Error(I(147,e));var i=a,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(I(284));if(!t._owner)throw Error(I(290,e))}return e}function Na(e,n){throw e=Object.prototype.toString.call(n),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function fc(e){var n=e._init;return n(e._payload)}function Rp(e){function n(f,h){if(e){var v=f.deletions;v===null?(f.deletions=[h],f.flags|=16):v.push(h)}}function t(f,h){if(!e)return null;for(;h!==null;)n(f,h),h=h.sibling;return null}function a(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=tr(f,h),f.index=0,f.sibling=null,f}function o(f,h,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<h?(f.flags|=2,h):v):(f.flags|=2,h)):(f.flags|=1048576,h)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,h,v,j){return h===null||h.tag!==6?(h=xo(v,f.mode,j),h.return=f,h):(h=i(h,v),h.return=f,h)}function c(f,h,v,j){var N=v.type;return N===Or?p(f,h,v.props.children,j,v.key):h!==null&&(h.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Zn&&fc(N)===h.type)?(j=i(h,v.props),j.ref=xt(f,h,v),j.return=f,j):(j=Ua(v.type,v.key,v.props,null,f.mode,j),j.ref=xt(f,h,v),j.return=f,j)}function d(f,h,v,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=vo(v,f.mode,j),h.return=f,h):(h=i(h,v.children||[]),h.return=f,h)}function p(f,h,v,j,N){return h===null||h.tag!==7?(h=yr(v,f.mode,j,N),h.return=f,h):(h=i(h,v),h.return=f,h)}function u(f,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=xo(""+h,f.mode,v),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ha:return v=Ua(h.type,h.key,h.props,null,f.mode,v),v.ref=xt(f,null,h),v.return=f,v;case zr:return h=vo(h,f.mode,v),h.return=f,h;case Zn:var j=h._init;return u(f,j(h._payload),v)}if(Nt(h)||ut(h))return h=yr(h,f.mode,v,null),h.return=f,h;Na(f,h)}return null}function m(f,h,v,j){var N=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:l(f,h,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ha:return v.key===N?c(f,h,v,j):null;case zr:return v.key===N?d(f,h,v,j):null;case Zn:return N=v._init,m(f,h,N(v._payload),j)}if(Nt(v)||ut(v))return N!==null?null:p(f,h,v,j,null);Na(f,v)}return null}function y(f,h,v,j,N){if(typeof j=="string"&&j!==""||typeof j=="number")return f=f.get(v)||null,l(h,f,""+j,N);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ha:return f=f.get(j.key===null?v:j.key)||null,c(h,f,j,N);case zr:return f=f.get(j.key===null?v:j.key)||null,d(h,f,j,N);case Zn:var R=j._init;return y(f,h,v,R(j._payload),N)}if(Nt(j)||ut(j))return f=f.get(v)||null,p(h,f,j,N,null);Na(h,j)}return null}function g(f,h,v,j){for(var N=null,R=null,D=h,z=h=0,F=null;D!==null&&z<v.length;z++){D.index>z?(F=D,D=null):F=D.sibling;var S=m(f,D,v[z],j);if(S===null){D===null&&(D=F);break}e&&D&&S.alternate===null&&n(f,D),h=o(S,h,z),R===null?N=S:R.sibling=S,R=S,D=F}if(z===v.length)return t(f,D),de&&hr(f,z),N;if(D===null){for(;z<v.length;z++)D=u(f,v[z],j),D!==null&&(h=o(D,h,z),R===null?N=D:R.sibling=D,R=D);return de&&hr(f,z),N}for(D=a(f,D);z<v.length;z++)F=y(D,f,z,v[z],j),F!==null&&(e&&F.alternate!==null&&D.delete(F.key===null?z:F.key),h=o(F,h,z),R===null?N=F:R.sibling=F,R=F);return e&&D.forEach(function(H){return n(f,H)}),de&&hr(f,z),N}function x(f,h,v,j){var N=ut(v);if(typeof N!="function")throw Error(I(150));if(v=N.call(v),v==null)throw Error(I(151));for(var R=N=null,D=h,z=h=0,F=null,S=v.next();D!==null&&!S.done;z++,S=v.next()){D.index>z?(F=D,D=null):F=D.sibling;var H=m(f,D,S.value,j);if(H===null){D===null&&(D=F);break}e&&D&&H.alternate===null&&n(f,D),h=o(H,h,z),R===null?N=H:R.sibling=H,R=H,D=F}if(S.done)return t(f,D),de&&hr(f,z),N;if(D===null){for(;!S.done;z++,S=v.next())S=u(f,S.value,j),S!==null&&(h=o(S,h,z),R===null?N=S:R.sibling=S,R=S);return de&&hr(f,z),N}for(D=a(f,D);!S.done;z++,S=v.next())S=y(D,f,z,S.value,j),S!==null&&(e&&S.alternate!==null&&D.delete(S.key===null?z:S.key),h=o(S,h,z),R===null?N=S:R.sibling=S,R=S);return e&&D.forEach(function(J){return n(f,J)}),de&&hr(f,z),N}function w(f,h,v,j){if(typeof v=="object"&&v!==null&&v.type===Or&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ha:e:{for(var N=v.key,R=h;R!==null;){if(R.key===N){if(N=v.type,N===Or){if(R.tag===7){t(f,R.sibling),h=i(R,v.props.children),h.return=f,f=h;break e}}else if(R.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Zn&&fc(N)===R.type){t(f,R.sibling),h=i(R,v.props),h.ref=xt(f,R,v),h.return=f,f=h;break e}t(f,R);break}else n(f,R);R=R.sibling}v.type===Or?(h=yr(v.props.children,f.mode,j,v.key),h.return=f,f=h):(j=Ua(v.type,v.key,v.props,null,f.mode,j),j.ref=xt(f,h,v),j.return=f,f=j)}return s(f);case zr:e:{for(R=v.key;h!==null;){if(h.key===R)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){t(f,h.sibling),h=i(h,v.children||[]),h.return=f,f=h;break e}else{t(f,h);break}else n(f,h);h=h.sibling}h=vo(v,f.mode,j),h.return=f,f=h}return s(f);case Zn:return R=v._init,w(f,h,R(v._payload),j)}if(Nt(v))return g(f,h,v,j);if(ut(v))return x(f,h,v,j);Na(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(t(f,h.sibling),h=i(h,v),h.return=f,f=h):(t(f,h),h=xo(v,f.mode,j),h.return=f,f=h),s(f)):t(f,h)}return w}var Xr=Rp(!0),zp=Rp(!1),ii=lr(null),oi=null,Fr=null,Gs=null;function Js(){Gs=Fr=oi=null}function Qs(e){var n=ii.current;ce(ii),e._currentValue=n}function Xo(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function qr(e,n){oi=e,Gs=Fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ue=!0),e.firstContext=null)}function pn(e){var n=e._currentValue;if(Gs!==e)if(e={context:e,memoizedValue:n,next:null},Fr===null){if(oi===null)throw Error(I(308));Fr=e,oi.dependencies={lanes:0,firstContext:e}}else Fr=Fr.next=e;return n}var gr=null;function Xs(e){gr===null?gr=[e]:gr.push(e)}function Op(e,n,t,a){var i=n.interleaved;return i===null?(t.next=t,Xs(n)):(t.next=i.next,i.next=t),n.interleaved=t,Mn(e,a)}function Mn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Kn=!1;function el(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ln(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function er(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,ne&2){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,Mn(e,t)}return i=a.interleaved,i===null?(n.next=n,Xs(a)):(n.next=i.next,i.next=n),a.interleaved=n,Mn(e,t)}function Pa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Vs(e,t)}}function mc(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function si(e,n,t,a){var i=e.updateQueue;Kn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?o=d:s.next=d,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=c))}if(o!==null){var u=i.baseState;s=0,p=d=c=null,l=o;do{var m=l.lane,y=l.eventTime;if((a&m)===m){p!==null&&(p=p.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,x=l;switch(m=n,y=t,x.tag){case 1:if(g=x.payload,typeof g=="function"){u=g.call(y,u,m);break e}u=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,m=typeof g=="function"?g.call(y,u,m):g,m==null)break e;u=fe({},u,m);break e;case 2:Kn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=y,c=u):p=p.next=y,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(c=u),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Cr|=s,e.lanes=s,e.memoizedState=u}}function gc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],i=a.callback;if(i!==null){if(a.callback=null,a=t,typeof i!="function")throw Error(I(191,i));i.call(a)}}}var oa={},An=lr(oa),Wt=lr(oa),qt=lr(oa);function xr(e){if(e===oa)throw Error(I(174));return e}function nl(e,n){switch(oe(qt,n),oe(Wt,e),oe(An,oa),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Oo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Oo(n,e)}ce(An),oe(An,n)}function et(){ce(An),ce(Wt),ce(qt)}function Lp(e){xr(qt.current);var n=xr(An.current),t=Oo(n,e.type);n!==t&&(oe(Wt,e),oe(An,t))}function rl(e){Wt.current===e&&(ce(An),ce(Wt))}var ue=lr(0);function li(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var po=[];function tl(){for(var e=0;e<po.length;e++)po[e]._workInProgressVersionPrimary=null;po.length=0}var _a=Bn.ReactCurrentDispatcher,uo=Bn.ReactCurrentBatchConfig,Nr=0,he=null,we=null,Ne=null,ci=!1,zt=!1,Yt=0,Em=0;function Ie(){throw Error(I(321))}function al(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!yn(e[t],n[t]))return!1;return!0}function il(e,n,t,a,i,o){if(Nr=o,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_a.current=e===null||e.memoizedState===null?Rm:zm,e=t(a,i),zt){o=0;do{if(zt=!1,Yt=0,25<=o)throw Error(I(301));o+=1,Ne=we=null,n.updateQueue=null,_a.current=Om,e=t(a,i)}while(zt)}if(_a.current=di,n=we!==null&&we.next!==null,Nr=0,Ne=we=he=null,ci=!1,n)throw Error(I(300));return e}function ol(){var e=Yt!==0;return Yt=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?he.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function un(){if(we===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var n=Ne===null?he.memoizedState:Ne.next;if(n!==null)Ne=n,we=e;else{if(e===null)throw Error(I(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ne===null?he.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Gt(e,n){return typeof n=="function"?n(e):n}function ho(e){var n=un(),t=n.queue;if(t===null)throw Error(I(311));t.lastRenderedReducer=e;var a=we,i=a.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}a.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,a=a.baseState;var l=s=null,c=null,d=o;do{var p=d.lane;if((Nr&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var u={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=u,s=a):c=c.next=u,he.lanes|=p,Cr|=p}d=d.next}while(d!==null&&d!==o);c===null?s=a:c.next=l,yn(a,n.memoizedState)||(Ue=!0),n.memoizedState=a,n.baseState=s,n.baseQueue=c,t.lastRenderedState=a}if(e=t.interleaved,e!==null){i=e;do o=i.lane,he.lanes|=o,Cr|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function fo(e){var n=un(),t=n.queue;if(t===null)throw Error(I(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);yn(o,n.memoizedState)||(Ue=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,a]}function Pp(){}function _p(e,n){var t=he,a=un(),i=n(),o=!yn(a.memoizedState,i);if(o&&(a.memoizedState=i,Ue=!0),a=a.queue,sl(Bp.bind(null,t,a,e),[e]),a.getSnapshot!==n||o||Ne!==null&&Ne.memoizedState.tag&1){if(t.flags|=2048,Jt(9,Vp.bind(null,t,a,i,n),void 0,null),Ce===null)throw Error(I(349));Nr&30||Mp(t,n,i)}return i}function Mp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=he.updateQueue,n===null?(n={lastEffect:null,stores:null},he.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Vp(e,n,t,a){n.value=t,n.getSnapshot=a,Fp(n)&&Up(e)}function Bp(e,n,t){return t(function(){Fp(n)&&Up(e)})}function Fp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!yn(e,t)}catch{return!0}}function Up(e){var n=Mn(e,1);n!==null&&bn(n,e,1,-1)}function xc(e){var n=Cn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},n.queue=e,e=e.dispatch=Im.bind(null,he,e),[n.memoizedState,e]}function Jt(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=he.updateQueue,n===null?(n={lastEffect:null,stores:null},he.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Zp(){return un().memoizedState}function Ma(e,n,t,a){var i=Cn();he.flags|=e,i.memoizedState=Jt(1|n,t,void 0,a===void 0?null:a)}function Si(e,n,t,a){var i=un();a=a===void 0?null:a;var o=void 0;if(we!==null){var s=we.memoizedState;if(o=s.destroy,a!==null&&al(a,s.deps)){i.memoizedState=Jt(n,t,o,a);return}}he.flags|=e,i.memoizedState=Jt(1|n,t,o,a)}function vc(e,n){return Ma(8390656,8,e,n)}function sl(e,n){return Si(2048,8,e,n)}function Kp(e,n){return Si(4,2,e,n)}function Hp(e,n){return Si(4,4,e,n)}function $p(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wp(e,n,t){return t=t!=null?t.concat([e]):null,Si(4,4,$p.bind(null,n,e),t)}function ll(){}function qp(e,n){var t=un();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&al(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Yp(e,n){var t=un();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&al(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function Gp(e,n,t){return Nr&21?(yn(t,n)||(t=np(),he.lanes|=t,Cr|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=t)}function Am(e,n){var t=ie;ie=t!==0&&4>t?t:4,e(!0);var a=uo.transition;uo.transition={};try{e(!1),n()}finally{ie=t,uo.transition=a}}function Jp(){return un().memoizedState}function Tm(e,n,t){var a=rr(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},Qp(e))Xp(n,t);else if(t=Op(e,n,t,a),t!==null){var i=Pe();bn(t,e,a,i),eu(t,n,a)}}function Im(e,n,t){var a=rr(e),i={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qp(e))Xp(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,l=o(s,t);if(i.hasEagerState=!0,i.eagerState=l,yn(l,s)){var c=n.interleaved;c===null?(i.next=i,Xs(n)):(i.next=c.next,c.next=i),n.interleaved=i;return}}catch{}finally{}t=Op(e,n,i,a),t!==null&&(i=Pe(),bn(t,e,a,i),eu(t,n,a))}}function Qp(e){var n=e.alternate;return e===he||n!==null&&n===he}function Xp(e,n){zt=ci=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function eu(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Vs(e,t)}}var di={readContext:pn,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},Rm={readContext:pn,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:pn,useEffect:vc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ma(4194308,4,$p.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ma(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ma(4,2,e,n)},useMemo:function(e,n){var t=Cn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Cn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Tm.bind(null,he,e),[a.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:xc,useDebugValue:ll,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=xc(!1),n=e[0];return e=Am.bind(null,e[1]),Cn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=he,i=Cn();if(de){if(t===void 0)throw Error(I(407));t=t()}else{if(t=n(),Ce===null)throw Error(I(349));Nr&30||Mp(a,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,vc(Bp.bind(null,a,o,e),[e]),a.flags|=2048,Jt(9,Vp.bind(null,a,o,t,n),void 0,null),t},useId:function(){var e=Cn(),n=Ce.identifierPrefix;if(de){var t=Dn,a=On;t=(a&~(1<<32-vn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=Yt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Em++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},zm={readContext:pn,useCallback:qp,useContext:pn,useEffect:sl,useImperativeHandle:Wp,useInsertionEffect:Kp,useLayoutEffect:Hp,useMemo:Yp,useReducer:ho,useRef:Zp,useState:function(){return ho(Gt)},useDebugValue:ll,useDeferredValue:function(e){var n=un();return Gp(n,we.memoizedState,e)},useTransition:function(){var e=ho(Gt)[0],n=un().memoizedState;return[e,n]},useMutableSource:Pp,useSyncExternalStore:_p,useId:Jp,unstable_isNewReconciler:!1},Om={readContext:pn,useCallback:qp,useContext:pn,useEffect:sl,useImperativeHandle:Wp,useInsertionEffect:Kp,useLayoutEffect:Hp,useMemo:Yp,useReducer:fo,useRef:Zp,useState:function(){return fo(Gt)},useDebugValue:ll,useDeferredValue:function(e){var n=un();return we===null?n.memoizedState=e:Gp(n,we.memoizedState,e)},useTransition:function(){var e=fo(Gt)[0],n=un().memoizedState;return[e,n]},useMutableSource:Pp,useSyncExternalStore:_p,useId:Jp,unstable_isNewReconciler:!1};function mn(e,n){if(e&&e.defaultProps){n=fe({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function es(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:fe({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ei={isMounted:function(e){return(e=e._reactInternals)?Tr(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Pe(),i=rr(e),o=Ln(a,i);o.payload=n,t!=null&&(o.callback=t),n=er(e,o,i),n!==null&&(bn(n,e,i,a),Pa(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Pe(),i=rr(e),o=Ln(a,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=er(e,o,i),n!==null&&(bn(n,e,i,a),Pa(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Pe(),a=rr(e),i=Ln(t,a);i.tag=2,n!=null&&(i.callback=n),n=er(e,i,a),n!==null&&(bn(n,e,a,t),Pa(n,e,a))}};function bc(e,n,t,a,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,s):n.prototype&&n.prototype.isPureReactComponent?!Zt(t,a)||!Zt(i,o):!0}function nu(e,n,t){var a=!1,i=or,o=n.contextType;return typeof o=="object"&&o!==null?o=pn(o):(i=Ke(n)?jr:De.current,a=n.contextTypes,o=(a=a!=null)?Jr(e,i):or),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ei,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function yc(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Ei.enqueueReplaceState(n,n.state,null)}function ns(e,n,t,a){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},el(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=pn(o):(o=Ke(n)?jr:De.current,i.context=Jr(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(es(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ei.enqueueReplaceState(i,i.state,null),si(e,t,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nt(e,n){try{var t="",a=n;do t+=sf(a),a=a.return;while(a);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function mo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function rs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Dm=typeof WeakMap=="function"?WeakMap:Map;function ru(e,n,t){t=Ln(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){ui||(ui=!0,us=a),rs(e,n)},t}function tu(e,n,t){t=Ln(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;t.payload=function(){return a(i)},t.callback=function(){rs(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){rs(e,n),typeof a!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function wc(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Dm;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(i.add(t),e=qm.bind(null,e,n,t),n.then(e,e))}function jc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function kc(e,n,t,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ln(-1,1),n.tag=2,er(t,n,1))),t.lanes|=1),e)}var Lm=Bn.ReactCurrentOwner,Ue=!1;function Le(e,n,t,a){n.child=e===null?zp(n,null,t,a):Xr(n,e.child,t,a)}function Nc(e,n,t,a,i){t=t.render;var o=n.ref;return qr(n,i),a=il(e,n,t,a,o,i),t=ol(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Vn(e,n,i)):(de&&t&&Ws(n),n.flags|=1,Le(e,n,a,i),n.child)}function Cc(e,n,t,a,i){if(e===null){var o=t.type;return typeof o=="function"&&!gl(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,au(e,n,o,a,i)):(e=Ua(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:Zt,t(s,a)&&e.ref===n.ref)return Vn(e,n,i)}return n.flags|=1,e=tr(o,a),e.ref=n.ref,e.return=n,n.child=e}function au(e,n,t,a,i){if(e!==null){var o=e.memoizedProps;if(Zt(o,a)&&e.ref===n.ref)if(Ue=!1,n.pendingProps=a=o,(e.lanes&i)!==0)e.flags&131072&&(Ue=!0);else return n.lanes=e.lanes,Vn(e,n,i)}return ts(e,n,t,a,i)}function iu(e,n,t){var a=n.pendingProps,i=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Zr,Ye),Ye|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,oe(Zr,Ye),Ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:t,oe(Zr,Ye),Ye|=a}else o!==null?(a=o.baseLanes|t,n.memoizedState=null):a=t,oe(Zr,Ye),Ye|=a;return Le(e,n,i,t),n.child}function ou(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ts(e,n,t,a,i){var o=Ke(t)?jr:De.current;return o=Jr(n,o),qr(n,i),t=il(e,n,t,a,o,i),a=ol(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Vn(e,n,i)):(de&&a&&Ws(n),n.flags|=1,Le(e,n,t,i),n.child)}function Sc(e,n,t,a,i){if(Ke(t)){var o=!0;ri(n)}else o=!1;if(qr(n,i),n.stateNode===null)Va(e,n),nu(n,t,a),ns(n,t,a,i),a=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var c=s.context,d=t.contextType;typeof d=="object"&&d!==null?d=pn(d):(d=Ke(t)?jr:De.current,d=Jr(n,d));var p=t.getDerivedStateFromProps,u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==a||c!==d)&&yc(n,s,a,d),Kn=!1;var m=n.memoizedState;s.state=m,si(n,a,s,i),c=n.memoizedState,l!==a||m!==c||Ze.current||Kn?(typeof p=="function"&&(es(n,t,p,a),c=n.memoizedState),(l=Kn||bc(n,t,l,a,m,c,d))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=c),s.props=a,s.state=c,s.context=d,a=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,Dp(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:mn(n.type,l),s.props=d,u=n.pendingProps,m=s.context,c=t.contextType,typeof c=="object"&&c!==null?c=pn(c):(c=Ke(t)?jr:De.current,c=Jr(n,c));var y=t.getDerivedStateFromProps;(p=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==u||m!==c)&&yc(n,s,a,c),Kn=!1,m=n.memoizedState,s.state=m,si(n,a,s,i);var g=n.memoizedState;l!==u||m!==g||Ze.current||Kn?(typeof y=="function"&&(es(n,t,y,a),g=n.memoizedState),(d=Kn||bc(n,t,d,a,m,g,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,g,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,g,c)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=g),s.props=a,s.state=g,s.context=c,a=d):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),a=!1)}return as(e,n,t,a,o,i)}function as(e,n,t,a,i,o){ou(e,n);var s=(n.flags&128)!==0;if(!a&&!s)return i&&pc(n,t,!1),Vn(e,n,o);a=n.stateNode,Lm.current=n;var l=s&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&s?(n.child=Xr(n,e.child,null,o),n.child=Xr(n,null,l,o)):Le(e,n,l,o),n.memoizedState=a.state,i&&pc(n,t,!0),n.child}function su(e){var n=e.stateNode;n.pendingContext?dc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&dc(e,n.context,!1),nl(e,n.containerInfo)}function Ec(e,n,t,a,i){return Qr(),Ys(i),n.flags|=256,Le(e,n,t,a),n.child}var is={dehydrated:null,treeContext:null,retryLane:0};function os(e){return{baseLanes:e,cachePool:null,transitions:null}}function lu(e,n,t){var a=n.pendingProps,i=ue.current,o=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),oe(ue,i&1),e===null)return Qo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=a.children,e=a.fallback,o?(a=n.mode,o=n.child,s={mode:"hidden",children:s},!(a&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ii(s,a,0,null),e=yr(e,a,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=os(t),n.memoizedState=is,e):cl(n,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Pm(e,n,s,a,l,i,t);if(o){o=a.fallback,s=n.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:a.children};return!(s&1)&&n.child!==i?(a=n.child,a.childLanes=0,a.pendingProps=c,n.deletions=null):(a=tr(i,c),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=tr(l,o):(o=yr(o,s,t,null),o.flags|=2),o.return=n,a.return=n,a.sibling=o,n.child=a,a=o,o=n.child,s=e.child.memoizedState,s=s===null?os(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=is,a}return o=e.child,e=o.sibling,a=tr(o,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function cl(e,n){return n=Ii({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ca(e,n,t,a){return a!==null&&Ys(a),Xr(n,e.child,null,t),e=cl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pm(e,n,t,a,i,o,s){if(t)return n.flags&256?(n.flags&=-257,a=mo(Error(I(422))),Ca(e,n,s,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=a.fallback,i=n.mode,a=Ii({mode:"visible",children:a.children},i,0,null),o=yr(o,i,s,null),o.flags|=2,a.return=n,o.return=n,a.sibling=o,n.child=a,n.mode&1&&Xr(n,e.child,null,s),n.child.memoizedState=os(s),n.memoizedState=is,o);if(!(n.mode&1))return Ca(e,n,s,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,o=Error(I(419)),a=mo(o,a,void 0),Ca(e,n,s,a)}if(l=(s&e.childLanes)!==0,Ue||l){if(a=Ce,a!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Mn(e,i),bn(a,e,i,-1))}return ml(),a=mo(Error(I(421))),Ca(e,n,s,a)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Ym.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ge=Xn(i.nextSibling),Je=n,de=!0,xn=null,e!==null&&(sn[ln++]=On,sn[ln++]=Dn,sn[ln++]=kr,On=e.id,Dn=e.overflow,kr=n),n=cl(n,a.children),n.flags|=4096,n)}function Ac(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Xo(e.return,n,t)}function go(e,n,t,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=i)}function cu(e,n,t){var a=n.pendingProps,i=a.revealOrder,o=a.tail;if(Le(e,n,a.children,t),a=ue.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,t,n);else if(e.tag===19)Ac(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(oe(ue,a),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&li(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),go(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}go(n,!0,t,null,o);break;case"together":go(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Va(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Vn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Cr|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(I(153));if(n.child!==null){for(e=n.child,t=tr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=tr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function _m(e,n,t){switch(n.tag){case 3:su(n),Qr();break;case 5:Lp(n);break;case 1:Ke(n.type)&&ri(n);break;case 4:nl(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,i=n.memoizedProps.value;oe(ii,a._currentValue),a._currentValue=i;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(oe(ue,ue.current&1),n.flags|=128,null):t&n.child.childLanes?lu(e,n,t):(oe(ue,ue.current&1),e=Vn(e,n,t),e!==null?e.sibling:null);oe(ue,ue.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return cu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(ue,ue.current),a)break;return null;case 22:case 23:return n.lanes=0,iu(e,n,t)}return Vn(e,n,t)}var du,ss,pu,uu;du=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ss=function(){};pu=function(e,n,t,a){var i=e.memoizedProps;if(i!==a){e=n.stateNode,xr(An.current);var o=null;switch(t){case"input":i=To(e,i),a=To(e,a),o=[];break;case"select":i=fe({},i,{value:void 0}),a=fe({},a,{value:void 0}),o=[];break;case"textarea":i=zo(e,i),a=zo(e,a),o=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ei)}Do(t,a);var s;t=null;for(d in i)if(!a.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(s in l)l.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Pt.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in a){var c=a[d];if(l=i!=null?i[d]:void 0,a.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(t||(t={}),t[s]=c[s])}else t||(o||(o=[]),o.push(d,t)),t=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Pt.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&le("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}t&&(o=o||[]).push("style",t);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};uu=function(e,n,t,a){t!==a&&(n.flags|=4)};function vt(e,n){if(!de)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Mm(e,n,t){var a=n.pendingProps;switch(qs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(n),null;case 1:return Ke(n.type)&&ni(),Re(n),null;case 3:return a=n.stateNode,et(),ce(Ze),ce(De),tl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ka(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,xn!==null&&(ms(xn),xn=null))),ss(e,n),Re(n),null;case 5:rl(n);var i=xr(qt.current);if(t=n.type,e!==null&&n.stateNode!=null)pu(e,n,t,a,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(I(166));return Re(n),null}if(e=xr(An.current),ka(n)){a=n.stateNode,t=n.type;var o=n.memoizedProps;switch(a[Sn]=n,a[$t]=o,e=(n.mode&1)!==0,t){case"dialog":le("cancel",a),le("close",a);break;case"iframe":case"object":case"embed":le("load",a);break;case"video":case"audio":for(i=0;i<St.length;i++)le(St[i],a);break;case"source":le("error",a);break;case"img":case"image":case"link":le("error",a),le("load",a);break;case"details":le("toggle",a);break;case"input":_l(a,o),le("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},le("invalid",a);break;case"textarea":Vl(a,o),le("invalid",a)}Do(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?a.textContent!==l&&(o.suppressHydrationWarning!==!0&&ja(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ja(a.textContent,l,e),i=["children",""+l]):Pt.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&le("scroll",a)}switch(t){case"input":fa(a),Ml(a,o,!0);break;case"textarea":fa(a),Bl(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=ei)}a=i,n.updateQueue=a,a!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(t,{is:a.is}):(e=s.createElement(t),t==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,t),e[Sn]=n,e[$t]=a,du(e,n,!1,!1),n.stateNode=e;e:{switch(s=Lo(t,a),t){case"dialog":le("cancel",e),le("close",e),i=a;break;case"iframe":case"object":case"embed":le("load",e),i=a;break;case"video":case"audio":for(i=0;i<St.length;i++)le(St[i],e);i=a;break;case"source":le("error",e),i=a;break;case"img":case"image":case"link":le("error",e),le("load",e),i=a;break;case"details":le("toggle",e),i=a;break;case"input":_l(e,a),i=To(e,a),le("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=fe({},a,{value:void 0}),le("invalid",e);break;case"textarea":Vl(e,a),i=zo(e,a),le("invalid",e);break;default:i=a}Do(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Zd(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Fd(e,c)):o==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&_t(e,c):typeof c=="number"&&_t(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Pt.hasOwnProperty(o)?c!=null&&o==="onScroll"&&le("scroll",e):c!=null&&Os(e,o,c,s))}switch(t){case"input":fa(e),Ml(e,a,!1);break;case"textarea":fa(e),Bl(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ir(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?Kr(e,!!a.multiple,o,!1):a.defaultValue!=null&&Kr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ei)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Re(n),null;case 6:if(e&&n.stateNode!=null)uu(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(I(166));if(t=xr(qt.current),xr(An.current),ka(n)){if(a=n.stateNode,t=n.memoizedProps,a[Sn]=n,(o=a.nodeValue!==t)&&(e=Je,e!==null))switch(e.tag){case 3:ja(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ja(a.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Sn]=n,n.stateNode=a}return Re(n),null;case 13:if(ce(ue),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&Ge!==null&&n.mode&1&&!(n.flags&128))Ip(),Qr(),n.flags|=98560,o=!1;else if(o=ka(n),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[Sn]=n}else Qr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Re(n),o=!1}else xn!==null&&(ms(xn),xn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||ue.current&1?je===0&&(je=3):ml())),n.updateQueue!==null&&(n.flags|=4),Re(n),null);case 4:return et(),ss(e,n),e===null&&Kt(n.stateNode.containerInfo),Re(n),null;case 10:return Qs(n.type._context),Re(n),null;case 17:return Ke(n.type)&&ni(),Re(n),null;case 19:if(ce(ue),o=n.memoizedState,o===null)return Re(n),null;if(a=(n.flags&128)!==0,s=o.rendering,s===null)if(a)vt(o,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=li(e),s!==null){for(n.flags|=128,vt(o,!1),a=s.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)o=t,e=a,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return oe(ue,ue.current&1|2),n.child}e=e.sibling}o.tail!==null&&ve()>rt&&(n.flags|=128,a=!0,vt(o,!1),n.lanes=4194304)}else{if(!a)if(e=li(s),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),vt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!de)return Re(n),null}else 2*ve()-o.renderingStartTime>rt&&t!==1073741824&&(n.flags|=128,a=!0,vt(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ve(),n.sibling=null,t=ue.current,oe(ue,a?t&1|2:t&1),n):(Re(n),null);case 22:case 23:return fl(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?Ye&1073741824&&(Re(n),n.subtreeFlags&6&&(n.flags|=8192)):Re(n),null;case 24:return null;case 25:return null}throw Error(I(156,n.tag))}function Vm(e,n){switch(qs(n),n.tag){case 1:return Ke(n.type)&&ni(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return et(),ce(Ze),ce(De),tl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return rl(n),null;case 13:if(ce(ue),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(I(340));Qr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ce(ue),null;case 4:return et(),null;case 10:return Qs(n.type._context),null;case 22:case 23:return fl(),null;case 24:return null;default:return null}}var Sa=!1,ze=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,M=null;function Ur(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){ge(e,n,a)}else t.current=null}function ls(e,n,t){try{t()}catch(a){ge(e,n,a)}}var Tc=!1;function Fm(e,n){if(Ho=Ja,e=xp(),$s(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,l=-1,c=-1,d=0,p=0,u=e,m=null;n:for(;;){for(var y;u!==t||i!==0&&u.nodeType!==3||(l=s+i),u!==o||a!==0&&u.nodeType!==3||(c=s+a),u.nodeType===3&&(s+=u.nodeValue.length),(y=u.firstChild)!==null;)m=u,u=y;for(;;){if(u===e)break n;if(m===t&&++d===i&&(l=s),m===o&&++p===a&&(c=s),(y=u.nextSibling)!==null)break;u=m,m=u.parentNode}u=y}t=l===-1||c===-1?null:{start:l,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for($o={focusedElem:e,selectionRange:t},Ja=!1,M=n;M!==null;)if(n=M,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,M=e;else for(;M!==null;){n=M;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,w=g.memoizedState,f=n.stateNode,h=f.getSnapshotBeforeUpdate(n.elementType===n.type?x:mn(n.type,x),w);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(j){ge(n,n.return,j)}if(e=n.sibling,e!==null){e.return=n.return,M=e;break}M=n.return}return g=Tc,Tc=!1,g}function Ot(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ls(n,t,o)}i=i.next}while(i!==a)}}function Ai(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function cs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function hu(e){var n=e.alternate;n!==null&&(e.alternate=null,hu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Sn],delete n[$t],delete n[Yo],delete n[km],delete n[Nm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fu(e){return e.tag===5||e.tag===3||e.tag===4}function Ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ds(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ei));else if(a!==4&&(e=e.child,e!==null))for(ds(e,n,t),e=e.sibling;e!==null;)ds(e,n,t),e=e.sibling}function ps(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ps(e,n,t),e=e.sibling;e!==null;)ps(e,n,t),e=e.sibling}var Ee=null,gn=!1;function Fn(e,n,t){for(t=t.child;t!==null;)mu(e,n,t),t=t.sibling}function mu(e,n,t){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(yi,t)}catch{}switch(t.tag){case 5:ze||Ur(t,n);case 6:var a=Ee,i=gn;Ee=null,Fn(e,n,t),Ee=a,gn=i,Ee!==null&&(gn?(e=Ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ee.removeChild(t.stateNode));break;case 18:Ee!==null&&(gn?(e=Ee,t=t.stateNode,e.nodeType===8?lo(e.parentNode,t):e.nodeType===1&&lo(e,t),Ft(e)):lo(Ee,t.stateNode));break;case 4:a=Ee,i=gn,Ee=t.stateNode.containerInfo,gn=!0,Fn(e,n,t),Ee=a,gn=i;break;case 0:case 11:case 14:case 15:if(!ze&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ls(t,n,s),i=i.next}while(i!==a)}Fn(e,n,t);break;case 1:if(!ze&&(Ur(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){ge(t,n,l)}Fn(e,n,t);break;case 21:Fn(e,n,t);break;case 22:t.mode&1?(ze=(a=ze)||t.memoizedState!==null,Fn(e,n,t),ze=a):Fn(e,n,t);break;default:Fn(e,n,t)}}function Rc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Bm),n.forEach(function(a){var i=Gm.bind(null,e,a);t.has(a)||(t.add(a),a.then(i,i))})}}function fn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];try{var o=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ee=l.stateNode,gn=!1;break e;case 3:Ee=l.stateNode.containerInfo,gn=!0;break e;case 4:Ee=l.stateNode.containerInfo,gn=!0;break e}l=l.return}if(Ee===null)throw Error(I(160));mu(o,s,i),Ee=null,gn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){ge(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)gu(n,e),n=n.sibling}function gu(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fn(n,e),kn(e),a&4){try{Ot(3,e,e.return),Ai(3,e)}catch(x){ge(e,e.return,x)}try{Ot(5,e,e.return)}catch(x){ge(e,e.return,x)}}break;case 1:fn(n,e),kn(e),a&512&&t!==null&&Ur(t,t.return);break;case 5:if(fn(n,e),kn(e),a&512&&t!==null&&Ur(t,t.return),e.flags&32){var i=e.stateNode;try{_t(i,"")}catch(x){ge(e,e.return,x)}}if(a&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Md(i,o),Lo(l,s);var d=Lo(l,o);for(s=0;s<c.length;s+=2){var p=c[s],u=c[s+1];p==="style"?Zd(i,u):p==="dangerouslySetInnerHTML"?Fd(i,u):p==="children"?_t(i,u):Os(i,p,u,d)}switch(l){case"input":Io(i,o);break;case"textarea":Vd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Kr(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?Kr(i,!!o.multiple,o.defaultValue,!0):Kr(i,!!o.multiple,o.multiple?[]:"",!1))}i[$t]=o}catch(x){ge(e,e.return,x)}}break;case 6:if(fn(n,e),kn(e),a&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ge(e,e.return,x)}}break;case 3:if(fn(n,e),kn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ft(n.containerInfo)}catch(x){ge(e,e.return,x)}break;case 4:fn(n,e),kn(e);break;case 13:fn(n,e),kn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ul=ve())),a&4&&Rc(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(ze=(d=ze)||p,fn(n,e),ze=d):fn(n,e),kn(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(M=e,p=e.child;p!==null;){for(u=M=p;M!==null;){switch(m=M,y=m.child,m.tag){case 0:case 11:case 14:case 15:Ot(4,m,m.return);break;case 1:Ur(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){a=m,t=m.return;try{n=a,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(x){ge(a,t,x)}}break;case 5:Ur(m,m.return);break;case 22:if(m.memoizedState!==null){Oc(u);continue}}y!==null?(y.return=m,M=y):Oc(u)}p=p.sibling}e:for(p=null,u=e;;){if(u.tag===5){if(p===null){p=u;try{i=u.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=u.stateNode,c=u.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ud("display",s))}catch(x){ge(e,e.return,x)}}}else if(u.tag===6){if(p===null)try{u.stateNode.nodeValue=d?"":u.memoizedProps}catch(x){ge(e,e.return,x)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;p===u&&(p=null),u=u.return}p===u&&(p=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:fn(n,e),kn(e),a&4&&Rc(e);break;case 21:break;default:fn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(fu(t)){var a=t;break e}t=t.return}throw Error(I(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(_t(i,""),a.flags&=-33);var o=Ic(e);ps(e,o,i);break;case 3:case 4:var s=a.stateNode.containerInfo,l=Ic(e);ds(e,l,s);break;default:throw Error(I(161))}}catch(c){ge(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Um(e,n,t){M=e,xu(e)}function xu(e,n,t){for(var a=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&a){var s=i.memoizedState!==null||Sa;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ze;l=Sa;var d=ze;if(Sa=s,(ze=c)&&!d)for(M=i;M!==null;)s=M,c=s.child,s.tag===22&&s.memoizedState!==null?Dc(i):c!==null?(c.return=s,M=c):Dc(i);for(;o!==null;)M=o,xu(o),o=o.sibling;M=i,Sa=l,ze=d}zc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):zc(e)}}function zc(e){for(;M!==null;){var n=M;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ze||Ai(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!ze)if(t===null)a.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:mn(n.type,t.memoizedProps);a.componentDidUpdate(i,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&gc(n,o,a);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}gc(n,s,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var u=p.dehydrated;u!==null&&Ft(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}ze||n.flags&512&&cs(n)}catch(m){ge(n,n.return,m)}}if(n===e){M=null;break}if(t=n.sibling,t!==null){t.return=n.return,M=t;break}M=n.return}}function Oc(e){for(;M!==null;){var n=M;if(n===e){M=null;break}var t=n.sibling;if(t!==null){t.return=n.return,M=t;break}M=n.return}}function Dc(e){for(;M!==null;){var n=M;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ai(4,n)}catch(c){ge(n,t,c)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var i=n.return;try{a.componentDidMount()}catch(c){ge(n,i,c)}}var o=n.return;try{cs(n)}catch(c){ge(n,o,c)}break;case 5:var s=n.return;try{cs(n)}catch(c){ge(n,s,c)}}}catch(c){ge(n,n.return,c)}if(n===e){M=null;break}var l=n.sibling;if(l!==null){l.return=n.return,M=l;break}M=n.return}}var Zm=Math.ceil,pi=Bn.ReactCurrentDispatcher,dl=Bn.ReactCurrentOwner,dn=Bn.ReactCurrentBatchConfig,ne=0,Ce=null,ye=null,Ae=0,Ye=0,Zr=lr(0),je=0,Qt=null,Cr=0,Ti=0,pl=0,Dt=null,Fe=null,ul=0,rt=1/0,Rn=null,ui=!1,us=null,nr=null,Ea=!1,qn=null,hi=0,Lt=0,hs=null,Ba=-1,Fa=0;function Pe(){return ne&6?ve():Ba!==-1?Ba:Ba=ve()}function rr(e){return e.mode&1?ne&2&&Ae!==0?Ae&-Ae:Sm.transition!==null?(Fa===0&&(Fa=np()),Fa):(e=ie,e!==0||(e=window.event,e=e===void 0?16:lp(e.type)),e):1}function bn(e,n,t,a){if(50<Lt)throw Lt=0,hs=null,Error(I(185));ta(e,t,a),(!(ne&2)||e!==Ce)&&(e===Ce&&(!(ne&2)&&(Ti|=t),je===4&&$n(e,Ae)),He(e,a),t===1&&ne===0&&!(n.mode&1)&&(rt=ve()+500,Ci&&cr()))}function He(e,n){var t=e.callbackNode;Sf(e,n);var a=Ga(e,e===Ce?Ae:0);if(a===0)t!==null&&Zl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&Zl(t),n===1)e.tag===0?Cm(Lc.bind(null,e)):Ep(Lc.bind(null,e)),wm(function(){!(ne&6)&&cr()}),t=null;else{switch(rp(a)){case 1:t=Ms;break;case 4:t=Xd;break;case 16:t=Ya;break;case 536870912:t=ep;break;default:t=Ya}t=Cu(t,vu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function vu(e,n){if(Ba=-1,Fa=0,ne&6)throw Error(I(327));var t=e.callbackNode;if(Yr()&&e.callbackNode!==t)return null;var a=Ga(e,e===Ce?Ae:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=fi(e,a);else{n=a;var i=ne;ne|=2;var o=yu();(Ce!==e||Ae!==n)&&(Rn=null,rt=ve()+500,br(e,n));do try{$m();break}catch(l){bu(e,l)}while(!0);Js(),pi.current=o,ne=i,ye!==null?n=0:(Ce=null,Ae=0,n=je)}if(n!==0){if(n===2&&(i=Bo(e),i!==0&&(a=i,n=fs(e,i))),n===1)throw t=Qt,br(e,0),$n(e,a),He(e,ve()),t;if(n===6)$n(e,a);else{if(i=e.current.alternate,!(a&30)&&!Km(i)&&(n=fi(e,a),n===2&&(o=Bo(e),o!==0&&(a=o,n=fs(e,o))),n===1))throw t=Qt,br(e,0),$n(e,a),He(e,ve()),t;switch(e.finishedWork=i,e.finishedLanes=a,n){case 0:case 1:throw Error(I(345));case 2:fr(e,Fe,Rn);break;case 3:if($n(e,a),(a&130023424)===a&&(n=ul+500-ve(),10<n)){if(Ga(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qo(fr.bind(null,e,Fe,Rn),n);break}fr(e,Fe,Rn);break;case 4:if($n(e,a),(a&4194240)===a)break;for(n=e.eventTimes,i=-1;0<a;){var s=31-vn(a);o=1<<s,s=n[s],s>i&&(i=s),a&=~o}if(a=i,a=ve()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Zm(a/1960))-a,10<a){e.timeoutHandle=qo(fr.bind(null,e,Fe,Rn),a);break}fr(e,Fe,Rn);break;case 5:fr(e,Fe,Rn);break;default:throw Error(I(329))}}}return He(e,ve()),e.callbackNode===t?vu.bind(null,e):null}function fs(e,n){var t=Dt;return e.current.memoizedState.isDehydrated&&(br(e,n).flags|=256),e=fi(e,n),e!==2&&(n=Fe,Fe=t,n!==null&&ms(n)),e}function ms(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Km(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var i=t[a],o=i.getSnapshot;i=i.value;try{if(!yn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $n(e,n){for(n&=~pl,n&=~Ti,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-vn(n),a=1<<t;e[t]=-1,n&=~a}}function Lc(e){if(ne&6)throw Error(I(327));Yr();var n=Ga(e,0);if(!(n&1))return He(e,ve()),null;var t=fi(e,n);if(e.tag!==0&&t===2){var a=Bo(e);a!==0&&(n=a,t=fs(e,a))}if(t===1)throw t=Qt,br(e,0),$n(e,n),He(e,ve()),t;if(t===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,fr(e,Fe,Rn),He(e,ve()),null}function hl(e,n){var t=ne;ne|=1;try{return e(n)}finally{ne=t,ne===0&&(rt=ve()+500,Ci&&cr())}}function Sr(e){qn!==null&&qn.tag===0&&!(ne&6)&&Yr();var n=ne;ne|=1;var t=dn.transition,a=ie;try{if(dn.transition=null,ie=1,e)return e()}finally{ie=a,dn.transition=t,ne=n,!(ne&6)&&cr()}}function fl(){Ye=Zr.current,ce(Zr)}function br(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,ym(t)),ye!==null)for(t=ye.return;t!==null;){var a=t;switch(qs(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ni();break;case 3:et(),ce(Ze),ce(De),tl();break;case 5:rl(a);break;case 4:et();break;case 13:ce(ue);break;case 19:ce(ue);break;case 10:Qs(a.type._context);break;case 22:case 23:fl()}t=t.return}if(Ce=e,ye=e=tr(e.current,null),Ae=Ye=n,je=0,Qt=null,pl=Ti=Cr=0,Fe=Dt=null,gr!==null){for(n=0;n<gr.length;n++)if(t=gr[n],a=t.interleaved,a!==null){t.interleaved=null;var i=a.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,a.next=s}t.pending=a}gr=null}return e}function bu(e,n){do{var t=ye;try{if(Js(),_a.current=di,ci){for(var a=he.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}ci=!1}if(Nr=0,Ne=we=he=null,zt=!1,Yt=0,dl.current=null,t===null||t.return===null){je=1,Qt=n,ye=null;break}e:{var o=e,s=t.return,l=t,c=n;if(n=Ae,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=l,u=p.tag;if(!(p.mode&1)&&(u===0||u===11||u===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=jc(s);if(y!==null){y.flags&=-257,kc(y,s,l,o,n),y.mode&1&&wc(o,d,n),n=y,c=d;var g=n.updateQueue;if(g===null){var x=new Set;x.add(c),n.updateQueue=x}else g.add(c);break e}else{if(!(n&1)){wc(o,d,n),ml();break e}c=Error(I(426))}}else if(de&&l.mode&1){var w=jc(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),kc(w,s,l,o,n),Ys(nt(c,l));break e}}o=c=nt(c,l),je!==4&&(je=2),Dt===null?Dt=[o]:Dt.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=ru(o,c,n);mc(o,f);break e;case 1:l=c;var h=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(nr===null||!nr.has(v)))){o.flags|=65536,n&=-n,o.lanes|=n;var j=tu(o,l,n);mc(o,j);break e}}o=o.return}while(o!==null)}ju(t)}catch(N){n=N,ye===t&&t!==null&&(ye=t=t.return);continue}break}while(!0)}function yu(){var e=pi.current;return pi.current=di,e===null?di:e}function ml(){(je===0||je===3||je===2)&&(je=4),Ce===null||!(Cr&268435455)&&!(Ti&268435455)||$n(Ce,Ae)}function fi(e,n){var t=ne;ne|=2;var a=yu();(Ce!==e||Ae!==n)&&(Rn=null,br(e,n));do try{Hm();break}catch(i){bu(e,i)}while(!0);if(Js(),ne=t,pi.current=a,ye!==null)throw Error(I(261));return Ce=null,Ae=0,je}function Hm(){for(;ye!==null;)wu(ye)}function $m(){for(;ye!==null&&!xf();)wu(ye)}function wu(e){var n=Nu(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,n===null?ju(e):ye=n,dl.current=null}function ju(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Vm(t,n),t!==null){t.flags&=32767,ye=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,ye=null;return}}else if(t=Mm(t,n,Ye),t!==null){ye=t;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);je===0&&(je=5)}function fr(e,n,t){var a=ie,i=dn.transition;try{dn.transition=null,ie=1,Wm(e,n,t,a)}finally{dn.transition=i,ie=a}return null}function Wm(e,n,t,a){do Yr();while(qn!==null);if(ne&6)throw Error(I(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Ef(e,o),e===Ce&&(ye=Ce=null,Ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ea||(Ea=!0,Cu(Ya,function(){return Yr(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=dn.transition,dn.transition=null;var s=ie;ie=1;var l=ne;ne|=4,dl.current=null,Fm(e,t),gu(t,e),hm($o),Ja=!!Ho,$o=Ho=null,e.current=t,Um(t),vf(),ne=l,ie=s,dn.transition=o}else e.current=t;if(Ea&&(Ea=!1,qn=e,hi=i),o=e.pendingLanes,o===0&&(nr=null),wf(t.stateNode),He(e,ve()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],a(i.value,{componentStack:i.stack,digest:i.digest});if(ui)throw ui=!1,e=us,us=null,e;return hi&1&&e.tag!==0&&Yr(),o=e.pendingLanes,o&1?e===hs?Lt++:(Lt=0,hs=e):Lt=0,cr(),null}function Yr(){if(qn!==null){var e=rp(hi),n=dn.transition,t=ie;try{if(dn.transition=null,ie=16>e?16:e,qn===null)var a=!1;else{if(e=qn,qn=null,hi=0,ne&6)throw Error(I(331));var i=ne;for(ne|=4,M=e.current;M!==null;){var o=M,s=o.child;if(M.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(M=d;M!==null;){var p=M;switch(p.tag){case 0:case 11:case 15:Ot(8,p,o)}var u=p.child;if(u!==null)u.return=p,M=u;else for(;M!==null;){p=M;var m=p.sibling,y=p.return;if(hu(p),p===d){M=null;break}if(m!==null){m.return=y,M=m;break}M=y}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}M=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,M=s;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ot(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,M=f;break e}M=o.return}}var h=e.current;for(M=h;M!==null;){s=M;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,M=v;else e:for(s=h;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ai(9,l)}}catch(N){ge(l,l.return,N)}if(l===s){M=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,M=j;break e}M=l.return}}if(ne=i,cr(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(yi,e)}catch{}a=!0}return a}finally{ie=t,dn.transition=n}}return!1}function Pc(e,n,t){n=nt(t,n),n=ru(e,n,1),e=er(e,n,1),n=Pe(),e!==null&&(ta(e,1,n),He(e,n))}function ge(e,n,t){if(e.tag===3)Pc(e,e,t);else for(;n!==null;){if(n.tag===3){Pc(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(nr===null||!nr.has(a))){e=nt(t,e),e=tu(n,e,1),n=er(n,e,1),e=Pe(),n!==null&&(ta(n,1,e),He(n,e));break}}n=n.return}}function qm(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=Pe(),e.pingedLanes|=e.suspendedLanes&t,Ce===e&&(Ae&t)===t&&(je===4||je===3&&(Ae&130023424)===Ae&&500>ve()-ul?br(e,0):pl|=t),He(e,n)}function ku(e,n){n===0&&(e.mode&1?(n=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):n=1);var t=Pe();e=Mn(e,n),e!==null&&(ta(e,n,t),He(e,t))}function Ym(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ku(e,t)}function Gm(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(I(314))}a!==null&&a.delete(n),ku(e,t)}var Nu;Nu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ze.current)Ue=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ue=!1,_m(e,n,t);Ue=!!(e.flags&131072)}else Ue=!1,de&&n.flags&1048576&&Ap(n,ai,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Va(e,n),e=n.pendingProps;var i=Jr(n,De.current);qr(n,t),i=il(null,n,a,e,i,t);var o=ol();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ke(a)?(o=!0,ri(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,el(n),i.updater=Ei,n.stateNode=i,i._reactInternals=n,ns(n,a,e,t),n=as(null,n,a,!0,o,t)):(n.tag=0,de&&o&&Ws(n),Le(null,n,i,t),n=n.child),n;case 16:a=n.elementType;e:{switch(Va(e,n),e=n.pendingProps,i=a._init,a=i(a._payload),n.type=a,i=n.tag=Qm(a),e=mn(a,e),i){case 0:n=ts(null,n,a,e,t);break e;case 1:n=Sc(null,n,a,e,t);break e;case 11:n=Nc(null,n,a,e,t);break e;case 14:n=Cc(null,n,a,mn(a.type,e),t);break e}throw Error(I(306,a,""))}return n;case 0:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:mn(a,i),ts(e,n,a,i,t);case 1:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:mn(a,i),Sc(e,n,a,i,t);case 3:e:{if(su(n),e===null)throw Error(I(387));a=n.pendingProps,o=n.memoizedState,i=o.element,Dp(e,n),si(n,a,null,t);var s=n.memoizedState;if(a=s.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=nt(Error(I(423)),n),n=Ec(e,n,a,t,i);break e}else if(a!==i){i=nt(Error(I(424)),n),n=Ec(e,n,a,t,i);break e}else for(Ge=Xn(n.stateNode.containerInfo.firstChild),Je=n,de=!0,xn=null,t=zp(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Qr(),a===i){n=Vn(e,n,t);break e}Le(e,n,a,t)}n=n.child}return n;case 5:return Lp(n),e===null&&Qo(n),a=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Wo(a,i)?s=null:o!==null&&Wo(a,o)&&(n.flags|=32),ou(e,n),Le(e,n,s,t),n.child;case 6:return e===null&&Qo(n),null;case 13:return lu(e,n,t);case 4:return nl(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Xr(n,null,a,t):Le(e,n,a,t),n.child;case 11:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:mn(a,i),Nc(e,n,a,i,t);case 7:return Le(e,n,n.pendingProps,t),n.child;case 8:return Le(e,n,n.pendingProps.children,t),n.child;case 12:return Le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,oe(ii,a._currentValue),a._currentValue=s,o!==null)if(yn(o.value,s)){if(o.children===i.children&&!Ze.current){n=Vn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===a){if(o.tag===1){c=Ln(-1,t&-t),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),Xo(o.return,t,n),l.lanes|=t;break}c=c.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Xo(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Le(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,a=n.pendingProps.children,qr(n,t),i=pn(i),a=a(i),n.flags|=1,Le(e,n,a,t),n.child;case 14:return a=n.type,i=mn(a,n.pendingProps),i=mn(a.type,i),Cc(e,n,a,i,t);case 15:return au(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:mn(a,i),Va(e,n),n.tag=1,Ke(a)?(e=!0,ri(n)):e=!1,qr(n,t),nu(n,a,i),ns(n,a,i,t),as(null,n,a,!0,e,t);case 19:return cu(e,n,t);case 22:return iu(e,n,t)}throw Error(I(156,n.tag))};function Cu(e,n){return Qd(e,n)}function Jm(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,n,t,a){return new Jm(e,n,t,a)}function gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qm(e){if(typeof e=="function")return gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ls)return 11;if(e===Ps)return 14}return 2}function tr(e,n){var t=e.alternate;return t===null?(t=cn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ua(e,n,t,a,i,o){var s=2;if(a=e,typeof e=="function")gl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Or:return yr(t.children,i,o,n);case Ds:s=8,i|=8;break;case Co:return e=cn(12,t,n,i|2),e.elementType=Co,e.lanes=o,e;case So:return e=cn(13,t,n,i),e.elementType=So,e.lanes=o,e;case Eo:return e=cn(19,t,n,i),e.elementType=Eo,e.lanes=o,e;case Ld:return Ii(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Od:s=10;break e;case Dd:s=9;break e;case Ls:s=11;break e;case Ps:s=14;break e;case Zn:s=16,a=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return n=cn(s,t,n,i),n.elementType=e,n.type=a,n.lanes=o,n}function yr(e,n,t,a){return e=cn(7,e,a,n),e.lanes=t,e}function Ii(e,n,t,a){return e=cn(22,e,a,n),e.elementType=Ld,e.lanes=t,e.stateNode={isHidden:!1},e}function xo(e,n,t){return e=cn(6,e,null,n),e.lanes=t,e}function vo(e,n,t){return n=cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Xm(e,n,t,a,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ji(0),this.expirationTimes=Ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ji(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xl(e,n,t,a,i,o,s,l,c){return e=new Xm(e,n,t,l,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=cn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},el(o),e}function e0(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function Su(e){if(!e)return or;e=e._reactInternals;e:{if(Tr(e)!==e||e.tag!==1)throw Error(I(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ke(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(I(171))}if(e.tag===1){var t=e.type;if(Ke(t))return Sp(e,t,n)}return n}function Eu(e,n,t,a,i,o,s,l,c){return e=xl(t,a,!0,e,i,o,s,l,c),e.context=Su(null),t=e.current,a=Pe(),i=rr(t),o=Ln(a,i),o.callback=n??null,er(t,o,i),e.current.lanes=i,ta(e,i,a),He(e,a),e}function Ri(e,n,t,a){var i=n.current,o=Pe(),s=rr(i);return t=Su(t),n.context===null?n.context=t:n.pendingContext=t,n=Ln(o,s),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=er(i,n,s),e!==null&&(bn(e,i,s,o),Pa(e,i,s)),s}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function vl(e,n){_c(e,n),(e=e.alternate)&&_c(e,n)}function n0(){return null}var Au=typeof reportError=="function"?reportError:function(e){console.error(e)};function bl(e){this._internalRoot=e}zi.prototype.render=bl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(I(409));Ri(e,n,null,null)};zi.prototype.unmount=bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Sr(function(){Ri(null,e,null,null)}),n[_n]=null}};function zi(e){this._internalRoot=e}zi.prototype.unstable_scheduleHydration=function(e){if(e){var n=ip();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Hn.length&&n!==0&&n<Hn[t].priority;t++);Hn.splice(t,0,e),t===0&&sp(e)}};function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mc(){}function r0(e,n,t,a,i){if(i){if(typeof a=="function"){var o=a;a=function(){var d=mi(s);o.call(d)}}var s=Eu(n,a,e,0,null,!1,!1,"",Mc);return e._reactRootContainer=s,e[_n]=s.current,Kt(e.nodeType===8?e.parentNode:e),Sr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var d=mi(c);l.call(d)}}var c=xl(e,0,!1,null,null,!1,!1,"",Mc);return e._reactRootContainer=c,e[_n]=c.current,Kt(e.nodeType===8?e.parentNode:e),Sr(function(){Ri(n,c,t,a)}),c}function Di(e,n,t,a,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=mi(s);l.call(c)}}Ri(n,s,e,i)}else s=r0(t,n,e,i,a);return mi(s)}tp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ct(n.pendingLanes);t!==0&&(Vs(n,t|1),He(n,ve()),!(ne&6)&&(rt=ve()+500,cr()))}break;case 13:Sr(function(){var a=Mn(e,1);if(a!==null){var i=Pe();bn(a,e,1,i)}}),vl(e,1)}};Bs=function(e){if(e.tag===13){var n=Mn(e,134217728);if(n!==null){var t=Pe();bn(n,e,134217728,t)}vl(e,134217728)}};ap=function(e){if(e.tag===13){var n=rr(e),t=Mn(e,n);if(t!==null){var a=Pe();bn(t,e,n,a)}vl(e,n)}};ip=function(){return ie};op=function(e,n){var t=ie;try{return ie=e,n()}finally{ie=t}};_o=function(e,n,t){switch(n){case"input":if(Io(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=Ni(a);if(!i)throw Error(I(90));_d(a),Io(a,i)}}}break;case"textarea":Vd(e,t);break;case"select":n=t.value,n!=null&&Kr(e,!!t.multiple,n,!1)}};$d=hl;Wd=Sr;var t0={usingClientEntryPoint:!1,Events:[ia,_r,Ni,Kd,Hd,hl]},bt={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a0={bundleType:bt.bundleType,version:bt.version,rendererPackageName:bt.rendererPackageName,rendererConfig:bt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gd(e),e===null?null:e.stateNode},findFiberByHostInstance:bt.findFiberByHostInstance||n0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{yi=Aa.inject(a0),En=Aa}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0;Xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yl(n))throw Error(I(200));return e0(e,n,null,t)};Xe.createRoot=function(e,n){if(!yl(e))throw Error(I(299));var t=!1,a="",i=Au;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=xl(e,1,!1,null,null,t,!1,a,i),e[_n]=n.current,Kt(e.nodeType===8?e.parentNode:e),new bl(n)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Gd(n),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Sr(e)};Xe.hydrate=function(e,n,t){if(!Oi(n))throw Error(I(200));return Di(null,e,n,!0,t)};Xe.hydrateRoot=function(e,n,t){if(!yl(e))throw Error(I(405));var a=t!=null&&t.hydratedSources||null,i=!1,o="",s=Au;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Eu(n,null,e,1,t??null,i,!1,o,s),e[_n]=n.current,Kt(e),a)for(e=0;e<a.length;e++)t=a[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new zi(n)};Xe.render=function(e,n,t){if(!Oi(n))throw Error(I(200));return Di(null,e,n,!1,t)};Xe.unmountComponentAtNode=function(e){if(!Oi(e))throw Error(I(40));return e._reactRootContainer?(Sr(function(){Di(null,null,e,!1,function(){e._reactRootContainer=null,e[_n]=null})}),!0):!1};Xe.unstable_batchedUpdates=hl;Xe.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!Oi(t))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Di(e,n,t,!1,a)};Xe.version="18.3.1-next-f1338f8080-20240426";function Tu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tu)}catch(e){console.error(e)}}Tu(),Td.exports=Xe;var i0=Td.exports,Iu,Vc=i0;Iu=Vc.createRoot,Vc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xt(){return Xt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Xt.apply(this,arguments)}var Yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yn||(Yn={}));const Bc="popstate";function o0(e){e===void 0&&(e={});function n(a,i){let{pathname:o,search:s,hash:l}=a.location;return gs("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(a,i){return typeof i=="string"?i:gi(i)}return l0(n,t,null,e)}function be(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ru(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function s0(){return Math.random().toString(36).substr(2,8)}function Fc(e,n){return{usr:e.state,key:e.key,idx:n}}function gs(e,n,t,a){return t===void 0&&(t=null),Xt({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?st(n):n,{state:t,key:n&&n.key||a||s0()})}function gi(e){let{pathname:n="/",search:t="",hash:a=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function st(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function l0(e,n,t,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,s=i.history,l=Yn.Pop,c=null,d=p();d==null&&(d=0,s.replaceState(Xt({},s.state,{idx:d}),""));function p(){return(s.state||{idx:null}).idx}function u(){l=Yn.Pop;let w=p(),f=w==null?null:w-d;d=w,c&&c({action:l,location:x.location,delta:f})}function m(w,f){l=Yn.Push;let h=gs(x.location,w,f);d=p()+1;let v=Fc(h,d),j=x.createHref(h);try{s.pushState(v,"",j)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(j)}o&&c&&c({action:l,location:x.location,delta:1})}function y(w,f){l=Yn.Replace;let h=gs(x.location,w,f);d=p();let v=Fc(h,d),j=x.createHref(h);s.replaceState(v,"",j),o&&c&&c({action:l,location:x.location,delta:0})}function g(w){let f=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:gi(w);return h=h.replace(/ $/,"%20"),be(f,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,f)}let x={get action(){return l},get location(){return e(i,s)},listen(w){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Bc,u),c=w,()=>{i.removeEventListener(Bc,u),c=null}},createHref(w){return n(i,w)},createURL:g,encodeLocation(w){let f=g(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:y,go(w){return s.go(w)}};return x}var Uc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uc||(Uc={}));function c0(e,n,t){return t===void 0&&(t="/"),d0(e,n,t)}function d0(e,n,t,a){let i=typeof n=="string"?st(n):n,o=wl(i.pathname||"/",t);if(o==null)return null;let s=zu(e);p0(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let d=k0(o);l=y0(s[c],d)}return l}function zu(e,n,t,a){n===void 0&&(n=[]),t===void 0&&(t=[]),a===void 0&&(a="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(be(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=ar([a,c.relativePath]),p=t.concat(c);o.children&&o.children.length>0&&(be(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),zu(o.children,n,p,d)),!(o.path==null&&!o.index)&&n.push({path:d,score:v0(d,o.index),routesMeta:p})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of Ou(o.path))i(o,s,c)}),n}function Ou(e){let n=e.split("/");if(n.length===0)return[];let[t,...a]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(a.length===0)return i?[o,""]:[o];let s=Ou(a.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function p0(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:b0(n.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}const u0=/^:[\w-]+$/,h0=3,f0=2,m0=1,g0=10,x0=-2,Zc=e=>e==="*";function v0(e,n){let t=e.split("/"),a=t.length;return t.some(Zc)&&(a+=x0),n&&(a+=f0),t.filter(i=>!Zc(i)).reduce((i,o)=>i+(u0.test(o)?h0:o===""?m0:g0),a)}function b0(e,n){return e.length===n.length&&e.slice(0,-1).every((a,i)=>a===n[i])?e[e.length-1]-n[n.length-1]:0}function y0(e,n,t){let{routesMeta:a}=e,i={},o="/",s=[];for(let l=0;l<a.length;++l){let c=a[l],d=l===a.length-1,p=o==="/"?n:n.slice(o.length)||"/",u=w0({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),m=c.route;if(!u)return null;Object.assign(i,u.params),s.push({params:i,pathname:ar([o,u.pathname]),pathnameBase:E0(ar([o,u.pathnameBase])),route:m}),u.pathnameBase!=="/"&&(o=ar([o,u.pathnameBase]))}return s}function w0(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,a]=j0(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((d,p,u)=>{let{paramName:m,isOptional:y}=p;if(m==="*"){let x=l[u]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const g=l[u];return y&&!g?d[m]=void 0:d[m]=(g||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:e}}function j0(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ru(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(a.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),a]}function k0(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ru(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function wl(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,a=e.charAt(t);return a&&a!=="/"?null:e.slice(t)||"/"}function N0(e,n){n===void 0&&(n="/");let{pathname:t,search:a="",hash:i=""}=typeof e=="string"?st(e):e;return{pathname:t?t.startsWith("/")?t:C0(t,n):n,search:A0(a),hash:T0(i)}}function C0(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function bo(e,n,t,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function S0(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function jl(e,n){let t=S0(e);return n?t.map((a,i)=>i===t.length-1?a.pathname:a.pathnameBase):t.map(a=>a.pathnameBase)}function kl(e,n,t,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=st(e):(i=Xt({},e),be(!i.pathname||!i.pathname.includes("?"),bo("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),bo("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),bo("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=t;else{let u=n.length-1;if(!a&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),u-=1;i.pathname=m.join("/")}l=u>=0?n[u]:"/"}let c=N0(i,l),d=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const ar=e=>e.join("/").replace(/\/\/+/g,"/"),E0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,T0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function I0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Du=["post","put","patch","delete"];new Set(Du);const R0=["get",...Du];new Set(R0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ea.apply(this,arguments)}const Nl=b.createContext(null),z0=b.createContext(null),dr=b.createContext(null),Li=b.createContext(null),pr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Lu=b.createContext(null);function O0(e,n){let{relative:t}=n===void 0?{}:n;lt()||be(!1);let{basename:a,navigator:i}=b.useContext(dr),{hash:o,pathname:s,search:l}=_u(e,{relative:t}),c=s;return a!=="/"&&(c=s==="/"?a:ar([a,s])),i.createHref({pathname:c,search:l,hash:o})}function lt(){return b.useContext(Li)!=null}function Tn(){return lt()||be(!1),b.useContext(Li).location}function Pu(e){b.useContext(dr).static||b.useLayoutEffect(e)}function ct(){let{isDataRoute:e}=b.useContext(pr);return e?$0():D0()}function D0(){lt()||be(!1);let e=b.useContext(Nl),{basename:n,future:t,navigator:a}=b.useContext(dr),{matches:i}=b.useContext(pr),{pathname:o}=Tn(),s=JSON.stringify(jl(i,t.v7_relativeSplatPath)),l=b.useRef(!1);return Pu(()=>{l.current=!0}),b.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){a.go(d);return}let u=kl(d,JSON.parse(s),o,p.relative==="path");e==null&&n!=="/"&&(u.pathname=u.pathname==="/"?n:ar([n,u.pathname])),(p.replace?a.replace:a.push)(u,p.state,p)},[n,a,s,o,e])}function _u(e,n){let{relative:t}=n===void 0?{}:n,{future:a}=b.useContext(dr),{matches:i}=b.useContext(pr),{pathname:o}=Tn(),s=JSON.stringify(jl(i,a.v7_relativeSplatPath));return b.useMemo(()=>kl(e,JSON.parse(s),o,t==="path"),[e,s,o,t])}function L0(e,n){return P0(e,n)}function P0(e,n,t,a){lt()||be(!1);let{navigator:i}=b.useContext(dr),{matches:o}=b.useContext(pr),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=Tn(),p;if(n){var u;let w=typeof n=="string"?st(n):n;c==="/"||(u=w.pathname)!=null&&u.startsWith(c)||be(!1),p=w}else p=d;let m=p.pathname||"/",y=m;if(c!=="/"){let w=c.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(w.length).join("/")}let g=c0(e,{pathname:y}),x=F0(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:ar([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:ar([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,t,a);return n&&x?b.createElement(Li.Provider,{value:{location:ea({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Yn.Pop}},x):x}function _0(){let e=H0(),n=I0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),t?b.createElement("pre",{style:i},t):null,null)}const M0=b.createElement(_0,null);class V0 extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?b.createElement(pr.Provider,{value:this.props.routeContext},b.createElement(Lu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function B0(e){let{routeContext:n,match:t,children:a}=e,i=b.useContext(Nl);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(pr.Provider,{value:n},a)}function F0(e,n,t,a){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),a===void 0&&(a=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=a)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let s=e,l=(i=t)==null?void 0:i.errors;if(l!=null){let p=s.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);p>=0||be(!1),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(t&&a&&a.v7_partialHydration)for(let p=0;p<s.length;p++){let u=s[p];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(d=p),u.route.id){let{loaderData:m,errors:y}=t,g=u.route.loader&&m[u.route.id]===void 0&&(!y||y[u.route.id]===void 0);if(u.route.lazy||g){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,u,m)=>{let y,g=!1,x=null,w=null;t&&(y=l&&u.route.id?l[u.route.id]:void 0,x=u.route.errorElement||M0,c&&(d<0&&m===0?(W0("route-fallback"),g=!0,w=null):d===m&&(g=!0,w=u.route.hydrateFallbackElement||null)));let f=n.concat(s.slice(0,m+1)),h=()=>{let v;return y?v=x:g?v=w:u.route.Component?v=b.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=p,b.createElement(B0,{match:u,routeContext:{outlet:p,matches:f,isDataRoute:t!=null},children:v})};return t&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?b.createElement(V0,{location:t.location,revalidation:t.revalidation,component:x,error:y,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var Mu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Mu||{}),Vu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vu||{});function U0(e){let n=b.useContext(Nl);return n||be(!1),n}function Z0(e){let n=b.useContext(z0);return n||be(!1),n}function K0(e){let n=b.useContext(pr);return n||be(!1),n}function Bu(e){let n=K0(),t=n.matches[n.matches.length-1];return t.route.id||be(!1),t.route.id}function H0(){var e;let n=b.useContext(Lu),t=Z0(),a=Bu();return n!==void 0?n:(e=t.errors)==null?void 0:e[a]}function $0(){let{router:e}=U0(Mu.UseNavigateStable),n=Bu(Vu.UseNavigateStable),t=b.useRef(!1);return Pu(()=>{t.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ea({fromRouteId:n},o)))},[e,n])}const Kc={};function W0(e,n,t){Kc[e]||(Kc[e]=!0)}function q0(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Se(e){let{to:n,replace:t,state:a,relative:i}=e;lt()||be(!1);let{future:o,static:s}=b.useContext(dr),{matches:l}=b.useContext(pr),{pathname:c}=Tn(),d=ct(),p=kl(n,jl(l,o.v7_relativeSplatPath),c,i==="path"),u=JSON.stringify(p);return b.useEffect(()=>d(JSON.parse(u),{replace:t,state:a,relative:i}),[d,u,i,t,a]),null}function G(e){be(!1)}function Y0(e){let{basename:n="/",children:t=null,location:a,navigationType:i=Yn.Pop,navigator:o,static:s=!1,future:l}=e;lt()&&be(!1);let c=n.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:c,navigator:o,static:s,future:ea({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof a=="string"&&(a=st(a));let{pathname:p="/",search:u="",hash:m="",state:y=null,key:g="default"}=a,x=b.useMemo(()=>{let w=wl(p,c);return w==null?null:{location:{pathname:w,search:u,hash:m,state:y,key:g},navigationType:i}},[c,p,u,m,y,g,i]);return x==null?null:b.createElement(dr.Provider,{value:d},b.createElement(Li.Provider,{children:t,value:x}))}function G0(e){let{children:n,location:t}=e;return L0(xs(n),t)}new Promise(()=>{});function xs(e,n){n===void 0&&(n=[]);let t=[];return b.Children.forEach(e,(a,i)=>{if(!b.isValidElement(a))return;let o=[...n,i];if(a.type===b.Fragment){t.push.apply(t,xs(a.props.children,o));return}a.type!==G&&be(!1),!a.props.index||!a.props.children||be(!1);let s={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=xs(a.props.children,o)),t.push(s)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},vs.apply(this,arguments)}function J0(e,n){if(e==null)return{};var t={},a=Object.keys(e),i,o;for(o=0;o<a.length;o++)i=a[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function Q0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function X0(e,n){return e.button===0&&(!n||n==="_self")&&!Q0(e)}const eg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ng="6";try{window.__reactRouterVersion=ng}catch{}const rg="startTransition",Hc=Wh[rg];function tg(e){let{basename:n,children:t,future:a,window:i}=e,o=b.useRef();o.current==null&&(o.current=o0({window:i,v5Compat:!0}));let s=o.current,[l,c]=b.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},p=b.useCallback(u=>{d&&Hc?Hc(()=>c(u)):c(u)},[c,d]);return b.useLayoutEffect(()=>s.listen(p),[s,p]),b.useEffect(()=>q0(a),[a]),b.createElement(Y0,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:s,future:a})}const ag=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ig=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,O=b.forwardRef(function(n,t){let{onClick:a,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:d,preventScrollReset:p,viewTransition:u}=n,m=J0(n,eg),{basename:y}=b.useContext(dr),g,x=!1;if(typeof d=="string"&&ig.test(d)&&(g=d,ag))try{let v=new URL(window.location.href),j=d.startsWith("//")?new URL(v.protocol+d):new URL(d),N=wl(j.pathname,y);j.origin===v.origin&&N!=null?d=N+j.search+j.hash:x=!0}catch{}let w=O0(d,{relative:i}),f=og(d,{replace:s,state:l,target:c,preventScrollReset:p,relative:i,viewTransition:u});function h(v){a&&a(v),v.defaultPrevented||f(v)}return b.createElement("a",vs({},m,{href:g||w,onClick:x||o?a:h,ref:t,target:c}))});var $c;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})($c||($c={}));var Wc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wc||(Wc={}));function og(e,n){let{target:t,replace:a,state:i,preventScrollReset:o,relative:s,viewTransition:l}=n===void 0?{}:n,c=ct(),d=Tn(),p=_u(e,{relative:s});return b.useCallback(u=>{if(X0(u,t)){u.preventDefault();let m=a!==void 0?a:gi(d)===gi(p);c(e,{replace:m,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[d,c,p,a,i,t,e,o,s,l])}function nn(){b.useEffect(()=>{const e=document.getElementById("areas-toggle"),n=[];if(e){const t=a=>{a.preventDefault(),e.parentElement&&e.parentElement.classList.toggle("open")};e.addEventListener("click",t),n.push(()=>e.removeEventListener("click",t))}return()=>{n.forEach(t=>{try{t()}catch{}})}},[])}function sg(){b.useEffect(()=>{const e=document.getElementById("splash"),n=document.getElementById("splashLogo"),t=document.getElementById("app"),a=()=>{if(e)try{e.classList.add("splash--hide"),e.setAttribute("aria-hidden","true"),e.style.display="none",e.style.pointerEvents="none"}catch{}};try{e&&(e.classList.remove("splash--hide"),e.removeAttribute("aria-hidden"),e.style.display="",e.style.pointerEvents="")}catch{}if((()=>{try{return sessionStorage.getItem("koop_hasVisited")==="1"}catch{return!1}})()||document.documentElement.classList.contains("skip-splash")){a(),t&&(t.style.opacity="1");return}const s=2500,l=800,c=performance.now();function d(){n&&(n.offsetWidth,n.classList.add("is-visible"))}function p(){if(t)if(t.style.opacity="0",t.offsetHeight,t.animate){const x=t.animate([{opacity:0},{opacity:1}],{duration:800,easing:"ease",fill:"forwards"});x.onfinish=()=>{t.style.opacity="1"}}else t.style.transition="opacity 0.8s ease",requestAnimationFrame(()=>{t.style.opacity="1"})}function u(){const x=performance.now()-c,w=Math.max(0,s-x);setTimeout(()=>{p(),e&&e.classList.add("splash--hide"),setTimeout(()=>{a();try{sessionStorage.setItem("koop_hasVisited","1")}catch{}document.documentElement.classList.add("skip-splash")},l)},w)}async function m(){try{n&&"decode"in n?await n.decode():n&&!n.complete&&await new Promise(x=>n.addEventListener("load",x,{once:!0}))}catch{}d(),u()}const y=x=>{x.persisted&&(a(),t&&(t.style.opacity="1"))};window.addEventListener("pageshow",y),m();const g=setTimeout(()=>{const x=document.getElementById("splash");if(x&&document.body.contains(x))try{x.classList.add("splash--hide"),x.setAttribute("aria-hidden","true"),x.style.display="none",x.style.pointerEvents="none"}catch{}},7e3);return()=>{window.removeEventListener("pageshow",y),clearTimeout(g)}},[])}function rn(){const e=ct(),n=Tn(),t=i=>{const o="/"+(i||"").split("/").filter(Boolean).pop(),s={"/index.html":"/","/derecho.html":"/derecho","/contabilidad.html":"/contabilidad","/auditoria.html":"/auditoria","/derecho-administrativo.html":"/derecho-administrativo","/derecho-familia.html":"/derecho-familia","/derecho-laboral.html":"/derecho-laboral","/derecho-penal.html":"/derecho-penal","/impuestos.html":"/impuestos","/planeacion-patrimonial.html":"/asesoria-contable","/planeacion-patrimonial":"/asesoria-contable","/privacidad.html":"/privacidad","/politica-privacidad.html":"/privacidad","/tramites-notariales.html":"/tramites-notariales","/acciones-de-tutela.html":"/acciones-de-tutela"};return s[i]||s[o]||i},a=()=>{var i;(i=document.querySelectorAll("a[href]"))==null||i.forEach(o=>{try{const s=o.getAttribute("href")||"";if(/^https?:\/\//i.test(s)&&new URL(s).origin!==window.location.origin)return;const l=new URL(s,window.location.href);if(l.origin!==window.location.origin)return;let c=t(l.pathname)+l.search+l.hash;/^\/index\.html#/i.test(c)&&(c=c.replace(/^\/index\.html#/i,"/#"));const d=o.getAttribute("href");c&&c!==d&&o.setAttribute("href",c)}catch{}})};b.useEffect(()=>{const i=Array.from(document.querySelectorAll(".page-transition")),o=()=>{i.forEach(p=>p.classList.remove("is-active"))};o(),requestAnimationFrame(o),setTimeout(o,0);const s=p=>{p.persisted&&o()},l=()=>o();window.addEventListener("pageshow",s),window.addEventListener("focus",l);function c(p){if(!p||!p.href)return!1;try{const y=p.classList;if(y&&y.contains("drop-btn")||p.id==="areas-toggle")return!1}catch{}if(p.target&&p.target.toLowerCase()==="_blank")return!1;const u=p.getAttribute("href");if(!u||u.startsWith("#")||u.startsWith("mailto:")||u.startsWith("tel:"))return!1;const m=new URL(p.href,window.location.href);return!(m.hostname!==window.location.hostname||m.pathname===window.location.pathname&&m.hash)}a();const d=p=>{const u=p.target&&p.target.closest?p.target.closest("a"):null;if(u&&(u.classList&&u.classList.contains("drop-btn")||u.id==="areas-toggle")||!u||!c(u)||p.metaKey||p.ctrlKey||p.shiftKey||p.altKey||p.button!==0)return;p.preventDefault();const m=i.some(g=>{try{return getComputedStyle(g).display!=="none"}catch{return!1}});m&&i.forEach(g=>g.classList.add("is-active"));const y=()=>{try{const g=new URL(u.href,window.location.href),x=t(g.pathname)+g.search+g.hash,w=window.location.pathname+window.location.search+window.location.hash;try{window.__KOOP_FADE_ARRIVAL=!0}catch{}try{e(x)}catch{}setTimeout(()=>{window.location.pathname+window.location.search+window.location.hash===w&&window.location.assign(x)},50)}catch{window.location.assign(u.href)}};m?setTimeout(y,600):y()};return document.addEventListener("click",d,!0),()=>{window.removeEventListener("pageshow",s),window.removeEventListener("focus",l),document.removeEventListener("click",d,!0)}},[]),b.useLayoutEffect(()=>{if(!n.hash){const i=()=>{try{window.scrollTo(0,0)}catch{}try{document.documentElement.scrollTop=0}catch{}try{document.body.scrollTop=0}catch{}};i(),requestAnimationFrame(i),setTimeout(i,0),setTimeout(i,50),setTimeout(i,150)}},[n.pathname,n.search,n.hash]),b.useEffect(()=>{Array.from(document.querySelectorAll(".page-transition")).forEach(l=>l.classList.remove("is-active"));const i=document.getElementById("splash"),o=!!(i&&getComputedStyle(i).display!=="none"&&!i.classList.contains("splash--hide"));if(!o){document.documentElement.classList.add("skip-splash");const l=document.getElementById("app");l?(l.style.opacity="1",l.style.transition=""):document.body.style.opacity="1"}if(!o&&!!(typeof window<"u"&&window.__KOOP_FADE_ARRIVAL)){try{const l=document.documentElement;l.classList.remove("route-fade-in"),l.offsetWidth,l.classList.add("route-fade-in"),setTimeout(()=>{try{l.classList.remove("route-fade-in")}catch{}},280)}catch{}try{window.__KOOP_FADE_ARRIVAL=!1}catch{}}try{a()}catch{}},[n.pathname,n.search,n.hash]),b.useEffect(()=>{if(!n.hash)return;const i=(n.hash||"").replace(/^#/,""),o=()=>{try{const p=document.getElementById(i)||document.querySelector(n.hash);if(p&&p.scrollIntoView)return p.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"}),!0}catch{}return!1};if(o())return;const s=requestAnimationFrame(o),l=setTimeout(o,0),c=setTimeout(o,120),d=setTimeout(o,300);return()=>{cancelAnimationFrame(s),clearTimeout(l),clearTimeout(c),clearTimeout(d)}},[n.pathname,n.hash])}function lg(){b.useEffect(()=>{const e=document.querySelectorAll(".labor-card[data-images]"),n=[];return e.forEach(t=>{const a=(t.dataset.images||"").split(",").map(s=>s.trim()).filter(Boolean);if(a.length<2)return;let i=0;const o=setInterval(()=>{const s=(i+1)%a.length,l=document.createElement("div");l.className="labor-card-fade",l.style.backgroundImage=`url('${a[s]}')`,t.appendChild(l),requestAnimationFrame(()=>{l.style.opacity="1"}),setTimeout(()=>{t.style.setProperty("--bg",`url('${a[s]}')`);try{l.remove()}catch{}i=s},1e3)},3e3);n.push(o)}),()=>{n.forEach(t=>clearInterval(t)),document.querySelectorAll(".labor-card-fade").forEach(t=>{try{t.remove()}catch{}})}},[])}function tn(){b.useEffect(()=>{const e=n=>!n||typeof n!="string"?n:n.replace(/url\(\s*'img\//gi,"url('/img/").replace(/url\(\s*"img\//gi,'url("/img/').replace(/url\(\s*img\//gi,"url(/img/");document.querySelectorAll("[style]").forEach(n=>{try{const t=n.style.getPropertyValue("--bg");if(t&&/url\(/i.test(t)){const a=e(t);a!==t&&n.style.setProperty("--bg",a)}}catch{}}),document.querySelectorAll("[data-images]").forEach(n=>{const t=n.getAttribute("data-images");if(!t)return;const i=t.split(",").map(o=>o.trim()).filter(Boolean).map(o=>o.replace(/^img\//i,"/img/")).join(",");i!==t&&n.setAttribute("data-images",i)})},[location.pathname,location.search,location.hash])}function an(e){if(!e||typeof e!="string")return"";const n=e.replace(/<noscript[\s\S]*?<\/noscript>/gi,""),t=[],a=/<style\b[^>]*>([\s\S]*?)<\/style>/gi;let i;for(;i=a.exec(n);){const s=i[1]||"";s.trim()&&t.push(s.trim())}return t.join(`

`).replace(/url\(\s*(['\"]?)img\//gi,"url($1/img/").replace(/url\(\s*(['\"]?)(?!\/|https?:|data:)([^'"\)]+?\.(?:png|jpe?g|svg|gif|webp|ico))\1\s*\)/gi,(s,l,c)=>`url(${l}/${c}${l})`)}const cg=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Koop Strategic Advisory | Estudio Jurídico & Contable</title>\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\r
\r
  <!-- Fallback si JS está desactivado -->\r
  <noscript>\r
    <style>\r
      #splash{display:none!important}\r
      #app{opacity:1!important}\r
      .page-transition{display:none!important}\r
    </style>\r
  </noscript>\r
\r
  <!-- Decisión temprana: mostrar u omitir splash según ruta y referrer -->\r
  <script>\r
  (() => {\r
    // Tipo de navegación (address bar/bookmark, click, reload, BFCache)\r
    const nav = performance.getEntriesByType('navigation')[0];\r
    const navType = nav ? nav.type : 'navigate'; // 'navigate' | 'reload' | 'back_forward'\r
\r
    // ¿Estamos en home? (raíz o index)\r
    const isRoot = location.pathname === '/' || /index(\\.html?)?$/i.test(location.pathname);\r
\r
    // ¿Viene de página interna del mismo host?\r
    let fromInternal = false;\r
    try {\r
      fromInternal = !!document.referrer && new URL(document.referrer).hostname === location.hostname;\r
    } catch(e){}\r
\r
    // Política: mostrar splash solo en aterrizaje externo a home.\r
    const showOnReload = false; // pon true si quieres mostrar también en F5 de home\r
    const shouldShowSplash =\r
      isRoot && ( (!fromInternal && navType === 'navigate') || (isRoot && navType === 'reload' && showOnReload) );\r
\r
    if (!shouldShowSplash) {\r
      document.documentElement.classList.add('skip-splash');\r
    }\r
\r
    // Si volvemos con BFCache y no debe mostrarse, asegúralo\r
    window.addEventListener('pageshow', (e) => {\r
      if (e.persisted && !shouldShowSplash) {\r
        document.documentElement.classList.add('skip-splash');\r
      }\r
    }, { once: true });\r
  })();\r
  <\/script>\r
\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
\r
    html, body {\r
      width: 100%;\r
      margin: 0;\r
      padding: 0;\r
      box-sizing: border-box;\r
      overflow-x: hidden;\r
      height: 100%;\r
    }\r
    body {\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d; /* Fondo azul visible inmediatamente al salir del splash */\r
      color: #fff;\r
    }\r
\r
    /* Si ya decidimos saltar el splash, ocúltalo y muestra la app */\r
    html.skip-splash #splash { display: none !important; }\r
    html.skip-splash #app { opacity: 1 !important; }\r
\r
    /* =========================\r
       TRANSICIÓN ENTRE PÁGINAS\r
       ========================= */\r
    .page-transition{\r
      position: fixed;\r
      inset: 0;\r
      background: #141b2d; /* mismo color de fondo/base */\r
      z-index: 9998;       /* debajo del splash (9999) */\r
      opacity: 0;\r
      pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{\r
      opacity: 1;\r
      pointer-events: auto;\r
    }\r
\r
    /* =========================\r
       SPLASH\r
       ========================= */\r
    .splash{\r
      position:fixed; inset:0; background:#fff;\r
      display:flex; align-items:center; justify-content:center;\r
      z-index:9999; transition: opacity .8s ease; /* fade-out del splash */\r
    }\r
    .splash--hide{ opacity:0; pointer-events:none; }\r
    .splash__frame{\r
      width: clamp(260px, 34vw, 540px);\r
      min-height: 90px;\r
      display:flex; align-items:center; justify-content:center;\r
      overflow:hidden;\r
      background:#fff;\r
    }\r
    .splash__logo{\r
      width: 100%;\r
      height: auto;\r
      display:block;\r
      opacity:0;                          /* fade-in desde invisible */\r
      transition: opacity 2.5s ease, transform 2.5s ease;\r
      transform: scale(var(--overscan, 1.08)); /* “come” el borde transparente del PNG */\r
      user-select:none; -webkit-user-drag:none;\r
      image-rendering: -webkit-optimize-contrast;\r
    }\r
    .splash__logo.is-visible{ opacity:1; }\r
\r
    /* ===== Contenido visible pero arrancando transparente (se anima por JS) ===== */\r
    #app { opacity: 0; }\r
\r
    /* =========================\r
       ESTILOS DE TU SITIO\r
       ========================= */\r
    /* ===== NAVBAR ===== */\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
.dropdown { position: relative; }\r
.drop-btn { display: flex; align-items: center; }\r
.drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
.dropdown-content {\r
  display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
  background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
  border-radius: 8px; z-index: 100; gap: 32px;\r
}\r
@media (hover: hover) {\r
  .dropdown:hover .dropdown-content { display: flex; }\r
}\r
.dropdown-group { display: flex; flex-direction: column; }\r
.dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
.dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
@media (max-width:700px){\r
  .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
  .dropdown.open .dropdown-content{display:flex;}\r
  .dropdown-content a{padding:6px 0;}\r
}\r
\r
\r
\r
\r
\r
\r
\r
\r
    .hero-section {\r
      min-height: 100vh; width: 100%; position: relative; display: flex; align-items: center; justify-content: flex-start;\r
      background: url('Imagen gigante centro int.JPG') center center/cover no-repeat;\r
      margin-top: 64px; box-sizing: border-box;\r
    }\r
    .hero-overlay {\r
      position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 1;\r
      background: linear-gradient(to right, rgba(35,57,93,.90) 0%, rgba(35,57,93,.60) 45%, rgba(35,57,93,.30) 82%, rgba(35,57,93,0) 100%);\r
    }\r
    .hero-content { position: relative; z-index: 2; max-width: 540px; color: #fff; margin-left: 11.5cm; text-align: left; }\r
    .hero-title { font-size: 2.7em; font-weight: 700; margin-bottom: 10px; line-height: 1.15; text-shadow: 0 4px 24px #23395d66; }\r
    .hero-subtitle { font-size: 2em; font-weight: 300; letter-spacing: 0.03em; margin-bottom: 16px; color: #b4cff6; }\r
    .hero-desc { font-size: 1.15em; color: #eef6ff; margin-bottom: 24px; }\r
    .cta-btn {\r
      background: #ee9626; color: #fff; padding: 14px 38px; border-radius: 30px; font-weight: bold; font-size: 1.08em;\r
      border: none; cursor: pointer; box-shadow: 0 2px 16px #ee96262f; transition: background 0.2s;\r
    }\r
    .cta-btn:hover { background: #c67616; }\r
\r
    .areas-section {\r
      width: 100%; background: linear-gradient(90deg, #e9f0fa 36%, #fff 36%); display: flex; justify-content: center; align-items: stretch;\r
      padding: 0; box-sizing: border-box;\r
    }\r
    .areas-container { display: flex; flex-direction: row; width: 100%; max-width: 1200px; min-height: 500px; }\r
    .areas-title {\r
      flex: 0 0 36%; background: #e9f0fa; display: flex; flex-direction: column; justify-content: center; align-items: flex-start;\r
      padding: 60px 40px; font-size: 2.3em; font-weight: 400; color: #1d3557; letter-spacing: 0.02em; margin-left: 4cm;\r
    }\r
    .areas-title-bold { font-weight: 700; color: #ee9626; }\r
    .areas-title-normal { font-weight: 300; color: #4877b1; }\r
    .areas-cards{\r
      flex: 1 1 64%; background:#fff; box-sizing:border-box;\r
      display:grid; gap:16px; padding:24px;\r
      grid-template-columns:repeat(auto-fit,minmax(260px,1fr));\r
      height:100%;\r
    }\r
\r
    .labor-card{\r
      position:relative; border-radius:14px; overflow:hidden;\r
      min-height:300px; background:#ccc; display:block; text-decoration:none;\r
      height:100%;\r
    }\r
    .labor-card::before{\r
      content:""; position:absolute; inset:0;\r
      background:var(--bg, url('Imagen gigante centro int.JPG')) center/cover no-repeat;\r
      z-index:0;\r
    }\r
    .labor-card::after{\r
      content:""; position:absolute; inset:0;\r
      background:rgba(35,57,93,.55); z-index:2;\r
    }\r
    .labor-card-fade{\r
      position:absolute; inset:0; background:center/cover no-repeat;\r
      opacity:0; transition:opacity 1s ease; z-index:1; pointer-events:none;\r
    }\r
    .labor-card-content{\r
      position:relative; z-index:3; color:#fff; text-align:left;\r
      padding:18px; height:100%; display:flex; flex-direction:column; justify-content:space-between; align-items:flex-start;\r
    }\r
    .labor-card-title{\r
      font-size:1.35rem; font-weight:800; line-height:1.2; margin:2px 0 6px;\r
      text-shadow:0 3px 18px rgba(0,0,0,.35);\r
    }\r
    .labor-card-btn{\r
      align-self:flex-end; background:var(--koop-acento); color:#fff;\r
      padding:8px 20px; border-radius:30px; font-weight:700; font-size:.95rem;\r
      margin-top:10px; margin-bottom:1.5cm; transition:background .2s;\r
    }\r
    .labor-card-btn:hover{ background:#c67616; }\r
\r
    .vision-section { width: 100%; background: #06325a; padding: 90px 0 80px 0; display: flex; justify-content: center; align-items: center; box-sizing: border-box; }\r
    .vision-container { max-width: 980px; margin: 0 auto; text-align: center; color: #fff; }\r
    .vision-title { font-size: 2.8em; font-weight: 400; margin-bottom: 32px; letter-spacing: 0.01em; }\r
    .vision-bold { font-weight: 700; letter-spacing: 0.02em; }\r
    .vision-text { font-size: 1.18em; line-height: 1.6; color: #f5faff; }\r
    .vision-text p { margin-bottom: 22px; }\r
\r
    .full-img-section {\r
      width: 100%; min-height: 418px; margin: 0; padding: 0; overflow: hidden; background: #222;\r
      display: flex; align-items: stretch; justify-content: center; box-sizing: border-box;\r
    }\r
    .full-img {\r
      width: 100%; min-height: 418px; height: 38vw; max-height: 600px; object-fit: cover; object-position: center;\r
      display: block; margin: 0 auto; user-select: none; -webkit-user-drag: none; pointer-events: none;\r
    }\r
\r
    .contact-section {\r
      width: 100%; min-height: 400px; position: relative; background: url(Img2_Atrio.jpg) center center/cover no-repeat;\r
      display: flex; align-items: center; justify-content: center; padding: 0; margin: 0; z-index: 1; box-sizing: border-box;\r
    }\r
    .contact-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(33, 56, 99, 0.84); z-index: 1; }\r
    .contact-modern { justify-content: center; align-items: center; min-height: 400px; background: none; padding: 0; display: flex; width: 100%; }\r
    .contact-modern-content {\r
      width: 100%; max-width: 480px; margin: 0 auto; padding: 70px 20px 60px 20px; background: rgba(33, 56, 99, 0.86);\r
      border-radius: 30px; text-align: center; box-shadow: 0 8px 32px #1123452f; position: relative; z-index: 2;\r
    }\r
    .contact-title { font-size: 2.6em; font-weight: 700; margin-bottom: 14px; color: #fff; }\r
    .contact-name { font-size: 1.6em; font-weight: 400; margin-bottom: 30px; color: #c9e7ff; letter-spacing: 0.03em; }\r
    .contact-social-modern { display: flex; justify-content: center; align-items: center; gap: 38px; margin-bottom: 22px; margin-top: 6px; }\r
    .contact-social-modern .social-icon img { width: 54px; height: 54px; filter: brightness(0) invert(1); transition: transform 0.20s, filter 0.20s; }\r
    .contact-social-modern .social-icon:hover img { transform: scale(1.17) rotate(-6deg); filter: brightness(0) invert(1) drop-shadow(0 4px 22px #ee9626aa); }\r
    .contact-modern-text { margin-top: 14px; color: #c9e7ff; font-size: 1.15em; letter-spacing: 0.02em; }\r
\r
    .site-footer {\r
      width: 100%; background: #353e49; padding: 18px 0 14px 0; border-top: 2px solid #2a3038;\r
      color: #f5f5f5; font-size: 1em; margin-top: 0; box-sizing: border-box;\r
    }\r
    .footer-container {\r
      max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 40px;\r
    }\r
    .footer-left { color: #f5f5f5; letter-spacing: 0.01em; }\r
    .footer-right a { color: #b4cff6; text-decoration: underline; transition: color 0.2s; }\r
    .footer-right a:hover { color: #ee9626; }\r
\r
    @media (max-width: 1200px) {\r
      .hero-content { margin-left: 4cm; }\r
      .areas-container { max-width: 1000px; }\r
    }\r
    @media (max-width: 900px) {\r
      .hero-content { margin-left: 2cm; }\r
      .areas-container { flex-direction: column; min-height: unset; }\r
      .areas-title {\r
        flex: unset; width: 100%; padding: 32px 18px 16px 18px; font-size: 2em; align-items: center; text-align: center; margin-left: 0 !important;\r
      }\r
      .areas-cards { padding: 18px 10px 32px 10px; grid-template-columns:1fr; }\r
      .vision-section { padding: 50px 0 40px 0; }\r
      .vision-title { font-size: 2em; }\r
      .vision-text { font-size: 1em; }\r
      .full-img { height: 52vw; min-height: 220px; max-height: 350px; }\r
      .full-img-section { min-height: 220px; }\r
    }\r
    @media (max-width: 700px) {\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; margin-left: 25px; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
      .hero-content { margin-left: 20px; }\r
      .nav-menu a { font-size: 1.1em; }\r
      .vision-container { padding: 0 18px; }\r
      .vision-title { font-size: 2em; }\r
      .vision-text { font-size: 1em; }\r
      .full-img { height: 72vw; min-height: 200px; max-height: 350px; }\r
      .full-img-section { min-height: 200px; }\r
      .contact-modern-content { padding: 32px 8px 30px 8px; max-width: 97vw; border-radius: 16px; }\r
      .contact-title { font-size: 1.6em; }\r
      .contact-name { font-size: 1em; }\r
      .contact-social-modern .social-icon img { width: 38px; height: 38px; }\r
      .contact-modern-text { font-size: 1em; }\r
      .footer-container { flex-direction: column; gap: 8px; padding: 0 16px; text-align: center; }\r
    }\r
    @media (max-width: 540px) {\r
      .hero-content { margin-left: 8px; max-width: 99vw; }\r
      .areas-title { font-size: 1.28em; padding: 18px 8px 8px 8px; }\r
      .areas-cards { gap: 12px !important; padding: 12px 2vw; }\r
      .vision-title { font-size: 1.1em; }\r
      .full-img { height: 90vw; min-height: 170px; max-height: 270px; }\r
      .full-img-section { min-height: 170px; }\r
    }\r
  </style>\r
</head>\r
<body>\r
\r
  <!-- Overlay de transición (debajo del splash) -->\r
  <div class="page-transition" aria-hidden="true"></div>\r
\r
  <!-- ===== SPLASH ===== -->\r
  <div id="splash" class="splash" aria-hidden="true">\r
    <div class="splash__frame">\r
      <!-- usa %20 por el espacio en el nombre -->\r
      <img id="splashLogo" class="splash__logo" src="Koop%20Logo.png" alt="Koop Strategic Advisory">\r
    </div>\r
  </div>\r
\r
  <!-- ===== CONTENIDO REAL ===== -->\r
  <div id="app">\r
    <nav class="navbar">\r
      <div class="navbar-content">\r
        <a href="index.html" class="logo">\r
          <img src="Koop Logo.png" alt="Logo Koop" class="logo-img">\r
          <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
        </a>\r
        <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
        <div class="nav-menu" id="nav-menu">\r
          <a href="index.html#inicio">INICIO</a>\r
          <div class="dropdown">\r
            <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
            <div class="dropdown-content">\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Derecho</span>\r
                <a href="derecho-laboral.html">Derecho Laboral</a>\r
                <a href="derecho-penal.html">Derecho Penal</a>\r
                <a href="tramites-notariales.html">Trámites notariales</a>\r
                <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
                <a href="derecho-familia.html">Derecho de Familia</a>\r
                <a href="contratacion-publica.html">Contratación Pública</a>\r
                <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
                <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
                <a href="insolvencia.html">Insolvencia</a>\r
              </div>\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Contabilidad</span>\r
                <a href="contabilidad.html">Contabilidad</a>\r
                <a href="auditoria.html">Auditoría</a>\r
                <a href="impuestos.html">Impuestos</a>\r
                <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
              </div>\r
            </div>\r
          </div>\r
          <a href="index.html#vision">NUESTRA VISIÓN</a>\r
          <a href="index.html#contacto">CONTACTO</a>\r
        </div>\r
      </div>\r
    </nav>\r
\r
    <div class="hero-section" id="inicio">\r
      <div class="hero-overlay"></div>\r
      <div class="hero-content">\r
        <div class="hero-box">\r
          <div class="hero-title">Servicios Jurídicos y Contables <br> de alta calidad</div>\r
          <div class="hero-subtitle">Especialistas en Ley Comercial,<br> Litigación, Insolvencia y Acciones de Tutela</div>\r
          <div class="hero-desc">\r
            Equipo experto en derecho empresarial, penal y contable. <br>\r
            Brindamos consultoría estratégica para empresas y personas naturales.\r
          </div>\r
          <a href="#contacto"><button class="cta-btn">Solicita tu consulta</button></a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- SECCIÓN ÁREAS DE PRÁCTICA -->\r
    <section class="areas-section" id="areas">\r
      <div class="areas-container">\r
        <div class="areas-title">\r
          <span class="areas-title-bold">ÁREAS DE</span> <span class="areas-title-normal">PRÁCTICA</span>\r
        </div>\r
        <div class="areas-cards">\r
          <a href="derecho.html" class="labor-card" style="--bg:url('img/paloquemao.png')" data-images="img/paloquemao.png,img/saladecasacionlaboral.png,img/tramitesnotariales.png,img/sexuales.png,img/fiscalia.png">\r
            <div class="labor-card-content">\r
              <div class="labor-card-title">Derecho</div>\r
              <div class="labor-card-btn">Ingresar</div>\r
            </div>\r
          </a>\r
          <a href="contabilidad.html" class="labor-card" style="--bg:url('img/auditoria.svg')" data-images="img/auditoria.jpg,img/impuestos-en-colombia.jpg,img/que_es_la_contabilidad.jpeg">\r
            <div class="labor-card-content">\r
              <div class="labor-card-title">Contabilidad</div>\r
              <div class="labor-card-btn">Ingresar</div>\r
            </div>\r
          </a>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- SECCIÓN NUESTRA VISIÓN -->\r
    <section class="vision-section" id="vision">\r
      <div class="vision-container">\r
        <h2 class="vision-title"><span class="vision-bold">NUESTRA</span> VISIÓN</h2>\r
        <div class="vision-text">\r
          <p>En Koop Strategic Advisory, nuestra visión es consolidarnos como la firma de referencia en servicios jurídicos, contables y de consultoría empresarial, reconocidos por nuestra ética, innovación y excelencia. Nos apasiona acompañar a empresas y personas en la toma de decisiones estratégicas que les permitan crecer, proteger sus intereses y transformar sus proyectos en resultados sostenibles.</p>\r
          <p>Trabajamos bajo un enfoque multidisciplinario, integrando conocimientos legales, contables y de auditoría para ofrecer soluciones integrales y personalizadas. Nuestro equipo está comprometido con la actualización permanente, la confianza y el trato directo con cada cliente.</p>\r
          <p>Buscamos construir relaciones de largo plazo basadas en la transparencia, el profesionalismo y el valor agregado, contribuyendo activamente al desarrollo empresarial y a la construcción de una sociedad más justa y eficiente.</p>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- SECCIÓN IMAGEN COMPLETA -->\r
    <section class="full-img-section">\r
      <img src="Corte suprema de justicia de colombia.jpg" alt="Equipo empresarial Koop" class="full-img">\r
    </section>\r
\r
    <!-- SECCIÓN CONTÁCTANOS MODERNA -->\r
    <section class="contact-section" id="contacto">\r
      <div class="contact-overlay"></div>\r
      <div class="contact-container contact-modern">\r
        <div class="contact-modern-content">\r
          <div class="contact-title" style="text-align:center;">CONTÁCTANOS</div>\r
          <div class="contact-name" style="text-align:center; color:#fff;">KOOP STRATEGIC ADVISORY</div>\r
          <div class="contact-social contact-social-modern">\r
            <a href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" class="social-icon instagram" title="Instagram">\r
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram">\r
            </a>\r
            <a href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" class="social-icon facebook" title="Facebook">\r
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook">\r
            </a>\r
            <a href="https://tiktok.com/" target="_blank" class="social-icon tiktok" title="TikTok">\r
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg" alt="TikTok">\r
            </a>\r
            <a href="https://wa.me/573503965755" target="_blank" class="social-icon whatsapp" title="WhatsApp">\r
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" alt="WhatsApp">\r
            </a>\r
          </div>\r
          <div class="contact-modern-text">Atendemos consultas por cualquiera de nuestras redes sociales.</div>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- FOOTER -->\r
    <footer class="site-footer">\r
      <div class="footer-container">\r
        <div class="footer-left">© 2024 Creado por Koop Strategic Advisory</div>\r
        <div class="footer-right">\r
          <a href="privacidad.html" target="_blank">Política de Privacidad</a>\r
        </div>\r
      </div>\r
    </footer>\r
  </div> <!-- /#app -->\r
\r
  <script>\r
    // ===== Menú móvil =====\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
            navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
\r
\r
    // ===== Splash + Fade in contenido (obedece la decisión del <head>) =====\r
    (function () {\r
      const splash = document.getElementById('splash');\r
      const logo   = document.getElementById('splashLogo');\r
      const app    = document.getElementById('app');\r
\r
      // ¿Debemos saltar el splash?\r
      const skip = document.documentElement.classList.contains('skip-splash');\r
      if (skip) {\r
        try { splash && splash.remove(); } catch(e){}\r
        if (app) app.style.opacity = '1';\r
        return;\r
      }\r
\r
      const MIN_VISIBLE_MS = 2500; // duración del fade-in del logo\r
      const FADE_MS = 800;         // fade-out del splash\r
      const t0 = performance.now();\r
\r
      function revealLogo() {\r
        if (logo) { void logo.offsetWidth; logo.classList.add('is-visible'); }\r
      }\r
\r
      function fadeInApp() {\r
        if (!app) return;\r
        app.style.opacity = '0';\r
        void app.offsetHeight;\r
\r
        if (app.animate) {\r
          const anim = app.animate(\r
            [{ opacity: 0 }, { opacity: 1 }],\r
            { duration: 800, easing: 'ease', fill: 'forwards' }\r
          );\r
          anim.onfinish = () => { app.style.opacity = '1'; };\r
        } else {\r
          app.style.transition = 'opacity 0.8s ease';\r
          requestAnimationFrame(() => { app.style.opacity = '1'; });\r
        }\r
      }\r
\r
      function hideSplashThenShowApp() {\r
        const elapsed = performance.now() - t0;\r
        const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);\r
        setTimeout(() => {\r
          if (splash) splash.classList.add('splash--hide');\r
          setTimeout(() => {\r
            try { splash && splash.remove(); } catch(e){}\r
            fadeInApp();\r
          }, FADE_MS);\r
        }, wait);\r
      }\r
\r
      async function start() {\r
        try {\r
          if (logo && 'decode' in logo) { await logo.decode(); }\r
          else if (logo && !logo.complete) {\r
            await new Promise(res => logo.addEventListener('load', res, { once: true }));\r
          }\r
        } catch(e) {}\r
\r
        revealLogo();\r
        hideSplashThenShowApp();\r
      }\r
\r
      // Volver desde caché del historial → no re-mostrar splash\r
      window.addEventListener('pageshow', (e) => {\r
        if (e.persisted) {\r
          try { splash && splash.remove(); } catch(e){}\r
          if (app) { app.style.opacity = '1'; }\r
        }\r
      });\r
\r
      start();\r
\r
      // Kill-switch por si algún evento no disparó\r
      setTimeout(() => {\r
        const s = document.getElementById('splash');\r
        if (s && document.body.contains(s)) {\r
          s.classList.add('splash--hide');\r
          setTimeout(() => { try { s.remove(); } catch(e){} fadeInApp(); }, 800);\r
        }\r
      }, 7000);\r
    })();\r
\r
    // ===== Transición de salida hacia otras páginas internas =====\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
      \r
      // Asegurar que el overlay esté oculto al cargar la página\r
      function hideOverlay() {\r
        if (overlay) {\r
          overlay.classList.remove('is-active');\r
        }\r
      }\r
      \r
      // Ocultar overlay inmediatamente al cargar\r
      hideOverlay();\r
      \r
      // Ocultar overlay cuando se restaura desde BFCache\r
      window.addEventListener('pageshow', (e) => {\r
        if (e.persisted) {\r
          hideOverlay();\r
        }\r
      });\r
      \r
      // Ocultar overlay cuando se hace focus en la ventana\r
      window.addEventListener('focus', hideOverlay);\r
      \r
      function shouldIntercept(link) {\r
        // Ignora anclas, target=_blank, tel:, mailto:\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false; // externo\r
        // Si es misma página (misma ruta), no interceptar\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
\r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
\r
        // Respeta modificadores (Cmd/Ctrl click abre nueva pestaña)\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
\r
        e.preventDefault();\r
        if (overlay) overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
\r
    // ===== Carrusel de imágenes en áreas =====\r
    (function () {\r
      const cards = document.querySelectorAll('.labor-card[data-images]');\r
      cards.forEach(card => {\r
        const imgs = card.dataset.images.split(',').map(s => s.trim()).filter(Boolean);\r
        if (imgs.length < 2) return;\r
        let idx = 0;\r
        setInterval(() => {\r
          const next = (idx + 1) % imgs.length;\r
          const overlay = document.createElement('div');\r
          overlay.className = 'labor-card-fade';\r
          overlay.style.backgroundImage = \`url('\${imgs[next]}')\`;\r
          card.appendChild(overlay);\r
          requestAnimationFrame(() => { overlay.style.opacity = '1'; });\r
          setTimeout(() => {\r
            card.style.setProperty('--bg', \`url('\${imgs[next]}')\`);\r
            overlay.remove();\r
            idx = next;\r
          }, 1000);\r
        }, 3000);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,dg=()=>{nn(),sg(),rn(),lg();const e=an(cg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsx("div",{id:"splash",className:"splash","aria-hidden":"true",children:r.jsx("div",{className:"splash__frame",children:r.jsx("img",{id:"splashLogo",className:"splash__logo",src:"/Koop%20Logo.png",alt:"Koop Strategic Advisory"})})}),r.jsxs("div",{id:"app",children:[r.jsxs("div",{className:"hero-section hero--home",id:"inicio",children:[r.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:r.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),r.jsx("div",{className:"hero-overlay"}),r.jsx("div",{className:"hero-content",children:r.jsxs("div",{className:"hero-box",children:[r.jsx("div",{className:"hero-title",children:"KOOP es Bogotá, es excelencia académica"}),r.jsxs("div",{className:"hero-subtitle",children:["Expertos en Derecho Administrativo,",r.jsx("br",{})," Penal, Laboral y Médico"]}),r.jsxs("div",{className:"hero-desc",children:["Equipo de abogados y contadores con experiencia. ",r.jsx("br",{}),"Brindamos consultoría estratégica para empresas y personas naturales."]}),r.jsx("a",{className:"cta-btn",href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20:",children:"Solicita tu consulta"})]})})]}),r.jsx("section",{className:"areas-section",id:"areas",children:r.jsxs("div",{className:"areas-container",children:[r.jsxs("div",{className:"areas-title",children:[r.jsx("span",{className:"areas-title-bold",children:"ÁREAS DE"})," ",r.jsx("span",{className:"areas-title-normal",children:"PRÁCTICA"})]}),r.jsxs("div",{className:"areas-cards",children:[r.jsx("a",{href:"/derecho",className:"labor-card",style:{"--bg":"url('/img/paloquemao.png')"},"data-images":"/img/paloquemao.png,/img/saladecasacionlaboral.png,/img/tramitesnotariales.png,/img/sexuales.png,/img/fiscalia.png",children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("div",{className:"labor-card-title",children:"Derecho"}),r.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})}),r.jsx("a",{href:"/contabilidad",className:"labor-card",style:{"--bg":"url('/img/auditoria.jpg')"},"data-images":"/img/auditoria.jpg,/img/impuestos-en-colombia.jpg,/img/que_es_la_contabilidad.jpeg",children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("div",{className:"labor-card-title",children:"Contabilidad"}),r.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})})]})]})}),r.jsx("section",{className:"vision-section",id:"vision",children:r.jsxs("div",{className:"vision-container",children:[r.jsxs("h2",{className:"vision-title",children:[r.jsx("span",{className:"vision-bold",children:"NUESTRA"})," VISIÓN"]}),r.jsxs("div",{className:"vision-text",children:[r.jsx("p",{children:"En Koop Strategic Advisory, nuestra visión es consolidarnos como la firma de referencia en servicios jurídicos, contables y de consultoría empresarial, reconocidos por nuestra ética, innovación y excelencia. Nos apasiona acompañar a empresas y personas en la toma de decisiones estratégicas que les permitan crecer, proteger sus intereses y transformar sus proyectos en resultados sostenibles."}),r.jsx("p",{children:"Trabajamos bajo un enfoque multidisciplinario, integrando conocimientos legales, contables y de auditoría para ofrecer soluciones integrales y personalizadas. Nuestro equipo está comprometido con la actualización permanente, la confianza y el trato directo con cada cliente."}),r.jsx("p",{children:"Buscamos construir relaciones de largo plazo basadas en la transparencia, el profesionalismo y el valor agregado, contribuyendo activamente al desarrollo empresarial y a la construcción de una sociedad más justa y eficiente."})]})]})}),r.jsx("section",{className:"full-img-section",children:r.jsx("img",{src:"/Corte suprema de justicia de colombia.jpg",alt:"Equipo empresarial Koop",className:"full-img"})}),r.jsxs("section",{className:"contact-section",id:"contacto",children:[r.jsx("div",{className:"contact-overlay"}),r.jsx("div",{className:"contact-container contact-modern",children:r.jsxs("div",{className:"contact-modern-content",children:[r.jsx("div",{className:"contact-title",style:{textAlign:"center"},children:"CONTÁCTANOS"}),r.jsx("div",{className:"contact-name",style:{textAlign:"center",color:"#fff"},children:"KOOP STRATEGIC ADVISORY"}),r.jsxs("div",{className:"contact-social contact-social-modern",children:[r.jsx("a",{href:"https://www.instagram.com/kooplawyers/",target:"_blank",className:"social-icon instagram",title:"Instagram",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",alt:"Instagram"})}),r.jsx("a",{href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",className:"social-icon facebook",title:"Facebook",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg",alt:"Facebook"})}),r.jsx("a",{href:"https://www.tiktok.com/@koop.co",target:"_blank",className:"social-icon tiktok",title:"TikTok",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg",alt:"TikTok"})}),r.jsx("a",{href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20",target:"_blank",className:"social-icon whatsapp",title:"WhatsApp",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg",alt:"WhatsApp"})})]}),r.jsx("div",{className:"contact-modern-text",children:"Atendemos consultas por cualquiera de nuestras redes sociales."})]})})]}),r.jsx("footer",{className:"site-footer",children:r.jsxs("div",{className:"footer-container",children:[r.jsx("div",{className:"footer-left",children:"© 2024 Creado por Koop Strategic Advisory"}),r.jsx("div",{className:"footer-right",children:r.jsx("a",{href:"/privacidad",target:"_blank",children:"Política de Privacidad"})})]})})]})," "]})},pg=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Koop Strategic Advisory | Derecho</title>\r
  <!-- Fuentes -->\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">\r
  <noscript><style>.page-transition{display:none!important}</style></noscript>\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
\r
    html, body {\r
      margin: 0; padding: 0; box-sizing: border-box; overflow-x: hidden;\r
      width: 100%; height: 100%;\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d;\r
      color: #fff;\r
    }\r
    *, *::before, *::after { box-sizing: inherit; }\r
\r
    /* ===== Transición entre páginas ===== */\r
    .page-transition{\r
      position: fixed;\r
      inset: 0;\r
      background: #141b2d;\r
      z-index: 9998;\r
      opacity: 0;\r
      pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{\r
      opacity: 1;\r
      pointer-events: auto;\r
    }\r
\r
    /* ===== NAVBAR ===== */\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
.dropdown { position: relative; }\r
.drop-btn { display: flex; align-items: center; }\r
.drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
.dropdown-content {\r
  display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
  background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
  border-radius: 8px; z-index: 100; gap: 32px;\r
}\r
@media (hover: hover) {\r
  .dropdown:hover .dropdown-content { display: flex; }\r
}\r
.dropdown-group { display: flex; flex-direction: column; }\r
.dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
.dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
@media (max-width:700px){\r
  .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
  .dropdown.open .dropdown-content{display:flex;}\r
  .dropdown-content a{padding:6px 0;}\r
}\r
\r
\r
\r
\r
\r
\r
\r
\r
    @media (max-width: 700px) {\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
    }\r
\r
    /* ===== SECCIÓN CARDS ===== */\r
    .labor-cards-section{\r
      width:100%;\r
      background: linear-gradient(90deg, var(--koop-azul-claro) 36%, #fff 36%);\r
      padding: 64px 20px 72px; /* base desktop */\r
      box-sizing: border-box;\r
    }\r
    .labor-cards-container{\r
      max-width:1200px; margin:0 auto; text-align:center; color: var(--koop-azul);\r
    }\r
\r
    /* === Etiqueta/título “DERECHO” (consolidado, sin duplicados) === */\r
    .labor-tag{\r
      display:inline-block;\r
      background: var(--koop-acento);\r
      color:#1f2b3d;\r
      font-weight:800;\r
      letter-spacing:.06em;\r
      border-radius:6px;\r
      margin: 28px 0 18px;             /* separa del borde superior */\r
      padding: 12px 22px;\r
      font-size: clamp(1.2rem, 1rem + 1vw, 1.9rem); /* escala fluida */\r
    }\r
\r
    .labor-title{\r
      font-size:2rem; font-weight:800; margin:6px 0 8px; color: var(--koop-azul);\r
      letter-spacing:.01em; text-transform:uppercase;\r
    }\r
    .labor-sub{\r
      font-size:1.1rem; color:#4877b1; max-width:800px; margin:0 auto 32px;\r
    }\r
    .labor-grid{\r
      display:grid; gap:22px; grid-template-columns: repeat(4, 1fr); margin-top:18px;\r
    }\r
    .labor-card{\r
      position:relative; border-radius:14px; overflow:hidden;\r
      min-height: 300px; background:#ccc; display:block; text-decoration:none;\r
    }\r
    .labor-card::before{\r
      content:""; position:absolute; inset:0;\r
      background: var(--bg, url('Imagen gigante centro int.JPG')) center/cover no-repeat;\r
    }\r
    .labor-card::after{ content:""; position:absolute; inset:0; background:rgba(35,57,93,.55); }\r
    .labor-card-content{\r
      position:relative; z-index:2; color:#fff; text-align:left;\r
      padding: 18px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;\r
    }\r
    .labor-badge{\r
      align-self:flex-start; background: rgba(17,34,66,.85);\r
      padding:6px 12px; border-radius:999px; font-weight:700; font-size:.8rem; letter-spacing:.06em; margin-bottom:10px;\r
    }\r
    .labor-card-title{\r
      font-size:1.35rem; font-weight:800; line-height:1.2; margin:2px 0 6px;\r
      text-shadow:0 3px 18px rgba(0,0,0,.35);\r
    }\r
    .labor-card-desc{ font-size:.95rem; color:#d9e9ff; line-height:1.35; }\r
    .labor-dot{ width:10px; height:10px; border-radius:3px; background:var(--koop-bullet); display:inline-block; margin-right:8px; transform: translateY(-1px); }\r
\r
    @media (max-width: 1100px){ .labor-grid{ grid-template-columns: repeat(3, 1fr); } }\r
    @media (max-width: 820px){ .labor-grid{ grid-template-columns: repeat(2, 1fr); } .labor-title{ font-size:1.7rem; } }\r
\r
    /* En móviles, aumentamos solo el padding superior para que la navbar fija no tape el título */\r
    @media (max-width: 700px){\r
      .labor-cards-section{ padding-top: 96px; } /* antes tenías 64px; aquí garantizamos holgura */\r
      .labor-tag{ font-size: clamp(1.5rem, 1.2rem + 2.5vw, 2.1rem); padding: 14px 24px; margin-top: 24px; }\r
    }\r
\r
    @media (max-width: 520px){\r
      /* mantén tus márgenes laterales originales, pero asegura espacio arriba */\r
      .labor-cards-section{ padding-top: 96px; padding-left: 12px; padding-right: 12px; }\r
    }\r
\r
    /* Cuando se navega por ancla, evita que la navbar tape el inicio de la sección */\r
    #areas-derecho{ scroll-margin-top: calc(var(--nav-h) + 24px); }\r
\r
    /* ===== FOOTER ===== */\r
    footer{\r
      position: relative;\r
      color:#e8f0ff;\r
      background: url('Img23_Atrio.jpg') center center/cover no-repeat;\r
      isolation: isolate;\r
    }\r
    footer::before{\r
      content:""; position:absolute; inset:0;\r
      background: rgba(33,56,99,0.86);\r
      z-index:0;\r
    }\r
\r
    .footer-top{\r
      max-width:1200px; margin:0 auto; padding:56px 20px 28px; display:grid;\r
      grid-template-columns: 1.2fr 1fr 1fr 1fr; gap:28px; position: relative; z-index:1;\r
    }\r
    .footer-brand{ display:flex; flex-direction:column; gap:14px; }\r
    .footer-logo{ display:flex; align-items:center; gap:10px; }\r
    .footer-logo .brand-text{ font-weight:800; letter-spacing:.04em; color:#fff; font-size:1.05rem; }\r
    .footer-copy{ font-size:.92rem; color:#cfe0ff; line-height:1.5; }\r
\r
    .footer-cta{\r
      background: rgba(238,150,38,.1);\r
      border:1px solid rgba(238,150,38,.35);\r
      padding:14px; border-radius:12px;\r
    }\r
    .footer-cta h4{ margin:0 0 8px; font-size:1.05rem; color:#fff; }\r
    .btns{ display:flex; gap:10px; flex-wrap:wrap; }\r
    .btn{\r
      display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-weight:700;\r
      padding:10px 14px; border-radius:10px; border:1px solid transparent; transition:.2s;\r
      font-size:.95rem;\r
    }\r
    .btn-whatsapp{ background: var(--koop-acento); color:#1d283a; }\r
    .btn-whatsapp:hover{ transform: translateY(-1px); filter: brightness(1.05); }\r
    .btn-mail{ background: transparent; color:#e8f0ff; border-color:#2f497c; }\r
    .btn-mail:hover{ background:#1b2a4e; }\r
\r
    .footer-col h5{ margin:0 0 10px; font-size:1.02rem; color:#fff; letter-spacing:.04em; }\r
    .footer-list{ list-style:none; padding:0; margin:0; display:grid; gap:8px; }\r
    .footer-list a{ color:#cfe0ff; text-decoration:none; font-size:.95rem; display:inline-block; padding:4px 0; }\r
    .footer-list a:hover{ color:var(--koop-acento); }\r
\r
    .footer-contact{ font-size:.95rem; color:#cfe0ff; display:grid; gap:8px; }\r
    .footer-contact .item{ display:flex; gap:10px; align-items:flex-start; }\r
\r
    .icon{ width:22px; height:22px; display:inline-block; vertical-align:middle; }\r
\r
    .footer-social{ display:flex; gap:16px; margin-top:8px; }\r
    .footer-social a{ color: var(--koop-acento); display:inline-flex; }\r
    .footer-social .icon{ width:40px; height:40px; }\r
\r
    .mini-footer{\r
      border-top:1px solid #20345d; margin-top:24px;\r
      padding:14px 20px 22px; color:#a8b9d8; font-size:.88rem; position: relative; z-index:1;\r
      background: linear-gradient(180deg, rgba(21,34,65,.55), rgba(21,34,65,.65));\r
    }\r
    .mini-footer .wrap{\r
      max-width:1200px; margin:0 auto; display:flex; gap:16px; justify-content:space-between; align-items:center; flex-wrap:wrap;\r
    }\r
    .mini-links{ display:flex; gap:16px; flex-wrap:wrap; }\r
    .mini-links a{ color:#a8b9d8; text-decoration:none; }\r
    .mini-links a:hover{ color:#fff; }\r
\r
    .footer-divider{\r
      position:absolute; top:-18px; left:0; width:100%; height:18px;\r
      background: linear-gradient(90deg, var(--koop-acento) 0 40%, transparent 40% 100%);\r
      opacity:.75; z-index:1;\r
    }\r
\r
    @media (max-width: 980px){ .footer-top{ grid-template-columns: 1fr 1fr; } }\r
    @media (max-width: 560px){ .footer-top{ grid-template-columns: 1fr; padding:44px 14px 20px; } }\r
\r
    /* ======================================================\r
       FIX HERO EN MÓVILES (si tuvieras hero en esta página)\r
       ====================================================== */\r
    @media (max-width: 540px){\r
      .hero-section{\r
        height: 75vh;\r
        min-height: 420px;\r
        background-image: url('img/paloquemao.png?v=20250810-2');\r
        background-position: center;\r
        background-size: cover;\r
        background-repeat: no-repeat;\r
        background-color: #141b2d;\r
      }\r
      .hero-overlay{ height: 84px; }\r
      .hero-headline{ font-size: clamp(1.9rem, 7.2vw, 2.6rem); }\r
    }\r
  </style>\r
</head>\r
<body>\r
\r
  <!-- Overlay de transición -->\r
  <div class="page-transition" aria-hidden="true"></div>\r
\r
  <!-- NAV -->\r
  <nav class="navbar">\r
    <div class="navbar-content">\r
      <a href="index.html" class="logo">\r
        <img src="Koop Logo.png" alt="Logo Koop" class="logo-img">\r
        <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
      </a>\r
      <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
      <div class="nav-menu" id="nav-menu">\r
          <a href="index.html#inicio">INICIO</a>\r
          <div class="dropdown">\r
            <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
            <div class="dropdown-content">\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Derecho</span>\r
                <a href="derecho-laboral.html">Derecho Laboral</a>\r
                <a href="derecho-penal.html">Derecho Penal</a>\r
                <a href="tramites-notariales.html">Trámites notariales</a>\r
                <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
                <a href="derecho-familia.html">Derecho de Familia</a>\r
                <a href="contratacion-publica.html">Contratación Pública</a>\r
                <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
                <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
                <a href="insolvencia.html">Insolvencia</a>\r
              </div>\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Contabilidad</span>\r
                <a href="contabilidad.html">Contabilidad</a>\r
                <a href="auditoria.html">Auditoría</a>\r
                <a href="impuestos.html">Impuestos</a>\r
                <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
              </div>\r
            </div>\r
          </div>\r
          <a href="index.html#vision">NUESTRA VISIÓN</a>\r
          <a href="index.html#contacto">CONTACTO</a>\r
        </div>\r
    </div>\r
  </nav>\r
\r
  <!-- SECCIÓN CARDS -->\r
  <section class="labor-cards-section" id="areas-derecho">\r
    <div class="labor-cards-container">\r
      <div class="labor-tag">DERECHO</div>\r
      <h2 class="labor-title">Confíe su caso a manos profesionales y con experiencia.</h2>\r
      <p class="labor-sub">Asesoría integral en diversas ramas del derecho.</p>\r
\r
      <div class="labor-grid">\r
        <a href="derecho-penal.html" class="labor-card" style="--bg:url('img/Audiencias.png')">\r
          <div class="labor-card-content">\r
            <div class="labor-card-title"><span class="labor-dot"></span>Derecho Penal</div>\r
            <div class="labor-card-desc">Defensa y asesoría en procesos penales.</div>\r
          </div>\r
        </a>\r
\r
        <a href="derecho-laboral.html" class="labor-card" style="--bg:url('Despidoinjustificado.jpg')">\r
          <div class="labor-card-content">\r
            <div class="labor-card-title"><span class="labor-dot"></span>Derecho Laboral</div>\r
            <div class="labor-card-desc">Soluciones en derecho laboral y seguridad social.</div>\r
          </div>\r
        </a>\r
\r
        <a href="tramites-notariales.html" class="labor-card" style="--bg:url('img/tramitesnotariales.png')">\r
          <div class="labor-card-content">\r
            <div class="labor-card-title"><span class="labor-dot"></span>Trámites notariales</div>\r
            <div class="labor-card-desc">Gestiones notariales rápidas y seguras.</div>\r
          </div>\r
        </a>\r
\r
        <a href="derecho-administrativo.html" class="labor-card" style="--bg:url('img/contrato estatal.jpg')">\r
          <div class="labor-card-content">\r
            <div class="labor-card-title"><span class="labor-dot"></span>Derecho Administrativo</div>\r
            <div class="labor-card-desc">Asesoría en procedimientos y litigios administrativos.</div>\r
          </div>\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ===== FOOTER ===== -->\r
  <footer>\r
    <div class="footer-divider" aria-hidden="true"></div>\r
\r
    <div class="footer-top">\r
      <!-- Columna Marca + CTA -->\r
      <div class="footer-brand">\r
        <div class="footer-logo">\r
          <div class="brand-text">KOOP STRATEGIC ADVISORY</div>\r
        </div>\r
        <p class="footer-copy">\r
          Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral.\r
        </p>\r
        <div class="footer-cta">\r
          <h4>¿Necesitas una asesoría laboral hoy?</h4>\r
          <div class="btns">\r
            <a class="btn btn-whatsapp" href="https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20sobre%20el%20siguiente%20tema:" target="_blank" rel="noopener">\r
              WhatsApp\r
            </a>\r
            <a class="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop">\r
              Escríbenos\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="footer-col">\r
        <h5>Enlaces rápidos</h5>\r
        <ul class="footer-list">\r
          <li><a href="index.html#inicio">Inicio</a></li>\r
          <li><a href="index.html#areas">Áreas de práctica</a></li>\r
          <li><a href="index.html#vision">Nuestra visión</a></li>\r
          <li><a href="index.html#contacto">Contacto</a></li>\r
        </ul>\r
      </div>\r
\r
      <div class="footer-col">\r
        <h5>Áreas de Derecho</h5>\r
        <ul class="footer-list">\r
          <li><a href="derecho-penal.html">Derecho penal</a></li>\r
          <li><a href="derecho-laboral.html">Derecho laboral</a></li>\r
          <li><a href="tramites-notariales.html">Trámites notariales</a></li>\r
          <li><a href="derecho-administrativo.html">Derecho administrativo</a></li>\r
        </ul>\r
      </div>\r
\r
      <div class="footer-col">\r
        <h5>Contacto</h5>\r
        <div class="footer-contact">\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>\r
            <span>Bogotá D.C., Colombia</span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="tel:+573137213878">+57 (313) 721 38 78</a></span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="mailto:direccionjuridicakoop@hotmail.com">direccionjuridicakoop@hotmail.com</a></span>\r
          </div>\r
        </div>\r
\r
        <div class="footer-social" aria-label="Redes sociales">\r
          <a aria-label="Instagram" href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" rel="noopener" title="Instagram">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>\r
            </svg>\r
          </a>\r
          <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>\r
            </svg>\r
          </a>\r
          <a aria-label="TikTok" href="https://www.tiktok.com/@koopstrategicadvisory" target="_blank" rel="noopener" title="TikTok">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"/>\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mini-footer">\r
      <div class="wrap">\r
        <div>© <span id="year"></span> Koop Strategic Advisory. Todos los derechos reservados.</div>\r
        <div class="mini-links">\r
          <a href="politica-privacidad.html">Política de privacidad</a>\r
          <a href="terminos.html">Términos y condiciones</a>\r
          <a href="#inicio">Volver arriba ↑</a>\r
        </div>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <script>\r
    // Menú móvil\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
            navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
\r
    // Año dinámico\r
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();\r
\r
    // Manejo de transiciones\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
\r
      function hideOverlay() {\r
        if (overlay) { overlay.classList.remove('is-active'); }\r
      }\r
      hideOverlay();\r
\r
      window.addEventListener('pageshow', (e) => { if (e.persisted) hideOverlay(); });\r
      window.addEventListener('focus', hideOverlay);\r
      window.addEventListener('load', hideOverlay);\r
\r
      function shouldIntercept(link) {\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false;\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
\r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
        e.preventDefault();\r
        overlay && overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,Fu="/assets/Despidoinjustificado-WBwGt-rg.jpg",ug=()=>{nn(),rn();const e=an(pg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsx("section",{className:"labor-cards-section",id:"areas-derecho",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"DERECHO"}),r.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),r.jsx("p",{className:"labor-sub",children:"Asesoría integral en diversas ramas del derecho."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx(O,{to:"/derecho-penal",className:"labor-card",style:{"--bg":"url('/img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho Penal"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa y asesoría en procesos penales."})]})}),r.jsx(O,{to:"/derecho-laboral",className:"labor-card",style:{"--bg":`url(${Fu})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho Laboral"]}),r.jsx("div",{className:"labor-card-desc",children:"Soluciones en derecho laboral y seguridad social."})]})}),r.jsx(O,{to:"/tramites-notariales",className:"labor-card",style:{"--bg":"url('img/tramitesnotariales.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Trámites notariales"]}),r.jsx("div",{className:"labor-card-desc",children:"Gestiones notariales rápidas y seguras."})]})}),r.jsx(O,{to:"/derecho-administrativo",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho Administrativo"]}),r.jsx("div",{className:"labor-card-desc",children:"Asesoría en procedimientos y litigios administrativos."})]})}),r.jsx(O,{to:"/derecho-familia",className:"labor-card",style:{"--bg":"url('/img/ninofamilia.webp')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho de Familia"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámites administrativos y judiciales de familia."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsx("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:"WhatsApp"}),r.jsx("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:"Escríbenos"})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(O,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(O,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(O,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(O,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Áreas de Derecho"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(O,{to:"/derecho-penal",children:"Derecho penal"})}),r.jsx("li",{children:r.jsx(O,{to:"/derecho-laboral",children:"Derecho laboral"})}),r.jsx("li",{children:r.jsx(O,{to:"/tramites-notariales",children:"Trámites notariales"})}),r.jsx("li",{children:r.jsx(O,{to:"/derecho-administrativo",children:"Derecho administrativo"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx(O,{to:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},hg=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Koop Strategic Advisory | Área de Contabilidad</title>\r
  <meta name="description" content="Subáreas de contabilidad como auditoría, impuestos y planeación patrimonial.">\r
  <!-- Fuentes -->\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">\r
  <noscript><style>.page-transition{display:none!important}</style></noscript>\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
\r
    html, body {\r
      margin: 0; padding: 0; box-sizing: border-box; overflow-x: hidden;\r
      width: 100%; height: 100%;\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d;\r
      color: #fff;\r
    }\r
    *, *::before, *::after { box-sizing: inherit; }\r
\r
    /* ===== Transición entre páginas ===== */\r
    .page-transition{\r
      position: fixed;\r
      inset: 0;\r
      background: #141b2d;\r
      z-index: 9998;\r
      opacity: 0;\r
      pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{\r
      opacity: 1;\r
      pointer-events: auto;\r
    }\r
\r
    /* ===== NAVBAR ===== */\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
.dropdown { position: relative; }\r
.drop-btn { display: flex; align-items: center; }\r
.drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
.dropdown-content {\r
  display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
  background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
  border-radius: 8px; z-index: 100; gap: 32px;\r
}\r
@media (hover: hover) {\r
  .dropdown:hover .dropdown-content { display: flex; }\r
}\r
.dropdown-group { display: flex; flex-direction: column; }\r
.dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
.dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
@media (max-width:700px){\r
  .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
  .dropdown.open .dropdown-content{display:flex;}\r
  .dropdown-content a{padding:6px 0;}\r
}\r
\r
\r
\r
\r
\r
\r
\r
\r
    @media (max-width: 700px) {\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
    }\r
\r
    /* ===== SECCIÓN CARDS ===== */\r
    .labor-cards-section{\r
      width:100%;\r
      background: linear-gradient(90deg, var(--koop-azul-claro) 36%, #fff 36%);\r
      padding: 64px 20px 72px; box-sizing: border-box;\r
    }\r
    .labor-cards-container{\r
      max-width:1200px; margin:0 auto; text-align:center; color: var(--koop-azul);\r
    }\r
    .labor-tag{\r
      display:inline-block;\r
      background: var(--koop-acento);\r
      color:#1f2b3d;\r
      font-weight:800;\r
      letter-spacing:.06em;\r
      border-radius:6px;\r
      margin: 28px 0 18px;\r
      padding: 12px 22px;\r
      font-size: clamp(1.2rem, 1rem + 1vw, 1.9rem);\r
    }\r
    .labor-title{\r
      font-size:2rem; font-weight:800; margin:6px 0 8px; color: var(--koop-azul);\r
      letter-spacing:.01em; text-transform:uppercase;\r
    }\r
    .labor-sub{\r
      font-size:1.1rem; color:#4877b1; max-width:800px; margin:0 auto 32px;\r
    }\r
    .labor-grid{\r
      display:grid; gap:22px; grid-template-columns: repeat(4, 1fr); margin-top:18px;\r
    }\r
    .labor-card{\r
      position:relative; border-radius:14px; overflow:hidden;\r
      min-height: 300px; background:#ccc; display:block; text-decoration:none;\r
    }\r
    .labor-card::before{\r
      content:""; position:absolute; inset:0;\r
      background: var(--bg, url('Imagen gigante centro int.JPG')) center/cover no-repeat;\r
    }\r
    .labor-card::after{ content:""; position:absolute; inset:0; background:rgba(35,57,93,.55); }\r
    .labor-card-content{\r
      position:relative; z-index:2; color:#fff; text-align:left;\r
      padding: 18px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;\r
    }\r
    .labor-badge{\r
      align-self:flex-start; background: rgba(17,34,66,.85);\r
      padding:6px 12px; border-radius:999px; font-weight:700; font-size:.8rem; letter-spacing:.06em; margin-bottom:10px;\r
    }\r
    .labor-card-title{\r
      font-size:1.35rem; font-weight:800; line-height:1.2; margin:2px 0 6px;\r
      text-shadow:0 3px 18px rgba(0,0,0,.35);\r
    }\r
    .labor-card-desc{ font-size:.95rem; color:#d9e9ff; line-height:1.35; }\r
    .labor-dot{ width:10px; height:10px; border-radius:3px; background:var(--koop-bullet); display:inline-block; margin-right:8px; transform: translateY(-1px); }\r
\r
      @media (max-width: 1100px){ .labor-grid{ grid-template-columns: repeat(3, 1fr); } }\r
      @media (max-width: 820px){ .labor-grid{ grid-template-columns: repeat(2, 1fr); } .labor-title{ font-size:1.7rem; } }\r
      /* En móviles, aumentamos solo el padding superior para que la navbar fija no tape el título */\r
      @media (max-width: 700px){\r
        .labor-cards-section{ padding-top: 96px; }\r
        .labor-tag{ font-size: clamp(1.5rem, 1.2rem + 2.5vw, 2.1rem); padding: 14px 24px; margin-top: 24px; }\r
      }\r
      @media (max-width: 520px){\r
        /* mantén tus márgenes laterales originales, pero asegura espacio arriba */\r
        .labor-cards-section{ padding-top: 96px; padding-left: 12px; padding-right: 12px; }\r
      }\r
      /* Cuando se navega por ancla, evita que la navbar tape el inicio de la sección */\r
      #subareas-contabilidad{ scroll-margin-top: calc(var(--nav-h) + 24px); }\r
\r
    /* ===== FOOTER ===== */\r
    footer{\r
      position: relative;\r
      color:#e8f0ff;\r
      background: url('Img23_Atrio.jpg') center center/cover no-repeat;\r
      isolation: isolate;\r
    }\r
    footer::before{\r
      content:""; position:absolute; inset:0;\r
      background: rgba(33,56,99,0.86);\r
      z-index:0;\r
    }\r
\r
    .footer-top{\r
      max-width:1200px; margin:0 auto; padding:56px 20px 28px; display:grid;\r
      grid-template-columns: 1.2fr 1fr 1fr 1fr; gap:28px; position: relative; z-index:1;\r
    }\r
    .footer-brand{ display:flex; flex-direction:column; gap:14px; }\r
    /* Logo gráfico eliminado; solo texto de marca */\r
    .footer-logo{ display:flex; align-items:center; gap:10px; }\r
    .footer-logo .brand-text{ font-weight:800; letter-spacing:.04em; color:#fff; font-size:1.05rem; }\r
    .footer-copy{ font-size:.92rem; color:#cfe0ff; line-height:1.5; }\r
\r
    .footer-cta{\r
      background: rgba(238,150,38,.1);\r
      border:1px solid rgba(238,150,38,.35);\r
      padding:14px; border-radius:12px;\r
    }\r
    .footer-cta h4{ margin:0 0 8px; font-size:1.05rem; color:#fff; }\r
    .btns{ display:flex; gap:10px; flex-wrap:wrap; }\r
    .btn{\r
      display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-weight:700;\r
      padding:10px 14px; border-radius:10px; border:1px solid transparent; transition:.2s;\r
      font-size:.95rem;\r
    }\r
    .btn-whatsapp{ background: var(--koop-acento); color:#1d283a; }\r
    .btn-whatsapp:hover{ transform: translateY(-1px); filter: brightness(1.05); }\r
    .btn-mail{ background: transparent; color:#e8f0ff; border-color:#2f497c; }\r
    .btn-mail:hover{ background:#1b2a4e; }\r
\r
    .footer-col h5{ margin:0 0 10px; font-size:1.02rem; color:#fff; letter-spacing:.04em; }\r
    .footer-list{ list-style:none; padding:0; margin:0; display:grid; gap:8px; }\r
    .footer-list a{ color:#cfe0ff; text-decoration:none; font-size:.95rem; display:inline-block; padding:4px 0; }\r
    .footer-list a:hover{ color:var(--koop-acento); }\r
\r
    .footer-contact{ font-size:.95rem; color:#cfe0ff; display:grid; gap:8px; }\r
    .footer-contact .item{ display:flex; gap:10px; align-items:flex-start; }\r
\r
    /* Tamaño base de TODOS los íconos (contacto, botones, etc.) */\r
    .icon{ width:22px; height:22px; display:inline-block; vertical-align:middle; }\r
\r
    /* Redes sociales: solo un poco más grandes (24px) y en naranja corporativo */\r
    .footer-social{ display:flex; gap:16px; margin-top:8px; }\r
    .footer-social a{ color: var(--koop-acento); display:inline-flex; }\r
    .footer-social .icon{ width:40px; height:40px; }\r
\r
    .mini-footer{\r
      border-top:1px solid #20345d; margin-top:24px;\r
      padding:14px 20px 22px; color:#a8b9d8; font-size:.88rem; position: relative; z-index:1;\r
      background: linear-gradient(180deg, rgba(21,34,65,.55), rgba(21,34,65,.65));\r
    }\r
    .mini-footer .wrap{\r
      max-width:1200px; margin:0 auto; display:flex; gap:16px; justify-content:space-between; align-items:center; flex-wrap:wrap;\r
    }\r
    .mini-links{ display:flex; gap:16px; flex-wrap:wrap; }\r
    .mini-links a{ color:#a8b9d8; text-decoration:none; }\r
    .mini-links a:hover{ color:#fff; }\r
\r
    .footer-divider{\r
      position:absolute; top:-18px; left:0; width:100%; height:18px;\r
      background: linear-gradient(90deg, var(--koop-acento) 0 40%, transparent 40% 100%);\r
      opacity:.75; z-index:1;\r
    }\r
\r
    @media (max-width: 980px){ .footer-top{ grid-template-columns: 1fr 1fr; } }\r
    @media (max-width: 560px){ .footer-top{ grid-template-columns: 1fr; padding:44px 14px 20px; } }\r
  </style>\r
</head>\r
<body>\r
\r
  <!-- Overlay de transición -->\r
  <div class="page-transition" aria-hidden="true"></div>\r
\r
  <!-- NAV -->\r
  <nav class="navbar">\r
    <div class="navbar-content">\r
      <a href="index.html" class="logo">\r
        <img src="Koop Logo.png" alt="Logo Koop" class="logo-img">\r
        <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
      </a>\r
      <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
      <div class="nav-menu" id="nav-menu">\r
          <a href="index.html#inicio">INICIO</a>\r
          <div class="dropdown">\r
            <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
            <div class="dropdown-content">\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Derecho</span>\r
                <a href="derecho-laboral.html">Derecho Laboral</a>\r
                <a href="derecho-penal.html">Derecho Penal</a>\r
                <a href="tramites-notariales.html">Trámites notariales</a>\r
                <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
                <a href="derecho-familia.html">Derecho de Familia</a>\r
                <a href="contratacion-publica.html">Contratación Pública</a>\r
                <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
                <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
                <a href="insolvencia.html">Insolvencia</a>\r
              </div>\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Contabilidad</span>\r
                <a href="contabilidad.html">Contabilidad</a>\r
                <a href="auditoria.html">Auditoría</a>\r
                <a href="impuestos.html">Impuestos</a>\r
                <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
              </div>\r
            </div>\r
          </div>\r
          <a href="index.html#vision">NUESTRA VISIÓN</a>\r
          <a href="index.html#contacto">CONTACTO</a>\r
        </div>\r
    </div>\r
  </nav>\r
\r
  <!-- SECCIÓN CARDS -->\r
  <section class="labor-cards-section" id="subareas-contabilidad">\r
    <div class="labor-cards-container">\r
      <div class="labor-tag">CONTABILIDAD</div>\r
      <h2 class="labor-title">Cómo te ayudamos</h2>\r
      <p class="labor-sub">Selecciona la especialidad contable que necesitas.</p>\r
\r
      <div class="labor-grid">\r
        <!-- Auditoría y Revisoría Fiscal -->\r
        <a href="auditoria.html" class="labor-card" style="--bg:url('img/auditoria.jpg')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SUBÁREA</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Auditoría y Revisoría Fiscal</div>\r
            <div class="labor-card-desc">Supervisión financiera independiente.</div>\r
          </div>\r
        </a>\r
\r
        <!-- Impuestos y Planeación Tributaria -->\r
        <a href="impuestos.html" class="labor-card" style="--bg:url('img/impuestos-en-colombia.jpg')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SUBÁREA</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Impuestos y Planeación Tributaria</div>\r
            <div class="labor-card-desc">Consultoría y cumplimiento fiscal.</div>\r
          </div>\r
        </a>\r
\r
        <!-- Planeación Patrimonial -->\r
        <a href="planeacion-patrimonial.html" class="labor-card" style="--bg:url('img/que_es_la_contabilidad.jpeg')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SUBÁREA</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Planeación Patrimonial</div>\r
            <div class="labor-card-desc">Protección y optimización del patrimonio.</div>\r
          </div>\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ===== FOOTER ===== -->\r
  <footer>\r
    <div class="footer-divider" aria-hidden="true"></div>\r
\r
    <div class="footer-top">\r
      <!-- Columna Marca + CTA -->\r
      <div class="footer-brand">\r
        <div class="footer-logo">\r
          <!-- Logo gráfico eliminado; solo texto -->\r
          <div class="brand-text">KOOP STRATEGIC ADVISORY</div>\r
        </div>\r
        <p class="footer-copy">\r
          Estudio jurídico & contable. Soluciones integrales para tu empresa.\r
        </p>\r
        <div class="footer-cta">\r
          <h4>¿Necesitas una asesoría contable?</h4>\r
          <div class="btns">\r
            <a class="btn btn-whatsapp" href="https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20consultar%20los%20servicios%20contables:" target="_blank" rel="noopener">\r
              <!-- Ícono WhatsApp (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"/>\r
              </svg>\r
              WhatsApp\r
            </a>\r
            <a class="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Contabilidad%20Koop">\r
              <!-- ícono mail (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
              Escríbenos\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Enlaces rápidos -->\r
      <div class="footer-col">\r
        <h5>Enlaces rápidos</h5>\r
        <ul class="footer-list">\r
          <li><a href="index.html#inicio">Inicio</a></li>\r
          <li><a href="index.html#areas">Áreas de práctica</a></li>\r
          <li><a href="index.html#vision">Nuestra visión</a></li>\r
          <li><a href="index.html#contacto">Contacto</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Servicios de Familia -->\r
      <div class="footer-col">\r
        <h5>Servicios de familia</h5>\r
        <ul class="footer-list">\r
          <li><a href="#divorcio">Divorcio y separación</a></li>\r
          <li><a href="#custodia">Custodia y patria potestad</a></li>\r
          <li><a href="#alimentos">Alimentos y pensión alimentaria</a></li>\r
          <li><a href="#sociedad">Liquidación de sociedad conyugal</a></li>\r
          <li><a href="#adopciones">Adopciones</a></li>\r
          <li><a href="#capitulaciones">Capitulaciones matrimoniales</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Contacto + Redes -->\r
      <div class="footer-col">\r
        <h5>Contacto</h5>\r
        <div class="footer-contact">\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>\r
            <span>Bogotá D.C., Colombia</span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="tel:+573137213878">+57 (313) 721 38 78</a></span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="mailto:direccionjuridicakoop@hotmail.com">direccionjuridicakoop@hotmail.com</a></span>\r
          </div>\r
        </div>\r
\r
        <div class="footer-social" aria-label="Redes sociales">\r
          <!-- Instagram -->\r
          <a aria-label="Instagram" href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" rel="noopener" title="Instagram">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>\r
            </svg>\r
          </a>\r
          <!-- Facebook -->\r
          <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>\r
            </svg>\r
          </a>\r
          <!-- TikTok -->\r
          <a aria-label="TikTok" href="https://www.tiktok.com/@koopstrategicadvisory" target="_blank" rel="noopener" title="TikTok">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"/>\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mini-footer">\r
      <div class="wrap">\r
        <div>© <span id="year"></span> Koop Strategic Advisory. Todos los derechos reservados.</div>\r
        <div class="mini-links">\r
          <a href="politica-privacidad.html">Política de privacidad</a>\r
          <a href="terminos.html">Términos y condiciones</a>\r
          <a href="#inicio">Volver arriba ↑</a>\r
        </div>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <script>\r
    // Menú móvil\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
            navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
\r
    // Año dinámico\r
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();\r
\r
    // Manejo de transiciones\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
      \r
      // Asegurar que el overlay esté oculto al cargar la página\r
      function hideOverlay() {\r
        if (overlay) {\r
          overlay.classList.remove('is-active');\r
        }\r
      }\r
      \r
      // Ocultar overlay inmediatamente al cargar\r
      hideOverlay();\r
      \r
      // Ocultar overlay cuando se restaura desde BFCache\r
      window.addEventListener('pageshow', (e) => {\r
        if (e.persisted) {\r
          hideOverlay();\r
        }\r
      });\r
      \r
      // Ocultar overlay cuando se hace focus en la ventana\r
      window.addEventListener('focus', hideOverlay);\r
      \r
      // Ocultar overlay cuando se carga completamente la página\r
      window.addEventListener('load', hideOverlay);\r
      \r
      // Transición de salida interna\r
      function shouldIntercept(link) {\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false;\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
      \r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
\r
        e.preventDefault();\r
        overlay && overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,fg=()=>{nn(),rn();const e=an(hg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsx("section",{className:"labor-cards-section",id:"subareas-contabilidad",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"CONTABILIDAD"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Selecciona la especialidad contable que necesitas."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"/auditoria",className:"labor-card",style:{"--bg":"url('img/auditoria.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Auditoría y Revisoría Fiscal"]}),r.jsx("div",{className:"labor-card-desc",children:"Supervisión financiera independiente."})]})}),r.jsx("a",{href:"/impuestos",className:"labor-card",style:{"--bg":"url('img/impuestos-en-colombia.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Impuestos y Planeación Tributaria"]}),r.jsx("div",{className:"labor-card-desc",children:"Consultoría y cumplimiento fiscal."})]})}),r.jsx("a",{href:"/asesoria-contable",className:"labor-card",style:{"--bg":"url('img/que_es_la_contabilidad.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Asesoría Contable"]}),r.jsx("div",{className:"labor-card-desc",children:"Protección y optimización del patrimonio."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Soluciones integrales para tu empresa."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una Asesoría Contable?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20consultar%20los%20servicios%20contables:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Contabilidad%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(O,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(O,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(O,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(O,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios contables"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"/auditoria",children:"Auditoría y Revisoría Fiscal"})}),r.jsx("li",{children:r.jsx("a",{href:"/impuestos",children:"Impuestos y Planeación Tributaria"})}),r.jsx("li",{children:r.jsx("a",{href:"/asesoria-contable",children:"Asesoría Contable"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},mg=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Koop Strategic Advisory | Auditoría & Revisoría Fiscal</title>\r
  <!-- Fuentes -->\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">\r
  <noscript><style>.page-transition{display:none!important}</style></noscript>\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
\r
    html, body {\r
      margin: 0; padding: 0; box-sizing: border-box; overflow-x: hidden;\r
      width: 100%; height: 100%;\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d;\r
      color: #fff;\r
    }\r
    *, *::before, *::after { box-sizing: inherit; }\r
\r
    /* ===== Transición entre páginas ===== */\r
    .page-transition{\r
      position: fixed;\r
      inset: 0;\r
      background: #141b2d;\r
      z-index: 9998;\r
      opacity: 0;\r
      pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{\r
      opacity: 1;\r
      pointer-events: auto;\r
    }\r
\r
    /* ===== NAVBAR ===== */\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
.dropdown { position: relative; }\r
.drop-btn { display: flex; align-items: center; }\r
.drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
.dropdown-content {\r
  display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
  background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
  border-radius: 8px; z-index: 100; gap: 32px;\r
}\r
@media (hover: hover) {\r
  .dropdown:hover .dropdown-content { display: flex; }\r
}\r
.dropdown-group { display: flex; flex-direction: column; }\r
.dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
.dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
@media (max-width:700px){\r
  .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
  .dropdown.open .dropdown-content{display:flex;}\r
  .dropdown-content a{padding:6px 0;}\r
}\r
\r
\r
\r
\r
\r
\r
\r
\r
    @media (max-width: 700px) {\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
    }\r
\r
    /* ===== HERO ===== */\r
    .hero-section {\r
      height: clamp(280px, 44vh, 500px);\r
      min-height: 280px; width: 100%; position: relative; display: block;\r
      background: url('img/auditoria.jpg') center center/cover no-repeat;\r
      margin-top: var(--nav-h); overflow: hidden; z-index: 1;\r
    }\r
    /* Franja azul de ancho completo, centrada verticalmente */\r
    .hero-overlay {\r
      position: absolute; top: 50%; left: 0; width: 100%;\r
      height: 100px; background: rgba(35,57,93,0.92);\r
      transform: translateY(-50%); z-index: 1;\r
      border-top: 1px solid rgba(255,255,255,.06);\r
      border-bottom: 1px solid rgba(255,255,255,.06);\r
    }\r
    /* Texto centrado y por encima de la franja */\r
    .hero-text{\r
      position: absolute; inset: 0;\r
      z-index: 2; display: flex; align-items: center; justify-content: center;\r
      text-align: center; padding: 0 16px;\r
    }\r
    .hero-headline{\r
      font-family: 'Dancing Script', cursive;\r
      font-weight: 700; letter-spacing: .02em; line-height: 1.1;\r
      font-size: clamp(2rem, 6vw, 4rem);\r
      color: #ffffff; text-shadow: 0 3px 18px rgba(0,0,0,.35);\r
    }\r
    @media (max-width: 520px){\r
      .hero-headline{ font-size: clamp(1.8rem, 7vw, 2.6rem); }\r
      .hero-overlay{ height: 84px; }\r
    }\r
    @media (max-width: 900px) { .hero-section { height: clamp(260px, 48vh, 520px); } }\r
    @media (max-width: 540px) { .hero-section { height: clamp(220px, 44vh, 480px); } }\r
\r
    /* ===== SECCIÓN CARDS ===== */\r
    .labor-cards-section{\r
      width:100%;\r
      background: linear-gradient(90deg, var(--koop-azul-claro) 36%, #fff 36%);\r
      padding: 64px 20px 72px; box-sizing: border-box;\r
    }\r
    .labor-cards-container{\r
      max-width:1200px; margin:0 auto; text-align:center; color: var(--koop-azul);\r
    }\r
    .labor-tag{\r
      display:inline-block; background: var(--koop-acento); color:#1f2b3d;\r
      font-weight:700; letter-spacing:.06em; font-size:.85rem;\r
      padding:8px 14px; border-radius:6px; margin-bottom:18px;\r
    }\r
    .labor-title{\r
      font-size:2rem; font-weight:800; margin:6px 0 8px; color: var(--koop-azul);\r
      letter-spacing:.01em; text-transform:uppercase;\r
    }\r
    .labor-sub{\r
      font-size:1.1rem; color:#4877b1; max-width:800px; margin:0 auto 32px;\r
    }\r
    .labor-grid{\r
      display:grid; gap:22px; grid-template-columns: repeat(4, 1fr); margin-top:18px;\r
    }\r
    .labor-card{\r
      position:relative; border-radius:14px; overflow:hidden;\r
      min-height: 300px; background:#ccc; display:block; text-decoration:none;\r
    }\r
    .labor-card::before{\r
      content:""; position:absolute; inset:0;\r
      background: var(--bg, url('Imagen gigante centro int.JPG')) center/cover no-repeat;\r
    }\r
    .labor-card::after{ content:""; position:absolute; inset:0; background:rgba(35,57,93,.55); }\r
    .labor-card-content{\r
      position:relative; z-index:2; color:#fff; text-align:left;\r
      padding: 18px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;\r
    }\r
    .labor-badge{\r
      align-self:flex-start; background: rgba(17,34,66,.85);\r
      padding:6px 12px; border-radius:999px; font-weight:700; font-size:.8rem; letter-spacing:.06em; margin-bottom:10px;\r
    }\r
    .labor-card-title{\r
      font-size:1.35rem; font-weight:800; line-height:1.2; margin:2px 0 6px;\r
      text-shadow:0 3px 18px rgba(0,0,0,.35);\r
    }\r
    .labor-card-desc{ font-size:.95rem; color:#d9e9ff; line-height:1.35; }\r
    .labor-dot{ width:10px; height:10px; border-radius:3px; background:var(--koop-bullet); display:inline-block; margin-right:8px; transform: translateY(-1px); }\r
\r
    @media (max-width: 1100px){ .labor-grid{ grid-template-columns: repeat(3, 1fr); } }\r
    @media (max-width: 820px){ .labor-grid{ grid-template-columns: repeat(2, 1fr); } .labor-title{ font-size:1.7rem; } }\r
    @media (max-width: 520px){ .labor-grid{ grid-template-columns: 1fr; } .labor-cards-section{ padding: 44px 12px 52px; } .labor-sub{ font-size:1rem; } }\r
\r
    /* ===== FOOTER ===== */\r
    footer{\r
      position: relative;\r
      color:#e8f0ff;\r
      background: url('Img23_Atrio.jpg') center center/cover no-repeat;\r
      isolation: isolate;\r
    }\r
    footer::before{\r
      content:""; position:absolute; inset:0;\r
      background: rgba(33,56,99,0.86);\r
      z-index:0;\r
    }\r
\r
    .footer-top{\r
      max-width:1200px; margin:0 auto; padding:56px 20px 28px; display:grid;\r
      grid-template-columns: 1.2fr 1fr 1fr 1fr; gap:28px; position: relative; z-index:1;\r
    }\r
    .footer-brand{ display:flex; flex-direction:column; gap:14px; }\r
    /* Logo gráfico eliminado; solo texto de marca */\r
    .footer-logo{ display:flex; align-items:center; gap:10px; }\r
    .footer-logo .brand-text{ font-weight:800; letter-spacing:.04em; color:#fff; font-size:1.05rem; }\r
    .footer-copy{ font-size:.92rem; color:#cfe0ff; line-height:1.5; }\r
\r
    .footer-cta{\r
      background: rgba(238,150,38,.1);\r
      border:1px solid rgba(238,150,38,.35);\r
      padding:14px; border-radius:12px;\r
    }\r
    .footer-cta h4{ margin:0 0 8px; font-size:1.05rem; color:#fff; }\r
    .btns{ display:flex; gap:10px; flex-wrap:wrap; }\r
    .btn{\r
      display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-weight:700;\r
      padding:10px 14px; border-radius:10px; border:1px solid transparent; transition:.2s;\r
      font-size:.95rem;\r
    }\r
    .btn-whatsapp{ background: var(--koop-acento); color:#1d283a; }\r
    .btn-whatsapp:hover{ transform: translateY(-1px); filter: brightness(1.05); }\r
    .btn-mail{ background: transparent; color:#e8f0ff; border-color:#2f497c; }\r
    .btn-mail:hover{ background:#1b2a4e; }\r
\r
    .footer-col h5{ margin:0 0 10px; font-size:1.02rem; color:#fff; letter-spacing:.04em; }\r
    .footer-list{ list-style:none; padding:0; margin:0; display:grid; gap:8px; }\r
    .footer-list a{ color:#cfe0ff; text-decoration:none; font-size:.95rem; display:inline-block; padding:4px 0; }\r
    .footer-list a:hover{ color:var(--koop-acento); }\r
\r
    .footer-contact{ font-size:.95rem; color:#cfe0ff; display:grid; gap:8px; }\r
    .footer-contact .item{ display:flex; gap:10px; align-items:flex-start; }\r
\r
    /* Tamaño base de TODOS los íconos (contacto, botones, etc.) */\r
    .icon{ width:22px; height:22px; display:inline-block; vertical-align:middle; }\r
\r
    /* Redes sociales: solo un poco más grandes (24px) y en naranja corporativo */\r
    .footer-social{ display:flex; gap:16px; margin-top:8px; }\r
    .footer-social a{ color: var(--koop-acento); display:inline-flex; }\r
    .footer-social .icon{ width:40px; height:40px; }\r
\r
    .mini-footer{\r
      border-top:1px solid #20345d; margin-top:24px;\r
      padding:14px 20px 22px; color:#a8b9d8; font-size:.88rem; position: relative; z-index:1;\r
      background: linear-gradient(180deg, rgba(21,34,65,.55), rgba(21,34,65,.65));\r
    }\r
    .mini-footer .wrap{\r
      max-width:1200px; margin:0 auto; display:flex; gap:16px; justify-content:space-between; align-items:center; flex-wrap:wrap;\r
    }\r
    .mini-links{ display:flex; gap:16px; flex-wrap:wrap; }\r
    .mini-links a{ color:#a8b9d8; text-decoration:none; }\r
    .mini-links a:hover{ color:#fff; }\r
\r
    .footer-divider{\r
      position:absolute; top:-18px; left:0; width:100%; height:18px;\r
      background: linear-gradient(90deg, var(--koop-acento) 0 40%, transparent 40% 100%);\r
      opacity:.75; z-index:1;\r
    }\r
\r
    @media (max-width: 980px){ .footer-top{ grid-template-columns: 1fr 1fr; } }\r
    @media (max-width: 560px){ .footer-top{ grid-template-columns: 1fr; padding:44px 14px 20px; } }\r
  </style>\r
</head>\r
<body>\r
\r
  <!-- Overlay de transición -->\r
  <div class="page-transition" aria-hidden="true"></div>\r
\r
  <!-- NAV -->\r
  <nav class="navbar">\r
    <div class="navbar-content">\r
      <a href="index.html" class="logo">\r
        <img src="Koop Logo.png" alt="Logo Koop" class="logo-img">\r
        <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
      </a>\r
      <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
      <div class="nav-menu" id="nav-menu">\r
          <a href="index.html#inicio">INICIO</a>\r
          <div class="dropdown">\r
            <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
            <div class="dropdown-content">\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Derecho</span>\r
                <a href="derecho-laboral.html">Derecho Laboral</a>\r
                <a href="derecho-penal.html">Derecho Penal</a>\r
                <a href="tramites-notariales.html">Trámites notariales</a>\r
                <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
                <a href="derecho-familia.html">Derecho de Familia</a>\r
                <a href="contratacion-publica.html">Contratación Pública</a>\r
                <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
                <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
                <a href="insolvencia.html">Insolvencia</a>\r
              </div>\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Contabilidad</span>\r
                <a href="contabilidad.html">Contabilidad</a>\r
                <a href="auditoria.html">Auditoría</a>\r
                <a href="impuestos.html">Impuestos</a>\r
                <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
              </div>\r
            </div>\r
          </div>\r
          <a href="index.html#vision">NUESTRA VISIÓN</a>\r
          <a href="index.html#contacto">CONTACTO</a>\r
        </div>\r
    </div>\r
  </nav>\r
\r
  <!-- HERO -->\r
  <section class="hero-section" id="inicio">\r
    <div class="hero-overlay" aria-hidden="true"></div>\r
    <div class="hero-text" aria-label="Auditoría & Revisoría Fiscal">\r
      <div class="hero-headline">Auditoría & Revisoría Fiscal</div>\r
    </div>\r
  </section>\r
\r
  <!-- SECCIÓN CARDS -->\r
  <section class="labor-cards-section" id="servicios-auditoria">\r
    <div class="labor-cards-container">\r
      <div class="labor-tag">SERVICIOS DE AUDITORÍA & REVISORÍA FISCAL</div>\r
      <h2 class="labor-title">Cómo te ayudamos</h2>\r
      <p class="labor-sub">Supervisión independiente y aseguramiento financiero y contable.</p>\r
\r
      <div class="labor-grid">\r
        <!-- 1. Auditoría financiera -->\r
        <a href="#financiera" class="labor-card" style="--bg:url('img/Acompañamiento.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Auditoría financiera</div>\r
            <div class="labor-card-desc">Opinión independiente sobre estados financieros.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 2. Revisoría fiscal permanente -->\r
        <a href="#revisoria" class="labor-card" style="--bg:url('img/Victimas.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Revisoría fiscal permanente</div>\r
            <div class="labor-card-desc">Cumplimiento de obligaciones legales y societarias.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 3. Evaluación de control interno -->\r
        <a href="#control" class="labor-card" style="--bg:url('img/donacionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Evaluación de control interno</div>\r
            <div class="labor-card-desc">Diagnósticos y recomendaciones.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 4. Cumplimiento normativo -->\r
        <a href="#cumplimiento" class="labor-card" style="--bg:url('img/sucesionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Cumplimiento normativo</div>\r
            <div class="labor-card-desc">Verificación de normas contables y fiscales.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 5. Auditoría de sistemas -->\r
        <a href="#sistemas" class="labor-card" style="--bg:url('img/Audiencias.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Auditoría de sistemas</div>\r
            <div class="labor-card-desc">Revisión de procesos y seguridad informática.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 6. Informes especiales -->\r
        <a href="#informes" class="labor-card" style="--bg:url('img/capitulaciones.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Informes especiales</div>\r
            <div class="labor-card-desc">Dictámenes sobre hechos particulares.</div>\r
          </div>\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ===== FOOTER ===== -->\r
  <footer>\r
    <div class="footer-divider" aria-hidden="true"></div>\r
\r
    <div class="footer-top">\r
      <!-- Columna Marca + CTA -->\r
      <div class="footer-brand">\r
        <div class="footer-logo">\r
          <!-- Logo gráfico eliminado; solo texto -->\r
          <div class="brand-text">KOOP STRATEGIC ADVISORY</div>\r
        </div>\r
        <p class="footer-copy">\r
          Estudio jurídico & contable. Control y transparencia para tu organización.\r
        </p>\r
        <div class="footer-cta">\r
          <h4>¿Necesitas una asesoría en auditoría & revisoría fiscal?</h4>\r
          <div class="btns">\r
            <a class="btn btn-whatsapp" href="https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20auditor%C3%ADa%20y%20revisor%C3%ADa%20fiscal%20sobre%20el%20siguiente%20tema:" target="_blank" rel="noopener">\r
              <!-- Ícono WhatsApp (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"/>\r
              </svg>\r
              WhatsApp\r
            </a>\r
            <a class="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Auditor%C3%ADa%20y%20Revisor%C3%ADa%20Fiscal%20Koop">\r
              <!-- ícono mail (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
              Escríbenos\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Enlaces rápidos -->\r
      <div class="footer-col">\r
        <h5>Enlaces rápidos</h5>\r
        <ul class="footer-list">\r
          <li><a href="index.html#inicio">Inicio</a></li>\r
          <li><a href="index.html#areas">Áreas de práctica</a></li>\r
          <li><a href="index.html#vision">Nuestra visión</a></li>\r
          <li><a href="index.html#contacto">Contacto</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Servicios de Familia -->\r
      <div class="footer-col">\r
        <h5>Servicios de familia</h5>\r
        <ul class="footer-list">\r
          <li><a href="#divorcio">Divorcio y separación</a></li>\r
          <li><a href="#custodia">Custodia y patria potestad</a></li>\r
          <li><a href="#alimentos">Alimentos y pensión alimentaria</a></li>\r
          <li><a href="#sociedad">Liquidación de sociedad conyugal</a></li>\r
          <li><a href="#adopciones">Adopciones</a></li>\r
          <li><a href="#capitulaciones">Capitulaciones matrimoniales</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Contacto + Redes -->\r
      <div class="footer-col">\r
        <h5>Contacto</h5>\r
        <div class="footer-contact">\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>\r
            <span>Bogotá D.C., Colombia</span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="tel:+573137213878">+57 (313) 721 38 78</a></span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="mailto:direccionjuridicakoop@hotmail.com">direccionjuridicakoop@hotmail.com</a></span>\r
          </div>\r
        </div>\r
\r
        <div class="footer-social" aria-label="Redes sociales">\r
          <!-- Instagram -->\r
          <a aria-label="Instagram" href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" rel="noopener" title="Instagram">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>\r
            </svg>\r
          </a>\r
          <!-- Facebook -->\r
          <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>\r
            </svg>\r
          </a>\r
          <!-- TikTok -->\r
          <a aria-label="TikTok" href="https://www.tiktok.com/@koopstrategicadvisory" target="_blank" rel="noopener" title="TikTok">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"/>\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mini-footer">\r
      <div class="wrap">\r
        <div>© <span id="year"></span> Koop Strategic Advisory. Todos los derechos reservados.</div>\r
        <div class="mini-links">\r
          <a href="politica-privacidad.html">Política de privacidad</a>\r
          <a href="terminos.html">Términos y condiciones</a>\r
          <a href="#inicio">Volver arriba ↑</a>\r
        </div>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <script>\r
    // Menú móvil\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
            navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
\r
    // Año dinámico\r
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();\r
\r
    // Manejo de transiciones\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
      \r
      // Asegurar que el overlay esté oculto al cargar la página\r
      function hideOverlay() {\r
        if (overlay) {\r
          overlay.classList.remove('is-active');\r
        }\r
      }\r
      \r
      // Ocultar overlay inmediatamente al cargar\r
      hideOverlay();\r
      \r
      // Ocultar overlay cuando se restaura desde BFCache\r
      window.addEventListener('pageshow', (e) => {\r
        if (e.persisted) {\r
          hideOverlay();\r
        }\r
      });\r
      \r
      // Ocultar overlay cuando se hace focus en la ventana\r
      window.addEventListener('focus', hideOverlay);\r
      \r
      // Ocultar overlay cuando se carga completamente la página\r
      window.addEventListener('load', hideOverlay);\r
      \r
      // Transición de salida interna\r
      function shouldIntercept(link) {\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false;\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
      \r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
\r
        e.preventDefault();\r
        overlay && overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,gg=()=>{nn(),rn();const e=an(mg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Auditoría & Revisoría Fiscal",children:r.jsx("div",{className:"hero-headline",children:"Auditoría & Revisoría Fiscal"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-auditoria",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE AUDITORÍA & REVISORÍA FISCAL"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Supervisión independiente y aseguramiento financiero y contable."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#financiera",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Auditoría financiera"]}),r.jsx("div",{className:"labor-card-desc",children:"Opinión independiente sobre estados financieros."})]})}),r.jsx("a",{href:"#revisoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Revisoría fiscal permanente"]}),r.jsx("div",{className:"labor-card-desc",children:"Cumplimiento de obligaciones legales y societarias."})]})}),r.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Evaluación de control interno"]}),r.jsx("div",{className:"labor-card-desc",children:"Diagnósticos y recomendaciones."})]})}),r.jsx("a",{href:"#cumplimiento",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Cumplimiento normativo"]}),r.jsx("div",{className:"labor-card-desc",children:"Verificación de normas contables y fiscales."})]})}),r.jsx("a",{href:"#informes",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Informes especiales"]}),r.jsx("div",{className:"labor-card-desc",children:"Dictámenes sobre hechos particulares."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Control y transparencia para tu organización."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en auditoría & revisoría fiscal?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20auditor%C3%ADa%20y%20revisor%C3%ADa%20fiscal%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Auditor%C3%ADa%20y%20Revisor%C3%ADa%20Fiscal%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(O,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(O,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(O,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(O,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Auditoría financiera"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Revisoría fiscal permanente"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Evaluación de control interno"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Cumplimiento normativo"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Informes especiales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},xg=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Koop Strategic Advisory | Derecho Administrativo</title>\r
  <!-- Fuentes -->\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">\r
  <noscript><style>.page-transition{display:none!important}</style></noscript>\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
\r
    html, body {\r
      margin: 0; padding: 0; box-sizing: border-box; overflow-x: hidden;\r
      width: 100%; height: 100%;\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d;\r
      color: #fff;\r
    }\r
    *, *::before, *::after { box-sizing: inherit; }\r
\r
    /* ===== Transición entre páginas ===== */\r
    .page-transition{\r
      position: fixed;\r
      inset: 0;\r
      background: #141b2d;\r
      z-index: 9998;\r
      opacity: 0;\r
      pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{\r
      opacity: 1;\r
      pointer-events: auto;\r
    }\r
\r
    /* ===== NAVBAR ===== */\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
.dropdown { position: relative; }\r
.drop-btn { display: flex; align-items: center; }\r
.drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
.dropdown-content {\r
  display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
  background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
  border-radius: 8px; z-index: 100; gap: 32px;\r
}\r
@media (hover: hover) {\r
  .dropdown:hover .dropdown-content { display: flex; }\r
}\r
.dropdown-group { display: flex; flex-direction: column; }\r
.dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
.dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
@media (max-width:700px){\r
  .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
  .dropdown.open .dropdown-content{display:flex;}\r
  .dropdown-content a{padding:6px 0;}\r
}\r
\r
\r
\r
\r
\r
\r
\r
\r
    @media (max-width: 700px) {\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
    }\r
\r
    /* ===== HERO ===== */\r
    .hero-section {\r
      height: clamp(280px, 44vh, 500px);\r
      min-height: 280px; width: 100%; position: relative; display: block;\r
      background: url('img/derecho-administrativo.svg') center center/cover no-repeat;\r
      margin-top: var(--nav-h); overflow: hidden; z-index: 1;\r
    }\r
    /* Franja azul de ancho completo, centrada verticalmente */\r
    .hero-overlay {\r
      position: absolute; top: 50%; left: 0; width: 100%;\r
      height: 100px; background: rgba(35,57,93,0.92);\r
      transform: translateY(-50%); z-index: 1;\r
      border-top: 1px solid rgba(255,255,255,.06);\r
      border-bottom: 1px solid rgba(255,255,255,.06);\r
    }\r
    /* Texto centrado y por encima de la franja */\r
    .hero-text{\r
      position: absolute; inset: 0;\r
      z-index: 2; display: flex; align-items: center; justify-content: center;\r
      text-align: center; padding: 0 16px;\r
    }\r
    .hero-headline{\r
      font-family: 'Dancing Script', cursive;\r
      font-weight: 700; letter-spacing: .02em; line-height: 1.1;\r
      font-size: clamp(2rem, 6vw, 4rem);\r
      color: #ffffff; text-shadow: 0 3px 18px rgba(0,0,0,.35);\r
    }\r
    @media (max-width: 520px){\r
      .hero-headline{ font-size: clamp(1.8rem, 7vw, 2.6rem); }\r
      .hero-overlay{ height: 84px; }\r
    }\r
    @media (max-width: 900px) { .hero-section { height: clamp(260px, 48vh, 520px); } }\r
    @media (max-width: 540px) { .hero-section { height: clamp(220px, 44vh, 480px); } }\r
\r
    /* ===== SECCIÓN CARDS ===== */\r
    .labor-cards-section{\r
      width:100%;\r
      background: linear-gradient(90deg, var(--koop-azul-claro) 36%, #fff 36%);\r
      padding: 64px 20px 72px; box-sizing: border-box;\r
    }\r
    .labor-cards-container{\r
      max-width:1200px; margin:0 auto; text-align:center; color: var(--koop-azul);\r
    }\r
    .labor-tag{\r
      display:inline-block; background: var(--koop-acento); color:#1f2b3d;\r
      font-weight:700; letter-spacing:.06em; font-size:.85rem;\r
      padding:8px 14px; border-radius:6px; margin-bottom:18px;\r
    }\r
    .labor-title{\r
      font-size:2rem; font-weight:800; margin:6px 0 8px; color: var(--koop-azul);\r
      letter-spacing:.01em; text-transform:uppercase;\r
    }\r
    .labor-sub{\r
      font-size:1.1rem; color:#4877b1; max-width:800px; margin:0 auto 32px;\r
    }\r
    .labor-grid{\r
      display:grid; gap:22px; grid-template-columns: repeat(4, 1fr); margin-top:18px;\r
    }\r
    .labor-card{\r
      position:relative; border-radius:14px; overflow:hidden;\r
      min-height: 300px; background:#ccc; display:block; text-decoration:none;\r
    }\r
    .labor-card::before{\r
      content:""; position:absolute; inset:0;\r
      background: var(--bg, url('Imagen gigante centro int.JPG')) center/cover no-repeat;\r
    }\r
    .labor-card::after{ content:""; position:absolute; inset:0; background:rgba(35,57,93,.55); }\r
    .labor-card-content{\r
      position:relative; z-index:2; color:#fff; text-align:left;\r
      padding: 18px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;\r
    }\r
    .labor-badge{\r
      align-self:flex-start; background: rgba(17,34,66,.85);\r
      padding:6px 12px; border-radius:999px; font-weight:700; font-size:.8rem; letter-spacing:.06em; margin-bottom:10px;\r
    }\r
    .labor-card-title{\r
      font-size:1.35rem; font-weight:800; line-height:1.2; margin:2px 0 6px;\r
      text-shadow:0 3px 18px rgba(0,0,0,.35);\r
    }\r
    .labor-card-desc{ font-size:.95rem; color:#d9e9ff; line-height:1.35; }\r
    .labor-dot{ width:10px; height:10px; border-radius:3px; background:var(--koop-bullet); display:inline-block; margin-right:8px; transform: translateY(-1px); }\r
\r
    @media (max-width: 1100px){ .labor-grid{ grid-template-columns: repeat(3, 1fr); } }\r
    @media (max-width: 820px){ .labor-grid{ grid-template-columns: repeat(2, 1fr); } .labor-title{ font-size:1.7rem; } }\r
    @media (max-width: 520px){ .labor-grid{ grid-template-columns: 1fr; } .labor-cards-section{ padding: 44px 12px 52px; } .labor-sub{ font-size:1rem; } }\r
\r
    /* ===== FOOTER ===== */\r
    footer{\r
      position: relative;\r
      color:#e8f0ff;\r
      background: url('Img23_Atrio.jpg') center center/cover no-repeat;\r
      isolation: isolate;\r
    }\r
    footer::before{\r
      content:""; position:absolute; inset:0;\r
      background: rgba(33,56,99,0.86);\r
      z-index:0;\r
    }\r
\r
    .footer-top{\r
      max-width:1200px; margin:0 auto; padding:56px 20px 28px; display:grid;\r
      grid-template-columns: 1.2fr 1fr 1fr 1fr; gap:28px; position: relative; z-index:1;\r
    }\r
    .footer-brand{ display:flex; flex-direction:column; gap:14px; }\r
    /* Logo gráfico eliminado; solo texto de marca */\r
    .footer-logo{ display:flex; align-items:center; gap:10px; }\r
    .footer-logo .brand-text{ font-weight:800; letter-spacing:.04em; color:#fff; font-size:1.05rem; }\r
    .footer-copy{ font-size:.92rem; color:#cfe0ff; line-height:1.5; }\r
\r
    .footer-cta{\r
      background: rgba(238,150,38,.1);\r
      border:1px solid rgba(238,150,38,.35);\r
      padding:14px; border-radius:12px;\r
    }\r
    .footer-cta h4{ margin:0 0 8px; font-size:1.05rem; color:#fff; }\r
    .btns{ display:flex; gap:10px; flex-wrap:wrap; }\r
    .btn{\r
      display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-weight:700;\r
      padding:10px 14px; border-radius:10px; border:1px solid transparent; transition:.2s;\r
      font-size:.95rem;\r
    }\r
    .btn-whatsapp{ background: var(--koop-acento); color:#1d283a; }\r
    .btn-whatsapp:hover{ transform: translateY(-1px); filter: brightness(1.05); }\r
    .btn-mail{ background: transparent; color:#e8f0ff; border-color:#2f497c; }\r
    .btn-mail:hover{ background:#1b2a4e; }\r
\r
    .footer-col h5{ margin:0 0 10px; font-size:1.02rem; color:#fff; letter-spacing:.04em; }\r
    .footer-list{ list-style:none; padding:0; margin:0; display:grid; gap:8px; }\r
    .footer-list a{ color:#cfe0ff; text-decoration:none; font-size:.95rem; display:inline-block; padding:4px 0; }\r
    .footer-list a:hover{ color:var(--koop-acento); }\r
\r
    .footer-contact{ font-size:.95rem; color:#cfe0ff; display:grid; gap:8px; }\r
    .footer-contact .item{ display:flex; gap:10px; align-items:flex-start; }\r
\r
    /* Tamaño base de TODOS los íconos (contacto, botones, etc.) */\r
    .icon{ width:22px; height:22px; display:inline-block; vertical-align:middle; }\r
\r
    /* Redes sociales: solo un poco más grandes (24px) y en naranja corporativo */\r
    .footer-social{ display:flex; gap:16px; margin-top:8px; }\r
    .footer-social a{ color: var(--koop-acento); display:inline-flex; }\r
    .footer-social .icon{ width:40px; height:40px; }\r
\r
    .mini-footer{\r
      border-top:1px solid #20345d; margin-top:24px;\r
      padding:14px 20px 22px; color:#a8b9d8; font-size:.88rem; position: relative; z-index:1;\r
      background: linear-gradient(180deg, rgba(21,34,65,.55), rgba(21,34,65,.65));\r
    }\r
    .mini-footer .wrap{\r
      max-width:1200px; margin:0 auto; display:flex; gap:16px; justify-content:space-between; align-items:center; flex-wrap:wrap;\r
    }\r
    .mini-links{ display:flex; gap:16px; flex-wrap:wrap; }\r
    .mini-links a{ color:#a8b9d8; text-decoration:none; }\r
    .mini-links a:hover{ color:#fff; }\r
\r
    .footer-divider{\r
      position:absolute; top:-18px; left:0; width:100%; height:18px;\r
      background: linear-gradient(90deg, var(--koop-acento) 0 40%, transparent 40% 100%);\r
      opacity:.75; z-index:1;\r
    }\r
\r
    @media (max-width: 980px){ .footer-top{ grid-template-columns: 1fr 1fr; } }\r
    @media (max-width: 560px){ .footer-top{ grid-template-columns: 1fr; padding:44px 14px 20px; } }\r
  </style>\r
</head>\r
<body>\r
\r
  <!-- Overlay de transición -->\r
  <div class="page-transition" aria-hidden="true"></div>\r
\r
  <!-- NAV -->\r
  <nav class="navbar">\r
    <div class="navbar-content">\r
      <a href="index.html" class="logo">\r
        <img src="Koop Logo.png" alt="Logo Koop" class="logo-img">\r
        <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
      </a>\r
      <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
      <div class="nav-menu" id="nav-menu">\r
          <a href="index.html#inicio">INICIO</a>\r
          <div class="dropdown">\r
            <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
            <div class="dropdown-content">\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Derecho</span>\r
                <a href="derecho-laboral.html">Derecho Laboral</a>\r
                <a href="derecho-penal.html">Derecho Penal</a>\r
                <a href="tramites-notariales.html">Trámites notariales</a>\r
                <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
                <a href="derecho-familia.html">Derecho de Familia</a>\r
                <a href="contratacion-publica.html">Contratación Pública</a>\r
                <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
                <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
                <a href="insolvencia.html">Insolvencia</a>\r
              </div>\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Contabilidad</span>\r
                <a href="contabilidad.html">Contabilidad</a>\r
                <a href="auditoria.html">Auditoría</a>\r
                <a href="impuestos.html">Impuestos</a>\r
                <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
              </div>\r
            </div>\r
          </div>\r
          <a href="index.html#vision">NUESTRA VISIÓN</a>\r
          <a href="index.html#contacto">CONTACTO</a>\r
        </div>\r
    </div>\r
  </nav>\r
\r
  <!-- HERO -->\r
  <section class="hero-section" id="inicio">\r
    <div class="hero-overlay" aria-hidden="true"></div>\r
    <div class="hero-text" aria-label="Derecho Administrativo">\r
      <div class="hero-headline">Derecho Administrativo</div>\r
    </div>\r
  </section>\r
\r
  <!-- SECCIÓN CARDS -->\r
  <section class="labor-cards-section" id="servicios-derecho-administrativo">\r
    <div class="labor-cards-container">\r
      <div class="labor-tag">SERVICIOS DE DERECHO ADMINISTRATIVO</div>\r
      <h2 class="labor-title">Cómo te ayudamos</h2>\r
      <p class="labor-sub">Asesoría en trámites y procedimientos ante la administración pública.</p>\r
\r
      <div class="labor-grid">\r
        <!-- 1. Conceptos y asesorías administrativas -->\r
        <a href="#conceptos" class="labor-card" style="--bg:url('img/Acompañamiento.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Conceptos y asesorías administrativas</div>\r
            <div class="labor-card-desc">Elaboración de conceptos y respuestas a requerimientos.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 2. Recursos administrativos -->\r
        <a href="#recursos" class="labor-card" style="--bg:url('img/Victimas.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Recursos administrativos</div>\r
            <div class="labor-card-desc">Impugnación de actos y decisiones estatales.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 3. Procesos disciplinarios -->\r
        <a href="#disciplinario" class="labor-card" style="--bg:url('img/donacionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Procesos disciplinarios</div>\r
            <div class="labor-card-desc">Defensa ante investigaciones y sanciones.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 4. Contratación estatal -->\r
        <a href="#contratacion" class="labor-card" style="--bg:url('img/contrato estatal.jpg')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Contratación estatal</div>\r
            <div class="labor-card-desc">Acompañamiento en etapas precontractuales y contractuales.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 5. Acciones de nulidad y restablecimiento -->\r
        <a href="#nulidad" class="labor-card" style="--bg:url('img/Audiencias.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Acciones de nulidad y restablecimiento</div>\r
            <div class="labor-card-desc">Representación ante la jurisdicción contenciosa.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 6. Derechos de petición -->\r
        <a href="#peticion" class="labor-card" style="--bg:url('img/capitulaciones.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Derechos de petición</div>\r
            <div class="labor-card-desc">Redacción y seguimiento de solicitudes ante entidades.</div>\r
          </div>\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ===== FOOTER ===== -->\r
  <footer>\r
    <div class="footer-divider" aria-hidden="true"></div>\r
\r
    <div class="footer-top">\r
      <!-- Columna Marca + CTA -->\r
      <div class="footer-brand">\r
        <div class="footer-logo">\r
          <!-- Logo gráfico eliminado; solo texto -->\r
          <div class="brand-text">KOOP STRATEGIC ADVISORY</div>\r
        </div>\r
        <p class="footer-copy">\r
          Estudio jurídico & contable. Valoramos y resguardamos tus activos intangibles.\r
        </p>\r
        <div class="footer-cta">\r
          <h4>¿Necesitas una asesoría en derecho administrativo?</h4>\r
          <div class="btns">\r
            <a class="btn btn-whatsapp" href="https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20concencioso%20administrativo%20sobre%20el%20siguiente%20tema:" target="_blank" rel="noopener">\r
              <!-- Ícono WhatsApp (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"/>\r
              </svg>\r
              WhatsApp\r
            </a>\r
            <a class="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20Administrativo%20Koop">\r
              <!-- ícono mail (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
              Escríbenos\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Enlaces rápidos -->\r
      <div class="footer-col">\r
        <h5>Enlaces rápidos</h5>\r
        <ul class="footer-list">\r
          <li><a href="index.html#inicio">Inicio</a></li>\r
          <li><a href="index.html#areas">Áreas de práctica</a></li>\r
          <li><a href="index.html#vision">Nuestra visión</a></li>\r
          <li><a href="index.html#contacto">Contacto</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Servicios de Familia -->\r
      <div class="footer-col">\r
        <h5>Servicios de familia</h5>\r
        <ul class="footer-list">\r
          <li><a href="#divorcio">Divorcio y separación</a></li>\r
          <li><a href="#custodia">Custodia y patria potestad</a></li>\r
          <li><a href="#alimentos">Alimentos y pensión alimentaria</a></li>\r
          <li><a href="#sociedad">Liquidación de sociedad conyugal</a></li>\r
          <li><a href="#adopciones">Adopciones</a></li>\r
          <li><a href="#capitulaciones">Capitulaciones matrimoniales</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Contacto + Redes -->\r
      <div class="footer-col">\r
        <h5>Contacto</h5>\r
        <div class="footer-contact">\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>\r
            <span>Bogotá D.C., Colombia</span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="tel:+573137213878">+57 (313) 721 38 78</a></span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="mailto:direccionjuridicakoop@hotmail.com">direccionjuridicakoop@hotmail.com</a></span>\r
          </div>\r
        </div>\r
\r
        <div class="footer-social" aria-label="Redes sociales">\r
          <!-- Instagram -->\r
          <a aria-label="Instagram" href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" rel="noopener" title="Instagram">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>\r
            </svg>\r
          </a>\r
          <!-- Facebook -->\r
          <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>\r
            </svg>\r
          </a>\r
          <!-- TikTok -->\r
          <a aria-label="TikTok" href="https://www.tiktok.com/@koopstrategicadvisory" target="_blank" rel="noopener" title="TikTok">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"/>\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mini-footer">\r
      <div class="wrap">\r
        <div>© <span id="year"></span> Koop Strategic Advisory. Todos los derechos reservados.</div>\r
        <div class="mini-links">\r
          <a href="politica-privacidad.html">Política de privacidad</a>\r
          <a href="terminos.html">Términos y condiciones</a>\r
          <a href="#inicio">Volver arriba ↑</a>\r
        </div>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <script>\r
    // Menú móvil\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
            navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
\r
    // Año dinámico\r
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();\r
\r
    // Manejo de transiciones\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
      \r
      // Asegurar que el overlay esté oculto al cargar la página\r
      function hideOverlay() {\r
        if (overlay) {\r
          overlay.classList.remove('is-active');\r
        }\r
      }\r
      \r
      // Ocultar overlay inmediatamente al cargar\r
      hideOverlay();\r
      \r
      // Ocultar overlay cuando se restaura desde BFCache\r
      window.addEventListener('pageshow', (e) => {\r
        if (e.persisted) {\r
          hideOverlay();\r
        }\r
      });\r
      \r
      // Ocultar overlay cuando se hace focus en la ventana\r
      window.addEventListener('focus', hideOverlay);\r
      \r
      // Ocultar overlay cuando se carga completamente la página\r
      window.addEventListener('load', hideOverlay);\r
      \r
      // Transición de salida interna\r
      function shouldIntercept(link) {\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false;\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
      \r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
\r
        e.preventDefault();\r
        overlay && overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,vg=()=>{nn(),rn();const e=an(xg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/derecho-administrativo/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Consejo-deestado.avif')",backgroundPosition:"center 80%"},children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho Administrativo",children:r.jsx("div",{className:"hero-headline",children:"Derecho Administrativo"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-derecho-administrativo",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE DERECHO ADMINISTRATIVO"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Asesoría en trámites y procedimientos ante la administración pública."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#peticion",className:"labor-card",style:{"--bg":"url('img/Gestionurbana.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Gestión Urbanística"]}),r.jsx("div",{className:"labor-card-desc",children:"Asesorías en licencias y planeación urbanística."})]})}),r.jsx("a",{href:"#disciplinario",className:"labor-card",style:{"--bg":"url('img/Disci.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Procesos disciplinarios"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa ante investigaciones y sanciones."})]})}),r.jsx("a",{href:"#contratacion",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Contratación estatal"]}),r.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en etapas precontractuales y contractuales."})]})}),r.jsx("a",{href:"#nulidad",className:"labor-card",style:{"--bg":"url('img/Respfiscal.webp')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Procesos de responsabilidad fiscal"]}),r.jsx("div",{className:"labor-card-desc",children:"Conflictos derivados de administración de dineros públicos."})]})}),r.jsx("a",{href:"#conceptos",className:"labor-card",style:{"--bg":"url('img/Asesoria.webp')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Conceptos y asesorías administrativas"]}),r.jsx("div",{className:"labor-card-desc",children:"Elaboración de conceptos y respuestas a requerimientos."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Valoramos y resguardamos tus activos intangibles."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en derecho administrativo?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20concencioso%20administrativo%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20Administrativo%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(O,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(O,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(O,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(O,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Gestión Urbanística"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Procesos Disciplinarios"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Contratación Estatal"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Procesos de responsabilidad fiscal"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Conceptos y Asesorías Administrativas"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},bg=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Koop Strategic Advisory | Derecho de Familia</title>\r
  <!-- Fuentes -->\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">\r
  <noscript><style>.page-transition{display:none!important}</style></noscript>\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
\r
    html, body {\r
      margin: 0; padding: 0; box-sizing: border-box; overflow-x: hidden;\r
      width: 100%; height: 100%;\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d;\r
      color: #fff;\r
    }\r
    *, *::before, *::after { box-sizing: inherit; }\r
\r
    /* ===== Transición entre páginas ===== */\r
    .page-transition{\r
      position: fixed;\r
      inset: 0;\r
      background: #141b2d;\r
      z-index: 9998;\r
      opacity: 0;\r
      pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{\r
      opacity: 1;\r
      pointer-events: auto;\r
    }\r
\r
    /* ===== NAVBAR ===== */\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
.dropdown { position: relative; }\r
.drop-btn { display: flex; align-items: center; }\r
.drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
.dropdown-content {\r
  display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
  background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
  border-radius: 8px; z-index: 100; gap: 32px;\r
}\r
@media (hover: hover) {\r
  .dropdown:hover .dropdown-content { display: flex; }\r
}\r
.dropdown-group { display: flex; flex-direction: column; }\r
.dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
.dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
@media (max-width:700px){\r
  .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
  .dropdown.open .dropdown-content{display:flex;}\r
  .dropdown-content a{padding:6px 0;}\r
}\r
\r
\r
\r
\r
\r
\r
\r
\r
    @media (max-width: 700px) {\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
    }\r
\r
    /* ===== HERO ===== */\r
    .hero-section {\r
      height: clamp(280px, 44vh, 500px);\r
      min-height: 280px; width: 100%; position: relative; display: block;\r
      background: url('img/derecho-familia.svg') center center/cover no-repeat;\r
      margin-top: var(--nav-h); overflow: hidden; z-index: 1;\r
    }\r
    /* Franja azul de ancho completo, centrada verticalmente */\r
    .hero-overlay {\r
      position: absolute; top: 50%; left: 0; width: 100%;\r
      height: 100px; background: rgba(35,57,93,0.92);\r
      transform: translateY(-50%); z-index: 1;\r
      border-top: 1px solid rgba(255,255,255,.06);\r
      border-bottom: 1px solid rgba(255,255,255,.06);\r
    }\r
    /* Texto centrado y por encima de la franja */\r
    .hero-text{\r
      position: absolute; inset: 0;\r
      z-index: 2; display: flex; align-items: center; justify-content: center;\r
      text-align: center; padding: 0 16px;\r
    }\r
    .hero-headline{\r
      font-family: 'Dancing Script', cursive;\r
      font-weight: 700; letter-spacing: .02em; line-height: 1.1;\r
      font-size: clamp(2rem, 6vw, 4rem);\r
      color: #ffffff; text-shadow: 0 3px 18px rgba(0,0,0,.35);\r
    }\r
    @media (max-width: 520px){\r
      .hero-headline{ font-size: clamp(1.8rem, 7vw, 2.6rem); }\r
      .hero-overlay{ height: 84px; }\r
    }\r
    @media (max-width: 900px) { .hero-section { height: clamp(260px, 48vh, 520px); } }\r
    @media (max-width: 540px) { .hero-section { height: clamp(220px, 44vh, 480px); } }\r
\r
    /* ===== SECCIÓN CARDS ===== */\r
    .labor-cards-section{\r
      width:100%;\r
      background: linear-gradient(90deg, var(--koop-azul-claro) 36%, #fff 36%);\r
      padding: 64px 20px 72px; box-sizing: border-box;\r
    }\r
    .labor-cards-container{\r
      max-width:1200px; margin:0 auto; text-align:center; color: var(--koop-azul);\r
    }\r
    .labor-tag{\r
      display:inline-block; background: var(--koop-acento); color:#1f2b3d;\r
      font-weight:700; letter-spacing:.06em; font-size:.85rem;\r
      padding:8px 14px; border-radius:6px; margin-bottom:18px;\r
    }\r
    .labor-title{\r
      font-size:2rem; font-weight:800; margin:6px 0 8px; color: var(--koop-azul);\r
      letter-spacing:.01em; text-transform:uppercase;\r
    }\r
    .labor-sub{\r
      font-size:1.1rem; color:#4877b1; max-width:800px; margin:0 auto 32px;\r
    }\r
    .labor-grid{\r
      display:grid; gap:22px; grid-template-columns: repeat(4, 1fr); margin-top:18px;\r
    }\r
    .labor-card{\r
      position:relative; border-radius:14px; overflow:hidden;\r
      min-height: 300px; background:#ccc; display:block; text-decoration:none;\r
    }\r
    .labor-card::before{\r
      content:""; position:absolute; inset:0;\r
      background: var(--bg, url('Imagen gigante centro int.JPG')) center/cover no-repeat;\r
    }\r
    .labor-card::after{ content:""; position:absolute; inset:0; background:rgba(35,57,93,.55); }\r
    .labor-card-content{\r
      position:relative; z-index:2; color:#fff; text-align:left;\r
      padding: 18px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;\r
    }\r
    .labor-badge{\r
      align-self:flex-start; background: rgba(17,34,66,.85);\r
      padding:6px 12px; border-radius:999px; font-weight:700; font-size:.8rem; letter-spacing:.06em; margin-bottom:10px;\r
    }\r
    .labor-card-title{\r
      font-size:1.35rem; font-weight:800; line-height:1.2; margin:2px 0 6px;\r
      text-shadow:0 3px 18px rgba(0,0,0,.35);\r
    }\r
    .labor-card-desc{ font-size:.95rem; color:#d9e9ff; line-height:1.35; }\r
    .labor-dot{ width:10px; height:10px; border-radius:3px; background:var(--koop-bullet); display:inline-block; margin-right:8px; transform: translateY(-1px); }\r
\r
    @media (max-width: 1100px){ .labor-grid{ grid-template-columns: repeat(3, 1fr); } }\r
    @media (max-width: 820px){ .labor-grid{ grid-template-columns: repeat(2, 1fr); } .labor-title{ font-size:1.7rem; } }\r
    @media (max-width: 520px){ .labor-grid{ grid-template-columns: 1fr; } .labor-cards-section{ padding: 44px 12px 52px; } .labor-sub{ font-size:1rem; } }\r
\r
    /* ===== FOOTER ===== */\r
    footer{\r
      position: relative;\r
      color:#e8f0ff;\r
      background: url('Img23_Atrio.jpg') center center/cover no-repeat;\r
      isolation: isolate;\r
    }\r
    footer::before{\r
      content:""; position:absolute; inset:0;\r
      background: rgba(33,56,99,0.86);\r
      z-index:0;\r
    }\r
\r
    .footer-top{\r
      max-width:1200px; margin:0 auto; padding:56px 20px 28px; display:grid;\r
      grid-template-columns: 1.2fr 1fr 1fr 1fr; gap:28px; position: relative; z-index:1;\r
    }\r
    .footer-brand{ display:flex; flex-direction:column; gap:14px; }\r
    /* Logo gráfico eliminado; solo texto de marca */\r
    .footer-logo{ display:flex; align-items:center; gap:10px; }\r
    .footer-logo .brand-text{ font-weight:800; letter-spacing:.04em; color:#fff; font-size:1.05rem; }\r
    .footer-copy{ font-size:.92rem; color:#cfe0ff; line-height:1.5; }\r
\r
    .footer-cta{\r
      background: rgba(238,150,38,.1);\r
      border:1px solid rgba(238,150,38,.35);\r
      padding:14px; border-radius:12px;\r
    }\r
    .footer-cta h4{ margin:0 0 8px; font-size:1.05rem; color:#fff; }\r
    .btns{ display:flex; gap:10px; flex-wrap:wrap; }\r
    .btn{\r
      display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-weight:700;\r
      padding:10px 14px; border-radius:10px; border:1px solid transparent; transition:.2s;\r
      font-size:.95rem;\r
    }\r
    .btn-whatsapp{ background: var(--koop-acento); color:#1d283a; }\r
    .btn-whatsapp:hover{ transform: translateY(-1px); filter: brightness(1.05); }\r
    .btn-mail{ background: transparent; color:#e8f0ff; border-color:#2f497c; }\r
    .btn-mail:hover{ background:#1b2a4e; }\r
\r
    .footer-col h5{ margin:0 0 10px; font-size:1.02rem; color:#fff; letter-spacing:.04em; }\r
    .footer-list{ list-style:none; padding:0; margin:0; display:grid; gap:8px; }\r
    .footer-list a{ color:#cfe0ff; text-decoration:none; font-size:.95rem; display:inline-block; padding:4px 0; }\r
    .footer-list a:hover{ color:var(--koop-acento); }\r
\r
    .footer-contact{ font-size:.95rem; color:#cfe0ff; display:grid; gap:8px; }\r
    .footer-contact .item{ display:flex; gap:10px; align-items:flex-start; }\r
\r
    /* Tamaño base de TODOS los íconos (contacto, botones, etc.) */\r
    .icon{ width:22px; height:22px; display:inline-block; vertical-align:middle; }\r
\r
    /* Redes sociales: solo un poco más grandes (24px) y en naranja corporativo */\r
    .footer-social{ display:flex; gap:16px; margin-top:8px; }\r
    .footer-social a{ color: var(--koop-acento); display:inline-flex; }\r
    .footer-social .icon{ width:40px; height:40px; }\r
\r
    .mini-footer{\r
      border-top:1px solid #20345d; margin-top:24px;\r
      padding:14px 20px 22px; color:#a8b9d8; font-size:.88rem; position: relative; z-index:1;\r
      background: linear-gradient(180deg, rgba(21,34,65,.55), rgba(21,34,65,.65));\r
    }\r
    .mini-footer .wrap{\r
      max-width:1200px; margin:0 auto; display:flex; gap:16px; justify-content:space-between; align-items:center; flex-wrap:wrap;\r
    }\r
    .mini-links{ display:flex; gap:16px; flex-wrap:wrap; }\r
    .mini-links a{ color:#a8b9d8; text-decoration:none; }\r
    .mini-links a:hover{ color:#fff; }\r
\r
    .footer-divider{\r
      position:absolute; top:-18px; left:0; width:100%; height:18px;\r
      background: linear-gradient(90deg, var(--koop-acento) 0 40%, transparent 40% 100%);\r
      opacity:.75; z-index:1;\r
    }\r
\r
    @media (max-width: 980px){ .footer-top{ grid-template-columns: 1fr 1fr; } }\r
    @media (max-width: 560px){ .footer-top{ grid-template-columns: 1fr; padding:44px 14px 20px; } }\r
  </style>\r
</head>\r
<body>\r
\r
  <!-- Overlay de transición -->\r
  <div class="page-transition" aria-hidden="true"></div>\r
\r
  <!-- NAV -->\r
  <nav class="navbar">\r
    <div class="navbar-content">\r
      <a href="index.html" class="logo">\r
        <img src="Koop Logo.png" alt="Logo Koop" class="logo-img">\r
        <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
      </a>\r
      <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
      <div class="nav-menu" id="nav-menu">\r
          <a href="index.html#inicio">INICIO</a>\r
          <div class="dropdown">\r
            <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
            <div class="dropdown-content">\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Derecho</span>\r
                <a href="derecho-laboral.html">Derecho Laboral</a>\r
                <a href="derecho-penal.html">Derecho Penal</a>\r
                <a href="tramites-notariales.html">Trámites notariales</a>\r
                <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
                <a href="derecho-familia.html">Derecho de Familia</a>\r
                <a href="contratacion-publica.html">Contratación Pública</a>\r
                <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
                <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
                <a href="insolvencia.html">Insolvencia</a>\r
              </div>\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Contabilidad</span>\r
                <a href="contabilidad.html">Contabilidad</a>\r
                <a href="auditoria.html">Auditoría</a>\r
                <a href="impuestos.html">Impuestos</a>\r
                <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
              </div>\r
            </div>\r
          </div>\r
          <a href="index.html#vision">NUESTRA VISIÓN</a>\r
          <a href="index.html#contacto">CONTACTO</a>\r
        </div>\r
    </div>\r
  </nav>\r
\r
  <!-- HERO -->\r
  <section class="hero-section" id="inicio">\r
    <div class="hero-overlay" aria-hidden="true"></div>\r
    <div class="hero-text" aria-label="Derecho de Familia">\r
      <div class="hero-headline">Derecho de Familia</div>\r
    </div>\r
  </section>\r
\r
  <!-- SECCIÓN CARDS -->\r
  <section class="labor-cards-section" id="servicios-familia">\r
    <div class="labor-cards-container">\r
      <div class="labor-tag">SERVICIOS DE FAMILIA</div>\r
      <h2 class="labor-title">Cómo te ayudamos</h2>\r
      <p class="labor-sub">Asesoría integral en situaciones familiares: divorcios, custodia, alimentos y más.</p>\r
\r
      <div class="labor-grid">\r
        <!-- 1. Divorcio y separación -->\r
        <a href="#divorcio" class="labor-card" style="--bg:url('img/Acompañamiento.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Divorcio y separación</div>\r
            <div class="labor-card-desc">Representación y acuerdos amistosos o judiciales.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 2. Custodia y patria potestad -->\r
        <a href="#custodia" class="labor-card" style="--bg:url('img/Victimas.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Custodia y patria potestad</div>\r
            <div class="labor-card-desc">Defensa de los derechos de tus hijos y del núcleo familiar.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 3. Alimentos y pensión alimentaria -->\r
        <a href="#alimentos" class="labor-card" style="--bg:url('img/donacionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Alimentos y pensión alimentaria</div>\r
            <div class="labor-card-desc">Fijación, modificación y cobro de cuotas alimentarias.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 4. Liquidación de sociedad conyugal -->\r
        <a href="#sociedad" class="labor-card" style="--bg:url('img/sucesionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Liquidación de sociedad conyugal</div>\r
            <div class="labor-card-desc">Distribución equitativa de bienes y obligaciones matrimoniales.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 5. Adopciones -->\r
        <a href="#adopciones" class="labor-card" style="--bg:url('img/Audiencias.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Adopciones</div>\r
            <div class="labor-card-desc">Acompañamiento en procesos de adopción nacional e internacional.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 6. Capitulaciones matrimoniales -->\r
        <a href="#capitulaciones" class="labor-card" style="--bg:url('img/capitulaciones.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Capitulaciones matrimoniales</div>\r
            <div class="labor-card-desc">Acuerdos patrimoniales previos al matrimonio o unión libre.</div>\r
          </div>\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ===== FOOTER ===== -->\r
  <footer>\r
    <div class="footer-divider" aria-hidden="true"></div>\r
\r
    <div class="footer-top">\r
      <!-- Columna Marca + CTA -->\r
      <div class="footer-brand">\r
        <div class="footer-logo">\r
          <!-- Logo gráfico eliminado; solo texto -->\r
          <div class="brand-text">KOOP STRATEGIC ADVISORY</div>\r
        </div>\r
        <p class="footer-copy">\r
          Estudio jurídico & contable. Litigio estratégico y soluciones 360° para proteger tu núcleo familiar.\r
        </p>\r
        <div class="footer-cta">\r
          <h4>¿Necesitas una asesoría en derecho de familia?</h4>\r
          <div class="btns">\r
            <a class="btn btn-whatsapp" href="https://wa.me/573503965755?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20derecho%20de%20familia%20sobre%20el%20siguiente%20tema:" target="_blank" rel="noopener">\r
              <!-- Ícono WhatsApp (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"/>\r
              </svg>\r
              WhatsApp\r
            </a>\r
            <a class="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20de%20Familia%20Koop">\r
              <!-- ícono mail (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
              Escríbenos\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Enlaces rápidos -->\r
      <div class="footer-col">\r
        <h5>Enlaces rápidos</h5>\r
        <ul class="footer-list">\r
          <li><a href="index.html#inicio">Inicio</a></li>\r
          <li><a href="index.html#areas">Áreas de práctica</a></li>\r
          <li><a href="index.html#vision">Nuestra visión</a></li>\r
          <li><a href="index.html#contacto">Contacto</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Servicios de Familia -->\r
      <div class="footer-col">\r
        <h5>Servicios de familia</h5>\r
        <ul class="footer-list">\r
          <li><a href="#divorcio">Divorcio y separación</a></li>\r
          <li><a href="#custodia">Custodia y patria potestad</a></li>\r
          <li><a href="#alimentos">Alimentos y pensión alimentaria</a></li>\r
          <li><a href="#sociedad">Liquidación de sociedad conyugal</a></li>\r
          <li><a href="#adopciones">Adopciones</a></li>\r
          <li><a href="#capitulaciones">Capitulaciones matrimoniales</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Contacto + Redes -->\r
      <div class="footer-col">\r
        <h5>Contacto</h5>\r
        <div class="footer-contact">\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>\r
            <span>Bogotá D.C., Colombia</span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="tel:+573503965755">+57 (350) 396 57 55</a></span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="mailto:direccionjuridicakoop@hotmail.com">direccionjuridicakoop@hotmail.com</a></span>\r
          </div>\r
        </div>\r
\r
        <div class="footer-social" aria-label="Redes sociales">\r
          <!-- Instagram -->\r
          <a aria-label="Instagram" href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" rel="noopener" title="Instagram">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>\r
            </svg>\r
          </a>\r
          <!-- Facebook -->\r
          <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>\r
            </svg>\r
          </a>\r
          <!-- TikTok -->\r
          <a aria-label="TikTok" href="https://www.tiktok.com/@koopstrategicadvisory" target="_blank" rel="noopener" title="TikTok">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"/>\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mini-footer">\r
      <div class="wrap">\r
        <div>© <span id="year"></span> Koop Strategic Advisory. Todos los derechos reservados.</div>\r
        <div class="mini-links">\r
          <a href="politica-privacidad.html">Política de privacidad</a>\r
          <a href="terminos.html">Términos y condiciones</a>\r
          <a href="#inicio">Volver arriba ↑</a>\r
        </div>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <script>\r
    // Menú móvil\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
            navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
\r
    // Año dinámico\r
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();\r
\r
    // Manejo de transiciones\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
      \r
      // Asegurar que el overlay esté oculto al cargar la página\r
      function hideOverlay() {\r
        if (overlay) {\r
          overlay.classList.remove('is-active');\r
        }\r
      }\r
      \r
      // Ocultar overlay inmediatamente al cargar\r
      hideOverlay();\r
      \r
      // Ocultar overlay cuando se restaura desde BFCache\r
      window.addEventListener('pageshow', (e) => {\r
        if (e.persisted) {\r
          hideOverlay();\r
        }\r
      });\r
      \r
      // Ocultar overlay cuando se hace focus en la ventana\r
      window.addEventListener('focus', hideOverlay);\r
      \r
      // Ocultar overlay cuando se carga completamente la página\r
      window.addEventListener('load', hideOverlay);\r
      \r
      // Transición de salida interna\r
      function shouldIntercept(link) {\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false;\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
      \r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
\r
        e.preventDefault();\r
        overlay && overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,yg=()=>{nn(),rn();const e=an(bg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/ninofamilia.webp')",backgroundPosition:"center 30%"},children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho de Familia",children:r.jsx("div",{className:"hero-headline",children:"Derecho de Familia"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-familia",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE FAMILIA"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Asesoría integral en situaciones familiares: divorcios, custodia, alimentos y más."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#divorcio",className:"labor-card",style:{"--bg":"url('img/divorcio.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Divorcio y separación"]}),r.jsx("div",{className:"labor-card-desc",children:"Representación y acuerdos amistosos o judiciales."})]})}),r.jsx("a",{href:"#custodia",className:"labor-card",style:{"--bg":"url('img/Custodia.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Custodia y patria potestad"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa de los derechos de tus hijos y del núcleo familiar."})]})}),r.jsx("a",{href:"#alimentos",className:"labor-card",style:{"--bg":"url('img/alimentos.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Alimentos y pensión alimentaria"]}),r.jsx("div",{className:"labor-card-desc",children:"Fijación, modificación y cobro de cuotas alimentarias."})]})}),r.jsx("a",{href:"#sociedad",className:"labor-card",style:{"--bg":"url('img/Violencia.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Violencia intrafamiliar"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámite ante comisaría de familia o proceso penal ante fiscalía."})]})}),r.jsx("a",{href:"#comisariaseicbf",className:"labor-card",style:{"--bg":"url('img/Bienestar.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Trámites frente a ICBF o Comisarías de familia"]}),r.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en procesos administrativos."})]})}),r.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales"]}),r.jsx("div",{className:"labor-card-desc",children:"Acuerdos patrimoniales previos al matrimonio o unión libre."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico y soluciones 360° para proteger tu núcleo familiar."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en derecho de familia?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20derecho%20de%20familia%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20de%20Familia%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(O,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(O,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(O,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(O,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Divorcio y separación"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Custodia y patria potestad"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Alimentos y pensión alimentaria"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Violencia intrafamiliar"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Trámites frente a ICBF o Comisarías de familia"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573503965755",children:"+57 (350) 396 57 55"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},wg=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Koop Strategic Advisory | Derecho Laboral</title>\r
  <!-- Fuentes -->\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">\r
  <noscript><style>.page-transition{display:none!important}</style></noscript>\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
\r
    html, body {\r
      margin: 0; padding: 0; box-sizing: border-box; overflow-x: hidden;\r
      width: 100%; height: 100%;\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d;\r
      color: #fff;\r
    }\r
    *, *::before, *::after { box-sizing: inherit; }\r
\r
    /* ===== Transición entre páginas ===== */\r
    .page-transition{\r
      position: fixed;\r
      inset: 0;\r
      background: #141b2d;\r
      z-index: 9998;\r
      opacity: 0;\r
      pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{\r
      opacity: 1;\r
      pointer-events: auto;\r
    }\r
\r
    /* ===== NAVBAR ===== */\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
.dropdown { position: relative; }\r
.drop-btn { display: flex; align-items: center; }\r
.drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
.dropdown-content {\r
  display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
  background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
  border-radius: 8px; z-index: 100; gap: 32px;\r
}\r
@media (hover: hover) {\r
  .dropdown:hover .dropdown-content { display: flex; }\r
}\r
.dropdown-group { display: flex; flex-direction: column; }\r
.dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
.dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
@media (max-width:700px){\r
  .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
  .dropdown.open .dropdown-content{display:flex;}\r
  .dropdown-content a{padding:6px 0;}\r
}\r
\r
\r
\r
\r
\r
\r
\r
\r
    @media (max-width: 700px) {\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
    }\r
\r
    /* ===== HERO ===== */\r
    .hero-section {\r
      height: clamp(280px, 44vh, 500px);\r
      min-height: 280px; width: 100%; position: relative; display: block;\r
      background: url('img/saladecasacionlaboral.png?v=20250810-2') center center/cover no-repeat;\r
      margin-top: var(--nav-h); overflow: hidden; z-index: 1;\r
    }\r
    /* Franja azul de ancho completo, centrada verticalmente */\r
    .hero-overlay {\r
      position: absolute; top: 50%; left: 0; width: 100%;\r
      height: 100px; background: rgba(35,57,93,0.92);\r
      transform: translateY(-50%); z-index: 1;\r
      border-top: 1px solid rgba(255,255,255,.06);\r
      border-bottom: 1px solid rgba(255,255,255,.06);\r
    }\r
    /* Texto centrado y por encima de la franja */\r
    .hero-text{\r
      position: absolute; inset: 0;\r
      z-index: 2; display: flex; align-items: center; justify-content: center;\r
      text-align: center; padding: 0 16px;\r
    }\r
    .hero-headline{\r
      font-family: 'Dancing Script', cursive;\r
      font-weight: 700; letter-spacing: .02em; line-height: 1.1;\r
      font-size: clamp(2rem, 6vw, 4rem);\r
      color: #ffffff; text-shadow: 0 3px 18px rgba(0,0,0,.35);\r
    }\r
    @media (max-width: 520px){\r
      .hero-headline{ font-size: clamp(1.8rem, 7vw, 2.6rem); }\r
      .hero-overlay{ height: 84px; }\r
    }\r
    @media (max-width: 900px) { .hero-section { height: clamp(260px, 48vh, 520px); } }\r
    @media (max-width: 540px) { .hero-section { height: clamp(220px, 44vh, 480px); } }\r
\r
    /* ===== SECCIÓN CARDS ===== */\r
    .labor-cards-section{\r
      width:100%;\r
      background: linear-gradient(90deg, var(--koop-azul-claro) 36%, #fff 36%);\r
      padding: 64px 20px 72px; box-sizing: border-box;\r
    }\r
    .labor-cards-container{\r
      max-width:1200px; margin:0 auto; text-align:center; color: var(--koop-azul);\r
    }\r
    .labor-tag{\r
      display:inline-block; background: var(--koop-acento); color:#1f2b3d;\r
      font-weight:700; letter-spacing:.06em; font-size:.85rem;\r
      padding:8px 14px; border-radius:6px; margin-bottom:18px;\r
    }\r
    .labor-title{\r
      font-size:2rem; font-weight:800; margin:6px 0 8px; color: var(--koop-azul);\r
      letter-spacing:.01em; text-transform:uppercase;\r
    }\r
    .labor-sub{\r
      font-size:1.1rem; color:#4877b1; max-width:800px; margin:0 auto 32px;\r
    }\r
    .labor-grid{\r
      display:grid; gap:22px; grid-template-columns: repeat(4, 1fr); margin-top:18px;\r
    }\r
    .labor-card{\r
      position:relative; border-radius:14px; overflow:hidden;\r
      min-height: 300px; background:#ccc; display:block; text-decoration:none;\r
    }\r
    .labor-card::before{\r
      content:""; position:absolute; inset:0;\r
      background: var(--bg, url('Imagen gigante centro int.JPG')) center/cover no-repeat;\r
    }\r
    .labor-card::after{ content:""; position:absolute; inset:0; background:rgba(35,57,93,.55); }\r
    .labor-card-content{\r
      position:relative; z-index:2; color:#fff; text-align:left;\r
      padding: 18px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;\r
    }\r
    .labor-badge{\r
      align-self:flex-start; background: rgba(17,34,66,.85);\r
      padding:6px 12px; border-radius:999px; font-weight:700; font-size:.8rem; letter-spacing:.06em; margin-bottom:10px;\r
    }\r
    .labor-card-title{\r
      font-size:1.35rem; font-weight:800; line-height:1.2; margin:2px 0 6px;\r
      text-shadow:0 3px 18px rgba(0,0,0,.35);\r
    }\r
    .labor-card-desc{ font-size:.95rem; color:#d9e9ff; line-height:1.35; }\r
    .labor-dot{ width:10px; height:10px; border-radius:3px; background:var(--koop-bullet); display:inline-block; margin-right:8px; transform: translateY(-1px); }\r
\r
    @media (max-width: 1100px){ .labor-grid{ grid-template-columns: repeat(3, 1fr); } }\r
    @media (max-width: 820px){ .labor-grid{ grid-template-columns: repeat(2, 1fr); } .labor-title{ font-size:1.7rem; } }\r
    @media (max-width: 520px){ .labor-grid{ grid-template-columns: 1fr; } .labor-cards-section{ padding: 44px 12px 52px; } .labor-sub{ font-size:1rem; } }\r
\r
    /* ===== FOOTER ===== */\r
    footer{\r
      position: relative;\r
      color:#e8f0ff;\r
      background: url('Img23_Atrio.jpg') center center/cover no-repeat;\r
      isolation: isolate;\r
    }\r
    footer::before{\r
      content:""; position:absolute; inset:0;\r
      background: rgba(33,56,99,0.86);\r
      z-index:0;\r
    }\r
\r
    .footer-top{\r
      max-width:1200px; margin:0 auto; padding:56px 20px 28px; display:grid;\r
      grid-template-columns: 1.2fr 1fr 1fr 1fr; gap:28px; position: relative; z-index:1;\r
    }\r
    .footer-brand{ display:flex; flex-direction:column; gap:14px; }\r
    /* Logo gráfico eliminado; solo texto de marca */\r
    .footer-logo{ display:flex; align-items:center; gap:10px; }\r
    .footer-logo .brand-text{ font-weight:800; letter-spacing:.04em; color:#fff; font-size:1.05rem; }\r
    .footer-copy{ font-size:.92rem; color:#cfe0ff; line-height:1.5; }\r
\r
    .footer-cta{\r
      background: rgba(238,150,38,.1);\r
      border:1px solid rgba(238,150,38,.35);\r
      padding:14px; border-radius:12px;\r
    }\r
    .footer-cta h4{ margin:0 0 8px; font-size:1.05rem; color:#fff; }\r
    .btns{ display:flex; gap:10px; flex-wrap:wrap; }\r
    .btn{\r
      display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-weight:700;\r
      padding:10px 14px; border-radius:10px; border:1px solid transparent; transition:.2s;\r
      font-size:.95rem;\r
    }\r
    .btn-whatsapp{ background: var(--koop-acento); color:#1d283a; }\r
    .btn-whatsapp:hover{ transform: translateY(-1px); filter: brightness(1.05); }\r
    .btn-mail{ background: transparent; color:#e8f0ff; border-color:#2f497c; }\r
    .btn-mail:hover{ background:#1b2a4e; }\r
\r
    .footer-col h5{ margin:0 0 10px; font-size:1.02rem; color:#fff; letter-spacing:.04em; }\r
    .footer-list{ list-style:none; padding:0; margin:0; display:grid; gap:8px; }\r
    .footer-list a{ color:#cfe0ff; text-decoration:none; font-size:.95rem; display:inline-block; padding:4px 0; }\r
    .footer-list a:hover{ color:var(--koop-acento); }\r
\r
    .footer-contact{ font-size:.95rem; color:#cfe0ff; display:grid; gap:8px; }\r
    .footer-contact .item{ display:flex; gap:10px; align-items:flex-start; }\r
\r
    /* Tamaño base de TODOS los íconos (contacto, botones, etc.) */\r
    .icon{ width:22px; height:22px; display:inline-block; vertical-align:middle; }\r
\r
    /* Redes sociales: solo un poco más grandes (24px) y en naranja corporativo */\r
    .footer-social{ display:flex; gap:16px; margin-top:8px; }\r
    .footer-social a{ color: var(--koop-acento); display:inline-flex; }\r
    .footer-social .icon{ width:40px; height:40px; }\r
\r
    .mini-footer{\r
      border-top:1px solid #20345d; margin-top:24px;\r
      padding:14px 20px 22px; color:#a8b9d8; font-size:.88rem; position: relative; z-index:1;\r
      background: linear-gradient(180deg, rgba(21,34,65,.55), rgba(21,34,65,.65));\r
    }\r
    .mini-footer .wrap{\r
      max-width:1200px; margin:0 auto; display:flex; gap:16px; justify-content:space-between; align-items:center; flex-wrap:wrap;\r
    }\r
    .mini-links{ display:flex; gap:16px; flex-wrap:wrap; }\r
    .mini-links a{ color:#a8b9d8; text-decoration:none; }\r
    .mini-links a:hover{ color:#fff; }\r
\r
    .footer-divider{\r
      position:absolute; top:-18px; left:0; width:100%; height:18px;\r
      background: linear-gradient(90deg, var(--koop-acento) 0 40%, transparent 40% 100%);\r
      opacity:.75; z-index:1;\r
    }\r
\r
    @media (max-width: 980px){ .footer-top{ grid-template-columns: 1fr 1fr; } }\r
    @media (max-width: 560px){ .footer-top{ grid-template-columns: 1fr; padding:44px 14px 20px; } }\r
  </style>\r
</head>\r
<body>\r
\r
  <!-- Overlay de transición -->\r
  <div class="page-transition" aria-hidden="true"></div>\r
\r
  <!-- NAV -->\r
  <nav class="navbar">\r
    <div class="navbar-content">\r
      <a href="index.html" class="logo">\r
        <img src="Koop Logo.png" alt="Logo Koop" class="logo-img">\r
        <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
      </a>\r
      <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
      <div class="nav-menu" id="nav-menu">\r
          <a href="index.html#inicio">INICIO</a>\r
          <div class="dropdown">\r
            <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
            <div class="dropdown-content">\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Derecho</span>\r
                <a href="derecho-laboral.html">Derecho Laboral</a>\r
                <a href="derecho-penal.html">Derecho Penal</a>\r
                <a href="tramites-notariales.html">Trámites notariales</a>\r
                <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
                <a href="derecho-familia.html">Derecho de Familia</a>\r
                <a href="contratacion-publica.html">Contratación Pública</a>\r
                <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
                <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
                <a href="insolvencia.html">Insolvencia</a>\r
              </div>\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Contabilidad</span>\r
                <a href="contabilidad.html">Contabilidad</a>\r
                <a href="auditoria.html">Auditoría</a>\r
                <a href="impuestos.html">Impuestos</a>\r
                <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
              </div>\r
            </div>\r
          </div>\r
          <a href="index.html#vision">NUESTRA VISIÓN</a>\r
          <a href="index.html#contacto">CONTACTO</a>\r
        </div>\r
    </div>\r
  </nav>\r
\r
  <!-- HERO -->\r
  <section class="hero-section" id="inicio">\r
    <div class="hero-overlay" aria-hidden="true"></div>\r
    <div class="hero-text" aria-label="Derecho Laboral y Seguridad Social">\r
      <div class="hero-headline">Derecho Laboral y Seguridad Social</div>\r
    </div>\r
  </section>\r
\r
  <!-- SECCIÓN CARDS -->\r
  <section class="labor-cards-section" id="servicios-laborales">\r
    <div class="labor-cards-container">\r
      <div class="labor-tag">SERVICIOS LABORALES</div>\r
      <h2 class="labor-title">Cómo te ayudamos</h2>\r
      <p class="labor-sub">Estrategia, representación y cumplimiento normativo en derecho laboral para empresas y trabajadores.</p>\r
\r
      <div class="labor-grid">\r
        <!-- 1. Despido injustificado -->\r
        <a href="#despido" class="labor-card" style="--bg:url('Despidoinjustificado.jpg')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Despido injustificado</div>\r
            <div class="labor-card-desc">Acciones, indemnizaciones y negociación estratégica.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 2. Liquidaciones y prestaciones -->\r
        <a href="#liquidaciones" class="labor-card" style="--bg:url('liquidaciones.jpeg')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Liquidaciones y prestaciones</div>\r
            <div class="labor-card-desc">Cálculo, reclamación y verificación de pagos.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 3. Acoso laboral -->\r
        <a href="#acoso" class="labor-card" style="--bg:url('acoso.jpg')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Acoso laboral</div>\r
            <div class="labor-card-desc">Comités, protocolos, evidencias y defensa.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 4. Pensiones y seguridad social -->\r
        <a href="#pensiones" class="labor-card" style="--bg:url('pensiones.jpg')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Pensiones y seguridad social</div>\r
            <div class="labor-card-desc">Traslados, reliquidaciones y contingencias.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 5. Reintegro laboral -->\r
        <a href="#reintegro" class="labor-card" style="--bg:url('reintegro.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Reintegro laboral</div>\r
            <div class="labor-card-desc">Acciones de reintegro por despido ilegal o con fuero.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 6. Contrato realidad -->\r
        <a href="#contratorealidad" class="labor-card" style="--bg:url('contratorealidad.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Contrato realidad</div>\r
            <div class="labor-card-desc">Reconocimiento del vínculo laboral y prestaciones.</div>\r
          </div>\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ===== FOOTER ===== -->\r
  <footer>\r
    <div class="footer-divider" aria-hidden="true"></div>\r
\r
    <div class="footer-top">\r
      <!-- Columna Marca + CTA -->\r
      <div class="footer-brand">\r
        <div class="footer-logo">\r
          <!-- Logo gráfico eliminado; solo texto -->\r
          <div class="brand-text">KOOP STRATEGIC ADVISORY</div>\r
        </div>\r
        <p class="footer-copy">\r
          Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral.\r
        </p>\r
        <div class="footer-cta">\r
          <h4>¿Necesitas una asesoría laboral hoy?</h4>\r
          <div class="btns">\r
            <a class="btn btn-whatsapp" href="https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20laboral%20sobre%20el%20siguiente%20tema:" target="_blank" rel="noopener">\r
              <!-- Ícono WhatsApp (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"/>\r
              </svg>\r
              WhatsApp\r
            </a>\r
            <a class="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop">\r
              <!-- ícono mail (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
              Escríbenos\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Enlaces rápidos -->\r
      <div class="footer-col">\r
        <h5>Enlaces rápidos</h5>\r
        <ul class="footer-list">\r
          <li><a href="index.html#inicio">Inicio</a></li>\r
          <li><a href="index.html#areas">Áreas de práctica</a></li>\r
          <li><a href="index.html#vision">Nuestra visión</a></li>\r
          <li><a href="index.html#contacto">Contacto</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Servicios Laborales -->\r
      <div class="footer-col">\r
        <h5>Servicios laborales</h5>\r
        <ul class="footer-list">\r
          <li><a href="#despido">Despido injustificado</a></li>\r
          <li><a href="#liquidaciones">Liquidaciones y prestaciones</a></li>\r
          <li><a href="#acoso">Acoso laboral</a></li>\r
          <li><a href="#pensiones">Pensiones y seguridad social</a></li>\r
          <li><a href="#reintegro">Reintegro laboral</a></li>\r
          <li><a href="#contratorealidad">Contrato realidad</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Contacto + Redes -->\r
      <div class="footer-col">\r
        <h5>Contacto</h5>\r
        <div class="footer-contact">\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>\r
            <span>Bogotá D.C., Colombia</span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="tel:+573137213878">+57 (313) 721 38 78</a></span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="mailto:direccionjuridicakoop@hotmail.com">direccionjuridicakoop@hotmail.com</a></span>\r
          </div>\r
        </div>\r
\r
        <div class="footer-social" aria-label="Redes sociales">\r
          <!-- Instagram -->\r
          <a aria-label="Instagram" href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" rel="noopener" title="Instagram">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>\r
            </svg>\r
          </a>\r
          <!-- Facebook -->\r
          <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>\r
            </svg>\r
          </a>\r
          <!-- TikTok -->\r
          <a aria-label="TikTok" href="https://www.tiktok.com/@koopstrategicadvisory" target="_blank" rel="noopener" title="TikTok">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"/>\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mini-footer">\r
      <div class="wrap">\r
        <div>© <span id="year"></span> Koop Strategic Advisory. Todos los derechos reservados.</div>\r
        <div class="mini-links">\r
          <a href="politica-privacidad.html">Política de privacidad</a>\r
          <a href="terminos.html">Términos y condiciones</a>\r
          <a href="#inicio">Volver arriba ↑</a>\r
        </div>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <script>\r
    // Menú móvil\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
            navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
\r
    // Año dinámico\r
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();\r
\r
    // Manejo de transiciones\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
      \r
      // Asegurar que el overlay esté oculto al cargar la página\r
      function hideOverlay() {\r
        if (overlay) {\r
          overlay.classList.remove('is-active');\r
        }\r
      }\r
      \r
      // Ocultar overlay inmediatamente al cargar\r
      hideOverlay();\r
      \r
      // Ocultar overlay cuando se restaura desde BFCache\r
      window.addEventListener('pageshow', (e) => {\r
        if (e.persisted) {\r
          hideOverlay();\r
        }\r
      });\r
      \r
      // Ocultar overlay cuando se hace focus en la ventana\r
      window.addEventListener('focus', hideOverlay);\r
      \r
      // Ocultar overlay cuando se carga completamente la página\r
      window.addEventListener('load', hideOverlay);\r
      \r
      // Transición de salida interna\r
      function shouldIntercept(link) {\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false;\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
      \r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
\r
        e.preventDefault();\r
        overlay && overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,jg="/assets/liquidaciones-CLf4J2S8.jpeg",kg="/assets/acoso-5lfYgMQE.jpg",Ng="/assets/pensiones-Cse2TGmQ.jpg",Cg="/assets/contratorealidad-CKG4Jjcw.png",Sg=()=>{nn(),rn();const e=an(wg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho Laboral y Seguridad Social",children:r.jsx("div",{className:"hero-headline",children:"Derecho Laboral y Seguridad Social"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-laborales",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS LABORALES"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Estrategia, representación y cumplimiento normativo en derecho laboral para empresas y trabajadores."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#contratorealidad",className:"labor-card",style:{"--bg":`url(${Cg})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Contrato realidad"]}),r.jsx("div",{className:"labor-card-desc",children:"Reconocimiento del vínculo laboral y prestaciones."})]})}),r.jsx("a",{href:"#liquidaciones",className:"labor-card",style:{"--bg":`url(${jg})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Mora en el pago de la liquidación"]}),r.jsx("div",{className:"labor-card-desc",children:"Cálculo, reclamación y verificación de pagos."})]})}),r.jsx("a",{href:"#acoso",className:"labor-card",style:{"--bg":`url(${kg})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Acoso laboral"]}),r.jsx("div",{className:"labor-card-desc",children:"Comités, protocolos, evidencias y defensa."})]})}),r.jsx("a",{href:"#pensiones",className:"labor-card",style:{"--bg":`url(${Ng})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Pensiones y seguridad social"]}),r.jsx("div",{className:"labor-card-desc",children:"Traslados, reliquidaciones y contingencias."})]})}),r.jsx("a",{href:"#reintegro",className:"labor-card",style:{"--bg":`url(${Fu})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Reintegro laboral"]}),r.jsx("div",{className:"labor-card-desc",children:"Acciones de reintegro por despido ilegal o con fuero."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20laboral%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(O,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(O,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(O,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(O,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios laborales"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#despido",children:"Despido injustificado"})}),r.jsx("li",{children:r.jsx("a",{href:"#liquidaciones",children:"Liquidaciones y prestaciones"})}),r.jsx("li",{children:r.jsx("a",{href:"#acoso",children:"Acoso laboral"})}),r.jsx("li",{children:r.jsx("a",{href:"#pensiones",children:"Pensiones y seguridad social"})}),r.jsx("li",{children:r.jsx("a",{href:"#reintegro",children:"Reintegro laboral"})}),r.jsx("li",{children:r.jsx("a",{href:"#contratorealidad",children:"Contrato realidad"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Eg=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Koop Strategic Advisory | Derecho Penal</title>\r
  <!-- Fuentes -->\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">\r
  <noscript><style>.page-transition{display:none!important}</style></noscript>\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
\r
    html, body {\r
      margin: 0; padding: 0; box-sizing: border-box; overflow-x: hidden;\r
      width: 100%; height: 100%;\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d;\r
      color: #fff;\r
    }\r
    *, *::before, *::after { box-sizing: inherit; }\r
\r
    /* ===== Transición entre páginas ===== */\r
    .page-transition{\r
      position: fixed;\r
      inset: 0;\r
      background: #141b2d;\r
      z-index: 9998;\r
      opacity: 0;\r
      pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{\r
      opacity: 1;\r
      pointer-events: auto;\r
    }\r
\r
    /* ===== NAVBAR ===== */\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
.dropdown { position: relative; }\r
.drop-btn { display: flex; align-items: center; }\r
.drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
.dropdown-content {\r
  display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
  background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
  border-radius: 8px; z-index: 100; gap: 32px;\r
}\r
@media (hover: hover) {\r
  .dropdown:hover .dropdown-content { display: flex; }\r
}\r
.dropdown-group { display: flex; flex-direction: column; }\r
.dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
.dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
@media (max-width:700px){\r
  .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
  .dropdown.open .dropdown-content{display:flex;}\r
  .dropdown-content a{padding:6px 0;}\r
}\r
\r
\r
\r
\r
\r
\r
\r
\r
    @media (max-width: 700px) {\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
    }\r
\r
    /* ===== HERO ===== */\r
    .hero-section {\r
      height: clamp(280px, 44vh, 500px);\r
      min-height: 280px; width: 100%; position: relative; display: block;\r
      background: url('img/paloquemao.png?v=20250810-2') center 90%/100% no-repeat;\r
      margin-top: var(--nav-h); overflow: hidden; z-index: 1;\r
    }\r
    /* Franja azul de ancho completo, centrada verticalmente */\r
    .hero-overlay {\r
      position: absolute; top: 50%; left: 0; width: 100%;\r
      height: 100px; background: rgba(35,57,93,0.92);\r
      transform: translateY(-50%); z-index: 1;\r
      border-top: 1px solid rgba(255,255,255,.06);\r
      border-bottom: 1px solid rgba(255,255,255,.06);\r
    }\r
    /* Texto centrado y por encima de la franja */\r
    .hero-text{\r
      position: absolute; inset: 0;\r
      z-index: 2; display: flex; align-items: center; justify-content: center;\r
      text-align: center; padding: 0 16px;\r
    }\r
    .hero-headline{\r
      font-family: 'Dancing Script', cursive;\r
      font-weight: 700; letter-spacing: .02em; line-height: 1.1;\r
      font-size: clamp(2rem, 6vw, 4rem);\r
      color: #ffffff; text-shadow: 0 3px 18px rgba(0,0,0,.35);\r
    }\r
    @media (max-width: 520px){\r
      .hero-headline{ font-size: clamp(1.8rem, 7vw, 2.6rem); }\r
      .hero-overlay{ height: 84px; }\r
    }\r
    @media (max-width: 900px) { .hero-section { height: clamp(260px, 48vh, 520px); } }\r
    @media (max-width: 540px) { .hero-section { height: clamp(220px, 44vh, 480px); } }\r
\r
    /* ===== SECCIÓN CARDS ===== */\r
    .labor-cards-section{\r
      width:100%;\r
      background: linear-gradient(90deg, var(--koop-azul-claro) 36%, #fff 36%);\r
      padding: 64px 20px 72px; box-sizing: border-box;\r
    }\r
    .labor-cards-container{\r
      max-width:1200px; margin:0 auto; text-align:center; color: var(--koop-azul);\r
    }\r
    .labor-tag{\r
      display:inline-block; background: var(--koop-acento); color:#1f2b3d;\r
      font-weight:700; letter-spacing:.06em; font-size:.85rem;\r
      padding:8px 14px; border-radius:6px; margin-bottom:18px;\r
    }\r
    .labor-title{\r
      font-size:2rem; font-weight:800; margin:6px 0 8px; color: var(--koop-azul);\r
      letter-spacing:.01em; text-transform:uppercase;\r
    }\r
    .labor-sub{\r
      font-size:1.1rem; color:#4877b1; max-width:800px; margin:0 auto 32px;\r
    }\r
    .labor-grid{\r
      display:grid; gap:22px; grid-template-columns: repeat(4, 1fr); margin-top:18px;\r
    }\r
    .labor-card{\r
      position:relative; border-radius:14px; overflow:hidden;\r
      min-height: 300px; background:#ccc; display:block; text-decoration:none;\r
    }\r
    .labor-card::before{\r
      content:""; position:absolute; inset:0;\r
      background: var(--bg, url('Imagen gigante centro int.JPG')) center/cover no-repeat;\r
    }\r
    .labor-card::after{ content:""; position:absolute; inset:0; background:rgba(35,57,93,.55); }\r
    .labor-card-content{\r
      position:relative; z-index:2; color:#fff; text-align:left;\r
      padding: 18px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;\r
    }\r
    .labor-badge{\r
      align-self:flex-start; background: rgba(17,34,66,.85);\r
      padding:6px 12px; border-radius:999px; font-weight:700; font-size:.8rem; letter-spacing:.06em; margin-bottom:10px;\r
    }\r
    .labor-card-title{\r
      font-size:1.35rem; font-weight:800; line-height:1.2; margin:2px 0 6px;\r
      text-shadow:0 3px 18px rgba(0,0,0,.35);\r
    }\r
    .labor-card-desc{ font-size:.95rem; color:#d9e9ff; line-height:1.35; }\r
    .labor-dot{ width:10px; height:10px; border-radius:3px; background:var(--koop-bullet); display:inline-block; margin-right:8px; transform: translateY(-1px); }\r
\r
    @media (max-width: 1100px){ .labor-grid{ grid-template-columns: repeat(3, 1fr); } }\r
    @media (max-width: 820px){ .labor-grid{ grid-template-columns: repeat(2, 1fr); } .labor-title{ font-size:1.7rem; } }\r
    @media (max-width: 520px){ .labor-grid{ grid-template-columns: 1fr; } .labor-cards-section{ padding: 44px 12px 52px; } .labor-sub{ font-size:1rem; } }\r
\r
    /* ===== FOOTER ===== */\r
    footer{\r
      position: relative;\r
      color:#e8f0ff;\r
      background: url('Img23_Atrio.jpg') center center/cover no-repeat;\r
      isolation: isolate;\r
    }\r
    footer::before{\r
      content:""; position:absolute; inset:0;\r
      background: rgba(33,56,99,0.86);\r
      z-index:0;\r
    }\r
\r
    .footer-top{\r
      max-width:1200px; margin:0 auto; padding:56px 20px 28px; display:grid;\r
      grid-template-columns: 1.2fr 1fr 1fr 1fr; gap:28px; position: relative; z-index:1;\r
    }\r
    .footer-brand{ display:flex; flex-direction:column; gap:14px; }\r
    .footer-logo{ display:flex; align-items:center; gap:10px; }\r
    .footer-logo .brand-text{ font-weight:800; letter-spacing:.04em; color:#fff; font-size:1.05rem; }\r
    .footer-copy{ font-size:.92rem; color:#cfe0ff; line-height:1.5; }\r
\r
    .footer-cta{\r
      background: rgba(238,150,38,.1);\r
      border:1px solid rgba(238,150,38,.35);\r
      padding:14px; border-radius:12px;\r
    }\r
    .footer-cta h4{ margin:0 0 8px; font-size:1.05rem; color:#fff; }\r
    .btns{ display:flex; gap:10px; flex-wrap:wrap; }\r
    .btn{\r
      display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-weight:700;\r
      padding:10px 14px; border-radius:10px; border:1px solid transparent; transition:.2s;\r
      font-size:.95rem;\r
    }\r
    .btn-whatsapp{ background: var(--koop-acento); color:#1d283a; }\r
    .btn-whatsapp:hover{ transform: translateY(-1px); filter: brightness(1.05); }\r
    .btn-mail{ background: transparent; color:#e8f0ff; border-color:#2f497c; }\r
    .btn-mail:hover{ background:#1b2a4e; }\r
\r
    .footer-col h5{ margin:0 0 10px; font-size:1.02rem; color:#fff; letter-spacing:.04em; }\r
    .footer-list{ list-style:none; padding:0; margin:0; display:grid; gap:8px; }\r
    .footer-list a{ color:#cfe0ff; text-decoration:none; font-size:.95rem; display:inline-block; padding:4px 0; }\r
    .footer-list a:hover{ color:var(--koop-acento); }\r
\r
    .footer-contact{ font-size:.95rem; color:#cfe0ff; display:grid; gap:8px; }\r
    .footer-contact .item{ display:flex; gap:10px; align-items:flex-start; }\r
\r
    .icon{ width:22px; height:22px; display:inline-block; vertical-align:middle; }\r
\r
    .footer-social{ display:flex; gap:16px; margin-top:8px; }\r
    .footer-social a{ color: var(--koop-acento); display:inline-flex; }\r
    .footer-social .icon{ width:40px; height:40px; }\r
\r
    .mini-footer{\r
      border-top:1px solid #20345d; margin-top:24px;\r
      padding:14px 20px 22px; color:#a8b9d8; font-size:.88rem; position: relative; z-index:1;\r
      background: linear-gradient(180deg, rgba(21,34,65,.55), rgba(21,34,65,.65));\r
    }\r
    .mini-footer .wrap{\r
      max-width:1200px; margin:0 auto; display:flex; gap:16px; justify-content:space-between; align-items:center; flex-wrap:wrap;\r
    }\r
    .mini-links{ display:flex; gap:16px; flex-wrap:wrap; }\r
    .mini-links a{ color:#a8b9d8; text-decoration:none; }\r
    .mini-links a:hover{ color:#fff; }\r
\r
    .footer-divider{\r
      position:absolute; top:-18px; left:0; width:100%; height:18px;\r
      background: linear-gradient(90deg, var(--koop-acento) 0 40%, transparent 40% 100%);\r
      opacity:.75; z-index:1;\r
    }\r
\r
    @media (max-width: 980px){ .footer-top{ grid-template-columns: 1fr 1fr; } }\r
    @media (max-width: 560px){ .footer-top{ grid-template-columns: 1fr; padding:44px 14px 20px; } }\r
\r
    /* ======================================================\r
       FIX HERO EN MÓVILES (imagen completa, sin recortes)\r
       ====================================================== */\r
@media (max-width: 540px){\r
  .hero-section{\r
    height: 75vh;         /* altura generosa en móvil */\r
    min-height: 420px;    /* salvaguarda en pantallas bajas */\r
\r
    background-image: url('img/paloquemao.png?v=20250810-2');\r
    background-position: center;  /* centrada para que el recorte sea equilibrado */\r
    background-size: cover;       /* se expande y llena el área, sin bandas */\r
    background-repeat: no-repeat;\r
    background-color: #141b2d;    /* color de fondo por si hay retardo al cargar */\r
  }\r
\r
  .hero-overlay{ height: 84px; }\r
  .hero-headline{ font-size: clamp(1.9rem, 7.2vw, 2.6rem); }\r
}\r
  </style>\r
</head>\r
<body>\r
\r
  <!-- Overlay de transición -->\r
  <div class="page-transition" aria-hidden="true"></div>\r
\r
  <!-- NAV -->\r
  <nav class="navbar">\r
    <div class="navbar-content">\r
      <a href="index.html" class="logo">\r
        <img src="Koop Logo.png" alt="Logo Koop" class="logo-img">\r
        <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
      </a>\r
      <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
      <div class="nav-menu" id="nav-menu">\r
          <a href="index.html#inicio">INICIO</a>\r
          <div class="dropdown">\r
            <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
            <div class="dropdown-content">\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Derecho</span>\r
                <a href="derecho-laboral.html">Derecho Laboral</a>\r
                <a href="derecho-penal.html">Derecho Penal</a>\r
                <a href="tramites-notariales.html">Trámites notariales</a>\r
                <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
                <a href="derecho-familia.html">Derecho de Familia</a>\r
                <a href="contratacion-publica.html">Contratación Pública</a>\r
                <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
                <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
                <a href="insolvencia.html">Insolvencia</a>\r
              </div>\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Contabilidad</span>\r
                <a href="contabilidad.html">Contabilidad</a>\r
                <a href="auditoria.html">Auditoría</a>\r
                <a href="impuestos.html">Impuestos</a>\r
                <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
              </div>\r
            </div>\r
          </div>\r
          <a href="index.html#vision">NUESTRA VISIÓN</a>\r
          <a href="index.html#contacto">CONTACTO</a>\r
        </div>\r
    </div>\r
  </nav>\r
\r
  <!-- HERO -->\r
  <section class="hero-section" id="inicio">\r
    <div class="hero-overlay" aria-hidden="true"></div>\r
    <div class="hero-text" aria-label="Derecho Penal">\r
      <div class="hero-headline">Derecho Penal</div>\r
    </div>\r
  </section>\r
\r
  <!-- SECCIÓN CARDS -->\r
  <section class="labor-cards-section" id="servicios penales">\r
    <div class="labor-cards-container">\r
      <div class="labor-tag">SERVICIOS PENALES</div>\r
      <h2 class="labor-title">Confíe su caso a manos profesionales y con experiencia.</h2>\r
      <p class="labor-sub">Representamos sus intereses con experiencia y conocimiento en el ámbito penal.</p>\r
\r
      <div class="labor-grid">\r
        <!-- 1. Audiencias, medidas de aseguramiento y trámite penal -->\r
        <a href="#audiencias" class="labor-card" style="--bg:url('img/Audiencias.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Audiencias, medidas de aseguramiento y trámite penal</div>\r
            <div class="labor-card-desc">Protección de sus derechos durante todo el trámite penal, hasta sentencia.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 2. Asesoría y Representación Penal integral para Víctimas -->\r
        <a href="#asesoria" class="labor-card" style="--bg:url('img/Victimas.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Asesoría y Representación Penal integral para Víctimas</div>\r
            <div class="labor-card-desc">Representación legal experta para víctimas, desde la denuncia hasta la indemnización.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 3. Acompañamiento en audiencias y fases procesales clave -->\r
        <a href="#acompañamiento" class="labor-card" style="--bg:url('img/Acompañamiento.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Acompañamiento en audiencias y fases procesales clave</div>\r
            <div class="labor-card-desc">Defensa en audiencias específicas. Consulte más acá.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 4. Habeas corpus y libertades inmediatas -->\r
        <a href="#habeas" class="labor-card" style="--bg:url('img/habeas.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Habeas corpus y libertades inmediatas</div>\r
            <div class="labor-card-desc">Trámite inmediato para restablecer la libertad personal.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 5. Defensa y Asesoría en Casos de Delitos Sexuales -->\r
        <a href="#defensa" class="labor-card" style="--bg:url('img/sexuales.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Defensa y Asesoría en Casos de Delitos Sexuales</div>\r
            <div class="labor-card-desc">Protección integral de derechos en investigaciones y juicios por delitos sexuales.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 6. Control y Seguimiento de Procesos en Fiscalía -->\r
        <a href="#control" class="labor-card" style="--bg:url('img/fiscalia.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Control y Seguimiento de Procesos en Fiscalía</div>\r
            <div class="labor-card-desc">Monitoreamos y gestionamos su proceso penal para evitar estancamientos y proteger sus derechos.</div>\r
          </div>\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ===== FOOTER ===== -->\r
  <footer>\r
    <div class="footer-divider" aria-hidden="true"></div>\r
\r
    <div class="footer-top">\r
      <!-- Columna Marca + CTA -->\r
      <div class="footer-brand">\r
        <div class="footer-logo">\r
          <div class="brand-text">KOOP STRATEGIC ADVISORY</div>\r
        </div>\r
        <p class="footer-copy">\r
          Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral.\r
        </p>\r
        <div class="footer-cta">\r
          <h4>¿Necesitas una asesoría laboral hoy?</h4>\r
          <div class="btns">\r
            <a class="btn btn-whatsapp" href="https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20penal%20sobre%20el%20siguiente%20tema:" target="_blank" rel="noopener">\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"/>\r
              </svg>\r
              WhatsApp\r
            </a>\r
            <a class="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop">\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
              Escríbenos\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="footer-col">\r
        <h5>Enlaces rápidos</h5>\r
        <ul class="footer-list">\r
          <li><a href="index.html#inicio">Inicio</a></li>\r
          <li><a href="index.html#areas">Áreas de práctica</a></li>\r
          <li><a href="index.html#vision">Nuestra visión</a></li>\r
          <li><a href="index.html#contacto">Contacto</a></li>\r
        </ul>\r
      </div>\r
\r
      <div class="footer-col">\r
        <h5>Servicios laborales</h5>\r
        <ul class="footer-list">\r
          <li><a href="#audiencias">Audiencias, medidas de aseguramiento y trámite penal</a></li>\r
          <li><a href="#asesoria">Asesoría y Representación Penal integral para Víctimas</a></li>\r
          <li><a href="#acompañamiento">Acompañamiento en audiencias y fases procesales clave</a></li>\r
          <li><a href="#habeas">Habeas corpus y libertades inmediatas</a></li>\r
          <li><a href="#defensa">Defensa y Asesoría en Casos de Delitos Sexuales</a></li>\r
          <li><a href="#control">Control y Seguimiento de Procesos en Fiscalía</a></li>\r
        </ul>\r
      </div>\r
\r
      <div class="footer-col">\r
        <h5>Contacto</h5>\r
        <div class="footer-contact">\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>\r
            <span>Bogotá D.C., Colombia</span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="tel:+573137213878">+57 (313) 721 38 78</a></span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="mailto:direccionjuridicakoop@hotmail.com">direccionjuridicakoop@hotmail.com</a></span>\r
          </div>\r
        </div>\r
\r
        <div class="footer-social" aria-label="Redes sociales">\r
          <a aria-label="Instagram" href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" rel="noopener" title="Instagram">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>\r
            </svg>\r
          </a>\r
          <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>\r
            </svg>\r
          </a>\r
          <a aria-label="TikTok" href="https://www.tiktok.com/@koopstrategicadvisory" target="_blank" rel="noopener" title="TikTok">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"/>\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mini-footer">\r
      <div class="wrap">\r
        <div>© <span id="year"></span> Koop Strategic Advisory. Todos los derechos reservados.</div>\r
        <div class="mini-links">\r
          <a href="politica-privacidad.html">Política de privacidad</a>\r
          <a href="terminos.html">Términos y condiciones</a>\r
          <a href="#inicio">Volver arriba ↑</a>\r
        </div>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <script>\r
    // Menú móvil\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
            navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
\r
    // Año dinámico\r
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();\r
\r
    // Manejo de transiciones\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
      \r
      // Asegurar que el overlay esté oculto al cargar la página\r
      function hideOverlay() {\r
        if (overlay) {\r
          overlay.classList.remove('is-active');\r
        }\r
      }\r
      \r
      // Ocultar overlay inmediatamente al cargar\r
      hideOverlay();\r
      \r
      // Ocultar overlay cuando se restaura desde BFCache\r
      window.addEventListener('pageshow', (e) => {\r
        if (e.persisted) {\r
          hideOverlay();\r
        }\r
      });\r
      \r
      // Ocultar overlay cuando se hace focus en la ventana\r
      window.addEventListener('focus', hideOverlay);\r
      \r
      // Ocultar overlay cuando se carga completamente la página\r
      window.addEventListener('load', hideOverlay);\r
      \r
      // Transición de salida interna\r
      function shouldIntercept(link) {\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false;\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
      \r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
\r
        e.preventDefault();\r
        overlay && overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,Ag=()=>{nn(),rn();const e=an(Eg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho Penal",children:r.jsx("div",{className:"hero-headline",children:"Derecho Penal"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS PENALES"}),r.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),r.jsx("p",{className:"labor-sub",children:"Representamos sus intereses con experiencia y conocimiento en el ámbito penal."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#audiencias",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Audiencias, medidas de aseguramiento y trámite penal"]}),r.jsx("div",{className:"labor-card-desc",children:"Protección de sus derechos durante todo el trámite penal, hasta sentencia."})]})}),r.jsx("a",{href:"#asesoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Asesoría y Representación Penal integral para Víctimas"]}),r.jsx("div",{className:"labor-card-desc",children:"Representación legal experta para víctimas, desde la denuncia hasta la indemnización."})]})}),r.jsx("a",{href:"#acompañamiento",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Acompañamiento en audiencias y fases procesales clave"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa en audiencias específicas. Consulte más acá."})]})}),r.jsx("a",{href:"#habeas",className:"labor-card",style:{"--bg":"url('img/habeas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Habeas corpus y libertades inmediatas"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámite inmediato para restablecer la libertad personal."})]})}),r.jsx("a",{href:"#defensa",className:"labor-card",style:{"--bg":"url('img/sexuales.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Defensa y Asesoría en Casos de Delitos Sexuales"]}),r.jsx("div",{className:"labor-card-desc",children:"Protección integral de derechos en investigaciones y juicios por delitos sexuales."})]})}),r.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/fiscalia.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Control y Seguimiento de Procesos en Fiscalía"]}),r.jsx("div",{className:"labor-card-desc",children:"Monitoreamos y gestionamos su proceso penal para evitar estancamientos y proteger sus derechos."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20penal%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(O,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(O,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(O,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(O,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios laborales"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#audiencias",children:"Audiencias, medidas de aseguramiento y trámite penal"})}),r.jsx("li",{children:r.jsx("a",{href:"#asesoria",children:"Asesoría y Representación Penal integral para Víctimas"})}),r.jsx("li",{children:r.jsx("a",{href:"#acompañamiento",children:"Acompañamiento en audiencias y fases procesales clave"})}),r.jsx("li",{children:r.jsx("a",{href:"#habeas",children:"Habeas corpus y libertades inmediatas"})}),r.jsx("li",{children:r.jsx("a",{href:"#defensa",children:"Defensa y Asesoría en Casos de Delitos Sexuales"})}),r.jsx("li",{children:r.jsx("a",{href:"#control",children:"Control y Seguimiento de Procesos en Fiscalía"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Tg=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Koop Strategic Advisory | Impuestos</title>\r
  <!-- Fuentes -->\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">\r
  <noscript><style>.page-transition{display:none!important}</style></noscript>\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
\r
    html, body {\r
      margin: 0; padding: 0; box-sizing: border-box; overflow-x: hidden;\r
      width: 100%; height: 100%;\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d;\r
      color: #fff;\r
    }\r
    *, *::before, *::after { box-sizing: inherit; }\r
\r
    /* ===== Transición entre páginas ===== */\r
    .page-transition{\r
      position: fixed;\r
      inset: 0;\r
      background: #141b2d;\r
      z-index: 9998;\r
      opacity: 0;\r
      pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{\r
      opacity: 1;\r
      pointer-events: auto;\r
    }\r
\r
    /* ===== NAVBAR ===== */\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
.dropdown { position: relative; }\r
.drop-btn { display: flex; align-items: center; }\r
.drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
.dropdown-content {\r
  display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
  background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
  border-radius: 8px; z-index: 100; gap: 32px;\r
}\r
@media (hover: hover) {\r
  .dropdown:hover .dropdown-content { display: flex; }\r
}\r
.dropdown-group { display: flex; flex-direction: column; }\r
.dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
.dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
@media (max-width:700px){\r
  .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
  .dropdown.open .dropdown-content{display:flex;}\r
  .dropdown-content a{padding:6px 0;}\r
}\r
\r
\r
\r
\r
\r
\r
\r
\r
    @media (max-width: 700px) {\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
    }\r
\r
    /* ===== HERO ===== */\r
    .hero-section {\r
      height: clamp(280px, 44vh, 500px);\r
      min-height: 280px; width: 100%; position: relative; display: block;\r
      background: url('img/impuestos-en-colombia.jpg') center center/cover no-repeat;\r
      margin-top: var(--nav-h); overflow: hidden; z-index: 1;\r
    }\r
    /* Franja azul de ancho completo, centrada verticalmente */\r
    .hero-overlay {\r
      position: absolute; top: 50%; left: 0; width: 100%;\r
      height: 100px; background: rgba(35,57,93,0.92);\r
      transform: translateY(-50%); z-index: 1;\r
      border-top: 1px solid rgba(255,255,255,.06);\r
      border-bottom: 1px solid rgba(255,255,255,.06);\r
    }\r
    /* Texto centrado y por encima de la franja */\r
    .hero-text{\r
      position: absolute; inset: 0;\r
      z-index: 2; display: flex; align-items: center; justify-content: center;\r
      text-align: center; padding: 0 16px;\r
    }\r
    .hero-headline{\r
      font-family: 'Dancing Script', cursive;\r
      font-weight: 700; letter-spacing: .02em; line-height: 1.1;\r
      font-size: clamp(2rem, 6vw, 4rem);\r
      color: #ffffff; text-shadow: 0 3px 18px rgba(0,0,0,.35);\r
    }\r
    @media (max-width: 520px){\r
      .hero-headline{ font-size: clamp(1.8rem, 7vw, 2.6rem); }\r
      .hero-overlay{ height: 84px; }\r
    }\r
    @media (max-width: 900px) { .hero-section { height: clamp(260px, 48vh, 520px); } }\r
    @media (max-width: 540px) { .hero-section { height: clamp(220px, 44vh, 480px); } }\r
\r
    /* ===== SECCIÓN CARDS ===== */\r
    .labor-cards-section{\r
      width:100%;\r
      background: linear-gradient(90deg, var(--koop-azul-claro) 36%, #fff 36%);\r
      padding: 64px 20px 72px; box-sizing: border-box;\r
    }\r
    .labor-cards-container{\r
      max-width:1200px; margin:0 auto; text-align:center; color: var(--koop-azul);\r
    }\r
    .labor-tag{\r
      display:inline-block; background: var(--koop-acento); color:#1f2b3d;\r
      font-weight:700; letter-spacing:.06em; font-size:.85rem;\r
      padding:8px 14px; border-radius:6px; margin-bottom:18px;\r
    }\r
    .labor-title{\r
      font-size:2rem; font-weight:800; margin:6px 0 8px; color: var(--koop-azul);\r
      letter-spacing:.01em; text-transform:uppercase;\r
    }\r
    .labor-sub{\r
      font-size:1.1rem; color:#4877b1; max-width:800px; margin:0 auto 32px;\r
    }\r
    .labor-grid{\r
      display:grid; gap:22px; grid-template-columns: repeat(4, 1fr); margin-top:18px;\r
    }\r
    .labor-card{\r
      position:relative; border-radius:14px; overflow:hidden;\r
      min-height: 300px; background:#ccc; display:block; text-decoration:none;\r
    }\r
    .labor-card::before{\r
      content:""; position:absolute; inset:0;\r
      background: var(--bg, url('Imagen gigante centro int.JPG')) center/cover no-repeat;\r
    }\r
    .labor-card::after{ content:""; position:absolute; inset:0; background:rgba(35,57,93,.55); }\r
    .labor-card-content{\r
      position:relative; z-index:2; color:#fff; text-align:left;\r
      padding: 18px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;\r
    }\r
    .labor-badge{\r
      align-self:flex-start; background: rgba(17,34,66,.85);\r
      padding:6px 12px; border-radius:999px; font-weight:700; font-size:.8rem; letter-spacing:.06em; margin-bottom:10px;\r
    }\r
    .labor-card-title{\r
      font-size:1.35rem; font-weight:800; line-height:1.2; margin:2px 0 6px;\r
      text-shadow:0 3px 18px rgba(0,0,0,.35);\r
    }\r
    .labor-card-desc{ font-size:.95rem; color:#d9e9ff; line-height:1.35; }\r
    .labor-dot{ width:10px; height:10px; border-radius:3px; background:var(--koop-bullet); display:inline-block; margin-right:8px; transform: translateY(-1px); }\r
\r
    @media (max-width: 1100px){ .labor-grid{ grid-template-columns: repeat(3, 1fr); } }\r
    @media (max-width: 820px){ .labor-grid{ grid-template-columns: repeat(2, 1fr); } .labor-title{ font-size:1.7rem; } }\r
    @media (max-width: 520px){ .labor-grid{ grid-template-columns: 1fr; } .labor-cards-section{ padding: 44px 12px 52px; } .labor-sub{ font-size:1rem; } }\r
\r
    /* ===== FOOTER ===== */\r
    footer{\r
      position: relative;\r
      color:#e8f0ff;\r
      background: url('Img23_Atrio.jpg') center center/cover no-repeat;\r
      isolation: isolate;\r
    }\r
    footer::before{\r
      content:""; position:absolute; inset:0;\r
      background: rgba(33,56,99,0.86);\r
      z-index:0;\r
    }\r
\r
    .footer-top{\r
      max-width:1200px; margin:0 auto; padding:56px 20px 28px; display:grid;\r
      grid-template-columns: 1.2fr 1fr 1fr 1fr; gap:28px; position: relative; z-index:1;\r
    }\r
    .footer-brand{ display:flex; flex-direction:column; gap:14px; }\r
    /* Logo gráfico eliminado; solo texto de marca */\r
    .footer-logo{ display:flex; align-items:center; gap:10px; }\r
    .footer-logo .brand-text{ font-weight:800; letter-spacing:.04em; color:#fff; font-size:1.05rem; }\r
    .footer-copy{ font-size:.92rem; color:#cfe0ff; line-height:1.5; }\r
\r
    .footer-cta{\r
      background: rgba(238,150,38,.1);\r
      border:1px solid rgba(238,150,38,.35);\r
      padding:14px; border-radius:12px;\r
    }\r
    .footer-cta h4{ margin:0 0 8px; font-size:1.05rem; color:#fff; }\r
    .btns{ display:flex; gap:10px; flex-wrap:wrap; }\r
    .btn{\r
      display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-weight:700;\r
      padding:10px 14px; border-radius:10px; border:1px solid transparent; transition:.2s;\r
      font-size:.95rem;\r
    }\r
    .btn-whatsapp{ background: var(--koop-acento); color:#1d283a; }\r
    .btn-whatsapp:hover{ transform: translateY(-1px); filter: brightness(1.05); }\r
    .btn-mail{ background: transparent; color:#e8f0ff; border-color:#2f497c; }\r
    .btn-mail:hover{ background:#1b2a4e; }\r
\r
    .footer-col h5{ margin:0 0 10px; font-size:1.02rem; color:#fff; letter-spacing:.04em; }\r
    .footer-list{ list-style:none; padding:0; margin:0; display:grid; gap:8px; }\r
    .footer-list a{ color:#cfe0ff; text-decoration:none; font-size:.95rem; display:inline-block; padding:4px 0; }\r
    .footer-list a:hover{ color:var(--koop-acento); }\r
\r
    .footer-contact{ font-size:.95rem; color:#cfe0ff; display:grid; gap:8px; }\r
    .footer-contact .item{ display:flex; gap:10px; align-items:flex-start; }\r
\r
    /* Tamaño base de TODOS los íconos (contacto, botones, etc.) */\r
    .icon{ width:22px; height:22px; display:inline-block; vertical-align:middle; }\r
\r
    /* Redes sociales: solo un poco más grandes (24px) y en naranja corporativo */\r
    .footer-social{ display:flex; gap:16px; margin-top:8px; }\r
    .footer-social a{ color: var(--koop-acento); display:inline-flex; }\r
    .footer-social .icon{ width:40px; height:40px; }\r
\r
    .mini-footer{\r
      border-top:1px solid #20345d; margin-top:24px;\r
      padding:14px 20px 22px; color:#a8b9d8; font-size:.88rem; position: relative; z-index:1;\r
      background: linear-gradient(180deg, rgba(21,34,65,.55), rgba(21,34,65,.65));\r
    }\r
    .mini-footer .wrap{\r
      max-width:1200px; margin:0 auto; display:flex; gap:16px; justify-content:space-between; align-items:center; flex-wrap:wrap;\r
    }\r
    .mini-links{ display:flex; gap:16px; flex-wrap:wrap; }\r
    .mini-links a{ color:#a8b9d8; text-decoration:none; }\r
    .mini-links a:hover{ color:#fff; }\r
\r
    .footer-divider{\r
      position:absolute; top:-18px; left:0; width:100%; height:18px;\r
      background: linear-gradient(90deg, var(--koop-acento) 0 40%, transparent 40% 100%);\r
      opacity:.75; z-index:1;\r
    }\r
\r
    @media (max-width: 980px){ .footer-top{ grid-template-columns: 1fr 1fr; } }\r
    @media (max-width: 560px){ .footer-top{ grid-template-columns: 1fr; padding:44px 14px 20px; } }\r
  </style>\r
</head>\r
<body>\r
\r
  <!-- Overlay de transición -->\r
  <div class="page-transition" aria-hidden="true"></div>\r
\r
  <!-- NAV -->\r
  <nav class="navbar">\r
    <div class="navbar-content">\r
      <a href="index.html" class="logo">\r
        <img src="Koop Logo.png" alt="Logo Koop" class="logo-img">\r
        <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
      </a>\r
      <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
      <div class="nav-menu" id="nav-menu">\r
          <a href="index.html#inicio">INICIO</a>\r
          <div class="dropdown">\r
            <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
            <div class="dropdown-content">\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Derecho</span>\r
                <a href="derecho-laboral.html">Derecho Laboral</a>\r
                <a href="derecho-penal.html">Derecho Penal</a>\r
                <a href="tramites-notariales.html">Trámites notariales</a>\r
                <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
                <a href="derecho-familia.html">Derecho de Familia</a>\r
                <a href="contratacion-publica.html">Contratación Pública</a>\r
                <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
                <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
                <a href="insolvencia.html">Insolvencia</a>\r
              </div>\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Contabilidad</span>\r
                <a href="contabilidad.html">Contabilidad</a>\r
                <a href="auditoria.html">Auditoría</a>\r
                <a href="impuestos.html">Impuestos</a>\r
                <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
              </div>\r
            </div>\r
          </div>\r
          <a href="index.html#vision">NUESTRA VISIÓN</a>\r
          <a href="index.html#contacto">CONTACTO</a>\r
        </div>\r
    </div>\r
  </nav>\r
\r
  <!-- HERO -->\r
  <section class="hero-section" id="inicio">\r
    <div class="hero-overlay" aria-hidden="true"></div>\r
    <div class="hero-text" aria-label="Impuestos">\r
      <div class="hero-headline">Impuestos</div>\r
    </div>\r
  </section>\r
\r
  <!-- SECCIÓN CARDS -->\r
  <section class="labor-cards-section" id="servicios-impuestos">\r
    <div class="labor-cards-container">\r
      <div class="labor-tag">SERVICIOS DE IMPUESTOS</div>\r
      <h2 class="labor-title">Cómo te ayudamos</h2>\r
      <p class="labor-sub">Consultoría tributaria y planeación fiscal para empresas y personas.</p>\r
\r
      <div class="labor-grid">\r
        <!-- 1. Planeación tributaria -->\r
        <a href="#planeacion" class="labor-card" style="--bg:url('img/Acompañamiento.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Planeación tributaria</div>\r
            <div class="labor-card-desc">Estructuras fiscales eficientes y legales.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 2. Declaraciones y cumplimiento -->\r
        <a href="#declaraciones" class="labor-card" style="--bg:url('img/Victimas.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Declaraciones y cumplimiento</div>\r
            <div class="labor-card-desc">Preparación y presentación oportuna de impuestos.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 3. Defensa ante la DIAN -->\r
        <a href="#dian" class="labor-card" style="--bg:url('img/donacionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Defensa ante la DIAN</div>\r
            <div class="labor-card-desc">Respuestas a requerimientos y litigios tributarios.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 4. Precios de transferencia -->\r
        <a href="#transferencia" class="labor-card" style="--bg:url('img/sucesionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Precios de transferencia</div>\r
            <div class="labor-card-desc">Estudios y documentación obligatoria.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 5. Auditoría fiscal -->\r
        <a href="#auditoria" class="labor-card" style="--bg:url('img/Audiencias.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Auditoría fiscal</div>\r
            <div class="labor-card-desc">Revisión de obligaciones y contingencias.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 6. Obligaciones municipales -->\r
        <a href="#municipales" class="labor-card" style="--bg:url('img/capitulaciones.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Obligaciones municipales</div>\r
            <div class="labor-card-desc">Impuestos locales y de industria y comercio.</div>\r
          </div>\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ===== FOOTER ===== -->\r
  <footer>\r
    <div class="footer-divider" aria-hidden="true"></div>\r
\r
    <div class="footer-top">\r
      <!-- Columna Marca + CTA -->\r
      <div class="footer-brand">\r
        <div class="footer-logo">\r
          <!-- Logo gráfico eliminado; solo texto -->\r
          <div class="brand-text">KOOP STRATEGIC ADVISORY</div>\r
        </div>\r
        <p class="footer-copy">\r
          Estudio jurídico & contable. Optimización de obligaciones fiscales.\r
        </p>\r
        <div class="footer-cta">\r
          <h4>¿Necesitas una asesoría en impuestos?</h4>\r
          <div class="btns">\r
            <a class="btn btn-whatsapp" href="https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20impuestos%20sobre%20el%20siguiente%20tema:" target="_blank" rel="noopener">\r
              <!-- Ícono WhatsApp (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"/>\r
              </svg>\r
              WhatsApp\r
            </a>\r
            <a class="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Impuestos%20Koop">\r
              <!-- ícono mail (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
              Escríbenos\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Enlaces rápidos -->\r
      <div class="footer-col">\r
        <h5>Enlaces rápidos</h5>\r
        <ul class="footer-list">\r
          <li><a href="index.html#inicio">Inicio</a></li>\r
          <li><a href="index.html#areas">Áreas de práctica</a></li>\r
          <li><a href="index.html#vision">Nuestra visión</a></li>\r
          <li><a href="index.html#contacto">Contacto</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Servicios de Familia -->\r
      <div class="footer-col">\r
        <h5>Servicios de familia</h5>\r
        <ul class="footer-list">\r
          <li><a href="#divorcio">Divorcio y separación</a></li>\r
          <li><a href="#custodia">Custodia y patria potestad</a></li>\r
          <li><a href="#alimentos">Alimentos y pensión alimentaria</a></li>\r
          <li><a href="#sociedad">Liquidación de sociedad conyugal</a></li>\r
          <li><a href="#adopciones">Adopciones</a></li>\r
          <li><a href="#capitulaciones">Capitulaciones matrimoniales</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Contacto + Redes -->\r
      <div class="footer-col">\r
        <h5>Contacto</h5>\r
        <div class="footer-contact">\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>\r
            <span>Bogotá D.C., Colombia</span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="tel:+573137213878">+57 (313) 721 38 78</a></span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="mailto:direccionjuridicakoop@hotmail.com">direccionjuridicakoop@hotmail.com</a></span>\r
          </div>\r
        </div>\r
\r
        <div class="footer-social" aria-label="Redes sociales">\r
          <!-- Instagram -->\r
          <a aria-label="Instagram" href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" rel="noopener" title="Instagram">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>\r
            </svg>\r
          </a>\r
          <!-- Facebook -->\r
          <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>\r
            </svg>\r
          </a>\r
          <!-- TikTok -->\r
          <a aria-label="TikTok" href="https://www.tiktok.com/@koopstrategicadvisory" target="_blank" rel="noopener" title="TikTok">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"/>\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mini-footer">\r
      <div class="wrap">\r
        <div>© <span id="year"></span> Koop Strategic Advisory. Todos los derechos reservados.</div>\r
        <div class="mini-links">\r
          <a href="politica-privacidad.html">Política de privacidad</a>\r
          <a href="terminos.html">Términos y condiciones</a>\r
          <a href="#inicio">Volver arriba ↑</a>\r
        </div>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <script>\r
    // Menú móvil\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
            navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
\r
    // Año dinámico\r
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();\r
\r
    // Manejo de transiciones\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
      \r
      // Asegurar que el overlay esté oculto al cargar la página\r
      function hideOverlay() {\r
        if (overlay) {\r
          overlay.classList.remove('is-active');\r
        }\r
      }\r
      \r
      // Ocultar overlay inmediatamente al cargar\r
      hideOverlay();\r
      \r
      // Ocultar overlay cuando se restaura desde BFCache\r
      window.addEventListener('pageshow', (e) => {\r
        if (e.persisted) {\r
          hideOverlay();\r
        }\r
      });\r
      \r
      // Ocultar overlay cuando se hace focus en la ventana\r
      window.addEventListener('focus', hideOverlay);\r
      \r
      // Ocultar overlay cuando se carga completamente la página\r
      window.addEventListener('load', hideOverlay);\r
      \r
      // Transición de salida interna\r
      function shouldIntercept(link) {\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false;\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
      \r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
\r
        e.preventDefault();\r
        overlay && overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,Ig=()=>{nn(),rn();const e=an(Tg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Impuestos",children:r.jsx("div",{className:"hero-headline",children:"Impuestos"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-impuestos",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE IMPUESTOS"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Consultoría tributaria y planeación fiscal para empresas y personas."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#planeacion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Planeación tributaria"]}),r.jsx("div",{className:"labor-card-desc",children:"Estructuras fiscales eficientes y legales."})]})}),r.jsx("a",{href:"#declaraciones",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Declaraciones y cumplimiento"]}),r.jsx("div",{className:"labor-card-desc",children:"Preparación y presentación oportuna de impuestos."})]})}),r.jsx("a",{href:"#dian",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Defensa ante la DIAN"]}),r.jsx("div",{className:"labor-card-desc",children:"Respuestas a requerimientos y litigios tributarios."})]})}),r.jsx("a",{href:"#transferencia",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Precios de transferencia"]}),r.jsx("div",{className:"labor-card-desc",children:"Estudios y documentación obligatoria."})]})}),r.jsx("a",{href:"#auditoria",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Auditoría fiscal"]}),r.jsx("div",{className:"labor-card-desc",children:"Revisión de obligaciones y contingencias."})]})}),r.jsx("a",{href:"#municipales",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Obligaciones municipales"]}),r.jsx("div",{className:"labor-card-desc",children:"Impuestos locales y de industria y comercio."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Optimización de obligaciones fiscales."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en impuestos?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20impuestos%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Impuestos%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(O,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(O,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(O,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(O,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Planeación tributaria"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Declaraciones y cumplimiento"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Defensa ante DIAN"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Precios de transferencia"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Auditoría fiscal"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Obligaciones municipales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Rg=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Koop Strategic Advisory | Planeación Patrimonial</title>\r
  <!-- Fuentes -->\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">\r
  <noscript><style>.page-transition{display:none!important}</style></noscript>\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
\r
    html, body {\r
      margin: 0; padding: 0; box-sizing: border-box; overflow-x: hidden;\r
      width: 100%; height: 100%;\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d;\r
      color: #fff;\r
    }\r
    *, *::before, *::after { box-sizing: inherit; }\r
\r
    /* ===== Transición entre páginas ===== */\r
    .page-transition{\r
      position: fixed;\r
      inset: 0;\r
      background: #141b2d;\r
      z-index: 9998;\r
      opacity: 0;\r
      pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{\r
      opacity: 1;\r
      pointer-events: auto;\r
    }\r
\r
    /* ===== NAVBAR ===== */\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
.dropdown { position: relative; }\r
.drop-btn { display: flex; align-items: center; }\r
.drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
.dropdown-content {\r
  display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
  background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
  border-radius: 8px; z-index: 100; gap: 32px;\r
}\r
@media (hover: hover) {\r
  .dropdown:hover .dropdown-content { display: flex; }\r
}\r
.dropdown-group { display: flex; flex-direction: column; }\r
.dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
.dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
@media (max-width:700px){\r
  .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
  .dropdown.open .dropdown-content{display:flex;}\r
  .dropdown-content a{padding:6px 0;}\r
}\r
\r
\r
\r
\r
\r
\r
\r
\r
    @media (max-width: 700px) {\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
    }\r
\r
    /* ===== HERO ===== */\r
    .hero-section {\r
      height: clamp(280px, 44vh, 500px);\r
      min-height: 280px; width: 100%; position: relative; display: block;\r
      background: url('img/que_es_la_contabilidad.jpeg') center center/cover no-repeat;\r
      margin-top: var(--nav-h); overflow: hidden; z-index: 1;\r
    }\r
    /* Franja azul de ancho completo, centrada verticalmente */\r
    .hero-overlay {\r
      position: absolute; top: 50%; left: 0; width: 100%;\r
      height: 100px; background: rgba(35,57,93,0.92);\r
      transform: translateY(-50%); z-index: 1;\r
      border-top: 1px solid rgba(255,255,255,.06);\r
      border-bottom: 1px solid rgba(255,255,255,.06);\r
    }\r
    /* Texto centrado y por encima de la franja */\r
    .hero-text{\r
      position: absolute; inset: 0;\r
      z-index: 2; display: flex; align-items: center; justify-content: center;\r
      text-align: center; padding: 0 16px;\r
    }\r
    .hero-headline{\r
      font-family: 'Dancing Script', cursive;\r
      font-weight: 700; letter-spacing: .02em; line-height: 1.1;\r
      font-size: clamp(2rem, 6vw, 4rem);\r
      color: #ffffff; text-shadow: 0 3px 18px rgba(0,0,0,.35);\r
    }\r
    @media (max-width: 520px){\r
      .hero-headline{ font-size: clamp(1.8rem, 7vw, 2.6rem); }\r
      .hero-overlay{ height: 84px; }\r
    }\r
    @media (max-width: 900px) { .hero-section { height: clamp(260px, 48vh, 520px); } }\r
    @media (max-width: 540px) { .hero-section { height: clamp(220px, 44vh, 480px); } }\r
\r
    /* ===== SECCIÓN CARDS ===== */\r
    .labor-cards-section{\r
      width:100%;\r
      background: linear-gradient(90deg, var(--koop-azul-claro) 36%, #fff 36%);\r
      padding: 64px 20px 72px; box-sizing: border-box;\r
    }\r
    .labor-cards-container{\r
      max-width:1200px; margin:0 auto; text-align:center; color: var(--koop-azul);\r
    }\r
    .labor-tag{\r
      display:inline-block; background: var(--koop-acento); color:#1f2b3d;\r
      font-weight:700; letter-spacing:.06em; font-size:.85rem;\r
      padding:8px 14px; border-radius:6px; margin-bottom:18px;\r
    }\r
    .labor-title{\r
      font-size:2rem; font-weight:800; margin:6px 0 8px; color: var(--koop-azul);\r
      letter-spacing:.01em; text-transform:uppercase;\r
    }\r
    .labor-sub{\r
      font-size:1.1rem; color:#4877b1; max-width:800px; margin:0 auto 32px;\r
    }\r
    .labor-grid{\r
      display:grid; gap:22px; grid-template-columns: repeat(4, 1fr); margin-top:18px;\r
    }\r
    .labor-card{\r
      position:relative; border-radius:14px; overflow:hidden;\r
      min-height: 300px; background:#ccc; display:block; text-decoration:none;\r
    }\r
    .labor-card::before{\r
      content:""; position:absolute; inset:0;\r
      background: var(--bg, url('Imagen gigante centro int.JPG')) center/cover no-repeat;\r
    }\r
    .labor-card::after{ content:""; position:absolute; inset:0; background:rgba(35,57,93,.55); }\r
    .labor-card-content{\r
      position:relative; z-index:2; color:#fff; text-align:left;\r
      padding: 18px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;\r
    }\r
    .labor-badge{\r
      align-self:flex-start; background: rgba(17,34,66,.85);\r
      padding:6px 12px; border-radius:999px; font-weight:700; font-size:.8rem; letter-spacing:.06em; margin-bottom:10px;\r
    }\r
    .labor-card-title{\r
      font-size:1.35rem; font-weight:800; line-height:1.2; margin:2px 0 6px;\r
      text-shadow:0 3px 18px rgba(0,0,0,.35);\r
    }\r
    .labor-card-desc{ font-size:.95rem; color:#d9e9ff; line-height:1.35; }\r
    .labor-dot{ width:10px; height:10px; border-radius:3px; background:var(--koop-bullet); display:inline-block; margin-right:8px; transform: translateY(-1px); }\r
\r
    @media (max-width: 1100px){ .labor-grid{ grid-template-columns: repeat(3, 1fr); } }\r
    @media (max-width: 820px){ .labor-grid{ grid-template-columns: repeat(2, 1fr); } .labor-title{ font-size:1.7rem; } }\r
    @media (max-width: 520px){ .labor-grid{ grid-template-columns: 1fr; } .labor-cards-section{ padding: 44px 12px 52px; } .labor-sub{ font-size:1rem; } }\r
\r
    /* ===== FOOTER ===== */\r
    footer{\r
      position: relative;\r
      color:#e8f0ff;\r
      background: url('Img23_Atrio.jpg') center center/cover no-repeat;\r
      isolation: isolate;\r
    }\r
    footer::before{\r
      content:""; position:absolute; inset:0;\r
      background: rgba(33,56,99,0.86);\r
      z-index:0;\r
    }\r
\r
    .footer-top{\r
      max-width:1200px; margin:0 auto; padding:56px 20px 28px; display:grid;\r
      grid-template-columns: 1.2fr 1fr 1fr 1fr; gap:28px; position: relative; z-index:1;\r
    }\r
    .footer-brand{ display:flex; flex-direction:column; gap:14px; }\r
    /* Logo gráfico eliminado; solo texto de marca */\r
    .footer-logo{ display:flex; align-items:center; gap:10px; }\r
    .footer-logo .brand-text{ font-weight:800; letter-spacing:.04em; color:#fff; font-size:1.05rem; }\r
    .footer-copy{ font-size:.92rem; color:#cfe0ff; line-height:1.5; }\r
\r
    .footer-cta{\r
      background: rgba(238,150,38,.1);\r
      border:1px solid rgba(238,150,38,.35);\r
      padding:14px; border-radius:12px;\r
    }\r
    .footer-cta h4{ margin:0 0 8px; font-size:1.05rem; color:#fff; }\r
    .btns{ display:flex; gap:10px; flex-wrap:wrap; }\r
    .btn{\r
      display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-weight:700;\r
      padding:10px 14px; border-radius:10px; border:1px solid transparent; transition:.2s;\r
      font-size:.95rem;\r
    }\r
    .btn-whatsapp{ background: var(--koop-acento); color:#1d283a; }\r
    .btn-whatsapp:hover{ transform: translateY(-1px); filter: brightness(1.05); }\r
    .btn-mail{ background: transparent; color:#e8f0ff; border-color:#2f497c; }\r
    .btn-mail:hover{ background:#1b2a4e; }\r
\r
    .footer-col h5{ margin:0 0 10px; font-size:1.02rem; color:#fff; letter-spacing:.04em; }\r
    .footer-list{ list-style:none; padding:0; margin:0; display:grid; gap:8px; }\r
    .footer-list a{ color:#cfe0ff; text-decoration:none; font-size:.95rem; display:inline-block; padding:4px 0; }\r
    .footer-list a:hover{ color:var(--koop-acento); }\r
\r
    .footer-contact{ font-size:.95rem; color:#cfe0ff; display:grid; gap:8px; }\r
    .footer-contact .item{ display:flex; gap:10px; align-items:flex-start; }\r
\r
    /* Tamaño base de TODOS los íconos (contacto, botones, etc.) */\r
    .icon{ width:22px; height:22px; display:inline-block; vertical-align:middle; }\r
\r
    /* Redes sociales: solo un poco más grandes (24px) y en naranja corporativo */\r
    .footer-social{ display:flex; gap:16px; margin-top:8px; }\r
    .footer-social a{ color: var(--koop-acento); display:inline-flex; }\r
    .footer-social .icon{ width:40px; height:40px; }\r
\r
    .mini-footer{\r
      border-top:1px solid #20345d; margin-top:24px;\r
      padding:14px 20px 22px; color:#a8b9d8; font-size:.88rem; position: relative; z-index:1;\r
      background: linear-gradient(180deg, rgba(21,34,65,.55), rgba(21,34,65,.65));\r
    }\r
    .mini-footer .wrap{\r
      max-width:1200px; margin:0 auto; display:flex; gap:16px; justify-content:space-between; align-items:center; flex-wrap:wrap;\r
    }\r
    .mini-links{ display:flex; gap:16px; flex-wrap:wrap; }\r
    .mini-links a{ color:#a8b9d8; text-decoration:none; }\r
    .mini-links a:hover{ color:#fff; }\r
\r
    .footer-divider{\r
      position:absolute; top:-18px; left:0; width:100%; height:18px;\r
      background: linear-gradient(90deg, var(--koop-acento) 0 40%, transparent 40% 100%);\r
      opacity:.75; z-index:1;\r
    }\r
\r
    @media (max-width: 980px){ .footer-top{ grid-template-columns: 1fr 1fr; } }\r
    @media (max-width: 560px){ .footer-top{ grid-template-columns: 1fr; padding:44px 14px 20px; } }\r
  </style>\r
</head>\r
<body>\r
\r
  <!-- Overlay de transición -->\r
  <div class="page-transition" aria-hidden="true"></div>\r
\r
  <!-- NAV -->\r
  <nav class="navbar">\r
    <div class="navbar-content">\r
      <a href="index.html" class="logo">\r
        <img src="Koop Logo.png" alt="Logo Koop" class="logo-img">\r
        <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
      </a>\r
      <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
      <div class="nav-menu" id="nav-menu">\r
          <a href="index.html#inicio">INICIO</a>\r
          <div class="dropdown">\r
            <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
            <div class="dropdown-content">\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Derecho</span>\r
                <a href="derecho-laboral.html">Derecho Laboral</a>\r
                <a href="derecho-penal.html">Derecho Penal</a>\r
                <a href="tramites-notariales.html">Trámites notariales</a>\r
                <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
                <a href="derecho-familia.html">Derecho de Familia</a>\r
                <a href="contratacion-publica.html">Contratación Pública</a>\r
                <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
                <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
                <a href="insolvencia.html">Insolvencia</a>\r
              </div>\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Contabilidad</span>\r
                <a href="contabilidad.html">Contabilidad</a>\r
                <a href="auditoria.html">Auditoría</a>\r
                <a href="impuestos.html">Impuestos</a>\r
                <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
              </div>\r
            </div>\r
          </div>\r
          <a href="index.html#vision">NUESTRA VISIÓN</a>\r
          <a href="index.html#contacto">CONTACTO</a>\r
        </div>\r
    </div>\r
  </nav>\r
\r
  <!-- HERO -->\r
  <section class="hero-section" id="inicio">\r
    <div class="hero-overlay" aria-hidden="true"></div>\r
    <div class="hero-text" aria-label="Planeación Patrimonial">\r
      <div class="hero-headline">Planeación Patrimonial</div>\r
    </div>\r
  </section>\r
\r
  <!-- SECCIÓN CARDS -->\r
  <section class="labor-cards-section" id="servicios-planeacion">\r
    <div class="labor-cards-container">\r
      <div class="labor-tag">SERVICIOS DE PLANEACIÓN PATRIMONIAL</div>\r
      <h2 class="labor-title">Cómo te ayudamos</h2>\r
      <p class="labor-sub">Estructuración, protección y gestión de patrimonios familiares y empresariales.</p>\r
\r
      <div class="labor-grid">\r
        <!-- 1. Estrategias sucesorales -->\r
        <a href="#sucesion" class="labor-card" style="--bg:url('img/Acompañamiento.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Estrategias sucesorales</div>\r
            <div class="labor-card-desc">Testamentos y planificación de herencias.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 2. Fideicomisos y patrimonios autónomos -->\r
        <a href="#fideicomisos" class="labor-card" style="--bg:url('img/Victimas.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Fideicomisos y patrimonios autónomos</div>\r
            <div class="labor-card-desc">Estructuras para administrar bienes.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 3. Protocolos familiares -->\r
        <a href="#protocolos" class="labor-card" style="--bg:url('img/donacionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Protocolos familiares</div>\r
            <div class="labor-card-desc">Reglas de gobierno y sucesión empresarial.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 4. Optimización fiscal del patrimonio -->\r
        <a href="#fiscal" class="labor-card" style="--bg:url('img/sucesionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Optimización fiscal del patrimonio</div>\r
            <div class="labor-card-desc">Reducción de cargas impositivas.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 5. Administración de portafolios -->\r
        <a href="#portafolios" class="labor-card" style="--bg:url('img/Audiencias.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Administración de portafolios</div>\r
            <div class="labor-card-desc">Gestión de inversiones y activos.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 6. Protección de activos -->\r
        <a href="#activos" class="labor-card" style="--bg:url('img/capitulaciones.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Protección de activos</div>\r
            <div class="labor-card-desc">Blindaje frente a riesgos y contingencias.</div>\r
          </div>\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ===== FOOTER ===== -->\r
  <footer>\r
    <div class="footer-divider" aria-hidden="true"></div>\r
\r
    <div class="footer-top">\r
      <!-- Columna Marca + CTA -->\r
      <div class="footer-brand">\r
        <div class="footer-logo">\r
          <!-- Logo gráfico eliminado; solo texto -->\r
          <div class="brand-text">KOOP STRATEGIC ADVISORY</div>\r
        </div>\r
        <p class="footer-copy">\r
          Estudio jurídico & contable. Continuidad y eficiencia para tu legado.\r
        </p>\r
        <div class="footer-cta">\r
          <h4>¿Necesitas una asesoría en planeación patrimonial?</h4>\r
          <div class="btns">\r
            <a class="btn btn-whatsapp" href="https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:" target="_blank" rel="noopener">\r
              <!-- Ícono WhatsApp (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"/>\r
              </svg>\r
              WhatsApp\r
            </a>\r
            <a class="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop">\r
              <!-- ícono mail (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
              Escríbenos\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Enlaces rápidos -->\r
      <div class="footer-col">\r
        <h5>Enlaces rápidos</h5>\r
        <ul class="footer-list">\r
          <li><a href="index.html#inicio">Inicio</a></li>\r
          <li><a href="index.html#areas">Áreas de práctica</a></li>\r
          <li><a href="index.html#vision">Nuestra visión</a></li>\r
          <li><a href="index.html#contacto">Contacto</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Servicios de Familia -->\r
      <div class="footer-col">\r
        <h5>Servicios de familia</h5>\r
        <ul class="footer-list">\r
          <li><a href="#divorcio">Divorcio y separación</a></li>\r
          <li><a href="#custodia">Custodia y patria potestad</a></li>\r
          <li><a href="#alimentos">Alimentos y pensión alimentaria</a></li>\r
          <li><a href="#sociedad">Liquidación de sociedad conyugal</a></li>\r
          <li><a href="#adopciones">Adopciones</a></li>\r
          <li><a href="#capitulaciones">Capitulaciones matrimoniales</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Contacto + Redes -->\r
      <div class="footer-col">\r
        <h5>Contacto</h5>\r
        <div class="footer-contact">\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>\r
            <span>Bogotá D.C., Colombia</span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="tel:+573137213878">+57 (313) 721 38 78</a></span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="mailto:direccionjuridicakoop@hotmail.com">direccionjuridicakoop@hotmail.com</a></span>\r
          </div>\r
        </div>\r
\r
        <div class="footer-social" aria-label="Redes sociales">\r
          <!-- Instagram -->\r
          <a aria-label="Instagram" href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" rel="noopener" title="Instagram">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>\r
            </svg>\r
          </a>\r
          <!-- Facebook -->\r
          <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>\r
            </svg>\r
          </a>\r
          <!-- TikTok -->\r
          <a aria-label="TikTok" href="https://www.tiktok.com/@koopstrategicadvisory" target="_blank" rel="noopener" title="TikTok">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"/>\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mini-footer">\r
      <div class="wrap">\r
        <div>© <span id="year"></span> Koop Strategic Advisory. Todos los derechos reservados.</div>\r
        <div class="mini-links">\r
          <a href="politica-privacidad.html">Política de privacidad</a>\r
          <a href="terminos.html">Términos y condiciones</a>\r
          <a href="#inicio">Volver arriba ↑</a>\r
        </div>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <script>\r
    // Menú móvil\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
            navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
\r
    // Año dinámico\r
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();\r
\r
    // Manejo de transiciones\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
      \r
      // Asegurar que el overlay esté oculto al cargar la página\r
      function hideOverlay() {\r
        if (overlay) {\r
          overlay.classList.remove('is-active');\r
        }\r
      }\r
      \r
      // Ocultar overlay inmediatamente al cargar\r
      hideOverlay();\r
      \r
      // Ocultar overlay cuando se restaura desde BFCache\r
      window.addEventListener('pageshow', (e) => {\r
        if (e.persisted) {\r
          hideOverlay();\r
        }\r
      });\r
      \r
      // Ocultar overlay cuando se hace focus en la ventana\r
      window.addEventListener('focus', hideOverlay);\r
      \r
      // Ocultar overlay cuando se carga completamente la página\r
      window.addEventListener('load', hideOverlay);\r
      \r
      // Transición de salida interna\r
      function shouldIntercept(link) {\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false;\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
      \r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
\r
        e.preventDefault();\r
        overlay && overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,zg=()=>{nn(),rn();const e=an(Rg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Asesoría Contable",children:r.jsx("div",{className:"hero-headline",children:"Asesoría Contable"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Estrategias sucesorales"]}),r.jsx("div",{className:"labor-card-desc",children:"Testamentos y planificación de herencias."})]})}),r.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Fideicomisos y patrimonios autónomos"]}),r.jsx("div",{className:"labor-card-desc",children:"Estructuras para administrar bienes."})]})}),r.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Protocolos familiares"]}),r.jsx("div",{className:"labor-card-desc",children:"Reglas de gobierno y sucesión empresarial."})]})}),r.jsx("a",{href:"#fiscal",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Optimización fiscal del patrimonio"]}),r.jsx("div",{className:"labor-card-desc",children:"Reducción de cargas impositivas."})]})}),r.jsx("a",{href:"#portafolios",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Administración de portafolios"]}),r.jsx("div",{className:"labor-card-desc",children:"Gestión de inversiones y activos."})]})}),r.jsx("a",{href:"#activos",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Protección de activos"]}),r.jsx("div",{className:"labor-card-desc",children:"Blindaje frente a riesgos y contingencias."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en Asesoría Contable?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(O,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(O,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(O,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(O,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Estrategias sucesorales"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Fideicomisos y patrimonios autónomos"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Protocolos familiares"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Optimización fiscal del patrimonio"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Administración de portafolios"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Protección de activos"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Og=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Política de Privacidad | Koop Strategic Advisory</title>\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
    html, body {\r
      width: 100%;\r
      margin: 0;\r
      padding: 0;\r
      box-sizing: border-box;\r
      overflow-x: hidden;\r
      height: 100%;\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d;\r
      color: #fff;\r
    }\r
    *, *::before, *::after { box-sizing: inherit; }\r
\r
    .page-transition{\r
      position: fixed; inset: 0; background: #141b2d;\r
      z-index: 9998; opacity: 0; pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{ opacity:1; pointer-events:auto; }\r
\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
    .dropdown { position: relative; }\r
    .drop-btn { display: flex; align-items: center; }\r
    .drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
    .dropdown-content {\r
      display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
      background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
      border-radius: 8px; z-index: 100; gap: 32px;\r
    }\r
    @media (hover: hover) {\r
      .dropdown:hover .dropdown-content { display: flex; }\r
    }\r
    .dropdown-group { display: flex; flex-direction: column; }\r
    .dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
    .dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
    @media (max-width:700px){\r
      .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
      .dropdown.open .dropdown-content{display:flex;}\r
      .dropdown-content a{padding:6px 0;}\r
    }\r
    @media (max-width:700px){\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
    }\r
\r
    main { padding: 96px 20px 40px; max-width: 800px; margin: 0 auto; color: #23395d; }\r
    h1 { color: #23395d; }\r
    footer{\r
      position: relative;\r
      color:#e8f0ff;\r
      background: url('Img23_Atrio.jpg') center center/cover no-repeat;\r
      isolation: isolate;\r
    }\r
    footer::before{\r
      content:""; position:absolute; inset:0; background: rgba(33,56,99,0.86);\r
    }\r
    .footer-container{\r
      position: relative; z-index:1; max-width:1200px; margin:0 auto; padding:24px 20px;\r
      display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;\r
    }\r
    .footer-left{font-size:.9em;}\r
    .footer-right a{color:#e8f0ff; text-decoration:none;}\r
  </style>\r
</head>\r
<body>\r
  <div class="page-transition"></div>\r
  <nav class="navbar">\r
    <div class="navbar-content">\r
      <a href="index.html" class="logo">\r
        <img src="Koop Logo.png" alt="Logo Koop" class="logo-img" />\r
        <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
      </a>\r
      <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
      <div class="nav-menu" id="nav-menu">\r
        <a href="index.html#inicio">INICIO</a>\r
        <div class="dropdown">\r
          <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
          <div class="dropdown-content">\r
            <div class="dropdown-group">\r
              <span class="dropdown-title">Derecho</span>\r
              <a href="derecho-laboral.html">Derecho Laboral</a>\r
              <a href="derecho-penal.html">Derecho Penal</a>\r
              <a href="tramites-notariales.html">Trámites notariales</a>\r
              <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
              <a href="derecho-familia.html">Derecho de Familia</a>\r
              <a href="contratacion-publica.html">Contratación Pública</a>\r
              <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
              <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
              <a href="insolvencia.html">Insolvencia</a>\r
            </div>\r
            <div class="dropdown-group">\r
              <span class="dropdown-title">Contabilidad</span>\r
              <a href="contabilidad.html">Contabilidad</a>\r
              <a href="auditoria.html">Auditoría</a>\r
              <a href="impuestos.html">Impuestos</a>\r
              <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
            </div>\r
          </div>\r
        </div>\r
        <a href="index.html#vision">NUESTRA VISIÓN</a>\r
        <a href="index.html#contacto">CONTACTO</a>\r
      </div>\r
    </div>\r
  </nav>\r
  <main>\r
    <h1>Política de Privacidad</h1>\r
    <p>Esta página describe las políticas de privacidad de Koop Strategic Advisory. Su contenido se actualizará próximamente.</p>\r
  </main>\r
  <footer class="site-footer">\r
    <div class="footer-container">\r
      <div class="footer-left">© <span id="year"></span> Creado por Koop Strategic Advisory</div>\r
      <div class="footer-right"><a href="privacidad.html">Política de Privacidad</a></div>\r
    </div>\r
  </footer>\r
  <script>\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
      navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
    const y = document.getElementById('year');\r
    if (y) y.textContent = new Date().getFullYear();\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
      function hideOverlay() { if (overlay) { overlay.classList.remove('is-active'); } }\r
      hideOverlay();\r
      window.addEventListener('pageshow', (e) => { if (e.persisted) hideOverlay(); });\r
      window.addEventListener('focus', hideOverlay);\r
      window.addEventListener('load', hideOverlay);\r
      function shouldIntercept(link) {\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false;\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
        e.preventDefault();\r
        overlay && overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,Dg=()=>{nn(),rn();const e=an(Og).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition"}),r.jsxs("main",{children:[r.jsx("h1",{children:"Política de Privacidad"}),r.jsx("p",{children:"Esta página describe las políticas de privacidad de Koop Strategic Advisory. Su contenido se actualizará próximamente."})]}),r.jsx("footer",{className:"site-footer",children:r.jsxs("div",{className:"footer-container",children:[r.jsxs("div",{className:"footer-left",children:["© ",r.jsx("span",{id:"year"})," Creado por Koop Strategic Advisory"]}),r.jsx("div",{className:"footer-right",children:r.jsx("a",{href:"/privacidad",children:"Política de Privacidad"})})]})})]})},Lg=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Koop Strategic Advisory | Trámites Notariales</title>\r
  <!-- Fuentes -->\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">\r
  <noscript><style>.page-transition{display:none!important}</style></noscript>\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
\r
    html, body {\r
      margin: 0; padding: 0; box-sizing: border-box; overflow-x: hidden;\r
      width: 100%; height: 100%;\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d;\r
      color: #fff;\r
    }\r
    *, *::before, *::after { box-sizing: inherit; }\r
\r
    /* ===== Transición entre páginas ===== */\r
    .page-transition{\r
      position: fixed;\r
      inset: 0;\r
      background: #141b2d;\r
      z-index: 9998;\r
      opacity: 0;\r
      pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{\r
      opacity: 1;\r
      pointer-events: auto;\r
    }\r
\r
    /* ===== NAVBAR ===== */\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
.dropdown { position: relative; }\r
.drop-btn { display: flex; align-items: center; }\r
.drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
.dropdown-content {\r
  display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
  background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
  border-radius: 8px; z-index: 100; gap: 32px;\r
}\r
@media (hover: hover) {\r
  .dropdown:hover .dropdown-content { display: flex; }\r
}\r
.dropdown-group { display: flex; flex-direction: column; }\r
.dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
.dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
@media (max-width:700px){\r
  .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
  .dropdown.open .dropdown-content{display:flex;}\r
  .dropdown-content a{padding:6px 0;}\r
}\r
\r
\r
\r
\r
\r
\r
\r
\r
    @media (max-width: 700px) {\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
    }\r
\r
    /* ===== HERO ===== */\r
    .hero-section {\r
      height: clamp(280px, 44vh, 500px);\r
      min-height: 280px; width: 100%; position: relative; display: block;\r
      background: url('img/tramitesnotariales.png?v=20250810-2') center center/cover no-repeat;\r
      margin-top: var(--nav-h); overflow: hidden; z-index: 1;\r
    }\r
    /* Franja azul de ancho completo, centrada verticalmente */\r
    .hero-overlay {\r
      position: absolute; top: 50%; left: 0; width: 100%;\r
      height: 100px; background: rgba(35,57,93,0.92);\r
      transform: translateY(-50%); z-index: 1;\r
      border-top: 1px solid rgba(255,255,255,.06);\r
      border-bottom: 1px solid rgba(255,255,255,.06);\r
    }\r
    /* Texto centrado y por encima de la franja */\r
    .hero-text{\r
      position: absolute; inset: 0;\r
      z-index: 2; display: flex; align-items: center; justify-content: center;\r
      text-align: center; padding: 0 16px;\r
    }\r
    .hero-headline{\r
      font-family: 'Dancing Script', cursive;\r
      font-weight: 700; letter-spacing: .02em; line-height: 1.1;\r
      font-size: clamp(2rem, 6vw, 4rem);\r
      color: #ffffff; text-shadow: 0 3px 18px rgba(0,0,0,.35);\r
    }\r
    @media (max-width: 520px){\r
      .hero-headline{ font-size: clamp(1.8rem, 7vw, 2.6rem); }\r
      .hero-overlay{ height: 84px; }\r
    }\r
    @media (max-width: 900px) { .hero-section { height: clamp(260px, 48vh, 520px); } }\r
    @media (max-width: 540px) { .hero-section { height: clamp(220px, 44vh, 480px); } }\r
\r
    /* ===== SECCIÓN CARDS ===== */\r
    .labor-cards-section{\r
      width:100%;\r
      background: linear-gradient(90deg, var(--koop-azul-claro) 36%, #fff 36%);\r
      padding: 64px 20px 72px; box-sizing: border-box;\r
    }\r
    .labor-cards-container{\r
      max-width:1200px; margin:0 auto; text-align:center; color: var(--koop-azul);\r
    }\r
    .labor-tag{\r
      display:inline-block; background: var(--koop-acento); color:#1f2b3d;\r
      font-weight:700; letter-spacing:.06em; font-size:.85rem;\r
      padding:8px 14px; border-radius:6px; margin-bottom:18px;\r
    }\r
    .labor-title{\r
      font-size:2rem; font-weight:800; margin:6px 0 8px; color: var(--koop-azul);\r
      letter-spacing:.01em; text-transform:uppercase;\r
    }\r
    .labor-sub{\r
      font-size:1.1rem; color:#4877b1; max-width:800px; margin:0 auto 32px;\r
    }\r
    .labor-grid{\r
      display:grid; gap:22px; grid-template-columns: repeat(4, 1fr); margin-top:18px;\r
    }\r
    .labor-card{\r
      position:relative; border-radius:14px; overflow:hidden;\r
      min-height: 300px; background:#ccc; display:block; text-decoration:none;\r
    }\r
    .labor-card::before{\r
      content:""; position:absolute; inset:0;\r
      background: var(--bg, url('Imagen gigante centro int.JPG')) center/cover no-repeat;\r
    }\r
    .labor-card::after{ content:""; position:absolute; inset:0; background:rgba(35,57,93,.55); }\r
    .labor-card-content{\r
      position:relative; z-index:2; color:#fff; text-align:left;\r
      padding: 18px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;\r
    }\r
    .labor-badge{\r
      align-self:flex-start; background: rgba(17,34,66,.85);\r
      padding:6px 12px; border-radius:999px; font-weight:700; font-size:.8rem; letter-spacing:.06em; margin-bottom:10px;\r
    }\r
    .labor-card-title{\r
      font-size:1.35rem; font-weight:800; line-height:1.2; margin:2px 0 6px;\r
      text-shadow:0 3px 18px rgba(0,0,0,.35);\r
    }\r
    .labor-card-desc{ font-size:.95rem; color:#d9e9ff; line-height:1.35; }\r
    .labor-dot{ width:10px; height:10px; border-radius:3px; background:var(--koop-bullet); display:inline-block; margin-right:8px; transform: translateY(-1px); }\r
\r
    @media (max-width: 1100px){ .labor-grid{ grid-template-columns: repeat(3, 1fr); } }\r
    @media (max-width: 820px){ .labor-grid{ grid-template-columns: repeat(2, 1fr); } .labor-title{ font-size:1.7rem; } }\r
    @media (max-width: 520px){ .labor-grid{ grid-template-columns: 1fr; } .labor-cards-section{ padding: 44px 12px 52px; } .labor-sub{ font-size:1rem; } }\r
\r
    /* ===== FOOTER ===== */\r
    footer{\r
      position: relative;\r
      color:#e8f0ff;\r
      background: url('Img23_Atrio.jpg') center center/cover no-repeat;\r
      isolation: isolate;\r
    }\r
    footer::before{\r
      content:""; position:absolute; inset:0;\r
      background: rgba(33,56,99,0.86);\r
      z-index:0;\r
    }\r
\r
    .footer-top{\r
      max-width:1200px; margin:0 auto; padding:56px 20px 28px; display:grid;\r
      grid-template-columns: 1.2fr 1fr 1fr 1fr; gap:28px; position: relative; z-index:1;\r
    }\r
    .footer-brand{ display:flex; flex-direction:column; gap:14px; }\r
    .footer-logo{ display:flex; align-items:center; gap:10px; }\r
    .footer-logo .brand-text{ font-weight:800; letter-spacing:.04em; color:#fff; font-size:1.05rem; }\r
    .footer-copy{ font-size:.92rem; color:#cfe0ff; line-height:1.5; }\r
\r
    .footer-cta{\r
      background: rgba(238,150,38,.1);\r
      border:1px solid rgba(238,150,38,.35);\r
      padding:14px; border-radius:12px;\r
    }\r
    .footer-cta h4{ margin:0 0 8px; font-size:1.05rem; color:#fff; }\r
    .btns{ display:flex; gap:10px; flex-wrap:wrap; }\r
    .btn{\r
      display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-weight:700;\r
      padding:10px 14px; border-radius:10px; border:1px solid transparent; transition:.2s;\r
      font-size:.95rem;\r
    }\r
    .btn-whatsapp{ background: var(--koop-acento); color:#1d283a; }\r
    .btn-whatsapp:hover{ transform: translateY(-1px); filter: brightness(1.05); }\r
    .btn-mail{ background: transparent; color:#e8f0ff; border-color:#2f497c; }\r
    .btn-mail:hover{ background:#1b2a4e; }\r
\r
    .footer-col h5{ margin:0 0 10px; font-size:1.02rem; color:#fff; letter-spacing:.04em; }\r
    .footer-list{ list-style:none; padding:0; margin:0; display:grid; gap:8px; }\r
    .footer-list a{ color:#cfe0ff; text-decoration:none; font-size:.95rem; display:inline-block; padding:4px 0; }\r
    .footer-list a:hover{ color:var(--koop-acento); }\r
\r
    .footer-contact{ font-size:.95rem; color:#cfe0ff; display:grid; gap:8px; }\r
    .footer-contact .item{ display:flex; gap:10px; align-items:flex-start; }\r
\r
    .icon{ width:22px; height:22px; display:inline-block; vertical-align:middle; }\r
\r
    .footer-social{ display:flex; gap:16px; margin-top:8px; }\r
    .footer-social a{ color: var(--koop-acento); display:inline-flex; }\r
    .footer-social .icon{ width:40px; height:40px; }\r
\r
    .mini-footer{\r
      border-top:1px solid #20345d; margin-top:24px;\r
      padding:14px 20px 22px; color:#a8b9d8; font-size:.88rem; position: relative; z-index:1;\r
      background: linear-gradient(180deg, rgba(21,34,65,.55), rgba(21,34,65,.65));\r
    }\r
    .mini-footer .wrap{\r
      max-width:1200px; margin:0 auto; display:flex; gap:16px; justify-content:space-between; align-items:center; flex-wrap:wrap;\r
    }\r
    .mini-links{ display:flex; gap:16px; flex-wrap:wrap; }\r
    .mini-links a{ color:#a8b9d8; text-decoration:none; }\r
    .mini-links a:hover{ color:#fff; }\r
\r
    .footer-divider{\r
      position:absolute; top:-18px; left:0; width:100%; height:18px;\r
      background: linear-gradient(90deg, var(--koop-acento) 0 40%, transparent 40% 100%);\r
      opacity:.75; z-index:1;\r
    }\r
\r
    @media (max-width: 980px){ .footer-top{ grid-template-columns: 1fr 1fr; } }\r
    @media (max-width: 560px){ .footer-top{ grid-template-columns: 1fr; padding:44px 14px 20px; } }\r
\r
    /* ======================================================\r
       FIX HERO EN MÓVILES (imagen completa, sin recortes)\r
       ====================================================== */\r
@media (max-width: 540px){\r
  .hero-section{\r
    height: 75vh;         /* altura generosa en móvil */\r
    min-height: 420px;    /* salvaguarda en pantallas bajas */\r
\r
    background-image: url('img/tramitesnotariales.png?v=20250810-2');\r
    background-position: center;  /* centrada para que el recorte sea equilibrado */\r
    background-size: cover;       /* se expande y llena el área, sin bandas */\r
    background-repeat: no-repeat;\r
    background-color: #141b2d;    /* color de fondo por si hay retardo al cargar */\r
  }\r
\r
  .hero-overlay{ height: 84px; }\r
  .hero-headline{ font-size: clamp(1.9rem, 7.2vw, 2.6rem); }\r
}\r
  </style>\r
</head>\r
<body>\r
\r
  <!-- Overlay de transición -->\r
  <div class="page-transition" aria-hidden="true"></div>\r
\r
  <!-- NAV -->\r
  <nav class="navbar">\r
    <div class="navbar-content">\r
      <a href="index.html" class="logo">\r
        <img src="Koop Logo.png" alt="Logo Koop" class="logo-img">\r
        <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
      </a>\r
      <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
      <div class="nav-menu" id="nav-menu">\r
          <a href="index.html#inicio">INICIO</a>\r
          <div class="dropdown">\r
            <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
            <div class="dropdown-content">\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Derecho</span>\r
                <a href="derecho-laboral.html">Derecho Laboral</a>\r
                <a href="derecho-penal.html">Derecho Penal</a>\r
                <a href="tramites-notariales.html">Trámites notariales</a>\r
                <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
                <a href="derecho-familia.html">Derecho de Familia</a>\r
                <a href="contratacion-publica.html">Contratación Pública</a>\r
                <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
                <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
                <a href="insolvencia.html">Insolvencia</a>\r
              </div>\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Contabilidad</span>\r
                <a href="contabilidad.html">Contabilidad</a>\r
                <a href="auditoria.html">Auditoría</a>\r
                <a href="impuestos.html">Impuestos</a>\r
                <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
              </div>\r
            </div>\r
          </div>\r
          <a href="index.html#vision">NUESTRA VISIÓN</a>\r
          <a href="index.html#contacto">CONTACTO</a>\r
        </div>\r
    </div>\r
  </nav>\r
\r
  <!-- HERO -->\r
  <section class="hero-section" id="inicio">\r
    <div class="hero-overlay" aria-hidden="true"></div>\r
    <div class="hero-text" aria-label="Trámites Notariales">\r
      <div class="hero-headline">Trámites Notariales</div>\r
    </div>\r
  </section>\r
\r
  <!-- SECCIÓN CARDS -->\r
  <section class="labor-cards-section" id="servicios penales">\r
    <div class="labor-cards-container">\r
      <div class="labor-tag">SERVICIOS FRENTE A NOTARIA</div>\r
      <h2 class="labor-title">Su trámite notarial exprés.</h2>\r
      <p class="labor-sub">Listo en tiempo récord, con total seguridad jurídica.</p>\r
\r
      <div class="labor-grid">\r
        <!-- 1. Compraventa de inmuebles. -->\r
        <a href="#compraventa" class="labor-card" style="--bg:url('img/compraventainmueble.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Compraventa de inmuebles.</div>\r
            <div class="labor-card-desc">Con revisión de títulos y elaboración de minuta.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 2. Constitución, reforma o liquidación de sociedades -->\r
        <a href="#constitucion" class="labor-card" style="--bg:url('img/constitucion.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Constitución, reforma o liquidación de sociedades</div>\r
            <div class="labor-card-desc">(S.A.S., LTDA., S.A., etc.).</div>\r
          </div>\r
        </a>\r
\r
        <!-- 3. Sucesiones por causa de muerte -->\r
        <a href="sucesiones" class="labor-card" style="--bg:url('img/sucesionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Sucesiones por causa de muerte</div>\r
            <div class="labor-card-desc">Realización de escrito de solicitud hasta elevación a escritura pública.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 4. Capitulaciones matrimoniales y liquidación de sociedad conyugal. -->\r
        <a href="#capitulaciones" class="labor-card" style="--bg:url('img/capitulaciones.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Capitulaciones matrimoniales y liquidación de sociedad conyugal.</div>\r
            <div class="labor-card-desc">Proteja su patrimonio y formalice acuerdos con respaldo legal.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 5. Levantamiento de hipotecas -->\r
        <a href="#levantamiento" class="labor-card" style="--bg:url('img/levantamiento.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Levantamiento de hipotecas</div>\r
            <div class="labor-card-desc">Trámite de levantamiento exprés y sin dilaciones.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 6. Donaciones de bienes inmuebles -->\r
        <a href="#donaciones" class="labor-card" style="--bg:url('img/donacionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Donaciones de bienes inmuebles</div>\r
            <div class="labor-card-desc">Transfiera su patrimonio con seguridad jurídica y sin contratiempos.</div>\r
          </div>\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ===== FOOTER ===== -->\r
  <footer>\r
    <div class="footer-divider" aria-hidden="true"></div>\r
\r
    <div class="footer-top">\r
      <!-- Columna Marca + CTA -->\r
      <div class="footer-brand">\r
        <div class="footer-logo">\r
          <div class="brand-text">KOOP STRATEGIC ADVISORY</div>\r
        </div>\r
        <p class="footer-copy">\r
          Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral.\r
        </p>\r
        <div class="footer-cta">\r
          <h4>¿Necesitas una asesoría laboral hoy?</h4>\r
          <div class="btns">\r
            <a class="btn btn-whatsapp" href="https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20conocer%20los%20costos%20del%20siguiente%20proceso%20notarial:" target="_blank" rel="noopener">\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"/>\r
              </svg>\r
              WhatsApp\r
            </a>\r
            <a class="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop">\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
              Escríbenos\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="footer-col">\r
        <h5>Enlaces rápidos</h5>\r
        <ul class="footer-list">\r
          <li><a href="index.html#inicio">Inicio</a></li>\r
          <li><a href="index.html#areas">Áreas de práctica</a></li>\r
          <li><a href="index.html#vision">Nuestra visión</a></li>\r
          <li><a href="index.html#contacto">Contacto</a></li>\r
        </ul>\r
      </div>\r
\r
      <div class="footer-col">\r
        <h5>Servicios laborales</h5>\r
        <ul class="footer-list">\r
          <li><a href="#compraventa">Compraventa de inmuebles</a></li>\r
          <li><a href="#constitucion">Constitución, reforma o liquidación de sociedades</a></li>\r
          <li><a href="#sucesiones">Sucesiones por causa de muerte</a></li>\r
          <li><a href="#capitulaciones">Capitulaciones matrimoniales y liquidación de sociedad conyugal</a></li>\r
          <li><a href="#levantamiento">Levantamiento de hipotecas</a></li>\r
          <li><a href="#donaciones">Donaciones de bienes inmuebles</a></li>\r
        </ul>\r
      </div>\r
\r
      <div class="footer-col">\r
        <h5>Contacto</h5>\r
        <div class="footer-contact">\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>\r
            <span>Bogotá D.C., Colombia</span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="tel:+573137213878">+57 (313) 721 38 78</a></span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="mailto:direccionjuridicakoop@hotmail.com">direccionjuridicakoop@hotmail.com</a></span>\r
          </div>\r
        </div>\r
\r
        <div class="footer-social" aria-label="Redes sociales">\r
          <a aria-label="Instagram" href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" rel="noopener" title="Instagram">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>\r
            </svg>\r
          </a>\r
          <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>\r
            </svg>\r
          </a>\r
          <a aria-label="TikTok" href="https://www.tiktok.com/@koopstrategicadvisory" target="_blank" rel="noopener" title="TikTok">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"/>\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mini-footer">\r
      <div class="wrap">\r
        <div>© <span id="year"></span> Koop Strategic Advisory. Todos los derechos reservados.</div>\r
        <div class="mini-links">\r
          <a href="politica-privacidad.html">Política de privacidad</a>\r
          <a href="terminos.html">Términos y condiciones</a>\r
          <a href="#inicio">Volver arriba ↑</a>\r
        </div>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <script>\r
    // Menú móvil\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
            navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
\r
    // Año dinámico\r
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();\r
\r
    // Manejo de transiciones\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
      \r
      // Asegurar que el overlay esté oculto al cargar la página\r
      function hideOverlay() {\r
        if (overlay) {\r
          overlay.classList.remove('is-active');\r
        }\r
      }\r
      \r
      // Ocultar overlay inmediatamente al cargar\r
      hideOverlay();\r
      \r
      // Ocultar overlay cuando se restaura desde BFCache\r
      window.addEventListener('pageshow', (e) => {\r
        if (e.persisted) {\r
          hideOverlay();\r
        }\r
      });\r
      \r
      // Ocultar overlay cuando se hace focus en la ventana\r
      window.addEventListener('focus', hideOverlay);\r
      \r
      // Ocultar overlay cuando se carga completamente la página\r
      window.addEventListener('load', hideOverlay);\r
      \r
      // Transición de salida interna\r
      function shouldIntercept(link) {\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false;\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
      \r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
\r
        e.preventDefault();\r
        overlay && overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,Pg=()=>{nn(),rn();const e=an(Lg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Trámites Notariales",children:r.jsx("div",{className:"hero-headline",children:"Trámites Notariales"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS FRENTE A NOTARIA"}),r.jsx("h2",{className:"labor-title",children:"Su trámite notarial exprés."}),r.jsx("p",{className:"labor-sub",children:"Listo en tiempo récord, con total seguridad jurídica."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#compraventa",className:"labor-card",style:{"--bg":"url('img/compraventainmueble.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Compraventa de inmuebles."]}),r.jsx("div",{className:"labor-card-desc",children:"Con revisión de títulos y elaboración de minuta."})]})}),r.jsx("a",{href:"#constitucion",className:"labor-card",style:{"--bg":"url('img/constitucion.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Constitución, reforma o liquidación de sociedades"]}),r.jsx("div",{className:"labor-card-desc",children:"(S.A.S., LTDA., S.A., etc.)."})]})}),r.jsx("a",{href:"sucesiones",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Sucesiones por causa de muerte"]}),r.jsx("div",{className:"labor-card-desc",children:"Realización de escrito de solicitud hasta elevación a escritura pública."})]})}),r.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales y liquidación de sociedad conyugal."]}),r.jsx("div",{className:"labor-card-desc",children:"Proteja su patrimonio y formalice acuerdos con respaldo legal."})]})}),r.jsx("a",{href:"#levantamiento",className:"labor-card",style:{"--bg":"url('img/levantamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Levantamiento de hipotecas"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámite de levantamiento exprés y sin dilaciones."})]})}),r.jsx("a",{href:"#donaciones",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Donaciones de bienes inmuebles"]}),r.jsx("div",{className:"labor-card-desc",children:"Transfiera su patrimonio con seguridad jurídica y sin contratiempos."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20conocer%20los%20costos%20del%20siguiente%20proceso%20notarial:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(O,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(O,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(O,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(O,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios laborales"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#compraventa",children:"Compraventa de inmuebles"})}),r.jsx("li",{children:r.jsx("a",{href:"#constitucion",children:"Constitución, reforma o liquidación de sociedades"})}),r.jsx("li",{children:r.jsx("a",{href:"#sucesiones",children:"Sucesiones por causa de muerte"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales y liquidación de sociedad conyugal"})}),r.jsx("li",{children:r.jsx("a",{href:"#levantamiento",children:"Levantamiento de hipotecas"})}),r.jsx("li",{children:r.jsx("a",{href:"#donaciones",children:"Donaciones de bienes inmuebles"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},_g=`<!DOCTYPE html>\r
<html lang="es">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1" />\r
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\r
  <meta http-equiv="Pragma" content="no-cache" />\r
  <meta http-equiv="Expires" content="0" />\r
  <title>Koop Strategic Advisory | Acciones de Tutela</title>\r
  <!-- Fuentes -->\r
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">\r
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">\r
  <noscript><style>.page-transition{display:none!important}</style></noscript>\r
  <style>\r
    :root{\r
      --nav-h: 64px;\r
      --koop-azul:#23395d;\r
      --koop-azul-claro:#e9f0fa;\r
      --koop-acento:#ee9626;\r
      --koop-bullet:#2998ff;\r
      --gris-100:#f5f7fb;\r
      --gris-300:#c9d3e6;\r
      --gris-500:#8fa1bf;\r
      --negro:#0e1320;\r
    }\r
\r
    html, body {\r
      margin: 0; padding: 0; box-sizing: border-box; overflow-x: hidden;\r
      width: 100%; height: 100%;\r
      font-family: 'Montserrat', Arial, sans-serif;\r
      background: #141b2d;\r
      color: #fff;\r
    }\r
    *, *::before, *::after { box-sizing: inherit; }\r
\r
    /* ===== Transición entre páginas ===== */\r
    .page-transition{\r
      position: fixed;\r
      inset: 0;\r
      background: #141b2d;\r
      z-index: 9998;\r
      opacity: 0;\r
      pointer-events: none;\r
      transition: opacity .6s ease;\r
    }\r
    .page-transition.is-active{\r
      opacity: 1;\r
      pointer-events: auto;\r
    }\r
\r
    /* ===== NAVBAR ===== */\r
    .navbar {\r
      width: 100%;\r
      display: flex; align-items: center; justify-content: center;\r
      padding: 0 40px; background: #fff;\r
      position: fixed; top: 0; left: 0;\r
      z-index: 100; box-shadow: 0 2px 8px #0001; height: var(--nav-h);\r
    }\r
    .navbar-content {\r
      width: 100%; max-width: 1200px;\r
      display: flex; align-items: center; justify-content: space-between; position: relative;\r
    }\r
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\r
    .logo-img { width: 100px; height: 100px; object-fit: contain; }\r
    .logo-text { font-weight: 700; color: #23395d; font-size: 1.23em; letter-spacing: 0.05em; }\r
    .menu-toggle {\r
      display: none; flex-direction: column; justify-content: center;\r
      cursor: pointer; width: 36px; height: 36px; margin-left: 12px; z-index: 20;\r
    }\r
    .menu-toggle span { height: 4px; background: #23395d; margin: 5px 0; border-radius: 2px; transition: .4s; display: block; }\r
    .nav-menu { display: flex; gap: 36px; align-items: center; justify-content: center; }\r
    .nav-menu a { color: #23395d; text-decoration: none; font-weight: 500; font-size: 1em; letter-spacing: .02em; transition: color .2s; }\r
    .nav-menu a:hover { color: var(--koop-acento); }\r
\r
.dropdown { position: relative; }\r
.drop-btn { display: flex; align-items: center; }\r
.drop-btn::after { content: "\\25BE"; margin-left: 4px; font-size: .8em; }\r
.dropdown-content {\r
  display: none; position: absolute; top: calc(100% + 10px); left: 0;\r
  background: #fff; padding: 16px 24px; box-shadow: 0 4px 18px #0002;\r
  border-radius: 8px; z-index: 100; gap: 32px;\r
}\r
@media (hover: hover) {\r
  .dropdown:hover .dropdown-content { display: flex; }\r
}\r
.dropdown-group { display: flex; flex-direction: column; }\r
.dropdown-title { font-weight:700; color:#23395d; margin-bottom:8px; }\r
.dropdown-content a { color:#23395d; text-decoration:none; margin:4px 0; }\r
@media (max-width:700px){\r
  .dropdown-content{position:static; box-shadow:none; padding:0; gap:0; display:none; flex-direction:column;}\r
  .dropdown.open .dropdown-content{display:flex;}\r
  .dropdown-content a{padding:6px 0;}\r
}\r
\r
\r
\r
\r
\r
\r
\r
\r
    @media (max-width: 700px) {\r
      .navbar { height: var(--nav-h); padding: 0 10px; }\r
      .logo-img { width: 56px; height: 56px; }\r
      .logo-text { font-size: .95em; }\r
      .menu-toggle { display: flex; }\r
      .nav-menu {\r
        display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff;\r
        flex-direction: column; align-items: center; gap: 18px; padding: 24px 0 18px; z-index: 99; box-shadow: 0 6px 24px #0002;\r
      }\r
      .nav-menu.open { display: flex; animation: fadeIn .25s; }\r
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-12px);} to { opacity: 1; transform: translateY(0);} }\r
    }\r
\r
    /* ===== HERO ===== */\r
    .hero-section {\r
      height: clamp(280px, 44vh, 500px);\r
      min-height: 280px; width: 100%; position: relative; display: block;\r
      background: url('img/acciones-de-tutela.svg') center center/cover no-repeat;\r
      margin-top: var(--nav-h); overflow: hidden; z-index: 1;\r
    }\r
    /* Franja azul de ancho completo, centrada verticalmente */\r
    .hero-overlay {\r
      position: absolute; top: 50%; left: 0; width: 100%;\r
      height: 100px; background: rgba(35,57,93,0.92);\r
      transform: translateY(-50%); z-index: 1;\r
      border-top: 1px solid rgba(255,255,255,.06);\r
      border-bottom: 1px solid rgba(255,255,255,.06);\r
    }\r
    /* Texto centrado y por encima de la franja */\r
    .hero-text{\r
      position: absolute; inset: 0;\r
      z-index: 2; display: flex; align-items: center; justify-content: center;\r
      text-align: center; padding: 0 16px;\r
    }\r
    .hero-headline{\r
      font-family: 'Dancing Script', cursive;\r
      font-weight: 700; letter-spacing: .02em; line-height: 1.1;\r
      font-size: clamp(2rem, 6vw, 4rem);\r
      color: #ffffff; text-shadow: 0 3px 18px rgba(0,0,0,.35);\r
    }\r
    @media (max-width: 520px){\r
      .hero-headline{ font-size: clamp(1.8rem, 7vw, 2.6rem); }\r
      .hero-overlay{ height: 84px; }\r
    }\r
    @media (max-width: 900px) { .hero-section { height: clamp(260px, 48vh, 520px); } }\r
    @media (max-width: 540px) { .hero-section { height: clamp(220px, 44vh, 480px); } }\r
\r
    /* ===== SECCIÓN CARDS ===== */\r
    .labor-cards-section{\r
      width:100%;\r
      background: linear-gradient(90deg, var(--koop-azul-claro) 36%, #fff 36%);\r
      padding: 64px 20px 72px; box-sizing: border-box;\r
    }\r
    .labor-cards-container{\r
      max-width:1200px; margin:0 auto; text-align:center; color: var(--koop-azul);\r
    }\r
    .labor-tag{\r
      display:inline-block; background: var(--koop-acento); color:#1f2b3d;\r
      font-weight:700; letter-spacing:.06em; font-size:.85rem;\r
      padding:8px 14px; border-radius:6px; margin-bottom:18px;\r
    }\r
    .labor-title{\r
      font-size:2rem; font-weight:800; margin:6px 0 8px; color: var(--koop-azul);\r
      letter-spacing:.01em; text-transform:uppercase;\r
    }\r
    .labor-sub{\r
      font-size:1.1rem; color:#4877b1; max-width:800px; margin:0 auto 32px;\r
    }\r
    .labor-grid{\r
      display:grid; gap:22px; grid-template-columns: repeat(4, 1fr); margin-top:18px;\r
    }\r
    .labor-card{\r
      position:relative; border-radius:14px; overflow:hidden;\r
      min-height: 300px; background:#ccc; display:block; text-decoration:none;\r
    }\r
    .labor-card::before{\r
      content:""; position:absolute; inset:0;\r
      background: var(--bg, url('Imagen gigante centro int.JPG')) center/cover no-repeat;\r
    }\r
    .labor-card::after{ content:""; position:absolute; inset:0; background:rgba(35,57,93,.55); }\r
    .labor-card-content{\r
      position:relative; z-index:2; color:#fff; text-align:left;\r
      padding: 18px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;\r
    }\r
    .labor-badge{\r
      align-self:flex-start; background: rgba(17,34,66,.85);\r
      padding:6px 12px; border-radius:999px; font-weight:700; font-size:.8rem; letter-spacing:.06em; margin-bottom:10px;\r
    }\r
    .labor-card-title{\r
      font-size:1.35rem; font-weight:800; line-height:1.2; margin:2px 0 6px;\r
      text-shadow:0 3px 18px rgba(0,0,0,.35);\r
    }\r
    .labor-card-desc{ font-size:.95rem; color:#d9e9ff; line-height:1.35; }\r
    .labor-dot{ width:10px; height:10px; border-radius:3px; background:var(--koop-bullet); display:inline-block; margin-right:8px; transform: translateY(-1px); }\r
\r
    @media (max-width: 1100px){ .labor-grid{ grid-template-columns: repeat(3, 1fr); } }\r
    @media (max-width: 820px){ .labor-grid{ grid-template-columns: repeat(2, 1fr); } .labor-title{ font-size:1.7rem; } }\r
    @media (max-width: 520px){ .labor-grid{ grid-template-columns: 1fr; } .labor-cards-section{ padding: 44px 12px 52px; } .labor-sub{ font-size:1rem; } }\r
\r
    /* ===== FOOTER ===== */\r
    footer{\r
      position: relative;\r
      color:#e8f0ff;\r
      background: url('Img23_Atrio.jpg') center center/cover no-repeat;\r
      isolation: isolate;\r
    }\r
    footer::before{\r
      content:""; position:absolute; inset:0;\r
      background: rgba(33,56,99,0.86);\r
      z-index:0;\r
    }\r
\r
    .footer-top{\r
      max-width:1200px; margin:0 auto; padding:56px 20px 28px; display:grid;\r
      grid-template-columns: 1.2fr 1fr 1fr 1fr; gap:28px; position: relative; z-index:1;\r
    }\r
    .footer-brand{ display:flex; flex-direction:column; gap:14px; }\r
    /* Logo gráfico eliminado; solo texto de marca */\r
    .footer-logo{ display:flex; align-items:center; gap:10px; }\r
    .footer-logo .brand-text{ font-weight:800; letter-spacing:.04em; color:#fff; font-size:1.05rem; }\r
    .footer-copy{ font-size:.92rem; color:#cfe0ff; line-height:1.5; }\r
\r
    .footer-cta{\r
      background: rgba(238,150,38,.1);\r
      border:1px solid rgba(238,150,38,.35);\r
      padding:14px; border-radius:12px;\r
    }\r
    .footer-cta h4{ margin:0 0 8px; font-size:1.05rem; color:#fff; }\r
    .btns{ display:flex; gap:10px; flex-wrap:wrap; }\r
    .btn{\r
      display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-weight:700;\r
      padding:10px 14px; border-radius:10px; border:1px solid transparent; transition:.2s;\r
      font-size:.95rem;\r
    }\r
    .btn-whatsapp{ background: var(--koop-acento); color:#1d283a; }\r
    .btn-whatsapp:hover{ transform: translateY(-1px); filter: brightness(1.05); }\r
    .btn-mail{ background: transparent; color:#e8f0ff; border-color:#2f497c; }\r
    .btn-mail:hover{ background:#1b2a4e; }\r
\r
    .footer-col h5{ margin:0 0 10px; font-size:1.02rem; color:#fff; letter-spacing:.04em; }\r
    .footer-list{ list-style:none; padding:0; margin:0; display:grid; gap:8px; }\r
    .footer-list a{ color:#cfe0ff; text-decoration:none; font-size:.95rem; display:inline-block; padding:4px 0; }\r
    .footer-list a:hover{ color:var(--koop-acento); }\r
\r
    .footer-contact{ font-size:.95rem; color:#cfe0ff; display:grid; gap:8px; }\r
    .footer-contact .item{ display:flex; gap:10px; align-items:flex-start; }\r
\r
    /* Tamaño base de TODOS los íconos (contacto, botones, etc.) */\r
    .icon{ width:22px; height:22px; display:inline-block; vertical-align:middle; }\r
\r
    /* Redes sociales: solo un poco más grandes (24px) y en naranja corporativo */\r
    .footer-social{ display:flex; gap:16px; margin-top:8px; }\r
    .footer-social a{ color: var(--koop-acento); display:inline-flex; }\r
    .footer-social .icon{ width:40px; height:40px; }\r
\r
    .mini-footer{\r
      border-top:1px solid #20345d; margin-top:24px;\r
      padding:14px 20px 22px; color:#a8b9d8; font-size:.88rem; position: relative; z-index:1;\r
      background: linear-gradient(180deg, rgba(21,34,65,.55), rgba(21,34,65,.65));\r
    }\r
    .mini-footer .wrap{\r
      max-width:1200px; margin:0 auto; display:flex; gap:16px; justify-content:space-between; align-items:center; flex-wrap:wrap;\r
    }\r
    .mini-links{ display:flex; gap:16px; flex-wrap:wrap; }\r
    .mini-links a{ color:#a8b9d8; text-decoration:none; }\r
    .mini-links a:hover{ color:#fff; }\r
\r
    .footer-divider{\r
      position:absolute; top:-18px; left:0; width:100%; height:18px;\r
      background: linear-gradient(90deg, var(--koop-acento) 0 40%, transparent 40% 100%);\r
      opacity:.75; z-index:1;\r
    }\r
\r
    @media (max-width: 980px){ .footer-top{ grid-template-columns: 1fr 1fr; } }\r
    @media (max-width: 560px){ .footer-top{ grid-template-columns: 1fr; padding:44px 14px 20px; } }\r
  </style>\r
</head>\r
<body>\r
\r
  <!-- Overlay de transición -->\r
  <div class="page-transition" aria-hidden="true"></div>\r
\r
  <!-- NAV -->\r
  <nav class="navbar">\r
    <div class="navbar-content">\r
      <a href="index.html" class="logo">\r
        <img src="Koop Logo.png" alt="Logo Koop" class="logo-img">\r
        <div class="logo-text">KOOP STRATEGIC ADVISORY</div>\r
      </a>\r
      <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>\r
      <div class="nav-menu" id="nav-menu">\r
          <a href="index.html#inicio">INICIO</a>\r
          <div class="dropdown">\r
            <a href="index.html#areas" class="drop-btn" id="areas-toggle">ÁREAS DE PRÁCTICA</a>\r
            <div class="dropdown-content">\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Derecho</span>\r
                <a href="derecho-laboral.html">Derecho Laboral</a>\r
                <a href="derecho-penal.html">Derecho Penal</a>\r
                <a href="tramites-notariales.html">Trámites notariales</a>\r
                <a href="derecho-administrativo.html">Derecho Administrativo</a>\r
                <a href="derecho-familia.html">Derecho de Familia</a>\r
                <a href="contratacion-publica.html">Contratación Pública</a>\r
                <a href="resolucion-disputas.html">Resolución de Disputas</a>\r
                <a href="acciones-de-tutela.html">Acciones de Tutela</a>\r
                <a href="insolvencia.html">Insolvencia</a>\r
              </div>\r
              <div class="dropdown-group">\r
                <span class="dropdown-title">Contabilidad</span>\r
                <a href="contabilidad.html">Contabilidad</a>\r
                <a href="auditoria.html">Auditoría</a>\r
                <a href="impuestos.html">Impuestos</a>\r
                <a href="planeacion-patrimonial.html">Planeación Patrimonial</a>\r
              </div>\r
            </div>\r
          </div>\r
          <a href="index.html#vision">NUESTRA VISIÓN</a>\r
          <a href="index.html#contacto">CONTACTO</a>\r
        </div>\r
    </div>\r
  </nav>\r
\r
  <!-- HERO -->\r
  <section class="hero-section" id="inicio">\r
    <div class="hero-overlay" aria-hidden="true"></div>\r
    <div class="hero-text" aria-label="Acciones de Tutela">\r
      <div class="hero-headline">Acciones de Tutela</div>\r
    </div>\r
  </section>\r
\r
  <!-- SECCIÓN CARDS -->\r
  <section class="labor-cards-section" id="servicios-acciones-de-tutela">\r
    <div class="labor-cards-container">\r
      <div class="labor-tag">SERVICIOS EN ACCIONES DE TUTELA</div>\r
      <h2 class="labor-title">Cómo te ayudamos</h2>\r
      <p class="labor-sub">Representación y asesoría en la interposición y seguimiento de acciones de tutela.</p>\r
\r
      <div class="labor-grid">\r
        <!-- 1. Redacción de acciones de tutela -->\r
        <a href="#diagnostico" class="labor-card" style="--bg:url('img/Acompañamiento.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Redacción de acciones de tutela</div>\r
            <div class="labor-card-desc">Análisis del caso y elaboración del escrito.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 2. Presentación y seguimiento -->\r
        <a href="#forense" class="labor-card" style="--bg:url('img/Victimas.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Presentación y seguimiento</div>\r
            <div class="labor-card-desc">Radicación de la tutela y monitoreo del proceso.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 3. Impugnación de fallos -->\r
        <a href="#controles" class="labor-card" style="--bg:url('img/donacionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Impugnación de fallos</div>\r
            <div class="labor-card-desc">Elaboración de recursos contra decisiones desfavorables.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 4. Cumplimiento de sentencias -->\r
        <a href="#canal" class="labor-card" style="--bg:url('img/sucesionescambio.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Cumplimiento de sentencias</div>\r
            <div class="labor-card-desc">Gestión ante entidades para hacer efectivo el fallo.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 5. Asesoría preventiva -->\r
        <a href="#capacitacion" class="labor-card" style="--bg:url('img/Audiencias.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Asesoría preventiva</div>\r
            <div class="labor-card-desc">Orientación sobre procedencia y requisitos de la tutela.</div>\r
          </div>\r
        </a>\r
\r
        <!-- 6. Capacitación en derechos fundamentales -->\r
        <a href="#litigios" class="labor-card" style="--bg:url('img/capitulaciones.png')">\r
          <div class="labor-card-content">\r
            <span class="labor-badge">SERVICIO</span>\r
            <div class="labor-card-title"><span class="labor-dot"></span>Capacitación en derechos fundamentales</div>\r
            <div class="labor-card-desc">Talleres y charlas para empresas y ciudadanos.</div>\r
          </div>\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ===== FOOTER ===== -->\r
  <footer>\r
    <div class="footer-divider" aria-hidden="true"></div>\r
\r
    <div class="footer-top">\r
      <!-- Columna Marca + CTA -->\r
      <div class="footer-brand">\r
        <div class="footer-logo">\r
          <!-- Logo gráfico eliminado; solo texto -->\r
          <div class="brand-text">KOOP STRATEGIC ADVISORY</div>\r
        </div>\r
        <p class="footer-copy">\r
          Estudio jurídico & contable. Gestión integral de acciones de tutela.\r
        </p>\r
        <div class="footer-cta">\r
          <h4>¿Necesitas una asesoría en acciones de tutela?</h4>\r
          <div class="btns">\r
            <a class="btn btn-whatsapp" href="https://wa.me/573503965755?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20acciones%20de%20tutela%20sobre%20el%20siguiente%20tema:" target="_blank" rel="noopener">\r
              <!-- Ícono WhatsApp (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"/>\r
              </svg>\r
              WhatsApp\r
            </a>\r
            <a class="btn btn-mail" href="mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Acciones%20de%20Tutela%20Koop">\r
              <!-- ícono mail (22px) -->\r
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
              Escríbenos\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Enlaces rápidos -->\r
      <div class="footer-col">\r
        <h5>Enlaces rápidos</h5>\r
        <ul class="footer-list">\r
          <li><a href="index.html#inicio">Inicio</a></li>\r
          <li><a href="index.html#areas">Áreas de práctica</a></li>\r
          <li><a href="index.html#vision">Nuestra visión</a></li>\r
          <li><a href="index.html#contacto">Contacto</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Servicios de Familia -->\r
      <div class="footer-col">\r
        <h5>Servicios de familia</h5>\r
        <ul class="footer-list">\r
          <li><a href="#divorcio">Divorcio y separación</a></li>\r
          <li><a href="#custodia">Custodia y patria potestad</a></li>\r
          <li><a href="#alimentos">Alimentos y pensión alimentaria</a></li>\r
          <li><a href="#sociedad">Liquidación de sociedad conyugal</a></li>\r
          <li><a href="#adopciones">Adopciones</a></li>\r
          <li><a href="#capitulaciones">Capitulaciones matrimoniales</a></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Contacto + Redes -->\r
      <div class="footer-col">\r
        <h5>Contacto</h5>\r
        <div class="footer-contact">\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>\r
            <span>Bogotá D.C., Colombia</span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="tel:+573503965755">+57 (350) 396 57 55</a></span>\r
          </div>\r
          <div class="item">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"/></svg>\r
            <span><a class="footer-list" style="color:#cfe0ff; text-decoration:none;" href="mailto:direccionjuridicakoop@hotmail.com">direccionjuridicakoop@hotmail.com</a></span>\r
          </div>\r
        </div>\r
\r
        <div class="footer-social" aria-label="Redes sociales">\r
          <!-- Instagram -->\r
          <a aria-label="Instagram" href="https://www.instagram.com/koopstrategicadvisory/" target="_blank" rel="noopener" title="Instagram">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>\r
            </svg>\r
          </a>\r
          <!-- Facebook -->\r
          <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579034631401" target="_blank" rel="noopener" title="Facebook">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>\r
            </svg>\r
          </a>\r
          <!-- TikTok -->\r
          <a aria-label="TikTok" href="https://www.tiktok.com/@koopstrategicadvisory" target="_blank" rel="noopener" title="TikTok">\r
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
              <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"/>\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mini-footer">\r
      <div class="wrap">\r
        <div>© <span id="year"></span> Koop Strategic Advisory. Todos los derechos reservados.</div>\r
        <div class="mini-links">\r
          <a href="politica-privacidad.html">Política de privacidad</a>\r
          <a href="terminos.html">Términos y condiciones</a>\r
          <a href="#inicio">Volver arriba ↑</a>\r
        </div>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <script>\r
    // Menú móvil\r
    const menuToggle = document.getElementById('menu-toggle');\r
    const navMenu = document.getElementById('nav-menu');\r
    if (menuToggle && navMenu) {\r
      menuToggle.onclick = () => navMenu.classList.toggle('open');\r
            navMenu.querySelectorAll('a').forEach(link => {\r
        if(!link.classList.contains('drop-btn')){\r
          link.onclick = () => navMenu.classList.remove('open');\r
        }\r
      });\r
    }\r
    const areasToggle = document.getElementById('areas-toggle');\r
    if(areasToggle){\r
      areasToggle.addEventListener('click', (e)=>{\r
        e.preventDefault();\r
        areasToggle.parentElement.classList.toggle('open');\r
      });\r
    }\r
\r
    // Año dinámico\r
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();\r
\r
    // Manejo de transiciones\r
    (function () {\r
      const overlay = document.querySelector('.page-transition');\r
      \r
      // Asegurar que el overlay esté oculto al cargar la página\r
      function hideOverlay() {\r
        if (overlay) {\r
          overlay.classList.remove('is-active');\r
        }\r
      }\r
      \r
      // Ocultar overlay inmediatamente al cargar\r
      hideOverlay();\r
      \r
      // Ocultar overlay cuando se restaura desde BFCache\r
      window.addEventListener('pageshow', (e) => {\r
        if (e.persisted) {\r
          hideOverlay();\r
        }\r
      });\r
      \r
      // Ocultar overlay cuando se hace focus en la ventana\r
      window.addEventListener('focus', hideOverlay);\r
      \r
      // Ocultar overlay cuando se carga completamente la página\r
      window.addEventListener('load', hideOverlay);\r
      \r
      // Transición de salida interna\r
      function shouldIntercept(link) {\r
        if (!link.href) return false;\r
        if (link.target && link.target.toLowerCase() === '_blank') return false;\r
        const href = link.getAttribute('href');\r
        if (!href) return false;\r
        if (href.startsWith('#')) return false;\r
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;\r
\r
        const url = new URL(link.href, window.location.href);\r
        if (url.hostname !== window.location.hostname) return false;\r
        if (url.pathname === window.location.pathname && url.hash) return false;\r
        return true;\r
      }\r
      \r
      document.addEventListener('click', (e) => {\r
        const a = e.target.closest('a');\r
        if (!a || !shouldIntercept(a)) return;\r
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;\r
\r
        e.preventDefault();\r
        overlay && overlay.classList.add('is-active');\r
        setTimeout(() => { window.location.href = a.href; }, 600);\r
      });\r
    })();\r
  <\/script>\r
</body>\r
</html>\r
`,Mg=()=>{nn(),rn();const e=an(_g).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return tn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Juezjuez.jpg')",backgroundPosition:"center 70%"},children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Acciones de tutela",children:r.jsx("div",{className:"hero-headline",children:"Acciones de tutela"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/tutelapeticion.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Tutela al Derecho de Petición"]}),r.jsx("div",{className:"labor-card-desc",children:"Para obtener respuestas de las autoridades."})]})}),r.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/tutelasalud.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Tutela en  Salud"]}),r.jsx("div",{className:"labor-card-desc",children:"Somos expertos dentro del área de la salud, velamos por sus intereses."})]})}),r.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/tuteladebido.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Revocatoria de decisiones judiciales"]}),r.jsx("div",{className:"labor-card-desc",children:"Por vulneración al debido proceso de acuerdo a la jurisprudencia procesal."})]})}),r.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/jueztutela.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Tutela para obtener pensión"]}),r.jsx("div",{className:"labor-card-desc",children:"Cumplidos los requisitos de la jurisprudencia de la sala de casación laboral"})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en Asesoría Contable?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(O,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(O,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(O,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(O,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Divorcio y separación"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Custodia y patria potestad"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Alimentos y pensión alimentaria"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Liquidación de sociedad conyugal"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Adopciones"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},tt="https://koop-api-a28ac382dd56.herokuapp.com/api";async function Vg({name:e,email:n,password:t,roles:a}){console.log(`API BASE: ${tt}/auth/register`);const i=await fetch(`${tt}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:n,password:t,roles:a})}),o=await i.json().catch(()=>({}));if(!i.ok)throw new Error((o==null?void 0:o.message)||"Error en registro");return o}async function Bg(){const e=await fetch(`${tt}/auth/refresh`,{method:"POST",credentials:"include"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error((n==null?void 0:n.message)||"No se pudo refrescar sesión");return n}async function Fg({email:e,password:n}){console.log(`API BASE: ${tt}/auth/login`);const t=await fetch(`${tt}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:n})});console.log(t);const a=await t.json().catch(()=>({}));if(!t.ok)throw new Error((a==null?void 0:a.message)||"Credenciales inválidas");return a}async function Ug(){const e=await fetch(`${tt}/auth/logout`,{method:"POST",credentials:"include"});if(!e.ok){let n="Error al cerrar sesión";try{const t=await e.json();n=(t==null?void 0:t.message)||n}catch{}throw new Error(n)}return!0}function Uu(e,n){return function(){return e.apply(n,arguments)}}const{toString:Zg}=Object.prototype,{getPrototypeOf:Cl}=Object,{iterator:Pi,toStringTag:Zu}=Symbol,_i=(e=>n=>{const t=Zg.call(n);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),wn=e=>(e=e.toLowerCase(),n=>_i(n)===e),Mi=e=>n=>typeof n===e,{isArray:dt}=Array,na=Mi("undefined");function sa(e){return e!==null&&!na(e)&&e.constructor!==null&&!na(e.constructor)&&$e(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ku=wn("ArrayBuffer");function Kg(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Ku(e.buffer),n}const Hg=Mi("string"),$e=Mi("function"),Hu=Mi("number"),la=e=>e!==null&&typeof e=="object",$g=e=>e===!0||e===!1,Za=e=>{if(_i(e)!=="object")return!1;const n=Cl(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Zu in e)&&!(Pi in e)},Wg=e=>{if(!la(e)||sa(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},qg=wn("Date"),Yg=wn("File"),Gg=wn("Blob"),Jg=wn("FileList"),Qg=e=>la(e)&&$e(e.pipe),Xg=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||$e(e.append)&&((n=_i(e))==="formdata"||n==="object"&&$e(e.toString)&&e.toString()==="[object FormData]"))},e1=wn("URLSearchParams"),[n1,r1,t1,a1]=["ReadableStream","Request","Response","Headers"].map(wn),i1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ca(e,n,{allOwnKeys:t=!1}={}){if(e===null||typeof e>"u")return;let a,i;if(typeof e!="object"&&(e=[e]),dt(e))for(a=0,i=e.length;a<i;a++)n.call(null,e[a],a,e);else{if(sa(e))return;const o=t?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(a=0;a<s;a++)l=o[a],n.call(null,e[l],l,e)}}function $u(e,n){if(sa(e))return null;n=n.toLowerCase();const t=Object.keys(e);let a=t.length,i;for(;a-- >0;)if(i=t[a],n===i.toLowerCase())return i;return null}const vr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Wu=e=>!na(e)&&e!==vr;function bs(){const{caseless:e}=Wu(this)&&this||{},n={},t=(a,i)=>{const o=e&&$u(n,i)||i;Za(n[o])&&Za(a)?n[o]=bs(n[o],a):Za(a)?n[o]=bs({},a):dt(a)?n[o]=a.slice():n[o]=a};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&ca(arguments[a],t);return n}const o1=(e,n,t,{allOwnKeys:a}={})=>(ca(n,(i,o)=>{t&&$e(i)?e[o]=Uu(i,t):e[o]=i},{allOwnKeys:a}),e),s1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),l1=(e,n,t,a)=>{e.prototype=Object.create(n.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),t&&Object.assign(e.prototype,t)},c1=(e,n,t,a)=>{let i,o,s;const l={};if(n=n||{},e==null)return n;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!a||a(s,e,n))&&!l[s]&&(n[s]=e[s],l[s]=!0);e=t!==!1&&Cl(e)}while(e&&(!t||t(e,n))&&e!==Object.prototype);return n},d1=(e,n,t)=>{e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=n.length;const a=e.indexOf(n,t);return a!==-1&&a===t},p1=e=>{if(!e)return null;if(dt(e))return e;let n=e.length;if(!Hu(n))return null;const t=new Array(n);for(;n-- >0;)t[n]=e[n];return t},u1=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Cl(Uint8Array)),h1=(e,n)=>{const a=(e&&e[Pi]).call(e);let i;for(;(i=a.next())&&!i.done;){const o=i.value;n.call(e,o[0],o[1])}},f1=(e,n)=>{let t;const a=[];for(;(t=e.exec(n))!==null;)a.push(t);return a},m1=wn("HTMLFormElement"),g1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,a,i){return a.toUpperCase()+i}),qc=(({hasOwnProperty:e})=>(n,t)=>e.call(n,t))(Object.prototype),x1=wn("RegExp"),qu=(e,n)=>{const t=Object.getOwnPropertyDescriptors(e),a={};ca(t,(i,o)=>{let s;(s=n(i,o,e))!==!1&&(a[o]=s||i)}),Object.defineProperties(e,a)},v1=e=>{qu(e,(n,t)=>{if($e(e)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const a=e[t];if($e(a)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},b1=(e,n)=>{const t={},a=i=>{i.forEach(o=>{t[o]=!0})};return dt(e)?a(e):a(String(e).split(n)),t},y1=()=>{},w1=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function j1(e){return!!(e&&$e(e.append)&&e[Zu]==="FormData"&&e[Pi])}const k1=e=>{const n=new Array(10),t=(a,i)=>{if(la(a)){if(n.indexOf(a)>=0)return;if(sa(a))return a;if(!("toJSON"in a)){n[i]=a;const o=dt(a)?[]:{};return ca(a,(s,l)=>{const c=t(s,i+1);!na(c)&&(o[l]=c)}),n[i]=void 0,o}}return a};return t(e,0)},N1=wn("AsyncFunction"),C1=e=>e&&(la(e)||$e(e))&&$e(e.then)&&$e(e.catch),Yu=((e,n)=>e?setImmediate:n?((t,a)=>(vr.addEventListener("message",({source:i,data:o})=>{i===vr&&o===t&&a.length&&a.shift()()},!1),i=>{a.push(i),vr.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",$e(vr.postMessage)),S1=typeof queueMicrotask<"u"?queueMicrotask.bind(vr):typeof process<"u"&&process.nextTick||Yu,E1=e=>e!=null&&$e(e[Pi]),k={isArray:dt,isArrayBuffer:Ku,isBuffer:sa,isFormData:Xg,isArrayBufferView:Kg,isString:Hg,isNumber:Hu,isBoolean:$g,isObject:la,isPlainObject:Za,isEmptyObject:Wg,isReadableStream:n1,isRequest:r1,isResponse:t1,isHeaders:a1,isUndefined:na,isDate:qg,isFile:Yg,isBlob:Gg,isRegExp:x1,isFunction:$e,isStream:Qg,isURLSearchParams:e1,isTypedArray:u1,isFileList:Jg,forEach:ca,merge:bs,extend:o1,trim:i1,stripBOM:s1,inherits:l1,toFlatObject:c1,kindOf:_i,kindOfTest:wn,endsWith:d1,toArray:p1,forEachEntry:h1,matchAll:f1,isHTMLForm:m1,hasOwnProperty:qc,hasOwnProp:qc,reduceDescriptors:qu,freezeMethods:v1,toObjectSet:b1,toCamelCase:g1,noop:y1,toFiniteNumber:w1,findKey:$u,global:vr,isContextDefined:Wu,isSpecCompliantForm:j1,toJSONObject:k1,isAsyncFn:N1,isThenable:C1,setImmediate:Yu,asap:S1,isIterable:E1};function Y(e,n,t,a,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),t&&(this.config=t),a&&(this.request=a),i&&(this.response=i,this.status=i.status?i.status:null)}k.inherits(Y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const Gu=Y.prototype,Ju={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ju[e]={value:e}});Object.defineProperties(Y,Ju);Object.defineProperty(Gu,"isAxiosError",{value:!0});Y.from=(e,n,t,a,i,o)=>{const s=Object.create(Gu);return k.toFlatObject(e,s,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),Y.call(s,e.message,n,t,a,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const A1=null;function ys(e){return k.isPlainObject(e)||k.isArray(e)}function Qu(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function Yc(e,n,t){return e?e.concat(n).map(function(i,o){return i=Qu(i),!t&&o?"["+i+"]":i}).join(t?".":""):n}function T1(e){return k.isArray(e)&&!e.some(ys)}const I1=k.toFlatObject(k,{},null,function(n){return/^is[A-Z]/.test(n)});function Vi(e,n,t){if(!k.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,t=k.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,w){return!k.isUndefined(w[x])});const a=t.metaTokens,i=t.visitor||p,o=t.dots,s=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(n);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function d(g){if(g===null)return"";if(k.isDate(g))return g.toISOString();if(k.isBoolean(g))return g.toString();if(!c&&k.isBlob(g))throw new Y("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(g)||k.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function p(g,x,w){let f=g;if(g&&!w&&typeof g=="object"){if(k.endsWith(x,"{}"))x=a?x:x.slice(0,-2),g=JSON.stringify(g);else if(k.isArray(g)&&T1(g)||(k.isFileList(g)||k.endsWith(x,"[]"))&&(f=k.toArray(g)))return x=Qu(x),f.forEach(function(v,j){!(k.isUndefined(v)||v===null)&&n.append(s===!0?Yc([x],j,o):s===null?x:x+"[]",d(v))}),!1}return ys(g)?!0:(n.append(Yc(w,x,o),d(g)),!1)}const u=[],m=Object.assign(I1,{defaultVisitor:p,convertValue:d,isVisitable:ys});function y(g,x){if(!k.isUndefined(g)){if(u.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));u.push(g),k.forEach(g,function(f,h){(!(k.isUndefined(f)||f===null)&&i.call(n,f,k.isString(h)?h.trim():h,x,m))===!0&&y(f,x?x.concat(h):[h])}),u.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return y(e),n}function Gc(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return n[a]})}function Sl(e,n){this._pairs=[],e&&Vi(e,this,n)}const Xu=Sl.prototype;Xu.append=function(n,t){this._pairs.push([n,t])};Xu.toString=function(n){const t=n?function(a){return n.call(this,a,Gc)}:Gc;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function R1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function eh(e,n,t){if(!n)return e;const a=t&&t.encode||R1;k.isFunction(t)&&(t={serialize:t});const i=t&&t.serialize;let o;if(i?o=i(n,t):o=k.isURLSearchParams(n)?n.toString():new Sl(n,t).toString(a),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Jc{constructor(){this.handlers=[]}use(n,t,a){return this.handlers.push({fulfilled:n,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){k.forEach(this.handlers,function(a){a!==null&&n(a)})}}const nh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},z1=typeof URLSearchParams<"u"?URLSearchParams:Sl,O1=typeof FormData<"u"?FormData:null,D1=typeof Blob<"u"?Blob:null,L1={isBrowser:!0,classes:{URLSearchParams:z1,FormData:O1,Blob:D1},protocols:["http","https","file","blob","url","data"]},El=typeof window<"u"&&typeof document<"u",ws=typeof navigator=="object"&&navigator||void 0,P1=El&&(!ws||["ReactNative","NativeScript","NS"].indexOf(ws.product)<0),_1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",M1=El&&window.location.href||"http://localhost",V1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:El,hasStandardBrowserEnv:P1,hasStandardBrowserWebWorkerEnv:_1,navigator:ws,origin:M1},Symbol.toStringTag,{value:"Module"})),Oe={...V1,...L1};function B1(e,n){return Vi(e,new Oe.classes.URLSearchParams,{visitor:function(t,a,i,o){return Oe.isNode&&k.isBuffer(t)?(this.append(a,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...n})}function F1(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function U1(e){const n={},t=Object.keys(e);let a;const i=t.length;let o;for(a=0;a<i;a++)o=t[a],n[o]=e[o];return n}function rh(e){function n(t,a,i,o){let s=t[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=o>=t.length;return s=!s&&k.isArray(i)?i.length:s,c?(k.hasOwnProp(i,s)?i[s]=[i[s],a]:i[s]=a,!l):((!i[s]||!k.isObject(i[s]))&&(i[s]=[]),n(t,a,i[s],o)&&k.isArray(i[s])&&(i[s]=U1(i[s])),!l)}if(k.isFormData(e)&&k.isFunction(e.entries)){const t={};return k.forEachEntry(e,(a,i)=>{n(F1(a),i,t,0)}),t}return null}function Z1(e,n,t){if(k.isString(e))try{return(n||JSON.parse)(e),k.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(e)}const da={transitional:nh,adapter:["xhr","http","fetch"],transformRequest:[function(n,t){const a=t.getContentType()||"",i=a.indexOf("application/json")>-1,o=k.isObject(n);if(o&&k.isHTMLForm(n)&&(n=new FormData(n)),k.isFormData(n))return i?JSON.stringify(rh(n)):n;if(k.isArrayBuffer(n)||k.isBuffer(n)||k.isStream(n)||k.isFile(n)||k.isBlob(n)||k.isReadableStream(n))return n;if(k.isArrayBufferView(n))return n.buffer;if(k.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(o){if(a.indexOf("application/x-www-form-urlencoded")>-1)return B1(n,this.formSerializer).toString();if((l=k.isFileList(n))||a.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Vi(l?{"files[]":n}:n,c&&new c,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),Z1(n)):n}],transformResponse:[function(n){const t=this.transitional||da.transitional,a=t&&t.forcedJSONParsing,i=this.responseType==="json";if(k.isResponse(n)||k.isReadableStream(n))return n;if(n&&k.isString(n)&&(a&&!this.responseType||i)){const s=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(n)}catch(l){if(s)throw l.name==="SyntaxError"?Y.from(l,Y.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Oe.classes.FormData,Blob:Oe.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{da.headers[e]={}});const K1=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),H1=e=>{const n={};let t,a,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),t=s.substring(0,i).trim().toLowerCase(),a=s.substring(i+1).trim(),!(!t||n[t]&&K1[t])&&(t==="set-cookie"?n[t]?n[t].push(a):n[t]=[a]:n[t]=n[t]?n[t]+", "+a:a)}),n},Qc=Symbol("internals");function yt(e){return e&&String(e).trim().toLowerCase()}function Ka(e){return e===!1||e==null?e:k.isArray(e)?e.map(Ka):String(e)}function $1(e){const n=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=t.exec(e);)n[a[1]]=a[2];return n}const W1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function yo(e,n,t,a,i){if(k.isFunction(a))return a.call(this,n,t);if(i&&(n=t),!!k.isString(n)){if(k.isString(a))return n.indexOf(a)!==-1;if(k.isRegExp(a))return a.test(n)}}function q1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,t,a)=>t.toUpperCase()+a)}function Y1(e,n){const t=k.toCamelCase(" "+n);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+t,{value:function(i,o,s){return this[a].call(this,n,i,o,s)},configurable:!0})})}let We=class{constructor(n){n&&this.set(n)}set(n,t,a){const i=this;function o(l,c,d){const p=yt(c);if(!p)throw new Error("header name must be a non-empty string");const u=k.findKey(i,p);(!u||i[u]===void 0||d===!0||d===void 0&&i[u]!==!1)&&(i[u||c]=Ka(l))}const s=(l,c)=>k.forEach(l,(d,p)=>o(d,p,c));if(k.isPlainObject(n)||n instanceof this.constructor)s(n,t);else if(k.isString(n)&&(n=n.trim())&&!W1(n))s(H1(n),t);else if(k.isObject(n)&&k.isIterable(n)){let l={},c,d;for(const p of n){if(!k.isArray(p))throw TypeError("Object iterator must return a key-value pair");l[d=p[0]]=(c=l[d])?k.isArray(c)?[...c,p[1]]:[c,p[1]]:p[1]}s(l,t)}else n!=null&&o(t,n,a);return this}get(n,t){if(n=yt(n),n){const a=k.findKey(this,n);if(a){const i=this[a];if(!t)return i;if(t===!0)return $1(i);if(k.isFunction(t))return t.call(this,i,a);if(k.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,t){if(n=yt(n),n){const a=k.findKey(this,n);return!!(a&&this[a]!==void 0&&(!t||yo(this,this[a],a,t)))}return!1}delete(n,t){const a=this;let i=!1;function o(s){if(s=yt(s),s){const l=k.findKey(a,s);l&&(!t||yo(a,a[l],l,t))&&(delete a[l],i=!0)}}return k.isArray(n)?n.forEach(o):o(n),i}clear(n){const t=Object.keys(this);let a=t.length,i=!1;for(;a--;){const o=t[a];(!n||yo(this,this[o],o,n,!0))&&(delete this[o],i=!0)}return i}normalize(n){const t=this,a={};return k.forEach(this,(i,o)=>{const s=k.findKey(a,o);if(s){t[s]=Ka(i),delete t[o];return}const l=n?q1(o):String(o).trim();l!==o&&delete t[o],t[l]=Ka(i),a[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const t=Object.create(null);return k.forEach(this,(a,i)=>{a!=null&&a!==!1&&(t[i]=n&&k.isArray(a)?a.join(", "):a)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,t])=>n+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...t){const a=new this(n);return t.forEach(i=>a.set(i)),a}static accessor(n){const a=(this[Qc]=this[Qc]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=yt(s);a[l]||(Y1(i,s),a[l]=!0)}return k.isArray(n)?n.forEach(o):o(n),this}};We.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(We.prototype,({value:e},n)=>{let t=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(a){this[t]=a}}});k.freezeMethods(We);function wo(e,n){const t=this||da,a=n||t,i=We.from(a.headers);let o=a.data;return k.forEach(e,function(l){o=l.call(t,o,i.normalize(),n?n.status:void 0)}),i.normalize(),o}function th(e){return!!(e&&e.__CANCEL__)}function pt(e,n,t){Y.call(this,e??"canceled",Y.ERR_CANCELED,n,t),this.name="CanceledError"}k.inherits(pt,Y,{__CANCEL__:!0});function ah(e,n,t){const a=t.config.validateStatus;!t.status||!a||a(t.status)?e(t):n(new Y("Request failed with status code "+t.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function G1(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function J1(e,n){e=e||10;const t=new Array(e),a=new Array(e);let i=0,o=0,s;return n=n!==void 0?n:1e3,function(c){const d=Date.now(),p=a[o];s||(s=d),t[i]=c,a[i]=d;let u=o,m=0;for(;u!==i;)m+=t[u++],u=u%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),d-s<n)return;const y=p&&d-p;return y?Math.round(m*1e3/y):void 0}}function Q1(e,n){let t=0,a=1e3/n,i,o;const s=(d,p=Date.now())=>{t=p,i=null,o&&(clearTimeout(o),o=null),e(...d)};return[(...d)=>{const p=Date.now(),u=p-t;u>=a?s(d,p):(i=d,o||(o=setTimeout(()=>{o=null,s(i)},a-u)))},()=>i&&s(i)]}const xi=(e,n,t=3)=>{let a=0;const i=J1(50,250);return Q1(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,c=s-a,d=i(c),p=s<=l;a=s;const u={loaded:s,total:l,progress:l?s/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&p?(l-s)/d:void 0,event:o,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(u)},t)},Xc=(e,n)=>{const t=e!=null;return[a=>n[0]({lengthComputable:t,total:e,loaded:a}),n[1]]},ed=e=>(...n)=>k.asap(()=>e(...n)),X1=Oe.hasStandardBrowserEnv?((e,n)=>t=>(t=new URL(t,Oe.origin),e.protocol===t.protocol&&e.host===t.host&&(n||e.port===t.port)))(new URL(Oe.origin),Oe.navigator&&/(msie|trident)/i.test(Oe.navigator.userAgent)):()=>!0,ex=Oe.hasStandardBrowserEnv?{write(e,n,t,a,i,o){const s=[e+"="+encodeURIComponent(n)];k.isNumber(t)&&s.push("expires="+new Date(t).toGMTString()),k.isString(a)&&s.push("path="+a),k.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function nx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function rx(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function ih(e,n,t){let a=!nx(n);return e&&(a||t==!1)?rx(e,n):n}const nd=e=>e instanceof We?{...e}:e;function Er(e,n){n=n||{};const t={};function a(d,p,u,m){return k.isPlainObject(d)&&k.isPlainObject(p)?k.merge.call({caseless:m},d,p):k.isPlainObject(p)?k.merge({},p):k.isArray(p)?p.slice():p}function i(d,p,u,m){if(k.isUndefined(p)){if(!k.isUndefined(d))return a(void 0,d,u,m)}else return a(d,p,u,m)}function o(d,p){if(!k.isUndefined(p))return a(void 0,p)}function s(d,p){if(k.isUndefined(p)){if(!k.isUndefined(d))return a(void 0,d)}else return a(void 0,p)}function l(d,p,u){if(u in n)return a(d,p);if(u in e)return a(void 0,d)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(d,p,u)=>i(nd(d),nd(p),u,!0)};return k.forEach(Object.keys({...e,...n}),function(p){const u=c[p]||i,m=u(e[p],n[p],p);k.isUndefined(m)&&u!==l||(t[p]=m)}),t}const oh=e=>{const n=Er({},e);let{data:t,withXSRFToken:a,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=n;n.headers=s=We.from(s),n.url=eh(ih(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(k.isFormData(t)){if(Oe.hasStandardBrowserEnv||Oe.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[d,...p]=c?c.split(";").map(u=>u.trim()).filter(Boolean):[];s.setContentType([d||"multipart/form-data",...p].join("; "))}}if(Oe.hasStandardBrowserEnv&&(a&&k.isFunction(a)&&(a=a(n)),a||a!==!1&&X1(n.url))){const d=i&&o&&ex.read(o);d&&s.set(i,d)}return n},tx=typeof XMLHttpRequest<"u",ax=tx&&function(e){return new Promise(function(t,a){const i=oh(e);let o=i.data;const s=We.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=i,p,u,m,y,g;function x(){y&&y(),g&&g(),i.cancelToken&&i.cancelToken.unsubscribe(p),i.signal&&i.signal.removeEventListener("abort",p)}let w=new XMLHttpRequest;w.open(i.method.toUpperCase(),i.url,!0),w.timeout=i.timeout;function f(){if(!w)return;const v=We.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),N={data:!l||l==="text"||l==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:v,config:e,request:w};ah(function(D){t(D),x()},function(D){a(D),x()},N),w=null}"onloadend"in w?w.onloadend=f:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(f)},w.onabort=function(){w&&(a(new Y("Request aborted",Y.ECONNABORTED,e,w)),w=null)},w.onerror=function(){a(new Y("Network Error",Y.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){let j=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const N=i.transitional||nh;i.timeoutErrorMessage&&(j=i.timeoutErrorMessage),a(new Y(j,N.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,e,w)),w=null},o===void 0&&s.setContentType(null),"setRequestHeader"in w&&k.forEach(s.toJSON(),function(j,N){w.setRequestHeader(N,j)}),k.isUndefined(i.withCredentials)||(w.withCredentials=!!i.withCredentials),l&&l!=="json"&&(w.responseType=i.responseType),d&&([m,g]=xi(d,!0),w.addEventListener("progress",m)),c&&w.upload&&([u,y]=xi(c),w.upload.addEventListener("progress",u),w.upload.addEventListener("loadend",y)),(i.cancelToken||i.signal)&&(p=v=>{w&&(a(!v||v.type?new pt(null,e,w):v),w.abort(),w=null)},i.cancelToken&&i.cancelToken.subscribe(p),i.signal&&(i.signal.aborted?p():i.signal.addEventListener("abort",p)));const h=G1(i.url);if(h&&Oe.protocols.indexOf(h)===-1){a(new Y("Unsupported protocol "+h+":",Y.ERR_BAD_REQUEST,e));return}w.send(o||null)})},ix=(e,n)=>{const{length:t}=e=e?e.filter(Boolean):[];if(n||t){let a=new AbortController,i;const o=function(d){if(!i){i=!0,l();const p=d instanceof Error?d:this.reason;a.abort(p instanceof Y?p:new pt(p instanceof Error?p.message:p))}};let s=n&&setTimeout(()=>{s=null,o(new Y(`timeout ${n} of ms exceeded`,Y.ETIMEDOUT))},n);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),e=null)};e.forEach(d=>d.addEventListener("abort",o));const{signal:c}=a;return c.unsubscribe=()=>k.asap(l),c}},ox=function*(e,n){let t=e.byteLength;if(t<n){yield e;return}let a=0,i;for(;a<t;)i=a+n,yield e.slice(a,i),a=i},sx=async function*(e,n){for await(const t of lx(e))yield*ox(t,n)},lx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:t,value:a}=await n.read();if(t)break;yield a}}finally{await n.cancel()}},rd=(e,n,t,a)=>{const i=sx(e,n);let o=0,s,l=c=>{s||(s=!0,a&&a(c))};return new ReadableStream({async pull(c){try{const{done:d,value:p}=await i.next();if(d){l(),c.close();return}let u=p.byteLength;if(t){let m=o+=u;t(m)}c.enqueue(new Uint8Array(p))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},Bi=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",sh=Bi&&typeof ReadableStream=="function",cx=Bi&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),lh=(e,...n)=>{try{return!!e(...n)}catch{return!1}},dx=sh&&lh(()=>{let e=!1;const n=new Request(Oe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),td=64*1024,js=sh&&lh(()=>k.isReadableStream(new Response("").body)),vi={stream:js&&(e=>e.body)};Bi&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!vi[n]&&(vi[n]=k.isFunction(e[n])?t=>t[n]():(t,a)=>{throw new Y(`Response type '${n}' is not supported`,Y.ERR_NOT_SUPPORT,a)})})})(new Response);const px=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(Oe.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await cx(e)).byteLength},ux=async(e,n)=>{const t=k.toFiniteNumber(e.getContentLength());return t??px(n)},hx=Bi&&(async e=>{let{url:n,method:t,data:a,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:c,responseType:d,headers:p,withCredentials:u="same-origin",fetchOptions:m}=oh(e);d=d?(d+"").toLowerCase():"text";let y=ix([i,o&&o.toAbortSignal()],s),g;const x=y&&y.unsubscribe&&(()=>{y.unsubscribe()});let w;try{if(c&&dx&&t!=="get"&&t!=="head"&&(w=await ux(p,a))!==0){let N=new Request(n,{method:"POST",body:a,duplex:"half"}),R;if(k.isFormData(a)&&(R=N.headers.get("content-type"))&&p.setContentType(R),N.body){const[D,z]=Xc(w,xi(ed(c)));a=rd(N.body,td,D,z)}}k.isString(u)||(u=u?"include":"omit");const f="credentials"in Request.prototype;g=new Request(n,{...m,signal:y,method:t.toUpperCase(),headers:p.normalize().toJSON(),body:a,duplex:"half",credentials:f?u:void 0});let h=await fetch(g,m);const v=js&&(d==="stream"||d==="response");if(js&&(l||v&&x)){const N={};["status","statusText","headers"].forEach(F=>{N[F]=h[F]});const R=k.toFiniteNumber(h.headers.get("content-length")),[D,z]=l&&Xc(R,xi(ed(l),!0))||[];h=new Response(rd(h.body,td,D,()=>{z&&z(),x&&x()}),N)}d=d||"text";let j=await vi[k.findKey(vi,d)||"text"](h,e);return!v&&x&&x(),await new Promise((N,R)=>{ah(N,R,{data:j,headers:We.from(h.headers),status:h.status,statusText:h.statusText,config:e,request:g})})}catch(f){throw x&&x(),f&&f.name==="TypeError"&&/Load failed|fetch/i.test(f.message)?Object.assign(new Y("Network Error",Y.ERR_NETWORK,e,g),{cause:f.cause||f}):Y.from(f,f&&f.code,e,g)}}),ks={http:A1,xhr:ax,fetch:hx};k.forEach(ks,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const ad=e=>`- ${e}`,fx=e=>k.isFunction(e)||e===null||e===!1,ch={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:n}=e;let t,a;const i={};for(let o=0;o<n;o++){t=e[o];let s;if(a=t,!fx(t)&&(a=ks[(s=String(t)).toLowerCase()],a===void 0))throw new Y(`Unknown adapter '${s}'`);if(a)break;i[s||"#"+o]=a}if(!a){const o=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=n?o.length>1?`since :
`+o.map(ad).join(`
`):" "+ad(o[0]):"as no adapter specified";throw new Y("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return a},adapters:ks};function jo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pt(null,e)}function id(e){return jo(e),e.headers=We.from(e.headers),e.data=wo.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ch.getAdapter(e.adapter||da.adapter)(e).then(function(a){return jo(e),a.data=wo.call(e,e.transformResponse,a),a.headers=We.from(a.headers),a},function(a){return th(a)||(jo(e),a&&a.response&&(a.response.data=wo.call(e,e.transformResponse,a.response),a.response.headers=We.from(a.response.headers))),Promise.reject(a)})}const dh="1.11.0",Fi={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{Fi[e]=function(a){return typeof a===e||"a"+(n<1?"n ":" ")+e}});const od={};Fi.transitional=function(n,t,a){function i(o,s){return"[Axios v"+dh+"] Transitional option '"+o+"'"+s+(a?". "+a:"")}return(o,s,l)=>{if(n===!1)throw new Y(i(s," has been removed"+(t?" in "+t:"")),Y.ERR_DEPRECATED);return t&&!od[s]&&(od[s]=!0,console.warn(i(s," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(o,s,l):!0}};Fi.spelling=function(n){return(t,a)=>(console.warn(`${a} is likely a misspelling of ${n}`),!0)};function mx(e,n,t){if(typeof e!="object")throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let i=a.length;for(;i-- >0;){const o=a[i],s=n[o];if(s){const l=e[o],c=l===void 0||s(l,o,e);if(c!==!0)throw new Y("option "+o+" must be "+c,Y.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Y("Unknown option "+o,Y.ERR_BAD_OPTION)}}const Ha={assertOptions:mx,validators:Fi},Nn=Ha.validators;let wr=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Jc,response:new Jc}}async request(n,t){try{return await this._request(n,t)}catch(a){if(a instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{a.stack?o&&!String(a.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+o):a.stack=o}catch{}}throw a}}_request(n,t){typeof n=="string"?(t=t||{},t.url=n):t=n||{},t=Er(this.defaults,t);const{transitional:a,paramsSerializer:i,headers:o}=t;a!==void 0&&Ha.assertOptions(a,{silentJSONParsing:Nn.transitional(Nn.boolean),forcedJSONParsing:Nn.transitional(Nn.boolean),clarifyTimeoutError:Nn.transitional(Nn.boolean)},!1),i!=null&&(k.isFunction(i)?t.paramsSerializer={serialize:i}:Ha.assertOptions(i,{encode:Nn.function,serialize:Nn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Ha.assertOptions(t,{baseUrl:Nn.spelling("baseURL"),withXsrfToken:Nn.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&k.merge(o.common,o[t.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),t.headers=We.concat(s,o);const l=[];let c=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(t)===!1||(c=c&&x.synchronous,l.unshift(x.fulfilled,x.rejected))});const d=[];this.interceptors.response.forEach(function(x){d.push(x.fulfilled,x.rejected)});let p,u=0,m;if(!c){const g=[id.bind(this),void 0];for(g.unshift(...l),g.push(...d),m=g.length,p=Promise.resolve(t);u<m;)p=p.then(g[u++],g[u++]);return p}m=l.length;let y=t;for(u=0;u<m;){const g=l[u++],x=l[u++];try{y=g(y)}catch(w){x.call(this,w);break}}try{p=id.call(this,y)}catch(g){return Promise.reject(g)}for(u=0,m=d.length;u<m;)p=p.then(d[u++],d[u++]);return p}getUri(n){n=Er(this.defaults,n);const t=ih(n.baseURL,n.url,n.allowAbsoluteUrls);return eh(t,n.params,n.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(n){wr.prototype[n]=function(t,a){return this.request(Er(a||{},{method:n,url:t,data:(a||{}).data}))}});k.forEach(["post","put","patch"],function(n){function t(a){return function(o,s,l){return this.request(Er(l||{},{method:n,headers:a?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}wr.prototype[n]=t(),wr.prototype[n+"Form"]=t(!0)});let gx=class ph{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(o){t=o});const a=this;this.promise.then(i=>{if(!a._listeners)return;let o=a._listeners.length;for(;o-- >0;)a._listeners[o](i);a._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{a.subscribe(l),o=l}).then(i);return s.cancel=function(){a.unsubscribe(o)},s},n(function(o,s,l){a.reason||(a.reason=new pt(o,s,l),t(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const t=this._listeners.indexOf(n);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const n=new AbortController,t=a=>{n.abort(a)};return this.subscribe(t),n.signal.unsubscribe=()=>this.unsubscribe(t),n.signal}static source(){let n;return{token:new ph(function(i){n=i}),cancel:n}}};function xx(e){return function(t){return e.apply(null,t)}}function vx(e){return k.isObject(e)&&e.isAxiosError===!0}const Ns={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ns).forEach(([e,n])=>{Ns[n]=e});function uh(e){const n=new wr(e),t=Uu(wr.prototype.request,n);return k.extend(t,wr.prototype,n,{allOwnKeys:!0}),k.extend(t,n,null,{allOwnKeys:!0}),t.create=function(i){return uh(Er(e,i))},t}const me=uh(da);me.Axios=wr;me.CanceledError=pt;me.CancelToken=gx;me.isCancel=th;me.VERSION=dh;me.toFormData=Vi;me.AxiosError=Y;me.Cancel=me.CanceledError;me.all=function(n){return Promise.all(n)};me.spread=xx;me.isAxiosError=vx;me.mergeConfig=Er;me.AxiosHeaders=We;me.formToJSON=e=>rh(k.isHTMLForm(e)?new FormData(e):e);me.getAdapter=ch.getAdapter;me.HttpStatusCode=Ns;me.default=me;const{Axios:w2,AxiosError:j2,CanceledError:k2,isCancel:N2,CancelToken:C2,VERSION:S2,all:E2,Cancel:A2,isAxiosError:T2,spread:I2,toFormData:R2,AxiosHeaders:z2,HttpStatusCode:O2,formToJSON:D2,getAdapter:L2,mergeConfig:P2}=me;var bx={};const hh="https://koop-api-a28ac382dd56.herokuapp.com/api",ke=me.create({baseURL:hh,withCredentials:!0}),yx=me.create({baseURL:hh,withCredentials:!0});let ko=!1,Cs=[];function wx(e){Cs.push(e)}function jx(e){Cs.forEach(n=>{try{n(e)}catch{}}),Cs=[]}function kx({getAccessToken:e,setAccessToken:n,onLogout:t}){ke.interceptors.request.use(a=>{var i,o;try{let s;try{s=e==null?void 0:e()}catch{}if(!s&&typeof window<"u")try{s=(i=window.localStorage)==null?void 0:i.getItem("accessToken")}catch{}s&&!((o=a.headers)!=null&&o.Authorization)&&(a.headers=a.headers||{},a.headers.Authorization=`Bearer ${s}`)}catch{}return a}),ke.interceptors.response.use(a=>a,async a=>{var p,u;const{response:i,config:o}=a||{},s=i==null?void 0:i.status,l=o||{},c=String((l==null?void 0:l.url)||""),d=c.includes("/auth/login")||c.includes("/auth/register")||c.includes("/auth/refresh");if(s!==401||d||l._retry)return Promise.reject(a);if(l._retry=!0,ko)return new Promise((m,y)=>{wx(g=>{try{l.headers=l.headers||{},g&&(l.headers.Authorization=`Bearer ${g}`),m(ke(l))}catch(x){y(x)}})});ko=!0;try{const m=await yx.post("/auth/refresh"),y=(p=m==null?void 0:m.data)==null?void 0:p.accessToken;if(!y)throw new Error("No accessToken in refresh");try{n==null||n(y)}catch{}return jx(y),l.headers=l.headers||{},l.headers.Authorization=`Bearer ${y}`,ke(l)}catch(m){const y=(u=m==null?void 0:m.response)==null?void 0:u.status;if(y===401||y===403)try{await(t==null?void 0:t())}catch{}return Promise.reject(m)}finally{ko=!1}})}const Nx=Cx("project-1/avatar/theosassler.png","getObject");me.get(Nx).then(e=>console.log(e)).catch(e=>console.log(e));async function Cx(e,n){var t={Bucket:bx.AWS_BUCKET,Key:e,Expires:3e3};return await s3.getSignedUrlPromise(n,t)}const fh=b.createContext(null),sd=["admin","user"];function Ss(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=sd.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>sd.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function Ta(e){try{const n=e.split(".")[1],t=atob(n.replace(/-/g,"+").replace(/_/g,"/"));return JSON.parse(t)}catch{return null}}function Ia(e,n){return e?{id:e.sub,name:e.name,email:e.email,roles:Ss(e.roles),active:e.active!==!1,driveFolders:e.driveFolders||[]}:n?{id:n.id,name:n.name,email:n.email,roles:Ss(n.roles),active:n.active!==!1,driveFolders:n.driveFolders||[]}:null}function Sx({children:e}){const[n,t]=b.useState(()=>localStorage.getItem("accessToken")||null),[a,i]=b.useState(()=>{const y=localStorage.getItem("accessToken");if(!y)return null;const g=Ta(y);return Ia(g,null)}),[o,s]=b.useState(!1),l=!!n;b.useEffect(()=>{if(!n)localStorage.removeItem("accessToken"),i(null);else{localStorage.setItem("accessToken",n);const y=Ta(n);y&&i(Ia(y,null))}},[n]);const c=async(y,g)=>{s(!0);try{const{accessToken:x,user:w}=await Fg({email:y,password:g});t(x);const f=Ta(x);return i(Ia(f,w)),{ok:!0}}catch(x){return{ok:!1,error:x.message}}finally{s(!1)}},d=async(y,g,x,w)=>{s(!0);try{const f=Array.isArray(w)&&w.length>0,h=await Vg({name:y,email:g,password:x,roles:f?Ss(w):void 0});if(h!=null&&h.accessToken){t(h.accessToken);const v=Ta(h.accessToken);i(Ia(v,h.user))}return{ok:!0,data:h}}catch(f){return{ok:!1,error:f.message}}finally{s(!1)}},p=async()=>{try{await Ug()}catch{}finally{t(null),i(null)}},u=b.useMemo(()=>({accessToken:n,user:a,isAuthenticated:l,loading:o,login:c,register:d,logout:p,refresh:Bg}),[n,a,l,o]),m=b.useRef(!1);return b.useEffect(()=>{m.current||(kx({getAccessToken:()=>n,setAccessToken:y=>t(y),onLogout:()=>p()}),m.current=!0)},[]),r.jsx(fh.Provider,{value:u,children:e})}function Ve(){const e=b.useContext(fh);if(!e)throw new Error("useAuth debe usarse dentro de AuthProvider");return e}const mh="/assets/Koop%20Logo-DEFOyNWT.png";function Ex(){var m,y;const{login:e,loading:n}=Ve(),t=ct(),i=((y=(m=Tn().state)==null?void 0:m.from)==null?void 0:y.pathname)||"/dashboard",[o,s]=b.useState(""),[l,c]=b.useState(""),[d,p]=b.useState(""),u=async g=>{g.preventDefault(),p(""),console.log("Submitting login form, Hola q ac",o);const x=await e(o,l);if(!x.ok){p(x.error||"Error al iniciar sesión");return}t(i,{replace:!0})};return b.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),r.jsxs("div",{className:"auth-page",children:[r.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:r.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),r.jsx("div",{className:"auth-bg-overlay"}),r.jsxs("div",{className:"auth-card",children:[r.jsx(O,{to:"/",children:r.jsx("img",{src:mh,alt:"Logo KOOP",className:"logo"})}),r.jsx("h2",{children:"Login KOOP"}),d&&r.jsx("div",{className:"auth-error",children:d}),r.jsxs("form",{onSubmit:u,children:[r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"email",children:"Correo"}),r.jsx("input",{id:"email",type:"email",placeholder:"Ingrese su correo",value:o,onChange:g=>s(g.target.value),required:!0})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"password",children:"Contraseña"}),r.jsx("input",{id:"password",type:"password",placeholder:"Ingrese su contraseña",value:l,onChange:g=>c(g.target.value),required:!0})]}),r.jsx("button",{type:"submit",className:"login-button",disabled:n,children:n?"Ingresando...":"Iniciar sesión"})]}),r.jsxs("div",{className:"auth-actions",children:["¿No tienes cuenta? ",r.jsx(O,{to:"/register",children:"Regístrate"})," · ",r.jsx(O,{to:"/",children:"Volver al inicio"})]})]})]})}function Ax(){const[e,n]=b.useState({name:"",email:"",password:""}),[t,a]=b.useState(!1),[i,o]=b.useState(""),[s,l]=b.useState(""),{register:c}=Ve(),d=ct(),p=m=>n({...e,[m.target.name]:m.target.value}),u=async m=>{m.preventDefault(),o(""),l(""),a(!0);try{const y=await c(e.name,e.email,e.password);if(y.ok){const g=y.data||{ok:!0};g!=null&&g.accessToken?d("/dashboard"):(l("Tu registro fue recibido. Un administrador activara tu cuenta y te avisaremos por correo."),n({name:"",email:"",password:""}))}else o(y.error||"Error en registro")}catch(y){const g=(y==null?void 0:y.message)||"Error en registro";o(g)}finally{a(!1)}};return b.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),r.jsxs("div",{className:"auth-page",children:[r.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:r.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),r.jsx("div",{className:"auth-bg-overlay"}),r.jsxs("div",{className:"auth-card",children:[r.jsx("img",{src:mh,alt:"Logo KOOP",className:"logo"}),r.jsx("h2",{children:"Crear Cuenta"}),i&&r.jsx("div",{className:"auth-error",children:i}),s&&r.jsx("div",{className:"auth-info",children:s}),r.jsxs("form",{onSubmit:u,children:[r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"name",children:"Nombre"}),r.jsx("input",{id:"name",name:"name",type:"text",placeholder:"Tu nombre",value:e.name,onChange:p})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"email",children:"Correo"}),r.jsx("input",{id:"email",name:"email",type:"email",placeholder:"tu@email.com",value:e.email,onChange:p,required:!0})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"password",children:"Contrasena"}),r.jsx("input",{id:"password",name:"password",type:"password",placeholder:"Minimo 8 caracteres",value:e.password,onChange:p,required:!0})]}),r.jsx("button",{type:"submit",className:"login-button",disabled:t,children:t?"Creando...":"Registrarme"})]}),r.jsxs("div",{className:"auth-actions",children:["Ya tienes cuenta? ",r.jsx(O,{to:"/login",children:"Inicia sesion"})]})]})]})}function Tx(e){return e!=null&&e.roles?(Array.isArray(e.roles)?e.roles:[e.roles]).map(n=>String(n||"").toLowerCase()).includes("admin"):!1}function Ix(){const{user:e,logout:n}=Ve(),t=Tx(e);return e?r.jsxs("div",{style:{padding:24,display:"flex",flexDirection:"column",gap:16},children:[r.jsx("h1",{children:"Panel Privado"}),r.jsxs("div",{children:[r.jsxs("p",{children:["Bienvenido: ",e.email]}),r.jsxs("p",{children:["Roles: ",Array.isArray(e.roles)?e.roles.join(", "):"N/A"]}),r.jsxs("p",{children:["Estado: ",e.active===!1?"Inactivo":"Activo"]})]}),t&&r.jsx("div",{style:{display:"flex",gap:12},children:r.jsx(O,{className:"btn btn-primary",to:"/admin/usuarios",children:"Gestionar usuarios"})}),r.jsx("div",{children:r.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Cerrar sesion"})})]}):r.jsxs("div",{style:{padding:24},children:[r.jsx("h1",{children:"Panel Privado"}),r.jsx("p",{children:"No hay usuario."})]})}async function gh(){const{data:e}=await ke.get("/admin/users");return e}async function Rx(e,n){const{data:t}=await ke.patch(`/admin/users/${e}/active`,{active:n});return t}async function zx(e){const{data:n}=await ke.post(`/admin/users/${e}/grant-admin`);return n}async function Ox(e){const{data:n}=await ke.post(`/admin/users/${e}/revoke-admin`);return n}async function Dx(e){const{data:n}=await ke.delete(`/admin/users/${e}`);return n}async function Al(){const{data:e}=await ke.get("/admin/clients/active");return e}async function Lx(e,n){const{data:t}=await ke.patch(`/admin/clients/${e}`,n);return t}async function Px(e,n){const{data:t}=await ke.patch(`/admin/clients/${e}/assign`,{adminUserId:n});return t}async function _x(e,n){const{data:t}=await ke.post(`/admin/clients/from-user/${e}`,n);return t}const ld=["admin","user"];function Rr(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=ld.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>ld.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function Mx(e){return Rr(e==null?void 0:e.roles).includes("admin")}function Vx(){const{user:e}=Ve(),n=Mx(e),[t,a]=b.useState([]),[i,o]=b.useState(!1),[s,l]=b.useState(null),[c,d]=b.useState(null),[p,u]=b.useState(null),[m,y]=b.useState(null),[g,x]=b.useState(null),[w,f]=b.useState(!1),[h,v]=b.useState(null),[j,N]=b.useState(null),[R,D]=b.useState(!0),[z,F]=b.useState(!1),[S,H]=b.useState(""),J=e==null?void 0:e.id,q=async()=>{var T,B;if(n){o(!0),l(null);try{const P=await gh();a(Array.isArray(P==null?void 0:P.items)?P.items.map(ee=>({...ee,roles:Rr(ee.roles)})):[])}catch(P){l(((B=(T=P==null?void 0:P.response)==null?void 0:T.data)==null?void 0:B.message)||(P==null?void 0:P.message)||"No se pudo cargar la lista")}finally{o(!1)}}};b.useEffect(()=>{q()},[n]);const Q=async(T,B)=>{var P,ee;try{d(T),await Rx(T,B),a(V=>V.map(se=>se.id===T?{...se,active:B}:se))}catch(V){l(((ee=(P=V==null?void 0:V.response)==null?void 0:P.data)==null?void 0:ee.message)||(V==null?void 0:V.message)||"No se pudo actualizar el usuario")}finally{d(null)}},on=async T=>{var P,ee;if(window.confirm("Deseas otorgar rol de administrador a este usuario?"))try{l(null),u(T);const V=await zx(T);V!=null&&V.user&&a(se=>se.map(te=>te.id===T?{...te,...V.user,roles:Rr(V.user.roles)}:te))}catch(V){l(((ee=(P=V==null?void 0:V.response)==null?void 0:P.data)==null?void 0:ee.message)||(V==null?void 0:V.message)||"No se pudo actualizar los roles")}finally{u(null)}},pe=async T=>{var P,ee;if(window.confirm("Deseas quitar el rol de administrador a este usuario?"))try{l(null),u(T);const V=await Ox(T);V!=null&&V.user&&a(se=>se.map(te=>te.id===T?{...te,...V.user,roles:Rr(V.user.roles)}:te))}catch(V){l(((ee=(P=V==null?void 0:V.response)==null?void 0:P.data)==null?void 0:ee.message)||(V==null?void 0:V.message)||"No se pudo actualizar los roles")}finally{u(null)}},Be=async T=>{var P,ee;if(window.confirm("Deseas eliminar este usuario? Esta accion es permanente."))try{y(T),await Dx(T),a(V=>V.filter(se=>se.id!==T))}catch(V){l(((ee=(P=V==null?void 0:V.response)==null?void 0:P.data)==null?void 0:ee.message)||(V==null?void 0:V.message)||"No se pudo eliminar el usuario")}finally{y(null)}},L=T=>{v(null),x({userId:T.id,fullName:T.name||"",documentType:"",documentNumber:"",birthDate:"",phone:"",email:T.email||"",address:"",contactInfo:""})},W=async()=>{var T,B;if(g!=null&&g.userId){v(null);try{f(!0);const P={fullName:String(g.fullName||"").trim(),documentType:String(g.documentType||"").trim(),documentNumber:String(g.documentNumber||"").trim(),birthDate:g.birthDate?new Date(g.birthDate).toISOString():void 0,phone:String(g.phone||"").trim(),email:String(g.email||"").trim(),address:String(g.address||"").trim(),contactInfo:String(g.contactInfo||"").trim()};if(!P.fullName){v("El nombre completo es requerido"),f(!1);return}await _x(g.userId,P),x(null)}catch(P){v(((B=(T=P==null?void 0:P.response)==null?void 0:T.data)==null?void 0:B.message)||(P==null?void 0:P.message)||"No se pudo crear el cliente")}finally{f(!1)}}};return n?r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",paddingLeft:16,paddingRight:16,paddingBottom:16},children:[r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[r.jsx("style",{children:`
          .only-mobile { display: block; }
          .only-desktop { display: none; }
          @media (min-width: 768px) {
            .only-mobile { display: none; }
            .only-desktop { display: block; }
          }
          .mobile-list { display: grid; gap: 10px; }
          .mobile-item { border: 1px solid rgba(148,163,184,0.35); border-radius: 10px; overflow: hidden; background: #0f172a; }
          .mobile-item-header { border-radius: 0; padding: 10px 12px; background: linear-gradient(135deg, #38b2ac, #0ea5e9); color: #0f172a; font-weight: 700; }
          .mobile-item-title { text-align: left; }
          .mobile-item-details { padding: 10px 12px; }
          .kv { display: grid; grid-template-columns: 110px 1fr; gap: 8px; align-items: center; }
          @media (max-width: 360px) {
            .kv { grid-template-columns: 1fr; }
            .kv span { font-size: 12px; opacity: 0.8; }
          }
        `}),r.jsxs("div",{className:"dash-header",style:{marginBottom:16,gap:12},children:[r.jsx("div",{className:"dash-title",children:"Administrar usuarios"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("input",{className:"input",placeholder:"Buscar por nombre, cédula o correo",value:S,onChange:T=>H(T.target.value),style:{width:260}}),S&&r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>H(""),children:"Limpiar"}),r.jsx("button",{className:"btn btn-secondary",onClick:q,disabled:i,children:i?"Actualizando...":"Refrescar"})]})]}),s&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:12,borderRadius:8,marginBottom:16},children:s}),(()=>{const T=E=>String(E||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),B=T(S),P=E=>{if(!B)return!0;const A=[E.document,E.documentNumber,E.cedula,E.dni,E.idNumber,E.numeroDocumento];return[E.name,E.email,...A].some($=>T($).includes(B))},ee=t.filter(P),V=(E,A)=>{const _=E!=null&&E.createdAt?new Date(E.createdAt).getTime():0;return(A!=null&&A.createdAt?new Date(A.createdAt).getTime():0)-_},se=E=>(E==null?void 0:E.active)===!1||(E==null?void 0:E.isActive)===!1,te=ee.filter(se).sort(V),xe=ee.filter(E=>!se(E)).sort(V),hn=E=>{const A=E.createdAt?new Date(E.createdAt):null,_=Rr(E.roles),$=_.includes("admin"),ae=E.active!==!1&&E.isActive!==!1,qe=J===E.id,re=_.length>0?_.join(", "):"-";return r.jsxs("tr",{children:[r.jsx("td",{children:E.name||"-"}),r.jsx("td",{children:E.email}),r.jsx("td",{children:re}),r.jsx("td",{children:r.jsx("span",{className:`me-badge ${ae?"me-badge-success":"me-badge-error"}`,children:ae?"Activo":"Inactivo"})}),r.jsx("td",{children:A?A.toLocaleString():"-"}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Q(E.id,!ae),disabled:c===E.id,children:c===E.id?"Guardando...":ae?"Desactivar":"Activar"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>L(E),children:"Convertir a cliente"}),$?r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>pe(E.id),disabled:p===E.id||qe,title:qe?"No puedes modificar tu propio rol":"Quitar rol admin",children:p===E.id?"Quitando...":"Quitar admin"}):r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>on(E.id),disabled:p===E.id,children:p===E.id?"Asignando...":"Hacer admin"}),r.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>Be(E.id),disabled:m===E.id||qe,title:qe?"No puedes eliminar tu propio usuario":"Eliminar usuario",children:m===E.id?"Eliminando...":"Eliminar"})]})})]},E.id)};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"dash-item only-desktop",style:{marginBottom:16},children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("h4",{style:{margin:0},children:["Usuarios creados (no activados)",te.length?` · ${te.length}`:""]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>D(E=>!E),children:R?"Ocultar":"Mostrar"})]}),R&&r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs("table",{className:"me-table",style:{minWidth:720},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nombre"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Roles"}),r.jsx("th",{children:"Activo"}),r.jsx("th",{children:"Creado"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[te.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:6,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay usuarios no activados"})}),te.map(hn)]})]})})]}),r.jsxs("div",{className:"dash-item only-desktop",children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("h4",{style:{margin:0},children:["Usuarios activados",xe.length?` · ${xe.length}`:""]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>F(E=>!E),children:z?"Ocultar":"Mostrar"})]}),z&&r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs("table",{className:"me-table",style:{minWidth:720},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nombre"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Roles"}),r.jsx("th",{children:"Activo"}),r.jsx("th",{children:"Creado"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[xe.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:6,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay usuarios activados"})}),xe.map(hn)]})]})})]})]})})(),(()=>{const T=E=>String(E||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),B=T(S),P=E=>{if(!B)return!0;const A=[E.document,E.documentNumber,E.cedula,E.dni,E.idNumber,E.numeroDocumento];return[E.name,E.email,...A].some($=>T($).includes(B))},ee=t.filter(P),V=(E,A)=>{const _=E!=null&&E.createdAt?new Date(E.createdAt).getTime():0;return(A!=null&&A.createdAt?new Date(A.createdAt).getTime():0)-_},se=E=>(E==null?void 0:E.active)===!1||(E==null?void 0:E.isActive)===!1,te=ee.filter(se).sort(V),xe=ee.filter(E=>!se(E)).sort(V),hn=E=>{const A=E.createdAt?new Date(E.createdAt):null,_=Rr(E.roles),$=_.includes("admin"),ae=E.active!==!1&&E.isActive!==!1,qe=J===E.id,re=j===E.id,Zi=_.length>0?_.join(", "):"-";return r.jsxs("div",{className:"mobile-item",children:[r.jsxs("button",{type:"button",className:"btn btn-primary btn-sm mobile-item-header",onClick:()=>N(pa=>pa===E.id?null:E.id),"aria-expanded":re,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("div",{className:"mobile-item-title",children:E.name||"-"}),r.jsx("div",{style:{opacity:.9,fontSize:12,paddingRight:10},children:re?"−":"+"})]}),re&&r.jsxs("div",{className:"mobile-item-details",children:[r.jsxs("div",{className:"kv",children:[r.jsx("span",{children:"Email"}),r.jsx("div",{children:E.email||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Roles"}),r.jsx("div",{children:Zi})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Estado"}),r.jsx("div",{children:r.jsx("span",{className:`me-badge ${ae?"me-badge-success":"me-badge-error"}`,children:ae?"Activo":"Inactivo"})})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Creado"}),r.jsx("div",{children:A?A.toLocaleString():"-"})]}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:10,justifyContent:"flex-end"},children:[r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Q(E.id,!ae),disabled:c===E.id,children:c===E.id?"Guardando...":ae?"Desactivar":"Activar"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>L(E),children:"Convertir a cliente"}),$?r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>pe(E.id),disabled:p===E.id||qe,title:qe?"No puedes modificar tu propio rol":"Quitar rol admin",children:p===E.id?"Quitando...":"Quitar admin"}):r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>on(E.id),disabled:p===E.id,children:p===E.id?"Asignando...":"Hacer admin"}),r.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>Be(E.id),disabled:m===E.id||qe,title:qe?"No puedes eliminar tu propio usuario":"Eliminar usuario",children:m===E.id?"Eliminando...":"Eliminar"})]})]})]},E.id)};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"dash-item only-mobile",style:{marginBottom:16},children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("h4",{style:{margin:0},children:["Usuarios creados (no activados)",te.length?` · ${te.length}`:""]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>D(E=>!E),children:R?"Ocultar":"Mostrar"})]}),R&&r.jsxs("div",{className:"mobile-list",children:[te.length===0&&r.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay usuarios no activados"}),te.map(hn)]})]}),r.jsxs("div",{className:"dash-item only-mobile",children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("h4",{style:{margin:0},children:["Usuarios activados",xe.length?` · ${xe.length}`:""]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>F(E=>!E),children:z?"Ocultar":"Mostrar"})]}),z&&r.jsxs("div",{className:"mobile-list",children:[xe.length===0&&r.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay usuarios activados"}),xe.map(hn)]})]})]})})()]}),g&&r.jsx("div",{role:"dialog","aria-modal":"true",className:"modal-overlay",onClick:T=>{T.target===T.currentTarget&&x(null)},children:r.jsxs("div",{className:"modal-card",role:"document",children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("div",{className:"dash-title",children:"Convertir usuario en cliente"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>x(null),"aria-label":"Cerrar",children:"Cerrar"})]}),h&&r.jsx("div",{className:"alert alert-error",role:"alert",children:h}),r.jsxs("div",{className:"form",children:[r.jsxs("label",{className:"field",children:[r.jsx("span",{children:"Nombre completo"}),r.jsx("input",{className:"input",value:g.fullName,onChange:T=>x(B=>({...B,fullName:T.target.value}))})]}),r.jsxs("div",{className:"form-row",style:{gridTemplateColumns:"1fr 2fr"},children:[r.jsxs("label",{className:"field",children:[r.jsx("span",{children:"Tipo de documento"}),r.jsx("input",{className:"input",placeholder:"CC / CE / NIT / PAS",value:g.documentType,onChange:T=>x(B=>({...B,documentType:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("label",{className:"field",children:[r.jsx("span",{children:"Número de documento"}),r.jsx("input",{className:"input",value:g.documentNumber,onChange:T=>x(B=>({...B,documentNumber:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]})]}),r.jsxs("label",{className:"field",children:[r.jsx("span",{children:"Fecha de nacimiento"}),r.jsx("input",{className:"input",type:"date",value:g.birthDate,onChange:T=>x(B=>({...B,birthDate:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("div",{className:"form-row two",children:[r.jsxs("label",{className:"field",children:[r.jsx("span",{children:"Teléfono fijo / celular"}),r.jsx("input",{className:"input",value:g.phone,onChange:T=>x(B=>({...B,phone:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("label",{className:"field",children:[r.jsx("span",{children:"Correo electrónico"}),r.jsx("input",{className:"input",type:"email",value:g.email,onChange:T=>x(B=>({...B,email:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]})]}),r.jsxs("label",{className:"field",children:[r.jsx("span",{children:"Dirección física"}),r.jsx("input",{className:"input",value:g.address,onChange:T=>x(B=>({...B,address:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("label",{className:"field",children:[r.jsx("span",{children:"Información de contacto (opcional)"}),r.jsx("textarea",{className:"textarea",rows:3,value:g.contactInfo,onChange:T=>x(B=>({...B,contactInfo:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px",resize:"vertical"}})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>x(null),disabled:w,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:W,disabled:w,children:w?"Guardando...":"Crear cliente"})]})]})})]}):r.jsx("div",{className:"dash-page",style:{padding:40},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Esta seccion esta disponible solo para administradores."})]})})}const cd=["admin","user"];function Bx(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=cd.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>cd.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function Fx(e){return Bx(e==null?void 0:e.roles).includes("admin")}const Ux={derly:{name:"Derly Ramírez",initials:"DR",color:"#0ea5e9"},juan:{name:"Juan F. Rey",initials:"JR",color:"#22d3ee"},valentina:{name:"Valentina M.",initials:"VM",color:"#a78bfa"}},Zx=[{id:"T-901",title:"Radicar tutela por vacaciones compensadas",client:"AGG MRO",status:"en-curso",priority:"alta",due:"2025-09-22",assignee:"derly",tags:["Laboral","Audiencia"],radicado:"11001-31-05-2025-00123"},{id:"T-902",title:"Revisión contrato Promesa de Compraventa (Apto 501)",client:"Ramírez – Mendoza",status:"pendiente",priority:"media",due:"2025-09-20",assignee:"juan",tags:["Civil","Notaría 27"],radicado:null},{id:"T-903",title:"Concepto: Nota crédito RADIAN ya aceptada",client:"Tus-Cuentas",status:"pendiente",priority:"alta",due:"2025-09-19",assignee:"juan",tags:["Tributario","DIAN"],radicado:null},{id:"T-904",title:"Solicitud CHIP y verificación Folio",client:"Inmobiliario",status:"hecho",priority:"baja",due:"2025-09-15",assignee:"valentina",tags:["PH","Certificados"],radicado:"50C-2024-009988"},{id:"T-905",title:"Memorial de sustitución de comprador (Otrosí)",client:"Villa Carolina",status:"en-curso",priority:"media",due:"2025-09-23",assignee:"derly",tags:["Civil","Minuta"],radicado:null}];function Kx(e){try{return new Date(e+"T00:00:00").toLocaleDateString("es-CO",{year:"numeric",month:"short",day:"2-digit"})}catch{return e}}function Hx(e){try{return new Date(e)<new Date(new Date().toDateString())}catch{return!1}}function $x(){const{user:e}=Ve(),n=Fx(e),[t,a]=b.useState(""),[i,o]=b.useState("derly"),[s,l]=b.useState("all"),[c,d]=b.useState(!0),[p,u]=b.useState(!1),m=b.useMemo(()=>p?[]:Zx,[p]),y=b.useMemo(()=>{let x=m.slice();c&&(x=x.filter(f=>f.assignee===i)),s!=="all"&&(x=x.filter(f=>f.status===s));const w=t.trim().toLowerCase();return w&&(x=x.filter(f=>[f.title,f.client,f.radicado,(f.tags||[]).join(" ")].filter(Boolean).join(" ").toLowerCase().includes(w))),x},[m,c,i,s,t]),g=`${y.length} resultado${y.length===1?"":"s"}`;return n?r.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[r.jsx("style",{children:`
          :root{ --ring: 0 0 0 3px rgb(34 211 238 / 0.25); --radius:18px; }
          .tasks-container{max-width:1100px;margin:0 auto}
          .tasks-header{display:flex;gap:12px;align-items:center;justify-content:space-between;margin-bottom:18px}
          .brand{display:flex;gap:12px;align-items:center}
          .brand .logo{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,#22d3ee,#3b82f6);display:grid;place-items:center;box-shadow:0 8px 24px rgba(34,211,238,.25)}
          .brand .logo svg{filter:drop-shadow(0 2px 6px rgba(0,0,0,.25))}
          .brand h1{font-size:18px;margin:0;font-weight:700;letter-spacing:.2px}
          .toolbar{display:flex;gap:10px;flex-wrap:wrap}
          .toolbar .field{position:relative}
          .tasks-input, .tasks-select{background:#0c1530;border:1px solid #1e2a4a;color:#e5e7eb;padding:10px 12px;border-radius:12px;outline:none;min-width:200px}
          .tasks-input:focus, .tasks-select:focus{box-shadow:var(--ring);border-color:#22d3ee}
          .grid{display:grid;grid-template-columns:1fr;gap:16px}
          @media(min-width:780px){.grid{grid-template-columns:260px 1fr}}
          .panel{background:linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01));border:1px solid rgba(255,255,255,.06);border-radius:var(--radius);box-shadow:0 10px 30px rgba(0,0,0,.35)}
          .sidebar{padding:16px}
          .sidebar h2{margin:8px 4px 10px;font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#9fb0c8}
          .chips{display:flex;flex-wrap:wrap;gap:8px}
          .chip{padding:8px 10px;border-radius:999px;background:#0c1530;border:1px solid #1e2a4a;color:#c7d2fe;font-size:12px;cursor:pointer;user-select:none}
          .chip[data-active="true"]{background:linear-gradient(135deg,rgba(34,211,238,.15),rgba(59,130,246,.15));border-color:#234072}
          .board{padding:16px}
          .board-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
          .board-header h3{margin:0;font-size:16px}
          .count{font-size:12px;color:#94a3b8}
          .cards{display:grid;grid-template-columns:1fr;gap:12px}
          @media(min-width:560px){.cards{grid-template-columns:repeat(2,1fr)}}
          @media(min-width:980px){.cards{grid-template-columns:repeat(3,1fr)}}
          .card{background:linear-gradient(180deg,rgba(18,28,55,.9),rgba(12,20,40,.95));border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:14px;display:flex;flex-direction:column;gap:10px;transition:transform .15s ease, border-color .15s ease}
          .card:hover{transform:translateY(-2px);border-color:rgba(34,211,238,.35)}
          .title{font-weight:600;line-height:1.25;margin:0}
          .meta{display:flex;gap:8px;flex-wrap:wrap}
          .badge{font-size:11px;border-radius:999px;padding:4px 8px;border:1px solid rgba(255,255,255,.1);background:#0c1530;color:#cbd5e1}
          .badge[data-variant="high"]{border-color:rgba(239,68,68,.35);background:rgba(239,68,68,.12);color:#fecaca}
          .badge[data-variant="medium"]{border-color:rgba(245,158,11,.35);background:rgba(245,158,11,.12);color:#fde68a}
          .badge[data-variant="low"]{border-color:rgba(34,197,94,.35);background:rgba(34,197,94,.12);color:#bbf7d0}
          .badge[data-variant="due"]{border-color:rgba(34,211,238,.35);background:rgba(34,211,238,.10);color:#67e8f9}
          .assignee{display:flex;align-items:center;gap:8px;margin-top:auto}
          .avatar{width:24px;height:24px;border-radius:999px;background:#0ea5e9;display:grid;place-items:center;font-size:12px;font-weight:700}
          .assignee small{color:#94a3b8}
          .empty{display:grid;place-items:center;padding:56px;text-align:center;color:#9fb0c8}
          .empty svg{margin-bottom:12px;opacity:.9}
          .footer-actions{margin-top:18px;display:flex;justify-content:flex-end}
          .link{font-size:12px;color:#7dd3fc;text-decoration:none;border-bottom:1px dashed rgba(125,211,252,.45)}
        `}),r.jsxs("div",{className:"tasks-container",children:[r.jsxs("div",{className:"tasks-header",children:[r.jsxs("div",{className:"brand","aria-label":"Koop Strategic Advisory",children:[r.jsx("div",{className:"logo","aria-hidden":"true",children:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M12 2L20 6V18L12 22L4 18V6L12 2Z",stroke:"white",strokeWidth:"2"}),r.jsx("path",{d:"M12 7V17",stroke:"white",strokeWidth:"2"}),r.jsx("path",{d:"M7 9L12 12L17 9",stroke:"white",strokeWidth:"2"})]})}),r.jsx("h1",{children:"Tablero de Tareas"})]}),r.jsxs("div",{className:"toolbar",role:"search",children:[r.jsx("div",{className:"field",children:r.jsx("input",{className:"tasks-input",type:"search",placeholder:"Buscar por asunto, cliente o radicado…","aria-label":"Buscar",value:t,onChange:x=>a(x.target.value)})}),r.jsx("div",{className:"field",children:r.jsxs("select",{className:"tasks-select","aria-label":"Usuario actual",value:i,onChange:x=>o(x.target.value),children:[r.jsx("option",{value:"derly",children:"Derly Ramírez (Abogada)"}),r.jsx("option",{value:"juan",children:"Juan F. Rey (Socio)"}),r.jsx("option",{value:"valentina",children:"Valentina Martínez (Asistente)"})]})}),r.jsx("div",{className:"field",children:r.jsxs("select",{className:"tasks-select","aria-label":"Estado",value:s,onChange:x=>l(x.target.value),children:[r.jsx("option",{value:"all",children:"Todos los estados"}),r.jsx("option",{value:"pendiente",children:"Pendiente"}),r.jsx("option",{value:"en-curso",children:"En curso"}),r.jsx("option",{value:"hecho",children:"Hecho"})]})})]})]}),r.jsxs("main",{className:"grid","aria-live":"polite",children:[r.jsxs("aside",{className:"sidebar panel",children:[r.jsx("h2",{children:"Filtros rápidos"}),r.jsxs("div",{className:"chips",children:[r.jsx("button",{className:"chip",onClick:()=>l("all"),children:"Hoy"}),r.jsx("button",{className:"chip",onClick:()=>l("all"),children:"Vencidos"}),r.jsx("button",{className:"chip",onClick:()=>l("all"),children:"Alta prioridad"}),r.jsx("button",{className:"chip",onClick:()=>l("all"),children:"Cliente corporativo"})]}),r.jsx("h2",{style:{marginTop:18},children:"Vistas"}),r.jsxs("div",{className:"chips",children:[r.jsx("button",{className:"chip","data-active":c?"true":"false",onClick:()=>d(!0),children:"Mis tareas"}),r.jsx("button",{className:"chip","data-active":c?"false":"true",onClick:()=>d(!1),children:"Todas"})]})]}),r.jsxs("section",{className:"board panel",children:[r.jsxs("div",{className:"board-header",children:[r.jsx("h3",{children:c?"Mis tareas":"Todas las tareas"}),r.jsx("span",{className:"count",children:g})]}),y.length===0?r.jsxs("div",{className:"empty",children:[r.jsxs("svg",{width:"72",height:"72",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M4 7H20V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7Z",stroke:"#67e8f9",strokeWidth:"1.5"}),r.jsx("path",{d:"M9 3H15V7H9V3Z",stroke:"#67e8f9",strokeWidth:"1.5"}),r.jsx("path",{d:"M8 12H16",stroke:"#94a3b8",strokeWidth:"1.5"}),r.jsx("path",{d:"M8 16H13",stroke:"#94a3b8",strokeWidth:"1.5"})]}),r.jsxs("div",{children:[r.jsx("strong",{children:"No tienes tareas asignadas"}),r.jsx("p",{style:{margin:".35rem 0 0",fontSize:14,color:"#a5b4fc"},children:"Cuando te asignen una tarea aparecerá aquí."})]})]}):r.jsx("div",{className:"cards",children:y.map(x=>{const w=Ux[x.assignee]||{name:x.assignee,initials:(x.assignee||"?").slice(0,2).toUpperCase(),color:"#0ea5e9"},f=x.priority==="alta"?"high":x.priority==="media"?"medium":"low",h=x.status==="en-curso"?"En curso":x.status==="hecho"?"Hecho":"Pendiente";return r.jsxs("article",{className:"card",role:"article","aria-label":x.title,children:[r.jsx("h4",{className:"title",children:x.title}),r.jsxs("div",{className:"meta",children:[r.jsxs("span",{className:"badge","data-variant":f,children:["Prioridad: ",x.priority]}),r.jsxs("span",{className:"badge","data-variant":"due",children:[Hx(x.due)?"Vencida":"Vence",": ",Kx(x.due)]}),r.jsxs("span",{className:"badge",children:["Estado: ",h]}),x.radicado?r.jsxs("span",{className:"badge",children:["Radicado: ",x.radicado]}):null,r.jsxs("span",{className:"badge",children:["Cliente: ",x.client]}),(x.tags||[]).map(v=>r.jsx("span",{className:"badge",children:v},v))]}),r.jsxs("div",{className:"assignee","aria-label":"Responsable",children:[r.jsx("div",{className:"avatar",style:{background:w.color},"aria-hidden":"true",children:w.initials}),r.jsxs("small",{children:["Asignada a ",r.jsx("strong",{children:w.name})]})]})]},x.id)})}),r.jsx("div",{className:"footer-actions",children:r.jsx("button",{className:"link",onClick:()=>u(x=>!x),children:"(Demo) Alternar escenario sin tareas"})})]})]})]})]})}):r.jsx("div",{className:"dash-page",style:{padding:40},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Esta sección está disponible solo para administradores."})]})})}async function xh({limit:e,subfolder:n}={}){const t={};typeof e=="number"&&(t.limit=e),n&&(t.subfolder=n);const{data:a}=await ke.get("/docs/recent",{params:t});return a}async function Tl(e,{subfolder:n}={}){if(!e)throw new Error("Archivo requerido");const t=new FormData;t.append("file",e),n&&t.append("subfolder",n);const{data:a}=await ke.post("/docs/upload",t,{headers:{"Content-Type":"multipart/form-data"}});return a}async function vh(e,n=600){if(!e)throw new Error("Key requerida");const t={key:e,expires:n},{data:a}=await ke.get("/docs/download-url",{params:t});return a}async function dd(e){const n=typeof e=="string"?{subfolder:e}:e||{},{data:t}=await ke.post("/docs/folder",n);return t}const pd=["admin","user"];function Wx(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=pd.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>pd.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function qx(e){return Wx(e==null?void 0:e.roles).includes("admin")}function Yx(){const{user:e}=Ve(),n=qx(e),[t,a]=b.useState([]),[i,o]=b.useState(!1),[s,l]=b.useState(null),[c,d]=b.useState(null),[p,u]=b.useState(!1),[m,y]=b.useState(""),[g,x]=b.useState(null),[w,f]=b.useState(!1),[h,v]=b.useState(null),[j,N]=b.useState([]),[R,D]=b.useState(!1),[z,F]=b.useState(null),[S,H]=b.useState(""),[J,q]=b.useState(!1),[Q,on]=b.useState(null),[pe,Be]=b.useState(""),[L,W]=b.useState([]),[T,B]=b.useState(!1),[P,ee]=b.useState(null),[V,se]=b.useState(null),[te,xe]=b.useState(!1),[hn,E]=b.useState(!1),A=async()=>{var C,U;if(n){o(!0),l(null);try{const Z=await Al(),K=Array.isArray(Z==null?void 0:Z.items)?Z.items:[];a(K)}catch(Z){l(((U=(C=Z==null?void 0:Z.response)==null?void 0:C.data)==null?void 0:U.message)||(Z==null?void 0:Z.message)||"No se pudo cargar la lista de clientes")}finally{o(!1)}}};b.useEffect(()=>{A()},[n]);const _=b.useMemo(()=>{const C=String(m||"").trim().toLowerCase();return C?t.filter(U=>[U.name,U.email,U.documentNumber,U.phone,U.id].map(Z=>String(Z||"").toLowerCase()).some(Z=>Z.includes(C))):t},[t,m]),$=C=>{const U=t.find(Z=>Z.id===C);return(U==null?void 0:U.assignedAdmin)||null},ae=async C=>{var U,Z;v(C),f(!0),F(null),D(!0);try{const K=await gh(),Hi=(Array.isArray(K==null?void 0:K.items)?K.items:[]).filter(In=>(Array.isArray(In.roles)?In.roles:[In.roles]).map(Ah=>String(Ah||"").toLowerCase()).includes("admin"));N(Hi.map(In=>({id:In.id,name:In.name||In.email||In.id,email:In.email})));const ur=$(C.id);H((ur==null?void 0:ur.id)||"")}catch(K){F(((Z=(U=K==null?void 0:K.response)==null?void 0:U.data)==null?void 0:Z.message)||(K==null?void 0:K.message)||"No se pudo cargar administradores")}finally{D(!1)}},qe=async()=>{var C,U;try{const Z=S||"";await Px(h.id,Z),await A(),f(!1),v(null)}catch(Z){F(((U=(C=Z==null?void 0:Z.response)==null?void 0:C.data)==null?void 0:U.message)||(Z==null?void 0:Z.message)||"No se pudo asignar")}},re=C=>{d({id:C.id,name:C.name||"",email:C.email||"",documentNumber:C.documentNumber||"",phone:C.phone||""})},Zi=async()=>{var U,Z;if(!c)return;const C={name:String(c.name||"").trim(),documentNumber:String(c.documentNumber||"").trim(),phone:String(c.phone||"").trim()};try{u(!0),l(null);const K=await Lx(c.id,C),jn=(K==null?void 0:K.client)||null;jn&&a(Hi=>Hi.map(ur=>ur.id===jn.id?{...ur,...jn}:ur)),d(null)}catch(K){l(((Z=(U=K==null?void 0:K.response)==null?void 0:U.data)==null?void 0:Z.message)||(K==null?void 0:K.message)||"No se pudo guardar la informacion")}finally{u(!1)}},pa=C=>{const U=String((C==null?void 0:C.documentNumber)||(C==null?void 0:C.id)||"").trim();return U?`clientes/${U}`:"clientes/sin-id"},Ki=async C=>{var U,Z;B(!0),ee(null),se(null);try{const K=await xh({limit:50,subfolder:C});W(Array.isArray(K==null?void 0:K.items)?K.items:[]),K!=null&&K.warning&&se(K.warning)}catch(K){ee(((Z=(U=K==null?void 0:K.response)==null?void 0:U.data)==null?void 0:Z.message)||(K==null?void 0:K.message)||"No se pudieron cargar archivos")}finally{B(!1)}},Nh=async C=>{const U=pa(C);on(C),Be(U),q(!0),await Ki(U)},Il=async C=>{const U=pa(C);try{await dd({subfolder:U})}catch{}await Nh(C)},Ch=async C=>{var U,Z;if(!(!C||!pe))try{xe(!0),ee(null),await Tl(C,{subfolder:pe}),await Ki(pe)}catch(K){ee(((Z=(U=K==null?void 0:K.response)==null?void 0:U.data)==null?void 0:Z.message)||(K==null?void 0:K.message)||"No se pudo subir el archivo")}finally{xe(!1)}},Sh=async()=>{var C,U;if(pe)try{E(!0),ee(null),await dd({subfolder:pe}),await Ki(pe)}catch(Z){ee(((U=(C=Z==null?void 0:Z.response)==null?void 0:C.data)==null?void 0:U.message)||(Z==null?void 0:Z.message)||"No se pudo crear la carpeta")}finally{E(!1)}},Eh=async(C,U)=>{try{const{url:Z}=await vh(C,600);window.open(Z||U,"_blank")}catch{U&&window.open(U,"_blank")}};return n?r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",paddingLeft:16,paddingRight:16,paddingBottom:16},children:[r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[r.jsx("style",{children:`
          .only-mobile { display: block; }
          .only-desktop { display: none; }
          @media (min-width: 768px) {
            .only-mobile { display: none; }
            .only-desktop { display: block; }
          }
          @media (max-width: 767px) {
            .mobile-list { display: grid; gap: 10px; }
          }
          /* Header layout */
          .clients-header { display: grid; gap: 10px; align-items: center; }
          .clients-actions { display: grid; grid-template-columns: 1fr auto; gap: 8px; }
          @media (min-width: 768px) {
            .clients-header { grid-template-columns: 1fr auto; }
          }
          @media (max-width: 767px) {
            .clients-actions { grid-template-columns: 1fr; }
            .clients-actions .btn { width: 100%; }
          }
          .mobile-item { border: 1px solid rgba(148,163,184,0.35); border-radius: 10px; overflow: hidden; background: #1b263b; }
          .mobile-item-header { display: flex; align-items: center; justify-content: space-between; padding: 0; cursor: pointer; height: 44px; }
          .mobile-item .btn { border-radius: 10px; width: 100%; }
          .mobile-item-title { flex: 1; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left; padding: 0 12px; }
          .mobile-item-details { padding: 10px 12px; border-top: 1px solid rgba(148,163,184,0.25); }
          .kv { display: grid; grid-template-columns: 120px 1fr; gap: 8px; font-size: 14px; }
          .kv span { opacity: 0.9; }
          @media (max-width: 480px) {
            .kv { grid-template-columns: 1fr; }
            .kv span { font-size: 12px; opacity: 0.8; }
          }
        `}),r.jsxs("div",{className:"dash-header clients-header",style:{marginBottom:16},children:[r.jsx("div",{className:"dash-title",children:"Clientes activos"}),r.jsxs("div",{className:"clients-actions",children:[r.jsx("input",{type:"search",placeholder:"Buscar por nombre, email, cedula o celular",value:m,onChange:C=>y(C.target.value),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"6px 10px"}}),r.jsx("button",{className:"btn btn-secondary",onClick:A,disabled:i,children:i?"Actualizando...":"Refrescar"})]})]}),s&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:12,borderRadius:8,marginBottom:16},children:s}),r.jsx("div",{className:"dash-item only-desktop",style:{overflowX:"auto"},children:r.jsxs("table",{className:"me-table",style:{minWidth:820},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nombre"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Cedula"}),r.jsx("th",{children:"Celular"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[_.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:5,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay clientes activos para mostrar"})}),_.map(C=>{var U,Z;return r.jsxs("tr",{children:[r.jsxs("td",{children:[r.jsx("div",{children:C.name||"-"}),r.jsxs("div",{style:{fontSize:12,opacity:.75},children:["Admin asignado: ",((U=C.assignedAdmin)==null?void 0:U.name)||"—"]})]}),r.jsx("td",{children:C.email||"-"}),r.jsx("td",{children:C.documentNumber||"-"}),r.jsx("td",{children:C.phone||"-"}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>ae(C),title:$(C.id)?`Asignado a ${((Z=$(C.id))==null?void 0:Z.name)||""}`:"Asignar administrador",children:$(C.id)?"Asignado":"Asignar"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Il(C),children:"Archivos"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>re(C),children:"Editar"})]})})]},C.id)})]})]})}),r.jsxs("div",{className:"dash-item only-mobile mobile-list",children:[_.length===0&&r.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay clientes activos para mostrar"}),_.map(C=>{var Z,K;const U=g===C.id;return r.jsxs("div",{className:"mobile-item",children:[r.jsxs("button",{type:"button",className:"btn btn-primary btn-sm mobile-item-header",onClick:()=>x(jn=>jn===C.id?null:C.id),"aria-expanded":U,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("div",{className:"mobile-item-title",children:C.name||"-"}),r.jsx("div",{style:{opacity:.9,fontSize:12,paddingRight:10},children:U?"▲":"▼"})]}),U&&r.jsxs("div",{className:"mobile-item-details",children:[r.jsxs("div",{className:"kv",children:[r.jsx("span",{children:"Email"}),r.jsx("div",{children:C.email||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Cédula"}),r.jsx("div",{children:C.documentNumber||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Celular"}),r.jsx("div",{children:C.phone||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Admin asignado"}),r.jsx("div",{children:((Z=C.assignedAdmin)==null?void 0:Z.name)||"—"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10},children:[r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>ae(C),style:{marginRight:8},title:$(C.id)?`Asignado a ${((K=$(C.id))==null?void 0:K.name)||""}`:"Asignar administrador",children:$(C.id)?"Asignado":"Asignar"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Il(C),style:{marginRight:8},children:"Archivos"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>re(C),children:"Editar"})]})]})]},C.id)})]})]}),c&&r.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:C=>{C.target===C.currentTarget&&d(null)},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:560,padding:16},children:[r.jsx("div",{className:"dash-header",style:{marginBottom:12},children:r.jsx("div",{className:"dash-title",children:"Editar cliente"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:12},children:[r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Nombre"}),r.jsx("input",{value:c.name,onChange:C=>d(U=>({...U,name:C.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Email"}),r.jsx("input",{type:"email",value:c.email,readOnly:!0,style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Cedula"}),r.jsx("input",{value:c.documentNumber,onChange:C=>d(U=>({...U,documentNumber:C.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Celular"}),r.jsx("input",{value:c.phone,onChange:C=>d(U=>({...U,phone:C.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>d(null),disabled:p,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:Zi,disabled:p,children:p?"Guardando...":"Guardar cambios"})]})]})}),J&&r.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:55,padding:16},onClick:C=>{C.target===C.currentTarget&&q(!1)},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:900},children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("div",{className:"dash-title",children:["Archivos — ",(Q==null?void 0:Q.name)||(Q==null?void 0:Q.email)||(Q==null?void 0:Q.id)]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>q(!1),children:"Cerrar"})]}),r.jsxs("div",{className:"dash-item",style:{marginBottom:10},children:[r.jsxs("div",{style:{fontSize:13,opacity:.85},children:["Carpeta S3: ",r.jsx("code",{children:pe})]}),r.jsxs("div",{style:{marginTop:8,display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[r.jsx("input",{type:"file",onChange:C=>{var U;return Ch((U=C.target.files)==null?void 0:U[0])},disabled:te||hn}),r.jsx("span",{style:{fontSize:13,opacity:.8},children:te?"Subiendo...":"Sube para crear/ver la carpeta"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:Sh,disabled:hn||te,children:hn?"Creando...":"Crear carpeta ahora"})]}),P&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6,marginTop:8},children:P}),V&&r.jsxs("div",{style:{background:"#78350f",color:"#fde68a",padding:8,borderRadius:6,marginTop:8},children:["Aviso: ",String(V)==="S3_LIST_FORBIDDEN"?"No hay permisos para listar el bucket. Puedes descargar si conservas el enlace.":String(V)]})]}),r.jsx("div",{className:"dash-item",style:{overflowX:"auto"},children:r.jsxs("table",{className:"me-table",style:{minWidth:680},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Fecha"}),r.jsx("th",{children:"Nombre"}),r.jsx("th",{children:"Tipo"}),r.jsx("th",{children:"Tamaño"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[L.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:5,style:{textAlign:"center",padding:10},children:T?"Cargando...":"No hay archivos para mostrar"})}),L.map(C=>{const U=C.lastModified?new Date(C.lastModified):C.createdTime?new Date(C.createdTime):null,Z=C.name||(C.key||"").split("/").pop(),K=typeof C.size=="number"?Math.max(1,Math.round(C.size/1024)):null,jn=C.mimeType||(Z&&Z.toLowerCase().endsWith(".pdf")?"application/pdf":void 0);return r.jsxs("tr",{children:[r.jsx("td",{children:U?U.toLocaleString():"-"}),r.jsx("td",{title:Z,children:Z}),r.jsx("td",{children:jn?jn.split("/")[1]||jn:"-"}),r.jsx("td",{children:K?`${K} KB`:"-"}),r.jsx("td",{children:r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Eh(C.key,C.downloadURL||C.downloadUrl||C.webContentLink||C.webViewLink),children:"Descargar"})})]},C.key||C.id)})]})]})})]})}),w&&h&&r.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:C=>{C.target===C.currentTarget&&(f(!1),v(null))},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:560},children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Asignar administrador"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:10},children:[r.jsxs("div",{style:{fontSize:14,opacity:.85},children:["Cliente: ",r.jsx("strong",{children:h.name})," ",r.jsxs("span",{style:{opacity:.7},children:["(",h.id,")"]})]}),z&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6},children:z}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Selecciona un admin"}),r.jsxs("select",{value:S,onChange:C=>H(C.target.value),disabled:R,style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"},children:[r.jsx("option",{value:"",children:"— Sin asignar —"}),j.map(C=>r.jsxs("option",{value:C.id,children:[C.name," — ",C.email]},C.id))]})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>{f(!1),v(null)},disabled:R,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:qe,disabled:R,children:"Guardar"})]})]})})]}):r.jsx("div",{className:"dash-page",style:{padding:40},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Esta seccion esta disponible solo para administradores."})]})})}const bh="koop.calendar.events";function ud(){if(typeof window>"u")return[];try{const e=window.localStorage.getItem(bh);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.filter(Boolean):[]}catch(e){return console.warn("[calendarStorage] load error",e),[]}}function Gx(e){if(!(typeof window>"u"))try{window.localStorage.setItem(bh,JSON.stringify(e??[]))}catch(n){console.warn("[calendarStorage] save error",n)}}const Jx="koop.calendar.events";function yh(){const[e,n]=b.useState(()=>ud());b.useEffect(()=>{const a=i=>{(i==null?void 0:i.key)===Jx&&n(ud())};return typeof window<"u"&&window.addEventListener("storage",a),()=>{typeof window<"u"&&window.removeEventListener("storage",a)}},[]);const t=b.useCallback(a=>{n(i=>{const o=typeof a=="function"?a(i):a;return Gx(o),o})},[]);return[e,t]}function Ui(e){if(e==null)return"";try{return String(e).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0000-\u001F\u007F-\u009F]/g,"").replace(/\u00A0/g," ").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/\uFFFD/g,"").replace(/\s+/g," ").trim().toUpperCase()}catch{return String(e).toUpperCase()}}const Qx="documentos_iniciales";function hd(e){return String(e||"").trim()}function wh({buttonLabel:e="Subir documento",buttonClassName:n="btn btn-primary",defaultFolder:t=Qx,allowFolderInput:a=!0,onUploaded:i}){const[o,s]=b.useState(!1),[l,c]=b.useState(null),[d,p]=b.useState(t||""),[u,m]=b.useState(()=>Date.now()),[y,g]=b.useState(null),[x,w]=b.useState(null),[f,h]=b.useState(!1),v=()=>{c(null),p(t||""),m(Date.now()),g(null),w(null),h(!1)},j=()=>{v(),s(!0)},N=()=>{s(!1),v()},R=z=>{var S;const F=((S=z.target.files)==null?void 0:S[0])||null;c(F),g(null),F&&w(null)},D=async z=>{var S,H,J;if(z.preventDefault(),!l){g("Selecciona un archivo");return}const F=hd(a?d:t);try{h(!0),g(null);const q=await Tl(l,{subfolder:F||void 0});if(w((S=q==null?void 0:q.file)!=null&&S.key?"Archivo subido correctamente":"Archivo subido"),c(null),m(Date.now()),typeof i=="function")try{i(q)}catch{}}catch(q){g(((J=(H=q==null?void 0:q.response)==null?void 0:H.data)==null?void 0:J.message)||(q==null?void 0:q.message)||"No se pudo subir el archivo")}finally{h(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:n,onClick:j,children:e}),o&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:16},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:480,position:"relative"},children:[r.jsx("button",{type:"button",onClick:N,style:{position:"absolute",top:12,right:12,background:"transparent",border:"none",color:"#334155",fontSize:20,cursor:"pointer"},"aria-label":"Cerrar",children:"X"}),r.jsx("h3",{className:"dash-title",style:{marginBottom:16},children:"Subir documento"}),r.jsxs("form",{onSubmit:D,children:[r.jsxs("div",{style:{marginBottom:12},children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Archivo"}),r.jsx("input",{type:"file",onChange:R,disabled:f,required:!0,style:{width:"100%"}},u)]}),a?r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Subcarpeta (opcional)"}),r.jsx("input",{type:"text",placeholder:t||"documentos_iniciales",value:d,onChange:z=>p(z.target.value),disabled:f,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #cbd5f5"}})]}):r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Carpeta destino"}),r.jsx("input",{type:"text",value:t||"",readOnly:!0,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #cbd5f5",background:"#1f2937",color:"#e2e8f0"}})]}),y&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6,marginBottom:12},children:y}),x&&r.jsx("div",{style:{background:"#14532d",color:"#bbf7d0",padding:8,borderRadius:6,marginBottom:12},children:x}),r.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"flex-end"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:N,disabled:f,children:"Cancelar"}),r.jsx("button",{type:"submit",className:"btn btn-primary",disabled:f||!l,children:f?"Subiendo...":"Subir"})]})]})]})})]})}const Xx=["Lun","Mar","Mie","Jue","Vie","Sab","Dom"];function e2(e){const n=e.getFullYear(),t=e.getMonth(),i=(new Date(n,t,1).getDay()+6)%7,o=new Date(n,t+1,0).getDate(),s=[];let l=1-i;for(let c=0;c<6;c+=1){const d=[];for(let p=0;p<7;p+=1){const u=new Date(n,t,l),m=l>=1&&l<=o;d.push({date:u,inCurrentMonth:m}),l+=1}s.push(d)}return s}function n2(e){if(!e)return null;const n=e.getFullYear(),t=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${t}-${a}`}function jh({value:e,onChange:n,onDateSelect:t,events:a=[],className:i=""}){const o=b.useMemo(()=>new Date,[]),[s,l]=b.useState(()=>new Date(o.getFullYear(),o.getMonth(),1)),[c,d]=b.useState(o);b.useEffect(()=>{e instanceof Date&&(d(e),l(new Date(e.getFullYear(),e.getMonth(),1)))},[e]);const p=e instanceof Date?e:c,u=typeof n=="function"?n:t,m=b.useMemo(()=>s.toLocaleDateString("es-ES",{month:"long",year:"numeric"}),[s]),y=b.useMemo(()=>e2(s),[s]),g=b.useMemo(()=>{const h=new Map;return(a||[]).forEach(v=>{const j=(v==null?void 0:v.date)||(v==null?void 0:v.dateKey);j&&(h.has(j)||h.set(j,[]),h.get(j).push(v))}),h},[a]),x=h=>{h instanceof Date&&(e instanceof Date||d(h),typeof u=="function"&&u(h))},w=h=>{l(v=>new Date(v.getFullYear(),v.getMonth()+h,1))},f=["dash-item",i].filter(Boolean).join(" ").trim();return r.jsxs("div",{className:f,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>w(-1),"aria-label":"Mes anterior",children:"◀"}),r.jsx("div",{style:{fontWeight:600,textTransform:"capitalize"},children:m}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>w(1),"aria-label":"Mes siguiente",children:"▶"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:6,marginBottom:8},children:Xx.map(h=>r.jsx("div",{style:{textAlign:"center",fontSize:12,fontWeight:600,opacity:.75},children:h},h))}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:6},children:y.map((h,v)=>h.map(({date:j,inCurrentMonth:N},R)=>{const D=n2(j),z=j.toDateString()===o.toDateString(),F=j.toDateString()===p.toDateString(),S=g.get(D)||[],H={position:"relative",borderRadius:8,border:"1px solid rgba(148, 163, 184, 0.25)",padding:"8px 0",textAlign:"center",fontSize:13,cursor:N?"pointer":"default",opacity:N?1:.35,background:"#1f2937",color:"#e2e8f0",transition:"transform 0.12s ease"};return z&&(H.border="1px solid #38bdf8"),F&&(H.background="linear-gradient(135deg, #38b2ac, #0ea5e9)",H.color="#0f172a",H.fontWeight=700),N&&S.length>0&&!F&&(H.background="#f5b891",H.color="#0f172a",H.border="1px solid rgba(245, 184, 145, 0.65)",H.fontWeight=600),r.jsxs("button",{type:"button",style:H,disabled:!N,onClick:()=>N&&x(j),children:[j.getDate(),S.length>0&&r.jsx("span",{style:{position:"absolute",bottom:4,left:"50%",transform:"translateX(-50%)",width:6,height:6,borderRadius:"999px",background:F?"#0f172a":N?"#7c3a00":"#38bdf8"}})]},`${v}-${R}`)}))})]})}function r2({title:e="Asistente IA",systemPrompt:n}){const[t,a]=b.useState(()=>[]),[i,o]=b.useState(""),[s,l]=b.useState(!1),c=b.useRef(null),d=b.useMemo(()=>i.trim().length>0&&!s,[i,s]),p=()=>{try{const y=c.current;y&&(y.scrollTop=y.scrollHeight)}catch{}},u=async()=>{var x,w,f,h,v,j,N,R,D;const y=i.trim();if(!y)return;const g=[...t,{role:"user",content:y}];a(g),o(""),l(!0),setTimeout(p,0);try{const z={messages:[...n?[{role:"system",content:n}]:[],...g]},{data:F}=await ke.post("/ai/chat",z),S=(F==null?void 0:F.reply)||((x=F==null?void 0:F.message)==null?void 0:x.content)||((h=(f=(w=F==null?void 0:F.choices)==null?void 0:w[0])==null?void 0:f.message)==null?void 0:h.content)||((N=(j=(v=F==null?void 0:F.choices)==null?void 0:v[0])==null?void 0:j.delta)==null?void 0:N.content)||"",H=String(S||"").trim()||"Lo siento, no obtuve respuesta.";a(J=>[...J,{role:"assistant",content:H}]),setTimeout(p,0)}catch(z){const F=((D=(R=z==null?void 0:z.response)==null?void 0:R.data)==null?void 0:D.message)||(z==null?void 0:z.message)||"Error al consultar el asistente";a(S=>[...S,{role:"assistant",content:`⚠️ ${F}`}]),setTimeout(p,0)}finally{l(!1)}},m=y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),d&&u())};return r.jsxs("div",{className:"dash-item",style:{display:"flex",flexDirection:"column",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("div",{style:{fontWeight:600},children:e}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>a([]),disabled:s,children:"Limpiar"})]}),r.jsxs("div",{ref:c,style:{background:"#0f172a",border:"1px solid rgba(148,163,184,0.25)",borderRadius:12,padding:10,minHeight:180,maxHeight:260,overflowY:"auto",display:"flex",flexDirection:"column",gap:8},children:[t.length===0&&r.jsx("div",{style:{opacity:.7},children:"Haz una pregunta para comenzar…"}),t.map((y,g)=>r.jsx("div",{style:{display:"flex",justifyContent:y.role==="user"?"flex-end":"flex-start"},children:r.jsx("div",{style:{maxWidth:"80%",background:y.role==="user"?"rgba(34,211,238,0.12)":"rgba(148,163,184,0.12)",border:"1px solid rgba(148,163,184,0.25)",color:"#e2e8f0",padding:"8px 10px",borderRadius:12,whiteSpace:"pre-wrap"},children:y.content})},g))]}),r.jsxs("div",{style:{display:"grid",gap:8},children:[r.jsx("textarea",{className:"textarea",rows:3,placeholder:"Escribe tu mensaje (Enter para enviar)",value:i,onChange:y=>o(y.target.value),onKeyDown:m,disabled:s}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>o(""),disabled:s,children:"Borrar"}),r.jsx("button",{type:"button",className:"btn btn-primary",onClick:u,disabled:!d,children:s?"Enviando…":"Enviar"})]})]})]})}function t2({label:e,value:n,hint:t}){return r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"text-sm opacity-70",style:{fontSize:12,opacity:.8},children:e}),r.jsx("div",{className:"text-2xl font-semibold",style:{fontSize:28,fontWeight:700},children:n}),t&&r.jsx("div",{className:"text-xs opacity-60",style:{fontSize:12,opacity:.7},children:t})]})}function kh({refreshKey:e=0}){const{user:n}=Ve(),t=b.useMemo(()=>{var s,l,c,d;const a=Array.isArray(n==null?void 0:n.driveFolders)?n.driveFolders.filter(p=>p&&p.url):[],i=(l=(s=import.meta)==null?void 0:s.env)==null?void 0:l.VITE_DEFAULT_DRIVE_FOLDER_URL,o=((d=(c=import.meta)==null?void 0:c.env)==null?void 0:d.VITE_DEFAULT_DRIVE_FOLDER_NAME)||"Carpeta KOOP";return(!a||a.length===0)&&i?[{name:o,url:i}]:a},[n,e]);return r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Documentos recientes"}),t.length===0&&r.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin carpetas asignadas."}),t.length>0&&r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:8},children:t.map((a,i)=>r.jsxs("li",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.name||"Carpeta de Drive"}),r.jsx("div",{className:"muted",style:{fontSize:12,opacity:.8},children:a.url})]}),r.jsx("a",{className:"btn btn-primary",href:a.url,target:"_blank",rel:"noreferrer","data-drive-folder-url":a.url,children:"Abrir carpeta"})]},(a.url||"")+i))})]})}function a2(e){if(!(e instanceof Date))return null;const n=e.getFullYear(),t=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${t}-${a}`}function i2(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`evt-${Date.now()}-${Math.random().toString(16).slice(2)}`}function o2(){const{user:e}=Ve(),n=Ui((e==null?void 0:e.name)||"Dashboard"),[t,a]=b.useState(null),[i,o]=b.useState(!0),[s,l]=b.useState(null),[c,d]=b.useState(0),[p,u]=yh(),[m,y]=b.useState(()=>new Date),g=b.useMemo(()=>a2(m),[m]),[x,w]=b.useState(""),[f,h]=b.useState(!0),[v,j]=b.useState(""),[N,R]=b.useState([]),[D,z]=b.useState(!1),[F,S]=b.useState(0),[H,J]=b.useState(!1),q=b.useRef(null),[Q,on]=b.useState([]),[pe,Be]=b.useState(!1),[L,W]=b.useState(null),T=b.useMemo(()=>Array.isArray(p)?p.length:0,[p]);b.useEffect(()=>{(async()=>{var A;try{const{data:_}=await ke.get("/kpis/overview");a(_)}catch(_){l(((A=_==null?void 0:_.response)==null?void 0:A.data)||(_==null?void 0:_.message))}finally{o(!1)}})()},[]),b.useEffect(()=>{let A=!1;return(async()=>{var _,$;try{Be(!0),W(null);const ae=await Al();if(A)return;const qe=Array.isArray(ae==null?void 0:ae.items)?ae.items:[];on(qe.map(re=>({id:String((re==null?void 0:re.id)||(re==null?void 0:re._id)||(re==null?void 0:re.documentNumber)||"").trim(),name:(re==null?void 0:re.name)||(re==null?void 0:re.fullName)||(re==null?void 0:re.email)||"Cliente sin nombre",email:re==null?void 0:re.email})).filter(re=>re.id))}catch(ae){A||W((($=(_=ae==null?void 0:ae.response)==null?void 0:_.data)==null?void 0:$.message)||(ae==null?void 0:ae.message)||"No se pudo cargar clientes")}finally{A||Be(!1)}})(),()=>{A=!0}},[]),b.useEffect(()=>{if(!H)return;const A=$=>{try{q.current&&!q.current.contains($.target)&&J(!1)}catch{}},_=$=>{$.key==="Escape"&&J(!1)};return typeof window<"u"&&(window.addEventListener("click",A),window.addEventListener("keydown",_)),()=>{typeof window<"u"&&(window.removeEventListener("click",A),window.removeEventListener("keydown",_))}},[H]);const B=b.useMemo(()=>{if(!v)return Q;const A=v.trim().toLowerCase();return Q.filter(_=>[_.id,_.name,_.email].some($=>String($||"").toLowerCase().includes(A)))},[Q,v]),P=b.useMemo(()=>p.filter(_=>(_==null?void 0:_.date)===g).sort((_,$)=>(_.createdAt||"").localeCompare($.createdAt||"")),[p,g]),ee=A=>{const _=String(A);R($=>$.includes(_)?$.filter(ae=>ae!==_):[...$,_])},V=()=>{const A=x.trim();if(!g||!A||!f&&N.length===0)return;const _={id:i2(),date:g,note:A,audience:f?{type:"all"}:{type:"clients",clientIds:N.map($=>String($).trim())},createdAt:new Date().toISOString(),createdBy:(e==null?void 0:e.id)||(e==null?void 0:e.sub)||"admin"};u($=>[...$,_]),w(""),R([]),h(!0),z(!1)},se={padding:"10px 14px",fontSize:"14px",minHeight:"52px",borderRadius:"10px",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},te=[{key:"clientes",label:"Clientes",to:"/admin/clientes-activos"},{key:"procesos",label:"Procesos",to:"/mis-casos"},{key:"publicaciones",label:"Publicaciones Procesales",href:"https://koop.com/publicaciones-procesales"}],xe=b.useMemo(()=>m==null?void 0:m.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),[m]),hn=A=>{y(A),typeof window<"u"&&window.innerWidth<1024&&z(!0)},E=()=>{if(!g||P.length===0)return;const A=`¿Borrar todas las anotaciones del ${xe}?`;typeof window<"u"&&!window.confirm(A)||u(_=>_.filter($=>($==null?void 0:$.date)!==g))};return b.useEffect(()=>{if(!D){S(0);return}const A=()=>{try{const $=window.visualViewport;if($){const ae=Math.max(0,Math.round(window.innerHeight-$.height));S(ae)}else S(0)}catch{S(0)}};A();const _=window.visualViewport;return _&&_.addEventListener("resize",A),window.addEventListener("resize",A),()=>{_&&_.removeEventListener("resize",A),window.removeEventListener("resize",A)}},[D]),r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[r.jsxs("div",{className:"dash-card",style:{maxWidth:1200},children:[r.jsx("style",{children:`
          .admin-main-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
          @media (min-width: 1024px) { .admin-main-grid { grid-template-columns: repeat(3, 1fr); } }
          .admin-main-left { grid-column: span 1; display: flex; flex-direction: column; gap: 16px; }
          @media (min-width: 1024px) { .admin-main-left { grid-column: span 2; } }
          .admin-main-right { display: flex; flex-direction: column; gap: 16px; }
          .admin-clients-list { max-height: 200px; overflow-y: auto; border: 1px solid rgba(148,163,184,0.35); border-radius: 8px; padding: 8px; }
          .admin-clients-item { display: flex; align-items: center; justify-content: space-between; padding: 6px 4px; border-bottom: 1px solid rgba(148,163,184,0.15); }
          .admin-clients-item:last-child { border-bottom: none; }
          /* Oculta el panel de redaccion en pantallas pequeñas para usar modal */
          @media (max-width: 1023px) { .compose-panel { display: none; } }
          /* Modal flotante para redaccion en móvil */
          .compose-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 16px; }
          .compose-modal { background: #0f172a; color: #e2e8f0; width: min(680px, 92vw); border-radius: 14px; padding: 16px; box-shadow: 0 10px 32px rgba(0,0,0,0.45); max-height: 100dvh; overflow: auto; }
          @media (min-width: 1024px) { .compose-overlay { display: none; } }
        `}),r.jsxs("div",{className:"dash-header",children:[r.jsx("div",{className:"dash-title",children:n}),r.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"flex-end"},children:r.jsx(wh,{buttonClassName:"btn btn-primary",allowFolderInput:!0,onUploaded:()=>d(A=>A+1)})})]}),r.jsxs("div",{className:"dash-item",style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx(O,{className:"btn btn-primary",to:"/admin/tareas",title:"Ver y gestionar tareas",children:`Tareas: (${T})`}),r.jsx(O,{className:"btn btn-primary btn-sm",to:"/admin/clientes-activos",title:"Clientes",children:"Clientes"}),r.jsxs("div",{style:{position:"relative"},ref:q,children:[r.jsx("button",{type:"button",className:"btn btn-orange btn-sm",onClick:()=>J(A=>!A),"aria-haspopup":"menu","aria-expanded":H?"true":"false",children:"Consultas"}),H&&r.jsxs("div",{role:"menu",className:"quick-menu",style:{position:"absolute",top:"calc(100% + 6px)",right:0,zIndex:1010,background:"#0f172a",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.25)",borderRadius:12,boxShadow:"0 10px 24px rgba(0,0,0,0.45)",minWidth:320,padding:8},onClick:A=>A.stopPropagation(),children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://consultaprocesos.ramajudicial.gov.co/Procesos/Index","_blank","noopener"),J(!1)},role:"menuitem",children:"1. Consulta de procesos Rama Judicial"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://publicacionesprocesales.ramajudicial.gov.co/","_blank","noopener"),J(!1)},role:"menuitem",children:"2. Publicaciones Procesales Rama Judicial"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://siugj.ramajudicial.gov.co/principalPortal/index.php","_blank","noopener"),J(!1)},role:"menuitem",children:"3. Siugj"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://consulta-web.fiscalia.gov.co/","_blank","noopener"),J(!1)},role:"menuitem",children:"4. Consultas Fiscalía"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start"},onClick:()=>{typeof window<"u"&&window.open("https://www.superfinanciera.gov.co/formulesuqueja/faces/consulta/jurisdiccional.xhtml","_blank","noopener"),J(!1)},role:"menuitem",children:"5. Consultas Jurisdiccionales SuperFinanciera"})]})]}),r.jsx(O,{className:"btn btn-secondary btn-sm",to:"/admin/usuarios",title:"Administrar usuarios",children:"Administrar usuarios"})]}),r.jsx("div",{className:"kpi-grid",style:{marginTop:16},children:r.jsx(t2,{label:"Casos activos",value:(Q==null?void 0:Q.length)??0})}),r.jsxs("div",{className:"admin-main-grid",style:{marginTop:16},children:[r.jsxs("div",{className:"admin-main-left",children:[r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Centro administrativo"}),r.jsx("p",{style:{marginBottom:12},children:"Supervisa la operacion del portal, gestiona usuarios y da seguimiento a la informacion mas reciente."}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx(O,{className:"btn btn-primary btn-sm",to:"/admin/usuarios",title:"Administrar usuarios",children:"Administrar usuarios"}),r.jsx(O,{className:"btn btn-secondary btn-sm",to:"/mi-expediente",title:"Revisar expedientes",children:"Revisar expedientes"})]})]}),r.jsx(jh,{value:m,onChange:hn,events:p}),r.jsx("div",{style:{display:"grid",gap:10},children:te.map(A=>r.jsx("div",{className:"dash-item",style:{padding:0,display:"flex",alignItems:"stretch"},children:A.to?r.jsx(O,{className:"btn btn-primary",to:A.to,style:se,children:A.label}):r.jsx("button",{type:"button",className:"btn btn-primary",style:se,onClick:()=>{typeof window<"u"&&A.href&&window.open(A.href,"_blank","noopener")},children:A.label})},A.key))})]}),r.jsxs("div",{className:"admin-main-right",children:[r.jsx(r2,{title:"Asistente IA",systemPrompt:"Eres un asistente interno de Koop Strategic Advisory. Responde de forma breve, clara y profesional."}),r.jsxs("div",{className:"dash-item compose-panel",children:[r.jsx("div",{className:"font-semibold",style:{fontWeight:600},children:xe||"Selecciona un dia"}),r.jsx("p",{style:{marginTop:4,fontSize:13,opacity:.8},children:"Registra recordatorios o publicaciones para clientes especificos o para todos."}),r.jsx("textarea",{value:x,onChange:A=>w(A.target.value),placeholder:"Agregar nota o detalle del evento",rows:4,style:{width:"100%",marginTop:12,background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:"10px 12px",resize:"vertical"}}),r.jsx("div",{style:{marginTop:12},children:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("input",{type:"checkbox",checked:f,onChange:A=>{h(A.target.checked),A.target.checked&&R([])}}),r.jsx("span",{children:"Publicar para todos los clientes"})]})}),!f&&r.jsxs("div",{style:{marginTop:12},children:[r.jsx("input",{type:"search",placeholder:"Buscar por nombre, email o ID",value:v,onChange:A=>j(A.target.value),style:{width:"100%",padding:"8px 12px",borderRadius:10,border:"1px solid rgba(148,163,184,0.35)",background:"#1b263b",color:"#e2e8f0"}}),L&&r.jsx("div",{style:{color:"#fecaca",background:"#7f1d1d",padding:8,borderRadius:8,marginTop:8},children:L}),r.jsxs("div",{className:"admin-clients-list",style:{marginTop:8},children:[pe&&r.jsx("div",{style:{opacity:.7},children:"Cargando clientes..."}),!pe&&B.length===0&&r.jsx("div",{style:{opacity:.7},children:"No se encontraron clientes"}),B.map(A=>{const _=N.includes(A.id);return r.jsxs("label",{className:"admin-clients-item",children:[r.jsxs("span",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("span",{style:{fontWeight:600},children:A.name}),r.jsx("span",{style:{fontSize:12,opacity:.75},children:A.id})]}),r.jsx("input",{type:"checkbox",checked:_,onChange:()=>ee(A.id)})]},A.id)})]}),N.length>0&&r.jsxs("div",{style:{marginTop:8,fontSize:12,opacity:.7},children:["Seleccionados: ",N.join(", ")]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{w(""),h(!0),R([])},children:"Limpiar"}),r.jsx("button",{type:"button",className:"btn btn-danger",onClick:E,disabled:!g||P.length===0,children:"Borrar anotaciones"}),r.jsx("button",{type:"button",className:"btn btn-primary",onClick:V,disabled:!x.trim()||!f&&N.length===0,children:"Guardar anotacion"})]}),P.length>0&&r.jsxs("div",{style:{marginTop:16},children:[r.jsx("div",{style:{fontWeight:600,marginBottom:8},children:"Anotaciones del dia"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:P.map(A=>{var _,$;return r.jsxs("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:[r.jsx("div",{style:{marginBottom:6},children:A.note}),r.jsx("div",{style:{fontSize:12,opacity:.7},children:((_=A.audience)==null?void 0:_.type)==="all"?"Visible para todos los clientes":`Visible para: ${Array.isArray(($=A.audience)==null?void 0:$.clientIds)&&A.audience.clientIds.length>0?A.audience.clientIds.join(", "):"—"}`})]},A.id)})})]})]}),r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Recordatorios del equipo"}),r.jsx("p",{style:{marginBottom:0},children:"Comparte novedades internas, carga reportes de gestion o establece tareas prioritarias para tu equipo desde esta seccion."})]}),r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Reproductor Spotify"}),r.jsx("iframe",{title:"Spotify administracion",src:"https://open.spotify.com/embed/playlist/1Zf1rz0XX6fyNxKOq4XvgN?utm_source=generator",width:"100%",height:"152",frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",style:{borderRadius:8}})]})]})]}),r.jsx("div",{style:{marginTop:16},children:r.jsx(kh,{refreshKey:c})}),s&&r.jsx("pre",{className:"text-red-600 text-sm mt-2",style:{color:"#fecaca",background:"#7f1d1d",padding:12,borderRadius:8,marginTop:12},children:typeof s=="string"?s:JSON.stringify(s,null,2)})]}),D&&r.jsx("div",{className:"compose-overlay",role:"dialog","aria-modal":"true",children:r.jsxs("div",{className:"compose-modal",style:{marginBottom:F>0?F:0,maxHeight:`calc(100dvh - ${F}px)`,paddingBottom:"calc(16px + env(safe-area-inset-bottom))"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[r.jsx("div",{style:{fontWeight:700},children:xe||"Selecciona un dia"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>z(!1),"aria-label":"Cerrar",children:"Cerrar"})]}),r.jsxs("div",{className:"dash-item",style:{padding:0},children:[r.jsx("p",{style:{marginTop:4,fontSize:13,opacity:.8},children:"Registra recordatorios o publicaciones para clientes especificos o para todos."}),r.jsx("textarea",{value:x,onChange:A=>w(A.target.value),placeholder:"Agregar nota o detalle del evento",rows:4,style:{width:"100%",marginTop:12,background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:"10px 12px",resize:"vertical"}}),r.jsx("div",{style:{marginTop:12},children:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("input",{type:"checkbox",checked:f,onChange:A=>{h(A.target.checked),A.target.checked&&R([])}}),r.jsx("span",{children:"Publicar para todos los clientes"})]})}),!f&&r.jsxs("div",{style:{marginTop:12},children:[r.jsx("input",{type:"search",placeholder:"Buscar por nombre, email o ID",value:v,onChange:A=>j(A.target.value),style:{width:"100%",padding:"8px 12px",borderRadius:10,border:"1px solid rgba(148,163,184,0.35)",background:"#1b263b",color:"#e2e8f0"}}),L&&r.jsx("div",{style:{color:"#fecaca",background:"#7f1d1d",padding:8,borderRadius:8,marginTop:8},children:L}),r.jsxs("div",{className:"admin-clients-list",style:{marginTop:8},children:[pe&&r.jsx("div",{style:{opacity:.7},children:"Cargando clientes..."}),!pe&&B.length===0&&r.jsx("div",{style:{opacity:.7},children:"No se encontraron clientes"}),B.map(A=>{const _=N.includes(A.id);return r.jsxs("label",{className:"admin-clients-item",children:[r.jsxs("span",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("span",{style:{fontWeight:600},children:A.name}),r.jsx("span",{style:{fontSize:12,opacity:.75},children:A.id})]}),r.jsx("input",{type:"checkbox",checked:_,onChange:()=>ee(A.id)})]},A.id)})]}),N.length>0&&r.jsxs("div",{style:{marginTop:8,fontSize:12,opacity:.7},children:["Seleccionados: ",N.join(", ")]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{w(""),h(!0),R([])},children:"Limpiar"}),r.jsx("button",{type:"button",className:"btn btn-danger",onClick:E,disabled:!g||P.length===0,children:"Borrar anotaciones"}),r.jsx("button",{type:"button",className:"btn btn-primary",onClick:V,disabled:!x.trim()||!f&&N.length===0,children:"Guardar anotacion"})]}),P.length>0&&r.jsxs("div",{style:{marginTop:16},children:[r.jsx("div",{style:{fontWeight:600,marginBottom:8},children:"Anotaciones del dia"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:P.map(A=>{var _,$;return r.jsxs("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:[r.jsx("div",{style:{marginBottom:6},children:A.note}),r.jsx("div",{style:{fontSize:12,opacity:.7},children:((_=A.audience)==null?void 0:_.type)==="all"?"Visible para todos los clientes":`Visible para: ${Array.isArray(($=A.audience)==null?void 0:$.clientIds)&&A.audience.clientIds.length>0?A.audience.clientIds.join(", "):"-"}`})]},A.id)})})]})]})]})})]})}function s2({src:e,heightDesktop:n=560,heightMobile:t=480,className:a}){const[i,o]=b.useState(!1),[s,l]=b.useState(!1),c=b.useRef(null);b.useEffect(()=>{try{const x=window.matchMedia("(max-width: 768px)"),w=f=>{o(f.matches),f.matches&&l(!1)};return o(x.matches),x.matches&&l(!1),x.addEventListener?x.addEventListener("change",w):x.addListener&&x.addListener(w),()=>{x.removeEventListener?x.removeEventListener("change",w):x.removeListener&&x.removeListener(w)}}catch{o(!1)}},[]),b.useEffect(()=>{if(!s){c.current!==null&&(document.body.style.overflow=c.current,c.current=null);return}return c.current===null&&(c.current=document.body.style.overflow||""),document.body.style.overflow="hidden",()=>{c.current!==null?(document.body.style.overflow=c.current,c.current=null):document.body.style.overflow=""}},[s]);const d=b.useMemo(()=>{try{return new URL(e,window.location.origin).toString()}catch{return e}},[e]),p=()=>l(x=>!x),u=["Te compartimos que ya tienes acceso a nuestro Portal de Clientes Koop.","","Desde alli podras:","- Consultar el estado de tus procesos en tiempo real.","- Descargar documentos relevantes de manera segura.","- Recibir notificaciones de audiencias y plazos importantes.","- Comunicarte directamente con nuestro equipo para resolver cualquier inquietud.","","Estamos seguros de que esta alianza marcara un camino de crecimiento y tranquilidad."].join(`
`);if(i)return r.jsxs("div",{className:a,style:{width:"100%",height:t,display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:16},children:[r.jsx("div",{style:{fontWeight:700,marginBottom:8},children:"Gracias por elegirnos. Nos alegra iniciar este camino contigo."}),r.jsx("div",{className:"muted",style:{marginBottom:12,whiteSpace:"pre-line"},children:u})]}),r.jsx("div",{style:{marginTop:"auto",padding:16,display:"flex",justifyContent:"flex-end"},children:r.jsx("a",{className:"btn btn-primary",href:d,target:"_blank",rel:"noopener noreferrer",children:"Cordial saludo"})})]});const m=s?{position:"fixed",inset:0,zIndex:1e3,backgroundColor:"rgba(6, 11, 25, 0.92)",padding:"48px 64px",display:"flex",flexDirection:"column",gap:16}:{width:"100%",height:n,position:"relative"},y=s?{flex:1,position:"relative",borderRadius:16,overflow:"hidden",boxShadow:"0 24px 48px rgba(0,0,0,0.45)"}:{width:"100%",height:"100%",position:"relative",borderRadius:12,overflow:"hidden"},g={position:"absolute",top:s?24:12,right:s?24:12,zIndex:1001};return r.jsxs("div",{className:a,style:m,children:[r.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:p,style:g,children:s?"Minimizar":"Maximizar"}),r.jsx("div",{style:y,children:r.jsxs("object",{data:e,type:"application/pdf",width:"100%",height:"100%",style:{width:"100%",height:"100%"},children:[r.jsx("iframe",{title:"PDF",src:d,style:{width:"100%",height:"100%",border:0}}),r.jsxs("div",{style:{padding:16},children:["No se pudo mostrar el PDF. ",r.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:"Abrir en nueva pestana"})]})]})})]})}function l2(){return r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Mensajes no leídos"}),r.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin datos."})]})}function c2(e){if(!(e instanceof Date))return null;const n=e.getFullYear(),t=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${t}-${a}`}function d2(){const{user:e}=Ve(),n=Ui((e==null?void 0:e.name)||"Bienvenido"),[t,a]=b.useState(0),[i]=yh(),[o,s]=b.useState(()=>new Date),l=b.useMemo(()=>{const y=[e==null?void 0:e.id,e==null?void 0:e.sub,e==null?void 0:e._id,e==null?void 0:e.documentNumber,e==null?void 0:e.document_number,e==null?void 0:e.documento,e==null?void 0:e.clienteId].map(g=>g==null?"":String(g).trim()).filter(g=>!!g);return Array.from(new Set(y))},[e]),c=b.useMemo(()=>c2(o),[o]),d=b.useMemo(()=>l.length?i.filter(m=>{var y,g,x;return((y=m==null?void 0:m.audience)==null?void 0:y.type)==="all"?!0:((g=m==null?void 0:m.audience)==null?void 0:g.type)==="clients"?(Array.isArray((x=m.audience)==null?void 0:x.clientIds)?m.audience.clientIds.map(f=>f==null?"":String(f).trim()).filter(f=>!!f):[]).some(f=>l.includes(f)):!1}):i.filter(m=>{var y;return((y=m==null?void 0:m.audience)==null?void 0:y.type)==="all"}),[i,l]),p=b.useMemo(()=>d.filter(m=>(m==null?void 0:m.date)===c),[d,c]),u=b.useMemo(()=>o==null?void 0:o.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),[o]);return r.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:1080},children:[r.jsx("style",{children:`
          .user-main-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
          @media (min-width: 1024px) { .user-main-grid { grid-template-columns: 2fr 1fr; } }
          .user-main-left { display: flex; flex-direction: column; gap: 16px; }
          .user-main-right { display: flex; flex-direction: column; gap: 16px; }
        `}),r.jsxs("div",{className:"dash-header",children:[r.jsx("div",{className:"dash-title",children:n}),r.jsx(wh,{buttonClassName:"btn btn-primary",allowFolderInput:!1,onUploaded:()=>a(m=>m+1)})]}),r.jsxs("div",{className:"user-main-grid",children:[r.jsxs("div",{className:"user-main-left",children:[r.jsxs("div",{className:"dash-item",children:[r.jsx("p",{style:{marginBottom:8},children:"Aqui puedes revisar tu material mas reciente y mantenerte al dia con tu caso. Si necesitas asistencia adicional, nuestro equipo esta disponible para ayudarte."}),r.jsx(O,{className:"btn btn-primary btn-sm",to:"/mis-casos",children:"Ver mis casos"})]}),r.jsx("div",{className:"dash-item",style:{padding:0},children:r.jsx(s2,{src:"/Saludobienvenidaportal.pdf",heightDesktop:480,heightMobile:420})}),r.jsx(l2,{}),r.jsx(kh,{refreshKey:t})]}),r.jsxs("div",{className:"user-main-right",children:[r.jsx(jh,{value:o,onChange:s,events:d}),r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{style:{fontWeight:600,marginBottom:8},children:u}),p.length===0&&r.jsx("p",{style:{margin:0,opacity:.7,fontSize:14},children:"No hay anotaciones programadas para este dia."}),p.length>0&&r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:p.map(m=>r.jsx("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:r.jsx("div",{children:m.note})},m.id))})]})]})]})]})})}function fd(){return r.jsx("div",{className:"dash-page",style:{background:"linear-gradient(rgba(24,31,56,0.9), rgba(15,23,42,0.95))",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",padding:24},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:520},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Tu cuenta no tiene un rol asignado para ingresar al portal. Comunicate con el administrador para solicitar acceso."})]})})}function md(e,n){if(!(e!=null&&e.roles))return!1;const t=Array.isArray(e.roles)?e.roles:[e.roles],a=String(n||"").toLowerCase();return t.some(i=>String(i||"").toLowerCase()===a)}function p2(){const{user:e,loading:n}=Ve(),t=b.useMemo(()=>e?md(e,"admin")?"admin":md(e,"user")?"user":"no-access":"none",[e]);return n&&!e?null:t==="admin"?r.jsx(o2,{}):t==="user"?r.jsx(d2,{}):t==="no-access"?r.jsx(fd,{}):r.jsx(fd,{})}function gd(){const[e,n]=b.useState("docs"),{user:t}=Ve(),a=Ui((t==null?void 0:t.name)||""),i="documentos_iniciales",s=(Array.isArray(t==null?void 0:t.roles)?t.roles:t!=null&&t.roles?[t==null?void 0:t.roles]:[]).map(S=>String(S||"").trim().toLowerCase()).includes("admin"),[l,c]=b.useState([]),[d,p]=b.useState(!1),[u,m]=b.useState(null),[y,g]=b.useState([]),[x,w]=b.useState(!1),[f,h]=b.useState(null),[v,j]=b.useState(null),N=b.useRef(null),R=async()=>{w(!0),h(null),j(null);try{const S=await xh({limit:20,subfolder:i});g(Array.isArray(S==null?void 0:S.items)?S.items:[]),S!=null&&S.warning&&j(S.warning)}catch(S){h((S==null?void 0:S.message)||"Error cargando documentos")}finally{w(!1)}};b.useEffect(()=>{e==="docs"&&R()},[e]),b.useEffect(()=>{if(!s)return;let S=!1;return(async()=>{var H,J;try{p(!0),m(null);const q=await Al();if(S)return;const Q=Array.isArray(q==null?void 0:q.items)?q.items:[],on=String((t==null?void 0:t.id)||(t==null?void 0:t.sub)||"").trim();c(Q.filter(pe=>{var Be;return String(((Be=pe==null?void 0:pe.assignedAdmin)==null?void 0:Be.id)||"").trim()===on}))}catch(q){S||m(((J=(H=q==null?void 0:q.response)==null?void 0:H.data)==null?void 0:J.message)||(q==null?void 0:q.message)||"No se pudo cargar clientes asignados")}finally{S||p(!1)}})(),()=>{S=!0}},[s,t]);const D=()=>{var S;return(S=N.current)==null?void 0:S.click()},z=async S=>{var J,q;const H=(q=(J=S.target)==null?void 0:J.files)==null?void 0:q[0];if(H)try{w(!0),h(null);const Q=await Tl(H,{subfolder:i});Q!=null&&Q.file&&g(on=>[Q.file,...on]),await R()}catch(Q){h((Q==null?void 0:Q.message)||"Error subiendo documento")}finally{w(!1);try{S.target.value=null}catch{}}},F=async(S,H)=>{try{const{url:J}=await vh(S,600);window.open(J||H,"_blank")}catch{H&&window.open(H,"_blank")}};return r.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1320},children:[r.jsx("div",{className:"dash-header",children:r.jsx("div",{className:"dash-title",children:s?"Mis expedientes":"Mi expediente"})}),r.jsxs("div",{className:"dash-item me-subbar",children:[r.jsxs("div",{className:"me-hello",children:["Bienvenido: ",a]}),r.jsxs("select",{className:"me-select","aria-label":"Tipo de b�squeda",children:[r.jsx("option",{children:"Procesos judiciales"}),r.jsx("option",{children:"Demandas"}),r.jsx("option",{children:"Audiencias"})]}),r.jsx("input",{className:"me-input",placeholder:"Buscar..."}),r.jsxs("div",{className:"me-actions",children:[r.jsx("input",{ref:N,type:"file",style:{display:"none"},onChange:z}),r.jsx("button",{className:"btn btn-primary",onClick:D,disabled:x,children:x?"Subiendo...":"Radicar documento"}),r.jsx("button",{className:"btn btn-secondary",children:"Ver informaci�n"})]})]}),r.jsxs("div",{className:"me-layout",children:[r.jsxs("aside",{className:"me-left dash-item",children:[r.jsx("div",{className:"me-head",children:"CLIENTE"}),r.jsxs("div",{className:"me-tree",children:[!s&&r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:r.jsx("div",{children:"No aplica para tu perfil."})}),s&&u&&r.jsx("div",{className:"me-leaf",style:{color:"#fecaca"},children:u}),s&&!u&&d&&r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"Cargando clientes…"}),s&&!d&&l.length===0&&r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"No tienes clientes asignados"}),s&&l.length>0&&r.jsx(r.Fragment,{children:l.map(S=>r.jsxs("details",{open:!0,children:[r.jsxs("summary",{children:[r.jsx("span",{className:"me-chev",children:">"}),r.jsx("span",{children:S.name})]}),r.jsxs("div",{className:"me-leaf",children:[r.jsx("div",{children:S.documentNumber||S.email||S.id}),r.jsx("div",{className:"me-tag",children:"Asignado"})]})]},S.id))})]})]}),r.jsxs("main",{className:"me-center dash-item",children:[r.jsxs("div",{className:"me-tabs",children:[r.jsx("div",{className:`me-tab ${e==="docs"?"active":""}`,onClick:()=>n("docs"),role:"button",tabIndex:0,children:"Documentos del Proceso"}),r.jsx("div",{className:`me-tab ${e==="aud"?"active":""}`,onClick:()=>n("aud"),role:"button",tabIndex:0,children:"Audiencias"})]}),e==="docs"&&r.jsxs("div",{className:"me-table-wrap",children:[f&&r.jsx("div",{style:{color:"#ef4444",padding:"8px 12px"},children:String(f)}),v&&r.jsxs("div",{style:{color:"#f59e0b",padding:"8px 12px"},children:["Aviso: ",String(v)==="S3_LIST_FORBIDDEN"?"No hay permisos para listar el bucket. Tus documentos siguen disponibles si conservas el enlace.":String(v)]}),r.jsxs("table",{className:"me-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{width:42},children:r.jsx("input",{type:"checkbox"})}),r.jsx("th",{children:"Fecha de registro"}),r.jsx("th",{children:"Documento"}),r.jsx("th",{children:"Tipo"}),r.jsx("th",{children:"Tama�o"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[y.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:6,style:{color:"#9fb3cc"},children:x?"Cargando...":"No hay documentos para mostrar"})}),y.map(S=>{const H=S.lastModified?new Date(S.lastModified):S.createdTime?new Date(S.createdTime):null,J=S.name||(S.key||"").split("/").pop(),q=typeof S.size=="number"?Math.max(1,Math.round(S.size/1024)):null,Q=S.mimeType||(J&&J.toLowerCase().endsWith(".pdf")?"application/pdf":void 0);return r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("input",{type:"checkbox"})}),r.jsx("td",{children:H?H.toLocaleString():"-"}),r.jsx("td",{title:J,children:J}),r.jsx("td",{children:Q?Q.split("/")[1]||Q:"-"}),r.jsx("td",{children:q?`${q} KB`:"-"}),r.jsx("td",{children:r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>F(S.key,S.downloadURL||S.downloadUrl||S.webContentLink||S.webViewLink),children:"Descargar"})})]},S.key||S.id)})]})]})]}),e==="aud"&&r.jsx("div",{className:"me-table-wrap",children:r.jsxs("table",{className:"me-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Fecha"}),r.jsx("th",{children:"Actuaci�n"}),r.jsx("th",{children:"Juzgado"}),r.jsx("th",{children:"Estado"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{children:"2025-09-03 08:00"}),r.jsx("td",{children:"Audiencia inicial"}),r.jsx("td",{children:"JDO 003 Laboral"}),r.jsx("td",{children:r.jsx("span",{className:"me-badge me-badge-success",children:"Agendada"})})]})})]})})]}),r.jsxs("aside",{className:"me-right dash-item",children:[r.jsx("div",{className:"me-head",children:"Datos del Proceso Judicial"}),r.jsxs("div",{className:"me-right-content",children:[r.jsxs("div",{className:"me-proc-grid",children:[r.jsx("div",{className:"me-tag",children:"Radicado"}),r.jsx("div",{children:"110014105009-20250011400"}),r.jsx("div",{className:"me-tag",children:"Clase"}),r.jsx("div",{children:"Laboral � Ordinario"}),r.jsx("div",{className:"me-tag",children:"Demandante"}),r.jsx("div",{children:"Juan P�rez"}),r.jsx("div",{className:"me-tag",children:"Demandado"}),r.jsx("div",{children:"Acme S.A.S."}),r.jsx("div",{className:"me-tag",children:"Juzgado"}),r.jsx("div",{children:"JDO 009 MPC"}),r.jsx("div",{className:"me-tag",children:"Estado"}),r.jsx("div",{children:"En tr�mite"})]}),r.jsx("hr",{className:"me-hr"}),r.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:"Descargar expediente"})]})]})]})]})})}const u2=[{id:"CJ-001",titulo:"Acción de tutela — derecho a la salud",estado:"En curso",juzgado:"Juzgado 12 Municipal",fecha:"2025-07-10"},{id:"CJ-002",titulo:"Proceso laboral — despido sin justa causa",estado:"Audiencia programada",juzgado:"Juzgado 3 Laboral del Circuito",fecha:"2025-08-02"},{id:"CJ-003",titulo:"Responsabilidad fiscal — recursos",estado:"Recurso interpuesto",juzgado:"Contraloría Distrital",fecha:"2025-08-21"},{id:"CJ-004",titulo:"Proceso de alimentos — fijación de cuota",estado:"Admitido",juzgado:"Juzgado 5 de Familia",fecha:"2025-09-01"}];function h2(){const[e,n]=b.useState(null);b.useEffect(()=>{if(!e)return;const i=o=>{o.key==="Escape"&&n(null)};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[e]);const t=b.useMemo(()=>["Reunión de documentos e investigación","En escrito de demanda","En radicación","Al despacho: en espera de decisión del juez"],[]),a=i=>{if(!i)return 1;const o=String(i).toLowerCase();return/(reun|investig)/.test(o)?1:/(escrito|demanda)/.test(o)?2:/(radicaci[óo]n|admitid)/.test(o)?3:/(despacho|juez|decisi[óo]n|audiencia|recurso)/.test(o)?4:(/curso/.test(o),2)};return r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[r.jsxs("div",{className:"dash-card",style:{maxWidth:900},children:[r.jsx("div",{className:"dash-header",children:r.jsx("div",{className:"dash-title",children:"Mis casos"})}),r.jsx("div",{className:"dash-item",style:{padding:0},children:r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs("table",{className:"cases-table",style:{width:"100%",borderCollapse:"collapse"},children:[r.jsx("thead",{children:r.jsxs("tr",{style:{background:"#1e2a3a"},children:[r.jsx("th",{style:wt,children:"Radicado"}),r.jsx("th",{style:wt,children:"Título"}),r.jsx("th",{style:wt,children:"Estado"}),r.jsx("th",{style:wt,children:"Despacho"}),r.jsx("th",{style:wt,children:"Última actuación"})]})}),r.jsx("tbody",{children:u2.map(i=>r.jsxs("tr",{onClick:()=>n(i),className:"row-clickable",children:[r.jsx("td",{style:jt,children:i.id}),r.jsx("td",{style:jt,children:i.titulo}),r.jsx("td",{style:jt,children:r.jsx("span",{className:"badge",style:xd(i.estado),children:i.estado})}),r.jsx("td",{style:jt,children:i.juzgado}),r.jsx("td",{style:jt,children:new Date(i.fecha).toLocaleDateString()})]},i.id))})]})})})]}),e&&r.jsx("div",{className:"modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"caso-title",onClick:i=>{i.target===i.currentTarget&&n(null)},children:r.jsxs("div",{className:"modal-card",children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("div",{className:"modal-title",id:"caso-title",children:e.titulo}),r.jsx("button",{className:"btn btn-primary",onClick:()=>n(null),children:"Cerrar"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"case-grid",children:[r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Radicado"}),r.jsx("div",{children:e.id})]}),r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Estado"}),r.jsx("div",{children:r.jsx("span",{className:"badge",style:xd(e.estado),children:e.estado})})]}),r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Despacho"}),r.jsx("div",{children:e.juzgado})]}),r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Última actuación"}),r.jsx("div",{children:new Date(e.fecha).toLocaleString()})]})]}),r.jsx("div",{className:"timeline",children:t.map((i,o)=>{const s=o+1,l=a(e.estado),c=s<l,d=s===l;return r.jsxs("div",{className:`timeline-step ${c?"done":""} ${d?"active":""}`,children:[r.jsx("div",{className:`dot ${c?"done":""} ${d?"active":""}`}),s<t.length&&r.jsx("div",{className:`bar ${s<l?"done":""}`}),r.jsxs("div",{className:"label",children:[s,". ",i]})]},s)})})]})]})})]})}const wt={textAlign:"left",padding:"12px 14px",borderBottom:"1px solid #394b61",fontWeight:600,color:"#e2e8f0",whiteSpace:"nowrap"},jt={padding:"12px 14px",borderBottom:"1px solid #34465a",color:"#e5edf7",verticalAlign:"top"};function xd(e){let n="#3b82f6";return/curso/i.test(e)&&(n="#f59e0b"),/programada|programado/i.test(e)&&(n="#10b981"),/recurso/i.test(e)&&(n="#8b5cf6"),{display:"inline-block",padding:"4px 8px",borderRadius:8,background:n,color:"#fff",fontSize:12,fontWeight:600}}function f2(){var a,i;const{logout:e}=Ve(),n=Tn();b.useEffect(()=>{(async()=>{try{await e()}catch{}try{sessionStorage.removeItem("koop_hasVisited")}catch{}try{document.documentElement.classList.remove("skip-splash")}catch{}})()},[e]);const t=(i=(a=n.state)==null?void 0:a.from)==null?void 0:i.pathname;return r.jsx(Se,{to:"/",replace:!0,state:{from:t}})}function Un({children:e}){const{isAuthenticated:n}=Ve(),t=Tn();return n?e:r.jsx(Se,{to:"/login",replace:!0,state:{from:t}})}function m2(){const{isAuthenticated:e,user:n,logout:t}=Ve(),i=(Array.isArray(n==null?void 0:n.roles)?n.roles:n!=null&&n.roles?[n.roles]:[]).map(y=>String(y||"").trim().toLowerCase()).includes("admin"),[o,s]=b.useState(!1),[l,c]=b.useState(!1),[d,p]=b.useState(!1);ct();const u=()=>{c(y=>{const g=!y;return g||p(!1),g})},m=y=>{const g=y.target.closest("a");g&&!g.classList.contains("drop-btn")&&(c(!1),p(!1))};return r.jsx("nav",{className:"navbar",children:r.jsxs("div",{className:"navbar-content",children:[r.jsxs(O,{to:"/",className:"logo",children:[r.jsx("img",{src:"/Koop Logo.png",alt:"Logo Koop",className:"logo-img"}),r.jsx("div",{className:"logo-text",children:"KOOP STRATEGIC ADVISORY"})]}),r.jsxs("div",{className:"menu-toggle",id:"menu-toggle",onClick:u,"aria-controls":"nav-menu","aria-expanded":l?"true":"false",role:"button",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]}),r.jsxs("div",{className:`nav-menu ${l?"open":""}`,id:"nav-menu",onClick:m,"data-auth":e?"1":"0",children:[r.jsxs("div",{className:"main-links",children:[r.jsx(O,{to:"/#inicio",children:"INICIO"}),r.jsxs("div",{className:`dropdown ${d?"open":""}`,children:[r.jsx(O,{to:"/#areas",className:"drop-btn",id:"areas-toggle","aria-expanded":d?"true":"false",onClick:y=>{y.preventDefault(),p(g=>!g)},children:"ÁREAS DE PRÁCTICA"}),r.jsxs("div",{className:"dropdown-content",children:[r.jsxs("div",{className:"dropdown-group",children:[r.jsx(O,{to:"/derecho",className:"dropdown-title",children:"Derecho"}),r.jsx(O,{to:"/derecho-laboral",children:"Derecho Laboral"}),r.jsx(O,{to:"/derecho-penal",children:"Derecho Penal"}),r.jsx(O,{to:"/tramites-notariales",children:"Trámites notariales"}),r.jsx(O,{to:"/derecho-administrativo",children:"Derecho Administrativo"}),r.jsx(O,{to:"/derecho-familia",children:"Derecho de Familia"}),r.jsx(O,{to:"/contratacion-publica",children:"Contratación Pública"}),r.jsx(O,{to:"/resolucion-disputas",children:"Resolución de Disputas"}),r.jsx(O,{to:"/acciones-de-tutela",children:"Acciones de Tutela"}),r.jsx(O,{to:"/insolvencia",children:"Insolvencia"})]}),r.jsxs("div",{className:"dropdown-group",children:[r.jsx(O,{to:"/contabilidad",className:"dropdown-title",children:"Contabilidad"}),r.jsx(O,{to:"/auditoria",children:"Auditoría"}),r.jsx(O,{to:"/impuestos",children:"Impuestos"}),r.jsx(O,{to:"/asesoria-contable",children:"Asesoría Contable"})]})]})]}),!e&&r.jsx(O,{to:"/#vision",children:"NUESTRA VISIÓN"})]}),e?r.jsxs("div",{className:`dropdown ${o?"open":""}`,children:[r.jsx("button",{className:"drop-btn","aria-haspopup":"true","aria-expanded":o?"true":"false",onClick:()=>s(y=>!y),children:Ui((n==null?void 0:n.name)||"Mi cuenta")}),r.jsx("div",{className:"dropdown-content",children:r.jsxs("div",{className:"dropdown-group",children:[r.jsx(O,{to:"/dashboard",children:"Perfil"}),r.jsx(O,{to:"/mi-expediente",children:i?"Mis expedientes":"Mi expediente"}),r.jsx(O,{to:"/mis-casos",children:"Mis casos"}),r.jsx(O,{to:"/logout",children:"Cerrar sesión"})]})})]}):r.jsx(O,{to:"/login",className:"koop-cta","aria-label":"CLIENTE KOOP",children:"CLIENTE KOOP".split("").map((y,g)=>r.jsx("span",{className:"letter",style:{"--i":g},children:y===" "?" ":y},g))})]})]})})}function g2({base:e="'Montserrat', Arial, sans-serif",heading:n,accent:t,children:a}){return b.useEffect(()=>{const i=document.documentElement;e&&i.style.setProperty("--ff-base",e),n&&i.style.setProperty("--ff-heading",n),t&&i.style.setProperty("--ff-accent",t)},[e,n,t]),a||null}function x2(){const[e,n]=b.useState(null),t=()=>{const a=Tn(),{isAuthenticated:i}=Ve(),o=a.pathname.toLowerCase(),s=o.startsWith("/login")||o.startsWith("/register");return r.jsxs(r.Fragment,{children:[!s&&r.jsx(m2,{}),r.jsxs(G0,{children:[r.jsx(G,{path:"/",element:r.jsx(dg,{})}),r.jsx(G,{path:"/derecho",element:r.jsx(ug,{})}),r.jsx(G,{path:"/contabilidad",element:r.jsx(fg,{})}),r.jsx(G,{path:"/auditoria",element:r.jsx(gg,{})}),r.jsx(G,{path:"/derecho-administrativo",element:r.jsx(vg,{})}),r.jsx(G,{path:"/derecho-familia",element:r.jsx(yg,{})}),r.jsx(G,{path:"/derecho-laboral",element:r.jsx(Sg,{})}),r.jsx(G,{path:"/derecho-penal",element:r.jsx(Ag,{})}),r.jsx(G,{path:"/impuestos",element:r.jsx(Ig,{})}),r.jsx(G,{path:"/asesoria-contable",element:r.jsx(zg,{})}),r.jsx(G,{path:"/planeacion-patrimonial",element:r.jsx(Se,{to:"/asesoria-contable",replace:!0})}),r.jsx(G,{path:"/privacidad",element:r.jsx(Dg,{})}),r.jsx(G,{path:"/tramites-notariales",element:r.jsx(Pg,{})}),r.jsx(G,{path:"/acciones-de-tutela",element:r.jsx(Mg,{})}),r.jsx(G,{path:"/login",element:i?r.jsx(Se,{to:"/",replace:!0}):r.jsx(Ex,{})}),r.jsx(G,{path:"/register",element:r.jsx(Ax,{})}),r.jsx(G,{path:"/logout",element:r.jsx(f2,{})}),r.jsx(G,{path:"/panel",element:r.jsx(Un,{children:r.jsx(Ix,{})})}),r.jsx(G,{path:"/admin/usuarios",element:r.jsx(Un,{children:r.jsx(Vx,{})})}),r.jsx(G,{path:"/admin/clientes-activos",element:r.jsx(Un,{children:r.jsx(Yx,{})})}),r.jsx(G,{path:"/admin/tareas",element:r.jsx(Un,{children:r.jsx($x,{})})}),r.jsx(G,{path:"/dashboard",element:r.jsx(Un,{children:r.jsx(p2,{})})}),r.jsx(G,{path:"/mi-expediente",element:r.jsx(Un,{children:r.jsx(gd,{})})}),r.jsx(G,{path:"/dashboard2",element:r.jsx(Un,{children:r.jsx(gd,{})})}),r.jsx(G,{path:"/mis-casos",element:r.jsx(Un,{children:r.jsx(h2,{})})}),r.jsx(G,{path:"/index.html",element:r.jsx(Se,{to:"/",replace:!0})}),r.jsx(G,{path:"/derecho.html",element:r.jsx(Se,{to:"/derecho",replace:!0})}),r.jsx(G,{path:"/contabilidad.html",element:r.jsx(Se,{to:"/contabilidad",replace:!0})}),r.jsx(G,{path:"/auditoria.html",element:r.jsx(Se,{to:"/auditoria",replace:!0})}),r.jsx(G,{path:"/derecho-administrativo.html",element:r.jsx(Se,{to:"/derecho-administrativo",replace:!0})}),r.jsx(G,{path:"/derecho-familia.html",element:r.jsx(Se,{to:"/derecho-familia",replace:!0})}),r.jsx(G,{path:"/derecho-laboral.html",element:r.jsx(Se,{to:"/derecho-laboral",replace:!0})}),r.jsx(G,{path:"/derecho-penal.html",element:r.jsx(Se,{to:"/derecho-penal",replace:!0})}),r.jsx(G,{path:"/impuestos.html",element:r.jsx(Se,{to:"/impuestos",replace:!0})}),r.jsx(G,{path:"/planeacion-patrimonial.html",element:r.jsx(Se,{to:"/asesoria-contable",replace:!0})}),r.jsx(G,{path:"/privacidad.html",element:r.jsx(Se,{to:"/privacidad",replace:!0})}),r.jsx(G,{path:"/tramites-notariales.html",element:r.jsx(Se,{to:"/tramites-notariales",replace:!0})}),r.jsx(G,{path:"/acciones-de-tutela.html",element:r.jsx(Se,{to:"/acciones-de-tutela",replace:!0})})]})]})};return r.jsx(Sx,{children:r.jsx(g2,{children:r.jsx(tg,{children:r.jsx(t,{})})})})}try{"scrollRestoration"in history&&(history.scrollRestoration="manual")}catch{}const v2=Iu(document.getElementById("root"));v2.render(r.jsx(x2,{}));
