function Xp(e,n){for(var r=0;r<n.length;r++){const a=n[r];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(a,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function ef(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qc={exports:{}},ti={},Yc={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bt=Symbol.for("react.element"),nf=Symbol.for("react.portal"),rf=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),of=Symbol.for("react.provider"),sf=Symbol.for("react.context"),lf=Symbol.for("react.forward_ref"),cf=Symbol.for("react.suspense"),df=Symbol.for("react.memo"),uf=Symbol.for("react.lazy"),cl=Symbol.iterator;function pf(e){return e===null||typeof e!="object"?null:(e=cl&&e[cl]||e["@@iterator"],typeof e=="function"?e:null)}var Gc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jc=Object.assign,Qc={};function Fr(e,n,r){this.props=e,this.context=n,this.refs=Qc,this.updater=r||Gc}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xc(){}Xc.prototype=Fr.prototype;function ls(e,n,r){this.props=e,this.context=n,this.refs=Qc,this.updater=r||Gc}var cs=ls.prototype=new Xc;cs.constructor=ls;Jc(cs,Fr.prototype);cs.isPureReactComponent=!0;var dl=Array.isArray,ed=Object.prototype.hasOwnProperty,ds={current:null},nd={key:!0,ref:!0,__self:!0,__source:!0};function rd(e,n,r){var a,i={},o=null,s=null;if(n!=null)for(a in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)ed.call(n,a)&&!nd.hasOwnProperty(a)&&(i[a]=n[a]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:Bt,type:e,key:o,ref:s,props:i,_owner:ds.current}}function ff(e,n){return{$$typeof:Bt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function us(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bt}function hf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var ul=/\/+/g;function Ei(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hf(""+e.key):n.toString(36)}function ma(e,n,r,a,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Bt:case nf:s=!0}}if(s)return s=e,i=i(s),e=a===""?"."+Ei(s,0):a,dl(i)?(r="",e!=null&&(r=e.replace(ul,"$&/")+"/"),ma(i,n,r,"",function(d){return d})):i!=null&&(us(i)&&(i=ff(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ul,"$&/")+"/")+e)),n.push(i)),1;if(s=0,a=a===""?".":a+":",dl(e))for(var l=0;l<e.length;l++){o=e[l];var c=a+Ei(o,l);s+=ma(o,n,r,c,i)}else if(c=pf(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=a+Ei(o,l++),s+=ma(o,n,r,c,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Gt(e,n,r){if(e==null)return e;var a=[],i=0;return ma(e,a,"","",function(o){return n.call(r,o,i++)}),a}function mf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},ga={transition:null},gf={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:ga,ReactCurrentOwner:ds};function td(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Gt,forEach:function(e,n,r){Gt(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return Gt(e,function(){n++}),n},toArray:function(e){return Gt(e,function(n){return n})||[]},only:function(e){if(!us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Fr;Z.Fragment=rf;Z.Profiler=af;Z.PureComponent=ls;Z.StrictMode=tf;Z.Suspense=cf;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gf;Z.act=td;Z.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Jc({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=ds.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)ed.call(n,c)&&!nd.hasOwnProperty(c)&&(a[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:Bt,type:e.type,key:i,ref:o,props:a,_owner:s}};Z.createContext=function(e){return e={$$typeof:sf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:of,_context:e},e.Consumer=e};Z.createElement=rd;Z.createFactory=function(e){var n=rd.bind(null,e);return n.type=e,n};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:lf,render:e}};Z.isValidElement=us;Z.lazy=function(e){return{$$typeof:uf,_payload:{_status:-1,_result:e},_init:mf}};Z.memo=function(e,n){return{$$typeof:df,type:e,compare:n===void 0?null:n}};Z.startTransition=function(e){var n=ga.transition;ga.transition={};try{e()}finally{ga.transition=n}};Z.unstable_act=td;Z.useCallback=function(e,n){return Se.current.useCallback(e,n)};Z.useContext=function(e){return Se.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};Z.useEffect=function(e,n){return Se.current.useEffect(e,n)};Z.useId=function(){return Se.current.useId()};Z.useImperativeHandle=function(e,n,r){return Se.current.useImperativeHandle(e,n,r)};Z.useInsertionEffect=function(e,n){return Se.current.useInsertionEffect(e,n)};Z.useLayoutEffect=function(e,n){return Se.current.useLayoutEffect(e,n)};Z.useMemo=function(e,n){return Se.current.useMemo(e,n)};Z.useReducer=function(e,n,r){return Se.current.useReducer(e,n,r)};Z.useRef=function(e){return Se.current.useRef(e)};Z.useState=function(e){return Se.current.useState(e)};Z.useSyncExternalStore=function(e,n,r){return Se.current.useSyncExternalStore(e,n,r)};Z.useTransition=function(){return Se.current.useTransition()};Z.version="18.3.1";Yc.exports=Z;var y=Yc.exports;const vf=ef(y),xf=Xp({__proto__:null,default:vf},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf=y,yf=Symbol.for("react.element"),wf=Symbol.for("react.fragment"),jf=Object.prototype.hasOwnProperty,kf=bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cf={key:!0,ref:!0,__self:!0,__source:!0};function ad(e,n,r){var a,i={},o=null,s=null;r!==void 0&&(o=""+r),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(a in n)jf.call(n,a)&&!Cf.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)i[a]===void 0&&(i[a]=n[a]);return{$$typeof:yf,type:e,key:o,ref:s,props:i,_owner:kf.current}}ti.Fragment=wf;ti.jsx=ad;ti.jsxs=ad;qc.exports=ti;var t=qc.exports,id={exports:{}},Be={},od={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,M){var E=R.length;R.push(M);e:for(;0<E;){var D=E-1>>>1,K=R[D];if(0<i(K,M))R[D]=M,R[E]=K,E=D;else break e}}function r(R){return R.length===0?null:R[0]}function a(R){if(R.length===0)return null;var M=R[0],E=R.pop();if(E!==M){R[0]=E;e:for(var D=0,K=R.length,ue=K>>>1;D<ue;){var hn=2*(D+1)-1,W=R[hn],Yn=hn+1,Yt=R[Yn];if(0>i(W,E))Yn<K&&0>i(Yt,W)?(R[D]=Yt,R[Yn]=E,D=Yn):(R[D]=W,R[hn]=E,D=hn);else if(Yn<K&&0>i(Yt,E))R[D]=Yt,R[Yn]=E,D=Yn;else break e}}return M}function i(R,M){var E=R.sortIndex-M.sortIndex;return E!==0?E:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],d=[],p=1,f=null,h=3,b=!1,v=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var M=r(d);M!==null;){if(M.callback===null)a(d);else if(M.startTime<=R)a(d),M.sortIndex=M.expirationTime,n(c,M);else break;M=r(d)}}function w(R){if(x=!1,m(R),!v)if(r(c)!==null)v=!0,L(C);else{var M=r(d);M!==null&&ae(w,M.startTime-R)}}function C(R,M){v=!1,x&&(x=!1,g(z),z=-1),b=!0;var E=h;try{for(m(M),f=r(c);f!==null&&(!(f.expirationTime>M)||R&&!q());){var D=f.callback;if(typeof D=="function"){f.callback=null,h=f.priorityLevel;var K=D(f.expirationTime<=M);M=e.unstable_now(),typeof K=="function"?f.callback=K:f===r(c)&&a(c),m(M)}else a(c);f=r(c)}if(f!==null)var ue=!0;else{var hn=r(d);hn!==null&&ae(w,hn.startTime-M),ue=!1}return ue}finally{f=null,h=E,b=!1}}var N=!1,I=null,z=-1,F=5,_=-1;function q(){return!(e.unstable_now()-_<F)}function T(){if(I!==null){var R=e.unstable_now();_=R;var M=!0;try{M=I(!0,R)}finally{M?P():(N=!1,I=null)}}else N=!1}var P;if(typeof u=="function")P=function(){u(T)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,se=V.port2;V.port1.onmessage=T,P=function(){se.postMessage(null)}}else P=function(){j(T,0)};function L(R){I=R,N||(N=!0,P())}function ae(R,M){z=j(function(){R(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||b||(v=!0,L(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var E=h;h=M;try{return R()}finally{h=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var E=h;h=R;try{return M()}finally{h=E}},e.unstable_scheduleCallback=function(R,M,E){var D=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?D+E:D):E=D,R){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=E+K,R={id:p++,callback:M,priorityLevel:R,startTime:E,expirationTime:K,sortIndex:-1},E>D?(R.sortIndex=E,n(d,R),r(c)===null&&R===r(d)&&(x?(g(z),z=-1):x=!0,ae(w,E-D))):(R.sortIndex=K,n(c,R),v||b||(v=!0,L(C))),R},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(R){var M=h;return function(){var E=h;h=M;try{return R.apply(this,arguments)}finally{h=E}}}})(sd);od.exports=sd;var Nf=od.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=y,Me=Nf;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ld=new Set,yt={};function pr(e,n){Or(e,n),Or(e+"Capture",n)}function Or(e,n){for(yt[e]=n,e=0;e<n.length;e++)ld.add(n[e])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ao=Object.prototype.hasOwnProperty,Ef=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pl={},fl={};function Af(e){return ao.call(fl,e)?!0:ao.call(pl,e)?!1:Ef.test(e)?fl[e]=!0:(pl[e]=!0,!1)}function If(e,n,r,a){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tf(e,n,r,a){if(n===null||typeof n>"u"||If(e,n,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ee(e,n,r,a,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ve[n]=new Ee(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var ps=/[\-:]([a-z])/g;function fs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ps,fs);ve[n]=new Ee(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ps,fs);ve[n]=new Ee(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ps,fs);ve[n]=new Ee(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function hs(e,n,r,a){var i=ve.hasOwnProperty(n)?ve[n]:null;(i!==null?i.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Tf(n,r,i,a)&&(r=null),a||i===null?Af(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(n=i.attributeName,a=i.attributeNamespace,r===null?e.removeAttribute(n):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,a?e.setAttributeNS(a,n,r):e.setAttribute(n,r))))}var Cn=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jt=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),ms=Symbol.for("react.strict_mode"),io=Symbol.for("react.profiler"),cd=Symbol.for("react.provider"),dd=Symbol.for("react.context"),gs=Symbol.for("react.forward_ref"),oo=Symbol.for("react.suspense"),so=Symbol.for("react.suspense_list"),vs=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),ud=Symbol.for("react.offscreen"),hl=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=hl&&e[hl]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Ai;function ot(e){if(Ai===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Ai=n&&n[1]||""}return`
`+Ai+e}var Ii=!1;function Ti(e,n){if(!e||Ii)return"";Ii=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var a=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){a=d}e.call(n.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=a.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Ii=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ot(e):""}function Rf(e){switch(e.tag){case 5:return ot(e.type);case 16:return ot("Lazy");case 13:return ot("Suspense");case 19:return ot("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function lo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gr:return"Fragment";case mr:return"Portal";case io:return"Profiler";case ms:return"StrictMode";case oo:return"Suspense";case so:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dd:return(e.displayName||"Context")+".Consumer";case cd:return(e._context.displayName||"Context")+".Provider";case gs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vs:return n=e.displayName||null,n!==null?n:lo(e.type)||"Memo";case Sn:n=e._payload,e=e._init;try{return lo(e(n))}catch{}}return null}function zf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lo(n);case 8:return n===ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Of(e){var n=pd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qt(e){e._valueTracker||(e._valueTracker=Of(e))}function fd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),a="";return e&&(a=pd(e)?e.checked?"true":"false":e.value),e=a,e!==r?(n.setValue(e),!0):!1}function Ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function co(e,n){var r=n.checked;return ne({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ml(e,n){var r=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;r=Un(n.value!=null?n.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function hd(e,n){n=n.checked,n!=null&&hs(e,"checked",n,!1)}function uo(e,n){hd(e,n);var r=Un(n.value),a=n.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?po(e,n.type,r):n.hasOwnProperty("defaultValue")&&po(e,n.type,Un(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function gl(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function po(e,n,r){(n!=="number"||Ta(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var st=Array.isArray;function Er(e,n,r,a){if(e=e.options,n){n={};for(var i=0;i<r.length;i++)n["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=n.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&a&&(e[r].defaultSelected=!0)}else{for(r=""+Un(r),n=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function fo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return ne({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vl(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(S(92));if(st(r)){if(1<r.length)throw Error(S(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:Un(r)}}function md(e,n){var r=Un(n.value),a=Un(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function xl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function gd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ho(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?gd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xt,vd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,a,i){MSApp.execUnsafeLocalFunction(function(){return e(n,r,a,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Xt=Xt||document.createElement("div"),Xt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Xt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function wt(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Df=["Webkit","ms","Moz","O"];Object.keys(ut).forEach(function(e){Df.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ut[n]=ut[e]})});function xd(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||ut.hasOwnProperty(e)&&ut[e]?(""+n).trim():n+"px"}function bd(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var a=r.indexOf("--")===0,i=xd(r,n[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,i):e[r]=i}}var Lf=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mo(e,n){if(n){if(Lf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function go(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vo=null;function xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xo=null,Ar=null,Ir=null;function bl(e){if(e=Zt(e)){if(typeof xo!="function")throw Error(S(280));var n=e.stateNode;n&&(n=li(n),xo(e.stateNode,e.type,n))}}function yd(e){Ar?Ir?Ir.push(e):Ir=[e]:Ar=e}function wd(){if(Ar){var e=Ar,n=Ir;if(Ir=Ar=null,bl(e),n)for(e=0;e<n.length;e++)bl(n[e])}}function jd(e,n){return e(n)}function kd(){}var Ri=!1;function Cd(e,n,r){if(Ri)return e(n,r);Ri=!0;try{return jd(e,n,r)}finally{Ri=!1,(Ar!==null||Ir!==null)&&(kd(),wd())}}function jt(e,n){var r=e.stateNode;if(r===null)return null;var a=li(r);if(a===null)return null;r=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(S(231,n,typeof r));return r}var bo=!1;if(yn)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){bo=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{bo=!1}function Pf(e,n,r,a,i,o,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(r,d)}catch(p){this.onError(p)}}var pt=!1,Ra=null,za=!1,yo=null,_f={onError:function(e){pt=!0,Ra=e}};function Vf(e,n,r,a,i,o,s,l,c){pt=!1,Ra=null,Pf.apply(_f,arguments)}function Mf(e,n,r,a,i,o,s,l,c){if(Vf.apply(this,arguments),pt){if(pt){var d=Ra;pt=!1,Ra=null}else throw Error(S(198));za||(za=!0,yo=d)}}function fr(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function Nd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function yl(e){if(fr(e)!==e)throw Error(S(188))}function Bf(e){var n=e.alternate;if(!n){if(n=fr(e),n===null)throw Error(S(188));return n!==e?null:e}for(var r=e,a=n;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){r=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return yl(i),e;if(o===a)return yl(i),n;o=o.sibling}throw Error(S(188))}if(r.return!==a.return)r=i,a=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,a=o;break}if(l===a){s=!0,a=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,a=i;break}if(l===a){s=!0,a=o,r=i;break}l=l.sibling}if(!s)throw Error(S(189))}}if(r.alternate!==a)throw Error(S(190))}if(r.tag!==3)throw Error(S(188));return r.stateNode.current===r?e:n}function Sd(e){return e=Bf(e),e!==null?Ed(e):null}function Ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ed(e);if(n!==null)return n;e=e.sibling}return null}var Ad=Me.unstable_scheduleCallback,wl=Me.unstable_cancelCallback,Ff=Me.unstable_shouldYield,Uf=Me.unstable_requestPaint,ie=Me.unstable_now,Zf=Me.unstable_getCurrentPriorityLevel,bs=Me.unstable_ImmediatePriority,Id=Me.unstable_UserBlockingPriority,Oa=Me.unstable_NormalPriority,Kf=Me.unstable_LowPriority,Td=Me.unstable_IdlePriority,ai=null,un=null;function Hf(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:qf,$f=Math.log,Wf=Math.LN2;function qf(e){return e>>>=0,e===0?32:31-($f(e)/Wf|0)|0}var ea=64,na=4194304;function lt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Da(e,n){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?a=lt(l):(o&=s,o!==0&&(a=lt(o)))}else s=r&~i,s!==0?a=lt(s):o!==0&&(a=lt(o));if(a===0)return 0;if(n!==0&&n!==a&&!(n&i)&&(i=a&-a,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(a&4&&(a|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)r=31-rn(n),i=1<<r,a|=e[r],n&=~i;return a}function Yf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gf(e,n){for(var r=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-rn(o),l=1<<s,c=i[s];c===-1?(!(l&r)||l&a)&&(i[s]=Yf(l,n)):c<=n&&(e.expiredLanes|=l),o&=~l}}function wo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rd(){var e=ea;return ea<<=1,!(ea&4194240)&&(ea=64),e}function zi(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Ft(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-rn(n),e[n]=r}function Jf(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-rn(r),o=1<<i;n[i]=0,a[i]=-1,e[i]=-1,r&=~o}}function ys(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var a=31-rn(r),i=1<<a;i&n|e[a]&n&&(e[a]|=n),r&=~i}}var $=0;function zd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Od,ws,Dd,Ld,Pd,jo=!1,ra=[],On=null,Dn=null,Ln=null,kt=new Map,Ct=new Map,An=[],Qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jl(e,n){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":kt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ct.delete(n.pointerId)}}function Jr(e,n,r,a,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:r,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Zt(n),n!==null&&ws(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Xf(e,n,r,a,i){switch(n){case"focusin":return On=Jr(On,e,n,r,a,i),!0;case"dragenter":return Dn=Jr(Dn,e,n,r,a,i),!0;case"mouseover":return Ln=Jr(Ln,e,n,r,a,i),!0;case"pointerover":var o=i.pointerId;return kt.set(o,Jr(kt.get(o)||null,e,n,r,a,i)),!0;case"gotpointercapture":return o=i.pointerId,Ct.set(o,Jr(Ct.get(o)||null,e,n,r,a,i)),!0}return!1}function _d(e){var n=Xn(e.target);if(n!==null){var r=fr(n);if(r!==null){if(n=r.tag,n===13){if(n=Nd(r),n!==null){e.blockedOn=n,Pd(e.priority,function(){Dd(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function va(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=ko(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);vo=a,r.target.dispatchEvent(a),vo=null}else return n=Zt(r),n!==null&&ws(n),e.blockedOn=r,!1;n.shift()}return!0}function kl(e,n,r){va(e)&&r.delete(n)}function eh(){jo=!1,On!==null&&va(On)&&(On=null),Dn!==null&&va(Dn)&&(Dn=null),Ln!==null&&va(Ln)&&(Ln=null),kt.forEach(kl),Ct.forEach(kl)}function Qr(e,n){e.blockedOn===n&&(e.blockedOn=null,jo||(jo=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,eh)))}function Nt(e){function n(i){return Qr(i,e)}if(0<ra.length){Qr(ra[0],e);for(var r=1;r<ra.length;r++){var a=ra[r];a.blockedOn===e&&(a.blockedOn=null)}}for(On!==null&&Qr(On,e),Dn!==null&&Qr(Dn,e),Ln!==null&&Qr(Ln,e),kt.forEach(n),Ct.forEach(n),r=0;r<An.length;r++)a=An[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<An.length&&(r=An[0],r.blockedOn===null);)_d(r),r.blockedOn===null&&An.shift()}var Tr=Cn.ReactCurrentBatchConfig,La=!0;function nh(e,n,r,a){var i=$,o=Tr.transition;Tr.transition=null;try{$=1,js(e,n,r,a)}finally{$=i,Tr.transition=o}}function rh(e,n,r,a){var i=$,o=Tr.transition;Tr.transition=null;try{$=4,js(e,n,r,a)}finally{$=i,Tr.transition=o}}function js(e,n,r,a){if(La){var i=ko(e,n,r,a);if(i===null)Ui(e,n,a,Pa,r),jl(e,a);else if(Xf(i,e,n,r,a))a.stopPropagation();else if(jl(e,a),n&4&&-1<Qf.indexOf(e)){for(;i!==null;){var o=Zt(i);if(o!==null&&Od(o),o=ko(e,n,r,a),o===null&&Ui(e,n,a,Pa,r),o===i)break;i=o}i!==null&&a.stopPropagation()}else Ui(e,n,a,null,r)}}var Pa=null;function ko(e,n,r,a){if(Pa=null,e=xs(a),e=Xn(e),e!==null)if(n=fr(e),n===null)e=null;else if(r=n.tag,r===13){if(e=Nd(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Pa=e,null}function Vd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zf()){case bs:return 1;case Id:return 4;case Oa:case Kf:return 16;case Td:return 536870912;default:return 16}default:return 16}}var Tn=null,ks=null,xa=null;function Md(){if(xa)return xa;var e,n=ks,r=n.length,a,i="value"in Tn?Tn.value:Tn.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(a=1;a<=s&&n[r-a]===i[o-a];a++);return xa=i.slice(e,1<a?1-a:void 0)}function ba(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ta(){return!0}function Cl(){return!1}function Fe(e){function n(r,a,i,o,s){this._reactName=r,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ta:Cl,this.isPropagationStopped=Cl,this}return ne(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),n}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=Fe(Ur),Ut=ne({},Ur,{view:0,detail:0}),th=Fe(Ut),Oi,Di,Xr,ii=ne({},Ut,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(Oi=e.screenX-Xr.screenX,Di=e.screenY-Xr.screenY):Di=Oi=0,Xr=e),Oi)},movementY:function(e){return"movementY"in e?e.movementY:Di}}),Nl=Fe(ii),ah=ne({},ii,{dataTransfer:0}),ih=Fe(ah),oh=ne({},Ut,{relatedTarget:0}),Li=Fe(oh),sh=ne({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),lh=Fe(sh),ch=ne({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dh=Fe(ch),uh=ne({},Ur,{data:0}),Sl=Fe(uh),ph={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hh[e])?!!n[e]:!1}function Ns(){return mh}var gh=ne({},Ut,{key:function(e){if(e.key){var n=ph[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vh=Fe(gh),xh=ne({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),El=Fe(xh),bh=ne({},Ut,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),yh=Fe(bh),wh=ne({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),jh=Fe(wh),kh=ne({},ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ch=Fe(kh),Nh=[9,13,27,32],Ss=yn&&"CompositionEvent"in window,ft=null;yn&&"documentMode"in document&&(ft=document.documentMode);var Sh=yn&&"TextEvent"in window&&!ft,Bd=yn&&(!Ss||ft&&8<ft&&11>=ft),Al=" ",Il=!1;function Fd(e,n){switch(e){case"keyup":return Nh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function Eh(e,n){switch(e){case"compositionend":return Ud(n);case"keypress":return n.which!==32?null:(Il=!0,Al);case"textInput":return e=n.data,e===Al&&Il?null:e;default:return null}}function Ah(e,n){if(vr)return e==="compositionend"||!Ss&&Fd(e,n)?(e=Md(),xa=ks=Tn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bd&&n.locale!=="ko"?null:n.data;default:return null}}var Ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ih[e.type]:n==="textarea"}function Zd(e,n,r,a){yd(a),n=_a(n,"onChange"),0<n.length&&(r=new Cs("onChange","change",null,r,a),e.push({event:r,listeners:n}))}var ht=null,St=null;function Th(e){eu(e,0)}function oi(e){var n=yr(e);if(fd(n))return e}function Rh(e,n){if(e==="change")return n}var Kd=!1;if(yn){var Pi;if(yn){var _i="oninput"in document;if(!_i){var Rl=document.createElement("div");Rl.setAttribute("oninput","return;"),_i=typeof Rl.oninput=="function"}Pi=_i}else Pi=!1;Kd=Pi&&(!document.documentMode||9<document.documentMode)}function zl(){ht&&(ht.detachEvent("onpropertychange",Hd),St=ht=null)}function Hd(e){if(e.propertyName==="value"&&oi(St)){var n=[];Zd(n,St,e,xs(e)),Cd(Th,n)}}function zh(e,n,r){e==="focusin"?(zl(),ht=n,St=r,ht.attachEvent("onpropertychange",Hd)):e==="focusout"&&zl()}function Oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(St)}function Dh(e,n){if(e==="click")return oi(n)}function Lh(e,n){if(e==="input"||e==="change")return oi(n)}function Ph(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var an=typeof Object.is=="function"?Object.is:Ph;function Et(e,n){if(an(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),a=Object.keys(n);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var i=r[a];if(!ao.call(n,i)||!an(e[i],n[i]))return!1}return!0}function Ol(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dl(e,n){var r=Ol(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=n&&a>=n)return{node:r,offset:n-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ol(r)}}function $d(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$d(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wd(){for(var e=window,n=Ta();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Ta(e.document)}return n}function Es(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function _h(e){var n=Wd(),r=e.focusedElem,a=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&$d(r.ownerDocument.documentElement,r)){if(a!==null&&Es(r)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(a.start,i);a=a.end===void 0?o:Math.min(a.end,i),!e.extend&&o>a&&(i=a,a=o,o=i),i=Dl(r,o);var s=Dl(r,a);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>a?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vh=yn&&"documentMode"in document&&11>=document.documentMode,xr=null,Co=null,mt=null,No=!1;function Ll(e,n,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;No||xr==null||xr!==Ta(a)||(a=xr,"selectionStart"in a&&Es(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),mt&&Et(mt,a)||(mt=a,a=_a(Co,"onSelect"),0<a.length&&(n=new Cs("onSelect","select",null,n,r),e.push({event:n,listeners:a}),n.target=xr)))}function aa(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var br={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},Vi={},qd={};yn&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function si(e){if(Vi[e])return Vi[e];if(!br[e])return e;var n=br[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in qd)return Vi[e]=n[r];return e}var Yd=si("animationend"),Gd=si("animationiteration"),Jd=si("animationstart"),Qd=si("transitionend"),Xd=new Map,Pl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,n){Xd.set(e,n),pr(n,[e])}for(var Mi=0;Mi<Pl.length;Mi++){var Bi=Pl[Mi],Mh=Bi.toLowerCase(),Bh=Bi[0].toUpperCase()+Bi.slice(1);Kn(Mh,"on"+Bh)}Kn(Yd,"onAnimationEnd");Kn(Gd,"onAnimationIteration");Kn(Jd,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Qd,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ct="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ct));function _l(e,n,r){var a=e.type||"unknown-event";e.currentTarget=r,Mf(a,n,void 0,e),e.currentTarget=null}function eu(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],i=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var s=a.length-1;0<=s;s--){var l=a[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;_l(i,l,d),o=c}else for(s=0;s<a.length;s++){if(l=a[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;_l(i,l,d),o=c}}}if(za)throw e=yo,za=!1,yo=null,e}function G(e,n){var r=n[To];r===void 0&&(r=n[To]=new Set);var a=e+"__bubble";r.has(a)||(nu(n,e,2,!1),r.add(a))}function Fi(e,n,r){var a=0;n&&(a|=4),nu(r,e,a,n)}var ia="_reactListening"+Math.random().toString(36).slice(2);function At(e){if(!e[ia]){e[ia]=!0,ld.forEach(function(r){r!=="selectionchange"&&(Fh.has(r)||Fi(r,!1,e),Fi(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ia]||(n[ia]=!0,Fi("selectionchange",!1,n))}}function nu(e,n,r,a){switch(Vd(n)){case 1:var i=nh;break;case 4:i=rh;break;default:i=js}r=i.bind(null,n,r,e),i=void 0,!bo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,r,{capture:!0,passive:i}):e.addEventListener(n,r,!0):i!==void 0?e.addEventListener(n,r,{passive:i}):e.addEventListener(n,r,!1)}function Ui(e,n,r,a,i){var o=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=a.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Xn(l),s===null)return;if(c=s.tag,c===5||c===6){a=o=s;continue e}l=l.parentNode}}a=a.return}Cd(function(){var d=o,p=xs(r),f=[];e:{var h=Xd.get(e);if(h!==void 0){var b=Cs,v=e;switch(e){case"keypress":if(ba(r)===0)break e;case"keydown":case"keyup":b=vh;break;case"focusin":v="focus",b=Li;break;case"focusout":v="blur",b=Li;break;case"beforeblur":case"afterblur":b=Li;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=yh;break;case Yd:case Gd:case Jd:b=lh;break;case Qd:b=jh;break;case"scroll":b=th;break;case"wheel":b=Ch;break;case"copy":case"cut":case"paste":b=dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=El}var x=(n&4)!==0,j=!x&&e==="scroll",g=x?h!==null?h+"Capture":null:h;x=[];for(var u=d,m;u!==null;){m=u;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=jt(u,g),w!=null&&x.push(It(u,w,m)))),j)break;u=u.return}0<x.length&&(h=new b(h,v,null,r,p),f.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&r!==vo&&(v=r.relatedTarget||r.fromElement)&&(Xn(v)||v[wn]))break e;if((b||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,b?(v=r.relatedTarget||r.toElement,b=d,v=v?Xn(v):null,v!==null&&(j=fr(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(b=null,v=d),b!==v)){if(x=Nl,w="onMouseLeave",g="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=El,w="onPointerLeave",g="onPointerEnter",u="pointer"),j=b==null?h:yr(b),m=v==null?h:yr(v),h=new x(w,u+"leave",b,r,p),h.target=j,h.relatedTarget=m,w=null,Xn(p)===d&&(x=new x(g,u+"enter",v,r,p),x.target=m,x.relatedTarget=j,w=x),j=w,b&&v)n:{for(x=b,g=v,u=0,m=x;m;m=hr(m))u++;for(m=0,w=g;w;w=hr(w))m++;for(;0<u-m;)x=hr(x),u--;for(;0<m-u;)g=hr(g),m--;for(;u--;){if(x===g||g!==null&&x===g.alternate)break n;x=hr(x),g=hr(g)}x=null}else x=null;b!==null&&Vl(f,h,b,x,!1),v!==null&&j!==null&&Vl(f,j,v,x,!0)}}e:{if(h=d?yr(d):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var C=Rh;else if(Tl(h))if(Kd)C=Lh;else{C=Oh;var N=zh}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Dh);if(C&&(C=C(e,d))){Zd(f,C,r,p);break e}N&&N(e,h,d),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&po(h,"number",h.value)}switch(N=d?yr(d):window,e){case"focusin":(Tl(N)||N.contentEditable==="true")&&(xr=N,Co=d,mt=null);break;case"focusout":mt=Co=xr=null;break;case"mousedown":No=!0;break;case"contextmenu":case"mouseup":case"dragend":No=!1,Ll(f,r,p);break;case"selectionchange":if(Vh)break;case"keydown":case"keyup":Ll(f,r,p)}var I;if(Ss)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else vr?Fd(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Bd&&r.locale!=="ko"&&(vr||z!=="onCompositionStart"?z==="onCompositionEnd"&&vr&&(I=Md()):(Tn=p,ks="value"in Tn?Tn.value:Tn.textContent,vr=!0)),N=_a(d,z),0<N.length&&(z=new Sl(z,e,null,r,p),f.push({event:z,listeners:N}),I?z.data=I:(I=Ud(r),I!==null&&(z.data=I)))),(I=Sh?Eh(e,r):Ah(e,r))&&(d=_a(d,"onBeforeInput"),0<d.length&&(p=new Sl("onBeforeInput","beforeinput",null,r,p),f.push({event:p,listeners:d}),p.data=I))}eu(f,n)})}function It(e,n,r){return{instance:e,listener:n,currentTarget:r}}function _a(e,n){for(var r=n+"Capture",a=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=jt(e,r),o!=null&&a.unshift(It(e,o,i)),o=jt(e,n),o!=null&&a.push(It(e,o,i))),e=e.return}return a}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vl(e,n,r,a,i){for(var o=n._reactName,s=[];r!==null&&r!==a;){var l=r,c=l.alternate,d=l.stateNode;if(c!==null&&c===a)break;l.tag===5&&d!==null&&(l=d,i?(c=jt(r,o),c!=null&&s.unshift(It(r,c,l))):i||(c=jt(r,o),c!=null&&s.push(It(r,c,l)))),r=r.return}s.length!==0&&e.push({event:n,listeners:s})}var Uh=/\r\n?/g,Zh=/\u0000|\uFFFD/g;function Ml(e){return(typeof e=="string"?e:""+e).replace(Uh,`
`).replace(Zh,"")}function oa(e,n,r){if(n=Ml(n),Ml(e)!==n&&r)throw Error(S(425))}function Va(){}var So=null,Eo=null;function Ao(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Io=typeof setTimeout=="function"?setTimeout:void 0,Kh=typeof clearTimeout=="function"?clearTimeout:void 0,Bl=typeof Promise=="function"?Promise:void 0,Hh=typeof queueMicrotask=="function"?queueMicrotask:typeof Bl<"u"?function(e){return Bl.resolve(null).then(e).catch($h)}:Io;function $h(e){setTimeout(function(){throw e})}function Zi(e,n){var r=n,a=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(a===0){e.removeChild(i),Nt(n);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=i}while(r);Nt(n)}function Pn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Fl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),dn="__reactFiber$"+Zr,Tt="__reactProps$"+Zr,wn="__reactContainer$"+Zr,To="__reactEvents$"+Zr,Wh="__reactListeners$"+Zr,qh="__reactHandles$"+Zr;function Xn(e){var n=e[dn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[wn]||r[dn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Fl(e);e!==null;){if(r=e[dn])return r;e=Fl(e)}return n}e=r,r=e.parentNode}return null}function Zt(e){return e=e[dn]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function li(e){return e[Tt]||null}var Ro=[],wr=-1;function Hn(e){return{current:e}}function J(e){0>wr||(e.current=Ro[wr],Ro[wr]=null,wr--)}function Y(e,n){wr++,Ro[wr]=e.current,e.current=n}var Zn={},ke=Hn(Zn),Te=Hn(!1),or=Zn;function Dr(e,n){var r=e.type.contextTypes;if(!r)return Zn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=n[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function Ma(){J(Te),J(ke)}function Ul(e,n,r){if(ke.current!==Zn)throw Error(S(168));Y(ke,n),Y(Te,r)}function ru(e,n,r){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var i in a)if(!(i in n))throw Error(S(108,zf(e)||"Unknown",i));return ne({},r,a)}function Ba(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,or=ke.current,Y(ke,e),Y(Te,Te.current),!0}function Zl(e,n,r){var a=e.stateNode;if(!a)throw Error(S(169));r?(e=ru(e,n,or),a.__reactInternalMemoizedMergedChildContext=e,J(Te),J(ke),Y(ke,e)):J(Te),Y(Te,r)}var gn=null,ci=!1,Ki=!1;function tu(e){gn===null?gn=[e]:gn.push(e)}function Yh(e){ci=!0,tu(e)}function $n(){if(!Ki&&gn!==null){Ki=!0;var e=0,n=$;try{var r=gn;for($=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}gn=null,ci=!1}catch(i){throw gn!==null&&(gn=gn.slice(e+1)),Ad(bs,$n),i}finally{$=n,Ki=!1}}return null}var jr=[],kr=0,Fa=null,Ua=0,$e=[],We=0,sr=null,vn=1,xn="";function Jn(e,n){jr[kr++]=Ua,jr[kr++]=Fa,Fa=e,Ua=n}function au(e,n,r){$e[We++]=vn,$e[We++]=xn,$e[We++]=sr,sr=e;var a=vn;e=xn;var i=32-rn(a)-1;a&=~(1<<i),r+=1;var o=32-rn(n)+i;if(30<o){var s=i-i%5;o=(a&(1<<s)-1).toString(32),a>>=s,i-=s,vn=1<<32-rn(n)+i|r<<i|a,xn=o+e}else vn=1<<o|r<<i|a,xn=e}function As(e){e.return!==null&&(Jn(e,1),au(e,1,0))}function Is(e){for(;e===Fa;)Fa=jr[--kr],jr[kr]=null,Ua=jr[--kr],jr[kr]=null;for(;e===sr;)sr=$e[--We],$e[We]=null,xn=$e[--We],$e[We]=null,vn=$e[--We],$e[We]=null}var Ve=null,_e=null,Q=!1,nn=null;function iu(e,n){var r=qe(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function Kl(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ve=e,_e=Pn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ve=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=sr!==null?{id:vn,overflow:xn}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=qe(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,Ve=e,_e=null,!0):!1;default:return!1}}function zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oo(e){if(Q){var n=_e;if(n){var r=n;if(!Kl(e,n)){if(zo(e))throw Error(S(418));n=Pn(r.nextSibling);var a=Ve;n&&Kl(e,n)?iu(a,r):(e.flags=e.flags&-4097|2,Q=!1,Ve=e)}}else{if(zo(e))throw Error(S(418));e.flags=e.flags&-4097|2,Q=!1,Ve=e}}}function Hl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function sa(e){if(e!==Ve)return!1;if(!Q)return Hl(e),Q=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ao(e.type,e.memoizedProps)),n&&(n=_e)){if(zo(e))throw ou(),Error(S(418));for(;n;)iu(e,n),n=Pn(n.nextSibling)}if(Hl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){_e=Pn(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=Ve?Pn(e.stateNode.nextSibling):null;return!0}function ou(){for(var e=_e;e;)e=Pn(e.nextSibling)}function Lr(){_e=Ve=null,Q=!1}function Ts(e){nn===null?nn=[e]:nn.push(e)}var Gh=Cn.ReactCurrentBatchConfig;function et(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(S(309));var a=r.stateNode}if(!a)throw Error(S(147,e));var i=a,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(S(284));if(!r._owner)throw Error(S(290,e))}return e}function la(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function $l(e){var n=e._init;return n(e._payload)}function su(e){function n(g,u){if(e){var m=g.deletions;m===null?(g.deletions=[u],g.flags|=16):m.push(u)}}function r(g,u){if(!e)return null;for(;u!==null;)n(g,u),u=u.sibling;return null}function a(g,u){for(g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function i(g,u){return g=Bn(g,u),g.index=0,g.sibling=null,g}function o(g,u,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<u?(g.flags|=2,u):m):(g.flags|=2,u)):(g.flags|=1048576,u)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,u,m,w){return u===null||u.tag!==6?(u=Ji(m,g.mode,w),u.return=g,u):(u=i(u,m),u.return=g,u)}function c(g,u,m,w){var C=m.type;return C===gr?p(g,u,m.props.children,w,m.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sn&&$l(C)===u.type)?(w=i(u,m.props),w.ref=et(g,u,m),w.return=g,w):(w=Sa(m.type,m.key,m.props,null,g.mode,w),w.ref=et(g,u,m),w.return=g,w)}function d(g,u,m,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=Qi(m,g.mode,w),u.return=g,u):(u=i(u,m.children||[]),u.return=g,u)}function p(g,u,m,w,C){return u===null||u.tag!==7?(u=ar(m,g.mode,w,C),u.return=g,u):(u=i(u,m),u.return=g,u)}function f(g,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ji(""+u,g.mode,m),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Jt:return m=Sa(u.type,u.key,u.props,null,g.mode,m),m.ref=et(g,null,u),m.return=g,m;case mr:return u=Qi(u,g.mode,m),u.return=g,u;case Sn:var w=u._init;return f(g,w(u._payload),m)}if(st(u)||Yr(u))return u=ar(u,g.mode,m,null),u.return=g,u;la(g,u)}return null}function h(g,u,m,w){var C=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:l(g,u,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Jt:return m.key===C?c(g,u,m,w):null;case mr:return m.key===C?d(g,u,m,w):null;case Sn:return C=m._init,h(g,u,C(m._payload),w)}if(st(m)||Yr(m))return C!==null?null:p(g,u,m,w,null);la(g,m)}return null}function b(g,u,m,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,l(u,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Jt:return g=g.get(w.key===null?m:w.key)||null,c(u,g,w,C);case mr:return g=g.get(w.key===null?m:w.key)||null,d(u,g,w,C);case Sn:var N=w._init;return b(g,u,m,N(w._payload),C)}if(st(w)||Yr(w))return g=g.get(m)||null,p(u,g,w,C,null);la(u,w)}return null}function v(g,u,m,w){for(var C=null,N=null,I=u,z=u=0,F=null;I!==null&&z<m.length;z++){I.index>z?(F=I,I=null):F=I.sibling;var _=h(g,I,m[z],w);if(_===null){I===null&&(I=F);break}e&&I&&_.alternate===null&&n(g,I),u=o(_,u,z),N===null?C=_:N.sibling=_,N=_,I=F}if(z===m.length)return r(g,I),Q&&Jn(g,z),C;if(I===null){for(;z<m.length;z++)I=f(g,m[z],w),I!==null&&(u=o(I,u,z),N===null?C=I:N.sibling=I,N=I);return Q&&Jn(g,z),C}for(I=a(g,I);z<m.length;z++)F=b(I,g,z,m[z],w),F!==null&&(e&&F.alternate!==null&&I.delete(F.key===null?z:F.key),u=o(F,u,z),N===null?C=F:N.sibling=F,N=F);return e&&I.forEach(function(q){return n(g,q)}),Q&&Jn(g,z),C}function x(g,u,m,w){var C=Yr(m);if(typeof C!="function")throw Error(S(150));if(m=C.call(m),m==null)throw Error(S(151));for(var N=C=null,I=u,z=u=0,F=null,_=m.next();I!==null&&!_.done;z++,_=m.next()){I.index>z?(F=I,I=null):F=I.sibling;var q=h(g,I,_.value,w);if(q===null){I===null&&(I=F);break}e&&I&&q.alternate===null&&n(g,I),u=o(q,u,z),N===null?C=q:N.sibling=q,N=q,I=F}if(_.done)return r(g,I),Q&&Jn(g,z),C;if(I===null){for(;!_.done;z++,_=m.next())_=f(g,_.value,w),_!==null&&(u=o(_,u,z),N===null?C=_:N.sibling=_,N=_);return Q&&Jn(g,z),C}for(I=a(g,I);!_.done;z++,_=m.next())_=b(I,g,z,_.value,w),_!==null&&(e&&_.alternate!==null&&I.delete(_.key===null?z:_.key),u=o(_,u,z),N===null?C=_:N.sibling=_,N=_);return e&&I.forEach(function(T){return n(g,T)}),Q&&Jn(g,z),C}function j(g,u,m,w){if(typeof m=="object"&&m!==null&&m.type===gr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Jt:e:{for(var C=m.key,N=u;N!==null;){if(N.key===C){if(C=m.type,C===gr){if(N.tag===7){r(g,N.sibling),u=i(N,m.props.children),u.return=g,g=u;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sn&&$l(C)===N.type){r(g,N.sibling),u=i(N,m.props),u.ref=et(g,N,m),u.return=g,g=u;break e}r(g,N);break}else n(g,N);N=N.sibling}m.type===gr?(u=ar(m.props.children,g.mode,w,m.key),u.return=g,g=u):(w=Sa(m.type,m.key,m.props,null,g.mode,w),w.ref=et(g,u,m),w.return=g,g=w)}return s(g);case mr:e:{for(N=m.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){r(g,u.sibling),u=i(u,m.children||[]),u.return=g,g=u;break e}else{r(g,u);break}else n(g,u);u=u.sibling}u=Qi(m,g.mode,w),u.return=g,g=u}return s(g);case Sn:return N=m._init,j(g,u,N(m._payload),w)}if(st(m))return v(g,u,m,w);if(Yr(m))return x(g,u,m,w);la(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(r(g,u.sibling),u=i(u,m),u.return=g,g=u):(r(g,u),u=Ji(m,g.mode,w),u.return=g,g=u),s(g)):r(g,u)}return j}var Pr=su(!0),lu=su(!1),Za=Hn(null),Ka=null,Cr=null,Rs=null;function zs(){Rs=Cr=Ka=null}function Os(e){var n=Za.current;J(Za),e._currentValue=n}function Do(e,n,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===r)break;e=e.return}}function Rr(e,n){Ka=e,Rs=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ie=!0),e.firstContext=null)}function Ge(e){var n=e._currentValue;if(Rs!==e)if(e={context:e,memoizedValue:n,next:null},Cr===null){if(Ka===null)throw Error(S(308));Cr=e,Ka.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return n}var er=null;function Ds(e){er===null?er=[e]:er.push(e)}function cu(e,n,r,a){var i=n.interleaved;return i===null?(r.next=r,Ds(n)):(r.next=i.next,i.next=r),n.interleaved=r,jn(e,a)}function jn(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var En=!1;function Ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function _n(e,n,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,H&2){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,jn(e,r)}return i=a.interleaved,i===null?(n.next=n,Ds(a)):(n.next=i.next,i.next=n),a.interleaved=n,jn(e,r)}function ya(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,r|=a,n.lanes=r,ys(e,r)}}function Wl(e,n){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=n:o=o.next=n}else i=o=n;r={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function Ha(e,n,r,a){var i=e.updateQueue;En=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?o=d:s.next=d,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;s=0,p=d=c=null,l=o;do{var h=l.lane,b=l.eventTime;if((a&h)===h){p!==null&&(p=p.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(h=n,b=r,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(b,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(b,f,h):v,h==null)break e;f=ne({},f,h);break e;case 2:En=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else b={eventTime:b,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=b,c=f):p=p.next=b,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(c=f),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);cr|=s,e.lanes=s,e.memoizedState=f}}function ql(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],i=a.callback;if(i!==null){if(a.callback=null,a=r,typeof i!="function")throw Error(S(191,i));i.call(a)}}}var Kt={},pn=Hn(Kt),Rt=Hn(Kt),zt=Hn(Kt);function nr(e){if(e===Kt)throw Error(S(174));return e}function Ps(e,n){switch(Y(zt,n),Y(Rt,e),Y(pn,Kt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ho(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ho(n,e)}J(pn),Y(pn,n)}function _r(){J(pn),J(Rt),J(zt)}function uu(e){nr(zt.current);var n=nr(pn.current),r=ho(n,e.type);n!==r&&(Y(Rt,e),Y(pn,r))}function _s(e){Rt.current===e&&(J(pn),J(Rt))}var X=Hn(0);function $a(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hi=[];function Vs(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var wa=Cn.ReactCurrentDispatcher,$i=Cn.ReactCurrentBatchConfig,lr=0,ee=null,ce=null,pe=null,Wa=!1,gt=!1,Ot=0,Jh=0;function xe(){throw Error(S(321))}function Ms(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!an(e[r],n[r]))return!1;return!0}function Bs(e,n,r,a,i,o){if(lr=o,ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,wa.current=e===null||e.memoizedState===null?nm:rm,e=r(a,i),gt){o=0;do{if(gt=!1,Ot=0,25<=o)throw Error(S(301));o+=1,pe=ce=null,n.updateQueue=null,wa.current=tm,e=r(a,i)}while(gt)}if(wa.current=qa,n=ce!==null&&ce.next!==null,lr=0,pe=ce=ee=null,Wa=!1,n)throw Error(S(300));return e}function Fs(){var e=Ot!==0;return Ot=0,e}function cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ee.memoizedState=pe=e:pe=pe.next=e,pe}function Je(){if(ce===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var n=pe===null?ee.memoizedState:pe.next;if(n!==null)pe=n,ce=e;else{if(e===null)throw Error(S(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?ee.memoizedState=pe=e:pe=pe.next=e}return pe}function Dt(e,n){return typeof n=="function"?n(e):n}function Wi(e){var n=Je(),r=n.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var a=ce,i=a.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}a.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,a=a.baseState;var l=s=null,c=null,d=o;do{var p=d.lane;if((lr&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var f={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=f,s=a):c=c.next=f,ee.lanes|=p,cr|=p}d=d.next}while(d!==null&&d!==o);c===null?s=a:c.next=l,an(a,n.memoizedState)||(Ie=!0),n.memoizedState=a,n.baseState=s,n.baseQueue=c,r.lastRenderedState=a}if(e=r.interleaved,e!==null){i=e;do o=i.lane,ee.lanes|=o,cr|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function qi(e){var n=Je(),r=n.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var a=r.dispatch,i=r.pending,o=n.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);an(o,n.memoizedState)||(Ie=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),r.lastRenderedState=o}return[o,a]}function pu(){}function fu(e,n){var r=ee,a=Je(),i=n(),o=!an(a.memoizedState,i);if(o&&(a.memoizedState=i,Ie=!0),a=a.queue,Us(gu.bind(null,r,a,e),[e]),a.getSnapshot!==n||o||pe!==null&&pe.memoizedState.tag&1){if(r.flags|=2048,Lt(9,mu.bind(null,r,a,i,n),void 0,null),fe===null)throw Error(S(349));lr&30||hu(r,n,i)}return i}function hu(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ee.updateQueue,n===null?(n={lastEffect:null,stores:null},ee.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function mu(e,n,r,a){n.value=r,n.getSnapshot=a,vu(n)&&xu(e)}function gu(e,n,r){return r(function(){vu(n)&&xu(e)})}function vu(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!an(e,r)}catch{return!0}}function xu(e){var n=jn(e,1);n!==null&&tn(n,e,1,-1)}function Yl(e){var n=cn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dt,lastRenderedState:e},n.queue=e,e=e.dispatch=em.bind(null,ee,e),[n.memoizedState,e]}function Lt(e,n,r,a){return e={tag:e,create:n,destroy:r,deps:a,next:null},n=ee.updateQueue,n===null?(n={lastEffect:null,stores:null},ee.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,n.lastEffect=e)),e}function bu(){return Je().memoizedState}function ja(e,n,r,a){var i=cn();ee.flags|=e,i.memoizedState=Lt(1|n,r,void 0,a===void 0?null:a)}function di(e,n,r,a){var i=Je();a=a===void 0?null:a;var o=void 0;if(ce!==null){var s=ce.memoizedState;if(o=s.destroy,a!==null&&Ms(a,s.deps)){i.memoizedState=Lt(n,r,o,a);return}}ee.flags|=e,i.memoizedState=Lt(1|n,r,o,a)}function Gl(e,n){return ja(8390656,8,e,n)}function Us(e,n){return di(2048,8,e,n)}function yu(e,n){return di(4,2,e,n)}function wu(e,n){return di(4,4,e,n)}function ju(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ku(e,n,r){return r=r!=null?r.concat([e]):null,di(4,4,ju.bind(null,n,e),r)}function Zs(){}function Cu(e,n){var r=Je();n=n===void 0?null:n;var a=r.memoizedState;return a!==null&&n!==null&&Ms(n,a[1])?a[0]:(r.memoizedState=[e,n],e)}function Nu(e,n){var r=Je();n=n===void 0?null:n;var a=r.memoizedState;return a!==null&&n!==null&&Ms(n,a[1])?a[0]:(e=e(),r.memoizedState=[e,n],e)}function Su(e,n,r){return lr&21?(an(r,n)||(r=Rd(),ee.lanes|=r,cr|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=r)}function Qh(e,n){var r=$;$=r!==0&&4>r?r:4,e(!0);var a=$i.transition;$i.transition={};try{e(!1),n()}finally{$=r,$i.transition=a}}function Eu(){return Je().memoizedState}function Xh(e,n,r){var a=Mn(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},Au(e))Iu(n,r);else if(r=cu(e,n,r,a),r!==null){var i=Ne();tn(r,e,a,i),Tu(r,n,a)}}function em(e,n,r){var a=Mn(e),i={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(Au(e))Iu(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,an(l,s)){var c=n.interleaved;c===null?(i.next=i,Ds(n)):(i.next=c.next,c.next=i),n.interleaved=i;return}}catch{}finally{}r=cu(e,n,i,a),r!==null&&(i=Ne(),tn(r,e,a,i),Tu(r,n,a))}}function Au(e){var n=e.alternate;return e===ee||n!==null&&n===ee}function Iu(e,n){gt=Wa=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Tu(e,n,r){if(r&4194240){var a=n.lanes;a&=e.pendingLanes,r|=a,n.lanes=r,ys(e,r)}}var qa={readContext:Ge,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},nm={readContext:Ge,useCallback:function(e,n){return cn().memoizedState=[e,n===void 0?null:n],e},useContext:Ge,useEffect:Gl,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,ja(4194308,4,ju.bind(null,n,e),r)},useLayoutEffect:function(e,n){return ja(4194308,4,e,n)},useInsertionEffect:function(e,n){return ja(4,2,e,n)},useMemo:function(e,n){var r=cn();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var a=cn();return n=r!==void 0?r(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Xh.bind(null,ee,e),[a.memoizedState,e]},useRef:function(e){var n=cn();return e={current:e},n.memoizedState=e},useState:Yl,useDebugValue:Zs,useDeferredValue:function(e){return cn().memoizedState=e},useTransition:function(){var e=Yl(!1),n=e[0];return e=Qh.bind(null,e[1]),cn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var a=ee,i=cn();if(Q){if(r===void 0)throw Error(S(407));r=r()}else{if(r=n(),fe===null)throw Error(S(349));lr&30||hu(a,n,r)}i.memoizedState=r;var o={value:r,getSnapshot:n};return i.queue=o,Gl(gu.bind(null,a,o,e),[e]),a.flags|=2048,Lt(9,mu.bind(null,a,o,r,n),void 0,null),r},useId:function(){var e=cn(),n=fe.identifierPrefix;if(Q){var r=xn,a=vn;r=(a&~(1<<32-rn(a)-1)).toString(32)+r,n=":"+n+"R"+r,r=Ot++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=Jh++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rm={readContext:Ge,useCallback:Cu,useContext:Ge,useEffect:Us,useImperativeHandle:ku,useInsertionEffect:yu,useLayoutEffect:wu,useMemo:Nu,useReducer:Wi,useRef:bu,useState:function(){return Wi(Dt)},useDebugValue:Zs,useDeferredValue:function(e){var n=Je();return Su(n,ce.memoizedState,e)},useTransition:function(){var e=Wi(Dt)[0],n=Je().memoizedState;return[e,n]},useMutableSource:pu,useSyncExternalStore:fu,useId:Eu,unstable_isNewReconciler:!1},tm={readContext:Ge,useCallback:Cu,useContext:Ge,useEffect:Us,useImperativeHandle:ku,useInsertionEffect:yu,useLayoutEffect:wu,useMemo:Nu,useReducer:qi,useRef:bu,useState:function(){return qi(Dt)},useDebugValue:Zs,useDeferredValue:function(e){var n=Je();return ce===null?n.memoizedState=e:Su(n,ce.memoizedState,e)},useTransition:function(){var e=qi(Dt)[0],n=Je().memoizedState;return[e,n]},useMutableSource:pu,useSyncExternalStore:fu,useId:Eu,unstable_isNewReconciler:!1};function Xe(e,n){if(e&&e.defaultProps){n=ne({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function Lo(e,n,r,a){n=e.memoizedState,r=r(a,n),r=r==null?n:ne({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ui={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var a=Ne(),i=Mn(e),o=bn(a,i);o.payload=n,r!=null&&(o.callback=r),n=_n(e,o,i),n!==null&&(tn(n,e,i,a),ya(n,e,i))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var a=Ne(),i=Mn(e),o=bn(a,i);o.tag=1,o.payload=n,r!=null&&(o.callback=r),n=_n(e,o,i),n!==null&&(tn(n,e,i,a),ya(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Ne(),a=Mn(e),i=bn(r,a);i.tag=2,n!=null&&(i.callback=n),n=_n(e,i,a),n!==null&&(tn(n,e,a,r),ya(n,e,a))}};function Jl(e,n,r,a,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,s):n.prototype&&n.prototype.isPureReactComponent?!Et(r,a)||!Et(i,o):!0}function Ru(e,n,r){var a=!1,i=Zn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(i=Re(n)?or:ke.current,a=n.contextTypes,o=(a=a!=null)?Dr(e,i):Zn),n=new n(r,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ui,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Ql(e,n,r,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,a),n.state!==e&&ui.enqueueReplaceState(n,n.state,null)}function Po(e,n,r,a){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Ls(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Ge(o):(o=Re(n)?or:ke.current,i.context=Dr(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Lo(e,n,o,r),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ui.enqueueReplaceState(i,i.state,null),Ha(e,r,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,n){try{var r="",a=n;do r+=Rf(a),a=a.return;while(a);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Yi(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function _o(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var am=typeof WeakMap=="function"?WeakMap:Map;function zu(e,n,r){r=bn(-1,r),r.tag=3,r.payload={element:null};var a=n.value;return r.callback=function(){Ga||(Ga=!0,Wo=a),_o(e,n)},r}function Ou(e,n,r){r=bn(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;r.payload=function(){return a(i)},r.callback=function(){_o(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){_o(e,n),typeof a!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),r}function Xl(e,n,r){var a=e.pingCache;if(a===null){a=e.pingCache=new am;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(r)||(i.add(r),e=xm.bind(null,e,n,r),n.then(e,e))}function ec(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function nc(e,n,r,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=bn(-1,1),n.tag=2,_n(r,n,1))),r.lanes|=1),e)}var im=Cn.ReactCurrentOwner,Ie=!1;function Ce(e,n,r,a){n.child=e===null?lu(n,null,r,a):Pr(n,e.child,r,a)}function rc(e,n,r,a,i){r=r.render;var o=n.ref;return Rr(n,i),a=Bs(e,n,r,a,o,i),r=Fs(),e!==null&&!Ie?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,kn(e,n,i)):(Q&&r&&As(n),n.flags|=1,Ce(e,n,a,i),n.child)}function tc(e,n,r,a,i){if(e===null){var o=r.type;return typeof o=="function"&&!Js(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=o,Du(e,n,o,a,i)):(e=Sa(r.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:Et,r(s,a)&&e.ref===n.ref)return kn(e,n,i)}return n.flags|=1,e=Bn(o,a),e.ref=n.ref,e.return=n,n.child=e}function Du(e,n,r,a,i){if(e!==null){var o=e.memoizedProps;if(Et(o,a)&&e.ref===n.ref)if(Ie=!1,n.pendingProps=a=o,(e.lanes&i)!==0)e.flags&131072&&(Ie=!0);else return n.lanes=e.lanes,kn(e,n,i)}return Vo(e,n,r,a,i)}function Lu(e,n,r){var a=n.pendingProps,i=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Sr,Pe),Pe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Y(Sr,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:r,Y(Sr,Pe),Pe|=a}else o!==null?(a=o.baseLanes|r,n.memoizedState=null):a=r,Y(Sr,Pe),Pe|=a;return Ce(e,n,i,r),n.child}function Pu(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Vo(e,n,r,a,i){var o=Re(r)?or:ke.current;return o=Dr(n,o),Rr(n,i),r=Bs(e,n,r,a,o,i),a=Fs(),e!==null&&!Ie?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,kn(e,n,i)):(Q&&a&&As(n),n.flags|=1,Ce(e,n,r,i),n.child)}function ac(e,n,r,a,i){if(Re(r)){var o=!0;Ba(n)}else o=!1;if(Rr(n,i),n.stateNode===null)ka(e,n),Ru(n,r,a),Po(n,r,a,i),a=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var c=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Ge(d):(d=Re(r)?or:ke.current,d=Dr(n,d));var p=r.getDerivedStateFromProps,f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==a||c!==d)&&Ql(n,s,a,d),En=!1;var h=n.memoizedState;s.state=h,Ha(n,a,s,i),c=n.memoizedState,l!==a||h!==c||Te.current||En?(typeof p=="function"&&(Lo(n,r,p,a),c=n.memoizedState),(l=En||Jl(n,r,l,a,h,c,d))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=c),s.props=a,s.state=c,s.context=d,a=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,du(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:Xe(n.type,l),s.props=d,f=n.pendingProps,h=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ge(c):(c=Re(r)?or:ke.current,c=Dr(n,c));var b=r.getDerivedStateFromProps;(p=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||h!==c)&&Ql(n,s,a,c),En=!1,h=n.memoizedState,s.state=h,Ha(n,a,s,i);var v=n.memoizedState;l!==f||h!==v||Te.current||En?(typeof b=="function"&&(Lo(n,r,b,a),v=n.memoizedState),(d=En||Jl(n,r,d,a,h,v,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,v,c)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=v),s.props=a,s.state=v,s.context=c,a=d):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),a=!1)}return Mo(e,n,r,a,o,i)}function Mo(e,n,r,a,i,o){Pu(e,n);var s=(n.flags&128)!==0;if(!a&&!s)return i&&Zl(n,r,!1),kn(e,n,o);a=n.stateNode,im.current=n;var l=s&&typeof r.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&s?(n.child=Pr(n,e.child,null,o),n.child=Pr(n,null,l,o)):Ce(e,n,l,o),n.memoizedState=a.state,i&&Zl(n,r,!0),n.child}function _u(e){var n=e.stateNode;n.pendingContext?Ul(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ul(e,n.context,!1),Ps(e,n.containerInfo)}function ic(e,n,r,a,i){return Lr(),Ts(i),n.flags|=256,Ce(e,n,r,a),n.child}var Bo={dehydrated:null,treeContext:null,retryLane:0};function Fo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vu(e,n,r){var a=n.pendingProps,i=X.current,o=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(X,i&1),e===null)return Oo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=a.children,e=a.fallback,o?(a=n.mode,o=n.child,s={mode:"hidden",children:s},!(a&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=hi(s,a,0,null),e=ar(e,a,r,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Fo(r),n.memoizedState=Bo,e):Ks(n,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return om(e,n,s,a,l,i,r);if(o){o=a.fallback,s=n.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:a.children};return!(s&1)&&n.child!==i?(a=n.child,a.childLanes=0,a.pendingProps=c,n.deletions=null):(a=Bn(i,c),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Bn(l,o):(o=ar(o,s,r,null),o.flags|=2),o.return=n,a.return=n,a.sibling=o,n.child=a,a=o,o=n.child,s=e.child.memoizedState,s=s===null?Fo(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,n.memoizedState=Bo,a}return o=e.child,e=o.sibling,a=Bn(o,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=r),a.return=n,a.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=a,n.memoizedState=null,a}function Ks(e,n){return n=hi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ca(e,n,r,a){return a!==null&&Ts(a),Pr(n,e.child,null,r),e=Ks(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function om(e,n,r,a,i,o,s){if(r)return n.flags&256?(n.flags&=-257,a=Yi(Error(S(422))),ca(e,n,s,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=a.fallback,i=n.mode,a=hi({mode:"visible",children:a.children},i,0,null),o=ar(o,i,s,null),o.flags|=2,a.return=n,o.return=n,a.sibling=o,n.child=a,n.mode&1&&Pr(n,e.child,null,s),n.child.memoizedState=Fo(s),n.memoizedState=Bo,o);if(!(n.mode&1))return ca(e,n,s,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,o=Error(S(419)),a=Yi(o,a,void 0),ca(e,n,s,a)}if(l=(s&e.childLanes)!==0,Ie||l){if(a=fe,a!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,jn(e,i),tn(a,e,i,-1))}return Gs(),a=Yi(Error(S(421))),ca(e,n,s,a)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=bm.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,_e=Pn(i.nextSibling),Ve=n,Q=!0,nn=null,e!==null&&($e[We++]=vn,$e[We++]=xn,$e[We++]=sr,vn=e.id,xn=e.overflow,sr=n),n=Ks(n,a.children),n.flags|=4096,n)}function oc(e,n,r){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Do(e.return,n,r)}function Gi(e,n,r,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=r,o.tailMode=i)}function Mu(e,n,r){var a=n.pendingProps,i=a.revealOrder,o=a.tail;if(Ce(e,n,a.children,r),a=X.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oc(e,r,n);else if(e.tag===19)oc(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Y(X,a),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(r=n.child,i=null;r!==null;)e=r.alternate,e!==null&&$a(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=n.child,n.child=null):(i=r.sibling,r.sibling=null),Gi(n,!1,i,r,o);break;case"backwards":for(r=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&$a(e)===null){n.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Gi(n,!0,r,null,o);break;case"together":Gi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ka(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function kn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),cr|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,r=Bn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Bn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function sm(e,n,r){switch(n.tag){case 3:_u(n),Lr();break;case 5:uu(n);break;case 1:Re(n.type)&&Ba(n);break;case 4:Ps(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,i=n.memoizedProps.value;Y(Za,a._currentValue),a._currentValue=i;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(Y(X,X.current&1),n.flags|=128,null):r&n.child.childLanes?Vu(e,n,r):(Y(X,X.current&1),e=kn(e,n,r),e!==null?e.sibling:null);Y(X,X.current&1);break;case 19:if(a=(r&n.childLanes)!==0,e.flags&128){if(a)return Mu(e,n,r);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(X,X.current),a)break;return null;case 22:case 23:return n.lanes=0,Lu(e,n,r)}return kn(e,n,r)}var Bu,Uo,Fu,Uu;Bu=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Uo=function(){};Fu=function(e,n,r,a){var i=e.memoizedProps;if(i!==a){e=n.stateNode,nr(pn.current);var o=null;switch(r){case"input":i=co(e,i),a=co(e,a),o=[];break;case"select":i=ne({},i,{value:void 0}),a=ne({},a,{value:void 0}),o=[];break;case"textarea":i=fo(e,i),a=fo(e,a),o=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Va)}mo(r,a);var s;r=null;for(d in i)if(!a.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(yt.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in a){var c=a[d];if(l=i!=null?i[d]:void 0,a.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(o||(o=[]),o.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(yt.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&G("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}r&&(o=o||[]).push("style",r);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};Uu=function(e,n,r,a){r!==a&&(n.flags|=4)};function nt(e,n){if(!Q)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function be(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(n)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=r,n}function lm(e,n,r){var a=n.pendingProps;switch(Is(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(n),null;case 1:return Re(n.type)&&Ma(),be(n),null;case 3:return a=n.stateNode,_r(),J(Te),J(ke),Vs(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(sa(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,nn!==null&&(Go(nn),nn=null))),Uo(e,n),be(n),null;case 5:_s(n);var i=nr(zt.current);if(r=n.type,e!==null&&n.stateNode!=null)Fu(e,n,r,a,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(S(166));return be(n),null}if(e=nr(pn.current),sa(n)){a=n.stateNode,r=n.type;var o=n.memoizedProps;switch(a[dn]=n,a[Tt]=o,e=(n.mode&1)!==0,r){case"dialog":G("cancel",a),G("close",a);break;case"iframe":case"object":case"embed":G("load",a);break;case"video":case"audio":for(i=0;i<ct.length;i++)G(ct[i],a);break;case"source":G("error",a);break;case"img":case"image":case"link":G("error",a),G("load",a);break;case"details":G("toggle",a);break;case"input":ml(a,o),G("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},G("invalid",a);break;case"textarea":vl(a,o),G("invalid",a)}mo(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?a.textContent!==l&&(o.suppressHydrationWarning!==!0&&oa(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&oa(a.textContent,l,e),i=["children",""+l]):yt.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&G("scroll",a)}switch(r){case"input":Qt(a),gl(a,o,!0);break;case"textarea":Qt(a),xl(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=Va)}a=i,n.updateQueue=a,a!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gd(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(r,{is:a.is}):(e=s.createElement(r),r==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,r),e[dn]=n,e[Tt]=a,Bu(e,n,!1,!1),n.stateNode=e;e:{switch(s=go(r,a),r){case"dialog":G("cancel",e),G("close",e),i=a;break;case"iframe":case"object":case"embed":G("load",e),i=a;break;case"video":case"audio":for(i=0;i<ct.length;i++)G(ct[i],e);i=a;break;case"source":G("error",e),i=a;break;case"img":case"image":case"link":G("error",e),G("load",e),i=a;break;case"details":G("toggle",e),i=a;break;case"input":ml(e,a),i=co(e,a),G("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=ne({},a,{value:void 0}),G("invalid",e);break;case"textarea":vl(e,a),i=fo(e,a),G("invalid",e);break;default:i=a}mo(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?bd(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&vd(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&wt(e,c):typeof c=="number"&&wt(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(yt.hasOwnProperty(o)?c!=null&&o==="onScroll"&&G("scroll",e):c!=null&&hs(e,o,c,s))}switch(r){case"input":Qt(e),gl(e,a,!1);break;case"textarea":Qt(e),xl(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Un(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?Er(e,!!a.multiple,o,!1):a.defaultValue!=null&&Er(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Va)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return be(n),null;case 6:if(e&&n.stateNode!=null)Uu(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(S(166));if(r=nr(zt.current),nr(pn.current),sa(n)){if(a=n.stateNode,r=n.memoizedProps,a[dn]=n,(o=a.nodeValue!==r)&&(e=Ve,e!==null))switch(e.tag){case 3:oa(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oa(a.nodeValue,r,(e.mode&1)!==0)}o&&(n.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[dn]=n,n.stateNode=a}return be(n),null;case 13:if(J(X),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&_e!==null&&n.mode&1&&!(n.flags&128))ou(),Lr(),n.flags|=98560,o=!1;else if(o=sa(n),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[dn]=n}else Lr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;be(n),o=!1}else nn!==null&&(Go(nn),nn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||X.current&1?de===0&&(de=3):Gs())),n.updateQueue!==null&&(n.flags|=4),be(n),null);case 4:return _r(),Uo(e,n),e===null&&At(n.stateNode.containerInfo),be(n),null;case 10:return Os(n.type._context),be(n),null;case 17:return Re(n.type)&&Ma(),be(n),null;case 19:if(J(X),o=n.memoizedState,o===null)return be(n),null;if(a=(n.flags&128)!==0,s=o.rendering,s===null)if(a)nt(o,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=$a(e),s!==null){for(n.flags|=128,nt(o,!1),a=s.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=r,r=n.child;r!==null;)o=r,e=a,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Y(X,X.current&1|2),n.child}e=e.sibling}o.tail!==null&&ie()>Mr&&(n.flags|=128,a=!0,nt(o,!1),n.lanes=4194304)}else{if(!a)if(e=$a(s),e!==null){if(n.flags|=128,a=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),nt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Q)return be(n),null}else 2*ie()-o.renderingStartTime>Mr&&r!==1073741824&&(n.flags|=128,a=!0,nt(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(r=o.last,r!==null?r.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ie(),n.sibling=null,r=X.current,Y(X,a?r&1|2:r&1),n):(be(n),null);case 22:case 23:return Ys(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?Pe&1073741824&&(be(n),n.subtreeFlags&6&&(n.flags|=8192)):be(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function cm(e,n){switch(Is(n),n.tag){case 1:return Re(n.type)&&Ma(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _r(),J(Te),J(ke),Vs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return _s(n),null;case 13:if(J(X),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));Lr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(X),null;case 4:return _r(),null;case 10:return Os(n.type._context),null;case 22:case 23:return Ys(),null;case 24:return null;default:return null}}var da=!1,ye=!1,dm=typeof WeakSet=="function"?WeakSet:Set,O=null;function Nr(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){re(e,n,a)}else r.current=null}function Zo(e,n,r){try{r()}catch(a){re(e,n,a)}}var sc=!1;function um(e,n){if(So=La,e=Wd(),Es(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,d=0,p=0,f=e,h=null;n:for(;;){for(var b;f!==r||i!==0&&f.nodeType!==3||(l=s+i),f!==o||a!==0&&f.nodeType!==3||(c=s+a),f.nodeType===3&&(s+=f.nodeValue.length),(b=f.firstChild)!==null;)h=f,f=b;for(;;){if(f===e)break n;if(h===r&&++d===i&&(l=s),h===o&&++p===a&&(c=s),(b=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=b}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Eo={focusedElem:e,selectionRange:r},La=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,j=v.memoizedState,g=n.stateNode,u=g.getSnapshotBeforeUpdate(n.elementType===n.type?x:Xe(n.type,x),j);g.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){re(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return v=sc,sc=!1,v}function vt(e,n,r){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Zo(n,r,o)}i=i.next}while(i!==a)}}function pi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==n)}}function Ko(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function Zu(e){var n=e.alternate;n!==null&&(e.alternate=null,Zu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[dn],delete n[Tt],delete n[To],delete n[Wh],delete n[qh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ku(e){return e.tag===5||e.tag===3||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ku(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ho(e,n,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Va));else if(a!==4&&(e=e.child,e!==null))for(Ho(e,n,r),e=e.sibling;e!==null;)Ho(e,n,r),e=e.sibling}function $o(e,n,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for($o(e,n,r),e=e.sibling;e!==null;)$o(e,n,r),e=e.sibling}var me=null,en=!1;function Nn(e,n,r){for(r=r.child;r!==null;)Hu(e,n,r),r=r.sibling}function Hu(e,n,r){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(ai,r)}catch{}switch(r.tag){case 5:ye||Nr(r,n);case 6:var a=me,i=en;me=null,Nn(e,n,r),me=a,en=i,me!==null&&(en?(e=me,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):me.removeChild(r.stateNode));break;case 18:me!==null&&(en?(e=me,r=r.stateNode,e.nodeType===8?Zi(e.parentNode,r):e.nodeType===1&&Zi(e,r),Nt(e)):Zi(me,r.stateNode));break;case 4:a=me,i=en,me=r.stateNode.containerInfo,en=!0,Nn(e,n,r),me=a,en=i;break;case 0:case 11:case 14:case 15:if(!ye&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Zo(r,n,s),i=i.next}while(i!==a)}Nn(e,n,r);break;case 1:if(!ye&&(Nr(r,n),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(l){re(r,n,l)}Nn(e,n,r);break;case 21:Nn(e,n,r);break;case 22:r.mode&1?(ye=(a=ye)||r.memoizedState!==null,Nn(e,n,r),ye=a):Nn(e,n,r);break;default:Nn(e,n,r)}}function cc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new dm),n.forEach(function(a){var i=ym.bind(null,e,a);r.has(a)||(r.add(a),a.then(i,i))})}}function Qe(e,n){var r=n.deletions;if(r!==null)for(var a=0;a<r.length;a++){var i=r[a];try{var o=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,en=!1;break e;case 3:me=l.stateNode.containerInfo,en=!0;break e;case 4:me=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(me===null)throw Error(S(160));Hu(o,s,i),me=null,en=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){re(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)$u(n,e),n=n.sibling}function $u(e,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(n,e),sn(e),a&4){try{vt(3,e,e.return),pi(3,e)}catch(x){re(e,e.return,x)}try{vt(5,e,e.return)}catch(x){re(e,e.return,x)}}break;case 1:Qe(n,e),sn(e),a&512&&r!==null&&Nr(r,r.return);break;case 5:if(Qe(n,e),sn(e),a&512&&r!==null&&Nr(r,r.return),e.flags&32){var i=e.stateNode;try{wt(i,"")}catch(x){re(e,e.return,x)}}if(a&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&hd(i,o),go(l,s);var d=go(l,o);for(s=0;s<c.length;s+=2){var p=c[s],f=c[s+1];p==="style"?bd(i,f):p==="dangerouslySetInnerHTML"?vd(i,f):p==="children"?wt(i,f):hs(i,p,f,d)}switch(l){case"input":uo(i,o);break;case"textarea":md(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?Er(i,!!o.multiple,b,!1):h!==!!o.multiple&&(o.defaultValue!=null?Er(i,!!o.multiple,o.defaultValue,!0):Er(i,!!o.multiple,o.multiple?[]:"",!1))}i[Tt]=o}catch(x){re(e,e.return,x)}}break;case 6:if(Qe(n,e),sn(e),a&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){re(e,e.return,x)}}break;case 3:if(Qe(n,e),sn(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Nt(n.containerInfo)}catch(x){re(e,e.return,x)}break;case 4:Qe(n,e),sn(e);break;case 13:Qe(n,e),sn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ws=ie())),a&4&&cc(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(ye=(d=ye)||p,Qe(n,e),ye=d):Qe(n,e),sn(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(O=e,p=e.child;p!==null;){for(f=O=p;O!==null;){switch(h=O,b=h.child,h.tag){case 0:case 11:case 14:case 15:vt(4,h,h.return);break;case 1:Nr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){a=h,r=h.return;try{n=a,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(x){re(a,r,x)}}break;case 5:Nr(h,h.return);break;case 22:if(h.memoizedState!==null){uc(f);continue}}b!==null?(b.return=h,O=b):uc(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{i=f.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=xd("display",s))}catch(x){re(e,e.return,x)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(x){re(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qe(n,e),sn(e),a&4&&cc(e);break;case 21:break;default:Qe(n,e),sn(e)}}function sn(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(Ku(r)){var a=r;break e}r=r.return}throw Error(S(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(wt(i,""),a.flags&=-33);var o=lc(e);$o(e,o,i);break;case 3:case 4:var s=a.stateNode.containerInfo,l=lc(e);Ho(e,l,s);break;default:throw Error(S(161))}}catch(c){re(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pm(e,n,r){O=e,Wu(e)}function Wu(e,n,r){for(var a=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&a){var s=i.memoizedState!==null||da;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ye;l=da;var d=ye;if(da=s,(ye=c)&&!d)for(O=i;O!==null;)s=O,c=s.child,s.tag===22&&s.memoizedState!==null?pc(i):c!==null?(c.return=s,O=c):pc(i);for(;o!==null;)O=o,Wu(o),o=o.sibling;O=i,da=l,ye=d}dc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):dc(e)}}function dc(e){for(;O!==null;){var n=O;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ye||pi(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!ye)if(r===null)a.componentDidMount();else{var i=n.elementType===n.type?r.memoizedProps:Xe(n.type,r.memoizedProps);a.componentDidUpdate(i,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ql(n,o,a);break;case 3:var s=n.updateQueue;if(s!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}ql(n,s,r)}break;case 5:var l=n.stateNode;if(r===null&&n.flags&4){r=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&Nt(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ye||n.flags&512&&Ko(n)}catch(h){re(n,n.return,h)}}if(n===e){O=null;break}if(r=n.sibling,r!==null){r.return=n.return,O=r;break}O=n.return}}function uc(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var r=n.sibling;if(r!==null){r.return=n.return,O=r;break}O=n.return}}function pc(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{pi(4,n)}catch(c){re(n,r,c)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var i=n.return;try{a.componentDidMount()}catch(c){re(n,i,c)}}var o=n.return;try{Ko(n)}catch(c){re(n,o,c)}break;case 5:var s=n.return;try{Ko(n)}catch(c){re(n,s,c)}}}catch(c){re(n,n.return,c)}if(n===e){O=null;break}var l=n.sibling;if(l!==null){l.return=n.return,O=l;break}O=n.return}}var fm=Math.ceil,Ya=Cn.ReactCurrentDispatcher,Hs=Cn.ReactCurrentOwner,Ye=Cn.ReactCurrentBatchConfig,H=0,fe=null,le=null,ge=0,Pe=0,Sr=Hn(0),de=0,Pt=null,cr=0,fi=0,$s=0,xt=null,Ae=null,Ws=0,Mr=1/0,mn=null,Ga=!1,Wo=null,Vn=null,ua=!1,Rn=null,Ja=0,bt=0,qo=null,Ca=-1,Na=0;function Ne(){return H&6?ie():Ca!==-1?Ca:Ca=ie()}function Mn(e){return e.mode&1?H&2&&ge!==0?ge&-ge:Gh.transition!==null?(Na===0&&(Na=Rd()),Na):(e=$,e!==0||(e=window.event,e=e===void 0?16:Vd(e.type)),e):1}function tn(e,n,r,a){if(50<bt)throw bt=0,qo=null,Error(S(185));Ft(e,r,a),(!(H&2)||e!==fe)&&(e===fe&&(!(H&2)&&(fi|=r),de===4&&In(e,ge)),ze(e,a),r===1&&H===0&&!(n.mode&1)&&(Mr=ie()+500,ci&&$n()))}function ze(e,n){var r=e.callbackNode;Gf(e,n);var a=Da(e,e===fe?ge:0);if(a===0)r!==null&&wl(r),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(r!=null&&wl(r),n===1)e.tag===0?Yh(fc.bind(null,e)):tu(fc.bind(null,e)),Hh(function(){!(H&6)&&$n()}),r=null;else{switch(zd(a)){case 1:r=bs;break;case 4:r=Id;break;case 16:r=Oa;break;case 536870912:r=Td;break;default:r=Oa}r=np(r,qu.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function qu(e,n){if(Ca=-1,Na=0,H&6)throw Error(S(327));var r=e.callbackNode;if(zr()&&e.callbackNode!==r)return null;var a=Da(e,e===fe?ge:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=Qa(e,a);else{n=a;var i=H;H|=2;var o=Gu();(fe!==e||ge!==n)&&(mn=null,Mr=ie()+500,tr(e,n));do try{gm();break}catch(l){Yu(e,l)}while(!0);zs(),Ya.current=o,H=i,le!==null?n=0:(fe=null,ge=0,n=de)}if(n!==0){if(n===2&&(i=wo(e),i!==0&&(a=i,n=Yo(e,i))),n===1)throw r=Pt,tr(e,0),In(e,a),ze(e,ie()),r;if(n===6)In(e,a);else{if(i=e.current.alternate,!(a&30)&&!hm(i)&&(n=Qa(e,a),n===2&&(o=wo(e),o!==0&&(a=o,n=Yo(e,o))),n===1))throw r=Pt,tr(e,0),In(e,a),ze(e,ie()),r;switch(e.finishedWork=i,e.finishedLanes=a,n){case 0:case 1:throw Error(S(345));case 2:Qn(e,Ae,mn);break;case 3:if(In(e,a),(a&130023424)===a&&(n=Ws+500-ie(),10<n)){if(Da(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Io(Qn.bind(null,e,Ae,mn),n);break}Qn(e,Ae,mn);break;case 4:if(In(e,a),(a&4194240)===a)break;for(n=e.eventTimes,i=-1;0<a;){var s=31-rn(a);o=1<<s,s=n[s],s>i&&(i=s),a&=~o}if(a=i,a=ie()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*fm(a/1960))-a,10<a){e.timeoutHandle=Io(Qn.bind(null,e,Ae,mn),a);break}Qn(e,Ae,mn);break;case 5:Qn(e,Ae,mn);break;default:throw Error(S(329))}}}return ze(e,ie()),e.callbackNode===r?qu.bind(null,e):null}function Yo(e,n){var r=xt;return e.current.memoizedState.isDehydrated&&(tr(e,n).flags|=256),e=Qa(e,n),e!==2&&(n=Ae,Ae=r,n!==null&&Go(n)),e}function Go(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function hm(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var i=r[a],o=i.getSnapshot;i=i.value;try{if(!an(o(),i))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function In(e,n){for(n&=~$s,n&=~fi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-rn(n),a=1<<r;e[r]=-1,n&=~a}}function fc(e){if(H&6)throw Error(S(327));zr();var n=Da(e,0);if(!(n&1))return ze(e,ie()),null;var r=Qa(e,n);if(e.tag!==0&&r===2){var a=wo(e);a!==0&&(n=a,r=Yo(e,a))}if(r===1)throw r=Pt,tr(e,0),In(e,n),ze(e,ie()),r;if(r===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Qn(e,Ae,mn),ze(e,ie()),null}function qs(e,n){var r=H;H|=1;try{return e(n)}finally{H=r,H===0&&(Mr=ie()+500,ci&&$n())}}function dr(e){Rn!==null&&Rn.tag===0&&!(H&6)&&zr();var n=H;H|=1;var r=Ye.transition,a=$;try{if(Ye.transition=null,$=1,e)return e()}finally{$=a,Ye.transition=r,H=n,!(H&6)&&$n()}}function Ys(){Pe=Sr.current,J(Sr)}function tr(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Kh(r)),le!==null)for(r=le.return;r!==null;){var a=r;switch(Is(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ma();break;case 3:_r(),J(Te),J(ke),Vs();break;case 5:_s(a);break;case 4:_r();break;case 13:J(X);break;case 19:J(X);break;case 10:Os(a.type._context);break;case 22:case 23:Ys()}r=r.return}if(fe=e,le=e=Bn(e.current,null),ge=Pe=n,de=0,Pt=null,$s=fi=cr=0,Ae=xt=null,er!==null){for(n=0;n<er.length;n++)if(r=er[n],a=r.interleaved,a!==null){r.interleaved=null;var i=a.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,a.next=s}r.pending=a}er=null}return e}function Yu(e,n){do{var r=le;try{if(zs(),wa.current=qa,Wa){for(var a=ee.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Wa=!1}if(lr=0,pe=ce=ee=null,gt=!1,Ot=0,Hs.current=null,r===null||r.return===null){de=1,Pt=n,le=null;break}e:{var o=e,s=r.return,l=r,c=n;if(n=ge,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=l,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=ec(s);if(b!==null){b.flags&=-257,nc(b,s,l,o,n),b.mode&1&&Xl(o,d,n),n=b,c=d;var v=n.updateQueue;if(v===null){var x=new Set;x.add(c),n.updateQueue=x}else v.add(c);break e}else{if(!(n&1)){Xl(o,d,n),Gs();break e}c=Error(S(426))}}else if(Q&&l.mode&1){var j=ec(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),nc(j,s,l,o,n),Ts(Vr(c,l));break e}}o=c=Vr(c,l),de!==4&&(de=2),xt===null?xt=[o]:xt.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var g=zu(o,c,n);Wl(o,g);break e;case 1:l=c;var u=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vn===null||!Vn.has(m)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=Ou(o,l,n);Wl(o,w);break e}}o=o.return}while(o!==null)}Qu(r)}catch(C){n=C,le===r&&r!==null&&(le=r=r.return);continue}break}while(!0)}function Gu(){var e=Ya.current;return Ya.current=qa,e===null?qa:e}function Gs(){(de===0||de===3||de===2)&&(de=4),fe===null||!(cr&268435455)&&!(fi&268435455)||In(fe,ge)}function Qa(e,n){var r=H;H|=2;var a=Gu();(fe!==e||ge!==n)&&(mn=null,tr(e,n));do try{mm();break}catch(i){Yu(e,i)}while(!0);if(zs(),H=r,Ya.current=a,le!==null)throw Error(S(261));return fe=null,ge=0,de}function mm(){for(;le!==null;)Ju(le)}function gm(){for(;le!==null&&!Ff();)Ju(le)}function Ju(e){var n=ep(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?Qu(e):le=n,Hs.current=null}function Qu(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=cm(r,n),r!==null){r.flags&=32767,le=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,le=null;return}}else if(r=lm(r,n,Pe),r!==null){le=r;return}if(n=n.sibling,n!==null){le=n;return}le=n=e}while(n!==null);de===0&&(de=5)}function Qn(e,n,r){var a=$,i=Ye.transition;try{Ye.transition=null,$=1,vm(e,n,r,a)}finally{Ye.transition=i,$=a}return null}function vm(e,n,r,a){do zr();while(Rn!==null);if(H&6)throw Error(S(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Jf(e,o),e===fe&&(le=fe=null,ge=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ua||(ua=!0,np(Oa,function(){return zr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ye.transition,Ye.transition=null;var s=$;$=1;var l=H;H|=4,Hs.current=null,um(e,r),$u(r,e),_h(Eo),La=!!So,Eo=So=null,e.current=r,pm(r),Uf(),H=l,$=s,Ye.transition=o}else e.current=r;if(ua&&(ua=!1,Rn=e,Ja=i),o=e.pendingLanes,o===0&&(Vn=null),Hf(r.stateNode),ze(e,ie()),n!==null)for(a=e.onRecoverableError,r=0;r<n.length;r++)i=n[r],a(i.value,{componentStack:i.stack,digest:i.digest});if(Ga)throw Ga=!1,e=Wo,Wo=null,e;return Ja&1&&e.tag!==0&&zr(),o=e.pendingLanes,o&1?e===qo?bt++:(bt=0,qo=e):bt=0,$n(),null}function zr(){if(Rn!==null){var e=zd(Ja),n=Ye.transition,r=$;try{if(Ye.transition=null,$=16>e?16:e,Rn===null)var a=!1;else{if(e=Rn,Rn=null,Ja=0,H&6)throw Error(S(331));var i=H;for(H|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(O=d;O!==null;){var p=O;switch(p.tag){case 0:case 11:case 15:vt(8,p,o)}var f=p.child;if(f!==null)f.return=p,O=f;else for(;O!==null;){p=O;var h=p.sibling,b=p.return;if(Zu(p),p===d){O=null;break}if(h!==null){h.return=b,O=h;break}O=b}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vt(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,O=g;break e}O=o.return}}var u=e.current;for(O=u;O!==null;){s=O;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,O=m;else e:for(s=u;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pi(9,l)}}catch(C){re(l,l.return,C)}if(l===s){O=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,O=w;break e}O=l.return}}if(H=i,$n(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(ai,e)}catch{}a=!0}return a}finally{$=r,Ye.transition=n}}return!1}function hc(e,n,r){n=Vr(r,n),n=zu(e,n,1),e=_n(e,n,1),n=Ne(),e!==null&&(Ft(e,1,n),ze(e,n))}function re(e,n,r){if(e.tag===3)hc(e,e,r);else for(;n!==null;){if(n.tag===3){hc(n,e,r);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Vn===null||!Vn.has(a))){e=Vr(r,e),e=Ou(n,e,1),n=_n(n,e,1),e=Ne(),n!==null&&(Ft(n,1,e),ze(n,e));break}}n=n.return}}function xm(e,n,r){var a=e.pingCache;a!==null&&a.delete(n),n=Ne(),e.pingedLanes|=e.suspendedLanes&r,fe===e&&(ge&r)===r&&(de===4||de===3&&(ge&130023424)===ge&&500>ie()-Ws?tr(e,0):$s|=r),ze(e,n)}function Xu(e,n){n===0&&(e.mode&1?(n=na,na<<=1,!(na&130023424)&&(na=4194304)):n=1);var r=Ne();e=jn(e,n),e!==null&&(Ft(e,n,r),ze(e,r))}function bm(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Xu(e,r)}function ym(e,n){var r=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(S(314))}a!==null&&a.delete(n),Xu(e,r)}var ep;ep=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||Te.current)Ie=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return Ie=!1,sm(e,n,r);Ie=!!(e.flags&131072)}else Ie=!1,Q&&n.flags&1048576&&au(n,Ua,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;ka(e,n),e=n.pendingProps;var i=Dr(n,ke.current);Rr(n,r),i=Bs(null,n,a,e,i,r);var o=Fs();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Re(a)?(o=!0,Ba(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ls(n),i.updater=ui,n.stateNode=i,i._reactInternals=n,Po(n,a,e,r),n=Mo(null,n,a,!0,o,r)):(n.tag=0,Q&&o&&As(n),Ce(null,n,i,r),n=n.child),n;case 16:a=n.elementType;e:{switch(ka(e,n),e=n.pendingProps,i=a._init,a=i(a._payload),n.type=a,i=n.tag=jm(a),e=Xe(a,e),i){case 0:n=Vo(null,n,a,e,r);break e;case 1:n=ac(null,n,a,e,r);break e;case 11:n=rc(null,n,a,e,r);break e;case 14:n=tc(null,n,a,Xe(a.type,e),r);break e}throw Error(S(306,a,""))}return n;case 0:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Xe(a,i),Vo(e,n,a,i,r);case 1:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Xe(a,i),ac(e,n,a,i,r);case 3:e:{if(_u(n),e===null)throw Error(S(387));a=n.pendingProps,o=n.memoizedState,i=o.element,du(e,n),Ha(n,a,null,r);var s=n.memoizedState;if(a=s.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Vr(Error(S(423)),n),n=ic(e,n,a,r,i);break e}else if(a!==i){i=Vr(Error(S(424)),n),n=ic(e,n,a,r,i);break e}else for(_e=Pn(n.stateNode.containerInfo.firstChild),Ve=n,Q=!0,nn=null,r=lu(n,null,a,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Lr(),a===i){n=kn(e,n,r);break e}Ce(e,n,a,r)}n=n.child}return n;case 5:return uu(n),e===null&&Oo(n),a=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ao(a,i)?s=null:o!==null&&Ao(a,o)&&(n.flags|=32),Pu(e,n),Ce(e,n,s,r),n.child;case 6:return e===null&&Oo(n),null;case 13:return Vu(e,n,r);case 4:return Ps(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Pr(n,null,a,r):Ce(e,n,a,r),n.child;case 11:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Xe(a,i),rc(e,n,a,i,r);case 7:return Ce(e,n,n.pendingProps,r),n.child;case 8:return Ce(e,n,n.pendingProps.children,r),n.child;case 12:return Ce(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(a=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,Y(Za,a._currentValue),a._currentValue=s,o!==null)if(an(o.value,s)){if(o.children===i.children&&!Te.current){n=kn(e,n,r);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===a){if(o.tag===1){c=bn(-1,r&-r),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Do(o.return,r,n),l.lanes|=r;break}c=c.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Do(s,r,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ce(e,n,i.children,r),n=n.child}return n;case 9:return i=n.type,a=n.pendingProps.children,Rr(n,r),i=Ge(i),a=a(i),n.flags|=1,Ce(e,n,a,r),n.child;case 14:return a=n.type,i=Xe(a,n.pendingProps),i=Xe(a.type,i),tc(e,n,a,i,r);case 15:return Du(e,n,n.type,n.pendingProps,r);case 17:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Xe(a,i),ka(e,n),n.tag=1,Re(a)?(e=!0,Ba(n)):e=!1,Rr(n,r),Ru(n,a,i),Po(n,a,i,r),Mo(null,n,a,!0,e,r);case 19:return Mu(e,n,r);case 22:return Lu(e,n,r)}throw Error(S(156,n.tag))};function np(e,n){return Ad(e,n)}function wm(e,n,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,n,r,a){return new wm(e,n,r,a)}function Js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jm(e){if(typeof e=="function")return Js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gs)return 11;if(e===vs)return 14}return 2}function Bn(e,n){var r=e.alternate;return r===null?(r=qe(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Sa(e,n,r,a,i,o){var s=2;if(a=e,typeof e=="function")Js(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case gr:return ar(r.children,i,o,n);case ms:s=8,i|=8;break;case io:return e=qe(12,r,n,i|2),e.elementType=io,e.lanes=o,e;case oo:return e=qe(13,r,n,i),e.elementType=oo,e.lanes=o,e;case so:return e=qe(19,r,n,i),e.elementType=so,e.lanes=o,e;case ud:return hi(r,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cd:s=10;break e;case dd:s=9;break e;case gs:s=11;break e;case vs:s=14;break e;case Sn:s=16,a=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=qe(s,r,n,i),n.elementType=e,n.type=a,n.lanes=o,n}function ar(e,n,r,a){return e=qe(7,e,a,n),e.lanes=r,e}function hi(e,n,r,a){return e=qe(22,e,a,n),e.elementType=ud,e.lanes=r,e.stateNode={isHidden:!1},e}function Ji(e,n,r){return e=qe(6,e,null,n),e.lanes=r,e}function Qi(e,n,r){return n=qe(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function km(e,n,r,a,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zi(0),this.expirationTimes=zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qs(e,n,r,a,i,o,s,l,c){return e=new km(e,n,r,l,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=qe(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ls(o),e}function Cm(e,n,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:a==null?null:""+a,children:e,containerInfo:n,implementation:r}}function rp(e){if(!e)return Zn;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Re(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var r=e.type;if(Re(r))return ru(e,r,n)}return n}function tp(e,n,r,a,i,o,s,l,c){return e=Qs(r,a,!0,e,i,o,s,l,c),e.context=rp(null),r=e.current,a=Ne(),i=Mn(r),o=bn(a,i),o.callback=n??null,_n(r,o,i),e.current.lanes=i,Ft(e,i,a),ze(e,a),e}function mi(e,n,r,a){var i=n.current,o=Ne(),s=Mn(i);return r=rp(r),n.context===null?n.context=r:n.pendingContext=r,n=bn(o,s),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=_n(i,n,s),e!==null&&(tn(e,i,s,o),ya(e,i,s)),s}function Xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Xs(e,n){mc(e,n),(e=e.alternate)&&mc(e,n)}function Nm(){return null}var ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function el(e){this._internalRoot=e}gi.prototype.render=el.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));mi(e,n,null,null)};gi.prototype.unmount=el.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;dr(function(){mi(null,e,null,null)}),n[wn]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ld();e={blockedOn:null,target:e,priority:n};for(var r=0;r<An.length&&n!==0&&n<An[r].priority;r++);An.splice(r,0,e),r===0&&_d(e)}};function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gc(){}function Sm(e,n,r,a,i){if(i){if(typeof a=="function"){var o=a;a=function(){var d=Xa(s);o.call(d)}}var s=tp(n,a,e,0,null,!1,!1,"",gc);return e._reactRootContainer=s,e[wn]=s.current,At(e.nodeType===8?e.parentNode:e),dr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var d=Xa(c);l.call(d)}}var c=Qs(e,0,!1,null,null,!1,!1,"",gc);return e._reactRootContainer=c,e[wn]=c.current,At(e.nodeType===8?e.parentNode:e),dr(function(){mi(n,c,r,a)}),c}function xi(e,n,r,a,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Xa(s);l.call(c)}}mi(n,s,e,i)}else s=Sm(r,n,e,i,a);return Xa(s)}Od=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=lt(n.pendingLanes);r!==0&&(ys(n,r|1),ze(n,ie()),!(H&6)&&(Mr=ie()+500,$n()))}break;case 13:dr(function(){var a=jn(e,1);if(a!==null){var i=Ne();tn(a,e,1,i)}}),Xs(e,1)}};ws=function(e){if(e.tag===13){var n=jn(e,134217728);if(n!==null){var r=Ne();tn(n,e,134217728,r)}Xs(e,134217728)}};Dd=function(e){if(e.tag===13){var n=Mn(e),r=jn(e,n);if(r!==null){var a=Ne();tn(r,e,n,a)}Xs(e,n)}};Ld=function(){return $};Pd=function(e,n){var r=$;try{return $=e,n()}finally{$=r}};xo=function(e,n,r){switch(n){case"input":if(uo(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var a=r[n];if(a!==e&&a.form===e.form){var i=li(a);if(!i)throw Error(S(90));fd(a),uo(a,i)}}}break;case"textarea":md(e,r);break;case"select":n=r.value,n!=null&&Er(e,!!r.multiple,n,!1)}};jd=qs;kd=dr;var Em={usingClientEntryPoint:!1,Events:[Zt,yr,li,yd,wd,qs]},rt={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Am={bundleType:rt.bundleType,version:rt.version,rendererPackageName:rt.rendererPackageName,rendererConfig:rt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sd(e),e===null?null:e.stateNode},findFiberByHostInstance:rt.findFiberByHostInstance||Nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{ai=pa.inject(Am),un=pa}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Em;Be.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nl(n))throw Error(S(200));return Cm(e,n,null,r)};Be.createRoot=function(e,n){if(!nl(e))throw Error(S(299));var r=!1,a="",i=ap;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Qs(e,1,!1,null,null,r,!1,a,i),e[wn]=n.current,At(e.nodeType===8?e.parentNode:e),new el(n)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Sd(n),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return dr(e)};Be.hydrate=function(e,n,r){if(!vi(n))throw Error(S(200));return xi(null,e,n,!0,r)};Be.hydrateRoot=function(e,n,r){if(!nl(e))throw Error(S(405));var a=r!=null&&r.hydratedSources||null,i=!1,o="",s=ap;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),n=tp(n,null,e,1,r??null,i,!1,o,s),e[wn]=n.current,At(e),a)for(e=0;e<a.length;e++)r=a[e],i=r._getVersion,i=i(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,i]:n.mutableSourceEagerHydrationData.push(r,i);return new gi(n)};Be.render=function(e,n,r){if(!vi(n))throw Error(S(200));return xi(null,e,n,!1,r)};Be.unmountComponentAtNode=function(e){if(!vi(e))throw Error(S(40));return e._reactRootContainer?(dr(function(){xi(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1};Be.unstable_batchedUpdates=qs;Be.unstable_renderSubtreeIntoContainer=function(e,n,r,a){if(!vi(r))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return xi(e,n,r,!1,a)};Be.version="18.3.1-next-f1338f8080-20240426";function ip(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ip)}catch(e){console.error(e)}}ip(),id.exports=Be;var Im=id.exports,op,vc=Im;op=vc.createRoot,vc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _t(){return _t=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_t.apply(this,arguments)}var zn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zn||(zn={}));const xc="popstate";function Tm(e){e===void 0&&(e={});function n(a,i){let{pathname:o,search:s,hash:l}=a.location;return Jo("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(a,i){return typeof i=="string"?i:ei(i)}return zm(n,r,null,e)}function oe(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function sp(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Rm(){return Math.random().toString(36).substr(2,8)}function bc(e,n){return{usr:e.state,key:e.key,idx:n}}function Jo(e,n,r,a){return r===void 0&&(r=null),_t({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Kr(n):n,{state:r,key:n&&n.key||a||Rm()})}function ei(e){let{pathname:n="/",search:r="",hash:a=""}=e;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function Kr(e){let n={};if(e){let r=e.indexOf("#");r>=0&&(n.hash=e.substr(r),e=e.substr(0,r));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function zm(e,n,r,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,s=i.history,l=zn.Pop,c=null,d=p();d==null&&(d=0,s.replaceState(_t({},s.state,{idx:d}),""));function p(){return(s.state||{idx:null}).idx}function f(){l=zn.Pop;let j=p(),g=j==null?null:j-d;d=j,c&&c({action:l,location:x.location,delta:g})}function h(j,g){l=zn.Push;let u=Jo(x.location,j,g);d=p()+1;let m=bc(u,d),w=x.createHref(u);try{s.pushState(m,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}o&&c&&c({action:l,location:x.location,delta:1})}function b(j,g){l=zn.Replace;let u=Jo(x.location,j,g);d=p();let m=bc(u,d),w=x.createHref(u);s.replaceState(m,"",w),o&&c&&c({action:l,location:x.location,delta:0})}function v(j){let g=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof j=="string"?j:ei(j);return u=u.replace(/ $/,"%20"),oe(g,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,g)}let x={get action(){return l},get location(){return e(i,s)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(xc,f),c=j,()=>{i.removeEventListener(xc,f),c=null}},createHref(j){return n(i,j)},createURL:v,encodeLocation(j){let g=v(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:b,go(j){return s.go(j)}};return x}var yc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(yc||(yc={}));function Om(e,n,r){return r===void 0&&(r="/"),Dm(e,n,r)}function Dm(e,n,r,a){let i=typeof n=="string"?Kr(n):n,o=rl(i.pathname||"/",r);if(o==null)return null;let s=lp(e);Lm(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let d=Wm(o);l=Km(s[c],d)}return l}function lp(e,n,r,a){n===void 0&&(n=[]),r===void 0&&(r=[]),a===void 0&&(a="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(oe(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=Fn([a,c.relativePath]),p=r.concat(c);o.children&&o.children.length>0&&(oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),lp(o.children,n,p,d)),!(o.path==null&&!o.index)&&n.push({path:d,score:Um(d,o.index),routesMeta:p})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of cp(o.path))i(o,s,c)}),n}function cp(e){let n=e.split("/");if(n.length===0)return[];let[r,...a]=n,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(a.length===0)return i?[o,""]:[o];let s=cp(a.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Lm(e){e.sort((n,r)=>n.score!==r.score?r.score-n.score:Zm(n.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}const Pm=/^:[\w-]+$/,_m=3,Vm=2,Mm=1,Bm=10,Fm=-2,wc=e=>e==="*";function Um(e,n){let r=e.split("/"),a=r.length;return r.some(wc)&&(a+=Fm),n&&(a+=Vm),r.filter(i=>!wc(i)).reduce((i,o)=>i+(Pm.test(o)?_m:o===""?Mm:Bm),a)}function Zm(e,n){return e.length===n.length&&e.slice(0,-1).every((a,i)=>a===n[i])?e[e.length-1]-n[n.length-1]:0}function Km(e,n,r){let{routesMeta:a}=e,i={},o="/",s=[];for(let l=0;l<a.length;++l){let c=a[l],d=l===a.length-1,p=o==="/"?n:n.slice(o.length)||"/",f=Hm({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),h=c.route;if(!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Fn([o,f.pathname]),pathnameBase:Jm(Fn([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=Fn([o,f.pathnameBase]))}return s}function Hm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=$m(e.path,e.caseSensitive,e.end),i=n.match(r);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((d,p,f)=>{let{paramName:h,isOptional:b}=p;if(h==="*"){let x=l[f]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=l[f];return b&&!v?d[h]=void 0:d[h]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:e}}function $m(e,n,r){n===void 0&&(n=!1),r===void 0&&(r=!0),sp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(a.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),a]}function Wm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return sp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function rl(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}function qm(e,n){n===void 0&&(n="/");let{pathname:r,search:a="",hash:i=""}=typeof e=="string"?Kr(e):e;return{pathname:r?r.startsWith("/")?r:Ym(r,n):n,search:Qm(a),hash:Xm(i)}}function Ym(e,n){let r=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Xi(e,n,r,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gm(e){return e.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function tl(e,n){let r=Gm(e);return n?r.map((a,i)=>i===r.length-1?a.pathname:a.pathnameBase):r.map(a=>a.pathnameBase)}function al(e,n,r,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=Kr(e):(i=_t({},e),oe(!i.pathname||!i.pathname.includes("?"),Xi("?","pathname","search",i)),oe(!i.pathname||!i.pathname.includes("#"),Xi("#","pathname","hash",i)),oe(!i.search||!i.search.includes("#"),Xi("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=r;else{let f=n.length-1;if(!a&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}l=f>=0?n[f]:"/"}let c=qm(i,l),d=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const Fn=e=>e.join("/").replace(/\/\/+/g,"/"),Jm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function e0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dp=["post","put","patch","delete"];new Set(dp);const n0=["get",...dp];new Set(n0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vt(){return Vt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Vt.apply(this,arguments)}const il=y.createContext(null),r0=y.createContext(null),Wn=y.createContext(null),bi=y.createContext(null),qn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),up=y.createContext(null);function t0(e,n){let{relative:r}=n===void 0?{}:n;Hr()||oe(!1);let{basename:a,navigator:i}=y.useContext(Wn),{hash:o,pathname:s,search:l}=fp(e,{relative:r}),c=s;return a!=="/"&&(c=s==="/"?a:Fn([a,s])),i.createHref({pathname:c,search:l,hash:o})}function Hr(){return y.useContext(bi)!=null}function fn(){return Hr()||oe(!1),y.useContext(bi).location}function pp(e){y.useContext(Wn).static||y.useLayoutEffect(e)}function $r(){let{isDataRoute:e}=y.useContext(qn);return e?g0():a0()}function a0(){Hr()||oe(!1);let e=y.useContext(il),{basename:n,future:r,navigator:a}=y.useContext(Wn),{matches:i}=y.useContext(qn),{pathname:o}=fn(),s=JSON.stringify(tl(i,r.v7_relativeSplatPath)),l=y.useRef(!1);return pp(()=>{l.current=!0}),y.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){a.go(d);return}let f=al(d,JSON.parse(s),o,p.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:Fn([n,f.pathname])),(p.replace?a.replace:a.push)(f,p.state,p)},[n,a,s,o,e])}function fp(e,n){let{relative:r}=n===void 0?{}:n,{future:a}=y.useContext(Wn),{matches:i}=y.useContext(qn),{pathname:o}=fn(),s=JSON.stringify(tl(i,a.v7_relativeSplatPath));return y.useMemo(()=>al(e,JSON.parse(s),o,r==="path"),[e,s,o,r])}function i0(e,n){return o0(e,n)}function o0(e,n,r,a){Hr()||oe(!1);let{navigator:i}=y.useContext(Wn),{matches:o}=y.useContext(qn),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=fn(),p;if(n){var f;let j=typeof n=="string"?Kr(n):n;c==="/"||(f=j.pathname)!=null&&f.startsWith(c)||oe(!1),p=j}else p=d;let h=p.pathname||"/",b=h;if(c!=="/"){let j=c.replace(/^\//,"").split("/");b="/"+h.replace(/^\//,"").split("/").slice(j.length).join("/")}let v=Om(e,{pathname:b}),x=u0(v&&v.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Fn([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Fn([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,r,a);return n&&x?y.createElement(bi.Provider,{value:{location:Vt({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:zn.Pop}},x):x}function s0(){let e=m0(),n=e0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),r?y.createElement("pre",{style:i},r):null,null)}const l0=y.createElement(s0,null);class c0 extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?y.createElement(qn.Provider,{value:this.props.routeContext},y.createElement(up.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function d0(e){let{routeContext:n,match:r,children:a}=e,i=y.useContext(il);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(qn.Provider,{value:n},a)}function u0(e,n,r,a){var i;if(n===void 0&&(n=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=a)!=null&&o.v7_partialHydration&&n.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let p=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);p>=0||oe(!1),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let p=0;p<s.length;p++){let f=s[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=p),f.route.id){let{loaderData:h,errors:b}=r,v=f.route.loader&&h[f.route.id]===void 0&&(!b||b[f.route.id]===void 0);if(f.route.lazy||v){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,f,h)=>{let b,v=!1,x=null,j=null;r&&(b=l&&f.route.id?l[f.route.id]:void 0,x=f.route.errorElement||l0,c&&(d<0&&h===0?(v0("route-fallback"),v=!0,j=null):d===h&&(v=!0,j=f.route.hydrateFallbackElement||null)));let g=n.concat(s.slice(0,h+1)),u=()=>{let m;return b?m=x:v?m=j:f.route.Component?m=y.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=p,y.createElement(d0,{match:f,routeContext:{outlet:p,matches:g,isDataRoute:r!=null},children:m})};return r&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?y.createElement(c0,{location:r.location,revalidation:r.revalidation,component:x,error:b,children:u(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):u()},null)}var hp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hp||{}),mp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mp||{});function p0(e){let n=y.useContext(il);return n||oe(!1),n}function f0(e){let n=y.useContext(r0);return n||oe(!1),n}function h0(e){let n=y.useContext(qn);return n||oe(!1),n}function gp(e){let n=h0(),r=n.matches[n.matches.length-1];return r.route.id||oe(!1),r.route.id}function m0(){var e;let n=y.useContext(up),r=f0(),a=gp();return n!==void 0?n:(e=r.errors)==null?void 0:e[a]}function g0(){let{router:e}=p0(hp.UseNavigateStable),n=gp(mp.UseNavigateStable),r=y.useRef(!1);return pp(()=>{r.current=!0}),y.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Vt({fromRouteId:n},o)))},[e,n])}const jc={};function v0(e,n,r){jc[e]||(jc[e]=!0)}function x0(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function he(e){let{to:n,replace:r,state:a,relative:i}=e;Hr()||oe(!1);let{future:o,static:s}=y.useContext(Wn),{matches:l}=y.useContext(qn),{pathname:c}=fn(),d=$r(),p=al(n,tl(l,o.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(p);return y.useEffect(()=>d(JSON.parse(f),{replace:r,state:a,relative:i}),[d,f,i,r,a]),null}function U(e){oe(!1)}function b0(e){let{basename:n="/",children:r=null,location:a,navigationType:i=zn.Pop,navigator:o,static:s=!1,future:l}=e;Hr()&&oe(!1);let c=n.replace(/^\/*/,"/"),d=y.useMemo(()=>({basename:c,navigator:o,static:s,future:Vt({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof a=="string"&&(a=Kr(a));let{pathname:p="/",search:f="",hash:h="",state:b=null,key:v="default"}=a,x=y.useMemo(()=>{let j=rl(p,c);return j==null?null:{location:{pathname:j,search:f,hash:h,state:b,key:v},navigationType:i}},[c,p,f,h,b,v,i]);return x==null?null:y.createElement(Wn.Provider,{value:d},y.createElement(bi.Provider,{children:r,value:x}))}function y0(e){let{children:n,location:r}=e;return i0(Qo(n),r)}new Promise(()=>{});function Qo(e,n){n===void 0&&(n=[]);let r=[];return y.Children.forEach(e,(a,i)=>{if(!y.isValidElement(a))return;let o=[...n,i];if(a.type===y.Fragment){r.push.apply(r,Qo(a.props.children,o));return}a.type!==U&&oe(!1),!a.props.index||!a.props.children||oe(!1);let s={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=Qo(a.props.children,o)),r.push(s)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Xo.apply(this,arguments)}function w0(e,n){if(e==null)return{};var r={},a=Object.keys(e),i,o;for(o=0;o<a.length;o++)i=a[o],!(n.indexOf(i)>=0)&&(r[i]=e[i]);return r}function j0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function k0(e,n){return e.button===0&&(!n||n==="_self")&&!j0(e)}const C0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],N0="6";try{window.__reactRouterVersion=N0}catch{}const S0="startTransition",kc=xf[S0];function E0(e){let{basename:n,children:r,future:a,window:i}=e,o=y.useRef();o.current==null&&(o.current=Tm({window:i,v5Compat:!0}));let s=o.current,[l,c]=y.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},p=y.useCallback(f=>{d&&kc?kc(()=>c(f)):c(f)},[c,d]);return y.useLayoutEffect(()=>s.listen(p),[s,p]),y.useEffect(()=>x0(a),[a]),y.createElement(b0,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:s,future:a})}const A0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",I0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,A=y.forwardRef(function(n,r){let{onClick:a,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:d,preventScrollReset:p,viewTransition:f}=n,h=w0(n,C0),{basename:b}=y.useContext(Wn),v,x=!1;if(typeof d=="string"&&I0.test(d)&&(v=d,A0))try{let m=new URL(window.location.href),w=d.startsWith("//")?new URL(m.protocol+d):new URL(d),C=rl(w.pathname,b);w.origin===m.origin&&C!=null?d=C+w.search+w.hash:x=!0}catch{}let j=t0(d,{relative:i}),g=T0(d,{replace:s,state:l,target:c,preventScrollReset:p,relative:i,viewTransition:f});function u(m){a&&a(m),m.defaultPrevented||g(m)}return y.createElement("a",Xo({},h,{href:v||j,onClick:x||o?a:u,ref:r,target:c}))});var Cc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Cc||(Cc={}));var Nc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nc||(Nc={}));function T0(e,n){let{target:r,replace:a,state:i,preventScrollReset:o,relative:s,viewTransition:l}=n===void 0?{}:n,c=$r(),d=fn(),p=fp(e,{relative:s});return y.useCallback(f=>{if(k0(f,r)){f.preventDefault();let h=a!==void 0?a:ei(d)===ei(p);c(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[d,c,p,a,i,r,e,o,s,l])}function Ue(){y.useEffect(()=>{const e=document.getElementById("areas-toggle"),n=[];if(e){const r=a=>{a.preventDefault(),e.parentElement&&e.parentElement.classList.toggle("open")};e.addEventListener("click",r),n.push(()=>e.removeEventListener("click",r))}return()=>{n.forEach(r=>{try{r()}catch{}})}},[])}function R0(){y.useEffect(()=>{const e=document.getElementById("splash"),n=document.getElementById("splashLogo"),r=document.getElementById("app"),a=()=>{if(e)try{e.classList.add("splash--hide"),e.setAttribute("aria-hidden","true"),e.style.display="none",e.style.pointerEvents="none"}catch{}};try{e&&(e.classList.remove("splash--hide"),e.removeAttribute("aria-hidden"),e.style.display="",e.style.pointerEvents="")}catch{}if((()=>{try{return sessionStorage.getItem("koop_hasVisited")==="1"}catch{return!1}})()||document.documentElement.classList.contains("skip-splash")){a(),r&&(r.style.opacity="1");return}const s=2500,l=800,c=performance.now();function d(){n&&(n.offsetWidth,n.classList.add("is-visible"))}function p(){if(r)if(r.style.opacity="0",r.offsetHeight,r.animate){const x=r.animate([{opacity:0},{opacity:1}],{duration:800,easing:"ease",fill:"forwards"});x.onfinish=()=>{r.style.opacity="1"}}else r.style.transition="opacity 0.8s ease",requestAnimationFrame(()=>{r.style.opacity="1"})}function f(){const x=performance.now()-c,j=Math.max(0,s-x);setTimeout(()=>{p(),e&&e.classList.add("splash--hide"),setTimeout(()=>{a();try{sessionStorage.setItem("koop_hasVisited","1")}catch{}document.documentElement.classList.add("skip-splash")},l)},j)}async function h(){try{n&&"decode"in n?await n.decode():n&&!n.complete&&await new Promise(x=>n.addEventListener("load",x,{once:!0}))}catch{}d(),f()}const b=x=>{x.persisted&&(a(),r&&(r.style.opacity="1"))};window.addEventListener("pageshow",b),h();const v=setTimeout(()=>{const x=document.getElementById("splash");if(x&&document.body.contains(x))try{x.classList.add("splash--hide"),x.setAttribute("aria-hidden","true"),x.style.display="none",x.style.pointerEvents="none"}catch{}},7e3);return()=>{window.removeEventListener("pageshow",b),clearTimeout(v)}},[])}function Ze(){const e=$r(),n=fn(),r=i=>{const o="/"+(i||"").split("/").filter(Boolean).pop(),s={"/index.html":"/","/derecho.html":"/derecho","/contabilidad.html":"/contabilidad","/auditoria.html":"/auditoria","/derecho-administrativo.html":"/derecho-administrativo","/derecho-familia.html":"/derecho-familia","/derecho-laboral.html":"/derecho-laboral","/derecho-penal.html":"/derecho-penal","/impuestos.html":"/impuestos","/planeacion-patrimonial.html":"/asesoria-contable","/planeacion-patrimonial":"/asesoria-contable","/privacidad.html":"/privacidad","/politica-privacidad.html":"/privacidad","/tramites-notariales.html":"/tramites-notariales","/acciones-de-tutela.html":"/acciones-de-tutela"};return s[i]||s[o]||i},a=()=>{var i;(i=document.querySelectorAll("a[href]"))==null||i.forEach(o=>{try{const s=o.getAttribute("href")||"";if(/^https?:\/\//i.test(s)&&new URL(s).origin!==window.location.origin)return;const l=new URL(s,window.location.href);if(l.origin!==window.location.origin)return;let c=r(l.pathname)+l.search+l.hash;/^\/index\.html#/i.test(c)&&(c=c.replace(/^\/index\.html#/i,"/#"));const d=o.getAttribute("href");c&&c!==d&&o.setAttribute("href",c)}catch{}})};y.useEffect(()=>{const i=Array.from(document.querySelectorAll(".page-transition")),o=()=>{i.forEach(p=>p.classList.remove("is-active"))};o(),requestAnimationFrame(o),setTimeout(o,0);const s=p=>{p.persisted&&o()},l=()=>o();window.addEventListener("pageshow",s),window.addEventListener("focus",l);function c(p){if(!p||!p.href)return!1;try{const b=p.classList;if(b&&b.contains("drop-btn")||p.id==="areas-toggle")return!1}catch{}if(p.target&&p.target.toLowerCase()==="_blank")return!1;const f=p.getAttribute("href");if(!f||f.startsWith("#")||f.startsWith("mailto:")||f.startsWith("tel:"))return!1;const h=new URL(p.href,window.location.href);return!(h.hostname!==window.location.hostname||h.pathname===window.location.pathname&&h.hash)}a();const d=p=>{const f=p.target&&p.target.closest?p.target.closest("a"):null;if(f&&(f.classList&&f.classList.contains("drop-btn")||f.id==="areas-toggle")||!f||!c(f)||p.metaKey||p.ctrlKey||p.shiftKey||p.altKey||p.button!==0)return;p.preventDefault();const h=i.some(v=>{try{return getComputedStyle(v).display!=="none"}catch{return!1}});h&&i.forEach(v=>v.classList.add("is-active"));const b=()=>{try{const v=new URL(f.href,window.location.href),x=r(v.pathname)+v.search+v.hash,j=window.location.pathname+window.location.search+window.location.hash;try{window.__KOOP_FADE_ARRIVAL=!0}catch{}try{e(x)}catch{}setTimeout(()=>{window.location.pathname+window.location.search+window.location.hash===j&&window.location.assign(x)},50)}catch{window.location.assign(f.href)}};h?setTimeout(b,600):b()};return document.addEventListener("click",d,!0),()=>{window.removeEventListener("pageshow",s),window.removeEventListener("focus",l),document.removeEventListener("click",d,!0)}},[]),y.useLayoutEffect(()=>{if(!n.hash){const i=()=>{try{window.scrollTo(0,0)}catch{}try{document.documentElement.scrollTop=0}catch{}try{document.body.scrollTop=0}catch{}};i(),requestAnimationFrame(i),setTimeout(i,0),setTimeout(i,50),setTimeout(i,150)}},[n.pathname,n.search,n.hash]),y.useEffect(()=>{Array.from(document.querySelectorAll(".page-transition")).forEach(l=>l.classList.remove("is-active"));const i=document.getElementById("splash"),o=!!(i&&getComputedStyle(i).display!=="none"&&!i.classList.contains("splash--hide"));if(!o){document.documentElement.classList.add("skip-splash");const l=document.getElementById("app");l?(l.style.opacity="1",l.style.transition=""):document.body.style.opacity="1"}if(!o&&!!(typeof window<"u"&&window.__KOOP_FADE_ARRIVAL)){try{const l=document.documentElement;l.classList.remove("route-fade-in"),l.offsetWidth,l.classList.add("route-fade-in"),setTimeout(()=>{try{l.classList.remove("route-fade-in")}catch{}},280)}catch{}try{window.__KOOP_FADE_ARRIVAL=!1}catch{}}try{a()}catch{}},[n.pathname,n.search,n.hash]),y.useEffect(()=>{if(!n.hash)return;const i=(n.hash||"").replace(/^#/,""),o=()=>{try{const p=document.getElementById(i)||document.querySelector(n.hash);if(p&&p.scrollIntoView)return p.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"}),!0}catch{}return!1};if(o())return;const s=requestAnimationFrame(o),l=setTimeout(o,0),c=setTimeout(o,120),d=setTimeout(o,300);return()=>{cancelAnimationFrame(s),clearTimeout(l),clearTimeout(c),clearTimeout(d)}},[n.pathname,n.hash])}function z0(){y.useEffect(()=>{const e=document.querySelectorAll(".labor-card[data-images]"),n=[];return e.forEach(r=>{const a=(r.dataset.images||"").split(",").map(s=>s.trim()).filter(Boolean);if(a.length<2)return;let i=0;const o=setInterval(()=>{const s=(i+1)%a.length,l=document.createElement("div");l.className="labor-card-fade",l.style.backgroundImage=`url('${a[s]}')`,r.appendChild(l),requestAnimationFrame(()=>{l.style.opacity="1"}),setTimeout(()=>{r.style.setProperty("--bg",`url('${a[s]}')`);try{l.remove()}catch{}i=s},1e3)},3e3);n.push(o)}),()=>{n.forEach(r=>clearInterval(r)),document.querySelectorAll(".labor-card-fade").forEach(r=>{try{r.remove()}catch{}})}},[])}function Ke(){y.useEffect(()=>{const e=n=>!n||typeof n!="string"?n:n.replace(/url\(\s*'img\//gi,"url('/img/").replace(/url\(\s*"img\//gi,'url("/img/').replace(/url\(\s*img\//gi,"url(/img/");document.querySelectorAll("[style]").forEach(n=>{try{const r=n.style.getPropertyValue("--bg");if(r&&/url\(/i.test(r)){const a=e(r);a!==r&&n.style.setProperty("--bg",a)}}catch{}}),document.querySelectorAll("[data-images]").forEach(n=>{const r=n.getAttribute("data-images");if(!r)return;const i=r.split(",").map(o=>o.trim()).filter(Boolean).map(o=>o.replace(/^img\//i,"/img/")).join(",");i!==r&&n.setAttribute("data-images",i)})},[location.pathname,location.search,location.hash])}function He(e){if(!e||typeof e!="string")return"";const n=e.replace(/<noscript[\s\S]*?<\/noscript>/gi,""),r=[],a=/<style\b[^>]*>([\s\S]*?)<\/style>/gi;let i;for(;i=a.exec(n);){const s=i[1]||"";s.trim()&&r.push(s.trim())}return r.join(`

`).replace(/url\(\s*(['\"]?)img\//gi,"url($1/img/").replace(/url\(\s*(['\"]?)(?!\/|https?:|data:)([^'"\)]+?\.(?:png|jpe?g|svg|gif|webp|ico))\1\s*\)/gi,(s,l,c)=>`url(${l}/${c}${l})`)}const O0=`<!DOCTYPE html>\r
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
`,D0=()=>{Ue(),R0(),Ze(),z0();const e=He(O0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsx("div",{id:"splash",className:"splash","aria-hidden":"true",children:t.jsx("div",{className:"splash__frame",children:t.jsx("img",{id:"splashLogo",className:"splash__logo",src:"/Koop%20Logo.png",alt:"Koop Strategic Advisory"})})}),t.jsxs("div",{id:"app",children:[t.jsxs("div",{className:"hero-section hero--home",id:"inicio",children:[t.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:t.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),t.jsx("div",{className:"hero-overlay"}),t.jsx("div",{className:"hero-content",children:t.jsxs("div",{className:"hero-box",children:[t.jsx("div",{className:"hero-title",children:"KOOP es Bogotá, es excelencia académica"}),t.jsxs("div",{className:"hero-subtitle",children:["Expertos en Derecho Administrativo,",t.jsx("br",{})," Penal, Laboral y Médico"]}),t.jsxs("div",{className:"hero-desc",children:["Equipo de abogados y contadores con experiencia. ",t.jsx("br",{}),"Brindamos consultoría estratégica para empresas y personas naturales."]}),t.jsx("a",{className:"cta-btn",href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20:",children:"Solicita tu consulta"})]})})]}),t.jsx("section",{className:"areas-section",id:"areas",children:t.jsxs("div",{className:"areas-container",children:[t.jsxs("div",{className:"areas-title",children:[t.jsx("span",{className:"areas-title-bold",children:"ÁREAS DE"})," ",t.jsx("span",{className:"areas-title-normal",children:"PRÁCTICA"})]}),t.jsxs("div",{className:"areas-cards",children:[t.jsx("a",{href:"/derecho",className:"labor-card",style:{"--bg":"url('/img/paloquemao.png')"},"data-images":"/img/paloquemao.png,/img/saladecasacionlaboral.png,/img/tramitesnotariales.png,/img/sexuales.png,/img/fiscalia.png",children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("div",{className:"labor-card-title",children:"Derecho"}),t.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})}),t.jsx("a",{href:"/contabilidad",className:"labor-card",style:{"--bg":"url('/img/auditoria.jpg')"},"data-images":"/img/auditoria.jpg,/img/impuestos-en-colombia.jpg,/img/que_es_la_contabilidad.jpeg",children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("div",{className:"labor-card-title",children:"Contabilidad"}),t.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})})]})]})}),t.jsx("section",{className:"vision-section",id:"vision",children:t.jsxs("div",{className:"vision-container",children:[t.jsxs("h2",{className:"vision-title",children:[t.jsx("span",{className:"vision-bold",children:"NUESTRA"})," VISIÓN"]}),t.jsxs("div",{className:"vision-text",children:[t.jsx("p",{children:"En Koop Strategic Advisory, nuestra visión es consolidarnos como la firma de referencia en servicios jurídicos, contables y de consultoría empresarial, reconocidos por nuestra ética, innovación y excelencia. Nos apasiona acompañar a empresas y personas en la toma de decisiones estratégicas que les permitan crecer, proteger sus intereses y transformar sus proyectos en resultados sostenibles."}),t.jsx("p",{children:"Trabajamos bajo un enfoque multidisciplinario, integrando conocimientos legales, contables y de auditoría para ofrecer soluciones integrales y personalizadas. Nuestro equipo está comprometido con la actualización permanente, la confianza y el trato directo con cada cliente."}),t.jsx("p",{children:"Buscamos construir relaciones de largo plazo basadas en la transparencia, el profesionalismo y el valor agregado, contribuyendo activamente al desarrollo empresarial y a la construcción de una sociedad más justa y eficiente."})]})]})}),t.jsx("section",{className:"full-img-section",children:t.jsx("img",{src:"/Corte suprema de justicia de colombia.jpg",alt:"Equipo empresarial Koop",className:"full-img"})}),t.jsxs("section",{className:"contact-section",id:"contacto",children:[t.jsx("div",{className:"contact-overlay"}),t.jsx("div",{className:"contact-container contact-modern",children:t.jsxs("div",{className:"contact-modern-content",children:[t.jsx("div",{className:"contact-title",style:{textAlign:"center"},children:"CONTÁCTANOS"}),t.jsx("div",{className:"contact-name",style:{textAlign:"center",color:"#fff"},children:"KOOP STRATEGIC ADVISORY"}),t.jsxs("div",{className:"contact-social contact-social-modern",children:[t.jsx("a",{href:"https://www.instagram.com/kooplawyers/",target:"_blank",className:"social-icon instagram",title:"Instagram",children:t.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",alt:"Instagram"})}),t.jsx("a",{href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",className:"social-icon facebook",title:"Facebook",children:t.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg",alt:"Facebook"})}),t.jsx("a",{href:"https://www.tiktok.com/@koop.co",target:"_blank",className:"social-icon tiktok",title:"TikTok",children:t.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg",alt:"TikTok"})}),t.jsx("a",{href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20",target:"_blank",className:"social-icon whatsapp",title:"WhatsApp",children:t.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg",alt:"WhatsApp"})})]}),t.jsx("div",{className:"contact-modern-text",children:"Atendemos consultas por cualquiera de nuestras redes sociales."})]})})]}),t.jsx("footer",{className:"site-footer",children:t.jsxs("div",{className:"footer-container",children:[t.jsx("div",{className:"footer-left",children:"© 2024 Creado por Koop Strategic Advisory"}),t.jsx("div",{className:"footer-right",children:t.jsx("a",{href:"/privacidad",target:"_blank",children:"Política de Privacidad"})})]})})]})," "]})},L0=`<!DOCTYPE html>\r
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
`,vp="/assets/Despidoinjustificado-WBwGt-rg.jpg",P0=()=>{Ue(),Ze();const e=He(L0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsx("section",{className:"labor-cards-section",id:"areas-derecho",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"DERECHO"}),t.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),t.jsx("p",{className:"labor-sub",children:"Asesoría integral en diversas ramas del derecho."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx(A,{to:"/derecho-penal",className:"labor-card",style:{"--bg":"url('/img/Audiencias.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Derecho Penal"]}),t.jsx("div",{className:"labor-card-desc",children:"Defensa y asesoría en procesos penales."})]})}),t.jsx(A,{to:"/derecho-laboral",className:"labor-card",style:{"--bg":`url(${vp})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Derecho Laboral"]}),t.jsx("div",{className:"labor-card-desc",children:"Soluciones en derecho laboral y seguridad social."})]})}),t.jsx(A,{to:"/tramites-notariales",className:"labor-card",style:{"--bg":"url('img/tramitesnotariales.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Trámites notariales"]}),t.jsx("div",{className:"labor-card-desc",children:"Gestiones notariales rápidas y seguras."})]})}),t.jsx(A,{to:"/derecho-administrativo",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Derecho Administrativo"]}),t.jsx("div",{className:"labor-card-desc",children:"Asesoría en procedimientos y litigios administrativos."})]})}),t.jsx(A,{to:"/derecho-familia",className:"labor-card",style:{"--bg":"url('/img/ninofamilia.webp')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Derecho de Familia"]}),t.jsx("div",{className:"labor-card-desc",children:"Trámites administrativos y judiciales de familia."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),t.jsxs("div",{className:"btns",children:[t.jsx("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:"WhatsApp"}),t.jsx("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:"Escríbenos"})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(A,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(A,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(A,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(A,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Áreas de Derecho"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(A,{to:"/derecho-penal",children:"Derecho penal"})}),t.jsx("li",{children:t.jsx(A,{to:"/derecho-laboral",children:"Derecho laboral"})}),t.jsx("li",{children:t.jsx(A,{to:"/tramites-notariales",children:"Trámites notariales"})}),t.jsx("li",{children:t.jsx(A,{to:"/derecho-administrativo",children:"Derecho administrativo"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx(A,{to:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},_0=`<!DOCTYPE html>\r
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
`,V0=()=>{Ue(),Ze();const e=He(_0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsx("section",{className:"labor-cards-section",id:"subareas-contabilidad",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"CONTABILIDAD"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Selecciona la especialidad contable que necesitas."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"/auditoria",className:"labor-card",style:{"--bg":"url('img/auditoria.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Auditoría y Revisoría Fiscal"]}),t.jsx("div",{className:"labor-card-desc",children:"Supervisión financiera independiente."})]})}),t.jsx("a",{href:"/impuestos",className:"labor-card",style:{"--bg":"url('img/impuestos-en-colombia.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Impuestos y Planeación Tributaria"]}),t.jsx("div",{className:"labor-card-desc",children:"Consultoría y cumplimiento fiscal."})]})}),t.jsx("a",{href:"/asesoria-contable",className:"labor-card",style:{"--bg":"url('img/que_es_la_contabilidad.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Asesoría Contable"]}),t.jsx("div",{className:"labor-card-desc",children:"Protección y optimización del patrimonio."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Soluciones integrales para tu empresa."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una Asesoría Contable?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20consultar%20los%20servicios%20contables:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Contabilidad%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(A,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(A,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(A,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(A,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios contables"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"/auditoria",children:"Auditoría y Revisoría Fiscal"})}),t.jsx("li",{children:t.jsx("a",{href:"/impuestos",children:"Impuestos y Planeación Tributaria"})}),t.jsx("li",{children:t.jsx("a",{href:"/asesoria-contable",children:"Asesoría Contable"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},M0=`<!DOCTYPE html>\r
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
`,B0=()=>{Ue(),Ze();const e=He(M0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Auditoría & Revisoría Fiscal",children:t.jsx("div",{className:"hero-headline",children:"Auditoría & Revisoría Fiscal"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-auditoria",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE AUDITORÍA & REVISORÍA FISCAL"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Supervisión independiente y aseguramiento financiero y contable."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#financiera",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Auditoría financiera"]}),t.jsx("div",{className:"labor-card-desc",children:"Opinión independiente sobre estados financieros."})]})}),t.jsx("a",{href:"#revisoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Revisoría fiscal permanente"]}),t.jsx("div",{className:"labor-card-desc",children:"Cumplimiento de obligaciones legales y societarias."})]})}),t.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Evaluación de control interno"]}),t.jsx("div",{className:"labor-card-desc",children:"Diagnósticos y recomendaciones."})]})}),t.jsx("a",{href:"#cumplimiento",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Cumplimiento normativo"]}),t.jsx("div",{className:"labor-card-desc",children:"Verificación de normas contables y fiscales."})]})}),t.jsx("a",{href:"#informes",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Informes especiales"]}),t.jsx("div",{className:"labor-card-desc",children:"Dictámenes sobre hechos particulares."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Control y transparencia para tu organización."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría en auditoría & revisoría fiscal?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20auditor%C3%ADa%20y%20revisor%C3%ADa%20fiscal%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Auditor%C3%ADa%20y%20Revisor%C3%ADa%20Fiscal%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(A,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(A,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(A,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(A,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios de familia"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#divorcio",children:"Auditoría financiera"})}),t.jsx("li",{children:t.jsx("a",{href:"#custodia",children:"Revisoría fiscal permanente"})}),t.jsx("li",{children:t.jsx("a",{href:"#alimentos",children:"Evaluación de control interno"})}),t.jsx("li",{children:t.jsx("a",{href:"#sociedad",children:"Cumplimiento normativo"})}),t.jsx("li",{children:t.jsx("a",{href:"#adopciones",children:"Informes especiales"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},F0=`<!DOCTYPE html>\r
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
`,U0=()=>{Ue(),Ze();const e=He(F0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/derecho-administrativo/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Consejo-deestado.avif')",backgroundPosition:"center 80%"},children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Derecho Administrativo",children:t.jsx("div",{className:"hero-headline",children:"Derecho Administrativo"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-derecho-administrativo",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE DERECHO ADMINISTRATIVO"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Asesoría en trámites y procedimientos ante la administración pública."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#peticion",className:"labor-card",style:{"--bg":"url('img/Gestionurbana.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Gestión Urbanística"]}),t.jsx("div",{className:"labor-card-desc",children:"Asesorías en licencias y planeación urbanística."})]})}),t.jsx("a",{href:"#disciplinario",className:"labor-card",style:{"--bg":"url('img/Disci.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Procesos disciplinarios"]}),t.jsx("div",{className:"labor-card-desc",children:"Defensa ante investigaciones y sanciones."})]})}),t.jsx("a",{href:"#contratacion",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Contratación estatal"]}),t.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en etapas precontractuales y contractuales."})]})}),t.jsx("a",{href:"#nulidad",className:"labor-card",style:{"--bg":"url('img/Respfiscal.webp')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Procesos de responsabilidad fiscal"]}),t.jsx("div",{className:"labor-card-desc",children:"Conflictos derivados de administración de dineros públicos."})]})}),t.jsx("a",{href:"#conceptos",className:"labor-card",style:{"--bg":"url('img/Asesoria.webp')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Conceptos y asesorías administrativas"]}),t.jsx("div",{className:"labor-card-desc",children:"Elaboración de conceptos y respuestas a requerimientos."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Valoramos y resguardamos tus activos intangibles."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría en derecho administrativo?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20concencioso%20administrativo%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20Administrativo%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(A,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(A,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(A,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(A,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios de familia"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#divorcio",children:"Gestión Urbanística"})}),t.jsx("li",{children:t.jsx("a",{href:"#custodia",children:"Procesos Disciplinarios"})}),t.jsx("li",{children:t.jsx("a",{href:"#alimentos",children:"Contratación Estatal"})}),t.jsx("li",{children:t.jsx("a",{href:"#sociedad",children:"Procesos de responsabilidad fiscal"})}),t.jsx("li",{children:t.jsx("a",{href:"#adopciones",children:"Conceptos y Asesorías Administrativas"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Z0=`<!DOCTYPE html>\r
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
`,K0=()=>{Ue(),Ze();const e=He(Z0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/ninofamilia.webp')",backgroundPosition:"center 30%"},children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Derecho de Familia",children:t.jsx("div",{className:"hero-headline",children:"Derecho de Familia"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-familia",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE FAMILIA"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Asesoría integral en situaciones familiares: divorcios, custodia, alimentos y más."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#divorcio",className:"labor-card",style:{"--bg":"url('img/divorcio.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Divorcio y separación"]}),t.jsx("div",{className:"labor-card-desc",children:"Representación y acuerdos amistosos o judiciales."})]})}),t.jsx("a",{href:"#custodia",className:"labor-card",style:{"--bg":"url('img/Custodia.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Custodia y patria potestad"]}),t.jsx("div",{className:"labor-card-desc",children:"Defensa de los derechos de tus hijos y del núcleo familiar."})]})}),t.jsx("a",{href:"#alimentos",className:"labor-card",style:{"--bg":"url('img/alimentos.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Alimentos y pensión alimentaria"]}),t.jsx("div",{className:"labor-card-desc",children:"Fijación, modificación y cobro de cuotas alimentarias."})]})}),t.jsx("a",{href:"#sociedad",className:"labor-card",style:{"--bg":"url('img/Violencia.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Violencia intrafamiliar"]}),t.jsx("div",{className:"labor-card-desc",children:"Trámite ante comisaría de familia o proceso penal ante fiscalía."})]})}),t.jsx("a",{href:"#comisariaseicbf",className:"labor-card",style:{"--bg":"url('img/Bienestar.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Trámites frente a ICBF o Comisarías de familia"]}),t.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en procesos administrativos."})]})}),t.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales"]}),t.jsx("div",{className:"labor-card-desc",children:"Acuerdos patrimoniales previos al matrimonio o unión libre."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico y soluciones 360° para proteger tu núcleo familiar."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría en derecho de familia?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20derecho%20de%20familia%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20de%20Familia%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(A,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(A,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(A,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(A,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios de familia"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#divorcio",children:"Divorcio y separación"})}),t.jsx("li",{children:t.jsx("a",{href:"#custodia",children:"Custodia y patria potestad"})}),t.jsx("li",{children:t.jsx("a",{href:"#alimentos",children:"Alimentos y pensión alimentaria"})}),t.jsx("li",{children:t.jsx("a",{href:"#sociedad",children:"Violencia intrafamiliar"})}),t.jsx("li",{children:t.jsx("a",{href:"#adopciones",children:"Trámites frente a ICBF o Comisarías de familia"})}),t.jsx("li",{children:t.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573503965755",children:"+57 (350) 396 57 55"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},H0=`<!DOCTYPE html>\r
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
`,$0="/assets/liquidaciones-CLf4J2S8.jpeg",W0="/assets/acoso-5lfYgMQE.jpg",q0="/assets/pensiones-Cse2TGmQ.jpg",Y0="/assets/contratorealidad-CKG4Jjcw.png",G0=()=>{Ue(),Ze();const e=He(H0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Derecho Laboral y Seguridad Social",children:t.jsx("div",{className:"hero-headline",children:"Derecho Laboral y Seguridad Social"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-laborales",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS LABORALES"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Estrategia, representación y cumplimiento normativo en derecho laboral para empresas y trabajadores."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#contratorealidad",className:"labor-card",style:{"--bg":`url(${Y0})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Contrato realidad"]}),t.jsx("div",{className:"labor-card-desc",children:"Reconocimiento del vínculo laboral y prestaciones."})]})}),t.jsx("a",{href:"#liquidaciones",className:"labor-card",style:{"--bg":`url(${$0})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Mora en el pago de la liquidación"]}),t.jsx("div",{className:"labor-card-desc",children:"Cálculo, reclamación y verificación de pagos."})]})}),t.jsx("a",{href:"#acoso",className:"labor-card",style:{"--bg":`url(${W0})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Acoso laboral"]}),t.jsx("div",{className:"labor-card-desc",children:"Comités, protocolos, evidencias y defensa."})]})}),t.jsx("a",{href:"#pensiones",className:"labor-card",style:{"--bg":`url(${q0})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Pensiones y seguridad social"]}),t.jsx("div",{className:"labor-card-desc",children:"Traslados, reliquidaciones y contingencias."})]})}),t.jsx("a",{href:"#reintegro",className:"labor-card",style:{"--bg":`url(${vp})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Reintegro laboral"]}),t.jsx("div",{className:"labor-card-desc",children:"Acciones de reintegro por despido ilegal o con fuero."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20laboral%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(A,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(A,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(A,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(A,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios laborales"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#despido",children:"Despido injustificado"})}),t.jsx("li",{children:t.jsx("a",{href:"#liquidaciones",children:"Liquidaciones y prestaciones"})}),t.jsx("li",{children:t.jsx("a",{href:"#acoso",children:"Acoso laboral"})}),t.jsx("li",{children:t.jsx("a",{href:"#pensiones",children:"Pensiones y seguridad social"})}),t.jsx("li",{children:t.jsx("a",{href:"#reintegro",children:"Reintegro laboral"})}),t.jsx("li",{children:t.jsx("a",{href:"#contratorealidad",children:"Contrato realidad"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},J0=`<!DOCTYPE html>\r
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
`,Q0=()=>{Ue(),Ze();const e=He(J0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Derecho Penal",children:t.jsx("div",{className:"hero-headline",children:"Derecho Penal"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS PENALES"}),t.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),t.jsx("p",{className:"labor-sub",children:"Representamos sus intereses con experiencia y conocimiento en el ámbito penal."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#audiencias",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Audiencias, medidas de aseguramiento y trámite penal"]}),t.jsx("div",{className:"labor-card-desc",children:"Protección de sus derechos durante todo el trámite penal, hasta sentencia."})]})}),t.jsx("a",{href:"#asesoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Asesoría y Representación Penal integral para Víctimas"]}),t.jsx("div",{className:"labor-card-desc",children:"Representación legal experta para víctimas, desde la denuncia hasta la indemnización."})]})}),t.jsx("a",{href:"#acompañamiento",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Acompañamiento en audiencias y fases procesales clave"]}),t.jsx("div",{className:"labor-card-desc",children:"Defensa en audiencias específicas. Consulte más acá."})]})}),t.jsx("a",{href:"#habeas",className:"labor-card",style:{"--bg":"url('img/habeas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Habeas corpus y libertades inmediatas"]}),t.jsx("div",{className:"labor-card-desc",children:"Trámite inmediato para restablecer la libertad personal."})]})}),t.jsx("a",{href:"#defensa",className:"labor-card",style:{"--bg":"url('img/sexuales.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Defensa y Asesoría en Casos de Delitos Sexuales"]}),t.jsx("div",{className:"labor-card-desc",children:"Protección integral de derechos en investigaciones y juicios por delitos sexuales."})]})}),t.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/fiscalia.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Control y Seguimiento de Procesos en Fiscalía"]}),t.jsx("div",{className:"labor-card-desc",children:"Monitoreamos y gestionamos su proceso penal para evitar estancamientos y proteger sus derechos."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20penal%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(A,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(A,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(A,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(A,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios laborales"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#audiencias",children:"Audiencias, medidas de aseguramiento y trámite penal"})}),t.jsx("li",{children:t.jsx("a",{href:"#asesoria",children:"Asesoría y Representación Penal integral para Víctimas"})}),t.jsx("li",{children:t.jsx("a",{href:"#acompañamiento",children:"Acompañamiento en audiencias y fases procesales clave"})}),t.jsx("li",{children:t.jsx("a",{href:"#habeas",children:"Habeas corpus y libertades inmediatas"})}),t.jsx("li",{children:t.jsx("a",{href:"#defensa",children:"Defensa y Asesoría en Casos de Delitos Sexuales"})}),t.jsx("li",{children:t.jsx("a",{href:"#control",children:"Control y Seguimiento de Procesos en Fiscalía"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},X0=`<!DOCTYPE html>\r
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
`,eg=()=>{Ue(),Ze();const e=He(X0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Impuestos",children:t.jsx("div",{className:"hero-headline",children:"Impuestos"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-impuestos",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE IMPUESTOS"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Consultoría tributaria y planeación fiscal para empresas y personas."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#planeacion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Planeación tributaria"]}),t.jsx("div",{className:"labor-card-desc",children:"Estructuras fiscales eficientes y legales."})]})}),t.jsx("a",{href:"#declaraciones",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Declaraciones y cumplimiento"]}),t.jsx("div",{className:"labor-card-desc",children:"Preparación y presentación oportuna de impuestos."})]})}),t.jsx("a",{href:"#dian",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Defensa ante la DIAN"]}),t.jsx("div",{className:"labor-card-desc",children:"Respuestas a requerimientos y litigios tributarios."})]})}),t.jsx("a",{href:"#transferencia",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Precios de transferencia"]}),t.jsx("div",{className:"labor-card-desc",children:"Estudios y documentación obligatoria."})]})}),t.jsx("a",{href:"#auditoria",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Auditoría fiscal"]}),t.jsx("div",{className:"labor-card-desc",children:"Revisión de obligaciones y contingencias."})]})}),t.jsx("a",{href:"#municipales",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Obligaciones municipales"]}),t.jsx("div",{className:"labor-card-desc",children:"Impuestos locales y de industria y comercio."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Optimización de obligaciones fiscales."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría en impuestos?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20impuestos%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Impuestos%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(A,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(A,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(A,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(A,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios de familia"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#divorcio",children:"Planeación tributaria"})}),t.jsx("li",{children:t.jsx("a",{href:"#custodia",children:"Declaraciones y cumplimiento"})}),t.jsx("li",{children:t.jsx("a",{href:"#alimentos",children:"Defensa ante DIAN"})}),t.jsx("li",{children:t.jsx("a",{href:"#sociedad",children:"Precios de transferencia"})}),t.jsx("li",{children:t.jsx("a",{href:"#adopciones",children:"Auditoría fiscal"})}),t.jsx("li",{children:t.jsx("a",{href:"#capitulaciones",children:"Obligaciones municipales"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},ng=`<!DOCTYPE html>\r
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
`,rg=()=>{Ue(),Ze();const e=He(ng).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Asesoría Contable",children:t.jsx("div",{className:"hero-headline",children:"Asesoría Contable"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Estrategias sucesorales"]}),t.jsx("div",{className:"labor-card-desc",children:"Testamentos y planificación de herencias."})]})}),t.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Fideicomisos y patrimonios autónomos"]}),t.jsx("div",{className:"labor-card-desc",children:"Estructuras para administrar bienes."})]})}),t.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Protocolos familiares"]}),t.jsx("div",{className:"labor-card-desc",children:"Reglas de gobierno y sucesión empresarial."})]})}),t.jsx("a",{href:"#fiscal",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Optimización fiscal del patrimonio"]}),t.jsx("div",{className:"labor-card-desc",children:"Reducción de cargas impositivas."})]})}),t.jsx("a",{href:"#portafolios",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Administración de portafolios"]}),t.jsx("div",{className:"labor-card-desc",children:"Gestión de inversiones y activos."})]})}),t.jsx("a",{href:"#activos",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Protección de activos"]}),t.jsx("div",{className:"labor-card-desc",children:"Blindaje frente a riesgos y contingencias."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría en Asesoría Contable?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(A,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(A,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(A,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(A,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios de familia"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#divorcio",children:"Estrategias sucesorales"})}),t.jsx("li",{children:t.jsx("a",{href:"#custodia",children:"Fideicomisos y patrimonios autónomos"})}),t.jsx("li",{children:t.jsx("a",{href:"#alimentos",children:"Protocolos familiares"})}),t.jsx("li",{children:t.jsx("a",{href:"#sociedad",children:"Optimización fiscal del patrimonio"})}),t.jsx("li",{children:t.jsx("a",{href:"#adopciones",children:"Administración de portafolios"})}),t.jsx("li",{children:t.jsx("a",{href:"#capitulaciones",children:"Protección de activos"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},tg=`<!DOCTYPE html>\r
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
`,ag=()=>{Ue(),Ze();const e=He(tg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition"}),t.jsxs("main",{children:[t.jsx("h1",{children:"Política de Privacidad"}),t.jsx("p",{children:"Esta página describe las políticas de privacidad de Koop Strategic Advisory. Su contenido se actualizará próximamente."})]}),t.jsx("footer",{className:"site-footer",children:t.jsxs("div",{className:"footer-container",children:[t.jsxs("div",{className:"footer-left",children:["© ",t.jsx("span",{id:"year"})," Creado por Koop Strategic Advisory"]}),t.jsx("div",{className:"footer-right",children:t.jsx("a",{href:"/privacidad",children:"Política de Privacidad"})})]})})]})},ig=`<!DOCTYPE html>\r
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
`,og=()=>{Ue(),Ze();const e=He(ig).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Trámites Notariales",children:t.jsx("div",{className:"hero-headline",children:"Trámites Notariales"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS FRENTE A NOTARIA"}),t.jsx("h2",{className:"labor-title",children:"Su trámite notarial exprés."}),t.jsx("p",{className:"labor-sub",children:"Listo en tiempo récord, con total seguridad jurídica."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#compraventa",className:"labor-card",style:{"--bg":"url('img/compraventainmueble.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Compraventa de inmuebles."]}),t.jsx("div",{className:"labor-card-desc",children:"Con revisión de títulos y elaboración de minuta."})]})}),t.jsx("a",{href:"#constitucion",className:"labor-card",style:{"--bg":"url('img/constitucion.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Constitución, reforma o liquidación de sociedades"]}),t.jsx("div",{className:"labor-card-desc",children:"(S.A.S., LTDA., S.A., etc.)."})]})}),t.jsx("a",{href:"sucesiones",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Sucesiones por causa de muerte"]}),t.jsx("div",{className:"labor-card-desc",children:"Realización de escrito de solicitud hasta elevación a escritura pública."})]})}),t.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales y liquidación de sociedad conyugal."]}),t.jsx("div",{className:"labor-card-desc",children:"Proteja su patrimonio y formalice acuerdos con respaldo legal."})]})}),t.jsx("a",{href:"#levantamiento",className:"labor-card",style:{"--bg":"url('img/levantamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Levantamiento de hipotecas"]}),t.jsx("div",{className:"labor-card-desc",children:"Trámite de levantamiento exprés y sin dilaciones."})]})}),t.jsx("a",{href:"#donaciones",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Donaciones de bienes inmuebles"]}),t.jsx("div",{className:"labor-card-desc",children:"Transfiera su patrimonio con seguridad jurídica y sin contratiempos."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20conocer%20los%20costos%20del%20siguiente%20proceso%20notarial:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(A,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(A,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(A,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(A,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios laborales"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#compraventa",children:"Compraventa de inmuebles"})}),t.jsx("li",{children:t.jsx("a",{href:"#constitucion",children:"Constitución, reforma o liquidación de sociedades"})}),t.jsx("li",{children:t.jsx("a",{href:"#sucesiones",children:"Sucesiones por causa de muerte"})}),t.jsx("li",{children:t.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales y liquidación de sociedad conyugal"})}),t.jsx("li",{children:t.jsx("a",{href:"#levantamiento",children:"Levantamiento de hipotecas"})}),t.jsx("li",{children:t.jsx("a",{href:"#donaciones",children:"Donaciones de bienes inmuebles"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},sg=`<!DOCTYPE html>\r
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
`,lg=()=>{Ue(),Ze();const e=He(sg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Ke(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Juezjuez.jpg')",backgroundPosition:"center 70%"},children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Acciones de tutela",children:t.jsx("div",{className:"hero-headline",children:"Acciones de tutela"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/tutelapeticion.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Tutela al Derecho de Petición"]}),t.jsx("div",{className:"labor-card-desc",children:"Para obtener respuestas de las autoridades."})]})}),t.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/tutelasalud.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Tutela en  Salud"]}),t.jsx("div",{className:"labor-card-desc",children:"Somos expertos dentro del área de la salud, velamos por sus intereses."})]})}),t.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/tuteladebido.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Revocatoria de decisiones judiciales"]}),t.jsx("div",{className:"labor-card-desc",children:"Por vulneración al debido proceso de acuerdo a la jurisprudencia procesal."})]})}),t.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/jueztutela.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Tutela para obtener pensión"]}),t.jsx("div",{className:"labor-card-desc",children:"Cumplidos los requisitos de la jurisprudencia de la sala de casación laboral"})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría en Asesoría Contable?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(A,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(A,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(A,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(A,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios de familia"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#divorcio",children:"Divorcio y separación"})}),t.jsx("li",{children:t.jsx("a",{href:"#custodia",children:"Custodia y patria potestad"})}),t.jsx("li",{children:t.jsx("a",{href:"#alimentos",children:"Alimentos y pensión alimentaria"})}),t.jsx("li",{children:t.jsx("a",{href:"#sociedad",children:"Liquidación de sociedad conyugal"})}),t.jsx("li",{children:t.jsx("a",{href:"#adopciones",children:"Adopciones"})}),t.jsx("li",{children:t.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Br="https://koop-api-a28ac382dd56.herokuapp.com/api";async function cg({name:e,email:n,password:r,roles:a}){console.log(`API BASE: ${Br}/auth/register`);const i=await fetch(`${Br}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:n,password:r,roles:a})}),o=await i.json().catch(()=>({}));if(!i.ok)throw new Error((o==null?void 0:o.message)||"Error en registro");return o}async function dg(){const e=await fetch(`${Br}/auth/refresh`,{method:"POST",credentials:"include"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error((n==null?void 0:n.message)||"No se pudo refrescar sesión");return n}async function ug({email:e,password:n}){console.log(`API BASE: ${Br}/auth/login`);const r=await fetch(`${Br}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:n})});console.log(r);const a=await r.json().catch(()=>({}));if(!r.ok)throw new Error((a==null?void 0:a.message)||"Credenciales inválidas");return a}async function pg(){const e=await fetch(`${Br}/auth/logout`,{method:"POST",credentials:"include"});if(!e.ok){let n="Error al cerrar sesión";try{const r=await e.json();n=(r==null?void 0:r.message)||n}catch{}throw new Error(n)}return!0}function xp(e,n){return function(){return e.apply(n,arguments)}}const{toString:fg}=Object.prototype,{getPrototypeOf:ol}=Object,{iterator:yi,toStringTag:bp}=Symbol,wi=(e=>n=>{const r=fg.call(n);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),on=e=>(e=e.toLowerCase(),n=>wi(n)===e),ji=e=>n=>typeof n===e,{isArray:Wr}=Array,Mt=ji("undefined");function Ht(e){return e!==null&&!Mt(e)&&e.constructor!==null&&!Mt(e.constructor)&&Oe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const yp=on("ArrayBuffer");function hg(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&yp(e.buffer),n}const mg=ji("string"),Oe=ji("function"),wp=ji("number"),$t=e=>e!==null&&typeof e=="object",gg=e=>e===!0||e===!1,Ea=e=>{if(wi(e)!=="object")return!1;const n=ol(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(bp in e)&&!(yi in e)},vg=e=>{if(!$t(e)||Ht(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},xg=on("Date"),bg=on("File"),yg=on("Blob"),wg=on("FileList"),jg=e=>$t(e)&&Oe(e.pipe),kg=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||Oe(e.append)&&((n=wi(e))==="formdata"||n==="object"&&Oe(e.toString)&&e.toString()==="[object FormData]"))},Cg=on("URLSearchParams"),[Ng,Sg,Eg,Ag]=["ReadableStream","Request","Response","Headers"].map(on),Ig=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wt(e,n,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let a,i;if(typeof e!="object"&&(e=[e]),Wr(e))for(a=0,i=e.length;a<i;a++)n.call(null,e[a],a,e);else{if(Ht(e))return;const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(a=0;a<s;a++)l=o[a],n.call(null,e[l],l,e)}}function jp(e,n){if(Ht(e))return null;n=n.toLowerCase();const r=Object.keys(e);let a=r.length,i;for(;a-- >0;)if(i=r[a],n===i.toLowerCase())return i;return null}const rr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kp=e=>!Mt(e)&&e!==rr;function es(){const{caseless:e}=kp(this)&&this||{},n={},r=(a,i)=>{const o=e&&jp(n,i)||i;Ea(n[o])&&Ea(a)?n[o]=es(n[o],a):Ea(a)?n[o]=es({},a):Wr(a)?n[o]=a.slice():n[o]=a};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&Wt(arguments[a],r);return n}const Tg=(e,n,r,{allOwnKeys:a}={})=>(Wt(n,(i,o)=>{r&&Oe(i)?e[o]=xp(i,r):e[o]=i},{allOwnKeys:a}),e),Rg=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),zg=(e,n,r,a)=>{e.prototype=Object.create(n.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),r&&Object.assign(e.prototype,r)},Og=(e,n,r,a)=>{let i,o,s;const l={};if(n=n||{},e==null)return n;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!a||a(s,e,n))&&!l[s]&&(n[s]=e[s],l[s]=!0);e=r!==!1&&ol(e)}while(e&&(!r||r(e,n))&&e!==Object.prototype);return n},Dg=(e,n,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=n.length;const a=e.indexOf(n,r);return a!==-1&&a===r},Lg=e=>{if(!e)return null;if(Wr(e))return e;let n=e.length;if(!wp(n))return null;const r=new Array(n);for(;n-- >0;)r[n]=e[n];return r},Pg=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&ol(Uint8Array)),_g=(e,n)=>{const a=(e&&e[yi]).call(e);let i;for(;(i=a.next())&&!i.done;){const o=i.value;n.call(e,o[0],o[1])}},Vg=(e,n)=>{let r;const a=[];for(;(r=e.exec(n))!==null;)a.push(r);return a},Mg=on("HTMLFormElement"),Bg=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,a,i){return a.toUpperCase()+i}),Sc=(({hasOwnProperty:e})=>(n,r)=>e.call(n,r))(Object.prototype),Fg=on("RegExp"),Cp=(e,n)=>{const r=Object.getOwnPropertyDescriptors(e),a={};Wt(r,(i,o)=>{let s;(s=n(i,o,e))!==!1&&(a[o]=s||i)}),Object.defineProperties(e,a)},Ug=e=>{Cp(e,(n,r)=>{if(Oe(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const a=e[r];if(Oe(a)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Zg=(e,n)=>{const r={},a=i=>{i.forEach(o=>{r[o]=!0})};return Wr(e)?a(e):a(String(e).split(n)),r},Kg=()=>{},Hg=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function $g(e){return!!(e&&Oe(e.append)&&e[bp]==="FormData"&&e[yi])}const Wg=e=>{const n=new Array(10),r=(a,i)=>{if($t(a)){if(n.indexOf(a)>=0)return;if(Ht(a))return a;if(!("toJSON"in a)){n[i]=a;const o=Wr(a)?[]:{};return Wt(a,(s,l)=>{const c=r(s,i+1);!Mt(c)&&(o[l]=c)}),n[i]=void 0,o}}return a};return r(e,0)},qg=on("AsyncFunction"),Yg=e=>e&&($t(e)||Oe(e))&&Oe(e.then)&&Oe(e.catch),Np=((e,n)=>e?setImmediate:n?((r,a)=>(rr.addEventListener("message",({source:i,data:o})=>{i===rr&&o===r&&a.length&&a.shift()()},!1),i=>{a.push(i),rr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Oe(rr.postMessage)),Gg=typeof queueMicrotask<"u"?queueMicrotask.bind(rr):typeof process<"u"&&process.nextTick||Np,Jg=e=>e!=null&&Oe(e[yi]),k={isArray:Wr,isArrayBuffer:yp,isBuffer:Ht,isFormData:kg,isArrayBufferView:hg,isString:mg,isNumber:wp,isBoolean:gg,isObject:$t,isPlainObject:Ea,isEmptyObject:vg,isReadableStream:Ng,isRequest:Sg,isResponse:Eg,isHeaders:Ag,isUndefined:Mt,isDate:xg,isFile:bg,isBlob:yg,isRegExp:Fg,isFunction:Oe,isStream:jg,isURLSearchParams:Cg,isTypedArray:Pg,isFileList:wg,forEach:Wt,merge:es,extend:Tg,trim:Ig,stripBOM:Rg,inherits:zg,toFlatObject:Og,kindOf:wi,kindOfTest:on,endsWith:Dg,toArray:Lg,forEachEntry:_g,matchAll:Vg,isHTMLForm:Mg,hasOwnProperty:Sc,hasOwnProp:Sc,reduceDescriptors:Cp,freezeMethods:Ug,toObjectSet:Zg,toCamelCase:Bg,noop:Kg,toFiniteNumber:Hg,findKey:jp,global:rr,isContextDefined:kp,isSpecCompliantForm:$g,toJSONObject:Wg,isAsyncFn:qg,isThenable:Yg,setImmediate:Np,asap:Gg,isIterable:Jg};function B(e,n,r,a,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),r&&(this.config=r),a&&(this.request=a),i&&(this.response=i,this.status=i.status?i.status:null)}k.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const Sp=B.prototype,Ep={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ep[e]={value:e}});Object.defineProperties(B,Ep);Object.defineProperty(Sp,"isAxiosError",{value:!0});B.from=(e,n,r,a,i,o)=>{const s=Object.create(Sp);return k.toFlatObject(e,s,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),B.call(s,e.message,n,r,a,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const Qg=null;function ns(e){return k.isPlainObject(e)||k.isArray(e)}function Ap(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function Ec(e,n,r){return e?e.concat(n).map(function(i,o){return i=Ap(i),!r&&o?"["+i+"]":i}).join(r?".":""):n}function Xg(e){return k.isArray(e)&&!e.some(ns)}const e1=k.toFlatObject(k,{},null,function(n){return/^is[A-Z]/.test(n)});function ki(e,n,r){if(!k.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,r=k.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,j){return!k.isUndefined(j[x])});const a=r.metaTokens,i=r.visitor||p,o=r.dots,s=r.indexes,c=(r.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(n);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function d(v){if(v===null)return"";if(k.isDate(v))return v.toISOString();if(k.isBoolean(v))return v.toString();if(!c&&k.isBlob(v))throw new B("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(v)||k.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function p(v,x,j){let g=v;if(v&&!j&&typeof v=="object"){if(k.endsWith(x,"{}"))x=a?x:x.slice(0,-2),v=JSON.stringify(v);else if(k.isArray(v)&&Xg(v)||(k.isFileList(v)||k.endsWith(x,"[]"))&&(g=k.toArray(v)))return x=Ap(x),g.forEach(function(m,w){!(k.isUndefined(m)||m===null)&&n.append(s===!0?Ec([x],w,o):s===null?x:x+"[]",d(m))}),!1}return ns(v)?!0:(n.append(Ec(j,x,o),d(v)),!1)}const f=[],h=Object.assign(e1,{defaultVisitor:p,convertValue:d,isVisitable:ns});function b(v,x){if(!k.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(v),k.forEach(v,function(g,u){(!(k.isUndefined(g)||g===null)&&i.call(n,g,k.isString(u)?u.trim():u,x,h))===!0&&b(g,x?x.concat(u):[u])}),f.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return b(e),n}function Ac(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return n[a]})}function sl(e,n){this._pairs=[],e&&ki(e,this,n)}const Ip=sl.prototype;Ip.append=function(n,r){this._pairs.push([n,r])};Ip.toString=function(n){const r=n?function(a){return n.call(this,a,Ac)}:Ac;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function n1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Tp(e,n,r){if(!n)return e;const a=r&&r.encode||n1;k.isFunction(r)&&(r={serialize:r});const i=r&&r.serialize;let o;if(i?o=i(n,r):o=k.isURLSearchParams(n)?n.toString():new sl(n,r).toString(a),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ic{constructor(){this.handlers=[]}use(n,r,a){return this.handlers.push({fulfilled:n,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){k.forEach(this.handlers,function(a){a!==null&&n(a)})}}const Rp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},r1=typeof URLSearchParams<"u"?URLSearchParams:sl,t1=typeof FormData<"u"?FormData:null,a1=typeof Blob<"u"?Blob:null,i1={isBrowser:!0,classes:{URLSearchParams:r1,FormData:t1,Blob:a1},protocols:["http","https","file","blob","url","data"]},ll=typeof window<"u"&&typeof document<"u",rs=typeof navigator=="object"&&navigator||void 0,o1=ll&&(!rs||["ReactNative","NativeScript","NS"].indexOf(rs.product)<0),s1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",l1=ll&&window.location.href||"http://localhost",c1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ll,hasStandardBrowserEnv:o1,hasStandardBrowserWebWorkerEnv:s1,navigator:rs,origin:l1},Symbol.toStringTag,{value:"Module"})),we={...c1,...i1};function d1(e,n){return ki(e,new we.classes.URLSearchParams,{visitor:function(r,a,i,o){return we.isNode&&k.isBuffer(r)?(this.append(a,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...n})}function u1(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function p1(e){const n={},r=Object.keys(e);let a;const i=r.length;let o;for(a=0;a<i;a++)o=r[a],n[o]=e[o];return n}function zp(e){function n(r,a,i,o){let s=r[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=o>=r.length;return s=!s&&k.isArray(i)?i.length:s,c?(k.hasOwnProp(i,s)?i[s]=[i[s],a]:i[s]=a,!l):((!i[s]||!k.isObject(i[s]))&&(i[s]=[]),n(r,a,i[s],o)&&k.isArray(i[s])&&(i[s]=p1(i[s])),!l)}if(k.isFormData(e)&&k.isFunction(e.entries)){const r={};return k.forEachEntry(e,(a,i)=>{n(u1(a),i,r,0)}),r}return null}function f1(e,n,r){if(k.isString(e))try{return(n||JSON.parse)(e),k.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(e)}const qt={transitional:Rp,adapter:["xhr","http","fetch"],transformRequest:[function(n,r){const a=r.getContentType()||"",i=a.indexOf("application/json")>-1,o=k.isObject(n);if(o&&k.isHTMLForm(n)&&(n=new FormData(n)),k.isFormData(n))return i?JSON.stringify(zp(n)):n;if(k.isArrayBuffer(n)||k.isBuffer(n)||k.isStream(n)||k.isFile(n)||k.isBlob(n)||k.isReadableStream(n))return n;if(k.isArrayBufferView(n))return n.buffer;if(k.isURLSearchParams(n))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(o){if(a.indexOf("application/x-www-form-urlencoded")>-1)return d1(n,this.formSerializer).toString();if((l=k.isFileList(n))||a.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ki(l?{"files[]":n}:n,c&&new c,this.formSerializer)}}return o||i?(r.setContentType("application/json",!1),f1(n)):n}],transformResponse:[function(n){const r=this.transitional||qt.transitional,a=r&&r.forcedJSONParsing,i=this.responseType==="json";if(k.isResponse(n)||k.isReadableStream(n))return n;if(n&&k.isString(n)&&(a&&!this.responseType||i)){const s=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(n)}catch(l){if(s)throw l.name==="SyntaxError"?B.from(l,B.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:we.classes.FormData,Blob:we.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{qt.headers[e]={}});const h1=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),m1=e=>{const n={};let r,a,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),r=s.substring(0,i).trim().toLowerCase(),a=s.substring(i+1).trim(),!(!r||n[r]&&h1[r])&&(r==="set-cookie"?n[r]?n[r].push(a):n[r]=[a]:n[r]=n[r]?n[r]+", "+a:a)}),n},Tc=Symbol("internals");function tt(e){return e&&String(e).trim().toLowerCase()}function Aa(e){return e===!1||e==null?e:k.isArray(e)?e.map(Aa):String(e)}function g1(e){const n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=r.exec(e);)n[a[1]]=a[2];return n}const v1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function eo(e,n,r,a,i){if(k.isFunction(a))return a.call(this,n,r);if(i&&(n=r),!!k.isString(n)){if(k.isString(a))return n.indexOf(a)!==-1;if(k.isRegExp(a))return a.test(n)}}function x1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,r,a)=>r.toUpperCase()+a)}function b1(e,n){const r=k.toCamelCase(" "+n);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+r,{value:function(i,o,s){return this[a].call(this,n,i,o,s)},configurable:!0})})}let De=class{constructor(n){n&&this.set(n)}set(n,r,a){const i=this;function o(l,c,d){const p=tt(c);if(!p)throw new Error("header name must be a non-empty string");const f=k.findKey(i,p);(!f||i[f]===void 0||d===!0||d===void 0&&i[f]!==!1)&&(i[f||c]=Aa(l))}const s=(l,c)=>k.forEach(l,(d,p)=>o(d,p,c));if(k.isPlainObject(n)||n instanceof this.constructor)s(n,r);else if(k.isString(n)&&(n=n.trim())&&!v1(n))s(m1(n),r);else if(k.isObject(n)&&k.isIterable(n)){let l={},c,d;for(const p of n){if(!k.isArray(p))throw TypeError("Object iterator must return a key-value pair");l[d=p[0]]=(c=l[d])?k.isArray(c)?[...c,p[1]]:[c,p[1]]:p[1]}s(l,r)}else n!=null&&o(r,n,a);return this}get(n,r){if(n=tt(n),n){const a=k.findKey(this,n);if(a){const i=this[a];if(!r)return i;if(r===!0)return g1(i);if(k.isFunction(r))return r.call(this,i,a);if(k.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,r){if(n=tt(n),n){const a=k.findKey(this,n);return!!(a&&this[a]!==void 0&&(!r||eo(this,this[a],a,r)))}return!1}delete(n,r){const a=this;let i=!1;function o(s){if(s=tt(s),s){const l=k.findKey(a,s);l&&(!r||eo(a,a[l],l,r))&&(delete a[l],i=!0)}}return k.isArray(n)?n.forEach(o):o(n),i}clear(n){const r=Object.keys(this);let a=r.length,i=!1;for(;a--;){const o=r[a];(!n||eo(this,this[o],o,n,!0))&&(delete this[o],i=!0)}return i}normalize(n){const r=this,a={};return k.forEach(this,(i,o)=>{const s=k.findKey(a,o);if(s){r[s]=Aa(i),delete r[o];return}const l=n?x1(o):String(o).trim();l!==o&&delete r[o],r[l]=Aa(i),a[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const r=Object.create(null);return k.forEach(this,(a,i)=>{a!=null&&a!==!1&&(r[i]=n&&k.isArray(a)?a.join(", "):a)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,r])=>n+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...r){const a=new this(n);return r.forEach(i=>a.set(i)),a}static accessor(n){const a=(this[Tc]=this[Tc]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=tt(s);a[l]||(b1(i,s),a[l]=!0)}return k.isArray(n)?n.forEach(o):o(n),this}};De.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(De.prototype,({value:e},n)=>{let r=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(a){this[r]=a}}});k.freezeMethods(De);function no(e,n){const r=this||qt,a=n||r,i=De.from(a.headers);let o=a.data;return k.forEach(e,function(l){o=l.call(r,o,i.normalize(),n?n.status:void 0)}),i.normalize(),o}function Op(e){return!!(e&&e.__CANCEL__)}function qr(e,n,r){B.call(this,e??"canceled",B.ERR_CANCELED,n,r),this.name="CanceledError"}k.inherits(qr,B,{__CANCEL__:!0});function Dp(e,n,r){const a=r.config.validateStatus;!r.status||!a||a(r.status)?e(r):n(new B("Request failed with status code "+r.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function y1(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function w1(e,n){e=e||10;const r=new Array(e),a=new Array(e);let i=0,o=0,s;return n=n!==void 0?n:1e3,function(c){const d=Date.now(),p=a[o];s||(s=d),r[i]=c,a[i]=d;let f=o,h=0;for(;f!==i;)h+=r[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),d-s<n)return;const b=p&&d-p;return b?Math.round(h*1e3/b):void 0}}function j1(e,n){let r=0,a=1e3/n,i,o;const s=(d,p=Date.now())=>{r=p,i=null,o&&(clearTimeout(o),o=null),e(...d)};return[(...d)=>{const p=Date.now(),f=p-r;f>=a?s(d,p):(i=d,o||(o=setTimeout(()=>{o=null,s(i)},a-f)))},()=>i&&s(i)]}const ni=(e,n,r=3)=>{let a=0;const i=w1(50,250);return j1(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,c=s-a,d=i(c),p=s<=l;a=s;const f={loaded:s,total:l,progress:l?s/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&p?(l-s)/d:void 0,event:o,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(f)},r)},Rc=(e,n)=>{const r=e!=null;return[a=>n[0]({lengthComputable:r,total:e,loaded:a}),n[1]]},zc=e=>(...n)=>k.asap(()=>e(...n)),k1=we.hasStandardBrowserEnv?((e,n)=>r=>(r=new URL(r,we.origin),e.protocol===r.protocol&&e.host===r.host&&(n||e.port===r.port)))(new URL(we.origin),we.navigator&&/(msie|trident)/i.test(we.navigator.userAgent)):()=>!0,C1=we.hasStandardBrowserEnv?{write(e,n,r,a,i,o){const s=[e+"="+encodeURIComponent(n)];k.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),k.isString(a)&&s.push("path="+a),k.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function N1(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function S1(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function Lp(e,n,r){let a=!N1(n);return e&&(a||r==!1)?S1(e,n):n}const Oc=e=>e instanceof De?{...e}:e;function ur(e,n){n=n||{};const r={};function a(d,p,f,h){return k.isPlainObject(d)&&k.isPlainObject(p)?k.merge.call({caseless:h},d,p):k.isPlainObject(p)?k.merge({},p):k.isArray(p)?p.slice():p}function i(d,p,f,h){if(k.isUndefined(p)){if(!k.isUndefined(d))return a(void 0,d,f,h)}else return a(d,p,f,h)}function o(d,p){if(!k.isUndefined(p))return a(void 0,p)}function s(d,p){if(k.isUndefined(p)){if(!k.isUndefined(d))return a(void 0,d)}else return a(void 0,p)}function l(d,p,f){if(f in n)return a(d,p);if(f in e)return a(void 0,d)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(d,p,f)=>i(Oc(d),Oc(p),f,!0)};return k.forEach(Object.keys({...e,...n}),function(p){const f=c[p]||i,h=f(e[p],n[p],p);k.isUndefined(h)&&f!==l||(r[p]=h)}),r}const Pp=e=>{const n=ur({},e);let{data:r,withXSRFToken:a,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=n;n.headers=s=De.from(s),n.url=Tp(Lp(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(k.isFormData(r)){if(we.hasStandardBrowserEnv||we.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[d,...p]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([d||"multipart/form-data",...p].join("; "))}}if(we.hasStandardBrowserEnv&&(a&&k.isFunction(a)&&(a=a(n)),a||a!==!1&&k1(n.url))){const d=i&&o&&C1.read(o);d&&s.set(i,d)}return n},E1=typeof XMLHttpRequest<"u",A1=E1&&function(e){return new Promise(function(r,a){const i=Pp(e);let o=i.data;const s=De.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=i,p,f,h,b,v;function x(){b&&b(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(p),i.signal&&i.signal.removeEventListener("abort",p)}let j=new XMLHttpRequest;j.open(i.method.toUpperCase(),i.url,!0),j.timeout=i.timeout;function g(){if(!j)return;const m=De.from("getAllResponseHeaders"in j&&j.getAllResponseHeaders()),C={data:!l||l==="text"||l==="json"?j.responseText:j.response,status:j.status,statusText:j.statusText,headers:m,config:e,request:j};Dp(function(I){r(I),x()},function(I){a(I),x()},C),j=null}"onloadend"in j?j.onloadend=g:j.onreadystatechange=function(){!j||j.readyState!==4||j.status===0&&!(j.responseURL&&j.responseURL.indexOf("file:")===0)||setTimeout(g)},j.onabort=function(){j&&(a(new B("Request aborted",B.ECONNABORTED,e,j)),j=null)},j.onerror=function(){a(new B("Network Error",B.ERR_NETWORK,e,j)),j=null},j.ontimeout=function(){let w=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const C=i.transitional||Rp;i.timeoutErrorMessage&&(w=i.timeoutErrorMessage),a(new B(w,C.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,j)),j=null},o===void 0&&s.setContentType(null),"setRequestHeader"in j&&k.forEach(s.toJSON(),function(w,C){j.setRequestHeader(C,w)}),k.isUndefined(i.withCredentials)||(j.withCredentials=!!i.withCredentials),l&&l!=="json"&&(j.responseType=i.responseType),d&&([h,v]=ni(d,!0),j.addEventListener("progress",h)),c&&j.upload&&([f,b]=ni(c),j.upload.addEventListener("progress",f),j.upload.addEventListener("loadend",b)),(i.cancelToken||i.signal)&&(p=m=>{j&&(a(!m||m.type?new qr(null,e,j):m),j.abort(),j=null)},i.cancelToken&&i.cancelToken.subscribe(p),i.signal&&(i.signal.aborted?p():i.signal.addEventListener("abort",p)));const u=y1(i.url);if(u&&we.protocols.indexOf(u)===-1){a(new B("Unsupported protocol "+u+":",B.ERR_BAD_REQUEST,e));return}j.send(o||null)})},I1=(e,n)=>{const{length:r}=e=e?e.filter(Boolean):[];if(n||r){let a=new AbortController,i;const o=function(d){if(!i){i=!0,l();const p=d instanceof Error?d:this.reason;a.abort(p instanceof B?p:new qr(p instanceof Error?p.message:p))}};let s=n&&setTimeout(()=>{s=null,o(new B(`timeout ${n} of ms exceeded`,B.ETIMEDOUT))},n);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),e=null)};e.forEach(d=>d.addEventListener("abort",o));const{signal:c}=a;return c.unsubscribe=()=>k.asap(l),c}},T1=function*(e,n){let r=e.byteLength;if(r<n){yield e;return}let a=0,i;for(;a<r;)i=a+n,yield e.slice(a,i),a=i},R1=async function*(e,n){for await(const r of z1(e))yield*T1(r,n)},z1=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:r,value:a}=await n.read();if(r)break;yield a}}finally{await n.cancel()}},Dc=(e,n,r,a)=>{const i=R1(e,n);let o=0,s,l=c=>{s||(s=!0,a&&a(c))};return new ReadableStream({async pull(c){try{const{done:d,value:p}=await i.next();if(d){l(),c.close();return}let f=p.byteLength;if(r){let h=o+=f;r(h)}c.enqueue(new Uint8Array(p))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},Ci=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",_p=Ci&&typeof ReadableStream=="function",O1=Ci&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Vp=(e,...n)=>{try{return!!e(...n)}catch{return!1}},D1=_p&&Vp(()=>{let e=!1;const n=new Request(we.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),Lc=64*1024,ts=_p&&Vp(()=>k.isReadableStream(new Response("").body)),ri={stream:ts&&(e=>e.body)};Ci&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!ri[n]&&(ri[n]=k.isFunction(e[n])?r=>r[n]():(r,a)=>{throw new B(`Response type '${n}' is not supported`,B.ERR_NOT_SUPPORT,a)})})})(new Response);const L1=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(we.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await O1(e)).byteLength},P1=async(e,n)=>{const r=k.toFiniteNumber(e.getContentLength());return r??L1(n)},_1=Ci&&(async e=>{let{url:n,method:r,data:a,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:c,responseType:d,headers:p,withCredentials:f="same-origin",fetchOptions:h}=Pp(e);d=d?(d+"").toLowerCase():"text";let b=I1([i,o&&o.toAbortSignal()],s),v;const x=b&&b.unsubscribe&&(()=>{b.unsubscribe()});let j;try{if(c&&D1&&r!=="get"&&r!=="head"&&(j=await P1(p,a))!==0){let C=new Request(n,{method:"POST",body:a,duplex:"half"}),N;if(k.isFormData(a)&&(N=C.headers.get("content-type"))&&p.setContentType(N),C.body){const[I,z]=Rc(j,ni(zc(c)));a=Dc(C.body,Lc,I,z)}}k.isString(f)||(f=f?"include":"omit");const g="credentials"in Request.prototype;v=new Request(n,{...h,signal:b,method:r.toUpperCase(),headers:p.normalize().toJSON(),body:a,duplex:"half",credentials:g?f:void 0});let u=await fetch(v,h);const m=ts&&(d==="stream"||d==="response");if(ts&&(l||m&&x)){const C={};["status","statusText","headers"].forEach(F=>{C[F]=u[F]});const N=k.toFiniteNumber(u.headers.get("content-length")),[I,z]=l&&Rc(N,ni(zc(l),!0))||[];u=new Response(Dc(u.body,Lc,I,()=>{z&&z(),x&&x()}),C)}d=d||"text";let w=await ri[k.findKey(ri,d)||"text"](u,e);return!m&&x&&x(),await new Promise((C,N)=>{Dp(C,N,{data:w,headers:De.from(u.headers),status:u.status,statusText:u.statusText,config:e,request:v})})}catch(g){throw x&&x(),g&&g.name==="TypeError"&&/Load failed|fetch/i.test(g.message)?Object.assign(new B("Network Error",B.ERR_NETWORK,e,v),{cause:g.cause||g}):B.from(g,g&&g.code,e,v)}}),as={http:Qg,xhr:A1,fetch:_1};k.forEach(as,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const Pc=e=>`- ${e}`,V1=e=>k.isFunction(e)||e===null||e===!1,Mp={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:n}=e;let r,a;const i={};for(let o=0;o<n;o++){r=e[o];let s;if(a=r,!V1(r)&&(a=as[(s=String(r)).toLowerCase()],a===void 0))throw new B(`Unknown adapter '${s}'`);if(a)break;i[s||"#"+o]=a}if(!a){const o=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=n?o.length>1?`since :
`+o.map(Pc).join(`
`):" "+Pc(o[0]):"as no adapter specified";throw new B("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return a},adapters:as};function ro(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new qr(null,e)}function _c(e){return ro(e),e.headers=De.from(e.headers),e.data=no.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Mp.getAdapter(e.adapter||qt.adapter)(e).then(function(a){return ro(e),a.data=no.call(e,e.transformResponse,a),a.headers=De.from(a.headers),a},function(a){return Op(a)||(ro(e),a&&a.response&&(a.response.data=no.call(e,e.transformResponse,a.response),a.response.headers=De.from(a.response.headers))),Promise.reject(a)})}const Bp="1.11.0",Ni={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{Ni[e]=function(a){return typeof a===e||"a"+(n<1?"n ":" ")+e}});const Vc={};Ni.transitional=function(n,r,a){function i(o,s){return"[Axios v"+Bp+"] Transitional option '"+o+"'"+s+(a?". "+a:"")}return(o,s,l)=>{if(n===!1)throw new B(i(s," has been removed"+(r?" in "+r:"")),B.ERR_DEPRECATED);return r&&!Vc[s]&&(Vc[s]=!0,console.warn(i(s," has been deprecated since v"+r+" and will be removed in the near future"))),n?n(o,s,l):!0}};Ni.spelling=function(n){return(r,a)=>(console.warn(`${a} is likely a misspelling of ${n}`),!0)};function M1(e,n,r){if(typeof e!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let i=a.length;for(;i-- >0;){const o=a[i],s=n[o];if(s){const l=e[o],c=l===void 0||s(l,o,e);if(c!==!0)throw new B("option "+o+" must be "+c,B.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new B("Unknown option "+o,B.ERR_BAD_OPTION)}}const Ia={assertOptions:M1,validators:Ni},ln=Ia.validators;let ir=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Ic,response:new Ic}}async request(n,r){try{return await this._request(n,r)}catch(a){if(a instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{a.stack?o&&!String(a.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+o):a.stack=o}catch{}}throw a}}_request(n,r){typeof n=="string"?(r=r||{},r.url=n):r=n||{},r=ur(this.defaults,r);const{transitional:a,paramsSerializer:i,headers:o}=r;a!==void 0&&Ia.assertOptions(a,{silentJSONParsing:ln.transitional(ln.boolean),forcedJSONParsing:ln.transitional(ln.boolean),clarifyTimeoutError:ln.transitional(ln.boolean)},!1),i!=null&&(k.isFunction(i)?r.paramsSerializer={serialize:i}:Ia.assertOptions(i,{encode:ln.function,serialize:ln.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Ia.assertOptions(r,{baseUrl:ln.spelling("baseURL"),withXsrfToken:ln.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=o&&k.merge(o.common,o[r.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),r.headers=De.concat(s,o);const l=[];let c=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(r)===!1||(c=c&&x.synchronous,l.unshift(x.fulfilled,x.rejected))});const d=[];this.interceptors.response.forEach(function(x){d.push(x.fulfilled,x.rejected)});let p,f=0,h;if(!c){const v=[_c.bind(this),void 0];for(v.unshift(...l),v.push(...d),h=v.length,p=Promise.resolve(r);f<h;)p=p.then(v[f++],v[f++]);return p}h=l.length;let b=r;for(f=0;f<h;){const v=l[f++],x=l[f++];try{b=v(b)}catch(j){x.call(this,j);break}}try{p=_c.call(this,b)}catch(v){return Promise.reject(v)}for(f=0,h=d.length;f<h;)p=p.then(d[f++],d[f++]);return p}getUri(n){n=ur(this.defaults,n);const r=Lp(n.baseURL,n.url,n.allowAbsoluteUrls);return Tp(r,n.params,n.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(n){ir.prototype[n]=function(r,a){return this.request(ur(a||{},{method:n,url:r,data:(a||{}).data}))}});k.forEach(["post","put","patch"],function(n){function r(a){return function(o,s,l){return this.request(ur(l||{},{method:n,headers:a?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}ir.prototype[n]=r(),ir.prototype[n+"Form"]=r(!0)});let B1=class Fp{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const a=this;this.promise.then(i=>{if(!a._listeners)return;let o=a._listeners.length;for(;o-- >0;)a._listeners[o](i);a._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{a.subscribe(l),o=l}).then(i);return s.cancel=function(){a.unsubscribe(o)},s},n(function(o,s,l){a.reason||(a.reason=new qr(o,s,l),r(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const r=this._listeners.indexOf(n);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const n=new AbortController,r=a=>{n.abort(a)};return this.subscribe(r),n.signal.unsubscribe=()=>this.unsubscribe(r),n.signal}static source(){let n;return{token:new Fp(function(i){n=i}),cancel:n}}};function F1(e){return function(r){return e.apply(null,r)}}function U1(e){return k.isObject(e)&&e.isAxiosError===!0}const is={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(is).forEach(([e,n])=>{is[n]=e});function Up(e){const n=new ir(e),r=xp(ir.prototype.request,n);return k.extend(r,ir.prototype,n,{allOwnKeys:!0}),k.extend(r,n,null,{allOwnKeys:!0}),r.create=function(i){return Up(ur(e,i))},r}const te=Up(qt);te.Axios=ir;te.CanceledError=qr;te.CancelToken=B1;te.isCancel=Op;te.VERSION=Bp;te.toFormData=ki;te.AxiosError=B;te.Cancel=te.CanceledError;te.all=function(n){return Promise.all(n)};te.spread=F1;te.isAxiosError=U1;te.mergeConfig=ur;te.AxiosHeaders=De;te.formToJSON=e=>zp(k.isHTMLForm(e)?new FormData(e):e);te.getAdapter=Mp.getAdapter;te.HttpStatusCode=is;te.default=te;const{Axios:L2,AxiosError:P2,CanceledError:_2,isCancel:V2,CancelToken:M2,VERSION:B2,all:F2,Cancel:U2,isAxiosError:Z2,spread:K2,toFormData:H2,AxiosHeaders:$2,HttpStatusCode:W2,formToJSON:q2,getAdapter:Y2,mergeConfig:G2}=te,Zp="https://koop-api-a28ac382dd56.herokuapp.com/api",je=te.create({baseURL:Zp,withCredentials:!0}),Z1=te.create({baseURL:Zp,withCredentials:!0});let to=!1,os=[];function K1(e){os.push(e)}function H1(e){os.forEach(n=>{try{n(e)}catch{}}),os=[]}function $1({getAccessToken:e,setAccessToken:n,onLogout:r}){je.interceptors.request.use(a=>{var i,o;try{let s;try{s=e==null?void 0:e()}catch{}if(!s&&typeof window<"u")try{s=(i=window.localStorage)==null?void 0:i.getItem("accessToken")}catch{}s&&!((o=a.headers)!=null&&o.Authorization)&&(a.headers=a.headers||{},a.headers.Authorization=`Bearer ${s}`)}catch{}return a}),je.interceptors.response.use(a=>a,async a=>{var p,f;const{response:i,config:o}=a||{},s=i==null?void 0:i.status,l=o||{},c=String((l==null?void 0:l.url)||""),d=c.includes("/auth/login")||c.includes("/auth/register")||c.includes("/auth/refresh");if(s!==401||d||l._retry)return Promise.reject(a);if(l._retry=!0,to)return new Promise((h,b)=>{K1(v=>{try{l.headers=l.headers||{},v&&(l.headers.Authorization=`Bearer ${v}`),h(je(l))}catch(x){b(x)}})});to=!0;try{const h=await Z1.post("/auth/refresh"),b=(p=h==null?void 0:h.data)==null?void 0:p.accessToken;if(!b)throw new Error("No accessToken in refresh");try{n==null||n(b)}catch{}return H1(b),l.headers=l.headers||{},l.headers.Authorization=`Bearer ${b}`,je(l)}catch(h){const b=(f=h==null?void 0:h.response)==null?void 0:f.status;if(b===401||b===403)try{await(r==null?void 0:r())}catch{}return Promise.reject(h)}finally{to=!1}})}const Kp=y.createContext(null),Mc=["admin","user"];function ss(e,{defaultRole:n="user"}={}){const r=String(n||"user").trim().toLowerCase(),a=Mc.includes(r)?r:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Mc.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function fa(e){try{const n=e.split(".")[1],r=atob(n.replace(/-/g,"+").replace(/_/g,"/"));return JSON.parse(r)}catch{return null}}function ha(e,n){return e?{id:e.sub,name:e.name,email:e.email,roles:ss(e.roles),active:e.active!==!1,driveFolders:e.driveFolders||[]}:n?{id:n.id,name:n.name,email:n.email,roles:ss(n.roles),active:n.active!==!1,driveFolders:n.driveFolders||[]}:null}function W1({children:e}){const[n,r]=y.useState(()=>localStorage.getItem("accessToken")||null),[a,i]=y.useState(()=>{const b=localStorage.getItem("accessToken");if(!b)return null;const v=fa(b);return ha(v,null)}),[o,s]=y.useState(!1),l=!!n;y.useEffect(()=>{if(!n)localStorage.removeItem("accessToken"),i(null);else{localStorage.setItem("accessToken",n);const b=fa(n);b&&i(ha(b,null))}},[n]);const c=async(b,v)=>{s(!0);try{const{accessToken:x,user:j}=await ug({email:b,password:v});r(x);const g=fa(x);return i(ha(g,j)),{ok:!0}}catch(x){return{ok:!1,error:x.message}}finally{s(!1)}},d=async(b,v,x,j)=>{s(!0);try{const g=Array.isArray(j)&&j.length>0,u=await cg({name:b,email:v,password:x,roles:g?ss(j):void 0});if(u!=null&&u.accessToken){r(u.accessToken);const m=fa(u.accessToken);i(ha(m,u.user))}return{ok:!0,data:u}}catch(g){return{ok:!1,error:g.message}}finally{s(!1)}},p=async()=>{try{await pg()}catch{}finally{r(null),i(null)}},f=y.useMemo(()=>({accessToken:n,user:a,isAuthenticated:l,loading:o,login:c,register:d,logout:p,refresh:dg}),[n,a,l,o]),h=y.useRef(!1);return y.useEffect(()=>{h.current||($1({getAccessToken:()=>n,setAccessToken:b=>r(b),onLogout:()=>p()}),h.current=!0)},[]),t.jsx(Kp.Provider,{value:f,children:e})}function Le(){const e=y.useContext(Kp);if(!e)throw new Error("useAuth debe usarse dentro de AuthProvider");return e}const Hp="/assets/Koop%20Logo-DEFOyNWT.png";function q1(){var h,b;const{login:e,loading:n}=Le(),r=$r(),i=((b=(h=fn().state)==null?void 0:h.from)==null?void 0:b.pathname)||"/dashboard",[o,s]=y.useState(""),[l,c]=y.useState(""),[d,p]=y.useState(""),f=async v=>{v.preventDefault(),p(""),console.log("Submitting login form, Hola q ac",o);const x=await e(o,l);if(!x.ok){p(x.error||"Error al iniciar sesión");return}r(i,{replace:!0})};return y.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),t.jsxs("div",{className:"auth-page",children:[t.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:t.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),t.jsx("div",{className:"auth-bg-overlay"}),t.jsxs("div",{className:"auth-card",children:[t.jsx(A,{to:"/",children:t.jsx("img",{src:Hp,alt:"Logo KOOP",className:"logo"})}),t.jsx("h2",{children:"Login KOOP"}),d&&t.jsx("div",{className:"auth-error",children:d}),t.jsxs("form",{onSubmit:f,children:[t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"email",children:"Correo"}),t.jsx("input",{id:"email",type:"email",placeholder:"Ingrese su correo",value:o,onChange:v=>s(v.target.value),required:!0})]}),t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"password",children:"Contraseña"}),t.jsx("input",{id:"password",type:"password",placeholder:"Ingrese su contraseña",value:l,onChange:v=>c(v.target.value),required:!0})]}),t.jsx("button",{type:"submit",className:"login-button",disabled:n,children:n?"Ingresando...":"Iniciar sesión"})]}),t.jsxs("div",{className:"auth-actions",children:["¿No tienes cuenta? ",t.jsx(A,{to:"/register",children:"Regístrate"})," · ",t.jsx(A,{to:"/",children:"Volver al inicio"})]})]})]})}function Y1(){const[e,n]=y.useState({name:"",email:"",password:""}),[r,a]=y.useState(!1),[i,o]=y.useState(""),[s,l]=y.useState(""),{register:c}=Le(),d=$r(),p=h=>n({...e,[h.target.name]:h.target.value}),f=async h=>{h.preventDefault(),o(""),l(""),a(!0);try{const b=await c(e.name,e.email,e.password);if(b.ok){const v=b.data||{ok:!0};v!=null&&v.accessToken?d("/dashboard"):(l("Tu registro fue recibido. Un administrador activara tu cuenta y te avisaremos por correo."),n({name:"",email:"",password:""}))}else o(b.error||"Error en registro")}catch(b){const v=(b==null?void 0:b.message)||"Error en registro";o(v)}finally{a(!1)}};return y.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),t.jsxs("div",{className:"auth-page",children:[t.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:t.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),t.jsx("div",{className:"auth-bg-overlay"}),t.jsxs("div",{className:"auth-card",children:[t.jsx("img",{src:Hp,alt:"Logo KOOP",className:"logo"}),t.jsx("h2",{children:"Crear Cuenta"}),i&&t.jsx("div",{className:"auth-error",children:i}),s&&t.jsx("div",{className:"auth-info",children:s}),t.jsxs("form",{onSubmit:f,children:[t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"name",children:"Nombre"}),t.jsx("input",{id:"name",name:"name",type:"text",placeholder:"Tu nombre",value:e.name,onChange:p})]}),t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"email",children:"Correo"}),t.jsx("input",{id:"email",name:"email",type:"email",placeholder:"tu@email.com",value:e.email,onChange:p,required:!0})]}),t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"password",children:"Contrasena"}),t.jsx("input",{id:"password",name:"password",type:"password",placeholder:"Minimo 8 caracteres",value:e.password,onChange:p,required:!0})]}),t.jsx("button",{type:"submit",className:"login-button",disabled:r,children:r?"Creando...":"Registrarme"})]}),t.jsxs("div",{className:"auth-actions",children:["Ya tienes cuenta? ",t.jsx(A,{to:"/login",children:"Inicia sesion"})]})]})]})}function G1(e){return e!=null&&e.roles?(Array.isArray(e.roles)?e.roles:[e.roles]).map(n=>String(n||"").toLowerCase()).includes("admin"):!1}function J1(){const{user:e,logout:n}=Le(),r=G1(e);return e?t.jsxs("div",{style:{padding:24,display:"flex",flexDirection:"column",gap:16},children:[t.jsx("h1",{children:"Panel Privado"}),t.jsxs("div",{children:[t.jsxs("p",{children:["Bienvenido: ",e.email]}),t.jsxs("p",{children:["Roles: ",Array.isArray(e.roles)?e.roles.join(", "):"N/A"]}),t.jsxs("p",{children:["Estado: ",e.active===!1?"Inactivo":"Activo"]})]}),r&&t.jsx("div",{style:{display:"flex",gap:12},children:t.jsx(A,{className:"btn btn-primary",to:"/admin/usuarios",children:"Gestionar usuarios"})}),t.jsx("div",{children:t.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Cerrar sesion"})})]}):t.jsxs("div",{style:{padding:24},children:[t.jsx("h1",{children:"Panel Privado"}),t.jsx("p",{children:"No hay usuario."})]})}async function $p(){const{data:e}=await je.get("/admin/users");return e}async function Q1(e,n){const{data:r}=await je.patch(`/admin/users/${e}/active`,{active:n});return r}async function X1(e){const{data:n}=await je.post(`/admin/users/${e}/grant-admin`);return n}async function e2(e){const{data:n}=await je.post(`/admin/users/${e}/revoke-admin`);return n}async function n2(e){const{data:n}=await je.delete(`/admin/users/${e}`);return n}async function r2(){const{data:e}=await je.get("/admin/clients/active");return e}async function t2(e,n){const{data:r}=await je.patch(`/admin/clients/${e}`,n);return r}async function a2(e,n){const{data:r}=await je.post(`/admin/clients/from-user/${e}`,n);return r}const Bc=["admin","user"];function dt(e,{defaultRole:n="user"}={}){const r=String(n||"user").trim().toLowerCase(),a=Bc.includes(r)?r:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Bc.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function i2(e){return dt(e==null?void 0:e.roles).includes("admin")}function o2(){const{user:e}=Le(),n=i2(e),[r,a]=y.useState([]),[i,o]=y.useState(!1),[s,l]=y.useState(null),[c,d]=y.useState(null),[p,f]=y.useState(null),[h,b]=y.useState(null),[v,x]=y.useState(null),[j,g]=y.useState(!1),[u,m]=y.useState(null),w=e==null?void 0:e.id,C=async()=>{var T,P;if(n){o(!0),l(null);try{const V=await $p();a(Array.isArray(V==null?void 0:V.items)?V.items.map(se=>({...se,roles:dt(se.roles)})):[])}catch(V){l(((P=(T=V==null?void 0:V.response)==null?void 0:T.data)==null?void 0:P.message)||(V==null?void 0:V.message)||"No se pudo cargar la lista")}finally{o(!1)}}};y.useEffect(()=>{C()},[n]);const N=async(T,P)=>{var V,se;try{d(T),await Q1(T,P),a(L=>L.map(ae=>ae.id===T?{...ae,active:P}:ae))}catch(L){l(((se=(V=L==null?void 0:L.response)==null?void 0:V.data)==null?void 0:se.message)||(L==null?void 0:L.message)||"No se pudo actualizar el usuario")}finally{d(null)}},I=async T=>{var V,se;if(window.confirm("Deseas otorgar rol de administrador a este usuario?"))try{l(null),f(T);const L=await X1(T);L!=null&&L.user&&a(ae=>ae.map(R=>R.id===T?{...R,...L.user,roles:dt(L.user.roles)}:R))}catch(L){l(((se=(V=L==null?void 0:L.response)==null?void 0:V.data)==null?void 0:se.message)||(L==null?void 0:L.message)||"No se pudo actualizar los roles")}finally{f(null)}},z=async T=>{var V,se;if(window.confirm("Deseas quitar el rol de administrador a este usuario?"))try{l(null),f(T);const L=await e2(T);L!=null&&L.user&&a(ae=>ae.map(R=>R.id===T?{...R,...L.user,roles:dt(L.user.roles)}:R))}catch(L){l(((se=(V=L==null?void 0:L.response)==null?void 0:V.data)==null?void 0:se.message)||(L==null?void 0:L.message)||"No se pudo actualizar los roles")}finally{f(null)}},F=async T=>{var V,se;if(window.confirm("Deseas eliminar este usuario? Esta accion es permanente."))try{l(null),b(T),await n2(T),a(L=>L.filter(ae=>ae.id!==T))}catch(L){l(((se=(V=L==null?void 0:L.response)==null?void 0:V.data)==null?void 0:se.message)||(L==null?void 0:L.message)||"No se pudo eliminar el usuario")}finally{b(null)}},_=T=>{m(null),x({userId:T.id,fullName:T.name||"",documentType:"",documentNumber:"",birthDate:"",phone:"",email:T.email||"",address:"",contactInfo:""})},q=async()=>{var T,P;if(v!=null&&v.userId){m(null);try{g(!0);const V={fullName:String(v.fullName||"").trim(),documentType:String(v.documentType||"").trim(),documentNumber:String(v.documentNumber||"").trim(),birthDate:v.birthDate?new Date(v.birthDate).toISOString():void 0,phone:String(v.phone||"").trim(),email:String(v.email||"").trim(),address:String(v.address||"").trim(),contactInfo:String(v.contactInfo||"").trim()};if(!V.fullName){m("El nombre completo es requerido"),g(!1);return}await a2(v.userId,V),x(null)}catch(V){m(((P=(T=V==null?void 0:V.response)==null?void 0:T.data)==null?void 0:P.message)||(V==null?void 0:V.message)||"No se pudo crear el cliente")}finally{g(!1)}}};return n?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",padding:32},children:t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[t.jsxs("div",{className:"dash-header",style:{marginBottom:16},children:[t.jsx("div",{className:"dash-title",children:"Administrar usuarios"}),t.jsx("button",{className:"btn btn-secondary",onClick:C,disabled:i,children:i?"Actualizando...":"Refrescar"})]}),s&&t.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:12,borderRadius:8,marginBottom:16},children:s}),t.jsx("div",{className:"dash-item",style:{overflowX:"auto"},children:t.jsxs("table",{className:"me-table",style:{minWidth:720},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Nombre"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Roles"}),t.jsx("th",{children:"Activo"}),t.jsx("th",{children:"Creado"}),t.jsx("th",{children:"Acciones"})]})}),t.jsxs("tbody",{children:[r.length===0&&t.jsx("tr",{children:t.jsx("td",{colSpan:6,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay usuarios para mostrar"})}),r.map(T=>{const P=T.createdAt?new Date(T.createdAt):null,V=dt(T.roles),se=V.includes("admin"),L=T.active!==!1&&T.isActive!==!1,ae=w===T.id,R=V.length>0?V.join(", "):"-";return t.jsxs("tr",{children:[t.jsx("td",{children:T.name||"-"}),t.jsx("td",{children:T.email}),t.jsx("td",{children:R}),t.jsx("td",{children:t.jsx("span",{className:`me-badge ${L?"me-badge-success":"me-badge-error"}`,children:L?"Activo":"Inactivo"})}),t.jsx("td",{children:P?P.toLocaleString():"-"}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>N(T.id,!L),disabled:c===T.id,children:c===T.id?"Guardando...":L?"Desactivar":"Activar"}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>_(T),children:"Convertir a cliente"}),se?t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>z(T.id),disabled:p===T.id||ae,title:ae?"No puedes modificar tu propio rol":"Quitar rol admin",children:p===T.id?"Quitando...":"Quitar admin"}):t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>I(T.id),disabled:p===T.id,children:p===T.id?"Asignando...":"Hacer admin"}),t.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>F(T.id),disabled:h===T.id||ae,title:ae?"No puedes eliminar tu propio usuario":"Eliminar usuario",children:h===T.id?"Eliminando...":"Eliminar"})]})})]},T.id)})]})]})})]})}),v&&t.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:T=>{T.target===T.currentTarget&&x(null)},children:t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:680,padding:16},children:[t.jsx("div",{className:"dash-header",style:{marginBottom:12},children:t.jsx("div",{className:"dash-title",children:"Convertir usuario en cliente"})}),u&&t.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:10,borderRadius:8,marginBottom:12},children:u}),t.jsxs("div",{className:"dash-item",style:{display:"grid",gap:12},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Nombre completo"}),t.jsx("input",{value:v.fullName,onChange:T=>x(P=>({...P,fullName:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:12},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Tipo de documento"}),t.jsx("input",{placeholder:"CC / CE / NIT / PAS",value:v.documentType,onChange:T=>x(P=>({...P,documentType:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"N�mero de documento"}),t.jsx("input",{value:v.documentNumber,onChange:T=>x(P=>({...P,documentNumber:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]})]}),t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Fecha de nacimiento"}),t.jsx("input",{type:"date",value:v.birthDate,onChange:T=>x(P=>({...P,birthDate:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Tel�fono fijo / celular"}),t.jsx("input",{value:v.phone,onChange:T=>x(P=>({...P,phone:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Correo electr�nico"}),t.jsx("input",{type:"email",value:v.email,onChange:T=>x(P=>({...P,email:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]})]}),t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Direcci�n f�sica"}),t.jsx("input",{value:v.address,onChange:T=>x(P=>({...P,address:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Informaci�n de contacto (opcional)"}),t.jsx("textarea",{rows:3,value:v.contactInfo,onChange:T=>x(P=>({...P,contactInfo:T.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px",resize:"vertical"}})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>x(null),disabled:j,children:"Cancelar"}),t.jsx("button",{className:"btn btn-primary",onClick:q,disabled:j,children:j?"Guardando...":"Crear cliente"})]})]})})]}):t.jsx("div",{className:"dash-page",style:{padding:40},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[t.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),t.jsx("p",{style:{marginTop:12},children:"Esta seccion esta disponible solo para administradores."})]})})}const Fc=["admin","user"];function s2(e,{defaultRole:n="user"}={}){const r=String(n||"user").trim().toLowerCase(),a=Fc.includes(r)?r:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Fc.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function l2(e){return s2(e==null?void 0:e.roles).includes("admin")}function c2(){const{user:e}=Le(),n=l2(e),[r,a]=y.useState([]),[i,o]=y.useState(!1),[s,l]=y.useState(null),[c,d]=y.useState(null),[p,f]=y.useState(!1),[h,b]=y.useState(""),v=async()=>{var u,m;if(n){o(!0),l(null);try{const w=await r2(),C=Array.isArray(w==null?void 0:w.items)?w.items:[];a(C)}catch(w){l(((m=(u=w==null?void 0:w.response)==null?void 0:u.data)==null?void 0:m.message)||(w==null?void 0:w.message)||"No se pudo cargar la lista de clientes")}finally{o(!1)}}};y.useEffect(()=>{v()},[n]);const x=y.useMemo(()=>{const u=String(h||"").trim().toLowerCase();return u?r.filter(m=>[m.name,m.email,m.documentNumber,m.phone,m.id].map(w=>String(w||"").toLowerCase()).some(w=>w.includes(u))):r},[r,h]),j=u=>{d({id:u.id,name:u.name||"",email:u.email||"",documentNumber:u.documentNumber||"",phone:u.phone||""})},g=async()=>{var m,w;if(!c)return;const u={name:String(c.name||"").trim(),documentNumber:String(c.documentNumber||"").trim(),phone:String(c.phone||"").trim()};try{f(!0),l(null);const C=await t2(c.id,u),N=(C==null?void 0:C.user)||null;N&&a(I=>I.map(z=>z.id===N.id?{...z,...N}:z)),d(null)}catch(C){l(((w=(m=C==null?void 0:C.response)==null?void 0:m.data)==null?void 0:w.message)||(C==null?void 0:C.message)||"No se pudo guardar la informacion")}finally{f(!1)}};return n?t.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",padding:32},children:[t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[t.jsxs("div",{className:"dash-header",style:{marginBottom:16},children:[t.jsx("div",{className:"dash-title",children:"Clientes activos"}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("input",{type:"search",placeholder:"Buscar por nombre, email, cedula o celular",value:h,onChange:u=>b(u.target.value),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"6px 10px"}}),t.jsx("button",{className:"btn btn-secondary",onClick:v,disabled:i,children:i?"Actualizando...":"Refrescar"})]})]}),s&&t.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:12,borderRadius:8,marginBottom:16},children:s}),t.jsx("div",{className:"dash-item",style:{overflowX:"auto"},children:t.jsxs("table",{className:"me-table",style:{minWidth:820},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Nombre"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Cedula"}),t.jsx("th",{children:"Celular"}),t.jsx("th",{children:"Acciones"})]})}),t.jsxs("tbody",{children:[x.length===0&&t.jsx("tr",{children:t.jsx("td",{colSpan:5,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay clientes activos para mostrar"})}),x.map(u=>t.jsxs("tr",{children:[t.jsx("td",{children:u.name||"-"}),t.jsx("td",{children:u.email||"-"}),t.jsx("td",{children:u.documentNumber||"-"}),t.jsx("td",{children:u.phone||"-"}),t.jsx("td",{children:t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:t.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>j(u),children:"Editar"})})})]},u.id))]})]})})]}),c&&t.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:u=>{u.target===u.currentTarget&&d(null)},children:t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:560,padding:16},children:[t.jsx("div",{className:"dash-header",style:{marginBottom:12},children:t.jsx("div",{className:"dash-title",children:"Editar cliente"})}),t.jsxs("div",{className:"dash-item",style:{display:"grid",gap:12},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Nombre"}),t.jsx("input",{value:c.name,onChange:u=>d(m=>({...m,name:u.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Email"}),t.jsx("input",{type:"email",value:c.email,readOnly:!0,style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Cedula"}),t.jsx("input",{value:c.documentNumber,onChange:u=>d(m=>({...m,documentNumber:u.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Celular"}),t.jsx("input",{value:c.phone,onChange:u=>d(m=>({...m,phone:u.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>d(null),disabled:p,children:"Cancelar"}),t.jsx("button",{className:"btn btn-primary",onClick:g,disabled:p,children:p?"Guardando...":"Guardar cambios"})]})]})})]}):t.jsx("div",{className:"dash-page",style:{padding:40},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[t.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),t.jsx("p",{style:{marginTop:12},children:"Esta seccion esta disponible solo para administradores."})]})})}const Wp="koop.calendar.events";function Uc(){if(typeof window>"u")return[];try{const e=window.localStorage.getItem(Wp);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.filter(Boolean):[]}catch(e){return console.warn("[calendarStorage] load error",e),[]}}function d2(e){if(!(typeof window>"u"))try{window.localStorage.setItem(Wp,JSON.stringify(e??[]))}catch(n){console.warn("[calendarStorage] save error",n)}}const u2="koop.calendar.events";function qp(){const[e,n]=y.useState(()=>Uc());y.useEffect(()=>{const a=i=>{(i==null?void 0:i.key)===u2&&n(Uc())};return typeof window<"u"&&window.addEventListener("storage",a),()=>{typeof window<"u"&&window.removeEventListener("storage",a)}},[]);const r=y.useCallback(a=>{n(i=>{const o=typeof a=="function"?a(i):a;return d2(o),o})},[]);return[e,r]}function Si(e){if(e==null)return"";try{return String(e).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0000-\u001F\u007F-\u009F]/g,"").replace(/\u00A0/g," ").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/\uFFFD/g,"").replace(/\s+/g," ").trim().toUpperCase()}catch{return String(e).toUpperCase()}}async function p2({limit:e,subfolder:n}={}){const r={};typeof e=="number"&&(r.limit=e),n&&(r.subfolder=n);const{data:a}=await je.get("/docs/recent",{params:r});return a}async function Yp(e,{subfolder:n}={}){if(!e)throw new Error("Archivo requerido");const r=new FormData;r.append("file",e),n&&r.append("subfolder",n);const{data:a}=await je.post("/docs/upload",r,{headers:{"Content-Type":"multipart/form-data"}});return a}async function f2(e,n=600){if(!e)throw new Error("Key requerida");const r={key:e,expires:n},{data:a}=await je.get("/docs/download-url",{params:r});return a}const h2="documentos_iniciales";function Zc(e){return String(e||"").trim()}function Gp({buttonLabel:e="Subir documento",buttonClassName:n="btn btn-primary",defaultFolder:r=h2,allowFolderInput:a=!0,onUploaded:i}){const[o,s]=y.useState(!1),[l,c]=y.useState(null),[d,p]=y.useState(r||""),[f,h]=y.useState(()=>Date.now()),[b,v]=y.useState(null),[x,j]=y.useState(null),[g,u]=y.useState(!1),m=()=>{c(null),p(r||""),h(Date.now()),v(null),j(null),u(!1)},w=()=>{m(),s(!0)},C=()=>{s(!1),m()},N=z=>{var _;const F=((_=z.target.files)==null?void 0:_[0])||null;c(F),v(null),F&&j(null)},I=async z=>{var _,q,T;if(z.preventDefault(),!l){v("Selecciona un archivo");return}const F=Zc(a?d:r);try{u(!0),v(null);const P=await Yp(l,{subfolder:F||void 0});if(j((_=P==null?void 0:P.file)!=null&&_.key?"Archivo subido correctamente":"Archivo subido"),c(null),h(Date.now()),typeof i=="function")try{i(P)}catch{}}catch(P){v(((T=(q=P==null?void 0:P.response)==null?void 0:q.data)==null?void 0:T.message)||(P==null?void 0:P.message)||"No se pudo subir el archivo")}finally{u(!1)}};return t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:n,onClick:w,children:e}),o&&t.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:16},children:t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:480,position:"relative"},children:[t.jsx("button",{type:"button",onClick:C,style:{position:"absolute",top:12,right:12,background:"transparent",border:"none",color:"#334155",fontSize:20,cursor:"pointer"},"aria-label":"Cerrar",children:"X"}),t.jsx("h3",{className:"dash-title",style:{marginBottom:16},children:"Subir documento"}),t.jsxs("form",{onSubmit:I,children:[t.jsxs("div",{style:{marginBottom:12},children:[t.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Archivo"}),t.jsx("input",{type:"file",onChange:N,disabled:g,required:!0,style:{width:"100%"}},f)]}),a?t.jsxs("div",{style:{marginBottom:16},children:[t.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Subcarpeta (opcional)"}),t.jsx("input",{type:"text",placeholder:r||"documentos_iniciales",value:d,onChange:z=>p(z.target.value),disabled:g,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #cbd5f5"}})]}):t.jsxs("div",{style:{marginBottom:16},children:[t.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Carpeta destino"}),t.jsx("input",{type:"text",value:r||"",readOnly:!0,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #cbd5f5",background:"#1f2937",color:"#e2e8f0"}})]}),b&&t.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6,marginBottom:12},children:b}),x&&t.jsx("div",{style:{background:"#14532d",color:"#bbf7d0",padding:8,borderRadius:6,marginBottom:12},children:x}),t.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"flex-end"},children:[t.jsx("button",{type:"button",className:"btn btn-secondary",onClick:C,disabled:g,children:"Cancelar"}),t.jsx("button",{type:"submit",className:"btn btn-primary",disabled:g||!l,children:g?"Subiendo...":"Subir"})]})]})]})})]})}const m2=["Lun","Mar","Mie","Jue","Vie","Sab","Dom"];function g2(e){const n=e.getFullYear(),r=e.getMonth(),i=(new Date(n,r,1).getDay()+6)%7,o=new Date(n,r+1,0).getDate(),s=[];let l=1-i;for(let c=0;c<6;c+=1){const d=[];for(let p=0;p<7;p+=1){const f=new Date(n,r,l),h=l>=1&&l<=o;d.push({date:f,inCurrentMonth:h}),l+=1}s.push(d)}return s}function v2(e){if(!e)return null;const n=e.getFullYear(),r=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${r}-${a}`}function Jp({value:e,onChange:n,onDateSelect:r,events:a=[],className:i=""}){const o=y.useMemo(()=>new Date,[]),[s,l]=y.useState(()=>new Date(o.getFullYear(),o.getMonth(),1)),[c,d]=y.useState(o);y.useEffect(()=>{e instanceof Date&&(d(e),l(new Date(e.getFullYear(),e.getMonth(),1)))},[e]);const p=e instanceof Date?e:c,f=typeof n=="function"?n:r,h=y.useMemo(()=>s.toLocaleDateString("es-ES",{month:"long",year:"numeric"}),[s]),b=y.useMemo(()=>g2(s),[s]),v=y.useMemo(()=>{const u=new Map;return(a||[]).forEach(m=>{const w=(m==null?void 0:m.date)||(m==null?void 0:m.dateKey);w&&(u.has(w)||u.set(w,[]),u.get(w).push(m))}),u},[a]),x=u=>{u instanceof Date&&(e instanceof Date||d(u),typeof f=="function"&&f(u))},j=u=>{l(m=>new Date(m.getFullYear(),m.getMonth()+u,1))},g=["dash-item",i].filter(Boolean).join(" ").trim();return t.jsxs("div",{className:g,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>j(-1),"aria-label":"Mes anterior",children:"◀"}),t.jsx("div",{style:{fontWeight:600,textTransform:"capitalize"},children:h}),t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>j(1),"aria-label":"Mes siguiente",children:"▶"})]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:6,marginBottom:8},children:m2.map(u=>t.jsx("div",{style:{textAlign:"center",fontSize:12,fontWeight:600,opacity:.75},children:u},u))}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:6},children:b.map((u,m)=>u.map(({date:w,inCurrentMonth:C},N)=>{const I=v2(w),z=w.toDateString()===o.toDateString(),F=w.toDateString()===p.toDateString(),_=v.get(I)||[],q={position:"relative",borderRadius:8,border:"1px solid rgba(148, 163, 184, 0.25)",padding:"8px 0",textAlign:"center",fontSize:13,cursor:C?"pointer":"default",opacity:C?1:.35,background:"#1f2937",color:"#e2e8f0",transition:"transform 0.12s ease"};return z&&(q.border="1px solid #38bdf8"),F&&(q.background="linear-gradient(135deg, #38b2ac, #0ea5e9)",q.color="#0f172a",q.fontWeight=700),C&&_.length>0&&!F&&(q.border="1px solid rgba(56, 189, 248, 0.45)"),t.jsxs("button",{type:"button",style:q,disabled:!C,onClick:()=>C&&x(w),children:[w.getDate(),_.length>0&&t.jsx("span",{style:{position:"absolute",bottom:4,left:"50%",transform:"translateX(-50%)",width:6,height:6,borderRadius:"999px",background:F?"#0f172a":"#38bdf8"}})]},`${m}-${N}`)}))})]})}function x2({label:e,value:n,hint:r}){return t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"text-sm opacity-70",style:{fontSize:12,opacity:.8},children:e}),t.jsx("div",{className:"text-2xl font-semibold",style:{fontSize:28,fontWeight:700},children:n}),r&&t.jsx("div",{className:"text-xs opacity-60",style:{fontSize:12,opacity:.7},children:r})]})}function Qp({refreshKey:e=0}){const{user:n}=Le(),r=y.useMemo(()=>{var s,l,c,d;const a=Array.isArray(n==null?void 0:n.driveFolders)?n.driveFolders.filter(p=>p&&p.url):[],i=(l=(s=import.meta)==null?void 0:s.env)==null?void 0:l.VITE_DEFAULT_DRIVE_FOLDER_URL,o=((d=(c=import.meta)==null?void 0:c.env)==null?void 0:d.VITE_DEFAULT_DRIVE_FOLDER_NAME)||"Carpeta KOOP";return(!a||a.length===0)&&i?[{name:o,url:i}]:a},[n,e]);return t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Documentos recientes"}),r.length===0&&t.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin carpetas asignadas."}),r.length>0&&t.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:8},children:r.map((a,i)=>t.jsxs("li",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.name||"Carpeta de Drive"}),t.jsx("div",{className:"muted",style:{fontSize:12,opacity:.8},children:a.url})]}),t.jsx("a",{className:"btn btn-primary",href:a.url,target:"_blank",rel:"noreferrer","data-drive-folder-url":a.url,children:"Abrir carpeta"})]},(a.url||"")+i))})]})}function b2(e){if(!(e instanceof Date))return null;const n=e.getFullYear(),r=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${r}-${a}`}function y2(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`evt-${Date.now()}-${Math.random().toString(16).slice(2)}`}function w2(){const{user:e}=Le(),n=Si((e==null?void 0:e.name)||"Dashboard"),[r,a]=y.useState(null),[i,o]=y.useState(!0),[s,l]=y.useState(null),[c,d]=y.useState(0),[p,f]=qp(),[h,b]=y.useState(()=>new Date),v=y.useMemo(()=>b2(h),[h]),[x,j]=y.useState(""),[g,u]=y.useState(!0),[m,w]=y.useState(""),[C,N]=y.useState([]),[I,z]=y.useState([]),[F,_]=y.useState(!1),[q,T]=y.useState(null);y.useEffect(()=>{(async()=>{var E;try{const{data:D}=await je.get("/kpis/overview");a(D)}catch(D){l(((E=D==null?void 0:D.response)==null?void 0:E.data)||(D==null?void 0:D.message))}finally{o(!1)}})()},[]),y.useEffect(()=>{let E=!1;return(async()=>{var D,K;try{_(!0),T(null);const ue=await $p();if(E)return;const hn=Array.isArray(ue==null?void 0:ue.items)?ue.items:[];z(hn.map(W=>({id:String((W==null?void 0:W.id)||(W==null?void 0:W._id)||(W==null?void 0:W.documentNumber)||"").trim(),name:(W==null?void 0:W.name)||(W==null?void 0:W.fullName)||(W==null?void 0:W.email)||"Cliente sin nombre",email:W==null?void 0:W.email})).filter(W=>W.id))}catch(ue){E||T(((K=(D=ue==null?void 0:ue.response)==null?void 0:D.data)==null?void 0:K.message)||(ue==null?void 0:ue.message)||"No se pudo cargar clientes")}finally{E||_(!1)}})(),()=>{E=!0}},[]);const P=y.useMemo(()=>{if(!m)return I;const E=m.trim().toLowerCase();return I.filter(D=>[D.id,D.name,D.email].some(K=>String(K||"").toLowerCase().includes(E)))},[I,m]),V=y.useMemo(()=>p.filter(D=>(D==null?void 0:D.date)===v).sort((D,K)=>(D.createdAt||"").localeCompare(K.createdAt||"")),[p,v]),se=E=>{const D=String(E);N(K=>K.includes(D)?K.filter(ue=>ue!==D):[...K,D])},L=()=>{const E=x.trim();if(!v||!E||!g&&C.length===0)return;const D={id:y2(),date:v,note:E,audience:g?{type:"all"}:{type:"clients",clientIds:C.map(K=>String(K).trim())},createdAt:new Date().toISOString(),createdBy:(e==null?void 0:e.id)||(e==null?void 0:e.sub)||"admin"};f(K=>[...K,D]),j(""),N([]),u(!0)},ae={padding:"10px 14px",fontSize:"14px",minHeight:"52px",borderRadius:"10px",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},R=[{key:"clientes",label:"Clientes",to:"/admin/clientes-activos"},{key:"procesos",label:"Procesos",to:"/mis-casos"},{key:"publicaciones",label:"Publicaciones Procesales",href:"https://koop.com/publicaciones-procesales"}],M=y.useMemo(()=>h==null?void 0:h.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),[h]);return t.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:1200},children:[t.jsx("style",{children:`
          .admin-main-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
          @media (min-width: 1024px) { .admin-main-grid { grid-template-columns: repeat(3, 1fr); } }
          .admin-main-left { grid-column: span 1; display: flex; flex-direction: column; gap: 16px; }
          @media (min-width: 1024px) { .admin-main-left { grid-column: span 2; } }
          .admin-main-right { display: flex; flex-direction: column; gap: 16px; }
          .admin-clients-list { max-height: 200px; overflow-y: auto; border: 1px solid rgba(148,163,184,0.35); border-radius: 8px; padding: 8px; }
          .admin-clients-item { display: flex; align-items: center; justify-content: space-between; padding: 6px 4px; border-bottom: 1px solid rgba(148,163,184,0.15); }
          .admin-clients-item:last-child { border-bottom: none; }
        `}),t.jsxs("div",{className:"dash-header",children:[t.jsx("div",{className:"dash-title",children:n}),t.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"flex-end"},children:t.jsx(Gp,{buttonClassName:"btn btn-primary",allowFolderInput:!0,onUploaded:()=>d(E=>E+1)})})]}),t.jsxs("div",{className:"dash-item",style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx("button",{className:"btn btn-primary",onClick:()=>{const E=document.querySelector("[data-drive-folder-url]"),D=E==null?void 0:E.getAttribute("data-drive-folder-url");D&&window.open(D,"_blank","noopener")},title:"Lineas de tiempo procesales",children:"Lineas de tiempo procesales"}),t.jsx(A,{className:"btn btn-primary btn-sm",to:"/mi-expediente",title:"Ir a Mi expediente",children:"Mi expediente"}),t.jsx(A,{className:"btn btn-secondary btn-sm",to:"/admin/usuarios",title:"Administrar usuarios",children:"Administrar usuarios"})]}),t.jsx("div",{className:"kpi-grid",style:{marginTop:16},children:t.jsx(x2,{label:"Casos activos",value:(r==null?void 0:r.activeCases)??(i?"...":0)})}),t.jsxs("div",{className:"admin-main-grid",style:{marginTop:16},children:[t.jsxs("div",{className:"admin-main-left",children:[t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Centro administrativo"}),t.jsx("p",{style:{marginBottom:12},children:"Supervisa la operacion del portal, gestiona usuarios y da seguimiento a la informacion mas reciente."}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx(A,{className:"btn btn-primary btn-sm",to:"/admin/usuarios",title:"Administrar usuarios",children:"Administrar usuarios"}),t.jsx(A,{className:"btn btn-secondary btn-sm",to:"/mi-expediente",title:"Revisar expedientes",children:"Revisar expedientes"})]})]}),t.jsx(Jp,{value:h,onChange:b,events:p}),t.jsx("div",{style:{display:"grid",gap:10},children:R.map(E=>t.jsx("div",{className:"dash-item",style:{padding:0,display:"flex",alignItems:"stretch"},children:E.to?t.jsx(A,{className:"btn btn-primary",to:E.to,style:ae,children:E.label}):t.jsx("button",{type:"button",className:"btn btn-primary",style:ae,onClick:()=>{typeof window<"u"&&E.href&&window.open(E.href,"_blank","noopener")},children:E.label})},E.key))})]}),t.jsxs("div",{className:"admin-main-right",children:[t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold",style:{fontWeight:600},children:M||"Selecciona un dia"}),t.jsx("p",{style:{marginTop:4,fontSize:13,opacity:.8},children:"Registra recordatorios o publicaciones para clientes especificos o para todos."}),t.jsx("textarea",{value:x,onChange:E=>j(E.target.value),placeholder:"Agregar nota o detalle del evento",rows:4,style:{width:"100%",marginTop:12,background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:"10px 12px",resize:"vertical"}}),t.jsx("div",{style:{marginTop:12},children:t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("input",{type:"checkbox",checked:g,onChange:E=>{u(E.target.checked),E.target.checked&&N([])}}),t.jsx("span",{children:"Publicar para todos los clientes"})]})}),!g&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("input",{type:"search",placeholder:"Buscar por nombre, email o ID",value:m,onChange:E=>w(E.target.value),style:{width:"100%",padding:"8px 12px",borderRadius:10,border:"1px solid rgba(148,163,184,0.35)",background:"#1b263b",color:"#e2e8f0"}}),q&&t.jsx("div",{style:{color:"#fecaca",background:"#7f1d1d",padding:8,borderRadius:8,marginTop:8},children:q}),t.jsxs("div",{className:"admin-clients-list",style:{marginTop:8},children:[F&&t.jsx("div",{style:{opacity:.7},children:"Cargando clientes..."}),!F&&P.length===0&&t.jsx("div",{style:{opacity:.7},children:"No se encontraron clientes"}),P.map(E=>{const D=C.includes(E.id);return t.jsxs("label",{className:"admin-clients-item",children:[t.jsxs("span",{style:{display:"flex",flexDirection:"column"},children:[t.jsx("span",{style:{fontWeight:600},children:E.name}),t.jsx("span",{style:{fontSize:12,opacity:.75},children:E.id})]}),t.jsx("input",{type:"checkbox",checked:D,onChange:()=>se(E.id)})]},E.id)})]}),C.length>0&&t.jsxs("div",{style:{marginTop:8,fontSize:12,opacity:.7},children:["Seleccionados: ",C.join(", ")]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:12},children:[t.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{j(""),u(!0),N([])},children:"Limpiar"}),t.jsx("button",{type:"button",className:"btn btn-primary",onClick:L,disabled:!x.trim()||!g&&C.length===0,children:"Guardar anotacion"})]}),V.length>0&&t.jsxs("div",{style:{marginTop:16},children:[t.jsx("div",{style:{fontWeight:600,marginBottom:8},children:"Anotaciones del dia"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:V.map(E=>{var D,K;return t.jsxs("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:[t.jsx("div",{style:{marginBottom:6},children:E.note}),t.jsx("div",{style:{fontSize:12,opacity:.7},children:((D=E.audience)==null?void 0:D.type)==="all"?"Visible para todos los clientes":`Visible para: ${Array.isArray((K=E.audience)==null?void 0:K.clientIds)&&E.audience.clientIds.length>0?E.audience.clientIds.join(", "):"—"}`})]},E.id)})})]})]}),t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Recordatorios del equipo"}),t.jsx("p",{style:{marginBottom:0},children:"Comparte novedades internas, carga reportes de gestion o establece tareas prioritarias para tu equipo desde esta seccion."})]}),t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Reproductor Spotify"}),t.jsx("iframe",{title:"Spotify administracion",src:"https://open.spotify.com/embed/playlist/1Zf1rz0XX6fyNxKOq4XvgN?utm_source=generator",width:"100%",height:"152",frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",style:{borderRadius:8}})]})]})]}),t.jsx("div",{style:{marginTop:16},children:t.jsx(Qp,{refreshKey:c})}),s&&t.jsx("pre",{className:"text-red-600 text-sm mt-2",style:{color:"#fecaca",background:"#7f1d1d",padding:12,borderRadius:8,marginTop:12},children:typeof s=="string"?s:JSON.stringify(s,null,2)})]})})}function j2({src:e,heightDesktop:n=560,heightMobile:r=480,className:a}){const[i,o]=y.useState(!1),[s,l]=y.useState(!1),c=y.useRef(null);y.useEffect(()=>{try{const x=window.matchMedia("(max-width: 768px)"),j=g=>{o(g.matches),g.matches&&l(!1)};return o(x.matches),x.matches&&l(!1),x.addEventListener?x.addEventListener("change",j):x.addListener&&x.addListener(j),()=>{x.removeEventListener?x.removeEventListener("change",j):x.removeListener&&x.removeListener(j)}}catch{o(!1)}},[]),y.useEffect(()=>{if(!s){c.current!==null&&(document.body.style.overflow=c.current,c.current=null);return}return c.current===null&&(c.current=document.body.style.overflow||""),document.body.style.overflow="hidden",()=>{c.current!==null?(document.body.style.overflow=c.current,c.current=null):document.body.style.overflow=""}},[s]);const d=y.useMemo(()=>{try{return new URL(e,window.location.origin).toString()}catch{return e}},[e]),p=()=>l(x=>!x),f=["Te compartimos que ya tienes acceso a nuestro Portal de Clientes Koop.","","Desde alli podras:","- Consultar el estado de tus procesos en tiempo real.","- Descargar documentos relevantes de manera segura.","- Recibir notificaciones de audiencias y plazos importantes.","- Comunicarte directamente con nuestro equipo para resolver cualquier inquietud.","","Estamos seguros de que esta alianza marcara un camino de crecimiento y tranquilidad."].join(`
`);if(i)return t.jsxs("div",{className:a,style:{width:"100%",height:r,display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{padding:16},children:[t.jsx("div",{style:{fontWeight:700,marginBottom:8},children:"Gracias por elegirnos. Nos alegra iniciar este camino contigo."}),t.jsx("div",{className:"muted",style:{marginBottom:12,whiteSpace:"pre-line"},children:f})]}),t.jsx("div",{style:{marginTop:"auto",padding:16,display:"flex",justifyContent:"flex-end"},children:t.jsx("a",{className:"btn btn-primary",href:d,target:"_blank",rel:"noopener noreferrer",children:"Cordial saludo"})})]});const h=s?{position:"fixed",inset:0,zIndex:1e3,backgroundColor:"rgba(6, 11, 25, 0.92)",padding:"48px 64px",display:"flex",flexDirection:"column",gap:16}:{width:"100%",height:n,position:"relative"},b=s?{flex:1,position:"relative",borderRadius:16,overflow:"hidden",boxShadow:"0 24px 48px rgba(0,0,0,0.45)"}:{width:"100%",height:"100%",position:"relative",borderRadius:12,overflow:"hidden"},v={position:"absolute",top:s?24:12,right:s?24:12,zIndex:1001};return t.jsxs("div",{className:a,style:h,children:[t.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:p,style:v,children:s?"Minimizar":"Maximizar"}),t.jsx("div",{style:b,children:t.jsxs("object",{data:e,type:"application/pdf",width:"100%",height:"100%",style:{width:"100%",height:"100%"},children:[t.jsx("iframe",{title:"PDF",src:d,style:{width:"100%",height:"100%",border:0}}),t.jsxs("div",{style:{padding:16},children:["No se pudo mostrar el PDF. ",t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:"Abrir en nueva pestana"})]})]})})]})}function k2(){return t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Mensajes no leídos"}),t.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin datos."})]})}function C2(e){if(!(e instanceof Date))return null;const n=e.getFullYear(),r=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${r}-${a}`}function N2(){const{user:e}=Le(),n=Si((e==null?void 0:e.name)||"Bienvenido"),[r,a]=y.useState(0),[i]=qp(),[o,s]=y.useState(()=>new Date),l=y.useMemo(()=>{const b=[e==null?void 0:e.id,e==null?void 0:e.sub,e==null?void 0:e._id,e==null?void 0:e.documentNumber,e==null?void 0:e.document_number,e==null?void 0:e.documento,e==null?void 0:e.clienteId].map(v=>v==null?"":String(v).trim()).filter(v=>!!v);return Array.from(new Set(b))},[e]),c=y.useMemo(()=>C2(o),[o]),d=y.useMemo(()=>l.length?i.filter(h=>{var b,v,x;return((b=h==null?void 0:h.audience)==null?void 0:b.type)==="all"?!0:((v=h==null?void 0:h.audience)==null?void 0:v.type)==="clients"?(Array.isArray((x=h.audience)==null?void 0:x.clientIds)?h.audience.clientIds.map(g=>g==null?"":String(g).trim()).filter(g=>!!g):[]).some(g=>l.includes(g)):!1}):i.filter(h=>{var b;return((b=h==null?void 0:h.audience)==null?void 0:b.type)==="all"}),[i,l]),p=y.useMemo(()=>d.filter(h=>(h==null?void 0:h.date)===c),[d,c]),f=y.useMemo(()=>o==null?void 0:o.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),[o]);return t.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:1080},children:[t.jsx("style",{children:`
          .user-main-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
          @media (min-width: 1024px) { .user-main-grid { grid-template-columns: 2fr 1fr; } }
          .user-main-left { display: flex; flex-direction: column; gap: 16px; }
          .user-main-right { display: flex; flex-direction: column; gap: 16px; }
        `}),t.jsxs("div",{className:"dash-header",children:[t.jsx("div",{className:"dash-title",children:n}),t.jsx(Gp,{buttonClassName:"btn btn-primary",allowFolderInput:!1,onUploaded:()=>a(h=>h+1)})]}),t.jsxs("div",{className:"user-main-grid",children:[t.jsxs("div",{className:"user-main-left",children:[t.jsxs("div",{className:"dash-item",children:[t.jsx("p",{style:{marginBottom:8},children:"Aqui puedes revisar tu material mas reciente y mantenerte al dia con tu caso. Si necesitas asistencia adicional, nuestro equipo esta disponible para ayudarte."}),t.jsx(A,{className:"btn btn-primary btn-sm",to:"/mis-casos",children:"Ver mis casos"})]}),t.jsx("div",{className:"dash-item",style:{padding:0},children:t.jsx(j2,{src:"/Saludobienvenidaportal.pdf",heightDesktop:480,heightMobile:420})}),t.jsx(k2,{}),t.jsx(Qp,{refreshKey:r})]}),t.jsxs("div",{className:"user-main-right",children:[t.jsx(Jp,{value:o,onChange:s,events:d}),t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{style:{fontWeight:600,marginBottom:8},children:f}),p.length===0&&t.jsx("p",{style:{margin:0,opacity:.7,fontSize:14},children:"No hay anotaciones programadas para este dia."}),p.length>0&&t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:p.map(h=>t.jsx("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:t.jsx("div",{children:h.note})},h.id))})]})]})]})]})})}function Kc(){return t.jsx("div",{className:"dash-page",style:{background:"linear-gradient(rgba(24,31,56,0.9), rgba(15,23,42,0.95))",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",padding:24},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:520},children:[t.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),t.jsx("p",{style:{marginTop:12},children:"Tu cuenta no tiene un rol asignado para ingresar al portal. Comunicate con el administrador para solicitar acceso."})]})})}function Hc(e,n){if(!(e!=null&&e.roles))return!1;const r=Array.isArray(e.roles)?e.roles:[e.roles],a=String(n||"").toLowerCase();return r.some(i=>String(i||"").toLowerCase()===a)}function S2(){const{user:e,loading:n}=Le(),r=y.useMemo(()=>e?Hc(e,"admin")?"admin":Hc(e,"user")?"user":"no-access":"none",[e]);return n&&!e?null:r==="admin"?t.jsx(w2,{}):r==="user"?t.jsx(N2,{}):r==="no-access"?t.jsx(Kc,{}):t.jsx(Kc,{})}function $c(){const[e,n]=y.useState("docs"),{user:r}=Le(),a=Si((r==null?void 0:r.name)||""),i="documentos_iniciales",[o,s]=y.useState([]),[l,c]=y.useState(!1),[d,p]=y.useState(null),[f,h]=y.useState(null),b=y.useRef(null),v=async()=>{c(!0),p(null),h(null);try{const u=await p2({limit:20,subfolder:i});s(Array.isArray(u==null?void 0:u.items)?u.items:[]),u!=null&&u.warning&&h(u.warning)}catch(u){p((u==null?void 0:u.message)||"Error cargando documentos")}finally{c(!1)}};y.useEffect(()=>{e==="docs"&&v()},[e]);const x=()=>{var u;return(u=b.current)==null?void 0:u.click()},j=async u=>{var w,C;const m=(C=(w=u.target)==null?void 0:w.files)==null?void 0:C[0];if(m)try{c(!0),p(null);const N=await Yp(m,{subfolder:i});N!=null&&N.file&&s(I=>[N.file,...I]),await v()}catch(N){p((N==null?void 0:N.message)||"Error subiendo documento")}finally{c(!1);try{u.target.value=null}catch{}}},g=async(u,m)=>{try{const{url:w}=await f2(u,600);window.open(w||m,"_blank")}catch{m&&window.open(m,"_blank")}};return t.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1320},children:[t.jsx("div",{className:"dash-header",children:t.jsx("div",{className:"dash-title",children:"Mi expediente"})}),t.jsxs("div",{className:"dash-item me-subbar",children:[t.jsxs("div",{className:"me-hello",children:["Bienvenido: ",a]}),t.jsxs("select",{className:"me-select","aria-label":"Tipo de búsqueda",children:[t.jsx("option",{children:"Procesos judiciales"}),t.jsx("option",{children:"Demandas"}),t.jsx("option",{children:"Audiencias"})]}),t.jsx("input",{className:"me-input",placeholder:"Buscar..."}),t.jsxs("div",{className:"me-actions",children:[t.jsx("input",{ref:b,type:"file",style:{display:"none"},onChange:j}),t.jsx("button",{className:"btn btn-primary",onClick:x,disabled:l,children:l?"Subiendo...":"Radicar documento"}),t.jsx("button",{className:"btn btn-secondary",children:"Ver información"})]})]}),t.jsxs("div",{className:"me-layout",children:[t.jsxs("aside",{className:"me-left dash-item",children:[t.jsx("div",{className:"me-head",children:"ESPECIALIDAD: LABORAL"}),t.jsxs("div",{className:"me-tree",children:[t.jsxs("details",{open:!0,children:[t.jsxs("summary",{children:[t.jsx("span",{className:"me-chev",children:"›"}),t.jsx("span",{children:"JUZGADO 009 MUNICIPAL DE PEQUEÑAS CAUSAS"})]}),t.jsxs("div",{className:"me-leaf",children:[t.jsx("div",{children:"110014105009-20250011400"}),t.jsx("div",{className:"me-tag",children:"Cuadernos"})]})]}),t.jsxs("details",{open:!0,children:[t.jsxs("summary",{children:[t.jsx("span",{className:"me-chev",children:"›"}),t.jsx("span",{children:"JUZGADO 003 LABORAL DEL CIRCUITO"})]}),t.jsxs("div",{className:"me-leaf",children:[t.jsx("div",{children:"110014105009-2025011401"}),t.jsx("div",{className:"me-tag",children:"Cuadernos"})]})]}),t.jsxs("details",{children:[t.jsxs("summary",{children:[t.jsx("span",{className:"me-chev",children:"›"}),t.jsx("span",{children:"JUZGADO 015 MUNICIPAL DE PEQUEÑAS CAUSAS"})]}),t.jsxs("div",{className:"me-leaf",children:[t.jsx("div",{children:"110014105015-20240208700"}),t.jsx("div",{className:"me-tag",children:"Cuadernos"})]})]}),t.jsxs("details",{children:[t.jsxs("summary",{children:[t.jsx("span",{className:"me-chev",children:"›"}),t.jsx("span",{children:"JUZGADO 048 LABORAL DEL CIRCUITO"})]}),t.jsxs("div",{className:"me-leaf",children:[t.jsx("div",{children:"110013105048-2024090000"}),t.jsx("div",{className:"me-tag",children:"Cuadernos"})]})]})]})]}),t.jsxs("main",{className:"me-center dash-item",children:[t.jsxs("div",{className:"me-tabs",children:[t.jsx("div",{className:`me-tab ${e==="docs"?"active":""}`,onClick:()=>n("docs"),role:"button",tabIndex:0,children:"Documentos del Proceso"}),t.jsx("div",{className:`me-tab ${e==="aud"?"active":""}`,onClick:()=>n("aud"),role:"button",tabIndex:0,children:"Audiencias"})]}),e==="docs"&&t.jsxs("div",{className:"me-table-wrap",children:[d&&t.jsx("div",{style:{color:"#ef4444",padding:"8px 12px"},children:String(d)}),f&&t.jsxs("div",{style:{color:"#f59e0b",padding:"8px 12px"},children:["Aviso: ",String(f)==="S3_LIST_FORBIDDEN"?"No hay permisos para listar el bucket. Tus documentos siguen disponibles si conservas el enlace.":String(f)]}),t.jsxs("table",{className:"me-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{width:42},children:t.jsx("input",{type:"checkbox"})}),t.jsx("th",{children:"Fecha de registro"}),t.jsx("th",{children:"Documento"}),t.jsx("th",{children:"Tipo"}),t.jsx("th",{children:"Tamaño"}),t.jsx("th",{children:"Acciones"})]})}),t.jsxs("tbody",{children:[o.length===0&&t.jsx("tr",{children:t.jsx("td",{colSpan:6,style:{color:"#9fb3cc"},children:l?"Cargando...":"No hay documentos para mostrar"})}),o.map(u=>{const m=u.lastModified?new Date(u.lastModified):u.createdTime?new Date(u.createdTime):null,w=u.name||(u.key||"").split("/").pop(),C=typeof u.size=="number"?Math.max(1,Math.round(u.size/1024)):null,N=u.mimeType||(w&&w.toLowerCase().endsWith(".pdf")?"application/pdf":void 0);return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("input",{type:"checkbox"})}),t.jsx("td",{children:m?m.toLocaleString():"-"}),t.jsx("td",{title:w,children:w}),t.jsx("td",{children:N?N.split("/")[1]||N:"-"}),t.jsx("td",{children:C?`${C} KB`:"-"}),t.jsx("td",{children:t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(u.key,u.downloadURL||u.downloadUrl||u.webContentLink||u.webViewLink),children:"Descargar"})})]},u.key||u.id)})]})]})]}),e==="aud"&&t.jsx("div",{className:"me-table-wrap",children:t.jsxs("table",{className:"me-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Fecha"}),t.jsx("th",{children:"Actuación"}),t.jsx("th",{children:"Juzgado"}),t.jsx("th",{children:"Estado"})]})}),t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:"2025-09-03 08:00"}),t.jsx("td",{children:"Audiencia inicial"}),t.jsx("td",{children:"JDO 003 Laboral"}),t.jsx("td",{children:t.jsx("span",{className:"me-badge me-badge-success",children:"Agendada"})})]})})]})})]}),t.jsxs("aside",{className:"me-right dash-item",children:[t.jsx("div",{className:"me-head",children:"Datos del Proceso Judicial"}),t.jsxs("div",{className:"me-right-content",children:[t.jsxs("div",{className:"me-proc-grid",children:[t.jsx("div",{className:"me-tag",children:"Radicado"}),t.jsx("div",{children:"110014105009-20250011400"}),t.jsx("div",{className:"me-tag",children:"Clase"}),t.jsx("div",{children:"Laboral – Ordinario"}),t.jsx("div",{className:"me-tag",children:"Demandante"}),t.jsx("div",{children:"Juan Pérez"}),t.jsx("div",{className:"me-tag",children:"Demandado"}),t.jsx("div",{children:"Acme S.A.S."}),t.jsx("div",{className:"me-tag",children:"Juzgado"}),t.jsx("div",{children:"JDO 009 MPC"}),t.jsx("div",{className:"me-tag",children:"Estado"}),t.jsx("div",{children:"En trámite"})]}),t.jsx("hr",{className:"me-hr"}),t.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:"Descargar expediente"})]})]})]})]})})}const E2=[{id:"CJ-001",titulo:"Acción de tutela — derecho a la salud",estado:"En curso",juzgado:"Juzgado 12 Municipal",fecha:"2025-07-10"},{id:"CJ-002",titulo:"Proceso laboral — despido sin justa causa",estado:"Audiencia programada",juzgado:"Juzgado 3 Laboral del Circuito",fecha:"2025-08-02"},{id:"CJ-003",titulo:"Responsabilidad fiscal — recursos",estado:"Recurso interpuesto",juzgado:"Contraloría Distrital",fecha:"2025-08-21"},{id:"CJ-004",titulo:"Proceso de alimentos — fijación de cuota",estado:"Admitido",juzgado:"Juzgado 5 de Familia",fecha:"2025-09-01"}];function A2(){const[e,n]=y.useState(null);y.useEffect(()=>{if(!e)return;const i=o=>{o.key==="Escape"&&n(null)};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[e]);const r=y.useMemo(()=>["Reunión de documentos e investigación","En escrito de demanda","En radicación","Al despacho: en espera de decisión del juez"],[]),a=i=>{if(!i)return 1;const o=String(i).toLowerCase();return/(reun|investig)/.test(o)?1:/(escrito|demanda)/.test(o)?2:/(radicaci[óo]n|admitid)/.test(o)?3:/(despacho|juez|decisi[óo]n|audiencia|recurso)/.test(o)?4:(/curso/.test(o),2)};return t.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[t.jsxs("div",{className:"dash-card",style:{maxWidth:900},children:[t.jsx("div",{className:"dash-header",children:t.jsx("div",{className:"dash-title",children:"Mis casos"})}),t.jsx("div",{className:"dash-item",style:{padding:0},children:t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cases-table",style:{width:"100%",borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{background:"#1e2a3a"},children:[t.jsx("th",{style:at,children:"Radicado"}),t.jsx("th",{style:at,children:"Título"}),t.jsx("th",{style:at,children:"Estado"}),t.jsx("th",{style:at,children:"Despacho"}),t.jsx("th",{style:at,children:"Última actuación"})]})}),t.jsx("tbody",{children:E2.map(i=>t.jsxs("tr",{onClick:()=>n(i),className:"row-clickable",children:[t.jsx("td",{style:it,children:i.id}),t.jsx("td",{style:it,children:i.titulo}),t.jsx("td",{style:it,children:t.jsx("span",{className:"badge",style:Wc(i.estado),children:i.estado})}),t.jsx("td",{style:it,children:i.juzgado}),t.jsx("td",{style:it,children:new Date(i.fecha).toLocaleDateString()})]},i.id))})]})})})]}),e&&t.jsx("div",{className:"modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"caso-title",onClick:i=>{i.target===i.currentTarget&&n(null)},children:t.jsxs("div",{className:"modal-card",children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("div",{className:"modal-title",id:"caso-title",children:e.titulo}),t.jsx("button",{className:"btn btn-primary",onClick:()=>n(null),children:"Cerrar"})]}),t.jsxs("div",{className:"modal-body",children:[t.jsxs("div",{className:"case-grid",children:[t.jsxs("div",{children:[t.jsx("div",{className:"muted",children:"Radicado"}),t.jsx("div",{children:e.id})]}),t.jsxs("div",{children:[t.jsx("div",{className:"muted",children:"Estado"}),t.jsx("div",{children:t.jsx("span",{className:"badge",style:Wc(e.estado),children:e.estado})})]}),t.jsxs("div",{children:[t.jsx("div",{className:"muted",children:"Despacho"}),t.jsx("div",{children:e.juzgado})]}),t.jsxs("div",{children:[t.jsx("div",{className:"muted",children:"Última actuación"}),t.jsx("div",{children:new Date(e.fecha).toLocaleString()})]})]}),t.jsx("div",{className:"timeline",children:r.map((i,o)=>{const s=o+1,l=a(e.estado),c=s<l,d=s===l;return t.jsxs("div",{className:`timeline-step ${c?"done":""} ${d?"active":""}`,children:[t.jsx("div",{className:`dot ${c?"done":""} ${d?"active":""}`}),s<r.length&&t.jsx("div",{className:`bar ${s<l?"done":""}`}),t.jsxs("div",{className:"label",children:[s,". ",i]})]},s)})})]})]})})]})}const at={textAlign:"left",padding:"12px 14px",borderBottom:"1px solid #394b61",fontWeight:600,color:"#e2e8f0",whiteSpace:"nowrap"},it={padding:"12px 14px",borderBottom:"1px solid #34465a",color:"#e5edf7",verticalAlign:"top"};function Wc(e){let n="#3b82f6";return/curso/i.test(e)&&(n="#f59e0b"),/programada|programado/i.test(e)&&(n="#10b981"),/recurso/i.test(e)&&(n="#8b5cf6"),{display:"inline-block",padding:"4px 8px",borderRadius:8,background:n,color:"#fff",fontSize:12,fontWeight:600}}function I2(){var a,i;const{logout:e}=Le(),n=fn();y.useEffect(()=>{(async()=>{try{await e()}catch{}try{sessionStorage.removeItem("koop_hasVisited")}catch{}try{document.documentElement.classList.remove("skip-splash")}catch{}})()},[e]);const r=(i=(a=n.state)==null?void 0:a.from)==null?void 0:i.pathname;return t.jsx(he,{to:"/",replace:!0,state:{from:r}})}function Gn({children:e}){const{isAuthenticated:n}=Le(),r=fn();return n?e:t.jsx(he,{to:"/login",replace:!0,state:{from:r}})}function T2(){const{isAuthenticated:e,user:n,logout:r}=Le(),[a,i]=y.useState(!1),[o,s]=y.useState(!1),[l,c]=y.useState(!1);$r();const d=()=>{s(f=>{const h=!f;return h||c(!1),h})},p=f=>{const h=f.target.closest("a");h&&!h.classList.contains("drop-btn")&&(s(!1),c(!1))};return t.jsx("nav",{className:"navbar",children:t.jsxs("div",{className:"navbar-content",children:[t.jsxs(A,{to:"/",className:"logo",children:[t.jsx("img",{src:"/Koop Logo.png",alt:"Logo Koop",className:"logo-img"}),t.jsx("div",{className:"logo-text",children:"KOOP STRATEGIC ADVISORY"})]}),t.jsxs("div",{className:"menu-toggle",id:"menu-toggle",onClick:d,"aria-controls":"nav-menu","aria-expanded":o?"true":"false",role:"button",children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]}),t.jsxs("div",{className:`nav-menu ${o?"open":""}`,id:"nav-menu",onClick:p,children:[t.jsxs(t.Fragment,{children:[t.jsx(A,{to:"/#inicio",children:"INICIO"}),t.jsxs("div",{className:`dropdown ${l?"open":""}`,children:[t.jsx(A,{to:"/#areas",className:"drop-btn",id:"areas-toggle","aria-expanded":l?"true":"false",onClick:f=>{f.preventDefault(),c(h=>!h)},children:"ÁREAS DE PRÁCTICA"}),t.jsxs("div",{className:"dropdown-content",children:[t.jsxs("div",{className:"dropdown-group",children:[t.jsx(A,{to:"/derecho",className:"dropdown-title",children:"Derecho"}),t.jsx(A,{to:"/derecho-laboral",children:"Derecho Laboral"}),t.jsx(A,{to:"/derecho-penal",children:"Derecho Penal"}),t.jsx(A,{to:"/tramites-notariales",children:"Trámites notariales"}),t.jsx(A,{to:"/derecho-administrativo",children:"Derecho Administrativo"}),t.jsx(A,{to:"/derecho-familia",children:"Derecho de Familia"}),t.jsx(A,{to:"/contratacion-publica",children:"Contratación Pública"}),t.jsx(A,{to:"/resolucion-disputas",children:"Resolución de Disputas"}),t.jsx(A,{to:"/acciones-de-tutela",children:"Acciones de Tutela"}),t.jsx(A,{to:"/insolvencia",children:"Insolvencia"})]}),t.jsxs("div",{className:"dropdown-group",children:[t.jsx(A,{to:"/contabilidad",className:"dropdown-title",children:"Contabilidad"}),t.jsx(A,{to:"/auditoria",children:"Auditoría"}),t.jsx(A,{to:"/impuestos",children:"Impuestos"}),t.jsx(A,{to:"/asesoria-contable",children:"Asesoría Contable"})]})]})]}),!e&&t.jsx(A,{to:"/#vision",children:"NUESTRA VISIÓN"})]}),e?t.jsxs("div",{className:`dropdown ${a?"open":""}`,children:[t.jsx("button",{className:"drop-btn","aria-haspopup":"true","aria-expanded":a?"true":"false",onClick:()=>i(f=>!f),children:Si((n==null?void 0:n.name)||"Mi cuenta")}),t.jsx("div",{className:"dropdown-content",children:t.jsxs("div",{className:"dropdown-group",children:[t.jsx(A,{to:"/dashboard",children:"Perfil"}),t.jsx(A,{to:"/mi-expediente",children:"Mi expediente"}),t.jsx(A,{to:"/mis-casos",children:"Mis casos"}),t.jsx(A,{to:"/logout",children:"Cerrar sesión"})]})})]}):t.jsx(A,{to:"/login",className:"koop-cta","aria-label":"CLIENTE KOOP",children:"CLIENTE KOOP".split("").map((f,h)=>t.jsx("span",{className:"letter",style:{"--i":h},children:f===" "?" ":f},h))})]})]})})}function R2(){const[e,n]=y.useState(null),r=()=>{const a=fn(),{isAuthenticated:i}=Le(),o=a.pathname.toLowerCase(),s=o.startsWith("/login")||o.startsWith("/register");return t.jsxs(t.Fragment,{children:[!s&&t.jsx(T2,{}),t.jsxs(y0,{children:[t.jsx(U,{path:"/",element:t.jsx(D0,{})}),t.jsx(U,{path:"/derecho",element:t.jsx(P0,{})}),t.jsx(U,{path:"/contabilidad",element:t.jsx(V0,{})}),t.jsx(U,{path:"/auditoria",element:t.jsx(B0,{})}),t.jsx(U,{path:"/derecho-administrativo",element:t.jsx(U0,{})}),t.jsx(U,{path:"/derecho-familia",element:t.jsx(K0,{})}),t.jsx(U,{path:"/derecho-laboral",element:t.jsx(G0,{})}),t.jsx(U,{path:"/derecho-penal",element:t.jsx(Q0,{})}),t.jsx(U,{path:"/impuestos",element:t.jsx(eg,{})}),t.jsx(U,{path:"/asesoria-contable",element:t.jsx(rg,{})}),t.jsx(U,{path:"/planeacion-patrimonial",element:t.jsx(he,{to:"/asesoria-contable",replace:!0})}),t.jsx(U,{path:"/privacidad",element:t.jsx(ag,{})}),t.jsx(U,{path:"/tramites-notariales",element:t.jsx(og,{})}),t.jsx(U,{path:"/acciones-de-tutela",element:t.jsx(lg,{})}),t.jsx(U,{path:"/login",element:i?t.jsx(he,{to:"/",replace:!0}):t.jsx(q1,{})}),t.jsx(U,{path:"/register",element:t.jsx(Y1,{})}),t.jsx(U,{path:"/logout",element:t.jsx(I2,{})}),t.jsx(U,{path:"/panel",element:t.jsx(Gn,{children:t.jsx(J1,{})})}),t.jsx(U,{path:"/admin/usuarios",element:t.jsx(Gn,{children:t.jsx(o2,{})})}),t.jsx(U,{path:"/admin/clientes-activos",element:t.jsx(Gn,{children:t.jsx(c2,{})})}),t.jsx(U,{path:"/dashboard",element:t.jsx(Gn,{children:t.jsx(S2,{})})}),t.jsx(U,{path:"/mi-expediente",element:t.jsx(Gn,{children:t.jsx($c,{})})}),t.jsx(U,{path:"/dashboard2",element:t.jsx(Gn,{children:t.jsx($c,{})})}),t.jsx(U,{path:"/mis-casos",element:t.jsx(Gn,{children:t.jsx(A2,{})})}),t.jsx(U,{path:"/index.html",element:t.jsx(he,{to:"/",replace:!0})}),t.jsx(U,{path:"/derecho.html",element:t.jsx(he,{to:"/derecho",replace:!0})}),t.jsx(U,{path:"/contabilidad.html",element:t.jsx(he,{to:"/contabilidad",replace:!0})}),t.jsx(U,{path:"/auditoria.html",element:t.jsx(he,{to:"/auditoria",replace:!0})}),t.jsx(U,{path:"/derecho-administrativo.html",element:t.jsx(he,{to:"/derecho-administrativo",replace:!0})}),t.jsx(U,{path:"/derecho-familia.html",element:t.jsx(he,{to:"/derecho-familia",replace:!0})}),t.jsx(U,{path:"/derecho-laboral.html",element:t.jsx(he,{to:"/derecho-laboral",replace:!0})}),t.jsx(U,{path:"/derecho-penal.html",element:t.jsx(he,{to:"/derecho-penal",replace:!0})}),t.jsx(U,{path:"/impuestos.html",element:t.jsx(he,{to:"/impuestos",replace:!0})}),t.jsx(U,{path:"/planeacion-patrimonial.html",element:t.jsx(he,{to:"/asesoria-contable",replace:!0})}),t.jsx(U,{path:"/privacidad.html",element:t.jsx(he,{to:"/privacidad",replace:!0})}),t.jsx(U,{path:"/tramites-notariales.html",element:t.jsx(he,{to:"/tramites-notariales",replace:!0})}),t.jsx(U,{path:"/acciones-de-tutela.html",element:t.jsx(he,{to:"/acciones-de-tutela",replace:!0})})]})]})};return t.jsx(W1,{children:t.jsx(t.Fragment,{children:t.jsx(E0,{children:t.jsx(r,{})})})})}try{"scrollRestoration"in history&&(history.scrollRestoration="manual")}catch{}const z2=op(document.getElementById("root"));z2.render(t.jsx(R2,{}));
