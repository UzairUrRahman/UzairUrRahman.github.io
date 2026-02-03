(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();function su(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Rs={exports:{}},vi={};var Om;function Wv(){if(Om)return vi;Om=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(u,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var p in c)p!=="key"&&(f[p]=c[p])}else f=c;return c=f.ref,{$$typeof:l,type:u,key:h,ref:c!==void 0?c:null,props:f}}return vi.Fragment=i,vi.jsx=r,vi.jsxs=r,vi}var Lm;function Kv(){return Lm||(Lm=1,Rs.exports=Wv()),Rs.exports}var on=Kv(),Ds={exports:{}},me={};var Nm;function Jv(){if(Nm)return me;Nm=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),w=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=w&&C[w]||C["@@iterator"],typeof C=="function"?C:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,H={};function D(C,q,x){this.props=C,this.context=q,this.refs=H,this.updater=x||U}D.prototype.isReactComponent={},D.prototype.setState=function(C,q){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,q,"setState")},D.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function X(){}X.prototype=D.prototype;function V(C,q,x){this.props=C,this.context=q,this.refs=H,this.updater=x||U}var re=V.prototype=new X;re.constructor=V,L(re,D.prototype),re.isPureReactComponent=!0;var ue=Array.isArray;function B(){}var K={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function fe(C,q,x){var J=x.ref;return{$$typeof:l,type:C,key:q,ref:J!==void 0?J:null,props:x}}function ye(C,q){return fe(C.type,q,C.props)}function ee(C){return typeof C=="object"&&C!==null&&C.$$typeof===l}function P(C){var q={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(x){return q[x]})}var Ae=/\/+/g;function le(C,q){return typeof C=="object"&&C!==null&&C.key!=null?P(""+C.key):q.toString(36)}function F(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(B,B):(C.status="pending",C.then(function(q){C.status==="pending"&&(C.status="fulfilled",C.value=q)},function(q){C.status==="pending"&&(C.status="rejected",C.reason=q)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function R(C,q,x,J,se){var ae=typeof C;(ae==="undefined"||ae==="boolean")&&(C=null);var Ee=!1;if(C===null)Ee=!0;else switch(ae){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(C.$$typeof){case l:case i:Ee=!0;break;case g:return Ee=C._init,R(Ee(C._payload),q,x,J,se)}}if(Ee)return se=se(C),Ee=J===""?"."+le(C,0):J,ue(se)?(x="",Ee!=null&&(x=Ee.replace(Ae,"$&/")+"/"),R(se,q,x,"",function(Gn){return Gn})):se!=null&&(ee(se)&&(se=ye(se,x+(se.key==null||C&&C.key===se.key?"":(""+se.key).replace(Ae,"$&/")+"/")+Ee)),q.push(se)),1;Ee=0;var Xe=J===""?".":J+":";if(ue(C))for(var Ne=0;Ne<C.length;Ne++)J=C[Ne],ae=Xe+le(J,Ne),Ee+=R(J,q,x,ae,se);else if(Ne=S(C),typeof Ne=="function")for(C=Ne.call(C),Ne=0;!(J=C.next()).done;)J=J.value,ae=Xe+le(J,Ne++),Ee+=R(J,q,x,ae,se);else if(ae==="object"){if(typeof C.then=="function")return R(F(C),q,x,J,se);throw q=String(C),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function Q(C,q,x){if(C==null)return C;var J=[],se=0;return R(C,J,"","",function(ae){return q.call(x,ae,se++)}),J}function te(C){if(C._status===-1){var q=C._result;q=q(),q.then(function(x){(C._status===0||C._status===-1)&&(C._status=1,C._result=x)},function(x){(C._status===0||C._status===-1)&&(C._status=2,C._result=x)}),C._status===-1&&(C._status=0,C._result=q)}if(C._status===1)return C._result.default;throw C._result}var be=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},E={map:Q,forEach:function(C,q,x){Q(C,function(){q.apply(this,arguments)},x)},count:function(C){var q=0;return Q(C,function(){q++}),q},toArray:function(C){return Q(C,function(q){return q})||[]},only:function(C){if(!ee(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return me.Activity=v,me.Children=E,me.Component=D,me.Fragment=r,me.Profiler=c,me.PureComponent=V,me.StrictMode=u,me.Suspense=y,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,me.__COMPILER_RUNTIME={__proto__:null,c:function(C){return K.H.useMemoCache(C)}},me.cache=function(C){return function(){return C.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(C,q,x){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var J=L({},C.props),se=C.key;if(q!=null)for(ae in q.key!==void 0&&(se=""+q.key),q)!ce.call(q,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&q.ref===void 0||(J[ae]=q[ae]);var ae=arguments.length-2;if(ae===1)J.children=x;else if(1<ae){for(var Ee=Array(ae),Xe=0;Xe<ae;Xe++)Ee[Xe]=arguments[Xe+2];J.children=Ee}return fe(C.type,se,J)},me.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},me.createElement=function(C,q,x){var J,se={},ae=null;if(q!=null)for(J in q.key!==void 0&&(ae=""+q.key),q)ce.call(q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(se[J]=q[J]);var Ee=arguments.length-2;if(Ee===1)se.children=x;else if(1<Ee){for(var Xe=Array(Ee),Ne=0;Ne<Ee;Ne++)Xe[Ne]=arguments[Ne+2];se.children=Xe}if(C&&C.defaultProps)for(J in Ee=C.defaultProps,Ee)se[J]===void 0&&(se[J]=Ee[J]);return fe(C,ae,se)},me.createRef=function(){return{current:null}},me.forwardRef=function(C){return{$$typeof:p,render:C}},me.isValidElement=ee,me.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:te}},me.memo=function(C,q){return{$$typeof:m,type:C,compare:q===void 0?null:q}},me.startTransition=function(C){var q=K.T,x={};K.T=x;try{var J=C(),se=K.S;se!==null&&se(x,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(B,be)}catch(ae){be(ae)}finally{q!==null&&x.types!==null&&(q.types=x.types),K.T=q}},me.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},me.use=function(C){return K.H.use(C)},me.useActionState=function(C,q,x){return K.H.useActionState(C,q,x)},me.useCallback=function(C,q){return K.H.useCallback(C,q)},me.useContext=function(C){return K.H.useContext(C)},me.useDebugValue=function(){},me.useDeferredValue=function(C,q){return K.H.useDeferredValue(C,q)},me.useEffect=function(C,q){return K.H.useEffect(C,q)},me.useEffectEvent=function(C){return K.H.useEffectEvent(C)},me.useId=function(){return K.H.useId()},me.useImperativeHandle=function(C,q,x){return K.H.useImperativeHandle(C,q,x)},me.useInsertionEffect=function(C,q){return K.H.useInsertionEffect(C,q)},me.useLayoutEffect=function(C,q){return K.H.useLayoutEffect(C,q)},me.useMemo=function(C,q){return K.H.useMemo(C,q)},me.useOptimistic=function(C,q){return K.H.useOptimistic(C,q)},me.useReducer=function(C,q,x){return K.H.useReducer(C,q,x)},me.useRef=function(C){return K.H.useRef(C)},me.useState=function(C){return K.H.useState(C)},me.useSyncExternalStore=function(C,q,x){return K.H.useSyncExternalStore(C,q,x)},me.useTransition=function(){return K.H.useTransition()},me.version="19.2.3",me}var Um;function dc(){return Um||(Um=1,Ds.exports=Jv()),Ds.exports}var Y=dc();const Pv=su(Y);var Os={exports:{}},bi={},Ls={exports:{}},Ns={};var Hm;function $v(){return Hm||(Hm=1,(function(l){function i(R,Q){var te=R.length;R.push(Q);e:for(;0<te;){var be=te-1>>>1,E=R[be];if(0<c(E,Q))R[be]=Q,R[te]=E,te=be;else break e}}function r(R){return R.length===0?null:R[0]}function u(R){if(R.length===0)return null;var Q=R[0],te=R.pop();if(te!==Q){R[0]=te;e:for(var be=0,E=R.length,C=E>>>1;be<C;){var q=2*(be+1)-1,x=R[q],J=q+1,se=R[J];if(0>c(x,te))J<E&&0>c(se,x)?(R[be]=se,R[J]=te,be=J):(R[be]=x,R[q]=te,be=q);else if(J<E&&0>c(se,te))R[be]=se,R[J]=te,be=J;else break e}}return Q}function c(R,Q){var te=R.sortIndex-Q.sortIndex;return te!==0?te:R.id-Q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var h=Date,p=h.now();l.unstable_now=function(){return h.now()-p}}var y=[],m=[],g=1,v=null,w=3,S=!1,U=!1,L=!1,H=!1,D=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function re(R){for(var Q=r(m);Q!==null;){if(Q.callback===null)u(m);else if(Q.startTime<=R)u(m),Q.sortIndex=Q.expirationTime,i(y,Q);else break;Q=r(m)}}function ue(R){if(L=!1,re(R),!U)if(r(y)!==null)U=!0,B||(B=!0,P());else{var Q=r(m);Q!==null&&F(ue,Q.startTime-R)}}var B=!1,K=-1,ce=5,fe=-1;function ye(){return H?!0:!(l.unstable_now()-fe<ce)}function ee(){if(H=!1,B){var R=l.unstable_now();fe=R;var Q=!0;try{e:{U=!1,L&&(L=!1,X(K),K=-1),S=!0;var te=w;try{n:{for(re(R),v=r(y);v!==null&&!(v.expirationTime>R&&ye());){var be=v.callback;if(typeof be=="function"){v.callback=null,w=v.priorityLevel;var E=be(v.expirationTime<=R);if(R=l.unstable_now(),typeof E=="function"){v.callback=E,re(R),Q=!0;break n}v===r(y)&&u(y),re(R)}else u(y);v=r(y)}if(v!==null)Q=!0;else{var C=r(m);C!==null&&F(ue,C.startTime-R),Q=!1}}break e}finally{v=null,w=te,S=!1}Q=void 0}}finally{Q?P():B=!1}}}var P;if(typeof V=="function")P=function(){V(ee)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,le=Ae.port2;Ae.port1.onmessage=ee,P=function(){le.postMessage(null)}}else P=function(){D(ee,0)};function F(R,Q){K=D(function(){R(l.unstable_now())},Q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(R){R.callback=null},l.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<R?Math.floor(1e3/R):5},l.unstable_getCurrentPriorityLevel=function(){return w},l.unstable_next=function(R){switch(w){case 1:case 2:case 3:var Q=3;break;default:Q=w}var te=w;w=Q;try{return R()}finally{w=te}},l.unstable_requestPaint=function(){H=!0},l.unstable_runWithPriority=function(R,Q){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var te=w;w=R;try{return Q()}finally{w=te}},l.unstable_scheduleCallback=function(R,Q,te){var be=l.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?be+te:be):te=be,R){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=te+E,R={id:g++,callback:Q,priorityLevel:R,startTime:te,expirationTime:E,sortIndex:-1},te>be?(R.sortIndex=te,i(m,R),r(y)===null&&R===r(m)&&(L?(X(K),K=-1):L=!0,F(ue,te-be))):(R.sortIndex=E,i(y,R),U||S||(U=!0,B||(B=!0,P()))),R},l.unstable_shouldYield=ye,l.unstable_wrapCallback=function(R){var Q=w;return function(){var te=w;w=Q;try{return R.apply(this,arguments)}finally{w=te}}}})(Ns)),Ns}var Bm;function eb(){return Bm||(Bm=1,Ls.exports=$v()),Ls.exports}var Us={exports:{}},mn={};var qm;function nb(){if(qm)return mn;qm=1;var l=dc();function i(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var u={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(y,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:y,containerInfo:m,implementation:g}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,mn.createPortal=function(y,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return f(y,m,null,g)},mn.flushSync=function(y){var m=h.T,g=u.p;try{if(h.T=null,u.p=2,y)return y()}finally{h.T=m,u.p=g,u.d.f()}},mn.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(y,m))},mn.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},mn.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var g=m.as,v=p(g,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?u.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):g==="script"&&u.d.X(y,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},mn.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=p(m.as,m.crossOrigin);u.d.M(y,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(y)},mn.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=p(g,m.crossOrigin);u.d.L(y,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},mn.preloadModule=function(y,m){if(typeof y=="string")if(m){var g=p(m.as,m.crossOrigin);u.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(y)},mn.requestFormReset=function(y){u.d.r(y)},mn.unstable_batchedUpdates=function(y,m){return y(m)},mn.useFormState=function(y,m,g){return h.H.useFormState(y,m,g)},mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},mn.version="19.2.3",mn}var jm;function tb(){if(jm)return Us.exports;jm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Us.exports=nb(),Us.exports}var Ym;function lb(){if(Ym)return bi;Ym=1;var l=eb(),i=dc(),r=tb();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(u(188))}function m(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,a=n;;){var o=t.return;if(o===null)break;var s=o.alternate;if(s===null){if(a=o.return,a!==null){t=a;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===t)return y(o),e;if(s===a)return y(o),n;s=s.sibling}throw Error(u(188))}if(t.return!==a.return)t=o,a=s;else{for(var d=!1,b=o.child;b;){if(b===t){d=!0,t=o,a=s;break}if(b===a){d=!0,a=o,t=s;break}b=b.sibling}if(!d){for(b=s.child;b;){if(b===t){d=!0,t=s,a=o;break}if(b===a){d=!0,a=s,t=o;break}b=b.sibling}if(!d)throw Error(u(189))}}if(t.alternate!==a)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),V=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case D:return"Profiler";case H:return"StrictMode";case ue:return"Suspense";case B:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case V:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case re:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case ce:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}var F=Array.isArray,R=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},be=[],E=-1;function C(e){return{current:e}}function q(e){0>E||(e.current=be[E],be[E]=null,E--)}function x(e,n){E++,be[E]=e.current,e.current=n}var J=C(null),se=C(null),ae=C(null),Ee=C(null);function Xe(e,n){switch(x(ae,n),x(se,e),x(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?tm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=tm(n),e=lm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(J),x(J,e)}function Ne(){q(J),q(se),q(ae)}function Gn(e){e.memoizedState!==null&&x(Ee,e);var n=J.current,t=lm(n,e.type);n!==t&&(x(se,e),x(J,t))}function ht(e){se.current===e&&(q(J),q(se)),Ee.current===e&&(q(Ee),mi._currentValue=te)}var Ca,Li;function dt(e){if(Ca===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ca=n&&n[1]||"",Li=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ca+e+Li}var _l=!1;function Ml(e,n){if(!e||_l)return"";_l=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(O){var M=O}Reflect.construct(e,[],I)}else{try{I.call()}catch(O){M=O}e.call(I.prototype)}}else{try{throw Error()}catch(O){M=O}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(O){if(O&&M&&typeof O.stack=="string")return[O.stack,M.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),d=s[0],b=s[1];if(d&&b){var T=d.split(`
`),_=b.split(`
`);for(o=a=0;a<T.length&&!T[a].includes("DetermineComponentFrameRoot");)a++;for(;o<_.length&&!_[o].includes("DetermineComponentFrameRoot");)o++;if(a===T.length||o===_.length)for(a=T.length-1,o=_.length-1;1<=a&&0<=o&&T[a]!==_[o];)o--;for(;1<=a&&0<=o;a--,o--)if(T[a]!==_[o]){if(a!==1||o!==1)do if(a--,o--,0>o||T[a]!==_[o]){var N=`
`+T[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=o);break}}}finally{_l=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?dt(t):""}function Ni(e,n){switch(e.tag){case 26:case 27:case 5:return dt(e.type);case 16:return dt("Lazy");case 13:return e.child!==n&&n!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return Ml(e.type,!1);case 11:return Ml(e.type.render,!1);case 1:return Ml(e.type,!0);case 31:return dt("Activity");default:return""}}function Ui(e){try{var n="",t=null;do n+=Ni(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Rl=Object.prototype.hasOwnProperty,Dl=l.unstable_scheduleCallback,ka=l.unstable_cancelCallback,pu=l.unstable_shouldYield,yu=l.unstable_requestPaint,yn=l.unstable_now,gu=l.unstable_getCurrentPriorityLevel,j=l.unstable_ImmediatePriority,W=l.unstable_UserBlockingPriority,he=l.unstable_NormalPriority,Se=l.unstable_LowPriority,De=l.unstable_IdlePriority,Mn=l.log,mt=l.unstable_setDisableYieldValue,gn=null,ln=null;function bn(e){if(typeof Mn=="function"&&mt(e),ln&&typeof ln.setStrictMode=="function")try{ln.setStrictMode(gn,e)}catch{}}var qe=Math.clz32?Math.clz32:Ny,Nt=Math.log,et=Math.LN2;function Ny(e){return e>>>=0,e===0?32:31-(Nt(e)/et|0)|0}var Hi=256,Bi=262144,qi=4194304;function sl(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ji(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var o=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var b=a&134217727;return b!==0?(a=b&~s,a!==0?o=sl(a):(d&=b,d!==0?o=sl(d):t||(t=b&~e,t!==0&&(o=sl(t))))):(b=a&~s,b!==0?o=sl(b):d!==0?o=sl(d):t||(t=a&~e,t!==0&&(o=sl(t)))),o===0?0:n!==0&&n!==o&&(n&s)===0&&(s=o&-o,t=n&-n,s>=t||s===32&&(t&4194048)!==0)?n:o}function Aa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Uy(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uc(){var e=qi;return qi<<=1,(qi&62914560)===0&&(qi=4194304),e}function vu(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function za(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hy(e,n,t,a,o,s){var d=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var b=e.entanglements,T=e.expirationTimes,_=e.hiddenUpdates;for(t=d&~t;0<t;){var N=31-qe(t),I=1<<N;b[N]=0,T[N]=-1;var M=_[N];if(M!==null)for(_[N]=null,N=0;N<M.length;N++){var O=M[N];O!==null&&(O.lane&=-536870913)}t&=~I}a!==0&&Hc(e,a,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~n))}function Hc(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-qe(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function Bc(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-qe(t),o=1<<a;o&n|e[a]&n&&(e[a]|=n),t&=~o}}function qc(e,n){var t=n&-n;return t=(t&42)!==0?1:bu(t),(t&(e.suspendedLanes|n))!==0?0:t}function bu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Su(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jc(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:km(e.type))}function Yc(e,n){var t=Q.p;try{return Q.p=e,n()}finally{Q.p=t}}var Ut=Math.random().toString(36).slice(2),sn="__reactFiber$"+Ut,Sn="__reactProps$"+Ut,Ol="__reactContainer$"+Ut,xu="__reactEvents$"+Ut,By="__reactListeners$"+Ut,qy="__reactHandles$"+Ut,Gc="__reactResources$"+Ut,_a="__reactMarker$"+Ut;function wu(e){delete e[sn],delete e[Sn],delete e[xu],delete e[By],delete e[qy]}function Ll(e){var n=e[sn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ol]||t[sn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=cm(e);e!==null;){if(t=e[sn])return t;e=cm(e)}return n}e=t,t=e.parentNode}return null}function Nl(e){if(e=e[sn]||e[Ol]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ma(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function Ul(e){var n=e[Gc];return n||(n=e[Gc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[_a]=!0}var Ic=new Set,Vc={};function cl(e,n){Hl(e,n),Hl(e+"Capture",n)}function Hl(e,n){for(Vc[e]=n,e=0;e<n.length;e++)Ic.add(n[e])}var jy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xc={},Qc={};function Yy(e){return Rl.call(Qc,e)?!0:Rl.call(Xc,e)?!1:jy.test(e)?Qc[e]=!0:(Xc[e]=!0,!1)}function Yi(e,n,t){if(Yy(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Gi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function pt(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function In(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gy(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,s=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(d){t=""+d,s.call(this,d)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(d){t=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Eu(e){if(!e._valueTracker){var n=Zc(e)?"checked":"value";e._valueTracker=Gy(e,n,""+e[n])}}function Fc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Zc(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Iy=/[\n"\\]/g;function Vn(e){return e.replace(Iy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tu(e,n,t,a,o,s,d,b){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+In(n)):e.value!==""+In(n)&&(e.value=""+In(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?Cu(e,d,In(n)):t!=null?Cu(e,d,In(t)):a!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+In(b):e.removeAttribute("name")}function Wc(e,n,t,a,o,s,d,b){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),n!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||n!=null)){Eu(e);return}t=t!=null?""+In(t):"",n=n!=null?""+In(n):t,b||n===e.value||(e.value=n),e.defaultValue=n}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=b?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Eu(e)}function Cu(e,n,t){n==="number"&&Ii(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Bl(e,n,t,a){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&a&&(e[t].defaultSelected=!0)}else{for(t=""+In(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Kc(e,n,t){if(n!=null&&(n=""+In(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+In(t):""}function Jc(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(u(92));if(F(a)){if(1<a.length)throw Error(u(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=In(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),Eu(e)}function ql(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Vy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pc(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Vy.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function $c(e,n,t){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in n)a=n[o],n.hasOwnProperty(o)&&t[o]!==a&&Pc(e,o,a)}else for(var s in n)n.hasOwnProperty(s)&&Pc(e,s,n[s])}function ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vi(e){return Qy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function yt(){}var Au=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jl=null,Yl=null;function ef(e){var n=Nl(e);if(n&&(e=n.stateNode)){var t=e[Sn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Tu(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Vn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var o=a[Sn]||null;if(!o)throw Error(u(90));Tu(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Fc(a)}break e;case"textarea":Kc(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Bl(e,!!t.multiple,n,!1)}}}var _u=!1;function nf(e,n,t){if(_u)return e(n,t);_u=!0;try{var a=e(n);return a}finally{if(_u=!1,(jl!==null||Yl!==null)&&(Rr(),jl&&(n=jl,e=Yl,Yl=jl=null,ef(n),e)))for(n=0;n<e.length;n++)ef(e[n])}}function Ra(e,n){var t=e.stateNode;if(t===null)return null;var a=t[Sn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(gt)try{var Da={};Object.defineProperty(Da,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Da,Da),window.removeEventListener("test",Da,Da)}catch{Mu=!1}var Ht=null,Ru=null,Xi=null;function tf(){if(Xi)return Xi;var e,n=Ru,t=n.length,a,o="value"in Ht?Ht.value:Ht.textContent,s=o.length;for(e=0;e<t&&n[e]===o[e];e++);var d=t-e;for(a=1;a<=d&&n[t-a]===o[s-a];a++);return Xi=o.slice(e,1<a?1-a:void 0)}function Qi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function lf(){return!1}function xn(e){function n(t,a,o,s,d){this._reactName=t,this._targetInst=o,this.type=a,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(t=e[b],this[b]=t?t(s):s[b]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zi:lf,this.isPropagationStopped=lf,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),n}var fl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fi=xn(fl),Oa=v({},fl,{view:0,detail:0}),Zy=xn(Oa),Du,Ou,La,Wi=v({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==La&&(La&&e.type==="mousemove"?(Du=e.screenX-La.screenX,Ou=e.screenY-La.screenY):Ou=Du=0,La=e),Du)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),af=xn(Wi),Fy=v({},Wi,{dataTransfer:0}),Wy=xn(Fy),Ky=v({},Oa,{relatedTarget:0}),Lu=xn(Ky),Jy=v({},fl,{animationName:0,elapsedTime:0,pseudoElement:0}),Py=xn(Jy),$y=v({},fl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eg=xn($y),ng=v({},fl,{data:0}),rf=xn(ng),tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ig(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ag[e])?!!n[e]:!1}function Nu(){return ig}var rg=v({},Oa,{key:function(e){if(e.key){var n=tg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ug=xn(rg),og=v({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uf=xn(og),sg=v({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),cg=xn(sg),fg=v({},fl,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=xn(fg),dg=v({},Wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mg=xn(dg),pg=v({},fl,{newState:0,oldState:0}),yg=xn(pg),gg=[9,13,27,32],Uu=gt&&"CompositionEvent"in window,Na=null;gt&&"documentMode"in document&&(Na=document.documentMode);var vg=gt&&"TextEvent"in window&&!Na,of=gt&&(!Uu||Na&&8<Na&&11>=Na),sf=" ",cf=!1;function ff(e,n){switch(e){case"keyup":return gg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gl=!1;function bg(e,n){switch(e){case"compositionend":return hf(n);case"keypress":return n.which!==32?null:(cf=!0,sf);case"textInput":return e=n.data,e===sf&&cf?null:e;default:return null}}function Sg(e,n){if(Gl)return e==="compositionend"||!Uu&&ff(e,n)?(e=tf(),Xi=Ru=Ht=null,Gl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return of&&n.locale!=="ko"?null:n.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function df(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xg[e.type]:n==="textarea"}function mf(e,n,t,a){jl?Yl?Yl.push(a):Yl=[a]:jl=a,n=Br(n,"onChange"),0<n.length&&(t=new Fi("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Ua=null,Ha=null;function wg(e){Kd(e,0)}function Ki(e){var n=Ma(e);if(Fc(n))return e}function pf(e,n){if(e==="change")return n}var yf=!1;if(gt){var Hu;if(gt){var Bu="oninput"in document;if(!Bu){var gf=document.createElement("div");gf.setAttribute("oninput","return;"),Bu=typeof gf.oninput=="function"}Hu=Bu}else Hu=!1;yf=Hu&&(!document.documentMode||9<document.documentMode)}function vf(){Ua&&(Ua.detachEvent("onpropertychange",bf),Ha=Ua=null)}function bf(e){if(e.propertyName==="value"&&Ki(Ha)){var n=[];mf(n,Ha,e,zu(e)),nf(wg,n)}}function Eg(e,n,t){e==="focusin"?(vf(),Ua=n,Ha=t,Ua.attachEvent("onpropertychange",bf)):e==="focusout"&&vf()}function Tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ki(Ha)}function Cg(e,n){if(e==="click")return Ki(n)}function kg(e,n){if(e==="input"||e==="change")return Ki(n)}function Ag(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Rn=typeof Object.is=="function"?Object.is:Ag;function Ba(e,n){if(Rn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var o=t[a];if(!Rl.call(n,o)||!Rn(e[o],n[o]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xf(e,n){var t=Sf(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Sf(t)}}function wf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ef(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ii(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ii(e.document)}return n}function qu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var zg=gt&&"documentMode"in document&&11>=document.documentMode,Il=null,ju=null,qa=null,Yu=!1;function Tf(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Yu||Il==null||Il!==Ii(a)||(a=Il,"selectionStart"in a&&qu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qa&&Ba(qa,a)||(qa=a,a=Br(ju,"onSelect"),0<a.length&&(n=new Fi("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Il)))}function hl(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Vl={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionrun:hl("Transition","TransitionRun"),transitionstart:hl("Transition","TransitionStart"),transitioncancel:hl("Transition","TransitionCancel"),transitionend:hl("Transition","TransitionEnd")},Gu={},Cf={};gt&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete Vl.animationend.animation,delete Vl.animationiteration.animation,delete Vl.animationstart.animation),"TransitionEvent"in window||delete Vl.transitionend.transition);function dl(e){if(Gu[e])return Gu[e];if(!Vl[e])return e;var n=Vl[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Cf)return Gu[e]=n[t];return e}var kf=dl("animationend"),Af=dl("animationiteration"),zf=dl("animationstart"),_g=dl("transitionrun"),Mg=dl("transitionstart"),Rg=dl("transitioncancel"),_f=dl("transitionend"),Mf=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function nt(e,n){Mf.set(e,n),cl(n,[e])}var Ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xn=[],Xl=0,Vu=0;function Pi(){for(var e=Xl,n=Vu=Xl=0;n<e;){var t=Xn[n];Xn[n++]=null;var a=Xn[n];Xn[n++]=null;var o=Xn[n];Xn[n++]=null;var s=Xn[n];if(Xn[n++]=null,a!==null&&o!==null){var d=a.pending;d===null?o.next=o:(o.next=d.next,d.next=o),a.pending=o}s!==0&&Rf(t,o,s)}}function $i(e,n,t,a){Xn[Xl++]=e,Xn[Xl++]=n,Xn[Xl++]=t,Xn[Xl++]=a,Vu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Xu(e,n,t,a){return $i(e,n,t,a),er(e)}function ml(e,n){return $i(e,null,null,n),er(e)}function Rf(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var o=!1,s=e.return;s!==null;)s.childLanes|=t,a=s.alternate,a!==null&&(a.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,o&&n!==null&&(o=31-qe(t),e=s.hiddenUpdates,a=e[o],a===null?e[o]=[n]:a.push(n),n.lane=t|536870912),s):null}function er(e){if(50<ui)throw ui=0,ns=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ql={};function Dg(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(e,n,t,a){return new Dg(e,n,t,a)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vt(e,n){var t=e.alternate;return t===null?(t=Dn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Df(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nr(e,n,t,a,o,s){var d=0;if(a=e,typeof e=="function")Qu(e)&&(d=1);else if(typeof e=="string")d=Hv(e,t,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=Dn(31,t,n,o),e.elementType=fe,e.lanes=s,e;case L:return pl(t.children,o,s,n);case H:d=8,o|=24;break;case D:return e=Dn(12,t,n,o|2),e.elementType=D,e.lanes=s,e;case ue:return e=Dn(13,t,n,o),e.elementType=ue,e.lanes=s,e;case B:return e=Dn(19,t,n,o),e.elementType=B,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:d=10;break e;case X:d=9;break e;case re:d=11;break e;case K:d=14;break e;case ce:d=16,a=null;break e}d=29,t=Error(u(130,e===null?"null":typeof e,"")),a=null}return n=Dn(d,t,n,o),n.elementType=e,n.type=a,n.lanes=s,n}function pl(e,n,t,a){return e=Dn(7,e,a,n),e.lanes=t,e}function Zu(e,n,t){return e=Dn(6,e,null,n),e.lanes=t,e}function Of(e){var n=Dn(18,null,null,0);return n.stateNode=e,n}function Fu(e,n,t){return n=Dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Lf=new WeakMap;function Qn(e,n){if(typeof e=="object"&&e!==null){var t=Lf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Ui(n)},Lf.set(e,n),n)}return{value:e,source:n,stack:Ui(n)}}var Zl=[],Fl=0,tr=null,ja=0,Zn=[],Fn=0,Bt=null,it=1,rt="";function bt(e,n){Zl[Fl++]=ja,Zl[Fl++]=tr,tr=e,ja=n}function Nf(e,n,t){Zn[Fn++]=it,Zn[Fn++]=rt,Zn[Fn++]=Bt,Bt=e;var a=it;e=rt;var o=32-qe(a)-1;a&=~(1<<o),t+=1;var s=32-qe(n)+o;if(30<s){var d=o-o%5;s=(a&(1<<d)-1).toString(32),a>>=d,o-=d,it=1<<32-qe(n)+o|t<<o|a,rt=s+e}else it=1<<s|t<<o|a,rt=e}function Wu(e){e.return!==null&&(bt(e,1),Nf(e,1,0))}function Ku(e){for(;e===tr;)tr=Zl[--Fl],Zl[Fl]=null,ja=Zl[--Fl],Zl[Fl]=null;for(;e===Bt;)Bt=Zn[--Fn],Zn[Fn]=null,rt=Zn[--Fn],Zn[Fn]=null,it=Zn[--Fn],Zn[Fn]=null}function Uf(e,n){Zn[Fn++]=it,Zn[Fn++]=rt,Zn[Fn++]=Bt,it=n.id,rt=n.overflow,Bt=e}var cn=null,Ie=null,ke=!1,qt=null,Wn=!1,Ju=Error(u(519));function jt(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ya(Qn(n,e)),Ju}function Hf(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[sn]=e,n[Sn]=a,t){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(t=0;t<si.length;t++)we(si[t],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":we("invalid",n),Wc(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":we("invalid",n);break;case"textarea":we("invalid",n),Jc(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||em(n.textContent,t)?(a.popover!=null&&(we("beforetoggle",n),we("toggle",n)),a.onScroll!=null&&we("scroll",n),a.onScrollEnd!=null&&we("scrollend",n),a.onClick!=null&&(n.onclick=yt),n=!0):n=!1,n||jt(e,!0)}function Bf(e){for(cn=e.return;cn;)switch(cn.tag){case 5:case 31:case 13:Wn=!1;return;case 27:case 3:Wn=!0;return;default:cn=cn.return}}function Wl(e){if(e!==cn)return!1;if(!ke)return Bf(e),ke=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||ys(e.type,e.memoizedProps)),t=!t),t&&Ie&&jt(e),Bf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ie=sm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ie=sm(e)}else n===27?(n=Ie,el(e.type)?(e=xs,xs=null,Ie=e):Ie=n):Ie=cn?Jn(e.stateNode.nextSibling):null;return!0}function yl(){Ie=cn=null,ke=!1}function Pu(){var e=qt;return e!==null&&(Cn===null?Cn=e:Cn.push.apply(Cn,e),qt=null),e}function Ya(e){qt===null?qt=[e]:qt.push(e)}var $u=C(null),gl=null,St=null;function Yt(e,n,t){x($u,n._currentValue),n._currentValue=t}function xt(e){e._currentValue=$u.current,q($u)}function eo(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function no(e,n,t,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var d=o.child;s=s.firstContext;e:for(;s!==null;){var b=s;s=o;for(var T=0;T<n.length;T++)if(b.context===n[T]){s.lanes|=t,b=s.alternate,b!==null&&(b.lanes|=t),eo(s.return,t,e),a||(d=null);break e}s=b.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(u(341));d.lanes|=t,s=d.alternate,s!==null&&(s.lanes|=t),eo(d,t,e),d=null}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===e){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function Kl(e,n,t,a){e=null;for(var o=n,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var b=o.type;Rn(o.pendingProps.value,d.value)||(e!==null?e.push(b):e=[b])}}else if(o===Ee.current){if(d=o.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(mi):e=[mi])}o=o.return}e!==null&&no(n,e,t,a),n.flags|=262144}function lr(e){for(e=e.firstContext;e!==null;){if(!Rn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vl(e){gl=e,St=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fn(e){return qf(gl,e)}function ar(e,n){return gl===null&&vl(e),qf(e,n)}function qf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},St===null){if(e===null)throw Error(u(308));St=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else St=St.next=n;return t}var Og=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Lg=l.unstable_scheduleCallback,Ng=l.unstable_NormalPriority,Pe={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function to(){return{controller:new Og,data:new Map,refCount:0}}function Ga(e){e.refCount--,e.refCount===0&&Lg(Ng,function(){e.controller.abort()})}var Ia=null,lo=0,Jl=0,Pl=null;function Ug(e,n){if(Ia===null){var t=Ia=[];lo=0,Jl=us(),Pl={status:"pending",value:void 0,then:function(a){t.push(a)}}}return lo++,n.then(jf,jf),n}function jf(){if(--lo===0&&Ia!==null){Pl!==null&&(Pl.status="fulfilled");var e=Ia;Ia=null,Jl=0,Pl=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Hg(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(o){t.push(o)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var o=0;o<t.length;o++)(0,t[o])(n)},function(o){for(a.status="rejected",a.reason=o,o=0;o<t.length;o++)(0,t[o])(void 0)}),a}var Yf=R.S;R.S=function(e,n){Td=yn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ug(e,n),Yf!==null&&Yf(e,n)};var bl=C(null);function ao(){var e=bl.current;return e!==null?e:je.pooledCache}function ir(e,n){n===null?x(bl,bl.current):x(bl,n.pool)}function Gf(){var e=ao();return e===null?null:{parent:Pe._currentValue,pool:e}}var $l=Error(u(460)),io=Error(u(474)),rr=Error(u(542)),ur={then:function(){}};function If(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vf(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(yt,yt),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qf(e),e;default:if(typeof n.status=="string")n.then(yt,yt);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var o=n;o.status="fulfilled",o.value=a}},function(a){if(n.status==="pending"){var o=n;o.status="rejected",o.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qf(e),e}throw xl=n,$l}}function Sl(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(xl=t,$l):t}}var xl=null;function Xf(){if(xl===null)throw Error(u(459));var e=xl;return xl=null,e}function Qf(e){if(e===$l||e===rr)throw Error(u(483))}var ea=null,Va=0;function or(e){var n=Va;return Va+=1,ea===null&&(ea=[]),Vf(ea,e,n)}function Xa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function sr(e,n){throw n.$$typeof===w?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Zf(e){function n(A,k){if(e){var z=A.deletions;z===null?(A.deletions=[k],A.flags|=16):z.push(k)}}function t(A,k){if(!e)return null;for(;k!==null;)n(A,k),k=k.sibling;return null}function a(A){for(var k=new Map;A!==null;)A.key!==null?k.set(A.key,A):k.set(A.index,A),A=A.sibling;return k}function o(A,k){return A=vt(A,k),A.index=0,A.sibling=null,A}function s(A,k,z){return A.index=z,e?(z=A.alternate,z!==null?(z=z.index,z<k?(A.flags|=67108866,k):z):(A.flags|=67108866,k)):(A.flags|=1048576,k)}function d(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function b(A,k,z,G){return k===null||k.tag!==6?(k=Zu(z,A.mode,G),k.return=A,k):(k=o(k,z),k.return=A,k)}function T(A,k,z,G){var ie=z.type;return ie===L?N(A,k,z.props.children,G,z.key):k!==null&&(k.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ce&&Sl(ie)===k.type)?(k=o(k,z.props),Xa(k,z),k.return=A,k):(k=nr(z.type,z.key,z.props,null,A.mode,G),Xa(k,z),k.return=A,k)}function _(A,k,z,G){return k===null||k.tag!==4||k.stateNode.containerInfo!==z.containerInfo||k.stateNode.implementation!==z.implementation?(k=Fu(z,A.mode,G),k.return=A,k):(k=o(k,z.children||[]),k.return=A,k)}function N(A,k,z,G,ie){return k===null||k.tag!==7?(k=pl(z,A.mode,G,ie),k.return=A,k):(k=o(k,z),k.return=A,k)}function I(A,k,z){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Zu(""+k,A.mode,z),k.return=A,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return z=nr(k.type,k.key,k.props,null,A.mode,z),Xa(z,k),z.return=A,z;case U:return k=Fu(k,A.mode,z),k.return=A,k;case ce:return k=Sl(k),I(A,k,z)}if(F(k)||P(k))return k=pl(k,A.mode,z,null),k.return=A,k;if(typeof k.then=="function")return I(A,or(k),z);if(k.$$typeof===V)return I(A,ar(A,k),z);sr(A,k)}return null}function M(A,k,z,G){var ie=k!==null?k.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ie!==null?null:b(A,k,""+z,G);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===ie?T(A,k,z,G):null;case U:return z.key===ie?_(A,k,z,G):null;case ce:return z=Sl(z),M(A,k,z,G)}if(F(z)||P(z))return ie!==null?null:N(A,k,z,G,null);if(typeof z.then=="function")return M(A,k,or(z),G);if(z.$$typeof===V)return M(A,k,ar(A,z),G);sr(A,z)}return null}function O(A,k,z,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return A=A.get(z)||null,b(k,A,""+G,ie);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return A=A.get(G.key===null?z:G.key)||null,T(k,A,G,ie);case U:return A=A.get(G.key===null?z:G.key)||null,_(k,A,G,ie);case ce:return G=Sl(G),O(A,k,z,G,ie)}if(F(G)||P(G))return A=A.get(z)||null,N(k,A,G,ie,null);if(typeof G.then=="function")return O(A,k,z,or(G),ie);if(G.$$typeof===V)return O(A,k,z,ar(k,G),ie);sr(k,G)}return null}function $(A,k,z,G){for(var ie=null,ze=null,ne=k,ge=k=0,Ce=null;ne!==null&&ge<z.length;ge++){ne.index>ge?(Ce=ne,ne=null):Ce=ne.sibling;var _e=M(A,ne,z[ge],G);if(_e===null){ne===null&&(ne=Ce);break}e&&ne&&_e.alternate===null&&n(A,ne),k=s(_e,k,ge),ze===null?ie=_e:ze.sibling=_e,ze=_e,ne=Ce}if(ge===z.length)return t(A,ne),ke&&bt(A,ge),ie;if(ne===null){for(;ge<z.length;ge++)ne=I(A,z[ge],G),ne!==null&&(k=s(ne,k,ge),ze===null?ie=ne:ze.sibling=ne,ze=ne);return ke&&bt(A,ge),ie}for(ne=a(ne);ge<z.length;ge++)Ce=O(ne,A,ge,z[ge],G),Ce!==null&&(e&&Ce.alternate!==null&&ne.delete(Ce.key===null?ge:Ce.key),k=s(Ce,k,ge),ze===null?ie=Ce:ze.sibling=Ce,ze=Ce);return e&&ne.forEach(function(il){return n(A,il)}),ke&&bt(A,ge),ie}function oe(A,k,z,G){if(z==null)throw Error(u(151));for(var ie=null,ze=null,ne=k,ge=k=0,Ce=null,_e=z.next();ne!==null&&!_e.done;ge++,_e=z.next()){ne.index>ge?(Ce=ne,ne=null):Ce=ne.sibling;var il=M(A,ne,_e.value,G);if(il===null){ne===null&&(ne=Ce);break}e&&ne&&il.alternate===null&&n(A,ne),k=s(il,k,ge),ze===null?ie=il:ze.sibling=il,ze=il,ne=Ce}if(_e.done)return t(A,ne),ke&&bt(A,ge),ie;if(ne===null){for(;!_e.done;ge++,_e=z.next())_e=I(A,_e.value,G),_e!==null&&(k=s(_e,k,ge),ze===null?ie=_e:ze.sibling=_e,ze=_e);return ke&&bt(A,ge),ie}for(ne=a(ne);!_e.done;ge++,_e=z.next())_e=O(ne,A,ge,_e.value,G),_e!==null&&(e&&_e.alternate!==null&&ne.delete(_e.key===null?ge:_e.key),k=s(_e,k,ge),ze===null?ie=_e:ze.sibling=_e,ze=_e);return e&&ne.forEach(function(Fv){return n(A,Fv)}),ke&&bt(A,ge),ie}function Be(A,k,z,G){if(typeof z=="object"&&z!==null&&z.type===L&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var ie=z.key;k!==null;){if(k.key===ie){if(ie=z.type,ie===L){if(k.tag===7){t(A,k.sibling),G=o(k,z.props.children),G.return=A,A=G;break e}}else if(k.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ce&&Sl(ie)===k.type){t(A,k.sibling),G=o(k,z.props),Xa(G,z),G.return=A,A=G;break e}t(A,k);break}else n(A,k);k=k.sibling}z.type===L?(G=pl(z.props.children,A.mode,G,z.key),G.return=A,A=G):(G=nr(z.type,z.key,z.props,null,A.mode,G),Xa(G,z),G.return=A,A=G)}return d(A);case U:e:{for(ie=z.key;k!==null;){if(k.key===ie)if(k.tag===4&&k.stateNode.containerInfo===z.containerInfo&&k.stateNode.implementation===z.implementation){t(A,k.sibling),G=o(k,z.children||[]),G.return=A,A=G;break e}else{t(A,k);break}else n(A,k);k=k.sibling}G=Fu(z,A.mode,G),G.return=A,A=G}return d(A);case ce:return z=Sl(z),Be(A,k,z,G)}if(F(z))return $(A,k,z,G);if(P(z)){if(ie=P(z),typeof ie!="function")throw Error(u(150));return z=ie.call(z),oe(A,k,z,G)}if(typeof z.then=="function")return Be(A,k,or(z),G);if(z.$$typeof===V)return Be(A,k,ar(A,z),G);sr(A,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,k!==null&&k.tag===6?(t(A,k.sibling),G=o(k,z),G.return=A,A=G):(t(A,k),G=Zu(z,A.mode,G),G.return=A,A=G),d(A)):t(A,k)}return function(A,k,z,G){try{Va=0;var ie=Be(A,k,z,G);return ea=null,ie}catch(ne){if(ne===$l||ne===rr)throw ne;var ze=Dn(29,ne,null,A.mode);return ze.lanes=G,ze.return=A,ze}}}var wl=Zf(!0),Ff=Zf(!1),Gt=!1;function ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function It(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Me&2)!==0){var o=a.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),a.pending=n,n=er(e),Rf(e,null,t),n}return $i(e,a,n,t),er(e)}function Qa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Bc(e,t)}}function oo(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var o=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var d={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?o=s=d:s=s.next=d,t=t.next}while(t!==null);s===null?o=s=n:s=s.next=n}else o=s=n;t={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var so=!1;function Za(){if(so){var e=Pl;if(e!==null)throw e}}function Fa(e,n,t,a){so=!1;var o=e.updateQueue;Gt=!1;var s=o.firstBaseUpdate,d=o.lastBaseUpdate,b=o.shared.pending;if(b!==null){o.shared.pending=null;var T=b,_=T.next;T.next=null,d===null?s=_:d.next=_,d=T;var N=e.alternate;N!==null&&(N=N.updateQueue,b=N.lastBaseUpdate,b!==d&&(b===null?N.firstBaseUpdate=_:b.next=_,N.lastBaseUpdate=T))}if(s!==null){var I=o.baseState;d=0,N=_=T=null,b=s;do{var M=b.lane&-536870913,O=M!==b.lane;if(O?(Te&M)===M:(a&M)===M){M!==0&&M===Jl&&(so=!0),N!==null&&(N=N.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var $=e,oe=b;M=n;var Be=t;switch(oe.tag){case 1:if($=oe.payload,typeof $=="function"){I=$.call(Be,I,M);break e}I=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=oe.payload,M=typeof $=="function"?$.call(Be,I,M):$,M==null)break e;I=v({},I,M);break e;case 2:Gt=!0}}M=b.callback,M!==null&&(e.flags|=64,O&&(e.flags|=8192),O=o.callbacks,O===null?o.callbacks=[M]:O.push(M))}else O={lane:M,tag:b.tag,payload:b.payload,callback:b.callback,next:null},N===null?(_=N=O,T=I):N=N.next=O,d|=M;if(b=b.next,b===null){if(b=o.shared.pending,b===null)break;O=b,b=O.next,O.next=null,o.lastBaseUpdate=O,o.shared.pending=null}}while(!0);N===null&&(T=I),o.baseState=T,o.firstBaseUpdate=_,o.lastBaseUpdate=N,s===null&&(o.shared.lanes=0),Wt|=d,e.lanes=d,e.memoizedState=I}}function Wf(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function Kf(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Wf(t[e],n)}var na=C(null),cr=C(0);function Jf(e,n){e=Mt,x(cr,e),x(na,n),Mt=e|n.baseLanes}function co(){x(cr,Mt),x(na,na.current)}function fo(){Mt=cr.current,q(na),q(cr)}var On=C(null),Kn=null;function Xt(e){var n=e.alternate;x(Ke,Ke.current&1),x(On,e),Kn===null&&(n===null||na.current!==null||n.memoizedState!==null)&&(Kn=e)}function ho(e){x(Ke,Ke.current),x(On,e),Kn===null&&(Kn=e)}function Pf(e){e.tag===22?(x(Ke,Ke.current),x(On,e),Kn===null&&(Kn=e)):Qt()}function Qt(){x(Ke,Ke.current),x(On,On.current)}function Ln(e){q(On),Kn===e&&(Kn=null),q(Ke)}var Ke=C(0);function fr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||bs(t)||Ss(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wt=0,pe=null,Ue=null,$e=null,hr=!1,ta=!1,El=!1,dr=0,Wa=0,la=null,Bg=0;function Fe(){throw Error(u(321))}function mo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Rn(e[t],n[t]))return!1;return!0}function po(e,n,t,a,o,s){return wt=s,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,R.H=e===null||e.memoizedState===null?Nh:Mo,El=!1,s=t(a,o),El=!1,ta&&(s=eh(n,t,a,o)),$f(e),s}function $f(e){R.H=Pa;var n=Ue!==null&&Ue.next!==null;if(wt=0,$e=Ue=pe=null,hr=!1,Wa=0,la=null,n)throw Error(u(300));e===null||en||(e=e.dependencies,e!==null&&lr(e)&&(en=!0))}function eh(e,n,t,a){pe=e;var o=0;do{if(ta&&(la=null),Wa=0,ta=!1,25<=o)throw Error(u(301));if(o+=1,$e=Ue=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}R.H=Uh,s=n(t,a)}while(ta);return s}function qg(){var e=R.H,n=e.useState()[0];return n=typeof n.then=="function"?Ka(n):n,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(pe.flags|=1024),n}function yo(){var e=dr!==0;return dr=0,e}function go(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function vo(e){if(hr){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hr=!1}wt=0,$e=Ue=pe=null,ta=!1,Wa=dr=0,la=null}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?pe.memoizedState=$e=e:$e=$e.next=e,$e}function Je(){if(Ue===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var n=$e===null?pe.memoizedState:$e.next;if(n!==null)$e=n,Ue=e;else{if(e===null)throw pe.alternate===null?Error(u(467)):Error(u(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},$e===null?pe.memoizedState=$e=e:$e=$e.next=e}return $e}function mr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ka(e){var n=Wa;return Wa+=1,la===null&&(la=[]),e=Vf(la,e,n),n=pe,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,R.H=n===null||n.memoizedState===null?Nh:Mo),e}function pr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ka(e);if(e.$$typeof===V)return fn(e)}throw Error(u(438,String(e)))}function bo(e){var n=null,t=pe.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=pe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(o){return o.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=mr(),pe.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=ye;return n.index++,t}function Et(e,n){return typeof n=="function"?n(e):n}function yr(e){var n=Je();return So(n,Ue,e)}function So(e,n,t){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=t;var o=e.baseQueue,s=a.pending;if(s!==null){if(o!==null){var d=o.next;o.next=s.next,s.next=d}n.baseQueue=o=s,a.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{n=o.next;var b=d=null,T=null,_=n,N=!1;do{var I=_.lane&-536870913;if(I!==_.lane?(Te&I)===I:(wt&I)===I){var M=_.revertLane;if(M===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),I===Jl&&(N=!0);else if((wt&M)===M){_=_.next,M===Jl&&(N=!0);continue}else I={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},T===null?(b=T=I,d=s):T=T.next=I,pe.lanes|=M,Wt|=M;I=_.action,El&&t(s,I),s=_.hasEagerState?_.eagerState:t(s,I)}else M={lane:I,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},T===null?(b=T=M,d=s):T=T.next=M,pe.lanes|=I,Wt|=I;_=_.next}while(_!==null&&_!==n);if(T===null?d=s:T.next=b,!Rn(s,e.memoizedState)&&(en=!0,N&&(t=Pl,t!==null)))throw t;e.memoizedState=s,e.baseState=d,e.baseQueue=T,a.lastRenderedState=s}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function xo(e){var n=Je(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var a=t.dispatch,o=t.pending,s=n.memoizedState;if(o!==null){t.pending=null;var d=o=o.next;do s=e(s,d.action),d=d.next;while(d!==o);Rn(s,n.memoizedState)||(en=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,a]}function nh(e,n,t){var a=pe,o=Je(),s=ke;if(s){if(t===void 0)throw Error(u(407));t=t()}else t=n();var d=!Rn((Ue||o).memoizedState,t);if(d&&(o.memoizedState=t,en=!0),o=o.queue,To(ah.bind(null,a,o,e),[e]),o.getSnapshot!==n||d||$e!==null&&$e.memoizedState.tag&1){if(a.flags|=2048,aa(9,{destroy:void 0},lh.bind(null,a,o,t,n),null),je===null)throw Error(u(349));s||(wt&127)!==0||th(a,n,t)}return t}function th(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=pe.updateQueue,n===null?(n=mr(),pe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function lh(e,n,t,a){n.value=t,n.getSnapshot=a,ih(n)&&rh(e)}function ah(e,n,t){return t(function(){ih(n)&&rh(e)})}function ih(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Rn(e,t)}catch{return!0}}function rh(e){var n=ml(e,2);n!==null&&kn(n,e,2)}function wo(e){var n=vn();if(typeof e=="function"){var t=e;if(e=t(),El){bn(!0);try{t()}finally{bn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Et,lastRenderedState:e},n}function uh(e,n,t,a){return e.baseState=t,So(e,Ue,typeof a=="function"?a:Et)}function jg(e,n,t,a,o){if(br(e))throw Error(u(485));if(e=n.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};R.T!==null?t(!0):s.isTransition=!1,a(s),t=n.pending,t===null?(s.next=n.pending=s,oh(n,s)):(s.next=t.next,n.pending=t.next=s)}}function oh(e,n){var t=n.action,a=n.payload,o=e.state;if(n.isTransition){var s=R.T,d={};R.T=d;try{var b=t(o,a),T=R.S;T!==null&&T(d,b),sh(e,n,b)}catch(_){Eo(e,n,_)}finally{s!==null&&d.types!==null&&(s.types=d.types),R.T=s}}else try{s=t(o,a),sh(e,n,s)}catch(_){Eo(e,n,_)}}function sh(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){ch(e,n,a)},function(a){return Eo(e,n,a)}):ch(e,n,t)}function ch(e,n,t){n.status="fulfilled",n.value=t,fh(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,oh(e,t)))}function Eo(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,fh(n),n=n.next;while(n!==a)}e.action=null}function fh(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function hh(e,n){return n}function dh(e,n){if(ke){var t=je.formState;if(t!==null){e:{var a=pe;if(ke){if(Ie){n:{for(var o=Ie,s=Wn;o.nodeType!==8;){if(!s){o=null;break n}if(o=Jn(o.nextSibling),o===null){o=null;break n}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){Ie=Jn(o.nextSibling),a=o.data==="F!";break e}}jt(a)}a=!1}a&&(n=t[0])}}return t=vn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hh,lastRenderedState:n},t.queue=a,t=Dh.bind(null,pe,a),a.dispatch=t,a=wo(!1),s=_o.bind(null,pe,!1,a.queue),a=vn(),o={state:n,dispatch:null,action:e,pending:null},a.queue=o,t=jg.bind(null,pe,o,s,t),o.dispatch=t,a.memoizedState=e,[n,t,!1]}function mh(e){var n=Je();return ph(n,Ue,e)}function ph(e,n,t){if(n=So(e,n,hh)[0],e=yr(Et)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=Ka(n)}catch(d){throw d===$l?rr:d}else a=n;n=Je();var o=n.queue,s=o.dispatch;return t!==n.memoizedState&&(pe.flags|=2048,aa(9,{destroy:void 0},Yg.bind(null,o,t),null)),[a,s,e]}function Yg(e,n){e.action=n}function yh(e){var n=Je(),t=Ue;if(t!==null)return ph(n,t,e);Je(),n=n.memoizedState,t=Je();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function aa(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=pe.updateQueue,n===null&&(n=mr(),pe.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function gh(){return Je().memoizedState}function gr(e,n,t,a){var o=vn();pe.flags|=e,o.memoizedState=aa(1|n,{destroy:void 0},t,a===void 0?null:a)}function vr(e,n,t,a){var o=Je();a=a===void 0?null:a;var s=o.memoizedState.inst;Ue!==null&&a!==null&&mo(a,Ue.memoizedState.deps)?o.memoizedState=aa(n,s,t,a):(pe.flags|=e,o.memoizedState=aa(1|n,s,t,a))}function vh(e,n){gr(8390656,8,e,n)}function To(e,n){vr(2048,8,e,n)}function Gg(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=mr(),pe.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function bh(e){var n=Je().memoizedState;return Gg({ref:n,nextImpl:e}),function(){if((Me&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function Sh(e,n){return vr(4,2,e,n)}function xh(e,n){return vr(4,4,e,n)}function wh(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Eh(e,n,t){t=t!=null?t.concat([e]):null,vr(4,4,wh.bind(null,n,e),t)}function Co(){}function Th(e,n){var t=Je();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&mo(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Ch(e,n){var t=Je();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&mo(n,a[1]))return a[0];if(a=e(),El){bn(!0);try{e()}finally{bn(!1)}}return t.memoizedState=[a,n],a}function ko(e,n,t){return t===void 0||(wt&1073741824)!==0&&(Te&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=kd(),pe.lanes|=e,Wt|=e,t)}function kh(e,n,t,a){return Rn(t,n)?t:na.current!==null?(e=ko(e,t,a),Rn(e,n)||(en=!0),e):(wt&42)===0||(wt&1073741824)!==0&&(Te&261930)===0?(en=!0,e.memoizedState=t):(e=kd(),pe.lanes|=e,Wt|=e,n)}function Ah(e,n,t,a,o){var s=Q.p;Q.p=s!==0&&8>s?s:8;var d=R.T,b={};R.T=b,_o(e,!1,n,t);try{var T=o(),_=R.S;if(_!==null&&_(b,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var N=Hg(T,a);Ja(e,n,N,Hn(e))}else Ja(e,n,a,Hn(e))}catch(I){Ja(e,n,{then:function(){},status:"rejected",reason:I},Hn())}finally{Q.p=s,d!==null&&b.types!==null&&(d.types=b.types),R.T=d}}function Ig(){}function Ao(e,n,t,a){if(e.tag!==5)throw Error(u(476));var o=zh(e).queue;Ah(e,o,n,te,t===null?Ig:function(){return _h(e),t(a)})}function zh(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Et,lastRenderedState:te},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Et,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function _h(e){var n=zh(e);n.next===null&&(n=e.alternate.memoizedState),Ja(e,n.next.queue,{},Hn())}function zo(){return fn(mi)}function Mh(){return Je().memoizedState}function Rh(){return Je().memoizedState}function Vg(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Hn();e=It(t);var a=Vt(n,e,t);a!==null&&(kn(a,n,t),Qa(a,n,t)),n={cache:to()},e.payload=n;return}n=n.return}}function Xg(e,n,t){var a=Hn();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},br(e)?Oh(n,t):(t=Xu(e,n,t,a),t!==null&&(kn(t,e,a),Lh(t,n,a)))}function Dh(e,n,t){var a=Hn();Ja(e,n,t,a)}function Ja(e,n,t,a){var o={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(br(e))Oh(n,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var d=n.lastRenderedState,b=s(d,t);if(o.hasEagerState=!0,o.eagerState=b,Rn(b,d))return $i(e,n,o,0),je===null&&Pi(),!1}catch{}if(t=Xu(e,n,o,a),t!==null)return kn(t,e,a),Lh(t,n,a),!0}return!1}function _o(e,n,t,a){if(a={lane:2,revertLane:us(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},br(e)){if(n)throw Error(u(479))}else n=Xu(e,t,a,2),n!==null&&kn(n,e,2)}function br(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function Oh(e,n){ta=hr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Lh(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Bc(e,t)}}var Pa={readContext:fn,use:pr,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe};Pa.useEffectEvent=Fe;var Nh={readContext:fn,use:pr,useCallback:function(e,n){return vn().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:vh,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,gr(4194308,4,wh.bind(null,n,e),t)},useLayoutEffect:function(e,n){return gr(4194308,4,e,n)},useInsertionEffect:function(e,n){gr(4,2,e,n)},useMemo:function(e,n){var t=vn();n=n===void 0?null:n;var a=e();if(El){bn(!0);try{e()}finally{bn(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=vn();if(t!==void 0){var o=t(n);if(El){bn(!0);try{t(n)}finally{bn(!1)}}}else o=n;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=Xg.bind(null,pe,e),[a.memoizedState,e]},useRef:function(e){var n=vn();return e={current:e},n.memoizedState=e},useState:function(e){e=wo(e);var n=e.queue,t=Dh.bind(null,pe,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Co,useDeferredValue:function(e,n){var t=vn();return ko(t,e,n)},useTransition:function(){var e=wo(!1);return e=Ah.bind(null,pe,e.queue,!0,!1),vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=pe,o=vn();if(ke){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),je===null)throw Error(u(349));(Te&127)!==0||th(a,n,t)}o.memoizedState=t;var s={value:t,getSnapshot:n};return o.queue=s,vh(ah.bind(null,a,s,e),[e]),a.flags|=2048,aa(9,{destroy:void 0},lh.bind(null,a,s,t,n),null),t},useId:function(){var e=vn(),n=je.identifierPrefix;if(ke){var t=rt,a=it;t=(a&~(1<<32-qe(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=dr++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=Bg++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:zo,useFormState:dh,useActionState:dh,useOptimistic:function(e){var n=vn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=_o.bind(null,pe,!0,t),t.dispatch=n,[e,n]},useMemoCache:bo,useCacheRefresh:function(){return vn().memoizedState=Vg.bind(null,pe)},useEffectEvent:function(e){var n=vn(),t={impl:e};return n.memoizedState=t,function(){if((Me&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},Mo={readContext:fn,use:pr,useCallback:Th,useContext:fn,useEffect:To,useImperativeHandle:Eh,useInsertionEffect:Sh,useLayoutEffect:xh,useMemo:Ch,useReducer:yr,useRef:gh,useState:function(){return yr(Et)},useDebugValue:Co,useDeferredValue:function(e,n){var t=Je();return kh(t,Ue.memoizedState,e,n)},useTransition:function(){var e=yr(Et)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:Ka(e),n]},useSyncExternalStore:nh,useId:Mh,useHostTransitionStatus:zo,useFormState:mh,useActionState:mh,useOptimistic:function(e,n){var t=Je();return uh(t,Ue,e,n)},useMemoCache:bo,useCacheRefresh:Rh};Mo.useEffectEvent=bh;var Uh={readContext:fn,use:pr,useCallback:Th,useContext:fn,useEffect:To,useImperativeHandle:Eh,useInsertionEffect:Sh,useLayoutEffect:xh,useMemo:Ch,useReducer:xo,useRef:gh,useState:function(){return xo(Et)},useDebugValue:Co,useDeferredValue:function(e,n){var t=Je();return Ue===null?ko(t,e,n):kh(t,Ue.memoizedState,e,n)},useTransition:function(){var e=xo(Et)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:Ka(e),n]},useSyncExternalStore:nh,useId:Mh,useHostTransitionStatus:zo,useFormState:yh,useActionState:yh,useOptimistic:function(e,n){var t=Je();return Ue!==null?uh(t,Ue,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:bo,useCacheRefresh:Rh};Uh.useEffectEvent=bh;function Ro(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:v({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Do={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Hn(),o=It(a);o.payload=n,t!=null&&(o.callback=t),n=Vt(e,o,a),n!==null&&(kn(n,e,a),Qa(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Hn(),o=It(a);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Vt(e,o,a),n!==null&&(kn(n,e,a),Qa(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Hn(),a=It(t);a.tag=2,n!=null&&(a.callback=n),n=Vt(e,a,t),n!==null&&(kn(n,e,t),Qa(n,e,t))}};function Hh(e,n,t,a,o,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,d):n.prototype&&n.prototype.isPureReactComponent?!Ba(t,a)||!Ba(o,s):!0}function Bh(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Do.enqueueReplaceState(n,n.state,null)}function Tl(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=v({},t));for(var o in e)t[o]===void 0&&(t[o]=e[o])}return t}function qh(e){Ji(e)}function jh(e){console.error(e)}function Yh(e){Ji(e)}function Sr(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Gh(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Oo(e,n,t){return t=It(t),t.tag=3,t.payload={element:null},t.callback=function(){Sr(e,n)},t}function Ih(e){return e=It(e),e.tag=3,e}function Vh(e,n,t,a){var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=a.value;e.payload=function(){return o(s)},e.callback=function(){Gh(n,t,a)}}var d=t.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Gh(n,t,a),typeof o!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var b=a.stack;this.componentDidCatch(a.value,{componentStack:b!==null?b:""})})}function Qg(e,n,t,a,o){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&Kl(n,t,o,!0),t=On.current,t!==null){switch(t.tag){case 31:case 13:return Kn===null?Dr():t.alternate===null&&We===0&&(We=3),t.flags&=-257,t.flags|=65536,t.lanes=o,a===ur?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),as(e,a,o)),!1;case 22:return t.flags|=65536,a===ur?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),as(e,a,o)),!1}throw Error(u(435,t.tag))}return as(e,a,o),Dr(),!1}if(ke)return n=On.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=o,a!==Ju&&(e=Error(u(422),{cause:a}),Ya(Qn(e,t)))):(a!==Ju&&(n=Error(u(423),{cause:a}),Ya(Qn(n,t))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Qn(a,t),o=Oo(e.stateNode,a,o),oo(e,o),We!==4&&(We=2)),!1;var s=Error(u(520),{cause:a});if(s=Qn(s,t),ri===null?ri=[s]:ri.push(s),We!==4&&(We=2),n===null)return!0;a=Qn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=o&-o,t.lanes|=e,e=Oo(t.stateNode,a,e),oo(t,e),!1;case 1:if(n=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Kt===null||!Kt.has(s))))return t.flags|=65536,o&=-o,t.lanes|=o,o=Ih(o),Vh(o,e,t,a),oo(t,o),!1}t=t.return}while(t!==null);return!1}var Lo=Error(u(461)),en=!1;function hn(e,n,t,a){n.child=e===null?Ff(n,null,t,a):wl(n,e.child,t,a)}function Xh(e,n,t,a,o){t=t.render;var s=n.ref;if("ref"in a){var d={};for(var b in a)b!=="ref"&&(d[b]=a[b])}else d=a;return vl(n),a=po(e,n,t,d,s,o),b=yo(),e!==null&&!en?(go(e,n,o),Tt(e,n,o)):(ke&&b&&Wu(n),n.flags|=1,hn(e,n,a,o),n.child)}function Qh(e,n,t,a,o){if(e===null){var s=t.type;return typeof s=="function"&&!Qu(s)&&s.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=s,Zh(e,n,s,a,o)):(e=nr(t.type,null,a,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!Go(e,o)){var d=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ba,t(d,a)&&e.ref===n.ref)return Tt(e,n,o)}return n.flags|=1,e=vt(s,a),e.ref=n.ref,e.return=n,n.child=e}function Zh(e,n,t,a,o){if(e!==null){var s=e.memoizedProps;if(Ba(s,a)&&e.ref===n.ref)if(en=!1,n.pendingProps=a=s,Go(e,o))(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,Tt(e,n,o)}return No(e,n,t,a,o)}function Fh(e,n,t,a){var o=a.children,s=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(a=n.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~s}else a=0,n.child=null;return Wh(e,n,s,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ir(n,s!==null?s.cachePool:null),s!==null?Jf(n,s):co(),Pf(n);else return a=n.lanes=536870912,Wh(e,n,s!==null?s.baseLanes|t:t,t,a)}else s!==null?(ir(n,s.cachePool),Jf(n,s),Qt(),n.memoizedState=null):(e!==null&&ir(n,null),co(),Qt());return hn(e,n,o,t),n.child}function $a(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wh(e,n,t,a,o){var s=ao();return s=s===null?null:{parent:Pe._currentValue,pool:s},n.memoizedState={baseLanes:t,cachePool:s},e!==null&&ir(n,null),co(),Pf(n),e!==null&&Kl(e,n,a,!0),n.childLanes=o,null}function xr(e,n){return n=Er({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Kh(e,n,t){return wl(n,e.child,null,t),e=xr(n,n.pendingProps),e.flags|=2,Ln(n),n.memoizedState=null,e}function Zg(e,n,t){var a=n.pendingProps,o=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ke){if(a.mode==="hidden")return e=xr(n,a),n.lanes=536870912,$a(null,e);if(ho(n),(e=Ie)?(e=om(e,Wn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Bt!==null?{id:it,overflow:rt}:null,retryLane:536870912,hydrationErrors:null},t=Of(e),t.return=n,n.child=t,cn=n,Ie=null)):e=null,e===null)throw jt(n);return n.lanes=536870912,null}return xr(n,a)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(ho(n),o)if(n.flags&256)n.flags&=-257,n=Kh(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(en||Kl(e,n,t,!1),o=(t&e.childLanes)!==0,en||o){if(a=je,a!==null&&(d=qc(a,t),d!==0&&d!==s.retryLane))throw s.retryLane=d,ml(e,d),kn(a,e,d),Lo;Dr(),n=Kh(e,n,t)}else e=s.treeContext,Ie=Jn(d.nextSibling),cn=n,ke=!0,qt=null,Wn=!1,e!==null&&Uf(n,e),n=xr(n,a),n.flags|=4096;return n}return e=vt(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function wr(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function No(e,n,t,a,o){return vl(n),t=po(e,n,t,a,void 0,o),a=yo(),e!==null&&!en?(go(e,n,o),Tt(e,n,o)):(ke&&a&&Wu(n),n.flags|=1,hn(e,n,t,o),n.child)}function Jh(e,n,t,a,o,s){return vl(n),n.updateQueue=null,t=eh(n,a,t,o),$f(e),a=yo(),e!==null&&!en?(go(e,n,s),Tt(e,n,s)):(ke&&a&&Wu(n),n.flags|=1,hn(e,n,t,s),n.child)}function Ph(e,n,t,a,o){if(vl(n),n.stateNode===null){var s=Ql,d=t.contextType;typeof d=="object"&&d!==null&&(s=fn(d)),s=new t(a,s),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Do,n.stateNode=s,s._reactInternals=n,s=n.stateNode,s.props=a,s.state=n.memoizedState,s.refs={},ro(n),d=t.contextType,s.context=typeof d=="object"&&d!==null?fn(d):Ql,s.state=n.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Ro(n,t,d,a),s.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Do.enqueueReplaceState(s,s.state,null),Fa(n,a,s,o),Za(),s.state=n.memoizedState),typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){s=n.stateNode;var b=n.memoizedProps,T=Tl(t,b);s.props=T;var _=s.context,N=t.contextType;d=Ql,typeof N=="object"&&N!==null&&(d=fn(N));var I=t.getDerivedStateFromProps;N=typeof I=="function"||typeof s.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,N||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(b||_!==d)&&Bh(n,s,a,d),Gt=!1;var M=n.memoizedState;s.state=M,Fa(n,a,s,o),Za(),_=n.memoizedState,b||M!==_||Gt?(typeof I=="function"&&(Ro(n,t,I,a),_=n.memoizedState),(T=Gt||Hh(n,t,T,a,M,_,d))?(N||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=_),s.props=a,s.state=_,s.context=d,a=T):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,uo(e,n),d=n.memoizedProps,N=Tl(t,d),s.props=N,I=n.pendingProps,M=s.context,_=t.contextType,T=Ql,typeof _=="object"&&_!==null&&(T=fn(_)),b=t.getDerivedStateFromProps,(_=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==I||M!==T)&&Bh(n,s,a,T),Gt=!1,M=n.memoizedState,s.state=M,Fa(n,a,s,o),Za();var O=n.memoizedState;d!==I||M!==O||Gt||e!==null&&e.dependencies!==null&&lr(e.dependencies)?(typeof b=="function"&&(Ro(n,t,b,a),O=n.memoizedState),(N=Gt||Hh(n,t,N,a,M,O,T)||e!==null&&e.dependencies!==null&&lr(e.dependencies))?(_||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,O,T),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,O,T)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=O),s.props=a,s.state=O,s.context=T,a=N):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(n.flags|=1024),a=!1)}return s=a,wr(e,n),a=(n.flags&128)!==0,s||a?(s=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:s.render(),n.flags|=1,e!==null&&a?(n.child=wl(n,e.child,null,o),n.child=wl(n,null,t,o)):hn(e,n,t,o),n.memoizedState=s.state,e=n.child):e=Tt(e,n,o),e}function $h(e,n,t,a){return yl(),n.flags|=256,hn(e,n,t,a),n.child}var Uo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ho(e){return{baseLanes:e,cachePool:Gf()}}function Bo(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Un),e}function ed(e,n,t){var a=n.pendingProps,o=!1,s=(n.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),d&&(o=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(ke){if(o?Xt(n):Qt(),(e=Ie)?(e=om(e,Wn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Bt!==null?{id:it,overflow:rt}:null,retryLane:536870912,hydrationErrors:null},t=Of(e),t.return=n,n.child=t,cn=n,Ie=null)):e=null,e===null)throw jt(n);return Ss(e)?n.lanes=32:n.lanes=536870912,null}var b=a.children;return a=a.fallback,o?(Qt(),o=n.mode,b=Er({mode:"hidden",children:b},o),a=pl(a,o,t,null),b.return=n,a.return=n,b.sibling=a,n.child=b,a=n.child,a.memoizedState=Ho(t),a.childLanes=Bo(e,d,t),n.memoizedState=Uo,$a(null,a)):(Xt(n),qo(n,b))}var T=e.memoizedState;if(T!==null&&(b=T.dehydrated,b!==null)){if(s)n.flags&256?(Xt(n),n.flags&=-257,n=jo(e,n,t)):n.memoizedState!==null?(Qt(),n.child=e.child,n.flags|=128,n=null):(Qt(),b=a.fallback,o=n.mode,a=Er({mode:"visible",children:a.children},o),b=pl(b,o,t,null),b.flags|=2,a.return=n,b.return=n,a.sibling=b,n.child=a,wl(n,e.child,null,t),a=n.child,a.memoizedState=Ho(t),a.childLanes=Bo(e,d,t),n.memoizedState=Uo,n=$a(null,a));else if(Xt(n),Ss(b)){if(d=b.nextSibling&&b.nextSibling.dataset,d)var _=d.dgst;d=_,a=Error(u(419)),a.stack="",a.digest=d,Ya({value:a,source:null,stack:null}),n=jo(e,n,t)}else if(en||Kl(e,n,t,!1),d=(t&e.childLanes)!==0,en||d){if(d=je,d!==null&&(a=qc(d,t),a!==0&&a!==T.retryLane))throw T.retryLane=a,ml(e,a),kn(d,e,a),Lo;bs(b)||Dr(),n=jo(e,n,t)}else bs(b)?(n.flags|=192,n.child=e.child,n=null):(e=T.treeContext,Ie=Jn(b.nextSibling),cn=n,ke=!0,qt=null,Wn=!1,e!==null&&Uf(n,e),n=qo(n,a.children),n.flags|=4096);return n}return o?(Qt(),b=a.fallback,o=n.mode,T=e.child,_=T.sibling,a=vt(T,{mode:"hidden",children:a.children}),a.subtreeFlags=T.subtreeFlags&65011712,_!==null?b=vt(_,b):(b=pl(b,o,t,null),b.flags|=2),b.return=n,a.return=n,a.sibling=b,n.child=a,$a(null,a),a=n.child,b=e.child.memoizedState,b===null?b=Ho(t):(o=b.cachePool,o!==null?(T=Pe._currentValue,o=o.parent!==T?{parent:T,pool:T}:o):o=Gf(),b={baseLanes:b.baseLanes|t,cachePool:o}),a.memoizedState=b,a.childLanes=Bo(e,d,t),n.memoizedState=Uo,$a(e.child,a)):(Xt(n),t=e.child,e=t.sibling,t=vt(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=t,n.memoizedState=null,t)}function qo(e,n){return n=Er({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Er(e,n){return e=Dn(22,e,null,n),e.lanes=0,e}function jo(e,n,t){return wl(n,e.child,null,t),e=qo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function nd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),eo(e.return,n,t)}function Yo(e,n,t,a,o,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:o,treeForkCount:s}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=t,d.tailMode=o,d.treeForkCount=s)}function td(e,n,t){var a=n.pendingProps,o=a.revealOrder,s=a.tail;a=a.children;var d=Ke.current,b=(d&2)!==0;if(b?(d=d&1|2,n.flags|=128):d&=1,x(Ke,d),hn(e,n,a,t),a=ke?ja:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nd(e,t,n);else if(e.tag===19)nd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&fr(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Yo(n,!1,o,t,s,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&fr(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Yo(n,!0,t,null,s,a);break;case"together":Yo(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function Tt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Wt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Kl(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=vt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=vt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Go(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&lr(e)))}function Fg(e,n,t){switch(n.tag){case 3:Xe(n,n.stateNode.containerInfo),Yt(n,Pe,e.memoizedState.cache),yl();break;case 27:case 5:Gn(n);break;case 4:Xe(n,n.stateNode.containerInfo);break;case 10:Yt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ho(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(Xt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?ed(e,n,t):(Xt(n),e=Tt(e,n,t),e!==null?e.sibling:null);Xt(n);break;case 19:var o=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(Kl(e,n,t,!1),a=(t&n.childLanes)!==0),o){if(a)return td(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),x(Ke,Ke.current),a)break;return null;case 22:return n.lanes=0,Fh(e,n,t,n.pendingProps);case 24:Yt(n,Pe,e.memoizedState.cache)}return Tt(e,n,t)}function ld(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)en=!0;else{if(!Go(e,t)&&(n.flags&128)===0)return en=!1,Fg(e,n,t);en=(e.flags&131072)!==0}else en=!1,ke&&(n.flags&1048576)!==0&&Nf(n,ja,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=Sl(n.elementType),n.type=e,typeof e=="function")Qu(e)?(a=Tl(e,a),n.tag=1,n=Ph(null,n,e,a,t)):(n.tag=0,n=No(null,n,e,a,t));else{if(e!=null){var o=e.$$typeof;if(o===re){n.tag=11,n=Xh(null,n,e,a,t);break e}else if(o===K){n.tag=14,n=Qh(null,n,e,a,t);break e}}throw n=le(e)||e,Error(u(306,n,""))}}return n;case 0:return No(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,o=Tl(a,n.pendingProps),Ph(e,n,a,o,t);case 3:e:{if(Xe(n,n.stateNode.containerInfo),e===null)throw Error(u(387));a=n.pendingProps;var s=n.memoizedState;o=s.element,uo(e,n),Fa(n,a,null,t);var d=n.memoizedState;if(a=d.cache,Yt(n,Pe,a),a!==s.cache&&no(n,[Pe],t,!0),Za(),a=d.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){n=$h(e,n,a,t);break e}else if(a!==o){o=Qn(Error(u(424)),n),Ya(o),n=$h(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ie=Jn(e.firstChild),cn=n,ke=!0,qt=null,Wn=!0,t=Ff(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(yl(),a===o){n=Tt(e,n,t);break e}hn(e,n,a,t)}n=n.child}return n;case 26:return wr(e,n),e===null?(t=mm(n.type,null,n.pendingProps,null))?n.memoizedState=t:ke||(t=n.type,e=n.pendingProps,a=qr(ae.current).createElement(t),a[sn]=n,a[Sn]=e,dn(a,t,e),rn(a),n.stateNode=a):n.memoizedState=mm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Gn(n),e===null&&ke&&(a=n.stateNode=fm(n.type,n.pendingProps,ae.current),cn=n,Wn=!0,o=Ie,el(n.type)?(xs=o,Ie=Jn(a.firstChild)):Ie=o),hn(e,n,n.pendingProps.children,t),wr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ke&&((o=a=Ie)&&(a=Tv(a,n.type,n.pendingProps,Wn),a!==null?(n.stateNode=a,cn=n,Ie=Jn(a.firstChild),Wn=!1,o=!0):o=!1),o||jt(n)),Gn(n),o=n.type,s=n.pendingProps,d=e!==null?e.memoizedProps:null,a=s.children,ys(o,s)?a=null:d!==null&&ys(o,d)&&(n.flags|=32),n.memoizedState!==null&&(o=po(e,n,qg,null,null,t),mi._currentValue=o),wr(e,n),hn(e,n,a,t),n.child;case 6:return e===null&&ke&&((e=t=Ie)&&(t=Cv(t,n.pendingProps,Wn),t!==null?(n.stateNode=t,cn=n,Ie=null,e=!0):e=!1),e||jt(n)),null;case 13:return ed(e,n,t);case 4:return Xe(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=wl(n,null,a,t):hn(e,n,a,t),n.child;case 11:return Xh(e,n,n.type,n.pendingProps,t);case 7:return hn(e,n,n.pendingProps,t),n.child;case 8:return hn(e,n,n.pendingProps.children,t),n.child;case 12:return hn(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,Yt(n,n.type,a.value),hn(e,n,a.children,t),n.child;case 9:return o=n.type._context,a=n.pendingProps.children,vl(n),o=fn(o),a=a(o),n.flags|=1,hn(e,n,a,t),n.child;case 14:return Qh(e,n,n.type,n.pendingProps,t);case 15:return Zh(e,n,n.type,n.pendingProps,t);case 19:return td(e,n,t);case 31:return Zg(e,n,t);case 22:return Fh(e,n,t,n.pendingProps);case 24:return vl(n),a=fn(Pe),e===null?(o=ao(),o===null&&(o=je,s=to(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=t),o=s),n.memoizedState={parent:a,cache:o},ro(n),Yt(n,Pe,o)):((e.lanes&t)!==0&&(uo(e,n),Fa(n,null,null,t),Za()),o=e.memoizedState,s=n.memoizedState,o.parent!==a?(o={parent:a,cache:a},n.memoizedState=o,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=o),Yt(n,Pe,a)):(a=s.cache,Yt(n,Pe,a),a!==o.cache&&no(n,[Pe],t,!0))),hn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function Ct(e){e.flags|=4}function Io(e,n,t,a,o){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Md())e.flags|=8192;else throw xl=ur,io}else e.flags&=-16777217}function ad(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bm(n))if(Md())e.flags|=8192;else throw xl=ur,io}function Tr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Uc():536870912,e.lanes|=n,oa|=n)}function ei(e,n){if(!ke)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Wg(e,n,t){var a=n.pendingProps;switch(Ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),xt(Pe),Ne(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Wl(n)?Ct(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pu())),Ve(n),null;case 26:var o=n.type,s=n.memoizedState;return e===null?(Ct(n),s!==null?(Ve(n),ad(n,s)):(Ve(n),Io(n,o,null,a,t))):s?s!==e.memoizedState?(Ct(n),Ve(n),ad(n,s)):(Ve(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&Ct(n),Ve(n),Io(n,o,e,a,t)),null;case 27:if(ht(n),t=ae.current,o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Ct(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Ve(n),null}e=J.current,Wl(n)?Hf(n):(e=fm(o,a,t),n.stateNode=e,Ct(n))}return Ve(n),null;case 5:if(ht(n),o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Ct(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Ve(n),null}if(s=J.current,Wl(n))Hf(n);else{var d=qr(ae.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?d.createElement(o,{is:a.is}):d.createElement(o)}}s[sn]=n,s[Sn]=a;e:for(d=n.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}n.stateNode=s;e:switch(dn(s,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Ct(n)}}return Ve(n),Io(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Ct(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(u(166));if(e=ae.current,Wl(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,o=cn,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[sn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||em(e.nodeValue,t)),e||jt(n,!0)}else e=qr(e).createTextNode(a),e[sn]=n,n.stateNode=e}return Ve(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=Wl(n),t!==null){if(e===null){if(!a)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[sn]=n}else yl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),e=!1}else t=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(Ln(n),n):(Ln(n),null);if((n.flags&128)!==0)throw Error(u(558))}return Ve(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Wl(n),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[sn]=n}else yl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),o=!1}else o=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return n.flags&256?(Ln(n),n):(Ln(n),null)}return Ln(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==o&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Tr(n,n.updateQueue),Ve(n),null);case 4:return Ne(),e===null&&fs(n.stateNode.containerInfo),Ve(n),null;case 10:return xt(n.type),Ve(n),null;case 19:if(q(Ke),a=n.memoizedState,a===null)return Ve(n),null;if(o=(n.flags&128)!==0,s=a.rendering,s===null)if(o)ei(a,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=fr(e),s!==null){for(n.flags|=128,ei(a,!1),e=s.updateQueue,n.updateQueue=e,Tr(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Df(t,e),t=t.sibling;return x(Ke,Ke.current&1|2),ke&&bt(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&yn()>_r&&(n.flags|=128,o=!0,ei(a,!1),n.lanes=4194304)}else{if(!o)if(e=fr(s),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Tr(n,e),ei(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ke)return Ve(n),null}else 2*yn()-a.renderingStartTime>_r&&t!==536870912&&(n.flags|=128,o=!0,ei(a,!1),n.lanes=4194304);a.isBackwards?(s.sibling=n.child,n.child=s):(e=a.last,e!==null?e.sibling=s:n.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=yn(),e.sibling=null,t=Ke.current,x(Ke,o?t&1|2:t&1),ke&&bt(n,a.treeForkCount),e):(Ve(n),null);case 22:case 23:return Ln(n),fo(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),t=n.updateQueue,t!==null&&Tr(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&q(bl),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),xt(Pe),Ve(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function Kg(e,n){switch(Ku(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return xt(Pe),Ne(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(Ln(n),n.alternate===null)throw Error(u(340));yl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ln(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));yl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(Ke),null;case 4:return Ne(),null;case 10:return xt(n.type),null;case 22:case 23:return Ln(n),fo(),e!==null&&q(bl),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return xt(Pe),null;case 25:return null;default:return null}}function id(e,n){switch(Ku(n),n.tag){case 3:xt(Pe),Ne();break;case 26:case 27:case 5:ht(n);break;case 4:Ne();break;case 31:n.memoizedState!==null&&Ln(n);break;case 13:Ln(n);break;case 19:q(Ke);break;case 10:xt(n.type);break;case 22:case 23:Ln(n),fo(),e!==null&&q(bl);break;case 24:xt(Pe)}}function ni(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var o=a.next;t=o;do{if((t.tag&e)===e){a=void 0;var s=t.create,d=t.inst;a=s(),d.destroy=a}t=t.next}while(t!==o)}}catch(b){Le(n,n.return,b)}}function Zt(e,n,t){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){var d=a.inst,b=d.destroy;if(b!==void 0){d.destroy=void 0,o=n;var T=t,_=b;try{_()}catch(N){Le(o,T,N)}}}a=a.next}while(a!==s)}}catch(N){Le(n,n.return,N)}}function rd(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Kf(n,t)}catch(a){Le(e,e.return,a)}}}function ud(e,n,t){t.props=Tl(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Le(e,n,a)}}function ti(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(o){Le(e,n,o)}}function ut(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(o){Le(e,n,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(o){Le(e,n,o)}else t.current=null}function od(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(o){Le(e,e.return,o)}}function Vo(e,n,t){try{var a=e.stateNode;vv(a,e.type,t,n),a[Sn]=n}catch(o){Le(e,e.return,o)}}function sd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&el(e.type)||e.tag===4}function Xo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&el(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qo(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=yt));else if(a!==4&&(a===27&&el(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Qo(e,n,t),e=e.sibling;e!==null;)Qo(e,n,t),e=e.sibling}function Cr(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&el(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Cr(e,n,t),e=e.sibling;e!==null;)Cr(e,n,t),e=e.sibling}function cd(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,o=n.attributes;o.length;)n.removeAttributeNode(o[0]);dn(n,a,t),n[sn]=e,n[Sn]=t}catch(s){Le(e,e.return,s)}}var kt=!1,nn=!1,Zo=!1,fd=typeof WeakSet=="function"?WeakSet:Set,un=null;function Jg(e,n){if(e=e.containerInfo,ms=Qr,e=Ef(e),qu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var o=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var d=0,b=-1,T=-1,_=0,N=0,I=e,M=null;n:for(;;){for(var O;I!==t||o!==0&&I.nodeType!==3||(b=d+o),I!==s||a!==0&&I.nodeType!==3||(T=d+a),I.nodeType===3&&(d+=I.nodeValue.length),(O=I.firstChild)!==null;)M=I,I=O;for(;;){if(I===e)break n;if(M===t&&++_===o&&(b=d),M===s&&++N===a&&(T=d),(O=I.nextSibling)!==null)break;I=M,M=I.parentNode}I=O}t=b===-1||T===-1?null:{start:b,end:T}}else t=null}t=t||{start:0,end:0}}else t=null;for(ps={focusedElem:e,selectionRange:t},Qr=!1,un=n;un!==null;)if(n=un,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,un=e;else for(;un!==null;){switch(n=un,s=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)o=e[t],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=n,o=s.memoizedProps,s=s.memoizedState,a=t.stateNode;try{var $=Tl(t.type,o);e=a.getSnapshotBeforeUpdate($,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Le(t,t.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)vs(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,un=e;break}un=n.return}}function hd(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t),a&4&&ni(5,t);break;case 1:if(zt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(d){Le(t,t.return,d)}else{var o=Tl(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(o,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Le(t,t.return,d)}}a&64&&rd(t),a&512&&ti(t,t.return);break;case 3:if(zt(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Kf(e,n)}catch(d){Le(t,t.return,d)}}break;case 27:n===null&&a&4&&cd(t);case 26:case 5:zt(e,t),n===null&&a&4&&od(t),a&512&&ti(t,t.return);break;case 12:zt(e,t);break;case 31:zt(e,t),a&4&&pd(e,t);break;case 13:zt(e,t),a&4&&yd(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=rv.bind(null,t),kv(e,t))));break;case 22:if(a=t.memoizedState!==null||kt,!a){n=n!==null&&n.memoizedState!==null||nn,o=kt;var s=nn;kt=a,(nn=n)&&!s?_t(e,t,(t.subtreeFlags&8772)!==0):zt(e,t),kt=o,nn=s}break;case 30:break;default:zt(e,t)}}function dd(e){var n=e.alternate;n!==null&&(e.alternate=null,dd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&wu(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,wn=!1;function At(e,n,t){for(t=t.child;t!==null;)md(e,n,t),t=t.sibling}function md(e,n,t){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(gn,t)}catch{}switch(t.tag){case 26:nn||ut(t,n),At(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:nn||ut(t,n);var a=Qe,o=wn;el(t.type)&&(Qe=t.stateNode,wn=!1),At(e,n,t),fi(t.stateNode),Qe=a,wn=o;break;case 5:nn||ut(t,n);case 6:if(a=Qe,o=wn,Qe=null,At(e,n,t),Qe=a,wn=o,Qe!==null)if(wn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(t.stateNode)}catch(s){Le(t,n,s)}else try{Qe.removeChild(t.stateNode)}catch(s){Le(t,n,s)}break;case 18:Qe!==null&&(wn?(e=Qe,rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),ya(e)):rm(Qe,t.stateNode));break;case 4:a=Qe,o=wn,Qe=t.stateNode.containerInfo,wn=!0,At(e,n,t),Qe=a,wn=o;break;case 0:case 11:case 14:case 15:Zt(2,t,n),nn||Zt(4,t,n),At(e,n,t);break;case 1:nn||(ut(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&ud(t,n,a)),At(e,n,t);break;case 21:At(e,n,t);break;case 22:nn=(a=nn)||t.memoizedState!==null,At(e,n,t),nn=a;break;default:At(e,n,t)}}function pd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ya(e)}catch(t){Le(n,n.return,t)}}}function yd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ya(e)}catch(t){Le(n,n.return,t)}}function Pg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fd),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fd),n;default:throw Error(u(435,e.tag))}}function kr(e,n){var t=Pg(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var o=uv.bind(null,e,a);a.then(o,o)}})}function En(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var o=t[a],s=e,d=n,b=d;e:for(;b!==null;){switch(b.tag){case 27:if(el(b.type)){Qe=b.stateNode,wn=!1;break e}break;case 5:Qe=b.stateNode,wn=!1;break e;case 3:case 4:Qe=b.stateNode.containerInfo,wn=!0;break e}b=b.return}if(Qe===null)throw Error(u(160));md(s,d,o),Qe=null,wn=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)gd(n,e),n=n.sibling}var tt=null;function gd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:En(n,e),Tn(e),a&4&&(Zt(3,e,e.return),ni(3,e),Zt(5,e,e.return));break;case 1:En(n,e),Tn(e),a&512&&(nn||t===null||ut(t,t.return)),a&64&&kt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var o=tt;if(En(n,e),Tn(e),a&512&&(nn||t===null||ut(t,t.return)),a&4){var s=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,o=o.ownerDocument||o;n:switch(a){case"title":s=o.getElementsByTagName("title")[0],(!s||s[_a]||s[sn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(a),o.head.insertBefore(s,o.querySelector("head > title"))),dn(s,a,t),s[sn]=e,rn(s),a=s;break e;case"link":var d=gm("link","href",o).get(a+(t.href||""));if(d){for(var b=0;b<d.length;b++)if(s=d[b],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){d.splice(b,1);break n}}s=o.createElement(a),dn(s,a,t),o.head.appendChild(s);break;case"meta":if(d=gm("meta","content",o).get(a+(t.content||""))){for(b=0;b<d.length;b++)if(s=d[b],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){d.splice(b,1);break n}}s=o.createElement(a),dn(s,a,t),o.head.appendChild(s);break;default:throw Error(u(468,a))}s[sn]=e,rn(s),a=s}e.stateNode=a}else vm(o,e.type,e.stateNode);else e.stateNode=ym(o,a,e.memoizedProps);else s!==a?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,a===null?vm(o,e.type,e.stateNode):ym(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Vo(e,e.memoizedProps,t.memoizedProps)}break;case 27:En(n,e),Tn(e),a&512&&(nn||t===null||ut(t,t.return)),t!==null&&a&4&&Vo(e,e.memoizedProps,t.memoizedProps);break;case 5:if(En(n,e),Tn(e),a&512&&(nn||t===null||ut(t,t.return)),e.flags&32){o=e.stateNode;try{ql(o,"")}catch($){Le(e,e.return,$)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,Vo(e,o,t!==null?t.memoizedProps:o)),a&1024&&(Zo=!0);break;case 6:if(En(n,e),Tn(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch($){Le(e,e.return,$)}}break;case 3:if(Gr=null,o=tt,tt=jr(n.containerInfo),En(n,e),tt=o,Tn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{ya(n.containerInfo)}catch($){Le(e,e.return,$)}Zo&&(Zo=!1,vd(e));break;case 4:a=tt,tt=jr(e.stateNode.containerInfo),En(n,e),Tn(e),tt=a;break;case 12:En(n,e),Tn(e);break;case 31:En(n,e),Tn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,kr(e,a)));break;case 13:En(n,e),Tn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(zr=yn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,kr(e,a)));break;case 22:o=e.memoizedState!==null;var T=t!==null&&t.memoizedState!==null,_=kt,N=nn;if(kt=_||o,nn=N||T,En(n,e),nn=N,kt=_,Tn(e),a&8192)e:for(n=e.stateNode,n._visibility=o?n._visibility&-2:n._visibility|1,o&&(t===null||T||kt||nn||Cl(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){T=t=n;try{if(s=T.stateNode,o)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{b=T.stateNode;var I=T.memoizedProps.style,M=I!=null&&I.hasOwnProperty("display")?I.display:null;b.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch($){Le(T,T.return,$)}}}else if(n.tag===6){if(t===null){T=n;try{T.stateNode.nodeValue=o?"":T.memoizedProps}catch($){Le(T,T.return,$)}}}else if(n.tag===18){if(t===null){T=n;try{var O=T.stateNode;o?um(O,!0):um(T.stateNode,!1)}catch($){Le(T,T.return,$)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,kr(e,t))));break;case 19:En(n,e),Tn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,kr(e,a)));break;case 30:break;case 21:break;default:En(n,e),Tn(e)}}function Tn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(sd(a)){t=a;break}a=a.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var o=t.stateNode,s=Xo(e);Cr(e,s,o);break;case 5:var d=t.stateNode;t.flags&32&&(ql(d,""),t.flags&=-33);var b=Xo(e);Cr(e,b,d);break;case 3:case 4:var T=t.stateNode.containerInfo,_=Xo(e);Qo(e,_,T);break;default:throw Error(u(161))}}catch(N){Le(e,e.return,N)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;vd(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function zt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hd(e,n.alternate,n),n=n.sibling}function Cl(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Zt(4,n,n.return),Cl(n);break;case 1:ut(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&ud(n,n.return,t),Cl(n);break;case 27:fi(n.stateNode);case 26:case 5:ut(n,n.return),Cl(n);break;case 22:n.memoizedState===null&&Cl(n);break;case 30:Cl(n);break;default:Cl(n)}e=e.sibling}}function _t(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,o=e,s=n,d=s.flags;switch(s.tag){case 0:case 11:case 15:_t(o,s,t),ni(4,s);break;case 1:if(_t(o,s,t),a=s,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(_){Le(a,a.return,_)}if(a=s,o=a.updateQueue,o!==null){var b=a.stateNode;try{var T=o.shared.hiddenCallbacks;if(T!==null)for(o.shared.hiddenCallbacks=null,o=0;o<T.length;o++)Wf(T[o],b)}catch(_){Le(a,a.return,_)}}t&&d&64&&rd(s),ti(s,s.return);break;case 27:cd(s);case 26:case 5:_t(o,s,t),t&&a===null&&d&4&&od(s),ti(s,s.return);break;case 12:_t(o,s,t);break;case 31:_t(o,s,t),t&&d&4&&pd(o,s);break;case 13:_t(o,s,t),t&&d&4&&yd(o,s);break;case 22:s.memoizedState===null&&_t(o,s,t),ti(s,s.return);break;case 30:break;default:_t(o,s,t)}n=n.sibling}}function Fo(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Ga(t))}function Wo(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ga(e))}function lt(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)bd(e,n,t,a),n=n.sibling}function bd(e,n,t,a){var o=n.flags;switch(n.tag){case 0:case 11:case 15:lt(e,n,t,a),o&2048&&ni(9,n);break;case 1:lt(e,n,t,a);break;case 3:lt(e,n,t,a),o&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ga(e)));break;case 12:if(o&2048){lt(e,n,t,a),e=n.stateNode;try{var s=n.memoizedProps,d=s.id,b=s.onPostCommit;typeof b=="function"&&b(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Le(n,n.return,T)}}else lt(e,n,t,a);break;case 31:lt(e,n,t,a);break;case 13:lt(e,n,t,a);break;case 23:break;case 22:s=n.stateNode,d=n.alternate,n.memoizedState!==null?s._visibility&2?lt(e,n,t,a):li(e,n):s._visibility&2?lt(e,n,t,a):(s._visibility|=2,ia(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),o&2048&&Fo(d,n);break;case 24:lt(e,n,t,a),o&2048&&Wo(n.alternate,n);break;default:lt(e,n,t,a)}}function ia(e,n,t,a,o){for(o=o&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var s=e,d=n,b=t,T=a,_=d.flags;switch(d.tag){case 0:case 11:case 15:ia(s,d,b,T,o),ni(8,d);break;case 23:break;case 22:var N=d.stateNode;d.memoizedState!==null?N._visibility&2?ia(s,d,b,T,o):li(s,d):(N._visibility|=2,ia(s,d,b,T,o)),o&&_&2048&&Fo(d.alternate,d);break;case 24:ia(s,d,b,T,o),o&&_&2048&&Wo(d.alternate,d);break;default:ia(s,d,b,T,o)}n=n.sibling}}function li(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,o=a.flags;switch(a.tag){case 22:li(t,a),o&2048&&Fo(a.alternate,a);break;case 24:li(t,a),o&2048&&Wo(a.alternate,a);break;default:li(t,a)}n=n.sibling}}var ai=8192;function ra(e,n,t){if(e.subtreeFlags&ai)for(e=e.child;e!==null;)Sd(e,n,t),e=e.sibling}function Sd(e,n,t){switch(e.tag){case 26:ra(e,n,t),e.flags&ai&&e.memoizedState!==null&&Bv(t,tt,e.memoizedState,e.memoizedProps);break;case 5:ra(e,n,t);break;case 3:case 4:var a=tt;tt=jr(e.stateNode.containerInfo),ra(e,n,t),tt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ai,ai=16777216,ra(e,n,t),ai=a):ra(e,n,t));break;default:ra(e,n,t)}}function xd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ii(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];un=a,Ed(a,e)}xd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wd(e),e=e.sibling}function wd(e){switch(e.tag){case 0:case 11:case 15:ii(e),e.flags&2048&&Zt(9,e,e.return);break;case 3:ii(e);break;case 12:ii(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ar(e)):ii(e);break;default:ii(e)}}function Ar(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];un=a,Ed(a,e)}xd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Zt(8,n,n.return),Ar(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Ar(n));break;default:Ar(n)}e=e.sibling}}function Ed(e,n){for(;un!==null;){var t=un;switch(t.tag){case 0:case 11:case 15:Zt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ga(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,un=a;else e:for(t=e;un!==null;){a=un;var o=a.sibling,s=a.return;if(dd(a),a===t){un=null;break e}if(o!==null){o.return=s,un=o;break e}un=s}}}var $g={getCacheForType:function(e){var n=fn(Pe),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return fn(Pe).controller.signal}},ev=typeof WeakMap=="function"?WeakMap:Map,Me=0,je=null,xe=null,Te=0,Oe=0,Nn=null,Ft=!1,ua=!1,Ko=!1,Mt=0,We=0,Wt=0,kl=0,Jo=0,Un=0,oa=0,ri=null,Cn=null,Po=!1,zr=0,Td=0,_r=1/0,Mr=null,Kt=null,an=0,Jt=null,sa=null,Rt=0,$o=0,es=null,Cd=null,ui=0,ns=null;function Hn(){return(Me&2)!==0&&Te!==0?Te&-Te:R.T!==null?us():jc()}function kd(){if(Un===0)if((Te&536870912)===0||ke){var e=Bi;Bi<<=1,(Bi&3932160)===0&&(Bi=262144),Un=e}else Un=536870912;return e=On.current,e!==null&&(e.flags|=32),Un}function kn(e,n,t){(e===je&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(ca(e,0),Pt(e,Te,Un,!1)),za(e,t),((Me&2)===0||e!==je)&&(e===je&&((Me&2)===0&&(kl|=t),We===4&&Pt(e,Te,Un,!1)),ot(e))}function Ad(e,n,t){if((Me&6)!==0)throw Error(u(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Aa(e,n),o=a?lv(e,n):ls(e,n,!0),s=a;do{if(o===0){ua&&!a&&Pt(e,n,0,!1);break}else{if(t=e.current.alternate,s&&!nv(t)){o=ls(e,n,!1),s=!1;continue}if(o===2){if(s=n,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var b=e;o=ri;var T=b.current.memoizedState.isDehydrated;if(T&&(ca(b,d).flags|=256),d=ls(b,d,!1),d!==2){if(Ko&&!T){b.errorRecoveryDisabledLanes|=s,kl|=s,o=4;break e}s=Cn,Cn=o,s!==null&&(Cn===null?Cn=s:Cn.push.apply(Cn,s))}o=d}if(s=!1,o!==2)continue}}if(o===1){ca(e,0),Pt(e,n,0,!0);break}e:{switch(a=e,s=o,s){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:Pt(a,n,Un,!Ft);break e;case 2:Cn=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(o=zr+300-yn(),10<o)){if(Pt(a,n,Un,!Ft),ji(a,0,!0)!==0)break e;Rt=n,a.timeoutHandle=am(zd.bind(null,a,t,Cn,Mr,Po,n,Un,kl,oa,Ft,s,"Throttled",-0,0),o);break e}zd(a,t,Cn,Mr,Po,n,Un,kl,oa,Ft,s,null,-0,0)}}break}while(!0);ot(e)}function zd(e,n,t,a,o,s,d,b,T,_,N,I,M,O){if(e.timeoutHandle=-1,I=n.subtreeFlags,I&8192||(I&16785408)===16785408){I={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yt},Sd(n,s,I);var $=(s&62914560)===s?zr-yn():(s&4194048)===s?Td-yn():0;if($=qv(I,$),$!==null){Rt=s,e.cancelPendingCommit=$(Ud.bind(null,e,n,s,t,a,o,d,b,T,N,I,null,M,O)),Pt(e,s,d,!_);return}}Ud(e,n,s,t,a,o,d,b,T)}function nv(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var o=t[a],s=o.getSnapshot;o=o.value;try{if(!Rn(s(),o))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pt(e,n,t,a){n&=~Jo,n&=~kl,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var o=n;0<o;){var s=31-qe(o),d=1<<s;a[s]=-1,o&=~d}t!==0&&Hc(e,t,n)}function Rr(){return(Me&6)===0?(oi(0),!1):!0}function ts(){if(xe!==null){if(Oe===0)var e=xe.return;else e=xe,St=gl=null,vo(e),ea=null,Va=0,e=xe;for(;e!==null;)id(e.alternate,e),e=e.return;xe=null}}function ca(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,xv(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Rt=0,ts(),je=e,xe=t=vt(e.current,null),Te=n,Oe=0,Nn=null,Ft=!1,ua=Aa(e,n),Ko=!1,oa=Un=Jo=kl=Wt=We=0,Cn=ri=null,Po=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var o=31-qe(a),s=1<<o;n|=e[o],a&=~s}return Mt=n,Pi(),t}function _d(e,n){pe=null,R.H=Pa,n===$l||n===rr?(n=Xf(),Oe=3):n===io?(n=Xf(),Oe=4):Oe=n===Lo?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Nn=n,xe===null&&(We=1,Sr(e,Qn(n,e.current)))}function Md(){var e=On.current;return e===null?!0:(Te&4194048)===Te?Kn===null:(Te&62914560)===Te||(Te&536870912)!==0?e===Kn:!1}function Rd(){var e=R.H;return R.H=Pa,e===null?Pa:e}function Dd(){var e=R.A;return R.A=$g,e}function Dr(){We=4,Ft||(Te&4194048)!==Te&&On.current!==null||(ua=!0),(Wt&134217727)===0&&(kl&134217727)===0||je===null||Pt(je,Te,Un,!1)}function ls(e,n,t){var a=Me;Me|=2;var o=Rd(),s=Dd();(je!==e||Te!==n)&&(Mr=null,ca(e,n)),n=!1;var d=We;e:do try{if(Oe!==0&&xe!==null){var b=xe,T=Nn;switch(Oe){case 8:ts(),d=6;break e;case 3:case 2:case 9:case 6:On.current===null&&(n=!0);var _=Oe;if(Oe=0,Nn=null,fa(e,b,T,_),t&&ua){d=0;break e}break;default:_=Oe,Oe=0,Nn=null,fa(e,b,T,_)}}tv(),d=We;break}catch(N){_d(e,N)}while(!0);return n&&e.shellSuspendCounter++,St=gl=null,Me=a,R.H=o,R.A=s,xe===null&&(je=null,Te=0,Pi()),d}function tv(){for(;xe!==null;)Od(xe)}function lv(e,n){var t=Me;Me|=2;var a=Rd(),o=Dd();je!==e||Te!==n?(Mr=null,_r=yn()+500,ca(e,n)):ua=Aa(e,n);e:do try{if(Oe!==0&&xe!==null){n=xe;var s=Nn;n:switch(Oe){case 1:Oe=0,Nn=null,fa(e,n,s,1);break;case 2:case 9:if(If(s)){Oe=0,Nn=null,Ld(n);break}n=function(){Oe!==2&&Oe!==9||je!==e||(Oe=7),ot(e)},s.then(n,n);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:If(s)?(Oe=0,Nn=null,Ld(n)):(Oe=0,Nn=null,fa(e,n,s,7));break;case 5:var d=null;switch(xe.tag){case 26:d=xe.memoizedState;case 5:case 27:var b=xe;if(d?bm(d):b.stateNode.complete){Oe=0,Nn=null;var T=b.sibling;if(T!==null)xe=T;else{var _=b.return;_!==null?(xe=_,Or(_)):xe=null}break n}}Oe=0,Nn=null,fa(e,n,s,5);break;case 6:Oe=0,Nn=null,fa(e,n,s,6);break;case 8:ts(),We=6;break e;default:throw Error(u(462))}}av();break}catch(N){_d(e,N)}while(!0);return St=gl=null,R.H=a,R.A=o,Me=t,xe!==null?0:(je=null,Te=0,Pi(),We)}function av(){for(;xe!==null&&!pu();)Od(xe)}function Od(e){var n=ld(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,n===null?Or(e):xe=n}function Ld(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Jh(t,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=Jh(t,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:vo(n);default:id(t,n),n=xe=Df(n,Mt),n=ld(t,n,Mt)}e.memoizedProps=e.pendingProps,n===null?Or(e):xe=n}function fa(e,n,t,a){St=gl=null,vo(n),ea=null,Va=0;var o=n.return;try{if(Qg(e,o,n,t,Te)){We=1,Sr(e,Qn(t,e.current)),xe=null;return}}catch(s){if(o!==null)throw xe=o,s;We=1,Sr(e,Qn(t,e.current)),xe=null;return}n.flags&32768?(ke||a===1?e=!0:ua||(Te&536870912)!==0?e=!1:(Ft=e=!0,(a===2||a===9||a===3||a===6)&&(a=On.current,a!==null&&a.tag===13&&(a.flags|=16384))),Nd(n,e)):Or(n)}function Or(e){var n=e;do{if((n.flags&32768)!==0){Nd(n,Ft);return}e=n.return;var t=Wg(n.alternate,n,Mt);if(t!==null){xe=t;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);We===0&&(We=5)}function Nd(e,n){do{var t=Kg(e.alternate,e);if(t!==null){t.flags&=32767,xe=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=t}while(e!==null);We=6,xe=null}function Ud(e,n,t,a,o,s,d,b,T){e.cancelPendingCommit=null;do Lr();while(an!==0);if((Me&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(s=n.lanes|n.childLanes,s|=Vu,Hy(e,t,s,d,b,T),e===je&&(xe=je=null,Te=0),sa=n,Jt=e,Rt=t,$o=s,es=o,Cd=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ov(he,function(){return Yd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,o=Q.p,Q.p=2,d=Me,Me|=4;try{Jg(e,n,t)}finally{Me=d,Q.p=o,R.T=a}}an=1,Hd(),Bd(),qd()}}function Hd(){if(an===1){an=0;var e=Jt,n=sa,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=R.T,R.T=null;var a=Q.p;Q.p=2;var o=Me;Me|=4;try{gd(n,e);var s=ps,d=Ef(e.containerInfo),b=s.focusedElem,T=s.selectionRange;if(d!==b&&b&&b.ownerDocument&&wf(b.ownerDocument.documentElement,b)){if(T!==null&&qu(b)){var _=T.start,N=T.end;if(N===void 0&&(N=_),"selectionStart"in b)b.selectionStart=_,b.selectionEnd=Math.min(N,b.value.length);else{var I=b.ownerDocument||document,M=I&&I.defaultView||window;if(M.getSelection){var O=M.getSelection(),$=b.textContent.length,oe=Math.min(T.start,$),Be=T.end===void 0?oe:Math.min(T.end,$);!O.extend&&oe>Be&&(d=Be,Be=oe,oe=d);var A=xf(b,oe),k=xf(b,Be);if(A&&k&&(O.rangeCount!==1||O.anchorNode!==A.node||O.anchorOffset!==A.offset||O.focusNode!==k.node||O.focusOffset!==k.offset)){var z=I.createRange();z.setStart(A.node,A.offset),O.removeAllRanges(),oe>Be?(O.addRange(z),O.extend(k.node,k.offset)):(z.setEnd(k.node,k.offset),O.addRange(z))}}}}for(I=[],O=b;O=O.parentNode;)O.nodeType===1&&I.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<I.length;b++){var G=I[b];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Qr=!!ms,ps=ms=null}finally{Me=o,Q.p=a,R.T=t}}e.current=n,an=2}}function Bd(){if(an===2){an=0;var e=Jt,n=sa,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=R.T,R.T=null;var a=Q.p;Q.p=2;var o=Me;Me|=4;try{hd(e,n.alternate,n)}finally{Me=o,Q.p=a,R.T=t}}an=3}}function qd(){if(an===4||an===3){an=0,yu();var e=Jt,n=sa,t=Rt,a=Cd;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?an=5:(an=0,sa=Jt=null,jd(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Kt=null),Su(t),n=n.stateNode,ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(gn,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=R.T,o=Q.p,Q.p=2,R.T=null;try{for(var s=e.onRecoverableError,d=0;d<a.length;d++){var b=a[d];s(b.value,{componentStack:b.stack})}}finally{R.T=n,Q.p=o}}(Rt&3)!==0&&Lr(),ot(e),o=e.pendingLanes,(t&261930)!==0&&(o&42)!==0?e===ns?ui++:(ui=0,ns=e):ui=0,oi(0)}}function jd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ga(n)))}function Lr(){return Hd(),Bd(),qd(),Yd()}function Yd(){if(an!==5)return!1;var e=Jt,n=$o;$o=0;var t=Su(Rt),a=R.T,o=Q.p;try{Q.p=32>t?32:t,R.T=null,t=es,es=null;var s=Jt,d=Rt;if(an=0,sa=Jt=null,Rt=0,(Me&6)!==0)throw Error(u(331));var b=Me;if(Me|=4,wd(s.current),bd(s,s.current,d,t),Me=b,oi(0,!1),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(gn,s)}catch{}return!0}finally{Q.p=o,R.T=a,jd(e,n)}}function Gd(e,n,t){n=Qn(t,n),n=Oo(e.stateNode,n,2),e=Vt(e,n,2),e!==null&&(za(e,2),ot(e))}function Le(e,n,t){if(e.tag===3)Gd(e,e,t);else for(;n!==null;){if(n.tag===3){Gd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kt===null||!Kt.has(a))){e=Qn(t,e),t=Ih(2),a=Vt(n,t,2),a!==null&&(Vh(t,a,n,e),za(a,2),ot(a));break}}n=n.return}}function as(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new ev;var o=new Set;a.set(n,o)}else o=a.get(n),o===void 0&&(o=new Set,a.set(n,o));o.has(t)||(Ko=!0,o.add(t),e=iv.bind(null,e,n,t),n.then(e,e))}function iv(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,je===e&&(Te&t)===t&&(We===4||We===3&&(Te&62914560)===Te&&300>yn()-zr?(Me&2)===0&&ca(e,0):Jo|=t,oa===Te&&(oa=0)),ot(e)}function Id(e,n){n===0&&(n=Uc()),e=ml(e,n),e!==null&&(za(e,n),ot(e))}function rv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Id(e,t)}function uv(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(n),Id(e,t)}function ov(e,n){return Dl(e,n)}var Nr=null,ha=null,is=!1,Ur=!1,rs=!1,$t=0;function ot(e){e!==ha&&e.next===null&&(ha===null?Nr=ha=e:ha=ha.next=e),Ur=!0,is||(is=!0,cv())}function oi(e,n){if(!rs&&Ur){rs=!0;do for(var t=!1,a=Nr;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var s=0;else{var d=a.suspendedLanes,b=a.pingedLanes;s=(1<<31-qe(42|e)+1)-1,s&=o&~(d&~b),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,Zd(a,s))}else s=Te,s=ji(a,a===je?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Aa(a,s)||(t=!0,Zd(a,s));a=a.next}while(t);rs=!1}}function sv(){Vd()}function Vd(){Ur=is=!1;var e=0;$t!==0&&Sv()&&(e=$t);for(var n=yn(),t=null,a=Nr;a!==null;){var o=a.next,s=Xd(a,n);s===0?(a.next=null,t===null?Nr=o:t.next=o,o===null&&(ha=t)):(t=a,(e!==0||(s&3)!==0)&&(Ur=!0)),a=o}an!==0&&an!==5||oi(e),$t!==0&&($t=0)}function Xd(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-qe(s),b=1<<d,T=o[d];T===-1?((b&t)===0||(b&a)!==0)&&(o[d]=Uy(b,n)):T<=n&&(e.expiredLanes|=b),s&=~b}if(n=je,t=Te,t=ji(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ka(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Aa(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&ka(a),Su(t)){case 2:case 8:t=W;break;case 32:t=he;break;case 268435456:t=De;break;default:t=he}return a=Qd.bind(null,e),t=Dl(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&ka(a),e.callbackPriority=2,e.callbackNode=null,2}function Qd(e,n){if(an!==0&&an!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Lr()&&e.callbackNode!==t)return null;var a=Te;return a=ji(e,e===je?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Ad(e,a,n),Xd(e,yn()),e.callbackNode!=null&&e.callbackNode===t?Qd.bind(null,e):null)}function Zd(e,n){if(Lr())return null;Ad(e,n,!0)}function cv(){wv(function(){(Me&6)!==0?Dl(j,sv):Vd()})}function us(){if($t===0){var e=Jl;e===0&&(e=Hi,Hi<<=1,(Hi&261888)===0&&(Hi=256)),$t=e}return $t}function Fd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vi(""+e)}function Wd(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function fv(e,n,t,a,o){if(n==="submit"&&t&&t.stateNode===o){var s=Fd((o[Sn]||null).action),d=a.submitter;d&&(n=(n=d[Sn]||null)?Fd(n.formAction):d.getAttribute("formAction"),n!==null&&(s=n,d=null));var b=new Fi("action","action",null,a,o);e.push({event:b,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if($t!==0){var T=d?Wd(o,d):new FormData(o);Ao(t,{pending:!0,data:T,method:o.method,action:s},null,T)}}else typeof s=="function"&&(b.preventDefault(),T=d?Wd(o,d):new FormData(o),Ao(t,{pending:!0,data:T,method:o.method,action:s},s,T))},currentTarget:o}]})}}for(var os=0;os<Iu.length;os++){var ss=Iu[os],hv=ss.toLowerCase(),dv=ss[0].toUpperCase()+ss.slice(1);nt(hv,"on"+dv)}nt(kf,"onAnimationEnd"),nt(Af,"onAnimationIteration"),nt(zf,"onAnimationStart"),nt("dblclick","onDoubleClick"),nt("focusin","onFocus"),nt("focusout","onBlur"),nt(_g,"onTransitionRun"),nt(Mg,"onTransitionStart"),nt(Rg,"onTransitionCancel"),nt(_f,"onTransitionEnd"),Hl("onMouseEnter",["mouseout","mouseover"]),Hl("onMouseLeave",["mouseout","mouseover"]),Hl("onPointerEnter",["pointerout","pointerover"]),Hl("onPointerLeave",["pointerout","pointerover"]),cl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cl("onBeforeInput",["compositionend","keypress","textInput","paste"]),cl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function Kd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],o=a.event;a=a.listeners;e:{var s=void 0;if(n)for(var d=a.length-1;0<=d;d--){var b=a[d],T=b.instance,_=b.currentTarget;if(b=b.listener,T!==s&&o.isPropagationStopped())break e;s=b,o.currentTarget=_;try{s(o)}catch(N){Ji(N)}o.currentTarget=null,s=T}else for(d=0;d<a.length;d++){if(b=a[d],T=b.instance,_=b.currentTarget,b=b.listener,T!==s&&o.isPropagationStopped())break e;s=b,o.currentTarget=_;try{s(o)}catch(N){Ji(N)}o.currentTarget=null,s=T}}}}function we(e,n){var t=n[xu];t===void 0&&(t=n[xu]=new Set);var a=e+"__bubble";t.has(a)||(Jd(n,e,2,!1),t.add(a))}function cs(e,n,t){var a=0;n&&(a|=4),Jd(t,e,a,n)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function fs(e){if(!e[Hr]){e[Hr]=!0,Ic.forEach(function(t){t!=="selectionchange"&&(mv.has(t)||cs(t,!1,e),cs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Hr]||(n[Hr]=!0,cs("selectionchange",!1,n))}}function Jd(e,n,t,a){switch(km(n)){case 2:var o=Gv;break;case 8:o=Iv;break;default:o=ks}t=o.bind(null,n,t,e),o=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function hs(e,n,t,a,o){var s=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var b=a.stateNode.containerInfo;if(b===o)break;if(d===4)for(d=a.return;d!==null;){var T=d.tag;if((T===3||T===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;b!==null;){if(d=Ll(b),d===null)return;if(T=d.tag,T===5||T===6||T===26||T===27){a=s=d;continue e}b=b.parentNode}}a=a.return}nf(function(){var _=s,N=zu(t),I=[];e:{var M=Mf.get(e);if(M!==void 0){var O=Fi,$=e;switch(e){case"keypress":if(Qi(t)===0)break e;case"keydown":case"keyup":O=ug;break;case"focusin":$="focus",O=Lu;break;case"focusout":$="blur",O=Lu;break;case"beforeblur":case"afterblur":O=Lu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=cg;break;case kf:case Af:case zf:O=Py;break;case _f:O=hg;break;case"scroll":case"scrollend":O=Zy;break;case"wheel":O=mg;break;case"copy":case"cut":case"paste":O=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=uf;break;case"toggle":case"beforetoggle":O=yg}var oe=(n&4)!==0,Be=!oe&&(e==="scroll"||e==="scrollend"),A=oe?M!==null?M+"Capture":null:M;oe=[];for(var k=_,z;k!==null;){var G=k;if(z=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||z===null||A===null||(G=Ra(k,A),G!=null&&oe.push(ci(k,G,z))),Be)break;k=k.return}0<oe.length&&(M=new O(M,$,null,t,N),I.push({event:M,listeners:oe}))}}if((n&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",M&&t!==Au&&($=t.relatedTarget||t.fromElement)&&(Ll($)||$[Ol]))break e;if((O||M)&&(M=N.window===N?N:(M=N.ownerDocument)?M.defaultView||M.parentWindow:window,O?($=t.relatedTarget||t.toElement,O=_,$=$?Ll($):null,$!==null&&(Be=f($),oe=$.tag,$!==Be||oe!==5&&oe!==27&&oe!==6)&&($=null)):(O=null,$=_),O!==$)){if(oe=af,G="onMouseLeave",A="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(oe=uf,G="onPointerLeave",A="onPointerEnter",k="pointer"),Be=O==null?M:Ma(O),z=$==null?M:Ma($),M=new oe(G,k+"leave",O,t,N),M.target=Be,M.relatedTarget=z,G=null,Ll(N)===_&&(oe=new oe(A,k+"enter",$,t,N),oe.target=z,oe.relatedTarget=Be,G=oe),Be=G,O&&$)n:{for(oe=pv,A=O,k=$,z=0,G=A;G;G=oe(G))z++;G=0;for(var ie=k;ie;ie=oe(ie))G++;for(;0<z-G;)A=oe(A),z--;for(;0<G-z;)k=oe(k),G--;for(;z--;){if(A===k||k!==null&&A===k.alternate){oe=A;break n}A=oe(A),k=oe(k)}oe=null}else oe=null;O!==null&&Pd(I,M,O,oe,!1),$!==null&&Be!==null&&Pd(I,Be,$,oe,!0)}}e:{if(M=_?Ma(_):window,O=M.nodeName&&M.nodeName.toLowerCase(),O==="select"||O==="input"&&M.type==="file")var ze=pf;else if(df(M))if(yf)ze=kg;else{ze=Tg;var ne=Eg}else O=M.nodeName,!O||O.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?_&&ku(_.elementType)&&(ze=pf):ze=Cg;if(ze&&(ze=ze(e,_))){mf(I,ze,t,N);break e}ne&&ne(e,M,_),e==="focusout"&&_&&M.type==="number"&&_.memoizedProps.value!=null&&Cu(M,"number",M.value)}switch(ne=_?Ma(_):window,e){case"focusin":(df(ne)||ne.contentEditable==="true")&&(Il=ne,ju=_,qa=null);break;case"focusout":qa=ju=Il=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,Tf(I,t,N);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":Tf(I,t,N)}var ge;if(Uu)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Gl?ff(e,t)&&(Ce="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Ce="onCompositionStart");Ce&&(of&&t.locale!=="ko"&&(Gl||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Gl&&(ge=tf()):(Ht=N,Ru="value"in Ht?Ht.value:Ht.textContent,Gl=!0)),ne=Br(_,Ce),0<ne.length&&(Ce=new rf(Ce,e,null,t,N),I.push({event:Ce,listeners:ne}),ge?Ce.data=ge:(ge=hf(t),ge!==null&&(Ce.data=ge)))),(ge=vg?bg(e,t):Sg(e,t))&&(Ce=Br(_,"onBeforeInput"),0<Ce.length&&(ne=new rf("onBeforeInput","beforeinput",null,t,N),I.push({event:ne,listeners:Ce}),ne.data=ge)),fv(I,e,_,t,N)}Kd(I,n)})}function ci(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Br(e,n){for(var t=n+"Capture",a=[];e!==null;){var o=e,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=Ra(e,t),o!=null&&a.unshift(ci(e,o,s)),o=Ra(e,n),o!=null&&a.push(ci(e,o,s))),e.tag===3)return a;e=e.return}return[]}function pv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pd(e,n,t,a,o){for(var s=n._reactName,d=[];t!==null&&t!==a;){var b=t,T=b.alternate,_=b.stateNode;if(b=b.tag,T!==null&&T===a)break;b!==5&&b!==26&&b!==27||_===null||(T=_,o?(_=Ra(t,s),_!=null&&d.unshift(ci(t,_,T))):o||(_=Ra(t,s),_!=null&&d.push(ci(t,_,T)))),t=t.return}d.length!==0&&e.push({event:n,listeners:d})}var yv=/\r\n?/g,gv=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(yv,`
`).replace(gv,"")}function em(e,n){return n=$d(n),$d(e)===n}function He(e,n,t,a,o,s){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||ql(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&ql(e,""+a);break;case"className":Gi(e,"class",a);break;case"tabIndex":Gi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Gi(e,t,a);break;case"style":$c(e,a,s);break;case"data":if(n!=="object"){Gi(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Vi(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(n!=="input"&&He(e,n,"name",o.name,o,null),He(e,n,"formEncType",o.formEncType,o,null),He(e,n,"formMethod",o.formMethod,o,null),He(e,n,"formTarget",o.formTarget,o,null)):(He(e,n,"encType",o.encType,o,null),He(e,n,"method",o.method,o,null),He(e,n,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Vi(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=yt);break;case"onScroll":a!=null&&we("scroll",e);break;case"onScrollEnd":a!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=Vi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":we("beforetoggle",e),we("toggle",e),Yi(e,"popover",a);break;case"xlinkActuate":pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":pt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":pt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":pt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":pt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Yi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Xy.get(t)||t,Yi(e,t,a))}}function ds(e,n,t,a,o,s){switch(t){case"style":$c(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof a=="string"?ql(e,a):(typeof a=="number"||typeof a=="bigint")&&ql(e,""+a);break;case"onScroll":a!=null&&we("scroll",e);break;case"onScrollEnd":a!=null&&we("scrollend",e);break;case"onClick":a!=null&&(e.onclick=yt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(o=t.endsWith("Capture"),n=t.slice(2,o?t.length-7:void 0),s=e[Sn]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(n,s,o),typeof a=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,o);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):Yi(e,t,a)}}}function dn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var a=!1,o=!1,s;for(s in t)if(t.hasOwnProperty(s)){var d=t[s];if(d!=null)switch(s){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:He(e,n,s,d,t,null)}}o&&He(e,n,"srcSet",t.srcSet,t,null),a&&He(e,n,"src",t.src,t,null);return;case"input":we("invalid",e);var b=s=d=o=null,T=null,_=null;for(a in t)if(t.hasOwnProperty(a)){var N=t[a];if(N!=null)switch(a){case"name":o=N;break;case"type":d=N;break;case"checked":T=N;break;case"defaultChecked":_=N;break;case"value":s=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,n));break;default:He(e,n,a,N,t,null)}}Wc(e,s,b,T,_,d,o,!1);return;case"select":we("invalid",e),a=d=s=null;for(o in t)if(t.hasOwnProperty(o)&&(b=t[o],b!=null))switch(o){case"value":s=b;break;case"defaultValue":d=b;break;case"multiple":a=b;default:He(e,n,o,b,t,null)}n=s,t=d,e.multiple=!!a,n!=null?Bl(e,!!a,n,!1):t!=null&&Bl(e,!!a,t,!0);return;case"textarea":we("invalid",e),s=o=a=null;for(d in t)if(t.hasOwnProperty(d)&&(b=t[d],b!=null))switch(d){case"value":a=b;break;case"defaultValue":o=b;break;case"children":s=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(u(91));break;default:He(e,n,d,b,t,null)}Jc(e,a,o,s);return;case"option":for(T in t)t.hasOwnProperty(T)&&(a=t[T],a!=null)&&(T==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":He(e,n,T,a,t,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(a=0;a<si.length;a++)we(si[a],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in t)if(t.hasOwnProperty(_)&&(a=t[_],a!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:He(e,n,_,a,t,null)}return;default:if(ku(n)){for(N in t)t.hasOwnProperty(N)&&(a=t[N],a!==void 0&&ds(e,n,N,a,t,void 0));return}}for(b in t)t.hasOwnProperty(b)&&(a=t[b],a!=null&&He(e,n,b,a,t,null))}function vv(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,d=null,b=null,T=null,_=null,N=null;for(O in t){var I=t[O];if(t.hasOwnProperty(O)&&I!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":T=I;default:a.hasOwnProperty(O)||He(e,n,O,null,a,I)}}for(var M in a){var O=a[M];if(I=t[M],a.hasOwnProperty(M)&&(O!=null||I!=null))switch(M){case"type":s=O;break;case"name":o=O;break;case"checked":_=O;break;case"defaultChecked":N=O;break;case"value":d=O;break;case"defaultValue":b=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,n));break;default:O!==I&&He(e,n,M,O,a,I)}}Tu(e,d,b,T,_,N,s,o);return;case"select":O=d=b=M=null;for(s in t)if(T=t[s],t.hasOwnProperty(s)&&T!=null)switch(s){case"value":break;case"multiple":O=T;default:a.hasOwnProperty(s)||He(e,n,s,null,a,T)}for(o in a)if(s=a[o],T=t[o],a.hasOwnProperty(o)&&(s!=null||T!=null))switch(o){case"value":M=s;break;case"defaultValue":b=s;break;case"multiple":d=s;default:s!==T&&He(e,n,o,s,a,T)}n=b,t=d,a=O,M!=null?Bl(e,!!t,M,!1):!!a!=!!t&&(n!=null?Bl(e,!!t,n,!0):Bl(e,!!t,t?[]:"",!1));return;case"textarea":O=M=null;for(b in t)if(o=t[b],t.hasOwnProperty(b)&&o!=null&&!a.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:He(e,n,b,null,a,o)}for(d in a)if(o=a[d],s=t[d],a.hasOwnProperty(d)&&(o!=null||s!=null))switch(d){case"value":M=o;break;case"defaultValue":O=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==s&&He(e,n,d,o,a,s)}Kc(e,M,O);return;case"option":for(var $ in t)M=t[$],t.hasOwnProperty($)&&M!=null&&!a.hasOwnProperty($)&&($==="selected"?e.selected=!1:He(e,n,$,null,a,M));for(T in a)M=a[T],O=t[T],a.hasOwnProperty(T)&&M!==O&&(M!=null||O!=null)&&(T==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":He(e,n,T,M,a,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in t)M=t[oe],t.hasOwnProperty(oe)&&M!=null&&!a.hasOwnProperty(oe)&&He(e,n,oe,null,a,M);for(_ in a)if(M=a[_],O=t[_],a.hasOwnProperty(_)&&M!==O&&(M!=null||O!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,n));break;default:He(e,n,_,M,a,O)}return;default:if(ku(n)){for(var Be in t)M=t[Be],t.hasOwnProperty(Be)&&M!==void 0&&!a.hasOwnProperty(Be)&&ds(e,n,Be,void 0,a,M);for(N in a)M=a[N],O=t[N],!a.hasOwnProperty(N)||M===O||M===void 0&&O===void 0||ds(e,n,N,M,a,O);return}}for(var A in t)M=t[A],t.hasOwnProperty(A)&&M!=null&&!a.hasOwnProperty(A)&&He(e,n,A,null,a,M);for(I in a)M=a[I],O=t[I],!a.hasOwnProperty(I)||M===O||M==null&&O==null||He(e,n,I,M,a,O)}function nm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var o=t[a],s=o.transferSize,d=o.initiatorType,b=o.duration;if(s&&b&&nm(d)){for(d=0,b=o.responseEnd,a+=1;a<t.length;a++){var T=t[a],_=T.startTime;if(_>b)break;var N=T.transferSize,I=T.initiatorType;N&&nm(I)&&(T=T.responseEnd,d+=N*(T<b?1:(b-_)/(T-_)))}if(--a,n+=8*(s+d)/(o.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ms=null,ps=null;function qr(e){return e.nodeType===9?e:e.ownerDocument}function tm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ys(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gs=null;function Sv(){var e=window.event;return e&&e.type==="popstate"?e===gs?!1:(gs=e,!0):(gs=null,!1)}var am=typeof setTimeout=="function"?setTimeout:void 0,xv=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,wv=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(e){return im.resolve(null).then(e).catch(Ev)}:am;function Ev(e){setTimeout(function(){throw e})}function el(e){return e==="head"}function rm(e,n){var t=n,a=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(o),ya(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")fi(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,fi(t);for(var s=t.firstChild;s;){var d=s.nextSibling,b=s.nodeName;s[_a]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=d}}else t==="body"&&fi(e.ownerDocument.body);t=o}while(t);ya(n)}function um(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function vs(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":vs(t),wu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Tv(e,n,t,a){for(;e.nodeType===1;){var o=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_a])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Jn(e.nextSibling),e===null)break}return null}function Cv(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Jn(e.nextSibling),e===null))return null;return e}function om(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Jn(e.nextSibling),e===null))return null;return e}function bs(e){return e.data==="$?"||e.data==="$~"}function Ss(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kv(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var xs=null;function sm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Jn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function cm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function fm(e,n,t){switch(n=qr(t),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function fi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);wu(e)}var Pn=new Map,hm=new Set;function jr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Dt=Q.d;Q.d={f:Av,r:zv,D:_v,C:Mv,L:Rv,m:Dv,X:Lv,S:Ov,M:Nv};function Av(){var e=Dt.f(),n=Rr();return e||n}function zv(e){var n=Nl(e);n!==null&&n.tag===5&&n.type==="form"?_h(n):Dt.r(e)}var da=typeof document>"u"?null:document;function dm(e,n,t){var a=da;if(a&&typeof n=="string"&&n){var o=Vn(n);o='link[rel="'+e+'"][href="'+o+'"]',typeof t=="string"&&(o+='[crossorigin="'+t+'"]'),hm.has(o)||(hm.add(o),e={rel:e,crossOrigin:t,href:n},a.querySelector(o)===null&&(n=a.createElement("link"),dn(n,"link",e),rn(n),a.head.appendChild(n)))}}function _v(e){Dt.D(e),dm("dns-prefetch",e,null)}function Mv(e,n){Dt.C(e,n),dm("preconnect",e,n)}function Rv(e,n,t){Dt.L(e,n,t);var a=da;if(a&&e&&n){var o='link[rel="preload"][as="'+Vn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(o+='[imagesrcset="'+Vn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(o+='[imagesizes="'+Vn(t.imageSizes)+'"]')):o+='[href="'+Vn(e)+'"]';var s=o;switch(n){case"style":s=ma(e);break;case"script":s=pa(e)}Pn.has(s)||(e=v({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Pn.set(s,e),a.querySelector(o)!==null||n==="style"&&a.querySelector(hi(s))||n==="script"&&a.querySelector(di(s))||(n=a.createElement("link"),dn(n,"link",e),rn(n),a.head.appendChild(n)))}}function Dv(e,n){Dt.m(e,n);var t=da;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",o='link[rel="modulepreload"][as="'+Vn(a)+'"][href="'+Vn(e)+'"]',s=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=pa(e)}if(!Pn.has(s)&&(e=v({rel:"modulepreload",href:e},n),Pn.set(s,e),t.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(di(s)))return}a=t.createElement("link"),dn(a,"link",e),rn(a),t.head.appendChild(a)}}}function Ov(e,n,t){Dt.S(e,n,t);var a=da;if(a&&e){var o=Ul(a).hoistableStyles,s=ma(e);n=n||"default";var d=o.get(s);if(!d){var b={loading:0,preload:null};if(d=a.querySelector(hi(s)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Pn.get(s))&&ws(e,t);var T=d=a.createElement("link");rn(T),dn(T,"link",e),T._p=new Promise(function(_,N){T.onload=_,T.onerror=N}),T.addEventListener("load",function(){b.loading|=1}),T.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yr(d,n,a)}d={type:"stylesheet",instance:d,count:1,state:b},o.set(s,d)}}}function Lv(e,n){Dt.X(e,n);var t=da;if(t&&e){var a=Ul(t).hoistableScripts,o=pa(e),s=a.get(o);s||(s=t.querySelector(di(o)),s||(e=v({src:e,async:!0},n),(n=Pn.get(o))&&Es(e,n),s=t.createElement("script"),rn(s),dn(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function Nv(e,n){Dt.M(e,n);var t=da;if(t&&e){var a=Ul(t).hoistableScripts,o=pa(e),s=a.get(o);s||(s=t.querySelector(di(o)),s||(e=v({src:e,async:!0,type:"module"},n),(n=Pn.get(o))&&Es(e,n),s=t.createElement("script"),rn(s),dn(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function mm(e,n,t,a){var o=(o=ae.current)?jr(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=ma(t.href),t=Ul(o).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=ma(t.href);var s=Ul(o).hoistableStyles,d=s.get(e);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=o.querySelector(hi(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Pn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Pn.set(e,t),s||Uv(o,e,t,d.state))),n&&a===null)throw Error(u(528,""));return d}if(n&&a!==null)throw Error(u(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=pa(t),t=Ul(o).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ma(e){return'href="'+Vn(e)+'"'}function hi(e){return'link[rel="stylesheet"]['+e+"]"}function pm(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Uv(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),dn(n,"link",t),rn(n),e.head.appendChild(n))}function pa(e){return'[src="'+Vn(e)+'"]'}function di(e){return"script[async]"+e}function ym(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Vn(t.href)+'"]');if(a)return n.instance=a,rn(a),a;var o=v({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),rn(a),dn(a,"style",o),Yr(a,t.precedence,e),n.instance=a;case"stylesheet":o=ma(t.href);var s=e.querySelector(hi(o));if(s)return n.state.loading|=4,n.instance=s,rn(s),s;a=pm(t),(o=Pn.get(o))&&ws(a,o),s=(e.ownerDocument||e).createElement("link"),rn(s);var d=s;return d._p=new Promise(function(b,T){d.onload=b,d.onerror=T}),dn(s,"link",a),n.state.loading|=4,Yr(s,t.precedence,e),n.instance=s;case"script":return s=pa(t.src),(o=e.querySelector(di(s)))?(n.instance=o,rn(o),o):(a=t,(o=Pn.get(s))&&(a=v({},t),Es(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),rn(o),dn(o,"link",a),e.head.appendChild(o),n.instance=o);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Yr(a,t.precedence,e));return n.instance}function Yr(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,s=o,d=0;d<a.length;d++){var b=a[d];if(b.dataset.precedence===n)s=b;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function ws(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Es(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Gr=null;function gm(e,n,t){if(Gr===null){var a=new Map,o=Gr=new Map;o.set(t,a)}else o=Gr,a=o.get(t),a||(a=new Map,o.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),o=0;o<t.length;o++){var s=t[o];if(!(s[_a]||s[sn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(n)||"";d=e+d;var b=a.get(d);b?b.push(s):a.set(d,[s])}}return a}function vm(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Hv(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bv(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=ma(a.href),s=n.querySelector(hi(o));if(s){n=s._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ir.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=s,rn(s);return}s=n.ownerDocument||n,a=pm(a),(o=Pn.get(o))&&ws(a,o),s=s.createElement("link"),rn(s);var d=s;d._p=new Promise(function(b,T){d.onload=b,d.onerror=T}),dn(s,"link",a),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Ir.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Ts=0;function qv(e,n){return e.stylesheets&&e.count===0&&Xr(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Xr(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+n);0<e.imgBytes&&Ts===0&&(Ts=62500*bv());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xr(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Ts?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function Ir(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vr=null;function Xr(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vr=new Map,n.forEach(jv,e),Vr=null,Ir.call(e))}function jv(e,n){if(!(n.state.loading&4)){var t=Vr.get(e);if(t)var a=t.get(null);else{t=new Map,Vr.set(e,t);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var d=o[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(t.set(d.dataset.precedence,d),a=d)}a&&t.set(null,a)}o=n.instance,d=o.getAttribute("data-precedence"),s=t.get(d)||a,s===a&&t.set(null,o),t.set(d,o),this.count++,a=Ir.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),n.state.loading|=4}}var mi={$$typeof:V,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Yv(e,n,t,a,o,s,d,b,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.hiddenUpdates=vu(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Sm(e,n,t,a,o,s,d,b,T,_,N,I){return e=new Yv(e,n,t,d,T,_,N,I,b),n=1,s===!0&&(n|=24),s=Dn(3,null,null,n),e.current=s,s.stateNode=e,n=to(),n.refCount++,e.pooledCache=n,n.refCount++,s.memoizedState={element:a,isDehydrated:t,cache:n},ro(s),e}function xm(e){return e?(e=Ql,e):Ql}function wm(e,n,t,a,o,s){o=xm(o),a.context===null?a.context=o:a.pendingContext=o,a=It(n),a.payload={element:t},s=s===void 0?null:s,s!==null&&(a.callback=s),t=Vt(e,a,n),t!==null&&(kn(t,e,n),Qa(t,e,n))}function Em(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Cs(e,n){Em(e,n),(e=e.alternate)&&Em(e,n)}function Tm(e){if(e.tag===13||e.tag===31){var n=ml(e,67108864);n!==null&&kn(n,e,67108864),Cs(e,67108864)}}function Cm(e){if(e.tag===13||e.tag===31){var n=Hn();n=bu(n);var t=ml(e,n);t!==null&&kn(t,e,n),Cs(e,n)}}var Qr=!0;function Gv(e,n,t,a){var o=R.T;R.T=null;var s=Q.p;try{Q.p=2,ks(e,n,t,a)}finally{Q.p=s,R.T=o}}function Iv(e,n,t,a){var o=R.T;R.T=null;var s=Q.p;try{Q.p=8,ks(e,n,t,a)}finally{Q.p=s,R.T=o}}function ks(e,n,t,a){if(Qr){var o=As(a);if(o===null)hs(e,n,a,Zr,t),Am(e,a);else if(Xv(o,e,n,t,a))a.stopPropagation();else if(Am(e,a),n&4&&-1<Vv.indexOf(e)){for(;o!==null;){var s=Nl(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=sl(s.pendingLanes);if(d!==0){var b=s;for(b.pendingLanes|=2,b.entangledLanes|=2;d;){var T=1<<31-qe(d);b.entanglements[1]|=T,d&=~T}ot(s),(Me&6)===0&&(_r=yn()+500,oi(0))}}break;case 31:case 13:b=ml(s,2),b!==null&&kn(b,s,2),Rr(),Cs(s,2)}if(s=As(a),s===null&&hs(e,n,a,Zr,t),s===o)break;o=s}o!==null&&a.stopPropagation()}else hs(e,n,a,null,t)}}function As(e){return e=zu(e),zs(e)}var Zr=null;function zs(e){if(Zr=null,e=Ll(e),e!==null){var n=f(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=h(n),e!==null)return e;e=null}else if(t===31){if(e=p(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Zr=e,null}function km(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gu()){case j:return 2;case W:return 8;case he:case Se:return 32;case De:return 268435456;default:return 32}default:return 32}}var _s=!1,nl=null,tl=null,ll=null,pi=new Map,yi=new Map,al=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Am(e,n){switch(e){case"focusin":case"focusout":nl=null;break;case"dragenter":case"dragleave":tl=null;break;case"mouseover":case"mouseout":ll=null;break;case"pointerover":case"pointerout":pi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(n.pointerId)}}function gi(e,n,t,a,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:s,targetContainers:[o]},n!==null&&(n=Nl(n),n!==null&&Tm(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Xv(e,n,t,a,o){switch(n){case"focusin":return nl=gi(nl,e,n,t,a,o),!0;case"dragenter":return tl=gi(tl,e,n,t,a,o),!0;case"mouseover":return ll=gi(ll,e,n,t,a,o),!0;case"pointerover":var s=o.pointerId;return pi.set(s,gi(pi.get(s)||null,e,n,t,a,o)),!0;case"gotpointercapture":return s=o.pointerId,yi.set(s,gi(yi.get(s)||null,e,n,t,a,o)),!0}return!1}function zm(e){var n=Ll(e.target);if(n!==null){var t=f(n);if(t!==null){if(n=t.tag,n===13){if(n=h(t),n!==null){e.blockedOn=n,Yc(e.priority,function(){Cm(t)});return}}else if(n===31){if(n=p(t),n!==null){e.blockedOn=n,Yc(e.priority,function(){Cm(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=As(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Au=a,t.target.dispatchEvent(a),Au=null}else return n=Nl(t),n!==null&&Tm(n),e.blockedOn=t,!1;n.shift()}return!0}function _m(e,n,t){Fr(e)&&t.delete(n)}function Qv(){_s=!1,nl!==null&&Fr(nl)&&(nl=null),tl!==null&&Fr(tl)&&(tl=null),ll!==null&&Fr(ll)&&(ll=null),pi.forEach(_m),yi.forEach(_m)}function Wr(e,n){e.blockedOn===n&&(e.blockedOn=null,_s||(_s=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Qv)))}var Kr=null;function Mm(e){Kr!==e&&(Kr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Kr===e&&(Kr=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],o=e[n+2];if(typeof a!="function"){if(zs(a||t)===null)continue;break}var s=Nl(t);s!==null&&(e.splice(n,3),n-=3,Ao(s,{pending:!0,data:o,method:t.method,action:a},a,o))}}))}function ya(e){function n(T){return Wr(T,e)}nl!==null&&Wr(nl,e),tl!==null&&Wr(tl,e),ll!==null&&Wr(ll,e),pi.forEach(n),yi.forEach(n);for(var t=0;t<al.length;t++){var a=al[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<al.length&&(t=al[0],t.blockedOn===null);)zm(t),t.blockedOn===null&&al.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var o=t[a],s=t[a+1],d=o[Sn]||null;if(typeof s=="function")d||Mm(t);else if(d){var b=null;if(s&&s.hasAttribute("formAction")){if(o=s,d=s[Sn]||null)b=d.formAction;else if(zs(o)!==null)continue}else b=d.action;typeof b=="function"?t[a+1]=b:(t.splice(a,3),a-=3),Mm(t)}}}function Rm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return o=d})},focusReset:"manual",scroll:"manual"})}function n(){o!==null&&(o(),o=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),o!==null&&(o(),o=null)}}}function Ms(e){this._internalRoot=e}Jr.prototype.render=Ms.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var t=n.current,a=Hn();wm(t,a,e,n,null,null)},Jr.prototype.unmount=Ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;wm(e.current,2,null,e,null,null),Rr(),n[Ol]=null}};function Jr(e){this._internalRoot=e}Jr.prototype.unstable_scheduleHydration=function(e){if(e){var n=jc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<al.length&&n!==0&&n<al[t].priority;t++);al.splice(t,0,e),t===0&&zm(e)}};var Dm=i.version;if(Dm!=="19.2.3")throw Error(u(527,Dm,"19.2.3"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Zv={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{gn=Pr.inject(Zv),ln=Pr}catch{}}return bi.createRoot=function(e,n){if(!c(e))throw Error(u(299));var t=!1,a="",o=qh,s=jh,d=Yh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Sm(e,1,!1,null,null,t,a,null,o,s,d,Rm),e[Ol]=n.current,fs(e),new Ms(n)},bi.hydrateRoot=function(e,n,t){if(!c(e))throw Error(u(299));var a=!1,o="",s=qh,d=jh,b=Yh,T=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError),t.formState!==void 0&&(T=t.formState)),n=Sm(e,1,!0,n,t??null,a,o,T,s,d,b,Rm),n.context=xm(null),t=n.current,a=Hn(),a=bu(a),o=It(a),o.callback=null,Vt(t,o,a),t=a,n.current.lanes=t,za(n,t),ot(n),e[Ol]=n.current,fs(e),new Jr(n)},bi.version="19.2.3",bi}var Gm;function ab(){if(Gm)return Os.exports;Gm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Os.exports=lb(),Os.exports}var ib=ab();const rb=su(ib);var Im="popstate";function ub(l={}){function i(c,f){let{pathname:h="/",search:p="",hash:y=""}=Al(c.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),ec("",{pathname:h,search:p,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function r(c,f){let h=c.document.querySelector("base"),p="";if(h&&h.getAttribute("href")){let y=c.location.href,m=y.indexOf("#");p=m===-1?y:y.slice(0,m)}return p+"#"+(typeof f=="string"?f:zi(f))}function u(c,f){jn(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return sb(i,r,u,l)}function Ze(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function jn(l,i){if(!l){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ob(){return Math.random().toString(36).substring(2,10)}function Vm(l,i){return{usr:l.state,key:l.key,idx:i}}function ec(l,i,r=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof i=="string"?Al(i):i,state:r,key:i&&i.key||u||ob()}}function zi({pathname:l="/",search:i="",hash:r=""}){return i&&i!=="?"&&(l+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(l+=r.charAt(0)==="#"?r:"#"+r),l}function Al(l){let i={};if(l){let r=l.indexOf("#");r>=0&&(i.hash=l.substring(r),l=l.substring(0,r));let u=l.indexOf("?");u>=0&&(i.search=l.substring(u),l=l.substring(0,u)),l&&(i.pathname=l)}return i}function sb(l,i,r,u={}){let{window:c=document.defaultView,v5Compat:f=!1}=u,h=c.history,p="POP",y=null,m=g();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function g(){return(h.state||{idx:null}).idx}function v(){p="POP";let H=g(),D=H==null?null:H-m;m=H,y&&y({action:p,location:L.location,delta:D})}function w(H,D){p="PUSH";let X=ec(L.location,H,D);r&&r(X,H),m=g()+1;let V=Vm(X,m),re=L.createHref(X);try{h.pushState(V,"",re)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;c.location.assign(re)}f&&y&&y({action:p,location:L.location,delta:1})}function S(H,D){p="REPLACE";let X=ec(L.location,H,D);r&&r(X,H),m=g();let V=Vm(X,m),re=L.createHref(X);h.replaceState(V,"",re),f&&y&&y({action:p,location:L.location,delta:0})}function U(H){return cb(H)}let L={get action(){return p},get location(){return l(c,h)},listen(H){if(y)throw new Error("A history only accepts one active listener");return c.addEventListener(Im,v),y=H,()=>{c.removeEventListener(Im,v),y=null}},createHref(H){return i(c,H)},createURL:U,encodeLocation(H){let D=U(H);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:w,replace:S,go(H){return h.go(H)}};return L}function cb(l,i=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ze(r,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:zi(l);return u=u.replace(/ $/,"%20"),!i&&u.startsWith("//")&&(u=r+u),new URL(u,r)}function Op(l,i,r="/"){return fb(l,i,r,!1)}function fb(l,i,r,u){let c=typeof i=="string"?Al(i):i,f=Lt(c.pathname||"/",r);if(f==null)return null;let h=Lp(l);hb(h);let p=null;for(let y=0;p==null&&y<h.length;++y){let m=Eb(f);p=xb(h[y],m,u)}return p}function Lp(l,i=[],r=[],u="",c=!1){let f=(h,p,y=c,m)=>{let g={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(u)&&y)return;Ze(g.relativePath.startsWith(u),`Absolute route path "${g.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(u.length)}let v=Ot([u,g.relativePath]),w=r.concat(g);h.children&&h.children.length>0&&(Ze(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Lp(h.children,i,w,v,y)),!(h.path==null&&!h.index)&&i.push({path:v,score:bb(v,h.index),routesMeta:w})};return l.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))f(h,p);else for(let y of Np(h.path))f(h,p,!0,y)}),i}function Np(l){let i=l.split("/");if(i.length===0)return[];let[r,...u]=i,c=r.endsWith("?"),f=r.replace(/\?$/,"");if(u.length===0)return c?[f,""]:[f];let h=Np(u.join("/")),p=[];return p.push(...h.map(y=>y===""?f:[f,y].join("/"))),c&&p.push(...h),p.map(y=>l.startsWith("/")&&y===""?"/":y)}function hb(l){l.sort((i,r)=>i.score!==r.score?r.score-i.score:Sb(i.routesMeta.map(u=>u.childrenIndex),r.routesMeta.map(u=>u.childrenIndex)))}var db=/^:[\w-]+$/,mb=3,pb=2,yb=1,gb=10,vb=-2,Xm=l=>l==="*";function bb(l,i){let r=l.split("/"),u=r.length;return r.some(Xm)&&(u+=vb),i&&(u+=pb),r.filter(c=>!Xm(c)).reduce((c,f)=>c+(db.test(f)?mb:f===""?yb:gb),u)}function Sb(l,i){return l.length===i.length&&l.slice(0,-1).every((u,c)=>u===i[c])?l[l.length-1]-i[i.length-1]:0}function xb(l,i,r=!1){let{routesMeta:u}=l,c={},f="/",h=[];for(let p=0;p<u.length;++p){let y=u[p],m=p===u.length-1,g=f==="/"?i:i.slice(f.length)||"/",v=ru({path:y.relativePath,caseSensitive:y.caseSensitive,end:m},g),w=y.route;if(!v&&m&&r&&!u[u.length-1].route.index&&(v=ru({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},g)),!v)return null;Object.assign(c,v.params),h.push({params:c,pathname:Ot([f,v.pathname]),pathnameBase:Ab(Ot([f,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(f=Ot([f,v.pathnameBase]))}return h}function ru(l,i){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[r,u]=wb(l.path,l.caseSensitive,l.end),c=i.match(r);if(!c)return null;let f=c[0],h=f.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:u.reduce((m,{paramName:g,isOptional:v},w)=>{if(g==="*"){let U=p[w]||"";h=f.slice(0,f.length-U.length).replace(/(.)\/+$/,"$1")}const S=p[w];return v&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:h,pattern:l}}function wb(l,i=!1,r=!0){jn(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],c="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,y)=>(u.push({paramName:p,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(u.push({paramName:"*"}),c+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?c+="\\/*$":l!==""&&l!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),u]}function Eb(l){try{return l.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return jn(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),l}}function Lt(l,i){if(i==="/")return l;if(!l.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,u=l.charAt(r);return u&&u!=="/"?null:l.slice(r)||"/"}var Up=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tb=l=>Up.test(l);function Cb(l,i="/"){let{pathname:r,search:u="",hash:c=""}=typeof l=="string"?Al(l):l,f;if(r)if(Tb(r))f=r;else{if(r.includes("//")){let h=r;r=r.replace(/\/\/+/g,"/"),jn(!1,`Pathnames cannot have embedded double slashes - normalizing ${h} -> ${r}`)}r.startsWith("/")?f=Qm(r.substring(1),"/"):f=Qm(r,i)}else f=i;return{pathname:f,search:zb(u),hash:_b(c)}}function Qm(l,i){let r=i.replace(/\/+$/,"").split("/");return l.split("/").forEach(c=>{c===".."?r.length>1&&r.pop():c!=="."&&r.push(c)}),r.length>1?r.join("/"):"/"}function Hs(l,i,r,u){return`Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kb(l){return l.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function mc(l){let i=kb(l);return i.map((r,u)=>u===i.length-1?r.pathname:r.pathnameBase)}function pc(l,i,r,u=!1){let c;typeof l=="string"?c=Al(l):(c={...l},Ze(!c.pathname||!c.pathname.includes("?"),Hs("?","pathname","search",c)),Ze(!c.pathname||!c.pathname.includes("#"),Hs("#","pathname","hash",c)),Ze(!c.search||!c.search.includes("#"),Hs("#","search","hash",c)));let f=l===""||c.pathname==="",h=f?"/":c.pathname,p;if(h==null)p=r;else{let v=i.length-1;if(!u&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),v-=1;c.pathname=w.join("/")}p=v>=0?i[v]:"/"}let y=Cb(c,p),m=h&&h!=="/"&&h.endsWith("/"),g=(f||h===".")&&r.endsWith("/");return!y.pathname.endsWith("/")&&(m||g)&&(y.pathname+="/"),y}var Ot=l=>l.join("/").replace(/\/\/+/g,"/"),Ab=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),zb=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,_b=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Mb=class{constructor(l,i,r,u=!1){this.status=l,this.statusText=i||"",this.internal=u,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Rb(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Db(l){return l.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Hp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bp(l,i){let r=l;if(typeof r!="string"||!Up.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let u=r,c=!1;if(Hp)try{let f=new URL(window.location.href),h=r.startsWith("//")?new URL(f.protocol+r):new URL(r),p=Lt(h.pathname,i);h.origin===f.origin&&p!=null?r=p+h.search+h.hash:c=!0}catch{jn(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:c,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var qp=["POST","PUT","PATCH","DELETE"];new Set(qp);var Ob=["GET",...qp];new Set(Ob);var xa=Y.createContext(null);xa.displayName="DataRouter";var cu=Y.createContext(null);cu.displayName="DataRouterState";var Lb=Y.createContext(!1),jp=Y.createContext({isTransitioning:!1});jp.displayName="ViewTransition";var Nb=Y.createContext(new Map);Nb.displayName="Fetchers";var Ub=Y.createContext(null);Ub.displayName="Await";var Yn=Y.createContext(null);Yn.displayName="Navigation";var Mi=Y.createContext(null);Mi.displayName="Location";var at=Y.createContext({outlet:null,matches:[],isDataRoute:!1});at.displayName="Route";var yc=Y.createContext(null);yc.displayName="RouteError";var Yp="REACT_ROUTER_ERROR",Hb="REDIRECT",Bb="ROUTE_ERROR_RESPONSE";function qb(l){if(l.startsWith(`${Yp}:${Hb}:{`))try{let i=JSON.parse(l.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function jb(l){if(l.startsWith(`${Yp}:${Bb}:{`))try{let i=JSON.parse(l.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new Mb(i.status,i.statusText,i.data)}catch{}}function Yb(l,{relative:i}={}){Ze(wa(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:u}=Y.useContext(Yn),{hash:c,pathname:f,search:h}=Ri(l,{relative:i}),p=f;return r!=="/"&&(p=f==="/"?r:Ot([r,f])),u.createHref({pathname:p,search:h,hash:c})}function wa(){return Y.useContext(Mi)!=null}function ul(){return Ze(wa(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(Mi).location}var Gp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ip(l){Y.useContext(Yn).static||Y.useLayoutEffect(l)}function Vp(){let{isDataRoute:l}=Y.useContext(at);return l?n1():Gb()}function Gb(){Ze(wa(),"useNavigate() may be used only in the context of a <Router> component.");let l=Y.useContext(xa),{basename:i,navigator:r}=Y.useContext(Yn),{matches:u}=Y.useContext(at),{pathname:c}=ul(),f=JSON.stringify(mc(u)),h=Y.useRef(!1);return Ip(()=>{h.current=!0}),Y.useCallback((y,m={})=>{if(jn(h.current,Gp),!h.current)return;if(typeof y=="number"){r.go(y);return}let g=pc(y,JSON.parse(f),c,m.relative==="path");l==null&&i!=="/"&&(g.pathname=g.pathname==="/"?i:Ot([i,g.pathname])),(m.replace?r.replace:r.push)(g,m.state,m)},[i,r,f,c,l])}Y.createContext(null);function Ib(){let{matches:l}=Y.useContext(at),i=l[l.length-1];return i?i.params:{}}function Ri(l,{relative:i}={}){let{matches:r}=Y.useContext(at),{pathname:u}=ul(),c=JSON.stringify(mc(r));return Y.useMemo(()=>pc(l,JSON.parse(c),u,i==="path"),[l,c,u,i])}function Vb(l,i){return Xp(l,i)}function Xp(l,i,r,u,c){Ze(wa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=Y.useContext(Yn),{matches:h}=Y.useContext(at),p=h[h.length-1],y=p?p.params:{},m=p?p.pathname:"/",g=p?p.pathnameBase:"/",v=p&&p.route;{let X=v&&v.path||"";Zp(m,!v||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let w=ul(),S;if(i){let X=typeof i=="string"?Al(i):i;Ze(g==="/"||X.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${X.pathname}" was given in the \`location\` prop.`),S=X}else S=w;let U=S.pathname||"/",L=U;if(g!=="/"){let X=g.replace(/^\//,"").split("/");L="/"+U.replace(/^\//,"").split("/").slice(X.length).join("/")}let H=Op(l,{pathname:L});jn(v||H!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),jn(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=Wb(H&&H.map(X=>Object.assign({},X,{params:Object.assign({},y,X.params),pathname:Ot([g,f.encodeLocation?f.encodeLocation(X.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?g:Ot([g,f.encodeLocation?f.encodeLocation(X.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathnameBase])})),h,r,u,c);return i&&D?Y.createElement(Mi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},D):D}function Xb(){let l=e1(),i=Rb(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),r=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:f},"ErrorBoundary")," or"," ",Y.createElement("code",{style:f},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},i),r?Y.createElement("pre",{style:c},r):null,h)}var Qb=Y.createElement(Xb,null),Qp=class extends Y.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,i){return i.location!==l.location||i.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:i.error,location:i.location,revalidation:l.revalidation||i.revalidation}}componentDidCatch(l,i){this.props.onError?this.props.onError(l,i):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const r=jb(l.digest);r&&(l=r)}let i=l!==void 0?Y.createElement(at.Provider,{value:this.props.routeContext},Y.createElement(yc.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?Y.createElement(Zb,{error:l},i):i}};Qp.contextType=Lb;var Bs=new WeakMap;function Zb({children:l,error:i}){let{basename:r}=Y.useContext(Yn);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let u=qb(i.digest);if(u){let c=Bs.get(i);if(c)throw c;let f=Bp(u.location,r);if(Hp&&!Bs.get(i))if(f.isExternal||u.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:u.replace}));throw Bs.set(i,h),h}return Y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return l}function Fb({routeContext:l,match:i,children:r}){let u=Y.useContext(xa);return u&&u.static&&u.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=i.route.id),Y.createElement(at.Provider,{value:l},r)}function Wb(l,i=[],r=null,u=null,c=null){if(l==null){if(!r)return null;if(r.errors)l=r.matches;else if(i.length===0&&!r.initialized&&r.matches.length>0)l=r.matches;else return null}let f=l,h=r?.errors;if(h!=null){let g=f.findIndex(v=>v.route.id&&h?.[v.route.id]!==void 0);Ze(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,g+1))}let p=!1,y=-1;if(r)for(let g=0;g<f.length;g++){let v=f[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(y=g),v.route.id){let{loaderData:w,errors:S}=r,U=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||U){p=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}let m=r&&u?(g,v)=>{u(g,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Db(r.matches),errorInfo:v})}:void 0;return f.reduceRight((g,v,w)=>{let S,U=!1,L=null,H=null;r&&(S=h&&v.route.id?h[v.route.id]:void 0,L=v.route.errorElement||Qb,p&&(y<0&&w===0?(Zp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,H=null):y===w&&(U=!0,H=v.route.hydrateFallbackElement||null)));let D=i.concat(f.slice(0,w+1)),X=()=>{let V;return S?V=L:U?V=H:v.route.Component?V=Y.createElement(v.route.Component,null):v.route.element?V=v.route.element:V=g,Y.createElement(Fb,{match:v,routeContext:{outlet:g,matches:D,isDataRoute:r!=null},children:V})};return r&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?Y.createElement(Qp,{location:r.location,revalidation:r.revalidation,component:L,error:S,children:X(),routeContext:{outlet:null,matches:D,isDataRoute:!0},onError:m}):X()},null)}function gc(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kb(l){let i=Y.useContext(xa);return Ze(i,gc(l)),i}function Jb(l){let i=Y.useContext(cu);return Ze(i,gc(l)),i}function Pb(l){let i=Y.useContext(at);return Ze(i,gc(l)),i}function vc(l){let i=Pb(l),r=i.matches[i.matches.length-1];return Ze(r.route.id,`${l} can only be used on routes that contain a unique "id"`),r.route.id}function $b(){return vc("useRouteId")}function e1(){let l=Y.useContext(yc),i=Jb("useRouteError"),r=vc("useRouteError");return l!==void 0?l:i.errors?.[r]}function n1(){let{router:l}=Kb("useNavigate"),i=vc("useNavigate"),r=Y.useRef(!1);return Ip(()=>{r.current=!0}),Y.useCallback(async(c,f={})=>{jn(r.current,Gp),r.current&&(typeof c=="number"?await l.navigate(c):await l.navigate(c,{fromRouteId:i,...f}))},[l,i])}var Zm={};function Zp(l,i,r){!i&&!Zm[l]&&(Zm[l]=!0,jn(!1,r))}Y.memo(t1);function t1({routes:l,future:i,state:r,onError:u}){return Xp(l,void 0,r,u,i)}function l1({to:l,replace:i,state:r,relative:u}){Ze(wa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=Y.useContext(Yn);jn(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=Y.useContext(at),{pathname:h}=ul(),p=Vp(),y=pc(l,mc(f),h,u==="path"),m=JSON.stringify(y);return Y.useEffect(()=>{p(JSON.parse(m),{replace:i,state:r,relative:u})},[p,m,u,i,r]),null}function nc(l){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function a1({basename:l="/",children:i=null,location:r,navigationType:u="POP",navigator:c,static:f=!1,unstable_useTransitions:h}){Ze(!wa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=l.replace(/^\/*/,"/"),y=Y.useMemo(()=>({basename:p,navigator:c,static:f,unstable_useTransitions:h,future:{}}),[p,c,f,h]);typeof r=="string"&&(r=Al(r));let{pathname:m="/",search:g="",hash:v="",state:w=null,key:S="default"}=r,U=Y.useMemo(()=>{let L=Lt(m,p);return L==null?null:{location:{pathname:L,search:g,hash:v,state:w,key:S},navigationType:u}},[p,m,g,v,w,S,u]);return jn(U!=null,`<Router basename="${p}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:Y.createElement(Yn.Provider,{value:y},Y.createElement(Mi.Provider,{children:i,value:U}))}function i1({children:l,location:i}){return Vb(tc(l),i)}function tc(l,i=[]){let r=[];return Y.Children.forEach(l,(u,c)=>{if(!Y.isValidElement(u))return;let f=[...i,c];if(u.type===Y.Fragment){r.push.apply(r,tc(u.props.children,f));return}Ze(u.type===nc,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=tc(u.props.children,f)),r.push(h)}),r}var lu="get",au="application/x-www-form-urlencoded";function fu(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function r1(l){return fu(l)&&l.tagName.toLowerCase()==="button"}function u1(l){return fu(l)&&l.tagName.toLowerCase()==="form"}function o1(l){return fu(l)&&l.tagName.toLowerCase()==="input"}function s1(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function c1(l,i){return l.button===0&&(!i||i==="_self")&&!s1(l)}var $r=null;function f1(){if($r===null)try{new FormData(document.createElement("form"),0),$r=!1}catch{$r=!0}return $r}var h1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qs(l){return l!=null&&!h1.has(l)?(jn(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${au}"`),null):l}function d1(l,i){let r,u,c,f,h;if(u1(l)){let p=l.getAttribute("action");u=p?Lt(p,i):null,r=l.getAttribute("method")||lu,c=qs(l.getAttribute("enctype"))||au,f=new FormData(l)}else if(r1(l)||o1(l)&&(l.type==="submit"||l.type==="image")){let p=l.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||p.getAttribute("action");if(u=y?Lt(y,i):null,r=l.getAttribute("formmethod")||p.getAttribute("method")||lu,c=qs(l.getAttribute("formenctype"))||qs(p.getAttribute("enctype"))||au,f=new FormData(p,l),!f1()){let{name:m,type:g,value:v}=l;if(g==="image"){let w=m?`${m}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else m&&f.append(m,v)}}else{if(fu(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=lu,u=null,c=au,h=l}return f&&c==="text/plain"&&(h=f,f=void 0),{action:u,method:r.toLowerCase(),encType:c,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bc(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function m1(l,i,r,u){let c=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return r?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${u}`:c.pathname=`${c.pathname}.${u}`:c.pathname==="/"?c.pathname=`_root.${u}`:i&&Lt(c.pathname,i)==="/"?c.pathname=`${i.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function p1(l,i){if(l.id in i)return i[l.id];try{let r=await import(l.module);return i[l.id]=r,r}catch(r){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function y1(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function g1(l,i,r){let u=await Promise.all(l.map(async c=>{let f=i.routes[c.route.id];if(f){let h=await p1(f,r);return h.links?h.links():[]}return[]}));return x1(u.flat(1).filter(y1).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Fm(l,i,r,u,c,f){let h=(y,m)=>r[m]?y.route.id!==r[m].route.id:!0,p=(y,m)=>r[m].pathname!==y.pathname||r[m].route.path?.endsWith("*")&&r[m].params["*"]!==y.params["*"];return f==="assets"?i.filter((y,m)=>h(y,m)||p(y,m)):f==="data"?i.filter((y,m)=>{let g=u.routes[y.route.id];if(!g||!g.hasLoader)return!1;if(h(y,m)||p(y,m))return!0;if(y.route.shouldRevalidate){let v=y.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function v1(l,i,{includeHydrateFallback:r}={}){return b1(l.map(u=>{let c=i.routes[u.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),r&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function b1(l){return[...new Set(l)]}function S1(l){let i={},r=Object.keys(l).sort();for(let u of r)i[u]=l[u];return i}function x1(l,i){let r=new Set;return new Set(i),l.reduce((u,c)=>{let f=JSON.stringify(S1(c));return r.has(f)||(r.add(f),u.push({key:f,link:c})),u},[])}function Fp(){let l=Y.useContext(xa);return bc(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function w1(){let l=Y.useContext(cu);return bc(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Sc=Y.createContext(void 0);Sc.displayName="FrameworkContext";function Wp(){let l=Y.useContext(Sc);return bc(l,"You must render this element inside a <HydratedRouter> element"),l}function E1(l,i){let r=Y.useContext(Sc),[u,c]=Y.useState(!1),[f,h]=Y.useState(!1),{onFocus:p,onBlur:y,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=i,w=Y.useRef(null);Y.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let L=D=>{D.forEach(X=>{h(X.isIntersecting)})},H=new IntersectionObserver(L,{threshold:.5});return w.current&&H.observe(w.current),()=>{H.disconnect()}}},[l]),Y.useEffect(()=>{if(u){let L=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(L)}}},[u]);let S=()=>{c(!0)},U=()=>{c(!1),h(!1)};return r?l!=="intent"?[f,w,{}]:[f,w,{onFocus:Si(p,S),onBlur:Si(y,U),onMouseEnter:Si(m,S),onMouseLeave:Si(g,U),onTouchStart:Si(v,S)}]:[!1,w,{}]}function Si(l,i){return r=>{l&&l(r),r.defaultPrevented||i(r)}}function T1({page:l,...i}){let{router:r}=Fp(),u=Y.useMemo(()=>Op(r.routes,l,r.basename),[r.routes,l,r.basename]);return u?Y.createElement(k1,{page:l,matches:u,...i}):null}function C1(l){let{manifest:i,routeModules:r}=Wp(),[u,c]=Y.useState([]);return Y.useEffect(()=>{let f=!1;return g1(l,i,r).then(h=>{f||c(h)}),()=>{f=!0}},[l,i,r]),u}function k1({page:l,matches:i,...r}){let u=ul(),{future:c,manifest:f,routeModules:h}=Wp(),{basename:p}=Fp(),{loaderData:y,matches:m}=w1(),g=Y.useMemo(()=>Fm(l,i,m,f,u,"data"),[l,i,m,f,u]),v=Y.useMemo(()=>Fm(l,i,m,f,u,"assets"),[l,i,m,f,u]),w=Y.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let L=new Set,H=!1;if(i.forEach(X=>{let V=f.routes[X.route.id];!V||!V.hasLoader||(!g.some(re=>re.route.id===X.route.id)&&X.route.id in y&&h[X.route.id]?.shouldRevalidate||V.hasClientLoader?H=!0:L.add(X.route.id))}),L.size===0)return[];let D=m1(l,p,c.unstable_trailingSlashAwareDataRequests,"data");return H&&L.size>0&&D.searchParams.set("_routes",i.filter(X=>L.has(X.route.id)).map(X=>X.route.id).join(",")),[D.pathname+D.search]},[p,c.unstable_trailingSlashAwareDataRequests,y,u,f,g,i,l,h]),S=Y.useMemo(()=>v1(v,f),[v,f]),U=C1(v);return Y.createElement(Y.Fragment,null,w.map(L=>Y.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...r})),S.map(L=>Y.createElement("link",{key:L,rel:"modulepreload",href:L,...r})),U.map(({key:L,link:H})=>Y.createElement("link",{key:L,nonce:r.nonce,...H})))}function A1(...l){return i=>{l.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var z1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{z1&&(window.__reactRouterVersion="7.12.0")}catch{}function _1({basename:l,children:i,unstable_useTransitions:r,window:u}){let c=Y.useRef();c.current==null&&(c.current=ub({window:u,v5Compat:!0}));let f=c.current,[h,p]=Y.useState({action:f.action,location:f.location}),y=Y.useCallback(m=>{r===!1?p(m):Y.startTransition(()=>p(m))},[r]);return Y.useLayoutEffect(()=>f.listen(y),[f,y]),Y.createElement(a1,{basename:l,children:i,location:h.location,navigationType:h.action,navigator:f,unstable_useTransitions:r})}var Kp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jp=Y.forwardRef(function({onClick:i,discover:r="render",prefetch:u="none",relative:c,reloadDocument:f,replace:h,state:p,target:y,to:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:w,...S},U){let{basename:L,unstable_useTransitions:H}=Y.useContext(Yn),D=typeof m=="string"&&Kp.test(m),X=Bp(m,L);m=X.to;let V=Yb(m,{relative:c}),[re,ue,B]=E1(u,S),K=D1(m,{replace:h,state:p,target:y,preventScrollReset:g,relative:c,viewTransition:v,unstable_defaultShouldRevalidate:w,unstable_useTransitions:H});function ce(ye){i&&i(ye),ye.defaultPrevented||K(ye)}let fe=Y.createElement("a",{...S,...B,href:X.absoluteURL||V,onClick:X.isExternal||f?i:ce,ref:A1(U,ue),target:y,"data-discover":!D&&r==="render"?"true":void 0});return re&&!D?Y.createElement(Y.Fragment,null,fe,Y.createElement(T1,{page:V})):fe});Jp.displayName="Link";var Pp=Y.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:u="",end:c=!1,style:f,to:h,viewTransition:p,children:y,...m},g){let v=Ri(h,{relative:m.relative}),w=ul(),S=Y.useContext(cu),{navigator:U,basename:L}=Y.useContext(Yn),H=S!=null&&H1(v)&&p===!0,D=U.encodeLocation?U.encodeLocation(v).pathname:v.pathname,X=w.pathname,V=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(X=X.toLowerCase(),V=V?V.toLowerCase():null,D=D.toLowerCase()),V&&L&&(V=Lt(V,L)||V);const re=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let ue=X===D||!c&&X.startsWith(D)&&X.charAt(re)==="/",B=V!=null&&(V===D||!c&&V.startsWith(D)&&V.charAt(D.length)==="/"),K={isActive:ue,isPending:B,isTransitioning:H},ce=ue?i:void 0,fe;typeof u=="function"?fe=u(K):fe=[u,ue?"active":null,B?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let ye=typeof f=="function"?f(K):f;return Y.createElement(Jp,{...m,"aria-current":ce,className:fe,ref:g,style:ye,to:h,viewTransition:p},typeof y=="function"?y(K):y)});Pp.displayName="NavLink";var M1=Y.forwardRef(({discover:l="render",fetcherKey:i,navigate:r,reloadDocument:u,replace:c,state:f,method:h=lu,action:p,onSubmit:y,relative:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:w,...S},U)=>{let{unstable_useTransitions:L}=Y.useContext(Yn),H=N1(),D=U1(p,{relative:m}),X=h.toLowerCase()==="get"?"get":"post",V=typeof p=="string"&&Kp.test(p),re=ue=>{if(y&&y(ue),ue.defaultPrevented)return;ue.preventDefault();let B=ue.nativeEvent.submitter,K=B?.getAttribute("formmethod")||h,ce=()=>H(B||ue.currentTarget,{fetcherKey:i,method:K,navigate:r,replace:c,state:f,relative:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:w});L&&r!==!1?Y.startTransition(()=>ce()):ce()};return Y.createElement("form",{ref:U,method:X,action:D,onSubmit:u?y:re,...S,"data-discover":!V&&l==="render"?"true":void 0})});M1.displayName="Form";function R1(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $p(l){let i=Y.useContext(xa);return Ze(i,R1(l)),i}function D1(l,{target:i,replace:r,state:u,preventScrollReset:c,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p,unstable_useTransitions:y}={}){let m=Vp(),g=ul(),v=Ri(l,{relative:f});return Y.useCallback(w=>{if(c1(w,i)){w.preventDefault();let S=r!==void 0?r:zi(g)===zi(v),U=()=>m(l,{replace:S,state:u,preventScrollReset:c,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p});y?Y.startTransition(()=>U()):U()}},[g,m,v,r,u,i,l,c,f,h,p,y])}var O1=0,L1=()=>`__${String(++O1)}__`;function N1(){let{router:l}=$p("useSubmit"),{basename:i}=Y.useContext(Yn),r=$b(),u=l.fetch,c=l.navigate;return Y.useCallback(async(f,h={})=>{let{action:p,method:y,encType:m,formData:g,body:v}=d1(f,i);if(h.navigate===!1){let w=h.fetcherKey||L1();await u(w,r,h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:g,body:v,formMethod:h.method||y,formEncType:h.encType||m,flushSync:h.flushSync})}else await c(h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:g,body:v,formMethod:h.method||y,formEncType:h.encType||m,replace:h.replace,state:h.state,fromRouteId:r,flushSync:h.flushSync,viewTransition:h.viewTransition})},[u,c,i,r])}function U1(l,{relative:i}={}){let{basename:r}=Y.useContext(Yn),u=Y.useContext(at);Ze(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),f={...Ri(l||".",{relative:i})},h=ul();if(l==null){f.search=h.search;let p=new URLSearchParams(f.search),y=p.getAll("index");if(y.some(g=>g==="")){p.delete("index"),y.filter(v=>v).forEach(v=>p.append("index",v));let g=p.toString();f.search=g?`?${g}`:""}}return(!l||l===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(f.pathname=f.pathname==="/"?r:Ot([r,f.pathname])),zi(f)}function H1(l,{relative:i}={}){let r=Y.useContext(jp);Ze(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=$p("useViewTransitionState"),c=Ri(l,{relative:i});if(!r.isTransitioning)return!1;let f=Lt(r.currentLocation.pathname,u)||r.currentLocation.pathname,h=Lt(r.nextLocation.pathname,u)||r.nextLocation.pathname;return ru(c.pathname,h)!=null||ru(c.pathname,f)!=null}const B1=`# 10 Grep Commands That'll Make You Feel Like a Linux Wizard


## 1. The Basic Search

\`\`\`
grep "error" logfile.txt
\`\`\`

This is your bread and butter. It searches for the word "error" in  \`logfile.txt\`  and prints every line containing it. Simple, but effective when you need to find something fast.

## 2. Case-Insensitive Search (Because Who Remembers Capitalization?)

\`\`\`
grep -i "error" logfile.txt
\`\`\`

The  \`-i\`  flag ignores case sensitivity. Now it'll match "Error", "ERROR", "eRRoR", you get the idea. This is probably the flag I use most often because, let's be honest, consistent capitalization is a myth.

## 3. Search Recursively Through Directories

\`\`\`
grep -r "TODO" /home/user/projects/
\`\`\`

Want to find all those TODO comments you left scattered across your project? The  \`-r\`  flag searches through all files in a directory and its subdirectories. It's like having X-ray vision for your file system.

## 4. Show Line Numbers (For When You Need to Actually Fix Things)

\`\`\`
grep -n "function" script.py
\`\`\`

The  \`-n\`  flag displays line numbers alongside matches. Super helpful when you need to jump to a specific location in a file. No more scrolling aimlessly through 500 lines of code.

## 5. Invert Your Search (Find What's NOT There)

\`\`\`
grep -v "debug" logfile.txt
\`\`\`

The  \`-v\`  flag inverts the match; it shows you everything except lines containing "debug". Perfect for filtering out noise when you're analyzing logs.

## 6. Count Your Matches

\`\`\`
grep -c "warning" logfile.txt
\`\`\`

Instead of seeing every match,  \`-c\`  just tells you how many lines matched. Great for quick statistics like "How many warnings did this build generate?"

## 7. Match Whole Words Only

\`\`\`
grep -w "cat" animals.txt
\`\`\`

Without  \`-w\`, searching for "cat" would also match "caterpillar", "concatenate", and "scatter". The  \`-w\`  flag ensures you only get exact word matches. It's the difference between precision and chaos.

## 8. Context Matters: Show Surrounding Lines

\`\`\`
grep -C 3 "exception" logfile.txt
\`\`\`

The  \`-C\`  flag (context) shows you lines before and after your match. You can also use  \`-A\`  (after) or  \`-B\`  (before) separately. This is clutch when debugging; the error is only half the story; you need to see what led up to it.

## 9. Search Multiple Files with Patterns

\`\`\`
grep "import" *.py
\`\`\`

Use wildcards to search across multiple files at once. This command searches for "import" in all Python files in the current directory. Your IDE does this too, but knowing the command-line way makes you dangerous.

## 10. Extended Regular Expressions (Level Up)

\`\`\`
grep -E "error|warning|critical" logfile.txt
\`\`\`

The  \`-E\`  flag enables extended regex, letting you use special characters without escaping them. Here we're searching for any line containing "error" OR "warning" OR "critical". You can build incredibly complex patterns:

\`\`\`
grep -E "[0-9]{3}-[0-9]{2}-[0-9]{4}" documents.txt
\`\`\`

This searches for patterns matching a Social Security Number format. Regular expressions are their own rabbit hole, but they're worth learning.

## Bonus: Combining Flags Like a Pro

\`\`\`
grep -rni "password" /var/log/
\`\`\`

Here's where it gets fun. Combine flags to create powerful searches:

-   \`-r\`  for recursive
-   \`-n\`  for line numbers
-   \`-i\`  for case-insensitive

This command recursively searches all log files for any mention of "password", ignoring case, and shows you exactly where it found them.

## Real-World Example: Finding a Bug

Imagine you're troubleshooting why your web app crashed at 2 AM. Here's how grep saves the day:

\`\`\`
grep -rni "exception" /var/log/apache2/ | grep "2025-11-07"
\`\`\`

This searches recursively through Apache logs for exceptions, shows line numbers and ignores case, then pipes the results through another grep to filter only today's date. You just narrowed down thousands of log entries to exactly what you need.

## The Pattern Matching Cheat Sheet

For those ready to dive deeper, here are the key pattern matching symbols:

-   \`.\`  Matches any single character
-   \`*\`  Matches zero or more of the preceding character
-   \`^\`  Beginning of line
-   \`$\`  End of line
-   \`[abc]\`  Matches any character in brackets
-   \`[^abc]\`  Matches any character NOT in brackets
-   \`|\`  OR operator (with  \`-E\`  flag)`,q1=`# How to Convert FLAC Music to Apple Lossless and Sync to iPhone

Follow these steps to convert FLAC albums to Apple Lossless (\`.m4a\`) and add them to your iPhone.

---

## 1. Download FLAC Music
1. Go to the music site of your choice.  
\`\`\` https://dabmusic.xyz/ \`\`\`
2. Download the music or albums in **.flac** format.  

---

## 2. Install XLD (X Lossless Decoder) for Mac
1. Download **XLD** for Mac from the official website.  
2. Install it by dragging it into your Applications folder.

---

## 3. Convert FLAC to Apple Lossless (.m4a)
You can convert **single or multiple files** using XLD:

### Batch conversion:
1. Select all FLAC files you want to convert.  
2. Drag and drop them **onto the XLD icon**.  
3. XLD will convert them to **Apple Lossless (.m4a)** format automatically.

---

## 4. Add Converted Music to Apple Music on Mac
1. Open the **Music** app.  
2. Drag the \`.m4a\` files from XLD into Music, or use **File → Add to Library…**  
3. Music will import the files into your library.

---

## 5. Sync Music to iPhone
1. Connect your iPhone to your Mac via USB (or Wi-Fi sync if enabled).  
2. Open **Finder** and select your iPhone.  
3. Go to the **Music** tab and choose which albums/tracks to sync.  
4. Click **Apply / Sync**.  
5. Your music will now appear in the Music app on your iPhone.

---

✅ You’re done! Your FLAC music is now in Apple Lossless format and available on your iPhone.
`,j1=`# Server Security Response Guide

If someone tried to access private routes on your server, treat it as a real intrusion attempt and lock things down immediately. Below is a practical, step-by-step response, assuming a typical Linux server (Ubuntu/Debian/CentOS). I’ll keep it actionable.

1.  ## Identify the Attacker (First 5 minutes)
    
    Check logs to see IP, endpoint, frequency.
    
    Web server logs:
    
    ### Nginx
    
    \`\`\`
    sudo tail -n 100 /var/log/nginx/access.log
    sudo tail -n 100 /var/log/nginx/error.log
    \`\`\`
    
    ### Apache
    
    \`\`\`
    sudo tail -n 100 /var/log/apache2/access.log
    \`\`\`
    
    Look for:
    
    -   Repeated requests
    -   /admin, /api/private, /wp-admin, /env, /config
    -   401 / 403 / 404 floods
2.  ## IMMEDIATELY Block the IP (Fastest Protection)
    
    Using UFW (recommended):
    
    \`\`\`
    sudo ufw deny from ATTACKER_IP
    sudo ufw reload
    \`\`\`
    
    Check:
    
    \`\`\`
    sudo ufw status numbered
    \`\`\`
    
    Using iptables (instant):
    
    \`\`\`
    sudo iptables -A INPUT -s ATTACKER_IP -j DROP
    \`\`\`
    
    Persist iptables (important):
    
    \`\`\`
    sudo apt install iptables-persistent
    \`\`\`
    
3.  ## Rate-Limit Requests (Stops brute force & scanning)
    
    Nginx example (VERY important):
    
    Add inside your server {} block:
    
    \`\`\`
    limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;
    
    location /api/ {
        limit_req zone=api_limit burst=20 nodelay;
    }
    \`\`\`
    
    Reload:
    
    \`\`\`
    sudo nginx -t && sudo systemctl reload nginx
    \`\`\`
    
4.  ## Lock Down Private Routes (CRITICAL)
    
    ❌ Never rely only on frontend protection. Make sure private routes require auth at server level.
    
    Example (JWT / Token middleware):
    
    -   Verify token
    -   Validate expiration
    -   Reject missing/invalid tokens
    
    Example: Nginx Basic Auth (Quick Shield):
    
    \`\`\`
    sudo apt install apache2-utils
    htpasswd -c /etc/nginx/.htpasswd admin
    \`\`\`
    
    Then:
    
    \`\`\`
    location /admin {
        auth_basic "Restricted";
        auth_basic_user_file /etc/nginx/.htpasswd;
    }
    \`\`\`
    
5.  ## Block Known Bad Scanners Automatically (Fail2Ban)
    
    Install & enable:
    
    \`\`\`
    sudo apt install fail2ban -y
    sudo systemctl enable fail2ban
    sudo systemctl start fail2ban
    \`\`\`
    
    Check bans:
    
    \`\`\`
    sudo fail2ban-client status
    \`\`\`
    
    This will auto-ban:
    
    -   Repeated 401/403
    -   SSH brute force
    -   Bot scanning
6.  ## Protect SSH (If Not Done Yet)
    
    \`\`\`
    sudo nano /etc/ssh/sshd_config
    \`\`\`
    
    Change:
    
    \`\`\`
    PermitRootLogin no
    PasswordAuthentication no
    \`\`\`
    
    Restart:
    
    \`\`\`
    sudo systemctl restart ssh
    \`\`\`
    
    ⚠️ Make sure SSH keys are working first.
    
7.  ## Hide Server Fingerprints (Small but Useful)
    
    Disable server version leaks:
    
    \`\`\`
    server_tokens off;
    \`\`\`
    
8.  ## Check if They Got In (Important)
    
    \`\`\`
    last
    who
    w
    \`\`\`
    
    Check unexpected processes:
    
    \`\`\`
    ps aux | grep -v root
    \`\`\`
    
    Check cron jobs:
    
    \`\`\`
    crontab -l
    ls /etc/cron*
    \`\`\`
    
9.  ## Long-Term Protection (Strongly Recommended)
    
    -   ✅ Cloudflare (WAF + IP reputation)
    -   ✅ Private API behind VPN
    -   ✅ Only allow known IPs to admin routes
    -   ✅ Environment variables NOT publicly accessible
    -   ✅ .env blocked at web server level
    
    Example:
    
    \`\`\`
    location ~ /\\.env {
        deny all;
    }
    \`\`\`
    

🚨 If You See These → ACT FAST:

-   Requests to /env, /config, /backup.zip
-   High CPU without traffic
-   New users created
-   Unknown cron jobs

That means attempted exploitation, not just scanning.`,Y1=`# How to Answer a CTO (How You SOUND Matters)

A CTO does not want:

-   Agile theory
-   PM jargon
-   “We’ll re-prioritize” with no mechanics

They want:

-   Decision framework
-   Trade-off logic
-   Risk containment

## ✅ If the Role Turned Out Non-Technical / Misaligned

“The role ended up being far more operational and less technical than expected. I gave it an honest try, but I’m most effective in environments where I can work closely with engineering and architecture decisions.”

CTOs like this — you’re choosing technical ownership.

## CTO-Level Answer Structure (Use This Every Time)

Context → Risk → Options → Decision → Communication

Example opening line you can literally say:

> “When a client is adamant and non-technical, I stop debating opinions and shift the conversation to risk and trade-offs.”

That sentence alone sounds senior.

## Handling an Adamant, Non-Technical Client (What You ACTUALLY Say)

❌ Weak Answer (PM-ish)

> “I explain why it’s not feasible and ask them to reconsider.”

✅ Strong CTO-Level Answer

> “I never tell a non-technical client they’re wrong. I translate their request into time, risk, and cost, then let them choose.”

### Example Scenario

Client says:

> “This is a small change. Just add it.”

You say (verbatim):

> “I understand why this feels small from a business point of view. Technically, this change impacts authentication and data validation. We have three options:
> 
> 1.  Add it now — delivery moves by 2 weeks
> 2.  Ship current scope and add it in Phase 2
> 3.  Add a limited version now with guardrails
> 
> My recommendation is option 3 because it protects the release date while reducing risk.”

⚠️ Notice:

-   You didn’t argue
-   You gave choices
-   You made a recommendation
-   CTOs LOVE this.

## Reprioritization Without Killing Scope or Delivery

(This is what you were really asking)

You’re right to be suspicious of “just reprioritize.” Bad reprioritization breaks projects.

### The Rule CTOs Follow

You can’t change priority without changing something else.

So when you reprioritize, you explicitly move one of these:

-   Lever
-   What Changes
-   Scope
-   Feature depth or breadth
-   Time
-   Delivery date
-   Quality
-   Guardrails, edge cases
-   Risk
-   Known technical debt

## How Reprioritization ACTUALLY Works (Step-by-Step)

### Step 1: Freeze the Core

You identify non-negotiables:

> “These 3 items must ship for the system to function.”

This protects delivery.

### Step 2: Classify Work (Simple, CTO-Friendly)

You mentally bucket everything into:

-   Must-Have (system breaks without it)
-   Should-Have (important but deferrable)
-   Nice-to-Have (value, not required)

You don’t say “MoSCoW” in the interview — just do it.

### Step 3: Trade, Don’t Add

When a client pushes a new request, you say:

> “We can absolutely do this, but to keep the date, we’d need to move X out of scope. Would you rather delay delivery or defer X?”

This is controlled reprioritization.

## Will This Affect Scope or Delivery? (Honest CTO Answer)

Say this confidently:

> “Reprioritization always affects something. My job is to make sure it affects the least risky dimension.”

Then explain:

-   Early phase → flexible scope
-   Late phase → fixed scope, flexible enhancements
-   Near launch → protect stability at all costs

That shows judgment.

## Making the Project WORK Despite All This

Here’s the CTO-approved playbook:

1.  Timebox Decisions

> “If we can’t decide in 24 hours, we go with the safest option.”

Prevents paralysis.

4.  Incremental Delivery

> “We ship the smallest version that proves value, then expand.”

This buys political and technical safety.

7.  Feature Flags

> “We build it safely but control exposure.”

CTOs love hearing this.

10.  Written Trade-Offs

> “Every major change is documented with impact.”

This protects you and the team.

## Final Power Answer (Use This If CTO Pushes You)

If the CTO asks:

> “What if the client just won’t budge?”

Say:

> “Then I escalate with options, not problems. I make the trade-offs explicit, document the decision, and execute cleanly. My responsibility is not to please everyone — it’s to deliver a stable, valuable system with eyes open to the risks.”

That answer hits:

-   Leadership
-   Accountability
-   Engineering empathy

## One-Line Summary (Memorize This)

> “I manage adamant, non-technical stakeholders by converting opinions into trade-offs, protecting the core scope, and making reprioritization explicit instead of invisible.”


## Reprioritization Without Killing Scope or Delivery

The key principle here is:

You can reprioritize, but every change has consequences. Your job is to control which consequence happens.

### Step 1: Identify the Non-Negotiables

-   Core features or tasks that must ship for the system to work.
-   Dependencies that, if removed, break other modules.
-   Regulatory or compliance requirements.

Interview phrasing:

“Before reprioritizing, I make sure the ‘must-haves’ are frozen. These are the parts that cannot move without breaking the system or delivery commitment.”

### Step 2: Classify Work Clearly

Use simple, non-technical categories for stakeholders:

Category

Meaning

How it helps CTO/client

Must-Have

Essential for release

Protects delivery date

Should-Have

Important but deferrable

Gives flexibility

Nice-to-Have

Extra value, low impact

Can be swapped out for new requests

Interview phrasing:

“I categorize work so the team and client understand what is essential versus negotiable. This makes reprioritization transparent.”

### Step 3: Evaluate Trade-Offs

Every new request affects at least one of:

-   Scope – Remove or delay lower-priority features.
-   Time – Shift deadlines for higher-priority items.
-   Quality/Risk – Adjust how thoroughly a feature is implemented or tested.

Interview phrasing:

“I never just shuffle priorities silently. Every reprioritization is a trade-off, and I communicate exactly which dimension—scope, schedule, or quality—is impacted.”

### Step 4: Present Options

Instead of saying “we’ll do it,” give controlled choices:

“To include this request:

1.  We can move Feature X to Phase 2 to keep the timeline.
2.  We can extend delivery by 2 weeks to include everything.
3.  We can implement a limited version now and enhance later.”

Notice: You give choices, not arguments, and the client or CTO decides with full context.

### Step 5: Lock Decisions & Document

Once the trade-off is agreed, lock scope and communicate clearly.

Document decisions in a visible place (Jira, Confluence, etc.) to prevent scope creep.

Review with the team to avoid surprises.

Interview phrasing:

“After a decision, I lock the scope, communicate the trade-offs, and track changes. This prevents repeated debates and keeps the team focused.”

### Step 6: Deliver Incrementally

Use phased delivery or feature flags so you can ship safely while handling new requests.

This allows client satisfaction without compromising stability.

Interview phrasing:

“Even with shifting priorities, I focus on incremental delivery. It protects deadlines, allows early feedback, and reduces risk.”

## ✅ CTO-Ready One-Liner

“Reprioritization always has trade-offs; I protect core scope, communicate options transparently, and adjust either timeline, scope, or quality deliberately so delivery remains predictable.”


# Reprioritization for Technical Clients

## Key Difference vs Non-Technical Clients:

With technical clients, you can discuss implementation constraints, dependencies, and technical debt openly—they understand why trade-offs matter.

## Step 1: Identify Core Constraints

-   Highlight technical dependencies: API, database, architecture layers.
-   Identify performance, security, and reliability constraints.
-   Recognize technical debt or integration risk.

### What to Say in an Interview:

“With a technical client, I clearly identify the system dependencies and constraints before reprioritizing. They understand that moving a feature might break another module or require refactoring.”

## Step 2: Classify Work Using Technical Impact

Instead of business-centric categories, classify by technical risk and effort:

Category

Meaning

Example

Critical

Must ship for system integrity

Authentication module, core APIs

High

Important, minor dependencies

Reporting dashboard, analytics

Low

Optional, low risk

UI enhancements, logging tweaks

### Interview Phrasing:

“I present reprioritization options based on technical impact, not just business value. This allows the team to see the cost of changes clearly.”

## Step 3: Quantify Trade-Offs

Technical clients care about effort, risk, and long-term maintainability. When reprioritizing, frame trade-offs quantitatively:

-   Time: extra engineering hours, delays
-   Scope: features deferred
-   Quality: technical debt, potential instability

### Example Answer:

“I show clients that adding this feature now will require refactoring X module, which adds 40 developer hours and increases the risk of regression. We then discuss options.”

## Step 4: Provide Concrete Options

Instead of abstract choices, give technical paths:

“We have three options:

1.  Refactor module first, then add the feature — adds 2 sprints
2.  Implement a shortcut that increases tech debt — keeps delivery but increases risk
3.  Delay feature to next release — preserves code quality

### Why It Works:

-   The client sees technical implications
-   You show ownership of risk
-   Decisions are data-driven, not emotional

## Step 5: Document & Communicate Decisions

Track all technical trade-offs and decisions in Jira, Confluence, or architecture docs.

Keep them visible to both team and client.

Include rationale so later questions (“Why did we defer X?”) have a factual answer.

### Interview Phrasing:

“I document the decision and the technical reasoning so there’s no ambiguity, and the team can implement confidently.”

## Step 6: Deliver Incrementally & Safely

Technical clients love feature flags, canary releases, and automated testing.

You can ship “safe increments” while handling reprioritized features.

### Interview Phrasing:

“I deliver incrementally using feature flags or modular rollout. This allows us to handle reprioritization without destabilizing the release.”

## ✅ CTO/Technical Client-Ready One-Liner

“For technical clients, I present reprioritization as a set of trade-offs tied to dependencies, effort, and risk. I document decisions, protect core modules, and use incremental delivery to maintain stability.”


1. Technical Foundations (1–20)

1. What is the role of a Technical Project Manager?
A TPM bridges business and engineering, ensuring technical feasibility, delivery predictability, and risk management without replacing engineers or architects.

2. How deep should a TPM’s technical knowledge be?
Deep enough to challenge assumptions, understand trade-offs, assess risk, and communicate clearly — not necessarily to code daily.

3. What is system architecture?
A high-level design defining components, data flow, integrations, and constraints of a system.

4. Difference between monolith and microservices?
Monolith = single deployable unit; Microservices = independently deployable services with higher operational complexity.

5. When would you choose a monolith?
Early-stage products with small teams and rapidly evolving requirements.

6. When are microservices justified?
At scale, with multiple teams, independent release needs, and clear service boundaries.

7. What is technical debt?
Short-term technical compromises that increase long-term maintenance cost.

8. How do you identify technical debt early?
Repeated bugs, fragile releases, long onboarding times, and “don’t touch this” areas.

9. What is an API?
A contract allowing systems to communicate using defined inputs and outputs.

10. REST vs GraphQL?
REST uses fixed endpoints; GraphQL allows flexible queries but adds complexity.

11. What is latency?
Time taken for a request to travel through the system and return a response.

12. What causes performance bottlenecks?
Inefficient queries, synchronous dependencies, poor caching, or infrastructure limits.

13. What is scalability?
Ability of a system to handle increased load without performance degradation.

14. Horizontal vs vertical scaling?
Horizontal = add more machines; Vertical = add more power to one machine.

15. What is a database index?
A data structure that improves query performance at the cost of write speed.

16. SQL vs NoSQL?
SQL is structured and relational; NoSQL offers flexibility and scalability.

17. What is eventual consistency?
Data may be temporarily inconsistent but converges over time.

18. What is caching?
Storing frequently accessed data closer to the user for faster retrieval.

19. What is a load balancer?
Distributes traffic across servers to improve reliability and performance.

20. What is observability?
Ability to understand system behavior through logs, metrics, and traces.

2. Requirements & Planning (21–40)

21. How do you convert business requirements to technical tasks?
Break them into user stories, acceptance criteria, and technical subtasks.

22. What is an acceptance criterion?
Clear conditions defining when a feature is considered complete.

23. How do you handle vague requirements?
Ask clarifying questions, propose assumptions, and validate early.

24. What is scope creep?
Uncontrolled expansion of project requirements.

25. How do you prevent scope creep?
Change control, impact analysis, and clear prioritization.

26. What is a dependency?
A task or component that must be completed before another can proceed.

27. How do you track dependencies?
Dependency maps, blockers in Jira, and regular syncs.

28. What is critical path?
The sequence of tasks that directly impacts delivery date.

29. How do you estimate technical work?
Collaboratively with engineers using ranges, not exact dates.

30. Why are estimates often wrong?
Unknowns, hidden complexity, and integration risks.

31. What is a spike?
A time-boxed research task to reduce technical uncertainty.

32. When do you use spikes?
When feasibility or effort is unclear.

33. What is backlog grooming?
Refining and prioritizing tasks to be ready for execution.

34. What is sprint planning?
Selecting work for a sprint based on priority and capacity.

35. Velocity vs capacity?
Velocity = historical output; Capacity = available effort.

36. What is overcommitment?
Assigning more work than the team can realistically deliver.

37. How do you handle missed deadlines?
Root-cause analysis, re-plan, and transparent communication.

38. What is a milestone?
A significant delivery checkpoint.

39. How do you plan infra-heavy work?
Add buffers, validate assumptions, and parallelize where possible.

40. What’s more important: date or quality?
Context-dependent, but stability is non-negotiable for production systems.

3. Engineering Process & Quality (41–60)

41. What is CI/CD?
Automated integration, testing, and deployment of code.

42. Why does CI/CD matter for TPMs?
It affects release cadence, risk, and delivery timelines.

43. What is unit testing?
Testing individual components in isolation.

44. Integration testing?
Testing interactions between components.

45. Why do bugs escape to production?
Gaps in testing, rushed releases, or unclear requirements.

46. What is a code freeze?
Temporarily stopping feature changes before a release.

47. What is refactoring?
Improving internal code structure without changing behavior.

48. Why do engineers ask for refactoring time?
To reduce future risk and improve maintainability.

49. How do you justify refactoring to stakeholders?
Link it to reduced incidents, faster delivery, and lower costs.

50. What is technical quality?
Stability, maintainability, performance, and security.

51. What is a regression?
A bug that reintroduces previously fixed behavior.

52. What is feature flagging?
Turning features on/off without redeploying code.

53. Why are feature flags useful?
Safer releases and faster rollbacks.

54. What is rollback?
Reverting to a previous stable version.

55. What is release management?
Coordinating deployments across environments.

56. Staging vs production?
Staging mimics production; production serves users.

57. What is UAT?
User Acceptance Testing by business or end users.

58. What metrics indicate engineering health?
Deployment frequency, failure rate, MTTR, bug trends.

59. What is MTTR?
Mean Time To Recovery after incidents.

60. What’s a healthy release process?
Small, frequent, automated, and reversible releases.

4. Risk, Incidents & Leadership (61–80)

61. What is technical risk?
Potential for failure due to complexity, unknowns, or dependencies.

62. How do you mitigate technical risk?
Early validation, spikes, buffers, and escalation.

63. What is an incident?
An unplanned production disruption.

64. TPM’s role during an incident?
Coordination, communication, and timeline tracking.

65. TPM’s role after an incident?
Post-mortem, action items, and prevention.

66. What is a post-mortem?
Blameless analysis of what went wrong and why.

67. Why blameless?
To encourage transparency and learning.

68. How do you prioritize bugs vs features?
Based on severity, user impact, and business risk.

69. What is a Sev-1 issue?
Critical outage affecting core functionality.

70. How do you communicate incidents to leadership?
Clear status, impact, ETA, and next update time.

71. Build vs buy decision factors?
Cost, control, time, scalability, and risk.

72. What is vendor lock-in?
Dependence on a third-party that’s hard to exit.

73. How do you manage external vendors?
Clear SLAs, timelines, and ownership.

74. What is escalation?
Raising risks early to decision-makers.

75. When should you escalate?
When risk exceeds team control or timeline.

76. How do you say “no” to stakeholders?
With data, trade-offs, and alternatives.

77. What builds trust with engineers?
Realistic plans, listening, and protecting focus time.

78. What breaks trust?
Overpromising, last-minute changes, and blame.

79. How do you manage cross-team conflicts?
Align on goals, clarify ownership, and negotiate trade-offs.

80. What’s TPM success?
Predictable delivery with healthy engineering systems.

5. Scenario-Based (81–100)

81. Feature is 2 weeks late. What do you do?
Assess impact, adjust scope or timeline, communicate early.

82. Engineer says “this is hacky.”
Ask about risks, lifespan, and alternatives before deciding.

83. Leadership demands a risky date.
Present options with consequences and let them choose.

84. Production is unstable but roadmap is aggressive.
Stabilize first — shipping on a broken foundation is failure.

85. New critical dependency appears late.
Re-plan, parallelize, or de-scope.

86. Team misses sprint commitments repeatedly.
Reduce scope, analyze blockers, reset expectations.

87. Stakeholder bypasses process.
Re-align privately and reinforce agreed workflow.

88. No documentation exists. First step?
Stabilize, map system, and document incrementally.

89. Engineer burnout signals?
Missed deadlines, low engagement, rising bugs.

90. How do you protect engineers?
Shield from noise, prioritize realistically, and push back.

91. What do you do in first 30 days on a project?
Learn system, risks, people, and priorities.

92. How do you handle conflicting priorities?
Align to business goals and escalate trade-offs.

93. What if engineers disagree technically?
Facilitate discussion; escalate only if needed.

94. What’s your decision framework?
Impact × risk × reversibility.

95. What is a reversible decision?
One that can be undone cheaply.

96. What is an irreversible decision?
Hard to undo — requires deeper analysis.

97. How do you manage ambiguity?
Break it into assumptions and validate fast.

98. What makes a TPM senior?
Anticipation, influence, and system-level thinking.

99. Biggest TPM mistake?
Promising without engineering buy-in.

100. Best TPM trait?
Calm, structured thinking under pressure.`,G1=`## Section 1: Linux Basics

1.  What is Linux? Linux is an open-source, Unix-like operating system kernel used in servers, desktops, cloud platforms, and embedded systems.
    
2.  Is Linux an operating system? Linux is technically a kernel. Combined with tools and libraries, it forms a Linux distribution.
    
3.  What are popular Linux distributions? Ubuntu, CentOS, RHEL, Debian, Fedora, SUSE, Arch Linux.
    
4.  What is the Linux kernel? The kernel is the core component that manages CPU, memory, devices, and system calls.
    
5.  What is a shell? A shell is a command-line interface that allows users to interact with the OS.
    
6.  Name popular Linux shells. bash, sh, zsh, ksh, fish.
    
7.  What is bash? Bash (Bourne Again Shell) is the default shell for most Linux systems.
    
8.  What is CLI? CLI (Command Line Interface) allows users to execute commands using text input.
    
9.  What is GUI? GUI (Graphical User Interface) allows interaction using windows, icons, and menus.
    
10.  What does open-source mean? Source code is freely available to view, modify, and distribute.
    
11.  What is root user? Root is the superuser with full administrative privileges.
    
12.  What is sudo? sudo allows a normal user to execute commands with root privileges.
    
13.  What is the home directory? Default directory for a user, usually /home/username.
    
14.  What is /root? Home directory of the root user.
    
15.  What is /etc directory? Contains system configuration files.
    
16.  What is /var? Stores variable data like logs, cache, and mail.
    
17.  What is /bin? Contains essential user binaries (commands).
    
18.  What is /sbin? Contains system binaries for administration.
    
19.  What is /tmp? Temporary files directory.
    
20.  What is /proc? Virtual filesystem with system and process information.
    
21.  What is /dev? Contains device files.
    
22.  What is /boot? Contains bootloader and kernel files.
    
23.  What is inode? A data structure storing metadata about a file.
    
24.  What is swap? Swap is disk space used as virtual memory.
    
25.  What is LTS? LTS (Long-Term Support) provides extended updates and stability.
    

## Section 2: File & Directory Management

1.  Command to list files? ls
    
2.  List hidden files? ls -a
    
3.  Create a file? touch file.txt
    
4.  Create a directory? mkdir dir_name
    
5.  Delete a file? rm file.txt
    
6.  Delete a directory? rm -r dir_name
    
7.  Copy files? cp source destination
    
8.  Move or rename files? mv old new
    
9.  View file content? cat, less, more
    
10.  Display first 10 lines? head file.txt
    
11.  Display last 10 lines? tail file.txt
    
12.  Follow log file? tail -f logfile
    
13.  File permissions command? chmod
    
14.  Change ownership? chown user:group file
    
15.  Permission types? Read (r), Write (w), Execute (x)
    
16.  Numeric permission 755 means? Owner: rwx, Group: r-x, Others: r-x
    
17.  What is umask? Default permission mask.
    
18.  Symbolic link? ln -s source link
    
19.  Hard link? Points to the same inode.
    
20.  Difference between soft & hard link? Soft link breaks if file deleted; hard link does not.
    
21.  Find files? find /path -name filename
    
22.  Search text? grep keyword file
    
23.  Recursive search? grep -r keyword dir
    
24.  Disk usage? du -sh
    
25.  Disk free space? df -h
    
26.  File type? file filename
    
27.  Count lines? wc -l file
    
28.  Sort file? sort file
    
29.  Compare files? diff file1 file2
    
30.  Compress file? tar -czf file.tar.gz dir
    

## Section 3: Process & System Management

1.  What is a process? A running instance of a program.
    
2.  View running processes? ps, top
    
3.  Real-time monitoring? top, htop
    
4.  Kill process? kill PID
    
5.  Force kill? kill -9 PID
    
6.  Background process? Append &
    
7.  Foreground process? fg
    
8.  What is PID? Process ID.
    
9.  What is PPID? Parent Process ID.
    
10.  What is load average? Average system load over time.
    
11.  What is uptime? Shows system running time.
    
12.  Reboot system? reboot
    
13.  Shutdown system? shutdown now
    
14.  Schedule shutdown? shutdown +10
    
15.  Check memory usage? free -h
    
16.  CPU info? lscpu
    
17.  Memory info? free, /proc/meminfo
    
18.  What is nice value? Process priority indicator.
    
19.  Change priority? nice, renice
    
20.  What is zombie process? Completed but not removed process.
    
21.  What is orphan process? Parent terminated but child still running.
    
22.  List open files? lsof
    
23.  What is cron? Job scheduler.
    
24.  Crontab syntax? • * * * * command
    
25.  List cron jobs? crontab -l
    
26.  Edit cron? crontab -e
    
27.  What is systemd? Init system and service manager.
    
28.  Start service? systemctl start service
    
29.  Stop service? systemctl stop service
    
30.  Enable service? systemctl enable service
    
31.  Service status? systemctl status service
    
32.  Boot target? systemctl get-default
    
33.  Change runlevel? systemctl isolate
    
34.  Kernel version? uname -r
    
35.  OS version? cat /etc/os-release
    

## Section 4: Networking

1.  Check IP address? ip a
    
2.  Old IP command? ifconfig
    
3.  Test connectivity? ping
    
4.  DNS lookup? nslookup, dig
    
5.  Check open ports? netstat, ss
    
6.  What is SSH? Secure remote login protocol.
    
7.  SSH default port? 22
    
8.  SCP command? scp file user@host:/path
    
9.  Rsync usage? Fast file synchronization.
    
10.  Check routing table? ip route
    
11.  Firewall tool? iptables, firewalld
    
12.  Open port? firewall-cmd --add-port
    
13.  Disable firewall? systemctl stop firewalld
    
14.  What is hostname? System name on network.
    
15.  Set hostname? hostnamectl set-hostname
    
16.  What is localhost? Loopback IP (127.0.0.1)
    
17.  What is TCP? Reliable connection-based protocol.
    
18.  What is UDP? Connectionless protocol.
    
19.  HTTP port? 80
    
20.  HTTPS port? 443
    
21.  FTP port? 21
    
22.  SFTP port? 22
    
23.  What is NFS? Network File System.
    
24.  Mount NFS? mount -t nfs
    
25.  What is SMB? Windows file-sharing protocol.
    
26.  What is curl? Command-line HTTP client.
    
27.  What is wget? File downloader.
    
28.  Check bandwidth? iftop
    
29.  Trace route? traceroute
    
30.  Network config file? /etc/sysconfig/network-scripts
    

## Section 5: Users, Groups & Security

1.  Add user? useradd
    
2.  Delete user? userdel
    
3.  Change password? passwd
    
4.  Add group? groupadd
    
5.  Add user to group? usermod -aG`,I1=`# Linux Commands: Find All SUID Binaries (for Privilege Escalation)

SUID binaries are gold mines. Use this to enumerate them:

\`\`\`
find / -perm -4000 -type f 2>/dev/null
\`\`\`

Why care? Attackers often look for misconfigured SUIDs to escalate privileges. You'd be surprised what gets left behind.

## 2. Search for World-Writable Files

Spot weak file permissions in one shot:

\`\`\`
find / -type f -perm -2 -ls 2>/dev/null
\`\`\`

This one-liner sweeps the entire filesystem for files anyone can write to — a classic source of privilege escalation in real-world Linux boxes.

## 3. List All Open Network Ports

Need a quick map of open sockets?

\`\`\`
netstat -tulnp 2>/dev/null
\`\`\`

Or, if netstat isn't available:

\`\`\`
ss -tulnp
\`\`\`

You'll find these useful for initial enumeration after an RCE or shell access.

## 8. Grab the Crontab for All Users

Automated tasks often hold secrets (or can be abused):

\`\`\`
for user in $(cut -f1 -d: /etc/passwd); do crontab -u $user -l 2>/dev/null; done
\`\`\`

Try this after gaining root or sudo access.

## 9. Find All Files Containing a Specific Keyword

Hunting for credentials or API keys? Use grep recursively:

\`\`\`
grep -Ri 'password' /etc 2>/dev/null
\`\`\`

Replace 'password' with your target string. I once found AWS keys this way in a bug bounty environment — no joke.

## 11. Extract All IPs from a File

Perfect for recon or log analysis:

\`\`\`
grep -Eo '([0-9]{1,3}\\.){3}[0-9]{1,3}' filename.txt | sort -u
\`\`\`

Replace  \`filename.txt\`  with your target. Handy for parsing large logs on bug bounty targets.

## 12. List All Listening Services and Their Executables

Triangulate which service is running on which port:

\`\`\`
lsof -i -P -n | grep LISTEN
\`\`\`

Spot the oddball service in seconds.

## 14. Identify Files Newer than X Minutes

Spot files dropped by malware or recent attackers:

\`\`\`
find /tmp -type f -mmin -10 2>/dev/null
\`\`\`

Shows files modified in the last 10 minutes. Adjust  \`/tmp\`  and  \`-10\`  as needed.

## 17. Find All Hidden Files and Directories

Admins love hiding stuff with a dot. Find them all:

\`\`\`
find / -name ".*" 2>/dev/null
\`\`\`

Often used in CTFs to stash flags or creds.

## 18. Check for Recent Logins

Good for spotting active users (or your own tracks):

\`\`\`
last -a | head -10
\`\`\`

Adjust the number as you like.

## 21. Get Internal IP Address

When you're in a shell and unsure where you landed:

\`\`\`
hostname -I
\`\`\`

Or, with  \`ip:\`

\`\`\`
ip addr show | grep 'inet ' | awk '{print $2}'
\`\`\`

## 22. Enumerate Current User Privileges

See what you can sudo (with or without a password):

\`\`\`
sudo -l
\`\`\`

## 23. Search for SSH Keys

Attackers love snagging private keys:

\`\`\`
find /home -name "id_rsa*" 2>/dev/null
\`\`\`

Sometimes they're left in  \`/root\`  or  \`/etc/ssh/\`. Worth checking.

## 24. Find World-Readable Password Files

Targets files that anyone can read:

\`\`\`
find / -type f -name "*pass*" -perm -o=r 2>/dev/null
\`\`\`

You'll be shocked what surfaces.

## 27. List Files by Size

Identify suspiciously large files (maybe exfil dumps):

\`\`\`
find / -type f -exec du -h {} + | sort -rh | head -20
\`\`\`

Usually, legit files don't blow up in size out of nowhere.

## 29. List All USB Devices (Great for Forensics)

Sneaky exfil via USB? Spot them here:

\`\`\`
lsusb
\`\`\`

# Ghost Hunting and Other Fixes

## 1. Ghost Hunting: lsof +L1

Scenario: df -h says disk usage is 100%, but you just deleted gigabytes of log files. Reason: If a process (like Apache or Postgres) is still writing to a file you deleted, the OS doesn't free the space (inode). It becomes a "zombie" file.

The Fix:

\`\`\`
lsof +L1
# Look for files marked as (deleted) but still held by a PID.
# You must reload/restart that specific PID to free the space.
\`\`\`

## 2. Time Travel: reptyr

Scenario: You started a long script, it's been running for 4 hours, but you forgot to start a screen or tmux session. You need to disconnect, but closing the terminal will kill the script.

The Fix:

\`\`\`
Use reptyr to "steal" the process and reparent it to a new screen.
# 1. Background the process: Ctrl+Z, then type 'bg'
# 2. Disown it from current shell: 'disown <PID>'
# 3. Open a new screen/tmux and pull it in:
reptyr <PID>
\`\`\`

## 3. The X-Ray Machine: strace

Scenario: A process is hanging. No logs. No CPU usage. Is it waiting for network? Is it permission denied?

The Fix:

\`\`\`
Don't guess. Watch the system calls in real-time.
strace -p <PID>
# You will see exactly what the kernel is doing: 
# open(), connect(), read()... 
# This is the ultimate debugging weapon.
\`\`\`

## 4. Config Espionage: /proc Filesystem

Scenario: A developer claims, "It works on my machine," but the production service fails. You suspect it picked up the wrong DB password or API key from the environment.

The Fix:

\`\`\`
Read the memory of the running process directly.
cat /proc/<PID>/environ | tr '\\0' '\\n'
# This dumps every environment variable the process was started with.
# No more guessing.
\`\`\`

## 5. The Panic Button: tune2fs

Scenario: Production is down. Disk is 100% full. You can't even tab-complete commands because there is zero space for temp files.

The Fix:

\`\`\`
Linux reserves 5% of blocks for the root user by default. In an emergency, you can set this to 0% to instantly gain GBs of space.
tune2fs -m 0 /dev/sdX
# Warning: Set it back to 5% once you clean up!
\`\`\`

## 6. SSH Turbo Mode: ControlMaster

Scenario: Running Ansible or opening multiple tabs to the same server is slow because of the SSH handshake.

The Fix:

\`\`\`
Enable connection multiplexing. The first connection authenticates; subsequent connections slide through the existing tunnel instantly.
# In your ~/.ssh/config:
Host *
    ControlMaster auto
    ControlPath ~/.ssh/sockets/%r@%h-%p
    ControlPersist 600
\`\`\`

## 7. The Quick Fix: ^old^new

Scenario: You typed a long command with a typo. systemctl restart nginxx

The Fix:

\`\`\`
Don't hit the up arrow and scroll back.
^nginxx^nginx
# Bash automatically runs: systemctl restart nginx
\`\`\`

## 8. Modern Network Analysis: ss

Scenario: You are still using netstat.

The Fix:

\`\`\`
netstat is deprecated, slow, and truncates output. 
ss (Socket Statistics) talks directly to the kernel and is blazing fast.
ss -tulpn
# -t: TCP, -u: UDP, -l: Listening, -p: Process, -n: Numeric
# See everything listening on your server in milliseconds.
\`\`\`

## 9. Muscle Memory: sudo !! and !$

Scenario: You typed a command but forgot sudo. Action: Type sudo !! (runs the last command as root). !$: You created a directory and now want to go into it.

The Fix:

\`\`\`
mkdir -p /var/www/html/project/v2 
cd !$  
# '!$' expands to the last argument of the previous command
\`\`\``,V1=`# Run Claude Code Locally on Apple Silicon Using LM Studio and LiteLLM (Zero Cost)

Agentic coding tools are powerful, but they usually come with a cost. Until recently, using Claude Code meant routing every request through Anthropic's API and paying per token. That is no longer strictly necessary. Ollama recently introduced support for running Claude Code locally with open-source models. This is a strong option for Windows, Linux, and macOS Intel users. However, on Apple Silicon (M-series Macs), Ollama provides limited benefits because it does not support MLX models. On Apple Silicon, MLX models are significantly faster and more efficient than GGUF models, meaning Ollama cannot fully utilize the hardware capabilities of M1, M2, or M3 chips.

To solve this, we can use LiteLLM with minimal configuration to make Claude Code compatible with LM Studio, enabling us to run high-performance MLX models locally on Apple Silicon. In this article, I'll show how to run Claude Code locally on macOS using:

-   LM Studio for local LLM inference
-   Qwen3-Coder-30B, a strong open-source coding model
-   LiteLLM as an Anthropic-to-OpenAI protocol bridge
-   Zero cloud usage and zero API cost

This setup works reliably on macOS Apple Silicon, runs entirely offline, and does not require Docker. If you are using Windows or Linux, you can run Claude Code locally using Ollama without setting up a LiteLLM proxy. For those platforms, refer to the official documentation:  [Claude Code - OllamaClaude Code is Anthropic's agentic coding tool that can read, modify, and execute code in your working directory. Open…ollama.com](https://docs.ollama.com/integrations/claude-code)

## What We're Building

Claude Code expects the Anthropic Messages API, while most local LLM runtimes expose an OpenAI-compatible API. The key idea is to insert a lightweight translation layer so Claude Code can work with a local model. The final architecture looks like this:

_Image by Manjunath Janardhan. Generated by Google Nano Banana Pro._

Once this is set up, Claude Code behaves exactly like it does with Anthropic's cloud — except everything runs on your machine.

## Prerequisites

-   macOS (Apple Silicon works well)
-   Python 3.10+
-   Node.js (for Claude Code)
-   LM Studio installed
-   Sufficient RAM for a 30B model

## Step 1: Set Up LM Studio

Open LM Studio. Download and load the model:

\`\`\`
Model name
Copy qwen/qwen3-coder-30b
\`\`\`

Enable the Local Server. Confirm the server is running at:

\`\`\`
Copy http://localhost:1234/v1
\`\`\`

_Image By Manjunath Janardhan. LM Studio local server running qwen coder 30b model._

This endpoint exposes an OpenAI-compatible Chat Completions API, which LiteLLM will use.

## Step 2: Create a Python Virtual Environment

Create a clean environment for LiteLLM:

\`\`\`
Copy
mkdir ~/litellm
cd ~/litellm
python3 -m venv venv
source venv/bin/activate
\`\`\`

Install LiteLLM with proxy support:

\`\`\`
Copy pip install "litellm[proxy]"
\`\`\`

## Step 3: Configure LiteLLM

Create a file called config.yaml:

\`\`\`
Copy
model_list:
  - model_name: qwen3-coder
    litellm_params:
      model: openai/qwen/qwen3-coder-30b
      api_base: http://localhost:1234/v1
      api_key: lmstudio

  # Claude Code starts with this default model internally
  - model_name: claude-haiku-4-5-20251001
    litellm_params:
      model: openai/qwen/qwen3-coder-30b
      api_base: http://localhost:1234/v1
      api_key: lmstudio

litellm_settings:
  drop_params: true
\`\`\`

**Why this configuration matters**

-   **Model aliasing:**  Claude Code does not reliably handle model names with slashes. We expose a clean alias (qwen3-coder) while mapping it to the exact LM Studio model ID.
-   **Claude default model mapping:**  Claude Code internally starts with claude-haiku-4-5-20251001. Mapping it avoids startup errors.
-   **drop_params: true:**  Claude Code sends Anthropic-specific parameters that local models do not support. LiteLLM safely removes them.

## Step 4: Start the LiteLLM Proxy

From the same directory:

\`\`\`
Copy litellm --config config.yaml --port 4000
\`\`\`

You should see output similar to:

_Image By Manjunath Janardhan. LiteLLM running locally_

## Step 5: Verify the Setup

Before using Claude Code, verify that LiteLLM can talk to LM Studio:

\`\`\`
Copy
curl http://localhost:4000/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer test" \\
  -d '{
    "model": "qwen3-coder",
    "messages": [
      {"role": "user", "content": "Say hello"}
    ]
  }'
\`\`\`

You should receive a valid response from Qwen3-Coder-30B.

\`\`\`
Copy
{"id":"chatcmpl-kchd8jwscaafs1wi0uyqsq","created":1769012041,
"model":"qwen/qwen3-coder-30b","object":"chat.completion",
"system_fingerprint":"qwen/qwen3-coder-30b",
"choices":[{"finish_reason":"stop","index":0,
"message":{"content":"Hello! It's nice to meet you!","role":"assistant"}}],
"usage":{"completion_tokens":10,"prompt_tokens":10,"total_tokens":20}}%
\`\`\`

## Step 6: Install and Run Claude Code

Install Claude Code:

\`\`\`
Copy npm install -g @anthropic-ai/claude-code
\`\`\`

or on macOS or Linux:

\`\`\`
Copy curl -fsSL https://claude.ai/install.sh | bash
\`\`\`

On Windows:

\`\`\`
Copy irm https://claude.ai/install.ps1 | iex
\`\`\`

Point Claude Code to LiteLLM:

\`\`\`
Copy export ANTHROPIC_AUTH_TOKEN=litellm
export ANTHROPIC_BASE_URL=http://localhost:4000
\`\`\`

Run Claude Code with the local model:

\`\`\`
Copy claude --model qwen3-coder
\`\`\`

_Image By Manjunath Janardhan. Claude CLI running local model_

You should now see Claude Code start normally and respond to prompts.

## What You Can Do with This Setup

With this configuration, Claude Code can:

-   Read and modify multi-file codebases
-   Run tests and shell commands
-   Perform refactors
-   Implement features
-   Debug failing builds

All without sending a single token to the cloud.

## Notes on Performance

Local models are slower than hosted Claude models and rely solely on your machine. With my M4 Pro 64GB Unified Memory, it performs well. Try lower models for better performance.

Qwen3-Coder-30B performs especially well on:

-   Refactoring
-   Test generation
-   Repository-scale changes

## Final Thoughts

Claude Code's agentic workflow is not tied to Anthropic's cloud — it only requires the Anthropic Messages API contract. By combining LM Studio, LiteLLM, and a strong open-source coding model, you can run the entire experience locally, privately, and at zero cost. This setup lowers the barrier to entry for agentic coding and makes it practical for everyday development.`,X1=`# Passwordless SSH Login Using SSH Key Authentication (Step-by-Step Guide)

## What Is Passwordless SSH?

Passwordless SSH is a secure authentication mechanism provided by OpenSSH, where a user logs in to a remote Linux server without entering a password, using public-key cryptography instead.

Instead of passwords:

-   A private key stays on the client
-   A public key is stored on the server

## Why Use Passwordless SSH?

-   ❌ Password brute-force attacks
-   ❌ Repeated password entry
-   ❌ Credential sharing risks
-   ❌ Automation failures (scripts, cron, CI/CD)

What It Provides:

-   ✅ Strong cryptographic security
-   ✅ Faster server access
-   ✅ Automation-friendly access
-   ✅ Industry best practice

## Common Use Cases

-   ✔ Server-to-server communication
-   ✔ DevOps automation & CI/CD pipelines
-   ✔ Backup & monitoring scripts
-   ✔ Admin access across environments
-   ✔ Cloud & on-prem Linux servers

## Step 1: Generate SSH Key (Server / Client Side)

Run on the source server (example: 10.159.1.162):

\`\`\`
ssh-keygen -t rsa -b 4096 -C "localhost"
\`\`\`

What This Does:

-   Generates a 4096-bit RSA key
-   Creates:

-   ~/.ssh/id_rsa → Private key
-   ~/.ssh/id_rsa.pub → Public key

⚠️ Never share the private key

## Step 2: Prepare SSH Directory on Target Server

Log in to the destination server and run:

\`\`\`
mkdir -p ~/.ssh
\`\`\`

Create the authorized keys file:

\`\`\`
vi ~/.ssh/authorized_keys
\`\`\`

## Step 3: Add Public Key to authorized_keys

Copy the public key (id_rsa.pub) from the source server and paste it into:

\`\`\`
~/.ssh/authorized_keys
\`\`\`

Example (shortened for clarity):

\`\`\`
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDUfGd2RolakRTzWAVB... localhost
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDB5L3UofTDDzmALNF9... prod-portal-1.novalocal
\`\`\`

✔ Multiple keys can exist for multiple servers/users

## Step 4: Set Correct Permissions (Very Important)

\`\`\`
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
\`\`\`

Why Permissions Matter:

SSH will refuse login if permissions are too open.

Image created from ChatGPT

## Step 5: Test Passwordless Login

From the source server (10.159.1.162), run:

\`\`\`
ssh username@target-server
\`\`\`

🎉 You should log in without any password or key prompt

## Optional: Disable Password Authentication (Recommended)

For maximum security, disable password login.

Edit SSH config on target server:

\`\`\`
vi /etc/ssh/sshd_config
\`\`\`

Set:

\`\`\`
PasswordAuthentication no
\`\`\`

Reload SSH:

\`\`\`
systemctl reload sshd
\`\`\`

✔ Prevents brute-force attacks

✔ Enforces key-only access

## Security Best Practices

-   Use 4096-bit keys
-   Never share private keys
-   Rotate keys periodically
-   Disable root SSH login
-   Use Fail2Ban for extra protection
-   Restrict SSH access using firewall rules

## Troubleshooting

Permission Denied (publickey):

\`\`\`
ls -ld ~/.ssh
ls -l ~/.ssh/authorized_keys
\`\`\`

SSH Verbose Debug:

\`\`\`
ssh -vvv user@server
\`\`\``,Q1=`# Setting a Login Banner on Linux Servers 

## 🛠 Step 1: Set the Message

Edit  \`/etc/issue\`  for pre-login banners:

\`\`\`
vi /etc/issue
\`\`\`

Example:

\`\`\`
WARNING: This system is for authorized use only. 
All activities are monitored and logged. 
Unauthorized access will be prosecuted.
\`\`\`

For remote SSH logins, edit  \`/etc/issue.net\`:

\`\`\`
vi /etc/issue.net
\`\`\`

## 🛠 Step 2: Configure SSH to Display It

Edit:

\`\`\`
vi /etc/ssh/sshd_config
\`\`\`

Set:

\`\`\`
Banner /etc/issue.net
\`\`\`

Restart SSH:

\`\`\`
systemctl restart sshd
\`\`\`

## 🛠 Step 3: Add Post-Login Notices

For after successful login, edit  \`/etc/motd\`  (Message of the Day):

\`\`\`
vi /etc/motd
\`\`\`

Example:

\`\`\`
Welcome to [ServerName]
All activity is logged. Contact admin@example.com for support.
\`\`\``,Z1=`## Convert a Meeting from Video .mp4 to Audio with AI in Mac Terminal and Generating MoM's. 

### Transcribe first:

Use Whisper by OpenAI (free, open-source). It converts audio/video to text. Works on Mac/Linux/Windows.

Command example on Mac Terminal:

\`\`\`
pip install openai-whisper
whisper your_meeting.mp3 --model medium
\`\`\`

This outputs a transcript .txt.

### Summarize the transcript:

Feed the text into ChatGPT or any LLM to get bullet points or an executive summary.

Example prompt for AI:

> "Summarize the following meeting transcript into key decisions, action items, and important discussion points and generate a MoM for this."`,F1=`# DevOps Commands Cheat Sheet (With Real-World Examples)

A compact, practical, end-to-end DevOps reference

## 1️⃣ Linux Essentials

👉 Click here to understand 100+ DevOps Commands

### Basic Commands

ls -la                  # List all files with permissions
cd /var/log             # Change directory
pwd                     # Show current path
mkdir app && cd app     # Create & enter directory
rm -rf tmp/             # Delete directory forcefully
cp file1 file2          # Copy file
mv old new              # Rename / move file
touch app.log           # Create empty file

### Permissions & Ownership

chmod 755 script.sh     # rwxr-xr-x
chown user:group file   # Change owner

### System Information

uname -a                # Kernel & OS
hostnamectl             # Host details
free -h                 # Memory usage
df -h                   # Disk usage
uptime                  # Load average

### Logs

ls /var/log/
journalctl -xe          # System errors
tail -f /var/log/syslog # Follow logs

### Services

systemctl status nginx
systemctl restart nginx
systemctl enable nginx
systemctl stop nginx

## 2️⃣ Git Cheat Sheet

👉 Click here to learn Git Essentials Commands with Real-World Examples

### Basics

git clone repo-url
git status
git add .
git commit -m "fix: bug"
git push origin main
git pull

### Branching

git checkout -b feature/login
git branch
git merge feature/login

### Fix Common Issues

git stash               # Save temp changes
git stash pop
git reset --hard HEAD~1
git rebase main
git log --oneline

## 3️⃣ Networking Cheat Sheet

👉 Click here to understand 🔥 IPTABLES Linux Firewall and Networking & Troubleshooting

### Diagnostics

ping google.com
traceroute 8.8.8.8
ip a
ip route

### Ports & Connections

ss -tulnp
netstat -tulnp
lsof -i :80

### DNS

dig example.com
nslookup example.com
curl -I [https://example.com](https://example.com/)

## 4️⃣ Bash Scripting Essentials

👉 Click here to understand Complete Bash shell scripting.

### Template

#!/bin/bash
set -e
for i in {1..5}; do
  echo "Count: $i"
done

### Variables & Conditions

env="dev"
if [ "$env" == "dev" ]; then
  echo "Development mode"
fi

### Useful

$?        # Exit code
$0        # Script name
$1        # First argument

## 🚀 Useful Ansible Commands (Cheatsheet)

👉 Click here to learn Ansible Made Simple—Beginner-Friendly Guide with Examples

# ✔ Ping all servers:
ansible all -m ping -i inventory.txt

# ✔ Run a command:
ansible webservers -a "uname -a" -i inventory.txt

# ✔ Install a package:
ansible webservers -m apt -a "name=nginx state=present" -b -i inventory.txt

# ✔ Run a playbook:
ansible-playbook -i inventory.txt site.yml

# ✔ Check configuration:
ansible-config dump --only-changed

# ✔ List inventory:
ansible-inventory -i inventory.txt --list

# run ad-hoc shell command
ansible web -a "uptime" -i inventory.txt

# run ad-hoc module
ansible db -m apt -a "name=mariadb-server state=present" -b -i inventory.txt

# run a playbook with vault prompt
ansible-playbook -i inventory.txt site.yml --ask-vault-pass

# run with specific vault password file (safer for CI)
ansible-playbook -i inventory.txt site.yml --vault-password-file ~/.vault_pass.txt

# dry run / preview
ansible-playbook -i inventory.txt site.yml --check --diff

# run with verbosity
ansible-playbook -i inventory.txt site.yml -vvv

## 5️⃣ Docker Cheat Sheet

👉 Click here to understand 50+ Docker Commands Every DevOps Engineer Should Know (With Examples)

### Common Commands

docker build -t app .
docker run -d -p 80:80 app
docker ps
docker logs container
docker exec -it container bash

### Troubleshooting

docker ps -a
docker inspect container
docker stats

### Cleanups

docker system prune -a
docker rm $(docker ps -aq)
docker rmi $(docker images -q)

## 6️⃣ Kubernetes (K8s) Cheat Sheet

👉 Click here to understand Kubernetes Cheatsheet with Simple Examples (For Everyday Use)

### Core Commands

kubectl get pods
kubectl get svc
kubectl get deploy
kubectl describe pod pod-name
kubectl logs pod-name
kubectl exec -it pod-name -- sh

### Apply / Delete

kubectl apply -f app.yaml
kubectl delete -f app.yaml

### Troubleshooting

kubectl get events
kubectl describe node
kubectl rollout status deploy app
kubectl rollout undo deploy app

## 🧰 BASIC HELM COMMANDS

👉 Click here to learn 50+ Essential Helm Commands

### helm help — Show help info

Displays help for Helm or any subcommand.

helm help
helm install --help

### helm version — Check client/server version

helm version

### helm repo add — Add a chart repository

helm repo add stable [https://charts.helm.sh/stable](https://charts.helm.sh/stable)

### helm repo update — Refresh repositories

helm repo update

### helm repo list — Show added repos

helm repo list

### helm search hub — Search charts on Helm Hub

helm search hub nginx

### helm search repo — Search local repos

helm search repo mongodb

## 🚀 MySQL Commands

👉 Click here to learn Essential MySQL Commands (Beginner-Friendly)

### 🔍 Check MySQL Version

SELECT VERSION();

### 🔑 List all users

SELECT user, host FROM mysql.user;

### 🔄 Show current database

SELECT DATABASE();

### 📦 Describe table structure

DESC wallet_demo;

### 🔍 Sample queries

SELECT MAX(balance) FROM accounts;
SELECT * FROM accounts LIMIT 5;

### 📚 Check constraints

SELECT * FROM information_schema.TABLE_CONSTRAINTS LIMIT 50;

## 7️⃣ YAML Quick Reference

👉 Click here to learn Master YAML for DevOps—End-to-End Guide

apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
  - name: app
    image: nginx
    ports:
    - containerPort: 80

## 8️⃣ Terraform Cheat Sheet

👉 Click here to learn Terraform Practical—Build VMs with Code and Commands

### Core Commands

terraform init
terraform plan
terraform apply
terraform destroy

### State Management

terraform state list
terraform import aws_instance.web i-123
terraform refresh

### Structure

provider "aws" {}
resource "aws_instance" "web" {
  ami           = "ami-123"
  instance_type = "t2.micro"
}

## 9️⃣ CI/CD Cheat Sheet

👉 Click here to follow a Simple Step-by-Step Jenkins Installation Guide

### Pipeline Stages

Build → Test → Scan → Deploy → Notify

### Jenkinsfile Template

pipeline {
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}

## 🔟 AWS Cheat Sheet

👉 Click here to understand the complete AWS CLI Commands Cheat Sheet

### EC2

ssh -i key.pem ubuntu@ip
systemctl status app
df -h

### S3

aws s3 ls
aws s3 cp file s3://bucket
aws s3 sync ./data s3://bucket

### CloudWatch

aws logs describe-log-groups
aws logs tail /aws/lambda/app --follow

### IAM Best Practices

-   Least privilege
-   MFA enabled
-   No root usage
-   Rotate keys

## 1️⃣1️⃣ Monitoring & Logging

-   Prometheus
-   Exporters
-   Metrics scraping
-   Alert rules
-   Grafana
-   Dashboards
-   Data sources
-   Alerts

## 1️⃣2️⃣ DevSecOps

👉 Click here to understand DevSecOps — Building Secure Software at DevOps Speed

### Security Tools

trivy image app
snyk test


# 10 Hidden DevOps Automation Tricks I Wish I Knew Earlier


## 1. Automate Any Script with Systemd Timers (Not Cron!)

Everyone knows cron, but few realize how much better systemd timers are. They can restart failed jobs, ensure dependencies, and even integrate with journald logs.

Example:

\`\`\`
# /etc/systemd/system/cleanup-temp.service
[Service]
ExecStart=/usr/local/bin/cleanup-temp.sh

# /etc/systemd/system/cleanup-temp.timer
[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target

\`\`\`

Enable it:

\`\`\`
systemctl enable --now cleanup-temp.timer
\`\`\`

💡 Why it matters: Timers survive reboots, provide full logging, and let you manage jobs like real services—ideal for production systems.

## 2. Sync Servers with rsync + SSH Keys

Instead of manually copying files or using slow FTP uploads, use rsync for incremental syncs—it only transfers changes. Perfect for backups, logs, or configs.

Example:

\`\`\`
rsync -avz --delete /var/www/ ubuntu@10.0.0.12:/backup/www/
\`\`\`

💡 Why it matters: You can mirror servers in seconds, and with SSH keys, it runs password-free in CI/CD pipelines or cron jobs.

## 3. Parse JSON Like a Pro with jq

Whether it's a Terraform output, Docker inspect, or GCP CLI response—JSON is everywhere. Instead of manually reading it, use jq to extract exactly what you need.

Example:

\`\`\`
gcloud run services describe my-app --format=json | jq -r '.status.url'
\`\`\`

💡 Why it matters: One-liners like this make scripts smarter—no more brittle grep or awk parsing.

## 4. Keep Scripts Alive with tmux Sessions

Ever started a long-running job (like a backup or deployment) and lost it when your SSH session dropped? tmux lets you detach, reconnect, and resume—like magic.

Example:

\`\`\`
tmux new -s deploy
# run your commands
tmux detach

\`\`\`

Reconnect anytime:

\`\`\`
tmux attach -t deploy
\`\`\`

💡 Why it matters: tmux keeps critical automations alive even when your terminal doesn't.

## 5. Watch Commands in Real Time

The watch command re-runs any command periodically, making it perfect for monitoring changes.

Example:

\`\`\`
watch -n 5 "kubectl get pods"
\`\`\`

You can even highlight differences:

\`\`\`
watch -d df -h
\`\`\`

💡 Why it matters: Ideal for live debugging—no need to spam the up arrow or rerun commands manually.

## 6. Auto-Rotate Logs with logrotate

Massive log files can fill disks fast. logrotate automates rotation, compression, and cleanup.

Example config:

\`\`\`
/var/log/nginx/*.log {
    daily
    rotate 7
    compress
    missingok
    notifempty
}

\`\`\`

💡 Why it matters: Keeps systems clean and stable—no midnight disk space surprises.

## 7. Use Bash One-Liners for Power Moves

Bash can do wonders with a single line. Need to kill all stuck containers? Done.

Examples:

\`\`\`
# Kill all stopped containers
docker rm $(docker ps -aq --filter status=exited)

# Find and delete large files
find /var/log -type f -size +500M -delete

\`\`\`

💡 Why it matters: These one-liners turn repetitive chores into instant automation.

## 8. Use xargs to Supercharge Loops

Instead of writing for loops, use xargs to parallelize or batch commands.

Example:

\`\`\`
cat servers.txt | xargs -n1 -P5 -I{} ssh ubuntu@{} uptime
\`\`\`

💡 Why it matters: xargs lets you run tasks across multiple systems—fast and efficiently.

## 9. Automate Cleanups with Shell Scripts in CI/CD

Tiny cleanup scripts can save hours in your pipelines. For example, auto-remove old Docker images post-deployment:

Example:

\`\`\`
#!/bin/bash
docker image prune -af
echo "Cleaned up unused Docker images!"

\`\`\`

Add it as a post-deploy step in GitHub Actions, GitLab CI, or Cloud Build.

💡 Why it matters: Keeps CI/CD agents clean, reduces build times, and saves storage costs.

## 10. Automate Health Checks with Bash + Curl

Instead of waiting for alerts, run proactive checks.

Example:

\`\`\`
#!/bin/bash
URL="https://myapp.com/health"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL)
if [ "$STATUS" != "200" ]; then
  echo "⚠️ App health check failed at $(date)"
fi

\`\`\`

Schedule this with a systemd timer or cron to get regular validation.

💡 Why it matters: You'll catch issues before your users do.

## Bonus: Automate Documentation (Yes, Really)

Use echo and tee to log your script outputs to Markdown—auto-generate operational docs!

Example:

\`\`\`
bash deploy.sh | tee -a deploy-log.md
\`\`\`

💡 Why it matters: Every automation leaves behind readable, shareable context—no more "tribal knowledge."`,W1=`**Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.**


*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.*


## Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

~~Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.~~

 1. Lorem Ipsum is simply dummy text of the printing and typesetting
   industry. Lorem Ipsum has been the industry's standard dummy text
   ever since the 1500s, when an unknown printer took a galley of type
   and scrambled it to make a type specimen book. It has survived not
   only five centuries, but also the leap into electronic typesetting,
   remaining essentially unchanged. It was popularised in the 1960s with
   the release of Letraset sheets containing Lorem Ipsum passages, and
   more recently with desktop publishing software like Aldus PageMaker
   including versions of Lorem Ipsum.
 2. Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.
 - [ ] Lorem Ipsum is simply dummy text of the printing and typesetting
       industry. Lorem Ipsum has been the industry's standard dummy text
       ever since the 1500s, when an unknown printer took a galley of
       type and scrambled it to make a type specimen book. It has
       survived not only five centuries, but also the leap into
       electronic typesetting, remaining essentially unchanged. It was
       popularised in the 1960s with the release of Letraset sheets
       containing Lorem Ipsum passages, and more recently with desktop
       publishing software like Aldus PageMaker including versions of
       Lorem Ipsum.

> Lorem Ipsum is simply dummy text of the printing and typesetting
> industry. Lorem Ipsum has been the industry's standard dummy text ever
> since the 1500s, when an unknown printer took a galley of type and
> scrambled it to make a type specimen book. It has survived not only
> five centuries, but also the leap into electronic typesetting,
> remaining essentially unchanged. It was popularised in the 1960s with
> the release of Letraset sheets containing Lorem Ipsum passages, and
> more recently with desktop publishing software like Aldus PageMaker
> including versions of Lorem Ipsum.
`,K1=`# How to Write Markdown .md Files in Your Code and Push It to GitHub Pages (Deployment)

First of all, write up all your tutorial/document.

Second of all, format your text with this AI Editor Tool:  [https://textformatter.ai/app](https://textformatter.ai/app). 

Then paste that code in this AI Tool:  [https://stackedit.io/app](https://stackedit.io/app).

## Create a New .md File in public/docs/*.md

Paste that StackEdit document in here. Remember the first line would serve as the tutorial name on the sidebar on the left. If there are any images, place them under  **public/images/image.png**. If the image is a live link, just paste that in StackEdit. It will convert it.

# How to Serve Localhost and Deploy

Use  

\`npm run dev\`  

to serve on  [http://localhost:5175/](http://localhost:5175/)  

and if all seems good, then we are ready to deploy. 

Use  

\`npm run deploy\`  

to publish the changes to the GitHub repo (main branch) and it will automatically push the new build to the gh-pages branch (where you can check the deployment status).`,J1=`Terminal Tools For Mac OS and Linux
==============

1\\. install-nothing
-------------------

If you're feeling drowsy during the office and need a valid excuse to sleep while your boss is around, install-nothing.

install-nothing in action

Use install-nothing and doze off on the desk.

[GitHub - buyukakyuz/install-nothing](https://github.com/buyukakyuz/install-nothing): A terminal application that simulates installing things but...

2\\. gti
-------

When they typoed sl for ls, a steam locomotive ran across their Terminal window and they had to wait until it went away to carefully type ls.


Learn more about sl in [#5 of this article →](https://textformatter.ai/app#5)

Six of the Dumbest HomeBrew Tools for Mac That Actually Exist

#1, #5, #6 are completely dumb in every way

Today I found gti and installed it. This is a l'il nicer.

Whenever they type gti for git, it, sure, runs a locomotive (car this time), but then executes git init, so they don't have to.

I've finally implemented the command I keep typing all day: gti. It's a program that displays a badly made ASCII-art...

[r-wos.org](https://r-wos.org/)

3\\. mapscii
-----------

Everyone uses Google/Apple Maps.

But if you want to appear like a hard-code err.. core programmer, you need to use ASCII-type maps right inside your Terminal.

Yup, a zoomable world map in Terminal!

mapscii in action

Source: Asciinema

"Yuk 🤮R&quo;

Don't you want to look like a hacker?

[GitHub - rastapasta/mapscii](https://github.com/rastapasta/mapscii): 🗺 MapSCII is a Braille & ASCII world map renderer for your console ...

MapSCII is a Braille & ASCII world map renderer for your console - enter => telnet mapscii.me <= on Mac (brew...gi

[github.com](https://github.com/)

4\\. daktilo
-----------

I'm a kinda nostalgia-freak.

We still use our 50-yr old rotary dial telephone and a 125-yr old mechanical pendulum clock. They're perfectly intact.

But that lovely typewriter... I still miss it. It was toppled down and smashed by a cat that peeped into the house for milk.

Mad cat.

Anyways, life had been chugging along as usual. And it's been long since that antique faded from my thoughts.

Recently, however, I found a Homebrew tool that's getting me that nostalgia back: daktilo.

Simply use daktilo on Terminal and your Mac will play typewriter sounds every time you press a keyboard key --- even outside Terminal!

Flags to try:

daktilo : Plays the classic typewriter effect
daktilo -p : Can be used to play any of the following presets.

| Preset Name | Description |
| --- | --- |
| default | the classic typewriter effect |
| basic | a more basic typewriter effect |
| musicbox | plays random music notes |
| ducktilo | quack quack 🦆 |
| drumkit | dum, tss, cha 🥁 |

Use multiple -p's in one command for multiple presets.

To variate the sounds and have a more realistic typewriter effect, vary the preset's tempo and volume. Ex: --variate-tempo 0.9,0.4 --variate-volume 0.1,0.5.

Fun facts:

-   daktilo is "typewriter" in Turkish, derived from the Ancient Greek word δάκτυλος for "finger".
-   "Typewriter" is the longest word that can be typed with letters of a single keyboard row.

[daktilo](https://cli.rs/)

Turn your keyboard into a typewriter! 📇d

5\\. no-more-secrets
-------------------

My cousin just passed CPA --- not because he loved the subject, but because his father wanted him to do it. He wanted to become a movie director instead.

He's so passionate about movies that when his father isn't around, he'd easily distract from studies to streaming top movies on Netflix or writing screenplay for his debut project.

It's a sci-fi cyberpunk film. He named it "We're Tamed by Aliens".

In the climax scene, the protagonist manages to hack into satan's file server and decrypt a dark secret which eventually leads to the collapse of the satan empire.

For that, he wanted a Terminal animation like that in the 1992 movie Sneakers (0:35 in this video ↓)

While he's struggling to contact real bash experts to recreate that effect, I showed him this Homebrew tool no-more-secrets that finally broke his sleeplessness streak.

He simply needed to add | nms to whatever he types before it to show off an animation as if he really decrypted it.

no-more-secrets in action

Source: GitHub

For example:

ls -l / | nms
cowsay nggyu | nms
echo helloworld | nms

But if he really wanted to replay the original sneakers effect for nostalgia, he can simply use sneakers.

original sneakers effect in no-more-secrets

Source: GitHub

[GitHub - bartobri/no-more-secrets](https://github.com/bartobri/no-more-secrets): A command line tool that recreates the famous data decryption...

A command line tool that recreates the famous data decryption effect seen in the 1992 movie Sneakers. ...

[github.com](https://github.com/)

6\\. cmatrix and fakesteak
-------------------------

Sometimes when I feel bored, I just wanna leave everything and go out into nature. This helps recover myself from programming-induced burnout.

But won't my Mac feel bored if I leave it behind, doing nothing with it? (I know I'm exaggerating this, lol)

So as I leave it on, I turn on cmatrix or fakesteak. (Both are Homebrew tools that have a similar appearance)

This plays an animation resembling the iconic green-matrix cipher code from the movie The Matrix.

cmatrix in action

Credit: cmatrix

I leave it on full-screen and it appears like it's a native screensaver.

Best part, when I come back rejuvenated, I always find a guy or two asking how I set that screensaver on my Mac. It helped me make a few friends too :)

7\\. lolcat and nyancat
----------------------

Now, let's talk about the cat who calls Terminal home and loves rainbows.

You can call it with either of two names: lolcat and nyancat. Here's what it does when you call it with:

lolcat: It MTGA (Makes Terminal Great Again) by coloring outputs with rainbow colors. You just need to add | lolcat after a command. For example: cowsay hey cat | lolcat.

lolcat in action, plus the flags available

Source: GitHub

nyancat: The cat actually shows up

nyancat in action`,P1=`# ✏️ Start writing

# Welcome to JotBird — a clean, simple Markdown editor with live preview and one-click publishing.

> - Type on the left, see your formatted document on the right.  
- Paste or drag in an image to add it instantly.  
- Your work is saved automatically and stays on your device until you choose to publish.

**That's it — enjoy writing.**

![Example Image](../docs/images/1348246.png)


<img src="../docs/assets/1348246.png" alt="Example Image" width="200" style="height:auto;">


<img 
    src="../docs/assets/1348246.png" 
    alt="Example Image" 
    style="width:200px; height:200px; object-fit:cover; border-radius:10px; display:block; margin:10px 0;">`,$1=Object.assign({"/public/docs/10 Grep Commands for Linux Systems.md":B1,"/public/docs/Download flac and convert to run on Mac and iPhone.md":q1,"/public/docs/Hacking Prevention.md":j1,"/public/docs/Interview Preperation.md":Y1,"/public/docs/Linux Basic and Advanced Questions.md":G1,"/public/docs/Linux Hacker Commands.md":I1,"/public/docs/Run Claude Code Local On Mac.md":V1,"/public/docs/SSH Auth.md":X1,"/public/docs/Setting Up a Login Banner on Linux Server.md":Q1,"/public/docs/Transcribe and Generate MoM in Mac Terminal.md":Z1,"/public/docs/devopsCommands.md":F1,"/public/docs/docker.md":W1,"/public/docs/howTo.md":K1,"/public/docs/macAndLinuxTerminalTools.md":J1,"/public/docs/nginx.md":P1}),xc=Object.entries($1).map(([l,i])=>{const r=l.split("/").pop().replace(".md",""),u=i.match(/^#\s+(.*)/)?.[1]??r.replace(/-/g," ");return{slug:r,title:u,content:i}});function e0(){return on.jsx("aside",{style:js.sidebar,children:xc.map(l=>on.jsx(Pp,{to:`/docs/${l.slug}`,style:({isActive:i})=>({...js.link,...i?js.active:{}}),children:l.title},l.slug))})}const js={sidebar:{width:260,padding:"1rem",background:"var(--sidebar-bg)",borderRight:"1px solid #e5e7eb"},link:{display:"block",padding:"1rem 1rem",borderRadius:8,textDecoration:"none",color:"var(--text)",marginBottom:4,borderBottom:"1px solid #ccc"},active:{background:"var(--active-bg)",color:"var(--active-text)",fontWeight:600}};function n0(l,i){const r={};return(l[l.length-1]===""?[...l,""]:l).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const t0=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,l0=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,a0={};function Wm(l,i){return(a0.jsx?l0:t0).test(l)}const i0=/[ \t\n\f\r]/g;function r0(l){return typeof l=="object"?l.type==="text"?Km(l.value):!1:Km(l)}function Km(l){return l.replace(i0,"")===""}class Di{constructor(i,r,u){this.normal=r,this.property=i,u&&(this.space=u)}}Di.prototype.normal={};Di.prototype.property={};Di.prototype.space=void 0;function ey(l,i){const r={},u={};for(const c of l)Object.assign(r,c.property),Object.assign(u,c.normal);return new Di(r,u,i)}function lc(l){return l.toLowerCase()}class _n{constructor(i,r){this.attribute=r,this.property=i}}_n.prototype.attribute="";_n.prototype.booleanish=!1;_n.prototype.boolean=!1;_n.prototype.commaOrSpaceSeparated=!1;_n.prototype.commaSeparated=!1;_n.prototype.defined=!1;_n.prototype.mustUseProperty=!1;_n.prototype.number=!1;_n.prototype.overloadedBoolean=!1;_n.prototype.property="";_n.prototype.spaceSeparated=!1;_n.prototype.space=void 0;let u0=0;const ve=zl(),tn=zl(),ac=zl(),Z=zl(),Ye=zl(),ba=zl(),Bn=zl();function zl(){return 2**++u0}const ic=Object.freeze(Object.defineProperty({__proto__:null,boolean:ve,booleanish:tn,commaOrSpaceSeparated:Bn,commaSeparated:ba,number:Z,overloadedBoolean:ac,spaceSeparated:Ye},Symbol.toStringTag,{value:"Module"})),Ys=Object.keys(ic);class wc extends _n{constructor(i,r,u,c){let f=-1;if(super(i,r),Jm(this,"space",c),typeof u=="number")for(;++f<Ys.length;){const h=Ys[f];Jm(this,Ys[f],(u&ic[h])===ic[h])}}}wc.prototype.defined=!0;function Jm(l,i,r){r&&(l[i]=r)}function Ea(l){const i={},r={};for(const[u,c]of Object.entries(l.properties)){const f=new wc(u,l.transform(l.attributes||{},u),c,l.space);l.mustUseProperty&&l.mustUseProperty.includes(u)&&(f.mustUseProperty=!0),i[u]=f,r[lc(u)]=u,r[lc(f.attribute)]=u}return new Di(i,r,l.space)}const ny=Ea({properties:{ariaActiveDescendant:null,ariaAtomic:tn,ariaAutoComplete:null,ariaBusy:tn,ariaChecked:tn,ariaColCount:Z,ariaColIndex:Z,ariaColSpan:Z,ariaControls:Ye,ariaCurrent:null,ariaDescribedBy:Ye,ariaDetails:null,ariaDisabled:tn,ariaDropEffect:Ye,ariaErrorMessage:null,ariaExpanded:tn,ariaFlowTo:Ye,ariaGrabbed:tn,ariaHasPopup:null,ariaHidden:tn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ye,ariaLevel:Z,ariaLive:null,ariaModal:tn,ariaMultiLine:tn,ariaMultiSelectable:tn,ariaOrientation:null,ariaOwns:Ye,ariaPlaceholder:null,ariaPosInSet:Z,ariaPressed:tn,ariaReadOnly:tn,ariaRelevant:null,ariaRequired:tn,ariaRoleDescription:Ye,ariaRowCount:Z,ariaRowIndex:Z,ariaRowSpan:Z,ariaSelected:tn,ariaSetSize:Z,ariaSort:null,ariaValueMax:Z,ariaValueMin:Z,ariaValueNow:Z,ariaValueText:null,role:null},transform(l,i){return i==="role"?i:"aria-"+i.slice(4).toLowerCase()}});function ty(l,i){return i in l?l[i]:i}function ly(l,i){return ty(l,i.toLowerCase())}const o0=Ea({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ba,acceptCharset:Ye,accessKey:Ye,action:null,allow:null,allowFullScreen:ve,allowPaymentRequest:ve,allowUserMedia:ve,alt:null,as:null,async:ve,autoCapitalize:null,autoComplete:Ye,autoFocus:ve,autoPlay:ve,blocking:Ye,capture:null,charSet:null,checked:ve,cite:null,className:Ye,cols:Z,colSpan:null,content:null,contentEditable:tn,controls:ve,controlsList:Ye,coords:Z|ba,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ve,defer:ve,dir:null,dirName:null,disabled:ve,download:ac,draggable:tn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ve,formTarget:null,headers:Ye,height:Z,hidden:ac,high:Z,href:null,hrefLang:null,htmlFor:Ye,httpEquiv:Ye,id:null,imageSizes:null,imageSrcSet:null,inert:ve,inputMode:null,integrity:null,is:null,isMap:ve,itemId:null,itemProp:Ye,itemRef:Ye,itemScope:ve,itemType:Ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ve,low:Z,manifest:null,max:null,maxLength:Z,media:null,method:null,min:null,minLength:Z,multiple:ve,muted:ve,name:null,nonce:null,noModule:ve,noValidate:ve,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ve,optimum:Z,pattern:null,ping:Ye,placeholder:null,playsInline:ve,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ve,referrerPolicy:null,rel:Ye,required:ve,reversed:ve,rows:Z,rowSpan:Z,sandbox:Ye,scope:null,scoped:ve,seamless:ve,selected:ve,shadowRootClonable:ve,shadowRootDelegatesFocus:ve,shadowRootMode:null,shape:null,size:Z,sizes:null,slot:null,span:Z,spellCheck:tn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Z,step:null,style:null,tabIndex:Z,target:null,title:null,translate:null,type:null,typeMustMatch:ve,useMap:null,value:tn,width:Z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ye,axis:null,background:null,bgColor:null,border:Z,borderColor:null,bottomMargin:Z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ve,declare:ve,event:null,face:null,frame:null,frameBorder:null,hSpace:Z,leftMargin:Z,link:null,longDesc:null,lowSrc:null,marginHeight:Z,marginWidth:Z,noResize:ve,noHref:ve,noShade:ve,noWrap:ve,object:null,profile:null,prompt:null,rev:null,rightMargin:Z,rules:null,scheme:null,scrolling:tn,standby:null,summary:null,text:null,topMargin:Z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Z,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ve,disableRemotePlayback:ve,prefix:null,property:null,results:Z,security:null,unselectable:null},space:"html",transform:ly}),s0=Ea({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Bn,accentHeight:Z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Z,amplitude:Z,arabicForm:null,ascent:Z,attributeName:null,attributeType:null,azimuth:Z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Z,by:null,calcMode:null,capHeight:Z,className:Ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Z,diffuseConstant:Z,direction:null,display:null,dur:null,divisor:Z,dominantBaseline:null,download:ve,dx:null,dy:null,edgeMode:null,editable:null,elevation:Z,enableBackground:null,end:null,event:null,exponent:Z,externalResourcesRequired:null,fill:null,fillOpacity:Z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ba,g2:ba,glyphName:ba,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Z,horizOriginX:Z,horizOriginY:Z,id:null,ideographic:Z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Z,k:Z,k1:Z,k2:Z,k3:Z,k4:Z,kernelMatrix:Bn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Z,overlineThickness:Z,paintOrder:null,panose1:null,path:null,pathLength:Z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Z,pointsAtY:Z,pointsAtZ:Z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Bn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Bn,rev:Bn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Bn,requiredFeatures:Bn,requiredFonts:Bn,requiredFormats:Bn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Z,specularExponent:Z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Z,strikethroughThickness:Z,string:null,stroke:null,strokeDashArray:Bn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Z,strokeOpacity:Z,strokeWidth:null,style:null,surfaceScale:Z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Bn,tabIndex:Z,tableValues:null,target:null,targetX:Z,targetY:Z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Bn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Z,underlineThickness:Z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Z,values:null,vAlphabetic:Z,vMathematical:Z,vectorEffect:null,vHanging:Z,vIdeographic:Z,version:null,vertAdvY:Z,vertOriginX:Z,vertOriginY:Z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ty}),ay=Ea({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(l,i){return"xlink:"+i.slice(5).toLowerCase()}}),iy=Ea({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ly}),ry=Ea({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(l,i){return"xml:"+i.slice(3).toLowerCase()}}),c0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},f0=/[A-Z]/g,Pm=/-[a-z]/g,h0=/^data[-\w.:]+$/i;function d0(l,i){const r=lc(i);let u=i,c=_n;if(r in l.normal)return l.property[l.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&h0.test(i)){if(i.charAt(4)==="-"){const f=i.slice(5).replace(Pm,p0);u="data"+f.charAt(0).toUpperCase()+f.slice(1)}else{const f=i.slice(4);if(!Pm.test(f)){let h=f.replace(f0,m0);h.charAt(0)!=="-"&&(h="-"+h),i="data"+h}}c=wc}return new c(u,i)}function m0(l){return"-"+l.toLowerCase()}function p0(l){return l.charAt(1).toUpperCase()}const y0=ey([ny,o0,ay,iy,ry],"html"),Ec=ey([ny,s0,ay,iy,ry],"svg");function g0(l){return l.join(" ").trim()}var ga={},Gs,$m;function v0(){if($m)return Gs;$m=1;var l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,i=/\n/g,r=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,c=/^:\s*/,f=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,h=/^[;\s]*/,p=/^\s+|\s+$/g,y=`
`,m="/",g="*",v="",w="comment",S="declaration";function U(H,D){if(typeof H!="string")throw new TypeError("First argument must be a string");if(!H)return[];D=D||{};var X=1,V=1;function re(le){var F=le.match(i);F&&(X+=F.length);var R=le.lastIndexOf(y);V=~R?le.length-R:V+le.length}function ue(){var le={line:X,column:V};return function(F){return F.position=new B(le),fe(),F}}function B(le){this.start=le,this.end={line:X,column:V},this.source=D.source}B.prototype.content=H;function K(le){var F=new Error(D.source+":"+X+":"+V+": "+le);if(F.reason=le,F.filename=D.source,F.line=X,F.column=V,F.source=H,!D.silent)throw F}function ce(le){var F=le.exec(H);if(F){var R=F[0];return re(R),H=H.slice(R.length),F}}function fe(){ce(r)}function ye(le){var F;for(le=le||[];F=ee();)F!==!1&&le.push(F);return le}function ee(){var le=ue();if(!(m!=H.charAt(0)||g!=H.charAt(1))){for(var F=2;v!=H.charAt(F)&&(g!=H.charAt(F)||m!=H.charAt(F+1));)++F;if(F+=2,v===H.charAt(F-1))return K("End of comment missing");var R=H.slice(2,F-2);return V+=2,re(R),H=H.slice(F),V+=2,le({type:w,comment:R})}}function P(){var le=ue(),F=ce(u);if(F){if(ee(),!ce(c))return K("property missing ':'");var R=ce(f),Q=le({type:S,property:L(F[0].replace(l,v)),value:R?L(R[0].replace(l,v)):v});return ce(h),Q}}function Ae(){var le=[];ye(le);for(var F;F=P();)F!==!1&&(le.push(F),ye(le));return le}return fe(),Ae()}function L(H){return H?H.replace(p,v):v}return Gs=U,Gs}var ep;function b0(){if(ep)return ga;ep=1;var l=ga&&ga.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(ga,"__esModule",{value:!0}),ga.default=r;const i=l(v0());function r(u,c){let f=null;if(!u||typeof u!="string")return f;const h=(0,i.default)(u),p=typeof c=="function";return h.forEach(y=>{if(y.type!=="declaration")return;const{property:m,value:g}=y;p?c(m,g,y):g&&(f=f||{},f[m]=g)}),f}return ga}var xi={},np;function S0(){if(np)return xi;np=1,Object.defineProperty(xi,"__esModule",{value:!0}),xi.camelCase=void 0;var l=/^--[a-zA-Z0-9_-]+$/,i=/-([a-z])/g,r=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,c=/^-(ms)-/,f=function(m){return!m||r.test(m)||l.test(m)},h=function(m,g){return g.toUpperCase()},p=function(m,g){return"".concat(g,"-")},y=function(m,g){return g===void 0&&(g={}),f(m)?m:(m=m.toLowerCase(),g.reactCompat?m=m.replace(c,p):m=m.replace(u,p),m.replace(i,h))};return xi.camelCase=y,xi}var wi,tp;function x0(){if(tp)return wi;tp=1;var l=wi&&wi.__importDefault||function(c){return c&&c.__esModule?c:{default:c}},i=l(b0()),r=S0();function u(c,f){var h={};return!c||typeof c!="string"||(0,i.default)(c,function(p,y){p&&y&&(h[(0,r.camelCase)(p,f)]=y)}),h}return u.default=u,wi=u,wi}var w0=x0();const E0=su(w0),uy=oy("end"),Tc=oy("start");function oy(l){return i;function i(r){const u=r&&r.position&&r.position[l]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function T0(l){const i=Tc(l),r=uy(l);if(i&&r)return{start:i,end:r}}function Ci(l){return!l||typeof l!="object"?"":"position"in l||"type"in l?lp(l.position):"start"in l||"end"in l?lp(l):"line"in l||"column"in l?rc(l):""}function rc(l){return ap(l&&l.line)+":"+ap(l&&l.column)}function lp(l){return rc(l&&l.start)+"-"+rc(l&&l.end)}function ap(l){return l&&typeof l=="number"?l:1}class pn extends Error{constructor(i,r,u){super(),typeof r=="string"&&(u=r,r=void 0);let c="",f={},h=!1;if(r&&("line"in r&&"column"in r?f={place:r}:"start"in r&&"end"in r?f={place:r}:"type"in r?f={ancestors:[r],place:r.position}:f={...r}),typeof i=="string"?c=i:!f.cause&&i&&(h=!0,c=i.message,f.cause=i),!f.ruleId&&!f.source&&typeof u=="string"){const y=u.indexOf(":");y===-1?f.ruleId=u:(f.source=u.slice(0,y),f.ruleId=u.slice(y+1))}if(!f.place&&f.ancestors&&f.ancestors){const y=f.ancestors[f.ancestors.length-1];y&&(f.place=y.position)}const p=f.place&&"start"in f.place?f.place.start:f.place;this.ancestors=f.ancestors||void 0,this.cause=f.cause||void 0,this.column=p?p.column:void 0,this.fatal=void 0,this.file="",this.message=c,this.line=p?p.line:void 0,this.name=Ci(f.place)||"1:1",this.place=f.place||void 0,this.reason=this.message,this.ruleId=f.ruleId||void 0,this.source=f.source||void 0,this.stack=h&&f.cause&&typeof f.cause.stack=="string"?f.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}pn.prototype.file="";pn.prototype.name="";pn.prototype.reason="";pn.prototype.message="";pn.prototype.stack="";pn.prototype.column=void 0;pn.prototype.line=void 0;pn.prototype.ancestors=void 0;pn.prototype.cause=void 0;pn.prototype.fatal=void 0;pn.prototype.place=void 0;pn.prototype.ruleId=void 0;pn.prototype.source=void 0;const Cc={}.hasOwnProperty,C0=new Map,k0=/[A-Z]/g,A0=new Set(["table","tbody","thead","tfoot","tr"]),z0=new Set(["td","th"]),sy="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function _0(l,i){if(!i||i.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=i.filePath||void 0;let u;if(i.development){if(typeof i.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=H0(r,i.jsxDEV)}else{if(typeof i.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof i.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=U0(r,i.jsx,i.jsxs)}const c={Fragment:i.Fragment,ancestors:[],components:i.components||{},create:u,elementAttributeNameCase:i.elementAttributeNameCase||"react",evaluater:i.createEvaluater?i.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:i.ignoreInvalidStyle||!1,passKeys:i.passKeys!==!1,passNode:i.passNode||!1,schema:i.space==="svg"?Ec:y0,stylePropertyNameCase:i.stylePropertyNameCase||"dom",tableCellAlignToStyle:i.tableCellAlignToStyle!==!1},f=cy(c,l,void 0);return f&&typeof f!="string"?f:c.create(l,c.Fragment,{children:f||void 0},void 0)}function cy(l,i,r){if(i.type==="element")return M0(l,i,r);if(i.type==="mdxFlowExpression"||i.type==="mdxTextExpression")return R0(l,i);if(i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement")return O0(l,i,r);if(i.type==="mdxjsEsm")return D0(l,i);if(i.type==="root")return L0(l,i,r);if(i.type==="text")return N0(l,i)}function M0(l,i,r){const u=l.schema;let c=u;i.tagName.toLowerCase()==="svg"&&u.space==="html"&&(c=Ec,l.schema=c),l.ancestors.push(i);const f=hy(l,i.tagName,!1),h=B0(l,i);let p=Ac(l,i);return A0.has(i.tagName)&&(p=p.filter(function(y){return typeof y=="string"?!r0(y):!0})),fy(l,h,f,i),kc(h,p),l.ancestors.pop(),l.schema=u,l.create(i,f,h,r)}function R0(l,i){if(i.data&&i.data.estree&&l.evaluater){const u=i.data.estree.body[0];return u.type,l.evaluater.evaluateExpression(u.expression)}_i(l,i.position)}function D0(l,i){if(i.data&&i.data.estree&&l.evaluater)return l.evaluater.evaluateProgram(i.data.estree);_i(l,i.position)}function O0(l,i,r){const u=l.schema;let c=u;i.name==="svg"&&u.space==="html"&&(c=Ec,l.schema=c),l.ancestors.push(i);const f=i.name===null?l.Fragment:hy(l,i.name,!0),h=q0(l,i),p=Ac(l,i);return fy(l,h,f,i),kc(h,p),l.ancestors.pop(),l.schema=u,l.create(i,f,h,r)}function L0(l,i,r){const u={};return kc(u,Ac(l,i)),l.create(i,l.Fragment,u,r)}function N0(l,i){return i.value}function fy(l,i,r,u){typeof r!="string"&&r!==l.Fragment&&l.passNode&&(i.node=u)}function kc(l,i){if(i.length>0){const r=i.length>1?i:i[0];r&&(l.children=r)}}function U0(l,i,r){return u;function u(c,f,h,p){const m=Array.isArray(h.children)?r:i;return p?m(f,h,p):m(f,h)}}function H0(l,i){return r;function r(u,c,f,h){const p=Array.isArray(f.children),y=Tc(u);return i(c,f,h,p,{columnNumber:y?y.column-1:void 0,fileName:l,lineNumber:y?y.line:void 0},void 0)}}function B0(l,i){const r={};let u,c;for(c in i.properties)if(c!=="children"&&Cc.call(i.properties,c)){const f=j0(l,c,i.properties[c]);if(f){const[h,p]=f;l.tableCellAlignToStyle&&h==="align"&&typeof p=="string"&&z0.has(i.tagName)?u=p:r[h]=p}}if(u){const f=r.style||(r.style={});f[l.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return r}function q0(l,i){const r={};for(const u of i.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&l.evaluater){const f=u.data.estree.body[0];f.type;const h=f.expression;h.type;const p=h.properties[0];p.type,Object.assign(r,l.evaluater.evaluateExpression(p.argument))}else _i(l,i.position);else{const c=u.name;let f;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&l.evaluater){const p=u.value.data.estree.body[0];p.type,f=l.evaluater.evaluateExpression(p.expression)}else _i(l,i.position);else f=u.value===null?!0:u.value;r[c]=f}return r}function Ac(l,i){const r=[];let u=-1;const c=l.passKeys?new Map:C0;for(;++u<i.children.length;){const f=i.children[u];let h;if(l.passKeys){const y=f.type==="element"?f.tagName:f.type==="mdxJsxFlowElement"||f.type==="mdxJsxTextElement"?f.name:void 0;if(y){const m=c.get(y)||0;h=y+"-"+m,c.set(y,m+1)}}const p=cy(l,f,h);p!==void 0&&r.push(p)}return r}function j0(l,i,r){const u=d0(l.schema,i);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=u.commaSeparated?n0(r):g0(r)),u.property==="style"){let c=typeof r=="object"?r:Y0(l,String(r));return l.stylePropertyNameCase==="css"&&(c=G0(c)),["style",c]}return[l.elementAttributeNameCase==="react"&&u.space?c0[u.property]||u.property:u.attribute,r]}}function Y0(l,i){try{return E0(i,{reactCompat:!0})}catch(r){if(l.ignoreInvalidStyle)return{};const u=r,c=new pn("Cannot parse `style` attribute",{ancestors:l.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw c.file=l.filePath||void 0,c.url=sy+"#cannot-parse-style-attribute",c}}function hy(l,i,r){let u;if(!r)u={type:"Literal",value:i};else if(i.includes(".")){const c=i.split(".");let f=-1,h;for(;++f<c.length;){const p=Wm(c[f])?{type:"Identifier",name:c[f]}:{type:"Literal",value:c[f]};h=h?{type:"MemberExpression",object:h,property:p,computed:!!(f&&p.type==="Literal"),optional:!1}:p}u=h}else u=Wm(i)&&!/^[a-z]/.test(i)?{type:"Identifier",name:i}:{type:"Literal",value:i};if(u.type==="Literal"){const c=u.value;return Cc.call(l.components,c)?l.components[c]:c}if(l.evaluater)return l.evaluater.evaluateExpression(u);_i(l)}function _i(l,i){const r=new pn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:l.ancestors,place:i,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=l.filePath||void 0,r.url=sy+"#cannot-handle-mdx-estrees-without-createevaluater",r}function G0(l){const i={};let r;for(r in l)Cc.call(l,r)&&(i[I0(r)]=l[r]);return i}function I0(l){let i=l.replace(k0,V0);return i.slice(0,3)==="ms-"&&(i="-"+i),i}function V0(l){return"-"+l.toLowerCase()}const Is={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},X0={};function Q0(l,i){const r=X0,u=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,c=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return dy(l,u,c)}function dy(l,i,r){if(Z0(l)){if("value"in l)return l.type==="html"&&!r?"":l.value;if(i&&"alt"in l&&l.alt)return l.alt;if("children"in l)return ip(l.children,i,r)}return Array.isArray(l)?ip(l,i,r):""}function ip(l,i,r){const u=[];let c=-1;for(;++c<l.length;)u[c]=dy(l[c],i,r);return u.join("")}function Z0(l){return!!(l&&typeof l=="object")}const rp=document.createElement("i");function zc(l){const i="&"+l+";";rp.innerHTML=i;const r=rp.textContent;return r.charCodeAt(r.length-1)===59&&l!=="semi"||r===i?!1:r}function ft(l,i,r,u){const c=l.length;let f=0,h;if(i<0?i=-i>c?0:c+i:i=i>c?c:i,r=r>0?r:0,u.length<1e4)h=Array.from(u),h.unshift(i,r),l.splice(...h);else for(r&&l.splice(i,r);f<u.length;)h=u.slice(f,f+1e4),h.unshift(i,0),l.splice(...h),f+=1e4,i+=1e4}function $n(l,i){return l.length>0?(ft(l,l.length,0,i),l):i}const up={}.hasOwnProperty;function F0(l){const i={};let r=-1;for(;++r<l.length;)W0(i,l[r]);return i}function W0(l,i){let r;for(r in i){const c=(up.call(l,r)?l[r]:void 0)||(l[r]={}),f=i[r];let h;if(f)for(h in f){up.call(c,h)||(c[h]=[]);const p=f[h];K0(c[h],Array.isArray(p)?p:p?[p]:[])}}}function K0(l,i){let r=-1;const u=[];for(;++r<i.length;)(i[r].add==="after"?l:u).push(i[r]);ft(l,0,0,u)}function my(l,i){const r=Number.parseInt(l,i);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function Sa(l){return l.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ct=ol(/[A-Za-z]/),qn=ol(/[\dA-Za-z]/),J0=ol(/[#-'*+\--9=?A-Z^-~]/);function uc(l){return l!==null&&(l<32||l===127)}const oc=ol(/\d/),P0=ol(/[\dA-Fa-f]/),$0=ol(/[!-/:-@[-`{-~]/);function de(l){return l!==null&&l<-2}function zn(l){return l!==null&&(l<0||l===32)}function Re(l){return l===-2||l===-1||l===32}const eS=ol(new RegExp("\\p{P}|\\p{S}","u")),nS=ol(/\s/);function ol(l){return i;function i(r){return r!==null&&r>-1&&l.test(String.fromCharCode(r))}}function Ta(l){const i=[];let r=-1,u=0,c=0;for(;++r<l.length;){const f=l.charCodeAt(r);let h="";if(f===37&&qn(l.charCodeAt(r+1))&&qn(l.charCodeAt(r+2)))c=2;else if(f<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f))||(h=String.fromCharCode(f));else if(f>55295&&f<57344){const p=l.charCodeAt(r+1);f<56320&&p>56319&&p<57344?(h=String.fromCharCode(f,p),c=1):h="�"}else h=String.fromCharCode(f);h&&(i.push(l.slice(u,r),encodeURIComponent(h)),u=r+c+1,h=""),c&&(r+=c,c=0)}return i.join("")+l.slice(u)}function Ge(l,i,r,u){const c=u?u-1:Number.POSITIVE_INFINITY;let f=0;return h;function h(y){return Re(y)?(l.enter(r),p(y)):i(y)}function p(y){return Re(y)&&f++<c?(l.consume(y),p):(l.exit(r),i(y))}}const tS={tokenize:lS};function lS(l){const i=l.attempt(this.parser.constructs.contentInitial,u,c);let r;return i;function u(p){if(p===null){l.consume(p);return}return l.enter("lineEnding"),l.consume(p),l.exit("lineEnding"),Ge(l,i,"linePrefix")}function c(p){return l.enter("paragraph"),f(p)}function f(p){const y=l.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=y),r=y,h(p)}function h(p){if(p===null){l.exit("chunkText"),l.exit("paragraph"),l.consume(p);return}return de(p)?(l.consume(p),l.exit("chunkText"),f):(l.consume(p),h)}}const aS={tokenize:iS},op={tokenize:rS};function iS(l){const i=this,r=[];let u=0,c,f,h;return p;function p(V){if(u<r.length){const re=r[u];return i.containerState=re[1],l.attempt(re[0].continuation,y,m)(V)}return m(V)}function y(V){if(u++,i.containerState._closeFlow){i.containerState._closeFlow=void 0,c&&X();const re=i.events.length;let ue=re,B;for(;ue--;)if(i.events[ue][0]==="exit"&&i.events[ue][1].type==="chunkFlow"){B=i.events[ue][1].end;break}D(u);let K=re;for(;K<i.events.length;)i.events[K][1].end={...B},K++;return ft(i.events,ue+1,0,i.events.slice(re)),i.events.length=K,m(V)}return p(V)}function m(V){if(u===r.length){if(!c)return w(V);if(c.currentConstruct&&c.currentConstruct.concrete)return U(V);i.interrupt=!!(c.currentConstruct&&!c._gfmTableDynamicInterruptHack)}return i.containerState={},l.check(op,g,v)(V)}function g(V){return c&&X(),D(u),w(V)}function v(V){return i.parser.lazy[i.now().line]=u!==r.length,h=i.now().offset,U(V)}function w(V){return i.containerState={},l.attempt(op,S,U)(V)}function S(V){return u++,r.push([i.currentConstruct,i.containerState]),w(V)}function U(V){if(V===null){c&&X(),D(0),l.consume(V);return}return c=c||i.parser.flow(i.now()),l.enter("chunkFlow",{_tokenizer:c,contentType:"flow",previous:f}),L(V)}function L(V){if(V===null){H(l.exit("chunkFlow"),!0),D(0),l.consume(V);return}return de(V)?(l.consume(V),H(l.exit("chunkFlow")),u=0,i.interrupt=void 0,p):(l.consume(V),L)}function H(V,re){const ue=i.sliceStream(V);if(re&&ue.push(null),V.previous=f,f&&(f.next=V),f=V,c.defineSkip(V.start),c.write(ue),i.parser.lazy[V.start.line]){let B=c.events.length;for(;B--;)if(c.events[B][1].start.offset<h&&(!c.events[B][1].end||c.events[B][1].end.offset>h))return;const K=i.events.length;let ce=K,fe,ye;for(;ce--;)if(i.events[ce][0]==="exit"&&i.events[ce][1].type==="chunkFlow"){if(fe){ye=i.events[ce][1].end;break}fe=!0}for(D(u),B=K;B<i.events.length;)i.events[B][1].end={...ye},B++;ft(i.events,ce+1,0,i.events.slice(K)),i.events.length=B}}function D(V){let re=r.length;for(;re-- >V;){const ue=r[re];i.containerState=ue[1],ue[0].exit.call(i,l)}r.length=V}function X(){c.write([null]),f=void 0,c=void 0,i.containerState._closeFlow=void 0}}function rS(l,i,r){return Ge(l,l.attempt(this.parser.constructs.document,i,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function sp(l){if(l===null||zn(l)||nS(l))return 1;if(eS(l))return 2}function _c(l,i,r){const u=[];let c=-1;for(;++c<l.length;){const f=l[c].resolveAll;f&&!u.includes(f)&&(i=f(i,r),u.push(f))}return i}const sc={name:"attention",resolveAll:uS,tokenize:oS};function uS(l,i){let r=-1,u,c,f,h,p,y,m,g;for(;++r<l.length;)if(l[r][0]==="enter"&&l[r][1].type==="attentionSequence"&&l[r][1]._close){for(u=r;u--;)if(l[u][0]==="exit"&&l[u][1].type==="attentionSequence"&&l[u][1]._open&&i.sliceSerialize(l[u][1]).charCodeAt(0)===i.sliceSerialize(l[r][1]).charCodeAt(0)){if((l[u][1]._close||l[r][1]._open)&&(l[r][1].end.offset-l[r][1].start.offset)%3&&!((l[u][1].end.offset-l[u][1].start.offset+l[r][1].end.offset-l[r][1].start.offset)%3))continue;y=l[u][1].end.offset-l[u][1].start.offset>1&&l[r][1].end.offset-l[r][1].start.offset>1?2:1;const v={...l[u][1].end},w={...l[r][1].start};cp(v,-y),cp(w,y),h={type:y>1?"strongSequence":"emphasisSequence",start:v,end:{...l[u][1].end}},p={type:y>1?"strongSequence":"emphasisSequence",start:{...l[r][1].start},end:w},f={type:y>1?"strongText":"emphasisText",start:{...l[u][1].end},end:{...l[r][1].start}},c={type:y>1?"strong":"emphasis",start:{...h.start},end:{...p.end}},l[u][1].end={...h.start},l[r][1].start={...p.end},m=[],l[u][1].end.offset-l[u][1].start.offset&&(m=$n(m,[["enter",l[u][1],i],["exit",l[u][1],i]])),m=$n(m,[["enter",c,i],["enter",h,i],["exit",h,i],["enter",f,i]]),m=$n(m,_c(i.parser.constructs.insideSpan.null,l.slice(u+1,r),i)),m=$n(m,[["exit",f,i],["enter",p,i],["exit",p,i],["exit",c,i]]),l[r][1].end.offset-l[r][1].start.offset?(g=2,m=$n(m,[["enter",l[r][1],i],["exit",l[r][1],i]])):g=0,ft(l,u-1,r-u+3,m),r=u+m.length-g-2;break}}for(r=-1;++r<l.length;)l[r][1].type==="attentionSequence"&&(l[r][1].type="data");return l}function oS(l,i){const r=this.parser.constructs.attentionMarkers.null,u=this.previous,c=sp(u);let f;return h;function h(y){return f=y,l.enter("attentionSequence"),p(y)}function p(y){if(y===f)return l.consume(y),p;const m=l.exit("attentionSequence"),g=sp(y),v=!g||g===2&&c||r.includes(y),w=!c||c===2&&g||r.includes(u);return m._open=!!(f===42?v:v&&(c||!w)),m._close=!!(f===42?w:w&&(g||!v)),i(y)}}function cp(l,i){l.column+=i,l.offset+=i,l._bufferIndex+=i}const sS={name:"autolink",tokenize:cS};function cS(l,i,r){let u=0;return c;function c(S){return l.enter("autolink"),l.enter("autolinkMarker"),l.consume(S),l.exit("autolinkMarker"),l.enter("autolinkProtocol"),f}function f(S){return ct(S)?(l.consume(S),h):S===64?r(S):m(S)}function h(S){return S===43||S===45||S===46||qn(S)?(u=1,p(S)):m(S)}function p(S){return S===58?(l.consume(S),u=0,y):(S===43||S===45||S===46||qn(S))&&u++<32?(l.consume(S),p):(u=0,m(S))}function y(S){return S===62?(l.exit("autolinkProtocol"),l.enter("autolinkMarker"),l.consume(S),l.exit("autolinkMarker"),l.exit("autolink"),i):S===null||S===32||S===60||uc(S)?r(S):(l.consume(S),y)}function m(S){return S===64?(l.consume(S),g):J0(S)?(l.consume(S),m):r(S)}function g(S){return qn(S)?v(S):r(S)}function v(S){return S===46?(l.consume(S),u=0,g):S===62?(l.exit("autolinkProtocol").type="autolinkEmail",l.enter("autolinkMarker"),l.consume(S),l.exit("autolinkMarker"),l.exit("autolink"),i):w(S)}function w(S){if((S===45||qn(S))&&u++<63){const U=S===45?w:v;return l.consume(S),U}return r(S)}}const hu={partial:!0,tokenize:fS};function fS(l,i,r){return u;function u(f){return Re(f)?Ge(l,c,"linePrefix")(f):c(f)}function c(f){return f===null||de(f)?i(f):r(f)}}const py={continuation:{tokenize:dS},exit:mS,name:"blockQuote",tokenize:hS};function hS(l,i,r){const u=this;return c;function c(h){if(h===62){const p=u.containerState;return p.open||(l.enter("blockQuote",{_container:!0}),p.open=!0),l.enter("blockQuotePrefix"),l.enter("blockQuoteMarker"),l.consume(h),l.exit("blockQuoteMarker"),f}return r(h)}function f(h){return Re(h)?(l.enter("blockQuotePrefixWhitespace"),l.consume(h),l.exit("blockQuotePrefixWhitespace"),l.exit("blockQuotePrefix"),i):(l.exit("blockQuotePrefix"),i(h))}}function dS(l,i,r){const u=this;return c;function c(h){return Re(h)?Ge(l,f,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):f(h)}function f(h){return l.attempt(py,i,r)(h)}}function mS(l){l.exit("blockQuote")}const yy={name:"characterEscape",tokenize:pS};function pS(l,i,r){return u;function u(f){return l.enter("characterEscape"),l.enter("escapeMarker"),l.consume(f),l.exit("escapeMarker"),c}function c(f){return $0(f)?(l.enter("characterEscapeValue"),l.consume(f),l.exit("characterEscapeValue"),l.exit("characterEscape"),i):r(f)}}const gy={name:"characterReference",tokenize:yS};function yS(l,i,r){const u=this;let c=0,f,h;return p;function p(v){return l.enter("characterReference"),l.enter("characterReferenceMarker"),l.consume(v),l.exit("characterReferenceMarker"),y}function y(v){return v===35?(l.enter("characterReferenceMarkerNumeric"),l.consume(v),l.exit("characterReferenceMarkerNumeric"),m):(l.enter("characterReferenceValue"),f=31,h=qn,g(v))}function m(v){return v===88||v===120?(l.enter("characterReferenceMarkerHexadecimal"),l.consume(v),l.exit("characterReferenceMarkerHexadecimal"),l.enter("characterReferenceValue"),f=6,h=P0,g):(l.enter("characterReferenceValue"),f=7,h=oc,g(v))}function g(v){if(v===59&&c){const w=l.exit("characterReferenceValue");return h===qn&&!zc(u.sliceSerialize(w))?r(v):(l.enter("characterReferenceMarker"),l.consume(v),l.exit("characterReferenceMarker"),l.exit("characterReference"),i)}return h(v)&&c++<f?(l.consume(v),g):r(v)}}const fp={partial:!0,tokenize:vS},hp={concrete:!0,name:"codeFenced",tokenize:gS};function gS(l,i,r){const u=this,c={partial:!0,tokenize:ue};let f=0,h=0,p;return y;function y(B){return m(B)}function m(B){const K=u.events[u.events.length-1];return f=K&&K[1].type==="linePrefix"?K[2].sliceSerialize(K[1],!0).length:0,p=B,l.enter("codeFenced"),l.enter("codeFencedFence"),l.enter("codeFencedFenceSequence"),g(B)}function g(B){return B===p?(h++,l.consume(B),g):h<3?r(B):(l.exit("codeFencedFenceSequence"),Re(B)?Ge(l,v,"whitespace")(B):v(B))}function v(B){return B===null||de(B)?(l.exit("codeFencedFence"),u.interrupt?i(B):l.check(fp,L,re)(B)):(l.enter("codeFencedFenceInfo"),l.enter("chunkString",{contentType:"string"}),w(B))}function w(B){return B===null||de(B)?(l.exit("chunkString"),l.exit("codeFencedFenceInfo"),v(B)):Re(B)?(l.exit("chunkString"),l.exit("codeFencedFenceInfo"),Ge(l,S,"whitespace")(B)):B===96&&B===p?r(B):(l.consume(B),w)}function S(B){return B===null||de(B)?v(B):(l.enter("codeFencedFenceMeta"),l.enter("chunkString",{contentType:"string"}),U(B))}function U(B){return B===null||de(B)?(l.exit("chunkString"),l.exit("codeFencedFenceMeta"),v(B)):B===96&&B===p?r(B):(l.consume(B),U)}function L(B){return l.attempt(c,re,H)(B)}function H(B){return l.enter("lineEnding"),l.consume(B),l.exit("lineEnding"),D}function D(B){return f>0&&Re(B)?Ge(l,X,"linePrefix",f+1)(B):X(B)}function X(B){return B===null||de(B)?l.check(fp,L,re)(B):(l.enter("codeFlowValue"),V(B))}function V(B){return B===null||de(B)?(l.exit("codeFlowValue"),X(B)):(l.consume(B),V)}function re(B){return l.exit("codeFenced"),i(B)}function ue(B,K,ce){let fe=0;return ye;function ye(F){return B.enter("lineEnding"),B.consume(F),B.exit("lineEnding"),ee}function ee(F){return B.enter("codeFencedFence"),Re(F)?Ge(B,P,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):P(F)}function P(F){return F===p?(B.enter("codeFencedFenceSequence"),Ae(F)):ce(F)}function Ae(F){return F===p?(fe++,B.consume(F),Ae):fe>=h?(B.exit("codeFencedFenceSequence"),Re(F)?Ge(B,le,"whitespace")(F):le(F)):ce(F)}function le(F){return F===null||de(F)?(B.exit("codeFencedFence"),K(F)):ce(F)}}}function vS(l,i,r){const u=this;return c;function c(h){return h===null?r(h):(l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),f)}function f(h){return u.parser.lazy[u.now().line]?r(h):i(h)}}const Vs={name:"codeIndented",tokenize:SS},bS={partial:!0,tokenize:xS};function SS(l,i,r){const u=this;return c;function c(m){return l.enter("codeIndented"),Ge(l,f,"linePrefix",5)(m)}function f(m){const g=u.events[u.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?h(m):r(m)}function h(m){return m===null?y(m):de(m)?l.attempt(bS,h,y)(m):(l.enter("codeFlowValue"),p(m))}function p(m){return m===null||de(m)?(l.exit("codeFlowValue"),h(m)):(l.consume(m),p)}function y(m){return l.exit("codeIndented"),i(m)}}function xS(l,i,r){const u=this;return c;function c(h){return u.parser.lazy[u.now().line]?r(h):de(h)?(l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),c):Ge(l,f,"linePrefix",5)(h)}function f(h){const p=u.events[u.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?i(h):de(h)?c(h):r(h)}}const wS={name:"codeText",previous:TS,resolve:ES,tokenize:CS};function ES(l){let i=l.length-4,r=3,u,c;if((l[r][1].type==="lineEnding"||l[r][1].type==="space")&&(l[i][1].type==="lineEnding"||l[i][1].type==="space")){for(u=r;++u<i;)if(l[u][1].type==="codeTextData"){l[r][1].type="codeTextPadding",l[i][1].type="codeTextPadding",r+=2,i-=2;break}}for(u=r-1,i++;++u<=i;)c===void 0?u!==i&&l[u][1].type!=="lineEnding"&&(c=u):(u===i||l[u][1].type==="lineEnding")&&(l[c][1].type="codeTextData",u!==c+2&&(l[c][1].end=l[u-1][1].end,l.splice(c+2,u-c-2),i-=u-c-2,u=c+2),c=void 0);return l}function TS(l){return l!==96||this.events[this.events.length-1][1].type==="characterEscape"}function CS(l,i,r){let u=0,c,f;return h;function h(v){return l.enter("codeText"),l.enter("codeTextSequence"),p(v)}function p(v){return v===96?(l.consume(v),u++,p):(l.exit("codeTextSequence"),y(v))}function y(v){return v===null?r(v):v===32?(l.enter("space"),l.consume(v),l.exit("space"),y):v===96?(f=l.enter("codeTextSequence"),c=0,g(v)):de(v)?(l.enter("lineEnding"),l.consume(v),l.exit("lineEnding"),y):(l.enter("codeTextData"),m(v))}function m(v){return v===null||v===32||v===96||de(v)?(l.exit("codeTextData"),y(v)):(l.consume(v),m)}function g(v){return v===96?(l.consume(v),c++,g):c===u?(l.exit("codeTextSequence"),l.exit("codeText"),i(v)):(f.type="codeTextData",m(v))}}class kS{constructor(i){this.left=i?[...i]:[],this.right=[]}get(i){if(i<0||i>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+i+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return i<this.left.length?this.left[i]:this.right[this.right.length-i+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(i,r){const u=r??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(i,u):i>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-i+this.left.length).reverse():this.left.slice(i).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(i,r,u){const c=r||0;this.setCursor(Math.trunc(i));const f=this.right.splice(this.right.length-c,Number.POSITIVE_INFINITY);return u&&Ei(this.left,u),f.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(i){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(i)}pushMany(i){this.setCursor(Number.POSITIVE_INFINITY),Ei(this.left,i)}unshift(i){this.setCursor(0),this.right.push(i)}unshiftMany(i){this.setCursor(0),Ei(this.right,i.reverse())}setCursor(i){if(!(i===this.left.length||i>this.left.length&&this.right.length===0||i<0&&this.left.length===0))if(i<this.left.length){const r=this.left.splice(i,Number.POSITIVE_INFINITY);Ei(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-i,Number.POSITIVE_INFINITY);Ei(this.left,r.reverse())}}}function Ei(l,i){let r=0;if(i.length<1e4)l.push(...i);else for(;r<i.length;)l.push(...i.slice(r,r+1e4)),r+=1e4}function vy(l){const i={};let r=-1,u,c,f,h,p,y,m;const g=new kS(l);for(;++r<g.length;){for(;r in i;)r=i[r];if(u=g.get(r),r&&u[1].type==="chunkFlow"&&g.get(r-1)[1].type==="listItemPrefix"&&(y=u[1]._tokenizer.events,f=0,f<y.length&&y[f][1].type==="lineEndingBlank"&&(f+=2),f<y.length&&y[f][1].type==="content"))for(;++f<y.length&&y[f][1].type!=="content";)y[f][1].type==="chunkText"&&(y[f][1]._isInFirstContentOfListItem=!0,f++);if(u[0]==="enter")u[1].contentType&&(Object.assign(i,AS(g,r)),r=i[r],m=!0);else if(u[1]._container){for(f=r,c=void 0;f--;)if(h=g.get(f),h[1].type==="lineEnding"||h[1].type==="lineEndingBlank")h[0]==="enter"&&(c&&(g.get(c)[1].type="lineEndingBlank"),h[1].type="lineEnding",c=f);else if(!(h[1].type==="linePrefix"||h[1].type==="listItemIndent"))break;c&&(u[1].end={...g.get(c)[1].start},p=g.slice(c,r),p.unshift(u),g.splice(c,r-c+1,p))}}return ft(l,0,Number.POSITIVE_INFINITY,g.slice(0)),!m}function AS(l,i){const r=l.get(i)[1],u=l.get(i)[2];let c=i-1;const f=[];let h=r._tokenizer;h||(h=u.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(h._contentTypeTextTrailing=!0));const p=h.events,y=[],m={};let g,v,w=-1,S=r,U=0,L=0;const H=[L];for(;S;){for(;l.get(++c)[1]!==S;);f.push(c),S._tokenizer||(g=u.sliceStream(S),S.next||g.push(null),v&&h.defineSkip(S.start),S._isInFirstContentOfListItem&&(h._gfmTasklistFirstContentOfListItem=!0),h.write(g),S._isInFirstContentOfListItem&&(h._gfmTasklistFirstContentOfListItem=void 0)),v=S,S=S.next}for(S=r;++w<p.length;)p[w][0]==="exit"&&p[w-1][0]==="enter"&&p[w][1].type===p[w-1][1].type&&p[w][1].start.line!==p[w][1].end.line&&(L=w+1,H.push(L),S._tokenizer=void 0,S.previous=void 0,S=S.next);for(h.events=[],S?(S._tokenizer=void 0,S.previous=void 0):H.pop(),w=H.length;w--;){const D=p.slice(H[w],H[w+1]),X=f.pop();y.push([X,X+D.length-1]),l.splice(X,2,D)}for(y.reverse(),w=-1;++w<y.length;)m[U+y[w][0]]=U+y[w][1],U+=y[w][1]-y[w][0]-1;return m}const zS={resolve:MS,tokenize:RS},_S={partial:!0,tokenize:DS};function MS(l){return vy(l),l}function RS(l,i){let r;return u;function u(p){return l.enter("content"),r=l.enter("chunkContent",{contentType:"content"}),c(p)}function c(p){return p===null?f(p):de(p)?l.check(_S,h,f)(p):(l.consume(p),c)}function f(p){return l.exit("chunkContent"),l.exit("content"),i(p)}function h(p){return l.consume(p),l.exit("chunkContent"),r.next=l.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,c}}function DS(l,i,r){const u=this;return c;function c(h){return l.exit("chunkContent"),l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),Ge(l,f,"linePrefix")}function f(h){if(h===null||de(h))return r(h);const p=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?i(h):l.interrupt(u.parser.constructs.flow,r,i)(h)}}function by(l,i,r,u,c,f,h,p,y){const m=y||Number.POSITIVE_INFINITY;let g=0;return v;function v(D){return D===60?(l.enter(u),l.enter(c),l.enter(f),l.consume(D),l.exit(f),w):D===null||D===32||D===41||uc(D)?r(D):(l.enter(u),l.enter(h),l.enter(p),l.enter("chunkString",{contentType:"string"}),L(D))}function w(D){return D===62?(l.enter(f),l.consume(D),l.exit(f),l.exit(c),l.exit(u),i):(l.enter(p),l.enter("chunkString",{contentType:"string"}),S(D))}function S(D){return D===62?(l.exit("chunkString"),l.exit(p),w(D)):D===null||D===60||de(D)?r(D):(l.consume(D),D===92?U:S)}function U(D){return D===60||D===62||D===92?(l.consume(D),S):S(D)}function L(D){return!g&&(D===null||D===41||zn(D))?(l.exit("chunkString"),l.exit(p),l.exit(h),l.exit(u),i(D)):g<m&&D===40?(l.consume(D),g++,L):D===41?(l.consume(D),g--,L):D===null||D===32||D===40||uc(D)?r(D):(l.consume(D),D===92?H:L)}function H(D){return D===40||D===41||D===92?(l.consume(D),L):L(D)}}function Sy(l,i,r,u,c,f){const h=this;let p=0,y;return m;function m(S){return l.enter(u),l.enter(c),l.consume(S),l.exit(c),l.enter(f),g}function g(S){return p>999||S===null||S===91||S===93&&!y||S===94&&!p&&"_hiddenFootnoteSupport"in h.parser.constructs?r(S):S===93?(l.exit(f),l.enter(c),l.consume(S),l.exit(c),l.exit(u),i):de(S)?(l.enter("lineEnding"),l.consume(S),l.exit("lineEnding"),g):(l.enter("chunkString",{contentType:"string"}),v(S))}function v(S){return S===null||S===91||S===93||de(S)||p++>999?(l.exit("chunkString"),g(S)):(l.consume(S),y||(y=!Re(S)),S===92?w:v)}function w(S){return S===91||S===92||S===93?(l.consume(S),p++,v):v(S)}}function xy(l,i,r,u,c,f){let h;return p;function p(w){return w===34||w===39||w===40?(l.enter(u),l.enter(c),l.consume(w),l.exit(c),h=w===40?41:w,y):r(w)}function y(w){return w===h?(l.enter(c),l.consume(w),l.exit(c),l.exit(u),i):(l.enter(f),m(w))}function m(w){return w===h?(l.exit(f),y(h)):w===null?r(w):de(w)?(l.enter("lineEnding"),l.consume(w),l.exit("lineEnding"),Ge(l,m,"linePrefix")):(l.enter("chunkString",{contentType:"string"}),g(w))}function g(w){return w===h||w===null||de(w)?(l.exit("chunkString"),m(w)):(l.consume(w),w===92?v:g)}function v(w){return w===h||w===92?(l.consume(w),g):g(w)}}function ki(l,i){let r;return u;function u(c){return de(c)?(l.enter("lineEnding"),l.consume(c),l.exit("lineEnding"),r=!0,u):Re(c)?Ge(l,u,r?"linePrefix":"lineSuffix")(c):i(c)}}const OS={name:"definition",tokenize:NS},LS={partial:!0,tokenize:US};function NS(l,i,r){const u=this;let c;return f;function f(S){return l.enter("definition"),h(S)}function h(S){return Sy.call(u,l,p,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(S)}function p(S){return c=Sa(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),S===58?(l.enter("definitionMarker"),l.consume(S),l.exit("definitionMarker"),y):r(S)}function y(S){return zn(S)?ki(l,m)(S):m(S)}function m(S){return by(l,g,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(S)}function g(S){return l.attempt(LS,v,v)(S)}function v(S){return Re(S)?Ge(l,w,"whitespace")(S):w(S)}function w(S){return S===null||de(S)?(l.exit("definition"),u.parser.defined.push(c),i(S)):r(S)}}function US(l,i,r){return u;function u(p){return zn(p)?ki(l,c)(p):r(p)}function c(p){return xy(l,f,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(p)}function f(p){return Re(p)?Ge(l,h,"whitespace")(p):h(p)}function h(p){return p===null||de(p)?i(p):r(p)}}const HS={name:"hardBreakEscape",tokenize:BS};function BS(l,i,r){return u;function u(f){return l.enter("hardBreakEscape"),l.consume(f),c}function c(f){return de(f)?(l.exit("hardBreakEscape"),i(f)):r(f)}}const qS={name:"headingAtx",resolve:jS,tokenize:YS};function jS(l,i){let r=l.length-2,u=3,c,f;return l[u][1].type==="whitespace"&&(u+=2),r-2>u&&l[r][1].type==="whitespace"&&(r-=2),l[r][1].type==="atxHeadingSequence"&&(u===r-1||r-4>u&&l[r-2][1].type==="whitespace")&&(r-=u+1===r?2:4),r>u&&(c={type:"atxHeadingText",start:l[u][1].start,end:l[r][1].end},f={type:"chunkText",start:l[u][1].start,end:l[r][1].end,contentType:"text"},ft(l,u,r-u+1,[["enter",c,i],["enter",f,i],["exit",f,i],["exit",c,i]])),l}function YS(l,i,r){let u=0;return c;function c(g){return l.enter("atxHeading"),f(g)}function f(g){return l.enter("atxHeadingSequence"),h(g)}function h(g){return g===35&&u++<6?(l.consume(g),h):g===null||zn(g)?(l.exit("atxHeadingSequence"),p(g)):r(g)}function p(g){return g===35?(l.enter("atxHeadingSequence"),y(g)):g===null||de(g)?(l.exit("atxHeading"),i(g)):Re(g)?Ge(l,p,"whitespace")(g):(l.enter("atxHeadingText"),m(g))}function y(g){return g===35?(l.consume(g),y):(l.exit("atxHeadingSequence"),p(g))}function m(g){return g===null||g===35||zn(g)?(l.exit("atxHeadingText"),p(g)):(l.consume(g),m)}}const GS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],dp=["pre","script","style","textarea"],IS={concrete:!0,name:"htmlFlow",resolveTo:QS,tokenize:ZS},VS={partial:!0,tokenize:WS},XS={partial:!0,tokenize:FS};function QS(l){let i=l.length;for(;i--&&!(l[i][0]==="enter"&&l[i][1].type==="htmlFlow"););return i>1&&l[i-2][1].type==="linePrefix"&&(l[i][1].start=l[i-2][1].start,l[i+1][1].start=l[i-2][1].start,l.splice(i-2,2)),l}function ZS(l,i,r){const u=this;let c,f,h,p,y;return m;function m(x){return g(x)}function g(x){return l.enter("htmlFlow"),l.enter("htmlFlowData"),l.consume(x),v}function v(x){return x===33?(l.consume(x),w):x===47?(l.consume(x),f=!0,L):x===63?(l.consume(x),c=3,u.interrupt?i:E):ct(x)?(l.consume(x),h=String.fromCharCode(x),H):r(x)}function w(x){return x===45?(l.consume(x),c=2,S):x===91?(l.consume(x),c=5,p=0,U):ct(x)?(l.consume(x),c=4,u.interrupt?i:E):r(x)}function S(x){return x===45?(l.consume(x),u.interrupt?i:E):r(x)}function U(x){const J="CDATA[";return x===J.charCodeAt(p++)?(l.consume(x),p===J.length?u.interrupt?i:P:U):r(x)}function L(x){return ct(x)?(l.consume(x),h=String.fromCharCode(x),H):r(x)}function H(x){if(x===null||x===47||x===62||zn(x)){const J=x===47,se=h.toLowerCase();return!J&&!f&&dp.includes(se)?(c=1,u.interrupt?i(x):P(x)):GS.includes(h.toLowerCase())?(c=6,J?(l.consume(x),D):u.interrupt?i(x):P(x)):(c=7,u.interrupt&&!u.parser.lazy[u.now().line]?r(x):f?X(x):V(x))}return x===45||qn(x)?(l.consume(x),h+=String.fromCharCode(x),H):r(x)}function D(x){return x===62?(l.consume(x),u.interrupt?i:P):r(x)}function X(x){return Re(x)?(l.consume(x),X):ye(x)}function V(x){return x===47?(l.consume(x),ye):x===58||x===95||ct(x)?(l.consume(x),re):Re(x)?(l.consume(x),V):ye(x)}function re(x){return x===45||x===46||x===58||x===95||qn(x)?(l.consume(x),re):ue(x)}function ue(x){return x===61?(l.consume(x),B):Re(x)?(l.consume(x),ue):V(x)}function B(x){return x===null||x===60||x===61||x===62||x===96?r(x):x===34||x===39?(l.consume(x),y=x,K):Re(x)?(l.consume(x),B):ce(x)}function K(x){return x===y?(l.consume(x),y=null,fe):x===null||de(x)?r(x):(l.consume(x),K)}function ce(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||zn(x)?ue(x):(l.consume(x),ce)}function fe(x){return x===47||x===62||Re(x)?V(x):r(x)}function ye(x){return x===62?(l.consume(x),ee):r(x)}function ee(x){return x===null||de(x)?P(x):Re(x)?(l.consume(x),ee):r(x)}function P(x){return x===45&&c===2?(l.consume(x),R):x===60&&c===1?(l.consume(x),Q):x===62&&c===4?(l.consume(x),C):x===63&&c===3?(l.consume(x),E):x===93&&c===5?(l.consume(x),be):de(x)&&(c===6||c===7)?(l.exit("htmlFlowData"),l.check(VS,q,Ae)(x)):x===null||de(x)?(l.exit("htmlFlowData"),Ae(x)):(l.consume(x),P)}function Ae(x){return l.check(XS,le,q)(x)}function le(x){return l.enter("lineEnding"),l.consume(x),l.exit("lineEnding"),F}function F(x){return x===null||de(x)?Ae(x):(l.enter("htmlFlowData"),P(x))}function R(x){return x===45?(l.consume(x),E):P(x)}function Q(x){return x===47?(l.consume(x),h="",te):P(x)}function te(x){if(x===62){const J=h.toLowerCase();return dp.includes(J)?(l.consume(x),C):P(x)}return ct(x)&&h.length<8?(l.consume(x),h+=String.fromCharCode(x),te):P(x)}function be(x){return x===93?(l.consume(x),E):P(x)}function E(x){return x===62?(l.consume(x),C):x===45&&c===2?(l.consume(x),E):P(x)}function C(x){return x===null||de(x)?(l.exit("htmlFlowData"),q(x)):(l.consume(x),C)}function q(x){return l.exit("htmlFlow"),i(x)}}function FS(l,i,r){const u=this;return c;function c(h){return de(h)?(l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),f):r(h)}function f(h){return u.parser.lazy[u.now().line]?r(h):i(h)}}function WS(l,i,r){return u;function u(c){return l.enter("lineEnding"),l.consume(c),l.exit("lineEnding"),l.attempt(hu,i,r)}}const KS={name:"htmlText",tokenize:JS};function JS(l,i,r){const u=this;let c,f,h;return p;function p(E){return l.enter("htmlText"),l.enter("htmlTextData"),l.consume(E),y}function y(E){return E===33?(l.consume(E),m):E===47?(l.consume(E),ue):E===63?(l.consume(E),V):ct(E)?(l.consume(E),ce):r(E)}function m(E){return E===45?(l.consume(E),g):E===91?(l.consume(E),f=0,U):ct(E)?(l.consume(E),X):r(E)}function g(E){return E===45?(l.consume(E),S):r(E)}function v(E){return E===null?r(E):E===45?(l.consume(E),w):de(E)?(h=v,Q(E)):(l.consume(E),v)}function w(E){return E===45?(l.consume(E),S):v(E)}function S(E){return E===62?R(E):E===45?w(E):v(E)}function U(E){const C="CDATA[";return E===C.charCodeAt(f++)?(l.consume(E),f===C.length?L:U):r(E)}function L(E){return E===null?r(E):E===93?(l.consume(E),H):de(E)?(h=L,Q(E)):(l.consume(E),L)}function H(E){return E===93?(l.consume(E),D):L(E)}function D(E){return E===62?R(E):E===93?(l.consume(E),D):L(E)}function X(E){return E===null||E===62?R(E):de(E)?(h=X,Q(E)):(l.consume(E),X)}function V(E){return E===null?r(E):E===63?(l.consume(E),re):de(E)?(h=V,Q(E)):(l.consume(E),V)}function re(E){return E===62?R(E):V(E)}function ue(E){return ct(E)?(l.consume(E),B):r(E)}function B(E){return E===45||qn(E)?(l.consume(E),B):K(E)}function K(E){return de(E)?(h=K,Q(E)):Re(E)?(l.consume(E),K):R(E)}function ce(E){return E===45||qn(E)?(l.consume(E),ce):E===47||E===62||zn(E)?fe(E):r(E)}function fe(E){return E===47?(l.consume(E),R):E===58||E===95||ct(E)?(l.consume(E),ye):de(E)?(h=fe,Q(E)):Re(E)?(l.consume(E),fe):R(E)}function ye(E){return E===45||E===46||E===58||E===95||qn(E)?(l.consume(E),ye):ee(E)}function ee(E){return E===61?(l.consume(E),P):de(E)?(h=ee,Q(E)):Re(E)?(l.consume(E),ee):fe(E)}function P(E){return E===null||E===60||E===61||E===62||E===96?r(E):E===34||E===39?(l.consume(E),c=E,Ae):de(E)?(h=P,Q(E)):Re(E)?(l.consume(E),P):(l.consume(E),le)}function Ae(E){return E===c?(l.consume(E),c=void 0,F):E===null?r(E):de(E)?(h=Ae,Q(E)):(l.consume(E),Ae)}function le(E){return E===null||E===34||E===39||E===60||E===61||E===96?r(E):E===47||E===62||zn(E)?fe(E):(l.consume(E),le)}function F(E){return E===47||E===62||zn(E)?fe(E):r(E)}function R(E){return E===62?(l.consume(E),l.exit("htmlTextData"),l.exit("htmlText"),i):r(E)}function Q(E){return l.exit("htmlTextData"),l.enter("lineEnding"),l.consume(E),l.exit("lineEnding"),te}function te(E){return Re(E)?Ge(l,be,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):be(E)}function be(E){return l.enter("htmlTextData"),h(E)}}const Mc={name:"labelEnd",resolveAll:nx,resolveTo:tx,tokenize:lx},PS={tokenize:ax},$S={tokenize:ix},ex={tokenize:rx};function nx(l){let i=-1;const r=[];for(;++i<l.length;){const u=l[i][1];if(r.push(l[i]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const c=u.type==="labelImage"?4:2;u.type="data",i+=c}}return l.length!==r.length&&ft(l,0,l.length,r),l}function tx(l,i){let r=l.length,u=0,c,f,h,p;for(;r--;)if(c=l[r][1],f){if(c.type==="link"||c.type==="labelLink"&&c._inactive)break;l[r][0]==="enter"&&c.type==="labelLink"&&(c._inactive=!0)}else if(h){if(l[r][0]==="enter"&&(c.type==="labelImage"||c.type==="labelLink")&&!c._balanced&&(f=r,c.type!=="labelLink")){u=2;break}}else c.type==="labelEnd"&&(h=r);const y={type:l[f][1].type==="labelLink"?"link":"image",start:{...l[f][1].start},end:{...l[l.length-1][1].end}},m={type:"label",start:{...l[f][1].start},end:{...l[h][1].end}},g={type:"labelText",start:{...l[f+u+2][1].end},end:{...l[h-2][1].start}};return p=[["enter",y,i],["enter",m,i]],p=$n(p,l.slice(f+1,f+u+3)),p=$n(p,[["enter",g,i]]),p=$n(p,_c(i.parser.constructs.insideSpan.null,l.slice(f+u+4,h-3),i)),p=$n(p,[["exit",g,i],l[h-2],l[h-1],["exit",m,i]]),p=$n(p,l.slice(h+1)),p=$n(p,[["exit",y,i]]),ft(l,f,l.length,p),l}function lx(l,i,r){const u=this;let c=u.events.length,f,h;for(;c--;)if((u.events[c][1].type==="labelImage"||u.events[c][1].type==="labelLink")&&!u.events[c][1]._balanced){f=u.events[c][1];break}return p;function p(w){return f?f._inactive?v(w):(h=u.parser.defined.includes(Sa(u.sliceSerialize({start:f.end,end:u.now()}))),l.enter("labelEnd"),l.enter("labelMarker"),l.consume(w),l.exit("labelMarker"),l.exit("labelEnd"),y):r(w)}function y(w){return w===40?l.attempt(PS,g,h?g:v)(w):w===91?l.attempt($S,g,h?m:v)(w):h?g(w):v(w)}function m(w){return l.attempt(ex,g,v)(w)}function g(w){return i(w)}function v(w){return f._balanced=!0,r(w)}}function ax(l,i,r){return u;function u(v){return l.enter("resource"),l.enter("resourceMarker"),l.consume(v),l.exit("resourceMarker"),c}function c(v){return zn(v)?ki(l,f)(v):f(v)}function f(v){return v===41?g(v):by(l,h,p,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(v)}function h(v){return zn(v)?ki(l,y)(v):g(v)}function p(v){return r(v)}function y(v){return v===34||v===39||v===40?xy(l,m,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(v):g(v)}function m(v){return zn(v)?ki(l,g)(v):g(v)}function g(v){return v===41?(l.enter("resourceMarker"),l.consume(v),l.exit("resourceMarker"),l.exit("resource"),i):r(v)}}function ix(l,i,r){const u=this;return c;function c(p){return Sy.call(u,l,f,h,"reference","referenceMarker","referenceString")(p)}function f(p){return u.parser.defined.includes(Sa(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?i(p):r(p)}function h(p){return r(p)}}function rx(l,i,r){return u;function u(f){return l.enter("reference"),l.enter("referenceMarker"),l.consume(f),l.exit("referenceMarker"),c}function c(f){return f===93?(l.enter("referenceMarker"),l.consume(f),l.exit("referenceMarker"),l.exit("reference"),i):r(f)}}const ux={name:"labelStartImage",resolveAll:Mc.resolveAll,tokenize:ox};function ox(l,i,r){const u=this;return c;function c(p){return l.enter("labelImage"),l.enter("labelImageMarker"),l.consume(p),l.exit("labelImageMarker"),f}function f(p){return p===91?(l.enter("labelMarker"),l.consume(p),l.exit("labelMarker"),l.exit("labelImage"),h):r(p)}function h(p){return p===94&&"_hiddenFootnoteSupport"in u.parser.constructs?r(p):i(p)}}const sx={name:"labelStartLink",resolveAll:Mc.resolveAll,tokenize:cx};function cx(l,i,r){const u=this;return c;function c(h){return l.enter("labelLink"),l.enter("labelMarker"),l.consume(h),l.exit("labelMarker"),l.exit("labelLink"),f}function f(h){return h===94&&"_hiddenFootnoteSupport"in u.parser.constructs?r(h):i(h)}}const Xs={name:"lineEnding",tokenize:fx};function fx(l,i){return r;function r(u){return l.enter("lineEnding"),l.consume(u),l.exit("lineEnding"),Ge(l,i,"linePrefix")}}const iu={name:"thematicBreak",tokenize:hx};function hx(l,i,r){let u=0,c;return f;function f(m){return l.enter("thematicBreak"),h(m)}function h(m){return c=m,p(m)}function p(m){return m===c?(l.enter("thematicBreakSequence"),y(m)):u>=3&&(m===null||de(m))?(l.exit("thematicBreak"),i(m)):r(m)}function y(m){return m===c?(l.consume(m),u++,y):(l.exit("thematicBreakSequence"),Re(m)?Ge(l,p,"whitespace")(m):p(m))}}const An={continuation:{tokenize:yx},exit:vx,name:"list",tokenize:px},dx={partial:!0,tokenize:bx},mx={partial:!0,tokenize:gx};function px(l,i,r){const u=this,c=u.events[u.events.length-1];let f=c&&c[1].type==="linePrefix"?c[2].sliceSerialize(c[1],!0).length:0,h=0;return p;function p(S){const U=u.containerState.type||(S===42||S===43||S===45?"listUnordered":"listOrdered");if(U==="listUnordered"?!u.containerState.marker||S===u.containerState.marker:oc(S)){if(u.containerState.type||(u.containerState.type=U,l.enter(U,{_container:!0})),U==="listUnordered")return l.enter("listItemPrefix"),S===42||S===45?l.check(iu,r,m)(S):m(S);if(!u.interrupt||S===49)return l.enter("listItemPrefix"),l.enter("listItemValue"),y(S)}return r(S)}function y(S){return oc(S)&&++h<10?(l.consume(S),y):(!u.interrupt||h<2)&&(u.containerState.marker?S===u.containerState.marker:S===41||S===46)?(l.exit("listItemValue"),m(S)):r(S)}function m(S){return l.enter("listItemMarker"),l.consume(S),l.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||S,l.check(hu,u.interrupt?r:g,l.attempt(dx,w,v))}function g(S){return u.containerState.initialBlankLine=!0,f++,w(S)}function v(S){return Re(S)?(l.enter("listItemPrefixWhitespace"),l.consume(S),l.exit("listItemPrefixWhitespace"),w):r(S)}function w(S){return u.containerState.size=f+u.sliceSerialize(l.exit("listItemPrefix"),!0).length,i(S)}}function yx(l,i,r){const u=this;return u.containerState._closeFlow=void 0,l.check(hu,c,f);function c(p){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Ge(l,i,"listItemIndent",u.containerState.size+1)(p)}function f(p){return u.containerState.furtherBlankLines||!Re(p)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,h(p)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,l.attempt(mx,i,h)(p))}function h(p){return u.containerState._closeFlow=!0,u.interrupt=void 0,Ge(l,l.attempt(An,i,r),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p)}}function gx(l,i,r){const u=this;return Ge(l,c,"listItemIndent",u.containerState.size+1);function c(f){const h=u.events[u.events.length-1];return h&&h[1].type==="listItemIndent"&&h[2].sliceSerialize(h[1],!0).length===u.containerState.size?i(f):r(f)}}function vx(l){l.exit(this.containerState.type)}function bx(l,i,r){const u=this;return Ge(l,c,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function c(f){const h=u.events[u.events.length-1];return!Re(f)&&h&&h[1].type==="listItemPrefixWhitespace"?i(f):r(f)}}const mp={name:"setextUnderline",resolveTo:Sx,tokenize:xx};function Sx(l,i){let r=l.length,u,c,f;for(;r--;)if(l[r][0]==="enter"){if(l[r][1].type==="content"){u=r;break}l[r][1].type==="paragraph"&&(c=r)}else l[r][1].type==="content"&&l.splice(r,1),!f&&l[r][1].type==="definition"&&(f=r);const h={type:"setextHeading",start:{...l[u][1].start},end:{...l[l.length-1][1].end}};return l[c][1].type="setextHeadingText",f?(l.splice(c,0,["enter",h,i]),l.splice(f+1,0,["exit",l[u][1],i]),l[u][1].end={...l[f][1].end}):l[u][1]=h,l.push(["exit",h,i]),l}function xx(l,i,r){const u=this;let c;return f;function f(m){let g=u.events.length,v;for(;g--;)if(u.events[g][1].type!=="lineEnding"&&u.events[g][1].type!=="linePrefix"&&u.events[g][1].type!=="content"){v=u.events[g][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||v)?(l.enter("setextHeadingLine"),c=m,h(m)):r(m)}function h(m){return l.enter("setextHeadingLineSequence"),p(m)}function p(m){return m===c?(l.consume(m),p):(l.exit("setextHeadingLineSequence"),Re(m)?Ge(l,y,"lineSuffix")(m):y(m))}function y(m){return m===null||de(m)?(l.exit("setextHeadingLine"),i(m)):r(m)}}const wx={tokenize:Ex};function Ex(l){const i=this,r=l.attempt(hu,u,l.attempt(this.parser.constructs.flowInitial,c,Ge(l,l.attempt(this.parser.constructs.flow,c,l.attempt(zS,c)),"linePrefix")));return r;function u(f){if(f===null){l.consume(f);return}return l.enter("lineEndingBlank"),l.consume(f),l.exit("lineEndingBlank"),i.currentConstruct=void 0,r}function c(f){if(f===null){l.consume(f);return}return l.enter("lineEnding"),l.consume(f),l.exit("lineEnding"),i.currentConstruct=void 0,r}}const Tx={resolveAll:Ey()},Cx=wy("string"),kx=wy("text");function wy(l){return{resolveAll:Ey(l==="text"?Ax:void 0),tokenize:i};function i(r){const u=this,c=this.parser.constructs[l],f=r.attempt(c,h,p);return h;function h(g){return m(g)?f(g):p(g)}function p(g){if(g===null){r.consume(g);return}return r.enter("data"),r.consume(g),y}function y(g){return m(g)?(r.exit("data"),f(g)):(r.consume(g),y)}function m(g){if(g===null)return!0;const v=c[g];let w=-1;if(v)for(;++w<v.length;){const S=v[w];if(!S.previous||S.previous.call(u,u.previous))return!0}return!1}}}function Ey(l){return i;function i(r,u){let c=-1,f;for(;++c<=r.length;)f===void 0?r[c]&&r[c][1].type==="data"&&(f=c,c++):(!r[c]||r[c][1].type!=="data")&&(c!==f+2&&(r[f][1].end=r[c-1][1].end,r.splice(f+2,c-f-2),c=f+2),f=void 0);return l?l(r,u):r}}function Ax(l,i){let r=0;for(;++r<=l.length;)if((r===l.length||l[r][1].type==="lineEnding")&&l[r-1][1].type==="data"){const u=l[r-1][1],c=i.sliceStream(u);let f=c.length,h=-1,p=0,y;for(;f--;){const m=c[f];if(typeof m=="string"){for(h=m.length;m.charCodeAt(h-1)===32;)p++,h--;if(h)break;h=-1}else if(m===-2)y=!0,p++;else if(m!==-1){f++;break}}if(i._contentTypeTextTrailing&&r===l.length&&(p=0),p){const m={type:r===l.length||y||p<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:f?h:u.start._bufferIndex+h,_index:u.start._index+f,line:u.end.line,column:u.end.column-p,offset:u.end.offset-p},end:{...u.end}};u.end={...m.start},u.start.offset===u.end.offset?Object.assign(u,m):(l.splice(r,0,["enter",m,i],["exit",m,i]),r+=2)}r++}return l}const zx={42:An,43:An,45:An,48:An,49:An,50:An,51:An,52:An,53:An,54:An,55:An,56:An,57:An,62:py},_x={91:OS},Mx={[-2]:Vs,[-1]:Vs,32:Vs},Rx={35:qS,42:iu,45:[mp,iu],60:IS,61:mp,95:iu,96:hp,126:hp},Dx={38:gy,92:yy},Ox={[-5]:Xs,[-4]:Xs,[-3]:Xs,33:ux,38:gy,42:sc,60:[sS,KS],91:sx,92:[HS,yy],93:Mc,95:sc,96:wS},Lx={null:[sc,Tx]},Nx={null:[42,95]},Ux={null:[]},Hx=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Nx,contentInitial:_x,disable:Ux,document:zx,flow:Rx,flowInitial:Mx,insideSpan:Lx,string:Dx,text:Ox},Symbol.toStringTag,{value:"Module"}));function Bx(l,i,r){let u={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const c={},f=[];let h=[],p=[];const y={attempt:K(ue),check:K(B),consume:X,enter:V,exit:re,interrupt:K(B,{interrupt:!0})},m={code:null,containerState:{},defineSkip:L,events:[],now:U,parser:l,previous:null,sliceSerialize:w,sliceStream:S,write:v};let g=i.tokenize.call(m,y);return i.resolveAll&&f.push(i),m;function v(ee){return h=$n(h,ee),H(),h[h.length-1]!==null?[]:(ce(i,0),m.events=_c(f,m.events,m),m.events)}function w(ee,P){return jx(S(ee),P)}function S(ee){return qx(h,ee)}function U(){const{_bufferIndex:ee,_index:P,line:Ae,column:le,offset:F}=u;return{_bufferIndex:ee,_index:P,line:Ae,column:le,offset:F}}function L(ee){c[ee.line]=ee.column,ye()}function H(){let ee;for(;u._index<h.length;){const P=h[u._index];if(typeof P=="string")for(ee=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===ee&&u._bufferIndex<P.length;)D(P.charCodeAt(u._bufferIndex));else D(P)}}function D(ee){g=g(ee)}function X(ee){de(ee)?(u.line++,u.column=1,u.offset+=ee===-3?2:1,ye()):ee!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===h[u._index].length&&(u._bufferIndex=-1,u._index++)),m.previous=ee}function V(ee,P){const Ae=P||{};return Ae.type=ee,Ae.start=U(),m.events.push(["enter",Ae,m]),p.push(Ae),Ae}function re(ee){const P=p.pop();return P.end=U(),m.events.push(["exit",P,m]),P}function ue(ee,P){ce(ee,P.from)}function B(ee,P){P.restore()}function K(ee,P){return Ae;function Ae(le,F,R){let Q,te,be,E;return Array.isArray(le)?q(le):"tokenize"in le?q([le]):C(le);function C(ae){return Ee;function Ee(Xe){const Ne=Xe!==null&&ae[Xe],Gn=Xe!==null&&ae.null,ht=[...Array.isArray(Ne)?Ne:Ne?[Ne]:[],...Array.isArray(Gn)?Gn:Gn?[Gn]:[]];return q(ht)(Xe)}}function q(ae){return Q=ae,te=0,ae.length===0?R:x(ae[te])}function x(ae){return Ee;function Ee(Xe){return E=fe(),be=ae,ae.partial||(m.currentConstruct=ae),ae.name&&m.parser.constructs.disable.null.includes(ae.name)?se():ae.tokenize.call(P?Object.assign(Object.create(m),P):m,y,J,se)(Xe)}}function J(ae){return ee(be,E),F}function se(ae){return E.restore(),++te<Q.length?x(Q[te]):R}}}function ce(ee,P){ee.resolveAll&&!f.includes(ee)&&f.push(ee),ee.resolve&&ft(m.events,P,m.events.length-P,ee.resolve(m.events.slice(P),m)),ee.resolveTo&&(m.events=ee.resolveTo(m.events,m))}function fe(){const ee=U(),P=m.previous,Ae=m.currentConstruct,le=m.events.length,F=Array.from(p);return{from:le,restore:R};function R(){u=ee,m.previous=P,m.currentConstruct=Ae,m.events.length=le,p=F,ye()}}function ye(){u.line in c&&u.column<2&&(u.column=c[u.line],u.offset+=c[u.line]-1)}}function qx(l,i){const r=i.start._index,u=i.start._bufferIndex,c=i.end._index,f=i.end._bufferIndex;let h;if(r===c)h=[l[r].slice(u,f)];else{if(h=l.slice(r,c),u>-1){const p=h[0];typeof p=="string"?h[0]=p.slice(u):h.shift()}f>0&&h.push(l[c].slice(0,f))}return h}function jx(l,i){let r=-1;const u=[];let c;for(;++r<l.length;){const f=l[r];let h;if(typeof f=="string")h=f;else switch(f){case-5:{h="\r";break}case-4:{h=`
`;break}case-3:{h=`\r
`;break}case-2:{h=i?" ":"	";break}case-1:{if(!i&&c)continue;h=" ";break}default:h=String.fromCharCode(f)}c=f===-2,u.push(h)}return u.join("")}function Yx(l){const u={constructs:F0([Hx,...(l||{}).extensions||[]]),content:c(tS),defined:[],document:c(aS),flow:c(wx),lazy:{},string:c(Cx),text:c(kx)};return u;function c(f){return h;function h(p){return Bx(u,f,p)}}}function Gx(l){for(;!vy(l););return l}const pp=/[\0\t\n\r]/g;function Ix(){let l=1,i="",r=!0,u;return c;function c(f,h,p){const y=[];let m,g,v,w,S;for(f=i+(typeof f=="string"?f.toString():new TextDecoder(h||void 0).decode(f)),v=0,i="",r&&(f.charCodeAt(0)===65279&&v++,r=void 0);v<f.length;){if(pp.lastIndex=v,m=pp.exec(f),w=m&&m.index!==void 0?m.index:f.length,S=f.charCodeAt(w),!m){i=f.slice(v);break}if(S===10&&v===w&&u)y.push(-3),u=void 0;else switch(u&&(y.push(-5),u=void 0),v<w&&(y.push(f.slice(v,w)),l+=w-v),S){case 0:{y.push(65533),l++;break}case 9:{for(g=Math.ceil(l/4)*4,y.push(-2);l++<g;)y.push(-1);break}case 10:{y.push(-4),l=1;break}default:u=!0,l=1}v=w+1}return p&&(u&&y.push(-5),i&&y.push(i),y.push(null)),y}}const Vx=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Xx(l){return l.replace(Vx,Qx)}function Qx(l,i,r){if(i)return i;if(r.charCodeAt(0)===35){const c=r.charCodeAt(1),f=c===120||c===88;return my(r.slice(f?2:1),f?16:10)}return zc(r)||l}const Ty={}.hasOwnProperty;function Zx(l,i,r){return typeof i!="string"&&(r=i,i=void 0),Fx(r)(Gx(Yx(r).document().write(Ix()(l,i,!0))))}function Fx(l){const i={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:f(Rl),autolinkProtocol:fe,autolinkEmail:fe,atxHeading:f(_l),blockQuote:f(Gn),characterEscape:fe,characterReference:fe,codeFenced:f(ht),codeFencedFenceInfo:h,codeFencedFenceMeta:h,codeIndented:f(ht,h),codeText:f(Ca,h),codeTextData:fe,data:fe,codeFlowValue:fe,definition:f(Li),definitionDestinationString:h,definitionLabelString:h,definitionTitleString:h,emphasis:f(dt),hardBreakEscape:f(Ml),hardBreakTrailing:f(Ml),htmlFlow:f(Ni,h),htmlFlowData:fe,htmlText:f(Ni,h),htmlTextData:fe,image:f(Ui),label:h,link:f(Rl),listItem:f(ka),listItemValue:w,listOrdered:f(Dl,v),listUnordered:f(Dl),paragraph:f(pu),reference:x,referenceString:h,resourceDestinationString:h,resourceTitleString:h,setextHeading:f(_l),strong:f(yu),thematicBreak:f(gu)},exit:{atxHeading:y(),atxHeadingSequence:ue,autolink:y(),autolinkEmail:Ne,autolinkProtocol:Xe,blockQuote:y(),characterEscapeValue:ye,characterReferenceMarkerHexadecimal:se,characterReferenceMarkerNumeric:se,characterReferenceValue:ae,characterReference:Ee,codeFenced:y(H),codeFencedFence:L,codeFencedFenceInfo:S,codeFencedFenceMeta:U,codeFlowValue:ye,codeIndented:y(D),codeText:y(F),codeTextData:ye,data:ye,definition:y(),definitionDestinationString:re,definitionLabelString:X,definitionTitleString:V,emphasis:y(),hardBreakEscape:y(P),hardBreakTrailing:y(P),htmlFlow:y(Ae),htmlFlowData:ye,htmlText:y(le),htmlTextData:ye,image:y(Q),label:be,labelText:te,lineEnding:ee,link:y(R),listItem:y(),listOrdered:y(),listUnordered:y(),paragraph:y(),referenceString:J,resourceDestinationString:E,resourceTitleString:C,resource:q,setextHeading:y(ce),setextHeadingLineSequence:K,setextHeadingText:B,strong:y(),thematicBreak:y()}};Cy(i,(l||{}).mdastExtensions||[]);const r={};return u;function u(j){let W={type:"root",children:[]};const he={stack:[W],tokenStack:[],config:i,enter:p,exit:m,buffer:h,resume:g,data:r},Se=[];let De=-1;for(;++De<j.length;)if(j[De][1].type==="listOrdered"||j[De][1].type==="listUnordered")if(j[De][0]==="enter")Se.push(De);else{const Mn=Se.pop();De=c(j,Mn,De)}for(De=-1;++De<j.length;){const Mn=i[j[De][0]];Ty.call(Mn,j[De][1].type)&&Mn[j[De][1].type].call(Object.assign({sliceSerialize:j[De][2].sliceSerialize},he),j[De][1])}if(he.tokenStack.length>0){const Mn=he.tokenStack[he.tokenStack.length-1];(Mn[1]||yp).call(he,void 0,Mn[0])}for(W.position={start:rl(j.length>0?j[0][1].start:{line:1,column:1,offset:0}),end:rl(j.length>0?j[j.length-2][1].end:{line:1,column:1,offset:0})},De=-1;++De<i.transforms.length;)W=i.transforms[De](W)||W;return W}function c(j,W,he){let Se=W-1,De=-1,Mn=!1,mt,gn,ln,bn;for(;++Se<=he;){const qe=j[Se];switch(qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qe[0]==="enter"?De++:De--,bn=void 0;break}case"lineEndingBlank":{qe[0]==="enter"&&(mt&&!bn&&!De&&!ln&&(ln=Se),bn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:bn=void 0}if(!De&&qe[0]==="enter"&&qe[1].type==="listItemPrefix"||De===-1&&qe[0]==="exit"&&(qe[1].type==="listUnordered"||qe[1].type==="listOrdered")){if(mt){let Nt=Se;for(gn=void 0;Nt--;){const et=j[Nt];if(et[1].type==="lineEnding"||et[1].type==="lineEndingBlank"){if(et[0]==="exit")continue;gn&&(j[gn][1].type="lineEndingBlank",Mn=!0),et[1].type="lineEnding",gn=Nt}else if(!(et[1].type==="linePrefix"||et[1].type==="blockQuotePrefix"||et[1].type==="blockQuotePrefixWhitespace"||et[1].type==="blockQuoteMarker"||et[1].type==="listItemIndent"))break}ln&&(!gn||ln<gn)&&(mt._spread=!0),mt.end=Object.assign({},gn?j[gn][1].start:qe[1].end),j.splice(gn||Se,0,["exit",mt,qe[2]]),Se++,he++}if(qe[1].type==="listItemPrefix"){const Nt={type:"listItem",_spread:!1,start:Object.assign({},qe[1].start),end:void 0};mt=Nt,j.splice(Se,0,["enter",Nt,qe[2]]),Se++,he++,ln=void 0,bn=!0}}}return j[W][1]._spread=Mn,he}function f(j,W){return he;function he(Se){p.call(this,j(Se),Se),W&&W.call(this,Se)}}function h(){this.stack.push({type:"fragment",children:[]})}function p(j,W,he){this.stack[this.stack.length-1].children.push(j),this.stack.push(j),this.tokenStack.push([W,he||void 0]),j.position={start:rl(W.start),end:void 0}}function y(j){return W;function W(he){j&&j.call(this,he),m.call(this,he)}}function m(j,W){const he=this.stack.pop(),Se=this.tokenStack.pop();if(Se)Se[0].type!==j.type&&(W?W.call(this,j,Se[0]):(Se[1]||yp).call(this,j,Se[0]));else throw new Error("Cannot close `"+j.type+"` ("+Ci({start:j.start,end:j.end})+"): it’s not open");he.position.end=rl(j.end)}function g(){return Q0(this.stack.pop())}function v(){this.data.expectingFirstListItemValue=!0}function w(j){if(this.data.expectingFirstListItemValue){const W=this.stack[this.stack.length-2];W.start=Number.parseInt(this.sliceSerialize(j),10),this.data.expectingFirstListItemValue=void 0}}function S(){const j=this.resume(),W=this.stack[this.stack.length-1];W.lang=j}function U(){const j=this.resume(),W=this.stack[this.stack.length-1];W.meta=j}function L(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function H(){const j=this.resume(),W=this.stack[this.stack.length-1];W.value=j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function D(){const j=this.resume(),W=this.stack[this.stack.length-1];W.value=j.replace(/(\r?\n|\r)$/g,"")}function X(j){const W=this.resume(),he=this.stack[this.stack.length-1];he.label=W,he.identifier=Sa(this.sliceSerialize(j)).toLowerCase()}function V(){const j=this.resume(),W=this.stack[this.stack.length-1];W.title=j}function re(){const j=this.resume(),W=this.stack[this.stack.length-1];W.url=j}function ue(j){const W=this.stack[this.stack.length-1];if(!W.depth){const he=this.sliceSerialize(j).length;W.depth=he}}function B(){this.data.setextHeadingSlurpLineEnding=!0}function K(j){const W=this.stack[this.stack.length-1];W.depth=this.sliceSerialize(j).codePointAt(0)===61?1:2}function ce(){this.data.setextHeadingSlurpLineEnding=void 0}function fe(j){const he=this.stack[this.stack.length-1].children;let Se=he[he.length-1];(!Se||Se.type!=="text")&&(Se=yn(),Se.position={start:rl(j.start),end:void 0},he.push(Se)),this.stack.push(Se)}function ye(j){const W=this.stack.pop();W.value+=this.sliceSerialize(j),W.position.end=rl(j.end)}function ee(j){const W=this.stack[this.stack.length-1];if(this.data.atHardBreak){const he=W.children[W.children.length-1];he.position.end=rl(j.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&i.canContainEols.includes(W.type)&&(fe.call(this,j),ye.call(this,j))}function P(){this.data.atHardBreak=!0}function Ae(){const j=this.resume(),W=this.stack[this.stack.length-1];W.value=j}function le(){const j=this.resume(),W=this.stack[this.stack.length-1];W.value=j}function F(){const j=this.resume(),W=this.stack[this.stack.length-1];W.value=j}function R(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=W,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function Q(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=W,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function te(j){const W=this.sliceSerialize(j),he=this.stack[this.stack.length-2];he.label=Xx(W),he.identifier=Sa(W).toLowerCase()}function be(){const j=this.stack[this.stack.length-1],W=this.resume(),he=this.stack[this.stack.length-1];if(this.data.inReference=!0,he.type==="link"){const Se=j.children;he.children=Se}else he.alt=W}function E(){const j=this.resume(),W=this.stack[this.stack.length-1];W.url=j}function C(){const j=this.resume(),W=this.stack[this.stack.length-1];W.title=j}function q(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function J(j){const W=this.resume(),he=this.stack[this.stack.length-1];he.label=W,he.identifier=Sa(this.sliceSerialize(j)).toLowerCase(),this.data.referenceType="full"}function se(j){this.data.characterReferenceType=j.type}function ae(j){const W=this.sliceSerialize(j),he=this.data.characterReferenceType;let Se;he?(Se=my(W,he==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Se=zc(W);const De=this.stack[this.stack.length-1];De.value+=Se}function Ee(j){const W=this.stack.pop();W.position.end=rl(j.end)}function Xe(j){ye.call(this,j);const W=this.stack[this.stack.length-1];W.url=this.sliceSerialize(j)}function Ne(j){ye.call(this,j);const W=this.stack[this.stack.length-1];W.url="mailto:"+this.sliceSerialize(j)}function Gn(){return{type:"blockquote",children:[]}}function ht(){return{type:"code",lang:null,meta:null,value:""}}function Ca(){return{type:"inlineCode",value:""}}function Li(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function dt(){return{type:"emphasis",children:[]}}function _l(){return{type:"heading",depth:0,children:[]}}function Ml(){return{type:"break"}}function Ni(){return{type:"html",value:""}}function Ui(){return{type:"image",title:null,url:"",alt:null}}function Rl(){return{type:"link",title:null,url:"",children:[]}}function Dl(j){return{type:"list",ordered:j.type==="listOrdered",start:null,spread:j._spread,children:[]}}function ka(j){return{type:"listItem",spread:j._spread,checked:null,children:[]}}function pu(){return{type:"paragraph",children:[]}}function yu(){return{type:"strong",children:[]}}function yn(){return{type:"text",value:""}}function gu(){return{type:"thematicBreak"}}}function rl(l){return{line:l.line,column:l.column,offset:l.offset}}function Cy(l,i){let r=-1;for(;++r<i.length;){const u=i[r];Array.isArray(u)?Cy(l,u):Wx(l,u)}}function Wx(l,i){let r;for(r in i)if(Ty.call(i,r))switch(r){case"canContainEols":{const u=i[r];u&&l[r].push(...u);break}case"transforms":{const u=i[r];u&&l[r].push(...u);break}case"enter":case"exit":{const u=i[r];u&&Object.assign(l[r],u);break}}}function yp(l,i){throw l?new Error("Cannot close `"+l.type+"` ("+Ci({start:l.start,end:l.end})+"): a different token (`"+i.type+"`, "+Ci({start:i.start,end:i.end})+") is open"):new Error("Cannot close document, a token (`"+i.type+"`, "+Ci({start:i.start,end:i.end})+") is still open")}function Kx(l){const i=this;i.parser=r;function r(u){return Zx(u,{...i.data("settings"),...l,extensions:i.data("micromarkExtensions")||[],mdastExtensions:i.data("fromMarkdownExtensions")||[]})}}function Jx(l,i){const r={type:"element",tagName:"blockquote",properties:{},children:l.wrap(l.all(i),!0)};return l.patch(i,r),l.applyData(i,r)}function Px(l,i){const r={type:"element",tagName:"br",properties:{},children:[]};return l.patch(i,r),[l.applyData(i,r),{type:"text",value:`
`}]}function $x(l,i){const r=i.value?i.value+`
`:"",u={},c=i.lang?i.lang.split(/\s+/):[];c.length>0&&(u.className=["language-"+c[0]]);let f={type:"element",tagName:"code",properties:u,children:[{type:"text",value:r}]};return i.meta&&(f.data={meta:i.meta}),l.patch(i,f),f=l.applyData(i,f),f={type:"element",tagName:"pre",properties:{},children:[f]},l.patch(i,f),f}function ew(l,i){const r={type:"element",tagName:"del",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function nw(l,i){const r={type:"element",tagName:"em",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function tw(l,i){const r=typeof l.options.clobberPrefix=="string"?l.options.clobberPrefix:"user-content-",u=String(i.identifier).toUpperCase(),c=Ta(u.toLowerCase()),f=l.footnoteOrder.indexOf(u);let h,p=l.footnoteCounts.get(u);p===void 0?(p=0,l.footnoteOrder.push(u),h=l.footnoteOrder.length):h=f+1,p+=1,l.footnoteCounts.set(u,p);const y={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+c,id:r+"fnref-"+c+(p>1?"-"+p:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(h)}]};l.patch(i,y);const m={type:"element",tagName:"sup",properties:{},children:[y]};return l.patch(i,m),l.applyData(i,m)}function lw(l,i){const r={type:"element",tagName:"h"+i.depth,properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function aw(l,i){if(l.options.allowDangerousHtml){const r={type:"raw",value:i.value};return l.patch(i,r),l.applyData(i,r)}}function ky(l,i){const r=i.referenceType;let u="]";if(r==="collapsed"?u+="[]":r==="full"&&(u+="["+(i.label||i.identifier)+"]"),i.type==="imageReference")return[{type:"text",value:"!["+i.alt+u}];const c=l.all(i),f=c[0];f&&f.type==="text"?f.value="["+f.value:c.unshift({type:"text",value:"["});const h=c[c.length-1];return h&&h.type==="text"?h.value+=u:c.push({type:"text",value:u}),c}function iw(l,i){const r=String(i.identifier).toUpperCase(),u=l.definitionById.get(r);if(!u)return ky(l,i);const c={src:Ta(u.url||""),alt:i.alt};u.title!==null&&u.title!==void 0&&(c.title=u.title);const f={type:"element",tagName:"img",properties:c,children:[]};return l.patch(i,f),l.applyData(i,f)}function rw(l,i){const r={src:Ta(i.url)};i.alt!==null&&i.alt!==void 0&&(r.alt=i.alt),i.title!==null&&i.title!==void 0&&(r.title=i.title);const u={type:"element",tagName:"img",properties:r,children:[]};return l.patch(i,u),l.applyData(i,u)}function uw(l,i){const r={type:"text",value:i.value.replace(/\r?\n|\r/g," ")};l.patch(i,r);const u={type:"element",tagName:"code",properties:{},children:[r]};return l.patch(i,u),l.applyData(i,u)}function ow(l,i){const r=String(i.identifier).toUpperCase(),u=l.definitionById.get(r);if(!u)return ky(l,i);const c={href:Ta(u.url||"")};u.title!==null&&u.title!==void 0&&(c.title=u.title);const f={type:"element",tagName:"a",properties:c,children:l.all(i)};return l.patch(i,f),l.applyData(i,f)}function sw(l,i){const r={href:Ta(i.url)};i.title!==null&&i.title!==void 0&&(r.title=i.title);const u={type:"element",tagName:"a",properties:r,children:l.all(i)};return l.patch(i,u),l.applyData(i,u)}function cw(l,i,r){const u=l.all(i),c=r?fw(r):Ay(i),f={},h=[];if(typeof i.checked=="boolean"){const g=u[0];let v;g&&g.type==="element"&&g.tagName==="p"?v=g:(v={type:"element",tagName:"p",properties:{},children:[]},u.unshift(v)),v.children.length>0&&v.children.unshift({type:"text",value:" "}),v.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:i.checked,disabled:!0},children:[]}),f.className=["task-list-item"]}let p=-1;for(;++p<u.length;){const g=u[p];(c||p!==0||g.type!=="element"||g.tagName!=="p")&&h.push({type:"text",value:`
`}),g.type==="element"&&g.tagName==="p"&&!c?h.push(...g.children):h.push(g)}const y=u[u.length-1];y&&(c||y.type!=="element"||y.tagName!=="p")&&h.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:f,children:h};return l.patch(i,m),l.applyData(i,m)}function fw(l){let i=!1;if(l.type==="list"){i=l.spread||!1;const r=l.children;let u=-1;for(;!i&&++u<r.length;)i=Ay(r[u])}return i}function Ay(l){const i=l.spread;return i??l.children.length>1}function hw(l,i){const r={},u=l.all(i);let c=-1;for(typeof i.start=="number"&&i.start!==1&&(r.start=i.start);++c<u.length;){const h=u[c];if(h.type==="element"&&h.tagName==="li"&&h.properties&&Array.isArray(h.properties.className)&&h.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const f={type:"element",tagName:i.ordered?"ol":"ul",properties:r,children:l.wrap(u,!0)};return l.patch(i,f),l.applyData(i,f)}function dw(l,i){const r={type:"element",tagName:"p",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function mw(l,i){const r={type:"root",children:l.wrap(l.all(i))};return l.patch(i,r),l.applyData(i,r)}function pw(l,i){const r={type:"element",tagName:"strong",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function yw(l,i){const r=l.all(i),u=r.shift(),c=[];if(u){const h={type:"element",tagName:"thead",properties:{},children:l.wrap([u],!0)};l.patch(i.children[0],h),c.push(h)}if(r.length>0){const h={type:"element",tagName:"tbody",properties:{},children:l.wrap(r,!0)},p=Tc(i.children[1]),y=uy(i.children[i.children.length-1]);p&&y&&(h.position={start:p,end:y}),c.push(h)}const f={type:"element",tagName:"table",properties:{},children:l.wrap(c,!0)};return l.patch(i,f),l.applyData(i,f)}function gw(l,i,r){const u=r?r.children:void 0,f=(u?u.indexOf(i):1)===0?"th":"td",h=r&&r.type==="table"?r.align:void 0,p=h?h.length:i.children.length;let y=-1;const m=[];for(;++y<p;){const v=i.children[y],w={},S=h?h[y]:void 0;S&&(w.align=S);let U={type:"element",tagName:f,properties:w,children:[]};v&&(U.children=l.all(v),l.patch(v,U),U=l.applyData(v,U)),m.push(U)}const g={type:"element",tagName:"tr",properties:{},children:l.wrap(m,!0)};return l.patch(i,g),l.applyData(i,g)}function vw(l,i){const r={type:"element",tagName:"td",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}const gp=9,vp=32;function bw(l){const i=String(l),r=/\r?\n|\r/g;let u=r.exec(i),c=0;const f=[];for(;u;)f.push(bp(i.slice(c,u.index),c>0,!0),u[0]),c=u.index+u[0].length,u=r.exec(i);return f.push(bp(i.slice(c),c>0,!1)),f.join("")}function bp(l,i,r){let u=0,c=l.length;if(i){let f=l.codePointAt(u);for(;f===gp||f===vp;)u++,f=l.codePointAt(u)}if(r){let f=l.codePointAt(c-1);for(;f===gp||f===vp;)c--,f=l.codePointAt(c-1)}return c>u?l.slice(u,c):""}function Sw(l,i){const r={type:"text",value:bw(String(i.value))};return l.patch(i,r),l.applyData(i,r)}function xw(l,i){const r={type:"element",tagName:"hr",properties:{},children:[]};return l.patch(i,r),l.applyData(i,r)}const ww={blockquote:Jx,break:Px,code:$x,delete:ew,emphasis:nw,footnoteReference:tw,heading:lw,html:aw,imageReference:iw,image:rw,inlineCode:uw,linkReference:ow,link:sw,listItem:cw,list:hw,paragraph:dw,root:mw,strong:pw,table:yw,tableCell:vw,tableRow:gw,text:Sw,thematicBreak:xw,toml:eu,yaml:eu,definition:eu,footnoteDefinition:eu};function eu(){}const zy=-1,du=0,Ai=1,uu=2,Rc=3,Dc=4,Oc=5,Lc=6,_y=7,My=8,Sp=typeof self=="object"?self:globalThis,Ew=(l,i)=>{const r=(c,f)=>(l.set(f,c),c),u=c=>{if(l.has(c))return l.get(c);const[f,h]=i[c];switch(f){case du:case zy:return r(h,c);case Ai:{const p=r([],c);for(const y of h)p.push(u(y));return p}case uu:{const p=r({},c);for(const[y,m]of h)p[u(y)]=u(m);return p}case Rc:return r(new Date(h),c);case Dc:{const{source:p,flags:y}=h;return r(new RegExp(p,y),c)}case Oc:{const p=r(new Map,c);for(const[y,m]of h)p.set(u(y),u(m));return p}case Lc:{const p=r(new Set,c);for(const y of h)p.add(u(y));return p}case _y:{const{name:p,message:y}=h;return r(new Sp[p](y),c)}case My:return r(BigInt(h),c);case"BigInt":return r(Object(BigInt(h)),c);case"ArrayBuffer":return r(new Uint8Array(h).buffer,h);case"DataView":{const{buffer:p}=new Uint8Array(h);return r(new DataView(p),h)}}return r(new Sp[f](h),c)};return u},xp=l=>Ew(new Map,l)(0),va="",{toString:Tw}={},{keys:Cw}=Object,Ti=l=>{const i=typeof l;if(i!=="object"||!l)return[du,i];const r=Tw.call(l).slice(8,-1);switch(r){case"Array":return[Ai,va];case"Object":return[uu,va];case"Date":return[Rc,va];case"RegExp":return[Dc,va];case"Map":return[Oc,va];case"Set":return[Lc,va];case"DataView":return[Ai,r]}return r.includes("Array")?[Ai,r]:r.includes("Error")?[_y,r]:[uu,r]},nu=([l,i])=>l===du&&(i==="function"||i==="symbol"),kw=(l,i,r,u)=>{const c=(h,p)=>{const y=u.push(h)-1;return r.set(p,y),y},f=h=>{if(r.has(h))return r.get(h);let[p,y]=Ti(h);switch(p){case du:{let g=h;switch(y){case"bigint":p=My,g=h.toString();break;case"function":case"symbol":if(l)throw new TypeError("unable to serialize "+y);g=null;break;case"undefined":return c([zy],h)}return c([p,g],h)}case Ai:{if(y){let w=h;return y==="DataView"?w=new Uint8Array(h.buffer):y==="ArrayBuffer"&&(w=new Uint8Array(h)),c([y,[...w]],h)}const g=[],v=c([p,g],h);for(const w of h)g.push(f(w));return v}case uu:{if(y)switch(y){case"BigInt":return c([y,h.toString()],h);case"Boolean":case"Number":case"String":return c([y,h.valueOf()],h)}if(i&&"toJSON"in h)return f(h.toJSON());const g=[],v=c([p,g],h);for(const w of Cw(h))(l||!nu(Ti(h[w])))&&g.push([f(w),f(h[w])]);return v}case Rc:return c([p,h.toISOString()],h);case Dc:{const{source:g,flags:v}=h;return c([p,{source:g,flags:v}],h)}case Oc:{const g=[],v=c([p,g],h);for(const[w,S]of h)(l||!(nu(Ti(w))||nu(Ti(S))))&&g.push([f(w),f(S)]);return v}case Lc:{const g=[],v=c([p,g],h);for(const w of h)(l||!nu(Ti(w)))&&g.push(f(w));return v}}const{message:m}=h;return c([p,{name:y,message:m}],h)};return f},wp=(l,{json:i,lossy:r}={})=>{const u=[];return kw(!(i||r),!!i,new Map,u)(l),u},ou=typeof structuredClone=="function"?(l,i)=>i&&("json"in i||"lossy"in i)?xp(wp(l,i)):structuredClone(l):(l,i)=>xp(wp(l,i));function Aw(l,i){const r=[{type:"text",value:"↩"}];return i>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(i)}]}),r}function zw(l,i){return"Back to reference "+(l+1)+(i>1?"-"+i:"")}function _w(l){const i=typeof l.options.clobberPrefix=="string"?l.options.clobberPrefix:"user-content-",r=l.options.footnoteBackContent||Aw,u=l.options.footnoteBackLabel||zw,c=l.options.footnoteLabel||"Footnotes",f=l.options.footnoteLabelTagName||"h2",h=l.options.footnoteLabelProperties||{className:["sr-only"]},p=[];let y=-1;for(;++y<l.footnoteOrder.length;){const m=l.footnoteById.get(l.footnoteOrder[y]);if(!m)continue;const g=l.all(m),v=String(m.identifier).toUpperCase(),w=Ta(v.toLowerCase());let S=0;const U=[],L=l.footnoteCounts.get(v);for(;L!==void 0&&++S<=L;){U.length>0&&U.push({type:"text",value:" "});let X=typeof r=="string"?r:r(y,S);typeof X=="string"&&(X={type:"text",value:X}),U.push({type:"element",tagName:"a",properties:{href:"#"+i+"fnref-"+w+(S>1?"-"+S:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(y,S),className:["data-footnote-backref"]},children:Array.isArray(X)?X:[X]})}const H=g[g.length-1];if(H&&H.type==="element"&&H.tagName==="p"){const X=H.children[H.children.length-1];X&&X.type==="text"?X.value+=" ":H.children.push({type:"text",value:" "}),H.children.push(...U)}else g.push(...U);const D={type:"element",tagName:"li",properties:{id:i+"fn-"+w},children:l.wrap(g,!0)};l.patch(m,D),p.push(D)}if(p.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:f,properties:{...ou(h),id:"footnote-label"},children:[{type:"text",value:c}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:l.wrap(p,!0)},{type:"text",value:`
`}]}}const Ry=(function(l){if(l==null)return Ow;if(typeof l=="function")return mu(l);if(typeof l=="object")return Array.isArray(l)?Mw(l):Rw(l);if(typeof l=="string")return Dw(l);throw new Error("Expected function, string, or object as test")});function Mw(l){const i=[];let r=-1;for(;++r<l.length;)i[r]=Ry(l[r]);return mu(u);function u(...c){let f=-1;for(;++f<i.length;)if(i[f].apply(this,c))return!0;return!1}}function Rw(l){const i=l;return mu(r);function r(u){const c=u;let f;for(f in l)if(c[f]!==i[f])return!1;return!0}}function Dw(l){return mu(i);function i(r){return r&&r.type===l}}function mu(l){return i;function i(r,u,c){return!!(Lw(r)&&l.call(this,r,typeof u=="number"?u:void 0,c||void 0))}}function Ow(){return!0}function Lw(l){return l!==null&&typeof l=="object"&&"type"in l}const Dy=[],Nw=!0,Ep=!1,Uw="skip";function Hw(l,i,r,u){let c;typeof i=="function"&&typeof r!="function"?(u=r,r=i):c=i;const f=Ry(c),h=u?-1:1;p(l,void 0,[])();function p(y,m,g){const v=y&&typeof y=="object"?y:{};if(typeof v.type=="string"){const S=typeof v.tagName=="string"?v.tagName:typeof v.name=="string"?v.name:void 0;Object.defineProperty(w,"name",{value:"node ("+(y.type+(S?"<"+S+">":""))+")"})}return w;function w(){let S=Dy,U,L,H;if((!i||f(y,m,g[g.length-1]||void 0))&&(S=Bw(r(y,g)),S[0]===Ep))return S;if("children"in y&&y.children){const D=y;if(D.children&&S[0]!==Uw)for(L=(u?D.children.length:-1)+h,H=g.concat(D);L>-1&&L<D.children.length;){const X=D.children[L];if(U=p(X,L,H)(),U[0]===Ep)return U;L=typeof U[1]=="number"?U[1]:L+h}}return S}}}function Bw(l){return Array.isArray(l)?l:typeof l=="number"?[Nw,l]:l==null?Dy:[l]}function Oy(l,i,r,u){let c,f,h;typeof i=="function"&&typeof r!="function"?(f=void 0,h=i,c=r):(f=i,h=r,c=u),Hw(l,f,p,c);function p(y,m){const g=m[m.length-1],v=g?g.children.indexOf(y):void 0;return h(y,v,g)}}const cc={}.hasOwnProperty,qw={};function jw(l,i){const r=i||qw,u=new Map,c=new Map,f=new Map,h={...ww,...r.handlers},p={all:m,applyData:Gw,definitionById:u,footnoteById:c,footnoteCounts:f,footnoteOrder:[],handlers:h,one:y,options:r,patch:Yw,wrap:Vw};return Oy(l,function(g){if(g.type==="definition"||g.type==="footnoteDefinition"){const v=g.type==="definition"?u:c,w=String(g.identifier).toUpperCase();v.has(w)||v.set(w,g)}}),p;function y(g,v){const w=g.type,S=p.handlers[w];if(cc.call(p.handlers,w)&&S)return S(p,g,v);if(p.options.passThrough&&p.options.passThrough.includes(w)){if("children"in g){const{children:L,...H}=g,D=ou(H);return D.children=p.all(g),D}return ou(g)}return(p.options.unknownHandler||Iw)(p,g,v)}function m(g){const v=[];if("children"in g){const w=g.children;let S=-1;for(;++S<w.length;){const U=p.one(w[S],g);if(U){if(S&&w[S-1].type==="break"&&(!Array.isArray(U)&&U.type==="text"&&(U.value=Tp(U.value)),!Array.isArray(U)&&U.type==="element")){const L=U.children[0];L&&L.type==="text"&&(L.value=Tp(L.value))}Array.isArray(U)?v.push(...U):v.push(U)}}}return v}}function Yw(l,i){l.position&&(i.position=T0(l))}function Gw(l,i){let r=i;if(l&&l.data){const u=l.data.hName,c=l.data.hChildren,f=l.data.hProperties;if(typeof u=="string")if(r.type==="element")r.tagName=u;else{const h="children"in r?r.children:[r];r={type:"element",tagName:u,properties:{},children:h}}r.type==="element"&&f&&Object.assign(r.properties,ou(f)),"children"in r&&r.children&&c!==null&&c!==void 0&&(r.children=c)}return r}function Iw(l,i){const r=i.data||{},u="value"in i&&!(cc.call(r,"hProperties")||cc.call(r,"hChildren"))?{type:"text",value:i.value}:{type:"element",tagName:"div",properties:{},children:l.all(i)};return l.patch(i,u),l.applyData(i,u)}function Vw(l,i){const r=[];let u=-1;for(i&&r.push({type:"text",value:`
`});++u<l.length;)u&&r.push({type:"text",value:`
`}),r.push(l[u]);return i&&l.length>0&&r.push({type:"text",value:`
`}),r}function Tp(l){let i=0,r=l.charCodeAt(i);for(;r===9||r===32;)i++,r=l.charCodeAt(i);return l.slice(i)}function Cp(l,i){const r=jw(l,i),u=r.one(l,void 0),c=_w(r),f=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return c&&f.children.push({type:"text",value:`
`},c),f}function Xw(l,i){return l&&"run"in l?async function(r,u){const c=Cp(r,{file:u,...i});await l.run(c,u)}:function(r,u){return Cp(r,{file:u,...l||i})}}function kp(l){if(l)throw l}var Qs,Ap;function Qw(){if(Ap)return Qs;Ap=1;var l=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c=function(m){return typeof Array.isArray=="function"?Array.isArray(m):i.call(m)==="[object Array]"},f=function(m){if(!m||i.call(m)!=="[object Object]")return!1;var g=l.call(m,"constructor"),v=m.constructor&&m.constructor.prototype&&l.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!g&&!v)return!1;var w;for(w in m);return typeof w>"u"||l.call(m,w)},h=function(m,g){r&&g.name==="__proto__"?r(m,g.name,{enumerable:!0,configurable:!0,value:g.newValue,writable:!0}):m[g.name]=g.newValue},p=function(m,g){if(g==="__proto__")if(l.call(m,g)){if(u)return u(m,g).value}else return;return m[g]};return Qs=function y(){var m,g,v,w,S,U,L=arguments[0],H=1,D=arguments.length,X=!1;for(typeof L=="boolean"&&(X=L,L=arguments[1]||{},H=2),(L==null||typeof L!="object"&&typeof L!="function")&&(L={});H<D;++H)if(m=arguments[H],m!=null)for(g in m)v=p(L,g),w=p(m,g),L!==w&&(X&&w&&(f(w)||(S=c(w)))?(S?(S=!1,U=v&&c(v)?v:[]):U=v&&f(v)?v:{},h(L,{name:g,newValue:y(X,U,w)})):typeof w<"u"&&h(L,{name:g,newValue:w}));return L},Qs}var Zw=Qw();const Zs=su(Zw);function fc(l){if(typeof l!="object"||l===null)return!1;const i=Object.getPrototypeOf(l);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in l)&&!(Symbol.iterator in l)}function Fw(){const l=[],i={run:r,use:u};return i;function r(...c){let f=-1;const h=c.pop();if(typeof h!="function")throw new TypeError("Expected function as last argument, not "+h);p(null,...c);function p(y,...m){const g=l[++f];let v=-1;if(y){h(y);return}for(;++v<c.length;)(m[v]===null||m[v]===void 0)&&(m[v]=c[v]);c=m,g?Ww(g,p)(...m):h(null,...m)}}function u(c){if(typeof c!="function")throw new TypeError("Expected `middelware` to be a function, not "+c);return l.push(c),i}}function Ww(l,i){let r;return u;function u(...h){const p=l.length>h.length;let y;p&&h.push(c);try{y=l.apply(this,h)}catch(m){const g=m;if(p&&r)throw g;return c(g)}p||(y&&y.then&&typeof y.then=="function"?y.then(f,c):y instanceof Error?c(y):f(y))}function c(h,...p){r||(r=!0,i(h,...p))}function f(h){c(null,h)}}const st={basename:Kw,dirname:Jw,extname:Pw,join:$w,sep:"/"};function Kw(l,i){if(i!==void 0&&typeof i!="string")throw new TypeError('"ext" argument must be a string');Oi(l);let r=0,u=-1,c=l.length,f;if(i===void 0||i.length===0||i.length>l.length){for(;c--;)if(l.codePointAt(c)===47){if(f){r=c+1;break}}else u<0&&(f=!0,u=c+1);return u<0?"":l.slice(r,u)}if(i===l)return"";let h=-1,p=i.length-1;for(;c--;)if(l.codePointAt(c)===47){if(f){r=c+1;break}}else h<0&&(f=!0,h=c+1),p>-1&&(l.codePointAt(c)===i.codePointAt(p--)?p<0&&(u=c):(p=-1,u=h));return r===u?u=h:u<0&&(u=l.length),l.slice(r,u)}function Jw(l){if(Oi(l),l.length===0)return".";let i=-1,r=l.length,u;for(;--r;)if(l.codePointAt(r)===47){if(u){i=r;break}}else u||(u=!0);return i<0?l.codePointAt(0)===47?"/":".":i===1&&l.codePointAt(0)===47?"//":l.slice(0,i)}function Pw(l){Oi(l);let i=l.length,r=-1,u=0,c=-1,f=0,h;for(;i--;){const p=l.codePointAt(i);if(p===47){if(h){u=i+1;break}continue}r<0&&(h=!0,r=i+1),p===46?c<0?c=i:f!==1&&(f=1):c>-1&&(f=-1)}return c<0||r<0||f===0||f===1&&c===r-1&&c===u+1?"":l.slice(c,r)}function $w(...l){let i=-1,r;for(;++i<l.length;)Oi(l[i]),l[i]&&(r=r===void 0?l[i]:r+"/"+l[i]);return r===void 0?".":eE(r)}function eE(l){Oi(l);const i=l.codePointAt(0)===47;let r=nE(l,!i);return r.length===0&&!i&&(r="."),r.length>0&&l.codePointAt(l.length-1)===47&&(r+="/"),i?"/"+r:r}function nE(l,i){let r="",u=0,c=-1,f=0,h=-1,p,y;for(;++h<=l.length;){if(h<l.length)p=l.codePointAt(h);else{if(p===47)break;p=47}if(p===47){if(!(c===h-1||f===1))if(c!==h-1&&f===2){if(r.length<2||u!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(y=r.lastIndexOf("/"),y!==r.length-1){y<0?(r="",u=0):(r=r.slice(0,y),u=r.length-1-r.lastIndexOf("/")),c=h,f=0;continue}}else if(r.length>0){r="",u=0,c=h,f=0;continue}}i&&(r=r.length>0?r+"/..":"..",u=2)}else r.length>0?r+="/"+l.slice(c+1,h):r=l.slice(c+1,h),u=h-c-1;c=h,f=0}else p===46&&f>-1?f++:f=-1}return r}function Oi(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}const tE={cwd:lE};function lE(){return"/"}function hc(l){return!!(l!==null&&typeof l=="object"&&"href"in l&&l.href&&"protocol"in l&&l.protocol&&l.auth===void 0)}function aE(l){if(typeof l=="string")l=new URL(l);else if(!hc(l)){const i=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+l+"`");throw i.code="ERR_INVALID_ARG_TYPE",i}if(l.protocol!=="file:"){const i=new TypeError("The URL must be of scheme file");throw i.code="ERR_INVALID_URL_SCHEME",i}return iE(l)}function iE(l){if(l.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const i=l.pathname;let r=-1;for(;++r<i.length;)if(i.codePointAt(r)===37&&i.codePointAt(r+1)===50){const u=i.codePointAt(r+2);if(u===70||u===102){const c=new TypeError("File URL path must not include encoded / characters");throw c.code="ERR_INVALID_FILE_URL_PATH",c}}return decodeURIComponent(i)}const Fs=["history","path","basename","stem","extname","dirname"];class Ly{constructor(i){let r;i?hc(i)?r={path:i}:typeof i=="string"||rE(i)?r={value:i}:r=i:r={},this.cwd="cwd"in r?"":tE.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Fs.length;){const f=Fs[u];f in r&&r[f]!==void 0&&r[f]!==null&&(this[f]=f==="history"?[...r[f]]:r[f])}let c;for(c in r)Fs.includes(c)||(this[c]=r[c])}get basename(){return typeof this.path=="string"?st.basename(this.path):void 0}set basename(i){Ks(i,"basename"),Ws(i,"basename"),this.path=st.join(this.dirname||"",i)}get dirname(){return typeof this.path=="string"?st.dirname(this.path):void 0}set dirname(i){zp(this.basename,"dirname"),this.path=st.join(i||"",this.basename)}get extname(){return typeof this.path=="string"?st.extname(this.path):void 0}set extname(i){if(Ws(i,"extname"),zp(this.dirname,"extname"),i){if(i.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(i.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=st.join(this.dirname,this.stem+(i||""))}get path(){return this.history[this.history.length-1]}set path(i){hc(i)&&(i=aE(i)),Ks(i,"path"),this.path!==i&&this.history.push(i)}get stem(){return typeof this.path=="string"?st.basename(this.path,this.extname):void 0}set stem(i){Ks(i,"stem"),Ws(i,"stem"),this.path=st.join(this.dirname||"",i+(this.extname||""))}fail(i,r,u){const c=this.message(i,r,u);throw c.fatal=!0,c}info(i,r,u){const c=this.message(i,r,u);return c.fatal=void 0,c}message(i,r,u){const c=new pn(i,r,u);return this.path&&(c.name=this.path+":"+c.name,c.file=this.path),c.fatal=!1,this.messages.push(c),c}toString(i){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(i||void 0).decode(this.value)}}function Ws(l,i){if(l&&l.includes(st.sep))throw new Error("`"+i+"` cannot be a path: did not expect `"+st.sep+"`")}function Ks(l,i){if(!l)throw new Error("`"+i+"` cannot be empty")}function zp(l,i){if(!l)throw new Error("Setting `"+i+"` requires `path` to be set too")}function rE(l){return!!(l&&typeof l=="object"&&"byteLength"in l&&"byteOffset"in l)}const uE=(function(l){const u=this.constructor.prototype,c=u[l],f=function(){return c.apply(f,arguments)};return Object.setPrototypeOf(f,u),f}),oE={}.hasOwnProperty;class Nc extends uE{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Fw()}copy(){const i=new Nc;let r=-1;for(;++r<this.attachers.length;){const u=this.attachers[r];i.use(...u)}return i.data(Zs(!0,{},this.namespace)),i}data(i,r){return typeof i=="string"?arguments.length===2?($s("data",this.frozen),this.namespace[i]=r,this):oE.call(this.namespace,i)&&this.namespace[i]||void 0:i?($s("data",this.frozen),this.namespace=i,this):this.namespace}freeze(){if(this.frozen)return this;const i=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const c=r.call(i,...u);typeof c=="function"&&this.transformers.use(c)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(i){this.freeze();const r=tu(i),u=this.parser||this.Parser;return Js("parse",u),u(String(r),r)}process(i,r){const u=this;return this.freeze(),Js("process",this.parser||this.Parser),Ps("process",this.compiler||this.Compiler),r?c(void 0,r):new Promise(c);function c(f,h){const p=tu(i),y=u.parse(p);u.run(y,p,function(g,v,w){if(g||!v||!w)return m(g);const S=v,U=u.stringify(S,w);fE(U)?w.value=U:w.result=U,m(g,w)});function m(g,v){g||!v?h(g):f?f(v):r(void 0,v)}}}processSync(i){let r=!1,u;return this.freeze(),Js("processSync",this.parser||this.Parser),Ps("processSync",this.compiler||this.Compiler),this.process(i,c),Mp("processSync","process",r),u;function c(f,h){r=!0,kp(f),u=h}}run(i,r,u){_p(i),this.freeze();const c=this.transformers;return!u&&typeof r=="function"&&(u=r,r=void 0),u?f(void 0,u):new Promise(f);function f(h,p){const y=tu(r);c.run(i,y,m);function m(g,v,w){const S=v||i;g?p(g):h?h(S):u(void 0,S,w)}}}runSync(i,r){let u=!1,c;return this.run(i,r,f),Mp("runSync","run",u),c;function f(h,p){kp(h),c=p,u=!0}}stringify(i,r){this.freeze();const u=tu(r),c=this.compiler||this.Compiler;return Ps("stringify",c),_p(i),c(i,u)}use(i,...r){const u=this.attachers,c=this.namespace;if($s("use",this.frozen),i!=null)if(typeof i=="function")y(i,r);else if(typeof i=="object")Array.isArray(i)?p(i):h(i);else throw new TypeError("Expected usable value, not `"+i+"`");return this;function f(m){if(typeof m=="function")y(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[g,...v]=m;y(g,v)}else h(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function h(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");p(m.plugins),m.settings&&(c.settings=Zs(!0,c.settings,m.settings))}function p(m){let g=-1;if(m!=null)if(Array.isArray(m))for(;++g<m.length;){const v=m[g];f(v)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function y(m,g){let v=-1,w=-1;for(;++v<u.length;)if(u[v][0]===m){w=v;break}if(w===-1)u.push([m,...g]);else if(g.length>0){let[S,...U]=g;const L=u[w][1];fc(L)&&fc(S)&&(S=Zs(!0,L,S)),u[w]=[m,S,...U]}}}}const sE=new Nc().freeze();function Js(l,i){if(typeof i!="function")throw new TypeError("Cannot `"+l+"` without `parser`")}function Ps(l,i){if(typeof i!="function")throw new TypeError("Cannot `"+l+"` without `compiler`")}function $s(l,i){if(i)throw new Error("Cannot call `"+l+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function _p(l){if(!fc(l)||typeof l.type!="string")throw new TypeError("Expected node, got `"+l+"`")}function Mp(l,i,r){if(!r)throw new Error("`"+l+"` finished async. Use `"+i+"` instead")}function tu(l){return cE(l)?l:new Ly(l)}function cE(l){return!!(l&&typeof l=="object"&&"message"in l&&"messages"in l)}function fE(l){return typeof l=="string"||hE(l)}function hE(l){return!!(l&&typeof l=="object"&&"byteLength"in l&&"byteOffset"in l)}const dE="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Rp=[],Dp={allowDangerousHtml:!0},mE=/^(https?|ircs?|mailto|xmpp)$/i,pE=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function yE(l){const i=gE(l),r=vE(l);return bE(i.runSync(i.parse(r),r),l)}function gE(l){const i=l.rehypePlugins||Rp,r=l.remarkPlugins||Rp,u=l.remarkRehypeOptions?{...l.remarkRehypeOptions,...Dp}:Dp;return sE().use(Kx).use(r).use(Xw,u).use(i)}function vE(l){const i=l.children||"",r=new Ly;return typeof i=="string"&&(r.value=i),r}function bE(l,i){const r=i.allowedElements,u=i.allowElement,c=i.components,f=i.disallowedElements,h=i.skipHtml,p=i.unwrapDisallowed,y=i.urlTransform||SE;for(const g of pE)Object.hasOwn(i,g.from)&&(""+g.from+(g.to?"use `"+g.to+"` instead":"remove it")+dE+g.id,void 0);return Oy(l,m),_0(l,{Fragment:on.Fragment,components:c,ignoreInvalidStyle:!0,jsx:on.jsx,jsxs:on.jsxs,passKeys:!0,passNode:!0});function m(g,v,w){if(g.type==="raw"&&w&&typeof v=="number")return h?w.children.splice(v,1):w.children[v]={type:"text",value:g.value},v;if(g.type==="element"){let S;for(S in Is)if(Object.hasOwn(Is,S)&&Object.hasOwn(g.properties,S)){const U=g.properties[S],L=Is[S];(L===null||L.includes(g.tagName))&&(g.properties[S]=y(String(U||""),S,g))}}if(g.type==="element"){let S=r?!r.includes(g.tagName):f?f.includes(g.tagName):!1;if(!S&&u&&typeof v=="number"&&(S=!u(g,v,w)),S&&w&&typeof v=="number")return p&&g.children?w.children.splice(v,1,...g.children):w.children.splice(v,1),v}}}function SE(l){const i=l.indexOf(":"),r=l.indexOf("?"),u=l.indexOf("#"),c=l.indexOf("/");return i===-1||c!==-1&&i>c||r!==-1&&i>r||u!==-1&&i>u||mE.test(l.slice(0,i))?l:""}function xE(){const{slug:l}=Ib(),i=xc.find(r=>r.slug===l);return i?on.jsx("div",{className:"markdown",children:on.jsx(yE,{children:i.content})}):on.jsx("div",{children:"Document not found"})}function wE(){return on.jsx(_1,{children:on.jsxs("div",{style:{display:"flex",minHeight:"100vh"},children:[on.jsx(e0,{}),on.jsxs(i1,{children:[on.jsx(nc,{path:"/",element:on.jsx(l1,{to:`/docs/${xc[0].slug}`})}),on.jsx(nc,{path:"/docs/:slug",element:on.jsx(xE,{})})]})]})})}rb.createRoot(document.getElementById("root")).render(on.jsx(Pv.StrictMode,{children:on.jsx(wE,{})}));
