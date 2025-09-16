function Fu(e,n){for(var r=0;r<n.length;r++){const a=n[r];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(a,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Zu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mc={exports:{}},Ga={},Bc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zt=Symbol.for("react.element"),Uu=Symbol.for("react.portal"),Ku=Symbol.for("react.fragment"),Hu=Symbol.for("react.strict_mode"),$u=Symbol.for("react.profiler"),qu=Symbol.for("react.provider"),Wu=Symbol.for("react.context"),Yu=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),Ju=Symbol.for("react.memo"),Qu=Symbol.for("react.lazy"),il=Symbol.iterator;function Xu(e){return e===null||typeof e!="object"?null:(e=il&&e[il]||e["@@iterator"],typeof e=="function"?e:null)}var Fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zc=Object.assign,Uc={};function Or(e,n,r){this.props=e,this.context=n,this.refs=Uc,this.updater=r||Fc}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kc(){}Kc.prototype=Or.prototype;function ts(e,n,r){this.props=e,this.context=n,this.refs=Uc,this.updater=r||Fc}var as=ts.prototype=new Kc;as.constructor=ts;Zc(as,Or.prototype);as.isPureReactComponent=!0;var ol=Array.isArray,Hc=Object.prototype.hasOwnProperty,is={current:null},$c={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,n,r){var a,i={},o=null,s=null;if(n!=null)for(a in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)Hc.call(n,a)&&!$c.hasOwnProperty(a)&&(i[a]=n[a]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:zt,type:e,key:o,ref:s,props:i,_owner:is.current}}function ef(e,n){return{$$typeof:zt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function os(e){return typeof e=="object"&&e!==null&&e.$$typeof===zt}function nf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var sl=/\/+/g;function ki(e,n){return typeof e=="object"&&e!==null&&e.key!=null?nf(""+e.key):n.toString(36)}function la(e,n,r,a,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case zt:case Uu:s=!0}}if(s)return s=e,i=i(s),e=a===""?"."+ki(s,0):a,ol(i)?(r="",e!=null&&(r=e.replace(sl,"$&/")+"/"),la(i,n,r,"",function(d){return d})):i!=null&&(os(i)&&(i=ef(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(sl,"$&/")+"/")+e)),n.push(i)),1;if(s=0,a=a===""?".":a+":",ol(e))for(var l=0;l<e.length;l++){o=e[l];var c=a+ki(o,l);s+=la(o,n,r,c,i)}else if(c=Xu(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=a+ki(o,l++),s+=la(o,n,r,c,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Kt(e,n,r){if(e==null)return e;var a=[],i=0;return la(e,a,"","",function(o){return n.call(r,o,i++)}),a}function rf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},ca={transition:null},tf={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:ca,ReactCurrentOwner:is};function Wc(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Kt,forEach:function(e,n,r){Kt(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return Kt(e,function(){n++}),n},toArray:function(e){return Kt(e,function(n){return n})||[]},only:function(e){if(!os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Or;D.Fragment=Ku;D.Profiler=$u;D.PureComponent=ts;D.StrictMode=Hu;D.Suspense=Gu;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tf;D.act=Wc;D.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Zc({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=is.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)Hc.call(n,c)&&!$c.hasOwnProperty(c)&&(a[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:zt,type:e.type,key:i,ref:o,props:a,_owner:s}};D.createContext=function(e){return e={$$typeof:Wu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qu,_context:e},e.Consumer=e};D.createElement=qc;D.createFactory=function(e){var n=qc.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Yu,render:e}};D.isValidElement=os;D.lazy=function(e){return{$$typeof:Qu,_payload:{_status:-1,_result:e},_init:rf}};D.memo=function(e,n){return{$$typeof:Ju,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=ca.transition;ca.transition={};try{e()}finally{ca.transition=n}};D.unstable_act=Wc;D.useCallback=function(e,n){return ge.current.useCallback(e,n)};D.useContext=function(e){return ge.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};D.useEffect=function(e,n){return ge.current.useEffect(e,n)};D.useId=function(){return ge.current.useId()};D.useImperativeHandle=function(e,n,r){return ge.current.useImperativeHandle(e,n,r)};D.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return ge.current.useMemo(e,n)};D.useReducer=function(e,n,r){return ge.current.useReducer(e,n,r)};D.useRef=function(e){return ge.current.useRef(e)};D.useState=function(e){return ge.current.useState(e)};D.useSyncExternalStore=function(e,n,r){return ge.current.useSyncExternalStore(e,n,r)};D.useTransition=function(){return ge.current.useTransition()};D.version="18.3.1";Bc.exports=D;var j=Bc.exports;const af=Zu(j),of=Fu({__proto__:null,default:af},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=j,lf=Symbol.for("react.element"),cf=Symbol.for("react.fragment"),df=Object.prototype.hasOwnProperty,pf=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uf={key:!0,ref:!0,__self:!0,__source:!0};function Yc(e,n,r){var a,i={},o=null,s=null;r!==void 0&&(o=""+r),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(a in n)df.call(n,a)&&!uf.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)i[a]===void 0&&(i[a]=n[a]);return{$$typeof:lf,type:e,key:o,ref:s,props:i,_owner:pf.current}}Ga.Fragment=cf;Ga.jsx=Yc;Ga.jsxs=Yc;Mc.exports=Ga;var t=Mc.exports,Gc={exports:{}},Ie={},Jc={exports:{}},Qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,z){var L=T.length;T.push(z);e:for(;0<L;){var G=L-1>>>1,re=T[G];if(0<i(re,z))T[G]=z,T[L]=re,L=G;else break e}}function r(T){return T.length===0?null:T[0]}function a(T){if(T.length===0)return null;var z=T[0],L=T.pop();if(L!==z){T[0]=L;e:for(var G=0,re=T.length,Zt=re>>>1;G<Zt;){var Bn=2*(G+1)-1,ji=T[Bn],Fn=Bn+1,Ut=T[Fn];if(0>i(ji,L))Fn<re&&0>i(Ut,ji)?(T[G]=Ut,T[Fn]=L,G=Fn):(T[G]=ji,T[Bn]=L,G=Bn);else if(Fn<re&&0>i(Ut,L))T[G]=Ut,T[Fn]=L,G=Fn;else break e}}return z}function i(T,z){var L=T.sortIndex-z.sortIndex;return L!==0?L:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],d=[],p=1,u=null,m=3,b=!1,v=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var z=r(d);z!==null;){if(z.callback===null)a(d);else if(z.startTime<=T)a(d),z.sortIndex=z.expirationTime,n(c,z);else break;z=r(d)}}function k(T){if(x=!1,g(T),!v)if(r(c)!==null)v=!0,yi(C);else{var z=r(d);z!==null&&wi(k,z.startTime-T)}}function C(T,z){v=!1,x&&(x=!1,f(R),R=-1),b=!0;var L=m;try{for(g(z),u=r(c);u!==null&&(!(u.expirationTime>z)||T&&!Ze());){var G=u.callback;if(typeof G=="function"){u.callback=null,m=u.priorityLevel;var re=G(u.expirationTime<=z);z=e.unstable_now(),typeof re=="function"?u.callback=re:u===r(c)&&a(c),g(z)}else a(c);u=r(c)}if(u!==null)var Zt=!0;else{var Bn=r(d);Bn!==null&&wi(k,Bn.startTime-z),Zt=!1}return Zt}finally{u=null,m=L,b=!1}}var S=!1,I=null,R=-1,U=5,_=-1;function Ze(){return!(e.unstable_now()-_<U)}function Br(){if(I!==null){var T=e.unstable_now();_=T;var z=!0;try{z=I(!0,T)}finally{z?Fr():(S=!1,I=null)}}else S=!1}var Fr;if(typeof h=="function")Fr=function(){h(Br)};else if(typeof MessageChannel<"u"){var al=new MessageChannel,Bu=al.port2;al.port1.onmessage=Br,Fr=function(){Bu.postMessage(null)}}else Fr=function(){y(Br,0)};function yi(T){I=T,S||(S=!0,Fr())}function wi(T,z){R=y(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||b||(v=!0,yi(C))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var L=m;m=z;try{return T()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=m;m=T;try{return z()}finally{m=L}},e.unstable_scheduleCallback=function(T,z,L){var G=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?G+L:G):L=G,T){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=L+re,T={id:p++,callback:z,priorityLevel:T,startTime:L,expirationTime:re,sortIndex:-1},L>G?(T.sortIndex=L,n(d,T),r(c)===null&&T===r(d)&&(x?(f(R),R=-1):x=!0,wi(k,L-G))):(T.sortIndex=re,n(c,T),v||b||(v=!0,yi(C))),T},e.unstable_shouldYield=Ze,e.unstable_wrapCallback=function(T){var z=m;return function(){var L=m;m=z;try{return T.apply(this,arguments)}finally{m=L}}}})(Qc);Jc.exports=Qc;var ff=Jc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=j,Ae=ff;function N(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xc=new Set,ft={};function tr(e,n){Cr(e,n),Cr(e+"Capture",n)}function Cr(e,n){for(ft[e]=n,e=0;e<n.length;e++)Xc.add(n[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eo=Object.prototype.hasOwnProperty,mf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ll={},cl={};function gf(e){return eo.call(cl,e)?!0:eo.call(ll,e)?!1:mf.test(e)?cl[e]=!0:(ll[e]=!0,!1)}function vf(e,n,r,a){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xf(e,n,r,a){if(n===null||typeof n>"u"||vf(e,n,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,r,a,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];le[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ss=/[\-:]([a-z])/g;function ls(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ss,ls);le[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ss,ls);le[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ss,ls);le[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function cs(e,n,r,a){var i=le.hasOwnProperty(n)?le[n]:null;(i!==null?i.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(xf(n,r,i,a)&&(r=null),a||i===null?gf(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(n=i.attributeName,a=i.attributeNamespace,r===null?e.removeAttribute(n):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,a?e.setAttributeNS(a,n,r):e.setAttribute(n,r))))}var hn=hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ht=Symbol.for("react.element"),or=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),ds=Symbol.for("react.strict_mode"),no=Symbol.for("react.profiler"),ed=Symbol.for("react.provider"),nd=Symbol.for("react.context"),ps=Symbol.for("react.forward_ref"),ro=Symbol.for("react.suspense"),to=Symbol.for("react.suspense_list"),us=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),rd=Symbol.for("react.offscreen"),dl=Symbol.iterator;function Zr(e){return e===null||typeof e!="object"?null:(e=dl&&e[dl]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ci;function et(e){if(Ci===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Ci=n&&n[1]||""}return`
`+Ci+e}var Ni=!1;function Ei(e,n){if(!e||Ni)return"";Ni=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var a=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){a=d}e.call(n.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=a.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Ni=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?et(e):""}function bf(e){switch(e.tag){case 5:return et(e.type);case 16:return et("Lazy");case 13:return et("Suspense");case 19:return et("SuspenseList");case 0:case 2:case 15:return e=Ei(e.type,!1),e;case 11:return e=Ei(e.type.render,!1),e;case 1:return e=Ei(e.type,!0),e;default:return""}}function ao(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sr:return"Fragment";case or:return"Portal";case no:return"Profiler";case ds:return"StrictMode";case ro:return"Suspense";case to:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nd:return(e.displayName||"Context")+".Consumer";case ed:return(e._context.displayName||"Context")+".Provider";case ps:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case us:return n=e.displayName||null,n!==null?n:ao(e.type)||"Memo";case gn:n=e._payload,e=e._init;try{return ao(e(n))}catch{}}return null}function yf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ao(n);case 8:return n===ds?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function td(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wf(e){var n=td(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $t(e){e._valueTracker||(e._valueTracker=wf(e))}function ad(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),a="";return e&&(a=td(e)?e.checked?"true":"false":e.value),e=a,e!==r?(n.setValue(e),!0):!1}function ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function io(e,n){var r=n.checked;return q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function pl(e,n){var r=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;r=zn(n.value!=null?n.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function id(e,n){n=n.checked,n!=null&&cs(e,"checked",n,!1)}function oo(e,n){id(e,n);var r=zn(n.value),a=n.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?so(e,n.type,r):n.hasOwnProperty("defaultValue")&&so(e,n.type,zn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ul(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function so(e,n,r){(n!=="number"||ka(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var nt=Array.isArray;function xr(e,n,r,a){if(e=e.options,n){n={};for(var i=0;i<r.length;i++)n["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=n.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&a&&(e[r].defaultSelected=!0)}else{for(r=""+zn(r),n=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function lo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(N(91));return q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fl(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(N(92));if(nt(r)){if(1<r.length)throw Error(N(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:zn(r)}}function od(e,n){var r=zn(n.value),a=zn(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function hl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function sd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function co(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?sd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qt,ld=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,a,i){MSApp.execUnsafeLocalFunction(function(){return e(n,r,a,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(qt=qt||document.createElement("div"),qt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=qt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ht(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var at={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jf=["Webkit","ms","Moz","O"];Object.keys(at).forEach(function(e){jf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),at[n]=at[e]})});function cd(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||at.hasOwnProperty(e)&&at[e]?(""+n).trim():n+"px"}function dd(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var a=r.indexOf("--")===0,i=cd(r,n[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,i):e[r]=i}}var kf=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function po(e,n){if(n){if(kf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(N(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(N(61))}if(n.style!=null&&typeof n.style!="object")throw Error(N(62))}}function uo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fo=null;function fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ho=null,br=null,yr=null;function ml(e){if(e=Pt(e)){if(typeof ho!="function")throw Error(N(280));var n=e.stateNode;n&&(n=ni(n),ho(e.stateNode,e.type,n))}}function pd(e){br?yr?yr.push(e):yr=[e]:br=e}function ud(){if(br){var e=br,n=yr;if(yr=br=null,ml(e),n)for(e=0;e<n.length;e++)ml(n[e])}}function fd(e,n){return e(n)}function hd(){}var Si=!1;function md(e,n,r){if(Si)return e(n,r);Si=!0;try{return fd(e,n,r)}finally{Si=!1,(br!==null||yr!==null)&&(hd(),ud())}}function mt(e,n){var r=e.stateNode;if(r===null)return null;var a=ni(r);if(a===null)return null;r=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,n,typeof r));return r}var mo=!1;if(dn)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){mo=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{mo=!1}function Cf(e,n,r,a,i,o,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(r,d)}catch(p){this.onError(p)}}var it=!1,Ca=null,Na=!1,go=null,Nf={onError:function(e){it=!0,Ca=e}};function Ef(e,n,r,a,i,o,s,l,c){it=!1,Ca=null,Cf.apply(Nf,arguments)}function Sf(e,n,r,a,i,o,s,l,c){if(Ef.apply(this,arguments),it){if(it){var d=Ca;it=!1,Ca=null}else throw Error(N(198));Na||(Na=!0,go=d)}}function ar(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function gd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function gl(e){if(ar(e)!==e)throw Error(N(188))}function Af(e){var n=e.alternate;if(!n){if(n=ar(e),n===null)throw Error(N(188));return n!==e?null:e}for(var r=e,a=n;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){r=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return gl(i),e;if(o===a)return gl(i),n;o=o.sibling}throw Error(N(188))}if(r.return!==a.return)r=i,a=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,a=o;break}if(l===a){s=!0,a=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,a=i;break}if(l===a){s=!0,a=o,r=i;break}l=l.sibling}if(!s)throw Error(N(189))}}if(r.alternate!==a)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:n}function vd(e){return e=Af(e),e!==null?xd(e):null}function xd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xd(e);if(n!==null)return n;e=e.sibling}return null}var bd=Ae.unstable_scheduleCallback,vl=Ae.unstable_cancelCallback,If=Ae.unstable_shouldYield,Tf=Ae.unstable_requestPaint,J=Ae.unstable_now,Rf=Ae.unstable_getCurrentPriorityLevel,hs=Ae.unstable_ImmediatePriority,yd=Ae.unstable_UserBlockingPriority,Ea=Ae.unstable_NormalPriority,Of=Ae.unstable_LowPriority,wd=Ae.unstable_IdlePriority,Ja=null,nn=null;function zf(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Ja,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Pf,Lf=Math.log,Df=Math.LN2;function Pf(e){return e>>>=0,e===0?32:31-(Lf(e)/Df|0)|0}var Wt=64,Yt=4194304;function rt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sa(e,n){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?a=rt(l):(o&=s,o!==0&&(a=rt(o)))}else s=r&~i,s!==0?a=rt(s):o!==0&&(a=rt(o));if(a===0)return 0;if(n!==0&&n!==a&&!(n&i)&&(i=a&-a,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(a&4&&(a|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)r=31-qe(n),i=1<<r,a|=e[r],n&=~i;return a}function _f(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(e,n){for(var r=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-qe(o),l=1<<s,c=i[s];c===-1?(!(l&r)||l&a)&&(i[s]=_f(l,n)):c<=n&&(e.expiredLanes|=l),o&=~l}}function vo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jd(){var e=Wt;return Wt<<=1,!(Wt&4194240)&&(Wt=64),e}function Ai(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Lt(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-qe(n),e[n]=r}function Mf(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-qe(r),o=1<<i;n[i]=0,a[i]=-1,e[i]=-1,r&=~o}}function ms(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var a=31-qe(r),i=1<<a;i&n|e[a]&n&&(e[a]|=n),r&=~i}}var M=0;function kd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cd,gs,Nd,Ed,Sd,xo=!1,Gt=[],Cn=null,Nn=null,En=null,gt=new Map,vt=new Map,xn=[],Bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xl(e,n){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":gt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vt.delete(n.pointerId)}}function Kr(e,n,r,a,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:r,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Pt(n),n!==null&&gs(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Ff(e,n,r,a,i){switch(n){case"focusin":return Cn=Kr(Cn,e,n,r,a,i),!0;case"dragenter":return Nn=Kr(Nn,e,n,r,a,i),!0;case"mouseover":return En=Kr(En,e,n,r,a,i),!0;case"pointerover":var o=i.pointerId;return gt.set(o,Kr(gt.get(o)||null,e,n,r,a,i)),!0;case"gotpointercapture":return o=i.pointerId,vt.set(o,Kr(vt.get(o)||null,e,n,r,a,i)),!0}return!1}function Ad(e){var n=Kn(e.target);if(n!==null){var r=ar(n);if(r!==null){if(n=r.tag,n===13){if(n=gd(r),n!==null){e.blockedOn=n,Sd(e.priority,function(){Nd(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function da(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=bo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);fo=a,r.target.dispatchEvent(a),fo=null}else return n=Pt(r),n!==null&&gs(n),e.blockedOn=r,!1;n.shift()}return!0}function bl(e,n,r){da(e)&&r.delete(n)}function Zf(){xo=!1,Cn!==null&&da(Cn)&&(Cn=null),Nn!==null&&da(Nn)&&(Nn=null),En!==null&&da(En)&&(En=null),gt.forEach(bl),vt.forEach(bl)}function Hr(e,n){e.blockedOn===n&&(e.blockedOn=null,xo||(xo=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Zf)))}function xt(e){function n(i){return Hr(i,e)}if(0<Gt.length){Hr(Gt[0],e);for(var r=1;r<Gt.length;r++){var a=Gt[r];a.blockedOn===e&&(a.blockedOn=null)}}for(Cn!==null&&Hr(Cn,e),Nn!==null&&Hr(Nn,e),En!==null&&Hr(En,e),gt.forEach(n),vt.forEach(n),r=0;r<xn.length;r++)a=xn[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<xn.length&&(r=xn[0],r.blockedOn===null);)Ad(r),r.blockedOn===null&&xn.shift()}var wr=hn.ReactCurrentBatchConfig,Aa=!0;function Uf(e,n,r,a){var i=M,o=wr.transition;wr.transition=null;try{M=1,vs(e,n,r,a)}finally{M=i,wr.transition=o}}function Kf(e,n,r,a){var i=M,o=wr.transition;wr.transition=null;try{M=4,vs(e,n,r,a)}finally{M=i,wr.transition=o}}function vs(e,n,r,a){if(Aa){var i=bo(e,n,r,a);if(i===null)Vi(e,n,a,Ia,r),xl(e,a);else if(Ff(i,e,n,r,a))a.stopPropagation();else if(xl(e,a),n&4&&-1<Bf.indexOf(e)){for(;i!==null;){var o=Pt(i);if(o!==null&&Cd(o),o=bo(e,n,r,a),o===null&&Vi(e,n,a,Ia,r),o===i)break;i=o}i!==null&&a.stopPropagation()}else Vi(e,n,a,null,r)}}var Ia=null;function bo(e,n,r,a){if(Ia=null,e=fs(a),e=Kn(e),e!==null)if(n=ar(e),n===null)e=null;else if(r=n.tag,r===13){if(e=gd(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ia=e,null}function Id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rf()){case hs:return 1;case yd:return 4;case Ea:case Of:return 16;case wd:return 536870912;default:return 16}default:return 16}}var yn=null,xs=null,pa=null;function Td(){if(pa)return pa;var e,n=xs,r=n.length,a,i="value"in yn?yn.value:yn.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(a=1;a<=s&&n[r-a]===i[o-a];a++);return pa=i.slice(e,1<a?1-a:void 0)}function ua(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jt(){return!0}function yl(){return!1}function Te(e){function n(r,a,i,o,s){this._reactName=r,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Jt:yl,this.isPropagationStopped=yl,this}return q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Jt)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Jt)},persist:function(){},isPersistent:Jt}),n}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=Te(zr),Dt=q({},zr,{view:0,detail:0}),Hf=Te(Dt),Ii,Ti,$r,Qa=q({},Dt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(Ii=e.screenX-$r.screenX,Ti=e.screenY-$r.screenY):Ti=Ii=0,$r=e),Ii)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),wl=Te(Qa),$f=q({},Qa,{dataTransfer:0}),qf=Te($f),Wf=q({},Dt,{relatedTarget:0}),Ri=Te(Wf),Yf=q({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gf=Te(Yf),Jf=q({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qf=Te(Jf),Xf=q({},zr,{data:0}),jl=Te(Xf),eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function th(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rh[e])?!!n[e]:!1}function ys(){return th}var ah=q({},Dt,{key:function(e){if(e.key){var n=eh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ua(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?ua(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ua(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ih=Te(ah),oh=q({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kl=Te(oh),sh=q({},Dt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),lh=Te(sh),ch=q({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),dh=Te(ch),ph=q({},Qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uh=Te(ph),fh=[9,13,27,32],ws=dn&&"CompositionEvent"in window,ot=null;dn&&"documentMode"in document&&(ot=document.documentMode);var hh=dn&&"TextEvent"in window&&!ot,Rd=dn&&(!ws||ot&&8<ot&&11>=ot),Cl=" ",Nl=!1;function Od(e,n){switch(e){case"keyup":return fh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function mh(e,n){switch(e){case"compositionend":return zd(n);case"keypress":return n.which!==32?null:(Nl=!0,Cl);case"textInput":return e=n.data,e===Cl&&Nl?null:e;default:return null}}function gh(e,n){if(lr)return e==="compositionend"||!ws&&Od(e,n)?(e=Td(),pa=xs=yn=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rd&&n.locale!=="ko"?null:n.data;default:return null}}var vh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function El(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!vh[e.type]:n==="textarea"}function Ld(e,n,r,a){pd(a),n=Ta(n,"onChange"),0<n.length&&(r=new bs("onChange","change",null,r,a),e.push({event:r,listeners:n}))}var st=null,bt=null;function xh(e){Hd(e,0)}function Xa(e){var n=pr(e);if(ad(n))return e}function bh(e,n){if(e==="change")return n}var Dd=!1;if(dn){var Oi;if(dn){var zi="oninput"in document;if(!zi){var Sl=document.createElement("div");Sl.setAttribute("oninput","return;"),zi=typeof Sl.oninput=="function"}Oi=zi}else Oi=!1;Dd=Oi&&(!document.documentMode||9<document.documentMode)}function Al(){st&&(st.detachEvent("onpropertychange",Pd),bt=st=null)}function Pd(e){if(e.propertyName==="value"&&Xa(bt)){var n=[];Ld(n,bt,e,fs(e)),md(xh,n)}}function yh(e,n,r){e==="focusin"?(Al(),st=n,bt=r,st.attachEvent("onpropertychange",Pd)):e==="focusout"&&Al()}function wh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xa(bt)}function jh(e,n){if(e==="click")return Xa(n)}function kh(e,n){if(e==="input"||e==="change")return Xa(n)}function Ch(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ye=typeof Object.is=="function"?Object.is:Ch;function yt(e,n){if(Ye(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),a=Object.keys(n);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var i=r[a];if(!eo.call(n,i)||!Ye(e[i],n[i]))return!1}return!0}function Il(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tl(e,n){var r=Il(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=n&&a>=n)return{node:r,offset:n-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Il(r)}}function _d(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_d(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vd(){for(var e=window,n=ka();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=ka(e.document)}return n}function js(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Nh(e){var n=Vd(),r=e.focusedElem,a=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&_d(r.ownerDocument.documentElement,r)){if(a!==null&&js(r)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(a.start,i);a=a.end===void 0?o:Math.min(a.end,i),!e.extend&&o>a&&(i=a,a=o,o=i),i=Tl(r,o);var s=Tl(r,a);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>a?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Eh=dn&&"documentMode"in document&&11>=document.documentMode,cr=null,yo=null,lt=null,wo=!1;function Rl(e,n,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wo||cr==null||cr!==ka(a)||(a=cr,"selectionStart"in a&&js(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),lt&&yt(lt,a)||(lt=a,a=Ta(yo,"onSelect"),0<a.length&&(n=new bs("onSelect","select",null,n,r),e.push({event:n,listeners:a}),n.target=cr)))}function Qt(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var dr={animationend:Qt("Animation","AnimationEnd"),animationiteration:Qt("Animation","AnimationIteration"),animationstart:Qt("Animation","AnimationStart"),transitionend:Qt("Transition","TransitionEnd")},Li={},Md={};dn&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function ei(e){if(Li[e])return Li[e];if(!dr[e])return e;var n=dr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Md)return Li[e]=n[r];return e}var Bd=ei("animationend"),Fd=ei("animationiteration"),Zd=ei("animationstart"),Ud=ei("transitionend"),Kd=new Map,Ol="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,n){Kd.set(e,n),tr(n,[e])}for(var Di=0;Di<Ol.length;Di++){var Pi=Ol[Di],Sh=Pi.toLowerCase(),Ah=Pi[0].toUpperCase()+Pi.slice(1);Dn(Sh,"on"+Ah)}Dn(Bd,"onAnimationEnd");Dn(Fd,"onAnimationIteration");Dn(Zd,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(Ud,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ih=new Set("cancel close invalid load scroll toggle".split(" ").concat(tt));function zl(e,n,r){var a=e.type||"unknown-event";e.currentTarget=r,Sf(a,n,void 0,e),e.currentTarget=null}function Hd(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],i=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var s=a.length-1;0<=s;s--){var l=a[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;zl(i,l,d),o=c}else for(s=0;s<a.length;s++){if(l=a[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;zl(i,l,d),o=c}}}if(Na)throw e=go,Na=!1,go=null,e}function F(e,n){var r=n[Eo];r===void 0&&(r=n[Eo]=new Set);var a=e+"__bubble";r.has(a)||($d(n,e,2,!1),r.add(a))}function _i(e,n,r){var a=0;n&&(a|=4),$d(r,e,a,n)}var Xt="_reactListening"+Math.random().toString(36).slice(2);function wt(e){if(!e[Xt]){e[Xt]=!0,Xc.forEach(function(r){r!=="selectionchange"&&(Ih.has(r)||_i(r,!1,e),_i(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xt]||(n[Xt]=!0,_i("selectionchange",!1,n))}}function $d(e,n,r,a){switch(Id(n)){case 1:var i=Uf;break;case 4:i=Kf;break;default:i=vs}r=i.bind(null,n,r,e),i=void 0,!mo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,r,{capture:!0,passive:i}):e.addEventListener(n,r,!0):i!==void 0?e.addEventListener(n,r,{passive:i}):e.addEventListener(n,r,!1)}function Vi(e,n,r,a,i){var o=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=a.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Kn(l),s===null)return;if(c=s.tag,c===5||c===6){a=o=s;continue e}l=l.parentNode}}a=a.return}md(function(){var d=o,p=fs(r),u=[];e:{var m=Kd.get(e);if(m!==void 0){var b=bs,v=e;switch(e){case"keypress":if(ua(r)===0)break e;case"keydown":case"keyup":b=ih;break;case"focusin":v="focus",b=Ri;break;case"focusout":v="blur",b=Ri;break;case"beforeblur":case"afterblur":b=Ri;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=qf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=lh;break;case Bd:case Fd:case Zd:b=Gf;break;case Ud:b=dh;break;case"scroll":b=Hf;break;case"wheel":b=uh;break;case"copy":case"cut":case"paste":b=Qf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=kl}var x=(n&4)!==0,y=!x&&e==="scroll",f=x?m!==null?m+"Capture":null:m;x=[];for(var h=d,g;h!==null;){g=h;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,f!==null&&(k=mt(h,f),k!=null&&x.push(jt(h,k,g)))),y)break;h=h.return}0<x.length&&(m=new b(m,v,null,r,p),u.push({event:m,listeners:x}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&r!==fo&&(v=r.relatedTarget||r.fromElement)&&(Kn(v)||v[pn]))break e;if((b||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,b?(v=r.relatedTarget||r.toElement,b=d,v=v?Kn(v):null,v!==null&&(y=ar(v),v!==y||v.tag!==5&&v.tag!==6)&&(v=null)):(b=null,v=d),b!==v)){if(x=wl,k="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=kl,k="onPointerLeave",f="onPointerEnter",h="pointer"),y=b==null?m:pr(b),g=v==null?m:pr(v),m=new x(k,h+"leave",b,r,p),m.target=y,m.relatedTarget=g,k=null,Kn(p)===d&&(x=new x(f,h+"enter",v,r,p),x.target=g,x.relatedTarget=y,k=x),y=k,b&&v)n:{for(x=b,f=v,h=0,g=x;g;g=ir(g))h++;for(g=0,k=f;k;k=ir(k))g++;for(;0<h-g;)x=ir(x),h--;for(;0<g-h;)f=ir(f),g--;for(;h--;){if(x===f||f!==null&&x===f.alternate)break n;x=ir(x),f=ir(f)}x=null}else x=null;b!==null&&Ll(u,m,b,x,!1),v!==null&&y!==null&&Ll(u,y,v,x,!0)}}e:{if(m=d?pr(d):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var C=bh;else if(El(m))if(Dd)C=kh;else{C=wh;var S=yh}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=jh);if(C&&(C=C(e,d))){Ld(u,C,r,p);break e}S&&S(e,m,d),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&so(m,"number",m.value)}switch(S=d?pr(d):window,e){case"focusin":(El(S)||S.contentEditable==="true")&&(cr=S,yo=d,lt=null);break;case"focusout":lt=yo=cr=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,Rl(u,r,p);break;case"selectionchange":if(Eh)break;case"keydown":case"keyup":Rl(u,r,p)}var I;if(ws)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else lr?Od(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(Rd&&r.locale!=="ko"&&(lr||R!=="onCompositionStart"?R==="onCompositionEnd"&&lr&&(I=Td()):(yn=p,xs="value"in yn?yn.value:yn.textContent,lr=!0)),S=Ta(d,R),0<S.length&&(R=new jl(R,e,null,r,p),u.push({event:R,listeners:S}),I?R.data=I:(I=zd(r),I!==null&&(R.data=I)))),(I=hh?mh(e,r):gh(e,r))&&(d=Ta(d,"onBeforeInput"),0<d.length&&(p=new jl("onBeforeInput","beforeinput",null,r,p),u.push({event:p,listeners:d}),p.data=I))}Hd(u,n)})}function jt(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Ta(e,n){for(var r=n+"Capture",a=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=mt(e,r),o!=null&&a.unshift(jt(e,o,i)),o=mt(e,n),o!=null&&a.push(jt(e,o,i))),e=e.return}return a}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ll(e,n,r,a,i){for(var o=n._reactName,s=[];r!==null&&r!==a;){var l=r,c=l.alternate,d=l.stateNode;if(c!==null&&c===a)break;l.tag===5&&d!==null&&(l=d,i?(c=mt(r,o),c!=null&&s.unshift(jt(r,c,l))):i||(c=mt(r,o),c!=null&&s.push(jt(r,c,l)))),r=r.return}s.length!==0&&e.push({event:n,listeners:s})}var Th=/\r\n?/g,Rh=/\u0000|\uFFFD/g;function Dl(e){return(typeof e=="string"?e:""+e).replace(Th,`
`).replace(Rh,"")}function ea(e,n,r){if(n=Dl(n),Dl(e)!==n&&r)throw Error(N(425))}function Ra(){}var jo=null,ko=null;function Co(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var No=typeof setTimeout=="function"?setTimeout:void 0,Oh=typeof clearTimeout=="function"?clearTimeout:void 0,Pl=typeof Promise=="function"?Promise:void 0,zh=typeof queueMicrotask=="function"?queueMicrotask:typeof Pl<"u"?function(e){return Pl.resolve(null).then(e).catch(Lh)}:No;function Lh(e){setTimeout(function(){throw e})}function Mi(e,n){var r=n,a=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(a===0){e.removeChild(i),xt(n);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=i}while(r);xt(n)}function Sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function _l(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),en="__reactFiber$"+Lr,kt="__reactProps$"+Lr,pn="__reactContainer$"+Lr,Eo="__reactEvents$"+Lr,Dh="__reactListeners$"+Lr,Ph="__reactHandles$"+Lr;function Kn(e){var n=e[en];if(n)return n;for(var r=e.parentNode;r;){if(n=r[pn]||r[en]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=_l(e);e!==null;){if(r=e[en])return r;e=_l(e)}return n}e=r,r=e.parentNode}return null}function Pt(e){return e=e[en]||e[pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ni(e){return e[kt]||null}var So=[],ur=-1;function Pn(e){return{current:e}}function Z(e){0>ur||(e.current=So[ur],So[ur]=null,ur--)}function B(e,n){ur++,So[ur]=e.current,e.current=n}var Ln={},fe=Pn(Ln),ye=Pn(!1),Jn=Ln;function Nr(e,n){var r=e.type.contextTypes;if(!r)return Ln;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=n[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function Oa(){Z(ye),Z(fe)}function Vl(e,n,r){if(fe.current!==Ln)throw Error(N(168));B(fe,n),B(ye,r)}function qd(e,n,r){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var i in a)if(!(i in n))throw Error(N(108,yf(e)||"Unknown",i));return q({},r,a)}function za(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,Jn=fe.current,B(fe,e),B(ye,ye.current),!0}function Ml(e,n,r){var a=e.stateNode;if(!a)throw Error(N(169));r?(e=qd(e,n,Jn),a.__reactInternalMemoizedMergedChildContext=e,Z(ye),Z(fe),B(fe,e)):Z(ye),B(ye,r)}var on=null,ri=!1,Bi=!1;function Wd(e){on===null?on=[e]:on.push(e)}function _h(e){ri=!0,Wd(e)}function _n(){if(!Bi&&on!==null){Bi=!0;var e=0,n=M;try{var r=on;for(M=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}on=null,ri=!1}catch(i){throw on!==null&&(on=on.slice(e+1)),bd(hs,_n),i}finally{M=n,Bi=!1}}return null}var fr=[],hr=0,La=null,Da=0,De=[],Pe=0,Qn=null,sn=1,ln="";function Zn(e,n){fr[hr++]=Da,fr[hr++]=La,La=e,Da=n}function Yd(e,n,r){De[Pe++]=sn,De[Pe++]=ln,De[Pe++]=Qn,Qn=e;var a=sn;e=ln;var i=32-qe(a)-1;a&=~(1<<i),r+=1;var o=32-qe(n)+i;if(30<o){var s=i-i%5;o=(a&(1<<s)-1).toString(32),a>>=s,i-=s,sn=1<<32-qe(n)+i|r<<i|a,ln=o+e}else sn=1<<o|r<<i|a,ln=e}function ks(e){e.return!==null&&(Zn(e,1),Yd(e,1,0))}function Cs(e){for(;e===La;)La=fr[--hr],fr[hr]=null,Da=fr[--hr],fr[hr]=null;for(;e===Qn;)Qn=De[--Pe],De[Pe]=null,ln=De[--Pe],De[Pe]=null,sn=De[--Pe],De[Pe]=null}var Se=null,Ee=null,K=!1,$e=null;function Gd(e,n){var r=_e(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function Bl(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,Ee=Sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,Ee=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=Qn!==null?{id:sn,overflow:ln}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=_e(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,Se=e,Ee=null,!0):!1;default:return!1}}function Ao(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Io(e){if(K){var n=Ee;if(n){var r=n;if(!Bl(e,n)){if(Ao(e))throw Error(N(418));n=Sn(r.nextSibling);var a=Se;n&&Bl(e,n)?Gd(a,r):(e.flags=e.flags&-4097|2,K=!1,Se=e)}}else{if(Ao(e))throw Error(N(418));e.flags=e.flags&-4097|2,K=!1,Se=e}}}function Fl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function na(e){if(e!==Se)return!1;if(!K)return Fl(e),K=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Co(e.type,e.memoizedProps)),n&&(n=Ee)){if(Ao(e))throw Jd(),Error(N(418));for(;n;)Gd(e,n),n=Sn(n.nextSibling)}if(Fl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){Ee=Sn(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}Ee=null}}else Ee=Se?Sn(e.stateNode.nextSibling):null;return!0}function Jd(){for(var e=Ee;e;)e=Sn(e.nextSibling)}function Er(){Ee=Se=null,K=!1}function Ns(e){$e===null?$e=[e]:$e.push(e)}var Vh=hn.ReactCurrentBatchConfig;function qr(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var a=r.stateNode}if(!a)throw Error(N(147,e));var i=a,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function ra(e,n){throw e=Object.prototype.toString.call(n),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Zl(e){var n=e._init;return n(e._payload)}function Qd(e){function n(f,h){if(e){var g=f.deletions;g===null?(f.deletions=[h],f.flags|=16):g.push(h)}}function r(f,h){if(!e)return null;for(;h!==null;)n(f,h),h=h.sibling;return null}function a(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=Rn(f,h),f.index=0,f.sibling=null,f}function o(f,h,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<h?(f.flags|=2,h):g):(f.flags|=2,h)):(f.flags|=1048576,h)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,h,g,k){return h===null||h.tag!==6?(h=qi(g,f.mode,k),h.return=f,h):(h=i(h,g),h.return=f,h)}function c(f,h,g,k){var C=g.type;return C===sr?p(f,h,g.props.children,k,g.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gn&&Zl(C)===h.type)?(k=i(h,g.props),k.ref=qr(f,h,g),k.return=f,k):(k=ba(g.type,g.key,g.props,null,f.mode,k),k.ref=qr(f,h,g),k.return=f,k)}function d(f,h,g,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Wi(g,f.mode,k),h.return=f,h):(h=i(h,g.children||[]),h.return=f,h)}function p(f,h,g,k,C){return h===null||h.tag!==7?(h=Yn(g,f.mode,k,C),h.return=f,h):(h=i(h,g),h.return=f,h)}function u(f,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=qi(""+h,f.mode,g),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ht:return g=ba(h.type,h.key,h.props,null,f.mode,g),g.ref=qr(f,null,h),g.return=f,g;case or:return h=Wi(h,f.mode,g),h.return=f,h;case gn:var k=h._init;return u(f,k(h._payload),g)}if(nt(h)||Zr(h))return h=Yn(h,f.mode,g,null),h.return=f,h;ra(f,h)}return null}function m(f,h,g,k){var C=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(f,h,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ht:return g.key===C?c(f,h,g,k):null;case or:return g.key===C?d(f,h,g,k):null;case gn:return C=g._init,m(f,h,C(g._payload),k)}if(nt(g)||Zr(g))return C!==null?null:p(f,h,g,k,null);ra(f,g)}return null}function b(f,h,g,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(g)||null,l(h,f,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ht:return f=f.get(k.key===null?g:k.key)||null,c(h,f,k,C);case or:return f=f.get(k.key===null?g:k.key)||null,d(h,f,k,C);case gn:var S=k._init;return b(f,h,g,S(k._payload),C)}if(nt(k)||Zr(k))return f=f.get(g)||null,p(h,f,k,C,null);ra(h,k)}return null}function v(f,h,g,k){for(var C=null,S=null,I=h,R=h=0,U=null;I!==null&&R<g.length;R++){I.index>R?(U=I,I=null):U=I.sibling;var _=m(f,I,g[R],k);if(_===null){I===null&&(I=U);break}e&&I&&_.alternate===null&&n(f,I),h=o(_,h,R),S===null?C=_:S.sibling=_,S=_,I=U}if(R===g.length)return r(f,I),K&&Zn(f,R),C;if(I===null){for(;R<g.length;R++)I=u(f,g[R],k),I!==null&&(h=o(I,h,R),S===null?C=I:S.sibling=I,S=I);return K&&Zn(f,R),C}for(I=a(f,I);R<g.length;R++)U=b(I,f,R,g[R],k),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?R:U.key),h=o(U,h,R),S===null?C=U:S.sibling=U,S=U);return e&&I.forEach(function(Ze){return n(f,Ze)}),K&&Zn(f,R),C}function x(f,h,g,k){var C=Zr(g);if(typeof C!="function")throw Error(N(150));if(g=C.call(g),g==null)throw Error(N(151));for(var S=C=null,I=h,R=h=0,U=null,_=g.next();I!==null&&!_.done;R++,_=g.next()){I.index>R?(U=I,I=null):U=I.sibling;var Ze=m(f,I,_.value,k);if(Ze===null){I===null&&(I=U);break}e&&I&&Ze.alternate===null&&n(f,I),h=o(Ze,h,R),S===null?C=Ze:S.sibling=Ze,S=Ze,I=U}if(_.done)return r(f,I),K&&Zn(f,R),C;if(I===null){for(;!_.done;R++,_=g.next())_=u(f,_.value,k),_!==null&&(h=o(_,h,R),S===null?C=_:S.sibling=_,S=_);return K&&Zn(f,R),C}for(I=a(f,I);!_.done;R++,_=g.next())_=b(I,f,R,_.value,k),_!==null&&(e&&_.alternate!==null&&I.delete(_.key===null?R:_.key),h=o(_,h,R),S===null?C=_:S.sibling=_,S=_);return e&&I.forEach(function(Br){return n(f,Br)}),K&&Zn(f,R),C}function y(f,h,g,k){if(typeof g=="object"&&g!==null&&g.type===sr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ht:e:{for(var C=g.key,S=h;S!==null;){if(S.key===C){if(C=g.type,C===sr){if(S.tag===7){r(f,S.sibling),h=i(S,g.props.children),h.return=f,f=h;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gn&&Zl(C)===S.type){r(f,S.sibling),h=i(S,g.props),h.ref=qr(f,S,g),h.return=f,f=h;break e}r(f,S);break}else n(f,S);S=S.sibling}g.type===sr?(h=Yn(g.props.children,f.mode,k,g.key),h.return=f,f=h):(k=ba(g.type,g.key,g.props,null,f.mode,k),k.ref=qr(f,h,g),k.return=f,f=k)}return s(f);case or:e:{for(S=g.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){r(f,h.sibling),h=i(h,g.children||[]),h.return=f,f=h;break e}else{r(f,h);break}else n(f,h);h=h.sibling}h=Wi(g,f.mode,k),h.return=f,f=h}return s(f);case gn:return S=g._init,y(f,h,S(g._payload),k)}if(nt(g))return v(f,h,g,k);if(Zr(g))return x(f,h,g,k);ra(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(r(f,h.sibling),h=i(h,g),h.return=f,f=h):(r(f,h),h=qi(g,f.mode,k),h.return=f,f=h),s(f)):r(f,h)}return y}var Sr=Qd(!0),Xd=Qd(!1),Pa=Pn(null),_a=null,mr=null,Es=null;function Ss(){Es=mr=_a=null}function As(e){var n=Pa.current;Z(Pa),e._currentValue=n}function To(e,n,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===r)break;e=e.return}}function jr(e,n){_a=e,Es=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(be=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(Es!==e)if(e={context:e,memoizedValue:n,next:null},mr===null){if(_a===null)throw Error(N(308));mr=e,_a.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return n}var Hn=null;function Is(e){Hn===null?Hn=[e]:Hn.push(e)}function ep(e,n,r,a){var i=n.interleaved;return i===null?(r.next=r,Is(n)):(r.next=i.next,i.next=r),n.interleaved=r,un(e,a)}function un(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var vn=!1;function Ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function np(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function An(e,n,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,V&2){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,un(e,r)}return i=a.interleaved,i===null?(n.next=n,Is(a)):(n.next=i.next,i.next=n),a.interleaved=n,un(e,r)}function fa(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,r|=a,n.lanes=r,ms(e,r)}}function Ul(e,n){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=n:o=o.next=n}else i=o=n;r={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function Va(e,n,r,a){var i=e.updateQueue;vn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?o=d:s.next=d,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=c))}if(o!==null){var u=i.baseState;s=0,p=d=c=null,l=o;do{var m=l.lane,b=l.eventTime;if((a&m)===m){p!==null&&(p=p.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(m=n,b=r,x.tag){case 1:if(v=x.payload,typeof v=="function"){u=v.call(b,u,m);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,m=typeof v=="function"?v.call(b,u,m):v,m==null)break e;u=q({},u,m);break e;case 2:vn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else b={eventTime:b,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=b,c=u):p=p.next=b,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(c=u),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);er|=s,e.lanes=s,e.memoizedState=u}}function Kl(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],i=a.callback;if(i!==null){if(a.callback=null,a=r,typeof i!="function")throw Error(N(191,i));i.call(a)}}}var _t={},rn=Pn(_t),Ct=Pn(_t),Nt=Pn(_t);function $n(e){if(e===_t)throw Error(N(174));return e}function Rs(e,n){switch(B(Nt,n),B(Ct,e),B(rn,_t),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:co(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=co(n,e)}Z(rn),B(rn,n)}function Ar(){Z(rn),Z(Ct),Z(Nt)}function rp(e){$n(Nt.current);var n=$n(rn.current),r=co(n,e.type);n!==r&&(B(Ct,e),B(rn,r))}function Os(e){Ct.current===e&&(Z(rn),Z(Ct))}var H=Pn(0);function Ma(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=[];function zs(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var ha=hn.ReactCurrentDispatcher,Zi=hn.ReactCurrentBatchConfig,Xn=0,$=null,ee=null,te=null,Ba=!1,ct=!1,Et=0,Mh=0;function ce(){throw Error(N(321))}function Ls(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Ye(e[r],n[r]))return!1;return!0}function Ds(e,n,r,a,i,o){if(Xn=o,$=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ha.current=e===null||e.memoizedState===null?Uh:Kh,e=r(a,i),ct){o=0;do{if(ct=!1,Et=0,25<=o)throw Error(N(301));o+=1,te=ee=null,n.updateQueue=null,ha.current=Hh,e=r(a,i)}while(ct)}if(ha.current=Fa,n=ee!==null&&ee.next!==null,Xn=0,te=ee=$=null,Ba=!1,n)throw Error(N(300));return e}function Ps(){var e=Et!==0;return Et=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?$.memoizedState=te=e:te=te.next=e,te}function Be(){if(ee===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=te===null?$.memoizedState:te.next;if(n!==null)te=n,ee=e;else{if(e===null)throw Error(N(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},te===null?$.memoizedState=te=e:te=te.next=e}return te}function St(e,n){return typeof n=="function"?n(e):n}function Ui(e){var n=Be(),r=n.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var a=ee,i=a.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}a.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,a=a.baseState;var l=s=null,c=null,d=o;do{var p=d.lane;if((Xn&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var u={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=u,s=a):c=c.next=u,$.lanes|=p,er|=p}d=d.next}while(d!==null&&d!==o);c===null?s=a:c.next=l,Ye(a,n.memoizedState)||(be=!0),n.memoizedState=a,n.baseState=s,n.baseQueue=c,r.lastRenderedState=a}if(e=r.interleaved,e!==null){i=e;do o=i.lane,$.lanes|=o,er|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function Ki(e){var n=Be(),r=n.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var a=r.dispatch,i=r.pending,o=n.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ye(o,n.memoizedState)||(be=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),r.lastRenderedState=o}return[o,a]}function tp(){}function ap(e,n){var r=$,a=Be(),i=n(),o=!Ye(a.memoizedState,i);if(o&&(a.memoizedState=i,be=!0),a=a.queue,_s(sp.bind(null,r,a,e),[e]),a.getSnapshot!==n||o||te!==null&&te.memoizedState.tag&1){if(r.flags|=2048,At(9,op.bind(null,r,a,i,n),void 0,null),ae===null)throw Error(N(349));Xn&30||ip(r,n,i)}return i}function ip(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=$.updateQueue,n===null?(n={lastEffect:null,stores:null},$.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function op(e,n,r,a){n.value=r,n.getSnapshot=a,lp(n)&&cp(e)}function sp(e,n,r){return r(function(){lp(n)&&cp(e)})}function lp(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Ye(e,r)}catch{return!0}}function cp(e){var n=un(e,1);n!==null&&We(n,e,1,-1)}function Hl(e){var n=Xe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:St,lastRenderedState:e},n.queue=e,e=e.dispatch=Zh.bind(null,$,e),[n.memoizedState,e]}function At(e,n,r,a){return e={tag:e,create:n,destroy:r,deps:a,next:null},n=$.updateQueue,n===null?(n={lastEffect:null,stores:null},$.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,n.lastEffect=e)),e}function dp(){return Be().memoizedState}function ma(e,n,r,a){var i=Xe();$.flags|=e,i.memoizedState=At(1|n,r,void 0,a===void 0?null:a)}function ti(e,n,r,a){var i=Be();a=a===void 0?null:a;var o=void 0;if(ee!==null){var s=ee.memoizedState;if(o=s.destroy,a!==null&&Ls(a,s.deps)){i.memoizedState=At(n,r,o,a);return}}$.flags|=e,i.memoizedState=At(1|n,r,o,a)}function $l(e,n){return ma(8390656,8,e,n)}function _s(e,n){return ti(2048,8,e,n)}function pp(e,n){return ti(4,2,e,n)}function up(e,n){return ti(4,4,e,n)}function fp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hp(e,n,r){return r=r!=null?r.concat([e]):null,ti(4,4,fp.bind(null,n,e),r)}function Vs(){}function mp(e,n){var r=Be();n=n===void 0?null:n;var a=r.memoizedState;return a!==null&&n!==null&&Ls(n,a[1])?a[0]:(r.memoizedState=[e,n],e)}function gp(e,n){var r=Be();n=n===void 0?null:n;var a=r.memoizedState;return a!==null&&n!==null&&Ls(n,a[1])?a[0]:(e=e(),r.memoizedState=[e,n],e)}function vp(e,n,r){return Xn&21?(Ye(r,n)||(r=jd(),$.lanes|=r,er|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=r)}function Bh(e,n){var r=M;M=r!==0&&4>r?r:4,e(!0);var a=Zi.transition;Zi.transition={};try{e(!1),n()}finally{M=r,Zi.transition=a}}function xp(){return Be().memoizedState}function Fh(e,n,r){var a=Tn(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},bp(e))yp(n,r);else if(r=ep(e,n,r,a),r!==null){var i=me();We(r,e,a,i),wp(r,n,a)}}function Zh(e,n,r){var a=Tn(e),i={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(bp(e))yp(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,Ye(l,s)){var c=n.interleaved;c===null?(i.next=i,Is(n)):(i.next=c.next,c.next=i),n.interleaved=i;return}}catch{}finally{}r=ep(e,n,i,a),r!==null&&(i=me(),We(r,e,a,i),wp(r,n,a))}}function bp(e){var n=e.alternate;return e===$||n!==null&&n===$}function yp(e,n){ct=Ba=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function wp(e,n,r){if(r&4194240){var a=n.lanes;a&=e.pendingLanes,r|=a,n.lanes=r,ms(e,r)}}var Fa={readContext:Me,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Uh={readContext:Me,useCallback:function(e,n){return Xe().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:$l,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,ma(4194308,4,fp.bind(null,n,e),r)},useLayoutEffect:function(e,n){return ma(4194308,4,e,n)},useInsertionEffect:function(e,n){return ma(4,2,e,n)},useMemo:function(e,n){var r=Xe();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var a=Xe();return n=r!==void 0?r(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Fh.bind(null,$,e),[a.memoizedState,e]},useRef:function(e){var n=Xe();return e={current:e},n.memoizedState=e},useState:Hl,useDebugValue:Vs,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=Hl(!1),n=e[0];return e=Bh.bind(null,e[1]),Xe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var a=$,i=Xe();if(K){if(r===void 0)throw Error(N(407));r=r()}else{if(r=n(),ae===null)throw Error(N(349));Xn&30||ip(a,n,r)}i.memoizedState=r;var o={value:r,getSnapshot:n};return i.queue=o,$l(sp.bind(null,a,o,e),[e]),a.flags|=2048,At(9,op.bind(null,a,o,r,n),void 0,null),r},useId:function(){var e=Xe(),n=ae.identifierPrefix;if(K){var r=ln,a=sn;r=(a&~(1<<32-qe(a)-1)).toString(32)+r,n=":"+n+"R"+r,r=Et++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=Mh++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Kh={readContext:Me,useCallback:mp,useContext:Me,useEffect:_s,useImperativeHandle:hp,useInsertionEffect:pp,useLayoutEffect:up,useMemo:gp,useReducer:Ui,useRef:dp,useState:function(){return Ui(St)},useDebugValue:Vs,useDeferredValue:function(e){var n=Be();return vp(n,ee.memoizedState,e)},useTransition:function(){var e=Ui(St)[0],n=Be().memoizedState;return[e,n]},useMutableSource:tp,useSyncExternalStore:ap,useId:xp,unstable_isNewReconciler:!1},Hh={readContext:Me,useCallback:mp,useContext:Me,useEffect:_s,useImperativeHandle:hp,useInsertionEffect:pp,useLayoutEffect:up,useMemo:gp,useReducer:Ki,useRef:dp,useState:function(){return Ki(St)},useDebugValue:Vs,useDeferredValue:function(e){var n=Be();return ee===null?n.memoizedState=e:vp(n,ee.memoizedState,e)},useTransition:function(){var e=Ki(St)[0],n=Be().memoizedState;return[e,n]},useMutableSource:tp,useSyncExternalStore:ap,useId:xp,unstable_isNewReconciler:!1};function Ke(e,n){if(e&&e.defaultProps){n=q({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function Ro(e,n,r,a){n=e.memoizedState,r=r(a,n),r=r==null?n:q({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ai={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var a=me(),i=Tn(e),o=cn(a,i);o.payload=n,r!=null&&(o.callback=r),n=An(e,o,i),n!==null&&(We(n,e,i,a),fa(n,e,i))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var a=me(),i=Tn(e),o=cn(a,i);o.tag=1,o.payload=n,r!=null&&(o.callback=r),n=An(e,o,i),n!==null&&(We(n,e,i,a),fa(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=me(),a=Tn(e),i=cn(r,a);i.tag=2,n!=null&&(i.callback=n),n=An(e,i,a),n!==null&&(We(n,e,a,r),fa(n,e,a))}};function ql(e,n,r,a,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,s):n.prototype&&n.prototype.isPureReactComponent?!yt(r,a)||!yt(i,o):!0}function jp(e,n,r){var a=!1,i=Ln,o=n.contextType;return typeof o=="object"&&o!==null?o=Me(o):(i=we(n)?Jn:fe.current,a=n.contextTypes,o=(a=a!=null)?Nr(e,i):Ln),n=new n(r,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ai,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Wl(e,n,r,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,a),n.state!==e&&ai.enqueueReplaceState(n,n.state,null)}function Oo(e,n,r,a){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Ts(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Me(o):(o=we(n)?Jn:fe.current,i.context=Nr(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ro(e,n,o,r),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ai.enqueueReplaceState(i,i.state,null),Va(e,r,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,n){try{var r="",a=n;do r+=bf(a),a=a.return;while(a);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Hi(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function zo(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var $h=typeof WeakMap=="function"?WeakMap:Map;function kp(e,n,r){r=cn(-1,r),r.tag=3,r.payload={element:null};var a=n.value;return r.callback=function(){Ua||(Ua=!0,Uo=a),zo(e,n)},r}function Cp(e,n,r){r=cn(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;r.payload=function(){return a(i)},r.callback=function(){zo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){zo(e,n),typeof a!="function"&&(In===null?In=new Set([this]):In.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),r}function Yl(e,n,r){var a=e.pingCache;if(a===null){a=e.pingCache=new $h;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(r)||(i.add(r),e=om.bind(null,e,n,r),n.then(e,e))}function Gl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Jl(e,n,r,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=cn(-1,1),n.tag=2,An(r,n,1))),r.lanes|=1),e)}var qh=hn.ReactCurrentOwner,be=!1;function he(e,n,r,a){n.child=e===null?Xd(n,null,r,a):Sr(n,e.child,r,a)}function Ql(e,n,r,a,i){r=r.render;var o=n.ref;return jr(n,i),a=Ds(e,n,r,a,o,i),r=Ps(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,fn(e,n,i)):(K&&r&&ks(n),n.flags|=1,he(e,n,a,i),n.child)}function Xl(e,n,r,a,i){if(e===null){var o=r.type;return typeof o=="function"&&!$s(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=o,Np(e,n,o,a,i)):(e=ba(r.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:yt,r(s,a)&&e.ref===n.ref)return fn(e,n,i)}return n.flags|=1,e=Rn(o,a),e.ref=n.ref,e.return=n,n.child=e}function Np(e,n,r,a,i){if(e!==null){var o=e.memoizedProps;if(yt(o,a)&&e.ref===n.ref)if(be=!1,n.pendingProps=a=o,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return n.lanes=e.lanes,fn(e,n,i)}return Lo(e,n,r,a,i)}function Ep(e,n,r){var a=n.pendingProps,i=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(vr,Ne),Ne|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(vr,Ne),Ne|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:r,B(vr,Ne),Ne|=a}else o!==null?(a=o.baseLanes|r,n.memoizedState=null):a=r,B(vr,Ne),Ne|=a;return he(e,n,i,r),n.child}function Sp(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Lo(e,n,r,a,i){var o=we(r)?Jn:fe.current;return o=Nr(n,o),jr(n,i),r=Ds(e,n,r,a,o,i),a=Ps(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,fn(e,n,i)):(K&&a&&ks(n),n.flags|=1,he(e,n,r,i),n.child)}function ec(e,n,r,a,i){if(we(r)){var o=!0;za(n)}else o=!1;if(jr(n,i),n.stateNode===null)ga(e,n),jp(n,r,a),Oo(n,r,a,i),a=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var c=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Me(d):(d=we(r)?Jn:fe.current,d=Nr(n,d));var p=r.getDerivedStateFromProps,u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==a||c!==d)&&Wl(n,s,a,d),vn=!1;var m=n.memoizedState;s.state=m,Va(n,a,s,i),c=n.memoizedState,l!==a||m!==c||ye.current||vn?(typeof p=="function"&&(Ro(n,r,p,a),c=n.memoizedState),(l=vn||ql(n,r,l,a,m,c,d))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=c),s.props=a,s.state=c,s.context=d,a=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,np(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:Ke(n.type,l),s.props=d,u=n.pendingProps,m=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=Me(c):(c=we(r)?Jn:fe.current,c=Nr(n,c));var b=r.getDerivedStateFromProps;(p=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==u||m!==c)&&Wl(n,s,a,c),vn=!1,m=n.memoizedState,s.state=m,Va(n,a,s,i);var v=n.memoizedState;l!==u||m!==v||ye.current||vn?(typeof b=="function"&&(Ro(n,r,b,a),v=n.memoizedState),(d=vn||ql(n,r,d,a,m,v,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,v,c)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=v),s.props=a,s.state=v,s.context=c,a=d):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),a=!1)}return Do(e,n,r,a,o,i)}function Do(e,n,r,a,i,o){Sp(e,n);var s=(n.flags&128)!==0;if(!a&&!s)return i&&Ml(n,r,!1),fn(e,n,o);a=n.stateNode,qh.current=n;var l=s&&typeof r.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&s?(n.child=Sr(n,e.child,null,o),n.child=Sr(n,null,l,o)):he(e,n,l,o),n.memoizedState=a.state,i&&Ml(n,r,!0),n.child}function Ap(e){var n=e.stateNode;n.pendingContext?Vl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Vl(e,n.context,!1),Rs(e,n.containerInfo)}function nc(e,n,r,a,i){return Er(),Ns(i),n.flags|=256,he(e,n,r,a),n.child}var Po={dehydrated:null,treeContext:null,retryLane:0};function _o(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ip(e,n,r){var a=n.pendingProps,i=H.current,o=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(H,i&1),e===null)return Io(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=a.children,e=a.fallback,o?(a=n.mode,o=n.child,s={mode:"hidden",children:s},!(a&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=si(s,a,0,null),e=Yn(e,a,r,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=_o(r),n.memoizedState=Po,e):Ms(n,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Wh(e,n,s,a,l,i,r);if(o){o=a.fallback,s=n.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:a.children};return!(s&1)&&n.child!==i?(a=n.child,a.childLanes=0,a.pendingProps=c,n.deletions=null):(a=Rn(i,c),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Rn(l,o):(o=Yn(o,s,r,null),o.flags|=2),o.return=n,a.return=n,a.sibling=o,n.child=a,a=o,o=n.child,s=e.child.memoizedState,s=s===null?_o(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,n.memoizedState=Po,a}return o=e.child,e=o.sibling,a=Rn(o,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=r),a.return=n,a.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=a,n.memoizedState=null,a}function Ms(e,n){return n=si({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ta(e,n,r,a){return a!==null&&Ns(a),Sr(n,e.child,null,r),e=Ms(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wh(e,n,r,a,i,o,s){if(r)return n.flags&256?(n.flags&=-257,a=Hi(Error(N(422))),ta(e,n,s,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=a.fallback,i=n.mode,a=si({mode:"visible",children:a.children},i,0,null),o=Yn(o,i,s,null),o.flags|=2,a.return=n,o.return=n,a.sibling=o,n.child=a,n.mode&1&&Sr(n,e.child,null,s),n.child.memoizedState=_o(s),n.memoizedState=Po,o);if(!(n.mode&1))return ta(e,n,s,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,o=Error(N(419)),a=Hi(o,a,void 0),ta(e,n,s,a)}if(l=(s&e.childLanes)!==0,be||l){if(a=ae,a!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,un(e,i),We(a,e,i,-1))}return Hs(),a=Hi(Error(N(421))),ta(e,n,s,a)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=sm.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ee=Sn(i.nextSibling),Se=n,K=!0,$e=null,e!==null&&(De[Pe++]=sn,De[Pe++]=ln,De[Pe++]=Qn,sn=e.id,ln=e.overflow,Qn=n),n=Ms(n,a.children),n.flags|=4096,n)}function rc(e,n,r){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),To(e.return,n,r)}function $i(e,n,r,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=r,o.tailMode=i)}function Tp(e,n,r){var a=n.pendingProps,i=a.revealOrder,o=a.tail;if(he(e,n,a.children,r),a=H.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,r,n);else if(e.tag===19)rc(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(B(H,a),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(r=n.child,i=null;r!==null;)e=r.alternate,e!==null&&Ma(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=n.child,n.child=null):(i=r.sibling,r.sibling=null),$i(n,!1,i,r,o);break;case"backwards":for(r=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Ma(e)===null){n.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}$i(n,!0,r,null,o);break;case"together":$i(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ga(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function fn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),er|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(N(153));if(n.child!==null){for(e=n.child,r=Rn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Rn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Yh(e,n,r){switch(n.tag){case 3:Ap(n),Er();break;case 5:rp(n);break;case 1:we(n.type)&&za(n);break;case 4:Rs(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,i=n.memoizedProps.value;B(Pa,a._currentValue),a._currentValue=i;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(B(H,H.current&1),n.flags|=128,null):r&n.child.childLanes?Ip(e,n,r):(B(H,H.current&1),e=fn(e,n,r),e!==null?e.sibling:null);B(H,H.current&1);break;case 19:if(a=(r&n.childLanes)!==0,e.flags&128){if(a)return Tp(e,n,r);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(H,H.current),a)break;return null;case 22:case 23:return n.lanes=0,Ep(e,n,r)}return fn(e,n,r)}var Rp,Vo,Op,zp;Rp=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Vo=function(){};Op=function(e,n,r,a){var i=e.memoizedProps;if(i!==a){e=n.stateNode,$n(rn.current);var o=null;switch(r){case"input":i=io(e,i),a=io(e,a),o=[];break;case"select":i=q({},i,{value:void 0}),a=q({},a,{value:void 0}),o=[];break;case"textarea":i=lo(e,i),a=lo(e,a),o=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ra)}po(r,a);var s;r=null;for(d in i)if(!a.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ft.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in a){var c=a[d];if(l=i!=null?i[d]:void 0,a.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(o||(o=[]),o.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ft.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&F("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}r&&(o=o||[]).push("style",r);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};zp=function(e,n,r,a){r!==a&&(n.flags|=4)};function Wr(e,n){if(!K)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(n)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=r,n}function Gh(e,n,r){var a=n.pendingProps;switch(Cs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return we(n.type)&&Oa(),de(n),null;case 3:return a=n.stateNode,Ar(),Z(ye),Z(fe),zs(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(na(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,$e!==null&&($o($e),$e=null))),Vo(e,n),de(n),null;case 5:Os(n);var i=$n(Nt.current);if(r=n.type,e!==null&&n.stateNode!=null)Op(e,n,r,a,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(N(166));return de(n),null}if(e=$n(rn.current),na(n)){a=n.stateNode,r=n.type;var o=n.memoizedProps;switch(a[en]=n,a[kt]=o,e=(n.mode&1)!==0,r){case"dialog":F("cancel",a),F("close",a);break;case"iframe":case"object":case"embed":F("load",a);break;case"video":case"audio":for(i=0;i<tt.length;i++)F(tt[i],a);break;case"source":F("error",a);break;case"img":case"image":case"link":F("error",a),F("load",a);break;case"details":F("toggle",a);break;case"input":pl(a,o),F("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},F("invalid",a);break;case"textarea":fl(a,o),F("invalid",a)}po(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?a.textContent!==l&&(o.suppressHydrationWarning!==!0&&ea(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ea(a.textContent,l,e),i=["children",""+l]):ft.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&F("scroll",a)}switch(r){case"input":$t(a),ul(a,o,!0);break;case"textarea":$t(a),hl(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=Ra)}a=i,n.updateQueue=a,a!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sd(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(r,{is:a.is}):(e=s.createElement(r),r==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,r),e[en]=n,e[kt]=a,Rp(e,n,!1,!1),n.stateNode=e;e:{switch(s=uo(r,a),r){case"dialog":F("cancel",e),F("close",e),i=a;break;case"iframe":case"object":case"embed":F("load",e),i=a;break;case"video":case"audio":for(i=0;i<tt.length;i++)F(tt[i],e);i=a;break;case"source":F("error",e),i=a;break;case"img":case"image":case"link":F("error",e),F("load",e),i=a;break;case"details":F("toggle",e),i=a;break;case"input":pl(e,a),i=io(e,a),F("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=q({},a,{value:void 0}),F("invalid",e);break;case"textarea":fl(e,a),i=lo(e,a),F("invalid",e);break;default:i=a}po(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?dd(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ld(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&ht(e,c):typeof c=="number"&&ht(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ft.hasOwnProperty(o)?c!=null&&o==="onScroll"&&F("scroll",e):c!=null&&cs(e,o,c,s))}switch(r){case"input":$t(e),ul(e,a,!1);break;case"textarea":$t(e),hl(e);break;case"option":a.value!=null&&e.setAttribute("value",""+zn(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?xr(e,!!a.multiple,o,!1):a.defaultValue!=null&&xr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ra)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)zp(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(N(166));if(r=$n(Nt.current),$n(rn.current),na(n)){if(a=n.stateNode,r=n.memoizedProps,a[en]=n,(o=a.nodeValue!==r)&&(e=Se,e!==null))switch(e.tag){case 3:ea(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ea(a.nodeValue,r,(e.mode&1)!==0)}o&&(n.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[en]=n,n.stateNode=a}return de(n),null;case 13:if(Z(H),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ee!==null&&n.mode&1&&!(n.flags&128))Jd(),Er(),n.flags|=98560,o=!1;else if(o=na(n),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[en]=n}else Er(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),o=!1}else $e!==null&&($o($e),$e=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?ne===0&&(ne=3):Hs())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return Ar(),Vo(e,n),e===null&&wt(n.stateNode.containerInfo),de(n),null;case 10:return As(n.type._context),de(n),null;case 17:return we(n.type)&&Oa(),de(n),null;case 19:if(Z(H),o=n.memoizedState,o===null)return de(n),null;if(a=(n.flags&128)!==0,s=o.rendering,s===null)if(a)Wr(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Ma(e),s!==null){for(n.flags|=128,Wr(o,!1),a=s.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=r,r=n.child;r!==null;)o=r,e=a,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return B(H,H.current&1|2),n.child}e=e.sibling}o.tail!==null&&J()>Tr&&(n.flags|=128,a=!0,Wr(o,!1),n.lanes=4194304)}else{if(!a)if(e=Ma(s),e!==null){if(n.flags|=128,a=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),Wr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!K)return de(n),null}else 2*J()-o.renderingStartTime>Tr&&r!==1073741824&&(n.flags|=128,a=!0,Wr(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(r=o.last,r!==null?r.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=J(),n.sibling=null,r=H.current,B(H,a?r&1|2:r&1),n):(de(n),null);case 22:case 23:return Ks(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?Ne&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(N(156,n.tag))}function Jh(e,n){switch(Cs(n),n.tag){case 1:return we(n.type)&&Oa(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ar(),Z(ye),Z(fe),zs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Os(n),null;case 13:if(Z(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(N(340));Er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(H),null;case 4:return Ar(),null;case 10:return As(n.type._context),null;case 22:case 23:return Ks(),null;case 24:return null;default:return null}}var aa=!1,pe=!1,Qh=typeof WeakSet=="function"?WeakSet:Set,A=null;function gr(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){W(e,n,a)}else r.current=null}function Mo(e,n,r){try{r()}catch(a){W(e,n,a)}}var tc=!1;function Xh(e,n){if(jo=Aa,e=Vd(),js(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,d=0,p=0,u=e,m=null;n:for(;;){for(var b;u!==r||i!==0&&u.nodeType!==3||(l=s+i),u!==o||a!==0&&u.nodeType!==3||(c=s+a),u.nodeType===3&&(s+=u.nodeValue.length),(b=u.firstChild)!==null;)m=u,u=b;for(;;){if(u===e)break n;if(m===r&&++d===i&&(l=s),m===o&&++p===a&&(c=s),(b=u.nextSibling)!==null)break;u=m,m=u.parentNode}u=b}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ko={focusedElem:e,selectionRange:r},Aa=!1,A=n;A!==null;)if(n=A,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,A=e;else for(;A!==null;){n=A;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,y=v.memoizedState,f=n.stateNode,h=f.getSnapshotBeforeUpdate(n.elementType===n.type?x:Ke(n.type,x),y);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){W(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,A=e;break}A=n.return}return v=tc,tc=!1,v}function dt(e,n,r){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Mo(n,r,o)}i=i.next}while(i!==a)}}function ii(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==n)}}function Bo(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function Lp(e){var n=e.alternate;n!==null&&(e.alternate=null,Lp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[kt],delete n[Eo],delete n[Dh],delete n[Ph])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dp(e){return e.tag===5||e.tag===3||e.tag===4}function ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fo(e,n,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Ra));else if(a!==4&&(e=e.child,e!==null))for(Fo(e,n,r),e=e.sibling;e!==null;)Fo(e,n,r),e=e.sibling}function Zo(e,n,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Zo(e,n,r),e=e.sibling;e!==null;)Zo(e,n,r),e=e.sibling}var oe=null,He=!1;function mn(e,n,r){for(r=r.child;r!==null;)Pp(e,n,r),r=r.sibling}function Pp(e,n,r){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Ja,r)}catch{}switch(r.tag){case 5:pe||gr(r,n);case 6:var a=oe,i=He;oe=null,mn(e,n,r),oe=a,He=i,oe!==null&&(He?(e=oe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):oe.removeChild(r.stateNode));break;case 18:oe!==null&&(He?(e=oe,r=r.stateNode,e.nodeType===8?Mi(e.parentNode,r):e.nodeType===1&&Mi(e,r),xt(e)):Mi(oe,r.stateNode));break;case 4:a=oe,i=He,oe=r.stateNode.containerInfo,He=!0,mn(e,n,r),oe=a,He=i;break;case 0:case 11:case 14:case 15:if(!pe&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Mo(r,n,s),i=i.next}while(i!==a)}mn(e,n,r);break;case 1:if(!pe&&(gr(r,n),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(l){W(r,n,l)}mn(e,n,r);break;case 21:mn(e,n,r);break;case 22:r.mode&1?(pe=(a=pe)||r.memoizedState!==null,mn(e,n,r),pe=a):mn(e,n,r);break;default:mn(e,n,r)}}function ic(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Qh),n.forEach(function(a){var i=lm.bind(null,e,a);r.has(a)||(r.add(a),a.then(i,i))})}}function Ue(e,n){var r=n.deletions;if(r!==null)for(var a=0;a<r.length;a++){var i=r[a];try{var o=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,He=!1;break e;case 3:oe=l.stateNode.containerInfo,He=!0;break e;case 4:oe=l.stateNode.containerInfo,He=!0;break e}l=l.return}if(oe===null)throw Error(N(160));Pp(o,s,i),oe=null,He=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){W(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)_p(n,e),n=n.sibling}function _p(e,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(n,e),Je(e),a&4){try{dt(3,e,e.return),ii(3,e)}catch(x){W(e,e.return,x)}try{dt(5,e,e.return)}catch(x){W(e,e.return,x)}}break;case 1:Ue(n,e),Je(e),a&512&&r!==null&&gr(r,r.return);break;case 5:if(Ue(n,e),Je(e),a&512&&r!==null&&gr(r,r.return),e.flags&32){var i=e.stateNode;try{ht(i,"")}catch(x){W(e,e.return,x)}}if(a&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&id(i,o),uo(l,s);var d=uo(l,o);for(s=0;s<c.length;s+=2){var p=c[s],u=c[s+1];p==="style"?dd(i,u):p==="dangerouslySetInnerHTML"?ld(i,u):p==="children"?ht(i,u):cs(i,p,u,d)}switch(l){case"input":oo(i,o);break;case"textarea":od(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?xr(i,!!o.multiple,b,!1):m!==!!o.multiple&&(o.defaultValue!=null?xr(i,!!o.multiple,o.defaultValue,!0):xr(i,!!o.multiple,o.multiple?[]:"",!1))}i[kt]=o}catch(x){W(e,e.return,x)}}break;case 6:if(Ue(n,e),Je(e),a&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){W(e,e.return,x)}}break;case 3:if(Ue(n,e),Je(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{xt(n.containerInfo)}catch(x){W(e,e.return,x)}break;case 4:Ue(n,e),Je(e);break;case 13:Ue(n,e),Je(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zs=J())),a&4&&ic(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(pe=(d=pe)||p,Ue(n,e),pe=d):Ue(n,e),Je(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(A=e,p=e.child;p!==null;){for(u=A=p;A!==null;){switch(m=A,b=m.child,m.tag){case 0:case 11:case 14:case 15:dt(4,m,m.return);break;case 1:gr(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){a=m,r=m.return;try{n=a,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(x){W(a,r,x)}}break;case 5:gr(m,m.return);break;case 22:if(m.memoizedState!==null){sc(u);continue}}b!==null?(b.return=m,A=b):sc(u)}p=p.sibling}e:for(p=null,u=e;;){if(u.tag===5){if(p===null){p=u;try{i=u.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=u.stateNode,c=u.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=cd("display",s))}catch(x){W(e,e.return,x)}}}else if(u.tag===6){if(p===null)try{u.stateNode.nodeValue=d?"":u.memoizedProps}catch(x){W(e,e.return,x)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;p===u&&(p=null),u=u.return}p===u&&(p=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Ue(n,e),Je(e),a&4&&ic(e);break;case 21:break;default:Ue(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(Dp(r)){var a=r;break e}r=r.return}throw Error(N(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(ht(i,""),a.flags&=-33);var o=ac(e);Zo(e,o,i);break;case 3:case 4:var s=a.stateNode.containerInfo,l=ac(e);Fo(e,l,s);break;default:throw Error(N(161))}}catch(c){W(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function em(e,n,r){A=e,Vp(e)}function Vp(e,n,r){for(var a=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&a){var s=i.memoizedState!==null||aa;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||pe;l=aa;var d=pe;if(aa=s,(pe=c)&&!d)for(A=i;A!==null;)s=A,c=s.child,s.tag===22&&s.memoizedState!==null?lc(i):c!==null?(c.return=s,A=c):lc(i);for(;o!==null;)A=o,Vp(o),o=o.sibling;A=i,aa=l,pe=d}oc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):oc(e)}}function oc(e){for(;A!==null;){var n=A;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||ii(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!pe)if(r===null)a.componentDidMount();else{var i=n.elementType===n.type?r.memoizedProps:Ke(n.type,r.memoizedProps);a.componentDidUpdate(i,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Kl(n,o,a);break;case 3:var s=n.updateQueue;if(s!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}Kl(n,s,r)}break;case 5:var l=n.stateNode;if(r===null&&n.flags&4){r=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var u=p.dehydrated;u!==null&&xt(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}pe||n.flags&512&&Bo(n)}catch(m){W(n,n.return,m)}}if(n===e){A=null;break}if(r=n.sibling,r!==null){r.return=n.return,A=r;break}A=n.return}}function sc(e){for(;A!==null;){var n=A;if(n===e){A=null;break}var r=n.sibling;if(r!==null){r.return=n.return,A=r;break}A=n.return}}function lc(e){for(;A!==null;){var n=A;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{ii(4,n)}catch(c){W(n,r,c)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var i=n.return;try{a.componentDidMount()}catch(c){W(n,i,c)}}var o=n.return;try{Bo(n)}catch(c){W(n,o,c)}break;case 5:var s=n.return;try{Bo(n)}catch(c){W(n,s,c)}}}catch(c){W(n,n.return,c)}if(n===e){A=null;break}var l=n.sibling;if(l!==null){l.return=n.return,A=l;break}A=n.return}}var nm=Math.ceil,Za=hn.ReactCurrentDispatcher,Bs=hn.ReactCurrentOwner,Ve=hn.ReactCurrentBatchConfig,V=0,ae=null,X=null,se=0,Ne=0,vr=Pn(0),ne=0,It=null,er=0,oi=0,Fs=0,pt=null,xe=null,Zs=0,Tr=1/0,an=null,Ua=!1,Uo=null,In=null,ia=!1,wn=null,Ka=0,ut=0,Ko=null,va=-1,xa=0;function me(){return V&6?J():va!==-1?va:va=J()}function Tn(e){return e.mode&1?V&2&&se!==0?se&-se:Vh.transition!==null?(xa===0&&(xa=jd()),xa):(e=M,e!==0||(e=window.event,e=e===void 0?16:Id(e.type)),e):1}function We(e,n,r,a){if(50<ut)throw ut=0,Ko=null,Error(N(185));Lt(e,r,a),(!(V&2)||e!==ae)&&(e===ae&&(!(V&2)&&(oi|=r),ne===4&&bn(e,se)),je(e,a),r===1&&V===0&&!(n.mode&1)&&(Tr=J()+500,ri&&_n()))}function je(e,n){var r=e.callbackNode;Vf(e,n);var a=Sa(e,e===ae?se:0);if(a===0)r!==null&&vl(r),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(r!=null&&vl(r),n===1)e.tag===0?_h(cc.bind(null,e)):Wd(cc.bind(null,e)),zh(function(){!(V&6)&&_n()}),r=null;else{switch(kd(a)){case 1:r=hs;break;case 4:r=yd;break;case 16:r=Ea;break;case 536870912:r=wd;break;default:r=Ea}r=$p(r,Mp.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function Mp(e,n){if(va=-1,xa=0,V&6)throw Error(N(327));var r=e.callbackNode;if(kr()&&e.callbackNode!==r)return null;var a=Sa(e,e===ae?se:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=Ha(e,a);else{n=a;var i=V;V|=2;var o=Fp();(ae!==e||se!==n)&&(an=null,Tr=J()+500,Wn(e,n));do try{am();break}catch(l){Bp(e,l)}while(!0);Ss(),Za.current=o,V=i,X!==null?n=0:(ae=null,se=0,n=ne)}if(n!==0){if(n===2&&(i=vo(e),i!==0&&(a=i,n=Ho(e,i))),n===1)throw r=It,Wn(e,0),bn(e,a),je(e,J()),r;if(n===6)bn(e,a);else{if(i=e.current.alternate,!(a&30)&&!rm(i)&&(n=Ha(e,a),n===2&&(o=vo(e),o!==0&&(a=o,n=Ho(e,o))),n===1))throw r=It,Wn(e,0),bn(e,a),je(e,J()),r;switch(e.finishedWork=i,e.finishedLanes=a,n){case 0:case 1:throw Error(N(345));case 2:Un(e,xe,an);break;case 3:if(bn(e,a),(a&130023424)===a&&(n=Zs+500-J(),10<n)){if(Sa(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=No(Un.bind(null,e,xe,an),n);break}Un(e,xe,an);break;case 4:if(bn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,i=-1;0<a;){var s=31-qe(a);o=1<<s,s=n[s],s>i&&(i=s),a&=~o}if(a=i,a=J()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*nm(a/1960))-a,10<a){e.timeoutHandle=No(Un.bind(null,e,xe,an),a);break}Un(e,xe,an);break;case 5:Un(e,xe,an);break;default:throw Error(N(329))}}}return je(e,J()),e.callbackNode===r?Mp.bind(null,e):null}function Ho(e,n){var r=pt;return e.current.memoizedState.isDehydrated&&(Wn(e,n).flags|=256),e=Ha(e,n),e!==2&&(n=xe,xe=r,n!==null&&$o(n)),e}function $o(e){xe===null?xe=e:xe.push.apply(xe,e)}function rm(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var i=r[a],o=i.getSnapshot;i=i.value;try{if(!Ye(o(),i))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function bn(e,n){for(n&=~Fs,n&=~oi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-qe(n),a=1<<r;e[r]=-1,n&=~a}}function cc(e){if(V&6)throw Error(N(327));kr();var n=Sa(e,0);if(!(n&1))return je(e,J()),null;var r=Ha(e,n);if(e.tag!==0&&r===2){var a=vo(e);a!==0&&(n=a,r=Ho(e,a))}if(r===1)throw r=It,Wn(e,0),bn(e,n),je(e,J()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Un(e,xe,an),je(e,J()),null}function Us(e,n){var r=V;V|=1;try{return e(n)}finally{V=r,V===0&&(Tr=J()+500,ri&&_n())}}function nr(e){wn!==null&&wn.tag===0&&!(V&6)&&kr();var n=V;V|=1;var r=Ve.transition,a=M;try{if(Ve.transition=null,M=1,e)return e()}finally{M=a,Ve.transition=r,V=n,!(V&6)&&_n()}}function Ks(){Ne=vr.current,Z(vr)}function Wn(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Oh(r)),X!==null)for(r=X.return;r!==null;){var a=r;switch(Cs(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Oa();break;case 3:Ar(),Z(ye),Z(fe),zs();break;case 5:Os(a);break;case 4:Ar();break;case 13:Z(H);break;case 19:Z(H);break;case 10:As(a.type._context);break;case 22:case 23:Ks()}r=r.return}if(ae=e,X=e=Rn(e.current,null),se=Ne=n,ne=0,It=null,Fs=oi=er=0,xe=pt=null,Hn!==null){for(n=0;n<Hn.length;n++)if(r=Hn[n],a=r.interleaved,a!==null){r.interleaved=null;var i=a.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,a.next=s}r.pending=a}Hn=null}return e}function Bp(e,n){do{var r=X;try{if(Ss(),ha.current=Fa,Ba){for(var a=$.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Ba=!1}if(Xn=0,te=ee=$=null,ct=!1,Et=0,Bs.current=null,r===null||r.return===null){ne=1,It=n,X=null;break}e:{var o=e,s=r.return,l=r,c=n;if(n=se,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=l,u=p.tag;if(!(p.mode&1)&&(u===0||u===11||u===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=Gl(s);if(b!==null){b.flags&=-257,Jl(b,s,l,o,n),b.mode&1&&Yl(o,d,n),n=b,c=d;var v=n.updateQueue;if(v===null){var x=new Set;x.add(c),n.updateQueue=x}else v.add(c);break e}else{if(!(n&1)){Yl(o,d,n),Hs();break e}c=Error(N(426))}}else if(K&&l.mode&1){var y=Gl(s);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Jl(y,s,l,o,n),Ns(Ir(c,l));break e}}o=c=Ir(c,l),ne!==4&&(ne=2),pt===null?pt=[o]:pt.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=kp(o,c,n);Ul(o,f);break e;case 1:l=c;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(In===null||!In.has(g)))){o.flags|=65536,n&=-n,o.lanes|=n;var k=Cp(o,l,n);Ul(o,k);break e}}o=o.return}while(o!==null)}Up(r)}catch(C){n=C,X===r&&r!==null&&(X=r=r.return);continue}break}while(!0)}function Fp(){var e=Za.current;return Za.current=Fa,e===null?Fa:e}function Hs(){(ne===0||ne===3||ne===2)&&(ne=4),ae===null||!(er&268435455)&&!(oi&268435455)||bn(ae,se)}function Ha(e,n){var r=V;V|=2;var a=Fp();(ae!==e||se!==n)&&(an=null,Wn(e,n));do try{tm();break}catch(i){Bp(e,i)}while(!0);if(Ss(),V=r,Za.current=a,X!==null)throw Error(N(261));return ae=null,se=0,ne}function tm(){for(;X!==null;)Zp(X)}function am(){for(;X!==null&&!If();)Zp(X)}function Zp(e){var n=Hp(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,n===null?Up(e):X=n,Bs.current=null}function Up(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=Jh(r,n),r!==null){r.flags&=32767,X=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,X=null;return}}else if(r=Gh(r,n,Ne),r!==null){X=r;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);ne===0&&(ne=5)}function Un(e,n,r){var a=M,i=Ve.transition;try{Ve.transition=null,M=1,im(e,n,r,a)}finally{Ve.transition=i,M=a}return null}function im(e,n,r,a){do kr();while(wn!==null);if(V&6)throw Error(N(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Mf(e,o),e===ae&&(X=ae=null,se=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ia||(ia=!0,$p(Ea,function(){return kr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ve.transition,Ve.transition=null;var s=M;M=1;var l=V;V|=4,Bs.current=null,Xh(e,r),_p(r,e),Nh(ko),Aa=!!jo,ko=jo=null,e.current=r,em(r),Tf(),V=l,M=s,Ve.transition=o}else e.current=r;if(ia&&(ia=!1,wn=e,Ka=i),o=e.pendingLanes,o===0&&(In=null),zf(r.stateNode),je(e,J()),n!==null)for(a=e.onRecoverableError,r=0;r<n.length;r++)i=n[r],a(i.value,{componentStack:i.stack,digest:i.digest});if(Ua)throw Ua=!1,e=Uo,Uo=null,e;return Ka&1&&e.tag!==0&&kr(),o=e.pendingLanes,o&1?e===Ko?ut++:(ut=0,Ko=e):ut=0,_n(),null}function kr(){if(wn!==null){var e=kd(Ka),n=Ve.transition,r=M;try{if(Ve.transition=null,M=16>e?16:e,wn===null)var a=!1;else{if(e=wn,wn=null,Ka=0,V&6)throw Error(N(331));var i=V;for(V|=4,A=e.current;A!==null;){var o=A,s=o.child;if(A.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(A=d;A!==null;){var p=A;switch(p.tag){case 0:case 11:case 15:dt(8,p,o)}var u=p.child;if(u!==null)u.return=p,A=u;else for(;A!==null;){p=A;var m=p.sibling,b=p.return;if(Lp(p),p===d){A=null;break}if(m!==null){m.return=b,A=m;break}A=b}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var y=x.sibling;x.sibling=null,x=y}while(x!==null)}}A=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,A=s;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:dt(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,A=f;break e}A=o.return}}var h=e.current;for(A=h;A!==null;){s=A;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,A=g;else e:for(s=h;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ii(9,l)}}catch(C){W(l,l.return,C)}if(l===s){A=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,A=k;break e}A=l.return}}if(V=i,_n(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Ja,e)}catch{}a=!0}return a}finally{M=r,Ve.transition=n}}return!1}function dc(e,n,r){n=Ir(r,n),n=kp(e,n,1),e=An(e,n,1),n=me(),e!==null&&(Lt(e,1,n),je(e,n))}function W(e,n,r){if(e.tag===3)dc(e,e,r);else for(;n!==null;){if(n.tag===3){dc(n,e,r);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(In===null||!In.has(a))){e=Ir(r,e),e=Cp(n,e,1),n=An(n,e,1),e=me(),n!==null&&(Lt(n,1,e),je(n,e));break}}n=n.return}}function om(e,n,r){var a=e.pingCache;a!==null&&a.delete(n),n=me(),e.pingedLanes|=e.suspendedLanes&r,ae===e&&(se&r)===r&&(ne===4||ne===3&&(se&130023424)===se&&500>J()-Zs?Wn(e,0):Fs|=r),je(e,n)}function Kp(e,n){n===0&&(e.mode&1?(n=Yt,Yt<<=1,!(Yt&130023424)&&(Yt=4194304)):n=1);var r=me();e=un(e,n),e!==null&&(Lt(e,n,r),je(e,r))}function sm(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Kp(e,r)}function lm(e,n){var r=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(N(314))}a!==null&&a.delete(n),Kp(e,r)}var Hp;Hp=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||ye.current)be=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return be=!1,Yh(e,n,r);be=!!(e.flags&131072)}else be=!1,K&&n.flags&1048576&&Yd(n,Da,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;ga(e,n),e=n.pendingProps;var i=Nr(n,fe.current);jr(n,r),i=Ds(null,n,a,e,i,r);var o=Ps();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,we(a)?(o=!0,za(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ts(n),i.updater=ai,n.stateNode=i,i._reactInternals=n,Oo(n,a,e,r),n=Do(null,n,a,!0,o,r)):(n.tag=0,K&&o&&ks(n),he(null,n,i,r),n=n.child),n;case 16:a=n.elementType;e:{switch(ga(e,n),e=n.pendingProps,i=a._init,a=i(a._payload),n.type=a,i=n.tag=dm(a),e=Ke(a,e),i){case 0:n=Lo(null,n,a,e,r);break e;case 1:n=ec(null,n,a,e,r);break e;case 11:n=Ql(null,n,a,e,r);break e;case 14:n=Xl(null,n,a,Ke(a.type,e),r);break e}throw Error(N(306,a,""))}return n;case 0:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Ke(a,i),Lo(e,n,a,i,r);case 1:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Ke(a,i),ec(e,n,a,i,r);case 3:e:{if(Ap(n),e===null)throw Error(N(387));a=n.pendingProps,o=n.memoizedState,i=o.element,np(e,n),Va(n,a,null,r);var s=n.memoizedState;if(a=s.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Ir(Error(N(423)),n),n=nc(e,n,a,r,i);break e}else if(a!==i){i=Ir(Error(N(424)),n),n=nc(e,n,a,r,i);break e}else for(Ee=Sn(n.stateNode.containerInfo.firstChild),Se=n,K=!0,$e=null,r=Xd(n,null,a,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Er(),a===i){n=fn(e,n,r);break e}he(e,n,a,r)}n=n.child}return n;case 5:return rp(n),e===null&&Io(n),a=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Co(a,i)?s=null:o!==null&&Co(a,o)&&(n.flags|=32),Sp(e,n),he(e,n,s,r),n.child;case 6:return e===null&&Io(n),null;case 13:return Ip(e,n,r);case 4:return Rs(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Sr(n,null,a,r):he(e,n,a,r),n.child;case 11:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Ke(a,i),Ql(e,n,a,i,r);case 7:return he(e,n,n.pendingProps,r),n.child;case 8:return he(e,n,n.pendingProps.children,r),n.child;case 12:return he(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(a=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,B(Pa,a._currentValue),a._currentValue=s,o!==null)if(Ye(o.value,s)){if(o.children===i.children&&!ye.current){n=fn(e,n,r);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===a){if(o.tag===1){c=cn(-1,r&-r),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),To(o.return,r,n),l.lanes|=r;break}c=c.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),To(s,r,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}he(e,n,i.children,r),n=n.child}return n;case 9:return i=n.type,a=n.pendingProps.children,jr(n,r),i=Me(i),a=a(i),n.flags|=1,he(e,n,a,r),n.child;case 14:return a=n.type,i=Ke(a,n.pendingProps),i=Ke(a.type,i),Xl(e,n,a,i,r);case 15:return Np(e,n,n.type,n.pendingProps,r);case 17:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Ke(a,i),ga(e,n),n.tag=1,we(a)?(e=!0,za(n)):e=!1,jr(n,r),jp(n,a,i),Oo(n,a,i,r),Do(null,n,a,!0,e,r);case 19:return Tp(e,n,r);case 22:return Ep(e,n,r)}throw Error(N(156,n.tag))};function $p(e,n){return bd(e,n)}function cm(e,n,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,n,r,a){return new cm(e,n,r,a)}function $s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dm(e){if(typeof e=="function")return $s(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ps)return 11;if(e===us)return 14}return 2}function Rn(e,n){var r=e.alternate;return r===null?(r=_e(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ba(e,n,r,a,i,o){var s=2;if(a=e,typeof e=="function")$s(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case sr:return Yn(r.children,i,o,n);case ds:s=8,i|=8;break;case no:return e=_e(12,r,n,i|2),e.elementType=no,e.lanes=o,e;case ro:return e=_e(13,r,n,i),e.elementType=ro,e.lanes=o,e;case to:return e=_e(19,r,n,i),e.elementType=to,e.lanes=o,e;case rd:return si(r,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ed:s=10;break e;case nd:s=9;break e;case ps:s=11;break e;case us:s=14;break e;case gn:s=16,a=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return n=_e(s,r,n,i),n.elementType=e,n.type=a,n.lanes=o,n}function Yn(e,n,r,a){return e=_e(7,e,a,n),e.lanes=r,e}function si(e,n,r,a){return e=_e(22,e,a,n),e.elementType=rd,e.lanes=r,e.stateNode={isHidden:!1},e}function qi(e,n,r){return e=_e(6,e,null,n),e.lanes=r,e}function Wi(e,n,r){return n=_e(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function pm(e,n,r,a,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ai(0),this.expirationTimes=Ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qs(e,n,r,a,i,o,s,l,c){return e=new pm(e,n,r,l,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=_e(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ts(o),e}function um(e,n,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:a==null?null:""+a,children:e,containerInfo:n,implementation:r}}function qp(e){if(!e)return Ln;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(N(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(we(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(we(r))return qd(e,r,n)}return n}function Wp(e,n,r,a,i,o,s,l,c){return e=qs(r,a,!0,e,i,o,s,l,c),e.context=qp(null),r=e.current,a=me(),i=Tn(r),o=cn(a,i),o.callback=n??null,An(r,o,i),e.current.lanes=i,Lt(e,i,a),je(e,a),e}function li(e,n,r,a){var i=n.current,o=me(),s=Tn(i);return r=qp(r),n.context===null?n.context=r:n.pendingContext=r,n=cn(o,s),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=An(i,n,s),e!==null&&(We(e,i,s,o),fa(e,i,s)),s}function $a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Ws(e,n){pc(e,n),(e=e.alternate)&&pc(e,n)}function fm(){return null}var Yp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ys(e){this._internalRoot=e}ci.prototype.render=Ys.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(N(409));li(e,n,null,null)};ci.prototype.unmount=Ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;nr(function(){li(null,e,null,null)}),n[pn]=null}};function ci(e){this._internalRoot=e}ci.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ed();e={blockedOn:null,target:e,priority:n};for(var r=0;r<xn.length&&n!==0&&n<xn[r].priority;r++);xn.splice(r,0,e),r===0&&Ad(e)}};function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function hm(e,n,r,a,i){if(i){if(typeof a=="function"){var o=a;a=function(){var d=$a(s);o.call(d)}}var s=Wp(n,a,e,0,null,!1,!1,"",uc);return e._reactRootContainer=s,e[pn]=s.current,wt(e.nodeType===8?e.parentNode:e),nr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var d=$a(c);l.call(d)}}var c=qs(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=c,e[pn]=c.current,wt(e.nodeType===8?e.parentNode:e),nr(function(){li(n,c,r,a)}),c}function pi(e,n,r,a,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=$a(s);l.call(c)}}li(n,s,e,i)}else s=hm(r,n,e,i,a);return $a(s)}Cd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=rt(n.pendingLanes);r!==0&&(ms(n,r|1),je(n,J()),!(V&6)&&(Tr=J()+500,_n()))}break;case 13:nr(function(){var a=un(e,1);if(a!==null){var i=me();We(a,e,1,i)}}),Ws(e,1)}};gs=function(e){if(e.tag===13){var n=un(e,134217728);if(n!==null){var r=me();We(n,e,134217728,r)}Ws(e,134217728)}};Nd=function(e){if(e.tag===13){var n=Tn(e),r=un(e,n);if(r!==null){var a=me();We(r,e,n,a)}Ws(e,n)}};Ed=function(){return M};Sd=function(e,n){var r=M;try{return M=e,n()}finally{M=r}};ho=function(e,n,r){switch(n){case"input":if(oo(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var a=r[n];if(a!==e&&a.form===e.form){var i=ni(a);if(!i)throw Error(N(90));ad(a),oo(a,i)}}}break;case"textarea":od(e,r);break;case"select":n=r.value,n!=null&&xr(e,!!r.multiple,n,!1)}};fd=Us;hd=nr;var mm={usingClientEntryPoint:!1,Events:[Pt,pr,ni,pd,ud,Us]},Yr={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gm={bundleType:Yr.bundleType,version:Yr.version,rendererPackageName:Yr.rendererPackageName,rendererConfig:Yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vd(e),e===null?null:e.stateNode},findFiberByHostInstance:Yr.findFiberByHostInstance||fm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{Ja=oa.inject(gm),nn=oa}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;Ie.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gs(n))throw Error(N(200));return um(e,n,null,r)};Ie.createRoot=function(e,n){if(!Gs(e))throw Error(N(299));var r=!1,a="",i=Yp;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=qs(e,1,!1,null,null,r,!1,a,i),e[pn]=n.current,wt(e.nodeType===8?e.parentNode:e),new Ys(n)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=vd(n),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return nr(e)};Ie.hydrate=function(e,n,r){if(!di(n))throw Error(N(200));return pi(null,e,n,!0,r)};Ie.hydrateRoot=function(e,n,r){if(!Gs(e))throw Error(N(405));var a=r!=null&&r.hydratedSources||null,i=!1,o="",s=Yp;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),n=Wp(n,null,e,1,r??null,i,!1,o,s),e[pn]=n.current,wt(e),a)for(e=0;e<a.length;e++)r=a[e],i=r._getVersion,i=i(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,i]:n.mutableSourceEagerHydrationData.push(r,i);return new ci(n)};Ie.render=function(e,n,r){if(!di(n))throw Error(N(200));return pi(null,e,n,!1,r)};Ie.unmountComponentAtNode=function(e){if(!di(e))throw Error(N(40));return e._reactRootContainer?(nr(function(){pi(null,null,e,!1,function(){e._reactRootContainer=null,e[pn]=null})}),!0):!1};Ie.unstable_batchedUpdates=Us;Ie.unstable_renderSubtreeIntoContainer=function(e,n,r,a){if(!di(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return pi(e,n,r,!1,a)};Ie.version="18.3.1-next-f1338f8080-20240426";function Gp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gp)}catch(e){console.error(e)}}Gp(),Gc.exports=Ie;var vm=Gc.exports,Jp,fc=vm;Jp=fc.createRoot,fc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Tt.apply(this,arguments)}var jn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jn||(jn={}));const hc="popstate";function xm(e){e===void 0&&(e={});function n(a,i){let{pathname:o,search:s,hash:l}=a.location;return qo("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(a,i){return typeof i=="string"?i:qa(i)}return ym(n,r,null,e)}function Q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Qp(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function bm(){return Math.random().toString(36).substr(2,8)}function mc(e,n){return{usr:e.state,key:e.key,idx:n}}function qo(e,n,r,a){return r===void 0&&(r=null),Tt({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Dr(n):n,{state:r,key:n&&n.key||a||bm()})}function qa(e){let{pathname:n="/",search:r="",hash:a=""}=e;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function Dr(e){let n={};if(e){let r=e.indexOf("#");r>=0&&(n.hash=e.substr(r),e=e.substr(0,r));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function ym(e,n,r,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,s=i.history,l=jn.Pop,c=null,d=p();d==null&&(d=0,s.replaceState(Tt({},s.state,{idx:d}),""));function p(){return(s.state||{idx:null}).idx}function u(){l=jn.Pop;let y=p(),f=y==null?null:y-d;d=y,c&&c({action:l,location:x.location,delta:f})}function m(y,f){l=jn.Push;let h=qo(x.location,y,f);d=p()+1;let g=mc(h,d),k=x.createHref(h);try{s.pushState(g,"",k)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(k)}o&&c&&c({action:l,location:x.location,delta:1})}function b(y,f){l=jn.Replace;let h=qo(x.location,y,f);d=p();let g=mc(h,d),k=x.createHref(h);s.replaceState(g,"",k),o&&c&&c({action:l,location:x.location,delta:0})}function v(y){let f=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof y=="string"?y:qa(y);return h=h.replace(/ $/,"%20"),Q(f,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,f)}let x={get action(){return l},get location(){return e(i,s)},listen(y){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(hc,u),c=y,()=>{i.removeEventListener(hc,u),c=null}},createHref(y){return n(i,y)},createURL:v,encodeLocation(y){let f=v(y);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:b,go(y){return s.go(y)}};return x}var gc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gc||(gc={}));function wm(e,n,r){return r===void 0&&(r="/"),jm(e,n,r)}function jm(e,n,r,a){let i=typeof n=="string"?Dr(n):n,o=Js(i.pathname||"/",r);if(o==null)return null;let s=Xp(e);km(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let d=Dm(o);l=Om(s[c],d)}return l}function Xp(e,n,r,a){n===void 0&&(n=[]),r===void 0&&(r=[]),a===void 0&&(a="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(Q(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=On([a,c.relativePath]),p=r.concat(c);o.children&&o.children.length>0&&(Q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Xp(o.children,n,p,d)),!(o.path==null&&!o.index)&&n.push({path:d,score:Tm(d,o.index),routesMeta:p})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of eu(o.path))i(o,s,c)}),n}function eu(e){let n=e.split("/");if(n.length===0)return[];let[r,...a]=n,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(a.length===0)return i?[o,""]:[o];let s=eu(a.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function km(e){e.sort((n,r)=>n.score!==r.score?r.score-n.score:Rm(n.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}const Cm=/^:[\w-]+$/,Nm=3,Em=2,Sm=1,Am=10,Im=-2,vc=e=>e==="*";function Tm(e,n){let r=e.split("/"),a=r.length;return r.some(vc)&&(a+=Im),n&&(a+=Em),r.filter(i=>!vc(i)).reduce((i,o)=>i+(Cm.test(o)?Nm:o===""?Sm:Am),a)}function Rm(e,n){return e.length===n.length&&e.slice(0,-1).every((a,i)=>a===n[i])?e[e.length-1]-n[n.length-1]:0}function Om(e,n,r){let{routesMeta:a}=e,i={},o="/",s=[];for(let l=0;l<a.length;++l){let c=a[l],d=l===a.length-1,p=o==="/"?n:n.slice(o.length)||"/",u=zm({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),m=c.route;if(!u)return null;Object.assign(i,u.params),s.push({params:i,pathname:On([o,u.pathname]),pathnameBase:Mm(On([o,u.pathnameBase])),route:m}),u.pathnameBase!=="/"&&(o=On([o,u.pathnameBase]))}return s}function zm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=Lm(e.path,e.caseSensitive,e.end),i=n.match(r);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((d,p,u)=>{let{paramName:m,isOptional:b}=p;if(m==="*"){let x=l[u]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=l[u];return b&&!v?d[m]=void 0:d[m]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:e}}function Lm(e,n,r){n===void 0&&(n=!1),r===void 0&&(r=!0),Qp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(a.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),a]}function Dm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Qp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Js(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}function Pm(e,n){n===void 0&&(n="/");let{pathname:r,search:a="",hash:i=""}=typeof e=="string"?Dr(e):e;return{pathname:r?r.startsWith("/")?r:_m(r,n):n,search:Bm(a),hash:Fm(i)}}function _m(e,n){let r=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Yi(e,n,r,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vm(e){return e.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function Qs(e,n){let r=Vm(e);return n?r.map((a,i)=>i===r.length-1?a.pathname:a.pathnameBase):r.map(a=>a.pathnameBase)}function Xs(e,n,r,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=Dr(e):(i=Tt({},e),Q(!i.pathname||!i.pathname.includes("?"),Yi("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),Yi("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),Yi("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=r;else{let u=n.length-1;if(!a&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),u-=1;i.pathname=m.join("/")}l=u>=0?n[u]:"/"}let c=Pm(i,l),d=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const On=e=>e.join("/").replace(/\/\/+/g,"/"),Mm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Bm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Fm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Zm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const nu=["post","put","patch","delete"];new Set(nu);const Um=["get",...nu];new Set(Um);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rt(){return Rt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Rt.apply(this,arguments)}const el=j.createContext(null),Km=j.createContext(null),Vn=j.createContext(null),ui=j.createContext(null),Mn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),ru=j.createContext(null);function Hm(e,n){let{relative:r}=n===void 0?{}:n;Pr()||Q(!1);let{basename:a,navigator:i}=j.useContext(Vn),{hash:o,pathname:s,search:l}=au(e,{relative:r}),c=s;return a!=="/"&&(c=s==="/"?a:On([a,s])),i.createHref({pathname:c,search:l,hash:o})}function Pr(){return j.useContext(ui)!=null}function tn(){return Pr()||Q(!1),j.useContext(ui).location}function tu(e){j.useContext(Vn).static||j.useLayoutEffect(e)}function _r(){let{isDataRoute:e}=j.useContext(Mn);return e?a0():$m()}function $m(){Pr()||Q(!1);let e=j.useContext(el),{basename:n,future:r,navigator:a}=j.useContext(Vn),{matches:i}=j.useContext(Mn),{pathname:o}=tn(),s=JSON.stringify(Qs(i,r.v7_relativeSplatPath)),l=j.useRef(!1);return tu(()=>{l.current=!0}),j.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){a.go(d);return}let u=Xs(d,JSON.parse(s),o,p.relative==="path");e==null&&n!=="/"&&(u.pathname=u.pathname==="/"?n:On([n,u.pathname])),(p.replace?a.replace:a.push)(u,p.state,p)},[n,a,s,o,e])}function au(e,n){let{relative:r}=n===void 0?{}:n,{future:a}=j.useContext(Vn),{matches:i}=j.useContext(Mn),{pathname:o}=tn(),s=JSON.stringify(Qs(i,a.v7_relativeSplatPath));return j.useMemo(()=>Xs(e,JSON.parse(s),o,r==="path"),[e,s,o,r])}function qm(e,n){return Wm(e,n)}function Wm(e,n,r,a){Pr()||Q(!1);let{navigator:i}=j.useContext(Vn),{matches:o}=j.useContext(Mn),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=tn(),p;if(n){var u;let y=typeof n=="string"?Dr(n):n;c==="/"||(u=y.pathname)!=null&&u.startsWith(c)||Q(!1),p=y}else p=d;let m=p.pathname||"/",b=m;if(c!=="/"){let y=c.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(y.length).join("/")}let v=wm(e,{pathname:b}),x=Xm(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:On([c,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:On([c,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,r,a);return n&&x?j.createElement(ui.Provider,{value:{location:Rt({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:jn.Pop}},x):x}function Ym(){let e=t0(),n=Zm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},n),r?j.createElement("pre",{style:i},r):null,null)}const Gm=j.createElement(Ym,null);class Jm extends j.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?j.createElement(Mn.Provider,{value:this.props.routeContext},j.createElement(ru.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qm(e){let{routeContext:n,match:r,children:a}=e,i=j.useContext(el);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),j.createElement(Mn.Provider,{value:n},a)}function Xm(e,n,r,a){var i;if(n===void 0&&(n=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=a)!=null&&o.v7_partialHydration&&n.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let p=s.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);p>=0||Q(!1),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let p=0;p<s.length;p++){let u=s[p];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(d=p),u.route.id){let{loaderData:m,errors:b}=r,v=u.route.loader&&m[u.route.id]===void 0&&(!b||b[u.route.id]===void 0);if(u.route.lazy||v){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,u,m)=>{let b,v=!1,x=null,y=null;r&&(b=l&&u.route.id?l[u.route.id]:void 0,x=u.route.errorElement||Gm,c&&(d<0&&m===0?(i0("route-fallback"),v=!0,y=null):d===m&&(v=!0,y=u.route.hydrateFallbackElement||null)));let f=n.concat(s.slice(0,m+1)),h=()=>{let g;return b?g=x:v?g=y:u.route.Component?g=j.createElement(u.route.Component,null):u.route.element?g=u.route.element:g=p,j.createElement(Qm,{match:u,routeContext:{outlet:p,matches:f,isDataRoute:r!=null},children:g})};return r&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?j.createElement(Jm,{location:r.location,revalidation:r.revalidation,component:x,error:b,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var iu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(iu||{}),ou=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ou||{});function e0(e){let n=j.useContext(el);return n||Q(!1),n}function n0(e){let n=j.useContext(Km);return n||Q(!1),n}function r0(e){let n=j.useContext(Mn);return n||Q(!1),n}function su(e){let n=r0(),r=n.matches[n.matches.length-1];return r.route.id||Q(!1),r.route.id}function t0(){var e;let n=j.useContext(ru),r=n0(),a=su();return n!==void 0?n:(e=r.errors)==null?void 0:e[a]}function a0(){let{router:e}=e0(iu.UseNavigateStable),n=su(ou.UseNavigateStable),r=j.useRef(!1);return tu(()=>{r.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Rt({fromRouteId:n},o)))},[e,n])}const xc={};function i0(e,n,r){xc[e]||(xc[e]=!0)}function o0(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ie(e){let{to:n,replace:r,state:a,relative:i}=e;Pr()||Q(!1);let{future:o,static:s}=j.useContext(Vn),{matches:l}=j.useContext(Mn),{pathname:c}=tn(),d=_r(),p=Xs(n,Qs(l,o.v7_relativeSplatPath),c,i==="path"),u=JSON.stringify(p);return j.useEffect(()=>d(JSON.parse(u),{replace:r,state:a,relative:i}),[d,u,i,r,a]),null}function P(e){Q(!1)}function s0(e){let{basename:n="/",children:r=null,location:a,navigationType:i=jn.Pop,navigator:o,static:s=!1,future:l}=e;Pr()&&Q(!1);let c=n.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:c,navigator:o,static:s,future:Rt({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof a=="string"&&(a=Dr(a));let{pathname:p="/",search:u="",hash:m="",state:b=null,key:v="default"}=a,x=j.useMemo(()=>{let y=Js(p,c);return y==null?null:{location:{pathname:y,search:u,hash:m,state:b,key:v},navigationType:i}},[c,p,u,m,b,v,i]);return x==null?null:j.createElement(Vn.Provider,{value:d},j.createElement(ui.Provider,{children:r,value:x}))}function l0(e){let{children:n,location:r}=e;return qm(Wo(n),r)}new Promise(()=>{});function Wo(e,n){n===void 0&&(n=[]);let r=[];return j.Children.forEach(e,(a,i)=>{if(!j.isValidElement(a))return;let o=[...n,i];if(a.type===j.Fragment){r.push.apply(r,Wo(a.props.children,o));return}a.type!==P&&Q(!1),!a.props.index||!a.props.children||Q(!1);let s={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=Wo(a.props.children,o)),r.push(s)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Yo.apply(this,arguments)}function c0(e,n){if(e==null)return{};var r={},a=Object.keys(e),i,o;for(o=0;o<a.length;o++)i=a[o],!(n.indexOf(i)>=0)&&(r[i]=e[i]);return r}function d0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function p0(e,n){return e.button===0&&(!n||n==="_self")&&!d0(e)}const u0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],f0="6";try{window.__reactRouterVersion=f0}catch{}const h0="startTransition",bc=of[h0];function m0(e){let{basename:n,children:r,future:a,window:i}=e,o=j.useRef();o.current==null&&(o.current=xm({window:i,v5Compat:!0}));let s=o.current,[l,c]=j.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},p=j.useCallback(u=>{d&&bc?bc(()=>c(u)):c(u)},[c,d]);return j.useLayoutEffect(()=>s.listen(p),[s,p]),j.useEffect(()=>o0(a),[a]),j.createElement(s0,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:s,future:a})}const g0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",v0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,E=j.forwardRef(function(n,r){let{onClick:a,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:d,preventScrollReset:p,viewTransition:u}=n,m=c0(n,u0),{basename:b}=j.useContext(Vn),v,x=!1;if(typeof d=="string"&&v0.test(d)&&(v=d,g0))try{let g=new URL(window.location.href),k=d.startsWith("//")?new URL(g.protocol+d):new URL(d),C=Js(k.pathname,b);k.origin===g.origin&&C!=null?d=C+k.search+k.hash:x=!0}catch{}let y=Hm(d,{relative:i}),f=x0(d,{replace:s,state:l,target:c,preventScrollReset:p,relative:i,viewTransition:u});function h(g){a&&a(g),g.defaultPrevented||f(g)}return j.createElement("a",Yo({},m,{href:v||y,onClick:x||o?a:h,ref:r,target:c}))});var yc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yc||(yc={}));var wc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wc||(wc={}));function x0(e,n){let{target:r,replace:a,state:i,preventScrollReset:o,relative:s,viewTransition:l}=n===void 0?{}:n,c=_r(),d=tn(),p=au(e,{relative:s});return j.useCallback(u=>{if(p0(u,r)){u.preventDefault();let m=a!==void 0?a:qa(d)===qa(p);c(e,{replace:m,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[d,c,p,a,i,r,e,o,s,l])}function Re(){j.useEffect(()=>{const e=document.getElementById("areas-toggle"),n=[];if(e){const r=a=>{a.preventDefault(),e.parentElement&&e.parentElement.classList.toggle("open")};e.addEventListener("click",r),n.push(()=>e.removeEventListener("click",r))}return()=>{n.forEach(r=>{try{r()}catch{}})}},[])}function b0(){j.useEffect(()=>{const e=document.getElementById("splash"),n=document.getElementById("splashLogo"),r=document.getElementById("app"),a=()=>{if(e)try{e.classList.add("splash--hide"),e.setAttribute("aria-hidden","true"),e.style.display="none",e.style.pointerEvents="none"}catch{}};try{e&&(e.classList.remove("splash--hide"),e.removeAttribute("aria-hidden"),e.style.display="",e.style.pointerEvents="")}catch{}if((()=>{try{return sessionStorage.getItem("koop_hasVisited")==="1"}catch{return!1}})()||document.documentElement.classList.contains("skip-splash")){a(),r&&(r.style.opacity="1");return}const s=2500,l=800,c=performance.now();function d(){n&&(n.offsetWidth,n.classList.add("is-visible"))}function p(){if(r)if(r.style.opacity="0",r.offsetHeight,r.animate){const x=r.animate([{opacity:0},{opacity:1}],{duration:800,easing:"ease",fill:"forwards"});x.onfinish=()=>{r.style.opacity="1"}}else r.style.transition="opacity 0.8s ease",requestAnimationFrame(()=>{r.style.opacity="1"})}function u(){const x=performance.now()-c,y=Math.max(0,s-x);setTimeout(()=>{p(),e&&e.classList.add("splash--hide"),setTimeout(()=>{a();try{sessionStorage.setItem("koop_hasVisited","1")}catch{}document.documentElement.classList.add("skip-splash")},l)},y)}async function m(){try{n&&"decode"in n?await n.decode():n&&!n.complete&&await new Promise(x=>n.addEventListener("load",x,{once:!0}))}catch{}d(),u()}const b=x=>{x.persisted&&(a(),r&&(r.style.opacity="1"))};window.addEventListener("pageshow",b),m();const v=setTimeout(()=>{const x=document.getElementById("splash");if(x&&document.body.contains(x))try{x.classList.add("splash--hide"),x.setAttribute("aria-hidden","true"),x.style.display="none",x.style.pointerEvents="none"}catch{}},7e3);return()=>{window.removeEventListener("pageshow",b),clearTimeout(v)}},[])}function Oe(){const e=_r(),n=tn(),r=i=>{const o="/"+(i||"").split("/").filter(Boolean).pop(),s={"/index.html":"/","/derecho.html":"/derecho","/contabilidad.html":"/contabilidad","/auditoria.html":"/auditoria","/derecho-administrativo.html":"/derecho-administrativo","/derecho-familia.html":"/derecho-familia","/derecho-laboral.html":"/derecho-laboral","/derecho-penal.html":"/derecho-penal","/impuestos.html":"/impuestos","/planeacion-patrimonial.html":"/asesoria-contable","/planeacion-patrimonial":"/asesoria-contable","/privacidad.html":"/privacidad","/politica-privacidad.html":"/privacidad","/tramites-notariales.html":"/tramites-notariales","/acciones-de-tutela.html":"/acciones-de-tutela"};return s[i]||s[o]||i},a=()=>{var i;(i=document.querySelectorAll("a[href]"))==null||i.forEach(o=>{try{const s=o.getAttribute("href")||"";if(/^https?:\/\//i.test(s)&&new URL(s).origin!==window.location.origin)return;const l=new URL(s,window.location.href);if(l.origin!==window.location.origin)return;let c=r(l.pathname)+l.search+l.hash;/^\/index\.html#/i.test(c)&&(c=c.replace(/^\/index\.html#/i,"/#"));const d=o.getAttribute("href");c&&c!==d&&o.setAttribute("href",c)}catch{}})};j.useEffect(()=>{const i=Array.from(document.querySelectorAll(".page-transition")),o=()=>{i.forEach(p=>p.classList.remove("is-active"))};o(),requestAnimationFrame(o),setTimeout(o,0);const s=p=>{p.persisted&&o()},l=()=>o();window.addEventListener("pageshow",s),window.addEventListener("focus",l);function c(p){if(!p||!p.href)return!1;try{const b=p.classList;if(b&&b.contains("drop-btn")||p.id==="areas-toggle")return!1}catch{}if(p.target&&p.target.toLowerCase()==="_blank")return!1;const u=p.getAttribute("href");if(!u||u.startsWith("#")||u.startsWith("mailto:")||u.startsWith("tel:"))return!1;const m=new URL(p.href,window.location.href);return!(m.hostname!==window.location.hostname||m.pathname===window.location.pathname&&m.hash)}a();const d=p=>{const u=p.target&&p.target.closest?p.target.closest("a"):null;if(u&&(u.classList&&u.classList.contains("drop-btn")||u.id==="areas-toggle")||!u||!c(u)||p.metaKey||p.ctrlKey||p.shiftKey||p.altKey||p.button!==0)return;p.preventDefault();const m=i.some(v=>{try{return getComputedStyle(v).display!=="none"}catch{return!1}});m&&i.forEach(v=>v.classList.add("is-active"));const b=()=>{try{const v=new URL(u.href,window.location.href),x=r(v.pathname)+v.search+v.hash,y=window.location.pathname+window.location.search+window.location.hash;try{window.__KOOP_FADE_ARRIVAL=!0}catch{}try{e(x)}catch{}setTimeout(()=>{window.location.pathname+window.location.search+window.location.hash===y&&window.location.assign(x)},50)}catch{window.location.assign(u.href)}};m?setTimeout(b,600):b()};return document.addEventListener("click",d,!0),()=>{window.removeEventListener("pageshow",s),window.removeEventListener("focus",l),document.removeEventListener("click",d,!0)}},[]),j.useLayoutEffect(()=>{if(!n.hash){const i=()=>{try{window.scrollTo(0,0)}catch{}try{document.documentElement.scrollTop=0}catch{}try{document.body.scrollTop=0}catch{}};i(),requestAnimationFrame(i),setTimeout(i,0),setTimeout(i,50),setTimeout(i,150)}},[n.pathname,n.search,n.hash]),j.useEffect(()=>{Array.from(document.querySelectorAll(".page-transition")).forEach(l=>l.classList.remove("is-active"));const i=document.getElementById("splash"),o=!!(i&&getComputedStyle(i).display!=="none"&&!i.classList.contains("splash--hide"));if(!o){document.documentElement.classList.add("skip-splash");const l=document.getElementById("app");l?(l.style.opacity="1",l.style.transition=""):document.body.style.opacity="1"}if(!o&&!!(typeof window<"u"&&window.__KOOP_FADE_ARRIVAL)){try{const l=document.documentElement;l.classList.remove("route-fade-in"),l.offsetWidth,l.classList.add("route-fade-in"),setTimeout(()=>{try{l.classList.remove("route-fade-in")}catch{}},280)}catch{}try{window.__KOOP_FADE_ARRIVAL=!1}catch{}}try{a()}catch{}},[n.pathname,n.search,n.hash]),j.useEffect(()=>{if(!n.hash)return;const i=(n.hash||"").replace(/^#/,""),o=()=>{try{const p=document.getElementById(i)||document.querySelector(n.hash);if(p&&p.scrollIntoView)return p.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"}),!0}catch{}return!1};if(o())return;const s=requestAnimationFrame(o),l=setTimeout(o,0),c=setTimeout(o,120),d=setTimeout(o,300);return()=>{cancelAnimationFrame(s),clearTimeout(l),clearTimeout(c),clearTimeout(d)}},[n.pathname,n.hash])}function y0(){j.useEffect(()=>{const e=document.querySelectorAll(".labor-card[data-images]"),n=[];return e.forEach(r=>{const a=(r.dataset.images||"").split(",").map(s=>s.trim()).filter(Boolean);if(a.length<2)return;let i=0;const o=setInterval(()=>{const s=(i+1)%a.length,l=document.createElement("div");l.className="labor-card-fade",l.style.backgroundImage=`url('${a[s]}')`,r.appendChild(l),requestAnimationFrame(()=>{l.style.opacity="1"}),setTimeout(()=>{r.style.setProperty("--bg",`url('${a[s]}')`);try{l.remove()}catch{}i=s},1e3)},3e3);n.push(o)}),()=>{n.forEach(r=>clearInterval(r)),document.querySelectorAll(".labor-card-fade").forEach(r=>{try{r.remove()}catch{}})}},[])}function ze(){j.useEffect(()=>{const e=n=>!n||typeof n!="string"?n:n.replace(/url\(\s*'img\//gi,"url('/img/").replace(/url\(\s*"img\//gi,'url("/img/').replace(/url\(\s*img\//gi,"url(/img/");document.querySelectorAll("[style]").forEach(n=>{try{const r=n.style.getPropertyValue("--bg");if(r&&/url\(/i.test(r)){const a=e(r);a!==r&&n.style.setProperty("--bg",a)}}catch{}}),document.querySelectorAll("[data-images]").forEach(n=>{const r=n.getAttribute("data-images");if(!r)return;const i=r.split(",").map(o=>o.trim()).filter(Boolean).map(o=>o.replace(/^img\//i,"/img/")).join(",");i!==r&&n.setAttribute("data-images",i)})},[location.pathname,location.search,location.hash])}function Le(e){if(!e||typeof e!="string")return"";const n=e.replace(/<noscript[\s\S]*?<\/noscript>/gi,""),r=[],a=/<style\b[^>]*>([\s\S]*?)<\/style>/gi;let i;for(;i=a.exec(n);){const s=i[1]||"";s.trim()&&r.push(s.trim())}return r.join(`

`).replace(/url\(\s*(['\"]?)img\//gi,"url($1/img/").replace(/url\(\s*(['\"]?)(?!\/|https?:|data:)([^'"\)]+?\.(?:png|jpe?g|svg|gif|webp|ico))\1\s*\)/gi,(s,l,c)=>`url(${l}/${c}${l})`)}const w0=`<!DOCTYPE html>\r
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
`,j0=()=>{Re(),b0(),Oe(),y0();const e=Le(w0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsx("div",{id:"splash",className:"splash","aria-hidden":"true",children:t.jsx("div",{className:"splash__frame",children:t.jsx("img",{id:"splashLogo",className:"splash__logo",src:"/Koop%20Logo.png",alt:"Koop Strategic Advisory"})})}),t.jsxs("div",{id:"app",children:[t.jsxs("div",{className:"hero-section hero--home",id:"inicio",children:[t.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:t.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),t.jsx("div",{className:"hero-overlay"}),t.jsx("div",{className:"hero-content",children:t.jsxs("div",{className:"hero-box",children:[t.jsx("div",{className:"hero-title",children:"KOOP es Bogotá, es excelencia académica"}),t.jsxs("div",{className:"hero-subtitle",children:["Expertos en Derecho Administrativo,",t.jsx("br",{})," Penal, Laboral y Médico"]}),t.jsxs("div",{className:"hero-desc",children:["Equipo de abogados y contadores con experiencia. ",t.jsx("br",{}),"Brindamos consultoría estratégica para empresas y personas naturales."]}),t.jsx("a",{className:"cta-btn",href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20:",children:"Solicita tu consulta"})]})})]}),t.jsx("section",{className:"areas-section",id:"areas",children:t.jsxs("div",{className:"areas-container",children:[t.jsxs("div",{className:"areas-title",children:[t.jsx("span",{className:"areas-title-bold",children:"ÁREAS DE"})," ",t.jsx("span",{className:"areas-title-normal",children:"PRÁCTICA"})]}),t.jsxs("div",{className:"areas-cards",children:[t.jsx("a",{href:"/derecho",className:"labor-card",style:{"--bg":"url('/img/paloquemao.png')"},"data-images":"/img/paloquemao.png,/img/saladecasacionlaboral.png,/img/tramitesnotariales.png,/img/sexuales.png,/img/fiscalia.png",children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("div",{className:"labor-card-title",children:"Derecho"}),t.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})}),t.jsx("a",{href:"/contabilidad",className:"labor-card",style:{"--bg":"url('/img/auditoria.jpg')"},"data-images":"/img/auditoria.jpg,/img/impuestos-en-colombia.jpg,/img/que_es_la_contabilidad.jpeg",children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("div",{className:"labor-card-title",children:"Contabilidad"}),t.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})})]})]})}),t.jsx("section",{className:"vision-section",id:"vision",children:t.jsxs("div",{className:"vision-container",children:[t.jsxs("h2",{className:"vision-title",children:[t.jsx("span",{className:"vision-bold",children:"NUESTRA"})," VISIÓN"]}),t.jsxs("div",{className:"vision-text",children:[t.jsx("p",{children:"En Koop Strategic Advisory, nuestra visión es consolidarnos como la firma de referencia en servicios jurídicos, contables y de consultoría empresarial, reconocidos por nuestra ética, innovación y excelencia. Nos apasiona acompañar a empresas y personas en la toma de decisiones estratégicas que les permitan crecer, proteger sus intereses y transformar sus proyectos en resultados sostenibles."}),t.jsx("p",{children:"Trabajamos bajo un enfoque multidisciplinario, integrando conocimientos legales, contables y de auditoría para ofrecer soluciones integrales y personalizadas. Nuestro equipo está comprometido con la actualización permanente, la confianza y el trato directo con cada cliente."}),t.jsx("p",{children:"Buscamos construir relaciones de largo plazo basadas en la transparencia, el profesionalismo y el valor agregado, contribuyendo activamente al desarrollo empresarial y a la construcción de una sociedad más justa y eficiente."})]})]})}),t.jsx("section",{className:"full-img-section",children:t.jsx("img",{src:"/Corte suprema de justicia de colombia.jpg",alt:"Equipo empresarial Koop",className:"full-img"})}),t.jsxs("section",{className:"contact-section",id:"contacto",children:[t.jsx("div",{className:"contact-overlay"}),t.jsx("div",{className:"contact-container contact-modern",children:t.jsxs("div",{className:"contact-modern-content",children:[t.jsx("div",{className:"contact-title",style:{textAlign:"center"},children:"CONTÁCTANOS"}),t.jsx("div",{className:"contact-name",style:{textAlign:"center",color:"#fff"},children:"KOOP STRATEGIC ADVISORY"}),t.jsxs("div",{className:"contact-social contact-social-modern",children:[t.jsx("a",{href:"https://www.instagram.com/kooplawyers/",target:"_blank",className:"social-icon instagram",title:"Instagram",children:t.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",alt:"Instagram"})}),t.jsx("a",{href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",className:"social-icon facebook",title:"Facebook",children:t.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg",alt:"Facebook"})}),t.jsx("a",{href:"https://www.tiktok.com/@koop.co",target:"_blank",className:"social-icon tiktok",title:"TikTok",children:t.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg",alt:"TikTok"})}),t.jsx("a",{href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20",target:"_blank",className:"social-icon whatsapp",title:"WhatsApp",children:t.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg",alt:"WhatsApp"})})]}),t.jsx("div",{className:"contact-modern-text",children:"Atendemos consultas por cualquiera de nuestras redes sociales."})]})})]}),t.jsx("footer",{className:"site-footer",children:t.jsxs("div",{className:"footer-container",children:[t.jsx("div",{className:"footer-left",children:"© 2024 Creado por Koop Strategic Advisory"}),t.jsx("div",{className:"footer-right",children:t.jsx("a",{href:"/privacidad",target:"_blank",children:"Política de Privacidad"})})]})})]})," "]})},k0=`<!DOCTYPE html>\r
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
`,lu="/assets/Despidoinjustificado-WBwGt-rg.jpg",C0=()=>{Re(),Oe();const e=Le(k0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsx("section",{className:"labor-cards-section",id:"areas-derecho",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"DERECHO"}),t.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),t.jsx("p",{className:"labor-sub",children:"Asesoría integral en diversas ramas del derecho."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx(E,{to:"/derecho-penal",className:"labor-card",style:{"--bg":"url('/img/Audiencias.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Derecho Penal"]}),t.jsx("div",{className:"labor-card-desc",children:"Defensa y asesoría en procesos penales."})]})}),t.jsx(E,{to:"/derecho-laboral",className:"labor-card",style:{"--bg":`url(${lu})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Derecho Laboral"]}),t.jsx("div",{className:"labor-card-desc",children:"Soluciones en derecho laboral y seguridad social."})]})}),t.jsx(E,{to:"/tramites-notariales",className:"labor-card",style:{"--bg":"url('img/tramitesnotariales.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Trámites notariales"]}),t.jsx("div",{className:"labor-card-desc",children:"Gestiones notariales rápidas y seguras."})]})}),t.jsx(E,{to:"/derecho-administrativo",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Derecho Administrativo"]}),t.jsx("div",{className:"labor-card-desc",children:"Asesoría en procedimientos y litigios administrativos."})]})}),t.jsx(E,{to:"/derecho-familia",className:"labor-card",style:{"--bg":"url('/img/ninofamilia.webp')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Derecho de Familia"]}),t.jsx("div",{className:"labor-card-desc",children:"Trámites administrativos y judiciales de familia."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),t.jsxs("div",{className:"btns",children:[t.jsx("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:"WhatsApp"}),t.jsx("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:"Escríbenos"})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(E,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(E,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(E,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(E,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Áreas de Derecho"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(E,{to:"/derecho-penal",children:"Derecho penal"})}),t.jsx("li",{children:t.jsx(E,{to:"/derecho-laboral",children:"Derecho laboral"})}),t.jsx("li",{children:t.jsx(E,{to:"/tramites-notariales",children:"Trámites notariales"})}),t.jsx("li",{children:t.jsx(E,{to:"/derecho-administrativo",children:"Derecho administrativo"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx(E,{to:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},N0=`<!DOCTYPE html>\r
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
`,E0=()=>{Re(),Oe();const e=Le(N0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsx("section",{className:"labor-cards-section",id:"subareas-contabilidad",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"CONTABILIDAD"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Selecciona la especialidad contable que necesitas."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"/auditoria",className:"labor-card",style:{"--bg":"url('img/auditoria.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Auditoría y Revisoría Fiscal"]}),t.jsx("div",{className:"labor-card-desc",children:"Supervisión financiera independiente."})]})}),t.jsx("a",{href:"/impuestos",className:"labor-card",style:{"--bg":"url('img/impuestos-en-colombia.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Impuestos y Planeación Tributaria"]}),t.jsx("div",{className:"labor-card-desc",children:"Consultoría y cumplimiento fiscal."})]})}),t.jsx("a",{href:"/asesoria-contable",className:"labor-card",style:{"--bg":"url('img/que_es_la_contabilidad.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Asesoría Contable"]}),t.jsx("div",{className:"labor-card-desc",children:"Protección y optimización del patrimonio."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Soluciones integrales para tu empresa."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una Asesoría Contable?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20consultar%20los%20servicios%20contables:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Contabilidad%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(E,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(E,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(E,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(E,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios contables"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"/auditoria",children:"Auditoría y Revisoría Fiscal"})}),t.jsx("li",{children:t.jsx("a",{href:"/impuestos",children:"Impuestos y Planeación Tributaria"})}),t.jsx("li",{children:t.jsx("a",{href:"/asesoria-contable",children:"Asesoría Contable"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},S0=`<!DOCTYPE html>\r
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
`,A0=()=>{Re(),Oe();const e=Le(S0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Auditoría & Revisoría Fiscal",children:t.jsx("div",{className:"hero-headline",children:"Auditoría & Revisoría Fiscal"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-auditoria",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE AUDITORÍA & REVISORÍA FISCAL"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Supervisión independiente y aseguramiento financiero y contable."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#financiera",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Auditoría financiera"]}),t.jsx("div",{className:"labor-card-desc",children:"Opinión independiente sobre estados financieros."})]})}),t.jsx("a",{href:"#revisoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Revisoría fiscal permanente"]}),t.jsx("div",{className:"labor-card-desc",children:"Cumplimiento de obligaciones legales y societarias."})]})}),t.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Evaluación de control interno"]}),t.jsx("div",{className:"labor-card-desc",children:"Diagnósticos y recomendaciones."})]})}),t.jsx("a",{href:"#cumplimiento",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Cumplimiento normativo"]}),t.jsx("div",{className:"labor-card-desc",children:"Verificación de normas contables y fiscales."})]})}),t.jsx("a",{href:"#informes",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Informes especiales"]}),t.jsx("div",{className:"labor-card-desc",children:"Dictámenes sobre hechos particulares."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Control y transparencia para tu organización."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría en auditoría & revisoría fiscal?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20auditor%C3%ADa%20y%20revisor%C3%ADa%20fiscal%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Auditor%C3%ADa%20y%20Revisor%C3%ADa%20Fiscal%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(E,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(E,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(E,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(E,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios de familia"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#divorcio",children:"Auditoría financiera"})}),t.jsx("li",{children:t.jsx("a",{href:"#custodia",children:"Revisoría fiscal permanente"})}),t.jsx("li",{children:t.jsx("a",{href:"#alimentos",children:"Evaluación de control interno"})}),t.jsx("li",{children:t.jsx("a",{href:"#sociedad",children:"Cumplimiento normativo"})}),t.jsx("li",{children:t.jsx("a",{href:"#adopciones",children:"Informes especiales"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},I0=`<!DOCTYPE html>\r
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
`,T0=()=>{Re(),Oe();const e=Le(I0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/derecho-administrativo/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Consejo-deestado.avif')",backgroundPosition:"center 80%"},children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Derecho Administrativo",children:t.jsx("div",{className:"hero-headline",children:"Derecho Administrativo"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-derecho-administrativo",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE DERECHO ADMINISTRATIVO"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Asesoría en trámites y procedimientos ante la administración pública."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#peticion",className:"labor-card",style:{"--bg":"url('img/Gestionurbana.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Gestión Urbanística"]}),t.jsx("div",{className:"labor-card-desc",children:"Asesorías en licencias y planeación urbanística."})]})}),t.jsx("a",{href:"#disciplinario",className:"labor-card",style:{"--bg":"url('img/Disci.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Procesos disciplinarios"]}),t.jsx("div",{className:"labor-card-desc",children:"Defensa ante investigaciones y sanciones."})]})}),t.jsx("a",{href:"#contratacion",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Contratación estatal"]}),t.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en etapas precontractuales y contractuales."})]})}),t.jsx("a",{href:"#nulidad",className:"labor-card",style:{"--bg":"url('img/Respfiscal.webp')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Procesos de responsabilidad fiscal"]}),t.jsx("div",{className:"labor-card-desc",children:"Conflictos derivados de administración de dineros públicos."})]})}),t.jsx("a",{href:"#conceptos",className:"labor-card",style:{"--bg":"url('img/Asesoria.webp')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Conceptos y asesorías administrativas"]}),t.jsx("div",{className:"labor-card-desc",children:"Elaboración de conceptos y respuestas a requerimientos."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Valoramos y resguardamos tus activos intangibles."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría en derecho administrativo?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20concencioso%20administrativo%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20Administrativo%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(E,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(E,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(E,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(E,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios de familia"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#divorcio",children:"Gestión Urbanística"})}),t.jsx("li",{children:t.jsx("a",{href:"#custodia",children:"Procesos Disciplinarios"})}),t.jsx("li",{children:t.jsx("a",{href:"#alimentos",children:"Contratación Estatal"})}),t.jsx("li",{children:t.jsx("a",{href:"#sociedad",children:"Procesos de responsabilidad fiscal"})}),t.jsx("li",{children:t.jsx("a",{href:"#adopciones",children:"Conceptos y Asesorías Administrativas"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},R0=`<!DOCTYPE html>\r
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
`,O0=()=>{Re(),Oe();const e=Le(R0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/ninofamilia.webp')",backgroundPosition:"center 30%"},children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Derecho de Familia",children:t.jsx("div",{className:"hero-headline",children:"Derecho de Familia"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-familia",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE FAMILIA"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Asesoría integral en situaciones familiares: divorcios, custodia, alimentos y más."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#divorcio",className:"labor-card",style:{"--bg":"url('img/divorcio.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Divorcio y separación"]}),t.jsx("div",{className:"labor-card-desc",children:"Representación y acuerdos amistosos o judiciales."})]})}),t.jsx("a",{href:"#custodia",className:"labor-card",style:{"--bg":"url('img/Custodia.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Custodia y patria potestad"]}),t.jsx("div",{className:"labor-card-desc",children:"Defensa de los derechos de tus hijos y del núcleo familiar."})]})}),t.jsx("a",{href:"#alimentos",className:"labor-card",style:{"--bg":"url('img/alimentos.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Alimentos y pensión alimentaria"]}),t.jsx("div",{className:"labor-card-desc",children:"Fijación, modificación y cobro de cuotas alimentarias."})]})}),t.jsx("a",{href:"#sociedad",className:"labor-card",style:{"--bg":"url('img/Violencia.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Violencia intrafamiliar"]}),t.jsx("div",{className:"labor-card-desc",children:"Trámite ante comisaría de familia o proceso penal ante fiscalía."})]})}),t.jsx("a",{href:"#comisariaseicbf",className:"labor-card",style:{"--bg":"url('img/Bienestar.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Trámites frente a ICBF o Comisarías de familia"]}),t.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en procesos administrativos."})]})}),t.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales"]}),t.jsx("div",{className:"labor-card-desc",children:"Acuerdos patrimoniales previos al matrimonio o unión libre."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico y soluciones 360° para proteger tu núcleo familiar."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría en derecho de familia?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20derecho%20de%20familia%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20de%20Familia%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(E,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(E,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(E,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(E,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios de familia"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#divorcio",children:"Divorcio y separación"})}),t.jsx("li",{children:t.jsx("a",{href:"#custodia",children:"Custodia y patria potestad"})}),t.jsx("li",{children:t.jsx("a",{href:"#alimentos",children:"Alimentos y pensión alimentaria"})}),t.jsx("li",{children:t.jsx("a",{href:"#sociedad",children:"Violencia intrafamiliar"})}),t.jsx("li",{children:t.jsx("a",{href:"#adopciones",children:"Trámites frente a ICBF o Comisarías de familia"})}),t.jsx("li",{children:t.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573503965755",children:"+57 (350) 396 57 55"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},z0=`<!DOCTYPE html>\r
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
`,L0="/assets/liquidaciones-CLf4J2S8.jpeg",D0="/assets/acoso-5lfYgMQE.jpg",P0="/assets/pensiones-Cse2TGmQ.jpg",_0="/assets/contratorealidad-CKG4Jjcw.png",V0=()=>{Re(),Oe();const e=Le(z0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Derecho Laboral y Seguridad Social",children:t.jsx("div",{className:"hero-headline",children:"Derecho Laboral y Seguridad Social"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-laborales",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS LABORALES"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Estrategia, representación y cumplimiento normativo en derecho laboral para empresas y trabajadores."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#contratorealidad",className:"labor-card",style:{"--bg":`url(${_0})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Contrato realidad"]}),t.jsx("div",{className:"labor-card-desc",children:"Reconocimiento del vínculo laboral y prestaciones."})]})}),t.jsx("a",{href:"#liquidaciones",className:"labor-card",style:{"--bg":`url(${L0})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Mora en el pago de la liquidación"]}),t.jsx("div",{className:"labor-card-desc",children:"Cálculo, reclamación y verificación de pagos."})]})}),t.jsx("a",{href:"#acoso",className:"labor-card",style:{"--bg":`url(${D0})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Acoso laboral"]}),t.jsx("div",{className:"labor-card-desc",children:"Comités, protocolos, evidencias y defensa."})]})}),t.jsx("a",{href:"#pensiones",className:"labor-card",style:{"--bg":`url(${P0})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Pensiones y seguridad social"]}),t.jsx("div",{className:"labor-card-desc",children:"Traslados, reliquidaciones y contingencias."})]})}),t.jsx("a",{href:"#reintegro",className:"labor-card",style:{"--bg":`url(${lu})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Reintegro laboral"]}),t.jsx("div",{className:"labor-card-desc",children:"Acciones de reintegro por despido ilegal o con fuero."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20laboral%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(E,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(E,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(E,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(E,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios laborales"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#despido",children:"Despido injustificado"})}),t.jsx("li",{children:t.jsx("a",{href:"#liquidaciones",children:"Liquidaciones y prestaciones"})}),t.jsx("li",{children:t.jsx("a",{href:"#acoso",children:"Acoso laboral"})}),t.jsx("li",{children:t.jsx("a",{href:"#pensiones",children:"Pensiones y seguridad social"})}),t.jsx("li",{children:t.jsx("a",{href:"#reintegro",children:"Reintegro laboral"})}),t.jsx("li",{children:t.jsx("a",{href:"#contratorealidad",children:"Contrato realidad"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},M0=`<!DOCTYPE html>\r
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
`,B0=()=>{Re(),Oe();const e=Le(M0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Derecho Penal",children:t.jsx("div",{className:"hero-headline",children:"Derecho Penal"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS PENALES"}),t.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),t.jsx("p",{className:"labor-sub",children:"Representamos sus intereses con experiencia y conocimiento en el ámbito penal."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#audiencias",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Audiencias, medidas de aseguramiento y trámite penal"]}),t.jsx("div",{className:"labor-card-desc",children:"Protección de sus derechos durante todo el trámite penal, hasta sentencia."})]})}),t.jsx("a",{href:"#asesoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Asesoría y Representación Penal integral para Víctimas"]}),t.jsx("div",{className:"labor-card-desc",children:"Representación legal experta para víctimas, desde la denuncia hasta la indemnización."})]})}),t.jsx("a",{href:"#acompañamiento",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Acompañamiento en audiencias y fases procesales clave"]}),t.jsx("div",{className:"labor-card-desc",children:"Defensa en audiencias específicas. Consulte más acá."})]})}),t.jsx("a",{href:"#habeas",className:"labor-card",style:{"--bg":"url('img/habeas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Habeas corpus y libertades inmediatas"]}),t.jsx("div",{className:"labor-card-desc",children:"Trámite inmediato para restablecer la libertad personal."})]})}),t.jsx("a",{href:"#defensa",className:"labor-card",style:{"--bg":"url('img/sexuales.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Defensa y Asesoría en Casos de Delitos Sexuales"]}),t.jsx("div",{className:"labor-card-desc",children:"Protección integral de derechos en investigaciones y juicios por delitos sexuales."})]})}),t.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/fiscalia.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Control y Seguimiento de Procesos en Fiscalía"]}),t.jsx("div",{className:"labor-card-desc",children:"Monitoreamos y gestionamos su proceso penal para evitar estancamientos y proteger sus derechos."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20penal%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(E,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(E,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(E,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(E,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios laborales"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#audiencias",children:"Audiencias, medidas de aseguramiento y trámite penal"})}),t.jsx("li",{children:t.jsx("a",{href:"#asesoria",children:"Asesoría y Representación Penal integral para Víctimas"})}),t.jsx("li",{children:t.jsx("a",{href:"#acompañamiento",children:"Acompañamiento en audiencias y fases procesales clave"})}),t.jsx("li",{children:t.jsx("a",{href:"#habeas",children:"Habeas corpus y libertades inmediatas"})}),t.jsx("li",{children:t.jsx("a",{href:"#defensa",children:"Defensa y Asesoría en Casos de Delitos Sexuales"})}),t.jsx("li",{children:t.jsx("a",{href:"#control",children:"Control y Seguimiento de Procesos en Fiscalía"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},F0=`<!DOCTYPE html>\r
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
`,Z0=()=>{Re(),Oe();const e=Le(F0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Impuestos",children:t.jsx("div",{className:"hero-headline",children:"Impuestos"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-impuestos",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE IMPUESTOS"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Consultoría tributaria y planeación fiscal para empresas y personas."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#planeacion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Planeación tributaria"]}),t.jsx("div",{className:"labor-card-desc",children:"Estructuras fiscales eficientes y legales."})]})}),t.jsx("a",{href:"#declaraciones",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Declaraciones y cumplimiento"]}),t.jsx("div",{className:"labor-card-desc",children:"Preparación y presentación oportuna de impuestos."})]})}),t.jsx("a",{href:"#dian",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Defensa ante la DIAN"]}),t.jsx("div",{className:"labor-card-desc",children:"Respuestas a requerimientos y litigios tributarios."})]})}),t.jsx("a",{href:"#transferencia",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Precios de transferencia"]}),t.jsx("div",{className:"labor-card-desc",children:"Estudios y documentación obligatoria."})]})}),t.jsx("a",{href:"#auditoria",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Auditoría fiscal"]}),t.jsx("div",{className:"labor-card-desc",children:"Revisión de obligaciones y contingencias."})]})}),t.jsx("a",{href:"#municipales",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Obligaciones municipales"]}),t.jsx("div",{className:"labor-card-desc",children:"Impuestos locales y de industria y comercio."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Optimización de obligaciones fiscales."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría en impuestos?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20impuestos%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Impuestos%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(E,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(E,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(E,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(E,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios de familia"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#divorcio",children:"Planeación tributaria"})}),t.jsx("li",{children:t.jsx("a",{href:"#custodia",children:"Declaraciones y cumplimiento"})}),t.jsx("li",{children:t.jsx("a",{href:"#alimentos",children:"Defensa ante DIAN"})}),t.jsx("li",{children:t.jsx("a",{href:"#sociedad",children:"Precios de transferencia"})}),t.jsx("li",{children:t.jsx("a",{href:"#adopciones",children:"Auditoría fiscal"})}),t.jsx("li",{children:t.jsx("a",{href:"#capitulaciones",children:"Obligaciones municipales"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},U0=`<!DOCTYPE html>\r
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
`,K0=()=>{Re(),Oe();const e=Le(U0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Asesoría Contable",children:t.jsx("div",{className:"hero-headline",children:"Asesoría Contable"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Estrategias sucesorales"]}),t.jsx("div",{className:"labor-card-desc",children:"Testamentos y planificación de herencias."})]})}),t.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Fideicomisos y patrimonios autónomos"]}),t.jsx("div",{className:"labor-card-desc",children:"Estructuras para administrar bienes."})]})}),t.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Protocolos familiares"]}),t.jsx("div",{className:"labor-card-desc",children:"Reglas de gobierno y sucesión empresarial."})]})}),t.jsx("a",{href:"#fiscal",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Optimización fiscal del patrimonio"]}),t.jsx("div",{className:"labor-card-desc",children:"Reducción de cargas impositivas."})]})}),t.jsx("a",{href:"#portafolios",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Administración de portafolios"]}),t.jsx("div",{className:"labor-card-desc",children:"Gestión de inversiones y activos."})]})}),t.jsx("a",{href:"#activos",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Protección de activos"]}),t.jsx("div",{className:"labor-card-desc",children:"Blindaje frente a riesgos y contingencias."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría en Asesoría Contable?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(E,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(E,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(E,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(E,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios de familia"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#divorcio",children:"Estrategias sucesorales"})}),t.jsx("li",{children:t.jsx("a",{href:"#custodia",children:"Fideicomisos y patrimonios autónomos"})}),t.jsx("li",{children:t.jsx("a",{href:"#alimentos",children:"Protocolos familiares"})}),t.jsx("li",{children:t.jsx("a",{href:"#sociedad",children:"Optimización fiscal del patrimonio"})}),t.jsx("li",{children:t.jsx("a",{href:"#adopciones",children:"Administración de portafolios"})}),t.jsx("li",{children:t.jsx("a",{href:"#capitulaciones",children:"Protección de activos"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},H0=`<!DOCTYPE html>\r
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
`,$0=()=>{Re(),Oe();const e=Le(H0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition"}),t.jsxs("main",{children:[t.jsx("h1",{children:"Política de Privacidad"}),t.jsx("p",{children:"Esta página describe las políticas de privacidad de Koop Strategic Advisory. Su contenido se actualizará próximamente."})]}),t.jsx("footer",{className:"site-footer",children:t.jsxs("div",{className:"footer-container",children:[t.jsxs("div",{className:"footer-left",children:["© ",t.jsx("span",{id:"year"})," Creado por Koop Strategic Advisory"]}),t.jsx("div",{className:"footer-right",children:t.jsx("a",{href:"/privacidad",children:"Política de Privacidad"})})]})})]})},q0=`<!DOCTYPE html>\r
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
`,W0=()=>{Re(),Oe();const e=Le(q0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Trámites Notariales",children:t.jsx("div",{className:"hero-headline",children:"Trámites Notariales"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS FRENTE A NOTARIA"}),t.jsx("h2",{className:"labor-title",children:"Su trámite notarial exprés."}),t.jsx("p",{className:"labor-sub",children:"Listo en tiempo récord, con total seguridad jurídica."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#compraventa",className:"labor-card",style:{"--bg":"url('img/compraventainmueble.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Compraventa de inmuebles."]}),t.jsx("div",{className:"labor-card-desc",children:"Con revisión de títulos y elaboración de minuta."})]})}),t.jsx("a",{href:"#constitucion",className:"labor-card",style:{"--bg":"url('img/constitucion.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Constitución, reforma o liquidación de sociedades"]}),t.jsx("div",{className:"labor-card-desc",children:"(S.A.S., LTDA., S.A., etc.)."})]})}),t.jsx("a",{href:"sucesiones",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Sucesiones por causa de muerte"]}),t.jsx("div",{className:"labor-card-desc",children:"Realización de escrito de solicitud hasta elevación a escritura pública."})]})}),t.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales y liquidación de sociedad conyugal."]}),t.jsx("div",{className:"labor-card-desc",children:"Proteja su patrimonio y formalice acuerdos con respaldo legal."})]})}),t.jsx("a",{href:"#levantamiento",className:"labor-card",style:{"--bg":"url('img/levantamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Levantamiento de hipotecas"]}),t.jsx("div",{className:"labor-card-desc",children:"Trámite de levantamiento exprés y sin dilaciones."})]})}),t.jsx("a",{href:"#donaciones",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Donaciones de bienes inmuebles"]}),t.jsx("div",{className:"labor-card-desc",children:"Transfiera su patrimonio con seguridad jurídica y sin contratiempos."})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20conocer%20los%20costos%20del%20siguiente%20proceso%20notarial:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(E,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(E,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(E,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(E,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios laborales"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#compraventa",children:"Compraventa de inmuebles"})}),t.jsx("li",{children:t.jsx("a",{href:"#constitucion",children:"Constitución, reforma o liquidación de sociedades"})}),t.jsx("li",{children:t.jsx("a",{href:"#sucesiones",children:"Sucesiones por causa de muerte"})}),t.jsx("li",{children:t.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales y liquidación de sociedad conyugal"})}),t.jsx("li",{children:t.jsx("a",{href:"#levantamiento",children:"Levantamiento de hipotecas"})}),t.jsx("li",{children:t.jsx("a",{href:"#donaciones",children:"Donaciones de bienes inmuebles"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Y0=`<!DOCTYPE html>\r
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
`,G0=()=>{Re(),Oe();const e=Le(Y0).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return ze(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Juezjuez.jpg')",backgroundPosition:"center 70%"},children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Acciones de tutela",children:t.jsx("div",{className:"hero-headline",children:"Acciones de tutela"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/tutelapeticion.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Tutela al Derecho de Petición"]}),t.jsx("div",{className:"labor-card-desc",children:"Para obtener respuestas de las autoridades."})]})}),t.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/tutelasalud.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Tutela en  Salud"]}),t.jsx("div",{className:"labor-card-desc",children:"Somos expertos dentro del área de la salud, velamos por sus intereses."})]})}),t.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/tuteladebido.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Revocatoria de decisiones judiciales"]}),t.jsx("div",{className:"labor-card-desc",children:"Por vulneración al debido proceso de acuerdo a la jurisprudencia procesal."})]})}),t.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/jueztutela.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Tutela para obtener pensión"]}),t.jsx("div",{className:"labor-card-desc",children:"Cumplidos los requisitos de la jurisprudencia de la sala de casación laboral"})]})})]})]})}),t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),t.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado."}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:"¿Necesitas una asesoría en Asesoría Contable?"}),t.jsxs("div",{className:"btns",children:[t.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),t.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx(E,{to:"/#inicio",children:"Inicio"})}),t.jsx("li",{children:t.jsx(E,{to:"/#areas",children:"Áreas de práctica"})}),t.jsx("li",{children:t.jsx(E,{to:"/#vision",children:"Nuestra visión"})}),t.jsx("li",{children:t.jsx(E,{to:"/#contacto",children:"Contacto"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Servicios de familia"}),t.jsxs("ul",{className:"footer-list",children:[t.jsx("li",{children:t.jsx("a",{href:"#divorcio",children:"Divorcio y separación"})}),t.jsx("li",{children:t.jsx("a",{href:"#custodia",children:"Custodia y patria potestad"})}),t.jsx("li",{children:t.jsx("a",{href:"#alimentos",children:"Alimentos y pensión alimentaria"})}),t.jsx("li",{children:t.jsx("a",{href:"#sociedad",children:"Liquidación de sociedad conyugal"})}),t.jsx("li",{children:t.jsx("a",{href:"#adopciones",children:"Adopciones"})}),t.jsx("li",{children:t.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),t.jsx("span",{children:"Bogotá D.C., Colombia"})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),t.jsxs("div",{className:"item",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),t.jsx("span",{children:t.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),t.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[t.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),t.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),t.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",t.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[t.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),t.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),t.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Rr="https://koop-api-a28ac382dd56.herokuapp.com";async function J0({name:e,email:n,password:r,roles:a}){console.log(`API BASE: ${Rr}/auth/register`);const i=await fetch(`${Rr}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:n,password:r,roles:a})}),o=await i.json().catch(()=>({}));if(!i.ok)throw new Error((o==null?void 0:o.message)||"Error en registro");return o}async function Q0(){const e=await fetch(`${Rr}/auth/refresh`,{method:"POST",credentials:"include"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error((n==null?void 0:n.message)||"No se pudo refrescar sesión");return n}async function X0({email:e,password:n}){console.log(`API BASE: ${Rr}/auth/login`);const r=await fetch(`${Rr}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:n})});console.log(r);const a=await r.json().catch(()=>({}));if(!r.ok)throw new Error((a==null?void 0:a.message)||"Credenciales inválidas");return a}async function eg(){const e=await fetch(`${Rr}/auth/logout`,{method:"POST",credentials:"include"});if(!e.ok){let n="Error al cerrar sesión";try{const r=await e.json();n=(r==null?void 0:r.message)||n}catch{}throw new Error(n)}return!0}function cu(e,n){return function(){return e.apply(n,arguments)}}const{toString:ng}=Object.prototype,{getPrototypeOf:nl}=Object,{iterator:fi,toStringTag:du}=Symbol,hi=(e=>n=>{const r=ng.call(n);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Ge=e=>(e=e.toLowerCase(),n=>hi(n)===e),mi=e=>n=>typeof n===e,{isArray:Vr}=Array,Ot=mi("undefined");function Vt(e){return e!==null&&!Ot(e)&&e.constructor!==null&&!Ot(e.constructor)&&ke(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const pu=Ge("ArrayBuffer");function rg(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&pu(e.buffer),n}const tg=mi("string"),ke=mi("function"),uu=mi("number"),Mt=e=>e!==null&&typeof e=="object",ag=e=>e===!0||e===!1,ya=e=>{if(hi(e)!=="object")return!1;const n=nl(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(du in e)&&!(fi in e)},ig=e=>{if(!Mt(e)||Vt(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},og=Ge("Date"),sg=Ge("File"),lg=Ge("Blob"),cg=Ge("FileList"),dg=e=>Mt(e)&&ke(e.pipe),pg=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||ke(e.append)&&((n=hi(e))==="formdata"||n==="object"&&ke(e.toString)&&e.toString()==="[object FormData]"))},ug=Ge("URLSearchParams"),[fg,hg,mg,gg]=["ReadableStream","Request","Response","Headers"].map(Ge),vg=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bt(e,n,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let a,i;if(typeof e!="object"&&(e=[e]),Vr(e))for(a=0,i=e.length;a<i;a++)n.call(null,e[a],a,e);else{if(Vt(e))return;const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(a=0;a<s;a++)l=o[a],n.call(null,e[l],l,e)}}function fu(e,n){if(Vt(e))return null;n=n.toLowerCase();const r=Object.keys(e);let a=r.length,i;for(;a-- >0;)if(i=r[a],n===i.toLowerCase())return i;return null}const qn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hu=e=>!Ot(e)&&e!==qn;function Go(){const{caseless:e}=hu(this)&&this||{},n={},r=(a,i)=>{const o=e&&fu(n,i)||i;ya(n[o])&&ya(a)?n[o]=Go(n[o],a):ya(a)?n[o]=Go({},a):Vr(a)?n[o]=a.slice():n[o]=a};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&Bt(arguments[a],r);return n}const xg=(e,n,r,{allOwnKeys:a}={})=>(Bt(n,(i,o)=>{r&&ke(i)?e[o]=cu(i,r):e[o]=i},{allOwnKeys:a}),e),bg=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),yg=(e,n,r,a)=>{e.prototype=Object.create(n.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),r&&Object.assign(e.prototype,r)},wg=(e,n,r,a)=>{let i,o,s;const l={};if(n=n||{},e==null)return n;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!a||a(s,e,n))&&!l[s]&&(n[s]=e[s],l[s]=!0);e=r!==!1&&nl(e)}while(e&&(!r||r(e,n))&&e!==Object.prototype);return n},jg=(e,n,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=n.length;const a=e.indexOf(n,r);return a!==-1&&a===r},kg=e=>{if(!e)return null;if(Vr(e))return e;let n=e.length;if(!uu(n))return null;const r=new Array(n);for(;n-- >0;)r[n]=e[n];return r},Cg=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&nl(Uint8Array)),Ng=(e,n)=>{const a=(e&&e[fi]).call(e);let i;for(;(i=a.next())&&!i.done;){const o=i.value;n.call(e,o[0],o[1])}},Eg=(e,n)=>{let r;const a=[];for(;(r=e.exec(n))!==null;)a.push(r);return a},Sg=Ge("HTMLFormElement"),Ag=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,a,i){return a.toUpperCase()+i}),jc=(({hasOwnProperty:e})=>(n,r)=>e.call(n,r))(Object.prototype),Ig=Ge("RegExp"),mu=(e,n)=>{const r=Object.getOwnPropertyDescriptors(e),a={};Bt(r,(i,o)=>{let s;(s=n(i,o,e))!==!1&&(a[o]=s||i)}),Object.defineProperties(e,a)},Tg=e=>{mu(e,(n,r)=>{if(ke(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const a=e[r];if(ke(a)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Rg=(e,n)=>{const r={},a=i=>{i.forEach(o=>{r[o]=!0})};return Vr(e)?a(e):a(String(e).split(n)),r},Og=()=>{},zg=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function Lg(e){return!!(e&&ke(e.append)&&e[du]==="FormData"&&e[fi])}const Dg=e=>{const n=new Array(10),r=(a,i)=>{if(Mt(a)){if(n.indexOf(a)>=0)return;if(Vt(a))return a;if(!("toJSON"in a)){n[i]=a;const o=Vr(a)?[]:{};return Bt(a,(s,l)=>{const c=r(s,i+1);!Ot(c)&&(o[l]=c)}),n[i]=void 0,o}}return a};return r(e,0)},Pg=Ge("AsyncFunction"),_g=e=>e&&(Mt(e)||ke(e))&&ke(e.then)&&ke(e.catch),gu=((e,n)=>e?setImmediate:n?((r,a)=>(qn.addEventListener("message",({source:i,data:o})=>{i===qn&&o===r&&a.length&&a.shift()()},!1),i=>{a.push(i),qn.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",ke(qn.postMessage)),Vg=typeof queueMicrotask<"u"?queueMicrotask.bind(qn):typeof process<"u"&&process.nextTick||gu,Mg=e=>e!=null&&ke(e[fi]),w={isArray:Vr,isArrayBuffer:pu,isBuffer:Vt,isFormData:pg,isArrayBufferView:rg,isString:tg,isNumber:uu,isBoolean:ag,isObject:Mt,isPlainObject:ya,isEmptyObject:ig,isReadableStream:fg,isRequest:hg,isResponse:mg,isHeaders:gg,isUndefined:Ot,isDate:og,isFile:sg,isBlob:lg,isRegExp:Ig,isFunction:ke,isStream:dg,isURLSearchParams:ug,isTypedArray:Cg,isFileList:cg,forEach:Bt,merge:Go,extend:xg,trim:vg,stripBOM:bg,inherits:yg,toFlatObject:wg,kindOf:hi,kindOfTest:Ge,endsWith:jg,toArray:kg,forEachEntry:Ng,matchAll:Eg,isHTMLForm:Sg,hasOwnProperty:jc,hasOwnProp:jc,reduceDescriptors:mu,freezeMethods:Tg,toObjectSet:Rg,toCamelCase:Ag,noop:Og,toFiniteNumber:zg,findKey:fu,global:qn,isContextDefined:hu,isSpecCompliantForm:Lg,toJSONObject:Dg,isAsyncFn:Pg,isThenable:_g,setImmediate:gu,asap:Vg,isIterable:Mg};function O(e,n,r,a,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),r&&(this.config=r),a&&(this.request=a),i&&(this.response=i,this.status=i.status?i.status:null)}w.inherits(O,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.status}}});const vu=O.prototype,xu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{xu[e]={value:e}});Object.defineProperties(O,xu);Object.defineProperty(vu,"isAxiosError",{value:!0});O.from=(e,n,r,a,i,o)=>{const s=Object.create(vu);return w.toFlatObject(e,s,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),O.call(s,e.message,n,r,a,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const Bg=null;function Jo(e){return w.isPlainObject(e)||w.isArray(e)}function bu(e){return w.endsWith(e,"[]")?e.slice(0,-2):e}function kc(e,n,r){return e?e.concat(n).map(function(i,o){return i=bu(i),!r&&o?"["+i+"]":i}).join(r?".":""):n}function Fg(e){return w.isArray(e)&&!e.some(Jo)}const Zg=w.toFlatObject(w,{},null,function(n){return/^is[A-Z]/.test(n)});function gi(e,n,r){if(!w.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,r=w.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,y){return!w.isUndefined(y[x])});const a=r.metaTokens,i=r.visitor||p,o=r.dots,s=r.indexes,c=(r.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(n);if(!w.isFunction(i))throw new TypeError("visitor must be a function");function d(v){if(v===null)return"";if(w.isDate(v))return v.toISOString();if(w.isBoolean(v))return v.toString();if(!c&&w.isBlob(v))throw new O("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(v)||w.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function p(v,x,y){let f=v;if(v&&!y&&typeof v=="object"){if(w.endsWith(x,"{}"))x=a?x:x.slice(0,-2),v=JSON.stringify(v);else if(w.isArray(v)&&Fg(v)||(w.isFileList(v)||w.endsWith(x,"[]"))&&(f=w.toArray(v)))return x=bu(x),f.forEach(function(g,k){!(w.isUndefined(g)||g===null)&&n.append(s===!0?kc([x],k,o):s===null?x:x+"[]",d(g))}),!1}return Jo(v)?!0:(n.append(kc(y,x,o),d(v)),!1)}const u=[],m=Object.assign(Zg,{defaultVisitor:p,convertValue:d,isVisitable:Jo});function b(v,x){if(!w.isUndefined(v)){if(u.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));u.push(v),w.forEach(v,function(f,h){(!(w.isUndefined(f)||f===null)&&i.call(n,f,w.isString(h)?h.trim():h,x,m))===!0&&b(f,x?x.concat(h):[h])}),u.pop()}}if(!w.isObject(e))throw new TypeError("data must be an object");return b(e),n}function Cc(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return n[a]})}function rl(e,n){this._pairs=[],e&&gi(e,this,n)}const yu=rl.prototype;yu.append=function(n,r){this._pairs.push([n,r])};yu.toString=function(n){const r=n?function(a){return n.call(this,a,Cc)}:Cc;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function Ug(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function wu(e,n,r){if(!n)return e;const a=r&&r.encode||Ug;w.isFunction(r)&&(r={serialize:r});const i=r&&r.serialize;let o;if(i?o=i(n,r):o=w.isURLSearchParams(n)?n.toString():new rl(n,r).toString(a),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Nc{constructor(){this.handlers=[]}use(n,r,a){return this.handlers.push({fulfilled:n,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){w.forEach(this.handlers,function(a){a!==null&&n(a)})}}const ju={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Kg=typeof URLSearchParams<"u"?URLSearchParams:rl,Hg=typeof FormData<"u"?FormData:null,$g=typeof Blob<"u"?Blob:null,qg={isBrowser:!0,classes:{URLSearchParams:Kg,FormData:Hg,Blob:$g},protocols:["http","https","file","blob","url","data"]},tl=typeof window<"u"&&typeof document<"u",Qo=typeof navigator=="object"&&navigator||void 0,Wg=tl&&(!Qo||["ReactNative","NativeScript","NS"].indexOf(Qo.product)<0),Yg=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Gg=tl&&window.location.href||"http://localhost",Jg=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:tl,hasStandardBrowserEnv:Wg,hasStandardBrowserWebWorkerEnv:Yg,navigator:Qo,origin:Gg},Symbol.toStringTag,{value:"Module"})),ue={...Jg,...qg};function Qg(e,n){return gi(e,new ue.classes.URLSearchParams,{visitor:function(r,a,i,o){return ue.isNode&&w.isBuffer(r)?(this.append(a,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...n})}function Xg(e){return w.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function e1(e){const n={},r=Object.keys(e);let a;const i=r.length;let o;for(a=0;a<i;a++)o=r[a],n[o]=e[o];return n}function ku(e){function n(r,a,i,o){let s=r[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=o>=r.length;return s=!s&&w.isArray(i)?i.length:s,c?(w.hasOwnProp(i,s)?i[s]=[i[s],a]:i[s]=a,!l):((!i[s]||!w.isObject(i[s]))&&(i[s]=[]),n(r,a,i[s],o)&&w.isArray(i[s])&&(i[s]=e1(i[s])),!l)}if(w.isFormData(e)&&w.isFunction(e.entries)){const r={};return w.forEachEntry(e,(a,i)=>{n(Xg(a),i,r,0)}),r}return null}function n1(e,n,r){if(w.isString(e))try{return(n||JSON.parse)(e),w.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(e)}const Ft={transitional:ju,adapter:["xhr","http","fetch"],transformRequest:[function(n,r){const a=r.getContentType()||"",i=a.indexOf("application/json")>-1,o=w.isObject(n);if(o&&w.isHTMLForm(n)&&(n=new FormData(n)),w.isFormData(n))return i?JSON.stringify(ku(n)):n;if(w.isArrayBuffer(n)||w.isBuffer(n)||w.isStream(n)||w.isFile(n)||w.isBlob(n)||w.isReadableStream(n))return n;if(w.isArrayBufferView(n))return n.buffer;if(w.isURLSearchParams(n))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(o){if(a.indexOf("application/x-www-form-urlencoded")>-1)return Qg(n,this.formSerializer).toString();if((l=w.isFileList(n))||a.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return gi(l?{"files[]":n}:n,c&&new c,this.formSerializer)}}return o||i?(r.setContentType("application/json",!1),n1(n)):n}],transformResponse:[function(n){const r=this.transitional||Ft.transitional,a=r&&r.forcedJSONParsing,i=this.responseType==="json";if(w.isResponse(n)||w.isReadableStream(n))return n;if(n&&w.isString(n)&&(a&&!this.responseType||i)){const s=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(n)}catch(l){if(s)throw l.name==="SyntaxError"?O.from(l,O.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ue.classes.FormData,Blob:ue.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],e=>{Ft.headers[e]={}});const r1=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),t1=e=>{const n={};let r,a,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),r=s.substring(0,i).trim().toLowerCase(),a=s.substring(i+1).trim(),!(!r||n[r]&&r1[r])&&(r==="set-cookie"?n[r]?n[r].push(a):n[r]=[a]:n[r]=n[r]?n[r]+", "+a:a)}),n},Ec=Symbol("internals");function Gr(e){return e&&String(e).trim().toLowerCase()}function wa(e){return e===!1||e==null?e:w.isArray(e)?e.map(wa):String(e)}function a1(e){const n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=r.exec(e);)n[a[1]]=a[2];return n}const i1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Gi(e,n,r,a,i){if(w.isFunction(a))return a.call(this,n,r);if(i&&(n=r),!!w.isString(n)){if(w.isString(a))return n.indexOf(a)!==-1;if(w.isRegExp(a))return a.test(n)}}function o1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,r,a)=>r.toUpperCase()+a)}function s1(e,n){const r=w.toCamelCase(" "+n);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+r,{value:function(i,o,s){return this[a].call(this,n,i,o,s)},configurable:!0})})}let Ce=class{constructor(n){n&&this.set(n)}set(n,r,a){const i=this;function o(l,c,d){const p=Gr(c);if(!p)throw new Error("header name must be a non-empty string");const u=w.findKey(i,p);(!u||i[u]===void 0||d===!0||d===void 0&&i[u]!==!1)&&(i[u||c]=wa(l))}const s=(l,c)=>w.forEach(l,(d,p)=>o(d,p,c));if(w.isPlainObject(n)||n instanceof this.constructor)s(n,r);else if(w.isString(n)&&(n=n.trim())&&!i1(n))s(t1(n),r);else if(w.isObject(n)&&w.isIterable(n)){let l={},c,d;for(const p of n){if(!w.isArray(p))throw TypeError("Object iterator must return a key-value pair");l[d=p[0]]=(c=l[d])?w.isArray(c)?[...c,p[1]]:[c,p[1]]:p[1]}s(l,r)}else n!=null&&o(r,n,a);return this}get(n,r){if(n=Gr(n),n){const a=w.findKey(this,n);if(a){const i=this[a];if(!r)return i;if(r===!0)return a1(i);if(w.isFunction(r))return r.call(this,i,a);if(w.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,r){if(n=Gr(n),n){const a=w.findKey(this,n);return!!(a&&this[a]!==void 0&&(!r||Gi(this,this[a],a,r)))}return!1}delete(n,r){const a=this;let i=!1;function o(s){if(s=Gr(s),s){const l=w.findKey(a,s);l&&(!r||Gi(a,a[l],l,r))&&(delete a[l],i=!0)}}return w.isArray(n)?n.forEach(o):o(n),i}clear(n){const r=Object.keys(this);let a=r.length,i=!1;for(;a--;){const o=r[a];(!n||Gi(this,this[o],o,n,!0))&&(delete this[o],i=!0)}return i}normalize(n){const r=this,a={};return w.forEach(this,(i,o)=>{const s=w.findKey(a,o);if(s){r[s]=wa(i),delete r[o];return}const l=n?o1(o):String(o).trim();l!==o&&delete r[o],r[l]=wa(i),a[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const r=Object.create(null);return w.forEach(this,(a,i)=>{a!=null&&a!==!1&&(r[i]=n&&w.isArray(a)?a.join(", "):a)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,r])=>n+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...r){const a=new this(n);return r.forEach(i=>a.set(i)),a}static accessor(n){const a=(this[Ec]=this[Ec]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=Gr(s);a[l]||(s1(i,s),a[l]=!0)}return w.isArray(n)?n.forEach(o):o(n),this}};Ce.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.reduceDescriptors(Ce.prototype,({value:e},n)=>{let r=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(a){this[r]=a}}});w.freezeMethods(Ce);function Ji(e,n){const r=this||Ft,a=n||r,i=Ce.from(a.headers);let o=a.data;return w.forEach(e,function(l){o=l.call(r,o,i.normalize(),n?n.status:void 0)}),i.normalize(),o}function Cu(e){return!!(e&&e.__CANCEL__)}function Mr(e,n,r){O.call(this,e??"canceled",O.ERR_CANCELED,n,r),this.name="CanceledError"}w.inherits(Mr,O,{__CANCEL__:!0});function Nu(e,n,r){const a=r.config.validateStatus;!r.status||!a||a(r.status)?e(r):n(new O("Request failed with status code "+r.status,[O.ERR_BAD_REQUEST,O.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function l1(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function c1(e,n){e=e||10;const r=new Array(e),a=new Array(e);let i=0,o=0,s;return n=n!==void 0?n:1e3,function(c){const d=Date.now(),p=a[o];s||(s=d),r[i]=c,a[i]=d;let u=o,m=0;for(;u!==i;)m+=r[u++],u=u%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),d-s<n)return;const b=p&&d-p;return b?Math.round(m*1e3/b):void 0}}function d1(e,n){let r=0,a=1e3/n,i,o;const s=(d,p=Date.now())=>{r=p,i=null,o&&(clearTimeout(o),o=null),e(...d)};return[(...d)=>{const p=Date.now(),u=p-r;u>=a?s(d,p):(i=d,o||(o=setTimeout(()=>{o=null,s(i)},a-u)))},()=>i&&s(i)]}const Wa=(e,n,r=3)=>{let a=0;const i=c1(50,250);return d1(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,c=s-a,d=i(c),p=s<=l;a=s;const u={loaded:s,total:l,progress:l?s/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&p?(l-s)/d:void 0,event:o,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(u)},r)},Sc=(e,n)=>{const r=e!=null;return[a=>n[0]({lengthComputable:r,total:e,loaded:a}),n[1]]},Ac=e=>(...n)=>w.asap(()=>e(...n)),p1=ue.hasStandardBrowserEnv?((e,n)=>r=>(r=new URL(r,ue.origin),e.protocol===r.protocol&&e.host===r.host&&(n||e.port===r.port)))(new URL(ue.origin),ue.navigator&&/(msie|trident)/i.test(ue.navigator.userAgent)):()=>!0,u1=ue.hasStandardBrowserEnv?{write(e,n,r,a,i,o){const s=[e+"="+encodeURIComponent(n)];w.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),w.isString(a)&&s.push("path="+a),w.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function f1(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function h1(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function Eu(e,n,r){let a=!f1(n);return e&&(a||r==!1)?h1(e,n):n}const Ic=e=>e instanceof Ce?{...e}:e;function rr(e,n){n=n||{};const r={};function a(d,p,u,m){return w.isPlainObject(d)&&w.isPlainObject(p)?w.merge.call({caseless:m},d,p):w.isPlainObject(p)?w.merge({},p):w.isArray(p)?p.slice():p}function i(d,p,u,m){if(w.isUndefined(p)){if(!w.isUndefined(d))return a(void 0,d,u,m)}else return a(d,p,u,m)}function o(d,p){if(!w.isUndefined(p))return a(void 0,p)}function s(d,p){if(w.isUndefined(p)){if(!w.isUndefined(d))return a(void 0,d)}else return a(void 0,p)}function l(d,p,u){if(u in n)return a(d,p);if(u in e)return a(void 0,d)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(d,p,u)=>i(Ic(d),Ic(p),u,!0)};return w.forEach(Object.keys({...e,...n}),function(p){const u=c[p]||i,m=u(e[p],n[p],p);w.isUndefined(m)&&u!==l||(r[p]=m)}),r}const Su=e=>{const n=rr({},e);let{data:r,withXSRFToken:a,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=n;n.headers=s=Ce.from(s),n.url=wu(Eu(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(w.isFormData(r)){if(ue.hasStandardBrowserEnv||ue.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[d,...p]=c?c.split(";").map(u=>u.trim()).filter(Boolean):[];s.setContentType([d||"multipart/form-data",...p].join("; "))}}if(ue.hasStandardBrowserEnv&&(a&&w.isFunction(a)&&(a=a(n)),a||a!==!1&&p1(n.url))){const d=i&&o&&u1.read(o);d&&s.set(i,d)}return n},m1=typeof XMLHttpRequest<"u",g1=m1&&function(e){return new Promise(function(r,a){const i=Su(e);let o=i.data;const s=Ce.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=i,p,u,m,b,v;function x(){b&&b(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(p),i.signal&&i.signal.removeEventListener("abort",p)}let y=new XMLHttpRequest;y.open(i.method.toUpperCase(),i.url,!0),y.timeout=i.timeout;function f(){if(!y)return;const g=Ce.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),C={data:!l||l==="text"||l==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:g,config:e,request:y};Nu(function(I){r(I),x()},function(I){a(I),x()},C),y=null}"onloadend"in y?y.onloadend=f:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(f)},y.onabort=function(){y&&(a(new O("Request aborted",O.ECONNABORTED,e,y)),y=null)},y.onerror=function(){a(new O("Network Error",O.ERR_NETWORK,e,y)),y=null},y.ontimeout=function(){let k=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const C=i.transitional||ju;i.timeoutErrorMessage&&(k=i.timeoutErrorMessage),a(new O(k,C.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,e,y)),y=null},o===void 0&&s.setContentType(null),"setRequestHeader"in y&&w.forEach(s.toJSON(),function(k,C){y.setRequestHeader(C,k)}),w.isUndefined(i.withCredentials)||(y.withCredentials=!!i.withCredentials),l&&l!=="json"&&(y.responseType=i.responseType),d&&([m,v]=Wa(d,!0),y.addEventListener("progress",m)),c&&y.upload&&([u,b]=Wa(c),y.upload.addEventListener("progress",u),y.upload.addEventListener("loadend",b)),(i.cancelToken||i.signal)&&(p=g=>{y&&(a(!g||g.type?new Mr(null,e,y):g),y.abort(),y=null)},i.cancelToken&&i.cancelToken.subscribe(p),i.signal&&(i.signal.aborted?p():i.signal.addEventListener("abort",p)));const h=l1(i.url);if(h&&ue.protocols.indexOf(h)===-1){a(new O("Unsupported protocol "+h+":",O.ERR_BAD_REQUEST,e));return}y.send(o||null)})},v1=(e,n)=>{const{length:r}=e=e?e.filter(Boolean):[];if(n||r){let a=new AbortController,i;const o=function(d){if(!i){i=!0,l();const p=d instanceof Error?d:this.reason;a.abort(p instanceof O?p:new Mr(p instanceof Error?p.message:p))}};let s=n&&setTimeout(()=>{s=null,o(new O(`timeout ${n} of ms exceeded`,O.ETIMEDOUT))},n);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),e=null)};e.forEach(d=>d.addEventListener("abort",o));const{signal:c}=a;return c.unsubscribe=()=>w.asap(l),c}},x1=function*(e,n){let r=e.byteLength;if(r<n){yield e;return}let a=0,i;for(;a<r;)i=a+n,yield e.slice(a,i),a=i},b1=async function*(e,n){for await(const r of y1(e))yield*x1(r,n)},y1=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:r,value:a}=await n.read();if(r)break;yield a}}finally{await n.cancel()}},Tc=(e,n,r,a)=>{const i=b1(e,n);let o=0,s,l=c=>{s||(s=!0,a&&a(c))};return new ReadableStream({async pull(c){try{const{done:d,value:p}=await i.next();if(d){l(),c.close();return}let u=p.byteLength;if(r){let m=o+=u;r(m)}c.enqueue(new Uint8Array(p))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},vi=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Au=vi&&typeof ReadableStream=="function",w1=vi&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Iu=(e,...n)=>{try{return!!e(...n)}catch{return!1}},j1=Au&&Iu(()=>{let e=!1;const n=new Request(ue.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),Rc=64*1024,Xo=Au&&Iu(()=>w.isReadableStream(new Response("").body)),Ya={stream:Xo&&(e=>e.body)};vi&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!Ya[n]&&(Ya[n]=w.isFunction(e[n])?r=>r[n]():(r,a)=>{throw new O(`Response type '${n}' is not supported`,O.ERR_NOT_SUPPORT,a)})})})(new Response);const k1=async e=>{if(e==null)return 0;if(w.isBlob(e))return e.size;if(w.isSpecCompliantForm(e))return(await new Request(ue.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(w.isArrayBufferView(e)||w.isArrayBuffer(e))return e.byteLength;if(w.isURLSearchParams(e)&&(e=e+""),w.isString(e))return(await w1(e)).byteLength},C1=async(e,n)=>{const r=w.toFiniteNumber(e.getContentLength());return r??k1(n)},N1=vi&&(async e=>{let{url:n,method:r,data:a,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:c,responseType:d,headers:p,withCredentials:u="same-origin",fetchOptions:m}=Su(e);d=d?(d+"").toLowerCase():"text";let b=v1([i,o&&o.toAbortSignal()],s),v;const x=b&&b.unsubscribe&&(()=>{b.unsubscribe()});let y;try{if(c&&j1&&r!=="get"&&r!=="head"&&(y=await C1(p,a))!==0){let C=new Request(n,{method:"POST",body:a,duplex:"half"}),S;if(w.isFormData(a)&&(S=C.headers.get("content-type"))&&p.setContentType(S),C.body){const[I,R]=Sc(y,Wa(Ac(c)));a=Tc(C.body,Rc,I,R)}}w.isString(u)||(u=u?"include":"omit");const f="credentials"in Request.prototype;v=new Request(n,{...m,signal:b,method:r.toUpperCase(),headers:p.normalize().toJSON(),body:a,duplex:"half",credentials:f?u:void 0});let h=await fetch(v,m);const g=Xo&&(d==="stream"||d==="response");if(Xo&&(l||g&&x)){const C={};["status","statusText","headers"].forEach(U=>{C[U]=h[U]});const S=w.toFiniteNumber(h.headers.get("content-length")),[I,R]=l&&Sc(S,Wa(Ac(l),!0))||[];h=new Response(Tc(h.body,Rc,I,()=>{R&&R(),x&&x()}),C)}d=d||"text";let k=await Ya[w.findKey(Ya,d)||"text"](h,e);return!g&&x&&x(),await new Promise((C,S)=>{Nu(C,S,{data:k,headers:Ce.from(h.headers),status:h.status,statusText:h.statusText,config:e,request:v})})}catch(f){throw x&&x(),f&&f.name==="TypeError"&&/Load failed|fetch/i.test(f.message)?Object.assign(new O("Network Error",O.ERR_NETWORK,e,v),{cause:f.cause||f}):O.from(f,f&&f.code,e,v)}}),es={http:Bg,xhr:g1,fetch:N1};w.forEach(es,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const Oc=e=>`- ${e}`,E1=e=>w.isFunction(e)||e===null||e===!1,Tu={getAdapter:e=>{e=w.isArray(e)?e:[e];const{length:n}=e;let r,a;const i={};for(let o=0;o<n;o++){r=e[o];let s;if(a=r,!E1(r)&&(a=es[(s=String(r)).toLowerCase()],a===void 0))throw new O(`Unknown adapter '${s}'`);if(a)break;i[s||"#"+o]=a}if(!a){const o=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=n?o.length>1?`since :
`+o.map(Oc).join(`
`):" "+Oc(o[0]):"as no adapter specified";throw new O("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return a},adapters:es};function Qi(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Mr(null,e)}function zc(e){return Qi(e),e.headers=Ce.from(e.headers),e.data=Ji.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Tu.getAdapter(e.adapter||Ft.adapter)(e).then(function(a){return Qi(e),a.data=Ji.call(e,e.transformResponse,a),a.headers=Ce.from(a.headers),a},function(a){return Cu(a)||(Qi(e),a&&a.response&&(a.response.data=Ji.call(e,e.transformResponse,a.response),a.response.headers=Ce.from(a.response.headers))),Promise.reject(a)})}const Ru="1.11.0",xi={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{xi[e]=function(a){return typeof a===e||"a"+(n<1?"n ":" ")+e}});const Lc={};xi.transitional=function(n,r,a){function i(o,s){return"[Axios v"+Ru+"] Transitional option '"+o+"'"+s+(a?". "+a:"")}return(o,s,l)=>{if(n===!1)throw new O(i(s," has been removed"+(r?" in "+r:"")),O.ERR_DEPRECATED);return r&&!Lc[s]&&(Lc[s]=!0,console.warn(i(s," has been deprecated since v"+r+" and will be removed in the near future"))),n?n(o,s,l):!0}};xi.spelling=function(n){return(r,a)=>(console.warn(`${a} is likely a misspelling of ${n}`),!0)};function S1(e,n,r){if(typeof e!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let i=a.length;for(;i-- >0;){const o=a[i],s=n[o];if(s){const l=e[o],c=l===void 0||s(l,o,e);if(c!==!0)throw new O("option "+o+" must be "+c,O.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new O("Unknown option "+o,O.ERR_BAD_OPTION)}}const ja={assertOptions:S1,validators:xi},Qe=ja.validators;let Gn=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Nc,response:new Nc}}async request(n,r){try{return await this._request(n,r)}catch(a){if(a instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{a.stack?o&&!String(a.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+o):a.stack=o}catch{}}throw a}}_request(n,r){typeof n=="string"?(r=r||{},r.url=n):r=n||{},r=rr(this.defaults,r);const{transitional:a,paramsSerializer:i,headers:o}=r;a!==void 0&&ja.assertOptions(a,{silentJSONParsing:Qe.transitional(Qe.boolean),forcedJSONParsing:Qe.transitional(Qe.boolean),clarifyTimeoutError:Qe.transitional(Qe.boolean)},!1),i!=null&&(w.isFunction(i)?r.paramsSerializer={serialize:i}:ja.assertOptions(i,{encode:Qe.function,serialize:Qe.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),ja.assertOptions(r,{baseUrl:Qe.spelling("baseURL"),withXsrfToken:Qe.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=o&&w.merge(o.common,o[r.method]);o&&w.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),r.headers=Ce.concat(s,o);const l=[];let c=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(r)===!1||(c=c&&x.synchronous,l.unshift(x.fulfilled,x.rejected))});const d=[];this.interceptors.response.forEach(function(x){d.push(x.fulfilled,x.rejected)});let p,u=0,m;if(!c){const v=[zc.bind(this),void 0];for(v.unshift(...l),v.push(...d),m=v.length,p=Promise.resolve(r);u<m;)p=p.then(v[u++],v[u++]);return p}m=l.length;let b=r;for(u=0;u<m;){const v=l[u++],x=l[u++];try{b=v(b)}catch(y){x.call(this,y);break}}try{p=zc.call(this,b)}catch(v){return Promise.reject(v)}for(u=0,m=d.length;u<m;)p=p.then(d[u++],d[u++]);return p}getUri(n){n=rr(this.defaults,n);const r=Eu(n.baseURL,n.url,n.allowAbsoluteUrls);return wu(r,n.params,n.paramsSerializer)}};w.forEach(["delete","get","head","options"],function(n){Gn.prototype[n]=function(r,a){return this.request(rr(a||{},{method:n,url:r,data:(a||{}).data}))}});w.forEach(["post","put","patch"],function(n){function r(a){return function(o,s,l){return this.request(rr(l||{},{method:n,headers:a?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Gn.prototype[n]=r(),Gn.prototype[n+"Form"]=r(!0)});let A1=class Ou{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const a=this;this.promise.then(i=>{if(!a._listeners)return;let o=a._listeners.length;for(;o-- >0;)a._listeners[o](i);a._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{a.subscribe(l),o=l}).then(i);return s.cancel=function(){a.unsubscribe(o)},s},n(function(o,s,l){a.reason||(a.reason=new Mr(o,s,l),r(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const r=this._listeners.indexOf(n);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const n=new AbortController,r=a=>{n.abort(a)};return this.subscribe(r),n.signal.unsubscribe=()=>this.unsubscribe(r),n.signal}static source(){let n;return{token:new Ou(function(i){n=i}),cancel:n}}};function I1(e){return function(r){return e.apply(null,r)}}function T1(e){return w.isObject(e)&&e.isAxiosError===!0}const ns={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ns).forEach(([e,n])=>{ns[n]=e});function zu(e){const n=new Gn(e),r=cu(Gn.prototype.request,n);return w.extend(r,Gn.prototype,n,{allOwnKeys:!0}),w.extend(r,n,null,{allOwnKeys:!0}),r.create=function(i){return zu(rr(e,i))},r}const Y=zu(Ft);Y.Axios=Gn;Y.CanceledError=Mr;Y.CancelToken=A1;Y.isCancel=Cu;Y.VERSION=Ru;Y.toFormData=gi;Y.AxiosError=O;Y.Cancel=Y.CanceledError;Y.all=function(n){return Promise.all(n)};Y.spread=I1;Y.isAxiosError=T1;Y.mergeConfig=rr;Y.AxiosHeaders=Ce;Y.formToJSON=e=>ku(w.isHTMLForm(e)?new FormData(e):e);Y.getAdapter=Tu.getAdapter;Y.HttpStatusCode=ns;Y.default=Y;const{Axios:e2,AxiosError:n2,CanceledError:r2,isCancel:t2,CancelToken:a2,VERSION:i2,all:o2,Cancel:s2,isAxiosError:l2,spread:c2,toFormData:d2,AxiosHeaders:p2,HttpStatusCode:u2,formToJSON:f2,getAdapter:h2,mergeConfig:m2}=Y,Lu="https://koop-api-a28ac382dd56.herokuapp.com",kn=Y.create({baseURL:Lu,withCredentials:!0}),R1=Y.create({baseURL:Lu,withCredentials:!0});let Xi=!1,rs=[];function O1(e){rs.push(e)}function z1(e){rs.forEach(n=>{try{n(e)}catch{}}),rs=[]}function L1({getAccessToken:e,setAccessToken:n,onLogout:r}){kn.interceptors.request.use(a=>{var i,o;try{let s;try{s=e==null?void 0:e()}catch{}if(!s&&typeof window<"u")try{s=(i=window.localStorage)==null?void 0:i.getItem("accessToken")}catch{}s&&!((o=a.headers)!=null&&o.Authorization)&&(a.headers=a.headers||{},a.headers.Authorization=`Bearer ${s}`)}catch{}return a}),kn.interceptors.response.use(a=>a,async a=>{var p,u;const{response:i,config:o}=a||{},s=i==null?void 0:i.status,l=o||{},c=String((l==null?void 0:l.url)||""),d=c.includes("/auth/login")||c.includes("/auth/register")||c.includes("/auth/refresh");if(s!==401||d||l._retry)return Promise.reject(a);if(l._retry=!0,Xi)return new Promise((m,b)=>{O1(v=>{try{l.headers=l.headers||{},v&&(l.headers.Authorization=`Bearer ${v}`),m(kn(l))}catch(x){b(x)}})});Xi=!0;try{const m=await R1.post("/auth/refresh"),b=(p=m==null?void 0:m.data)==null?void 0:p.accessToken;if(!b)throw new Error("No accessToken in refresh");try{n==null||n(b)}catch{}return z1(b),l.headers=l.headers||{},l.headers.Authorization=`Bearer ${b}`,kn(l)}catch(m){const b=(u=m==null?void 0:m.response)==null?void 0:u.status;if(b===401||b===403)try{await(r==null?void 0:r())}catch{}return Promise.reject(m)}finally{Xi=!1}})}const Du=j.createContext(null);function sa(e){try{const n=e.split(".")[1],r=atob(n.replace(/-/g,"+").replace(/_/g,"/"));return JSON.parse(r)}catch{return null}}function D1({children:e}){const[n,r]=j.useState(()=>localStorage.getItem("accessToken")||null),[a,i]=j.useState(()=>{const b=localStorage.getItem("accessToken");if(!b)return null;const v=sa(b);return v?{id:v.sub,name:v.name,email:v.email,roles:v.roles||[],driveFolders:v.driveFolders||[]}:null}),[o,s]=j.useState(!1),l=!!n;j.useEffect(()=>{if(!n)localStorage.removeItem("accessToken"),i(null);else{localStorage.setItem("accessToken",n);const b=sa(n);b&&i({id:b.sub,name:b.name,email:b.email,roles:b.roles||[],driveFolders:b.driveFolders||[]})}},[n]);const c=async(b,v)=>{console.log("Login!"),s(!0);try{const{accessToken:x,user:y}=await X0({email:b,password:v});r(x);const f=sa(x);return i(f?{id:f.sub,name:f.name,email:f.email,roles:f.roles||[],driveFolders:f.driveFolders||[]}:y||null),{ok:!0}}catch(x){return{ok:!1,error:x.message}}finally{s(!1)}},d=async(b,v,x,y)=>{s(!0),console.log("Login!");try{const f=await J0({name:b,email:v,password:x,roles:y});if(f!=null&&f.accessToken){r(f.accessToken);const h=sa(f.accessToken);i(h?{id:h.sub,name:h.name,email:h.email,roles:h.roles||[],driveFolders:h.driveFolders||[]}:f.user||null)}return{ok:!0,data:f}}catch(f){return{ok:!1,error:f.message}}finally{s(!1)}},p=async()=>{try{await eg()}catch{}finally{r(null),i(null)}},u=j.useMemo(()=>({accessToken:n,user:a,isAuthenticated:l,loading:o,login:c,register:d,logout:p,refresh:Q0}),[n,a,l,o]),m=j.useRef(!1);return j.useEffect(()=>{m.current||(L1({getAccessToken:()=>n,setAccessToken:b=>r(b),onLogout:()=>p()}),m.current=!0)},[]),t.jsx(Du.Provider,{value:u,children:e})}function Fe(){const e=j.useContext(Du);if(!e)throw new Error("useAuth debe usarse dentro de AuthProvider");return e}const Pu="/assets/Koop%20Logo-DEFOyNWT.png";function P1(){var m,b;const{login:e,loading:n}=Fe(),r=_r(),i=((b=(m=tn().state)==null?void 0:m.from)==null?void 0:b.pathname)||"/dashboard",[o,s]=j.useState(""),[l,c]=j.useState(""),[d,p]=j.useState(""),u=async v=>{v.preventDefault(),p(""),console.log("Submitting login form, Hola q ac",o);const x=await e(o,l);if(!x.ok){p(x.error||"Error al iniciar sesión");return}r(i,{replace:!0})};return j.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),t.jsxs("div",{className:"auth-page",children:[t.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:t.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),t.jsx("div",{className:"auth-bg-overlay"}),t.jsxs("div",{className:"auth-card",children:[t.jsx(E,{to:"/",children:t.jsx("img",{src:Pu,alt:"Logo KOOP",className:"logo"})}),t.jsx("h2",{children:"Login KOOP"}),d&&t.jsx("div",{className:"auth-error",children:d}),t.jsxs("form",{onSubmit:u,children:[t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"email",children:"Correo"}),t.jsx("input",{id:"email",type:"email",placeholder:"Ingrese su correo",value:o,onChange:v=>s(v.target.value),required:!0})]}),t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"password",children:"Contraseña"}),t.jsx("input",{id:"password",type:"password",placeholder:"Ingrese su contraseña",value:l,onChange:v=>c(v.target.value),required:!0})]}),t.jsx("button",{type:"submit",className:"login-button",disabled:n,children:n?"Ingresando...":"Iniciar sesión"})]}),t.jsxs("div",{className:"auth-actions",children:["¿No tienes cuenta? ",t.jsx(E,{to:"/register",children:"Regístrate"})," · ",t.jsx(E,{to:"/",children:"Volver al inicio"})]})]})]})}function _1(){const[e,n]=j.useState({name:"",email:"",password:""}),[r,a]=j.useState(!1),[i,o]=j.useState(""),[s,l]=j.useState(null),{register:c}=Fe(),d=_r(),p=m=>n({...e,[m.target.name]:m.target.value}),u=async m=>{m.preventDefault(),o(""),a(!0);try{const b=await c(e.name,e.email,e.password);b.ok?(l(b.data||{ok:!0}),d("/dashboard")):o(b.error||"Error en registro")}catch(b){const v=(b==null?void 0:b.message)||"Error en registro";o(v),l({error:!0,message:v})}finally{a(!1)}};return j.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),t.jsxs("div",{className:"auth-page",children:[t.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:t.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),t.jsx("div",{className:"auth-bg-overlay"}),t.jsxs("div",{className:"auth-card",children:[t.jsx("img",{src:Pu,alt:"Logo KOOP",className:"logo"}),t.jsx("h2",{children:"Crear Cuenta"}),i&&t.jsx("div",{className:"auth-error",children:i}),t.jsxs("form",{onSubmit:u,children:[t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"name",children:"Nombre"}),t.jsx("input",{id:"name",name:"name",type:"text",placeholder:"Tu nombre",value:e.name,onChange:p})]}),t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"email",children:"Correo"}),t.jsx("input",{id:"email",name:"email",type:"email",placeholder:"tu@email.com",value:e.email,onChange:p,required:!0})]}),t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"password",children:"Contraseña"}),t.jsx("input",{id:"password",name:"password",type:"password",placeholder:"Mínimo 8 caracteres",value:e.password,onChange:p,required:!0})]}),t.jsx("button",{type:"submit",className:"login-button",disabled:r,children:r?"Creando...":"Registrarme"})]}),s&&t.jsx("pre",{style:{textAlign:"left",marginTop:12,padding:12,background:"rgba(36, 52, 71, 0.6)",border:"1px solid rgba(57,75,97,0.5)",borderRadius:8,maxHeight:180,overflow:"auto",fontSize:12,color:"#e6f1ff"},children:JSON.stringify(s,null,2)}),t.jsxs("div",{className:"auth-actions",children:["¿Ya tienes cuenta? ",t.jsx(E,{to:"/login",children:"Inicia sesión"})]})]})]})}function V1(){const{user:e,logout:n}=Fe();return t.jsxs("div",{style:{padding:24},children:[t.jsx("h1",{children:"Panel Privado"}),e?t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:["Bienvenido: ",e.email]}),t.jsxs("p",{children:["Roles: ",Array.isArray(e.roles)?e.roles.join(", "):"N/A"]}),t.jsx("button",{onClick:n,children:"Cerrar sesión"})]}):t.jsx("p",{children:"No hay usuario."})]})}function bi(e){if(e==null)return"";try{return String(e).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0000-\u001F\u007F-\u009F]/g,"").replace(/\u00A0/g," ").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/\uFFFD/g,"").replace(/\s+/g," ").trim().toUpperCase()}catch{return String(e).toUpperCase()}}function M1({label:e,value:n,hint:r}){return t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"text-sm opacity-70",style:{fontSize:12,opacity:.8},children:e}),t.jsx("div",{className:"text-2xl font-semibold",style:{fontSize:28,fontWeight:700},children:n}),r&&t.jsx("div",{className:"text-xs opacity-60",style:{fontSize:12,opacity:.7},children:r})]})}function _u(){return t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Mensajes no leídos"}),t.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin datos."})]})}function Vu({refreshKey:e=0}){const{user:n}=Fe(),r=j.useMemo(()=>{var s,l,c,d;const a=Array.isArray(n==null?void 0:n.driveFolders)?n.driveFolders.filter(p=>p&&p.url):[],i=(l=(s=import.meta)==null?void 0:s.env)==null?void 0:l.VITE_DEFAULT_DRIVE_FOLDER_URL,o=((d=(c=import.meta)==null?void 0:c.env)==null?void 0:d.VITE_DEFAULT_DRIVE_FOLDER_NAME)||"Carpeta KOOP";return(!a||a.length===0)&&i?[{name:o,url:i}]:a},[n,e]);return t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Documentos recientes"}),r.length===0&&t.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin carpetas asignadas."}),r.length>0&&t.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:8},children:r.map((a,i)=>t.jsxs("li",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.name||"Carpeta de Drive"}),t.jsx("div",{className:"muted",style:{fontSize:12,opacity:.8},children:a.url})]}),t.jsx("a",{className:"btn btn-primary",href:a.url,target:"_blank",rel:"noreferrer","data-drive-folder-url":a.url,children:"Abrir carpeta"})]},(a.url||"")+i))})]})}function Mu({src:e,heightDesktop:n=560,heightMobile:r=480,className:a}){const[i,o]=j.useState(!1),[s,l]=j.useState(!1),c=j.useRef(null);j.useEffect(()=>{try{const x=window.matchMedia("(max-width: 768px)"),y=f=>{o(f.matches),f.matches&&l(!1)};return o(x.matches),x.matches&&l(!1),x.addEventListener?x.addEventListener("change",y):x.addListener&&x.addListener(y),()=>{x.removeEventListener?x.removeEventListener("change",y):x.removeListener&&x.removeListener(y)}}catch{o(!1)}},[]),j.useEffect(()=>{if(!s){c.current!==null&&(document.body.style.overflow=c.current,c.current=null);return}return c.current===null&&(c.current=document.body.style.overflow||""),document.body.style.overflow="hidden",()=>{c.current!==null?(document.body.style.overflow=c.current,c.current=null):document.body.style.overflow=""}},[s]);const d=j.useMemo(()=>{try{return new URL(e,window.location.origin).toString()}catch{return e}},[e]),p=()=>l(x=>!x),u=["Te compartimos que ya tienes acceso a nuestro Portal de Clientes Koop.","","Desde alli podras:","- Consultar el estado de tus procesos en tiempo real.","- Descargar documentos relevantes de manera segura.","- Recibir notificaciones de audiencias y plazos importantes.","- Comunicarte directamente con nuestro equipo para resolver cualquier inquietud.","","Estamos seguros de que esta alianza marcara un camino de crecimiento y tranquilidad."].join(`
`);if(i)return t.jsxs("div",{className:a,style:{width:"100%",height:r,display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{padding:16},children:[t.jsx("div",{style:{fontWeight:700,marginBottom:8},children:"Gracias por elegirnos. Nos alegra iniciar este camino contigo."}),t.jsx("div",{className:"muted",style:{marginBottom:12,whiteSpace:"pre-line"},children:u})]}),t.jsx("div",{style:{marginTop:"auto",padding:16,display:"flex",justifyContent:"flex-end"},children:t.jsx("a",{className:"btn btn-primary",href:d,target:"_blank",rel:"noopener noreferrer",children:"Cordial saludo"})})]});const m=s?{position:"fixed",inset:0,zIndex:1e3,backgroundColor:"rgba(6, 11, 25, 0.92)",padding:"48px 64px",display:"flex",flexDirection:"column",gap:16}:{width:"100%",height:n,position:"relative"},b=s?{flex:1,position:"relative",borderRadius:16,overflow:"hidden",boxShadow:"0 24px 48px rgba(0,0,0,0.45)"}:{width:"100%",height:"100%",position:"relative",borderRadius:12,overflow:"hidden"},v={position:"absolute",top:s?24:12,right:s?24:12,zIndex:1001};return t.jsxs("div",{className:a,style:m,children:[t.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:p,style:v,children:s?"Minimizar":"Maximizar"}),t.jsx("div",{style:b,children:t.jsxs("object",{data:e,type:"application/pdf",width:"100%",height:"100%",style:{width:"100%",height:"100%"},children:[t.jsx("iframe",{title:"PDF",src:d,style:{width:"100%",height:"100%",border:0}}),t.jsxs("div",{style:{padding:16},children:["No se pudo mostrar el PDF. ",t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:"Abrir en nueva pestana"})]})]})})]})}function B1(){const{user:e}=Fe(),n=bi((e==null?void 0:e.name)||"Dashboard"),[r,a]=j.useState(null),[i,o]=j.useState(!0),[s,l]=j.useState(null),[c]=j.useState(0);return j.useEffect(()=>{(async()=>{var d;try{const{data:p}=await kn.get("/kpis/overview");a(p)}catch(p){l(((d=p==null?void 0:p.response)==null?void 0:d.data)||(p==null?void 0:p.message))}finally{o(!1)}})()},[]),t.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:1200},children:[t.jsx("div",{className:"dash-header",children:t.jsx("div",{className:"dash-title",children:n})}),t.jsx("style",{children:`
          .kpi-grid { display:grid; grid-template-columns: 1fr; gap: 16px; }
          @media (min-width: 640px) { .kpi-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (min-width: 1024px) { .kpi-grid { grid-template-columns: repeat(4, 1fr); } }
          .main-grid { display:grid; grid-template-columns: 1fr; gap: 16px; }
          @media (min-width: 1024px) { .main-grid { grid-template-columns: repeat(3, 1fr); } }
          .main-left { grid-column: span 1; }
          @media (min-width: 1024px) { .main-left { grid-column: span 2; } }
        `}),t.jsxs("div",{className:"dash-item",style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx("button",{className:"btn btn-primary",onClick:()=>{const d=document.querySelector("[data-drive-folder-url]"),p=d==null?void 0:d.getAttribute("data-drive-folder-url");p&&window.open(p,"_blank","noopener")},title:"Radicar documentacion inicial",children:"Radicar documentacion inicial"}),t.jsx(E,{className:"btn btn-primary btn-sm",to:"/mi-expediente",title:"Ir a Mi expediente",children:"Mi expediente"})]}),t.jsx("div",{className:"kpi-grid",style:{marginTop:16},children:t.jsx(M1,{label:"Casos activos",value:(r==null?void 0:r.activeCases)??(i?"...":0)})}),t.jsxs("div",{className:"main-grid",style:{marginTop:16},children:[t.jsx("div",{className:"main-left",children:t.jsx("div",{className:"dash-item",style:{padding:0},children:t.jsx(Mu,{src:"/Saludobienvenidaportal.pdf",heightDesktop:560,heightMobile:480})})}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Facturas vencidas"}),t.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:t.jsx("button",{className:"btn btn-primary","aria-label":"Pagar factura",children:"Pagar factura"})})]}),t.jsx(_u,{})]})]}),t.jsx("div",{style:{marginTop:16},children:t.jsx(Vu,{refreshKey:c})}),s&&t.jsx("pre",{className:"text-red-600 text-sm mt-2",style:{color:"#fecaca",background:"#7f1d1d",padding:12,borderRadius:8,marginTop:12},children:typeof s=="string"?s:JSON.stringify(s,null,2)})]})})}function F1(){const{user:e}=Fe(),n=bi((e==null?void 0:e.name)||"Bienvenido");return t.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:1080},children:[t.jsx("div",{className:"dash-header",children:t.jsx("div",{className:"dash-title",children:n})}),t.jsxs("div",{className:"dash-item",style:{marginBottom:16},children:[t.jsx("p",{style:{marginBottom:8},children:"Aqui puedes revisar tu material mas reciente y mantenerte al dia con tu caso. Si necesitas asistencia adicional, nuestro equipo esta disponible para ayudarte."}),t.jsx(E,{className:"btn btn-primary btn-sm",to:"/mis-casos",children:"Ver mis casos"})]}),t.jsx("div",{className:"dash-item",style:{padding:0,marginBottom:16},children:t.jsx(Mu,{src:"/Saludobienvenidaportal.pdf",heightDesktop:480,heightMobile:420})}),t.jsxs("div",{style:{display:"grid",gap:16},children:[t.jsx(_u,{}),t.jsx(Vu,{})]})]})})}function Dc(){return t.jsx("div",{className:"dash-page",style:{background:"linear-gradient(rgba(24,31,56,0.9), rgba(15,23,42,0.95))",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",padding:24},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:520},children:[t.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),t.jsx("p",{style:{marginTop:12},children:"Tu cuenta no tiene un rol asignado para ingresar al portal. Comunicate con el administrador para solicitar acceso."})]})})}function Pc(e,n){return e!=null&&e.roles&&Array.isArray(e.roles)?e.roles.includes(n):!1}function Z1(){const{user:e,loading:n}=Fe(),r=j.useMemo(()=>e?Pc(e,"admin")?"admin":Pc(e,"user")?"user":"no-access":"none",[e]);return n&&!e?null:r==="admin"?t.jsx(B1,{}):r==="user"?t.jsx(F1,{}):r==="no-access"?t.jsx(Dc,{}):t.jsx(Dc,{})}async function U1(e=10){const{data:n}=await kn.get("/docs/recent",{params:{limit:e}});return n}async function K1(e){const n=new FormData;n.append("file",e);const{data:r}=await kn.post("/docs/upload",n,{headers:{"Content-Type":"multipart/form-data"}});return r}async function H1(e,n=600){const{data:r}=await kn.get("/docs/download-url",{params:{key:e,expires:n}});return r}function _c(){const[e,n]=j.useState("docs"),{user:r}=Fe(),a=bi((r==null?void 0:r.name)||""),[i,o]=j.useState([]),[s,l]=j.useState(!1),[c,d]=j.useState(null),[p,u]=j.useState(null),m=j.useRef(null),b=async()=>{l(!0),d(null),u(null);try{const f=await U1(20);o(Array.isArray(f==null?void 0:f.items)?f.items:[]),f!=null&&f.warning&&u(f.warning)}catch(f){d((f==null?void 0:f.message)||"Error cargando documentos")}finally{l(!1)}};j.useEffect(()=>{e==="docs"&&b()},[e]);const v=()=>{var f;return(f=m.current)==null?void 0:f.click()},x=async f=>{var g,k;const h=(k=(g=f.target)==null?void 0:g.files)==null?void 0:k[0];if(h)try{l(!0),d(null);const C=await K1(h);C!=null&&C.file&&o(S=>[C.file,...S]),await b()}catch(C){d((C==null?void 0:C.message)||"Error subiendo documento")}finally{l(!1);try{f.target.value=null}catch{}}},y=async(f,h)=>{try{const{url:g}=await H1(f,600);window.open(g||h,"_blank")}catch{h&&window.open(h,"_blank")}};return t.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1320},children:[t.jsx("div",{className:"dash-header",children:t.jsx("div",{className:"dash-title",children:"Mi expediente"})}),t.jsxs("div",{className:"dash-item me-subbar",children:[t.jsxs("div",{className:"me-hello",children:["Bienvenido: ",a]}),t.jsxs("select",{className:"me-select","aria-label":"Tipo de búsqueda",children:[t.jsx("option",{children:"Procesos judiciales"}),t.jsx("option",{children:"Demandas"}),t.jsx("option",{children:"Audiencias"})]}),t.jsx("input",{className:"me-input",placeholder:"Buscar..."}),t.jsxs("div",{className:"me-actions",children:[t.jsx("input",{ref:m,type:"file",style:{display:"none"},onChange:x}),t.jsx("button",{className:"btn btn-primary",onClick:v,disabled:s,children:s?"Subiendo...":"Radicar documento"}),t.jsx("button",{className:"btn btn-secondary",children:"Ver información"})]})]}),t.jsxs("div",{className:"me-layout",children:[t.jsxs("aside",{className:"me-left dash-item",children:[t.jsx("div",{className:"me-head",children:"ESPECIALIDAD: LABORAL"}),t.jsxs("div",{className:"me-tree",children:[t.jsxs("details",{open:!0,children:[t.jsxs("summary",{children:[t.jsx("span",{className:"me-chev",children:"›"}),t.jsx("span",{children:"JUZGADO 009 MUNICIPAL DE PEQUEÑAS CAUSAS"})]}),t.jsxs("div",{className:"me-leaf",children:[t.jsx("div",{children:"110014105009-20250011400"}),t.jsx("div",{className:"me-tag",children:"Cuadernos"})]})]}),t.jsxs("details",{open:!0,children:[t.jsxs("summary",{children:[t.jsx("span",{className:"me-chev",children:"›"}),t.jsx("span",{children:"JUZGADO 003 LABORAL DEL CIRCUITO"})]}),t.jsxs("div",{className:"me-leaf",children:[t.jsx("div",{children:"110014105009-2025011401"}),t.jsx("div",{className:"me-tag",children:"Cuadernos"})]})]}),t.jsxs("details",{children:[t.jsxs("summary",{children:[t.jsx("span",{className:"me-chev",children:"›"}),t.jsx("span",{children:"JUZGADO 015 MUNICIPAL DE PEQUEÑAS CAUSAS"})]}),t.jsxs("div",{className:"me-leaf",children:[t.jsx("div",{children:"110014105015-20240208700"}),t.jsx("div",{className:"me-tag",children:"Cuadernos"})]})]}),t.jsxs("details",{children:[t.jsxs("summary",{children:[t.jsx("span",{className:"me-chev",children:"›"}),t.jsx("span",{children:"JUZGADO 048 LABORAL DEL CIRCUITO"})]}),t.jsxs("div",{className:"me-leaf",children:[t.jsx("div",{children:"110013105048-2024090000"}),t.jsx("div",{className:"me-tag",children:"Cuadernos"})]})]})]})]}),t.jsxs("main",{className:"me-center dash-item",children:[t.jsxs("div",{className:"me-tabs",children:[t.jsx("div",{className:`me-tab ${e==="docs"?"active":""}`,onClick:()=>n("docs"),role:"button",tabIndex:0,children:"Documentos del Proceso"}),t.jsx("div",{className:`me-tab ${e==="aud"?"active":""}`,onClick:()=>n("aud"),role:"button",tabIndex:0,children:"Audiencias"})]}),e==="docs"&&t.jsxs("div",{className:"me-table-wrap",children:[c&&t.jsx("div",{style:{color:"#ef4444",padding:"8px 12px"},children:String(c)}),p&&t.jsxs("div",{style:{color:"#f59e0b",padding:"8px 12px"},children:["Aviso: ",String(p)==="S3_LIST_FORBIDDEN"?"No hay permisos para listar el bucket. Tus documentos siguen disponibles si conservas el enlace.":String(p)]}),t.jsxs("table",{className:"me-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{width:42},children:t.jsx("input",{type:"checkbox"})}),t.jsx("th",{children:"Fecha de registro"}),t.jsx("th",{children:"Documento"}),t.jsx("th",{children:"Tipo"}),t.jsx("th",{children:"Tamaño"}),t.jsx("th",{children:"Acciones"})]})}),t.jsxs("tbody",{children:[i.length===0&&t.jsx("tr",{children:t.jsx("td",{colSpan:6,style:{color:"#9fb3cc"},children:s?"Cargando...":"No hay documentos para mostrar"})}),i.map(f=>{const h=f.createdTime?new Date(f.createdTime):null,g=f.name||(f.key||"").split("/").pop(),k=typeof f.size=="number"?Math.max(1,Math.round(f.size/1024)):null,C=f.mimeType||(g&&g.toLowerCase().endsWith(".pdf")?"application/pdf":void 0);return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("input",{type:"checkbox"})}),t.jsx("td",{children:h?h.toLocaleString():"-"}),t.jsx("td",{title:g,children:g}),t.jsx("td",{children:C?C.split("/")[1]||C:"-"}),t.jsx("td",{children:k?`${k} KB`:"-"}),t.jsx("td",{children:t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(f.key,f.downloadUrl||f.webContentLink||f.webViewLink),children:"Descargar"})})]},f.key||f.id)})]})]})]}),e==="aud"&&t.jsx("div",{className:"me-table-wrap",children:t.jsxs("table",{className:"me-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Fecha"}),t.jsx("th",{children:"Actuación"}),t.jsx("th",{children:"Juzgado"}),t.jsx("th",{children:"Estado"})]})}),t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:"2025-09-03 08:00"}),t.jsx("td",{children:"Audiencia inicial"}),t.jsx("td",{children:"JDO 003 Laboral"}),t.jsx("td",{children:t.jsx("span",{className:"me-badge me-badge-success",children:"Agendada"})})]})})]})})]}),t.jsxs("aside",{className:"me-right dash-item",children:[t.jsx("div",{className:"me-head",children:"Datos del Proceso Judicial"}),t.jsxs("div",{className:"me-right-content",children:[t.jsxs("div",{className:"me-proc-grid",children:[t.jsx("div",{className:"me-tag",children:"Radicado"}),t.jsx("div",{children:"110014105009-20250011400"}),t.jsx("div",{className:"me-tag",children:"Clase"}),t.jsx("div",{children:"Laboral – Ordinario"}),t.jsx("div",{className:"me-tag",children:"Demandante"}),t.jsx("div",{children:"Juan Pérez"}),t.jsx("div",{className:"me-tag",children:"Demandado"}),t.jsx("div",{children:"Acme S.A.S."}),t.jsx("div",{className:"me-tag",children:"Juzgado"}),t.jsx("div",{children:"JDO 009 MPC"}),t.jsx("div",{className:"me-tag",children:"Estado"}),t.jsx("div",{children:"En trámite"})]}),t.jsx("hr",{className:"me-hr"}),t.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:"Descargar expediente"})]})]})]})]})})}const $1=[{id:"CJ-001",titulo:"Acción de tutela — derecho a la salud",estado:"En curso",juzgado:"Juzgado 12 Municipal",fecha:"2025-07-10"},{id:"CJ-002",titulo:"Proceso laboral — despido sin justa causa",estado:"Audiencia programada",juzgado:"Juzgado 3 Laboral del Circuito",fecha:"2025-08-02"},{id:"CJ-003",titulo:"Responsabilidad fiscal — recursos",estado:"Recurso interpuesto",juzgado:"Contraloría Distrital",fecha:"2025-08-21"},{id:"CJ-004",titulo:"Proceso de alimentos — fijación de cuota",estado:"Admitido",juzgado:"Juzgado 5 de Familia",fecha:"2025-09-01"}];function q1(){const[e,n]=j.useState(null);j.useEffect(()=>{if(!e)return;const i=o=>{o.key==="Escape"&&n(null)};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[e]);const r=j.useMemo(()=>["Reunión de documentos e investigación","En escrito de demanda","En radicación","Al despacho: en espera de decisión del juez"],[]),a=i=>{if(!i)return 1;const o=String(i).toLowerCase();return/(reun|investig)/.test(o)?1:/(escrito|demanda)/.test(o)?2:/(radicaci[óo]n|admitid)/.test(o)?3:/(despacho|juez|decisi[óo]n|audiencia|recurso)/.test(o)?4:(/curso/.test(o),2)};return t.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[t.jsxs("div",{className:"dash-card",style:{maxWidth:900},children:[t.jsx("div",{className:"dash-header",children:t.jsx("div",{className:"dash-title",children:"Mis casos"})}),t.jsx("div",{className:"dash-item",style:{padding:0},children:t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cases-table",style:{width:"100%",borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{background:"#1e2a3a"},children:[t.jsx("th",{style:Jr,children:"Radicado"}),t.jsx("th",{style:Jr,children:"Título"}),t.jsx("th",{style:Jr,children:"Estado"}),t.jsx("th",{style:Jr,children:"Despacho"}),t.jsx("th",{style:Jr,children:"Última actuación"})]})}),t.jsx("tbody",{children:$1.map(i=>t.jsxs("tr",{onClick:()=>n(i),className:"row-clickable",children:[t.jsx("td",{style:Qr,children:i.id}),t.jsx("td",{style:Qr,children:i.titulo}),t.jsx("td",{style:Qr,children:t.jsx("span",{className:"badge",style:Vc(i.estado),children:i.estado})}),t.jsx("td",{style:Qr,children:i.juzgado}),t.jsx("td",{style:Qr,children:new Date(i.fecha).toLocaleDateString()})]},i.id))})]})})})]}),e&&t.jsx("div",{className:"modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"caso-title",onClick:i=>{i.target===i.currentTarget&&n(null)},children:t.jsxs("div",{className:"modal-card",children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("div",{className:"modal-title",id:"caso-title",children:e.titulo}),t.jsx("button",{className:"btn btn-primary",onClick:()=>n(null),children:"Cerrar"})]}),t.jsxs("div",{className:"modal-body",children:[t.jsxs("div",{className:"case-grid",children:[t.jsxs("div",{children:[t.jsx("div",{className:"muted",children:"Radicado"}),t.jsx("div",{children:e.id})]}),t.jsxs("div",{children:[t.jsx("div",{className:"muted",children:"Estado"}),t.jsx("div",{children:t.jsx("span",{className:"badge",style:Vc(e.estado),children:e.estado})})]}),t.jsxs("div",{children:[t.jsx("div",{className:"muted",children:"Despacho"}),t.jsx("div",{children:e.juzgado})]}),t.jsxs("div",{children:[t.jsx("div",{className:"muted",children:"Última actuación"}),t.jsx("div",{children:new Date(e.fecha).toLocaleString()})]})]}),t.jsx("div",{className:"timeline",children:r.map((i,o)=>{const s=o+1,l=a(e.estado),c=s<l,d=s===l;return t.jsxs("div",{className:`timeline-step ${c?"done":""} ${d?"active":""}`,children:[t.jsx("div",{className:`dot ${c?"done":""} ${d?"active":""}`}),s<r.length&&t.jsx("div",{className:`bar ${s<l?"done":""}`}),t.jsxs("div",{className:"label",children:[s,". ",i]})]},s)})})]})]})})]})}const Jr={textAlign:"left",padding:"12px 14px",borderBottom:"1px solid #394b61",fontWeight:600,color:"#e2e8f0",whiteSpace:"nowrap"},Qr={padding:"12px 14px",borderBottom:"1px solid #34465a",color:"#e5edf7",verticalAlign:"top"};function Vc(e){let n="#3b82f6";return/curso/i.test(e)&&(n="#f59e0b"),/programada|programado/i.test(e)&&(n="#10b981"),/recurso/i.test(e)&&(n="#8b5cf6"),{display:"inline-block",padding:"4px 8px",borderRadius:8,background:n,color:"#fff",fontSize:12,fontWeight:600}}function W1(){var a,i;const{logout:e}=Fe(),n=tn();j.useEffect(()=>{(async()=>{try{await e()}catch{}try{sessionStorage.removeItem("koop_hasVisited")}catch{}try{document.documentElement.classList.remove("skip-splash")}catch{}})()},[e]);const r=(i=(a=n.state)==null?void 0:a.from)==null?void 0:i.pathname;return t.jsx(ie,{to:"/",replace:!0,state:{from:r}})}function Xr({children:e}){const{isAuthenticated:n}=Fe(),r=tn();return n?e:t.jsx(ie,{to:"/login",replace:!0,state:{from:r}})}function Y1(){const{isAuthenticated:e,user:n,logout:r}=Fe(),[a,i]=j.useState(!1),[o,s]=j.useState(!1),[l,c]=j.useState(!1);_r();const d=()=>{s(u=>{const m=!u;return m||c(!1),m})},p=u=>{const m=u.target.closest("a");m&&!m.classList.contains("drop-btn")&&(s(!1),c(!1))};return t.jsx("nav",{className:"navbar",children:t.jsxs("div",{className:"navbar-content",children:[t.jsxs(E,{to:"/",className:"logo",children:[t.jsx("img",{src:"/Koop Logo.png",alt:"Logo Koop",className:"logo-img"}),t.jsx("div",{className:"logo-text",children:"KOOP STRATEGIC ADVISORY"})]}),t.jsxs("div",{className:"menu-toggle",id:"menu-toggle",onClick:d,"aria-controls":"nav-menu","aria-expanded":o?"true":"false",role:"button",children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]}),t.jsxs("div",{className:`nav-menu ${o?"open":""}`,id:"nav-menu",onClick:p,children:[t.jsxs(t.Fragment,{children:[t.jsx(E,{to:"/#inicio",children:"INICIO"}),t.jsxs("div",{className:`dropdown ${l?"open":""}`,children:[t.jsx(E,{to:"/#areas",className:"drop-btn",id:"areas-toggle","aria-expanded":l?"true":"false",onClick:u=>{u.preventDefault(),c(m=>!m)},children:"ÁREAS DE PRÁCTICA"}),t.jsxs("div",{className:"dropdown-content",children:[t.jsxs("div",{className:"dropdown-group",children:[t.jsx(E,{to:"/derecho",className:"dropdown-title",children:"Derecho"}),t.jsx(E,{to:"/derecho-laboral",children:"Derecho Laboral"}),t.jsx(E,{to:"/derecho-penal",children:"Derecho Penal"}),t.jsx(E,{to:"/tramites-notariales",children:"Trámites notariales"}),t.jsx(E,{to:"/derecho-administrativo",children:"Derecho Administrativo"}),t.jsx(E,{to:"/derecho-familia",children:"Derecho de Familia"}),t.jsx(E,{to:"/contratacion-publica",children:"Contratación Pública"}),t.jsx(E,{to:"/resolucion-disputas",children:"Resolución de Disputas"}),t.jsx(E,{to:"/acciones-de-tutela",children:"Acciones de Tutela"}),t.jsx(E,{to:"/insolvencia",children:"Insolvencia"})]}),t.jsxs("div",{className:"dropdown-group",children:[t.jsx(E,{to:"/contabilidad",className:"dropdown-title",children:"Contabilidad"}),t.jsx(E,{to:"/auditoria",children:"Auditoría"}),t.jsx(E,{to:"/impuestos",children:"Impuestos"}),t.jsx(E,{to:"/asesoria-contable",children:"Asesoría Contable"})]})]})]}),!e&&t.jsx(E,{to:"/#vision",children:"NUESTRA VISIÓN"})]}),e?t.jsxs("div",{className:`dropdown ${a?"open":""}`,children:[t.jsx("button",{className:"drop-btn","aria-haspopup":"true","aria-expanded":a?"true":"false",onClick:()=>i(u=>!u),children:bi((n==null?void 0:n.name)||"Mi cuenta")}),t.jsx("div",{className:"dropdown-content",children:t.jsxs("div",{className:"dropdown-group",children:[t.jsx(E,{to:"/dashboard",children:"Perfil"}),t.jsx(E,{to:"/mi-expediente",children:"Mi expediente"}),t.jsx(E,{to:"/mis-casos",children:"Mis casos"}),t.jsx(E,{to:"/logout",children:"Cerrar sesión"})]})})]}):t.jsx(E,{to:"/login",className:"koop-cta","aria-label":"CLIENTE KOOP",children:"CLIENTE KOOP".split("").map((u,m)=>t.jsx("span",{className:"letter",style:{"--i":m},children:u===" "?" ":u},m))})]})]})})}function G1(){const[e,n]=j.useState(null),r=()=>{const a=tn(),{isAuthenticated:i}=Fe(),o=a.pathname.toLowerCase(),s=o.startsWith("/login")||o.startsWith("/register");return t.jsxs(t.Fragment,{children:[!s&&t.jsx(Y1,{}),t.jsxs(l0,{children:[t.jsx(P,{path:"/",element:t.jsx(j0,{})}),t.jsx(P,{path:"/derecho",element:t.jsx(C0,{})}),t.jsx(P,{path:"/contabilidad",element:t.jsx(E0,{})}),t.jsx(P,{path:"/auditoria",element:t.jsx(A0,{})}),t.jsx(P,{path:"/derecho-administrativo",element:t.jsx(T0,{})}),t.jsx(P,{path:"/derecho-familia",element:t.jsx(O0,{})}),t.jsx(P,{path:"/derecho-laboral",element:t.jsx(V0,{})}),t.jsx(P,{path:"/derecho-penal",element:t.jsx(B0,{})}),t.jsx(P,{path:"/impuestos",element:t.jsx(Z0,{})}),t.jsx(P,{path:"/asesoria-contable",element:t.jsx(K0,{})}),t.jsx(P,{path:"/planeacion-patrimonial",element:t.jsx(ie,{to:"/asesoria-contable",replace:!0})}),t.jsx(P,{path:"/privacidad",element:t.jsx($0,{})}),t.jsx(P,{path:"/tramites-notariales",element:t.jsx(W0,{})}),t.jsx(P,{path:"/acciones-de-tutela",element:t.jsx(G0,{})}),t.jsx(P,{path:"/login",element:i?t.jsx(ie,{to:"/",replace:!0}):t.jsx(P1,{})}),t.jsx(P,{path:"/register",element:t.jsx(_1,{})}),t.jsx(P,{path:"/logout",element:t.jsx(W1,{})}),t.jsx(P,{path:"/panel",element:t.jsx(Xr,{children:t.jsx(V1,{})})}),t.jsx(P,{path:"/dashboard",element:t.jsx(Xr,{children:t.jsx(Z1,{})})}),t.jsx(P,{path:"/mi-expediente",element:t.jsx(Xr,{children:t.jsx(_c,{})})}),t.jsx(P,{path:"/dashboard2",element:t.jsx(Xr,{children:t.jsx(_c,{})})}),t.jsx(P,{path:"/mis-casos",element:t.jsx(Xr,{children:t.jsx(q1,{})})}),t.jsx(P,{path:"/index.html",element:t.jsx(ie,{to:"/",replace:!0})}),t.jsx(P,{path:"/derecho.html",element:t.jsx(ie,{to:"/derecho",replace:!0})}),t.jsx(P,{path:"/contabilidad.html",element:t.jsx(ie,{to:"/contabilidad",replace:!0})}),t.jsx(P,{path:"/auditoria.html",element:t.jsx(ie,{to:"/auditoria",replace:!0})}),t.jsx(P,{path:"/derecho-administrativo.html",element:t.jsx(ie,{to:"/derecho-administrativo",replace:!0})}),t.jsx(P,{path:"/derecho-familia.html",element:t.jsx(ie,{to:"/derecho-familia",replace:!0})}),t.jsx(P,{path:"/derecho-laboral.html",element:t.jsx(ie,{to:"/derecho-laboral",replace:!0})}),t.jsx(P,{path:"/derecho-penal.html",element:t.jsx(ie,{to:"/derecho-penal",replace:!0})}),t.jsx(P,{path:"/impuestos.html",element:t.jsx(ie,{to:"/impuestos",replace:!0})}),t.jsx(P,{path:"/planeacion-patrimonial.html",element:t.jsx(ie,{to:"/asesoria-contable",replace:!0})}),t.jsx(P,{path:"/privacidad.html",element:t.jsx(ie,{to:"/privacidad",replace:!0})}),t.jsx(P,{path:"/tramites-notariales.html",element:t.jsx(ie,{to:"/tramites-notariales",replace:!0})}),t.jsx(P,{path:"/acciones-de-tutela.html",element:t.jsx(ie,{to:"/acciones-de-tutela",replace:!0})})]})]})};return t.jsx(D1,{children:t.jsx(t.Fragment,{children:t.jsx(m0,{children:t.jsx(r,{})})})})}try{"scrollRestoration"in history&&(history.scrollRestoration="manual")}catch{}const J1=Jp(document.getElementById("root"));J1.render(t.jsx(G1,{}));
