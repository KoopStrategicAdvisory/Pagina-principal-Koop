function Xf(e,n){for(var t=0;t<n.length;t++){const a=n[t];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(a,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function em(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Np={exports:{}},lo={},Sp={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),nm=Symbol.for("react.portal"),rm=Symbol.for("react.fragment"),tm=Symbol.for("react.strict_mode"),am=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),om=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),lm=Symbol.for("react.suspense"),cm=Symbol.for("react.memo"),dm=Symbol.for("react.lazy"),_c=Symbol.iterator;function pm(e){return e===null||typeof e!="object"?null:(e=_c&&e[_c]||e["@@iterator"],typeof e=="function"?e:null)}var Ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ap=Object.assign,Ip={};function Bt(e,n,t){this.props=e,this.context=n,this.refs=Ip,this.updater=t||Ep}Bt.prototype.isReactComponent={};Bt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Bt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tp(){}Tp.prototype=Bt.prototype;function Cl(e,n,t){this.props=e,this.context=n,this.refs=Ip,this.updater=t||Ep}var Nl=Cl.prototype=new Tp;Nl.constructor=Cl;Ap(Nl,Bt.prototype);Nl.isPureReactComponent=!0;var Bc=Array.isArray,zp=Object.prototype.hasOwnProperty,Sl={current:null},Rp={key:!0,ref:!0,__self:!0,__source:!0};function Op(e,n,t){var a,i={},o=null,s=null;if(n!=null)for(a in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)zp.call(n,a)&&!Rp.hasOwnProperty(a)&&(i[a]=n[a]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:Ba,type:e,key:o,ref:s,props:i,_owner:Sl.current}}function um(e,n){return{$$typeof:Ba,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function El(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ba}function hm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Vc=/\/+/g;function Fo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hm(""+e.key):n.toString(36)}function yi(e,n,t,a,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ba:case nm:s=!0}}if(s)return s=e,i=i(s),e=a===""?"."+Fo(s,0):a,Bc(i)?(t="",e!=null&&(t=e.replace(Vc,"$&/")+"/"),yi(i,n,t,"",function(d){return d})):i!=null&&(El(i)&&(i=um(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Vc,"$&/")+"/")+e)),n.push(i)),1;if(s=0,a=a===""?".":a+":",Bc(e))for(var l=0;l<e.length;l++){o=e[l];var c=a+Fo(o,l);s+=yi(o,n,t,c,i)}else if(c=pm(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=a+Fo(o,l++),s+=yi(o,n,t,c,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function ei(e,n,t){if(e==null)return e;var a=[],i=0;return yi(e,a,"","",function(o){return n.call(t,o,i++)}),a}function fm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var an={current:null},wi={transition:null},mm={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:wi,ReactCurrentOwner:Sl};function Dp(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:ei,forEach:function(e,n,t){ei(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ei(e,function(){n++}),n},toArray:function(e){return ei(e,function(n){return n})||[]},only:function(e){if(!El(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Bt;fe.Fragment=rm;fe.Profiler=am;fe.PureComponent=Cl;fe.StrictMode=tm;fe.Suspense=lm;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;fe.act=Dp;fe.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Ap({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=Sl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)zp.call(n,c)&&!Rp.hasOwnProperty(c)&&(a[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)a.children=t;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:Ba,type:e.type,key:i,ref:o,props:a,_owner:s}};fe.createContext=function(e){return e={$$typeof:om,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:im,_context:e},e.Consumer=e};fe.createElement=Op;fe.createFactory=function(e){var n=Op.bind(null,e);return n.type=e,n};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:sm,render:e}};fe.isValidElement=El;fe.lazy=function(e){return{$$typeof:dm,_payload:{_status:-1,_result:e},_init:fm}};fe.memo=function(e,n){return{$$typeof:cm,type:e,compare:n===void 0?null:n}};fe.startTransition=function(e){var n=wi.transition;wi.transition={};try{e()}finally{wi.transition=n}};fe.unstable_act=Dp;fe.useCallback=function(e,n){return an.current.useCallback(e,n)};fe.useContext=function(e){return an.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return an.current.useDeferredValue(e)};fe.useEffect=function(e,n){return an.current.useEffect(e,n)};fe.useId=function(){return an.current.useId()};fe.useImperativeHandle=function(e,n,t){return an.current.useImperativeHandle(e,n,t)};fe.useInsertionEffect=function(e,n){return an.current.useInsertionEffect(e,n)};fe.useLayoutEffect=function(e,n){return an.current.useLayoutEffect(e,n)};fe.useMemo=function(e,n){return an.current.useMemo(e,n)};fe.useReducer=function(e,n,t){return an.current.useReducer(e,n,t)};fe.useRef=function(e){return an.current.useRef(e)};fe.useState=function(e){return an.current.useState(e)};fe.useSyncExternalStore=function(e,n,t){return an.current.useSyncExternalStore(e,n,t)};fe.useTransition=function(){return an.current.useTransition()};fe.version="18.3.1";Sp.exports=fe;var u=Sp.exports;const gm=em(u),xm=Xf({__proto__:null,default:gm},[u]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=u,bm=Symbol.for("react.element"),ym=Symbol.for("react.fragment"),wm=Object.prototype.hasOwnProperty,jm=vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,km={key:!0,ref:!0,__self:!0,__source:!0};function Lp(e,n,t){var a,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(a in n)wm.call(n,a)&&!km.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)i[a]===void 0&&(i[a]=n[a]);return{$$typeof:bm,type:e,key:o,ref:s,props:i,_owner:jm.current}}lo.Fragment=ym;lo.jsx=Lp;lo.jsxs=Lp;Np.exports=lo;var r=Np.exports,Pp={exports:{}},yn={},Mp={exports:{}},_p={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(F,J){var ee=F.length;F.push(J);e:for(;0<ee;){var U=ee-1>>>1,W=F[U];if(0<i(W,J))F[U]=J,F[ee]=W,ee=U;else break e}}function t(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var J=F[0],ee=F.pop();if(ee!==J){F[0]=ee;e:for(var U=0,W=F.length,Q=W>>>1;U<Q;){var H=2*(U+1)-1,R=F[H],L=H+1,j=F[L];if(0>i(R,ee))L<W&&0>i(j,R)?(F[U]=j,F[L]=ee,U=L):(F[U]=R,F[H]=ee,U=H);else if(L<W&&0>i(j,ee))F[U]=j,F[L]=ee,U=L;else break e}}return J}function i(F,J){var ee=F.sortIndex-J.sortIndex;return ee!==0?ee:F.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],d=[],p=1,h=null,m=3,w=!1,x=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var J=t(d);J!==null;){if(J.callback===null)a(d);else if(J.startTime<=F)a(d),J.sortIndex=J.expirationTime,n(c,J);else break;J=t(d)}}function N(F){if(y=!1,v(F),!x)if(t(c)!==null)x=!0,ye(z);else{var J=t(d);J!==null&&se(N,J.startTime-F)}}function z(F,J){x=!1,y&&(y=!1,g(A),A=-1),w=!0;var ee=m;try{for(v(J),h=t(c);h!==null&&(!(h.expirationTime>J)||F&&!re());){var U=h.callback;if(typeof U=="function"){h.callback=null,m=h.priorityLevel;var W=U(h.expirationTime<=J);J=e.unstable_now(),typeof W=="function"?h.callback=W:h===t(c)&&a(c),v(J)}else a(c);h=t(c)}if(h!==null)var Q=!0;else{var H=t(d);H!==null&&se(N,H.startTime-J),Q=!1}return Q}finally{h=null,m=ee,w=!1}}var O=!1,_=null,A=-1,Z=5,$=-1;function re(){return!(e.unstable_now()-$<Z)}function te(){if(_!==null){var F=e.unstable_now();$=F;var J=!0;try{J=_(!0,F)}finally{J?oe():(O=!1,_=null)}}else O=!1}var oe;if(typeof f=="function")oe=function(){f(te)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Ee=pe.port2;pe.port1.onmessage=te,oe=function(){Ee.postMessage(null)}}else oe=function(){k(te,0)};function ye(F){_=F,O||(O=!0,oe())}function se(F,J){A=k(function(){F(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,ye(z))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(F){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var ee=m;m=J;try{return F()}finally{m=ee}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,J){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ee=m;m=F;try{return J()}finally{m=ee}},e.unstable_scheduleCallback=function(F,J,ee){var U=e.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?U+ee:U):ee=U,F){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ee+W,F={id:p++,callback:J,priorityLevel:F,startTime:ee,expirationTime:W,sortIndex:-1},ee>U?(F.sortIndex=ee,n(d,F),t(c)===null&&F===t(d)&&(y?(g(A),A=-1):y=!0,se(N,ee-U))):(F.sortIndex=W,n(c,F),x||w||(x=!0,ye(z))),F},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(F){var J=m;return function(){var ee=m;m=J;try{return F.apply(this,arguments)}finally{m=ee}}}})(_p);Mp.exports=_p;var Cm=Mp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm=u,bn=Cm;function B(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bp=new Set,va={};function it(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(va[e]=n,e=0;e<n.length;e++)Bp.add(n[e])}var dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vs=Object.prototype.hasOwnProperty,Sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fc={},Uc={};function Em(e){return vs.call(Uc,e)?!0:vs.call(Fc,e)?!1:Sm.test(e)?Uc[e]=!0:(Fc[e]=!0,!1)}function Am(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Im(e,n,t,a){if(n===null||typeof n>"u"||Am(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function on(e,n,t,a,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){qe[e]=new on(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];qe[n]=new on(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){qe[e]=new on(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){qe[e]=new on(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){qe[e]=new on(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){qe[e]=new on(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){qe[e]=new on(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){qe[e]=new on(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){qe[e]=new on(e,5,!1,e.toLowerCase(),null,!1,!1)});var Al=/[\-:]([a-z])/g;function Il(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Al,Il);qe[n]=new on(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Al,Il);qe[n]=new on(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Al,Il);qe[n]=new on(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){qe[e]=new on(e,1,!1,e.toLowerCase(),null,!1,!1)});qe.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){qe[e]=new on(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tl(e,n,t,a){var i=qe.hasOwnProperty(n)?qe[n]:null;(i!==null?i.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Im(n,t,i,a)&&(t=null),a||i===null?Em(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,a=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var fr=Nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ni=Symbol.for("react.element"),ht=Symbol.for("react.portal"),ft=Symbol.for("react.fragment"),zl=Symbol.for("react.strict_mode"),bs=Symbol.for("react.profiler"),Vp=Symbol.for("react.provider"),Fp=Symbol.for("react.context"),Rl=Symbol.for("react.forward_ref"),ys=Symbol.for("react.suspense"),ws=Symbol.for("react.suspense_list"),Ol=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),Up=Symbol.for("react.offscreen"),Wc=Symbol.iterator;function qt(e){return e===null||typeof e!="object"?null:(e=Wc&&e[Wc]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Object.assign,Uo;function ia(e){if(Uo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Uo=n&&n[1]||""}return`
`+Uo+e}var Wo=!1;function Zo(e,n){if(!e||Wo)return"";Wo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var a=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){a=d}e.call(n.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=a.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Wo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ia(e):""}function Tm(e){switch(e.tag){case 5:return ia(e.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return e=Zo(e.type,!1),e;case 11:return e=Zo(e.type.render,!1),e;case 1:return e=Zo(e.type,!0),e;default:return""}}function js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ft:return"Fragment";case ht:return"Portal";case bs:return"Profiler";case zl:return"StrictMode";case ys:return"Suspense";case ws:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fp:return(e.displayName||"Context")+".Consumer";case Vp:return(e._context.displayName||"Context")+".Provider";case Rl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ol:return n=e.displayName||null,n!==null?n:js(e.type)||"Memo";case vr:n=e._payload,e=e._init;try{return js(e(n))}catch{}}return null}function zm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return js(n);case 8:return n===zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Dr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wp(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rm(e){var n=Wp(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ri(e){e._valueTracker||(e._valueTracker=Rm(e))}function Zp(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Wp(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ks(e,n){var t=n.checked;return ze({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Zc(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=Dr(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function $p(e,n){n=n.checked,n!=null&&Tl(e,"checked",n,!1)}function Cs(e,n){$p(e,n);var t=Dr(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ns(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ns(e,n.type,Dr(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $c(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ns(e,n,t){(n!=="number"||Li(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var oa=Array.isArray;function Nt(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Dr(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ss(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(B(91));return ze({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(B(92));if(oa(t)){if(1<t.length)throw Error(B(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Dr(t)}}function Kp(e,n){var t=Dr(n.value),a=Dr(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function Hc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Hp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Es(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Hp(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ti,qp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ti=ti||document.createElement("div"),ti.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ba(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Om=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(e){Om.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ca[n]=ca[e]})});function Yp(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ca.hasOwnProperty(e)&&ca[e]?(""+n).trim():n+"px"}function Gp(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,i=Yp(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,i):e[t]=i}}var Dm=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function As(e,n){if(n){if(Dm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(B(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(B(61))}if(n.style!=null&&typeof n.style!="object")throw Error(B(62))}}function Is(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ts=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zs=null,St=null,Et=null;function qc(e){if(e=Ua(e)){if(typeof zs!="function")throw Error(B(280));var n=e.stateNode;n&&(n=fo(n),zs(e.stateNode,e.type,n))}}function Jp(e){St?Et?Et.push(e):Et=[e]:St=e}function Qp(){if(St){var e=St,n=Et;if(Et=St=null,qc(e),n)for(e=0;e<n.length;e++)qc(n[e])}}function Xp(e,n){return e(n)}function eu(){}var $o=!1;function nu(e,n,t){if($o)return e(n,t);$o=!0;try{return Xp(e,n,t)}finally{$o=!1,(St!==null||Et!==null)&&(eu(),Qp())}}function ya(e,n){var t=e.stateNode;if(t===null)return null;var a=fo(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(B(231,n,typeof t));return t}var Rs=!1;if(dr)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{Rs=!1}function Lm(e,n,t,a,i,o,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(p){this.onError(p)}}var da=!1,Pi=null,Mi=!1,Os=null,Pm={onError:function(e){da=!0,Pi=e}};function Mm(e,n,t,a,i,o,s,l,c){da=!1,Pi=null,Lm.apply(Pm,arguments)}function _m(e,n,t,a,i,o,s,l,c){if(Mm.apply(this,arguments),da){if(da){var d=Pi;da=!1,Pi=null}else throw Error(B(198));Mi||(Mi=!0,Os=d)}}function ot(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ru(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Yc(e){if(ot(e)!==e)throw Error(B(188))}function Bm(e){var n=e.alternate;if(!n){if(n=ot(e),n===null)throw Error(B(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Yc(i),e;if(o===a)return Yc(i),n;o=o.sibling}throw Error(B(188))}if(t.return!==a.return)t=i,a=o;else{for(var s=!1,l=i.child;l;){if(l===t){s=!0,t=i,a=o;break}if(l===a){s=!0,a=i,t=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===t){s=!0,t=o,a=i;break}if(l===a){s=!0,a=o,t=i;break}l=l.sibling}if(!s)throw Error(B(189))}}if(t.alternate!==a)throw Error(B(190))}if(t.tag!==3)throw Error(B(188));return t.stateNode.current===t?e:n}function tu(e){return e=Bm(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=au(e);if(n!==null)return n;e=e.sibling}return null}var iu=bn.unstable_scheduleCallback,Gc=bn.unstable_cancelCallback,Vm=bn.unstable_shouldYield,Fm=bn.unstable_requestPaint,Le=bn.unstable_now,Um=bn.unstable_getCurrentPriorityLevel,Ll=bn.unstable_ImmediatePriority,ou=bn.unstable_UserBlockingPriority,_i=bn.unstable_NormalPriority,Wm=bn.unstable_LowPriority,su=bn.unstable_IdlePriority,co=null,nr=null;function Zm(e){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(co,e,void 0,(e.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:Hm,$m=Math.log,Km=Math.LN2;function Hm(e){return e>>>=0,e===0?32:31-($m(e)/Km|0)|0}var ai=64,ii=4194304;function sa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bi(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var l=s&~i;l!==0?a=sa(l):(o&=s,o!==0&&(a=sa(o)))}else s=t&~i,s!==0?a=sa(s):o!==0&&(a=sa(o));if(a===0)return 0;if(n!==0&&n!==a&&!(n&i)&&(i=a&-a,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-Fn(n),i=1<<t,a|=e[t],n&=~i;return a}function qm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ym(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Fn(o),l=1<<s,c=i[s];c===-1?(!(l&t)||l&a)&&(i[s]=qm(l,n)):c<=n&&(e.expiredLanes|=l),o&=~l}}function Ds(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lu(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function Ko(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Va(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Fn(n),e[n]=t}function Gm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Fn(t),o=1<<i;n[i]=0,a[i]=-1,e[i]=-1,t&=~o}}function Pl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-Fn(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}var be=0;function cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var du,Ml,pu,uu,hu,Ls=!1,oi=[],Nr=null,Sr=null,Er=null,wa=new Map,ja=new Map,yr=[],Jm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jc(e,n){switch(e){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":wa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(n.pointerId)}}function Gt(e,n,t,a,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Ua(n),n!==null&&Ml(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Qm(e,n,t,a,i){switch(n){case"focusin":return Nr=Gt(Nr,e,n,t,a,i),!0;case"dragenter":return Sr=Gt(Sr,e,n,t,a,i),!0;case"mouseover":return Er=Gt(Er,e,n,t,a,i),!0;case"pointerover":var o=i.pointerId;return wa.set(o,Gt(wa.get(o)||null,e,n,t,a,i)),!0;case"gotpointercapture":return o=i.pointerId,ja.set(o,Gt(ja.get(o)||null,e,n,t,a,i)),!0}return!1}function fu(e){var n=Kr(e.target);if(n!==null){var t=ot(n);if(t!==null){if(n=t.tag,n===13){if(n=ru(t),n!==null){e.blockedOn=n,hu(e.priority,function(){pu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ji(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ps(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Ts=a,t.target.dispatchEvent(a),Ts=null}else return n=Ua(t),n!==null&&Ml(n),e.blockedOn=t,!1;n.shift()}return!0}function Qc(e,n,t){ji(e)&&t.delete(n)}function Xm(){Ls=!1,Nr!==null&&ji(Nr)&&(Nr=null),Sr!==null&&ji(Sr)&&(Sr=null),Er!==null&&ji(Er)&&(Er=null),wa.forEach(Qc),ja.forEach(Qc)}function Jt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ls||(Ls=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,Xm)))}function ka(e){function n(i){return Jt(i,e)}if(0<oi.length){Jt(oi[0],e);for(var t=1;t<oi.length;t++){var a=oi[t];a.blockedOn===e&&(a.blockedOn=null)}}for(Nr!==null&&Jt(Nr,e),Sr!==null&&Jt(Sr,e),Er!==null&&Jt(Er,e),wa.forEach(n),ja.forEach(n),t=0;t<yr.length;t++)a=yr[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<yr.length&&(t=yr[0],t.blockedOn===null);)fu(t),t.blockedOn===null&&yr.shift()}var At=fr.ReactCurrentBatchConfig,Vi=!0;function e0(e,n,t,a){var i=be,o=At.transition;At.transition=null;try{be=1,_l(e,n,t,a)}finally{be=i,At.transition=o}}function n0(e,n,t,a){var i=be,o=At.transition;At.transition=null;try{be=4,_l(e,n,t,a)}finally{be=i,At.transition=o}}function _l(e,n,t,a){if(Vi){var i=Ps(e,n,t,a);if(i===null)rs(e,n,a,Fi,t),Jc(e,a);else if(Qm(i,e,n,t,a))a.stopPropagation();else if(Jc(e,a),n&4&&-1<Jm.indexOf(e)){for(;i!==null;){var o=Ua(i);if(o!==null&&du(o),o=Ps(e,n,t,a),o===null&&rs(e,n,a,Fi,t),o===i)break;i=o}i!==null&&a.stopPropagation()}else rs(e,n,a,null,t)}}var Fi=null;function Ps(e,n,t,a){if(Fi=null,e=Dl(a),e=Kr(e),e!==null)if(n=ot(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ru(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Fi=e,null}function mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Um()){case Ll:return 1;case ou:return 4;case _i:case Wm:return 16;case su:return 536870912;default:return 16}default:return 16}}var jr=null,Bl=null,ki=null;function gu(){if(ki)return ki;var e,n=Bl,t=n.length,a,i="value"in jr?jr.value:jr.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===i[o-a];a++);return ki=i.slice(e,1<a?1-a:void 0)}function Ci(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function si(){return!0}function Xc(){return!1}function wn(e){function n(t,a,i,o,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?si:Xc,this.isPropagationStopped=Xc,this}return ze(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),n}var Vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=wn(Vt),Fa=ze({},Vt,{view:0,detail:0}),r0=wn(Fa),Ho,qo,Qt,po=ze({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qt&&(Qt&&e.type==="mousemove"?(Ho=e.screenX-Qt.screenX,qo=e.screenY-Qt.screenY):qo=Ho=0,Qt=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:qo}}),ed=wn(po),t0=ze({},po,{dataTransfer:0}),a0=wn(t0),i0=ze({},Fa,{relatedTarget:0}),Yo=wn(i0),o0=ze({},Vt,{animationName:0,elapsedTime:0,pseudoElement:0}),s0=wn(o0),l0=ze({},Vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c0=wn(l0),d0=ze({},Vt,{data:0}),nd=wn(d0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=h0[e])?!!n[e]:!1}function Fl(){return f0}var m0=ze({},Fa,{key:function(e){if(e.key){var n=p0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?u0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(e){return e.type==="keypress"?Ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g0=wn(m0),x0=ze({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rd=wn(x0),v0=ze({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),b0=wn(v0),y0=ze({},Vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),w0=wn(y0),j0=ze({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=wn(j0),C0=[9,13,27,32],Ul=dr&&"CompositionEvent"in window,pa=null;dr&&"documentMode"in document&&(pa=document.documentMode);var N0=dr&&"TextEvent"in window&&!pa,xu=dr&&(!Ul||pa&&8<pa&&11>=pa),td=" ",ad=!1;function vu(e,n){switch(e){case"keyup":return C0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mt=!1;function S0(e,n){switch(e){case"compositionend":return bu(n);case"keypress":return n.which!==32?null:(ad=!0,td);case"textInput":return e=n.data,e===td&&ad?null:e;default:return null}}function E0(e,n){if(mt)return e==="compositionend"||!Ul&&vu(e,n)?(e=gu(),ki=Bl=jr=null,mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xu&&n.locale!=="ko"?null:n.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function id(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!A0[e.type]:n==="textarea"}function yu(e,n,t,a){Jp(a),n=Ui(n,"onChange"),0<n.length&&(t=new Vl("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var ua=null,Ca=null;function I0(e){zu(e,0)}function uo(e){var n=vt(e);if(Zp(n))return e}function T0(e,n){if(e==="change")return n}var wu=!1;if(dr){var Go;if(dr){var Jo="oninput"in document;if(!Jo){var od=document.createElement("div");od.setAttribute("oninput","return;"),Jo=typeof od.oninput=="function"}Go=Jo}else Go=!1;wu=Go&&(!document.documentMode||9<document.documentMode)}function sd(){ua&&(ua.detachEvent("onpropertychange",ju),Ca=ua=null)}function ju(e){if(e.propertyName==="value"&&uo(Ca)){var n=[];yu(n,Ca,e,Dl(e)),nu(I0,n)}}function z0(e,n,t){e==="focusin"?(sd(),ua=n,Ca=t,ua.attachEvent("onpropertychange",ju)):e==="focusout"&&sd()}function R0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uo(Ca)}function O0(e,n){if(e==="click")return uo(n)}function D0(e,n){if(e==="input"||e==="change")return uo(n)}function L0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:L0;function Na(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!vs.call(n,i)||!Wn(e[i],n[i]))return!1}return!0}function ld(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cd(e,n){var t=ld(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ld(t)}}function ku(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ku(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cu(){for(var e=window,n=Li();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Li(e.document)}return n}function Wl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function P0(e){var n=Cu(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ku(t.ownerDocument.documentElement,t)){if(a!==null&&Wl(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(a.start,i);a=a.end===void 0?o:Math.min(a.end,i),!e.extend&&o>a&&(i=a,a=o,o=i),i=cd(t,o);var s=cd(t,a);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>a?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var M0=dr&&"documentMode"in document&&11>=document.documentMode,gt=null,Ms=null,ha=null,_s=!1;function dd(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_s||gt==null||gt!==Li(a)||(a=gt,"selectionStart"in a&&Wl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ha&&Na(ha,a)||(ha=a,a=Ui(Ms,"onSelect"),0<a.length&&(n=new Vl("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=gt)))}function li(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var xt={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionend:li("Transition","TransitionEnd")},Qo={},Nu={};dr&&(Nu=document.createElement("div").style,"AnimationEvent"in window||(delete xt.animationend.animation,delete xt.animationiteration.animation,delete xt.animationstart.animation),"TransitionEvent"in window||delete xt.transitionend.transition);function ho(e){if(Qo[e])return Qo[e];if(!xt[e])return e;var n=xt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Nu)return Qo[e]=n[t];return e}var Su=ho("animationend"),Eu=ho("animationiteration"),Au=ho("animationstart"),Iu=ho("transitionend"),Tu=new Map,pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(e,n){Tu.set(e,n),it(n,[e])}for(var Xo=0;Xo<pd.length;Xo++){var es=pd[Xo],_0=es.toLowerCase(),B0=es[0].toUpperCase()+es.slice(1);Pr(_0,"on"+B0)}Pr(Su,"onAnimationEnd");Pr(Eu,"onAnimationIteration");Pr(Au,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(Iu,"onTransitionEnd");zt("onMouseEnter",["mouseout","mouseover"]);zt("onMouseLeave",["mouseout","mouseover"]);zt("onPointerEnter",["pointerout","pointerover"]);zt("onPointerLeave",["pointerout","pointerover"]);it("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));it("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));it("onBeforeInput",["compositionend","keypress","textInput","paste"]);it("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));it("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));it("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V0=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function ud(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,_m(a,n,void 0,e),e.currentTarget=null}function zu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var s=a.length-1;0<=s;s--){var l=a[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;ud(i,l,d),o=c}else for(s=0;s<a.length;s++){if(l=a[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;ud(i,l,d),o=c}}}if(Mi)throw e=Os,Mi=!1,Os=null,e}function Ne(e,n){var t=n[Ws];t===void 0&&(t=n[Ws]=new Set);var a=e+"__bubble";t.has(a)||(Ru(n,e,2,!1),t.add(a))}function ns(e,n,t){var a=0;n&&(a|=4),Ru(t,e,a,n)}var ci="_reactListening"+Math.random().toString(36).slice(2);function Sa(e){if(!e[ci]){e[ci]=!0,Bp.forEach(function(t){t!=="selectionchange"&&(V0.has(t)||ns(t,!1,e),ns(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ci]||(n[ci]=!0,ns("selectionchange",!1,n))}}function Ru(e,n,t,a){switch(mu(n)){case 1:var i=e0;break;case 4:i=n0;break;default:i=_l}t=i.bind(null,n,t,e),i=void 0,!Rs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function rs(e,n,t,a,i){var o=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=a.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Kr(l),s===null)return;if(c=s.tag,c===5||c===6){a=o=s;continue e}l=l.parentNode}}a=a.return}nu(function(){var d=o,p=Dl(t),h=[];e:{var m=Tu.get(e);if(m!==void 0){var w=Vl,x=e;switch(e){case"keypress":if(Ci(t)===0)break e;case"keydown":case"keyup":w=g0;break;case"focusin":x="focus",w=Yo;break;case"focusout":x="blur",w=Yo;break;case"beforeblur":case"afterblur":w=Yo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=a0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=b0;break;case Su:case Eu:case Au:w=s0;break;case Iu:w=w0;break;case"scroll":w=r0;break;case"wheel":w=k0;break;case"copy":case"cut":case"paste":w=c0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=rd}var y=(n&4)!==0,k=!y&&e==="scroll",g=y?m!==null?m+"Capture":null:m;y=[];for(var f=d,v;f!==null;){v=f;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,g!==null&&(N=ya(f,g),N!=null&&y.push(Ea(f,N,v)))),k)break;f=f.return}0<y.length&&(m=new w(m,x,null,t,p),h.push({event:m,listeners:y}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&t!==Ts&&(x=t.relatedTarget||t.fromElement)&&(Kr(x)||x[pr]))break e;if((w||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,w?(x=t.relatedTarget||t.toElement,w=d,x=x?Kr(x):null,x!==null&&(k=ot(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=d),w!==x)){if(y=ed,N="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=rd,N="onPointerLeave",g="onPointerEnter",f="pointer"),k=w==null?m:vt(w),v=x==null?m:vt(x),m=new y(N,f+"leave",w,t,p),m.target=k,m.relatedTarget=v,N=null,Kr(p)===d&&(y=new y(g,f+"enter",x,t,p),y.target=v,y.relatedTarget=k,N=y),k=N,w&&x)n:{for(y=w,g=x,f=0,v=y;v;v=pt(v))f++;for(v=0,N=g;N;N=pt(N))v++;for(;0<f-v;)y=pt(y),f--;for(;0<v-f;)g=pt(g),v--;for(;f--;){if(y===g||g!==null&&y===g.alternate)break n;y=pt(y),g=pt(g)}y=null}else y=null;w!==null&&hd(h,m,w,y,!1),x!==null&&k!==null&&hd(h,k,x,y,!0)}}e:{if(m=d?vt(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var z=T0;else if(id(m))if(wu)z=D0;else{z=R0;var O=z0}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=O0);if(z&&(z=z(e,d))){yu(h,z,t,p);break e}O&&O(e,m,d),e==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&Ns(m,"number",m.value)}switch(O=d?vt(d):window,e){case"focusin":(id(O)||O.contentEditable==="true")&&(gt=O,Ms=d,ha=null);break;case"focusout":ha=Ms=gt=null;break;case"mousedown":_s=!0;break;case"contextmenu":case"mouseup":case"dragend":_s=!1,dd(h,t,p);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":dd(h,t,p)}var _;if(Ul)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else mt?vu(e,t)&&(A="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(xu&&t.locale!=="ko"&&(mt||A!=="onCompositionStart"?A==="onCompositionEnd"&&mt&&(_=gu()):(jr=p,Bl="value"in jr?jr.value:jr.textContent,mt=!0)),O=Ui(d,A),0<O.length&&(A=new nd(A,e,null,t,p),h.push({event:A,listeners:O}),_?A.data=_:(_=bu(t),_!==null&&(A.data=_)))),(_=N0?S0(e,t):E0(e,t))&&(d=Ui(d,"onBeforeInput"),0<d.length&&(p=new nd("onBeforeInput","beforeinput",null,t,p),h.push({event:p,listeners:d}),p.data=_))}zu(h,n)})}function Ea(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ui(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ya(e,t),o!=null&&a.unshift(Ea(e,o,i)),o=ya(e,n),o!=null&&a.push(Ea(e,o,i))),e=e.return}return a}function pt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hd(e,n,t,a,i){for(var o=n._reactName,s=[];t!==null&&t!==a;){var l=t,c=l.alternate,d=l.stateNode;if(c!==null&&c===a)break;l.tag===5&&d!==null&&(l=d,i?(c=ya(t,o),c!=null&&s.unshift(Ea(t,c,l))):i||(c=ya(t,o),c!=null&&s.push(Ea(t,c,l)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var F0=/\r\n?/g,U0=/\u0000|\uFFFD/g;function fd(e){return(typeof e=="string"?e:""+e).replace(F0,`
`).replace(U0,"")}function di(e,n,t){if(n=fd(n),fd(e)!==n&&t)throw Error(B(425))}function Wi(){}var Bs=null,Vs=null;function Fs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Us=typeof setTimeout=="function"?setTimeout:void 0,W0=typeof clearTimeout=="function"?clearTimeout:void 0,md=typeof Promise=="function"?Promise:void 0,Z0=typeof queueMicrotask=="function"?queueMicrotask:typeof md<"u"?function(e){return md.resolve(null).then(e).catch($0)}:Us;function $0(e){setTimeout(function(){throw e})}function ts(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(a===0){e.removeChild(i),ka(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=i}while(t);ka(n)}function Ar(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function gd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ft=Math.random().toString(36).slice(2),er="__reactFiber$"+Ft,Aa="__reactProps$"+Ft,pr="__reactContainer$"+Ft,Ws="__reactEvents$"+Ft,K0="__reactListeners$"+Ft,H0="__reactHandles$"+Ft;function Kr(e){var n=e[er];if(n)return n;for(var t=e.parentNode;t;){if(n=t[pr]||t[er]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=gd(e);e!==null;){if(t=e[er])return t;e=gd(e)}return n}e=t,t=e.parentNode}return null}function Ua(e){return e=e[er]||e[pr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function fo(e){return e[Aa]||null}var Zs=[],bt=-1;function Mr(e){return{current:e}}function Se(e){0>bt||(e.current=Zs[bt],Zs[bt]=null,bt--)}function ke(e,n){bt++,Zs[bt]=e.current,e.current=n}var Lr={},en=Mr(Lr),dn=Mr(!1),Xr=Lr;function Rt(e,n){var t=e.type.contextTypes;if(!t)return Lr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function pn(e){return e=e.childContextTypes,e!=null}function Zi(){Se(dn),Se(en)}function xd(e,n,t){if(en.current!==Lr)throw Error(B(168));ke(en,n),ke(dn,t)}function Ou(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var i in a)if(!(i in n))throw Error(B(108,zm(e)||"Unknown",i));return ze({},t,a)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lr,Xr=en.current,ke(en,e),ke(dn,dn.current),!0}function vd(e,n,t){var a=e.stateNode;if(!a)throw Error(B(169));t?(e=Ou(e,n,Xr),a.__reactInternalMemoizedMergedChildContext=e,Se(dn),Se(en),ke(en,e)):Se(dn),ke(dn,t)}var or=null,mo=!1,as=!1;function Du(e){or===null?or=[e]:or.push(e)}function q0(e){mo=!0,Du(e)}function _r(){if(!as&&or!==null){as=!0;var e=0,n=be;try{var t=or;for(be=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}or=null,mo=!1}catch(i){throw or!==null&&(or=or.slice(e+1)),iu(Ll,_r),i}finally{be=n,as=!1}}return null}var yt=[],wt=0,Ki=null,Hi=0,An=[],In=0,et=null,sr=1,lr="";function Zr(e,n){yt[wt++]=Hi,yt[wt++]=Ki,Ki=e,Hi=n}function Lu(e,n,t){An[In++]=sr,An[In++]=lr,An[In++]=et,et=e;var a=sr;e=lr;var i=32-Fn(a)-1;a&=~(1<<i),t+=1;var o=32-Fn(n)+i;if(30<o){var s=i-i%5;o=(a&(1<<s)-1).toString(32),a>>=s,i-=s,sr=1<<32-Fn(n)+i|t<<i|a,lr=o+e}else sr=1<<o|t<<i|a,lr=e}function Zl(e){e.return!==null&&(Zr(e,1),Lu(e,1,0))}function $l(e){for(;e===Ki;)Ki=yt[--wt],yt[wt]=null,Hi=yt[--wt],yt[wt]=null;for(;e===et;)et=An[--In],An[In]=null,lr=An[--In],An[In]=null,sr=An[--In],An[In]=null}var vn=null,xn=null,Ae=!1,Vn=null;function Pu(e,n){var t=Tn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function bd(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,vn=e,xn=Ar(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,vn=e,xn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=et!==null?{id:sr,overflow:lr}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Tn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,vn=e,xn=null,!0):!1;default:return!1}}function $s(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ks(e){if(Ae){var n=xn;if(n){var t=n;if(!bd(e,n)){if($s(e))throw Error(B(418));n=Ar(t.nextSibling);var a=vn;n&&bd(e,n)?Pu(a,t):(e.flags=e.flags&-4097|2,Ae=!1,vn=e)}}else{if($s(e))throw Error(B(418));e.flags=e.flags&-4097|2,Ae=!1,vn=e}}}function yd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vn=e}function pi(e){if(e!==vn)return!1;if(!Ae)return yd(e),Ae=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Fs(e.type,e.memoizedProps)),n&&(n=xn)){if($s(e))throw Mu(),Error(B(418));for(;n;)Pu(e,n),n=Ar(n.nextSibling)}if(yd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){xn=Ar(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}xn=null}}else xn=vn?Ar(e.stateNode.nextSibling):null;return!0}function Mu(){for(var e=xn;e;)e=Ar(e.nextSibling)}function Ot(){xn=vn=null,Ae=!1}function Kl(e){Vn===null?Vn=[e]:Vn.push(e)}var Y0=fr.ReactCurrentBatchConfig;function Xt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(B(309));var a=t.stateNode}if(!a)throw Error(B(147,e));var i=a,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(B(284));if(!t._owner)throw Error(B(290,e))}return e}function ui(e,n){throw e=Object.prototype.toString.call(n),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function wd(e){var n=e._init;return n(e._payload)}function _u(e){function n(g,f){if(e){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function t(g,f){if(!e)return null;for(;f!==null;)n(g,f),f=f.sibling;return null}function a(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=Rr(g,f),g.index=0,g.sibling=null,g}function o(g,f,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,f,v,N){return f===null||f.tag!==6?(f=ps(v,g.mode,N),f.return=g,f):(f=i(f,v),f.return=g,f)}function c(g,f,v,N){var z=v.type;return z===ft?p(g,f,v.props.children,N,v.key):f!==null&&(f.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===vr&&wd(z)===f.type)?(N=i(f,v.props),N.ref=Xt(g,f,v),N.return=g,N):(N=zi(v.type,v.key,v.props,null,g.mode,N),N.ref=Xt(g,f,v),N.return=g,N)}function d(g,f,v,N){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=us(v,g.mode,N),f.return=g,f):(f=i(f,v.children||[]),f.return=g,f)}function p(g,f,v,N,z){return f===null||f.tag!==7?(f=Jr(v,g.mode,N,z),f.return=g,f):(f=i(f,v),f.return=g,f)}function h(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ps(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ni:return v=zi(f.type,f.key,f.props,null,g.mode,v),v.ref=Xt(g,null,f),v.return=g,v;case ht:return f=us(f,g.mode,v),f.return=g,f;case vr:var N=f._init;return h(g,N(f._payload),v)}if(oa(f)||qt(f))return f=Jr(f,g.mode,v,null),f.return=g,f;ui(g,f)}return null}function m(g,f,v,N){var z=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return z!==null?null:l(g,f,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ni:return v.key===z?c(g,f,v,N):null;case ht:return v.key===z?d(g,f,v,N):null;case vr:return z=v._init,m(g,f,z(v._payload),N)}if(oa(v)||qt(v))return z!==null?null:p(g,f,v,N,null);ui(g,v)}return null}function w(g,f,v,N,z){if(typeof N=="string"&&N!==""||typeof N=="number")return g=g.get(v)||null,l(f,g,""+N,z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ni:return g=g.get(N.key===null?v:N.key)||null,c(f,g,N,z);case ht:return g=g.get(N.key===null?v:N.key)||null,d(f,g,N,z);case vr:var O=N._init;return w(g,f,v,O(N._payload),z)}if(oa(N)||qt(N))return g=g.get(v)||null,p(f,g,N,z,null);ui(f,N)}return null}function x(g,f,v,N){for(var z=null,O=null,_=f,A=f=0,Z=null;_!==null&&A<v.length;A++){_.index>A?(Z=_,_=null):Z=_.sibling;var $=m(g,_,v[A],N);if($===null){_===null&&(_=Z);break}e&&_&&$.alternate===null&&n(g,_),f=o($,f,A),O===null?z=$:O.sibling=$,O=$,_=Z}if(A===v.length)return t(g,_),Ae&&Zr(g,A),z;if(_===null){for(;A<v.length;A++)_=h(g,v[A],N),_!==null&&(f=o(_,f,A),O===null?z=_:O.sibling=_,O=_);return Ae&&Zr(g,A),z}for(_=a(g,_);A<v.length;A++)Z=w(_,g,A,v[A],N),Z!==null&&(e&&Z.alternate!==null&&_.delete(Z.key===null?A:Z.key),f=o(Z,f,A),O===null?z=Z:O.sibling=Z,O=Z);return e&&_.forEach(function(re){return n(g,re)}),Ae&&Zr(g,A),z}function y(g,f,v,N){var z=qt(v);if(typeof z!="function")throw Error(B(150));if(v=z.call(v),v==null)throw Error(B(151));for(var O=z=null,_=f,A=f=0,Z=null,$=v.next();_!==null&&!$.done;A++,$=v.next()){_.index>A?(Z=_,_=null):Z=_.sibling;var re=m(g,_,$.value,N);if(re===null){_===null&&(_=Z);break}e&&_&&re.alternate===null&&n(g,_),f=o(re,f,A),O===null?z=re:O.sibling=re,O=re,_=Z}if($.done)return t(g,_),Ae&&Zr(g,A),z;if(_===null){for(;!$.done;A++,$=v.next())$=h(g,$.value,N),$!==null&&(f=o($,f,A),O===null?z=$:O.sibling=$,O=$);return Ae&&Zr(g,A),z}for(_=a(g,_);!$.done;A++,$=v.next())$=w(_,g,A,$.value,N),$!==null&&(e&&$.alternate!==null&&_.delete($.key===null?A:$.key),f=o($,f,A),O===null?z=$:O.sibling=$,O=$);return e&&_.forEach(function(te){return n(g,te)}),Ae&&Zr(g,A),z}function k(g,f,v,N){if(typeof v=="object"&&v!==null&&v.type===ft&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ni:e:{for(var z=v.key,O=f;O!==null;){if(O.key===z){if(z=v.type,z===ft){if(O.tag===7){t(g,O.sibling),f=i(O,v.props.children),f.return=g,g=f;break e}}else if(O.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===vr&&wd(z)===O.type){t(g,O.sibling),f=i(O,v.props),f.ref=Xt(g,O,v),f.return=g,g=f;break e}t(g,O);break}else n(g,O);O=O.sibling}v.type===ft?(f=Jr(v.props.children,g.mode,N,v.key),f.return=g,g=f):(N=zi(v.type,v.key,v.props,null,g.mode,N),N.ref=Xt(g,f,v),N.return=g,g=N)}return s(g);case ht:e:{for(O=v.key;f!==null;){if(f.key===O)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){t(g,f.sibling),f=i(f,v.children||[]),f.return=g,g=f;break e}else{t(g,f);break}else n(g,f);f=f.sibling}f=us(v,g.mode,N),f.return=g,g=f}return s(g);case vr:return O=v._init,k(g,f,O(v._payload),N)}if(oa(v))return x(g,f,v,N);if(qt(v))return y(g,f,v,N);ui(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(t(g,f.sibling),f=i(f,v),f.return=g,g=f):(t(g,f),f=ps(v,g.mode,N),f.return=g,g=f),s(g)):t(g,f)}return k}var Dt=_u(!0),Bu=_u(!1),qi=Mr(null),Yi=null,jt=null,Hl=null;function ql(){Hl=jt=Yi=null}function Yl(e){var n=qi.current;Se(qi),e._currentValue=n}function Hs(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function It(e,n){Yi=e,Hl=jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(cn=!0),e.firstContext=null)}function Rn(e){var n=e._currentValue;if(Hl!==e)if(e={context:e,memoizedValue:n,next:null},jt===null){if(Yi===null)throw Error(B(308));jt=e,Yi.dependencies={lanes:0,firstContext:e}}else jt=jt.next=e;return n}var Hr=null;function Gl(e){Hr===null?Hr=[e]:Hr.push(e)}function Vu(e,n,t,a){var i=n.interleaved;return i===null?(t.next=t,Gl(n)):(t.next=i.next,i.next=t),n.interleaved=t,ur(e,a)}function ur(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var br=!1;function Jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ir(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,xe&2){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,ur(e,t)}return i=a.interleaved,i===null?(n.next=n,Gl(a)):(n.next=i.next,i.next=n),a.interleaved=n,ur(e,t)}function Ni(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Pl(e,t)}}function jd(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Gi(e,n,t,a){var i=e.updateQueue;br=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?o=d:s.next=d,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;s=0,p=d=c=null,l=o;do{var m=l.lane,w=l.eventTime;if((a&m)===m){p!==null&&(p=p.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,y=l;switch(m=n,w=t,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(w,h,m);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,m=typeof x=="function"?x.call(w,h,m):x,m==null)break e;h=ze({},h,m);break e;case 2:br=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=w,c=h):p=p.next=w,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(c=h),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);rt|=s,e.lanes=s,e.memoizedState=h}}function kd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],i=a.callback;if(i!==null){if(a.callback=null,a=t,typeof i!="function")throw Error(B(191,i));i.call(a)}}}var Wa={},rr=Mr(Wa),Ia=Mr(Wa),Ta=Mr(Wa);function qr(e){if(e===Wa)throw Error(B(174));return e}function Ql(e,n){switch(ke(Ta,n),ke(Ia,e),ke(rr,Wa),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Es(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Es(n,e)}Se(rr),ke(rr,n)}function Lt(){Se(rr),Se(Ia),Se(Ta)}function Uu(e){qr(Ta.current);var n=qr(rr.current),t=Es(n,e.type);n!==t&&(ke(Ia,e),ke(rr,t))}function Xl(e){Ia.current===e&&(Se(rr),Se(Ia))}var Ie=Mr(0);function Ji(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var is=[];function ec(){for(var e=0;e<is.length;e++)is[e]._workInProgressVersionPrimary=null;is.length=0}var Si=fr.ReactCurrentDispatcher,os=fr.ReactCurrentBatchConfig,nt=0,Te=null,Be=null,We=null,Qi=!1,fa=!1,za=0,G0=0;function Ge(){throw Error(B(321))}function nc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Wn(e[t],n[t]))return!1;return!0}function rc(e,n,t,a,i,o){if(nt=o,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Si.current=e===null||e.memoizedState===null?eg:ng,e=t(a,i),fa){o=0;do{if(fa=!1,za=0,25<=o)throw Error(B(301));o+=1,We=Be=null,n.updateQueue=null,Si.current=rg,e=t(a,i)}while(fa)}if(Si.current=Xi,n=Be!==null&&Be.next!==null,nt=0,We=Be=Te=null,Qi=!1,n)throw Error(B(300));return e}function tc(){var e=za!==0;return za=0,e}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Te.memoizedState=We=e:We=We.next=e,We}function On(){if(Be===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=We===null?Te.memoizedState:We.next;if(n!==null)We=n,Be=e;else{if(e===null)throw Error(B(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},We===null?Te.memoizedState=We=e:We=We.next=e}return We}function Ra(e,n){return typeof n=="function"?n(e):n}function ss(e){var n=On(),t=n.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=e;var a=Be,i=a.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}a.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,a=a.baseState;var l=s=null,c=null,d=o;do{var p=d.lane;if((nt&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var h={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=h,s=a):c=c.next=h,Te.lanes|=p,rt|=p}d=d.next}while(d!==null&&d!==o);c===null?s=a:c.next=l,Wn(a,n.memoizedState)||(cn=!0),n.memoizedState=a,n.baseState=s,n.baseQueue=c,t.lastRenderedState=a}if(e=t.interleaved,e!==null){i=e;do o=i.lane,Te.lanes|=o,rt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ls(e){var n=On(),t=n.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Wn(o,n.memoizedState)||(cn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,a]}function Wu(){}function Zu(e,n){var t=Te,a=On(),i=n(),o=!Wn(a.memoizedState,i);if(o&&(a.memoizedState=i,cn=!0),a=a.queue,ac(Hu.bind(null,t,a,e),[e]),a.getSnapshot!==n||o||We!==null&&We.memoizedState.tag&1){if(t.flags|=2048,Oa(9,Ku.bind(null,t,a,i,n),void 0,null),Ze===null)throw Error(B(349));nt&30||$u(t,n,i)}return i}function $u(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Te.updateQueue,n===null?(n={lastEffect:null,stores:null},Te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ku(e,n,t,a){n.value=t,n.getSnapshot=a,qu(n)&&Yu(e)}function Hu(e,n,t){return t(function(){qu(n)&&Yu(e)})}function qu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Wn(e,t)}catch{return!0}}function Yu(e){var n=ur(e,1);n!==null&&Un(n,e,1,-1)}function Cd(e){var n=Xn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:e},n.queue=e,e=e.dispatch=X0.bind(null,Te,e),[n.memoizedState,e]}function Oa(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=Te.updateQueue,n===null?(n={lastEffect:null,stores:null},Te.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Gu(){return On().memoizedState}function Ei(e,n,t,a){var i=Xn();Te.flags|=e,i.memoizedState=Oa(1|n,t,void 0,a===void 0?null:a)}function go(e,n,t,a){var i=On();a=a===void 0?null:a;var o=void 0;if(Be!==null){var s=Be.memoizedState;if(o=s.destroy,a!==null&&nc(a,s.deps)){i.memoizedState=Oa(n,t,o,a);return}}Te.flags|=e,i.memoizedState=Oa(1|n,t,o,a)}function Nd(e,n){return Ei(8390656,8,e,n)}function ac(e,n){return go(2048,8,e,n)}function Ju(e,n){return go(4,2,e,n)}function Qu(e,n){return go(4,4,e,n)}function Xu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function eh(e,n,t){return t=t!=null?t.concat([e]):null,go(4,4,Xu.bind(null,n,e),t)}function ic(){}function nh(e,n){var t=On();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&nc(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function rh(e,n){var t=On();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&nc(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function th(e,n,t){return nt&21?(Wn(t,n)||(t=lu(),Te.lanes|=t,rt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,cn=!0),e.memoizedState=t)}function J0(e,n){var t=be;be=t!==0&&4>t?t:4,e(!0);var a=os.transition;os.transition={};try{e(!1),n()}finally{be=t,os.transition=a}}function ah(){return On().memoizedState}function Q0(e,n,t){var a=zr(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},ih(e))oh(n,t);else if(t=Vu(e,n,t,a),t!==null){var i=tn();Un(t,e,a,i),sh(t,n,a)}}function X0(e,n,t){var a=zr(e),i={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(ih(e))oh(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,l=o(s,t);if(i.hasEagerState=!0,i.eagerState=l,Wn(l,s)){var c=n.interleaved;c===null?(i.next=i,Gl(n)):(i.next=c.next,c.next=i),n.interleaved=i;return}}catch{}finally{}t=Vu(e,n,i,a),t!==null&&(i=tn(),Un(t,e,a,i),sh(t,n,a))}}function ih(e){var n=e.alternate;return e===Te||n!==null&&n===Te}function oh(e,n){fa=Qi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function sh(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Pl(e,t)}}var Xi={readContext:Rn,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},eg={readContext:Rn,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:Nd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ei(4194308,4,Xu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ei(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ei(4,2,e,n)},useMemo:function(e,n){var t=Xn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Xn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Q0.bind(null,Te,e),[a.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:Cd,useDebugValue:ic,useDeferredValue:function(e){return Xn().memoizedState=e},useTransition:function(){var e=Cd(!1),n=e[0];return e=J0.bind(null,e[1]),Xn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=Te,i=Xn();if(Ae){if(t===void 0)throw Error(B(407));t=t()}else{if(t=n(),Ze===null)throw Error(B(349));nt&30||$u(a,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Nd(Hu.bind(null,a,o,e),[e]),a.flags|=2048,Oa(9,Ku.bind(null,a,o,t,n),void 0,null),t},useId:function(){var e=Xn(),n=Ze.identifierPrefix;if(Ae){var t=lr,a=sr;t=(a&~(1<<32-Fn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=za++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=G0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ng={readContext:Rn,useCallback:nh,useContext:Rn,useEffect:ac,useImperativeHandle:eh,useInsertionEffect:Ju,useLayoutEffect:Qu,useMemo:rh,useReducer:ss,useRef:Gu,useState:function(){return ss(Ra)},useDebugValue:ic,useDeferredValue:function(e){var n=On();return th(n,Be.memoizedState,e)},useTransition:function(){var e=ss(Ra)[0],n=On().memoizedState;return[e,n]},useMutableSource:Wu,useSyncExternalStore:Zu,useId:ah,unstable_isNewReconciler:!1},rg={readContext:Rn,useCallback:nh,useContext:Rn,useEffect:ac,useImperativeHandle:eh,useInsertionEffect:Ju,useLayoutEffect:Qu,useMemo:rh,useReducer:ls,useRef:Gu,useState:function(){return ls(Ra)},useDebugValue:ic,useDeferredValue:function(e){var n=On();return Be===null?n.memoizedState=e:th(n,Be.memoizedState,e)},useTransition:function(){var e=ls(Ra)[0],n=On().memoizedState;return[e,n]},useMutableSource:Wu,useSyncExternalStore:Zu,useId:ah,unstable_isNewReconciler:!1};function Mn(e,n){if(e&&e.defaultProps){n=ze({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function qs(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:ze({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xo={isMounted:function(e){return(e=e._reactInternals)?ot(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=tn(),i=zr(e),o=cr(a,i);o.payload=n,t!=null&&(o.callback=t),n=Ir(e,o,i),n!==null&&(Un(n,e,i,a),Ni(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=tn(),i=zr(e),o=cr(a,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Ir(e,o,i),n!==null&&(Un(n,e,i,a),Ni(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=tn(),a=zr(e),i=cr(t,a);i.tag=2,n!=null&&(i.callback=n),n=Ir(e,i,a),n!==null&&(Un(n,e,a,t),Ni(n,e,a))}};function Sd(e,n,t,a,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,s):n.prototype&&n.prototype.isPureReactComponent?!Na(t,a)||!Na(i,o):!0}function lh(e,n,t){var a=!1,i=Lr,o=n.contextType;return typeof o=="object"&&o!==null?o=Rn(o):(i=pn(n)?Xr:en.current,a=n.contextTypes,o=(a=a!=null)?Rt(e,i):Lr),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xo,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Ed(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&xo.enqueueReplaceState(n,n.state,null)}function Ys(e,n,t,a){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Jl(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Rn(o):(o=pn(n)?Xr:en.current,i.context=Rt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(qs(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&xo.enqueueReplaceState(i,i.state,null),Gi(e,t,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pt(e,n){try{var t="",a=n;do t+=Tm(a),a=a.return;while(a);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function cs(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Gs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var tg=typeof WeakMap=="function"?WeakMap:Map;function ch(e,n,t){t=cr(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){no||(no=!0,ol=a),Gs(e,n)},t}function dh(e,n,t){t=cr(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;t.payload=function(){return a(i)},t.callback=function(){Gs(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Gs(e,n),typeof a!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Ad(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new tg;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(i.add(t),e=xg.bind(null,e,n,t),n.then(e,e))}function Id(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Td(e,n,t,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=cr(-1,1),n.tag=2,Ir(t,n,1))),t.lanes|=1),e)}var ag=fr.ReactCurrentOwner,cn=!1;function rn(e,n,t,a){n.child=e===null?Bu(n,null,t,a):Dt(n,e.child,t,a)}function zd(e,n,t,a,i){t=t.render;var o=n.ref;return It(n,i),a=rc(e,n,t,a,o,i),t=tc(),e!==null&&!cn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,hr(e,n,i)):(Ae&&t&&Zl(n),n.flags|=1,rn(e,n,a,i),n.child)}function Rd(e,n,t,a,i){if(e===null){var o=t.type;return typeof o=="function"&&!hc(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,ph(e,n,o,a,i)):(e=zi(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:Na,t(s,a)&&e.ref===n.ref)return hr(e,n,i)}return n.flags|=1,e=Rr(o,a),e.ref=n.ref,e.return=n,n.child=e}function ph(e,n,t,a,i){if(e!==null){var o=e.memoizedProps;if(Na(o,a)&&e.ref===n.ref)if(cn=!1,n.pendingProps=a=o,(e.lanes&i)!==0)e.flags&131072&&(cn=!0);else return n.lanes=e.lanes,hr(e,n,i)}return Js(e,n,t,a,i)}function uh(e,n,t){var a=n.pendingProps,i=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Ct,gn),gn|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ke(Ct,gn),gn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:t,ke(Ct,gn),gn|=a}else o!==null?(a=o.baseLanes|t,n.memoizedState=null):a=t,ke(Ct,gn),gn|=a;return rn(e,n,i,t),n.child}function hh(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Js(e,n,t,a,i){var o=pn(t)?Xr:en.current;return o=Rt(n,o),It(n,i),t=rc(e,n,t,a,o,i),a=tc(),e!==null&&!cn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,hr(e,n,i)):(Ae&&a&&Zl(n),n.flags|=1,rn(e,n,t,i),n.child)}function Od(e,n,t,a,i){if(pn(t)){var o=!0;$i(n)}else o=!1;if(It(n,i),n.stateNode===null)Ai(e,n),lh(n,t,a),Ys(n,t,a,i),a=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var c=s.context,d=t.contextType;typeof d=="object"&&d!==null?d=Rn(d):(d=pn(t)?Xr:en.current,d=Rt(n,d));var p=t.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==a||c!==d)&&Ed(n,s,a,d),br=!1;var m=n.memoizedState;s.state=m,Gi(n,a,s,i),c=n.memoizedState,l!==a||m!==c||dn.current||br?(typeof p=="function"&&(qs(n,t,p,a),c=n.memoizedState),(l=br||Sd(n,t,l,a,m,c,d))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=c),s.props=a,s.state=c,s.context=d,a=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,Fu(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:Mn(n.type,l),s.props=d,h=n.pendingProps,m=s.context,c=t.contextType,typeof c=="object"&&c!==null?c=Rn(c):(c=pn(t)?Xr:en.current,c=Rt(n,c));var w=t.getDerivedStateFromProps;(p=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||m!==c)&&Ed(n,s,a,c),br=!1,m=n.memoizedState,s.state=m,Gi(n,a,s,i);var x=n.memoizedState;l!==h||m!==x||dn.current||br?(typeof w=="function"&&(qs(n,t,w,a),x=n.memoizedState),(d=br||Sd(n,t,d,a,m,x,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,x,c)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=x),s.props=a,s.state=x,s.context=c,a=d):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),a=!1)}return Qs(e,n,t,a,o,i)}function Qs(e,n,t,a,i,o){hh(e,n);var s=(n.flags&128)!==0;if(!a&&!s)return i&&vd(n,t,!1),hr(e,n,o);a=n.stateNode,ag.current=n;var l=s&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&s?(n.child=Dt(n,e.child,null,o),n.child=Dt(n,null,l,o)):rn(e,n,l,o),n.memoizedState=a.state,i&&vd(n,t,!0),n.child}function fh(e){var n=e.stateNode;n.pendingContext?xd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&xd(e,n.context,!1),Ql(e,n.containerInfo)}function Dd(e,n,t,a,i){return Ot(),Kl(i),n.flags|=256,rn(e,n,t,a),n.child}var Xs={dehydrated:null,treeContext:null,retryLane:0};function el(e){return{baseLanes:e,cachePool:null,transitions:null}}function mh(e,n,t){var a=n.pendingProps,i=Ie.current,o=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ke(Ie,i&1),e===null)return Ks(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=a.children,e=a.fallback,o?(a=n.mode,o=n.child,s={mode:"hidden",children:s},!(a&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=yo(s,a,0,null),e=Jr(e,a,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=el(t),n.memoizedState=Xs,e):oc(n,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ig(e,n,s,a,l,i,t);if(o){o=a.fallback,s=n.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:a.children};return!(s&1)&&n.child!==i?(a=n.child,a.childLanes=0,a.pendingProps=c,n.deletions=null):(a=Rr(i,c),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Rr(l,o):(o=Jr(o,s,t,null),o.flags|=2),o.return=n,a.return=n,a.sibling=o,n.child=a,a=o,o=n.child,s=e.child.memoizedState,s=s===null?el(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=Xs,a}return o=e.child,e=o.sibling,a=Rr(o,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function oc(e,n){return n=yo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function hi(e,n,t,a){return a!==null&&Kl(a),Dt(n,e.child,null,t),e=oc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ig(e,n,t,a,i,o,s){if(t)return n.flags&256?(n.flags&=-257,a=cs(Error(B(422))),hi(e,n,s,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=a.fallback,i=n.mode,a=yo({mode:"visible",children:a.children},i,0,null),o=Jr(o,i,s,null),o.flags|=2,a.return=n,o.return=n,a.sibling=o,n.child=a,n.mode&1&&Dt(n,e.child,null,s),n.child.memoizedState=el(s),n.memoizedState=Xs,o);if(!(n.mode&1))return hi(e,n,s,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,o=Error(B(419)),a=cs(o,a,void 0),hi(e,n,s,a)}if(l=(s&e.childLanes)!==0,cn||l){if(a=Ze,a!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ur(e,i),Un(a,e,i,-1))}return uc(),a=cs(Error(B(421))),hi(e,n,s,a)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=vg.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,xn=Ar(i.nextSibling),vn=n,Ae=!0,Vn=null,e!==null&&(An[In++]=sr,An[In++]=lr,An[In++]=et,sr=e.id,lr=e.overflow,et=n),n=oc(n,a.children),n.flags|=4096,n)}function Ld(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Hs(e.return,n,t)}function ds(e,n,t,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=i)}function gh(e,n,t){var a=n.pendingProps,i=a.revealOrder,o=a.tail;if(rn(e,n,a.children,t),a=Ie.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ld(e,t,n);else if(e.tag===19)Ld(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ke(Ie,a),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Ji(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),ds(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Ji(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}ds(n,!0,t,null,o);break;case"together":ds(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ai(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function hr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),rt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(B(153));if(n.child!==null){for(e=n.child,t=Rr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Rr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function og(e,n,t){switch(n.tag){case 3:fh(n),Ot();break;case 5:Uu(n);break;case 1:pn(n.type)&&$i(n);break;case 4:Ql(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,i=n.memoizedProps.value;ke(qi,a._currentValue),a._currentValue=i;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ke(Ie,Ie.current&1),n.flags|=128,null):t&n.child.childLanes?mh(e,n,t):(ke(Ie,Ie.current&1),e=hr(e,n,t),e!==null?e.sibling:null);ke(Ie,Ie.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return gh(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Ie,Ie.current),a)break;return null;case 22:case 23:return n.lanes=0,uh(e,n,t)}return hr(e,n,t)}var xh,nl,vh,bh;xh=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};nl=function(){};vh=function(e,n,t,a){var i=e.memoizedProps;if(i!==a){e=n.stateNode,qr(rr.current);var o=null;switch(t){case"input":i=ks(e,i),a=ks(e,a),o=[];break;case"select":i=ze({},i,{value:void 0}),a=ze({},a,{value:void 0}),o=[];break;case"textarea":i=Ss(e,i),a=Ss(e,a),o=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Wi)}As(t,a);var s;t=null;for(d in i)if(!a.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(s in l)l.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(va.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in a){var c=a[d];if(l=i!=null?i[d]:void 0,a.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(t||(t={}),t[s]=c[s])}else t||(o||(o=[]),o.push(d,t)),t=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(va.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Ne("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}t&&(o=o||[]).push("style",t);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};bh=function(e,n,t,a){t!==a&&(n.flags|=4)};function ea(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function sg(e,n,t){var a=n.pendingProps;switch($l(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return pn(n.type)&&Zi(),Je(n),null;case 3:return a=n.stateNode,Lt(),Se(dn),Se(en),ec(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(pi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Vn!==null&&(cl(Vn),Vn=null))),nl(e,n),Je(n),null;case 5:Xl(n);var i=qr(Ta.current);if(t=n.type,e!==null&&n.stateNode!=null)vh(e,n,t,a,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(B(166));return Je(n),null}if(e=qr(rr.current),pi(n)){a=n.stateNode,t=n.type;var o=n.memoizedProps;switch(a[er]=n,a[Aa]=o,e=(n.mode&1)!==0,t){case"dialog":Ne("cancel",a),Ne("close",a);break;case"iframe":case"object":case"embed":Ne("load",a);break;case"video":case"audio":for(i=0;i<la.length;i++)Ne(la[i],a);break;case"source":Ne("error",a);break;case"img":case"image":case"link":Ne("error",a),Ne("load",a);break;case"details":Ne("toggle",a);break;case"input":Zc(a,o),Ne("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},Ne("invalid",a);break;case"textarea":Kc(a,o),Ne("invalid",a)}As(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?a.textContent!==l&&(o.suppressHydrationWarning!==!0&&di(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&di(a.textContent,l,e),i=["children",""+l]):va.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Ne("scroll",a)}switch(t){case"input":ri(a),$c(a,o,!0);break;case"textarea":ri(a),Hc(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=Wi)}a=i,n.updateQueue=a,a!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hp(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(t,{is:a.is}):(e=s.createElement(t),t==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,t),e[er]=n,e[Aa]=a,xh(e,n,!1,!1),n.stateNode=e;e:{switch(s=Is(t,a),t){case"dialog":Ne("cancel",e),Ne("close",e),i=a;break;case"iframe":case"object":case"embed":Ne("load",e),i=a;break;case"video":case"audio":for(i=0;i<la.length;i++)Ne(la[i],e);i=a;break;case"source":Ne("error",e),i=a;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),i=a;break;case"details":Ne("toggle",e),i=a;break;case"input":Zc(e,a),i=ks(e,a),Ne("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=ze({},a,{value:void 0}),Ne("invalid",e);break;case"textarea":Kc(e,a),i=Ss(e,a),Ne("invalid",e);break;default:i=a}As(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Gp(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&qp(e,c)):o==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&ba(e,c):typeof c=="number"&&ba(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(va.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ne("scroll",e):c!=null&&Tl(e,o,c,s))}switch(t){case"input":ri(e),$c(e,a,!1);break;case"textarea":ri(e),Hc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Dr(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?Nt(e,!!a.multiple,o,!1):a.defaultValue!=null&&Nt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wi)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Je(n),null;case 6:if(e&&n.stateNode!=null)bh(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(B(166));if(t=qr(Ta.current),qr(rr.current),pi(n)){if(a=n.stateNode,t=n.memoizedProps,a[er]=n,(o=a.nodeValue!==t)&&(e=vn,e!==null))switch(e.tag){case 3:di(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&di(a.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[er]=n,n.stateNode=a}return Je(n),null;case 13:if(Se(Ie),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&xn!==null&&n.mode&1&&!(n.flags&128))Mu(),Ot(),n.flags|=98560,o=!1;else if(o=pi(n),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[er]=n}else Ot(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Je(n),o=!1}else Vn!==null&&(cl(Vn),Vn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||Ie.current&1?Ve===0&&(Ve=3):uc())),n.updateQueue!==null&&(n.flags|=4),Je(n),null);case 4:return Lt(),nl(e,n),e===null&&Sa(n.stateNode.containerInfo),Je(n),null;case 10:return Yl(n.type._context),Je(n),null;case 17:return pn(n.type)&&Zi(),Je(n),null;case 19:if(Se(Ie),o=n.memoizedState,o===null)return Je(n),null;if(a=(n.flags&128)!==0,s=o.rendering,s===null)if(a)ea(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Ji(e),s!==null){for(n.flags|=128,ea(o,!1),a=s.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)o=t,e=a,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ke(Ie,Ie.current&1|2),n.child}e=e.sibling}o.tail!==null&&Le()>Mt&&(n.flags|=128,a=!0,ea(o,!1),n.lanes=4194304)}else{if(!a)if(e=Ji(s),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ea(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ae)return Je(n),null}else 2*Le()-o.renderingStartTime>Mt&&t!==1073741824&&(n.flags|=128,a=!0,ea(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Le(),n.sibling=null,t=Ie.current,ke(Ie,a?t&1|2:t&1),n):(Je(n),null);case 22:case 23:return pc(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?gn&1073741824&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),null;case 24:return null;case 25:return null}throw Error(B(156,n.tag))}function lg(e,n){switch($l(n),n.tag){case 1:return pn(n.type)&&Zi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Lt(),Se(dn),Se(en),ec(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Xl(n),null;case 13:if(Se(Ie),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(B(340));Ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Se(Ie),null;case 4:return Lt(),null;case 10:return Yl(n.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var fi=!1,Qe=!1,cg=typeof WeakSet=="function"?WeakSet:Set,Y=null;function kt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){Oe(e,n,a)}else t.current=null}function rl(e,n,t){try{t()}catch(a){Oe(e,n,a)}}var Pd=!1;function dg(e,n){if(Bs=Vi,e=Cu(),Wl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,l=-1,c=-1,d=0,p=0,h=e,m=null;n:for(;;){for(var w;h!==t||i!==0&&h.nodeType!==3||(l=s+i),h!==o||a!==0&&h.nodeType!==3||(c=s+a),h.nodeType===3&&(s+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break n;if(m===t&&++d===i&&(l=s),m===o&&++p===a&&(c=s),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}t=l===-1||c===-1?null:{start:l,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vs={focusedElem:e,selectionRange:t},Vi=!1,Y=n;Y!==null;)if(n=Y,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Y=e;else for(;Y!==null;){n=Y;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,k=x.memoizedState,g=n.stateNode,f=g.getSnapshotBeforeUpdate(n.elementType===n.type?y:Mn(n.type,y),k);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(N){Oe(n,n.return,N)}if(e=n.sibling,e!==null){e.return=n.return,Y=e;break}Y=n.return}return x=Pd,Pd=!1,x}function ma(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&rl(n,t,o)}i=i.next}while(i!==a)}}function vo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function tl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function yh(e){var n=e.alternate;n!==null&&(e.alternate=null,yh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[er],delete n[Aa],delete n[Ws],delete n[K0],delete n[H0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wh(e){return e.tag===5||e.tag===3||e.tag===4}function Md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Wi));else if(a!==4&&(e=e.child,e!==null))for(al(e,n,t),e=e.sibling;e!==null;)al(e,n,t),e=e.sibling}function il(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(il(e,n,t),e=e.sibling;e!==null;)il(e,n,t),e=e.sibling}var Ke=null,_n=!1;function mr(e,n,t){for(t=t.child;t!==null;)jh(e,n,t),t=t.sibling}function jh(e,n,t){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(co,t)}catch{}switch(t.tag){case 5:Qe||kt(t,n);case 6:var a=Ke,i=_n;Ke=null,mr(e,n,t),Ke=a,_n=i,Ke!==null&&(_n?(e=Ke,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ke.removeChild(t.stateNode));break;case 18:Ke!==null&&(_n?(e=Ke,t=t.stateNode,e.nodeType===8?ts(e.parentNode,t):e.nodeType===1&&ts(e,t),ka(e)):ts(Ke,t.stateNode));break;case 4:a=Ke,i=_n,Ke=t.stateNode.containerInfo,_n=!0,mr(e,n,t),Ke=a,_n=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&rl(t,n,s),i=i.next}while(i!==a)}mr(e,n,t);break;case 1:if(!Qe&&(kt(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){Oe(t,n,l)}mr(e,n,t);break;case 21:mr(e,n,t);break;case 22:t.mode&1?(Qe=(a=Qe)||t.memoizedState!==null,mr(e,n,t),Qe=a):mr(e,n,t);break;default:mr(e,n,t)}}function _d(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new cg),n.forEach(function(a){var i=bg.bind(null,e,a);t.has(a)||(t.add(a),a.then(i,i))})}}function Pn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];try{var o=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,_n=!1;break e;case 3:Ke=l.stateNode.containerInfo,_n=!0;break e;case 4:Ke=l.stateNode.containerInfo,_n=!0;break e}l=l.return}if(Ke===null)throw Error(B(160));jh(o,s,i),Ke=null,_n=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Oe(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)kh(n,e),n=n.sibling}function kh(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pn(n,e),Gn(e),a&4){try{ma(3,e,e.return),vo(3,e)}catch(y){Oe(e,e.return,y)}try{ma(5,e,e.return)}catch(y){Oe(e,e.return,y)}}break;case 1:Pn(n,e),Gn(e),a&512&&t!==null&&kt(t,t.return);break;case 5:if(Pn(n,e),Gn(e),a&512&&t!==null&&kt(t,t.return),e.flags&32){var i=e.stateNode;try{ba(i,"")}catch(y){Oe(e,e.return,y)}}if(a&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&$p(i,o),Is(l,s);var d=Is(l,o);for(s=0;s<c.length;s+=2){var p=c[s],h=c[s+1];p==="style"?Gp(i,h):p==="dangerouslySetInnerHTML"?qp(i,h):p==="children"?ba(i,h):Tl(i,p,h,d)}switch(l){case"input":Cs(i,o);break;case"textarea":Kp(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Nt(i,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?Nt(i,!!o.multiple,o.defaultValue,!0):Nt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Aa]=o}catch(y){Oe(e,e.return,y)}}break;case 6:if(Pn(n,e),Gn(e),a&4){if(e.stateNode===null)throw Error(B(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Oe(e,e.return,y)}}break;case 3:if(Pn(n,e),Gn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{ka(n.containerInfo)}catch(y){Oe(e,e.return,y)}break;case 4:Pn(n,e),Gn(e);break;case 13:Pn(n,e),Gn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(cc=Le())),a&4&&_d(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(Qe=(d=Qe)||p,Pn(n,e),Qe=d):Pn(n,e),Gn(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(Y=e,p=e.child;p!==null;){for(h=Y=p;Y!==null;){switch(m=Y,w=m.child,m.tag){case 0:case 11:case 14:case 15:ma(4,m,m.return);break;case 1:kt(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){a=m,t=m.return;try{n=a,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(y){Oe(a,t,y)}}break;case 5:kt(m,m.return);break;case 22:if(m.memoizedState!==null){Vd(h);continue}}w!==null?(w.return=m,Y=w):Vd(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Yp("display",s))}catch(y){Oe(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){Oe(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pn(n,e),Gn(e),a&4&&_d(e);break;case 21:break;default:Pn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(wh(t)){var a=t;break e}t=t.return}throw Error(B(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(ba(i,""),a.flags&=-33);var o=Md(e);il(e,o,i);break;case 3:case 4:var s=a.stateNode.containerInfo,l=Md(e);al(e,l,s);break;default:throw Error(B(161))}}catch(c){Oe(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pg(e,n,t){Y=e,Ch(e)}function Ch(e,n,t){for(var a=(e.mode&1)!==0;Y!==null;){var i=Y,o=i.child;if(i.tag===22&&a){var s=i.memoizedState!==null||fi;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Qe;l=fi;var d=Qe;if(fi=s,(Qe=c)&&!d)for(Y=i;Y!==null;)s=Y,c=s.child,s.tag===22&&s.memoizedState!==null?Fd(i):c!==null?(c.return=s,Y=c):Fd(i);for(;o!==null;)Y=o,Ch(o),o=o.sibling;Y=i,fi=l,Qe=d}Bd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Y=o):Bd(e)}}function Bd(e){for(;Y!==null;){var n=Y;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Qe||vo(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Qe)if(t===null)a.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Mn(n.type,t.memoizedProps);a.componentDidUpdate(i,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&kd(n,o,a);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}kd(n,s,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&ka(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Qe||n.flags&512&&tl(n)}catch(m){Oe(n,n.return,m)}}if(n===e){Y=null;break}if(t=n.sibling,t!==null){t.return=n.return,Y=t;break}Y=n.return}}function Vd(e){for(;Y!==null;){var n=Y;if(n===e){Y=null;break}var t=n.sibling;if(t!==null){t.return=n.return,Y=t;break}Y=n.return}}function Fd(e){for(;Y!==null;){var n=Y;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{vo(4,n)}catch(c){Oe(n,t,c)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var i=n.return;try{a.componentDidMount()}catch(c){Oe(n,i,c)}}var o=n.return;try{tl(n)}catch(c){Oe(n,o,c)}break;case 5:var s=n.return;try{tl(n)}catch(c){Oe(n,s,c)}}}catch(c){Oe(n,n.return,c)}if(n===e){Y=null;break}var l=n.sibling;if(l!==null){l.return=n.return,Y=l;break}Y=n.return}}var ug=Math.ceil,eo=fr.ReactCurrentDispatcher,sc=fr.ReactCurrentOwner,zn=fr.ReactCurrentBatchConfig,xe=0,Ze=null,Me=null,He=0,gn=0,Ct=Mr(0),Ve=0,Da=null,rt=0,bo=0,lc=0,ga=null,ln=null,cc=0,Mt=1/0,ir=null,no=!1,ol=null,Tr=null,mi=!1,kr=null,ro=0,xa=0,sl=null,Ii=-1,Ti=0;function tn(){return xe&6?Le():Ii!==-1?Ii:Ii=Le()}function zr(e){return e.mode&1?xe&2&&He!==0?He&-He:Y0.transition!==null?(Ti===0&&(Ti=lu()),Ti):(e=be,e!==0||(e=window.event,e=e===void 0?16:mu(e.type)),e):1}function Un(e,n,t,a){if(50<xa)throw xa=0,sl=null,Error(B(185));Va(e,t,a),(!(xe&2)||e!==Ze)&&(e===Ze&&(!(xe&2)&&(bo|=t),Ve===4&&wr(e,He)),un(e,a),t===1&&xe===0&&!(n.mode&1)&&(Mt=Le()+500,mo&&_r()))}function un(e,n){var t=e.callbackNode;Ym(e,n);var a=Bi(e,e===Ze?He:0);if(a===0)t!==null&&Gc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&Gc(t),n===1)e.tag===0?q0(Ud.bind(null,e)):Du(Ud.bind(null,e)),Z0(function(){!(xe&6)&&_r()}),t=null;else{switch(cu(a)){case 1:t=Ll;break;case 4:t=ou;break;case 16:t=_i;break;case 536870912:t=su;break;default:t=_i}t=Rh(t,Nh.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Nh(e,n){if(Ii=-1,Ti=0,xe&6)throw Error(B(327));var t=e.callbackNode;if(Tt()&&e.callbackNode!==t)return null;var a=Bi(e,e===Ze?He:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=to(e,a);else{n=a;var i=xe;xe|=2;var o=Eh();(Ze!==e||He!==n)&&(ir=null,Mt=Le()+500,Gr(e,n));do try{mg();break}catch(l){Sh(e,l)}while(!0);ql(),eo.current=o,xe=i,Me!==null?n=0:(Ze=null,He=0,n=Ve)}if(n!==0){if(n===2&&(i=Ds(e),i!==0&&(a=i,n=ll(e,i))),n===1)throw t=Da,Gr(e,0),wr(e,a),un(e,Le()),t;if(n===6)wr(e,a);else{if(i=e.current.alternate,!(a&30)&&!hg(i)&&(n=to(e,a),n===2&&(o=Ds(e),o!==0&&(a=o,n=ll(e,o))),n===1))throw t=Da,Gr(e,0),wr(e,a),un(e,Le()),t;switch(e.finishedWork=i,e.finishedLanes=a,n){case 0:case 1:throw Error(B(345));case 2:$r(e,ln,ir);break;case 3:if(wr(e,a),(a&130023424)===a&&(n=cc+500-Le(),10<n)){if(Bi(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){tn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Us($r.bind(null,e,ln,ir),n);break}$r(e,ln,ir);break;case 4:if(wr(e,a),(a&4194240)===a)break;for(n=e.eventTimes,i=-1;0<a;){var s=31-Fn(a);o=1<<s,s=n[s],s>i&&(i=s),a&=~o}if(a=i,a=Le()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*ug(a/1960))-a,10<a){e.timeoutHandle=Us($r.bind(null,e,ln,ir),a);break}$r(e,ln,ir);break;case 5:$r(e,ln,ir);break;default:throw Error(B(329))}}}return un(e,Le()),e.callbackNode===t?Nh.bind(null,e):null}function ll(e,n){var t=ga;return e.current.memoizedState.isDehydrated&&(Gr(e,n).flags|=256),e=to(e,n),e!==2&&(n=ln,ln=t,n!==null&&cl(n)),e}function cl(e){ln===null?ln=e:ln.push.apply(ln,e)}function hg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var i=t[a],o=i.getSnapshot;i=i.value;try{if(!Wn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wr(e,n){for(n&=~lc,n&=~bo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Fn(n),a=1<<t;e[t]=-1,n&=~a}}function Ud(e){if(xe&6)throw Error(B(327));Tt();var n=Bi(e,0);if(!(n&1))return un(e,Le()),null;var t=to(e,n);if(e.tag!==0&&t===2){var a=Ds(e);a!==0&&(n=a,t=ll(e,a))}if(t===1)throw t=Da,Gr(e,0),wr(e,n),un(e,Le()),t;if(t===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,$r(e,ln,ir),un(e,Le()),null}function dc(e,n){var t=xe;xe|=1;try{return e(n)}finally{xe=t,xe===0&&(Mt=Le()+500,mo&&_r())}}function tt(e){kr!==null&&kr.tag===0&&!(xe&6)&&Tt();var n=xe;xe|=1;var t=zn.transition,a=be;try{if(zn.transition=null,be=1,e)return e()}finally{be=a,zn.transition=t,xe=n,!(xe&6)&&_r()}}function pc(){gn=Ct.current,Se(Ct)}function Gr(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,W0(t)),Me!==null)for(t=Me.return;t!==null;){var a=t;switch($l(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Zi();break;case 3:Lt(),Se(dn),Se(en),ec();break;case 5:Xl(a);break;case 4:Lt();break;case 13:Se(Ie);break;case 19:Se(Ie);break;case 10:Yl(a.type._context);break;case 22:case 23:pc()}t=t.return}if(Ze=e,Me=e=Rr(e.current,null),He=gn=n,Ve=0,Da=null,lc=bo=rt=0,ln=ga=null,Hr!==null){for(n=0;n<Hr.length;n++)if(t=Hr[n],a=t.interleaved,a!==null){t.interleaved=null;var i=a.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,a.next=s}t.pending=a}Hr=null}return e}function Sh(e,n){do{var t=Me;try{if(ql(),Si.current=Xi,Qi){for(var a=Te.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Qi=!1}if(nt=0,We=Be=Te=null,fa=!1,za=0,sc.current=null,t===null||t.return===null){Ve=1,Da=n,Me=null;break}e:{var o=e,s=t.return,l=t,c=n;if(n=He,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Id(s);if(w!==null){w.flags&=-257,Td(w,s,l,o,n),w.mode&1&&Ad(o,d,n),n=w,c=d;var x=n.updateQueue;if(x===null){var y=new Set;y.add(c),n.updateQueue=y}else x.add(c);break e}else{if(!(n&1)){Ad(o,d,n),uc();break e}c=Error(B(426))}}else if(Ae&&l.mode&1){var k=Id(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Td(k,s,l,o,n),Kl(Pt(c,l));break e}}o=c=Pt(c,l),Ve!==4&&(Ve=2),ga===null?ga=[o]:ga.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var g=ch(o,c,n);jd(o,g);break e;case 1:l=c;var f=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Tr===null||!Tr.has(v)))){o.flags|=65536,n&=-n,o.lanes|=n;var N=dh(o,l,n);jd(o,N);break e}}o=o.return}while(o!==null)}Ih(t)}catch(z){n=z,Me===t&&t!==null&&(Me=t=t.return);continue}break}while(!0)}function Eh(){var e=eo.current;return eo.current=Xi,e===null?Xi:e}function uc(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ze===null||!(rt&268435455)&&!(bo&268435455)||wr(Ze,He)}function to(e,n){var t=xe;xe|=2;var a=Eh();(Ze!==e||He!==n)&&(ir=null,Gr(e,n));do try{fg();break}catch(i){Sh(e,i)}while(!0);if(ql(),xe=t,eo.current=a,Me!==null)throw Error(B(261));return Ze=null,He=0,Ve}function fg(){for(;Me!==null;)Ah(Me)}function mg(){for(;Me!==null&&!Vm();)Ah(Me)}function Ah(e){var n=zh(e.alternate,e,gn);e.memoizedProps=e.pendingProps,n===null?Ih(e):Me=n,sc.current=null}function Ih(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=lg(t,n),t!==null){t.flags&=32767,Me=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Me=null;return}}else if(t=sg(t,n,gn),t!==null){Me=t;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);Ve===0&&(Ve=5)}function $r(e,n,t){var a=be,i=zn.transition;try{zn.transition=null,be=1,gg(e,n,t,a)}finally{zn.transition=i,be=a}return null}function gg(e,n,t,a){do Tt();while(kr!==null);if(xe&6)throw Error(B(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Gm(e,o),e===Ze&&(Me=Ze=null,He=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||mi||(mi=!0,Rh(_i,function(){return Tt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=zn.transition,zn.transition=null;var s=be;be=1;var l=xe;xe|=4,sc.current=null,dg(e,t),kh(t,e),P0(Vs),Vi=!!Bs,Vs=Bs=null,e.current=t,pg(t),Fm(),xe=l,be=s,zn.transition=o}else e.current=t;if(mi&&(mi=!1,kr=e,ro=i),o=e.pendingLanes,o===0&&(Tr=null),Zm(t.stateNode),un(e,Le()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],a(i.value,{componentStack:i.stack,digest:i.digest});if(no)throw no=!1,e=ol,ol=null,e;return ro&1&&e.tag!==0&&Tt(),o=e.pendingLanes,o&1?e===sl?xa++:(xa=0,sl=e):xa=0,_r(),null}function Tt(){if(kr!==null){var e=cu(ro),n=zn.transition,t=be;try{if(zn.transition=null,be=16>e?16:e,kr===null)var a=!1;else{if(e=kr,kr=null,ro=0,xe&6)throw Error(B(331));var i=xe;for(xe|=4,Y=e.current;Y!==null;){var o=Y,s=o.child;if(Y.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(Y=d;Y!==null;){var p=Y;switch(p.tag){case 0:case 11:case 15:ma(8,p,o)}var h=p.child;if(h!==null)h.return=p,Y=h;else for(;Y!==null;){p=Y;var m=p.sibling,w=p.return;if(yh(p),p===d){Y=null;break}if(m!==null){m.return=w,Y=m;break}Y=w}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}Y=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Y=s;else e:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ma(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,Y=g;break e}Y=o.return}}var f=e.current;for(Y=f;Y!==null;){s=Y;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,Y=v;else e:for(s=f;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vo(9,l)}}catch(z){Oe(l,l.return,z)}if(l===s){Y=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,Y=N;break e}Y=l.return}}if(xe=i,_r(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(co,e)}catch{}a=!0}return a}finally{be=t,zn.transition=n}}return!1}function Wd(e,n,t){n=Pt(t,n),n=ch(e,n,1),e=Ir(e,n,1),n=tn(),e!==null&&(Va(e,1,n),un(e,n))}function Oe(e,n,t){if(e.tag===3)Wd(e,e,t);else for(;n!==null;){if(n.tag===3){Wd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Tr===null||!Tr.has(a))){e=Pt(t,e),e=dh(n,e,1),n=Ir(n,e,1),e=tn(),n!==null&&(Va(n,1,e),un(n,e));break}}n=n.return}}function xg(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=tn(),e.pingedLanes|=e.suspendedLanes&t,Ze===e&&(He&t)===t&&(Ve===4||Ve===3&&(He&130023424)===He&&500>Le()-cc?Gr(e,0):lc|=t),un(e,n)}function Th(e,n){n===0&&(e.mode&1?(n=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):n=1);var t=tn();e=ur(e,n),e!==null&&(Va(e,n,t),un(e,t))}function vg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Th(e,t)}function bg(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(B(314))}a!==null&&a.delete(n),Th(e,t)}var zh;zh=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||dn.current)cn=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return cn=!1,og(e,n,t);cn=!!(e.flags&131072)}else cn=!1,Ae&&n.flags&1048576&&Lu(n,Hi,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Ai(e,n),e=n.pendingProps;var i=Rt(n,en.current);It(n,t),i=rc(null,n,a,e,i,t);var o=tc();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,pn(a)?(o=!0,$i(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jl(n),i.updater=xo,n.stateNode=i,i._reactInternals=n,Ys(n,a,e,t),n=Qs(null,n,a,!0,o,t)):(n.tag=0,Ae&&o&&Zl(n),rn(null,n,i,t),n=n.child),n;case 16:a=n.elementType;e:{switch(Ai(e,n),e=n.pendingProps,i=a._init,a=i(a._payload),n.type=a,i=n.tag=wg(a),e=Mn(a,e),i){case 0:n=Js(null,n,a,e,t);break e;case 1:n=Od(null,n,a,e,t);break e;case 11:n=zd(null,n,a,e,t);break e;case 14:n=Rd(null,n,a,Mn(a.type,e),t);break e}throw Error(B(306,a,""))}return n;case 0:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Mn(a,i),Js(e,n,a,i,t);case 1:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Mn(a,i),Od(e,n,a,i,t);case 3:e:{if(fh(n),e===null)throw Error(B(387));a=n.pendingProps,o=n.memoizedState,i=o.element,Fu(e,n),Gi(n,a,null,t);var s=n.memoizedState;if(a=s.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Pt(Error(B(423)),n),n=Dd(e,n,a,t,i);break e}else if(a!==i){i=Pt(Error(B(424)),n),n=Dd(e,n,a,t,i);break e}else for(xn=Ar(n.stateNode.containerInfo.firstChild),vn=n,Ae=!0,Vn=null,t=Bu(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ot(),a===i){n=hr(e,n,t);break e}rn(e,n,a,t)}n=n.child}return n;case 5:return Uu(n),e===null&&Ks(n),a=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Fs(a,i)?s=null:o!==null&&Fs(a,o)&&(n.flags|=32),hh(e,n),rn(e,n,s,t),n.child;case 6:return e===null&&Ks(n),null;case 13:return mh(e,n,t);case 4:return Ql(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Dt(n,null,a,t):rn(e,n,a,t),n.child;case 11:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Mn(a,i),zd(e,n,a,i,t);case 7:return rn(e,n,n.pendingProps,t),n.child;case 8:return rn(e,n,n.pendingProps.children,t),n.child;case 12:return rn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,ke(qi,a._currentValue),a._currentValue=s,o!==null)if(Wn(o.value,s)){if(o.children===i.children&&!dn.current){n=hr(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===a){if(o.tag===1){c=cr(-1,t&-t),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),Hs(o.return,t,n),l.lanes|=t;break}c=c.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Hs(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}rn(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,a=n.pendingProps.children,It(n,t),i=Rn(i),a=a(i),n.flags|=1,rn(e,n,a,t),n.child;case 14:return a=n.type,i=Mn(a,n.pendingProps),i=Mn(a.type,i),Rd(e,n,a,i,t);case 15:return ph(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Mn(a,i),Ai(e,n),n.tag=1,pn(a)?(e=!0,$i(n)):e=!1,It(n,t),lh(n,a,i),Ys(n,a,i,t),Qs(null,n,a,!0,e,t);case 19:return gh(e,n,t);case 22:return uh(e,n,t)}throw Error(B(156,n.tag))};function Rh(e,n){return iu(e,n)}function yg(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(e,n,t,a){return new yg(e,n,t,a)}function hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wg(e){if(typeof e=="function")return hc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Rl)return 11;if(e===Ol)return 14}return 2}function Rr(e,n){var t=e.alternate;return t===null?(t=Tn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function zi(e,n,t,a,i,o){var s=2;if(a=e,typeof e=="function")hc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ft:return Jr(t.children,i,o,n);case zl:s=8,i|=8;break;case bs:return e=Tn(12,t,n,i|2),e.elementType=bs,e.lanes=o,e;case ys:return e=Tn(13,t,n,i),e.elementType=ys,e.lanes=o,e;case ws:return e=Tn(19,t,n,i),e.elementType=ws,e.lanes=o,e;case Up:return yo(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vp:s=10;break e;case Fp:s=9;break e;case Rl:s=11;break e;case Ol:s=14;break e;case vr:s=16,a=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return n=Tn(s,t,n,i),n.elementType=e,n.type=a,n.lanes=o,n}function Jr(e,n,t,a){return e=Tn(7,e,a,n),e.lanes=t,e}function yo(e,n,t,a){return e=Tn(22,e,a,n),e.elementType=Up,e.lanes=t,e.stateNode={isHidden:!1},e}function ps(e,n,t){return e=Tn(6,e,null,n),e.lanes=t,e}function us(e,n,t){return n=Tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function jg(e,n,t,a,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fc(e,n,t,a,i,o,s,l,c){return e=new jg(e,n,t,l,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Tn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(o),e}function kg(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ht,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function Oh(e){if(!e)return Lr;e=e._reactInternals;e:{if(ot(e)!==e||e.tag!==1)throw Error(B(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(pn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(B(171))}if(e.tag===1){var t=e.type;if(pn(t))return Ou(e,t,n)}return n}function Dh(e,n,t,a,i,o,s,l,c){return e=fc(t,a,!0,e,i,o,s,l,c),e.context=Oh(null),t=e.current,a=tn(),i=zr(t),o=cr(a,i),o.callback=n??null,Ir(t,o,i),e.current.lanes=i,Va(e,i,a),un(e,a),e}function wo(e,n,t,a){var i=n.current,o=tn(),s=zr(i);return t=Oh(t),n.context===null?n.context=t:n.pendingContext=t,n=cr(o,s),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=Ir(i,n,s),e!==null&&(Un(e,i,s,o),Ni(e,i,s)),s}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function mc(e,n){Zd(e,n),(e=e.alternate)&&Zd(e,n)}function Cg(){return null}var Lh=typeof reportError=="function"?reportError:function(e){console.error(e)};function gc(e){this._internalRoot=e}jo.prototype.render=gc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(B(409));wo(e,n,null,null)};jo.prototype.unmount=gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;tt(function(){wo(null,e,null,null)}),n[pr]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var n=uu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<yr.length&&n!==0&&n<yr[t].priority;t++);yr.splice(t,0,e),t===0&&fu(e)}};function xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $d(){}function Ng(e,n,t,a,i){if(i){if(typeof a=="function"){var o=a;a=function(){var d=ao(s);o.call(d)}}var s=Dh(n,a,e,0,null,!1,!1,"",$d);return e._reactRootContainer=s,e[pr]=s.current,Sa(e.nodeType===8?e.parentNode:e),tt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var d=ao(c);l.call(d)}}var c=fc(e,0,!1,null,null,!1,!1,"",$d);return e._reactRootContainer=c,e[pr]=c.current,Sa(e.nodeType===8?e.parentNode:e),tt(function(){wo(n,c,t,a)}),c}function Co(e,n,t,a,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=ao(s);l.call(c)}}wo(n,s,e,i)}else s=Ng(t,n,e,i,a);return ao(s)}du=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=sa(n.pendingLanes);t!==0&&(Pl(n,t|1),un(n,Le()),!(xe&6)&&(Mt=Le()+500,_r()))}break;case 13:tt(function(){var a=ur(e,1);if(a!==null){var i=tn();Un(a,e,1,i)}}),mc(e,1)}};Ml=function(e){if(e.tag===13){var n=ur(e,134217728);if(n!==null){var t=tn();Un(n,e,134217728,t)}mc(e,134217728)}};pu=function(e){if(e.tag===13){var n=zr(e),t=ur(e,n);if(t!==null){var a=tn();Un(t,e,n,a)}mc(e,n)}};uu=function(){return be};hu=function(e,n){var t=be;try{return be=e,n()}finally{be=t}};zs=function(e,n,t){switch(n){case"input":if(Cs(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=fo(a);if(!i)throw Error(B(90));Zp(a),Cs(a,i)}}}break;case"textarea":Kp(e,t);break;case"select":n=t.value,n!=null&&Nt(e,!!t.multiple,n,!1)}};Xp=dc;eu=tt;var Sg={usingClientEntryPoint:!1,Events:[Ua,vt,fo,Jp,Qp,dc]},na={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Eg={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tu(e),e===null?null:e.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||Cg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gi.isDisabled&&gi.supportsFiber)try{co=gi.inject(Eg),nr=gi}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sg;yn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(n))throw Error(B(200));return kg(e,n,null,t)};yn.createRoot=function(e,n){if(!xc(e))throw Error(B(299));var t=!1,a="",i=Lh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=fc(e,1,!1,null,null,t,!1,a,i),e[pr]=n.current,Sa(e.nodeType===8?e.parentNode:e),new gc(n)};yn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=tu(n),e=e===null?null:e.stateNode,e};yn.flushSync=function(e){return tt(e)};yn.hydrate=function(e,n,t){if(!ko(n))throw Error(B(200));return Co(null,e,n,!0,t)};yn.hydrateRoot=function(e,n,t){if(!xc(e))throw Error(B(405));var a=t!=null&&t.hydratedSources||null,i=!1,o="",s=Lh;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Dh(n,null,e,1,t??null,i,!1,o,s),e[pr]=n.current,Sa(e),a)for(e=0;e<a.length;e++)t=a[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new jo(n)};yn.render=function(e,n,t){if(!ko(n))throw Error(B(200));return Co(null,e,n,!1,t)};yn.unmountComponentAtNode=function(e){if(!ko(e))throw Error(B(40));return e._reactRootContainer?(tt(function(){Co(null,null,e,!1,function(){e._reactRootContainer=null,e[pr]=null})}),!0):!1};yn.unstable_batchedUpdates=dc;yn.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!ko(t))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return Co(e,n,t,!1,a)};yn.version="18.3.1-next-f1338f8080-20240426";function Ph(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ph)}catch(e){console.error(e)}}Ph(),Pp.exports=yn;var Ag=Pp.exports,Mh,Kd=Ag;Mh=Kd.createRoot,Kd.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},La.apply(this,arguments)}var Cr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Cr||(Cr={}));const Hd="popstate";function Ig(e){e===void 0&&(e={});function n(a,i){let{pathname:o,search:s,hash:l}=a.location;return dl("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(a,i){return typeof i=="string"?i:io(i)}return zg(n,t,null,e)}function Pe(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function _h(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Tg(){return Math.random().toString(36).substr(2,8)}function qd(e,n){return{usr:e.state,key:e.key,idx:n}}function dl(e,n,t,a){return t===void 0&&(t=null),La({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Ut(n):n,{state:t,key:n&&n.key||a||Tg()})}function io(e){let{pathname:n="/",search:t="",hash:a=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function Ut(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function zg(e,n,t,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,s=i.history,l=Cr.Pop,c=null,d=p();d==null&&(d=0,s.replaceState(La({},s.state,{idx:d}),""));function p(){return(s.state||{idx:null}).idx}function h(){l=Cr.Pop;let k=p(),g=k==null?null:k-d;d=k,c&&c({action:l,location:y.location,delta:g})}function m(k,g){l=Cr.Push;let f=dl(y.location,k,g);d=p()+1;let v=qd(f,d),N=y.createHref(f);try{s.pushState(v,"",N)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(N)}o&&c&&c({action:l,location:y.location,delta:1})}function w(k,g){l=Cr.Replace;let f=dl(y.location,k,g);d=p();let v=qd(f,d),N=y.createHref(f);s.replaceState(v,"",N),o&&c&&c({action:l,location:y.location,delta:0})}function x(k){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof k=="string"?k:io(k);return f=f.replace(/ $/,"%20"),Pe(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let y={get action(){return l},get location(){return e(i,s)},listen(k){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Hd,h),c=k,()=>{i.removeEventListener(Hd,h),c=null}},createHref(k){return n(i,k)},createURL:x,encodeLocation(k){let g=x(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:w,go(k){return s.go(k)}};return y}var Yd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yd||(Yd={}));function Rg(e,n,t){return t===void 0&&(t="/"),Og(e,n,t)}function Og(e,n,t,a){let i=typeof n=="string"?Ut(n):n,o=vc(i.pathname||"/",t);if(o==null)return null;let s=Bh(e);Dg(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let d=Kg(o);l=Wg(s[c],d)}return l}function Bh(e,n,t,a){n===void 0&&(n=[]),t===void 0&&(t=[]),a===void 0&&(a="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(Pe(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=Or([a,c.relativePath]),p=t.concat(c);o.children&&o.children.length>0&&(Pe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Bh(o.children,n,p,d)),!(o.path==null&&!o.index)&&n.push({path:d,score:Fg(d,o.index),routesMeta:p})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of Vh(o.path))i(o,s,c)}),n}function Vh(e){let n=e.split("/");if(n.length===0)return[];let[t,...a]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(a.length===0)return i?[o,""]:[o];let s=Vh(a.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Dg(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Ug(n.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}const Lg=/^:[\w-]+$/,Pg=3,Mg=2,_g=1,Bg=10,Vg=-2,Gd=e=>e==="*";function Fg(e,n){let t=e.split("/"),a=t.length;return t.some(Gd)&&(a+=Vg),n&&(a+=Mg),t.filter(i=>!Gd(i)).reduce((i,o)=>i+(Lg.test(o)?Pg:o===""?_g:Bg),a)}function Ug(e,n){return e.length===n.length&&e.slice(0,-1).every((a,i)=>a===n[i])?e[e.length-1]-n[n.length-1]:0}function Wg(e,n,t){let{routesMeta:a}=e,i={},o="/",s=[];for(let l=0;l<a.length;++l){let c=a[l],d=l===a.length-1,p=o==="/"?n:n.slice(o.length)||"/",h=Zg({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),m=c.route;if(!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:Or([o,h.pathname]),pathnameBase:Gg(Or([o,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(o=Or([o,h.pathnameBase]))}return s}function Zg(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,a]=$g(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((d,p,h)=>{let{paramName:m,isOptional:w}=p;if(m==="*"){let y=l[h]||"";s=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const x=l[h];return w&&!x?d[m]=void 0:d[m]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:e}}function $g(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),_h(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(a.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),a]}function Kg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return _h(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function vc(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,a=e.charAt(t);return a&&a!=="/"?null:e.slice(t)||"/"}function Hg(e,n){n===void 0&&(n="/");let{pathname:t,search:a="",hash:i=""}=typeof e=="string"?Ut(e):e;return{pathname:t?t.startsWith("/")?t:qg(t,n):n,search:Jg(a),hash:Qg(i)}}function qg(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function hs(e,n,t,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function bc(e,n){let t=Yg(e);return n?t.map((a,i)=>i===t.length-1?a.pathname:a.pathnameBase):t.map(a=>a.pathnameBase)}function yc(e,n,t,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=Ut(e):(i=La({},e),Pe(!i.pathname||!i.pathname.includes("?"),hs("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),hs("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),hs("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=t;else{let h=n.length-1;if(!a&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}l=h>=0?n[h]:"/"}let c=Hg(i,l),d=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const Or=e=>e.join("/").replace(/\/\/+/g,"/"),Gg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fh=["post","put","patch","delete"];new Set(Fh);const e1=["get",...Fh];new Set(e1);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Pa.apply(this,arguments)}const wc=u.createContext(null),n1=u.createContext(null),Br=u.createContext(null),No=u.createContext(null),Vr=u.createContext({outlet:null,matches:[],isDataRoute:!1}),Uh=u.createContext(null);function r1(e,n){let{relative:t}=n===void 0?{}:n;Wt()||Pe(!1);let{basename:a,navigator:i}=u.useContext(Br),{hash:o,pathname:s,search:l}=Zh(e,{relative:t}),c=s;return a!=="/"&&(c=s==="/"?a:Or([a,s])),i.createHref({pathname:c,search:l,hash:o})}function Wt(){return u.useContext(No)!=null}function Zn(){return Wt()||Pe(!1),u.useContext(No).location}function Wh(e){u.useContext(Br).static||u.useLayoutEffect(e)}function Fr(){let{isDataRoute:e}=u.useContext(Vr);return e?m1():t1()}function t1(){Wt()||Pe(!1);let e=u.useContext(wc),{basename:n,future:t,navigator:a}=u.useContext(Br),{matches:i}=u.useContext(Vr),{pathname:o}=Zn(),s=JSON.stringify(bc(i,t.v7_relativeSplatPath)),l=u.useRef(!1);return Wh(()=>{l.current=!0}),u.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){a.go(d);return}let h=yc(d,JSON.parse(s),o,p.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:Or([n,h.pathname])),(p.replace?a.replace:a.push)(h,p.state,p)},[n,a,s,o,e])}function Zh(e,n){let{relative:t}=n===void 0?{}:n,{future:a}=u.useContext(Br),{matches:i}=u.useContext(Vr),{pathname:o}=Zn(),s=JSON.stringify(bc(i,a.v7_relativeSplatPath));return u.useMemo(()=>yc(e,JSON.parse(s),o,t==="path"),[e,s,o,t])}function a1(e,n){return i1(e,n)}function i1(e,n,t,a){Wt()||Pe(!1);let{navigator:i}=u.useContext(Br),{matches:o}=u.useContext(Vr),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=Zn(),p;if(n){var h;let k=typeof n=="string"?Ut(n):n;c==="/"||(h=k.pathname)!=null&&h.startsWith(c)||Pe(!1),p=k}else p=d;let m=p.pathname||"/",w=m;if(c!=="/"){let k=c.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=Rg(e,{pathname:w}),y=d1(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Or([c,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:Or([c,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,t,a);return n&&y?u.createElement(No.Provider,{value:{location:Pa({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Cr.Pop}},y):y}function o1(){let e=f1(),n=Xg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},n),t?u.createElement("pre",{style:i},t):null,null)}const s1=u.createElement(o1,null);class l1 extends u.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?u.createElement(Vr.Provider,{value:this.props.routeContext},u.createElement(Uh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function c1(e){let{routeContext:n,match:t,children:a}=e,i=u.useContext(wc);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),u.createElement(Vr.Provider,{value:n},a)}function d1(e,n,t,a){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),a===void 0&&(a=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=a)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let s=e,l=(i=t)==null?void 0:i.errors;if(l!=null){let p=s.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);p>=0||Pe(!1),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(t&&a&&a.v7_partialHydration)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=p),h.route.id){let{loaderData:m,errors:w}=t,x=h.route.loader&&m[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||x){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,h,m)=>{let w,x=!1,y=null,k=null;t&&(w=l&&h.route.id?l[h.route.id]:void 0,y=h.route.errorElement||s1,c&&(d<0&&m===0?(g1("route-fallback"),x=!0,k=null):d===m&&(x=!0,k=h.route.hydrateFallbackElement||null)));let g=n.concat(s.slice(0,m+1)),f=()=>{let v;return w?v=y:x?v=k:h.route.Component?v=u.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=p,u.createElement(c1,{match:h,routeContext:{outlet:p,matches:g,isDataRoute:t!=null},children:v})};return t&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?u.createElement(l1,{location:t.location,revalidation:t.revalidation,component:y,error:w,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var $h=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($h||{}),Kh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Kh||{});function p1(e){let n=u.useContext(wc);return n||Pe(!1),n}function u1(e){let n=u.useContext(n1);return n||Pe(!1),n}function h1(e){let n=u.useContext(Vr);return n||Pe(!1),n}function Hh(e){let n=h1(),t=n.matches[n.matches.length-1];return t.route.id||Pe(!1),t.route.id}function f1(){var e;let n=u.useContext(Uh),t=u1(),a=Hh();return n!==void 0?n:(e=t.errors)==null?void 0:e[a]}function m1(){let{router:e}=p1($h.UseNavigateStable),n=Hh(Kh.UseNavigateStable),t=u.useRef(!1);return Wh(()=>{t.current=!0}),u.useCallback(function(i,o){o===void 0&&(o={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Pa({fromRouteId:n},o)))},[e,n])}const Jd={};function g1(e,n,t){Jd[e]||(Jd[e]=!0)}function x1(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function $e(e){let{to:n,replace:t,state:a,relative:i}=e;Wt()||Pe(!1);let{future:o,static:s}=u.useContext(Br),{matches:l}=u.useContext(Vr),{pathname:c}=Zn(),d=Fr(),p=yc(n,bc(l,o.v7_relativeSplatPath),c,i==="path"),h=JSON.stringify(p);return u.useEffect(()=>d(JSON.parse(h),{replace:t,state:a,relative:i}),[d,h,i,t,a]),null}function de(e){Pe(!1)}function v1(e){let{basename:n="/",children:t=null,location:a,navigationType:i=Cr.Pop,navigator:o,static:s=!1,future:l}=e;Wt()&&Pe(!1);let c=n.replace(/^\/*/,"/"),d=u.useMemo(()=>({basename:c,navigator:o,static:s,future:Pa({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof a=="string"&&(a=Ut(a));let{pathname:p="/",search:h="",hash:m="",state:w=null,key:x="default"}=a,y=u.useMemo(()=>{let k=vc(p,c);return k==null?null:{location:{pathname:k,search:h,hash:m,state:w,key:x},navigationType:i}},[c,p,h,m,w,x,i]);return y==null?null:u.createElement(Br.Provider,{value:d},u.createElement(No.Provider,{children:t,value:y}))}function b1(e){let{children:n,location:t}=e;return a1(pl(n),t)}new Promise(()=>{});function pl(e,n){n===void 0&&(n=[]);let t=[];return u.Children.forEach(e,(a,i)=>{if(!u.isValidElement(a))return;let o=[...n,i];if(a.type===u.Fragment){t.push.apply(t,pl(a.props.children,o));return}a.type!==de&&Pe(!1),!a.props.index||!a.props.children||Pe(!1);let s={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=pl(a.props.children,o)),t.push(s)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ul(){return ul=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ul.apply(this,arguments)}function y1(e,n){if(e==null)return{};var t={},a=Object.keys(e),i,o;for(o=0;o<a.length;o++)i=a[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function w1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function j1(e,n){return e.button===0&&(!n||n==="_self")&&!w1(e)}function hl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,t)=>{let a=e[t];return n.concat(Array.isArray(a)?a.map(i=>[t,i]):[[t,a]])},[]))}function k1(e,n){let t=hl(e);return n&&n.forEach((a,i)=>{t.has(i)||n.getAll(i).forEach(o=>{t.append(i,o)})}),t}const C1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],N1="6";try{window.__reactRouterVersion=N1}catch{}const S1="startTransition",Qd=xm[S1];function E1(e){let{basename:n,children:t,future:a,window:i}=e,o=u.useRef();o.current==null&&(o.current=Ig({window:i,v5Compat:!0}));let s=o.current,[l,c]=u.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},p=u.useCallback(h=>{d&&Qd?Qd(()=>c(h)):c(h)},[c,d]);return u.useLayoutEffect(()=>s.listen(p),[s,p]),u.useEffect(()=>x1(a),[a]),u.createElement(v1,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:s,future:a})}const A1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",I1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V=u.forwardRef(function(n,t){let{onClick:a,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:d,preventScrollReset:p,viewTransition:h}=n,m=y1(n,C1),{basename:w}=u.useContext(Br),x,y=!1;if(typeof d=="string"&&I1.test(d)&&(x=d,A1))try{let v=new URL(window.location.href),N=d.startsWith("//")?new URL(v.protocol+d):new URL(d),z=vc(N.pathname,w);N.origin===v.origin&&z!=null?d=z+N.search+N.hash:y=!0}catch{}let k=r1(d,{relative:i}),g=T1(d,{replace:s,state:l,target:c,preventScrollReset:p,relative:i,viewTransition:h});function f(v){a&&a(v),v.defaultPrevented||g(v)}return u.createElement("a",ul({},m,{href:x||k,onClick:y||o?a:f,ref:t,target:c}))});var Xd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Xd||(Xd={}));var ep;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ep||(ep={}));function T1(e,n){let{target:t,replace:a,state:i,preventScrollReset:o,relative:s,viewTransition:l}=n===void 0?{}:n,c=Fr(),d=Zn(),p=Zh(e,{relative:s});return u.useCallback(h=>{if(j1(h,t)){h.preventDefault();let m=a!==void 0?a:io(d)===io(p);c(e,{replace:m,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[d,c,p,a,i,t,e,o,s,l])}function z1(e){let n=u.useRef(hl(e)),t=u.useRef(!1),a=Zn(),i=u.useMemo(()=>k1(a.search,t.current?null:n.current),[a.search]),o=Fr(),s=u.useCallback((l,c)=>{const d=hl(typeof l=="function"?l(i):l);t.current=!0,o("?"+d,c)},[o,i]);return[i,s]}function jn(){u.useEffect(()=>{const e=document.getElementById("areas-toggle"),n=[];if(e){const t=a=>{a.preventDefault(),e.parentElement&&e.parentElement.classList.toggle("open")};e.addEventListener("click",t),n.push(()=>e.removeEventListener("click",t))}return()=>{n.forEach(t=>{try{t()}catch{}})}},[])}function R1(){u.useEffect(()=>{const e=document.getElementById("splash"),n=document.getElementById("splashLogo"),t=document.getElementById("app"),a=()=>{if(e)try{e.classList.add("splash--hide"),e.setAttribute("aria-hidden","true"),e.style.display="none",e.style.pointerEvents="none"}catch{}};try{e&&(e.classList.remove("splash--hide"),e.removeAttribute("aria-hidden"),e.style.display="",e.style.pointerEvents="")}catch{}if((()=>{try{return sessionStorage.getItem("koop_hasVisited")==="1"}catch{return!1}})()||document.documentElement.classList.contains("skip-splash")){a(),t&&(t.style.opacity="1");return}const s=2500,l=800,c=performance.now();function d(){n&&(n.offsetWidth,n.classList.add("is-visible"))}function p(){if(t)if(t.style.opacity="0",t.offsetHeight,t.animate){const y=t.animate([{opacity:0},{opacity:1}],{duration:800,easing:"ease",fill:"forwards"});y.onfinish=()=>{t.style.opacity="1"}}else t.style.transition="opacity 0.8s ease",requestAnimationFrame(()=>{t.style.opacity="1"})}function h(){const y=performance.now()-c,k=Math.max(0,s-y);setTimeout(()=>{p(),e&&e.classList.add("splash--hide"),setTimeout(()=>{a();try{sessionStorage.setItem("koop_hasVisited","1")}catch{}document.documentElement.classList.add("skip-splash")},l)},k)}async function m(){try{n&&"decode"in n?await n.decode():n&&!n.complete&&await new Promise(y=>n.addEventListener("load",y,{once:!0}))}catch{}d(),h()}const w=y=>{y.persisted&&(a(),t&&(t.style.opacity="1"))};window.addEventListener("pageshow",w),m();const x=setTimeout(()=>{const y=document.getElementById("splash");if(y&&document.body.contains(y))try{y.classList.add("splash--hide"),y.setAttribute("aria-hidden","true"),y.style.display="none",y.style.pointerEvents="none"}catch{}},7e3);return()=>{window.removeEventListener("pageshow",w),clearTimeout(x)}},[])}function kn(){const e=Fr(),n=Zn(),t=i=>{const o="/"+(i||"").split("/").filter(Boolean).pop(),s={"/index.html":"/","/derecho.html":"/derecho","/contabilidad.html":"/contabilidad","/auditoria.html":"/auditoria","/derecho-administrativo.html":"/derecho-administrativo","/derecho-familia.html":"/derecho-familia","/derecho-laboral.html":"/derecho-laboral","/derecho-penal.html":"/derecho-penal","/impuestos.html":"/impuestos","/planeacion-patrimonial.html":"/asesoria-contable","/planeacion-patrimonial":"/asesoria-contable","/privacidad.html":"/privacidad","/politica-privacidad.html":"/privacidad","/tramites-notariales.html":"/tramites-notariales","/acciones-de-tutela.html":"/acciones-de-tutela"};return s[i]||s[o]||i},a=()=>{var i;(i=document.querySelectorAll("a[href]"))==null||i.forEach(o=>{try{const s=o.getAttribute("href")||"";if(/^https?:\/\//i.test(s)&&new URL(s).origin!==window.location.origin)return;const l=new URL(s,window.location.href);if(l.origin!==window.location.origin)return;let c=t(l.pathname)+l.search+l.hash;/^\/index\.html#/i.test(c)&&(c=c.replace(/^\/index\.html#/i,"/#"));const d=o.getAttribute("href");c&&c!==d&&o.setAttribute("href",c)}catch{}})};u.useEffect(()=>{const i=Array.from(document.querySelectorAll(".page-transition")),o=()=>{i.forEach(p=>p.classList.remove("is-active"))};o(),requestAnimationFrame(o),setTimeout(o,0);const s=p=>{p.persisted&&o()},l=()=>o();window.addEventListener("pageshow",s),window.addEventListener("focus",l);function c(p){if(!p||!p.href)return!1;try{const w=p.classList;if(w&&w.contains("drop-btn")||p.id==="areas-toggle")return!1}catch{}if(p.target&&p.target.toLowerCase()==="_blank")return!1;const h=p.getAttribute("href");if(!h||h.startsWith("#")||h.startsWith("mailto:")||h.startsWith("tel:"))return!1;const m=new URL(p.href,window.location.href);return!(m.hostname!==window.location.hostname||m.pathname===window.location.pathname&&m.hash)}a();const d=p=>{const h=p.target&&p.target.closest?p.target.closest("a"):null;if(h&&(h.classList&&h.classList.contains("drop-btn")||h.id==="areas-toggle")||!h||!c(h)||p.metaKey||p.ctrlKey||p.shiftKey||p.altKey||p.button!==0)return;p.preventDefault();const m=i.some(x=>{try{return getComputedStyle(x).display!=="none"}catch{return!1}});m&&i.forEach(x=>x.classList.add("is-active"));const w=()=>{try{const x=new URL(h.href,window.location.href),y=t(x.pathname)+x.search+x.hash,k=window.location.pathname+window.location.search+window.location.hash;try{window.__KOOP_FADE_ARRIVAL=!0}catch{}try{e(y)}catch{}setTimeout(()=>{window.location.pathname+window.location.search+window.location.hash===k&&window.location.assign(y)},50)}catch{window.location.assign(h.href)}};m?setTimeout(w,600):w()};return document.addEventListener("click",d,!0),()=>{window.removeEventListener("pageshow",s),window.removeEventListener("focus",l),document.removeEventListener("click",d,!0)}},[]),u.useLayoutEffect(()=>{if(!n.hash){const i=()=>{try{window.scrollTo(0,0)}catch{}try{document.documentElement.scrollTop=0}catch{}try{document.body.scrollTop=0}catch{}};i(),requestAnimationFrame(i),setTimeout(i,0),setTimeout(i,50),setTimeout(i,150)}},[n.pathname,n.search,n.hash]),u.useEffect(()=>{Array.from(document.querySelectorAll(".page-transition")).forEach(l=>l.classList.remove("is-active"));const i=document.getElementById("splash"),o=!!(i&&getComputedStyle(i).display!=="none"&&!i.classList.contains("splash--hide"));if(!o){document.documentElement.classList.add("skip-splash");const l=document.getElementById("app");l?(l.style.opacity="1",l.style.transition=""):document.body.style.opacity="1"}if(!o&&!!(typeof window<"u"&&window.__KOOP_FADE_ARRIVAL)){try{const l=document.documentElement;l.classList.remove("route-fade-in"),l.offsetWidth,l.classList.add("route-fade-in"),setTimeout(()=>{try{l.classList.remove("route-fade-in")}catch{}},280)}catch{}try{window.__KOOP_FADE_ARRIVAL=!1}catch{}}try{a()}catch{}},[n.pathname,n.search,n.hash]),u.useEffect(()=>{if(!n.hash)return;const i=(n.hash||"").replace(/^#/,""),o=()=>{try{const p=document.getElementById(i)||document.querySelector(n.hash);if(p&&p.scrollIntoView)return p.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"}),!0}catch{}return!1};if(o())return;const s=requestAnimationFrame(o),l=setTimeout(o,0),c=setTimeout(o,120),d=setTimeout(o,300);return()=>{cancelAnimationFrame(s),clearTimeout(l),clearTimeout(c),clearTimeout(d)}},[n.pathname,n.hash])}function O1(){u.useEffect(()=>{const e=document.querySelectorAll(".labor-card[data-images]"),n=[];return e.forEach(t=>{const a=(t.dataset.images||"").split(",").map(s=>s.trim()).filter(Boolean);if(a.length<2)return;let i=0;const o=setInterval(()=>{const s=(i+1)%a.length,l=document.createElement("div");l.className="labor-card-fade",l.style.backgroundImage=`url('${a[s]}')`,t.appendChild(l),requestAnimationFrame(()=>{l.style.opacity="1"}),setTimeout(()=>{t.style.setProperty("--bg",`url('${a[s]}')`);try{l.remove()}catch{}i=s},1e3)},3e3);n.push(o)}),()=>{n.forEach(t=>clearInterval(t)),document.querySelectorAll(".labor-card-fade").forEach(t=>{try{t.remove()}catch{}})}},[])}function Cn(){u.useEffect(()=>{const e=n=>!n||typeof n!="string"?n:n.replace(/url\(\s*'img\//gi,"url('/img/").replace(/url\(\s*"img\//gi,'url("/img/').replace(/url\(\s*img\//gi,"url(/img/");document.querySelectorAll("[style]").forEach(n=>{try{const t=n.style.getPropertyValue("--bg");if(t&&/url\(/i.test(t)){const a=e(t);a!==t&&n.style.setProperty("--bg",a)}}catch{}}),document.querySelectorAll("[data-images]").forEach(n=>{const t=n.getAttribute("data-images");if(!t)return;const i=t.split(",").map(o=>o.trim()).filter(Boolean).map(o=>o.replace(/^img\//i,"/img/")).join(",");i!==t&&n.setAttribute("data-images",i)})},[location.pathname,location.search,location.hash])}function Nn(e){if(!e||typeof e!="string")return"";const n=e.replace(/<noscript[\s\S]*?<\/noscript>/gi,""),t=[],a=/<style\b[^>]*>([\s\S]*?)<\/style>/gi;let i;for(;i=a.exec(n);){const s=i[1]||"";s.trim()&&t.push(s.trim())}return t.join(`

`).replace(/url\(\s*(['\"]?)img\//gi,"url($1/img/").replace(/url\(\s*(['\"]?)(?!\/|https?:|data:)([^'"\)]+?\.(?:png|jpe?g|svg|gif|webp|ico))\1\s*\)/gi,(s,l,c)=>`url(${l}/${c}${l})`)}const D1=`<!DOCTYPE html>\r
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
`,L1=()=>{jn(),R1(),kn(),O1();const e=Nn(D1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsx("div",{id:"splash",className:"splash","aria-hidden":"true",children:r.jsx("div",{className:"splash__frame",children:r.jsx("img",{id:"splashLogo",className:"splash__logo",src:"/Koop%20Logo.png",alt:"Koop Strategic Advisory"})})}),r.jsxs("div",{id:"app",children:[r.jsxs("div",{className:"hero-section hero--home",id:"inicio",children:[r.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:r.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),r.jsx("div",{className:"hero-overlay"}),r.jsx("div",{className:"hero-content",children:r.jsxs("div",{className:"hero-box",children:[r.jsx("div",{className:"hero-title",children:"KOOP es Bogotá, es excelencia académica"}),r.jsxs("div",{className:"hero-subtitle",children:["Expertos en Derecho Administrativo,",r.jsx("br",{})," Penal, Laboral y Médico"]}),r.jsxs("div",{className:"hero-desc",children:["Equipo de abogados y contadores con experiencia. ",r.jsx("br",{}),"Brindamos consultoría estratégica para empresas y personas naturales."]}),r.jsx("a",{className:"cta-btn",href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20:",children:"Solicita tu consulta"})]})})]}),r.jsx("section",{className:"areas-section",id:"areas",children:r.jsxs("div",{className:"areas-container",children:[r.jsxs("div",{className:"areas-title",children:[r.jsx("span",{className:"areas-title-bold",children:"ÁREAS DE"})," ",r.jsx("span",{className:"areas-title-normal",children:"PRÁCTICA"})]}),r.jsxs("div",{className:"areas-cards",children:[r.jsx("a",{href:"/derecho",className:"labor-card",style:{"--bg":"url('/img/paloquemao.png')"},"data-images":"/img/paloquemao.png,/img/saladecasacionlaboral.png,/img/tramitesnotariales.png,/img/sexuales.png,/img/fiscalia.png",children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("div",{className:"labor-card-title",children:"Derecho"}),r.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})}),r.jsx("a",{href:"/contabilidad",className:"labor-card",style:{"--bg":"url('/img/auditoria.jpg')"},"data-images":"/img/auditoria.jpg,/img/impuestos-en-colombia.jpg,/img/que_es_la_contabilidad.jpeg",children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("div",{className:"labor-card-title",children:"Contabilidad"}),r.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})})]})]})}),r.jsx("section",{className:"vision-section",id:"vision",children:r.jsxs("div",{className:"vision-container",children:[r.jsxs("h2",{className:"vision-title",children:[r.jsx("span",{className:"vision-bold",children:"NUESTRA"})," VISIÓN"]}),r.jsxs("div",{className:"vision-text",children:[r.jsx("p",{children:"En Koop Strategic Advisory, nuestra visión es consolidarnos como la firma de referencia en servicios jurídicos, contables y de consultoría empresarial, reconocidos por nuestra ética, innovación y excelencia. Nos apasiona acompañar a empresas y personas en la toma de decisiones estratégicas que les permitan crecer, proteger sus intereses y transformar sus proyectos en resultados sostenibles."}),r.jsx("p",{children:"Trabajamos bajo un enfoque multidisciplinario, integrando conocimientos legales, contables y de auditoría para ofrecer soluciones integrales y personalizadas. Nuestro equipo está comprometido con la actualización permanente, la confianza y el trato directo con cada cliente."}),r.jsx("p",{children:"Buscamos construir relaciones de largo plazo basadas en la transparencia, el profesionalismo y el valor agregado, contribuyendo activamente al desarrollo empresarial y a la construcción de una sociedad más justa y eficiente."})]})]})}),r.jsx("section",{className:"full-img-section",children:r.jsx("img",{src:"/Corte suprema de justicia de colombia.jpg",alt:"Equipo empresarial Koop",className:"full-img"})}),r.jsxs("section",{className:"contact-section",id:"contacto",children:[r.jsx("div",{className:"contact-overlay"}),r.jsx("div",{className:"contact-container contact-modern",children:r.jsxs("div",{className:"contact-modern-content",children:[r.jsx("div",{className:"contact-title",style:{textAlign:"center"},children:"CONTÁCTANOS"}),r.jsx("div",{className:"contact-name",style:{textAlign:"center",color:"#fff"},children:"KOOP STRATEGIC ADVISORY"}),r.jsxs("div",{className:"contact-social contact-social-modern",children:[r.jsx("a",{href:"https://www.instagram.com/kooplawyers/",target:"_blank",className:"social-icon instagram",title:"Instagram",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",alt:"Instagram"})}),r.jsx("a",{href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",className:"social-icon facebook",title:"Facebook",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg",alt:"Facebook"})}),r.jsx("a",{href:"https://www.tiktok.com/@koop.co",target:"_blank",className:"social-icon tiktok",title:"TikTok",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg",alt:"TikTok"})}),r.jsx("a",{href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20",target:"_blank",className:"social-icon whatsapp",title:"WhatsApp",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg",alt:"WhatsApp"})})]}),r.jsx("div",{className:"contact-modern-text",children:"Atendemos consultas por cualquiera de nuestras redes sociales."})]})})]}),r.jsx("footer",{className:"site-footer",children:r.jsxs("div",{className:"footer-container",children:[r.jsx("div",{className:"footer-left",children:"© 2024 Creado por Koop Strategic Advisory"}),r.jsx("div",{className:"footer-right",children:r.jsx("a",{href:"/privacidad",target:"_blank",children:"Política de Privacidad"})})]})})]})," "]})},P1=`<!DOCTYPE html>\r
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
`,qh="/assets/Despidoinjustificado-WBwGt-rg.jpg",M1=()=>{jn(),kn();const e=Nn(P1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsx("section",{className:"labor-cards-section",id:"areas-derecho",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"DERECHO"}),r.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),r.jsx("p",{className:"labor-sub",children:"Asesoría integral en diversas ramas del derecho."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx(V,{to:"/derecho-penal",className:"labor-card",style:{"--bg":"url('/img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho Penal"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa y asesoría en procesos penales."})]})}),r.jsx(V,{to:"/derecho-laboral",className:"labor-card",style:{"--bg":`url(${qh})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho Laboral"]}),r.jsx("div",{className:"labor-card-desc",children:"Soluciones en derecho laboral y seguridad social."})]})}),r.jsx(V,{to:"/tramites-notariales",className:"labor-card",style:{"--bg":"url('img/tramitesnotariales.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Trámites notariales"]}),r.jsx("div",{className:"labor-card-desc",children:"Gestiones notariales rápidas y seguras."})]})}),r.jsx(V,{to:"/derecho-administrativo",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho Administrativo"]}),r.jsx("div",{className:"labor-card-desc",children:"Asesoría en procedimientos y litigios administrativos."})]})}),r.jsx(V,{to:"/derecho-familia",className:"labor-card",style:{"--bg":"url('/img/ninofamilia.webp')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho de Familia"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámites administrativos y judiciales de familia."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsx("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:"WhatsApp"}),r.jsx("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:"Escríbenos"})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(V,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(V,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(V,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(V,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Áreas de Derecho"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(V,{to:"/derecho-penal",children:"Derecho penal"})}),r.jsx("li",{children:r.jsx(V,{to:"/derecho-laboral",children:"Derecho laboral"})}),r.jsx("li",{children:r.jsx(V,{to:"/tramites-notariales",children:"Trámites notariales"})}),r.jsx("li",{children:r.jsx(V,{to:"/derecho-administrativo",children:"Derecho administrativo"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx(V,{to:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},_1=`<!DOCTYPE html>\r
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
`,B1=()=>{jn(),kn();const e=Nn(_1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsx("section",{className:"labor-cards-section",id:"subareas-contabilidad",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"CONTABILIDAD"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Selecciona la especialidad contable que necesitas."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"/auditoria",className:"labor-card",style:{"--bg":"url('img/auditoria.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Auditoría y Revisoría Fiscal"]}),r.jsx("div",{className:"labor-card-desc",children:"Supervisión financiera independiente."})]})}),r.jsx("a",{href:"/impuestos",className:"labor-card",style:{"--bg":"url('img/impuestos-en-colombia.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Impuestos y Planeación Tributaria"]}),r.jsx("div",{className:"labor-card-desc",children:"Consultoría y cumplimiento fiscal."})]})}),r.jsx("a",{href:"/asesoria-contable",className:"labor-card",style:{"--bg":"url('img/que_es_la_contabilidad.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Asesoría Contable"]}),r.jsx("div",{className:"labor-card-desc",children:"Protección y optimización del patrimonio."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Soluciones integrales para tu empresa."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una Asesoría Contable?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20consultar%20los%20servicios%20contables:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Contabilidad%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(V,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(V,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(V,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(V,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios contables"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"/auditoria",children:"Auditoría y Revisoría Fiscal"})}),r.jsx("li",{children:r.jsx("a",{href:"/impuestos",children:"Impuestos y Planeación Tributaria"})}),r.jsx("li",{children:r.jsx("a",{href:"/asesoria-contable",children:"Asesoría Contable"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},V1=`<!DOCTYPE html>\r
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
`,F1=()=>{jn(),kn();const e=Nn(V1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Auditoría & Revisoría Fiscal",children:r.jsx("div",{className:"hero-headline",children:"Auditoría & Revisoría Fiscal"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-auditoria",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE AUDITORÍA & REVISORÍA FISCAL"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Supervisión independiente y aseguramiento financiero y contable."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#financiera",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Auditoría financiera"]}),r.jsx("div",{className:"labor-card-desc",children:"Opinión independiente sobre estados financieros."})]})}),r.jsx("a",{href:"#revisoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Revisoría fiscal permanente"]}),r.jsx("div",{className:"labor-card-desc",children:"Cumplimiento de obligaciones legales y societarias."})]})}),r.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Evaluación de control interno"]}),r.jsx("div",{className:"labor-card-desc",children:"Diagnósticos y recomendaciones."})]})}),r.jsx("a",{href:"#cumplimiento",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Cumplimiento normativo"]}),r.jsx("div",{className:"labor-card-desc",children:"Verificación de normas contables y fiscales."})]})}),r.jsx("a",{href:"#informes",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Informes especiales"]}),r.jsx("div",{className:"labor-card-desc",children:"Dictámenes sobre hechos particulares."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Control y transparencia para tu organización."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en auditoría & revisoría fiscal?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20auditor%C3%ADa%20y%20revisor%C3%ADa%20fiscal%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Auditor%C3%ADa%20y%20Revisor%C3%ADa%20Fiscal%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(V,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(V,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(V,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(V,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Auditoría financiera"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Revisoría fiscal permanente"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Evaluación de control interno"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Cumplimiento normativo"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Informes especiales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},U1=`<!DOCTYPE html>\r
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
`,W1=()=>{jn(),kn();const e=Nn(U1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/derecho-administrativo/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Consejo-deestado.avif')",backgroundPosition:"center 80%"},children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho Administrativo",children:r.jsx("div",{className:"hero-headline",children:"Derecho Administrativo"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-derecho-administrativo",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE DERECHO ADMINISTRATIVO"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Asesoría en trámites y procedimientos ante la administración pública."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#peticion",className:"labor-card",style:{"--bg":"url('img/Gestionurbana.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Gestión Urbanística"]}),r.jsx("div",{className:"labor-card-desc",children:"Asesorías en licencias y planeación urbanística."})]})}),r.jsx("a",{href:"#disciplinario",className:"labor-card",style:{"--bg":"url('img/Disci.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Procesos disciplinarios"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa ante investigaciones y sanciones."})]})}),r.jsx("a",{href:"#contratacion",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Contratación estatal"]}),r.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en etapas precontractuales y contractuales."})]})}),r.jsx("a",{href:"#nulidad",className:"labor-card",style:{"--bg":"url('img/Respfiscal.webp')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Procesos de responsabilidad fiscal"]}),r.jsx("div",{className:"labor-card-desc",children:"Conflictos derivados de administración de dineros públicos."})]})}),r.jsx("a",{href:"#conceptos",className:"labor-card",style:{"--bg":"url('img/Asesoria.webp')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Conceptos y asesorías administrativas"]}),r.jsx("div",{className:"labor-card-desc",children:"Elaboración de conceptos y respuestas a requerimientos."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Valoramos y resguardamos tus activos intangibles."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en derecho administrativo?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20concencioso%20administrativo%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20Administrativo%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(V,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(V,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(V,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(V,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Gestión Urbanística"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Procesos Disciplinarios"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Contratación Estatal"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Procesos de responsabilidad fiscal"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Conceptos y Asesorías Administrativas"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Z1=`<!DOCTYPE html>\r
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
`,$1=()=>{jn(),kn();const e=Nn(Z1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/ninofamilia.webp')",backgroundPosition:"center 30%"},children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho de Familia",children:r.jsx("div",{className:"hero-headline",children:"Derecho de Familia"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-familia",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE FAMILIA"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Asesoría integral en situaciones familiares: divorcios, custodia, alimentos y más."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#divorcio",className:"labor-card",style:{"--bg":"url('img/divorcio.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Divorcio y separación"]}),r.jsx("div",{className:"labor-card-desc",children:"Representación y acuerdos amistosos o judiciales."})]})}),r.jsx("a",{href:"#custodia",className:"labor-card",style:{"--bg":"url('img/Custodia.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Custodia y patria potestad"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa de los derechos de tus hijos y del núcleo familiar."})]})}),r.jsx("a",{href:"#alimentos",className:"labor-card",style:{"--bg":"url('img/alimentos.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Alimentos y pensión alimentaria"]}),r.jsx("div",{className:"labor-card-desc",children:"Fijación, modificación y cobro de cuotas alimentarias."})]})}),r.jsx("a",{href:"#sociedad",className:"labor-card",style:{"--bg":"url('img/Violencia.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Violencia intrafamiliar"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámite ante comisaría de familia o proceso penal ante fiscalía."})]})}),r.jsx("a",{href:"#comisariaseicbf",className:"labor-card",style:{"--bg":"url('img/Bienestar.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Trámites frente a ICBF o Comisarías de familia"]}),r.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en procesos administrativos."})]})}),r.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales"]}),r.jsx("div",{className:"labor-card-desc",children:"Acuerdos patrimoniales previos al matrimonio o unión libre."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico y soluciones 360° para proteger tu núcleo familiar."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en derecho de familia?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20derecho%20de%20familia%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20de%20Familia%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(V,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(V,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(V,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(V,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Divorcio y separación"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Custodia y patria potestad"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Alimentos y pensión alimentaria"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Violencia intrafamiliar"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Trámites frente a ICBF o Comisarías de familia"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573503965755",children:"+57 (350) 396 57 55"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},K1=`<!DOCTYPE html>\r
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
`,H1="/assets/liquidaciones-CLf4J2S8.jpeg",q1="/assets/acoso-5lfYgMQE.jpg",Y1="/assets/pensiones-Cse2TGmQ.jpg",G1="/assets/contratorealidad-CKG4Jjcw.png",J1=()=>{jn(),kn();const e=Nn(K1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho Laboral y Seguridad Social",children:r.jsx("div",{className:"hero-headline",children:"Derecho Laboral y Seguridad Social"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-laborales",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS LABORALES"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Estrategia, representación y cumplimiento normativo en derecho laboral para empresas y trabajadores."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#contratorealidad",className:"labor-card",style:{"--bg":`url(${G1})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Contrato realidad"]}),r.jsx("div",{className:"labor-card-desc",children:"Reconocimiento del vínculo laboral y prestaciones."})]})}),r.jsx("a",{href:"#liquidaciones",className:"labor-card",style:{"--bg":`url(${H1})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Mora en el pago de la liquidación"]}),r.jsx("div",{className:"labor-card-desc",children:"Cálculo, reclamación y verificación de pagos."})]})}),r.jsx("a",{href:"#acoso",className:"labor-card",style:{"--bg":`url(${q1})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Acoso laboral"]}),r.jsx("div",{className:"labor-card-desc",children:"Comités, protocolos, evidencias y defensa."})]})}),r.jsx("a",{href:"#pensiones",className:"labor-card",style:{"--bg":`url(${Y1})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Pensiones y seguridad social"]}),r.jsx("div",{className:"labor-card-desc",children:"Traslados, reliquidaciones y contingencias."})]})}),r.jsx("a",{href:"#reintegro",className:"labor-card",style:{"--bg":`url(${qh})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Reintegro laboral"]}),r.jsx("div",{className:"labor-card-desc",children:"Acciones de reintegro por despido ilegal o con fuero."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20laboral%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(V,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(V,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(V,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(V,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios laborales"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#despido",children:"Despido injustificado"})}),r.jsx("li",{children:r.jsx("a",{href:"#liquidaciones",children:"Liquidaciones y prestaciones"})}),r.jsx("li",{children:r.jsx("a",{href:"#acoso",children:"Acoso laboral"})}),r.jsx("li",{children:r.jsx("a",{href:"#pensiones",children:"Pensiones y seguridad social"})}),r.jsx("li",{children:r.jsx("a",{href:"#reintegro",children:"Reintegro laboral"})}),r.jsx("li",{children:r.jsx("a",{href:"#contratorealidad",children:"Contrato realidad"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Q1=`<!DOCTYPE html>\r
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
`,X1=()=>{jn(),kn();const e=Nn(Q1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho Penal",children:r.jsx("div",{className:"hero-headline",children:"Derecho Penal"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS PENALES"}),r.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),r.jsx("p",{className:"labor-sub",children:"Representamos sus intereses con experiencia y conocimiento en el ámbito penal."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#audiencias",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Audiencias, medidas de aseguramiento y trámite penal"]}),r.jsx("div",{className:"labor-card-desc",children:"Protección de sus derechos durante todo el trámite penal, hasta sentencia."})]})}),r.jsx("a",{href:"#asesoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Asesoría y Representación Penal integral para Víctimas"]}),r.jsx("div",{className:"labor-card-desc",children:"Representación legal experta para víctimas, desde la denuncia hasta la indemnización."})]})}),r.jsx("a",{href:"#acompañamiento",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Acompañamiento en audiencias y fases procesales clave"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa en audiencias específicas. Consulte más acá."})]})}),r.jsx("a",{href:"#habeas",className:"labor-card",style:{"--bg":"url('img/habeas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Habeas corpus y libertades inmediatas"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámite inmediato para restablecer la libertad personal."})]})}),r.jsx("a",{href:"#defensa",className:"labor-card",style:{"--bg":"url('img/sexuales.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Defensa y Asesoría en Casos de Delitos Sexuales"]}),r.jsx("div",{className:"labor-card-desc",children:"Protección integral de derechos en investigaciones y juicios por delitos sexuales."})]})}),r.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/fiscalia.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Control y Seguimiento de Procesos en Fiscalía"]}),r.jsx("div",{className:"labor-card-desc",children:"Monitoreamos y gestionamos su proceso penal para evitar estancamientos y proteger sus derechos."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20penal%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(V,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(V,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(V,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(V,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios laborales"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#audiencias",children:"Audiencias, medidas de aseguramiento y trámite penal"})}),r.jsx("li",{children:r.jsx("a",{href:"#asesoria",children:"Asesoría y Representación Penal integral para Víctimas"})}),r.jsx("li",{children:r.jsx("a",{href:"#acompañamiento",children:"Acompañamiento en audiencias y fases procesales clave"})}),r.jsx("li",{children:r.jsx("a",{href:"#habeas",children:"Habeas corpus y libertades inmediatas"})}),r.jsx("li",{children:r.jsx("a",{href:"#defensa",children:"Defensa y Asesoría en Casos de Delitos Sexuales"})}),r.jsx("li",{children:r.jsx("a",{href:"#control",children:"Control y Seguimiento de Procesos en Fiscalía"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},ex=`<!DOCTYPE html>\r
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
`,nx=()=>{jn(),kn();const e=Nn(ex).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Impuestos",children:r.jsx("div",{className:"hero-headline",children:"Impuestos"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-impuestos",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE IMPUESTOS"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Consultoría tributaria y planeación fiscal para empresas y personas."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#planeacion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Planeación tributaria"]}),r.jsx("div",{className:"labor-card-desc",children:"Estructuras fiscales eficientes y legales."})]})}),r.jsx("a",{href:"#declaraciones",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Declaraciones y cumplimiento"]}),r.jsx("div",{className:"labor-card-desc",children:"Preparación y presentación oportuna de impuestos."})]})}),r.jsx("a",{href:"#dian",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Defensa ante la DIAN"]}),r.jsx("div",{className:"labor-card-desc",children:"Respuestas a requerimientos y litigios tributarios."})]})}),r.jsx("a",{href:"#transferencia",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Precios de transferencia"]}),r.jsx("div",{className:"labor-card-desc",children:"Estudios y documentación obligatoria."})]})}),r.jsx("a",{href:"#auditoria",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Auditoría fiscal"]}),r.jsx("div",{className:"labor-card-desc",children:"Revisión de obligaciones y contingencias."})]})}),r.jsx("a",{href:"#municipales",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Obligaciones municipales"]}),r.jsx("div",{className:"labor-card-desc",children:"Impuestos locales y de industria y comercio."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Optimización de obligaciones fiscales."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en impuestos?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20impuestos%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Impuestos%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(V,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(V,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(V,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(V,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Planeación tributaria"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Declaraciones y cumplimiento"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Defensa ante DIAN"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Precios de transferencia"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Auditoría fiscal"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Obligaciones municipales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},rx=`<!DOCTYPE html>\r
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
`,tx=()=>{jn(),kn();const e=Nn(rx).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Asesoría Contable",children:r.jsx("div",{className:"hero-headline",children:"Asesoría Contable"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Estrategias sucesorales"]}),r.jsx("div",{className:"labor-card-desc",children:"Testamentos y planificación de herencias."})]})}),r.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Fideicomisos y patrimonios autónomos"]}),r.jsx("div",{className:"labor-card-desc",children:"Estructuras para administrar bienes."})]})}),r.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Protocolos familiares"]}),r.jsx("div",{className:"labor-card-desc",children:"Reglas de gobierno y sucesión empresarial."})]})}),r.jsx("a",{href:"#fiscal",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Optimización fiscal del patrimonio"]}),r.jsx("div",{className:"labor-card-desc",children:"Reducción de cargas impositivas."})]})}),r.jsx("a",{href:"#portafolios",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Administración de portafolios"]}),r.jsx("div",{className:"labor-card-desc",children:"Gestión de inversiones y activos."})]})}),r.jsx("a",{href:"#activos",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Protección de activos"]}),r.jsx("div",{className:"labor-card-desc",children:"Blindaje frente a riesgos y contingencias."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en Asesoría Contable?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(V,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(V,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(V,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(V,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Estrategias sucesorales"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Fideicomisos y patrimonios autónomos"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Protocolos familiares"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Optimización fiscal del patrimonio"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Administración de portafolios"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Protección de activos"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},ax=`<!DOCTYPE html>\r
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
`,ix=()=>{jn(),kn();const e=Nn(ax).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition"}),r.jsxs("main",{children:[r.jsx("h1",{children:"Política de Privacidad"}),r.jsx("p",{children:"Esta página describe las políticas de privacidad de Koop Strategic Advisory. Su contenido se actualizará próximamente."})]}),r.jsx("footer",{className:"site-footer",children:r.jsxs("div",{className:"footer-container",children:[r.jsxs("div",{className:"footer-left",children:["© ",r.jsx("span",{id:"year"})," Creado por Koop Strategic Advisory"]}),r.jsx("div",{className:"footer-right",children:r.jsx("a",{href:"/privacidad",children:"Política de Privacidad"})})]})})]})},ox=`<!DOCTYPE html>\r
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
`,sx=()=>{jn(),kn();const e=Nn(ox).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Trámites Notariales",children:r.jsx("div",{className:"hero-headline",children:"Trámites Notariales"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS FRENTE A NOTARIA"}),r.jsx("h2",{className:"labor-title",children:"Su trámite notarial exprés."}),r.jsx("p",{className:"labor-sub",children:"Listo en tiempo récord, con total seguridad jurídica."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#compraventa",className:"labor-card",style:{"--bg":"url('img/compraventainmueble.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Compraventa de inmuebles."]}),r.jsx("div",{className:"labor-card-desc",children:"Con revisión de títulos y elaboración de minuta."})]})}),r.jsx("a",{href:"#constitucion",className:"labor-card",style:{"--bg":"url('img/constitucion.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Constitución, reforma o liquidación de sociedades"]}),r.jsx("div",{className:"labor-card-desc",children:"(S.A.S., LTDA., S.A., etc.)."})]})}),r.jsx("a",{href:"sucesiones",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Sucesiones por causa de muerte"]}),r.jsx("div",{className:"labor-card-desc",children:"Realización de escrito de solicitud hasta elevación a escritura pública."})]})}),r.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales y liquidación de sociedad conyugal."]}),r.jsx("div",{className:"labor-card-desc",children:"Proteja su patrimonio y formalice acuerdos con respaldo legal."})]})}),r.jsx("a",{href:"#levantamiento",className:"labor-card",style:{"--bg":"url('img/levantamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Levantamiento de hipotecas"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámite de levantamiento exprés y sin dilaciones."})]})}),r.jsx("a",{href:"#donaciones",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Donaciones de bienes inmuebles"]}),r.jsx("div",{className:"labor-card-desc",children:"Transfiera su patrimonio con seguridad jurídica y sin contratiempos."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20conocer%20los%20costos%20del%20siguiente%20proceso%20notarial:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(V,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(V,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(V,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(V,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios laborales"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#compraventa",children:"Compraventa de inmuebles"})}),r.jsx("li",{children:r.jsx("a",{href:"#constitucion",children:"Constitución, reforma o liquidación de sociedades"})}),r.jsx("li",{children:r.jsx("a",{href:"#sucesiones",children:"Sucesiones por causa de muerte"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales y liquidación de sociedad conyugal"})}),r.jsx("li",{children:r.jsx("a",{href:"#levantamiento",children:"Levantamiento de hipotecas"})}),r.jsx("li",{children:r.jsx("a",{href:"#donaciones",children:"Donaciones de bienes inmuebles"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},lx=`<!DOCTYPE html>\r
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
`,cx=()=>{jn(),kn();const e=Nn(lx).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Juezjuez.jpg')",backgroundPosition:"center 70%"},children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Acciones de tutela",children:r.jsx("div",{className:"hero-headline",children:"Acciones de tutela"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/tutelapeticion.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Tutela al Derecho de Petición"]}),r.jsx("div",{className:"labor-card-desc",children:"Para obtener respuestas de las autoridades."})]})}),r.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/tutelasalud.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Tutela en  Salud"]}),r.jsx("div",{className:"labor-card-desc",children:"Somos expertos dentro del área de la salud, velamos por sus intereses."})]})}),r.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/tuteladebido.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Revocatoria de decisiones judiciales"]}),r.jsx("div",{className:"labor-card-desc",children:"Por vulneración al debido proceso de acuerdo a la jurisprudencia procesal."})]})}),r.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/jueztutela.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Tutela para obtener pensión"]}),r.jsx("div",{className:"labor-card-desc",children:"Cumplidos los requisitos de la jurisprudencia de la sala de casación laboral"})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en Asesoría Contable?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(V,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(V,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(V,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(V,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Divorcio y separación"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Custodia y patria potestad"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Alimentos y pensión alimentaria"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Liquidación de sociedad conyugal"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Adopciones"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},_t="https://koop-api-a28ac382dd56.herokuapp.com/api";async function dx({name:e,email:n,password:t,roles:a}){console.log(`API BASE: ${_t}/auth/register`);const i=await fetch(`${_t}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:n,password:t,roles:a})}),o=await i.json().catch(()=>({}));if(!i.ok)throw new Error((o==null?void 0:o.message)||"Error en registro");return o}async function px(){const e=await fetch(`${_t}/auth/refresh`,{method:"POST",credentials:"include"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error((n==null?void 0:n.message)||"No se pudo refrescar sesión");return n}async function ux({email:e,password:n}){console.log(`API BASE: ${_t}/auth/login`);const t=await fetch(`${_t}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:n})});console.log(t);const a=await t.json().catch(()=>({}));if(!t.ok)throw new Error((a==null?void 0:a.message)||"Credenciales inválidas");return a}async function hx(){const e=await fetch(`${_t}/auth/logout`,{method:"POST",credentials:"include"});if(!e.ok){let n="Error al cerrar sesión";try{const t=await e.json();n=(t==null?void 0:t.message)||n}catch{}throw new Error(n)}return!0}function Yh(e,n){return function(){return e.apply(n,arguments)}}const{toString:fx}=Object.prototype,{getPrototypeOf:jc}=Object,{iterator:So,toStringTag:Gh}=Symbol,Eo=(e=>n=>{const t=fx.call(n);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),$n=e=>(e=e.toLowerCase(),n=>Eo(n)===e),Ao=e=>n=>typeof n===e,{isArray:Zt}=Array,Ma=Ao("undefined");function Za(e){return e!==null&&!Ma(e)&&e.constructor!==null&&!Ma(e.constructor)&&hn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Jh=$n("ArrayBuffer");function mx(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Jh(e.buffer),n}const gx=Ao("string"),hn=Ao("function"),Qh=Ao("number"),$a=e=>e!==null&&typeof e=="object",xx=e=>e===!0||e===!1,Ri=e=>{if(Eo(e)!=="object")return!1;const n=jc(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Gh in e)&&!(So in e)},vx=e=>{if(!$a(e)||Za(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},bx=$n("Date"),yx=$n("File"),wx=$n("Blob"),jx=$n("FileList"),kx=e=>$a(e)&&hn(e.pipe),Cx=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||hn(e.append)&&((n=Eo(e))==="formdata"||n==="object"&&hn(e.toString)&&e.toString()==="[object FormData]"))},Nx=$n("URLSearchParams"),[Sx,Ex,Ax,Ix]=["ReadableStream","Request","Response","Headers"].map($n),Tx=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ka(e,n,{allOwnKeys:t=!1}={}){if(e===null||typeof e>"u")return;let a,i;if(typeof e!="object"&&(e=[e]),Zt(e))for(a=0,i=e.length;a<i;a++)n.call(null,e[a],a,e);else{if(Za(e))return;const o=t?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(a=0;a<s;a++)l=o[a],n.call(null,e[l],l,e)}}function Xh(e,n){if(Za(e))return null;n=n.toLowerCase();const t=Object.keys(e);let a=t.length,i;for(;a-- >0;)if(i=t[a],n===i.toLowerCase())return i;return null}const Yr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ef=e=>!Ma(e)&&e!==Yr;function fl(){const{caseless:e}=ef(this)&&this||{},n={},t=(a,i)=>{const o=e&&Xh(n,i)||i;Ri(n[o])&&Ri(a)?n[o]=fl(n[o],a):Ri(a)?n[o]=fl({},a):Zt(a)?n[o]=a.slice():n[o]=a};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&Ka(arguments[a],t);return n}const zx=(e,n,t,{allOwnKeys:a}={})=>(Ka(n,(i,o)=>{t&&hn(i)?e[o]=Yh(i,t):e[o]=i},{allOwnKeys:a}),e),Rx=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ox=(e,n,t,a)=>{e.prototype=Object.create(n.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),t&&Object.assign(e.prototype,t)},Dx=(e,n,t,a)=>{let i,o,s;const l={};if(n=n||{},e==null)return n;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!a||a(s,e,n))&&!l[s]&&(n[s]=e[s],l[s]=!0);e=t!==!1&&jc(e)}while(e&&(!t||t(e,n))&&e!==Object.prototype);return n},Lx=(e,n,t)=>{e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=n.length;const a=e.indexOf(n,t);return a!==-1&&a===t},Px=e=>{if(!e)return null;if(Zt(e))return e;let n=e.length;if(!Qh(n))return null;const t=new Array(n);for(;n-- >0;)t[n]=e[n];return t},Mx=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&jc(Uint8Array)),_x=(e,n)=>{const a=(e&&e[So]).call(e);let i;for(;(i=a.next())&&!i.done;){const o=i.value;n.call(e,o[0],o[1])}},Bx=(e,n)=>{let t;const a=[];for(;(t=e.exec(n))!==null;)a.push(t);return a},Vx=$n("HTMLFormElement"),Fx=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,a,i){return a.toUpperCase()+i}),np=(({hasOwnProperty:e})=>(n,t)=>e.call(n,t))(Object.prototype),Ux=$n("RegExp"),nf=(e,n)=>{const t=Object.getOwnPropertyDescriptors(e),a={};Ka(t,(i,o)=>{let s;(s=n(i,o,e))!==!1&&(a[o]=s||i)}),Object.defineProperties(e,a)},Wx=e=>{nf(e,(n,t)=>{if(hn(e)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const a=e[t];if(hn(a)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Zx=(e,n)=>{const t={},a=i=>{i.forEach(o=>{t[o]=!0})};return Zt(e)?a(e):a(String(e).split(n)),t},$x=()=>{},Kx=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function Hx(e){return!!(e&&hn(e.append)&&e[Gh]==="FormData"&&e[So])}const qx=e=>{const n=new Array(10),t=(a,i)=>{if($a(a)){if(n.indexOf(a)>=0)return;if(Za(a))return a;if(!("toJSON"in a)){n[i]=a;const o=Zt(a)?[]:{};return Ka(a,(s,l)=>{const c=t(s,i+1);!Ma(c)&&(o[l]=c)}),n[i]=void 0,o}}return a};return t(e,0)},Yx=$n("AsyncFunction"),Gx=e=>e&&($a(e)||hn(e))&&hn(e.then)&&hn(e.catch),rf=((e,n)=>e?setImmediate:n?((t,a)=>(Yr.addEventListener("message",({source:i,data:o})=>{i===Yr&&o===t&&a.length&&a.shift()()},!1),i=>{a.push(i),Yr.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",hn(Yr.postMessage)),Jx=typeof queueMicrotask<"u"?queueMicrotask.bind(Yr):typeof process<"u"&&process.nextTick||rf,Qx=e=>e!=null&&hn(e[So]),E={isArray:Zt,isArrayBuffer:Jh,isBuffer:Za,isFormData:Cx,isArrayBufferView:mx,isString:gx,isNumber:Qh,isBoolean:xx,isObject:$a,isPlainObject:Ri,isEmptyObject:vx,isReadableStream:Sx,isRequest:Ex,isResponse:Ax,isHeaders:Ix,isUndefined:Ma,isDate:bx,isFile:yx,isBlob:wx,isRegExp:Ux,isFunction:hn,isStream:kx,isURLSearchParams:Nx,isTypedArray:Mx,isFileList:jx,forEach:Ka,merge:fl,extend:zx,trim:Tx,stripBOM:Rx,inherits:Ox,toFlatObject:Dx,kindOf:Eo,kindOfTest:$n,endsWith:Lx,toArray:Px,forEachEntry:_x,matchAll:Bx,isHTMLForm:Vx,hasOwnProperty:np,hasOwnProp:np,reduceDescriptors:nf,freezeMethods:Wx,toObjectSet:Zx,toCamelCase:Fx,noop:$x,toFiniteNumber:Kx,findKey:Xh,global:Yr,isContextDefined:ef,isSpecCompliantForm:Hx,toJSONObject:qx,isAsyncFn:Yx,isThenable:Gx,setImmediate:rf,asap:Jx,isIterable:Qx};function ce(e,n,t,a,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),t&&(this.config=t),a&&(this.request=a),i&&(this.response=i,this.status=i.status?i.status:null)}E.inherits(ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.status}}});const tf=ce.prototype,af={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{af[e]={value:e}});Object.defineProperties(ce,af);Object.defineProperty(tf,"isAxiosError",{value:!0});ce.from=(e,n,t,a,i,o)=>{const s=Object.create(tf);return E.toFlatObject(e,s,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),ce.call(s,e.message,n,t,a,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const Xx=null;function ml(e){return E.isPlainObject(e)||E.isArray(e)}function of(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function rp(e,n,t){return e?e.concat(n).map(function(i,o){return i=of(i),!t&&o?"["+i+"]":i}).join(t?".":""):n}function ev(e){return E.isArray(e)&&!e.some(ml)}const nv=E.toFlatObject(E,{},null,function(n){return/^is[A-Z]/.test(n)});function Io(e,n,t){if(!E.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,t=E.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,k){return!E.isUndefined(k[y])});const a=t.metaTokens,i=t.visitor||p,o=t.dots,s=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(n);if(!E.isFunction(i))throw new TypeError("visitor must be a function");function d(x){if(x===null)return"";if(E.isDate(x))return x.toISOString();if(E.isBoolean(x))return x.toString();if(!c&&E.isBlob(x))throw new ce("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(x)||E.isTypedArray(x)?c&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function p(x,y,k){let g=x;if(x&&!k&&typeof x=="object"){if(E.endsWith(y,"{}"))y=a?y:y.slice(0,-2),x=JSON.stringify(x);else if(E.isArray(x)&&ev(x)||(E.isFileList(x)||E.endsWith(y,"[]"))&&(g=E.toArray(x)))return y=of(y),g.forEach(function(v,N){!(E.isUndefined(v)||v===null)&&n.append(s===!0?rp([y],N,o):s===null?y:y+"[]",d(v))}),!1}return ml(x)?!0:(n.append(rp(k,y,o),d(x)),!1)}const h=[],m=Object.assign(nv,{defaultVisitor:p,convertValue:d,isVisitable:ml});function w(x,y){if(!E.isUndefined(x)){if(h.indexOf(x)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(x),E.forEach(x,function(g,f){(!(E.isUndefined(g)||g===null)&&i.call(n,g,E.isString(f)?f.trim():f,y,m))===!0&&w(g,y?y.concat(f):[f])}),h.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return w(e),n}function tp(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return n[a]})}function kc(e,n){this._pairs=[],e&&Io(e,this,n)}const sf=kc.prototype;sf.append=function(n,t){this._pairs.push([n,t])};sf.toString=function(n){const t=n?function(a){return n.call(this,a,tp)}:tp;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function rv(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function lf(e,n,t){if(!n)return e;const a=t&&t.encode||rv;E.isFunction(t)&&(t={serialize:t});const i=t&&t.serialize;let o;if(i?o=i(n,t):o=E.isURLSearchParams(n)?n.toString():new kc(n,t).toString(a),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ap{constructor(){this.handlers=[]}use(n,t,a){return this.handlers.push({fulfilled:n,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){E.forEach(this.handlers,function(a){a!==null&&n(a)})}}const cf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tv=typeof URLSearchParams<"u"?URLSearchParams:kc,av=typeof FormData<"u"?FormData:null,iv=typeof Blob<"u"?Blob:null,ov={isBrowser:!0,classes:{URLSearchParams:tv,FormData:av,Blob:iv},protocols:["http","https","file","blob","url","data"]},Cc=typeof window<"u"&&typeof document<"u",gl=typeof navigator=="object"&&navigator||void 0,sv=Cc&&(!gl||["ReactNative","NativeScript","NS"].indexOf(gl.product)<0),lv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",cv=Cc&&window.location.href||"http://localhost",dv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Cc,hasStandardBrowserEnv:sv,hasStandardBrowserWebWorkerEnv:lv,navigator:gl,origin:cv},Symbol.toStringTag,{value:"Module"})),Xe={...dv,...ov};function pv(e,n){return Io(e,new Xe.classes.URLSearchParams,{visitor:function(t,a,i,o){return Xe.isNode&&E.isBuffer(t)?(this.append(a,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...n})}function uv(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function hv(e){const n={},t=Object.keys(e);let a;const i=t.length;let o;for(a=0;a<i;a++)o=t[a],n[o]=e[o];return n}function df(e){function n(t,a,i,o){let s=t[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=o>=t.length;return s=!s&&E.isArray(i)?i.length:s,c?(E.hasOwnProp(i,s)?i[s]=[i[s],a]:i[s]=a,!l):((!i[s]||!E.isObject(i[s]))&&(i[s]=[]),n(t,a,i[s],o)&&E.isArray(i[s])&&(i[s]=hv(i[s])),!l)}if(E.isFormData(e)&&E.isFunction(e.entries)){const t={};return E.forEachEntry(e,(a,i)=>{n(uv(a),i,t,0)}),t}return null}function fv(e,n,t){if(E.isString(e))try{return(n||JSON.parse)(e),E.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(e)}const Ha={transitional:cf,adapter:["xhr","http","fetch"],transformRequest:[function(n,t){const a=t.getContentType()||"",i=a.indexOf("application/json")>-1,o=E.isObject(n);if(o&&E.isHTMLForm(n)&&(n=new FormData(n)),E.isFormData(n))return i?JSON.stringify(df(n)):n;if(E.isArrayBuffer(n)||E.isBuffer(n)||E.isStream(n)||E.isFile(n)||E.isBlob(n)||E.isReadableStream(n))return n;if(E.isArrayBufferView(n))return n.buffer;if(E.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(o){if(a.indexOf("application/x-www-form-urlencoded")>-1)return pv(n,this.formSerializer).toString();if((l=E.isFileList(n))||a.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Io(l?{"files[]":n}:n,c&&new c,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),fv(n)):n}],transformResponse:[function(n){const t=this.transitional||Ha.transitional,a=t&&t.forcedJSONParsing,i=this.responseType==="json";if(E.isResponse(n)||E.isReadableStream(n))return n;if(n&&E.isString(n)&&(a&&!this.responseType||i)){const s=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(n)}catch(l){if(s)throw l.name==="SyntaxError"?ce.from(l,ce.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xe.classes.FormData,Blob:Xe.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],e=>{Ha.headers[e]={}});const mv=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gv=e=>{const n={};let t,a,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),t=s.substring(0,i).trim().toLowerCase(),a=s.substring(i+1).trim(),!(!t||n[t]&&mv[t])&&(t==="set-cookie"?n[t]?n[t].push(a):n[t]=[a]:n[t]=n[t]?n[t]+", "+a:a)}),n},ip=Symbol("internals");function ra(e){return e&&String(e).trim().toLowerCase()}function Oi(e){return e===!1||e==null?e:E.isArray(e)?e.map(Oi):String(e)}function xv(e){const n=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=t.exec(e);)n[a[1]]=a[2];return n}const vv=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function fs(e,n,t,a,i){if(E.isFunction(a))return a.call(this,n,t);if(i&&(n=t),!!E.isString(n)){if(E.isString(a))return n.indexOf(a)!==-1;if(E.isRegExp(a))return a.test(n)}}function bv(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,t,a)=>t.toUpperCase()+a)}function yv(e,n){const t=E.toCamelCase(" "+n);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+t,{value:function(i,o,s){return this[a].call(this,n,i,o,s)},configurable:!0})})}let fn=class{constructor(n){n&&this.set(n)}set(n,t,a){const i=this;function o(l,c,d){const p=ra(c);if(!p)throw new Error("header name must be a non-empty string");const h=E.findKey(i,p);(!h||i[h]===void 0||d===!0||d===void 0&&i[h]!==!1)&&(i[h||c]=Oi(l))}const s=(l,c)=>E.forEach(l,(d,p)=>o(d,p,c));if(E.isPlainObject(n)||n instanceof this.constructor)s(n,t);else if(E.isString(n)&&(n=n.trim())&&!vv(n))s(gv(n),t);else if(E.isObject(n)&&E.isIterable(n)){let l={},c,d;for(const p of n){if(!E.isArray(p))throw TypeError("Object iterator must return a key-value pair");l[d=p[0]]=(c=l[d])?E.isArray(c)?[...c,p[1]]:[c,p[1]]:p[1]}s(l,t)}else n!=null&&o(t,n,a);return this}get(n,t){if(n=ra(n),n){const a=E.findKey(this,n);if(a){const i=this[a];if(!t)return i;if(t===!0)return xv(i);if(E.isFunction(t))return t.call(this,i,a);if(E.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,t){if(n=ra(n),n){const a=E.findKey(this,n);return!!(a&&this[a]!==void 0&&(!t||fs(this,this[a],a,t)))}return!1}delete(n,t){const a=this;let i=!1;function o(s){if(s=ra(s),s){const l=E.findKey(a,s);l&&(!t||fs(a,a[l],l,t))&&(delete a[l],i=!0)}}return E.isArray(n)?n.forEach(o):o(n),i}clear(n){const t=Object.keys(this);let a=t.length,i=!1;for(;a--;){const o=t[a];(!n||fs(this,this[o],o,n,!0))&&(delete this[o],i=!0)}return i}normalize(n){const t=this,a={};return E.forEach(this,(i,o)=>{const s=E.findKey(a,o);if(s){t[s]=Oi(i),delete t[o];return}const l=n?bv(o):String(o).trim();l!==o&&delete t[o],t[l]=Oi(i),a[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const t=Object.create(null);return E.forEach(this,(a,i)=>{a!=null&&a!==!1&&(t[i]=n&&E.isArray(a)?a.join(", "):a)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,t])=>n+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...t){const a=new this(n);return t.forEach(i=>a.set(i)),a}static accessor(n){const a=(this[ip]=this[ip]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=ra(s);a[l]||(yv(i,s),a[l]=!0)}return E.isArray(n)?n.forEach(o):o(n),this}};fn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(fn.prototype,({value:e},n)=>{let t=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(a){this[t]=a}}});E.freezeMethods(fn);function ms(e,n){const t=this||Ha,a=n||t,i=fn.from(a.headers);let o=a.data;return E.forEach(e,function(l){o=l.call(t,o,i.normalize(),n?n.status:void 0)}),i.normalize(),o}function pf(e){return!!(e&&e.__CANCEL__)}function $t(e,n,t){ce.call(this,e??"canceled",ce.ERR_CANCELED,n,t),this.name="CanceledError"}E.inherits($t,ce,{__CANCEL__:!0});function uf(e,n,t){const a=t.config.validateStatus;!t.status||!a||a(t.status)?e(t):n(new ce("Request failed with status code "+t.status,[ce.ERR_BAD_REQUEST,ce.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function wv(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function jv(e,n){e=e||10;const t=new Array(e),a=new Array(e);let i=0,o=0,s;return n=n!==void 0?n:1e3,function(c){const d=Date.now(),p=a[o];s||(s=d),t[i]=c,a[i]=d;let h=o,m=0;for(;h!==i;)m+=t[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),d-s<n)return;const w=p&&d-p;return w?Math.round(m*1e3/w):void 0}}function kv(e,n){let t=0,a=1e3/n,i,o;const s=(d,p=Date.now())=>{t=p,i=null,o&&(clearTimeout(o),o=null),e(...d)};return[(...d)=>{const p=Date.now(),h=p-t;h>=a?s(d,p):(i=d,o||(o=setTimeout(()=>{o=null,s(i)},a-h)))},()=>i&&s(i)]}const oo=(e,n,t=3)=>{let a=0;const i=jv(50,250);return kv(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,c=s-a,d=i(c),p=s<=l;a=s;const h={loaded:s,total:l,progress:l?s/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&p?(l-s)/d:void 0,event:o,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(h)},t)},op=(e,n)=>{const t=e!=null;return[a=>n[0]({lengthComputable:t,total:e,loaded:a}),n[1]]},sp=e=>(...n)=>E.asap(()=>e(...n)),Cv=Xe.hasStandardBrowserEnv?((e,n)=>t=>(t=new URL(t,Xe.origin),e.protocol===t.protocol&&e.host===t.host&&(n||e.port===t.port)))(new URL(Xe.origin),Xe.navigator&&/(msie|trident)/i.test(Xe.navigator.userAgent)):()=>!0,Nv=Xe.hasStandardBrowserEnv?{write(e,n,t,a,i,o){const s=[e+"="+encodeURIComponent(n)];E.isNumber(t)&&s.push("expires="+new Date(t).toGMTString()),E.isString(a)&&s.push("path="+a),E.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Sv(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ev(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function hf(e,n,t){let a=!Sv(n);return e&&(a||t==!1)?Ev(e,n):n}const lp=e=>e instanceof fn?{...e}:e;function at(e,n){n=n||{};const t={};function a(d,p,h,m){return E.isPlainObject(d)&&E.isPlainObject(p)?E.merge.call({caseless:m},d,p):E.isPlainObject(p)?E.merge({},p):E.isArray(p)?p.slice():p}function i(d,p,h,m){if(E.isUndefined(p)){if(!E.isUndefined(d))return a(void 0,d,h,m)}else return a(d,p,h,m)}function o(d,p){if(!E.isUndefined(p))return a(void 0,p)}function s(d,p){if(E.isUndefined(p)){if(!E.isUndefined(d))return a(void 0,d)}else return a(void 0,p)}function l(d,p,h){if(h in n)return a(d,p);if(h in e)return a(void 0,d)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(d,p,h)=>i(lp(d),lp(p),h,!0)};return E.forEach(Object.keys({...e,...n}),function(p){const h=c[p]||i,m=h(e[p],n[p],p);E.isUndefined(m)&&h!==l||(t[p]=m)}),t}const ff=e=>{const n=at({},e);let{data:t,withXSRFToken:a,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=n;n.headers=s=fn.from(s),n.url=lf(hf(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(E.isFormData(t)){if(Xe.hasStandardBrowserEnv||Xe.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[d,...p]=c?c.split(";").map(h=>h.trim()).filter(Boolean):[];s.setContentType([d||"multipart/form-data",...p].join("; "))}}if(Xe.hasStandardBrowserEnv&&(a&&E.isFunction(a)&&(a=a(n)),a||a!==!1&&Cv(n.url))){const d=i&&o&&Nv.read(o);d&&s.set(i,d)}return n},Av=typeof XMLHttpRequest<"u",Iv=Av&&function(e){return new Promise(function(t,a){const i=ff(e);let o=i.data;const s=fn.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=i,p,h,m,w,x;function y(){w&&w(),x&&x(),i.cancelToken&&i.cancelToken.unsubscribe(p),i.signal&&i.signal.removeEventListener("abort",p)}let k=new XMLHttpRequest;k.open(i.method.toUpperCase(),i.url,!0),k.timeout=i.timeout;function g(){if(!k)return;const v=fn.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders()),z={data:!l||l==="text"||l==="json"?k.responseText:k.response,status:k.status,statusText:k.statusText,headers:v,config:e,request:k};uf(function(_){t(_),y()},function(_){a(_),y()},z),k=null}"onloadend"in k?k.onloadend=g:k.onreadystatechange=function(){!k||k.readyState!==4||k.status===0&&!(k.responseURL&&k.responseURL.indexOf("file:")===0)||setTimeout(g)},k.onabort=function(){k&&(a(new ce("Request aborted",ce.ECONNABORTED,e,k)),k=null)},k.onerror=function(){a(new ce("Network Error",ce.ERR_NETWORK,e,k)),k=null},k.ontimeout=function(){let N=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const z=i.transitional||cf;i.timeoutErrorMessage&&(N=i.timeoutErrorMessage),a(new ce(N,z.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,e,k)),k=null},o===void 0&&s.setContentType(null),"setRequestHeader"in k&&E.forEach(s.toJSON(),function(N,z){k.setRequestHeader(z,N)}),E.isUndefined(i.withCredentials)||(k.withCredentials=!!i.withCredentials),l&&l!=="json"&&(k.responseType=i.responseType),d&&([m,x]=oo(d,!0),k.addEventListener("progress",m)),c&&k.upload&&([h,w]=oo(c),k.upload.addEventListener("progress",h),k.upload.addEventListener("loadend",w)),(i.cancelToken||i.signal)&&(p=v=>{k&&(a(!v||v.type?new $t(null,e,k):v),k.abort(),k=null)},i.cancelToken&&i.cancelToken.subscribe(p),i.signal&&(i.signal.aborted?p():i.signal.addEventListener("abort",p)));const f=wv(i.url);if(f&&Xe.protocols.indexOf(f)===-1){a(new ce("Unsupported protocol "+f+":",ce.ERR_BAD_REQUEST,e));return}k.send(o||null)})},Tv=(e,n)=>{const{length:t}=e=e?e.filter(Boolean):[];if(n||t){let a=new AbortController,i;const o=function(d){if(!i){i=!0,l();const p=d instanceof Error?d:this.reason;a.abort(p instanceof ce?p:new $t(p instanceof Error?p.message:p))}};let s=n&&setTimeout(()=>{s=null,o(new ce(`timeout ${n} of ms exceeded`,ce.ETIMEDOUT))},n);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),e=null)};e.forEach(d=>d.addEventListener("abort",o));const{signal:c}=a;return c.unsubscribe=()=>E.asap(l),c}},zv=function*(e,n){let t=e.byteLength;if(t<n){yield e;return}let a=0,i;for(;a<t;)i=a+n,yield e.slice(a,i),a=i},Rv=async function*(e,n){for await(const t of Ov(e))yield*zv(t,n)},Ov=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:t,value:a}=await n.read();if(t)break;yield a}}finally{await n.cancel()}},cp=(e,n,t,a)=>{const i=Rv(e,n);let o=0,s,l=c=>{s||(s=!0,a&&a(c))};return new ReadableStream({async pull(c){try{const{done:d,value:p}=await i.next();if(d){l(),c.close();return}let h=p.byteLength;if(t){let m=o+=h;t(m)}c.enqueue(new Uint8Array(p))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},To=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",mf=To&&typeof ReadableStream=="function",Dv=To&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),gf=(e,...n)=>{try{return!!e(...n)}catch{return!1}},Lv=mf&&gf(()=>{let e=!1;const n=new Request(Xe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),dp=64*1024,xl=mf&&gf(()=>E.isReadableStream(new Response("").body)),so={stream:xl&&(e=>e.body)};To&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!so[n]&&(so[n]=E.isFunction(e[n])?t=>t[n]():(t,a)=>{throw new ce(`Response type '${n}' is not supported`,ce.ERR_NOT_SUPPORT,a)})})})(new Response);const Pv=async e=>{if(e==null)return 0;if(E.isBlob(e))return e.size;if(E.isSpecCompliantForm(e))return(await new Request(Xe.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(E.isArrayBufferView(e)||E.isArrayBuffer(e))return e.byteLength;if(E.isURLSearchParams(e)&&(e=e+""),E.isString(e))return(await Dv(e)).byteLength},Mv=async(e,n)=>{const t=E.toFiniteNumber(e.getContentLength());return t??Pv(n)},_v=To&&(async e=>{let{url:n,method:t,data:a,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:c,responseType:d,headers:p,withCredentials:h="same-origin",fetchOptions:m}=ff(e);d=d?(d+"").toLowerCase():"text";let w=Tv([i,o&&o.toAbortSignal()],s),x;const y=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let k;try{if(c&&Lv&&t!=="get"&&t!=="head"&&(k=await Mv(p,a))!==0){let z=new Request(n,{method:"POST",body:a,duplex:"half"}),O;if(E.isFormData(a)&&(O=z.headers.get("content-type"))&&p.setContentType(O),z.body){const[_,A]=op(k,oo(sp(c)));a=cp(z.body,dp,_,A)}}E.isString(h)||(h=h?"include":"omit");const g="credentials"in Request.prototype;x=new Request(n,{...m,signal:w,method:t.toUpperCase(),headers:p.normalize().toJSON(),body:a,duplex:"half",credentials:g?h:void 0});let f=await fetch(x,m);const v=xl&&(d==="stream"||d==="response");if(xl&&(l||v&&y)){const z={};["status","statusText","headers"].forEach(Z=>{z[Z]=f[Z]});const O=E.toFiniteNumber(f.headers.get("content-length")),[_,A]=l&&op(O,oo(sp(l),!0))||[];f=new Response(cp(f.body,dp,_,()=>{A&&A(),y&&y()}),z)}d=d||"text";let N=await so[E.findKey(so,d)||"text"](f,e);return!v&&y&&y(),await new Promise((z,O)=>{uf(z,O,{data:N,headers:fn.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:x})})}catch(g){throw y&&y(),g&&g.name==="TypeError"&&/Load failed|fetch/i.test(g.message)?Object.assign(new ce("Network Error",ce.ERR_NETWORK,e,x),{cause:g.cause||g}):ce.from(g,g&&g.code,e,x)}}),vl={http:Xx,xhr:Iv,fetch:_v};E.forEach(vl,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const pp=e=>`- ${e}`,Bv=e=>E.isFunction(e)||e===null||e===!1,xf={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:n}=e;let t,a;const i={};for(let o=0;o<n;o++){t=e[o];let s;if(a=t,!Bv(t)&&(a=vl[(s=String(t)).toLowerCase()],a===void 0))throw new ce(`Unknown adapter '${s}'`);if(a)break;i[s||"#"+o]=a}if(!a){const o=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=n?o.length>1?`since :
`+o.map(pp).join(`
`):" "+pp(o[0]):"as no adapter specified";throw new ce("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return a},adapters:vl};function gs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $t(null,e)}function up(e){return gs(e),e.headers=fn.from(e.headers),e.data=ms.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),xf.getAdapter(e.adapter||Ha.adapter)(e).then(function(a){return gs(e),a.data=ms.call(e,e.transformResponse,a),a.headers=fn.from(a.headers),a},function(a){return pf(a)||(gs(e),a&&a.response&&(a.response.data=ms.call(e,e.transformResponse,a.response),a.response.headers=fn.from(a.response.headers))),Promise.reject(a)})}const vf="1.11.0",zo={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{zo[e]=function(a){return typeof a===e||"a"+(n<1?"n ":" ")+e}});const hp={};zo.transitional=function(n,t,a){function i(o,s){return"[Axios v"+vf+"] Transitional option '"+o+"'"+s+(a?". "+a:"")}return(o,s,l)=>{if(n===!1)throw new ce(i(s," has been removed"+(t?" in "+t:"")),ce.ERR_DEPRECATED);return t&&!hp[s]&&(hp[s]=!0,console.warn(i(s," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(o,s,l):!0}};zo.spelling=function(n){return(t,a)=>(console.warn(`${a} is likely a misspelling of ${n}`),!0)};function Vv(e,n,t){if(typeof e!="object")throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let i=a.length;for(;i-- >0;){const o=a[i],s=n[o];if(s){const l=e[o],c=l===void 0||s(l,o,e);if(c!==!0)throw new ce("option "+o+" must be "+c,ce.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new ce("Unknown option "+o,ce.ERR_BAD_OPTION)}}const Di={assertOptions:Vv,validators:zo},Jn=Di.validators;let Qr=class{constructor(n){this.defaults=n||{},this.interceptors={request:new ap,response:new ap}}async request(n,t){try{return await this._request(n,t)}catch(a){if(a instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{a.stack?o&&!String(a.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+o):a.stack=o}catch{}}throw a}}_request(n,t){typeof n=="string"?(t=t||{},t.url=n):t=n||{},t=at(this.defaults,t);const{transitional:a,paramsSerializer:i,headers:o}=t;a!==void 0&&Di.assertOptions(a,{silentJSONParsing:Jn.transitional(Jn.boolean),forcedJSONParsing:Jn.transitional(Jn.boolean),clarifyTimeoutError:Jn.transitional(Jn.boolean)},!1),i!=null&&(E.isFunction(i)?t.paramsSerializer={serialize:i}:Di.assertOptions(i,{encode:Jn.function,serialize:Jn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Di.assertOptions(t,{baseUrl:Jn.spelling("baseURL"),withXsrfToken:Jn.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&E.merge(o.common,o[t.method]);o&&E.forEach(["delete","get","head","post","put","patch","common"],x=>{delete o[x]}),t.headers=fn.concat(s,o);const l=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(t)===!1||(c=c&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const d=[];this.interceptors.response.forEach(function(y){d.push(y.fulfilled,y.rejected)});let p,h=0,m;if(!c){const x=[up.bind(this),void 0];for(x.unshift(...l),x.push(...d),m=x.length,p=Promise.resolve(t);h<m;)p=p.then(x[h++],x[h++]);return p}m=l.length;let w=t;for(h=0;h<m;){const x=l[h++],y=l[h++];try{w=x(w)}catch(k){y.call(this,k);break}}try{p=up.call(this,w)}catch(x){return Promise.reject(x)}for(h=0,m=d.length;h<m;)p=p.then(d[h++],d[h++]);return p}getUri(n){n=at(this.defaults,n);const t=hf(n.baseURL,n.url,n.allowAbsoluteUrls);return lf(t,n.params,n.paramsSerializer)}};E.forEach(["delete","get","head","options"],function(n){Qr.prototype[n]=function(t,a){return this.request(at(a||{},{method:n,url:t,data:(a||{}).data}))}});E.forEach(["post","put","patch"],function(n){function t(a){return function(o,s,l){return this.request(at(l||{},{method:n,headers:a?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Qr.prototype[n]=t(),Qr.prototype[n+"Form"]=t(!0)});let Fv=class bf{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(o){t=o});const a=this;this.promise.then(i=>{if(!a._listeners)return;let o=a._listeners.length;for(;o-- >0;)a._listeners[o](i);a._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{a.subscribe(l),o=l}).then(i);return s.cancel=function(){a.unsubscribe(o)},s},n(function(o,s,l){a.reason||(a.reason=new $t(o,s,l),t(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const t=this._listeners.indexOf(n);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const n=new AbortController,t=a=>{n.abort(a)};return this.subscribe(t),n.signal.unsubscribe=()=>this.unsubscribe(t),n.signal}static source(){let n;return{token:new bf(function(i){n=i}),cancel:n}}};function Uv(e){return function(t){return e.apply(null,t)}}function Wv(e){return E.isObject(e)&&e.isAxiosError===!0}const bl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(bl).forEach(([e,n])=>{bl[n]=e});function yf(e){const n=new Qr(e),t=Yh(Qr.prototype.request,n);return E.extend(t,Qr.prototype,n,{allOwnKeys:!0}),E.extend(t,n,null,{allOwnKeys:!0}),t.create=function(i){return yf(at(e,i))},t}const De=yf(Ha);De.Axios=Qr;De.CanceledError=$t;De.CancelToken=Fv;De.isCancel=pf;De.VERSION=vf;De.toFormData=Io;De.AxiosError=ce;De.Cancel=De.CanceledError;De.all=function(n){return Promise.all(n)};De.spread=Uv;De.isAxiosError=Wv;De.mergeConfig=at;De.AxiosHeaders=fn;De.formToJSON=e=>df(E.isHTMLForm(e)?new FormData(e):e);De.getAdapter=xf.getAdapter;De.HttpStatusCode=bl;De.default=De;const{Axios:eb,AxiosError:nb,CanceledError:rb,isCancel:tb,CancelToken:ab,VERSION:ib,all:ob,Cancel:sb,isAxiosError:lb,spread:cb,toFormData:db,AxiosHeaders:pb,HttpStatusCode:ub,formToJSON:hb,getAdapter:fb,mergeConfig:mb}=De,wf="https://koop-api-a28ac382dd56.herokuapp.com/api",Ce=De.create({baseURL:wf,withCredentials:!0}),Zv=De.create({baseURL:wf,withCredentials:!0});let xs=!1,yl=[];function $v(e){yl.push(e)}function Kv(e){yl.forEach(n=>{try{n(e)}catch{}}),yl=[]}function Hv({getAccessToken:e,setAccessToken:n,onLogout:t}){Ce.interceptors.request.use(a=>{var i,o;try{let s;try{s=e==null?void 0:e()}catch{}if(!s&&typeof window<"u")try{s=(i=window.localStorage)==null?void 0:i.getItem("accessToken")}catch{}s&&!((o=a.headers)!=null&&o.Authorization)&&(a.headers=a.headers||{},a.headers.Authorization=`Bearer ${s}`)}catch(s){console.error("[axios] Request interceptor error:",s)}return a}),Ce.interceptors.response.use(a=>a,async a=>{var p,h;const{response:i,config:o}=a||{},s=i==null?void 0:i.status,l=o||{},c=String((l==null?void 0:l.url)||""),d=c.includes("/auth/login")||c.includes("/auth/register")||c.includes("/auth/refresh");if(s!==401||d||l._retry)return Promise.reject(a);if(l._retry=!0,xs)return new Promise((m,w)=>{$v(x=>{try{l.headers=l.headers||{},x&&(l.headers.Authorization=`Bearer ${x}`),m(Ce(l))}catch(y){w(y)}})});xs=!0;try{const m=await Zv.post("/auth/refresh"),w=(p=m==null?void 0:m.data)==null?void 0:p.accessToken;if(!w)throw new Error("No accessToken in refresh");try{n==null||n(w)}catch{}return Kv(w),l.headers=l.headers||{},l.headers.Authorization=`Bearer ${w}`,Ce(l)}catch(m){const w=(h=m==null?void 0:m.response)==null?void 0:h.status;if(w===401||w===403)try{await(t==null?void 0:t())}catch{}return Promise.reject(m)}finally{xs=!1}})}const jf=u.createContext(null),fp=["admin","user"];function wl(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=fp.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>fp.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function xi(e){try{const n=e.split(".")[1],t=atob(n.replace(/-/g,"+").replace(/_/g,"/"));return JSON.parse(t)}catch{return null}}function vi(e,n){return e?{id:e.sub,name:e.name,email:e.email,roles:wl(e.roles),active:e.active!==!1,driveFolders:e.driveFolders||[]}:n?{id:n.id,name:n.name,email:n.email,roles:wl(n.roles),active:n.active!==!1,driveFolders:n.driveFolders||[]}:null}function qv({children:e}){const[n,t]=u.useState(()=>localStorage.getItem("accessToken")||null),[a,i]=u.useState(()=>{const w=localStorage.getItem("accessToken");if(!w)return null;const x=xi(w);return vi(x,null)}),[o,s]=u.useState(!1),l=!!n;u.useEffect(()=>{if(!n)localStorage.removeItem("accessToken"),i(null);else{localStorage.setItem("accessToken",n);const w=xi(n);w&&i(vi(w,null))}},[n]);const c=async(w,x)=>{s(!0);try{const{accessToken:y,user:k}=await ux({email:w,password:x});t(y);const g=xi(y);return i(vi(g,k)),{ok:!0}}catch(y){return{ok:!1,error:y.message}}finally{s(!1)}},d=async(w,x,y,k)=>{s(!0);try{const g=Array.isArray(k)&&k.length>0,f=await dx({name:w,email:x,password:y,roles:g?wl(k):void 0});if(f!=null&&f.accessToken){t(f.accessToken);const v=xi(f.accessToken);i(vi(v,f.user))}return{ok:!0,data:f}}catch(g){return{ok:!1,error:g.message}}finally{s(!1)}},p=async()=>{try{await hx()}catch{}finally{t(null),i(null)}},h=u.useMemo(()=>({accessToken:n,user:a,isAuthenticated:l,loading:o,login:c,register:d,logout:p,refresh:px}),[n,a,l,o]),m=u.useRef(!1);return u.useEffect(()=>{m.current||(Hv({getAccessToken:()=>n,setAccessToken:w=>t(w),onLogout:()=>p()}),m.current=!0)},[]),r.jsx(jf.Provider,{value:h,children:e})}function Ye(){const e=u.useContext(jf);if(!e)throw new Error("useAuth debe usarse dentro de AuthProvider");return e}const kf="/assets/Koop%20Logo-DEFOyNWT.png";function Yv(){var m,w;const{login:e,loading:n}=Ye(),t=Fr(),i=((w=(m=Zn().state)==null?void 0:m.from)==null?void 0:w.pathname)||"/dashboard",[o,s]=u.useState(""),[l,c]=u.useState(""),[d,p]=u.useState(""),h=async x=>{x.preventDefault(),p(""),console.log("Submitting login form, Hola q ac",o);const y=await e(o,l);if(!y.ok){p(y.error||"Error al iniciar sesión");return}t(i,{replace:!0})};return u.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),r.jsxs("div",{className:"auth-page",children:[r.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:r.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),r.jsx("div",{className:"auth-bg-overlay"}),r.jsxs("div",{className:"auth-card",children:[r.jsx(V,{to:"/",children:r.jsx("img",{src:kf,alt:"Logo KOOP",className:"logo"})}),r.jsx("h2",{children:"Login KOOP"}),d&&r.jsx("div",{className:"auth-error",children:d}),r.jsxs("form",{onSubmit:h,children:[r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"email",children:"Correo"}),r.jsx("input",{id:"email",type:"email",placeholder:"Ingrese su correo",value:o,onChange:x=>s(x.target.value),required:!0})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"password",children:"Contraseña"}),r.jsx("input",{id:"password",type:"password",placeholder:"Ingrese su contraseña",value:l,onChange:x=>c(x.target.value),required:!0})]}),r.jsx("button",{type:"submit",className:"login-button",disabled:n,children:n?"Ingresando...":"Iniciar sesión"})]}),r.jsxs("div",{className:"auth-actions",children:["¿No tienes cuenta? ",r.jsx(V,{to:"/register",children:"Regístrate"})," · ",r.jsx(V,{to:"/",children:"Volver al inicio"})]})]})]})}function Gv(){const[e,n]=u.useState({name:"",email:"",password:""}),[t,a]=u.useState(!1),[i,o]=u.useState(""),[s,l]=u.useState(""),{register:c}=Ye(),d=Fr(),p=m=>n({...e,[m.target.name]:m.target.value}),h=async m=>{m.preventDefault(),o(""),l(""),a(!0);try{const w=await c(e.name,e.email,e.password);if(w.ok){const x=w.data||{ok:!0};x!=null&&x.accessToken?d("/dashboard"):(l("Tu registro fue recibido. Un administrador activara tu cuenta y te avisaremos por correo."),n({name:"",email:"",password:""}))}else o(w.error||"Error en registro")}catch(w){const x=(w==null?void 0:w.message)||"Error en registro";o(x)}finally{a(!1)}};return u.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),r.jsxs("div",{className:"auth-page",children:[r.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:r.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),r.jsx("div",{className:"auth-bg-overlay"}),r.jsxs("div",{className:"auth-card",children:[r.jsx("img",{src:kf,alt:"Logo KOOP",className:"logo"}),r.jsx("h2",{children:"Crear Cuenta"}),i&&r.jsx("div",{className:"auth-error",children:i}),s&&r.jsx("div",{className:"auth-info",children:s}),r.jsxs("form",{onSubmit:h,children:[r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"name",children:"Nombre"}),r.jsx("input",{id:"name",name:"name",type:"text",placeholder:"Tu nombre",value:e.name,onChange:p})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"email",children:"Correo"}),r.jsx("input",{id:"email",name:"email",type:"email",placeholder:"tu@email.com",value:e.email,onChange:p,required:!0})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"password",children:"Contrasena"}),r.jsx("input",{id:"password",name:"password",type:"password",placeholder:"Minimo 8 caracteres",value:e.password,onChange:p,required:!0})]}),r.jsx("button",{type:"submit",className:"login-button",disabled:t,children:t?"Creando...":"Registrarme"})]}),r.jsxs("div",{className:"auth-actions",children:["Ya tienes cuenta? ",r.jsx(V,{to:"/login",children:"Inicia sesion"})]})]})]})}function Jv(e){return e!=null&&e.roles?(Array.isArray(e.roles)?e.roles:[e.roles]).map(n=>String(n||"").toLowerCase()).includes("admin"):!1}function Qv(){const{user:e,logout:n}=Ye(),t=Jv(e);return e?r.jsxs("div",{style:{padding:24,display:"flex",flexDirection:"column",gap:16},children:[r.jsx("h1",{children:"Panel Privado"}),r.jsxs("div",{children:[r.jsxs("p",{children:["Bienvenido: ",e.email]}),r.jsxs("p",{children:["Roles: ",Array.isArray(e.roles)?e.roles.join(", "):"N/A"]}),r.jsxs("p",{children:["Estado: ",e.active===!1?"Inactivo":"Activo"]})]}),t&&r.jsx("div",{style:{display:"flex",gap:12},children:r.jsx(V,{className:"btn btn-primary",to:"/admin/usuarios",children:"Gestionar usuarios"})}),r.jsx("div",{children:r.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Cerrar sesion"})})]}):r.jsxs("div",{style:{padding:24},children:[r.jsx("h1",{children:"Panel Privado"}),r.jsx("p",{children:"No hay usuario."})]})}async function Nc(){const{data:e}=await Ce.get("/admin/users");return e}async function Xv(e,n){const{data:t}=await Ce.patch(`/admin/users/${e}/active`,{active:n});return t}async function e2(e){const{data:n}=await Ce.post(`/admin/users/${e}/grant-admin`);return n}async function n2(e){const{data:n}=await Ce.post(`/admin/users/${e}/revoke-admin`);return n}async function r2(e){const{data:n}=await Ce.delete(`/admin/users/${e}`);return n}async function Sc(){const{data:e}=await Ce.get("/admin/clients/active");return e}async function t2(e,n){const{data:t}=await Ce.patch(`/admin/clients/${e}`,n);return t}async function a2(e,n){const{data:t}=await Ce.patch(`/admin/clients/${e}/assign`,{adminUserId:n});return t}async function i2(e,n){const{data:t}=await Ce.post(`/admin/clients/from-user/${e}`,n);return t}async function o2(e,n){const t={};n&&(t["x-delete-pass"]=n);const{data:a}=await Ce.delete(`/admin/clients/${e}`,{headers:t});return a}const mp={success:{bg:"#064e3b",fg:"#a7f3d0",border:"rgba(16,185,129,0.35)"},danger:{bg:"#7f1d1d",fg:"#fecaca",border:"rgba(248,113,113,0.35)"}};function Cf({kind:e="success",children:n,autoHideMs:t,onClose:a,style:i,className:o}){const[s,l]=u.useState(!1);u.useEffect(()=>{const h=setTimeout(()=>l(!0),10);return()=>clearTimeout(h)},[]),u.useEffect(()=>{if(!t)return;const h=setTimeout(()=>{l(!1);const m=setTimeout(()=>a==null?void 0:a(),220);return()=>clearTimeout(m)},t);return()=>clearTimeout(h)},[t,a]);const c=mp[e]||mp.success,d={background:c.bg,color:c.fg,border:`1px solid ${c.border}`,padding:12,borderRadius:8,marginBottom:16,boxShadow:"0 6px 18px rgba(0,0,0,0.25) inset",transition:"opacity 200ms ease, transform 200ms ease",opacity:s?1:0,transform:s?"translateY(0)":"translateY(-6px)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10},p=()=>{l(!1),setTimeout(()=>a==null?void 0:a(),200)};return r.jsxs("div",{role:"alert",className:o,style:{...d,...i||{}},children:[r.jsx("div",{style:{lineHeight:1.4},children:n}),a&&r.jsx("button",{type:"button",onClick:p,"aria-label":"Cerrar aviso",style:{background:"transparent",color:c.fg,border:"none",fontSize:18,lineHeight:1,cursor:"pointer",padding:"2px 4px"},children:"×"})]})}function Ec(e){return r.jsx(Cf,{kind:"success",...e})}function _a(e){return r.jsx(Cf,{kind:"danger",...e})}const Nf={background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"};function Sf({children:e,style:n}){return r.jsx("div",{style:{display:"grid",gap:10,...n||{}},children:e})}function jl({children:e,cols:n=2,style:t}){return r.jsx("div",{style:{display:"grid",gap:10,gridTemplateColumns:`repeat(${n}, 1fr)`,...t||{}},children:e})}function Bn({label:e,type:n="text",value:t,onChange:a,placeholder:i,readOnly:o,inputProps:s,children:l}){return r.jsxs("label",{style:{display:"grid",gap:6},children:[e!=null&&r.jsx("span",{children:e}),l||r.jsx("input",{type:n,value:t,onChange:a,placeholder:i,readOnly:o,style:Nf,...s||{}})]})}function s2({label:e,value:n,onChange:t,rows:a=3,placeholder:i,textareaProps:o}){return r.jsxs("label",{style:{display:"grid",gap:6},children:[e!=null&&r.jsx("span",{children:e}),r.jsx("textarea",{rows:a,value:n,onChange:t,placeholder:i,style:{...Nf,resize:"vertical"},...o||{}})]})}const gp=["admin","user"];function ut(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=gp.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>gp.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function l2(e){return ut(e==null?void 0:e.roles).includes("admin")}function c2(){const{user:e}=Ye(),n=l2(e),[t,a]=u.useState([]),[i,o]=u.useState(!1),[s,l]=u.useState(null),[c,d]=u.useState(null),[p,h]=u.useState(null),[m,w]=u.useState(null),[x,y]=u.useState(null),[k,g]=u.useState(!1),[f,v]=u.useState(null),[N,z]=u.useState(null),[O,_]=u.useState(!0),[A,Z]=u.useState(!1),[$,re]=u.useState(""),[te,oe]=u.useState(null),pe=e==null?void 0:e.id,Ee=async()=>{var W,Q;if(n){o(!0),l(null);try{const H=await Nc();a(Array.isArray(H==null?void 0:H.items)?H.items.map(R=>({...R,roles:ut(R.roles)})):[])}catch(H){l(((Q=(W=H==null?void 0:H.response)==null?void 0:W.data)==null?void 0:Q.message)||(H==null?void 0:H.message)||"No se pudo cargar la lista")}finally{o(!1)}}};u.useEffect(()=>{Ee()},[n]);const ye=async(W,Q)=>{var H,R;try{d(W),await Xv(W,Q),a(L=>L.map(j=>j.id===W?{...j,active:Q}:j))}catch(L){l(((R=(H=L==null?void 0:L.response)==null?void 0:H.data)==null?void 0:R.message)||(L==null?void 0:L.message)||"No se pudo actualizar el usuario")}finally{d(null)}},se=async W=>{var H,R;if(window.confirm("Deseas otorgar rol de administrador a este usuario?"))try{l(null),h(W);const L=await e2(W);L!=null&&L.user&&a(j=>j.map(M=>M.id===W?{...M,...L.user,roles:ut(L.user.roles)}:M))}catch(L){l(((R=(H=L==null?void 0:L.response)==null?void 0:H.data)==null?void 0:R.message)||(L==null?void 0:L.message)||"No se pudo actualizar los roles")}finally{h(null)}},F=async W=>{var H,R;if(window.confirm("Deseas quitar el rol de administrador a este usuario?"))try{l(null),h(W);const L=await n2(W);L!=null&&L.user&&a(j=>j.map(M=>M.id===W?{...M,...L.user,roles:ut(L.user.roles)}:M))}catch(L){l(((R=(H=L==null?void 0:L.response)==null?void 0:H.data)==null?void 0:R.message)||(L==null?void 0:L.message)||"No se pudo actualizar los roles")}finally{h(null)}},J=async W=>{var H,R;if(window.confirm("Deseas eliminar este usuario? Esta accion es permanente."))try{w(W),await r2(W),a(L=>L.filter(j=>j.id!==W))}catch(L){l(((R=(H=L==null?void 0:L.response)==null?void 0:H.data)==null?void 0:R.message)||(L==null?void 0:L.message)||"No se pudo eliminar el usuario")}finally{w(null)}},ee=W=>{v(null),y({userId:W.id,fullName:W.name||"",documentType:"",documentNumber:"",birthDate:"",phone:"",email:W.email||"",address:"",contactInfo:""})},U=async()=>{var W,Q;if(x!=null&&x.userId){v(null);try{g(!0);const H={fullName:String(x.fullName||"").trim(),documentType:String(x.documentType||"").trim(),documentNumber:String(x.documentNumber||"").trim(),birthDate:x.birthDate?new Date(x.birthDate).toISOString():void 0,phone:String(x.phone||"").trim(),email:String(x.email||"").trim(),address:String(x.address||"").trim(),contactInfo:String(x.contactInfo||"").trim()};if(!H.fullName){v("El nombre completo es requerido"),g(!1);return}await i2(x.userId,H),y(null);try{clearTimeout(U._t)}catch{}oe("Cliente creado y carpeta asignada"),U._t=setTimeout(()=>oe(null),3500);try{window.scrollTo({top:0,behavior:"smooth"})}catch{}}catch(H){v(((Q=(W=H==null?void 0:H.response)==null?void 0:W.data)==null?void 0:Q.message)||(H==null?void 0:H.message)||"No se pudo crear el cliente")}finally{g(!1)}}};return n?r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",paddingLeft:16,paddingRight:16,paddingBottom:16},children:[r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[r.jsx("style",{children:`
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
        `}),r.jsxs("div",{className:"dash-header",style:{marginBottom:16,gap:12},children:[r.jsx("div",{className:"dash-title",children:"Administrar usuarios"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("input",{className:"input",placeholder:"Buscar por nombre, cédula o correo",value:$,onChange:W=>re(W.target.value),style:{width:260}}),$&&r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>re(""),children:"Limpiar"}),r.jsx("button",{className:"btn btn-secondary",onClick:Ee,disabled:i,children:i?"Actualizando...":"Refrescar"})]})]}),te&&r.jsx(Ec,{autoHideMs:3500,children:te}),s&&r.jsx(_a,{children:s}),(()=>{const W=C=>String(C||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),Q=W($),H=C=>{if(!Q)return!0;const G=[C.document,C.documentNumber,C.cedula,C.dni,C.idNumber,C.numeroDocumento];return[C.name,C.email,...G].some(Fe=>W(Fe).includes(Q))},R=t.filter(H),L=(C,G)=>{const ue=C!=null&&C.createdAt?new Date(C.createdAt).getTime():0;return(G!=null&&G.createdAt?new Date(G.createdAt).getTime():0)-ue},j=C=>(C==null?void 0:C.active)===!1||(C==null?void 0:C.isActive)===!1,M=R.filter(j).sort(L),X=R.filter(C=>!j(C)).sort(L),D=C=>{const G=C.createdAt?new Date(C.createdAt):null,ue=ut(C.roles),Fe=ue.includes("admin"),he=C.active!==!1&&C.isActive!==!1,_e=pe===C.id,Sn=ue.length>0?ue.join(", "):"-";return r.jsxs("tr",{children:[r.jsx("td",{children:C.name||"-"}),r.jsx("td",{children:C.email}),r.jsx("td",{children:Sn}),r.jsx("td",{children:r.jsx("span",{className:`me-badge ${he?"me-badge-success":"me-badge-error"}`,children:he?"Activo":"Inactivo"})}),r.jsx("td",{children:G?G.toLocaleString():"-"}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>ye(C.id,!he),disabled:c===C.id,children:c===C.id?"Guardando...":he?"Desactivar":"Activar"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>ee(C),children:"Convertir a cliente"}),Fe?r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>F(C.id),disabled:p===C.id||_e,title:_e?"No puedes modificar tu propio rol":"Quitar rol admin",children:p===C.id?"Quitando...":"Quitar admin"}):r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>se(C.id),disabled:p===C.id,children:p===C.id?"Asignando...":"Hacer admin"}),r.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>J(C.id),disabled:m===C.id||_e,title:_e?"No puedes eliminar tu propio usuario":"Eliminar usuario",children:m===C.id?"Eliminando...":"Eliminar"})]})})]},C.id)};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"dash-item only-desktop",style:{marginBottom:16},children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("h4",{style:{margin:0},children:["Usuarios creados (no activados)",M.length?` · ${M.length}`:""]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>_(C=>!C),children:O?"Ocultar":"Mostrar"})]}),O&&r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs("table",{className:"me-table",style:{minWidth:720},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nombre"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Roles"}),r.jsx("th",{children:"Activo"}),r.jsx("th",{children:"Creado"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[M.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:6,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay usuarios no activados"})}),M.map(D)]})]})})]}),r.jsxs("div",{className:"dash-item only-desktop",children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("h4",{style:{margin:0},children:["Usuarios activados",X.length?` · ${X.length}`:""]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Z(C=>!C),children:A?"Ocultar":"Mostrar"})]}),A&&r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs("table",{className:"me-table",style:{minWidth:720},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nombre"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Roles"}),r.jsx("th",{children:"Activo"}),r.jsx("th",{children:"Creado"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[X.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:6,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay usuarios activados"})}),X.map(D)]})]})})]})]})})(),(()=>{const W=C=>String(C||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),Q=W($),H=C=>{if(!Q)return!0;const G=[C.document,C.documentNumber,C.cedula,C.dni,C.idNumber,C.numeroDocumento];return[C.name,C.email,...G].some(Fe=>W(Fe).includes(Q))},R=t.filter(H),L=(C,G)=>{const ue=C!=null&&C.createdAt?new Date(C.createdAt).getTime():0;return(G!=null&&G.createdAt?new Date(G.createdAt).getTime():0)-ue},j=C=>(C==null?void 0:C.active)===!1||(C==null?void 0:C.isActive)===!1,M=R.filter(j).sort(L),X=R.filter(C=>!j(C)).sort(L),D=C=>{const G=C.createdAt?new Date(C.createdAt):null,ue=ut(C.roles),Fe=ue.includes("admin"),he=C.active!==!1&&C.isActive!==!1,_e=pe===C.id,Sn=N===C.id,Kn=ue.length>0?ue.join(", "):"-";return r.jsxs("div",{className:"mobile-item",children:[r.jsxs("button",{type:"button",className:"btn btn-primary btn-sm mobile-item-header",onClick:()=>z(Dn=>Dn===C.id?null:C.id),"aria-expanded":Sn,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("div",{className:"mobile-item-title",children:C.name||"-"}),r.jsx("div",{style:{opacity:.9,fontSize:12,paddingRight:10},children:Sn?"−":"+"})]}),Sn&&r.jsxs("div",{className:"mobile-item-details",children:[r.jsxs("div",{className:"kv",children:[r.jsx("span",{children:"Email"}),r.jsx("div",{children:C.email||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Roles"}),r.jsx("div",{children:Kn})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Estado"}),r.jsx("div",{children:r.jsx("span",{className:`me-badge ${he?"me-badge-success":"me-badge-error"}`,children:he?"Activo":"Inactivo"})})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Creado"}),r.jsx("div",{children:G?G.toLocaleString():"-"})]}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:10,justifyContent:"flex-end"},children:[r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>ye(C.id,!he),disabled:c===C.id,children:c===C.id?"Guardando...":he?"Desactivar":"Activar"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>ee(C),children:"Convertir a cliente"}),Fe?r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>F(C.id),disabled:p===C.id||_e,title:_e?"No puedes modificar tu propio rol":"Quitar rol admin",children:p===C.id?"Quitando...":"Quitar admin"}):r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>se(C.id),disabled:p===C.id,children:p===C.id?"Asignando...":"Hacer admin"}),r.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>J(C.id),disabled:m===C.id||_e,title:_e?"No puedes eliminar tu propio usuario":"Eliminar usuario",children:m===C.id?"Eliminando...":"Eliminar"})]})]})]},C.id)};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"dash-item only-mobile",style:{marginBottom:16},children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("h4",{style:{margin:0},children:["Usuarios creados (no activados)",M.length?` · ${M.length}`:""]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>_(C=>!C),children:O?"Ocultar":"Mostrar"})]}),O&&r.jsxs("div",{className:"mobile-list",children:[M.length===0&&r.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay usuarios no activados"}),M.map(D)]})]}),r.jsxs("div",{className:"dash-item only-mobile",children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("h4",{style:{margin:0},children:["Usuarios activados",X.length?` · ${X.length}`:""]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Z(C=>!C),children:A?"Ocultar":"Mostrar"})]}),A&&r.jsxs("div",{className:"mobile-list",children:[X.length===0&&r.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay usuarios activados"}),X.map(D)]})]})]})})()]}),x&&r.jsx("div",{role:"dialog","aria-modal":"true",className:"modal-overlay",onClick:W=>{W.target===W.currentTarget&&y(null)},children:r.jsxs("div",{className:"modal-card",role:"document",children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("div",{className:"dash-title",children:"Convertir usuario en cliente"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>y(null),"aria-label":"Cerrar",children:"Cerrar"})]}),f&&r.jsx(_a,{onClose:()=>v(null),children:f}),r.jsx("style",{children:`
            .cu-form { display: grid; gap: 12px; }
            .cu-row { display: grid; gap: 12px; }
            @media (min-width: 480px) { .cu-row.two { grid-template-columns: 1fr 1fr; } }
            .cu-field > span { font-size: 12px; letter-spacing: .02em; opacity: .85; margin-bottom: 6px; }
            .cu-input, .cu-textarea { background: #1b263b; color: #e2e8f0; border: 1px solid rgba(148,163,184,0.35); border-radius: 10px; padding: 10px 12px; }
            .cu-input::placeholder, .cu-textarea::placeholder { color: #9fb3cc; opacity: .75; }
            .cu-input:focus, .cu-textarea:focus { outline: none; border-color: #38bdf8; box-shadow: 0 0 0 2px rgba(56,189,248,.25); }
          `}),r.jsxs(Sf,{children:[r.jsx(Bn,{label:"Nombre completo",value:x.fullName,onChange:W=>y(Q=>({...Q,fullName:W.target.value})),placeholder:"Nombre y apellidos"}),r.jsxs(jl,{cols:2,children:[r.jsx(Bn,{label:"Tipo de documento",value:x.documentType,onChange:W=>y(Q=>({...Q,documentType:W.target.value})),placeholder:"CC / CE / NIT / PAS"}),r.jsx(Bn,{label:"N�mero de documento",value:x.documentNumber,onChange:W=>y(Q=>({...Q,documentNumber:W.target.value})),placeholder:"Ej: 80761460"})]}),r.jsx(Bn,{label:"Fecha de nacimiento",type:"date",value:x.birthDate,onChange:W=>y(Q=>({...Q,birthDate:W.target.value}))}),r.jsxs(jl,{cols:2,children:[r.jsx(Bn,{label:"Tel�fono fijo / celular",value:x.phone,onChange:W=>y(Q=>({...Q,phone:W.target.value})),placeholder:"Ej: 300 123 4567"}),r.jsx(Bn,{label:"Correo electr�nico",type:"email",value:x.email,onChange:W=>y(Q=>({...Q,email:W.target.value})),placeholder:"nombre@dominio.com"})]}),r.jsx(Bn,{label:"Direcci�n f�sica",value:x.address,onChange:W=>y(Q=>({...Q,address:W.target.value})),placeholder:"Calle 123 #45-67, Ciudad"}),r.jsx(s2,{label:"Informaci�n de contacto (opcional)",value:x.contactInfo,onChange:W=>y(Q=>({...Q,contactInfo:W.target.value})),placeholder:"Notas internas, referencias, etc."})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>y(null),disabled:k,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:U,disabled:k,children:k?"Guardando...":"Crear cliente"})]})]})})]}):r.jsx("div",{className:"dash-page",style:{padding:40},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Esta seccion esta disponible solo para administradores."})]})})}const xp=["admin","user"];function d2(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=xp.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>xp.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function p2(e){return d2(e==null?void 0:e.roles).includes("admin")}const u2=(e,n)=>{const t=n.find(a=>a.id===e);if(t){const a=t.name||t.email||"Usuario",i=a.split(" ").map(l=>l[0]).join("").toUpperCase().slice(0,2),o=["#0ea5e9","#22d3ee","#a78bfa","#f59e0b","#10b981","#ef4444"],s=n.indexOf(t)%o.length;return{name:a,initials:i,color:o[s]}}return{name:"Usuario",initials:"U",color:"#6b7280"}},h2=e=>{localStorage.setItem("koop_tasks",JSON.stringify(e))},f2=(e=[])=>{var t,a,i,o,s,l,c,d;const n=localStorage.getItem("koop_tasks");return n?JSON.parse(n):e.length===0?[]:[{id:"T-901",title:"Radicar tutela por vacaciones compensadas",client:"AGG MRO",status:"en-curso",priority:"alta",due:"2025-01-22",assignee:((t=e[0])==null?void 0:t.id)||"",tags:["Laboral","Audiencia"],radicado:"11001-31-05-2025-00123",description:"Preparar y radicar tutela por violación al derecho al descanso y vacaciones compensadas",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:"T-902",title:"Revisión contrato Promesa de Compraventa (Apto 501)",client:"Ramírez – Mendoza",status:"pendiente",priority:"media",due:"2025-01-20",assignee:((a=e[1])==null?void 0:a.id)||((i=e[0])==null?void 0:i.id)||"",tags:["Civil","Notaría 27"],radicado:null,description:"Revisar cláusulas del contrato de promesa de compraventa del apartamento 501",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:"T-903",title:"Concepto: Nota crédito RADIAN ya aceptada",client:"Tus-Cuentas",status:"pendiente",priority:"alta",due:"2025-01-19",assignee:((o=e[1])==null?void 0:o.id)||((s=e[0])==null?void 0:s.id)||"",tags:["Tributario","DIAN"],radicado:null,description:"Elaborar concepto jurídico sobre la nota crédito de RADIAN que ya fue aceptada",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:"T-904",title:"Solicitud CHIP y verificación Folio",client:"Inmobiliario",status:"hecho",priority:"baja",due:"2025-01-15",assignee:((l=e[2])==null?void 0:l.id)||((c=e[0])==null?void 0:c.id)||"",tags:["PH","Certificados"],radicado:"50C-2024-009988",description:"Solicitar CHIP y verificar folio de matrícula inmobiliaria",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:"T-905",title:"Memorial de sustitución de comprador (Otrosí)",client:"Villa Carolina",status:"en-curso",priority:"media",due:"2025-01-23",assignee:((d=e[0])==null?void 0:d.id)||"",tags:["Civil","Minuta"],radicado:null,description:"Elaborar memorial para sustitución de comprador mediante Otrosí",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}]};function m2(e){try{return new Date(e+"T00:00:00").toLocaleDateString("es-CO",{year:"numeric",month:"short",day:"2-digit"})}catch{return e}}function bi(e){try{return new Date(e)<new Date(new Date().toDateString())}catch{return!1}}function g2(){const{user:e}=Ye(),n=p2(e),[t,a]=u.useState([]),[i,o]=u.useState(!1),[s,l]=u.useState([]),[c,d]=u.useState(""),[p,h]=u.useState("derly"),[m,w]=u.useState("all"),[x,y]=u.useState(!0),[k,g]=u.useState(!1),[f,v]=u.useState(!1),[N,z]=u.useState(!1),[O,_]=u.useState(null),[A,Z]=u.useState({title:"",client:"",description:"",priority:"media",due:"",assignee:"",tags:"",radicado:""}),[$,re]=u.useState(!1),[te,oe]=u.useState(!1),[pe,Ee]=u.useState("");u.useEffect(()=>{ye()},[]),u.useEffect(()=>{if($){const j=setTimeout(()=>{re(!1)},5e3);return()=>clearTimeout(j)}},[$]),u.useEffect(()=>{if(te){const j=setTimeout(()=>{oe(!1)},7e3);return()=>clearTimeout(j)}},[te]),u.useEffect(()=>{k&&H()},[k,s]);const ye=async()=>{try{o(!0),console.log("Cargando usuarios...");const j=await Nc();if(console.log("Respuesta de listUsers:",j),j&&j.items){console.log("Usuarios encontrados:",j.items);const M=j.items.filter(X=>(console.log("Usuario:",X.name||X.email,"Roles:",X.roles),X.roles&&X.roles.includes("admin")));console.log("Administradores filtrados:",M),l(M),M.length>0?(h(M[0].id),a(f2(M))):(console.log("No se encontraron administradores"),Ee("No se encontraron administradores en el sistema"),oe(!0))}else console.log("No se recibieron usuarios en la respuesta"),Ee("No se pudieron cargar los usuarios"),oe(!0)}catch(j){console.error("Error cargando administradores:",j),Ee("Error al cargar la lista de administradores: "+j.message),oe(!0)}finally{o(!1)}};u.useEffect(()=>{t.length>0&&h2(t)},[t]);const se=()=>{const j=Math.max(...t.map(M=>parseInt(M.id.split("-")[1])||0));return`T-${String(j+1).padStart(3,"0")}`},F=()=>{if(console.log("Intentando crear tarea con datos:",A),!A.title.trim()||!A.client.trim()){console.log("Validación fallida: título o cliente vacío"),Ee("El título y cliente son obligatorios"),oe(!0);return}if(!A.assignee){console.log("Validación fallida: no hay asignado"),Ee("Debe seleccionar un administrador para asignar la tarea"),oe(!0);return}const j={id:se(),title:A.title.trim(),client:A.client.trim(),description:A.description.trim(),priority:A.priority,due:A.due,assignee:A.assignee,tags:A.tags.split(",").map(M=>M.trim()).filter(Boolean),radicado:A.radicado.trim()||null,status:"pendiente",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};console.log("Nueva tarea creada:",j),a(M=>{const X=[...M,j];return console.log("Tareas actualizadas:",X),X}),g(!1),H(),Ee("Tarea creada exitosamente"),re(!0),console.log("Notificación de éxito configurada")},J=()=>{if(!A.title.trim()||!A.client.trim()){Ee("El título y cliente son obligatorios"),oe(!0);return}a(j=>j.map(M=>M.id===O.id?{...M,title:A.title.trim(),client:A.client.trim(),description:A.description.trim(),priority:A.priority,due:A.due,assignee:A.assignee,tags:A.tags.split(",").map(X=>X.trim()).filter(Boolean),radicado:A.radicado.trim()||null,updatedAt:new Date().toISOString()}:M)),v(!1),_(null),H(),Ee("Tarea actualizada exitosamente"),re(!0)},ee=()=>{a(j=>j.filter(M=>M.id!==O.id)),z(!1),_(null),Ee("Tarea eliminada exitosamente"),re(!0)},U=(j,M)=>{a(X=>X.map(D=>D.id===j?{...D,status:M,updatedAt:new Date().toISOString()}:D)),Ee("Estado de tarea actualizado"),re(!0)},W=j=>{_(j),Z({title:j.title,client:j.client,description:j.description||"",priority:j.priority,due:j.due,assignee:j.assignee||(s.length>0?s[0].id:""),tags:j.tags.join(", "),radicado:j.radicado||""}),v(!0)},Q=j=>{_(j),z(!0)},H=()=>{Z({title:"",client:"",description:"",priority:"media",due:"",assignee:s.length>0?s[0].id:"",tags:"",radicado:""})},R=u.useMemo(()=>{let j=t.slice();x&&(j=j.filter(X=>X.assignee===p)),m!=="all"&&(j=j.filter(X=>X.status===m));const M=c.trim().toLowerCase();return M&&(j=j.filter(X=>[X.title,X.client,X.radicado,(X.tags||[]).join(" ")].filter(Boolean).join(" ").toLowerCase().includes(M))),j},[t,x,p,m,c]),L=`${R.length} resultado${R.length===1?"":"s"}`;return n?r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",minHeight:"100vh",padding:"20px"},children:[r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1400,margin:"0 auto"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"24px",paddingBottom:"16px",borderBottom:"1px solid #394b61"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"12px",background:"linear-gradient(135deg, #4fd1c5, #fc771c)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(79, 209, 197, 0.3)"},children:r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),r.jsxs("div",{children:[r.jsx("h1",{style:{margin:0,fontSize:"24px",fontWeight:"700",color:"#e2e8f0",letterSpacing:"0.5px"},children:"Tablero de Tareas"}),r.jsx("p",{style:{margin:"4px 0 0 0",fontSize:"14px",color:"#9fb3cc"},children:"Gestión y seguimiento de tareas del equipo"})]})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"12px",color:"#9fb3cc",padding:"4px 8px",background:"#1e2a3a",borderRadius:"6px",border:"1px solid #394b61"},children:i?"Cargando...":`${s.length} admin${s.length!==1?"s":""}`}),r.jsx("button",{className:"btn btn-primary",onClick:()=>g(!0),style:{fontSize:"14px",padding:"10px 16px"},disabled:i||s.length===0,children:"➕ Nueva Tarea"})]})]}),r.jsxs("div",{style:{display:"flex",gap:"16px",marginBottom:"24px",flexWrap:"wrap",alignItems:"center"},children:[r.jsx("div",{style:{flex:"1",minWidth:"300px"},children:r.jsx("input",{type:"search",placeholder:"Buscar por asunto, cliente o radicado...",value:c,onChange:j=>d(j.target.value),style:{width:"100%",padding:"12px 16px",background:"#1e2a3a",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})}),r.jsx("select",{value:p,onChange:j=>h(j.target.value),style:{padding:"12px 16px",background:"#1e2a3a",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px",minWidth:"200px"},children:s.map(j=>r.jsxs("option",{value:j.id,children:[j.name||j.email," (Admin)"]},j.id))}),r.jsxs("select",{value:m,onChange:j=>w(j.target.value),style:{padding:"12px 16px",background:"#1e2a3a",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px",minWidth:"150px"},children:[r.jsx("option",{value:"all",children:"Todos los estados"}),r.jsx("option",{value:"pendiente",children:"Pendiente"}),r.jsx("option",{value:"en-curso",children:"En curso"}),r.jsx("option",{value:"hecho",children:"Hecho"})]})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"24px",flexWrap:"wrap"},children:[r.jsx("button",{className:`btn ${x?"btn-primary":"btn-secondary"}`,onClick:()=>y(!0),style:{fontSize:"12px",padding:"8px 16px"},children:"Mis tareas"}),r.jsx("button",{className:`btn ${x?"btn-secondary":"btn-primary"}`,onClick:()=>y(!1),style:{fontSize:"12px",padding:"8px 16px"},children:"Todas las tareas"})]}),r.jsxs("div",{style:{background:"#1e2a3a",borderRadius:"12px",border:"1px solid #394b61",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid #394b61",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("h3",{style:{margin:0,fontSize:"18px",fontWeight:"600",color:"#e2e8f0"},children:x?"Mis tareas":"Todas las tareas"}),r.jsx("span",{style:{fontSize:"14px",color:"#9fb3cc",background:"#2a3a51",padding:"4px 12px",borderRadius:"20px"},children:L})]}),r.jsx("div",{style:{padding:"20px"},children:R.length===0?r.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",color:"#9fb3cc"},children:[r.jsx("div",{style:{width:"80px",height:"80px",margin:"0 auto 20px",background:"linear-gradient(135deg, #4fd1c5, #fc771c)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),r.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"18px",fontWeight:"600",color:"#e2e8f0"},children:"No hay tareas asignadas"}),r.jsx("p",{style:{margin:0,fontSize:"14px",color:"#9fb3cc"},children:"Cuando te asignen una tarea aparecerá aquí"})]}):r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))",gap:"20px"},children:R.map(j=>{const M=u2(j.assignee,s),X=j.status==="en-curso"?"En curso":j.status==="hecho"?"Hecho":"Pendiente";return r.jsxs("div",{style:{background:"linear-gradient(135deg, #2a3a51, #1e2a3a)",border:"1px solid #394b61",borderRadius:"12px",padding:"20px",transition:"all 0.2s ease",cursor:"pointer"},onMouseEnter:D=>{D.target.style.borderColor="#4fd1c5",D.target.style.transform="translateY(-2px)",D.target.style.boxShadow="0 8px 25px rgba(79, 209, 197, 0.15)"},onMouseLeave:D=>{D.target.style.borderColor="#394b61",D.target.style.transform="translateY(0)",D.target.style.boxShadow="none"},children:[r.jsxs("div",{style:{marginBottom:"16px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"600",color:"#e2e8f0",lineHeight:"1.4"},children:j.title}),r.jsxs("p",{style:{margin:0,fontSize:"14px",color:"#9fb3cc"},children:["Cliente: ",r.jsx("strong",{style:{color:"#4fd1c5"},children:j.client})]})]}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"16px"},children:[r.jsx("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",background:j.priority==="alta"?"rgba(239, 68, 68, 0.15)":j.priority==="media"?"rgba(245, 158, 11, 0.15)":"rgba(34, 197, 94, 0.15)",color:j.priority==="alta"?"#fecaca":j.priority==="media"?"#fde68a":"#bbf7d0",border:`1px solid ${j.priority==="alta"?"rgba(239, 68, 68, 0.3)":j.priority==="media"?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"}`},children:j.priority.toUpperCase()}),r.jsx("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",background:j.status==="hecho"?"rgba(34, 197, 94, 0.15)":j.status==="en-curso"?"rgba(59, 130, 246, 0.15)":"rgba(156, 163, 175, 0.15)",color:j.status==="hecho"?"#bbf7d0":j.status==="en-curso"?"#93c5fd":"#d1d5db",border:`1px solid ${j.status==="hecho"?"rgba(34, 197, 94, 0.3)":j.status==="en-curso"?"rgba(59, 130, 246, 0.3)":"rgba(156, 163, 175, 0.3)"}`},children:X}),r.jsxs("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",background:bi(j.due)?"rgba(239, 68, 68, 0.15)":"rgba(79, 209, 197, 0.15)",color:bi(j.due)?"#fecaca":"#67e8f9",border:`1px solid ${bi(j.due)?"rgba(239, 68, 68, 0.3)":"rgba(79, 209, 197, 0.3)"}`},children:[bi(j.due)?"VENCIDA":"VENCE",": ",m2(j.due)]}),j.radicado&&r.jsx("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",background:"rgba(79, 209, 197, 0.15)",color:"#67e8f9",border:"1px solid rgba(79, 209, 197, 0.3)"},children:j.radicado})]}),(j.tags||[]).length>0&&r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"16px"},children:(j.tags||[]).map(D=>r.jsx("span",{style:{fontSize:"10px",padding:"3px 6px",borderRadius:"8px",background:"rgba(156, 163, 175, 0.1)",color:"#9fb3cc",border:"1px solid rgba(156, 163, 175, 0.2)"},children:D},D))}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"12px",borderTop:"1px solid #394b61"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:M.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:"700",color:"white"},children:M.initials}),r.jsxs("div",{children:[r.jsx("p",{style:{margin:0,fontSize:"12px",color:"#9fb3cc"},children:"Asignada a"}),r.jsx("p",{style:{margin:0,fontSize:"14px",fontWeight:"600",color:"#e2e8f0"},children:M.name})]})]}),r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsxs("select",{value:j.status,onChange:D=>U(j.id,D.target.value),style:{fontSize:"11px",padding:"4px 8px",background:"#1e2a3a",border:"1px solid #394b61",borderRadius:"6px",color:"#e2e8f0"},children:[r.jsx("option",{value:"pendiente",children:"Pendiente"}),r.jsx("option",{value:"en-curso",children:"En curso"}),r.jsx("option",{value:"hecho",children:"Hecho"})]}),r.jsx("button",{onClick:()=>W(j),style:{padding:"4px 8px",background:"#4fd1c5",border:"none",borderRadius:"6px",color:"white",fontSize:"11px",cursor:"pointer"},title:"Editar tarea",children:"✏️"}),r.jsx("button",{onClick:()=>Q(j),style:{padding:"4px 8px",background:"#ef4444",border:"none",borderRadius:"6px",color:"white",fontSize:"11px",cursor:"pointer"},title:"Eliminar tarea",children:"🗑️"})]})]})]},j.id)})})})]})]}),$&&r.jsx("div",{style:{position:"fixed",top:"20px",right:"20px",background:"#064e3b",color:"#a7f3d0",padding:"16px",borderRadius:"8px",border:"1px solid rgba(16,185,129,0.35)",boxShadow:"0 6px 18px rgba(0,0,0,0.25)",zIndex:10001,maxWidth:"400px"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsxs("span",{children:["✅ ",pe]}),r.jsx("button",{onClick:()=>re(!1),style:{background:"transparent",border:"none",color:"#a7f3d0",fontSize:"18px",cursor:"pointer",marginLeft:"10px"},children:"×"})]})}),te&&r.jsx("div",{style:{position:"fixed",top:"20px",right:"20px",background:"#7f1d1d",color:"#fecaca",padding:"16px",borderRadius:"8px",border:"1px solid rgba(248,113,113,0.35)",boxShadow:"0 6px 18px rgba(0,0,0,0.25)",zIndex:10001,maxWidth:"400px"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsxs("span",{children:["❌ ",pe]}),r.jsx("button",{onClick:()=>oe(!1),style:{background:"transparent",border:"none",color:"#fecaca",fontSize:"18px",cursor:"pointer",marginLeft:"10px"},children:"×"})]})}),k&&r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},children:r.jsxs("div",{style:{background:"#1e2a3a",borderRadius:"12px",padding:"24px",maxWidth:"500px",width:"90%",border:"1px solid #394b61",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"},children:[r.jsx("h3",{style:{margin:"0 0 20px 0",fontSize:"18px",fontWeight:"600",color:"#e2e8f0"},children:"➕ Nueva Tarea"}),r.jsxs("div",{style:{fontSize:"10px",color:"#9fb3cc",marginBottom:"10px",padding:"8px",background:"#2a3a51",borderRadius:"4px"},children:["Debug: Admins: ",s.length,", Assignee: ",A.assignee||"ninguno"]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Título *"}),r.jsx("input",{type:"text",value:A.title,onChange:j=>Z(M=>({...M,title:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},placeholder:"Título de la tarea"})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Cliente *"}),r.jsx("input",{type:"text",value:A.client,onChange:j=>Z(M=>({...M,client:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},placeholder:"Nombre del cliente"})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Descripción"}),r.jsx("textarea",{value:A.description,onChange:j=>Z(M=>({...M,description:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px",minHeight:"80px",resize:"vertical"},placeholder:"Descripción detallada de la tarea"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Prioridad"}),r.jsxs("select",{value:A.priority,onChange:j=>Z(M=>({...M,priority:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},children:[r.jsx("option",{value:"baja",children:"Baja"}),r.jsx("option",{value:"media",children:"Media"}),r.jsx("option",{value:"alta",children:"Alta"})]})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Fecha límite"}),r.jsx("input",{type:"date",value:A.due,onChange:j=>Z(M=>({...M,due:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})]})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Asignar a"}),r.jsx("select",{value:A.assignee,onChange:j=>Z(M=>({...M,assignee:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},children:s.map(j=>r.jsxs("option",{value:j.id,children:[j.name||j.email," (Admin)"]},j.id))})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Tags (separados por comas)"}),r.jsx("input",{type:"text",value:A.tags,onChange:j=>Z(M=>({...M,tags:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},placeholder:"Laboral, Audiencia, Civil"})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Radicado"}),r.jsx("input",{type:"text",value:A.radicado,onChange:j=>Z(M=>({...M,radicado:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},placeholder:"Número de radicado (opcional)"})]})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",marginTop:"24px"},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>{g(!1),H()},style:{padding:"10px 20px"},children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:F,style:{padding:"10px 20px"},children:"Crear Tarea"})]})]})}),f&&O&&r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},children:r.jsxs("div",{style:{background:"#1e2a3a",borderRadius:"12px",padding:"24px",maxWidth:"500px",width:"90%",border:"1px solid #394b61",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"},children:[r.jsx("h3",{style:{margin:"0 0 20px 0",fontSize:"18px",fontWeight:"600",color:"#e2e8f0"},children:"✏️ Editar Tarea"}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Título *"}),r.jsx("input",{type:"text",value:A.title,onChange:j=>Z(M=>({...M,title:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Cliente *"}),r.jsx("input",{type:"text",value:A.client,onChange:j=>Z(M=>({...M,client:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Descripción"}),r.jsx("textarea",{value:A.description,onChange:j=>Z(M=>({...M,description:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px",minHeight:"80px",resize:"vertical"}})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Prioridad"}),r.jsxs("select",{value:A.priority,onChange:j=>Z(M=>({...M,priority:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},children:[r.jsx("option",{value:"baja",children:"Baja"}),r.jsx("option",{value:"media",children:"Media"}),r.jsx("option",{value:"alta",children:"Alta"})]})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Fecha límite"}),r.jsx("input",{type:"date",value:A.due,onChange:j=>Z(M=>({...M,due:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})]})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Asignar a"}),r.jsx("select",{value:A.assignee,onChange:j=>Z(M=>({...M,assignee:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},children:s.map(j=>r.jsxs("option",{value:j.id,children:[j.name||j.email," (Admin)"]},j.id))})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Tags (separados por comas)"}),r.jsx("input",{type:"text",value:A.tags,onChange:j=>Z(M=>({...M,tags:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Radicado"}),r.jsx("input",{type:"text",value:A.radicado,onChange:j=>Z(M=>({...M,radicado:j.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})]})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",marginTop:"24px"},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>{v(!1),_(null),H()},style:{padding:"10px 20px"},children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:J,style:{padding:"10px 20px"},children:"Actualizar Tarea"})]})]})}),N&&O&&r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},children:r.jsxs("div",{style:{background:"#1e2a3a",borderRadius:"12px",padding:"24px",maxWidth:"400px",width:"90%",border:"1px solid #394b61",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",fontWeight:"600",color:"#e2e8f0"},children:"🗑️ Eliminar Tarea"}),r.jsxs("p",{style:{margin:"0 0 20px 0",color:"#9fb3cc",fontSize:"14px",lineHeight:"1.5"},children:["¿Estás seguro de que quieres eliminar la tarea ",r.jsxs("strong",{style:{color:"#fc771c"},children:['"',O.title,'"']}),"?"]}),r.jsx("p",{style:{margin:"0 0 20px 0",color:"#ef4444",fontSize:"12px",fontWeight:"500"},children:"⚠️ Esta acción no se puede deshacer"}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>{z(!1),_(null)},style:{padding:"10px 20px"},children:"Cancelar"}),r.jsx("button",{className:"btn btn-danger",onClick:ee,style:{padding:"10px 20px"},children:"Eliminar Tarea"})]})]})})]}):r.jsx("div",{className:"dash-page",style:{padding:40},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Esta sección está disponible solo para administradores."})]})})}async function xr({limit:e,subfolder:n}={}){const t={};typeof e=="number"&&(t.limit=e),n&&(t.subfolder=n);const{data:a}=await Ce.get("/docs/recent",{params:t});return a}const x2=e=>e&&e.replace(/TrÃ¡mite/g,"Trámite").replace(/TÃºtela/g,"Tútela").replace(/trÃ¡mite/g,"trámite").replace(/tÃºtela/g,"tútela").replace(/ConstituciÃ³n/g,"Constitución").replace(/PolÃ­tica/g,"Política").replace(/constituciÃ³n/g,"constitución").replace(/polÃ­tica/g,"política").replace(/Ã¡/g,"á").replace(/Ã©/g,"é").replace(/Ã­/g,"í").replace(/Ã³/g,"ó").replace(/Ãº/g,"ú").replace(/Ã/g,"Á").replace(/Ã‰/g,"É").replace(/Ã/g,"Í").replace(/Ã"/g,"Ó").replace(/Ãš/g,"Ú").replace(/Ã±/g,"ñ").replace(/Ã'/g,"Ñ");async function Ef(e,{subfolder:n,useExactName:t}={}){if(!e)throw new Error("Archivo requerido");let a=e;if(t&&e.name){const s=e.name,l=x2(s);l!==s&&(console.log("🔧 API: Corrigiendo nombre de archivo:",s,"->",l),a=new File([e],l,{type:e.type,lastModified:e.lastModified}))}const i=new FormData;i.append("file",a),n&&i.append("subfolder",n),t?(console.log("🔧 Agregando useExactName al FormData"),i.append("useExactName","true")):console.log("🔧 useExactName es false, no se agrega al FormData");const{data:o}=await Ce.post("/docs/upload",i,{headers:{"Content-Type":"multipart/form-data"}});return o}async function v2(e,n=600){if(!e)throw new Error("Key requerida");const t={key:e,expires:n},{data:a}=await Ce.get("/docs/download-url",{params:t});return a}async function b2({subfolder:e}={}){const n={subfolder:e},{data:t}=await Ce.post("/docs/folder",n);return t}async function y2({subfolder:e}={}){const n={};e&&(n.subfolder=e);const{data:t}=await Ce.get("/docs/diag",{params:n});return t}async function w2(e){if(!e)throw new Error("Key requerida");const{data:n}=await Ce.delete("/docs/object",{data:{key:e}});return n}async function j2(e){if(!e)throw new Error("Ruta de carpeta requerida");const n=e.endsWith("/")?e:`${e}/`,{data:t}=await Ce.delete("/docs/object",{data:{key:n}});return t}function Ro(e){if(e==null)return"";try{return String(e).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0000-\u001F\u007F-\u009F]/g,"").replace(/\u00A0/g," ").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/\uFFFD/g,"").replace(/\s+/g," ").trim().toUpperCase()}catch{return String(e).toUpperCase()}}const k2=e=>{if(!e)return e;console.log("🔧 Fixing encoding for:",e),console.log("🔧 Original bytes:",Array.from(e).map(i=>i.charCodeAt(0).toString(16)).join(" "));let n=e;const t=/[áéíóúñüçÁÉÍÓÚÑÜÇ]/.test(e),a=/[Ã]/.test(e);if(t&&!a)return console.log("🔧 Text already has correct characters, preserving:",e),e;if(a&&(console.log("🔧 Detected corrupted characters, applying corrections..."),n=n.replace(/ConstituciÃ³n/g,"Constitución").replace(/PolÃ­tica/g,"Política").replace(/constituciÃ³n/g,"constitución").replace(/polÃ­tica/g,"política").replace(/Ã¡/g,"á").replace(/Ã©/g,"é").replace(/Ã­/g,"í").replace(/Ã³/g,"ó").replace(/Ãº/g,"ú").replace(/Ã±/g,"ñ").replace(/Ã¼/g,"ü").replace(/Ã§/g,"ç").replace(/Ã/g,"Á").replace(/Ã‰/g,"É").replace(/Ã/g,"Í").replace(/Ã"/g,"Ó").replace(/Ãš/g,"Ú").replace(/Ã'/g,"Ñ").replace(/Ãœ/g,"Ü").replace(/Ã‡/g,"Ç").replace(/Ã¢/g,"â").replace(/Ãª/g,"ê").replace(/Ã®/g,"î").replace(/Ã´/g,"ô").replace(/Ã»/g,"û").replace(/Ã‚/g,"Â").replace(/ÃŠ/g,"Ê").replace(/ÃŽ/g,"Î").replace(/Ã"/g,"Ô").replace(/Ã›/g,"Û").replace(/Ã¨/g,"è").replace(/Ã¬/g,"ì").replace(/Ã²/g,"ò").replace(/Ã¹/g,"ù").replace(/Ã€/g,"À").replace(/ÃŒ/g,"Ì").replace(/Ã'/g,"Ò").replace(/Ã™/g,"Ù").replace(/Ã¤/g,"ä").replace(/Ã«/g,"ë").replace(/Ã¯/g,"ï").replace(/Ã¶/g,"ö").replace(/Ã„/g,"Ä").replace(/Ã‹/g,"Ë").replace(/Ã/g,"Ï").replace(/Ã–/g,"Ö").replace(/â€™/g,"'").replace(/â€œ/g,'"').replace(/â€/g,'"').replace(/â€"/g,"–").replace(/â€"/g,"—"),n.includes("Ã")))try{const i=Buffer.from(n,"latin1").toString("utf8");i.includes("Ã")||(n=i,console.log("🔧 Applied latin1 correction:",n))}catch(i){console.log("🔧 Error en corrección latin1:",i)}return console.log("🔧 Final result:",n),console.log("🔧 Final bytes:",Array.from(n).map(i=>i.charCodeAt(0).toString(16)).join(" ")),n},Qn=e=>e&&e.replace(/TrÃ¡mite/g,"Trámite").replace(/TÃºtela/g,"Tútela").replace(/trÃ¡mite/g,"trámite").replace(/tÃºtela/g,"tútela").replace(/ConstituciÃ³n/g,"Constitución").replace(/PolÃ­tica/g,"Política").replace(/constituciÃ³n/g,"constitución").replace(/polÃ­tica/g,"política").replace(/Ã¡/g,"á").replace(/Ã©/g,"é").replace(/Ã­/g,"í").replace(/Ã³/g,"ó").replace(/Ãº/g,"ú").replace(/Ã±/g,"ñ").replace(/Ã/g,"Á").replace(/Ã‰/g,"É").replace(/Ã/g,"Í").replace(/Ã"/g,"Ó").replace(/Ãš/g,"Ú").replace(/Ã'/g,"Ñ").replace(/Ã¼/g,"ü").replace(/Ãœ/g,"Ü").replace(/Ã‡/g,"Ç").replace(/Ã§/g,"ç"),vp=(e="")=>{const[n,t]=u.useState(e);return[n,t,i=>{let o=i.target.value;const s=Qn(o);s!==o&&(console.log("🔧 AGGRESSIVE FIX - Original:",o,"Corrected:",s),i.target.value=s,o=s),t(o)}]};function kl({selectedClient:e,isModal:n=!1,onClose:t}){var Dc,Lc;const[a,i]=u.useState("docs"),{user:o,accessToken:s}=Ye(),l=Ro((o==null?void 0:o.name)||""),c="clientes",p=(Array.isArray(o==null?void 0:o.roles)?o.roles:o!=null&&o.roles?[o==null?void 0:o.roles]:[]).map(b=>String(b||"").trim().toLowerCase()).includes("admin"),[h,m]=u.useState([]),[w,x]=u.useState(!1),[y,k]=u.useState(null),[g,f]=u.useState([]),[v,N]=u.useState(!1),[z,O]=u.useState(null),[_,A]=u.useState(null),[Z,$]=u.useState(!1),[re,te]=u.useState(!1),[oe,pe]=u.useState(""),Ee=u.useRef(null),ye=u.useRef(null),[se,F]=u.useState(e||null),[J,ee]=u.useState({}),[U,W]=u.useState(null),[Q,H]=u.useState(!1),[R,L]=u.useState(new Set),[j,M]=u.useState([]),[X,D]=u.useState(null),[C,G]=u.useState(!1),[ue,Fe]=u.useState(new Set),[he,_e]=u.useState(!1),[Sn,Kn]=u.useState(!1),[Dn,st]=u.useState(!1),[Oo,Ur]=u.useState(!1),[Hn,Do]=u.useState(null),[qa,Ya]=u.useState(""),[tr,Wr]=u.useState(!1),[nn,T]=u.useState({fecha:"",actuacion:"",tipo:"",juzgado:"",estado:""}),[ne,ae]=u.useState([]),[K,ie]=u.useState(!1),[we,je]=u.useState(null),[Re,qn]=u.useState(!1),[mn,En]=u.useState({radicado:"",clase:"",demandante:"",demandado:"",juzgado:"",estado:""}),[sn,Ga,Of]=vp(""),[Ja,Lo]=u.useState(""),[Kt,Ac]=u.useState(!1);u.useEffect(()=>{if(sn&&sn.includes("Ã")){console.log("🔧 Process name has corrupted characters, correcting...");const b=k2(sn);b!==sn&&(console.log("🔧 Auto-correcting process name:",sn,"->",b),Ga(b))}},[sn]);const[Ln,Ic]=u.useState(!1),[Ue,Po]=u.useState(new Set),[Df,Qa]=u.useState(!1),[Mo,Tc]=u.useState(!1),[Ht,_o]=u.useState(null),[ar,lt,Lf]=vp(""),[Pf,Bo]=u.useState(!1);u.useEffect(()=>{if(ar){const b=Qn(ar);b!==ar&&(console.log("🔧 AGGRESSIVE FILE NAME FIX - Original:",ar,"Corrected:",b),lt(b))}},[ar]),u.useEffect(()=>{const S=setInterval(()=>{const I=document.querySelector('input[type="text"][placeholder="Nombre del archivo..."]');if(I&&I.value){const P=Qn(I.value);if(P!==I.value){console.log("🔧 INTERVAL FILE INPUT FIX - Original:",I.value,"Corrected:",P),I.value=P;const q=new Event("change",{bubbles:!0});I.dispatchEvent(q)}}},100);return()=>clearInterval(S)},[]),u.useEffect(()=>{console.log("🔧 Global text correction effect loaded - DISABLED")},[]),u.useEffect(()=>{const b=I=>{if(I.target.tagName==="INPUT"&&I.target.type==="text"){const P=I.target.value,q=Qn(P);if(q!==P){console.log("🔧 GLOBAL AGGRESSIVE FIX - Original:",P,"Corrected:",q),I.target.value=q;const le=new Event("change",{bubbles:!0});I.target.dispatchEvent(le)}}},S=I=>{if(I.target.tagName==="INPUT"&&I.target.type==="text"){const P=I.target.value,q=Qn(P);if(q!==P){console.log("🔧 KEYUP AGGRESSIVE FIX - Original:",P,"Corrected:",q),I.target.value=q;const le=new Event("change",{bubbles:!0});I.target.dispatchEvent(le)}}};return document.addEventListener("input",b),document.addEventListener("keyup",S),()=>{document.removeEventListener("input",b),document.removeEventListener("keyup",S)}},[]);const Mf=async()=>{N(!0),O(null),A(null);try{const b=await xr({limit:20,subfolder:c});f(Array.isArray(b==null?void 0:b.items)?b.items:[]),b!=null&&b.warning&&A(b.warning)}catch(b){O((b==null?void 0:b.message)||"Error cargando documentos")}finally{N(!1)}};u.useEffect(()=>{a==="docs"&&(p?Mf():Rc())},[a,p]),u.useEffect(()=>{e&&n&&(F(e),Vo(e))},[e,n]),u.useEffect(()=>{if(!p)return;let b=!1;return(async()=>{var S,I;try{x(!0),k(null);const P=await Sc();if(b)return;const q=Array.isArray(P==null?void 0:P.items)?P.items:[],le=String((o==null?void 0:o.id)||(o==null?void 0:o.sub)||"").trim();m(q.filter(me=>{var ge;return String(((ge=me==null?void 0:me.assignedAdmin)==null?void 0:ge.id)||"").trim()===le}))}catch(P){b||k(((I=(S=P==null?void 0:P.response)==null?void 0:S.data)==null?void 0:I.message)||(P==null?void 0:P.message)||"No se pudo cargar clientes asignados")}finally{b||x(!1)}})(),()=>{b=!0}},[p,o]);const _f=()=>{var b;if(p&&!(U!=null&&U.path)){pe("Debes seleccionar una carpeta antes de subir un documento"),te(!0);return}if(!p&&!(X!=null&&X.path)){pe("Debes seleccionar una carpeta antes de subir un documento"),te(!0);return}(b=Ee.current)==null||b.click()},Bf=b=>{var P,q;const S=(q=(P=b.target)==null?void 0:P.files)==null?void 0:q[0];if(!S)return;let I=null;if(p?se!=null&&se.documentNumber?U!=null&&U.path||(I="Debes seleccionar una carpeta específica del proceso judicial para subir documentos. No se permiten archivos sueltos en la carpeta del cliente."):I="Debes seleccionar un cliente primero":X!=null&&X.path||(I="Debes seleccionar una carpeta específica del proceso judicial para subir documentos. No se permiten archivos sueltos en la carpeta del cliente."),I){O(I),pe(I),te(!0);try{b.target.value=null}catch{}return}_o(S),lt(S.name),Bo(!0);try{b.target.value=null}catch{}},Vf=async()=>{if(!Ht||!ar.trim()){O("Debes seleccionar un archivo y especificar un nombre"),pe("Debes seleccionar un archivo y especificar un nombre"),te(!0);return}try{N(!0),O(null),te(!1),$(!1);let b=null;p&&se&&U?b=U.path:!p&&X&&(b=X.path);const S=ar.trim();console.log("🔧 File name original:",S),console.log("🔧 File name original bytes:",Array.from(S).map(le=>le.charCodeAt(0).toString(16)).join(" "));let I=Qn(S);console.log("🔧 File name después de primera corrección:",I),I=Qn(I),console.log("🔧 File name después de segunda corrección:",I),I=I.replace(/TrÃ¡mite/g,"Trámite").replace(/TÃºtela/g,"Tútela").replace(/trÃ¡mite/g,"trámite").replace(/tÃºtela/g,"tútela"),console.log("🔧 File name después de corrección manual:",I),console.log("🔧 File name final (con corrección agresiva):",I);const P=new File([Ht],I,{type:Ht.type,lastModified:Ht.lastModified});console.log("Subiendo archivo con nombre personalizado:",I,"a subfolder:",b),console.log("🔧 Enviando useExactName: true");const q=await Ef(P,{subfolder:b,useExactName:!0});q!=null&&q.file&&f(le=>[q.file,...le]),await Oc(),pe("Documento subido exitosamente"),te(!0),_o(null),lt(""),Bo(!1)}catch(b){const S=(b==null?void 0:b.message)||"Error subiendo documento";O(S),pe(`Error al subir documento: ${S}`),te(!0)}finally{N(!1)}},Ff=()=>{_o(null),lt(""),Bo(!1)},Uf=async(b,S)=>{try{const{url:I}=await v2(b,600);window.open(I||S,"_blank")}catch{S&&window.open(S,"_blank")}},Vo=async b=>{if(b!=null&&b.documentNumber){H(!0);try{const S=await xr({limit:100,subfolder:`clientes/${b.documentNumber}`}),I={},P=`clientes/${b.documentNumber}`;Array.isArray(S==null?void 0:S.items)&&(console.log("📁 Cargando carpetas para cliente:",b.documentNumber),console.log("📁 clientBasePath:",P),console.log("📁 Items recibidos:",S.items.length),S.items.forEach(q=>{var le,me;if(q.isFolder){const ge=(le=q.key)==null?void 0:le.replace(/\/$/,"");if(console.log("📁 Procesando carpeta:",ge),console.log("📁 Es diferente a clientBasePath?",ge!==P),console.log("📁 Empieza con clientBasePath + /?",ge.startsWith(P+"/")),ge&&ge!==P&&ge.startsWith(P+"/")){const ve=ge.replace(P+"/","").split("/").pop()||"Carpeta";console.log("✅ Agregando carpeta:",ve,"path:",ge),I[ge]={name:ve,path:ge,documents:[],isFolder:!0}}else console.log("❌ Excluyendo carpeta:",ge)}else{const ge=((me=q.key)==null?void 0:me.split("/").slice(0,-1).join("/"))||"root";if(ge&&ge!==P&&ge.startsWith(P+"/")){if(!I[ge]){const ve=ge.replace(P+"/","").split("/").pop()||"Carpeta";I[ge]={name:ve,path:ge,documents:[],isFolder:!1}}I[ge].documents.push(q)}}})),ee(q=>({...q,[b.id]:I}))}catch(S){console.error("Error cargando carpetas del cliente:",S),ee(I=>({...I,[b.id]:{}}))}finally{H(!1)}}},Wf=async b=>{R.has(b.id)?(L(I=>{const P=new Set(I);return P.delete(b.id),P}),F(null),W(null)):(L(I=>new Set(I).add(b.id)),F(b),W(null),J[b.id]||await Vo(b))},zc=async b=>{if(W(b),b.documents&&b.documents.length>0)f(b.documents);else{N(!0);try{const S=await xr({limit:100,subfolder:b.path}),I=Array.isArray(S==null?void 0:S.items)?S.items.filter(P=>!P.isFolder):[];f(I),ee(P=>({...P,[se.id]:{...P[se.id],[b.path]:{...b,documents:I}}}))}catch(S){console.error("Error cargando documentos de la carpeta:",S),f([])}finally{N(!1)}}},Zf=async b=>{try{const S=await xr({limit:100,subfolder:b.path});return!(S!=null&&S.items)||S.items.length===0?!0:!S.items.some(P=>{var le,me;return!(P.isFolder||((le=P.key)==null?void 0:le.endsWith("/"))||((me=P.name)==null?void 0:me.endsWith("/")))})}catch(S){return console.error("Error verificando si la carpeta está vacía:",S),!1}},$f=async()=>{if(we)try{if(qn(!0),!await Zf(we)){pe("No se puede eliminar la carpeta porque contiene archivos. Solo se pueden eliminar carpetas completamente vacías."),te(!0);return}console.log("Eliminando carpeta:",we.path),await j2(we.path),se&&ee(S=>{const I={...S};if(I[se.id]){const P=Object.fromEntries(Object.entries(I[se.id]).filter(([q,le])=>le.path!==we.path));I[se.id]=P}return I}),(U==null?void 0:U.path)===we.path&&(W(null),f([])),ie(!1),je(null),pe("Carpeta eliminada correctamente"),$(!0)}catch(b){console.error("Error eliminando carpeta:",b),pe("Error al eliminar la carpeta"),te(!0)}finally{qn(!1)}},Rc=async()=>{var b,S,I;G(!0);try{console.log("Usuario actual:",o),console.log("Token de acceso:",s?"Presente":"Ausente"),console.log("Roles del usuario:",o==null?void 0:o.roles),console.log("Intentando verificar conectividad...");try{const ve=await y2();console.log("Health check exitoso:",ve)}catch(ve){throw console.error("Health check falló:",ve),new Error("No se puede conectar con el servidor de documentos")}console.log("Intentando cargar documentos del usuario...");const P=await xr({limit:100,subfolder:"clientes"});console.log("Datos de la API para usuario:",P);const q=Array.isArray(P==null?void 0:P.items)?P.items:[];console.log("Items procesados:",q);const le=new Map;let me="clientes";const ge=q.find(ve=>ve.isFolder&&ve.key&&ve.key.includes("clientes/"));if(ge){const ve=ge.key.split("/");ve.length>=2&&(me=`${ve[0]}/${ve[1]}/`)}console.log("Ruta base del cliente:",me),console.log("Items encontrados:",q.map(ve=>({key:ve.key,isFolder:ve.isFolder,name:ve.name}))),q.forEach(ve=>{if(ve.isFolder){const Yn=ve.key;if(Yn&&Yn.startsWith(me)&&Yn!==me){const dt=Yn.replace(me,"").replace(/^\/+|\/+$/g,"");dt&&!dt.includes("/")&&le.set(Yn,{name:dt,path:Yn,documents:[],isFolder:!0})}}}),q.forEach(ve=>{var Yn;if(!ve.isFolder){const dt=((Yn=ve.key)==null?void 0:Yn.split("/"))||[];if(dt.length>2){const Xa=dt.slice(0,-1).join("/");if(Xa.startsWith(me)&&Xa!==me){const Pc=Xa.replace(me,"").replace(/^\/+|\/+$/g,"");if(Pc&&!Pc.includes("/")){const Mc=le.get(Xa);Mc&&!ve.isFolder&&Mc.documents.push(ve)}}}}});const ct=Array.from(le.values());console.log("Carpetas del usuario cargadas:",ct),M(ct)}catch(P){console.error("Error cargando carpetas del usuario:",P),console.error("Detalles del error:",{message:P.message,status:(b=P.response)==null?void 0:b.status,data:(S=P.response)==null?void 0:S.data}),((I=P.response)==null?void 0:I.status)===401?O("Error de autenticación. Por favor, cierra sesión y vuelve a iniciar sesión."):O("Error cargando carpetas: "+(P.message||"Error desconocido"))}finally{G(!1)}},Kf=async b=>{if(D(b),b.documents&&b.documents.length>0)f(b.documents);else try{N(!0);const S=await xr({limit:50,subfolder:b.path}),I=Array.isArray(S==null?void 0:S.items)?S.items.filter(P=>!P.isFolder):[];f(I),M(P=>P.map(q=>q.path===b.path?{...q,documents:I}:q))}catch(S){console.error("Error cargando documentos de la carpeta:",S),O("Error cargando documentos de la carpeta")}finally{N(!1)}},Hf=b=>{ue.has(b.path)?(Fe(I=>{const P=new Set(I);return P.delete(b.path),P}),D(null)):(Fe(I=>new Set(I).add(b.path)),Kf(b))},qf=async()=>{var b,S;if(!sn.trim()){O("El nombre del proceso es requerido"),pe("El nombre del proceso es requerido"),te(!0);return}try{Ac(!0),O(null),te(!1),$(!1);let I="";if(p&&(se!=null&&se.documentNumber))I=`clientes/${se.documentNumber}`;else if(!p)I="clientes";else throw new Error("No se puede determinar la carpeta del cliente");const P=sn.trim();console.log("🔧 Proceso original:",P),console.log("🔧 Proceso original bytes:",Array.from(P).map(ve=>ve.charCodeAt(0).toString(16)).join(" "));const q=Qn(P);console.log("🔧 Proceso final (con corrección agresiva):",q);let le="";if(Ja&&q)le=`${{civil:"Proceso Civil",laboral:"Proceso Laboral",penal:"Proceso Penal",administrativo:"Proceso Administrativo",comercial:"Proceso Comercial",ejecutivo:"Proceso Ejecutivo",familia:"Proceso de Familia",notarial:"Trámite Notarial",tramite:"Trámite"}[Ja]||Ja} - ${q}`;else if(q)le=q;else throw new Error("El nombre del proceso es requerido");const me=`${I}/${le}`;console.log("Creando carpeta:",me),console.log("folderName (hex):",Buffer.from(le,"utf8").toString("hex")),console.log("fullPath (hex):",Buffer.from(me,"utf8").toString("hex"));const ge={subfolder:me};console.log("🔧 Payload a enviar al backend:",ge),console.log("🔧 Payload JSON:",JSON.stringify(ge)),console.log("🔧 Payload subfolder (hex):",Buffer.from(ge.subfolder,"utf8").toString("hex"));const ct=await b2(ge);console.log("Carpeta creada exitosamente:",ct),Ga(""),Lo(""),_e(!1),pe("Proceso creado exitosamente"),$(!0),p&&se?await Vo(se):p||await Rc()}catch(I){console.error("Error creando proceso:",I);const P=((S=(b=I==null?void 0:I.response)==null?void 0:b.data)==null?void 0:S.message)||(I==null?void 0:I.message)||"Error creando proceso";O(P),pe(`Error al crear proceso: ${P}`),te(!0)}finally{Ac(!1)}},Yf=async()=>{try{console.log("Guardando información del proceso:",mn),Ur(!1),O(null)}catch(b){O("Error guardando información: "+b.message)}},Gf=()=>{Ic(!Ln),Po(new Set)},Jf=b=>{const S=new Set(Ue);S.has(b)?S.delete(b):S.add(b),Po(S)};u.useEffect(()=>((Z||re)&&(ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{$(!1),te(!1),pe("")},5e3)),()=>{ye.current&&clearTimeout(ye.current)}),[Z,re]);const Oc=async()=>{console.log("🔄 Iniciando recarga de carpeta..."),N(!0),O(null),A(null);try{let b=null;p&&se&&U?(b=U.path,console.log("📁 Admin - Carpeta específica:",b)):!p&&X?(b=X.path,console.log("👤 Usuario - Carpeta específica:",b)):p&&se?(b=`clientes/${se.documentNumber}`,console.log("📁 Admin - Carpeta del cliente:",b)):p?(b=c,console.log("🔄 Fallback - Carpeta por defecto:",b)):(b="clientes",console.log("👤 Usuario - Carpeta base:",b)),console.log("📡 Llamando API con subfolder:",b);const S=await xr({limit:100,subfolder:b});console.log("📦 Datos recibidos de la API:",S);const I=Array.isArray(S==null?void 0:S.items)?S.items:[];console.log("📋 Total de elementos recibidos:",I.length),f(I),console.log("✅ Lista de documentos actualizada con",I.length,"elementos"),S!=null&&S.warning&&(A(S.warning),console.log("⚠️ Advertencia:",S.warning))}catch(b){console.error("❌ Error recargando carpeta:",b),O((b==null?void 0:b.message)||"Error recargando documentos")}finally{N(!1),console.log("🏁 Recarga completada")}},Qf=async()=>{if(Ue.size!==0)try{Tc(!0),O(null),te(!1),$(!1);const b=Array.from(Ue);let S=0,I=[];for(const P of b)try{console.log("🗑️ Eliminando elemento:",P),await w2(P),S++,console.log("✅ Elemento eliminado exitosamente:",P)}catch(q){console.error("❌ Error eliminando elemento:",P,q);const le=g.find(ge=>ge.key===P),me=(le==null?void 0:le.name)||P.split("/").pop()||"Elemento";I.push(`${me}: ${(q==null?void 0:q.message)||"Error desconocido"}`)}console.log(`📊 Resumen de eliminación: ${S} eliminados, ${I.length} errores`),Po(new Set),Ic(!1),Qa(!1),I.length===0?(pe("Elementos eliminados correctamente"),te(!0)):S>0?(pe("Algunos elementos eliminados correctamente"),te(!0)):(pe("Error al eliminar elementos"),te(!0)),await new Promise(P=>setTimeout(P,500)),await Oc()}catch(b){console.error("Error en eliminación masiva:",b);const S=(b==null?void 0:b.message)||"Error eliminando elementos";O(S),pe(`Error al eliminar elementos: ${S}`),te(!0)}finally{Tc(!1)}};return r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1320},children:[Z&&r.jsx(Ec,{autoHideMs:5e3,onClose:()=>$(!1),children:oe}),re&&r.jsx(_a,{autoHideMs:8e3,onClose:()=>te(!1),children:oe}),r.jsxs("div",{className:"dash-header",children:[r.jsx("div",{className:"dash-title",children:n?"Expediente":p?"Mis expedientes":"Mi expediente"}),n&&t&&r.jsx("button",{className:"btn btn-secondary",onClick:t,style:{marginLeft:"auto"},children:"✕ Cerrar"})]}),r.jsxs("div",{className:"dash-item me-subbar",children:[r.jsxs("div",{className:"me-hello",children:["Bienvenido: ",l]}),r.jsxs("select",{className:"me-select","aria-label":"Tipo de b?squeda",children:[r.jsx("option",{children:"Procesos judiciales"}),r.jsx("option",{children:"Demandas"}),r.jsx("option",{children:"Audiencias"})]}),r.jsx("input",{className:"me-input",placeholder:"Buscar..."}),r.jsxs("div",{className:"me-actions",children:[r.jsx("button",{className:`btn ${Ln?"btn-orange":"btn-secondary"}`,onClick:Gf,title:Ln?"Salir del modo de selección":"Seleccionar múltiples archivos",children:Ln?"✕ Cancelar selección":"☑️ Seleccionar archivos"}),Ln&&Ue.size>0&&r.jsxs("button",{className:"btn btn-danger",onClick:()=>Qa(!0),title:`Eliminar ${Ue.size} elemento${Ue.size>1?"s":""} seleccionado${Ue.size>1?"s":""}`,children:["🗑️ Eliminar (",Ue.size,")"]}),r.jsx("button",{className:"btn btn-secondary",children:"Ver información"})]})]}),r.jsxs("div",{className:"me-layout",children:[r.jsxs("aside",{className:"me-left dash-item",children:[r.jsx("div",{className:"me-head",children:p?n?"CARPETAS":"CLIENTE":"CARPETAS"}),r.jsxs("div",{className:"me-tree",children:[!p&&r.jsx(r.Fragment,{children:C?r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"Cargando carpetas..."}):j.length===0?r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"No hay carpetas disponibles"}):j.map(b=>{var I;const S=ue.has(b.path);return r.jsxs("div",{style:{marginBottom:"8px"},children:[r.jsxs("div",{style:{cursor:"pointer",color:S?"#4fd1c5":"#e5edf7",fontWeight:"600",padding:"8px 4px",borderRadius:"4px",backgroundColor:S?"#2a3a51":"transparent",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.2s ease"},onClick:()=>Hf(b),children:[r.jsx("span",{style:{display:"inline-block",transform:S?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s ease",fontSize:"12px",color:S?"#4fd1c5":"#9fb3cc"},children:"▼"}),b.name]}),S&&r.jsx("div",{style:{marginLeft:"16px",marginTop:"4px"},children:r.jsxs("div",{style:{color:"#9fb3cc",fontSize:"12px"},children:[((I=b.documents)==null?void 0:I.length)||0," documentos"]})})]},b.path)})}),p&&n&&se&&r.jsx(r.Fragment,{children:Q?r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"Cargando carpetas..."}):r.jsxs("div",{children:[Object.values(J[se.id]||{}).map((b,S)=>{var I,P;return r.jsxs("div",{style:{cursor:"pointer",backgroundColor:(U==null?void 0:U.path)===b.path?"#2a3a51":"#1e2a3a",borderRadius:"8px",margin:"4px 0",padding:"12px 16px",border:(U==null?void 0:U.path)===b.path?"1px solid #fc771c":"1px solid #4fd1c5",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"12px"},onClick:()=>zc(b),onMouseEnter:q=>{(U==null?void 0:U.path)!==b.path&&(q.target.style.backgroundColor="#2a3a51",q.target.style.borderColor="#fc771c")},onMouseLeave:q=>{(U==null?void 0:U.path)!==b.path&&(q.target.style.backgroundColor="#1e2a3a",q.target.style.borderColor="#4fd1c5")},children:[r.jsx("div",{style:{width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",color:(U==null?void 0:U.path)===b.path?"#fc771c":"#4fd1c5"},children:r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"})})}),r.jsxs("div",{style:{flex:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"2px"},children:[r.jsx("div",{style:{color:(U==null?void 0:U.path)===b.path?"#fc771c":"#4fd1c5",fontSize:"14px",fontWeight:"500"},children:b.name}),Ln&&r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:q=>{q.stopPropagation(),je(b),ie(!0)},style:{padding:"2px 6px",fontSize:"10px",minWidth:"auto"},title:"Eliminar carpeta (solo si está vacía)",children:"🗑️"})]}),r.jsxs("div",{style:{color:"#9fb3cc",fontSize:"11px",display:"flex",alignItems:"center",gap:"4px"},children:[r.jsx("span",{style:{display:"inline-block",width:"4px",height:"4px",borderRadius:"50%",backgroundColor:((I=b.documents)==null?void 0:I.length)>0?"#10b981":"#6b7280"}}),((P=b.documents)==null?void 0:P.length)||0," documentos"]})]})]},S)}),Object.keys(J[se.id]||{}).length===0&&!Q&&r.jsx("div",{style:{color:"#9fb3cc",fontSize:"12px"},children:"No hay carpetas disponibles"})]})}),p&&!n&&y&&r.jsx("div",{className:"me-leaf",style:{color:"#fecaca"},children:y}),p&&!n&&!y&&w&&r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"Cargando clientes�"}),p&&!n&&!w&&h.length===0&&r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"No tienes clientes asignados"}),p&&!n&&h.length>0&&r.jsx(r.Fragment,{children:h.map(b=>{const S=R.has(b.id);return r.jsxs("div",{style:{marginBottom:"8px"},children:[r.jsxs("div",{style:{cursor:"pointer",color:S?"#4fd1c5":"#e5edf7",fontWeight:"600",padding:"8px 4px",borderRadius:"4px",backgroundColor:S?"#2a3a51":"transparent",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.2s ease"},onClick:()=>Wf(b),children:[r.jsx("span",{style:{display:"inline-block",transform:S?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s ease",fontSize:"12px",color:S?"#4fd1c5":"#9fb3cc"},children:"▼"}),b.name]}),S&&r.jsx("div",{style:{marginLeft:"16px",marginTop:"4px"},children:Q?r.jsx("div",{style:{color:"#9fb3cc",fontSize:"12px"},children:"Cargando carpetas..."}):r.jsxs("div",{children:[Object.values(J[b.id]||{}).map((I,P)=>{var q,le;return r.jsxs("div",{style:{cursor:"pointer",backgroundColor:(U==null?void 0:U.path)===I.path?"#2a3a51":"#1e2a3a",borderRadius:"8px",margin:"4px 0",padding:"12px 16px",border:(U==null?void 0:U.path)===I.path?"1px solid #fc771c":"1px solid #4fd1c5",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"12px"},onClick:()=>zc(I),onMouseEnter:me=>{(U==null?void 0:U.path)!==I.path&&(me.target.style.backgroundColor="#2a3a51",me.target.style.borderColor="#fc771c")},onMouseLeave:me=>{(U==null?void 0:U.path)!==I.path&&(me.target.style.backgroundColor="#1e2a3a",me.target.style.borderColor="#4fd1c5")},children:[r.jsx("div",{style:{width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",color:(U==null?void 0:U.path)===I.path?"#fc771c":"#4fd1c5"},children:r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"})})}),r.jsxs("div",{style:{flex:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"2px"},children:[r.jsx("div",{style:{color:(U==null?void 0:U.path)===I.path?"#fc771c":"#4fd1c5",fontSize:"14px",fontWeight:"500"},children:I.name}),Ln&&r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:me=>{me.stopPropagation(),je(I),ie(!0)},style:{padding:"2px 6px",fontSize:"10px",minWidth:"auto"},title:"Eliminar carpeta (solo si está vacía)",children:"🗑️"})]}),r.jsxs("div",{style:{color:"#9fb3cc",fontSize:"11px",display:"flex",alignItems:"center",gap:"4px"},children:[r.jsx("span",{style:{display:"inline-block",width:"4px",height:"4px",borderRadius:"50%",backgroundColor:((q=I.documents)==null?void 0:q.length)>0?"#10b981":"#6b7280"}}),((le=I.documents)==null?void 0:le.length)||0," documentos"]})]})]},P)}),Object.keys(J[b.id]||{}).length===0&&!Q&&r.jsx("div",{style:{color:"#9fb3cc",fontSize:"12px"},children:"No hay carpetas disponibles"})]})})]},b.id)})})]})]}),r.jsxs("main",{className:"me-center dash-item",children:[r.jsxs("div",{className:"me-tabs",children:[r.jsx("div",{className:`me-tab ${a==="docs"?"active":""}`,onClick:()=>i("docs"),role:"button",tabIndex:0,children:"Documentos del Proceso"}),r.jsx("div",{className:`me-tab ${a==="aud"?"active":""}`,onClick:()=>i("aud"),role:"button",tabIndex:0,children:"Audiencias"})]}),a==="docs"&&r.jsx("div",{className:"me-table-wrap",children:r.jsxs("table",{className:"me-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Fecha de registro"}),r.jsx("th",{children:"Documento"}),r.jsx("th",{children:"Tipo"}),r.jsx("th",{children:"Tamaño"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[g.filter(b=>{var I,P;return!(b.isFolder||((I=b.key)==null?void 0:I.endsWith("/"))||((P=b.name)==null?void 0:P.endsWith("/")))}).length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:5,style:{color:"#9fb3cc",textAlign:"center",padding:"20px"},children:v?"Cargando...":"No hay archivos"})}),g.filter(b=>{var I,P;return!(b.isFolder||((I=b.key)==null?void 0:I.endsWith("/"))||((P=b.name)==null?void 0:P.endsWith("/")))}).map(b=>{const S=b.lastModified?new Date(b.lastModified):b.createdTime?new Date(b.createdTime):null,I=b.name||(b.key||"").split("/").pop(),P=typeof b.size=="number"?Math.max(1,Math.round(b.size/1024)):null,q=b.mimeType||(I&&I.toLowerCase().endsWith(".pdf")?"application/pdf":void 0),le=Ue.has(b.key);return r.jsxs("tr",{style:{backgroundColor:le?"rgba(252, 119, 28, 0.15)":"transparent",border:le?"1px solid #fc771c":"1px solid transparent",transition:"all 0.2s ease",cursor:Ln?"pointer":"default"},onClick:Ln?()=>Jf(b.key):void 0,title:Ln?le?"Deseleccionar":"Seleccionar":void 0,children:[r.jsx("td",{children:S?S.toLocaleString():"-"}),r.jsx("td",{title:I,children:r.jsx("span",{style:{color:le?"#fc771c":"#e2e8f0",fontWeight:le?"600":"400"},children:I})}),r.jsx("td",{children:r.jsx("span",{style:{color:le?"#fc771c":"#4fd1c5",fontWeight:le?"600":"500"},children:q?q.split("/")[1]||q:"-"})}),r.jsx("td",{children:P?`${P} KB`:"-"}),r.jsx("td",{children:!p&&r.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:me=>{me.stopPropagation(),Uf(b.key,b.downloadURL||b.downloadUrl||b.webContentLink||b.webViewLink)},title:"Descargar archivo",disabled:Ln,children:"📥"})})})]},b.key||b.id)})]})]})}),a==="aud"&&r.jsx("div",{className:"me-table-wrap",children:r.jsxs("table",{className:"me-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Fecha"}),r.jsx("th",{children:"Actuación"}),r.jsx("th",{children:"Tipo"}),r.jsx("th",{children:"Juzgado"}),r.jsx("th",{children:"Estado"})]})}),r.jsx("tbody",{children:ne.length===0?r.jsx("tr",{children:r.jsx("td",{colSpan:5,style:{textAlign:"center",padding:20,color:"#9fb3cc"},children:"No hay audiencias programadas"})}):ne.map((b,S)=>r.jsxs("tr",{children:[r.jsx("td",{children:new Date(b.fecha).toLocaleString("es-CO")}),r.jsx("td",{children:b.actuacion}),r.jsx("td",{children:b.tipo}),r.jsx("td",{children:b.juzgado}),r.jsx("td",{children:r.jsx("span",{className:`me-badge ${b.estado==="agendada"?"me-badge-warning":b.estado==="confirmada"?"me-badge-info":b.estado==="realizada"?"me-badge-success":b.estado==="cancelada"?"me-badge-danger":"me-badge-secondary"}`,children:b.estado})})]},S))})]})})]}),r.jsx("aside",{className:"me-right dash-item",children:n?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"me-head",children:"Herramientas del Expediente"}),r.jsxs("div",{className:"me-right-content",style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx("input",{ref:Ee,type:"file",style:{display:"none"},onChange:Bf}),r.jsx("button",{className:"btn btn-primary",onClick:_f,disabled:v,title:p?se!=null&&se.documentNumber?U!=null&&U.path?"":"Selecciona una carpeta específica del proceso judicial para subir documentos":"Selecciona un cliente primero":X!=null&&X.path?"":"Selecciona una carpeta específica del proceso judicial para subir documentos",style:{width:"100%",padding:"12px"},children:v?"Subiendo...":"📄 Radicar documento"}),Pf&&Ht&&r.jsxs("div",{style:{background:"#1e2a3a",padding:"12px",borderRadius:"6px",border:"1px solid #394b61",marginTop:"8px"},children:[r.jsx("div",{style:{fontSize:"12px",color:"#9fb3cc",marginBottom:"8px",fontWeight:"500"},children:"Nombre del archivo en S3:"}),r.jsx("input",{type:"text",value:ar,onChange:Lf,onBlur:b=>{const S=Qn(b.target.value);S!==b.target.value&&(console.log("🔧 FILE INPUT BLUR FIX - Original:",b.target.value,"Corrected:",S),b.target.value=S,lt(S))},onKeyUp:b=>{const S=Qn(b.target.value);S!==b.target.value&&(console.log("🔧 FILE INPUT KEYUP FIX - Original:",b.target.value,"Corrected:",S),b.target.value=S,lt(S))},placeholder:"Nombre del archivo...",style:{width:"100%",padding:"8px 12px",background:"#2a3a51",border:"1px solid #4fd1c5",borderRadius:"4px",color:"#e2e8f0",fontSize:"14px",marginBottom:"8px"}}),r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx("button",{className:"btn btn-primary btn-sm",onClick:Vf,disabled:v||!ar.trim(),style:{flex:1,padding:"8px"},children:v?"Subiendo...":"✅ Subir"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:Ff,disabled:v,style:{flex:1,padding:"8px"},children:"❌ Cancelar"})]})]}),r.jsx("button",{className:"btn btn-secondary",onClick:()=>_e(!0),style:{width:"100%",padding:"12px"},children:"📋 Crear Proceso"}),r.jsx("button",{className:"btn btn-secondary",onClick:()=>Ur(!0),style:{width:"100%",padding:"12px"},children:"ℹ️ Información del Expediente"}),r.jsx("button",{className:"btn btn-secondary",onClick:()=>Wr(!0),style:{width:"100%",padding:"12px"},children:"📅 Programar audiencia"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"me-head",children:"Datos del Proceso Judicial"}),r.jsxs("div",{className:"me-right-content",children:[r.jsxs("div",{className:"me-proc-grid",children:[r.jsx("div",{className:"me-tag",children:"Radicado"}),r.jsx("div",{children:"110014105009-20250011400"}),r.jsx("div",{className:"me-tag",children:"Clase"}),r.jsx("div",{children:"Laboral - Ordinario"}),r.jsx("div",{className:"me-tag",children:"Demandante"}),r.jsx("div",{children:"Juan Pérez"}),r.jsx("div",{className:"me-tag",children:"Demandado"}),r.jsx("div",{children:"Acme S.A.S."}),r.jsx("div",{className:"me-tag",children:"Juzgado"}),r.jsx("div",{children:"JDO 009 MPC"}),r.jsx("div",{className:"me-tag",children:"Estado"}),r.jsx("div",{children:"En trámite"})]}),r.jsx("hr",{className:"me-hr"}),r.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:"Descargar expediente"})]})]})})]})]}),n&&he&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>_e(!1),children:r.jsxs("div",{className:"dash-card",style:{maxWidth:"500px",width:"100%"},onClick:b=>b.stopPropagation(),children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Crear Nuevo Proceso"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Nombre del Proceso:"}),r.jsx("input",{type:"text",className:"me-input",placeholder:"Ej: Demanda por despido injustificado",value:sn,onChange:Of,style:{width:"100%"},disabled:Kt}),r.jsx("div",{style:{fontSize:"12px",color:"#fbbf24",backgroundColor:"rgba(251, 191, 36, 0.1)",border:"1px solid rgba(251, 191, 36, 0.3)",borderRadius:"6px",padding:"8px 12px",marginTop:"8px"},children:"ℹ️ Esta ventana generará el nombre completo de la carpeta combinando el tipo de proceso seleccionado con el nombre que escribas."})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Tipo de Proceso:"}),r.jsxs("select",{className:"me-select",style:{width:"100%"},value:Ja,onChange:b=>Lo(b.target.value),disabled:Kt,children:[r.jsx("option",{value:"",children:"Selecciona un tipo..."}),r.jsx("option",{value:"civil",children:"Proceso Civil"}),r.jsx("option",{value:"laboral",children:"Proceso Laboral"}),r.jsx("option",{value:"penal",children:"Proceso Penal"}),r.jsx("option",{value:"administrativo",children:"Proceso Administrativo"}),r.jsx("option",{value:"comercial",children:"Proceso Comercial"}),r.jsx("option",{value:"ejecutivo",children:"Proceso Ejecutivo"}),r.jsx("option",{value:"familia",children:"Proceso de Familia"}),r.jsx("option",{value:"notarial",children:"Trámite Notarial"}),r.jsx("option",{value:"tramite",children:"Trámite"})]})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>{_e(!1),Ga(""),Lo("")},disabled:Kt,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:qf,disabled:Kt||!sn.trim(),children:Kt?"Creando...":"Crear Proceso"})]})]})}),n&&Sn&&Hn&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>Kn(!1),children:r.jsxs("div",{className:"dash-card",style:{maxWidth:"500px",width:"100%"},onClick:b=>b.stopPropagation(),children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Renombrar Archivo"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Archivo actual:"}),r.jsx("div",{style:{background:"#1e2a3a",padding:"8px 12px",borderRadius:"6px",color:"#9fb3cc",fontSize:"14px"},children:Hn.name||((Dc=Hn.key)==null?void 0:Dc.split("/").pop())})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Nuevo nombre:"}),r.jsx("input",{type:"text",className:"me-input",value:qa,onChange:b=>Ya(b.target.value),style:{width:"100%"}})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>Kn(!1),children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:()=>{console.log("Renombrando archivo:",Hn.key,"a:",qa),Kn(!1)},children:"Renombrar"})]})]})}),n&&Dn&&Hn&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>st(!1),children:r.jsxs("div",{className:"dash-card",style:{maxWidth:"500px",width:"100%"},onClick:b=>b.stopPropagation(),children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Confirmar Eliminación"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[r.jsx("div",{children:"¿Estás seguro de que quieres eliminar el archivo?"}),r.jsxs("div",{style:{background:"#1e2a3a",padding:"12px",borderRadius:"6px",color:"#e5edf7",fontSize:"14px"},children:[r.jsx("strong",{children:"Archivo:"})," ",Hn.name||((Lc=Hn.key)==null?void 0:Lc.split("/").pop())]}),r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:"8px 12px",borderRadius:"6px",fontSize:"12px"},children:"⚠️ Esta acción no se puede deshacer"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>st(!1),children:"Cancelar"}),r.jsx("button",{className:"btn btn-danger",onClick:()=>{console.log("Eliminando archivo:",Hn.key),st(!1)},children:"Eliminar"})]})]})}),n&&Oo&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>Ur(!1),children:r.jsxs("div",{className:"dash-card",style:{maxWidth:"600px",width:"100%"},onClick:b=>b.stopPropagation(),children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Información del Expediente"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Radicado:"}),r.jsx("input",{type:"text",className:"me-input",value:mn.radicado,onChange:b=>En(S=>({...S,radicado:b.target.value})),placeholder:"110014105009-20250011400",style:{width:"100%"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Clase:"}),r.jsx("input",{type:"text",className:"me-input",value:mn.clase,onChange:b=>En(S=>({...S,clase:b.target.value})),placeholder:"Laboral - Ordinario",style:{width:"100%"}})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Demandante:"}),r.jsx("input",{type:"text",className:"me-input",value:mn.demandante,onChange:b=>En(S=>({...S,demandante:b.target.value})),placeholder:"Juan Pérez",style:{width:"100%"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Demandado:"}),r.jsx("input",{type:"text",className:"me-input",value:mn.demandado,onChange:b=>En(S=>({...S,demandado:b.target.value})),placeholder:"Acme S.A.S.",style:{width:"100%"}})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Juzgado:"}),r.jsx("input",{type:"text",className:"me-input",value:mn.juzgado,onChange:b=>En(S=>({...S,juzgado:b.target.value})),placeholder:"JDO 009 MPC",style:{width:"100%"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Estado:"}),r.jsxs("select",{className:"me-select",value:mn.estado,onChange:b=>En(S=>({...S,estado:b.target.value})),style:{width:"100%"},children:[r.jsx("option",{value:"",children:"Selecciona un estado..."}),r.jsx("option",{value:"en-tramite",children:"En trámite"}),r.jsx("option",{value:"sentencia",children:"Sentencia"}),r.jsx("option",{value:"archivado",children:"Archivado"}),r.jsx("option",{value:"suspension",children:"Suspensión"})]})]})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>Ur(!1),children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:Yf,children:"Guardar Información"})]})]})}),Df&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>Qa(!1),children:r.jsxs("div",{className:"dash-card",style:{maxWidth:"500px",width:"100%"},onClick:b=>b.stopPropagation(),children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Confirmar Eliminación"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[r.jsxs("div",{children:["¿Estás seguro de que quieres eliminar ",Ue.size," elemento",Ue.size>1?"s":""," seleccionado",Ue.size>1?"s":"","?"]}),r.jsxs("div",{style:{background:"#1e2a3a",padding:"12px",borderRadius:"6px",color:"#e5edf7",fontSize:"14px",maxHeight:"200px",overflowY:"auto"},children:[r.jsx("strong",{children:"Elementos a eliminar:"}),r.jsxs("ul",{style:{margin:"8px 0 0 0",paddingLeft:"20px"},children:[Array.from(Ue).slice(0,10).map((b,S)=>{const I=g.find(le=>le.key===b),P=(I==null?void 0:I.name)||b.split("/").pop()||"Elemento",q=(I==null?void 0:I.isFolder)||b.endsWith("/")||P.endsWith("/");return r.jsxs("li",{style:{marginBottom:"4px"},children:[r.jsxs("span",{style:{color:q?"#4fd1c5":"#e5edf7"},children:[q?"📁":"📄"," ",P]}),r.jsxs("span",{style:{color:"#9fb3cc",fontSize:"12px",marginLeft:"8px"},children:["(",q?"Carpeta":"Archivo",")"]})]},S)}),Ue.size>10&&r.jsxs("li",{style:{color:"#9fb3cc",fontStyle:"italic"},children:["... y ",Ue.size-10," elemento",Ue.size-10>1?"s":""," más"]})]})]}),r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:"8px 12px",borderRadius:"6px",fontSize:"12px"},children:"⚠️ Esta acción no se puede deshacer"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>Qa(!1),disabled:Mo,children:"Cancelar"}),r.jsx("button",{className:"btn btn-danger",onClick:Qf,disabled:Mo,children:Mo?"Eliminando...":`Eliminar ${Ue.size} elemento${Ue.size>1?"s":""}`})]})]})}),n&&tr&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>Wr(!1),children:r.jsxs("div",{style:{background:"#0f172a",color:"#e2e8f0",width:"100%",maxWidth:560,borderRadius:14,padding:16,boxShadow:"0 10px 32px rgba(0,0,0,0.45)"},onClick:b=>b.stopPropagation(),children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[r.jsx("h3",{style:{margin:0,fontSize:"18px",fontWeight:"600"},children:"Programar Audiencia"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Wr(!1),style:{padding:"4px 8px"},children:"✕"})]}),r.jsxs("div",{style:{display:"grid",gap:16},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontSize:"14px",fontWeight:"500"},children:"Fecha de Audiencia"}),r.jsx("input",{type:"datetime-local",value:nn.fecha,onChange:b=>T(S=>({...S,fecha:b.target.value})),style:{width:"100%",padding:"8px 12px",background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,fontSize:"14px"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontSize:"14px",fontWeight:"500"},children:"Actuación"}),r.jsx("input",{type:"text",value:nn.actuacion,onChange:b=>T(S=>({...S,actuacion:b.target.value})),placeholder:"Ej: Audiencia de conciliación",style:{width:"100%",padding:"8px 12px",background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,fontSize:"14px"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontSize:"14px",fontWeight:"500"},children:"Tipo de Audiencia"}),r.jsxs("select",{value:nn.tipo,onChange:b=>T(S=>({...S,tipo:b.target.value})),style:{width:"100%",padding:"8px 12px",background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,fontSize:"14px"},children:[r.jsx("option",{value:"",children:"Seleccionar tipo"}),r.jsx("option",{value:"conciliacion",children:"Conciliación"}),r.jsx("option",{value:"audiencia_inicial",children:"Audiencia Inicial"}),r.jsx("option",{value:"audiencia_pruebas",children:"Audiencia de Pruebas"}),r.jsx("option",{value:"audiencia_sentencia",children:"Audiencia de Sentencia"}),r.jsx("option",{value:"audiencia_especial",children:"Audiencia Especial"})]})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontSize:"14px",fontWeight:"500"},children:"Juzgado"}),r.jsx("input",{type:"text",value:nn.juzgado,onChange:b=>T(S=>({...S,juzgado:b.target.value})),placeholder:"Ej: Juzgado Primero Civil del Circuito",style:{width:"100%",padding:"8px 12px",background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,fontSize:"14px"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontSize:"14px",fontWeight:"500"},children:"Estado"}),r.jsxs("select",{value:nn.estado,onChange:b=>T(S=>({...S,estado:b.target.value})),style:{width:"100%",padding:"8px 12px",background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,fontSize:"14px"},children:[r.jsx("option",{value:"",children:"Seleccionar estado"}),r.jsx("option",{value:"agendada",children:"Agendada"}),r.jsx("option",{value:"confirmada",children:"Confirmada"}),r.jsx("option",{value:"realizada",children:"Realizada"}),r.jsx("option",{value:"cancelada",children:"Cancelada"}),r.jsx("option",{value:"aplazada",children:"Aplazada"})]})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:20},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>Wr(!1),children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:()=>{const b={...nn,id:Date.now(),fecha:nn.fecha};ae(S=>[...S,b]),Wr(!1),T({fecha:"",actuacion:"",tipo:"",juzgado:"",estado:""})},disabled:!nn.fecha||!nn.actuacion||!nn.tipo||!nn.juzgado||!nn.estado,children:"Programar Audiencia"})]})]})}),n&&K&&we&&r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},onClick:()=>{Re||(ie(!1),je(null))},children:r.jsxs("div",{style:{backgroundColor:"#1e2a3a",borderRadius:"12px",padding:"24px",maxWidth:"400px",width:"90%",border:"1px solid #394b61",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},onClick:b=>b.stopPropagation(),children:[r.jsxs("div",{style:{marginBottom:"16px"},children:[r.jsx("h3",{style:{color:"#e2e8f0",margin:"0 0 8px 0",fontSize:"18px",fontWeight:"600"},children:"🗑️ Eliminar Carpeta"}),r.jsxs("p",{style:{color:"#9fb3cc",margin:0,fontSize:"14px",lineHeight:"1.5"},children:["¿Estás seguro de que quieres eliminar la carpeta ",r.jsxs("strong",{style:{color:"#fc771c"},children:['"',we.name,'"']}),"?"]}),r.jsx("p",{style:{color:"#ef4444",margin:"8px 0 0 0",fontSize:"12px",fontWeight:"500"},children:"⚠️ Solo se puede eliminar si la carpeta está vacía"})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",marginTop:"20px"},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>{ie(!1),je(null)},disabled:Re,style:{padding:"8px 16px"},children:"Cancelar"}),r.jsx("button",{className:"btn btn-danger",onClick:$f,disabled:Re,style:{padding:"8px 16px"},children:Re?"Eliminando...":"Eliminar Carpeta"})]})]})})]})}const bp=["admin","user"];function C2(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=bp.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>bp.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function N2(e){return C2(e==null?void 0:e.roles).includes("admin")}function S2(){const{user:e}=Ye(),n=N2(e),[t,a]=u.useState([]),[i,o]=u.useState(!1),[s,l]=u.useState(null),[c,d]=u.useState(null),[p,h]=u.useState(!1),[m,w]=u.useState(""),[x,y]=u.useState(null),[k,g]=u.useState(!1),[f,v]=u.useState(null),[N,z]=u.useState([]),[O,_]=u.useState(!1),[A,Z]=u.useState(null),[$,re]=u.useState(""),[te,oe]=u.useState(!1),[pe,Ee]=u.useState(null),[ye,se]=u.useState(null),[F,J]=u.useState({}),[ee,U]=u.useState({}),[W,Q]=u.useState(!1),[H,R]=u.useState(null),[L,j]=u.useState(!1),[M,X]=u.useState(null),[D,C]=u.useState(""),[G,ue]=u.useState(null),[Fe,he]=u.useState("success"),_e=(T,ne="success")=>{ue(String(T||"")),he(ne);try{clearTimeout(_e._t)}catch{}_e._t=setTimeout(()=>ue(null),3500)},Sn=async()=>{var T,ne;if(n){o(!0),l(null);try{const ae=await Sc(),K=Array.isArray(ae==null?void 0:ae.items)?ae.items:[];a(K)}catch(ae){l(((ne=(T=ae==null?void 0:ae.response)==null?void 0:T.data)==null?void 0:ne.message)||(ae==null?void 0:ae.message)||"No se pudo cargar la lista de clientes")}finally{o(!1)}}};u.useEffect(()=>{Sn()},[n]);const Kn=u.useMemo(()=>{const T=String(m||"").trim().toLowerCase();return T?t.filter(ne=>[ne.name,ne.email,ne.documentNumber,ne.phone,ne.id].map(ae=>String(ae||"").toLowerCase()).some(ae=>ae.includes(T))):t},[t,m]),Dn=T=>{const ne=t.find(ae=>ae.id===T);return(ne==null?void 0:ne.assignedAdmin)||null},st=async T=>{var ne,ae;v(T),g(!0),Z(null),_(!0);try{const K=await Nc(),we=(Array.isArray(K==null?void 0:K.items)?K.items:[]).filter(Re=>(Array.isArray(Re.roles)?Re.roles:[Re.roles]).map(qn=>String(qn||"").toLowerCase()).includes("admin"));z(we.map(Re=>({id:Re.id,name:Re.name||Re.email||Re.id,email:Re.email})));const je=Dn(T.id);re((je==null?void 0:je.id)||"")}catch(K){Z(((ae=(ne=K==null?void 0:K.response)==null?void 0:ne.data)==null?void 0:ae.message)||(K==null?void 0:K.message)||"No se pudo cargar administradores")}finally{_(!1)}},Oo=async()=>{var T,ne;try{const ae=$||"";await a2(f.id,ae),await Sn(),g(!1),v(null)}catch(ae){Z(((ne=(T=ae==null?void 0:ae.response)==null?void 0:T.data)==null?void 0:ne.message)||(ae==null?void 0:ae.message)||"No se pudo asignar")}},Ur=T=>{d({id:T.id,name:T.name||"",email:T.email||"",documentNumber:T.documentNumber||"",phone:T.phone||""})},Hn=async()=>{var ne,ae;if(!c)return;const T={name:String(c.name||"").trim(),documentNumber:String(c.documentNumber||"").trim(),phone:String(c.phone||"").trim()};try{h(!0),l(null);const K=await t2(c.id,T),ie=(K==null?void 0:K.client)||null;ie&&a(we=>we.map(je=>je.id===ie.id?{...je,...ie}:je)),d(null)}catch(K){l(((ae=(ne=K==null?void 0:K.response)==null?void 0:ne.data)==null?void 0:ae.message)||(K==null?void 0:K.message)||"No se pudo guardar la informacion")}finally{h(!1)}},Do=T=>{R(T),Q(!0),X(null),C("")},qa=async()=>{var T,ne,ae;if(H)try{j(!0),X(null);const K=await o2(H.id,D);await Sn(),Q(!1),R(null);const ie=(T=K==null?void 0:K.s3)==null?void 0:T.deleted;_e(typeof ie=="number"?`Cliente eliminado. Archivos S3 eliminados: ${ie}`:"Cliente eliminado correctamente","danger")}catch(K){X(((ae=(ne=K==null?void 0:K.response)==null?void 0:ne.data)==null?void 0:ae.message)||(K==null?void 0:K.message)||"No se pudo eliminar el cliente")}finally{j(!1)}},Ya=async T=>{Ee(T),oe(!0)},tr=T=>{const ne=String((T==null?void 0:T.documentNumber)||(T==null?void 0:T.id)||"").trim();return ne?`clientes/${ne}/`:"clientes/sin-id/"},Wr=async T=>{const ne=T.id,ae=tr(T);U(K=>({...K,[ne]:!0}));try{const K=ae.startsWith("clientes/")?ae.replace(/\/$/,""):ae,ie=await xr({limit:50,subfolder:K}),we=Array.isArray(ie==null?void 0:ie.items)?ie.items:[];J(je=>({...je,[ne]:we}))}catch(K){console.error("Error al cargar archivos:",K),J(ie=>({...ie,[ne]:[]}))}finally{U(K=>({...K,[ne]:!1}))}},nn=async T=>{const ne=T.id;ye===ne?se(null):(se(ne),F[ne]||await Wr(T))};return n?r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",paddingLeft:16,paddingRight:16,paddingBottom:16},children:[r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[r.jsx("style",{children:`
           @keyframes spin {
             0% { transform: rotate(0deg); }
             100% { transform: rotate(360deg); }
           }
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
         `}),r.jsxs("div",{className:"dash-header clients-header",style:{marginBottom:16},children:[r.jsx("div",{className:"dash-title",children:"Clientes activos"}),r.jsxs("div",{className:"clients-actions",children:[r.jsx("input",{type:"search",name:"q",autoComplete:"off",placeholder:"Buscar por nombre, email, cedula o celular",value:m,onChange:T=>w(T.target.value),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"6px 10px"}}),r.jsx("button",{className:"btn btn-secondary",onClick:Sn,disabled:i,children:i?"Actualizando...":"Refrescar"})]})]}),G&&(Fe==="danger"?r.jsx(_a,{autoHideMs:3500,children:G}):r.jsx(Ec,{autoHideMs:3500,children:G})),s&&r.jsx(_a,{children:s}),r.jsx("div",{className:"dash-item only-desktop",style:{overflowX:"auto"},children:r.jsxs("table",{className:"me-table",style:{minWidth:820},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nombre"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Cedula"}),r.jsx("th",{children:"Celular"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[Kn.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:5,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay clientes activos para mostrar"})}),Kn.map(T=>{var ne,ae;return r.jsxs(r.Fragment,{children:[r.jsxs("tr",{children:[r.jsxs("td",{children:[r.jsxs("div",{style:{cursor:"pointer",color:"#4fd1c5",fontWeight:"500",textDecoration:"underline"},onClick:()=>nn(T),onMouseOver:K=>K.target.style.color="#6ee7d7",onMouseOut:K=>K.target.style.color="#4fd1c5",children:[T.name||"-"," ",ye===T.id?"▼":"▶"]}),r.jsxs("div",{style:{fontSize:12,opacity:.75},children:["Admin asignado: ",((ne=T.assignedAdmin)==null?void 0:ne.name)||"—"]})]}),r.jsx("td",{children:T.email||"-"}),r.jsx("td",{children:T.documentNumber||"-"}),r.jsx("td",{children:T.phone||"-"}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>st(T),title:Dn(T.id)?`Asignado a ${((ae=Dn(T.id))==null?void 0:ae.name)||""}`:"Asignar administrador",children:Dn(T.id)?"Asignado":"Asignar"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Ya(T),children:"Archivos"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Ur(T),children:"Editar"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Do(T),children:"Eliminar"})]})})]},T.id),ye===T.id&&r.jsx("tr",{children:r.jsx("td",{colSpan:5,style:{padding:0,background:"#0c1530"},children:r.jsxs("div",{style:{padding:"20px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[r.jsxs("h4",{style:{margin:0,color:"#e2e8f0"},children:["Archivos y Carpetas - ",T.name]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>se(null),children:"Cerrar"})]}),ee[T.id]?r.jsxs("div",{style:{textAlign:"center",padding:"40px",color:"#cbd5e1"},children:[r.jsx("div",{style:{display:"inline-block",width:"20px",height:"20px",border:"2px solid #4fd1c5",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite",marginRight:"8px"}}),"Cargando archivos..."]}):r.jsx("div",{style:{border:"1px solid #394b61",borderRadius:"8px",overflow:"hidden",background:"#1b263b"},children:r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[r.jsx("thead",{style:{background:"#0c1530"},children:r.jsxs("tr",{children:[r.jsx("th",{style:{padding:"12px 16px",fontWeight:"600",textAlign:"left"},children:"Nombre"}),r.jsx("th",{style:{padding:"12px 16px",fontWeight:"600",textAlign:"left"},children:"Tipo"}),r.jsx("th",{style:{padding:"12px 16px",fontWeight:"600",textAlign:"left"},children:"Fecha"}),r.jsx("th",{style:{padding:"12px 16px",fontWeight:"600",textAlign:"left"},children:"Tamaño"})]})}),r.jsx("tbody",{children:!F[T.id]||F[T.id].length===0?r.jsx("tr",{children:r.jsx("td",{colSpan:4,style:{textAlign:"center",padding:"40px",color:"#cbd5e1"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[r.jsx("div",{children:"No hay archivos o carpetas para mostrar"}),r.jsx("div",{style:{fontSize:"14px",opacity:.7},children:'Haz clic en "Archivos" para gestionar documentos'})]})})}):F[T.id].filter(K=>{const ie=K.key||"",we=tr(T);return!(ie===we&&K.isFolder)}).map(K=>{var qn,mn;const ie=K.lastModified?new Date(K.lastModified):K.createdTime?new Date(K.createdTime):null,we=K.isFolder||((qn=K.key)==null?void 0:qn.endsWith("/"))||((mn=K.name)==null?void 0:mn.endsWith("/"));let je=K.name||(K.key||"").split("/").pop();if(we&&je&&tr(T)){const En=tr(T).replace(/\/$/,"");K.key&&K.key.startsWith(En)&&(je=K.key.replace(En+"/","").replace(/\/$/,""))}const Re=typeof K.size=="number"?Math.max(1,Math.round(K.size/1024)):null;return r.jsxs("tr",{style:{borderBottom:"1px solid #394b61"},children:[r.jsx("td",{style:{padding:"12px 16px"},children:r.jsx("span",{style:{color:we?"#fc771c":"#e2e8f0",fontWeight:"500"},children:je})}),r.jsx("td",{style:{padding:"12px 16px"},children:r.jsx("span",{style:{color:we?"#fc771c":"#4fd1c5",fontWeight:"500"},children:we?"Carpeta":"Archivo"})}),r.jsx("td",{style:{padding:"12px 16px",color:"#cbd5e1"},children:ie?ie.toLocaleDateString("es-CO"):"-"}),r.jsx("td",{style:{padding:"12px 16px",color:"#cbd5e1"},children:Re?`${Re} KB`:"-"})]},K.key||K.id)})})]})})]})})})]})})]})]})}),r.jsxs("div",{className:"dash-item only-mobile mobile-list",children:[Kn.length===0&&r.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay clientes activos para mostrar"}),Kn.map(T=>{var ae,K;const ne=x===T.id;return r.jsxs("div",{className:"mobile-item",children:[r.jsxs("button",{type:"button",className:"btn btn-primary btn-sm mobile-item-header",onClick:()=>{y(ie=>ie===T.id?null:T.id),ne||nn(T)},"aria-expanded":ne,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("div",{className:"mobile-item-title",children:T.name||"-"}),r.jsx("div",{style:{opacity:.9,fontSize:12,paddingRight:10},children:ne?"▼":"▶"})]}),ne&&r.jsxs("div",{className:"mobile-item-details",children:[r.jsxs("div",{className:"kv",children:[r.jsx("span",{children:"Email"}),r.jsx("div",{children:T.email||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Cédula"}),r.jsx("div",{children:T.documentNumber||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Celular"}),r.jsx("div",{children:T.phone||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Admin asignado"}),r.jsx("div",{children:((ae=T.assignedAdmin)==null?void 0:ae.name)||"—"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10},children:[r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>st(T),style:{marginRight:8},title:Dn(T.id)?`Asignado a ${((K=Dn(T.id))==null?void 0:K.name)||""}`:"Asignar administrador",children:Dn(T.id)?"Asignado":"Asignar"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Ya(T),style:{marginRight:8},children:"Archivos"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Ur(T),style:{marginRight:8},children:"Editar"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Do(T),children:"Eliminar"})]}),r.jsxs("div",{style:{marginTop:"16px",paddingTop:"16px",borderTop:"1px solid #394b61"},children:[r.jsx("h5",{style:{margin:"0 0 12px 0",color:"#e2e8f0",fontSize:"16px"},children:"Archivos y Carpetas"}),ee[T.id]?r.jsxs("div",{style:{textAlign:"center",padding:"20px",color:"#cbd5e1"},children:[r.jsx("div",{style:{display:"inline-block",width:"16px",height:"16px",border:"2px solid #4fd1c5",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite",marginRight:"8px"}}),"Cargando archivos..."]}):r.jsx("div",{children:!F[T.id]||F[T.id].length===0?r.jsxs("div",{style:{textAlign:"center",padding:"20px",color:"#cbd5e1",fontSize:"14px"},children:[r.jsx("div",{children:"No hay archivos o carpetas para mostrar"}),r.jsx("div",{style:{fontSize:"12px",opacity:.7,marginTop:"4px"},children:'Haz clic en "Archivos" para gestionar documentos'})]}):r.jsx("div",{style:{border:"1px solid #394b61",borderRadius:"6px",overflow:"hidden",background:"#1b263b"},children:F[T.id].filter(ie=>{const we=ie.key||"",je=tr(T);return!(we===je&&ie.isFolder)}).map(ie=>{var mn,En;const we=ie.lastModified?new Date(ie.lastModified):ie.createdTime?new Date(ie.createdTime):null,je=ie.isFolder||((mn=ie.key)==null?void 0:mn.endsWith("/"))||((En=ie.name)==null?void 0:En.endsWith("/"));let Re=ie.name||(ie.key||"").split("/").pop();if(je&&Re&&tr(T)){const sn=tr(T).replace(/\/$/,"");ie.key&&ie.key.startsWith(sn)&&(Re=ie.key.replace(sn+"/","").replace(/\/$/,""))}const qn=typeof ie.size=="number"?Math.max(1,Math.round(ie.size/1024)):null;return r.jsx("div",{style:{padding:"12px",borderBottom:"1px solid #394b61",display:"flex",justifyContent:"space-between",alignItems:"center"},children:r.jsxs("div",{children:[r.jsx("div",{style:{color:je?"#fc771c":"#e2e8f0",fontWeight:"500",fontSize:"14px"},children:Re}),r.jsxs("div",{style:{color:"#cbd5e1",fontSize:"12px",marginTop:"2px"},children:[je?"Carpeta":"Archivo"," • ",we?we.toLocaleDateString("es-CO"):"-"," • ",qn?`${qn} KB`:"-"]})]})},ie.key||ie.id)})})})]})]})]},T.id)})]})]}),c&&r.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:T=>{T.target===T.currentTarget&&d(null)},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:560,padding:16},children:[r.jsx("div",{className:"dash-header",style:{marginBottom:12},children:r.jsx("div",{className:"dash-title",children:"Editar cliente"})}),r.jsx("div",{className:"dash-item",children:r.jsxs(Sf,{children:[r.jsx(Bn,{label:"Nombre",value:c.name,onChange:T=>d(ne=>({...ne,name:T.target.value})),placeholder:"Nombre y apellidos"}),r.jsx(Bn,{label:"Email",type:"email",value:c.email,onChange:()=>{},inputProps:{readOnly:!0}}),r.jsxs(jl,{cols:2,children:[r.jsx(Bn,{label:"Cédula",value:c.documentNumber,onChange:T=>d(ne=>({...ne,documentNumber:T.target.value})),placeholder:"Ej: 80153356"}),r.jsx(Bn,{label:"Celular",value:c.phone,onChange:T=>d(ne=>({...ne,phone:T.target.value})),placeholder:"Ej: 300 123 4567"})]})]})}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>d(null),disabled:p,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:Hn,disabled:p,children:p?"Guardando...":"Guardar cambios"})]})]})}),te&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>oe(!1),children:r.jsx("div",{style:{width:"100%",maxWidth:"95vw",maxHeight:"95vh",background:"transparent"},onClick:T=>T.stopPropagation(),children:r.jsx(kl,{selectedClient:pe,isModal:!0,onClose:()=>oe(!1)})})}),k&&f&&r.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:T=>{T.target===T.currentTarget&&(g(!1),v(null))},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:560},children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Asignar administrador"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:10},children:[r.jsxs("div",{style:{fontSize:14,opacity:.85},children:["Cliente: ",r.jsx("strong",{children:f.name})," ",r.jsxs("span",{style:{opacity:.7},children:["(",f.id,")"]})]}),A&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6},children:A}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Selecciona un admin"}),r.jsxs("select",{value:$,onChange:T=>re(T.target.value),disabled:O,style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"},children:[r.jsx("option",{value:"",children:"— Sin asignar —"}),N.map(T=>r.jsxs("option",{value:T.id,children:[T.name," — ",T.email]},T.id))]})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>{g(!1),v(null)},disabled:O,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:Oo,disabled:O,children:"Guardar"})]})]})}),W&&H&&r.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:65,padding:16},onClick:T=>{T.target===T.currentTarget&&(Q(!1),R(null))},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:520},children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Confirmar eliminación"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:10},children:[r.jsxs("div",{children:["¿Eliminar al cliente ",r.jsx("strong",{children:H.name||H.email||H.id}),"?"]}),r.jsxs("div",{style:{fontSize:13,opacity:.85},children:["Esta acción eliminará el contenedor del cliente y su carpeta S3 asociada (clientes/",String(H.documentNumber||"").trim(),")."]}),r.jsx("input",{type:"text",autoComplete:"username",value:" ",readOnly:!0,"aria-hidden":"true",style:{position:"absolute",opacity:0,height:0,width:0,pointerEvents:"none"}}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Contraseña de eliminación"}),r.jsx("input",{type:"password",name:"delete-confirm",autoComplete:"new-password","data-lpignore":"true","data-1p-ignore":"true",value:D,onChange:T=>C(T.target.value),placeholder:"eliminarclientekoop",style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),M&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6},children:M})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>{Q(!1),R(null)},disabled:L,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:qa,disabled:L||!D,children:L?"Eliminando...":"Eliminar"})]})]})}),r.jsx("style",{children:`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]}):r.jsx("div",{className:"dash-page",style:{padding:40},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Esta seccion esta disponible solo para administradores."})]})})}const Af="koop.calendar.events";function yp(){if(typeof window>"u")return[];try{const e=window.localStorage.getItem(Af);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.filter(Boolean):[]}catch(e){return console.warn("[calendarStorage] load error",e),[]}}function E2(e){if(!(typeof window>"u"))try{window.localStorage.setItem(Af,JSON.stringify(e??[]))}catch(n){console.warn("[calendarStorage] save error",n)}}const A2="koop.calendar.events";function If(){const[e,n]=u.useState(()=>yp());u.useEffect(()=>{const a=i=>{(i==null?void 0:i.key)===A2&&n(yp())};return typeof window<"u"&&window.addEventListener("storage",a),()=>{typeof window<"u"&&window.removeEventListener("storage",a)}},[]);const t=u.useCallback(a=>{n(i=>{const o=typeof a=="function"?a(i):a;return E2(o),o})},[]);return[e,t]}const I2="documentos_iniciales";function wp(e){return String(e||"").trim()}function Tf({buttonLabel:e="Subir documento",buttonClassName:n="btn btn-primary",defaultFolder:t=I2,allowFolderInput:a=!0,onUploaded:i}){const[o,s]=u.useState(!1),[l,c]=u.useState(null),[d,p]=u.useState(t||""),[h,m]=u.useState(()=>Date.now()),[w,x]=u.useState(null),[y,k]=u.useState(null),[g,f]=u.useState(!1),v=()=>{c(null),p(t||""),m(Date.now()),x(null),k(null),f(!1)},N=()=>{v(),s(!0)},z=()=>{s(!1),v()},O=A=>{var $;const Z=(($=A.target.files)==null?void 0:$[0])||null;c(Z),x(null),Z&&k(null)},_=async A=>{var $,re,te;if(A.preventDefault(),!l){x("Selecciona un archivo");return}const Z=wp(a?d:t);try{f(!0),x(null);const oe=await Ef(l,{subfolder:Z||void 0});if(k(($=oe==null?void 0:oe.file)!=null&&$.key?"Archivo subido correctamente":"Archivo subido"),c(null),m(Date.now()),typeof i=="function")try{i(oe)}catch{}}catch(oe){x(((te=(re=oe==null?void 0:oe.response)==null?void 0:re.data)==null?void 0:te.message)||(oe==null?void 0:oe.message)||"No se pudo subir el archivo")}finally{f(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:n,onClick:N,children:e}),o&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:16},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:480,position:"relative"},children:[r.jsx("button",{type:"button",onClick:z,style:{position:"absolute",top:12,right:12,background:"transparent",border:"none",color:"#334155",fontSize:20,cursor:"pointer"},"aria-label":"Cerrar",children:"X"}),r.jsx("h3",{className:"dash-title",style:{marginBottom:16},children:"Subir documento"}),r.jsxs("form",{onSubmit:_,children:[r.jsxs("div",{style:{marginBottom:12},children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Archivo"}),r.jsx("input",{type:"file",onChange:O,disabled:g,required:!0,style:{width:"100%"}},h)]}),a?r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Subcarpeta (opcional)"}),r.jsx("input",{type:"text",placeholder:t||"documentos_iniciales",value:d,onChange:A=>p(A.target.value),disabled:g,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #cbd5f5"}})]}):r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Carpeta destino"}),r.jsx("input",{type:"text",value:t||"",readOnly:!0,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #cbd5f5",background:"#1f2937",color:"#e2e8f0"}})]}),w&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6,marginBottom:12},children:w}),y&&r.jsx("div",{style:{background:"#14532d",color:"#bbf7d0",padding:8,borderRadius:6,marginBottom:12},children:y}),r.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"flex-end"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:z,disabled:g,children:"Cancelar"}),r.jsx("button",{type:"submit",className:"btn btn-primary",disabled:g||!l,children:g?"Subiendo...":"Subir"})]})]})]})})]})}const T2=["Lun","Mar","Mie","Jue","Vie","Sab","Dom"];function z2(e){const n=e.getFullYear(),t=e.getMonth(),i=(new Date(n,t,1).getDay()+6)%7,o=new Date(n,t+1,0).getDate(),s=[];let l=1-i;for(let c=0;c<6;c+=1){const d=[];for(let p=0;p<7;p+=1){const h=new Date(n,t,l),m=l>=1&&l<=o;d.push({date:h,inCurrentMonth:m}),l+=1}s.push(d)}return s}function R2(e){if(!e)return null;const n=e.getFullYear(),t=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${t}-${a}`}function zf({value:e,onChange:n,onDateSelect:t,events:a=[],className:i=""}){const o=u.useMemo(()=>new Date,[]),[s,l]=u.useState(()=>new Date(o.getFullYear(),o.getMonth(),1)),[c,d]=u.useState(o);u.useEffect(()=>{e instanceof Date&&(d(e),l(new Date(e.getFullYear(),e.getMonth(),1)))},[e]);const p=e instanceof Date?e:c,h=typeof n=="function"?n:t,m=u.useMemo(()=>s.toLocaleDateString("es-ES",{month:"long",year:"numeric"}),[s]),w=u.useMemo(()=>z2(s),[s]),x=u.useMemo(()=>{const f=new Map;return(a||[]).forEach(v=>{const N=(v==null?void 0:v.date)||(v==null?void 0:v.dateKey);N&&(f.has(N)||f.set(N,[]),f.get(N).push(v))}),f},[a]),y=f=>{f instanceof Date&&(e instanceof Date||d(f),typeof h=="function"&&h(f))},k=f=>{l(v=>new Date(v.getFullYear(),v.getMonth()+f,1))},g=["dash-item",i].filter(Boolean).join(" ").trim();return r.jsxs("div",{className:g,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>k(-1),"aria-label":"Mes anterior",children:"◀"}),r.jsx("div",{style:{fontWeight:600,textTransform:"capitalize"},children:m}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>k(1),"aria-label":"Mes siguiente",children:"▶"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:6,marginBottom:8},children:T2.map(f=>r.jsx("div",{style:{textAlign:"center",fontSize:12,fontWeight:600,opacity:.75},children:f},f))}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:6},children:w.map((f,v)=>f.map(({date:N,inCurrentMonth:z},O)=>{const _=R2(N),A=N.toDateString()===o.toDateString(),Z=N.toDateString()===p.toDateString(),$=x.get(_)||[],re={position:"relative",borderRadius:8,border:"1px solid rgba(148, 163, 184, 0.25)",padding:"8px 0",textAlign:"center",fontSize:13,cursor:z?"pointer":"default",opacity:z?1:.35,background:"#1f2937",color:"#e2e8f0",transition:"transform 0.12s ease"};return A&&(re.border="1px solid #38bdf8"),Z&&(re.background="linear-gradient(135deg, #38b2ac, #0ea5e9)",re.color="#0f172a",re.fontWeight=700),z&&$.length>0&&!Z&&(re.background="#f5b891",re.color="#0f172a",re.border="1px solid rgba(245, 184, 145, 0.65)",re.fontWeight=600),r.jsxs("button",{type:"button",style:re,disabled:!z,onClick:()=>z&&y(N),children:[N.getDate(),$.length>0&&r.jsx("span",{style:{position:"absolute",bottom:4,left:"50%",transform:"translateX(-50%)",width:6,height:6,borderRadius:"999px",background:Z?"#0f172a":z?"#7c3a00":"#38bdf8"}})]},`${v}-${O}`)}))})]})}function O2({title:e="Asistente IA",systemPrompt:n}){const[t,a]=u.useState(()=>[]),[i,o]=u.useState(""),[s,l]=u.useState(!1),c=u.useRef(null),d=u.useMemo(()=>i.trim().length>0&&!s,[i,s]),p=()=>{try{const w=c.current;w&&(w.scrollTop=w.scrollHeight)}catch{}},h=async()=>{var y,k,g,f,v,N,z,O,_;const w=i.trim();if(!w)return;const x=[...t,{role:"user",content:w}];a(x),o(""),l(!0),setTimeout(p,0);try{const A={messages:[...n?[{role:"system",content:n}]:[],...x]},{data:Z}=await Ce.post("/ai/chat",A),$=(Z==null?void 0:Z.reply)||((y=Z==null?void 0:Z.message)==null?void 0:y.content)||((f=(g=(k=Z==null?void 0:Z.choices)==null?void 0:k[0])==null?void 0:g.message)==null?void 0:f.content)||((z=(N=(v=Z==null?void 0:Z.choices)==null?void 0:v[0])==null?void 0:N.delta)==null?void 0:z.content)||"",re=String($||"").trim()||"Lo siento, no obtuve respuesta.";a(te=>[...te,{role:"assistant",content:re}]),setTimeout(p,0)}catch(A){const Z=((_=(O=A==null?void 0:A.response)==null?void 0:O.data)==null?void 0:_.message)||(A==null?void 0:A.message)||"Error al consultar el asistente";a($=>[...$,{role:"assistant",content:`⚠️ ${Z}`}]),setTimeout(p,0)}finally{l(!1)}},m=w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),d&&h())};return r.jsxs("div",{className:"dash-item",style:{display:"flex",flexDirection:"column",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("div",{style:{fontWeight:600},children:e}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>a([]),disabled:s,children:"Limpiar"})]}),r.jsxs("div",{ref:c,style:{background:"#0f172a",border:"1px solid rgba(148,163,184,0.25)",borderRadius:12,padding:10,minHeight:180,maxHeight:260,overflowY:"auto",display:"flex",flexDirection:"column",gap:8},children:[t.length===0&&r.jsx("div",{style:{opacity:.7},children:"Haz una pregunta para comenzar…"}),t.map((w,x)=>r.jsx("div",{style:{display:"flex",justifyContent:w.role==="user"?"flex-end":"flex-start"},children:r.jsx("div",{style:{maxWidth:"80%",background:w.role==="user"?"rgba(34,211,238,0.12)":"rgba(148,163,184,0.12)",border:"1px solid rgba(148,163,184,0.25)",color:"#e2e8f0",padding:"8px 10px",borderRadius:12,whiteSpace:"pre-wrap"},children:w.content})},x))]}),r.jsxs("div",{style:{display:"grid",gap:8},children:[r.jsx("textarea",{className:"textarea",rows:3,placeholder:"Escribe tu mensaje (Enter para enviar)",value:i,onChange:w=>o(w.target.value),onKeyDown:m,disabled:s}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>o(""),disabled:s,children:"Borrar"}),r.jsx("button",{type:"button",className:"btn btn-primary",onClick:h,disabled:!d,children:s?"Enviando…":"Enviar"})]})]})]})}function D2({label:e,value:n,hint:t}){return r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"text-sm opacity-70",style:{fontSize:12,opacity:.8},children:e}),r.jsx("div",{className:"text-2xl font-semibold",style:{fontSize:28,fontWeight:700},children:n}),t&&r.jsx("div",{className:"text-xs opacity-60",style:{fontSize:12,opacity:.7},children:t})]})}function Rf({refreshKey:e=0}){const{user:n}=Ye(),t=u.useMemo(()=>{var s,l,c,d;const a=Array.isArray(n==null?void 0:n.driveFolders)?n.driveFolders.filter(p=>p&&p.url):[],i=(l=(s=import.meta)==null?void 0:s.env)==null?void 0:l.VITE_DEFAULT_DRIVE_FOLDER_URL,o=((d=(c=import.meta)==null?void 0:c.env)==null?void 0:d.VITE_DEFAULT_DRIVE_FOLDER_NAME)||"Carpeta KOOP";return(!a||a.length===0)&&i?[{name:o,url:i}]:a},[n,e]);return r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Documentos recientes"}),t.length===0&&r.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin carpetas asignadas."}),t.length>0&&r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:8},children:t.map((a,i)=>r.jsxs("li",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.name||"Carpeta de Drive"}),r.jsx("div",{className:"muted",style:{fontSize:12,opacity:.8},children:a.url})]}),r.jsx("a",{className:"btn btn-primary",href:a.url,target:"_blank",rel:"noreferrer","data-drive-folder-url":a.url,children:"Abrir carpeta"})]},(a.url||"")+i))})]})}function L2(e){if(!(e instanceof Date))return null;const n=e.getFullYear(),t=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${t}-${a}`}function P2(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`evt-${Date.now()}-${Math.random().toString(16).slice(2)}`}function M2(){const{user:e}=Ye(),n=Ro((e==null?void 0:e.name)||"Dashboard"),[t,a]=u.useState(null),[i,o]=u.useState(!0),[s,l]=u.useState(null),[c,d]=u.useState(0),[p,h]=If(),[m,w]=u.useState(()=>new Date),x=u.useMemo(()=>L2(m),[m]),[y,k]=u.useState(""),[g,f]=u.useState(!0),[v,N]=u.useState(""),[z,O]=u.useState([]),[_,A]=u.useState(!1),[Z,$]=u.useState(0),[re,te]=u.useState(!1),oe=u.useRef(null),[pe,Ee]=u.useState([]),[ye,se]=u.useState(!1),[F,J]=u.useState(null),ee=u.useMemo(()=>Array.isArray(p)?p.length:0,[p]);u.useEffect(()=>{(async()=>{var D;try{const{data:C}=await Ce.get("/kpis/overview");a(C)}catch(C){l(((D=C==null?void 0:C.response)==null?void 0:D.data)||(C==null?void 0:C.message))}finally{o(!1)}})()},[]),u.useEffect(()=>{let D=!1;return(async()=>{var C,G;try{se(!0),J(null);const ue=await Sc();if(D)return;const Fe=Array.isArray(ue==null?void 0:ue.items)?ue.items:[];Ee(Fe.map(he=>({id:String((he==null?void 0:he.id)||(he==null?void 0:he._id)||(he==null?void 0:he.documentNumber)||"").trim(),name:(he==null?void 0:he.name)||(he==null?void 0:he.fullName)||(he==null?void 0:he.email)||"Cliente sin nombre",email:he==null?void 0:he.email})).filter(he=>he.id))}catch(ue){D||J(((G=(C=ue==null?void 0:ue.response)==null?void 0:C.data)==null?void 0:G.message)||(ue==null?void 0:ue.message)||"No se pudo cargar clientes")}finally{D||se(!1)}})(),()=>{D=!0}},[]),u.useEffect(()=>{if(!re)return;const D=G=>{try{oe.current&&!oe.current.contains(G.target)&&te(!1)}catch{}},C=G=>{G.key==="Escape"&&te(!1)};return typeof window<"u"&&(window.addEventListener("click",D),window.addEventListener("keydown",C)),()=>{typeof window<"u"&&(window.removeEventListener("click",D),window.removeEventListener("keydown",C))}},[re]);const U=u.useMemo(()=>{if(!v)return pe;const D=v.trim().toLowerCase();return pe.filter(C=>[C.id,C.name,C.email].some(G=>String(G||"").toLowerCase().includes(D)))},[pe,v]),W=u.useMemo(()=>p.filter(C=>(C==null?void 0:C.date)===x).sort((C,G)=>(C.createdAt||"").localeCompare(G.createdAt||"")),[p,x]),Q=D=>{const C=String(D);O(G=>G.includes(C)?G.filter(ue=>ue!==C):[...G,C])},H=()=>{const D=y.trim();if(!x||!D||!g&&z.length===0)return;const C={id:P2(),date:x,note:D,audience:g?{type:"all"}:{type:"clients",clientIds:z.map(G=>String(G).trim())},createdAt:new Date().toISOString(),createdBy:(e==null?void 0:e.id)||(e==null?void 0:e.sub)||"admin"};h(G=>[...G,C]),k(""),O([]),f(!0),A(!1)},R={padding:"10px 14px",fontSize:"14px",minHeight:"52px",borderRadius:"10px",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},L=[{key:"clientes",label:"Clientes",to:"/admin/clientes-activos"},{key:"procesos",label:"Procesos",to:"/mis-casos"},{key:"publicaciones",label:"Publicaciones Procesales",href:"https://koop.com/publicaciones-procesales"}],j=u.useMemo(()=>m==null?void 0:m.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),[m]),M=D=>{w(D),typeof window<"u"&&window.innerWidth<1024&&A(!0)},X=()=>{if(!x||W.length===0)return;const D=`¿Borrar todas las anotaciones del ${j}?`;typeof window<"u"&&!window.confirm(D)||h(C=>C.filter(G=>(G==null?void 0:G.date)!==x))};return u.useEffect(()=>{if(!_){$(0);return}const D=()=>{try{const G=window.visualViewport;if(G){const ue=Math.max(0,Math.round(window.innerHeight-G.height));$(ue)}else $(0)}catch{$(0)}};D();const C=window.visualViewport;return C&&C.addEventListener("resize",D),window.addEventListener("resize",D),()=>{C&&C.removeEventListener("resize",D),window.removeEventListener("resize",D)}},[_]),r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[r.jsxs("div",{className:"dash-card",style:{maxWidth:1200},children:[r.jsx("style",{children:`
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
        `}),r.jsxs("div",{className:"dash-header",children:[r.jsx("div",{className:"dash-title",children:n}),r.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"flex-end"},children:r.jsx(Tf,{buttonClassName:"btn btn-primary",allowFolderInput:!0,onUploaded:()=>d(D=>D+1)})})]}),r.jsxs("div",{className:"dash-item",style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx(V,{className:"btn btn-primary",to:"/admin/tareas",title:"Ver y gestionar tareas",children:`Tareas: (${ee})`}),r.jsx(V,{className:"btn btn-primary btn-sm",to:"/admin/clientes-activos",title:"Clientes",children:"Clientes"}),r.jsxs("div",{style:{position:"relative"},ref:oe,children:[r.jsx("button",{type:"button",className:"btn btn-orange btn-sm",onClick:()=>te(D=>!D),"aria-haspopup":"menu","aria-expanded":re?"true":"false",children:"Consultas"}),re&&r.jsxs("div",{role:"menu",className:"quick-menu",style:{position:"absolute",top:"calc(100% + 6px)",right:0,zIndex:1010,background:"#0f172a",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.25)",borderRadius:12,boxShadow:"0 10px 24px rgba(0,0,0,0.45)",minWidth:320,padding:8},onClick:D=>D.stopPropagation(),children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://consultaprocesos.ramajudicial.gov.co/Procesos/Index","_blank","noopener"),te(!1)},role:"menuitem",children:"1. Consulta de procesos Rama Judicial"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://publicacionesprocesales.ramajudicial.gov.co/","_blank","noopener"),te(!1)},role:"menuitem",children:"2. Publicaciones Procesales Rama Judicial"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://siugj.ramajudicial.gov.co/principalPortal/index.php","_blank","noopener"),te(!1)},role:"menuitem",children:"3. Siugj"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://consulta-web.fiscalia.gov.co/","_blank","noopener"),te(!1)},role:"menuitem",children:"4. Consultas Fiscalía"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start"},onClick:()=>{typeof window<"u"&&window.open("https://www.superfinanciera.gov.co/formulesuqueja/faces/consulta/jurisdiccional.xhtml","_blank","noopener"),te(!1)},role:"menuitem",children:"5. Consultas Jurisdiccionales SuperFinanciera"})]})]}),r.jsx(V,{className:"btn btn-secondary btn-sm",to:"/admin/usuarios",title:"Administrar usuarios",children:"Administrar usuarios"})]}),r.jsx("div",{className:"kpi-grid",style:{marginTop:16},children:r.jsx(D2,{label:"Casos activos",value:(pe==null?void 0:pe.length)??0})}),r.jsxs("div",{className:"admin-main-grid",style:{marginTop:16},children:[r.jsxs("div",{className:"admin-main-left",children:[r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Centro administrativo"}),r.jsx("p",{style:{marginBottom:12},children:"Supervisa la operacion del portal, gestiona usuarios y da seguimiento a la informacion mas reciente."}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx(V,{className:"btn btn-primary btn-sm",to:"/admin/usuarios",title:"Administrar usuarios",children:"Administrar usuarios"}),r.jsx(V,{className:"btn btn-secondary btn-sm",to:"/mi-expediente",title:"Revisar expedientes",children:"Revisar expedientes"})]})]}),r.jsx(zf,{value:m,onChange:M,events:p}),r.jsx("div",{style:{display:"grid",gap:10},children:L.map(D=>r.jsx("div",{className:"dash-item",style:{padding:0,display:"flex",alignItems:"stretch"},children:D.to?r.jsx(V,{className:"btn btn-primary",to:D.to,style:R,children:D.label}):r.jsx("button",{type:"button",className:"btn btn-primary",style:R,onClick:()=>{typeof window<"u"&&D.href&&window.open(D.href,"_blank","noopener")},children:D.label})},D.key))})]}),r.jsxs("div",{className:"admin-main-right",children:[r.jsx(O2,{title:"Asistente IA",systemPrompt:"Eres un asistente interno de Koop Strategic Advisory. Responde de forma breve, clara y profesional."}),r.jsxs("div",{className:"dash-item compose-panel",children:[r.jsx("div",{className:"font-semibold",style:{fontWeight:600},children:j||"Selecciona un dia"}),r.jsx("p",{style:{marginTop:4,fontSize:13,opacity:.8},children:"Registra recordatorios o publicaciones para clientes especificos o para todos."}),r.jsx("textarea",{value:y,onChange:D=>k(D.target.value),placeholder:"Agregar nota o detalle del evento",rows:4,style:{width:"100%",marginTop:12,background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:"10px 12px",resize:"vertical"}}),r.jsx("div",{style:{marginTop:12},children:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("input",{type:"checkbox",checked:g,onChange:D=>{f(D.target.checked),D.target.checked&&O([])}}),r.jsx("span",{children:"Publicar para todos los clientes"})]})}),!g&&r.jsxs("div",{style:{marginTop:12},children:[r.jsx("input",{type:"search",placeholder:"Buscar por nombre, email o ID",value:v,onChange:D=>N(D.target.value),style:{width:"100%",padding:"8px 12px",borderRadius:10,border:"1px solid rgba(148,163,184,0.35)",background:"#1b263b",color:"#e2e8f0"}}),F&&r.jsx("div",{style:{color:"#fecaca",background:"#7f1d1d",padding:8,borderRadius:8,marginTop:8},children:F}),r.jsxs("div",{className:"admin-clients-list",style:{marginTop:8},children:[ye&&r.jsx("div",{style:{opacity:.7},children:"Cargando clientes..."}),!ye&&U.length===0&&r.jsx("div",{style:{opacity:.7},children:"No se encontraron clientes"}),U.map(D=>{const C=z.includes(D.id);return r.jsxs("label",{className:"admin-clients-item",children:[r.jsxs("span",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("span",{style:{fontWeight:600},children:D.name}),r.jsx("span",{style:{fontSize:12,opacity:.75},children:D.id})]}),r.jsx("input",{type:"checkbox",checked:C,onChange:()=>Q(D.id)})]},D.id)})]}),z.length>0&&r.jsxs("div",{style:{marginTop:8,fontSize:12,opacity:.7},children:["Seleccionados: ",z.join(", ")]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{k(""),f(!0),O([])},children:"Limpiar"}),r.jsx("button",{type:"button",className:"btn btn-danger",onClick:X,disabled:!x||W.length===0,children:"Borrar anotaciones"}),r.jsx("button",{type:"button",className:"btn btn-primary",onClick:H,disabled:!y.trim()||!g&&z.length===0,children:"Guardar anotacion"})]}),W.length>0&&r.jsxs("div",{style:{marginTop:16},children:[r.jsx("div",{style:{fontWeight:600,marginBottom:8},children:"Anotaciones del dia"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:W.map(D=>{var C,G;return r.jsxs("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:[r.jsx("div",{style:{marginBottom:6},children:D.note}),r.jsx("div",{style:{fontSize:12,opacity:.7},children:((C=D.audience)==null?void 0:C.type)==="all"?"Visible para todos los clientes":`Visible para: ${Array.isArray((G=D.audience)==null?void 0:G.clientIds)&&D.audience.clientIds.length>0?D.audience.clientIds.join(", "):"—"}`})]},D.id)})})]})]}),r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Recordatorios del equipo"}),r.jsx("p",{style:{marginBottom:0},children:"Comparte novedades internas, carga reportes de gestion o establece tareas prioritarias para tu equipo desde esta seccion."})]}),r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Reproductor Spotify"}),r.jsx("p",{style:{marginBottom:0,fontSize:13,opacity:.8},children:"El reproductor de Spotify está disponible como ventana flotante en la esquina inferior izquierda. La música continuará reproduciéndose mientras navegas entre páginas."})]})]})]}),r.jsx("div",{style:{marginTop:16},children:r.jsx(Rf,{refreshKey:c})}),s&&r.jsx("pre",{className:"text-red-600 text-sm mt-2",style:{color:"#fecaca",background:"#7f1d1d",padding:12,borderRadius:8,marginTop:12},children:typeof s=="string"?s:JSON.stringify(s,null,2)})]}),_&&r.jsx("div",{className:"compose-overlay",role:"dialog","aria-modal":"true",children:r.jsxs("div",{className:"compose-modal",style:{marginBottom:Z>0?Z:0,maxHeight:`calc(100dvh - ${Z}px)`,paddingBottom:"calc(16px + env(safe-area-inset-bottom))"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[r.jsx("div",{style:{fontWeight:700},children:j||"Selecciona un dia"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>A(!1),"aria-label":"Cerrar",children:"Cerrar"})]}),r.jsxs("div",{className:"dash-item",style:{padding:0},children:[r.jsx("p",{style:{marginTop:4,fontSize:13,opacity:.8},children:"Registra recordatorios o publicaciones para clientes especificos o para todos."}),r.jsx("textarea",{value:y,onChange:D=>k(D.target.value),placeholder:"Agregar nota o detalle del evento",rows:4,style:{width:"100%",marginTop:12,background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:"10px 12px",resize:"vertical"}}),r.jsx("div",{style:{marginTop:12},children:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("input",{type:"checkbox",checked:g,onChange:D=>{f(D.target.checked),D.target.checked&&O([])}}),r.jsx("span",{children:"Publicar para todos los clientes"})]})}),!g&&r.jsxs("div",{style:{marginTop:12},children:[r.jsx("input",{type:"search",placeholder:"Buscar por nombre, email o ID",value:v,onChange:D=>N(D.target.value),style:{width:"100%",padding:"8px 12px",borderRadius:10,border:"1px solid rgba(148,163,184,0.35)",background:"#1b263b",color:"#e2e8f0"}}),F&&r.jsx("div",{style:{color:"#fecaca",background:"#7f1d1d",padding:8,borderRadius:8,marginTop:8},children:F}),r.jsxs("div",{className:"admin-clients-list",style:{marginTop:8},children:[ye&&r.jsx("div",{style:{opacity:.7},children:"Cargando clientes..."}),!ye&&U.length===0&&r.jsx("div",{style:{opacity:.7},children:"No se encontraron clientes"}),U.map(D=>{const C=z.includes(D.id);return r.jsxs("label",{className:"admin-clients-item",children:[r.jsxs("span",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("span",{style:{fontWeight:600},children:D.name}),r.jsx("span",{style:{fontSize:12,opacity:.75},children:D.id})]}),r.jsx("input",{type:"checkbox",checked:C,onChange:()=>Q(D.id)})]},D.id)})]}),z.length>0&&r.jsxs("div",{style:{marginTop:8,fontSize:12,opacity:.7},children:["Seleccionados: ",z.join(", ")]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{k(""),f(!0),O([])},children:"Limpiar"}),r.jsx("button",{type:"button",className:"btn btn-danger",onClick:X,disabled:!x||W.length===0,children:"Borrar anotaciones"}),r.jsx("button",{type:"button",className:"btn btn-primary",onClick:H,disabled:!y.trim()||!g&&z.length===0,children:"Guardar anotacion"})]}),W.length>0&&r.jsxs("div",{style:{marginTop:16},children:[r.jsx("div",{style:{fontWeight:600,marginBottom:8},children:"Anotaciones del dia"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:W.map(D=>{var C,G;return r.jsxs("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:[r.jsx("div",{style:{marginBottom:6},children:D.note}),r.jsx("div",{style:{fontSize:12,opacity:.7},children:((C=D.audience)==null?void 0:C.type)==="all"?"Visible para todos los clientes":`Visible para: ${Array.isArray((G=D.audience)==null?void 0:G.clientIds)&&D.audience.clientIds.length>0?D.audience.clientIds.join(", "):"-"}`})]},D.id)})})]})]})]})})]})}function _2({src:e,heightDesktop:n=560,heightMobile:t=480,className:a}){const[i,o]=u.useState(!1),[s,l]=u.useState(!1),c=u.useRef(null);u.useEffect(()=>{try{const y=window.matchMedia("(max-width: 768px)"),k=g=>{o(g.matches),g.matches&&l(!1)};return o(y.matches),y.matches&&l(!1),y.addEventListener?y.addEventListener("change",k):y.addListener&&y.addListener(k),()=>{y.removeEventListener?y.removeEventListener("change",k):y.removeListener&&y.removeListener(k)}}catch{o(!1)}},[]),u.useEffect(()=>{if(!s){c.current!==null&&(document.body.style.overflow=c.current,c.current=null);return}return c.current===null&&(c.current=document.body.style.overflow||""),document.body.style.overflow="hidden",()=>{c.current!==null?(document.body.style.overflow=c.current,c.current=null):document.body.style.overflow=""}},[s]);const d=u.useMemo(()=>{try{return new URL(e,window.location.origin).toString()}catch{return e}},[e]),p=()=>l(y=>!y),h=["Te compartimos que ya tienes acceso a nuestro Portal de Clientes Koop.","","Desde alli podras:","- Consultar el estado de tus procesos en tiempo real.","- Descargar documentos relevantes de manera segura.","- Recibir notificaciones de audiencias y plazos importantes.","- Comunicarte directamente con nuestro equipo para resolver cualquier inquietud.","","Estamos seguros de que esta alianza marcara un camino de crecimiento y tranquilidad."].join(`
`);if(i)return r.jsxs("div",{className:a,style:{width:"100%",height:t,display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:16},children:[r.jsx("div",{style:{fontWeight:700,marginBottom:8},children:"Gracias por elegirnos. Nos alegra iniciar este camino contigo."}),r.jsx("div",{className:"muted",style:{marginBottom:12,whiteSpace:"pre-line"},children:h})]}),r.jsx("div",{style:{marginTop:"auto",padding:16,display:"flex",justifyContent:"flex-end"},children:r.jsx("a",{className:"btn btn-primary",href:d,target:"_blank",rel:"noopener noreferrer",children:"Cordial saludo"})})]});const m=s?{position:"fixed",inset:0,zIndex:1e3,backgroundColor:"rgba(6, 11, 25, 0.92)",padding:"48px 64px",display:"flex",flexDirection:"column",gap:16}:{width:"100%",height:n,position:"relative"},w=s?{flex:1,position:"relative",borderRadius:16,overflow:"hidden",boxShadow:"0 24px 48px rgba(0,0,0,0.45)"}:{width:"100%",height:"100%",position:"relative",borderRadius:12,overflow:"hidden"},x={position:"absolute",top:s?24:12,right:s?24:12,zIndex:1001};return r.jsxs("div",{className:a,style:m,children:[r.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:p,style:x,children:s?"Minimizar":"Maximizar"}),r.jsx("div",{style:w,children:r.jsxs("object",{data:e,type:"application/pdf",width:"100%",height:"100%",style:{width:"100%",height:"100%"},children:[r.jsx("iframe",{title:"PDF",src:d,style:{width:"100%",height:"100%",border:0}}),r.jsxs("div",{style:{padding:16},children:["No se pudo mostrar el PDF. ",r.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:"Abrir en nueva pestana"})]})]})})]})}function B2(){return r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Mensajes no leídos"}),r.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin datos."})]})}function V2(e){if(!(e instanceof Date))return null;const n=e.getFullYear(),t=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${t}-${a}`}function F2(){const{user:e}=Ye(),n=Ro((e==null?void 0:e.name)||"Bienvenido"),[t,a]=u.useState(0),[i]=If(),[o,s]=u.useState(()=>new Date),l=u.useMemo(()=>{const w=[e==null?void 0:e.id,e==null?void 0:e.sub,e==null?void 0:e._id,e==null?void 0:e.documentNumber,e==null?void 0:e.document_number,e==null?void 0:e.documento,e==null?void 0:e.clienteId].map(x=>x==null?"":String(x).trim()).filter(x=>!!x);return Array.from(new Set(w))},[e]),c=u.useMemo(()=>V2(o),[o]),d=u.useMemo(()=>l.length?i.filter(m=>{var w,x,y;return((w=m==null?void 0:m.audience)==null?void 0:w.type)==="all"?!0:((x=m==null?void 0:m.audience)==null?void 0:x.type)==="clients"?(Array.isArray((y=m.audience)==null?void 0:y.clientIds)?m.audience.clientIds.map(g=>g==null?"":String(g).trim()).filter(g=>!!g):[]).some(g=>l.includes(g)):!1}):i.filter(m=>{var w;return((w=m==null?void 0:m.audience)==null?void 0:w.type)==="all"}),[i,l]),p=u.useMemo(()=>d.filter(m=>(m==null?void 0:m.date)===c),[d,c]),h=u.useMemo(()=>o==null?void 0:o.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),[o]);return r.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:1080},children:[r.jsx("style",{children:`
          .user-main-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
          @media (min-width: 1024px) { .user-main-grid { grid-template-columns: 2fr 1fr; } }
          .user-main-left { display: flex; flex-direction: column; gap: 16px; }
          .user-main-right { display: flex; flex-direction: column; gap: 16px; }
        `}),r.jsxs("div",{className:"dash-header",children:[r.jsx("div",{className:"dash-title",children:n}),r.jsx(Tf,{buttonClassName:"btn btn-primary",allowFolderInput:!1,onUploaded:()=>a(m=>m+1)})]}),r.jsxs("div",{className:"user-main-grid",children:[r.jsxs("div",{className:"user-main-left",children:[r.jsxs("div",{className:"dash-item",children:[r.jsx("p",{style:{marginBottom:8},children:"Aqui puedes revisar tu material mas reciente y mantenerte al dia con tu caso. Si necesitas asistencia adicional, nuestro equipo esta disponible para ayudarte."}),r.jsx(V,{className:"btn btn-primary btn-sm",to:"/mis-casos",children:"Ver mis casos"})]}),r.jsx("div",{className:"dash-item",style:{padding:0},children:r.jsx(_2,{src:"/Saludobienvenidaportal.pdf",heightDesktop:480,heightMobile:420})}),r.jsx(B2,{}),r.jsx(Rf,{refreshKey:t})]}),r.jsxs("div",{className:"user-main-right",children:[r.jsx(zf,{value:o,onChange:s,events:d}),r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{style:{fontWeight:600,marginBottom:8},children:h}),p.length===0&&r.jsx("p",{style:{margin:0,opacity:.7,fontSize:14},children:"No hay anotaciones programadas para este dia."}),p.length>0&&r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:p.map(m=>r.jsx("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:r.jsx("div",{children:m.note})},m.id))})]})]})]})]})})}function jp(){return r.jsx("div",{className:"dash-page",style:{background:"linear-gradient(rgba(24,31,56,0.9), rgba(15,23,42,0.95))",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",padding:24},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:520},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Tu cuenta no tiene un rol asignado para ingresar al portal. Comunicate con el administrador para solicitar acceso."})]})})}function kp(e,n){if(!(e!=null&&e.roles))return!1;const t=Array.isArray(e.roles)?e.roles:[e.roles],a=String(n||"").toLowerCase();return t.some(i=>String(i||"").toLowerCase()===a)}function U2(){const{user:e,loading:n}=Ye(),t=u.useMemo(()=>e?kp(e,"admin")?"admin":kp(e,"user")?"user":"no-access":"none",[e]);return n&&!e?null:t==="admin"?r.jsx(M2,{}):t==="user"?r.jsx(F2,{}):t==="no-access"?r.jsx(jp,{}):r.jsx(jp,{})}const W2=[{id:"CJ-001",titulo:"Acción de tutela — derecho a la salud",estado:"En curso",juzgado:"Juzgado 12 Municipal",fecha:"2025-07-10"},{id:"CJ-002",titulo:"Proceso laboral — despido sin justa causa",estado:"Audiencia programada",juzgado:"Juzgado 3 Laboral del Circuito",fecha:"2025-08-02"},{id:"CJ-003",titulo:"Responsabilidad fiscal — recursos",estado:"Recurso interpuesto",juzgado:"Contraloría Distrital",fecha:"2025-08-21"},{id:"CJ-004",titulo:"Proceso de alimentos — fijación de cuota",estado:"Admitido",juzgado:"Juzgado 5 de Familia",fecha:"2025-09-01"}];function Z2(){const[e,n]=u.useState(null);u.useEffect(()=>{if(!e)return;const i=o=>{o.key==="Escape"&&n(null)};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[e]);const t=u.useMemo(()=>["Reunión de documentos e investigación","En escrito de demanda","En radicación","Al despacho: en espera de decisión del juez"],[]),a=i=>{if(!i)return 1;const o=String(i).toLowerCase();return/(reun|investig)/.test(o)?1:/(escrito|demanda)/.test(o)?2:/(radicaci[óo]n|admitid)/.test(o)?3:/(despacho|juez|decisi[óo]n|audiencia|recurso)/.test(o)?4:(/curso/.test(o),2)};return r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[r.jsxs("div",{className:"dash-card",style:{maxWidth:900},children:[r.jsx("div",{className:"dash-header",children:r.jsx("div",{className:"dash-title",children:"Mis casos"})}),r.jsx("div",{className:"dash-item",style:{padding:0},children:r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs("table",{className:"cases-table",style:{width:"100%",borderCollapse:"collapse"},children:[r.jsx("thead",{children:r.jsxs("tr",{style:{background:"#1e2a3a"},children:[r.jsx("th",{style:ta,children:"Radicado"}),r.jsx("th",{style:ta,children:"Título"}),r.jsx("th",{style:ta,children:"Estado"}),r.jsx("th",{style:ta,children:"Despacho"}),r.jsx("th",{style:ta,children:"Última actuación"})]})}),r.jsx("tbody",{children:W2.map(i=>r.jsxs("tr",{onClick:()=>n(i),className:"row-clickable",children:[r.jsx("td",{style:aa,children:i.id}),r.jsx("td",{style:aa,children:i.titulo}),r.jsx("td",{style:aa,children:r.jsx("span",{className:"badge",style:Cp(i.estado),children:i.estado})}),r.jsx("td",{style:aa,children:i.juzgado}),r.jsx("td",{style:aa,children:new Date(i.fecha).toLocaleDateString()})]},i.id))})]})})})]}),e&&r.jsx("div",{className:"modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"caso-title",onClick:i=>{i.target===i.currentTarget&&n(null)},children:r.jsxs("div",{className:"modal-card",children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("div",{className:"modal-title",id:"caso-title",children:e.titulo}),r.jsx("button",{className:"btn btn-primary",onClick:()=>n(null),children:"Cerrar"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"case-grid",children:[r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Radicado"}),r.jsx("div",{children:e.id})]}),r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Estado"}),r.jsx("div",{children:r.jsx("span",{className:"badge",style:Cp(e.estado),children:e.estado})})]}),r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Despacho"}),r.jsx("div",{children:e.juzgado})]}),r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Última actuación"}),r.jsx("div",{children:new Date(e.fecha).toLocaleString()})]})]}),r.jsx("div",{className:"timeline",children:t.map((i,o)=>{const s=o+1,l=a(e.estado),c=s<l,d=s===l;return r.jsxs("div",{className:`timeline-step ${c?"done":""} ${d?"active":""}`,children:[r.jsx("div",{className:`dot ${c?"done":""} ${d?"active":""}`}),s<t.length&&r.jsx("div",{className:`bar ${s<l?"done":""}`}),r.jsxs("div",{className:"label",children:[s,". ",i]})]},s)})})]})]})})]})}const ta={textAlign:"left",padding:"12px 14px",borderBottom:"1px solid #394b61",fontWeight:600,color:"#e2e8f0",whiteSpace:"nowrap"},aa={padding:"12px 14px",borderBottom:"1px solid #34465a",color:"#e5edf7",verticalAlign:"top"};function Cp(e){let n="#3b82f6";return/curso/i.test(e)&&(n="#f59e0b"),/programada|programado/i.test(e)&&(n="#10b981"),/recurso/i.test(e)&&(n="#8b5cf6"),{display:"inline-block",padding:"4px 8px",borderRadius:8,background:n,color:"#fff",fontSize:12,fontWeight:600}}function $2(){var a,i;const{logout:e}=Ye(),n=Zn();u.useEffect(()=>{(async()=>{try{await e()}catch{}try{sessionStorage.removeItem("koop_hasVisited")}catch{}try{document.documentElement.classList.remove("skip-splash")}catch{}})()},[e]);const t=(i=(a=n.state)==null?void 0:a.from)==null?void 0:i.pathname;return r.jsx($e,{to:"/",replace:!0,state:{from:t}})}function K2(){const e=Fr(),[n]=z1(),{user:t}=Ye();u.useEffect(()=>{const i=n.get("code"),o=n.get("error");if(o){console.error("Spotify authorization error:",o),e("/dashboard");return}i?a(i):e("/dashboard")},[n,e]);const a=async i=>{try{if(console.log("🔄 Iniciando intercambio de código por token:",{code:(i==null?void 0:i.substring(0,10))+"...",user:!!t}),!t){console.error("❌ Usuario no autenticado"),e("/login");return}console.log("📤 Enviando petición al backend...");const o=localStorage.getItem("accessToken");console.log("🔑 Token disponible:",!!o,(o==null?void 0:o.substring(0,20))+"..."),console.log("📋 Headers que se enviarán:",{Authorization:`Bearer ${o==null?void 0:o.substring(0,20)}...`}),console.log("📡 Enviando petición POST a /spotify/auth/token...");const s=await Ce.post("/spotify/auth/token",{code:i},{headers:{Authorization:`Bearer ${o}`}});if(console.log("✅ Respuesta recibida:",s.status,s.data),s.status===200){const{access_token:l,refresh_token:c,expires_in:d}=s.data;localStorage.setItem("spotifyAccessToken",l),localStorage.setItem("spotifyRefreshToken",c),localStorage.setItem("spotifyTokenExpiry",Date.now()+d*1e3),console.log("💾 Tokens de Spotify guardados en localStorage"),e("/dashboard")}else console.error("Error exchanging code for token"),e("/dashboard")}catch(o){console.error("Error exchanging code for token:",o),e("/dashboard")}};return r.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#191414"},children:[r.jsxs("div",{style:{textAlign:"center",color:"#1db954"},children:[r.jsx("div",{style:{fontSize:"24px",marginBottom:"16px"},children:"Conectando con Spotify..."}),r.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid #1db954",borderTop:"4px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto"}})]}),r.jsx("style",{children:`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]})}function gr({children:e}){const{isAuthenticated:n}=Ye(),t=Zn();return n?e:r.jsx($e,{to:"/login",replace:!0,state:{from:t}})}function H2(){const{isAuthenticated:e,user:n,logout:t}=Ye(),i=(Array.isArray(n==null?void 0:n.roles)?n.roles:n!=null&&n.roles?[n.roles]:[]).map(w=>String(w||"").trim().toLowerCase()).includes("admin"),[o,s]=u.useState(!1),[l,c]=u.useState(!1),[d,p]=u.useState(!1);Fr();const h=()=>{c(w=>{const x=!w;return x||p(!1),x})},m=w=>{const x=w.target.closest("a");x&&!x.classList.contains("drop-btn")&&(c(!1),p(!1))};return r.jsx("nav",{className:"navbar",children:r.jsxs("div",{className:"navbar-content",children:[r.jsxs(V,{to:"/",className:"logo",children:[r.jsx("img",{src:"/Koop Logo.png",alt:"Logo Koop",className:"logo-img"}),r.jsx("div",{className:"logo-text",children:"KOOP STRATEGIC ADVISORY"})]}),r.jsxs("div",{className:"menu-toggle",id:"menu-toggle",onClick:h,"aria-controls":"nav-menu","aria-expanded":l?"true":"false",role:"button",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]}),r.jsxs("div",{className:`nav-menu ${l?"open":""}`,id:"nav-menu",onClick:m,"data-auth":e?"1":"0",children:[r.jsxs("div",{className:"main-links",children:[r.jsx(V,{to:"/#inicio",children:"INICIO"}),r.jsxs("div",{className:`dropdown ${d?"open":""}`,children:[r.jsx(V,{to:"/#areas",className:"drop-btn",id:"areas-toggle","aria-expanded":d?"true":"false",onClick:w=>{w.preventDefault(),p(x=>!x)},children:"ÁREAS DE PRÁCTICA"}),r.jsxs("div",{className:"dropdown-content",children:[r.jsxs("div",{className:"dropdown-group",children:[r.jsx(V,{to:"/derecho",className:"dropdown-title",children:"Derecho"}),r.jsx(V,{to:"/derecho-laboral",children:"Derecho Laboral"}),r.jsx(V,{to:"/derecho-penal",children:"Derecho Penal"}),r.jsx(V,{to:"/tramites-notariales",children:"Trámites notariales"}),r.jsx(V,{to:"/derecho-administrativo",children:"Derecho Administrativo"}),r.jsx(V,{to:"/derecho-familia",children:"Derecho de Familia"}),r.jsx(V,{to:"/contratacion-publica",children:"Contratación Pública"}),r.jsx(V,{to:"/resolucion-disputas",children:"Resolución de Disputas"}),r.jsx(V,{to:"/acciones-de-tutela",children:"Acciones de Tutela"}),r.jsx(V,{to:"/insolvencia",children:"Insolvencia"})]}),r.jsxs("div",{className:"dropdown-group",children:[r.jsx(V,{to:"/contabilidad",className:"dropdown-title",children:"Contabilidad"}),r.jsx(V,{to:"/auditoria",children:"Auditoría"}),r.jsx(V,{to:"/impuestos",children:"Impuestos"}),r.jsx(V,{to:"/asesoria-contable",children:"Asesoría Contable"})]})]})]}),!e&&r.jsx(V,{to:"/#vision",children:"NUESTRA VISIÓN"})]}),e?r.jsxs("div",{className:`dropdown ${o?"open":""}`,children:[r.jsx("button",{className:"drop-btn","aria-haspopup":"true","aria-expanded":o?"true":"false",onClick:()=>s(w=>!w),children:Ro((n==null?void 0:n.name)||"Mi cuenta")}),r.jsx("div",{className:"dropdown-content",children:r.jsxs("div",{className:"dropdown-group",children:[r.jsx(V,{to:"/dashboard",children:"Perfil"}),i&&r.jsx(V,{to:"/admin/clientes-activos",children:"Clientes"}),i&&r.jsx(V,{to:"/admin/usuarios",children:"Usuarios"}),r.jsx(V,{to:"/mi-expediente",children:i?"Mis expedientes":"Mi expediente"}),i&&r.jsx(V,{to:"/admin/tareas",children:"Tareas"}),r.jsx(V,{to:"/mis-casos",children:"Mis casos"}),r.jsx(V,{to:"/logout",children:"Cerrar sesión"})]})})]}):r.jsx(V,{to:"/login",className:"koop-cta","aria-label":"CLIENTE KOOP",translate:"no",children:"CLIENTE KOOP".split("").map((w,x)=>r.jsx("span",{className:"letter",style:{"--i":x},children:w===" "?" ":w},x))})]})]})})}function q2({base:e="'Montserrat', Arial, sans-serif",heading:n,accent:t,children:a}){return u.useEffect(()=>{const i=document.documentElement;e&&i.style.setProperty("--ff-base",e),n&&i.style.setProperty("--ff-heading",n),t&&i.style.setProperty("--ff-accent",t)},[e,n,t]),a||null}function Y2(){var H;const{user:e}=Ye(),[n,t]=u.useState(!1),[a,i]=u.useState(null),[o,s]=u.useState(!1),[l,c]=u.useState([]),[d,p]=u.useState(!1),[h,m]=u.useState({x:window.innerWidth-80,y:window.innerHeight-80}),[w,x]=u.useState(!1),[y,k]=u.useState({x:0,y:0}),[g,f]=u.useState(!1),[v,N]=u.useState({x:0,y:0}),[z,O]=u.useState(!1),[_,A]=u.useState(!1),[Z,$]=u.useState("1Zf1rz0XX6fyNxKOq4XvgN"),re=u.useRef(null),te=u.useRef(null),oe=(H=e==null?void 0:e.roles)==null?void 0:H.includes("admin");u.useEffect(()=>{const R=localStorage.getItem("spotifyWidgetPosition");R&&m(JSON.parse(R));const L=localStorage.getItem("spotifyWidgetExpanded");L&&s(JSON.parse(L));const j=localStorage.getItem("spotifyWidgetMinimized");j&&O(JSON.parse(j));const M=localStorage.getItem("spotifyCurrentPlaylistId");M&&$(M)},[]),u.useEffect(()=>{localStorage.setItem("spotifyWidgetPosition",JSON.stringify(h))},[h]),u.useEffect(()=>{localStorage.setItem("spotifyWidgetExpanded",JSON.stringify(o))},[o]),u.useEffect(()=>{localStorage.setItem("spotifyWidgetMinimized",JSON.stringify(z))},[z]),u.useEffect(()=>{localStorage.setItem("spotifyCurrentPlaylistId",Z)},[Z]),u.useEffect(()=>{if(oe){pe();const R=()=>{pe()};return window.addEventListener("focus",R),()=>{window.removeEventListener("focus",R)}}},[oe]);const pe=async()=>{try{const R=localStorage.getItem("spotifyAccessToken"),L=localStorage.getItem("spotifyTokenExpiry");if(R&&L&&Date.now()<parseInt(L)){console.log("🎵 Usando tokens de Spotify del localStorage");const j=await fetch("https://api.spotify.com/v1/me",{headers:{Authorization:`Bearer ${R}`}});if(j.ok){const M=await j.json();i(M),t(!0),console.log("✅ Usuario de Spotify autenticado:",M.display_name),await Ee(R)}else throw new Error("Token de Spotify inválido")}else{const j=await Ce.get("/spotify/me");i(j.data),t(!0)}}catch{console.log("No hay sesión de Spotify activa"),t(!1),i(null)}},Ee=async R=>{try{const L=await fetch("https://api.spotify.com/v1/me/playlists?limit=20",{headers:{Authorization:`Bearer ${R}`}});if(L.ok){const j=await L.json();c(j.items),console.log("📋 Playlists cargadas:",j.items.length)}}catch(L){console.error("Error cargando playlists:",L)}},ye=async()=>{try{const R=await Ce.get("/spotify/auth/url");window.location.href=R.data.authUrl}catch(R){console.error("Error getting auth URL:",R)}},se=R=>{const L=R.type==="mousedown"?R.clientX:R.touches[0].clientX,j=R.type==="mousedown"?R.clientY:R.touches[0].clientY;x(!0),f(!1),N({x:L,y:j}),k({x:L-h.x,y:j-h.y})},F=R=>{if(!w)return;const L=R.type==="mousemove"?R.clientX:R.touches[0].clientX,j=R.type==="mousemove"?R.clientY:R.touches[0].clientY,M=L-y.x,X=j-y.y,D=Math.abs(L-v.x),C=Math.abs(j-v.y);(D>5||C>5)&&f(!0);const G=10,ue=window.innerWidth-(o?300:60)-G,Fe=window.innerHeight-(o?350:60)-G;m({x:Math.max(G,Math.min(M,ue)),y:Math.max(G,Math.min(X,Fe))})},J=()=>{x(!1)};u.useEffect(()=>(w&&(document.addEventListener("mousemove",F),document.addEventListener("mouseup",J),document.addEventListener("touchmove",F),document.addEventListener("touchend",J)),()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",J),document.removeEventListener("touchmove",F),document.removeEventListener("touchend",J)}),[w,y,v]),u.useEffect(()=>{const R=L=>{re.current&&!re.current.contains(L.target)&&o&&(s(!1),O(!0))};return o&&(document.addEventListener("mousedown",R),document.addEventListener("touchstart",R)),()=>{document.removeEventListener("mousedown",R),document.removeEventListener("touchstart",R)}},[o]),u.useEffect(()=>{const R=L=>{L.origin==="https://open.spotify.com"&&(L.data&&L.data.type==="playback_started"?A(!0):L.data&&L.data.type==="playback_paused"&&A(!1))};return window.addEventListener("message",R),()=>window.removeEventListener("message",R)},[]);const ee=R=>{$(R),te.current&&(te.current.src=`https://open.spotify.com/embed/playlist/${R}?utm_source=generator&theme=0`),p(!1)};if(!oe)return null;const U=()=>{const R=window.innerWidth-h.x,L=window.innerHeight-h.y;return R<300&&L<350?"top-left":R<300?"left":L<350?"top":"default"},Q=o?(()=>{const R=U(),L=10;switch(R){case"top-left":return{x:Math.max(L,h.x-240),y:Math.max(L,h.y-290)};case"left":return{x:Math.max(L,h.x-240),y:h.y};case"top":return{x:h.x,y:Math.max(L,h.y-290)};default:return h}})():h;return r.jsxs(r.Fragment,{children:[n&&r.jsx("iframe",{ref:te,src:`https://open.spotify.com/embed/playlist/${Z}?utm_source=generator&theme=0`,width:o?"100%":"1",height:o?"220":"1",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",style:{position:"fixed",top:o?`${Q.y+60}px`:"-1000px",left:o?`${Q.x+12}px`:"-1000px",opacity:o?1:0,pointerEvents:o?"auto":"none",zIndex:o?1001:-1,borderRadius:o?"6px":"0",border:o?"1px solid rgba(255, 255, 255, 0.1)":"none",backgroundColor:o?"rgba(40, 40, 40, 0.8)":"transparent",width:o?"276px":"1px",height:o?"220px":"1px"}}),r.jsxs("div",{ref:re,style:{position:"fixed",left:Q.x,top:Q.y,zIndex:1e3,width:o?"300px":"60px",height:o?"350px":"60px",backgroundColor:"rgba(15, 23, 42, 0.95)",backdropFilter:"blur(10px)",border:"1px solid rgba(148, 163, 184, 0.2)",borderRadius:"12px",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.3)",transition:w?"none":"all 0.3s ease",cursor:w?"grabbing":"grab",touchAction:"none",userSelect:"none",pointerEvents:w?"none":"auto"},onMouseDown:se,onTouchStart:se,children:[!o&&r.jsxs("div",{onClick:R=>{R.stopPropagation(),g||(s(!0),O(!1))},style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"transform 0.2s ease",pointerEvents:"auto"},onMouseEnter:R=>{w||(R.target.style.transform="scale(1.1)")},onMouseLeave:R=>{w||(R.target.style.transform="scale(1)")},children:[r.jsx("span",{style:{fontSize:"24px",color:z&&n?"#1db954":"#fc771c",fontWeight:"bold"},children:"♪"}),z&&n&&r.jsx("div",{style:{position:"absolute",top:"5px",right:"5px",width:"8px",height:"8px",backgroundColor:_?"#1db954":"#ff6b6b",borderRadius:"50%",animation:_?"pulse 2s infinite":"none"}})]}),o&&r.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between",pointerEvents:"auto"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px",padding:"8px 0"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx("h4",{style:{color:"#1db954",margin:0,fontSize:"14px",fontWeight:"bold"},children:"Spotify"}),n&&r.jsx("p",{style:{color:"#94a3b8",margin:0,fontSize:"11px"},children:a==null?void 0:a.display_name})]}),r.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[n&&r.jsx("button",{onClick:()=>p(!d),style:{background:d?"#1db954":"rgba(255, 255, 255, 0.1)",border:"none",color:"white",fontSize:"11px",fontWeight:"bold",cursor:"pointer",padding:"4px 8px",borderRadius:"12px",transition:"all 0.2s ease"},children:"📋"}),!n&&r.jsx("button",{onClick:ye,style:{background:"#fc771c",border:"none",color:"#fff",fontSize:"12px",fontWeight:"bold",cursor:"pointer",padding:"6px 12px",borderRadius:"15px",transition:"all 0.2s ease"},onMouseEnter:R=>{R.target.style.background="#f97316",R.target.style.transform="scale(1.05)"},onMouseLeave:R=>{R.target.style.background="#fc771c",R.target.style.transform="scale(1)"},children:"Conectar"}),r.jsx("button",{onClick:R=>{R.stopPropagation(),s(!1),O(!0);const L=10,j=60,M=window.innerWidth-j-L,X=window.innerHeight-j-L;m(D=>({x:Math.max(L,Math.min(D.x,M)),y:Math.max(L,Math.min(D.y,X))}))},style:{background:"transparent",border:"none",color:"#94a3b8",fontSize:"16px",cursor:"pointer",padding:"4px",borderRadius:"4px",transition:"all 0.2s ease"},onMouseEnter:R=>{R.target.style.color="#e2e8f0",R.target.style.backgroundColor="rgba(148, 163, 184, 0.1)"},onMouseLeave:R=>{R.target.style.color="#94a3b8",R.target.style.backgroundColor="transparent"},children:"×"})]})]}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",flex:1,justifyContent:"center"},children:n?r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",height:"100%"},children:d?r.jsxs("div",{style:{height:"100%",overflowY:"auto",padding:"6px",backgroundColor:"rgba(40, 40, 40, 0.8)",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:[r.jsx("h4",{style:{color:"#1db954",margin:"0 0 8px 0",fontSize:"12px"},children:"Tus Playlists"}),l.map(R=>{var L;return r.jsxs("div",{onClick:()=>ee(R.id),style:{padding:"6px",backgroundColor:R.id===Z?"rgba(29, 185, 84, 0.2)":"rgba(0, 0, 0, 0.3)",marginBottom:"4px",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",transition:"all 0.2s ease"},onMouseEnter:j=>{j.target.style.backgroundColor="rgba(29, 185, 84, 0.2)",j.target.style.transform="scale(1.02)"},onMouseLeave:j=>{j.target.style.backgroundColor=R.id===Z?"rgba(29, 185, 84, 0.2)":"rgba(0, 0, 0, 0.3)",j.target.style.transform="scale(1)"},children:[r.jsx("img",{src:((L=R.images[0])==null?void 0:L.url)||"/img/default-playlist.png",alt:"Playlist",style:{width:"32px",height:"32px",borderRadius:"3px"}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("p",{style:{color:"white",margin:"0",fontSize:"11px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:R.name}),r.jsxs("p",{style:{color:"#b3b3b3",margin:"0",fontSize:"9px"},children:[R.tracks.total," canciones"]})]})]},R.id)})]}):r.jsx("div",{style:{width:"100%",height:"220px",borderRadius:"6px",overflow:"hidden",backgroundColor:"rgba(40, 40, 40, 0.8)",border:"1px solid rgba(255, 255, 255, 0.1)",position:"relative"}})}):r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"15px 0"},children:[r.jsx("div",{style:{fontSize:"36px",color:"#1db954"},children:"♪"}),r.jsx("h3",{style:{color:"#1db954",margin:0,fontSize:"16px",textAlign:"center"},children:"Reproductor de Spotify"}),r.jsx("p",{style:{color:"#94a3b8",margin:0,fontSize:"12px",textAlign:"center",lineHeight:"1.4"},children:"Conecta tu cuenta de Spotify para disfrutar de tu música favorita"}),r.jsx("button",{onClick:ye,style:{background:"#1db954",border:"none",color:"#fff",fontSize:"14px",fontWeight:"bold",cursor:"pointer",padding:"10px 20px",borderRadius:"20px",transition:"all 0.2s ease",marginTop:"6px"},onMouseEnter:R=>{R.target.style.background="#1ed760",R.target.style.transform="scale(1.05)"},onMouseLeave:R=>{R.target.style.background="#1db954",R.target.style.transform="scale(1)"},children:"Conectar con Spotify"})]})})]})]}),r.jsx("style",{jsx:!0,children:`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `})]})}function G2(){const[e,n]=u.useState(null),t=()=>{const a=Zn(),{isAuthenticated:i}=Ye(),o=a.pathname.toLowerCase(),s=o.startsWith("/login")||o.startsWith("/register");return r.jsxs(r.Fragment,{children:[!s&&r.jsx(H2,{}),r.jsx(Y2,{}),r.jsxs(b1,{children:[r.jsx(de,{path:"/",element:r.jsx(L1,{})}),r.jsx(de,{path:"/derecho",element:r.jsx(M1,{})}),r.jsx(de,{path:"/contabilidad",element:r.jsx(B1,{})}),r.jsx(de,{path:"/auditoria",element:r.jsx(F1,{})}),r.jsx(de,{path:"/derecho-administrativo",element:r.jsx(W1,{})}),r.jsx(de,{path:"/derecho-familia",element:r.jsx($1,{})}),r.jsx(de,{path:"/derecho-laboral",element:r.jsx(J1,{})}),r.jsx(de,{path:"/derecho-penal",element:r.jsx(X1,{})}),r.jsx(de,{path:"/impuestos",element:r.jsx(nx,{})}),r.jsx(de,{path:"/asesoria-contable",element:r.jsx(tx,{})}),r.jsx(de,{path:"/planeacion-patrimonial",element:r.jsx($e,{to:"/asesoria-contable",replace:!0})}),r.jsx(de,{path:"/privacidad",element:r.jsx(ix,{})}),r.jsx(de,{path:"/tramites-notariales",element:r.jsx(sx,{})}),r.jsx(de,{path:"/acciones-de-tutela",element:r.jsx(cx,{})}),r.jsx(de,{path:"/login",element:i?r.jsx($e,{to:"/",replace:!0}):r.jsx(Yv,{})}),r.jsx(de,{path:"/register",element:r.jsx(Gv,{})}),r.jsx(de,{path:"/logout",element:r.jsx($2,{})}),r.jsx(de,{path:"/callback",element:r.jsx(K2,{})}),r.jsx(de,{path:"/panel",element:r.jsx(gr,{children:r.jsx(Qv,{})})}),r.jsx(de,{path:"/admin/usuarios",element:r.jsx(gr,{children:r.jsx(c2,{})})}),r.jsx(de,{path:"/admin/clientes-activos",element:r.jsx(gr,{children:r.jsx(S2,{})})}),r.jsx(de,{path:"/admin/tareas",element:r.jsx(gr,{children:r.jsx(g2,{})})}),r.jsx(de,{path:"/dashboard",element:r.jsx(gr,{children:r.jsx(U2,{})})}),r.jsx(de,{path:"/mi-expediente",element:r.jsx(gr,{children:r.jsx(kl,{})})}),r.jsx(de,{path:"/dashboard2",element:r.jsx(gr,{children:r.jsx(kl,{})})}),r.jsx(de,{path:"/mis-casos",element:r.jsx(gr,{children:r.jsx(Z2,{})})}),r.jsx(de,{path:"/index.html",element:r.jsx($e,{to:"/",replace:!0})}),r.jsx(de,{path:"/derecho.html",element:r.jsx($e,{to:"/derecho",replace:!0})}),r.jsx(de,{path:"/contabilidad.html",element:r.jsx($e,{to:"/contabilidad",replace:!0})}),r.jsx(de,{path:"/auditoria.html",element:r.jsx($e,{to:"/auditoria",replace:!0})}),r.jsx(de,{path:"/derecho-administrativo.html",element:r.jsx($e,{to:"/derecho-administrativo",replace:!0})}),r.jsx(de,{path:"/derecho-familia.html",element:r.jsx($e,{to:"/derecho-familia",replace:!0})}),r.jsx(de,{path:"/derecho-laboral.html",element:r.jsx($e,{to:"/derecho-laboral",replace:!0})}),r.jsx(de,{path:"/derecho-penal.html",element:r.jsx($e,{to:"/derecho-penal",replace:!0})}),r.jsx(de,{path:"/impuestos.html",element:r.jsx($e,{to:"/impuestos",replace:!0})}),r.jsx(de,{path:"/planeacion-patrimonial.html",element:r.jsx($e,{to:"/asesoria-contable",replace:!0})}),r.jsx(de,{path:"/privacidad.html",element:r.jsx($e,{to:"/privacidad",replace:!0})}),r.jsx(de,{path:"/tramites-notariales.html",element:r.jsx($e,{to:"/tramites-notariales",replace:!0})}),r.jsx(de,{path:"/acciones-de-tutela.html",element:r.jsx($e,{to:"/acciones-de-tutela",replace:!0})})]})]})};return r.jsx(qv,{children:r.jsx(q2,{children:r.jsx(E1,{children:r.jsx(t,{})})})})}try{"scrollRestoration"in history&&(history.scrollRestoration="manual")}catch{}const J2=Mh(document.getElementById("root"));J2.render(r.jsx(G2,{}));
