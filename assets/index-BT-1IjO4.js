function ef(e,n){for(var t=0;t<n.length;t++){const a=n[t];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(a,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function nf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yc={exports:{}},ai={},Gc={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ut=Symbol.for("react.element"),rf=Symbol.for("react.portal"),tf=Symbol.for("react.fragment"),af=Symbol.for("react.strict_mode"),of=Symbol.for("react.profiler"),sf=Symbol.for("react.provider"),lf=Symbol.for("react.context"),cf=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),pf=Symbol.for("react.memo"),uf=Symbol.for("react.lazy"),dl=Symbol.iterator;function ff(e){return e===null||typeof e!="object"?null:(e=dl&&e[dl]||e["@@iterator"],typeof e=="function"?e:null)}var Jc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qc=Object.assign,Xc={};function Kr(e,n,t){this.props=e,this.context=n,this.refs=Xc,this.updater=t||Jc}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ed(){}ed.prototype=Kr.prototype;function cs(e,n,t){this.props=e,this.context=n,this.refs=Xc,this.updater=t||Jc}var ds=cs.prototype=new ed;ds.constructor=cs;Qc(ds,Kr.prototype);ds.isPureReactComponent=!0;var pl=Array.isArray,nd=Object.prototype.hasOwnProperty,ps={current:null},rd={key:!0,ref:!0,__self:!0,__source:!0};function td(e,n,t){var a,i={},o=null,s=null;if(n!=null)for(a in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)nd.call(n,a)&&!rd.hasOwnProperty(a)&&(i[a]=n[a]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:Ut,type:e,key:o,ref:s,props:i,_owner:ps.current}}function hf(e,n){return{$$typeof:Ut,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function us(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ut}function mf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ul=/\/+/g;function Ai(e,n){return typeof e=="object"&&e!==null&&e.key!=null?mf(""+e.key):n.toString(36)}function ga(e,n,t,a,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ut:case rf:s=!0}}if(s)return s=e,i=i(s),e=a===""?"."+Ai(s,0):a,pl(i)?(t="",e!=null&&(t=e.replace(ul,"$&/")+"/"),ga(i,n,t,"",function(d){return d})):i!=null&&(us(i)&&(i=hf(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ul,"$&/")+"/")+e)),n.push(i)),1;if(s=0,a=a===""?".":a+":",pl(e))for(var l=0;l<e.length;l++){o=e[l];var c=a+Ai(o,l);s+=ga(o,n,t,c,i)}else if(c=ff(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=a+Ai(o,l++),s+=ga(o,n,t,c,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Jt(e,n,t){if(e==null)return e;var a=[],i=0;return ga(e,a,"","",function(o){return n.call(t,o,i++)}),a}function gf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},va={transition:null},vf={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:va,ReactCurrentOwner:ps};function ad(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Jt,forEach:function(e,n,t){Jt(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Jt(e,function(){n++}),n},toArray:function(e){return Jt(e,function(n){return n})||[]},only:function(e){if(!us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Kr;Z.Fragment=tf;Z.Profiler=of;Z.PureComponent=cs;Z.StrictMode=af;Z.Suspense=df;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vf;Z.act=ad;Z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Qc({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=ps.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)nd.call(n,c)&&!rd.hasOwnProperty(c)&&(a[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)a.children=t;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:Ut,type:e.type,key:i,ref:o,props:a,_owner:s}};Z.createContext=function(e){return e={$$typeof:lf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sf,_context:e},e.Consumer=e};Z.createElement=td;Z.createFactory=function(e){var n=td.bind(null,e);return n.type=e,n};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:cf,render:e}};Z.isValidElement=us;Z.lazy=function(e){return{$$typeof:uf,_payload:{_status:-1,_result:e},_init:gf}};Z.memo=function(e,n){return{$$typeof:pf,type:e,compare:n===void 0?null:n}};Z.startTransition=function(e){var n=va.transition;va.transition={};try{e()}finally{va.transition=n}};Z.unstable_act=ad;Z.useCallback=function(e,n){return Ae.current.useCallback(e,n)};Z.useContext=function(e){return Ae.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};Z.useEffect=function(e,n){return Ae.current.useEffect(e,n)};Z.useId=function(){return Ae.current.useId()};Z.useImperativeHandle=function(e,n,t){return Ae.current.useImperativeHandle(e,n,t)};Z.useInsertionEffect=function(e,n){return Ae.current.useInsertionEffect(e,n)};Z.useLayoutEffect=function(e,n){return Ae.current.useLayoutEffect(e,n)};Z.useMemo=function(e,n){return Ae.current.useMemo(e,n)};Z.useReducer=function(e,n,t){return Ae.current.useReducer(e,n,t)};Z.useRef=function(e){return Ae.current.useRef(e)};Z.useState=function(e){return Ae.current.useState(e)};Z.useSyncExternalStore=function(e,n,t){return Ae.current.useSyncExternalStore(e,n,t)};Z.useTransition=function(){return Ae.current.useTransition()};Z.version="18.3.1";Gc.exports=Z;var w=Gc.exports;const xf=nf(w),bf=ef({__proto__:null,default:xf},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf=w,wf=Symbol.for("react.element"),jf=Symbol.for("react.fragment"),kf=Object.prototype.hasOwnProperty,Cf=yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nf={key:!0,ref:!0,__self:!0,__source:!0};function id(e,n,t){var a,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(a in n)kf.call(n,a)&&!Nf.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)i[a]===void 0&&(i[a]=n[a]);return{$$typeof:wf,type:e,key:o,ref:s,props:i,_owner:Cf.current}}ai.Fragment=jf;ai.jsx=id;ai.jsxs=id;Yc.exports=ai;var r=Yc.exports,od={exports:{}},Ze={},sd={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,D){var L=N.length;N.push(D);e:for(;0<L;){var W=L-1>>>1,ie=N[W];if(0<i(ie,D))N[W]=D,N[L]=ie,L=W;else break e}}function t(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var D=N[0],L=N.pop();if(L!==D){N[0]=L;e:for(var W=0,ie=N.length,z=ie>>>1;W<z;){var V=2*(W+1)-1,X=N[V],le=V+1,mr=N[le];if(0>i(X,L))le<ie&&0>i(mr,X)?(N[W]=mr,N[le]=L,W=le):(N[W]=X,N[V]=L,W=V);else if(le<ie&&0>i(mr,L))N[W]=mr,N[le]=L,W=le;else break e}}return D}function i(N,D){var L=N.sortIndex-D.sortIndex;return L!==0?L:N.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],d=[],p=1,f=null,h=3,y=!1,v=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var D=t(d);D!==null;){if(D.callback===null)a(d);else if(D.startTime<=N)a(d),D.sortIndex=D.expirationTime,n(c,D);else break;D=t(d)}}function b(N){if(x=!1,g(N),!v)if(t(c)!==null)v=!0,_(C);else{var D=t(d);D!==null&&Y(b,D.startTime-N)}}function C(N,D){v=!1,x&&(x=!1,m(R),R=-1),y=!0;var L=h;try{for(g(D),f=t(c);f!==null&&(!(f.expirationTime>D)||N&&!H());){var W=f.callback;if(typeof W=="function"){f.callback=null,h=f.priorityLevel;var ie=W(f.expirationTime<=D);D=e.unstable_now(),typeof ie=="function"?f.callback=ie:f===t(c)&&a(c),g(D)}else a(c);f=t(c)}if(f!==null)var z=!0;else{var V=t(d);V!==null&&Y(b,V.startTime-D),z=!1}return z}finally{f=null,h=L,y=!1}}var S=!1,I=null,R=-1,M=5,P=-1;function H(){return!(e.unstable_now()-P<M)}function Te(){if(I!==null){var N=e.unstable_now();P=N;var D=!0;try{D=I(!0,N)}finally{D?Q():(S=!1,I=null)}}else S=!1}var Q;if(typeof u=="function")Q=function(){u(Te)};else if(typeof MessageChannel<"u"){var E=new MessageChannel,F=E.port2;E.port1.onmessage=Te,Q=function(){F.postMessage(null)}}else Q=function(){j(Te,0)};function _(N){I=N,S||(S=!0,Q())}function Y(N,D){R=j(function(){N(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,_(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return N()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,D){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return D()}finally{h=L}},e.unstable_scheduleCallback=function(N,D,L){var W=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?W+L:W):L=W,N){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=L+ie,N={id:p++,callback:D,priorityLevel:N,startTime:L,expirationTime:ie,sortIndex:-1},L>W?(N.sortIndex=L,n(d,N),t(c)===null&&N===t(d)&&(x?(m(R),R=-1):x=!0,Y(b,L-W))):(N.sortIndex=ie,n(c,N),v||y||(v=!0,_(C))),N},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(N){var D=h;return function(){var L=h;h=D;try{return N.apply(this,arguments)}finally{h=L}}}})(ld);sd.exports=ld;var Sf=sd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef=w,Ue=Sf;function A(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cd=new Set,jt={};function fr(e,n){Pr(e,n),Pr(e+"Capture",n)}function Pr(e,n){for(jt[e]=n,e=0;e<n.length;e++)cd.add(n[e])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=Object.prototype.hasOwnProperty,Af=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fl={},hl={};function If(e){return io.call(hl,e)?!0:io.call(fl,e)?!1:Af.test(e)?hl[e]=!0:(fl[e]=!0,!1)}function Tf(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rf(e,n,t,a){if(n===null||typeof n>"u"||Tf(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ie(e,n,t,a,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];be[n]=new Ie(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var fs=/[\-:]([a-z])/g;function hs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(fs,hs);be[n]=new Ie(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(fs,hs);be[n]=new Ie(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(fs,hs);be[n]=new Ie(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function ms(e,n,t,a){var i=be.hasOwnProperty(n)?be[n]:null;(i!==null?i.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Rf(n,t,i,a)&&(t=null),a||i===null?If(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,a=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Sn=Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qt=Symbol.for("react.element"),xr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),gs=Symbol.for("react.strict_mode"),oo=Symbol.for("react.profiler"),dd=Symbol.for("react.provider"),pd=Symbol.for("react.context"),vs=Symbol.for("react.forward_ref"),so=Symbol.for("react.suspense"),lo=Symbol.for("react.suspense_list"),xs=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),ud=Symbol.for("react.offscreen"),ml=Symbol.iterator;function Qr(e){return e===null||typeof e!="object"?null:(e=ml&&e[ml]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Ii;function ct(e){if(Ii===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ii=n&&n[1]||""}return`
`+Ii+e}var Ti=!1;function Ri(e,n){if(!e||Ti)return"";Ti=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var a=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){a=d}e.call(n.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=a.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Ti=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ct(e):""}function zf(e){switch(e.tag){case 5:return ct(e.type);case 16:return ct("Lazy");case 13:return ct("Suspense");case 19:return ct("SuspenseList");case 0:case 2:case 15:return e=Ri(e.type,!1),e;case 11:return e=Ri(e.type.render,!1),e;case 1:return e=Ri(e.type,!0),e;default:return""}}function co(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case br:return"Fragment";case xr:return"Portal";case oo:return"Profiler";case gs:return"StrictMode";case so:return"Suspense";case lo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pd:return(e.displayName||"Context")+".Consumer";case dd:return(e._context.displayName||"Context")+".Provider";case vs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xs:return n=e.displayName||null,n!==null?n:co(e.type)||"Memo";case An:n=e._payload,e=e._init;try{return co(e(n))}catch{}}return null}function Of(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return co(n);case 8:return n===gs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Df(e){var n=fd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){e._valueTracker||(e._valueTracker=Df(e))}function hd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=fd(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Ra(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function po(e,n){var t=n.checked;return ae({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function gl(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=Kn(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function md(e,n){n=n.checked,n!=null&&ms(e,"checked",n,!1)}function uo(e,n){md(e,n);var t=Kn(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?fo(e,n.type,t):n.hasOwnProperty("defaultValue")&&fo(e,n.type,Kn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function vl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function fo(e,n,t){(n!=="number"||Ra(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var dt=Array.isArray;function Tr(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Kn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function ho(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(A(91));return ae({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(A(92));if(dt(t)){if(1<t.length)throw Error(A(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Kn(t)}}function gd(e,n){var t=Kn(n.value),a=Kn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function bl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function vd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?vd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ea,xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ea.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function kt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lf=["Webkit","ms","Moz","O"];Object.keys(ft).forEach(function(e){Lf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ft[n]=ft[e]})});function bd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ft.hasOwnProperty(e)&&ft[e]?(""+n).trim():n+"px"}function yd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,i=bd(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,i):e[t]=i}}var Pf=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function go(e,n){if(n){if(Pf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(A(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(A(61))}if(n.style!=null&&typeof n.style!="object")throw Error(A(62))}}function vo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xo=null;function bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bo=null,Rr=null,zr=null;function yl(e){if(e=Ht(e)){if(typeof bo!="function")throw Error(A(280));var n=e.stateNode;n&&(n=ci(n),bo(e.stateNode,e.type,n))}}function wd(e){Rr?zr?zr.push(e):zr=[e]:Rr=e}function jd(){if(Rr){var e=Rr,n=zr;if(zr=Rr=null,yl(e),n)for(e=0;e<n.length;e++)yl(n[e])}}function kd(e,n){return e(n)}function Cd(){}var zi=!1;function Nd(e,n,t){if(zi)return e(n,t);zi=!0;try{return kd(e,n,t)}finally{zi=!1,(Rr!==null||zr!==null)&&(Cd(),jd())}}function Ct(e,n){var t=e.stateNode;if(t===null)return null;var a=ci(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(A(231,n,typeof t));return t}var yo=!1;if(jn)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){yo=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{yo=!1}function _f(e,n,t,a,i,o,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(p){this.onError(p)}}var ht=!1,za=null,Oa=!1,wo=null,Vf={onError:function(e){ht=!0,za=e}};function Mf(e,n,t,a,i,o,s,l,c){ht=!1,za=null,_f.apply(Vf,arguments)}function Bf(e,n,t,a,i,o,s,l,c){if(Mf.apply(this,arguments),ht){if(ht){var d=za;ht=!1,za=null}else throw Error(A(198));Oa||(Oa=!0,wo=d)}}function hr(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Sd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function wl(e){if(hr(e)!==e)throw Error(A(188))}function Ff(e){var n=e.alternate;if(!n){if(n=hr(e),n===null)throw Error(A(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return wl(i),e;if(o===a)return wl(i),n;o=o.sibling}throw Error(A(188))}if(t.return!==a.return)t=i,a=o;else{for(var s=!1,l=i.child;l;){if(l===t){s=!0,t=i,a=o;break}if(l===a){s=!0,a=i,t=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===t){s=!0,t=o,a=i;break}if(l===a){s=!0,a=o,t=i;break}l=l.sibling}if(!s)throw Error(A(189))}}if(t.alternate!==a)throw Error(A(190))}if(t.tag!==3)throw Error(A(188));return t.stateNode.current===t?e:n}function Ed(e){return e=Ff(e),e!==null?Ad(e):null}function Ad(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ad(e);if(n!==null)return n;e=e.sibling}return null}var Id=Ue.unstable_scheduleCallback,jl=Ue.unstable_cancelCallback,Uf=Ue.unstable_shouldYield,Zf=Ue.unstable_requestPaint,ce=Ue.unstable_now,Kf=Ue.unstable_getCurrentPriorityLevel,ys=Ue.unstable_ImmediatePriority,Td=Ue.unstable_UserBlockingPriority,Da=Ue.unstable_NormalPriority,Hf=Ue.unstable_LowPriority,Rd=Ue.unstable_IdlePriority,ii=null,hn=null;function $f(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(ii,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:Yf,Wf=Math.log,qf=Math.LN2;function Yf(e){return e>>>=0,e===0?32:31-(Wf(e)/qf|0)|0}var na=64,ra=4194304;function pt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function La(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var l=s&~i;l!==0?a=pt(l):(o&=s,o!==0&&(a=pt(o)))}else s=t&~i,s!==0?a=pt(s):o!==0&&(a=pt(o));if(a===0)return 0;if(n!==0&&n!==a&&!(n&i)&&(i=a&-a,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-on(n),i=1<<t,a|=e[t],n&=~i;return a}function Gf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jf(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-on(o),l=1<<s,c=i[s];c===-1?(!(l&t)||l&a)&&(i[s]=Gf(l,n)):c<=n&&(e.expiredLanes|=l),o&=~l}}function jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zd(){var e=na;return na<<=1,!(na&4194240)&&(na=64),e}function Oi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Zt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-on(n),e[n]=t}function Qf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-on(t),o=1<<i;n[i]=0,a[i]=-1,e[i]=-1,t&=~o}}function ws(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-on(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}var $=0;function Od(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dd,js,Ld,Pd,_d,ko=!1,ta=[],Ln=null,Pn=null,_n=null,Nt=new Map,St=new Map,Tn=[],Xf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kl(e,n){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Nt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":St.delete(n.pointerId)}}function et(e,n,t,a,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Ht(n),n!==null&&js(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function eh(e,n,t,a,i){switch(n){case"focusin":return Ln=et(Ln,e,n,t,a,i),!0;case"dragenter":return Pn=et(Pn,e,n,t,a,i),!0;case"mouseover":return _n=et(_n,e,n,t,a,i),!0;case"pointerover":var o=i.pointerId;return Nt.set(o,et(Nt.get(o)||null,e,n,t,a,i)),!0;case"gotpointercapture":return o=i.pointerId,St.set(o,et(St.get(o)||null,e,n,t,a,i)),!0}return!1}function Vd(e){var n=er(e.target);if(n!==null){var t=hr(n);if(t!==null){if(n=t.tag,n===13){if(n=Sd(t),n!==null){e.blockedOn=n,_d(e.priority,function(){Ld(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Co(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);xo=a,t.target.dispatchEvent(a),xo=null}else return n=Ht(t),n!==null&&js(n),e.blockedOn=t,!1;n.shift()}return!0}function Cl(e,n,t){xa(e)&&t.delete(n)}function nh(){ko=!1,Ln!==null&&xa(Ln)&&(Ln=null),Pn!==null&&xa(Pn)&&(Pn=null),_n!==null&&xa(_n)&&(_n=null),Nt.forEach(Cl),St.forEach(Cl)}function nt(e,n){e.blockedOn===n&&(e.blockedOn=null,ko||(ko=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,nh)))}function Et(e){function n(i){return nt(i,e)}if(0<ta.length){nt(ta[0],e);for(var t=1;t<ta.length;t++){var a=ta[t];a.blockedOn===e&&(a.blockedOn=null)}}for(Ln!==null&&nt(Ln,e),Pn!==null&&nt(Pn,e),_n!==null&&nt(_n,e),Nt.forEach(n),St.forEach(n),t=0;t<Tn.length;t++)a=Tn[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<Tn.length&&(t=Tn[0],t.blockedOn===null);)Vd(t),t.blockedOn===null&&Tn.shift()}var Or=Sn.ReactCurrentBatchConfig,Pa=!0;function rh(e,n,t,a){var i=$,o=Or.transition;Or.transition=null;try{$=1,ks(e,n,t,a)}finally{$=i,Or.transition=o}}function th(e,n,t,a){var i=$,o=Or.transition;Or.transition=null;try{$=4,ks(e,n,t,a)}finally{$=i,Or.transition=o}}function ks(e,n,t,a){if(Pa){var i=Co(e,n,t,a);if(i===null)Zi(e,n,a,_a,t),kl(e,a);else if(eh(i,e,n,t,a))a.stopPropagation();else if(kl(e,a),n&4&&-1<Xf.indexOf(e)){for(;i!==null;){var o=Ht(i);if(o!==null&&Dd(o),o=Co(e,n,t,a),o===null&&Zi(e,n,a,_a,t),o===i)break;i=o}i!==null&&a.stopPropagation()}else Zi(e,n,a,null,t)}}var _a=null;function Co(e,n,t,a){if(_a=null,e=bs(a),e=er(e),e!==null)if(n=hr(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Sd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return _a=e,null}function Md(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kf()){case ys:return 1;case Td:return 4;case Da:case Hf:return 16;case Rd:return 536870912;default:return 16}default:return 16}}var zn=null,Cs=null,ba=null;function Bd(){if(ba)return ba;var e,n=Cs,t=n.length,a,i="value"in zn?zn.value:zn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===i[o-a];a++);return ba=i.slice(e,1<a?1-a:void 0)}function ya(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function aa(){return!0}function Nl(){return!1}function Ke(e){function n(t,a,i,o,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?aa:Nl,this.isPropagationStopped=Nl,this}return ae(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),n}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=Ke(Hr),Kt=ae({},Hr,{view:0,detail:0}),ah=Ke(Kt),Di,Li,rt,oi=ae({},Kt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rt&&(rt&&e.type==="mousemove"?(Di=e.screenX-rt.screenX,Li=e.screenY-rt.screenY):Li=Di=0,rt=e),Di)},movementY:function(e){return"movementY"in e?e.movementY:Li}}),Sl=Ke(oi),ih=ae({},oi,{dataTransfer:0}),oh=Ke(ih),sh=ae({},Kt,{relatedTarget:0}),Pi=Ke(sh),lh=ae({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),ch=Ke(lh),dh=ae({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ph=Ke(dh),uh=ae({},Hr,{data:0}),El=Ke(uh),fh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=mh[e])?!!n[e]:!1}function Ss(){return gh}var vh=ae({},Kt,{key:function(e){if(e.key){var n=fh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ss,charCode:function(e){return e.type==="keypress"?ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xh=Ke(vh),bh=ae({},oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Al=Ke(bh),yh=ae({},Kt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ss}),wh=Ke(yh),jh=ae({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),kh=Ke(jh),Ch=ae({},oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nh=Ke(Ch),Sh=[9,13,27,32],Es=jn&&"CompositionEvent"in window,mt=null;jn&&"documentMode"in document&&(mt=document.documentMode);var Eh=jn&&"TextEvent"in window&&!mt,Fd=jn&&(!Es||mt&&8<mt&&11>=mt),Il=" ",Tl=!1;function Ud(e,n){switch(e){case"keyup":return Sh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function Ah(e,n){switch(e){case"compositionend":return Zd(n);case"keypress":return n.which!==32?null:(Tl=!0,Il);case"textInput":return e=n.data,e===Il&&Tl?null:e;default:return null}}function Ih(e,n){if(yr)return e==="compositionend"||!Es&&Ud(e,n)?(e=Bd(),ba=Cs=zn=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fd&&n.locale!=="ko"?null:n.data;default:return null}}var Th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Th[e.type]:n==="textarea"}function Kd(e,n,t,a){wd(a),n=Va(n,"onChange"),0<n.length&&(t=new Ns("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var gt=null,At=null;function Rh(e){np(e,0)}function si(e){var n=kr(e);if(hd(n))return e}function zh(e,n){if(e==="change")return n}var Hd=!1;if(jn){var _i;if(jn){var Vi="oninput"in document;if(!Vi){var zl=document.createElement("div");zl.setAttribute("oninput","return;"),Vi=typeof zl.oninput=="function"}_i=Vi}else _i=!1;Hd=_i&&(!document.documentMode||9<document.documentMode)}function Ol(){gt&&(gt.detachEvent("onpropertychange",$d),At=gt=null)}function $d(e){if(e.propertyName==="value"&&si(At)){var n=[];Kd(n,At,e,bs(e)),Nd(Rh,n)}}function Oh(e,n,t){e==="focusin"?(Ol(),gt=n,At=t,gt.attachEvent("onpropertychange",$d)):e==="focusout"&&Ol()}function Dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(At)}function Lh(e,n){if(e==="click")return si(n)}function Ph(e,n){if(e==="input"||e==="change")return si(n)}function _h(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ln=typeof Object.is=="function"?Object.is:_h;function It(e,n){if(ln(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!io.call(n,i)||!ln(e[i],n[i]))return!1}return!0}function Dl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ll(e,n){var t=Dl(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Dl(t)}}function Wd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qd(){for(var e=window,n=Ra();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ra(e.document)}return n}function As(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Vh(e){var n=qd(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wd(t.ownerDocument.documentElement,t)){if(a!==null&&As(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(a.start,i);a=a.end===void 0?o:Math.min(a.end,i),!e.extend&&o>a&&(i=a,a=o,o=i),i=Ll(t,o);var s=Ll(t,a);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>a?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mh=jn&&"documentMode"in document&&11>=document.documentMode,wr=null,No=null,vt=null,So=!1;function Pl(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;So||wr==null||wr!==Ra(a)||(a=wr,"selectionStart"in a&&As(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),vt&&It(vt,a)||(vt=a,a=Va(No,"onSelect"),0<a.length&&(n=new Ns("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=wr)))}function ia(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var jr={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},Mi={},Yd={};jn&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function li(e){if(Mi[e])return Mi[e];if(!jr[e])return e;var n=jr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Yd)return Mi[e]=n[t];return e}var Gd=li("animationend"),Jd=li("animationiteration"),Qd=li("animationstart"),Xd=li("transitionend"),ep=new Map,_l="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,n){ep.set(e,n),fr(n,[e])}for(var Bi=0;Bi<_l.length;Bi++){var Fi=_l[Bi],Bh=Fi.toLowerCase(),Fh=Fi[0].toUpperCase()+Fi.slice(1);$n(Bh,"on"+Fh)}$n(Gd,"onAnimationEnd");$n(Jd,"onAnimationIteration");$n(Qd,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Xd,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ut="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ut));function Vl(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Bf(a,n,void 0,e),e.currentTarget=null}function np(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var s=a.length-1;0<=s;s--){var l=a[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Vl(i,l,d),o=c}else for(s=0;s<a.length;s++){if(l=a[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Vl(i,l,d),o=c}}}if(Oa)throw e=wo,Oa=!1,wo=null,e}function G(e,n){var t=n[Ro];t===void 0&&(t=n[Ro]=new Set);var a=e+"__bubble";t.has(a)||(rp(n,e,2,!1),t.add(a))}function Ui(e,n,t){var a=0;n&&(a|=4),rp(t,e,a,n)}var oa="_reactListening"+Math.random().toString(36).slice(2);function Tt(e){if(!e[oa]){e[oa]=!0,cd.forEach(function(t){t!=="selectionchange"&&(Uh.has(t)||Ui(t,!1,e),Ui(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[oa]||(n[oa]=!0,Ui("selectionchange",!1,n))}}function rp(e,n,t,a){switch(Md(n)){case 1:var i=rh;break;case 4:i=th;break;default:i=ks}t=i.bind(null,n,t,e),i=void 0,!yo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Zi(e,n,t,a,i){var o=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=a.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=er(l),s===null)return;if(c=s.tag,c===5||c===6){a=o=s;continue e}l=l.parentNode}}a=a.return}Nd(function(){var d=o,p=bs(t),f=[];e:{var h=ep.get(e);if(h!==void 0){var y=Ns,v=e;switch(e){case"keypress":if(ya(t)===0)break e;case"keydown":case"keyup":y=xh;break;case"focusin":v="focus",y=Pi;break;case"focusout":v="blur",y=Pi;break;case"beforeblur":case"afterblur":y=Pi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=wh;break;case Gd:case Jd:case Qd:y=ch;break;case Xd:y=kh;break;case"scroll":y=ah;break;case"wheel":y=Nh;break;case"copy":case"cut":case"paste":y=ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Al}var x=(n&4)!==0,j=!x&&e==="scroll",m=x?h!==null?h+"Capture":null:h;x=[];for(var u=d,g;u!==null;){g=u;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,m!==null&&(b=Ct(u,m),b!=null&&x.push(Rt(u,b,g)))),j)break;u=u.return}0<x.length&&(h=new y(h,v,null,t,p),f.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==xo&&(v=t.relatedTarget||t.fromElement)&&(er(v)||v[kn]))break e;if((y||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,y?(v=t.relatedTarget||t.toElement,y=d,v=v?er(v):null,v!==null&&(j=hr(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=d),y!==v)){if(x=Sl,b="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=Al,b="onPointerLeave",m="onPointerEnter",u="pointer"),j=y==null?h:kr(y),g=v==null?h:kr(v),h=new x(b,u+"leave",y,t,p),h.target=j,h.relatedTarget=g,b=null,er(p)===d&&(x=new x(m,u+"enter",v,t,p),x.target=g,x.relatedTarget=j,b=x),j=b,y&&v)n:{for(x=y,m=v,u=0,g=x;g;g=gr(g))u++;for(g=0,b=m;b;b=gr(b))g++;for(;0<u-g;)x=gr(x),u--;for(;0<g-u;)m=gr(m),g--;for(;u--;){if(x===m||m!==null&&x===m.alternate)break n;x=gr(x),m=gr(m)}x=null}else x=null;y!==null&&Ml(f,h,y,x,!1),v!==null&&j!==null&&Ml(f,j,v,x,!0)}}e:{if(h=d?kr(d):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var C=zh;else if(Rl(h))if(Hd)C=Ph;else{C=Dh;var S=Oh}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Lh);if(C&&(C=C(e,d))){Kd(f,C,t,p);break e}S&&S(e,h,d),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&fo(h,"number",h.value)}switch(S=d?kr(d):window,e){case"focusin":(Rl(S)||S.contentEditable==="true")&&(wr=S,No=d,vt=null);break;case"focusout":vt=No=wr=null;break;case"mousedown":So=!0;break;case"contextmenu":case"mouseup":case"dragend":So=!1,Pl(f,t,p);break;case"selectionchange":if(Mh)break;case"keydown":case"keyup":Pl(f,t,p)}var I;if(Es)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else yr?Ud(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Fd&&t.locale!=="ko"&&(yr||R!=="onCompositionStart"?R==="onCompositionEnd"&&yr&&(I=Bd()):(zn=p,Cs="value"in zn?zn.value:zn.textContent,yr=!0)),S=Va(d,R),0<S.length&&(R=new El(R,e,null,t,p),f.push({event:R,listeners:S}),I?R.data=I:(I=Zd(t),I!==null&&(R.data=I)))),(I=Eh?Ah(e,t):Ih(e,t))&&(d=Va(d,"onBeforeInput"),0<d.length&&(p=new El("onBeforeInput","beforeinput",null,t,p),f.push({event:p,listeners:d}),p.data=I))}np(f,n)})}function Rt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Va(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ct(e,t),o!=null&&a.unshift(Rt(e,o,i)),o=Ct(e,n),o!=null&&a.push(Rt(e,o,i))),e=e.return}return a}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ml(e,n,t,a,i){for(var o=n._reactName,s=[];t!==null&&t!==a;){var l=t,c=l.alternate,d=l.stateNode;if(c!==null&&c===a)break;l.tag===5&&d!==null&&(l=d,i?(c=Ct(t,o),c!=null&&s.unshift(Rt(t,c,l))):i||(c=Ct(t,o),c!=null&&s.push(Rt(t,c,l)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Zh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function Bl(e){return(typeof e=="string"?e:""+e).replace(Zh,`
`).replace(Kh,"")}function sa(e,n,t){if(n=Bl(n),Bl(e)!==n&&t)throw Error(A(425))}function Ma(){}var Eo=null,Ao=null;function Io(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,Hh=typeof clearTimeout=="function"?clearTimeout:void 0,Fl=typeof Promise=="function"?Promise:void 0,$h=typeof queueMicrotask=="function"?queueMicrotask:typeof Fl<"u"?function(e){return Fl.resolve(null).then(e).catch(Wh)}:To;function Wh(e){setTimeout(function(){throw e})}function Ki(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(a===0){e.removeChild(i),Et(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=i}while(t);Et(n)}function Vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ul(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var $r=Math.random().toString(36).slice(2),fn="__reactFiber$"+$r,zt="__reactProps$"+$r,kn="__reactContainer$"+$r,Ro="__reactEvents$"+$r,qh="__reactListeners$"+$r,Yh="__reactHandles$"+$r;function er(e){var n=e[fn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[kn]||t[fn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ul(e);e!==null;){if(t=e[fn])return t;e=Ul(e)}return n}e=t,t=e.parentNode}return null}function Ht(e){return e=e[fn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function ci(e){return e[zt]||null}var zo=[],Cr=-1;function Wn(e){return{current:e}}function J(e){0>Cr||(e.current=zo[Cr],zo[Cr]=null,Cr--)}function q(e,n){Cr++,zo[Cr]=e.current,e.current=n}var Hn={},Ne=Wn(Hn),Oe=Wn(!1),sr=Hn;function _r(e,n){var t=e.type.contextTypes;if(!t)return Hn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function Ba(){J(Oe),J(Ne)}function Zl(e,n,t){if(Ne.current!==Hn)throw Error(A(168));q(Ne,n),q(Oe,t)}function tp(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var i in a)if(!(i in n))throw Error(A(108,Of(e)||"Unknown",i));return ae({},t,a)}function Fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,sr=Ne.current,q(Ne,e),q(Oe,Oe.current),!0}function Kl(e,n,t){var a=e.stateNode;if(!a)throw Error(A(169));t?(e=tp(e,n,sr),a.__reactInternalMemoizedMergedChildContext=e,J(Oe),J(Ne),q(Ne,e)):J(Oe),q(Oe,t)}var xn=null,di=!1,Hi=!1;function ap(e){xn===null?xn=[e]:xn.push(e)}function Gh(e){di=!0,ap(e)}function qn(){if(!Hi&&xn!==null){Hi=!0;var e=0,n=$;try{var t=xn;for($=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}xn=null,di=!1}catch(i){throw xn!==null&&(xn=xn.slice(e+1)),Id(ys,qn),i}finally{$=n,Hi=!1}}return null}var Nr=[],Sr=0,Ua=null,Za=0,Ye=[],Ge=0,lr=null,bn=1,yn="";function Qn(e,n){Nr[Sr++]=Za,Nr[Sr++]=Ua,Ua=e,Za=n}function ip(e,n,t){Ye[Ge++]=bn,Ye[Ge++]=yn,Ye[Ge++]=lr,lr=e;var a=bn;e=yn;var i=32-on(a)-1;a&=~(1<<i),t+=1;var o=32-on(n)+i;if(30<o){var s=i-i%5;o=(a&(1<<s)-1).toString(32),a>>=s,i-=s,bn=1<<32-on(n)+i|t<<i|a,yn=o+e}else bn=1<<o|t<<i|a,yn=e}function Is(e){e.return!==null&&(Qn(e,1),ip(e,1,0))}function Ts(e){for(;e===Ua;)Ua=Nr[--Sr],Nr[Sr]=null,Za=Nr[--Sr],Nr[Sr]=null;for(;e===lr;)lr=Ye[--Ge],Ye[Ge]=null,yn=Ye[--Ge],Ye[Ge]=null,bn=Ye[--Ge],Ye[Ge]=null}var Fe=null,Be=null,ee=!1,an=null;function op(e,n){var t=Je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Hl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Fe=e,Be=Vn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Fe=e,Be=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=lr!==null?{id:bn,overflow:yn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Fe=e,Be=null,!0):!1;default:return!1}}function Oo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Do(e){if(ee){var n=Be;if(n){var t=n;if(!Hl(e,n)){if(Oo(e))throw Error(A(418));n=Vn(t.nextSibling);var a=Fe;n&&Hl(e,n)?op(a,t):(e.flags=e.flags&-4097|2,ee=!1,Fe=e)}}else{if(Oo(e))throw Error(A(418));e.flags=e.flags&-4097|2,ee=!1,Fe=e}}}function $l(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function la(e){if(e!==Fe)return!1;if(!ee)return $l(e),ee=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Io(e.type,e.memoizedProps)),n&&(n=Be)){if(Oo(e))throw sp(),Error(A(418));for(;n;)op(e,n),n=Vn(n.nextSibling)}if($l(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Be=Vn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Be=null}}else Be=Fe?Vn(e.stateNode.nextSibling):null;return!0}function sp(){for(var e=Be;e;)e=Vn(e.nextSibling)}function Vr(){Be=Fe=null,ee=!1}function Rs(e){an===null?an=[e]:an.push(e)}var Jh=Sn.ReactCurrentBatchConfig;function tt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(A(309));var a=t.stateNode}if(!a)throw Error(A(147,e));var i=a,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(A(284));if(!t._owner)throw Error(A(290,e))}return e}function ca(e,n){throw e=Object.prototype.toString.call(n),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Wl(e){var n=e._init;return n(e._payload)}function lp(e){function n(m,u){if(e){var g=m.deletions;g===null?(m.deletions=[u],m.flags|=16):g.push(u)}}function t(m,u){if(!e)return null;for(;u!==null;)n(m,u),u=u.sibling;return null}function a(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function i(m,u){return m=Un(m,u),m.index=0,m.sibling=null,m}function o(m,u,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<u?(m.flags|=2,u):g):(m.flags|=2,u)):(m.flags|=1048576,u)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,u,g,b){return u===null||u.tag!==6?(u=Qi(g,m.mode,b),u.return=m,u):(u=i(u,g),u.return=m,u)}function c(m,u,g,b){var C=g.type;return C===br?p(m,u,g.props.children,b,g.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===An&&Wl(C)===u.type)?(b=i(u,g.props),b.ref=tt(m,u,g),b.return=m,b):(b=Ea(g.type,g.key,g.props,null,m.mode,b),b.ref=tt(m,u,g),b.return=m,b)}function d(m,u,g,b){return u===null||u.tag!==4||u.stateNode.containerInfo!==g.containerInfo||u.stateNode.implementation!==g.implementation?(u=Xi(g,m.mode,b),u.return=m,u):(u=i(u,g.children||[]),u.return=m,u)}function p(m,u,g,b,C){return u===null||u.tag!==7?(u=ir(g,m.mode,b,C),u.return=m,u):(u=i(u,g),u.return=m,u)}function f(m,u,g){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Qi(""+u,m.mode,g),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Qt:return g=Ea(u.type,u.key,u.props,null,m.mode,g),g.ref=tt(m,null,u),g.return=m,g;case xr:return u=Xi(u,m.mode,g),u.return=m,u;case An:var b=u._init;return f(m,b(u._payload),g)}if(dt(u)||Qr(u))return u=ir(u,m.mode,g,null),u.return=m,u;ca(m,u)}return null}function h(m,u,g,b){var C=u!==null?u.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(m,u,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qt:return g.key===C?c(m,u,g,b):null;case xr:return g.key===C?d(m,u,g,b):null;case An:return C=g._init,h(m,u,C(g._payload),b)}if(dt(g)||Qr(g))return C!==null?null:p(m,u,g,b,null);ca(m,g)}return null}function y(m,u,g,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(g)||null,l(u,m,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Qt:return m=m.get(b.key===null?g:b.key)||null,c(u,m,b,C);case xr:return m=m.get(b.key===null?g:b.key)||null,d(u,m,b,C);case An:var S=b._init;return y(m,u,g,S(b._payload),C)}if(dt(b)||Qr(b))return m=m.get(g)||null,p(u,m,b,C,null);ca(u,b)}return null}function v(m,u,g,b){for(var C=null,S=null,I=u,R=u=0,M=null;I!==null&&R<g.length;R++){I.index>R?(M=I,I=null):M=I.sibling;var P=h(m,I,g[R],b);if(P===null){I===null&&(I=M);break}e&&I&&P.alternate===null&&n(m,I),u=o(P,u,R),S===null?C=P:S.sibling=P,S=P,I=M}if(R===g.length)return t(m,I),ee&&Qn(m,R),C;if(I===null){for(;R<g.length;R++)I=f(m,g[R],b),I!==null&&(u=o(I,u,R),S===null?C=I:S.sibling=I,S=I);return ee&&Qn(m,R),C}for(I=a(m,I);R<g.length;R++)M=y(I,m,R,g[R],b),M!==null&&(e&&M.alternate!==null&&I.delete(M.key===null?R:M.key),u=o(M,u,R),S===null?C=M:S.sibling=M,S=M);return e&&I.forEach(function(H){return n(m,H)}),ee&&Qn(m,R),C}function x(m,u,g,b){var C=Qr(g);if(typeof C!="function")throw Error(A(150));if(g=C.call(g),g==null)throw Error(A(151));for(var S=C=null,I=u,R=u=0,M=null,P=g.next();I!==null&&!P.done;R++,P=g.next()){I.index>R?(M=I,I=null):M=I.sibling;var H=h(m,I,P.value,b);if(H===null){I===null&&(I=M);break}e&&I&&H.alternate===null&&n(m,I),u=o(H,u,R),S===null?C=H:S.sibling=H,S=H,I=M}if(P.done)return t(m,I),ee&&Qn(m,R),C;if(I===null){for(;!P.done;R++,P=g.next())P=f(m,P.value,b),P!==null&&(u=o(P,u,R),S===null?C=P:S.sibling=P,S=P);return ee&&Qn(m,R),C}for(I=a(m,I);!P.done;R++,P=g.next())P=y(I,m,R,P.value,b),P!==null&&(e&&P.alternate!==null&&I.delete(P.key===null?R:P.key),u=o(P,u,R),S===null?C=P:S.sibling=P,S=P);return e&&I.forEach(function(Te){return n(m,Te)}),ee&&Qn(m,R),C}function j(m,u,g,b){if(typeof g=="object"&&g!==null&&g.type===br&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Qt:e:{for(var C=g.key,S=u;S!==null;){if(S.key===C){if(C=g.type,C===br){if(S.tag===7){t(m,S.sibling),u=i(S,g.props.children),u.return=m,m=u;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===An&&Wl(C)===S.type){t(m,S.sibling),u=i(S,g.props),u.ref=tt(m,S,g),u.return=m,m=u;break e}t(m,S);break}else n(m,S);S=S.sibling}g.type===br?(u=ir(g.props.children,m.mode,b,g.key),u.return=m,m=u):(b=Ea(g.type,g.key,g.props,null,m.mode,b),b.ref=tt(m,u,g),b.return=m,m=b)}return s(m);case xr:e:{for(S=g.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===g.containerInfo&&u.stateNode.implementation===g.implementation){t(m,u.sibling),u=i(u,g.children||[]),u.return=m,m=u;break e}else{t(m,u);break}else n(m,u);u=u.sibling}u=Xi(g,m.mode,b),u.return=m,m=u}return s(m);case An:return S=g._init,j(m,u,S(g._payload),b)}if(dt(g))return v(m,u,g,b);if(Qr(g))return x(m,u,g,b);ca(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,u!==null&&u.tag===6?(t(m,u.sibling),u=i(u,g),u.return=m,m=u):(t(m,u),u=Qi(g,m.mode,b),u.return=m,m=u),s(m)):t(m,u)}return j}var Mr=lp(!0),cp=lp(!1),Ka=Wn(null),Ha=null,Er=null,zs=null;function Os(){zs=Er=Ha=null}function Ds(e){var n=Ka.current;J(Ka),e._currentValue=n}function Lo(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Dr(e,n){Ha=e,zs=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ze=!0),e.firstContext=null)}function Xe(e){var n=e._currentValue;if(zs!==e)if(e={context:e,memoizedValue:n,next:null},Er===null){if(Ha===null)throw Error(A(308));Er=e,Ha.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return n}var nr=null;function Ls(e){nr===null?nr=[e]:nr.push(e)}function dp(e,n,t,a){var i=n.interleaved;return i===null?(t.next=t,Ls(n)):(t.next=i.next,i.next=t),n.interleaved=t,Cn(e,a)}function Cn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var In=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Mn(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,K&2){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,Cn(e,t)}return i=a.interleaved,i===null?(n.next=n,Ls(a)):(n.next=i.next,i.next=n),a.interleaved=n,Cn(e,t)}function wa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,ws(e,t)}}function ql(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function $a(e,n,t,a){var i=e.updateQueue;In=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?o=d:s.next=d,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;s=0,p=d=c=null,l=o;do{var h=l.lane,y=l.eventTime;if((a&h)===h){p!==null&&(p=p.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(h=n,y=t,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(y,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(y,f,h):v,h==null)break e;f=ae({},f,h);break e;case 2:In=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=y,c=f):p=p.next=y,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(c=f),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);dr|=s,e.lanes=s,e.memoizedState=f}}function Yl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],i=a.callback;if(i!==null){if(a.callback=null,a=t,typeof i!="function")throw Error(A(191,i));i.call(a)}}}var $t={},mn=Wn($t),Ot=Wn($t),Dt=Wn($t);function rr(e){if(e===$t)throw Error(A(174));return e}function _s(e,n){switch(q(Dt,n),q(Ot,e),q(mn,$t),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:mo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=mo(n,e)}J(mn),q(mn,n)}function Br(){J(mn),J(Ot),J(Dt)}function up(e){rr(Dt.current);var n=rr(mn.current),t=mo(n,e.type);n!==t&&(q(Ot,e),q(mn,t))}function Vs(e){Ot.current===e&&(J(mn),J(Ot))}var re=Wn(0);function Wa(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=[];function Ms(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var ja=Sn.ReactCurrentDispatcher,Wi=Sn.ReactCurrentBatchConfig,cr=0,te=null,ue=null,he=null,qa=!1,xt=!1,Lt=0,Qh=0;function ye(){throw Error(A(321))}function Bs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!ln(e[t],n[t]))return!1;return!0}function Fs(e,n,t,a,i,o){if(cr=o,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ja.current=e===null||e.memoizedState===null?rm:tm,e=t(a,i),xt){o=0;do{if(xt=!1,Lt=0,25<=o)throw Error(A(301));o+=1,he=ue=null,n.updateQueue=null,ja.current=am,e=t(a,i)}while(xt)}if(ja.current=Ya,n=ue!==null&&ue.next!==null,cr=0,he=ue=te=null,qa=!1,n)throw Error(A(300));return e}function Us(){var e=Lt!==0;return Lt=0,e}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?te.memoizedState=he=e:he=he.next=e,he}function en(){if(ue===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var n=he===null?te.memoizedState:he.next;if(n!==null)he=n,ue=e;else{if(e===null)throw Error(A(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},he===null?te.memoizedState=he=e:he=he.next=e}return he}function Pt(e,n){return typeof n=="function"?n(e):n}function qi(e){var n=en(),t=n.queue;if(t===null)throw Error(A(311));t.lastRenderedReducer=e;var a=ue,i=a.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}a.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,a=a.baseState;var l=s=null,c=null,d=o;do{var p=d.lane;if((cr&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var f={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=f,s=a):c=c.next=f,te.lanes|=p,dr|=p}d=d.next}while(d!==null&&d!==o);c===null?s=a:c.next=l,ln(a,n.memoizedState)||(ze=!0),n.memoizedState=a,n.baseState=s,n.baseQueue=c,t.lastRenderedState=a}if(e=t.interleaved,e!==null){i=e;do o=i.lane,te.lanes|=o,dr|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Yi(e){var n=en(),t=n.queue;if(t===null)throw Error(A(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ln(o,n.memoizedState)||(ze=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,a]}function fp(){}function hp(e,n){var t=te,a=en(),i=n(),o=!ln(a.memoizedState,i);if(o&&(a.memoizedState=i,ze=!0),a=a.queue,Zs(vp.bind(null,t,a,e),[e]),a.getSnapshot!==n||o||he!==null&&he.memoizedState.tag&1){if(t.flags|=2048,_t(9,gp.bind(null,t,a,i,n),void 0,null),me===null)throw Error(A(349));cr&30||mp(t,n,i)}return i}function mp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=te.updateQueue,n===null?(n={lastEffect:null,stores:null},te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function gp(e,n,t,a){n.value=t,n.getSnapshot=a,xp(n)&&bp(e)}function vp(e,n,t){return t(function(){xp(n)&&bp(e)})}function xp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!ln(e,t)}catch{return!0}}function bp(e){var n=Cn(e,1);n!==null&&sn(n,e,1,-1)}function Gl(e){var n=un();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},n.queue=e,e=e.dispatch=nm.bind(null,te,e),[n.memoizedState,e]}function _t(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=te.updateQueue,n===null?(n={lastEffect:null,stores:null},te.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function yp(){return en().memoizedState}function ka(e,n,t,a){var i=un();te.flags|=e,i.memoizedState=_t(1|n,t,void 0,a===void 0?null:a)}function pi(e,n,t,a){var i=en();a=a===void 0?null:a;var o=void 0;if(ue!==null){var s=ue.memoizedState;if(o=s.destroy,a!==null&&Bs(a,s.deps)){i.memoizedState=_t(n,t,o,a);return}}te.flags|=e,i.memoizedState=_t(1|n,t,o,a)}function Jl(e,n){return ka(8390656,8,e,n)}function Zs(e,n){return pi(2048,8,e,n)}function wp(e,n){return pi(4,2,e,n)}function jp(e,n){return pi(4,4,e,n)}function kp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cp(e,n,t){return t=t!=null?t.concat([e]):null,pi(4,4,kp.bind(null,n,e),t)}function Ks(){}function Np(e,n){var t=en();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Bs(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Sp(e,n){var t=en();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Bs(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function Ep(e,n,t){return cr&21?(ln(t,n)||(t=zd(),te.lanes|=t,dr|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=t)}function Xh(e,n){var t=$;$=t!==0&&4>t?t:4,e(!0);var a=Wi.transition;Wi.transition={};try{e(!1),n()}finally{$=t,Wi.transition=a}}function Ap(){return en().memoizedState}function em(e,n,t){var a=Fn(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},Ip(e))Tp(n,t);else if(t=dp(e,n,t,a),t!==null){var i=Ee();sn(t,e,a,i),Rp(t,n,a)}}function nm(e,n,t){var a=Fn(e),i={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ip(e))Tp(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,l=o(s,t);if(i.hasEagerState=!0,i.eagerState=l,ln(l,s)){var c=n.interleaved;c===null?(i.next=i,Ls(n)):(i.next=c.next,c.next=i),n.interleaved=i;return}}catch{}finally{}t=dp(e,n,i,a),t!==null&&(i=Ee(),sn(t,e,a,i),Rp(t,n,a))}}function Ip(e){var n=e.alternate;return e===te||n!==null&&n===te}function Tp(e,n){xt=qa=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Rp(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,ws(e,t)}}var Ya={readContext:Xe,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},rm={readContext:Xe,useCallback:function(e,n){return un().memoizedState=[e,n===void 0?null:n],e},useContext:Xe,useEffect:Jl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ka(4194308,4,kp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ka(4194308,4,e,n)},useInsertionEffect:function(e,n){return ka(4,2,e,n)},useMemo:function(e,n){var t=un();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=un();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=em.bind(null,te,e),[a.memoizedState,e]},useRef:function(e){var n=un();return e={current:e},n.memoizedState=e},useState:Gl,useDebugValue:Ks,useDeferredValue:function(e){return un().memoizedState=e},useTransition:function(){var e=Gl(!1),n=e[0];return e=Xh.bind(null,e[1]),un().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=te,i=un();if(ee){if(t===void 0)throw Error(A(407));t=t()}else{if(t=n(),me===null)throw Error(A(349));cr&30||mp(a,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Jl(vp.bind(null,a,o,e),[e]),a.flags|=2048,_t(9,gp.bind(null,a,o,t,n),void 0,null),t},useId:function(){var e=un(),n=me.identifierPrefix;if(ee){var t=yn,a=bn;t=(a&~(1<<32-on(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=Lt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Qh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tm={readContext:Xe,useCallback:Np,useContext:Xe,useEffect:Zs,useImperativeHandle:Cp,useInsertionEffect:wp,useLayoutEffect:jp,useMemo:Sp,useReducer:qi,useRef:yp,useState:function(){return qi(Pt)},useDebugValue:Ks,useDeferredValue:function(e){var n=en();return Ep(n,ue.memoizedState,e)},useTransition:function(){var e=qi(Pt)[0],n=en().memoizedState;return[e,n]},useMutableSource:fp,useSyncExternalStore:hp,useId:Ap,unstable_isNewReconciler:!1},am={readContext:Xe,useCallback:Np,useContext:Xe,useEffect:Zs,useImperativeHandle:Cp,useInsertionEffect:wp,useLayoutEffect:jp,useMemo:Sp,useReducer:Yi,useRef:yp,useState:function(){return Yi(Pt)},useDebugValue:Ks,useDeferredValue:function(e){var n=en();return ue===null?n.memoizedState=e:Ep(n,ue.memoizedState,e)},useTransition:function(){var e=Yi(Pt)[0],n=en().memoizedState;return[e,n]},useMutableSource:fp,useSyncExternalStore:hp,useId:Ap,unstable_isNewReconciler:!1};function rn(e,n){if(e&&e.defaultProps){n=ae({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Po(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:ae({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ui={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Ee(),i=Fn(e),o=wn(a,i);o.payload=n,t!=null&&(o.callback=t),n=Mn(e,o,i),n!==null&&(sn(n,e,i,a),wa(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Ee(),i=Fn(e),o=wn(a,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Mn(e,o,i),n!==null&&(sn(n,e,i,a),wa(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ee(),a=Fn(e),i=wn(t,a);i.tag=2,n!=null&&(i.callback=n),n=Mn(e,i,a),n!==null&&(sn(n,e,a,t),wa(n,e,a))}};function Ql(e,n,t,a,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,s):n.prototype&&n.prototype.isPureReactComponent?!It(t,a)||!It(i,o):!0}function zp(e,n,t){var a=!1,i=Hn,o=n.contextType;return typeof o=="object"&&o!==null?o=Xe(o):(i=De(n)?sr:Ne.current,a=n.contextTypes,o=(a=a!=null)?_r(e,i):Hn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ui,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Xl(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&ui.enqueueReplaceState(n,n.state,null)}function _o(e,n,t,a){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ps(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Xe(o):(o=De(n)?sr:Ne.current,i.context=_r(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Po(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ui.enqueueReplaceState(i,i.state,null),$a(e,t,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,n){try{var t="",a=n;do t+=zf(a),a=a.return;while(a);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Gi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Vo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var im=typeof WeakMap=="function"?WeakMap:Map;function Op(e,n,t){t=wn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){Ja||(Ja=!0,qo=a),Vo(e,n)},t}function Dp(e,n,t){t=wn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;t.payload=function(){return a(i)},t.callback=function(){Vo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Vo(e,n),typeof a!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function ec(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new im;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(i.add(t),e=bm.bind(null,e,n,t),n.then(e,e))}function nc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function rc(e,n,t,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=wn(-1,1),n.tag=2,Mn(t,n,1))),t.lanes|=1),e)}var om=Sn.ReactCurrentOwner,ze=!1;function Se(e,n,t,a){n.child=e===null?cp(n,null,t,a):Mr(n,e.child,t,a)}function tc(e,n,t,a,i){t=t.render;var o=n.ref;return Dr(n,i),a=Fs(e,n,t,a,o,i),t=Us(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Nn(e,n,i)):(ee&&t&&Is(n),n.flags|=1,Se(e,n,a,i),n.child)}function ac(e,n,t,a,i){if(e===null){var o=t.type;return typeof o=="function"&&!Qs(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Lp(e,n,o,a,i)):(e=Ea(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:It,t(s,a)&&e.ref===n.ref)return Nn(e,n,i)}return n.flags|=1,e=Un(o,a),e.ref=n.ref,e.return=n,n.child=e}function Lp(e,n,t,a,i){if(e!==null){var o=e.memoizedProps;if(It(o,a)&&e.ref===n.ref)if(ze=!1,n.pendingProps=a=o,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return n.lanes=e.lanes,Nn(e,n,i)}return Mo(e,n,t,a,i)}function Pp(e,n,t){var a=n.pendingProps,i=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Ir,Me),Me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,q(Ir,Me),Me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:t,q(Ir,Me),Me|=a}else o!==null?(a=o.baseLanes|t,n.memoizedState=null):a=t,q(Ir,Me),Me|=a;return Se(e,n,i,t),n.child}function _p(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Mo(e,n,t,a,i){var o=De(t)?sr:Ne.current;return o=_r(n,o),Dr(n,i),t=Fs(e,n,t,a,o,i),a=Us(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Nn(e,n,i)):(ee&&a&&Is(n),n.flags|=1,Se(e,n,t,i),n.child)}function ic(e,n,t,a,i){if(De(t)){var o=!0;Fa(n)}else o=!1;if(Dr(n,i),n.stateNode===null)Ca(e,n),zp(n,t,a),_o(n,t,a,i),a=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var c=s.context,d=t.contextType;typeof d=="object"&&d!==null?d=Xe(d):(d=De(t)?sr:Ne.current,d=_r(n,d));var p=t.getDerivedStateFromProps,f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==a||c!==d)&&Xl(n,s,a,d),In=!1;var h=n.memoizedState;s.state=h,$a(n,a,s,i),c=n.memoizedState,l!==a||h!==c||Oe.current||In?(typeof p=="function"&&(Po(n,t,p,a),c=n.memoizedState),(l=In||Ql(n,t,l,a,h,c,d))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=c),s.props=a,s.state=c,s.context=d,a=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,pp(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:rn(n.type,l),s.props=d,f=n.pendingProps,h=s.context,c=t.contextType,typeof c=="object"&&c!==null?c=Xe(c):(c=De(t)?sr:Ne.current,c=_r(n,c));var y=t.getDerivedStateFromProps;(p=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||h!==c)&&Xl(n,s,a,c),In=!1,h=n.memoizedState,s.state=h,$a(n,a,s,i);var v=n.memoizedState;l!==f||h!==v||Oe.current||In?(typeof y=="function"&&(Po(n,t,y,a),v=n.memoizedState),(d=In||Ql(n,t,d,a,h,v,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,v,c)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=v),s.props=a,s.state=v,s.context=c,a=d):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),a=!1)}return Bo(e,n,t,a,o,i)}function Bo(e,n,t,a,i,o){_p(e,n);var s=(n.flags&128)!==0;if(!a&&!s)return i&&Kl(n,t,!1),Nn(e,n,o);a=n.stateNode,om.current=n;var l=s&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&s?(n.child=Mr(n,e.child,null,o),n.child=Mr(n,null,l,o)):Se(e,n,l,o),n.memoizedState=a.state,i&&Kl(n,t,!0),n.child}function Vp(e){var n=e.stateNode;n.pendingContext?Zl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Zl(e,n.context,!1),_s(e,n.containerInfo)}function oc(e,n,t,a,i){return Vr(),Rs(i),n.flags|=256,Se(e,n,t,a),n.child}var Fo={dehydrated:null,treeContext:null,retryLane:0};function Uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mp(e,n,t){var a=n.pendingProps,i=re.current,o=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(re,i&1),e===null)return Do(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=a.children,e=a.fallback,o?(a=n.mode,o=n.child,s={mode:"hidden",children:s},!(a&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=mi(s,a,0,null),e=ir(e,a,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Uo(t),n.memoizedState=Fo,e):Hs(n,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return sm(e,n,s,a,l,i,t);if(o){o=a.fallback,s=n.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:a.children};return!(s&1)&&n.child!==i?(a=n.child,a.childLanes=0,a.pendingProps=c,n.deletions=null):(a=Un(i,c),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Un(l,o):(o=ir(o,s,t,null),o.flags|=2),o.return=n,a.return=n,a.sibling=o,n.child=a,a=o,o=n.child,s=e.child.memoizedState,s=s===null?Uo(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=Fo,a}return o=e.child,e=o.sibling,a=Un(o,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Hs(e,n){return n=mi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function da(e,n,t,a){return a!==null&&Rs(a),Mr(n,e.child,null,t),e=Hs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sm(e,n,t,a,i,o,s){if(t)return n.flags&256?(n.flags&=-257,a=Gi(Error(A(422))),da(e,n,s,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=a.fallback,i=n.mode,a=mi({mode:"visible",children:a.children},i,0,null),o=ir(o,i,s,null),o.flags|=2,a.return=n,o.return=n,a.sibling=o,n.child=a,n.mode&1&&Mr(n,e.child,null,s),n.child.memoizedState=Uo(s),n.memoizedState=Fo,o);if(!(n.mode&1))return da(e,n,s,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,o=Error(A(419)),a=Gi(o,a,void 0),da(e,n,s,a)}if(l=(s&e.childLanes)!==0,ze||l){if(a=me,a!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Cn(e,i),sn(a,e,i,-1))}return Js(),a=Gi(Error(A(421))),da(e,n,s,a)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=ym.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Be=Vn(i.nextSibling),Fe=n,ee=!0,an=null,e!==null&&(Ye[Ge++]=bn,Ye[Ge++]=yn,Ye[Ge++]=lr,bn=e.id,yn=e.overflow,lr=n),n=Hs(n,a.children),n.flags|=4096,n)}function sc(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Lo(e.return,n,t)}function Ji(e,n,t,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=i)}function Bp(e,n,t){var a=n.pendingProps,i=a.revealOrder,o=a.tail;if(Se(e,n,a.children,t),a=re.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sc(e,t,n);else if(e.tag===19)sc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(q(re,a),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Wa(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ji(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Wa(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ji(n,!0,t,null,o);break;case"together":Ji(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ca(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Nn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),dr|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(A(153));if(n.child!==null){for(e=n.child,t=Un(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Un(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function lm(e,n,t){switch(n.tag){case 3:Vp(n),Vr();break;case 5:up(n);break;case 1:De(n.type)&&Fa(n);break;case 4:_s(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,i=n.memoizedProps.value;q(Ka,a._currentValue),a._currentValue=i;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(q(re,re.current&1),n.flags|=128,null):t&n.child.childLanes?Mp(e,n,t):(q(re,re.current&1),e=Nn(e,n,t),e!==null?e.sibling:null);q(re,re.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return Bp(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(re,re.current),a)break;return null;case 22:case 23:return n.lanes=0,Pp(e,n,t)}return Nn(e,n,t)}var Fp,Zo,Up,Zp;Fp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Zo=function(){};Up=function(e,n,t,a){var i=e.memoizedProps;if(i!==a){e=n.stateNode,rr(mn.current);var o=null;switch(t){case"input":i=po(e,i),a=po(e,a),o=[];break;case"select":i=ae({},i,{value:void 0}),a=ae({},a,{value:void 0}),o=[];break;case"textarea":i=ho(e,i),a=ho(e,a),o=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ma)}go(t,a);var s;t=null;for(d in i)if(!a.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(s in l)l.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(jt.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in a){var c=a[d];if(l=i!=null?i[d]:void 0,a.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(t||(t={}),t[s]=c[s])}else t||(o||(o=[]),o.push(d,t)),t=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(jt.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&G("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}t&&(o=o||[]).push("style",t);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};Zp=function(e,n,t,a){t!==a&&(n.flags|=4)};function at(e,n){if(!ee)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function we(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function cm(e,n,t){var a=n.pendingProps;switch(Ts(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(n),null;case 1:return De(n.type)&&Ba(),we(n),null;case 3:return a=n.stateNode,Br(),J(Oe),J(Ne),Ms(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(la(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,an!==null&&(Jo(an),an=null))),Zo(e,n),we(n),null;case 5:Vs(n);var i=rr(Dt.current);if(t=n.type,e!==null&&n.stateNode!=null)Up(e,n,t,a,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(A(166));return we(n),null}if(e=rr(mn.current),la(n)){a=n.stateNode,t=n.type;var o=n.memoizedProps;switch(a[fn]=n,a[zt]=o,e=(n.mode&1)!==0,t){case"dialog":G("cancel",a),G("close",a);break;case"iframe":case"object":case"embed":G("load",a);break;case"video":case"audio":for(i=0;i<ut.length;i++)G(ut[i],a);break;case"source":G("error",a);break;case"img":case"image":case"link":G("error",a),G("load",a);break;case"details":G("toggle",a);break;case"input":gl(a,o),G("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},G("invalid",a);break;case"textarea":xl(a,o),G("invalid",a)}go(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?a.textContent!==l&&(o.suppressHydrationWarning!==!0&&sa(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&sa(a.textContent,l,e),i=["children",""+l]):jt.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&G("scroll",a)}switch(t){case"input":Xt(a),vl(a,o,!0);break;case"textarea":Xt(a),bl(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=Ma)}a=i,n.updateQueue=a,a!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(t,{is:a.is}):(e=s.createElement(t),t==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,t),e[fn]=n,e[zt]=a,Fp(e,n,!1,!1),n.stateNode=e;e:{switch(s=vo(t,a),t){case"dialog":G("cancel",e),G("close",e),i=a;break;case"iframe":case"object":case"embed":G("load",e),i=a;break;case"video":case"audio":for(i=0;i<ut.length;i++)G(ut[i],e);i=a;break;case"source":G("error",e),i=a;break;case"img":case"image":case"link":G("error",e),G("load",e),i=a;break;case"details":G("toggle",e),i=a;break;case"input":gl(e,a),i=po(e,a),G("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=ae({},a,{value:void 0}),G("invalid",e);break;case"textarea":xl(e,a),i=ho(e,a),G("invalid",e);break;default:i=a}go(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?yd(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&xd(e,c)):o==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&kt(e,c):typeof c=="number"&&kt(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jt.hasOwnProperty(o)?c!=null&&o==="onScroll"&&G("scroll",e):c!=null&&ms(e,o,c,s))}switch(t){case"input":Xt(e),vl(e,a,!1);break;case"textarea":Xt(e),bl(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Kn(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?Tr(e,!!a.multiple,o,!1):a.defaultValue!=null&&Tr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ma)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return we(n),null;case 6:if(e&&n.stateNode!=null)Zp(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(A(166));if(t=rr(Dt.current),rr(mn.current),la(n)){if(a=n.stateNode,t=n.memoizedProps,a[fn]=n,(o=a.nodeValue!==t)&&(e=Fe,e!==null))switch(e.tag){case 3:sa(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sa(a.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[fn]=n,n.stateNode=a}return we(n),null;case 13:if(J(re),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Be!==null&&n.mode&1&&!(n.flags&128))sp(),Vr(),n.flags|=98560,o=!1;else if(o=la(n),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[fn]=n}else Vr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;we(n),o=!1}else an!==null&&(Jo(an),an=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||re.current&1?fe===0&&(fe=3):Js())),n.updateQueue!==null&&(n.flags|=4),we(n),null);case 4:return Br(),Zo(e,n),e===null&&Tt(n.stateNode.containerInfo),we(n),null;case 10:return Ds(n.type._context),we(n),null;case 17:return De(n.type)&&Ba(),we(n),null;case 19:if(J(re),o=n.memoizedState,o===null)return we(n),null;if(a=(n.flags&128)!==0,s=o.rendering,s===null)if(a)at(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Wa(e),s!==null){for(n.flags|=128,at(o,!1),a=s.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)o=t,e=a,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return q(re,re.current&1|2),n.child}e=e.sibling}o.tail!==null&&ce()>Ur&&(n.flags|=128,a=!0,at(o,!1),n.lanes=4194304)}else{if(!a)if(e=Wa(s),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),at(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ee)return we(n),null}else 2*ce()-o.renderingStartTime>Ur&&t!==1073741824&&(n.flags|=128,a=!0,at(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ce(),n.sibling=null,t=re.current,q(re,a?t&1|2:t&1),n):(we(n),null);case 22:case 23:return Gs(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?Me&1073741824&&(we(n),n.subtreeFlags&6&&(n.flags|=8192)):we(n),null;case 24:return null;case 25:return null}throw Error(A(156,n.tag))}function dm(e,n){switch(Ts(n),n.tag){case 1:return De(n.type)&&Ba(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Br(),J(Oe),J(Ne),Ms(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Vs(n),null;case 13:if(J(re),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(A(340));Vr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(re),null;case 4:return Br(),null;case 10:return Ds(n.type._context),null;case 22:case 23:return Gs(),null;case 24:return null;default:return null}}var pa=!1,je=!1,pm=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ar(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){oe(e,n,a)}else t.current=null}function Ko(e,n,t){try{t()}catch(a){oe(e,n,a)}}var lc=!1;function um(e,n){if(Eo=Pa,e=qd(),As(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,l=-1,c=-1,d=0,p=0,f=e,h=null;n:for(;;){for(var y;f!==t||i!==0&&f.nodeType!==3||(l=s+i),f!==o||a!==0&&f.nodeType!==3||(c=s+a),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)h=f,f=y;for(;;){if(f===e)break n;if(h===t&&++d===i&&(l=s),h===o&&++p===a&&(c=s),(y=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=y}t=l===-1||c===-1?null:{start:l,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ao={focusedElem:e,selectionRange:t},Pa=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,j=v.memoizedState,m=n.stateNode,u=m.getSnapshotBeforeUpdate(n.elementType===n.type?x:rn(n.type,x),j);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(b){oe(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return v=lc,lc=!1,v}function bt(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ko(n,t,o)}i=i.next}while(i!==a)}}function fi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function Ho(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Kp(e){var n=e.alternate;n!==null&&(e.alternate=null,Kp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[fn],delete n[zt],delete n[Ro],delete n[qh],delete n[Yh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hp(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ma));else if(a!==4&&(e=e.child,e!==null))for($o(e,n,t),e=e.sibling;e!==null;)$o(e,n,t),e=e.sibling}function Wo(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Wo(e,n,t),e=e.sibling;e!==null;)Wo(e,n,t),e=e.sibling}var ve=null,tn=!1;function En(e,n,t){for(t=t.child;t!==null;)$p(e,n,t),t=t.sibling}function $p(e,n,t){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(ii,t)}catch{}switch(t.tag){case 5:je||Ar(t,n);case 6:var a=ve,i=tn;ve=null,En(e,n,t),ve=a,tn=i,ve!==null&&(tn?(e=ve,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ve.removeChild(t.stateNode));break;case 18:ve!==null&&(tn?(e=ve,t=t.stateNode,e.nodeType===8?Ki(e.parentNode,t):e.nodeType===1&&Ki(e,t),Et(e)):Ki(ve,t.stateNode));break;case 4:a=ve,i=tn,ve=t.stateNode.containerInfo,tn=!0,En(e,n,t),ve=a,tn=i;break;case 0:case 11:case 14:case 15:if(!je&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ko(t,n,s),i=i.next}while(i!==a)}En(e,n,t);break;case 1:if(!je&&(Ar(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){oe(t,n,l)}En(e,n,t);break;case 21:En(e,n,t);break;case 22:t.mode&1?(je=(a=je)||t.memoizedState!==null,En(e,n,t),je=a):En(e,n,t);break;default:En(e,n,t)}}function dc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pm),n.forEach(function(a){var i=wm.bind(null,e,a);t.has(a)||(t.add(a),a.then(i,i))})}}function nn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];try{var o=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,tn=!1;break e;case 3:ve=l.stateNode.containerInfo,tn=!0;break e;case 4:ve=l.stateNode.containerInfo,tn=!0;break e}l=l.return}if(ve===null)throw Error(A(160));$p(o,s,i),ve=null,tn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){oe(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wp(n,e),n=n.sibling}function Wp(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(n,e),dn(e),a&4){try{bt(3,e,e.return),fi(3,e)}catch(x){oe(e,e.return,x)}try{bt(5,e,e.return)}catch(x){oe(e,e.return,x)}}break;case 1:nn(n,e),dn(e),a&512&&t!==null&&Ar(t,t.return);break;case 5:if(nn(n,e),dn(e),a&512&&t!==null&&Ar(t,t.return),e.flags&32){var i=e.stateNode;try{kt(i,"")}catch(x){oe(e,e.return,x)}}if(a&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&md(i,o),vo(l,s);var d=vo(l,o);for(s=0;s<c.length;s+=2){var p=c[s],f=c[s+1];p==="style"?yd(i,f):p==="dangerouslySetInnerHTML"?xd(i,f):p==="children"?kt(i,f):ms(i,p,f,d)}switch(l){case"input":uo(i,o);break;case"textarea":gd(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Tr(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Tr(i,!!o.multiple,o.defaultValue,!0):Tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[zt]=o}catch(x){oe(e,e.return,x)}}break;case 6:if(nn(n,e),dn(e),a&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){oe(e,e.return,x)}}break;case 3:if(nn(n,e),dn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Et(n.containerInfo)}catch(x){oe(e,e.return,x)}break;case 4:nn(n,e),dn(e);break;case 13:nn(n,e),dn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(qs=ce())),a&4&&dc(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(je=(d=je)||p,nn(n,e),je=d):nn(n,e),dn(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(O=e,p=e.child;p!==null;){for(f=O=p;O!==null;){switch(h=O,y=h.child,h.tag){case 0:case 11:case 14:case 15:bt(4,h,h.return);break;case 1:Ar(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){a=h,t=h.return;try{n=a,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(x){oe(a,t,x)}}break;case 5:Ar(h,h.return);break;case 22:if(h.memoizedState!==null){uc(f);continue}}y!==null?(y.return=h,O=y):uc(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{i=f.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=bd("display",s))}catch(x){oe(e,e.return,x)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(x){oe(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:nn(n,e),dn(e),a&4&&dc(e);break;case 21:break;default:nn(n,e),dn(e)}}function dn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Hp(t)){var a=t;break e}t=t.return}throw Error(A(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(kt(i,""),a.flags&=-33);var o=cc(e);Wo(e,o,i);break;case 3:case 4:var s=a.stateNode.containerInfo,l=cc(e);$o(e,l,s);break;default:throw Error(A(161))}}catch(c){oe(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function fm(e,n,t){O=e,qp(e)}function qp(e,n,t){for(var a=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&a){var s=i.memoizedState!==null||pa;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||je;l=pa;var d=je;if(pa=s,(je=c)&&!d)for(O=i;O!==null;)s=O,c=s.child,s.tag===22&&s.memoizedState!==null?fc(i):c!==null?(c.return=s,O=c):fc(i);for(;o!==null;)O=o,qp(o),o=o.sibling;O=i,pa=l,je=d}pc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):pc(e)}}function pc(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:je||fi(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!je)if(t===null)a.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:rn(n.type,t.memoizedProps);a.componentDidUpdate(i,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Yl(n,o,a);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Yl(n,s,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&Et(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}je||n.flags&512&&Ho(n)}catch(h){oe(n,n.return,h)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function uc(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function fc(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{fi(4,n)}catch(c){oe(n,t,c)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var i=n.return;try{a.componentDidMount()}catch(c){oe(n,i,c)}}var o=n.return;try{Ho(n)}catch(c){oe(n,o,c)}break;case 5:var s=n.return;try{Ho(n)}catch(c){oe(n,s,c)}}}catch(c){oe(n,n.return,c)}if(n===e){O=null;break}var l=n.sibling;if(l!==null){l.return=n.return,O=l;break}O=n.return}}var hm=Math.ceil,Ga=Sn.ReactCurrentDispatcher,$s=Sn.ReactCurrentOwner,Qe=Sn.ReactCurrentBatchConfig,K=0,me=null,pe=null,xe=0,Me=0,Ir=Wn(0),fe=0,Vt=null,dr=0,hi=0,Ws=0,yt=null,Re=null,qs=0,Ur=1/0,vn=null,Ja=!1,qo=null,Bn=null,ua=!1,On=null,Qa=0,wt=0,Yo=null,Na=-1,Sa=0;function Ee(){return K&6?ce():Na!==-1?Na:Na=ce()}function Fn(e){return e.mode&1?K&2&&xe!==0?xe&-xe:Jh.transition!==null?(Sa===0&&(Sa=zd()),Sa):(e=$,e!==0||(e=window.event,e=e===void 0?16:Md(e.type)),e):1}function sn(e,n,t,a){if(50<wt)throw wt=0,Yo=null,Error(A(185));Zt(e,t,a),(!(K&2)||e!==me)&&(e===me&&(!(K&2)&&(hi|=t),fe===4&&Rn(e,xe)),Le(e,a),t===1&&K===0&&!(n.mode&1)&&(Ur=ce()+500,di&&qn()))}function Le(e,n){var t=e.callbackNode;Jf(e,n);var a=La(e,e===me?xe:0);if(a===0)t!==null&&jl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&jl(t),n===1)e.tag===0?Gh(hc.bind(null,e)):ap(hc.bind(null,e)),$h(function(){!(K&6)&&qn()}),t=null;else{switch(Od(a)){case 1:t=ys;break;case 4:t=Td;break;case 16:t=Da;break;case 536870912:t=Rd;break;default:t=Da}t=ru(t,Yp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Yp(e,n){if(Na=-1,Sa=0,K&6)throw Error(A(327));var t=e.callbackNode;if(Lr()&&e.callbackNode!==t)return null;var a=La(e,e===me?xe:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=Xa(e,a);else{n=a;var i=K;K|=2;var o=Jp();(me!==e||xe!==n)&&(vn=null,Ur=ce()+500,ar(e,n));do try{vm();break}catch(l){Gp(e,l)}while(!0);Os(),Ga.current=o,K=i,pe!==null?n=0:(me=null,xe=0,n=fe)}if(n!==0){if(n===2&&(i=jo(e),i!==0&&(a=i,n=Go(e,i))),n===1)throw t=Vt,ar(e,0),Rn(e,a),Le(e,ce()),t;if(n===6)Rn(e,a);else{if(i=e.current.alternate,!(a&30)&&!mm(i)&&(n=Xa(e,a),n===2&&(o=jo(e),o!==0&&(a=o,n=Go(e,o))),n===1))throw t=Vt,ar(e,0),Rn(e,a),Le(e,ce()),t;switch(e.finishedWork=i,e.finishedLanes=a,n){case 0:case 1:throw Error(A(345));case 2:Xn(e,Re,vn);break;case 3:if(Rn(e,a),(a&130023424)===a&&(n=qs+500-ce(),10<n)){if(La(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){Ee(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=To(Xn.bind(null,e,Re,vn),n);break}Xn(e,Re,vn);break;case 4:if(Rn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,i=-1;0<a;){var s=31-on(a);o=1<<s,s=n[s],s>i&&(i=s),a&=~o}if(a=i,a=ce()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*hm(a/1960))-a,10<a){e.timeoutHandle=To(Xn.bind(null,e,Re,vn),a);break}Xn(e,Re,vn);break;case 5:Xn(e,Re,vn);break;default:throw Error(A(329))}}}return Le(e,ce()),e.callbackNode===t?Yp.bind(null,e):null}function Go(e,n){var t=yt;return e.current.memoizedState.isDehydrated&&(ar(e,n).flags|=256),e=Xa(e,n),e!==2&&(n=Re,Re=t,n!==null&&Jo(n)),e}function Jo(e){Re===null?Re=e:Re.push.apply(Re,e)}function mm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var i=t[a],o=i.getSnapshot;i=i.value;try{if(!ln(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rn(e,n){for(n&=~Ws,n&=~hi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-on(n),a=1<<t;e[t]=-1,n&=~a}}function hc(e){if(K&6)throw Error(A(327));Lr();var n=La(e,0);if(!(n&1))return Le(e,ce()),null;var t=Xa(e,n);if(e.tag!==0&&t===2){var a=jo(e);a!==0&&(n=a,t=Go(e,a))}if(t===1)throw t=Vt,ar(e,0),Rn(e,n),Le(e,ce()),t;if(t===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Xn(e,Re,vn),Le(e,ce()),null}function Ys(e,n){var t=K;K|=1;try{return e(n)}finally{K=t,K===0&&(Ur=ce()+500,di&&qn())}}function pr(e){On!==null&&On.tag===0&&!(K&6)&&Lr();var n=K;K|=1;var t=Qe.transition,a=$;try{if(Qe.transition=null,$=1,e)return e()}finally{$=a,Qe.transition=t,K=n,!(K&6)&&qn()}}function Gs(){Me=Ir.current,J(Ir)}function ar(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Hh(t)),pe!==null)for(t=pe.return;t!==null;){var a=t;switch(Ts(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ba();break;case 3:Br(),J(Oe),J(Ne),Ms();break;case 5:Vs(a);break;case 4:Br();break;case 13:J(re);break;case 19:J(re);break;case 10:Ds(a.type._context);break;case 22:case 23:Gs()}t=t.return}if(me=e,pe=e=Un(e.current,null),xe=Me=n,fe=0,Vt=null,Ws=hi=dr=0,Re=yt=null,nr!==null){for(n=0;n<nr.length;n++)if(t=nr[n],a=t.interleaved,a!==null){t.interleaved=null;var i=a.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,a.next=s}t.pending=a}nr=null}return e}function Gp(e,n){do{var t=pe;try{if(Os(),ja.current=Ya,qa){for(var a=te.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}qa=!1}if(cr=0,he=ue=te=null,xt=!1,Lt=0,$s.current=null,t===null||t.return===null){fe=1,Vt=n,pe=null;break}e:{var o=e,s=t.return,l=t,c=n;if(n=xe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=l,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=nc(s);if(y!==null){y.flags&=-257,rc(y,s,l,o,n),y.mode&1&&ec(o,d,n),n=y,c=d;var v=n.updateQueue;if(v===null){var x=new Set;x.add(c),n.updateQueue=x}else v.add(c);break e}else{if(!(n&1)){ec(o,d,n),Js();break e}c=Error(A(426))}}else if(ee&&l.mode&1){var j=nc(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),rc(j,s,l,o,n),Rs(Fr(c,l));break e}}o=c=Fr(c,l),fe!==4&&(fe=2),yt===null?yt=[o]:yt.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var m=Op(o,c,n);ql(o,m);break e;case 1:l=c;var u=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Bn===null||!Bn.has(g)))){o.flags|=65536,n&=-n,o.lanes|=n;var b=Dp(o,l,n);ql(o,b);break e}}o=o.return}while(o!==null)}Xp(t)}catch(C){n=C,pe===t&&t!==null&&(pe=t=t.return);continue}break}while(!0)}function Jp(){var e=Ga.current;return Ga.current=Ya,e===null?Ya:e}function Js(){(fe===0||fe===3||fe===2)&&(fe=4),me===null||!(dr&268435455)&&!(hi&268435455)||Rn(me,xe)}function Xa(e,n){var t=K;K|=2;var a=Jp();(me!==e||xe!==n)&&(vn=null,ar(e,n));do try{gm();break}catch(i){Gp(e,i)}while(!0);if(Os(),K=t,Ga.current=a,pe!==null)throw Error(A(261));return me=null,xe=0,fe}function gm(){for(;pe!==null;)Qp(pe)}function vm(){for(;pe!==null&&!Uf();)Qp(pe)}function Qp(e){var n=nu(e.alternate,e,Me);e.memoizedProps=e.pendingProps,n===null?Xp(e):pe=n,$s.current=null}function Xp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=dm(t,n),t!==null){t.flags&=32767,pe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,pe=null;return}}else if(t=cm(t,n,Me),t!==null){pe=t;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);fe===0&&(fe=5)}function Xn(e,n,t){var a=$,i=Qe.transition;try{Qe.transition=null,$=1,xm(e,n,t,a)}finally{Qe.transition=i,$=a}return null}function xm(e,n,t,a){do Lr();while(On!==null);if(K&6)throw Error(A(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Qf(e,o),e===me&&(pe=me=null,xe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ua||(ua=!0,ru(Da,function(){return Lr(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Qe.transition,Qe.transition=null;var s=$;$=1;var l=K;K|=4,$s.current=null,um(e,t),Wp(t,e),Vh(Ao),Pa=!!Eo,Ao=Eo=null,e.current=t,fm(t),Zf(),K=l,$=s,Qe.transition=o}else e.current=t;if(ua&&(ua=!1,On=e,Qa=i),o=e.pendingLanes,o===0&&(Bn=null),$f(t.stateNode),Le(e,ce()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],a(i.value,{componentStack:i.stack,digest:i.digest});if(Ja)throw Ja=!1,e=qo,qo=null,e;return Qa&1&&e.tag!==0&&Lr(),o=e.pendingLanes,o&1?e===Yo?wt++:(wt=0,Yo=e):wt=0,qn(),null}function Lr(){if(On!==null){var e=Od(Qa),n=Qe.transition,t=$;try{if(Qe.transition=null,$=16>e?16:e,On===null)var a=!1;else{if(e=On,On=null,Qa=0,K&6)throw Error(A(331));var i=K;for(K|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(O=d;O!==null;){var p=O;switch(p.tag){case 0:case 11:case 15:bt(8,p,o)}var f=p.child;if(f!==null)f.return=p,O=f;else for(;O!==null;){p=O;var h=p.sibling,y=p.return;if(Kp(p),p===d){O=null;break}if(h!==null){h.return=y,O=h;break}O=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bt(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,O=m;break e}O=o.return}}var u=e.current;for(O=u;O!==null;){s=O;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,O=g;else e:for(s=u;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fi(9,l)}}catch(C){oe(l,l.return,C)}if(l===s){O=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,O=b;break e}O=l.return}}if(K=i,qn(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(ii,e)}catch{}a=!0}return a}finally{$=t,Qe.transition=n}}return!1}function mc(e,n,t){n=Fr(t,n),n=Op(e,n,1),e=Mn(e,n,1),n=Ee(),e!==null&&(Zt(e,1,n),Le(e,n))}function oe(e,n,t){if(e.tag===3)mc(e,e,t);else for(;n!==null;){if(n.tag===3){mc(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Bn===null||!Bn.has(a))){e=Fr(t,e),e=Dp(n,e,1),n=Mn(n,e,1),e=Ee(),n!==null&&(Zt(n,1,e),Le(n,e));break}}n=n.return}}function bm(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=Ee(),e.pingedLanes|=e.suspendedLanes&t,me===e&&(xe&t)===t&&(fe===4||fe===3&&(xe&130023424)===xe&&500>ce()-qs?ar(e,0):Ws|=t),Le(e,n)}function eu(e,n){n===0&&(e.mode&1?(n=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):n=1);var t=Ee();e=Cn(e,n),e!==null&&(Zt(e,n,t),Le(e,t))}function ym(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),eu(e,t)}function wm(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(A(314))}a!==null&&a.delete(n),eu(e,t)}var nu;nu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Oe.current)ze=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ze=!1,lm(e,n,t);ze=!!(e.flags&131072)}else ze=!1,ee&&n.flags&1048576&&ip(n,Za,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Ca(e,n),e=n.pendingProps;var i=_r(n,Ne.current);Dr(n,t),i=Fs(null,n,a,e,i,t);var o=Us();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,De(a)?(o=!0,Fa(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ps(n),i.updater=ui,n.stateNode=i,i._reactInternals=n,_o(n,a,e,t),n=Bo(null,n,a,!0,o,t)):(n.tag=0,ee&&o&&Is(n),Se(null,n,i,t),n=n.child),n;case 16:a=n.elementType;e:{switch(Ca(e,n),e=n.pendingProps,i=a._init,a=i(a._payload),n.type=a,i=n.tag=km(a),e=rn(a,e),i){case 0:n=Mo(null,n,a,e,t);break e;case 1:n=ic(null,n,a,e,t);break e;case 11:n=tc(null,n,a,e,t);break e;case 14:n=ac(null,n,a,rn(a.type,e),t);break e}throw Error(A(306,a,""))}return n;case 0:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:rn(a,i),Mo(e,n,a,i,t);case 1:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:rn(a,i),ic(e,n,a,i,t);case 3:e:{if(Vp(n),e===null)throw Error(A(387));a=n.pendingProps,o=n.memoizedState,i=o.element,pp(e,n),$a(n,a,null,t);var s=n.memoizedState;if(a=s.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Fr(Error(A(423)),n),n=oc(e,n,a,t,i);break e}else if(a!==i){i=Fr(Error(A(424)),n),n=oc(e,n,a,t,i);break e}else for(Be=Vn(n.stateNode.containerInfo.firstChild),Fe=n,ee=!0,an=null,t=cp(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vr(),a===i){n=Nn(e,n,t);break e}Se(e,n,a,t)}n=n.child}return n;case 5:return up(n),e===null&&Do(n),a=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Io(a,i)?s=null:o!==null&&Io(a,o)&&(n.flags|=32),_p(e,n),Se(e,n,s,t),n.child;case 6:return e===null&&Do(n),null;case 13:return Mp(e,n,t);case 4:return _s(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Mr(n,null,a,t):Se(e,n,a,t),n.child;case 11:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:rn(a,i),tc(e,n,a,i,t);case 7:return Se(e,n,n.pendingProps,t),n.child;case 8:return Se(e,n,n.pendingProps.children,t),n.child;case 12:return Se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,q(Ka,a._currentValue),a._currentValue=s,o!==null)if(ln(o.value,s)){if(o.children===i.children&&!Oe.current){n=Nn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===a){if(o.tag===1){c=wn(-1,t&-t),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),Lo(o.return,t,n),l.lanes|=t;break}c=c.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Lo(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Se(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,a=n.pendingProps.children,Dr(n,t),i=Xe(i),a=a(i),n.flags|=1,Se(e,n,a,t),n.child;case 14:return a=n.type,i=rn(a,n.pendingProps),i=rn(a.type,i),ac(e,n,a,i,t);case 15:return Lp(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:rn(a,i),Ca(e,n),n.tag=1,De(a)?(e=!0,Fa(n)):e=!1,Dr(n,t),zp(n,a,i),_o(n,a,i,t),Bo(null,n,a,!0,e,t);case 19:return Bp(e,n,t);case 22:return Pp(e,n,t)}throw Error(A(156,n.tag))};function ru(e,n){return Id(e,n)}function jm(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,n,t,a){return new jm(e,n,t,a)}function Qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function km(e){if(typeof e=="function")return Qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vs)return 11;if(e===xs)return 14}return 2}function Un(e,n){var t=e.alternate;return t===null?(t=Je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ea(e,n,t,a,i,o){var s=2;if(a=e,typeof e=="function")Qs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case br:return ir(t.children,i,o,n);case gs:s=8,i|=8;break;case oo:return e=Je(12,t,n,i|2),e.elementType=oo,e.lanes=o,e;case so:return e=Je(13,t,n,i),e.elementType=so,e.lanes=o,e;case lo:return e=Je(19,t,n,i),e.elementType=lo,e.lanes=o,e;case ud:return mi(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dd:s=10;break e;case pd:s=9;break e;case vs:s=11;break e;case xs:s=14;break e;case An:s=16,a=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return n=Je(s,t,n,i),n.elementType=e,n.type=a,n.lanes=o,n}function ir(e,n,t,a){return e=Je(7,e,a,n),e.lanes=t,e}function mi(e,n,t,a){return e=Je(22,e,a,n),e.elementType=ud,e.lanes=t,e.stateNode={isHidden:!1},e}function Qi(e,n,t){return e=Je(6,e,null,n),e.lanes=t,e}function Xi(e,n,t){return n=Je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Cm(e,n,t,a,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oi(0),this.expirationTimes=Oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xs(e,n,t,a,i,o,s,l,c){return e=new Cm(e,n,t,l,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Je(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(o),e}function Nm(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function tu(e){if(!e)return Hn;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(A(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(De(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(A(171))}if(e.tag===1){var t=e.type;if(De(t))return tp(e,t,n)}return n}function au(e,n,t,a,i,o,s,l,c){return e=Xs(t,a,!0,e,i,o,s,l,c),e.context=tu(null),t=e.current,a=Ee(),i=Fn(t),o=wn(a,i),o.callback=n??null,Mn(t,o,i),e.current.lanes=i,Zt(e,i,a),Le(e,a),e}function gi(e,n,t,a){var i=n.current,o=Ee(),s=Fn(i);return t=tu(t),n.context===null?n.context=t:n.pendingContext=t,n=wn(o,s),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=Mn(i,n,s),e!==null&&(sn(e,i,s,o),wa(e,i,s)),s}function ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function el(e,n){gc(e,n),(e=e.alternate)&&gc(e,n)}function Sm(){return null}var iu=typeof reportError=="function"?reportError:function(e){console.error(e)};function nl(e){this._internalRoot=e}vi.prototype.render=nl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(A(409));gi(e,n,null,null)};vi.prototype.unmount=nl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pr(function(){gi(null,e,null,null)}),n[kn]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Tn.length&&n!==0&&n<Tn[t].priority;t++);Tn.splice(t,0,e),t===0&&Vd(e)}};function rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vc(){}function Em(e,n,t,a,i){if(i){if(typeof a=="function"){var o=a;a=function(){var d=ei(s);o.call(d)}}var s=au(n,a,e,0,null,!1,!1,"",vc);return e._reactRootContainer=s,e[kn]=s.current,Tt(e.nodeType===8?e.parentNode:e),pr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var d=ei(c);l.call(d)}}var c=Xs(e,0,!1,null,null,!1,!1,"",vc);return e._reactRootContainer=c,e[kn]=c.current,Tt(e.nodeType===8?e.parentNode:e),pr(function(){gi(n,c,t,a)}),c}function bi(e,n,t,a,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=ei(s);l.call(c)}}gi(n,s,e,i)}else s=Em(t,n,e,i,a);return ei(s)}Dd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=pt(n.pendingLanes);t!==0&&(ws(n,t|1),Le(n,ce()),!(K&6)&&(Ur=ce()+500,qn()))}break;case 13:pr(function(){var a=Cn(e,1);if(a!==null){var i=Ee();sn(a,e,1,i)}}),el(e,1)}};js=function(e){if(e.tag===13){var n=Cn(e,134217728);if(n!==null){var t=Ee();sn(n,e,134217728,t)}el(e,134217728)}};Ld=function(e){if(e.tag===13){var n=Fn(e),t=Cn(e,n);if(t!==null){var a=Ee();sn(t,e,n,a)}el(e,n)}};Pd=function(){return $};_d=function(e,n){var t=$;try{return $=e,n()}finally{$=t}};bo=function(e,n,t){switch(n){case"input":if(uo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=ci(a);if(!i)throw Error(A(90));hd(a),uo(a,i)}}}break;case"textarea":gd(e,t);break;case"select":n=t.value,n!=null&&Tr(e,!!t.multiple,n,!1)}};kd=Ys;Cd=pr;var Am={usingClientEntryPoint:!1,Events:[Ht,kr,ci,wd,jd,Ys]},it={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Im={bundleType:it.bundleType,version:it.version,rendererPackageName:it.rendererPackageName,rendererConfig:it.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ed(e),e===null?null:e.stateNode},findFiberByHostInstance:it.findFiberByHostInstance||Sm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{ii=fa.inject(Im),hn=fa}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Am;Ze.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rl(n))throw Error(A(200));return Nm(e,n,null,t)};Ze.createRoot=function(e,n){if(!rl(e))throw Error(A(299));var t=!1,a="",i=iu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Xs(e,1,!1,null,null,t,!1,a,i),e[kn]=n.current,Tt(e.nodeType===8?e.parentNode:e),new nl(n)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Ed(n),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return pr(e)};Ze.hydrate=function(e,n,t){if(!xi(n))throw Error(A(200));return bi(null,e,n,!0,t)};Ze.hydrateRoot=function(e,n,t){if(!rl(e))throw Error(A(405));var a=t!=null&&t.hydratedSources||null,i=!1,o="",s=iu;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=au(n,null,e,1,t??null,i,!1,o,s),e[kn]=n.current,Tt(e),a)for(e=0;e<a.length;e++)t=a[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new vi(n)};Ze.render=function(e,n,t){if(!xi(n))throw Error(A(200));return bi(null,e,n,!1,t)};Ze.unmountComponentAtNode=function(e){if(!xi(e))throw Error(A(40));return e._reactRootContainer?(pr(function(){bi(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};Ze.unstable_batchedUpdates=Ys;Ze.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!xi(t))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return bi(e,n,t,!1,a)};Ze.version="18.3.1-next-f1338f8080-20240426";function ou(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ou)}catch(e){console.error(e)}}ou(),od.exports=Ze;var Tm=od.exports,su,xc=Tm;su=xc.createRoot,xc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mt(){return Mt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Mt.apply(this,arguments)}var Dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dn||(Dn={}));const bc="popstate";function Rm(e){e===void 0&&(e={});function n(a,i){let{pathname:o,search:s,hash:l}=a.location;return Qo("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(a,i){return typeof i=="string"?i:ni(i)}return Om(n,t,null,e)}function de(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function lu(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function zm(){return Math.random().toString(36).substr(2,8)}function yc(e,n){return{usr:e.state,key:e.key,idx:n}}function Qo(e,n,t,a){return t===void 0&&(t=null),Mt({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Wr(n):n,{state:t,key:n&&n.key||a||zm()})}function ni(e){let{pathname:n="/",search:t="",hash:a=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function Wr(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function Om(e,n,t,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,s=i.history,l=Dn.Pop,c=null,d=p();d==null&&(d=0,s.replaceState(Mt({},s.state,{idx:d}),""));function p(){return(s.state||{idx:null}).idx}function f(){l=Dn.Pop;let j=p(),m=j==null?null:j-d;d=j,c&&c({action:l,location:x.location,delta:m})}function h(j,m){l=Dn.Push;let u=Qo(x.location,j,m);d=p()+1;let g=yc(u,d),b=x.createHref(u);try{s.pushState(g,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(b)}o&&c&&c({action:l,location:x.location,delta:1})}function y(j,m){l=Dn.Replace;let u=Qo(x.location,j,m);d=p();let g=yc(u,d),b=x.createHref(u);s.replaceState(g,"",b),o&&c&&c({action:l,location:x.location,delta:0})}function v(j){let m=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof j=="string"?j:ni(j);return u=u.replace(/ $/,"%20"),de(m,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,m)}let x={get action(){return l},get location(){return e(i,s)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(bc,f),c=j,()=>{i.removeEventListener(bc,f),c=null}},createHref(j){return n(i,j)},createURL:v,encodeLocation(j){let m=v(j);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:y,go(j){return s.go(j)}};return x}var wc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wc||(wc={}));function Dm(e,n,t){return t===void 0&&(t="/"),Lm(e,n,t)}function Lm(e,n,t,a){let i=typeof n=="string"?Wr(n):n,o=tl(i.pathname||"/",t);if(o==null)return null;let s=cu(e);Pm(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let d=qm(o);l=Hm(s[c],d)}return l}function cu(e,n,t,a){n===void 0&&(n=[]),t===void 0&&(t=[]),a===void 0&&(a="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(de(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=Zn([a,c.relativePath]),p=t.concat(c);o.children&&o.children.length>0&&(de(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),cu(o.children,n,p,d)),!(o.path==null&&!o.index)&&n.push({path:d,score:Zm(d,o.index),routesMeta:p})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of du(o.path))i(o,s,c)}),n}function du(e){let n=e.split("/");if(n.length===0)return[];let[t,...a]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(a.length===0)return i?[o,""]:[o];let s=du(a.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Pm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Km(n.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}const _m=/^:[\w-]+$/,Vm=3,Mm=2,Bm=1,Fm=10,Um=-2,jc=e=>e==="*";function Zm(e,n){let t=e.split("/"),a=t.length;return t.some(jc)&&(a+=Um),n&&(a+=Mm),t.filter(i=>!jc(i)).reduce((i,o)=>i+(_m.test(o)?Vm:o===""?Bm:Fm),a)}function Km(e,n){return e.length===n.length&&e.slice(0,-1).every((a,i)=>a===n[i])?e[e.length-1]-n[n.length-1]:0}function Hm(e,n,t){let{routesMeta:a}=e,i={},o="/",s=[];for(let l=0;l<a.length;++l){let c=a[l],d=l===a.length-1,p=o==="/"?n:n.slice(o.length)||"/",f=$m({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),h=c.route;if(!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Zn([o,f.pathname]),pathnameBase:Qm(Zn([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=Zn([o,f.pathnameBase]))}return s}function $m(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,a]=Wm(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((d,p,f)=>{let{paramName:h,isOptional:y}=p;if(h==="*"){let x=l[f]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=l[f];return y&&!v?d[h]=void 0:d[h]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:e}}function Wm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),lu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(a.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),a]}function qm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return lu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function tl(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,a=e.charAt(t);return a&&a!=="/"?null:e.slice(t)||"/"}function Ym(e,n){n===void 0&&(n="/");let{pathname:t,search:a="",hash:i=""}=typeof e=="string"?Wr(e):e;return{pathname:t?t.startsWith("/")?t:Gm(t,n):n,search:Xm(a),hash:e0(i)}}function Gm(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function eo(e,n,t,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function al(e,n){let t=Jm(e);return n?t.map((a,i)=>i===t.length-1?a.pathname:a.pathnameBase):t.map(a=>a.pathnameBase)}function il(e,n,t,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=Wr(e):(i=Mt({},e),de(!i.pathname||!i.pathname.includes("?"),eo("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),eo("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),eo("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=t;else{let f=n.length-1;if(!a&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}l=f>=0?n[f]:"/"}let c=Ym(i,l),d=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const Zn=e=>e.join("/").replace(/\/\/+/g,"/"),Qm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,e0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function n0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pu=["post","put","patch","delete"];new Set(pu);const r0=["get",...pu];new Set(r0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bt(){return Bt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Bt.apply(this,arguments)}const ol=w.createContext(null),t0=w.createContext(null),Yn=w.createContext(null),yi=w.createContext(null),Gn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),uu=w.createContext(null);function a0(e,n){let{relative:t}=n===void 0?{}:n;qr()||de(!1);let{basename:a,navigator:i}=w.useContext(Yn),{hash:o,pathname:s,search:l}=hu(e,{relative:t}),c=s;return a!=="/"&&(c=s==="/"?a:Zn([a,s])),i.createHref({pathname:c,search:l,hash:o})}function qr(){return w.useContext(yi)!=null}function gn(){return qr()||de(!1),w.useContext(yi).location}function fu(e){w.useContext(Yn).static||w.useLayoutEffect(e)}function Yr(){let{isDataRoute:e}=w.useContext(Gn);return e?v0():i0()}function i0(){qr()||de(!1);let e=w.useContext(ol),{basename:n,future:t,navigator:a}=w.useContext(Yn),{matches:i}=w.useContext(Gn),{pathname:o}=gn(),s=JSON.stringify(al(i,t.v7_relativeSplatPath)),l=w.useRef(!1);return fu(()=>{l.current=!0}),w.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){a.go(d);return}let f=il(d,JSON.parse(s),o,p.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:Zn([n,f.pathname])),(p.replace?a.replace:a.push)(f,p.state,p)},[n,a,s,o,e])}function hu(e,n){let{relative:t}=n===void 0?{}:n,{future:a}=w.useContext(Yn),{matches:i}=w.useContext(Gn),{pathname:o}=gn(),s=JSON.stringify(al(i,a.v7_relativeSplatPath));return w.useMemo(()=>il(e,JSON.parse(s),o,t==="path"),[e,s,o,t])}function o0(e,n){return s0(e,n)}function s0(e,n,t,a){qr()||de(!1);let{navigator:i}=w.useContext(Yn),{matches:o}=w.useContext(Gn),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=gn(),p;if(n){var f;let j=typeof n=="string"?Wr(n):n;c==="/"||(f=j.pathname)!=null&&f.startsWith(c)||de(!1),p=j}else p=d;let h=p.pathname||"/",y=h;if(c!=="/"){let j=c.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(j.length).join("/")}let v=Dm(e,{pathname:y}),x=u0(v&&v.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Zn([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Zn([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,t,a);return n&&x?w.createElement(yi.Provider,{value:{location:Bt({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Dn.Pop}},x):x}function l0(){let e=g0(),n=n0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},n),t?w.createElement("pre",{style:i},t):null,null)}const c0=w.createElement(l0,null);class d0 extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?w.createElement(Gn.Provider,{value:this.props.routeContext},w.createElement(uu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p0(e){let{routeContext:n,match:t,children:a}=e,i=w.useContext(ol);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Gn.Provider,{value:n},a)}function u0(e,n,t,a){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),a===void 0&&(a=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=a)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let s=e,l=(i=t)==null?void 0:i.errors;if(l!=null){let p=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);p>=0||de(!1),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(t&&a&&a.v7_partialHydration)for(let p=0;p<s.length;p++){let f=s[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=p),f.route.id){let{loaderData:h,errors:y}=t,v=f.route.loader&&h[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||v){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,f,h)=>{let y,v=!1,x=null,j=null;t&&(y=l&&f.route.id?l[f.route.id]:void 0,x=f.route.errorElement||c0,c&&(d<0&&h===0?(x0("route-fallback"),v=!0,j=null):d===h&&(v=!0,j=f.route.hydrateFallbackElement||null)));let m=n.concat(s.slice(0,h+1)),u=()=>{let g;return y?g=x:v?g=j:f.route.Component?g=w.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=p,w.createElement(p0,{match:f,routeContext:{outlet:p,matches:m,isDataRoute:t!=null},children:g})};return t&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?w.createElement(d0,{location:t.location,revalidation:t.revalidation,component:x,error:y,children:u(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):u()},null)}var mu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mu||{}),gu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gu||{});function f0(e){let n=w.useContext(ol);return n||de(!1),n}function h0(e){let n=w.useContext(t0);return n||de(!1),n}function m0(e){let n=w.useContext(Gn);return n||de(!1),n}function vu(e){let n=m0(),t=n.matches[n.matches.length-1];return t.route.id||de(!1),t.route.id}function g0(){var e;let n=w.useContext(uu),t=h0(),a=vu();return n!==void 0?n:(e=t.errors)==null?void 0:e[a]}function v0(){let{router:e}=f0(mu.UseNavigateStable),n=vu(gu.UseNavigateStable),t=w.useRef(!1);return fu(()=>{t.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Bt({fromRouteId:n},o)))},[e,n])}const kc={};function x0(e,n,t){kc[e]||(kc[e]=!0)}function b0(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ge(e){let{to:n,replace:t,state:a,relative:i}=e;qr()||de(!1);let{future:o,static:s}=w.useContext(Yn),{matches:l}=w.useContext(Gn),{pathname:c}=gn(),d=Yr(),p=il(n,al(l,o.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(p);return w.useEffect(()=>d(JSON.parse(f),{replace:t,state:a,relative:i}),[d,f,i,t,a]),null}function U(e){de(!1)}function y0(e){let{basename:n="/",children:t=null,location:a,navigationType:i=Dn.Pop,navigator:o,static:s=!1,future:l}=e;qr()&&de(!1);let c=n.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:c,navigator:o,static:s,future:Bt({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof a=="string"&&(a=Wr(a));let{pathname:p="/",search:f="",hash:h="",state:y=null,key:v="default"}=a,x=w.useMemo(()=>{let j=tl(p,c);return j==null?null:{location:{pathname:j,search:f,hash:h,state:y,key:v},navigationType:i}},[c,p,f,h,y,v,i]);return x==null?null:w.createElement(Yn.Provider,{value:d},w.createElement(yi.Provider,{children:t,value:x}))}function w0(e){let{children:n,location:t}=e;return o0(Xo(n),t)}new Promise(()=>{});function Xo(e,n){n===void 0&&(n=[]);let t=[];return w.Children.forEach(e,(a,i)=>{if(!w.isValidElement(a))return;let o=[...n,i];if(a.type===w.Fragment){t.push.apply(t,Xo(a.props.children,o));return}a.type!==U&&de(!1),!a.props.index||!a.props.children||de(!1);let s={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=Xo(a.props.children,o)),t.push(s)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},es.apply(this,arguments)}function j0(e,n){if(e==null)return{};var t={},a=Object.keys(e),i,o;for(o=0;o<a.length;o++)i=a[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function k0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function C0(e,n){return e.button===0&&(!n||n==="_self")&&!k0(e)}const N0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],S0="6";try{window.__reactRouterVersion=S0}catch{}const E0="startTransition",Cc=bf[E0];function A0(e){let{basename:n,children:t,future:a,window:i}=e,o=w.useRef();o.current==null&&(o.current=Rm({window:i,v5Compat:!0}));let s=o.current,[l,c]=w.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},p=w.useCallback(f=>{d&&Cc?Cc(()=>c(f)):c(f)},[c,d]);return w.useLayoutEffect(()=>s.listen(p),[s,p]),w.useEffect(()=>b0(a),[a]),w.createElement(y0,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:s,future:a})}const I0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",T0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,T=w.forwardRef(function(n,t){let{onClick:a,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:d,preventScrollReset:p,viewTransition:f}=n,h=j0(n,N0),{basename:y}=w.useContext(Yn),v,x=!1;if(typeof d=="string"&&T0.test(d)&&(v=d,I0))try{let g=new URL(window.location.href),b=d.startsWith("//")?new URL(g.protocol+d):new URL(d),C=tl(b.pathname,y);b.origin===g.origin&&C!=null?d=C+b.search+b.hash:x=!0}catch{}let j=a0(d,{relative:i}),m=R0(d,{replace:s,state:l,target:c,preventScrollReset:p,relative:i,viewTransition:f});function u(g){a&&a(g),g.defaultPrevented||m(g)}return w.createElement("a",es({},h,{href:v||j,onClick:x||o?a:u,ref:t,target:c}))});var Nc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nc||(Nc={}));var Sc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sc||(Sc={}));function R0(e,n){let{target:t,replace:a,state:i,preventScrollReset:o,relative:s,viewTransition:l}=n===void 0?{}:n,c=Yr(),d=gn(),p=hu(e,{relative:s});return w.useCallback(f=>{if(C0(f,t)){f.preventDefault();let h=a!==void 0?a:ni(d)===ni(p);c(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[d,c,p,a,i,t,e,o,s,l])}function He(){w.useEffect(()=>{const e=document.getElementById("areas-toggle"),n=[];if(e){const t=a=>{a.preventDefault(),e.parentElement&&e.parentElement.classList.toggle("open")};e.addEventListener("click",t),n.push(()=>e.removeEventListener("click",t))}return()=>{n.forEach(t=>{try{t()}catch{}})}},[])}function z0(){w.useEffect(()=>{const e=document.getElementById("splash"),n=document.getElementById("splashLogo"),t=document.getElementById("app"),a=()=>{if(e)try{e.classList.add("splash--hide"),e.setAttribute("aria-hidden","true"),e.style.display="none",e.style.pointerEvents="none"}catch{}};try{e&&(e.classList.remove("splash--hide"),e.removeAttribute("aria-hidden"),e.style.display="",e.style.pointerEvents="")}catch{}if((()=>{try{return sessionStorage.getItem("koop_hasVisited")==="1"}catch{return!1}})()||document.documentElement.classList.contains("skip-splash")){a(),t&&(t.style.opacity="1");return}const s=2500,l=800,c=performance.now();function d(){n&&(n.offsetWidth,n.classList.add("is-visible"))}function p(){if(t)if(t.style.opacity="0",t.offsetHeight,t.animate){const x=t.animate([{opacity:0},{opacity:1}],{duration:800,easing:"ease",fill:"forwards"});x.onfinish=()=>{t.style.opacity="1"}}else t.style.transition="opacity 0.8s ease",requestAnimationFrame(()=>{t.style.opacity="1"})}function f(){const x=performance.now()-c,j=Math.max(0,s-x);setTimeout(()=>{p(),e&&e.classList.add("splash--hide"),setTimeout(()=>{a();try{sessionStorage.setItem("koop_hasVisited","1")}catch{}document.documentElement.classList.add("skip-splash")},l)},j)}async function h(){try{n&&"decode"in n?await n.decode():n&&!n.complete&&await new Promise(x=>n.addEventListener("load",x,{once:!0}))}catch{}d(),f()}const y=x=>{x.persisted&&(a(),t&&(t.style.opacity="1"))};window.addEventListener("pageshow",y),h();const v=setTimeout(()=>{const x=document.getElementById("splash");if(x&&document.body.contains(x))try{x.classList.add("splash--hide"),x.setAttribute("aria-hidden","true"),x.style.display="none",x.style.pointerEvents="none"}catch{}},7e3);return()=>{window.removeEventListener("pageshow",y),clearTimeout(v)}},[])}function $e(){const e=Yr(),n=gn(),t=i=>{const o="/"+(i||"").split("/").filter(Boolean).pop(),s={"/index.html":"/","/derecho.html":"/derecho","/contabilidad.html":"/contabilidad","/auditoria.html":"/auditoria","/derecho-administrativo.html":"/derecho-administrativo","/derecho-familia.html":"/derecho-familia","/derecho-laboral.html":"/derecho-laboral","/derecho-penal.html":"/derecho-penal","/impuestos.html":"/impuestos","/planeacion-patrimonial.html":"/asesoria-contable","/planeacion-patrimonial":"/asesoria-contable","/privacidad.html":"/privacidad","/politica-privacidad.html":"/privacidad","/tramites-notariales.html":"/tramites-notariales","/acciones-de-tutela.html":"/acciones-de-tutela"};return s[i]||s[o]||i},a=()=>{var i;(i=document.querySelectorAll("a[href]"))==null||i.forEach(o=>{try{const s=o.getAttribute("href")||"";if(/^https?:\/\//i.test(s)&&new URL(s).origin!==window.location.origin)return;const l=new URL(s,window.location.href);if(l.origin!==window.location.origin)return;let c=t(l.pathname)+l.search+l.hash;/^\/index\.html#/i.test(c)&&(c=c.replace(/^\/index\.html#/i,"/#"));const d=o.getAttribute("href");c&&c!==d&&o.setAttribute("href",c)}catch{}})};w.useEffect(()=>{const i=Array.from(document.querySelectorAll(".page-transition")),o=()=>{i.forEach(p=>p.classList.remove("is-active"))};o(),requestAnimationFrame(o),setTimeout(o,0);const s=p=>{p.persisted&&o()},l=()=>o();window.addEventListener("pageshow",s),window.addEventListener("focus",l);function c(p){if(!p||!p.href)return!1;try{const y=p.classList;if(y&&y.contains("drop-btn")||p.id==="areas-toggle")return!1}catch{}if(p.target&&p.target.toLowerCase()==="_blank")return!1;const f=p.getAttribute("href");if(!f||f.startsWith("#")||f.startsWith("mailto:")||f.startsWith("tel:"))return!1;const h=new URL(p.href,window.location.href);return!(h.hostname!==window.location.hostname||h.pathname===window.location.pathname&&h.hash)}a();const d=p=>{const f=p.target&&p.target.closest?p.target.closest("a"):null;if(f&&(f.classList&&f.classList.contains("drop-btn")||f.id==="areas-toggle")||!f||!c(f)||p.metaKey||p.ctrlKey||p.shiftKey||p.altKey||p.button!==0)return;p.preventDefault();const h=i.some(v=>{try{return getComputedStyle(v).display!=="none"}catch{return!1}});h&&i.forEach(v=>v.classList.add("is-active"));const y=()=>{try{const v=new URL(f.href,window.location.href),x=t(v.pathname)+v.search+v.hash,j=window.location.pathname+window.location.search+window.location.hash;try{window.__KOOP_FADE_ARRIVAL=!0}catch{}try{e(x)}catch{}setTimeout(()=>{window.location.pathname+window.location.search+window.location.hash===j&&window.location.assign(x)},50)}catch{window.location.assign(f.href)}};h?setTimeout(y,600):y()};return document.addEventListener("click",d,!0),()=>{window.removeEventListener("pageshow",s),window.removeEventListener("focus",l),document.removeEventListener("click",d,!0)}},[]),w.useLayoutEffect(()=>{if(!n.hash){const i=()=>{try{window.scrollTo(0,0)}catch{}try{document.documentElement.scrollTop=0}catch{}try{document.body.scrollTop=0}catch{}};i(),requestAnimationFrame(i),setTimeout(i,0),setTimeout(i,50),setTimeout(i,150)}},[n.pathname,n.search,n.hash]),w.useEffect(()=>{Array.from(document.querySelectorAll(".page-transition")).forEach(l=>l.classList.remove("is-active"));const i=document.getElementById("splash"),o=!!(i&&getComputedStyle(i).display!=="none"&&!i.classList.contains("splash--hide"));if(!o){document.documentElement.classList.add("skip-splash");const l=document.getElementById("app");l?(l.style.opacity="1",l.style.transition=""):document.body.style.opacity="1"}if(!o&&!!(typeof window<"u"&&window.__KOOP_FADE_ARRIVAL)){try{const l=document.documentElement;l.classList.remove("route-fade-in"),l.offsetWidth,l.classList.add("route-fade-in"),setTimeout(()=>{try{l.classList.remove("route-fade-in")}catch{}},280)}catch{}try{window.__KOOP_FADE_ARRIVAL=!1}catch{}}try{a()}catch{}},[n.pathname,n.search,n.hash]),w.useEffect(()=>{if(!n.hash)return;const i=(n.hash||"").replace(/^#/,""),o=()=>{try{const p=document.getElementById(i)||document.querySelector(n.hash);if(p&&p.scrollIntoView)return p.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"}),!0}catch{}return!1};if(o())return;const s=requestAnimationFrame(o),l=setTimeout(o,0),c=setTimeout(o,120),d=setTimeout(o,300);return()=>{cancelAnimationFrame(s),clearTimeout(l),clearTimeout(c),clearTimeout(d)}},[n.pathname,n.hash])}function O0(){w.useEffect(()=>{const e=document.querySelectorAll(".labor-card[data-images]"),n=[];return e.forEach(t=>{const a=(t.dataset.images||"").split(",").map(s=>s.trim()).filter(Boolean);if(a.length<2)return;let i=0;const o=setInterval(()=>{const s=(i+1)%a.length,l=document.createElement("div");l.className="labor-card-fade",l.style.backgroundImage=`url('${a[s]}')`,t.appendChild(l),requestAnimationFrame(()=>{l.style.opacity="1"}),setTimeout(()=>{t.style.setProperty("--bg",`url('${a[s]}')`);try{l.remove()}catch{}i=s},1e3)},3e3);n.push(o)}),()=>{n.forEach(t=>clearInterval(t)),document.querySelectorAll(".labor-card-fade").forEach(t=>{try{t.remove()}catch{}})}},[])}function We(){w.useEffect(()=>{const e=n=>!n||typeof n!="string"?n:n.replace(/url\(\s*'img\//gi,"url('/img/").replace(/url\(\s*"img\//gi,'url("/img/').replace(/url\(\s*img\//gi,"url(/img/");document.querySelectorAll("[style]").forEach(n=>{try{const t=n.style.getPropertyValue("--bg");if(t&&/url\(/i.test(t)){const a=e(t);a!==t&&n.style.setProperty("--bg",a)}}catch{}}),document.querySelectorAll("[data-images]").forEach(n=>{const t=n.getAttribute("data-images");if(!t)return;const i=t.split(",").map(o=>o.trim()).filter(Boolean).map(o=>o.replace(/^img\//i,"/img/")).join(",");i!==t&&n.setAttribute("data-images",i)})},[location.pathname,location.search,location.hash])}function qe(e){if(!e||typeof e!="string")return"";const n=e.replace(/<noscript[\s\S]*?<\/noscript>/gi,""),t=[],a=/<style\b[^>]*>([\s\S]*?)<\/style>/gi;let i;for(;i=a.exec(n);){const s=i[1]||"";s.trim()&&t.push(s.trim())}return t.join(`

`).replace(/url\(\s*(['\"]?)img\//gi,"url($1/img/").replace(/url\(\s*(['\"]?)(?!\/|https?:|data:)([^'"\)]+?\.(?:png|jpe?g|svg|gif|webp|ico))\1\s*\)/gi,(s,l,c)=>`url(${l}/${c}${l})`)}const D0=`<!DOCTYPE html>\r
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
`,L0=()=>{He(),z0(),$e(),O0();const e=qe(D0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsx("div",{id:"splash",className:"splash","aria-hidden":"true",children:r.jsx("div",{className:"splash__frame",children:r.jsx("img",{id:"splashLogo",className:"splash__logo",src:"/Koop%20Logo.png",alt:"Koop Strategic Advisory"})})}),r.jsxs("div",{id:"app",children:[r.jsxs("div",{className:"hero-section hero--home",id:"inicio",children:[r.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:r.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),r.jsx("div",{className:"hero-overlay"}),r.jsx("div",{className:"hero-content",children:r.jsxs("div",{className:"hero-box",children:[r.jsx("div",{className:"hero-title",children:"KOOP es Bogotá, es excelencia académica"}),r.jsxs("div",{className:"hero-subtitle",children:["Expertos en Derecho Administrativo,",r.jsx("br",{})," Penal, Laboral y Médico"]}),r.jsxs("div",{className:"hero-desc",children:["Equipo de abogados y contadores con experiencia. ",r.jsx("br",{}),"Brindamos consultoría estratégica para empresas y personas naturales."]}),r.jsx("a",{className:"cta-btn",href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20:",children:"Solicita tu consulta"})]})})]}),r.jsx("section",{className:"areas-section",id:"areas",children:r.jsxs("div",{className:"areas-container",children:[r.jsxs("div",{className:"areas-title",children:[r.jsx("span",{className:"areas-title-bold",children:"ÁREAS DE"})," ",r.jsx("span",{className:"areas-title-normal",children:"PRÁCTICA"})]}),r.jsxs("div",{className:"areas-cards",children:[r.jsx("a",{href:"/derecho",className:"labor-card",style:{"--bg":"url('/img/paloquemao.png')"},"data-images":"/img/paloquemao.png,/img/saladecasacionlaboral.png,/img/tramitesnotariales.png,/img/sexuales.png,/img/fiscalia.png",children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("div",{className:"labor-card-title",children:"Derecho"}),r.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})}),r.jsx("a",{href:"/contabilidad",className:"labor-card",style:{"--bg":"url('/img/auditoria.jpg')"},"data-images":"/img/auditoria.jpg,/img/impuestos-en-colombia.jpg,/img/que_es_la_contabilidad.jpeg",children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("div",{className:"labor-card-title",children:"Contabilidad"}),r.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})})]})]})}),r.jsx("section",{className:"vision-section",id:"vision",children:r.jsxs("div",{className:"vision-container",children:[r.jsxs("h2",{className:"vision-title",children:[r.jsx("span",{className:"vision-bold",children:"NUESTRA"})," VISIÓN"]}),r.jsxs("div",{className:"vision-text",children:[r.jsx("p",{children:"En Koop Strategic Advisory, nuestra visión es consolidarnos como la firma de referencia en servicios jurídicos, contables y de consultoría empresarial, reconocidos por nuestra ética, innovación y excelencia. Nos apasiona acompañar a empresas y personas en la toma de decisiones estratégicas que les permitan crecer, proteger sus intereses y transformar sus proyectos en resultados sostenibles."}),r.jsx("p",{children:"Trabajamos bajo un enfoque multidisciplinario, integrando conocimientos legales, contables y de auditoría para ofrecer soluciones integrales y personalizadas. Nuestro equipo está comprometido con la actualización permanente, la confianza y el trato directo con cada cliente."}),r.jsx("p",{children:"Buscamos construir relaciones de largo plazo basadas en la transparencia, el profesionalismo y el valor agregado, contribuyendo activamente al desarrollo empresarial y a la construcción de una sociedad más justa y eficiente."})]})]})}),r.jsx("section",{className:"full-img-section",children:r.jsx("img",{src:"/Corte suprema de justicia de colombia.jpg",alt:"Equipo empresarial Koop",className:"full-img"})}),r.jsxs("section",{className:"contact-section",id:"contacto",children:[r.jsx("div",{className:"contact-overlay"}),r.jsx("div",{className:"contact-container contact-modern",children:r.jsxs("div",{className:"contact-modern-content",children:[r.jsx("div",{className:"contact-title",style:{textAlign:"center"},children:"CONTÁCTANOS"}),r.jsx("div",{className:"contact-name",style:{textAlign:"center",color:"#fff"},children:"KOOP STRATEGIC ADVISORY"}),r.jsxs("div",{className:"contact-social contact-social-modern",children:[r.jsx("a",{href:"https://www.instagram.com/kooplawyers/",target:"_blank",className:"social-icon instagram",title:"Instagram",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",alt:"Instagram"})}),r.jsx("a",{href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",className:"social-icon facebook",title:"Facebook",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg",alt:"Facebook"})}),r.jsx("a",{href:"https://www.tiktok.com/@koop.co",target:"_blank",className:"social-icon tiktok",title:"TikTok",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg",alt:"TikTok"})}),r.jsx("a",{href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20",target:"_blank",className:"social-icon whatsapp",title:"WhatsApp",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg",alt:"WhatsApp"})})]}),r.jsx("div",{className:"contact-modern-text",children:"Atendemos consultas por cualquiera de nuestras redes sociales."})]})})]}),r.jsx("footer",{className:"site-footer",children:r.jsxs("div",{className:"footer-container",children:[r.jsx("div",{className:"footer-left",children:"© 2024 Creado por Koop Strategic Advisory"}),r.jsx("div",{className:"footer-right",children:r.jsx("a",{href:"/privacidad",target:"_blank",children:"Política de Privacidad"})})]})})]})," "]})},P0=`<!DOCTYPE html>\r
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
`,xu="/assets/Despidoinjustificado-WBwGt-rg.jpg",_0=()=>{He(),$e();const e=qe(P0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsx("section",{className:"labor-cards-section",id:"areas-derecho",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"DERECHO"}),r.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),r.jsx("p",{className:"labor-sub",children:"Asesoría integral en diversas ramas del derecho."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx(T,{to:"/derecho-penal",className:"labor-card",style:{"--bg":"url('/img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho Penal"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa y asesoría en procesos penales."})]})}),r.jsx(T,{to:"/derecho-laboral",className:"labor-card",style:{"--bg":`url(${xu})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho Laboral"]}),r.jsx("div",{className:"labor-card-desc",children:"Soluciones en derecho laboral y seguridad social."})]})}),r.jsx(T,{to:"/tramites-notariales",className:"labor-card",style:{"--bg":"url('img/tramitesnotariales.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Trámites notariales"]}),r.jsx("div",{className:"labor-card-desc",children:"Gestiones notariales rápidas y seguras."})]})}),r.jsx(T,{to:"/derecho-administrativo",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho Administrativo"]}),r.jsx("div",{className:"labor-card-desc",children:"Asesoría en procedimientos y litigios administrativos."})]})}),r.jsx(T,{to:"/derecho-familia",className:"labor-card",style:{"--bg":"url('/img/ninofamilia.webp')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho de Familia"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámites administrativos y judiciales de familia."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsx("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:"WhatsApp"}),r.jsx("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:"Escríbenos"})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(T,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(T,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(T,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(T,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Áreas de Derecho"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(T,{to:"/derecho-penal",children:"Derecho penal"})}),r.jsx("li",{children:r.jsx(T,{to:"/derecho-laboral",children:"Derecho laboral"})}),r.jsx("li",{children:r.jsx(T,{to:"/tramites-notariales",children:"Trámites notariales"})}),r.jsx("li",{children:r.jsx(T,{to:"/derecho-administrativo",children:"Derecho administrativo"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx(T,{to:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},V0=`<!DOCTYPE html>\r
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
`,M0=()=>{He(),$e();const e=qe(V0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsx("section",{className:"labor-cards-section",id:"subareas-contabilidad",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"CONTABILIDAD"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Selecciona la especialidad contable que necesitas."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"/auditoria",className:"labor-card",style:{"--bg":"url('img/auditoria.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Auditoría y Revisoría Fiscal"]}),r.jsx("div",{className:"labor-card-desc",children:"Supervisión financiera independiente."})]})}),r.jsx("a",{href:"/impuestos",className:"labor-card",style:{"--bg":"url('img/impuestos-en-colombia.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Impuestos y Planeación Tributaria"]}),r.jsx("div",{className:"labor-card-desc",children:"Consultoría y cumplimiento fiscal."})]})}),r.jsx("a",{href:"/asesoria-contable",className:"labor-card",style:{"--bg":"url('img/que_es_la_contabilidad.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Asesoría Contable"]}),r.jsx("div",{className:"labor-card-desc",children:"Protección y optimización del patrimonio."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Soluciones integrales para tu empresa."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una Asesoría Contable?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20consultar%20los%20servicios%20contables:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Contabilidad%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(T,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(T,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(T,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(T,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios contables"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"/auditoria",children:"Auditoría y Revisoría Fiscal"})}),r.jsx("li",{children:r.jsx("a",{href:"/impuestos",children:"Impuestos y Planeación Tributaria"})}),r.jsx("li",{children:r.jsx("a",{href:"/asesoria-contable",children:"Asesoría Contable"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},B0=`<!DOCTYPE html>\r
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
`,F0=()=>{He(),$e();const e=qe(B0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Auditoría & Revisoría Fiscal",children:r.jsx("div",{className:"hero-headline",children:"Auditoría & Revisoría Fiscal"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-auditoria",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE AUDITORÍA & REVISORÍA FISCAL"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Supervisión independiente y aseguramiento financiero y contable."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#financiera",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Auditoría financiera"]}),r.jsx("div",{className:"labor-card-desc",children:"Opinión independiente sobre estados financieros."})]})}),r.jsx("a",{href:"#revisoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Revisoría fiscal permanente"]}),r.jsx("div",{className:"labor-card-desc",children:"Cumplimiento de obligaciones legales y societarias."})]})}),r.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Evaluación de control interno"]}),r.jsx("div",{className:"labor-card-desc",children:"Diagnósticos y recomendaciones."})]})}),r.jsx("a",{href:"#cumplimiento",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Cumplimiento normativo"]}),r.jsx("div",{className:"labor-card-desc",children:"Verificación de normas contables y fiscales."})]})}),r.jsx("a",{href:"#informes",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Informes especiales"]}),r.jsx("div",{className:"labor-card-desc",children:"Dictámenes sobre hechos particulares."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Control y transparencia para tu organización."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en auditoría & revisoría fiscal?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20auditor%C3%ADa%20y%20revisor%C3%ADa%20fiscal%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Auditor%C3%ADa%20y%20Revisor%C3%ADa%20Fiscal%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(T,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(T,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(T,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(T,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Auditoría financiera"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Revisoría fiscal permanente"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Evaluación de control interno"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Cumplimiento normativo"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Informes especiales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},U0=`<!DOCTYPE html>\r
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
`,Z0=()=>{He(),$e();const e=qe(U0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/derecho-administrativo/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Consejo-deestado.avif')",backgroundPosition:"center 80%"},children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho Administrativo",children:r.jsx("div",{className:"hero-headline",children:"Derecho Administrativo"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-derecho-administrativo",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE DERECHO ADMINISTRATIVO"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Asesoría en trámites y procedimientos ante la administración pública."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#peticion",className:"labor-card",style:{"--bg":"url('img/Gestionurbana.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Gestión Urbanística"]}),r.jsx("div",{className:"labor-card-desc",children:"Asesorías en licencias y planeación urbanística."})]})}),r.jsx("a",{href:"#disciplinario",className:"labor-card",style:{"--bg":"url('img/Disci.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Procesos disciplinarios"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa ante investigaciones y sanciones."})]})}),r.jsx("a",{href:"#contratacion",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Contratación estatal"]}),r.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en etapas precontractuales y contractuales."})]})}),r.jsx("a",{href:"#nulidad",className:"labor-card",style:{"--bg":"url('img/Respfiscal.webp')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Procesos de responsabilidad fiscal"]}),r.jsx("div",{className:"labor-card-desc",children:"Conflictos derivados de administración de dineros públicos."})]})}),r.jsx("a",{href:"#conceptos",className:"labor-card",style:{"--bg":"url('img/Asesoria.webp')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Conceptos y asesorías administrativas"]}),r.jsx("div",{className:"labor-card-desc",children:"Elaboración de conceptos y respuestas a requerimientos."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Valoramos y resguardamos tus activos intangibles."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en derecho administrativo?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20concencioso%20administrativo%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20Administrativo%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(T,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(T,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(T,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(T,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Gestión Urbanística"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Procesos Disciplinarios"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Contratación Estatal"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Procesos de responsabilidad fiscal"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Conceptos y Asesorías Administrativas"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},K0=`<!DOCTYPE html>\r
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
`,H0=()=>{He(),$e();const e=qe(K0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/ninofamilia.webp')",backgroundPosition:"center 30%"},children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho de Familia",children:r.jsx("div",{className:"hero-headline",children:"Derecho de Familia"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-familia",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE FAMILIA"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Asesoría integral en situaciones familiares: divorcios, custodia, alimentos y más."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#divorcio",className:"labor-card",style:{"--bg":"url('img/divorcio.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Divorcio y separación"]}),r.jsx("div",{className:"labor-card-desc",children:"Representación y acuerdos amistosos o judiciales."})]})}),r.jsx("a",{href:"#custodia",className:"labor-card",style:{"--bg":"url('img/Custodia.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Custodia y patria potestad"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa de los derechos de tus hijos y del núcleo familiar."})]})}),r.jsx("a",{href:"#alimentos",className:"labor-card",style:{"--bg":"url('img/alimentos.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Alimentos y pensión alimentaria"]}),r.jsx("div",{className:"labor-card-desc",children:"Fijación, modificación y cobro de cuotas alimentarias."})]})}),r.jsx("a",{href:"#sociedad",className:"labor-card",style:{"--bg":"url('img/Violencia.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Violencia intrafamiliar"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámite ante comisaría de familia o proceso penal ante fiscalía."})]})}),r.jsx("a",{href:"#comisariaseicbf",className:"labor-card",style:{"--bg":"url('img/Bienestar.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Trámites frente a ICBF o Comisarías de familia"]}),r.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en procesos administrativos."})]})}),r.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales"]}),r.jsx("div",{className:"labor-card-desc",children:"Acuerdos patrimoniales previos al matrimonio o unión libre."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico y soluciones 360° para proteger tu núcleo familiar."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en derecho de familia?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20derecho%20de%20familia%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20de%20Familia%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(T,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(T,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(T,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(T,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Divorcio y separación"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Custodia y patria potestad"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Alimentos y pensión alimentaria"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Violencia intrafamiliar"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Trámites frente a ICBF o Comisarías de familia"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573503965755",children:"+57 (350) 396 57 55"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},$0=`<!DOCTYPE html>\r
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
`,W0="/assets/liquidaciones-CLf4J2S8.jpeg",q0="/assets/acoso-5lfYgMQE.jpg",Y0="/assets/pensiones-Cse2TGmQ.jpg",G0="/assets/contratorealidad-CKG4Jjcw.png",J0=()=>{He(),$e();const e=qe($0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho Laboral y Seguridad Social",children:r.jsx("div",{className:"hero-headline",children:"Derecho Laboral y Seguridad Social"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-laborales",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS LABORALES"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Estrategia, representación y cumplimiento normativo en derecho laboral para empresas y trabajadores."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#contratorealidad",className:"labor-card",style:{"--bg":`url(${G0})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Contrato realidad"]}),r.jsx("div",{className:"labor-card-desc",children:"Reconocimiento del vínculo laboral y prestaciones."})]})}),r.jsx("a",{href:"#liquidaciones",className:"labor-card",style:{"--bg":`url(${W0})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Mora en el pago de la liquidación"]}),r.jsx("div",{className:"labor-card-desc",children:"Cálculo, reclamación y verificación de pagos."})]})}),r.jsx("a",{href:"#acoso",className:"labor-card",style:{"--bg":`url(${q0})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Acoso laboral"]}),r.jsx("div",{className:"labor-card-desc",children:"Comités, protocolos, evidencias y defensa."})]})}),r.jsx("a",{href:"#pensiones",className:"labor-card",style:{"--bg":`url(${Y0})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Pensiones y seguridad social"]}),r.jsx("div",{className:"labor-card-desc",children:"Traslados, reliquidaciones y contingencias."})]})}),r.jsx("a",{href:"#reintegro",className:"labor-card",style:{"--bg":`url(${xu})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Reintegro laboral"]}),r.jsx("div",{className:"labor-card-desc",children:"Acciones de reintegro por despido ilegal o con fuero."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20laboral%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(T,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(T,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(T,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(T,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios laborales"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#despido",children:"Despido injustificado"})}),r.jsx("li",{children:r.jsx("a",{href:"#liquidaciones",children:"Liquidaciones y prestaciones"})}),r.jsx("li",{children:r.jsx("a",{href:"#acoso",children:"Acoso laboral"})}),r.jsx("li",{children:r.jsx("a",{href:"#pensiones",children:"Pensiones y seguridad social"})}),r.jsx("li",{children:r.jsx("a",{href:"#reintegro",children:"Reintegro laboral"})}),r.jsx("li",{children:r.jsx("a",{href:"#contratorealidad",children:"Contrato realidad"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Q0=`<!DOCTYPE html>\r
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
`,X0=()=>{He(),$e();const e=qe(Q0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho Penal",children:r.jsx("div",{className:"hero-headline",children:"Derecho Penal"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS PENALES"}),r.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),r.jsx("p",{className:"labor-sub",children:"Representamos sus intereses con experiencia y conocimiento en el ámbito penal."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#audiencias",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Audiencias, medidas de aseguramiento y trámite penal"]}),r.jsx("div",{className:"labor-card-desc",children:"Protección de sus derechos durante todo el trámite penal, hasta sentencia."})]})}),r.jsx("a",{href:"#asesoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Asesoría y Representación Penal integral para Víctimas"]}),r.jsx("div",{className:"labor-card-desc",children:"Representación legal experta para víctimas, desde la denuncia hasta la indemnización."})]})}),r.jsx("a",{href:"#acompañamiento",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Acompañamiento en audiencias y fases procesales clave"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa en audiencias específicas. Consulte más acá."})]})}),r.jsx("a",{href:"#habeas",className:"labor-card",style:{"--bg":"url('img/habeas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Habeas corpus y libertades inmediatas"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámite inmediato para restablecer la libertad personal."})]})}),r.jsx("a",{href:"#defensa",className:"labor-card",style:{"--bg":"url('img/sexuales.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Defensa y Asesoría en Casos de Delitos Sexuales"]}),r.jsx("div",{className:"labor-card-desc",children:"Protección integral de derechos en investigaciones y juicios por delitos sexuales."})]})}),r.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/fiscalia.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Control y Seguimiento de Procesos en Fiscalía"]}),r.jsx("div",{className:"labor-card-desc",children:"Monitoreamos y gestionamos su proceso penal para evitar estancamientos y proteger sus derechos."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20penal%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(T,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(T,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(T,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(T,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios laborales"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#audiencias",children:"Audiencias, medidas de aseguramiento y trámite penal"})}),r.jsx("li",{children:r.jsx("a",{href:"#asesoria",children:"Asesoría y Representación Penal integral para Víctimas"})}),r.jsx("li",{children:r.jsx("a",{href:"#acompañamiento",children:"Acompañamiento en audiencias y fases procesales clave"})}),r.jsx("li",{children:r.jsx("a",{href:"#habeas",children:"Habeas corpus y libertades inmediatas"})}),r.jsx("li",{children:r.jsx("a",{href:"#defensa",children:"Defensa y Asesoría en Casos de Delitos Sexuales"})}),r.jsx("li",{children:r.jsx("a",{href:"#control",children:"Control y Seguimiento de Procesos en Fiscalía"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},eg=`<!DOCTYPE html>\r
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
`,ng=()=>{He(),$e();const e=qe(eg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Impuestos",children:r.jsx("div",{className:"hero-headline",children:"Impuestos"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-impuestos",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE IMPUESTOS"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Consultoría tributaria y planeación fiscal para empresas y personas."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#planeacion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Planeación tributaria"]}),r.jsx("div",{className:"labor-card-desc",children:"Estructuras fiscales eficientes y legales."})]})}),r.jsx("a",{href:"#declaraciones",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Declaraciones y cumplimiento"]}),r.jsx("div",{className:"labor-card-desc",children:"Preparación y presentación oportuna de impuestos."})]})}),r.jsx("a",{href:"#dian",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Defensa ante la DIAN"]}),r.jsx("div",{className:"labor-card-desc",children:"Respuestas a requerimientos y litigios tributarios."})]})}),r.jsx("a",{href:"#transferencia",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Precios de transferencia"]}),r.jsx("div",{className:"labor-card-desc",children:"Estudios y documentación obligatoria."})]})}),r.jsx("a",{href:"#auditoria",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Auditoría fiscal"]}),r.jsx("div",{className:"labor-card-desc",children:"Revisión de obligaciones y contingencias."})]})}),r.jsx("a",{href:"#municipales",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Obligaciones municipales"]}),r.jsx("div",{className:"labor-card-desc",children:"Impuestos locales y de industria y comercio."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Optimización de obligaciones fiscales."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en impuestos?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20impuestos%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Impuestos%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(T,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(T,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(T,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(T,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Planeación tributaria"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Declaraciones y cumplimiento"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Defensa ante DIAN"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Precios de transferencia"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Auditoría fiscal"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Obligaciones municipales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},rg=`<!DOCTYPE html>\r
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
`,tg=()=>{He(),$e();const e=qe(rg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Asesoría Contable",children:r.jsx("div",{className:"hero-headline",children:"Asesoría Contable"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Estrategias sucesorales"]}),r.jsx("div",{className:"labor-card-desc",children:"Testamentos y planificación de herencias."})]})}),r.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Fideicomisos y patrimonios autónomos"]}),r.jsx("div",{className:"labor-card-desc",children:"Estructuras para administrar bienes."})]})}),r.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Protocolos familiares"]}),r.jsx("div",{className:"labor-card-desc",children:"Reglas de gobierno y sucesión empresarial."})]})}),r.jsx("a",{href:"#fiscal",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Optimización fiscal del patrimonio"]}),r.jsx("div",{className:"labor-card-desc",children:"Reducción de cargas impositivas."})]})}),r.jsx("a",{href:"#portafolios",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Administración de portafolios"]}),r.jsx("div",{className:"labor-card-desc",children:"Gestión de inversiones y activos."})]})}),r.jsx("a",{href:"#activos",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Protección de activos"]}),r.jsx("div",{className:"labor-card-desc",children:"Blindaje frente a riesgos y contingencias."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en Asesoría Contable?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(T,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(T,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(T,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(T,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Estrategias sucesorales"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Fideicomisos y patrimonios autónomos"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Protocolos familiares"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Optimización fiscal del patrimonio"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Administración de portafolios"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Protección de activos"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},ag=`<!DOCTYPE html>\r
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
`,ig=()=>{He(),$e();const e=qe(ag).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition"}),r.jsxs("main",{children:[r.jsx("h1",{children:"Política de Privacidad"}),r.jsx("p",{children:"Esta página describe las políticas de privacidad de Koop Strategic Advisory. Su contenido se actualizará próximamente."})]}),r.jsx("footer",{className:"site-footer",children:r.jsxs("div",{className:"footer-container",children:[r.jsxs("div",{className:"footer-left",children:["© ",r.jsx("span",{id:"year"})," Creado por Koop Strategic Advisory"]}),r.jsx("div",{className:"footer-right",children:r.jsx("a",{href:"/privacidad",children:"Política de Privacidad"})})]})})]})},og=`<!DOCTYPE html>\r
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
`,sg=()=>{He(),$e();const e=qe(og).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Trámites Notariales",children:r.jsx("div",{className:"hero-headline",children:"Trámites Notariales"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS FRENTE A NOTARIA"}),r.jsx("h2",{className:"labor-title",children:"Su trámite notarial exprés."}),r.jsx("p",{className:"labor-sub",children:"Listo en tiempo récord, con total seguridad jurídica."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#compraventa",className:"labor-card",style:{"--bg":"url('img/compraventainmueble.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Compraventa de inmuebles."]}),r.jsx("div",{className:"labor-card-desc",children:"Con revisión de títulos y elaboración de minuta."})]})}),r.jsx("a",{href:"#constitucion",className:"labor-card",style:{"--bg":"url('img/constitucion.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Constitución, reforma o liquidación de sociedades"]}),r.jsx("div",{className:"labor-card-desc",children:"(S.A.S., LTDA., S.A., etc.)."})]})}),r.jsx("a",{href:"sucesiones",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Sucesiones por causa de muerte"]}),r.jsx("div",{className:"labor-card-desc",children:"Realización de escrito de solicitud hasta elevación a escritura pública."})]})}),r.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales y liquidación de sociedad conyugal."]}),r.jsx("div",{className:"labor-card-desc",children:"Proteja su patrimonio y formalice acuerdos con respaldo legal."})]})}),r.jsx("a",{href:"#levantamiento",className:"labor-card",style:{"--bg":"url('img/levantamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Levantamiento de hipotecas"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámite de levantamiento exprés y sin dilaciones."})]})}),r.jsx("a",{href:"#donaciones",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Donaciones de bienes inmuebles"]}),r.jsx("div",{className:"labor-card-desc",children:"Transfiera su patrimonio con seguridad jurídica y sin contratiempos."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20conocer%20los%20costos%20del%20siguiente%20proceso%20notarial:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(T,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(T,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(T,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(T,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios laborales"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#compraventa",children:"Compraventa de inmuebles"})}),r.jsx("li",{children:r.jsx("a",{href:"#constitucion",children:"Constitución, reforma o liquidación de sociedades"})}),r.jsx("li",{children:r.jsx("a",{href:"#sucesiones",children:"Sucesiones por causa de muerte"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales y liquidación de sociedad conyugal"})}),r.jsx("li",{children:r.jsx("a",{href:"#levantamiento",children:"Levantamiento de hipotecas"})}),r.jsx("li",{children:r.jsx("a",{href:"#donaciones",children:"Donaciones de bienes inmuebles"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},lg=`<!DOCTYPE html>\r
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
`,cg=()=>{He(),$e();const e=qe(lg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return We(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Juezjuez.jpg')",backgroundPosition:"center 70%"},children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Acciones de tutela",children:r.jsx("div",{className:"hero-headline",children:"Acciones de tutela"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/tutelapeticion.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Tutela al Derecho de Petición"]}),r.jsx("div",{className:"labor-card-desc",children:"Para obtener respuestas de las autoridades."})]})}),r.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/tutelasalud.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Tutela en  Salud"]}),r.jsx("div",{className:"labor-card-desc",children:"Somos expertos dentro del área de la salud, velamos por sus intereses."})]})}),r.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/tuteladebido.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Revocatoria de decisiones judiciales"]}),r.jsx("div",{className:"labor-card-desc",children:"Por vulneración al debido proceso de acuerdo a la jurisprudencia procesal."})]})}),r.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/jueztutela.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Tutela para obtener pensión"]}),r.jsx("div",{className:"labor-card-desc",children:"Cumplidos los requisitos de la jurisprudencia de la sala de casación laboral"})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en Asesoría Contable?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(T,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(T,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(T,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(T,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Divorcio y separación"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Custodia y patria potestad"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Alimentos y pensión alimentaria"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Liquidación de sociedad conyugal"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Adopciones"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Zr="https://koop-api-a28ac382dd56.herokuapp.com/api";async function dg({name:e,email:n,password:t,roles:a}){console.log(`API BASE: ${Zr}/auth/register`);const i=await fetch(`${Zr}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:n,password:t,roles:a})}),o=await i.json().catch(()=>({}));if(!i.ok)throw new Error((o==null?void 0:o.message)||"Error en registro");return o}async function pg(){const e=await fetch(`${Zr}/auth/refresh`,{method:"POST",credentials:"include"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error((n==null?void 0:n.message)||"No se pudo refrescar sesión");return n}async function ug({email:e,password:n}){console.log(`API BASE: ${Zr}/auth/login`);const t=await fetch(`${Zr}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:n})});console.log(t);const a=await t.json().catch(()=>({}));if(!t.ok)throw new Error((a==null?void 0:a.message)||"Credenciales inválidas");return a}async function fg(){const e=await fetch(`${Zr}/auth/logout`,{method:"POST",credentials:"include"});if(!e.ok){let n="Error al cerrar sesión";try{const t=await e.json();n=(t==null?void 0:t.message)||n}catch{}throw new Error(n)}return!0}function bu(e,n){return function(){return e.apply(n,arguments)}}const{toString:hg}=Object.prototype,{getPrototypeOf:sl}=Object,{iterator:wi,toStringTag:yu}=Symbol,ji=(e=>n=>{const t=hg.call(n);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),cn=e=>(e=e.toLowerCase(),n=>ji(n)===e),ki=e=>n=>typeof n===e,{isArray:Gr}=Array,Ft=ki("undefined");function Wt(e){return e!==null&&!Ft(e)&&e.constructor!==null&&!Ft(e.constructor)&&Pe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const wu=cn("ArrayBuffer");function mg(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&wu(e.buffer),n}const gg=ki("string"),Pe=ki("function"),ju=ki("number"),qt=e=>e!==null&&typeof e=="object",vg=e=>e===!0||e===!1,Aa=e=>{if(ji(e)!=="object")return!1;const n=sl(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(yu in e)&&!(wi in e)},xg=e=>{if(!qt(e)||Wt(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},bg=cn("Date"),yg=cn("File"),wg=cn("Blob"),jg=cn("FileList"),kg=e=>qt(e)&&Pe(e.pipe),Cg=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||Pe(e.append)&&((n=ji(e))==="formdata"||n==="object"&&Pe(e.toString)&&e.toString()==="[object FormData]"))},Ng=cn("URLSearchParams"),[Sg,Eg,Ag,Ig]=["ReadableStream","Request","Response","Headers"].map(cn),Tg=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Yt(e,n,{allOwnKeys:t=!1}={}){if(e===null||typeof e>"u")return;let a,i;if(typeof e!="object"&&(e=[e]),Gr(e))for(a=0,i=e.length;a<i;a++)n.call(null,e[a],a,e);else{if(Wt(e))return;const o=t?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(a=0;a<s;a++)l=o[a],n.call(null,e[l],l,e)}}function ku(e,n){if(Wt(e))return null;n=n.toLowerCase();const t=Object.keys(e);let a=t.length,i;for(;a-- >0;)if(i=t[a],n===i.toLowerCase())return i;return null}const tr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Cu=e=>!Ft(e)&&e!==tr;function ns(){const{caseless:e}=Cu(this)&&this||{},n={},t=(a,i)=>{const o=e&&ku(n,i)||i;Aa(n[o])&&Aa(a)?n[o]=ns(n[o],a):Aa(a)?n[o]=ns({},a):Gr(a)?n[o]=a.slice():n[o]=a};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&Yt(arguments[a],t);return n}const Rg=(e,n,t,{allOwnKeys:a}={})=>(Yt(n,(i,o)=>{t&&Pe(i)?e[o]=bu(i,t):e[o]=i},{allOwnKeys:a}),e),zg=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Og=(e,n,t,a)=>{e.prototype=Object.create(n.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),t&&Object.assign(e.prototype,t)},Dg=(e,n,t,a)=>{let i,o,s;const l={};if(n=n||{},e==null)return n;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!a||a(s,e,n))&&!l[s]&&(n[s]=e[s],l[s]=!0);e=t!==!1&&sl(e)}while(e&&(!t||t(e,n))&&e!==Object.prototype);return n},Lg=(e,n,t)=>{e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=n.length;const a=e.indexOf(n,t);return a!==-1&&a===t},Pg=e=>{if(!e)return null;if(Gr(e))return e;let n=e.length;if(!ju(n))return null;const t=new Array(n);for(;n-- >0;)t[n]=e[n];return t},_g=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&sl(Uint8Array)),Vg=(e,n)=>{const a=(e&&e[wi]).call(e);let i;for(;(i=a.next())&&!i.done;){const o=i.value;n.call(e,o[0],o[1])}},Mg=(e,n)=>{let t;const a=[];for(;(t=e.exec(n))!==null;)a.push(t);return a},Bg=cn("HTMLFormElement"),Fg=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,a,i){return a.toUpperCase()+i}),Ec=(({hasOwnProperty:e})=>(n,t)=>e.call(n,t))(Object.prototype),Ug=cn("RegExp"),Nu=(e,n)=>{const t=Object.getOwnPropertyDescriptors(e),a={};Yt(t,(i,o)=>{let s;(s=n(i,o,e))!==!1&&(a[o]=s||i)}),Object.defineProperties(e,a)},Zg=e=>{Nu(e,(n,t)=>{if(Pe(e)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const a=e[t];if(Pe(a)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Kg=(e,n)=>{const t={},a=i=>{i.forEach(o=>{t[o]=!0})};return Gr(e)?a(e):a(String(e).split(n)),t},Hg=()=>{},$g=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function Wg(e){return!!(e&&Pe(e.append)&&e[yu]==="FormData"&&e[wi])}const qg=e=>{const n=new Array(10),t=(a,i)=>{if(qt(a)){if(n.indexOf(a)>=0)return;if(Wt(a))return a;if(!("toJSON"in a)){n[i]=a;const o=Gr(a)?[]:{};return Yt(a,(s,l)=>{const c=t(s,i+1);!Ft(c)&&(o[l]=c)}),n[i]=void 0,o}}return a};return t(e,0)},Yg=cn("AsyncFunction"),Gg=e=>e&&(qt(e)||Pe(e))&&Pe(e.then)&&Pe(e.catch),Su=((e,n)=>e?setImmediate:n?((t,a)=>(tr.addEventListener("message",({source:i,data:o})=>{i===tr&&o===t&&a.length&&a.shift()()},!1),i=>{a.push(i),tr.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Pe(tr.postMessage)),Jg=typeof queueMicrotask<"u"?queueMicrotask.bind(tr):typeof process<"u"&&process.nextTick||Su,Qg=e=>e!=null&&Pe(e[wi]),k={isArray:Gr,isArrayBuffer:wu,isBuffer:Wt,isFormData:Cg,isArrayBufferView:mg,isString:gg,isNumber:ju,isBoolean:vg,isObject:qt,isPlainObject:Aa,isEmptyObject:xg,isReadableStream:Sg,isRequest:Eg,isResponse:Ag,isHeaders:Ig,isUndefined:Ft,isDate:bg,isFile:yg,isBlob:wg,isRegExp:Ug,isFunction:Pe,isStream:kg,isURLSearchParams:Ng,isTypedArray:_g,isFileList:jg,forEach:Yt,merge:ns,extend:Rg,trim:Tg,stripBOM:zg,inherits:Og,toFlatObject:Dg,kindOf:ji,kindOfTest:cn,endsWith:Lg,toArray:Pg,forEachEntry:Vg,matchAll:Mg,isHTMLForm:Bg,hasOwnProperty:Ec,hasOwnProp:Ec,reduceDescriptors:Nu,freezeMethods:Zg,toObjectSet:Kg,toCamelCase:Fg,noop:Hg,toFiniteNumber:$g,findKey:ku,global:tr,isContextDefined:Cu,isSpecCompliantForm:Wg,toJSONObject:qg,isAsyncFn:Yg,isThenable:Gg,setImmediate:Su,asap:Jg,isIterable:Qg};function B(e,n,t,a,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),t&&(this.config=t),a&&(this.request=a),i&&(this.response=i,this.status=i.status?i.status:null)}k.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const Eu=B.prototype,Au={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Au[e]={value:e}});Object.defineProperties(B,Au);Object.defineProperty(Eu,"isAxiosError",{value:!0});B.from=(e,n,t,a,i,o)=>{const s=Object.create(Eu);return k.toFlatObject(e,s,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),B.call(s,e.message,n,t,a,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const Xg=null;function rs(e){return k.isPlainObject(e)||k.isArray(e)}function Iu(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function Ac(e,n,t){return e?e.concat(n).map(function(i,o){return i=Iu(i),!t&&o?"["+i+"]":i}).join(t?".":""):n}function e1(e){return k.isArray(e)&&!e.some(rs)}const n1=k.toFlatObject(k,{},null,function(n){return/^is[A-Z]/.test(n)});function Ci(e,n,t){if(!k.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,t=k.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,j){return!k.isUndefined(j[x])});const a=t.metaTokens,i=t.visitor||p,o=t.dots,s=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(n);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function d(v){if(v===null)return"";if(k.isDate(v))return v.toISOString();if(k.isBoolean(v))return v.toString();if(!c&&k.isBlob(v))throw new B("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(v)||k.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function p(v,x,j){let m=v;if(v&&!j&&typeof v=="object"){if(k.endsWith(x,"{}"))x=a?x:x.slice(0,-2),v=JSON.stringify(v);else if(k.isArray(v)&&e1(v)||(k.isFileList(v)||k.endsWith(x,"[]"))&&(m=k.toArray(v)))return x=Iu(x),m.forEach(function(g,b){!(k.isUndefined(g)||g===null)&&n.append(s===!0?Ac([x],b,o):s===null?x:x+"[]",d(g))}),!1}return rs(v)?!0:(n.append(Ac(j,x,o),d(v)),!1)}const f=[],h=Object.assign(n1,{defaultVisitor:p,convertValue:d,isVisitable:rs});function y(v,x){if(!k.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(v),k.forEach(v,function(m,u){(!(k.isUndefined(m)||m===null)&&i.call(n,m,k.isString(u)?u.trim():u,x,h))===!0&&y(m,x?x.concat(u):[u])}),f.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return y(e),n}function Ic(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return n[a]})}function ll(e,n){this._pairs=[],e&&Ci(e,this,n)}const Tu=ll.prototype;Tu.append=function(n,t){this._pairs.push([n,t])};Tu.toString=function(n){const t=n?function(a){return n.call(this,a,Ic)}:Ic;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function r1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ru(e,n,t){if(!n)return e;const a=t&&t.encode||r1;k.isFunction(t)&&(t={serialize:t});const i=t&&t.serialize;let o;if(i?o=i(n,t):o=k.isURLSearchParams(n)?n.toString():new ll(n,t).toString(a),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Tc{constructor(){this.handlers=[]}use(n,t,a){return this.handlers.push({fulfilled:n,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){k.forEach(this.handlers,function(a){a!==null&&n(a)})}}const zu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},t1=typeof URLSearchParams<"u"?URLSearchParams:ll,a1=typeof FormData<"u"?FormData:null,i1=typeof Blob<"u"?Blob:null,o1={isBrowser:!0,classes:{URLSearchParams:t1,FormData:a1,Blob:i1},protocols:["http","https","file","blob","url","data"]},cl=typeof window<"u"&&typeof document<"u",ts=typeof navigator=="object"&&navigator||void 0,s1=cl&&(!ts||["ReactNative","NativeScript","NS"].indexOf(ts.product)<0),l1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",c1=cl&&window.location.href||"http://localhost",d1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:cl,hasStandardBrowserEnv:s1,hasStandardBrowserWebWorkerEnv:l1,navigator:ts,origin:c1},Symbol.toStringTag,{value:"Module"})),ke={...d1,...o1};function p1(e,n){return Ci(e,new ke.classes.URLSearchParams,{visitor:function(t,a,i,o){return ke.isNode&&k.isBuffer(t)?(this.append(a,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...n})}function u1(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function f1(e){const n={},t=Object.keys(e);let a;const i=t.length;let o;for(a=0;a<i;a++)o=t[a],n[o]=e[o];return n}function Ou(e){function n(t,a,i,o){let s=t[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=o>=t.length;return s=!s&&k.isArray(i)?i.length:s,c?(k.hasOwnProp(i,s)?i[s]=[i[s],a]:i[s]=a,!l):((!i[s]||!k.isObject(i[s]))&&(i[s]=[]),n(t,a,i[s],o)&&k.isArray(i[s])&&(i[s]=f1(i[s])),!l)}if(k.isFormData(e)&&k.isFunction(e.entries)){const t={};return k.forEachEntry(e,(a,i)=>{n(u1(a),i,t,0)}),t}return null}function h1(e,n,t){if(k.isString(e))try{return(n||JSON.parse)(e),k.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(e)}const Gt={transitional:zu,adapter:["xhr","http","fetch"],transformRequest:[function(n,t){const a=t.getContentType()||"",i=a.indexOf("application/json")>-1,o=k.isObject(n);if(o&&k.isHTMLForm(n)&&(n=new FormData(n)),k.isFormData(n))return i?JSON.stringify(Ou(n)):n;if(k.isArrayBuffer(n)||k.isBuffer(n)||k.isStream(n)||k.isFile(n)||k.isBlob(n)||k.isReadableStream(n))return n;if(k.isArrayBufferView(n))return n.buffer;if(k.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(o){if(a.indexOf("application/x-www-form-urlencoded")>-1)return p1(n,this.formSerializer).toString();if((l=k.isFileList(n))||a.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ci(l?{"files[]":n}:n,c&&new c,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),h1(n)):n}],transformResponse:[function(n){const t=this.transitional||Gt.transitional,a=t&&t.forcedJSONParsing,i=this.responseType==="json";if(k.isResponse(n)||k.isReadableStream(n))return n;if(n&&k.isString(n)&&(a&&!this.responseType||i)){const s=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(n)}catch(l){if(s)throw l.name==="SyntaxError"?B.from(l,B.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ke.classes.FormData,Blob:ke.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{Gt.headers[e]={}});const m1=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),g1=e=>{const n={};let t,a,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),t=s.substring(0,i).trim().toLowerCase(),a=s.substring(i+1).trim(),!(!t||n[t]&&m1[t])&&(t==="set-cookie"?n[t]?n[t].push(a):n[t]=[a]:n[t]=n[t]?n[t]+", "+a:a)}),n},Rc=Symbol("internals");function ot(e){return e&&String(e).trim().toLowerCase()}function Ia(e){return e===!1||e==null?e:k.isArray(e)?e.map(Ia):String(e)}function v1(e){const n=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=t.exec(e);)n[a[1]]=a[2];return n}const x1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function no(e,n,t,a,i){if(k.isFunction(a))return a.call(this,n,t);if(i&&(n=t),!!k.isString(n)){if(k.isString(a))return n.indexOf(a)!==-1;if(k.isRegExp(a))return a.test(n)}}function b1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,t,a)=>t.toUpperCase()+a)}function y1(e,n){const t=k.toCamelCase(" "+n);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+t,{value:function(i,o,s){return this[a].call(this,n,i,o,s)},configurable:!0})})}let _e=class{constructor(n){n&&this.set(n)}set(n,t,a){const i=this;function o(l,c,d){const p=ot(c);if(!p)throw new Error("header name must be a non-empty string");const f=k.findKey(i,p);(!f||i[f]===void 0||d===!0||d===void 0&&i[f]!==!1)&&(i[f||c]=Ia(l))}const s=(l,c)=>k.forEach(l,(d,p)=>o(d,p,c));if(k.isPlainObject(n)||n instanceof this.constructor)s(n,t);else if(k.isString(n)&&(n=n.trim())&&!x1(n))s(g1(n),t);else if(k.isObject(n)&&k.isIterable(n)){let l={},c,d;for(const p of n){if(!k.isArray(p))throw TypeError("Object iterator must return a key-value pair");l[d=p[0]]=(c=l[d])?k.isArray(c)?[...c,p[1]]:[c,p[1]]:p[1]}s(l,t)}else n!=null&&o(t,n,a);return this}get(n,t){if(n=ot(n),n){const a=k.findKey(this,n);if(a){const i=this[a];if(!t)return i;if(t===!0)return v1(i);if(k.isFunction(t))return t.call(this,i,a);if(k.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,t){if(n=ot(n),n){const a=k.findKey(this,n);return!!(a&&this[a]!==void 0&&(!t||no(this,this[a],a,t)))}return!1}delete(n,t){const a=this;let i=!1;function o(s){if(s=ot(s),s){const l=k.findKey(a,s);l&&(!t||no(a,a[l],l,t))&&(delete a[l],i=!0)}}return k.isArray(n)?n.forEach(o):o(n),i}clear(n){const t=Object.keys(this);let a=t.length,i=!1;for(;a--;){const o=t[a];(!n||no(this,this[o],o,n,!0))&&(delete this[o],i=!0)}return i}normalize(n){const t=this,a={};return k.forEach(this,(i,o)=>{const s=k.findKey(a,o);if(s){t[s]=Ia(i),delete t[o];return}const l=n?b1(o):String(o).trim();l!==o&&delete t[o],t[l]=Ia(i),a[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const t=Object.create(null);return k.forEach(this,(a,i)=>{a!=null&&a!==!1&&(t[i]=n&&k.isArray(a)?a.join(", "):a)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,t])=>n+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...t){const a=new this(n);return t.forEach(i=>a.set(i)),a}static accessor(n){const a=(this[Rc]=this[Rc]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=ot(s);a[l]||(y1(i,s),a[l]=!0)}return k.isArray(n)?n.forEach(o):o(n),this}};_e.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(_e.prototype,({value:e},n)=>{let t=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(a){this[t]=a}}});k.freezeMethods(_e);function ro(e,n){const t=this||Gt,a=n||t,i=_e.from(a.headers);let o=a.data;return k.forEach(e,function(l){o=l.call(t,o,i.normalize(),n?n.status:void 0)}),i.normalize(),o}function Du(e){return!!(e&&e.__CANCEL__)}function Jr(e,n,t){B.call(this,e??"canceled",B.ERR_CANCELED,n,t),this.name="CanceledError"}k.inherits(Jr,B,{__CANCEL__:!0});function Lu(e,n,t){const a=t.config.validateStatus;!t.status||!a||a(t.status)?e(t):n(new B("Request failed with status code "+t.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function w1(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function j1(e,n){e=e||10;const t=new Array(e),a=new Array(e);let i=0,o=0,s;return n=n!==void 0?n:1e3,function(c){const d=Date.now(),p=a[o];s||(s=d),t[i]=c,a[i]=d;let f=o,h=0;for(;f!==i;)h+=t[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),d-s<n)return;const y=p&&d-p;return y?Math.round(h*1e3/y):void 0}}function k1(e,n){let t=0,a=1e3/n,i,o;const s=(d,p=Date.now())=>{t=p,i=null,o&&(clearTimeout(o),o=null),e(...d)};return[(...d)=>{const p=Date.now(),f=p-t;f>=a?s(d,p):(i=d,o||(o=setTimeout(()=>{o=null,s(i)},a-f)))},()=>i&&s(i)]}const ri=(e,n,t=3)=>{let a=0;const i=j1(50,250);return k1(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,c=s-a,d=i(c),p=s<=l;a=s;const f={loaded:s,total:l,progress:l?s/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&p?(l-s)/d:void 0,event:o,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(f)},t)},zc=(e,n)=>{const t=e!=null;return[a=>n[0]({lengthComputable:t,total:e,loaded:a}),n[1]]},Oc=e=>(...n)=>k.asap(()=>e(...n)),C1=ke.hasStandardBrowserEnv?((e,n)=>t=>(t=new URL(t,ke.origin),e.protocol===t.protocol&&e.host===t.host&&(n||e.port===t.port)))(new URL(ke.origin),ke.navigator&&/(msie|trident)/i.test(ke.navigator.userAgent)):()=>!0,N1=ke.hasStandardBrowserEnv?{write(e,n,t,a,i,o){const s=[e+"="+encodeURIComponent(n)];k.isNumber(t)&&s.push("expires="+new Date(t).toGMTString()),k.isString(a)&&s.push("path="+a),k.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function S1(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function E1(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function Pu(e,n,t){let a=!S1(n);return e&&(a||t==!1)?E1(e,n):n}const Dc=e=>e instanceof _e?{...e}:e;function ur(e,n){n=n||{};const t={};function a(d,p,f,h){return k.isPlainObject(d)&&k.isPlainObject(p)?k.merge.call({caseless:h},d,p):k.isPlainObject(p)?k.merge({},p):k.isArray(p)?p.slice():p}function i(d,p,f,h){if(k.isUndefined(p)){if(!k.isUndefined(d))return a(void 0,d,f,h)}else return a(d,p,f,h)}function o(d,p){if(!k.isUndefined(p))return a(void 0,p)}function s(d,p){if(k.isUndefined(p)){if(!k.isUndefined(d))return a(void 0,d)}else return a(void 0,p)}function l(d,p,f){if(f in n)return a(d,p);if(f in e)return a(void 0,d)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(d,p,f)=>i(Dc(d),Dc(p),f,!0)};return k.forEach(Object.keys({...e,...n}),function(p){const f=c[p]||i,h=f(e[p],n[p],p);k.isUndefined(h)&&f!==l||(t[p]=h)}),t}const _u=e=>{const n=ur({},e);let{data:t,withXSRFToken:a,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=n;n.headers=s=_e.from(s),n.url=Ru(Pu(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(k.isFormData(t)){if(ke.hasStandardBrowserEnv||ke.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[d,...p]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([d||"multipart/form-data",...p].join("; "))}}if(ke.hasStandardBrowserEnv&&(a&&k.isFunction(a)&&(a=a(n)),a||a!==!1&&C1(n.url))){const d=i&&o&&N1.read(o);d&&s.set(i,d)}return n},A1=typeof XMLHttpRequest<"u",I1=A1&&function(e){return new Promise(function(t,a){const i=_u(e);let o=i.data;const s=_e.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=i,p,f,h,y,v;function x(){y&&y(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(p),i.signal&&i.signal.removeEventListener("abort",p)}let j=new XMLHttpRequest;j.open(i.method.toUpperCase(),i.url,!0),j.timeout=i.timeout;function m(){if(!j)return;const g=_e.from("getAllResponseHeaders"in j&&j.getAllResponseHeaders()),C={data:!l||l==="text"||l==="json"?j.responseText:j.response,status:j.status,statusText:j.statusText,headers:g,config:e,request:j};Lu(function(I){t(I),x()},function(I){a(I),x()},C),j=null}"onloadend"in j?j.onloadend=m:j.onreadystatechange=function(){!j||j.readyState!==4||j.status===0&&!(j.responseURL&&j.responseURL.indexOf("file:")===0)||setTimeout(m)},j.onabort=function(){j&&(a(new B("Request aborted",B.ECONNABORTED,e,j)),j=null)},j.onerror=function(){a(new B("Network Error",B.ERR_NETWORK,e,j)),j=null},j.ontimeout=function(){let b=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const C=i.transitional||zu;i.timeoutErrorMessage&&(b=i.timeoutErrorMessage),a(new B(b,C.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,j)),j=null},o===void 0&&s.setContentType(null),"setRequestHeader"in j&&k.forEach(s.toJSON(),function(b,C){j.setRequestHeader(C,b)}),k.isUndefined(i.withCredentials)||(j.withCredentials=!!i.withCredentials),l&&l!=="json"&&(j.responseType=i.responseType),d&&([h,v]=ri(d,!0),j.addEventListener("progress",h)),c&&j.upload&&([f,y]=ri(c),j.upload.addEventListener("progress",f),j.upload.addEventListener("loadend",y)),(i.cancelToken||i.signal)&&(p=g=>{j&&(a(!g||g.type?new Jr(null,e,j):g),j.abort(),j=null)},i.cancelToken&&i.cancelToken.subscribe(p),i.signal&&(i.signal.aborted?p():i.signal.addEventListener("abort",p)));const u=w1(i.url);if(u&&ke.protocols.indexOf(u)===-1){a(new B("Unsupported protocol "+u+":",B.ERR_BAD_REQUEST,e));return}j.send(o||null)})},T1=(e,n)=>{const{length:t}=e=e?e.filter(Boolean):[];if(n||t){let a=new AbortController,i;const o=function(d){if(!i){i=!0,l();const p=d instanceof Error?d:this.reason;a.abort(p instanceof B?p:new Jr(p instanceof Error?p.message:p))}};let s=n&&setTimeout(()=>{s=null,o(new B(`timeout ${n} of ms exceeded`,B.ETIMEDOUT))},n);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),e=null)};e.forEach(d=>d.addEventListener("abort",o));const{signal:c}=a;return c.unsubscribe=()=>k.asap(l),c}},R1=function*(e,n){let t=e.byteLength;if(t<n){yield e;return}let a=0,i;for(;a<t;)i=a+n,yield e.slice(a,i),a=i},z1=async function*(e,n){for await(const t of O1(e))yield*R1(t,n)},O1=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:t,value:a}=await n.read();if(t)break;yield a}}finally{await n.cancel()}},Lc=(e,n,t,a)=>{const i=z1(e,n);let o=0,s,l=c=>{s||(s=!0,a&&a(c))};return new ReadableStream({async pull(c){try{const{done:d,value:p}=await i.next();if(d){l(),c.close();return}let f=p.byteLength;if(t){let h=o+=f;t(h)}c.enqueue(new Uint8Array(p))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},Ni=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Vu=Ni&&typeof ReadableStream=="function",D1=Ni&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Mu=(e,...n)=>{try{return!!e(...n)}catch{return!1}},L1=Vu&&Mu(()=>{let e=!1;const n=new Request(ke.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),Pc=64*1024,as=Vu&&Mu(()=>k.isReadableStream(new Response("").body)),ti={stream:as&&(e=>e.body)};Ni&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!ti[n]&&(ti[n]=k.isFunction(e[n])?t=>t[n]():(t,a)=>{throw new B(`Response type '${n}' is not supported`,B.ERR_NOT_SUPPORT,a)})})})(new Response);const P1=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(ke.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await D1(e)).byteLength},_1=async(e,n)=>{const t=k.toFiniteNumber(e.getContentLength());return t??P1(n)},V1=Ni&&(async e=>{let{url:n,method:t,data:a,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:c,responseType:d,headers:p,withCredentials:f="same-origin",fetchOptions:h}=_u(e);d=d?(d+"").toLowerCase():"text";let y=T1([i,o&&o.toAbortSignal()],s),v;const x=y&&y.unsubscribe&&(()=>{y.unsubscribe()});let j;try{if(c&&L1&&t!=="get"&&t!=="head"&&(j=await _1(p,a))!==0){let C=new Request(n,{method:"POST",body:a,duplex:"half"}),S;if(k.isFormData(a)&&(S=C.headers.get("content-type"))&&p.setContentType(S),C.body){const[I,R]=zc(j,ri(Oc(c)));a=Lc(C.body,Pc,I,R)}}k.isString(f)||(f=f?"include":"omit");const m="credentials"in Request.prototype;v=new Request(n,{...h,signal:y,method:t.toUpperCase(),headers:p.normalize().toJSON(),body:a,duplex:"half",credentials:m?f:void 0});let u=await fetch(v,h);const g=as&&(d==="stream"||d==="response");if(as&&(l||g&&x)){const C={};["status","statusText","headers"].forEach(M=>{C[M]=u[M]});const S=k.toFiniteNumber(u.headers.get("content-length")),[I,R]=l&&zc(S,ri(Oc(l),!0))||[];u=new Response(Lc(u.body,Pc,I,()=>{R&&R(),x&&x()}),C)}d=d||"text";let b=await ti[k.findKey(ti,d)||"text"](u,e);return!g&&x&&x(),await new Promise((C,S)=>{Lu(C,S,{data:b,headers:_e.from(u.headers),status:u.status,statusText:u.statusText,config:e,request:v})})}catch(m){throw x&&x(),m&&m.name==="TypeError"&&/Load failed|fetch/i.test(m.message)?Object.assign(new B("Network Error",B.ERR_NETWORK,e,v),{cause:m.cause||m}):B.from(m,m&&m.code,e,v)}}),is={http:Xg,xhr:I1,fetch:V1};k.forEach(is,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const _c=e=>`- ${e}`,M1=e=>k.isFunction(e)||e===null||e===!1,Bu={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:n}=e;let t,a;const i={};for(let o=0;o<n;o++){t=e[o];let s;if(a=t,!M1(t)&&(a=is[(s=String(t)).toLowerCase()],a===void 0))throw new B(`Unknown adapter '${s}'`);if(a)break;i[s||"#"+o]=a}if(!a){const o=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=n?o.length>1?`since :
`+o.map(_c).join(`
`):" "+_c(o[0]):"as no adapter specified";throw new B("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return a},adapters:is};function to(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Jr(null,e)}function Vc(e){return to(e),e.headers=_e.from(e.headers),e.data=ro.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Bu.getAdapter(e.adapter||Gt.adapter)(e).then(function(a){return to(e),a.data=ro.call(e,e.transformResponse,a),a.headers=_e.from(a.headers),a},function(a){return Du(a)||(to(e),a&&a.response&&(a.response.data=ro.call(e,e.transformResponse,a.response),a.response.headers=_e.from(a.response.headers))),Promise.reject(a)})}const Fu="1.11.0",Si={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{Si[e]=function(a){return typeof a===e||"a"+(n<1?"n ":" ")+e}});const Mc={};Si.transitional=function(n,t,a){function i(o,s){return"[Axios v"+Fu+"] Transitional option '"+o+"'"+s+(a?". "+a:"")}return(o,s,l)=>{if(n===!1)throw new B(i(s," has been removed"+(t?" in "+t:"")),B.ERR_DEPRECATED);return t&&!Mc[s]&&(Mc[s]=!0,console.warn(i(s," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(o,s,l):!0}};Si.spelling=function(n){return(t,a)=>(console.warn(`${a} is likely a misspelling of ${n}`),!0)};function B1(e,n,t){if(typeof e!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let i=a.length;for(;i-- >0;){const o=a[i],s=n[o];if(s){const l=e[o],c=l===void 0||s(l,o,e);if(c!==!0)throw new B("option "+o+" must be "+c,B.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new B("Unknown option "+o,B.ERR_BAD_OPTION)}}const Ta={assertOptions:B1,validators:Si},pn=Ta.validators;let or=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Tc,response:new Tc}}async request(n,t){try{return await this._request(n,t)}catch(a){if(a instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{a.stack?o&&!String(a.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+o):a.stack=o}catch{}}throw a}}_request(n,t){typeof n=="string"?(t=t||{},t.url=n):t=n||{},t=ur(this.defaults,t);const{transitional:a,paramsSerializer:i,headers:o}=t;a!==void 0&&Ta.assertOptions(a,{silentJSONParsing:pn.transitional(pn.boolean),forcedJSONParsing:pn.transitional(pn.boolean),clarifyTimeoutError:pn.transitional(pn.boolean)},!1),i!=null&&(k.isFunction(i)?t.paramsSerializer={serialize:i}:Ta.assertOptions(i,{encode:pn.function,serialize:pn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Ta.assertOptions(t,{baseUrl:pn.spelling("baseURL"),withXsrfToken:pn.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&k.merge(o.common,o[t.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),t.headers=_e.concat(s,o);const l=[];let c=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(t)===!1||(c=c&&x.synchronous,l.unshift(x.fulfilled,x.rejected))});const d=[];this.interceptors.response.forEach(function(x){d.push(x.fulfilled,x.rejected)});let p,f=0,h;if(!c){const v=[Vc.bind(this),void 0];for(v.unshift(...l),v.push(...d),h=v.length,p=Promise.resolve(t);f<h;)p=p.then(v[f++],v[f++]);return p}h=l.length;let y=t;for(f=0;f<h;){const v=l[f++],x=l[f++];try{y=v(y)}catch(j){x.call(this,j);break}}try{p=Vc.call(this,y)}catch(v){return Promise.reject(v)}for(f=0,h=d.length;f<h;)p=p.then(d[f++],d[f++]);return p}getUri(n){n=ur(this.defaults,n);const t=Pu(n.baseURL,n.url,n.allowAbsoluteUrls);return Ru(t,n.params,n.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(n){or.prototype[n]=function(t,a){return this.request(ur(a||{},{method:n,url:t,data:(a||{}).data}))}});k.forEach(["post","put","patch"],function(n){function t(a){return function(o,s,l){return this.request(ur(l||{},{method:n,headers:a?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}or.prototype[n]=t(),or.prototype[n+"Form"]=t(!0)});let F1=class Uu{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(o){t=o});const a=this;this.promise.then(i=>{if(!a._listeners)return;let o=a._listeners.length;for(;o-- >0;)a._listeners[o](i);a._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{a.subscribe(l),o=l}).then(i);return s.cancel=function(){a.unsubscribe(o)},s},n(function(o,s,l){a.reason||(a.reason=new Jr(o,s,l),t(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const t=this._listeners.indexOf(n);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const n=new AbortController,t=a=>{n.abort(a)};return this.subscribe(t),n.signal.unsubscribe=()=>this.unsubscribe(t),n.signal}static source(){let n;return{token:new Uu(function(i){n=i}),cancel:n}}};function U1(e){return function(t){return e.apply(null,t)}}function Z1(e){return k.isObject(e)&&e.isAxiosError===!0}const os={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(os).forEach(([e,n])=>{os[n]=e});function Zu(e){const n=new or(e),t=bu(or.prototype.request,n);return k.extend(t,or.prototype,n,{allOwnKeys:!0}),k.extend(t,n,null,{allOwnKeys:!0}),t.create=function(i){return Zu(ur(e,i))},t}const se=Zu(Gt);se.Axios=or;se.CanceledError=Jr;se.CancelToken=F1;se.isCancel=Du;se.VERSION=Fu;se.toFormData=Ci;se.AxiosError=B;se.Cancel=se.CanceledError;se.all=function(n){return Promise.all(n)};se.spread=U1;se.isAxiosError=Z1;se.mergeConfig=ur;se.AxiosHeaders=_e;se.formToJSON=e=>Ou(k.isHTMLForm(e)?new FormData(e):e);se.getAdapter=Bu.getAdapter;se.HttpStatusCode=os;se.default=se;const{Axios:P2,AxiosError:_2,CanceledError:V2,isCancel:M2,CancelToken:B2,VERSION:F2,all:U2,Cancel:Z2,isAxiosError:K2,spread:H2,toFormData:$2,AxiosHeaders:W2,HttpStatusCode:q2,formToJSON:Y2,getAdapter:G2,mergeConfig:J2}=se,Ku="https://koop-api-a28ac382dd56.herokuapp.com/api",Ce=se.create({baseURL:Ku,withCredentials:!0}),K1=se.create({baseURL:Ku,withCredentials:!0});let ao=!1,ss=[];function H1(e){ss.push(e)}function $1(e){ss.forEach(n=>{try{n(e)}catch{}}),ss=[]}function W1({getAccessToken:e,setAccessToken:n,onLogout:t}){Ce.interceptors.request.use(a=>{var i,o;try{let s;try{s=e==null?void 0:e()}catch{}if(!s&&typeof window<"u")try{s=(i=window.localStorage)==null?void 0:i.getItem("accessToken")}catch{}s&&!((o=a.headers)!=null&&o.Authorization)&&(a.headers=a.headers||{},a.headers.Authorization=`Bearer ${s}`)}catch{}return a}),Ce.interceptors.response.use(a=>a,async a=>{var p,f;const{response:i,config:o}=a||{},s=i==null?void 0:i.status,l=o||{},c=String((l==null?void 0:l.url)||""),d=c.includes("/auth/login")||c.includes("/auth/register")||c.includes("/auth/refresh");if(s!==401||d||l._retry)return Promise.reject(a);if(l._retry=!0,ao)return new Promise((h,y)=>{H1(v=>{try{l.headers=l.headers||{},v&&(l.headers.Authorization=`Bearer ${v}`),h(Ce(l))}catch(x){y(x)}})});ao=!0;try{const h=await K1.post("/auth/refresh"),y=(p=h==null?void 0:h.data)==null?void 0:p.accessToken;if(!y)throw new Error("No accessToken in refresh");try{n==null||n(y)}catch{}return $1(y),l.headers=l.headers||{},l.headers.Authorization=`Bearer ${y}`,Ce(l)}catch(h){const y=(f=h==null?void 0:h.response)==null?void 0:f.status;if(y===401||y===403)try{await(t==null?void 0:t())}catch{}return Promise.reject(h)}finally{ao=!1}})}const Hu=w.createContext(null),Bc=["admin","user"];function ls(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=Bc.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Bc.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function ha(e){try{const n=e.split(".")[1],t=atob(n.replace(/-/g,"+").replace(/_/g,"/"));return JSON.parse(t)}catch{return null}}function ma(e,n){return e?{id:e.sub,name:e.name,email:e.email,roles:ls(e.roles),active:e.active!==!1,driveFolders:e.driveFolders||[]}:n?{id:n.id,name:n.name,email:n.email,roles:ls(n.roles),active:n.active!==!1,driveFolders:n.driveFolders||[]}:null}function q1({children:e}){const[n,t]=w.useState(()=>localStorage.getItem("accessToken")||null),[a,i]=w.useState(()=>{const y=localStorage.getItem("accessToken");if(!y)return null;const v=ha(y);return ma(v,null)}),[o,s]=w.useState(!1),l=!!n;w.useEffect(()=>{if(!n)localStorage.removeItem("accessToken"),i(null);else{localStorage.setItem("accessToken",n);const y=ha(n);y&&i(ma(y,null))}},[n]);const c=async(y,v)=>{s(!0);try{const{accessToken:x,user:j}=await ug({email:y,password:v});t(x);const m=ha(x);return i(ma(m,j)),{ok:!0}}catch(x){return{ok:!1,error:x.message}}finally{s(!1)}},d=async(y,v,x,j)=>{s(!0);try{const m=Array.isArray(j)&&j.length>0,u=await dg({name:y,email:v,password:x,roles:m?ls(j):void 0});if(u!=null&&u.accessToken){t(u.accessToken);const g=ha(u.accessToken);i(ma(g,u.user))}return{ok:!0,data:u}}catch(m){return{ok:!1,error:m.message}}finally{s(!1)}},p=async()=>{try{await fg()}catch{}finally{t(null),i(null)}},f=w.useMemo(()=>({accessToken:n,user:a,isAuthenticated:l,loading:o,login:c,register:d,logout:p,refresh:pg}),[n,a,l,o]),h=w.useRef(!1);return w.useEffect(()=>{h.current||(W1({getAccessToken:()=>n,setAccessToken:y=>t(y),onLogout:()=>p()}),h.current=!0)},[]),r.jsx(Hu.Provider,{value:f,children:e})}function Ve(){const e=w.useContext(Hu);if(!e)throw new Error("useAuth debe usarse dentro de AuthProvider");return e}const $u="/assets/Koop%20Logo-DEFOyNWT.png";function Y1(){var h,y;const{login:e,loading:n}=Ve(),t=Yr(),i=((y=(h=gn().state)==null?void 0:h.from)==null?void 0:y.pathname)||"/dashboard",[o,s]=w.useState(""),[l,c]=w.useState(""),[d,p]=w.useState(""),f=async v=>{v.preventDefault(),p(""),console.log("Submitting login form, Hola q ac",o);const x=await e(o,l);if(!x.ok){p(x.error||"Error al iniciar sesión");return}t(i,{replace:!0})};return w.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),r.jsxs("div",{className:"auth-page",children:[r.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:r.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),r.jsx("div",{className:"auth-bg-overlay"}),r.jsxs("div",{className:"auth-card",children:[r.jsx(T,{to:"/",children:r.jsx("img",{src:$u,alt:"Logo KOOP",className:"logo"})}),r.jsx("h2",{children:"Login KOOP"}),d&&r.jsx("div",{className:"auth-error",children:d}),r.jsxs("form",{onSubmit:f,children:[r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"email",children:"Correo"}),r.jsx("input",{id:"email",type:"email",placeholder:"Ingrese su correo",value:o,onChange:v=>s(v.target.value),required:!0})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"password",children:"Contraseña"}),r.jsx("input",{id:"password",type:"password",placeholder:"Ingrese su contraseña",value:l,onChange:v=>c(v.target.value),required:!0})]}),r.jsx("button",{type:"submit",className:"login-button",disabled:n,children:n?"Ingresando...":"Iniciar sesión"})]}),r.jsxs("div",{className:"auth-actions",children:["¿No tienes cuenta? ",r.jsx(T,{to:"/register",children:"Regístrate"})," · ",r.jsx(T,{to:"/",children:"Volver al inicio"})]})]})]})}function G1(){const[e,n]=w.useState({name:"",email:"",password:""}),[t,a]=w.useState(!1),[i,o]=w.useState(""),[s,l]=w.useState(""),{register:c}=Ve(),d=Yr(),p=h=>n({...e,[h.target.name]:h.target.value}),f=async h=>{h.preventDefault(),o(""),l(""),a(!0);try{const y=await c(e.name,e.email,e.password);if(y.ok){const v=y.data||{ok:!0};v!=null&&v.accessToken?d("/dashboard"):(l("Tu registro fue recibido. Un administrador activara tu cuenta y te avisaremos por correo."),n({name:"",email:"",password:""}))}else o(y.error||"Error en registro")}catch(y){const v=(y==null?void 0:y.message)||"Error en registro";o(v)}finally{a(!1)}};return w.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),r.jsxs("div",{className:"auth-page",children:[r.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:r.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),r.jsx("div",{className:"auth-bg-overlay"}),r.jsxs("div",{className:"auth-card",children:[r.jsx("img",{src:$u,alt:"Logo KOOP",className:"logo"}),r.jsx("h2",{children:"Crear Cuenta"}),i&&r.jsx("div",{className:"auth-error",children:i}),s&&r.jsx("div",{className:"auth-info",children:s}),r.jsxs("form",{onSubmit:f,children:[r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"name",children:"Nombre"}),r.jsx("input",{id:"name",name:"name",type:"text",placeholder:"Tu nombre",value:e.name,onChange:p})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"email",children:"Correo"}),r.jsx("input",{id:"email",name:"email",type:"email",placeholder:"tu@email.com",value:e.email,onChange:p,required:!0})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"password",children:"Contrasena"}),r.jsx("input",{id:"password",name:"password",type:"password",placeholder:"Minimo 8 caracteres",value:e.password,onChange:p,required:!0})]}),r.jsx("button",{type:"submit",className:"login-button",disabled:t,children:t?"Creando...":"Registrarme"})]}),r.jsxs("div",{className:"auth-actions",children:["Ya tienes cuenta? ",r.jsx(T,{to:"/login",children:"Inicia sesion"})]})]})]})}function J1(e){return e!=null&&e.roles?(Array.isArray(e.roles)?e.roles:[e.roles]).map(n=>String(n||"").toLowerCase()).includes("admin"):!1}function Q1(){const{user:e,logout:n}=Ve(),t=J1(e);return e?r.jsxs("div",{style:{padding:24,display:"flex",flexDirection:"column",gap:16},children:[r.jsx("h1",{children:"Panel Privado"}),r.jsxs("div",{children:[r.jsxs("p",{children:["Bienvenido: ",e.email]}),r.jsxs("p",{children:["Roles: ",Array.isArray(e.roles)?e.roles.join(", "):"N/A"]}),r.jsxs("p",{children:["Estado: ",e.active===!1?"Inactivo":"Activo"]})]}),t&&r.jsx("div",{style:{display:"flex",gap:12},children:r.jsx(T,{className:"btn btn-primary",to:"/admin/usuarios",children:"Gestionar usuarios"})}),r.jsx("div",{children:r.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Cerrar sesion"})})]}):r.jsxs("div",{style:{padding:24},children:[r.jsx("h1",{children:"Panel Privado"}),r.jsx("p",{children:"No hay usuario."})]})}async function Wu(){const{data:e}=await Ce.get("/admin/users");return e}async function X1(e,n){const{data:t}=await Ce.patch(`/admin/users/${e}/active`,{active:n});return t}async function e2(e){const{data:n}=await Ce.post(`/admin/users/${e}/grant-admin`);return n}async function n2(e){const{data:n}=await Ce.post(`/admin/users/${e}/revoke-admin`);return n}async function r2(e){const{data:n}=await Ce.delete(`/admin/users/${e}`);return n}async function t2(){const{data:e}=await Ce.get("/admin/clients/active");return e}async function a2(e,n){const{data:t}=await Ce.patch(`/admin/clients/${e}`,n);return t}async function i2(e,n){const{data:t}=await Ce.post(`/admin/clients/from-user/${e}`,n);return t}const Fc=["admin","user"];function vr(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=Fc.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Fc.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function o2(e){return vr(e==null?void 0:e.roles).includes("admin")}function s2(){const{user:e}=Ve(),n=o2(e),[t,a]=w.useState([]),[i,o]=w.useState(!1),[s,l]=w.useState(null),[c,d]=w.useState(null),[p,f]=w.useState(null),[h,y]=w.useState(null),[v,x]=w.useState(null),[j,m]=w.useState(!1),[u,g]=w.useState(null),[b,C]=w.useState(null),S=e==null?void 0:e.id,I=async()=>{var E,F;if(n){o(!0),l(null);try{const _=await Wu();a(Array.isArray(_==null?void 0:_.items)?_.items.map(Y=>({...Y,roles:vr(Y.roles)})):[])}catch(_){l(((F=(E=_==null?void 0:_.response)==null?void 0:E.data)==null?void 0:F.message)||(_==null?void 0:_.message)||"No se pudo cargar la lista")}finally{o(!1)}}};w.useEffect(()=>{I()},[n]);const R=async(E,F)=>{var _,Y;try{d(E),await X1(E,F),a(N=>N.map(D=>D.id===E?{...D,active:F}:D))}catch(N){l(((Y=(_=N==null?void 0:N.response)==null?void 0:_.data)==null?void 0:Y.message)||(N==null?void 0:N.message)||"No se pudo actualizar el usuario")}finally{d(null)}},M=async E=>{var _,Y;if(window.confirm("Deseas otorgar rol de administrador a este usuario?"))try{l(null),f(E);const N=await e2(E);N!=null&&N.user&&a(D=>D.map(L=>L.id===E?{...L,...N.user,roles:vr(N.user.roles)}:L))}catch(N){l(((Y=(_=N==null?void 0:N.response)==null?void 0:_.data)==null?void 0:Y.message)||(N==null?void 0:N.message)||"No se pudo actualizar los roles")}finally{f(null)}},P=async E=>{var _,Y;if(window.confirm("Deseas quitar el rol de administrador a este usuario?"))try{l(null),f(E);const N=await n2(E);N!=null&&N.user&&a(D=>D.map(L=>L.id===E?{...L,...N.user,roles:vr(N.user.roles)}:L))}catch(N){l(((Y=(_=N==null?void 0:N.response)==null?void 0:_.data)==null?void 0:Y.message)||(N==null?void 0:N.message)||"No se pudo actualizar los roles")}finally{f(null)}},H=async E=>{var _,Y;if(window.confirm("Deseas eliminar este usuario? Esta accion es permanente."))try{y(E),await r2(E),a(N=>N.filter(D=>D.id!==E))}catch(N){l(((Y=(_=N==null?void 0:N.response)==null?void 0:_.data)==null?void 0:Y.message)||(N==null?void 0:N.message)||"No se pudo eliminar el usuario")}finally{y(null)}},Te=E=>{g(null),x({userId:E.id,fullName:E.name||"",documentType:"",documentNumber:"",birthDate:"",phone:"",email:E.email||"",address:"",contactInfo:""})},Q=async()=>{var E,F;if(v!=null&&v.userId){g(null);try{m(!0);const _={fullName:String(v.fullName||"").trim(),documentType:String(v.documentType||"").trim(),documentNumber:String(v.documentNumber||"").trim(),birthDate:v.birthDate?new Date(v.birthDate).toISOString():void 0,phone:String(v.phone||"").trim(),email:String(v.email||"").trim(),address:String(v.address||"").trim(),contactInfo:String(v.contactInfo||"").trim()};if(!_.fullName){g("El nombre completo es requerido"),m(!1);return}await i2(v.userId,_),x(null)}catch(_){g(((F=(E=_==null?void 0:_.response)==null?void 0:E.data)==null?void 0:F.message)||(_==null?void 0:_.message)||"No se pudo crear el cliente")}finally{m(!1)}}};return n?r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",padding:32},children:[r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[r.jsx("style",{children:`
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
        `}),r.jsxs("div",{className:"dash-header",style:{marginBottom:16},children:[r.jsx("div",{className:"dash-title",children:"Administrar usuarios"}),r.jsx("button",{className:"btn btn-secondary",onClick:I,disabled:i,children:i?"Actualizando...":"Refrescar"})]}),s&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:12,borderRadius:8,marginBottom:16},children:s}),r.jsx("div",{className:"dash-item only-desktop",style:{overflowX:"auto"},children:r.jsxs("table",{className:"me-table",style:{minWidth:720},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nombre"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Roles"}),r.jsx("th",{children:"Activo"}),r.jsx("th",{children:"Creado"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[t.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:6,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay usuarios para mostrar"})}),t.map(E=>{const F=E.createdAt?new Date(E.createdAt):null,_=vr(E.roles),Y=_.includes("admin"),N=E.active!==!1&&E.isActive!==!1,D=S===E.id,L=_.length>0?_.join(", "):"-";return r.jsxs("tr",{children:[r.jsx("td",{children:E.name||"-"}),r.jsx("td",{children:E.email}),r.jsx("td",{children:L}),r.jsx("td",{children:r.jsx("span",{className:`me-badge ${N?"me-badge-success":"me-badge-error"}`,children:N?"Activo":"Inactivo"})}),r.jsx("td",{children:F?F.toLocaleString():"-"}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>R(E.id,!N),disabled:c===E.id,children:c===E.id?"Guardando...":N?"Desactivar":"Activar"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Te(E),children:"Convertir a cliente"}),Y?r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>P(E.id),disabled:p===E.id||D,title:D?"No puedes modificar tu propio rol":"Quitar rol admin",children:p===E.id?"Quitando...":"Quitar admin"}):r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>M(E.id),disabled:p===E.id,children:p===E.id?"Asignando...":"Hacer admin"}),r.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>H(E.id),disabled:h===E.id||D,title:D?"No puedes eliminar tu propio usuario":"Eliminar usuario",children:h===E.id?"Eliminando...":"Eliminar"})]})})]},E.id)})]})]})}),r.jsxs("div",{className:"dash-item only-mobile mobile-list",children:[t.length===0&&r.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay usuarios para mostrar"}),t.map(E=>{const F=E.createdAt?new Date(E.createdAt):null,_=vr(E.roles),Y=_.includes("admin"),N=E.active!==!1&&E.isActive!==!1,D=S===E.id,L=b===E.id,W=_.length>0?_.join(", "):"-";return r.jsxs("div",{className:"mobile-item",children:[r.jsxs("button",{type:"button",className:"btn btn-primary btn-sm mobile-item-header",onClick:()=>C(ie=>ie===E.id?null:E.id),"aria-expanded":L,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("div",{className:"mobile-item-title",children:E.name||"-"}),r.jsx("div",{style:{opacity:.9,fontSize:12,paddingRight:10},children:L?"−":"+"})]}),L&&r.jsxs("div",{className:"mobile-item-details",children:[r.jsxs("div",{className:"kv",children:[r.jsx("span",{children:"Email"}),r.jsx("div",{children:E.email||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Roles"}),r.jsx("div",{children:W})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Estado"}),r.jsx("div",{children:r.jsx("span",{className:`me-badge ${N?"me-badge-success":"me-badge-error"}`,children:N?"Activo":"Inactivo"})})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Creado"}),r.jsx("div",{children:F?F.toLocaleString():"-"})]}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:10,justifyContent:"flex-end"},children:[r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>R(E.id,!N),disabled:c===E.id,children:c===E.id?"Guardando...":N?"Desactivar":"Activar"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Te(E),children:"Convertir a cliente"}),Y?r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>P(E.id),disabled:p===E.id||D,title:D?"No puedes modificar tu propio rol":"Quitar rol admin",children:p===E.id?"Quitando...":"Quitar admin"}):r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>M(E.id),disabled:p===E.id,children:p===E.id?"Asignando...":"Hacer admin"}),r.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>H(E.id),disabled:h===E.id||D,title:D?"No puedes eliminar tu propio usuario":"Eliminar usuario",children:h===E.id?"Eliminando...":"Eliminar"})]})]})]},E.id)})]})]}),v&&r.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:E=>{E.target===E.currentTarget&&x(null)},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:680,padding:16},children:[r.jsx("div",{className:"dash-header",style:{marginBottom:12},children:r.jsx("div",{className:"dash-title",children:"Convertir usuario en cliente"})}),u&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:10,borderRadius:8,marginBottom:12},children:u}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:12},children:[r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Nombre completo"}),r.jsx("input",{value:v.fullName,onChange:E=>x(F=>({...F,fullName:E.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:12},children:[r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Tipo de documento"}),r.jsx("input",{placeholder:"CC / CE / NIT / PAS",value:v.documentType,onChange:E=>x(F=>({...F,documentType:E.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Número de documento"}),r.jsx("input",{value:v.documentNumber,onChange:E=>x(F=>({...F,documentNumber:E.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]})]}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Fecha de nacimiento"}),r.jsx("input",{type:"date",value:v.birthDate,onChange:E=>x(F=>({...F,birthDate:E.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Teléfono fijo / celular"}),r.jsx("input",{value:v.phone,onChange:E=>x(F=>({...F,phone:E.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Correo electrónico"}),r.jsx("input",{type:"email",value:v.email,onChange:E=>x(F=>({...F,email:E.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]})]}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Dirección física"}),r.jsx("input",{value:v.address,onChange:E=>x(F=>({...F,address:E.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Información de contacto (opcional)"}),r.jsx("textarea",{rows:3,value:v.contactInfo,onChange:E=>x(F=>({...F,contactInfo:E.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px",resize:"vertical"}})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>x(null),disabled:j,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:Q,disabled:j,children:j?"Guardando...":"Crear cliente"})]})]})})]}):r.jsx("div",{className:"dash-page",style:{padding:40},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Esta seccion esta disponible solo para administradores."})]})})}const Uc=["admin","user"];function l2(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=Uc.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Uc.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function c2(e){return l2(e==null?void 0:e.roles).includes("admin")}function d2(){const{user:e}=Ve(),n=c2(e),[t,a]=w.useState([]),[i,o]=w.useState(!1),[s,l]=w.useState(null),[c,d]=w.useState(null),[p,f]=w.useState(!1),[h,y]=w.useState(""),[v,x]=w.useState(null),j=async()=>{var b,C;if(n){o(!0),l(null);try{const S=await t2(),I=Array.isArray(S==null?void 0:S.items)?S.items:[];a(I)}catch(S){l(((C=(b=S==null?void 0:S.response)==null?void 0:b.data)==null?void 0:C.message)||(S==null?void 0:S.message)||"No se pudo cargar la lista de clientes")}finally{o(!1)}}};w.useEffect(()=>{j()},[n]);const m=w.useMemo(()=>{const b=String(h||"").trim().toLowerCase();return b?t.filter(C=>[C.name,C.email,C.documentNumber,C.phone,C.id].map(S=>String(S||"").toLowerCase()).some(S=>S.includes(b))):t},[t,h]),u=b=>{d({id:b.id,name:b.name||"",email:b.email||"",documentNumber:b.documentNumber||"",phone:b.phone||""})},g=async()=>{var C,S;if(!c)return;const b={name:String(c.name||"").trim(),documentNumber:String(c.documentNumber||"").trim(),phone:String(c.phone||"").trim()};try{f(!0),l(null);const I=await a2(c.id,b),R=(I==null?void 0:I.client)||null;R&&a(M=>M.map(P=>P.id===R.id?{...P,...R}:P)),d(null)}catch(I){l(((S=(C=I==null?void 0:I.response)==null?void 0:C.data)==null?void 0:S.message)||(I==null?void 0:I.message)||"No se pudo guardar la informacion")}finally{f(!1)}};return n?r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",padding:32},children:[r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[r.jsx("style",{children:`
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
        `}),r.jsxs("div",{className:"dash-header clients-header",style:{marginBottom:16},children:[r.jsx("div",{className:"dash-title",children:"Clientes activos"}),r.jsxs("div",{className:"clients-actions",children:[r.jsx("input",{type:"search",placeholder:"Buscar por nombre, email, cedula o celular",value:h,onChange:b=>y(b.target.value),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"6px 10px"}}),r.jsx("button",{className:"btn btn-secondary",onClick:j,disabled:i,children:i?"Actualizando...":"Refrescar"})]})]}),s&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:12,borderRadius:8,marginBottom:16},children:s}),r.jsx("div",{className:"dash-item only-desktop",style:{overflowX:"auto"},children:r.jsxs("table",{className:"me-table",style:{minWidth:820},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nombre"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Cedula"}),r.jsx("th",{children:"Celular"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[m.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:5,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay clientes activos para mostrar"})}),m.map(b=>r.jsxs("tr",{children:[r.jsx("td",{children:b.name||"-"}),r.jsx("td",{children:b.email||"-"}),r.jsx("td",{children:b.documentNumber||"-"}),r.jsx("td",{children:b.phone||"-"}),r.jsx("td",{children:r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>u(b),children:"Editar"})})})]},b.id))]})]})}),r.jsxs("div",{className:"dash-item only-mobile mobile-list",children:[m.length===0&&r.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay clientes activos para mostrar"}),m.map(b=>{const C=v===b.id;return r.jsxs("div",{className:"mobile-item",children:[r.jsxs("button",{type:"button",className:"btn btn-primary btn-sm mobile-item-header",onClick:()=>x(S=>S===b.id?null:b.id),"aria-expanded":C,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("div",{className:"mobile-item-title",children:b.name||"-"}),r.jsx("div",{style:{opacity:.9,fontSize:12,paddingRight:10},children:C?"▲":"▼"})]}),C&&r.jsxs("div",{className:"mobile-item-details",children:[r.jsxs("div",{className:"kv",children:[r.jsx("span",{children:"Email"}),r.jsx("div",{children:b.email||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Cédula"}),r.jsx("div",{children:b.documentNumber||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Celular"}),r.jsx("div",{children:b.phone||"-"})]}),r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10},children:r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>u(b),children:"Editar"})})]})]},b.id)})]})]}),c&&r.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:b=>{b.target===b.currentTarget&&d(null)},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:560,padding:16},children:[r.jsx("div",{className:"dash-header",style:{marginBottom:12},children:r.jsx("div",{className:"dash-title",children:"Editar cliente"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:12},children:[r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Nombre"}),r.jsx("input",{value:c.name,onChange:b=>d(C=>({...C,name:b.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Email"}),r.jsx("input",{type:"email",value:c.email,readOnly:!0,style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Cedula"}),r.jsx("input",{value:c.documentNumber,onChange:b=>d(C=>({...C,documentNumber:b.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Celular"}),r.jsx("input",{value:c.phone,onChange:b=>d(C=>({...C,phone:b.target.value})),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>d(null),disabled:p,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:g,disabled:p,children:p?"Guardando...":"Guardar cambios"})]})]})})]}):r.jsx("div",{className:"dash-page",style:{padding:40},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Esta seccion esta disponible solo para administradores."})]})})}const qu="koop.calendar.events";function Zc(){if(typeof window>"u")return[];try{const e=window.localStorage.getItem(qu);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.filter(Boolean):[]}catch(e){return console.warn("[calendarStorage] load error",e),[]}}function p2(e){if(!(typeof window>"u"))try{window.localStorage.setItem(qu,JSON.stringify(e??[]))}catch(n){console.warn("[calendarStorage] save error",n)}}const u2="koop.calendar.events";function Yu(){const[e,n]=w.useState(()=>Zc());w.useEffect(()=>{const a=i=>{(i==null?void 0:i.key)===u2&&n(Zc())};return typeof window<"u"&&window.addEventListener("storage",a),()=>{typeof window<"u"&&window.removeEventListener("storage",a)}},[]);const t=w.useCallback(a=>{n(i=>{const o=typeof a=="function"?a(i):a;return p2(o),o})},[]);return[e,t]}function Ei(e){if(e==null)return"";try{return String(e).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0000-\u001F\u007F-\u009F]/g,"").replace(/\u00A0/g," ").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/\uFFFD/g,"").replace(/\s+/g," ").trim().toUpperCase()}catch{return String(e).toUpperCase()}}async function f2({limit:e,subfolder:n}={}){const t={};typeof e=="number"&&(t.limit=e),n&&(t.subfolder=n);const{data:a}=await Ce.get("/docs/recent",{params:t});return a}async function Gu(e,{subfolder:n}={}){if(!e)throw new Error("Archivo requerido");const t=new FormData;t.append("file",e),n&&t.append("subfolder",n);const{data:a}=await Ce.post("/docs/upload",t,{headers:{"Content-Type":"multipart/form-data"}});return a}async function h2(e,n=600){if(!e)throw new Error("Key requerida");const t={key:e,expires:n},{data:a}=await Ce.get("/docs/download-url",{params:t});return a}const m2="documentos_iniciales";function Kc(e){return String(e||"").trim()}function Ju({buttonLabel:e="Subir documento",buttonClassName:n="btn btn-primary",defaultFolder:t=m2,allowFolderInput:a=!0,onUploaded:i}){const[o,s]=w.useState(!1),[l,c]=w.useState(null),[d,p]=w.useState(t||""),[f,h]=w.useState(()=>Date.now()),[y,v]=w.useState(null),[x,j]=w.useState(null),[m,u]=w.useState(!1),g=()=>{c(null),p(t||""),h(Date.now()),v(null),j(null),u(!1)},b=()=>{g(),s(!0)},C=()=>{s(!1),g()},S=R=>{var P;const M=((P=R.target.files)==null?void 0:P[0])||null;c(M),v(null),M&&j(null)},I=async R=>{var P,H,Te;if(R.preventDefault(),!l){v("Selecciona un archivo");return}const M=Kc(a?d:t);try{u(!0),v(null);const Q=await Gu(l,{subfolder:M||void 0});if(j((P=Q==null?void 0:Q.file)!=null&&P.key?"Archivo subido correctamente":"Archivo subido"),c(null),h(Date.now()),typeof i=="function")try{i(Q)}catch{}}catch(Q){v(((Te=(H=Q==null?void 0:Q.response)==null?void 0:H.data)==null?void 0:Te.message)||(Q==null?void 0:Q.message)||"No se pudo subir el archivo")}finally{u(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:n,onClick:b,children:e}),o&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:16},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:480,position:"relative"},children:[r.jsx("button",{type:"button",onClick:C,style:{position:"absolute",top:12,right:12,background:"transparent",border:"none",color:"#334155",fontSize:20,cursor:"pointer"},"aria-label":"Cerrar",children:"X"}),r.jsx("h3",{className:"dash-title",style:{marginBottom:16},children:"Subir documento"}),r.jsxs("form",{onSubmit:I,children:[r.jsxs("div",{style:{marginBottom:12},children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Archivo"}),r.jsx("input",{type:"file",onChange:S,disabled:m,required:!0,style:{width:"100%"}},f)]}),a?r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Subcarpeta (opcional)"}),r.jsx("input",{type:"text",placeholder:t||"documentos_iniciales",value:d,onChange:R=>p(R.target.value),disabled:m,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #cbd5f5"}})]}):r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Carpeta destino"}),r.jsx("input",{type:"text",value:t||"",readOnly:!0,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #cbd5f5",background:"#1f2937",color:"#e2e8f0"}})]}),y&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6,marginBottom:12},children:y}),x&&r.jsx("div",{style:{background:"#14532d",color:"#bbf7d0",padding:8,borderRadius:6,marginBottom:12},children:x}),r.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"flex-end"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:C,disabled:m,children:"Cancelar"}),r.jsx("button",{type:"submit",className:"btn btn-primary",disabled:m||!l,children:m?"Subiendo...":"Subir"})]})]})]})})]})}const g2=["Lun","Mar","Mie","Jue","Vie","Sab","Dom"];function v2(e){const n=e.getFullYear(),t=e.getMonth(),i=(new Date(n,t,1).getDay()+6)%7,o=new Date(n,t+1,0).getDate(),s=[];let l=1-i;for(let c=0;c<6;c+=1){const d=[];for(let p=0;p<7;p+=1){const f=new Date(n,t,l),h=l>=1&&l<=o;d.push({date:f,inCurrentMonth:h}),l+=1}s.push(d)}return s}function x2(e){if(!e)return null;const n=e.getFullYear(),t=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${t}-${a}`}function Qu({value:e,onChange:n,onDateSelect:t,events:a=[],className:i=""}){const o=w.useMemo(()=>new Date,[]),[s,l]=w.useState(()=>new Date(o.getFullYear(),o.getMonth(),1)),[c,d]=w.useState(o);w.useEffect(()=>{e instanceof Date&&(d(e),l(new Date(e.getFullYear(),e.getMonth(),1)))},[e]);const p=e instanceof Date?e:c,f=typeof n=="function"?n:t,h=w.useMemo(()=>s.toLocaleDateString("es-ES",{month:"long",year:"numeric"}),[s]),y=w.useMemo(()=>v2(s),[s]),v=w.useMemo(()=>{const u=new Map;return(a||[]).forEach(g=>{const b=(g==null?void 0:g.date)||(g==null?void 0:g.dateKey);b&&(u.has(b)||u.set(b,[]),u.get(b).push(g))}),u},[a]),x=u=>{u instanceof Date&&(e instanceof Date||d(u),typeof f=="function"&&f(u))},j=u=>{l(g=>new Date(g.getFullYear(),g.getMonth()+u,1))},m=["dash-item",i].filter(Boolean).join(" ").trim();return r.jsxs("div",{className:m,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>j(-1),"aria-label":"Mes anterior",children:"◀"}),r.jsx("div",{style:{fontWeight:600,textTransform:"capitalize"},children:h}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>j(1),"aria-label":"Mes siguiente",children:"▶"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:6,marginBottom:8},children:g2.map(u=>r.jsx("div",{style:{textAlign:"center",fontSize:12,fontWeight:600,opacity:.75},children:u},u))}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:6},children:y.map((u,g)=>u.map(({date:b,inCurrentMonth:C},S)=>{const I=x2(b),R=b.toDateString()===o.toDateString(),M=b.toDateString()===p.toDateString(),P=v.get(I)||[],H={position:"relative",borderRadius:8,border:"1px solid rgba(148, 163, 184, 0.25)",padding:"8px 0",textAlign:"center",fontSize:13,cursor:C?"pointer":"default",opacity:C?1:.35,background:"#1f2937",color:"#e2e8f0",transition:"transform 0.12s ease"};return R&&(H.border="1px solid #38bdf8"),M&&(H.background="linear-gradient(135deg, #38b2ac, #0ea5e9)",H.color="#0f172a",H.fontWeight=700),C&&P.length>0&&!M&&(H.border="1px solid rgba(56, 189, 248, 0.45)"),r.jsxs("button",{type:"button",style:H,disabled:!C,onClick:()=>C&&x(b),children:[b.getDate(),P.length>0&&r.jsx("span",{style:{position:"absolute",bottom:4,left:"50%",transform:"translateX(-50%)",width:6,height:6,borderRadius:"999px",background:M?"#0f172a":"#38bdf8"}})]},`${g}-${S}`)}))})]})}function b2({label:e,value:n,hint:t}){return r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"text-sm opacity-70",style:{fontSize:12,opacity:.8},children:e}),r.jsx("div",{className:"text-2xl font-semibold",style:{fontSize:28,fontWeight:700},children:n}),t&&r.jsx("div",{className:"text-xs opacity-60",style:{fontSize:12,opacity:.7},children:t})]})}function Xu({refreshKey:e=0}){const{user:n}=Ve(),t=w.useMemo(()=>{var s,l,c,d;const a=Array.isArray(n==null?void 0:n.driveFolders)?n.driveFolders.filter(p=>p&&p.url):[],i=(l=(s=import.meta)==null?void 0:s.env)==null?void 0:l.VITE_DEFAULT_DRIVE_FOLDER_URL,o=((d=(c=import.meta)==null?void 0:c.env)==null?void 0:d.VITE_DEFAULT_DRIVE_FOLDER_NAME)||"Carpeta KOOP";return(!a||a.length===0)&&i?[{name:o,url:i}]:a},[n,e]);return r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Documentos recientes"}),t.length===0&&r.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin carpetas asignadas."}),t.length>0&&r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:8},children:t.map((a,i)=>r.jsxs("li",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.name||"Carpeta de Drive"}),r.jsx("div",{className:"muted",style:{fontSize:12,opacity:.8},children:a.url})]}),r.jsx("a",{className:"btn btn-primary",href:a.url,target:"_blank",rel:"noreferrer","data-drive-folder-url":a.url,children:"Abrir carpeta"})]},(a.url||"")+i))})]})}function y2(e){if(!(e instanceof Date))return null;const n=e.getFullYear(),t=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${t}-${a}`}function w2(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`evt-${Date.now()}-${Math.random().toString(16).slice(2)}`}function j2(){const{user:e}=Ve(),n=Ei((e==null?void 0:e.name)||"Dashboard"),[t,a]=w.useState(null),[i,o]=w.useState(!0),[s,l]=w.useState(null),[c,d]=w.useState(0),[p,f]=Yu(),[h,y]=w.useState(()=>new Date),v=w.useMemo(()=>y2(h),[h]),[x,j]=w.useState(""),[m,u]=w.useState(!0),[g,b]=w.useState(""),[C,S]=w.useState([]),[I,R]=w.useState(!1),[M,P]=w.useState([]),[H,Te]=w.useState(!1),[Q,E]=w.useState(null);w.useEffect(()=>{(async()=>{var z;try{const{data:V}=await Ce.get("/kpis/overview");a(V)}catch(V){l(((z=V==null?void 0:V.response)==null?void 0:z.data)||(V==null?void 0:V.message))}finally{o(!1)}})()},[]),w.useEffect(()=>{let z=!1;return(async()=>{var V,X;try{Te(!0),E(null);const le=await Wu();if(z)return;const mr=Array.isArray(le==null?void 0:le.items)?le.items:[];P(mr.map(ne=>({id:String((ne==null?void 0:ne.id)||(ne==null?void 0:ne._id)||(ne==null?void 0:ne.documentNumber)||"").trim(),name:(ne==null?void 0:ne.name)||(ne==null?void 0:ne.fullName)||(ne==null?void 0:ne.email)||"Cliente sin nombre",email:ne==null?void 0:ne.email})).filter(ne=>ne.id))}catch(le){z||E(((X=(V=le==null?void 0:le.response)==null?void 0:V.data)==null?void 0:X.message)||(le==null?void 0:le.message)||"No se pudo cargar clientes")}finally{z||Te(!1)}})(),()=>{z=!0}},[]);const F=w.useMemo(()=>{if(!g)return M;const z=g.trim().toLowerCase();return M.filter(V=>[V.id,V.name,V.email].some(X=>String(X||"").toLowerCase().includes(z)))},[M,g]),_=w.useMemo(()=>p.filter(V=>(V==null?void 0:V.date)===v).sort((V,X)=>(V.createdAt||"").localeCompare(X.createdAt||"")),[p,v]),Y=z=>{const V=String(z);S(X=>X.includes(V)?X.filter(le=>le!==V):[...X,V])},N=()=>{const z=x.trim();if(!v||!z||!m&&C.length===0)return;const V={id:w2(),date:v,note:z,audience:m?{type:"all"}:{type:"clients",clientIds:C.map(X=>String(X).trim())},createdAt:new Date().toISOString(),createdBy:(e==null?void 0:e.id)||(e==null?void 0:e.sub)||"admin"};f(X=>[...X,V]),j(""),S([]),u(!0),R(!1)},D={padding:"10px 14px",fontSize:"14px",minHeight:"52px",borderRadius:"10px",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},L=[{key:"clientes",label:"Clientes",to:"/admin/clientes-activos"},{key:"procesos",label:"Procesos",to:"/mis-casos"},{key:"publicaciones",label:"Publicaciones Procesales",href:"https://koop.com/publicaciones-procesales"}],W=w.useMemo(()=>h==null?void 0:h.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),[h]),ie=z=>{y(z),typeof window<"u"&&window.innerWidth<1024&&R(!0)};return r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[r.jsxs("div",{className:"dash-card",style:{maxWidth:1200},children:[r.jsx("style",{children:`
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
          .compose-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 1000; display: flex; align-items: flex-end; }
          .compose-modal { background: #0f172a; color: #e2e8f0; width: 100%; border-top-left-radius: 14px; border-top-right-radius: 14px; padding: 16px; box-shadow: 0 -8px 24px rgba(0,0,0,0.35); max-height: 85vh; overflow: auto; }
          @media (min-width: 1024px) { .compose-overlay { display: none; } }
        `}),r.jsxs("div",{className:"dash-header",children:[r.jsx("div",{className:"dash-title",children:n}),r.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"flex-end"},children:r.jsx(Ju,{buttonClassName:"btn btn-primary",allowFolderInput:!0,onUploaded:()=>d(z=>z+1)})})]}),r.jsxs("div",{className:"dash-item",style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx("button",{className:"btn btn-primary",onClick:()=>{const z=document.querySelector("[data-drive-folder-url]"),V=z==null?void 0:z.getAttribute("data-drive-folder-url");V&&window.open(V,"_blank","noopener")},title:"Lineas de tiempo procesales",children:"Lineas de tiempo procesales"}),r.jsx(T,{className:"btn btn-primary btn-sm",to:"/admin/clientes-activos",title:"Clientes",children:"Clientes"}),r.jsx(T,{className:"btn btn-secondary btn-sm",to:"/admin/usuarios",title:"Administrar usuarios",children:"Administrar usuarios"})]}),r.jsx("div",{className:"kpi-grid",style:{marginTop:16},children:r.jsx(b2,{label:"Casos activos",value:(t==null?void 0:t.activeCases)??(i?"...":0)})}),r.jsxs("div",{className:"admin-main-grid",style:{marginTop:16},children:[r.jsxs("div",{className:"admin-main-left",children:[r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Centro administrativo"}),r.jsx("p",{style:{marginBottom:12},children:"Supervisa la operacion del portal, gestiona usuarios y da seguimiento a la informacion mas reciente."}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx(T,{className:"btn btn-primary btn-sm",to:"/admin/usuarios",title:"Administrar usuarios",children:"Administrar usuarios"}),r.jsx(T,{className:"btn btn-secondary btn-sm",to:"/mi-expediente",title:"Revisar expedientes",children:"Revisar expedientes"})]})]}),r.jsx(Qu,{value:h,onChange:ie,events:p}),r.jsx("div",{style:{display:"grid",gap:10},children:L.map(z=>r.jsx("div",{className:"dash-item",style:{padding:0,display:"flex",alignItems:"stretch"},children:z.to?r.jsx(T,{className:"btn btn-primary",to:z.to,style:D,children:z.label}):r.jsx("button",{type:"button",className:"btn btn-primary",style:D,onClick:()=>{typeof window<"u"&&z.href&&window.open(z.href,"_blank","noopener")},children:z.label})},z.key))})]}),r.jsxs("div",{className:"admin-main-right",children:[r.jsxs("div",{className:"dash-item compose-panel",children:[r.jsx("div",{className:"font-semibold",style:{fontWeight:600},children:W||"Selecciona un dia"}),r.jsx("p",{style:{marginTop:4,fontSize:13,opacity:.8},children:"Registra recordatorios o publicaciones para clientes especificos o para todos."}),r.jsx("textarea",{value:x,onChange:z=>j(z.target.value),placeholder:"Agregar nota o detalle del evento",rows:4,style:{width:"100%",marginTop:12,background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:"10px 12px",resize:"vertical"}}),r.jsx("div",{style:{marginTop:12},children:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("input",{type:"checkbox",checked:m,onChange:z=>{u(z.target.checked),z.target.checked&&S([])}}),r.jsx("span",{children:"Publicar para todos los clientes"})]})}),!m&&r.jsxs("div",{style:{marginTop:12},children:[r.jsx("input",{type:"search",placeholder:"Buscar por nombre, email o ID",value:g,onChange:z=>b(z.target.value),style:{width:"100%",padding:"8px 12px",borderRadius:10,border:"1px solid rgba(148,163,184,0.35)",background:"#1b263b",color:"#e2e8f0"}}),Q&&r.jsx("div",{style:{color:"#fecaca",background:"#7f1d1d",padding:8,borderRadius:8,marginTop:8},children:Q}),r.jsxs("div",{className:"admin-clients-list",style:{marginTop:8},children:[H&&r.jsx("div",{style:{opacity:.7},children:"Cargando clientes..."}),!H&&F.length===0&&r.jsx("div",{style:{opacity:.7},children:"No se encontraron clientes"}),F.map(z=>{const V=C.includes(z.id);return r.jsxs("label",{className:"admin-clients-item",children:[r.jsxs("span",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("span",{style:{fontWeight:600},children:z.name}),r.jsx("span",{style:{fontSize:12,opacity:.75},children:z.id})]}),r.jsx("input",{type:"checkbox",checked:V,onChange:()=>Y(z.id)})]},z.id)})]}),C.length>0&&r.jsxs("div",{style:{marginTop:8,fontSize:12,opacity:.7},children:["Seleccionados: ",C.join(", ")]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{j(""),u(!0),S([])},children:"Limpiar"}),r.jsx("button",{type:"button",className:"btn btn-primary",onClick:N,disabled:!x.trim()||!m&&C.length===0,children:"Guardar anotacion"})]}),_.length>0&&r.jsxs("div",{style:{marginTop:16},children:[r.jsx("div",{style:{fontWeight:600,marginBottom:8},children:"Anotaciones del dia"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:_.map(z=>{var V,X;return r.jsxs("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:[r.jsx("div",{style:{marginBottom:6},children:z.note}),r.jsx("div",{style:{fontSize:12,opacity:.7},children:((V=z.audience)==null?void 0:V.type)==="all"?"Visible para todos los clientes":`Visible para: ${Array.isArray((X=z.audience)==null?void 0:X.clientIds)&&z.audience.clientIds.length>0?z.audience.clientIds.join(", "):"—"}`})]},z.id)})})]})]}),r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Recordatorios del equipo"}),r.jsx("p",{style:{marginBottom:0},children:"Comparte novedades internas, carga reportes de gestion o establece tareas prioritarias para tu equipo desde esta seccion."})]}),r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Reproductor Spotify"}),r.jsx("iframe",{title:"Spotify administracion",src:"https://open.spotify.com/embed/playlist/1Zf1rz0XX6fyNxKOq4XvgN?utm_source=generator",width:"100%",height:"152",frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",style:{borderRadius:8}})]})]})]}),r.jsx("div",{style:{marginTop:16},children:r.jsx(Xu,{refreshKey:c})}),s&&r.jsx("pre",{className:"text-red-600 text-sm mt-2",style:{color:"#fecaca",background:"#7f1d1d",padding:12,borderRadius:8,marginTop:12},children:typeof s=="string"?s:JSON.stringify(s,null,2)})]}),I&&r.jsx("div",{className:"compose-overlay",role:"dialog","aria-modal":"true",children:r.jsxs("div",{className:"compose-modal",children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[r.jsx("div",{style:{fontWeight:700},children:W||"Selecciona un dia"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>R(!1),"aria-label":"Cerrar",children:"Cerrar"})]}),r.jsxs("div",{className:"dash-item",style:{padding:0},children:[r.jsx("p",{style:{marginTop:4,fontSize:13,opacity:.8},children:"Registra recordatorios o publicaciones para clientes especificos o para todos."}),r.jsx("textarea",{value:x,onChange:z=>j(z.target.value),placeholder:"Agregar nota o detalle del evento",rows:4,style:{width:"100%",marginTop:12,background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:"10px 12px",resize:"vertical"}}),r.jsx("div",{style:{marginTop:12},children:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("input",{type:"checkbox",checked:m,onChange:z=>{u(z.target.checked),z.target.checked&&S([])}}),r.jsx("span",{children:"Publicar para todos los clientes"})]})}),!m&&r.jsxs("div",{style:{marginTop:12},children:[r.jsx("input",{type:"search",placeholder:"Buscar por nombre, email o ID",value:g,onChange:z=>b(z.target.value),style:{width:"100%",padding:"8px 12px",borderRadius:10,border:"1px solid rgba(148,163,184,0.35)",background:"#1b263b",color:"#e2e8f0"}}),Q&&r.jsx("div",{style:{color:"#fecaca",background:"#7f1d1d",padding:8,borderRadius:8,marginTop:8},children:Q}),r.jsxs("div",{className:"admin-clients-list",style:{marginTop:8},children:[H&&r.jsx("div",{style:{opacity:.7},children:"Cargando clientes..."}),!H&&F.length===0&&r.jsx("div",{style:{opacity:.7},children:"No se encontraron clientes"}),F.map(z=>{const V=C.includes(z.id);return r.jsxs("label",{className:"admin-clients-item",children:[r.jsxs("span",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("span",{style:{fontWeight:600},children:z.name}),r.jsx("span",{style:{fontSize:12,opacity:.75},children:z.id})]}),r.jsx("input",{type:"checkbox",checked:V,onChange:()=>Y(z.id)})]},z.id)})]}),C.length>0&&r.jsxs("div",{style:{marginTop:8,fontSize:12,opacity:.7},children:["Seleccionados: ",C.join(", ")]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{j(""),u(!0),S([])},children:"Limpiar"}),r.jsx("button",{type:"button",className:"btn btn-primary",onClick:N,disabled:!x.trim()||!m&&C.length===0,children:"Guardar anotacion"})]}),_.length>0&&r.jsxs("div",{style:{marginTop:16},children:[r.jsx("div",{style:{fontWeight:600,marginBottom:8},children:"Anotaciones del dia"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:_.map(z=>{var V,X;return r.jsxs("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:[r.jsx("div",{style:{marginBottom:6},children:z.note}),r.jsx("div",{style:{fontSize:12,opacity:.7},children:((V=z.audience)==null?void 0:V.type)==="all"?"Visible para todos los clientes":`Visible para: ${Array.isArray((X=z.audience)==null?void 0:X.clientIds)&&z.audience.clientIds.length>0?z.audience.clientIds.join(", "):"-"}`})]},z.id)})})]})]})]})})]})}function k2({src:e,heightDesktop:n=560,heightMobile:t=480,className:a}){const[i,o]=w.useState(!1),[s,l]=w.useState(!1),c=w.useRef(null);w.useEffect(()=>{try{const x=window.matchMedia("(max-width: 768px)"),j=m=>{o(m.matches),m.matches&&l(!1)};return o(x.matches),x.matches&&l(!1),x.addEventListener?x.addEventListener("change",j):x.addListener&&x.addListener(j),()=>{x.removeEventListener?x.removeEventListener("change",j):x.removeListener&&x.removeListener(j)}}catch{o(!1)}},[]),w.useEffect(()=>{if(!s){c.current!==null&&(document.body.style.overflow=c.current,c.current=null);return}return c.current===null&&(c.current=document.body.style.overflow||""),document.body.style.overflow="hidden",()=>{c.current!==null?(document.body.style.overflow=c.current,c.current=null):document.body.style.overflow=""}},[s]);const d=w.useMemo(()=>{try{return new URL(e,window.location.origin).toString()}catch{return e}},[e]),p=()=>l(x=>!x),f=["Te compartimos que ya tienes acceso a nuestro Portal de Clientes Koop.","","Desde alli podras:","- Consultar el estado de tus procesos en tiempo real.","- Descargar documentos relevantes de manera segura.","- Recibir notificaciones de audiencias y plazos importantes.","- Comunicarte directamente con nuestro equipo para resolver cualquier inquietud.","","Estamos seguros de que esta alianza marcara un camino de crecimiento y tranquilidad."].join(`
`);if(i)return r.jsxs("div",{className:a,style:{width:"100%",height:t,display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:16},children:[r.jsx("div",{style:{fontWeight:700,marginBottom:8},children:"Gracias por elegirnos. Nos alegra iniciar este camino contigo."}),r.jsx("div",{className:"muted",style:{marginBottom:12,whiteSpace:"pre-line"},children:f})]}),r.jsx("div",{style:{marginTop:"auto",padding:16,display:"flex",justifyContent:"flex-end"},children:r.jsx("a",{className:"btn btn-primary",href:d,target:"_blank",rel:"noopener noreferrer",children:"Cordial saludo"})})]});const h=s?{position:"fixed",inset:0,zIndex:1e3,backgroundColor:"rgba(6, 11, 25, 0.92)",padding:"48px 64px",display:"flex",flexDirection:"column",gap:16}:{width:"100%",height:n,position:"relative"},y=s?{flex:1,position:"relative",borderRadius:16,overflow:"hidden",boxShadow:"0 24px 48px rgba(0,0,0,0.45)"}:{width:"100%",height:"100%",position:"relative",borderRadius:12,overflow:"hidden"},v={position:"absolute",top:s?24:12,right:s?24:12,zIndex:1001};return r.jsxs("div",{className:a,style:h,children:[r.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:p,style:v,children:s?"Minimizar":"Maximizar"}),r.jsx("div",{style:y,children:r.jsxs("object",{data:e,type:"application/pdf",width:"100%",height:"100%",style:{width:"100%",height:"100%"},children:[r.jsx("iframe",{title:"PDF",src:d,style:{width:"100%",height:"100%",border:0}}),r.jsxs("div",{style:{padding:16},children:["No se pudo mostrar el PDF. ",r.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:"Abrir en nueva pestana"})]})]})})]})}function C2(){return r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Mensajes no leídos"}),r.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin datos."})]})}function N2(e){if(!(e instanceof Date))return null;const n=e.getFullYear(),t=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${t}-${a}`}function S2(){const{user:e}=Ve(),n=Ei((e==null?void 0:e.name)||"Bienvenido"),[t,a]=w.useState(0),[i]=Yu(),[o,s]=w.useState(()=>new Date),l=w.useMemo(()=>{const y=[e==null?void 0:e.id,e==null?void 0:e.sub,e==null?void 0:e._id,e==null?void 0:e.documentNumber,e==null?void 0:e.document_number,e==null?void 0:e.documento,e==null?void 0:e.clienteId].map(v=>v==null?"":String(v).trim()).filter(v=>!!v);return Array.from(new Set(y))},[e]),c=w.useMemo(()=>N2(o),[o]),d=w.useMemo(()=>l.length?i.filter(h=>{var y,v,x;return((y=h==null?void 0:h.audience)==null?void 0:y.type)==="all"?!0:((v=h==null?void 0:h.audience)==null?void 0:v.type)==="clients"?(Array.isArray((x=h.audience)==null?void 0:x.clientIds)?h.audience.clientIds.map(m=>m==null?"":String(m).trim()).filter(m=>!!m):[]).some(m=>l.includes(m)):!1}):i.filter(h=>{var y;return((y=h==null?void 0:h.audience)==null?void 0:y.type)==="all"}),[i,l]),p=w.useMemo(()=>d.filter(h=>(h==null?void 0:h.date)===c),[d,c]),f=w.useMemo(()=>o==null?void 0:o.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),[o]);return r.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:1080},children:[r.jsx("style",{children:`
          .user-main-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
          @media (min-width: 1024px) { .user-main-grid { grid-template-columns: 2fr 1fr; } }
          .user-main-left { display: flex; flex-direction: column; gap: 16px; }
          .user-main-right { display: flex; flex-direction: column; gap: 16px; }
        `}),r.jsxs("div",{className:"dash-header",children:[r.jsx("div",{className:"dash-title",children:n}),r.jsx(Ju,{buttonClassName:"btn btn-primary",allowFolderInput:!1,onUploaded:()=>a(h=>h+1)})]}),r.jsxs("div",{className:"user-main-grid",children:[r.jsxs("div",{className:"user-main-left",children:[r.jsxs("div",{className:"dash-item",children:[r.jsx("p",{style:{marginBottom:8},children:"Aqui puedes revisar tu material mas reciente y mantenerte al dia con tu caso. Si necesitas asistencia adicional, nuestro equipo esta disponible para ayudarte."}),r.jsx(T,{className:"btn btn-primary btn-sm",to:"/mis-casos",children:"Ver mis casos"})]}),r.jsx("div",{className:"dash-item",style:{padding:0},children:r.jsx(k2,{src:"/Saludobienvenidaportal.pdf",heightDesktop:480,heightMobile:420})}),r.jsx(C2,{}),r.jsx(Xu,{refreshKey:t})]}),r.jsxs("div",{className:"user-main-right",children:[r.jsx(Qu,{value:o,onChange:s,events:d}),r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{style:{fontWeight:600,marginBottom:8},children:f}),p.length===0&&r.jsx("p",{style:{margin:0,opacity:.7,fontSize:14},children:"No hay anotaciones programadas para este dia."}),p.length>0&&r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:p.map(h=>r.jsx("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:r.jsx("div",{children:h.note})},h.id))})]})]})]})]})})}function Hc(){return r.jsx("div",{className:"dash-page",style:{background:"linear-gradient(rgba(24,31,56,0.9), rgba(15,23,42,0.95))",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",padding:24},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:520},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Tu cuenta no tiene un rol asignado para ingresar al portal. Comunicate con el administrador para solicitar acceso."})]})})}function $c(e,n){if(!(e!=null&&e.roles))return!1;const t=Array.isArray(e.roles)?e.roles:[e.roles],a=String(n||"").toLowerCase();return t.some(i=>String(i||"").toLowerCase()===a)}function E2(){const{user:e,loading:n}=Ve(),t=w.useMemo(()=>e?$c(e,"admin")?"admin":$c(e,"user")?"user":"no-access":"none",[e]);return n&&!e?null:t==="admin"?r.jsx(j2,{}):t==="user"?r.jsx(S2,{}):t==="no-access"?r.jsx(Hc,{}):r.jsx(Hc,{})}function Wc(){const[e,n]=w.useState("docs"),{user:t}=Ve(),a=Ei((t==null?void 0:t.name)||""),i="documentos_iniciales",[o,s]=w.useState([]),[l,c]=w.useState(!1),[d,p]=w.useState(null),[f,h]=w.useState(null),y=w.useRef(null),v=async()=>{c(!0),p(null),h(null);try{const u=await f2({limit:20,subfolder:i});s(Array.isArray(u==null?void 0:u.items)?u.items:[]),u!=null&&u.warning&&h(u.warning)}catch(u){p((u==null?void 0:u.message)||"Error cargando documentos")}finally{c(!1)}};w.useEffect(()=>{e==="docs"&&v()},[e]);const x=()=>{var u;return(u=y.current)==null?void 0:u.click()},j=async u=>{var b,C;const g=(C=(b=u.target)==null?void 0:b.files)==null?void 0:C[0];if(g)try{c(!0),p(null);const S=await Gu(g,{subfolder:i});S!=null&&S.file&&s(I=>[S.file,...I]),await v()}catch(S){p((S==null?void 0:S.message)||"Error subiendo documento")}finally{c(!1);try{u.target.value=null}catch{}}},m=async(u,g)=>{try{const{url:b}=await h2(u,600);window.open(b||g,"_blank")}catch{g&&window.open(g,"_blank")}};return r.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1320},children:[r.jsx("div",{className:"dash-header",children:r.jsx("div",{className:"dash-title",children:"Mi expediente"})}),r.jsxs("div",{className:"dash-item me-subbar",children:[r.jsxs("div",{className:"me-hello",children:["Bienvenido: ",a]}),r.jsxs("select",{className:"me-select","aria-label":"Tipo de búsqueda",children:[r.jsx("option",{children:"Procesos judiciales"}),r.jsx("option",{children:"Demandas"}),r.jsx("option",{children:"Audiencias"})]}),r.jsx("input",{className:"me-input",placeholder:"Buscar..."}),r.jsxs("div",{className:"me-actions",children:[r.jsx("input",{ref:y,type:"file",style:{display:"none"},onChange:j}),r.jsx("button",{className:"btn btn-primary",onClick:x,disabled:l,children:l?"Subiendo...":"Radicar documento"}),r.jsx("button",{className:"btn btn-secondary",children:"Ver información"})]})]}),r.jsxs("div",{className:"me-layout",children:[r.jsxs("aside",{className:"me-left dash-item",children:[r.jsx("div",{className:"me-head",children:"ESPECIALIDAD: LABORAL"}),r.jsxs("div",{className:"me-tree",children:[r.jsxs("details",{open:!0,children:[r.jsxs("summary",{children:[r.jsx("span",{className:"me-chev",children:"›"}),r.jsx("span",{children:"JUZGADO 009 MUNICIPAL DE PEQUEÑAS CAUSAS"})]}),r.jsxs("div",{className:"me-leaf",children:[r.jsx("div",{children:"110014105009-20250011400"}),r.jsx("div",{className:"me-tag",children:"Cuadernos"})]})]}),r.jsxs("details",{open:!0,children:[r.jsxs("summary",{children:[r.jsx("span",{className:"me-chev",children:"›"}),r.jsx("span",{children:"JUZGADO 003 LABORAL DEL CIRCUITO"})]}),r.jsxs("div",{className:"me-leaf",children:[r.jsx("div",{children:"110014105009-2025011401"}),r.jsx("div",{className:"me-tag",children:"Cuadernos"})]})]}),r.jsxs("details",{children:[r.jsxs("summary",{children:[r.jsx("span",{className:"me-chev",children:"›"}),r.jsx("span",{children:"JUZGADO 015 MUNICIPAL DE PEQUEÑAS CAUSAS"})]}),r.jsxs("div",{className:"me-leaf",children:[r.jsx("div",{children:"110014105015-20240208700"}),r.jsx("div",{className:"me-tag",children:"Cuadernos"})]})]}),r.jsxs("details",{children:[r.jsxs("summary",{children:[r.jsx("span",{className:"me-chev",children:"›"}),r.jsx("span",{children:"JUZGADO 048 LABORAL DEL CIRCUITO"})]}),r.jsxs("div",{className:"me-leaf",children:[r.jsx("div",{children:"110013105048-2024090000"}),r.jsx("div",{className:"me-tag",children:"Cuadernos"})]})]})]})]}),r.jsxs("main",{className:"me-center dash-item",children:[r.jsxs("div",{className:"me-tabs",children:[r.jsx("div",{className:`me-tab ${e==="docs"?"active":""}`,onClick:()=>n("docs"),role:"button",tabIndex:0,children:"Documentos del Proceso"}),r.jsx("div",{className:`me-tab ${e==="aud"?"active":""}`,onClick:()=>n("aud"),role:"button",tabIndex:0,children:"Audiencias"})]}),e==="docs"&&r.jsxs("div",{className:"me-table-wrap",children:[d&&r.jsx("div",{style:{color:"#ef4444",padding:"8px 12px"},children:String(d)}),f&&r.jsxs("div",{style:{color:"#f59e0b",padding:"8px 12px"},children:["Aviso: ",String(f)==="S3_LIST_FORBIDDEN"?"No hay permisos para listar el bucket. Tus documentos siguen disponibles si conservas el enlace.":String(f)]}),r.jsxs("table",{className:"me-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{width:42},children:r.jsx("input",{type:"checkbox"})}),r.jsx("th",{children:"Fecha de registro"}),r.jsx("th",{children:"Documento"}),r.jsx("th",{children:"Tipo"}),r.jsx("th",{children:"Tamaño"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[o.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:6,style:{color:"#9fb3cc"},children:l?"Cargando...":"No hay documentos para mostrar"})}),o.map(u=>{const g=u.lastModified?new Date(u.lastModified):u.createdTime?new Date(u.createdTime):null,b=u.name||(u.key||"").split("/").pop(),C=typeof u.size=="number"?Math.max(1,Math.round(u.size/1024)):null,S=u.mimeType||(b&&b.toLowerCase().endsWith(".pdf")?"application/pdf":void 0);return r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("input",{type:"checkbox"})}),r.jsx("td",{children:g?g.toLocaleString():"-"}),r.jsx("td",{title:b,children:b}),r.jsx("td",{children:S?S.split("/")[1]||S:"-"}),r.jsx("td",{children:C?`${C} KB`:"-"}),r.jsx("td",{children:r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(u.key,u.downloadURL||u.downloadUrl||u.webContentLink||u.webViewLink),children:"Descargar"})})]},u.key||u.id)})]})]})]}),e==="aud"&&r.jsx("div",{className:"me-table-wrap",children:r.jsxs("table",{className:"me-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Fecha"}),r.jsx("th",{children:"Actuación"}),r.jsx("th",{children:"Juzgado"}),r.jsx("th",{children:"Estado"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{children:"2025-09-03 08:00"}),r.jsx("td",{children:"Audiencia inicial"}),r.jsx("td",{children:"JDO 003 Laboral"}),r.jsx("td",{children:r.jsx("span",{className:"me-badge me-badge-success",children:"Agendada"})})]})})]})})]}),r.jsxs("aside",{className:"me-right dash-item",children:[r.jsx("div",{className:"me-head",children:"Datos del Proceso Judicial"}),r.jsxs("div",{className:"me-right-content",children:[r.jsxs("div",{className:"me-proc-grid",children:[r.jsx("div",{className:"me-tag",children:"Radicado"}),r.jsx("div",{children:"110014105009-20250011400"}),r.jsx("div",{className:"me-tag",children:"Clase"}),r.jsx("div",{children:"Laboral – Ordinario"}),r.jsx("div",{className:"me-tag",children:"Demandante"}),r.jsx("div",{children:"Juan Pérez"}),r.jsx("div",{className:"me-tag",children:"Demandado"}),r.jsx("div",{children:"Acme S.A.S."}),r.jsx("div",{className:"me-tag",children:"Juzgado"}),r.jsx("div",{children:"JDO 009 MPC"}),r.jsx("div",{className:"me-tag",children:"Estado"}),r.jsx("div",{children:"En trámite"})]}),r.jsx("hr",{className:"me-hr"}),r.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:"Descargar expediente"})]})]})]})]})})}const A2=[{id:"CJ-001",titulo:"Acción de tutela — derecho a la salud",estado:"En curso",juzgado:"Juzgado 12 Municipal",fecha:"2025-07-10"},{id:"CJ-002",titulo:"Proceso laboral — despido sin justa causa",estado:"Audiencia programada",juzgado:"Juzgado 3 Laboral del Circuito",fecha:"2025-08-02"},{id:"CJ-003",titulo:"Responsabilidad fiscal — recursos",estado:"Recurso interpuesto",juzgado:"Contraloría Distrital",fecha:"2025-08-21"},{id:"CJ-004",titulo:"Proceso de alimentos — fijación de cuota",estado:"Admitido",juzgado:"Juzgado 5 de Familia",fecha:"2025-09-01"}];function I2(){const[e,n]=w.useState(null);w.useEffect(()=>{if(!e)return;const i=o=>{o.key==="Escape"&&n(null)};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[e]);const t=w.useMemo(()=>["Reunión de documentos e investigación","En escrito de demanda","En radicación","Al despacho: en espera de decisión del juez"],[]),a=i=>{if(!i)return 1;const o=String(i).toLowerCase();return/(reun|investig)/.test(o)?1:/(escrito|demanda)/.test(o)?2:/(radicaci[óo]n|admitid)/.test(o)?3:/(despacho|juez|decisi[óo]n|audiencia|recurso)/.test(o)?4:(/curso/.test(o),2)};return r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[r.jsxs("div",{className:"dash-card",style:{maxWidth:900},children:[r.jsx("div",{className:"dash-header",children:r.jsx("div",{className:"dash-title",children:"Mis casos"})}),r.jsx("div",{className:"dash-item",style:{padding:0},children:r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs("table",{className:"cases-table",style:{width:"100%",borderCollapse:"collapse"},children:[r.jsx("thead",{children:r.jsxs("tr",{style:{background:"#1e2a3a"},children:[r.jsx("th",{style:st,children:"Radicado"}),r.jsx("th",{style:st,children:"Título"}),r.jsx("th",{style:st,children:"Estado"}),r.jsx("th",{style:st,children:"Despacho"}),r.jsx("th",{style:st,children:"Última actuación"})]})}),r.jsx("tbody",{children:A2.map(i=>r.jsxs("tr",{onClick:()=>n(i),className:"row-clickable",children:[r.jsx("td",{style:lt,children:i.id}),r.jsx("td",{style:lt,children:i.titulo}),r.jsx("td",{style:lt,children:r.jsx("span",{className:"badge",style:qc(i.estado),children:i.estado})}),r.jsx("td",{style:lt,children:i.juzgado}),r.jsx("td",{style:lt,children:new Date(i.fecha).toLocaleDateString()})]},i.id))})]})})})]}),e&&r.jsx("div",{className:"modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"caso-title",onClick:i=>{i.target===i.currentTarget&&n(null)},children:r.jsxs("div",{className:"modal-card",children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("div",{className:"modal-title",id:"caso-title",children:e.titulo}),r.jsx("button",{className:"btn btn-primary",onClick:()=>n(null),children:"Cerrar"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"case-grid",children:[r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Radicado"}),r.jsx("div",{children:e.id})]}),r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Estado"}),r.jsx("div",{children:r.jsx("span",{className:"badge",style:qc(e.estado),children:e.estado})})]}),r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Despacho"}),r.jsx("div",{children:e.juzgado})]}),r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Última actuación"}),r.jsx("div",{children:new Date(e.fecha).toLocaleString()})]})]}),r.jsx("div",{className:"timeline",children:t.map((i,o)=>{const s=o+1,l=a(e.estado),c=s<l,d=s===l;return r.jsxs("div",{className:`timeline-step ${c?"done":""} ${d?"active":""}`,children:[r.jsx("div",{className:`dot ${c?"done":""} ${d?"active":""}`}),s<t.length&&r.jsx("div",{className:`bar ${s<l?"done":""}`}),r.jsxs("div",{className:"label",children:[s,". ",i]})]},s)})})]})]})})]})}const st={textAlign:"left",padding:"12px 14px",borderBottom:"1px solid #394b61",fontWeight:600,color:"#e2e8f0",whiteSpace:"nowrap"},lt={padding:"12px 14px",borderBottom:"1px solid #34465a",color:"#e5edf7",verticalAlign:"top"};function qc(e){let n="#3b82f6";return/curso/i.test(e)&&(n="#f59e0b"),/programada|programado/i.test(e)&&(n="#10b981"),/recurso/i.test(e)&&(n="#8b5cf6"),{display:"inline-block",padding:"4px 8px",borderRadius:8,background:n,color:"#fff",fontSize:12,fontWeight:600}}function T2(){var a,i;const{logout:e}=Ve(),n=gn();w.useEffect(()=>{(async()=>{try{await e()}catch{}try{sessionStorage.removeItem("koop_hasVisited")}catch{}try{document.documentElement.classList.remove("skip-splash")}catch{}})()},[e]);const t=(i=(a=n.state)==null?void 0:a.from)==null?void 0:i.pathname;return r.jsx(ge,{to:"/",replace:!0,state:{from:t}})}function Jn({children:e}){const{isAuthenticated:n}=Ve(),t=gn();return n?e:r.jsx(ge,{to:"/login",replace:!0,state:{from:t}})}function R2(){const{isAuthenticated:e,user:n,logout:t}=Ve(),[a,i]=w.useState(!1),[o,s]=w.useState(!1),[l,c]=w.useState(!1);Yr();const d=()=>{s(f=>{const h=!f;return h||c(!1),h})},p=f=>{const h=f.target.closest("a");h&&!h.classList.contains("drop-btn")&&(s(!1),c(!1))};return r.jsx("nav",{className:"navbar",children:r.jsxs("div",{className:"navbar-content",children:[r.jsxs(T,{to:"/",className:"logo",children:[r.jsx("img",{src:"/Koop Logo.png",alt:"Logo Koop",className:"logo-img"}),r.jsx("div",{className:"logo-text",children:"KOOP STRATEGIC ADVISORY"})]}),r.jsxs("div",{className:"menu-toggle",id:"menu-toggle",onClick:d,"aria-controls":"nav-menu","aria-expanded":o?"true":"false",role:"button",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]}),r.jsxs("div",{className:`nav-menu ${o?"open":""}`,id:"nav-menu",onClick:p,"data-auth":e?"1":"0",children:[r.jsxs("div",{className:"main-links",children:[r.jsx(T,{to:"/#inicio",children:"INICIO"}),r.jsxs("div",{className:`dropdown ${l?"open":""}`,children:[r.jsx(T,{to:"/#areas",className:"drop-btn",id:"areas-toggle","aria-expanded":l?"true":"false",onClick:f=>{f.preventDefault(),c(h=>!h)},children:"ÁREAS DE PRÁCTICA"}),r.jsxs("div",{className:"dropdown-content",children:[r.jsxs("div",{className:"dropdown-group",children:[r.jsx(T,{to:"/derecho",className:"dropdown-title",children:"Derecho"}),r.jsx(T,{to:"/derecho-laboral",children:"Derecho Laboral"}),r.jsx(T,{to:"/derecho-penal",children:"Derecho Penal"}),r.jsx(T,{to:"/tramites-notariales",children:"Trámites notariales"}),r.jsx(T,{to:"/derecho-administrativo",children:"Derecho Administrativo"}),r.jsx(T,{to:"/derecho-familia",children:"Derecho de Familia"}),r.jsx(T,{to:"/contratacion-publica",children:"Contratación Pública"}),r.jsx(T,{to:"/resolucion-disputas",children:"Resolución de Disputas"}),r.jsx(T,{to:"/acciones-de-tutela",children:"Acciones de Tutela"}),r.jsx(T,{to:"/insolvencia",children:"Insolvencia"})]}),r.jsxs("div",{className:"dropdown-group",children:[r.jsx(T,{to:"/contabilidad",className:"dropdown-title",children:"Contabilidad"}),r.jsx(T,{to:"/auditoria",children:"Auditoría"}),r.jsx(T,{to:"/impuestos",children:"Impuestos"}),r.jsx(T,{to:"/asesoria-contable",children:"Asesoría Contable"})]})]})]}),!e&&r.jsx(T,{to:"/#vision",children:"NUESTRA VISIÓN"})]}),e?r.jsxs("div",{className:`dropdown ${a?"open":""}`,children:[r.jsx("button",{className:"drop-btn","aria-haspopup":"true","aria-expanded":a?"true":"false",onClick:()=>i(f=>!f),children:Ei((n==null?void 0:n.name)||"Mi cuenta")}),r.jsx("div",{className:"dropdown-content",children:r.jsxs("div",{className:"dropdown-group",children:[r.jsx(T,{to:"/dashboard",children:"Perfil"}),r.jsx(T,{to:"/mi-expediente",children:"Mi expediente"}),r.jsx(T,{to:"/mis-casos",children:"Mis casos"}),r.jsx(T,{to:"/logout",children:"Cerrar sesión"})]})})]}):r.jsx(T,{to:"/login",className:"koop-cta","aria-label":"CLIENTE KOOP",children:"CLIENTE KOOP".split("").map((f,h)=>r.jsx("span",{className:"letter",style:{"--i":h},children:f===" "?" ":f},h))})]})]})})}function z2(){const[e,n]=w.useState(null),t=()=>{const a=gn(),{isAuthenticated:i}=Ve(),o=a.pathname.toLowerCase(),s=o.startsWith("/login")||o.startsWith("/register");return r.jsxs(r.Fragment,{children:[!s&&r.jsx(R2,{}),r.jsxs(w0,{children:[r.jsx(U,{path:"/",element:r.jsx(L0,{})}),r.jsx(U,{path:"/derecho",element:r.jsx(_0,{})}),r.jsx(U,{path:"/contabilidad",element:r.jsx(M0,{})}),r.jsx(U,{path:"/auditoria",element:r.jsx(F0,{})}),r.jsx(U,{path:"/derecho-administrativo",element:r.jsx(Z0,{})}),r.jsx(U,{path:"/derecho-familia",element:r.jsx(H0,{})}),r.jsx(U,{path:"/derecho-laboral",element:r.jsx(J0,{})}),r.jsx(U,{path:"/derecho-penal",element:r.jsx(X0,{})}),r.jsx(U,{path:"/impuestos",element:r.jsx(ng,{})}),r.jsx(U,{path:"/asesoria-contable",element:r.jsx(tg,{})}),r.jsx(U,{path:"/planeacion-patrimonial",element:r.jsx(ge,{to:"/asesoria-contable",replace:!0})}),r.jsx(U,{path:"/privacidad",element:r.jsx(ig,{})}),r.jsx(U,{path:"/tramites-notariales",element:r.jsx(sg,{})}),r.jsx(U,{path:"/acciones-de-tutela",element:r.jsx(cg,{})}),r.jsx(U,{path:"/login",element:i?r.jsx(ge,{to:"/",replace:!0}):r.jsx(Y1,{})}),r.jsx(U,{path:"/register",element:r.jsx(G1,{})}),r.jsx(U,{path:"/logout",element:r.jsx(T2,{})}),r.jsx(U,{path:"/panel",element:r.jsx(Jn,{children:r.jsx(Q1,{})})}),r.jsx(U,{path:"/admin/usuarios",element:r.jsx(Jn,{children:r.jsx(s2,{})})}),r.jsx(U,{path:"/admin/clientes-activos",element:r.jsx(Jn,{children:r.jsx(d2,{})})}),r.jsx(U,{path:"/dashboard",element:r.jsx(Jn,{children:r.jsx(E2,{})})}),r.jsx(U,{path:"/mi-expediente",element:r.jsx(Jn,{children:r.jsx(Wc,{})})}),r.jsx(U,{path:"/dashboard2",element:r.jsx(Jn,{children:r.jsx(Wc,{})})}),r.jsx(U,{path:"/mis-casos",element:r.jsx(Jn,{children:r.jsx(I2,{})})}),r.jsx(U,{path:"/index.html",element:r.jsx(ge,{to:"/",replace:!0})}),r.jsx(U,{path:"/derecho.html",element:r.jsx(ge,{to:"/derecho",replace:!0})}),r.jsx(U,{path:"/contabilidad.html",element:r.jsx(ge,{to:"/contabilidad",replace:!0})}),r.jsx(U,{path:"/auditoria.html",element:r.jsx(ge,{to:"/auditoria",replace:!0})}),r.jsx(U,{path:"/derecho-administrativo.html",element:r.jsx(ge,{to:"/derecho-administrativo",replace:!0})}),r.jsx(U,{path:"/derecho-familia.html",element:r.jsx(ge,{to:"/derecho-familia",replace:!0})}),r.jsx(U,{path:"/derecho-laboral.html",element:r.jsx(ge,{to:"/derecho-laboral",replace:!0})}),r.jsx(U,{path:"/derecho-penal.html",element:r.jsx(ge,{to:"/derecho-penal",replace:!0})}),r.jsx(U,{path:"/impuestos.html",element:r.jsx(ge,{to:"/impuestos",replace:!0})}),r.jsx(U,{path:"/planeacion-patrimonial.html",element:r.jsx(ge,{to:"/asesoria-contable",replace:!0})}),r.jsx(U,{path:"/privacidad.html",element:r.jsx(ge,{to:"/privacidad",replace:!0})}),r.jsx(U,{path:"/tramites-notariales.html",element:r.jsx(ge,{to:"/tramites-notariales",replace:!0})}),r.jsx(U,{path:"/acciones-de-tutela.html",element:r.jsx(ge,{to:"/acciones-de-tutela",replace:!0})})]})]})};return r.jsx(q1,{children:r.jsx(r.Fragment,{children:r.jsx(A0,{children:r.jsx(t,{})})})})}try{"scrollRestoration"in history&&(history.scrollRestoration="manual")}catch{}const O2=su(document.getElementById("root"));O2.render(r.jsx(z2,{}));
