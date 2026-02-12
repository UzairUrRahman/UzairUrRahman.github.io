(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();function su(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ms={exports:{}},vi={};var _m;function Zv(){if(_m)return vi;_m=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(u,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var p in c)p!=="key"&&(f[p]=c[p])}else f=c;return c=f.ref,{$$typeof:a,type:u,key:h,ref:c!==void 0?c:null,props:f}}return vi.Fragment=i,vi.jsx=r,vi.jsxs=r,vi}var Lm;function Kv(){return Lm||(Lm=1,Ms.exports=Zv()),Ms.exports}var on=Kv(),Os={exports:{}},me={};var Nm;function Jv(){if(Nm)return me;Nm=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function S(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,B={};function O(E,q,w){this.props=E,this.context=q,this.refs=B,this.updater=w||U}O.prototype.isReactComponent={},O.prototype.setState=function(E,q){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,q,"setState")},O.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function X(){}X.prototype=O.prototype;function V(E,q,w){this.props=E,this.context=q,this.refs=B,this.updater=w||U}var re=V.prototype=new X;re.constructor=V,L(re,O.prototype),re.isPureReactComponent=!0;var ue=Array.isArray;function H(){}var K={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function fe(E,q,w){var J=w.ref;return{$$typeof:a,type:E,key:q,ref:J!==void 0?J:null,props:w}}function ye(E,q){return fe(E.type,q,E.props)}function ee(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function P(E){var q={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(w){return q[w]})}var Ae=/\/+/g;function ae(E,q){return typeof E=="object"&&E!==null&&E.key!=null?P(""+E.key):q.toString(36)}function W(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(H,H):(E.status="pending",E.then(function(q){E.status==="pending"&&(E.status="fulfilled",E.value=q)},function(q){E.status==="pending"&&(E.status="rejected",E.reason=q)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function M(E,q,w,J,se){var le=typeof E;(le==="undefined"||le==="boolean")&&(E=null);var Te=!1;if(E===null)Te=!0;else switch(le){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(E.$$typeof){case a:case i:Te=!0;break;case g:return Te=E._init,M(Te(E._payload),q,w,J,se)}}if(Te)return se=se(E),Te=J===""?"."+ae(E,0):J,ue(se)?(w="",Te!=null&&(w=Te.replace(Ae,"$&/")+"/"),M(se,q,w,"",function(Yn){return Yn})):se!=null&&(ee(se)&&(se=ye(se,w+(se.key==null||E&&E.key===se.key?"":(""+se.key).replace(Ae,"$&/")+"/")+Te)),q.push(se)),1;Te=0;var Xe=J===""?".":J+":";if(ue(E))for(var Ne=0;Ne<E.length;Ne++)J=E[Ne],le=Xe+ae(J,Ne),Te+=M(J,q,w,le,se);else if(Ne=S(E),typeof Ne=="function")for(E=Ne.call(E),Ne=0;!(J=E.next()).done;)J=J.value,le=Xe+ae(J,Ne++),Te+=M(J,q,w,le,se);else if(le==="object"){if(typeof E.then=="function")return M(W(E),q,w,J,se);throw q=String(E),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Te}function Q(E,q,w){if(E==null)return E;var J=[],se=0;return M(E,J,"","",function(le){return q.call(w,le,se++)}),J}function te(E){if(E._status===-1){var q=E._result;q=q(),q.then(function(w){(E._status===0||E._status===-1)&&(E._status=1,E._result=w)},function(w){(E._status===0||E._status===-1)&&(E._status=2,E._result=w)}),E._status===-1&&(E._status=0,E._result=q)}if(E._status===1)return E._result.default;throw E._result}var be=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},T={map:Q,forEach:function(E,q,w){Q(E,function(){q.apply(this,arguments)},w)},count:function(E){var q=0;return Q(E,function(){q++}),q},toArray:function(E){return Q(E,function(q){return q})||[]},only:function(E){if(!ee(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return me.Activity=v,me.Children=T,me.Component=O,me.Fragment=r,me.Profiler=c,me.PureComponent=V,me.StrictMode=u,me.Suspense=y,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,me.__COMPILER_RUNTIME={__proto__:null,c:function(E){return K.H.useMemoCache(E)}},me.cache=function(E){return function(){return E.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(E,q,w){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var J=L({},E.props),se=E.key;if(q!=null)for(le in q.key!==void 0&&(se=""+q.key),q)!ce.call(q,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&q.ref===void 0||(J[le]=q[le]);var le=arguments.length-2;if(le===1)J.children=w;else if(1<le){for(var Te=Array(le),Xe=0;Xe<le;Xe++)Te[Xe]=arguments[Xe+2];J.children=Te}return fe(E.type,se,J)},me.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},me.createElement=function(E,q,w){var J,se={},le=null;if(q!=null)for(J in q.key!==void 0&&(le=""+q.key),q)ce.call(q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(se[J]=q[J]);var Te=arguments.length-2;if(Te===1)se.children=w;else if(1<Te){for(var Xe=Array(Te),Ne=0;Ne<Te;Ne++)Xe[Ne]=arguments[Ne+2];se.children=Xe}if(E&&E.defaultProps)for(J in Te=E.defaultProps,Te)se[J]===void 0&&(se[J]=Te[J]);return fe(E,le,se)},me.createRef=function(){return{current:null}},me.forwardRef=function(E){return{$$typeof:p,render:E}},me.isValidElement=ee,me.lazy=function(E){return{$$typeof:g,_payload:{_status:-1,_result:E},_init:te}},me.memo=function(E,q){return{$$typeof:m,type:E,compare:q===void 0?null:q}},me.startTransition=function(E){var q=K.T,w={};K.T=w;try{var J=E(),se=K.S;se!==null&&se(w,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(H,be)}catch(le){be(le)}finally{q!==null&&w.types!==null&&(q.types=w.types),K.T=q}},me.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},me.use=function(E){return K.H.use(E)},me.useActionState=function(E,q,w){return K.H.useActionState(E,q,w)},me.useCallback=function(E,q){return K.H.useCallback(E,q)},me.useContext=function(E){return K.H.useContext(E)},me.useDebugValue=function(){},me.useDeferredValue=function(E,q){return K.H.useDeferredValue(E,q)},me.useEffect=function(E,q){return K.H.useEffect(E,q)},me.useEffectEvent=function(E){return K.H.useEffectEvent(E)},me.useId=function(){return K.H.useId()},me.useImperativeHandle=function(E,q,w){return K.H.useImperativeHandle(E,q,w)},me.useInsertionEffect=function(E,q){return K.H.useInsertionEffect(E,q)},me.useLayoutEffect=function(E,q){return K.H.useLayoutEffect(E,q)},me.useMemo=function(E,q){return K.H.useMemo(E,q)},me.useOptimistic=function(E,q){return K.H.useOptimistic(E,q)},me.useReducer=function(E,q,w){return K.H.useReducer(E,q,w)},me.useRef=function(E){return K.H.useRef(E)},me.useState=function(E){return K.H.useState(E)},me.useSyncExternalStore=function(E,q,w){return K.H.useSyncExternalStore(E,q,w)},me.useTransition=function(){return K.H.useTransition()},me.version="19.2.3",me}var Um;function dc(){return Um||(Um=1,Os.exports=Jv()),Os.exports}var I=dc();const Pv=su(I);var _s={exports:{}},bi={},Ls={exports:{}},Ns={};var Bm;function $v(){return Bm||(Bm=1,(function(a){function i(M,Q){var te=M.length;M.push(Q);e:for(;0<te;){var be=te-1>>>1,T=M[be];if(0<c(T,Q))M[be]=Q,M[te]=T,te=be;else break e}}function r(M){return M.length===0?null:M[0]}function u(M){if(M.length===0)return null;var Q=M[0],te=M.pop();if(te!==Q){M[0]=te;e:for(var be=0,T=M.length,E=T>>>1;be<E;){var q=2*(be+1)-1,w=M[q],J=q+1,se=M[J];if(0>c(w,te))J<T&&0>c(se,w)?(M[be]=se,M[J]=te,be=J):(M[be]=w,M[q]=te,be=q);else if(J<T&&0>c(se,te))M[be]=se,M[J]=te,be=J;else break e}}return Q}function c(M,Q){var te=M.sortIndex-Q.sortIndex;return te!==0?te:M.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var h=Date,p=h.now();a.unstable_now=function(){return h.now()-p}}var y=[],m=[],g=1,v=null,x=3,S=!1,U=!1,L=!1,B=!1,O=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function re(M){for(var Q=r(m);Q!==null;){if(Q.callback===null)u(m);else if(Q.startTime<=M)u(m),Q.sortIndex=Q.expirationTime,i(y,Q);else break;Q=r(m)}}function ue(M){if(L=!1,re(M),!U)if(r(y)!==null)U=!0,H||(H=!0,P());else{var Q=r(m);Q!==null&&W(ue,Q.startTime-M)}}var H=!1,K=-1,ce=5,fe=-1;function ye(){return B?!0:!(a.unstable_now()-fe<ce)}function ee(){if(B=!1,H){var M=a.unstable_now();fe=M;var Q=!0;try{e:{U=!1,L&&(L=!1,X(K),K=-1),S=!0;var te=x;try{n:{for(re(M),v=r(y);v!==null&&!(v.expirationTime>M&&ye());){var be=v.callback;if(typeof be=="function"){v.callback=null,x=v.priorityLevel;var T=be(v.expirationTime<=M);if(M=a.unstable_now(),typeof T=="function"){v.callback=T,re(M),Q=!0;break n}v===r(y)&&u(y),re(M)}else u(y);v=r(y)}if(v!==null)Q=!0;else{var E=r(m);E!==null&&W(ue,E.startTime-M),Q=!1}}break e}finally{v=null,x=te,S=!1}Q=void 0}}finally{Q?P():H=!1}}}var P;if(typeof V=="function")P=function(){V(ee)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,ae=Ae.port2;Ae.port1.onmessage=ee,P=function(){ae.postMessage(null)}}else P=function(){O(ee,0)};function W(M,Q){K=O(function(){M(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(M){M.callback=null},a.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<M?Math.floor(1e3/M):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(M){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var te=x;x=Q;try{return M()}finally{x=te}},a.unstable_requestPaint=function(){B=!0},a.unstable_runWithPriority=function(M,Q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var te=x;x=M;try{return Q()}finally{x=te}},a.unstable_scheduleCallback=function(M,Q,te){var be=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?be+te:be):te=be,M){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=te+T,M={id:g++,callback:Q,priorityLevel:M,startTime:te,expirationTime:T,sortIndex:-1},te>be?(M.sortIndex=te,i(m,M),r(y)===null&&M===r(m)&&(L?(X(K),K=-1):L=!0,W(ue,te-be))):(M.sortIndex=T,i(y,M),U||S||(U=!0,H||(H=!0,P()))),M},a.unstable_shouldYield=ye,a.unstable_wrapCallback=function(M){var Q=x;return function(){var te=x;x=Q;try{return M.apply(this,arguments)}finally{x=te}}}})(Ns)),Ns}var Hm;function eb(){return Hm||(Hm=1,Ls.exports=$v()),Ls.exports}var Us={exports:{}},mn={};var qm;function nb(){if(qm)return mn;qm=1;var a=dc();function i(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var u={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(y,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:y,containerInfo:m,implementation:g}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,mn.createPortal=function(y,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return f(y,m,null,g)},mn.flushSync=function(y){var m=h.T,g=u.p;try{if(h.T=null,u.p=2,y)return y()}finally{h.T=m,u.p=g,u.d.f()}},mn.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(y,m))},mn.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},mn.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var g=m.as,v=p(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?u.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):g==="script"&&u.d.X(y,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},mn.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=p(m.as,m.crossOrigin);u.d.M(y,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(y)},mn.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=p(g,m.crossOrigin);u.d.L(y,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},mn.preloadModule=function(y,m){if(typeof y=="string")if(m){var g=p(m.as,m.crossOrigin);u.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(y)},mn.requestFormReset=function(y){u.d.r(y)},mn.unstable_batchedUpdates=function(y,m){return y(m)},mn.useFormState=function(y,m,g){return h.H.useFormState(y,m,g)},mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},mn.version="19.2.3",mn}var jm;function tb(){if(jm)return Us.exports;jm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Us.exports=nb(),Us.exports}var Im;function ab(){if(Im)return bi;Im=1;var a=eb(),i=dc(),r=tb();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(u(188))}function m(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,l=n;;){var o=t.return;if(o===null)break;var s=o.alternate;if(s===null){if(l=o.return,l!==null){t=l;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===t)return y(o),e;if(s===l)return y(o),n;s=s.sibling}throw Error(u(188))}if(t.return!==l.return)t=o,l=s;else{for(var d=!1,b=o.child;b;){if(b===t){d=!0,t=o,l=s;break}if(b===l){d=!0,l=o,t=s;break}b=b.sibling}if(!d){for(b=s.child;b;){if(b===t){d=!0,t=s,l=o;break}if(b===l){d=!0,l=s,t=o;break}b=b.sibling}if(!d)throw Error(u(189))}}if(t.alternate!==l)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),V=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case O:return"Profiler";case B:return"StrictMode";case ue:return"Suspense";case H:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case V:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case re:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case ce:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}var W=Array.isArray,M=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},be=[],T=-1;function E(e){return{current:e}}function q(e){0>T||(e.current=be[T],be[T]=null,T--)}function w(e,n){T++,be[T]=e.current,e.current=n}var J=E(null),se=E(null),le=E(null),Te=E(null);function Xe(e,n){switch(w(le,n),w(se,e),w(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?tm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=tm(n),e=am(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(J),w(J,e)}function Ne(){q(J),q(se),q(le)}function Yn(e){e.memoizedState!==null&&w(Te,e);var n=J.current,t=am(n,e.type);n!==t&&(w(se,e),w(J,t))}function ht(e){se.current===e&&(q(J),q(se)),Te.current===e&&(q(Te),mi._currentValue=te)}var El,Li;function dt(e){if(El===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);El=n&&n[1]||"",Li=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+El+e+Li}var Da=!1;function Ra(e,n){if(!e||Da)return"";Da=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(_){var R=_}Reflect.construct(e,[],G)}else{try{G.call()}catch(_){R=_}e.call(G.prototype)}}else{try{throw Error()}catch(_){R=_}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(_){if(_&&R&&typeof _.stack=="string")return[_.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),d=s[0],b=s[1];if(d&&b){var k=d.split(`
`),D=b.split(`
`);for(o=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;o<D.length&&!D[o].includes("DetermineComponentFrameRoot");)o++;if(l===k.length||o===D.length)for(l=k.length-1,o=D.length-1;1<=l&&0<=o&&k[l]!==D[o];)o--;for(;1<=l&&0<=o;l--,o--)if(k[l]!==D[o]){if(l!==1||o!==1)do if(l--,o--,0>o||k[l]!==D[o]){var N=`
`+k[l].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=l&&0<=o);break}}}finally{Da=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?dt(t):""}function Ni(e,n){switch(e.tag){case 26:case 27:case 5:return dt(e.type);case 16:return dt("Lazy");case 13:return e.child!==n&&n!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return Ra(e.type,!1);case 11:return Ra(e.type.render,!1);case 1:return Ra(e.type,!0);case 31:return dt("Activity");default:return""}}function Ui(e){try{var n="",t=null;do n+=Ni(e,t),t=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ma=Object.prototype.hasOwnProperty,Oa=a.unstable_scheduleCallback,Cl=a.unstable_cancelCallback,pu=a.unstable_shouldYield,yu=a.unstable_requestPaint,yn=a.unstable_now,gu=a.unstable_getCurrentPriorityLevel,j=a.unstable_ImmediatePriority,Z=a.unstable_UserBlockingPriority,he=a.unstable_NormalPriority,Se=a.unstable_LowPriority,Oe=a.unstable_IdlePriority,Rn=a.log,mt=a.unstable_setDisableYieldValue,gn=null,an=null;function bn(e){if(typeof Rn=="function"&&mt(e),an&&typeof an.setStrictMode=="function")try{an.setStrictMode(gn,e)}catch{}}var qe=Math.clz32?Math.clz32:Ny,Nt=Math.log,et=Math.LN2;function Ny(e){return e>>>=0,e===0?32:31-(Nt(e)/et|0)|0}var Bi=256,Hi=262144,qi=4194304;function sa(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ji(e,n,t){var l=e.pendingLanes;if(l===0)return 0;var o=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~s,l!==0?o=sa(l):(d&=b,d!==0?o=sa(d):t||(t=b&~e,t!==0&&(o=sa(t))))):(b=l&~s,b!==0?o=sa(b):d!==0?o=sa(d):t||(t=l&~e,t!==0&&(o=sa(t)))),o===0?0:n!==0&&n!==o&&(n&s)===0&&(s=o&-o,t=n&-n,s>=t||s===32&&(t&4194048)!==0)?n:o}function Al(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Uy(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uc(){var e=qi;return qi<<=1,(qi&62914560)===0&&(qi=4194304),e}function vu(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function zl(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function By(e,n,t,l,o,s){var d=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var b=e.entanglements,k=e.expirationTimes,D=e.hiddenUpdates;for(t=d&~t;0<t;){var N=31-qe(t),G=1<<N;b[N]=0,k[N]=-1;var R=D[N];if(R!==null)for(D[N]=null,N=0;N<R.length;N++){var _=R[N];_!==null&&(_.lane&=-536870913)}t&=~G}l!==0&&Bc(e,l,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~n))}function Bc(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-qe(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Hc(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-qe(t),o=1<<l;o&n|e[l]&n&&(e[l]|=n),t&=~o}}function qc(e,n){var t=n&-n;return t=(t&42)!==0?1:bu(t),(t&(e.suspendedLanes|n))!==0?0:t}function bu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Su(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jc(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Cm(e.type))}function Ic(e,n){var t=Q.p;try{return Q.p=e,n()}finally{Q.p=t}}var Ut=Math.random().toString(36).slice(2),sn="__reactFiber$"+Ut,Sn="__reactProps$"+Ut,_a="__reactContainer$"+Ut,wu="__reactEvents$"+Ut,Hy="__reactListeners$"+Ut,qy="__reactHandles$"+Ut,Yc="__reactResources$"+Ut,Dl="__reactMarker$"+Ut;function xu(e){delete e[sn],delete e[Sn],delete e[wu],delete e[Hy],delete e[qy]}function La(e){var n=e[sn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[_a]||t[sn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=cm(e);e!==null;){if(t=e[sn])return t;e=cm(e)}return n}e=t,t=e.parentNode}return null}function Na(e){if(e=e[sn]||e[_a]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Rl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function Ua(e){var n=e[Yc];return n||(n=e[Yc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[Dl]=!0}var Gc=new Set,Vc={};function ca(e,n){Ba(e,n),Ba(e+"Capture",n)}function Ba(e,n){for(Vc[e]=n,e=0;e<n.length;e++)Gc.add(n[e])}var jy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xc={},Qc={};function Iy(e){return Ma.call(Qc,e)?!0:Ma.call(Xc,e)?!1:jy.test(e)?Qc[e]=!0:(Xc[e]=!0,!1)}function Ii(e,n,t){if(Iy(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Yi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function pt(e,n,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+l)}}function Gn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yy(e,n,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var o=l.get,s=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(d){t=""+d,s.call(this,d)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(d){t=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Tu(e){if(!e._valueTracker){var n=Fc(e)?"checked":"value";e._valueTracker=Yy(e,n,""+e[n])}}function Wc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=Fc(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gy=/[\n"\\]/g;function Vn(e){return e.replace(Gy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ku(e,n,t,l,o,s,d,b){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Gn(n)):e.value!==""+Gn(n)&&(e.value=""+Gn(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?Eu(e,d,Gn(n)):t!=null?Eu(e,d,Gn(t)):l!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Gn(b):e.removeAttribute("name")}function Zc(e,n,t,l,o,s,d,b){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),n!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||n!=null)){Tu(e);return}t=t!=null?""+Gn(t):"",n=n!=null?""+Gn(n):t,b||n===e.value||(e.value=n),e.defaultValue=n}l=l??o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Tu(e)}function Eu(e,n,t){n==="number"&&Gi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Ha(e,n,t,l){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Gn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,l&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Kc(e,n,t){if(n!=null&&(n=""+Gn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Gn(t):""}function Jc(e,n,t,l){if(n==null){if(l!=null){if(t!=null)throw Error(u(92));if(W(l)){if(1<l.length)throw Error(u(93));l=l[0]}t=l}t==null&&(t=""),n=t}t=Gn(n),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),Tu(e)}function qa(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Vy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pc(e,n,t){var l=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,t):typeof t!="number"||t===0||Vy.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function $c(e,n,t){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var o in n)l=n[o],n.hasOwnProperty(o)&&t[o]!==l&&Pc(e,o,l)}else for(var s in n)n.hasOwnProperty(s)&&Pc(e,s,n[s])}function Cu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vi(e){return Qy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function yt(){}var Au=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ja=null,Ia=null;function ef(e){var n=Na(e);if(n&&(e=n.stateNode)){var t=e[Sn]||null;e:switch(e=n.stateNode,n.type){case"input":if(ku(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Vn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var o=l[Sn]||null;if(!o)throw Error(u(90));ku(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(n=0;n<t.length;n++)l=t[n],l.form===e.form&&Wc(l)}break e;case"textarea":Kc(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Ha(e,!!t.multiple,n,!1)}}}var Du=!1;function nf(e,n,t){if(Du)return e(n,t);Du=!0;try{var l=e(n);return l}finally{if(Du=!1,(ja!==null||Ia!==null)&&(Mr(),ja&&(n=ja,e=Ia,Ia=ja=null,ef(n),e)))for(n=0;n<e.length;n++)ef(e[n])}}function Ml(e,n){var t=e.stateNode;if(t===null)return null;var l=t[Sn]||null;if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=!1;if(gt)try{var Ol={};Object.defineProperty(Ol,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",Ol,Ol),window.removeEventListener("test",Ol,Ol)}catch{Ru=!1}var Bt=null,Mu=null,Xi=null;function tf(){if(Xi)return Xi;var e,n=Mu,t=n.length,l,o="value"in Bt?Bt.value:Bt.textContent,s=o.length;for(e=0;e<t&&n[e]===o[e];e++);var d=t-e;for(l=1;l<=d&&n[t-l]===o[s-l];l++);return Xi=o.slice(e,1<l?1-l:void 0)}function Qi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function af(){return!1}function wn(e){function n(t,l,o,s,d){this._reactName=t,this._targetInst=o,this.type=l,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(t=e[b],this[b]=t?t(s):s[b]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fi:af,this.isPropagationStopped=af,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),n}var fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=wn(fa),_l=v({},fa,{view:0,detail:0}),Fy=wn(_l),Ou,_u,Ll,Zi=v({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ll&&(Ll&&e.type==="mousemove"?(Ou=e.screenX-Ll.screenX,_u=e.screenY-Ll.screenY):_u=Ou=0,Ll=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:_u}}),lf=wn(Zi),Wy=v({},Zi,{dataTransfer:0}),Zy=wn(Wy),Ky=v({},_l,{relatedTarget:0}),Lu=wn(Ky),Jy=v({},fa,{animationName:0,elapsedTime:0,pseudoElement:0}),Py=wn(Jy),$y=v({},fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eg=wn($y),ng=v({},fa,{data:0}),rf=wn(ng),tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ig(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=lg[e])?!!n[e]:!1}function Nu(){return ig}var rg=v({},_l,{key:function(e){if(e.key){var n=tg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ag[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ug=wn(rg),og=v({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uf=wn(og),sg=v({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),cg=wn(sg),fg=v({},fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=wn(fg),dg=v({},Zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mg=wn(dg),pg=v({},fa,{newState:0,oldState:0}),yg=wn(pg),gg=[9,13,27,32],Uu=gt&&"CompositionEvent"in window,Nl=null;gt&&"documentMode"in document&&(Nl=document.documentMode);var vg=gt&&"TextEvent"in window&&!Nl,of=gt&&(!Uu||Nl&&8<Nl&&11>=Nl),sf=" ",cf=!1;function ff(e,n){switch(e){case"keyup":return gg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ya=!1;function bg(e,n){switch(e){case"compositionend":return hf(n);case"keypress":return n.which!==32?null:(cf=!0,sf);case"textInput":return e=n.data,e===sf&&cf?null:e;default:return null}}function Sg(e,n){if(Ya)return e==="compositionend"||!Uu&&ff(e,n)?(e=tf(),Xi=Mu=Bt=null,Ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return of&&n.locale!=="ko"?null:n.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function df(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!wg[e.type]:n==="textarea"}function mf(e,n,t,l){ja?Ia?Ia.push(l):Ia=[l]:ja=l,n=Hr(n,"onChange"),0<n.length&&(t=new Wi("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var Ul=null,Bl=null;function xg(e){Kd(e,0)}function Ki(e){var n=Rl(e);if(Wc(n))return e}function pf(e,n){if(e==="change")return n}var yf=!1;if(gt){var Bu;if(gt){var Hu="oninput"in document;if(!Hu){var gf=document.createElement("div");gf.setAttribute("oninput","return;"),Hu=typeof gf.oninput=="function"}Bu=Hu}else Bu=!1;yf=Bu&&(!document.documentMode||9<document.documentMode)}function vf(){Ul&&(Ul.detachEvent("onpropertychange",bf),Bl=Ul=null)}function bf(e){if(e.propertyName==="value"&&Ki(Bl)){var n=[];mf(n,Bl,e,zu(e)),nf(xg,n)}}function Tg(e,n,t){e==="focusin"?(vf(),Ul=n,Bl=t,Ul.attachEvent("onpropertychange",bf)):e==="focusout"&&vf()}function kg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ki(Bl)}function Eg(e,n){if(e==="click")return Ki(n)}function Cg(e,n){if(e==="input"||e==="change")return Ki(n)}function Ag(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Mn=typeof Object.is=="function"?Object.is:Ag;function Hl(e,n){if(Mn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var o=t[l];if(!Ma.call(n,o)||!Mn(e[o],n[o]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wf(e,n){var t=Sf(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Sf(t)}}function xf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Gi(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Gi(e.document)}return n}function qu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var zg=gt&&"documentMode"in document&&11>=document.documentMode,Ga=null,ju=null,ql=null,Iu=!1;function kf(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Iu||Ga==null||Ga!==Gi(l)||(l=Ga,"selectionStart"in l&&qu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ql&&Hl(ql,l)||(ql=l,l=Hr(ju,"onSelect"),0<l.length&&(n=new Wi("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=Ga)))}function ha(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Va={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionrun:ha("Transition","TransitionRun"),transitionstart:ha("Transition","TransitionStart"),transitioncancel:ha("Transition","TransitionCancel"),transitionend:ha("Transition","TransitionEnd")},Yu={},Ef={};gt&&(Ef=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function da(e){if(Yu[e])return Yu[e];if(!Va[e])return e;var n=Va[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ef)return Yu[e]=n[t];return e}var Cf=da("animationend"),Af=da("animationiteration"),zf=da("animationstart"),Dg=da("transitionrun"),Rg=da("transitionstart"),Mg=da("transitioncancel"),Df=da("transitionend"),Rf=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function nt(e,n){Rf.set(e,n),ca(n,[e])}var Ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xn=[],Xa=0,Vu=0;function Pi(){for(var e=Xa,n=Vu=Xa=0;n<e;){var t=Xn[n];Xn[n++]=null;var l=Xn[n];Xn[n++]=null;var o=Xn[n];Xn[n++]=null;var s=Xn[n];if(Xn[n++]=null,l!==null&&o!==null){var d=l.pending;d===null?o.next=o:(o.next=d.next,d.next=o),l.pending=o}s!==0&&Mf(t,o,s)}}function $i(e,n,t,l){Xn[Xa++]=e,Xn[Xa++]=n,Xn[Xa++]=t,Xn[Xa++]=l,Vu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Xu(e,n,t,l){return $i(e,n,t,l),er(e)}function ma(e,n){return $i(e,null,null,n),er(e)}function Mf(e,n,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var o=!1,s=e.return;s!==null;)s.childLanes|=t,l=s.alternate,l!==null&&(l.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,o&&n!==null&&(o=31-qe(t),e=s.hiddenUpdates,l=e[o],l===null?e[o]=[n]:l.push(n),n.lane=t|536870912),s):null}function er(e){if(50<ui)throw ui=0,ns=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qa={};function Og(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,n,t,l){return new Og(e,n,t,l)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vt(e,n){var t=e.alternate;return t===null?(t=On(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Of(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nr(e,n,t,l,o,s){var d=0;if(l=e,typeof e=="function")Qu(e)&&(d=1);else if(typeof e=="string")d=Bv(e,t,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=On(31,t,n,o),e.elementType=fe,e.lanes=s,e;case L:return pa(t.children,o,s,n);case B:d=8,o|=24;break;case O:return e=On(12,t,n,o|2),e.elementType=O,e.lanes=s,e;case ue:return e=On(13,t,n,o),e.elementType=ue,e.lanes=s,e;case H:return e=On(19,t,n,o),e.elementType=H,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:d=10;break e;case X:d=9;break e;case re:d=11;break e;case K:d=14;break e;case ce:d=16,l=null;break e}d=29,t=Error(u(130,e===null?"null":typeof e,"")),l=null}return n=On(d,t,n,o),n.elementType=e,n.type=l,n.lanes=s,n}function pa(e,n,t,l){return e=On(7,e,l,n),e.lanes=t,e}function Fu(e,n,t){return e=On(6,e,null,n),e.lanes=t,e}function _f(e){var n=On(18,null,null,0);return n.stateNode=e,n}function Wu(e,n,t){return n=On(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Lf=new WeakMap;function Qn(e,n){if(typeof e=="object"&&e!==null){var t=Lf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Ui(n)},Lf.set(e,n),n)}return{value:e,source:n,stack:Ui(n)}}var Fa=[],Wa=0,tr=null,jl=0,Fn=[],Wn=0,Ht=null,it=1,rt="";function bt(e,n){Fa[Wa++]=jl,Fa[Wa++]=tr,tr=e,jl=n}function Nf(e,n,t){Fn[Wn++]=it,Fn[Wn++]=rt,Fn[Wn++]=Ht,Ht=e;var l=it;e=rt;var o=32-qe(l)-1;l&=~(1<<o),t+=1;var s=32-qe(n)+o;if(30<s){var d=o-o%5;s=(l&(1<<d)-1).toString(32),l>>=d,o-=d,it=1<<32-qe(n)+o|t<<o|l,rt=s+e}else it=1<<s|t<<o|l,rt=e}function Zu(e){e.return!==null&&(bt(e,1),Nf(e,1,0))}function Ku(e){for(;e===tr;)tr=Fa[--Wa],Fa[Wa]=null,jl=Fa[--Wa],Fa[Wa]=null;for(;e===Ht;)Ht=Fn[--Wn],Fn[Wn]=null,rt=Fn[--Wn],Fn[Wn]=null,it=Fn[--Wn],Fn[Wn]=null}function Uf(e,n){Fn[Wn++]=it,Fn[Wn++]=rt,Fn[Wn++]=Ht,it=n.id,rt=n.overflow,Ht=e}var cn=null,Ge=null,Ce=!1,qt=null,Zn=!1,Ju=Error(u(519));function jt(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Il(Qn(n,e)),Ju}function Bf(e){var n=e.stateNode,t=e.type,l=e.memoizedProps;switch(n[sn]=e,n[Sn]=l,t){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(t=0;t<si.length;t++)xe(si[t],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Zc(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Jc(n,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||l.suppressHydrationWarning===!0||em(n.textContent,t)?(l.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),l.onScroll!=null&&xe("scroll",n),l.onScrollEnd!=null&&xe("scrollend",n),l.onClick!=null&&(n.onclick=yt),n=!0):n=!1,n||jt(e,!0)}function Hf(e){for(cn=e.return;cn;)switch(cn.tag){case 5:case 31:case 13:Zn=!1;return;case 27:case 3:Zn=!0;return;default:cn=cn.return}}function Za(e){if(e!==cn)return!1;if(!Ce)return Hf(e),Ce=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||ys(e.type,e.memoizedProps)),t=!t),t&&Ge&&jt(e),Hf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ge=sm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ge=sm(e)}else n===27?(n=Ge,ea(e.type)?(e=ws,ws=null,Ge=e):Ge=n):Ge=cn?Jn(e.stateNode.nextSibling):null;return!0}function ya(){Ge=cn=null,Ce=!1}function Pu(){var e=qt;return e!==null&&(En===null?En=e:En.push.apply(En,e),qt=null),e}function Il(e){qt===null?qt=[e]:qt.push(e)}var $u=E(null),ga=null,St=null;function It(e,n,t){w($u,n._currentValue),n._currentValue=t}function wt(e){e._currentValue=$u.current,q($u)}function eo(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function no(e,n,t,l){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var d=o.child;s=s.firstContext;e:for(;s!==null;){var b=s;s=o;for(var k=0;k<n.length;k++)if(b.context===n[k]){s.lanes|=t,b=s.alternate,b!==null&&(b.lanes|=t),eo(s.return,t,e),l||(d=null);break e}s=b.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(u(341));d.lanes|=t,s=d.alternate,s!==null&&(s.lanes|=t),eo(d,t,e),d=null}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===e){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function Ka(e,n,t,l){e=null;for(var o=n,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var b=o.type;Mn(o.pendingProps.value,d.value)||(e!==null?e.push(b):e=[b])}}else if(o===Te.current){if(d=o.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(mi):e=[mi])}o=o.return}e!==null&&no(n,e,t,l),n.flags|=262144}function ar(e){for(e=e.firstContext;e!==null;){if(!Mn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function va(e){ga=e,St=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fn(e){return qf(ga,e)}function lr(e,n){return ga===null&&va(e),qf(e,n)}function qf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},St===null){if(e===null)throw Error(u(308));St=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else St=St.next=n;return t}var _g=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Lg=a.unstable_scheduleCallback,Ng=a.unstable_NormalPriority,Pe={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function to(){return{controller:new _g,data:new Map,refCount:0}}function Yl(e){e.refCount--,e.refCount===0&&Lg(Ng,function(){e.controller.abort()})}var Gl=null,ao=0,Ja=0,Pa=null;function Ug(e,n){if(Gl===null){var t=Gl=[];ao=0,Ja=us(),Pa={status:"pending",value:void 0,then:function(l){t.push(l)}}}return ao++,n.then(jf,jf),n}function jf(){if(--ao===0&&Gl!==null){Pa!==null&&(Pa.status="fulfilled");var e=Gl;Gl=null,Ja=0,Pa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Bg(e,n){var t=[],l={status:"pending",value:null,reason:null,then:function(o){t.push(o)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var o=0;o<t.length;o++)(0,t[o])(n)},function(o){for(l.status="rejected",l.reason=o,o=0;o<t.length;o++)(0,t[o])(void 0)}),l}var If=M.S;M.S=function(e,n){kd=yn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ug(e,n),If!==null&&If(e,n)};var ba=E(null);function lo(){var e=ba.current;return e!==null?e:je.pooledCache}function ir(e,n){n===null?w(ba,ba.current):w(ba,n.pool)}function Yf(){var e=lo();return e===null?null:{parent:Pe._currentValue,pool:e}}var $a=Error(u(460)),io=Error(u(474)),rr=Error(u(542)),ur={then:function(){}};function Gf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vf(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(yt,yt),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qf(e),e;default:if(typeof n.status=="string")n.then(yt,yt);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var o=n;o.status="fulfilled",o.value=l}},function(l){if(n.status==="pending"){var o=n;o.status="rejected",o.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qf(e),e}throw wa=n,$a}}function Sa(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(wa=t,$a):t}}var wa=null;function Xf(){if(wa===null)throw Error(u(459));var e=wa;return wa=null,e}function Qf(e){if(e===$a||e===rr)throw Error(u(483))}var el=null,Vl=0;function or(e){var n=Vl;return Vl+=1,el===null&&(el=[]),Vf(el,e,n)}function Xl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function sr(e,n){throw n.$$typeof===x?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ff(e){function n(A,C){if(e){var z=A.deletions;z===null?(A.deletions=[C],A.flags|=16):z.push(C)}}function t(A,C){if(!e)return null;for(;C!==null;)n(A,C),C=C.sibling;return null}function l(A){for(var C=new Map;A!==null;)A.key!==null?C.set(A.key,A):C.set(A.index,A),A=A.sibling;return C}function o(A,C){return A=vt(A,C),A.index=0,A.sibling=null,A}function s(A,C,z){return A.index=z,e?(z=A.alternate,z!==null?(z=z.index,z<C?(A.flags|=67108866,C):z):(A.flags|=67108866,C)):(A.flags|=1048576,C)}function d(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function b(A,C,z,Y){return C===null||C.tag!==6?(C=Fu(z,A.mode,Y),C.return=A,C):(C=o(C,z),C.return=A,C)}function k(A,C,z,Y){var ie=z.type;return ie===L?N(A,C,z.props.children,Y,z.key):C!==null&&(C.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ce&&Sa(ie)===C.type)?(C=o(C,z.props),Xl(C,z),C.return=A,C):(C=nr(z.type,z.key,z.props,null,A.mode,Y),Xl(C,z),C.return=A,C)}function D(A,C,z,Y){return C===null||C.tag!==4||C.stateNode.containerInfo!==z.containerInfo||C.stateNode.implementation!==z.implementation?(C=Wu(z,A.mode,Y),C.return=A,C):(C=o(C,z.children||[]),C.return=A,C)}function N(A,C,z,Y,ie){return C===null||C.tag!==7?(C=pa(z,A.mode,Y,ie),C.return=A,C):(C=o(C,z),C.return=A,C)}function G(A,C,z){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Fu(""+C,A.mode,z),C.return=A,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case S:return z=nr(C.type,C.key,C.props,null,A.mode,z),Xl(z,C),z.return=A,z;case U:return C=Wu(C,A.mode,z),C.return=A,C;case ce:return C=Sa(C),G(A,C,z)}if(W(C)||P(C))return C=pa(C,A.mode,z,null),C.return=A,C;if(typeof C.then=="function")return G(A,or(C),z);if(C.$$typeof===V)return G(A,lr(A,C),z);sr(A,C)}return null}function R(A,C,z,Y){var ie=C!==null?C.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ie!==null?null:b(A,C,""+z,Y);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===ie?k(A,C,z,Y):null;case U:return z.key===ie?D(A,C,z,Y):null;case ce:return z=Sa(z),R(A,C,z,Y)}if(W(z)||P(z))return ie!==null?null:N(A,C,z,Y,null);if(typeof z.then=="function")return R(A,C,or(z),Y);if(z.$$typeof===V)return R(A,C,lr(A,z),Y);sr(A,z)}return null}function _(A,C,z,Y,ie){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return A=A.get(z)||null,b(C,A,""+Y,ie);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:return A=A.get(Y.key===null?z:Y.key)||null,k(C,A,Y,ie);case U:return A=A.get(Y.key===null?z:Y.key)||null,D(C,A,Y,ie);case ce:return Y=Sa(Y),_(A,C,z,Y,ie)}if(W(Y)||P(Y))return A=A.get(z)||null,N(C,A,Y,ie,null);if(typeof Y.then=="function")return _(A,C,z,or(Y),ie);if(Y.$$typeof===V)return _(A,C,z,lr(C,Y),ie);sr(C,Y)}return null}function $(A,C,z,Y){for(var ie=null,ze=null,ne=C,ge=C=0,Ee=null;ne!==null&&ge<z.length;ge++){ne.index>ge?(Ee=ne,ne=null):Ee=ne.sibling;var De=R(A,ne,z[ge],Y);if(De===null){ne===null&&(ne=Ee);break}e&&ne&&De.alternate===null&&n(A,ne),C=s(De,C,ge),ze===null?ie=De:ze.sibling=De,ze=De,ne=Ee}if(ge===z.length)return t(A,ne),Ce&&bt(A,ge),ie;if(ne===null){for(;ge<z.length;ge++)ne=G(A,z[ge],Y),ne!==null&&(C=s(ne,C,ge),ze===null?ie=ne:ze.sibling=ne,ze=ne);return Ce&&bt(A,ge),ie}for(ne=l(ne);ge<z.length;ge++)Ee=_(ne,A,ge,z[ge],Y),Ee!==null&&(e&&Ee.alternate!==null&&ne.delete(Ee.key===null?ge:Ee.key),C=s(Ee,C,ge),ze===null?ie=Ee:ze.sibling=Ee,ze=Ee);return e&&ne.forEach(function(ia){return n(A,ia)}),Ce&&bt(A,ge),ie}function oe(A,C,z,Y){if(z==null)throw Error(u(151));for(var ie=null,ze=null,ne=C,ge=C=0,Ee=null,De=z.next();ne!==null&&!De.done;ge++,De=z.next()){ne.index>ge?(Ee=ne,ne=null):Ee=ne.sibling;var ia=R(A,ne,De.value,Y);if(ia===null){ne===null&&(ne=Ee);break}e&&ne&&ia.alternate===null&&n(A,ne),C=s(ia,C,ge),ze===null?ie=ia:ze.sibling=ia,ze=ia,ne=Ee}if(De.done)return t(A,ne),Ce&&bt(A,ge),ie;if(ne===null){for(;!De.done;ge++,De=z.next())De=G(A,De.value,Y),De!==null&&(C=s(De,C,ge),ze===null?ie=De:ze.sibling=De,ze=De);return Ce&&bt(A,ge),ie}for(ne=l(ne);!De.done;ge++,De=z.next())De=_(ne,A,ge,De.value,Y),De!==null&&(e&&De.alternate!==null&&ne.delete(De.key===null?ge:De.key),C=s(De,C,ge),ze===null?ie=De:ze.sibling=De,ze=De);return e&&ne.forEach(function(Wv){return n(A,Wv)}),Ce&&bt(A,ge),ie}function He(A,C,z,Y){if(typeof z=="object"&&z!==null&&z.type===L&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var ie=z.key;C!==null;){if(C.key===ie){if(ie=z.type,ie===L){if(C.tag===7){t(A,C.sibling),Y=o(C,z.props.children),Y.return=A,A=Y;break e}}else if(C.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ce&&Sa(ie)===C.type){t(A,C.sibling),Y=o(C,z.props),Xl(Y,z),Y.return=A,A=Y;break e}t(A,C);break}else n(A,C);C=C.sibling}z.type===L?(Y=pa(z.props.children,A.mode,Y,z.key),Y.return=A,A=Y):(Y=nr(z.type,z.key,z.props,null,A.mode,Y),Xl(Y,z),Y.return=A,A=Y)}return d(A);case U:e:{for(ie=z.key;C!==null;){if(C.key===ie)if(C.tag===4&&C.stateNode.containerInfo===z.containerInfo&&C.stateNode.implementation===z.implementation){t(A,C.sibling),Y=o(C,z.children||[]),Y.return=A,A=Y;break e}else{t(A,C);break}else n(A,C);C=C.sibling}Y=Wu(z,A.mode,Y),Y.return=A,A=Y}return d(A);case ce:return z=Sa(z),He(A,C,z,Y)}if(W(z))return $(A,C,z,Y);if(P(z)){if(ie=P(z),typeof ie!="function")throw Error(u(150));return z=ie.call(z),oe(A,C,z,Y)}if(typeof z.then=="function")return He(A,C,or(z),Y);if(z.$$typeof===V)return He(A,C,lr(A,z),Y);sr(A,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,C!==null&&C.tag===6?(t(A,C.sibling),Y=o(C,z),Y.return=A,A=Y):(t(A,C),Y=Fu(z,A.mode,Y),Y.return=A,A=Y),d(A)):t(A,C)}return function(A,C,z,Y){try{Vl=0;var ie=He(A,C,z,Y);return el=null,ie}catch(ne){if(ne===$a||ne===rr)throw ne;var ze=On(29,ne,null,A.mode);return ze.lanes=Y,ze.return=A,ze}}}var xa=Ff(!0),Wf=Ff(!1),Yt=!1;function ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vt(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Re&2)!==0){var o=l.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n,n=er(e),Mf(e,null,t),n}return $i(e,l,n,t),er(e)}function Ql(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Hc(e,t)}}function oo(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var o=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var d={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?o=s=d:s=s.next=d,t=t.next}while(t!==null);s===null?o=s=n:s=s.next=n}else o=s=n;t={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var so=!1;function Fl(){if(so){var e=Pa;if(e!==null)throw e}}function Wl(e,n,t,l){so=!1;var o=e.updateQueue;Yt=!1;var s=o.firstBaseUpdate,d=o.lastBaseUpdate,b=o.shared.pending;if(b!==null){o.shared.pending=null;var k=b,D=k.next;k.next=null,d===null?s=D:d.next=D,d=k;var N=e.alternate;N!==null&&(N=N.updateQueue,b=N.lastBaseUpdate,b!==d&&(b===null?N.firstBaseUpdate=D:b.next=D,N.lastBaseUpdate=k))}if(s!==null){var G=o.baseState;d=0,N=D=k=null,b=s;do{var R=b.lane&-536870913,_=R!==b.lane;if(_?(ke&R)===R:(l&R)===R){R!==0&&R===Ja&&(so=!0),N!==null&&(N=N.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var $=e,oe=b;R=n;var He=t;switch(oe.tag){case 1:if($=oe.payload,typeof $=="function"){G=$.call(He,G,R);break e}G=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=oe.payload,R=typeof $=="function"?$.call(He,G,R):$,R==null)break e;G=v({},G,R);break e;case 2:Yt=!0}}R=b.callback,R!==null&&(e.flags|=64,_&&(e.flags|=8192),_=o.callbacks,_===null?o.callbacks=[R]:_.push(R))}else _={lane:R,tag:b.tag,payload:b.payload,callback:b.callback,next:null},N===null?(D=N=_,k=G):N=N.next=_,d|=R;if(b=b.next,b===null){if(b=o.shared.pending,b===null)break;_=b,b=_.next,_.next=null,o.lastBaseUpdate=_,o.shared.pending=null}}while(!0);N===null&&(k=G),o.baseState=k,o.firstBaseUpdate=D,o.lastBaseUpdate=N,s===null&&(o.shared.lanes=0),Zt|=d,e.lanes=d,e.memoizedState=G}}function Zf(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function Kf(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Zf(t[e],n)}var nl=E(null),cr=E(0);function Jf(e,n){e=Rt,w(cr,e),w(nl,n),Rt=e|n.baseLanes}function co(){w(cr,Rt),w(nl,nl.current)}function fo(){Rt=cr.current,q(nl),q(cr)}var _n=E(null),Kn=null;function Xt(e){var n=e.alternate;w(Ke,Ke.current&1),w(_n,e),Kn===null&&(n===null||nl.current!==null||n.memoizedState!==null)&&(Kn=e)}function ho(e){w(Ke,Ke.current),w(_n,e),Kn===null&&(Kn=e)}function Pf(e){e.tag===22?(w(Ke,Ke.current),w(_n,e),Kn===null&&(Kn=e)):Qt()}function Qt(){w(Ke,Ke.current),w(_n,_n.current)}function Ln(e){q(_n),Kn===e&&(Kn=null),q(Ke)}var Ke=E(0);function fr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||bs(t)||Ss(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xt=0,pe=null,Ue=null,$e=null,hr=!1,tl=!1,Ta=!1,dr=0,Zl=0,al=null,Hg=0;function We(){throw Error(u(321))}function mo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Mn(e[t],n[t]))return!1;return!0}function po(e,n,t,l,o,s){return xt=s,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,M.H=e===null||e.memoizedState===null?Nh:Ro,Ta=!1,s=t(l,o),Ta=!1,tl&&(s=eh(n,t,l,o)),$f(e),s}function $f(e){M.H=Pl;var n=Ue!==null&&Ue.next!==null;if(xt=0,$e=Ue=pe=null,hr=!1,Zl=0,al=null,n)throw Error(u(300));e===null||en||(e=e.dependencies,e!==null&&ar(e)&&(en=!0))}function eh(e,n,t,l){pe=e;var o=0;do{if(tl&&(al=null),Zl=0,tl=!1,25<=o)throw Error(u(301));if(o+=1,$e=Ue=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}M.H=Uh,s=n(t,l)}while(tl);return s}function qg(){var e=M.H,n=e.useState()[0];return n=typeof n.then=="function"?Kl(n):n,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(pe.flags|=1024),n}function yo(){var e=dr!==0;return dr=0,e}function go(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function vo(e){if(hr){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hr=!1}xt=0,$e=Ue=pe=null,tl=!1,Zl=dr=0,al=null}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?pe.memoizedState=$e=e:$e=$e.next=e,$e}function Je(){if(Ue===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var n=$e===null?pe.memoizedState:$e.next;if(n!==null)$e=n,Ue=e;else{if(e===null)throw pe.alternate===null?Error(u(467)):Error(u(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},$e===null?pe.memoizedState=$e=e:$e=$e.next=e}return $e}function mr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kl(e){var n=Zl;return Zl+=1,al===null&&(al=[]),e=Vf(al,e,n),n=pe,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,M.H=n===null||n.memoizedState===null?Nh:Ro),e}function pr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Kl(e);if(e.$$typeof===V)return fn(e)}throw Error(u(438,String(e)))}function bo(e){var n=null,t=pe.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var l=pe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(o){return o.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=mr(),pe.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),l=0;l<e;l++)t[l]=ye;return n.index++,t}function Tt(e,n){return typeof n=="function"?n(e):n}function yr(e){var n=Je();return So(n,Ue,e)}function So(e,n,t){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=t;var o=e.baseQueue,s=l.pending;if(s!==null){if(o!==null){var d=o.next;o.next=s.next,s.next=d}n.baseQueue=o=s,l.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{n=o.next;var b=d=null,k=null,D=n,N=!1;do{var G=D.lane&-536870913;if(G!==D.lane?(ke&G)===G:(xt&G)===G){var R=D.revertLane;if(R===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),G===Ja&&(N=!0);else if((xt&R)===R){D=D.next,R===Ja&&(N=!0);continue}else G={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},k===null?(b=k=G,d=s):k=k.next=G,pe.lanes|=R,Zt|=R;G=D.action,Ta&&t(s,G),s=D.hasEagerState?D.eagerState:t(s,G)}else R={lane:G,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},k===null?(b=k=R,d=s):k=k.next=R,pe.lanes|=G,Zt|=G;D=D.next}while(D!==null&&D!==n);if(k===null?d=s:k.next=b,!Mn(s,e.memoizedState)&&(en=!0,N&&(t=Pa,t!==null)))throw t;e.memoizedState=s,e.baseState=d,e.baseQueue=k,l.lastRenderedState=s}return o===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function wo(e){var n=Je(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var l=t.dispatch,o=t.pending,s=n.memoizedState;if(o!==null){t.pending=null;var d=o=o.next;do s=e(s,d.action),d=d.next;while(d!==o);Mn(s,n.memoizedState)||(en=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,l]}function nh(e,n,t){var l=pe,o=Je(),s=Ce;if(s){if(t===void 0)throw Error(u(407));t=t()}else t=n();var d=!Mn((Ue||o).memoizedState,t);if(d&&(o.memoizedState=t,en=!0),o=o.queue,ko(lh.bind(null,l,o,e),[e]),o.getSnapshot!==n||d||$e!==null&&$e.memoizedState.tag&1){if(l.flags|=2048,ll(9,{destroy:void 0},ah.bind(null,l,o,t,n),null),je===null)throw Error(u(349));s||(xt&127)!==0||th(l,n,t)}return t}function th(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=pe.updateQueue,n===null?(n=mr(),pe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ah(e,n,t,l){n.value=t,n.getSnapshot=l,ih(n)&&rh(e)}function lh(e,n,t){return t(function(){ih(n)&&rh(e)})}function ih(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Mn(e,t)}catch{return!0}}function rh(e){var n=ma(e,2);n!==null&&Cn(n,e,2)}function xo(e){var n=vn();if(typeof e=="function"){var t=e;if(e=t(),Ta){bn(!0);try{t()}finally{bn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tt,lastRenderedState:e},n}function uh(e,n,t,l){return e.baseState=t,So(e,Ue,typeof l=="function"?l:Tt)}function jg(e,n,t,l,o){if(br(e))throw Error(u(485));if(e=n.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};M.T!==null?t(!0):s.isTransition=!1,l(s),t=n.pending,t===null?(s.next=n.pending=s,oh(n,s)):(s.next=t.next,n.pending=t.next=s)}}function oh(e,n){var t=n.action,l=n.payload,o=e.state;if(n.isTransition){var s=M.T,d={};M.T=d;try{var b=t(o,l),k=M.S;k!==null&&k(d,b),sh(e,n,b)}catch(D){To(e,n,D)}finally{s!==null&&d.types!==null&&(s.types=d.types),M.T=s}}else try{s=t(o,l),sh(e,n,s)}catch(D){To(e,n,D)}}function sh(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){ch(e,n,l)},function(l){return To(e,n,l)}):ch(e,n,t)}function ch(e,n,t){n.status="fulfilled",n.value=t,fh(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,oh(e,t)))}function To(e,n,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=t,fh(n),n=n.next;while(n!==l)}e.action=null}function fh(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function hh(e,n){return n}function dh(e,n){if(Ce){var t=je.formState;if(t!==null){e:{var l=pe;if(Ce){if(Ge){n:{for(var o=Ge,s=Zn;o.nodeType!==8;){if(!s){o=null;break n}if(o=Jn(o.nextSibling),o===null){o=null;break n}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){Ge=Jn(o.nextSibling),l=o.data==="F!";break e}}jt(l)}l=!1}l&&(n=t[0])}}return t=vn(),t.memoizedState=t.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hh,lastRenderedState:n},t.queue=l,t=Oh.bind(null,pe,l),l.dispatch=t,l=xo(!1),s=Do.bind(null,pe,!1,l.queue),l=vn(),o={state:n,dispatch:null,action:e,pending:null},l.queue=o,t=jg.bind(null,pe,o,s,t),o.dispatch=t,l.memoizedState=e,[n,t,!1]}function mh(e){var n=Je();return ph(n,Ue,e)}function ph(e,n,t){if(n=So(e,n,hh)[0],e=yr(Tt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Kl(n)}catch(d){throw d===$a?rr:d}else l=n;n=Je();var o=n.queue,s=o.dispatch;return t!==n.memoizedState&&(pe.flags|=2048,ll(9,{destroy:void 0},Ig.bind(null,o,t),null)),[l,s,e]}function Ig(e,n){e.action=n}function yh(e){var n=Je(),t=Ue;if(t!==null)return ph(n,t,e);Je(),n=n.memoizedState,t=Je();var l=t.queue.dispatch;return t.memoizedState=e,[n,l,!1]}function ll(e,n,t,l){return e={tag:e,create:t,deps:l,inst:n,next:null},n=pe.updateQueue,n===null&&(n=mr(),pe.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e),e}function gh(){return Je().memoizedState}function gr(e,n,t,l){var o=vn();pe.flags|=e,o.memoizedState=ll(1|n,{destroy:void 0},t,l===void 0?null:l)}function vr(e,n,t,l){var o=Je();l=l===void 0?null:l;var s=o.memoizedState.inst;Ue!==null&&l!==null&&mo(l,Ue.memoizedState.deps)?o.memoizedState=ll(n,s,t,l):(pe.flags|=e,o.memoizedState=ll(1|n,s,t,l))}function vh(e,n){gr(8390656,8,e,n)}function ko(e,n){vr(2048,8,e,n)}function Yg(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=mr(),pe.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function bh(e){var n=Je().memoizedState;return Yg({ref:n,nextImpl:e}),function(){if((Re&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function Sh(e,n){return vr(4,2,e,n)}function wh(e,n){return vr(4,4,e,n)}function xh(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Th(e,n,t){t=t!=null?t.concat([e]):null,vr(4,4,xh.bind(null,n,e),t)}function Eo(){}function kh(e,n){var t=Je();n=n===void 0?null:n;var l=t.memoizedState;return n!==null&&mo(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function Eh(e,n){var t=Je();n=n===void 0?null:n;var l=t.memoizedState;if(n!==null&&mo(n,l[1]))return l[0];if(l=e(),Ta){bn(!0);try{e()}finally{bn(!1)}}return t.memoizedState=[l,n],l}function Co(e,n,t){return t===void 0||(xt&1073741824)!==0&&(ke&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Cd(),pe.lanes|=e,Zt|=e,t)}function Ch(e,n,t,l){return Mn(t,n)?t:nl.current!==null?(e=Co(e,t,l),Mn(e,n)||(en=!0),e):(xt&42)===0||(xt&1073741824)!==0&&(ke&261930)===0?(en=!0,e.memoizedState=t):(e=Cd(),pe.lanes|=e,Zt|=e,n)}function Ah(e,n,t,l,o){var s=Q.p;Q.p=s!==0&&8>s?s:8;var d=M.T,b={};M.T=b,Do(e,!1,n,t);try{var k=o(),D=M.S;if(D!==null&&D(b,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var N=Bg(k,l);Jl(e,n,N,Bn(e))}else Jl(e,n,l,Bn(e))}catch(G){Jl(e,n,{then:function(){},status:"rejected",reason:G},Bn())}finally{Q.p=s,d!==null&&b.types!==null&&(d.types=b.types),M.T=d}}function Gg(){}function Ao(e,n,t,l){if(e.tag!==5)throw Error(u(476));var o=zh(e).queue;Ah(e,o,n,te,t===null?Gg:function(){return Dh(e),t(l)})}function zh(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tt,lastRenderedState:te},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Dh(e){var n=zh(e);n.next===null&&(n=e.alternate.memoizedState),Jl(e,n.next.queue,{},Bn())}function zo(){return fn(mi)}function Rh(){return Je().memoizedState}function Mh(){return Je().memoizedState}function Vg(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Bn();e=Gt(t);var l=Vt(n,e,t);l!==null&&(Cn(l,n,t),Ql(l,n,t)),n={cache:to()},e.payload=n;return}n=n.return}}function Xg(e,n,t){var l=Bn();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},br(e)?_h(n,t):(t=Xu(e,n,t,l),t!==null&&(Cn(t,e,l),Lh(t,n,l)))}function Oh(e,n,t){var l=Bn();Jl(e,n,t,l)}function Jl(e,n,t,l){var o={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(br(e))_h(n,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var d=n.lastRenderedState,b=s(d,t);if(o.hasEagerState=!0,o.eagerState=b,Mn(b,d))return $i(e,n,o,0),je===null&&Pi(),!1}catch{}if(t=Xu(e,n,o,l),t!==null)return Cn(t,e,l),Lh(t,n,l),!0}return!1}function Do(e,n,t,l){if(l={lane:2,revertLane:us(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},br(e)){if(n)throw Error(u(479))}else n=Xu(e,t,l,2),n!==null&&Cn(n,e,2)}function br(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function _h(e,n){tl=hr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Lh(e,n,t){if((t&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Hc(e,t)}}var Pl={readContext:fn,use:pr,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};Pl.useEffectEvent=We;var Nh={readContext:fn,use:pr,useCallback:function(e,n){return vn().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:vh,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,gr(4194308,4,xh.bind(null,n,e),t)},useLayoutEffect:function(e,n){return gr(4194308,4,e,n)},useInsertionEffect:function(e,n){gr(4,2,e,n)},useMemo:function(e,n){var t=vn();n=n===void 0?null:n;var l=e();if(Ta){bn(!0);try{e()}finally{bn(!1)}}return t.memoizedState=[l,n],l},useReducer:function(e,n,t){var l=vn();if(t!==void 0){var o=t(n);if(Ta){bn(!0);try{t(n)}finally{bn(!1)}}}else o=n;return l.memoizedState=l.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},l.queue=e,e=e.dispatch=Xg.bind(null,pe,e),[l.memoizedState,e]},useRef:function(e){var n=vn();return e={current:e},n.memoizedState=e},useState:function(e){e=xo(e);var n=e.queue,t=Oh.bind(null,pe,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Eo,useDeferredValue:function(e,n){var t=vn();return Co(t,e,n)},useTransition:function(){var e=xo(!1);return e=Ah.bind(null,pe,e.queue,!0,!1),vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var l=pe,o=vn();if(Ce){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),je===null)throw Error(u(349));(ke&127)!==0||th(l,n,t)}o.memoizedState=t;var s={value:t,getSnapshot:n};return o.queue=s,vh(lh.bind(null,l,s,e),[e]),l.flags|=2048,ll(9,{destroy:void 0},ah.bind(null,l,s,t,n),null),t},useId:function(){var e=vn(),n=je.identifierPrefix;if(Ce){var t=rt,l=it;t=(l&~(1<<32-qe(l)-1)).toString(32)+t,n="_"+n+"R_"+t,t=dr++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=Hg++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:zo,useFormState:dh,useActionState:dh,useOptimistic:function(e){var n=vn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Do.bind(null,pe,!0,t),t.dispatch=n,[e,n]},useMemoCache:bo,useCacheRefresh:function(){return vn().memoizedState=Vg.bind(null,pe)},useEffectEvent:function(e){var n=vn(),t={impl:e};return n.memoizedState=t,function(){if((Re&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},Ro={readContext:fn,use:pr,useCallback:kh,useContext:fn,useEffect:ko,useImperativeHandle:Th,useInsertionEffect:Sh,useLayoutEffect:wh,useMemo:Eh,useReducer:yr,useRef:gh,useState:function(){return yr(Tt)},useDebugValue:Eo,useDeferredValue:function(e,n){var t=Je();return Ch(t,Ue.memoizedState,e,n)},useTransition:function(){var e=yr(Tt)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:Kl(e),n]},useSyncExternalStore:nh,useId:Rh,useHostTransitionStatus:zo,useFormState:mh,useActionState:mh,useOptimistic:function(e,n){var t=Je();return uh(t,Ue,e,n)},useMemoCache:bo,useCacheRefresh:Mh};Ro.useEffectEvent=bh;var Uh={readContext:fn,use:pr,useCallback:kh,useContext:fn,useEffect:ko,useImperativeHandle:Th,useInsertionEffect:Sh,useLayoutEffect:wh,useMemo:Eh,useReducer:wo,useRef:gh,useState:function(){return wo(Tt)},useDebugValue:Eo,useDeferredValue:function(e,n){var t=Je();return Ue===null?Co(t,e,n):Ch(t,Ue.memoizedState,e,n)},useTransition:function(){var e=wo(Tt)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:Kl(e),n]},useSyncExternalStore:nh,useId:Rh,useHostTransitionStatus:zo,useFormState:yh,useActionState:yh,useOptimistic:function(e,n){var t=Je();return Ue!==null?uh(t,Ue,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:bo,useCacheRefresh:Mh};Uh.useEffectEvent=bh;function Mo(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:v({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Oo={enqueueSetState:function(e,n,t){e=e._reactInternals;var l=Bn(),o=Gt(l);o.payload=n,t!=null&&(o.callback=t),n=Vt(e,o,l),n!==null&&(Cn(n,e,l),Ql(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=Bn(),o=Gt(l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Vt(e,o,l),n!==null&&(Cn(n,e,l),Ql(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Bn(),l=Gt(t);l.tag=2,n!=null&&(l.callback=n),n=Vt(e,l,t),n!==null&&(Cn(n,e,t),Ql(n,e,t))}};function Bh(e,n,t,l,o,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,d):n.prototype&&n.prototype.isPureReactComponent?!Hl(t,l)||!Hl(o,s):!0}function Hh(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&Oo.enqueueReplaceState(n,n.state,null)}function ka(e,n){var t=n;if("ref"in n){t={};for(var l in n)l!=="ref"&&(t[l]=n[l])}if(e=e.defaultProps){t===n&&(t=v({},t));for(var o in e)t[o]===void 0&&(t[o]=e[o])}return t}function qh(e){Ji(e)}function jh(e){console.error(e)}function Ih(e){Ji(e)}function Sr(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Yh(e,n,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function _o(e,n,t){return t=Gt(t),t.tag=3,t.payload={element:null},t.callback=function(){Sr(e,n)},t}function Gh(e){return e=Gt(e),e.tag=3,e}function Vh(e,n,t,l){var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=l.value;e.payload=function(){return o(s)},e.callback=function(){Yh(n,t,l)}}var d=t.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Yh(n,t,l),typeof o!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Qg(e,n,t,l,o){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=t.alternate,n!==null&&Ka(n,t,o,!0),t=_n.current,t!==null){switch(t.tag){case 31:case 13:return Kn===null?Or():t.alternate===null&&Ze===0&&(Ze=3),t.flags&=-257,t.flags|=65536,t.lanes=o,l===ur?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([l]):n.add(l),ls(e,l,o)),!1;case 22:return t.flags|=65536,l===ur?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([l]):t.add(l)),ls(e,l,o)),!1}throw Error(u(435,t.tag))}return ls(e,l,o),Or(),!1}if(Ce)return n=_n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=o,l!==Ju&&(e=Error(u(422),{cause:l}),Il(Qn(e,t)))):(l!==Ju&&(n=Error(u(423),{cause:l}),Il(Qn(n,t))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,l=Qn(l,t),o=_o(e.stateNode,l,o),oo(e,o),Ze!==4&&(Ze=2)),!1;var s=Error(u(520),{cause:l});if(s=Qn(s,t),ri===null?ri=[s]:ri.push(s),Ze!==4&&(Ze=2),n===null)return!0;l=Qn(l,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=o&-o,t.lanes|=e,e=_o(t.stateNode,l,e),oo(t,e),!1;case 1:if(n=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Kt===null||!Kt.has(s))))return t.flags|=65536,o&=-o,t.lanes|=o,o=Gh(o),Vh(o,e,t,l),oo(t,o),!1}t=t.return}while(t!==null);return!1}var Lo=Error(u(461)),en=!1;function hn(e,n,t,l){n.child=e===null?Wf(n,null,t,l):xa(n,e.child,t,l)}function Xh(e,n,t,l,o){t=t.render;var s=n.ref;if("ref"in l){var d={};for(var b in l)b!=="ref"&&(d[b]=l[b])}else d=l;return va(n),l=po(e,n,t,d,s,o),b=yo(),e!==null&&!en?(go(e,n,o),kt(e,n,o)):(Ce&&b&&Zu(n),n.flags|=1,hn(e,n,l,o),n.child)}function Qh(e,n,t,l,o){if(e===null){var s=t.type;return typeof s=="function"&&!Qu(s)&&s.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=s,Fh(e,n,s,l,o)):(e=nr(t.type,null,l,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!Yo(e,o)){var d=s.memoizedProps;if(t=t.compare,t=t!==null?t:Hl,t(d,l)&&e.ref===n.ref)return kt(e,n,o)}return n.flags|=1,e=vt(s,l),e.ref=n.ref,e.return=n,n.child=e}function Fh(e,n,t,l,o){if(e!==null){var s=e.memoizedProps;if(Hl(s,l)&&e.ref===n.ref)if(en=!1,n.pendingProps=l=s,Yo(e,o))(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,kt(e,n,o)}return No(e,n,t,l,o)}function Wh(e,n,t,l){var o=l.children,s=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(l=n.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;l=o&~s}else l=0,n.child=null;return Zh(e,n,s,t,l)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ir(n,s!==null?s.cachePool:null),s!==null?Jf(n,s):co(),Pf(n);else return l=n.lanes=536870912,Zh(e,n,s!==null?s.baseLanes|t:t,t,l)}else s!==null?(ir(n,s.cachePool),Jf(n,s),Qt(),n.memoizedState=null):(e!==null&&ir(n,null),co(),Qt());return hn(e,n,o,t),n.child}function $l(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Zh(e,n,t,l,o){var s=lo();return s=s===null?null:{parent:Pe._currentValue,pool:s},n.memoizedState={baseLanes:t,cachePool:s},e!==null&&ir(n,null),co(),Pf(n),e!==null&&Ka(e,n,l,!0),n.childLanes=o,null}function wr(e,n){return n=Tr({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Kh(e,n,t){return xa(n,e.child,null,t),e=wr(n,n.pendingProps),e.flags|=2,Ln(n),n.memoizedState=null,e}function Fg(e,n,t){var l=n.pendingProps,o=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(l.mode==="hidden")return e=wr(n,l),n.lanes=536870912,$l(null,e);if(ho(n),(e=Ge)?(e=om(e,Zn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ht!==null?{id:it,overflow:rt}:null,retryLane:536870912,hydrationErrors:null},t=_f(e),t.return=n,n.child=t,cn=n,Ge=null)):e=null,e===null)throw jt(n);return n.lanes=536870912,null}return wr(n,l)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(ho(n),o)if(n.flags&256)n.flags&=-257,n=Kh(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(en||Ka(e,n,t,!1),o=(t&e.childLanes)!==0,en||o){if(l=je,l!==null&&(d=qc(l,t),d!==0&&d!==s.retryLane))throw s.retryLane=d,ma(e,d),Cn(l,e,d),Lo;Or(),n=Kh(e,n,t)}else e=s.treeContext,Ge=Jn(d.nextSibling),cn=n,Ce=!0,qt=null,Zn=!1,e!==null&&Uf(n,e),n=wr(n,l),n.flags|=4096;return n}return e=vt(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function xr(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function No(e,n,t,l,o){return va(n),t=po(e,n,t,l,void 0,o),l=yo(),e!==null&&!en?(go(e,n,o),kt(e,n,o)):(Ce&&l&&Zu(n),n.flags|=1,hn(e,n,t,o),n.child)}function Jh(e,n,t,l,o,s){return va(n),n.updateQueue=null,t=eh(n,l,t,o),$f(e),l=yo(),e!==null&&!en?(go(e,n,s),kt(e,n,s)):(Ce&&l&&Zu(n),n.flags|=1,hn(e,n,t,s),n.child)}function Ph(e,n,t,l,o){if(va(n),n.stateNode===null){var s=Qa,d=t.contextType;typeof d=="object"&&d!==null&&(s=fn(d)),s=new t(l,s),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Oo,n.stateNode=s,s._reactInternals=n,s=n.stateNode,s.props=l,s.state=n.memoizedState,s.refs={},ro(n),d=t.contextType,s.context=typeof d=="object"&&d!==null?fn(d):Qa,s.state=n.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Mo(n,t,d,l),s.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Oo.enqueueReplaceState(s,s.state,null),Wl(n,l,s,o),Fl(),s.state=n.memoizedState),typeof s.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){s=n.stateNode;var b=n.memoizedProps,k=ka(t,b);s.props=k;var D=s.context,N=t.contextType;d=Qa,typeof N=="object"&&N!==null&&(d=fn(N));var G=t.getDerivedStateFromProps;N=typeof G=="function"||typeof s.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,N||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(b||D!==d)&&Hh(n,s,l,d),Yt=!1;var R=n.memoizedState;s.state=R,Wl(n,l,s,o),Fl(),D=n.memoizedState,b||R!==D||Yt?(typeof G=="function"&&(Mo(n,t,G,l),D=n.memoizedState),(k=Yt||Bh(n,t,k,l,R,D,d))?(N||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=D),s.props=l,s.state=D,s.context=d,l=k):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{s=n.stateNode,uo(e,n),d=n.memoizedProps,N=ka(t,d),s.props=N,G=n.pendingProps,R=s.context,D=t.contextType,k=Qa,typeof D=="object"&&D!==null&&(k=fn(D)),b=t.getDerivedStateFromProps,(D=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==G||R!==k)&&Hh(n,s,l,k),Yt=!1,R=n.memoizedState,s.state=R,Wl(n,l,s,o),Fl();var _=n.memoizedState;d!==G||R!==_||Yt||e!==null&&e.dependencies!==null&&ar(e.dependencies)?(typeof b=="function"&&(Mo(n,t,b,l),_=n.memoizedState),(N=Yt||Bh(n,t,N,l,R,_,k)||e!==null&&e.dependencies!==null&&ar(e.dependencies))?(D||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,_,k),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,_,k)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=_),s.props=l,s.state=_,s.context=k,l=N):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),l=!1)}return s=l,xr(e,n),l=(n.flags&128)!==0,s||l?(s=n.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:s.render(),n.flags|=1,e!==null&&l?(n.child=xa(n,e.child,null,o),n.child=xa(n,null,t,o)):hn(e,n,t,o),n.memoizedState=s.state,e=n.child):e=kt(e,n,o),e}function $h(e,n,t,l){return ya(),n.flags|=256,hn(e,n,t,l),n.child}var Uo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bo(e){return{baseLanes:e,cachePool:Yf()}}function Ho(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Un),e}function ed(e,n,t){var l=n.pendingProps,o=!1,s=(n.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),d&&(o=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(o?Xt(n):Qt(),(e=Ge)?(e=om(e,Zn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ht!==null?{id:it,overflow:rt}:null,retryLane:536870912,hydrationErrors:null},t=_f(e),t.return=n,n.child=t,cn=n,Ge=null)):e=null,e===null)throw jt(n);return Ss(e)?n.lanes=32:n.lanes=536870912,null}var b=l.children;return l=l.fallback,o?(Qt(),o=n.mode,b=Tr({mode:"hidden",children:b},o),l=pa(l,o,t,null),b.return=n,l.return=n,b.sibling=l,n.child=b,l=n.child,l.memoizedState=Bo(t),l.childLanes=Ho(e,d,t),n.memoizedState=Uo,$l(null,l)):(Xt(n),qo(n,b))}var k=e.memoizedState;if(k!==null&&(b=k.dehydrated,b!==null)){if(s)n.flags&256?(Xt(n),n.flags&=-257,n=jo(e,n,t)):n.memoizedState!==null?(Qt(),n.child=e.child,n.flags|=128,n=null):(Qt(),b=l.fallback,o=n.mode,l=Tr({mode:"visible",children:l.children},o),b=pa(b,o,t,null),b.flags|=2,l.return=n,b.return=n,l.sibling=b,n.child=l,xa(n,e.child,null,t),l=n.child,l.memoizedState=Bo(t),l.childLanes=Ho(e,d,t),n.memoizedState=Uo,n=$l(null,l));else if(Xt(n),Ss(b)){if(d=b.nextSibling&&b.nextSibling.dataset,d)var D=d.dgst;d=D,l=Error(u(419)),l.stack="",l.digest=d,Il({value:l,source:null,stack:null}),n=jo(e,n,t)}else if(en||Ka(e,n,t,!1),d=(t&e.childLanes)!==0,en||d){if(d=je,d!==null&&(l=qc(d,t),l!==0&&l!==k.retryLane))throw k.retryLane=l,ma(e,l),Cn(d,e,l),Lo;bs(b)||Or(),n=jo(e,n,t)}else bs(b)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,Ge=Jn(b.nextSibling),cn=n,Ce=!0,qt=null,Zn=!1,e!==null&&Uf(n,e),n=qo(n,l.children),n.flags|=4096);return n}return o?(Qt(),b=l.fallback,o=n.mode,k=e.child,D=k.sibling,l=vt(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,D!==null?b=vt(D,b):(b=pa(b,o,t,null),b.flags|=2),b.return=n,l.return=n,l.sibling=b,n.child=l,$l(null,l),l=n.child,b=e.child.memoizedState,b===null?b=Bo(t):(o=b.cachePool,o!==null?(k=Pe._currentValue,o=o.parent!==k?{parent:k,pool:k}:o):o=Yf(),b={baseLanes:b.baseLanes|t,cachePool:o}),l.memoizedState=b,l.childLanes=Ho(e,d,t),n.memoizedState=Uo,$l(e.child,l)):(Xt(n),t=e.child,e=t.sibling,t=vt(t,{mode:"visible",children:l.children}),t.return=n,t.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=t,n.memoizedState=null,t)}function qo(e,n){return n=Tr({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Tr(e,n){return e=On(22,e,null,n),e.lanes=0,e}function jo(e,n,t){return xa(n,e.child,null,t),e=qo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function nd(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),eo(e.return,n,t)}function Io(e,n,t,l,o,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:o,treeForkCount:s}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=t,d.tailMode=o,d.treeForkCount=s)}function td(e,n,t){var l=n.pendingProps,o=l.revealOrder,s=l.tail;l=l.children;var d=Ke.current,b=(d&2)!==0;if(b?(d=d&1|2,n.flags|=128):d&=1,w(Ke,d),hn(e,n,l,t),l=Ce?jl:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nd(e,t,n);else if(e.tag===19)nd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&fr(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Io(n,!1,o,t,s,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&fr(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Io(n,!0,t,null,s,l);break;case"together":Io(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function kt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Zt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Ka(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=vt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=vt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Yo(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ar(e)))}function Wg(e,n,t){switch(n.tag){case 3:Xe(n,n.stateNode.containerInfo),It(n,Pe,e.memoizedState.cache),ya();break;case 27:case 5:Yn(n);break;case 4:Xe(n,n.stateNode.containerInfo);break;case 10:It(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ho(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Xt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?ed(e,n,t):(Xt(n),e=kt(e,n,t),e!==null?e.sibling:null);Xt(n);break;case 19:var o=(e.flags&128)!==0;if(l=(t&n.childLanes)!==0,l||(Ka(e,n,t,!1),l=(t&n.childLanes)!==0),o){if(l)return td(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),w(Ke,Ke.current),l)break;return null;case 22:return n.lanes=0,Wh(e,n,t,n.pendingProps);case 24:It(n,Pe,e.memoizedState.cache)}return kt(e,n,t)}function ad(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)en=!0;else{if(!Yo(e,t)&&(n.flags&128)===0)return en=!1,Wg(e,n,t);en=(e.flags&131072)!==0}else en=!1,Ce&&(n.flags&1048576)!==0&&Nf(n,jl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=Sa(n.elementType),n.type=e,typeof e=="function")Qu(e)?(l=ka(e,l),n.tag=1,n=Ph(null,n,e,l,t)):(n.tag=0,n=No(null,n,e,l,t));else{if(e!=null){var o=e.$$typeof;if(o===re){n.tag=11,n=Xh(null,n,e,l,t);break e}else if(o===K){n.tag=14,n=Qh(null,n,e,l,t);break e}}throw n=ae(e)||e,Error(u(306,n,""))}}return n;case 0:return No(e,n,n.type,n.pendingProps,t);case 1:return l=n.type,o=ka(l,n.pendingProps),Ph(e,n,l,o,t);case 3:e:{if(Xe(n,n.stateNode.containerInfo),e===null)throw Error(u(387));l=n.pendingProps;var s=n.memoizedState;o=s.element,uo(e,n),Wl(n,l,null,t);var d=n.memoizedState;if(l=d.cache,It(n,Pe,l),l!==s.cache&&no(n,[Pe],t,!0),Fl(),l=d.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){n=$h(e,n,l,t);break e}else if(l!==o){o=Qn(Error(u(424)),n),Il(o),n=$h(e,n,l,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ge=Jn(e.firstChild),cn=n,Ce=!0,qt=null,Zn=!0,t=Wf(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ya(),l===o){n=kt(e,n,t);break e}hn(e,n,l,t)}n=n.child}return n;case 26:return xr(e,n),e===null?(t=mm(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ce||(t=n.type,e=n.pendingProps,l=qr(le.current).createElement(t),l[sn]=n,l[Sn]=e,dn(l,t,e),rn(l),n.stateNode=l):n.memoizedState=mm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yn(n),e===null&&Ce&&(l=n.stateNode=fm(n.type,n.pendingProps,le.current),cn=n,Zn=!0,o=Ge,ea(n.type)?(ws=o,Ge=Jn(l.firstChild)):Ge=o),hn(e,n,n.pendingProps.children,t),xr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((o=l=Ge)&&(l=kv(l,n.type,n.pendingProps,Zn),l!==null?(n.stateNode=l,cn=n,Ge=Jn(l.firstChild),Zn=!1,o=!0):o=!1),o||jt(n)),Yn(n),o=n.type,s=n.pendingProps,d=e!==null?e.memoizedProps:null,l=s.children,ys(o,s)?l=null:d!==null&&ys(o,d)&&(n.flags|=32),n.memoizedState!==null&&(o=po(e,n,qg,null,null,t),mi._currentValue=o),xr(e,n),hn(e,n,l,t),n.child;case 6:return e===null&&Ce&&((e=t=Ge)&&(t=Ev(t,n.pendingProps,Zn),t!==null?(n.stateNode=t,cn=n,Ge=null,e=!0):e=!1),e||jt(n)),null;case 13:return ed(e,n,t);case 4:return Xe(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=xa(n,null,l,t):hn(e,n,l,t),n.child;case 11:return Xh(e,n,n.type,n.pendingProps,t);case 7:return hn(e,n,n.pendingProps,t),n.child;case 8:return hn(e,n,n.pendingProps.children,t),n.child;case 12:return hn(e,n,n.pendingProps.children,t),n.child;case 10:return l=n.pendingProps,It(n,n.type,l.value),hn(e,n,l.children,t),n.child;case 9:return o=n.type._context,l=n.pendingProps.children,va(n),o=fn(o),l=l(o),n.flags|=1,hn(e,n,l,t),n.child;case 14:return Qh(e,n,n.type,n.pendingProps,t);case 15:return Fh(e,n,n.type,n.pendingProps,t);case 19:return td(e,n,t);case 31:return Fg(e,n,t);case 22:return Wh(e,n,t,n.pendingProps);case 24:return va(n),l=fn(Pe),e===null?(o=lo(),o===null&&(o=je,s=to(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=t),o=s),n.memoizedState={parent:l,cache:o},ro(n),It(n,Pe,o)):((e.lanes&t)!==0&&(uo(e,n),Wl(n,null,null,t),Fl()),o=e.memoizedState,s=n.memoizedState,o.parent!==l?(o={parent:l,cache:l},n.memoizedState=o,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=o),It(n,Pe,l)):(l=s.cache,It(n,Pe,l),l!==o.cache&&no(n,[Pe],t,!0))),hn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function Et(e){e.flags|=4}function Go(e,n,t,l,o){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Rd())e.flags|=8192;else throw wa=ur,io}else e.flags&=-16777217}function ld(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bm(n))if(Rd())e.flags|=8192;else throw wa=ur,io}function kr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Uc():536870912,e.lanes|=n,ol|=n)}function ei(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function Zg(e,n,t){var l=n.pendingProps;switch(Ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return t=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),wt(Pe),Ne(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Za(n)?Et(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pu())),Ve(n),null;case 26:var o=n.type,s=n.memoizedState;return e===null?(Et(n),s!==null?(Ve(n),ld(n,s)):(Ve(n),Go(n,o,null,l,t))):s?s!==e.memoizedState?(Et(n),Ve(n),ld(n,s)):(Ve(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&Et(n),Ve(n),Go(n,o,e,l,t)),null;case 27:if(ht(n),t=le.current,o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Et(n);else{if(!l){if(n.stateNode===null)throw Error(u(166));return Ve(n),null}e=J.current,Za(n)?Bf(n):(e=fm(o,l,t),n.stateNode=e,Et(n))}return Ve(n),null;case 5:if(ht(n),o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Et(n);else{if(!l){if(n.stateNode===null)throw Error(u(166));return Ve(n),null}if(s=J.current,Za(n))Bf(n);else{var d=qr(le.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?d.createElement(o,{is:l.is}):d.createElement(o)}}s[sn]=n,s[Sn]=l;e:for(d=n.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}n.stateNode=s;e:switch(dn(s,o,l),o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Et(n)}}return Ve(n),Go(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Et(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(u(166));if(e=le.current,Za(n)){if(e=n.stateNode,t=n.memoizedProps,l=null,o=cn,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}e[sn]=n,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||em(e.nodeValue,t)),e||jt(n,!0)}else e=qr(e).createTextNode(l),e[sn]=n,n.stateNode=e}return Ve(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(l=Za(n),t!==null){if(e===null){if(!l)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[sn]=n}else ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),e=!1}else t=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(Ln(n),n):(Ln(n),null);if((n.flags&128)!==0)throw Error(u(558))}return Ve(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Za(n),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[sn]=n}else ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),o=!1}else o=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return n.flags&256?(Ln(n),n):(Ln(n),null)}return Ln(n),(n.flags&128)!==0?(n.lanes=t,n):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=n.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==o&&(l.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),kr(n,n.updateQueue),Ve(n),null);case 4:return Ne(),e===null&&fs(n.stateNode.containerInfo),Ve(n),null;case 10:return wt(n.type),Ve(n),null;case 19:if(q(Ke),l=n.memoizedState,l===null)return Ve(n),null;if(o=(n.flags&128)!==0,s=l.rendering,s===null)if(o)ei(l,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=fr(e),s!==null){for(n.flags|=128,ei(l,!1),e=s.updateQueue,n.updateQueue=e,kr(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Of(t,e),t=t.sibling;return w(Ke,Ke.current&1|2),Ce&&bt(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&yn()>Dr&&(n.flags|=128,o=!0,ei(l,!1),n.lanes=4194304)}else{if(!o)if(e=fr(s),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,kr(n,e),ei(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Ce)return Ve(n),null}else 2*yn()-l.renderingStartTime>Dr&&t!==536870912&&(n.flags|=128,o=!0,ei(l,!1),n.lanes=4194304);l.isBackwards?(s.sibling=n.child,n.child=s):(e=l.last,e!==null?e.sibling=s:n.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=yn(),e.sibling=null,t=Ke.current,w(Ke,o?t&1|2:t&1),Ce&&bt(n,l.treeForkCount),e):(Ve(n),null);case 22:case 23:return Ln(n),fo(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(t&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),t=n.updateQueue,t!==null&&kr(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==t&&(n.flags|=2048),e!==null&&q(ba),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),wt(Pe),Ve(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function Kg(e,n){switch(Ku(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return wt(Pe),Ne(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(Ln(n),n.alternate===null)throw Error(u(340));ya()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ln(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));ya()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(Ke),null;case 4:return Ne(),null;case 10:return wt(n.type),null;case 22:case 23:return Ln(n),fo(),e!==null&&q(ba),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return wt(Pe),null;case 25:return null;default:return null}}function id(e,n){switch(Ku(n),n.tag){case 3:wt(Pe),Ne();break;case 26:case 27:case 5:ht(n);break;case 4:Ne();break;case 31:n.memoizedState!==null&&Ln(n);break;case 13:Ln(n);break;case 19:q(Ke);break;case 10:wt(n.type);break;case 22:case 23:Ln(n),fo(),e!==null&&q(ba);break;case 24:wt(Pe)}}function ni(e,n){try{var t=n.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var o=l.next;t=o;do{if((t.tag&e)===e){l=void 0;var s=t.create,d=t.inst;l=s(),d.destroy=l}t=t.next}while(t!==o)}}catch(b){Le(n,n.return,b)}}function Ft(e,n,t){try{var l=n.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var s=o.next;l=s;do{if((l.tag&e)===e){var d=l.inst,b=d.destroy;if(b!==void 0){d.destroy=void 0,o=n;var k=t,D=b;try{D()}catch(N){Le(o,k,N)}}}l=l.next}while(l!==s)}}catch(N){Le(n,n.return,N)}}function rd(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Kf(n,t)}catch(l){Le(e,e.return,l)}}}function ud(e,n,t){t.props=ka(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){Le(e,n,l)}}function ti(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(o){Le(e,n,o)}}function ut(e,n){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(o){Le(e,n,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(o){Le(e,n,o)}else t.current=null}function od(e){var n=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(o){Le(e,e.return,o)}}function Vo(e,n,t){try{var l=e.stateNode;vv(l,e.type,t,n),l[Sn]=n}catch(o){Le(e,e.return,o)}}function sd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ea(e.type)||e.tag===4}function Xo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qo(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=yt));else if(l!==4&&(l===27&&ea(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Qo(e,n,t),e=e.sibling;e!==null;)Qo(e,n,t),e=e.sibling}function Er(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(l===27&&ea(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Er(e,n,t),e=e.sibling;e!==null;)Er(e,n,t),e=e.sibling}function cd(e){var n=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,o=n.attributes;o.length;)n.removeAttributeNode(o[0]);dn(n,l,t),n[sn]=e,n[Sn]=t}catch(s){Le(e,e.return,s)}}var Ct=!1,nn=!1,Fo=!1,fd=typeof WeakSet=="function"?WeakSet:Set,un=null;function Jg(e,n){if(e=e.containerInfo,ms=Qr,e=Tf(e),qu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var o=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var d=0,b=-1,k=-1,D=0,N=0,G=e,R=null;n:for(;;){for(var _;G!==t||o!==0&&G.nodeType!==3||(b=d+o),G!==s||l!==0&&G.nodeType!==3||(k=d+l),G.nodeType===3&&(d+=G.nodeValue.length),(_=G.firstChild)!==null;)R=G,G=_;for(;;){if(G===e)break n;if(R===t&&++D===o&&(b=d),R===s&&++N===l&&(k=d),(_=G.nextSibling)!==null)break;G=R,R=G.parentNode}G=_}t=b===-1||k===-1?null:{start:b,end:k}}else t=null}t=t||{start:0,end:0}}else t=null;for(ps={focusedElem:e,selectionRange:t},Qr=!1,un=n;un!==null;)if(n=un,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,un=e;else for(;un!==null;){switch(n=un,s=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)o=e[t],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=n,o=s.memoizedProps,s=s.memoizedState,l=t.stateNode;try{var $=ka(t.type,o);e=l.getSnapshotBeforeUpdate($,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Le(t,t.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)vs(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,un=e;break}un=n.return}}function hd(e,n,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t),l&4&&ni(5,t);break;case 1:if(zt(e,t),l&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(d){Le(t,t.return,d)}else{var o=ka(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(o,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Le(t,t.return,d)}}l&64&&rd(t),l&512&&ti(t,t.return);break;case 3:if(zt(e,t),l&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Kf(e,n)}catch(d){Le(t,t.return,d)}}break;case 27:n===null&&l&4&&cd(t);case 26:case 5:zt(e,t),n===null&&l&4&&od(t),l&512&&ti(t,t.return);break;case 12:zt(e,t);break;case 31:zt(e,t),l&4&&pd(e,t);break;case 13:zt(e,t),l&4&&yd(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=rv.bind(null,t),Cv(e,t))));break;case 22:if(l=t.memoizedState!==null||Ct,!l){n=n!==null&&n.memoizedState!==null||nn,o=Ct;var s=nn;Ct=l,(nn=n)&&!s?Dt(e,t,(t.subtreeFlags&8772)!==0):zt(e,t),Ct=o,nn=s}break;case 30:break;default:zt(e,t)}}function dd(e){var n=e.alternate;n!==null&&(e.alternate=null,dd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&xu(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,xn=!1;function At(e,n,t){for(t=t.child;t!==null;)md(e,n,t),t=t.sibling}function md(e,n,t){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(gn,t)}catch{}switch(t.tag){case 26:nn||ut(t,n),At(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:nn||ut(t,n);var l=Qe,o=xn;ea(t.type)&&(Qe=t.stateNode,xn=!1),At(e,n,t),fi(t.stateNode),Qe=l,xn=o;break;case 5:nn||ut(t,n);case 6:if(l=Qe,o=xn,Qe=null,At(e,n,t),Qe=l,xn=o,Qe!==null)if(xn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(t.stateNode)}catch(s){Le(t,n,s)}else try{Qe.removeChild(t.stateNode)}catch(s){Le(t,n,s)}break;case 18:Qe!==null&&(xn?(e=Qe,rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),yl(e)):rm(Qe,t.stateNode));break;case 4:l=Qe,o=xn,Qe=t.stateNode.containerInfo,xn=!0,At(e,n,t),Qe=l,xn=o;break;case 0:case 11:case 14:case 15:Ft(2,t,n),nn||Ft(4,t,n),At(e,n,t);break;case 1:nn||(ut(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"&&ud(t,n,l)),At(e,n,t);break;case 21:At(e,n,t);break;case 22:nn=(l=nn)||t.memoizedState!==null,At(e,n,t),nn=l;break;default:At(e,n,t)}}function pd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yl(e)}catch(t){Le(n,n.return,t)}}}function yd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yl(e)}catch(t){Le(n,n.return,t)}}function Pg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fd),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fd),n;default:throw Error(u(435,e.tag))}}function Cr(e,n){var t=Pg(e);n.forEach(function(l){if(!t.has(l)){t.add(l);var o=uv.bind(null,e,l);l.then(o,o)}})}function Tn(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var o=t[l],s=e,d=n,b=d;e:for(;b!==null;){switch(b.tag){case 27:if(ea(b.type)){Qe=b.stateNode,xn=!1;break e}break;case 5:Qe=b.stateNode,xn=!1;break e;case 3:case 4:Qe=b.stateNode.containerInfo,xn=!0;break e}b=b.return}if(Qe===null)throw Error(u(160));md(s,d,o),Qe=null,xn=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)gd(n,e),n=n.sibling}var tt=null;function gd(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tn(n,e),kn(e),l&4&&(Ft(3,e,e.return),ni(3,e),Ft(5,e,e.return));break;case 1:Tn(n,e),kn(e),l&512&&(nn||t===null||ut(t,t.return)),l&64&&Ct&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var o=tt;if(Tn(n,e),kn(e),l&512&&(nn||t===null||ut(t,t.return)),l&4){var s=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,o=o.ownerDocument||o;n:switch(l){case"title":s=o.getElementsByTagName("title")[0],(!s||s[Dl]||s[sn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(l),o.head.insertBefore(s,o.querySelector("head > title"))),dn(s,l,t),s[sn]=e,rn(s),l=s;break e;case"link":var d=gm("link","href",o).get(l+(t.href||""));if(d){for(var b=0;b<d.length;b++)if(s=d[b],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){d.splice(b,1);break n}}s=o.createElement(l),dn(s,l,t),o.head.appendChild(s);break;case"meta":if(d=gm("meta","content",o).get(l+(t.content||""))){for(b=0;b<d.length;b++)if(s=d[b],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){d.splice(b,1);break n}}s=o.createElement(l),dn(s,l,t),o.head.appendChild(s);break;default:throw Error(u(468,l))}s[sn]=e,rn(s),l=s}e.stateNode=l}else vm(o,e.type,e.stateNode);else e.stateNode=ym(o,l,e.memoizedProps);else s!==l?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,l===null?vm(o,e.type,e.stateNode):ym(o,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Vo(e,e.memoizedProps,t.memoizedProps)}break;case 27:Tn(n,e),kn(e),l&512&&(nn||t===null||ut(t,t.return)),t!==null&&l&4&&Vo(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Tn(n,e),kn(e),l&512&&(nn||t===null||ut(t,t.return)),e.flags&32){o=e.stateNode;try{qa(o,"")}catch($){Le(e,e.return,$)}}l&4&&e.stateNode!=null&&(o=e.memoizedProps,Vo(e,o,t!==null?t.memoizedProps:o)),l&1024&&(Fo=!0);break;case 6:if(Tn(n,e),kn(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch($){Le(e,e.return,$)}}break;case 3:if(Yr=null,o=tt,tt=jr(n.containerInfo),Tn(n,e),tt=o,kn(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{yl(n.containerInfo)}catch($){Le(e,e.return,$)}Fo&&(Fo=!1,vd(e));break;case 4:l=tt,tt=jr(e.stateNode.containerInfo),Tn(n,e),kn(e),tt=l;break;case 12:Tn(n,e),kn(e);break;case 31:Tn(n,e),kn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Cr(e,l)));break;case 13:Tn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(zr=yn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Cr(e,l)));break;case 22:o=e.memoizedState!==null;var k=t!==null&&t.memoizedState!==null,D=Ct,N=nn;if(Ct=D||o,nn=N||k,Tn(n,e),nn=N,Ct=D,kn(e),l&8192)e:for(n=e.stateNode,n._visibility=o?n._visibility&-2:n._visibility|1,o&&(t===null||k||Ct||nn||Ea(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){k=t=n;try{if(s=k.stateNode,o)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{b=k.stateNode;var G=k.memoizedProps.style,R=G!=null&&G.hasOwnProperty("display")?G.display:null;b.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch($){Le(k,k.return,$)}}}else if(n.tag===6){if(t===null){k=n;try{k.stateNode.nodeValue=o?"":k.memoizedProps}catch($){Le(k,k.return,$)}}}else if(n.tag===18){if(t===null){k=n;try{var _=k.stateNode;o?um(_,!0):um(k.stateNode,!1)}catch($){Le(k,k.return,$)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Cr(e,t))));break;case 19:Tn(n,e),kn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Cr(e,l)));break;case 30:break;case 21:break;default:Tn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var t,l=e.return;l!==null;){if(sd(l)){t=l;break}l=l.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var o=t.stateNode,s=Xo(e);Er(e,s,o);break;case 5:var d=t.stateNode;t.flags&32&&(qa(d,""),t.flags&=-33);var b=Xo(e);Er(e,b,d);break;case 3:case 4:var k=t.stateNode.containerInfo,D=Xo(e);Qo(e,D,k);break;default:throw Error(u(161))}}catch(N){Le(e,e.return,N)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;vd(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function zt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hd(e,n.alternate,n),n=n.sibling}function Ea(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ft(4,n,n.return),Ea(n);break;case 1:ut(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&ud(n,n.return,t),Ea(n);break;case 27:fi(n.stateNode);case 26:case 5:ut(n,n.return),Ea(n);break;case 22:n.memoizedState===null&&Ea(n);break;case 30:Ea(n);break;default:Ea(n)}e=e.sibling}}function Dt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,o=e,s=n,d=s.flags;switch(s.tag){case 0:case 11:case 15:Dt(o,s,t),ni(4,s);break;case 1:if(Dt(o,s,t),l=s,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(D){Le(l,l.return,D)}if(l=s,o=l.updateQueue,o!==null){var b=l.stateNode;try{var k=o.shared.hiddenCallbacks;if(k!==null)for(o.shared.hiddenCallbacks=null,o=0;o<k.length;o++)Zf(k[o],b)}catch(D){Le(l,l.return,D)}}t&&d&64&&rd(s),ti(s,s.return);break;case 27:cd(s);case 26:case 5:Dt(o,s,t),t&&l===null&&d&4&&od(s),ti(s,s.return);break;case 12:Dt(o,s,t);break;case 31:Dt(o,s,t),t&&d&4&&pd(o,s);break;case 13:Dt(o,s,t),t&&d&4&&yd(o,s);break;case 22:s.memoizedState===null&&Dt(o,s,t),ti(s,s.return);break;case 30:break;default:Dt(o,s,t)}n=n.sibling}}function Wo(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Yl(t))}function Zo(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yl(e))}function at(e,n,t,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)bd(e,n,t,l),n=n.sibling}function bd(e,n,t,l){var o=n.flags;switch(n.tag){case 0:case 11:case 15:at(e,n,t,l),o&2048&&ni(9,n);break;case 1:at(e,n,t,l);break;case 3:at(e,n,t,l),o&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yl(e)));break;case 12:if(o&2048){at(e,n,t,l),e=n.stateNode;try{var s=n.memoizedProps,d=s.id,b=s.onPostCommit;typeof b=="function"&&b(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Le(n,n.return,k)}}else at(e,n,t,l);break;case 31:at(e,n,t,l);break;case 13:at(e,n,t,l);break;case 23:break;case 22:s=n.stateNode,d=n.alternate,n.memoizedState!==null?s._visibility&2?at(e,n,t,l):ai(e,n):s._visibility&2?at(e,n,t,l):(s._visibility|=2,il(e,n,t,l,(n.subtreeFlags&10256)!==0||!1)),o&2048&&Wo(d,n);break;case 24:at(e,n,t,l),o&2048&&Zo(n.alternate,n);break;default:at(e,n,t,l)}}function il(e,n,t,l,o){for(o=o&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var s=e,d=n,b=t,k=l,D=d.flags;switch(d.tag){case 0:case 11:case 15:il(s,d,b,k,o),ni(8,d);break;case 23:break;case 22:var N=d.stateNode;d.memoizedState!==null?N._visibility&2?il(s,d,b,k,o):ai(s,d):(N._visibility|=2,il(s,d,b,k,o)),o&&D&2048&&Wo(d.alternate,d);break;case 24:il(s,d,b,k,o),o&&D&2048&&Zo(d.alternate,d);break;default:il(s,d,b,k,o)}n=n.sibling}}function ai(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,l=n,o=l.flags;switch(l.tag){case 22:ai(t,l),o&2048&&Wo(l.alternate,l);break;case 24:ai(t,l),o&2048&&Zo(l.alternate,l);break;default:ai(t,l)}n=n.sibling}}var li=8192;function rl(e,n,t){if(e.subtreeFlags&li)for(e=e.child;e!==null;)Sd(e,n,t),e=e.sibling}function Sd(e,n,t){switch(e.tag){case 26:rl(e,n,t),e.flags&li&&e.memoizedState!==null&&Hv(t,tt,e.memoizedState,e.memoizedProps);break;case 5:rl(e,n,t);break;case 3:case 4:var l=tt;tt=jr(e.stateNode.containerInfo),rl(e,n,t),tt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=li,li=16777216,rl(e,n,t),li=l):rl(e,n,t));break;default:rl(e,n,t)}}function wd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ii(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];un=l,Td(l,e)}wd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xd(e),e=e.sibling}function xd(e){switch(e.tag){case 0:case 11:case 15:ii(e),e.flags&2048&&Ft(9,e,e.return);break;case 3:ii(e);break;case 12:ii(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ar(e)):ii(e);break;default:ii(e)}}function Ar(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];un=l,Td(l,e)}wd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ft(8,n,n.return),Ar(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Ar(n));break;default:Ar(n)}e=e.sibling}}function Td(e,n){for(;un!==null;){var t=un;switch(t.tag){case 0:case 11:case 15:Ft(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yl(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,un=l;else e:for(t=e;un!==null;){l=un;var o=l.sibling,s=l.return;if(dd(l),l===t){un=null;break e}if(o!==null){o.return=s,un=o;break e}un=s}}}var $g={getCacheForType:function(e){var n=fn(Pe),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return fn(Pe).controller.signal}},ev=typeof WeakMap=="function"?WeakMap:Map,Re=0,je=null,we=null,ke=0,_e=0,Nn=null,Wt=!1,ul=!1,Ko=!1,Rt=0,Ze=0,Zt=0,Ca=0,Jo=0,Un=0,ol=0,ri=null,En=null,Po=!1,zr=0,kd=0,Dr=1/0,Rr=null,Kt=null,ln=0,Jt=null,sl=null,Mt=0,$o=0,es=null,Ed=null,ui=0,ns=null;function Bn(){return(Re&2)!==0&&ke!==0?ke&-ke:M.T!==null?us():jc()}function Cd(){if(Un===0)if((ke&536870912)===0||Ce){var e=Hi;Hi<<=1,(Hi&3932160)===0&&(Hi=262144),Un=e}else Un=536870912;return e=_n.current,e!==null&&(e.flags|=32),Un}function Cn(e,n,t){(e===je&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(cl(e,0),Pt(e,ke,Un,!1)),zl(e,t),((Re&2)===0||e!==je)&&(e===je&&((Re&2)===0&&(Ca|=t),Ze===4&&Pt(e,ke,Un,!1)),ot(e))}function Ad(e,n,t){if((Re&6)!==0)throw Error(u(327));var l=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Al(e,n),o=l?av(e,n):as(e,n,!0),s=l;do{if(o===0){ul&&!l&&Pt(e,n,0,!1);break}else{if(t=e.current.alternate,s&&!nv(t)){o=as(e,n,!1),s=!1;continue}if(o===2){if(s=n,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var b=e;o=ri;var k=b.current.memoizedState.isDehydrated;if(k&&(cl(b,d).flags|=256),d=as(b,d,!1),d!==2){if(Ko&&!k){b.errorRecoveryDisabledLanes|=s,Ca|=s,o=4;break e}s=En,En=o,s!==null&&(En===null?En=s:En.push.apply(En,s))}o=d}if(s=!1,o!==2)continue}}if(o===1){cl(e,0),Pt(e,n,0,!0);break}e:{switch(l=e,s=o,s){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:Pt(l,n,Un,!Wt);break e;case 2:En=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(o=zr+300-yn(),10<o)){if(Pt(l,n,Un,!Wt),ji(l,0,!0)!==0)break e;Mt=n,l.timeoutHandle=lm(zd.bind(null,l,t,En,Rr,Po,n,Un,Ca,ol,Wt,s,"Throttled",-0,0),o);break e}zd(l,t,En,Rr,Po,n,Un,Ca,ol,Wt,s,null,-0,0)}}break}while(!0);ot(e)}function zd(e,n,t,l,o,s,d,b,k,D,N,G,R,_){if(e.timeoutHandle=-1,G=n.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yt},Sd(n,s,G);var $=(s&62914560)===s?zr-yn():(s&4194048)===s?kd-yn():0;if($=qv(G,$),$!==null){Mt=s,e.cancelPendingCommit=$(Ud.bind(null,e,n,s,t,l,o,d,b,k,N,G,null,R,_)),Pt(e,s,d,!D);return}}Ud(e,n,s,t,l,o,d,b,k)}function nv(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var o=t[l],s=o.getSnapshot;o=o.value;try{if(!Mn(s(),o))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pt(e,n,t,l){n&=~Jo,n&=~Ca,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var o=n;0<o;){var s=31-qe(o),d=1<<s;l[s]=-1,o&=~d}t!==0&&Bc(e,t,n)}function Mr(){return(Re&6)===0?(oi(0),!1):!0}function ts(){if(we!==null){if(_e===0)var e=we.return;else e=we,St=ga=null,vo(e),el=null,Vl=0,e=we;for(;e!==null;)id(e.alternate,e),e=e.return;we=null}}function cl(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,wv(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Mt=0,ts(),je=e,we=t=vt(e.current,null),ke=n,_e=0,Nn=null,Wt=!1,ul=Al(e,n),Ko=!1,ol=Un=Jo=Ca=Zt=Ze=0,En=ri=null,Po=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var o=31-qe(l),s=1<<o;n|=e[o],l&=~s}return Rt=n,Pi(),t}function Dd(e,n){pe=null,M.H=Pl,n===$a||n===rr?(n=Xf(),_e=3):n===io?(n=Xf(),_e=4):_e=n===Lo?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Nn=n,we===null&&(Ze=1,Sr(e,Qn(n,e.current)))}function Rd(){var e=_n.current;return e===null?!0:(ke&4194048)===ke?Kn===null:(ke&62914560)===ke||(ke&536870912)!==0?e===Kn:!1}function Md(){var e=M.H;return M.H=Pl,e===null?Pl:e}function Od(){var e=M.A;return M.A=$g,e}function Or(){Ze=4,Wt||(ke&4194048)!==ke&&_n.current!==null||(ul=!0),(Zt&134217727)===0&&(Ca&134217727)===0||je===null||Pt(je,ke,Un,!1)}function as(e,n,t){var l=Re;Re|=2;var o=Md(),s=Od();(je!==e||ke!==n)&&(Rr=null,cl(e,n)),n=!1;var d=Ze;e:do try{if(_e!==0&&we!==null){var b=we,k=Nn;switch(_e){case 8:ts(),d=6;break e;case 3:case 2:case 9:case 6:_n.current===null&&(n=!0);var D=_e;if(_e=0,Nn=null,fl(e,b,k,D),t&&ul){d=0;break e}break;default:D=_e,_e=0,Nn=null,fl(e,b,k,D)}}tv(),d=Ze;break}catch(N){Dd(e,N)}while(!0);return n&&e.shellSuspendCounter++,St=ga=null,Re=l,M.H=o,M.A=s,we===null&&(je=null,ke=0,Pi()),d}function tv(){for(;we!==null;)_d(we)}function av(e,n){var t=Re;Re|=2;var l=Md(),o=Od();je!==e||ke!==n?(Rr=null,Dr=yn()+500,cl(e,n)):ul=Al(e,n);e:do try{if(_e!==0&&we!==null){n=we;var s=Nn;n:switch(_e){case 1:_e=0,Nn=null,fl(e,n,s,1);break;case 2:case 9:if(Gf(s)){_e=0,Nn=null,Ld(n);break}n=function(){_e!==2&&_e!==9||je!==e||(_e=7),ot(e)},s.then(n,n);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:Gf(s)?(_e=0,Nn=null,Ld(n)):(_e=0,Nn=null,fl(e,n,s,7));break;case 5:var d=null;switch(we.tag){case 26:d=we.memoizedState;case 5:case 27:var b=we;if(d?bm(d):b.stateNode.complete){_e=0,Nn=null;var k=b.sibling;if(k!==null)we=k;else{var D=b.return;D!==null?(we=D,_r(D)):we=null}break n}}_e=0,Nn=null,fl(e,n,s,5);break;case 6:_e=0,Nn=null,fl(e,n,s,6);break;case 8:ts(),Ze=6;break e;default:throw Error(u(462))}}lv();break}catch(N){Dd(e,N)}while(!0);return St=ga=null,M.H=l,M.A=o,Re=t,we!==null?0:(je=null,ke=0,Pi(),Ze)}function lv(){for(;we!==null&&!pu();)_d(we)}function _d(e){var n=ad(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,n===null?_r(e):we=n}function Ld(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Jh(t,n,n.pendingProps,n.type,void 0,ke);break;case 11:n=Jh(t,n,n.pendingProps,n.type.render,n.ref,ke);break;case 5:vo(n);default:id(t,n),n=we=Of(n,Rt),n=ad(t,n,Rt)}e.memoizedProps=e.pendingProps,n===null?_r(e):we=n}function fl(e,n,t,l){St=ga=null,vo(n),el=null,Vl=0;var o=n.return;try{if(Qg(e,o,n,t,ke)){Ze=1,Sr(e,Qn(t,e.current)),we=null;return}}catch(s){if(o!==null)throw we=o,s;Ze=1,Sr(e,Qn(t,e.current)),we=null;return}n.flags&32768?(Ce||l===1?e=!0:ul||(ke&536870912)!==0?e=!1:(Wt=e=!0,(l===2||l===9||l===3||l===6)&&(l=_n.current,l!==null&&l.tag===13&&(l.flags|=16384))),Nd(n,e)):_r(n)}function _r(e){var n=e;do{if((n.flags&32768)!==0){Nd(n,Wt);return}e=n.return;var t=Zg(n.alternate,n,Rt);if(t!==null){we=t;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);Ze===0&&(Ze=5)}function Nd(e,n){do{var t=Kg(e.alternate,e);if(t!==null){t.flags&=32767,we=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=t}while(e!==null);Ze=6,we=null}function Ud(e,n,t,l,o,s,d,b,k){e.cancelPendingCommit=null;do Lr();while(ln!==0);if((Re&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(s=n.lanes|n.childLanes,s|=Vu,By(e,t,s,d,b,k),e===je&&(we=je=null,ke=0),sl=n,Jt=e,Mt=t,$o=s,es=o,Ed=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ov(he,function(){return Id(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,o=Q.p,Q.p=2,d=Re,Re|=4;try{Jg(e,n,t)}finally{Re=d,Q.p=o,M.T=l}}ln=1,Bd(),Hd(),qd()}}function Bd(){if(ln===1){ln=0;var e=Jt,n=sl,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=M.T,M.T=null;var l=Q.p;Q.p=2;var o=Re;Re|=4;try{gd(n,e);var s=ps,d=Tf(e.containerInfo),b=s.focusedElem,k=s.selectionRange;if(d!==b&&b&&b.ownerDocument&&xf(b.ownerDocument.documentElement,b)){if(k!==null&&qu(b)){var D=k.start,N=k.end;if(N===void 0&&(N=D),"selectionStart"in b)b.selectionStart=D,b.selectionEnd=Math.min(N,b.value.length);else{var G=b.ownerDocument||document,R=G&&G.defaultView||window;if(R.getSelection){var _=R.getSelection(),$=b.textContent.length,oe=Math.min(k.start,$),He=k.end===void 0?oe:Math.min(k.end,$);!_.extend&&oe>He&&(d=He,He=oe,oe=d);var A=wf(b,oe),C=wf(b,He);if(A&&C&&(_.rangeCount!==1||_.anchorNode!==A.node||_.anchorOffset!==A.offset||_.focusNode!==C.node||_.focusOffset!==C.offset)){var z=G.createRange();z.setStart(A.node,A.offset),_.removeAllRanges(),oe>He?(_.addRange(z),_.extend(C.node,C.offset)):(z.setEnd(C.node,C.offset),_.addRange(z))}}}}for(G=[],_=b;_=_.parentNode;)_.nodeType===1&&G.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<G.length;b++){var Y=G[b];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Qr=!!ms,ps=ms=null}finally{Re=o,Q.p=l,M.T=t}}e.current=n,ln=2}}function Hd(){if(ln===2){ln=0;var e=Jt,n=sl,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=M.T,M.T=null;var l=Q.p;Q.p=2;var o=Re;Re|=4;try{hd(e,n.alternate,n)}finally{Re=o,Q.p=l,M.T=t}}ln=3}}function qd(){if(ln===4||ln===3){ln=0,yu();var e=Jt,n=sl,t=Mt,l=Ed;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ln=5:(ln=0,sl=Jt=null,jd(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Kt=null),Su(t),n=n.stateNode,an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(gn,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=M.T,o=Q.p,Q.p=2,M.T=null;try{for(var s=e.onRecoverableError,d=0;d<l.length;d++){var b=l[d];s(b.value,{componentStack:b.stack})}}finally{M.T=n,Q.p=o}}(Mt&3)!==0&&Lr(),ot(e),o=e.pendingLanes,(t&261930)!==0&&(o&42)!==0?e===ns?ui++:(ui=0,ns=e):ui=0,oi(0)}}function jd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Yl(n)))}function Lr(){return Bd(),Hd(),qd(),Id()}function Id(){if(ln!==5)return!1;var e=Jt,n=$o;$o=0;var t=Su(Mt),l=M.T,o=Q.p;try{Q.p=32>t?32:t,M.T=null,t=es,es=null;var s=Jt,d=Mt;if(ln=0,sl=Jt=null,Mt=0,(Re&6)!==0)throw Error(u(331));var b=Re;if(Re|=4,xd(s.current),bd(s,s.current,d,t),Re=b,oi(0,!1),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(gn,s)}catch{}return!0}finally{Q.p=o,M.T=l,jd(e,n)}}function Yd(e,n,t){n=Qn(t,n),n=_o(e.stateNode,n,2),e=Vt(e,n,2),e!==null&&(zl(e,2),ot(e))}function Le(e,n,t){if(e.tag===3)Yd(e,e,t);else for(;n!==null;){if(n.tag===3){Yd(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Kt===null||!Kt.has(l))){e=Qn(t,e),t=Gh(2),l=Vt(n,t,2),l!==null&&(Vh(t,l,n,e),zl(l,2),ot(l));break}}n=n.return}}function ls(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new ev;var o=new Set;l.set(n,o)}else o=l.get(n),o===void 0&&(o=new Set,l.set(n,o));o.has(t)||(Ko=!0,o.add(t),e=iv.bind(null,e,n,t),n.then(e,e))}function iv(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,je===e&&(ke&t)===t&&(Ze===4||Ze===3&&(ke&62914560)===ke&&300>yn()-zr?(Re&2)===0&&cl(e,0):Jo|=t,ol===ke&&(ol=0)),ot(e)}function Gd(e,n){n===0&&(n=Uc()),e=ma(e,n),e!==null&&(zl(e,n),ot(e))}function rv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gd(e,t)}function uv(e,n){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(n),Gd(e,t)}function ov(e,n){return Oa(e,n)}var Nr=null,hl=null,is=!1,Ur=!1,rs=!1,$t=0;function ot(e){e!==hl&&e.next===null&&(hl===null?Nr=hl=e:hl=hl.next=e),Ur=!0,is||(is=!0,cv())}function oi(e,n){if(!rs&&Ur){rs=!0;do for(var t=!1,l=Nr;l!==null;){if(e!==0){var o=l.pendingLanes;if(o===0)var s=0;else{var d=l.suspendedLanes,b=l.pingedLanes;s=(1<<31-qe(42|e)+1)-1,s&=o&~(d&~b),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,Fd(l,s))}else s=ke,s=ji(l,l===je?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||Al(l,s)||(t=!0,Fd(l,s));l=l.next}while(t);rs=!1}}function sv(){Vd()}function Vd(){Ur=is=!1;var e=0;$t!==0&&Sv()&&(e=$t);for(var n=yn(),t=null,l=Nr;l!==null;){var o=l.next,s=Xd(l,n);s===0?(l.next=null,t===null?Nr=o:t.next=o,o===null&&(hl=t)):(t=l,(e!==0||(s&3)!==0)&&(Ur=!0)),l=o}ln!==0&&ln!==5||oi(e),$t!==0&&($t=0)}function Xd(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-qe(s),b=1<<d,k=o[d];k===-1?((b&t)===0||(b&l)!==0)&&(o[d]=Uy(b,n)):k<=n&&(e.expiredLanes|=b),s&=~b}if(n=je,t=ke,t=ji(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===n&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Cl(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Al(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(l!==null&&Cl(l),Su(t)){case 2:case 8:t=Z;break;case 32:t=he;break;case 268435456:t=Oe;break;default:t=he}return l=Qd.bind(null,e),t=Oa(t,l),e.callbackPriority=n,e.callbackNode=t,n}return l!==null&&l!==null&&Cl(l),e.callbackPriority=2,e.callbackNode=null,2}function Qd(e,n){if(ln!==0&&ln!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Lr()&&e.callbackNode!==t)return null;var l=ke;return l=ji(e,e===je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ad(e,l,n),Xd(e,yn()),e.callbackNode!=null&&e.callbackNode===t?Qd.bind(null,e):null)}function Fd(e,n){if(Lr())return null;Ad(e,n,!0)}function cv(){xv(function(){(Re&6)!==0?Oa(j,sv):Vd()})}function us(){if($t===0){var e=Ja;e===0&&(e=Bi,Bi<<=1,(Bi&261888)===0&&(Bi=256)),$t=e}return $t}function Wd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vi(""+e)}function Zd(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function fv(e,n,t,l,o){if(n==="submit"&&t&&t.stateNode===o){var s=Wd((o[Sn]||null).action),d=l.submitter;d&&(n=(n=d[Sn]||null)?Wd(n.formAction):d.getAttribute("formAction"),n!==null&&(s=n,d=null));var b=new Wi("action","action",null,l,o);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if($t!==0){var k=d?Zd(o,d):new FormData(o);Ao(t,{pending:!0,data:k,method:o.method,action:s},null,k)}}else typeof s=="function"&&(b.preventDefault(),k=d?Zd(o,d):new FormData(o),Ao(t,{pending:!0,data:k,method:o.method,action:s},s,k))},currentTarget:o}]})}}for(var os=0;os<Gu.length;os++){var ss=Gu[os],hv=ss.toLowerCase(),dv=ss[0].toUpperCase()+ss.slice(1);nt(hv,"on"+dv)}nt(Cf,"onAnimationEnd"),nt(Af,"onAnimationIteration"),nt(zf,"onAnimationStart"),nt("dblclick","onDoubleClick"),nt("focusin","onFocus"),nt("focusout","onBlur"),nt(Dg,"onTransitionRun"),nt(Rg,"onTransitionStart"),nt(Mg,"onTransitionCancel"),nt(Df,"onTransitionEnd"),Ba("onMouseEnter",["mouseout","mouseover"]),Ba("onMouseLeave",["mouseout","mouseover"]),Ba("onPointerEnter",["pointerout","pointerover"]),Ba("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function Kd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],o=l.event;l=l.listeners;e:{var s=void 0;if(n)for(var d=l.length-1;0<=d;d--){var b=l[d],k=b.instance,D=b.currentTarget;if(b=b.listener,k!==s&&o.isPropagationStopped())break e;s=b,o.currentTarget=D;try{s(o)}catch(N){Ji(N)}o.currentTarget=null,s=k}else for(d=0;d<l.length;d++){if(b=l[d],k=b.instance,D=b.currentTarget,b=b.listener,k!==s&&o.isPropagationStopped())break e;s=b,o.currentTarget=D;try{s(o)}catch(N){Ji(N)}o.currentTarget=null,s=k}}}}function xe(e,n){var t=n[wu];t===void 0&&(t=n[wu]=new Set);var l=e+"__bubble";t.has(l)||(Jd(n,e,2,!1),t.add(l))}function cs(e,n,t){var l=0;n&&(l|=4),Jd(t,e,l,n)}var Br="_reactListening"+Math.random().toString(36).slice(2);function fs(e){if(!e[Br]){e[Br]=!0,Gc.forEach(function(t){t!=="selectionchange"&&(mv.has(t)||cs(t,!1,e),cs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Br]||(n[Br]=!0,cs("selectionchange",!1,n))}}function Jd(e,n,t,l){switch(Cm(n)){case 2:var o=Yv;break;case 8:o=Gv;break;default:o=Cs}t=o.bind(null,n,t,e),o=void 0,!Ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),l?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function hs(e,n,t,l,o){var s=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var b=l.stateNode.containerInfo;if(b===o)break;if(d===4)for(d=l.return;d!==null;){var k=d.tag;if((k===3||k===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;b!==null;){if(d=La(b),d===null)return;if(k=d.tag,k===5||k===6||k===26||k===27){l=s=d;continue e}b=b.parentNode}}l=l.return}nf(function(){var D=s,N=zu(t),G=[];e:{var R=Rf.get(e);if(R!==void 0){var _=Wi,$=e;switch(e){case"keypress":if(Qi(t)===0)break e;case"keydown":case"keyup":_=ug;break;case"focusin":$="focus",_=Lu;break;case"focusout":$="blur",_=Lu;break;case"beforeblur":case"afterblur":_=Lu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=cg;break;case Cf:case Af:case zf:_=Py;break;case Df:_=hg;break;case"scroll":case"scrollend":_=Fy;break;case"wheel":_=mg;break;case"copy":case"cut":case"paste":_=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=uf;break;case"toggle":case"beforetoggle":_=yg}var oe=(n&4)!==0,He=!oe&&(e==="scroll"||e==="scrollend"),A=oe?R!==null?R+"Capture":null:R;oe=[];for(var C=D,z;C!==null;){var Y=C;if(z=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||z===null||A===null||(Y=Ml(C,A),Y!=null&&oe.push(ci(C,Y,z))),He)break;C=C.return}0<oe.length&&(R=new _(R,$,null,t,N),G.push({event:R,listeners:oe}))}}if((n&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",R&&t!==Au&&($=t.relatedTarget||t.fromElement)&&(La($)||$[_a]))break e;if((_||R)&&(R=N.window===N?N:(R=N.ownerDocument)?R.defaultView||R.parentWindow:window,_?($=t.relatedTarget||t.toElement,_=D,$=$?La($):null,$!==null&&(He=f($),oe=$.tag,$!==He||oe!==5&&oe!==27&&oe!==6)&&($=null)):(_=null,$=D),_!==$)){if(oe=lf,Y="onMouseLeave",A="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(oe=uf,Y="onPointerLeave",A="onPointerEnter",C="pointer"),He=_==null?R:Rl(_),z=$==null?R:Rl($),R=new oe(Y,C+"leave",_,t,N),R.target=He,R.relatedTarget=z,Y=null,La(N)===D&&(oe=new oe(A,C+"enter",$,t,N),oe.target=z,oe.relatedTarget=He,Y=oe),He=Y,_&&$)n:{for(oe=pv,A=_,C=$,z=0,Y=A;Y;Y=oe(Y))z++;Y=0;for(var ie=C;ie;ie=oe(ie))Y++;for(;0<z-Y;)A=oe(A),z--;for(;0<Y-z;)C=oe(C),Y--;for(;z--;){if(A===C||C!==null&&A===C.alternate){oe=A;break n}A=oe(A),C=oe(C)}oe=null}else oe=null;_!==null&&Pd(G,R,_,oe,!1),$!==null&&He!==null&&Pd(G,He,$,oe,!0)}}e:{if(R=D?Rl(D):window,_=R.nodeName&&R.nodeName.toLowerCase(),_==="select"||_==="input"&&R.type==="file")var ze=pf;else if(df(R))if(yf)ze=Cg;else{ze=kg;var ne=Tg}else _=R.nodeName,!_||_.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?D&&Cu(D.elementType)&&(ze=pf):ze=Eg;if(ze&&(ze=ze(e,D))){mf(G,ze,t,N);break e}ne&&ne(e,R,D),e==="focusout"&&D&&R.type==="number"&&D.memoizedProps.value!=null&&Eu(R,"number",R.value)}switch(ne=D?Rl(D):window,e){case"focusin":(df(ne)||ne.contentEditable==="true")&&(Ga=ne,ju=D,ql=null);break;case"focusout":ql=ju=Ga=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,kf(G,t,N);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":kf(G,t,N)}var ge;if(Uu)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Ya?ff(e,t)&&(Ee="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Ee="onCompositionStart");Ee&&(of&&t.locale!=="ko"&&(Ya||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ya&&(ge=tf()):(Bt=N,Mu="value"in Bt?Bt.value:Bt.textContent,Ya=!0)),ne=Hr(D,Ee),0<ne.length&&(Ee=new rf(Ee,e,null,t,N),G.push({event:Ee,listeners:ne}),ge?Ee.data=ge:(ge=hf(t),ge!==null&&(Ee.data=ge)))),(ge=vg?bg(e,t):Sg(e,t))&&(Ee=Hr(D,"onBeforeInput"),0<Ee.length&&(ne=new rf("onBeforeInput","beforeinput",null,t,N),G.push({event:ne,listeners:Ee}),ne.data=ge)),fv(G,e,D,t,N)}Kd(G,n)})}function ci(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Hr(e,n){for(var t=n+"Capture",l=[];e!==null;){var o=e,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=Ml(e,t),o!=null&&l.unshift(ci(e,o,s)),o=Ml(e,n),o!=null&&l.push(ci(e,o,s))),e.tag===3)return l;e=e.return}return[]}function pv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pd(e,n,t,l,o){for(var s=n._reactName,d=[];t!==null&&t!==l;){var b=t,k=b.alternate,D=b.stateNode;if(b=b.tag,k!==null&&k===l)break;b!==5&&b!==26&&b!==27||D===null||(k=D,o?(D=Ml(t,s),D!=null&&d.unshift(ci(t,D,k))):o||(D=Ml(t,s),D!=null&&d.push(ci(t,D,k)))),t=t.return}d.length!==0&&e.push({event:n,listeners:d})}var yv=/\r\n?/g,gv=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(yv,`
`).replace(gv,"")}function em(e,n){return n=$d(n),$d(e)===n}function Be(e,n,t,l,o,s){switch(t){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||qa(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&qa(e,""+l);break;case"className":Yi(e,"class",l);break;case"tabIndex":Yi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Yi(e,t,l);break;case"style":$c(e,l,s);break;case"data":if(n!=="object"){Yi(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Vi(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(n!=="input"&&Be(e,n,"name",o.name,o,null),Be(e,n,"formEncType",o.formEncType,o,null),Be(e,n,"formMethod",o.formMethod,o,null),Be(e,n,"formTarget",o.formTarget,o,null)):(Be(e,n,"encType",o.encType,o,null),Be(e,n,"method",o.method,o,null),Be(e,n,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Vi(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=yt);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(t=l.__html,t!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=Vi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Ii(e,"popover",l);break;case"xlinkActuate":pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":pt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":pt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":pt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":pt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ii(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Xy.get(t)||t,Ii(e,t,l))}}function ds(e,n,t,l,o,s){switch(t){case"style":$c(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(t=l.__html,t!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof l=="string"?qa(e,l):(typeof l=="number"||typeof l=="bigint")&&qa(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=yt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(o=t.endsWith("Capture"),n=t.slice(2,o?t.length-7:void 0),s=e[Sn]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(n,s,o),typeof l=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,l,o);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Ii(e,t,l)}}}function dn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,o=!1,s;for(s in t)if(t.hasOwnProperty(s)){var d=t[s];if(d!=null)switch(s){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:Be(e,n,s,d,t,null)}}o&&Be(e,n,"srcSet",t.srcSet,t,null),l&&Be(e,n,"src",t.src,t,null);return;case"input":xe("invalid",e);var b=s=d=o=null,k=null,D=null;for(l in t)if(t.hasOwnProperty(l)){var N=t[l];if(N!=null)switch(l){case"name":o=N;break;case"type":d=N;break;case"checked":k=N;break;case"defaultChecked":D=N;break;case"value":s=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,n));break;default:Be(e,n,l,N,t,null)}}Zc(e,s,b,k,D,d,o,!1);return;case"select":xe("invalid",e),l=d=s=null;for(o in t)if(t.hasOwnProperty(o)&&(b=t[o],b!=null))switch(o){case"value":s=b;break;case"defaultValue":d=b;break;case"multiple":l=b;default:Be(e,n,o,b,t,null)}n=s,t=d,e.multiple=!!l,n!=null?Ha(e,!!l,n,!1):t!=null&&Ha(e,!!l,t,!0);return;case"textarea":xe("invalid",e),s=o=l=null;for(d in t)if(t.hasOwnProperty(d)&&(b=t[d],b!=null))switch(d){case"value":l=b;break;case"defaultValue":o=b;break;case"children":s=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(u(91));break;default:Be(e,n,d,b,t,null)}Jc(e,l,o,s);return;case"option":for(k in t)t.hasOwnProperty(k)&&(l=t[k],l!=null)&&(k==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Be(e,n,k,l,t,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<si.length;l++)xe(si[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in t)if(t.hasOwnProperty(D)&&(l=t[D],l!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:Be(e,n,D,l,t,null)}return;default:if(Cu(n)){for(N in t)t.hasOwnProperty(N)&&(l=t[N],l!==void 0&&ds(e,n,N,l,t,void 0));return}}for(b in t)t.hasOwnProperty(b)&&(l=t[b],l!=null&&Be(e,n,b,l,t,null))}function vv(e,n,t,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,d=null,b=null,k=null,D=null,N=null;for(_ in t){var G=t[_];if(t.hasOwnProperty(_)&&G!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":k=G;default:l.hasOwnProperty(_)||Be(e,n,_,null,l,G)}}for(var R in l){var _=l[R];if(G=t[R],l.hasOwnProperty(R)&&(_!=null||G!=null))switch(R){case"type":s=_;break;case"name":o=_;break;case"checked":D=_;break;case"defaultChecked":N=_;break;case"value":d=_;break;case"defaultValue":b=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(u(137,n));break;default:_!==G&&Be(e,n,R,_,l,G)}}ku(e,d,b,k,D,N,s,o);return;case"select":_=d=b=R=null;for(s in t)if(k=t[s],t.hasOwnProperty(s)&&k!=null)switch(s){case"value":break;case"multiple":_=k;default:l.hasOwnProperty(s)||Be(e,n,s,null,l,k)}for(o in l)if(s=l[o],k=t[o],l.hasOwnProperty(o)&&(s!=null||k!=null))switch(o){case"value":R=s;break;case"defaultValue":b=s;break;case"multiple":d=s;default:s!==k&&Be(e,n,o,s,l,k)}n=b,t=d,l=_,R!=null?Ha(e,!!t,R,!1):!!l!=!!t&&(n!=null?Ha(e,!!t,n,!0):Ha(e,!!t,t?[]:"",!1));return;case"textarea":_=R=null;for(b in t)if(o=t[b],t.hasOwnProperty(b)&&o!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Be(e,n,b,null,l,o)}for(d in l)if(o=l[d],s=t[d],l.hasOwnProperty(d)&&(o!=null||s!=null))switch(d){case"value":R=o;break;case"defaultValue":_=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==s&&Be(e,n,d,o,l,s)}Kc(e,R,_);return;case"option":for(var $ in t)R=t[$],t.hasOwnProperty($)&&R!=null&&!l.hasOwnProperty($)&&($==="selected"?e.selected=!1:Be(e,n,$,null,l,R));for(k in l)R=l[k],_=t[k],l.hasOwnProperty(k)&&R!==_&&(R!=null||_!=null)&&(k==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":Be(e,n,k,R,l,_));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in t)R=t[oe],t.hasOwnProperty(oe)&&R!=null&&!l.hasOwnProperty(oe)&&Be(e,n,oe,null,l,R);for(D in l)if(R=l[D],_=t[D],l.hasOwnProperty(D)&&R!==_&&(R!=null||_!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,n));break;default:Be(e,n,D,R,l,_)}return;default:if(Cu(n)){for(var He in t)R=t[He],t.hasOwnProperty(He)&&R!==void 0&&!l.hasOwnProperty(He)&&ds(e,n,He,void 0,l,R);for(N in l)R=l[N],_=t[N],!l.hasOwnProperty(N)||R===_||R===void 0&&_===void 0||ds(e,n,N,R,l,_);return}}for(var A in t)R=t[A],t.hasOwnProperty(A)&&R!=null&&!l.hasOwnProperty(A)&&Be(e,n,A,null,l,R);for(G in l)R=l[G],_=t[G],!l.hasOwnProperty(G)||R===_||R==null&&_==null||Be(e,n,G,R,l,_)}function nm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var o=t[l],s=o.transferSize,d=o.initiatorType,b=o.duration;if(s&&b&&nm(d)){for(d=0,b=o.responseEnd,l+=1;l<t.length;l++){var k=t[l],D=k.startTime;if(D>b)break;var N=k.transferSize,G=k.initiatorType;N&&nm(G)&&(k=k.responseEnd,d+=N*(k<b?1:(b-D)/(k-D)))}if(--l,n+=8*(s+d)/(o.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ms=null,ps=null;function qr(e){return e.nodeType===9?e:e.ownerDocument}function tm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function am(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ys(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gs=null;function Sv(){var e=window.event;return e&&e.type==="popstate"?e===gs?!1:(gs=e,!0):(gs=null,!1)}var lm=typeof setTimeout=="function"?setTimeout:void 0,wv=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,xv=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(e){return im.resolve(null).then(e).catch(Tv)}:lm;function Tv(e){setTimeout(function(){throw e})}function ea(e){return e==="head"}function rm(e,n){var t=n,l=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(o),yl(n);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")fi(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,fi(t);for(var s=t.firstChild;s;){var d=s.nextSibling,b=s.nodeName;s[Dl]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=d}}else t==="body"&&fi(e.ownerDocument.body);t=o}while(t);yl(n)}function um(e,n){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function vs(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":vs(t),xu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function kv(e,n,t,l){for(;e.nodeType===1;){var o=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Dl])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Jn(e.nextSibling),e===null)break}return null}function Ev(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Jn(e.nextSibling),e===null))return null;return e}function om(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Jn(e.nextSibling),e===null))return null;return e}function bs(e){return e.data==="$?"||e.data==="$~"}function Ss(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cv(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var l=function(){n(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ws=null;function sm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Jn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function cm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function fm(e,n,t){switch(n=qr(t),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function fi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);xu(e)}var Pn=new Map,hm=new Set;function jr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ot=Q.d;Q.d={f:Av,r:zv,D:Dv,C:Rv,L:Mv,m:Ov,X:Lv,S:_v,M:Nv};function Av(){var e=Ot.f(),n=Mr();return e||n}function zv(e){var n=Na(e);n!==null&&n.tag===5&&n.type==="form"?Dh(n):Ot.r(e)}var dl=typeof document>"u"?null:document;function dm(e,n,t){var l=dl;if(l&&typeof n=="string"&&n){var o=Vn(n);o='link[rel="'+e+'"][href="'+o+'"]',typeof t=="string"&&(o+='[crossorigin="'+t+'"]'),hm.has(o)||(hm.add(o),e={rel:e,crossOrigin:t,href:n},l.querySelector(o)===null&&(n=l.createElement("link"),dn(n,"link",e),rn(n),l.head.appendChild(n)))}}function Dv(e){Ot.D(e),dm("dns-prefetch",e,null)}function Rv(e,n){Ot.C(e,n),dm("preconnect",e,n)}function Mv(e,n,t){Ot.L(e,n,t);var l=dl;if(l&&e&&n){var o='link[rel="preload"][as="'+Vn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(o+='[imagesrcset="'+Vn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(o+='[imagesizes="'+Vn(t.imageSizes)+'"]')):o+='[href="'+Vn(e)+'"]';var s=o;switch(n){case"style":s=ml(e);break;case"script":s=pl(e)}Pn.has(s)||(e=v({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Pn.set(s,e),l.querySelector(o)!==null||n==="style"&&l.querySelector(hi(s))||n==="script"&&l.querySelector(di(s))||(n=l.createElement("link"),dn(n,"link",e),rn(n),l.head.appendChild(n)))}}function Ov(e,n){Ot.m(e,n);var t=dl;if(t&&e){var l=n&&typeof n.as=="string"?n.as:"script",o='link[rel="modulepreload"][as="'+Vn(l)+'"][href="'+Vn(e)+'"]',s=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=pl(e)}if(!Pn.has(s)&&(e=v({rel:"modulepreload",href:e},n),Pn.set(s,e),t.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(di(s)))return}l=t.createElement("link"),dn(l,"link",e),rn(l),t.head.appendChild(l)}}}function _v(e,n,t){Ot.S(e,n,t);var l=dl;if(l&&e){var o=Ua(l).hoistableStyles,s=ml(e);n=n||"default";var d=o.get(s);if(!d){var b={loading:0,preload:null};if(d=l.querySelector(hi(s)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Pn.get(s))&&xs(e,t);var k=d=l.createElement("link");rn(k),dn(k,"link",e),k._p=new Promise(function(D,N){k.onload=D,k.onerror=N}),k.addEventListener("load",function(){b.loading|=1}),k.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Ir(d,n,l)}d={type:"stylesheet",instance:d,count:1,state:b},o.set(s,d)}}}function Lv(e,n){Ot.X(e,n);var t=dl;if(t&&e){var l=Ua(t).hoistableScripts,o=pl(e),s=l.get(o);s||(s=t.querySelector(di(o)),s||(e=v({src:e,async:!0},n),(n=Pn.get(o))&&Ts(e,n),s=t.createElement("script"),rn(s),dn(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(o,s))}}function Nv(e,n){Ot.M(e,n);var t=dl;if(t&&e){var l=Ua(t).hoistableScripts,o=pl(e),s=l.get(o);s||(s=t.querySelector(di(o)),s||(e=v({src:e,async:!0,type:"module"},n),(n=Pn.get(o))&&Ts(e,n),s=t.createElement("script"),rn(s),dn(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(o,s))}}function mm(e,n,t,l){var o=(o=le.current)?jr(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=ml(t.href),t=Ua(o).hoistableStyles,l=t.get(n),l||(l={type:"style",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=ml(t.href);var s=Ua(o).hoistableStyles,d=s.get(e);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=o.querySelector(hi(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Pn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Pn.set(e,t),s||Uv(o,e,t,d.state))),n&&l===null)throw Error(u(528,""));return d}if(n&&l!==null)throw Error(u(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=pl(t),t=Ua(o).hoistableScripts,l=t.get(n),l||(l={type:"script",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ml(e){return'href="'+Vn(e)+'"'}function hi(e){return'link[rel="stylesheet"]['+e+"]"}function pm(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Uv(e,n,t,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),dn(n,"link",t),rn(n),e.head.appendChild(n))}function pl(e){return'[src="'+Vn(e)+'"]'}function di(e){return"script[async]"+e}function ym(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Vn(t.href)+'"]');if(l)return n.instance=l,rn(l),l;var o=v({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),rn(l),dn(l,"style",o),Ir(l,t.precedence,e),n.instance=l;case"stylesheet":o=ml(t.href);var s=e.querySelector(hi(o));if(s)return n.state.loading|=4,n.instance=s,rn(s),s;l=pm(t),(o=Pn.get(o))&&xs(l,o),s=(e.ownerDocument||e).createElement("link"),rn(s);var d=s;return d._p=new Promise(function(b,k){d.onload=b,d.onerror=k}),dn(s,"link",l),n.state.loading|=4,Ir(s,t.precedence,e),n.instance=s;case"script":return s=pl(t.src),(o=e.querySelector(di(s)))?(n.instance=o,rn(o),o):(l=t,(o=Pn.get(s))&&(l=v({},t),Ts(l,o)),e=e.ownerDocument||e,o=e.createElement("script"),rn(o),dn(o,"link",l),e.head.appendChild(o),n.instance=o);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Ir(l,t.precedence,e));return n.instance}function Ir(e,n,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,s=o,d=0;d<l.length;d++){var b=l[d];if(b.dataset.precedence===n)s=b;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function xs(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ts(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yr=null;function gm(e,n,t){if(Yr===null){var l=new Map,o=Yr=new Map;o.set(t,l)}else o=Yr,l=o.get(t),l||(l=new Map,o.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),o=0;o<t.length;o++){var s=t[o];if(!(s[Dl]||s[sn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(n)||"";d=e+d;var b=l.get(d);b?b.push(s):l.set(d,[s])}}return l}function vm(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Bv(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Hv(e,n,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=ml(l.href),s=n.querySelector(hi(o));if(s){n=s._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Gr.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=s,rn(s);return}s=n.ownerDocument||n,l=pm(l),(o=Pn.get(o))&&xs(l,o),s=s.createElement("link"),rn(s);var d=s;d._p=new Promise(function(b,k){d.onload=b,d.onerror=k}),dn(s,"link",l),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Gr.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var ks=0;function qv(e,n){return e.stylesheets&&e.count===0&&Xr(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&Xr(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+n);0<e.imgBytes&&ks===0&&(ks=62500*bv());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xr(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>ks?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(o)}}:null}function Gr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vr=null;function Xr(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vr=new Map,n.forEach(jv,e),Vr=null,Gr.call(e))}function jv(e,n){if(!(n.state.loading&4)){var t=Vr.get(e);if(t)var l=t.get(null);else{t=new Map,Vr.set(e,t);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var d=o[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(t.set(d.dataset.precedence,d),l=d)}l&&t.set(null,l)}o=n.instance,d=o.getAttribute("data-precedence"),s=t.get(d)||l,s===l&&t.set(null,o),t.set(d,o),this.count++,l=Gr.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),n.state.loading|=4}}var mi={$$typeof:V,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Iv(e,n,t,l,o,s,d,b,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.hiddenUpdates=vu(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Sm(e,n,t,l,o,s,d,b,k,D,N,G){return e=new Iv(e,n,t,d,k,D,N,G,b),n=1,s===!0&&(n|=24),s=On(3,null,null,n),e.current=s,s.stateNode=e,n=to(),n.refCount++,e.pooledCache=n,n.refCount++,s.memoizedState={element:l,isDehydrated:t,cache:n},ro(s),e}function wm(e){return e?(e=Qa,e):Qa}function xm(e,n,t,l,o,s){o=wm(o),l.context===null?l.context=o:l.pendingContext=o,l=Gt(n),l.payload={element:t},s=s===void 0?null:s,s!==null&&(l.callback=s),t=Vt(e,l,n),t!==null&&(Cn(t,e,n),Ql(t,e,n))}function Tm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Es(e,n){Tm(e,n),(e=e.alternate)&&Tm(e,n)}function km(e){if(e.tag===13||e.tag===31){var n=ma(e,67108864);n!==null&&Cn(n,e,67108864),Es(e,67108864)}}function Em(e){if(e.tag===13||e.tag===31){var n=Bn();n=bu(n);var t=ma(e,n);t!==null&&Cn(t,e,n),Es(e,n)}}var Qr=!0;function Yv(e,n,t,l){var o=M.T;M.T=null;var s=Q.p;try{Q.p=2,Cs(e,n,t,l)}finally{Q.p=s,M.T=o}}function Gv(e,n,t,l){var o=M.T;M.T=null;var s=Q.p;try{Q.p=8,Cs(e,n,t,l)}finally{Q.p=s,M.T=o}}function Cs(e,n,t,l){if(Qr){var o=As(l);if(o===null)hs(e,n,l,Fr,t),Am(e,l);else if(Xv(o,e,n,t,l))l.stopPropagation();else if(Am(e,l),n&4&&-1<Vv.indexOf(e)){for(;o!==null;){var s=Na(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=sa(s.pendingLanes);if(d!==0){var b=s;for(b.pendingLanes|=2,b.entangledLanes|=2;d;){var k=1<<31-qe(d);b.entanglements[1]|=k,d&=~k}ot(s),(Re&6)===0&&(Dr=yn()+500,oi(0))}}break;case 31:case 13:b=ma(s,2),b!==null&&Cn(b,s,2),Mr(),Es(s,2)}if(s=As(l),s===null&&hs(e,n,l,Fr,t),s===o)break;o=s}o!==null&&l.stopPropagation()}else hs(e,n,l,null,t)}}function As(e){return e=zu(e),zs(e)}var Fr=null;function zs(e){if(Fr=null,e=La(e),e!==null){var n=f(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=h(n),e!==null)return e;e=null}else if(t===31){if(e=p(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Fr=e,null}function Cm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gu()){case j:return 2;case Z:return 8;case he:case Se:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var Ds=!1,na=null,ta=null,aa=null,pi=new Map,yi=new Map,la=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Am(e,n){switch(e){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":ta=null;break;case"mouseover":case"mouseout":aa=null;break;case"pointerover":case"pointerout":pi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(n.pointerId)}}function gi(e,n,t,l,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:s,targetContainers:[o]},n!==null&&(n=Na(n),n!==null&&km(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Xv(e,n,t,l,o){switch(n){case"focusin":return na=gi(na,e,n,t,l,o),!0;case"dragenter":return ta=gi(ta,e,n,t,l,o),!0;case"mouseover":return aa=gi(aa,e,n,t,l,o),!0;case"pointerover":var s=o.pointerId;return pi.set(s,gi(pi.get(s)||null,e,n,t,l,o)),!0;case"gotpointercapture":return s=o.pointerId,yi.set(s,gi(yi.get(s)||null,e,n,t,l,o)),!0}return!1}function zm(e){var n=La(e.target);if(n!==null){var t=f(n);if(t!==null){if(n=t.tag,n===13){if(n=h(t),n!==null){e.blockedOn=n,Ic(e.priority,function(){Em(t)});return}}else if(n===31){if(n=p(t),n!==null){e.blockedOn=n,Ic(e.priority,function(){Em(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=As(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Au=l,t.target.dispatchEvent(l),Au=null}else return n=Na(t),n!==null&&km(n),e.blockedOn=t,!1;n.shift()}return!0}function Dm(e,n,t){Wr(e)&&t.delete(n)}function Qv(){Ds=!1,na!==null&&Wr(na)&&(na=null),ta!==null&&Wr(ta)&&(ta=null),aa!==null&&Wr(aa)&&(aa=null),pi.forEach(Dm),yi.forEach(Dm)}function Zr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ds||(Ds=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Qv)))}var Kr=null;function Rm(e){Kr!==e&&(Kr=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Kr===e&&(Kr=null);for(var n=0;n<e.length;n+=3){var t=e[n],l=e[n+1],o=e[n+2];if(typeof l!="function"){if(zs(l||t)===null)continue;break}var s=Na(t);s!==null&&(e.splice(n,3),n-=3,Ao(s,{pending:!0,data:o,method:t.method,action:l},l,o))}}))}function yl(e){function n(k){return Zr(k,e)}na!==null&&Zr(na,e),ta!==null&&Zr(ta,e),aa!==null&&Zr(aa,e),pi.forEach(n),yi.forEach(n);for(var t=0;t<la.length;t++){var l=la[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<la.length&&(t=la[0],t.blockedOn===null);)zm(t),t.blockedOn===null&&la.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var o=t[l],s=t[l+1],d=o[Sn]||null;if(typeof s=="function")d||Rm(t);else if(d){var b=null;if(s&&s.hasAttribute("formAction")){if(o=s,d=s[Sn]||null)b=d.formAction;else if(zs(o)!==null)continue}else b=d.action;typeof b=="function"?t[l+1]=b:(t.splice(l,3),l-=3),Rm(t)}}}function Mm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return o=d})},focusReset:"manual",scroll:"manual"})}function n(){o!==null&&(o(),o=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),o!==null&&(o(),o=null)}}}function Rs(e){this._internalRoot=e}Jr.prototype.render=Rs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var t=n.current,l=Bn();xm(t,l,e,n,null,null)},Jr.prototype.unmount=Rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xm(e.current,2,null,e,null,null),Mr(),n[_a]=null}};function Jr(e){this._internalRoot=e}Jr.prototype.unstable_scheduleHydration=function(e){if(e){var n=jc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<la.length&&n!==0&&n<la[t].priority;t++);la.splice(t,0,e),t===0&&zm(e)}};var Om=i.version;if(Om!=="19.2.3")throw Error(u(527,Om,"19.2.3"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Fv={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{gn=Pr.inject(Fv),an=Pr}catch{}}return bi.createRoot=function(e,n){if(!c(e))throw Error(u(299));var t=!1,l="",o=qh,s=jh,d=Ih;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Sm(e,1,!1,null,null,t,l,null,o,s,d,Mm),e[_a]=n.current,fs(e),new Rs(n)},bi.hydrateRoot=function(e,n,t){if(!c(e))throw Error(u(299));var l=!1,o="",s=qh,d=jh,b=Ih,k=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError),t.formState!==void 0&&(k=t.formState)),n=Sm(e,1,!0,n,t??null,l,o,k,s,d,b,Mm),n.context=wm(null),t=n.current,l=Bn(),l=bu(l),o=Gt(l),o.callback=null,Vt(t,o,l),t=l,n.current.lanes=t,zl(n,t),ot(n),e[_a]=n.current,fs(e),new Jr(n)},bi.version="19.2.3",bi}var Ym;function lb(){if(Ym)return _s.exports;Ym=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),_s.exports=ab(),_s.exports}var ib=lb();const rb=su(ib);var Gm="popstate";function ub(a={}){function i(c,f){let{pathname:h="/",search:p="",hash:y=""}=Aa(c.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),ec("",{pathname:h,search:p,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function r(c,f){let h=c.document.querySelector("base"),p="";if(h&&h.getAttribute("href")){let y=c.location.href,m=y.indexOf("#");p=m===-1?y:y.slice(0,m)}return p+"#"+(typeof f=="string"?f:zi(f))}function u(c,f){jn(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return sb(i,r,u,a)}function Fe(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function jn(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ob(){return Math.random().toString(36).substring(2,10)}function Vm(a,i){return{usr:a.state,key:a.key,idx:i}}function ec(a,i,r=null,u){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?Aa(i):i,state:r,key:i&&i.key||u||ob()}}function zi({pathname:a="/",search:i="",hash:r=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(a+=r.charAt(0)==="#"?r:"#"+r),a}function Aa(a){let i={};if(a){let r=a.indexOf("#");r>=0&&(i.hash=a.substring(r),a=a.substring(0,r));let u=a.indexOf("?");u>=0&&(i.search=a.substring(u),a=a.substring(0,u)),a&&(i.pathname=a)}return i}function sb(a,i,r,u={}){let{window:c=document.defaultView,v5Compat:f=!1}=u,h=c.history,p="POP",y=null,m=g();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function g(){return(h.state||{idx:null}).idx}function v(){p="POP";let B=g(),O=B==null?null:B-m;m=B,y&&y({action:p,location:L.location,delta:O})}function x(B,O){p="PUSH";let X=ec(L.location,B,O);r&&r(X,B),m=g()+1;let V=Vm(X,m),re=L.createHref(X);try{h.pushState(V,"",re)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;c.location.assign(re)}f&&y&&y({action:p,location:L.location,delta:1})}function S(B,O){p="REPLACE";let X=ec(L.location,B,O);r&&r(X,B),m=g();let V=Vm(X,m),re=L.createHref(X);h.replaceState(V,"",re),f&&y&&y({action:p,location:L.location,delta:0})}function U(B){return cb(B)}let L={get action(){return p},get location(){return a(c,h)},listen(B){if(y)throw new Error("A history only accepts one active listener");return c.addEventListener(Gm,v),y=B,()=>{c.removeEventListener(Gm,v),y=null}},createHref(B){return i(c,B)},createURL:U,encodeLocation(B){let O=U(B);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:x,replace:S,go(B){return h.go(B)}};return L}function cb(a,i=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Fe(r,"No window.location.(origin|href) available to create URL");let u=typeof a=="string"?a:zi(a);return u=u.replace(/ $/,"%20"),!i&&u.startsWith("//")&&(u=r+u),new URL(u,r)}function _p(a,i,r="/"){return fb(a,i,r,!1)}function fb(a,i,r,u){let c=typeof i=="string"?Aa(i):i,f=Lt(c.pathname||"/",r);if(f==null)return null;let h=Lp(a);hb(h);let p=null;for(let y=0;p==null&&y<h.length;++y){let m=Tb(f);p=wb(h[y],m,u)}return p}function Lp(a,i=[],r=[],u="",c=!1){let f=(h,p,y=c,m)=>{let g={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(u)&&y)return;Fe(g.relativePath.startsWith(u),`Absolute route path "${g.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(u.length)}let v=_t([u,g.relativePath]),x=r.concat(g);h.children&&h.children.length>0&&(Fe(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Lp(h.children,i,x,v,y)),!(h.path==null&&!h.index)&&i.push({path:v,score:bb(v,h.index),routesMeta:x})};return a.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))f(h,p);else for(let y of Np(h.path))f(h,p,!0,y)}),i}function Np(a){let i=a.split("/");if(i.length===0)return[];let[r,...u]=i,c=r.endsWith("?"),f=r.replace(/\?$/,"");if(u.length===0)return c?[f,""]:[f];let h=Np(u.join("/")),p=[];return p.push(...h.map(y=>y===""?f:[f,y].join("/"))),c&&p.push(...h),p.map(y=>a.startsWith("/")&&y===""?"/":y)}function hb(a){a.sort((i,r)=>i.score!==r.score?r.score-i.score:Sb(i.routesMeta.map(u=>u.childrenIndex),r.routesMeta.map(u=>u.childrenIndex)))}var db=/^:[\w-]+$/,mb=3,pb=2,yb=1,gb=10,vb=-2,Xm=a=>a==="*";function bb(a,i){let r=a.split("/"),u=r.length;return r.some(Xm)&&(u+=vb),i&&(u+=pb),r.filter(c=>!Xm(c)).reduce((c,f)=>c+(db.test(f)?mb:f===""?yb:gb),u)}function Sb(a,i){return a.length===i.length&&a.slice(0,-1).every((u,c)=>u===i[c])?a[a.length-1]-i[i.length-1]:0}function wb(a,i,r=!1){let{routesMeta:u}=a,c={},f="/",h=[];for(let p=0;p<u.length;++p){let y=u[p],m=p===u.length-1,g=f==="/"?i:i.slice(f.length)||"/",v=ru({path:y.relativePath,caseSensitive:y.caseSensitive,end:m},g),x=y.route;if(!v&&m&&r&&!u[u.length-1].route.index&&(v=ru({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},g)),!v)return null;Object.assign(c,v.params),h.push({params:c,pathname:_t([f,v.pathname]),pathnameBase:Ab(_t([f,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(f=_t([f,v.pathnameBase]))}return h}function ru(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,u]=xb(a.path,a.caseSensitive,a.end),c=i.match(r);if(!c)return null;let f=c[0],h=f.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:u.reduce((m,{paramName:g,isOptional:v},x)=>{if(g==="*"){let U=p[x]||"";h=f.slice(0,f.length-U.length).replace(/(.)\/+$/,"$1")}const S=p[x];return v&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:h,pattern:a}}function xb(a,i=!1,r=!0){jn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let u=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,y)=>(u.push({paramName:p,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(u.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),u]}function Tb(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return jn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function Lt(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,u=a.charAt(r);return u&&u!=="/"?null:a.slice(r)||"/"}var Up=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kb=a=>Up.test(a);function Eb(a,i="/"){let{pathname:r,search:u="",hash:c=""}=typeof a=="string"?Aa(a):a,f;if(r)if(kb(r))f=r;else{if(r.includes("//")){let h=r;r=r.replace(/\/\/+/g,"/"),jn(!1,`Pathnames cannot have embedded double slashes - normalizing ${h} -> ${r}`)}r.startsWith("/")?f=Qm(r.substring(1),"/"):f=Qm(r,i)}else f=i;return{pathname:f,search:zb(u),hash:Db(c)}}function Qm(a,i){let r=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?r.length>1&&r.pop():c!=="."&&r.push(c)}),r.length>1?r.join("/"):"/"}function Bs(a,i,r,u){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cb(a){return a.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function mc(a){let i=Cb(a);return i.map((r,u)=>u===i.length-1?r.pathname:r.pathnameBase)}function pc(a,i,r,u=!1){let c;typeof a=="string"?c=Aa(a):(c={...a},Fe(!c.pathname||!c.pathname.includes("?"),Bs("?","pathname","search",c)),Fe(!c.pathname||!c.pathname.includes("#"),Bs("#","pathname","hash",c)),Fe(!c.search||!c.search.includes("#"),Bs("#","search","hash",c)));let f=a===""||c.pathname==="",h=f?"/":c.pathname,p;if(h==null)p=r;else{let v=i.length-1;if(!u&&h.startsWith("..")){let x=h.split("/");for(;x[0]==="..";)x.shift(),v-=1;c.pathname=x.join("/")}p=v>=0?i[v]:"/"}let y=Eb(c,p),m=h&&h!=="/"&&h.endsWith("/"),g=(f||h===".")&&r.endsWith("/");return!y.pathname.endsWith("/")&&(m||g)&&(y.pathname+="/"),y}var _t=a=>a.join("/").replace(/\/\/+/g,"/"),Ab=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),zb=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Db=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Rb=class{constructor(a,i,r,u=!1){this.status=a,this.statusText=i||"",this.internal=u,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Mb(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Ob(a){return a.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Bp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Hp(a,i){let r=a;if(typeof r!="string"||!Up.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let u=r,c=!1;if(Bp)try{let f=new URL(window.location.href),h=r.startsWith("//")?new URL(f.protocol+r):new URL(r),p=Lt(h.pathname,i);h.origin===f.origin&&p!=null?r=p+h.search+h.hash:c=!0}catch{jn(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:c,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var qp=["POST","PUT","PATCH","DELETE"];new Set(qp);var _b=["GET",...qp];new Set(_b);var wl=I.createContext(null);wl.displayName="DataRouter";var cu=I.createContext(null);cu.displayName="DataRouterState";var Lb=I.createContext(!1),jp=I.createContext({isTransitioning:!1});jp.displayName="ViewTransition";var Nb=I.createContext(new Map);Nb.displayName="Fetchers";var Ub=I.createContext(null);Ub.displayName="Await";var In=I.createContext(null);In.displayName="Navigation";var Ri=I.createContext(null);Ri.displayName="Location";var lt=I.createContext({outlet:null,matches:[],isDataRoute:!1});lt.displayName="Route";var yc=I.createContext(null);yc.displayName="RouteError";var Ip="REACT_ROUTER_ERROR",Bb="REDIRECT",Hb="ROUTE_ERROR_RESPONSE";function qb(a){if(a.startsWith(`${Ip}:${Bb}:{`))try{let i=JSON.parse(a.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function jb(a){if(a.startsWith(`${Ip}:${Hb}:{`))try{let i=JSON.parse(a.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new Rb(i.status,i.statusText,i.data)}catch{}}function Ib(a,{relative:i}={}){Fe(xl(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:u}=I.useContext(In),{hash:c,pathname:f,search:h}=Mi(a,{relative:i}),p=f;return r!=="/"&&(p=f==="/"?r:_t([r,f])),u.createHref({pathname:p,search:h,hash:c})}function xl(){return I.useContext(Ri)!=null}function ua(){return Fe(xl(),"useLocation() may be used only in the context of a <Router> component."),I.useContext(Ri).location}var Yp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Gp(a){I.useContext(In).static||I.useLayoutEffect(a)}function Vp(){let{isDataRoute:a}=I.useContext(lt);return a?nS():Yb()}function Yb(){Fe(xl(),"useNavigate() may be used only in the context of a <Router> component.");let a=I.useContext(wl),{basename:i,navigator:r}=I.useContext(In),{matches:u}=I.useContext(lt),{pathname:c}=ua(),f=JSON.stringify(mc(u)),h=I.useRef(!1);return Gp(()=>{h.current=!0}),I.useCallback((y,m={})=>{if(jn(h.current,Yp),!h.current)return;if(typeof y=="number"){r.go(y);return}let g=pc(y,JSON.parse(f),c,m.relative==="path");a==null&&i!=="/"&&(g.pathname=g.pathname==="/"?i:_t([i,g.pathname])),(m.replace?r.replace:r.push)(g,m.state,m)},[i,r,f,c,a])}I.createContext(null);function Gb(){let{matches:a}=I.useContext(lt),i=a[a.length-1];return i?i.params:{}}function Mi(a,{relative:i}={}){let{matches:r}=I.useContext(lt),{pathname:u}=ua(),c=JSON.stringify(mc(r));return I.useMemo(()=>pc(a,JSON.parse(c),u,i==="path"),[a,c,u,i])}function Vb(a,i){return Xp(a,i)}function Xp(a,i,r,u,c){Fe(xl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=I.useContext(In),{matches:h}=I.useContext(lt),p=h[h.length-1],y=p?p.params:{},m=p?p.pathname:"/",g=p?p.pathnameBase:"/",v=p&&p.route;{let X=v&&v.path||"";Fp(m,!v||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let x=ua(),S;if(i){let X=typeof i=="string"?Aa(i):i;Fe(g==="/"||X.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${X.pathname}" was given in the \`location\` prop.`),S=X}else S=x;let U=S.pathname||"/",L=U;if(g!=="/"){let X=g.replace(/^\//,"").split("/");L="/"+U.replace(/^\//,"").split("/").slice(X.length).join("/")}let B=_p(a,{pathname:L});jn(v||B!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),jn(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=Zb(B&&B.map(X=>Object.assign({},X,{params:Object.assign({},y,X.params),pathname:_t([g,f.encodeLocation?f.encodeLocation(X.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?g:_t([g,f.encodeLocation?f.encodeLocation(X.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathnameBase])})),h,r,u,c);return i&&O?I.createElement(Ri.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},O):O}function Xb(){let a=eS(),i=Mb(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=I.createElement(I.Fragment,null,I.createElement("p",null,"💿 Hey developer 👋"),I.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",I.createElement("code",{style:f},"ErrorBoundary")," or"," ",I.createElement("code",{style:f},"errorElement")," prop on your route.")),I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},i),r?I.createElement("pre",{style:c},r):null,h)}var Qb=I.createElement(Xb,null),Qp=class extends I.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){this.props.onError?this.props.onError(a,i):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const r=jb(a.digest);r&&(a=r)}let i=a!==void 0?I.createElement(lt.Provider,{value:this.props.routeContext},I.createElement(yc.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?I.createElement(Fb,{error:a},i):i}};Qp.contextType=Lb;var Hs=new WeakMap;function Fb({children:a,error:i}){let{basename:r}=I.useContext(In);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let u=qb(i.digest);if(u){let c=Hs.get(i);if(c)throw c;let f=Hp(u.location,r);if(Bp&&!Hs.get(i))if(f.isExternal||u.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:u.replace}));throw Hs.set(i,h),h}return I.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return a}function Wb({routeContext:a,match:i,children:r}){let u=I.useContext(wl);return u&&u.static&&u.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=i.route.id),I.createElement(lt.Provider,{value:a},r)}function Zb(a,i=[],r=null,u=null,c=null){if(a==null){if(!r)return null;if(r.errors)a=r.matches;else if(i.length===0&&!r.initialized&&r.matches.length>0)a=r.matches;else return null}let f=a,h=r?.errors;if(h!=null){let g=f.findIndex(v=>v.route.id&&h?.[v.route.id]!==void 0);Fe(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,g+1))}let p=!1,y=-1;if(r)for(let g=0;g<f.length;g++){let v=f[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(y=g),v.route.id){let{loaderData:x,errors:S}=r,U=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||U){p=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}let m=r&&u?(g,v)=>{u(g,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Ob(r.matches),errorInfo:v})}:void 0;return f.reduceRight((g,v,x)=>{let S,U=!1,L=null,B=null;r&&(S=h&&v.route.id?h[v.route.id]:void 0,L=v.route.errorElement||Qb,p&&(y<0&&x===0?(Fp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,B=null):y===x&&(U=!0,B=v.route.hydrateFallbackElement||null)));let O=i.concat(f.slice(0,x+1)),X=()=>{let V;return S?V=L:U?V=B:v.route.Component?V=I.createElement(v.route.Component,null):v.route.element?V=v.route.element:V=g,I.createElement(Wb,{match:v,routeContext:{outlet:g,matches:O,isDataRoute:r!=null},children:V})};return r&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?I.createElement(Qp,{location:r.location,revalidation:r.revalidation,component:L,error:S,children:X(),routeContext:{outlet:null,matches:O,isDataRoute:!0},onError:m}):X()},null)}function gc(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kb(a){let i=I.useContext(wl);return Fe(i,gc(a)),i}function Jb(a){let i=I.useContext(cu);return Fe(i,gc(a)),i}function Pb(a){let i=I.useContext(lt);return Fe(i,gc(a)),i}function vc(a){let i=Pb(a),r=i.matches[i.matches.length-1];return Fe(r.route.id,`${a} can only be used on routes that contain a unique "id"`),r.route.id}function $b(){return vc("useRouteId")}function eS(){let a=I.useContext(yc),i=Jb("useRouteError"),r=vc("useRouteError");return a!==void 0?a:i.errors?.[r]}function nS(){let{router:a}=Kb("useNavigate"),i=vc("useNavigate"),r=I.useRef(!1);return Gp(()=>{r.current=!0}),I.useCallback(async(c,f={})=>{jn(r.current,Yp),r.current&&(typeof c=="number"?await a.navigate(c):await a.navigate(c,{fromRouteId:i,...f}))},[a,i])}var Fm={};function Fp(a,i,r){!i&&!Fm[a]&&(Fm[a]=!0,jn(!1,r))}I.memo(tS);function tS({routes:a,future:i,state:r,onError:u}){return Xp(a,void 0,r,u,i)}function aS({to:a,replace:i,state:r,relative:u}){Fe(xl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=I.useContext(In);jn(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=I.useContext(lt),{pathname:h}=ua(),p=Vp(),y=pc(a,mc(f),h,u==="path"),m=JSON.stringify(y);return I.useEffect(()=>{p(JSON.parse(m),{replace:i,state:r,relative:u})},[p,m,u,i,r]),null}function nc(a){Fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lS({basename:a="/",children:i=null,location:r,navigationType:u="POP",navigator:c,static:f=!1,unstable_useTransitions:h}){Fe(!xl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),y=I.useMemo(()=>({basename:p,navigator:c,static:f,unstable_useTransitions:h,future:{}}),[p,c,f,h]);typeof r=="string"&&(r=Aa(r));let{pathname:m="/",search:g="",hash:v="",state:x=null,key:S="default"}=r,U=I.useMemo(()=>{let L=Lt(m,p);return L==null?null:{location:{pathname:L,search:g,hash:v,state:x,key:S},navigationType:u}},[p,m,g,v,x,S,u]);return jn(U!=null,`<Router basename="${p}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:I.createElement(In.Provider,{value:y},I.createElement(Ri.Provider,{children:i,value:U}))}function iS({children:a,location:i}){return Vb(tc(a),i)}function tc(a,i=[]){let r=[];return I.Children.forEach(a,(u,c)=>{if(!I.isValidElement(u))return;let f=[...i,c];if(u.type===I.Fragment){r.push.apply(r,tc(u.props.children,f));return}Fe(u.type===nc,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Fe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=tc(u.props.children,f)),r.push(h)}),r}var au="get",lu="application/x-www-form-urlencoded";function fu(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function rS(a){return fu(a)&&a.tagName.toLowerCase()==="button"}function uS(a){return fu(a)&&a.tagName.toLowerCase()==="form"}function oS(a){return fu(a)&&a.tagName.toLowerCase()==="input"}function sS(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function cS(a,i){return a.button===0&&(!i||i==="_self")&&!sS(a)}var $r=null;function fS(){if($r===null)try{new FormData(document.createElement("form"),0),$r=!1}catch{$r=!0}return $r}var hS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qs(a){return a!=null&&!hS.has(a)?(jn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lu}"`),null):a}function dS(a,i){let r,u,c,f,h;if(uS(a)){let p=a.getAttribute("action");u=p?Lt(p,i):null,r=a.getAttribute("method")||au,c=qs(a.getAttribute("enctype"))||lu,f=new FormData(a)}else if(rS(a)||oS(a)&&(a.type==="submit"||a.type==="image")){let p=a.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=a.getAttribute("formaction")||p.getAttribute("action");if(u=y?Lt(y,i):null,r=a.getAttribute("formmethod")||p.getAttribute("method")||au,c=qs(a.getAttribute("formenctype"))||qs(p.getAttribute("enctype"))||lu,f=new FormData(p,a),!fS()){let{name:m,type:g,value:v}=a;if(g==="image"){let x=m?`${m}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else m&&f.append(m,v)}}else{if(fu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=au,u=null,c=lu,h=a}return f&&c==="text/plain"&&(h=f,f=void 0),{action:u,method:r.toLowerCase(),encType:c,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bc(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function mS(a,i,r,u){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${u}`:c.pathname=`${c.pathname}.${u}`:c.pathname==="/"?c.pathname=`_root.${u}`:i&&Lt(c.pathname,i)==="/"?c.pathname=`${i.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function pS(a,i){if(a.id in i)return i[a.id];try{let r=await import(a.module);return i[a.id]=r,r}catch(r){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yS(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function gS(a,i,r){let u=await Promise.all(a.map(async c=>{let f=i.routes[c.route.id];if(f){let h=await pS(f,r);return h.links?h.links():[]}return[]}));return wS(u.flat(1).filter(yS).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Wm(a,i,r,u,c,f){let h=(y,m)=>r[m]?y.route.id!==r[m].route.id:!0,p=(y,m)=>r[m].pathname!==y.pathname||r[m].route.path?.endsWith("*")&&r[m].params["*"]!==y.params["*"];return f==="assets"?i.filter((y,m)=>h(y,m)||p(y,m)):f==="data"?i.filter((y,m)=>{let g=u.routes[y.route.id];if(!g||!g.hasLoader)return!1;if(h(y,m)||p(y,m))return!0;if(y.route.shouldRevalidate){let v=y.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function vS(a,i,{includeHydrateFallback:r}={}){return bS(a.map(u=>{let c=i.routes[u.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),r&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function bS(a){return[...new Set(a)]}function SS(a){let i={},r=Object.keys(a).sort();for(let u of r)i[u]=a[u];return i}function wS(a,i){let r=new Set;return new Set(i),a.reduce((u,c)=>{let f=JSON.stringify(SS(c));return r.has(f)||(r.add(f),u.push({key:f,link:c})),u},[])}function Wp(){let a=I.useContext(wl);return bc(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function xS(){let a=I.useContext(cu);return bc(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Sc=I.createContext(void 0);Sc.displayName="FrameworkContext";function Zp(){let a=I.useContext(Sc);return bc(a,"You must render this element inside a <HydratedRouter> element"),a}function TS(a,i){let r=I.useContext(Sc),[u,c]=I.useState(!1),[f,h]=I.useState(!1),{onFocus:p,onBlur:y,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=i,x=I.useRef(null);I.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let L=O=>{O.forEach(X=>{h(X.isIntersecting)})},B=new IntersectionObserver(L,{threshold:.5});return x.current&&B.observe(x.current),()=>{B.disconnect()}}},[a]),I.useEffect(()=>{if(u){let L=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(L)}}},[u]);let S=()=>{c(!0)},U=()=>{c(!1),h(!1)};return r?a!=="intent"?[f,x,{}]:[f,x,{onFocus:Si(p,S),onBlur:Si(y,U),onMouseEnter:Si(m,S),onMouseLeave:Si(g,U),onTouchStart:Si(v,S)}]:[!1,x,{}]}function Si(a,i){return r=>{a&&a(r),r.defaultPrevented||i(r)}}function kS({page:a,...i}){let{router:r}=Wp(),u=I.useMemo(()=>_p(r.routes,a,r.basename),[r.routes,a,r.basename]);return u?I.createElement(CS,{page:a,matches:u,...i}):null}function ES(a){let{manifest:i,routeModules:r}=Zp(),[u,c]=I.useState([]);return I.useEffect(()=>{let f=!1;return gS(a,i,r).then(h=>{f||c(h)}),()=>{f=!0}},[a,i,r]),u}function CS({page:a,matches:i,...r}){let u=ua(),{future:c,manifest:f,routeModules:h}=Zp(),{basename:p}=Wp(),{loaderData:y,matches:m}=xS(),g=I.useMemo(()=>Wm(a,i,m,f,u,"data"),[a,i,m,f,u]),v=I.useMemo(()=>Wm(a,i,m,f,u,"assets"),[a,i,m,f,u]),x=I.useMemo(()=>{if(a===u.pathname+u.search+u.hash)return[];let L=new Set,B=!1;if(i.forEach(X=>{let V=f.routes[X.route.id];!V||!V.hasLoader||(!g.some(re=>re.route.id===X.route.id)&&X.route.id in y&&h[X.route.id]?.shouldRevalidate||V.hasClientLoader?B=!0:L.add(X.route.id))}),L.size===0)return[];let O=mS(a,p,c.unstable_trailingSlashAwareDataRequests,"data");return B&&L.size>0&&O.searchParams.set("_routes",i.filter(X=>L.has(X.route.id)).map(X=>X.route.id).join(",")),[O.pathname+O.search]},[p,c.unstable_trailingSlashAwareDataRequests,y,u,f,g,i,a,h]),S=I.useMemo(()=>vS(v,f),[v,f]),U=ES(v);return I.createElement(I.Fragment,null,x.map(L=>I.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...r})),S.map(L=>I.createElement("link",{key:L,rel:"modulepreload",href:L,...r})),U.map(({key:L,link:B})=>I.createElement("link",{key:L,nonce:r.nonce,...B})))}function AS(...a){return i=>{a.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var zS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zS&&(window.__reactRouterVersion="7.12.0")}catch{}function DS({basename:a,children:i,unstable_useTransitions:r,window:u}){let c=I.useRef();c.current==null&&(c.current=ub({window:u,v5Compat:!0}));let f=c.current,[h,p]=I.useState({action:f.action,location:f.location}),y=I.useCallback(m=>{r===!1?p(m):I.startTransition(()=>p(m))},[r]);return I.useLayoutEffect(()=>f.listen(y),[f,y]),I.createElement(lS,{basename:a,children:i,location:h.location,navigationType:h.action,navigator:f,unstable_useTransitions:r})}var Kp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jp=I.forwardRef(function({onClick:i,discover:r="render",prefetch:u="none",relative:c,reloadDocument:f,replace:h,state:p,target:y,to:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:x,...S},U){let{basename:L,unstable_useTransitions:B}=I.useContext(In),O=typeof m=="string"&&Kp.test(m),X=Hp(m,L);m=X.to;let V=Ib(m,{relative:c}),[re,ue,H]=TS(u,S),K=OS(m,{replace:h,state:p,target:y,preventScrollReset:g,relative:c,viewTransition:v,unstable_defaultShouldRevalidate:x,unstable_useTransitions:B});function ce(ye){i&&i(ye),ye.defaultPrevented||K(ye)}let fe=I.createElement("a",{...S,...H,href:X.absoluteURL||V,onClick:X.isExternal||f?i:ce,ref:AS(U,ue),target:y,"data-discover":!O&&r==="render"?"true":void 0});return re&&!O?I.createElement(I.Fragment,null,fe,I.createElement(kS,{page:V})):fe});Jp.displayName="Link";var Pp=I.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:u="",end:c=!1,style:f,to:h,viewTransition:p,children:y,...m},g){let v=Mi(h,{relative:m.relative}),x=ua(),S=I.useContext(cu),{navigator:U,basename:L}=I.useContext(In),B=S!=null&&BS(v)&&p===!0,O=U.encodeLocation?U.encodeLocation(v).pathname:v.pathname,X=x.pathname,V=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(X=X.toLowerCase(),V=V?V.toLowerCase():null,O=O.toLowerCase()),V&&L&&(V=Lt(V,L)||V);const re=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let ue=X===O||!c&&X.startsWith(O)&&X.charAt(re)==="/",H=V!=null&&(V===O||!c&&V.startsWith(O)&&V.charAt(O.length)==="/"),K={isActive:ue,isPending:H,isTransitioning:B},ce=ue?i:void 0,fe;typeof u=="function"?fe=u(K):fe=[u,ue?"active":null,H?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let ye=typeof f=="function"?f(K):f;return I.createElement(Jp,{...m,"aria-current":ce,className:fe,ref:g,style:ye,to:h,viewTransition:p},typeof y=="function"?y(K):y)});Pp.displayName="NavLink";var RS=I.forwardRef(({discover:a="render",fetcherKey:i,navigate:r,reloadDocument:u,replace:c,state:f,method:h=au,action:p,onSubmit:y,relative:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:x,...S},U)=>{let{unstable_useTransitions:L}=I.useContext(In),B=NS(),O=US(p,{relative:m}),X=h.toLowerCase()==="get"?"get":"post",V=typeof p=="string"&&Kp.test(p),re=ue=>{if(y&&y(ue),ue.defaultPrevented)return;ue.preventDefault();let H=ue.nativeEvent.submitter,K=H?.getAttribute("formmethod")||h,ce=()=>B(H||ue.currentTarget,{fetcherKey:i,method:K,navigate:r,replace:c,state:f,relative:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:x});L&&r!==!1?I.startTransition(()=>ce()):ce()};return I.createElement("form",{ref:U,method:X,action:O,onSubmit:u?y:re,...S,"data-discover":!V&&a==="render"?"true":void 0})});RS.displayName="Form";function MS(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $p(a){let i=I.useContext(wl);return Fe(i,MS(a)),i}function OS(a,{target:i,replace:r,state:u,preventScrollReset:c,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p,unstable_useTransitions:y}={}){let m=Vp(),g=ua(),v=Mi(a,{relative:f});return I.useCallback(x=>{if(cS(x,i)){x.preventDefault();let S=r!==void 0?r:zi(g)===zi(v),U=()=>m(a,{replace:S,state:u,preventScrollReset:c,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p});y?I.startTransition(()=>U()):U()}},[g,m,v,r,u,i,a,c,f,h,p,y])}var _S=0,LS=()=>`__${String(++_S)}__`;function NS(){let{router:a}=$p("useSubmit"),{basename:i}=I.useContext(In),r=$b(),u=a.fetch,c=a.navigate;return I.useCallback(async(f,h={})=>{let{action:p,method:y,encType:m,formData:g,body:v}=dS(f,i);if(h.navigate===!1){let x=h.fetcherKey||LS();await u(x,r,h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:g,body:v,formMethod:h.method||y,formEncType:h.encType||m,flushSync:h.flushSync})}else await c(h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:g,body:v,formMethod:h.method||y,formEncType:h.encType||m,replace:h.replace,state:h.state,fromRouteId:r,flushSync:h.flushSync,viewTransition:h.viewTransition})},[u,c,i,r])}function US(a,{relative:i}={}){let{basename:r}=I.useContext(In),u=I.useContext(lt);Fe(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),f={...Mi(a||".",{relative:i})},h=ua();if(a==null){f.search=h.search;let p=new URLSearchParams(f.search),y=p.getAll("index");if(y.some(g=>g==="")){p.delete("index"),y.filter(v=>v).forEach(v=>p.append("index",v));let g=p.toString();f.search=g?`?${g}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(f.pathname=f.pathname==="/"?r:_t([r,f.pathname])),zi(f)}function BS(a,{relative:i}={}){let r=I.useContext(jp);Fe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=$p("useViewTransitionState"),c=Mi(a,{relative:i});if(!r.isTransitioning)return!1;let f=Lt(r.currentLocation.pathname,u)||r.currentLocation.pathname,h=Lt(r.nextLocation.pathname,u)||r.nextLocation.pathname;return ru(c.pathname,h)!=null||ru(c.pathname,f)!=null}const HS=`# 10 Grep Commands That'll Make You Feel Like a Linux Wizard


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
-   \`|\`  OR operator (with  \`-E\`  flag)`,qS=`# 5 Automation Scripts Every Linux User Should Know


## Smart Folder Organizer

Smart folder organizer script cleans up messy folders for you. If you've ever opened your Downloads folder and seen dozens of PDFs, images, installers, and random files all mixed together, this script solves that problem automatically. Instead of manually dragging files into folders, the script looks at each file, figures out what type it is, and moves it into the right place.

So, create a new file called "smart_organizer.sh" using the nano terminal text editor.

\`\`\`
nano smart_organizer.sh
\`\`\`

Then, add the following code:

\`\`\`
#!/bin/bash

DIR="$HOME/Downloads"

move() {
    mkdir -p "$2"
    mv "$1" "$2/"
}

for file in "$DIR"/*; do
    [ -f "$file" ] || continue

    case "\${file##*.}" in
        jpg|png|gif)
            move "$file" "$DIR/Images"
            ;;
        pdf|docx|txt)
            move "$file" "$DIR/Documents"
            ;;
        zip|tar|gz)
            move "$file" "$DIR/Archives"
            ;;
        deb|rpm)
            move "$file" "$DIR/Installers"
            ;;
    esac
done
\`\`\`

When the script runs, it checks every file inside your Downloads folder. If the item isn't a regular file (for example, if it's already a folder), the script skips it. This prevents anything important from being moved by mistake. For each file, the script looks at the file extension—things like .jpg, .pdf, or .zip. Based on that extension, it decides where the file belongs. Images go into an Images folder, documents go into Documents, compressed files go into Archives, and software installers go into Installers. If one of these folders doesn't exist yet, the script creates it automatically before moving the file. Nothing is deleted; files are simply moved into more organized folders.

## Run the Script

Make sure you are inside your Downloads folder before running the script. So, open a terminal and go to your Downloads folder:

\`\`\`
cd /Downloads
\`\`\`

Before running it, take a quick look at your Downloads folder and make sure you're okay with the files being moved into subfolders. Now run the script using the following command:

\`\`\`
./smart_organizer.sh
\`\`\`

As soon as it finishes, check your Downloads folder. You'll see new folders like Images, Documents, Archives, and Installers with your files sorted inside.

## Automating Daily Maintenance

Almost every Linux system relies on cron jobs to schedule automatic actions such as backups, updates, and cleanup tasks. On its own, cron is just a scheduler, but this script adds structure and logic on top of it, turning simple scheduled jobs into powerful automation workflows. The following script example updates the system, cleans junk, checks disk space, and logs everything.

\`\`\`
#!/bin/bash
# Daily system update + cleanup

LOGFILE="/var/log/daily_maintenance.log"

echo "=== Daily maintenance started at $(date) ===" >> "$LOGFILE"

# System update
echo "Updating packages…" >> "$LOGFILE"
sudo apt update && sudo apt upgrade -y >> "$LOGFILE"

# Clean old packages
echo "Cleaning up old packages…" >> "$LOGFILE"
sudo apt autoremove -y >> "$LOGFILE"
sudo apt autoclean >> "$LOGFILE"

# Disk usage report
echo "Disk usage report:" >> "$LOGFILE"
df -h >> "$LOGFILE"

echo "=== Daily maintenance completed at $(date) ===" >> "$LOGFILE"
\`\`\`

This script automatically takes care of basic daily maintenance on a Linux system. It updates installed software, removes packages and cached files that are no longer needed, and records a snapshot of disk usage. Everything it does is written to a log file, so you can easily check later what happened and when.

## How to Use

Save as /usr/local/bin/daily-maintenance.sh, make it executable (chmod +x), and schedule with cron:

\`\`\`
crontab -e
\`\`\`

Then add:

\`\`\`
0 3 * * * /usr/local/bin/daily-maintenance.sh
\`\`\`

Now the script runs automatically every day at 3 AM.

## Auto-Installer Script

After installing a new Linux distro, you may need to install different packages. So, instead of installing tools one by one every time you set up a new system, you write a script once and let it install everything for you automatically. Normally, setting up a system looks like this:

\`\`\`
apt install git
apt install curl
apt install vim
apt install htop
apt install tmux
\`\`\`

This wastes time, so a simple script turns all of that into one command.

### Simple Auto-Installer

\`\`\`
#!/bin/bash

sudo apt update
sudo apt install -y git curl vim htop tmux
\`\`\`

When you run this script, Linux updates its package list and installs all the listed tools automatically without stopping to ask questions. Instead of five manual installs, you get everything in one go.

## Automatic SSH Brute-Force Blocker

If your Linux system is reachable over the internet and has SSH enabled, it may be vulnerable. Bots from all over the world try random usernames and passwords every minute, hoping to get lucky. You usually don't notice this because the attacks fail. An automatic SSH brute-force blocker watches for repeated failed login attempts and blocks the source IP addresses.

### Example Script

\`\`\`
#!/bin/bash

LOG="/var/log/auth.log"
THRESHOLD=5

grep "Failed password" "$LOG" \\
    | awk '{print $(NF-3)}' \\
    | sort \\
    | uniq -c \\
    | while read count ip; do

        if [ "$count" -ge "$THRESHOLD" ]; then
            iptables -A INPUT -s "$ip" -j DROP
            echo "$(date): Blocked $ip after $count failed attempts" \\
                >> /var/log/ssh_blocker.log
        fi

    done
\`\`\`

This script is basically saying: "If someone keeps getting the SSH login wrong too many times (5 attempts), stop them from trying again." So, an SSH brute-force blocker protects your system by watching for repeated failed SSH logins and automatically blocking the attackers.

## System Cleanup Utility

Over time, Linux systems collect things they no longer need like old packages, cached files, temporary data, and logs. None of this is dangerous on its own, but if it's never cleaned up, it slowly wastes disk space and can affect performance.

### Cleanup Script

\`\`\`
#!/bin/bash

LOG="/var/log/cleanup.log"

echo "$(date) - Starting system cleanup" >> "$LOG"

sudo apt autoremove -y >> "$LOG" 2>&1
sudo apt autoclean -y >> "$LOG" 2>&1

echo "$(date) - Cleanup finished" >> "$LOG"
\`\`\`

This script cleans your system and keeps a record of when it happened and what was done. It removes unnecessary files, helping your Linux system stay clean, efficient, and free of disk space problems.`,jS=`# How to Convert FLAC Music to Apple Lossless and Sync to iPhone

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
`,IS=`# Server Security Response Guide

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

That means attempted exploitation, not just scanning.`,YS=`# How to Answer a CTO (How You SOUND Matters)

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
Calm, structured thinking under pressure.`,GS=`## Section 1: Linux Basics

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
    
5.  Add user to group? usermod -aG`,VS=`# 15 Linux One-Liners That Feel Like Cheating

Tiny commands. Massive impact. Once you learn these, Linux starts playing on easy mode.


1.  ## Find Large Files Eating Your Disk Space
    
    \`du -ah . | sort -rh | head -20\`
    
    This command instantly answers the question: "What's using all my disk space?"
    
    -   \`du -ah\`  shows sizes of all files and directories
    -   \`sort -rh\`  orders them by size
    -   \`head\`  limits the output
    
    It's fast, honest, and brutally effective. Once you use this, disk-cleanup GUIs feel unnecessary.
    
2.  ## Kill a Process by Name (Without Googling PIDs)
    
    \`pkill -f process_name\`
    
    No  \`ps\`, no  \`grep\`, no copy-pasting IDs. This one-liner kills matching processes by name. It's perfect when something is stuck, misbehaving, or eating CPU.
    
    Pro tip: Use it carefully. This command does exactly what you ask — nothing more, nothing less.
    
3.  ## Count How Many Times a Word Appears in Files
    
    \`grep -R "error" . | wc -l\`
    
    Need to know how bad a problem is before diving in? This quickly tells you how many times a word (like  \`error\`,  \`TODO\`, or  \`FIXME\`) appears across a project. It's a great way to measure chaos before fixing it.
    
4.  ## Monitor Logs in Real Time (Like a Pro)
    
    \`tail -f app.log | grep --line-buffered ERROR\`
    
    Instead of drowning in logs, this shows only what matters — live. You'll see new error lines appear instantly, making debugging feel less reactive and more controlled. Once you try this, scrolling through raw logs feels primitive.
    
5.  ## Replace Text in Multiple Files at Once
    
    \`sed -i 's/old_text/new_text/g' *.txt\`
    
    This is bulk editing without opening an editor.
    
    -   No search-and-replace dialogs
    -   No accidental misses
    -   No manual repetition
    
    It's fast, scriptable, and dangerously powerful — in the best way.
    
6.  ## Show the Most Used Commands in Your History
    
    \`history | awk '{print $2}' | sort | uniq -c | sort -nr | head\`
    
    This one feels almost too revealing. It tells you which commands you actually use the most — not the ones you think you use. It's a great way to identify what's worth aliasing or automating. Linux doesn't judge. It just shows receipts.
    
7.  ## Find Files Modified in the Last 24 Hours
    
    \`find . -type f -mtime -1\`
    
    When something broke "recently" and you're not sure what changed, this command becomes a lifesaver. It narrows your search space instantly and often points straight to the culprit.
    
8.  ## Download a File Without Leaving the Terminal
    
    \`curl -O https://example.com/file.zip\`
    
    Simple, fast, and script-friendly. This is how servers pull dependencies, configs, and binaries — no browser required. Once you're comfortable with  \`curl\`, the terminal becomes your primary interface to the web.
    
9.  ## Extract Any Archive Without Remembering Syntax
    
    \`tar -xf archive.tar.gz\`
    
    Yes, there are more flags. No, you don't need them most of the time. This one-liner works for the majority of tar-based archives and saves you from Googling extraction commands — again.
    
10.  ## See Which Ports Are in Use (and by What)
    
    \`ss -tulpn\`
    
   When your app refuses to start because "the port is already in use," this command gives you answers immediately. It shows:
    
    -   Active ports
    -   Listening services
    -   Associated process IDs
    
   This is one of those commands that instantly makes you feel in control of your system.
    
11.  ## Rename Files in Bulk (Without Scripts)
    
    \`rename 's/ /_/g' *.jpg\`
    
   Spaces in filenames are a problem waiting to happen. This one-liner cleans them up in seconds — no loops, no scripts, no regrets. It's especially useful when dealing with downloads or media files.
    
12.  ## Watch a Command Run Every Second
    
    \`watch -n 1 df -h\`
    
   Perfect for monitoring:
    
    -   Disk usage
    -   Memory consumption
    -   Background processes
    
   Instead of re-running commands manually, Linux does it for you — live.
    
13.  ## Quickly Create a File of Any Size
    
    \`fallocate -l 1G testfile.img\`
    
   Need a large file for testing uploads, storage, or performance? This creates it instantly — no waiting, no dummy data generation. It's shockingly fast the first time you see it.
    
14.  ## Find and Delete Files Older Than 30 Days
    
    \`find . -type f -mtime +30 -delete\`
    
   This is automated cleanup at its finest. Perfect for logs, temporary files, and directories that grow quietly until they become a problem. Just test with  \`-print\`  first if you're nervous — Linux will do exactly what you tell it.
    
15.  ## Pipe Output Directly Into Your Clipboard
    
    \`cat file.txt | xclip -selection clipboard\`
    
   This feels like magic the first time. You can copy command output directly into your clipboard — no mouse, no highlighting, no context switching. It's small, but once you adopt it, it's hard to go back.
   `,XS=`# Linux Commands: Find All SUID Binaries (for Privilege Escalation)

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
\`\`\``,QS=`# Most Feared Linux Commands to Know

## 1. rm -rf / (Why Fear Is a Feature)

Let's get the dangerous one out of the way.

\`\`\`
rm -rf /
\`\`\`

This command recursively deletes everything from the root directory. On modern systems, it's often protected — but the fact that it exists is important.

Linux trusts you. Completely.

That trust is power. It means the system assumes you know what you're doing, and it will never second-guess you. Respect that trust, and Linux becomes unstoppable. Abuse it, and… well, you reinstall.

## 2. :(){ :|:& };: (The Fork Bomb)

This one looks innocent. It is not.

\`\`\`
:(){ :|:& };:
\`\`\`

This creates a function that calls itself infinitely, spawning processes until your system freezes.

Why is this useful knowledge? Because it teaches you how process limits, user quotas, and system safeguards actually work. It's also why production servers have strict ulimit rules.

Knowing why this breaks systems makes you better at preventing disasters.

## 3. dd — The Data Destroyer (and Savior)

dd doesn't ask questions. It doesn't warn you. It just does exactly what you tell it.

\`\`\`
dd if=/dev/zero of=/dev/sdX
\`\`\`

One typo and you wipe an entire disk.

But used correctly, dd is a lifesaver:

-   Cloning disks
-   Creating bootable ISOs
-   Benchmarking raw I/O
-   Recovering damaged drives

It feels illegal because it bypasses abstractions and talks directly to hardware. Treat it like a loaded weapon.

## 4. strace — Read a Program's Mind

Ever wonder what a binary is actually doing?

\`\`\`
strace ./your_program
\`\`\`

This shows every system call a program makes — file access, network calls, memory allocation.

It's how you debug:

-   "Why does this program hang?"
-   "Which file is it waiting on?"
-   "Why is this failing in production but not locally?"

Once you use strace, debugging without it feels blind.

## 5. lsof — Who's Touching That File?

Linux won't let you delete a file that's still open by a process. lsof tells you exactly who's guilty.

\`\`\`
lsof /path/to/file
\`\`\`

Or find what's using a port:

\`\`\`
lsof -i :8080
\`\`\`

This command saves you from rebooting servers "just to be safe." It turns guesswork into certainty — and that's real power.

## 6. nc (Netcat) — The Networking Swiss Army Knife

Netcat can:

-   Open TCP/UDP connections
-   Transfer files
-   Act as a server
-   Debug network services

\`\`\`
nc -l 9000
\`\`\`

\`\`\`
nc host 9000 < file.txt
\`\`\`

With nc, you can test network behavior without frameworks, tools, or GUIs. It feels illegal because it bypasses layers and talks directly to the wire.

## 7. watch — Turn Any Command into a Dashboard

Want to see a command update live?

\`\`\`
watch -n 1 df -h
\`\`\`

Suddenly, disk usage feels real-time.

You can monitor:

-   Memory usage
-   Directory changes
-   API responses
-   Log growth

watch turns static commands into living dashboards — without writing a single script.

## 8. xargs — Make Commands Work in Bulk

Most people pipe output. Fewer people weaponize it.

\`\`\`
cat files.txt | xargs rm
\`\`\`

xargs takes input and feeds it as arguments to another command — efficiently.

This is how you:

-   Rename thousands of files
-   Kill batches of processes
-   Run commands in parallel

Once you understand xargs, shell pipelines become programming.

## 9. sed — Edit Reality in One Line

Stream editing sounds boring until you use it.

\`\`\`
sed -i 's/localhost/127.0.0.1/g' *.conf
\`\`\`

You just edited hundreds of config files instantly.

sed is dangerous because it scales mistakes and fixes. But when used carefully, it replaces entire scripts with a single line of intent.

## 10. awk — The Terminal's Secret Programming Language

awk isn't a command. It's a language hiding in plain sight.

\`\`\`
awk '{print $1, $3}' data.txt
\`\`\`

You can:

-   Parse logs
-   Aggregate data
-   Generate reports
-   Transform files mid-stream

Many engineers never fully learn awk. The ones who do quietly outperform everyone else.

## 11. nohup — Walk Away from Running Jobs

Need something to keep running after you log out?

\`\`\`
nohup ./script.sh &
\`\`\`

Close the terminal. Shut your laptop. The process lives on.

This command feels illegal because it breaks the assumption that sessions control processes. It's essential for long-running tasks on remote servers.

## 12. htop — See the Truth About Your System

Unlike top, htop is visual, interactive, and honest.

You can:

-   Kill processes instantly
-   Sort by memory or CPU
-   See per-core usage
-   Track runaway threads

Once you use htop, everything else feels like debugging in the dark.

## 13. du -sh * — The Fastest Storage Audit Ever

\`\`\`
du -sh *
\`\`\`

In one command, you know exactly what's eating disk space.

No GUI. No scanning tools. Just truth.

It's the fastest way to answer the question every server eventually asks: Where did my storage go?

## 14. chmod with Numbers — Permissions Without Guessing

\`\`\`
chmod 755 script.sh
\`\`\`

Numeric permissions feel cryptic until they click. Then they feel surgical.

-   7 = read, write, execute
-   5 = read, execute
-   4 = read

Once you internalize this, file permissions stop being magic and start being precise.

## 15. history | grep — Time Travel for Commands

\`\`\`
history | grep docker
\`\`\`

You're not searching memory — you're searching your past self's solutions.

This command turns experience into a searchable database. The longer you work in Linux, the more powerful it becomes.`,FS=`# Reflections on My Tenure at Iskaan

Dear [Recipient’s Name],

I am grateful for the opportunity to have worked at Iskaan for the past 1.5 years. During this time, I have dedicated myself to understanding the challenges within the organization and identifying the root causes that have hindered its growth. With this email, I would like to share my observations, concerns, and personal experiences in a constructive and transparent manner.

## 1. Leadership and Management Approach

One of the biggest challenges lies in the leadership style at the senior management level. Instead of addressing issues at their root cause, the tendency has often been to sideline or remove the individuals who raise concerns. This has fostered an environment where problems are suppressed rather than solved.

In addition, instances of harassment towards female colleagues have been openly visible, yet not addressed. This creates a hostile and unsafe environment, damaging both morale and organizational reputation.

## 2. Middle Management Inefficiencies

The middle management structure suffers from a lack of accountability and ownership. Responsibilities are frequently delegated without proper oversight, and essential roles such as Project Manager are not being executed as they should. Walking around and asking “Is it done?” cannot replace the responsibility of actively managing projects.

## 3. Policies and Workplace Rules

The policies enforced feel more like ad-hoc rules than structured governance. Often, new restrictions are introduced reactively based on incidents from the previous day, which creates a sense of instability and confusion. For example:

-   A single work-from-home (WFH) instance I took in 1.5 years was met with disproportionate criticism. Despite working six hours straight that day to resolve a live Aqari issue, I was repeatedly called by management, not for technical support, but seemingly for ego-driven reasons. The following day, WFH policies were withdrawn altogether, unfairly penalizing all employees.
-   Attendance rules are excessively strict. Being late by even five minutes results in an S1, with no consideration for uncontrollable factors such as traffic or roadblocks.
-   Breaks are micromanaged to the point where even smoke breaks, sometimes involving work-related discussions, are counted as “lost productivity.”

Such rigid and inconsistent enforcement demotivates employees and creates resentment.

## 4. Quality of Talent and Retention

In my experience of over seven years in IT, I have rarely encountered such an imbalance between skill levels and positions. Developers with years in the industry continue to ask basic questions, while talented individuals who could have added value have been terminated. Retaining underperformers while letting go of capable employees has weakened the company’s technical strength.

## 5. My Role and Contributions

I was initially hired as a Scrum Master at a salary lower than my previous role due to company downsizing at the time. I accepted with the understanding, as mentioned by Sir Salman in email, that my compensation would be revised after probation. This never happened, and when I raised the matter, it was denied.

Later, my designation was changed to System Analyst without prior discussion or approval. Despite this, I continued to take on responsibilities beyond my job description, particularly in server management and infrastructure, because I enjoy problem-solving and working on challenges others avoid.

I have been criticized for not being a “good manager” or for shortcomings in the SaaS product—tasks that fall under the PM’s scope, not mine. Nonetheless, I maintained transparency in my work. Unfortunately, my input in meetings was often ignored, only to be later re-presented by others and then praised.

## 6. Technical Contributions

Despite these challenges, I am proud of the work I delivered. Among my contributions:

-   Setting up 1 Synergic local server (20+ sites)
-   Managing SaaS server
-   Handling Codematical servers (10+ sites)
-   Transitioning to Techmatical servers (10+ sites)
-   Managing GT servers (10+ sites)
-   Maintaining 4 Aqari UAT servers
-   Managing 10 Aqari production servers (live + backup)
-   Supporting Qatar servers
-   Overseeing installation of a physical server, including technical discussions on VPN, RAID, tunneling, firewall, and switches.

On multiple occasions, even senior staff, including the PM, deferred to me for technical expertise in server-related matters. This underscores the value and unique expertise I brought to Iskaan.

## Conclusion

My intention in writing this email is not to disparage but to highlight systemic issues that require serious attention. A culture of suppression, harassment, and reactive decision-making will only continue to harm Iskaan’s growth and reputation. If the organization truly wishes to evolve, it must prioritize accountability, fairness, and respect at all levels.

I remain proud of the work I accomplished during my time here, but I cannot overlook the challenges that made this experience difficult. I hope these reflections serve as constructive feedback for the betterment of the company.

Sincerely,  
[Your Full Name]`,WS=`# Run Claude Code Locally on Apple Silicon Using LM Studio and LiteLLM (Zero Cost)

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

Claude Code's agentic workflow is not tied to Anthropic's cloud — it only requires the Anthropic Messages API contract. By combining LM Studio, LiteLLM, and a strong open-source coding model, you can run the entire experience locally, privately, and at zero cost. This setup lowers the barrier to entry for agentic coding and makes it practical for everyday development.`,ZS=`# Passwordless SSH Login Using SSH Key Authentication (Step-by-Step Guide)

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
\`\`\``,KS=`# Setting a Login Banner on Linux Servers 

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
\`\`\``,JS=`# What SRE Interviewers Really Look For

Before we go technical, let's align on reality.

SRE interviews do not test:

-   How many tools do you know
-   How many certifications do you have
-   How fancy your resume looks

They test:

-   How do you think during failure
-   Whether you understand systems end-to-end
-   If you can debug under pressure
-   Whether you can design reliable systems

Everything in this roadmap supports that goal.

## Step 1: Networking Fundamentals (Non-Negotiable)

Every production issue eventually touches networking. If you skip this, you will struggle later.

You must be comfortable with:

-   OSI Model (all 7 layers, not just names)
-   TCP vs UDP
-   IP addressing (At least IPv4)
-   Subnetting and CIDR
-   Routing concepts
-   Switch vs Router
-   NAT and PAT
-   How DNS works and relevant terms (A, AAAA, CNAME, MX, TTL, Alias A, etc)
-   ARP
-   ICMP and ping
-   Load balancing basics (L4 vs L7)
-   Firewalls
-   Latency and packet loss

Interview reality: Many "application issues" are actually DNS, routing, or firewall problems.

## Step 2: Compute, Storage, and Databases (System Thinking)

Before touching cloud or containers, understand how systems work underneath.

### Compute

-   Bare metal vs virtual machines
-   Hypervisors
-   Cores vs Threads
-   Clock speed
-   CPU saturation

### Storage

-   Block storage (example: AWS EBS) vs file storage (example: AWS EFS) vs object storage (example: AWS S3)
-   IOPS vs throughput
-   Latency trade-offs
-   Local vs network-attached storage
-   Logical Volume Management (LVM)

### Databases

-   Relational vs NoSQL
-   Indexes and why they matter
-   Connection pooling
-   Read replicas
-   Backups and restores
-   Slow queries and locks (high level)

This knowledge helps you debug performance issues instead of guessing.

## Step 3: Linux Fundamentals (Your Core Weapon)

Linux is where SREs live. This is not optional.

You should be strong in:

### Core Concepts

-   Operating system basics
-   Kernel vs user space
-   Shell and terminal usage
-   Bash basics

### Daily Commands

-   ls, cd, cp, mv, rm, mkdir, touch, etc.
-   grep, awk, sed
-   find, xargs
-   ps, top, htop
-   df, du, free
-   netstat, ss, lsof
-   vim, nano, etc.

And, there is more as it's never ending.

### File System and Permissions

-   Linux directory structure
-   File permissions
-   chmod, chown, umask
-   SUID, SGID, Sticky Bit
-   User and group management

### Services and Packages

-   systemd basics
-   service lifecycle
-   yum and dnf
-   Installing and managing packages
-   processes

### Networking and Access

-   SSH and key-based auth
-   authorized_keys
-   known_hosts
-   SCP and rsync
-   HTTP vs HTTPS

### Practical Services

-   Basic Apache web server setup
-   MySQL installation and basic operations
-   Cron jobs
-   Log rotation basics

### Scripting:

Bash or Python (At least bash and, if possible, Python as well).

## Step 4: Performance and Troubleshooting Basics

This is where you start thinking like an SRE.

You should know how to investigate:

-   High CPU usage
-   Memory leaks
-   Disk full issues
-   Slow IO
-   Network latency
-   Zombie processes

Understand:

-   Load average
-   Swap usage
-   Kernel tuning basics
-   sysctl parameters (high level)

Interviewers love scenarios like this.

## Step 5: Cloud Fundamentals (AWS Focus)

Cloud is where modern SREs operate.

You must be strong with core AWS services:

### Compute

-   EC2 Instances — AMI, EBS Volumes, Security Groups, ENIs, Elastic IPs, Pricing models, Instance types, etc.
-   Auto Scaling Groups
-   Launch Templates
-   Lambda Functions — State machines (Step Functions)

### Networking & Content Delivery

-   VPC
-   Subnets
-   Route Tables
-   Internet Gateway
-   NAT Gateway
-   Transient Gateways
-   VPC Endpoints
-   Security Groups — implicit deny, explicit allow
-   NACLs
-   Stateless vs Stateful firewalls
-   Load Balancers (ALB, NLB)
-   API Gateways
-   CloudFront
-   Route53

### Storage

-   EBS
-   EFS
-   S3
-   Storage Gateways

### Databases

-   Aurora and RDS
-   DynamoDB (basic understanding)
-   ElastiCache

### Security, Identity & Compliance

-   IAM users, roles, policies, and permissions boundaries
-   STS
-   Least privilege
-   Secrets Manager
-   KMS
-   WAF

### Analytics:

-   Kinesis

### Application Integration:

-   Eventbridge
-   SNS
-   SQS
-   Step Functions

### Containers:

Note: Cover these only after you have learned the container and its orchestration (Kubernetes) fundamentals.

-   ECR
-   ECS
-   EKS

### Observability

-   CloudWatch Logs
-   CloudWatch Metrics and Alarms

You should know how traffic flows inside AWS. This is critical.

## Step 6: Containers and Docker

Containers simplify deployment but add new failure modes.

You must understand:

-   What containers actually are
-   Images vs containers
-   Dockerfile best practices
-   Image layers
-   Volumes
-   Networking modes
-   Resource limits

Be comfortable debugging:

-   Container crashes
-   Image build failures
-   Port issues
-   Permission issues

## Step 7: Kubernetes (Where SRE Interviews Get Serious)

This is a core SRE skill today.

You must understand:

-   Kubernetes architecture overview
-   API server, scheduler, controller manager, kube proxy, kubelet
-   etcd basics
-   Nodes and pods

### Core Objects and Concepts

-   Pods
-   Deployments
-   StatefulSets
-   Services
-   ConfigMaps
-   Secrets
-   Ingress
-   Secrets

And, there is more like PDBs, Admission Controllers, Kyverno, CRDs, Service Istio Mesh, Network policies, Priority Classes, DNS in K8s, Static Pods, Helm Charts, PV, PVCs, Storage Classes, Probes, RBAC, Taints & Tolerations, InitContainers, NodeSelector, NodeAffinity, Resource Quotas, Requests, and Limits, HPAs, Cluster Autoscaler, Cluster Upgrades.

I wish I could list all the topics (practically not possible as it's an endless technology), but these are some of them that you would need to learn.

### Troubleshooting

-   Pod not starting
-   CrashLoopBackOff
-   ImagePullBackOff
-   Pending pods
-   Node issues
-   Resource exhaustion
-   OOM Killed

Know how to:

-   Read logs
-   Describe resources
-   Trace failures across layers

## Step 8: CI/CD Pipelines (Real Production Flow)

SREs don't just deploy. They fix broken pipelines.

You should understand:

-   Git workflows
-   CI vs CD
-   Pipeline stages
-   Artifacts
-   Environment promotion

Hands-on with:

-   GitLab CI pipelines
-   Build failures
-   Test failures
-   Image push failures
-   Deployment rollbacks

## Step 9: Automation and Infrastructure as Code

Manual work does not scale.

Learn:

-   Bash scripting and/or Python for automation
-   Ansible for configuration management
-   Terraform for infrastructure provisioning

You must be able to:

-   Read Terraform plans
-   Debug failed applies
-   Handle state issues
-   Design reusable modules

## Step 10: GitOps and Continuous Delivery

You should understand:

-   GitOps principles
-   Declarative deployments
-   ArgoCD workflows
-   Drift detection
-   Rollbacks

This is frequently discussed in senior-level interviews.

## Step 11: Observability (Logs, Metrics, Alerts)

Observability separates juniors from real SREs.

You should know:

-   What to log and what not to log
-   Linux logging basics
-   CloudWatch logs and metrics
-   Prometheus metrics
-   Long-term metrics storage
-   Log aggregation
-   Dashboards and alerts

Understand alert fatigue and why alerts should wake people only when needed.

## Step 12: Reliability Engineering Concepts

This is pure SRE territory.

You must understand deeply:

-   SLA
-   SLI
-   SLO
-   Error budgets
-   Burn rate alerts

Know how to:

-   Define SLOs
-   Monitor them
-   Act when they are breached

Interviewers love real examples here.

## Step 13: Advanced Troubleshooting (End-to-End)

At this stage, you should be comfortable troubleshooting:

-   Kubernetes deployments
-   CI/CD pipelines
-   Terraform failures
-   Production outages
-   Partial service degradation

Always think:

-   Where is the failure?
-   What changed?
-   How do I confirm the hypothesis?

## Step 14: AI Tools and Prompt Engineering

This is no longer optional.

Learn how to:

-   Use AI tools for debugging
-   Write effective prompts
-   Validate AI output
-   Speed up investigations without blindly trusting

Used correctly, this boosts productivity massively.`,PS=`## Convert a Meeting from Video .mp4 to Audio with AI in Mac Terminal and Generating MoM's. 

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

> "Summarize the following meeting transcript into key decisions, action items, and important discussion points and generate a MoM for this."`,$S=`# Using Manga-Downloader on Mac

Go to site:
  [https://pkg.go.dev/github.com/elboletaire/manga-downloader#readme-installation](https://pkg.go.dev/github.com/elboletaire/manga-downloader#readme-installation)

## Download a Release

[https://github.com/elboletaire/manga-downloader/releases](https://github.com/elboletaire/manga-downloader/releases)

Check on the internet how to permanently download and run this.

## Use Mangadex Only to Download

[https://mangadex.org/](https://mangadex.org/)

Check flags on how to use CLI properly from the documentation.`,e1=`# DevOps Commands Cheat Sheet (With Real-World Examples)

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

💡 Why it matters: Every automation leaves behind readable, shareable context—no more "tribal knowledge."`,n1=`# How to Write Markdown .md Files in Your Code and Push It to GitHub Pages (Deployment)

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

to publish the changes to the GitHub repo (main branch) and it will automatically push the new build to the gh-pages branch (where you can check the deployment status).`,t1=`Terminal Tools For Mac OS and Linux
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

nyancat in action`,a1=`# ✏️ Start writing

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
    style="width:200px; height:200px; object-fit:cover; border-radius:10px; display:block; margin:10px 0;">`,l1=Object.assign({"/public/docs/10 Grep Commands for Linux Systems.md":HS,"/public/docs/5 Useful Linux and Mac Automationn Scripts.md":qS,"/public/docs/Download flac and convert to run on Mac and iPhone.md":jS,"/public/docs/Hacking Prevention.md":IS,"/public/docs/Interview Preperation.md":YS,"/public/docs/Linux Basic and Advanced Questions.md":GS,"/public/docs/Linux Commands.md":VS,"/public/docs/Linux Hacker Commands.md":XS,"/public/docs/Most Feared Linux Commands.md":QS,"/public/docs/Reflection Of My Tenure at Iskaan.md":FS,"/public/docs/Run Claude Code Local On Mac.md":WS,"/public/docs/SSH Auth.md":ZS,"/public/docs/Setting Up a Login Banner on Linux Server.md":KS,"/public/docs/Thinking Like an SRE.md":JS,"/public/docs/Transcribe and Generate MoM in Mac Terminal.md":PS,"/public/docs/Use Manga Downloader on Mac.md":$S,"/public/docs/devopsCommands.md":e1,"/public/docs/howTo.md":n1,"/public/docs/macAndLinuxTerminalTools.md":t1,"/public/docs/nginx.md":a1}),wc=Object.entries(l1).map(([a,i])=>{const r=a.split("/").pop().replace(".md",""),u=i.match(/^#\s+(.*)/)?.[1]??r.replace(/-/g," ");return{slug:r,title:u,content:i}});function i1(){return on.jsx("aside",{style:js.sidebar,children:wc.map(a=>on.jsx(Pp,{to:`/docs/${a.slug}`,style:({isActive:i})=>({...js.link,...i?js.active:{}}),children:a.title},a.slug))})}const js={sidebar:{width:260,padding:"1rem",background:"var(--sidebar-bg)",borderRight:"1px solid #e5e7eb"},link:{display:"block",padding:"1rem 1rem",borderRadius:8,textDecoration:"none",color:"var(--text)",marginBottom:4,borderBottom:"1px solid #ccc"},active:{background:"var(--active-bg)",color:"var(--active-text)",fontWeight:600}};function r1(a,i){const r={};return(a[a.length-1]===""?[...a,""]:a).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const u1=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,o1=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,s1={};function Zm(a,i){return(s1.jsx?o1:u1).test(a)}const c1=/[ \t\n\f\r]/g;function f1(a){return typeof a=="object"?a.type==="text"?Km(a.value):!1:Km(a)}function Km(a){return a.replace(c1,"")===""}class Oi{constructor(i,r,u){this.normal=r,this.property=i,u&&(this.space=u)}}Oi.prototype.normal={};Oi.prototype.property={};Oi.prototype.space=void 0;function ey(a,i){const r={},u={};for(const c of a)Object.assign(r,c.property),Object.assign(u,c.normal);return new Oi(r,u,i)}function ac(a){return a.toLowerCase()}class Dn{constructor(i,r){this.attribute=r,this.property=i}}Dn.prototype.attribute="";Dn.prototype.booleanish=!1;Dn.prototype.boolean=!1;Dn.prototype.commaOrSpaceSeparated=!1;Dn.prototype.commaSeparated=!1;Dn.prototype.defined=!1;Dn.prototype.mustUseProperty=!1;Dn.prototype.number=!1;Dn.prototype.overloadedBoolean=!1;Dn.prototype.property="";Dn.prototype.spaceSeparated=!1;Dn.prototype.space=void 0;let h1=0;const ve=za(),tn=za(),lc=za(),F=za(),Ie=za(),bl=za(),Hn=za();function za(){return 2**++h1}const ic=Object.freeze(Object.defineProperty({__proto__:null,boolean:ve,booleanish:tn,commaOrSpaceSeparated:Hn,commaSeparated:bl,number:F,overloadedBoolean:lc,spaceSeparated:Ie},Symbol.toStringTag,{value:"Module"})),Is=Object.keys(ic);class xc extends Dn{constructor(i,r,u,c){let f=-1;if(super(i,r),Jm(this,"space",c),typeof u=="number")for(;++f<Is.length;){const h=Is[f];Jm(this,Is[f],(u&ic[h])===ic[h])}}}xc.prototype.defined=!0;function Jm(a,i,r){r&&(a[i]=r)}function Tl(a){const i={},r={};for(const[u,c]of Object.entries(a.properties)){const f=new xc(u,a.transform(a.attributes||{},u),c,a.space);a.mustUseProperty&&a.mustUseProperty.includes(u)&&(f.mustUseProperty=!0),i[u]=f,r[ac(u)]=u,r[ac(f.attribute)]=u}return new Oi(i,r,a.space)}const ny=Tl({properties:{ariaActiveDescendant:null,ariaAtomic:tn,ariaAutoComplete:null,ariaBusy:tn,ariaChecked:tn,ariaColCount:F,ariaColIndex:F,ariaColSpan:F,ariaControls:Ie,ariaCurrent:null,ariaDescribedBy:Ie,ariaDetails:null,ariaDisabled:tn,ariaDropEffect:Ie,ariaErrorMessage:null,ariaExpanded:tn,ariaFlowTo:Ie,ariaGrabbed:tn,ariaHasPopup:null,ariaHidden:tn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ie,ariaLevel:F,ariaLive:null,ariaModal:tn,ariaMultiLine:tn,ariaMultiSelectable:tn,ariaOrientation:null,ariaOwns:Ie,ariaPlaceholder:null,ariaPosInSet:F,ariaPressed:tn,ariaReadOnly:tn,ariaRelevant:null,ariaRequired:tn,ariaRoleDescription:Ie,ariaRowCount:F,ariaRowIndex:F,ariaRowSpan:F,ariaSelected:tn,ariaSetSize:F,ariaSort:null,ariaValueMax:F,ariaValueMin:F,ariaValueNow:F,ariaValueText:null,role:null},transform(a,i){return i==="role"?i:"aria-"+i.slice(4).toLowerCase()}});function ty(a,i){return i in a?a[i]:i}function ay(a,i){return ty(a,i.toLowerCase())}const d1=Tl({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:bl,acceptCharset:Ie,accessKey:Ie,action:null,allow:null,allowFullScreen:ve,allowPaymentRequest:ve,allowUserMedia:ve,alt:null,as:null,async:ve,autoCapitalize:null,autoComplete:Ie,autoFocus:ve,autoPlay:ve,blocking:Ie,capture:null,charSet:null,checked:ve,cite:null,className:Ie,cols:F,colSpan:null,content:null,contentEditable:tn,controls:ve,controlsList:Ie,coords:F|bl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ve,defer:ve,dir:null,dirName:null,disabled:ve,download:lc,draggable:tn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ve,formTarget:null,headers:Ie,height:F,hidden:lc,high:F,href:null,hrefLang:null,htmlFor:Ie,httpEquiv:Ie,id:null,imageSizes:null,imageSrcSet:null,inert:ve,inputMode:null,integrity:null,is:null,isMap:ve,itemId:null,itemProp:Ie,itemRef:Ie,itemScope:ve,itemType:Ie,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ve,low:F,manifest:null,max:null,maxLength:F,media:null,method:null,min:null,minLength:F,multiple:ve,muted:ve,name:null,nonce:null,noModule:ve,noValidate:ve,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ve,optimum:F,pattern:null,ping:Ie,placeholder:null,playsInline:ve,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ve,referrerPolicy:null,rel:Ie,required:ve,reversed:ve,rows:F,rowSpan:F,sandbox:Ie,scope:null,scoped:ve,seamless:ve,selected:ve,shadowRootClonable:ve,shadowRootDelegatesFocus:ve,shadowRootMode:null,shape:null,size:F,sizes:null,slot:null,span:F,spellCheck:tn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:F,step:null,style:null,tabIndex:F,target:null,title:null,translate:null,type:null,typeMustMatch:ve,useMap:null,value:tn,width:F,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ie,axis:null,background:null,bgColor:null,border:F,borderColor:null,bottomMargin:F,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ve,declare:ve,event:null,face:null,frame:null,frameBorder:null,hSpace:F,leftMargin:F,link:null,longDesc:null,lowSrc:null,marginHeight:F,marginWidth:F,noResize:ve,noHref:ve,noShade:ve,noWrap:ve,object:null,profile:null,prompt:null,rev:null,rightMargin:F,rules:null,scheme:null,scrolling:tn,standby:null,summary:null,text:null,topMargin:F,valueType:null,version:null,vAlign:null,vLink:null,vSpace:F,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ve,disableRemotePlayback:ve,prefix:null,property:null,results:F,security:null,unselectable:null},space:"html",transform:ay}),m1=Tl({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Hn,accentHeight:F,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:F,amplitude:F,arabicForm:null,ascent:F,attributeName:null,attributeType:null,azimuth:F,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:F,by:null,calcMode:null,capHeight:F,className:Ie,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:F,diffuseConstant:F,direction:null,display:null,dur:null,divisor:F,dominantBaseline:null,download:ve,dx:null,dy:null,edgeMode:null,editable:null,elevation:F,enableBackground:null,end:null,event:null,exponent:F,externalResourcesRequired:null,fill:null,fillOpacity:F,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:bl,g2:bl,glyphName:bl,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:F,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:F,horizOriginX:F,horizOriginY:F,id:null,ideographic:F,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:F,k:F,k1:F,k2:F,k3:F,k4:F,kernelMatrix:Hn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:F,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:F,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:F,overlineThickness:F,paintOrder:null,panose1:null,path:null,pathLength:F,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ie,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:F,pointsAtY:F,pointsAtZ:F,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Hn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Hn,rev:Hn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Hn,requiredFeatures:Hn,requiredFonts:Hn,requiredFormats:Hn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:F,specularExponent:F,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:F,strikethroughThickness:F,string:null,stroke:null,strokeDashArray:Hn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:F,strokeOpacity:F,strokeWidth:null,style:null,surfaceScale:F,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Hn,tabIndex:F,tableValues:null,target:null,targetX:F,targetY:F,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Hn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:F,underlineThickness:F,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:F,values:null,vAlphabetic:F,vMathematical:F,vectorEffect:null,vHanging:F,vIdeographic:F,version:null,vertAdvY:F,vertOriginX:F,vertOriginY:F,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:F,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ty}),ly=Tl({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(a,i){return"xlink:"+i.slice(5).toLowerCase()}}),iy=Tl({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ay}),ry=Tl({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(a,i){return"xml:"+i.slice(3).toLowerCase()}}),p1={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},y1=/[A-Z]/g,Pm=/-[a-z]/g,g1=/^data[-\w.:]+$/i;function v1(a,i){const r=ac(i);let u=i,c=Dn;if(r in a.normal)return a.property[a.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&g1.test(i)){if(i.charAt(4)==="-"){const f=i.slice(5).replace(Pm,S1);u="data"+f.charAt(0).toUpperCase()+f.slice(1)}else{const f=i.slice(4);if(!Pm.test(f)){let h=f.replace(y1,b1);h.charAt(0)!=="-"&&(h="-"+h),i="data"+h}}c=xc}return new c(u,i)}function b1(a){return"-"+a.toLowerCase()}function S1(a){return a.charAt(1).toUpperCase()}const w1=ey([ny,d1,ly,iy,ry],"html"),Tc=ey([ny,m1,ly,iy,ry],"svg");function x1(a){return a.join(" ").trim()}var gl={},Ys,$m;function T1(){if($m)return Ys;$m=1;var a=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,i=/\n/g,r=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,c=/^:\s*/,f=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,h=/^[;\s]*/,p=/^\s+|\s+$/g,y=`
`,m="/",g="*",v="",x="comment",S="declaration";function U(B,O){if(typeof B!="string")throw new TypeError("First argument must be a string");if(!B)return[];O=O||{};var X=1,V=1;function re(ae){var W=ae.match(i);W&&(X+=W.length);var M=ae.lastIndexOf(y);V=~M?ae.length-M:V+ae.length}function ue(){var ae={line:X,column:V};return function(W){return W.position=new H(ae),fe(),W}}function H(ae){this.start=ae,this.end={line:X,column:V},this.source=O.source}H.prototype.content=B;function K(ae){var W=new Error(O.source+":"+X+":"+V+": "+ae);if(W.reason=ae,W.filename=O.source,W.line=X,W.column=V,W.source=B,!O.silent)throw W}function ce(ae){var W=ae.exec(B);if(W){var M=W[0];return re(M),B=B.slice(M.length),W}}function fe(){ce(r)}function ye(ae){var W;for(ae=ae||[];W=ee();)W!==!1&&ae.push(W);return ae}function ee(){var ae=ue();if(!(m!=B.charAt(0)||g!=B.charAt(1))){for(var W=2;v!=B.charAt(W)&&(g!=B.charAt(W)||m!=B.charAt(W+1));)++W;if(W+=2,v===B.charAt(W-1))return K("End of comment missing");var M=B.slice(2,W-2);return V+=2,re(M),B=B.slice(W),V+=2,ae({type:x,comment:M})}}function P(){var ae=ue(),W=ce(u);if(W){if(ee(),!ce(c))return K("property missing ':'");var M=ce(f),Q=ae({type:S,property:L(W[0].replace(a,v)),value:M?L(M[0].replace(a,v)):v});return ce(h),Q}}function Ae(){var ae=[];ye(ae);for(var W;W=P();)W!==!1&&(ae.push(W),ye(ae));return ae}return fe(),Ae()}function L(B){return B?B.replace(p,v):v}return Ys=U,Ys}var ep;function k1(){if(ep)return gl;ep=1;var a=gl&&gl.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(gl,"__esModule",{value:!0}),gl.default=r;const i=a(T1());function r(u,c){let f=null;if(!u||typeof u!="string")return f;const h=(0,i.default)(u),p=typeof c=="function";return h.forEach(y=>{if(y.type!=="declaration")return;const{property:m,value:g}=y;p?c(m,g,y):g&&(f=f||{},f[m]=g)}),f}return gl}var wi={},np;function E1(){if(np)return wi;np=1,Object.defineProperty(wi,"__esModule",{value:!0}),wi.camelCase=void 0;var a=/^--[a-zA-Z0-9_-]+$/,i=/-([a-z])/g,r=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,c=/^-(ms)-/,f=function(m){return!m||r.test(m)||a.test(m)},h=function(m,g){return g.toUpperCase()},p=function(m,g){return"".concat(g,"-")},y=function(m,g){return g===void 0&&(g={}),f(m)?m:(m=m.toLowerCase(),g.reactCompat?m=m.replace(c,p):m=m.replace(u,p),m.replace(i,h))};return wi.camelCase=y,wi}var xi,tp;function C1(){if(tp)return xi;tp=1;var a=xi&&xi.__importDefault||function(c){return c&&c.__esModule?c:{default:c}},i=a(k1()),r=E1();function u(c,f){var h={};return!c||typeof c!="string"||(0,i.default)(c,function(p,y){p&&y&&(h[(0,r.camelCase)(p,f)]=y)}),h}return u.default=u,xi=u,xi}var A1=C1();const z1=su(A1),uy=oy("end"),kc=oy("start");function oy(a){return i;function i(r){const u=r&&r.position&&r.position[a]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function D1(a){const i=kc(a),r=uy(a);if(i&&r)return{start:i,end:r}}function Ei(a){return!a||typeof a!="object"?"":"position"in a||"type"in a?ap(a.position):"start"in a||"end"in a?ap(a):"line"in a||"column"in a?rc(a):""}function rc(a){return lp(a&&a.line)+":"+lp(a&&a.column)}function ap(a){return rc(a&&a.start)+"-"+rc(a&&a.end)}function lp(a){return a&&typeof a=="number"?a:1}class pn extends Error{constructor(i,r,u){super(),typeof r=="string"&&(u=r,r=void 0);let c="",f={},h=!1;if(r&&("line"in r&&"column"in r?f={place:r}:"start"in r&&"end"in r?f={place:r}:"type"in r?f={ancestors:[r],place:r.position}:f={...r}),typeof i=="string"?c=i:!f.cause&&i&&(h=!0,c=i.message,f.cause=i),!f.ruleId&&!f.source&&typeof u=="string"){const y=u.indexOf(":");y===-1?f.ruleId=u:(f.source=u.slice(0,y),f.ruleId=u.slice(y+1))}if(!f.place&&f.ancestors&&f.ancestors){const y=f.ancestors[f.ancestors.length-1];y&&(f.place=y.position)}const p=f.place&&"start"in f.place?f.place.start:f.place;this.ancestors=f.ancestors||void 0,this.cause=f.cause||void 0,this.column=p?p.column:void 0,this.fatal=void 0,this.file="",this.message=c,this.line=p?p.line:void 0,this.name=Ei(f.place)||"1:1",this.place=f.place||void 0,this.reason=this.message,this.ruleId=f.ruleId||void 0,this.source=f.source||void 0,this.stack=h&&f.cause&&typeof f.cause.stack=="string"?f.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}pn.prototype.file="";pn.prototype.name="";pn.prototype.reason="";pn.prototype.message="";pn.prototype.stack="";pn.prototype.column=void 0;pn.prototype.line=void 0;pn.prototype.ancestors=void 0;pn.prototype.cause=void 0;pn.prototype.fatal=void 0;pn.prototype.place=void 0;pn.prototype.ruleId=void 0;pn.prototype.source=void 0;const Ec={}.hasOwnProperty,R1=new Map,M1=/[A-Z]/g,O1=new Set(["table","tbody","thead","tfoot","tr"]),_1=new Set(["td","th"]),sy="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function L1(a,i){if(!i||i.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=i.filePath||void 0;let u;if(i.development){if(typeof i.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=Y1(r,i.jsxDEV)}else{if(typeof i.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof i.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=I1(r,i.jsx,i.jsxs)}const c={Fragment:i.Fragment,ancestors:[],components:i.components||{},create:u,elementAttributeNameCase:i.elementAttributeNameCase||"react",evaluater:i.createEvaluater?i.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:i.ignoreInvalidStyle||!1,passKeys:i.passKeys!==!1,passNode:i.passNode||!1,schema:i.space==="svg"?Tc:w1,stylePropertyNameCase:i.stylePropertyNameCase||"dom",tableCellAlignToStyle:i.tableCellAlignToStyle!==!1},f=cy(c,a,void 0);return f&&typeof f!="string"?f:c.create(a,c.Fragment,{children:f||void 0},void 0)}function cy(a,i,r){if(i.type==="element")return N1(a,i,r);if(i.type==="mdxFlowExpression"||i.type==="mdxTextExpression")return U1(a,i);if(i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement")return H1(a,i,r);if(i.type==="mdxjsEsm")return B1(a,i);if(i.type==="root")return q1(a,i,r);if(i.type==="text")return j1(a,i)}function N1(a,i,r){const u=a.schema;let c=u;i.tagName.toLowerCase()==="svg"&&u.space==="html"&&(c=Tc,a.schema=c),a.ancestors.push(i);const f=hy(a,i.tagName,!1),h=G1(a,i);let p=Ac(a,i);return O1.has(i.tagName)&&(p=p.filter(function(y){return typeof y=="string"?!f1(y):!0})),fy(a,h,f,i),Cc(h,p),a.ancestors.pop(),a.schema=u,a.create(i,f,h,r)}function U1(a,i){if(i.data&&i.data.estree&&a.evaluater){const u=i.data.estree.body[0];return u.type,a.evaluater.evaluateExpression(u.expression)}Di(a,i.position)}function B1(a,i){if(i.data&&i.data.estree&&a.evaluater)return a.evaluater.evaluateProgram(i.data.estree);Di(a,i.position)}function H1(a,i,r){const u=a.schema;let c=u;i.name==="svg"&&u.space==="html"&&(c=Tc,a.schema=c),a.ancestors.push(i);const f=i.name===null?a.Fragment:hy(a,i.name,!0),h=V1(a,i),p=Ac(a,i);return fy(a,h,f,i),Cc(h,p),a.ancestors.pop(),a.schema=u,a.create(i,f,h,r)}function q1(a,i,r){const u={};return Cc(u,Ac(a,i)),a.create(i,a.Fragment,u,r)}function j1(a,i){return i.value}function fy(a,i,r,u){typeof r!="string"&&r!==a.Fragment&&a.passNode&&(i.node=u)}function Cc(a,i){if(i.length>0){const r=i.length>1?i:i[0];r&&(a.children=r)}}function I1(a,i,r){return u;function u(c,f,h,p){const m=Array.isArray(h.children)?r:i;return p?m(f,h,p):m(f,h)}}function Y1(a,i){return r;function r(u,c,f,h){const p=Array.isArray(f.children),y=kc(u);return i(c,f,h,p,{columnNumber:y?y.column-1:void 0,fileName:a,lineNumber:y?y.line:void 0},void 0)}}function G1(a,i){const r={};let u,c;for(c in i.properties)if(c!=="children"&&Ec.call(i.properties,c)){const f=X1(a,c,i.properties[c]);if(f){const[h,p]=f;a.tableCellAlignToStyle&&h==="align"&&typeof p=="string"&&_1.has(i.tagName)?u=p:r[h]=p}}if(u){const f=r.style||(r.style={});f[a.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return r}function V1(a,i){const r={};for(const u of i.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&a.evaluater){const f=u.data.estree.body[0];f.type;const h=f.expression;h.type;const p=h.properties[0];p.type,Object.assign(r,a.evaluater.evaluateExpression(p.argument))}else Di(a,i.position);else{const c=u.name;let f;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&a.evaluater){const p=u.value.data.estree.body[0];p.type,f=a.evaluater.evaluateExpression(p.expression)}else Di(a,i.position);else f=u.value===null?!0:u.value;r[c]=f}return r}function Ac(a,i){const r=[];let u=-1;const c=a.passKeys?new Map:R1;for(;++u<i.children.length;){const f=i.children[u];let h;if(a.passKeys){const y=f.type==="element"?f.tagName:f.type==="mdxJsxFlowElement"||f.type==="mdxJsxTextElement"?f.name:void 0;if(y){const m=c.get(y)||0;h=y+"-"+m,c.set(y,m+1)}}const p=cy(a,f,h);p!==void 0&&r.push(p)}return r}function X1(a,i,r){const u=v1(a.schema,i);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=u.commaSeparated?r1(r):x1(r)),u.property==="style"){let c=typeof r=="object"?r:Q1(a,String(r));return a.stylePropertyNameCase==="css"&&(c=F1(c)),["style",c]}return[a.elementAttributeNameCase==="react"&&u.space?p1[u.property]||u.property:u.attribute,r]}}function Q1(a,i){try{return z1(i,{reactCompat:!0})}catch(r){if(a.ignoreInvalidStyle)return{};const u=r,c=new pn("Cannot parse `style` attribute",{ancestors:a.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw c.file=a.filePath||void 0,c.url=sy+"#cannot-parse-style-attribute",c}}function hy(a,i,r){let u;if(!r)u={type:"Literal",value:i};else if(i.includes(".")){const c=i.split(".");let f=-1,h;for(;++f<c.length;){const p=Zm(c[f])?{type:"Identifier",name:c[f]}:{type:"Literal",value:c[f]};h=h?{type:"MemberExpression",object:h,property:p,computed:!!(f&&p.type==="Literal"),optional:!1}:p}u=h}else u=Zm(i)&&!/^[a-z]/.test(i)?{type:"Identifier",name:i}:{type:"Literal",value:i};if(u.type==="Literal"){const c=u.value;return Ec.call(a.components,c)?a.components[c]:c}if(a.evaluater)return a.evaluater.evaluateExpression(u);Di(a)}function Di(a,i){const r=new pn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:a.ancestors,place:i,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=a.filePath||void 0,r.url=sy+"#cannot-handle-mdx-estrees-without-createevaluater",r}function F1(a){const i={};let r;for(r in a)Ec.call(a,r)&&(i[W1(r)]=a[r]);return i}function W1(a){let i=a.replace(M1,Z1);return i.slice(0,3)==="ms-"&&(i="-"+i),i}function Z1(a){return"-"+a.toLowerCase()}const Gs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},K1={};function J1(a,i){const r=K1,u=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,c=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return dy(a,u,c)}function dy(a,i,r){if(P1(a)){if("value"in a)return a.type==="html"&&!r?"":a.value;if(i&&"alt"in a&&a.alt)return a.alt;if("children"in a)return ip(a.children,i,r)}return Array.isArray(a)?ip(a,i,r):""}function ip(a,i,r){const u=[];let c=-1;for(;++c<a.length;)u[c]=dy(a[c],i,r);return u.join("")}function P1(a){return!!(a&&typeof a=="object")}const rp=document.createElement("i");function zc(a){const i="&"+a+";";rp.innerHTML=i;const r=rp.textContent;return r.charCodeAt(r.length-1)===59&&a!=="semi"||r===i?!1:r}function ft(a,i,r,u){const c=a.length;let f=0,h;if(i<0?i=-i>c?0:c+i:i=i>c?c:i,r=r>0?r:0,u.length<1e4)h=Array.from(u),h.unshift(i,r),a.splice(...h);else for(r&&a.splice(i,r);f<u.length;)h=u.slice(f,f+1e4),h.unshift(i,0),a.splice(...h),f+=1e4,i+=1e4}function $n(a,i){return a.length>0?(ft(a,a.length,0,i),a):i}const up={}.hasOwnProperty;function $1(a){const i={};let r=-1;for(;++r<a.length;)e0(i,a[r]);return i}function e0(a,i){let r;for(r in i){const c=(up.call(a,r)?a[r]:void 0)||(a[r]={}),f=i[r];let h;if(f)for(h in f){up.call(c,h)||(c[h]=[]);const p=f[h];n0(c[h],Array.isArray(p)?p:p?[p]:[])}}}function n0(a,i){let r=-1;const u=[];for(;++r<i.length;)(i[r].add==="after"?a:u).push(i[r]);ft(a,0,0,u)}function my(a,i){const r=Number.parseInt(a,i);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function Sl(a){return a.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ct=oa(/[A-Za-z]/),qn=oa(/[\dA-Za-z]/),t0=oa(/[#-'*+\--9=?A-Z^-~]/);function uc(a){return a!==null&&(a<32||a===127)}const oc=oa(/\d/),a0=oa(/[\dA-Fa-f]/),l0=oa(/[!-/:-@[-`{-~]/);function de(a){return a!==null&&a<-2}function zn(a){return a!==null&&(a<0||a===32)}function Me(a){return a===-2||a===-1||a===32}const i0=oa(new RegExp("\\p{P}|\\p{S}","u")),r0=oa(/\s/);function oa(a){return i;function i(r){return r!==null&&r>-1&&a.test(String.fromCharCode(r))}}function kl(a){const i=[];let r=-1,u=0,c=0;for(;++r<a.length;){const f=a.charCodeAt(r);let h="";if(f===37&&qn(a.charCodeAt(r+1))&&qn(a.charCodeAt(r+2)))c=2;else if(f<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f))||(h=String.fromCharCode(f));else if(f>55295&&f<57344){const p=a.charCodeAt(r+1);f<56320&&p>56319&&p<57344?(h=String.fromCharCode(f,p),c=1):h="�"}else h=String.fromCharCode(f);h&&(i.push(a.slice(u,r),encodeURIComponent(h)),u=r+c+1,h=""),c&&(r+=c,c=0)}return i.join("")+a.slice(u)}function Ye(a,i,r,u){const c=u?u-1:Number.POSITIVE_INFINITY;let f=0;return h;function h(y){return Me(y)?(a.enter(r),p(y)):i(y)}function p(y){return Me(y)&&f++<c?(a.consume(y),p):(a.exit(r),i(y))}}const u0={tokenize:o0};function o0(a){const i=a.attempt(this.parser.constructs.contentInitial,u,c);let r;return i;function u(p){if(p===null){a.consume(p);return}return a.enter("lineEnding"),a.consume(p),a.exit("lineEnding"),Ye(a,i,"linePrefix")}function c(p){return a.enter("paragraph"),f(p)}function f(p){const y=a.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=y),r=y,h(p)}function h(p){if(p===null){a.exit("chunkText"),a.exit("paragraph"),a.consume(p);return}return de(p)?(a.consume(p),a.exit("chunkText"),f):(a.consume(p),h)}}const s0={tokenize:c0},op={tokenize:f0};function c0(a){const i=this,r=[];let u=0,c,f,h;return p;function p(V){if(u<r.length){const re=r[u];return i.containerState=re[1],a.attempt(re[0].continuation,y,m)(V)}return m(V)}function y(V){if(u++,i.containerState._closeFlow){i.containerState._closeFlow=void 0,c&&X();const re=i.events.length;let ue=re,H;for(;ue--;)if(i.events[ue][0]==="exit"&&i.events[ue][1].type==="chunkFlow"){H=i.events[ue][1].end;break}O(u);let K=re;for(;K<i.events.length;)i.events[K][1].end={...H},K++;return ft(i.events,ue+1,0,i.events.slice(re)),i.events.length=K,m(V)}return p(V)}function m(V){if(u===r.length){if(!c)return x(V);if(c.currentConstruct&&c.currentConstruct.concrete)return U(V);i.interrupt=!!(c.currentConstruct&&!c._gfmTableDynamicInterruptHack)}return i.containerState={},a.check(op,g,v)(V)}function g(V){return c&&X(),O(u),x(V)}function v(V){return i.parser.lazy[i.now().line]=u!==r.length,h=i.now().offset,U(V)}function x(V){return i.containerState={},a.attempt(op,S,U)(V)}function S(V){return u++,r.push([i.currentConstruct,i.containerState]),x(V)}function U(V){if(V===null){c&&X(),O(0),a.consume(V);return}return c=c||i.parser.flow(i.now()),a.enter("chunkFlow",{_tokenizer:c,contentType:"flow",previous:f}),L(V)}function L(V){if(V===null){B(a.exit("chunkFlow"),!0),O(0),a.consume(V);return}return de(V)?(a.consume(V),B(a.exit("chunkFlow")),u=0,i.interrupt=void 0,p):(a.consume(V),L)}function B(V,re){const ue=i.sliceStream(V);if(re&&ue.push(null),V.previous=f,f&&(f.next=V),f=V,c.defineSkip(V.start),c.write(ue),i.parser.lazy[V.start.line]){let H=c.events.length;for(;H--;)if(c.events[H][1].start.offset<h&&(!c.events[H][1].end||c.events[H][1].end.offset>h))return;const K=i.events.length;let ce=K,fe,ye;for(;ce--;)if(i.events[ce][0]==="exit"&&i.events[ce][1].type==="chunkFlow"){if(fe){ye=i.events[ce][1].end;break}fe=!0}for(O(u),H=K;H<i.events.length;)i.events[H][1].end={...ye},H++;ft(i.events,ce+1,0,i.events.slice(K)),i.events.length=H}}function O(V){let re=r.length;for(;re-- >V;){const ue=r[re];i.containerState=ue[1],ue[0].exit.call(i,a)}r.length=V}function X(){c.write([null]),f=void 0,c=void 0,i.containerState._closeFlow=void 0}}function f0(a,i,r){return Ye(a,a.attempt(this.parser.constructs.document,i,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function sp(a){if(a===null||zn(a)||r0(a))return 1;if(i0(a))return 2}function Dc(a,i,r){const u=[];let c=-1;for(;++c<a.length;){const f=a[c].resolveAll;f&&!u.includes(f)&&(i=f(i,r),u.push(f))}return i}const sc={name:"attention",resolveAll:h0,tokenize:d0};function h0(a,i){let r=-1,u,c,f,h,p,y,m,g;for(;++r<a.length;)if(a[r][0]==="enter"&&a[r][1].type==="attentionSequence"&&a[r][1]._close){for(u=r;u--;)if(a[u][0]==="exit"&&a[u][1].type==="attentionSequence"&&a[u][1]._open&&i.sliceSerialize(a[u][1]).charCodeAt(0)===i.sliceSerialize(a[r][1]).charCodeAt(0)){if((a[u][1]._close||a[r][1]._open)&&(a[r][1].end.offset-a[r][1].start.offset)%3&&!((a[u][1].end.offset-a[u][1].start.offset+a[r][1].end.offset-a[r][1].start.offset)%3))continue;y=a[u][1].end.offset-a[u][1].start.offset>1&&a[r][1].end.offset-a[r][1].start.offset>1?2:1;const v={...a[u][1].end},x={...a[r][1].start};cp(v,-y),cp(x,y),h={type:y>1?"strongSequence":"emphasisSequence",start:v,end:{...a[u][1].end}},p={type:y>1?"strongSequence":"emphasisSequence",start:{...a[r][1].start},end:x},f={type:y>1?"strongText":"emphasisText",start:{...a[u][1].end},end:{...a[r][1].start}},c={type:y>1?"strong":"emphasis",start:{...h.start},end:{...p.end}},a[u][1].end={...h.start},a[r][1].start={...p.end},m=[],a[u][1].end.offset-a[u][1].start.offset&&(m=$n(m,[["enter",a[u][1],i],["exit",a[u][1],i]])),m=$n(m,[["enter",c,i],["enter",h,i],["exit",h,i],["enter",f,i]]),m=$n(m,Dc(i.parser.constructs.insideSpan.null,a.slice(u+1,r),i)),m=$n(m,[["exit",f,i],["enter",p,i],["exit",p,i],["exit",c,i]]),a[r][1].end.offset-a[r][1].start.offset?(g=2,m=$n(m,[["enter",a[r][1],i],["exit",a[r][1],i]])):g=0,ft(a,u-1,r-u+3,m),r=u+m.length-g-2;break}}for(r=-1;++r<a.length;)a[r][1].type==="attentionSequence"&&(a[r][1].type="data");return a}function d0(a,i){const r=this.parser.constructs.attentionMarkers.null,u=this.previous,c=sp(u);let f;return h;function h(y){return f=y,a.enter("attentionSequence"),p(y)}function p(y){if(y===f)return a.consume(y),p;const m=a.exit("attentionSequence"),g=sp(y),v=!g||g===2&&c||r.includes(y),x=!c||c===2&&g||r.includes(u);return m._open=!!(f===42?v:v&&(c||!x)),m._close=!!(f===42?x:x&&(g||!v)),i(y)}}function cp(a,i){a.column+=i,a.offset+=i,a._bufferIndex+=i}const m0={name:"autolink",tokenize:p0};function p0(a,i,r){let u=0;return c;function c(S){return a.enter("autolink"),a.enter("autolinkMarker"),a.consume(S),a.exit("autolinkMarker"),a.enter("autolinkProtocol"),f}function f(S){return ct(S)?(a.consume(S),h):S===64?r(S):m(S)}function h(S){return S===43||S===45||S===46||qn(S)?(u=1,p(S)):m(S)}function p(S){return S===58?(a.consume(S),u=0,y):(S===43||S===45||S===46||qn(S))&&u++<32?(a.consume(S),p):(u=0,m(S))}function y(S){return S===62?(a.exit("autolinkProtocol"),a.enter("autolinkMarker"),a.consume(S),a.exit("autolinkMarker"),a.exit("autolink"),i):S===null||S===32||S===60||uc(S)?r(S):(a.consume(S),y)}function m(S){return S===64?(a.consume(S),g):t0(S)?(a.consume(S),m):r(S)}function g(S){return qn(S)?v(S):r(S)}function v(S){return S===46?(a.consume(S),u=0,g):S===62?(a.exit("autolinkProtocol").type="autolinkEmail",a.enter("autolinkMarker"),a.consume(S),a.exit("autolinkMarker"),a.exit("autolink"),i):x(S)}function x(S){if((S===45||qn(S))&&u++<63){const U=S===45?x:v;return a.consume(S),U}return r(S)}}const hu={partial:!0,tokenize:y0};function y0(a,i,r){return u;function u(f){return Me(f)?Ye(a,c,"linePrefix")(f):c(f)}function c(f){return f===null||de(f)?i(f):r(f)}}const py={continuation:{tokenize:v0},exit:b0,name:"blockQuote",tokenize:g0};function g0(a,i,r){const u=this;return c;function c(h){if(h===62){const p=u.containerState;return p.open||(a.enter("blockQuote",{_container:!0}),p.open=!0),a.enter("blockQuotePrefix"),a.enter("blockQuoteMarker"),a.consume(h),a.exit("blockQuoteMarker"),f}return r(h)}function f(h){return Me(h)?(a.enter("blockQuotePrefixWhitespace"),a.consume(h),a.exit("blockQuotePrefixWhitespace"),a.exit("blockQuotePrefix"),i):(a.exit("blockQuotePrefix"),i(h))}}function v0(a,i,r){const u=this;return c;function c(h){return Me(h)?Ye(a,f,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):f(h)}function f(h){return a.attempt(py,i,r)(h)}}function b0(a){a.exit("blockQuote")}const yy={name:"characterEscape",tokenize:S0};function S0(a,i,r){return u;function u(f){return a.enter("characterEscape"),a.enter("escapeMarker"),a.consume(f),a.exit("escapeMarker"),c}function c(f){return l0(f)?(a.enter("characterEscapeValue"),a.consume(f),a.exit("characterEscapeValue"),a.exit("characterEscape"),i):r(f)}}const gy={name:"characterReference",tokenize:w0};function w0(a,i,r){const u=this;let c=0,f,h;return p;function p(v){return a.enter("characterReference"),a.enter("characterReferenceMarker"),a.consume(v),a.exit("characterReferenceMarker"),y}function y(v){return v===35?(a.enter("characterReferenceMarkerNumeric"),a.consume(v),a.exit("characterReferenceMarkerNumeric"),m):(a.enter("characterReferenceValue"),f=31,h=qn,g(v))}function m(v){return v===88||v===120?(a.enter("characterReferenceMarkerHexadecimal"),a.consume(v),a.exit("characterReferenceMarkerHexadecimal"),a.enter("characterReferenceValue"),f=6,h=a0,g):(a.enter("characterReferenceValue"),f=7,h=oc,g(v))}function g(v){if(v===59&&c){const x=a.exit("characterReferenceValue");return h===qn&&!zc(u.sliceSerialize(x))?r(v):(a.enter("characterReferenceMarker"),a.consume(v),a.exit("characterReferenceMarker"),a.exit("characterReference"),i)}return h(v)&&c++<f?(a.consume(v),g):r(v)}}const fp={partial:!0,tokenize:T0},hp={concrete:!0,name:"codeFenced",tokenize:x0};function x0(a,i,r){const u=this,c={partial:!0,tokenize:ue};let f=0,h=0,p;return y;function y(H){return m(H)}function m(H){const K=u.events[u.events.length-1];return f=K&&K[1].type==="linePrefix"?K[2].sliceSerialize(K[1],!0).length:0,p=H,a.enter("codeFenced"),a.enter("codeFencedFence"),a.enter("codeFencedFenceSequence"),g(H)}function g(H){return H===p?(h++,a.consume(H),g):h<3?r(H):(a.exit("codeFencedFenceSequence"),Me(H)?Ye(a,v,"whitespace")(H):v(H))}function v(H){return H===null||de(H)?(a.exit("codeFencedFence"),u.interrupt?i(H):a.check(fp,L,re)(H)):(a.enter("codeFencedFenceInfo"),a.enter("chunkString",{contentType:"string"}),x(H))}function x(H){return H===null||de(H)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),v(H)):Me(H)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),Ye(a,S,"whitespace")(H)):H===96&&H===p?r(H):(a.consume(H),x)}function S(H){return H===null||de(H)?v(H):(a.enter("codeFencedFenceMeta"),a.enter("chunkString",{contentType:"string"}),U(H))}function U(H){return H===null||de(H)?(a.exit("chunkString"),a.exit("codeFencedFenceMeta"),v(H)):H===96&&H===p?r(H):(a.consume(H),U)}function L(H){return a.attempt(c,re,B)(H)}function B(H){return a.enter("lineEnding"),a.consume(H),a.exit("lineEnding"),O}function O(H){return f>0&&Me(H)?Ye(a,X,"linePrefix",f+1)(H):X(H)}function X(H){return H===null||de(H)?a.check(fp,L,re)(H):(a.enter("codeFlowValue"),V(H))}function V(H){return H===null||de(H)?(a.exit("codeFlowValue"),X(H)):(a.consume(H),V)}function re(H){return a.exit("codeFenced"),i(H)}function ue(H,K,ce){let fe=0;return ye;function ye(W){return H.enter("lineEnding"),H.consume(W),H.exit("lineEnding"),ee}function ee(W){return H.enter("codeFencedFence"),Me(W)?Ye(H,P,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(W):P(W)}function P(W){return W===p?(H.enter("codeFencedFenceSequence"),Ae(W)):ce(W)}function Ae(W){return W===p?(fe++,H.consume(W),Ae):fe>=h?(H.exit("codeFencedFenceSequence"),Me(W)?Ye(H,ae,"whitespace")(W):ae(W)):ce(W)}function ae(W){return W===null||de(W)?(H.exit("codeFencedFence"),K(W)):ce(W)}}}function T0(a,i,r){const u=this;return c;function c(h){return h===null?r(h):(a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),f)}function f(h){return u.parser.lazy[u.now().line]?r(h):i(h)}}const Vs={name:"codeIndented",tokenize:E0},k0={partial:!0,tokenize:C0};function E0(a,i,r){const u=this;return c;function c(m){return a.enter("codeIndented"),Ye(a,f,"linePrefix",5)(m)}function f(m){const g=u.events[u.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?h(m):r(m)}function h(m){return m===null?y(m):de(m)?a.attempt(k0,h,y)(m):(a.enter("codeFlowValue"),p(m))}function p(m){return m===null||de(m)?(a.exit("codeFlowValue"),h(m)):(a.consume(m),p)}function y(m){return a.exit("codeIndented"),i(m)}}function C0(a,i,r){const u=this;return c;function c(h){return u.parser.lazy[u.now().line]?r(h):de(h)?(a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),c):Ye(a,f,"linePrefix",5)(h)}function f(h){const p=u.events[u.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?i(h):de(h)?c(h):r(h)}}const A0={name:"codeText",previous:D0,resolve:z0,tokenize:R0};function z0(a){let i=a.length-4,r=3,u,c;if((a[r][1].type==="lineEnding"||a[r][1].type==="space")&&(a[i][1].type==="lineEnding"||a[i][1].type==="space")){for(u=r;++u<i;)if(a[u][1].type==="codeTextData"){a[r][1].type="codeTextPadding",a[i][1].type="codeTextPadding",r+=2,i-=2;break}}for(u=r-1,i++;++u<=i;)c===void 0?u!==i&&a[u][1].type!=="lineEnding"&&(c=u):(u===i||a[u][1].type==="lineEnding")&&(a[c][1].type="codeTextData",u!==c+2&&(a[c][1].end=a[u-1][1].end,a.splice(c+2,u-c-2),i-=u-c-2,u=c+2),c=void 0);return a}function D0(a){return a!==96||this.events[this.events.length-1][1].type==="characterEscape"}function R0(a,i,r){let u=0,c,f;return h;function h(v){return a.enter("codeText"),a.enter("codeTextSequence"),p(v)}function p(v){return v===96?(a.consume(v),u++,p):(a.exit("codeTextSequence"),y(v))}function y(v){return v===null?r(v):v===32?(a.enter("space"),a.consume(v),a.exit("space"),y):v===96?(f=a.enter("codeTextSequence"),c=0,g(v)):de(v)?(a.enter("lineEnding"),a.consume(v),a.exit("lineEnding"),y):(a.enter("codeTextData"),m(v))}function m(v){return v===null||v===32||v===96||de(v)?(a.exit("codeTextData"),y(v)):(a.consume(v),m)}function g(v){return v===96?(a.consume(v),c++,g):c===u?(a.exit("codeTextSequence"),a.exit("codeText"),i(v)):(f.type="codeTextData",m(v))}}class M0{constructor(i){this.left=i?[...i]:[],this.right=[]}get(i){if(i<0||i>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+i+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return i<this.left.length?this.left[i]:this.right[this.right.length-i+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(i,r){const u=r??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(i,u):i>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-i+this.left.length).reverse():this.left.slice(i).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(i,r,u){const c=r||0;this.setCursor(Math.trunc(i));const f=this.right.splice(this.right.length-c,Number.POSITIVE_INFINITY);return u&&Ti(this.left,u),f.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(i){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(i)}pushMany(i){this.setCursor(Number.POSITIVE_INFINITY),Ti(this.left,i)}unshift(i){this.setCursor(0),this.right.push(i)}unshiftMany(i){this.setCursor(0),Ti(this.right,i.reverse())}setCursor(i){if(!(i===this.left.length||i>this.left.length&&this.right.length===0||i<0&&this.left.length===0))if(i<this.left.length){const r=this.left.splice(i,Number.POSITIVE_INFINITY);Ti(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-i,Number.POSITIVE_INFINITY);Ti(this.left,r.reverse())}}}function Ti(a,i){let r=0;if(i.length<1e4)a.push(...i);else for(;r<i.length;)a.push(...i.slice(r,r+1e4)),r+=1e4}function vy(a){const i={};let r=-1,u,c,f,h,p,y,m;const g=new M0(a);for(;++r<g.length;){for(;r in i;)r=i[r];if(u=g.get(r),r&&u[1].type==="chunkFlow"&&g.get(r-1)[1].type==="listItemPrefix"&&(y=u[1]._tokenizer.events,f=0,f<y.length&&y[f][1].type==="lineEndingBlank"&&(f+=2),f<y.length&&y[f][1].type==="content"))for(;++f<y.length&&y[f][1].type!=="content";)y[f][1].type==="chunkText"&&(y[f][1]._isInFirstContentOfListItem=!0,f++);if(u[0]==="enter")u[1].contentType&&(Object.assign(i,O0(g,r)),r=i[r],m=!0);else if(u[1]._container){for(f=r,c=void 0;f--;)if(h=g.get(f),h[1].type==="lineEnding"||h[1].type==="lineEndingBlank")h[0]==="enter"&&(c&&(g.get(c)[1].type="lineEndingBlank"),h[1].type="lineEnding",c=f);else if(!(h[1].type==="linePrefix"||h[1].type==="listItemIndent"))break;c&&(u[1].end={...g.get(c)[1].start},p=g.slice(c,r),p.unshift(u),g.splice(c,r-c+1,p))}}return ft(a,0,Number.POSITIVE_INFINITY,g.slice(0)),!m}function O0(a,i){const r=a.get(i)[1],u=a.get(i)[2];let c=i-1;const f=[];let h=r._tokenizer;h||(h=u.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(h._contentTypeTextTrailing=!0));const p=h.events,y=[],m={};let g,v,x=-1,S=r,U=0,L=0;const B=[L];for(;S;){for(;a.get(++c)[1]!==S;);f.push(c),S._tokenizer||(g=u.sliceStream(S),S.next||g.push(null),v&&h.defineSkip(S.start),S._isInFirstContentOfListItem&&(h._gfmTasklistFirstContentOfListItem=!0),h.write(g),S._isInFirstContentOfListItem&&(h._gfmTasklistFirstContentOfListItem=void 0)),v=S,S=S.next}for(S=r;++x<p.length;)p[x][0]==="exit"&&p[x-1][0]==="enter"&&p[x][1].type===p[x-1][1].type&&p[x][1].start.line!==p[x][1].end.line&&(L=x+1,B.push(L),S._tokenizer=void 0,S.previous=void 0,S=S.next);for(h.events=[],S?(S._tokenizer=void 0,S.previous=void 0):B.pop(),x=B.length;x--;){const O=p.slice(B[x],B[x+1]),X=f.pop();y.push([X,X+O.length-1]),a.splice(X,2,O)}for(y.reverse(),x=-1;++x<y.length;)m[U+y[x][0]]=U+y[x][1],U+=y[x][1]-y[x][0]-1;return m}const _0={resolve:N0,tokenize:U0},L0={partial:!0,tokenize:B0};function N0(a){return vy(a),a}function U0(a,i){let r;return u;function u(p){return a.enter("content"),r=a.enter("chunkContent",{contentType:"content"}),c(p)}function c(p){return p===null?f(p):de(p)?a.check(L0,h,f)(p):(a.consume(p),c)}function f(p){return a.exit("chunkContent"),a.exit("content"),i(p)}function h(p){return a.consume(p),a.exit("chunkContent"),r.next=a.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,c}}function B0(a,i,r){const u=this;return c;function c(h){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),Ye(a,f,"linePrefix")}function f(h){if(h===null||de(h))return r(h);const p=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?i(h):a.interrupt(u.parser.constructs.flow,r,i)(h)}}function by(a,i,r,u,c,f,h,p,y){const m=y||Number.POSITIVE_INFINITY;let g=0;return v;function v(O){return O===60?(a.enter(u),a.enter(c),a.enter(f),a.consume(O),a.exit(f),x):O===null||O===32||O===41||uc(O)?r(O):(a.enter(u),a.enter(h),a.enter(p),a.enter("chunkString",{contentType:"string"}),L(O))}function x(O){return O===62?(a.enter(f),a.consume(O),a.exit(f),a.exit(c),a.exit(u),i):(a.enter(p),a.enter("chunkString",{contentType:"string"}),S(O))}function S(O){return O===62?(a.exit("chunkString"),a.exit(p),x(O)):O===null||O===60||de(O)?r(O):(a.consume(O),O===92?U:S)}function U(O){return O===60||O===62||O===92?(a.consume(O),S):S(O)}function L(O){return!g&&(O===null||O===41||zn(O))?(a.exit("chunkString"),a.exit(p),a.exit(h),a.exit(u),i(O)):g<m&&O===40?(a.consume(O),g++,L):O===41?(a.consume(O),g--,L):O===null||O===32||O===40||uc(O)?r(O):(a.consume(O),O===92?B:L)}function B(O){return O===40||O===41||O===92?(a.consume(O),L):L(O)}}function Sy(a,i,r,u,c,f){const h=this;let p=0,y;return m;function m(S){return a.enter(u),a.enter(c),a.consume(S),a.exit(c),a.enter(f),g}function g(S){return p>999||S===null||S===91||S===93&&!y||S===94&&!p&&"_hiddenFootnoteSupport"in h.parser.constructs?r(S):S===93?(a.exit(f),a.enter(c),a.consume(S),a.exit(c),a.exit(u),i):de(S)?(a.enter("lineEnding"),a.consume(S),a.exit("lineEnding"),g):(a.enter("chunkString",{contentType:"string"}),v(S))}function v(S){return S===null||S===91||S===93||de(S)||p++>999?(a.exit("chunkString"),g(S)):(a.consume(S),y||(y=!Me(S)),S===92?x:v)}function x(S){return S===91||S===92||S===93?(a.consume(S),p++,v):v(S)}}function wy(a,i,r,u,c,f){let h;return p;function p(x){return x===34||x===39||x===40?(a.enter(u),a.enter(c),a.consume(x),a.exit(c),h=x===40?41:x,y):r(x)}function y(x){return x===h?(a.enter(c),a.consume(x),a.exit(c),a.exit(u),i):(a.enter(f),m(x))}function m(x){return x===h?(a.exit(f),y(h)):x===null?r(x):de(x)?(a.enter("lineEnding"),a.consume(x),a.exit("lineEnding"),Ye(a,m,"linePrefix")):(a.enter("chunkString",{contentType:"string"}),g(x))}function g(x){return x===h||x===null||de(x)?(a.exit("chunkString"),m(x)):(a.consume(x),x===92?v:g)}function v(x){return x===h||x===92?(a.consume(x),g):g(x)}}function Ci(a,i){let r;return u;function u(c){return de(c)?(a.enter("lineEnding"),a.consume(c),a.exit("lineEnding"),r=!0,u):Me(c)?Ye(a,u,r?"linePrefix":"lineSuffix")(c):i(c)}}const H0={name:"definition",tokenize:j0},q0={partial:!0,tokenize:I0};function j0(a,i,r){const u=this;let c;return f;function f(S){return a.enter("definition"),h(S)}function h(S){return Sy.call(u,a,p,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(S)}function p(S){return c=Sl(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),S===58?(a.enter("definitionMarker"),a.consume(S),a.exit("definitionMarker"),y):r(S)}function y(S){return zn(S)?Ci(a,m)(S):m(S)}function m(S){return by(a,g,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(S)}function g(S){return a.attempt(q0,v,v)(S)}function v(S){return Me(S)?Ye(a,x,"whitespace")(S):x(S)}function x(S){return S===null||de(S)?(a.exit("definition"),u.parser.defined.push(c),i(S)):r(S)}}function I0(a,i,r){return u;function u(p){return zn(p)?Ci(a,c)(p):r(p)}function c(p){return wy(a,f,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(p)}function f(p){return Me(p)?Ye(a,h,"whitespace")(p):h(p)}function h(p){return p===null||de(p)?i(p):r(p)}}const Y0={name:"hardBreakEscape",tokenize:G0};function G0(a,i,r){return u;function u(f){return a.enter("hardBreakEscape"),a.consume(f),c}function c(f){return de(f)?(a.exit("hardBreakEscape"),i(f)):r(f)}}const V0={name:"headingAtx",resolve:X0,tokenize:Q0};function X0(a,i){let r=a.length-2,u=3,c,f;return a[u][1].type==="whitespace"&&(u+=2),r-2>u&&a[r][1].type==="whitespace"&&(r-=2),a[r][1].type==="atxHeadingSequence"&&(u===r-1||r-4>u&&a[r-2][1].type==="whitespace")&&(r-=u+1===r?2:4),r>u&&(c={type:"atxHeadingText",start:a[u][1].start,end:a[r][1].end},f={type:"chunkText",start:a[u][1].start,end:a[r][1].end,contentType:"text"},ft(a,u,r-u+1,[["enter",c,i],["enter",f,i],["exit",f,i],["exit",c,i]])),a}function Q0(a,i,r){let u=0;return c;function c(g){return a.enter("atxHeading"),f(g)}function f(g){return a.enter("atxHeadingSequence"),h(g)}function h(g){return g===35&&u++<6?(a.consume(g),h):g===null||zn(g)?(a.exit("atxHeadingSequence"),p(g)):r(g)}function p(g){return g===35?(a.enter("atxHeadingSequence"),y(g)):g===null||de(g)?(a.exit("atxHeading"),i(g)):Me(g)?Ye(a,p,"whitespace")(g):(a.enter("atxHeadingText"),m(g))}function y(g){return g===35?(a.consume(g),y):(a.exit("atxHeadingSequence"),p(g))}function m(g){return g===null||g===35||zn(g)?(a.exit("atxHeadingText"),p(g)):(a.consume(g),m)}}const F0=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],dp=["pre","script","style","textarea"],W0={concrete:!0,name:"htmlFlow",resolveTo:J0,tokenize:P0},Z0={partial:!0,tokenize:ew},K0={partial:!0,tokenize:$0};function J0(a){let i=a.length;for(;i--&&!(a[i][0]==="enter"&&a[i][1].type==="htmlFlow"););return i>1&&a[i-2][1].type==="linePrefix"&&(a[i][1].start=a[i-2][1].start,a[i+1][1].start=a[i-2][1].start,a.splice(i-2,2)),a}function P0(a,i,r){const u=this;let c,f,h,p,y;return m;function m(w){return g(w)}function g(w){return a.enter("htmlFlow"),a.enter("htmlFlowData"),a.consume(w),v}function v(w){return w===33?(a.consume(w),x):w===47?(a.consume(w),f=!0,L):w===63?(a.consume(w),c=3,u.interrupt?i:T):ct(w)?(a.consume(w),h=String.fromCharCode(w),B):r(w)}function x(w){return w===45?(a.consume(w),c=2,S):w===91?(a.consume(w),c=5,p=0,U):ct(w)?(a.consume(w),c=4,u.interrupt?i:T):r(w)}function S(w){return w===45?(a.consume(w),u.interrupt?i:T):r(w)}function U(w){const J="CDATA[";return w===J.charCodeAt(p++)?(a.consume(w),p===J.length?u.interrupt?i:P:U):r(w)}function L(w){return ct(w)?(a.consume(w),h=String.fromCharCode(w),B):r(w)}function B(w){if(w===null||w===47||w===62||zn(w)){const J=w===47,se=h.toLowerCase();return!J&&!f&&dp.includes(se)?(c=1,u.interrupt?i(w):P(w)):F0.includes(h.toLowerCase())?(c=6,J?(a.consume(w),O):u.interrupt?i(w):P(w)):(c=7,u.interrupt&&!u.parser.lazy[u.now().line]?r(w):f?X(w):V(w))}return w===45||qn(w)?(a.consume(w),h+=String.fromCharCode(w),B):r(w)}function O(w){return w===62?(a.consume(w),u.interrupt?i:P):r(w)}function X(w){return Me(w)?(a.consume(w),X):ye(w)}function V(w){return w===47?(a.consume(w),ye):w===58||w===95||ct(w)?(a.consume(w),re):Me(w)?(a.consume(w),V):ye(w)}function re(w){return w===45||w===46||w===58||w===95||qn(w)?(a.consume(w),re):ue(w)}function ue(w){return w===61?(a.consume(w),H):Me(w)?(a.consume(w),ue):V(w)}function H(w){return w===null||w===60||w===61||w===62||w===96?r(w):w===34||w===39?(a.consume(w),y=w,K):Me(w)?(a.consume(w),H):ce(w)}function K(w){return w===y?(a.consume(w),y=null,fe):w===null||de(w)?r(w):(a.consume(w),K)}function ce(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||zn(w)?ue(w):(a.consume(w),ce)}function fe(w){return w===47||w===62||Me(w)?V(w):r(w)}function ye(w){return w===62?(a.consume(w),ee):r(w)}function ee(w){return w===null||de(w)?P(w):Me(w)?(a.consume(w),ee):r(w)}function P(w){return w===45&&c===2?(a.consume(w),M):w===60&&c===1?(a.consume(w),Q):w===62&&c===4?(a.consume(w),E):w===63&&c===3?(a.consume(w),T):w===93&&c===5?(a.consume(w),be):de(w)&&(c===6||c===7)?(a.exit("htmlFlowData"),a.check(Z0,q,Ae)(w)):w===null||de(w)?(a.exit("htmlFlowData"),Ae(w)):(a.consume(w),P)}function Ae(w){return a.check(K0,ae,q)(w)}function ae(w){return a.enter("lineEnding"),a.consume(w),a.exit("lineEnding"),W}function W(w){return w===null||de(w)?Ae(w):(a.enter("htmlFlowData"),P(w))}function M(w){return w===45?(a.consume(w),T):P(w)}function Q(w){return w===47?(a.consume(w),h="",te):P(w)}function te(w){if(w===62){const J=h.toLowerCase();return dp.includes(J)?(a.consume(w),E):P(w)}return ct(w)&&h.length<8?(a.consume(w),h+=String.fromCharCode(w),te):P(w)}function be(w){return w===93?(a.consume(w),T):P(w)}function T(w){return w===62?(a.consume(w),E):w===45&&c===2?(a.consume(w),T):P(w)}function E(w){return w===null||de(w)?(a.exit("htmlFlowData"),q(w)):(a.consume(w),E)}function q(w){return a.exit("htmlFlow"),i(w)}}function $0(a,i,r){const u=this;return c;function c(h){return de(h)?(a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),f):r(h)}function f(h){return u.parser.lazy[u.now().line]?r(h):i(h)}}function ew(a,i,r){return u;function u(c){return a.enter("lineEnding"),a.consume(c),a.exit("lineEnding"),a.attempt(hu,i,r)}}const nw={name:"htmlText",tokenize:tw};function tw(a,i,r){const u=this;let c,f,h;return p;function p(T){return a.enter("htmlText"),a.enter("htmlTextData"),a.consume(T),y}function y(T){return T===33?(a.consume(T),m):T===47?(a.consume(T),ue):T===63?(a.consume(T),V):ct(T)?(a.consume(T),ce):r(T)}function m(T){return T===45?(a.consume(T),g):T===91?(a.consume(T),f=0,U):ct(T)?(a.consume(T),X):r(T)}function g(T){return T===45?(a.consume(T),S):r(T)}function v(T){return T===null?r(T):T===45?(a.consume(T),x):de(T)?(h=v,Q(T)):(a.consume(T),v)}function x(T){return T===45?(a.consume(T),S):v(T)}function S(T){return T===62?M(T):T===45?x(T):v(T)}function U(T){const E="CDATA[";return T===E.charCodeAt(f++)?(a.consume(T),f===E.length?L:U):r(T)}function L(T){return T===null?r(T):T===93?(a.consume(T),B):de(T)?(h=L,Q(T)):(a.consume(T),L)}function B(T){return T===93?(a.consume(T),O):L(T)}function O(T){return T===62?M(T):T===93?(a.consume(T),O):L(T)}function X(T){return T===null||T===62?M(T):de(T)?(h=X,Q(T)):(a.consume(T),X)}function V(T){return T===null?r(T):T===63?(a.consume(T),re):de(T)?(h=V,Q(T)):(a.consume(T),V)}function re(T){return T===62?M(T):V(T)}function ue(T){return ct(T)?(a.consume(T),H):r(T)}function H(T){return T===45||qn(T)?(a.consume(T),H):K(T)}function K(T){return de(T)?(h=K,Q(T)):Me(T)?(a.consume(T),K):M(T)}function ce(T){return T===45||qn(T)?(a.consume(T),ce):T===47||T===62||zn(T)?fe(T):r(T)}function fe(T){return T===47?(a.consume(T),M):T===58||T===95||ct(T)?(a.consume(T),ye):de(T)?(h=fe,Q(T)):Me(T)?(a.consume(T),fe):M(T)}function ye(T){return T===45||T===46||T===58||T===95||qn(T)?(a.consume(T),ye):ee(T)}function ee(T){return T===61?(a.consume(T),P):de(T)?(h=ee,Q(T)):Me(T)?(a.consume(T),ee):fe(T)}function P(T){return T===null||T===60||T===61||T===62||T===96?r(T):T===34||T===39?(a.consume(T),c=T,Ae):de(T)?(h=P,Q(T)):Me(T)?(a.consume(T),P):(a.consume(T),ae)}function Ae(T){return T===c?(a.consume(T),c=void 0,W):T===null?r(T):de(T)?(h=Ae,Q(T)):(a.consume(T),Ae)}function ae(T){return T===null||T===34||T===39||T===60||T===61||T===96?r(T):T===47||T===62||zn(T)?fe(T):(a.consume(T),ae)}function W(T){return T===47||T===62||zn(T)?fe(T):r(T)}function M(T){return T===62?(a.consume(T),a.exit("htmlTextData"),a.exit("htmlText"),i):r(T)}function Q(T){return a.exit("htmlTextData"),a.enter("lineEnding"),a.consume(T),a.exit("lineEnding"),te}function te(T){return Me(T)?Ye(a,be,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(T):be(T)}function be(T){return a.enter("htmlTextData"),h(T)}}const Rc={name:"labelEnd",resolveAll:rw,resolveTo:uw,tokenize:ow},aw={tokenize:sw},lw={tokenize:cw},iw={tokenize:fw};function rw(a){let i=-1;const r=[];for(;++i<a.length;){const u=a[i][1];if(r.push(a[i]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const c=u.type==="labelImage"?4:2;u.type="data",i+=c}}return a.length!==r.length&&ft(a,0,a.length,r),a}function uw(a,i){let r=a.length,u=0,c,f,h,p;for(;r--;)if(c=a[r][1],f){if(c.type==="link"||c.type==="labelLink"&&c._inactive)break;a[r][0]==="enter"&&c.type==="labelLink"&&(c._inactive=!0)}else if(h){if(a[r][0]==="enter"&&(c.type==="labelImage"||c.type==="labelLink")&&!c._balanced&&(f=r,c.type!=="labelLink")){u=2;break}}else c.type==="labelEnd"&&(h=r);const y={type:a[f][1].type==="labelLink"?"link":"image",start:{...a[f][1].start},end:{...a[a.length-1][1].end}},m={type:"label",start:{...a[f][1].start},end:{...a[h][1].end}},g={type:"labelText",start:{...a[f+u+2][1].end},end:{...a[h-2][1].start}};return p=[["enter",y,i],["enter",m,i]],p=$n(p,a.slice(f+1,f+u+3)),p=$n(p,[["enter",g,i]]),p=$n(p,Dc(i.parser.constructs.insideSpan.null,a.slice(f+u+4,h-3),i)),p=$n(p,[["exit",g,i],a[h-2],a[h-1],["exit",m,i]]),p=$n(p,a.slice(h+1)),p=$n(p,[["exit",y,i]]),ft(a,f,a.length,p),a}function ow(a,i,r){const u=this;let c=u.events.length,f,h;for(;c--;)if((u.events[c][1].type==="labelImage"||u.events[c][1].type==="labelLink")&&!u.events[c][1]._balanced){f=u.events[c][1];break}return p;function p(x){return f?f._inactive?v(x):(h=u.parser.defined.includes(Sl(u.sliceSerialize({start:f.end,end:u.now()}))),a.enter("labelEnd"),a.enter("labelMarker"),a.consume(x),a.exit("labelMarker"),a.exit("labelEnd"),y):r(x)}function y(x){return x===40?a.attempt(aw,g,h?g:v)(x):x===91?a.attempt(lw,g,h?m:v)(x):h?g(x):v(x)}function m(x){return a.attempt(iw,g,v)(x)}function g(x){return i(x)}function v(x){return f._balanced=!0,r(x)}}function sw(a,i,r){return u;function u(v){return a.enter("resource"),a.enter("resourceMarker"),a.consume(v),a.exit("resourceMarker"),c}function c(v){return zn(v)?Ci(a,f)(v):f(v)}function f(v){return v===41?g(v):by(a,h,p,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(v)}function h(v){return zn(v)?Ci(a,y)(v):g(v)}function p(v){return r(v)}function y(v){return v===34||v===39||v===40?wy(a,m,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(v):g(v)}function m(v){return zn(v)?Ci(a,g)(v):g(v)}function g(v){return v===41?(a.enter("resourceMarker"),a.consume(v),a.exit("resourceMarker"),a.exit("resource"),i):r(v)}}function cw(a,i,r){const u=this;return c;function c(p){return Sy.call(u,a,f,h,"reference","referenceMarker","referenceString")(p)}function f(p){return u.parser.defined.includes(Sl(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?i(p):r(p)}function h(p){return r(p)}}function fw(a,i,r){return u;function u(f){return a.enter("reference"),a.enter("referenceMarker"),a.consume(f),a.exit("referenceMarker"),c}function c(f){return f===93?(a.enter("referenceMarker"),a.consume(f),a.exit("referenceMarker"),a.exit("reference"),i):r(f)}}const hw={name:"labelStartImage",resolveAll:Rc.resolveAll,tokenize:dw};function dw(a,i,r){const u=this;return c;function c(p){return a.enter("labelImage"),a.enter("labelImageMarker"),a.consume(p),a.exit("labelImageMarker"),f}function f(p){return p===91?(a.enter("labelMarker"),a.consume(p),a.exit("labelMarker"),a.exit("labelImage"),h):r(p)}function h(p){return p===94&&"_hiddenFootnoteSupport"in u.parser.constructs?r(p):i(p)}}const mw={name:"labelStartLink",resolveAll:Rc.resolveAll,tokenize:pw};function pw(a,i,r){const u=this;return c;function c(h){return a.enter("labelLink"),a.enter("labelMarker"),a.consume(h),a.exit("labelMarker"),a.exit("labelLink"),f}function f(h){return h===94&&"_hiddenFootnoteSupport"in u.parser.constructs?r(h):i(h)}}const Xs={name:"lineEnding",tokenize:yw};function yw(a,i){return r;function r(u){return a.enter("lineEnding"),a.consume(u),a.exit("lineEnding"),Ye(a,i,"linePrefix")}}const iu={name:"thematicBreak",tokenize:gw};function gw(a,i,r){let u=0,c;return f;function f(m){return a.enter("thematicBreak"),h(m)}function h(m){return c=m,p(m)}function p(m){return m===c?(a.enter("thematicBreakSequence"),y(m)):u>=3&&(m===null||de(m))?(a.exit("thematicBreak"),i(m)):r(m)}function y(m){return m===c?(a.consume(m),u++,y):(a.exit("thematicBreakSequence"),Me(m)?Ye(a,p,"whitespace")(m):p(m))}}const An={continuation:{tokenize:ww},exit:Tw,name:"list",tokenize:Sw},vw={partial:!0,tokenize:kw},bw={partial:!0,tokenize:xw};function Sw(a,i,r){const u=this,c=u.events[u.events.length-1];let f=c&&c[1].type==="linePrefix"?c[2].sliceSerialize(c[1],!0).length:0,h=0;return p;function p(S){const U=u.containerState.type||(S===42||S===43||S===45?"listUnordered":"listOrdered");if(U==="listUnordered"?!u.containerState.marker||S===u.containerState.marker:oc(S)){if(u.containerState.type||(u.containerState.type=U,a.enter(U,{_container:!0})),U==="listUnordered")return a.enter("listItemPrefix"),S===42||S===45?a.check(iu,r,m)(S):m(S);if(!u.interrupt||S===49)return a.enter("listItemPrefix"),a.enter("listItemValue"),y(S)}return r(S)}function y(S){return oc(S)&&++h<10?(a.consume(S),y):(!u.interrupt||h<2)&&(u.containerState.marker?S===u.containerState.marker:S===41||S===46)?(a.exit("listItemValue"),m(S)):r(S)}function m(S){return a.enter("listItemMarker"),a.consume(S),a.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||S,a.check(hu,u.interrupt?r:g,a.attempt(vw,x,v))}function g(S){return u.containerState.initialBlankLine=!0,f++,x(S)}function v(S){return Me(S)?(a.enter("listItemPrefixWhitespace"),a.consume(S),a.exit("listItemPrefixWhitespace"),x):r(S)}function x(S){return u.containerState.size=f+u.sliceSerialize(a.exit("listItemPrefix"),!0).length,i(S)}}function ww(a,i,r){const u=this;return u.containerState._closeFlow=void 0,a.check(hu,c,f);function c(p){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Ye(a,i,"listItemIndent",u.containerState.size+1)(p)}function f(p){return u.containerState.furtherBlankLines||!Me(p)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,h(p)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,a.attempt(bw,i,h)(p))}function h(p){return u.containerState._closeFlow=!0,u.interrupt=void 0,Ye(a,a.attempt(An,i,r),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p)}}function xw(a,i,r){const u=this;return Ye(a,c,"listItemIndent",u.containerState.size+1);function c(f){const h=u.events[u.events.length-1];return h&&h[1].type==="listItemIndent"&&h[2].sliceSerialize(h[1],!0).length===u.containerState.size?i(f):r(f)}}function Tw(a){a.exit(this.containerState.type)}function kw(a,i,r){const u=this;return Ye(a,c,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function c(f){const h=u.events[u.events.length-1];return!Me(f)&&h&&h[1].type==="listItemPrefixWhitespace"?i(f):r(f)}}const mp={name:"setextUnderline",resolveTo:Ew,tokenize:Cw};function Ew(a,i){let r=a.length,u,c,f;for(;r--;)if(a[r][0]==="enter"){if(a[r][1].type==="content"){u=r;break}a[r][1].type==="paragraph"&&(c=r)}else a[r][1].type==="content"&&a.splice(r,1),!f&&a[r][1].type==="definition"&&(f=r);const h={type:"setextHeading",start:{...a[u][1].start},end:{...a[a.length-1][1].end}};return a[c][1].type="setextHeadingText",f?(a.splice(c,0,["enter",h,i]),a.splice(f+1,0,["exit",a[u][1],i]),a[u][1].end={...a[f][1].end}):a[u][1]=h,a.push(["exit",h,i]),a}function Cw(a,i,r){const u=this;let c;return f;function f(m){let g=u.events.length,v;for(;g--;)if(u.events[g][1].type!=="lineEnding"&&u.events[g][1].type!=="linePrefix"&&u.events[g][1].type!=="content"){v=u.events[g][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||v)?(a.enter("setextHeadingLine"),c=m,h(m)):r(m)}function h(m){return a.enter("setextHeadingLineSequence"),p(m)}function p(m){return m===c?(a.consume(m),p):(a.exit("setextHeadingLineSequence"),Me(m)?Ye(a,y,"lineSuffix")(m):y(m))}function y(m){return m===null||de(m)?(a.exit("setextHeadingLine"),i(m)):r(m)}}const Aw={tokenize:zw};function zw(a){const i=this,r=a.attempt(hu,u,a.attempt(this.parser.constructs.flowInitial,c,Ye(a,a.attempt(this.parser.constructs.flow,c,a.attempt(_0,c)),"linePrefix")));return r;function u(f){if(f===null){a.consume(f);return}return a.enter("lineEndingBlank"),a.consume(f),a.exit("lineEndingBlank"),i.currentConstruct=void 0,r}function c(f){if(f===null){a.consume(f);return}return a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),i.currentConstruct=void 0,r}}const Dw={resolveAll:Ty()},Rw=xy("string"),Mw=xy("text");function xy(a){return{resolveAll:Ty(a==="text"?Ow:void 0),tokenize:i};function i(r){const u=this,c=this.parser.constructs[a],f=r.attempt(c,h,p);return h;function h(g){return m(g)?f(g):p(g)}function p(g){if(g===null){r.consume(g);return}return r.enter("data"),r.consume(g),y}function y(g){return m(g)?(r.exit("data"),f(g)):(r.consume(g),y)}function m(g){if(g===null)return!0;const v=c[g];let x=-1;if(v)for(;++x<v.length;){const S=v[x];if(!S.previous||S.previous.call(u,u.previous))return!0}return!1}}}function Ty(a){return i;function i(r,u){let c=-1,f;for(;++c<=r.length;)f===void 0?r[c]&&r[c][1].type==="data"&&(f=c,c++):(!r[c]||r[c][1].type!=="data")&&(c!==f+2&&(r[f][1].end=r[c-1][1].end,r.splice(f+2,c-f-2),c=f+2),f=void 0);return a?a(r,u):r}}function Ow(a,i){let r=0;for(;++r<=a.length;)if((r===a.length||a[r][1].type==="lineEnding")&&a[r-1][1].type==="data"){const u=a[r-1][1],c=i.sliceStream(u);let f=c.length,h=-1,p=0,y;for(;f--;){const m=c[f];if(typeof m=="string"){for(h=m.length;m.charCodeAt(h-1)===32;)p++,h--;if(h)break;h=-1}else if(m===-2)y=!0,p++;else if(m!==-1){f++;break}}if(i._contentTypeTextTrailing&&r===a.length&&(p=0),p){const m={type:r===a.length||y||p<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:f?h:u.start._bufferIndex+h,_index:u.start._index+f,line:u.end.line,column:u.end.column-p,offset:u.end.offset-p},end:{...u.end}};u.end={...m.start},u.start.offset===u.end.offset?Object.assign(u,m):(a.splice(r,0,["enter",m,i],["exit",m,i]),r+=2)}r++}return a}const _w={42:An,43:An,45:An,48:An,49:An,50:An,51:An,52:An,53:An,54:An,55:An,56:An,57:An,62:py},Lw={91:H0},Nw={[-2]:Vs,[-1]:Vs,32:Vs},Uw={35:V0,42:iu,45:[mp,iu],60:W0,61:mp,95:iu,96:hp,126:hp},Bw={38:gy,92:yy},Hw={[-5]:Xs,[-4]:Xs,[-3]:Xs,33:hw,38:gy,42:sc,60:[m0,nw],91:mw,92:[Y0,yy],93:Rc,95:sc,96:A0},qw={null:[sc,Dw]},jw={null:[42,95]},Iw={null:[]},Yw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:jw,contentInitial:Lw,disable:Iw,document:_w,flow:Uw,flowInitial:Nw,insideSpan:qw,string:Bw,text:Hw},Symbol.toStringTag,{value:"Module"}));function Gw(a,i,r){let u={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const c={},f=[];let h=[],p=[];const y={attempt:K(ue),check:K(H),consume:X,enter:V,exit:re,interrupt:K(H,{interrupt:!0})},m={code:null,containerState:{},defineSkip:L,events:[],now:U,parser:a,previous:null,sliceSerialize:x,sliceStream:S,write:v};let g=i.tokenize.call(m,y);return i.resolveAll&&f.push(i),m;function v(ee){return h=$n(h,ee),B(),h[h.length-1]!==null?[]:(ce(i,0),m.events=Dc(f,m.events,m),m.events)}function x(ee,P){return Xw(S(ee),P)}function S(ee){return Vw(h,ee)}function U(){const{_bufferIndex:ee,_index:P,line:Ae,column:ae,offset:W}=u;return{_bufferIndex:ee,_index:P,line:Ae,column:ae,offset:W}}function L(ee){c[ee.line]=ee.column,ye()}function B(){let ee;for(;u._index<h.length;){const P=h[u._index];if(typeof P=="string")for(ee=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===ee&&u._bufferIndex<P.length;)O(P.charCodeAt(u._bufferIndex));else O(P)}}function O(ee){g=g(ee)}function X(ee){de(ee)?(u.line++,u.column=1,u.offset+=ee===-3?2:1,ye()):ee!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===h[u._index].length&&(u._bufferIndex=-1,u._index++)),m.previous=ee}function V(ee,P){const Ae=P||{};return Ae.type=ee,Ae.start=U(),m.events.push(["enter",Ae,m]),p.push(Ae),Ae}function re(ee){const P=p.pop();return P.end=U(),m.events.push(["exit",P,m]),P}function ue(ee,P){ce(ee,P.from)}function H(ee,P){P.restore()}function K(ee,P){return Ae;function Ae(ae,W,M){let Q,te,be,T;return Array.isArray(ae)?q(ae):"tokenize"in ae?q([ae]):E(ae);function E(le){return Te;function Te(Xe){const Ne=Xe!==null&&le[Xe],Yn=Xe!==null&&le.null,ht=[...Array.isArray(Ne)?Ne:Ne?[Ne]:[],...Array.isArray(Yn)?Yn:Yn?[Yn]:[]];return q(ht)(Xe)}}function q(le){return Q=le,te=0,le.length===0?M:w(le[te])}function w(le){return Te;function Te(Xe){return T=fe(),be=le,le.partial||(m.currentConstruct=le),le.name&&m.parser.constructs.disable.null.includes(le.name)?se():le.tokenize.call(P?Object.assign(Object.create(m),P):m,y,J,se)(Xe)}}function J(le){return ee(be,T),W}function se(le){return T.restore(),++te<Q.length?w(Q[te]):M}}}function ce(ee,P){ee.resolveAll&&!f.includes(ee)&&f.push(ee),ee.resolve&&ft(m.events,P,m.events.length-P,ee.resolve(m.events.slice(P),m)),ee.resolveTo&&(m.events=ee.resolveTo(m.events,m))}function fe(){const ee=U(),P=m.previous,Ae=m.currentConstruct,ae=m.events.length,W=Array.from(p);return{from:ae,restore:M};function M(){u=ee,m.previous=P,m.currentConstruct=Ae,m.events.length=ae,p=W,ye()}}function ye(){u.line in c&&u.column<2&&(u.column=c[u.line],u.offset+=c[u.line]-1)}}function Vw(a,i){const r=i.start._index,u=i.start._bufferIndex,c=i.end._index,f=i.end._bufferIndex;let h;if(r===c)h=[a[r].slice(u,f)];else{if(h=a.slice(r,c),u>-1){const p=h[0];typeof p=="string"?h[0]=p.slice(u):h.shift()}f>0&&h.push(a[c].slice(0,f))}return h}function Xw(a,i){let r=-1;const u=[];let c;for(;++r<a.length;){const f=a[r];let h;if(typeof f=="string")h=f;else switch(f){case-5:{h="\r";break}case-4:{h=`
`;break}case-3:{h=`\r
`;break}case-2:{h=i?" ":"	";break}case-1:{if(!i&&c)continue;h=" ";break}default:h=String.fromCharCode(f)}c=f===-2,u.push(h)}return u.join("")}function Qw(a){const u={constructs:$1([Yw,...(a||{}).extensions||[]]),content:c(u0),defined:[],document:c(s0),flow:c(Aw),lazy:{},string:c(Rw),text:c(Mw)};return u;function c(f){return h;function h(p){return Gw(u,f,p)}}}function Fw(a){for(;!vy(a););return a}const pp=/[\0\t\n\r]/g;function Ww(){let a=1,i="",r=!0,u;return c;function c(f,h,p){const y=[];let m,g,v,x,S;for(f=i+(typeof f=="string"?f.toString():new TextDecoder(h||void 0).decode(f)),v=0,i="",r&&(f.charCodeAt(0)===65279&&v++,r=void 0);v<f.length;){if(pp.lastIndex=v,m=pp.exec(f),x=m&&m.index!==void 0?m.index:f.length,S=f.charCodeAt(x),!m){i=f.slice(v);break}if(S===10&&v===x&&u)y.push(-3),u=void 0;else switch(u&&(y.push(-5),u=void 0),v<x&&(y.push(f.slice(v,x)),a+=x-v),S){case 0:{y.push(65533),a++;break}case 9:{for(g=Math.ceil(a/4)*4,y.push(-2);a++<g;)y.push(-1);break}case 10:{y.push(-4),a=1;break}default:u=!0,a=1}v=x+1}return p&&(u&&y.push(-5),i&&y.push(i),y.push(null)),y}}const Zw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Kw(a){return a.replace(Zw,Jw)}function Jw(a,i,r){if(i)return i;if(r.charCodeAt(0)===35){const c=r.charCodeAt(1),f=c===120||c===88;return my(r.slice(f?2:1),f?16:10)}return zc(r)||a}const ky={}.hasOwnProperty;function Pw(a,i,r){return typeof i!="string"&&(r=i,i=void 0),$w(r)(Fw(Qw(r).document().write(Ww()(a,i,!0))))}function $w(a){const i={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:f(Ma),autolinkProtocol:fe,autolinkEmail:fe,atxHeading:f(Da),blockQuote:f(Yn),characterEscape:fe,characterReference:fe,codeFenced:f(ht),codeFencedFenceInfo:h,codeFencedFenceMeta:h,codeIndented:f(ht,h),codeText:f(El,h),codeTextData:fe,data:fe,codeFlowValue:fe,definition:f(Li),definitionDestinationString:h,definitionLabelString:h,definitionTitleString:h,emphasis:f(dt),hardBreakEscape:f(Ra),hardBreakTrailing:f(Ra),htmlFlow:f(Ni,h),htmlFlowData:fe,htmlText:f(Ni,h),htmlTextData:fe,image:f(Ui),label:h,link:f(Ma),listItem:f(Cl),listItemValue:x,listOrdered:f(Oa,v),listUnordered:f(Oa),paragraph:f(pu),reference:w,referenceString:h,resourceDestinationString:h,resourceTitleString:h,setextHeading:f(Da),strong:f(yu),thematicBreak:f(gu)},exit:{atxHeading:y(),atxHeadingSequence:ue,autolink:y(),autolinkEmail:Ne,autolinkProtocol:Xe,blockQuote:y(),characterEscapeValue:ye,characterReferenceMarkerHexadecimal:se,characterReferenceMarkerNumeric:se,characterReferenceValue:le,characterReference:Te,codeFenced:y(B),codeFencedFence:L,codeFencedFenceInfo:S,codeFencedFenceMeta:U,codeFlowValue:ye,codeIndented:y(O),codeText:y(W),codeTextData:ye,data:ye,definition:y(),definitionDestinationString:re,definitionLabelString:X,definitionTitleString:V,emphasis:y(),hardBreakEscape:y(P),hardBreakTrailing:y(P),htmlFlow:y(Ae),htmlFlowData:ye,htmlText:y(ae),htmlTextData:ye,image:y(Q),label:be,labelText:te,lineEnding:ee,link:y(M),listItem:y(),listOrdered:y(),listUnordered:y(),paragraph:y(),referenceString:J,resourceDestinationString:T,resourceTitleString:E,resource:q,setextHeading:y(ce),setextHeadingLineSequence:K,setextHeadingText:H,strong:y(),thematicBreak:y()}};Ey(i,(a||{}).mdastExtensions||[]);const r={};return u;function u(j){let Z={type:"root",children:[]};const he={stack:[Z],tokenStack:[],config:i,enter:p,exit:m,buffer:h,resume:g,data:r},Se=[];let Oe=-1;for(;++Oe<j.length;)if(j[Oe][1].type==="listOrdered"||j[Oe][1].type==="listUnordered")if(j[Oe][0]==="enter")Se.push(Oe);else{const Rn=Se.pop();Oe=c(j,Rn,Oe)}for(Oe=-1;++Oe<j.length;){const Rn=i[j[Oe][0]];ky.call(Rn,j[Oe][1].type)&&Rn[j[Oe][1].type].call(Object.assign({sliceSerialize:j[Oe][2].sliceSerialize},he),j[Oe][1])}if(he.tokenStack.length>0){const Rn=he.tokenStack[he.tokenStack.length-1];(Rn[1]||yp).call(he,void 0,Rn[0])}for(Z.position={start:ra(j.length>0?j[0][1].start:{line:1,column:1,offset:0}),end:ra(j.length>0?j[j.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<i.transforms.length;)Z=i.transforms[Oe](Z)||Z;return Z}function c(j,Z,he){let Se=Z-1,Oe=-1,Rn=!1,mt,gn,an,bn;for(;++Se<=he;){const qe=j[Se];switch(qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qe[0]==="enter"?Oe++:Oe--,bn=void 0;break}case"lineEndingBlank":{qe[0]==="enter"&&(mt&&!bn&&!Oe&&!an&&(an=Se),bn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:bn=void 0}if(!Oe&&qe[0]==="enter"&&qe[1].type==="listItemPrefix"||Oe===-1&&qe[0]==="exit"&&(qe[1].type==="listUnordered"||qe[1].type==="listOrdered")){if(mt){let Nt=Se;for(gn=void 0;Nt--;){const et=j[Nt];if(et[1].type==="lineEnding"||et[1].type==="lineEndingBlank"){if(et[0]==="exit")continue;gn&&(j[gn][1].type="lineEndingBlank",Rn=!0),et[1].type="lineEnding",gn=Nt}else if(!(et[1].type==="linePrefix"||et[1].type==="blockQuotePrefix"||et[1].type==="blockQuotePrefixWhitespace"||et[1].type==="blockQuoteMarker"||et[1].type==="listItemIndent"))break}an&&(!gn||an<gn)&&(mt._spread=!0),mt.end=Object.assign({},gn?j[gn][1].start:qe[1].end),j.splice(gn||Se,0,["exit",mt,qe[2]]),Se++,he++}if(qe[1].type==="listItemPrefix"){const Nt={type:"listItem",_spread:!1,start:Object.assign({},qe[1].start),end:void 0};mt=Nt,j.splice(Se,0,["enter",Nt,qe[2]]),Se++,he++,an=void 0,bn=!0}}}return j[Z][1]._spread=Rn,he}function f(j,Z){return he;function he(Se){p.call(this,j(Se),Se),Z&&Z.call(this,Se)}}function h(){this.stack.push({type:"fragment",children:[]})}function p(j,Z,he){this.stack[this.stack.length-1].children.push(j),this.stack.push(j),this.tokenStack.push([Z,he||void 0]),j.position={start:ra(Z.start),end:void 0}}function y(j){return Z;function Z(he){j&&j.call(this,he),m.call(this,he)}}function m(j,Z){const he=this.stack.pop(),Se=this.tokenStack.pop();if(Se)Se[0].type!==j.type&&(Z?Z.call(this,j,Se[0]):(Se[1]||yp).call(this,j,Se[0]));else throw new Error("Cannot close `"+j.type+"` ("+Ei({start:j.start,end:j.end})+"): it’s not open");he.position.end=ra(j.end)}function g(){return J1(this.stack.pop())}function v(){this.data.expectingFirstListItemValue=!0}function x(j){if(this.data.expectingFirstListItemValue){const Z=this.stack[this.stack.length-2];Z.start=Number.parseInt(this.sliceSerialize(j),10),this.data.expectingFirstListItemValue=void 0}}function S(){const j=this.resume(),Z=this.stack[this.stack.length-1];Z.lang=j}function U(){const j=this.resume(),Z=this.stack[this.stack.length-1];Z.meta=j}function L(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function B(){const j=this.resume(),Z=this.stack[this.stack.length-1];Z.value=j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function O(){const j=this.resume(),Z=this.stack[this.stack.length-1];Z.value=j.replace(/(\r?\n|\r)$/g,"")}function X(j){const Z=this.resume(),he=this.stack[this.stack.length-1];he.label=Z,he.identifier=Sl(this.sliceSerialize(j)).toLowerCase()}function V(){const j=this.resume(),Z=this.stack[this.stack.length-1];Z.title=j}function re(){const j=this.resume(),Z=this.stack[this.stack.length-1];Z.url=j}function ue(j){const Z=this.stack[this.stack.length-1];if(!Z.depth){const he=this.sliceSerialize(j).length;Z.depth=he}}function H(){this.data.setextHeadingSlurpLineEnding=!0}function K(j){const Z=this.stack[this.stack.length-1];Z.depth=this.sliceSerialize(j).codePointAt(0)===61?1:2}function ce(){this.data.setextHeadingSlurpLineEnding=void 0}function fe(j){const he=this.stack[this.stack.length-1].children;let Se=he[he.length-1];(!Se||Se.type!=="text")&&(Se=yn(),Se.position={start:ra(j.start),end:void 0},he.push(Se)),this.stack.push(Se)}function ye(j){const Z=this.stack.pop();Z.value+=this.sliceSerialize(j),Z.position.end=ra(j.end)}function ee(j){const Z=this.stack[this.stack.length-1];if(this.data.atHardBreak){const he=Z.children[Z.children.length-1];he.position.end=ra(j.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&i.canContainEols.includes(Z.type)&&(fe.call(this,j),ye.call(this,j))}function P(){this.data.atHardBreak=!0}function Ae(){const j=this.resume(),Z=this.stack[this.stack.length-1];Z.value=j}function ae(){const j=this.resume(),Z=this.stack[this.stack.length-1];Z.value=j}function W(){const j=this.resume(),Z=this.stack[this.stack.length-1];Z.value=j}function M(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=Z,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function Q(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=Z,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function te(j){const Z=this.sliceSerialize(j),he=this.stack[this.stack.length-2];he.label=Kw(Z),he.identifier=Sl(Z).toLowerCase()}function be(){const j=this.stack[this.stack.length-1],Z=this.resume(),he=this.stack[this.stack.length-1];if(this.data.inReference=!0,he.type==="link"){const Se=j.children;he.children=Se}else he.alt=Z}function T(){const j=this.resume(),Z=this.stack[this.stack.length-1];Z.url=j}function E(){const j=this.resume(),Z=this.stack[this.stack.length-1];Z.title=j}function q(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function J(j){const Z=this.resume(),he=this.stack[this.stack.length-1];he.label=Z,he.identifier=Sl(this.sliceSerialize(j)).toLowerCase(),this.data.referenceType="full"}function se(j){this.data.characterReferenceType=j.type}function le(j){const Z=this.sliceSerialize(j),he=this.data.characterReferenceType;let Se;he?(Se=my(Z,he==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Se=zc(Z);const Oe=this.stack[this.stack.length-1];Oe.value+=Se}function Te(j){const Z=this.stack.pop();Z.position.end=ra(j.end)}function Xe(j){ye.call(this,j);const Z=this.stack[this.stack.length-1];Z.url=this.sliceSerialize(j)}function Ne(j){ye.call(this,j);const Z=this.stack[this.stack.length-1];Z.url="mailto:"+this.sliceSerialize(j)}function Yn(){return{type:"blockquote",children:[]}}function ht(){return{type:"code",lang:null,meta:null,value:""}}function El(){return{type:"inlineCode",value:""}}function Li(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function dt(){return{type:"emphasis",children:[]}}function Da(){return{type:"heading",depth:0,children:[]}}function Ra(){return{type:"break"}}function Ni(){return{type:"html",value:""}}function Ui(){return{type:"image",title:null,url:"",alt:null}}function Ma(){return{type:"link",title:null,url:"",children:[]}}function Oa(j){return{type:"list",ordered:j.type==="listOrdered",start:null,spread:j._spread,children:[]}}function Cl(j){return{type:"listItem",spread:j._spread,checked:null,children:[]}}function pu(){return{type:"paragraph",children:[]}}function yu(){return{type:"strong",children:[]}}function yn(){return{type:"text",value:""}}function gu(){return{type:"thematicBreak"}}}function ra(a){return{line:a.line,column:a.column,offset:a.offset}}function Ey(a,i){let r=-1;for(;++r<i.length;){const u=i[r];Array.isArray(u)?Ey(a,u):ex(a,u)}}function ex(a,i){let r;for(r in i)if(ky.call(i,r))switch(r){case"canContainEols":{const u=i[r];u&&a[r].push(...u);break}case"transforms":{const u=i[r];u&&a[r].push(...u);break}case"enter":case"exit":{const u=i[r];u&&Object.assign(a[r],u);break}}}function yp(a,i){throw a?new Error("Cannot close `"+a.type+"` ("+Ei({start:a.start,end:a.end})+"): a different token (`"+i.type+"`, "+Ei({start:i.start,end:i.end})+") is open"):new Error("Cannot close document, a token (`"+i.type+"`, "+Ei({start:i.start,end:i.end})+") is still open")}function nx(a){const i=this;i.parser=r;function r(u){return Pw(u,{...i.data("settings"),...a,extensions:i.data("micromarkExtensions")||[],mdastExtensions:i.data("fromMarkdownExtensions")||[]})}}function tx(a,i){const r={type:"element",tagName:"blockquote",properties:{},children:a.wrap(a.all(i),!0)};return a.patch(i,r),a.applyData(i,r)}function ax(a,i){const r={type:"element",tagName:"br",properties:{},children:[]};return a.patch(i,r),[a.applyData(i,r),{type:"text",value:`
`}]}function lx(a,i){const r=i.value?i.value+`
`:"",u={},c=i.lang?i.lang.split(/\s+/):[];c.length>0&&(u.className=["language-"+c[0]]);let f={type:"element",tagName:"code",properties:u,children:[{type:"text",value:r}]};return i.meta&&(f.data={meta:i.meta}),a.patch(i,f),f=a.applyData(i,f),f={type:"element",tagName:"pre",properties:{},children:[f]},a.patch(i,f),f}function ix(a,i){const r={type:"element",tagName:"del",properties:{},children:a.all(i)};return a.patch(i,r),a.applyData(i,r)}function rx(a,i){const r={type:"element",tagName:"em",properties:{},children:a.all(i)};return a.patch(i,r),a.applyData(i,r)}function ux(a,i){const r=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",u=String(i.identifier).toUpperCase(),c=kl(u.toLowerCase()),f=a.footnoteOrder.indexOf(u);let h,p=a.footnoteCounts.get(u);p===void 0?(p=0,a.footnoteOrder.push(u),h=a.footnoteOrder.length):h=f+1,p+=1,a.footnoteCounts.set(u,p);const y={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+c,id:r+"fnref-"+c+(p>1?"-"+p:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(h)}]};a.patch(i,y);const m={type:"element",tagName:"sup",properties:{},children:[y]};return a.patch(i,m),a.applyData(i,m)}function ox(a,i){const r={type:"element",tagName:"h"+i.depth,properties:{},children:a.all(i)};return a.patch(i,r),a.applyData(i,r)}function sx(a,i){if(a.options.allowDangerousHtml){const r={type:"raw",value:i.value};return a.patch(i,r),a.applyData(i,r)}}function Cy(a,i){const r=i.referenceType;let u="]";if(r==="collapsed"?u+="[]":r==="full"&&(u+="["+(i.label||i.identifier)+"]"),i.type==="imageReference")return[{type:"text",value:"!["+i.alt+u}];const c=a.all(i),f=c[0];f&&f.type==="text"?f.value="["+f.value:c.unshift({type:"text",value:"["});const h=c[c.length-1];return h&&h.type==="text"?h.value+=u:c.push({type:"text",value:u}),c}function cx(a,i){const r=String(i.identifier).toUpperCase(),u=a.definitionById.get(r);if(!u)return Cy(a,i);const c={src:kl(u.url||""),alt:i.alt};u.title!==null&&u.title!==void 0&&(c.title=u.title);const f={type:"element",tagName:"img",properties:c,children:[]};return a.patch(i,f),a.applyData(i,f)}function fx(a,i){const r={src:kl(i.url)};i.alt!==null&&i.alt!==void 0&&(r.alt=i.alt),i.title!==null&&i.title!==void 0&&(r.title=i.title);const u={type:"element",tagName:"img",properties:r,children:[]};return a.patch(i,u),a.applyData(i,u)}function hx(a,i){const r={type:"text",value:i.value.replace(/\r?\n|\r/g," ")};a.patch(i,r);const u={type:"element",tagName:"code",properties:{},children:[r]};return a.patch(i,u),a.applyData(i,u)}function dx(a,i){const r=String(i.identifier).toUpperCase(),u=a.definitionById.get(r);if(!u)return Cy(a,i);const c={href:kl(u.url||"")};u.title!==null&&u.title!==void 0&&(c.title=u.title);const f={type:"element",tagName:"a",properties:c,children:a.all(i)};return a.patch(i,f),a.applyData(i,f)}function mx(a,i){const r={href:kl(i.url)};i.title!==null&&i.title!==void 0&&(r.title=i.title);const u={type:"element",tagName:"a",properties:r,children:a.all(i)};return a.patch(i,u),a.applyData(i,u)}function px(a,i,r){const u=a.all(i),c=r?yx(r):Ay(i),f={},h=[];if(typeof i.checked=="boolean"){const g=u[0];let v;g&&g.type==="element"&&g.tagName==="p"?v=g:(v={type:"element",tagName:"p",properties:{},children:[]},u.unshift(v)),v.children.length>0&&v.children.unshift({type:"text",value:" "}),v.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:i.checked,disabled:!0},children:[]}),f.className=["task-list-item"]}let p=-1;for(;++p<u.length;){const g=u[p];(c||p!==0||g.type!=="element"||g.tagName!=="p")&&h.push({type:"text",value:`
`}),g.type==="element"&&g.tagName==="p"&&!c?h.push(...g.children):h.push(g)}const y=u[u.length-1];y&&(c||y.type!=="element"||y.tagName!=="p")&&h.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:f,children:h};return a.patch(i,m),a.applyData(i,m)}function yx(a){let i=!1;if(a.type==="list"){i=a.spread||!1;const r=a.children;let u=-1;for(;!i&&++u<r.length;)i=Ay(r[u])}return i}function Ay(a){const i=a.spread;return i??a.children.length>1}function gx(a,i){const r={},u=a.all(i);let c=-1;for(typeof i.start=="number"&&i.start!==1&&(r.start=i.start);++c<u.length;){const h=u[c];if(h.type==="element"&&h.tagName==="li"&&h.properties&&Array.isArray(h.properties.className)&&h.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const f={type:"element",tagName:i.ordered?"ol":"ul",properties:r,children:a.wrap(u,!0)};return a.patch(i,f),a.applyData(i,f)}function vx(a,i){const r={type:"element",tagName:"p",properties:{},children:a.all(i)};return a.patch(i,r),a.applyData(i,r)}function bx(a,i){const r={type:"root",children:a.wrap(a.all(i))};return a.patch(i,r),a.applyData(i,r)}function Sx(a,i){const r={type:"element",tagName:"strong",properties:{},children:a.all(i)};return a.patch(i,r),a.applyData(i,r)}function wx(a,i){const r=a.all(i),u=r.shift(),c=[];if(u){const h={type:"element",tagName:"thead",properties:{},children:a.wrap([u],!0)};a.patch(i.children[0],h),c.push(h)}if(r.length>0){const h={type:"element",tagName:"tbody",properties:{},children:a.wrap(r,!0)},p=kc(i.children[1]),y=uy(i.children[i.children.length-1]);p&&y&&(h.position={start:p,end:y}),c.push(h)}const f={type:"element",tagName:"table",properties:{},children:a.wrap(c,!0)};return a.patch(i,f),a.applyData(i,f)}function xx(a,i,r){const u=r?r.children:void 0,f=(u?u.indexOf(i):1)===0?"th":"td",h=r&&r.type==="table"?r.align:void 0,p=h?h.length:i.children.length;let y=-1;const m=[];for(;++y<p;){const v=i.children[y],x={},S=h?h[y]:void 0;S&&(x.align=S);let U={type:"element",tagName:f,properties:x,children:[]};v&&(U.children=a.all(v),a.patch(v,U),U=a.applyData(v,U)),m.push(U)}const g={type:"element",tagName:"tr",properties:{},children:a.wrap(m,!0)};return a.patch(i,g),a.applyData(i,g)}function Tx(a,i){const r={type:"element",tagName:"td",properties:{},children:a.all(i)};return a.patch(i,r),a.applyData(i,r)}const gp=9,vp=32;function kx(a){const i=String(a),r=/\r?\n|\r/g;let u=r.exec(i),c=0;const f=[];for(;u;)f.push(bp(i.slice(c,u.index),c>0,!0),u[0]),c=u.index+u[0].length,u=r.exec(i);return f.push(bp(i.slice(c),c>0,!1)),f.join("")}function bp(a,i,r){let u=0,c=a.length;if(i){let f=a.codePointAt(u);for(;f===gp||f===vp;)u++,f=a.codePointAt(u)}if(r){let f=a.codePointAt(c-1);for(;f===gp||f===vp;)c--,f=a.codePointAt(c-1)}return c>u?a.slice(u,c):""}function Ex(a,i){const r={type:"text",value:kx(String(i.value))};return a.patch(i,r),a.applyData(i,r)}function Cx(a,i){const r={type:"element",tagName:"hr",properties:{},children:[]};return a.patch(i,r),a.applyData(i,r)}const Ax={blockquote:tx,break:ax,code:lx,delete:ix,emphasis:rx,footnoteReference:ux,heading:ox,html:sx,imageReference:cx,image:fx,inlineCode:hx,linkReference:dx,link:mx,listItem:px,list:gx,paragraph:vx,root:bx,strong:Sx,table:wx,tableCell:Tx,tableRow:xx,text:Ex,thematicBreak:Cx,toml:eu,yaml:eu,definition:eu,footnoteDefinition:eu};function eu(){}const zy=-1,du=0,Ai=1,uu=2,Mc=3,Oc=4,_c=5,Lc=6,Dy=7,Ry=8,Sp=typeof self=="object"?self:globalThis,zx=(a,i)=>{const r=(c,f)=>(a.set(f,c),c),u=c=>{if(a.has(c))return a.get(c);const[f,h]=i[c];switch(f){case du:case zy:return r(h,c);case Ai:{const p=r([],c);for(const y of h)p.push(u(y));return p}case uu:{const p=r({},c);for(const[y,m]of h)p[u(y)]=u(m);return p}case Mc:return r(new Date(h),c);case Oc:{const{source:p,flags:y}=h;return r(new RegExp(p,y),c)}case _c:{const p=r(new Map,c);for(const[y,m]of h)p.set(u(y),u(m));return p}case Lc:{const p=r(new Set,c);for(const y of h)p.add(u(y));return p}case Dy:{const{name:p,message:y}=h;return r(new Sp[p](y),c)}case Ry:return r(BigInt(h),c);case"BigInt":return r(Object(BigInt(h)),c);case"ArrayBuffer":return r(new Uint8Array(h).buffer,h);case"DataView":{const{buffer:p}=new Uint8Array(h);return r(new DataView(p),h)}}return r(new Sp[f](h),c)};return u},wp=a=>zx(new Map,a)(0),vl="",{toString:Dx}={},{keys:Rx}=Object,ki=a=>{const i=typeof a;if(i!=="object"||!a)return[du,i];const r=Dx.call(a).slice(8,-1);switch(r){case"Array":return[Ai,vl];case"Object":return[uu,vl];case"Date":return[Mc,vl];case"RegExp":return[Oc,vl];case"Map":return[_c,vl];case"Set":return[Lc,vl];case"DataView":return[Ai,r]}return r.includes("Array")?[Ai,r]:r.includes("Error")?[Dy,r]:[uu,r]},nu=([a,i])=>a===du&&(i==="function"||i==="symbol"),Mx=(a,i,r,u)=>{const c=(h,p)=>{const y=u.push(h)-1;return r.set(p,y),y},f=h=>{if(r.has(h))return r.get(h);let[p,y]=ki(h);switch(p){case du:{let g=h;switch(y){case"bigint":p=Ry,g=h.toString();break;case"function":case"symbol":if(a)throw new TypeError("unable to serialize "+y);g=null;break;case"undefined":return c([zy],h)}return c([p,g],h)}case Ai:{if(y){let x=h;return y==="DataView"?x=new Uint8Array(h.buffer):y==="ArrayBuffer"&&(x=new Uint8Array(h)),c([y,[...x]],h)}const g=[],v=c([p,g],h);for(const x of h)g.push(f(x));return v}case uu:{if(y)switch(y){case"BigInt":return c([y,h.toString()],h);case"Boolean":case"Number":case"String":return c([y,h.valueOf()],h)}if(i&&"toJSON"in h)return f(h.toJSON());const g=[],v=c([p,g],h);for(const x of Rx(h))(a||!nu(ki(h[x])))&&g.push([f(x),f(h[x])]);return v}case Mc:return c([p,h.toISOString()],h);case Oc:{const{source:g,flags:v}=h;return c([p,{source:g,flags:v}],h)}case _c:{const g=[],v=c([p,g],h);for(const[x,S]of h)(a||!(nu(ki(x))||nu(ki(S))))&&g.push([f(x),f(S)]);return v}case Lc:{const g=[],v=c([p,g],h);for(const x of h)(a||!nu(ki(x)))&&g.push(f(x));return v}}const{message:m}=h;return c([p,{name:y,message:m}],h)};return f},xp=(a,{json:i,lossy:r}={})=>{const u=[];return Mx(!(i||r),!!i,new Map,u)(a),u},ou=typeof structuredClone=="function"?(a,i)=>i&&("json"in i||"lossy"in i)?wp(xp(a,i)):structuredClone(a):(a,i)=>wp(xp(a,i));function Ox(a,i){const r=[{type:"text",value:"↩"}];return i>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(i)}]}),r}function _x(a,i){return"Back to reference "+(a+1)+(i>1?"-"+i:"")}function Lx(a){const i=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",r=a.options.footnoteBackContent||Ox,u=a.options.footnoteBackLabel||_x,c=a.options.footnoteLabel||"Footnotes",f=a.options.footnoteLabelTagName||"h2",h=a.options.footnoteLabelProperties||{className:["sr-only"]},p=[];let y=-1;for(;++y<a.footnoteOrder.length;){const m=a.footnoteById.get(a.footnoteOrder[y]);if(!m)continue;const g=a.all(m),v=String(m.identifier).toUpperCase(),x=kl(v.toLowerCase());let S=0;const U=[],L=a.footnoteCounts.get(v);for(;L!==void 0&&++S<=L;){U.length>0&&U.push({type:"text",value:" "});let X=typeof r=="string"?r:r(y,S);typeof X=="string"&&(X={type:"text",value:X}),U.push({type:"element",tagName:"a",properties:{href:"#"+i+"fnref-"+x+(S>1?"-"+S:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(y,S),className:["data-footnote-backref"]},children:Array.isArray(X)?X:[X]})}const B=g[g.length-1];if(B&&B.type==="element"&&B.tagName==="p"){const X=B.children[B.children.length-1];X&&X.type==="text"?X.value+=" ":B.children.push({type:"text",value:" "}),B.children.push(...U)}else g.push(...U);const O={type:"element",tagName:"li",properties:{id:i+"fn-"+x},children:a.wrap(g,!0)};a.patch(m,O),p.push(O)}if(p.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:f,properties:{...ou(h),id:"footnote-label"},children:[{type:"text",value:c}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:a.wrap(p,!0)},{type:"text",value:`
`}]}}const My=(function(a){if(a==null)return Hx;if(typeof a=="function")return mu(a);if(typeof a=="object")return Array.isArray(a)?Nx(a):Ux(a);if(typeof a=="string")return Bx(a);throw new Error("Expected function, string, or object as test")});function Nx(a){const i=[];let r=-1;for(;++r<a.length;)i[r]=My(a[r]);return mu(u);function u(...c){let f=-1;for(;++f<i.length;)if(i[f].apply(this,c))return!0;return!1}}function Ux(a){const i=a;return mu(r);function r(u){const c=u;let f;for(f in a)if(c[f]!==i[f])return!1;return!0}}function Bx(a){return mu(i);function i(r){return r&&r.type===a}}function mu(a){return i;function i(r,u,c){return!!(qx(r)&&a.call(this,r,typeof u=="number"?u:void 0,c||void 0))}}function Hx(){return!0}function qx(a){return a!==null&&typeof a=="object"&&"type"in a}const Oy=[],jx=!0,Tp=!1,Ix="skip";function Yx(a,i,r,u){let c;typeof i=="function"&&typeof r!="function"?(u=r,r=i):c=i;const f=My(c),h=u?-1:1;p(a,void 0,[])();function p(y,m,g){const v=y&&typeof y=="object"?y:{};if(typeof v.type=="string"){const S=typeof v.tagName=="string"?v.tagName:typeof v.name=="string"?v.name:void 0;Object.defineProperty(x,"name",{value:"node ("+(y.type+(S?"<"+S+">":""))+")"})}return x;function x(){let S=Oy,U,L,B;if((!i||f(y,m,g[g.length-1]||void 0))&&(S=Gx(r(y,g)),S[0]===Tp))return S;if("children"in y&&y.children){const O=y;if(O.children&&S[0]!==Ix)for(L=(u?O.children.length:-1)+h,B=g.concat(O);L>-1&&L<O.children.length;){const X=O.children[L];if(U=p(X,L,B)(),U[0]===Tp)return U;L=typeof U[1]=="number"?U[1]:L+h}}return S}}}function Gx(a){return Array.isArray(a)?a:typeof a=="number"?[jx,a]:a==null?Oy:[a]}function _y(a,i,r,u){let c,f,h;typeof i=="function"&&typeof r!="function"?(f=void 0,h=i,c=r):(f=i,h=r,c=u),Yx(a,f,p,c);function p(y,m){const g=m[m.length-1],v=g?g.children.indexOf(y):void 0;return h(y,v,g)}}const cc={}.hasOwnProperty,Vx={};function Xx(a,i){const r=i||Vx,u=new Map,c=new Map,f=new Map,h={...Ax,...r.handlers},p={all:m,applyData:Fx,definitionById:u,footnoteById:c,footnoteCounts:f,footnoteOrder:[],handlers:h,one:y,options:r,patch:Qx,wrap:Zx};return _y(a,function(g){if(g.type==="definition"||g.type==="footnoteDefinition"){const v=g.type==="definition"?u:c,x=String(g.identifier).toUpperCase();v.has(x)||v.set(x,g)}}),p;function y(g,v){const x=g.type,S=p.handlers[x];if(cc.call(p.handlers,x)&&S)return S(p,g,v);if(p.options.passThrough&&p.options.passThrough.includes(x)){if("children"in g){const{children:L,...B}=g,O=ou(B);return O.children=p.all(g),O}return ou(g)}return(p.options.unknownHandler||Wx)(p,g,v)}function m(g){const v=[];if("children"in g){const x=g.children;let S=-1;for(;++S<x.length;){const U=p.one(x[S],g);if(U){if(S&&x[S-1].type==="break"&&(!Array.isArray(U)&&U.type==="text"&&(U.value=kp(U.value)),!Array.isArray(U)&&U.type==="element")){const L=U.children[0];L&&L.type==="text"&&(L.value=kp(L.value))}Array.isArray(U)?v.push(...U):v.push(U)}}}return v}}function Qx(a,i){a.position&&(i.position=D1(a))}function Fx(a,i){let r=i;if(a&&a.data){const u=a.data.hName,c=a.data.hChildren,f=a.data.hProperties;if(typeof u=="string")if(r.type==="element")r.tagName=u;else{const h="children"in r?r.children:[r];r={type:"element",tagName:u,properties:{},children:h}}r.type==="element"&&f&&Object.assign(r.properties,ou(f)),"children"in r&&r.children&&c!==null&&c!==void 0&&(r.children=c)}return r}function Wx(a,i){const r=i.data||{},u="value"in i&&!(cc.call(r,"hProperties")||cc.call(r,"hChildren"))?{type:"text",value:i.value}:{type:"element",tagName:"div",properties:{},children:a.all(i)};return a.patch(i,u),a.applyData(i,u)}function Zx(a,i){const r=[];let u=-1;for(i&&r.push({type:"text",value:`
`});++u<a.length;)u&&r.push({type:"text",value:`
`}),r.push(a[u]);return i&&a.length>0&&r.push({type:"text",value:`
`}),r}function kp(a){let i=0,r=a.charCodeAt(i);for(;r===9||r===32;)i++,r=a.charCodeAt(i);return a.slice(i)}function Ep(a,i){const r=Xx(a,i),u=r.one(a,void 0),c=Lx(r),f=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return c&&f.children.push({type:"text",value:`
`},c),f}function Kx(a,i){return a&&"run"in a?async function(r,u){const c=Ep(r,{file:u,...i});await a.run(c,u)}:function(r,u){return Ep(r,{file:u,...a||i})}}function Cp(a){if(a)throw a}var Qs,Ap;function Jx(){if(Ap)return Qs;Ap=1;var a=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c=function(m){return typeof Array.isArray=="function"?Array.isArray(m):i.call(m)==="[object Array]"},f=function(m){if(!m||i.call(m)!=="[object Object]")return!1;var g=a.call(m,"constructor"),v=m.constructor&&m.constructor.prototype&&a.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!g&&!v)return!1;var x;for(x in m);return typeof x>"u"||a.call(m,x)},h=function(m,g){r&&g.name==="__proto__"?r(m,g.name,{enumerable:!0,configurable:!0,value:g.newValue,writable:!0}):m[g.name]=g.newValue},p=function(m,g){if(g==="__proto__")if(a.call(m,g)){if(u)return u(m,g).value}else return;return m[g]};return Qs=function y(){var m,g,v,x,S,U,L=arguments[0],B=1,O=arguments.length,X=!1;for(typeof L=="boolean"&&(X=L,L=arguments[1]||{},B=2),(L==null||typeof L!="object"&&typeof L!="function")&&(L={});B<O;++B)if(m=arguments[B],m!=null)for(g in m)v=p(L,g),x=p(m,g),L!==x&&(X&&x&&(f(x)||(S=c(x)))?(S?(S=!1,U=v&&c(v)?v:[]):U=v&&f(v)?v:{},h(L,{name:g,newValue:y(X,U,x)})):typeof x<"u"&&h(L,{name:g,newValue:x}));return L},Qs}var Px=Jx();const Fs=su(Px);function fc(a){if(typeof a!="object"||a===null)return!1;const i=Object.getPrototypeOf(a);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function $x(){const a=[],i={run:r,use:u};return i;function r(...c){let f=-1;const h=c.pop();if(typeof h!="function")throw new TypeError("Expected function as last argument, not "+h);p(null,...c);function p(y,...m){const g=a[++f];let v=-1;if(y){h(y);return}for(;++v<c.length;)(m[v]===null||m[v]===void 0)&&(m[v]=c[v]);c=m,g?eT(g,p)(...m):h(null,...m)}}function u(c){if(typeof c!="function")throw new TypeError("Expected `middelware` to be a function, not "+c);return a.push(c),i}}function eT(a,i){let r;return u;function u(...h){const p=a.length>h.length;let y;p&&h.push(c);try{y=a.apply(this,h)}catch(m){const g=m;if(p&&r)throw g;return c(g)}p||(y&&y.then&&typeof y.then=="function"?y.then(f,c):y instanceof Error?c(y):f(y))}function c(h,...p){r||(r=!0,i(h,...p))}function f(h){c(null,h)}}const st={basename:nT,dirname:tT,extname:aT,join:lT,sep:"/"};function nT(a,i){if(i!==void 0&&typeof i!="string")throw new TypeError('"ext" argument must be a string');_i(a);let r=0,u=-1,c=a.length,f;if(i===void 0||i.length===0||i.length>a.length){for(;c--;)if(a.codePointAt(c)===47){if(f){r=c+1;break}}else u<0&&(f=!0,u=c+1);return u<0?"":a.slice(r,u)}if(i===a)return"";let h=-1,p=i.length-1;for(;c--;)if(a.codePointAt(c)===47){if(f){r=c+1;break}}else h<0&&(f=!0,h=c+1),p>-1&&(a.codePointAt(c)===i.codePointAt(p--)?p<0&&(u=c):(p=-1,u=h));return r===u?u=h:u<0&&(u=a.length),a.slice(r,u)}function tT(a){if(_i(a),a.length===0)return".";let i=-1,r=a.length,u;for(;--r;)if(a.codePointAt(r)===47){if(u){i=r;break}}else u||(u=!0);return i<0?a.codePointAt(0)===47?"/":".":i===1&&a.codePointAt(0)===47?"//":a.slice(0,i)}function aT(a){_i(a);let i=a.length,r=-1,u=0,c=-1,f=0,h;for(;i--;){const p=a.codePointAt(i);if(p===47){if(h){u=i+1;break}continue}r<0&&(h=!0,r=i+1),p===46?c<0?c=i:f!==1&&(f=1):c>-1&&(f=-1)}return c<0||r<0||f===0||f===1&&c===r-1&&c===u+1?"":a.slice(c,r)}function lT(...a){let i=-1,r;for(;++i<a.length;)_i(a[i]),a[i]&&(r=r===void 0?a[i]:r+"/"+a[i]);return r===void 0?".":iT(r)}function iT(a){_i(a);const i=a.codePointAt(0)===47;let r=rT(a,!i);return r.length===0&&!i&&(r="."),r.length>0&&a.codePointAt(a.length-1)===47&&(r+="/"),i?"/"+r:r}function rT(a,i){let r="",u=0,c=-1,f=0,h=-1,p,y;for(;++h<=a.length;){if(h<a.length)p=a.codePointAt(h);else{if(p===47)break;p=47}if(p===47){if(!(c===h-1||f===1))if(c!==h-1&&f===2){if(r.length<2||u!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(y=r.lastIndexOf("/"),y!==r.length-1){y<0?(r="",u=0):(r=r.slice(0,y),u=r.length-1-r.lastIndexOf("/")),c=h,f=0;continue}}else if(r.length>0){r="",u=0,c=h,f=0;continue}}i&&(r=r.length>0?r+"/..":"..",u=2)}else r.length>0?r+="/"+a.slice(c+1,h):r=a.slice(c+1,h),u=h-c-1;c=h,f=0}else p===46&&f>-1?f++:f=-1}return r}function _i(a){if(typeof a!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(a))}const uT={cwd:oT};function oT(){return"/"}function hc(a){return!!(a!==null&&typeof a=="object"&&"href"in a&&a.href&&"protocol"in a&&a.protocol&&a.auth===void 0)}function sT(a){if(typeof a=="string")a=new URL(a);else if(!hc(a)){const i=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+a+"`");throw i.code="ERR_INVALID_ARG_TYPE",i}if(a.protocol!=="file:"){const i=new TypeError("The URL must be of scheme file");throw i.code="ERR_INVALID_URL_SCHEME",i}return cT(a)}function cT(a){if(a.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const i=a.pathname;let r=-1;for(;++r<i.length;)if(i.codePointAt(r)===37&&i.codePointAt(r+1)===50){const u=i.codePointAt(r+2);if(u===70||u===102){const c=new TypeError("File URL path must not include encoded / characters");throw c.code="ERR_INVALID_FILE_URL_PATH",c}}return decodeURIComponent(i)}const Ws=["history","path","basename","stem","extname","dirname"];class Ly{constructor(i){let r;i?hc(i)?r={path:i}:typeof i=="string"||fT(i)?r={value:i}:r=i:r={},this.cwd="cwd"in r?"":uT.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Ws.length;){const f=Ws[u];f in r&&r[f]!==void 0&&r[f]!==null&&(this[f]=f==="history"?[...r[f]]:r[f])}let c;for(c in r)Ws.includes(c)||(this[c]=r[c])}get basename(){return typeof this.path=="string"?st.basename(this.path):void 0}set basename(i){Ks(i,"basename"),Zs(i,"basename"),this.path=st.join(this.dirname||"",i)}get dirname(){return typeof this.path=="string"?st.dirname(this.path):void 0}set dirname(i){zp(this.basename,"dirname"),this.path=st.join(i||"",this.basename)}get extname(){return typeof this.path=="string"?st.extname(this.path):void 0}set extname(i){if(Zs(i,"extname"),zp(this.dirname,"extname"),i){if(i.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(i.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=st.join(this.dirname,this.stem+(i||""))}get path(){return this.history[this.history.length-1]}set path(i){hc(i)&&(i=sT(i)),Ks(i,"path"),this.path!==i&&this.history.push(i)}get stem(){return typeof this.path=="string"?st.basename(this.path,this.extname):void 0}set stem(i){Ks(i,"stem"),Zs(i,"stem"),this.path=st.join(this.dirname||"",i+(this.extname||""))}fail(i,r,u){const c=this.message(i,r,u);throw c.fatal=!0,c}info(i,r,u){const c=this.message(i,r,u);return c.fatal=void 0,c}message(i,r,u){const c=new pn(i,r,u);return this.path&&(c.name=this.path+":"+c.name,c.file=this.path),c.fatal=!1,this.messages.push(c),c}toString(i){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(i||void 0).decode(this.value)}}function Zs(a,i){if(a&&a.includes(st.sep))throw new Error("`"+i+"` cannot be a path: did not expect `"+st.sep+"`")}function Ks(a,i){if(!a)throw new Error("`"+i+"` cannot be empty")}function zp(a,i){if(!a)throw new Error("Setting `"+i+"` requires `path` to be set too")}function fT(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const hT=(function(a){const u=this.constructor.prototype,c=u[a],f=function(){return c.apply(f,arguments)};return Object.setPrototypeOf(f,u),f}),dT={}.hasOwnProperty;class Nc extends hT{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=$x()}copy(){const i=new Nc;let r=-1;for(;++r<this.attachers.length;){const u=this.attachers[r];i.use(...u)}return i.data(Fs(!0,{},this.namespace)),i}data(i,r){return typeof i=="string"?arguments.length===2?($s("data",this.frozen),this.namespace[i]=r,this):dT.call(this.namespace,i)&&this.namespace[i]||void 0:i?($s("data",this.frozen),this.namespace=i,this):this.namespace}freeze(){if(this.frozen)return this;const i=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const c=r.call(i,...u);typeof c=="function"&&this.transformers.use(c)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(i){this.freeze();const r=tu(i),u=this.parser||this.Parser;return Js("parse",u),u(String(r),r)}process(i,r){const u=this;return this.freeze(),Js("process",this.parser||this.Parser),Ps("process",this.compiler||this.Compiler),r?c(void 0,r):new Promise(c);function c(f,h){const p=tu(i),y=u.parse(p);u.run(y,p,function(g,v,x){if(g||!v||!x)return m(g);const S=v,U=u.stringify(S,x);yT(U)?x.value=U:x.result=U,m(g,x)});function m(g,v){g||!v?h(g):f?f(v):r(void 0,v)}}}processSync(i){let r=!1,u;return this.freeze(),Js("processSync",this.parser||this.Parser),Ps("processSync",this.compiler||this.Compiler),this.process(i,c),Rp("processSync","process",r),u;function c(f,h){r=!0,Cp(f),u=h}}run(i,r,u){Dp(i),this.freeze();const c=this.transformers;return!u&&typeof r=="function"&&(u=r,r=void 0),u?f(void 0,u):new Promise(f);function f(h,p){const y=tu(r);c.run(i,y,m);function m(g,v,x){const S=v||i;g?p(g):h?h(S):u(void 0,S,x)}}}runSync(i,r){let u=!1,c;return this.run(i,r,f),Rp("runSync","run",u),c;function f(h,p){Cp(h),c=p,u=!0}}stringify(i,r){this.freeze();const u=tu(r),c=this.compiler||this.Compiler;return Ps("stringify",c),Dp(i),c(i,u)}use(i,...r){const u=this.attachers,c=this.namespace;if($s("use",this.frozen),i!=null)if(typeof i=="function")y(i,r);else if(typeof i=="object")Array.isArray(i)?p(i):h(i);else throw new TypeError("Expected usable value, not `"+i+"`");return this;function f(m){if(typeof m=="function")y(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[g,...v]=m;y(g,v)}else h(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function h(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");p(m.plugins),m.settings&&(c.settings=Fs(!0,c.settings,m.settings))}function p(m){let g=-1;if(m!=null)if(Array.isArray(m))for(;++g<m.length;){const v=m[g];f(v)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function y(m,g){let v=-1,x=-1;for(;++v<u.length;)if(u[v][0]===m){x=v;break}if(x===-1)u.push([m,...g]);else if(g.length>0){let[S,...U]=g;const L=u[x][1];fc(L)&&fc(S)&&(S=Fs(!0,L,S)),u[x]=[m,S,...U]}}}}const mT=new Nc().freeze();function Js(a,i){if(typeof i!="function")throw new TypeError("Cannot `"+a+"` without `parser`")}function Ps(a,i){if(typeof i!="function")throw new TypeError("Cannot `"+a+"` without `compiler`")}function $s(a,i){if(i)throw new Error("Cannot call `"+a+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Dp(a){if(!fc(a)||typeof a.type!="string")throw new TypeError("Expected node, got `"+a+"`")}function Rp(a,i,r){if(!r)throw new Error("`"+a+"` finished async. Use `"+i+"` instead")}function tu(a){return pT(a)?a:new Ly(a)}function pT(a){return!!(a&&typeof a=="object"&&"message"in a&&"messages"in a)}function yT(a){return typeof a=="string"||gT(a)}function gT(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const vT="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Mp=[],Op={allowDangerousHtml:!0},bT=/^(https?|ircs?|mailto|xmpp)$/i,ST=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function wT(a){const i=xT(a),r=TT(a);return kT(i.runSync(i.parse(r),r),a)}function xT(a){const i=a.rehypePlugins||Mp,r=a.remarkPlugins||Mp,u=a.remarkRehypeOptions?{...a.remarkRehypeOptions,...Op}:Op;return mT().use(nx).use(r).use(Kx,u).use(i)}function TT(a){const i=a.children||"",r=new Ly;return typeof i=="string"&&(r.value=i),r}function kT(a,i){const r=i.allowedElements,u=i.allowElement,c=i.components,f=i.disallowedElements,h=i.skipHtml,p=i.unwrapDisallowed,y=i.urlTransform||ET;for(const g of ST)Object.hasOwn(i,g.from)&&(""+g.from+(g.to?"use `"+g.to+"` instead":"remove it")+vT+g.id,void 0);return _y(a,m),L1(a,{Fragment:on.Fragment,components:c,ignoreInvalidStyle:!0,jsx:on.jsx,jsxs:on.jsxs,passKeys:!0,passNode:!0});function m(g,v,x){if(g.type==="raw"&&x&&typeof v=="number")return h?x.children.splice(v,1):x.children[v]={type:"text",value:g.value},v;if(g.type==="element"){let S;for(S in Gs)if(Object.hasOwn(Gs,S)&&Object.hasOwn(g.properties,S)){const U=g.properties[S],L=Gs[S];(L===null||L.includes(g.tagName))&&(g.properties[S]=y(String(U||""),S,g))}}if(g.type==="element"){let S=r?!r.includes(g.tagName):f?f.includes(g.tagName):!1;if(!S&&u&&typeof v=="number"&&(S=!u(g,v,x)),S&&x&&typeof v=="number")return p&&g.children?x.children.splice(v,1,...g.children):x.children.splice(v,1),v}}}function ET(a){const i=a.indexOf(":"),r=a.indexOf("?"),u=a.indexOf("#"),c=a.indexOf("/");return i===-1||c!==-1&&i>c||r!==-1&&i>r||u!==-1&&i>u||bT.test(a.slice(0,i))?a:""}function CT(){const{slug:a}=Gb(),i=wc.find(r=>r.slug===a);return i?on.jsx("div",{className:"markdown",children:on.jsx(wT,{children:i.content})}):on.jsx("div",{children:"Document not found"})}function AT(){return on.jsx(DS,{children:on.jsxs("div",{style:{display:"flex",minHeight:"100vh"},children:[on.jsx(i1,{}),on.jsxs(iS,{children:[on.jsx(nc,{path:"/",element:on.jsx(aS,{to:`/docs/${wc[0].slug}`})}),on.jsx(nc,{path:"/docs/:slug",element:on.jsx(CT,{})})]})]})})}rb.createRoot(document.getElementById("root")).render(on.jsx(Pv.StrictMode,{children:on.jsx(AT,{})}));
