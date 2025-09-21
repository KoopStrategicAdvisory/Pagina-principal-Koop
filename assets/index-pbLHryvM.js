function of(e,n){for(var t=0;t<n.length;t++){const a=n[t];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(a,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function sf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gd={exports:{}},Qi={},Jd={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),lf=Symbol.for("react.portal"),cf=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),gf=Symbol.for("react.memo"),xf=Symbol.for("react.lazy"),dc=Symbol.iterator;function vf(e){return e===null||typeof e!="object"?null:(e=dc&&e[dc]||e["@@iterator"],typeof e=="function"?e:null)}var Qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xd=Object.assign,ep={};function Rt(e,n,t){this.props=e,this.context=n,this.refs=ep,this.updater=t||Qd}Rt.prototype.isReactComponent={};Rt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Rt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function np(){}np.prototype=Rt.prototype;function ol(e,n,t){this.props=e,this.context=n,this.refs=ep,this.updater=t||Qd}var sl=ol.prototype=new np;sl.constructor=ol;Xd(sl,Rt.prototype);sl.isPureReactComponent=!0;var pc=Array.isArray,rp=Object.prototype.hasOwnProperty,ll={current:null},tp={key:!0,ref:!0,__self:!0,__source:!0};function ap(e,n,t){var a,i={},o=null,s=null;if(n!=null)for(a in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)rp.call(n,a)&&!tp.hasOwnProperty(a)&&(i[a]=n[a]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:Ia,type:e,key:o,ref:s,props:i,_owner:ll.current}}function bf(e,n){return{$$typeof:Ia,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ia}function yf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var uc=/\/+/g;function Co(e,n){return typeof e=="object"&&e!==null&&e.key!=null?yf(""+e.key):n.toString(36)}function ci(e,n,t,a,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ia:case lf:s=!0}}if(s)return s=e,i=i(s),e=a===""?"."+Co(s,0):a,pc(i)?(t="",e!=null&&(t=e.replace(uc,"$&/")+"/"),ci(i,n,t,"",function(d){return d})):i!=null&&(cl(i)&&(i=bf(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(uc,"$&/")+"/")+e)),n.push(i)),1;if(s=0,a=a===""?".":a+":",pc(e))for(var l=0;l<e.length;l++){o=e[l];var c=a+Co(o,l);s+=ci(o,n,t,c,i)}else if(c=vf(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=a+Co(o,l++),s+=ci(o,n,t,c,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Ka(e,n,t){if(e==null)return e;var a=[],i=0;return ci(e,a,"","",function(o){return n.call(t,o,i++)}),a}function wf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var rn={current:null},di={transition:null},jf={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:di,ReactCurrentOwner:ll};function ip(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Ka,forEach:function(e,n,t){Ka(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ka(e,function(){n++}),n},toArray:function(e){return Ka(e,function(n){return n})||[]},only:function(e){if(!cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Rt;ie.Fragment=cf;ie.Profiler=pf;ie.PureComponent=ol;ie.StrictMode=df;ie.Suspense=mf;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jf;ie.act=ip;ie.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Xd({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=ll.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)rp.call(n,c)&&!tp.hasOwnProperty(c)&&(a[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)a.children=t;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:Ia,type:e.type,key:i,ref:o,props:a,_owner:s}};ie.createContext=function(e){return e={$$typeof:hf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uf,_context:e},e.Consumer=e};ie.createElement=ap;ie.createFactory=function(e){var n=ap.bind(null,e);return n.type=e,n};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:ff,render:e}};ie.isValidElement=cl;ie.lazy=function(e){return{$$typeof:xf,_payload:{_status:-1,_result:e},_init:wf}};ie.memo=function(e,n){return{$$typeof:gf,type:e,compare:n===void 0?null:n}};ie.startTransition=function(e){var n=di.transition;di.transition={};try{e()}finally{di.transition=n}};ie.unstable_act=ip;ie.useCallback=function(e,n){return rn.current.useCallback(e,n)};ie.useContext=function(e){return rn.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return rn.current.useDeferredValue(e)};ie.useEffect=function(e,n){return rn.current.useEffect(e,n)};ie.useId=function(){return rn.current.useId()};ie.useImperativeHandle=function(e,n,t){return rn.current.useImperativeHandle(e,n,t)};ie.useInsertionEffect=function(e,n){return rn.current.useInsertionEffect(e,n)};ie.useLayoutEffect=function(e,n){return rn.current.useLayoutEffect(e,n)};ie.useMemo=function(e,n){return rn.current.useMemo(e,n)};ie.useReducer=function(e,n,t){return rn.current.useReducer(e,n,t)};ie.useRef=function(e){return rn.current.useRef(e)};ie.useState=function(e){return rn.current.useState(e)};ie.useSyncExternalStore=function(e,n,t){return rn.current.useSyncExternalStore(e,n,t)};ie.useTransition=function(){return rn.current.useTransition()};ie.version="18.3.1";Jd.exports=ie;var v=Jd.exports;const kf=sf(v),Cf=of({__proto__:null,default:kf},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf=v,Sf=Symbol.for("react.element"),Ef=Symbol.for("react.fragment"),Af=Object.prototype.hasOwnProperty,Tf=Nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,If={key:!0,ref:!0,__self:!0,__source:!0};function op(e,n,t){var a,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(a in n)Af.call(n,a)&&!If.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)i[a]===void 0&&(i[a]=n[a]);return{$$typeof:Sf,type:e,key:o,ref:s,props:i,_owner:Tf.current}}Qi.Fragment=Ef;Qi.jsx=op;Qi.jsxs=op;Gd.exports=Qi;var r=Gd.exports,sp={exports:{}},xn={},lp={exports:{}},cp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(L,q){var Y=L.length;L.push(q);e:for(;0<Y;){var oe=Y-1>>>1,D=L[oe];if(0<i(D,q))L[oe]=q,L[Y]=D,Y=oe;else break e}}function t(L){return L.length===0?null:L[0]}function a(L){if(L.length===0)return null;var q=L[0],Y=L.pop();if(Y!==q){L[0]=Y;e:for(var oe=0,D=L.length,G=D>>>1;oe<G;){var Z=2*(oe+1)-1,se=L[Z],V=Z+1,pe=L[V];if(0>i(se,Y))V<D&&0>i(pe,se)?(L[oe]=pe,L[V]=Y,oe=V):(L[oe]=se,L[Z]=Y,oe=Z);else if(V<D&&0>i(pe,Y))L[oe]=pe,L[V]=Y,oe=V;else break e}}return q}function i(L,q){var Y=L.sortIndex-q.sortIndex;return Y!==0?Y:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],d=[],p=1,h=null,m=3,y=!1,x=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(L){for(var q=t(d);q!==null;){if(q.callback===null)a(d);else if(q.startTime<=L)a(d),q.sortIndex=q.expirationTime,n(c,q);else break;q=t(d)}}function k(L){if(g=!1,b(L),!x)if(t(c)!==null)x=!0,Ie(E);else{var q=t(d);q!==null&&Ze(k,q.startTime-L)}}function E(L,q){x=!1,g&&(g=!1,f(z),z=-1),y=!0;var Y=m;try{for(b(q),h=t(c);h!==null&&(!(h.expirationTime>q)||L&&!ee());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,m=h.priorityLevel;var D=oe(h.expirationTime<=q);q=e.unstable_now(),typeof D=="function"?h.callback=D:h===t(c)&&a(c),b(q)}else a(c);h=t(c)}if(h!==null)var G=!0;else{var Z=t(d);Z!==null&&Ze(k,Z.startTime-q),G=!1}return G}finally{h=null,m=Y,y=!1}}var A=!1,O=null,z=-1,F=5,P=-1;function ee(){return!(e.unstable_now()-P<F)}function de(){if(O!==null){var L=e.unstable_now();P=L;var q=!0;try{q=O(!0,L)}finally{q?ce():(A=!1,O=null)}}else A=!1}var ce;if(typeof u=="function")ce=function(){u(de)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,kn=U.port2;U.port1.onmessage=de,ce=function(){kn.postMessage(null)}}else ce=function(){w(de,0)};function Ie(L){O=L,A||(A=!0,ce())}function Ze(L,q){z=w(function(){L(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Ie(E))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var q=3;break;default:q=m}var Y=m;m=q;try{return L()}finally{m=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=m;m=L;try{return q()}finally{m=Y}},e.unstable_scheduleCallback=function(L,q,Y){var oe=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?oe+Y:oe):Y=oe,L){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Y+D,L={id:p++,callback:q,priorityLevel:L,startTime:Y,expirationTime:D,sortIndex:-1},Y>oe?(L.sortIndex=Y,n(d,L),t(c)===null&&L===t(d)&&(g?(f(z),z=-1):g=!0,Ze(k,Y-oe))):(L.sortIndex=D,n(c,L),x||y||(x=!0,Ie(E))),L},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(L){var q=m;return function(){var Y=m;m=q;try{return L.apply(this,arguments)}finally{m=Y}}}})(cp);lp.exports=cp;var Rf=lp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf=v,gn=Rf;function I(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dp=new Set,da={};function Jr(e,n){kt(e,n),kt(e+"Capture",n)}function kt(e,n){for(da[e]=n,e=0;e<n.length;e++)dp.add(n[e])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ns=Object.prototype.hasOwnProperty,Of=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hc={},fc={};function Df(e){return ns.call(fc,e)?!0:ns.call(hc,e)?!1:Of.test(e)?fc[e]=!0:(hc[e]=!0,!1)}function Lf(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pf(e,n,t,a){if(n===null||typeof n>"u"||Lf(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function tn(e,n,t,a,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new tn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ue[n]=new tn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new tn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new tn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new tn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new tn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new tn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new tn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new tn(e,5,!1,e.toLowerCase(),null,!1,!1)});var dl=/[\-:]([a-z])/g;function pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(dl,pl);Ue[n]=new tn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(dl,pl);Ue[n]=new tn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(dl,pl);Ue[n]=new tn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new tn(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new tn(e,1,!1,e.toLowerCase(),null,!0,!0)});function ul(e,n,t,a){var i=Ue.hasOwnProperty(n)?Ue[n]:null;(i!==null?i.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Pf(n,t,i,a)&&(t=null),a||i===null?Df(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,a=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var or=zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),it=Symbol.for("react.portal"),ot=Symbol.for("react.fragment"),hl=Symbol.for("react.strict_mode"),rs=Symbol.for("react.profiler"),pp=Symbol.for("react.provider"),up=Symbol.for("react.context"),fl=Symbol.for("react.forward_ref"),ts=Symbol.for("react.suspense"),as=Symbol.for("react.suspense_list"),ml=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),hp=Symbol.for("react.offscreen"),mc=Symbol.iterator;function Bt(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,No;function Jt(e){if(No===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);No=n&&n[1]||""}return`
`+No+e}var So=!1;function Eo(e,n){if(!e||So)return"";So=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var a=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){a=d}e.call(n.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=a.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{So=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Jt(e):""}function Mf(e){switch(e.tag){case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 2:case 15:return e=Eo(e.type,!1),e;case 11:return e=Eo(e.type.render,!1),e;case 1:return e=Eo(e.type,!0),e;default:return""}}function is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ot:return"Fragment";case it:return"Portal";case rs:return"Profiler";case hl:return"StrictMode";case ts:return"Suspense";case as:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case up:return(e.displayName||"Context")+".Consumer";case pp:return(e._context.displayName||"Context")+".Provider";case fl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ml:return n=e.displayName||null,n!==null?n:is(e.type)||"Memo";case ur:n=e._payload,e=e._init;try{return is(e(n))}catch{}}return null}function _f(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return is(n);case 8:return n===hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ar(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fp(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Vf(e){var n=fp(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $a(e){e._valueTracker||(e._valueTracker=Vf(e))}function mp(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=fp(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function os(e,n){var t=n.checked;return we({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function gc(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=Ar(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function gp(e,n){n=n.checked,n!=null&&ul(e,"checked",n,!1)}function ss(e,n){gp(e,n);var t=Ar(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ls(e,n.type,t):n.hasOwnProperty("defaultValue")&&ls(e,n.type,Ar(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ls(e,n,t){(n!=="number"||Ci(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Qt=Array.isArray;function xt(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Ar(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function cs(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(I(91));return we({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(I(92));if(Qt(t)){if(1<t.length)throw Error(I(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Ar(t)}}function xp(e,n){var t=Ar(n.value),a=Ar(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function bc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function vp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ds(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?vp(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ha,bp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function pa(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bf=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(e){Bf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),na[n]=na[e]})});function yp(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||na.hasOwnProperty(e)&&na[e]?(""+n).trim():n+"px"}function wp(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,i=yp(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,i):e[t]=i}}var Ff=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ps(e,n){if(n){if(Ff[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(I(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(I(61))}if(n.style!=null&&typeof n.style!="object")throw Error(I(62))}}function us(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hs=null;function gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,vt=null,bt=null;function yc(e){if(e=Oa(e)){if(typeof fs!="function")throw Error(I(280));var n=e.stateNode;n&&(n=to(n),fs(e.stateNode,e.type,n))}}function jp(e){vt?bt?bt.push(e):bt=[e]:vt=e}function kp(){if(vt){var e=vt,n=bt;if(bt=vt=null,yc(e),n)for(e=0;e<n.length;e++)yc(n[e])}}function Cp(e,n){return e(n)}function Np(){}var Ao=!1;function Sp(e,n,t){if(Ao)return e(n,t);Ao=!0;try{return Cp(e,n,t)}finally{Ao=!1,(vt!==null||bt!==null)&&(Np(),kp())}}function ua(e,n){var t=e.stateNode;if(t===null)return null;var a=to(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(I(231,n,typeof t));return t}var ms=!1;if(rr)try{var Ft={};Object.defineProperty(Ft,"passive",{get:function(){ms=!0}}),window.addEventListener("test",Ft,Ft),window.removeEventListener("test",Ft,Ft)}catch{ms=!1}function Uf(e,n,t,a,i,o,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(p){this.onError(p)}}var ra=!1,Ni=null,Si=!1,gs=null,Zf={onError:function(e){ra=!0,Ni=e}};function Kf(e,n,t,a,i,o,s,l,c){ra=!1,Ni=null,Uf.apply(Zf,arguments)}function Wf(e,n,t,a,i,o,s,l,c){if(Kf.apply(this,arguments),ra){if(ra){var d=Ni;ra=!1,Ni=null}else throw Error(I(198));Si||(Si=!0,gs=d)}}function Qr(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ep(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function wc(e){if(Qr(e)!==e)throw Error(I(188))}function $f(e){var n=e.alternate;if(!n){if(n=Qr(e),n===null)throw Error(I(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return wc(i),e;if(o===a)return wc(i),n;o=o.sibling}throw Error(I(188))}if(t.return!==a.return)t=i,a=o;else{for(var s=!1,l=i.child;l;){if(l===t){s=!0,t=i,a=o;break}if(l===a){s=!0,a=i,t=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===t){s=!0,t=o,a=i;break}if(l===a){s=!0,a=o,t=i;break}l=l.sibling}if(!s)throw Error(I(189))}}if(t.alternate!==a)throw Error(I(190))}if(t.tag!==3)throw Error(I(188));return t.stateNode.current===t?e:n}function Ap(e){return e=$f(e),e!==null?Tp(e):null}function Tp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Tp(e);if(n!==null)return n;e=e.sibling}return null}var Ip=gn.unstable_scheduleCallback,jc=gn.unstable_cancelCallback,Hf=gn.unstable_shouldYield,qf=gn.unstable_requestPaint,Ae=gn.unstable_now,Yf=gn.unstable_getCurrentPriorityLevel,xl=gn.unstable_ImmediatePriority,Rp=gn.unstable_UserBlockingPriority,Ei=gn.unstable_NormalPriority,Gf=gn.unstable_LowPriority,zp=gn.unstable_IdlePriority,Xi=null,Wn=null;function Jf(e){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(Xi,e,void 0,(e.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:em,Qf=Math.log,Xf=Math.LN2;function em(e){return e>>>=0,e===0?32:31-(Qf(e)/Xf|0)|0}var qa=64,Ya=4194304;function Xt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ai(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var l=s&~i;l!==0?a=Xt(l):(o&=s,o!==0&&(a=Xt(o)))}else s=t&~i,s!==0?a=Xt(s):o!==0&&(a=Xt(o));if(a===0)return 0;if(n!==0&&n!==a&&!(n&i)&&(i=a&-a,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-Pn(n),i=1<<t,a|=e[t],n&=~i;return a}function nm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Pn(o),l=1<<s,c=i[s];c===-1?(!(l&t)||l&a)&&(i[s]=nm(l,n)):c<=n&&(e.expiredLanes|=l),o&=~l}}function xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Op(){var e=qa;return qa<<=1,!(qa&4194240)&&(qa=64),e}function To(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ra(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Pn(n),e[n]=t}function tm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Pn(t),o=1<<i;n[i]=0,a[i]=-1,e[i]=-1,t&=~o}}function vl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-Pn(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}var ue=0;function Dp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lp,bl,Pp,Mp,_p,vs=!1,Ga=[],br=null,yr=null,wr=null,ha=new Map,fa=new Map,fr=[],am="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kc(e,n){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":ha.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(n.pointerId)}}function Ut(e,n,t,a,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Oa(n),n!==null&&bl(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function im(e,n,t,a,i){switch(n){case"focusin":return br=Ut(br,e,n,t,a,i),!0;case"dragenter":return yr=Ut(yr,e,n,t,a,i),!0;case"mouseover":return wr=Ut(wr,e,n,t,a,i),!0;case"pointerover":var o=i.pointerId;return ha.set(o,Ut(ha.get(o)||null,e,n,t,a,i)),!0;case"gotpointercapture":return o=i.pointerId,fa.set(o,Ut(fa.get(o)||null,e,n,t,a,i)),!0}return!1}function Vp(e){var n=_r(e.target);if(n!==null){var t=Qr(n);if(t!==null){if(n=t.tag,n===13){if(n=Ep(t),n!==null){e.blockedOn=n,_p(e.priority,function(){Pp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=bs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);hs=a,t.target.dispatchEvent(a),hs=null}else return n=Oa(t),n!==null&&bl(n),e.blockedOn=t,!1;n.shift()}return!0}function Cc(e,n,t){pi(e)&&t.delete(n)}function om(){vs=!1,br!==null&&pi(br)&&(br=null),yr!==null&&pi(yr)&&(yr=null),wr!==null&&pi(wr)&&(wr=null),ha.forEach(Cc),fa.forEach(Cc)}function Zt(e,n){e.blockedOn===n&&(e.blockedOn=null,vs||(vs=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,om)))}function ma(e){function n(i){return Zt(i,e)}if(0<Ga.length){Zt(Ga[0],e);for(var t=1;t<Ga.length;t++){var a=Ga[t];a.blockedOn===e&&(a.blockedOn=null)}}for(br!==null&&Zt(br,e),yr!==null&&Zt(yr,e),wr!==null&&Zt(wr,e),ha.forEach(n),fa.forEach(n),t=0;t<fr.length;t++)a=fr[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<fr.length&&(t=fr[0],t.blockedOn===null);)Vp(t),t.blockedOn===null&&fr.shift()}var yt=or.ReactCurrentBatchConfig,Ti=!0;function sm(e,n,t,a){var i=ue,o=yt.transition;yt.transition=null;try{ue=1,yl(e,n,t,a)}finally{ue=i,yt.transition=o}}function lm(e,n,t,a){var i=ue,o=yt.transition;yt.transition=null;try{ue=4,yl(e,n,t,a)}finally{ue=i,yt.transition=o}}function yl(e,n,t,a){if(Ti){var i=bs(e,n,t,a);if(i===null)Vo(e,n,a,Ii,t),kc(e,a);else if(im(i,e,n,t,a))a.stopPropagation();else if(kc(e,a),n&4&&-1<am.indexOf(e)){for(;i!==null;){var o=Oa(i);if(o!==null&&Lp(o),o=bs(e,n,t,a),o===null&&Vo(e,n,a,Ii,t),o===i)break;i=o}i!==null&&a.stopPropagation()}else Vo(e,n,a,null,t)}}var Ii=null;function bs(e,n,t,a){if(Ii=null,e=gl(a),e=_r(e),e!==null)if(n=Qr(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ep(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ii=e,null}function Bp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yf()){case xl:return 1;case Rp:return 4;case Ei:case Gf:return 16;case zp:return 536870912;default:return 16}default:return 16}}var gr=null,wl=null,ui=null;function Fp(){if(ui)return ui;var e,n=wl,t=n.length,a,i="value"in gr?gr.value:gr.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===i[o-a];a++);return ui=i.slice(e,1<a?1-a:void 0)}function hi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ja(){return!0}function Nc(){return!1}function vn(e){function n(t,a,i,o,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ja:Nc,this.isPropagationStopped=Nc,this}return we(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),n}var zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=vn(zt),za=we({},zt,{view:0,detail:0}),cm=vn(za),Io,Ro,Kt,eo=we({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kt&&(Kt&&e.type==="mousemove"?(Io=e.screenX-Kt.screenX,Ro=e.screenY-Kt.screenY):Ro=Io=0,Kt=e),Io)},movementY:function(e){return"movementY"in e?e.movementY:Ro}}),Sc=vn(eo),dm=we({},eo,{dataTransfer:0}),pm=vn(dm),um=we({},za,{relatedTarget:0}),zo=vn(um),hm=we({},zt,{animationName:0,elapsedTime:0,pseudoElement:0}),fm=vn(hm),mm=we({},zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gm=vn(mm),xm=we({},zt,{data:0}),Ec=vn(xm),vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ym[e])?!!n[e]:!1}function kl(){return wm}var jm=we({},za,{key:function(e){if(e.key){var n=vm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),km=vn(jm),Cm=we({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ac=vn(Cm),Nm=we({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),Sm=vn(Nm),Em=we({},zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Am=vn(Em),Tm=we({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=vn(Tm),Rm=[9,13,27,32],Cl=rr&&"CompositionEvent"in window,ta=null;rr&&"documentMode"in document&&(ta=document.documentMode);var zm=rr&&"TextEvent"in window&&!ta,Up=rr&&(!Cl||ta&&8<ta&&11>=ta),Tc=" ",Ic=!1;function Zp(e,n){switch(e){case"keyup":return Rm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var st=!1;function Om(e,n){switch(e){case"compositionend":return Kp(n);case"keypress":return n.which!==32?null:(Ic=!0,Tc);case"textInput":return e=n.data,e===Tc&&Ic?null:e;default:return null}}function Dm(e,n){if(st)return e==="compositionend"||!Cl&&Zp(e,n)?(e=Fp(),ui=wl=gr=null,st=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Up&&n.locale!=="ko"?null:n.data;default:return null}}var Lm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Lm[e.type]:n==="textarea"}function Wp(e,n,t,a){jp(a),n=Ri(n,"onChange"),0<n.length&&(t=new jl("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var aa=null,ga=null;function Pm(e){ru(e,0)}function no(e){var n=dt(e);if(mp(n))return e}function Mm(e,n){if(e==="change")return n}var $p=!1;if(rr){var Oo;if(rr){var Do="oninput"in document;if(!Do){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),Do=typeof zc.oninput=="function"}Oo=Do}else Oo=!1;$p=Oo&&(!document.documentMode||9<document.documentMode)}function Oc(){aa&&(aa.detachEvent("onpropertychange",Hp),ga=aa=null)}function Hp(e){if(e.propertyName==="value"&&no(ga)){var n=[];Wp(n,ga,e,gl(e)),Sp(Pm,n)}}function _m(e,n,t){e==="focusin"?(Oc(),aa=n,ga=t,aa.attachEvent("onpropertychange",Hp)):e==="focusout"&&Oc()}function Vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return no(ga)}function Bm(e,n){if(e==="click")return no(n)}function Fm(e,n){if(e==="input"||e==="change")return no(n)}function Um(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _n=typeof Object.is=="function"?Object.is:Um;function xa(e,n){if(_n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!ns.call(n,i)||!_n(e[i],n[i]))return!1}return!0}function Dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lc(e,n){var t=Dc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Dc(t)}}function qp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yp(){for(var e=window,n=Ci();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ci(e.document)}return n}function Nl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Zm(e){var n=Yp(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&qp(t.ownerDocument.documentElement,t)){if(a!==null&&Nl(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(a.start,i);a=a.end===void 0?o:Math.min(a.end,i),!e.extend&&o>a&&(i=a,a=o,o=i),i=Lc(t,o);var s=Lc(t,a);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>a?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Km=rr&&"documentMode"in document&&11>=document.documentMode,lt=null,ys=null,ia=null,ws=!1;function Pc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ws||lt==null||lt!==Ci(a)||(a=lt,"selectionStart"in a&&Nl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ia&&xa(ia,a)||(ia=a,a=Ri(ys,"onSelect"),0<a.length&&(n=new jl("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=lt)))}function Qa(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ct={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},Lo={},Gp={};rr&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete ct.animationend.animation,delete ct.animationiteration.animation,delete ct.animationstart.animation),"TransitionEvent"in window||delete ct.transitionend.transition);function ro(e){if(Lo[e])return Lo[e];if(!ct[e])return e;var n=ct[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Gp)return Lo[e]=n[t];return e}var Jp=ro("animationend"),Qp=ro("animationiteration"),Xp=ro("animationstart"),eu=ro("transitionend"),nu=new Map,Mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(e,n){nu.set(e,n),Jr(n,[e])}for(var Po=0;Po<Mc.length;Po++){var Mo=Mc[Po],Wm=Mo.toLowerCase(),$m=Mo[0].toUpperCase()+Mo.slice(1);Ir(Wm,"on"+$m)}Ir(Jp,"onAnimationEnd");Ir(Qp,"onAnimationIteration");Ir(Xp,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(eu,"onTransitionEnd");kt("onMouseEnter",["mouseout","mouseover"]);kt("onMouseLeave",["mouseout","mouseover"]);kt("onPointerEnter",["pointerout","pointerover"]);kt("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hm=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function _c(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Wf(a,n,void 0,e),e.currentTarget=null}function ru(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var s=a.length-1;0<=s;s--){var l=a[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;_c(i,l,d),o=c}else for(s=0;s<a.length;s++){if(l=a[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;_c(i,l,d),o=c}}}if(Si)throw e=gs,Si=!1,gs=null,e}function me(e,n){var t=n[Ss];t===void 0&&(t=n[Ss]=new Set);var a=e+"__bubble";t.has(a)||(tu(n,e,2,!1),t.add(a))}function _o(e,n,t){var a=0;n&&(a|=4),tu(t,e,a,n)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function va(e){if(!e[Xa]){e[Xa]=!0,dp.forEach(function(t){t!=="selectionchange"&&(Hm.has(t)||_o(t,!1,e),_o(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xa]||(n[Xa]=!0,_o("selectionchange",!1,n))}}function tu(e,n,t,a){switch(Bp(n)){case 1:var i=sm;break;case 4:i=lm;break;default:i=yl}t=i.bind(null,n,t,e),i=void 0,!ms||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Vo(e,n,t,a,i){var o=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=a.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=_r(l),s===null)return;if(c=s.tag,c===5||c===6){a=o=s;continue e}l=l.parentNode}}a=a.return}Sp(function(){var d=o,p=gl(t),h=[];e:{var m=nu.get(e);if(m!==void 0){var y=jl,x=e;switch(e){case"keypress":if(hi(t)===0)break e;case"keydown":case"keyup":y=km;break;case"focusin":x="focus",y=zo;break;case"focusout":x="blur",y=zo;break;case"beforeblur":case"afterblur":y=zo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Sm;break;case Jp:case Qp:case Xp:y=fm;break;case eu:y=Am;break;case"scroll":y=cm;break;case"wheel":y=Im;break;case"copy":case"cut":case"paste":y=gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ac}var g=(n&4)!==0,w=!g&&e==="scroll",f=g?m!==null?m+"Capture":null:m;g=[];for(var u=d,b;u!==null;){b=u;var k=b.stateNode;if(b.tag===5&&k!==null&&(b=k,f!==null&&(k=ua(u,f),k!=null&&g.push(ba(u,k,b)))),w)break;u=u.return}0<g.length&&(m=new y(m,x,null,t,p),h.push({event:m,listeners:g}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==hs&&(x=t.relatedTarget||t.fromElement)&&(_r(x)||x[tr]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(x=t.relatedTarget||t.toElement,y=d,x=x?_r(x):null,x!==null&&(w=Qr(x),x!==w||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=d),y!==x)){if(g=Sc,k="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(g=Ac,k="onPointerLeave",f="onPointerEnter",u="pointer"),w=y==null?m:dt(y),b=x==null?m:dt(x),m=new g(k,u+"leave",y,t,p),m.target=w,m.relatedTarget=b,k=null,_r(p)===d&&(g=new g(f,u+"enter",x,t,p),g.target=b,g.relatedTarget=w,k=g),w=k,y&&x)n:{for(g=y,f=x,u=0,b=g;b;b=rt(b))u++;for(b=0,k=f;k;k=rt(k))b++;for(;0<u-b;)g=rt(g),u--;for(;0<b-u;)f=rt(f),b--;for(;u--;){if(g===f||f!==null&&g===f.alternate)break n;g=rt(g),f=rt(f)}g=null}else g=null;y!==null&&Vc(h,m,y,g,!1),x!==null&&w!==null&&Vc(h,w,x,g,!0)}}e:{if(m=d?dt(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var E=Mm;else if(Rc(m))if($p)E=Fm;else{E=Vm;var A=_m}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Bm);if(E&&(E=E(e,d))){Wp(h,E,t,p);break e}A&&A(e,m,d),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&ls(m,"number",m.value)}switch(A=d?dt(d):window,e){case"focusin":(Rc(A)||A.contentEditable==="true")&&(lt=A,ys=d,ia=null);break;case"focusout":ia=ys=lt=null;break;case"mousedown":ws=!0;break;case"contextmenu":case"mouseup":case"dragend":ws=!1,Pc(h,t,p);break;case"selectionchange":if(Km)break;case"keydown":case"keyup":Pc(h,t,p)}var O;if(Cl)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else st?Zp(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(Up&&t.locale!=="ko"&&(st||z!=="onCompositionStart"?z==="onCompositionEnd"&&st&&(O=Fp()):(gr=p,wl="value"in gr?gr.value:gr.textContent,st=!0)),A=Ri(d,z),0<A.length&&(z=new Ec(z,e,null,t,p),h.push({event:z,listeners:A}),O?z.data=O:(O=Kp(t),O!==null&&(z.data=O)))),(O=zm?Om(e,t):Dm(e,t))&&(d=Ri(d,"onBeforeInput"),0<d.length&&(p=new Ec("onBeforeInput","beforeinput",null,t,p),h.push({event:p,listeners:d}),p.data=O))}ru(h,n)})}function ba(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ri(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ua(e,t),o!=null&&a.unshift(ba(e,o,i)),o=ua(e,n),o!=null&&a.push(ba(e,o,i))),e=e.return}return a}function rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vc(e,n,t,a,i){for(var o=n._reactName,s=[];t!==null&&t!==a;){var l=t,c=l.alternate,d=l.stateNode;if(c!==null&&c===a)break;l.tag===5&&d!==null&&(l=d,i?(c=ua(t,o),c!=null&&s.unshift(ba(t,c,l))):i||(c=ua(t,o),c!=null&&s.push(ba(t,c,l)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var qm=/\r\n?/g,Ym=/\u0000|\uFFFD/g;function Bc(e){return(typeof e=="string"?e:""+e).replace(qm,`
`).replace(Ym,"")}function ei(e,n,t){if(n=Bc(n),Bc(e)!==n&&t)throw Error(I(425))}function zi(){}var js=null,ks=null;function Cs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ns=typeof setTimeout=="function"?setTimeout:void 0,Gm=typeof clearTimeout=="function"?clearTimeout:void 0,Fc=typeof Promise=="function"?Promise:void 0,Jm=typeof queueMicrotask=="function"?queueMicrotask:typeof Fc<"u"?function(e){return Fc.resolve(null).then(e).catch(Qm)}:Ns;function Qm(e){setTimeout(function(){throw e})}function Bo(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(a===0){e.removeChild(i),ma(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=i}while(t);ma(n)}function jr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Uc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ot=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Ot,ya="__reactProps$"+Ot,tr="__reactContainer$"+Ot,Ss="__reactEvents$"+Ot,Xm="__reactListeners$"+Ot,e0="__reactHandles$"+Ot;function _r(e){var n=e[Kn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[tr]||t[Kn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Uc(e);e!==null;){if(t=e[Kn])return t;e=Uc(e)}return n}e=t,t=e.parentNode}return null}function Oa(e){return e=e[Kn]||e[tr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function to(e){return e[ya]||null}var Es=[],pt=-1;function Rr(e){return{current:e}}function ge(e){0>pt||(e.current=Es[pt],Es[pt]=null,pt--)}function fe(e,n){pt++,Es[pt]=e.current,e.current=n}var Tr={},Ye=Rr(Tr),sn=Rr(!1),Wr=Tr;function Ct(e,n){var t=e.type.contextTypes;if(!t)return Tr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ln(e){return e=e.childContextTypes,e!=null}function Oi(){ge(sn),ge(Ye)}function Zc(e,n,t){if(Ye.current!==Tr)throw Error(I(168));fe(Ye,n),fe(sn,t)}function au(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var i in a)if(!(i in n))throw Error(I(108,_f(e)||"Unknown",i));return we({},t,a)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tr,Wr=Ye.current,fe(Ye,e),fe(sn,sn.current),!0}function Kc(e,n,t){var a=e.stateNode;if(!a)throw Error(I(169));t?(e=au(e,n,Wr),a.__reactInternalMemoizedMergedChildContext=e,ge(sn),ge(Ye),fe(Ye,e)):ge(sn),fe(sn,t)}var Qn=null,ao=!1,Fo=!1;function iu(e){Qn===null?Qn=[e]:Qn.push(e)}function n0(e){ao=!0,iu(e)}function zr(){if(!Fo&&Qn!==null){Fo=!0;var e=0,n=ue;try{var t=Qn;for(ue=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Qn=null,ao=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(e+1)),Ip(xl,zr),i}finally{ue=n,Fo=!1}}return null}var ut=[],ht=0,Li=null,Pi=0,Nn=[],Sn=0,$r=null,Xn=1,er="";function Pr(e,n){ut[ht++]=Pi,ut[ht++]=Li,Li=e,Pi=n}function ou(e,n,t){Nn[Sn++]=Xn,Nn[Sn++]=er,Nn[Sn++]=$r,$r=e;var a=Xn;e=er;var i=32-Pn(a)-1;a&=~(1<<i),t+=1;var o=32-Pn(n)+i;if(30<o){var s=i-i%5;o=(a&(1<<s)-1).toString(32),a>>=s,i-=s,Xn=1<<32-Pn(n)+i|t<<i|a,er=o+e}else Xn=1<<o|t<<i|a,er=e}function Sl(e){e.return!==null&&(Pr(e,1),ou(e,1,0))}function El(e){for(;e===Li;)Li=ut[--ht],ut[ht]=null,Pi=ut[--ht],ut[ht]=null;for(;e===$r;)$r=Nn[--Sn],Nn[Sn]=null,er=Nn[--Sn],Nn[Sn]=null,Xn=Nn[--Sn],Nn[Sn]=null}var mn=null,fn=null,ve=!1,Ln=null;function su(e,n){var t=En(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Wc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,mn=e,fn=jr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,mn=e,fn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=$r!==null?{id:Xn,overflow:er}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=En(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,mn=e,fn=null,!0):!1;default:return!1}}function As(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ts(e){if(ve){var n=fn;if(n){var t=n;if(!Wc(e,n)){if(As(e))throw Error(I(418));n=jr(t.nextSibling);var a=mn;n&&Wc(e,n)?su(a,t):(e.flags=e.flags&-4097|2,ve=!1,mn=e)}}else{if(As(e))throw Error(I(418));e.flags=e.flags&-4097|2,ve=!1,mn=e}}}function $c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mn=e}function ni(e){if(e!==mn)return!1;if(!ve)return $c(e),ve=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Cs(e.type,e.memoizedProps)),n&&(n=fn)){if(As(e))throw lu(),Error(I(418));for(;n;)su(e,n),n=jr(n.nextSibling)}if($c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){fn=jr(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}fn=null}}else fn=mn?jr(e.stateNode.nextSibling):null;return!0}function lu(){for(var e=fn;e;)e=jr(e.nextSibling)}function Nt(){fn=mn=null,ve=!1}function Al(e){Ln===null?Ln=[e]:Ln.push(e)}var r0=or.ReactCurrentBatchConfig;function Wt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(I(309));var a=t.stateNode}if(!a)throw Error(I(147,e));var i=a,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(I(284));if(!t._owner)throw Error(I(290,e))}return e}function ri(e,n){throw e=Object.prototype.toString.call(n),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Hc(e){var n=e._init;return n(e._payload)}function cu(e){function n(f,u){if(e){var b=f.deletions;b===null?(f.deletions=[u],f.flags|=16):b.push(u)}}function t(f,u){if(!e)return null;for(;u!==null;)n(f,u),u=u.sibling;return null}function a(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function i(f,u){return f=Sr(f,u),f.index=0,f.sibling=null,f}function o(f,u,b){return f.index=b,e?(b=f.alternate,b!==null?(b=b.index,b<u?(f.flags|=2,u):b):(f.flags|=2,u)):(f.flags|=1048576,u)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,b,k){return u===null||u.tag!==6?(u=qo(b,f.mode,k),u.return=f,u):(u=i(u,b),u.return=f,u)}function c(f,u,b,k){var E=b.type;return E===ot?p(f,u,b.props.children,k,b.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ur&&Hc(E)===u.type)?(k=i(u,b.props),k.ref=Wt(f,u,b),k.return=f,k):(k=yi(b.type,b.key,b.props,null,f.mode,k),k.ref=Wt(f,u,b),k.return=f,k)}function d(f,u,b,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==b.containerInfo||u.stateNode.implementation!==b.implementation?(u=Yo(b,f.mode,k),u.return=f,u):(u=i(u,b.children||[]),u.return=f,u)}function p(f,u,b,k,E){return u===null||u.tag!==7?(u=Zr(b,f.mode,k,E),u.return=f,u):(u=i(u,b),u.return=f,u)}function h(f,u,b){if(typeof u=="string"&&u!==""||typeof u=="number")return u=qo(""+u,f.mode,b),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Wa:return b=yi(u.type,u.key,u.props,null,f.mode,b),b.ref=Wt(f,null,u),b.return=f,b;case it:return u=Yo(u,f.mode,b),u.return=f,u;case ur:var k=u._init;return h(f,k(u._payload),b)}if(Qt(u)||Bt(u))return u=Zr(u,f.mode,b,null),u.return=f,u;ri(f,u)}return null}function m(f,u,b,k){var E=u!==null?u.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return E!==null?null:l(f,u,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Wa:return b.key===E?c(f,u,b,k):null;case it:return b.key===E?d(f,u,b,k):null;case ur:return E=b._init,m(f,u,E(b._payload),k)}if(Qt(b)||Bt(b))return E!==null?null:p(f,u,b,k,null);ri(f,b)}return null}function y(f,u,b,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(b)||null,l(u,f,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Wa:return f=f.get(k.key===null?b:k.key)||null,c(u,f,k,E);case it:return f=f.get(k.key===null?b:k.key)||null,d(u,f,k,E);case ur:var A=k._init;return y(f,u,b,A(k._payload),E)}if(Qt(k)||Bt(k))return f=f.get(b)||null,p(u,f,k,E,null);ri(u,k)}return null}function x(f,u,b,k){for(var E=null,A=null,O=u,z=u=0,F=null;O!==null&&z<b.length;z++){O.index>z?(F=O,O=null):F=O.sibling;var P=m(f,O,b[z],k);if(P===null){O===null&&(O=F);break}e&&O&&P.alternate===null&&n(f,O),u=o(P,u,z),A===null?E=P:A.sibling=P,A=P,O=F}if(z===b.length)return t(f,O),ve&&Pr(f,z),E;if(O===null){for(;z<b.length;z++)O=h(f,b[z],k),O!==null&&(u=o(O,u,z),A===null?E=O:A.sibling=O,A=O);return ve&&Pr(f,z),E}for(O=a(f,O);z<b.length;z++)F=y(O,f,z,b[z],k),F!==null&&(e&&F.alternate!==null&&O.delete(F.key===null?z:F.key),u=o(F,u,z),A===null?E=F:A.sibling=F,A=F);return e&&O.forEach(function(ee){return n(f,ee)}),ve&&Pr(f,z),E}function g(f,u,b,k){var E=Bt(b);if(typeof E!="function")throw Error(I(150));if(b=E.call(b),b==null)throw Error(I(151));for(var A=E=null,O=u,z=u=0,F=null,P=b.next();O!==null&&!P.done;z++,P=b.next()){O.index>z?(F=O,O=null):F=O.sibling;var ee=m(f,O,P.value,k);if(ee===null){O===null&&(O=F);break}e&&O&&ee.alternate===null&&n(f,O),u=o(ee,u,z),A===null?E=ee:A.sibling=ee,A=ee,O=F}if(P.done)return t(f,O),ve&&Pr(f,z),E;if(O===null){for(;!P.done;z++,P=b.next())P=h(f,P.value,k),P!==null&&(u=o(P,u,z),A===null?E=P:A.sibling=P,A=P);return ve&&Pr(f,z),E}for(O=a(f,O);!P.done;z++,P=b.next())P=y(O,f,z,P.value,k),P!==null&&(e&&P.alternate!==null&&O.delete(P.key===null?z:P.key),u=o(P,u,z),A===null?E=P:A.sibling=P,A=P);return e&&O.forEach(function(de){return n(f,de)}),ve&&Pr(f,z),E}function w(f,u,b,k){if(typeof b=="object"&&b!==null&&b.type===ot&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Wa:e:{for(var E=b.key,A=u;A!==null;){if(A.key===E){if(E=b.type,E===ot){if(A.tag===7){t(f,A.sibling),u=i(A,b.props.children),u.return=f,f=u;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ur&&Hc(E)===A.type){t(f,A.sibling),u=i(A,b.props),u.ref=Wt(f,A,b),u.return=f,f=u;break e}t(f,A);break}else n(f,A);A=A.sibling}b.type===ot?(u=Zr(b.props.children,f.mode,k,b.key),u.return=f,f=u):(k=yi(b.type,b.key,b.props,null,f.mode,k),k.ref=Wt(f,u,b),k.return=f,f=k)}return s(f);case it:e:{for(A=b.key;u!==null;){if(u.key===A)if(u.tag===4&&u.stateNode.containerInfo===b.containerInfo&&u.stateNode.implementation===b.implementation){t(f,u.sibling),u=i(u,b.children||[]),u.return=f,f=u;break e}else{t(f,u);break}else n(f,u);u=u.sibling}u=Yo(b,f.mode,k),u.return=f,f=u}return s(f);case ur:return A=b._init,w(f,u,A(b._payload),k)}if(Qt(b))return x(f,u,b,k);if(Bt(b))return g(f,u,b,k);ri(f,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,u!==null&&u.tag===6?(t(f,u.sibling),u=i(u,b),u.return=f,f=u):(t(f,u),u=qo(b,f.mode,k),u.return=f,f=u),s(f)):t(f,u)}return w}var St=cu(!0),du=cu(!1),Mi=Rr(null),_i=null,ft=null,Tl=null;function Il(){Tl=ft=_i=null}function Rl(e){var n=Mi.current;ge(Mi),e._currentValue=n}function Is(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function wt(e,n){_i=e,Tl=ft=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(on=!0),e.firstContext=null)}function Tn(e){var n=e._currentValue;if(Tl!==e)if(e={context:e,memoizedValue:n,next:null},ft===null){if(_i===null)throw Error(I(308));ft=e,_i.dependencies={lanes:0,firstContext:e}}else ft=ft.next=e;return n}var Vr=null;function zl(e){Vr===null?Vr=[e]:Vr.push(e)}function pu(e,n,t,a){var i=n.interleaved;return i===null?(t.next=t,zl(n)):(t.next=i.next,i.next=t),n.interleaved=t,ar(e,a)}function ar(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var hr=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kr(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,le&2){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,ar(e,t)}return i=a.interleaved,i===null?(n.next=n,zl(a)):(n.next=i.next,i.next=n),a.interleaved=n,ar(e,t)}function fi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,vl(e,t)}}function qc(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Vi(e,n,t,a){var i=e.updateQueue;hr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?o=d:s.next=d,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;s=0,p=d=c=null,l=o;do{var m=l.lane,y=l.eventTime;if((a&m)===m){p!==null&&(p=p.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,g=l;switch(m=n,y=t,g.tag){case 1:if(x=g.payload,typeof x=="function"){h=x.call(y,h,m);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,m=typeof x=="function"?x.call(y,h,m):x,m==null)break e;h=we({},h,m);break e;case 2:hr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=y,c=h):p=p.next=y,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(c=h),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);qr|=s,e.lanes=s,e.memoizedState=h}}function Yc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],i=a.callback;if(i!==null){if(a.callback=null,a=t,typeof i!="function")throw Error(I(191,i));i.call(a)}}}var Da={},$n=Rr(Da),wa=Rr(Da),ja=Rr(Da);function Br(e){if(e===Da)throw Error(I(174));return e}function Dl(e,n){switch(fe(ja,n),fe(wa,e),fe($n,Da),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ds(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ds(n,e)}ge($n),fe($n,n)}function Et(){ge($n),ge(wa),ge(ja)}function hu(e){Br(ja.current);var n=Br($n.current),t=ds(n,e.type);n!==t&&(fe(wa,e),fe($n,t))}function Ll(e){wa.current===e&&(ge($n),ge(wa))}var be=Rr(0);function Bi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Uo=[];function Pl(){for(var e=0;e<Uo.length;e++)Uo[e]._workInProgressVersionPrimary=null;Uo.length=0}var mi=or.ReactCurrentDispatcher,Zo=or.ReactCurrentBatchConfig,Hr=0,ye=null,Le=null,Me=null,Fi=!1,oa=!1,ka=0,t0=0;function We(){throw Error(I(321))}function Ml(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!_n(e[t],n[t]))return!1;return!0}function _l(e,n,t,a,i,o){if(Hr=o,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,mi.current=e===null||e.memoizedState===null?s0:l0,e=t(a,i),oa){o=0;do{if(oa=!1,ka=0,25<=o)throw Error(I(301));o+=1,Me=Le=null,n.updateQueue=null,mi.current=c0,e=t(a,i)}while(oa)}if(mi.current=Ui,n=Le!==null&&Le.next!==null,Hr=0,Me=Le=ye=null,Fi=!1,n)throw Error(I(300));return e}function Vl(){var e=ka!==0;return ka=0,e}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ye.memoizedState=Me=e:Me=Me.next=e,Me}function In(){if(Le===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=Me===null?ye.memoizedState:Me.next;if(n!==null)Me=n,Le=e;else{if(e===null)throw Error(I(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Me===null?ye.memoizedState=Me=e:Me=Me.next=e}return Me}function Ca(e,n){return typeof n=="function"?n(e):n}function Ko(e){var n=In(),t=n.queue;if(t===null)throw Error(I(311));t.lastRenderedReducer=e;var a=Le,i=a.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}a.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,a=a.baseState;var l=s=null,c=null,d=o;do{var p=d.lane;if((Hr&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var h={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=h,s=a):c=c.next=h,ye.lanes|=p,qr|=p}d=d.next}while(d!==null&&d!==o);c===null?s=a:c.next=l,_n(a,n.memoizedState)||(on=!0),n.memoizedState=a,n.baseState=s,n.baseQueue=c,t.lastRenderedState=a}if(e=t.interleaved,e!==null){i=e;do o=i.lane,ye.lanes|=o,qr|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Wo(e){var n=In(),t=n.queue;if(t===null)throw Error(I(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);_n(o,n.memoizedState)||(on=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,a]}function fu(){}function mu(e,n){var t=ye,a=In(),i=n(),o=!_n(a.memoizedState,i);if(o&&(a.memoizedState=i,on=!0),a=a.queue,Bl(vu.bind(null,t,a,e),[e]),a.getSnapshot!==n||o||Me!==null&&Me.memoizedState.tag&1){if(t.flags|=2048,Na(9,xu.bind(null,t,a,i,n),void 0,null),_e===null)throw Error(I(349));Hr&30||gu(t,n,i)}return i}function gu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ye.updateQueue,n===null?(n={lastEffect:null,stores:null},ye.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function xu(e,n,t,a){n.value=t,n.getSnapshot=a,bu(n)&&yu(e)}function vu(e,n,t){return t(function(){bu(n)&&yu(e)})}function bu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!_n(e,t)}catch{return!0}}function yu(e){var n=ar(e,1);n!==null&&Mn(n,e,1,-1)}function Gc(e){var n=Zn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:e},n.queue=e,e=e.dispatch=o0.bind(null,ye,e),[n.memoizedState,e]}function Na(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=ye.updateQueue,n===null?(n={lastEffect:null,stores:null},ye.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function wu(){return In().memoizedState}function gi(e,n,t,a){var i=Zn();ye.flags|=e,i.memoizedState=Na(1|n,t,void 0,a===void 0?null:a)}function io(e,n,t,a){var i=In();a=a===void 0?null:a;var o=void 0;if(Le!==null){var s=Le.memoizedState;if(o=s.destroy,a!==null&&Ml(a,s.deps)){i.memoizedState=Na(n,t,o,a);return}}ye.flags|=e,i.memoizedState=Na(1|n,t,o,a)}function Jc(e,n){return gi(8390656,8,e,n)}function Bl(e,n){return io(2048,8,e,n)}function ju(e,n){return io(4,2,e,n)}function ku(e,n){return io(4,4,e,n)}function Cu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Nu(e,n,t){return t=t!=null?t.concat([e]):null,io(4,4,Cu.bind(null,n,e),t)}function Fl(){}function Su(e,n){var t=In();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Ml(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Eu(e,n){var t=In();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Ml(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function Au(e,n,t){return Hr&21?(_n(t,n)||(t=Op(),ye.lanes|=t,qr|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,on=!0),e.memoizedState=t)}function a0(e,n){var t=ue;ue=t!==0&&4>t?t:4,e(!0);var a=Zo.transition;Zo.transition={};try{e(!1),n()}finally{ue=t,Zo.transition=a}}function Tu(){return In().memoizedState}function i0(e,n,t){var a=Nr(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},Iu(e))Ru(n,t);else if(t=pu(e,n,t,a),t!==null){var i=nn();Mn(t,e,a,i),zu(t,n,a)}}function o0(e,n,t){var a=Nr(e),i={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(Iu(e))Ru(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,l=o(s,t);if(i.hasEagerState=!0,i.eagerState=l,_n(l,s)){var c=n.interleaved;c===null?(i.next=i,zl(n)):(i.next=c.next,c.next=i),n.interleaved=i;return}}catch{}finally{}t=pu(e,n,i,a),t!==null&&(i=nn(),Mn(t,e,a,i),zu(t,n,a))}}function Iu(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function Ru(e,n){oa=Fi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function zu(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,vl(e,t)}}var Ui={readContext:Tn,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},s0={readContext:Tn,useCallback:function(e,n){return Zn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Jc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,gi(4194308,4,Cu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return gi(4194308,4,e,n)},useInsertionEffect:function(e,n){return gi(4,2,e,n)},useMemo:function(e,n){var t=Zn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Zn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=i0.bind(null,ye,e),[a.memoizedState,e]},useRef:function(e){var n=Zn();return e={current:e},n.memoizedState=e},useState:Gc,useDebugValue:Fl,useDeferredValue:function(e){return Zn().memoizedState=e},useTransition:function(){var e=Gc(!1),n=e[0];return e=a0.bind(null,e[1]),Zn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=ye,i=Zn();if(ve){if(t===void 0)throw Error(I(407));t=t()}else{if(t=n(),_e===null)throw Error(I(349));Hr&30||gu(a,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Jc(vu.bind(null,a,o,e),[e]),a.flags|=2048,Na(9,xu.bind(null,a,o,t,n),void 0,null),t},useId:function(){var e=Zn(),n=_e.identifierPrefix;if(ve){var t=er,a=Xn;t=(a&~(1<<32-Pn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=ka++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=t0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},l0={readContext:Tn,useCallback:Su,useContext:Tn,useEffect:Bl,useImperativeHandle:Nu,useInsertionEffect:ju,useLayoutEffect:ku,useMemo:Eu,useReducer:Ko,useRef:wu,useState:function(){return Ko(Ca)},useDebugValue:Fl,useDeferredValue:function(e){var n=In();return Au(n,Le.memoizedState,e)},useTransition:function(){var e=Ko(Ca)[0],n=In().memoizedState;return[e,n]},useMutableSource:fu,useSyncExternalStore:mu,useId:Tu,unstable_isNewReconciler:!1},c0={readContext:Tn,useCallback:Su,useContext:Tn,useEffect:Bl,useImperativeHandle:Nu,useInsertionEffect:ju,useLayoutEffect:ku,useMemo:Eu,useReducer:Wo,useRef:wu,useState:function(){return Wo(Ca)},useDebugValue:Fl,useDeferredValue:function(e){var n=In();return Le===null?n.memoizedState=e:Au(n,Le.memoizedState,e)},useTransition:function(){var e=Wo(Ca)[0],n=In().memoizedState;return[e,n]},useMutableSource:fu,useSyncExternalStore:mu,useId:Tu,unstable_isNewReconciler:!1};function zn(e,n){if(e&&e.defaultProps){n=we({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Rs(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:we({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var oo={isMounted:function(e){return(e=e._reactInternals)?Qr(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=nn(),i=Nr(e),o=nr(a,i);o.payload=n,t!=null&&(o.callback=t),n=kr(e,o,i),n!==null&&(Mn(n,e,i,a),fi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=nn(),i=Nr(e),o=nr(a,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=kr(e,o,i),n!==null&&(Mn(n,e,i,a),fi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=nn(),a=Nr(e),i=nr(t,a);i.tag=2,n!=null&&(i.callback=n),n=kr(e,i,a),n!==null&&(Mn(n,e,a,t),fi(n,e,a))}};function Qc(e,n,t,a,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,s):n.prototype&&n.prototype.isPureReactComponent?!xa(t,a)||!xa(i,o):!0}function Ou(e,n,t){var a=!1,i=Tr,o=n.contextType;return typeof o=="object"&&o!==null?o=Tn(o):(i=ln(n)?Wr:Ye.current,a=n.contextTypes,o=(a=a!=null)?Ct(e,i):Tr),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=oo,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Xc(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&oo.enqueueReplaceState(n,n.state,null)}function zs(e,n,t,a){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ol(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Tn(o):(o=ln(n)?Wr:Ye.current,i.context=Ct(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Rs(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&oo.enqueueReplaceState(i,i.state,null),Vi(e,t,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function At(e,n){try{var t="",a=n;do t+=Mf(a),a=a.return;while(a);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function $o(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Os(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var d0=typeof WeakMap=="function"?WeakMap:Map;function Du(e,n,t){t=nr(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){Ki||(Ki=!0,Zs=a),Os(e,n)},t}function Lu(e,n,t){t=nr(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;t.payload=function(){return a(i)},t.callback=function(){Os(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Os(e,n),typeof a!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function ed(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new d0;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(i.add(t),e=C0.bind(null,e,n,t),n.then(e,e))}function nd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function rd(e,n,t,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=nr(-1,1),n.tag=2,kr(t,n,1))),t.lanes|=1),e)}var p0=or.ReactCurrentOwner,on=!1;function en(e,n,t,a){n.child=e===null?du(n,null,t,a):St(n,e.child,t,a)}function td(e,n,t,a,i){t=t.render;var o=n.ref;return wt(n,i),a=_l(e,n,t,a,o,i),t=Vl(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,ir(e,n,i)):(ve&&t&&Sl(n),n.flags|=1,en(e,n,a,i),n.child)}function ad(e,n,t,a,i){if(e===null){var o=t.type;return typeof o=="function"&&!Yl(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Pu(e,n,o,a,i)):(e=yi(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:xa,t(s,a)&&e.ref===n.ref)return ir(e,n,i)}return n.flags|=1,e=Sr(o,a),e.ref=n.ref,e.return=n,n.child=e}function Pu(e,n,t,a,i){if(e!==null){var o=e.memoizedProps;if(xa(o,a)&&e.ref===n.ref)if(on=!1,n.pendingProps=a=o,(e.lanes&i)!==0)e.flags&131072&&(on=!0);else return n.lanes=e.lanes,ir(e,n,i)}return Ds(e,n,t,a,i)}function Mu(e,n,t){var a=n.pendingProps,i=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(gt,hn),hn|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,fe(gt,hn),hn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:t,fe(gt,hn),hn|=a}else o!==null?(a=o.baseLanes|t,n.memoizedState=null):a=t,fe(gt,hn),hn|=a;return en(e,n,i,t),n.child}function _u(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ds(e,n,t,a,i){var o=ln(t)?Wr:Ye.current;return o=Ct(n,o),wt(n,i),t=_l(e,n,t,a,o,i),a=Vl(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,ir(e,n,i)):(ve&&a&&Sl(n),n.flags|=1,en(e,n,t,i),n.child)}function id(e,n,t,a,i){if(ln(t)){var o=!0;Di(n)}else o=!1;if(wt(n,i),n.stateNode===null)xi(e,n),Ou(n,t,a),zs(n,t,a,i),a=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var c=s.context,d=t.contextType;typeof d=="object"&&d!==null?d=Tn(d):(d=ln(t)?Wr:Ye.current,d=Ct(n,d));var p=t.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==a||c!==d)&&Xc(n,s,a,d),hr=!1;var m=n.memoizedState;s.state=m,Vi(n,a,s,i),c=n.memoizedState,l!==a||m!==c||sn.current||hr?(typeof p=="function"&&(Rs(n,t,p,a),c=n.memoizedState),(l=hr||Qc(n,t,l,a,m,c,d))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=c),s.props=a,s.state=c,s.context=d,a=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,uu(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:zn(n.type,l),s.props=d,h=n.pendingProps,m=s.context,c=t.contextType,typeof c=="object"&&c!==null?c=Tn(c):(c=ln(t)?Wr:Ye.current,c=Ct(n,c));var y=t.getDerivedStateFromProps;(p=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||m!==c)&&Xc(n,s,a,c),hr=!1,m=n.memoizedState,s.state=m,Vi(n,a,s,i);var x=n.memoizedState;l!==h||m!==x||sn.current||hr?(typeof y=="function"&&(Rs(n,t,y,a),x=n.memoizedState),(d=hr||Qc(n,t,d,a,m,x,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,x,c)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=x),s.props=a,s.state=x,s.context=c,a=d):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),a=!1)}return Ls(e,n,t,a,o,i)}function Ls(e,n,t,a,i,o){_u(e,n);var s=(n.flags&128)!==0;if(!a&&!s)return i&&Kc(n,t,!1),ir(e,n,o);a=n.stateNode,p0.current=n;var l=s&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&s?(n.child=St(n,e.child,null,o),n.child=St(n,null,l,o)):en(e,n,l,o),n.memoizedState=a.state,i&&Kc(n,t,!0),n.child}function Vu(e){var n=e.stateNode;n.pendingContext?Zc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Zc(e,n.context,!1),Dl(e,n.containerInfo)}function od(e,n,t,a,i){return Nt(),Al(i),n.flags|=256,en(e,n,t,a),n.child}var Ps={dehydrated:null,treeContext:null,retryLane:0};function Ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bu(e,n,t){var a=n.pendingProps,i=be.current,o=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),fe(be,i&1),e===null)return Ts(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=a.children,e=a.fallback,o?(a=n.mode,o=n.child,s={mode:"hidden",children:s},!(a&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=co(s,a,0,null),e=Zr(e,a,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Ms(t),n.memoizedState=Ps,e):Ul(n,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return u0(e,n,s,a,l,i,t);if(o){o=a.fallback,s=n.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:a.children};return!(s&1)&&n.child!==i?(a=n.child,a.childLanes=0,a.pendingProps=c,n.deletions=null):(a=Sr(i,c),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Sr(l,o):(o=Zr(o,s,t,null),o.flags|=2),o.return=n,a.return=n,a.sibling=o,n.child=a,a=o,o=n.child,s=e.child.memoizedState,s=s===null?Ms(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=Ps,a}return o=e.child,e=o.sibling,a=Sr(o,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Ul(e,n){return n=co({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ti(e,n,t,a){return a!==null&&Al(a),St(n,e.child,null,t),e=Ul(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function u0(e,n,t,a,i,o,s){if(t)return n.flags&256?(n.flags&=-257,a=$o(Error(I(422))),ti(e,n,s,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=a.fallback,i=n.mode,a=co({mode:"visible",children:a.children},i,0,null),o=Zr(o,i,s,null),o.flags|=2,a.return=n,o.return=n,a.sibling=o,n.child=a,n.mode&1&&St(n,e.child,null,s),n.child.memoizedState=Ms(s),n.memoizedState=Ps,o);if(!(n.mode&1))return ti(e,n,s,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,o=Error(I(419)),a=$o(o,a,void 0),ti(e,n,s,a)}if(l=(s&e.childLanes)!==0,on||l){if(a=_e,a!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ar(e,i),Mn(a,e,i,-1))}return ql(),a=$o(Error(I(421))),ti(e,n,s,a)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=N0.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,fn=jr(i.nextSibling),mn=n,ve=!0,Ln=null,e!==null&&(Nn[Sn++]=Xn,Nn[Sn++]=er,Nn[Sn++]=$r,Xn=e.id,er=e.overflow,$r=n),n=Ul(n,a.children),n.flags|=4096,n)}function sd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Is(e.return,n,t)}function Ho(e,n,t,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=i)}function Fu(e,n,t){var a=n.pendingProps,i=a.revealOrder,o=a.tail;if(en(e,n,a.children,t),a=be.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sd(e,t,n);else if(e.tag===19)sd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(fe(be,a),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Bi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ho(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Bi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ho(n,!0,t,null,o);break;case"together":Ho(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function xi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ir(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),qr|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(I(153));if(n.child!==null){for(e=n.child,t=Sr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Sr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function h0(e,n,t){switch(n.tag){case 3:Vu(n),Nt();break;case 5:hu(n);break;case 1:ln(n.type)&&Di(n);break;case 4:Dl(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,i=n.memoizedProps.value;fe(Mi,a._currentValue),a._currentValue=i;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(fe(be,be.current&1),n.flags|=128,null):t&n.child.childLanes?Bu(e,n,t):(fe(be,be.current&1),e=ir(e,n,t),e!==null?e.sibling:null);fe(be,be.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return Fu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(be,be.current),a)break;return null;case 22:case 23:return n.lanes=0,Mu(e,n,t)}return ir(e,n,t)}var Uu,_s,Zu,Ku;Uu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};_s=function(){};Zu=function(e,n,t,a){var i=e.memoizedProps;if(i!==a){e=n.stateNode,Br($n.current);var o=null;switch(t){case"input":i=os(e,i),a=os(e,a),o=[];break;case"select":i=we({},i,{value:void 0}),a=we({},a,{value:void 0}),o=[];break;case"textarea":i=cs(e,i),a=cs(e,a),o=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=zi)}ps(t,a);var s;t=null;for(d in i)if(!a.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(s in l)l.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(da.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in a){var c=a[d];if(l=i!=null?i[d]:void 0,a.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(t||(t={}),t[s]=c[s])}else t||(o||(o=[]),o.push(d,t)),t=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(da.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&me("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}t&&(o=o||[]).push("style",t);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};Ku=function(e,n,t,a){t!==a&&(n.flags|=4)};function $t(e,n){if(!ve)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function f0(e,n,t){var a=n.pendingProps;switch(El(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return ln(n.type)&&Oi(),$e(n),null;case 3:return a=n.stateNode,Et(),ge(sn),ge(Ye),Pl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ni(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ln!==null&&($s(Ln),Ln=null))),_s(e,n),$e(n),null;case 5:Ll(n);var i=Br(ja.current);if(t=n.type,e!==null&&n.stateNode!=null)Zu(e,n,t,a,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(I(166));return $e(n),null}if(e=Br($n.current),ni(n)){a=n.stateNode,t=n.type;var o=n.memoizedProps;switch(a[Kn]=n,a[ya]=o,e=(n.mode&1)!==0,t){case"dialog":me("cancel",a),me("close",a);break;case"iframe":case"object":case"embed":me("load",a);break;case"video":case"audio":for(i=0;i<ea.length;i++)me(ea[i],a);break;case"source":me("error",a);break;case"img":case"image":case"link":me("error",a),me("load",a);break;case"details":me("toggle",a);break;case"input":gc(a,o),me("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},me("invalid",a);break;case"textarea":vc(a,o),me("invalid",a)}ps(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?a.textContent!==l&&(o.suppressHydrationWarning!==!0&&ei(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ei(a.textContent,l,e),i=["children",""+l]):da.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&me("scroll",a)}switch(t){case"input":$a(a),xc(a,o,!0);break;case"textarea":$a(a),bc(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=zi)}a=i,n.updateQueue=a,a!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vp(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(t,{is:a.is}):(e=s.createElement(t),t==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,t),e[Kn]=n,e[ya]=a,Uu(e,n,!1,!1),n.stateNode=e;e:{switch(s=us(t,a),t){case"dialog":me("cancel",e),me("close",e),i=a;break;case"iframe":case"object":case"embed":me("load",e),i=a;break;case"video":case"audio":for(i=0;i<ea.length;i++)me(ea[i],e);i=a;break;case"source":me("error",e),i=a;break;case"img":case"image":case"link":me("error",e),me("load",e),i=a;break;case"details":me("toggle",e),i=a;break;case"input":gc(e,a),i=os(e,a),me("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=we({},a,{value:void 0}),me("invalid",e);break;case"textarea":vc(e,a),i=cs(e,a),me("invalid",e);break;default:i=a}ps(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?wp(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&bp(e,c)):o==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&pa(e,c):typeof c=="number"&&pa(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(da.hasOwnProperty(o)?c!=null&&o==="onScroll"&&me("scroll",e):c!=null&&ul(e,o,c,s))}switch(t){case"input":$a(e),xc(e,a,!1);break;case"textarea":$a(e),bc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Ar(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?xt(e,!!a.multiple,o,!1):a.defaultValue!=null&&xt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zi)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return $e(n),null;case 6:if(e&&n.stateNode!=null)Ku(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(I(166));if(t=Br(ja.current),Br($n.current),ni(n)){if(a=n.stateNode,t=n.memoizedProps,a[Kn]=n,(o=a.nodeValue!==t)&&(e=mn,e!==null))switch(e.tag){case 3:ei(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ei(a.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Kn]=n,n.stateNode=a}return $e(n),null;case 13:if(ge(be),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&fn!==null&&n.mode&1&&!(n.flags&128))lu(),Nt(),n.flags|=98560,o=!1;else if(o=ni(n),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[Kn]=n}else Nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;$e(n),o=!1}else Ln!==null&&($s(Ln),Ln=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||be.current&1?Pe===0&&(Pe=3):ql())),n.updateQueue!==null&&(n.flags|=4),$e(n),null);case 4:return Et(),_s(e,n),e===null&&va(n.stateNode.containerInfo),$e(n),null;case 10:return Rl(n.type._context),$e(n),null;case 17:return ln(n.type)&&Oi(),$e(n),null;case 19:if(ge(be),o=n.memoizedState,o===null)return $e(n),null;if(a=(n.flags&128)!==0,s=o.rendering,s===null)if(a)$t(o,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Bi(e),s!==null){for(n.flags|=128,$t(o,!1),a=s.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)o=t,e=a,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return fe(be,be.current&1|2),n.child}e=e.sibling}o.tail!==null&&Ae()>Tt&&(n.flags|=128,a=!0,$t(o,!1),n.lanes=4194304)}else{if(!a)if(e=Bi(s),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),$t(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ve)return $e(n),null}else 2*Ae()-o.renderingStartTime>Tt&&t!==1073741824&&(n.flags|=128,a=!0,$t(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Ae(),n.sibling=null,t=be.current,fe(be,a?t&1|2:t&1),n):($e(n),null);case 22:case 23:return Hl(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?hn&1073741824&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),null;case 24:return null;case 25:return null}throw Error(I(156,n.tag))}function m0(e,n){switch(El(n),n.tag){case 1:return ln(n.type)&&Oi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Et(),ge(sn),ge(Ye),Pl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ll(n),null;case 13:if(ge(be),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(I(340));Nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ge(be),null;case 4:return Et(),null;case 10:return Rl(n.type._context),null;case 22:case 23:return Hl(),null;case 24:return null;default:return null}}var ai=!1,He=!1,g0=typeof WeakSet=="function"?WeakSet:Set,B=null;function mt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){ke(e,n,a)}else t.current=null}function Vs(e,n,t){try{t()}catch(a){ke(e,n,a)}}var ld=!1;function x0(e,n){if(js=Ti,e=Yp(),Nl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,l=-1,c=-1,d=0,p=0,h=e,m=null;n:for(;;){for(var y;h!==t||i!==0&&h.nodeType!==3||(l=s+i),h!==o||a!==0&&h.nodeType!==3||(c=s+a),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)m=h,h=y;for(;;){if(h===e)break n;if(m===t&&++d===i&&(l=s),m===o&&++p===a&&(c=s),(y=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=y}t=l===-1||c===-1?null:{start:l,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(ks={focusedElem:e,selectionRange:t},Ti=!1,B=n;B!==null;)if(n=B,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,B=e;else for(;B!==null;){n=B;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,w=x.memoizedState,f=n.stateNode,u=f.getSnapshotBeforeUpdate(n.elementType===n.type?g:zn(n.type,g),w);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var b=n.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(k){ke(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,B=e;break}B=n.return}return x=ld,ld=!1,x}function sa(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Vs(n,t,o)}i=i.next}while(i!==a)}}function so(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function Bs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wu(e){var n=e.alternate;n!==null&&(e.alternate=null,Wu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Kn],delete n[ya],delete n[Ss],delete n[Xm],delete n[e0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $u(e){return e.tag===5||e.tag===3||e.tag===4}function cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zi));else if(a!==4&&(e=e.child,e!==null))for(Fs(e,n,t),e=e.sibling;e!==null;)Fs(e,n,t),e=e.sibling}function Us(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Us(e,n,t),e=e.sibling;e!==null;)Us(e,n,t),e=e.sibling}var Be=null,On=!1;function dr(e,n,t){for(t=t.child;t!==null;)Hu(e,n,t),t=t.sibling}function Hu(e,n,t){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(Xi,t)}catch{}switch(t.tag){case 5:He||mt(t,n);case 6:var a=Be,i=On;Be=null,dr(e,n,t),Be=a,On=i,Be!==null&&(On?(e=Be,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Be.removeChild(t.stateNode));break;case 18:Be!==null&&(On?(e=Be,t=t.stateNode,e.nodeType===8?Bo(e.parentNode,t):e.nodeType===1&&Bo(e,t),ma(e)):Bo(Be,t.stateNode));break;case 4:a=Be,i=On,Be=t.stateNode.containerInfo,On=!0,dr(e,n,t),Be=a,On=i;break;case 0:case 11:case 14:case 15:if(!He&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Vs(t,n,s),i=i.next}while(i!==a)}dr(e,n,t);break;case 1:if(!He&&(mt(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){ke(t,n,l)}dr(e,n,t);break;case 21:dr(e,n,t);break;case 22:t.mode&1?(He=(a=He)||t.memoizedState!==null,dr(e,n,t),He=a):dr(e,n,t);break;default:dr(e,n,t)}}function dd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new g0),n.forEach(function(a){var i=S0.bind(null,e,a);t.has(a)||(t.add(a),a.then(i,i))})}}function Rn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];try{var o=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,On=!1;break e;case 3:Be=l.stateNode.containerInfo,On=!0;break e;case 4:Be=l.stateNode.containerInfo,On=!0;break e}l=l.return}if(Be===null)throw Error(I(160));Hu(o,s,i),Be=null,On=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){ke(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)qu(n,e),n=n.sibling}function qu(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rn(n,e),Fn(e),a&4){try{sa(3,e,e.return),so(3,e)}catch(g){ke(e,e.return,g)}try{sa(5,e,e.return)}catch(g){ke(e,e.return,g)}}break;case 1:Rn(n,e),Fn(e),a&512&&t!==null&&mt(t,t.return);break;case 5:if(Rn(n,e),Fn(e),a&512&&t!==null&&mt(t,t.return),e.flags&32){var i=e.stateNode;try{pa(i,"")}catch(g){ke(e,e.return,g)}}if(a&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&gp(i,o),us(l,s);var d=us(l,o);for(s=0;s<c.length;s+=2){var p=c[s],h=c[s+1];p==="style"?wp(i,h):p==="dangerouslySetInnerHTML"?bp(i,h):p==="children"?pa(i,h):ul(i,p,h,d)}switch(l){case"input":ss(i,o);break;case"textarea":xp(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?xt(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?xt(i,!!o.multiple,o.defaultValue,!0):xt(i,!!o.multiple,o.multiple?[]:"",!1))}i[ya]=o}catch(g){ke(e,e.return,g)}}break;case 6:if(Rn(n,e),Fn(e),a&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){ke(e,e.return,g)}}break;case 3:if(Rn(n,e),Fn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{ma(n.containerInfo)}catch(g){ke(e,e.return,g)}break;case 4:Rn(n,e),Fn(e);break;case 13:Rn(n,e),Fn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Wl=Ae())),a&4&&dd(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(He=(d=He)||p,Rn(n,e),He=d):Rn(n,e),Fn(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(B=e,p=e.child;p!==null;){for(h=B=p;B!==null;){switch(m=B,y=m.child,m.tag){case 0:case 11:case 14:case 15:sa(4,m,m.return);break;case 1:mt(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){a=m,t=m.return;try{n=a,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(g){ke(a,t,g)}}break;case 5:mt(m,m.return);break;case 22:if(m.memoizedState!==null){ud(h);continue}}y!==null?(y.return=m,B=y):ud(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=yp("display",s))}catch(g){ke(e,e.return,g)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(g){ke(e,e.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Rn(n,e),Fn(e),a&4&&dd(e);break;case 21:break;default:Rn(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if($u(t)){var a=t;break e}t=t.return}throw Error(I(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(pa(i,""),a.flags&=-33);var o=cd(e);Us(e,o,i);break;case 3:case 4:var s=a.stateNode.containerInfo,l=cd(e);Fs(e,l,s);break;default:throw Error(I(161))}}catch(c){ke(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function v0(e,n,t){B=e,Yu(e)}function Yu(e,n,t){for(var a=(e.mode&1)!==0;B!==null;){var i=B,o=i.child;if(i.tag===22&&a){var s=i.memoizedState!==null||ai;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||He;l=ai;var d=He;if(ai=s,(He=c)&&!d)for(B=i;B!==null;)s=B,c=s.child,s.tag===22&&s.memoizedState!==null?hd(i):c!==null?(c.return=s,B=c):hd(i);for(;o!==null;)B=o,Yu(o),o=o.sibling;B=i,ai=l,He=d}pd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,B=o):pd(e)}}function pd(e){for(;B!==null;){var n=B;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:He||so(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!He)if(t===null)a.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:zn(n.type,t.memoizedProps);a.componentDidUpdate(i,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Yc(n,o,a);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Yc(n,s,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&ma(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}He||n.flags&512&&Bs(n)}catch(m){ke(n,n.return,m)}}if(n===e){B=null;break}if(t=n.sibling,t!==null){t.return=n.return,B=t;break}B=n.return}}function ud(e){for(;B!==null;){var n=B;if(n===e){B=null;break}var t=n.sibling;if(t!==null){t.return=n.return,B=t;break}B=n.return}}function hd(e){for(;B!==null;){var n=B;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{so(4,n)}catch(c){ke(n,t,c)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var i=n.return;try{a.componentDidMount()}catch(c){ke(n,i,c)}}var o=n.return;try{Bs(n)}catch(c){ke(n,o,c)}break;case 5:var s=n.return;try{Bs(n)}catch(c){ke(n,s,c)}}}catch(c){ke(n,n.return,c)}if(n===e){B=null;break}var l=n.sibling;if(l!==null){l.return=n.return,B=l;break}B=n.return}}var b0=Math.ceil,Zi=or.ReactCurrentDispatcher,Zl=or.ReactCurrentOwner,An=or.ReactCurrentBatchConfig,le=0,_e=null,Re=null,Fe=0,hn=0,gt=Rr(0),Pe=0,Sa=null,qr=0,lo=0,Kl=0,la=null,an=null,Wl=0,Tt=1/0,Jn=null,Ki=!1,Zs=null,Cr=null,ii=!1,xr=null,Wi=0,ca=0,Ks=null,vi=-1,bi=0;function nn(){return le&6?Ae():vi!==-1?vi:vi=Ae()}function Nr(e){return e.mode&1?le&2&&Fe!==0?Fe&-Fe:r0.transition!==null?(bi===0&&(bi=Op()),bi):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Bp(e.type)),e):1}function Mn(e,n,t,a){if(50<ca)throw ca=0,Ks=null,Error(I(185));Ra(e,t,a),(!(le&2)||e!==_e)&&(e===_e&&(!(le&2)&&(lo|=t),Pe===4&&mr(e,Fe)),cn(e,a),t===1&&le===0&&!(n.mode&1)&&(Tt=Ae()+500,ao&&zr()))}function cn(e,n){var t=e.callbackNode;rm(e,n);var a=Ai(e,e===_e?Fe:0);if(a===0)t!==null&&jc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&jc(t),n===1)e.tag===0?n0(fd.bind(null,e)):iu(fd.bind(null,e)),Jm(function(){!(le&6)&&zr()}),t=null;else{switch(Dp(a)){case 1:t=xl;break;case 4:t=Rp;break;case 16:t=Ei;break;case 536870912:t=zp;break;default:t=Ei}t=th(t,Gu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Gu(e,n){if(vi=-1,bi=0,le&6)throw Error(I(327));var t=e.callbackNode;if(jt()&&e.callbackNode!==t)return null;var a=Ai(e,e===_e?Fe:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=$i(e,a);else{n=a;var i=le;le|=2;var o=Qu();(_e!==e||Fe!==n)&&(Jn=null,Tt=Ae()+500,Ur(e,n));do try{j0();break}catch(l){Ju(e,l)}while(!0);Il(),Zi.current=o,le=i,Re!==null?n=0:(_e=null,Fe=0,n=Pe)}if(n!==0){if(n===2&&(i=xs(e),i!==0&&(a=i,n=Ws(e,i))),n===1)throw t=Sa,Ur(e,0),mr(e,a),cn(e,Ae()),t;if(n===6)mr(e,a);else{if(i=e.current.alternate,!(a&30)&&!y0(i)&&(n=$i(e,a),n===2&&(o=xs(e),o!==0&&(a=o,n=Ws(e,o))),n===1))throw t=Sa,Ur(e,0),mr(e,a),cn(e,Ae()),t;switch(e.finishedWork=i,e.finishedLanes=a,n){case 0:case 1:throw Error(I(345));case 2:Mr(e,an,Jn);break;case 3:if(mr(e,a),(a&130023424)===a&&(n=Wl+500-Ae(),10<n)){if(Ai(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){nn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ns(Mr.bind(null,e,an,Jn),n);break}Mr(e,an,Jn);break;case 4:if(mr(e,a),(a&4194240)===a)break;for(n=e.eventTimes,i=-1;0<a;){var s=31-Pn(a);o=1<<s,s=n[s],s>i&&(i=s),a&=~o}if(a=i,a=Ae()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*b0(a/1960))-a,10<a){e.timeoutHandle=Ns(Mr.bind(null,e,an,Jn),a);break}Mr(e,an,Jn);break;case 5:Mr(e,an,Jn);break;default:throw Error(I(329))}}}return cn(e,Ae()),e.callbackNode===t?Gu.bind(null,e):null}function Ws(e,n){var t=la;return e.current.memoizedState.isDehydrated&&(Ur(e,n).flags|=256),e=$i(e,n),e!==2&&(n=an,an=t,n!==null&&$s(n)),e}function $s(e){an===null?an=e:an.push.apply(an,e)}function y0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var i=t[a],o=i.getSnapshot;i=i.value;try{if(!_n(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mr(e,n){for(n&=~Kl,n&=~lo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Pn(n),a=1<<t;e[t]=-1,n&=~a}}function fd(e){if(le&6)throw Error(I(327));jt();var n=Ai(e,0);if(!(n&1))return cn(e,Ae()),null;var t=$i(e,n);if(e.tag!==0&&t===2){var a=xs(e);a!==0&&(n=a,t=Ws(e,a))}if(t===1)throw t=Sa,Ur(e,0),mr(e,n),cn(e,Ae()),t;if(t===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Mr(e,an,Jn),cn(e,Ae()),null}function $l(e,n){var t=le;le|=1;try{return e(n)}finally{le=t,le===0&&(Tt=Ae()+500,ao&&zr())}}function Yr(e){xr!==null&&xr.tag===0&&!(le&6)&&jt();var n=le;le|=1;var t=An.transition,a=ue;try{if(An.transition=null,ue=1,e)return e()}finally{ue=a,An.transition=t,le=n,!(le&6)&&zr()}}function Hl(){hn=gt.current,ge(gt)}function Ur(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Gm(t)),Re!==null)for(t=Re.return;t!==null;){var a=t;switch(El(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Oi();break;case 3:Et(),ge(sn),ge(Ye),Pl();break;case 5:Ll(a);break;case 4:Et();break;case 13:ge(be);break;case 19:ge(be);break;case 10:Rl(a.type._context);break;case 22:case 23:Hl()}t=t.return}if(_e=e,Re=e=Sr(e.current,null),Fe=hn=n,Pe=0,Sa=null,Kl=lo=qr=0,an=la=null,Vr!==null){for(n=0;n<Vr.length;n++)if(t=Vr[n],a=t.interleaved,a!==null){t.interleaved=null;var i=a.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,a.next=s}t.pending=a}Vr=null}return e}function Ju(e,n){do{var t=Re;try{if(Il(),mi.current=Ui,Fi){for(var a=ye.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Fi=!1}if(Hr=0,Me=Le=ye=null,oa=!1,ka=0,Zl.current=null,t===null||t.return===null){Pe=1,Sa=n,Re=null;break}e:{var o=e,s=t.return,l=t,c=n;if(n=Fe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=nd(s);if(y!==null){y.flags&=-257,rd(y,s,l,o,n),y.mode&1&&ed(o,d,n),n=y,c=d;var x=n.updateQueue;if(x===null){var g=new Set;g.add(c),n.updateQueue=g}else x.add(c);break e}else{if(!(n&1)){ed(o,d,n),ql();break e}c=Error(I(426))}}else if(ve&&l.mode&1){var w=nd(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),rd(w,s,l,o,n),Al(At(c,l));break e}}o=c=At(c,l),Pe!==4&&(Pe=2),la===null?la=[o]:la.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=Du(o,c,n);qc(o,f);break e;case 1:l=c;var u=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Cr===null||!Cr.has(b)))){o.flags|=65536,n&=-n,o.lanes|=n;var k=Lu(o,l,n);qc(o,k);break e}}o=o.return}while(o!==null)}eh(t)}catch(E){n=E,Re===t&&t!==null&&(Re=t=t.return);continue}break}while(!0)}function Qu(){var e=Zi.current;return Zi.current=Ui,e===null?Ui:e}function ql(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),_e===null||!(qr&268435455)&&!(lo&268435455)||mr(_e,Fe)}function $i(e,n){var t=le;le|=2;var a=Qu();(_e!==e||Fe!==n)&&(Jn=null,Ur(e,n));do try{w0();break}catch(i){Ju(e,i)}while(!0);if(Il(),le=t,Zi.current=a,Re!==null)throw Error(I(261));return _e=null,Fe=0,Pe}function w0(){for(;Re!==null;)Xu(Re)}function j0(){for(;Re!==null&&!Hf();)Xu(Re)}function Xu(e){var n=rh(e.alternate,e,hn);e.memoizedProps=e.pendingProps,n===null?eh(e):Re=n,Zl.current=null}function eh(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=m0(t,n),t!==null){t.flags&=32767,Re=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Re=null;return}}else if(t=f0(t,n,hn),t!==null){Re=t;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);Pe===0&&(Pe=5)}function Mr(e,n,t){var a=ue,i=An.transition;try{An.transition=null,ue=1,k0(e,n,t,a)}finally{An.transition=i,ue=a}return null}function k0(e,n,t,a){do jt();while(xr!==null);if(le&6)throw Error(I(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(tm(e,o),e===_e&&(Re=_e=null,Fe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ii||(ii=!0,th(Ei,function(){return jt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=An.transition,An.transition=null;var s=ue;ue=1;var l=le;le|=4,Zl.current=null,x0(e,t),qu(t,e),Zm(ks),Ti=!!js,ks=js=null,e.current=t,v0(t),qf(),le=l,ue=s,An.transition=o}else e.current=t;if(ii&&(ii=!1,xr=e,Wi=i),o=e.pendingLanes,o===0&&(Cr=null),Jf(t.stateNode),cn(e,Ae()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],a(i.value,{componentStack:i.stack,digest:i.digest});if(Ki)throw Ki=!1,e=Zs,Zs=null,e;return Wi&1&&e.tag!==0&&jt(),o=e.pendingLanes,o&1?e===Ks?ca++:(ca=0,Ks=e):ca=0,zr(),null}function jt(){if(xr!==null){var e=Dp(Wi),n=An.transition,t=ue;try{if(An.transition=null,ue=16>e?16:e,xr===null)var a=!1;else{if(e=xr,xr=null,Wi=0,le&6)throw Error(I(331));var i=le;for(le|=4,B=e.current;B!==null;){var o=B,s=o.child;if(B.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(B=d;B!==null;){var p=B;switch(p.tag){case 0:case 11:case 15:sa(8,p,o)}var h=p.child;if(h!==null)h.return=p,B=h;else for(;B!==null;){p=B;var m=p.sibling,y=p.return;if(Wu(p),p===d){B=null;break}if(m!==null){m.return=y,B=m;break}B=y}}}var x=o.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}B=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,B=s;else e:for(;B!==null;){if(o=B,o.flags&2048)switch(o.tag){case 0:case 11:case 15:sa(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,B=f;break e}B=o.return}}var u=e.current;for(B=u;B!==null;){s=B;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,B=b;else e:for(s=u;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:so(9,l)}}catch(E){ke(l,l.return,E)}if(l===s){B=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,B=k;break e}B=l.return}}if(le=i,zr(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(Xi,e)}catch{}a=!0}return a}finally{ue=t,An.transition=n}}return!1}function md(e,n,t){n=At(t,n),n=Du(e,n,1),e=kr(e,n,1),n=nn(),e!==null&&(Ra(e,1,n),cn(e,n))}function ke(e,n,t){if(e.tag===3)md(e,e,t);else for(;n!==null;){if(n.tag===3){md(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Cr===null||!Cr.has(a))){e=At(t,e),e=Lu(n,e,1),n=kr(n,e,1),e=nn(),n!==null&&(Ra(n,1,e),cn(n,e));break}}n=n.return}}function C0(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=nn(),e.pingedLanes|=e.suspendedLanes&t,_e===e&&(Fe&t)===t&&(Pe===4||Pe===3&&(Fe&130023424)===Fe&&500>Ae()-Wl?Ur(e,0):Kl|=t),cn(e,n)}function nh(e,n){n===0&&(e.mode&1?(n=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):n=1);var t=nn();e=ar(e,n),e!==null&&(Ra(e,n,t),cn(e,t))}function N0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),nh(e,t)}function S0(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(I(314))}a!==null&&a.delete(n),nh(e,t)}var rh;rh=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||sn.current)on=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return on=!1,h0(e,n,t);on=!!(e.flags&131072)}else on=!1,ve&&n.flags&1048576&&ou(n,Pi,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;xi(e,n),e=n.pendingProps;var i=Ct(n,Ye.current);wt(n,t),i=_l(null,n,a,e,i,t);var o=Vl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ln(a)?(o=!0,Di(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ol(n),i.updater=oo,n.stateNode=i,i._reactInternals=n,zs(n,a,e,t),n=Ls(null,n,a,!0,o,t)):(n.tag=0,ve&&o&&Sl(n),en(null,n,i,t),n=n.child),n;case 16:a=n.elementType;e:{switch(xi(e,n),e=n.pendingProps,i=a._init,a=i(a._payload),n.type=a,i=n.tag=A0(a),e=zn(a,e),i){case 0:n=Ds(null,n,a,e,t);break e;case 1:n=id(null,n,a,e,t);break e;case 11:n=td(null,n,a,e,t);break e;case 14:n=ad(null,n,a,zn(a.type,e),t);break e}throw Error(I(306,a,""))}return n;case 0:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:zn(a,i),Ds(e,n,a,i,t);case 1:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:zn(a,i),id(e,n,a,i,t);case 3:e:{if(Vu(n),e===null)throw Error(I(387));a=n.pendingProps,o=n.memoizedState,i=o.element,uu(e,n),Vi(n,a,null,t);var s=n.memoizedState;if(a=s.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=At(Error(I(423)),n),n=od(e,n,a,t,i);break e}else if(a!==i){i=At(Error(I(424)),n),n=od(e,n,a,t,i);break e}else for(fn=jr(n.stateNode.containerInfo.firstChild),mn=n,ve=!0,Ln=null,t=du(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Nt(),a===i){n=ir(e,n,t);break e}en(e,n,a,t)}n=n.child}return n;case 5:return hu(n),e===null&&Ts(n),a=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Cs(a,i)?s=null:o!==null&&Cs(a,o)&&(n.flags|=32),_u(e,n),en(e,n,s,t),n.child;case 6:return e===null&&Ts(n),null;case 13:return Bu(e,n,t);case 4:return Dl(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=St(n,null,a,t):en(e,n,a,t),n.child;case 11:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:zn(a,i),td(e,n,a,i,t);case 7:return en(e,n,n.pendingProps,t),n.child;case 8:return en(e,n,n.pendingProps.children,t),n.child;case 12:return en(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,fe(Mi,a._currentValue),a._currentValue=s,o!==null)if(_n(o.value,s)){if(o.children===i.children&&!sn.current){n=ir(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===a){if(o.tag===1){c=nr(-1,t&-t),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),Is(o.return,t,n),l.lanes|=t;break}c=c.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Is(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}en(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,a=n.pendingProps.children,wt(n,t),i=Tn(i),a=a(i),n.flags|=1,en(e,n,a,t),n.child;case 14:return a=n.type,i=zn(a,n.pendingProps),i=zn(a.type,i),ad(e,n,a,i,t);case 15:return Pu(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:zn(a,i),xi(e,n),n.tag=1,ln(a)?(e=!0,Di(n)):e=!1,wt(n,t),Ou(n,a,i),zs(n,a,i,t),Ls(null,n,a,!0,e,t);case 19:return Fu(e,n,t);case 22:return Mu(e,n,t)}throw Error(I(156,n.tag))};function th(e,n){return Ip(e,n)}function E0(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(e,n,t,a){return new E0(e,n,t,a)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function A0(e){if(typeof e=="function")return Yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fl)return 11;if(e===ml)return 14}return 2}function Sr(e,n){var t=e.alternate;return t===null?(t=En(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function yi(e,n,t,a,i,o){var s=2;if(a=e,typeof e=="function")Yl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ot:return Zr(t.children,i,o,n);case hl:s=8,i|=8;break;case rs:return e=En(12,t,n,i|2),e.elementType=rs,e.lanes=o,e;case ts:return e=En(13,t,n,i),e.elementType=ts,e.lanes=o,e;case as:return e=En(19,t,n,i),e.elementType=as,e.lanes=o,e;case hp:return co(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pp:s=10;break e;case up:s=9;break e;case fl:s=11;break e;case ml:s=14;break e;case ur:s=16,a=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return n=En(s,t,n,i),n.elementType=e,n.type=a,n.lanes=o,n}function Zr(e,n,t,a){return e=En(7,e,a,n),e.lanes=t,e}function co(e,n,t,a){return e=En(22,e,a,n),e.elementType=hp,e.lanes=t,e.stateNode={isHidden:!1},e}function qo(e,n,t){return e=En(6,e,null,n),e.lanes=t,e}function Yo(e,n,t){return n=En(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function T0(e,n,t,a,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=To(0),this.expirationTimes=To(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gl(e,n,t,a,i,o,s,l,c){return e=new T0(e,n,t,l,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=En(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(o),e}function I0(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:it,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function ah(e){if(!e)return Tr;e=e._reactInternals;e:{if(Qr(e)!==e||e.tag!==1)throw Error(I(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ln(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(I(171))}if(e.tag===1){var t=e.type;if(ln(t))return au(e,t,n)}return n}function ih(e,n,t,a,i,o,s,l,c){return e=Gl(t,a,!0,e,i,o,s,l,c),e.context=ah(null),t=e.current,a=nn(),i=Nr(t),o=nr(a,i),o.callback=n??null,kr(t,o,i),e.current.lanes=i,Ra(e,i,a),cn(e,a),e}function po(e,n,t,a){var i=n.current,o=nn(),s=Nr(i);return t=ah(t),n.context===null?n.context=t:n.pendingContext=t,n=nr(o,s),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=kr(i,n,s),e!==null&&(Mn(e,i,s,o),fi(e,i,s)),s}function Hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Jl(e,n){gd(e,n),(e=e.alternate)&&gd(e,n)}function R0(){return null}var oh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ql(e){this._internalRoot=e}uo.prototype.render=Ql.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(I(409));po(e,n,null,null)};uo.prototype.unmount=Ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yr(function(){po(null,e,null,null)}),n[tr]=null}};function uo(e){this._internalRoot=e}uo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Mp();e={blockedOn:null,target:e,priority:n};for(var t=0;t<fr.length&&n!==0&&n<fr[t].priority;t++);fr.splice(t,0,e),t===0&&Vp(e)}};function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xd(){}function z0(e,n,t,a,i){if(i){if(typeof a=="function"){var o=a;a=function(){var d=Hi(s);o.call(d)}}var s=ih(n,a,e,0,null,!1,!1,"",xd);return e._reactRootContainer=s,e[tr]=s.current,va(e.nodeType===8?e.parentNode:e),Yr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var d=Hi(c);l.call(d)}}var c=Gl(e,0,!1,null,null,!1,!1,"",xd);return e._reactRootContainer=c,e[tr]=c.current,va(e.nodeType===8?e.parentNode:e),Yr(function(){po(n,c,t,a)}),c}function fo(e,n,t,a,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Hi(s);l.call(c)}}po(n,s,e,i)}else s=z0(t,n,e,i,a);return Hi(s)}Lp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Xt(n.pendingLanes);t!==0&&(vl(n,t|1),cn(n,Ae()),!(le&6)&&(Tt=Ae()+500,zr()))}break;case 13:Yr(function(){var a=ar(e,1);if(a!==null){var i=nn();Mn(a,e,1,i)}}),Jl(e,1)}};bl=function(e){if(e.tag===13){var n=ar(e,134217728);if(n!==null){var t=nn();Mn(n,e,134217728,t)}Jl(e,134217728)}};Pp=function(e){if(e.tag===13){var n=Nr(e),t=ar(e,n);if(t!==null){var a=nn();Mn(t,e,n,a)}Jl(e,n)}};Mp=function(){return ue};_p=function(e,n){var t=ue;try{return ue=e,n()}finally{ue=t}};fs=function(e,n,t){switch(n){case"input":if(ss(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=to(a);if(!i)throw Error(I(90));mp(a),ss(a,i)}}}break;case"textarea":xp(e,t);break;case"select":n=t.value,n!=null&&xt(e,!!t.multiple,n,!1)}};Cp=$l;Np=Yr;var O0={usingClientEntryPoint:!1,Events:[Oa,dt,to,jp,kp,$l]},Ht={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D0={bundleType:Ht.bundleType,version:Ht.version,rendererPackageName:Ht.rendererPackageName,rendererConfig:Ht.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ap(e),e===null?null:e.stateNode},findFiberByHostInstance:Ht.findFiberByHostInstance||R0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oi.isDisabled&&oi.supportsFiber)try{Xi=oi.inject(D0),Wn=oi}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;xn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xl(n))throw Error(I(200));return I0(e,n,null,t)};xn.createRoot=function(e,n){if(!Xl(e))throw Error(I(299));var t=!1,a="",i=oh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Gl(e,1,!1,null,null,t,!1,a,i),e[tr]=n.current,va(e.nodeType===8?e.parentNode:e),new Ql(n)};xn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Ap(n),e=e===null?null:e.stateNode,e};xn.flushSync=function(e){return Yr(e)};xn.hydrate=function(e,n,t){if(!ho(n))throw Error(I(200));return fo(null,e,n,!0,t)};xn.hydrateRoot=function(e,n,t){if(!Xl(e))throw Error(I(405));var a=t!=null&&t.hydratedSources||null,i=!1,o="",s=oh;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=ih(n,null,e,1,t??null,i,!1,o,s),e[tr]=n.current,va(e),a)for(e=0;e<a.length;e++)t=a[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new uo(n)};xn.render=function(e,n,t){if(!ho(n))throw Error(I(200));return fo(null,e,n,!1,t)};xn.unmountComponentAtNode=function(e){if(!ho(e))throw Error(I(40));return e._reactRootContainer?(Yr(function(){fo(null,null,e,!1,function(){e._reactRootContainer=null,e[tr]=null})}),!0):!1};xn.unstable_batchedUpdates=$l;xn.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!ho(t))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return fo(e,n,t,!1,a)};xn.version="18.3.1-next-f1338f8080-20240426";function sh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sh)}catch(e){console.error(e)}}sh(),sp.exports=xn;var L0=sp.exports,lh,vd=L0;lh=vd.createRoot,vd.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ea(){return Ea=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ea.apply(this,arguments)}var vr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vr||(vr={}));const bd="popstate";function P0(e){e===void 0&&(e={});function n(a,i){let{pathname:o,search:s,hash:l}=a.location;return Hs("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(a,i){return typeof i=="string"?i:qi(i)}return _0(n,t,null,e)}function Te(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ch(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function M0(){return Math.random().toString(36).substr(2,8)}function yd(e,n){return{usr:e.state,key:e.key,idx:n}}function Hs(e,n,t,a){return t===void 0&&(t=null),Ea({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Dt(n):n,{state:t,key:n&&n.key||a||M0()})}function qi(e){let{pathname:n="/",search:t="",hash:a=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function Dt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function _0(e,n,t,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,s=i.history,l=vr.Pop,c=null,d=p();d==null&&(d=0,s.replaceState(Ea({},s.state,{idx:d}),""));function p(){return(s.state||{idx:null}).idx}function h(){l=vr.Pop;let w=p(),f=w==null?null:w-d;d=w,c&&c({action:l,location:g.location,delta:f})}function m(w,f){l=vr.Push;let u=Hs(g.location,w,f);d=p()+1;let b=yd(u,d),k=g.createHref(u);try{s.pushState(b,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(k)}o&&c&&c({action:l,location:g.location,delta:1})}function y(w,f){l=vr.Replace;let u=Hs(g.location,w,f);d=p();let b=yd(u,d),k=g.createHref(u);s.replaceState(b,"",k),o&&c&&c({action:l,location:g.location,delta:0})}function x(w){let f=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof w=="string"?w:qi(w);return u=u.replace(/ $/,"%20"),Te(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let g={get action(){return l},get location(){return e(i,s)},listen(w){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(bd,h),c=w,()=>{i.removeEventListener(bd,h),c=null}},createHref(w){return n(i,w)},createURL:x,encodeLocation(w){let f=x(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:y,go(w){return s.go(w)}};return g}var wd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wd||(wd={}));function V0(e,n,t){return t===void 0&&(t="/"),B0(e,n,t)}function B0(e,n,t,a){let i=typeof n=="string"?Dt(n):n,o=ec(i.pathname||"/",t);if(o==null)return null;let s=dh(e);F0(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let d=X0(o);l=G0(s[c],d)}return l}function dh(e,n,t,a){n===void 0&&(n=[]),t===void 0&&(t=[]),a===void 0&&(a="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(Te(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=Er([a,c.relativePath]),p=t.concat(c);o.children&&o.children.length>0&&(Te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),dh(o.children,n,p,d)),!(o.path==null&&!o.index)&&n.push({path:d,score:q0(d,o.index),routesMeta:p})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of ph(o.path))i(o,s,c)}),n}function ph(e){let n=e.split("/");if(n.length===0)return[];let[t,...a]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(a.length===0)return i?[o,""]:[o];let s=ph(a.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function F0(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Y0(n.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}const U0=/^:[\w-]+$/,Z0=3,K0=2,W0=1,$0=10,H0=-2,jd=e=>e==="*";function q0(e,n){let t=e.split("/"),a=t.length;return t.some(jd)&&(a+=H0),n&&(a+=K0),t.filter(i=>!jd(i)).reduce((i,o)=>i+(U0.test(o)?Z0:o===""?W0:$0),a)}function Y0(e,n){return e.length===n.length&&e.slice(0,-1).every((a,i)=>a===n[i])?e[e.length-1]-n[n.length-1]:0}function G0(e,n,t){let{routesMeta:a}=e,i={},o="/",s=[];for(let l=0;l<a.length;++l){let c=a[l],d=l===a.length-1,p=o==="/"?n:n.slice(o.length)||"/",h=J0({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),m=c.route;if(!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:Er([o,h.pathname]),pathnameBase:tg(Er([o,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(o=Er([o,h.pathnameBase]))}return s}function J0(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,a]=Q0(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((d,p,h)=>{let{paramName:m,isOptional:y}=p;if(m==="*"){let g=l[h]||"";s=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const x=l[h];return y&&!x?d[m]=void 0:d[m]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:e}}function Q0(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ch(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(a.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),a]}function X0(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ch(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ec(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,a=e.charAt(t);return a&&a!=="/"?null:e.slice(t)||"/"}function eg(e,n){n===void 0&&(n="/");let{pathname:t,search:a="",hash:i=""}=typeof e=="string"?Dt(e):e;return{pathname:t?t.startsWith("/")?t:ng(t,n):n,search:ag(a),hash:ig(i)}}function ng(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Go(e,n,t,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function nc(e,n){let t=rg(e);return n?t.map((a,i)=>i===t.length-1?a.pathname:a.pathnameBase):t.map(a=>a.pathnameBase)}function rc(e,n,t,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=Dt(e):(i=Ea({},e),Te(!i.pathname||!i.pathname.includes("?"),Go("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),Go("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),Go("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=t;else{let h=n.length-1;if(!a&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}l=h>=0?n[h]:"/"}let c=eg(i,l),d=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const Er=e=>e.join("/").replace(/\/\/+/g,"/"),tg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ag=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ig=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function og(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uh=["post","put","patch","delete"];new Set(uh);const sg=["get",...uh];new Set(sg);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Aa.apply(this,arguments)}const tc=v.createContext(null),lg=v.createContext(null),Or=v.createContext(null),mo=v.createContext(null),Dr=v.createContext({outlet:null,matches:[],isDataRoute:!1}),hh=v.createContext(null);function cg(e,n){let{relative:t}=n===void 0?{}:n;Lt()||Te(!1);let{basename:a,navigator:i}=v.useContext(Or),{hash:o,pathname:s,search:l}=mh(e,{relative:t}),c=s;return a!=="/"&&(c=s==="/"?a:Er([a,s])),i.createHref({pathname:c,search:l,hash:o})}function Lt(){return v.useContext(mo)!=null}function Hn(){return Lt()||Te(!1),v.useContext(mo).location}function fh(e){v.useContext(Or).static||v.useLayoutEffect(e)}function Pt(){let{isDataRoute:e}=v.useContext(Dr);return e?jg():dg()}function dg(){Lt()||Te(!1);let e=v.useContext(tc),{basename:n,future:t,navigator:a}=v.useContext(Or),{matches:i}=v.useContext(Dr),{pathname:o}=Hn(),s=JSON.stringify(nc(i,t.v7_relativeSplatPath)),l=v.useRef(!1);return fh(()=>{l.current=!0}),v.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){a.go(d);return}let h=rc(d,JSON.parse(s),o,p.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:Er([n,h.pathname])),(p.replace?a.replace:a.push)(h,p.state,p)},[n,a,s,o,e])}function mh(e,n){let{relative:t}=n===void 0?{}:n,{future:a}=v.useContext(Or),{matches:i}=v.useContext(Dr),{pathname:o}=Hn(),s=JSON.stringify(nc(i,a.v7_relativeSplatPath));return v.useMemo(()=>rc(e,JSON.parse(s),o,t==="path"),[e,s,o,t])}function pg(e,n){return ug(e,n)}function ug(e,n,t,a){Lt()||Te(!1);let{navigator:i}=v.useContext(Or),{matches:o}=v.useContext(Dr),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=Hn(),p;if(n){var h;let w=typeof n=="string"?Dt(n):n;c==="/"||(h=w.pathname)!=null&&h.startsWith(c)||Te(!1),p=w}else p=d;let m=p.pathname||"/",y=m;if(c!=="/"){let w=c.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(w.length).join("/")}let x=V0(e,{pathname:y}),g=xg(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Er([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:Er([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,t,a);return n&&g?v.createElement(mo.Provider,{value:{location:Aa({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:vr.Pop}},g):g}function hg(){let e=wg(),n=og(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},n),t?v.createElement("pre",{style:i},t):null,null)}const fg=v.createElement(hg,null);class mg extends v.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?v.createElement(Dr.Provider,{value:this.props.routeContext},v.createElement(hh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gg(e){let{routeContext:n,match:t,children:a}=e,i=v.useContext(tc);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(Dr.Provider,{value:n},a)}function xg(e,n,t,a){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),a===void 0&&(a=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=a)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let s=e,l=(i=t)==null?void 0:i.errors;if(l!=null){let p=s.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);p>=0||Te(!1),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(t&&a&&a.v7_partialHydration)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=p),h.route.id){let{loaderData:m,errors:y}=t,x=h.route.loader&&m[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||x){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,h,m)=>{let y,x=!1,g=null,w=null;t&&(y=l&&h.route.id?l[h.route.id]:void 0,g=h.route.errorElement||fg,c&&(d<0&&m===0?(kg("route-fallback"),x=!0,w=null):d===m&&(x=!0,w=h.route.hydrateFallbackElement||null)));let f=n.concat(s.slice(0,m+1)),u=()=>{let b;return y?b=g:x?b=w:h.route.Component?b=v.createElement(h.route.Component,null):h.route.element?b=h.route.element:b=p,v.createElement(gg,{match:h,routeContext:{outlet:p,matches:f,isDataRoute:t!=null},children:b})};return t&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?v.createElement(mg,{location:t.location,revalidation:t.revalidation,component:g,error:y,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var gh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(gh||{}),xh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(xh||{});function vg(e){let n=v.useContext(tc);return n||Te(!1),n}function bg(e){let n=v.useContext(lg);return n||Te(!1),n}function yg(e){let n=v.useContext(Dr);return n||Te(!1),n}function vh(e){let n=yg(),t=n.matches[n.matches.length-1];return t.route.id||Te(!1),t.route.id}function wg(){var e;let n=v.useContext(hh),t=bg(),a=vh();return n!==void 0?n:(e=t.errors)==null?void 0:e[a]}function jg(){let{router:e}=vg(gh.UseNavigateStable),n=vh(xh.UseNavigateStable),t=v.useRef(!1);return fh(()=>{t.current=!0}),v.useCallback(function(i,o){o===void 0&&(o={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Aa({fromRouteId:n},o)))},[e,n])}const kd={};function kg(e,n,t){kd[e]||(kd[e]=!0)}function Cg(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ve(e){let{to:n,replace:t,state:a,relative:i}=e;Lt()||Te(!1);let{future:o,static:s}=v.useContext(Or),{matches:l}=v.useContext(Dr),{pathname:c}=Hn(),d=Pt(),p=rc(n,nc(l,o.v7_relativeSplatPath),c,i==="path"),h=JSON.stringify(p);return v.useEffect(()=>d(JSON.parse(h),{replace:t,state:a,relative:i}),[d,h,i,t,a]),null}function te(e){Te(!1)}function Ng(e){let{basename:n="/",children:t=null,location:a,navigationType:i=vr.Pop,navigator:o,static:s=!1,future:l}=e;Lt()&&Te(!1);let c=n.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:o,static:s,future:Aa({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof a=="string"&&(a=Dt(a));let{pathname:p="/",search:h="",hash:m="",state:y=null,key:x="default"}=a,g=v.useMemo(()=>{let w=ec(p,c);return w==null?null:{location:{pathname:w,search:h,hash:m,state:y,key:x},navigationType:i}},[c,p,h,m,y,x,i]);return g==null?null:v.createElement(Or.Provider,{value:d},v.createElement(mo.Provider,{children:t,value:g}))}function Sg(e){let{children:n,location:t}=e;return pg(qs(n),t)}new Promise(()=>{});function qs(e,n){n===void 0&&(n=[]);let t=[];return v.Children.forEach(e,(a,i)=>{if(!v.isValidElement(a))return;let o=[...n,i];if(a.type===v.Fragment){t.push.apply(t,qs(a.props.children,o));return}a.type!==te&&Te(!1),!a.props.index||!a.props.children||Te(!1);let s={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=qs(a.props.children,o)),t.push(s)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ys(){return Ys=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ys.apply(this,arguments)}function Eg(e,n){if(e==null)return{};var t={},a=Object.keys(e),i,o;for(o=0;o<a.length;o++)i=a[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function Ag(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Tg(e,n){return e.button===0&&(!n||n==="_self")&&!Ag(e)}const Ig=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Rg="6";try{window.__reactRouterVersion=Rg}catch{}const zg="startTransition",Cd=Cf[zg];function Og(e){let{basename:n,children:t,future:a,window:i}=e,o=v.useRef();o.current==null&&(o.current=P0({window:i,v5Compat:!0}));let s=o.current,[l,c]=v.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},p=v.useCallback(h=>{d&&Cd?Cd(()=>c(h)):c(h)},[c,d]);return v.useLayoutEffect(()=>s.listen(p),[s,p]),v.useEffect(()=>Cg(a),[a]),v.createElement(Ng,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:s,future:a})}const Dg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,R=v.forwardRef(function(n,t){let{onClick:a,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:d,preventScrollReset:p,viewTransition:h}=n,m=Eg(n,Ig),{basename:y}=v.useContext(Or),x,g=!1;if(typeof d=="string"&&Lg.test(d)&&(x=d,Dg))try{let b=new URL(window.location.href),k=d.startsWith("//")?new URL(b.protocol+d):new URL(d),E=ec(k.pathname,y);k.origin===b.origin&&E!=null?d=E+k.search+k.hash:g=!0}catch{}let w=cg(d,{relative:i}),f=Pg(d,{replace:s,state:l,target:c,preventScrollReset:p,relative:i,viewTransition:h});function u(b){a&&a(b),b.defaultPrevented||f(b)}return v.createElement("a",Ys({},m,{href:x||w,onClick:g||o?a:u,ref:t,target:c}))});var Nd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nd||(Nd={}));var Sd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sd||(Sd={}));function Pg(e,n){let{target:t,replace:a,state:i,preventScrollReset:o,relative:s,viewTransition:l}=n===void 0?{}:n,c=Pt(),d=Hn(),p=mh(e,{relative:s});return v.useCallback(h=>{if(Tg(h,t)){h.preventDefault();let m=a!==void 0?a:qi(d)===qi(p);c(e,{replace:m,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[d,c,p,a,i,t,e,o,s,l])}function bn(){v.useEffect(()=>{const e=document.getElementById("areas-toggle"),n=[];if(e){const t=a=>{a.preventDefault(),e.parentElement&&e.parentElement.classList.toggle("open")};e.addEventListener("click",t),n.push(()=>e.removeEventListener("click",t))}return()=>{n.forEach(t=>{try{t()}catch{}})}},[])}function Mg(){v.useEffect(()=>{const e=document.getElementById("splash"),n=document.getElementById("splashLogo"),t=document.getElementById("app"),a=()=>{if(e)try{e.classList.add("splash--hide"),e.setAttribute("aria-hidden","true"),e.style.display="none",e.style.pointerEvents="none"}catch{}};try{e&&(e.classList.remove("splash--hide"),e.removeAttribute("aria-hidden"),e.style.display="",e.style.pointerEvents="")}catch{}if((()=>{try{return sessionStorage.getItem("koop_hasVisited")==="1"}catch{return!1}})()||document.documentElement.classList.contains("skip-splash")){a(),t&&(t.style.opacity="1");return}const s=2500,l=800,c=performance.now();function d(){n&&(n.offsetWidth,n.classList.add("is-visible"))}function p(){if(t)if(t.style.opacity="0",t.offsetHeight,t.animate){const g=t.animate([{opacity:0},{opacity:1}],{duration:800,easing:"ease",fill:"forwards"});g.onfinish=()=>{t.style.opacity="1"}}else t.style.transition="opacity 0.8s ease",requestAnimationFrame(()=>{t.style.opacity="1"})}function h(){const g=performance.now()-c,w=Math.max(0,s-g);setTimeout(()=>{p(),e&&e.classList.add("splash--hide"),setTimeout(()=>{a();try{sessionStorage.setItem("koop_hasVisited","1")}catch{}document.documentElement.classList.add("skip-splash")},l)},w)}async function m(){try{n&&"decode"in n?await n.decode():n&&!n.complete&&await new Promise(g=>n.addEventListener("load",g,{once:!0}))}catch{}d(),h()}const y=g=>{g.persisted&&(a(),t&&(t.style.opacity="1"))};window.addEventListener("pageshow",y),m();const x=setTimeout(()=>{const g=document.getElementById("splash");if(g&&document.body.contains(g))try{g.classList.add("splash--hide"),g.setAttribute("aria-hidden","true"),g.style.display="none",g.style.pointerEvents="none"}catch{}},7e3);return()=>{window.removeEventListener("pageshow",y),clearTimeout(x)}},[])}function yn(){const e=Pt(),n=Hn(),t=i=>{const o="/"+(i||"").split("/").filter(Boolean).pop(),s={"/index.html":"/","/derecho.html":"/derecho","/contabilidad.html":"/contabilidad","/auditoria.html":"/auditoria","/derecho-administrativo.html":"/derecho-administrativo","/derecho-familia.html":"/derecho-familia","/derecho-laboral.html":"/derecho-laboral","/derecho-penal.html":"/derecho-penal","/impuestos.html":"/impuestos","/planeacion-patrimonial.html":"/asesoria-contable","/planeacion-patrimonial":"/asesoria-contable","/privacidad.html":"/privacidad","/politica-privacidad.html":"/privacidad","/tramites-notariales.html":"/tramites-notariales","/acciones-de-tutela.html":"/acciones-de-tutela"};return s[i]||s[o]||i},a=()=>{var i;(i=document.querySelectorAll("a[href]"))==null||i.forEach(o=>{try{const s=o.getAttribute("href")||"";if(/^https?:\/\//i.test(s)&&new URL(s).origin!==window.location.origin)return;const l=new URL(s,window.location.href);if(l.origin!==window.location.origin)return;let c=t(l.pathname)+l.search+l.hash;/^\/index\.html#/i.test(c)&&(c=c.replace(/^\/index\.html#/i,"/#"));const d=o.getAttribute("href");c&&c!==d&&o.setAttribute("href",c)}catch{}})};v.useEffect(()=>{const i=Array.from(document.querySelectorAll(".page-transition")),o=()=>{i.forEach(p=>p.classList.remove("is-active"))};o(),requestAnimationFrame(o),setTimeout(o,0);const s=p=>{p.persisted&&o()},l=()=>o();window.addEventListener("pageshow",s),window.addEventListener("focus",l);function c(p){if(!p||!p.href)return!1;try{const y=p.classList;if(y&&y.contains("drop-btn")||p.id==="areas-toggle")return!1}catch{}if(p.target&&p.target.toLowerCase()==="_blank")return!1;const h=p.getAttribute("href");if(!h||h.startsWith("#")||h.startsWith("mailto:")||h.startsWith("tel:"))return!1;const m=new URL(p.href,window.location.href);return!(m.hostname!==window.location.hostname||m.pathname===window.location.pathname&&m.hash)}a();const d=p=>{const h=p.target&&p.target.closest?p.target.closest("a"):null;if(h&&(h.classList&&h.classList.contains("drop-btn")||h.id==="areas-toggle")||!h||!c(h)||p.metaKey||p.ctrlKey||p.shiftKey||p.altKey||p.button!==0)return;p.preventDefault();const m=i.some(x=>{try{return getComputedStyle(x).display!=="none"}catch{return!1}});m&&i.forEach(x=>x.classList.add("is-active"));const y=()=>{try{const x=new URL(h.href,window.location.href),g=t(x.pathname)+x.search+x.hash,w=window.location.pathname+window.location.search+window.location.hash;try{window.__KOOP_FADE_ARRIVAL=!0}catch{}try{e(g)}catch{}setTimeout(()=>{window.location.pathname+window.location.search+window.location.hash===w&&window.location.assign(g)},50)}catch{window.location.assign(h.href)}};m?setTimeout(y,600):y()};return document.addEventListener("click",d,!0),()=>{window.removeEventListener("pageshow",s),window.removeEventListener("focus",l),document.removeEventListener("click",d,!0)}},[]),v.useLayoutEffect(()=>{if(!n.hash){const i=()=>{try{window.scrollTo(0,0)}catch{}try{document.documentElement.scrollTop=0}catch{}try{document.body.scrollTop=0}catch{}};i(),requestAnimationFrame(i),setTimeout(i,0),setTimeout(i,50),setTimeout(i,150)}},[n.pathname,n.search,n.hash]),v.useEffect(()=>{Array.from(document.querySelectorAll(".page-transition")).forEach(l=>l.classList.remove("is-active"));const i=document.getElementById("splash"),o=!!(i&&getComputedStyle(i).display!=="none"&&!i.classList.contains("splash--hide"));if(!o){document.documentElement.classList.add("skip-splash");const l=document.getElementById("app");l?(l.style.opacity="1",l.style.transition=""):document.body.style.opacity="1"}if(!o&&!!(typeof window<"u"&&window.__KOOP_FADE_ARRIVAL)){try{const l=document.documentElement;l.classList.remove("route-fade-in"),l.offsetWidth,l.classList.add("route-fade-in"),setTimeout(()=>{try{l.classList.remove("route-fade-in")}catch{}},280)}catch{}try{window.__KOOP_FADE_ARRIVAL=!1}catch{}}try{a()}catch{}},[n.pathname,n.search,n.hash]),v.useEffect(()=>{if(!n.hash)return;const i=(n.hash||"").replace(/^#/,""),o=()=>{try{const p=document.getElementById(i)||document.querySelector(n.hash);if(p&&p.scrollIntoView)return p.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"}),!0}catch{}return!1};if(o())return;const s=requestAnimationFrame(o),l=setTimeout(o,0),c=setTimeout(o,120),d=setTimeout(o,300);return()=>{cancelAnimationFrame(s),clearTimeout(l),clearTimeout(c),clearTimeout(d)}},[n.pathname,n.hash])}function _g(){v.useEffect(()=>{const e=document.querySelectorAll(".labor-card[data-images]"),n=[];return e.forEach(t=>{const a=(t.dataset.images||"").split(",").map(s=>s.trim()).filter(Boolean);if(a.length<2)return;let i=0;const o=setInterval(()=>{const s=(i+1)%a.length,l=document.createElement("div");l.className="labor-card-fade",l.style.backgroundImage=`url('${a[s]}')`,t.appendChild(l),requestAnimationFrame(()=>{l.style.opacity="1"}),setTimeout(()=>{t.style.setProperty("--bg",`url('${a[s]}')`);try{l.remove()}catch{}i=s},1e3)},3e3);n.push(o)}),()=>{n.forEach(t=>clearInterval(t)),document.querySelectorAll(".labor-card-fade").forEach(t=>{try{t.remove()}catch{}})}},[])}function wn(){v.useEffect(()=>{const e=n=>!n||typeof n!="string"?n:n.replace(/url\(\s*'img\//gi,"url('/img/").replace(/url\(\s*"img\//gi,'url("/img/').replace(/url\(\s*img\//gi,"url(/img/");document.querySelectorAll("[style]").forEach(n=>{try{const t=n.style.getPropertyValue("--bg");if(t&&/url\(/i.test(t)){const a=e(t);a!==t&&n.style.setProperty("--bg",a)}}catch{}}),document.querySelectorAll("[data-images]").forEach(n=>{const t=n.getAttribute("data-images");if(!t)return;const i=t.split(",").map(o=>o.trim()).filter(Boolean).map(o=>o.replace(/^img\//i,"/img/")).join(",");i!==t&&n.setAttribute("data-images",i)})},[location.pathname,location.search,location.hash])}function jn(e){if(!e||typeof e!="string")return"";const n=e.replace(/<noscript[\s\S]*?<\/noscript>/gi,""),t=[],a=/<style\b[^>]*>([\s\S]*?)<\/style>/gi;let i;for(;i=a.exec(n);){const s=i[1]||"";s.trim()&&t.push(s.trim())}return t.join(`

`).replace(/url\(\s*(['\"]?)img\//gi,"url($1/img/").replace(/url\(\s*(['\"]?)(?!\/|https?:|data:)([^'"\)]+?\.(?:png|jpe?g|svg|gif|webp|ico))\1\s*\)/gi,(s,l,c)=>`url(${l}/${c}${l})`)}const Vg=`<!DOCTYPE html>\r
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
`,Bg=()=>{bn(),Mg(),yn(),_g();const e=jn(Vg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsx("div",{id:"splash",className:"splash","aria-hidden":"true",children:r.jsx("div",{className:"splash__frame",children:r.jsx("img",{id:"splashLogo",className:"splash__logo",src:"/Koop%20Logo.png",alt:"Koop Strategic Advisory"})})}),r.jsxs("div",{id:"app",children:[r.jsxs("div",{className:"hero-section hero--home",id:"inicio",children:[r.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:r.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),r.jsx("div",{className:"hero-overlay"}),r.jsx("div",{className:"hero-content",children:r.jsxs("div",{className:"hero-box",children:[r.jsx("div",{className:"hero-title",children:"KOOP es Bogotá, es excelencia académica"}),r.jsxs("div",{className:"hero-subtitle",children:["Expertos en Derecho Administrativo,",r.jsx("br",{})," Penal, Laboral y Médico"]}),r.jsxs("div",{className:"hero-desc",children:["Equipo de abogados y contadores con experiencia. ",r.jsx("br",{}),"Brindamos consultoría estratégica para empresas y personas naturales."]}),r.jsx("a",{className:"cta-btn",href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20:",children:"Solicita tu consulta"})]})})]}),r.jsx("section",{className:"areas-section",id:"areas",children:r.jsxs("div",{className:"areas-container",children:[r.jsxs("div",{className:"areas-title",children:[r.jsx("span",{className:"areas-title-bold",children:"ÁREAS DE"})," ",r.jsx("span",{className:"areas-title-normal",children:"PRÁCTICA"})]}),r.jsxs("div",{className:"areas-cards",children:[r.jsx("a",{href:"/derecho",className:"labor-card",style:{"--bg":"url('/img/paloquemao.png')"},"data-images":"/img/paloquemao.png,/img/saladecasacionlaboral.png,/img/tramitesnotariales.png,/img/sexuales.png,/img/fiscalia.png",children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("div",{className:"labor-card-title",children:"Derecho"}),r.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})}),r.jsx("a",{href:"/contabilidad",className:"labor-card",style:{"--bg":"url('/img/auditoria.jpg')"},"data-images":"/img/auditoria.jpg,/img/impuestos-en-colombia.jpg,/img/que_es_la_contabilidad.jpeg",children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("div",{className:"labor-card-title",children:"Contabilidad"}),r.jsx("div",{className:"labor-card-btn",children:"Ingresar"})]})})]})]})}),r.jsx("section",{className:"vision-section",id:"vision",children:r.jsxs("div",{className:"vision-container",children:[r.jsxs("h2",{className:"vision-title",children:[r.jsx("span",{className:"vision-bold",children:"NUESTRA"})," VISIÓN"]}),r.jsxs("div",{className:"vision-text",children:[r.jsx("p",{children:"En Koop Strategic Advisory, nuestra visión es consolidarnos como la firma de referencia en servicios jurídicos, contables y de consultoría empresarial, reconocidos por nuestra ética, innovación y excelencia. Nos apasiona acompañar a empresas y personas en la toma de decisiones estratégicas que les permitan crecer, proteger sus intereses y transformar sus proyectos en resultados sostenibles."}),r.jsx("p",{children:"Trabajamos bajo un enfoque multidisciplinario, integrando conocimientos legales, contables y de auditoría para ofrecer soluciones integrales y personalizadas. Nuestro equipo está comprometido con la actualización permanente, la confianza y el trato directo con cada cliente."}),r.jsx("p",{children:"Buscamos construir relaciones de largo plazo basadas en la transparencia, el profesionalismo y el valor agregado, contribuyendo activamente al desarrollo empresarial y a la construcción de una sociedad más justa y eficiente."})]})]})}),r.jsx("section",{className:"full-img-section",children:r.jsx("img",{src:"/Corte suprema de justicia de colombia.jpg",alt:"Equipo empresarial Koop",className:"full-img"})}),r.jsxs("section",{className:"contact-section",id:"contacto",children:[r.jsx("div",{className:"contact-overlay"}),r.jsx("div",{className:"contact-container contact-modern",children:r.jsxs("div",{className:"contact-modern-content",children:[r.jsx("div",{className:"contact-title",style:{textAlign:"center"},children:"CONTÁCTANOS"}),r.jsx("div",{className:"contact-name",style:{textAlign:"center",color:"#fff"},children:"KOOP STRATEGIC ADVISORY"}),r.jsxs("div",{className:"contact-social contact-social-modern",children:[r.jsx("a",{href:"https://www.instagram.com/kooplawyers/",target:"_blank",className:"social-icon instagram",title:"Instagram",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",alt:"Instagram"})}),r.jsx("a",{href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",className:"social-icon facebook",title:"Facebook",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg",alt:"Facebook"})}),r.jsx("a",{href:"https://www.tiktok.com/@koop.co",target:"_blank",className:"social-icon tiktok",title:"TikTok",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg",alt:"TikTok"})}),r.jsx("a",{href:"https://wa.me/573137213878?text=Hola%20,%20deseo%20agendar%20cita%20",target:"_blank",className:"social-icon whatsapp",title:"WhatsApp",children:r.jsx("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg",alt:"WhatsApp"})})]}),r.jsx("div",{className:"contact-modern-text",children:"Atendemos consultas por cualquiera de nuestras redes sociales."})]})})]}),r.jsx("footer",{className:"site-footer",children:r.jsxs("div",{className:"footer-container",children:[r.jsx("div",{className:"footer-left",children:"© 2024 Creado por Koop Strategic Advisory"}),r.jsx("div",{className:"footer-right",children:r.jsx("a",{href:"/privacidad",target:"_blank",children:"Política de Privacidad"})})]})})]})," "]})},Fg=`<!DOCTYPE html>\r
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
`,bh="/assets/Despidoinjustificado-WBwGt-rg.jpg",Ug=()=>{bn(),yn();const e=jn(Fg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsx("section",{className:"labor-cards-section",id:"areas-derecho",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"DERECHO"}),r.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),r.jsx("p",{className:"labor-sub",children:"Asesoría integral en diversas ramas del derecho."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx(R,{to:"/derecho-penal",className:"labor-card",style:{"--bg":"url('/img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho Penal"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa y asesoría en procesos penales."})]})}),r.jsx(R,{to:"/derecho-laboral",className:"labor-card",style:{"--bg":`url(${bh})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho Laboral"]}),r.jsx("div",{className:"labor-card-desc",children:"Soluciones en derecho laboral y seguridad social."})]})}),r.jsx(R,{to:"/tramites-notariales",className:"labor-card",style:{"--bg":"url('img/tramitesnotariales.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Trámites notariales"]}),r.jsx("div",{className:"labor-card-desc",children:"Gestiones notariales rápidas y seguras."})]})}),r.jsx(R,{to:"/derecho-administrativo",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho Administrativo"]}),r.jsx("div",{className:"labor-card-desc",children:"Asesoría en procedimientos y litigios administrativos."})]})}),r.jsx(R,{to:"/derecho-familia",className:"labor-card",style:{"--bg":"url('/img/ninofamilia.webp')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Derecho de Familia"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámites administrativos y judiciales de familia."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsx("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:"WhatsApp"}),r.jsx("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:"Escríbenos"})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(R,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(R,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(R,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(R,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Áreas de Derecho"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(R,{to:"/derecho-penal",children:"Derecho penal"})}),r.jsx("li",{children:r.jsx(R,{to:"/derecho-laboral",children:"Derecho laboral"})}),r.jsx("li",{children:r.jsx(R,{to:"/tramites-notariales",children:"Trámites notariales"})}),r.jsx("li",{children:r.jsx(R,{to:"/derecho-administrativo",children:"Derecho administrativo"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx(R,{to:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Zg=`<!DOCTYPE html>\r
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
`,Kg=()=>{bn(),yn();const e=jn(Zg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsx("section",{className:"labor-cards-section",id:"subareas-contabilidad",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"CONTABILIDAD"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Selecciona la especialidad contable que necesitas."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"/auditoria",className:"labor-card",style:{"--bg":"url('img/auditoria.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Auditoría y Revisoría Fiscal"]}),r.jsx("div",{className:"labor-card-desc",children:"Supervisión financiera independiente."})]})}),r.jsx("a",{href:"/impuestos",className:"labor-card",style:{"--bg":"url('img/impuestos-en-colombia.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Impuestos y Planeación Tributaria"]}),r.jsx("div",{className:"labor-card-desc",children:"Consultoría y cumplimiento fiscal."})]})}),r.jsx("a",{href:"/asesoria-contable",className:"labor-card",style:{"--bg":"url('img/que_es_la_contabilidad.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SUBÁREA"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Asesoría Contable"]}),r.jsx("div",{className:"labor-card-desc",children:"Protección y optimización del patrimonio."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Soluciones integrales para tu empresa."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una Asesoría Contable?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20consultar%20los%20servicios%20contables:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Contabilidad%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(R,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(R,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(R,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(R,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios contables"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"/auditoria",children:"Auditoría y Revisoría Fiscal"})}),r.jsx("li",{children:r.jsx("a",{href:"/impuestos",children:"Impuestos y Planeación Tributaria"})}),r.jsx("li",{children:r.jsx("a",{href:"/asesoria-contable",children:"Asesoría Contable"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Wg=`<!DOCTYPE html>\r
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
`,$g=()=>{bn(),yn();const e=jn(Wg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Auditoría & Revisoría Fiscal",children:r.jsx("div",{className:"hero-headline",children:"Auditoría & Revisoría Fiscal"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-auditoria",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE AUDITORÍA & REVISORÍA FISCAL"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Supervisión independiente y aseguramiento financiero y contable."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#financiera",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Auditoría financiera"]}),r.jsx("div",{className:"labor-card-desc",children:"Opinión independiente sobre estados financieros."})]})}),r.jsx("a",{href:"#revisoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Revisoría fiscal permanente"]}),r.jsx("div",{className:"labor-card-desc",children:"Cumplimiento de obligaciones legales y societarias."})]})}),r.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Evaluación de control interno"]}),r.jsx("div",{className:"labor-card-desc",children:"Diagnósticos y recomendaciones."})]})}),r.jsx("a",{href:"#cumplimiento",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Cumplimiento normativo"]}),r.jsx("div",{className:"labor-card-desc",children:"Verificación de normas contables y fiscales."})]})}),r.jsx("a",{href:"#informes",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Informes especiales"]}),r.jsx("div",{className:"labor-card-desc",children:"Dictámenes sobre hechos particulares."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Control y transparencia para tu organización."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en auditoría & revisoría fiscal?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20auditor%C3%ADa%20y%20revisor%C3%ADa%20fiscal%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Auditor%C3%ADa%20y%20Revisor%C3%ADa%20Fiscal%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(R,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(R,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(R,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(R,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Auditoría financiera"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Revisoría fiscal permanente"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Evaluación de control interno"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Cumplimiento normativo"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Informes especiales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Hg=`<!DOCTYPE html>\r
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
`,qg=()=>{bn(),yn();const e=jn(Hg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/derecho-administrativo/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Consejo-deestado.avif')",backgroundPosition:"center 80%"},children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho Administrativo",children:r.jsx("div",{className:"hero-headline",children:"Derecho Administrativo"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-derecho-administrativo",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE DERECHO ADMINISTRATIVO"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Asesoría en trámites y procedimientos ante la administración pública."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#peticion",className:"labor-card",style:{"--bg":"url('img/Gestionurbana.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Gestión Urbanística"]}),r.jsx("div",{className:"labor-card-desc",children:"Asesorías en licencias y planeación urbanística."})]})}),r.jsx("a",{href:"#disciplinario",className:"labor-card",style:{"--bg":"url('img/Disci.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Procesos disciplinarios"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa ante investigaciones y sanciones."})]})}),r.jsx("a",{href:"#contratacion",className:"labor-card",style:{"--bg":"url('img/contrato estatal.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Contratación estatal"]}),r.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en etapas precontractuales y contractuales."})]})}),r.jsx("a",{href:"#nulidad",className:"labor-card",style:{"--bg":"url('img/Respfiscal.webp')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Procesos de responsabilidad fiscal"]}),r.jsx("div",{className:"labor-card-desc",children:"Conflictos derivados de administración de dineros públicos."})]})}),r.jsx("a",{href:"#conceptos",className:"labor-card",style:{"--bg":"url('img/Asesoria.webp')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Conceptos y asesorías administrativas"]}),r.jsx("div",{className:"labor-card-desc",children:"Elaboración de conceptos y respuestas a requerimientos."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Valoramos y resguardamos tus activos intangibles."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en derecho administrativo?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20concencioso%20administrativo%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20Administrativo%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(R,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(R,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(R,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(R,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Gestión Urbanística"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Procesos Disciplinarios"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Contratación Estatal"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Procesos de responsabilidad fiscal"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Conceptos y Asesorías Administrativas"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Yg=`<!DOCTYPE html>\r
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
`,Gg=()=>{bn(),yn();const e=jn(Yg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/ninofamilia.webp')",backgroundPosition:"center 30%"},children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho de Familia",children:r.jsx("div",{className:"hero-headline",children:"Derecho de Familia"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-familia",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE FAMILIA"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Asesoría integral en situaciones familiares: divorcios, custodia, alimentos y más."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#divorcio",className:"labor-card",style:{"--bg":"url('img/divorcio.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Divorcio y separación"]}),r.jsx("div",{className:"labor-card-desc",children:"Representación y acuerdos amistosos o judiciales."})]})}),r.jsx("a",{href:"#custodia",className:"labor-card",style:{"--bg":"url('img/Custodia.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Custodia y patria potestad"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa de los derechos de tus hijos y del núcleo familiar."})]})}),r.jsx("a",{href:"#alimentos",className:"labor-card",style:{"--bg":"url('img/alimentos.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Alimentos y pensión alimentaria"]}),r.jsx("div",{className:"labor-card-desc",children:"Fijación, modificación y cobro de cuotas alimentarias."})]})}),r.jsx("a",{href:"#sociedad",className:"labor-card",style:{"--bg":"url('img/Violencia.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Violencia intrafamiliar"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámite ante comisaría de familia o proceso penal ante fiscalía."})]})}),r.jsx("a",{href:"#comisariaseicbf",className:"labor-card",style:{"--bg":"url('img/Bienestar.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Trámites frente a ICBF o Comisarías de familia"]}),r.jsx("div",{className:"labor-card-desc",children:"Acompañamiento en procesos administrativos."})]})}),r.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales"]}),r.jsx("div",{className:"labor-card-desc",children:"Acuerdos patrimoniales previos al matrimonio o unión libre."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico y soluciones 360° para proteger tu núcleo familiar."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en derecho de familia?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20derecho%20de%20familia%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Derecho%20de%20Familia%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(R,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(R,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(R,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(R,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Divorcio y separación"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Custodia y patria potestad"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Alimentos y pensión alimentaria"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Violencia intrafamiliar"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Trámites frente a ICBF o Comisarías de familia"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573503965755",children:"+57 (350) 396 57 55"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},Jg=`<!DOCTYPE html>\r
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
`,Qg="/assets/liquidaciones-CLf4J2S8.jpeg",Xg="/assets/acoso-5lfYgMQE.jpg",e1="/assets/pensiones-Cse2TGmQ.jpg",n1="/assets/contratorealidad-CKG4Jjcw.png",r1=()=>{bn(),yn();const e=jn(Jg).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho Laboral y Seguridad Social",children:r.jsx("div",{className:"hero-headline",children:"Derecho Laboral y Seguridad Social"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-laborales",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS LABORALES"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Estrategia, representación y cumplimiento normativo en derecho laboral para empresas y trabajadores."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#contratorealidad",className:"labor-card",style:{"--bg":`url(${n1})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Contrato realidad"]}),r.jsx("div",{className:"labor-card-desc",children:"Reconocimiento del vínculo laboral y prestaciones."})]})}),r.jsx("a",{href:"#liquidaciones",className:"labor-card",style:{"--bg":`url(${Qg})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Mora en el pago de la liquidación"]}),r.jsx("div",{className:"labor-card-desc",children:"Cálculo, reclamación y verificación de pagos."})]})}),r.jsx("a",{href:"#acoso",className:"labor-card",style:{"--bg":`url(${Xg})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Acoso laboral"]}),r.jsx("div",{className:"labor-card-desc",children:"Comités, protocolos, evidencias y defensa."})]})}),r.jsx("a",{href:"#pensiones",className:"labor-card",style:{"--bg":`url(${e1})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Pensiones y seguridad social"]}),r.jsx("div",{className:"labor-card-desc",children:"Traslados, reliquidaciones y contingencias."})]})}),r.jsx("a",{href:"#reintegro",className:"labor-card",style:{"--bg":`url(${bh})`},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Reintegro laboral"]}),r.jsx("div",{className:"labor-card-desc",children:"Acciones de reintegro por despido ilegal o con fuero."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20laboral%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(R,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(R,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(R,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(R,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios laborales"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#despido",children:"Despido injustificado"})}),r.jsx("li",{children:r.jsx("a",{href:"#liquidaciones",children:"Liquidaciones y prestaciones"})}),r.jsx("li",{children:r.jsx("a",{href:"#acoso",children:"Acoso laboral"})}),r.jsx("li",{children:r.jsx("a",{href:"#pensiones",children:"Pensiones y seguridad social"})}),r.jsx("li",{children:r.jsx("a",{href:"#reintegro",children:"Reintegro laboral"})}),r.jsx("li",{children:r.jsx("a",{href:"#contratorealidad",children:"Contrato realidad"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},t1=`<!DOCTYPE html>\r
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
`,a1=()=>{bn(),yn();const e=jn(t1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Derecho Penal",children:r.jsx("div",{className:"hero-headline",children:"Derecho Penal"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS PENALES"}),r.jsx("h2",{className:"labor-title",children:"Confíe su caso a manos profesionales y con experiencia."}),r.jsx("p",{className:"labor-sub",children:"Representamos sus intereses con experiencia y conocimiento en el ámbito penal."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#audiencias",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Audiencias, medidas de aseguramiento y trámite penal"]}),r.jsx("div",{className:"labor-card-desc",children:"Protección de sus derechos durante todo el trámite penal, hasta sentencia."})]})}),r.jsx("a",{href:"#asesoria",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Asesoría y Representación Penal integral para Víctimas"]}),r.jsx("div",{className:"labor-card-desc",children:"Representación legal experta para víctimas, desde la denuncia hasta la indemnización."})]})}),r.jsx("a",{href:"#acompañamiento",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Acompañamiento en audiencias y fases procesales clave"]}),r.jsx("div",{className:"labor-card-desc",children:"Defensa en audiencias específicas. Consulte más acá."})]})}),r.jsx("a",{href:"#habeas",className:"labor-card",style:{"--bg":"url('img/habeas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Habeas corpus y libertades inmediatas"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámite inmediato para restablecer la libertad personal."})]})}),r.jsx("a",{href:"#defensa",className:"labor-card",style:{"--bg":"url('img/sexuales.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Defensa y Asesoría en Casos de Delitos Sexuales"]}),r.jsx("div",{className:"labor-card-desc",children:"Protección integral de derechos en investigaciones y juicios por delitos sexuales."})]})}),r.jsx("a",{href:"#control",className:"labor-card",style:{"--bg":"url('img/fiscalia.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Control y Seguimiento de Procesos en Fiscalía"]}),r.jsx("div",{className:"labor-card-desc",children:"Monitoreamos y gestionamos su proceso penal para evitar estancamientos y proteger sus derechos."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20asesor%C3%ADa%20penal%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(R,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(R,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(R,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(R,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios laborales"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#audiencias",children:"Audiencias, medidas de aseguramiento y trámite penal"})}),r.jsx("li",{children:r.jsx("a",{href:"#asesoria",children:"Asesoría y Representación Penal integral para Víctimas"})}),r.jsx("li",{children:r.jsx("a",{href:"#acompañamiento",children:"Acompañamiento en audiencias y fases procesales clave"})}),r.jsx("li",{children:r.jsx("a",{href:"#habeas",children:"Habeas corpus y libertades inmediatas"})}),r.jsx("li",{children:r.jsx("a",{href:"#defensa",children:"Defensa y Asesoría en Casos de Delitos Sexuales"})}),r.jsx("li",{children:r.jsx("a",{href:"#control",children:"Control y Seguimiento de Procesos en Fiscalía"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},i1=`<!DOCTYPE html>\r
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
`,o1=()=>{bn(),yn();const e=jn(i1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Impuestos",children:r.jsx("div",{className:"hero-headline",children:"Impuestos"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-impuestos",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE IMPUESTOS"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Consultoría tributaria y planeación fiscal para empresas y personas."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#planeacion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Planeación tributaria"]}),r.jsx("div",{className:"labor-card-desc",children:"Estructuras fiscales eficientes y legales."})]})}),r.jsx("a",{href:"#declaraciones",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Declaraciones y cumplimiento"]}),r.jsx("div",{className:"labor-card-desc",children:"Preparación y presentación oportuna de impuestos."})]})}),r.jsx("a",{href:"#dian",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Defensa ante la DIAN"]}),r.jsx("div",{className:"labor-card-desc",children:"Respuestas a requerimientos y litigios tributarios."})]})}),r.jsx("a",{href:"#transferencia",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Precios de transferencia"]}),r.jsx("div",{className:"labor-card-desc",children:"Estudios y documentación obligatoria."})]})}),r.jsx("a",{href:"#auditoria",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Auditoría fiscal"]}),r.jsx("div",{className:"labor-card-desc",children:"Revisión de obligaciones y contingencias."})]})}),r.jsx("a",{href:"#municipales",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Obligaciones municipales"]}),r.jsx("div",{className:"labor-card-desc",children:"Impuestos locales y de industria y comercio."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Optimización de obligaciones fiscales."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en impuestos?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20impuestos%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Impuestos%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(R,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(R,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(R,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(R,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Planeación tributaria"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Declaraciones y cumplimiento"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Defensa ante DIAN"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Precios de transferencia"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Auditoría fiscal"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Obligaciones municipales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},s1=`<!DOCTYPE html>\r
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
`,l1=()=>{bn(),yn();const e=jn(s1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Asesoría Contable",children:r.jsx("div",{className:"hero-headline",children:"Asesoría Contable"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/Acompañamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Estrategias sucesorales"]}),r.jsx("div",{className:"labor-card-desc",children:"Testamentos y planificación de herencias."})]})}),r.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/Victimas.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Fideicomisos y patrimonios autónomos"]}),r.jsx("div",{className:"labor-card-desc",children:"Estructuras para administrar bienes."})]})}),r.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Protocolos familiares"]}),r.jsx("div",{className:"labor-card-desc",children:"Reglas de gobierno y sucesión empresarial."})]})}),r.jsx("a",{href:"#fiscal",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Optimización fiscal del patrimonio"]}),r.jsx("div",{className:"labor-card-desc",children:"Reducción de cargas impositivas."})]})}),r.jsx("a",{href:"#portafolios",className:"labor-card",style:{"--bg":"url('img/Audiencias.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Administración de portafolios"]}),r.jsx("div",{className:"labor-card-desc",children:"Gestión de inversiones y activos."})]})}),r.jsx("a",{href:"#activos",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Protección de activos"]}),r.jsx("div",{className:"labor-card-desc",children:"Blindaje frente a riesgos y contingencias."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en Asesoría Contable?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(R,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(R,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(R,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(R,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Estrategias sucesorales"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Fideicomisos y patrimonios autónomos"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Protocolos familiares"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Optimización fiscal del patrimonio"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Administración de portafolios"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Protección de activos"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},c1=`<!DOCTYPE html>\r
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
`,d1=()=>{bn(),yn();const e=jn(c1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition"}),r.jsxs("main",{children:[r.jsx("h1",{children:"Política de Privacidad"}),r.jsx("p",{children:"Esta página describe las políticas de privacidad de Koop Strategic Advisory. Su contenido se actualizará próximamente."})]}),r.jsx("footer",{className:"site-footer",children:r.jsxs("div",{className:"footer-container",children:[r.jsxs("div",{className:"footer-left",children:["© ",r.jsx("span",{id:"year"})," Creado por Koop Strategic Advisory"]}),r.jsx("div",{className:"footer-right",children:r.jsx("a",{href:"/privacidad",children:"Política de Privacidad"})})]})})]})},p1=`<!DOCTYPE html>\r
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
`,u1=()=>{bn(),yn();const e=jn(p1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Trámites Notariales",children:r.jsx("div",{className:"hero-headline",children:"Trámites Notariales"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios penales",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS FRENTE A NOTARIA"}),r.jsx("h2",{className:"labor-title",children:"Su trámite notarial exprés."}),r.jsx("p",{className:"labor-sub",children:"Listo en tiempo récord, con total seguridad jurídica."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#compraventa",className:"labor-card",style:{"--bg":"url('img/compraventainmueble.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Compraventa de inmuebles."]}),r.jsx("div",{className:"labor-card-desc",children:"Con revisión de títulos y elaboración de minuta."})]})}),r.jsx("a",{href:"#constitucion",className:"labor-card",style:{"--bg":"url('img/constitucion.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Constitución, reforma o liquidación de sociedades"]}),r.jsx("div",{className:"labor-card-desc",children:"(S.A.S., LTDA., S.A., etc.)."})]})}),r.jsx("a",{href:"sucesiones",className:"labor-card",style:{"--bg":"url('img/sucesionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Sucesiones por causa de muerte"]}),r.jsx("div",{className:"labor-card-desc",children:"Realización de escrito de solicitud hasta elevación a escritura pública."})]})}),r.jsx("a",{href:"#capitulaciones",className:"labor-card",style:{"--bg":"url('img/capitulaciones.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Capitulaciones matrimoniales y liquidación de sociedad conyugal."]}),r.jsx("div",{className:"labor-card-desc",children:"Proteja su patrimonio y formalice acuerdos con respaldo legal."})]})}),r.jsx("a",{href:"#levantamiento",className:"labor-card",style:{"--bg":"url('img/levantamiento.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Levantamiento de hipotecas"]}),r.jsx("div",{className:"labor-card-desc",children:"Trámite de levantamiento exprés y sin dilaciones."})]})}),r.jsx("a",{href:"#donaciones",className:"labor-card",style:{"--bg":"url('img/donacionescambio.png')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Donaciones de bienes inmuebles"]}),r.jsx("div",{className:"labor-card-desc",children:"Transfiera su patrimonio con seguridad jurídica y sin contratiempos."})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Litigio estratégico, cumplimiento y soluciones 360° para la gestión del riesgo laboral."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría laboral hoy?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial Saludo%20Koop,%20deseo%20conocer%20los%20costos%20del%20siguiente%20proceso%20notarial:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Laboral%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(R,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(R,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(R,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(R,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios laborales"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#compraventa",children:"Compraventa de inmuebles"})}),r.jsx("li",{children:r.jsx("a",{href:"#constitucion",children:"Constitución, reforma o liquidación de sociedades"})}),r.jsx("li",{children:r.jsx("a",{href:"#sucesiones",children:"Sucesiones por causa de muerte"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales y liquidación de sociedad conyugal"})}),r.jsx("li",{children:r.jsx("a",{href:"#levantamiento",children:"Levantamiento de hipotecas"})}),r.jsx("li",{children:r.jsx("a",{href:"#donaciones",children:"Donaciones de bienes inmuebles"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},h1=`<!DOCTYPE html>\r
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
`,f1=()=>{bn(),yn();const e=jn(h1).replace(/url\(\s*(['"]?)img\//gi,"url($1/img/");return wn(),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:e}),r.jsx("div",{className:"page-transition","aria-hidden":"true"}),r.jsxs("section",{className:"hero-section",id:"inicio",style:{backgroundImage:"url('/img/Juezjuez.jpg')",backgroundPosition:"center 70%"},children:[r.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),r.jsx("div",{className:"hero-text","aria-label":"Acciones de tutela",children:r.jsx("div",{className:"hero-headline",children:"Acciones de tutela"})})]}),r.jsx("section",{className:"labor-cards-section",id:"servicios-planeacion",children:r.jsxs("div",{className:"labor-cards-container",children:[r.jsx("div",{className:"labor-tag",children:"SERVICIOS DE Asesoría Contable"}),r.jsx("h2",{className:"labor-title",children:"Cómo te ayudamos"}),r.jsx("p",{className:"labor-sub",children:"Estructuración, protección y gestión de patrimonios familiares y empresariales."}),r.jsxs("div",{className:"labor-grid",children:[r.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/tutelapeticion.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Tutela al Derecho de Petición"]}),r.jsx("div",{className:"labor-card-desc",children:"Para obtener respuestas de las autoridades."})]})}),r.jsx("a",{href:"#fideicomisos",className:"labor-card",style:{"--bg":"url('img/tutelasalud.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Tutela en  Salud"]}),r.jsx("div",{className:"labor-card-desc",children:"Somos expertos dentro del área de la salud, velamos por sus intereses."})]})}),r.jsx("a",{href:"#sucesion",className:"labor-card",style:{"--bg":"url('img/tuteladebido.jpeg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Revocatoria de decisiones judiciales"]}),r.jsx("div",{className:"labor-card-desc",children:"Por vulneración al debido proceso de acuerdo a la jurisprudencia procesal."})]})}),r.jsx("a",{href:"#protocolos",className:"labor-card",style:{"--bg":"url('img/jueztutela.jpg')"},children:r.jsxs("div",{className:"labor-card-content",children:[r.jsx("span",{className:"labor-badge",children:"SERVICIO"}),r.jsxs("div",{className:"labor-card-title",children:[r.jsx("span",{className:"labor-dot"}),"Tutela para obtener pensión"]}),r.jsx("div",{className:"labor-card-desc",children:"Cumplidos los requisitos de la jurisprudencia de la sala de casación laboral"})]})})]})]})}),r.jsxs("footer",{children:[r.jsx("div",{className:"footer-divider","aria-hidden":"true"}),r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("div",{className:"footer-logo",children:r.jsx("div",{className:"brand-text",children:"KOOP STRATEGIC ADVISORY"})}),r.jsx("p",{className:"footer-copy",children:"Estudio jurídico & contable. Continuidad y eficiencia para tu legado."}),r.jsxs("div",{className:"footer-cta",children:[r.jsx("h4",{children:"¿Necesitas una asesoría en Asesoría Contable?"}),r.jsxs("div",{className:"btns",children:[r.jsxs("a",{className:"btn btn-whatsapp",href:"https://wa.me/573137213878?text=Cordial%20Saludo%20Koop,%20deseo%20asesor%C3%ADa%20en%20planeaci%C3%B3n%20patrimonial%20sobre%20el%20siguiente%20tema:",target:"_blank",rel:"noopener",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z"})}),"WhatsApp"]}),r.jsxs("a",{className:"btn btn-mail",href:"mailto:direccionjuridicakoop@hotmail.com?subject=Asesor%C3%ADa%20Planeaci%C3%B3n%20Patrimonial%20Koop",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),"Escríbenos"]})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Enlaces rápidos"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx(R,{to:"/#inicio",children:"Inicio"})}),r.jsx("li",{children:r.jsx(R,{to:"/#areas",children:"Áreas de práctica"})}),r.jsx("li",{children:r.jsx(R,{to:"/#vision",children:"Nuestra visión"})}),r.jsx("li",{children:r.jsx(R,{to:"/#contacto",children:"Contacto"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Servicios de familia"}),r.jsxs("ul",{className:"footer-list",children:[r.jsx("li",{children:r.jsx("a",{href:"#divorcio",children:"Divorcio y separación"})}),r.jsx("li",{children:r.jsx("a",{href:"#custodia",children:"Custodia y patria potestad"})}),r.jsx("li",{children:r.jsx("a",{href:"#alimentos",children:"Alimentos y pensión alimentaria"})}),r.jsx("li",{children:r.jsx("a",{href:"#sociedad",children:"Liquidación de sociedad conyugal"})}),r.jsx("li",{children:r.jsx("a",{href:"#adopciones",children:"Adopciones"})}),r.jsx("li",{children:r.jsx("a",{href:"#capitulaciones",children:"Capitulaciones matrimoniales"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h5",{children:"Contacto"}),r.jsxs("div",{className:"footer-contact",children:[r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})}),r.jsx("span",{children:"Bogotá D.C., Colombia"})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"tel:+573137213878",children:"+57 (313) 721 38 78"})})]}),r.jsxs("div",{className:"item",children:[r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z"})}),r.jsx("span",{children:r.jsx("a",{className:"footer-list",style:{color:"#cfe0ff",textDecoration:"none"},href:"mailto:direccionjuridicakoop@hotmail.com",children:"direccionjuridicakoop@hotmail.com"})})]})]}),r.jsxs("div",{className:"footer-social","aria-label":"Redes sociales",children:[r.jsx("a",{"aria-label":"Instagram",href:"https://www.instagram.com/kooplawyers/",target:"_blank",rel:"noopener",title:"Instagram",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"})})}),r.jsx("a",{"aria-label":"Facebook",href:"https://www.facebook.com/profile.php?id=61579034631401",target:"_blank",rel:"noopener",title:"Facebook",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"})})}),r.jsx("a",{"aria-label":"TikTok",href:"https://www.tiktok.com/@koopstrategicadvisory",target:"_blank",rel:"noopener",title:"TikTok",children:r.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z"})})})]})]})]}),r.jsx("div",{className:"mini-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:["© ",r.jsx("span",{id:"year"})," Koop Strategic Advisory. Todos los derechos reservados."]}),r.jsxs("div",{className:"mini-links",children:[r.jsx("a",{href:"/privacidad",children:"Política de privacidad"}),r.jsx("a",{href:"terminos.html",children:"Términos y condiciones"}),r.jsx("a",{href:"#inicio",children:"Volver arriba ↑"})]})]})})]})]})},It="https://koop-api-a28ac382dd56.herokuapp.com/api";async function m1({name:e,email:n,password:t,roles:a}){console.log(`API BASE: ${It}/auth/register`);const i=await fetch(`${It}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:n,password:t,roles:a})}),o=await i.json().catch(()=>({}));if(!i.ok)throw new Error((o==null?void 0:o.message)||"Error en registro");return o}async function g1(){const e=await fetch(`${It}/auth/refresh`,{method:"POST",credentials:"include"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error((n==null?void 0:n.message)||"No se pudo refrescar sesión");return n}async function x1({email:e,password:n}){console.log(`API BASE: ${It}/auth/login`);const t=await fetch(`${It}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:n})});console.log(t);const a=await t.json().catch(()=>({}));if(!t.ok)throw new Error((a==null?void 0:a.message)||"Credenciales inválidas");return a}async function v1(){const e=await fetch(`${It}/auth/logout`,{method:"POST",credentials:"include"});if(!e.ok){let n="Error al cerrar sesión";try{const t=await e.json();n=(t==null?void 0:t.message)||n}catch{}throw new Error(n)}return!0}function yh(e,n){return function(){return e.apply(n,arguments)}}const{toString:b1}=Object.prototype,{getPrototypeOf:ac}=Object,{iterator:go,toStringTag:wh}=Symbol,xo=(e=>n=>{const t=b1.call(n);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Vn=e=>(e=e.toLowerCase(),n=>xo(n)===e),vo=e=>n=>typeof n===e,{isArray:Mt}=Array,Ta=vo("undefined");function La(e){return e!==null&&!Ta(e)&&e.constructor!==null&&!Ta(e.constructor)&&dn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const jh=Vn("ArrayBuffer");function y1(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&jh(e.buffer),n}const w1=vo("string"),dn=vo("function"),kh=vo("number"),Pa=e=>e!==null&&typeof e=="object",j1=e=>e===!0||e===!1,wi=e=>{if(xo(e)!=="object")return!1;const n=ac(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(wh in e)&&!(go in e)},k1=e=>{if(!Pa(e)||La(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},C1=Vn("Date"),N1=Vn("File"),S1=Vn("Blob"),E1=Vn("FileList"),A1=e=>Pa(e)&&dn(e.pipe),T1=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||dn(e.append)&&((n=xo(e))==="formdata"||n==="object"&&dn(e.toString)&&e.toString()==="[object FormData]"))},I1=Vn("URLSearchParams"),[R1,z1,O1,D1]=["ReadableStream","Request","Response","Headers"].map(Vn),L1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ma(e,n,{allOwnKeys:t=!1}={}){if(e===null||typeof e>"u")return;let a,i;if(typeof e!="object"&&(e=[e]),Mt(e))for(a=0,i=e.length;a<i;a++)n.call(null,e[a],a,e);else{if(La(e))return;const o=t?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(a=0;a<s;a++)l=o[a],n.call(null,e[l],l,e)}}function Ch(e,n){if(La(e))return null;n=n.toLowerCase();const t=Object.keys(e);let a=t.length,i;for(;a-- >0;)if(i=t[a],n===i.toLowerCase())return i;return null}const Fr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Nh=e=>!Ta(e)&&e!==Fr;function Gs(){const{caseless:e}=Nh(this)&&this||{},n={},t=(a,i)=>{const o=e&&Ch(n,i)||i;wi(n[o])&&wi(a)?n[o]=Gs(n[o],a):wi(a)?n[o]=Gs({},a):Mt(a)?n[o]=a.slice():n[o]=a};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&Ma(arguments[a],t);return n}const P1=(e,n,t,{allOwnKeys:a}={})=>(Ma(n,(i,o)=>{t&&dn(i)?e[o]=yh(i,t):e[o]=i},{allOwnKeys:a}),e),M1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_1=(e,n,t,a)=>{e.prototype=Object.create(n.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),t&&Object.assign(e.prototype,t)},V1=(e,n,t,a)=>{let i,o,s;const l={};if(n=n||{},e==null)return n;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!a||a(s,e,n))&&!l[s]&&(n[s]=e[s],l[s]=!0);e=t!==!1&&ac(e)}while(e&&(!t||t(e,n))&&e!==Object.prototype);return n},B1=(e,n,t)=>{e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=n.length;const a=e.indexOf(n,t);return a!==-1&&a===t},F1=e=>{if(!e)return null;if(Mt(e))return e;let n=e.length;if(!kh(n))return null;const t=new Array(n);for(;n-- >0;)t[n]=e[n];return t},U1=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&ac(Uint8Array)),Z1=(e,n)=>{const a=(e&&e[go]).call(e);let i;for(;(i=a.next())&&!i.done;){const o=i.value;n.call(e,o[0],o[1])}},K1=(e,n)=>{let t;const a=[];for(;(t=e.exec(n))!==null;)a.push(t);return a},W1=Vn("HTMLFormElement"),$1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,a,i){return a.toUpperCase()+i}),Ed=(({hasOwnProperty:e})=>(n,t)=>e.call(n,t))(Object.prototype),H1=Vn("RegExp"),Sh=(e,n)=>{const t=Object.getOwnPropertyDescriptors(e),a={};Ma(t,(i,o)=>{let s;(s=n(i,o,e))!==!1&&(a[o]=s||i)}),Object.defineProperties(e,a)},q1=e=>{Sh(e,(n,t)=>{if(dn(e)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const a=e[t];if(dn(a)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Y1=(e,n)=>{const t={},a=i=>{i.forEach(o=>{t[o]=!0})};return Mt(e)?a(e):a(String(e).split(n)),t},G1=()=>{},J1=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function Q1(e){return!!(e&&dn(e.append)&&e[wh]==="FormData"&&e[go])}const X1=e=>{const n=new Array(10),t=(a,i)=>{if(Pa(a)){if(n.indexOf(a)>=0)return;if(La(a))return a;if(!("toJSON"in a)){n[i]=a;const o=Mt(a)?[]:{};return Ma(a,(s,l)=>{const c=t(s,i+1);!Ta(c)&&(o[l]=c)}),n[i]=void 0,o}}return a};return t(e,0)},ex=Vn("AsyncFunction"),nx=e=>e&&(Pa(e)||dn(e))&&dn(e.then)&&dn(e.catch),Eh=((e,n)=>e?setImmediate:n?((t,a)=>(Fr.addEventListener("message",({source:i,data:o})=>{i===Fr&&o===t&&a.length&&a.shift()()},!1),i=>{a.push(i),Fr.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",dn(Fr.postMessage)),rx=typeof queueMicrotask<"u"?queueMicrotask.bind(Fr):typeof process<"u"&&process.nextTick||Eh,tx=e=>e!=null&&dn(e[go]),N={isArray:Mt,isArrayBuffer:jh,isBuffer:La,isFormData:T1,isArrayBufferView:y1,isString:w1,isNumber:kh,isBoolean:j1,isObject:Pa,isPlainObject:wi,isEmptyObject:k1,isReadableStream:R1,isRequest:z1,isResponse:O1,isHeaders:D1,isUndefined:Ta,isDate:C1,isFile:N1,isBlob:S1,isRegExp:H1,isFunction:dn,isStream:A1,isURLSearchParams:I1,isTypedArray:U1,isFileList:E1,forEach:Ma,merge:Gs,extend:P1,trim:L1,stripBOM:M1,inherits:_1,toFlatObject:V1,kindOf:xo,kindOfTest:Vn,endsWith:B1,toArray:F1,forEachEntry:Z1,matchAll:K1,isHTMLForm:W1,hasOwnProperty:Ed,hasOwnProp:Ed,reduceDescriptors:Sh,freezeMethods:q1,toObjectSet:Y1,toCamelCase:$1,noop:G1,toFiniteNumber:J1,findKey:Ch,global:Fr,isContextDefined:Nh,isSpecCompliantForm:Q1,toJSONObject:X1,isAsyncFn:ex,isThenable:nx,setImmediate:Eh,asap:rx,isIterable:tx};function X(e,n,t,a,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),t&&(this.config=t),a&&(this.request=a),i&&(this.response=i,this.status=i.status?i.status:null)}N.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.status}}});const Ah=X.prototype,Th={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Th[e]={value:e}});Object.defineProperties(X,Th);Object.defineProperty(Ah,"isAxiosError",{value:!0});X.from=(e,n,t,a,i,o)=>{const s=Object.create(Ah);return N.toFlatObject(e,s,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),X.call(s,e.message,n,t,a,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const ax=null;function Js(e){return N.isPlainObject(e)||N.isArray(e)}function Ih(e){return N.endsWith(e,"[]")?e.slice(0,-2):e}function Ad(e,n,t){return e?e.concat(n).map(function(i,o){return i=Ih(i),!t&&o?"["+i+"]":i}).join(t?".":""):n}function ix(e){return N.isArray(e)&&!e.some(Js)}const ox=N.toFlatObject(N,{},null,function(n){return/^is[A-Z]/.test(n)});function bo(e,n,t){if(!N.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,t=N.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,w){return!N.isUndefined(w[g])});const a=t.metaTokens,i=t.visitor||p,o=t.dots,s=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(n);if(!N.isFunction(i))throw new TypeError("visitor must be a function");function d(x){if(x===null)return"";if(N.isDate(x))return x.toISOString();if(N.isBoolean(x))return x.toString();if(!c&&N.isBlob(x))throw new X("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(x)||N.isTypedArray(x)?c&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function p(x,g,w){let f=x;if(x&&!w&&typeof x=="object"){if(N.endsWith(g,"{}"))g=a?g:g.slice(0,-2),x=JSON.stringify(x);else if(N.isArray(x)&&ix(x)||(N.isFileList(x)||N.endsWith(g,"[]"))&&(f=N.toArray(x)))return g=Ih(g),f.forEach(function(b,k){!(N.isUndefined(b)||b===null)&&n.append(s===!0?Ad([g],k,o):s===null?g:g+"[]",d(b))}),!1}return Js(x)?!0:(n.append(Ad(w,g,o),d(x)),!1)}const h=[],m=Object.assign(ox,{defaultVisitor:p,convertValue:d,isVisitable:Js});function y(x,g){if(!N.isUndefined(x)){if(h.indexOf(x)!==-1)throw Error("Circular reference detected in "+g.join("."));h.push(x),N.forEach(x,function(f,u){(!(N.isUndefined(f)||f===null)&&i.call(n,f,N.isString(u)?u.trim():u,g,m))===!0&&y(f,g?g.concat(u):[u])}),h.pop()}}if(!N.isObject(e))throw new TypeError("data must be an object");return y(e),n}function Td(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return n[a]})}function ic(e,n){this._pairs=[],e&&bo(e,this,n)}const Rh=ic.prototype;Rh.append=function(n,t){this._pairs.push([n,t])};Rh.toString=function(n){const t=n?function(a){return n.call(this,a,Td)}:Td;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function sx(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function zh(e,n,t){if(!n)return e;const a=t&&t.encode||sx;N.isFunction(t)&&(t={serialize:t});const i=t&&t.serialize;let o;if(i?o=i(n,t):o=N.isURLSearchParams(n)?n.toString():new ic(n,t).toString(a),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Id{constructor(){this.handlers=[]}use(n,t,a){return this.handlers.push({fulfilled:n,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){N.forEach(this.handlers,function(a){a!==null&&n(a)})}}const Oh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},lx=typeof URLSearchParams<"u"?URLSearchParams:ic,cx=typeof FormData<"u"?FormData:null,dx=typeof Blob<"u"?Blob:null,px={isBrowser:!0,classes:{URLSearchParams:lx,FormData:cx,Blob:dx},protocols:["http","https","file","blob","url","data"]},oc=typeof window<"u"&&typeof document<"u",Qs=typeof navigator=="object"&&navigator||void 0,ux=oc&&(!Qs||["ReactNative","NativeScript","NS"].indexOf(Qs.product)<0),hx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",fx=oc&&window.location.href||"http://localhost",mx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:oc,hasStandardBrowserEnv:ux,hasStandardBrowserWebWorkerEnv:hx,navigator:Qs,origin:fx},Symbol.toStringTag,{value:"Module"})),qe={...mx,...px};function gx(e,n){return bo(e,new qe.classes.URLSearchParams,{visitor:function(t,a,i,o){return qe.isNode&&N.isBuffer(t)?(this.append(a,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...n})}function xx(e){return N.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function vx(e){const n={},t=Object.keys(e);let a;const i=t.length;let o;for(a=0;a<i;a++)o=t[a],n[o]=e[o];return n}function Dh(e){function n(t,a,i,o){let s=t[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=o>=t.length;return s=!s&&N.isArray(i)?i.length:s,c?(N.hasOwnProp(i,s)?i[s]=[i[s],a]:i[s]=a,!l):((!i[s]||!N.isObject(i[s]))&&(i[s]=[]),n(t,a,i[s],o)&&N.isArray(i[s])&&(i[s]=vx(i[s])),!l)}if(N.isFormData(e)&&N.isFunction(e.entries)){const t={};return N.forEachEntry(e,(a,i)=>{n(xx(a),i,t,0)}),t}return null}function bx(e,n,t){if(N.isString(e))try{return(n||JSON.parse)(e),N.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(e)}const _a={transitional:Oh,adapter:["xhr","http","fetch"],transformRequest:[function(n,t){const a=t.getContentType()||"",i=a.indexOf("application/json")>-1,o=N.isObject(n);if(o&&N.isHTMLForm(n)&&(n=new FormData(n)),N.isFormData(n))return i?JSON.stringify(Dh(n)):n;if(N.isArrayBuffer(n)||N.isBuffer(n)||N.isStream(n)||N.isFile(n)||N.isBlob(n)||N.isReadableStream(n))return n;if(N.isArrayBufferView(n))return n.buffer;if(N.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(o){if(a.indexOf("application/x-www-form-urlencoded")>-1)return gx(n,this.formSerializer).toString();if((l=N.isFileList(n))||a.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return bo(l?{"files[]":n}:n,c&&new c,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),bx(n)):n}],transformResponse:[function(n){const t=this.transitional||_a.transitional,a=t&&t.forcedJSONParsing,i=this.responseType==="json";if(N.isResponse(n)||N.isReadableStream(n))return n;if(n&&N.isString(n)&&(a&&!this.responseType||i)){const s=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(n)}catch(l){if(s)throw l.name==="SyntaxError"?X.from(l,X.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qe.classes.FormData,Blob:qe.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],e=>{_a.headers[e]={}});const yx=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),wx=e=>{const n={};let t,a,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),t=s.substring(0,i).trim().toLowerCase(),a=s.substring(i+1).trim(),!(!t||n[t]&&yx[t])&&(t==="set-cookie"?n[t]?n[t].push(a):n[t]=[a]:n[t]=n[t]?n[t]+", "+a:a)}),n},Rd=Symbol("internals");function qt(e){return e&&String(e).trim().toLowerCase()}function ji(e){return e===!1||e==null?e:N.isArray(e)?e.map(ji):String(e)}function jx(e){const n=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=t.exec(e);)n[a[1]]=a[2];return n}const kx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Jo(e,n,t,a,i){if(N.isFunction(a))return a.call(this,n,t);if(i&&(n=t),!!N.isString(n)){if(N.isString(a))return n.indexOf(a)!==-1;if(N.isRegExp(a))return a.test(n)}}function Cx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,t,a)=>t.toUpperCase()+a)}function Nx(e,n){const t=N.toCamelCase(" "+n);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+t,{value:function(i,o,s){return this[a].call(this,n,i,o,s)},configurable:!0})})}let pn=class{constructor(n){n&&this.set(n)}set(n,t,a){const i=this;function o(l,c,d){const p=qt(c);if(!p)throw new Error("header name must be a non-empty string");const h=N.findKey(i,p);(!h||i[h]===void 0||d===!0||d===void 0&&i[h]!==!1)&&(i[h||c]=ji(l))}const s=(l,c)=>N.forEach(l,(d,p)=>o(d,p,c));if(N.isPlainObject(n)||n instanceof this.constructor)s(n,t);else if(N.isString(n)&&(n=n.trim())&&!kx(n))s(wx(n),t);else if(N.isObject(n)&&N.isIterable(n)){let l={},c,d;for(const p of n){if(!N.isArray(p))throw TypeError("Object iterator must return a key-value pair");l[d=p[0]]=(c=l[d])?N.isArray(c)?[...c,p[1]]:[c,p[1]]:p[1]}s(l,t)}else n!=null&&o(t,n,a);return this}get(n,t){if(n=qt(n),n){const a=N.findKey(this,n);if(a){const i=this[a];if(!t)return i;if(t===!0)return jx(i);if(N.isFunction(t))return t.call(this,i,a);if(N.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,t){if(n=qt(n),n){const a=N.findKey(this,n);return!!(a&&this[a]!==void 0&&(!t||Jo(this,this[a],a,t)))}return!1}delete(n,t){const a=this;let i=!1;function o(s){if(s=qt(s),s){const l=N.findKey(a,s);l&&(!t||Jo(a,a[l],l,t))&&(delete a[l],i=!0)}}return N.isArray(n)?n.forEach(o):o(n),i}clear(n){const t=Object.keys(this);let a=t.length,i=!1;for(;a--;){const o=t[a];(!n||Jo(this,this[o],o,n,!0))&&(delete this[o],i=!0)}return i}normalize(n){const t=this,a={};return N.forEach(this,(i,o)=>{const s=N.findKey(a,o);if(s){t[s]=ji(i),delete t[o];return}const l=n?Cx(o):String(o).trim();l!==o&&delete t[o],t[l]=ji(i),a[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const t=Object.create(null);return N.forEach(this,(a,i)=>{a!=null&&a!==!1&&(t[i]=n&&N.isArray(a)?a.join(", "):a)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,t])=>n+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...t){const a=new this(n);return t.forEach(i=>a.set(i)),a}static accessor(n){const a=(this[Rd]=this[Rd]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=qt(s);a[l]||(Nx(i,s),a[l]=!0)}return N.isArray(n)?n.forEach(o):o(n),this}};pn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(pn.prototype,({value:e},n)=>{let t=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(a){this[t]=a}}});N.freezeMethods(pn);function Qo(e,n){const t=this||_a,a=n||t,i=pn.from(a.headers);let o=a.data;return N.forEach(e,function(l){o=l.call(t,o,i.normalize(),n?n.status:void 0)}),i.normalize(),o}function Lh(e){return!!(e&&e.__CANCEL__)}function _t(e,n,t){X.call(this,e??"canceled",X.ERR_CANCELED,n,t),this.name="CanceledError"}N.inherits(_t,X,{__CANCEL__:!0});function Ph(e,n,t){const a=t.config.validateStatus;!t.status||!a||a(t.status)?e(t):n(new X("Request failed with status code "+t.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function Sx(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function Ex(e,n){e=e||10;const t=new Array(e),a=new Array(e);let i=0,o=0,s;return n=n!==void 0?n:1e3,function(c){const d=Date.now(),p=a[o];s||(s=d),t[i]=c,a[i]=d;let h=o,m=0;for(;h!==i;)m+=t[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),d-s<n)return;const y=p&&d-p;return y?Math.round(m*1e3/y):void 0}}function Ax(e,n){let t=0,a=1e3/n,i,o;const s=(d,p=Date.now())=>{t=p,i=null,o&&(clearTimeout(o),o=null),e(...d)};return[(...d)=>{const p=Date.now(),h=p-t;h>=a?s(d,p):(i=d,o||(o=setTimeout(()=>{o=null,s(i)},a-h)))},()=>i&&s(i)]}const Yi=(e,n,t=3)=>{let a=0;const i=Ex(50,250);return Ax(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,c=s-a,d=i(c),p=s<=l;a=s;const h={loaded:s,total:l,progress:l?s/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&p?(l-s)/d:void 0,event:o,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(h)},t)},zd=(e,n)=>{const t=e!=null;return[a=>n[0]({lengthComputable:t,total:e,loaded:a}),n[1]]},Od=e=>(...n)=>N.asap(()=>e(...n)),Tx=qe.hasStandardBrowserEnv?((e,n)=>t=>(t=new URL(t,qe.origin),e.protocol===t.protocol&&e.host===t.host&&(n||e.port===t.port)))(new URL(qe.origin),qe.navigator&&/(msie|trident)/i.test(qe.navigator.userAgent)):()=>!0,Ix=qe.hasStandardBrowserEnv?{write(e,n,t,a,i,o){const s=[e+"="+encodeURIComponent(n)];N.isNumber(t)&&s.push("expires="+new Date(t).toGMTString()),N.isString(a)&&s.push("path="+a),N.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Rx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function zx(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function Mh(e,n,t){let a=!Rx(n);return e&&(a||t==!1)?zx(e,n):n}const Dd=e=>e instanceof pn?{...e}:e;function Gr(e,n){n=n||{};const t={};function a(d,p,h,m){return N.isPlainObject(d)&&N.isPlainObject(p)?N.merge.call({caseless:m},d,p):N.isPlainObject(p)?N.merge({},p):N.isArray(p)?p.slice():p}function i(d,p,h,m){if(N.isUndefined(p)){if(!N.isUndefined(d))return a(void 0,d,h,m)}else return a(d,p,h,m)}function o(d,p){if(!N.isUndefined(p))return a(void 0,p)}function s(d,p){if(N.isUndefined(p)){if(!N.isUndefined(d))return a(void 0,d)}else return a(void 0,p)}function l(d,p,h){if(h in n)return a(d,p);if(h in e)return a(void 0,d)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(d,p,h)=>i(Dd(d),Dd(p),h,!0)};return N.forEach(Object.keys({...e,...n}),function(p){const h=c[p]||i,m=h(e[p],n[p],p);N.isUndefined(m)&&h!==l||(t[p]=m)}),t}const _h=e=>{const n=Gr({},e);let{data:t,withXSRFToken:a,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=n;n.headers=s=pn.from(s),n.url=zh(Mh(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(N.isFormData(t)){if(qe.hasStandardBrowserEnv||qe.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[d,...p]=c?c.split(";").map(h=>h.trim()).filter(Boolean):[];s.setContentType([d||"multipart/form-data",...p].join("; "))}}if(qe.hasStandardBrowserEnv&&(a&&N.isFunction(a)&&(a=a(n)),a||a!==!1&&Tx(n.url))){const d=i&&o&&Ix.read(o);d&&s.set(i,d)}return n},Ox=typeof XMLHttpRequest<"u",Dx=Ox&&function(e){return new Promise(function(t,a){const i=_h(e);let o=i.data;const s=pn.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=i,p,h,m,y,x;function g(){y&&y(),x&&x(),i.cancelToken&&i.cancelToken.unsubscribe(p),i.signal&&i.signal.removeEventListener("abort",p)}let w=new XMLHttpRequest;w.open(i.method.toUpperCase(),i.url,!0),w.timeout=i.timeout;function f(){if(!w)return;const b=pn.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),E={data:!l||l==="text"||l==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:b,config:e,request:w};Ph(function(O){t(O),g()},function(O){a(O),g()},E),w=null}"onloadend"in w?w.onloadend=f:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(f)},w.onabort=function(){w&&(a(new X("Request aborted",X.ECONNABORTED,e,w)),w=null)},w.onerror=function(){a(new X("Network Error",X.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){let k=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const E=i.transitional||Oh;i.timeoutErrorMessage&&(k=i.timeoutErrorMessage),a(new X(k,E.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,w)),w=null},o===void 0&&s.setContentType(null),"setRequestHeader"in w&&N.forEach(s.toJSON(),function(k,E){w.setRequestHeader(E,k)}),N.isUndefined(i.withCredentials)||(w.withCredentials=!!i.withCredentials),l&&l!=="json"&&(w.responseType=i.responseType),d&&([m,x]=Yi(d,!0),w.addEventListener("progress",m)),c&&w.upload&&([h,y]=Yi(c),w.upload.addEventListener("progress",h),w.upload.addEventListener("loadend",y)),(i.cancelToken||i.signal)&&(p=b=>{w&&(a(!b||b.type?new _t(null,e,w):b),w.abort(),w=null)},i.cancelToken&&i.cancelToken.subscribe(p),i.signal&&(i.signal.aborted?p():i.signal.addEventListener("abort",p)));const u=Sx(i.url);if(u&&qe.protocols.indexOf(u)===-1){a(new X("Unsupported protocol "+u+":",X.ERR_BAD_REQUEST,e));return}w.send(o||null)})},Lx=(e,n)=>{const{length:t}=e=e?e.filter(Boolean):[];if(n||t){let a=new AbortController,i;const o=function(d){if(!i){i=!0,l();const p=d instanceof Error?d:this.reason;a.abort(p instanceof X?p:new _t(p instanceof Error?p.message:p))}};let s=n&&setTimeout(()=>{s=null,o(new X(`timeout ${n} of ms exceeded`,X.ETIMEDOUT))},n);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),e=null)};e.forEach(d=>d.addEventListener("abort",o));const{signal:c}=a;return c.unsubscribe=()=>N.asap(l),c}},Px=function*(e,n){let t=e.byteLength;if(t<n){yield e;return}let a=0,i;for(;a<t;)i=a+n,yield e.slice(a,i),a=i},Mx=async function*(e,n){for await(const t of _x(e))yield*Px(t,n)},_x=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:t,value:a}=await n.read();if(t)break;yield a}}finally{await n.cancel()}},Ld=(e,n,t,a)=>{const i=Mx(e,n);let o=0,s,l=c=>{s||(s=!0,a&&a(c))};return new ReadableStream({async pull(c){try{const{done:d,value:p}=await i.next();if(d){l(),c.close();return}let h=p.byteLength;if(t){let m=o+=h;t(m)}c.enqueue(new Uint8Array(p))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},yo=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Vh=yo&&typeof ReadableStream=="function",Vx=yo&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Bh=(e,...n)=>{try{return!!e(...n)}catch{return!1}},Bx=Vh&&Bh(()=>{let e=!1;const n=new Request(qe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),Pd=64*1024,Xs=Vh&&Bh(()=>N.isReadableStream(new Response("").body)),Gi={stream:Xs&&(e=>e.body)};yo&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!Gi[n]&&(Gi[n]=N.isFunction(e[n])?t=>t[n]():(t,a)=>{throw new X(`Response type '${n}' is not supported`,X.ERR_NOT_SUPPORT,a)})})})(new Response);const Fx=async e=>{if(e==null)return 0;if(N.isBlob(e))return e.size;if(N.isSpecCompliantForm(e))return(await new Request(qe.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(N.isArrayBufferView(e)||N.isArrayBuffer(e))return e.byteLength;if(N.isURLSearchParams(e)&&(e=e+""),N.isString(e))return(await Vx(e)).byteLength},Ux=async(e,n)=>{const t=N.toFiniteNumber(e.getContentLength());return t??Fx(n)},Zx=yo&&(async e=>{let{url:n,method:t,data:a,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:c,responseType:d,headers:p,withCredentials:h="same-origin",fetchOptions:m}=_h(e);d=d?(d+"").toLowerCase():"text";let y=Lx([i,o&&o.toAbortSignal()],s),x;const g=y&&y.unsubscribe&&(()=>{y.unsubscribe()});let w;try{if(c&&Bx&&t!=="get"&&t!=="head"&&(w=await Ux(p,a))!==0){let E=new Request(n,{method:"POST",body:a,duplex:"half"}),A;if(N.isFormData(a)&&(A=E.headers.get("content-type"))&&p.setContentType(A),E.body){const[O,z]=zd(w,Yi(Od(c)));a=Ld(E.body,Pd,O,z)}}N.isString(h)||(h=h?"include":"omit");const f="credentials"in Request.prototype;x=new Request(n,{...m,signal:y,method:t.toUpperCase(),headers:p.normalize().toJSON(),body:a,duplex:"half",credentials:f?h:void 0});let u=await fetch(x,m);const b=Xs&&(d==="stream"||d==="response");if(Xs&&(l||b&&g)){const E={};["status","statusText","headers"].forEach(F=>{E[F]=u[F]});const A=N.toFiniteNumber(u.headers.get("content-length")),[O,z]=l&&zd(A,Yi(Od(l),!0))||[];u=new Response(Ld(u.body,Pd,O,()=>{z&&z(),g&&g()}),E)}d=d||"text";let k=await Gi[N.findKey(Gi,d)||"text"](u,e);return!b&&g&&g(),await new Promise((E,A)=>{Ph(E,A,{data:k,headers:pn.from(u.headers),status:u.status,statusText:u.statusText,config:e,request:x})})}catch(f){throw g&&g(),f&&f.name==="TypeError"&&/Load failed|fetch/i.test(f.message)?Object.assign(new X("Network Error",X.ERR_NETWORK,e,x),{cause:f.cause||f}):X.from(f,f&&f.code,e,x)}}),el={http:ax,xhr:Dx,fetch:Zx};N.forEach(el,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const Md=e=>`- ${e}`,Kx=e=>N.isFunction(e)||e===null||e===!1,Fh={getAdapter:e=>{e=N.isArray(e)?e:[e];const{length:n}=e;let t,a;const i={};for(let o=0;o<n;o++){t=e[o];let s;if(a=t,!Kx(t)&&(a=el[(s=String(t)).toLowerCase()],a===void 0))throw new X(`Unknown adapter '${s}'`);if(a)break;i[s||"#"+o]=a}if(!a){const o=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=n?o.length>1?`since :
`+o.map(Md).join(`
`):" "+Md(o[0]):"as no adapter specified";throw new X("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return a},adapters:el};function Xo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _t(null,e)}function _d(e){return Xo(e),e.headers=pn.from(e.headers),e.data=Qo.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Fh.getAdapter(e.adapter||_a.adapter)(e).then(function(a){return Xo(e),a.data=Qo.call(e,e.transformResponse,a),a.headers=pn.from(a.headers),a},function(a){return Lh(a)||(Xo(e),a&&a.response&&(a.response.data=Qo.call(e,e.transformResponse,a.response),a.response.headers=pn.from(a.response.headers))),Promise.reject(a)})}const Uh="1.11.0",wo={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{wo[e]=function(a){return typeof a===e||"a"+(n<1?"n ":" ")+e}});const Vd={};wo.transitional=function(n,t,a){function i(o,s){return"[Axios v"+Uh+"] Transitional option '"+o+"'"+s+(a?". "+a:"")}return(o,s,l)=>{if(n===!1)throw new X(i(s," has been removed"+(t?" in "+t:"")),X.ERR_DEPRECATED);return t&&!Vd[s]&&(Vd[s]=!0,console.warn(i(s," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(o,s,l):!0}};wo.spelling=function(n){return(t,a)=>(console.warn(`${a} is likely a misspelling of ${n}`),!0)};function Wx(e,n,t){if(typeof e!="object")throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let i=a.length;for(;i-- >0;){const o=a[i],s=n[o];if(s){const l=e[o],c=l===void 0||s(l,o,e);if(c!==!0)throw new X("option "+o+" must be "+c,X.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new X("Unknown option "+o,X.ERR_BAD_OPTION)}}const ki={assertOptions:Wx,validators:wo},Un=ki.validators;let Kr=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Id,response:new Id}}async request(n,t){try{return await this._request(n,t)}catch(a){if(a instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{a.stack?o&&!String(a.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+o):a.stack=o}catch{}}throw a}}_request(n,t){typeof n=="string"?(t=t||{},t.url=n):t=n||{},t=Gr(this.defaults,t);const{transitional:a,paramsSerializer:i,headers:o}=t;a!==void 0&&ki.assertOptions(a,{silentJSONParsing:Un.transitional(Un.boolean),forcedJSONParsing:Un.transitional(Un.boolean),clarifyTimeoutError:Un.transitional(Un.boolean)},!1),i!=null&&(N.isFunction(i)?t.paramsSerializer={serialize:i}:ki.assertOptions(i,{encode:Un.function,serialize:Un.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),ki.assertOptions(t,{baseUrl:Un.spelling("baseURL"),withXsrfToken:Un.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&N.merge(o.common,o[t.method]);o&&N.forEach(["delete","get","head","post","put","patch","common"],x=>{delete o[x]}),t.headers=pn.concat(s,o);const l=[];let c=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(t)===!1||(c=c&&g.synchronous,l.unshift(g.fulfilled,g.rejected))});const d=[];this.interceptors.response.forEach(function(g){d.push(g.fulfilled,g.rejected)});let p,h=0,m;if(!c){const x=[_d.bind(this),void 0];for(x.unshift(...l),x.push(...d),m=x.length,p=Promise.resolve(t);h<m;)p=p.then(x[h++],x[h++]);return p}m=l.length;let y=t;for(h=0;h<m;){const x=l[h++],g=l[h++];try{y=x(y)}catch(w){g.call(this,w);break}}try{p=_d.call(this,y)}catch(x){return Promise.reject(x)}for(h=0,m=d.length;h<m;)p=p.then(d[h++],d[h++]);return p}getUri(n){n=Gr(this.defaults,n);const t=Mh(n.baseURL,n.url,n.allowAbsoluteUrls);return zh(t,n.params,n.paramsSerializer)}};N.forEach(["delete","get","head","options"],function(n){Kr.prototype[n]=function(t,a){return this.request(Gr(a||{},{method:n,url:t,data:(a||{}).data}))}});N.forEach(["post","put","patch"],function(n){function t(a){return function(o,s,l){return this.request(Gr(l||{},{method:n,headers:a?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Kr.prototype[n]=t(),Kr.prototype[n+"Form"]=t(!0)});let $x=class Zh{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(o){t=o});const a=this;this.promise.then(i=>{if(!a._listeners)return;let o=a._listeners.length;for(;o-- >0;)a._listeners[o](i);a._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{a.subscribe(l),o=l}).then(i);return s.cancel=function(){a.unsubscribe(o)},s},n(function(o,s,l){a.reason||(a.reason=new _t(o,s,l),t(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const t=this._listeners.indexOf(n);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const n=new AbortController,t=a=>{n.abort(a)};return this.subscribe(t),n.signal.unsubscribe=()=>this.unsubscribe(t),n.signal}static source(){let n;return{token:new Zh(function(i){n=i}),cancel:n}}};function Hx(e){return function(t){return e.apply(null,t)}}function qx(e){return N.isObject(e)&&e.isAxiosError===!0}const nl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(nl).forEach(([e,n])=>{nl[n]=e});function Kh(e){const n=new Kr(e),t=yh(Kr.prototype.request,n);return N.extend(t,Kr.prototype,n,{allOwnKeys:!0}),N.extend(t,n,null,{allOwnKeys:!0}),t.create=function(i){return Kh(Gr(e,i))},t}const Ce=Kh(_a);Ce.Axios=Kr;Ce.CanceledError=_t;Ce.CancelToken=$x;Ce.isCancel=Lh;Ce.VERSION=Uh;Ce.toFormData=bo;Ce.AxiosError=X;Ce.Cancel=Ce.CanceledError;Ce.all=function(n){return Promise.all(n)};Ce.spread=Hx;Ce.isAxiosError=qx;Ce.mergeConfig=Gr;Ce.AxiosHeaders=pn;Ce.formToJSON=e=>Dh(N.isHTMLForm(e)?new FormData(e):e);Ce.getAdapter=Fh.getAdapter;Ce.HttpStatusCode=nl;Ce.default=Ce;const{Axios:X2,AxiosError:ev,CanceledError:nv,isCancel:rv,CancelToken:tv,VERSION:av,all:iv,Cancel:ov,isAxiosError:sv,spread:lv,toFormData:cv,AxiosHeaders:dv,HttpStatusCode:pv,formToJSON:uv,getAdapter:hv,mergeConfig:fv}=Ce,Wh="https://koop-api-a28ac382dd56.herokuapp.com/api",ze=Ce.create({baseURL:Wh,withCredentials:!0}),Yx=Ce.create({baseURL:Wh,withCredentials:!0});let es=!1,rl=[];function Gx(e){rl.push(e)}function Jx(e){rl.forEach(n=>{try{n(e)}catch{}}),rl=[]}function Qx({getAccessToken:e,setAccessToken:n,onLogout:t}){ze.interceptors.request.use(a=>{var i,o;try{let s;try{s=e==null?void 0:e()}catch{}if(!s&&typeof window<"u")try{s=(i=window.localStorage)==null?void 0:i.getItem("accessToken")}catch{}s&&!((o=a.headers)!=null&&o.Authorization)&&(a.headers=a.headers||{},a.headers.Authorization=`Bearer ${s}`)}catch(s){console.error("[axios] Request interceptor error:",s)}return a}),ze.interceptors.response.use(a=>a,async a=>{var p,h;const{response:i,config:o}=a||{},s=i==null?void 0:i.status,l=o||{},c=String((l==null?void 0:l.url)||""),d=c.includes("/auth/login")||c.includes("/auth/register")||c.includes("/auth/refresh");if(s!==401||d||l._retry)return Promise.reject(a);if(l._retry=!0,es)return new Promise((m,y)=>{Gx(x=>{try{l.headers=l.headers||{},x&&(l.headers.Authorization=`Bearer ${x}`),m(ze(l))}catch(g){y(g)}})});es=!0;try{const m=await Yx.post("/auth/refresh"),y=(p=m==null?void 0:m.data)==null?void 0:p.accessToken;if(!y)throw new Error("No accessToken in refresh");try{n==null||n(y)}catch{}return Jx(y),l.headers=l.headers||{},l.headers.Authorization=`Bearer ${y}`,ze(l)}catch(m){const y=(h=m==null?void 0:m.response)==null?void 0:h.status;if(y===401||y===403)try{await(t==null?void 0:t())}catch{}return Promise.reject(m)}finally{es=!1}})}const $h=v.createContext(null),Bd=["admin","user"];function tl(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=Bd.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Bd.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function si(e){try{const n=e.split(".")[1],t=atob(n.replace(/-/g,"+").replace(/_/g,"/"));return JSON.parse(t)}catch{return null}}function li(e,n){return e?{id:e.sub,name:e.name,email:e.email,roles:tl(e.roles),active:e.active!==!1,driveFolders:e.driveFolders||[]}:n?{id:n.id,name:n.name,email:n.email,roles:tl(n.roles),active:n.active!==!1,driveFolders:n.driveFolders||[]}:null}function Xx({children:e}){const[n,t]=v.useState(()=>localStorage.getItem("accessToken")||null),[a,i]=v.useState(()=>{const y=localStorage.getItem("accessToken");if(!y)return null;const x=si(y);return li(x,null)}),[o,s]=v.useState(!1),l=!!n;v.useEffect(()=>{if(!n)localStorage.removeItem("accessToken"),i(null);else{localStorage.setItem("accessToken",n);const y=si(n);y&&i(li(y,null))}},[n]);const c=async(y,x)=>{s(!0);try{const{accessToken:g,user:w}=await x1({email:y,password:x});t(g);const f=si(g);return i(li(f,w)),{ok:!0}}catch(g){return{ok:!1,error:g.message}}finally{s(!1)}},d=async(y,x,g,w)=>{s(!0);try{const f=Array.isArray(w)&&w.length>0,u=await m1({name:y,email:x,password:g,roles:f?tl(w):void 0});if(u!=null&&u.accessToken){t(u.accessToken);const b=si(u.accessToken);i(li(b,u.user))}return{ok:!0,data:u}}catch(f){return{ok:!1,error:f.message}}finally{s(!1)}},p=async()=>{try{await v1()}catch{}finally{t(null),i(null)}},h=v.useMemo(()=>({accessToken:n,user:a,isAuthenticated:l,loading:o,login:c,register:d,logout:p,refresh:g1}),[n,a,l,o]),m=v.useRef(!1);return v.useEffect(()=>{m.current||(Qx({getAccessToken:()=>n,setAccessToken:y=>t(y),onLogout:()=>p()}),m.current=!0)},[]),r.jsx($h.Provider,{value:h,children:e})}function Ge(){const e=v.useContext($h);if(!e)throw new Error("useAuth debe usarse dentro de AuthProvider");return e}const Hh="/assets/Koop%20Logo-DEFOyNWT.png";function e2(){var m,y;const{login:e,loading:n}=Ge(),t=Pt(),i=((y=(m=Hn().state)==null?void 0:m.from)==null?void 0:y.pathname)||"/dashboard",[o,s]=v.useState(""),[l,c]=v.useState(""),[d,p]=v.useState(""),h=async x=>{x.preventDefault(),p(""),console.log("Submitting login form, Hola q ac",o);const g=await e(o,l);if(!g.ok){p(g.error||"Error al iniciar sesión");return}t(i,{replace:!0})};return v.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),r.jsxs("div",{className:"auth-page",children:[r.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:r.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),r.jsx("div",{className:"auth-bg-overlay"}),r.jsxs("div",{className:"auth-card",children:[r.jsx(R,{to:"/",children:r.jsx("img",{src:Hh,alt:"Logo KOOP",className:"logo"})}),r.jsx("h2",{children:"Login KOOP"}),d&&r.jsx("div",{className:"auth-error",children:d}),r.jsxs("form",{onSubmit:h,children:[r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"email",children:"Correo"}),r.jsx("input",{id:"email",type:"email",placeholder:"Ingrese su correo",value:o,onChange:x=>s(x.target.value),required:!0})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"password",children:"Contraseña"}),r.jsx("input",{id:"password",type:"password",placeholder:"Ingrese su contraseña",value:l,onChange:x=>c(x.target.value),required:!0})]}),r.jsx("button",{type:"submit",className:"login-button",disabled:n,children:n?"Ingresando...":"Iniciar sesión"})]}),r.jsxs("div",{className:"auth-actions",children:["¿No tienes cuenta? ",r.jsx(R,{to:"/register",children:"Regístrate"})," · ",r.jsx(R,{to:"/",children:"Volver al inicio"})]})]})]})}function n2(){const[e,n]=v.useState({name:"",email:"",password:""}),[t,a]=v.useState(!1),[i,o]=v.useState(""),[s,l]=v.useState(""),{register:c}=Ge(),d=Pt(),p=m=>n({...e,[m.target.name]:m.target.value}),h=async m=>{m.preventDefault(),o(""),l(""),a(!0);try{const y=await c(e.name,e.email,e.password);if(y.ok){const x=y.data||{ok:!0};x!=null&&x.accessToken?d("/dashboard"):(l("Tu registro fue recibido. Un administrador activara tu cuenta y te avisaremos por correo."),n({name:"",email:"",password:""}))}else o(y.error||"Error en registro")}catch(y){const x=(y==null?void 0:y.message)||"Error en registro";o(x)}finally{a(!1)}};return v.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]),r.jsxs("div",{className:"auth-page",children:[r.jsx("video",{className:"auth-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:r.jsx("source",{src:"/KoopCentroInternacional.mp4",type:"video/mp4"})}),r.jsx("div",{className:"auth-bg-overlay"}),r.jsxs("div",{className:"auth-card",children:[r.jsx("img",{src:Hh,alt:"Logo KOOP",className:"logo"}),r.jsx("h2",{children:"Crear Cuenta"}),i&&r.jsx("div",{className:"auth-error",children:i}),s&&r.jsx("div",{className:"auth-info",children:s}),r.jsxs("form",{onSubmit:h,children:[r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"name",children:"Nombre"}),r.jsx("input",{id:"name",name:"name",type:"text",placeholder:"Tu nombre",value:e.name,onChange:p})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"email",children:"Correo"}),r.jsx("input",{id:"email",name:"email",type:"email",placeholder:"tu@email.com",value:e.email,onChange:p,required:!0})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{htmlFor:"password",children:"Contrasena"}),r.jsx("input",{id:"password",name:"password",type:"password",placeholder:"Minimo 8 caracteres",value:e.password,onChange:p,required:!0})]}),r.jsx("button",{type:"submit",className:"login-button",disabled:t,children:t?"Creando...":"Registrarme"})]}),r.jsxs("div",{className:"auth-actions",children:["Ya tienes cuenta? ",r.jsx(R,{to:"/login",children:"Inicia sesion"})]})]})]})}function r2(e){return e!=null&&e.roles?(Array.isArray(e.roles)?e.roles:[e.roles]).map(n=>String(n||"").toLowerCase()).includes("admin"):!1}function t2(){const{user:e,logout:n}=Ge(),t=r2(e);return e?r.jsxs("div",{style:{padding:24,display:"flex",flexDirection:"column",gap:16},children:[r.jsx("h1",{children:"Panel Privado"}),r.jsxs("div",{children:[r.jsxs("p",{children:["Bienvenido: ",e.email]}),r.jsxs("p",{children:["Roles: ",Array.isArray(e.roles)?e.roles.join(", "):"N/A"]}),r.jsxs("p",{children:["Estado: ",e.active===!1?"Inactivo":"Activo"]})]}),t&&r.jsx("div",{style:{display:"flex",gap:12},children:r.jsx(R,{className:"btn btn-primary",to:"/admin/usuarios",children:"Gestionar usuarios"})}),r.jsx("div",{children:r.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Cerrar sesion"})})]}):r.jsxs("div",{style:{padding:24},children:[r.jsx("h1",{children:"Panel Privado"}),r.jsx("p",{children:"No hay usuario."})]})}async function qh(){const{data:e}=await ze.get("/admin/users");return e}async function a2(e,n){const{data:t}=await ze.patch(`/admin/users/${e}/active`,{active:n});return t}async function i2(e){const{data:n}=await ze.post(`/admin/users/${e}/grant-admin`);return n}async function o2(e){const{data:n}=await ze.post(`/admin/users/${e}/revoke-admin`);return n}async function s2(e){const{data:n}=await ze.delete(`/admin/users/${e}`);return n}async function sc(){const{data:e}=await ze.get("/admin/clients/active");return e}async function l2(e,n){const{data:t}=await ze.patch(`/admin/clients/${e}`,n);return t}async function c2(e,n){const{data:t}=await ze.patch(`/admin/clients/${e}/assign`,{adminUserId:n});return t}async function d2(e,n){const{data:t}=await ze.post(`/admin/clients/from-user/${e}`,n);return t}async function p2(e,n){const t={};n&&(t["x-delete-pass"]=n);const{data:a}=await ze.delete(`/admin/clients/${e}`,{headers:t});return a}const Fd={success:{bg:"#064e3b",fg:"#a7f3d0",border:"rgba(16,185,129,0.35)"},danger:{bg:"#7f1d1d",fg:"#fecaca",border:"rgba(248,113,113,0.35)"}};function Yh({kind:e="success",children:n,autoHideMs:t,onClose:a,style:i,className:o}){const[s,l]=v.useState(!1);v.useEffect(()=>{const h=setTimeout(()=>l(!0),10);return()=>clearTimeout(h)},[]),v.useEffect(()=>{if(!t)return;const h=setTimeout(()=>{l(!1);const m=setTimeout(()=>a==null?void 0:a(),220);return()=>clearTimeout(m)},t);return()=>clearTimeout(h)},[t,a]);const c=Fd[e]||Fd.success,d={background:c.bg,color:c.fg,border:`1px solid ${c.border}`,padding:12,borderRadius:8,marginBottom:16,boxShadow:"0 6px 18px rgba(0,0,0,0.25) inset",transition:"opacity 200ms ease, transform 200ms ease",opacity:s?1:0,transform:s?"translateY(0)":"translateY(-6px)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10},p=()=>{l(!1),setTimeout(()=>a==null?void 0:a(),200)};return r.jsxs("div",{role:"alert",className:o,style:{...d,...i||{}},children:[r.jsx("div",{style:{lineHeight:1.4},children:n}),a&&r.jsx("button",{type:"button",onClick:p,"aria-label":"Cerrar aviso",style:{background:"transparent",color:c.fg,border:"none",fontSize:18,lineHeight:1,cursor:"pointer",padding:"2px 4px"},children:"×"})]})}function Gh(e){return r.jsx(Yh,{kind:"success",...e})}function Ji(e){return r.jsx(Yh,{kind:"danger",...e})}const Jh={background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"};function Qh({children:e,style:n}){return r.jsx("div",{style:{display:"grid",gap:10,...n||{}},children:e})}function al({children:e,cols:n=2,style:t}){return r.jsx("div",{style:{display:"grid",gap:10,gridTemplateColumns:`repeat(${n}, 1fr)`,...t||{}},children:e})}function Dn({label:e,type:n="text",value:t,onChange:a,placeholder:i,readOnly:o,inputProps:s,children:l}){return r.jsxs("label",{style:{display:"grid",gap:6},children:[e!=null&&r.jsx("span",{children:e}),l||r.jsx("input",{type:n,value:t,onChange:a,placeholder:i,readOnly:o,style:Jh,...s||{}})]})}function u2({label:e,value:n,onChange:t,rows:a=3,placeholder:i,textareaProps:o}){return r.jsxs("label",{style:{display:"grid",gap:6},children:[e!=null&&r.jsx("span",{children:e}),r.jsx("textarea",{rows:a,value:n,onChange:t,placeholder:i,style:{...Jh,resize:"vertical"},...o||{}})]})}const Ud=["admin","user"];function tt(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=Ud.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Ud.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function h2(e){return tt(e==null?void 0:e.roles).includes("admin")}function f2(){const{user:e}=Ge(),n=h2(e),[t,a]=v.useState([]),[i,o]=v.useState(!1),[s,l]=v.useState(null),[c,d]=v.useState(null),[p,h]=v.useState(null),[m,y]=v.useState(null),[x,g]=v.useState(null),[w,f]=v.useState(!1),[u,b]=v.useState(null),[k,E]=v.useState(null),[A,O]=v.useState(!0),[z,F]=v.useState(!1),[P,ee]=v.useState(""),[de,ce]=v.useState(null),U=e==null?void 0:e.id,kn=async()=>{var D,G;if(n){o(!0),l(null);try{const Z=await qh();a(Array.isArray(Z==null?void 0:Z.items)?Z.items.map(se=>({...se,roles:tt(se.roles)})):[])}catch(Z){l(((G=(D=Z==null?void 0:Z.response)==null?void 0:D.data)==null?void 0:G.message)||(Z==null?void 0:Z.message)||"No se pudo cargar la lista")}finally{o(!1)}}};v.useEffect(()=>{kn()},[n]);const Ie=async(D,G)=>{var Z,se;try{d(D),await a2(D,G),a(V=>V.map(pe=>pe.id===D?{...pe,active:G}:pe))}catch(V){l(((se=(Z=V==null?void 0:V.response)==null?void 0:Z.data)==null?void 0:se.message)||(V==null?void 0:V.message)||"No se pudo actualizar el usuario")}finally{d(null)}},Ze=async D=>{var Z,se;if(window.confirm("Deseas otorgar rol de administrador a este usuario?"))try{l(null),h(D);const V=await i2(D);V!=null&&V.user&&a(pe=>pe.map(xe=>xe.id===D?{...xe,...V.user,roles:tt(V.user.roles)}:xe))}catch(V){l(((se=(Z=V==null?void 0:V.response)==null?void 0:Z.data)==null?void 0:se.message)||(V==null?void 0:V.message)||"No se pudo actualizar los roles")}finally{h(null)}},L=async D=>{var Z,se;if(window.confirm("Deseas quitar el rol de administrador a este usuario?"))try{l(null),h(D);const V=await o2(D);V!=null&&V.user&&a(pe=>pe.map(xe=>xe.id===D?{...xe,...V.user,roles:tt(V.user.roles)}:xe))}catch(V){l(((se=(Z=V==null?void 0:V.response)==null?void 0:Z.data)==null?void 0:se.message)||(V==null?void 0:V.message)||"No se pudo actualizar los roles")}finally{h(null)}},q=async D=>{var Z,se;if(window.confirm("Deseas eliminar este usuario? Esta accion es permanente."))try{y(D),await s2(D),a(V=>V.filter(pe=>pe.id!==D))}catch(V){l(((se=(Z=V==null?void 0:V.response)==null?void 0:Z.data)==null?void 0:se.message)||(V==null?void 0:V.message)||"No se pudo eliminar el usuario")}finally{y(null)}},Y=D=>{b(null),g({userId:D.id,fullName:D.name||"",documentType:"",documentNumber:"",birthDate:"",phone:"",email:D.email||"",address:"",contactInfo:""})},oe=async()=>{var D,G;if(x!=null&&x.userId){b(null);try{f(!0);const Z={fullName:String(x.fullName||"").trim(),documentType:String(x.documentType||"").trim(),documentNumber:String(x.documentNumber||"").trim(),birthDate:x.birthDate?new Date(x.birthDate).toISOString():void 0,phone:String(x.phone||"").trim(),email:String(x.email||"").trim(),address:String(x.address||"").trim(),contactInfo:String(x.contactInfo||"").trim()};if(!Z.fullName){b("El nombre completo es requerido"),f(!1);return}await d2(x.userId,Z),g(null);try{clearTimeout(oe._t)}catch{}ce("Cliente creado y carpeta asignada"),oe._t=setTimeout(()=>ce(null),3500);try{window.scrollTo({top:0,behavior:"smooth"})}catch{}}catch(Z){b(((G=(D=Z==null?void 0:Z.response)==null?void 0:D.data)==null?void 0:G.message)||(Z==null?void 0:Z.message)||"No se pudo crear el cliente")}finally{f(!1)}}};return n?r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",paddingLeft:16,paddingRight:16,paddingBottom:16},children:[r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[r.jsx("style",{children:`
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
        `}),r.jsxs("div",{className:"dash-header",style:{marginBottom:16,gap:12},children:[r.jsx("div",{className:"dash-title",children:"Administrar usuarios"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("input",{className:"input",placeholder:"Buscar por nombre, cédula o correo",value:P,onChange:D=>ee(D.target.value),style:{width:260}}),P&&r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>ee(""),children:"Limpiar"}),r.jsx("button",{className:"btn btn-secondary",onClick:kn,disabled:i,children:i?"Actualizando...":"Refrescar"})]})]}),de&&r.jsx(Gh,{autoHideMs:3500,children:de}),s&&r.jsx(Ji,{children:s}),(()=>{const D=j=>String(j||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),G=D(P),Z=j=>{if(!G)return!0;const K=[j.document,j.documentNumber,j.cedula,j.dni,j.idNumber,j.numeroDocumento];return[j.name,j.email,...K].some(Je=>D(Je).includes(G))},se=t.filter(Z),V=(j,K)=>{const ae=j!=null&&j.createdAt?new Date(j.createdAt).getTime():0;return(K!=null&&K.createdAt?new Date(K.createdAt).getTime():0)-ae},pe=j=>(j==null?void 0:j.active)===!1||(j==null?void 0:j.isActive)===!1,xe=se.filter(pe).sort(V),Ne=se.filter(j=>!pe(j)).sort(V),T=j=>{const K=j.createdAt?new Date(j.createdAt):null,ae=tt(j.roles),Je=ae.includes("admin"),ne=j.active!==!1&&j.isActive!==!1,Ke=U===j.id,Qe=ae.length>0?ae.join(", "):"-";return r.jsxs("tr",{children:[r.jsx("td",{children:j.name||"-"}),r.jsx("td",{children:j.email}),r.jsx("td",{children:Qe}),r.jsx("td",{children:r.jsx("span",{className:`me-badge ${ne?"me-badge-success":"me-badge-error"}`,children:ne?"Activo":"Inactivo"})}),r.jsx("td",{children:K?K.toLocaleString():"-"}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Ie(j.id,!ne),disabled:c===j.id,children:c===j.id?"Guardando...":ne?"Desactivar":"Activar"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Y(j),children:"Convertir a cliente"}),Je?r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>L(j.id),disabled:p===j.id||Ke,title:Ke?"No puedes modificar tu propio rol":"Quitar rol admin",children:p===j.id?"Quitando...":"Quitar admin"}):r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Ze(j.id),disabled:p===j.id,children:p===j.id?"Asignando...":"Hacer admin"}),r.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>q(j.id),disabled:m===j.id||Ke,title:Ke?"No puedes eliminar tu propio usuario":"Eliminar usuario",children:m===j.id?"Eliminando...":"Eliminar"})]})})]},j.id)};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"dash-item only-desktop",style:{marginBottom:16},children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("h4",{style:{margin:0},children:["Usuarios creados (no activados)",xe.length?` · ${xe.length}`:""]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>O(j=>!j),children:A?"Ocultar":"Mostrar"})]}),A&&r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs("table",{className:"me-table",style:{minWidth:720},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nombre"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Roles"}),r.jsx("th",{children:"Activo"}),r.jsx("th",{children:"Creado"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[xe.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:6,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay usuarios no activados"})}),xe.map(T)]})]})})]}),r.jsxs("div",{className:"dash-item only-desktop",children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("h4",{style:{margin:0},children:["Usuarios activados",Ne.length?` · ${Ne.length}`:""]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>F(j=>!j),children:z?"Ocultar":"Mostrar"})]}),z&&r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs("table",{className:"me-table",style:{minWidth:720},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nombre"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Roles"}),r.jsx("th",{children:"Activo"}),r.jsx("th",{children:"Creado"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[Ne.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:6,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay usuarios activados"})}),Ne.map(T)]})]})})]})]})})(),(()=>{const D=j=>String(j||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),G=D(P),Z=j=>{if(!G)return!0;const K=[j.document,j.documentNumber,j.cedula,j.dni,j.idNumber,j.numeroDocumento];return[j.name,j.email,...K].some(Je=>D(Je).includes(G))},se=t.filter(Z),V=(j,K)=>{const ae=j!=null&&j.createdAt?new Date(j.createdAt).getTime():0;return(K!=null&&K.createdAt?new Date(K.createdAt).getTime():0)-ae},pe=j=>(j==null?void 0:j.active)===!1||(j==null?void 0:j.isActive)===!1,xe=se.filter(pe).sort(V),Ne=se.filter(j=>!pe(j)).sort(V),T=j=>{const K=j.createdAt?new Date(j.createdAt):null,ae=tt(j.roles),Je=ae.includes("admin"),ne=j.active!==!1&&j.isActive!==!1,Ke=U===j.id,Qe=k===j.id,Xe=ae.length>0?ae.join(", "):"-";return r.jsxs("div",{className:"mobile-item",children:[r.jsxs("button",{type:"button",className:"btn btn-primary btn-sm mobile-item-header",onClick:()=>E(Cn=>Cn===j.id?null:j.id),"aria-expanded":Qe,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("div",{className:"mobile-item-title",children:j.name||"-"}),r.jsx("div",{style:{opacity:.9,fontSize:12,paddingRight:10},children:Qe?"−":"+"})]}),Qe&&r.jsxs("div",{className:"mobile-item-details",children:[r.jsxs("div",{className:"kv",children:[r.jsx("span",{children:"Email"}),r.jsx("div",{children:j.email||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Roles"}),r.jsx("div",{children:Xe})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Estado"}),r.jsx("div",{children:r.jsx("span",{className:`me-badge ${ne?"me-badge-success":"me-badge-error"}`,children:ne?"Activo":"Inactivo"})})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Creado"}),r.jsx("div",{children:K?K.toLocaleString():"-"})]}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:10,justifyContent:"flex-end"},children:[r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Ie(j.id,!ne),disabled:c===j.id,children:c===j.id?"Guardando...":ne?"Desactivar":"Activar"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Y(j),children:"Convertir a cliente"}),Je?r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>L(j.id),disabled:p===j.id||Ke,title:Ke?"No puedes modificar tu propio rol":"Quitar rol admin",children:p===j.id?"Quitando...":"Quitar admin"}):r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Ze(j.id),disabled:p===j.id,children:p===j.id?"Asignando...":"Hacer admin"}),r.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>q(j.id),disabled:m===j.id||Ke,title:Ke?"No puedes eliminar tu propio usuario":"Eliminar usuario",children:m===j.id?"Eliminando...":"Eliminar"})]})]})]},j.id)};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"dash-item only-mobile",style:{marginBottom:16},children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("h4",{style:{margin:0},children:["Usuarios creados (no activados)",xe.length?` · ${xe.length}`:""]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>O(j=>!j),children:A?"Ocultar":"Mostrar"})]}),A&&r.jsxs("div",{className:"mobile-list",children:[xe.length===0&&r.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay usuarios no activados"}),xe.map(T)]})]}),r.jsxs("div",{className:"dash-item only-mobile",children:[r.jsxs("div",{className:"dash-header",style:{marginBottom:8},children:[r.jsxs("h4",{style:{margin:0},children:["Usuarios activados",Ne.length?` · ${Ne.length}`:""]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>F(j=>!j),children:z?"Ocultar":"Mostrar"})]}),z&&r.jsxs("div",{className:"mobile-list",children:[Ne.length===0&&r.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay usuarios activados"}),Ne.map(T)]})]})]})})()]}),x&&r.jsx("div",{role:"dialog","aria-modal":"true",className:"modal-overlay",onClick:D=>{D.target===D.currentTarget&&g(null)},children:r.jsxs("div",{className:"modal-card",role:"document",children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("div",{className:"dash-title",children:"Convertir usuario en cliente"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>g(null),"aria-label":"Cerrar",children:"Cerrar"})]}),u&&r.jsx(Ji,{onClose:()=>b(null),children:u}),r.jsx("style",{children:`
            .cu-form { display: grid; gap: 12px; }
            .cu-row { display: grid; gap: 12px; }
            @media (min-width: 480px) { .cu-row.two { grid-template-columns: 1fr 1fr; } }
            .cu-field > span { font-size: 12px; letter-spacing: .02em; opacity: .85; margin-bottom: 6px; }
            .cu-input, .cu-textarea { background: #1b263b; color: #e2e8f0; border: 1px solid rgba(148,163,184,0.35); border-radius: 10px; padding: 10px 12px; }
            .cu-input::placeholder, .cu-textarea::placeholder { color: #9fb3cc; opacity: .75; }
            .cu-input:focus, .cu-textarea:focus { outline: none; border-color: #38bdf8; box-shadow: 0 0 0 2px rgba(56,189,248,.25); }
          `}),r.jsxs(Qh,{children:[r.jsx(Dn,{label:"Nombre completo",value:x.fullName,onChange:D=>g(G=>({...G,fullName:D.target.value})),placeholder:"Nombre y apellidos"}),r.jsxs(al,{cols:2,children:[r.jsx(Dn,{label:"Tipo de documento",value:x.documentType,onChange:D=>g(G=>({...G,documentType:D.target.value})),placeholder:"CC / CE / NIT / PAS"}),r.jsx(Dn,{label:"N�mero de documento",value:x.documentNumber,onChange:D=>g(G=>({...G,documentNumber:D.target.value})),placeholder:"Ej: 80761460"})]}),r.jsx(Dn,{label:"Fecha de nacimiento",type:"date",value:x.birthDate,onChange:D=>g(G=>({...G,birthDate:D.target.value}))}),r.jsxs(al,{cols:2,children:[r.jsx(Dn,{label:"Tel�fono fijo / celular",value:x.phone,onChange:D=>g(G=>({...G,phone:D.target.value})),placeholder:"Ej: 300 123 4567"}),r.jsx(Dn,{label:"Correo electr�nico",type:"email",value:x.email,onChange:D=>g(G=>({...G,email:D.target.value})),placeholder:"nombre@dominio.com"})]}),r.jsx(Dn,{label:"Direcci�n f�sica",value:x.address,onChange:D=>g(G=>({...G,address:D.target.value})),placeholder:"Calle 123 #45-67, Ciudad"}),r.jsx(u2,{label:"Informaci�n de contacto (opcional)",value:x.contactInfo,onChange:D=>g(G=>({...G,contactInfo:D.target.value})),placeholder:"Notas internas, referencias, etc."})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>g(null),disabled:w,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:oe,disabled:w,children:w?"Guardando...":"Crear cliente"})]})]})})]}):r.jsx("div",{className:"dash-page",style:{padding:40},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Esta seccion esta disponible solo para administradores."})]})})}const Zd=["admin","user"];function m2(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=Zd.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Zd.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function g2(e){return m2(e==null?void 0:e.roles).includes("admin")}const x2={derly:{name:"Derly Ramírez",initials:"DR",color:"#0ea5e9"},juan:{name:"Juan F. Rey",initials:"JR",color:"#22d3ee"},valentina:{name:"Valentina M.",initials:"VM",color:"#a78bfa"}},v2=[{id:"T-901",title:"Radicar tutela por vacaciones compensadas",client:"AGG MRO",status:"en-curso",priority:"alta",due:"2025-09-22",assignee:"derly",tags:["Laboral","Audiencia"],radicado:"11001-31-05-2025-00123"},{id:"T-902",title:"Revisión contrato Promesa de Compraventa (Apto 501)",client:"Ramírez – Mendoza",status:"pendiente",priority:"media",due:"2025-09-20",assignee:"juan",tags:["Civil","Notaría 27"],radicado:null},{id:"T-903",title:"Concepto: Nota crédito RADIAN ya aceptada",client:"Tus-Cuentas",status:"pendiente",priority:"alta",due:"2025-09-19",assignee:"juan",tags:["Tributario","DIAN"],radicado:null},{id:"T-904",title:"Solicitud CHIP y verificación Folio",client:"Inmobiliario",status:"hecho",priority:"baja",due:"2025-09-15",assignee:"valentina",tags:["PH","Certificados"],radicado:"50C-2024-009988"},{id:"T-905",title:"Memorial de sustitución de comprador (Otrosí)",client:"Villa Carolina",status:"en-curso",priority:"media",due:"2025-09-23",assignee:"derly",tags:["Civil","Minuta"],radicado:null}];function b2(e){try{return new Date(e+"T00:00:00").toLocaleDateString("es-CO",{year:"numeric",month:"short",day:"2-digit"})}catch{return e}}function y2(e){try{return new Date(e)<new Date(new Date().toDateString())}catch{return!1}}function w2(){const{user:e}=Ge(),n=g2(e),[t,a]=v.useState(""),[i,o]=v.useState("derly"),[s,l]=v.useState("all"),[c,d]=v.useState(!0),[p,h]=v.useState(!1),m=v.useMemo(()=>p?[]:v2,[p]),y=v.useMemo(()=>{let g=m.slice();c&&(g=g.filter(f=>f.assignee===i)),s!=="all"&&(g=g.filter(f=>f.status===s));const w=t.trim().toLowerCase();return w&&(g=g.filter(f=>[f.title,f.client,f.radicado,(f.tags||[]).join(" ")].filter(Boolean).join(" ").toLowerCase().includes(w))),g},[m,c,i,s,t]),x=`${y.length} resultado${y.length===1?"":"s"}`;return n?r.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[r.jsx("style",{children:`
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
        `}),r.jsxs("div",{className:"tasks-container",children:[r.jsxs("div",{className:"tasks-header",children:[r.jsxs("div",{className:"brand","aria-label":"Koop Strategic Advisory",children:[r.jsx("div",{className:"logo","aria-hidden":"true",children:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M12 2L20 6V18L12 22L4 18V6L12 2Z",stroke:"white",strokeWidth:"2"}),r.jsx("path",{d:"M12 7V17",stroke:"white",strokeWidth:"2"}),r.jsx("path",{d:"M7 9L12 12L17 9",stroke:"white",strokeWidth:"2"})]})}),r.jsx("h1",{children:"Tablero de Tareas"})]}),r.jsxs("div",{className:"toolbar",role:"search",children:[r.jsx("div",{className:"field",children:r.jsx("input",{className:"tasks-input",type:"search",placeholder:"Buscar por asunto, cliente o radicado…","aria-label":"Buscar",value:t,onChange:g=>a(g.target.value)})}),r.jsx("div",{className:"field",children:r.jsxs("select",{className:"tasks-select","aria-label":"Usuario actual",value:i,onChange:g=>o(g.target.value),children:[r.jsx("option",{value:"derly",children:"Derly Ramírez (Abogada)"}),r.jsx("option",{value:"juan",children:"Juan F. Rey (Socio)"}),r.jsx("option",{value:"valentina",children:"Valentina Martínez (Asistente)"})]})}),r.jsx("div",{className:"field",children:r.jsxs("select",{className:"tasks-select","aria-label":"Estado",value:s,onChange:g=>l(g.target.value),children:[r.jsx("option",{value:"all",children:"Todos los estados"}),r.jsx("option",{value:"pendiente",children:"Pendiente"}),r.jsx("option",{value:"en-curso",children:"En curso"}),r.jsx("option",{value:"hecho",children:"Hecho"})]})})]})]}),r.jsxs("main",{className:"grid","aria-live":"polite",children:[r.jsxs("aside",{className:"sidebar panel",children:[r.jsx("h2",{children:"Filtros rápidos"}),r.jsxs("div",{className:"chips",children:[r.jsx("button",{className:"chip",onClick:()=>l("all"),children:"Hoy"}),r.jsx("button",{className:"chip",onClick:()=>l("all"),children:"Vencidos"}),r.jsx("button",{className:"chip",onClick:()=>l("all"),children:"Alta prioridad"}),r.jsx("button",{className:"chip",onClick:()=>l("all"),children:"Cliente corporativo"})]}),r.jsx("h2",{style:{marginTop:18},children:"Vistas"}),r.jsxs("div",{className:"chips",children:[r.jsx("button",{className:"chip","data-active":c?"true":"false",onClick:()=>d(!0),children:"Mis tareas"}),r.jsx("button",{className:"chip","data-active":c?"false":"true",onClick:()=>d(!1),children:"Todas"})]})]}),r.jsxs("section",{className:"board panel",children:[r.jsxs("div",{className:"board-header",children:[r.jsx("h3",{children:c?"Mis tareas":"Todas las tareas"}),r.jsx("span",{className:"count",children:x})]}),y.length===0?r.jsxs("div",{className:"empty",children:[r.jsxs("svg",{width:"72",height:"72",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M4 7H20V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7Z",stroke:"#67e8f9",strokeWidth:"1.5"}),r.jsx("path",{d:"M9 3H15V7H9V3Z",stroke:"#67e8f9",strokeWidth:"1.5"}),r.jsx("path",{d:"M8 12H16",stroke:"#94a3b8",strokeWidth:"1.5"}),r.jsx("path",{d:"M8 16H13",stroke:"#94a3b8",strokeWidth:"1.5"})]}),r.jsxs("div",{children:[r.jsx("strong",{children:"No tienes tareas asignadas"}),r.jsx("p",{style:{margin:".35rem 0 0",fontSize:14,color:"#a5b4fc"},children:"Cuando te asignen una tarea aparecerá aquí."})]})]}):r.jsx("div",{className:"cards",children:y.map(g=>{const w=x2[g.assignee]||{name:g.assignee,initials:(g.assignee||"?").slice(0,2).toUpperCase(),color:"#0ea5e9"},f=g.priority==="alta"?"high":g.priority==="media"?"medium":"low",u=g.status==="en-curso"?"En curso":g.status==="hecho"?"Hecho":"Pendiente";return r.jsxs("article",{className:"card",role:"article","aria-label":g.title,children:[r.jsx("h4",{className:"title",children:g.title}),r.jsxs("div",{className:"meta",children:[r.jsxs("span",{className:"badge","data-variant":f,children:["Prioridad: ",g.priority]}),r.jsxs("span",{className:"badge","data-variant":"due",children:[y2(g.due)?"Vencida":"Vence",": ",b2(g.due)]}),r.jsxs("span",{className:"badge",children:["Estado: ",u]}),g.radicado?r.jsxs("span",{className:"badge",children:["Radicado: ",g.radicado]}):null,r.jsxs("span",{className:"badge",children:["Cliente: ",g.client]}),(g.tags||[]).map(b=>r.jsx("span",{className:"badge",children:b},b))]}),r.jsxs("div",{className:"assignee","aria-label":"Responsable",children:[r.jsx("div",{className:"avatar",style:{background:w.color},"aria-hidden":"true",children:w.initials}),r.jsxs("small",{children:["Asignada a ",r.jsx("strong",{children:w.name})]})]})]},g.id)})}),r.jsx("div",{className:"footer-actions",children:r.jsx("button",{className:"link",onClick:()=>h(g=>!g),children:"(Demo) Alternar escenario sin tareas"})})]})]})]})]})}):r.jsx("div",{className:"dash-page",style:{padding:40},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Esta sección está disponible solo para administradores."})]})})}async function at({limit:e,subfolder:n}={}){const t={};typeof e=="number"&&(t.limit=e),n&&(t.subfolder=n);const{data:a}=await ze.get("/docs/recent",{params:t});return a}async function Xh(e,{subfolder:n}={}){if(!e)throw new Error("Archivo requerido");const t=new FormData;t.append("file",e),n&&t.append("subfolder",n);const{data:a}=await ze.post("/docs/upload",t,{headers:{"Content-Type":"multipart/form-data"}});return a}async function j2(e,n=600){if(!e)throw new Error("Key requerida");const t={key:e,expires:n},{data:a}=await ze.get("/docs/download-url",{params:t});return a}async function k2({subfolder:e}={}){const n={};e&&(n.subfolder=e);const{data:t}=await ze.get("/docs/diag",{params:n});return t}function jo(e){if(e==null)return"";try{return String(e).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0000-\u001F\u007F-\u009F]/g,"").replace(/\u00A0/g," ").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/\uFFFD/g,"").replace(/\s+/g," ").trim().toUpperCase()}catch{return String(e).toUpperCase()}}function il({selectedClient:e,isModal:n=!1,onClose:t}){var lr,cr,et;const[a,i]=v.useState("docs"),{user:o,accessToken:s}=Ge(),l=jo((o==null?void 0:o.name)||""),c="clientes",p=(Array.isArray(o==null?void 0:o.roles)?o.roles:o!=null&&o.roles?[o==null?void 0:o.roles]:[]).map(C=>String(C||"").trim().toLowerCase()).includes("admin"),[h,m]=v.useState([]),[y,x]=v.useState(!1),[g,w]=v.useState(null),[f,u]=v.useState([]),[b,k]=v.useState(!1),[E,A]=v.useState(null),[O,z]=v.useState(null),F=v.useRef(null),[P,ee]=v.useState(e||null),[de,ce]=v.useState({}),[U,kn]=v.useState(null),[Ie,Ze]=v.useState(!1),[L,q]=v.useState(new Set),[Y,oe]=v.useState([]),[D,G]=v.useState(null),[Z,se]=v.useState(!1),[V,pe]=v.useState(new Set),[xe,Ne]=v.useState(!1),[T,j]=v.useState(!1),[K,ae]=v.useState(!1),[Je,ne]=v.useState(!1),[Ke,Qe]=v.useState(!1),[Xe,Cn]=v.useState(null),[Lr,Xr]=v.useState(""),[Bn,sr]=v.useState({radicado:"",clase:"",demandante:"",demandado:"",juzgado:"",estado:""}),Vt=async()=>{k(!0),A(null),z(null);try{const C=await at({limit:20,subfolder:c});u(Array.isArray(C==null?void 0:C.items)?C.items:[]),C!=null&&C.warning&&z(C.warning)}catch(C){A((C==null?void 0:C.message)||"Error cargando documentos")}finally{k(!1)}};v.useEffect(()=>{a==="docs"&&(p?Vt():H())},[a,p]),v.useEffect(()=>{e&&n&&(ee(e),Ba(e))},[e,n]),v.useEffect(()=>{if(!p)return;let C=!1;return(async()=>{var _,W;try{x(!0),w(null);const $=await sc();if(C)return;const re=Array.isArray($==null?void 0:$.items)?$.items:[],un=String((o==null?void 0:o.id)||(o==null?void 0:o.sub)||"").trim();m(re.filter(Se=>{var Ee;return String(((Ee=Se==null?void 0:Se.assignedAdmin)==null?void 0:Ee.id)||"").trim()===un}))}catch($){C||w(((W=(_=$==null?void 0:$.response)==null?void 0:_.data)==null?void 0:W.message)||($==null?void 0:$.message)||"No se pudo cargar clientes asignados")}finally{C||x(!1)}})(),()=>{C=!0}},[p,o]);const ko=()=>{var C;return(C=F.current)==null?void 0:C.click()},Va=async C=>{var W,$;const _=($=(W=C.target)==null?void 0:W.files)==null?void 0:$[0];if(_)try{k(!0),A(null);const re=await Xh(_,{subfolder:c});re!=null&&re.file&&u(un=>[re.file,...un]),await Vt()}catch(re){A((re==null?void 0:re.message)||"Error subiendo documento")}finally{k(!1);try{C.target.value=null}catch{}}},qn=async(C,_)=>{try{const{url:W}=await j2(C,600);window.open(W||_,"_blank")}catch{_&&window.open(_,"_blank")}},Ba=async C=>{if(C!=null&&C.documentNumber){Ze(!0);try{const _=await at({limit:100,subfolder:`clientes/${C.documentNumber}`}),W={},$=`clientes/${C.documentNumber}`;Array.isArray(_==null?void 0:_.items)&&_.items.forEach(re=>{var un,Se;if(re.isFolder){const Ee=(un=re.key)==null?void 0:un.replace(/\/$/,"");if(Ee&&Ee!==$&&Ee.startsWith($+"/")){const he=Ee.replace($+"/","").split("/").pop()||"Carpeta";W[Ee]={name:he,path:Ee,documents:[],isFolder:!0}}}else{const Ee=((Se=re.key)==null?void 0:Se.split("/").slice(0,-1).join("/"))||"root";if(Ee&&Ee!==$&&Ee.startsWith($+"/")){if(!W[Ee]){const he=Ee.replace($+"/","").split("/").pop()||"Carpeta";W[Ee]={name:he,path:Ee,documents:[],isFolder:!1}}W[Ee].documents.push(re)}}}),ce(re=>({...re,[C.id]:W}))}catch(_){console.error("Error cargando carpetas del cliente:",_),ce(W=>({...W,[C.id]:{}}))}finally{Ze(!1)}}},Fa=async C=>{L.has(C.id)?(q(W=>{const $=new Set(W);return $.delete(C.id),$}),ee(null),kn(null)):(q(W=>new Set(W).add(C.id)),ee(C),kn(null),de[C.id]||await Ba(C))},S=async C=>{if(kn(C),C.documents&&C.documents.length>0)u(C.documents);else{k(!0);try{const _=await at({limit:100,subfolder:C.path}),W=Array.isArray(_==null?void 0:_.items)?_.items.filter($=>!$.isFolder):[];u(W),ce($=>({...$,[P.id]:{...$[P.id],[C.path]:{...C,documents:W}}}))}catch(_){console.error("Error cargando documentos de la carpeta:",_),u([])}finally{k(!1)}}},H=async()=>{var C,_,W;se(!0);try{console.log("Usuario actual:",o),console.log("Token de acceso:",s?"Presente":"Ausente"),console.log("Roles del usuario:",o==null?void 0:o.roles),console.log("Intentando verificar conectividad...");try{const he=await k2();console.log("Health check exitoso:",he)}catch(he){throw console.error("Health check falló:",he),new Error("No se puede conectar con el servidor de documentos")}console.log("Intentando cargar documentos del usuario...");const $=await at({limit:100,subfolder:"clientes"});console.log("Datos de la API para usuario:",$);const re=Array.isArray($==null?void 0:$.items)?$.items:[];console.log("Items procesados:",re);const un=new Map;let Se="clientes";const Ee=re.find(he=>he.isFolder&&he.key&&he.key.includes("clientes/"));if(Ee){const he=Ee.key.split("/");he.length>=2&&(Se=`${he[0]}/${he[1]}/`)}console.log("Ruta base del cliente:",Se),console.log("Items encontrados:",re.map(he=>({key:he.key,isFolder:he.isFolder,name:he.name}))),re.forEach(he=>{if(he.isFolder){const Gn=he.key;if(Gn&&Gn.startsWith(Se)&&Gn!==Se){const nt=Gn.replace(Se,"").replace(/^\/+|\/+$/g,"");nt&&!nt.includes("/")&&un.set(Gn,{name:nt,path:Gn,documents:[],isFolder:!0})}}}),re.forEach(he=>{var Gn;if(!he.isFolder){const nt=((Gn=he.key)==null?void 0:Gn.split("/"))||[];if(nt.length>2){const Za=nt.slice(0,-1).join("/");if(Za.startsWith(Se)&&Za!==Se){const lc=Za.replace(Se,"").replace(/^\/+|\/+$/g,"");if(lc&&!lc.includes("/")){const cc=un.get(Za);cc&&!he.isFolder&&cc.documents.push(he)}}}}});const Ua=Array.from(un.values());console.log("Carpetas del usuario cargadas:",Ua),oe(Ua)}catch($){console.error("Error cargando carpetas del usuario:",$),console.error("Detalles del error:",{message:$.message,status:(C=$.response)==null?void 0:C.status,data:(_=$.response)==null?void 0:_.data}),((W=$.response)==null?void 0:W.status)===401?A("Error de autenticación. Por favor, cierra sesión y vuelve a iniciar sesión."):A("Error cargando carpetas: "+($.message||"Error desconocido"))}finally{se(!1)}},J=async C=>{if(G(C),C.documents&&C.documents.length>0)u(C.documents);else try{k(!0);const _=await at({limit:50,subfolder:C.path}),W=Array.isArray(_==null?void 0:_.items)?_.items.filter($=>!$.isFolder):[];u(W),oe($=>$.map(re=>re.path===C.path?{...re,documents:W}:re))}catch(_){console.error("Error cargando documentos de la carpeta:",_),A("Error cargando documentos de la carpeta")}finally{k(!1)}},M=C=>{V.has(C.path)?(pe(W=>{const $=new Set(W);return $.delete(C.path),$}),G(null)):(pe(W=>new Set(W).add(C.path)),J(C))},Q=async()=>{try{console.log("Creando nuevo proceso..."),Ne(!1),A(null)}catch(C){A("Error creando proceso: "+C.message)}},Oe=()=>{j(!0)},je=C=>{var _;Cn(C),Xr(C.name||((_=C.key)==null?void 0:_.split("/").pop())||""),ae(!0)},De=C=>{Cn(C),ne(!0)},Yn=async()=>{try{console.log("Guardando información del proceso:",Bn),Qe(!1),A(null)}catch(C){A("Error guardando información: "+C.message)}};return r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1320},children:[r.jsxs("div",{className:"dash-header",children:[r.jsx("div",{className:"dash-title",children:n?`Expediente - ${(P==null?void 0:P.name)||"Cliente"}`:p?"Mis expedientes":"Mi expediente"}),n&&t&&r.jsx("button",{className:"btn btn-secondary",onClick:t,style:{marginLeft:"auto"},children:"✕ Cerrar"})]}),r.jsxs("div",{className:"dash-item me-subbar",children:[r.jsxs("div",{className:"me-hello",children:["Bienvenido: ",l]}),r.jsxs("select",{className:"me-select","aria-label":"Tipo de b?squeda",children:[r.jsx("option",{children:"Procesos judiciales"}),r.jsx("option",{children:"Demandas"}),r.jsx("option",{children:"Audiencias"})]}),r.jsx("input",{className:"me-input",placeholder:"Buscar..."}),r.jsxs("div",{className:"me-actions",children:[r.jsx("input",{ref:F,type:"file",style:{display:"none"},onChange:Va}),r.jsx("button",{className:"btn btn-primary",onClick:ko,disabled:b,children:b?"Subiendo...":"Radicar documento"}),r.jsx("button",{className:"btn btn-secondary",children:"Ver informaci?n"})]})]}),r.jsxs("div",{className:"me-layout",children:[r.jsxs("aside",{className:"me-left dash-item",children:[r.jsx("div",{className:"me-head",children:p?n?"CARPETAS":"CLIENTE":"CARPETAS"}),r.jsxs("div",{className:"me-tree",children:[!p&&r.jsx(r.Fragment,{children:Z?r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"Cargando carpetas..."}):Y.length===0?r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"No hay carpetas disponibles"}):Y.map(C=>{var W;const _=V.has(C.path);return r.jsxs("div",{style:{marginBottom:"8px"},children:[r.jsxs("div",{style:{cursor:"pointer",color:_?"#4fd1c5":"#e5edf7",fontWeight:"600",padding:"8px 4px",borderRadius:"4px",backgroundColor:_?"#2a3a51":"transparent",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.2s ease"},onClick:()=>M(C),children:[r.jsx("span",{style:{display:"inline-block",transform:_?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s ease",fontSize:"12px",color:_?"#4fd1c5":"#9fb3cc"},children:"▼"}),C.name]}),_&&r.jsx("div",{style:{marginLeft:"16px",marginTop:"4px"},children:r.jsxs("div",{style:{color:"#9fb3cc",fontSize:"12px"},children:[((W=C.documents)==null?void 0:W.length)||0," documentos"]})})]},C.path)})}),p&&n&&P&&r.jsx(r.Fragment,{children:Ie?r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"Cargando carpetas..."}):r.jsxs("div",{children:[Object.values(de[P.id]||{}).map((C,_)=>{var W,$;return r.jsxs("div",{style:{cursor:"pointer",backgroundColor:(U==null?void 0:U.path)===C.path?"#2a3a51":"#1e2a3a",borderRadius:"8px",margin:"4px 0",padding:"12px 16px",border:(U==null?void 0:U.path)===C.path?"1px solid #4fd1c5":"1px solid #394b61",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"12px"},onClick:()=>S(C),onMouseEnter:re=>{(U==null?void 0:U.path)!==C.path&&(re.target.style.backgroundColor="#2a3a51",re.target.style.borderColor="#4fd1c5")},onMouseLeave:re=>{(U==null?void 0:U.path)!==C.path&&(re.target.style.backgroundColor="#1e2a3a",re.target.style.borderColor="#394b61")},children:[r.jsx("div",{style:{width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",color:(U==null?void 0:U.path)===C.path?"#4fd1c5":"#fc771c"},children:r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"})})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{color:(U==null?void 0:U.path)===C.path?"#4fd1c5":"#e5edf7",fontSize:"14px",fontWeight:"500",marginBottom:"2px"},children:C.name}),r.jsxs("div",{style:{color:"#9fb3cc",fontSize:"11px",display:"flex",alignItems:"center",gap:"4px"},children:[r.jsx("span",{style:{display:"inline-block",width:"4px",height:"4px",borderRadius:"50%",backgroundColor:((W=C.documents)==null?void 0:W.length)>0?"#10b981":"#6b7280"}}),(($=C.documents)==null?void 0:$.length)||0," documentos"]})]})]},_)}),Object.keys(de[P.id]||{}).length===0&&!Ie&&r.jsx("div",{style:{color:"#9fb3cc",fontSize:"12px"},children:"No hay carpetas disponibles"})]})}),p&&!n&&g&&r.jsx("div",{className:"me-leaf",style:{color:"#fecaca"},children:g}),p&&!n&&!g&&y&&r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"Cargando clientes�"}),p&&!n&&!y&&h.length===0&&r.jsx("div",{className:"me-leaf",style:{opacity:.8},children:"No tienes clientes asignados"}),p&&!n&&h.length>0&&r.jsx(r.Fragment,{children:h.map(C=>{const _=L.has(C.id);return r.jsxs("div",{style:{marginBottom:"8px"},children:[r.jsxs("div",{style:{cursor:"pointer",color:_?"#4fd1c5":"#e5edf7",fontWeight:"600",padding:"8px 4px",borderRadius:"4px",backgroundColor:_?"#2a3a51":"transparent",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.2s ease"},onClick:()=>Fa(C),children:[r.jsx("span",{style:{display:"inline-block",transform:_?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s ease",fontSize:"12px",color:_?"#4fd1c5":"#9fb3cc"},children:"▼"}),C.name]}),_&&r.jsx("div",{style:{marginLeft:"16px",marginTop:"4px"},children:Ie?r.jsx("div",{style:{color:"#9fb3cc",fontSize:"12px"},children:"Cargando carpetas..."}):r.jsxs("div",{children:[Object.values(de[C.id]||{}).map((W,$)=>{var re,un;return r.jsxs("div",{style:{cursor:"pointer",backgroundColor:(U==null?void 0:U.path)===W.path?"#2a3a51":"#1e2a3a",borderRadius:"8px",margin:"4px 0",padding:"12px 16px",border:(U==null?void 0:U.path)===W.path?"1px solid #4fd1c5":"1px solid #394b61",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"12px"},onClick:()=>S(W),onMouseEnter:Se=>{(U==null?void 0:U.path)!==W.path&&(Se.target.style.backgroundColor="#2a3a51",Se.target.style.borderColor="#4fd1c5")},onMouseLeave:Se=>{(U==null?void 0:U.path)!==W.path&&(Se.target.style.backgroundColor="#1e2a3a",Se.target.style.borderColor="#394b61")},children:[r.jsx("div",{style:{width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",color:(U==null?void 0:U.path)===W.path?"#4fd1c5":"#fc771c"},children:r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"})})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{color:(U==null?void 0:U.path)===W.path?"#4fd1c5":"#e5edf7",fontSize:"14px",fontWeight:"500",marginBottom:"2px"},children:W.name}),r.jsxs("div",{style:{color:"#9fb3cc",fontSize:"11px",display:"flex",alignItems:"center",gap:"4px"},children:[r.jsx("span",{style:{display:"inline-block",width:"4px",height:"4px",borderRadius:"50%",backgroundColor:((re=W.documents)==null?void 0:re.length)>0?"#10b981":"#6b7280"}}),((un=W.documents)==null?void 0:un.length)||0," documentos"]})]})]},$)}),Object.keys(de[C.id]||{}).length===0&&!Ie&&r.jsx("div",{style:{color:"#9fb3cc",fontSize:"12px"},children:"No hay carpetas disponibles"})]})})]},C.id)})})]})]}),r.jsxs("main",{className:"me-center dash-item",children:[r.jsxs("div",{className:"me-tabs",children:[r.jsx("div",{className:`me-tab ${a==="docs"?"active":""}`,onClick:()=>i("docs"),role:"button",tabIndex:0,children:"Documentos del Proceso"}),r.jsx("div",{className:`me-tab ${a==="aud"?"active":""}`,onClick:()=>i("aud"),role:"button",tabIndex:0,children:"Audiencias"})]}),a==="docs"&&r.jsxs("div",{className:"me-table-wrap",children:[P&&U&&r.jsxs("div",{style:{background:"#1e2a3a",padding:"12px 16px",borderBottom:"1px solid #34465a",color:"#e2e8f0",fontSize:"14px"},children:[r.jsx("strong",{children:"Cliente:"})," ",P.name," |",r.jsx("strong",{children:" Carpeta:"})," ",U.name,r.jsxs("span",{style:{color:"#9fb3cc",marginLeft:"8px"},children:["(",((lr=U.documents)==null?void 0:lr.length)||0," documentos)"]})]}),P&&!U&&r.jsxs("div",{style:{background:"#1e2a3a",padding:"12px 16px",borderBottom:"1px solid #34465a",color:"#e2e8f0",fontSize:"14px"},children:[r.jsx("strong",{children:"Cliente seleccionado:"})," ",P.name," -",r.jsx("span",{style:{color:"#9fb3cc"},children:" Selecciona una carpeta para ver sus documentos"})]}),p&&!P&&r.jsx("div",{style:{background:"#1e2a3a",padding:"12px 16px",borderBottom:"1px solid #34465a",color:"#9fb3cc",fontSize:"14px"},children:"Selecciona un cliente para ver sus carpetas y documentos"}),!p&&!D&&r.jsx("div",{style:{background:"#1e2a3a",padding:"12px 16px",borderBottom:"1px solid #34465a",color:"#9fb3cc",fontSize:"14px"},children:"Selecciona una carpeta para ver sus documentos"}),E&&r.jsx("div",{style:{color:"#ef4444",padding:"8px 12px"},children:String(E)}),O&&r.jsxs("div",{style:{color:"#f59e0b",padding:"8px 12px"},children:["Aviso: ",String(O)==="S3_LIST_FORBIDDEN"?"No hay permisos para listar el bucket. Tus documentos siguen disponibles si conservas el enlace.":String(O)]}),r.jsxs("table",{className:"me-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{width:42},children:r.jsx("input",{type:"checkbox"})}),r.jsx("th",{children:"Fecha de registro"}),r.jsx("th",{children:"Documento"}),r.jsx("th",{children:"Tipo"}),r.jsx("th",{children:"Tama?o"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[f.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:6,style:{color:"#9fb3cc",textAlign:"center",padding:"20px"},children:b?"Cargando...":p?P&&U?`No hay documentos en la carpeta "${U.name}"`:P?"Selecciona una carpeta para ver sus documentos":"Selecciona un cliente para ver sus documentos":D?`No hay documentos en la carpeta "${D.name}"`:"Selecciona una carpeta para ver sus documentos"})}),f.map(C=>{const _=C.lastModified?new Date(C.lastModified):C.createdTime?new Date(C.createdTime):null,W=C.name||(C.key||"").split("/").pop(),$=typeof C.size=="number"?Math.max(1,Math.round(C.size/1024)):null,re=C.mimeType||(W&&W.toLowerCase().endsWith(".pdf")?"application/pdf":void 0);return r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("input",{type:"checkbox"})}),r.jsx("td",{children:_?_.toLocaleString():"-"}),r.jsx("td",{title:W,children:W}),r.jsx("td",{children:re?re.split("/")[1]||re:"-"}),r.jsx("td",{children:$?`${$} KB`:"-"}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>qn(C.key,C.downloadURL||C.downloadUrl||C.webContentLink||C.webViewLink),title:"Descargar archivo",children:n?"📥":"Descargar"}),n&&r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>je(C),title:"Renombrar archivo",children:"✏️"}),r.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>De(C),title:"Eliminar archivo",children:"🗑️"})]})]})})]},C.key||C.id)})]})]})]}),a==="aud"&&r.jsx("div",{className:"me-table-wrap",children:r.jsxs("table",{className:"me-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Fecha"}),r.jsx("th",{children:"Actuaci?n"}),r.jsx("th",{children:"Juzgado"}),r.jsx("th",{children:"Estado"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{children:"2025-09-03 08:00"}),r.jsx("td",{children:"Audiencia inicial"}),r.jsx("td",{children:"JDO 003 Laboral"}),r.jsx("td",{children:r.jsx("span",{className:"me-badge me-badge-success",children:"Agendada"})})]})})]})})]}),r.jsx("aside",{className:"me-right dash-item",children:n?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"me-head",children:"Herramientas del Expediente"}),r.jsxs("div",{className:"me-right-content",style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx("button",{className:"btn btn-primary",onClick:()=>Ne(!0),style:{width:"100%",padding:"12px"},children:"📋 Crear Proceso"}),r.jsx("button",{className:"btn btn-secondary",onClick:Oe,style:{width:"100%",padding:"12px"},children:"📁 Agregar Archivo"}),r.jsx("button",{className:"btn btn-secondary",onClick:()=>Qe(!0),style:{width:"100%",padding:"12px"},children:"ℹ️ Información del Expediente"}),r.jsx("hr",{className:"me-hr"}),r.jsx("div",{style:{fontSize:"12px",color:"#9fb3cc",textAlign:"center"},children:"Selecciona un archivo en la tabla para renombrar o eliminar"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"me-head",children:"Datos del Proceso Judicial"}),r.jsxs("div",{className:"me-right-content",children:[r.jsxs("div",{className:"me-proc-grid",children:[r.jsx("div",{className:"me-tag",children:"Radicado"}),r.jsx("div",{children:"110014105009-20250011400"}),r.jsx("div",{className:"me-tag",children:"Clase"}),r.jsx("div",{children:"Laboral - Ordinario"}),r.jsx("div",{className:"me-tag",children:"Demandante"}),r.jsx("div",{children:"Juan Pérez"}),r.jsx("div",{className:"me-tag",children:"Demandado"}),r.jsx("div",{children:"Acme S.A.S."}),r.jsx("div",{className:"me-tag",children:"Juzgado"}),r.jsx("div",{children:"JDO 009 MPC"}),r.jsx("div",{className:"me-tag",children:"Estado"}),r.jsx("div",{children:"En trámite"})]}),r.jsx("hr",{className:"me-hr"}),r.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:"Descargar expediente"})]})]})})]})]}),n&&xe&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>Ne(!1),children:r.jsxs("div",{className:"dash-card",style:{maxWidth:"500px",width:"100%"},onClick:C=>C.stopPropagation(),children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Crear Nuevo Proceso"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Nombre del Proceso:"}),r.jsx("input",{type:"text",className:"me-input",placeholder:"Ej: Demanda por despido injustificado",style:{width:"100%"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Tipo de Proceso:"}),r.jsxs("select",{className:"me-select",style:{width:"100%"},children:[r.jsx("option",{value:"",children:"Selecciona un tipo..."}),r.jsx("option",{value:"laboral",children:"Proceso Laboral"}),r.jsx("option",{value:"penal",children:"Proceso Penal"}),r.jsx("option",{value:"civil",children:"Proceso Civil"}),r.jsx("option",{value:"administrativo",children:"Proceso Administrativo"})]})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>Ne(!1),children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:Q,children:"Crear Proceso"})]})]})}),n&&T&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>j(!1),children:r.jsxs("div",{className:"dash-card",style:{maxWidth:"500px",width:"100%"},onClick:C=>C.stopPropagation(),children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Agregar Archivo"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Seleccionar Archivo:"}),r.jsx("input",{type:"file",className:"me-input",style:{width:"100%"},onChange:C=>{var W;const _=(W=C.target.files)==null?void 0:W[0];_&&Xr(_.name)}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Nombre del Archivo (opcional):"}),r.jsx("input",{type:"text",className:"me-input",value:Lr,onChange:C=>Xr(C.target.value),placeholder:"Dejar vacío para usar el nombre original",style:{width:"100%"}})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>j(!1),children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:()=>{console.log("Subiendo archivo con nombre:",Lr),j(!1)},children:"Subir Archivo"})]})]})}),n&&K&&Xe&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>ae(!1),children:r.jsxs("div",{className:"dash-card",style:{maxWidth:"500px",width:"100%"},onClick:C=>C.stopPropagation(),children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Renombrar Archivo"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Archivo actual:"}),r.jsx("div",{style:{background:"#1e2a3a",padding:"8px 12px",borderRadius:"6px",color:"#9fb3cc",fontSize:"14px"},children:Xe.name||((cr=Xe.key)==null?void 0:cr.split("/").pop())})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Nuevo nombre:"}),r.jsx("input",{type:"text",className:"me-input",value:Lr,onChange:C=>Xr(C.target.value),style:{width:"100%"}})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>ae(!1),children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:()=>{console.log("Renombrando archivo:",Xe.key,"a:",Lr),ae(!1)},children:"Renombrar"})]})]})}),n&&Je&&Xe&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>ne(!1),children:r.jsxs("div",{className:"dash-card",style:{maxWidth:"500px",width:"100%"},onClick:C=>C.stopPropagation(),children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Confirmar Eliminación"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[r.jsx("div",{children:"¿Estás seguro de que quieres eliminar el archivo?"}),r.jsxs("div",{style:{background:"#1e2a3a",padding:"12px",borderRadius:"6px",color:"#e5edf7",fontSize:"14px"},children:[r.jsx("strong",{children:"Archivo:"})," ",Xe.name||((et=Xe.key)==null?void 0:et.split("/").pop())]}),r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:"8px 12px",borderRadius:"6px",fontSize:"12px"},children:"⚠️ Esta acción no se puede deshacer"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>ne(!1),children:"Cancelar"}),r.jsx("button",{className:"btn btn-danger",onClick:()=>{console.log("Eliminando archivo:",Xe.key),ne(!1)},children:"Eliminar"})]})]})}),n&&Ke&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>Qe(!1),children:r.jsxs("div",{className:"dash-card",style:{maxWidth:"600px",width:"100%"},onClick:C=>C.stopPropagation(),children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Información del Expediente"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:16},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Radicado:"}),r.jsx("input",{type:"text",className:"me-input",value:Bn.radicado,onChange:C=>sr(_=>({..._,radicado:C.target.value})),placeholder:"110014105009-20250011400",style:{width:"100%"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Clase:"}),r.jsx("input",{type:"text",className:"me-input",value:Bn.clase,onChange:C=>sr(_=>({..._,clase:C.target.value})),placeholder:"Laboral - Ordinario",style:{width:"100%"}})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Demandante:"}),r.jsx("input",{type:"text",className:"me-input",value:Bn.demandante,onChange:C=>sr(_=>({..._,demandante:C.target.value})),placeholder:"Juan Pérez",style:{width:"100%"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Demandado:"}),r.jsx("input",{type:"text",className:"me-input",value:Bn.demandado,onChange:C=>sr(_=>({..._,demandado:C.target.value})),placeholder:"Acme S.A.S.",style:{width:"100%"}})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Juzgado:"}),r.jsx("input",{type:"text",className:"me-input",value:Bn.juzgado,onChange:C=>sr(_=>({..._,juzgado:C.target.value})),placeholder:"JDO 009 MPC",style:{width:"100%"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Estado:"}),r.jsxs("select",{className:"me-select",value:Bn.estado,onChange:C=>sr(_=>({..._,estado:C.target.value})),style:{width:"100%"},children:[r.jsx("option",{value:"",children:"Selecciona un estado..."}),r.jsx("option",{value:"en-tramite",children:"En trámite"}),r.jsx("option",{value:"sentencia",children:"Sentencia"}),r.jsx("option",{value:"archivado",children:"Archivado"}),r.jsx("option",{value:"suspension",children:"Suspensión"})]})]})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>Qe(!1),children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:Yn,children:"Guardar Información"})]})]})})]})}const Kd=["admin","user"];function C2(e,{defaultRole:n="user"}={}){const t=String(n||"user").trim().toLowerCase(),a=Kd.includes(t)?t:"user",o=(Array.isArray(e)?e:[e]).map(s=>String(s||"").trim().toLowerCase()).filter(s=>Kd.includes(s));return o.includes("admin")?["admin"]:o.includes("user")?["user"]:[a]}function N2(e){return C2(e==null?void 0:e.roles).includes("admin")}function S2(){const{user:e}=Ge(),n=N2(e),[t,a]=v.useState([]),[i,o]=v.useState(!1),[s,l]=v.useState(null),[c,d]=v.useState(null),[p,h]=v.useState(!1),[m,y]=v.useState(""),[x,g]=v.useState(null),[w,f]=v.useState(!1),[u,b]=v.useState(null),[k,E]=v.useState([]),[A,O]=v.useState(!1),[z,F]=v.useState(null),[P,ee]=v.useState(""),[de,ce]=v.useState(!1),[U,kn]=v.useState(null),[Ie,Ze]=v.useState(null),[L,q]=v.useState({}),[Y,oe]=v.useState({}),[D,G]=v.useState(!1),[Z,se]=v.useState(null),[V,pe]=v.useState(!1),[xe,Ne]=v.useState(null),[T,j]=v.useState(""),[K,ae]=v.useState(null),[Je,ne]=v.useState("success"),Ke=(S,H="success")=>{ae(String(S||"")),ne(H);try{clearTimeout(Ke._t)}catch{}Ke._t=setTimeout(()=>ae(null),3500)},Qe=async()=>{var S,H;if(n){o(!0),l(null);try{const J=await sc(),M=Array.isArray(J==null?void 0:J.items)?J.items:[];a(M)}catch(J){l(((H=(S=J==null?void 0:J.response)==null?void 0:S.data)==null?void 0:H.message)||(J==null?void 0:J.message)||"No se pudo cargar la lista de clientes")}finally{o(!1)}}};v.useEffect(()=>{Qe()},[n]);const Xe=v.useMemo(()=>{const S=String(m||"").trim().toLowerCase();return S?t.filter(H=>[H.name,H.email,H.documentNumber,H.phone,H.id].map(J=>String(J||"").toLowerCase()).some(J=>J.includes(S))):t},[t,m]),Cn=S=>{const H=t.find(J=>J.id===S);return(H==null?void 0:H.assignedAdmin)||null},Lr=async S=>{var H,J;b(S),f(!0),F(null),O(!0);try{const M=await qh(),Oe=(Array.isArray(M==null?void 0:M.items)?M.items:[]).filter(De=>(Array.isArray(De.roles)?De.roles:[De.roles]).map(Yn=>String(Yn||"").toLowerCase()).includes("admin"));E(Oe.map(De=>({id:De.id,name:De.name||De.email||De.id,email:De.email})));const je=Cn(S.id);ee((je==null?void 0:je.id)||"")}catch(M){F(((J=(H=M==null?void 0:M.response)==null?void 0:H.data)==null?void 0:J.message)||(M==null?void 0:M.message)||"No se pudo cargar administradores")}finally{O(!1)}},Xr=async()=>{var S,H;try{const J=P||"";await c2(u.id,J),await Qe(),f(!1),b(null)}catch(J){F(((H=(S=J==null?void 0:J.response)==null?void 0:S.data)==null?void 0:H.message)||(J==null?void 0:J.message)||"No se pudo asignar")}},Bn=S=>{d({id:S.id,name:S.name||"",email:S.email||"",documentNumber:S.documentNumber||"",phone:S.phone||""})},sr=async()=>{var H,J;if(!c)return;const S={name:String(c.name||"").trim(),documentNumber:String(c.documentNumber||"").trim(),phone:String(c.phone||"").trim()};try{h(!0),l(null);const M=await l2(c.id,S),Q=(M==null?void 0:M.client)||null;Q&&a(Oe=>Oe.map(je=>je.id===Q.id?{...je,...Q}:je)),d(null)}catch(M){l(((J=(H=M==null?void 0:M.response)==null?void 0:H.data)==null?void 0:J.message)||(M==null?void 0:M.message)||"No se pudo guardar la informacion")}finally{h(!1)}},Vt=S=>{se(S),G(!0),Ne(null),j("")},ko=async()=>{var S,H,J;if(Z)try{pe(!0),Ne(null);const M=await p2(Z.id,T);await Qe(),G(!1),se(null);const Q=(S=M==null?void 0:M.s3)==null?void 0:S.deleted;Ke(typeof Q=="number"?`Cliente eliminado. Archivos S3 eliminados: ${Q}`:"Cliente eliminado correctamente","danger")}catch(M){Ne(((J=(H=M==null?void 0:M.response)==null?void 0:H.data)==null?void 0:J.message)||(M==null?void 0:M.message)||"No se pudo eliminar el cliente")}finally{pe(!1)}},Va=async S=>{kn(S),ce(!0)},qn=S=>{const H=String((S==null?void 0:S.documentNumber)||(S==null?void 0:S.id)||"").trim();return H?`clientes/${H}/`:"clientes/sin-id/"},Ba=async S=>{const H=S.id,J=qn(S);oe(M=>({...M,[H]:!0}));try{const M=J.startsWith("clientes/")?J.replace(/\/$/,""):J,Q=await at({limit:50,subfolder:M}),Oe=Array.isArray(Q==null?void 0:Q.items)?Q.items:[];q(je=>({...je,[H]:Oe}))}catch(M){console.error("Error al cargar archivos:",M),q(Q=>({...Q,[H]:[]}))}finally{oe(M=>({...M,[H]:!1}))}},Fa=async S=>{const H=S.id;Ie===H?Ze(null):(Ze(H),L[H]||await Ba(S))};return n?r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",paddingLeft:16,paddingRight:16,paddingBottom:16},children:[r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:1200},children:[r.jsx("style",{children:`
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
         `}),r.jsxs("div",{className:"dash-header clients-header",style:{marginBottom:16},children:[r.jsx("div",{className:"dash-title",children:"Clientes activos"}),r.jsxs("div",{className:"clients-actions",children:[r.jsx("input",{type:"search",name:"q",autoComplete:"off",placeholder:"Buscar por nombre, email, cedula o celular",value:m,onChange:S=>y(S.target.value),style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"6px 10px"}}),r.jsx("button",{className:"btn btn-secondary",onClick:Qe,disabled:i,children:i?"Actualizando...":"Refrescar"})]})]}),K&&(Je==="danger"?r.jsx(Ji,{autoHideMs:3500,children:K}):r.jsx(Gh,{autoHideMs:3500,children:K})),s&&r.jsx(Ji,{children:s}),r.jsx("div",{className:"dash-item only-desktop",style:{overflowX:"auto"},children:r.jsxs("table",{className:"me-table",style:{minWidth:820},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nombre"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Cedula"}),r.jsx("th",{children:"Celular"}),r.jsx("th",{children:"Acciones"})]})}),r.jsxs("tbody",{children:[Xe.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:5,style:{textAlign:"center",padding:16},children:i?"Cargando...":"No hay clientes activos para mostrar"})}),Xe.map(S=>{var H,J;return r.jsxs(r.Fragment,{children:[r.jsxs("tr",{children:[r.jsxs("td",{children:[r.jsxs("div",{style:{cursor:"pointer",color:"#4fd1c5",fontWeight:"500",textDecoration:"underline"},onClick:()=>Fa(S),onMouseOver:M=>M.target.style.color="#6ee7d7",onMouseOut:M=>M.target.style.color="#4fd1c5",children:[S.name||"-"," ",Ie===S.id?"▼":"▶"]}),r.jsxs("div",{style:{fontSize:12,opacity:.75},children:["Admin asignado: ",((H=S.assignedAdmin)==null?void 0:H.name)||"—"]})]}),r.jsx("td",{children:S.email||"-"}),r.jsx("td",{children:S.documentNumber||"-"}),r.jsx("td",{children:S.phone||"-"}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Lr(S),title:Cn(S.id)?`Asignado a ${((J=Cn(S.id))==null?void 0:J.name)||""}`:"Asignar administrador",children:Cn(S.id)?"Asignado":"Asignar"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Va(S),children:"Archivos"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Bn(S),children:"Editar"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Vt(S),children:"Eliminar"})]})})]},S.id),Ie===S.id&&r.jsx("tr",{children:r.jsx("td",{colSpan:5,style:{padding:0,background:"#0c1530"},children:r.jsxs("div",{style:{padding:"20px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[r.jsxs("h4",{style:{margin:0,color:"#e2e8f0"},children:["Archivos y Carpetas - ",S.name]}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Ze(null),children:"Cerrar"})]}),Y[S.id]?r.jsxs("div",{style:{textAlign:"center",padding:"40px",color:"#cbd5e1"},children:[r.jsx("div",{style:{display:"inline-block",width:"20px",height:"20px",border:"2px solid #4fd1c5",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite",marginRight:"8px"}}),"Cargando archivos..."]}):r.jsx("div",{style:{border:"1px solid #394b61",borderRadius:"8px",overflow:"hidden",background:"#1b263b"},children:r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[r.jsx("thead",{style:{background:"#0c1530"},children:r.jsxs("tr",{children:[r.jsx("th",{style:{padding:"12px 16px",fontWeight:"600",textAlign:"left"},children:"Nombre"}),r.jsx("th",{style:{padding:"12px 16px",fontWeight:"600",textAlign:"left"},children:"Tipo"}),r.jsx("th",{style:{padding:"12px 16px",fontWeight:"600",textAlign:"left"},children:"Fecha"}),r.jsx("th",{style:{padding:"12px 16px",fontWeight:"600",textAlign:"left"},children:"Tamaño"})]})}),r.jsx("tbody",{children:!L[S.id]||L[S.id].length===0?r.jsx("tr",{children:r.jsx("td",{colSpan:4,style:{textAlign:"center",padding:"40px",color:"#cbd5e1"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[r.jsx("div",{children:"No hay archivos o carpetas para mostrar"}),r.jsx("div",{style:{fontSize:"14px",opacity:.7},children:'Haz clic en "Archivos" para gestionar documentos'})]})})}):L[S.id].filter(M=>{const Q=M.key||"",Oe=qn(S);return!(Q===Oe&&M.isFolder)}).map(M=>{var Yn,lr;const Q=M.lastModified?new Date(M.lastModified):M.createdTime?new Date(M.createdTime):null,Oe=M.isFolder||((Yn=M.key)==null?void 0:Yn.endsWith("/"))||((lr=M.name)==null?void 0:lr.endsWith("/"));let je=M.name||(M.key||"").split("/").pop();if(Oe&&je&&qn(S)){const cr=qn(S).replace(/\/$/,"");M.key&&M.key.startsWith(cr)&&(je=M.key.replace(cr+"/","").replace(/\/$/,""))}const De=typeof M.size=="number"?Math.max(1,Math.round(M.size/1024)):null;return r.jsxs("tr",{style:{borderBottom:"1px solid #394b61"},children:[r.jsx("td",{style:{padding:"12px 16px"},children:r.jsx("span",{style:{color:Oe?"#fc771c":"#e2e8f0",fontWeight:"500"},children:je})}),r.jsx("td",{style:{padding:"12px 16px"},children:r.jsx("span",{style:{color:Oe?"#fc771c":"#4fd1c5",fontWeight:"500"},children:Oe?"Carpeta":"Archivo"})}),r.jsx("td",{style:{padding:"12px 16px",color:"#cbd5e1"},children:Q?Q.toLocaleDateString("es-CO"):"-"}),r.jsx("td",{style:{padding:"12px 16px",color:"#cbd5e1"},children:De?`${De} KB`:"-"})]},M.key||M.id)})})]})})]})})})]})})]})]})}),r.jsxs("div",{className:"dash-item only-mobile mobile-list",children:[Xe.length===0&&r.jsx("div",{style:{textAlign:"center",padding:8},children:i?"Cargando...":"No hay clientes activos para mostrar"}),Xe.map(S=>{var J,M;const H=x===S.id;return r.jsxs("div",{className:"mobile-item",children:[r.jsxs("button",{type:"button",className:"btn btn-primary btn-sm mobile-item-header",onClick:()=>{g(Q=>Q===S.id?null:S.id),H||Fa(S)},"aria-expanded":H,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("div",{className:"mobile-item-title",children:S.name||"-"}),r.jsx("div",{style:{opacity:.9,fontSize:12,paddingRight:10},children:H?"▼":"▶"})]}),H&&r.jsxs("div",{className:"mobile-item-details",children:[r.jsxs("div",{className:"kv",children:[r.jsx("span",{children:"Email"}),r.jsx("div",{children:S.email||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Cédula"}),r.jsx("div",{children:S.documentNumber||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Celular"}),r.jsx("div",{children:S.phone||"-"})]}),r.jsxs("div",{className:"kv",style:{marginTop:6},children:[r.jsx("span",{children:"Admin asignado"}),r.jsx("div",{children:((J=S.assignedAdmin)==null?void 0:J.name)||"—"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10},children:[r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Lr(S),style:{marginRight:8},title:Cn(S.id)?`Asignado a ${((M=Cn(S.id))==null?void 0:M.name)||""}`:"Asignar administrador",children:Cn(S.id)?"Asignado":"Asignar"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Va(S),style:{marginRight:8},children:"Archivos"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>Bn(S),style:{marginRight:8},children:"Editar"}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>Vt(S),children:"Eliminar"})]}),r.jsxs("div",{style:{marginTop:"16px",paddingTop:"16px",borderTop:"1px solid #394b61"},children:[r.jsx("h5",{style:{margin:"0 0 12px 0",color:"#e2e8f0",fontSize:"16px"},children:"Archivos y Carpetas"}),Y[S.id]?r.jsxs("div",{style:{textAlign:"center",padding:"20px",color:"#cbd5e1"},children:[r.jsx("div",{style:{display:"inline-block",width:"16px",height:"16px",border:"2px solid #4fd1c5",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite",marginRight:"8px"}}),"Cargando archivos..."]}):r.jsx("div",{children:!L[S.id]||L[S.id].length===0?r.jsxs("div",{style:{textAlign:"center",padding:"20px",color:"#cbd5e1",fontSize:"14px"},children:[r.jsx("div",{children:"No hay archivos o carpetas para mostrar"}),r.jsx("div",{style:{fontSize:"12px",opacity:.7,marginTop:"4px"},children:'Haz clic en "Archivos" para gestionar documentos'})]}):r.jsx("div",{style:{border:"1px solid #394b61",borderRadius:"6px",overflow:"hidden",background:"#1b263b"},children:L[S.id].filter(Q=>{const Oe=Q.key||"",je=qn(S);return!(Oe===je&&Q.isFolder)}).map(Q=>{var lr,cr;const Oe=Q.lastModified?new Date(Q.lastModified):Q.createdTime?new Date(Q.createdTime):null,je=Q.isFolder||((lr=Q.key)==null?void 0:lr.endsWith("/"))||((cr=Q.name)==null?void 0:cr.endsWith("/"));let De=Q.name||(Q.key||"").split("/").pop();if(je&&De&&qn(S)){const et=qn(S).replace(/\/$/,"");Q.key&&Q.key.startsWith(et)&&(De=Q.key.replace(et+"/","").replace(/\/$/,""))}const Yn=typeof Q.size=="number"?Math.max(1,Math.round(Q.size/1024)):null;return r.jsx("div",{style:{padding:"12px",borderBottom:"1px solid #394b61",display:"flex",justifyContent:"space-between",alignItems:"center"},children:r.jsxs("div",{children:[r.jsx("div",{style:{color:je?"#fc771c":"#e2e8f0",fontWeight:"500",fontSize:"14px"},children:De}),r.jsxs("div",{style:{color:"#cbd5e1",fontSize:"12px",marginTop:"2px"},children:[je?"Carpeta":"Archivo"," • ",Oe?Oe.toLocaleDateString("es-CO"):"-"," • ",Yn?`${Yn} KB`:"-"]})]})},Q.key||Q.id)})})})]})]})]},S.id)})]})]}),c&&r.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:S=>{S.target===S.currentTarget&&d(null)},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:560,padding:16},children:[r.jsx("div",{className:"dash-header",style:{marginBottom:12},children:r.jsx("div",{className:"dash-title",children:"Editar cliente"})}),r.jsx("div",{className:"dash-item",children:r.jsxs(Qh,{children:[r.jsx(Dn,{label:"Nombre",value:c.name,onChange:S=>d(H=>({...H,name:S.target.value})),placeholder:"Nombre y apellidos"}),r.jsx(Dn,{label:"Email",type:"email",value:c.email,onChange:()=>{},inputProps:{readOnly:!0}}),r.jsxs(al,{cols:2,children:[r.jsx(Dn,{label:"Cédula",value:c.documentNumber,onChange:S=>d(H=>({...H,documentNumber:S.target.value})),placeholder:"Ej: 80153356"}),r.jsx(Dn,{label:"Celular",value:c.phone,onChange:S=>d(H=>({...H,phone:S.target.value})),placeholder:"Ej: 300 123 4567"})]})]})}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>d(null),disabled:p,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:sr,disabled:p,children:p?"Guardando...":"Guardar cambios"})]})]})}),de&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:()=>ce(!1),children:r.jsx("div",{style:{width:"100%",maxWidth:"95vw",maxHeight:"95vh",background:"transparent"},onClick:S=>S.stopPropagation(),children:r.jsx(il,{selectedClient:U,isModal:!0,onClose:()=>ce(!1)})})}),w&&u&&r.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,padding:16},onClick:S=>{S.target===S.currentTarget&&(f(!1),b(null))},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:560},children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Asignar administrador"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:10},children:[r.jsxs("div",{style:{fontSize:14,opacity:.85},children:["Cliente: ",r.jsx("strong",{children:u.name})," ",r.jsxs("span",{style:{opacity:.7},children:["(",u.id,")"]})]}),z&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6},children:z}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Selecciona un admin"}),r.jsxs("select",{value:P,onChange:S=>ee(S.target.value),disabled:A,style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"},children:[r.jsx("option",{value:"",children:"— Sin asignar —"}),k.map(S=>r.jsxs("option",{value:S.id,children:[S.name," — ",S.email]},S.id))]})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>{f(!1),b(null)},disabled:A,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:Xr,disabled:A,children:"Guardar"})]})]})}),D&&Z&&r.jsx("div",{role:"dialog","aria-modal":"true",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:65,padding:16},onClick:S=>{S.target===S.currentTarget&&(G(!1),se(null))},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:520},children:[r.jsx("div",{className:"dash-header",style:{marginBottom:8},children:r.jsx("div",{className:"dash-title",children:"Confirmar eliminación"})}),r.jsxs("div",{className:"dash-item",style:{display:"grid",gap:10},children:[r.jsxs("div",{children:["¿Eliminar al cliente ",r.jsx("strong",{children:Z.name||Z.email||Z.id}),"?"]}),r.jsxs("div",{style:{fontSize:13,opacity:.85},children:["Esta acción eliminará el contenedor del cliente y su carpeta S3 asociada (clientes/",String(Z.documentNumber||"").trim(),")."]}),r.jsx("input",{type:"text",autoComplete:"username",value:" ",readOnly:!0,"aria-hidden":"true",style:{position:"absolute",opacity:0,height:0,width:0,pointerEvents:"none"}}),r.jsxs("label",{style:{display:"grid",gap:6},children:[r.jsx("span",{children:"Contraseña de eliminación"}),r.jsx("input",{type:"password",name:"delete-confirm",autoComplete:"new-password","data-lpignore":"true","data-1p-ignore":"true",value:T,onChange:S=>j(S.target.value),placeholder:"eliminarclientekoop",style:{background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:8,padding:"8px 10px"}})]}),xe&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6},children:xe})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>{G(!1),se(null)},disabled:V,children:"Cancelar"}),r.jsx("button",{className:"btn btn-primary",onClick:ko,disabled:V||!T,children:V?"Eliminando...":"Eliminar"})]})]})}),r.jsx("style",{children:`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]}):r.jsx("div",{className:"dash-page",style:{padding:40},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:560},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Esta seccion esta disponible solo para administradores."})]})})}const ef="koop.calendar.events";function Wd(){if(typeof window>"u")return[];try{const e=window.localStorage.getItem(ef);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.filter(Boolean):[]}catch(e){return console.warn("[calendarStorage] load error",e),[]}}function E2(e){if(!(typeof window>"u"))try{window.localStorage.setItem(ef,JSON.stringify(e??[]))}catch(n){console.warn("[calendarStorage] save error",n)}}const A2="koop.calendar.events";function nf(){const[e,n]=v.useState(()=>Wd());v.useEffect(()=>{const a=i=>{(i==null?void 0:i.key)===A2&&n(Wd())};return typeof window<"u"&&window.addEventListener("storage",a),()=>{typeof window<"u"&&window.removeEventListener("storage",a)}},[]);const t=v.useCallback(a=>{n(i=>{const o=typeof a=="function"?a(i):a;return E2(o),o})},[]);return[e,t]}const T2="documentos_iniciales";function $d(e){return String(e||"").trim()}function rf({buttonLabel:e="Subir documento",buttonClassName:n="btn btn-primary",defaultFolder:t=T2,allowFolderInput:a=!0,onUploaded:i}){const[o,s]=v.useState(!1),[l,c]=v.useState(null),[d,p]=v.useState(t||""),[h,m]=v.useState(()=>Date.now()),[y,x]=v.useState(null),[g,w]=v.useState(null),[f,u]=v.useState(!1),b=()=>{c(null),p(t||""),m(Date.now()),x(null),w(null),u(!1)},k=()=>{b(),s(!0)},E=()=>{s(!1),b()},A=z=>{var P;const F=((P=z.target.files)==null?void 0:P[0])||null;c(F),x(null),F&&w(null)},O=async z=>{var P,ee,de;if(z.preventDefault(),!l){x("Selecciona un archivo");return}const F=$d(a?d:t);try{u(!0),x(null);const ce=await Xh(l,{subfolder:F||void 0});if(w((P=ce==null?void 0:ce.file)!=null&&P.key?"Archivo subido correctamente":"Archivo subido"),c(null),m(Date.now()),typeof i=="function")try{i(ce)}catch{}}catch(ce){x(((de=(ee=ce==null?void 0:ce.response)==null?void 0:ee.data)==null?void 0:de.message)||(ce==null?void 0:ce.message)||"No se pudo subir el archivo")}finally{u(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:n,onClick:k,children:e}),o&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:16},children:r.jsxs("div",{className:"dash-card",style:{width:"100%",maxWidth:480,position:"relative"},children:[r.jsx("button",{type:"button",onClick:E,style:{position:"absolute",top:12,right:12,background:"transparent",border:"none",color:"#334155",fontSize:20,cursor:"pointer"},"aria-label":"Cerrar",children:"X"}),r.jsx("h3",{className:"dash-title",style:{marginBottom:16},children:"Subir documento"}),r.jsxs("form",{onSubmit:O,children:[r.jsxs("div",{style:{marginBottom:12},children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Archivo"}),r.jsx("input",{type:"file",onChange:A,disabled:f,required:!0,style:{width:"100%"}},h)]}),a?r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Subcarpeta (opcional)"}),r.jsx("input",{type:"text",placeholder:t||"documentos_iniciales",value:d,onChange:z=>p(z.target.value),disabled:f,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #cbd5f5"}})]}):r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:600},children:"Carpeta destino"}),r.jsx("input",{type:"text",value:t||"",readOnly:!0,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #cbd5f5",background:"#1f2937",color:"#e2e8f0"}})]}),y&&r.jsx("div",{style:{background:"#7f1d1d",color:"#fecaca",padding:8,borderRadius:6,marginBottom:12},children:y}),g&&r.jsx("div",{style:{background:"#14532d",color:"#bbf7d0",padding:8,borderRadius:6,marginBottom:12},children:g}),r.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"flex-end"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:E,disabled:f,children:"Cancelar"}),r.jsx("button",{type:"submit",className:"btn btn-primary",disabled:f||!l,children:f?"Subiendo...":"Subir"})]})]})]})})]})}const I2=["Lun","Mar","Mie","Jue","Vie","Sab","Dom"];function R2(e){const n=e.getFullYear(),t=e.getMonth(),i=(new Date(n,t,1).getDay()+6)%7,o=new Date(n,t+1,0).getDate(),s=[];let l=1-i;for(let c=0;c<6;c+=1){const d=[];for(let p=0;p<7;p+=1){const h=new Date(n,t,l),m=l>=1&&l<=o;d.push({date:h,inCurrentMonth:m}),l+=1}s.push(d)}return s}function z2(e){if(!e)return null;const n=e.getFullYear(),t=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${t}-${a}`}function tf({value:e,onChange:n,onDateSelect:t,events:a=[],className:i=""}){const o=v.useMemo(()=>new Date,[]),[s,l]=v.useState(()=>new Date(o.getFullYear(),o.getMonth(),1)),[c,d]=v.useState(o);v.useEffect(()=>{e instanceof Date&&(d(e),l(new Date(e.getFullYear(),e.getMonth(),1)))},[e]);const p=e instanceof Date?e:c,h=typeof n=="function"?n:t,m=v.useMemo(()=>s.toLocaleDateString("es-ES",{month:"long",year:"numeric"}),[s]),y=v.useMemo(()=>R2(s),[s]),x=v.useMemo(()=>{const u=new Map;return(a||[]).forEach(b=>{const k=(b==null?void 0:b.date)||(b==null?void 0:b.dateKey);k&&(u.has(k)||u.set(k,[]),u.get(k).push(b))}),u},[a]),g=u=>{u instanceof Date&&(e instanceof Date||d(u),typeof h=="function"&&h(u))},w=u=>{l(b=>new Date(b.getFullYear(),b.getMonth()+u,1))},f=["dash-item",i].filter(Boolean).join(" ").trim();return r.jsxs("div",{className:f,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>w(-1),"aria-label":"Mes anterior",children:"◀"}),r.jsx("div",{style:{fontWeight:600,textTransform:"capitalize"},children:m}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>w(1),"aria-label":"Mes siguiente",children:"▶"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:6,marginBottom:8},children:I2.map(u=>r.jsx("div",{style:{textAlign:"center",fontSize:12,fontWeight:600,opacity:.75},children:u},u))}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:6},children:y.map((u,b)=>u.map(({date:k,inCurrentMonth:E},A)=>{const O=z2(k),z=k.toDateString()===o.toDateString(),F=k.toDateString()===p.toDateString(),P=x.get(O)||[],ee={position:"relative",borderRadius:8,border:"1px solid rgba(148, 163, 184, 0.25)",padding:"8px 0",textAlign:"center",fontSize:13,cursor:E?"pointer":"default",opacity:E?1:.35,background:"#1f2937",color:"#e2e8f0",transition:"transform 0.12s ease"};return z&&(ee.border="1px solid #38bdf8"),F&&(ee.background="linear-gradient(135deg, #38b2ac, #0ea5e9)",ee.color="#0f172a",ee.fontWeight=700),E&&P.length>0&&!F&&(ee.background="#f5b891",ee.color="#0f172a",ee.border="1px solid rgba(245, 184, 145, 0.65)",ee.fontWeight=600),r.jsxs("button",{type:"button",style:ee,disabled:!E,onClick:()=>E&&g(k),children:[k.getDate(),P.length>0&&r.jsx("span",{style:{position:"absolute",bottom:4,left:"50%",transform:"translateX(-50%)",width:6,height:6,borderRadius:"999px",background:F?"#0f172a":E?"#7c3a00":"#38bdf8"}})]},`${b}-${A}`)}))})]})}function O2({title:e="Asistente IA",systemPrompt:n}){const[t,a]=v.useState(()=>[]),[i,o]=v.useState(""),[s,l]=v.useState(!1),c=v.useRef(null),d=v.useMemo(()=>i.trim().length>0&&!s,[i,s]),p=()=>{try{const y=c.current;y&&(y.scrollTop=y.scrollHeight)}catch{}},h=async()=>{var g,w,f,u,b,k,E,A,O;const y=i.trim();if(!y)return;const x=[...t,{role:"user",content:y}];a(x),o(""),l(!0),setTimeout(p,0);try{const z={messages:[...n?[{role:"system",content:n}]:[],...x]},{data:F}=await ze.post("/ai/chat",z),P=(F==null?void 0:F.reply)||((g=F==null?void 0:F.message)==null?void 0:g.content)||((u=(f=(w=F==null?void 0:F.choices)==null?void 0:w[0])==null?void 0:f.message)==null?void 0:u.content)||((E=(k=(b=F==null?void 0:F.choices)==null?void 0:b[0])==null?void 0:k.delta)==null?void 0:E.content)||"",ee=String(P||"").trim()||"Lo siento, no obtuve respuesta.";a(de=>[...de,{role:"assistant",content:ee}]),setTimeout(p,0)}catch(z){const F=((O=(A=z==null?void 0:z.response)==null?void 0:A.data)==null?void 0:O.message)||(z==null?void 0:z.message)||"Error al consultar el asistente";a(P=>[...P,{role:"assistant",content:`⚠️ ${F}`}]),setTimeout(p,0)}finally{l(!1)}},m=y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),d&&h())};return r.jsxs("div",{className:"dash-item",style:{display:"flex",flexDirection:"column",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("div",{style:{fontWeight:600},children:e}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>a([]),disabled:s,children:"Limpiar"})]}),r.jsxs("div",{ref:c,style:{background:"#0f172a",border:"1px solid rgba(148,163,184,0.25)",borderRadius:12,padding:10,minHeight:180,maxHeight:260,overflowY:"auto",display:"flex",flexDirection:"column",gap:8},children:[t.length===0&&r.jsx("div",{style:{opacity:.7},children:"Haz una pregunta para comenzar…"}),t.map((y,x)=>r.jsx("div",{style:{display:"flex",justifyContent:y.role==="user"?"flex-end":"flex-start"},children:r.jsx("div",{style:{maxWidth:"80%",background:y.role==="user"?"rgba(34,211,238,0.12)":"rgba(148,163,184,0.12)",border:"1px solid rgba(148,163,184,0.25)",color:"#e2e8f0",padding:"8px 10px",borderRadius:12,whiteSpace:"pre-wrap"},children:y.content})},x))]}),r.jsxs("div",{style:{display:"grid",gap:8},children:[r.jsx("textarea",{className:"textarea",rows:3,placeholder:"Escribe tu mensaje (Enter para enviar)",value:i,onChange:y=>o(y.target.value),onKeyDown:m,disabled:s}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>o(""),disabled:s,children:"Borrar"}),r.jsx("button",{type:"button",className:"btn btn-primary",onClick:h,disabled:!d,children:s?"Enviando…":"Enviar"})]})]})]})}function D2({label:e,value:n,hint:t}){return r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"text-sm opacity-70",style:{fontSize:12,opacity:.8},children:e}),r.jsx("div",{className:"text-2xl font-semibold",style:{fontSize:28,fontWeight:700},children:n}),t&&r.jsx("div",{className:"text-xs opacity-60",style:{fontSize:12,opacity:.7},children:t})]})}function af({refreshKey:e=0}){const{user:n}=Ge(),t=v.useMemo(()=>{var s,l,c,d;const a=Array.isArray(n==null?void 0:n.driveFolders)?n.driveFolders.filter(p=>p&&p.url):[],i=(l=(s=import.meta)==null?void 0:s.env)==null?void 0:l.VITE_DEFAULT_DRIVE_FOLDER_URL,o=((d=(c=import.meta)==null?void 0:c.env)==null?void 0:d.VITE_DEFAULT_DRIVE_FOLDER_NAME)||"Carpeta KOOP";return(!a||a.length===0)&&i?[{name:o,url:i}]:a},[n,e]);return r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Documentos recientes"}),t.length===0&&r.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin carpetas asignadas."}),t.length>0&&r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:8},children:t.map((a,i)=>r.jsxs("li",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.name||"Carpeta de Drive"}),r.jsx("div",{className:"muted",style:{fontSize:12,opacity:.8},children:a.url})]}),r.jsx("a",{className:"btn btn-primary",href:a.url,target:"_blank",rel:"noreferrer","data-drive-folder-url":a.url,children:"Abrir carpeta"})]},(a.url||"")+i))})]})}function L2(e){if(!(e instanceof Date))return null;const n=e.getFullYear(),t=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${t}-${a}`}function P2(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`evt-${Date.now()}-${Math.random().toString(16).slice(2)}`}function M2(){const{user:e}=Ge(),n=jo((e==null?void 0:e.name)||"Dashboard"),[t,a]=v.useState(null),[i,o]=v.useState(!0),[s,l]=v.useState(null),[c,d]=v.useState(0),[p,h]=nf(),[m,y]=v.useState(()=>new Date),x=v.useMemo(()=>L2(m),[m]),[g,w]=v.useState(""),[f,u]=v.useState(!0),[b,k]=v.useState(""),[E,A]=v.useState([]),[O,z]=v.useState(!1),[F,P]=v.useState(0),[ee,de]=v.useState(!1),ce=v.useRef(null),[U,kn]=v.useState([]),[Ie,Ze]=v.useState(!1),[L,q]=v.useState(null),Y=v.useMemo(()=>Array.isArray(p)?p.length:0,[p]);v.useEffect(()=>{(async()=>{var T;try{const{data:j}=await ze.get("/kpis/overview");a(j)}catch(j){l(((T=j==null?void 0:j.response)==null?void 0:T.data)||(j==null?void 0:j.message))}finally{o(!1)}})()},[]),v.useEffect(()=>{let T=!1;return(async()=>{var j,K;try{Ze(!0),q(null);const ae=await sc();if(T)return;const Je=Array.isArray(ae==null?void 0:ae.items)?ae.items:[];kn(Je.map(ne=>({id:String((ne==null?void 0:ne.id)||(ne==null?void 0:ne._id)||(ne==null?void 0:ne.documentNumber)||"").trim(),name:(ne==null?void 0:ne.name)||(ne==null?void 0:ne.fullName)||(ne==null?void 0:ne.email)||"Cliente sin nombre",email:ne==null?void 0:ne.email})).filter(ne=>ne.id))}catch(ae){T||q(((K=(j=ae==null?void 0:ae.response)==null?void 0:j.data)==null?void 0:K.message)||(ae==null?void 0:ae.message)||"No se pudo cargar clientes")}finally{T||Ze(!1)}})(),()=>{T=!0}},[]),v.useEffect(()=>{if(!ee)return;const T=K=>{try{ce.current&&!ce.current.contains(K.target)&&de(!1)}catch{}},j=K=>{K.key==="Escape"&&de(!1)};return typeof window<"u"&&(window.addEventListener("click",T),window.addEventListener("keydown",j)),()=>{typeof window<"u"&&(window.removeEventListener("click",T),window.removeEventListener("keydown",j))}},[ee]);const oe=v.useMemo(()=>{if(!b)return U;const T=b.trim().toLowerCase();return U.filter(j=>[j.id,j.name,j.email].some(K=>String(K||"").toLowerCase().includes(T)))},[U,b]),D=v.useMemo(()=>p.filter(j=>(j==null?void 0:j.date)===x).sort((j,K)=>(j.createdAt||"").localeCompare(K.createdAt||"")),[p,x]),G=T=>{const j=String(T);A(K=>K.includes(j)?K.filter(ae=>ae!==j):[...K,j])},Z=()=>{const T=g.trim();if(!x||!T||!f&&E.length===0)return;const j={id:P2(),date:x,note:T,audience:f?{type:"all"}:{type:"clients",clientIds:E.map(K=>String(K).trim())},createdAt:new Date().toISOString(),createdBy:(e==null?void 0:e.id)||(e==null?void 0:e.sub)||"admin"};h(K=>[...K,j]),w(""),A([]),u(!0),z(!1)},se={padding:"10px 14px",fontSize:"14px",minHeight:"52px",borderRadius:"10px",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},V=[{key:"clientes",label:"Clientes",to:"/admin/clientes-activos"},{key:"procesos",label:"Procesos",to:"/mis-casos"},{key:"publicaciones",label:"Publicaciones Procesales",href:"https://koop.com/publicaciones-procesales"}],pe=v.useMemo(()=>m==null?void 0:m.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),[m]),xe=T=>{y(T),typeof window<"u"&&window.innerWidth<1024&&z(!0)},Ne=()=>{if(!x||D.length===0)return;const T=`¿Borrar todas las anotaciones del ${pe}?`;typeof window<"u"&&!window.confirm(T)||h(j=>j.filter(K=>(K==null?void 0:K.date)!==x))};return v.useEffect(()=>{if(!O){P(0);return}const T=()=>{try{const K=window.visualViewport;if(K){const ae=Math.max(0,Math.round(window.innerHeight-K.height));P(ae)}else P(0)}catch{P(0)}};T();const j=window.visualViewport;return j&&j.addEventListener("resize",T),window.addEventListener("resize",T),()=>{j&&j.removeEventListener("resize",T),window.removeEventListener("resize",T)}},[O]),r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[r.jsxs("div",{className:"dash-card",style:{maxWidth:1200},children:[r.jsx("style",{children:`
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
        `}),r.jsxs("div",{className:"dash-header",children:[r.jsx("div",{className:"dash-title",children:n}),r.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"flex-end"},children:r.jsx(rf,{buttonClassName:"btn btn-primary",allowFolderInput:!0,onUploaded:()=>d(T=>T+1)})})]}),r.jsxs("div",{className:"dash-item",style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx(R,{className:"btn btn-primary",to:"/admin/tareas",title:"Ver y gestionar tareas",children:`Tareas: (${Y})`}),r.jsx(R,{className:"btn btn-primary btn-sm",to:"/admin/clientes-activos",title:"Clientes",children:"Clientes"}),r.jsxs("div",{style:{position:"relative"},ref:ce,children:[r.jsx("button",{type:"button",className:"btn btn-orange btn-sm",onClick:()=>de(T=>!T),"aria-haspopup":"menu","aria-expanded":ee?"true":"false",children:"Consultas"}),ee&&r.jsxs("div",{role:"menu",className:"quick-menu",style:{position:"absolute",top:"calc(100% + 6px)",right:0,zIndex:1010,background:"#0f172a",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.25)",borderRadius:12,boxShadow:"0 10px 24px rgba(0,0,0,0.45)",minWidth:320,padding:8},onClick:T=>T.stopPropagation(),children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://consultaprocesos.ramajudicial.gov.co/Procesos/Index","_blank","noopener"),de(!1)},role:"menuitem",children:"1. Consulta de procesos Rama Judicial"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://publicacionesprocesales.ramajudicial.gov.co/","_blank","noopener"),de(!1)},role:"menuitem",children:"2. Publicaciones Procesales Rama Judicial"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://siugj.ramajudicial.gov.co/principalPortal/index.php","_blank","noopener"),de(!1)},role:"menuitem",children:"3. Siugj"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start",marginBottom:6},onClick:()=>{typeof window<"u"&&window.open("https://consulta-web.fiscalia.gov.co/","_blank","noopener"),de(!1)},role:"menuitem",children:"4. Consultas Fiscalía"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"flex-start"},onClick:()=>{typeof window<"u"&&window.open("https://www.superfinanciera.gov.co/formulesuqueja/faces/consulta/jurisdiccional.xhtml","_blank","noopener"),de(!1)},role:"menuitem",children:"5. Consultas Jurisdiccionales SuperFinanciera"})]})]}),r.jsx(R,{className:"btn btn-secondary btn-sm",to:"/admin/usuarios",title:"Administrar usuarios",children:"Administrar usuarios"})]}),r.jsx("div",{className:"kpi-grid",style:{marginTop:16},children:r.jsx(D2,{label:"Casos activos",value:(U==null?void 0:U.length)??0})}),r.jsxs("div",{className:"admin-main-grid",style:{marginTop:16},children:[r.jsxs("div",{className:"admin-main-left",children:[r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Centro administrativo"}),r.jsx("p",{style:{marginBottom:12},children:"Supervisa la operacion del portal, gestiona usuarios y da seguimiento a la informacion mas reciente."}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[r.jsx(R,{className:"btn btn-primary btn-sm",to:"/admin/usuarios",title:"Administrar usuarios",children:"Administrar usuarios"}),r.jsx(R,{className:"btn btn-secondary btn-sm",to:"/mi-expediente",title:"Revisar expedientes",children:"Revisar expedientes"})]})]}),r.jsx(tf,{value:m,onChange:xe,events:p}),r.jsx("div",{style:{display:"grid",gap:10},children:V.map(T=>r.jsx("div",{className:"dash-item",style:{padding:0,display:"flex",alignItems:"stretch"},children:T.to?r.jsx(R,{className:"btn btn-primary",to:T.to,style:se,children:T.label}):r.jsx("button",{type:"button",className:"btn btn-primary",style:se,onClick:()=>{typeof window<"u"&&T.href&&window.open(T.href,"_blank","noopener")},children:T.label})},T.key))})]}),r.jsxs("div",{className:"admin-main-right",children:[r.jsx(O2,{title:"Asistente IA",systemPrompt:"Eres un asistente interno de Koop Strategic Advisory. Responde de forma breve, clara y profesional."}),r.jsxs("div",{className:"dash-item compose-panel",children:[r.jsx("div",{className:"font-semibold",style:{fontWeight:600},children:pe||"Selecciona un dia"}),r.jsx("p",{style:{marginTop:4,fontSize:13,opacity:.8},children:"Registra recordatorios o publicaciones para clientes especificos o para todos."}),r.jsx("textarea",{value:g,onChange:T=>w(T.target.value),placeholder:"Agregar nota o detalle del evento",rows:4,style:{width:"100%",marginTop:12,background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:"10px 12px",resize:"vertical"}}),r.jsx("div",{style:{marginTop:12},children:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("input",{type:"checkbox",checked:f,onChange:T=>{u(T.target.checked),T.target.checked&&A([])}}),r.jsx("span",{children:"Publicar para todos los clientes"})]})}),!f&&r.jsxs("div",{style:{marginTop:12},children:[r.jsx("input",{type:"search",placeholder:"Buscar por nombre, email o ID",value:b,onChange:T=>k(T.target.value),style:{width:"100%",padding:"8px 12px",borderRadius:10,border:"1px solid rgba(148,163,184,0.35)",background:"#1b263b",color:"#e2e8f0"}}),L&&r.jsx("div",{style:{color:"#fecaca",background:"#7f1d1d",padding:8,borderRadius:8,marginTop:8},children:L}),r.jsxs("div",{className:"admin-clients-list",style:{marginTop:8},children:[Ie&&r.jsx("div",{style:{opacity:.7},children:"Cargando clientes..."}),!Ie&&oe.length===0&&r.jsx("div",{style:{opacity:.7},children:"No se encontraron clientes"}),oe.map(T=>{const j=E.includes(T.id);return r.jsxs("label",{className:"admin-clients-item",children:[r.jsxs("span",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("span",{style:{fontWeight:600},children:T.name}),r.jsx("span",{style:{fontSize:12,opacity:.75},children:T.id})]}),r.jsx("input",{type:"checkbox",checked:j,onChange:()=>G(T.id)})]},T.id)})]}),E.length>0&&r.jsxs("div",{style:{marginTop:8,fontSize:12,opacity:.7},children:["Seleccionados: ",E.join(", ")]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{w(""),u(!0),A([])},children:"Limpiar"}),r.jsx("button",{type:"button",className:"btn btn-danger",onClick:Ne,disabled:!x||D.length===0,children:"Borrar anotaciones"}),r.jsx("button",{type:"button",className:"btn btn-primary",onClick:Z,disabled:!g.trim()||!f&&E.length===0,children:"Guardar anotacion"})]}),D.length>0&&r.jsxs("div",{style:{marginTop:16},children:[r.jsx("div",{style:{fontWeight:600,marginBottom:8},children:"Anotaciones del dia"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:D.map(T=>{var j,K;return r.jsxs("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:[r.jsx("div",{style:{marginBottom:6},children:T.note}),r.jsx("div",{style:{fontSize:12,opacity:.7},children:((j=T.audience)==null?void 0:j.type)==="all"?"Visible para todos los clientes":`Visible para: ${Array.isArray((K=T.audience)==null?void 0:K.clientIds)&&T.audience.clientIds.length>0?T.audience.clientIds.join(", "):"—"}`})]},T.id)})})]})]}),r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Recordatorios del equipo"}),r.jsx("p",{style:{marginBottom:0},children:"Comparte novedades internas, carga reportes de gestion o establece tareas prioritarias para tu equipo desde esta seccion."})]}),r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Reproductor Spotify"}),r.jsx("p",{style:{marginBottom:0,fontSize:13,opacity:.8},children:"El reproductor de Spotify está disponible como ventana flotante en la esquina inferior izquierda. La música continuará reproduciéndose mientras navegas entre páginas."})]})]})]}),r.jsx("div",{style:{marginTop:16},children:r.jsx(af,{refreshKey:c})}),s&&r.jsx("pre",{className:"text-red-600 text-sm mt-2",style:{color:"#fecaca",background:"#7f1d1d",padding:12,borderRadius:8,marginTop:12},children:typeof s=="string"?s:JSON.stringify(s,null,2)})]}),O&&r.jsx("div",{className:"compose-overlay",role:"dialog","aria-modal":"true",children:r.jsxs("div",{className:"compose-modal",style:{marginBottom:F>0?F:0,maxHeight:`calc(100dvh - ${F}px)`,paddingBottom:"calc(16px + env(safe-area-inset-bottom))"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[r.jsx("div",{style:{fontWeight:700},children:pe||"Selecciona un dia"}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>z(!1),"aria-label":"Cerrar",children:"Cerrar"})]}),r.jsxs("div",{className:"dash-item",style:{padding:0},children:[r.jsx("p",{style:{marginTop:4,fontSize:13,opacity:.8},children:"Registra recordatorios o publicaciones para clientes especificos o para todos."}),r.jsx("textarea",{value:g,onChange:T=>w(T.target.value),placeholder:"Agregar nota o detalle del evento",rows:4,style:{width:"100%",marginTop:12,background:"#1b263b",color:"#e2e8f0",border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:"10px 12px",resize:"vertical"}}),r.jsx("div",{style:{marginTop:12},children:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("input",{type:"checkbox",checked:f,onChange:T=>{u(T.target.checked),T.target.checked&&A([])}}),r.jsx("span",{children:"Publicar para todos los clientes"})]})}),!f&&r.jsxs("div",{style:{marginTop:12},children:[r.jsx("input",{type:"search",placeholder:"Buscar por nombre, email o ID",value:b,onChange:T=>k(T.target.value),style:{width:"100%",padding:"8px 12px",borderRadius:10,border:"1px solid rgba(148,163,184,0.35)",background:"#1b263b",color:"#e2e8f0"}}),L&&r.jsx("div",{style:{color:"#fecaca",background:"#7f1d1d",padding:8,borderRadius:8,marginTop:8},children:L}),r.jsxs("div",{className:"admin-clients-list",style:{marginTop:8},children:[Ie&&r.jsx("div",{style:{opacity:.7},children:"Cargando clientes..."}),!Ie&&oe.length===0&&r.jsx("div",{style:{opacity:.7},children:"No se encontraron clientes"}),oe.map(T=>{const j=E.includes(T.id);return r.jsxs("label",{className:"admin-clients-item",children:[r.jsxs("span",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("span",{style:{fontWeight:600},children:T.name}),r.jsx("span",{style:{fontSize:12,opacity:.75},children:T.id})]}),r.jsx("input",{type:"checkbox",checked:j,onChange:()=>G(T.id)})]},T.id)})]}),E.length>0&&r.jsxs("div",{style:{marginTop:8,fontSize:12,opacity:.7},children:["Seleccionados: ",E.join(", ")]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{w(""),u(!0),A([])},children:"Limpiar"}),r.jsx("button",{type:"button",className:"btn btn-danger",onClick:Ne,disabled:!x||D.length===0,children:"Borrar anotaciones"}),r.jsx("button",{type:"button",className:"btn btn-primary",onClick:Z,disabled:!g.trim()||!f&&E.length===0,children:"Guardar anotacion"})]}),D.length>0&&r.jsxs("div",{style:{marginTop:16},children:[r.jsx("div",{style:{fontWeight:600,marginBottom:8},children:"Anotaciones del dia"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:D.map(T=>{var j,K;return r.jsxs("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:[r.jsx("div",{style:{marginBottom:6},children:T.note}),r.jsx("div",{style:{fontSize:12,opacity:.7},children:((j=T.audience)==null?void 0:j.type)==="all"?"Visible para todos los clientes":`Visible para: ${Array.isArray((K=T.audience)==null?void 0:K.clientIds)&&T.audience.clientIds.length>0?T.audience.clientIds.join(", "):"-"}`})]},T.id)})})]})]})]})})]})}function _2({src:e,heightDesktop:n=560,heightMobile:t=480,className:a}){const[i,o]=v.useState(!1),[s,l]=v.useState(!1),c=v.useRef(null);v.useEffect(()=>{try{const g=window.matchMedia("(max-width: 768px)"),w=f=>{o(f.matches),f.matches&&l(!1)};return o(g.matches),g.matches&&l(!1),g.addEventListener?g.addEventListener("change",w):g.addListener&&g.addListener(w),()=>{g.removeEventListener?g.removeEventListener("change",w):g.removeListener&&g.removeListener(w)}}catch{o(!1)}},[]),v.useEffect(()=>{if(!s){c.current!==null&&(document.body.style.overflow=c.current,c.current=null);return}return c.current===null&&(c.current=document.body.style.overflow||""),document.body.style.overflow="hidden",()=>{c.current!==null?(document.body.style.overflow=c.current,c.current=null):document.body.style.overflow=""}},[s]);const d=v.useMemo(()=>{try{return new URL(e,window.location.origin).toString()}catch{return e}},[e]),p=()=>l(g=>!g),h=["Te compartimos que ya tienes acceso a nuestro Portal de Clientes Koop.","","Desde alli podras:","- Consultar el estado de tus procesos en tiempo real.","- Descargar documentos relevantes de manera segura.","- Recibir notificaciones de audiencias y plazos importantes.","- Comunicarte directamente con nuestro equipo para resolver cualquier inquietud.","","Estamos seguros de que esta alianza marcara un camino de crecimiento y tranquilidad."].join(`
`);if(i)return r.jsxs("div",{className:a,style:{width:"100%",height:t,display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:16},children:[r.jsx("div",{style:{fontWeight:700,marginBottom:8},children:"Gracias por elegirnos. Nos alegra iniciar este camino contigo."}),r.jsx("div",{className:"muted",style:{marginBottom:12,whiteSpace:"pre-line"},children:h})]}),r.jsx("div",{style:{marginTop:"auto",padding:16,display:"flex",justifyContent:"flex-end"},children:r.jsx("a",{className:"btn btn-primary",href:d,target:"_blank",rel:"noopener noreferrer",children:"Cordial saludo"})})]});const m=s?{position:"fixed",inset:0,zIndex:1e3,backgroundColor:"rgba(6, 11, 25, 0.92)",padding:"48px 64px",display:"flex",flexDirection:"column",gap:16}:{width:"100%",height:n,position:"relative"},y=s?{flex:1,position:"relative",borderRadius:16,overflow:"hidden",boxShadow:"0 24px 48px rgba(0,0,0,0.45)"}:{width:"100%",height:"100%",position:"relative",borderRadius:12,overflow:"hidden"},x={position:"absolute",top:s?24:12,right:s?24:12,zIndex:1001};return r.jsxs("div",{className:a,style:m,children:[r.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:p,style:x,children:s?"Minimizar":"Maximizar"}),r.jsx("div",{style:y,children:r.jsxs("object",{data:e,type:"application/pdf",width:"100%",height:"100%",style:{width:"100%",height:"100%"},children:[r.jsx("iframe",{title:"PDF",src:d,style:{width:"100%",height:"100%",border:0}}),r.jsxs("div",{style:{padding:16},children:["No se pudo mostrar el PDF. ",r.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:"Abrir en nueva pestana"})]})]})})]})}function V2(){return r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{className:"font-semibold mb-2",style:{fontWeight:600,marginBottom:8},children:"Mensajes no leídos"}),r.jsx("div",{className:"text-sm opacity-60",style:{fontSize:14,opacity:.8},children:"Sin datos."})]})}function B2(e){if(!(e instanceof Date))return null;const n=e.getFullYear(),t=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getDate()}`.padStart(2,"0");return`${n}-${t}-${a}`}function F2(){const{user:e}=Ge(),n=jo((e==null?void 0:e.name)||"Bienvenido"),[t,a]=v.useState(0),[i]=nf(),[o,s]=v.useState(()=>new Date),l=v.useMemo(()=>{const y=[e==null?void 0:e.id,e==null?void 0:e.sub,e==null?void 0:e._id,e==null?void 0:e.documentNumber,e==null?void 0:e.document_number,e==null?void 0:e.documento,e==null?void 0:e.clienteId].map(x=>x==null?"":String(x).trim()).filter(x=>!!x);return Array.from(new Set(y))},[e]),c=v.useMemo(()=>B2(o),[o]),d=v.useMemo(()=>l.length?i.filter(m=>{var y,x,g;return((y=m==null?void 0:m.audience)==null?void 0:y.type)==="all"?!0:((x=m==null?void 0:m.audience)==null?void 0:x.type)==="clients"?(Array.isArray((g=m.audience)==null?void 0:g.clientIds)?m.audience.clientIds.map(f=>f==null?"":String(f).trim()).filter(f=>!!f):[]).some(f=>l.includes(f)):!1}):i.filter(m=>{var y;return((y=m==null?void 0:m.audience)==null?void 0:y.type)==="all"}),[i,l]),p=v.useMemo(()=>d.filter(m=>(m==null?void 0:m.date)===c),[d,c]),h=v.useMemo(()=>o==null?void 0:o.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),[o]);return r.jsx("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:1080},children:[r.jsx("style",{children:`
          .user-main-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
          @media (min-width: 1024px) { .user-main-grid { grid-template-columns: 2fr 1fr; } }
          .user-main-left { display: flex; flex-direction: column; gap: 16px; }
          .user-main-right { display: flex; flex-direction: column; gap: 16px; }
        `}),r.jsxs("div",{className:"dash-header",children:[r.jsx("div",{className:"dash-title",children:n}),r.jsx(rf,{buttonClassName:"btn btn-primary",allowFolderInput:!1,onUploaded:()=>a(m=>m+1)})]}),r.jsxs("div",{className:"user-main-grid",children:[r.jsxs("div",{className:"user-main-left",children:[r.jsxs("div",{className:"dash-item",children:[r.jsx("p",{style:{marginBottom:8},children:"Aqui puedes revisar tu material mas reciente y mantenerte al dia con tu caso. Si necesitas asistencia adicional, nuestro equipo esta disponible para ayudarte."}),r.jsx(R,{className:"btn btn-primary btn-sm",to:"/mis-casos",children:"Ver mis casos"})]}),r.jsx("div",{className:"dash-item",style:{padding:0},children:r.jsx(_2,{src:"/Saludobienvenidaportal.pdf",heightDesktop:480,heightMobile:420})}),r.jsx(V2,{}),r.jsx(af,{refreshKey:t})]}),r.jsxs("div",{className:"user-main-right",children:[r.jsx(tf,{value:o,onChange:s,events:d}),r.jsxs("div",{className:"dash-item",children:[r.jsx("div",{style:{fontWeight:600,marginBottom:8},children:h}),p.length===0&&r.jsx("p",{style:{margin:0,opacity:.7,fontSize:14},children:"No hay anotaciones programadas para este dia."}),p.length>0&&r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:p.map(m=>r.jsx("div",{style:{border:"1px solid rgba(148,163,184,0.35)",borderRadius:10,padding:10,background:"#1b263b"},children:r.jsx("div",{children:m.note})},m.id))})]})]})]})]})})}function Hd(){return r.jsx("div",{className:"dash-page",style:{background:"linear-gradient(rgba(24,31,56,0.9), rgba(15,23,42,0.95))",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",padding:24},children:r.jsxs("div",{className:"dash-card",style:{maxWidth:520},children:[r.jsx("h2",{className:"dash-title",children:"Acceso restringido"}),r.jsx("p",{style:{marginTop:12},children:"Tu cuenta no tiene un rol asignado para ingresar al portal. Comunicate con el administrador para solicitar acceso."})]})})}function qd(e,n){if(!(e!=null&&e.roles))return!1;const t=Array.isArray(e.roles)?e.roles:[e.roles],a=String(n||"").toLowerCase();return t.some(i=>String(i||"").toLowerCase()===a)}function U2(){const{user:e,loading:n}=Ge(),t=v.useMemo(()=>e?qd(e,"admin")?"admin":qd(e,"user")?"user":"no-access":"none",[e]);return n&&!e?null:t==="admin"?r.jsx(M2,{}):t==="user"?r.jsx(F2,{}):t==="no-access"?r.jsx(Hd,{}):r.jsx(Hd,{})}const Z2=[{id:"CJ-001",titulo:"Acción de tutela — derecho a la salud",estado:"En curso",juzgado:"Juzgado 12 Municipal",fecha:"2025-07-10"},{id:"CJ-002",titulo:"Proceso laboral — despido sin justa causa",estado:"Audiencia programada",juzgado:"Juzgado 3 Laboral del Circuito",fecha:"2025-08-02"},{id:"CJ-003",titulo:"Responsabilidad fiscal — recursos",estado:"Recurso interpuesto",juzgado:"Contraloría Distrital",fecha:"2025-08-21"},{id:"CJ-004",titulo:"Proceso de alimentos — fijación de cuota",estado:"Admitido",juzgado:"Juzgado 5 de Familia",fecha:"2025-09-01"}];function K2(){const[e,n]=v.useState(null);v.useEffect(()=>{if(!e)return;const i=o=>{o.key==="Escape"&&n(null)};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[e]);const t=v.useMemo(()=>["Reunión de documentos e investigación","En escrito de demanda","En radicación","Al despacho: en espera de decisión del juez"],[]),a=i=>{if(!i)return 1;const o=String(i).toLowerCase();return/(reun|investig)/.test(o)?1:/(escrito|demanda)/.test(o)?2:/(radicaci[óo]n|admitid)/.test(o)?3:/(despacho|juez|decisi[óo]n|audiencia|recurso)/.test(o)?4:(/curso/.test(o),2)};return r.jsxs("div",{className:"dash-page",style:{backgroundImage:"linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[r.jsxs("div",{className:"dash-card",style:{maxWidth:900},children:[r.jsx("div",{className:"dash-header",children:r.jsx("div",{className:"dash-title",children:"Mis casos"})}),r.jsx("div",{className:"dash-item",style:{padding:0},children:r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs("table",{className:"cases-table",style:{width:"100%",borderCollapse:"collapse"},children:[r.jsx("thead",{children:r.jsxs("tr",{style:{background:"#1e2a3a"},children:[r.jsx("th",{style:Yt,children:"Radicado"}),r.jsx("th",{style:Yt,children:"Título"}),r.jsx("th",{style:Yt,children:"Estado"}),r.jsx("th",{style:Yt,children:"Despacho"}),r.jsx("th",{style:Yt,children:"Última actuación"})]})}),r.jsx("tbody",{children:Z2.map(i=>r.jsxs("tr",{onClick:()=>n(i),className:"row-clickable",children:[r.jsx("td",{style:Gt,children:i.id}),r.jsx("td",{style:Gt,children:i.titulo}),r.jsx("td",{style:Gt,children:r.jsx("span",{className:"badge",style:Yd(i.estado),children:i.estado})}),r.jsx("td",{style:Gt,children:i.juzgado}),r.jsx("td",{style:Gt,children:new Date(i.fecha).toLocaleDateString()})]},i.id))})]})})})]}),e&&r.jsx("div",{className:"modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"caso-title",onClick:i=>{i.target===i.currentTarget&&n(null)},children:r.jsxs("div",{className:"modal-card",children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("div",{className:"modal-title",id:"caso-title",children:e.titulo}),r.jsx("button",{className:"btn btn-primary",onClick:()=>n(null),children:"Cerrar"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"case-grid",children:[r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Radicado"}),r.jsx("div",{children:e.id})]}),r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Estado"}),r.jsx("div",{children:r.jsx("span",{className:"badge",style:Yd(e.estado),children:e.estado})})]}),r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Despacho"}),r.jsx("div",{children:e.juzgado})]}),r.jsxs("div",{children:[r.jsx("div",{className:"muted",children:"Última actuación"}),r.jsx("div",{children:new Date(e.fecha).toLocaleString()})]})]}),r.jsx("div",{className:"timeline",children:t.map((i,o)=>{const s=o+1,l=a(e.estado),c=s<l,d=s===l;return r.jsxs("div",{className:`timeline-step ${c?"done":""} ${d?"active":""}`,children:[r.jsx("div",{className:`dot ${c?"done":""} ${d?"active":""}`}),s<t.length&&r.jsx("div",{className:`bar ${s<l?"done":""}`}),r.jsxs("div",{className:"label",children:[s,". ",i]})]},s)})})]})]})})]})}const Yt={textAlign:"left",padding:"12px 14px",borderBottom:"1px solid #394b61",fontWeight:600,color:"#e2e8f0",whiteSpace:"nowrap"},Gt={padding:"12px 14px",borderBottom:"1px solid #34465a",color:"#e5edf7",verticalAlign:"top"};function Yd(e){let n="#3b82f6";return/curso/i.test(e)&&(n="#f59e0b"),/programada|programado/i.test(e)&&(n="#10b981"),/recurso/i.test(e)&&(n="#8b5cf6"),{display:"inline-block",padding:"4px 8px",borderRadius:8,background:n,color:"#fff",fontSize:12,fontWeight:600}}function W2(){var a,i;const{logout:e}=Ge(),n=Hn();v.useEffect(()=>{(async()=>{try{await e()}catch{}try{sessionStorage.removeItem("koop_hasVisited")}catch{}try{document.documentElement.classList.remove("skip-splash")}catch{}})()},[e]);const t=(i=(a=n.state)==null?void 0:a.from)==null?void 0:i.pathname;return r.jsx(Ve,{to:"/",replace:!0,state:{from:t}})}function pr({children:e}){const{isAuthenticated:n}=Ge(),t=Hn();return n?e:r.jsx(Ve,{to:"/login",replace:!0,state:{from:t}})}function $2(){const{isAuthenticated:e,user:n,logout:t}=Ge(),i=(Array.isArray(n==null?void 0:n.roles)?n.roles:n!=null&&n.roles?[n.roles]:[]).map(y=>String(y||"").trim().toLowerCase()).includes("admin"),[o,s]=v.useState(!1),[l,c]=v.useState(!1),[d,p]=v.useState(!1);Pt();const h=()=>{c(y=>{const x=!y;return x||p(!1),x})},m=y=>{const x=y.target.closest("a");x&&!x.classList.contains("drop-btn")&&(c(!1),p(!1))};return r.jsx("nav",{className:"navbar",children:r.jsxs("div",{className:"navbar-content",children:[r.jsxs(R,{to:"/",className:"logo",children:[r.jsx("img",{src:"/Koop Logo.png",alt:"Logo Koop",className:"logo-img"}),r.jsx("div",{className:"logo-text",children:"KOOP STRATEGIC ADVISORY"})]}),r.jsxs("div",{className:"menu-toggle",id:"menu-toggle",onClick:h,"aria-controls":"nav-menu","aria-expanded":l?"true":"false",role:"button",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]}),r.jsxs("div",{className:`nav-menu ${l?"open":""}`,id:"nav-menu",onClick:m,"data-auth":e?"1":"0",children:[r.jsxs("div",{className:"main-links",children:[r.jsx(R,{to:"/#inicio",children:"INICIO"}),r.jsxs("div",{className:`dropdown ${d?"open":""}`,children:[r.jsx(R,{to:"/#areas",className:"drop-btn",id:"areas-toggle","aria-expanded":d?"true":"false",onClick:y=>{y.preventDefault(),p(x=>!x)},children:"ÁREAS DE PRÁCTICA"}),r.jsxs("div",{className:"dropdown-content",children:[r.jsxs("div",{className:"dropdown-group",children:[r.jsx(R,{to:"/derecho",className:"dropdown-title",children:"Derecho"}),r.jsx(R,{to:"/derecho-laboral",children:"Derecho Laboral"}),r.jsx(R,{to:"/derecho-penal",children:"Derecho Penal"}),r.jsx(R,{to:"/tramites-notariales",children:"Trámites notariales"}),r.jsx(R,{to:"/derecho-administrativo",children:"Derecho Administrativo"}),r.jsx(R,{to:"/derecho-familia",children:"Derecho de Familia"}),r.jsx(R,{to:"/contratacion-publica",children:"Contratación Pública"}),r.jsx(R,{to:"/resolucion-disputas",children:"Resolución de Disputas"}),r.jsx(R,{to:"/acciones-de-tutela",children:"Acciones de Tutela"}),r.jsx(R,{to:"/insolvencia",children:"Insolvencia"})]}),r.jsxs("div",{className:"dropdown-group",children:[r.jsx(R,{to:"/contabilidad",className:"dropdown-title",children:"Contabilidad"}),r.jsx(R,{to:"/auditoria",children:"Auditoría"}),r.jsx(R,{to:"/impuestos",children:"Impuestos"}),r.jsx(R,{to:"/asesoria-contable",children:"Asesoría Contable"})]})]})]}),!e&&r.jsx(R,{to:"/#vision",children:"NUESTRA VISIÓN"})]}),e?r.jsxs("div",{className:`dropdown ${o?"open":""}`,children:[r.jsx("button",{className:"drop-btn","aria-haspopup":"true","aria-expanded":o?"true":"false",onClick:()=>s(y=>!y),children:jo((n==null?void 0:n.name)||"Mi cuenta")}),r.jsx("div",{className:"dropdown-content",children:r.jsxs("div",{className:"dropdown-group",children:[r.jsx(R,{to:"/dashboard",children:"Perfil"}),i&&r.jsx(R,{to:"/admin/clientes-activos",children:"Clientes"}),i&&r.jsx(R,{to:"/admin/usuarios",children:"Usuarios"}),r.jsx(R,{to:"/mi-expediente",children:i?"Mis expedientes":"Mi expediente"}),i&&r.jsx(R,{to:"/admin/tareas",children:"Tareas"}),r.jsx(R,{to:"/mis-casos",children:"Mis casos"}),r.jsx(R,{to:"/logout",children:"Cerrar sesión"})]})})]}):r.jsx(R,{to:"/login",className:"koop-cta","aria-label":"CLIENTE KOOP",translate:"no",children:"CLIENTE KOOP".split("").map((y,x)=>r.jsx("span",{className:"letter",style:{"--i":x},children:y===" "?" ":y},x))})]})]})})}function H2(){var g;const{user:e}=Ge(),[n,t]=v.useState(!1),[a,i]=v.useState({x:20,y:"50%"}),[o,s]=v.useState(!1),[l,c]=v.useState({x:0,y:0}),d=v.useRef(null),p="https://open.spotify.com/embed/playlist/1Zf1rz0XX6fyNxKOq4XvgN?utm_source=generator&theme=0&view=compact&width=100%&height=100%";v.useEffect(()=>{const w=localStorage.getItem("spotifyAdminPlayerExpanded"),f=localStorage.getItem("spotifyAdminPlayerPosition");w!==null&&t(JSON.parse(w)),f!==null&&i(JSON.parse(f))},[]),v.useEffect(()=>{localStorage.setItem("spotifyAdminPlayerExpanded",JSON.stringify(n)),localStorage.setItem("spotifyAdminPlayerPosition",JSON.stringify(a))},[n,a]);const h=w=>{if(w.target.closest("iframe"))return;s(!0);const f=d.current.getBoundingClientRect();c({x:w.clientX-f.left,y:w.clientY-f.top})},m=w=>{if(!o)return;const f=w.clientX-l.x,u=w.clientY-l.y,b=window.innerWidth-50,k=window.innerHeight-50;i({x:Math.max(0,Math.min(f,b)),y:Math.max(0,Math.min(u,k))})},y=()=>{s(!1)};return v.useEffect(()=>{if(o)return document.addEventListener("mousemove",m),document.addEventListener("mouseup",y),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",y)}},[o,l]),v.useEffect(()=>{if(n){const w=setTimeout(()=>{var u,b;const f=(u=d.current)==null?void 0:u.querySelector("iframe");if(f)try{(b=f.contentWindow)==null||b.postMessage({type:"command",command:"shuffle",value:!0},"https://open.spotify.com")}catch{console.log("No se pudo activar shuffle automáticamente")}},2e3);return()=>clearTimeout(w)}},[n]),((g=e==null?void 0:e.roles)==null?void 0:g.some(w=>String(w||"").toLowerCase()==="admin"))?r.jsxs("div",{ref:d,className:"spotify-admin-player-container",style:{position:"fixed",left:a.x,top:a.y,width:n?"600px":"50px",height:n?"80px":"50px",transition:o?"none":"all 0.3s ease",overflow:"hidden",cursor:o?"grabbing":"grab",userSelect:"none"},onMouseDown:h,children:[r.jsx("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"50px",backgroundColor:"rgba(15, 23, 42, 0.8)",backdropFilter:"blur(10px)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.4)",border:"1px solid rgba(148, 163, 184, 0.3)",opacity:.7,cursor:"pointer",zIndex:1001,aspectRatio:"1/1",minWidth:"50px",minHeight:"50px",maxWidth:"50px",maxHeight:"50px"},onClick:w=>{w.stopPropagation(),t(!n)},onMouseEnter:w=>{w.target.style.transform="scale(1.05)",w.target.style.backgroundColor="rgba(15, 23, 42, 0.9)",w.target.style.opacity="1",w.target.style.borderColor="rgba(148, 163, 184, 0.5)"},onMouseLeave:w=>{w.target.style.transform="scale(1)",w.target.style.backgroundColor="rgba(15, 23, 42, 0.8)",w.target.style.opacity="0.7",w.target.style.borderColor="rgba(148, 163, 184, 0.3)"},children:r.jsx("span",{style:{fontSize:"18px",color:"#fc771c"},children:"♪"})}),n&&r.jsx("iframe",{src:p,width:"540px",height:"80px",frameBorder:"0",allowFullScreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",title:"Spotify Admin Player",style:{position:"absolute",top:0,left:"60px"}})]}):null}function q2({base:e="'Montserrat', Arial, sans-serif",heading:n,accent:t,children:a}){return v.useEffect(()=>{const i=document.documentElement;e&&i.style.setProperty("--ff-base",e),n&&i.style.setProperty("--ff-heading",n),t&&i.style.setProperty("--ff-accent",t)},[e,n,t]),a||null}function Y2(){const[e,n]=v.useState(null),t=()=>{const a=Hn(),{isAuthenticated:i}=Ge(),o=a.pathname.toLowerCase(),s=o.startsWith("/login")||o.startsWith("/register");return r.jsxs(r.Fragment,{children:[!s&&r.jsx($2,{}),r.jsxs(Sg,{children:[r.jsx(te,{path:"/",element:r.jsx(Bg,{})}),r.jsx(te,{path:"/derecho",element:r.jsx(Ug,{})}),r.jsx(te,{path:"/contabilidad",element:r.jsx(Kg,{})}),r.jsx(te,{path:"/auditoria",element:r.jsx($g,{})}),r.jsx(te,{path:"/derecho-administrativo",element:r.jsx(qg,{})}),r.jsx(te,{path:"/derecho-familia",element:r.jsx(Gg,{})}),r.jsx(te,{path:"/derecho-laboral",element:r.jsx(r1,{})}),r.jsx(te,{path:"/derecho-penal",element:r.jsx(a1,{})}),r.jsx(te,{path:"/impuestos",element:r.jsx(o1,{})}),r.jsx(te,{path:"/asesoria-contable",element:r.jsx(l1,{})}),r.jsx(te,{path:"/planeacion-patrimonial",element:r.jsx(Ve,{to:"/asesoria-contable",replace:!0})}),r.jsx(te,{path:"/privacidad",element:r.jsx(d1,{})}),r.jsx(te,{path:"/tramites-notariales",element:r.jsx(u1,{})}),r.jsx(te,{path:"/acciones-de-tutela",element:r.jsx(f1,{})}),r.jsx(te,{path:"/login",element:i?r.jsx(Ve,{to:"/",replace:!0}):r.jsx(e2,{})}),r.jsx(te,{path:"/register",element:r.jsx(n2,{})}),r.jsx(te,{path:"/logout",element:r.jsx(W2,{})}),r.jsx(te,{path:"/panel",element:r.jsx(pr,{children:r.jsx(t2,{})})}),r.jsx(te,{path:"/admin/usuarios",element:r.jsx(pr,{children:r.jsx(f2,{})})}),r.jsx(te,{path:"/admin/clientes-activos",element:r.jsx(pr,{children:r.jsx(S2,{})})}),r.jsx(te,{path:"/admin/tareas",element:r.jsx(pr,{children:r.jsx(w2,{})})}),r.jsx(te,{path:"/dashboard",element:r.jsx(pr,{children:r.jsx(U2,{})})}),r.jsx(te,{path:"/mi-expediente",element:r.jsx(pr,{children:r.jsx(il,{})})}),r.jsx(te,{path:"/dashboard2",element:r.jsx(pr,{children:r.jsx(il,{})})}),r.jsx(te,{path:"/mis-casos",element:r.jsx(pr,{children:r.jsx(K2,{})})}),r.jsx(te,{path:"/index.html",element:r.jsx(Ve,{to:"/",replace:!0})}),r.jsx(te,{path:"/derecho.html",element:r.jsx(Ve,{to:"/derecho",replace:!0})}),r.jsx(te,{path:"/contabilidad.html",element:r.jsx(Ve,{to:"/contabilidad",replace:!0})}),r.jsx(te,{path:"/auditoria.html",element:r.jsx(Ve,{to:"/auditoria",replace:!0})}),r.jsx(te,{path:"/derecho-administrativo.html",element:r.jsx(Ve,{to:"/derecho-administrativo",replace:!0})}),r.jsx(te,{path:"/derecho-familia.html",element:r.jsx(Ve,{to:"/derecho-familia",replace:!0})}),r.jsx(te,{path:"/derecho-laboral.html",element:r.jsx(Ve,{to:"/derecho-laboral",replace:!0})}),r.jsx(te,{path:"/derecho-penal.html",element:r.jsx(Ve,{to:"/derecho-penal",replace:!0})}),r.jsx(te,{path:"/impuestos.html",element:r.jsx(Ve,{to:"/impuestos",replace:!0})}),r.jsx(te,{path:"/planeacion-patrimonial.html",element:r.jsx(Ve,{to:"/asesoria-contable",replace:!0})}),r.jsx(te,{path:"/privacidad.html",element:r.jsx(Ve,{to:"/privacidad",replace:!0})}),r.jsx(te,{path:"/tramites-notariales.html",element:r.jsx(Ve,{to:"/tramites-notariales",replace:!0})}),r.jsx(te,{path:"/acciones-de-tutela.html",element:r.jsx(Ve,{to:"/acciones-de-tutela",replace:!0})})]}),r.jsx(H2,{})]})};return r.jsx(Xx,{children:r.jsx(q2,{children:r.jsx(Og,{children:r.jsx(t,{})})})})}try{"scrollRestoration"in history&&(history.scrollRestoration="manual")}catch{}const G2=lh(document.getElementById("root"));G2.render(r.jsx(Y2,{}));
