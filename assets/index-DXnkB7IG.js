function sh(e,n){for(var r=0;r<n.length;r++){const a=n[r];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(a,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function lh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Op={exports:{}},uo={},Dp={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),ch=Symbol.for("react.portal"),dh=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),uh=Symbol.for("react.profiler"),fh=Symbol.for("react.provider"),mh=Symbol.for("react.context"),hh=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),xh=Symbol.for("react.memo"),vh=Symbol.for("react.lazy"),Wc=Symbol.iterator;function bh(e){return e===null||typeof e!="object"?null:(e=Wc&&e[Wc]||e["@@iterator"],typeof e=="function"?e:null)}var Lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pp=Object.assign,Fp={};function Vt(e,n,r){this.props=e,this.context=n,this.refs=Fp,this.updater=r||Lp}Vt.prototype.isReactComponent={};Vt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Vt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _p(){}_p.prototype=Vt.prototype;function Al(e,n,r){this.props=e,this.context=n,this.refs=Fp,this.updater=r||Lp}var Il=Al.prototype=new _p;Il.constructor=Al;Pp(Il,Vt.prototype);Il.isPureReactComponent=!0;var $c=Array.isArray,Mp=Object.prototype.hasOwnProperty,Tl={current:null},Bp={key:!0,ref:!0,__self:!0,__source:!0};function Vp(e,n,r){var a,i={},o=null,s=null;if(n!=null)for(a in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)Mp.call(n,a)&&!Bp.hasOwnProperty(a)&&(i[a]=n[a]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:Ua,type:e,key:o,ref:s,props:i,_owner:Tl.current}}function yh(e,n){return{$$typeof:Ua,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function zl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ua}function wh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var Kc=/\/+/g;function $o(e,n){return typeof e=="object"&&e!==null&&e.key!=null?wh(""+e.key):n.toString(36)}function ki(e,n,r,a,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ua:case ch:s=!0}}if(s)return s=e,i=i(s),e=a===""?"."+$o(s,0):a,$c(i)?(r="",e!=null&&(r=e.replace(Kc,"$&/")+"/"),ki(i,n,r,"",function(d){return d})):i!=null&&(zl(i)&&(i=yh(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Kc,"$&/")+"/")+e)),n.push(i)),1;if(s=0,a=a===""?".":a+":",$c(e))for(var l=0;l<e.length;l++){o=e[l];var c=a+$o(o,l);s+=ki(o,n,r,c,i)}else if(c=bh(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=a+$o(o,l++),s+=ki(o,n,r,c,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function ti(e,n,r){if(e==null)return e;var a=[],i=0;return ki(e,a,"","",function(o){return n.call(r,o,i++)}),a}function jh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var rn={current:null},Ci={transition:null},kh={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:Tl};function Up(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:ti,forEach:function(e,n,r){ti(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return ti(e,function(){n++}),n},toArray:function(e){return ti(e,function(n){return n})||[]},only:function(e){if(!zl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Vt;ue.Fragment=dh;ue.Profiler=uh;ue.PureComponent=Al;ue.StrictMode=ph;ue.Suspense=gh;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kh;ue.act=Up;ue.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Pp({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=Tl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)Mp.call(n,c)&&!Bp.hasOwnProperty(c)&&(a[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:Ua,type:e.type,key:i,ref:o,props:a,_owner:s}};ue.createContext=function(e){return e={$$typeof:mh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fh,_context:e},e.Consumer=e};ue.createElement=Vp;ue.createFactory=function(e){var n=Vp.bind(null,e);return n.type=e,n};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:hh,render:e}};ue.isValidElement=zl;ue.lazy=function(e){return{$$typeof:vh,_payload:{_status:-1,_result:e},_init:jh}};ue.memo=function(e,n){return{$$typeof:xh,type:e,compare:n===void 0?null:n}};ue.startTransition=function(e){var n=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=n}};ue.unstable_act=Up;ue.useCallback=function(e,n){return rn.current.useCallback(e,n)};ue.useContext=function(e){return rn.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return rn.current.useDeferredValue(e)};ue.useEffect=function(e,n){return rn.current.useEffect(e,n)};ue.useId=function(){return rn.current.useId()};ue.useImperativeHandle=function(e,n,r){return rn.current.useImperativeHandle(e,n,r)};ue.useInsertionEffect=function(e,n){return rn.current.useInsertionEffect(e,n)};ue.useLayoutEffect=function(e,n){return rn.current.useLayoutEffect(e,n)};ue.useMemo=function(e,n){return rn.current.useMemo(e,n)};ue.useReducer=function(e,n,r){return rn.current.useReducer(e,n,r)};ue.useRef=function(e){return rn.current.useRef(e)};ue.useState=function(e){return rn.current.useState(e)};ue.useSyncExternalStore=function(e,n,r){return rn.current.useSyncExternalStore(e,n,r)};ue.useTransition=function(){return rn.current.useTransition()};ue.version="18.3.1";Dp.exports=ue;var f=Dp.exports;const Ch=lh(f),Sh=sh({__proto__:null,default:Ch},[f]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh=f,Nh=Symbol.for("react.element"),Ah=Symbol.for("react.fragment"),Ih=Object.prototype.hasOwnProperty,Th=Eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zh={key:!0,ref:!0,__self:!0,__source:!0};function Wp(e,n,r){var a,i={},o=null,s=null;r!==void 0&&(o=""+r),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(a in n)Ih.call(n,a)&&!zh.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)i[a]===void 0&&(i[a]=n[a]);return{$$typeof:Nh,type:e,key:o,ref:s,props:i,_owner:Th.current}}uo.Fragment=Ah;uo.jsx=Wp;uo.jsxs=Wp;Op.exports=uo;var t=Op.exports,$p={exports:{}},yn={},Kp={exports:{}},Hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(B,Y){var J=B.length;B.push(Y);e:for(;0<J;){var V=J-1>>>1,$=B[V];if(0<i($,Y))B[V]=Y,B[J]=$,J=V;else break e}}function r(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var Y=B[0],J=B.pop();if(J!==Y){B[0]=J;e:for(var V=0,$=B.length,ie=$>>>1;V<ie;){var H=2*(V+1)-1,z=B[H],P=H+1,k=B[P];if(0>i(z,J))P<$&&0>i(k,z)?(B[V]=k,B[P]=J,V=P):(B[V]=z,B[H]=J,V=H);else if(P<$&&0>i(k,J))B[V]=k,B[P]=J,V=P;else break e}}return Y}function i(B,Y){var J=B.sortIndex-Y.sortIndex;return J!==0?J:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],d=[],p=1,m=null,h=3,y=!1,v=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(B){for(var Y=r(d);Y!==null;){if(Y.callback===null)a(d);else if(Y.startTime<=B)a(d),Y.sortIndex=Y.expirationTime,n(c,Y);else break;Y=r(d)}}function C(B){if(w=!1,x(B),!v)if(r(c)!==null)v=!0,ye(N);else{var Y=r(d);Y!==null&&ae(C,Y.startTime-B)}}function N(B,Y){v=!1,w&&(w=!1,g(A),A=-1),y=!0;var J=h;try{for(x(Y),m=r(c);m!==null&&(!(m.expirationTime>Y)||B&&!ee());){var V=m.callback;if(typeof V=="function"){m.callback=null,h=m.priorityLevel;var $=V(m.expirationTime<=Y);Y=e.unstable_now(),typeof $=="function"?m.callback=$:m===r(c)&&a(c),x(Y)}else a(c);m=r(c)}if(m!==null)var ie=!0;else{var H=r(d);H!==null&&ae(C,H.startTime-Y),ie=!1}return ie}finally{m=null,h=J,y=!1}}var R=!1,M=null,A=-1,U=5,W=-1;function ee(){return!(e.unstable_now()-W<U)}function ne(){if(M!==null){var B=e.unstable_now();W=B;var Y=!0;try{Y=M(!0,B)}finally{Y?oe():(R=!1,M=null)}}else R=!1}var oe;if(typeof u=="function")oe=function(){u(ne)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Ne=de.port2;de.port1.onmessage=ne,oe=function(){Ne.postMessage(null)}}else oe=function(){j(ne,0)};function ye(B){M=B,R||(R=!0,oe())}function ae(B,Y){A=j(function(){B(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,ye(N))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(B){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var J=h;h=Y;try{return B()}finally{h=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=h;h=B;try{return Y()}finally{h=J}},e.unstable_scheduleCallback=function(B,Y,J){var V=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?V+J:V):J=V,B){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=J+$,B={id:p++,callback:Y,priorityLevel:B,startTime:J,expirationTime:$,sortIndex:-1},J>V?(B.sortIndex=J,n(d,B),r(c)===null&&B===r(d)&&(w?(g(A),A=-1):w=!0,ae(C,J-V))):(B.sortIndex=$,n(c,B),v||y||(v=!0,ye(N))),B},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(B){var Y=h;return function(){var J=h;h=Y;try{return B.apply(this,arguments)}finally{h=J}}}})(Hp);Kp.exports=Hp;var Rh=Kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh=f,bn=Rh;function _(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qp=new Set,wa={};function st(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(wa[e]=n,e=0;e<n.length;e++)qp.add(n[e])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),js=Object.prototype.hasOwnProperty,Dh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hc={},qc={};function Lh(e){return js.call(qc,e)?!0:js.call(Hc,e)?!1:Dh.test(e)?qc[e]=!0:(Hc[e]=!0,!1)}function Ph(e,n,r,a){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fh(e,n,r,a){if(n===null||typeof n>"u"||Ph(e,n,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function tn(e,n,r,a,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new tn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];He[n]=new tn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new tn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new tn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new tn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new tn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new tn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new tn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new tn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rl=/[\-:]([a-z])/g;function Ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Rl,Ol);He[n]=new tn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Rl,Ol);He[n]=new tn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Rl,Ol);He[n]=new tn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new tn(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new tn(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dl(e,n,r,a){var i=He.hasOwnProperty(n)?He[n]:null;(i!==null?i.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Fh(n,r,i,a)&&(r=null),a||i===null?Lh(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(n=i.attributeName,a=i.attributeNamespace,r===null?e.removeAttribute(n):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,a?e.setAttributeNS(a,n,r):e.setAttribute(n,r))))}var gr=Oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),ht=Symbol.for("react.portal"),gt=Symbol.for("react.fragment"),Ll=Symbol.for("react.strict_mode"),ks=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),Yp=Symbol.for("react.context"),Pl=Symbol.for("react.forward_ref"),Cs=Symbol.for("react.suspense"),Ss=Symbol.for("react.suspense_list"),Fl=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),Gp=Symbol.for("react.offscreen"),Zc=Symbol.iterator;function Gt(e){return e===null||typeof e!="object"?null:(e=Zc&&e[Zc]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Object.assign,Ko;function la(e){if(Ko===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Ko=n&&n[1]||""}return`
`+Ko+e}var Ho=!1;function qo(e,n){if(!e||Ho)return"";Ho=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var a=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){a=d}e.call(n.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=a.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Ho=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?la(e):""}function _h(e){switch(e.tag){case 5:return la(e.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return e=qo(e.type,!1),e;case 11:return e=qo(e.type.render,!1),e;case 1:return e=qo(e.type,!0),e;default:return""}}function Es(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gt:return"Fragment";case ht:return"Portal";case ks:return"Profiler";case Ll:return"StrictMode";case Cs:return"Suspense";case Ss:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yp:return(e.displayName||"Context")+".Consumer";case Zp:return(e._context.displayName||"Context")+".Provider";case Pl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fl:return n=e.displayName||null,n!==null?n:Es(e.type)||"Memo";case yr:n=e._payload,e=e._init;try{return Es(e(n))}catch{}}return null}function Mh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Es(n);case 8:return n===Ll?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jp(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Bh(e){var n=Jp(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ii(e){e._valueTracker||(e._valueTracker=Bh(e))}function Qp(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),a="";return e&&(a=Jp(e)?e.checked?"true":"false":e.value),e=a,e!==r?(n.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ns(e,n){var r=n.checked;return ze({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Yc(e,n){var r=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;r=Pr(n.value!=null?n.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Xp(e,n){n=n.checked,n!=null&&Dl(e,"checked",n,!1)}function As(e,n){Xp(e,n);var r=Pr(n.value),a=n.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Is(e,n.type,r):n.hasOwnProperty("defaultValue")&&Is(e,n.type,Pr(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Gc(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Is(e,n,r){(n!=="number"||_i(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ca=Array.isArray;function Nt(e,n,r,a){if(e=e.options,n){n={};for(var i=0;i<r.length;i++)n["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=n.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&a&&(e[r].defaultSelected=!0)}else{for(r=""+Pr(r),n=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ts(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(_(91));return ze({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jc(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(_(92));if(ca(r)){if(1<r.length)throw Error(_(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:Pr(r)}}function eu(e,n){var r=Pr(n.value),a=Pr(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function Qc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function nu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zs(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?nu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,ru=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,a,i){MSApp.execUnsafeLocalFunction(function(){return e(n,r,a,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ja(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vh=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(e){Vh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ua[n]=ua[e]})});function tu(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||ua.hasOwnProperty(e)&&ua[e]?(""+n).trim():n+"px"}function au(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var a=r.indexOf("--")===0,i=tu(r,n[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,i):e[r]=i}}var Uh=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rs(e,n){if(n){if(Uh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(_(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(_(61))}if(n.style!=null&&typeof n.style!="object")throw Error(_(62))}}function Os(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ds=null;function _l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,At=null,It=null;function Xc(e){if(e=Ka(e)){if(typeof Ls!="function")throw Error(_(280));var n=e.stateNode;n&&(n=xo(n),Ls(e.stateNode,e.type,n))}}function iu(e){At?It?It.push(e):It=[e]:At=e}function ou(){if(At){var e=At,n=It;if(It=At=null,Xc(e),n)for(e=0;e<n.length;e++)Xc(n[e])}}function su(e,n){return e(n)}function lu(){}var Zo=!1;function cu(e,n,r){if(Zo)return e(n,r);Zo=!0;try{return su(e,n,r)}finally{Zo=!1,(At!==null||It!==null)&&(lu(),ou())}}function ka(e,n){var r=e.stateNode;if(r===null)return null;var a=xo(r);if(a===null)return null;r=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(_(231,n,typeof r));return r}var Ps=!1;if(ur)try{var Jt={};Object.defineProperty(Jt,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",Jt,Jt),window.removeEventListener("test",Jt,Jt)}catch{Ps=!1}function Wh(e,n,r,a,i,o,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(r,d)}catch(p){this.onError(p)}}var fa=!1,Mi=null,Bi=!1,Fs=null,$h={onError:function(e){fa=!0,Mi=e}};function Kh(e,n,r,a,i,o,s,l,c){fa=!1,Mi=null,Wh.apply($h,arguments)}function Hh(e,n,r,a,i,o,s,l,c){if(Kh.apply(this,arguments),fa){if(fa){var d=Mi;fa=!1,Mi=null}else throw Error(_(198));Bi||(Bi=!0,Fs=d)}}function lt(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function du(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ed(e){if(lt(e)!==e)throw Error(_(188))}function qh(e){var n=e.alternate;if(!n){if(n=lt(e),n===null)throw Error(_(188));return n!==e?null:e}for(var r=e,a=n;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){r=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return ed(i),e;if(o===a)return ed(i),n;o=o.sibling}throw Error(_(188))}if(r.return!==a.return)r=i,a=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,a=o;break}if(l===a){s=!0,a=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,a=i;break}if(l===a){s=!0,a=o,r=i;break}l=l.sibling}if(!s)throw Error(_(189))}}if(r.alternate!==a)throw Error(_(190))}if(r.tag!==3)throw Error(_(188));return r.stateNode.current===r?e:n}function pu(e){return e=qh(e),e!==null?uu(e):null}function uu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=uu(e);if(n!==null)return n;e=e.sibling}return null}var fu=bn.unstable_scheduleCallback,nd=bn.unstable_cancelCallback,Zh=bn.unstable_shouldYield,Yh=bn.unstable_requestPaint,Le=bn.unstable_now,Gh=bn.unstable_getCurrentPriorityLevel,Ml=bn.unstable_ImmediatePriority,mu=bn.unstable_UserBlockingPriority,Vi=bn.unstable_NormalPriority,Jh=bn.unstable_LowPriority,hu=bn.unstable_IdlePriority,fo=null,tr=null;function Qh(e){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:ng,Xh=Math.log,eg=Math.LN2;function ng(e){return e>>>=0,e===0?32:31-(Xh(e)/eg|0)|0}var si=64,li=4194304;function da(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ui(e,n){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?a=da(l):(o&=s,o!==0&&(a=da(o)))}else s=r&~i,s!==0?a=da(s):o!==0&&(a=da(o));if(a===0)return 0;if(n!==0&&n!==a&&!(n&i)&&(i=a&-a,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(a&4&&(a|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)r=31-Vn(n),i=1<<r,a|=e[r],n&=~i;return a}function rg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tg(e,n){for(var r=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Vn(o),l=1<<s,c=i[s];c===-1?(!(l&r)||l&a)&&(i[s]=rg(l,n)):c<=n&&(e.expiredLanes|=l),o&=~l}}function _s(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gu(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function Yo(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Wa(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Vn(n),e[n]=r}function ag(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Vn(r),o=1<<i;n[i]=0,a[i]=-1,e[i]=-1,r&=~o}}function Bl(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var a=31-Vn(r),i=1<<a;i&n|e[a]&n&&(e[a]|=n),r&=~i}}var be=0;function xu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vu,Vl,bu,yu,wu,Ms=!1,ci=[],Nr=null,Ar=null,Ir=null,Ca=new Map,Sa=new Map,jr=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rd(e,n){switch(e){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Ca.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(n.pointerId)}}function Qt(e,n,r,a,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:r,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Ka(n),n!==null&&Vl(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function og(e,n,r,a,i){switch(n){case"focusin":return Nr=Qt(Nr,e,n,r,a,i),!0;case"dragenter":return Ar=Qt(Ar,e,n,r,a,i),!0;case"mouseover":return Ir=Qt(Ir,e,n,r,a,i),!0;case"pointerover":var o=i.pointerId;return Ca.set(o,Qt(Ca.get(o)||null,e,n,r,a,i)),!0;case"gotpointercapture":return o=i.pointerId,Sa.set(o,Qt(Sa.get(o)||null,e,n,r,a,i)),!0}return!1}function ju(e){var n=Zr(e.target);if(n!==null){var r=lt(n);if(r!==null){if(n=r.tag,n===13){if(n=du(r),n!==null){e.blockedOn=n,wu(e.priority,function(){bu(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Si(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Bs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);Ds=a,r.target.dispatchEvent(a),Ds=null}else return n=Ka(r),n!==null&&Vl(n),e.blockedOn=r,!1;n.shift()}return!0}function td(e,n,r){Si(e)&&r.delete(n)}function sg(){Ms=!1,Nr!==null&&Si(Nr)&&(Nr=null),Ar!==null&&Si(Ar)&&(Ar=null),Ir!==null&&Si(Ir)&&(Ir=null),Ca.forEach(td),Sa.forEach(td)}function Xt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ms||(Ms=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,sg)))}function Ea(e){function n(i){return Xt(i,e)}if(0<ci.length){Xt(ci[0],e);for(var r=1;r<ci.length;r++){var a=ci[r];a.blockedOn===e&&(a.blockedOn=null)}}for(Nr!==null&&Xt(Nr,e),Ar!==null&&Xt(Ar,e),Ir!==null&&Xt(Ir,e),Ca.forEach(n),Sa.forEach(n),r=0;r<jr.length;r++)a=jr[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<jr.length&&(r=jr[0],r.blockedOn===null);)ju(r),r.blockedOn===null&&jr.shift()}var Tt=gr.ReactCurrentBatchConfig,Wi=!0;function lg(e,n,r,a){var i=be,o=Tt.transition;Tt.transition=null;try{be=1,Ul(e,n,r,a)}finally{be=i,Tt.transition=o}}function cg(e,n,r,a){var i=be,o=Tt.transition;Tt.transition=null;try{be=4,Ul(e,n,r,a)}finally{be=i,Tt.transition=o}}function Ul(e,n,r,a){if(Wi){var i=Bs(e,n,r,a);if(i===null)is(e,n,a,$i,r),rd(e,a);else if(og(i,e,n,r,a))a.stopPropagation();else if(rd(e,a),n&4&&-1<ig.indexOf(e)){for(;i!==null;){var o=Ka(i);if(o!==null&&vu(o),o=Bs(e,n,r,a),o===null&&is(e,n,a,$i,r),o===i)break;i=o}i!==null&&a.stopPropagation()}else is(e,n,a,null,r)}}var $i=null;function Bs(e,n,r,a){if($i=null,e=_l(a),e=Zr(e),e!==null)if(n=lt(e),n===null)e=null;else if(r=n.tag,r===13){if(e=du(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $i=e,null}function ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gh()){case Ml:return 1;case mu:return 4;case Vi:case Jh:return 16;case hu:return 536870912;default:return 16}default:return 16}}var Cr=null,Wl=null,Ei=null;function Cu(){if(Ei)return Ei;var e,n=Wl,r=n.length,a,i="value"in Cr?Cr.value:Cr.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(a=1;a<=s&&n[r-a]===i[o-a];a++);return Ei=i.slice(e,1<a?1-a:void 0)}function Ni(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function ad(){return!1}function wn(e){function n(r,a,i,o,s){this._reactName=r,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?di:ad,this.isPropagationStopped=ad,this}return ze(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),n}var Ut={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=wn(Ut),$a=ze({},Ut,{view:0,detail:0}),dg=wn($a),Go,Jo,ea,mo=ze({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ea&&(ea&&e.type==="mousemove"?(Go=e.screenX-ea.screenX,Jo=e.screenY-ea.screenY):Jo=Go=0,ea=e),Go)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),id=wn(mo),pg=ze({},mo,{dataTransfer:0}),ug=wn(pg),fg=ze({},$a,{relatedTarget:0}),Qo=wn(fg),mg=ze({},Ut,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=wn(mg),gg=ze({},Ut,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xg=wn(gg),vg=ze({},Ut,{data:0}),od=wn(vg),bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=wg[e])?!!n[e]:!1}function Kl(){return jg}var kg=ze({},$a,{key:function(e){if(e.key){var n=bg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(e){return e.type==="keypress"?Ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cg=wn(kg),Sg=ze({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=wn(Sg),Eg=ze({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Ng=wn(Eg),Ag=ze({},Ut,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=wn(Ag),Tg=ze({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zg=wn(Tg),Rg=[9,13,27,32],Hl=ur&&"CompositionEvent"in window,ma=null;ur&&"documentMode"in document&&(ma=document.documentMode);var Og=ur&&"TextEvent"in window&&!ma,Su=ur&&(!Hl||ma&&8<ma&&11>=ma),ld=" ",cd=!1;function Eu(e,n){switch(e){case"keyup":return Rg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xt=!1;function Dg(e,n){switch(e){case"compositionend":return Nu(n);case"keypress":return n.which!==32?null:(cd=!0,ld);case"textInput":return e=n.data,e===ld&&cd?null:e;default:return null}}function Lg(e,n){if(xt)return e==="compositionend"||!Hl&&Eu(e,n)?(e=Cu(),Ei=Wl=Cr=null,xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Su&&n.locale!=="ko"?null:n.data;default:return null}}var Pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pg[e.type]:n==="textarea"}function Au(e,n,r,a){iu(a),n=Ki(n,"onChange"),0<n.length&&(r=new $l("onChange","change",null,r,a),e.push({event:r,listeners:n}))}var ha=null,Na=null;function Fg(e){Mu(e,0)}function ho(e){var n=yt(e);if(Qp(n))return e}function _g(e,n){if(e==="change")return n}var Iu=!1;if(ur){var Xo;if(ur){var es="oninput"in document;if(!es){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),es=typeof pd.oninput=="function"}Xo=es}else Xo=!1;Iu=Xo&&(!document.documentMode||9<document.documentMode)}function ud(){ha&&(ha.detachEvent("onpropertychange",Tu),Na=ha=null)}function Tu(e){if(e.propertyName==="value"&&ho(Na)){var n=[];Au(n,Na,e,_l(e)),cu(Fg,n)}}function Mg(e,n,r){e==="focusin"?(ud(),ha=n,Na=r,ha.attachEvent("onpropertychange",Tu)):e==="focusout"&&ud()}function Bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho(Na)}function Vg(e,n){if(e==="click")return ho(n)}function Ug(e,n){if(e==="input"||e==="change")return ho(n)}function Wg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Wg;function Aa(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),a=Object.keys(n);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var i=r[a];if(!js.call(n,i)||!Wn(e[i],n[i]))return!1}return!0}function fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function md(e,n){var r=fd(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=n&&a>=n)return{node:r,offset:n-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fd(r)}}function zu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ru(){for(var e=window,n=_i();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=_i(e.document)}return n}function ql(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function $g(e){var n=Ru(),r=e.focusedElem,a=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&zu(r.ownerDocument.documentElement,r)){if(a!==null&&ql(r)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(a.start,i);a=a.end===void 0?o:Math.min(a.end,i),!e.extend&&o>a&&(i=a,a=o,o=i),i=md(r,o);var s=md(r,a);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>a?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kg=ur&&"documentMode"in document&&11>=document.documentMode,vt=null,Vs=null,ga=null,Us=!1;function hd(e,n,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Us||vt==null||vt!==_i(a)||(a=vt,"selectionStart"in a&&ql(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ga&&Aa(ga,a)||(ga=a,a=Ki(Vs,"onSelect"),0<a.length&&(n=new $l("onSelect","select",null,n,r),e.push({event:n,listeners:a}),n.target=vt)))}function pi(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var bt={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},ns={},Ou={};ur&&(Ou=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function go(e){if(ns[e])return ns[e];if(!bt[e])return e;var n=bt[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Ou)return ns[e]=n[r];return e}var Du=go("animationend"),Lu=go("animationiteration"),Pu=go("animationstart"),Fu=go("transitionend"),_u=new Map,gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(e,n){_u.set(e,n),st(n,[e])}for(var rs=0;rs<gd.length;rs++){var ts=gd[rs],Hg=ts.toLowerCase(),qg=ts[0].toUpperCase()+ts.slice(1);_r(Hg,"on"+qg)}_r(Du,"onAnimationEnd");_r(Lu,"onAnimationIteration");_r(Pu,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Fu,"onTransitionEnd");Ot("onMouseEnter",["mouseout","mouseover"]);Ot("onMouseLeave",["mouseout","mouseover"]);Ot("onPointerEnter",["pointerout","pointerover"]);Ot("onPointerLeave",["pointerout","pointerover"]);st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));st("onBeforeInput",["compositionend","keypress","textInput","paste"]);st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function xd(e,n,r){var a=e.type||"unknown-event";e.currentTarget=r,Hh(a,n,void 0,e),e.currentTarget=null}function Mu(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],i=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var s=a.length-1;0<=s;s--){var l=a[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;xd(i,l,d),o=c}else for(s=0;s<a.length;s++){if(l=a[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;xd(i,l,d),o=c}}}if(Bi)throw e=Fs,Bi=!1,Fs=null,e}function Se(e,n){var r=n[qs];r===void 0&&(r=n[qs]=new Set);var a=e+"__bubble";r.has(a)||(Bu(n,e,2,!1),r.add(a))}function as(e,n,r){var a=0;n&&(a|=4),Bu(r,e,a,n)}var ui="_reactListening"+Math.random().toString(36).slice(2);function Ia(e){if(!e[ui]){e[ui]=!0,qp.forEach(function(r){r!=="selectionchange"&&(Zg.has(r)||as(r,!1,e),as(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ui]||(n[ui]=!0,as("selectionchange",!1,n))}}function Bu(e,n,r,a){switch(ku(n)){case 1:var i=lg;break;case 4:i=cg;break;default:i=Ul}r=i.bind(null,n,r,e),i=void 0,!Ps||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,r,{capture:!0,passive:i}):e.addEventListener(n,r,!0):i!==void 0?e.addEventListener(n,r,{passive:i}):e.addEventListener(n,r,!1)}function is(e,n,r,a,i){var o=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=a.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Zr(l),s===null)return;if(c=s.tag,c===5||c===6){a=o=s;continue e}l=l.parentNode}}a=a.return}cu(function(){var d=o,p=_l(r),m=[];e:{var h=_u.get(e);if(h!==void 0){var y=$l,v=e;switch(e){case"keypress":if(Ni(r)===0)break e;case"keydown":case"keyup":y=Cg;break;case"focusin":v="focus",y=Qo;break;case"focusout":v="blur",y=Qo;break;case"beforeblur":case"afterblur":y=Qo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ng;break;case Du:case Lu:case Pu:y=hg;break;case Fu:y=Ig;break;case"scroll":y=dg;break;case"wheel":y=zg;break;case"copy":case"cut":case"paste":y=xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=sd}var w=(n&4)!==0,j=!w&&e==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var u=d,x;u!==null;){x=u;var C=x.stateNode;if(x.tag===5&&C!==null&&(x=C,g!==null&&(C=ka(u,g),C!=null&&w.push(Ta(u,C,x)))),j)break;u=u.return}0<w.length&&(h=new y(h,v,null,r,p),m.push({event:h,listeners:w}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&r!==Ds&&(v=r.relatedTarget||r.fromElement)&&(Zr(v)||v[fr]))break e;if((y||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,y?(v=r.relatedTarget||r.toElement,y=d,v=v?Zr(v):null,v!==null&&(j=lt(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=d),y!==v)){if(w=id,C="onMouseLeave",g="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=sd,C="onPointerLeave",g="onPointerEnter",u="pointer"),j=y==null?h:yt(y),x=v==null?h:yt(v),h=new w(C,u+"leave",y,r,p),h.target=j,h.relatedTarget=x,C=null,Zr(p)===d&&(w=new w(g,u+"enter",v,r,p),w.target=x,w.relatedTarget=j,C=w),j=C,y&&v)n:{for(w=y,g=v,u=0,x=w;x;x=ft(x))u++;for(x=0,C=g;C;C=ft(C))x++;for(;0<u-x;)w=ft(w),u--;for(;0<x-u;)g=ft(g),x--;for(;u--;){if(w===g||g!==null&&w===g.alternate)break n;w=ft(w),g=ft(g)}w=null}else w=null;y!==null&&vd(m,h,y,w,!1),v!==null&&j!==null&&vd(m,j,v,w,!0)}}e:{if(h=d?yt(d):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var N=_g;else if(dd(h))if(Iu)N=Ug;else{N=Bg;var R=Mg}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=Vg);if(N&&(N=N(e,d))){Au(m,N,r,p);break e}R&&R(e,h,d),e==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Is(h,"number",h.value)}switch(R=d?yt(d):window,e){case"focusin":(dd(R)||R.contentEditable==="true")&&(vt=R,Vs=d,ga=null);break;case"focusout":ga=Vs=vt=null;break;case"mousedown":Us=!0;break;case"contextmenu":case"mouseup":case"dragend":Us=!1,hd(m,r,p);break;case"selectionchange":if(Kg)break;case"keydown":case"keyup":hd(m,r,p)}var M;if(Hl)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else xt?Eu(e,r)&&(A="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(A="onCompositionStart");A&&(Su&&r.locale!=="ko"&&(xt||A!=="onCompositionStart"?A==="onCompositionEnd"&&xt&&(M=Cu()):(Cr=p,Wl="value"in Cr?Cr.value:Cr.textContent,xt=!0)),R=Ki(d,A),0<R.length&&(A=new od(A,e,null,r,p),m.push({event:A,listeners:R}),M?A.data=M:(M=Nu(r),M!==null&&(A.data=M)))),(M=Og?Dg(e,r):Lg(e,r))&&(d=Ki(d,"onBeforeInput"),0<d.length&&(p=new od("onBeforeInput","beforeinput",null,r,p),m.push({event:p,listeners:d}),p.data=M))}Mu(m,n)})}function Ta(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Ki(e,n){for(var r=n+"Capture",a=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ka(e,r),o!=null&&a.unshift(Ta(e,o,i)),o=ka(e,n),o!=null&&a.push(Ta(e,o,i))),e=e.return}return a}function ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vd(e,n,r,a,i){for(var o=n._reactName,s=[];r!==null&&r!==a;){var l=r,c=l.alternate,d=l.stateNode;if(c!==null&&c===a)break;l.tag===5&&d!==null&&(l=d,i?(c=ka(r,o),c!=null&&s.unshift(Ta(r,c,l))):i||(c=ka(r,o),c!=null&&s.push(Ta(r,c,l)))),r=r.return}s.length!==0&&e.push({event:n,listeners:s})}var Yg=/\r\n?/g,Gg=/\u0000|\uFFFD/g;function bd(e){return(typeof e=="string"?e:""+e).replace(Yg,`
`).replace(Gg,"")}function fi(e,n,r){if(n=bd(n),bd(e)!==n&&r)throw Error(_(425))}function Hi(){}var Ws=null,$s=null;function Ks(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hs=typeof setTimeout=="function"?setTimeout:void 0,Jg=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,Qg=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(e){return yd.resolve(null).then(e).catch(Xg)}:Hs;function Xg(e){setTimeout(function(){throw e})}function os(e,n){var r=n,a=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(a===0){e.removeChild(i),Ea(n);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=i}while(r);Ea(n)}function Tr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function wd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var Wt=Math.random().toString(36).slice(2),rr="__reactFiber$"+Wt,za="__reactProps$"+Wt,fr="__reactContainer$"+Wt,qs="__reactEvents$"+Wt,e0="__reactListeners$"+Wt,n0="__reactHandles$"+Wt;function Zr(e){var n=e[rr];if(n)return n;for(var r=e.parentNode;r;){if(n=r[fr]||r[rr]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=wd(e);e!==null;){if(r=e[rr])return r;e=wd(e)}return n}e=r,r=e.parentNode}return null}function Ka(e){return e=e[rr]||e[fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function xo(e){return e[za]||null}var Zs=[],wt=-1;function Mr(e){return{current:e}}function Ee(e){0>wt||(e.current=Zs[wt],Zs[wt]=null,wt--)}function ke(e,n){wt++,Zs[wt]=e.current,e.current=n}var Fr={},Qe=Mr(Fr),cn=Mr(!1),nt=Fr;function Dt(e,n){var r=e.type.contextTypes;if(!r)return Fr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=n[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function dn(e){return e=e.childContextTypes,e!=null}function qi(){Ee(cn),Ee(Qe)}function jd(e,n,r){if(Qe.current!==Fr)throw Error(_(168));ke(Qe,n),ke(cn,r)}function Vu(e,n,r){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var i in a)if(!(i in n))throw Error(_(108,Mh(e)||"Unknown",i));return ze({},r,a)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fr,nt=Qe.current,ke(Qe,e),ke(cn,cn.current),!0}function kd(e,n,r){var a=e.stateNode;if(!a)throw Error(_(169));r?(e=Vu(e,n,nt),a.__reactInternalMemoizedMergedChildContext=e,Ee(cn),Ee(Qe),ke(Qe,e)):Ee(cn),ke(cn,r)}var lr=null,vo=!1,ss=!1;function Uu(e){lr===null?lr=[e]:lr.push(e)}function r0(e){vo=!0,Uu(e)}function Br(){if(!ss&&lr!==null){ss=!0;var e=0,n=be;try{var r=lr;for(be=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}lr=null,vo=!1}catch(i){throw lr!==null&&(lr=lr.slice(e+1)),fu(Ml,Br),i}finally{be=n,ss=!1}}return null}var jt=[],kt=0,Yi=null,Gi=0,An=[],In=0,rt=null,cr=1,dr="";function Hr(e,n){jt[kt++]=Gi,jt[kt++]=Yi,Yi=e,Gi=n}function Wu(e,n,r){An[In++]=cr,An[In++]=dr,An[In++]=rt,rt=e;var a=cr;e=dr;var i=32-Vn(a)-1;a&=~(1<<i),r+=1;var o=32-Vn(n)+i;if(30<o){var s=i-i%5;o=(a&(1<<s)-1).toString(32),a>>=s,i-=s,cr=1<<32-Vn(n)+i|r<<i|a,dr=o+e}else cr=1<<o|r<<i|a,dr=e}function Zl(e){e.return!==null&&(Hr(e,1),Wu(e,1,0))}function Yl(e){for(;e===Yi;)Yi=jt[--kt],jt[kt]=null,Gi=jt[--kt],jt[kt]=null;for(;e===rt;)rt=An[--In],An[In]=null,dr=An[--In],An[In]=null,cr=An[--In],An[In]=null}var vn=null,xn=null,Ae=!1,Bn=null;function $u(e,n){var r=Tn(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function Cd(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,vn=e,xn=Tr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,vn=e,xn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=rt!==null?{id:cr,overflow:dr}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=Tn(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,vn=e,xn=null,!0):!1;default:return!1}}function Ys(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gs(e){if(Ae){var n=xn;if(n){var r=n;if(!Cd(e,n)){if(Ys(e))throw Error(_(418));n=Tr(r.nextSibling);var a=vn;n&&Cd(e,n)?$u(a,r):(e.flags=e.flags&-4097|2,Ae=!1,vn=e)}}else{if(Ys(e))throw Error(_(418));e.flags=e.flags&-4097|2,Ae=!1,vn=e}}}function Sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vn=e}function mi(e){if(e!==vn)return!1;if(!Ae)return Sd(e),Ae=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ks(e.type,e.memoizedProps)),n&&(n=xn)){if(Ys(e))throw Ku(),Error(_(418));for(;n;)$u(e,n),n=Tr(n.nextSibling)}if(Sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){xn=Tr(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}xn=null}}else xn=vn?Tr(e.stateNode.nextSibling):null;return!0}function Ku(){for(var e=xn;e;)e=Tr(e.nextSibling)}function Lt(){xn=vn=null,Ae=!1}function Gl(e){Bn===null?Bn=[e]:Bn.push(e)}var t0=gr.ReactCurrentBatchConfig;function na(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(_(309));var a=r.stateNode}if(!a)throw Error(_(147,e));var i=a,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(_(284));if(!r._owner)throw Error(_(290,e))}return e}function hi(e,n){throw e=Object.prototype.toString.call(n),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ed(e){var n=e._init;return n(e._payload)}function Hu(e){function n(g,u){if(e){var x=g.deletions;x===null?(g.deletions=[u],g.flags|=16):x.push(u)}}function r(g,u){if(!e)return null;for(;u!==null;)n(g,u),u=u.sibling;return null}function a(g,u){for(g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function i(g,u){return g=Dr(g,u),g.index=0,g.sibling=null,g}function o(g,u,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<u?(g.flags|=2,u):x):(g.flags|=2,u)):(g.flags|=1048576,u)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,u,x,C){return u===null||u.tag!==6?(u=ms(x,g.mode,C),u.return=g,u):(u=i(u,x),u.return=g,u)}function c(g,u,x,C){var N=x.type;return N===gt?p(g,u,x.props.children,C,x.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===yr&&Ed(N)===u.type)?(C=i(u,x.props),C.ref=na(g,u,x),C.return=g,C):(C=Di(x.type,x.key,x.props,null,g.mode,C),C.ref=na(g,u,x),C.return=g,C)}function d(g,u,x,C){return u===null||u.tag!==4||u.stateNode.containerInfo!==x.containerInfo||u.stateNode.implementation!==x.implementation?(u=hs(x,g.mode,C),u.return=g,u):(u=i(u,x.children||[]),u.return=g,u)}function p(g,u,x,C,N){return u===null||u.tag!==7?(u=Xr(x,g.mode,C,N),u.return=g,u):(u=i(u,x),u.return=g,u)}function m(g,u,x){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ms(""+u,g.mode,x),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ai:return x=Di(u.type,u.key,u.props,null,g.mode,x),x.ref=na(g,null,u),x.return=g,x;case ht:return u=hs(u,g.mode,x),u.return=g,u;case yr:var C=u._init;return m(g,C(u._payload),x)}if(ca(u)||Gt(u))return u=Xr(u,g.mode,x,null),u.return=g,u;hi(g,u)}return null}function h(g,u,x,C){var N=u!==null?u.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return N!==null?null:l(g,u,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ai:return x.key===N?c(g,u,x,C):null;case ht:return x.key===N?d(g,u,x,C):null;case yr:return N=x._init,h(g,u,N(x._payload),C)}if(ca(x)||Gt(x))return N!==null?null:p(g,u,x,C,null);hi(g,x)}return null}function y(g,u,x,C,N){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(x)||null,l(u,g,""+C,N);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ai:return g=g.get(C.key===null?x:C.key)||null,c(u,g,C,N);case ht:return g=g.get(C.key===null?x:C.key)||null,d(u,g,C,N);case yr:var R=C._init;return y(g,u,x,R(C._payload),N)}if(ca(C)||Gt(C))return g=g.get(x)||null,p(u,g,C,N,null);hi(u,C)}return null}function v(g,u,x,C){for(var N=null,R=null,M=u,A=u=0,U=null;M!==null&&A<x.length;A++){M.index>A?(U=M,M=null):U=M.sibling;var W=h(g,M,x[A],C);if(W===null){M===null&&(M=U);break}e&&M&&W.alternate===null&&n(g,M),u=o(W,u,A),R===null?N=W:R.sibling=W,R=W,M=U}if(A===x.length)return r(g,M),Ae&&Hr(g,A),N;if(M===null){for(;A<x.length;A++)M=m(g,x[A],C),M!==null&&(u=o(M,u,A),R===null?N=M:R.sibling=M,R=M);return Ae&&Hr(g,A),N}for(M=a(g,M);A<x.length;A++)U=y(M,g,A,x[A],C),U!==null&&(e&&U.alternate!==null&&M.delete(U.key===null?A:U.key),u=o(U,u,A),R===null?N=U:R.sibling=U,R=U);return e&&M.forEach(function(ee){return n(g,ee)}),Ae&&Hr(g,A),N}function w(g,u,x,C){var N=Gt(x);if(typeof N!="function")throw Error(_(150));if(x=N.call(x),x==null)throw Error(_(151));for(var R=N=null,M=u,A=u=0,U=null,W=x.next();M!==null&&!W.done;A++,W=x.next()){M.index>A?(U=M,M=null):U=M.sibling;var ee=h(g,M,W.value,C);if(ee===null){M===null&&(M=U);break}e&&M&&ee.alternate===null&&n(g,M),u=o(ee,u,A),R===null?N=ee:R.sibling=ee,R=ee,M=U}if(W.done)return r(g,M),Ae&&Hr(g,A),N;if(M===null){for(;!W.done;A++,W=x.next())W=m(g,W.value,C),W!==null&&(u=o(W,u,A),R===null?N=W:R.sibling=W,R=W);return Ae&&Hr(g,A),N}for(M=a(g,M);!W.done;A++,W=x.next())W=y(M,g,A,W.value,C),W!==null&&(e&&W.alternate!==null&&M.delete(W.key===null?A:W.key),u=o(W,u,A),R===null?N=W:R.sibling=W,R=W);return e&&M.forEach(function(ne){return n(g,ne)}),Ae&&Hr(g,A),N}function j(g,u,x,C){if(typeof x=="object"&&x!==null&&x.type===gt&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ai:e:{for(var N=x.key,R=u;R!==null;){if(R.key===N){if(N=x.type,N===gt){if(R.tag===7){r(g,R.sibling),u=i(R,x.props.children),u.return=g,g=u;break e}}else if(R.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===yr&&Ed(N)===R.type){r(g,R.sibling),u=i(R,x.props),u.ref=na(g,R,x),u.return=g,g=u;break e}r(g,R);break}else n(g,R);R=R.sibling}x.type===gt?(u=Xr(x.props.children,g.mode,C,x.key),u.return=g,g=u):(C=Di(x.type,x.key,x.props,null,g.mode,C),C.ref=na(g,u,x),C.return=g,g=C)}return s(g);case ht:e:{for(R=x.key;u!==null;){if(u.key===R)if(u.tag===4&&u.stateNode.containerInfo===x.containerInfo&&u.stateNode.implementation===x.implementation){r(g,u.sibling),u=i(u,x.children||[]),u.return=g,g=u;break e}else{r(g,u);break}else n(g,u);u=u.sibling}u=hs(x,g.mode,C),u.return=g,g=u}return s(g);case yr:return R=x._init,j(g,u,R(x._payload),C)}if(ca(x))return v(g,u,x,C);if(Gt(x))return w(g,u,x,C);hi(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,u!==null&&u.tag===6?(r(g,u.sibling),u=i(u,x),u.return=g,g=u):(r(g,u),u=ms(x,g.mode,C),u.return=g,g=u),s(g)):r(g,u)}return j}var Pt=Hu(!0),qu=Hu(!1),Ji=Mr(null),Qi=null,Ct=null,Jl=null;function Ql(){Jl=Ct=Qi=null}function Xl(e){var n=Ji.current;Ee(Ji),e._currentValue=n}function Js(e,n,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===r)break;e=e.return}}function zt(e,n){Qi=e,Jl=Ct=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ln=!0),e.firstContext=null)}function Rn(e){var n=e._currentValue;if(Jl!==e)if(e={context:e,memoizedValue:n,next:null},Ct===null){if(Qi===null)throw Error(_(308));Ct=e,Qi.dependencies={lanes:0,firstContext:e}}else Ct=Ct.next=e;return n}var Yr=null;function ec(e){Yr===null?Yr=[e]:Yr.push(e)}function Zu(e,n,r,a){var i=n.interleaved;return i===null?(r.next=r,ec(n)):(r.next=i.next,i.next=r),n.interleaved=r,mr(e,a)}function mr(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var wr=!1;function nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function zr(e,n,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,he&2){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,mr(e,r)}return i=a.interleaved,i===null?(n.next=n,ec(a)):(n.next=i.next,i.next=n),a.interleaved=n,mr(e,r)}function Ai(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,r|=a,n.lanes=r,Bl(e,r)}}function Nd(e,n){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=n:o=o.next=n}else i=o=n;r={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function Xi(e,n,r,a){var i=e.updateQueue;wr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?o=d:s.next=d,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=c))}if(o!==null){var m=i.baseState;s=0,p=d=c=null,l=o;do{var h=l.lane,y=l.eventTime;if((a&h)===h){p!==null&&(p=p.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(h=n,y=r,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(y,m,h);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(y,m,h):v,h==null)break e;m=ze({},m,h);break e;case 2:wr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=y,c=m):p=p.next=y,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(c=m),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);at|=s,e.lanes=s,e.memoizedState=m}}function Ad(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],i=a.callback;if(i!==null){if(a.callback=null,a=r,typeof i!="function")throw Error(_(191,i));i.call(a)}}}var Ha={},ar=Mr(Ha),Ra=Mr(Ha),Oa=Mr(Ha);function Gr(e){if(e===Ha)throw Error(_(174));return e}function rc(e,n){switch(ke(Oa,n),ke(Ra,e),ke(ar,Ha),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:zs(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=zs(n,e)}Ee(ar),ke(ar,n)}function Ft(){Ee(ar),Ee(Ra),Ee(Oa)}function Gu(e){Gr(Oa.current);var n=Gr(ar.current),r=zs(n,e.type);n!==r&&(ke(Ra,e),ke(ar,r))}function tc(e){Ra.current===e&&(Ee(ar),Ee(Ra))}var Ie=Mr(0);function eo(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ls=[];function ac(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var Ii=gr.ReactCurrentDispatcher,cs=gr.ReactCurrentBatchConfig,tt=0,Te=null,_e=null,Ve=null,no=!1,xa=!1,Da=0,a0=0;function Ze(){throw Error(_(321))}function ic(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Wn(e[r],n[r]))return!1;return!0}function oc(e,n,r,a,i,o){if(tt=o,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ii.current=e===null||e.memoizedState===null?l0:c0,e=r(a,i),xa){o=0;do{if(xa=!1,Da=0,25<=o)throw Error(_(301));o+=1,Ve=_e=null,n.updateQueue=null,Ii.current=d0,e=r(a,i)}while(xa)}if(Ii.current=ro,n=_e!==null&&_e.next!==null,tt=0,Ve=_e=Te=null,no=!1,n)throw Error(_(300));return e}function sc(){var e=Da!==0;return Da=0,e}function nr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Te.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function On(){if(_e===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var n=Ve===null?Te.memoizedState:Ve.next;if(n!==null)Ve=n,_e=e;else{if(e===null)throw Error(_(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ve===null?Te.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function La(e,n){return typeof n=="function"?n(e):n}function ds(e){var n=On(),r=n.queue;if(r===null)throw Error(_(311));r.lastRenderedReducer=e;var a=_e,i=a.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}a.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,a=a.baseState;var l=s=null,c=null,d=o;do{var p=d.lane;if((tt&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=m,s=a):c=c.next=m,Te.lanes|=p,at|=p}d=d.next}while(d!==null&&d!==o);c===null?s=a:c.next=l,Wn(a,n.memoizedState)||(ln=!0),n.memoizedState=a,n.baseState=s,n.baseQueue=c,r.lastRenderedState=a}if(e=r.interleaved,e!==null){i=e;do o=i.lane,Te.lanes|=o,at|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function ps(e){var n=On(),r=n.queue;if(r===null)throw Error(_(311));r.lastRenderedReducer=e;var a=r.dispatch,i=r.pending,o=n.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Wn(o,n.memoizedState)||(ln=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),r.lastRenderedState=o}return[o,a]}function Ju(){}function Qu(e,n){var r=Te,a=On(),i=n(),o=!Wn(a.memoizedState,i);if(o&&(a.memoizedState=i,ln=!0),a=a.queue,lc(nf.bind(null,r,a,e),[e]),a.getSnapshot!==n||o||Ve!==null&&Ve.memoizedState.tag&1){if(r.flags|=2048,Pa(9,ef.bind(null,r,a,i,n),void 0,null),Ue===null)throw Error(_(349));tt&30||Xu(r,n,i)}return i}function Xu(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=Te.updateQueue,n===null?(n={lastEffect:null,stores:null},Te.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function ef(e,n,r,a){n.value=r,n.getSnapshot=a,rf(n)&&tf(e)}function nf(e,n,r){return r(function(){rf(n)&&tf(e)})}function rf(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Wn(e,r)}catch{return!0}}function tf(e){var n=mr(e,1);n!==null&&Un(n,e,1,-1)}function Id(e){var n=nr();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:e},n.queue=e,e=e.dispatch=s0.bind(null,Te,e),[n.memoizedState,e]}function Pa(e,n,r,a){return e={tag:e,create:n,destroy:r,deps:a,next:null},n=Te.updateQueue,n===null?(n={lastEffect:null,stores:null},Te.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,n.lastEffect=e)),e}function af(){return On().memoizedState}function Ti(e,n,r,a){var i=nr();Te.flags|=e,i.memoizedState=Pa(1|n,r,void 0,a===void 0?null:a)}function bo(e,n,r,a){var i=On();a=a===void 0?null:a;var o=void 0;if(_e!==null){var s=_e.memoizedState;if(o=s.destroy,a!==null&&ic(a,s.deps)){i.memoizedState=Pa(n,r,o,a);return}}Te.flags|=e,i.memoizedState=Pa(1|n,r,o,a)}function Td(e,n){return Ti(8390656,8,e,n)}function lc(e,n){return bo(2048,8,e,n)}function of(e,n){return bo(4,2,e,n)}function sf(e,n){return bo(4,4,e,n)}function lf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cf(e,n,r){return r=r!=null?r.concat([e]):null,bo(4,4,lf.bind(null,n,e),r)}function cc(){}function df(e,n){var r=On();n=n===void 0?null:n;var a=r.memoizedState;return a!==null&&n!==null&&ic(n,a[1])?a[0]:(r.memoizedState=[e,n],e)}function pf(e,n){var r=On();n=n===void 0?null:n;var a=r.memoizedState;return a!==null&&n!==null&&ic(n,a[1])?a[0]:(e=e(),r.memoizedState=[e,n],e)}function uf(e,n,r){return tt&21?(Wn(r,n)||(r=gu(),Te.lanes|=r,at|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ln=!0),e.memoizedState=r)}function i0(e,n){var r=be;be=r!==0&&4>r?r:4,e(!0);var a=cs.transition;cs.transition={};try{e(!1),n()}finally{be=r,cs.transition=a}}function ff(){return On().memoizedState}function o0(e,n,r){var a=Or(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},mf(e))hf(n,r);else if(r=Zu(e,n,r,a),r!==null){var i=nn();Un(r,e,a,i),gf(r,n,a)}}function s0(e,n,r){var a=Or(e),i={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(mf(e))hf(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,Wn(l,s)){var c=n.interleaved;c===null?(i.next=i,ec(n)):(i.next=c.next,c.next=i),n.interleaved=i;return}}catch{}finally{}r=Zu(e,n,i,a),r!==null&&(i=nn(),Un(r,e,a,i),gf(r,n,a))}}function mf(e){var n=e.alternate;return e===Te||n!==null&&n===Te}function hf(e,n){xa=no=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function gf(e,n,r){if(r&4194240){var a=n.lanes;a&=e.pendingLanes,r|=a,n.lanes=r,Bl(e,r)}}var ro={readContext:Rn,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},l0={readContext:Rn,useCallback:function(e,n){return nr().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:Td,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,Ti(4194308,4,lf.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Ti(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ti(4,2,e,n)},useMemo:function(e,n){var r=nr();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var a=nr();return n=r!==void 0?r(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=o0.bind(null,Te,e),[a.memoizedState,e]},useRef:function(e){var n=nr();return e={current:e},n.memoizedState=e},useState:Id,useDebugValue:cc,useDeferredValue:function(e){return nr().memoizedState=e},useTransition:function(){var e=Id(!1),n=e[0];return e=i0.bind(null,e[1]),nr().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var a=Te,i=nr();if(Ae){if(r===void 0)throw Error(_(407));r=r()}else{if(r=n(),Ue===null)throw Error(_(349));tt&30||Xu(a,n,r)}i.memoizedState=r;var o={value:r,getSnapshot:n};return i.queue=o,Td(nf.bind(null,a,o,e),[e]),a.flags|=2048,Pa(9,ef.bind(null,a,o,r,n),void 0,null),r},useId:function(){var e=nr(),n=Ue.identifierPrefix;if(Ae){var r=dr,a=cr;r=(a&~(1<<32-Vn(a)-1)).toString(32)+r,n=":"+n+"R"+r,r=Da++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=a0++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},c0={readContext:Rn,useCallback:df,useContext:Rn,useEffect:lc,useImperativeHandle:cf,useInsertionEffect:of,useLayoutEffect:sf,useMemo:pf,useReducer:ds,useRef:af,useState:function(){return ds(La)},useDebugValue:cc,useDeferredValue:function(e){var n=On();return uf(n,_e.memoizedState,e)},useTransition:function(){var e=ds(La)[0],n=On().memoizedState;return[e,n]},useMutableSource:Ju,useSyncExternalStore:Qu,useId:ff,unstable_isNewReconciler:!1},d0={readContext:Rn,useCallback:df,useContext:Rn,useEffect:lc,useImperativeHandle:cf,useInsertionEffect:of,useLayoutEffect:sf,useMemo:pf,useReducer:ps,useRef:af,useState:function(){return ps(La)},useDebugValue:cc,useDeferredValue:function(e){var n=On();return _e===null?n.memoizedState=e:uf(n,_e.memoizedState,e)},useTransition:function(){var e=ps(La)[0],n=On().memoizedState;return[e,n]},useMutableSource:Ju,useSyncExternalStore:Qu,useId:ff,unstable_isNewReconciler:!1};function Fn(e,n){if(e&&e.defaultProps){n=ze({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function Qs(e,n,r,a){n=e.memoizedState,r=r(a,n),r=r==null?n:ze({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var yo={isMounted:function(e){return(e=e._reactInternals)?lt(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var a=nn(),i=Or(e),o=pr(a,i);o.payload=n,r!=null&&(o.callback=r),n=zr(e,o,i),n!==null&&(Un(n,e,i,a),Ai(n,e,i))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var a=nn(),i=Or(e),o=pr(a,i);o.tag=1,o.payload=n,r!=null&&(o.callback=r),n=zr(e,o,i),n!==null&&(Un(n,e,i,a),Ai(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=nn(),a=Or(e),i=pr(r,a);i.tag=2,n!=null&&(i.callback=n),n=zr(e,i,a),n!==null&&(Un(n,e,a,r),Ai(n,e,a))}};function zd(e,n,r,a,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,s):n.prototype&&n.prototype.isPureReactComponent?!Aa(r,a)||!Aa(i,o):!0}function xf(e,n,r){var a=!1,i=Fr,o=n.contextType;return typeof o=="object"&&o!==null?o=Rn(o):(i=dn(n)?nt:Qe.current,a=n.contextTypes,o=(a=a!=null)?Dt(e,i):Fr),n=new n(r,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=yo,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Rd(e,n,r,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,a),n.state!==e&&yo.enqueueReplaceState(n,n.state,null)}function Xs(e,n,r,a){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},nc(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Rn(o):(o=dn(n)?nt:Qe.current,i.context=Dt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Qs(e,n,o,r),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&yo.enqueueReplaceState(i,i.state,null),Xi(e,r,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _t(e,n){try{var r="",a=n;do r+=_h(a),a=a.return;while(a);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function us(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function el(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var p0=typeof WeakMap=="function"?WeakMap:Map;function vf(e,n,r){r=pr(-1,r),r.tag=3,r.payload={element:null};var a=n.value;return r.callback=function(){ao||(ao=!0,dl=a),el(e,n)},r}function bf(e,n,r){r=pr(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;r.payload=function(){return a(i)},r.callback=function(){el(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){el(e,n),typeof a!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),r}function Od(e,n,r){var a=e.pingCache;if(a===null){a=e.pingCache=new p0;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(r)||(i.add(r),e=S0.bind(null,e,n,r),n.then(e,e))}function Dd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ld(e,n,r,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=pr(-1,1),n.tag=2,zr(r,n,1))),r.lanes|=1),e)}var u0=gr.ReactCurrentOwner,ln=!1;function en(e,n,r,a){n.child=e===null?qu(n,null,r,a):Pt(n,e.child,r,a)}function Pd(e,n,r,a,i){r=r.render;var o=n.ref;return zt(n,i),a=oc(e,n,r,a,o,i),r=sc(),e!==null&&!ln?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,hr(e,n,i)):(Ae&&r&&Zl(n),n.flags|=1,en(e,n,a,i),n.child)}function Fd(e,n,r,a,i){if(e===null){var o=r.type;return typeof o=="function"&&!xc(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=o,yf(e,n,o,a,i)):(e=Di(r.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:Aa,r(s,a)&&e.ref===n.ref)return hr(e,n,i)}return n.flags|=1,e=Dr(o,a),e.ref=n.ref,e.return=n,n.child=e}function yf(e,n,r,a,i){if(e!==null){var o=e.memoizedProps;if(Aa(o,a)&&e.ref===n.ref)if(ln=!1,n.pendingProps=a=o,(e.lanes&i)!==0)e.flags&131072&&(ln=!0);else return n.lanes=e.lanes,hr(e,n,i)}return nl(e,n,r,a,i)}function wf(e,n,r){var a=n.pendingProps,i=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Et,gn),gn|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ke(Et,gn),gn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:r,ke(Et,gn),gn|=a}else o!==null?(a=o.baseLanes|r,n.memoizedState=null):a=r,ke(Et,gn),gn|=a;return en(e,n,i,r),n.child}function jf(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function nl(e,n,r,a,i){var o=dn(r)?nt:Qe.current;return o=Dt(n,o),zt(n,i),r=oc(e,n,r,a,o,i),a=sc(),e!==null&&!ln?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,hr(e,n,i)):(Ae&&a&&Zl(n),n.flags|=1,en(e,n,r,i),n.child)}function _d(e,n,r,a,i){if(dn(r)){var o=!0;Zi(n)}else o=!1;if(zt(n,i),n.stateNode===null)zi(e,n),xf(n,r,a),Xs(n,r,a,i),a=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var c=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Rn(d):(d=dn(r)?nt:Qe.current,d=Dt(n,d));var p=r.getDerivedStateFromProps,m=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==a||c!==d)&&Rd(n,s,a,d),wr=!1;var h=n.memoizedState;s.state=h,Xi(n,a,s,i),c=n.memoizedState,l!==a||h!==c||cn.current||wr?(typeof p=="function"&&(Qs(n,r,p,a),c=n.memoizedState),(l=wr||zd(n,r,l,a,h,c,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=c),s.props=a,s.state=c,s.context=d,a=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,Yu(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:Fn(n.type,l),s.props=d,m=n.pendingProps,h=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=Rn(c):(c=dn(r)?nt:Qe.current,c=Dt(n,c));var y=r.getDerivedStateFromProps;(p=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||h!==c)&&Rd(n,s,a,c),wr=!1,h=n.memoizedState,s.state=h,Xi(n,a,s,i);var v=n.memoizedState;l!==m||h!==v||cn.current||wr?(typeof y=="function"&&(Qs(n,r,y,a),v=n.memoizedState),(d=wr||zd(n,r,d,a,h,v,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,v,c)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=v),s.props=a,s.state=v,s.context=c,a=d):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),a=!1)}return rl(e,n,r,a,o,i)}function rl(e,n,r,a,i,o){jf(e,n);var s=(n.flags&128)!==0;if(!a&&!s)return i&&kd(n,r,!1),hr(e,n,o);a=n.stateNode,u0.current=n;var l=s&&typeof r.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&s?(n.child=Pt(n,e.child,null,o),n.child=Pt(n,null,l,o)):en(e,n,l,o),n.memoizedState=a.state,i&&kd(n,r,!0),n.child}function kf(e){var n=e.stateNode;n.pendingContext?jd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&jd(e,n.context,!1),rc(e,n.containerInfo)}function Md(e,n,r,a,i){return Lt(),Gl(i),n.flags|=256,en(e,n,r,a),n.child}var tl={dehydrated:null,treeContext:null,retryLane:0};function al(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cf(e,n,r){var a=n.pendingProps,i=Ie.current,o=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ke(Ie,i&1),e===null)return Gs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=a.children,e=a.fallback,o?(a=n.mode,o=n.child,s={mode:"hidden",children:s},!(a&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ko(s,a,0,null),e=Xr(e,a,r,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=al(r),n.memoizedState=tl,e):dc(n,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return f0(e,n,s,a,l,i,r);if(o){o=a.fallback,s=n.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:a.children};return!(s&1)&&n.child!==i?(a=n.child,a.childLanes=0,a.pendingProps=c,n.deletions=null):(a=Dr(i,c),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Dr(l,o):(o=Xr(o,s,r,null),o.flags|=2),o.return=n,a.return=n,a.sibling=o,n.child=a,a=o,o=n.child,s=e.child.memoizedState,s=s===null?al(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,n.memoizedState=tl,a}return o=e.child,e=o.sibling,a=Dr(o,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=r),a.return=n,a.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=a,n.memoizedState=null,a}function dc(e,n){return n=ko({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function gi(e,n,r,a){return a!==null&&Gl(a),Pt(n,e.child,null,r),e=dc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function f0(e,n,r,a,i,o,s){if(r)return n.flags&256?(n.flags&=-257,a=us(Error(_(422))),gi(e,n,s,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=a.fallback,i=n.mode,a=ko({mode:"visible",children:a.children},i,0,null),o=Xr(o,i,s,null),o.flags|=2,a.return=n,o.return=n,a.sibling=o,n.child=a,n.mode&1&&Pt(n,e.child,null,s),n.child.memoizedState=al(s),n.memoizedState=tl,o);if(!(n.mode&1))return gi(e,n,s,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,o=Error(_(419)),a=us(o,a,void 0),gi(e,n,s,a)}if(l=(s&e.childLanes)!==0,ln||l){if(a=Ue,a!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,mr(e,i),Un(a,e,i,-1))}return gc(),a=us(Error(_(421))),gi(e,n,s,a)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=E0.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,xn=Tr(i.nextSibling),vn=n,Ae=!0,Bn=null,e!==null&&(An[In++]=cr,An[In++]=dr,An[In++]=rt,cr=e.id,dr=e.overflow,rt=n),n=dc(n,a.children),n.flags|=4096,n)}function Bd(e,n,r){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Js(e.return,n,r)}function fs(e,n,r,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=r,o.tailMode=i)}function Sf(e,n,r){var a=n.pendingProps,i=a.revealOrder,o=a.tail;if(en(e,n,a.children,r),a=Ie.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bd(e,r,n);else if(e.tag===19)Bd(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ke(Ie,a),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(r=n.child,i=null;r!==null;)e=r.alternate,e!==null&&eo(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=n.child,n.child=null):(i=r.sibling,r.sibling=null),fs(n,!1,i,r,o);break;case"backwards":for(r=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&eo(e)===null){n.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}fs(n,!0,r,null,o);break;case"together":fs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function hr(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),at|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(_(153));if(n.child!==null){for(e=n.child,r=Dr(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Dr(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function m0(e,n,r){switch(n.tag){case 3:kf(n),Lt();break;case 5:Gu(n);break;case 1:dn(n.type)&&Zi(n);break;case 4:rc(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,i=n.memoizedProps.value;ke(Ji,a._currentValue),a._currentValue=i;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ke(Ie,Ie.current&1),n.flags|=128,null):r&n.child.childLanes?Cf(e,n,r):(ke(Ie,Ie.current&1),e=hr(e,n,r),e!==null?e.sibling:null);ke(Ie,Ie.current&1);break;case 19:if(a=(r&n.childLanes)!==0,e.flags&128){if(a)return Sf(e,n,r);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Ie,Ie.current),a)break;return null;case 22:case 23:return n.lanes=0,wf(e,n,r)}return hr(e,n,r)}var Ef,il,Nf,Af;Ef=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};il=function(){};Nf=function(e,n,r,a){var i=e.memoizedProps;if(i!==a){e=n.stateNode,Gr(ar.current);var o=null;switch(r){case"input":i=Ns(e,i),a=Ns(e,a),o=[];break;case"select":i=ze({},i,{value:void 0}),a=ze({},a,{value:void 0}),o=[];break;case"textarea":i=Ts(e,i),a=Ts(e,a),o=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Hi)}Rs(r,a);var s;r=null;for(d in i)if(!a.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(wa.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in a){var c=a[d];if(l=i!=null?i[d]:void 0,a.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(o||(o=[]),o.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(wa.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Se("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}r&&(o=o||[]).push("style",r);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};Af=function(e,n,r,a){r!==a&&(n.flags|=4)};function ra(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(n)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=r,n}function h0(e,n,r){var a=n.pendingProps;switch(Yl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return dn(n.type)&&qi(),Ye(n),null;case 3:return a=n.stateNode,Ft(),Ee(cn),Ee(Qe),ac(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(mi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Bn!==null&&(fl(Bn),Bn=null))),il(e,n),Ye(n),null;case 5:tc(n);var i=Gr(Oa.current);if(r=n.type,e!==null&&n.stateNode!=null)Nf(e,n,r,a,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(_(166));return Ye(n),null}if(e=Gr(ar.current),mi(n)){a=n.stateNode,r=n.type;var o=n.memoizedProps;switch(a[rr]=n,a[za]=o,e=(n.mode&1)!==0,r){case"dialog":Se("cancel",a),Se("close",a);break;case"iframe":case"object":case"embed":Se("load",a);break;case"video":case"audio":for(i=0;i<pa.length;i++)Se(pa[i],a);break;case"source":Se("error",a);break;case"img":case"image":case"link":Se("error",a),Se("load",a);break;case"details":Se("toggle",a);break;case"input":Yc(a,o),Se("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},Se("invalid",a);break;case"textarea":Jc(a,o),Se("invalid",a)}Rs(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?a.textContent!==l&&(o.suppressHydrationWarning!==!0&&fi(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&fi(a.textContent,l,e),i=["children",""+l]):wa.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Se("scroll",a)}switch(r){case"input":ii(a),Gc(a,o,!0);break;case"textarea":ii(a),Qc(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=Hi)}a=i,n.updateQueue=a,a!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(r,{is:a.is}):(e=s.createElement(r),r==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,r),e[rr]=n,e[za]=a,Ef(e,n,!1,!1),n.stateNode=e;e:{switch(s=Os(r,a),r){case"dialog":Se("cancel",e),Se("close",e),i=a;break;case"iframe":case"object":case"embed":Se("load",e),i=a;break;case"video":case"audio":for(i=0;i<pa.length;i++)Se(pa[i],e);i=a;break;case"source":Se("error",e),i=a;break;case"img":case"image":case"link":Se("error",e),Se("load",e),i=a;break;case"details":Se("toggle",e),i=a;break;case"input":Yc(e,a),i=Ns(e,a),Se("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=ze({},a,{value:void 0}),Se("invalid",e);break;case"textarea":Jc(e,a),i=Ts(e,a),Se("invalid",e);break;default:i=a}Rs(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?au(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ru(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&ja(e,c):typeof c=="number"&&ja(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wa.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Se("scroll",e):c!=null&&Dl(e,o,c,s))}switch(r){case"input":ii(e),Gc(e,a,!1);break;case"textarea":ii(e),Qc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Pr(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?Nt(e,!!a.multiple,o,!1):a.defaultValue!=null&&Nt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hi)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ye(n),null;case 6:if(e&&n.stateNode!=null)Af(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(_(166));if(r=Gr(Oa.current),Gr(ar.current),mi(n)){if(a=n.stateNode,r=n.memoizedProps,a[rr]=n,(o=a.nodeValue!==r)&&(e=vn,e!==null))switch(e.tag){case 3:fi(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fi(a.nodeValue,r,(e.mode&1)!==0)}o&&(n.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[rr]=n,n.stateNode=a}return Ye(n),null;case 13:if(Ee(Ie),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&xn!==null&&n.mode&1&&!(n.flags&128))Ku(),Lt(),n.flags|=98560,o=!1;else if(o=mi(n),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[rr]=n}else Lt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ye(n),o=!1}else Bn!==null&&(fl(Bn),Bn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||Ie.current&1?Me===0&&(Me=3):gc())),n.updateQueue!==null&&(n.flags|=4),Ye(n),null);case 4:return Ft(),il(e,n),e===null&&Ia(n.stateNode.containerInfo),Ye(n),null;case 10:return Xl(n.type._context),Ye(n),null;case 17:return dn(n.type)&&qi(),Ye(n),null;case 19:if(Ee(Ie),o=n.memoizedState,o===null)return Ye(n),null;if(a=(n.flags&128)!==0,s=o.rendering,s===null)if(a)ra(o,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=eo(e),s!==null){for(n.flags|=128,ra(o,!1),a=s.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=r,r=n.child;r!==null;)o=r,e=a,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ke(Ie,Ie.current&1|2),n.child}e=e.sibling}o.tail!==null&&Le()>Mt&&(n.flags|=128,a=!0,ra(o,!1),n.lanes=4194304)}else{if(!a)if(e=eo(s),e!==null){if(n.flags|=128,a=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),ra(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ae)return Ye(n),null}else 2*Le()-o.renderingStartTime>Mt&&r!==1073741824&&(n.flags|=128,a=!0,ra(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(r=o.last,r!==null?r.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Le(),n.sibling=null,r=Ie.current,ke(Ie,a?r&1|2:r&1),n):(Ye(n),null);case 22:case 23:return hc(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?gn&1073741824&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),null;case 24:return null;case 25:return null}throw Error(_(156,n.tag))}function g0(e,n){switch(Yl(n),n.tag){case 1:return dn(n.type)&&qi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ft(),Ee(cn),Ee(Qe),ac(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return tc(n),null;case 13:if(Ee(Ie),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(_(340));Lt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ee(Ie),null;case 4:return Ft(),null;case 10:return Xl(n.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var xi=!1,Ge=!1,x0=typeof WeakSet=="function"?WeakSet:Set,Z=null;function St(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Oe(e,n,a)}else r.current=null}function ol(e,n,r){try{r()}catch(a){Oe(e,n,a)}}var Vd=!1;function v0(e,n){if(Ws=Wi,e=Ru(),ql(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,d=0,p=0,m=e,h=null;n:for(;;){for(var y;m!==r||i!==0&&m.nodeType!==3||(l=s+i),m!==o||a!==0&&m.nodeType!==3||(c=s+a),m.nodeType===3&&(s+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break n;if(h===r&&++d===i&&(l=s),h===o&&++p===a&&(c=s),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for($s={focusedElem:e,selectionRange:r},Wi=!1,Z=n;Z!==null;)if(n=Z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Z=e;else for(;Z!==null;){n=Z;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,j=v.memoizedState,g=n.stateNode,u=g.getSnapshotBeforeUpdate(n.elementType===n.type?w:Fn(n.type,w),j);g.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var x=n.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(C){Oe(n,n.return,C)}if(e=n.sibling,e!==null){e.return=n.return,Z=e;break}Z=n.return}return v=Vd,Vd=!1,v}function va(e,n,r){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ol(n,r,o)}i=i.next}while(i!==a)}}function wo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==n)}}function sl(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function If(e){var n=e.alternate;n!==null&&(e.alternate=null,If(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[rr],delete n[za],delete n[qs],delete n[e0],delete n[n0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tf(e){return e.tag===5||e.tag===3||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,n,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Hi));else if(a!==4&&(e=e.child,e!==null))for(ll(e,n,r),e=e.sibling;e!==null;)ll(e,n,r),e=e.sibling}function cl(e,n,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(cl(e,n,r),e=e.sibling;e!==null;)cl(e,n,r),e=e.sibling}var $e=null,_n=!1;function xr(e,n,r){for(r=r.child;r!==null;)zf(e,n,r),r=r.sibling}function zf(e,n,r){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(fo,r)}catch{}switch(r.tag){case 5:Ge||St(r,n);case 6:var a=$e,i=_n;$e=null,xr(e,n,r),$e=a,_n=i,$e!==null&&(_n?(e=$e,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):$e.removeChild(r.stateNode));break;case 18:$e!==null&&(_n?(e=$e,r=r.stateNode,e.nodeType===8?os(e.parentNode,r):e.nodeType===1&&os(e,r),Ea(e)):os($e,r.stateNode));break;case 4:a=$e,i=_n,$e=r.stateNode.containerInfo,_n=!0,xr(e,n,r),$e=a,_n=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ol(r,n,s),i=i.next}while(i!==a)}xr(e,n,r);break;case 1:if(!Ge&&(St(r,n),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(l){Oe(r,n,l)}xr(e,n,r);break;case 21:xr(e,n,r);break;case 22:r.mode&1?(Ge=(a=Ge)||r.memoizedState!==null,xr(e,n,r),Ge=a):xr(e,n,r);break;default:xr(e,n,r)}}function Wd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new x0),n.forEach(function(a){var i=N0.bind(null,e,a);r.has(a)||(r.add(a),a.then(i,i))})}}function Pn(e,n){var r=n.deletions;if(r!==null)for(var a=0;a<r.length;a++){var i=r[a];try{var o=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,_n=!1;break e;case 3:$e=l.stateNode.containerInfo,_n=!0;break e;case 4:$e=l.stateNode.containerInfo,_n=!0;break e}l=l.return}if($e===null)throw Error(_(160));zf(o,s,i),$e=null,_n=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Oe(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Rf(n,e),n=n.sibling}function Rf(e,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pn(n,e),Qn(e),a&4){try{va(3,e,e.return),wo(3,e)}catch(w){Oe(e,e.return,w)}try{va(5,e,e.return)}catch(w){Oe(e,e.return,w)}}break;case 1:Pn(n,e),Qn(e),a&512&&r!==null&&St(r,r.return);break;case 5:if(Pn(n,e),Qn(e),a&512&&r!==null&&St(r,r.return),e.flags&32){var i=e.stateNode;try{ja(i,"")}catch(w){Oe(e,e.return,w)}}if(a&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Xp(i,o),Os(l,s);var d=Os(l,o);for(s=0;s<c.length;s+=2){var p=c[s],m=c[s+1];p==="style"?au(i,m):p==="dangerouslySetInnerHTML"?ru(i,m):p==="children"?ja(i,m):Dl(i,p,m,d)}switch(l){case"input":As(i,o);break;case"textarea":eu(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Nt(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Nt(i,!!o.multiple,o.defaultValue,!0):Nt(i,!!o.multiple,o.multiple?[]:"",!1))}i[za]=o}catch(w){Oe(e,e.return,w)}}break;case 6:if(Pn(n,e),Qn(e),a&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Oe(e,e.return,w)}}break;case 3:if(Pn(n,e),Qn(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Ea(n.containerInfo)}catch(w){Oe(e,e.return,w)}break;case 4:Pn(n,e),Qn(e);break;case 13:Pn(n,e),Qn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(fc=Le())),a&4&&Wd(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(Ge=(d=Ge)||p,Pn(n,e),Ge=d):Pn(n,e),Qn(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(Z=e,p=e.child;p!==null;){for(m=Z=p;Z!==null;){switch(h=Z,y=h.child,h.tag){case 0:case 11:case 14:case 15:va(4,h,h.return);break;case 1:St(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){a=h,r=h.return;try{n=a,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(w){Oe(a,r,w)}}break;case 5:St(h,h.return);break;case 22:if(h.memoizedState!==null){Kd(m);continue}}y!==null?(y.return=h,Z=y):Kd(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,c=m.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=tu("display",s))}catch(w){Oe(e,e.return,w)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(w){Oe(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pn(n,e),Qn(e),a&4&&Wd(e);break;case 21:break;default:Pn(n,e),Qn(e)}}function Qn(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(Tf(r)){var a=r;break e}r=r.return}throw Error(_(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(ja(i,""),a.flags&=-33);var o=Ud(e);cl(e,o,i);break;case 3:case 4:var s=a.stateNode.containerInfo,l=Ud(e);ll(e,l,s);break;default:throw Error(_(161))}}catch(c){Oe(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function b0(e,n,r){Z=e,Of(e)}function Of(e,n,r){for(var a=(e.mode&1)!==0;Z!==null;){var i=Z,o=i.child;if(i.tag===22&&a){var s=i.memoizedState!==null||xi;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ge;l=xi;var d=Ge;if(xi=s,(Ge=c)&&!d)for(Z=i;Z!==null;)s=Z,c=s.child,s.tag===22&&s.memoizedState!==null?Hd(i):c!==null?(c.return=s,Z=c):Hd(i);for(;o!==null;)Z=o,Of(o),o=o.sibling;Z=i,xi=l,Ge=d}$d(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Z=o):$d(e)}}function $d(e){for(;Z!==null;){var n=Z;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ge||wo(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Ge)if(r===null)a.componentDidMount();else{var i=n.elementType===n.type?r.memoizedProps:Fn(n.type,r.memoizedProps);a.componentDidUpdate(i,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Ad(n,o,a);break;case 3:var s=n.updateQueue;if(s!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}Ad(n,s,r)}break;case 5:var l=n.stateNode;if(r===null&&n.flags&4){r=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Ea(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ge||n.flags&512&&sl(n)}catch(h){Oe(n,n.return,h)}}if(n===e){Z=null;break}if(r=n.sibling,r!==null){r.return=n.return,Z=r;break}Z=n.return}}function Kd(e){for(;Z!==null;){var n=Z;if(n===e){Z=null;break}var r=n.sibling;if(r!==null){r.return=n.return,Z=r;break}Z=n.return}}function Hd(e){for(;Z!==null;){var n=Z;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{wo(4,n)}catch(c){Oe(n,r,c)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var i=n.return;try{a.componentDidMount()}catch(c){Oe(n,i,c)}}var o=n.return;try{sl(n)}catch(c){Oe(n,o,c)}break;case 5:var s=n.return;try{sl(n)}catch(c){Oe(n,s,c)}}}catch(c){Oe(n,n.return,c)}if(n===e){Z=null;break}var l=n.sibling;if(l!==null){l.return=n.return,Z=l;break}Z=n.return}}var y0=Math.ceil,to=gr.ReactCurrentDispatcher,pc=gr.ReactCurrentOwner,zn=gr.ReactCurrentBatchConfig,he=0,Ue=null,Fe=null,Ke=0,gn=0,Et=Mr(0),Me=0,Fa=null,at=0,jo=0,uc=0,ba=null,sn=null,fc=0,Mt=1/0,sr=null,ao=!1,dl=null,Rr=null,vi=!1,Sr=null,io=0,ya=0,pl=null,Ri=-1,Oi=0;function nn(){return he&6?Le():Ri!==-1?Ri:Ri=Le()}function Or(e){return e.mode&1?he&2&&Ke!==0?Ke&-Ke:t0.transition!==null?(Oi===0&&(Oi=gu()),Oi):(e=be,e!==0||(e=window.event,e=e===void 0?16:ku(e.type)),e):1}function Un(e,n,r,a){if(50<ya)throw ya=0,pl=null,Error(_(185));Wa(e,r,a),(!(he&2)||e!==Ue)&&(e===Ue&&(!(he&2)&&(jo|=r),Me===4&&kr(e,Ke)),pn(e,a),r===1&&he===0&&!(n.mode&1)&&(Mt=Le()+500,vo&&Br()))}function pn(e,n){var r=e.callbackNode;tg(e,n);var a=Ui(e,e===Ue?Ke:0);if(a===0)r!==null&&nd(r),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(r!=null&&nd(r),n===1)e.tag===0?r0(qd.bind(null,e)):Uu(qd.bind(null,e)),Qg(function(){!(he&6)&&Br()}),r=null;else{switch(xu(a)){case 1:r=Ml;break;case 4:r=mu;break;case 16:r=Vi;break;case 536870912:r=hu;break;default:r=Vi}r=Vf(r,Df.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function Df(e,n){if(Ri=-1,Oi=0,he&6)throw Error(_(327));var r=e.callbackNode;if(Rt()&&e.callbackNode!==r)return null;var a=Ui(e,e===Ue?Ke:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=oo(e,a);else{n=a;var i=he;he|=2;var o=Pf();(Ue!==e||Ke!==n)&&(sr=null,Mt=Le()+500,Qr(e,n));do try{k0();break}catch(l){Lf(e,l)}while(!0);Ql(),to.current=o,he=i,Fe!==null?n=0:(Ue=null,Ke=0,n=Me)}if(n!==0){if(n===2&&(i=_s(e),i!==0&&(a=i,n=ul(e,i))),n===1)throw r=Fa,Qr(e,0),kr(e,a),pn(e,Le()),r;if(n===6)kr(e,a);else{if(i=e.current.alternate,!(a&30)&&!w0(i)&&(n=oo(e,a),n===2&&(o=_s(e),o!==0&&(a=o,n=ul(e,o))),n===1))throw r=Fa,Qr(e,0),kr(e,a),pn(e,Le()),r;switch(e.finishedWork=i,e.finishedLanes=a,n){case 0:case 1:throw Error(_(345));case 2:qr(e,sn,sr);break;case 3:if(kr(e,a),(a&130023424)===a&&(n=fc+500-Le(),10<n)){if(Ui(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){nn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hs(qr.bind(null,e,sn,sr),n);break}qr(e,sn,sr);break;case 4:if(kr(e,a),(a&4194240)===a)break;for(n=e.eventTimes,i=-1;0<a;){var s=31-Vn(a);o=1<<s,s=n[s],s>i&&(i=s),a&=~o}if(a=i,a=Le()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*y0(a/1960))-a,10<a){e.timeoutHandle=Hs(qr.bind(null,e,sn,sr),a);break}qr(e,sn,sr);break;case 5:qr(e,sn,sr);break;default:throw Error(_(329))}}}return pn(e,Le()),e.callbackNode===r?Df.bind(null,e):null}function ul(e,n){var r=ba;return e.current.memoizedState.isDehydrated&&(Qr(e,n).flags|=256),e=oo(e,n),e!==2&&(n=sn,sn=r,n!==null&&fl(n)),e}function fl(e){sn===null?sn=e:sn.push.apply(sn,e)}function w0(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var i=r[a],o=i.getSnapshot;i=i.value;try{if(!Wn(o(),i))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function kr(e,n){for(n&=~uc,n&=~jo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-Vn(n),a=1<<r;e[r]=-1,n&=~a}}function qd(e){if(he&6)throw Error(_(327));Rt();var n=Ui(e,0);if(!(n&1))return pn(e,Le()),null;var r=oo(e,n);if(e.tag!==0&&r===2){var a=_s(e);a!==0&&(n=a,r=ul(e,a))}if(r===1)throw r=Fa,Qr(e,0),kr(e,n),pn(e,Le()),r;if(r===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,qr(e,sn,sr),pn(e,Le()),null}function mc(e,n){var r=he;he|=1;try{return e(n)}finally{he=r,he===0&&(Mt=Le()+500,vo&&Br())}}function it(e){Sr!==null&&Sr.tag===0&&!(he&6)&&Rt();var n=he;he|=1;var r=zn.transition,a=be;try{if(zn.transition=null,be=1,e)return e()}finally{be=a,zn.transition=r,he=n,!(he&6)&&Br()}}function hc(){gn=Et.current,Ee(Et)}function Qr(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Jg(r)),Fe!==null)for(r=Fe.return;r!==null;){var a=r;switch(Yl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&qi();break;case 3:Ft(),Ee(cn),Ee(Qe),ac();break;case 5:tc(a);break;case 4:Ft();break;case 13:Ee(Ie);break;case 19:Ee(Ie);break;case 10:Xl(a.type._context);break;case 22:case 23:hc()}r=r.return}if(Ue=e,Fe=e=Dr(e.current,null),Ke=gn=n,Me=0,Fa=null,uc=jo=at=0,sn=ba=null,Yr!==null){for(n=0;n<Yr.length;n++)if(r=Yr[n],a=r.interleaved,a!==null){r.interleaved=null;var i=a.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,a.next=s}r.pending=a}Yr=null}return e}function Lf(e,n){do{var r=Fe;try{if(Ql(),Ii.current=ro,no){for(var a=Te.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}no=!1}if(tt=0,Ve=_e=Te=null,xa=!1,Da=0,pc.current=null,r===null||r.return===null){Me=1,Fa=n,Fe=null;break}e:{var o=e,s=r.return,l=r,c=n;if(n=Ke,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Dd(s);if(y!==null){y.flags&=-257,Ld(y,s,l,o,n),y.mode&1&&Od(o,d,n),n=y,c=d;var v=n.updateQueue;if(v===null){var w=new Set;w.add(c),n.updateQueue=w}else v.add(c);break e}else{if(!(n&1)){Od(o,d,n),gc();break e}c=Error(_(426))}}else if(Ae&&l.mode&1){var j=Dd(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ld(j,s,l,o,n),Gl(_t(c,l));break e}}o=c=_t(c,l),Me!==4&&(Me=2),ba===null?ba=[o]:ba.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var g=vf(o,c,n);Nd(o,g);break e;case 1:l=c;var u=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Rr===null||!Rr.has(x)))){o.flags|=65536,n&=-n,o.lanes|=n;var C=bf(o,l,n);Nd(o,C);break e}}o=o.return}while(o!==null)}_f(r)}catch(N){n=N,Fe===r&&r!==null&&(Fe=r=r.return);continue}break}while(!0)}function Pf(){var e=to.current;return to.current=ro,e===null?ro:e}function gc(){(Me===0||Me===3||Me===2)&&(Me=4),Ue===null||!(at&268435455)&&!(jo&268435455)||kr(Ue,Ke)}function oo(e,n){var r=he;he|=2;var a=Pf();(Ue!==e||Ke!==n)&&(sr=null,Qr(e,n));do try{j0();break}catch(i){Lf(e,i)}while(!0);if(Ql(),he=r,to.current=a,Fe!==null)throw Error(_(261));return Ue=null,Ke=0,Me}function j0(){for(;Fe!==null;)Ff(Fe)}function k0(){for(;Fe!==null&&!Zh();)Ff(Fe)}function Ff(e){var n=Bf(e.alternate,e,gn);e.memoizedProps=e.pendingProps,n===null?_f(e):Fe=n,pc.current=null}function _f(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=g0(r,n),r!==null){r.flags&=32767,Fe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Fe=null;return}}else if(r=h0(r,n,gn),r!==null){Fe=r;return}if(n=n.sibling,n!==null){Fe=n;return}Fe=n=e}while(n!==null);Me===0&&(Me=5)}function qr(e,n,r){var a=be,i=zn.transition;try{zn.transition=null,be=1,C0(e,n,r,a)}finally{zn.transition=i,be=a}return null}function C0(e,n,r,a){do Rt();while(Sr!==null);if(he&6)throw Error(_(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(ag(e,o),e===Ue&&(Fe=Ue=null,Ke=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||vi||(vi=!0,Vf(Vi,function(){return Rt(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=zn.transition,zn.transition=null;var s=be;be=1;var l=he;he|=4,pc.current=null,v0(e,r),Rf(r,e),$g($s),Wi=!!Ws,$s=Ws=null,e.current=r,b0(r),Yh(),he=l,be=s,zn.transition=o}else e.current=r;if(vi&&(vi=!1,Sr=e,io=i),o=e.pendingLanes,o===0&&(Rr=null),Qh(r.stateNode),pn(e,Le()),n!==null)for(a=e.onRecoverableError,r=0;r<n.length;r++)i=n[r],a(i.value,{componentStack:i.stack,digest:i.digest});if(ao)throw ao=!1,e=dl,dl=null,e;return io&1&&e.tag!==0&&Rt(),o=e.pendingLanes,o&1?e===pl?ya++:(ya=0,pl=e):ya=0,Br(),null}function Rt(){if(Sr!==null){var e=xu(io),n=zn.transition,r=be;try{if(zn.transition=null,be=16>e?16:e,Sr===null)var a=!1;else{if(e=Sr,Sr=null,io=0,he&6)throw Error(_(331));var i=he;for(he|=4,Z=e.current;Z!==null;){var o=Z,s=o.child;if(Z.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(Z=d;Z!==null;){var p=Z;switch(p.tag){case 0:case 11:case 15:va(8,p,o)}var m=p.child;if(m!==null)m.return=p,Z=m;else for(;Z!==null;){p=Z;var h=p.sibling,y=p.return;if(If(p),p===d){Z=null;break}if(h!==null){h.return=y,Z=h;break}Z=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}Z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Z=s;else e:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:va(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,Z=g;break e}Z=o.return}}var u=e.current;for(Z=u;Z!==null;){s=Z;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,Z=x;else e:for(s=u;Z!==null;){if(l=Z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wo(9,l)}}catch(N){Oe(l,l.return,N)}if(l===s){Z=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,Z=C;break e}Z=l.return}}if(he=i,Br(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(fo,e)}catch{}a=!0}return a}finally{be=r,zn.transition=n}}return!1}function Zd(e,n,r){n=_t(r,n),n=vf(e,n,1),e=zr(e,n,1),n=nn(),e!==null&&(Wa(e,1,n),pn(e,n))}function Oe(e,n,r){if(e.tag===3)Zd(e,e,r);else for(;n!==null;){if(n.tag===3){Zd(n,e,r);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Rr===null||!Rr.has(a))){e=_t(r,e),e=bf(n,e,1),n=zr(n,e,1),e=nn(),n!==null&&(Wa(n,1,e),pn(n,e));break}}n=n.return}}function S0(e,n,r){var a=e.pingCache;a!==null&&a.delete(n),n=nn(),e.pingedLanes|=e.suspendedLanes&r,Ue===e&&(Ke&r)===r&&(Me===4||Me===3&&(Ke&130023424)===Ke&&500>Le()-fc?Qr(e,0):uc|=r),pn(e,n)}function Mf(e,n){n===0&&(e.mode&1?(n=li,li<<=1,!(li&130023424)&&(li=4194304)):n=1);var r=nn();e=mr(e,n),e!==null&&(Wa(e,n,r),pn(e,r))}function E0(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Mf(e,r)}function N0(e,n){var r=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(_(314))}a!==null&&a.delete(n),Mf(e,r)}var Bf;Bf=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||cn.current)ln=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return ln=!1,m0(e,n,r);ln=!!(e.flags&131072)}else ln=!1,Ae&&n.flags&1048576&&Wu(n,Gi,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;zi(e,n),e=n.pendingProps;var i=Dt(n,Qe.current);zt(n,r),i=oc(null,n,a,e,i,r);var o=sc();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,dn(a)?(o=!0,Zi(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nc(n),i.updater=yo,n.stateNode=i,i._reactInternals=n,Xs(n,a,e,r),n=rl(null,n,a,!0,o,r)):(n.tag=0,Ae&&o&&Zl(n),en(null,n,i,r),n=n.child),n;case 16:a=n.elementType;e:{switch(zi(e,n),e=n.pendingProps,i=a._init,a=i(a._payload),n.type=a,i=n.tag=I0(a),e=Fn(a,e),i){case 0:n=nl(null,n,a,e,r);break e;case 1:n=_d(null,n,a,e,r);break e;case 11:n=Pd(null,n,a,e,r);break e;case 14:n=Fd(null,n,a,Fn(a.type,e),r);break e}throw Error(_(306,a,""))}return n;case 0:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Fn(a,i),nl(e,n,a,i,r);case 1:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Fn(a,i),_d(e,n,a,i,r);case 3:e:{if(kf(n),e===null)throw Error(_(387));a=n.pendingProps,o=n.memoizedState,i=o.element,Yu(e,n),Xi(n,a,null,r);var s=n.memoizedState;if(a=s.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=_t(Error(_(423)),n),n=Md(e,n,a,r,i);break e}else if(a!==i){i=_t(Error(_(424)),n),n=Md(e,n,a,r,i);break e}else for(xn=Tr(n.stateNode.containerInfo.firstChild),vn=n,Ae=!0,Bn=null,r=qu(n,null,a,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Lt(),a===i){n=hr(e,n,r);break e}en(e,n,a,r)}n=n.child}return n;case 5:return Gu(n),e===null&&Gs(n),a=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ks(a,i)?s=null:o!==null&&Ks(a,o)&&(n.flags|=32),jf(e,n),en(e,n,s,r),n.child;case 6:return e===null&&Gs(n),null;case 13:return Cf(e,n,r);case 4:return rc(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Pt(n,null,a,r):en(e,n,a,r),n.child;case 11:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Fn(a,i),Pd(e,n,a,i,r);case 7:return en(e,n,n.pendingProps,r),n.child;case 8:return en(e,n,n.pendingProps.children,r),n.child;case 12:return en(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(a=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,ke(Ji,a._currentValue),a._currentValue=s,o!==null)if(Wn(o.value,s)){if(o.children===i.children&&!cn.current){n=hr(e,n,r);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===a){if(o.tag===1){c=pr(-1,r&-r),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Js(o.return,r,n),l.lanes|=r;break}c=c.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Js(s,r,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}en(e,n,i.children,r),n=n.child}return n;case 9:return i=n.type,a=n.pendingProps.children,zt(n,r),i=Rn(i),a=a(i),n.flags|=1,en(e,n,a,r),n.child;case 14:return a=n.type,i=Fn(a,n.pendingProps),i=Fn(a.type,i),Fd(e,n,a,i,r);case 15:return yf(e,n,n.type,n.pendingProps,r);case 17:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:Fn(a,i),zi(e,n),n.tag=1,dn(a)?(e=!0,Zi(n)):e=!1,zt(n,r),xf(n,a,i),Xs(n,a,i,r),rl(null,n,a,!0,e,r);case 19:return Sf(e,n,r);case 22:return wf(e,n,r)}throw Error(_(156,n.tag))};function Vf(e,n){return fu(e,n)}function A0(e,n,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(e,n,r,a){return new A0(e,n,r,a)}function xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function I0(e){if(typeof e=="function")return xc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pl)return 11;if(e===Fl)return 14}return 2}function Dr(e,n){var r=e.alternate;return r===null?(r=Tn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Di(e,n,r,a,i,o){var s=2;if(a=e,typeof e=="function")xc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case gt:return Xr(r.children,i,o,n);case Ll:s=8,i|=8;break;case ks:return e=Tn(12,r,n,i|2),e.elementType=ks,e.lanes=o,e;case Cs:return e=Tn(13,r,n,i),e.elementType=Cs,e.lanes=o,e;case Ss:return e=Tn(19,r,n,i),e.elementType=Ss,e.lanes=o,e;case Gp:return ko(r,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zp:s=10;break e;case Yp:s=9;break e;case Pl:s=11;break e;case Fl:s=14;break e;case yr:s=16,a=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return n=Tn(s,r,n,i),n.elementType=e,n.type=a,n.lanes=o,n}function Xr(e,n,r,a){return e=Tn(7,e,a,n),e.lanes=r,e}function ko(e,n,r,a){return e=Tn(22,e,a,n),e.elementType=Gp,e.lanes=r,e.stateNode={isHidden:!1},e}function ms(e,n,r){return e=Tn(6,e,null,n),e.lanes=r,e}function hs(e,n,r){return n=Tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function T0(e,n,r,a,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vc(e,n,r,a,i,o,s,l,c){return e=new T0(e,n,r,l,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Tn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},nc(o),e}function z0(e,n,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ht,key:a==null?null:""+a,children:e,containerInfo:n,implementation:r}}function Uf(e){if(!e)return Fr;e=e._reactInternals;e:{if(lt(e)!==e||e.tag!==1)throw Error(_(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(dn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(_(171))}if(e.tag===1){var r=e.type;if(dn(r))return Vu(e,r,n)}return n}function Wf(e,n,r,a,i,o,s,l,c){return e=vc(r,a,!0,e,i,o,s,l,c),e.context=Uf(null),r=e.current,a=nn(),i=Or(r),o=pr(a,i),o.callback=n??null,zr(r,o,i),e.current.lanes=i,Wa(e,i,a),pn(e,a),e}function Co(e,n,r,a){var i=n.current,o=nn(),s=Or(i);return r=Uf(r),n.context===null?n.context=r:n.pendingContext=r,n=pr(o,s),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=zr(i,n,s),e!==null&&(Un(e,i,s,o),Ai(e,i,s)),s}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function bc(e,n){Yd(e,n),(e=e.alternate)&&Yd(e,n)}function R0(){return null}var $f=typeof reportError=="function"?reportError:function(e){console.error(e)};function yc(e){this._internalRoot=e}So.prototype.render=yc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(_(409));Co(e,n,null,null)};So.prototype.unmount=yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;it(function(){Co(null,e,null,null)}),n[fr]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var n=yu();e={blockedOn:null,target:e,priority:n};for(var r=0;r<jr.length&&n!==0&&n<jr[r].priority;r++);jr.splice(r,0,e),r===0&&ju(e)}};function wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gd(){}function O0(e,n,r,a,i){if(i){if(typeof a=="function"){var o=a;a=function(){var d=so(s);o.call(d)}}var s=Wf(n,a,e,0,null,!1,!1,"",Gd);return e._reactRootContainer=s,e[fr]=s.current,Ia(e.nodeType===8?e.parentNode:e),it(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var d=so(c);l.call(d)}}var c=vc(e,0,!1,null,null,!1,!1,"",Gd);return e._reactRootContainer=c,e[fr]=c.current,Ia(e.nodeType===8?e.parentNode:e),it(function(){Co(n,c,r,a)}),c}function No(e,n,r,a,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=so(s);l.call(c)}}Co(n,s,e,i)}else s=O0(r,n,e,i,a);return so(s)}vu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=da(n.pendingLanes);r!==0&&(Bl(n,r|1),pn(n,Le()),!(he&6)&&(Mt=Le()+500,Br()))}break;case 13:it(function(){var a=mr(e,1);if(a!==null){var i=nn();Un(a,e,1,i)}}),bc(e,1)}};Vl=function(e){if(e.tag===13){var n=mr(e,134217728);if(n!==null){var r=nn();Un(n,e,134217728,r)}bc(e,134217728)}};bu=function(e){if(e.tag===13){var n=Or(e),r=mr(e,n);if(r!==null){var a=nn();Un(r,e,n,a)}bc(e,n)}};yu=function(){return be};wu=function(e,n){var r=be;try{return be=e,n()}finally{be=r}};Ls=function(e,n,r){switch(n){case"input":if(As(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var a=r[n];if(a!==e&&a.form===e.form){var i=xo(a);if(!i)throw Error(_(90));Qp(a),As(a,i)}}}break;case"textarea":eu(e,r);break;case"select":n=r.value,n!=null&&Nt(e,!!r.multiple,n,!1)}};su=mc;lu=it;var D0={usingClientEntryPoint:!1,Events:[Ka,yt,xo,iu,ou,mc]},ta={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L0={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pu(e),e===null?null:e.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||R0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{fo=bi.inject(L0),tr=bi}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;yn.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wc(n))throw Error(_(200));return z0(e,n,null,r)};yn.createRoot=function(e,n){if(!wc(e))throw Error(_(299));var r=!1,a="",i=$f;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=vc(e,1,!1,null,null,r,!1,a,i),e[fr]=n.current,Ia(e.nodeType===8?e.parentNode:e),new yc(n)};yn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=pu(n),e=e===null?null:e.stateNode,e};yn.flushSync=function(e){return it(e)};yn.hydrate=function(e,n,r){if(!Eo(n))throw Error(_(200));return No(null,e,n,!0,r)};yn.hydrateRoot=function(e,n,r){if(!wc(e))throw Error(_(405));var a=r!=null&&r.hydratedSources||null,i=!1,o="",s=$f;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),n=Wf(n,null,e,1,r??null,i,!1,o,s),e[fr]=n.current,Ia(e),a)for(e=0;e<a.length;e++)r=a[e],i=r._getVersion,i=i(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,i]:n.mutableSourceEagerHydrationData.push(r,i);return new So(n)};yn.render=function(e,n,r){if(!Eo(n))throw Error(_(200));return No(null,e,n,!1,r)};yn.unmountComponentAtNode=function(e){if(!Eo(e))throw Error(_(40));return e._reactRootContainer?(it(function(){No(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0):!1};yn.unstable_batchedUpdates=mc;yn.unstable_renderSubtreeIntoContainer=function(e,n,r,a){if(!Eo(r))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return No(e,n,r,!1,a)};yn.version="18.3.1-next-f1338f8080-20240426";function Kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kf)}catch(e){console.error(e)}}Kf(),$p.exports=yn;var P0=$p.exports,Hf,Jd=P0;Hf=Jd.createRoot,Jd.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _a(){return _a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_a.apply(this,arguments)}var Er;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Er||(Er={}));const Qd="popstate";function F0(e){e===void 0&&(e={});function n(a,i){let{pathname:o,search:s,hash:l}=a.location;return ml("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(a,i){return typeof i=="string"?i:lo(i)}return M0(n,r,null,e)}function Pe(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function qf(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function _0(){return Math.random().toString(36).substr(2,8)}function Xd(e,n){return{usr:e.state,key:e.key,idx:n}}function ml(e,n,r,a){return r===void 0&&(r=null),_a({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?$t(n):n,{state:r,key:n&&n.key||a||_0()})}function lo(e){let{pathname:n="/",search:r="",hash:a=""}=e;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function $t(e){let n={};if(e){let r=e.indexOf("#");r>=0&&(n.hash=e.substr(r),e=e.substr(0,r));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function M0(e,n,r,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,s=i.history,l=Er.Pop,c=null,d=p();d==null&&(d=0,s.replaceState(_a({},s.state,{idx:d}),""));function p(){return(s.state||{idx:null}).idx}function m(){l=Er.Pop;let j=p(),g=j==null?null:j-d;d=j,c&&c({action:l,location:w.location,delta:g})}function h(j,g){l=Er.Push;let u=ml(w.location,j,g);d=p()+1;let x=Xd(u,d),C=w.createHref(u);try{s.pushState(x,"",C)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(C)}o&&c&&c({action:l,location:w.location,delta:1})}function y(j,g){l=Er.Replace;let u=ml(w.location,j,g);d=p();let x=Xd(u,d),C=w.createHref(u);s.replaceState(x,"",C),o&&c&&c({action:l,location:w.location,delta:0})}function v(j){let g=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof j=="string"?j:lo(j);return u=u.replace(/ $/,"%20"),Pe(g,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,g)}let w={get action(){return l},get location(){return e(i,s)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Qd,m),c=j,()=>{i.removeEventListener(Qd,m),c=null}},createHref(j){return n(i,j)},createURL:v,encodeLocation(j){let g=v(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:y,go(j){return s.go(j)}};return w}var ep;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ep||(ep={}));function B0(e,n,r){return r===void 0&&(r="/"),V0(e,n,r)}function V0(e,n,r,a){let i=typeof n=="string"?$t(n):n,o=jc(i.pathname||"/",r);if(o==null)return null;let s=Zf(e);U0(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let d=ex(o);l=J0(s[c],d)}return l}function Zf(e,n,r,a){n===void 0&&(n=[]),r===void 0&&(r=[]),a===void 0&&(a="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(Pe(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=Lr([a,c.relativePath]),p=r.concat(c);o.children&&o.children.length>0&&(Pe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Zf(o.children,n,p,d)),!(o.path==null&&!o.index)&&n.push({path:d,score:Y0(d,o.index),routesMeta:p})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of Yf(o.path))i(o,s,c)}),n}function Yf(e){let n=e.split("/");if(n.length===0)return[];let[r,...a]=n,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(a.length===0)return i?[o,""]:[o];let s=Yf(a.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function U0(e){e.sort((n,r)=>n.score!==r.score?r.score-n.score:G0(n.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}const W0=/^:[\w-]+$/,$0=3,K0=2,H0=1,q0=10,Z0=-2,np=e=>e==="*";function Y0(e,n){let r=e.split("/"),a=r.length;return r.some(np)&&(a+=Z0),n&&(a+=K0),r.filter(i=>!np(i)).reduce((i,o)=>i+(W0.test(o)?$0:o===""?H0:q0),a)}function G0(e,n){return e.length===n.length&&e.slice(0,-1).every((a,i)=>a===n[i])?e[e.length-1]-n[n.length-1]:0}function J0(e,n,r){let{routesMeta:a}=e,i={},o="/",s=[];for(let l=0;l<a.length;++l){let c=a[l],d=l===a.length-1,p=o==="/"?n:n.slice(o.length)||"/",m=Q0({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),h=c.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:Lr([o,m.pathname]),pathnameBase:ax(Lr([o,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(o=Lr([o,m.pathnameBase]))}return s}function Q0(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=X0(e.path,e.caseSensitive,e.end),i=n.match(r);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((d,p,m)=>{let{paramName:h,isOptional:y}=p;if(h==="*"){let w=l[m]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=l[m];return y&&!v?d[h]=void 0:d[h]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:e}}function X0(e,n,r){n===void 0&&(n=!1),r===void 0&&(r=!0),qf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(a.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),a]}function ex(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return qf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function jc(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}function nx(e,n){n===void 0&&(n="/");let{pathname:r,search:a="",hash:i=""}=typeof e=="string"?$t(e):e;return{pathname:r?r.startsWith("/")?r:rx(r,n):n,search:ix(a),hash:ox(i)}}function rx(e,n){let r=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function gs(e,n,r,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tx(e){return e.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function kc(e,n){let r=tx(e);return n?r.map((a,i)=>i===r.length-1?a.pathname:a.pathnameBase):r.map(a=>a.pathnameBase)}function Cc(e,n,r,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=$t(e):(i=_a({},e),Pe(!i.pathname||!i.pathname.includes("?"),gs("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),gs("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),gs("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=r;else{let m=n.length-1;if(!a&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),m-=1;i.pathname=h.join("/")}l=m>=0?n[m]:"/"}let c=nx(i,l),d=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const Lr=e=>e.join("/").replace(/\/\/+/g,"/"),ax=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ix=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ox=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function sx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gf=["post","put","patch","delete"];new Set(Gf);const lx=["get",...Gf];new Set(lx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Ma.apply(this,arguments)}const Sc=f.createContext(null),cx=f.createContext(null),Vr=f.createContext(null),Ao=f.createContext(null),Ur=f.createContext({outlet:null,matches:[],isDataRoute:!1}),Jf=f.createContext(null);function dx(e,n){let{relative:r}=n===void 0?{}:n;Kt()||Pe(!1);let{basename:a,navigator:i}=f.useContext(Vr),{hash:o,pathname:s,search:l}=Xf(e,{relative:r}),c=s;return a!=="/"&&(c=s==="/"?a:Lr([a,s])),i.createHref({pathname:c,search:l,hash:o})}function Kt(){return f.useContext(Ao)!=null}function $n(){return Kt()||Pe(!1),f.useContext(Ao).location}function Qf(e){f.useContext(Vr).static||f.useLayoutEffect(e)}function Wr(){let{isDataRoute:e}=f.useContext(Ur);return e?kx():px()}function px(){Kt()||Pe(!1);let e=f.useContext(Sc),{basename:n,future:r,navigator:a}=f.useContext(Vr),{matches:i}=f.useContext(Ur),{pathname:o}=$n(),s=JSON.stringify(kc(i,r.v7_relativeSplatPath)),l=f.useRef(!1);return Qf(()=>{l.current=!0}),f.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){a.go(d);return}let m=Cc(d,JSON.parse(s),o,p.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:Lr([n,m.pathname])),(p.replace?a.replace:a.push)(m,p.state,p)},[n,a,s,o,e])}function Xf(e,n){let{relative:r}=n===void 0?{}:n,{future:a}=f.useContext(Vr),{matches:i}=f.useContext(Ur),{pathname:o}=$n(),s=JSON.stringify(kc(i,a.v7_relativeSplatPath));return f.useMemo(()=>Cc(e,JSON.parse(s),o,r==="path"),[e,s,o,r])}function ux(e,n){return fx(e,n)}function fx(e,n,r,a){Kt()||Pe(!1);let{navigator:i}=f.useContext(Vr),{matches:o}=f.useContext(Ur),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=$n(),p;if(n){var m;let j=typeof n=="string"?$t(n):n;c==="/"||(m=j.pathname)!=null&&m.startsWith(c)||Pe(!1),p=j}else p=d;let h=p.pathname||"/",y=h;if(c!=="/"){let j=c.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(j.length).join("/")}let v=B0(e,{pathname:y}),w=vx(v&&v.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Lr([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Lr([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,r,a);return n&&w?f.createElement(Ao.Provider,{value:{location:Ma({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Er.Pop}},w):w}function mx(){let e=jx(),n=sx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},n),r?f.createElement("pre",{style:i},r):null,null)}const hx=f.createElement(mx,null);class gx extends f.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?f.createElement(Ur.Provider,{value:this.props.routeContext},f.createElement(Jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xx(e){let{routeContext:n,match:r,children:a}=e,i=f.useContext(Sc);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),f.createElement(Ur.Provider,{value:n},a)}function vx(e,n,r,a){var i;if(n===void 0&&(n=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=a)!=null&&o.v7_partialHydration&&n.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let p=s.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||Pe(!1),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let p=0;p<s.length;p++){let m=s[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:h,errors:y}=r,v=m.route.loader&&h[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||v){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,m,h)=>{let y,v=!1,w=null,j=null;r&&(y=l&&m.route.id?l[m.route.id]:void 0,w=m.route.errorElement||hx,c&&(d<0&&h===0?(Cx("route-fallback"),v=!0,j=null):d===h&&(v=!0,j=m.route.hydrateFallbackElement||null)));let g=n.concat(s.slice(0,h+1)),u=()=>{let x;return y?x=w:v?x=j:m.route.Component?x=f.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=p,f.createElement(xx,{match:m,routeContext:{outlet:p,matches:g,isDataRoute:r!=null},children:x})};return r&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?f.createElement(gx,{location:r.location,revalidation:r.revalidation,component:w,error:y,children:u(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):u()},null)}var em=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(em||{}),nm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(nm||{});function bx(e){let n=f.useContext(Sc);return n||Pe(!1),n}function yx(e){let n=f.useContext(cx);return n||Pe(!1),n}function wx(e){let n=f.useContext(Ur);return n||Pe(!1),n}function rm(e){let n=wx(),r=n.matches[n.matches.length-1];return r.route.id||Pe(!1),r.route.id}function jx(){var e;let n=f.useContext(Jf),r=yx(),a=rm();return n!==void 0?n:(e=r.errors)==null?void 0:e[a]}function kx(){let{router:e}=bx(em.UseNavigateStable),n=rm(nm.UseNavigateStable),r=f.useRef(!1);return Qf(()=>{r.current=!0}),f.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ma({fromRouteId:n},o)))},[e,n])}const rp={};function Cx(e,n,r){rp[e]||(rp[e]=!0)}function Sx(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function We(e){let{to:n,replace:r,state:a,relative:i}=e;Kt()||Pe(!1);let{future:o,static:s}=f.useContext(Vr),{matches:l}=f.useContext(Ur),{pathname:c}=$n(),d=Wr(),p=Cc(n,kc(l,o.v7_relativeSplatPath),c,i==="path"),m=JSON.stringify(p);return f.useEffect(()=>d(JSON.parse(m),{replace:r,state:a,relative:i}),[d,m,i,r,a]),null}function pe(e){Pe(!1)}function Ex(e){let{basename:n="/",children:r=null,location:a,navigationType:i=Er.Pop,navigator:o,static:s=!1,future:l}=e;Kt()&&Pe(!1);let c=n.replace(/^\/*/,"/"),d=f.useMemo(()=>({basename:c,navigator:o,static:s,future:Ma({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof a=="string"&&(a=$t(a));let{pathname:p="/",search:m="",hash:h="",state:y=null,key:v="default"}=a,w=f.useMemo(()=>{let j=jc(p,c);return j==null?null:{location:{pathname:j,search:m,hash:h,state:y,key:v},navigationType:i}},[c,p,m,h,y,v,i]);return w==null?null:f.createElement(Vr.Provider,{value:d},f.createElement(Ao.Provider,{children:r,value:w}))}function Nx(e){let{children:n,location:r}=e;return ux(hl(n),r)}new Promise(()=>{});function hl(e,n){n===void 0&&(n=[]);let r=[];return f.Children.forEach(e,(a,i)=>{if(!f.isValidElement(a))return;let o=[...n,i];if(a.type===f.Fragment){r.push.apply(r,hl(a.props.children,o));return}a.type!==pe&&Pe(!1),!a.props.index||!a.props.children||Pe(!1);let s={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=hl(a.props.children,o)),r.push(s)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},gl.apply(this,arguments)}function Ax(e,n){if(e==null)return{};var r={},a=Object.keys(e),i,o;for(o=0;o<a.length;o++)i=a[o],!(n.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Ix(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Tx(e,n){return e.button===0&&(!n||n==="_self")&&!Ix(e)}function xl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,r)=>{let a=e[r];return n.concat(Array.isArray(a)?a.map(i=>[r,i]):[[r,a]])},[]))}function zx(e,n){let r=xl(e);return n&&n.forEach((a,i)=>{r.has(i)||n.getAll(i).forEach(o=>{r.append(i,o)})}),r}const Rx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ox="6";try{window.__reactRouterVersion=Ox}catch{}const Dx="startTransition",tp=Sh[Dx];function Lx(e){let{basename:n,children:r,future:a,window:i}=e,o=f.useRef();o.current==null&&(o.current=F0({window:i,v5Compat:!0}));let s=o.current,[l,c]=f.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},p=f.useCallback(m=>{d&&tp?tp(()=>c(m)):c(m)},[c,d]);return f.useLayoutEffect(()=>s.listen(p),[s,p]),f.useEffect(()=>Sx(a),[a]),f.createElement(Ex,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:s,future:a})}const Px=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,se=f.forwardRef(function(n,r){let{onClick:a,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:d,preventScrollReset:p,viewTransition:m}=n,h=Ax(n,Rx),{basename:y}=f.useContext(Vr),v,w=!1;if(typeof d=="string"&&Fx.test(d)&&(v=d,Px))try{let x=new URL(window.location.href),C=d.startsWith("//")?new URL(x.protocol+d):new URL(d),N=jc(C.pathname,y);C.origin===x.origin&&N!=null?d=N+C.search+C.hash:w=!0}catch{}let j=dx(d,{relative:i}),g=_x(d,{replace:s,state:l,target:c,preventScrollReset:p,relative:i,viewTransition:m});function u(x){a&&a(x),x.defaultPrevented||g(x)}return f.createElement("a",gl({},h,{href:v||j,onClick:w||o?a:u,ref:r,target:c}))});var ap;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ap||(ap={}));var ip;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ip||(ip={}));function _x(e,n){let{target:r,replace:a,state:i,preventScrollReset:o,relative:s,viewTransition:l}=n===void 0?{}:n,c=Wr(),d=$n(),p=Xf(e,{relative:s});return f.useCallback(m=>{if(Tx(m,r)){m.preventDefault();let h=a!==void 0?a:lo(d)===lo(p);c(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[d,c,p,a,i,r,e,o,s,l])}function Mx(e){let n=f.useRef(xl(e)),r=f.useRef(!1),a=$n(),i=f.useMemo(()=>zx(a.search,r.current?null:n.current),[a.search]),o=Wr(),s=f.useCallback((l,c)=>{const d=xl(typeof l=="function"?l(i):l);r.current=!0,o("?"+d,c)},[o,i]);return[i,s]}function jn(){f.useEffect(()=>{const e=document.getElementById("areas-toggle"),n=[];if(e){const r=a=>{a.preventDefault(),e.parentElement&&e.parentElement.classList.toggle("open")};e.addEventListener("click",r),n.push(()=>e.removeEventListener("click",r))}return()=>{n.forEach(r=>{try{r()}catch{}})}},[])}function Bx(){f.useEffect(()=>{const e=document.getElementById("splash"),n=document.getElementById("splashLogo"),r=document.getElementById("app"),a=()=>{if(e)try{e.classList.add("splash--hide"),e.setAttribute("aria-hidden","true"),e.style.display="none",e.style.pointerEvents="none"}catch{}};try{e&&(e.classList.remove("splash--hide"),e.removeAttribute("aria-hidden"),e.style.display="",e.style.pointerEvents="")}catch{}if((()=>{try{return sessionStorage.getItem("koop_hasVisited")==="1"}catch{return!1}})()||document.documentElement.classList.contains("skip-splash")){a(),r&&(r.style.opacity="1");return}const s=2500,l=800,c=performance.now();function d(){n&&(n.offsetWidth,n.classList.add("is-visible"))}function p(){if(r)if(r.style.opacity="0",r.offsetHeight,r.animate){const w=r.animate([{opacity:0},{opacity:1}],{duration:800,easing:"ease",fill:"forwards"});w.onfinish=()=>{r.style.opacity="1"}}else r.style.transition="opacity 0.8s ease",requestAnimationFrame(()=>{r.style.opacity="1"})}function m(){const w=performance.now()-c,j=Math.max(0,s-w);setTimeout(()=>{p(),e&&e.classList.add("splash--hide"),setTimeout(()=>{a();try{sessionStorage.setItem("koop_hasVisited","1")}catch{}document.documentElement.classList.add("skip-splash")},l)},j)}async function h(){try{n&&"decode"in n?await n.decode():n&&!n.complete&&await new Promise(w=>n.addEventListener("load",w,{once:!0}))}catch{}d(),m()}const y=w=>{w.persisted&&(a(),r&&(r.style.opacity="1"))};window.addEventListener("pageshow",y),h();const v=setTimeout(()=>{const w=document.getElementById("splash");if(w&&document.body.contains(w))try{w.classList.add("splash--hide"),w.setAttribute("aria-hidden","true"),w.style.display="none",w.style.pointerEvents="none"}catch{}},7e3);return()=>{window.removeEventListener("pageshow",y),clearTimeout(v)}},[])}function kn(){const e=Wr(),n=$n(),r=i=>{const o="/"+(i||"").split("/").filter(Boolean).pop(),s={"/index.html":"/","/derecho.html":"/derecho","/contabilidad.html":"/contabilidad","/auditoria.html":"/auditoria","/derecho-administrativo.html":"/derecho-administrativo","/derecho-familia.html":"/derecho-familia","/derecho-laboral.html":"/derecho-laboral","/derecho-penal.html":"/derecho-penal","/impuestos.html":"/impuestos","/planeacion-patrimonial.html":"/asesoria-contable","/planeacion-patrimonial":"/asesoria-contable","/privacidad.html":"/privacidad","/politica-privacidad.html":"/privacidad","/tramites-notariales.html":"/tramites-notariales","/acciones-de-tutela.html":"/acciones-de-tutela"};return s[i]||s[o]||i},a=()=>{var i;(i=document.querySelectorAll("a[href]"))==null||i.forEach(o=>{try{const s=o.getAttribute("href")||"";if(/^https?:\/\//i.test(s)&&new URL(s).origin!==window.location.origin)return;const l=new URL(s,window.location.href);if(l.origin!==window.location.origin)return;let c=r(l.pathname)+l.search+l.hash;/^\/index\.html#/i.test(c)&&(c=c.replace(/^\/index\.html#/i,"/#"));const d=o.getAttribute("href");c&&c!==d&&o.setAttribute("href",c)}catch{}})};f.useEffect(()=>{const i=Array.from(document.querySelectorAll(".page-transition")),o=()=>{i.forEach(p=>p.classList.remove("is-active"))};o(),requestAnimationFrame(o),setTimeout(o,0);const s=p=>{p.persisted&&o()},l=()=>o();window.addEventListener("pageshow",s),window.addEventListener("focus",l);function c(p){if(!p||!p.href)return!1;try{const y=p.classList;if(y&&y.contains("drop-btn")||p.id==="areas-toggle")return!1}catch{}if(p.target&&p.target.toLowerCase()==="_blank")return!1;const m=p.getAttribute("href");if(!m||m.startsWith("#")||m.startsWith("mailto:")||m.startsWith("tel:"))return!1;const h=new URL(p.href,window.location.href);return!(h.hostname!==window.location.hostname||h.pathname===window.location.pathname&&h.hash)}a();const d=p=>{const m=p.target&&p.target.closest?p.target.closest("a"):null;if(m&&(m.classList&&m.classList.contains("drop-btn")||m.id==="areas-toggle")||!m||!c(m)||p.metaKey||p.ctrlKey||p.shiftKey||p.altKey||p.button!==0)return;p.preventDefault();const h=i.some(v=>{try{return getComputedStyle(v).display!=="none"}catch{return!1}});h&&i.forEach(v=>v.classList.add("is-active"));const y=()=>{try{const v=new URL(m.href,window.location.href),w=r(v.pathname)+v.search+v.hash,j=window.location.pathname+window.location.search+window.location.hash;try{window.__KOOP_FADE_ARRIVAL=!0}catch{}try{e(w)}catch{}setTimeout(()=>{window.location.pathname+window.location.search+window.location.hash===j&&window.location.assign(w)},50)}catch{window.location.assign(m.href)}};h?setTimeout(y,600):y()};return document.addEventListener("click",d,!0),()=>{window.removeEventListener("pageshow",s),window.removeEventListener("focus",l),document.removeEventListener("click",d,!0)}},[]),f.useLayoutEffect(()=>{if(!n.hash){const i=()=>{try{window.scrollTo(0,0)}catch{}try{document.documentElement.scrollTop=0}catch{}try{document.body.scrollTop=0}catch{}};i(),requestAnimationFrame(i),setTimeout(i,0),setTimeout(i,50),setTimeout(i,150)}},[n.pathname,n.search,n.hash]),f.useEffect(()=>{Array.from(document.querySelectorAll(".page-transition")).forEach(l=>l.classList.remove("is-active"));const i=document.getElementById("splash"),o=!!(i&&getComputedStyle(i).display!=="none"&&!i.classList.contains("splash--hide"));if(!o){document.documentElement.classList.add("skip-splash");const l=document.getElementById("app");l?(l.style.opacity="1",l.style.transition=""):document.body.style.opacity="1"}if(!o&&!!(typeof window<"u"&&window.__KOOP_FADE_ARRIVAL)){try{const l=document.documentElement;l.classList.remove("route-fade-in"),l.offsetWidth,l.classList.add("route-fade-in"),setTimeout(()=>{try{l.classList.remove("route-fade-in")}catch{}},280)}catch{}try{window.__KOOP_FADE_ARRIVAL=!1}catch{}}try{a()}catch{}},[n.pathname,n.search,n.hash]),f.useEffect(()=>{if(!n.hash)return;const i=(n.hash||"").replace(/^#/,""),o=()=>{try{const p=document.getElementById(i)||document.querySelector(n.hash);if(p&&p.scrollIntoView)return p.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"}),!0}catch{}return!1};if(o())return;const s=requestAnimationFrame(o),l=setTimeout(o,0),c=setTimeout(o,120),d=setTimeout(o,300);return()=>{cancelAnimationFrame(s),clearTimeout(l),clearTimeout(c),clearTimeout(d)}},[n.pathname,n.hash])}function Vx(){f.useEffect(()=>{const e=document.querySelectorAll(".labor-card[data-images]"),n=[];return e.forEach(r=>{const a=(r.dataset.images||"").split(",").map(s=>s.trim()).filter(Boolean);if(a.length<2)return;let i=0;const o=setInterval(()=>{const s=(i+1)%a.length,l=document.createElement("div");l.className="labor-card-fade",l.style.backgroundImage=`url('${a[s]}')`,r.appendChild(l),requestAnimationFrame(()=>{l.style.opacity="1"}),setTimeout(()=>{r.style.setProperty("--bg",`url('${a[s]}')`);try{l.remove()}catch{}i=s},1e3)},3e3);n.push(o)}),()=>{n.forEach(r=>clearInterval(r)),document.querySelectorAll(".labor-card-fade").forEach(r=>{try{r.remove()}catch{}})}},[])}function Cn(){f.useEffect(()=>{const e=n=>!n||typeof n!="string"?n:n.replace(/url\(\s*'img\//gi,"url('/img/").replace(/url\(\s*"img\//gi,'url("/img/').replace(/url\(\s*img\//gi,"url(/img/");document.querySelectorAll("[style]").forEach(n=>{try{const r=n.style.getPropertyValue("--bg");if(r&&/url\(/i.test(r)){const a=e(r);a!==r&&n.style.setProperty("--bg",a)}}catch{}}),document.querySelectorAll("[data-images]").forEach(n=>{const r=n.getAttribute("data-images");if(!r)return;const i=r.split(",").map(o=>o.trim()).filter(Boolean).map(o=>o.replace(/^img\//i,"/img/")).join(",");i!==r&&n.setAttribute("data-images",i)})},[location.pathname,location.search,location.hash])}function Sn(e){if(!e||typeof e!="string")return"";const n=e.replace(/<noscript[\s\S]*?<\/noscript>/gi,""),r=[],a=/<style\b[^>]*>([\s\S]*?)<\/style>/gi;let i;for(;i=a.exec(n);){const s=i[1]||"";s.trim()&&r.push(s.trim())}return r.join(`

`).replace(/url\(\s*(['\"]?)img\//gi,"url($1/img/").replace(/url\(\s*(['\"]?)(?!\/|https?:|data:)([^'"\)]+?\.(?:png|jpe?g|svg|gif|webp|ico))\1\s*\)/gi,(s,l,c)=>`url(${l}/${c}${l})`)}const Ux=`<!DOCTYPE html>\r
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
`,Wx=[{label:"Inicio",to:"/#inicio"},{label:"Áreas de práctica",to:"/#areas"},{label:"Nuestra visión",to:"/#vision"},{label:"Contacto",to:"/#contacto"}],$x=[{label:"Política de privacidad",href:"/privacidad"},{label:"Términos y condiciones",href:"terminos.html"}],Kx={label:"Volver arriba ↑",href:"#inicio"},Hx=[{label:"Instagram",href:"https://www.instagram.com/kooplawyers/",icon:Jx},{label:"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",icon:Qx},{label:"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",icon:Xx}],qx=[{label:"Política de Privacidad",href:"/privacidad"}],aa=({item:e,className:n})=>{if(!e)return null;const{label:r,to:a,href:i,target:o,rel:s}=e;return r?a?t.jsx(se,{to:a,className:n,children:r}):t.jsx("a",{href:i,className:n,target:o,rel:o?s||"noopener":s,children:r}):null};function Zx(){return t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})})}function op(){return t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})})}function Yx(){return t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})})}function Gx(){return t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})})}function Jx(){return t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}function Qx(){return t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}function Xx(){return t.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})}function En({variant:e="marketing",brandName:n="KOOP STRATEGIC ADVISORY",brandCopy:r,ctaHeading:a,whatsappHref:i,emailHref:o,serviceTitle:s="Servicios",serviceLinks:l=[],quickLinks:c=Wx,phoneNumber:d="+57 (313) 721 38 78",phoneHref:p="tel:+573137213878",contactEmail:m="direccionjuridicakoop@hotmail.com",contactEmailHref:h="mailto:direccionjuridicakoop@hotmail.com",locationLabel:y="Bogotá D.C., Colombia",miniLinks:v=$x,backToTop:w=Kx,socialLinks:j=Hx,simpleLeftText:g="Creado por Koop Strategic Advisory",simpleRightLinks:u=qx}){const x=new Date().getFullYear();return e==="simple"?t.jsx("footer",{className:"site-footer",children:t.jsxs("div",{className:"footer-container",children:[t.jsxs("div",{className:"footer-left",children:["© ",x," ",g]}),t.jsx("div",{className:"footer-right",children:u.map(C=>t.jsx(aa,{item:C},C.label))})]})}):t.jsxs("footer",{children:[t.jsx("div",{className:"footer-divider","aria-hidden":"true"}),t.jsxs("div",{className:"footer-top",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("div",{className:"footer-logo",children:t.jsx("div",{className:"brand-text",children:n})}),r&&t.jsx("p",{className:"footer-copy",children:r}),t.jsxs("div",{className:"footer-cta",children:[t.jsx("h4",{children:a}),t.jsxs("div",{className:"btns",children:[i&&t.jsxs("a",{className:"btn btn-whatsapp",href:i,target:"_blank",rel:"noopener",children:[t.jsx(Zx,{}),"WhatsApp"]}),o&&t.jsxs("a",{className:"btn btn-mail",href:o,children:[t.jsx(op,{}),"Escríbenos"]})]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Enlaces rápidos"}),t.jsx("ul",{className:"footer-list",children:c.map(C=>t.jsx("li",{children:t.jsx(aa,{item:C})},C.label))})]}),l.length>0&&t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:s}),t.jsx("ul",{className:"footer-list",children:l.map(C=>t.jsx("li",{children:t.jsx(aa,{item:C})},C.label))})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h5",{children:"Contacto"}),t.jsxs("div",{className:"footer-contact",children:[t.jsxs("div",{className:"item",children:[t.jsx(Yx,{}),t.jsx("span",{children:y})]}),t.jsxs("div",{className:"item",children:[t.jsx(Gx,{}),t.jsx("span",{children:t.jsx("a",{href:p,style:{color:"#cfe0ff",textDecoration:"none"},children:d})})]}),t.jsxs("div",{className:"item",children:[t.jsx(op,{}),t.jsx("span",{children:t.jsx("a",{href:h,style:{color:"#cfe0ff",textDecoration:"none"},children:m})})]})]}),t.jsx("div",{className:"footer-social","aria-label":"Redes sociales",children:j.map(C=>t.jsx("a",{"aria-label":C.label,href:C.href,target:"_blank",rel:"noopener",title:C.label,children:C.icon&&t.jsx(C.icon,{})},C.label))})]})]}),t.jsx("div",{className:"mini-footer",children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{children:["© ",x," Koop Strategic Advisory. Todos los derechos reservados."]}),t.jsxs("div",{className:"mini-links",children:[v.map(C=>t.jsx(aa,{item:C},C.label)),w&&t.jsx(aa,{item:w},w.label)]})]})})]})}const Kn={derechoFamilia:{brandCopy:"Estudio jurídico & contable. Litigio estratégico y soluciones 360° para proteger tu núcleo familiar.",ctaHeading:"¿Necesitas una asesoría en derecho de familia?",whatsappHref:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20derecho%20de%20familia%20sobre%20el%20siguiente%20tema:",emailHref:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20de%20Familia%20Koop",serviceTitle:"Servicios de familia",serviceLinks:[{label:"Divorcio y separación",href:"#divorcio"},{label:"Custodia y patria potestad",href:"#custodia"},{label:"Alimentos y pensión alimentaria",href:"#alimentos"},{label:"Violencia intrafamiliar",href:"#sociedad"},{label:"Trámites frente a ICBF o Comisarías de familia",href:"#comisariaseicbf"},{label:"Capitulaciones matrimoniales",href:"#capitulaciones"}],phoneNumber:"+57 (350) 396 57 55",phoneHref:"tel:+573503965755"},derecho:{brandCopy:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral.",ctaHeading:"¿Necesitas una asesoría laboral hoy?",whatsappHref:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20sobre%20el%20siguiente%20tema:",emailHref:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",serviceTitle:"Áreas de Derecho",serviceLinks:[{label:"Derecho penal",to:"/derecho-penal"},{label:"Derecho laboral",to:"/derecho-laboral"},{label:"Trámites notariales",to:"/tramites-notariales"},{label:"Derecho administrativo",to:"/derecho-administrativo"}]},contabilidad:{brandCopy:"Estudio jurídico & contable. Soluciones integrales para tu empresa.",ctaHeading:"¿Necesitas una Asesoría Contable?",whatsappHref:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20consultar%20los%20servicios%20contables:",emailHref:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Contabilidad%20Koop",serviceTitle:"Servicios contables",serviceLinks:[{label:"Auditoría y Revisoría Fiscal",to:"/auditoria"},{label:"Impuestos y Planeación Tributaria",to:"/impuestos"},{label:"Asesoría Contable",to:"/asesoria-contable"}]},derechoPenal:{brandCopy:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo penal.",ctaHeading:"¿Necesitas una asesoría penal hoy?",whatsappHref:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20penal%20sobre%20el%20siguiente%20tema:",emailHref:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Penal%20Koop",serviceTitle:"Servicios penales",serviceLinks:[{label:"Audiencias y trámite penal",href:"#audiencias"},{label:"Representación a víctimas",href:"#asesoria"},{label:"Acompañamiento en audiencias",href:"#acompañamiento"},{label:"Habeas corpus y libertades",href:"#habeas"},{label:"Delitos sexuales",href:"#defensa"},{label:"Control ante Fiscalía",href:"#control"}]},derechoLaboral:{brandCopy:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral.",ctaHeading:"¿Necesitas una asesoría laboral hoy?",whatsappHref:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20laboral%20sobre%20el%20siguiente%20tema:",emailHref:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",serviceTitle:"Servicios laborales",serviceLinks:[{label:"Contrato realidad",href:"#contratorealidad"},{label:"Liquidaciones y prestaciones",href:"#liquidaciones"},{label:"Acoso laboral",href:"#acoso"},{label:"Pensiones y seguridad social",href:"#pensiones"},{label:"Reintegro laboral",href:"#reintegro"}]},derechoAdministrativo:{brandCopy:"Estudio jurídico & contable. Valoramos y resguardamos tus activos intangibles.",ctaHeading:"¿Necesitas una asesoría en derecho administrativo?",whatsappHref:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20concencioso%20administrativo%20sobre%20el%20siguiente%20tema:",emailHref:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20Administrativo%20Koop",serviceTitle:"Servicios administrativos",serviceLinks:[{label:"Gestión urbanística",href:"#peticion"},{label:"Procesos disciplinarios",href:"#disciplinario"},{label:"Contratación estatal",href:"#contratacion"},{label:"Responsabilidad fiscal",href:"#nulidad"},{label:"Conceptos y asesorías",href:"#conceptos"}]},tramitesNotariales:{brandCopy:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo jurídico.",ctaHeading:"¿Necesitas una asesoría?",whatsappHref:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20conocer%20los%20costos%20del%20siguiente%20proceso%20notarial:",emailHref:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Notarial%20Koop",serviceTitle:"Servicios notariales",serviceLinks:[{label:"Compraventa de inmuebles",href:"#compraventa"},{label:"Constitución o liquidación de sociedades",href:"#constitucion"},{label:"Sucesiones por causa de muerte",href:"sucesiones"},{label:"Capitulaciones y sociedad conyugal",href:"#capitulaciones"},{label:"Levantamiento de hipotecas",href:"#levantamiento"},{label:"Donaciones de bienes inmuebles",href:"#donaciones"}]},impuestos:{brandCopy:"Estudio jurídico & contable. Optimización de obligaciones fiscales.",ctaHeading:"¿Necesitas una asesoría en impuestos?",whatsappHref:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20impuestos%20sobre%20el%20siguiente%20tema:",emailHref:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Impuestos%20Koop",serviceTitle:"Servicios de impuestos",serviceLinks:[{label:"Planeación tributaria",href:"#planeacion"},{label:"Declaraciones y cumplimiento",href:"#declaraciones"},{label:"Defensa ante la DIAN",href:"#dian"},{label:"Precios de transferencia",href:"#transferencia"},{label:"Auditoría fiscal",href:"#auditoria"},{label:"Obligaciones municipales",href:"#municipales"}]},auditoria:{brandCopy:"Estudio jurídico & contable. Control y transparencia para tu organización.",ctaHeading:"¿Necesitas una asesoría en auditoría & revisoría fiscal?",whatsappHref:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20auditor%C3%ADa%20y%20revisor%C3%ADa%20fiscal%20sobre%20el%20siguiente%20tema:",emailHref:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Auditor%C3%ADa%20y%20Revisor%C3%ADa%20Fiscal%20Koop",serviceTitle:"Servicios de auditoría",serviceLinks:[{label:"Auditoría financiera",href:"#financiera"},{label:"Revisoría fiscal permanente",href:"#revisoria"},{label:"Evaluación de control interno",href:"#control"},{label:"Cumplimiento normativo",href:"#cumplimiento"},{label:"Informes especiales",href:"#informes"}]},asesoriaContable:{brandCopy:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado.",ctaHeading:"¿Necesitas una asesoría en Asesoría Contable?",whatsappHref:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",emailHref:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",serviceTitle:"Servicios de asesoría contable",serviceLinks:[{label:"Estrategias sucesorales",href:"#sucesion"},{label:"Fideicomisos y patrimonios autónomos",href:"#fideicomisos"},{label:"Protocolos familiares",href:"#protocolos"},{label:"Optimización fiscal del patrimonio",href:"#fiscal"},{label:"Administración de portafolios",href:"#portafolios"},{label:"Protección de activos",href:"#activos"}]},accionesDeTutela:{brandCopy:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado.",ctaHeading:"¿Necesitas una asesoría en Asesoría?",whatsappHref:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",emailHref:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",serviceTitle:"Servicios de tutela",serviceLinks:[{label:"Derecho de petición",href:"#peticion"},{label:"Tutela en salud",href:"#salud"},{label:"Revocatoria de decisiones judiciales",href:"#revocatoria"},{label:"Tutela para obtener pensión",href:"#tutelapension"}]}},tm={home:{variant:"simple",simpleLeftText:"Creado por Koop Strategic Advisory",simpleRightLinks:[{label:"Política de Privacidad",href:"/privacidad",target:"_blank"}]},privacy:{variant:"simple",simpleLeftText:"Creado por Koop Strategic Advisory",simpleRightLinks:[{label:"Política de Privacidad",href:"/privacidad"}]}},ev=tm.home,nv=()=>{jn(),Bx(),kn(),Vx();const e=Sn(Ux).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsx("div",{id:"splash",className:"splash","aria-hidden":"true",children:t.jsx("div",{className:"splash__frame",children:t.jsx("img",{id:"splashLogo",className:"splash__logo",src:"/Koop%20Logo.png",alt:"Koop Strategic Advisory"})})}),t.jsxs("div",{id:"app",children:[t.jsxs("div",{className:"hero-section hero--home",id:"inicio",children:[t.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:t.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),t.jsx("div",{className:"hero-overlay"}),t.jsx("div",{className:"hero-content",children:t.jsxs("div",{className:"hero-box",children:[t.jsx("div",{className:"hero-title",children:"KOOP es Bogotá, es excelencia académica"}),t.jsxs("div",{className:"hero-subtitle",children:["Expertos en Derecho Administrativo,",t.jsx("br",{})," Penal, Laboral y Médico"]}),t.jsxs("div",{className:"hero-desc",children:["Equipo de abogados y contadores con experiencia. ",t.jsx("br",{}),"Brindamos consultoría estratégica para empresas y personas naturales."]}),t.jsx("a",{className:"cta-btn",href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20:",children:"Solicita tu consulta"})]})})]}),t.jsx("section",{className:"areas-section",id:"areas",children:t.jsxs("div",{className:"areas-container",children:[t.jsxs("div",{className:"areas-title",children:[t.jsx("span",{className:"areas-title-bold",children:"ÁREAS DE"})," ",t.jsx("span",{className:"areas-title-normal",children:"PRÁCTICA"})]}),t.jsxs("div",{className:"areas-cards",children:[t.jsx("a",{href:"/derecho",className:"labor-card",style:{"--bg":"url('/img/paloquemao.png')"},"data-images":"/img/paloquemao.png,/img/saladecasacionlaboral.png,/img/tramitesnotariales.png,/img/sexuales.png,/img/fiscalia.png",children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("div",{className:"labor-card-title",children:"Derecho"}),t.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})}),t.jsx("a",{href:"/contabilidad",className:"labor-card",style:{"--bg":"url('/img/auditoria.jpg')"},"data-images":"/img/auditoria.jpg,/img/impuestos-en-colombia.jpg,/img/que_es_la_contabilidad.jpeg",children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("div",{className:"labor-card-title",children:"Contabilidad"}),t.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})})]})]})}),t.jsx("section",{className:"vision-section",id:"vision",children:t.jsxs("div",{className:"vision-container",children:[t.jsxs("h2",{className:"vision-title",children:[t.jsx("span",{className:"vision-bold",children:"NUESTRA"})," VISIÓN"]}),t.jsxs("div",{className:"vision-text",children:[t.jsx("p",{children:"En Koop Strategic Advisory, nuestra visión es consolidarnos como la firma de referencia en servicios jurídicos, contables y de consultoría empresarial, reconocidos por nuestra ética, innovación y excelencia. Nos apasiona acompañar a empresas y personas en la toma de decisiones estratégicas que les permitan crecer, proteger sus intereses y transformar sus proyectos en resultados sostenibles."}),t.jsx("p",{children:"Trabajamos bajo un enfoque multidisciplinario, integrando conocimientos legales, contables y de auditoría para ofrecer soluciones integrales y personalizadas. Nuestro equipo está comprometido con la actualización permanente, la confianza y el trato directo con cada cliente."}),t.jsx("p",{children:"Buscamos construir relaciones de largo plazo basadas en la transparencia, el profesionalismo y el valor agregado, contribuyendo activamente al desarrollo empresarial y a la construcción de una sociedad más justa y eficiente."})]})]})}),t.jsx("section",{className:"full-img-section",children:t.jsx("img",{src:"/Corte suprema de justicia de colombia.jpg",alt:"Equipo empresarial Koop",className:"full-img"})}),t.jsxs("section",{className:"contact-section",id:"contacto",children:[t.jsx("div",{className:"contact-overlay"}),t.jsx("div",{className:"contact-container contact-modern",children:t.jsxs("div",{className:"contact-modern-content",children:[t.jsx("div",{className:"contact-title",style:{textAlign:"center"},children:"CONTÁCTANOS"}),t.jsx("div",{className:"contact-name",style:{textAlign:"center",color:"#fff"},children:"KOOP STRATEGIC ADVISORY"}),t.jsxs("div",{className:"contact-social contact-social-modern",children:[t.jsx("a",{href:"https://www.instagram.com/kooplawyers/",target:"_blank",className:"social-icon instagram",title:"Instagram",children:t.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",alt:"Instagram"})}),t.jsx("a",{href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",className:"social-icon facebook",title:"Facebook",children:t.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg",alt:"Facebook"})}),t.jsx("a",{href:"https://www.tiktok.com/@koop.co",target:"_blank",className:"social-icon tiktok",title:"TikTok",children:t.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg",alt:"TikTok"})}),t.jsx("a",{href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20",target:"_blank",className:"social-icon whatsapp",title:"WhatsApp",children:t.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg",alt:"WhatsApp"})})]}),t.jsx("div",{className:"contact-modern-text",children:"Atendemos consultas por cualquiera de nuestras redes sociales."})]})})]}),t.jsx(En,{...ev})]})," "]})},rv=`<!DOCTYPE html>\r
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
`,am="/assets/Despidoinjustificado-WBwGt-rg.jpg",tv=Kn.derecho,av=()=>{jn(),kn();const e=Sn(rv).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsx("section",{className:"labor-cards-section",id:"areas-derecho",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"DERECHO"}),t.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),t.jsx("p",{className:"labor-sub",children:"Asesoría integral en diversas ramas del derecho."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx(se,{to:"/derecho-penal",className:"labor-card",style:{"--bg":"url('/img/Audiencias.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Derecho Penal"]}),t.jsx("div",{className:"labor-card-desc",children:"Defensa y asesoría en procesos penales."})]})}),t.jsx(se,{to:"/derecho-laboral",className:"labor-card",style:{"--bg":`url(${am})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Derecho Laboral"]}),t.jsx("div",{className:"labor-card-desc",children:"Soluciones en derecho laboral y seguridad social."})]})}),t.jsx(se,{to:"/tramites-notariales",className:"labor-card",style:{"--bg":"url('img/tramitesnotariales.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Trámites notariales"]}),t.jsx("div",{className:"labor-card-desc",children:"Gestiones notariales rápidas y seguras."})]})}),t.jsx(se,{to:"/derecho-administrativo",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Derecho Administrativo"]}),t.jsx("div",{className:"labor-card-desc",children:"Asesoría en procedimientos y litigios administrativos."})]})}),t.jsx(se,{to:"/derecho-familia",className:"labor-card",style:{"--bg":"url('/img/ninofamilia.webp')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Derecho de Familia"]}),t.jsx("div",{className:"labor-card-desc",children:"Trámites administrativos y judiciales de familia."})]})})]})]})}),t.jsx(En,{...tv})]})},iv=`<!DOCTYPE html>\r
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
`,ov=Kn.contabilidad,sv=()=>{jn(),kn();const e=Sn(iv).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsx("section",{className:"labor-cards-section",id:"subareas-contabilidad",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"CONTABILIDAD"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Selecciona la especialidad contable que necesitas."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"/auditoria",className:"labor-card",style:{"--bg":"url('img/auditoria.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Auditoría y Revisoría Fiscal"]}),t.jsx("div",{className:"labor-card-desc",children:"Supervisión financiera independiente."})]})}),t.jsx("a",{href:"/impuestos",className:"labor-card",style:{"--bg":"url('img/impuestos-en-colombia.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Impuestos y Planeación Tributaria"]}),t.jsx("div",{className:"labor-card-desc",children:"Consultoría y cumplimiento fiscal."})]})}),t.jsx("a",{href:"/asesoria-contable",className:"labor-card",style:{"--bg":"url('img/que_es_la_contabilidad.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Asesoría Contable"]}),t.jsx("div",{className:"labor-card-desc",children:"Protección y optimización del patrimonio."})]})})]})]})}),t.jsx(En,{...ov})]})},lv=`<!DOCTYPE html>\r
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
`,cv=Kn.auditoria,dv=()=>{jn(),kn();const e=Sn(lv).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Auditoría & Revisoría Fiscal",children:t.jsx("div",{className:"hero-headline",children:"Auditoría & Revisoría Fiscal"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-auditoria",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE AUDITORÍA & REVISORÍA FISCAL"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Supervisión independiente y aseguramiento financiero y contable."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#financiera",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Auditoría financiera"]}),t.jsx("div",{className:"labor-card-desc",children:"Opinión independiente sobre estados financieros."})]})}),t.jsx("a",{href:"#revisoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Revisoría fiscal permanente"]}),t.jsx("div",{className:"labor-card-desc",children:"Cumplimiento de obligaciones legales y societarias."})]})}),t.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Evaluación de control interno"]}),t.jsx("div",{className:"labor-card-desc",children:"Diagnósticos y recomendaciones."})]})}),t.jsx("a",{href:"#cumplimiento",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Cumplimiento normativo"]}),t.jsx("div",{className:"labor-card-desc",children:"Verificación de normas contables y fiscales."})]})}),t.jsx("a",{href:"#informes",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Informes especiales"]}),t.jsx("div",{className:"labor-card-desc",children:"Dictámenes sobre hechos particulares."})]})})]})]})}),t.jsx(En,{...cv})]})},pv=`<!DOCTYPE html>\r
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
`,uv=Kn.derechoAdministrativo,fv=()=>{jn(),kn();const e=Sn(pv).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/derecho-administrativo/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Consejo-deestado.avif')",backgroundPosition:"center 80%"},children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Derecho Administrativo",children:t.jsx("div",{className:"hero-headline",children:"Derecho Administrativo"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-derecho-administrativo",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE DERECHO ADMINISTRATIVO"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Asesoría en trámites y procedimientos ante la administración pública."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#peticion",className:"labor-card",style:{"--bg":"url('img/Gestionurbana.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Gestión Urbanística"]}),t.jsx("div",{className:"labor-card-desc",children:"Asesorías en licencias y planeación urbanística."})]})}),t.jsx("a",{href:"#disciplinario",className:"labor-card",style:{"--bg":"url('img/Disci.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Procesos disciplinarios"]}),t.jsx("div",{className:"labor-card-desc",children:"Defensa ante investigaciones y sanciones."})]})}),t.jsx("a",{href:"#contratacion",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Contratación estatal"]}),t.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en etapas precontractuales y contractuales."})]})}),t.jsx("a",{href:"#nulidad",className:"labor-card",style:{"--bg":"url('img/Respfiscal.webp')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Procesos de responsabilidad fiscal"]}),t.jsx("div",{className:"labor-card-desc",children:"Conflictos derivados de administración de dineros públicos."})]})}),t.jsx("a",{href:"#conceptos",className:"labor-card",style:{"--bg":"url('img/Asesoria.webp')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Conceptos y asesorías administrativas"]}),t.jsx("div",{className:"labor-card-desc",children:"Elaboración de conceptos y respuestas a requerimientos."})]})})]})]})}),t.jsx(En,{...uv})]})},mv=`<!DOCTYPE html>\r
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
`,hv=Kn.derechoFamilia,gv=()=>{jn(),kn();const e=Sn(mv).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/ninofamilia.webp')",backgroundPosition:"center 30%"},children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Derecho de Familia",children:t.jsx("div",{className:"hero-headline",children:"Derecho de Familia"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-familia",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE FAMILIA"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Asesoría integral en situaciones familiares: divorcios, custodia, alimentos y más."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#divorcio",className:"labor-card",style:{"--bg":"url('img/divorcio.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Divorcio y separación"]}),t.jsx("div",{className:"labor-card-desc",children:"Representación y acuerdos amistosos o judiciales."})]})}),t.jsx("a",{href:"#custodia",className:"labor-card",style:{"--bg":"url('img/Custodia.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Custodia y patria potestad"]}),t.jsx("div",{className:"labor-card-desc",children:"Defensa de los derechos de tus hijos y del núcleo familiar."})]})}),t.jsx("a",{href:"#alimentos",className:"labor-card",style:{"--bg":"url('img/alimentos.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Alimentos y pensión alimentaria"]}),t.jsx("div",{className:"labor-card-desc",children:"Fijación, modificación y cobro de cuotas alimentarias."})]})}),t.jsx("a",{href:"#sociedad",className:"labor-card",style:{"--bg":"url('img/Violencia.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Violencia intrafamiliar"]}),t.jsx("div",{className:"labor-card-desc",children:"Trámite ante comisaría de familia o proceso penal ante fiscalía."})]})}),t.jsx("a",{href:"#comisariaseicbf",className:"labor-card",style:{"--bg":"url('img/Bienestar.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Trámites frente a ICBF o Comisarías de familia"]}),t.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en procesos administrativos."})]})}),t.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales"]}),t.jsx("div",{className:"labor-card-desc",children:"Acuerdos patrimoniales previos al matrimonio o unión libre."})]})})]})]})}),t.jsx(En,{...hv})]})},xv=`<!DOCTYPE html>\r
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
`,vv="/assets/liquidaciones-CLf4J2S8.jpeg",bv="/assets/acoso-5lfYgMQE.jpg",yv="/assets/pensiones-Cse2TGmQ.jpg",wv="/assets/contratorealidad-CKG4Jjcw.png",jv=Kn.derechoLaboral,kv=()=>{jn(),kn();const e=Sn(xv).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Derecho Laboral y Seguridad Social",children:t.jsx("div",{className:"hero-headline",children:"Derecho Laboral y Seguridad Social"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-laborales",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS LABORALES"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Estrategia, representación y cumplimiento normativo en derecho laboral para empresas y trabajadores."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#contratorealidad",className:"labor-card",style:{"--bg":`url(${wv})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Contrato realidad"]}),t.jsx("div",{className:"labor-card-desc",children:"Reconocimiento del vínculo laboral y prestaciones."})]})}),t.jsx("a",{href:"#liquidaciones",className:"labor-card",style:{"--bg":`url(${vv})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Mora en el pago de la liquidación"]}),t.jsx("div",{className:"labor-card-desc",children:"Cálculo, reclamación y verificación de pagos."})]})}),t.jsx("a",{href:"#acoso",className:"labor-card",style:{"--bg":`url(${bv})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Acoso laboral"]}),t.jsx("div",{className:"labor-card-desc",children:"Comités, protocolos, evidencias y defensa."})]})}),t.jsx("a",{href:"#pensiones",className:"labor-card",style:{"--bg":`url(${yv})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Pensiones y seguridad social"]}),t.jsx("div",{className:"labor-card-desc",children:"Traslados, reliquidaciones y contingencias."})]})}),t.jsx("a",{href:"#reintegro",className:"labor-card",style:{"--bg":`url(${am})`},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Reintegro laboral"]}),t.jsx("div",{className:"labor-card-desc",children:"Acciones de reintegro por despido ilegal o con fuero."})]})})]})]})}),t.jsx(En,{...jv})]})},Cv=`<!DOCTYPE html>\r
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
`,Sv=Kn.derechoPenal,Ev=()=>{jn(),kn();const e=Sn(Cv).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Derecho Penal",children:t.jsx("div",{className:"hero-headline",children:"Derecho Penal"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS PENALES"}),t.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),t.jsx("p",{className:"labor-sub",children:"Representamos sus intereses con experiencia y conocimiento en el ámbito penal."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#audiencias",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Audiencias, medidas de aseguramiento y trámite penal"]}),t.jsx("div",{className:"labor-card-desc",children:"Protección de sus derechos durante todo el trámite penal, hasta sentencia."})]})}),t.jsx("a",{href:"#asesoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Asesoría y Representación Penal integral para Víctimas"]}),t.jsx("div",{className:"labor-card-desc",children:"Representación legal experta para víctimas, desde la denuncia hasta la indemnización."})]})}),t.jsx("a",{href:"#acompañamiento",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Acompañamiento en audiencias y fases procesales clave"]}),t.jsx("div",{className:"labor-card-desc",children:"Defensa en audiencias específicas. Consulte más acá."})]})}),t.jsx("a",{href:"#habeas",className:"labor-card",style:{"--bg":"url('img/habeas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Habeas corpus y libertades inmediatas"]}),t.jsx("div",{className:"labor-card-desc",children:"Trámite inmediato para restablecer la libertad personal."})]})}),t.jsx("a",{href:"#defensa",className:"labor-card",style:{"--bg":"url('img/sexuales.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Defensa y Asesoría en Casos de Delitos Sexuales"]}),t.jsx("div",{className:"labor-card-desc",children:"Protección integral de derechos en investigaciones y juicios por delitos sexuales."})]})}),t.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/fiscalia.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Control y Seguimiento de Procesos en Fiscalía"]}),t.jsx("div",{className:"labor-card-desc",children:"Monitoreamos y gestionamos su proceso penal para evitar estancamientos y proteger sus derechos."})]})})]})]})}),t.jsx(En,{...Sv})]})},Nv=`<!DOCTYPE html>\r
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
`,Av=Kn.impuestos,Iv=()=>{jn(),kn();const e=Sn(Nv).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Impuestos",children:t.jsx("div",{className:"hero-headline",children:"Impuestos"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-impuestos",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE IMPUESTOS"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Consultoría tributaria y planeación fiscal para empresas y personas."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#planeacion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Planeación tributaria"]}),t.jsx("div",{className:"labor-card-desc",children:"Estructuras fiscales eficientes y legales."})]})}),t.jsx("a",{href:"#declaraciones",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Declaraciones y cumplimiento"]}),t.jsx("div",{className:"labor-card-desc",children:"Preparación y presentación oportuna de impuestos."})]})}),t.jsx("a",{href:"#dian",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Defensa ante la DIAN"]}),t.jsx("div",{className:"labor-card-desc",children:"Respuestas a requerimientos y litigios tributarios."})]})}),t.jsx("a",{href:"#transferencia",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Precios de transferencia"]}),t.jsx("div",{className:"labor-card-desc",children:"Estudios y documentación obligatoria."})]})}),t.jsx("a",{href:"#auditoria",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Auditoría fiscal"]}),t.jsx("div",{className:"labor-card-desc",children:"Revisión de obligaciones y contingencias."})]})}),t.jsx("a",{href:"#municipales",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Obligaciones municipales"]}),t.jsx("div",{className:"labor-card-desc",children:"Impuestos locales y de industria y comercio."})]})})]})]})}),t.jsx(En,{...Av})]})},Tv=`<!DOCTYPE html>\r
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
`,zv=Kn.asesoriaContable,Rv=()=>{jn(),kn();const e=Sn(Tv).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Asesoría Contable",children:t.jsx("div",{className:"hero-headline",children:"Asesoría Contable"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"Servicios de Asesoría Contable"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Estrategias sucesorales"]}),t.jsx("div",{className:"labor-card-desc",children:"Testamentos y planificación de herencias."})]})}),t.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Fideicomisos y patrimonios autónomos"]}),t.jsx("div",{className:"labor-card-desc",children:"Estructuras para administrar bienes."})]})}),t.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Protocolos familiares"]}),t.jsx("div",{className:"labor-card-desc",children:"Reglas de gobierno y sucesión empresarial."})]})}),t.jsx("a",{href:"#fiscal",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Optimización fiscal del patrimonio"]}),t.jsx("div",{className:"labor-card-desc",children:"Reducción de cargas impositivas."})]})}),t.jsx("a",{href:"#portafolios",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Administración de portafolios"]}),t.jsx("div",{className:"labor-card-desc",children:"Gestión de inversiones y activos."})]})}),t.jsx("a",{href:"#activos",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Protección de activos"]}),t.jsx("div",{className:"labor-card-desc",children:"Blindaje frente a riesgos y contingencias."})]})})]})]})}),t.jsx(En,{...zv})]})},Ov=`<!DOCTYPE html>\r
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
`,Dv=tm.privacy,Lv=()=>{jn(),kn();const e=Sn(Ov).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition"}),t.jsxs("main",{children:[t.jsx("h1",{children:"Política de Privacidad"}),t.jsx("p",{children:"Esta página describe las políticas de privacidad de Koop Strategic Advisory. Su contenido se actualizará próximamente."})]}),t.jsx(En,{...Dv})]})},Pv=`<!DOCTYPE html>\r
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
`,Fv=Kn.tramitesNotariales,_v=()=>{jn(),kn();const e=Sn(Pv).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Trámites Notariales",children:t.jsx("div",{className:"hero-headline",children:"Trámites Notariales"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS FRENTE A NOTARIA"}),t.jsx("h2",{className:"labor-title",children:"Su trámite notarial exprés."}),t.jsx("p",{className:"labor-sub",children:"Listo en tiempo récord, con total seguridad jurídica."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#compraventa",className:"labor-card",style:{"--bg":"url('img/compraventainmueble.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Compraventa de inmuebles."]}),t.jsx("div",{className:"labor-card-desc",children:"Con revisión de títulos y elaboración de minuta."})]})}),t.jsx("a",{href:"#constitucion",className:"labor-card",style:{"--bg":"url('img/constitucion.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Constitución, reforma o liquidación de sociedades"]}),t.jsx("div",{className:"labor-card-desc",children:"(S.A.S., LTDA., S.A., etc.)."})]})}),t.jsx("a",{href:"sucesiones",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Sucesiones por causa de muerte"]}),t.jsx("div",{className:"labor-card-desc",children:"Realización de escrito de solicitud hasta elevación a escritura pública."})]})}),t.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales y liquidación de sociedad conyugal."]}),t.jsx("div",{className:"labor-card-desc",children:"Proteja su patrimonio y formalice acuerdos con respaldo legal."})]})}),t.jsx("a",{href:"#levantamiento",className:"labor-card",style:{"--bg":"url('img/levantamiento.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Levantamiento de hipotecas"]}),t.jsx("div",{className:"labor-card-desc",children:"Trámite de levantamiento exprés y sin dilaciones."})]})}),t.jsx("a",{href:"#donaciones",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Donaciones de bienes inmuebles"]}),t.jsx("div",{className:"labor-card-desc",children:"Transfiera su patrimonio con seguridad jurídica y sin contratiempos."})]})})]})]})}),t.jsx(En,{...Fv})]})},Mv=`<!DOCTYPE html>\r
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
`,Bv=Kn.accionesDeTutela,Vv=()=>{jn(),kn();const e=Sn(Mv).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return Cn(),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:e}),t.jsx("div",{className:"page-transition","aria-hidden":"true"}),t.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Juezjuez.jpg')",backgroundPosition:"center 70%"},children:[t.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),t.jsx("div",{className:"hero-text","aria-label":"Acciones de tutela",children:t.jsx("div",{className:"hero-headline",children:"Acciones de tutela"})})]}),t.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:t.jsxs("div",{className:"labor-cards-container",children:[t.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),t.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),t.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),t.jsxs("div",{className:"labor-grid",children:[t.jsx("a",{href:"#peticion",className:"labor-card",style:{"--bg":"url('img/tutelapeticion.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Tutela al Derecho de Petición"]}),t.jsx("div",{className:"labor-card-desc",children:"Para obtener respuestas de las autoridades."})]})}),t.jsx("a",{href:"#salud",className:"labor-card",style:{"--bg":"url('img/tutelasalud.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Tutela en  Salud"]}),t.jsx("div",{className:"labor-card-desc",children:"Somos expertos dentro del área de la salud, velamos por sus intereses."})]})}),t.jsx("a",{href:"#revocatoria",className:"labor-card",style:{"--bg":"url('img/tuteladebido.jpeg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Revocatoria de decisiones judiciales"]}),t.jsx("div",{className:"labor-card-desc",children:"Por vulneración al debido proceso de acuerdo a la jurisprudencia procesal."})]})}),t.jsx("a",{href:"#tutelapension",className:"labor-card",style:{"--bg":"url('img/jueztutela.jpg')"},children:t.jsxs("div",{className:"labor-card-content",children:[t.jsx("span",{className:"labor-badge",children:"SERVICIO"}),t.jsxs("div",{className:"labor-card-title",children:[t.jsx("span",{className:"labor-dot"}),"Tutela para obtener pensión"]}),t.jsx("div",{className:"labor-card-desc",children:"Cumplidos los requisitos de la jurisprudencia de la sala de casación laboral"})]})})]})]})}),t.jsx(En,{...Bv})]})},Bt="https://koop-api-a28ac382dd56.herokuapp.com/api";async function Uv({name:e,email:n,password:r,roles:a}){console.log(`API BASE: ${Bt}/auth/register`);const i=await fetch(`${Bt}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:n,password:r,roles:a})}),o=await i.json().catch(()=>({}));if(!i.ok)throw new Error((o==null?void 0:o.message)||"Error en registro");return o}async function Wv(){const e=await fetch(`${Bt}/auth/refresh`,{method:"POST",credentials:"include"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error((n==null?void 0:n.message)||"No se pudo refrescar sesión");return n}async function $v({email:e,password:n}){console.log(`API BASE: ${Bt}/auth/login`);const r=await fetch(`${Bt}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:n})});console.log(r);const a=await r.json().catch(()=>({}));if(!r.ok)throw new Error((a==null?void 0:a.message)||"Credenciales inválidas");return a}async function Kv(){const e=await fetch(`${Bt}/auth/logout`,{method:"POST",credentials:"include"});if(!e.ok){let n="Error al cerrar sesión";try{const r=await e.json();n=(r==null?void 0:r.message)||n}catch{}throw new Error(n)}return!0}function im(e,n){return function(){return e.apply(n,arguments)}}const{toString:Hv}=Object.prototype,{getPrototypeOf:Ec}=Object,{iterator:Io,toStringTag:om}=Symbol,To=(e=>n=>{const r=Hv.call(n);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Hn=e=>(e=e.toLowerCase(),n=>To(n)===e),zo=e=>n=>typeof n===e,{isArray:Ht}=Array,Ba=zo("undefined");function qa(e){return e!==null&&!Ba(e)&&e.constructor!==null&&!Ba(e.constructor)&&un(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const sm=Hn("ArrayBuffer");function qv(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&sm(e.buffer),n}const Zv=zo("string"),un=zo("function"),lm=zo("number"),Za=e=>e!==null&&typeof e=="object",Yv=e=>e===!0||e===!1,Li=e=>{if(To(e)!=="object")return!1;const n=Ec(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(om in e)&&!(Io in e)},Gv=e=>{if(!Za(e)||qa(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Jv=Hn("Date"),Qv=Hn("File"),Xv=Hn("Blob"),e1=Hn("FileList"),n1=e=>Za(e)&&un(e.pipe),r1=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||un(e.append)&&((n=To(e))==="formdata"||n==="object"&&un(e.toString)&&e.toString()==="[object FormData]"))},t1=Hn("URLSearchParams"),[a1,i1,o1,s1]=["ReadableStream","Request","Response","Headers"].map(Hn),l1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ya(e,n,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let a,i;if(typeof e!="object"&&(e=[e]),Ht(e))for(a=0,i=e.length;a<i;a++)n.call(null,e[a],a,e);else{if(qa(e))return;const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(a=0;a<s;a++)l=o[a],n.call(null,e[l],l,e)}}function cm(e,n){if(qa(e))return null;n=n.toLowerCase();const r=Object.keys(e);let a=r.length,i;for(;a-- >0;)if(i=r[a],n===i.toLowerCase())return i;return null}const Jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,dm=e=>!Ba(e)&&e!==Jr;function vl(){const{caseless:e}=dm(this)&&this||{},n={},r=(a,i)=>{const o=e&&cm(n,i)||i;Li(n[o])&&Li(a)?n[o]=vl(n[o],a):Li(a)?n[o]=vl({},a):Ht(a)?n[o]=a.slice():n[o]=a};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&Ya(arguments[a],r);return n}const c1=(e,n,r,{allOwnKeys:a}={})=>(Ya(n,(i,o)=>{r&&un(i)?e[o]=im(i,r):e[o]=i},{allOwnKeys:a}),e),d1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),p1=(e,n,r,a)=>{e.prototype=Object.create(n.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),r&&Object.assign(e.prototype,r)},u1=(e,n,r,a)=>{let i,o,s;const l={};if(n=n||{},e==null)return n;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!a||a(s,e,n))&&!l[s]&&(n[s]=e[s],l[s]=!0);e=r!==!1&&Ec(e)}while(e&&(!r||r(e,n))&&e!==Object.prototype);return n},f1=(e,n,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=n.length;const a=e.indexOf(n,r);return a!==-1&&a===r},m1=e=>{if(!e)return null;if(Ht(e))return e;let n=e.length;if(!lm(n))return null;const r=new Array(n);for(;n-- >0;)r[n]=e[n];return r},h1=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Ec(Uint8Array)),g1=(e,n)=>{const a=(e&&e[Io]).call(e);let i;for(;(i=a.next())&&!i.done;){const o=i.value;n.call(e,o[0],o[1])}},x1=(e,n)=>{let r;const a=[];for(;(r=e.exec(n))!==null;)a.push(r);return a},v1=Hn("HTMLFormElement"),b1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,a,i){return a.toUpperCase()+i}),sp=(({hasOwnProperty:e})=>(n,r)=>e.call(n,r))(Object.prototype),y1=Hn("RegExp"),pm=(e,n)=>{const r=Object.getOwnPropertyDescriptors(e),a={};Ya(r,(i,o)=>{let s;(s=n(i,o,e))!==!1&&(a[o]=s||i)}),Object.defineProperties(e,a)},w1=e=>{pm(e,(n,r)=>{if(un(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const a=e[r];if(un(a)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},j1=(e,n)=>{const r={},a=i=>{i.forEach(o=>{r[o]=!0})};return Ht(e)?a(e):a(String(e).split(n)),r},k1=()=>{},C1=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function S1(e){return!!(e&&un(e.append)&&e[om]==="FormData"&&e[Io])}const E1=e=>{const n=new Array(10),r=(a,i)=>{if(Za(a)){if(n.indexOf(a)>=0)return;if(qa(a))return a;if(!("toJSON"in a)){n[i]=a;const o=Ht(a)?[]:{};return Ya(a,(s,l)=>{const c=r(s,i+1);!Ba(c)&&(o[l]=c)}),n[i]=void 0,o}}return a};return r(e,0)},N1=Hn("AsyncFunction"),A1=e=>e&&(Za(e)||un(e))&&un(e.then)&&un(e.catch),um=((e,n)=>e?setImmediate:n?((r,a)=>(Jr.addEventListener("message",({source:i,data:o})=>{i===Jr&&o===r&&a.length&&a.shift()()},!1),i=>{a.push(i),Jr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",un(Jr.postMessage)),I1=typeof queueMicrotask<"u"?queueMicrotask.bind(Jr):typeof process<"u"&&process.nextTick||um,T1=e=>e!=null&&un(e[Io]),E={isArray:Ht,isArrayBuffer:sm,isBuffer:qa,isFormData:r1,isArrayBufferView:qv,isString:Zv,isNumber:lm,isBoolean:Yv,isObject:Za,isPlainObject:Li,isEmptyObject:Gv,isReadableStream:a1,isRequest:i1,isResponse:o1,isHeaders:s1,isUndefined:Ba,isDate:Jv,isFile:Qv,isBlob:Xv,isRegExp:y1,isFunction:un,isStream:n1,isURLSearchParams:t1,isTypedArray:h1,isFileList:e1,forEach:Ya,merge:vl,extend:c1,trim:l1,stripBOM:d1,inherits:p1,toFlatObject:u1,kindOf:To,kindOfTest:Hn,endsWith:f1,toArray:m1,forEachEntry:g1,matchAll:x1,isHTMLForm:v1,hasOwnProperty:sp,hasOwnProp:sp,reduceDescriptors:pm,freezeMethods:w1,toObjectSet:j1,toCamelCase:b1,noop:k1,toFiniteNumber:C1,findKey:cm,global:Jr,isContextDefined:dm,isSpecCompliantForm:S1,toJSONObject:E1,isAsyncFn:N1,isThenable:A1,setImmediate:um,asap:I1,isIterable:T1};function ce(e,n,r,a,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),r&&(this.config=r),a&&(this.request=a),i&&(this.response=i,this.status=i.status?i.status:null)}E.inherits(ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.status}}});const fm=ce.prototype,mm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{mm[e]={value:e}});Object.defineProperties(ce,mm);Object.defineProperty(fm,"isAxiosError",{value:!0});ce.from=(e,n,r,a,i,o)=>{const s=Object.create(fm);return E.toFlatObject(e,s,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),ce.call(s,e.message,n,r,a,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const z1=null;function bl(e){return E.isPlainObject(e)||E.isArray(e)}function hm(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function lp(e,n,r){return e?e.concat(n).map(function(i,o){return i=hm(i),!r&&o?"["+i+"]":i}).join(r?".":""):n}function R1(e){return E.isArray(e)&&!e.some(bl)}const O1=E.toFlatObject(E,{},null,function(n){return/^is[A-Z]/.test(n)});function Ro(e,n,r){if(!E.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,r=E.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,j){return!E.isUndefined(j[w])});const a=r.metaTokens,i=r.visitor||p,o=r.dots,s=r.indexes,c=(r.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(n);if(!E.isFunction(i))throw new TypeError("visitor must be a function");function d(v){if(v===null)return"";if(E.isDate(v))return v.toISOString();if(E.isBoolean(v))return v.toString();if(!c&&E.isBlob(v))throw new ce("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(v)||E.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function p(v,w,j){let g=v;if(v&&!j&&typeof v=="object"){if(E.endsWith(w,"{}"))w=a?w:w.slice(0,-2),v=JSON.stringify(v);else if(E.isArray(v)&&R1(v)||(E.isFileList(v)||E.endsWith(w,"[]"))&&(g=E.toArray(v)))return w=hm(w),g.forEach(function(x,C){!(E.isUndefined(x)||x===null)&&n.append(s===!0?lp([w],C,o):s===null?w:w+"[]",d(x))}),!1}return bl(v)?!0:(n.append(lp(j,w,o),d(v)),!1)}const m=[],h=Object.assign(O1,{defaultVisitor:p,convertValue:d,isVisitable:bl});function y(v,w){if(!E.isUndefined(v)){if(m.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));m.push(v),E.forEach(v,function(g,u){(!(E.isUndefined(g)||g===null)&&i.call(n,g,E.isString(u)?u.trim():u,w,h))===!0&&y(g,w?w.concat(u):[u])}),m.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return y(e),n}function cp(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return n[a]})}function Nc(e,n){this._pairs=[],e&&Ro(e,this,n)}const gm=Nc.prototype;gm.append=function(n,r){this._pairs.push([n,r])};gm.toString=function(n){const r=n?function(a){return n.call(this,a,cp)}:cp;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function D1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xm(e,n,r){if(!n)return e;const a=r&&r.encode||D1;E.isFunction(r)&&(r={serialize:r});const i=r&&r.serialize;let o;if(i?o=i(n,r):o=E.isURLSearchParams(n)?n.toString():new Nc(n,r).toString(a),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class dp{constructor(){this.handlers=[]}use(n,r,a){return this.handlers.push({fulfilled:n,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){E.forEach(this.handlers,function(a){a!==null&&n(a)})}}const vm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},L1=typeof URLSearchParams<"u"?URLSearchParams:Nc,P1=typeof FormData<"u"?FormData:null,F1=typeof Blob<"u"?Blob:null,_1={isBrowser:!0,classes:{URLSearchParams:L1,FormData:P1,Blob:F1},protocols:["http","https","file","blob","url","data"]},Ac=typeof window<"u"&&typeof document<"u",yl=typeof navigator=="object"&&navigator||void 0,M1=Ac&&(!yl||["ReactNative","NativeScript","NS"].indexOf(yl.product)<0),B1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",V1=Ac&&window.location.href||"http://localhost",U1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ac,hasStandardBrowserEnv:M1,hasStandardBrowserWebWorkerEnv:B1,navigator:yl,origin:V1},Symbol.toStringTag,{value:"Module"})),Je={...U1,..._1};function W1(e,n){return Ro(e,new Je.classes.URLSearchParams,{visitor:function(r,a,i,o){return Je.isNode&&E.isBuffer(r)?(this.append(a,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...n})}function $1(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function K1(e){const n={},r=Object.keys(e);let a;const i=r.length;let o;for(a=0;a<i;a++)o=r[a],n[o]=e[o];return n}function bm(e){function n(r,a,i,o){let s=r[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=o>=r.length;return s=!s&&E.isArray(i)?i.length:s,c?(E.hasOwnProp(i,s)?i[s]=[i[s],a]:i[s]=a,!l):((!i[s]||!E.isObject(i[s]))&&(i[s]=[]),n(r,a,i[s],o)&&E.isArray(i[s])&&(i[s]=K1(i[s])),!l)}if(E.isFormData(e)&&E.isFunction(e.entries)){const r={};return E.forEachEntry(e,(a,i)=>{n($1(a),i,r,0)}),r}return null}function H1(e,n,r){if(E.isString(e))try{return(n||JSON.parse)(e),E.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(e)}const Ga={transitional:vm,adapter:["xhr","http","fetch"],transformRequest:[function(n,r){const a=r.getContentType()||"",i=a.indexOf("application/json")>-1,o=E.isObject(n);if(o&&E.isHTMLForm(n)&&(n=new FormData(n)),E.isFormData(n))return i?JSON.stringify(bm(n)):n;if(E.isArrayBuffer(n)||E.isBuffer(n)||E.isStream(n)||E.isFile(n)||E.isBlob(n)||E.isReadableStream(n))return n;if(E.isArrayBufferView(n))return n.buffer;if(E.isURLSearchParams(n))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(o){if(a.indexOf("application/x-www-form-urlencoded")>-1)return W1(n,this.formSerializer).toString();if((l=E.isFileList(n))||a.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ro(l?{"files[]":n}:n,c&&new c,this.formSerializer)}}return o||i?(r.setContentType("application/json",!1),H1(n)):n}],transformResponse:[function(n){const r=this.transitional||Ga.transitional,a=r&&r.forcedJSONParsing,i=this.responseType==="json";if(E.isResponse(n)||E.isReadableStream(n))return n;if(n&&E.isString(n)&&(a&&!this.responseType||i)){const s=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(n)}catch(l){if(s)throw l.name==="SyntaxError"?ce.from(l,ce.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Je.classes.FormData,Blob:Je.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],e=>{Ga.headers[e]={}});const q1=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Z1=e=>{const n={};let r,a,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),r=s.substring(0,i).trim().toLowerCase(),a=s.substring(i+1).trim(),!(!r||n[r]&&q1[r])&&(r==="set-cookie"?n[r]?n[r].push(a):n[r]=[a]:n[r]=n[r]?n[r]+", "+a:a)}),n},pp=Symbol("internals");function ia(e){return e&&String(e).trim().toLowerCase()}function Pi(e){return e===!1||e==null?e:E.isArray(e)?e.map(Pi):String(e)}function Y1(e){const n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=r.exec(e);)n[a[1]]=a[2];return n}const G1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function xs(e,n,r,a,i){if(E.isFunction(a))return a.call(this,n,r);if(i&&(n=r),!!E.isString(n)){if(E.isString(a))return n.indexOf(a)!==-1;if(E.isRegExp(a))return a.test(n)}}function J1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,r,a)=>r.toUpperCase()+a)}function Q1(e,n){const r=E.toCamelCase(" "+n);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+r,{value:function(i,o,s){return this[a].call(this,n,i,o,s)},configurable:!0})})}let fn=class{constructor(n){n&&this.set(n)}set(n,r,a){const i=this;function o(l,c,d){const p=ia(c);if(!p)throw new Error("header name must be a non-empty string");const m=E.findKey(i,p);(!m||i[m]===void 0||d===!0||d===void 0&&i[m]!==!1)&&(i[m||c]=Pi(l))}const s=(l,c)=>E.forEach(l,(d,p)=>o(d,p,c));if(E.isPlainObject(n)||n instanceof this.constructor)s(n,r);else if(E.isString(n)&&(n=n.trim())&&!G1(n))s(Z1(n),r);else if(E.isObject(n)&&E.isIterable(n)){let l={},c,d;for(const p of n){if(!E.isArray(p))throw TypeError("Object iterator must return a key-value pair");l[d=p[0]]=(c=l[d])?E.isArray(c)?[...c,p[1]]:[c,p[1]]:p[1]}s(l,r)}else n!=null&&o(r,n,a);return this}get(n,r){if(n=ia(n),n){const a=E.findKey(this,n);if(a){const i=this[a];if(!r)return i;if(r===!0)return Y1(i);if(E.isFunction(r))return r.call(this,i,a);if(E.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,r){if(n=ia(n),n){const a=E.findKey(this,n);return!!(a&&this[a]!==void 0&&(!r||xs(this,this[a],a,r)))}return!1}delete(n,r){const a=this;let i=!1;function o(s){if(s=ia(s),s){const l=E.findKey(a,s);l&&(!r||xs(a,a[l],l,r))&&(delete a[l],i=!0)}}return E.isArray(n)?n.forEach(o):o(n),i}clear(n){const r=Object.keys(this);let a=r.length,i=!1;for(;a--;){const o=r[a];(!n||xs(this,this[o],o,n,!0))&&(delete this[o],i=!0)}return i}normalize(n){const r=this,a={};return E.forEach(this,(i,o)=>{const s=E.findKey(a,o);if(s){r[s]=Pi(i),delete r[o];return}const l=n?J1(o):String(o).trim();l!==o&&delete r[o],r[l]=Pi(i),a[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const r=Object.create(null);return E.forEach(this,(a,i)=>{a!=null&&a!==!1&&(r[i]=n&&E.isArray(a)?a.join(", "):a)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,r])=>n+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...r){const a=new this(n);return r.forEach(i=>a.set(i)),a}static accessor(n){const a=(this[pp]=this[pp]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=ia(s);a[l]||(Q1(i,s),a[l]=!0)}return E.isArray(n)?n.forEach(o):o(n),this}};fn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(fn.prototype,({value:e},n)=>{let r=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(a){this[r]=a}}});E.freezeMethods(fn);function vs(e,n){const r=this||Ga,a=n||r,i=fn.from(a.headers);let o=a.data;return E.forEach(e,function(l){o=l.call(r,o,i.normalize(),n?n.status:void 0)}),i.normalize(),o}function ym(e){return!!(e&&e.__CANCEL__)}function qt(e,n,r){ce.call(this,e??"canceled",ce.ERR_CANCELED,n,r),this.name="CanceledError"}E.inherits(qt,ce,{__CANCEL__:!0});function wm(e,n,r){const a=r.config.validateStatus;!r.status||!a||a(r.status)?e(r):n(new ce("Request failed with status code "+r.status,[ce.ERR_BAD_REQUEST,ce.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function X1(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function eb(e,n){e=e||10;const r=new Array(e),a=new Array(e);let i=0,o=0,s;return n=n!==void 0?n:1e3,function(c){const d=Date.now(),p=a[o];s||(s=d),r[i]=c,a[i]=d;let m=o,h=0;for(;m!==i;)h+=r[m++],m=m%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),d-s<n)return;const y=p&&d-p;return y?Math.round(h*1e3/y):void 0}}function nb(e,n){let r=0,a=1e3/n,i,o;const s=(d,p=Date.now())=>{r=p,i=null,o&&(clearTimeout(o),o=null),e(...d)};return[(...d)=>{const p=Date.now(),m=p-r;m>=a?s(d,p):(i=d,o||(o=setTimeout(()=>{o=null,s(i)},a-m)))},()=>i&&s(i)]}const co=(e,n,r=3)=>{let a=0;const i=eb(50,250);return nb(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,c=s-a,d=i(c),p=s<=l;a=s;const m={loaded:s,total:l,progress:l?s/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&p?(l-s)/d:void 0,event:o,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(m)},r)},up=(e,n)=>{const r=e!=null;return[a=>n[0]({lengthComputable:r,total:e,loaded:a}),n[1]]},fp=e=>(...n)=>E.asap(()=>e(...n)),rb=Je.hasStandardBrowserEnv?((e,n)=>r=>(r=new URL(r,Je.origin),e.protocol===r.protocol&&e.host===r.host&&(n||e.port===r.port)))(new URL(Je.origin),Je.navigator&&/(msie|trident)/i.test(Je.navigator.userAgent)):()=>!0,tb=Je.hasStandardBrowserEnv?{write(e,n,r,a,i,o){const s=[e+"="+encodeURIComponent(n)];E.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),E.isString(a)&&s.push("path="+a),E.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ab(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ib(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function jm(e,n,r){let a=!ab(n);return e&&(a||r==!1)?ib(e,n):n}const mp=e=>e instanceof fn?{...e}:e;function ot(e,n){n=n||{};const r={};function a(d,p,m,h){return E.isPlainObject(d)&&E.isPlainObject(p)?E.merge.call({caseless:h},d,p):E.isPlainObject(p)?E.merge({},p):E.isArray(p)?p.slice():p}function i(d,p,m,h){if(E.isUndefined(p)){if(!E.isUndefined(d))return a(void 0,d,m,h)}else return a(d,p,m,h)}function o(d,p){if(!E.isUndefined(p))return a(void 0,p)}function s(d,p){if(E.isUndefined(p)){if(!E.isUndefined(d))return a(void 0,d)}else return a(void 0,p)}function l(d,p,m){if(m in n)return a(d,p);if(m in e)return a(void 0,d)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(d,p,m)=>i(mp(d),mp(p),m,!0)};return E.forEach(Object.keys({...e,...n}),function(p){const m=c[p]||i,h=m(e[p],n[p],p);E.isUndefined(h)&&m!==l||(r[p]=h)}),r}const km=e=>{const n=ot({},e);let{data:r,withXSRFToken:a,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=n;n.headers=s=fn.from(s),n.url=xm(jm(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(E.isFormData(r)){if(Je.hasStandardBrowserEnv||Je.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[d,...p]=c?c.split(";").map(m=>m.trim()).filter(Boolean):[];s.setContentType([d||"multipart/form-data",...p].join("; "))}}if(Je.hasStandardBrowserEnv&&(a&&E.isFunction(a)&&(a=a(n)),a||a!==!1&&rb(n.url))){const d=i&&o&&tb.read(o);d&&s.set(i,d)}return n},ob=typeof XMLHttpRequest<"u",sb=ob&&function(e){return new Promise(function(r,a){const i=km(e);let o=i.data;const s=fn.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=i,p,m,h,y,v;function w(){y&&y(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(p),i.signal&&i.signal.removeEventListener("abort",p)}let j=new XMLHttpRequest;j.open(i.method.toUpperCase(),i.url,!0),j.timeout=i.timeout;function g(){if(!j)return;const x=fn.from("getAllResponseHeaders"in j&&j.getAllResponseHeaders()),N={data:!l||l==="text"||l==="json"?j.responseText:j.response,status:j.status,statusText:j.statusText,headers:x,config:e,request:j};wm(function(M){r(M),w()},function(M){a(M),w()},N),j=null}"onloadend"in j?j.onloadend=g:j.onreadystatechange=function(){!j||j.readyState!==4||j.status===0&&!(j.responseURL&&j.responseURL.indexOf("file:")===0)||setTimeout(g)},j.onabort=function(){j&&(a(new ce("Request aborted",ce.ECONNABORTED,e,j)),j=null)},j.onerror=function(){a(new ce("Network Error",ce.ERR_NETWORK,e,j)),j=null},j.ontimeout=function(){let C=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const N=i.transitional||vm;i.timeoutErrorMessage&&(C=i.timeoutErrorMessage),a(new ce(C,N.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,e,j)),j=null},o===void 0&&s.setContentType(null),"setRequestHeader"in j&&E.forEach(s.toJSON(),function(C,N){j.setRequestHeader(N,C)}),E.isUndefined(i.withCredentials)||(j.withCredentials=!!i.withCredentials),l&&l!=="json"&&(j.responseType=i.responseType),d&&([h,v]=co(d,!0),j.addEventListener("progress",h)),c&&j.upload&&([m,y]=co(c),j.upload.addEventListener("progress",m),j.upload.addEventListener("loadend",y)),(i.cancelToken||i.signal)&&(p=x=>{j&&(a(!x||x.type?new qt(null,e,j):x),j.abort(),j=null)},i.cancelToken&&i.cancelToken.subscribe(p),i.signal&&(i.signal.aborted?p():i.signal.addEventListener("abort",p)));const u=X1(i.url);if(u&&Je.protocols.indexOf(u)===-1){a(new ce("Unsupported protocol "+u+":",ce.ERR_BAD_REQUEST,e));return}j.send(o||null)})},lb=(e,n)=>{const{length:r}=e=e?e.filter(Boolean):[];if(n||r){let a=new AbortController,i;const o=function(d){if(!i){i=!0,l();const p=d instanceof Error?d:this.reason;a.abort(p instanceof ce?p:new qt(p instanceof Error?p.message:p))}};let s=n&&setTimeout(()=>{s=null,o(new ce(`timeout ${n} of ms exceeded`,ce.ETIMEDOUT))},n);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),e=null)};e.forEach(d=>d.addEventListener("abort",o));const{signal:c}=a;return c.unsubscribe=()=>E.asap(l),c}},cb=function*(e,n){let r=e.byteLength;if(r<n){yield e;return}let a=0,i;for(;a<r;)i=a+n,yield e.slice(a,i),a=i},db=async function*(e,n){for await(const r of pb(e))yield*cb(r,n)},pb=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:r,value:a}=await n.read();if(r)break;yield a}}finally{await n.cancel()}},hp=(e,n,r,a)=>{const i=db(e,n);let o=0,s,l=c=>{s||(s=!0,a&&a(c))};return new ReadableStream({async pull(c){try{const{done:d,value:p}=await i.next();if(d){l(),c.close();return}let m=p.byteLength;if(r){let h=o+=m;r(h)}c.enqueue(new Uint8Array(p))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},Oo=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Cm=Oo&&typeof ReadableStream=="function",ub=Oo&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Sm=(e,...n)=>{try{return!!e(...n)}catch{return!1}},fb=Cm&&Sm(()=>{let e=!1;const n=new Request(Je.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),gp=64*1024,wl=Cm&&Sm(()=>E.isReadableStream(new Response("").body)),po={stream:wl&&(e=>e.body)};Oo&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!po[n]&&(po[n]=E.isFunction(e[n])?r=>r[n]():(r,a)=>{throw new ce(`Response type '${n}' is not supported`,ce.ERR_NOT_SUPPORT,a)})})})(new Response);const mb=async e=>{if(e==null)return 0;if(E.isBlob(e))return e.size;if(E.isSpecCompliantForm(e))return(await new Request(Je.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(E.isArrayBufferView(e)||E.isArrayBuffer(e))return e.byteLength;if(E.isURLSearchParams(e)&&(e=e+""),E.isString(e))return(await ub(e)).byteLength},hb=async(e,n)=>{const r=E.toFiniteNumber(e.getContentLength());return r??mb(n)},gb=Oo&&(async e=>{let{url:n,method:r,data:a,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:c,responseType:d,headers:p,withCredentials:m="same-origin",fetchOptions:h}=km(e);d=d?(d+"").toLowerCase():"text";let y=lb([i,o&&o.toAbortSignal()],s),v;const w=y&&y.unsubscribe&&(()=>{y.unsubscribe()});let j;try{if(c&&fb&&r!=="get"&&r!=="head"&&(j=await hb(p,a))!==0){let N=new Request(n,{method:"POST",body:a,duplex:"half"}),R;if(E.isFormData(a)&&(R=N.headers.get("content-type"))&&p.setContentType(R),N.body){const[M,A]=up(j,co(fp(c)));a=hp(N.body,gp,M,A)}}E.isString(m)||(m=m?"include":"omit");const g="credentials"in Request.prototype;v=new Request(n,{...h,signal:y,method:r.toUpperCase(),headers:p.normalize().toJSON(),body:a,duplex:"half",credentials:g?m:void 0});let u=await fetch(v,h);const x=wl&&(d==="stream"||d==="response");if(wl&&(l||x&&w)){const N={};["status","statusText","headers"].forEach(U=>{N[U]=u[U]});const R=E.toFiniteNumber(u.headers.get("content-length")),[M,A]=l&&up(R,co(fp(l),!0))||[];u=new Response(hp(u.body,gp,M,()=>{A&&A(),w&&w()}),N)}d=d||"text";let C=await po[E.findKey(po,d)||"text"](u,e);return!x&&w&&w(),await new Promise((N,R)=>{wm(N,R,{data:C,headers:fn.from(u.headers),status:u.status,statusText:u.statusText,config:e,request:v})})}catch(g){throw w&&w(),g&&g.name==="TypeError"&&/Load failed|fetch/i.test(g.message)?Object.assign(new ce("Network Error",ce.ERR_NETWORK,e,v),{cause:g.cause||g}):ce.from(g,g&&g.code,e,v)}}),jl={http:z1,xhr:sb,fetch:gb};E.forEach(jl,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const xp=e=>`- ${e}`,xb=e=>E.isFunction(e)||e===null||e===!1,Em={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:n}=e;let r,a;const i={};for(let o=0;o<n;o++){r=e[o];let s;if(a=r,!xb(r)&&(a=jl[(s=String(r)).toLowerCase()],a===void 0))throw new ce(`Unknown adapter '${s}'`);if(a)break;i[s||"#"+o]=a}if(!a){const o=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=n?o.length>1?`since :
`+o.map(xp).join(`
`):" "+xp(o[0]):"as no adapter specified";throw new ce("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return a},adapters:jl};function bs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new qt(null,e)}function vp(e){return bs(e),e.headers=fn.from(e.headers),e.data=vs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Em.getAdapter(e.adapter||Ga.adapter)(e).then(function(a){return bs(e),a.data=vs.call(e,e.transformResponse,a),a.headers=fn.from(a.headers),a},function(a){return ym(a)||(bs(e),a&&a.response&&(a.response.data=vs.call(e,e.transformResponse,a.response),a.response.headers=fn.from(a.response.headers))),Promise.reject(a)})}const Nm="1.11.0",Do={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{Do[e]=function(a){return typeof a===e||"a"+(n<1?"n ":" ")+e}});const bp={};Do.transitional=function(n,r,a){function i(o,s){return"[Axios v"+Nm+"] Transitional option '"+o+"'"+s+(a?". "+a:"")}return(o,s,l)=>{if(n===!1)throw new ce(i(s," has been removed"+(r?" in "+r:"")),ce.ERR_DEPRECATED);return r&&!bp[s]&&(bp[s]=!0,console.warn(i(s," has been deprecated since v"+r+" and will be removed in the near future"))),n?n(o,s,l):!0}};Do.spelling=function(n){return(r,a)=>(console.warn(`${a} is likely a misspelling of ${n}`),!0)};function vb(e,n,r){if(typeof e!="object")throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let i=a.length;for(;i-- >0;){const o=a[i],s=n[o];if(s){const l=e[o],c=l===void 0||s(l,o,e);if(c!==!0)throw new ce("option "+o+" must be "+c,ce.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new ce("Unknown option "+o,ce.ERR_BAD_OPTION)}}const Fi={assertOptions:vb,validators:Do},Xn=Fi.validators;let et=class{constructor(n){this.defaults=n||{},this.interceptors={request:new dp,response:new dp}}async request(n,r){try{return await this._request(n,r)}catch(a){if(a instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{a.stack?o&&!String(a.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+o):a.stack=o}catch{}}throw a}}_request(n,r){typeof n=="string"?(r=r||{},r.url=n):r=n||{},r=ot(this.defaults,r);const{transitional:a,paramsSerializer:i,headers:o}=r;a!==void 0&&Fi.assertOptions(a,{silentJSONParsing:Xn.transitional(Xn.boolean),forcedJSONParsing:Xn.transitional(Xn.boolean),clarifyTimeoutError:Xn.transitional(Xn.boolean)},!1),i!=null&&(E.isFunction(i)?r.paramsSerializer={serialize:i}:Fi.assertOptions(i,{encode:Xn.function,serialize:Xn.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Fi.assertOptions(r,{baseUrl:Xn.spelling("baseURL"),withXsrfToken:Xn.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=o&&E.merge(o.common,o[r.method]);o&&E.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),r.headers=fn.concat(s,o);const l=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(r)===!1||(c=c&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const d=[];this.interceptors.response.forEach(function(w){d.push(w.fulfilled,w.rejected)});let p,m=0,h;if(!c){const v=[vp.bind(this),void 0];for(v.unshift(...l),v.push(...d),h=v.length,p=Promise.resolve(r);m<h;)p=p.then(v[m++],v[m++]);return p}h=l.length;let y=r;for(m=0;m<h;){const v=l[m++],w=l[m++];try{y=v(y)}catch(j){w.call(this,j);break}}try{p=vp.call(this,y)}catch(v){return Promise.reject(v)}for(m=0,h=d.length;m<h;)p=p.then(d[m++],d[m++]);return p}getUri(n){n=ot(this.defaults,n);const r=jm(n.baseURL,n.url,n.allowAbsoluteUrls);return xm(r,n.params,n.paramsSerializer)}};E.forEach(["delete","get","head","options"],function(n){et.prototype[n]=function(r,a){return this.request(ot(a||{},{method:n,url:r,data:(a||{}).data}))}});E.forEach(["post","put","patch"],function(n){function r(a){return function(o,s,l){return this.request(ot(l||{},{method:n,headers:a?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}et.prototype[n]=r(),et.prototype[n+"Form"]=r(!0)});let bb=class Am{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const a=this;this.promise.then(i=>{if(!a._listeners)return;let o=a._listeners.length;for(;o-- >0;)a._listeners[o](i);a._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{a.subscribe(l),o=l}).then(i);return s.cancel=function(){a.unsubscribe(o)},s},n(function(o,s,l){a.reason||(a.reason=new qt(o,s,l),r(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const r=this._listeners.indexOf(n);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const n=new AbortController,r=a=>{n.abort(a)};return this.subscribe(r),n.signal.unsubscribe=()=>this.unsubscribe(r),n.signal}static source(){let n;return{token:new Am(function(i){n=i}),cancel:n}}};function yb(e){return function(r){return e.apply(null,r)}}function wb(e){return E.isObject(e)&&e.isAxiosError===!0}const kl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(kl).forEach(([e,n])=>{kl[n]=e});function Im(e){const n=new et(e),r=im(et.prototype.request,n);return E.extend(r,et.prototype,n,{allOwnKeys:!0}),E.extend(r,n,null,{allOwnKeys:!0}),r.create=function(i){return Im(ot(e,i))},r}const De=Im(Ga);De.Axios=et;De.CanceledError=qt;De.CancelToken=bb;De.isCancel=ym;De.VERSION=Nm;De.toFormData=Ro;De.AxiosError=ce;De.Cancel=De.CanceledError;De.all=function(n){return Promise.all(n)};De.spread=yb;De.isAxiosError=wb;De.mergeConfig=ot;De.AxiosHeaders=fn;De.formToJSON=e=>bm(E.isHTMLForm(e)?new FormData(e):e);De.getAdapter=Em.getAdapter;De.HttpStatusCode=kl;De.default=De;const{Axios:My,AxiosError:By,CanceledError:Vy,isCancel:Uy,CancelToken:Wy,VERSION:$y,all:Ky,Cancel:Hy,isAxiosError:qy,spread:Zy,toFormData:Yy,AxiosHeaders:Gy,HttpStatusCode:Jy,formToJSON:Qy,getAdapter:Xy,mergeConfig:e2}=De,Tm="https://koop-api-a28ac382dd56.herokuapp.com/api",Ce=De.create({baseURL:Tm,withCredentials:!0}),jb=De.create({baseURL:Tm,withCredentials:!0});let ys=!1,Cl=[];function kb(e){Cl.push(e)}function Cb(e){Cl.forEach(n=>{try{n(e)}catch{}}),Cl=[]}function Sb({getAccessToken:e,setAccessToken:n,onLogout:r}){Ce.interceptors.request.use(a=>{var i,o;try{let s;try{s=e==null?void 0:e()}catch{}if(!s&&typeof window<"u")try{s=(i=window.localStorage)==null?void 0:i.getItem("accessToken")}catch{}s&&!((o=a.headers)!=null&&o.Authorization)&&(a.headers=a.headers||{},a.headers.Authorization=`Bearer ${s}`)}catch(s){console.error("[axios] Request interceptor error:",s)}return a}),Ce.interceptors.response.use(a=>a,async a=>{var p,m;const{response:i,config:o}=a||{},s=i==null?void 0:i.status,l=o||{},c=String((l==null?void 0:l.url)||""),d=c.includes("/auth/login")||c.includes("/auth/register")||c.includes("/auth/refresh");if(s!==401||d||l._retry)return Promise.reject(a);if(l._retry=!0,ys)return new Promise((h,y)=>{kb(v=>{try{l.headers=l.headers||{},v&&(l.headers.Authorization=`Bearer ${v}`),h(Ce(l))}catch(w){y(w)}})});ys=!0;try{const h=await jb.post("/auth/refresh"),y=(p=h==null?void 0:h.data)==null?void 0:p.accessToken;if(!y)throw new Error("No accessToken in refresh");try{n==null||n(y)}catch{}return Cb(y),l.headers=l.headers||{},l.headers.Authorization=`Bearer ${y}`,Ce(l)}catch(h){const y=(m=h==null?void 0:h.response)==null?void 0:m.status;if(y===401||y===403)try{await(r==null?void 0:r())}catch{}return Promise.reject(h)}finally{ys=!1}})}const zm=f.createContext(null),yp=["admin","user"];function Sl(e,{defaultRole:n="user"}={}){const r=String(n||"user").trim().toLowerCase(),a=yp.includes(r)?r:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>yp.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function yi(e){try{const n=e.split(".")[1],r=atob(n.replace(/-/g,"+").replace(/_/g,"/"));return JSON.parse(r)}catch{return null}}function wi(e,n){return e?{id:e.sub,name:e.name,email:e.email,roles:Sl(e.roles),active:e.active!==!1,driveFolders:e.driveFolders||[]}:n?{id:n.id,name:n.name,email:n.email,roles:Sl(n.roles),active:n.active!==!1,driveFolders:n.driveFolders||[]}:null}function Eb({children:e}){const[n,r]=f.useState(()=>localStorage.getItem("accessToken")||null),[a,i]=f.useState(()=>{const y=localStorage.getItem("accessToken");if(!y)return null;const v=yi(y);return wi(v,null)}),[o,s]=f.useState(!1),l=!!n;f.useEffect(()=>{if(!n)localStorage.removeItem("accessToken"),i(null);else{localStorage.setItem("accessToken",n);const y=yi(n);y&&i(wi(y,null))}},[n]);const c=async(y,v)=>{s(!0);try{const{accessToken:w,user:j}=await $v({email:y,password:v});r(w);const g=yi(w);return i(wi(g,j)),{ok:!0}}catch(w){return{ok:!1,error:w.message}}finally{s(!1)}},d=async(y,v,w,j)=>{s(!0);try{const g=Array.isArray(j)&&j.length>0,u=await Uv({name:y,email:v,password:w,roles:g?Sl(j):void 0});if(u!=null&&u.accessToken){r(u.accessToken);const x=yi(u.accessToken);i(wi(x,u.user))}return{ok:!0,data:u}}catch(g){return{ok:!1,error:g.message}}finally{s(!1)}},p=async()=>{try{await Kv()}catch{}finally{r(null),i(null)}},m=f.useMemo(()=>({accessToken:n,user:a,isAuthenticated:l,loading:o,login:c,register:d,logout:p,refresh:Wv}),[n,a,l,o]),h=f.useRef(!1);return f.useEffect(()=>{h.current||(Sb({getAccessToken:()=>n,setAccessToken:y=>r(y),onLogout:()=>p()}),h.current=!0)},[]),t.jsx(zm.Provider,{value:m,children:e})}function qe(){const e=f.useContext(zm);if(!e)throw new Error("useAuth debe usarse dentro de AuthProvider");return e}const Rm="/assets/Koop%20Logo-DEFOyNWT.png";function Nb(){var h,y;const{login:e,loading:n}=qe(),r=Wr(),i=((y=(h=$n().state)==null?void 0:h.from)==null?void 0:y.pathname)||"/dashboard",[o,s]=f.useState(""),[l,c]=f.useState(""),[d,p]=f.useState(""),m=async v=>{v.preventDefault(),p(""),console.log("Submitting login form, Hola q ac",o);const w=await e(o,l);if(!w.ok){p(w.error||"Error al iniciar sesión");return}r(i,{replace:!0})};return f.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),t.jsxs("div",{className:"auth-page",children:[t.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:t.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),t.jsx("div",{className:"auth-bg-overlay"}),t.jsxs("div",{className:"auth-card",children:[t.jsx(se,{to:"/",children:t.jsx("img",{src:Rm,alt:"Logo KOOP",className:"logo"})}),t.jsx("h2",{children:"Login KOOP"}),d&&t.jsx("div",{className:"auth-error",children:d}),t.jsxs("form",{onSubmit:m,children:[t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"email",children:"Correo"}),t.jsx("input",{id:"email",type:"email",placeholder:"Ingrese su correo",value:o,onChange:v=>s(v.target.value),required:!0})]}),t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"password",children:"Contraseña"}),t.jsx("input",{id:"password",type:"password",placeholder:"Ingrese su contraseña",value:l,onChange:v=>c(v.target.value),required:!0})]}),t.jsx("button",{type:"submit",className:"login-button",disabled:n,children:n?"Ingresando...":"Iniciar sesión"})]}),t.jsxs("div",{className:"auth-actions",children:["¿No tienes cuenta? ",t.jsx(se,{to:"/register",children:"Regístrate"})," · ",t.jsx(se,{to:"/",children:"Volver al inicio"})]})]})]})}function Ab(){const[e,n]=f.useState({name:"",email:"",password:""}),[r,a]=f.useState(!1),[i,o]=f.useState(""),[s,l]=f.useState(""),{register:c}=qe(),d=Wr(),p=h=>n({...e,[h.target.name]:h.target.value}),m=async h=>{h.preventDefault(),o(""),l(""),a(!0);try{const y=await c(e.name,e.email,e.password);if(y.ok){const v=y.data||{ok:!0};v!=null&&v.accessToken?d("/dashboard"):(l("Tu registro fue recibido. Un administrador activara tu cuenta y te avisaremos por correo."),n({name:"",email:"",password:""}))}else o(y.error||"Error en registro")}catch(y){const v=(y==null?void 0:y.message)||"Error en registro";o(v)}finally{a(!1)}};return f.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),t.jsxs("div",{className:"auth-page",children:[t.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:t.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),t.jsx("div",{className:"auth-bg-overlay"}),t.jsxs("div",{className:"auth-card",children:[t.jsx("img",{src:Rm,alt:"Logo KOOP",className:"logo"}),t.jsx("h2",{children:"Crear Cuenta"}),i&&t.jsx("div",{className:"auth-error",children:i}),s&&t.jsx("div",{className:"auth-info",children:s}),t.jsxs("form",{onSubmit:m,children:[t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"name",children:"Nombre"}),t.jsx("input",{id:"name",name:"name",type:"text",placeholder:"Tu nombre",value:e.name,onChange:p})]}),t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"email",children:"Correo"}),t.jsx("input",{id:"email",name:"email",type:"email",placeholder:"tu@email.com",value:e.email,onChange:p,required:!0})]}),t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"password",children:"Contrasena"}),t.jsx("input",{id:"password",name:"password",type:"password",placeholder:"Minimo 8 caracteres",value:e.password,onChange:p,required:!0})]}),t.jsx("button",{type:"submit",className:"login-button",disabled:r,children:r?"Creando...":"Registrarme"})]}),t.jsxs("div",{className:"auth-actions",children:["Ya tienes cuenta? ",t.jsx(se,{to:"/login",children:"Inicia sesion"})]})]})]})}function Ib(e){return e!=null&&e.roles?(Array.isArray(e.roles)?e.roles:[e.roles]).map(n=>String(n||"").toLowerCase()).includes("admin"):!1}function Tb(){const{user:e,logout:n}=qe(),r=Ib(e);return e?t.jsxs("div",{style:{padding:24,display:"flex",flexDirection:"column",gap:16},children:[t.jsx("h1",{children:"Panel Privado"}),t.jsxs("div",{children:[t.jsxs("p",{children:["Bienvenido: ",e.email]}),t.jsxs("p",{children:["Roles: ",Array.isArray(e.roles)?e.roles.join(", "):"N/A"]}),t.jsxs("p",{children:["Estado: ",e.active===!1?"Inactivo":"Activo"]})]}),r&&t.jsx("div",{style:{display:"flex",gap:12},children:t.jsx(se,{className:"btn btn-primary",to:"/admin/usuarios",children:"Gestionar usuarios"})}),t.jsx("div",{children:t.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Cerrar sesion"})})]}):t.jsxs("div",{style:{padding:24},children:[t.jsx("h1",{children:"Panel Privado"}),t.jsx("p",{children:"No hay usuario."})]})}async function Ic(){const{data:e}=await Ce.get("/admin/users");return e}async function zb(e,n){const{data:r}=await Ce.patch(`/admin/users/${e}/active`,{active:n});return r}async function Rb(e){const{data:n}=await Ce.post(`/admin/users/${e}/grant-admin`);return n}async function Ob(e){const{data:n}=await Ce.post(`/admin/users/${e}/revoke-admin`);return n}async function Db(e){const{data:n}=await Ce.delete(`/admin/users/${e}`);return n}async function Tc(){const{data:e}=await Ce.get("/admin/clients/active");return e}async function Lb(e,n){const{data:r}=await Ce.patch(`/admin/clients/${e}`,n);return r}async function Pb(e,n){const{data:r}=await Ce.patch(`/admin/clients/${e}/assign`,{adminUserId:n});return r}async function Fb(e,n){const{data:r}=await Ce.post(`/admin/clients/from-user/${e}`,n);return r}async function _b(e,n){const r={};n&&(r["x-delete-pass"]=n);const{data:a}=await Ce.delete(`/admin/clients/${e}`,{headers:r});return a}const wp={success:{bg:"#064e3b",fg:"#a7f3d0",border:"rgba(16,185,129,0.35)"},danger:{bg:"#7f1d1d",fg:"#fecaca",border:"rgba(248,113,113,0.35)"}};function Om({kind:e="success",children:n,autoHideMs:r,onClose:a,style:i,className:o}){const[s,l]=f.useState(!1);f.useEffect(()=>{const m=setTimeout(()=>l(!0),10);return()=>clearTimeout(m)},[]),f.useEffect(()=>{if(!r)return;const m=setTimeout(()=>{l(!1);const h=setTimeout(()=>a==null?void 0:a(),220);return()=>clearTimeout(h)},r);return()=>clearTimeout(m)},[r,a]);const c=wp[e]||wp.success,d={background:c.bg,color:c.fg,border:`1px solid ${c.border}`,padding:12,borderRadius:8,marginBottom:16,boxShadow:"0 6px 18px rgba(0,0,0,0.25) inset",transition:"opacity 200ms ease, transform 200ms ease",opacity:s?1:0,transform:s?"translateY(0)":"translateY(-6px)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10},p=()=>{l(!1),setTimeout(()=>a==null?void 0:a(),200)};return t.jsxs("div",{role:"alert",className:o,style:{...d,...i||{}},children:[t.jsx("div",{style:{lineHeight:1.4},children:n}),a&&t.jsx("button",{type:"button",onClick:p,"aria-label":"Cerrar aviso",style:{background:"transparent",color:c.fg,border:"none",fontSize:18,lineHeight:1,cursor:"pointer",padding:"2px 4px"},children:"×"})]})}function zc(e){return t.jsx(Om,{kind:"success",...e})}function Va(e){return t.jsx(Om,{kind:"danger",...e})}const Rc={background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"};function Dm({children:e,style:n}){return t.jsx("div",{style:{display:"grid",gap:10,...n||{}},children:e})}function El({children:e,cols:n=2,style:r}){return t.jsx("div",{style:{display:"grid",gap:10,gridTemplateColumns:`repeat(${n}, 1fr)`,...r||{}},children:e})}function Mn({label:e,type:n="text",value:r,onChange:a,placeholder:i,readOnly:o,inputProps:s,children:l}){return t.jsxs("label",{style:{display:"grid",gap:6},children:[e!=null&&t.jsx("span",{children:e}),l||t.jsx("input",{type:n,value:r,onChange:a,placeholder:i,readOnly:o,style:Rc,...s||{}})]})}function Mb({label:e,value:n,onChange:r,rows:a=3,placeholder:i,textareaProps:o}){return t.jsxs("label",{style:{display:"grid",gap:6},children:[e!=null&&t.jsx("span",{children:e}),t.jsx("textarea",{rows:a,value:n,onChange:r,placeholder:i,style:{...Rc,resize:"vertical"},...o||{}})]})}function Bb({label:e,value:n,onChange:r,options:a=[],placeholder:i="Seleccione una opción",selectProps:o}){return t.jsxs("label",{style:{display:"grid",gap:6},children:[e!=null&&t.jsx("span",{children:e}),t.jsxs("select",{value:n,onChange:r,style:Rc,...o||{},children:[i&&t.jsx("option",{value:"",disabled:!0,children:i}),a.map(s=>t.jsx("option",{value:String(s.value??s.id),children:String(s.label??s.name??s.id)},String(s.value??s.id)))]})]})}const jp=["admin","user"];function Vb(e,{defaultRole:n="user"}={}){const r=String(n||"user").trim().toLowerCase(),a=jp.includes(r)?r:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>jp.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function Ub({users:e=[],loading:n=!1,currentUserId:r,updating:a,roleUpdating:i,deleting:o,onToggleActive:s,onOpenClientModal:l,onMakeAdmin:c,onRevokeAdmin:d,onRemoveUser:p,initialOpen:m=!0}){const[h,y]=f.useState(!!m),v=f.useMemo(()=>{const j=u=>(u==null?void 0:u.active)===!1||(u==null?void 0:u.isActive)===!1,g=(u,x)=>{const C=u!=null&&u.createdAt?new Date(u.createdAt).getTime():0;return(x!=null&&x.createdAt?new Date(x.createdAt).getTime():0)-C};return(e||[]).filter(j).sort(g)},[e]),w=j=>{const g=j.createdAt?new Date(j.createdAt):null,u=Vb(j.roles),x=u.includes("admin"),C=j.active!==!1&&j.isActive!==!1,N=r===j.id,R=u.length>0?u.join(", "):"-";return t.jsxs("tr",{children:[t.jsx("td",{children:j.name||"-"}),t.jsx("td",{children:j.email}),t.jsx("td",{children:R}),t.jsx("td",{children:t.jsx("span",{className:`me-badge ${C?"me-badge-success":"me-badge-error"}`,children:C?"Activo":"Inactivo"})}),t.jsx("td",{children:g?g.toLocaleString():"-"}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>s==null?void 0:s(j.id,!C),disabled:a===j.id,children:a===j.id?"Guardando...":C?"Desactivar":"Activar"}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>l==null?void 0:l(j),children:"Convertir a cliente"}),x?t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>d==null?void 0:d(j.id),disabled:i===j.id||N,title:N?"No puedes modificar tu propio rol":"Quitar rol admin",children:i===j.id?"Quitando...":"Quitar admin"}):t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>c==null?void 0:c(j.id),disabled:i===j.id,children:i===j.id?"Asignando...":"Hacer admin"}),t.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>p==null?void 0:p(j.id),disabled:o===j.id||N,title:N?"No puedes eliminar tu propio usuario":"Eliminar usuario",children:o===j.id?"Eliminando...":"Eliminar"})]})})]},j.id)};return t.jsxs("div",{className:"dash-item",style:{marginBottom:16},children:[t.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[t.jsxs("h4",{style:{margin:0},children:["Usuarios creados (no activados)",v.length>0?` · ${v.length}`:""]}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(j=>!j),children:h?"Ocultar":"Mostrar"})]}),h&&t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"me-table",style:{minWidth:720},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Nombre"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Roles"}),t.jsx("th",{children:"Activo"}),t.jsx("th",{children:"Creado"}),t.jsx("th",{children:"Acciones"})]})}),t.jsxs("tbody",{children:[v.length===0&&t.jsx("tr",{children:t.jsx("td",{colSpan:6,style:{textAlign:"center",padding:16},children:n?"Cargando...":"No hay usuarios no activados"})}),v.map(w)]})]})})]})}const kp=["admin","user"];function Wb(e,{defaultRole:n="user"}={}){const r=String(n||"user").trim().toLowerCase(),a=kp.includes(r)?r:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>kp.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function $b({users:e=[],loading:n=!1,currentUserId:r,updating:a,roleUpdating:i,deleting:o,onToggleActive:s,onOpenClientModal:l,onMakeAdmin:c,onRevokeAdmin:d,onRemoveUser:p,initialOpen:m=!1}){const[h,y]=f.useState(!!m),v=f.useMemo(()=>{const j=u=>(u==null?void 0:u.active)===!1||(u==null?void 0:u.isActive)===!1,g=(u,x)=>{const C=u!=null&&u.createdAt?new Date(u.createdAt).getTime():0;return(x!=null&&x.createdAt?new Date(x.createdAt).getTime():0)-C};return(e||[]).filter(u=>!j(u)).sort(g)},[e]),w=j=>{const g=j.createdAt?new Date(j.createdAt):null,u=Wb(j.roles),x=u.includes("admin"),C=j.active!==!1&&j.isActive!==!1,N=r===j.id,R=u.length>0?u.join(", "):"-";return t.jsxs("tr",{children:[t.jsx("td",{children:j.name||"-"}),t.jsx("td",{children:j.email}),t.jsx("td",{children:R}),t.jsx("td",{children:t.jsx("span",{className:`me-badge ${C?"me-badge-success":"me-badge-error"}`,children:C?"Activo":"Inactivo"})}),t.jsx("td",{children:g?g.toLocaleString():"-"}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>s==null?void 0:s(j.id,!C),disabled:a===j.id,children:a===j.id?"Guardando...":C?"Desactivar":"Activar"}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>l==null?void 0:l(j),children:"Convertir a cliente"}),x?t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>d==null?void 0:d(j.id),disabled:i===j.id||N,title:N?"No puedes modificar tu propio rol":"Quitar rol admin",children:i===j.id?"Quitando...":"Quitar admin"}):t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>c==null?void 0:c(j.id),disabled:i===j.id,children:i===j.id?"Asignando...":"Hacer admin"}),t.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>p==null?void 0:p(j.id),disabled:o===j.id||N,title:N?"No puedes eliminar tu propio usuario":"Eliminar usuario",children:o===j.id?"Eliminando...":"Eliminar"})]})})]},j.id)};return t.jsxs("div",{className:"dash-item",children:[t.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[t.jsxs("h4",{style:{margin:0},children:["Usuarios activados",v.length>0?` · ${v.length}`:""]}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(j=>!j),children:h?"Ocultar":"Mostrar"})]}),h&&t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"me-table",style:{minWidth:720},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Nombre"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Roles"}),t.jsx("th",{children:"Activo"}),t.jsx("th",{children:"Creado"}),t.jsx("th",{children:"Acciones"})]})}),t.jsxs("tbody",{children:[v.length===0&&t.jsx("tr",{children:t.jsx("td",{colSpan:6,style:{textAlign:"center",padding:16},children:n?"Cargando...":"No hay usuarios activados"})}),v.map(w)]})]})})]})}function Kb({clientModal:e,clientError:n,clientSaving:r,onClose:a,onClearError:i,onSave:o,onChange:s,rolesOptions:l=[{id:"user",label:"Usuario"},{id:"admin",label:"Administrador"}]}){if(!e)return null;const c=p=>{p.target===p.currentTarget&&(a==null||a())},d=p=>m=>{var y;const h=(y=m==null?void 0:m.target)==null?void 0:y.value;s==null||s({[p]:h})};return t.jsx("div",{role:"dialog","aria-modal":"true",className:"modal-overlay",onClick:c,children:t.jsxs("div",{className:"modal-card",role:"document",children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("div",{className:"dash-title",children:"Actualizar información del usuario"}),t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:a,"aria-label":"Cerrar",children:"Cerrar"})]}),n&&t.jsx(Va,{onClose:i,children:n}),t.jsxs(Dm,{children:[t.jsx(Mn,{label:"Nombre completo",value:e.fullName,onChange:d("fullName"),placeholder:"Nombre y apellidos"}),t.jsxs(El,{cols:2,children:[t.jsx(Mn,{label:"Tipo de documento",value:e.documentType,onChange:d("documentType"),placeholder:"CC / CE / NIT / PAS"}),t.jsx(Mn,{label:"Número de documento",value:e.documentNumber,onChange:d("documentNumber"),placeholder:"Ej: 80761460"})]}),t.jsx(Mn,{label:"Fecha de nacimiento",type:"date",value:e.birthDate,onChange:d("birthDate")}),t.jsxs(El,{cols:2,children:[t.jsx(Mn,{label:"Teléfono fijo / celular",value:e.phone,onChange:d("phone"),placeholder:"Ej: 300 123 4567"}),t.jsx(Mn,{label:"Correo electrónico",type:"email",value:e.email,onChange:d("email"),placeholder:"nombre@dominio.com"})]}),t.jsx(Bb,{label:"Rol",value:e.role||"",onChange:p=>s==null?void 0:s({role:p.target.value}),options:l.map(p=>({value:p.id,label:p.label})),placeholder:"Selecciona un rol"}),t.jsx(Mn,{label:"Dirección física",value:e.address,onChange:d("address"),placeholder:"Calle 123 #45-67, Ciudad"}),t.jsx(Mb,{label:"Información de contacto (opcional)",value:e.contactInfo,onChange:d("contactInfo"),placeholder:"Notas internas, referencias, etc."})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[t.jsx("button",{className:"btn btn-secondary",onClick:a,disabled:r,children:"Cancelar"}),t.jsx("button",{className:"btn btn-primary",onClick:o,disabled:r,children:r?"Guardando...":"Guardar cambios"})]})]})})}const Cp=["admin","user"];function mt(e,{defaultRole:n="user"}={}){const r=String(n||"user").trim().toLowerCase(),a=Cp.includes(r)?r:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Cp.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function Hb(e){return mt(e==null?void 0:e.roles).includes("admin")}function qb(){const{user:e}=qe(),n=Hb(e),[r,a]=f.useState([]),[i,o]=f.useState(!1),[s,l]=f.useState(null),[c,d]=f.useState(null),[p,m]=f.useState(null),[h,y]=f.useState(null),[v,w]=f.useState(null),[j,g]=f.useState(!1),[u,x]=f.useState(null),[C,N]=f.useState(null),[R,M]=f.useState(!0),[A,U]=f.useState(!1),[W,ee]=f.useState(""),[ne,oe]=f.useState(null),de=e==null?void 0:e.id,Ne=async()=>{var $,ie;if(n){o(!0),l(null);try{const H=await Ic();a(Array.isArray(H==null?void 0:H.items)?H.items.map(z=>({...z,roles:mt(z.roles)})):[])}catch(H){l(((ie=($=H==null?void 0:H.response)==null?void 0:$.data)==null?void 0:ie.message)||(H==null?void 0:H.message)||"No se pudo cargar la lista")}finally{o(!1)}}};f.useEffect(()=>{Ne()},[n]);const ye=async($,ie)=>{var H,z;try{d($),await zb($,ie),a(P=>P.map(k=>k.id===$?{...k,active:ie}:k))}catch(P){l(((z=(H=P==null?void 0:P.response)==null?void 0:H.data)==null?void 0:z.message)||(P==null?void 0:P.message)||"No se pudo actualizar el usuario")}finally{d(null)}},ae=async $=>{var H,z;if(window.confirm("Deseas otorgar rol de administrador a este usuario?"))try{l(null),m($);const P=await Rb($);P!=null&&P.user&&a(k=>k.map(D=>D.id===$?{...D,...P.user,roles:mt(P.user.roles)}:D))}catch(P){l(((z=(H=P==null?void 0:P.response)==null?void 0:H.data)==null?void 0:z.message)||(P==null?void 0:P.message)||"No se pudo actualizar los roles")}finally{m(null)}},B=async $=>{var H,z;if(window.confirm("Deseas quitar el rol de administrador a este usuario?"))try{l(null),m($);const P=await Ob($);P!=null&&P.user&&a(k=>k.map(D=>D.id===$?{...D,...P.user,roles:mt(P.user.roles)}:D))}catch(P){l(((z=(H=P==null?void 0:P.response)==null?void 0:H.data)==null?void 0:z.message)||(P==null?void 0:P.message)||"No se pudo actualizar los roles")}finally{m(null)}},Y=async $=>{var H,z;if(window.confirm("Deseas eliminar este usuario? Esta accion es permanente."))try{y($),await Db($),a(P=>P.filter(k=>k.id!==$))}catch(P){l(((z=(H=P==null?void 0:P.response)==null?void 0:H.data)==null?void 0:z.message)||(P==null?void 0:P.message)||"No se pudo eliminar el usuario")}finally{y(null)}},J=$=>{x(null);const H=mt($.roles).includes("admin")?"admin":"user";w({userId:$.id,fullName:$.name||"",documentType:"",documentNumber:"",birthDate:"",phone:"",email:$.email||"",address:"",contactInfo:"",role:H})},V=async()=>{var $,ie;if(v!=null&&v.userId){x(null);try{g(!0);const H={fullName:String(v.fullName||"").trim(),documentType:String(v.documentType||"").trim(),documentNumber:String(v.documentNumber||"").trim(),birthDate:v.birthDate?new Date(v.birthDate).toISOString():void 0,phone:String(v.phone||"").trim(),email:String(v.email||"").trim(),address:String(v.address||"").trim(),contactInfo:String(v.contactInfo||"").trim()};if(!H.fullName){x("El nombre completo es requerido"),g(!1);return}await Fb(v.userId,H),w(null);try{clearTimeout(V._t)}catch{}oe("Cliente creado y carpeta asignada"),V._t=setTimeout(()=>oe(null),3500);try{window.scrollTo({top:0,behavior:"smooth"})}catch{}}catch(H){x(((ie=($=H==null?void 0:H.response)==null?void 0:$.data)==null?void 0:ie.message)||(H==null?void 0:H.message)||"No se pudo crear el cliente")}finally{g(!1)}}};return n?t.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",paddingLeft:16,paddingRight:16,paddingBottom:16},children:[t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[t.jsx("style",{children:`
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
        `}),t.jsxs("div",{className:"dash-header",style:{marginBottom:16,gap:12},children:[t.jsx("div",{className:"dash-title",children:"Administrar usuarios"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("input",{className:"input",placeholder:"Buscar por nombre, cédula o correo",value:W,onChange:$=>ee($.target.value),style:{width:260}}),W&&t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>ee(""),children:"Limpiar"}),t.jsx("button",{className:"btn btn-secondary",onClick:Ne,disabled:i,children:i?"Actualizando...":"Refrescar"})]})]}),ne&&t.jsx(zc,{autoHideMs:3500,children:ne}),s&&t.jsx(Va,{children:s}),(()=>{const $=D=>String(D||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),ie=$(W),H=D=>{if(!ie)return!0;const G=[D.document,D.documentNumber,D.cedula,D.dni,D.idNumber,D.numeroDocumento];return[D.name,D.email,...G].some(L=>$(L).includes(ie))},z=r.filter(H),P=(D,G)=>{const O=D!=null&&D.createdAt?new Date(D.createdAt).getTime():0;return(G!=null&&G.createdAt?new Date(G.createdAt).getTime():0)-O},k=D=>(D==null?void 0:D.active)===!1||(D==null?void 0:D.isActive)===!1;return z.filter(k).sort(P),z.filter(D=>!k(D)).sort(P),t.jsxs(t.Fragment,{children:[t.jsx(Ub,{users:z,loading:i,currentUserId:de,updating:c,roleUpdating:p,deleting:h,onToggleActive:ye,onOpenClientModal:J,onMakeAdmin:ae,onRevokeAdmin:B,onRemoveUser:Y,initialOpen:R}),t.jsx($b,{users:z,loading:i,currentUserId:de,updating:c,roleUpdating:p,deleting:h,onToggleActive:ye,onOpenClientModal:J,onMakeAdmin:ae,onRevokeAdmin:B,onRemoveUser:Y,initialOpen:A})]})})(),(()=>{const $=L=>String(L||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),ie=$(W),H=L=>{if(!ie)return!0;const X=[L.document,L.documentNumber,L.cedula,L.dni,L.idNumber,L.numeroDocumento];return[L.name,L.email,...X].some(mn=>$(mn).includes(ie))},z=r.filter(H),P=(L,X)=>{const xe=L!=null&&L.createdAt?new Date(L.createdAt).getTime():0;return(X!=null&&X.createdAt?new Date(X.createdAt).getTime():0)-xe},k=L=>(L==null?void 0:L.active)===!1||(L==null?void 0:L.isActive)===!1,D=z.filter(k).sort(P),G=z.filter(L=>!k(L)).sort(P),O=L=>{const X=L.createdAt?new Date(L.createdAt):null,xe=mt(L.roles),mn=xe.includes("admin"),ge=L.active!==!1&&L.isActive!==!1,an=de===L.id,qn=C===L.id,Zn=xe.length>0?xe.join(", "):"-";return t.jsxs("div",{className:"mobile-item",children:[t.jsxs("button",{type:"button",className:"btn btn-primary btn-sm mobile-item-header",onClick:()=>N(Dn=>Dn===L.id?null:L.id),"aria-expanded":qn,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsx("div",{className:"mobile-item-title",children:L.name||"-"}),t.jsx("div",{style:{opacity:.9,fontSize:12,paddingRight:10},children:qn?"−":"+"})]}),qn&&t.jsxs("div",{className:"mobile-item-details",children:[t.jsxs("div",{className:"kv",children:[t.jsx("span",{children:"Email"}),t.jsx("div",{children:L.email||"-"})]}),t.jsxs("div",{className:"kv",style:{marginTop:6},children:[t.jsx("span",{children:"Roles"}),t.jsx("div",{children:Zn})]}),t.jsxs("div",{className:"kv",style:{marginTop:6},children:[t.jsx("span",{children:"Estado"}),t.jsx("div",{children:t.jsx("span",{className:`me-badge ${ge?"me-badge-success":"me-badge-error"}`,children:ge?"Activo":"Inactivo"})})]}),t.jsxs("div",{className:"kv",style:{marginTop:6},children:[t.jsx("span",{children:"Creado"}),t.jsx("div",{children:X?X.toLocaleString():"-"})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:10,justifyContent:"flex-end"},children:[t.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>ye(L.id,!ge),disabled:c===L.id,children:c===L.id?"Guardando...":ge?"Desactivar":"Activar"}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>J(L),children:"Convertir a cliente"}),mn?t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>B(L.id),disabled:p===L.id||an,title:an?"No puedes modificar tu propio rol":"Quitar rol admin",children:p===L.id?"Quitando...":"Quitar admin"}):t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>ae(L.id),disabled:p===L.id,children:p===L.id?"Asignando...":"Hacer admin"}),t.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>Y(L.id),disabled:h===L.id||an,title:an?"No puedes eliminar tu propio usuario":"Eliminar usuario",children:h===L.id?"Eliminando...":"Eliminar"})]})]})]},L.id)};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"dash-item only-mobile",style:{marginBottom:16},children:[t.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[t.jsxs("h4",{style:{margin:0},children:["Usuarios creados (no activados)",D.length?` · ${D.length}`:""]}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>M(L=>!L),children:R?"Ocultar":"Mostrar"})]}),R&&t.jsxs("div",{className:"mobile-list",children:[D.length===0&&t.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay usuarios no activados"}),D.map(O)]})]}),t.jsxs("div",{className:"dash-item only-mobile",children:[t.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[t.jsxs("h4",{style:{margin:0},children:["Usuarios activados",G.length?` · ${G.length}`:""]}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>U(L=>!L),children:A?"Ocultar":"Mostrar"})]}),A&&t.jsxs("div",{className:"mobile-list",children:[G.length===0&&t.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay usuarios activados"}),G.map(O)]})]})]})})()]}),t.jsx(Kb,{clientModal:v,clientError:u,clientSaving:j,onClose:()=>w(null),onClearError:()=>x(null),onSave:V,onChange:$=>w(ie=>({...ie,...$}))})]}):t.jsx("div",{className:"dash-page",style:{padding:40},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[t.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),t.jsx("p",{style:{marginTop:12},children:"Esta seccion esta disponible solo para administradores."})]})})}const Sp=["admin","user"];function Zb(e,{defaultRole:n="user"}={}){const r=String(n||"user").trim().toLowerCase(),a=Sp.includes(r)?r:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Sp.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function Yb(e){return Zb(e==null?void 0:e.roles).includes("admin")}const Gb=(e,n)=>{const r=n.find(a=>a.id===e);if(r){const a=r.name||r.email||"Usuario",i=a.split(" ").map(l=>l[0]).join("").toUpperCase().slice(0,2),o=["#0ea5e9","#22d3ee","#a78bfa","#f59e0b","#10b981","#ef4444"],s=n.indexOf(r)%o.length;return{name:a,initials:i,color:o[s]}}return{name:"Usuario",initials:"U",color:"#6b7280"}},Jb=e=>{localStorage.setItem("koop_tasks",JSON.stringify(e))},Qb=(e=[])=>{var r,a,i,o,s,l,c,d;const n=localStorage.getItem("koop_tasks");return n?JSON.parse(n):e.length===0?[]:[{id:"T-901",title:"Radicar tutela por vacaciones compensadas",client:"AGG MRO",status:"en-curso",priority:"alta",due:"2025-01-22",assignee:((r=e[0])==null?void 0:r.id)||"",tags:["Laboral","Audiencia"],radicado:"11001-31-05-2025-00123",description:"Preparar y radicar tutela por violación al derecho al descanso y vacaciones compensadas",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:"T-902",title:"Revisión contrato Promesa de Compraventa (Apto 501)",client:"Ramírez – Mendoza",status:"pendiente",priority:"media",due:"2025-01-20",assignee:((a=e[1])==null?void 0:a.id)||((i=e[0])==null?void 0:i.id)||"",tags:["Civil","Notaría 27"],radicado:null,description:"Revisar cláusulas del contrato de promesa de compraventa del apartamento 501",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:"T-903",title:"Concepto: Nota crédito RADIAN ya aceptada",client:"Tus-Cuentas",status:"pendiente",priority:"alta",due:"2025-01-19",assignee:((o=e[1])==null?void 0:o.id)||((s=e[0])==null?void 0:s.id)||"",tags:["Tributario","DIAN"],radicado:null,description:"Elaborar concepto jurídico sobre la nota crédito de RADIAN que ya fue aceptada",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:"T-904",title:"Solicitud CHIP y verificación Folio",client:"Inmobiliario",status:"hecho",priority:"baja",due:"2025-01-15",assignee:((l=e[2])==null?void 0:l.id)||((c=e[0])==null?void 0:c.id)||"",tags:["PH","Certificados"],radicado:"50C-2024-009988",description:"Solicitar CHIP y verificar folio de matrícula inmobiliaria",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:"T-905",title:"Memorial de sustitución de comprador (Otrosí)",client:"Villa Carolina",status:"en-curso",priority:"media",due:"2025-01-23",assignee:((d=e[0])==null?void 0:d.id)||"",tags:["Civil","Minuta"],radicado:null,description:"Elaborar memorial para sustitución de comprador mediante Otrosí",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}]};function Xb(e){try{return new Date(e+"T00:00:00").toLocaleDateString("es-CO",{year:"numeric",month:"short",day:"2-digit"})}catch{return e}}function ji(e){try{return new Date(e)<new Date(new Date().toDateString())}catch{return!1}}function ey(){const{user:e}=qe(),n=Yb(e),[r,a]=f.useState([]),[i,o]=f.useState(!1),[s,l]=f.useState([]),[c,d]=f.useState(""),[p,m]=f.useState("derly"),[h,y]=f.useState("all"),[v,w]=f.useState(!0),[j,g]=f.useState(!1),[u,x]=f.useState(!1),[C,N]=f.useState(!1),[R,M]=f.useState(null),[A,U]=f.useState({title:"",client:"",description:"",priority:"media",due:"",assignee:"",tags:"",radicado:""}),[W,ee]=f.useState(!1),[ne,oe]=f.useState(!1),[de,Ne]=f.useState("");f.useEffect(()=>{ye()},[]),f.useEffect(()=>{if(W){const k=setTimeout(()=>{ee(!1)},5e3);return()=>clearTimeout(k)}},[W]),f.useEffect(()=>{if(ne){const k=setTimeout(()=>{oe(!1)},7e3);return()=>clearTimeout(k)}},[ne]),f.useEffect(()=>{j&&H()},[j,s]);const ye=async()=>{try{o(!0),console.log("Cargando usuarios...");const k=await Ic();if(console.log("Respuesta de listUsers:",k),k&&k.items){console.log("Usuarios encontrados:",k.items);const D=k.items.filter(G=>(console.log("Usuario:",G.name||G.email,"Roles:",G.roles),G.roles&&G.roles.includes("admin")));console.log("Administradores filtrados:",D),l(D),D.length>0?(m(D[0].id),a(Qb(D))):(console.log("No se encontraron administradores"),Ne("No se encontraron administradores en el sistema"),oe(!0))}else console.log("No se recibieron usuarios en la respuesta"),Ne("No se pudieron cargar los usuarios"),oe(!0)}catch(k){console.error("Error cargando administradores:",k),Ne("Error al cargar la lista de administradores: "+k.message),oe(!0)}finally{o(!1)}};f.useEffect(()=>{r.length>0&&Jb(r)},[r]);const ae=()=>{const k=Math.max(...r.map(D=>parseInt(D.id.split("-")[1])||0));return`T-${String(k+1).padStart(3,"0")}`},B=()=>{if(console.log("Intentando crear tarea con datos:",A),!A.title.trim()||!A.client.trim()){console.log("Validación fallida: título o cliente vacío"),Ne("El título y cliente son obligatorios"),oe(!0);return}if(!A.assignee){console.log("Validación fallida: no hay asignado"),Ne("Debe seleccionar un administrador para asignar la tarea"),oe(!0);return}const k={id:ae(),title:A.title.trim(),client:A.client.trim(),description:A.description.trim(),priority:A.priority,due:A.due,assignee:A.assignee,tags:A.tags.split(",").map(D=>D.trim()).filter(Boolean),radicado:A.radicado.trim()||null,status:"pendiente",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};console.log("Nueva tarea creada:",k),a(D=>{const G=[...D,k];return console.log("Tareas actualizadas:",G),G}),g(!1),H(),Ne("Tarea creada exitosamente"),ee(!0),console.log("Notificación de éxito configurada")},Y=()=>{if(!A.title.trim()||!A.client.trim()){Ne("El título y cliente son obligatorios"),oe(!0);return}a(k=>k.map(D=>D.id===R.id?{...D,title:A.title.trim(),client:A.client.trim(),description:A.description.trim(),priority:A.priority,due:A.due,assignee:A.assignee,tags:A.tags.split(",").map(G=>G.trim()).filter(Boolean),radicado:A.radicado.trim()||null,updatedAt:new Date().toISOString()}:D)),x(!1),M(null),H(),Ne("Tarea actualizada exitosamente"),ee(!0)},J=()=>{a(k=>k.filter(D=>D.id!==R.id)),N(!1),M(null),Ne("Tarea eliminada exitosamente"),ee(!0)},V=(k,D)=>{a(G=>G.map(O=>O.id===k?{...O,status:D,updatedAt:new Date().toISOString()}:O)),Ne("Estado de tarea actualizado"),ee(!0)},$=k=>{M(k),U({title:k.title,client:k.client,description:k.description||"",priority:k.priority,due:k.due,assignee:k.assignee||(s.length>0?s[0].id:""),tags:k.tags.join(", "),radicado:k.radicado||""}),x(!0)},ie=k=>{M(k),N(!0)},H=()=>{U({title:"",client:"",description:"",priority:"media",due:"",assignee:s.length>0?s[0].id:"",tags:"",radicado:""})},z=f.useMemo(()=>{let k=r.slice();v&&(k=k.filter(G=>G.assignee===p)),h!=="all"&&(k=k.filter(G=>G.status===h));const D=c.trim().toLowerCase();return D&&(k=k.filter(G=>[G.title,G.client,G.radicado,(G.tags||[]).join(" ")].filter(Boolean).join(" ").toLowerCase().includes(D))),k},[r,v,p,h,c]),P=`${z.length} resultado${z.length===1?"":"s"}`;return n?t.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",minHeight:"100vh",padding:"20px"},children:[t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1400,margin:"0 auto"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"24px",paddingBottom:"16px",borderBottom:"1px solid #394b61"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"12px",background:"linear-gradient(135deg, #4fd1c5, #fc771c)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(79, 209, 197, 0.3)"},children:t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsxs("div",{children:[t.jsx("h1",{style:{margin:0,fontSize:"24px",fontWeight:"700",color:"#e2e8f0",letterSpacing:"0.5px"},children:"Tablero de Tareas"}),t.jsx("p",{style:{margin:"4px 0 0 0",fontSize:"14px",color:"#9fb3cc"},children:"Gestión y seguimiento de tareas del equipo"})]})]}),t.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[t.jsx("div",{style:{fontSize:"12px",color:"#9fb3cc",padding:"4px 8px",background:"#1e2a3a",borderRadius:"6px",border:"1px solid #394b61"},children:i?"Cargando...":`${s.length} admin${s.length!==1?"s":""}`}),t.jsx("button",{className:"btn btn-primary",onClick:()=>g(!0),style:{fontSize:"14px",padding:"10px 16px"},disabled:i||s.length===0,children:"➕ Nueva Tarea"})]})]}),t.jsxs("div",{style:{display:"flex",gap:"16px",marginBottom:"24px",flexWrap:"wrap",alignItems:"center"},children:[t.jsx("div",{style:{flex:"1",minWidth:"300px"},children:t.jsx("input",{type:"search",placeholder:"Buscar por asunto, cliente o radicado...",value:c,onChange:k=>d(k.target.value),style:{width:"100%",padding:"12px 16px",background:"#1e2a3a",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})}),t.jsx("select",{value:p,onChange:k=>m(k.target.value),style:{padding:"12px 16px",background:"#1e2a3a",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px",minWidth:"200px"},children:s.map(k=>t.jsxs("option",{value:k.id,children:[k.name||k.email," (Admin)"]},k.id))}),t.jsxs("select",{value:h,onChange:k=>y(k.target.value),style:{padding:"12px 16px",background:"#1e2a3a",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px",minWidth:"150px"},children:[t.jsx("option",{value:"all",children:"Todos los estados"}),t.jsx("option",{value:"pendiente",children:"Pendiente"}),t.jsx("option",{value:"en-curso",children:"En curso"}),t.jsx("option",{value:"hecho",children:"Hecho"})]})]}),t.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"24px",flexWrap:"wrap"},children:[t.jsx("button",{className:`btn ${v?"btn-primary":"btn-secondary"}`,onClick:()=>w(!0),style:{fontSize:"12px",padding:"8px 16px"},children:"Mis tareas"}),t.jsx("button",{className:`btn ${v?"btn-secondary":"btn-primary"}`,onClick:()=>w(!1),style:{fontSize:"12px",padding:"8px 16px"},children:"Todas las tareas"})]}),t.jsxs("div",{style:{background:"#1e2a3a",borderRadius:"12px",border:"1px solid #394b61",overflow:"hidden"},children:[t.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid #394b61",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsx("h3",{style:{margin:0,fontSize:"18px",fontWeight:"600",color:"#e2e8f0"},children:v?"Mis tareas":"Todas las tareas"}),t.jsx("span",{style:{fontSize:"14px",color:"#9fb3cc",background:"#2a3a51",padding:"4px 12px",borderRadius:"20px"},children:P})]}),t.jsx("div",{style:{padding:"20px"},children:z.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",color:"#9fb3cc"},children:[t.jsx("div",{style:{width:"80px",height:"80px",margin:"0 auto 20px",background:"linear-gradient(135deg, #4fd1c5, #fc771c)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"18px",fontWeight:"600",color:"#e2e8f0"},children:"No hay tareas asignadas"}),t.jsx("p",{style:{margin:0,fontSize:"14px",color:"#9fb3cc"},children:"Cuando te asignen una tarea aparecerá aquí"})]}):t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))",gap:"20px"},children:z.map(k=>{const D=Gb(k.assignee,s),G=k.status==="en-curso"?"En curso":k.status==="hecho"?"Hecho":"Pendiente";return t.jsxs("div",{style:{background:"linear-gradient(135deg, #2a3a51, #1e2a3a)",border:"1px solid #394b61",borderRadius:"12px",padding:"20px",transition:"all 0.2s ease",cursor:"pointer"},onMouseEnter:O=>{O.target.style.borderColor="#4fd1c5",O.target.style.transform="translateY(-2px)",O.target.style.boxShadow="0 8px 25px rgba(79, 209, 197, 0.15)"},onMouseLeave:O=>{O.target.style.borderColor="#394b61",O.target.style.transform="translateY(0)",O.target.style.boxShadow="none"},children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"600",color:"#e2e8f0",lineHeight:"1.4"},children:k.title}),t.jsxs("p",{style:{margin:0,fontSize:"14px",color:"#9fb3cc"},children:["Cliente: ",t.jsx("strong",{style:{color:"#4fd1c5"},children:k.client})]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"16px"},children:[t.jsx("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",background:k.priority==="alta"?"rgba(239, 68, 68, 0.15)":k.priority==="media"?"rgba(245, 158, 11, 0.15)":"rgba(34, 197, 94, 0.15)",color:k.priority==="alta"?"#fecaca":k.priority==="media"?"#fde68a":"#bbf7d0",border:`1px solid ${k.priority==="alta"?"rgba(239, 68, 68, 0.3)":k.priority==="media"?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"}`},children:k.priority.toUpperCase()}),t.jsx("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",background:k.status==="hecho"?"rgba(34, 197, 94, 0.15)":k.status==="en-curso"?"rgba(59, 130, 246, 0.15)":"rgba(156, 163, 175, 0.15)",color:k.status==="hecho"?"#bbf7d0":k.status==="en-curso"?"#93c5fd":"#d1d5db",border:`1px solid ${k.status==="hecho"?"rgba(34, 197, 94, 0.3)":k.status==="en-curso"?"rgba(59, 130, 246, 0.3)":"rgba(156, 163, 175, 0.3)"}`},children:G}),t.jsxs("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",background:ji(k.due)?"rgba(239, 68, 68, 0.15)":"rgba(79, 209, 197, 0.15)",color:ji(k.due)?"#fecaca":"#67e8f9",border:`1px solid ${ji(k.due)?"rgba(239, 68, 68, 0.3)":"rgba(79, 209, 197, 0.3)"}`},children:[ji(k.due)?"VENCIDA":"VENCE",": ",Xb(k.due)]}),k.radicado&&t.jsx("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",background:"rgba(79, 209, 197, 0.15)",color:"#67e8f9",border:"1px solid rgba(79, 209, 197, 0.3)"},children:k.radicado})]}),(k.tags||[]).length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"16px"},children:(k.tags||[]).map(O=>t.jsx("span",{style:{fontSize:"10px",padding:"3px 6px",borderRadius:"8px",background:"rgba(156, 163, 175, 0.1)",color:"#9fb3cc",border:"1px solid rgba(156, 163, 175, 0.2)"},children:O},O))}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"12px",borderTop:"1px solid #394b61"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:D.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:"700",color:"white"},children:D.initials}),t.jsxs("div",{children:[t.jsx("p",{style:{margin:0,fontSize:"12px",color:"#9fb3cc"},children:"Asignada a"}),t.jsx("p",{style:{margin:0,fontSize:"14px",fontWeight:"600",color:"#e2e8f0"},children:D.name})]})]}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("select",{value:k.status,onChange:O=>V(k.id,O.target.value),style:{fontSize:"11px",padding:"4px 8px",background:"#1e2a3a",border:"1px solid #394b61",borderRadius:"6px",color:"#e2e8f0"},children:[t.jsx("option",{value:"pendiente",children:"Pendiente"}),t.jsx("option",{value:"en-curso",children:"En curso"}),t.jsx("option",{value:"hecho",children:"Hecho"})]}),t.jsx("button",{onClick:()=>$(k),style:{padding:"4px 8px",background:"#4fd1c5",border:"none",borderRadius:"6px",color:"white",fontSize:"11px",cursor:"pointer"},title:"Editar tarea",children:"✏️"}),t.jsx("button",{onClick:()=>ie(k),style:{padding:"4px 8px",background:"#ef4444",border:"none",borderRadius:"6px",color:"white",fontSize:"11px",cursor:"pointer"},title:"Eliminar tarea",children:"🗑️"})]})]})]},k.id)})})})]})]}),W&&t.jsx("div",{style:{position:"fixed",top:"20px",right:"20px",background:"#064e3b",color:"#a7f3d0",padding:"16px",borderRadius:"8px",border:"1px solid rgba(16,185,129,0.35)",boxShadow:"0 6px 18px rgba(0,0,0,0.25)",zIndex:10001,maxWidth:"400px"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("span",{children:["✅ ",de]}),t.jsx("button",{onClick:()=>ee(!1),style:{background:"transparent",border:"none",color:"#a7f3d0",fontSize:"18px",cursor:"pointer",marginLeft:"10px"},children:"×"})]})}),ne&&t.jsx("div",{style:{position:"fixed",top:"20px",right:"20px",background:"#7f1d1d",color:"#fecaca",padding:"16px",borderRadius:"8px",border:"1px solid rgba(248,113,113,0.35)",boxShadow:"0 6px 18px rgba(0,0,0,0.25)",zIndex:10001,maxWidth:"400px"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("span",{children:["❌ ",de]}),t.jsx("button",{onClick:()=>oe(!1),style:{background:"transparent",border:"none",color:"#fecaca",fontSize:"18px",cursor:"pointer",marginLeft:"10px"},children:"×"})]})}),j&&t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},children:t.jsxs("div",{style:{background:"#1e2a3a",borderRadius:"12px",padding:"24px",maxWidth:"500px",width:"90%",border:"1px solid #394b61",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"},children:[t.jsx("h3",{style:{margin:"0 0 20px 0",fontSize:"18px",fontWeight:"600",color:"#e2e8f0"},children:"➕ Nueva Tarea"}),t.jsxs("div",{style:{fontSize:"10px",color:"#9fb3cc",marginBottom:"10px",padding:"8px",background:"#2a3a51",borderRadius:"4px"},children:["Debug: Admins: ",s.length,", Assignee: ",A.assignee||"ninguno"]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Título *"}),t.jsx("input",{type:"text",value:A.title,onChange:k=>U(D=>({...D,title:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},placeholder:"Título de la tarea"})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Cliente *"}),t.jsx("input",{type:"text",value:A.client,onChange:k=>U(D=>({...D,client:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},placeholder:"Nombre del cliente"})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Descripción"}),t.jsx("textarea",{value:A.description,onChange:k=>U(D=>({...D,description:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px",minHeight:"80px",resize:"vertical"},placeholder:"Descripción detallada de la tarea"})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Prioridad"}),t.jsxs("select",{value:A.priority,onChange:k=>U(D=>({...D,priority:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},children:[t.jsx("option",{value:"baja",children:"Baja"}),t.jsx("option",{value:"media",children:"Media"}),t.jsx("option",{value:"alta",children:"Alta"})]})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Fecha límite"}),t.jsx("input",{type:"date",value:A.due,onChange:k=>U(D=>({...D,due:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})]})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Asignar a"}),t.jsx("select",{value:A.assignee,onChange:k=>U(D=>({...D,assignee:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},children:s.map(k=>t.jsxs("option",{value:k.id,children:[k.name||k.email," (Admin)"]},k.id))})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Tags (separados por comas)"}),t.jsx("input",{type:"text",value:A.tags,onChange:k=>U(D=>({...D,tags:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},placeholder:"Laboral, Audiencia, Civil"})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Radicado"}),t.jsx("input",{type:"text",value:A.radicado,onChange:k=>U(D=>({...D,radicado:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},placeholder:"Número de radicado (opcional)"})]})]}),t.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",marginTop:"24px"},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>{g(!1),H()},style:{padding:"10px 20px"},children:"Cancelar"}),t.jsx("button",{className:"btn btn-primary",onClick:B,style:{padding:"10px 20px"},children:"Crear Tarea"})]})]})}),u&&R&&t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},children:t.jsxs("div",{style:{background:"#1e2a3a",borderRadius:"12px",padding:"24px",maxWidth:"500px",width:"90%",border:"1px solid #394b61",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"},children:[t.jsx("h3",{style:{margin:"0 0 20px 0",fontSize:"18px",fontWeight:"600",color:"#e2e8f0"},children:"✏️ Editar Tarea"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Título *"}),t.jsx("input",{type:"text",value:A.title,onChange:k=>U(D=>({...D,title:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Cliente *"}),t.jsx("input",{type:"text",value:A.client,onChange:k=>U(D=>({...D,client:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Descripción"}),t.jsx("textarea",{value:A.description,onChange:k=>U(D=>({...D,description:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px",minHeight:"80px",resize:"vertical"}})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Prioridad"}),t.jsxs("select",{value:A.priority,onChange:k=>U(D=>({...D,priority:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},children:[t.jsx("option",{value:"baja",children:"Baja"}),t.jsx("option",{value:"media",children:"Media"}),t.jsx("option",{value:"alta",children:"Alta"})]})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Fecha límite"}),t.jsx("input",{type:"date",value:A.due,onChange:k=>U(D=>({...D,due:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})]})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Asignar a"}),t.jsx("select",{value:A.assignee,onChange:k=>U(D=>({...D,assignee:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"},children:s.map(k=>t.jsxs("option",{value:k.id,children:[k.name||k.email," (Admin)"]},k.id))})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Tags (separados por comas)"}),t.jsx("input",{type:"text",value:A.tags,onChange:k=>U(D=>({...D,tags:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#9fb3cc",fontSize:"14px"},children:"Radicado"}),t.jsx("input",{type:"text",value:A.radicado,onChange:k=>U(D=>({...D,radicado:k.target.value})),style:{width:"100%",padding:"12px",background:"#2a3a51",border:"1px solid #394b61",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}})]})]}),t.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",marginTop:"24px"},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>{x(!1),M(null),H()},style:{padding:"10px 20px"},children:"Cancelar"}),t.jsx("button",{className:"btn btn-primary",onClick:Y,style:{padding:"10px 20px"},children:"Actualizar Tarea"})]})]})}),C&&R&&t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},children:t.jsxs("div",{style:{background:"#1e2a3a",borderRadius:"12px",padding:"24px",maxWidth:"400px",width:"90%",border:"1px solid #394b61",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"},children:[t.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",fontWeight:"600",color:"#e2e8f0"},children:"🗑️ Eliminar Tarea"}),t.jsxs("p",{style:{margin:"0 0 20px 0",color:"#9fb3cc",fontSize:"14px",lineHeight:"1.5"},children:["¿Estás seguro de que quieres eliminar la tarea ",t.jsxs("strong",{style:{color:"#fc771c"},children:['"',R.title,'"']}),"?"]}),t.jsx("p",{style:{margin:"0 0 20px 0",color:"#ef4444",fontSize:"12px",fontWeight:"500"},children:"⚠️ Esta acción no se puede deshacer"}),t.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>{N(!1),M(null)},style:{padding:"10px 20px"},children:"Cancelar"}),t.jsx("button",{className:"btn btn-danger",onClick:J,style:{padding:"10px 20px"},children:"Eliminar Tarea"})]})]})})]}):t.jsx("div",{className:"dash-page",style:{padding:40},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[t.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),t.jsx("p",{style:{marginTop:12},children:"Esta sección está disponible solo para administradores."})]})})}async function br({limit:e,subfolder:n}={}){const r={};typeof e=="number"&&(r.limit=e),n&&(r.subfolder=n);const{data:a}=await Ce.get("/docs/recent",{params:r});return a}const ny=e=>e&&e.replace(/TrÃ¡mite/g,"Trámite").replace(/TÃºtela/g,"Tútela").replace(/trÃ¡mite/g,"trámite").replace(/tÃºtela/g,"tútela").replace(/ConstituciÃ³n/g,"Constitución").replace(/PolÃ­tica/g,"Política").replace(/constituciÃ³n/g,"constitución").replace(/polÃ­tica/g,"política").replace(/Ã¡/g,"á").replace(/Ã©/g,"é").replace(/Ã­/g,"í").replace(/Ã³/g,"ó").replace(/Ãº/g,"ú").replace(/Ã/g,"Á").replace(/Ã‰/g,"É").replace(/Ã/g,"Í").replace(/Ã"/g,"Ó").replace(/Ãš/g,"Ú").replace(/Ã±/g,"ñ").replace(/Ã'/g,"Ñ");async function Lm(e,{subfolder:n,useExactName:r}={}){var o,s;if(!e)throw new Error("Archivo requerido");let a=e;if(r&&e.name){const l=e.name,c=ny(l);c!==l&&(console.log("🔧 API: Corrigiendo nombre de archivo:",l,"->",c),a=new File([e],c,{type:e.type,lastModified:e.lastModified}))}const i=new FormData;i.append("file",a),n&&i.append("subfolder",n),r?(console.log("🔧 Agregando useExactName al FormData"),i.append("useExactName","true")):console.log("🔧 useExactName es false, no se agrega al FormData");try{const{data:l}=await Ce.post("/docs/upload",i);return l}catch(l){const d=((s=(o=l==null?void 0:l.response)==null?void 0:o.data)==null?void 0:s.message)||(l==null?void 0:l.message)||"Error al subir documento";throw new Error(d)}}async function ry(e,n=600){if(!e)throw new Error("Key requerida");const r={key:e,expires:n},{data:a}=await Ce.get("/docs/download-url",{params:r});return a}async function ty({subfolder:e}={}){const n={subfolder:e},{data:r}=await Ce.post("/docs/folder",n);return r}async function ay({subfolder:e}={}){const n={};e&&(n.subfolder=e);const{data:r}=await Ce.get("/docs/diag",{params:n});return r}async function iy(e){var n,r;if(!e)throw new Error("Key requerida");try{const{data:a}=await Ce.delete("/docs/object",{data:{key:e}});return a}catch(a){const o=((r=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:r.message)||(a==null?void 0:a.message)||"Error al eliminar documento";throw new Error(o)}}async function oy(e){var r,a;if(!e)throw new Error("Ruta de carpeta requerida");const n=e.endsWith("/")?e:`${e}/`;try{const{data:i}=await Ce.delete("/docs/object",{data:{key:n}});return i}catch(i){const s=((a=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:a.message)||(i==null?void 0:i.message)||"Error al eliminar carpeta";throw new Error(s)}}function Lo(e){if(e==null)return"";try{return String(e).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0000-\u001F\u007F-\u009F]/g,"").replace(/\u00A0/g," ").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/\uFFFD/g,"").replace(/\s+/g," ").trim().toUpperCase()}catch{return String(e).toUpperCase()}}const sy=e=>{if(!e)return e;try{const n=Uint8Array.from([...e],r=>r.charCodeAt(0));return new TextDecoder("utf-8").decode(n)}catch(n){return console.log("Error convirtiendo latin1 a utf8:",n),e}},ws=(e="")=>e?Array.from(new TextEncoder().encode(e)).map(n=>n.toString(16).padStart(2,"0")).join(""):"",ly=e=>{if(!e)return e;console.log("ðŸ”§ Fixing encoding for:",e),console.log("ðŸ”§ Original bytes:",Array.from(e).map(i=>i.charCodeAt(0).toString(16)).join(" "));let n=e;const r=/[Ã¡Ã©Ã­Ã³ÃºÃ±Ã¼Ã§ÃÃ‰ÃÃ“ÃšÃ‘ÃœÃ‡]/.test(e),a=/[Ãƒ]/.test(e);if(r&&!a)return console.log("ðŸ”§ Text already has correct characters, preserving:",e),e;if(a&&(console.log("ðŸ”§ Detected corrupted characters, applying corrections..."),n=n.replace(/ConstituciÃƒÂ³n/g,"ConstituciÃ³n").replace(/PolÃƒÂ­tica/g,"PolÃ­tica").replace(/constituciÃƒÂ³n/g,"constituciÃ³n").replace(/polÃƒÂ­tica/g,"polÃ­tica").replace(/ÃƒÂ¡/g,"Ã¡").replace(/ÃƒÂ©/g,"Ã©").replace(/ÃƒÂ­/g,"Ã­").replace(/ÃƒÂ³/g,"Ã³").replace(/ÃƒÂº/g,"Ãº").replace(/ÃƒÂ±/g,"Ã±").replace(/ÃƒÂ¼/g,"Ã¼").replace(/ÃƒÂ§/g,"Ã§").replace(/Ãƒ/g,"Ã").replace(/Ãƒâ€°/g,"Ã‰").replace(/Ãƒ/g,"Ã").replace(/Ãƒ"/g,"Ã“").replace(/ÃƒÅ¡/g,"Ãš").replace(/Ãƒ'/g,"Ã‘").replace(/ÃƒÅ“/g,"Ãœ").replace(/Ãƒâ€¡/g,"Ã‡").replace(/ÃƒÂ¢/g,"Ã¢").replace(/ÃƒÂª/g,"Ãª").replace(/ÃƒÂ®/g,"Ã®").replace(/ÃƒÂ´/g,"Ã´").replace(/ÃƒÂ»/g,"Ã»").replace(/Ãƒâ€š/g,"Ã‚").replace(/ÃƒÅ /g,"ÃŠ").replace(/ÃƒÅ½/g,"ÃŽ").replace(/Ãƒ"/g,"Ã”").replace(/Ãƒâ€º/g,"Ã›").replace(/ÃƒÂ¨/g,"Ã¨").replace(/ÃƒÂ¬/g,"Ã¬").replace(/ÃƒÂ²/g,"Ã²").replace(/ÃƒÂ¹/g,"Ã¹").replace(/Ãƒâ‚¬/g,"Ã€").replace(/ÃƒÅ’/g,"ÃŒ").replace(/Ãƒ'/g,"Ã’").replace(/Ãƒâ„¢/g,"Ã™").replace(/ÃƒÂ¤/g,"Ã¤").replace(/ÃƒÂ«/g,"Ã«").replace(/ÃƒÂ¯/g,"Ã¯").replace(/ÃƒÂ¶/g,"Ã¶").replace(/Ãƒâ€ž/g,"Ã„").replace(/Ãƒâ€¹/g,"Ã‹").replace(/Ãƒ/g,"Ã").replace(/Ãƒâ€“/g,"Ã–").replace(/Ã¢â‚¬â„¢/g,"'").replace(/Ã¢â‚¬Å“/g,'"').replace(/Ã¢â‚¬/g,'"').replace(/Ã¢â‚¬"/g,"â€“").replace(/Ã¢â‚¬"/g,"â€”"),n.includes("Ãƒ")))try{const i=sy(n);i.includes("Ãƒ")||(n=i,console.log("ðŸ”§ Applied latin1 correction:",n))}catch(i){console.log("ðŸ”§ Error en correcciÃ³n latin1:",i)}return console.log("ðŸ”§ Final result:",n),console.log("ðŸ”§ Final bytes:",Array.from(n).map(i=>i.charCodeAt(0).toString(16)).join(" ")),n},er=e=>e&&e.replace(/TrÃƒÂ¡mite/g,"TrÃ¡mite").replace(/TÃƒÂºtela/g,"TÃºtela").replace(/trÃƒÂ¡mite/g,"trÃ¡mite").replace(/tÃƒÂºtela/g,"tÃºtela").replace(/ConstituciÃƒÂ³n/g,"ConstituciÃ³n").replace(/PolÃƒÂ­tica/g,"PolÃ­tica").replace(/constituciÃƒÂ³n/g,"constituciÃ³n").replace(/polÃƒÂ­tica/g,"polÃ­tica").replace(/ÃƒÂ¡/g,"Ã¡").replace(/ÃƒÂ©/g,"Ã©").replace(/ÃƒÂ­/g,"Ã­").replace(/ÃƒÂ³/g,"Ã³").replace(/ÃƒÂº/g,"Ãº").replace(/ÃƒÂ±/g,"Ã±").replace(/Ãƒ/g,"Ã").replace(/Ãƒâ€°/g,"Ã‰").replace(/Ãƒ/g,"Ã").replace(/Ãƒ"/g,"Ã“").replace(/ÃƒÅ¡/g,"Ãš").replace(/Ãƒ'/g,"Ã‘").replace(/ÃƒÂ¼/g,"Ã¼").replace(/ÃƒÅ“/g,"Ãœ").replace(/Ãƒâ€¡/g,"Ã‡").replace(/ÃƒÂ§/g,"Ã§"),Ep=(e="")=>{const[n,r]=f.useState(e);return[n,r,i=>{let o=i.target.value;const s=er(o);s!==o&&(console.log("ðŸ”§ AGGRESSIVE FIX - Original:",o,"Corrected:",s),i.target.value=s,o=s),r(o)}]};function Nl({selectedClient:e,isModal:n=!1,onClose:r}){var Mc,Bc;const[a,i]=f.useState("docs"),{user:o,accessToken:s}=qe(),l=Lo((o==null?void 0:o.name)||""),c="clientes",p=(Array.isArray(o==null?void 0:o.roles)?o.roles:o!=null&&o.roles?[o==null?void 0:o.roles]:[]).map(b=>String(b||"").trim().toLowerCase()).includes("admin"),[m,h]=f.useState([]),[y,v]=f.useState(!1),[w,j]=f.useState(null),[g,u]=f.useState([]),[x,C]=f.useState(!1),[N,R]=f.useState(null),[M,A]=f.useState(null),[U,W]=f.useState(!1),[ee,ne]=f.useState(!1),[oe,de]=f.useState(""),Ne=f.useRef(null),ye=f.useRef(null),[ae,B]=f.useState(e||null),[Y,J]=f.useState({}),[V,$]=f.useState(null),[ie,H]=f.useState(!1),[z,P]=f.useState(new Set),[k,D]=f.useState([]),[G,O]=f.useState(null),[L,X]=f.useState(!1),[xe,mn]=f.useState(new Set),[ge,an]=f.useState(!1),[qn,Zn]=f.useState(!1),[Dn,ct]=f.useState(!1),[Po,$r]=f.useState(!1),[Yn,Fo]=f.useState(null),[Ja,Qa]=f.useState(""),[ir,Kr]=f.useState(!1),[Xe,T]=f.useState({fecha:"",actuacion:"",tipo:"",juzgado:"",estado:""}),[Q,re]=f.useState([]),[K,te]=f.useState(!1),[we,je]=f.useState(null),[Re,Gn]=f.useState(!1),[hn,Nn]=f.useState({radicado:"",clase:"",demandante:"",demandado:"",juzgado:"",estado:""}),[on,Xa,Vm]=Ep(""),[ei,_o]=f.useState(""),[Zt,Oc]=f.useState(!1);f.useEffect(()=>{if(on&&on.includes("Ãƒ")){console.log("ðŸ”§ Process name has corrupted characters, correcting...");const b=ly(on);b!==on&&(console.log("ðŸ”§ Auto-correcting process name:",on,"->",b),Xa(b))}},[on]);const[Ln,Dc]=f.useState(!1),[Be,Mo]=f.useState(new Set),[Um,ni]=f.useState(!1),[Bo,Lc]=f.useState(!1),[Yt,Vo]=f.useState(null),[or,dt,Wm]=Ep(""),[$m,Uo]=f.useState(!1);f.useEffect(()=>{if(or){const b=er(or);b!==or&&(console.log("ðŸ”§ AGGRESSIVE FILE NAME FIX - Original:",or,"Corrected:",b),dt(b))}},[or]),f.useEffect(()=>{const S=setInterval(()=>{const I=document.querySelector('input[type="text"][placeholder="Nombre del archivo..."]');if(I&&I.value){const F=er(I.value);if(F!==I.value){console.log("ðŸ”§ INTERVAL FILE INPUT FIX - Original:",I.value,"Corrected:",F),I.value=F;const q=new Event("change",{bubbles:!0});I.dispatchEvent(q)}}},100);return()=>clearInterval(S)},[]),f.useEffect(()=>{console.log("ðŸ”§ Global text correction effect loaded - DISABLED")},[]),f.useEffect(()=>{const b=I=>{if(I.target.tagName==="INPUT"&&I.target.type==="text"){const F=I.target.value,q=er(F);if(q!==F){console.log("ðŸ”§ GLOBAL AGGRESSIVE FIX - Original:",F,"Corrected:",q),I.target.value=q;const le=new Event("change",{bubbles:!0});I.target.dispatchEvent(le)}}},S=I=>{if(I.target.tagName==="INPUT"&&I.target.type==="text"){const F=I.target.value,q=er(F);if(q!==F){console.log("ðŸ”§ KEYUP AGGRESSIVE FIX - Original:",F,"Corrected:",q),I.target.value=q;const le=new Event("change",{bubbles:!0});I.target.dispatchEvent(le)}}};return document.addEventListener("input",b),document.addEventListener("keyup",S),()=>{document.removeEventListener("input",b),document.removeEventListener("keyup",S)}},[]);const Km=async()=>{C(!0),R(null),A(null);try{const b=await br({limit:20,subfolder:c});u(Array.isArray(b==null?void 0:b.items)?b.items:[]),b!=null&&b.warning&&A(b.warning)}catch(b){R((b==null?void 0:b.message)||"Error cargando documentos")}finally{C(!1)}};f.useEffect(()=>{a==="docs"&&(p?Km():Fc())},[a,p]),f.useEffect(()=>{e&&n&&(B(e),Wo(e))},[e,n]),f.useEffect(()=>{if(!p)return;let b=!1;return(async()=>{var S,I;try{v(!0),j(null);const F=await Tc();if(b)return;const q=Array.isArray(F==null?void 0:F.items)?F.items:[],le=String((o==null?void 0:o.id)||(o==null?void 0:o.sub)||"").trim();h(q.filter(fe=>{var me;return String(((me=fe==null?void 0:fe.assignedAdmin)==null?void 0:me.id)||"").trim()===le}))}catch(F){b||j(((I=(S=F==null?void 0:F.response)==null?void 0:S.data)==null?void 0:I.message)||(F==null?void 0:F.message)||"No se pudo cargar clientes asignados")}finally{b||v(!1)}})(),()=>{b=!0}},[p,o]);const Hm=()=>{var b;if(p&&!(V!=null&&V.path)){de("Debes seleccionar una carpeta antes de subir un documento"),ne(!0);return}if(!p&&!(G!=null&&G.path)){de("Debes seleccionar una carpeta antes de subir un documento"),ne(!0);return}(b=Ne.current)==null||b.click()},qm=b=>{var F,q;const S=(q=(F=b.target)==null?void 0:F.files)==null?void 0:q[0];if(!S)return;let I=null;if(p?ae!=null&&ae.documentNumber?V!=null&&V.path||(I="Debes seleccionar una carpeta especÃ­fica del proceso judicial para subir documentos. No se permiten archivos sueltos en la carpeta del cliente."):I="Debes seleccionar un cliente primero":G!=null&&G.path||(I="Debes seleccionar una carpeta especÃ­fica del proceso judicial para subir documentos. No se permiten archivos sueltos en la carpeta del cliente."),I){R(I),de(I),ne(!0);try{b.target.value=null}catch{}return}Vo(S),dt(S.name),Uo(!0);try{b.target.value=null}catch{}},Zm=async()=>{if(!Yt||!or.trim()){R("Debes seleccionar un archivo y especificar un nombre"),de("Debes seleccionar un archivo y especificar un nombre"),ne(!0);return}try{C(!0),R(null),ne(!1),W(!1);let b=null;p&&ae&&V?b=V.path:!p&&G&&(b=G.path);const S=or.trim();console.log("ðŸ”§ File name original:",S),console.log("ðŸ”§ File name original bytes:",Array.from(S).map(le=>le.charCodeAt(0).toString(16)).join(" "));let I=er(S);console.log("ðŸ”§ File name despuÃ©s de primera correcciÃ³n:",I),I=er(I),console.log("ðŸ”§ File name despuÃ©s de segunda correcciÃ³n:",I),I=I.replace(/TrÃƒÂ¡mite/g,"TrÃ¡mite").replace(/TÃƒÂºtela/g,"TÃºtela").replace(/trÃƒÂ¡mite/g,"trÃ¡mite").replace(/tÃƒÂºtela/g,"tÃºtela"),console.log("ðŸ”§ File name despuÃ©s de correcciÃ³n manual:",I),console.log("ðŸ”§ File name final (con correcciÃ³n agresiva):",I);const F=new File([Yt],I,{type:Yt.type,lastModified:Yt.lastModified});console.log("Subiendo archivo con nombre personalizado:",I,"a subfolder:",b),console.log("ðŸ”§ Enviando useExactName: true");const q=await Lm(F,{subfolder:b,useExactName:!0});q!=null&&q.file&&u(le=>[q.file,...le]),await _c(),de("Documento subido exitosamente"),ne(!0),Vo(null),dt(""),Uo(!1)}catch(b){const S=(b==null?void 0:b.message)||"Error subiendo documento";R(S),de(`Error al subir documento: ${S}`),ne(!0)}finally{C(!1)}},Ym=()=>{Vo(null),dt(""),Uo(!1)},Gm=async(b,S)=>{try{const{url:I}=await ry(b,600);window.open(I||S,"_blank")}catch{S&&window.open(S,"_blank")}},Wo=async b=>{if(b!=null&&b.documentNumber){H(!0);try{const S=await br({limit:100,subfolder:`clientes/${b.documentNumber}`}),I={},F=`clientes/${b.documentNumber}`;Array.isArray(S==null?void 0:S.items)&&(console.log("ðŸ“ Cargando carpetas para cliente:",b.documentNumber),console.log("ðŸ“ clientBasePath:",F),console.log("ðŸ“ Items recibidos:",S.items.length),S.items.forEach(q=>{var le,fe;if(q.isFolder){const me=(le=q.key)==null?void 0:le.replace(/\/$/,"");if(console.log("ðŸ“ Procesando carpeta:",me),console.log("ðŸ“ Es diferente a clientBasePath?",me!==F),console.log("ðŸ“ Empieza con clientBasePath + /?",me.startsWith(F+"/")),me&&me!==F&&me.startsWith(F+"/")){const ve=me.replace(F+"/","").split("/").pop()||"Carpeta";console.log("âœ… Agregando carpeta:",ve,"path:",me),I[me]={name:ve,path:me,documents:[],isFolder:!0}}else console.log("âŒ Excluyendo carpeta:",me)}else{const me=((fe=q.key)==null?void 0:fe.split("/").slice(0,-1).join("/"))||"root";if(me&&me!==F&&me.startsWith(F+"/")){if(!I[me]){const ve=me.replace(F+"/","").split("/").pop()||"Carpeta";I[me]={name:ve,path:me,documents:[],isFolder:!1}}I[me].documents.push(q)}}})),J(q=>({...q,[b.id]:I}))}catch(S){console.error("Error cargando carpetas del cliente:",S),J(I=>({...I,[b.id]:{}}))}finally{H(!1)}}},Jm=async b=>{z.has(b.id)?(P(I=>{const F=new Set(I);return F.delete(b.id),F}),B(null),$(null)):(P(I=>new Set(I).add(b.id)),B(b),$(null),Y[b.id]||await Wo(b))},Pc=async b=>{if($(b),b.documents&&b.documents.length>0)u(b.documents);else{C(!0);try{const S=await br({limit:100,subfolder:b.path}),I=Array.isArray(S==null?void 0:S.items)?S.items.filter(F=>!F.isFolder):[];u(I),J(F=>({...F,[ae.id]:{...F[ae.id],[b.path]:{...b,documents:I}}}))}catch(S){console.error("Error cargando documentos de la carpeta:",S),u([])}finally{C(!1)}}},Qm=async b=>{try{const S=await br({limit:100,subfolder:b.path});return!(S!=null&&S.items)||S.items.length===0?!0:!S.items.some(F=>{var le,fe;return!(F.isFolder||((le=F.key)==null?void 0:le.endsWith("/"))||((fe=F.name)==null?void 0:fe.endsWith("/")))})}catch(S){return console.error("Error verificando si la carpeta está vacía",S),!1}},Xm=async()=>{if(we)try{if(Gn(!0),!await Qm(we)){de("No se puede eliminar la carpeta porque contiene archivos. Solo se pueden eliminar carpetas completamente vacÃ­as."),ne(!0);return}console.log("Eliminando carpeta:",we.path),await oy(we.path),ae&&J(S=>{const I={...S};if(I[ae.id]){const F=Object.fromEntries(Object.entries(I[ae.id]).filter(([q,le])=>le.path!==we.path));I[ae.id]=F}return I}),(V==null?void 0:V.path)===we.path&&($(null),u([])),te(!1),je(null),de("Carpeta eliminada correctamente"),W(!0)}catch(b){console.error("Error eliminando carpeta:",b),de("Error al eliminar la carpeta"),ne(!0)}finally{Gn(!1)}},Fc=async()=>{var b,S,I;X(!0);try{console.log("Usuario actual:",o),console.log("Token de acceso:",s?"Presente":"Ausente"),console.log("Roles del usuario:",o==null?void 0:o.roles),console.log("Intentando verificar conectividad...");try{const ve=await ay();console.log("Health check exitoso:",ve)}catch(ve){throw console.error("Health check fallÃ³:",ve),new Error("No se puede conectar con el servidor de documentos")}console.log("Intentando cargar documentos del usuario...");const F=await br({limit:100,subfolder:"clientes"});console.log("Datos de la API para usuario:",F);const q=Array.isArray(F==null?void 0:F.items)?F.items:[];console.log("Items procesados:",q);const le=new Map;let fe="clientes";const me=q.find(ve=>ve.isFolder&&ve.key&&ve.key.includes("clientes/"));if(me){const ve=me.key.split("/");ve.length>=2&&(fe=`${ve[0]}/${ve[1]}/`)}console.log("Ruta base del cliente:",fe),console.log("Items encontrados:",q.map(ve=>({key:ve.key,isFolder:ve.isFolder,name:ve.name}))),q.forEach(ve=>{if(ve.isFolder){const Jn=ve.key;if(Jn&&Jn.startsWith(fe)&&Jn!==fe){const ut=Jn.replace(fe,"").replace(/^\/+|\/+$/g,"");ut&&!ut.includes("/")&&le.set(Jn,{name:ut,path:Jn,documents:[],isFolder:!0})}}}),q.forEach(ve=>{var Jn;if(!ve.isFolder){const ut=((Jn=ve.key)==null?void 0:Jn.split("/"))||[];if(ut.length>2){const ri=ut.slice(0,-1).join("/");if(ri.startsWith(fe)&&ri!==fe){const Vc=ri.replace(fe,"").replace(/^\/+|\/+$/g,"");if(Vc&&!Vc.includes("/")){const Uc=le.get(ri);Uc&&!ve.isFolder&&Uc.documents.push(ve)}}}}});const pt=Array.from(le.values());console.log("Carpetas del usuario cargadas:",pt),D(pt)}catch(F){console.error("Error cargando carpetas del usuario:",F),console.error("Detalles del error:",{message:F.message,status:(b=F.response)==null?void 0:b.status,data:(S=F.response)==null?void 0:S.data}),((I=F.response)==null?void 0:I.status)===401?R("Error de autenticaciÃ³n. Por favor, cierra sesiÃ³n y vuelve a iniciar sesiÃ³n."):R("Error cargando carpetas: "+(F.message||"Error desconocido"))}finally{X(!1)}},eh=async b=>{if(O(b),b.documents&&b.documents.length>0)u(b.documents);else try{C(!0);const S=await br({limit:50,subfolder:b.path}),I=Array.isArray(S==null?void 0:S.items)?S.items.filter(F=>!F.isFolder):[];u(I),D(F=>F.map(q=>q.path===b.path?{...q,documents:I}:q))}catch(S){console.error("Error cargando documentos de la carpeta:",S),R("Error cargando documentos de la carpeta")}finally{C(!1)}},nh=b=>{xe.has(b.path)?(mn(I=>{const F=new Set(I);return F.delete(b.path),F}),O(null)):(mn(I=>new Set(I).add(b.path)),eh(b))},rh=async()=>{var b,S;if(!on.trim()){R("El nombre del proceso es requerido"),de("El nombre del proceso es requerido"),ne(!0);return}try{Oc(!0),R(null),ne(!1),W(!1);let I="";if(p&&(ae!=null&&ae.documentNumber))I=`clientes/${ae.documentNumber}`;else if(!p)I="clientes";else throw new Error("No se puede determinar la carpeta del cliente");const F=on.trim();console.log("ðŸ”§ Proceso original:",F),console.log("ðŸ”§ Proceso original bytes:",Array.from(F).map(ve=>ve.charCodeAt(0).toString(16)).join(" "));const q=er(F);console.log("ðŸ”§ Proceso final (con correcciÃ³n agresiva):",q);let le="";if(ei&&q)le=`${{civil:"Proceso Civil",laboral:"Proceso Laboral",penal:"Proceso Penal",administrativo:"Proceso Administrativo",comercial:"Proceso Comercial",ejecutivo:"Proceso Ejecutivo",familia:"Proceso de Familia",notarial:"TrÃ¡mite Notarial",tramite:"TrÃ¡mite"}[ei]||ei} - ${q}`;else if(q)le=q;else throw new Error("El nombre del proceso es requerido");const fe=`${I}/${le}`;console.log("Creando carpeta:",fe),console.log("folderName (hex):",ws(le)),console.log("fullPath (hex):",ws(fe));const me={subfolder:fe};console.log("ðŸ”§ Payload a enviar al backend:",me),console.log("ðŸ”§ Payload JSON:",JSON.stringify(me)),console.log("ðŸ”§ Payload subfolder (hex):",ws(me.subfolder));const pt=await ty(me);console.log("Carpeta creada exitosamente:",pt),Xa(""),_o(""),an(!1),de("Proceso creado exitosamente"),W(!0),p&&ae?await Wo(ae):p||await Fc()}catch(I){console.error("Error creando proceso:",I);const F=((S=(b=I==null?void 0:I.response)==null?void 0:b.data)==null?void 0:S.message)||(I==null?void 0:I.message)||"Error creando proceso";R(F),de(`Error al crear proceso: ${F}`),ne(!0)}finally{Oc(!1)}},th=async()=>{try{console.log("Guardando informaciÃ³n del proceso:",hn),$r(!1),R(null)}catch(b){R("Error guardando informaciÃ³n: "+b.message)}},ah=()=>{Dc(!Ln),Mo(new Set)},ih=b=>{const S=new Set(Be);S.has(b)?S.delete(b):S.add(b),Mo(S)};f.useEffect(()=>((U||ee)&&(ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{W(!1),ne(!1),de("")},5e3)),()=>{ye.current&&clearTimeout(ye.current)}),[U,ee]);const _c=async()=>{console.log("ðŸ”„ Iniciando recarga de carpeta..."),C(!0),R(null),A(null);try{let b=null;p&&ae&&V?(b=V.path,console.log("ðŸ“ Admin - Carpeta especÃ­fica:",b)):!p&&G?(b=G.path,console.log("ðŸ‘¤ Usuario - Carpeta especÃ­fica:",b)):p&&ae?(b=`clientes/${ae.documentNumber}`,console.log("ðŸ“ Admin - Carpeta del cliente:",b)):p?(b=c,console.log("ðŸ”„ Fallback - Carpeta por defecto:",b)):(b="clientes",console.log("ðŸ‘¤ Usuario - Carpeta base:",b)),console.log("ðŸ“¡ Llamando API con subfolder:",b);const S=await br({limit:100,subfolder:b});console.log("ðŸ“¦ Datos recibidos de la API:",S);const I=Array.isArray(S==null?void 0:S.items)?S.items:[];console.log("ðŸ“‹ Total de elementos recibidos:",I.length),u(I),console.log("âœ… Lista de documentos actualizada con",I.length,"elementos"),S!=null&&S.warning&&(A(S.warning),console.log("âš ï¸ Advertencia:",S.warning))}catch(b){console.error("âŒ Error recargando carpeta:",b),R((b==null?void 0:b.message)||"Error recargando documentos")}finally{C(!1),console.log("ðŸ Recarga completada")}},oh=async()=>{if(Be.size!==0)try{Lc(!0),R(null),ne(!1),W(!1);const b=Array.from(Be);let S=0,I=[];for(const F of b)try{console.log("ðŸ—‘ï¸ Eliminando elemento:",F),await iy(F),S++,console.log("âœ… Elemento eliminado exitosamente:",F)}catch(q){console.error("âŒ Error eliminando elemento:",F,q);const le=g.find(me=>me.key===F),fe=(le==null?void 0:le.name)||F.split("/").pop()||"Elemento";I.push(`${fe}: ${(q==null?void 0:q.message)||"Error desconocido"}`)}console.log(`ðŸ“Š Resumen de eliminaciÃ³n: ${S} eliminados, ${I.length} errores`),Mo(new Set),Dc(!1),ni(!1),I.length===0?(de("Elementos eliminados correctamente"),ne(!0)):S>0?(de("Algunos elementos eliminados correctamente"),ne(!0)):(de("Error al eliminar elementos"),ne(!0)),await new Promise(F=>setTimeout(F,500)),await _c()}catch(b){console.error("Error en eliminaciÃ³n masiva:",b);const S=(b==null?void 0:b.message)||"Error eliminando elementos";R(S),de(`Error al eliminar elementos: ${S}`),ne(!0)}finally{Lc(!1)}};return t.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1320},children:[U&&t.jsx(zc,{autoHideMs:5e3,onClose:()=>W(!1),children:oe}),ee&&t.jsx(Va,{autoHideMs:8e3,onClose:()=>ne(!1),children:oe}),t.jsxs("div",{className:"dash-header",children:[t.jsx("div",{className:"dash-title",children:n?"Expediente":p?"Mis expedientes":"Mi expediente"}),n&&r&&t.jsx("button",{className:"btn btn-secondary",onClick:r,style:{marginLeft:"auto"},children:"Cerrar"})]}),t.jsxs("div",{className:"dash-item me-subbar",children:[t.jsxs("div",{className:"me-hello",children:["Bienvenido: ",l]}),t.jsxs("select",{className:"me-select","aria-label":"Tipo de b?squeda",children:[t.jsx("option",{children:"Procesos judiciales"}),t.jsx("option",{children:"Demandas"}),t.jsx("option",{children:"Audiencias"})]}),t.jsx("input",{className:"me-input",placeholder:"Buscar..."}),t.jsxs("div",{className:"me-actions",children:[t.jsx("button",{className:`btn ${Ln?"btn-orange":"btn-secondary"}`,onClick:ah,title:Ln?"Salir del modo de selección":"Seleccionar múltiples archivos",children:Ln?"Cancelar selección":"Seleccionar archivos"}),Ln&&Be.size>0&&t.jsxs("button",{className:"btn btn-danger",onClick:()=>ni(!0),title:`Eliminar ${Be.size} elemento${Be.size>1?"s":""} seleccionado${Be.size>1?"s":""}`,children:["Eliminar (",Be.size,")"]}),t.jsx("button",{className:"btn btn-secondary",children:"Ver información"})]})]}),t.jsxs("div",{className:"me-layout",children:[t.jsxs("aside",{className:"me-left dash-item",children:[t.jsx("div",{className:"me-head",children:p?n?"CARPETAS":"CLIENTE":"CARPETAS"}),t.jsxs("div",{className:"me-tree",children:[!p&&t.jsx(t.Fragment,{children:L?t.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"Cargando carpetas..."}):k.length===0?t.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"No hay carpetas disponibles"}):k.map(b=>{var I;const S=xe.has(b.path);return t.jsxs("div",{style:{marginBottom:"8px"},children:[t.jsxs("div",{style:{cursor:"pointer",color:S?"#4fd1c5":"#e5edf7",fontWeight:"600",padding:"8px 4px",borderRadius:"4px",backgroundColor:S?"#2a3a51":"transparent",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.2s ease"},onClick:()=>nh(b),children:[t.jsx("span",{style:{display:"inline-block",transform:S?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s ease",fontSize:"12px",color:S?"#4fd1c5":"#9fb3cc"},children:"â–¼"}),b.name]}),S&&t.jsx("div",{style:{marginLeft:"16px",marginTop:"4px"},children:t.jsxs("div",{style:{color:"#9fb3cc",fontSize:"12px"},children:[((I=b.documents)==null?void 0:I.length)||0," documentos"]})})]},b.path)})}),p&&n&&ae&&t.jsx(t.Fragment,{children:ie?t.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"Cargando carpetas..."}):t.jsxs("div",{children:[Object.values(Y[ae.id]||{}).map((b,S)=>{var I,F;return t.jsxs("div",{style:{cursor:"pointer",backgroundColor:(V==null?void 0:V.path)===b.path?"#2a3a51":"#1e2a3a",borderRadius:"8px",margin:"4px 0",padding:"12px 16px",border:(V==null?void 0:V.path)===b.path?"1px solid #fc771c":"1px solid #4fd1c5",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"12px"},onClick:()=>Pc(b),onMouseEnter:q=>{(V==null?void 0:V.path)!==b.path&&(q.target.style.backgroundColor="#2a3a51",q.target.style.borderColor="#fc771c")},onMouseLeave:q=>{(V==null?void 0:V.path)!==b.path&&(q.target.style.backgroundColor="#1e2a3a",q.target.style.borderColor="#4fd1c5")},children:[t.jsx("div",{style:{width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",color:(V==null?void 0:V.path)===b.path?"#fc771c":"#4fd1c5"},children:t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"})})}),t.jsxs("div",{style:{flex:1},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"2px"},children:[t.jsx("div",{style:{color:(V==null?void 0:V.path)===b.path?"#fc771c":"#4fd1c5",fontSize:"14px",fontWeight:"500"},children:b.name}),Ln&&t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:q=>{q.stopPropagation(),je(b),te(!0)},style:{padding:"2px 6px",fontSize:"10px",minWidth:"auto"},title:"Eliminar carpeta (solo si está vacía)",children:"ðŸ—‘ï¸"})]}),t.jsxs("div",{style:{color:"#9fb3cc",fontSize:"11px",display:"flex",alignItems:"center",gap:"4px"},children:[t.jsx("span",{style:{display:"inline-block",width:"4px",height:"4px",borderRadius:"50%",backgroundColor:((I=b.documents)==null?void 0:I.length)>0?"#10b981":"#6b7280"}}),((F=b.documents)==null?void 0:F.length)||0," documentos"]})]})]},S)}),Object.keys(Y[ae.id]||{}).length===0&&!ie&&t.jsx("div",{style:{color:"#9fb3cc",fontSize:"12px"},children:"No hay carpetas disponibles"})]})}),p&&!n&&w&&t.jsx("div",{className:"me-leaf",style:{color:"#fecaca"},children:w}),p&&!n&&!w&&y&&t.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"Cargando clientesï¿½"}),p&&!n&&!y&&m.length===0&&t.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"No tienes clientes asignados"}),p&&!n&&m.length>0&&t.jsx(t.Fragment,{children:m.map(b=>{const S=z.has(b.id);return t.jsxs("div",{style:{marginBottom:"8px"},children:[t.jsxs("div",{style:{cursor:"pointer",color:S?"#4fd1c5":"#e5edf7",fontWeight:"600",padding:"8px 4px",borderRadius:"4px",backgroundColor:S?"#2a3a51":"transparent",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.2s ease"},onClick:()=>Jm(b),children:[t.jsx("span",{style:{display:"inline-block",transform:S?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s ease",fontSize:"12px",color:S?"#4fd1c5":"#9fb3cc"},children:"â–¼"}),b.name]}),S&&t.jsx("div",{style:{marginLeft:"16px",marginTop:"4px"},children:ie?t.jsx("div",{style:{color:"#9fb3cc",fontSize:"12px"},children:"Cargando carpetas..."}):t.jsxs("div",{children:[Object.values(Y[b.id]||{}).map((I,F)=>{var q,le;return t.jsxs("div",{style:{cursor:"pointer",backgroundColor:(V==null?void 0:V.path)===I.path?"#2a3a51":"#1e2a3a",borderRadius:"8px",margin:"4px 0",padding:"12px 16px",border:(V==null?void 0:V.path)===I.path?"1px solid #fc771c":"1px solid #4fd1c5",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"12px"},onClick:()=>Pc(I),onMouseEnter:fe=>{(V==null?void 0:V.path)!==I.path&&(fe.target.style.backgroundColor="#2a3a51",fe.target.style.borderColor="#fc771c")},onMouseLeave:fe=>{(V==null?void 0:V.path)!==I.path&&(fe.target.style.backgroundColor="#1e2a3a",fe.target.style.borderColor="#4fd1c5")},children:[t.jsx("div",{style:{width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",color:(V==null?void 0:V.path)===I.path?"#fc771c":"#4fd1c5"},children:t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"})})}),t.jsxs("div",{style:{flex:1},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"2px"},children:[t.jsx("div",{style:{color:(V==null?void 0:V.path)===I.path?"#fc771c":"#4fd1c5",fontSize:"14px",fontWeight:"500"},children:I.name}),Ln&&t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:fe=>{fe.stopPropagation(),je(I),te(!0)},style:{padding:"2px 6px",fontSize:"10px",minWidth:"auto"},title:"Eliminar carpeta (solo si está vacía)",children:"ðŸ—‘ï¸"})]}),t.jsxs("div",{style:{color:"#9fb3cc",fontSize:"11px",display:"flex",alignItems:"center",gap:"4px"},children:[t.jsx("span",{style:{display:"inline-block",width:"4px",height:"4px",borderRadius:"50%",backgroundColor:((q=I.documents)==null?void 0:q.length)>0?"#10b981":"#6b7280"}}),((le=I.documents)==null?void 0:le.length)||0," documentos"]})]})]},F)}),Object.keys(Y[b.id]||{}).length===0&&!ie&&t.jsx("div",{style:{color:"#9fb3cc",fontSize:"12px"},children:"No hay carpetas disponibles"})]})})]},b.id)})})]})]}),t.jsxs("main",{className:"me-center dash-item",children:[t.jsxs("div",{className:"me-tabs",children:[t.jsx("div",{className:`me-tab ${a==="docs"?"active":""}`,onClick:()=>i("docs"),role:"button",tabIndex:0,children:"Documentos del Proceso"}),t.jsx("div",{className:`me-tab ${a==="aud"?"active":""}`,onClick:()=>i("aud"),role:"button",tabIndex:0,children:"Audiencias"})]}),a==="docs"&&t.jsx("div",{className:"me-table-wrap",children:t.jsxs("table",{className:"me-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Fecha de registro"}),t.jsx("th",{children:"Documento"}),t.jsx("th",{children:"Tipo"}),t.jsx("th",{children:"Tamaño"}),t.jsx("th",{children:"Acciones"})]})}),t.jsxs("tbody",{children:[g.filter(b=>{var I,F;return!(b.isFolder||((I=b.key)==null?void 0:I.endsWith("/"))||((F=b.name)==null?void 0:F.endsWith("/")))}).length===0&&t.jsx("tr",{children:t.jsx("td",{colSpan:5,style:{color:"#9fb3cc",textAlign:"center",padding:"20px"},children:x?"Cargando...":"No hay archivos"})}),g.filter(b=>{var I,F;return!(b.isFolder||((I=b.key)==null?void 0:I.endsWith("/"))||((F=b.name)==null?void 0:F.endsWith("/")))}).map(b=>{const S=b.lastModified?new Date(b.lastModified):b.createdTime?new Date(b.createdTime):null,I=b.name||(b.key||"").split("/").pop(),F=typeof b.size=="number"?Math.max(1,Math.round(b.size/1024)):null,q=b.mimeType||(I&&I.toLowerCase().endsWith(".pdf")?"application/pdf":void 0),le=Be.has(b.key);return t.jsxs("tr",{style:{backgroundColor:le?"rgba(252, 119, 28, 0.15)":"transparent",border:le?"1px solid #fc771c":"1px solid transparent",transition:"all 0.2s ease",cursor:Ln?"pointer":"default"},onClick:Ln?()=>ih(b.key):void 0,title:Ln?le?"Deseleccionar":"Seleccionar":void 0,children:[t.jsx("td",{children:S?S.toLocaleString():"-"}),t.jsx("td",{title:I,children:t.jsx("span",{style:{color:le?"#fc771c":"#e2e8f0",fontWeight:le?"600":"400"},children:I})}),t.jsx("td",{children:t.jsx("span",{style:{color:le?"#fc771c":"#4fd1c5",fontWeight:le?"600":"500"},children:q?q.split("/")[1]||q:"-"})}),t.jsx("td",{children:F?`${F} KB`:"-"}),t.jsx("td",{children:!p&&t.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:fe=>{fe.stopPropagation(),Gm(b.key,b.downloadURL||b.downloadUrl||b.webContentLink||b.webViewLink)},title:"Descargar archivo",disabled:Ln,children:"ðŸ“¥"})})})]},b.key||b.id)})]})]})}),a==="aud"&&t.jsx("div",{className:"me-table-wrap",children:t.jsxs("table",{className:"me-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Fecha"}),t.jsx("th",{children:"ActuaciÃ³n"}),t.jsx("th",{children:"Tipo"}),t.jsx("th",{children:"Juzgado"}),t.jsx("th",{children:"Estado"})]})}),t.jsx("tbody",{children:Q.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,style:{textAlign:"center",padding:20,color:"#9fb3cc"},children:"No hay audiencias programadas"})}):Q.map((b,S)=>t.jsxs("tr",{children:[t.jsx("td",{children:new Date(b.fecha).toLocaleString("es-CO")}),t.jsx("td",{children:b.actuacion}),t.jsx("td",{children:b.tipo}),t.jsx("td",{children:b.juzgado}),t.jsx("td",{children:t.jsx("span",{className:`me-badge ${b.estado==="agendada"?"me-badge-warning":b.estado==="confirmada"?"me-badge-info":b.estado==="realizada"?"me-badge-success":b.estado==="cancelada"?"me-badge-danger":"me-badge-secondary"}`,children:b.estado})})]},S))})]})})]}),t.jsx("aside",{className:"me-right dash-item",children:n?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"me-head",children:"Herramientas del Expediente"}),t.jsxs("div",{className:"me-right-content",style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("input",{ref:Ne,type:"file",style:{display:"none"},onChange:qm}),t.jsx("button",{className:"btn btn-primary",onClick:Hm,disabled:x,title:p?ae!=null&&ae.documentNumber?V!=null&&V.path?"":"Selecciona una carpeta especÃ­fica del proceso judicial para subir documentos":"Selecciona un cliente primero":G!=null&&G.path?"":"Selecciona una carpeta especÃ­fica del proceso judicial para subir documentos",style:{width:"100%",padding:"12px"},children:x?"Subiendo...":"Radicar documento"}),$m&&Yt&&t.jsxs("div",{style:{background:"#1e2a3a",padding:"12px",borderRadius:"6px",border:"1px solid #394b61",marginTop:"8px"},children:[t.jsx("div",{style:{fontSize:"12px",color:"#9fb3cc",marginBottom:"8px",fontWeight:"500"},children:"Nombre del archivo en S3:"}),t.jsx("input",{type:"text",value:or,onChange:Wm,onBlur:b=>{const S=er(b.target.value);S!==b.target.value&&(console.log("ðŸ”§ FILE INPUT BLUR FIX - Original:",b.target.value,"Corrected:",S),b.target.value=S,dt(S))},onKeyUp:b=>{const S=er(b.target.value);S!==b.target.value&&(console.log("ðŸ”§ FILE INPUT KEYUP FIX - Original:",b.target.value,"Corrected:",S),b.target.value=S,dt(S))},placeholder:"Nombre del archivo...",style:{width:"100%",padding:"8px 12px",background:"#2a3a51",border:"1px solid #4fd1c5",borderRadius:"4px",color:"#e2e8f0",fontSize:"14px",marginBottom:"8px"}}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx("button",{className:"btn btn-primary btn-sm",onClick:Zm,disabled:x||!or.trim(),style:{flex:1,padding:"8px"},children:x?"Subiendo...":"âœ… Subir"}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:Ym,disabled:x,style:{flex:1,padding:"8px"},children:"âŒ Cancelar"})]})]}),t.jsx("button",{className:"btn btn-secondary",onClick:()=>an(!0),style:{width:"100%",padding:"12px"},children:"Crear Proceso"}),t.jsx("button",{className:"btn btn-secondary",onClick:()=>$r(!0),style:{width:"100%",padding:"12px"},children:"Información del Expediente"}),t.jsx("button",{className:"btn btn-secondary",onClick:()=>Kr(!0),style:{width:"100%",padding:"12px"},children:"Programar audiencia"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"me-head",children:"Datos del Proceso Judicial"}),t.jsxs("div",{className:"me-right-content",children:[t.jsxs("div",{className:"me-proc-grid",children:[t.jsx("div",{className:"me-tag",children:"Radicado"}),t.jsx("div",{children:"110014105009-20250011400"}),t.jsx("div",{className:"me-tag",children:"Clase"}),t.jsx("div",{children:"Laboral - Ordinario"}),t.jsx("div",{className:"me-tag",children:"Demandante"}),t.jsx("div",{children:"Juan PÃ©rez"}),t.jsx("div",{className:"me-tag",children:"Demandado"}),t.jsx("div",{children:"Acme S.A.S."}),t.jsx("div",{className:"me-tag",children:"Juzgado"}),t.jsx("div",{children:"JDO 009 MPC"}),t.jsx("div",{className:"me-tag",children:"Estado"}),t.jsx("div",{children:"En trÃ¡mite"})]}),t.jsx("hr",{className:"me-hr"}),t.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:"Descargar expediente"})]})]})})]})]}),n&&ge&&t.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>an(!1),children:t.jsxs("div",{className:"dash-card",style:{maxWidth:"500px",width:"100%"},onClick:b=>b.stopPropagation(),children:[t.jsx("div",{className:"dash-header",style:{marginBottom:8},children:t.jsx("div",{className:"dash-title",children:"Crear Nuevo Proceso"})}),t.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Nombre del Proceso:"}),t.jsx("input",{type:"text",className:"me-input",placeholder:"Ej: Demanda por despido injustificado",value:on,onChange:Vm,style:{width:"100%"},disabled:Zt}),t.jsx("div",{style:{fontSize:"12px",color:"#fbbf24",backgroundColor:"rgba(251, 191, 36, 0.1)",border:"1px solid rgba(251, 191, 36, 0.3)",borderRadius:"6px",padding:"8px 12px",marginTop:"8px"},children:"â„¹ï¸ Esta ventana generarÃ¡ el nombre completo de la carpeta combinando el tipo de proceso seleccionado con el nombre que escribas."})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Tipo de Proceso:"}),t.jsxs("select",{className:"me-select",style:{width:"100%"},value:ei,onChange:b=>_o(b.target.value),disabled:Zt,children:[t.jsx("option",{value:"",children:"Selecciona un tipo..."}),t.jsx("option",{value:"civil",children:"Proceso Civil"}),t.jsx("option",{value:"laboral",children:"Proceso Laboral"}),t.jsx("option",{value:"penal",children:"Proceso Penal"}),t.jsx("option",{value:"administrativo",children:"Proceso Administrativo"}),t.jsx("option",{value:"comercial",children:"Proceso Comercial"}),t.jsx("option",{value:"ejecutivo",children:"Proceso Ejecutivo"}),t.jsx("option",{value:"familia",children:"Proceso de Familia"}),t.jsx("option",{value:"notarial",children:"TrÃ¡mite Notarial"}),t.jsx("option",{value:"tramite",children:"TrÃ¡mite"})]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>{an(!1),Xa(""),_o("")},disabled:Zt,children:"Cancelar"}),t.jsx("button",{className:"btn btn-primary",onClick:rh,disabled:Zt||!on.trim(),children:Zt?"Creando...":"Crear Proceso"})]})]})}),n&&qn&&Yn&&t.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>Zn(!1),children:t.jsxs("div",{className:"dash-card",style:{maxWidth:"500px",width:"100%"},onClick:b=>b.stopPropagation(),children:[t.jsx("div",{className:"dash-header",style:{marginBottom:8},children:t.jsx("div",{className:"dash-title",children:"Renombrar Archivo"})}),t.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Archivo actual:"}),t.jsx("div",{style:{background:"#1e2a3a",padding:"8px 12px",borderRadius:"6px",color:"#9fb3cc",fontSize:"14px"},children:Yn.name||((Mc=Yn.key)==null?void 0:Mc.split("/").pop())})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Nuevo nombre:"}),t.jsx("input",{type:"text",className:"me-input",value:Ja,onChange:b=>Qa(b.target.value),style:{width:"100%"}})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>Zn(!1),children:"Cancelar"}),t.jsx("button",{className:"btn btn-primary",onClick:()=>{console.log("Renombrando archivo:",Yn.key,"a:",Ja),Zn(!1)},children:"Renombrar"})]})]})}),n&&Dn&&Yn&&t.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>ct(!1),children:t.jsxs("div",{className:"dash-card",style:{maxWidth:"500px",width:"100%"},onClick:b=>b.stopPropagation(),children:[t.jsx("div",{className:"dash-header",style:{marginBottom:8},children:t.jsx("div",{className:"dash-title",children:"Confirmar Eliminación"})}),t.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[t.jsx("div",{children:"¿Estás seguro de que quieres eliminar el archivo?"}),t.jsxs("div",{style:{background:"#1e2a3a",padding:"12px",borderRadius:"6px",color:"#e5edf7",fontSize:"14px"},children:[t.jsx("strong",{children:"Archivo:"})," ",Yn.name||((Bc=Yn.key)==null?void 0:Bc.split("/").pop())]}),t.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:"8px 12px",borderRadius:"6px",fontSize:"12px"},children:"âš ï¸ Esta acciÃ³n no se puede deshacer"})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>ct(!1),children:"Cancelar"}),t.jsx("button",{className:"btn btn-danger",onClick:()=>{console.log("Eliminando archivo:",Yn.key),ct(!1)},children:"Eliminar"})]})]})}),n&&Po&&t.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>$r(!1),children:t.jsxs("div",{className:"dash-card",style:{maxWidth:"600px",width:"100%"},onClick:b=>b.stopPropagation(),children:[t.jsx("div",{className:"dash-header",style:{marginBottom:8},children:t.jsx("div",{className:"dash-title",children:"InformaciÃ³n del Expediente"})}),t.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Radicado:"}),t.jsx("input",{type:"text",className:"me-input",value:hn.radicado,onChange:b=>Nn(S=>({...S,radicado:b.target.value})),placeholder:"110014105009-20250011400",style:{width:"100%"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Clase:"}),t.jsx("input",{type:"text",className:"me-input",value:hn.clase,onChange:b=>Nn(S=>({...S,clase:b.target.value})),placeholder:"Laboral - Ordinario",style:{width:"100%"}})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Demandante:"}),t.jsx("input",{type:"text",className:"me-input",value:hn.demandante,onChange:b=>Nn(S=>({...S,demandante:b.target.value})),placeholder:"Juan PÃ©rez",style:{width:"100%"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Demandado:"}),t.jsx("input",{type:"text",className:"me-input",value:hn.demandado,onChange:b=>Nn(S=>({...S,demandado:b.target.value})),placeholder:"Acme S.A.S.",style:{width:"100%"}})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Juzgado:"}),t.jsx("input",{type:"text",className:"me-input",value:hn.juzgado,onChange:b=>Nn(S=>({...S,juzgado:b.target.value})),placeholder:"JDO 009 MPC",style:{width:"100%"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Estado:"}),t.jsxs("select",{className:"me-select",value:hn.estado,onChange:b=>Nn(S=>({...S,estado:b.target.value})),style:{width:"100%"},children:[t.jsx("option",{value:"",children:"Selecciona un estado..."}),t.jsx("option",{value:"en-tramite",children:"En trÃ¡mite"}),t.jsx("option",{value:"sentencia",children:"Sentencia"}),t.jsx("option",{value:"archivado",children:"Archivado"}),t.jsx("option",{value:"suspension",children:"SuspensiÃ³n"})]})]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>$r(!1),children:"Cancelar"}),t.jsx("button",{className:"btn btn-primary",onClick:th,children:"Guardar InformaciÃ³n"})]})]})}),Um&&t.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>ni(!1),children:t.jsxs("div",{className:"dash-card",style:{maxWidth:"500px",width:"100%"},onClick:b=>b.stopPropagation(),children:[t.jsx("div",{className:"dash-header",style:{marginBottom:8},children:t.jsx("div",{className:"dash-title",children:"Confirmar EliminaciÃ³n"})}),t.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[t.jsxs("div",{children:["Â¿EstÃ¡s seguro de que quieres eliminar ",Be.size," elemento",Be.size>1?"s":""," seleccionado",Be.size>1?"s":"","?"]}),t.jsxs("div",{style:{background:"#1e2a3a",padding:"12px",borderRadius:"6px",color:"#e5edf7",fontSize:"14px",maxHeight:"200px",overflowY:"auto"},children:[t.jsx("strong",{children:"Elementos a eliminar:"}),t.jsxs("ul",{style:{margin:"8px 0 0 0",paddingLeft:"20px"},children:[Array.from(Be).slice(0,10).map((b,S)=>{const I=g.find(le=>le.key===b),F=(I==null?void 0:I.name)||b.split("/").pop()||"Elemento",q=(I==null?void 0:I.isFolder)||b.endsWith("/")||F.endsWith("/");return t.jsxs("li",{style:{marginBottom:"4px"},children:[t.jsxs("span",{style:{color:q?"#4fd1c5":"#e5edf7"},children:[q?"ðŸ“":"ðŸ“„"," ",F]}),t.jsxs("span",{style:{color:"#9fb3cc",fontSize:"12px",marginLeft:"8px"},children:["(",q?"Carpeta":"Archivo",")"]})]},S)}),Be.size>10&&t.jsxs("li",{style:{color:"#9fb3cc",fontStyle:"italic"},children:["... y ",Be.size-10," elemento",Be.size-10>1?"s":""," mÃ¡s"]})]})]}),t.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:"8px 12px",borderRadius:"6px",fontSize:"12px"},children:"âš ï¸ Esta acciÃ³n no se puede deshacer"})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>ni(!1),disabled:Bo,children:"Cancelar"}),t.jsx("button",{className:"btn btn-danger",onClick:oh,disabled:Bo,children:Bo?"Eliminando...":`Eliminar ${Be.size} elemento${Be.size>1?"s":""}`})]})]})}),n&&ir&&t.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>Kr(!1),children:t.jsxs("div",{style:{background:"#0f172a",color:"#e2e8f0",width:"100%",maxWidth:560,borderRadius:14,padding:16,boxShadow:"0 10px 32px rgba(0,0,0,0.45)"},onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[t.jsx("h3",{style:{margin:0,fontSize:"18px",fontWeight:"600"},children:"Programar Audiencia"}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Kr(!1),style:{padding:"4px 8px"},children:"âœ•"})]}),t.jsxs("div",{style:{display:"grid",gap:16},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:6,fontSize:"14px",fontWeight:"500"},children:"Fecha de Audiencia"}),t.jsx("input",{type:"datetime-local",value:Xe.fecha,onChange:b=>T(S=>({...S,fecha:b.target.value})),style:{width:"100%",padding:"8px 12px",background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:6,fontSize:"14px",fontWeight:"500"},children:"ActuaciÃ³n"}),t.jsx("input",{type:"text",value:Xe.actuacion,onChange:b=>T(S=>({...S,actuacion:b.target.value})),placeholder:"Ej: Audiencia de conciliaciÃ³n",style:{width:"100%",padding:"8px 12px",background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:6,fontSize:"14px",fontWeight:"500"},children:"Tipo de Audiencia"}),t.jsxs("select",{value:Xe.tipo,onChange:b=>T(S=>({...S,tipo:b.target.value})),style:{width:"100%",padding:"8px 12px",background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,fontSize:"14px"},children:[t.jsx("option",{value:"",children:"Seleccionar tipo"}),t.jsx("option",{value:"conciliacion",children:"ConciliaciÃ³n"}),t.jsx("option",{value:"audiencia_inicial",children:"Audiencia Inicial"}),t.jsx("option",{value:"audiencia_pruebas",children:"Audiencia de Pruebas"}),t.jsx("option",{value:"audiencia_sentencia",children:"Audiencia de Sentencia"}),t.jsx("option",{value:"audiencia_especial",children:"Audiencia Especial"})]})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:6,fontSize:"14px",fontWeight:"500"},children:"Juzgado"}),t.jsx("input",{type:"text",value:Xe.juzgado,onChange:b=>T(S=>({...S,juzgado:b.target.value})),placeholder:"Ej: Juzgado Primero Civil del Circuito",style:{width:"100%",padding:"8px 12px",background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:6,fontSize:"14px",fontWeight:"500"},children:"Estado"}),t.jsxs("select",{value:Xe.estado,onChange:b=>T(S=>({...S,estado:b.target.value})),style:{width:"100%",padding:"8px 12px",background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,fontSize:"14px"},children:[t.jsx("option",{value:"",children:"Seleccionar estado"}),t.jsx("option",{value:"agendada",children:"Agendada"}),t.jsx("option",{value:"confirmada",children:"Confirmada"}),t.jsx("option",{value:"realizada",children:"Realizada"}),t.jsx("option",{value:"cancelada",children:"Cancelada"}),t.jsx("option",{value:"aplazada",children:"Aplazada"})]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:20},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>Kr(!1),children:"Cancelar"}),t.jsx("button",{className:"btn btn-primary",onClick:()=>{const b={...Xe,id:Date.now(),fecha:Xe.fecha};re(S=>[...S,b]),Kr(!1),T({fecha:"",actuacion:"",tipo:"",juzgado:"",estado:""})},disabled:!Xe.fecha||!Xe.actuacion||!Xe.tipo||!Xe.juzgado||!Xe.estado,children:"Programar Audiencia"})]})]})}),n&&K&&we&&t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},onClick:()=>{Re||(te(!1),je(null))},children:t.jsxs("div",{style:{backgroundColor:"#1e2a3a",borderRadius:"12px",padding:"24px",maxWidth:"400px",width:"90%",border:"1px solid #394b61",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("h3",{style:{color:"#e2e8f0",margin:"0 0 8px 0",fontSize:"18px",fontWeight:"600"},children:"Eliminar Carpeta"}),t.jsxs("p",{style:{color:"#9fb3cc",margin:0,fontSize:"14px",lineHeight:"1.5"},children:["¿Estás seguro de que quieres eliminar la carpeta ",t.jsxs("strong",{style:{color:"#fc771c"},children:['"',we.name,'"']}),"?"]}),t.jsx("p",{style:{color:"#ef4444",margin:"8px 0 0 0",fontSize:"12px",fontWeight:"500"},children:"Solo se puede eliminar si la carpeta está vacía."})]}),t.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",marginTop:"20px"},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>{te(!1),je(null)},disabled:Re,style:{padding:"8px 16px"},children:"Cancelar"}),t.jsx("button",{className:"btn btn-danger",onClick:Xm,disabled:Re,style:{padding:"8px 16px"},children:Re?"Eliminando...":"Eliminar Carpeta"})]})]})})]})}const Np=["admin","user"];function cy(e,{defaultRole:n="user"}={}){const r=String(n||"user").trim().toLowerCase(),a=Np.includes(r)?r:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Np.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function dy(e){return cy(e==null?void 0:e.roles).includes("admin")}function py(){const{user:e}=qe(),n=dy(e),[r,a]=f.useState([]),[i,o]=f.useState(!1),[s,l]=f.useState(null),[c,d]=f.useState(null),[p,m]=f.useState(!1),[h,y]=f.useState(""),[v,w]=f.useState(null),[j,g]=f.useState(!1),[u,x]=f.useState(null),[C,N]=f.useState([]),[R,M]=f.useState(!1),[A,U]=f.useState(null),[W,ee]=f.useState(""),[ne,oe]=f.useState(!1),[de,Ne]=f.useState(null),[ye,ae]=f.useState(null),[B,Y]=f.useState({}),[J,V]=f.useState({}),[$,ie]=f.useState(!1),[H,z]=f.useState(null),[P,k]=f.useState(!1),[D,G]=f.useState(null),[O,L]=f.useState(""),[X,xe]=f.useState(null),[mn,ge]=f.useState("success"),an=(T,Q="success")=>{xe(String(T||"")),ge(Q);try{clearTimeout(an._t)}catch{}an._t=setTimeout(()=>xe(null),3500)},qn=async()=>{var T,Q;if(n){o(!0),l(null);try{const re=await Tc(),K=Array.isArray(re==null?void 0:re.items)?re.items:[];a(K)}catch(re){l(((Q=(T=re==null?void 0:re.response)==null?void 0:T.data)==null?void 0:Q.message)||(re==null?void 0:re.message)||"No se pudo cargar la lista de clientes")}finally{o(!1)}}};f.useEffect(()=>{qn()},[n]);const Zn=f.useMemo(()=>{const T=String(h||"").trim().toLowerCase();return T?r.filter(Q=>[Q.name,Q.email,Q.documentNumber,Q.phone,Q.id].map(re=>String(re||"").toLowerCase()).some(re=>re.includes(T))):r},[r,h]),Dn=T=>{const Q=r.find(re=>re.id===T);return(Q==null?void 0:Q.assignedAdmin)||null},ct=async T=>{var Q,re;x(T),g(!0),U(null),M(!0);try{const K=await Ic(),we=(Array.isArray(K==null?void 0:K.items)?K.items:[]).filter(Re=>(Array.isArray(Re.roles)?Re.roles:[Re.roles]).map(Gn=>String(Gn||"").toLowerCase()).includes("admin"));N(we.map(Re=>({id:Re.id,name:Re.name||Re.email||Re.id,email:Re.email})));const je=Dn(T.id);ee((je==null?void 0:je.id)||"")}catch(K){U(((re=(Q=K==null?void 0:K.response)==null?void 0:Q.data)==null?void 0:re.message)||(K==null?void 0:K.message)||"No se pudo cargar administradores")}finally{M(!1)}},Po=async()=>{var T,Q;try{const re=W||"";await Pb(u.id,re),await qn(),g(!1),x(null)}catch(re){U(((Q=(T=re==null?void 0:re.response)==null?void 0:T.data)==null?void 0:Q.message)||(re==null?void 0:re.message)||"No se pudo asignar")}},$r=T=>{d({id:T.id,name:T.name||"",email:T.email||"",documentNumber:T.documentNumber||"",phone:T.phone||""})},Yn=async()=>{var Q,re;if(!c)return;const T={name:String(c.name||"").trim(),documentNumber:String(c.documentNumber||"").trim(),phone:String(c.phone||"").trim()};try{m(!0),l(null);const K=await Lb(c.id,T),te=(K==null?void 0:K.client)||null;te&&a(we=>we.map(je=>je.id===te.id?{...je,...te}:je)),d(null)}catch(K){l(((re=(Q=K==null?void 0:K.response)==null?void 0:Q.data)==null?void 0:re.message)||(K==null?void 0:K.message)||"No se pudo guardar la informacion")}finally{m(!1)}},Fo=T=>{z(T),ie(!0),G(null),L("")},Ja=async()=>{var T,Q,re;if(H)try{k(!0),G(null);const K=await _b(H.id,O);await qn(),ie(!1),z(null);const te=(T=K==null?void 0:K.s3)==null?void 0:T.deleted;an(typeof te=="number"?`Cliente eliminado. Archivos S3 eliminados: ${te}`:"Cliente eliminado correctamente","danger")}catch(K){G(((re=(Q=K==null?void 0:K.response)==null?void 0:Q.data)==null?void 0:re.message)||(K==null?void 0:K.message)||"No se pudo eliminar el cliente")}finally{k(!1)}},Qa=async T=>{Ne(T),oe(!0)},ir=T=>{const Q=String((T==null?void 0:T.documentNumber)||(T==null?void 0:T.id)||"").trim();return Q?`clientes/${Q}/`:"clientes/sin-id/"},Kr=async T=>{const Q=T.id,re=ir(T);V(K=>({...K,[Q]:!0}));try{const K=re.startsWith("clientes/")?re.replace(/\/$/,""):re,te=await br({limit:50,subfolder:K}),we=Array.isArray(te==null?void 0:te.items)?te.items:[];Y(je=>({...je,[Q]:we}))}catch(K){console.error("Error al cargar archivos:",K),Y(te=>({...te,[Q]:[]}))}finally{V(K=>({...K,[Q]:!1}))}},Xe=async T=>{const Q=T.id;ye===Q?ae(null):(ae(Q),B[Q]||await Kr(T))};return n?t.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",paddingLeft:16,paddingRight:16,paddingBottom:16},children:[t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[t.jsx("style",{children:`
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
         `}),t.jsxs("div",{className:"dash-header clients-header",style:{marginBottom:16},children:[t.jsx("div",{className:"dash-title",children:"Clientes activos"}),t.jsxs("div",{className:"clients-actions",children:[t.jsx("input",{type:"search",name:"q",autoComplete:"off",placeholder:"Buscar por nombre, email, cedula o celular",value:h,onChange:T=>y(T.target.value),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"6px 10px"}}),t.jsx("button",{className:"btn btn-secondary",onClick:qn,disabled:i,children:i?"Actualizando...":"Refrescar"})]})]}),X&&(mn==="danger"?t.jsx(Va,{autoHideMs:3500,children:X}):t.jsx(zc,{autoHideMs:3500,children:X})),s&&t.jsx(Va,{children:s}),t.jsx("div",{className:"dash-item only-desktop",style:{overflowX:"auto"},children:t.jsxs("table",{className:"me-table",style:{minWidth:820},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Nombre"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Cedula"}),t.jsx("th",{children:"Celular"}),t.jsx("th",{children:"Acciones"})]})}),t.jsxs("tbody",{children:[Zn.length===0&&t.jsx("tr",{children:t.jsx("td",{colSpan:5,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay clientes activos para mostrar"})}),Zn.map(T=>{var Q,re;return t.jsxs(t.Fragment,{children:[t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsxs("div",{style:{cursor:"pointer",color:"#4fd1c5",fontWeight:"500",textDecoration:"underline"},onClick:()=>Xe(T),onMouseOver:K=>K.target.style.color="#6ee7d7",onMouseOut:K=>K.target.style.color="#4fd1c5",children:[T.name||"-"," ",ye===T.id?"▼":"▶"]}),t.jsxs("div",{style:{fontSize:12,opacity:.75},children:["Admin asignado: ",((Q=T.assignedAdmin)==null?void 0:Q.name)||"—"]})]}),t.jsx("td",{children:T.email||"-"}),t.jsx("td",{children:T.documentNumber||"-"}),t.jsx("td",{children:T.phone||"-"}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>ct(T),title:Dn(T.id)?`Asignado a ${((re=Dn(T.id))==null?void 0:re.name)||""}`:"Asignar administrador",children:Dn(T.id)?"Asignado":"Asignar"}),t.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Qa(T),children:"Archivos"}),t.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>$r(T),children:"Editar"}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Fo(T),children:"Eliminar"})]})})]},T.id),ye===T.id&&t.jsx("tr",{children:t.jsx("td",{colSpan:5,style:{padding:0,background:"#0c1530"},children:t.jsxs("div",{style:{padding:"20px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("h4",{style:{margin:0,color:"#e2e8f0"},children:["Archivos y Carpetas - ",T.name]}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>ae(null),children:"Cerrar"})]}),J[T.id]?t.jsxs("div",{style:{textAlign:"center",padding:"40px",color:"#cbd5e1"},children:[t.jsx("div",{style:{display:"inline-block",width:"20px",height:"20px",border:"2px solid #4fd1c5",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite",marginRight:"8px"}}),"Cargando archivos..."]}):t.jsx("div",{style:{border:"1px solid #394b61",borderRadius:"8px",overflow:"hidden",background:"#1b263b"},children:t.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[t.jsx("thead",{style:{background:"#0c1530"},children:t.jsxs("tr",{children:[t.jsx("th",{style:{padding:"12px 16px",fontWeight:"600",textAlign:"left"},children:"Nombre"}),t.jsx("th",{style:{padding:"12px 16px",fontWeight:"600",textAlign:"left"},children:"Tipo"}),t.jsx("th",{style:{padding:"12px 16px",fontWeight:"600",textAlign:"left"},children:"Fecha"}),t.jsx("th",{style:{padding:"12px 16px",fontWeight:"600",textAlign:"left"},children:"Tamaño"})]})}),t.jsx("tbody",{children:!B[T.id]||B[T.id].length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:4,style:{textAlign:"center",padding:"40px",color:"#cbd5e1"},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[t.jsx("div",{children:"No hay archivos o carpetas para mostrar"}),t.jsx("div",{style:{fontSize:"14px",opacity:.7},children:'Haz clic en "Archivos" para gestionar documentos'})]})})}):B[T.id].filter(K=>{const te=K.key||"",we=ir(T);return!(te===we&&K.isFolder)}).map(K=>{var Gn,hn;const te=K.lastModified?new Date(K.lastModified):K.createdTime?new Date(K.createdTime):null,we=K.isFolder||((Gn=K.key)==null?void 0:Gn.endsWith("/"))||((hn=K.name)==null?void 0:hn.endsWith("/"));let je=K.name||(K.key||"").split("/").pop();if(we&&je&&ir(T)){const Nn=ir(T).replace(/\/$/,"");K.key&&K.key.startsWith(Nn)&&(je=K.key.replace(Nn+"/","").replace(/\/$/,""))}const Re=typeof K.size=="number"?Math.max(1,Math.round(K.size/1024)):null;return t.jsxs("tr",{style:{borderBottom:"1px solid #394b61"},children:[t.jsx("td",{style:{padding:"12px 16px"},children:t.jsx("span",{style:{color:we?"#fc771c":"#e2e8f0",fontWeight:"500"},children:je})}),t.jsx("td",{style:{padding:"12px 16px"},children:t.jsx("span",{style:{color:we?"#fc771c":"#4fd1c5",fontWeight:"500"},children:we?"Carpeta":"Archivo"})}),t.jsx("td",{style:{padding:"12px 16px",color:"#cbd5e1"},children:te?te.toLocaleDateString("es-CO"):"-"}),t.jsx("td",{style:{padding:"12px 16px",color:"#cbd5e1"},children:Re?`${Re} KB`:"-"})]},K.key||K.id)})})]})})]})})})]})})]})]})}),t.jsxs("div",{className:"dash-item only-mobile mobile-list",children:[Zn.length===0&&t.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay clientes activos para mostrar"}),Zn.map(T=>{var re,K;const Q=v===T.id;return t.jsxs("div",{className:"mobile-item",children:[t.jsxs("button",{type:"button",className:"btn btn-primary btn-sm mobile-item-header",onClick:()=>{w(te=>te===T.id?null:T.id),Q||Xe(T)},"aria-expanded":Q,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsx("div",{className:"mobile-item-title",children:T.name||"-"}),t.jsx("div",{style:{opacity:.9,fontSize:12,paddingRight:10},children:Q?"▼":"▶"})]}),Q&&t.jsxs("div",{className:"mobile-item-details",children:[t.jsxs("div",{className:"kv",children:[t.jsx("span",{children:"Email"}),t.jsx("div",{children:T.email||"-"})]}),t.jsxs("div",{className:"kv",style:{marginTop:6},children:[t.jsx("span",{children:"Cédula"}),t.jsx("div",{children:T.documentNumber||"-"})]}),t.jsxs("div",{className:"kv",style:{marginTop:6},children:[t.jsx("span",{children:"Celular"}),t.jsx("div",{children:T.phone||"-"})]}),t.jsxs("div",{className:"kv",style:{marginTop:6},children:[t.jsx("span",{children:"Admin asignado"}),t.jsx("div",{children:((re=T.assignedAdmin)==null?void 0:re.name)||"—"})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10},children:[t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>ct(T),style:{marginRight:8},title:Dn(T.id)?`Asignado a ${((K=Dn(T.id))==null?void 0:K.name)||""}`:"Asignar administrador",children:Dn(T.id)?"Asignado":"Asignar"}),t.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Qa(T),style:{marginRight:8},children:"Archivos"}),t.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>$r(T),style:{marginRight:8},children:"Editar"}),t.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Fo(T),children:"Eliminar"})]}),t.jsxs("div",{style:{marginTop:"16px",paddingTop:"16px",borderTop:"1px solid #394b61"},children:[t.jsx("h5",{style:{margin:"0 0 12px 0",color:"#e2e8f0",fontSize:"16px"},children:"Archivos y Carpetas"}),J[T.id]?t.jsxs("div",{style:{textAlign:"center",padding:"20px",color:"#cbd5e1"},children:[t.jsx("div",{style:{display:"inline-block",width:"16px",height:"16px",border:"2px solid #4fd1c5",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite",marginRight:"8px"}}),"Cargando archivos..."]}):t.jsx("div",{children:!B[T.id]||B[T.id].length===0?t.jsxs("div",{style:{textAlign:"center",padding:"20px",color:"#cbd5e1",fontSize:"14px"},children:[t.jsx("div",{children:"No hay archivos o carpetas para mostrar"}),t.jsx("div",{style:{fontSize:"12px",opacity:.7,marginTop:"4px"},children:'Haz clic en "Archivos" para gestionar documentos'})]}):t.jsx("div",{style:{border:"1px solid #394b61",borderRadius:"6px",overflow:"hidden",background:"#1b263b"},children:B[T.id].filter(te=>{const we=te.key||"",je=ir(T);return!(we===je&&te.isFolder)}).map(te=>{var hn,Nn;const we=te.lastModified?new Date(te.lastModified):te.createdTime?new Date(te.createdTime):null,je=te.isFolder||((hn=te.key)==null?void 0:hn.endsWith("/"))||((Nn=te.name)==null?void 0:Nn.endsWith("/"));let Re=te.name||(te.key||"").split("/").pop();if(je&&Re&&ir(T)){const on=ir(T).replace(/\/$/,"");te.key&&te.key.startsWith(on)&&(Re=te.key.replace(on+"/","").replace(/\/$/,""))}const Gn=typeof te.size=="number"?Math.max(1,Math.round(te.size/1024)):null;return t.jsx("div",{style:{padding:"12px",borderBottom:"1px solid #394b61",display:"flex",justifyContent:"space-between",alignItems:"center"},children:t.jsxs("div",{children:[t.jsx("div",{style:{color:je?"#fc771c":"#e2e8f0",fontWeight:"500",fontSize:"14px"},children:Re}),t.jsxs("div",{style:{color:"#cbd5e1",fontSize:"12px",marginTop:"2px"},children:[je?"Carpeta":"Archivo"," • ",we?we.toLocaleDateString("es-CO"):"-"," • ",Gn?`${Gn} KB`:"-"]})]})},te.key||te.id)})})})]})]})]},T.id)})]})]}),c&&t.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:T=>{T.target===T.currentTarget&&d(null)},children:t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:560,padding:16},children:[t.jsx("div",{className:"dash-header",style:{marginBottom:12},children:t.jsx("div",{className:"dash-title",children:"Editar cliente"})}),t.jsx("div",{className:"dash-item",children:t.jsxs(Dm,{children:[t.jsx(Mn,{label:"Nombre",value:c.name,onChange:T=>d(Q=>({...Q,name:T.target.value})),placeholder:"Nombre y apellidos"}),t.jsx(Mn,{label:"Email",type:"email",value:c.email,onChange:()=>{},inputProps:{readOnly:!0}}),t.jsxs(El,{cols:2,children:[t.jsx(Mn,{label:"Cédula",value:c.documentNumber,onChange:T=>d(Q=>({...Q,documentNumber:T.target.value})),placeholder:"Ej: 80153356"}),t.jsx(Mn,{label:"Celular",value:c.phone,onChange:T=>d(Q=>({...Q,phone:T.target.value})),placeholder:"Ej: 300 123 4567"})]})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>d(null),disabled:p,children:"Cancelar"}),t.jsx("button",{className:"btn btn-primary",onClick:Yn,disabled:p,children:p?"Guardando...":"Guardar cambios"})]})]})}),ne&&t.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>oe(!1),children:t.jsx("div",{style:{width:"100%",maxWidth:"95vw",maxHeight:"95vh",background:"transparent"},onClick:T=>T.stopPropagation(),children:t.jsx(Nl,{selectedClient:de,isModal:!0,onClose:()=>oe(!1)})})}),j&&u&&t.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:T=>{T.target===T.currentTarget&&(g(!1),x(null))},children:t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:560},children:[t.jsx("div",{className:"dash-header",style:{marginBottom:8},children:t.jsx("div",{className:"dash-title",children:"Asignar administrador"})}),t.jsxs("div",{className:"dash-item",style:{display:"grid",gap:10},children:[t.jsxs("div",{style:{fontSize:14,opacity:.85},children:["Cliente: ",t.jsx("strong",{children:u.name})," ",t.jsxs("span",{style:{opacity:.7},children:["(",u.id,")"]})]}),A&&t.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6},children:A}),t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Selecciona un admin"}),t.jsxs("select",{value:W,onChange:T=>ee(T.target.value),disabled:R,style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"},children:[t.jsx("option",{value:"",children:"— Sin asignar —"}),C.map(T=>t.jsxs("option",{value:T.id,children:[T.name," — ",T.email]},T.id))]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>{g(!1),x(null)},disabled:R,children:"Cancelar"}),t.jsx("button",{className:"btn btn-primary",onClick:Po,disabled:R,children:"Guardar"})]})]})}),$&&H&&t.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:65,padding:16},onClick:T=>{T.target===T.currentTarget&&(ie(!1),z(null))},children:t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:520},children:[t.jsx("div",{className:"dash-header",style:{marginBottom:8},children:t.jsx("div",{className:"dash-title",children:"Confirmar eliminación"})}),t.jsxs("div",{className:"dash-item",style:{display:"grid",gap:10},children:[t.jsxs("div",{children:["¿Eliminar al cliente ",t.jsx("strong",{children:H.name||H.email||H.id}),"?"]}),t.jsxs("div",{style:{fontSize:13,opacity:.85},children:["Esta acción eliminará el contenedor del cliente y su carpeta S3 asociada (clientes/",String(H.documentNumber||"").trim(),")."]}),t.jsx("input",{type:"text",autoComplete:"username",value:" ",readOnly:!0,"aria-hidden":"true",style:{position:"absolute",opacity:0,height:0,width:0,pointerEvents:"none"}}),t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{children:"Contraseña de eliminación"}),t.jsx("input",{type:"password",name:"delete-confirm",autoComplete:"new-password","data-lpignore":"true","data-1p-ignore":"true",value:O,onChange:T=>L(T.target.value),placeholder:"eliminarclientekoop",style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),D&&t.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6},children:D})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>{ie(!1),z(null)},disabled:P,children:"Cancelar"}),t.jsx("button",{className:"btn btn-primary",onClick:Ja,disabled:P||!O,children:P?"Eliminando...":"Eliminar"})]})]})}),t.jsx("style",{children:`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]}):t.jsx("div",{className:"dash-page",style:{padding:40},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[t.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),t.jsx("p",{style:{marginTop:12},children:"Esta seccion esta disponible solo para administradores."})]})})}const Pm="koop.calendar.events";function Ap(){if(typeof window>"u")return[];try{const e=window.localStorage.getItem(Pm);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.filter(Boolean):[]}catch(e){return console.warn("[calendarStorage] load error",e),[]}}function uy(e){if(!(typeof window>"u"))try{window.localStorage.setItem(Pm,JSON.stringify(e??[]))}catch(n){console.warn("[calendarStorage] save error",n)}}const fy="koop.calendar.events";function Fm(){const[e,n]=f.useState(()=>Ap());f.useEffect(()=>{const a=i=>{(i==null?void 0:i.key)===fy&&n(Ap())};return typeof window<"u"&&window.addEventListener("storage",a),()=>{typeof window<"u"&&window.removeEventListener("storage",a)}},[]);const r=f.useCallback(a=>{n(i=>{const o=typeof a=="function"?a(i):a;return uy(o),o})},[]);return[e,r]}const my="documentos_iniciales";function Ip(e){return String(e||"").trim()}function _m({buttonLabel:e="Subir documento",buttonClassName:n="btn btn-primary",defaultFolder:r=my,allowFolderInput:a=!0,onUploaded:i}){const[o,s]=f.useState(!1),[l,c]=f.useState(null),[d,p]=f.useState(r||""),[m,h]=f.useState(()=>Date.now()),[y,v]=f.useState(null),[w,j]=f.useState(null),[g,u]=f.useState(!1),x=()=>{c(null),p(r||""),h(Date.now()),v(null),j(null),u(!1)},C=()=>{x(),s(!0)},N=()=>{s(!1),x()},R=A=>{var W;const U=((W=A.target.files)==null?void 0:W[0])||null;c(U),v(null),U&&j(null)},M=async A=>{var W,ee,ne;if(A.preventDefault(),!l){v("Selecciona un archivo");return}const U=Ip(a?d:r);try{u(!0),v(null);const oe=await Lm(l,{subfolder:U||void 0});if(j((W=oe==null?void 0:oe.file)!=null&&W.key?"Archivo subido correctamente":"Archivo subido"),c(null),h(Date.now()),typeof i=="function")try{i(oe)}catch{}}catch(oe){v(((ne=(ee=oe==null?void 0:oe.response)==null?void 0:ee.data)==null?void 0:ne.message)||(oe==null?void 0:oe.message)||"No se pudo subir el archivo")}finally{u(!1)}};return t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:n,onClick:C,children:e}),o&&t.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:16},children:t.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:480,position:"relative"},children:[t.jsx("button",{type:"button",onClick:N,style:{position:"absolute",top:12,right:12,background:"transparent",border:"none",color:"#334155",fontSize:20,cursor:"pointer"},"aria-label":"Cerrar",children:"X"}),t.jsx("h3",{className:"dash-title",style:{marginBottom:16},children:"Subir documento"}),t.jsxs("form",{onSubmit:M,children:[t.jsxs("div",{style:{marginBottom:12},children:[t.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Archivo"}),t.jsx("input",{type:"file",onChange:R,disabled:g,required:!0,style:{width:"100%"}},m)]}),a?t.jsxs("div",{style:{marginBottom:16},children:[t.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Subcarpeta (opcional)"}),t.jsx("input",{type:"text",placeholder:r||"documentos_iniciales",value:d,onChange:A=>p(A.target.value),disabled:g,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #cbd5f5"}})]}):t.jsxs("div",{style:{marginBottom:16},children:[t.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Carpeta destino"}),t.jsx("input",{type:"text",value:r||"",readOnly:!0,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #cbd5f5",background:"#1f2937",color:"#e2e8f0"}})]}),y&&t.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6,marginBottom:12},children:y}),w&&t.jsx("div",{style:{background:"#14532d",color:"#bbf7d0",padding:8,borderRadius:6,marginBottom:12},children:w}),t.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"flex-end"},children:[t.jsx("button",{type:"button",className:"btn btn-secondary",onClick:N,disabled:g,children:"Cancelar"}),t.jsx("button",{type:"submit",className:"btn btn-primary",disabled:g||!l,children:g?"Subiendo...":"Subir"})]})]})]})})]})}const hy=["Lun","Mar","Mie","Jue","Vie","Sab","Dom"];function gy(e){const n=e.getFullYear(),r=e.getMonth(),i=(new Date(n,r,1).getDay()+6)%7,o=new Date(n,r+1,0).getDate(),s=[];let l=1-i;for(let c=0;c<6;c+=1){const d=[];for(let p=0;p<7;p+=1){const m=new Date(n,r,l),h=l>=1&&l<=o;d.push({date:m,inCurrentMonth:h}),l+=1}s.push(d)}return s}function xy(e){if(!e)return null;const n=e.getFullYear(),r=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${r}-${a}`}function Mm({value:e,onChange:n,onDateSelect:r,events:a=[],className:i=""}){const o=f.useMemo(()=>new Date,[]),[s,l]=f.useState(()=>new Date(o.getFullYear(),o.getMonth(),1)),[c,d]=f.useState(o);f.useEffect(()=>{e instanceof Date&&(d(e),l(new Date(e.getFullYear(),e.getMonth(),1)))},[e]);const p=e instanceof Date?e:c,m=typeof n=="function"?n:r,h=f.useMemo(()=>s.toLocaleDateString("es-ES",{month:"long",year:"numeric"}),[s]),y=f.useMemo(()=>gy(s),[s]),v=f.useMemo(()=>{const u=new Map;return(a||[]).forEach(x=>{const C=(x==null?void 0:x.date)||(x==null?void 0:x.dateKey);C&&(u.has(C)||u.set(C,[]),u.get(C).push(x))}),u},[a]),w=u=>{u instanceof Date&&(e instanceof Date||d(u),typeof m=="function"&&m(u))},j=u=>{l(x=>new Date(x.getFullYear(),x.getMonth()+u,1))},g=["dash-item",i].filter(Boolean).join(" ").trim();return t.jsxs("div",{className:g,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>j(-1),"aria-label":"Mes anterior",children:"◀"}),t.jsx("div",{style:{fontWeight:600,textTransform:"capitalize"},children:h}),t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>j(1),"aria-label":"Mes siguiente",children:"▶"})]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:6,marginBottom:8},children:hy.map(u=>t.jsx("div",{style:{textAlign:"center",fontSize:12,fontWeight:600,opacity:.75},children:u},u))}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:6},children:y.map((u,x)=>u.map(({date:C,inCurrentMonth:N},R)=>{const M=xy(C),A=C.toDateString()===o.toDateString(),U=C.toDateString()===p.toDateString(),W=v.get(M)||[],ee={position:"relative",borderRadius:8,border:"1px solid rgba(148, 163, 184, 0.25)",padding:"8px 0",textAlign:"center",fontSize:13,cursor:N?"pointer":"default",opacity:N?1:.35,background:"#1f2937",color:"#e2e8f0",transition:"transform 0.12s ease"};return A&&(ee.border="1px solid #38bdf8"),U&&(ee.background="linear-gradient(135deg, #38b2ac, #0ea5e9)",ee.color="#0f172a",ee.fontWeight=700),N&&W.length>0&&!U&&(ee.background="#f5b891",ee.color="#0f172a",ee.border="1px solid rgba(245, 184, 145, 0.65)",ee.fontWeight=600),t.jsxs("button",{type:"button",style:ee,disabled:!N,onClick:()=>N&&w(C),children:[C.getDate(),W.length>0&&t.jsx("span",{style:{position:"absolute",bottom:4,left:"50%",transform:"translateX(-50%)",width:6,height:6,borderRadius:"999px",background:U?"#0f172a":N?"#7c3a00":"#38bdf8"}})]},`${x}-${R}`)}))})]})}function vy({title:e="Asistente IA",systemPrompt:n}){const[r,a]=f.useState(()=>[]),[i,o]=f.useState(""),[s,l]=f.useState(!1),c=f.useRef(null),d=f.useMemo(()=>i.trim().length>0&&!s,[i,s]),p=()=>{try{const y=c.current;y&&(y.scrollTop=y.scrollHeight)}catch{}},m=async()=>{var w,j,g,u,x,C,N,R,M;const y=i.trim();if(!y)return;const v=[...r,{role:"user",content:y}];a(v),o(""),l(!0),setTimeout(p,0);try{const A={messages:[...n?[{role:"system",content:n}]:[],...v]},{data:U}=await Ce.post("/ai/chat",A),W=(U==null?void 0:U.reply)||((w=U==null?void 0:U.message)==null?void 0:w.content)||((u=(g=(j=U==null?void 0:U.choices)==null?void 0:j[0])==null?void 0:g.message)==null?void 0:u.content)||((N=(C=(x=U==null?void 0:U.choices)==null?void 0:x[0])==null?void 0:C.delta)==null?void 0:N.content)||"",ee=String(W||"").trim()||"Lo siento, no obtuve respuesta.";a(ne=>[...ne,{role:"assistant",content:ee}]),setTimeout(p,0)}catch(A){const U=((M=(R=A==null?void 0:A.response)==null?void 0:R.data)==null?void 0:M.message)||(A==null?void 0:A.message)||"Error al consultar el asistente";a(W=>[...W,{role:"assistant",content:`⚠️ ${U}`}]),setTimeout(p,0)}finally{l(!1)}},h=y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),d&&m())};return t.jsxs("div",{className:"dash-item",style:{display:"flex",flexDirection:"column",gap:10},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsx("div",{style:{fontWeight:600},children:e}),t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>a([]),disabled:s,children:"Limpiar"})]}),t.jsxs("div",{ref:c,style:{background:"#0f172a",border:"1px solid rgba(148,163,184,0.25)",borderRadius:12,padding:10,minHeight:180,maxHeight:260,overflowY:"auto",display:"flex",flexDirection:"column",gap:8},children:[r.length===0&&t.jsx("div",{style:{opacity:.7},children:"Haz una pregunta para comenzar…"}),r.map((y,v)=>t.jsx("div",{style:{display:"flex",justifyContent:y.role==="user"?"flex-end":"flex-start"},children:t.jsx("div",{style:{maxWidth:"80%",background:y.role==="user"?"rgba(34,211,238,0.12)":"rgba(148,163,184,0.12)",border:"1px solid rgba(148,163,184,0.25)",color:"#e2e8f0",padding:"8px 10px",borderRadius:12,whiteSpace:"pre-wrap"},children:y.content})},v))]}),t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("textarea",{className:"textarea",rows:3,placeholder:"Escribe tu mensaje (Enter para enviar)",value:i,onChange:y=>o(y.target.value),onKeyDown:h,disabled:s}),t.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>o(""),disabled:s,children:"Borrar"}),t.jsx("button",{type:"button",className:"btn btn-primary",onClick:m,disabled:!d,children:s?"Enviando…":"Enviar"})]})]})]})}function by({label:e,value:n,hint:r}){return t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"text-sm opacity-70",style:{fontSize:12,opacity:.8},children:e}),t.jsx("div",{className:"text-2xl font-semibold",style:{fontSize:28,fontWeight:700},children:n}),r&&t.jsx("div",{className:"text-xs opacity-60",style:{fontSize:12,opacity:.7},children:r})]})}function Bm({refreshKey:e=0}){const{user:n}=qe(),r=f.useMemo(()=>{var s,l,c,d;const a=Array.isArray(n==null?void 0:n.driveFolders)?n.driveFolders.filter(p=>p&&p.url):[],i=(l=(s=import.meta)==null?void 0:s.env)==null?void 0:l.VITE_DEFAULT_DRIVE_FOLDER_URL,o=((d=(c=import.meta)==null?void 0:c.env)==null?void 0:d.VITE_DEFAULT_DRIVE_FOLDER_NAME)||"Carpeta KOOP";return(!a||a.length===0)&&i?[{name:o,url:i}]:a},[n,e]);return t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Documentos recientes"}),r.length===0&&t.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin carpetas asignadas."}),r.length>0&&t.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:8},children:r.map((a,i)=>t.jsxs("li",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.name||"Carpeta de Drive"}),t.jsx("div",{className:"muted",style:{fontSize:12,opacity:.8},children:a.url})]}),t.jsx("a",{className:"btn btn-primary",href:a.url,target:"_blank",rel:"noreferrer","data-drive-folder-url":a.url,children:"Abrir carpeta"})]},(a.url||"")+i))})]})}function yy(e){if(!(e instanceof Date))return null;const n=e.getFullYear(),r=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${r}-${a}`}function wy(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`evt-${Date.now()}-${Math.random().toString(16).slice(2)}`}function jy(){const{user:e}=qe(),n=Lo((e==null?void 0:e.name)||"Dashboard"),[r,a]=f.useState(null),[i,o]=f.useState(!0),[s,l]=f.useState(null),[c,d]=f.useState(0),[p,m]=Fm(),[h,y]=f.useState(()=>new Date),v=f.useMemo(()=>yy(h),[h]),[w,j]=f.useState(""),[g,u]=f.useState(!0),[x,C]=f.useState(""),[N,R]=f.useState([]),[M,A]=f.useState(!1),[U,W]=f.useState(0),[ee,ne]=f.useState(!1),oe=f.useRef(null),[de,Ne]=f.useState([]),[ye,ae]=f.useState(!1),[B,Y]=f.useState(null),J=f.useMemo(()=>Array.isArray(p)?p.length:0,[p]);f.useEffect(()=>{(async()=>{var O;try{const{data:L}=await Ce.get("/kpis/overview");a(L)}catch(L){l(((O=L==null?void 0:L.response)==null?void 0:O.data)||(L==null?void 0:L.message))}finally{o(!1)}})()},[]),f.useEffect(()=>{let O=!1;return(async()=>{var L,X;try{ae(!0),Y(null);const xe=await Tc();if(O)return;const mn=Array.isArray(xe==null?void 0:xe.items)?xe.items:[];Ne(mn.map(ge=>({id:String((ge==null?void 0:ge.id)||(ge==null?void 0:ge._id)||(ge==null?void 0:ge.documentNumber)||"").trim(),name:(ge==null?void 0:ge.name)||(ge==null?void 0:ge.fullName)||(ge==null?void 0:ge.email)||"Cliente sin nombre",email:ge==null?void 0:ge.email})).filter(ge=>ge.id))}catch(xe){O||Y(((X=(L=xe==null?void 0:xe.response)==null?void 0:L.data)==null?void 0:X.message)||(xe==null?void 0:xe.message)||"No se pudo cargar clientes")}finally{O||ae(!1)}})(),()=>{O=!0}},[]),f.useEffect(()=>{if(!ee)return;const O=X=>{try{oe.current&&!oe.current.contains(X.target)&&ne(!1)}catch{}},L=X=>{X.key==="Escape"&&ne(!1)};return typeof window<"u"&&(window.addEventListener("click",O),window.addEventListener("keydown",L)),()=>{typeof window<"u"&&(window.removeEventListener("click",O),window.removeEventListener("keydown",L))}},[ee]);const V=f.useMemo(()=>{if(!x)return de;const O=x.trim().toLowerCase();return de.filter(L=>[L.id,L.name,L.email].some(X=>String(X||"").toLowerCase().includes(O)))},[de,x]),$=f.useMemo(()=>p.filter(L=>(L==null?void 0:L.date)===v).sort((L,X)=>(L.createdAt||"").localeCompare(X.createdAt||"")),[p,v]),ie=O=>{const L=String(O);R(X=>X.includes(L)?X.filter(xe=>xe!==L):[...X,L])},H=()=>{const O=w.trim();if(!v||!O||!g&&N.length===0)return;const L={id:wy(),date:v,note:O,audience:g?{type:"all"}:{type:"clients",clientIds:N.map(X=>String(X).trim())},createdAt:new Date().toISOString(),createdBy:(e==null?void 0:e.id)||(e==null?void 0:e.sub)||"admin"};m(X=>[...X,L]),j(""),R([]),u(!0),A(!1)},z={padding:"10px 14px",fontSize:"14px",minHeight:"52px",borderRadius:"10px",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},P=[{key:"clientes",label:"Clientes",to:"/admin/clientes-activos"},{key:"procesos",label:"Procesos",to:"/mis-casos"},{key:"publicaciones",label:"Publicaciones Procesales",href:"https://koop.com/publicaciones-procesales"}],k=f.useMemo(()=>h==null?void 0:h.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),[h]),D=O=>{y(O),typeof window<"u"&&window.innerWidth<1024&&A(!0)},G=()=>{if(!v||$.length===0)return;const O=`¿Borrar todas las anotaciones del ${k}?`;typeof window<"u"&&!window.confirm(O)||m(L=>L.filter(X=>(X==null?void 0:X.date)!==v))};return f.useEffect(()=>{if(!M){W(0);return}const O=()=>{try{const X=window.visualViewport;if(X){const xe=Math.max(0,Math.round(window.innerHeight-X.height));W(xe)}else W(0)}catch{W(0)}};O();const L=window.visualViewport;return L&&L.addEventListener("resize",O),window.addEventListener("resize",O),()=>{L&&L.removeEventListener("resize",O),window.removeEventListener("resize",O)}},[M]),t.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[t.jsxs("div",{className:"dash-card",style:{maxWidth:1200},children:[t.jsx("style",{children:`
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
        `}),t.jsxs("div",{className:"dash-header",children:[t.jsx("div",{className:"dash-title",children:n}),t.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"flex-end"},children:t.jsx(_m,{buttonClassName:"btn btn-primary",allowFolderInput:!0,onUploaded:()=>d(O=>O+1)})})]}),t.jsxs("div",{className:"dash-item",style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx(se,{className:"btn btn-primary",to:"/admin/tareas",title:"Ver y gestionar tareas",children:`Tareas: (${J})`}),t.jsx(se,{className:"btn btn-primary btn-sm",to:"/admin/clientes-activos",title:"Clientes",children:"Clientes"}),t.jsxs("div",{style:{position:"relative"},ref:oe,children:[t.jsx("button",{type:"button",className:"btn btn-orange btn-sm",onClick:()=>ne(O=>!O),"aria-haspopup":"menu","aria-expanded":ee?"true":"false",children:"Consultas"}),ee&&t.jsxs("div",{role:"menu",className:"quick-menu",style:{position:"absolute",top:"calc(100% + 6px)",right:0,zIndex:1010,background:"#0f172a",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.25)",borderRadius:12,boxShadow:"0 10px 24px rgba(0,0,0,0.45)",minWidth:320,padding:8},onClick:O=>O.stopPropagation(),children:[t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://consultaprocesos.ramajudicial.gov.co/Procesos/Index","_blank","noopener"),ne(!1)},role:"menuitem",children:"1. Consulta de procesos Rama Judicial"}),t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://publicacionesprocesales.ramajudicial.gov.co/","_blank","noopener"),ne(!1)},role:"menuitem",children:"2. Publicaciones Procesales Rama Judicial"}),t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://siugj.ramajudicial.gov.co/principalPortal/index.php","_blank","noopener"),ne(!1)},role:"menuitem",children:"3. Siugj"}),t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://consulta-web.fiscalia.gov.co/","_blank","noopener"),ne(!1)},role:"menuitem",children:"4. Consultas Fiscalía"}),t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start"},onClick:()=>{typeof window<"u"&&window.open("https://www.superfinanciera.gov.co/formulesuqueja/faces/consulta/jurisdiccional.xhtml","_blank","noopener"),ne(!1)},role:"menuitem",children:"5. Consultas Jurisdiccionales SuperFinanciera"})]})]}),t.jsx(se,{className:"btn btn-secondary btn-sm",to:"/admin/usuarios",title:"Administrar usuarios",children:"Administrar usuarios"})]}),t.jsx("div",{className:"kpi-grid",style:{marginTop:16},children:t.jsx(by,{label:"Casos activos",value:(de==null?void 0:de.length)??0})}),t.jsxs("div",{className:"admin-main-grid",style:{marginTop:16},children:[t.jsxs("div",{className:"admin-main-left",children:[t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Centro administrativo"}),t.jsx("p",{style:{marginBottom:12},children:"Supervisa la operacion del portal, gestiona usuarios y da seguimiento a la informacion mas reciente."}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx(se,{className:"btn btn-primary btn-sm",to:"/admin/usuarios",title:"Administrar usuarios",children:"Administrar usuarios"}),t.jsx(se,{className:"btn btn-secondary btn-sm",to:"/mi-expediente",title:"Revisar expedientes",children:"Revisar expedientes"})]})]}),t.jsx(Mm,{value:h,onChange:D,events:p}),t.jsx("div",{style:{display:"grid",gap:10},children:P.map(O=>t.jsx("div",{className:"dash-item",style:{padding:0,display:"flex",alignItems:"stretch"},children:O.to?t.jsx(se,{className:"btn btn-primary",to:O.to,style:z,children:O.label}):t.jsx("button",{type:"button",className:"btn btn-primary",style:z,onClick:()=>{typeof window<"u"&&O.href&&window.open(O.href,"_blank","noopener")},children:O.label})},O.key))})]}),t.jsxs("div",{className:"admin-main-right",children:[t.jsx(vy,{title:"Asistente IA",systemPrompt:"Eres un asistente interno de Koop Strategic Advisory. Responde de forma breve, clara y profesional."}),t.jsxs("div",{className:"dash-item compose-panel",children:[t.jsx("div",{className:"font-semibold",style:{fontWeight:600},children:k||"Selecciona un dia"}),t.jsx("p",{style:{marginTop:4,fontSize:13,opacity:.8},children:"Registra recordatorios o publicaciones para clientes especificos o para todos."}),t.jsx("textarea",{value:w,onChange:O=>j(O.target.value),placeholder:"Agregar nota o detalle del evento",rows:4,style:{width:"100%",marginTop:12,background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:"10px 12px",resize:"vertical"}}),t.jsx("div",{style:{marginTop:12},children:t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("input",{type:"checkbox",checked:g,onChange:O=>{u(O.target.checked),O.target.checked&&R([])}}),t.jsx("span",{children:"Publicar para todos los clientes"})]})}),!g&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("input",{type:"search",placeholder:"Buscar por nombre, email o ID",value:x,onChange:O=>C(O.target.value),style:{width:"100%",padding:"8px 12px",borderRadius:10,border:"1px solid rgba(148,163,184,0.35)",background:"#1b263b",color:"#e2e8f0"}}),B&&t.jsx("div",{style:{color:"#fecaca",background:"#7f1d1d",padding:8,borderRadius:8,marginTop:8},children:B}),t.jsxs("div",{className:"admin-clients-list",style:{marginTop:8},children:[ye&&t.jsx("div",{style:{opacity:.7},children:"Cargando clientes..."}),!ye&&V.length===0&&t.jsx("div",{style:{opacity:.7},children:"No se encontraron clientes"}),V.map(O=>{const L=N.includes(O.id);return t.jsxs("label",{className:"admin-clients-item",children:[t.jsxs("span",{style:{display:"flex",flexDirection:"column"},children:[t.jsx("span",{style:{fontWeight:600},children:O.name}),t.jsx("span",{style:{fontSize:12,opacity:.75},children:O.id})]}),t.jsx("input",{type:"checkbox",checked:L,onChange:()=>ie(O.id)})]},O.id)})]}),N.length>0&&t.jsxs("div",{style:{marginTop:8,fontSize:12,opacity:.7},children:["Seleccionados: ",N.join(", ")]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:12},children:[t.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{j(""),u(!0),R([])},children:"Limpiar"}),t.jsx("button",{type:"button",className:"btn btn-danger",onClick:G,disabled:!v||$.length===0,children:"Borrar anotaciones"}),t.jsx("button",{type:"button",className:"btn btn-primary",onClick:H,disabled:!w.trim()||!g&&N.length===0,children:"Guardar anotacion"})]}),$.length>0&&t.jsxs("div",{style:{marginTop:16},children:[t.jsx("div",{style:{fontWeight:600,marginBottom:8},children:"Anotaciones del dia"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:$.map(O=>{var L,X;return t.jsxs("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:[t.jsx("div",{style:{marginBottom:6},children:O.note}),t.jsx("div",{style:{fontSize:12,opacity:.7},children:((L=O.audience)==null?void 0:L.type)==="all"?"Visible para todos los clientes":`Visible para: ${Array.isArray((X=O.audience)==null?void 0:X.clientIds)&&O.audience.clientIds.length>0?O.audience.clientIds.join(", "):"—"}`})]},O.id)})})]})]}),t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Recordatorios del equipo"}),t.jsx("p",{style:{marginBottom:0},children:"Comparte novedades internas, carga reportes de gestion o establece tareas prioritarias para tu equipo desde esta seccion."})]}),t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Reproductor Spotify"}),t.jsx("p",{style:{marginBottom:0,fontSize:13,opacity:.8},children:"El reproductor de Spotify está disponible como ventana flotante en la esquina inferior izquierda. La música continuará reproduciéndose mientras navegas entre páginas."})]})]})]}),t.jsx("div",{style:{marginTop:16},children:t.jsx(Bm,{refreshKey:c})}),s&&t.jsx("pre",{className:"text-red-600 text-sm mt-2",style:{color:"#fecaca",background:"#7f1d1d",padding:12,borderRadius:8,marginTop:12},children:typeof s=="string"?s:JSON.stringify(s,null,2)})]}),M&&t.jsx("div",{className:"compose-overlay",role:"dialog","aria-modal":"true",children:t.jsxs("div",{className:"compose-modal",style:{marginBottom:U>0?U:0,maxHeight:`calc(100dvh - ${U}px)`,paddingBottom:"calc(16px + env(safe-area-inset-bottom))"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[t.jsx("div",{style:{fontWeight:700},children:k||"Selecciona un dia"}),t.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>A(!1),"aria-label":"Cerrar",children:"Cerrar"})]}),t.jsxs("div",{className:"dash-item",style:{padding:0},children:[t.jsx("p",{style:{marginTop:4,fontSize:13,opacity:.8},children:"Registra recordatorios o publicaciones para clientes especificos o para todos."}),t.jsx("textarea",{value:w,onChange:O=>j(O.target.value),placeholder:"Agregar nota o detalle del evento",rows:4,style:{width:"100%",marginTop:12,background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:"10px 12px",resize:"vertical"}}),t.jsx("div",{style:{marginTop:12},children:t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("input",{type:"checkbox",checked:g,onChange:O=>{u(O.target.checked),O.target.checked&&R([])}}),t.jsx("span",{children:"Publicar para todos los clientes"})]})}),!g&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("input",{type:"search",placeholder:"Buscar por nombre, email o ID",value:x,onChange:O=>C(O.target.value),style:{width:"100%",padding:"8px 12px",borderRadius:10,border:"1px solid rgba(148,163,184,0.35)",background:"#1b263b",color:"#e2e8f0"}}),B&&t.jsx("div",{style:{color:"#fecaca",background:"#7f1d1d",padding:8,borderRadius:8,marginTop:8},children:B}),t.jsxs("div",{className:"admin-clients-list",style:{marginTop:8},children:[ye&&t.jsx("div",{style:{opacity:.7},children:"Cargando clientes..."}),!ye&&V.length===0&&t.jsx("div",{style:{opacity:.7},children:"No se encontraron clientes"}),V.map(O=>{const L=N.includes(O.id);return t.jsxs("label",{className:"admin-clients-item",children:[t.jsxs("span",{style:{display:"flex",flexDirection:"column"},children:[t.jsx("span",{style:{fontWeight:600},children:O.name}),t.jsx("span",{style:{fontSize:12,opacity:.75},children:O.id})]}),t.jsx("input",{type:"checkbox",checked:L,onChange:()=>ie(O.id)})]},O.id)})]}),N.length>0&&t.jsxs("div",{style:{marginTop:8,fontSize:12,opacity:.7},children:["Seleccionados: ",N.join(", ")]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:12},children:[t.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{j(""),u(!0),R([])},children:"Limpiar"}),t.jsx("button",{type:"button",className:"btn btn-danger",onClick:G,disabled:!v||$.length===0,children:"Borrar anotaciones"}),t.jsx("button",{type:"button",className:"btn btn-primary",onClick:H,disabled:!w.trim()||!g&&N.length===0,children:"Guardar anotacion"})]}),$.length>0&&t.jsxs("div",{style:{marginTop:16},children:[t.jsx("div",{style:{fontWeight:600,marginBottom:8},children:"Anotaciones del dia"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:$.map(O=>{var L,X;return t.jsxs("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:[t.jsx("div",{style:{marginBottom:6},children:O.note}),t.jsx("div",{style:{fontSize:12,opacity:.7},children:((L=O.audience)==null?void 0:L.type)==="all"?"Visible para todos los clientes":`Visible para: ${Array.isArray((X=O.audience)==null?void 0:X.clientIds)&&O.audience.clientIds.length>0?O.audience.clientIds.join(", "):"-"}`})]},O.id)})})]})]})]})})]})}function ky({src:e,heightDesktop:n=560,heightMobile:r=480,className:a}){const[i,o]=f.useState(!1),[s,l]=f.useState(!1),c=f.useRef(null);f.useEffect(()=>{try{const w=window.matchMedia("(max-width: 768px)"),j=g=>{o(g.matches),g.matches&&l(!1)};return o(w.matches),w.matches&&l(!1),w.addEventListener?w.addEventListener("change",j):w.addListener&&w.addListener(j),()=>{w.removeEventListener?w.removeEventListener("change",j):w.removeListener&&w.removeListener(j)}}catch{o(!1)}},[]),f.useEffect(()=>{if(!s){c.current!==null&&(document.body.style.overflow=c.current,c.current=null);return}return c.current===null&&(c.current=document.body.style.overflow||""),document.body.style.overflow="hidden",()=>{c.current!==null?(document.body.style.overflow=c.current,c.current=null):document.body.style.overflow=""}},[s]);const d=f.useMemo(()=>{try{return new URL(e,window.location.origin).toString()}catch{return e}},[e]),p=()=>l(w=>!w),m=["Te compartimos que ya tienes acceso a nuestro Portal de Clientes Koop.","","Desde alli podras:","- Consultar el estado de tus procesos en tiempo real.","- Descargar documentos relevantes de manera segura.","- Recibir notificaciones de audiencias y plazos importantes.","- Comunicarte directamente con nuestro equipo para resolver cualquier inquietud.","","Estamos seguros de que esta alianza marcara un camino de crecimiento y tranquilidad."].join(`
`);if(i)return t.jsxs("div",{className:a,style:{width:"100%",height:r,display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{padding:16},children:[t.jsx("div",{style:{fontWeight:700,marginBottom:8},children:"Gracias por elegirnos. Nos alegra iniciar este camino contigo."}),t.jsx("div",{className:"muted",style:{marginBottom:12,whiteSpace:"pre-line"},children:m})]}),t.jsx("div",{style:{marginTop:"auto",padding:16,display:"flex",justifyContent:"flex-end"},children:t.jsx("a",{className:"btn btn-primary",href:d,target:"_blank",rel:"noopener noreferrer",children:"Cordial saludo"})})]});const h=s?{position:"fixed",inset:0,zIndex:1e3,backgroundColor:"rgba(6, 11, 25, 0.92)",padding:"48px 64px",display:"flex",flexDirection:"column",gap:16}:{width:"100%",height:n,position:"relative"},y=s?{flex:1,position:"relative",borderRadius:16,overflow:"hidden",boxShadow:"0 24px 48px rgba(0,0,0,0.45)"}:{width:"100%",height:"100%",position:"relative",borderRadius:12,overflow:"hidden"},v={position:"absolute",top:s?24:12,right:s?24:12,zIndex:1001};return t.jsxs("div",{className:a,style:h,children:[t.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:p,style:v,children:s?"Minimizar":"Maximizar"}),t.jsx("div",{style:y,children:t.jsxs("object",{data:e,type:"application/pdf",width:"100%",height:"100%",style:{width:"100%",height:"100%"},children:[t.jsx("iframe",{title:"PDF",src:d,style:{width:"100%",height:"100%",border:0}}),t.jsxs("div",{style:{padding:16},children:["No se pudo mostrar el PDF. ",t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:"Abrir en nueva pestana"})]})]})})]})}function Cy(){return t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Mensajes no leídos"}),t.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin datos."})]})}function Sy(e){if(!(e instanceof Date))return null;const n=e.getFullYear(),r=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${r}-${a}`}function Ey(){const{user:e}=qe(),n=Lo((e==null?void 0:e.name)||"Bienvenido"),[r,a]=f.useState(0),[i]=Fm(),[o,s]=f.useState(()=>new Date),l=f.useMemo(()=>{const y=[e==null?void 0:e.id,e==null?void 0:e.sub,e==null?void 0:e._id,e==null?void 0:e.documentNumber,e==null?void 0:e.document_number,e==null?void 0:e.documento,e==null?void 0:e.clienteId].map(v=>v==null?"":String(v).trim()).filter(v=>!!v);return Array.from(new Set(y))},[e]),c=f.useMemo(()=>Sy(o),[o]),d=f.useMemo(()=>l.length?i.filter(h=>{var y,v,w;return((y=h==null?void 0:h.audience)==null?void 0:y.type)==="all"?!0:((v=h==null?void 0:h.audience)==null?void 0:v.type)==="clients"?(Array.isArray((w=h.audience)==null?void 0:w.clientIds)?h.audience.clientIds.map(g=>g==null?"":String(g).trim()).filter(g=>!!g):[]).some(g=>l.includes(g)):!1}):i.filter(h=>{var y;return((y=h==null?void 0:h.audience)==null?void 0:y.type)==="all"}),[i,l]),p=f.useMemo(()=>d.filter(h=>(h==null?void 0:h.date)===c),[d,c]),m=f.useMemo(()=>o==null?void 0:o.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),[o]);return t.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:1080},children:[t.jsx("style",{children:`
          .user-main-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
          @media (min-width: 1024px) { .user-main-grid { grid-template-columns: 2fr 1fr; } }
          .user-main-left { display: flex; flex-direction: column; gap: 16px; }
          .user-main-right { display: flex; flex-direction: column; gap: 16px; }
        `}),t.jsxs("div",{className:"dash-header",children:[t.jsx("div",{className:"dash-title",children:n}),t.jsx(_m,{buttonClassName:"btn btn-primary",allowFolderInput:!1,onUploaded:()=>a(h=>h+1)})]}),t.jsxs("div",{className:"user-main-grid",children:[t.jsxs("div",{className:"user-main-left",children:[t.jsxs("div",{className:"dash-item",children:[t.jsx("p",{style:{marginBottom:8},children:"Aqui puedes revisar tu material mas reciente y mantenerte al dia con tu caso. Si necesitas asistencia adicional, nuestro equipo esta disponible para ayudarte."}),t.jsx(se,{className:"btn btn-primary btn-sm",to:"/mis-casos",children:"Ver mis casos"})]}),t.jsx("div",{className:"dash-item",style:{padding:0},children:t.jsx(ky,{src:"/Saludobienvenidaportal.pdf",heightDesktop:480,heightMobile:420})}),t.jsx(Cy,{}),t.jsx(Bm,{refreshKey:r})]}),t.jsxs("div",{className:"user-main-right",children:[t.jsx(Mm,{value:o,onChange:s,events:d}),t.jsxs("div",{className:"dash-item",children:[t.jsx("div",{style:{fontWeight:600,marginBottom:8},children:m}),p.length===0&&t.jsx("p",{style:{margin:0,opacity:.7,fontSize:14},children:"No hay anotaciones programadas para este dia."}),p.length>0&&t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:p.map(h=>t.jsx("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:t.jsx("div",{children:h.note})},h.id))})]})]})]})]})})}function Tp(){return t.jsx("div",{className:"dash-page",style:{background:"linear-gradient(rgba(24,31,56,0.9), rgba(15,23,42,0.95))",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",padding:24},children:t.jsxs("div",{className:"dash-card",style:{maxWidth:520},children:[t.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),t.jsx("p",{style:{marginTop:12},children:"Tu cuenta no tiene un rol asignado para ingresar al portal. Comunicate con el administrador para solicitar acceso."})]})})}function zp(e,n){if(!(e!=null&&e.roles))return!1;const r=Array.isArray(e.roles)?e.roles:[e.roles],a=String(n||"").toLowerCase();return r.some(i=>String(i||"").toLowerCase()===a)}function Ny(){const{user:e,loading:n}=qe(),r=f.useMemo(()=>e?zp(e,"admin")?"admin":zp(e,"user")?"user":"no-access":"none",[e]);return n&&!e?null:r==="admin"?t.jsx(jy,{}):r==="user"?t.jsx(Ey,{}):r==="no-access"?t.jsx(Tp,{}):t.jsx(Tp,{})}const Ay=[{id:"CJ-001",titulo:"Acción de tutela — derecho a la salud",estado:"En curso",juzgado:"Juzgado 12 Municipal",fecha:"2025-07-10"},{id:"CJ-002",titulo:"Proceso laboral — despido sin justa causa",estado:"Audiencia programada",juzgado:"Juzgado 3 Laboral del Circuito",fecha:"2025-08-02"},{id:"CJ-003",titulo:"Responsabilidad fiscal — recursos",estado:"Recurso interpuesto",juzgado:"Contraloría Distrital",fecha:"2025-08-21"},{id:"CJ-004",titulo:"Proceso de alimentos — fijación de cuota",estado:"Admitido",juzgado:"Juzgado 5 de Familia",fecha:"2025-09-01"}];function Iy(){const[e,n]=f.useState(null);f.useEffect(()=>{if(!e)return;const i=o=>{o.key==="Escape"&&n(null)};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[e]);const r=f.useMemo(()=>["Reunión de documentos e investigación","En escrito de demanda","En radicación","Al despacho: en espera de decisión del juez"],[]),a=i=>{if(!i)return 1;const o=String(i).toLowerCase();return/(reun|investig)/.test(o)?1:/(escrito|demanda)/.test(o)?2:/(radicaci[óo]n|admitid)/.test(o)?3:/(despacho|juez|decisi[óo]n|audiencia|recurso)/.test(o)?4:(/curso/.test(o),2)};return t.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[t.jsxs("div",{className:"dash-card",style:{maxWidth:900},children:[t.jsx("div",{className:"dash-header",children:t.jsx("div",{className:"dash-title",children:"Mis casos"})}),t.jsx("div",{className:"dash-item",style:{padding:0},children:t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cases-table",style:{width:"100%",borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{background:"#1e2a3a"},children:[t.jsx("th",{style:oa,children:"Radicado"}),t.jsx("th",{style:oa,children:"Título"}),t.jsx("th",{style:oa,children:"Estado"}),t.jsx("th",{style:oa,children:"Despacho"}),t.jsx("th",{style:oa,children:"Última actuación"})]})}),t.jsx("tbody",{children:Ay.map(i=>t.jsxs("tr",{onClick:()=>n(i),className:"row-clickable",children:[t.jsx("td",{style:sa,children:i.id}),t.jsx("td",{style:sa,children:i.titulo}),t.jsx("td",{style:sa,children:t.jsx("span",{className:"badge",style:Rp(i.estado),children:i.estado})}),t.jsx("td",{style:sa,children:i.juzgado}),t.jsx("td",{style:sa,children:new Date(i.fecha).toLocaleDateString()})]},i.id))})]})})})]}),e&&t.jsx("div",{className:"modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"caso-title",onClick:i=>{i.target===i.currentTarget&&n(null)},children:t.jsxs("div",{className:"modal-card",children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("div",{className:"modal-title",id:"caso-title",children:e.titulo}),t.jsx("button",{className:"btn btn-primary",onClick:()=>n(null),children:"Cerrar"})]}),t.jsxs("div",{className:"modal-body",children:[t.jsxs("div",{className:"case-grid",children:[t.jsxs("div",{children:[t.jsx("div",{className:"muted",children:"Radicado"}),t.jsx("div",{children:e.id})]}),t.jsxs("div",{children:[t.jsx("div",{className:"muted",children:"Estado"}),t.jsx("div",{children:t.jsx("span",{className:"badge",style:Rp(e.estado),children:e.estado})})]}),t.jsxs("div",{children:[t.jsx("div",{className:"muted",children:"Despacho"}),t.jsx("div",{children:e.juzgado})]}),t.jsxs("div",{children:[t.jsx("div",{className:"muted",children:"Última actuación"}),t.jsx("div",{children:new Date(e.fecha).toLocaleString()})]})]}),t.jsx("div",{className:"timeline",children:r.map((i,o)=>{const s=o+1,l=a(e.estado),c=s<l,d=s===l;return t.jsxs("div",{className:`timeline-step ${c?"done":""} ${d?"active":""}`,children:[t.jsx("div",{className:`dot ${c?"done":""} ${d?"active":""}`}),s<r.length&&t.jsx("div",{className:`bar ${s<l?"done":""}`}),t.jsxs("div",{className:"label",children:[s,". ",i]})]},s)})})]})]})})]})}const oa={textAlign:"left",padding:"12px 14px",borderBottom:"1px solid #394b61",fontWeight:600,color:"#e2e8f0",whiteSpace:"nowrap"},sa={padding:"12px 14px",borderBottom:"1px solid #34465a",color:"#e5edf7",verticalAlign:"top"};function Rp(e){let n="#3b82f6";return/curso/i.test(e)&&(n="#f59e0b"),/programada|programado/i.test(e)&&(n="#10b981"),/recurso/i.test(e)&&(n="#8b5cf6"),{display:"inline-block",padding:"4px 8px",borderRadius:8,background:n,color:"#fff",fontSize:12,fontWeight:600}}function Ty(){var a,i;const{logout:e}=qe(),n=$n();f.useEffect(()=>{(async()=>{try{await e()}catch{}try{sessionStorage.removeItem("koop_hasVisited")}catch{}try{document.documentElement.classList.remove("skip-splash")}catch{}})()},[e]);const r=(i=(a=n.state)==null?void 0:a.from)==null?void 0:i.pathname;return t.jsx(We,{to:"/",replace:!0,state:{from:r}})}function zy(){const e=Wr(),[n]=Mx(),{user:r}=qe();f.useEffect(()=>{const i=n.get("code"),o=n.get("error");if(o){console.error("Spotify authorization error:",o),e("/dashboard");return}i?a(i):e("/dashboard")},[n,e]);const a=async i=>{try{if(console.log("🔄 Iniciando intercambio de código por token:",{code:(i==null?void 0:i.substring(0,10))+"...",user:!!r}),!r){console.error("❌ Usuario no autenticado"),e("/login");return}console.log("📤 Enviando petición al backend...");const o=localStorage.getItem("accessToken");console.log("🔑 Token disponible:",!!o,(o==null?void 0:o.substring(0,20))+"..."),console.log("📋 Headers que se enviarán:",{Authorization:`Bearer ${o==null?void 0:o.substring(0,20)}...`}),console.log("📡 Enviando petición POST a /spotify/auth/token...");const s=await Ce.post("/spotify/auth/token",{code:i},{headers:{Authorization:`Bearer ${o}`}});if(console.log("✅ Respuesta recibida:",s.status,s.data),s.status===200){const{access_token:l,refresh_token:c,expires_in:d}=s.data;localStorage.setItem("spotifyAccessToken",l),localStorage.setItem("spotifyRefreshToken",c),localStorage.setItem("spotifyTokenExpiry",Date.now()+d*1e3),console.log("💾 Tokens de Spotify guardados en localStorage"),e("/dashboard")}else console.error("Error exchanging code for token"),e("/dashboard")}catch(o){console.error("Error exchanging code for token:",o),e("/dashboard")}};return t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#191414"},children:[t.jsxs("div",{style:{textAlign:"center",color:"#1db954"},children:[t.jsx("div",{style:{fontSize:"24px",marginBottom:"16px"},children:"Conectando con Spotify..."}),t.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid #1db954",borderTop:"4px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto"}})]}),t.jsx("style",{children:`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]})}function vr({children:e}){const{isAuthenticated:n}=qe(),r=$n();return n?e:t.jsx(We,{to:"/login",replace:!0,state:{from:r}})}function Ry(){const{isAuthenticated:e,user:n,logout:r}=qe(),i=(Array.isArray(n==null?void 0:n.roles)?n.roles:n!=null&&n.roles?[n.roles]:[]).map(y=>String(y||"").trim().toLowerCase()).includes("admin"),[o,s]=f.useState(!1),[l,c]=f.useState(!1),[d,p]=f.useState(!1);Wr();const m=()=>{c(y=>{const v=!y;return v||p(!1),v})},h=y=>{const v=y.target.closest("a");v&&!v.classList.contains("drop-btn")&&(c(!1),p(!1))};return t.jsx("nav",{className:"navbar",children:t.jsxs("div",{className:"navbar-content",children:[t.jsxs(se,{to:"/",className:"logo",children:[t.jsx("img",{src:"/Koop Logo.png",alt:"Logo Koop",className:"logo-img"}),t.jsx("div",{className:"logo-text",children:"KOOP STRATEGIC ADVISORY"})]}),t.jsxs("div",{className:"menu-toggle",id:"menu-toggle",onClick:m,"aria-controls":"nav-menu","aria-expanded":l?"true":"false",role:"button",children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]}),t.jsxs("div",{className:`nav-menu ${l?"open":""}`,id:"nav-menu",onClick:h,"data-auth":e?"1":"0",children:[t.jsxs("div",{className:"main-links",children:[t.jsx(se,{to:"/#inicio",children:"INICIO"}),t.jsxs("div",{className:`dropdown ${d?"open":""}`,children:[t.jsx(se,{to:"/#areas",className:"drop-btn",id:"areas-toggle","aria-expanded":d?"true":"false",onClick:y=>{y.preventDefault(),p(v=>!v)},children:"ÁREAS DE PRÁCTICA"}),t.jsxs("div",{className:"dropdown-content",children:[t.jsxs("div",{className:"dropdown-group",children:[t.jsx(se,{to:"/derecho",className:"dropdown-title",children:"Derecho"}),t.jsx(se,{to:"/derecho-laboral",children:"Derecho Laboral"}),t.jsx(se,{to:"/derecho-penal",children:"Derecho Penal"}),t.jsx(se,{to:"/tramites-notariales",children:"Trámites notariales"}),t.jsx(se,{to:"/derecho-administrativo",children:"Derecho Administrativo"}),t.jsx(se,{to:"/derecho-familia",children:"Derecho de Familia"}),t.jsx(se,{to:"/contratacion-publica",children:"Contratación Pública"}),t.jsx(se,{to:"/resolucion-disputas",children:"Resolución de Disputas"}),t.jsx(se,{to:"/acciones-de-tutela",children:"Acciones de Tutela"}),t.jsx(se,{to:"/insolvencia",children:"Insolvencia"})]}),t.jsxs("div",{className:"dropdown-group",children:[t.jsx(se,{to:"/contabilidad",className:"dropdown-title",children:"Contabilidad"}),t.jsx(se,{to:"/auditoria",children:"Auditoría"}),t.jsx(se,{to:"/impuestos",children:"Impuestos"}),t.jsx(se,{to:"/asesoria-contable",children:"Asesoría Contable"})]})]})]}),!e&&t.jsx(se,{to:"/#vision",children:"NUESTRA VISIÓN"})]}),e?t.jsxs("div",{className:`dropdown ${o?"open":""}`,children:[t.jsx("button",{className:"drop-btn","aria-haspopup":"true","aria-expanded":o?"true":"false",onClick:()=>s(y=>!y),children:Lo((n==null?void 0:n.name)||"Mi cuenta")}),t.jsx("div",{className:"dropdown-content",children:t.jsxs("div",{className:"dropdown-group",children:[t.jsx(se,{to:"/dashboard",children:"Perfil"}),i&&t.jsx(se,{to:"/admin/clientes-activos",children:"Clientes"}),i&&t.jsx(se,{to:"/admin/usuarios",children:"Usuarios"}),t.jsx(se,{to:"/mi-expediente",children:i?"Mis expedientes":"Mi expediente"}),i&&t.jsx(se,{to:"/admin/tareas",children:"Tareas"}),t.jsx(se,{to:"/mis-casos",children:"Mis casos"}),t.jsx(se,{to:"/logout",children:"Cerrar sesión"})]})})]}):t.jsx(se,{to:"/login",className:"koop-cta","aria-label":"CLIENTE KOOP",translate:"no",children:"CLIENTE KOOP".split("").map((y,v)=>t.jsx("span",{className:"letter",style:{"--i":v},children:y===" "?" ":y},v))})]})]})})}function Oy({base:e="'Montserrat', Arial, sans-serif",heading:n,accent:r,children:a}){return f.useEffect(()=>{const i=document.documentElement;e&&i.style.setProperty("--ff-base",e),n&&i.style.setProperty("--ff-heading",n),r&&i.style.setProperty("--ff-accent",r)},[e,n,r]),a||null}function Dy(){var H;const{user:e}=qe(),[n,r]=f.useState(!1),[a,i]=f.useState(null),[o,s]=f.useState(!1),[l,c]=f.useState([]),[d,p]=f.useState(!1),[m,h]=f.useState({x:window.innerWidth-80,y:window.innerHeight-80}),[y,v]=f.useState(!1),[w,j]=f.useState({x:0,y:0}),[g,u]=f.useState(!1),[x,C]=f.useState({x:0,y:0}),[N,R]=f.useState(!1),[M,A]=f.useState(!1),[U,W]=f.useState("1Zf1rz0XX6fyNxKOq4XvgN"),ee=f.useRef(null),ne=f.useRef(null),oe=(H=e==null?void 0:e.roles)==null?void 0:H.includes("admin");f.useEffect(()=>{const z=localStorage.getItem("spotifyWidgetPosition");z&&h(JSON.parse(z));const P=localStorage.getItem("spotifyWidgetExpanded");P&&s(JSON.parse(P));const k=localStorage.getItem("spotifyWidgetMinimized");k&&R(JSON.parse(k));const D=localStorage.getItem("spotifyCurrentPlaylistId");D&&W(D)},[]),f.useEffect(()=>{localStorage.setItem("spotifyWidgetPosition",JSON.stringify(m))},[m]),f.useEffect(()=>{localStorage.setItem("spotifyWidgetExpanded",JSON.stringify(o))},[o]),f.useEffect(()=>{localStorage.setItem("spotifyWidgetMinimized",JSON.stringify(N))},[N]),f.useEffect(()=>{localStorage.setItem("spotifyCurrentPlaylistId",U)},[U]),f.useEffect(()=>{if(oe){de();const z=()=>{de()};return window.addEventListener("focus",z),()=>{window.removeEventListener("focus",z)}}},[oe]);const de=async()=>{try{const z=localStorage.getItem("spotifyAccessToken"),P=localStorage.getItem("spotifyTokenExpiry");if(z&&P&&Date.now()<parseInt(P)){console.log("🎵 Usando tokens de Spotify del localStorage");const k=await fetch("https://api.spotify.com/v1/me",{headers:{Authorization:`Bearer ${z}`}});if(k.ok){const D=await k.json();i(D),r(!0),console.log("✅ Usuario de Spotify autenticado:",D.display_name),await Ne(z)}else throw new Error("Token de Spotify inválido")}else{const k=await Ce.get("/spotify/me");i(k.data),r(!0)}}catch{console.log("No hay sesión de Spotify activa"),r(!1),i(null)}},Ne=async z=>{try{const P=await fetch("https://api.spotify.com/v1/me/playlists?limit=20",{headers:{Authorization:`Bearer ${z}`}});if(P.ok){const k=await P.json();c(k.items),console.log("📋 Playlists cargadas:",k.items.length)}}catch(P){console.error("Error cargando playlists:",P)}},ye=async()=>{try{const z=await Ce.get("/spotify/auth/url");window.location.href=z.data.authUrl}catch(z){console.error("Error getting auth URL:",z)}},ae=z=>{const P=z.type==="mousedown"?z.clientX:z.touches[0].clientX,k=z.type==="mousedown"?z.clientY:z.touches[0].clientY;v(!0),u(!1),C({x:P,y:k}),j({x:P-m.x,y:k-m.y})},B=z=>{if(!y)return;const P=z.type==="mousemove"?z.clientX:z.touches[0].clientX,k=z.type==="mousemove"?z.clientY:z.touches[0].clientY,D=P-w.x,G=k-w.y,O=Math.abs(P-x.x),L=Math.abs(k-x.y);(O>5||L>5)&&u(!0);const X=10,xe=window.innerWidth-(o?300:60)-X,mn=window.innerHeight-(o?350:60)-X;h({x:Math.max(X,Math.min(D,xe)),y:Math.max(X,Math.min(G,mn))})},Y=()=>{v(!1)};f.useEffect(()=>(y&&(document.addEventListener("mousemove",B),document.addEventListener("mouseup",Y),document.addEventListener("touchmove",B),document.addEventListener("touchend",Y)),()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",Y),document.removeEventListener("touchmove",B),document.removeEventListener("touchend",Y)}),[y,w,x]),f.useEffect(()=>{const z=P=>{ee.current&&!ee.current.contains(P.target)&&o&&(s(!1),R(!0))};return o&&(document.addEventListener("mousedown",z),document.addEventListener("touchstart",z)),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z)}},[o]),f.useEffect(()=>{const z=P=>{P.origin==="https://open.spotify.com"&&(P.data&&P.data.type==="playback_started"?A(!0):P.data&&P.data.type==="playback_paused"&&A(!1))};return window.addEventListener("message",z),()=>window.removeEventListener("message",z)},[]);const J=z=>{W(z),ne.current&&(ne.current.src=`https://open.spotify.com/embed/playlist/${z}?utm_source=generator&theme=0`),p(!1)};if(!oe)return null;const V=()=>{const z=window.innerWidth-m.x,P=window.innerHeight-m.y;return z<300&&P<350?"top-left":z<300?"left":P<350?"top":"default"},ie=o?(()=>{const z=V(),P=10;switch(z){case"top-left":return{x:Math.max(P,m.x-240),y:Math.max(P,m.y-290)};case"left":return{x:Math.max(P,m.x-240),y:m.y};case"top":return{x:m.x,y:Math.max(P,m.y-290)};default:return m}})():m;return t.jsxs(t.Fragment,{children:[n&&t.jsx("iframe",{ref:ne,src:`https://open.spotify.com/embed/playlist/${U}?utm_source=generator&theme=0`,width:o?"100%":"1",height:o?"220":"1",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",style:{position:"fixed",top:o?`${ie.y+60}px`:"-1000px",left:o?`${ie.x+12}px`:"-1000px",opacity:o?1:0,pointerEvents:o?"auto":"none",zIndex:o?1001:-1,borderRadius:o?"6px":"0",border:o?"1px solid rgba(255, 255, 255, 0.1)":"none",backgroundColor:o?"rgba(40, 40, 40, 0.8)":"transparent",width:o?"276px":"1px",height:o?"220px":"1px"}}),t.jsxs("div",{ref:ee,style:{position:"fixed",left:ie.x,top:ie.y,zIndex:1e3,width:o?"300px":"60px",height:o?"350px":"60px",backgroundColor:"rgba(15, 23, 42, 0.95)",backdropFilter:"blur(10px)",border:"1px solid rgba(148, 163, 184, 0.2)",borderRadius:"12px",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.3)",transition:y?"none":"all 0.3s ease",cursor:y?"grabbing":"grab",touchAction:"none",userSelect:"none",pointerEvents:y?"none":"auto"},onMouseDown:ae,onTouchStart:ae,children:[!o&&t.jsxs("div",{onClick:z=>{z.stopPropagation(),g||(s(!0),R(!1))},style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"transform 0.2s ease",pointerEvents:"auto"},onMouseEnter:z=>{y||(z.target.style.transform="scale(1.1)")},onMouseLeave:z=>{y||(z.target.style.transform="scale(1)")},children:[t.jsx("span",{style:{fontSize:"24px",color:N&&n?"#1db954":"#fc771c",fontWeight:"bold"},children:"♪"}),N&&n&&t.jsx("div",{style:{position:"absolute",top:"5px",right:"5px",width:"8px",height:"8px",backgroundColor:M?"#1db954":"#ff6b6b",borderRadius:"50%",animation:M?"pulse 2s infinite":"none"}})]}),o&&t.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between",pointerEvents:"auto"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px",padding:"8px 0"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("h4",{style:{color:"#1db954",margin:0,fontSize:"14px",fontWeight:"bold"},children:"Spotify"}),n&&t.jsx("p",{style:{color:"#94a3b8",margin:0,fontSize:"11px"},children:a==null?void 0:a.display_name})]}),t.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[n&&t.jsx("button",{onClick:()=>p(!d),style:{background:d?"#1db954":"rgba(255, 255, 255, 0.1)",border:"none",color:"white",fontSize:"11px",fontWeight:"bold",cursor:"pointer",padding:"4px 8px",borderRadius:"12px",transition:"all 0.2s ease"},children:"📋"}),!n&&t.jsx("button",{onClick:ye,style:{background:"#fc771c",border:"none",color:"#fff",fontSize:"12px",fontWeight:"bold",cursor:"pointer",padding:"6px 12px",borderRadius:"15px",transition:"all 0.2s ease"},onMouseEnter:z=>{z.target.style.background="#f97316",z.target.style.transform="scale(1.05)"},onMouseLeave:z=>{z.target.style.background="#fc771c",z.target.style.transform="scale(1)"},children:"Conectar"}),t.jsx("button",{onClick:z=>{z.stopPropagation(),s(!1),R(!0);const P=10,k=60,D=window.innerWidth-k-P,G=window.innerHeight-k-P;h(O=>({x:Math.max(P,Math.min(O.x,D)),y:Math.max(P,Math.min(O.y,G))}))},style:{background:"transparent",border:"none",color:"#94a3b8",fontSize:"16px",cursor:"pointer",padding:"4px",borderRadius:"4px",transition:"all 0.2s ease"},onMouseEnter:z=>{z.target.style.color="#e2e8f0",z.target.style.backgroundColor="rgba(148, 163, 184, 0.1)"},onMouseLeave:z=>{z.target.style.color="#94a3b8",z.target.style.backgroundColor="transparent"},children:"×"})]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",flex:1,justifyContent:"center"},children:n?t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",height:"100%"},children:d?t.jsxs("div",{style:{height:"100%",overflowY:"auto",padding:"6px",backgroundColor:"rgba(40, 40, 40, 0.8)",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:[t.jsx("h4",{style:{color:"#1db954",margin:"0 0 8px 0",fontSize:"12px"},children:"Tus Playlists"}),l.map(z=>{var P;return t.jsxs("div",{onClick:()=>J(z.id),style:{padding:"6px",backgroundColor:z.id===U?"rgba(29, 185, 84, 0.2)":"rgba(0, 0, 0, 0.3)",marginBottom:"4px",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",transition:"all 0.2s ease"},onMouseEnter:k=>{k.target.style.backgroundColor="rgba(29, 185, 84, 0.2)",k.target.style.transform="scale(1.02)"},onMouseLeave:k=>{k.target.style.backgroundColor=z.id===U?"rgba(29, 185, 84, 0.2)":"rgba(0, 0, 0, 0.3)",k.target.style.transform="scale(1)"},children:[t.jsx("img",{src:((P=z.images[0])==null?void 0:P.url)||"/img/default-playlist.png",alt:"Playlist",style:{width:"32px",height:"32px",borderRadius:"3px"}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("p",{style:{color:"white",margin:"0",fontSize:"11px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:z.name}),t.jsxs("p",{style:{color:"#b3b3b3",margin:"0",fontSize:"9px"},children:[z.tracks.total," canciones"]})]})]},z.id)})]}):t.jsx("div",{style:{width:"100%",height:"220px",borderRadius:"6px",overflow:"hidden",backgroundColor:"rgba(40, 40, 40, 0.8)",border:"1px solid rgba(255, 255, 255, 0.1)",position:"relative"}})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"15px 0"},children:[t.jsx("div",{style:{fontSize:"36px",color:"#1db954"},children:"♪"}),t.jsx("h3",{style:{color:"#1db954",margin:0,fontSize:"16px",textAlign:"center"},children:"Reproductor de Spotify"}),t.jsx("p",{style:{color:"#94a3b8",margin:0,fontSize:"12px",textAlign:"center",lineHeight:"1.4"},children:"Conecta tu cuenta de Spotify para disfrutar de tu música favorita"}),t.jsx("button",{onClick:ye,style:{background:"#1db954",border:"none",color:"#fff",fontSize:"14px",fontWeight:"bold",cursor:"pointer",padding:"10px 20px",borderRadius:"20px",transition:"all 0.2s ease",marginTop:"6px"},onMouseEnter:z=>{z.target.style.background="#1ed760",z.target.style.transform="scale(1.05)"},onMouseLeave:z=>{z.target.style.background="#1db954",z.target.style.transform="scale(1)"},children:"Conectar con Spotify"})]})})]})]}),t.jsx("style",{jsx:!0,children:`
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
      `})]})}function Ly(){const[e,n]=f.useState(null),r=()=>{const a=$n(),{isAuthenticated:i}=qe(),o=a.pathname.toLowerCase(),s=o.startsWith("/login")||o.startsWith("/register");return t.jsxs(t.Fragment,{children:[!s&&t.jsx(Ry,{}),t.jsx(Dy,{}),t.jsxs(Nx,{children:[t.jsx(pe,{path:"/",element:t.jsx(nv,{})}),t.jsx(pe,{path:"/derecho",element:t.jsx(av,{})}),t.jsx(pe,{path:"/contabilidad",element:t.jsx(sv,{})}),t.jsx(pe,{path:"/auditoria",element:t.jsx(dv,{})}),t.jsx(pe,{path:"/derecho-administrativo",element:t.jsx(fv,{})}),t.jsx(pe,{path:"/derecho-familia",element:t.jsx(gv,{})}),t.jsx(pe,{path:"/derecho-laboral",element:t.jsx(kv,{})}),t.jsx(pe,{path:"/derecho-penal",element:t.jsx(Ev,{})}),t.jsx(pe,{path:"/impuestos",element:t.jsx(Iv,{})}),t.jsx(pe,{path:"/asesoria-contable",element:t.jsx(Rv,{})}),t.jsx(pe,{path:"/planeacion-patrimonial",element:t.jsx(We,{to:"/asesoria-contable",replace:!0})}),t.jsx(pe,{path:"/privacidad",element:t.jsx(Lv,{})}),t.jsx(pe,{path:"/tramites-notariales",element:t.jsx(_v,{})}),t.jsx(pe,{path:"/acciones-de-tutela",element:t.jsx(Vv,{})}),t.jsx(pe,{path:"/login",element:i?t.jsx(We,{to:"/",replace:!0}):t.jsx(Nb,{})}),t.jsx(pe,{path:"/register",element:t.jsx(Ab,{})}),t.jsx(pe,{path:"/logout",element:t.jsx(Ty,{})}),t.jsx(pe,{path:"/callback",element:t.jsx(zy,{})}),t.jsx(pe,{path:"/panel",element:t.jsx(vr,{children:t.jsx(Tb,{})})}),t.jsx(pe,{path:"/admin/usuarios",element:t.jsx(vr,{children:t.jsx(qb,{})})}),t.jsx(pe,{path:"/admin/clientes-activos",element:t.jsx(vr,{children:t.jsx(py,{})})}),t.jsx(pe,{path:"/admin/tareas",element:t.jsx(vr,{children:t.jsx(ey,{})})}),t.jsx(pe,{path:"/dashboard",element:t.jsx(vr,{children:t.jsx(Ny,{})})}),t.jsx(pe,{path:"/mi-expediente",element:t.jsx(vr,{children:t.jsx(Nl,{})})}),t.jsx(pe,{path:"/dashboard2",element:t.jsx(vr,{children:t.jsx(Nl,{})})}),t.jsx(pe,{path:"/mis-casos",element:t.jsx(vr,{children:t.jsx(Iy,{})})}),t.jsx(pe,{path:"/index.html",element:t.jsx(We,{to:"/",replace:!0})}),t.jsx(pe,{path:"/derecho.html",element:t.jsx(We,{to:"/derecho",replace:!0})}),t.jsx(pe,{path:"/contabilidad.html",element:t.jsx(We,{to:"/contabilidad",replace:!0})}),t.jsx(pe,{path:"/auditoria.html",element:t.jsx(We,{to:"/auditoria",replace:!0})}),t.jsx(pe,{path:"/derecho-administrativo.html",element:t.jsx(We,{to:"/derecho-administrativo",replace:!0})}),t.jsx(pe,{path:"/derecho-familia.html",element:t.jsx(We,{to:"/derecho-familia",replace:!0})}),t.jsx(pe,{path:"/derecho-laboral.html",element:t.jsx(We,{to:"/derecho-laboral",replace:!0})}),t.jsx(pe,{path:"/derecho-penal.html",element:t.jsx(We,{to:"/derecho-penal",replace:!0})}),t.jsx(pe,{path:"/impuestos.html",element:t.jsx(We,{to:"/impuestos",replace:!0})}),t.jsx(pe,{path:"/planeacion-patrimonial.html",element:t.jsx(We,{to:"/asesoria-contable",replace:!0})}),t.jsx(pe,{path:"/privacidad.html",element:t.jsx(We,{to:"/privacidad",replace:!0})}),t.jsx(pe,{path:"/tramites-notariales.html",element:t.jsx(We,{to:"/tramites-notariales",replace:!0})}),t.jsx(pe,{path:"/acciones-de-tutela.html",element:t.jsx(We,{to:"/acciones-de-tutela",replace:!0})})]})]})};return t.jsx(Eb,{children:t.jsx(Oy,{children:t.jsx(Lx,{children:t.jsx(r,{})})})})}try{"scrollRestoration"in history&&(history.scrollRestoration="manual")}catch{}const Py=Hf(document.getElementById("root"));Py.render(t.jsx(Ly,{}));
