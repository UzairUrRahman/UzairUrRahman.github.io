(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();function su(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ds={exports:{}},vi={};var Mm;function Fv(){if(Mm)return vi;Mm=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(u,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var p in c)p!=="key"&&(f[p]=c[p])}else f=c;return c=f.ref,{$$typeof:l,type:u,key:h,ref:c!==void 0?c:null,props:f}}return vi.Fragment=i,vi.jsx=r,vi.jsxs=r,vi}var Lm;function Wv(){return Lm||(Lm=1,Ds.exports=Fv()),Ds.exports}var ut=Wv(),Os={exports:{}},me={};var Nm;function Jv(){if(Nm)return me;Nm=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),w=Symbol.iterator;function S(k){return k===null||typeof k!="object"?null:(k=w&&k[w]||k["@@iterator"],typeof k=="function"?k:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,H={};function O(k,j,x){this.props=k,this.context=j,this.refs=H,this.updater=x||U}O.prototype.isReactComponent={},O.prototype.setState=function(k,j){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,j,"setState")},O.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function Q(){}Q.prototype=O.prototype;function V(k,j,x){this.props=k,this.context=j,this.refs=H,this.updater=x||U}var re=V.prototype=new Q;re.constructor=V,L(re,O.prototype),re.isPureReactComponent=!0;var ue=Array.isArray;function B(){}var W={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function fe(k,j,x){var J=x.ref;return{$$typeof:l,type:k,key:j,ref:J!==void 0?J:null,props:x}}function ye(k,j){return fe(k.type,j,k.props)}function ee(k){return typeof k=="object"&&k!==null&&k.$$typeof===l}function P(k){var j={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(x){return j[x]})}var Ae=/\/+/g;function le(k,j){return typeof k=="object"&&k!==null&&k.key!=null?P(""+k.key):j.toString(36)}function K(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(B,B):(k.status="pending",k.then(function(j){k.status==="pending"&&(k.status="fulfilled",k.value=j)},function(j){k.status==="pending"&&(k.status="rejected",k.reason=j)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function D(k,j,x,J,se){var ae=typeof k;(ae==="undefined"||ae==="boolean")&&(k=null);var Ee=!1;if(k===null)Ee=!0;else switch(ae){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(k.$$typeof){case l:case i:Ee=!0;break;case g:return Ee=k._init,D(Ee(k._payload),j,x,J,se)}}if(Ee)return se=se(k),Ee=J===""?"."+le(k,0):J,ue(se)?(x="",Ee!=null&&(x=Ee.replace(Ae,"$&/")+"/"),D(se,j,x,"",function(Yt){return Yt})):se!=null&&(ee(se)&&(se=ye(se,x+(se.key==null||k&&k.key===se.key?"":(""+se.key).replace(Ae,"$&/")+"/")+Ee)),j.push(se)),1;Ee=0;var Qe=J===""?".":J+":";if(ue(k))for(var Ne=0;Ne<k.length;Ne++)J=k[Ne],ae=Qe+le(J,Ne),Ee+=D(J,j,x,ae,se);else if(Ne=S(k),typeof Ne=="function")for(k=Ne.call(k),Ne=0;!(J=k.next()).done;)J=J.value,ae=Qe+le(J,Ne++),Ee+=D(J,j,x,ae,se);else if(ae==="object"){if(typeof k.then=="function")return D(K(k),j,x,J,se);throw j=String(k),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function X(k,j,x){if(k==null)return k;var J=[],se=0;return D(k,J,"","",function(ae){return j.call(x,ae,se++)}),J}function ne(k){if(k._status===-1){var j=k._result;j=j(),j.then(function(x){(k._status===0||k._status===-1)&&(k._status=1,k._result=x)},function(x){(k._status===0||k._status===-1)&&(k._status=2,k._result=x)}),k._status===-1&&(k._status=0,k._result=j)}if(k._status===1)return k._result.default;throw k._result}var be=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},E={map:X,forEach:function(k,j,x){X(k,function(){j.apply(this,arguments)},x)},count:function(k){var j=0;return X(k,function(){j++}),j},toArray:function(k){return X(k,function(j){return j})||[]},only:function(k){if(!ee(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return me.Activity=v,me.Children=E,me.Component=O,me.Fragment=r,me.Profiler=c,me.PureComponent=V,me.StrictMode=u,me.Suspense=y,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,me.__COMPILER_RUNTIME={__proto__:null,c:function(k){return W.H.useMemoCache(k)}},me.cache=function(k){return function(){return k.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(k,j,x){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var J=L({},k.props),se=k.key;if(j!=null)for(ae in j.key!==void 0&&(se=""+j.key),j)!ce.call(j,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&j.ref===void 0||(J[ae]=j[ae]);var ae=arguments.length-2;if(ae===1)J.children=x;else if(1<ae){for(var Ee=Array(ae),Qe=0;Qe<ae;Qe++)Ee[Qe]=arguments[Qe+2];J.children=Ee}return fe(k.type,se,J)},me.createContext=function(k){return k={$$typeof:h,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:f,_context:k},k},me.createElement=function(k,j,x){var J,se={},ae=null;if(j!=null)for(J in j.key!==void 0&&(ae=""+j.key),j)ce.call(j,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(se[J]=j[J]);var Ee=arguments.length-2;if(Ee===1)se.children=x;else if(1<Ee){for(var Qe=Array(Ee),Ne=0;Ne<Ee;Ne++)Qe[Ne]=arguments[Ne+2];se.children=Qe}if(k&&k.defaultProps)for(J in Ee=k.defaultProps,Ee)se[J]===void 0&&(se[J]=Ee[J]);return fe(k,ae,se)},me.createRef=function(){return{current:null}},me.forwardRef=function(k){return{$$typeof:p,render:k}},me.isValidElement=ee,me.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:ne}},me.memo=function(k,j){return{$$typeof:m,type:k,compare:j===void 0?null:j}},me.startTransition=function(k){var j=W.T,x={};W.T=x;try{var J=k(),se=W.S;se!==null&&se(x,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(B,be)}catch(ae){be(ae)}finally{j!==null&&x.types!==null&&(j.types=x.types),W.T=j}},me.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},me.use=function(k){return W.H.use(k)},me.useActionState=function(k,j,x){return W.H.useActionState(k,j,x)},me.useCallback=function(k,j){return W.H.useCallback(k,j)},me.useContext=function(k){return W.H.useContext(k)},me.useDebugValue=function(){},me.useDeferredValue=function(k,j){return W.H.useDeferredValue(k,j)},me.useEffect=function(k,j){return W.H.useEffect(k,j)},me.useEffectEvent=function(k){return W.H.useEffectEvent(k)},me.useId=function(){return W.H.useId()},me.useImperativeHandle=function(k,j,x){return W.H.useImperativeHandle(k,j,x)},me.useInsertionEffect=function(k,j){return W.H.useInsertionEffect(k,j)},me.useLayoutEffect=function(k,j){return W.H.useLayoutEffect(k,j)},me.useMemo=function(k,j){return W.H.useMemo(k,j)},me.useOptimistic=function(k,j){return W.H.useOptimistic(k,j)},me.useReducer=function(k,j,x){return W.H.useReducer(k,j,x)},me.useRef=function(k){return W.H.useRef(k)},me.useState=function(k){return W.H.useState(k)},me.useSyncExternalStore=function(k,j,x){return W.H.useSyncExternalStore(k,j,x)},me.useTransition=function(){return W.H.useTransition()},me.version="19.2.3",me}var Um;function dc(){return Um||(Um=1,Os.exports=Jv()),Os.exports}var Y=dc();const Pv=su(Y);var Ms={exports:{}},bi={},Ls={exports:{}},Ns={};var Hm;function $v(){return Hm||(Hm=1,(function(l){function i(D,X){var ne=D.length;D.push(X);e:for(;0<ne;){var be=ne-1>>>1,E=D[be];if(0<c(E,X))D[be]=X,D[ne]=E,ne=be;else break e}}function r(D){return D.length===0?null:D[0]}function u(D){if(D.length===0)return null;var X=D[0],ne=D.pop();if(ne!==X){D[0]=ne;e:for(var be=0,E=D.length,k=E>>>1;be<k;){var j=2*(be+1)-1,x=D[j],J=j+1,se=D[J];if(0>c(x,ne))J<E&&0>c(se,x)?(D[be]=se,D[J]=ne,be=J):(D[be]=x,D[j]=ne,be=j);else if(J<E&&0>c(se,ne))D[be]=se,D[J]=ne,be=J;else break e}}return X}function c(D,X){var ne=D.sortIndex-X.sortIndex;return ne!==0?ne:D.id-X.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var h=Date,p=h.now();l.unstable_now=function(){return h.now()-p}}var y=[],m=[],g=1,v=null,w=3,S=!1,U=!1,L=!1,H=!1,O=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function re(D){for(var X=r(m);X!==null;){if(X.callback===null)u(m);else if(X.startTime<=D)u(m),X.sortIndex=X.expirationTime,i(y,X);else break;X=r(m)}}function ue(D){if(L=!1,re(D),!U)if(r(y)!==null)U=!0,B||(B=!0,P());else{var X=r(m);X!==null&&K(ue,X.startTime-D)}}var B=!1,W=-1,ce=5,fe=-1;function ye(){return H?!0:!(l.unstable_now()-fe<ce)}function ee(){if(H=!1,B){var D=l.unstable_now();fe=D;var X=!0;try{e:{U=!1,L&&(L=!1,Q(W),W=-1),S=!0;var ne=w;try{t:{for(re(D),v=r(y);v!==null&&!(v.expirationTime>D&&ye());){var be=v.callback;if(typeof be=="function"){v.callback=null,w=v.priorityLevel;var E=be(v.expirationTime<=D);if(D=l.unstable_now(),typeof E=="function"){v.callback=E,re(D),X=!0;break t}v===r(y)&&u(y),re(D)}else u(y);v=r(y)}if(v!==null)X=!0;else{var k=r(m);k!==null&&K(ue,k.startTime-D),X=!1}}break e}finally{v=null,w=ne,S=!1}X=void 0}}finally{X?P():B=!1}}}var P;if(typeof V=="function")P=function(){V(ee)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,le=Ae.port2;Ae.port1.onmessage=ee,P=function(){le.postMessage(null)}}else P=function(){O(ee,0)};function K(D,X){W=O(function(){D(l.unstable_now())},X)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return w},l.unstable_next=function(D){switch(w){case 1:case 2:case 3:var X=3;break;default:X=w}var ne=w;w=X;try{return D()}finally{w=ne}},l.unstable_requestPaint=function(){H=!0},l.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ne=w;w=D;try{return X()}finally{w=ne}},l.unstable_scheduleCallback=function(D,X,ne){var be=l.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?be+ne:be):ne=be,D){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=ne+E,D={id:g++,callback:X,priorityLevel:D,startTime:ne,expirationTime:E,sortIndex:-1},ne>be?(D.sortIndex=ne,i(m,D),r(y)===null&&D===r(m)&&(L?(Q(W),W=-1):L=!0,K(ue,ne-be))):(D.sortIndex=E,i(y,D),U||S||(U=!0,B||(B=!0,P()))),D},l.unstable_shouldYield=ye,l.unstable_wrapCallback=function(D){var X=w;return function(){var ne=w;w=X;try{return D.apply(this,arguments)}finally{w=ne}}}})(Ns)),Ns}var Bm;function eb(){return Bm||(Bm=1,Ls.exports=$v()),Ls.exports}var Us={exports:{}},dt={};var jm;function tb(){if(jm)return dt;jm=1;var l=dc();function i(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var u={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(y,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:y,containerInfo:m,implementation:g}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,dt.createPortal=function(y,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return f(y,m,null,g)},dt.flushSync=function(y){var m=h.T,g=u.p;try{if(h.T=null,u.p=2,y)return y()}finally{h.T=m,u.p=g,u.d.f()}},dt.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(y,m))},dt.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},dt.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var g=m.as,v=p(g,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?u.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):g==="script"&&u.d.X(y,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},dt.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=p(m.as,m.crossOrigin);u.d.M(y,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(y)},dt.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=p(g,m.crossOrigin);u.d.L(y,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},dt.preloadModule=function(y,m){if(typeof y=="string")if(m){var g=p(m.as,m.crossOrigin);u.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(y)},dt.requestFormReset=function(y){u.d.r(y)},dt.unstable_batchedUpdates=function(y,m){return y(m)},dt.useFormState=function(y,m,g){return h.H.useFormState(y,m,g)},dt.useFormStatus=function(){return h.H.useHostTransitionStatus()},dt.version="19.2.3",dt}var qm;function nb(){if(qm)return Us.exports;qm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Us.exports=tb(),Us.exports}var Ym;function lb(){if(Ym)return bi;Ym=1;var l=eb(),i=dc(),r=nb();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(u(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return y(o),e;if(s===a)return y(o),t;s=s.sibling}throw Error(u(188))}if(n.return!==a.return)n=o,a=s;else{for(var d=!1,b=o.child;b;){if(b===n){d=!0,n=o,a=s;break}if(b===a){d=!0,a=o,n=s;break}b=b.sibling}if(!d){for(b=s.child;b;){if(b===n){d=!0,n=s,a=o;break}if(b===a){d=!0,a=s,n=o;break}b=b.sibling}if(!d)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),V=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case O:return"Profiler";case H:return"StrictMode";case ue:return"Suspense";case B:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case V:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var K=Array.isArray,D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},be=[],E=-1;function k(e){return{current:e}}function j(e){0>E||(e.current=be[E],be[E]=null,E--)}function x(e,t){E++,be[E]=e.current,e.current=t}var J=k(null),se=k(null),ae=k(null),Ee=k(null);function Qe(e,t){switch(x(ae,t),x(se,e),x(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?nm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=nm(t),e=lm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(J),x(J,e)}function Ne(){j(J),j(se),j(ae)}function Yt(e){e.memoizedState!==null&&x(Ee,e);var t=J.current,n=lm(t,e.type);t!==n&&(x(se,e),x(J,n))}function hn(e){se.current===e&&(j(J),j(se)),Ee.current===e&&(j(Ee),mi._currentValue=ne)}var ka,Li;function dn(e){if(ka===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ka=t&&t[1]||"",Li=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ka+e+Li}var Rl=!1;function _l(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(M){var _=M}Reflect.construct(e,[],I)}else{try{I.call()}catch(M){_=M}e.call(I.prototype)}}else{try{throw Error()}catch(M){_=M}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(M){if(M&&_&&typeof M.stack=="string")return[M.stack,_.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),d=s[0],b=s[1];if(d&&b){var T=d.split(`
`),R=b.split(`
`);for(o=a=0;a<T.length&&!T[a].includes("DetermineComponentFrameRoot");)a++;for(;o<R.length&&!R[o].includes("DetermineComponentFrameRoot");)o++;if(a===T.length||o===R.length)for(a=T.length-1,o=R.length-1;1<=a&&0<=o&&T[a]!==R[o];)o--;for(;1<=a&&0<=o;a--,o--)if(T[a]!==R[o]){if(a!==1||o!==1)do if(a--,o--,0>o||T[a]!==R[o]){var N=`
`+T[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=o);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?dn(n):""}function Ni(e,t){switch(e.tag){case 26:case 27:case 5:return dn(e.type);case 16:return dn("Lazy");case 13:return e.child!==t&&t!==null?dn("Suspense Fallback"):dn("Suspense");case 19:return dn("SuspenseList");case 0:case 15:return _l(e.type,!1);case 11:return _l(e.type.render,!1);case 1:return _l(e.type,!0);case 31:return dn("Activity");default:return""}}function Ui(e){try{var t="",n=null;do t+=Ni(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Dl=Object.prototype.hasOwnProperty,Ol=l.unstable_scheduleCallback,Ca=l.unstable_cancelCallback,pu=l.unstable_shouldYield,yu=l.unstable_requestPaint,pt=l.unstable_now,gu=l.unstable_getCurrentPriorityLevel,q=l.unstable_ImmediatePriority,F=l.unstable_UserBlockingPriority,he=l.unstable_NormalPriority,Se=l.unstable_LowPriority,Oe=l.unstable_IdlePriority,Rt=l.log,mn=l.unstable_setDisableYieldValue,yt=null,lt=null;function vt(e){if(typeof Rt=="function"&&mn(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(yt,e)}catch{}}var je=Math.clz32?Math.clz32:Ny,Nn=Math.log,$t=Math.LN2;function Ny(e){return e>>>=0,e===0?32:31-(Nn(e)/$t|0)|0}var Hi=256,Bi=262144,ji=4194304;function sl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var b=a&134217727;return b!==0?(a=b&~s,a!==0?o=sl(a):(d&=b,d!==0?o=sl(d):n||(n=b&~e,n!==0&&(o=sl(n))))):(b=a&~s,b!==0?o=sl(b):d!==0?o=sl(d):n||(n=a&~e,n!==0&&(o=sl(n)))),o===0?0:t!==0&&t!==o&&(t&s)===0&&(s=o&-o,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:o}function Aa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Uy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uc(){var e=ji;return ji<<=1,(ji&62914560)===0&&(ji=4194304),e}function vu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function za(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hy(e,t,n,a,o,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,T=e.expirationTimes,R=e.hiddenUpdates;for(n=d&~n;0<n;){var N=31-je(n),I=1<<N;b[N]=0,T[N]=-1;var _=R[N];if(_!==null)for(R[N]=null,N=0;N<_.length;N++){var M=_[N];M!==null&&(M.lane&=-536870913)}n&=~I}a!==0&&Hc(e,a,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function Hc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-je(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-je(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function jc(e,t){var n=t&-t;return n=(n&42)!==0?1:bu(n),(n&(e.suspendedLanes|t))!==0?0:n}function bu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Su(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qc(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Cm(e.type))}function Yc(e,t){var n=X.p;try{return X.p=e,t()}finally{X.p=n}}var Un=Math.random().toString(36).slice(2),ot="__reactFiber$"+Un,bt="__reactProps$"+Un,Ml="__reactContainer$"+Un,xu="__reactEvents$"+Un,By="__reactListeners$"+Un,jy="__reactHandles$"+Un,Gc="__reactResources$"+Un,Ra="__reactMarker$"+Un;function wu(e){delete e[ot],delete e[bt],delete e[xu],delete e[By],delete e[jy]}function Ll(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ml]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cm(e);e!==null;){if(n=e[ot])return n;e=cm(e)}return t}e=n,n=e.parentNode}return null}function Nl(e){if(e=e[ot]||e[Ml]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _a(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ul(e){var t=e[Gc];return t||(t=e[Gc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function it(e){e[Ra]=!0}var Ic=new Set,Vc={};function cl(e,t){Hl(e,t),Hl(e+"Capture",t)}function Hl(e,t){for(Vc[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var qy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qc={},Xc={};function Yy(e){return Dl.call(Xc,e)?!0:Dl.call(Qc,e)?!1:qy.test(e)?Xc[e]=!0:(Qc[e]=!0,!1)}function Yi(e,t,n){if(Yy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Gi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function pn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gy(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eu(e){if(!e._valueTracker){var t=Zc(e)?"checked":"value";e._valueTracker=Gy(e,t,""+e[t])}}function Kc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Zc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Iy=/[\n"\\]/g;function It(e){return e.replace(Iy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Tu(e,t,n,a,o,s,d,b){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gt(t)):e.value!==""+Gt(t)&&(e.value=""+Gt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?ku(e,d,Gt(t)):n!=null?ku(e,d,Gt(n)):a!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Gt(b):e.removeAttribute("name")}function Fc(e,t,n,a,o,s,d,b){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Eu(e);return}n=n!=null?""+Gt(n):"",t=t!=null?""+Gt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=b?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Eu(e)}function ku(e,t,n){t==="number"&&Ii(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Bl(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Wc(e,t,n){if(t!=null&&(t=""+Gt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Gt(n):""}function Jc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(K(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Gt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Eu(e)}function jl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Vy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function $c(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&Pc(e,o,a)}else for(var s in t)t.hasOwnProperty(s)&&Pc(e,s,t[s])}function Cu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vi(e){return Xy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function yn(){}var Au=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ql=null,Yl=null;function ef(e){var t=Nl(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Tu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+It(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[bt]||null;if(!o)throw Error(u(90));Tu(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Kc(a)}break e;case"textarea":Wc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Bl(e,!!n.multiple,t,!1)}}}var Ru=!1;function tf(e,t,n){if(Ru)return e(t,n);Ru=!0;try{var a=e(t);return a}finally{if(Ru=!1,(ql!==null||Yl!==null)&&(Dr(),ql&&(t=ql,e=Yl,Yl=ql=null,ef(t),e)))for(t=0;t<e.length;t++)ef(e[t])}}function Da(e,t){var n=e.stateNode;if(n===null)return null;var a=n[bt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(gn)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{_u=!1}var Hn=null,Du=null,Qi=null;function nf(){if(Qi)return Qi;var e,t=Du,n=t.length,a,o="value"in Hn?Hn.value:Hn.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===o[s-a];a++);return Qi=o.slice(e,1<a?1-a:void 0)}function Xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function lf(){return!1}function St(e){function t(n,a,o,s,d){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(s):s[b]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zi:lf,this.isPropagationStopped=lf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var fl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=St(fl),Ma=v({},fl,{view:0,detail:0}),Zy=St(Ma),Ou,Mu,La,Fi=v({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==La&&(La&&e.type==="mousemove"?(Ou=e.screenX-La.screenX,Mu=e.screenY-La.screenY):Mu=Ou=0,La=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),af=St(Fi),Ky=v({},Fi,{dataTransfer:0}),Fy=St(Ky),Wy=v({},Ma,{relatedTarget:0}),Lu=St(Wy),Jy=v({},fl,{animationName:0,elapsedTime:0,pseudoElement:0}),Py=St(Jy),$y=v({},fl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eg=St($y),tg=v({},fl,{data:0}),rf=St(tg),ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ig(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ag[e])?!!t[e]:!1}function Nu(){return ig}var rg=v({},Ma,{key:function(e){if(e.key){var t=ng[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?Xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ug=St(rg),og=v({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uf=St(og),sg=v({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),cg=St(sg),fg=v({},fl,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=St(fg),dg=v({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mg=St(dg),pg=v({},fl,{newState:0,oldState:0}),yg=St(pg),gg=[9,13,27,32],Uu=gn&&"CompositionEvent"in window,Na=null;gn&&"documentMode"in document&&(Na=document.documentMode);var vg=gn&&"TextEvent"in window&&!Na,of=gn&&(!Uu||Na&&8<Na&&11>=Na),sf=" ",cf=!1;function ff(e,t){switch(e){case"keyup":return gg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gl=!1;function bg(e,t){switch(e){case"compositionend":return hf(t);case"keypress":return t.which!==32?null:(cf=!0,sf);case"textInput":return e=t.data,e===sf&&cf?null:e;default:return null}}function Sg(e,t){if(Gl)return e==="compositionend"||!Uu&&ff(e,t)?(e=nf(),Qi=Du=Hn=null,Gl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return of&&t.locale!=="ko"?null:t.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function df(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xg[e.type]:t==="textarea"}function mf(e,t,n,a){ql?Yl?Yl.push(a):Yl=[a]:ql=a,t=Br(t,"onChange"),0<t.length&&(n=new Ki("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ua=null,Ha=null;function wg(e){Wd(e,0)}function Wi(e){var t=_a(e);if(Kc(t))return e}function pf(e,t){if(e==="change")return t}var yf=!1;if(gn){var Hu;if(gn){var Bu="oninput"in document;if(!Bu){var gf=document.createElement("div");gf.setAttribute("oninput","return;"),Bu=typeof gf.oninput=="function"}Hu=Bu}else Hu=!1;yf=Hu&&(!document.documentMode||9<document.documentMode)}function vf(){Ua&&(Ua.detachEvent("onpropertychange",bf),Ha=Ua=null)}function bf(e){if(e.propertyName==="value"&&Wi(Ha)){var t=[];mf(t,Ha,e,zu(e)),tf(wg,t)}}function Eg(e,t,n){e==="focusin"?(vf(),Ua=t,Ha=n,Ua.attachEvent("onpropertychange",bf)):e==="focusout"&&vf()}function Tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wi(Ha)}function kg(e,t){if(e==="click")return Wi(t)}function Cg(e,t){if(e==="input"||e==="change")return Wi(t)}function Ag(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:Ag;function Ba(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Dl.call(t,o)||!_t(e[o],t[o]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xf(e,t){var n=Sf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sf(n)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ef(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ii(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ii(e.document)}return t}function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zg=gn&&"documentMode"in document&&11>=document.documentMode,Il=null,qu=null,ja=null,Yu=!1;function Tf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||Il==null||Il!==Ii(a)||(a=Il,"selectionStart"in a&&ju(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ja&&Ba(ja,a)||(ja=a,a=Br(qu,"onSelect"),0<a.length&&(t=new Ki("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Il)))}function hl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vl={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionrun:hl("Transition","TransitionRun"),transitionstart:hl("Transition","TransitionStart"),transitioncancel:hl("Transition","TransitionCancel"),transitionend:hl("Transition","TransitionEnd")},Gu={},kf={};gn&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete Vl.animationend.animation,delete Vl.animationiteration.animation,delete Vl.animationstart.animation),"TransitionEvent"in window||delete Vl.transitionend.transition);function dl(e){if(Gu[e])return Gu[e];if(!Vl[e])return e;var t=Vl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kf)return Gu[e]=t[n];return e}var Cf=dl("animationend"),Af=dl("animationiteration"),zf=dl("animationstart"),Rg=dl("transitionrun"),_g=dl("transitionstart"),Dg=dl("transitioncancel"),Rf=dl("transitionend"),_f=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function en(e,t){_f.set(e,t),cl(t,[e])}var Ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],Ql=0,Vu=0;function Pi(){for(var e=Ql,t=Vu=Ql=0;t<e;){var n=Vt[t];Vt[t++]=null;var a=Vt[t];Vt[t++]=null;var o=Vt[t];Vt[t++]=null;var s=Vt[t];if(Vt[t++]=null,a!==null&&o!==null){var d=a.pending;d===null?o.next=o:(o.next=d.next,d.next=o),a.pending=o}s!==0&&Df(n,o,s)}}function $i(e,t,n,a){Vt[Ql++]=e,Vt[Ql++]=t,Vt[Ql++]=n,Vt[Ql++]=a,Vu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Qu(e,t,n,a){return $i(e,t,n,a),er(e)}function ml(e,t){return $i(e,null,null,t),er(e)}function Df(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,o&&t!==null&&(o=31-je(n),e=s.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),s):null}function er(e){if(50<ui)throw ui=0,ts=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xl={};function Og(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,a){return new Og(e,t,n,a)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Of(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function tr(e,t,n,a,o,s){var d=0;if(a=e,typeof e=="function")Xu(e)&&(d=1);else if(typeof e=="string")d=Hv(e,n,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=Dt(31,n,t,o),e.elementType=fe,e.lanes=s,e;case L:return pl(n.children,o,s,t);case H:d=8,o|=24;break;case O:return e=Dt(12,n,t,o|2),e.elementType=O,e.lanes=s,e;case ue:return e=Dt(13,n,t,o),e.elementType=ue,e.lanes=s,e;case B:return e=Dt(19,n,t,o),e.elementType=B,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:d=10;break e;case Q:d=9;break e;case re:d=11;break e;case W:d=14;break e;case ce:d=16,a=null;break e}d=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Dt(d,n,t,o),t.elementType=e,t.type=a,t.lanes=s,t}function pl(e,t,n,a){return e=Dt(7,e,a,t),e.lanes=n,e}function Zu(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function Mf(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function Ku(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Lf=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var n=Lf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ui(t)},Lf.set(e,t),t)}return{value:e,source:t,stack:Ui(t)}}var Zl=[],Kl=0,nr=null,qa=0,Xt=[],Zt=0,Bn=null,an=1,rn="";function bn(e,t){Zl[Kl++]=qa,Zl[Kl++]=nr,nr=e,qa=t}function Nf(e,t,n){Xt[Zt++]=an,Xt[Zt++]=rn,Xt[Zt++]=Bn,Bn=e;var a=an;e=rn;var o=32-je(a)-1;a&=~(1<<o),n+=1;var s=32-je(t)+o;if(30<s){var d=o-o%5;s=(a&(1<<d)-1).toString(32),a>>=d,o-=d,an=1<<32-je(t)+o|n<<o|a,rn=s+e}else an=1<<s|n<<o|a,rn=e}function Fu(e){e.return!==null&&(bn(e,1),Nf(e,1,0))}function Wu(e){for(;e===nr;)nr=Zl[--Kl],Zl[Kl]=null,qa=Zl[--Kl],Zl[Kl]=null;for(;e===Bn;)Bn=Xt[--Zt],Xt[Zt]=null,rn=Xt[--Zt],Xt[Zt]=null,an=Xt[--Zt],Xt[Zt]=null}function Uf(e,t){Xt[Zt++]=an,Xt[Zt++]=rn,Xt[Zt++]=Bn,an=t.id,rn=t.overflow,Bn=e}var st=null,Ie=null,Ce=!1,jn=null,Kt=!1,Ju=Error(u(519));function qn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ya(Qt(t,e)),Ju}function Hf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ot]=e,t[bt]=a,n){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(n=0;n<si.length;n++)we(si[n],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),Fc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),Jc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||em(t.textContent,n)?(a.popover!=null&&(we("beforetoggle",t),we("toggle",t)),a.onScroll!=null&&we("scroll",t),a.onScrollEnd!=null&&we("scrollend",t),a.onClick!=null&&(t.onclick=yn),t=!0):t=!1,t||qn(e,!0)}function Bf(e){for(st=e.return;st;)switch(st.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:st=st.return}}function Fl(e){if(e!==st)return!1;if(!Ce)return Bf(e),Ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ys(e.type,e.memoizedProps)),n=!n),n&&Ie&&qn(e),Bf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ie=sm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ie=sm(e)}else t===27?(t=Ie,el(e.type)?(e=xs,xs=null,Ie=e):Ie=t):Ie=st?Wt(e.stateNode.nextSibling):null;return!0}function yl(){Ie=st=null,Ce=!1}function Pu(){var e=jn;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),jn=null),e}function Ya(e){jn===null?jn=[e]:jn.push(e)}var $u=k(null),gl=null,Sn=null;function Yn(e,t,n){x($u,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=$u.current,j($u)}function eo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function to(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var d=o.child;s=s.firstContext;e:for(;s!==null;){var b=s;s=o;for(var T=0;T<t.length;T++)if(b.context===t[T]){s.lanes|=n,b=s.alternate,b!==null&&(b.lanes|=n),eo(s.return,n,e),a||(d=null);break e}s=b.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(u(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),eo(d,n,e),d=null}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===e){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function Wl(e,t,n,a){e=null;for(var o=t,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var b=o.type;_t(o.pendingProps.value,d.value)||(e!==null?e.push(b):e=[b])}}else if(o===Ee.current){if(d=o.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(mi):e=[mi])}o=o.return}e!==null&&to(t,e,n,a),t.flags|=262144}function lr(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vl(e){gl=e,Sn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return jf(gl,e)}function ar(e,t){return gl===null&&vl(e),jf(e,t)}function jf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Sn===null){if(e===null)throw Error(u(308));Sn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sn=Sn.next=t;return n}var Mg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Lg=l.unstable_scheduleCallback,Ng=l.unstable_NormalPriority,Pe={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function no(){return{controller:new Mg,data:new Map,refCount:0}}function Ga(e){e.refCount--,e.refCount===0&&Lg(Ng,function(){e.controller.abort()})}var Ia=null,lo=0,Jl=0,Pl=null;function Ug(e,t){if(Ia===null){var n=Ia=[];lo=0,Jl=us(),Pl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return lo++,t.then(qf,qf),t}function qf(){if(--lo===0&&Ia!==null){Pl!==null&&(Pl.status="fulfilled");var e=Ia;Ia=null,Jl=0,Pl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Hg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var Yf=D.S;D.S=function(e,t){Td=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ug(e,t),Yf!==null&&Yf(e,t)};var bl=k(null);function ao(){var e=bl.current;return e!==null?e:qe.pooledCache}function ir(e,t){t===null?x(bl,bl.current):x(bl,t.pool)}function Gf(){var e=ao();return e===null?null:{parent:Pe._currentValue,pool:e}}var $l=Error(u(460)),io=Error(u(474)),rr=Error(u(542)),ur={then:function(){}};function If(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(yn,yn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xf(e),e;default:if(typeof t.status=="string")t.then(yn,yn);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xf(e),e}throw xl=t,$l}}function Sl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(xl=n,$l):n}}var xl=null;function Qf(){if(xl===null)throw Error(u(459));var e=xl;return xl=null,e}function Xf(e){if(e===$l||e===rr)throw Error(u(483))}var ea=null,Va=0;function or(e){var t=Va;return Va+=1,ea===null&&(ea=[]),Vf(ea,e,t)}function Qa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function sr(e,t){throw t.$$typeof===w?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Zf(e){function t(A,C){if(e){var z=A.deletions;z===null?(A.deletions=[C],A.flags|=16):z.push(C)}}function n(A,C){if(!e)return null;for(;C!==null;)t(A,C),C=C.sibling;return null}function a(A){for(var C=new Map;A!==null;)A.key!==null?C.set(A.key,A):C.set(A.index,A),A=A.sibling;return C}function o(A,C){return A=vn(A,C),A.index=0,A.sibling=null,A}function s(A,C,z){return A.index=z,e?(z=A.alternate,z!==null?(z=z.index,z<C?(A.flags|=67108866,C):z):(A.flags|=67108866,C)):(A.flags|=1048576,C)}function d(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function b(A,C,z,G){return C===null||C.tag!==6?(C=Zu(z,A.mode,G),C.return=A,C):(C=o(C,z),C.return=A,C)}function T(A,C,z,G){var ie=z.type;return ie===L?N(A,C,z.props.children,G,z.key):C!==null&&(C.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ce&&Sl(ie)===C.type)?(C=o(C,z.props),Qa(C,z),C.return=A,C):(C=tr(z.type,z.key,z.props,null,A.mode,G),Qa(C,z),C.return=A,C)}function R(A,C,z,G){return C===null||C.tag!==4||C.stateNode.containerInfo!==z.containerInfo||C.stateNode.implementation!==z.implementation?(C=Ku(z,A.mode,G),C.return=A,C):(C=o(C,z.children||[]),C.return=A,C)}function N(A,C,z,G,ie){return C===null||C.tag!==7?(C=pl(z,A.mode,G,ie),C.return=A,C):(C=o(C,z),C.return=A,C)}function I(A,C,z){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Zu(""+C,A.mode,z),C.return=A,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case S:return z=tr(C.type,C.key,C.props,null,A.mode,z),Qa(z,C),z.return=A,z;case U:return C=Ku(C,A.mode,z),C.return=A,C;case ce:return C=Sl(C),I(A,C,z)}if(K(C)||P(C))return C=pl(C,A.mode,z,null),C.return=A,C;if(typeof C.then=="function")return I(A,or(C),z);if(C.$$typeof===V)return I(A,ar(A,C),z);sr(A,C)}return null}function _(A,C,z,G){var ie=C!==null?C.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ie!==null?null:b(A,C,""+z,G);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===ie?T(A,C,z,G):null;case U:return z.key===ie?R(A,C,z,G):null;case ce:return z=Sl(z),_(A,C,z,G)}if(K(z)||P(z))return ie!==null?null:N(A,C,z,G,null);if(typeof z.then=="function")return _(A,C,or(z),G);if(z.$$typeof===V)return _(A,C,ar(A,z),G);sr(A,z)}return null}function M(A,C,z,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return A=A.get(z)||null,b(C,A,""+G,ie);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return A=A.get(G.key===null?z:G.key)||null,T(C,A,G,ie);case U:return A=A.get(G.key===null?z:G.key)||null,R(C,A,G,ie);case ce:return G=Sl(G),M(A,C,z,G,ie)}if(K(G)||P(G))return A=A.get(z)||null,N(C,A,G,ie,null);if(typeof G.then=="function")return M(A,C,z,or(G),ie);if(G.$$typeof===V)return M(A,C,z,ar(C,G),ie);sr(C,G)}return null}function $(A,C,z,G){for(var ie=null,ze=null,te=C,ge=C=0,ke=null;te!==null&&ge<z.length;ge++){te.index>ge?(ke=te,te=null):ke=te.sibling;var Re=_(A,te,z[ge],G);if(Re===null){te===null&&(te=ke);break}e&&te&&Re.alternate===null&&t(A,te),C=s(Re,C,ge),ze===null?ie=Re:ze.sibling=Re,ze=Re,te=ke}if(ge===z.length)return n(A,te),Ce&&bn(A,ge),ie;if(te===null){for(;ge<z.length;ge++)te=I(A,z[ge],G),te!==null&&(C=s(te,C,ge),ze===null?ie=te:ze.sibling=te,ze=te);return Ce&&bn(A,ge),ie}for(te=a(te);ge<z.length;ge++)ke=M(te,A,ge,z[ge],G),ke!==null&&(e&&ke.alternate!==null&&te.delete(ke.key===null?ge:ke.key),C=s(ke,C,ge),ze===null?ie=ke:ze.sibling=ke,ze=ke);return e&&te.forEach(function(il){return t(A,il)}),Ce&&bn(A,ge),ie}function oe(A,C,z,G){if(z==null)throw Error(u(151));for(var ie=null,ze=null,te=C,ge=C=0,ke=null,Re=z.next();te!==null&&!Re.done;ge++,Re=z.next()){te.index>ge?(ke=te,te=null):ke=te.sibling;var il=_(A,te,Re.value,G);if(il===null){te===null&&(te=ke);break}e&&te&&il.alternate===null&&t(A,te),C=s(il,C,ge),ze===null?ie=il:ze.sibling=il,ze=il,te=ke}if(Re.done)return n(A,te),Ce&&bn(A,ge),ie;if(te===null){for(;!Re.done;ge++,Re=z.next())Re=I(A,Re.value,G),Re!==null&&(C=s(Re,C,ge),ze===null?ie=Re:ze.sibling=Re,ze=Re);return Ce&&bn(A,ge),ie}for(te=a(te);!Re.done;ge++,Re=z.next())Re=M(te,A,ge,Re.value,G),Re!==null&&(e&&Re.alternate!==null&&te.delete(Re.key===null?ge:Re.key),C=s(Re,C,ge),ze===null?ie=Re:ze.sibling=Re,ze=Re);return e&&te.forEach(function(Kv){return t(A,Kv)}),Ce&&bn(A,ge),ie}function Be(A,C,z,G){if(typeof z=="object"&&z!==null&&z.type===L&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var ie=z.key;C!==null;){if(C.key===ie){if(ie=z.type,ie===L){if(C.tag===7){n(A,C.sibling),G=o(C,z.props.children),G.return=A,A=G;break e}}else if(C.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ce&&Sl(ie)===C.type){n(A,C.sibling),G=o(C,z.props),Qa(G,z),G.return=A,A=G;break e}n(A,C);break}else t(A,C);C=C.sibling}z.type===L?(G=pl(z.props.children,A.mode,G,z.key),G.return=A,A=G):(G=tr(z.type,z.key,z.props,null,A.mode,G),Qa(G,z),G.return=A,A=G)}return d(A);case U:e:{for(ie=z.key;C!==null;){if(C.key===ie)if(C.tag===4&&C.stateNode.containerInfo===z.containerInfo&&C.stateNode.implementation===z.implementation){n(A,C.sibling),G=o(C,z.children||[]),G.return=A,A=G;break e}else{n(A,C);break}else t(A,C);C=C.sibling}G=Ku(z,A.mode,G),G.return=A,A=G}return d(A);case ce:return z=Sl(z),Be(A,C,z,G)}if(K(z))return $(A,C,z,G);if(P(z)){if(ie=P(z),typeof ie!="function")throw Error(u(150));return z=ie.call(z),oe(A,C,z,G)}if(typeof z.then=="function")return Be(A,C,or(z),G);if(z.$$typeof===V)return Be(A,C,ar(A,z),G);sr(A,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,C!==null&&C.tag===6?(n(A,C.sibling),G=o(C,z),G.return=A,A=G):(n(A,C),G=Zu(z,A.mode,G),G.return=A,A=G),d(A)):n(A,C)}return function(A,C,z,G){try{Va=0;var ie=Be(A,C,z,G);return ea=null,ie}catch(te){if(te===$l||te===rr)throw te;var ze=Dt(29,te,null,A.mode);return ze.lanes=G,ze.return=A,ze}}}var wl=Zf(!0),Kf=Zf(!1),Gn=!1;function ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function In(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(_e&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=er(e),Df(e,null,n),t}return $i(e,a,t,n),er(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Bc(e,n)}}function oo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?o=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var so=!1;function Za(){if(so){var e=Pl;if(e!==null)throw e}}function Ka(e,t,n,a){so=!1;var o=e.updateQueue;Gn=!1;var s=o.firstBaseUpdate,d=o.lastBaseUpdate,b=o.shared.pending;if(b!==null){o.shared.pending=null;var T=b,R=T.next;T.next=null,d===null?s=R:d.next=R,d=T;var N=e.alternate;N!==null&&(N=N.updateQueue,b=N.lastBaseUpdate,b!==d&&(b===null?N.firstBaseUpdate=R:b.next=R,N.lastBaseUpdate=T))}if(s!==null){var I=o.baseState;d=0,N=R=T=null,b=s;do{var _=b.lane&-536870913,M=_!==b.lane;if(M?(Te&_)===_:(a&_)===_){_!==0&&_===Jl&&(so=!0),N!==null&&(N=N.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var $=e,oe=b;_=t;var Be=n;switch(oe.tag){case 1:if($=oe.payload,typeof $=="function"){I=$.call(Be,I,_);break e}I=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=oe.payload,_=typeof $=="function"?$.call(Be,I,_):$,_==null)break e;I=v({},I,_);break e;case 2:Gn=!0}}_=b.callback,_!==null&&(e.flags|=64,M&&(e.flags|=8192),M=o.callbacks,M===null?o.callbacks=[_]:M.push(_))}else M={lane:_,tag:b.tag,payload:b.payload,callback:b.callback,next:null},N===null?(R=N=M,T=I):N=N.next=M,d|=_;if(b=b.next,b===null){if(b=o.shared.pending,b===null)break;M=b,b=M.next,M.next=null,o.lastBaseUpdate=M,o.shared.pending=null}}while(!0);N===null&&(T=I),o.baseState=T,o.firstBaseUpdate=R,o.lastBaseUpdate=N,s===null&&(o.shared.lanes=0),Fn|=d,e.lanes=d,e.memoizedState=I}}function Ff(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Wf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ff(n[e],t)}var ta=k(null),cr=k(0);function Jf(e,t){e=_n,x(cr,e),x(ta,t),_n=e|t.baseLanes}function co(){x(cr,_n),x(ta,ta.current)}function fo(){_n=cr.current,j(ta),j(cr)}var Ot=k(null),Ft=null;function Qn(e){var t=e.alternate;x(We,We.current&1),x(Ot,e),Ft===null&&(t===null||ta.current!==null||t.memoizedState!==null)&&(Ft=e)}function ho(e){x(We,We.current),x(Ot,e),Ft===null&&(Ft=e)}function Pf(e){e.tag===22?(x(We,We.current),x(Ot,e),Ft===null&&(Ft=e)):Xn()}function Xn(){x(We,We.current),x(Ot,Ot.current)}function Mt(e){j(Ot),Ft===e&&(Ft=null),j(We)}var We=k(0);function fr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||bs(n)||Ss(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wn=0,pe=null,Ue=null,$e=null,hr=!1,na=!1,El=!1,dr=0,Fa=0,la=null,Bg=0;function Ke(){throw Error(u(321))}function mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function po(e,t,n,a,o,s){return wn=s,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Nh:_o,El=!1,s=n(a,o),El=!1,na&&(s=eh(t,n,a,o)),$f(e),s}function $f(e){D.H=Pa;var t=Ue!==null&&Ue.next!==null;if(wn=0,$e=Ue=pe=null,hr=!1,Fa=0,la=null,t)throw Error(u(300));e===null||et||(e=e.dependencies,e!==null&&lr(e)&&(et=!0))}function eh(e,t,n,a){pe=e;var o=0;do{if(na&&(la=null),Fa=0,na=!1,25<=o)throw Error(u(301));if(o+=1,$e=Ue=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=Uh,s=t(n,a)}while(na);return s}function jg(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Wa(t):t,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(pe.flags|=1024),t}function yo(){var e=dr!==0;return dr=0,e}function go(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function vo(e){if(hr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hr=!1}wn=0,$e=Ue=pe=null,na=!1,Fa=dr=0,la=null}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?pe.memoizedState=$e=e:$e=$e.next=e,$e}function Je(){if(Ue===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=$e===null?pe.memoizedState:$e.next;if(t!==null)$e=t,Ue=e;else{if(e===null)throw pe.alternate===null?Error(u(467)):Error(u(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},$e===null?pe.memoizedState=$e=e:$e=$e.next=e}return $e}function mr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wa(e){var t=Fa;return Fa+=1,la===null&&(la=[]),e=Vf(la,e,t),t=pe,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Nh:_o),e}function pr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wa(e);if(e.$$typeof===V)return ct(e)}throw Error(u(438,String(e)))}function bo(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=pe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=mr(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ye;return t.index++,n}function En(e,t){return typeof t=="function"?t(e):t}function yr(e){var t=Je();return So(t,Ue,e)}function So(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var o=e.baseQueue,s=a.pending;if(s!==null){if(o!==null){var d=o.next;o.next=s.next,s.next=d}t.baseQueue=o=s,a.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{t=o.next;var b=d=null,T=null,R=t,N=!1;do{var I=R.lane&-536870913;if(I!==R.lane?(Te&I)===I:(wn&I)===I){var _=R.revertLane;if(_===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),I===Jl&&(N=!0);else if((wn&_)===_){R=R.next,_===Jl&&(N=!0);continue}else I={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},T===null?(b=T=I,d=s):T=T.next=I,pe.lanes|=_,Fn|=_;I=R.action,El&&n(s,I),s=R.hasEagerState?R.eagerState:n(s,I)}else _={lane:I,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},T===null?(b=T=_,d=s):T=T.next=_,pe.lanes|=I,Fn|=I;R=R.next}while(R!==null&&R!==t);if(T===null?d=s:T.next=b,!_t(s,e.memoizedState)&&(et=!0,N&&(n=Pl,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=T,a.lastRenderedState=s}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function xo(e){var t=Je(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var d=o=o.next;do s=e(s,d.action),d=d.next;while(d!==o);_t(s,t.memoizedState)||(et=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function th(e,t,n){var a=pe,o=Je(),s=Ce;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var d=!_t((Ue||o).memoizedState,n);if(d&&(o.memoizedState=n,et=!0),o=o.queue,To(ah.bind(null,a,o,e),[e]),o.getSnapshot!==t||d||$e!==null&&$e.memoizedState.tag&1){if(a.flags|=2048,aa(9,{destroy:void 0},lh.bind(null,a,o,n,t),null),qe===null)throw Error(u(349));s||(wn&127)!==0||nh(a,t,n)}return n}function nh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=mr(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lh(e,t,n,a){t.value=n,t.getSnapshot=a,ih(t)&&rh(e)}function ah(e,t,n){return n(function(){ih(t)&&rh(e)})}function ih(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function rh(e){var t=ml(e,2);t!==null&&kt(t,e,2)}function wo(e){var t=gt();if(typeof e=="function"){var n=e;if(e=n(),El){vt(!0);try{n()}finally{vt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:e},t}function uh(e,t,n,a){return e.baseState=n,So(e,Ue,typeof a=="function"?a:En)}function qg(e,t,n,a,o){if(br(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};D.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,oh(t,s)):(s.next=n.next,t.pending=n.next=s)}}function oh(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var s=D.T,d={};D.T=d;try{var b=n(o,a),T=D.S;T!==null&&T(d,b),sh(e,t,b)}catch(R){Eo(e,t,R)}finally{s!==null&&d.types!==null&&(s.types=d.types),D.T=s}}else try{s=n(o,a),sh(e,t,s)}catch(R){Eo(e,t,R)}}function sh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ch(e,t,a)},function(a){return Eo(e,t,a)}):ch(e,t,n)}function ch(e,t,n){t.status="fulfilled",t.value=n,fh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,oh(e,n)))}function Eo(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,fh(t),t=t.next;while(t!==a)}e.action=null}function fh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function hh(e,t){return t}function dh(e,t){if(Ce){var n=qe.formState;if(n!==null){e:{var a=pe;if(Ce){if(Ie){t:{for(var o=Ie,s=Kt;o.nodeType!==8;){if(!s){o=null;break t}if(o=Wt(o.nextSibling),o===null){o=null;break t}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){Ie=Wt(o.nextSibling),a=o.data==="F!";break e}}qn(a)}a=!1}a&&(t=n[0])}}return n=gt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hh,lastRenderedState:t},n.queue=a,n=Oh.bind(null,pe,a),a.dispatch=n,a=wo(!1),s=Ro.bind(null,pe,!1,a.queue),a=gt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=qg.bind(null,pe,o,s,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function mh(e){var t=Je();return ph(t,Ue,e)}function ph(e,t,n){if(t=So(e,t,hh)[0],e=yr(En)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Wa(t)}catch(d){throw d===$l?rr:d}else a=t;t=Je();var o=t.queue,s=o.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,aa(9,{destroy:void 0},Yg.bind(null,o,n),null)),[a,s,e]}function Yg(e,t){e.action=t}function yh(e){var t=Je(),n=Ue;if(n!==null)return ph(t,n,e);Je(),t=t.memoizedState,n=Je();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function aa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=pe.updateQueue,t===null&&(t=mr(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function gh(){return Je().memoizedState}function gr(e,t,n,a){var o=gt();pe.flags|=e,o.memoizedState=aa(1|t,{destroy:void 0},n,a===void 0?null:a)}function vr(e,t,n,a){var o=Je();a=a===void 0?null:a;var s=o.memoizedState.inst;Ue!==null&&a!==null&&mo(a,Ue.memoizedState.deps)?o.memoizedState=aa(t,s,n,a):(pe.flags|=e,o.memoizedState=aa(1|t,s,n,a))}function vh(e,t){gr(8390656,8,e,t)}function To(e,t){vr(2048,8,e,t)}function Gg(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=mr(),pe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function bh(e){var t=Je().memoizedState;return Gg({ref:t,nextImpl:e}),function(){if((_e&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Sh(e,t){return vr(4,2,e,t)}function xh(e,t){return vr(4,4,e,t)}function wh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eh(e,t,n){n=n!=null?n.concat([e]):null,vr(4,4,wh.bind(null,t,e),n)}function ko(){}function Th(e,t){var n=Je();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&mo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function kh(e,t){var n=Je();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&mo(t,a[1]))return a[0];if(a=e(),El){vt(!0);try{e()}finally{vt(!1)}}return n.memoizedState=[a,t],a}function Co(e,t,n){return n===void 0||(wn&1073741824)!==0&&(Te&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Cd(),pe.lanes|=e,Fn|=e,n)}function Ch(e,t,n,a){return _t(n,t)?n:ta.current!==null?(e=Co(e,n,a),_t(e,t)||(et=!0),e):(wn&42)===0||(wn&1073741824)!==0&&(Te&261930)===0?(et=!0,e.memoizedState=n):(e=Cd(),pe.lanes|=e,Fn|=e,t)}function Ah(e,t,n,a,o){var s=X.p;X.p=s!==0&&8>s?s:8;var d=D.T,b={};D.T=b,Ro(e,!1,t,n);try{var T=o(),R=D.S;if(R!==null&&R(b,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var N=Hg(T,a);Ja(e,t,N,Ut(e))}else Ja(e,t,a,Ut(e))}catch(I){Ja(e,t,{then:function(){},status:"rejected",reason:I},Ut())}finally{X.p=s,d!==null&&b.types!==null&&(d.types=b.types),D.T=d}}function Ig(){}function Ao(e,t,n,a){if(e.tag!==5)throw Error(u(476));var o=zh(e).queue;Ah(e,o,t,ne,n===null?Ig:function(){return Rh(e),n(a)})}function zh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rh(e){var t=zh(e);t.next===null&&(t=e.alternate.memoizedState),Ja(e,t.next.queue,{},Ut())}function zo(){return ct(mi)}function _h(){return Je().memoizedState}function Dh(){return Je().memoizedState}function Vg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ut();e=In(n);var a=Vn(t,e,n);a!==null&&(kt(a,t,n),Xa(a,t,n)),t={cache:no()},e.payload=t;return}t=t.return}}function Qg(e,t,n){var a=Ut();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},br(e)?Mh(t,n):(n=Qu(e,t,n,a),n!==null&&(kt(n,e,a),Lh(n,t,a)))}function Oh(e,t,n){var a=Ut();Ja(e,t,n,a)}function Ja(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(br(e))Mh(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,b=s(d,n);if(o.hasEagerState=!0,o.eagerState=b,_t(b,d))return $i(e,t,o,0),qe===null&&Pi(),!1}catch{}if(n=Qu(e,t,o,a),n!==null)return kt(n,e,a),Lh(n,t,a),!0}return!1}function Ro(e,t,n,a){if(a={lane:2,revertLane:us(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},br(e)){if(t)throw Error(u(479))}else t=Qu(e,n,a,2),t!==null&&kt(t,e,2)}function br(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Mh(e,t){na=hr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Bc(e,n)}}var Pa={readContext:ct,use:pr,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};Pa.useEffectEvent=Ke;var Nh={readContext:ct,use:pr,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:vh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,gr(4194308,4,wh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gr(4194308,4,e,t)},useInsertionEffect:function(e,t){gr(4,2,e,t)},useMemo:function(e,t){var n=gt();t=t===void 0?null:t;var a=e();if(El){vt(!0);try{e()}finally{vt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=gt();if(n!==void 0){var o=n(t);if(El){vt(!0);try{n(t)}finally{vt(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=Qg.bind(null,pe,e),[a.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:function(e){e=wo(e);var t=e.queue,n=Oh.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ko,useDeferredValue:function(e,t){var n=gt();return Co(n,e,t)},useTransition:function(){var e=wo(!1);return e=Ah.bind(null,pe,e.queue,!0,!1),gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=pe,o=gt();if(Ce){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),qe===null)throw Error(u(349));(Te&127)!==0||nh(a,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,vh(ah.bind(null,a,s,e),[e]),a.flags|=2048,aa(9,{destroy:void 0},lh.bind(null,a,s,n,t),null),n},useId:function(){var e=gt(),t=qe.identifierPrefix;if(Ce){var n=rn,a=an;n=(a&~(1<<32-je(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Bg++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zo,useFormState:dh,useActionState:dh,useOptimistic:function(e){var t=gt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ro.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:bo,useCacheRefresh:function(){return gt().memoizedState=Vg.bind(null,pe)},useEffectEvent:function(e){var t=gt(),n={impl:e};return t.memoizedState=n,function(){if((_e&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},_o={readContext:ct,use:pr,useCallback:Th,useContext:ct,useEffect:To,useImperativeHandle:Eh,useInsertionEffect:Sh,useLayoutEffect:xh,useMemo:kh,useReducer:yr,useRef:gh,useState:function(){return yr(En)},useDebugValue:ko,useDeferredValue:function(e,t){var n=Je();return Ch(n,Ue.memoizedState,e,t)},useTransition:function(){var e=yr(En)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Wa(e),t]},useSyncExternalStore:th,useId:_h,useHostTransitionStatus:zo,useFormState:mh,useActionState:mh,useOptimistic:function(e,t){var n=Je();return uh(n,Ue,e,t)},useMemoCache:bo,useCacheRefresh:Dh};_o.useEffectEvent=bh;var Uh={readContext:ct,use:pr,useCallback:Th,useContext:ct,useEffect:To,useImperativeHandle:Eh,useInsertionEffect:Sh,useLayoutEffect:xh,useMemo:kh,useReducer:xo,useRef:gh,useState:function(){return xo(En)},useDebugValue:ko,useDeferredValue:function(e,t){var n=Je();return Ue===null?Co(n,e,t):Ch(n,Ue.memoizedState,e,t)},useTransition:function(){var e=xo(En)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Wa(e),t]},useSyncExternalStore:th,useId:_h,useHostTransitionStatus:zo,useFormState:yh,useActionState:yh,useOptimistic:function(e,t){var n=Je();return Ue!==null?uh(n,Ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:bo,useCacheRefresh:Dh};Uh.useEffectEvent=bh;function Do(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oo={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ut(),o=In(a);o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,a),t!==null&&(kt(t,e,a),Xa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ut(),o=In(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,a),t!==null&&(kt(t,e,a),Xa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),a=In(n);a.tag=2,t!=null&&(a.callback=t),t=Vn(e,a,n),t!==null&&(kt(t,e,n),Xa(t,e,n))}};function Hh(e,t,n,a,o,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,d):t.prototype&&t.prototype.isPureReactComponent?!Ba(n,a)||!Ba(o,s):!0}function Bh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function Tl(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function jh(e){Ji(e)}function qh(e){console.error(e)}function Yh(e){Ji(e)}function Sr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Gh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Mo(e,t,n){return n=In(n),n.tag=3,n.payload={element:null},n.callback=function(){Sr(e,t)},n}function Ih(e){return e=In(e),e.tag=3,e}function Vh(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var s=a.value;e.payload=function(){return o(s)},e.callback=function(){Gh(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Gh(t,n,a),typeof o!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var b=a.stack;this.componentDidCatch(a.value,{componentStack:b!==null?b:""})})}function Xg(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Wl(t,n,o,!0),n=Ot.current,n!==null){switch(n.tag){case 31:case 13:return Ft===null?Or():n.alternate===null&&Fe===0&&(Fe=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===ur?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),as(e,a,o)),!1;case 22:return n.flags|=65536,a===ur?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),as(e,a,o)),!1}throw Error(u(435,n.tag))}return as(e,a,o),Or(),!1}if(Ce)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==Ju&&(e=Error(u(422),{cause:a}),Ya(Qt(e,n)))):(a!==Ju&&(t=Error(u(423),{cause:a}),Ya(Qt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Qt(a,n),o=Mo(e.stateNode,a,o),oo(e,o),Fe!==4&&(Fe=2)),!1;var s=Error(u(520),{cause:a});if(s=Qt(s,n),ri===null?ri=[s]:ri.push(s),Fe!==4&&(Fe=2),t===null)return!0;a=Qt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Mo(n.stateNode,a,e),oo(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Wn===null||!Wn.has(s))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Ih(o),Vh(o,e,n,a),oo(n,o),!1}n=n.return}while(n!==null);return!1}var Lo=Error(u(461)),et=!1;function ft(e,t,n,a){t.child=e===null?Kf(t,null,n,a):wl(t,e.child,n,a)}function Qh(e,t,n,a,o){n=n.render;var s=t.ref;if("ref"in a){var d={};for(var b in a)b!=="ref"&&(d[b]=a[b])}else d=a;return vl(t),a=po(e,t,n,d,s,o),b=yo(),e!==null&&!et?(go(e,t,o),Tn(e,t,o)):(Ce&&b&&Fu(t),t.flags|=1,ft(e,t,a,o),t.child)}function Xh(e,t,n,a,o){if(e===null){var s=n.type;return typeof s=="function"&&!Xu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Zh(e,t,s,a,o)):(e=tr(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Go(e,o)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(d,a)&&e.ref===t.ref)return Tn(e,t,o)}return t.flags|=1,e=vn(s,a),e.ref=t.ref,e.return=t,t.child=e}function Zh(e,t,n,a,o){if(e!==null){var s=e.memoizedProps;if(Ba(s,a)&&e.ref===t.ref)if(et=!1,t.pendingProps=a=s,Go(e,o))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,Tn(e,t,o)}return No(e,t,n,a,o)}function Kh(e,t,n,a){var o=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~s}else a=0,t.child=null;return Fh(e,t,s,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ir(t,s!==null?s.cachePool:null),s!==null?Jf(t,s):co(),Pf(t);else return a=t.lanes=536870912,Fh(e,t,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(ir(t,s.cachePool),Jf(t,s),Xn(),t.memoizedState=null):(e!==null&&ir(t,null),co(),Xn());return ft(e,t,o,n),t.child}function $a(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fh(e,t,n,a,o){var s=ao();return s=s===null?null:{parent:Pe._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&ir(t,null),co(),Pf(t),e!==null&&Wl(e,t,a,!0),t.childLanes=o,null}function xr(e,t){return t=Er({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Wh(e,t,n){return wl(t,e.child,null,n),e=xr(t,t.pendingProps),e.flags|=2,Mt(t),t.memoizedState=null,e}function Zg(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(a.mode==="hidden")return e=xr(t,a),t.lanes=536870912,$a(null,e);if(ho(t),(e=Ie)?(e=om(e,Kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:an,overflow:rn}:null,retryLane:536870912,hydrationErrors:null},n=Mf(e),n.return=t,t.child=n,st=t,Ie=null)):e=null,e===null)throw qn(t);return t.lanes=536870912,null}return xr(t,a)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(ho(t),o)if(t.flags&256)t.flags&=-257,t=Wh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(et||Wl(e,t,n,!1),o=(n&e.childLanes)!==0,et||o){if(a=qe,a!==null&&(d=jc(a,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,ml(e,d),kt(a,e,d),Lo;Or(),t=Wh(e,t,n)}else e=s.treeContext,Ie=Wt(d.nextSibling),st=t,Ce=!0,jn=null,Kt=!1,e!==null&&Uf(t,e),t=xr(t,a),t.flags|=4096;return t}return e=vn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function No(e,t,n,a,o){return vl(t),n=po(e,t,n,a,void 0,o),a=yo(),e!==null&&!et?(go(e,t,o),Tn(e,t,o)):(Ce&&a&&Fu(t),t.flags|=1,ft(e,t,n,o),t.child)}function Jh(e,t,n,a,o,s){return vl(t),t.updateQueue=null,n=eh(t,a,n,o),$f(e),a=yo(),e!==null&&!et?(go(e,t,s),Tn(e,t,s)):(Ce&&a&&Fu(t),t.flags|=1,ft(e,t,n,s),t.child)}function Ph(e,t,n,a,o){if(vl(t),t.stateNode===null){var s=Xl,d=n.contextType;typeof d=="object"&&d!==null&&(s=ct(d)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Oo,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},ro(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?ct(d):Xl,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Do(t,n,d,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Oo.enqueueReplaceState(s,s.state,null),Ka(t,a,s,o),Za(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var b=t.memoizedProps,T=Tl(n,b);s.props=T;var R=s.context,N=n.contextType;d=Xl,typeof N=="object"&&N!==null&&(d=ct(N));var I=n.getDerivedStateFromProps;N=typeof I=="function"||typeof s.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,N||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(b||R!==d)&&Bh(t,s,a,d),Gn=!1;var _=t.memoizedState;s.state=_,Ka(t,a,s,o),Za(),R=t.memoizedState,b||_!==R||Gn?(typeof I=="function"&&(Do(t,n,I,a),R=t.memoizedState),(T=Gn||Hh(t,n,T,a,_,R,d))?(N||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=R),s.props=a,s.state=R,s.context=d,a=T):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,uo(e,t),d=t.memoizedProps,N=Tl(n,d),s.props=N,I=t.pendingProps,_=s.context,R=n.contextType,T=Xl,typeof R=="object"&&R!==null&&(T=ct(R)),b=n.getDerivedStateFromProps,(R=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==I||_!==T)&&Bh(t,s,a,T),Gn=!1,_=t.memoizedState,s.state=_,Ka(t,a,s,o),Za();var M=t.memoizedState;d!==I||_!==M||Gn||e!==null&&e.dependencies!==null&&lr(e.dependencies)?(typeof b=="function"&&(Do(t,n,b,a),M=t.memoizedState),(N=Gn||Hh(t,n,N,a,_,M,T)||e!==null&&e.dependencies!==null&&lr(e.dependencies))?(R||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,M,T),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,M,T)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=M),s.props=a,s.state=M,s.context=T,a=N):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,wr(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=wl(t,e.child,null,o),t.child=wl(t,null,n,o)):ft(e,t,n,o),t.memoizedState=s.state,e=t.child):e=Tn(e,t,o),e}function $h(e,t,n,a){return yl(),t.flags|=256,ft(e,t,n,a),t.child}var Uo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ho(e){return{baseLanes:e,cachePool:Gf()}}function Bo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Nt),e}function ed(e,t,n){var a=t.pendingProps,o=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),d&&(o=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(o?Qn(t):Xn(),(e=Ie)?(e=om(e,Kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:an,overflow:rn}:null,retryLane:536870912,hydrationErrors:null},n=Mf(e),n.return=t,t.child=n,st=t,Ie=null)):e=null,e===null)throw qn(t);return Ss(e)?t.lanes=32:t.lanes=536870912,null}var b=a.children;return a=a.fallback,o?(Xn(),o=t.mode,b=Er({mode:"hidden",children:b},o),a=pl(a,o,n,null),b.return=t,a.return=t,b.sibling=a,t.child=b,a=t.child,a.memoizedState=Ho(n),a.childLanes=Bo(e,d,n),t.memoizedState=Uo,$a(null,a)):(Qn(t),jo(t,b))}var T=e.memoizedState;if(T!==null&&(b=T.dehydrated,b!==null)){if(s)t.flags&256?(Qn(t),t.flags&=-257,t=qo(e,t,n)):t.memoizedState!==null?(Xn(),t.child=e.child,t.flags|=128,t=null):(Xn(),b=a.fallback,o=t.mode,a=Er({mode:"visible",children:a.children},o),b=pl(b,o,n,null),b.flags|=2,a.return=t,b.return=t,a.sibling=b,t.child=a,wl(t,e.child,null,n),a=t.child,a.memoizedState=Ho(n),a.childLanes=Bo(e,d,n),t.memoizedState=Uo,t=$a(null,a));else if(Qn(t),Ss(b)){if(d=b.nextSibling&&b.nextSibling.dataset,d)var R=d.dgst;d=R,a=Error(u(419)),a.stack="",a.digest=d,Ya({value:a,source:null,stack:null}),t=qo(e,t,n)}else if(et||Wl(e,t,n,!1),d=(n&e.childLanes)!==0,et||d){if(d=qe,d!==null&&(a=jc(d,n),a!==0&&a!==T.retryLane))throw T.retryLane=a,ml(e,a),kt(d,e,a),Lo;bs(b)||Or(),t=qo(e,t,n)}else bs(b)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Ie=Wt(b.nextSibling),st=t,Ce=!0,jn=null,Kt=!1,e!==null&&Uf(t,e),t=jo(t,a.children),t.flags|=4096);return t}return o?(Xn(),b=a.fallback,o=t.mode,T=e.child,R=T.sibling,a=vn(T,{mode:"hidden",children:a.children}),a.subtreeFlags=T.subtreeFlags&65011712,R!==null?b=vn(R,b):(b=pl(b,o,n,null),b.flags|=2),b.return=t,a.return=t,a.sibling=b,t.child=a,$a(null,a),a=t.child,b=e.child.memoizedState,b===null?b=Ho(n):(o=b.cachePool,o!==null?(T=Pe._currentValue,o=o.parent!==T?{parent:T,pool:T}:o):o=Gf(),b={baseLanes:b.baseLanes|n,cachePool:o}),a.memoizedState=b,a.childLanes=Bo(e,d,n),t.memoizedState=Uo,$a(e.child,a)):(Qn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function jo(e,t){return t=Er({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Er(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function qo(e,t,n){return wl(t,e.child,null,n),e=jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function td(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),eo(e.return,t,n)}function Yo(e,t,n,a,o,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=o,d.treeForkCount=s)}function nd(e,t,n){var a=t.pendingProps,o=a.revealOrder,s=a.tail;a=a.children;var d=We.current,b=(d&2)!==0;if(b?(d=d&1|2,t.flags|=128):d&=1,x(We,d),ft(e,t,a,n),a=Ce?qa:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&td(e,n,t);else if(e.tag===19)td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&fr(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Yo(t,!1,o,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&fr(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Yo(t,!0,n,null,s,a);break;case"together":Yo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Wl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Go(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&lr(e)))}function Kg(e,t,n){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),Yn(t,Pe,e.memoizedState.cache),yl();break;case 27:case 5:Yt(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:Yn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ho(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Qn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ed(e,t,n):(Qn(t),e=Tn(e,t,n),e!==null?e.sibling:null);Qn(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Wl(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return nd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),x(We,We.current),a)break;return null;case 22:return t.lanes=0,Kh(e,t,n,t.pendingProps);case 24:Yn(t,Pe,e.memoizedState.cache)}return Tn(e,t,n)}function ld(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!Go(e,n)&&(t.flags&128)===0)return et=!1,Kg(e,t,n);et=(e.flags&131072)!==0}else et=!1,Ce&&(t.flags&1048576)!==0&&Nf(t,qa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Sl(t.elementType),t.type=e,typeof e=="function")Xu(e)?(a=Tl(e,a),t.tag=1,t=Ph(null,t,e,a,n)):(t.tag=0,t=No(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===re){t.tag=11,t=Qh(null,t,e,a,n);break e}else if(o===W){t.tag=14,t=Xh(null,t,e,a,n);break e}}throw t=le(e)||e,Error(u(306,t,""))}}return t;case 0:return No(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=Tl(a,t.pendingProps),Ph(e,t,a,o,n);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var s=t.memoizedState;o=s.element,uo(e,t),Ka(t,a,null,n);var d=t.memoizedState;if(a=d.cache,Yn(t,Pe,a),a!==s.cache&&to(t,[Pe],n,!0),Za(),a=d.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=$h(e,t,a,n);break e}else if(a!==o){o=Qt(Error(u(424)),t),Ya(o),t=$h(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ie=Wt(e.firstChild),st=t,Ce=!0,jn=null,Kt=!0,n=Kf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yl(),a===o){t=Tn(e,t,n);break e}ft(e,t,a,n)}t=t.child}return t;case 26:return wr(e,t),e===null?(n=mm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ce||(n=t.type,e=t.pendingProps,a=jr(ae.current).createElement(n),a[ot]=t,a[bt]=e,ht(a,n,e),it(a),t.stateNode=a):t.memoizedState=mm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yt(t),e===null&&Ce&&(a=t.stateNode=fm(t.type,t.pendingProps,ae.current),st=t,Kt=!0,o=Ie,el(t.type)?(xs=o,Ie=Wt(a.firstChild)):Ie=o),ft(e,t,t.pendingProps.children,n),wr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((o=a=Ie)&&(a=Tv(a,t.type,t.pendingProps,Kt),a!==null?(t.stateNode=a,st=t,Ie=Wt(a.firstChild),Kt=!1,o=!0):o=!1),o||qn(t)),Yt(t),o=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,a=s.children,ys(o,s)?a=null:d!==null&&ys(o,d)&&(t.flags|=32),t.memoizedState!==null&&(o=po(e,t,jg,null,null,n),mi._currentValue=o),wr(e,t),ft(e,t,a,n),t.child;case 6:return e===null&&Ce&&((e=n=Ie)&&(n=kv(n,t.pendingProps,Kt),n!==null?(t.stateNode=n,st=t,Ie=null,e=!0):e=!1),e||qn(t)),null;case 13:return ed(e,t,n);case 4:return Qe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=wl(t,null,a,n):ft(e,t,a,n),t.child;case 11:return Qh(e,t,t.type,t.pendingProps,n);case 7:return ft(e,t,t.pendingProps,n),t.child;case 8:return ft(e,t,t.pendingProps.children,n),t.child;case 12:return ft(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Yn(t,t.type,a.value),ft(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,vl(t),o=ct(o),a=a(o),t.flags|=1,ft(e,t,a,n),t.child;case 14:return Xh(e,t,t.type,t.pendingProps,n);case 15:return Zh(e,t,t.type,t.pendingProps,n);case 19:return nd(e,t,n);case 31:return Zg(e,t,n);case 22:return Kh(e,t,n,t.pendingProps);case 24:return vl(t),a=ct(Pe),e===null?(o=ao(),o===null&&(o=qe,s=no(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=n),o=s),t.memoizedState={parent:a,cache:o},ro(t),Yn(t,Pe,o)):((e.lanes&n)!==0&&(uo(e,t),Ka(t,null,null,n),Za()),o=e.memoizedState,s=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Yn(t,Pe,a)):(a=s.cache,Yn(t,Pe,a),a!==o.cache&&to(t,[Pe],n,!0))),ft(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function kn(e){e.flags|=4}function Io(e,t,n,a,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(_d())e.flags|=8192;else throw xl=ur,io}else e.flags&=-16777217}function ad(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bm(t))if(_d())e.flags|=8192;else throw xl=ur,io}function Tr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Uc():536870912,e.lanes|=t,oa|=t)}function ei(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Fg(e,t,n){var a=t.pendingProps;switch(Wu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),xn(Pe),Ne(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fl(t)?kn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pu())),Ve(t),null;case 26:var o=t.type,s=t.memoizedState;return e===null?(kn(t),s!==null?(Ve(t),ad(t,s)):(Ve(t),Io(t,o,null,a,n))):s?s!==e.memoizedState?(kn(t),Ve(t),ad(t,s)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&kn(t),Ve(t),Io(t,o,e,a,n)),null;case 27:if(hn(t),n=ae.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&kn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ve(t),null}e=J.current,Fl(t)?Hf(t):(e=fm(o,a,n),t.stateNode=e,kn(t))}return Ve(t),null;case 5:if(hn(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&kn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ve(t),null}if(s=J.current,Fl(t))Hf(t);else{var d=jr(ae.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?d.createElement(o,{is:a.is}):d.createElement(o)}}s[ot]=t,s[bt]=a;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(ht(s,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&kn(t)}}return Ve(t),Io(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&kn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ae.current,Fl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=st,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||em(e.nodeValue,n)),e||qn(t,!0)}else e=jr(e).createTextNode(a),e[ot]=t,t.stateNode=e}return Ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Fl(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ot]=t}else yl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else n=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Mt(t),t):(Mt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ve(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Fl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[ot]=t}else yl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),o=!1}else o=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Mt(t),t):(Mt(t),null)}return Mt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Tr(t,t.updateQueue),Ve(t),null);case 4:return Ne(),e===null&&fs(t.stateNode.containerInfo),Ve(t),null;case 10:return xn(t.type),Ve(t),null;case 19:if(j(We),a=t.memoizedState,a===null)return Ve(t),null;if(o=(t.flags&128)!==0,s=a.rendering,s===null)if(o)ei(a,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=fr(e),s!==null){for(t.flags|=128,ei(a,!1),e=s.updateQueue,t.updateQueue=e,Tr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Of(n,e),n=n.sibling;return x(We,We.current&1|2),Ce&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&pt()>Rr&&(t.flags|=128,o=!0,ei(a,!1),t.lanes=4194304)}else{if(!o)if(e=fr(s),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Tr(t,e),ei(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Ce)return Ve(t),null}else 2*pt()-a.renderingStartTime>Rr&&n!==536870912&&(t.flags|=128,o=!0,ei(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=pt(),e.sibling=null,n=We.current,x(We,o?n&1|2:n&1),Ce&&bn(t,a.treeForkCount),e):(Ve(t),null);case 22:case 23:return Mt(t),fo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),n=t.updateQueue,n!==null&&Tr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&j(bl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn(Pe),Ve(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Wg(e,t){switch(Wu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(Pe),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return hn(t),null;case 31:if(t.memoizedState!==null){if(Mt(t),t.alternate===null)throw Error(u(340));yl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));yl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(We),null;case 4:return Ne(),null;case 10:return xn(t.type),null;case 22:case 23:return Mt(t),fo(),e!==null&&j(bl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(Pe),null;case 25:return null;default:return null}}function id(e,t){switch(Wu(t),t.tag){case 3:xn(Pe),Ne();break;case 26:case 27:case 5:hn(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&Mt(t);break;case 13:Mt(t);break;case 19:j(We);break;case 10:xn(t.type);break;case 22:case 23:Mt(t),fo(),e!==null&&j(bl);break;case 24:xn(Pe)}}function ti(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var s=n.create,d=n.inst;a=s(),d.destroy=a}n=n.next}while(n!==o)}}catch(b){Le(t,t.return,b)}}function Zn(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){var d=a.inst,b=d.destroy;if(b!==void 0){d.destroy=void 0,o=t;var T=n,R=b;try{R()}catch(N){Le(o,T,N)}}}a=a.next}while(a!==s)}}catch(N){Le(t,t.return,N)}}function rd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wf(t,n)}catch(a){Le(e,e.return,a)}}}function ud(e,t,n){n.props=Tl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Le(e,t,a)}}function ni(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(o){Le(e,t,o)}}function un(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){Le(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Le(e,t,o)}else n.current=null}function od(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){Le(e,e.return,o)}}function Vo(e,t,n){try{var a=e.stateNode;vv(a,e.type,n,t),a[bt]=t}catch(o){Le(e,e.return,o)}}function sd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&el(e.type)||e.tag===4}function Qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&el(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yn));else if(a!==4&&(a===27&&el(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xo(e,t,n),e=e.sibling;e!==null;)Xo(e,t,n),e=e.sibling}function kr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&el(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(kr(e,t,n),e=e.sibling;e!==null;)kr(e,t,n),e=e.sibling}function cd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ht(t,a,n),t[ot]=e,t[bt]=n}catch(s){Le(e,e.return,s)}}var Cn=!1,tt=!1,Zo=!1,fd=typeof WeakSet=="function"?WeakSet:Set,rt=null;function Jg(e,t){if(e=e.containerInfo,ms=Xr,e=Ef(e),ju(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,b=-1,T=-1,R=0,N=0,I=e,_=null;t:for(;;){for(var M;I!==n||o!==0&&I.nodeType!==3||(b=d+o),I!==s||a!==0&&I.nodeType!==3||(T=d+a),I.nodeType===3&&(d+=I.nodeValue.length),(M=I.firstChild)!==null;)_=I,I=M;for(;;){if(I===e)break t;if(_===n&&++R===o&&(b=d),_===s&&++N===a&&(T=d),(M=I.nextSibling)!==null)break;I=_,_=I.parentNode}I=M}n=b===-1||T===-1?null:{start:b,end:T}}else n=null}n=n||{start:0,end:0}}else n=null;for(ps={focusedElem:e,selectionRange:n},Xr=!1,rt=t;rt!==null;)if(t=rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,rt=e;else for(;rt!==null;){switch(t=rt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,o=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var $=Tl(n.type,o);e=a.getSnapshotBeforeUpdate($,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Le(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)vs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,rt=e;break}rt=t.return}}function hd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:zn(e,n),a&4&&ti(5,n);break;case 1:if(zn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Le(n,n.return,d)}else{var o=Tl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Le(n,n.return,d)}}a&64&&rd(n),a&512&&ni(n,n.return);break;case 3:if(zn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wf(e,t)}catch(d){Le(n,n.return,d)}}break;case 27:t===null&&a&4&&cd(n);case 26:case 5:zn(e,n),t===null&&a&4&&od(n),a&512&&ni(n,n.return);break;case 12:zn(e,n);break;case 31:zn(e,n),a&4&&pd(e,n);break;case 13:zn(e,n),a&4&&yd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=rv.bind(null,n),Cv(e,n))));break;case 22:if(a=n.memoizedState!==null||Cn,!a){t=t!==null&&t.memoizedState!==null||tt,o=Cn;var s=tt;Cn=a,(tt=t)&&!s?Rn(e,n,(n.subtreeFlags&8772)!==0):zn(e,n),Cn=o,tt=s}break;case 30:break;default:zn(e,n)}}function dd(e){var t=e.alternate;t!==null&&(e.alternate=null,dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,xt=!1;function An(e,t,n){for(n=n.child;n!==null;)md(e,t,n),n=n.sibling}function md(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(yt,n)}catch{}switch(n.tag){case 26:tt||un(n,t),An(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tt||un(n,t);var a=Xe,o=xt;el(n.type)&&(Xe=n.stateNode,xt=!1),An(e,t,n),fi(n.stateNode),Xe=a,xt=o;break;case 5:tt||un(n,t);case 6:if(a=Xe,o=xt,Xe=null,An(e,t,n),Xe=a,xt=o,Xe!==null)if(xt)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(n.stateNode)}catch(s){Le(n,t,s)}else try{Xe.removeChild(n.stateNode)}catch(s){Le(n,t,s)}break;case 18:Xe!==null&&(xt?(e=Xe,rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ya(e)):rm(Xe,n.stateNode));break;case 4:a=Xe,o=xt,Xe=n.stateNode.containerInfo,xt=!0,An(e,t,n),Xe=a,xt=o;break;case 0:case 11:case 14:case 15:Zn(2,n,t),tt||Zn(4,n,t),An(e,t,n);break;case 1:tt||(un(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&ud(n,t,a)),An(e,t,n);break;case 21:An(e,t,n);break;case 22:tt=(a=tt)||n.memoizedState!==null,An(e,t,n),tt=a;break;default:An(e,t,n)}}function pd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ya(e)}catch(n){Le(t,t.return,n)}}}function yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ya(e)}catch(n){Le(t,t.return,n)}}function Pg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new fd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new fd),t;default:throw Error(u(435,e.tag))}}function Cr(e,t){var n=Pg(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=uv.bind(null,e,a);a.then(o,o)}})}function wt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],s=e,d=t,b=d;e:for(;b!==null;){switch(b.tag){case 27:if(el(b.type)){Xe=b.stateNode,xt=!1;break e}break;case 5:Xe=b.stateNode,xt=!1;break e;case 3:case 4:Xe=b.stateNode.containerInfo,xt=!0;break e}b=b.return}if(Xe===null)throw Error(u(160));md(s,d,o),Xe=null,xt=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gd(t,e),t=t.sibling}var tn=null;function gd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wt(t,e),Et(e),a&4&&(Zn(3,e,e.return),ti(3,e),Zn(5,e,e.return));break;case 1:wt(t,e),Et(e),a&512&&(tt||n===null||un(n,n.return)),a&64&&Cn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=tn;if(wt(t,e),Et(e),a&512&&(tt||n===null||un(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":s=o.getElementsByTagName("title")[0],(!s||s[Ra]||s[ot]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(a),o.head.insertBefore(s,o.querySelector("head > title"))),ht(s,a,n),s[ot]=e,it(s),a=s;break e;case"link":var d=gm("link","href",o).get(a+(n.href||""));if(d){for(var b=0;b<d.length;b++)if(s=d[b],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(b,1);break t}}s=o.createElement(a),ht(s,a,n),o.head.appendChild(s);break;case"meta":if(d=gm("meta","content",o).get(a+(n.content||""))){for(b=0;b<d.length;b++)if(s=d[b],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(b,1);break t}}s=o.createElement(a),ht(s,a,n),o.head.appendChild(s);break;default:throw Error(u(468,a))}s[ot]=e,it(s),a=s}e.stateNode=a}else vm(o,e.type,e.stateNode);else e.stateNode=ym(o,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?vm(o,e.type,e.stateNode):ym(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Vo(e,e.memoizedProps,n.memoizedProps)}break;case 27:wt(t,e),Et(e),a&512&&(tt||n===null||un(n,n.return)),n!==null&&a&4&&Vo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(wt(t,e),Et(e),a&512&&(tt||n===null||un(n,n.return)),e.flags&32){o=e.stateNode;try{jl(o,"")}catch($){Le(e,e.return,$)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,Vo(e,o,n!==null?n.memoizedProps:o)),a&1024&&(Zo=!0);break;case 6:if(wt(t,e),Et(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch($){Le(e,e.return,$)}}break;case 3:if(Gr=null,o=tn,tn=qr(t.containerInfo),wt(t,e),tn=o,Et(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(t.containerInfo)}catch($){Le(e,e.return,$)}Zo&&(Zo=!1,vd(e));break;case 4:a=tn,tn=qr(e.stateNode.containerInfo),wt(t,e),Et(e),tn=a;break;case 12:wt(t,e),Et(e);break;case 31:wt(t,e),Et(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Cr(e,a)));break;case 13:wt(t,e),Et(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zr=pt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Cr(e,a)));break;case 22:o=e.memoizedState!==null;var T=n!==null&&n.memoizedState!==null,R=Cn,N=tt;if(Cn=R||o,tt=N||T,wt(t,e),tt=N,Cn=R,Et(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||T||Cn||tt||kl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){T=n=t;try{if(s=T.stateNode,o)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{b=T.stateNode;var I=T.memoizedProps.style,_=I!=null&&I.hasOwnProperty("display")?I.display:null;b.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch($){Le(T,T.return,$)}}}else if(t.tag===6){if(n===null){T=t;try{T.stateNode.nodeValue=o?"":T.memoizedProps}catch($){Le(T,T.return,$)}}}else if(t.tag===18){if(n===null){T=t;try{var M=T.stateNode;o?um(M,!0):um(T.stateNode,!1)}catch($){Le(T,T.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Cr(e,n))));break;case 19:wt(t,e),Et(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Cr(e,a)));break;case 30:break;case 21:break;default:wt(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(sd(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var o=n.stateNode,s=Qo(e);kr(e,s,o);break;case 5:var d=n.stateNode;n.flags&32&&(jl(d,""),n.flags&=-33);var b=Qo(e);kr(e,b,d);break;case 3:case 4:var T=n.stateNode.containerInfo,R=Qo(e);Xo(e,R,T);break;default:throw Error(u(161))}}catch(N){Le(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function zn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hd(e,t.alternate,t),t=t.sibling}function kl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zn(4,t,t.return),kl(t);break;case 1:un(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ud(t,t.return,n),kl(t);break;case 27:fi(t.stateNode);case 26:case 5:un(t,t.return),kl(t);break;case 22:t.memoizedState===null&&kl(t);break;case 30:kl(t);break;default:kl(t)}e=e.sibling}}function Rn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:Rn(o,s,n),ti(4,s);break;case 1:if(Rn(o,s,n),a=s,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(R){Le(a,a.return,R)}if(a=s,o=a.updateQueue,o!==null){var b=a.stateNode;try{var T=o.shared.hiddenCallbacks;if(T!==null)for(o.shared.hiddenCallbacks=null,o=0;o<T.length;o++)Ff(T[o],b)}catch(R){Le(a,a.return,R)}}n&&d&64&&rd(s),ni(s,s.return);break;case 27:cd(s);case 26:case 5:Rn(o,s,n),n&&a===null&&d&4&&od(s),ni(s,s.return);break;case 12:Rn(o,s,n);break;case 31:Rn(o,s,n),n&&d&4&&pd(o,s);break;case 13:Rn(o,s,n),n&&d&4&&yd(o,s);break;case 22:s.memoizedState===null&&Rn(o,s,n),ni(s,s.return);break;case 30:break;default:Rn(o,s,n)}t=t.sibling}}function Ko(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ga(n))}function Fo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ga(e))}function nn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bd(e,t,n,a),t=t.sibling}function bd(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:nn(e,t,n,a),o&2048&&ti(9,t);break;case 1:nn(e,t,n,a);break;case 3:nn(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ga(e)));break;case 12:if(o&2048){nn(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,b=s.onPostCommit;typeof b=="function"&&b(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Le(t,t.return,T)}}else nn(e,t,n,a);break;case 31:nn(e,t,n,a);break;case 13:nn(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?nn(e,t,n,a):li(e,t):s._visibility&2?nn(e,t,n,a):(s._visibility|=2,ia(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),o&2048&&Ko(d,t);break;case 24:nn(e,t,n,a),o&2048&&Fo(t.alternate,t);break;default:nn(e,t,n,a)}}function ia(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,b=n,T=a,R=d.flags;switch(d.tag){case 0:case 11:case 15:ia(s,d,b,T,o),ti(8,d);break;case 23:break;case 22:var N=d.stateNode;d.memoizedState!==null?N._visibility&2?ia(s,d,b,T,o):li(s,d):(N._visibility|=2,ia(s,d,b,T,o)),o&&R&2048&&Ko(d.alternate,d);break;case 24:ia(s,d,b,T,o),o&&R&2048&&Fo(d.alternate,d);break;default:ia(s,d,b,T,o)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:li(n,a),o&2048&&Ko(a.alternate,a);break;case 24:li(n,a),o&2048&&Fo(a.alternate,a);break;default:li(n,a)}t=t.sibling}}var ai=8192;function ra(e,t,n){if(e.subtreeFlags&ai)for(e=e.child;e!==null;)Sd(e,t,n),e=e.sibling}function Sd(e,t,n){switch(e.tag){case 26:ra(e,t,n),e.flags&ai&&e.memoizedState!==null&&Bv(n,tn,e.memoizedState,e.memoizedProps);break;case 5:ra(e,t,n);break;case 3:case 4:var a=tn;tn=qr(e.stateNode.containerInfo),ra(e,t,n),tn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ai,ai=16777216,ra(e,t,n),ai=a):ra(e,t,n));break;default:ra(e,t,n)}}function xd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];rt=a,Ed(a,e)}xd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wd(e),e=e.sibling}function wd(e){switch(e.tag){case 0:case 11:case 15:ii(e),e.flags&2048&&Zn(9,e,e.return);break;case 3:ii(e);break;case 12:ii(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ar(e)):ii(e);break;default:ii(e)}}function Ar(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];rt=a,Ed(a,e)}xd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zn(8,t,t.return),Ar(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ar(t));break;default:Ar(t)}e=e.sibling}}function Ed(e,t){for(;rt!==null;){var n=rt;switch(n.tag){case 0:case 11:case 15:Zn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ga(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,rt=a;else e:for(n=e;rt!==null;){a=rt;var o=a.sibling,s=a.return;if(dd(a),a===n){rt=null;break e}if(o!==null){o.return=s,rt=o;break e}rt=s}}}var $g={getCacheForType:function(e){var t=ct(Pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ct(Pe).controller.signal}},ev=typeof WeakMap=="function"?WeakMap:Map,_e=0,qe=null,xe=null,Te=0,Me=0,Lt=null,Kn=!1,ua=!1,Wo=!1,_n=0,Fe=0,Fn=0,Cl=0,Jo=0,Nt=0,oa=0,ri=null,Tt=null,Po=!1,zr=0,Td=0,Rr=1/0,_r=null,Wn=null,at=0,Jn=null,sa=null,Dn=0,$o=0,es=null,kd=null,ui=0,ts=null;function Ut(){return(_e&2)!==0&&Te!==0?Te&-Te:D.T!==null?us():qc()}function Cd(){if(Nt===0)if((Te&536870912)===0||Ce){var e=Bi;Bi<<=1,(Bi&3932160)===0&&(Bi=262144),Nt=e}else Nt=536870912;return e=Ot.current,e!==null&&(e.flags|=32),Nt}function kt(e,t,n){(e===qe&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(ca(e,0),Pn(e,Te,Nt,!1)),za(e,n),((_e&2)===0||e!==qe)&&(e===qe&&((_e&2)===0&&(Cl|=n),Fe===4&&Pn(e,Te,Nt,!1)),on(e))}function Ad(e,t,n){if((_e&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Aa(e,t),o=a?lv(e,t):ls(e,t,!0),s=a;do{if(o===0){ua&&!a&&Pn(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!tv(n)){o=ls(e,t,!1),s=!1;continue}if(o===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var b=e;o=ri;var T=b.current.memoizedState.isDehydrated;if(T&&(ca(b,d).flags|=256),d=ls(b,d,!1),d!==2){if(Wo&&!T){b.errorRecoveryDisabledLanes|=s,Cl|=s,o=4;break e}s=Tt,Tt=o,s!==null&&(Tt===null?Tt=s:Tt.push.apply(Tt,s))}o=d}if(s=!1,o!==2)continue}}if(o===1){ca(e,0),Pn(e,t,0,!0);break}e:{switch(a=e,s=o,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Pn(a,t,Nt,!Kn);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(o=zr+300-pt(),10<o)){if(Pn(a,t,Nt,!Kn),qi(a,0,!0)!==0)break e;Dn=t,a.timeoutHandle=am(zd.bind(null,a,n,Tt,_r,Po,t,Nt,Cl,oa,Kn,s,"Throttled",-0,0),o);break e}zd(a,n,Tt,_r,Po,t,Nt,Cl,oa,Kn,s,null,-0,0)}}break}while(!0);on(e)}function zd(e,t,n,a,o,s,d,b,T,R,N,I,_,M){if(e.timeoutHandle=-1,I=t.subtreeFlags,I&8192||(I&16785408)===16785408){I={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},Sd(t,s,I);var $=(s&62914560)===s?zr-pt():(s&4194048)===s?Td-pt():0;if($=jv(I,$),$!==null){Dn=s,e.cancelPendingCommit=$(Ud.bind(null,e,t,s,n,a,o,d,b,T,N,I,null,_,M)),Pn(e,s,d,!R);return}}Ud(e,t,s,n,a,o,d,b,T)}function tv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],s=o.getSnapshot;o=o.value;try{if(!_t(s(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t,n,a){t&=~Jo,t&=~Cl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var s=31-je(o),d=1<<s;a[s]=-1,o&=~d}n!==0&&Hc(e,n,t)}function Dr(){return(_e&6)===0?(oi(0),!1):!0}function ns(){if(xe!==null){if(Me===0)var e=xe.return;else e=xe,Sn=gl=null,vo(e),ea=null,Va=0,e=xe;for(;e!==null;)id(e.alternate,e),e=e.return;xe=null}}function ca(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,xv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dn=0,ns(),qe=e,xe=n=vn(e.current,null),Te=t,Me=0,Lt=null,Kn=!1,ua=Aa(e,t),Wo=!1,oa=Nt=Jo=Cl=Fn=Fe=0,Tt=ri=null,Po=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-je(a),s=1<<o;t|=e[o],a&=~s}return _n=t,Pi(),n}function Rd(e,t){pe=null,D.H=Pa,t===$l||t===rr?(t=Qf(),Me=3):t===io?(t=Qf(),Me=4):Me=t===Lo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Lt=t,xe===null&&(Fe=1,Sr(e,Qt(t,e.current)))}function _d(){var e=Ot.current;return e===null?!0:(Te&4194048)===Te?Ft===null:(Te&62914560)===Te||(Te&536870912)!==0?e===Ft:!1}function Dd(){var e=D.H;return D.H=Pa,e===null?Pa:e}function Od(){var e=D.A;return D.A=$g,e}function Or(){Fe=4,Kn||(Te&4194048)!==Te&&Ot.current!==null||(ua=!0),(Fn&134217727)===0&&(Cl&134217727)===0||qe===null||Pn(qe,Te,Nt,!1)}function ls(e,t,n){var a=_e;_e|=2;var o=Dd(),s=Od();(qe!==e||Te!==t)&&(_r=null,ca(e,t)),t=!1;var d=Fe;e:do try{if(Me!==0&&xe!==null){var b=xe,T=Lt;switch(Me){case 8:ns(),d=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(t=!0);var R=Me;if(Me=0,Lt=null,fa(e,b,T,R),n&&ua){d=0;break e}break;default:R=Me,Me=0,Lt=null,fa(e,b,T,R)}}nv(),d=Fe;break}catch(N){Rd(e,N)}while(!0);return t&&e.shellSuspendCounter++,Sn=gl=null,_e=a,D.H=o,D.A=s,xe===null&&(qe=null,Te=0,Pi()),d}function nv(){for(;xe!==null;)Md(xe)}function lv(e,t){var n=_e;_e|=2;var a=Dd(),o=Od();qe!==e||Te!==t?(_r=null,Rr=pt()+500,ca(e,t)):ua=Aa(e,t);e:do try{if(Me!==0&&xe!==null){t=xe;var s=Lt;t:switch(Me){case 1:Me=0,Lt=null,fa(e,t,s,1);break;case 2:case 9:if(If(s)){Me=0,Lt=null,Ld(t);break}t=function(){Me!==2&&Me!==9||qe!==e||(Me=7),on(e)},s.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:If(s)?(Me=0,Lt=null,Ld(t)):(Me=0,Lt=null,fa(e,t,s,7));break;case 5:var d=null;switch(xe.tag){case 26:d=xe.memoizedState;case 5:case 27:var b=xe;if(d?bm(d):b.stateNode.complete){Me=0,Lt=null;var T=b.sibling;if(T!==null)xe=T;else{var R=b.return;R!==null?(xe=R,Mr(R)):xe=null}break t}}Me=0,Lt=null,fa(e,t,s,5);break;case 6:Me=0,Lt=null,fa(e,t,s,6);break;case 8:ns(),Fe=6;break e;default:throw Error(u(462))}}av();break}catch(N){Rd(e,N)}while(!0);return Sn=gl=null,D.H=a,D.A=o,_e=n,xe!==null?0:(qe=null,Te=0,Pi(),Fe)}function av(){for(;xe!==null&&!pu();)Md(xe)}function Md(e){var t=ld(e.alternate,e,_n);e.memoizedProps=e.pendingProps,t===null?Mr(e):xe=t}function Ld(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jh(n,t,t.pendingProps,t.type,void 0,Te);break;case 11:t=Jh(n,t,t.pendingProps,t.type.render,t.ref,Te);break;case 5:vo(t);default:id(n,t),t=xe=Of(t,_n),t=ld(n,t,_n)}e.memoizedProps=e.pendingProps,t===null?Mr(e):xe=t}function fa(e,t,n,a){Sn=gl=null,vo(t),ea=null,Va=0;var o=t.return;try{if(Xg(e,o,t,n,Te)){Fe=1,Sr(e,Qt(n,e.current)),xe=null;return}}catch(s){if(o!==null)throw xe=o,s;Fe=1,Sr(e,Qt(n,e.current)),xe=null;return}t.flags&32768?(Ce||a===1?e=!0:ua||(Te&536870912)!==0?e=!1:(Kn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ot.current,a!==null&&a.tag===13&&(a.flags|=16384))),Nd(t,e)):Mr(t)}function Mr(e){var t=e;do{if((t.flags&32768)!==0){Nd(t,Kn);return}e=t.return;var n=Fg(t.alternate,t,_n);if(n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Fe===0&&(Fe=5)}function Nd(e,t){do{var n=Wg(e.alternate,e);if(n!==null){n.flags&=32767,xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=n}while(e!==null);Fe=6,xe=null}function Ud(e,t,n,a,o,s,d,b,T){e.cancelPendingCommit=null;do Lr();while(at!==0);if((_e&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Vu,Hy(e,n,s,d,b,T),e===qe&&(xe=qe=null,Te=0),sa=t,Jn=e,Dn=n,$o=s,es=o,kd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ov(he,function(){return Yd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,o=X.p,X.p=2,d=_e,_e|=4;try{Jg(e,t,n)}finally{_e=d,X.p=o,D.T=a}}at=1,Hd(),Bd(),jd()}}function Hd(){if(at===1){at=0;var e=Jn,t=sa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var a=X.p;X.p=2;var o=_e;_e|=4;try{gd(t,e);var s=ps,d=Ef(e.containerInfo),b=s.focusedElem,T=s.selectionRange;if(d!==b&&b&&b.ownerDocument&&wf(b.ownerDocument.documentElement,b)){if(T!==null&&ju(b)){var R=T.start,N=T.end;if(N===void 0&&(N=R),"selectionStart"in b)b.selectionStart=R,b.selectionEnd=Math.min(N,b.value.length);else{var I=b.ownerDocument||document,_=I&&I.defaultView||window;if(_.getSelection){var M=_.getSelection(),$=b.textContent.length,oe=Math.min(T.start,$),Be=T.end===void 0?oe:Math.min(T.end,$);!M.extend&&oe>Be&&(d=Be,Be=oe,oe=d);var A=xf(b,oe),C=xf(b,Be);if(A&&C&&(M.rangeCount!==1||M.anchorNode!==A.node||M.anchorOffset!==A.offset||M.focusNode!==C.node||M.focusOffset!==C.offset)){var z=I.createRange();z.setStart(A.node,A.offset),M.removeAllRanges(),oe>Be?(M.addRange(z),M.extend(C.node,C.offset)):(z.setEnd(C.node,C.offset),M.addRange(z))}}}}for(I=[],M=b;M=M.parentNode;)M.nodeType===1&&I.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<I.length;b++){var G=I[b];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Xr=!!ms,ps=ms=null}finally{_e=o,X.p=a,D.T=n}}e.current=t,at=2}}function Bd(){if(at===2){at=0;var e=Jn,t=sa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var a=X.p;X.p=2;var o=_e;_e|=4;try{hd(e,t.alternate,t)}finally{_e=o,X.p=a,D.T=n}}at=3}}function jd(){if(at===4||at===3){at=0,yu();var e=Jn,t=sa,n=Dn,a=kd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?at=5:(at=0,sa=Jn=null,qd(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Wn=null),Su(n),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(yt,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=D.T,o=X.p,X.p=2,D.T=null;try{for(var s=e.onRecoverableError,d=0;d<a.length;d++){var b=a[d];s(b.value,{componentStack:b.stack})}}finally{D.T=t,X.p=o}}(Dn&3)!==0&&Lr(),on(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===ts?ui++:(ui=0,ts=e):ui=0,oi(0)}}function qd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ga(t)))}function Lr(){return Hd(),Bd(),jd(),Yd()}function Yd(){if(at!==5)return!1;var e=Jn,t=$o;$o=0;var n=Su(Dn),a=D.T,o=X.p;try{X.p=32>n?32:n,D.T=null,n=es,es=null;var s=Jn,d=Dn;if(at=0,sa=Jn=null,Dn=0,(_e&6)!==0)throw Error(u(331));var b=_e;if(_e|=4,wd(s.current),bd(s,s.current,d,n),_e=b,oi(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(yt,s)}catch{}return!0}finally{X.p=o,D.T=a,qd(e,t)}}function Gd(e,t,n){t=Qt(n,t),t=Mo(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(za(e,2),on(e))}function Le(e,t,n){if(e.tag===3)Gd(e,e,n);else for(;t!==null;){if(t.tag===3){Gd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Wn===null||!Wn.has(a))){e=Qt(n,e),n=Ih(2),a=Vn(t,n,2),a!==null&&(Vh(n,a,t,e),za(a,2),on(a));break}}t=t.return}}function as(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new ev;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(Wo=!0,o.add(n),e=iv.bind(null,e,t,n),t.then(e,e))}function iv(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,qe===e&&(Te&n)===n&&(Fe===4||Fe===3&&(Te&62914560)===Te&&300>pt()-zr?(_e&2)===0&&ca(e,0):Jo|=n,oa===Te&&(oa=0)),on(e)}function Id(e,t){t===0&&(t=Uc()),e=ml(e,t),e!==null&&(za(e,t),on(e))}function rv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Id(e,n)}function uv(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Id(e,n)}function ov(e,t){return Ol(e,t)}var Nr=null,ha=null,is=!1,Ur=!1,rs=!1,$n=0;function on(e){e!==ha&&e.next===null&&(ha===null?Nr=ha=e:ha=ha.next=e),Ur=!0,is||(is=!0,cv())}function oi(e,t){if(!rs&&Ur){rs=!0;do for(var n=!1,a=Nr;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var s=0;else{var d=a.suspendedLanes,b=a.pingedLanes;s=(1<<31-je(42|e)+1)-1,s&=o&~(d&~b),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Zd(a,s))}else s=Te,s=qi(a,a===qe?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Aa(a,s)||(n=!0,Zd(a,s));a=a.next}while(n);rs=!1}}function sv(){Vd()}function Vd(){Ur=is=!1;var e=0;$n!==0&&Sv()&&(e=$n);for(var t=pt(),n=null,a=Nr;a!==null;){var o=a.next,s=Qd(a,t);s===0?(a.next=null,n===null?Nr=o:n.next=o,o===null&&(ha=n)):(n=a,(e!==0||(s&3)!==0)&&(Ur=!0)),a=o}at!==0&&at!==5||oi(e),$n!==0&&($n=0)}function Qd(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-je(s),b=1<<d,T=o[d];T===-1?((b&n)===0||(b&a)!==0)&&(o[d]=Uy(b,t)):T<=t&&(e.expiredLanes|=b),s&=~b}if(t=qe,n=Te,n=qi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ca(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Aa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Ca(a),Su(n)){case 2:case 8:n=F;break;case 32:n=he;break;case 268435456:n=Oe;break;default:n=he}return a=Xd.bind(null,e),n=Ol(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Ca(a),e.callbackPriority=2,e.callbackNode=null,2}function Xd(e,t){if(at!==0&&at!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Lr()&&e.callbackNode!==n)return null;var a=Te;return a=qi(e,e===qe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Ad(e,a,t),Qd(e,pt()),e.callbackNode!=null&&e.callbackNode===n?Xd.bind(null,e):null)}function Zd(e,t){if(Lr())return null;Ad(e,t,!0)}function cv(){wv(function(){(_e&6)!==0?Ol(q,sv):Vd()})}function us(){if($n===0){var e=Jl;e===0&&(e=Hi,Hi<<=1,(Hi&261888)===0&&(Hi=256)),$n=e}return $n}function Kd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vi(""+e)}function Fd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function fv(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var s=Kd((o[bt]||null).action),d=a.submitter;d&&(t=(t=d[bt]||null)?Kd(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var b=new Ki("action","action",null,a,o);e.push({event:b,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if($n!==0){var T=d?Fd(o,d):new FormData(o);Ao(n,{pending:!0,data:T,method:o.method,action:s},null,T)}}else typeof s=="function"&&(b.preventDefault(),T=d?Fd(o,d):new FormData(o),Ao(n,{pending:!0,data:T,method:o.method,action:s},s,T))},currentTarget:o}]})}}for(var os=0;os<Iu.length;os++){var ss=Iu[os],hv=ss.toLowerCase(),dv=ss[0].toUpperCase()+ss.slice(1);en(hv,"on"+dv)}en(Cf,"onAnimationEnd"),en(Af,"onAnimationIteration"),en(zf,"onAnimationStart"),en("dblclick","onDoubleClick"),en("focusin","onFocus"),en("focusout","onBlur"),en(Rg,"onTransitionRun"),en(_g,"onTransitionStart"),en(Dg,"onTransitionCancel"),en(Rf,"onTransitionEnd"),Hl("onMouseEnter",["mouseout","mouseover"]),Hl("onMouseLeave",["mouseout","mouseover"]),Hl("onPointerEnter",["pointerout","pointerover"]),Hl("onPointerLeave",["pointerout","pointerover"]),cl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cl("onBeforeInput",["compositionend","keypress","textInput","paste"]),cl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function Wd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var d=a.length-1;0<=d;d--){var b=a[d],T=b.instance,R=b.currentTarget;if(b=b.listener,T!==s&&o.isPropagationStopped())break e;s=b,o.currentTarget=R;try{s(o)}catch(N){Ji(N)}o.currentTarget=null,s=T}else for(d=0;d<a.length;d++){if(b=a[d],T=b.instance,R=b.currentTarget,b=b.listener,T!==s&&o.isPropagationStopped())break e;s=b,o.currentTarget=R;try{s(o)}catch(N){Ji(N)}o.currentTarget=null,s=T}}}}function we(e,t){var n=t[xu];n===void 0&&(n=t[xu]=new Set);var a=e+"__bubble";n.has(a)||(Jd(t,e,2,!1),n.add(a))}function cs(e,t,n){var a=0;t&&(a|=4),Jd(n,e,a,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function fs(e){if(!e[Hr]){e[Hr]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(mv.has(n)||cs(n,!1,e),cs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,cs("selectionchange",!1,t))}}function Jd(e,t,n,a){switch(Cm(t)){case 2:var o=Gv;break;case 8:o=Iv;break;default:o=Cs}n=o.bind(null,t,n,e),o=void 0,!_u||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function hs(e,t,n,a,o){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var b=a.stateNode.containerInfo;if(b===o)break;if(d===4)for(d=a.return;d!==null;){var T=d.tag;if((T===3||T===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;b!==null;){if(d=Ll(b),d===null)return;if(T=d.tag,T===5||T===6||T===26||T===27){a=s=d;continue e}b=b.parentNode}}a=a.return}tf(function(){var R=s,N=zu(n),I=[];e:{var _=_f.get(e);if(_!==void 0){var M=Ki,$=e;switch(e){case"keypress":if(Xi(n)===0)break e;case"keydown":case"keyup":M=ug;break;case"focusin":$="focus",M=Lu;break;case"focusout":$="blur",M=Lu;break;case"beforeblur":case"afterblur":M=Lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=cg;break;case Cf:case Af:case zf:M=Py;break;case Rf:M=hg;break;case"scroll":case"scrollend":M=Zy;break;case"wheel":M=mg;break;case"copy":case"cut":case"paste":M=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=uf;break;case"toggle":case"beforetoggle":M=yg}var oe=(t&4)!==0,Be=!oe&&(e==="scroll"||e==="scrollend"),A=oe?_!==null?_+"Capture":null:_;oe=[];for(var C=R,z;C!==null;){var G=C;if(z=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||z===null||A===null||(G=Da(C,A),G!=null&&oe.push(ci(C,G,z))),Be)break;C=C.return}0<oe.length&&(_=new M(_,$,null,n,N),I.push({event:_,listeners:oe}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",_&&n!==Au&&($=n.relatedTarget||n.fromElement)&&(Ll($)||$[Ml]))break e;if((M||_)&&(_=N.window===N?N:(_=N.ownerDocument)?_.defaultView||_.parentWindow:window,M?($=n.relatedTarget||n.toElement,M=R,$=$?Ll($):null,$!==null&&(Be=f($),oe=$.tag,$!==Be||oe!==5&&oe!==27&&oe!==6)&&($=null)):(M=null,$=R),M!==$)){if(oe=af,G="onMouseLeave",A="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(oe=uf,G="onPointerLeave",A="onPointerEnter",C="pointer"),Be=M==null?_:_a(M),z=$==null?_:_a($),_=new oe(G,C+"leave",M,n,N),_.target=Be,_.relatedTarget=z,G=null,Ll(N)===R&&(oe=new oe(A,C+"enter",$,n,N),oe.target=z,oe.relatedTarget=Be,G=oe),Be=G,M&&$)t:{for(oe=pv,A=M,C=$,z=0,G=A;G;G=oe(G))z++;G=0;for(var ie=C;ie;ie=oe(ie))G++;for(;0<z-G;)A=oe(A),z--;for(;0<G-z;)C=oe(C),G--;for(;z--;){if(A===C||C!==null&&A===C.alternate){oe=A;break t}A=oe(A),C=oe(C)}oe=null}else oe=null;M!==null&&Pd(I,_,M,oe,!1),$!==null&&Be!==null&&Pd(I,Be,$,oe,!0)}}e:{if(_=R?_a(R):window,M=_.nodeName&&_.nodeName.toLowerCase(),M==="select"||M==="input"&&_.type==="file")var ze=pf;else if(df(_))if(yf)ze=Cg;else{ze=Tg;var te=Eg}else M=_.nodeName,!M||M.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?R&&Cu(R.elementType)&&(ze=pf):ze=kg;if(ze&&(ze=ze(e,R))){mf(I,ze,n,N);break e}te&&te(e,_,R),e==="focusout"&&R&&_.type==="number"&&R.memoizedProps.value!=null&&ku(_,"number",_.value)}switch(te=R?_a(R):window,e){case"focusin":(df(te)||te.contentEditable==="true")&&(Il=te,qu=R,ja=null);break;case"focusout":ja=qu=Il=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,Tf(I,n,N);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":Tf(I,n,N)}var ge;if(Uu)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Gl?ff(e,n)&&(ke="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ke="onCompositionStart");ke&&(of&&n.locale!=="ko"&&(Gl||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Gl&&(ge=nf()):(Hn=N,Du="value"in Hn?Hn.value:Hn.textContent,Gl=!0)),te=Br(R,ke),0<te.length&&(ke=new rf(ke,e,null,n,N),I.push({event:ke,listeners:te}),ge?ke.data=ge:(ge=hf(n),ge!==null&&(ke.data=ge)))),(ge=vg?bg(e,n):Sg(e,n))&&(ke=Br(R,"onBeforeInput"),0<ke.length&&(te=new rf("onBeforeInput","beforeinput",null,n,N),I.push({event:te,listeners:ke}),te.data=ge)),fv(I,e,R,n,N)}Wd(I,t)})}function ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=Da(e,n),o!=null&&a.unshift(ci(e,o,s)),o=Da(e,t),o!=null&&a.push(ci(e,o,s))),e.tag===3)return a;e=e.return}return[]}function pv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pd(e,t,n,a,o){for(var s=t._reactName,d=[];n!==null&&n!==a;){var b=n,T=b.alternate,R=b.stateNode;if(b=b.tag,T!==null&&T===a)break;b!==5&&b!==26&&b!==27||R===null||(T=R,o?(R=Da(n,s),R!=null&&d.unshift(ci(n,R,T))):o||(R=Da(n,s),R!=null&&d.push(ci(n,R,T)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var yv=/\r\n?/g,gv=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(yv,`
`).replace(gv,"")}function em(e,t){return t=$d(t),$d(e)===t}function He(e,t,n,a,o,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||jl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&jl(e,""+a);break;case"className":Gi(e,"class",a);break;case"tabIndex":Gi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Gi(e,n,a);break;case"style":$c(e,a,s);break;case"data":if(t!=="object"){Gi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Vi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&He(e,t,"name",o.name,o,null),He(e,t,"formEncType",o.formEncType,o,null),He(e,t,"formMethod",o.formMethod,o,null),He(e,t,"formTarget",o.formTarget,o,null)):(He(e,t,"encType",o.encType,o,null),He(e,t,"method",o.method,o,null),He(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Vi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=yn);break;case"onScroll":a!=null&&we("scroll",e);break;case"onScrollEnd":a!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Vi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":we("beforetoggle",e),we("toggle",e),Yi(e,"popover",a);break;case"xlinkActuate":pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":pn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":pn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":pn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":pn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Yi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Qy.get(n)||n,Yi(e,n,a))}}function ds(e,t,n,a,o,s){switch(n){case"style":$c(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?jl(e,a):(typeof a=="number"||typeof a=="bigint")&&jl(e,""+a);break;case"onScroll":a!=null&&we("scroll",e);break;case"onScrollEnd":a!=null&&we("scrollend",e);break;case"onClick":a!=null&&(e.onclick=yn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),s=e[bt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,o),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Yi(e,n,a)}}}function ht(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var a=!1,o=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,s,d,n,null)}}o&&He(e,t,"srcSet",n.srcSet,n,null),a&&He(e,t,"src",n.src,n,null);return;case"input":we("invalid",e);var b=s=d=o=null,T=null,R=null;for(a in n)if(n.hasOwnProperty(a)){var N=n[a];if(N!=null)switch(a){case"name":o=N;break;case"type":d=N;break;case"checked":T=N;break;case"defaultChecked":R=N;break;case"value":s=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:He(e,t,a,N,n,null)}}Fc(e,s,b,T,R,d,o,!1);return;case"select":we("invalid",e),a=d=s=null;for(o in n)if(n.hasOwnProperty(o)&&(b=n[o],b!=null))switch(o){case"value":s=b;break;case"defaultValue":d=b;break;case"multiple":a=b;default:He(e,t,o,b,n,null)}t=s,n=d,e.multiple=!!a,t!=null?Bl(e,!!a,t,!1):n!=null&&Bl(e,!!a,n,!0);return;case"textarea":we("invalid",e),s=o=a=null;for(d in n)if(n.hasOwnProperty(d)&&(b=n[d],b!=null))switch(d){case"value":a=b;break;case"defaultValue":o=b;break;case"children":s=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(u(91));break;default:He(e,t,d,b,n,null)}Jc(e,a,o,s);return;case"option":for(T in n)n.hasOwnProperty(T)&&(a=n[T],a!=null)&&(T==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":He(e,t,T,a,n,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(a=0;a<si.length;a++)we(si[a],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(a=n[R],a!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,R,a,n,null)}return;default:if(Cu(t)){for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!==void 0&&ds(e,t,N,a,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(a=n[b],a!=null&&He(e,t,b,a,n,null))}function vv(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,d=null,b=null,T=null,R=null,N=null;for(M in n){var I=n[M];if(n.hasOwnProperty(M)&&I!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":T=I;default:a.hasOwnProperty(M)||He(e,t,M,null,a,I)}}for(var _ in a){var M=a[_];if(I=n[_],a.hasOwnProperty(_)&&(M!=null||I!=null))switch(_){case"type":s=M;break;case"name":o=M;break;case"checked":R=M;break;case"defaultChecked":N=M;break;case"value":d=M;break;case"defaultValue":b=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:M!==I&&He(e,t,_,M,a,I)}}Tu(e,d,b,T,R,N,s,o);return;case"select":M=d=b=_=null;for(s in n)if(T=n[s],n.hasOwnProperty(s)&&T!=null)switch(s){case"value":break;case"multiple":M=T;default:a.hasOwnProperty(s)||He(e,t,s,null,a,T)}for(o in a)if(s=a[o],T=n[o],a.hasOwnProperty(o)&&(s!=null||T!=null))switch(o){case"value":_=s;break;case"defaultValue":b=s;break;case"multiple":d=s;default:s!==T&&He(e,t,o,s,a,T)}t=b,n=d,a=M,_!=null?Bl(e,!!n,_,!1):!!a!=!!n&&(t!=null?Bl(e,!!n,t,!0):Bl(e,!!n,n?[]:"",!1));return;case"textarea":M=_=null;for(b in n)if(o=n[b],n.hasOwnProperty(b)&&o!=null&&!a.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:He(e,t,b,null,a,o)}for(d in a)if(o=a[d],s=n[d],a.hasOwnProperty(d)&&(o!=null||s!=null))switch(d){case"value":_=o;break;case"defaultValue":M=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==s&&He(e,t,d,o,a,s)}Wc(e,_,M);return;case"option":for(var $ in n)_=n[$],n.hasOwnProperty($)&&_!=null&&!a.hasOwnProperty($)&&($==="selected"?e.selected=!1:He(e,t,$,null,a,_));for(T in a)_=a[T],M=n[T],a.hasOwnProperty(T)&&_!==M&&(_!=null||M!=null)&&(T==="selected"?e.selected=_&&typeof _!="function"&&typeof _!="symbol":He(e,t,T,_,a,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)_=n[oe],n.hasOwnProperty(oe)&&_!=null&&!a.hasOwnProperty(oe)&&He(e,t,oe,null,a,_);for(R in a)if(_=a[R],M=n[R],a.hasOwnProperty(R)&&_!==M&&(_!=null||M!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(u(137,t));break;default:He(e,t,R,_,a,M)}return;default:if(Cu(t)){for(var Be in n)_=n[Be],n.hasOwnProperty(Be)&&_!==void 0&&!a.hasOwnProperty(Be)&&ds(e,t,Be,void 0,a,_);for(N in a)_=a[N],M=n[N],!a.hasOwnProperty(N)||_===M||_===void 0&&M===void 0||ds(e,t,N,_,a,M);return}}for(var A in n)_=n[A],n.hasOwnProperty(A)&&_!=null&&!a.hasOwnProperty(A)&&He(e,t,A,null,a,_);for(I in a)_=a[I],M=n[I],!a.hasOwnProperty(I)||_===M||_==null&&M==null||He(e,t,I,_,a,M)}function tm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],s=o.transferSize,d=o.initiatorType,b=o.duration;if(s&&b&&tm(d)){for(d=0,b=o.responseEnd,a+=1;a<n.length;a++){var T=n[a],R=T.startTime;if(R>b)break;var N=T.transferSize,I=T.initiatorType;N&&tm(I)&&(T=T.responseEnd,d+=N*(T<b?1:(b-R)/(T-R)))}if(--a,t+=8*(s+d)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ms=null,ps=null;function jr(e){return e.nodeType===9?e:e.ownerDocument}function nm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ys(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gs=null;function Sv(){var e=window.event;return e&&e.type==="popstate"?e===gs?!1:(gs=e,!0):(gs=null,!1)}var am=typeof setTimeout=="function"?setTimeout:void 0,xv=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,wv=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(e){return im.resolve(null).then(e).catch(Ev)}:am;function Ev(e){setTimeout(function(){throw e})}function el(e){return e==="head"}function rm(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),ya(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")fi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,fi(n);for(var s=n.firstChild;s;){var d=s.nextSibling,b=s.nodeName;s[Ra]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&fi(e.ownerDocument.body);n=o}while(n);ya(t)}function um(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function vs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":vs(n),wu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Tv(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ra])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function kv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Wt(e.nextSibling),e===null))return null;return e}function om(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Wt(e.nextSibling),e===null))return null;return e}function bs(e){return e.data==="$?"||e.data==="$~"}function Ss(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cv(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xs=null;function sm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Wt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function cm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function fm(e,t,n){switch(t=jr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function fi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wu(e)}var Jt=new Map,hm=new Set;function qr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=X.d;X.d={f:Av,r:zv,D:Rv,C:_v,L:Dv,m:Ov,X:Lv,S:Mv,M:Nv};function Av(){var e=On.f(),t=Dr();return e||t}function zv(e){var t=Nl(e);t!==null&&t.tag===5&&t.type==="form"?Rh(t):On.r(e)}var da=typeof document>"u"?null:document;function dm(e,t,n){var a=da;if(a&&typeof t=="string"&&t){var o=It(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),hm.has(o)||(hm.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),ht(t,"link",e),it(t),a.head.appendChild(t)))}}function Rv(e){On.D(e),dm("dns-prefetch",e,null)}function _v(e,t){On.C(e,t),dm("preconnect",e,t)}function Dv(e,t,n){On.L(e,t,n);var a=da;if(a&&e&&t){var o='link[rel="preload"][as="'+It(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+It(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+It(n.imageSizes)+'"]')):o+='[href="'+It(e)+'"]';var s=o;switch(t){case"style":s=ma(e);break;case"script":s=pa(e)}Jt.has(s)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Jt.set(s,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(hi(s))||t==="script"&&a.querySelector(di(s))||(t=a.createElement("link"),ht(t,"link",e),it(t),a.head.appendChild(t)))}}function Ov(e,t){On.m(e,t);var n=da;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+It(a)+'"][href="'+It(e)+'"]',s=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=pa(e)}if(!Jt.has(s)&&(e=v({rel:"modulepreload",href:e},t),Jt.set(s,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(di(s)))return}a=n.createElement("link"),ht(a,"link",e),it(a),n.head.appendChild(a)}}}function Mv(e,t,n){On.S(e,t,n);var a=da;if(a&&e){var o=Ul(a).hoistableStyles,s=ma(e);t=t||"default";var d=o.get(s);if(!d){var b={loading:0,preload:null};if(d=a.querySelector(hi(s)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Jt.get(s))&&ws(e,n);var T=d=a.createElement("link");it(T),ht(T,"link",e),T._p=new Promise(function(R,N){T.onload=R,T.onerror=N}),T.addEventListener("load",function(){b.loading|=1}),T.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yr(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:b},o.set(s,d)}}}function Lv(e,t){On.X(e,t);var n=da;if(n&&e){var a=Ul(n).hoistableScripts,o=pa(e),s=a.get(o);s||(s=n.querySelector(di(o)),s||(e=v({src:e,async:!0},t),(t=Jt.get(o))&&Es(e,t),s=n.createElement("script"),it(s),ht(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function Nv(e,t){On.M(e,t);var n=da;if(n&&e){var a=Ul(n).hoistableScripts,o=pa(e),s=a.get(o);s||(s=n.querySelector(di(o)),s||(e=v({src:e,async:!0,type:"module"},t),(t=Jt.get(o))&&Es(e,t),s=n.createElement("script"),it(s),ht(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function mm(e,t,n,a){var o=(o=ae.current)?qr(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ma(n.href),n=Ul(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ma(n.href);var s=Ul(o).hoistableStyles,d=s.get(e);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=o.querySelector(hi(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Jt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Jt.set(e,n),s||Uv(o,e,n,d.state))),t&&a===null)throw Error(u(528,""));return d}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=pa(n),n=Ul(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ma(e){return'href="'+It(e)+'"'}function hi(e){return'link[rel="stylesheet"]['+e+"]"}function pm(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Uv(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ht(t,"link",n),it(t),e.head.appendChild(t))}function pa(e){return'[src="'+It(e)+'"]'}function di(e){return"script[async]"+e}function ym(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+It(n.href)+'"]');if(a)return t.instance=a,it(a),a;var o=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),it(a),ht(a,"style",o),Yr(a,n.precedence,e),t.instance=a;case"stylesheet":o=ma(n.href);var s=e.querySelector(hi(o));if(s)return t.state.loading|=4,t.instance=s,it(s),s;a=pm(n),(o=Jt.get(o))&&ws(a,o),s=(e.ownerDocument||e).createElement("link"),it(s);var d=s;return d._p=new Promise(function(b,T){d.onload=b,d.onerror=T}),ht(s,"link",a),t.state.loading|=4,Yr(s,n.precedence,e),t.instance=s;case"script":return s=pa(n.src),(o=e.querySelector(di(s)))?(t.instance=o,it(o),o):(a=n,(o=Jt.get(s))&&(a=v({},n),Es(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),it(o),ht(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Yr(a,n.precedence,e));return t.instance}function Yr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,s=o,d=0;d<a.length;d++){var b=a[d];if(b.dataset.precedence===t)s=b;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ws(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Es(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gr=null;function gm(e,t,n){if(Gr===null){var a=new Map,o=Gr=new Map;o.set(n,a)}else o=Gr,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var s=n[o];if(!(s[Ra]||s[ot]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var b=a.get(d);b?b.push(s):a.set(d,[s])}}return a}function vm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Hv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bv(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=ma(a.href),s=t.querySelector(hi(o));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ir.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,it(s);return}s=t.ownerDocument||t,a=pm(a),(o=Jt.get(o))&&ws(a,o),s=s.createElement("link"),it(s);var d=s;d._p=new Promise(function(b,T){d.onload=b,d.onerror=T}),ht(s,"link",a),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ir.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ts=0;function jv(e,t){return e.stylesheets&&e.count===0&&Qr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Ts===0&&(Ts=62500*bv());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Ts?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function Ir(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vr=null;function Qr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vr=new Map,t.forEach(qv,e),Vr=null,Ir.call(e))}function qv(e,t){if(!(t.state.loading&4)){var n=Vr.get(e);if(n)var a=n.get(null);else{n=new Map,Vr.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var d=o[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}o=t.instance,d=o.getAttribute("data-precedence"),s=n.get(d)||a,s===a&&n.set(null,o),n.set(d,o),this.count++,a=Ir.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var mi={$$typeof:V,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Yv(e,t,n,a,o,s,d,b,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.hiddenUpdates=vu(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Sm(e,t,n,a,o,s,d,b,T,R,N,I){return e=new Yv(e,t,n,d,T,R,N,I,b),t=1,s===!0&&(t|=24),s=Dt(3,null,null,t),e.current=s,s.stateNode=e,t=no(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},ro(s),e}function xm(e){return e?(e=Xl,e):Xl}function wm(e,t,n,a,o,s){o=xm(o),a.context===null?a.context=o:a.pendingContext=o,a=In(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=Vn(e,a,t),n!==null&&(kt(n,e,t),Xa(n,e,t))}function Em(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ks(e,t){Em(e,t),(e=e.alternate)&&Em(e,t)}function Tm(e){if(e.tag===13||e.tag===31){var t=ml(e,67108864);t!==null&&kt(t,e,67108864),ks(e,67108864)}}function km(e){if(e.tag===13||e.tag===31){var t=Ut();t=bu(t);var n=ml(e,t);n!==null&&kt(n,e,t),ks(e,t)}}var Xr=!0;function Gv(e,t,n,a){var o=D.T;D.T=null;var s=X.p;try{X.p=2,Cs(e,t,n,a)}finally{X.p=s,D.T=o}}function Iv(e,t,n,a){var o=D.T;D.T=null;var s=X.p;try{X.p=8,Cs(e,t,n,a)}finally{X.p=s,D.T=o}}function Cs(e,t,n,a){if(Xr){var o=As(a);if(o===null)hs(e,t,a,Zr,n),Am(e,a);else if(Qv(o,e,t,n,a))a.stopPropagation();else if(Am(e,a),t&4&&-1<Vv.indexOf(e)){for(;o!==null;){var s=Nl(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=sl(s.pendingLanes);if(d!==0){var b=s;for(b.pendingLanes|=2,b.entangledLanes|=2;d;){var T=1<<31-je(d);b.entanglements[1]|=T,d&=~T}on(s),(_e&6)===0&&(Rr=pt()+500,oi(0))}}break;case 31:case 13:b=ml(s,2),b!==null&&kt(b,s,2),Dr(),ks(s,2)}if(s=As(a),s===null&&hs(e,t,a,Zr,n),s===o)break;o=s}o!==null&&a.stopPropagation()}else hs(e,t,a,null,n)}}function As(e){return e=zu(e),zs(e)}var Zr=null;function zs(e){if(Zr=null,e=Ll(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zr=e,null}function Cm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gu()){case q:return 2;case F:return 8;case he:case Se:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var Rs=!1,tl=null,nl=null,ll=null,pi=new Map,yi=new Map,al=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Am(e,t){switch(e){case"focusin":case"focusout":tl=null;break;case"dragenter":case"dragleave":nl=null;break;case"mouseover":case"mouseout":ll=null;break;case"pointerover":case"pointerout":pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function gi(e,t,n,a,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Nl(t),t!==null&&Tm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Qv(e,t,n,a,o){switch(t){case"focusin":return tl=gi(tl,e,t,n,a,o),!0;case"dragenter":return nl=gi(nl,e,t,n,a,o),!0;case"mouseover":return ll=gi(ll,e,t,n,a,o),!0;case"pointerover":var s=o.pointerId;return pi.set(s,gi(pi.get(s)||null,e,t,n,a,o)),!0;case"gotpointercapture":return s=o.pointerId,yi.set(s,gi(yi.get(s)||null,e,t,n,a,o)),!0}return!1}function zm(e){var t=Ll(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,Yc(e.priority,function(){km(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,Yc(e.priority,function(){km(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=As(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Au=a,n.target.dispatchEvent(a),Au=null}else return t=Nl(n),t!==null&&Tm(t),e.blockedOn=n,!1;t.shift()}return!0}function Rm(e,t,n){Kr(e)&&n.delete(t)}function Xv(){Rs=!1,tl!==null&&Kr(tl)&&(tl=null),nl!==null&&Kr(nl)&&(nl=null),ll!==null&&Kr(ll)&&(ll=null),pi.forEach(Rm),yi.forEach(Rm)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Rs||(Rs=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Xv)))}var Wr=null;function _m(e){Wr!==e&&(Wr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Wr===e&&(Wr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(zs(a||n)===null)continue;break}var s=Nl(n);s!==null&&(e.splice(t,3),t-=3,Ao(s,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function ya(e){function t(T){return Fr(T,e)}tl!==null&&Fr(tl,e),nl!==null&&Fr(nl,e),ll!==null&&Fr(ll,e),pi.forEach(t),yi.forEach(t);for(var n=0;n<al.length;n++){var a=al[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<al.length&&(n=al[0],n.blockedOn===null);)zm(n),n.blockedOn===null&&al.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],s=n[a+1],d=o[bt]||null;if(typeof s=="function")d||_m(n);else if(d){var b=null;if(s&&s.hasAttribute("formAction")){if(o=s,d=s[bt]||null)b=d.formAction;else if(zs(o)!==null)continue}else b=d.action;typeof b=="function"?n[a+1]=b:(n.splice(a,3),a-=3),_m(n)}}}function Dm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return o=d})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function _s(e){this._internalRoot=e}Jr.prototype.render=_s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Ut();wm(n,a,e,t,null,null)},Jr.prototype.unmount=_s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wm(e.current,2,null,e,null,null),Dr(),t[Ml]=null}};function Jr(e){this._internalRoot=e}Jr.prototype.unstable_scheduleHydration=function(e){if(e){var t=qc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<al.length&&t!==0&&t<al[n].priority;n++);al.splice(n,0,e),n===0&&zm(e)}};var Om=i.version;if(Om!=="19.2.3")throw Error(u(527,Om,"19.2.3"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Zv={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{yt=Pr.inject(Zv),lt=Pr}catch{}}return bi.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,a="",o=jh,s=qh,d=Yh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Sm(e,1,!1,null,null,n,a,null,o,s,d,Dm),e[Ml]=t.current,fs(e),new _s(t)},bi.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var a=!1,o="",s=jh,d=qh,b=Yh,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(T=n.formState)),t=Sm(e,1,!0,t,n??null,a,o,T,s,d,b,Dm),t.context=xm(null),n=t.current,a=Ut(),a=bu(a),o=In(a),o.callback=null,Vn(n,o,a),n=a,t.current.lanes=n,za(t,n),on(t),e[Ml]=t.current,fs(e),new Jr(t)},bi.version="19.2.3",bi}var Gm;function ab(){if(Gm)return Ms.exports;Gm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Ms.exports=lb(),Ms.exports}var ib=ab();const rb=su(ib);var Im="popstate";function ub(l={}){function i(c,f){let{pathname:h="/",search:p="",hash:y=""}=Al(c.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),ec("",{pathname:h,search:p,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function r(c,f){let h=c.document.querySelector("base"),p="";if(h&&h.getAttribute("href")){let y=c.location.href,m=y.indexOf("#");p=m===-1?y:y.slice(0,m)}return p+"#"+(typeof f=="string"?f:zi(f))}function u(c,f){jt(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return sb(i,r,u,l)}function Ze(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function jt(l,i){if(!l){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ob(){return Math.random().toString(36).substring(2,10)}function Vm(l,i){return{usr:l.state,key:l.key,idx:i}}function ec(l,i,r=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof i=="string"?Al(i):i,state:r,key:i&&i.key||u||ob()}}function zi({pathname:l="/",search:i="",hash:r=""}){return i&&i!=="?"&&(l+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(l+=r.charAt(0)==="#"?r:"#"+r),l}function Al(l){let i={};if(l){let r=l.indexOf("#");r>=0&&(i.hash=l.substring(r),l=l.substring(0,r));let u=l.indexOf("?");u>=0&&(i.search=l.substring(u),l=l.substring(0,u)),l&&(i.pathname=l)}return i}function sb(l,i,r,u={}){let{window:c=document.defaultView,v5Compat:f=!1}=u,h=c.history,p="POP",y=null,m=g();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function g(){return(h.state||{idx:null}).idx}function v(){p="POP";let H=g(),O=H==null?null:H-m;m=H,y&&y({action:p,location:L.location,delta:O})}function w(H,O){p="PUSH";let Q=ec(L.location,H,O);r&&r(Q,H),m=g()+1;let V=Vm(Q,m),re=L.createHref(Q);try{h.pushState(V,"",re)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;c.location.assign(re)}f&&y&&y({action:p,location:L.location,delta:1})}function S(H,O){p="REPLACE";let Q=ec(L.location,H,O);r&&r(Q,H),m=g();let V=Vm(Q,m),re=L.createHref(Q);h.replaceState(V,"",re),f&&y&&y({action:p,location:L.location,delta:0})}function U(H){return cb(H)}let L={get action(){return p},get location(){return l(c,h)},listen(H){if(y)throw new Error("A history only accepts one active listener");return c.addEventListener(Im,v),y=H,()=>{c.removeEventListener(Im,v),y=null}},createHref(H){return i(c,H)},createURL:U,encodeLocation(H){let O=U(H);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:w,replace:S,go(H){return h.go(H)}};return L}function cb(l,i=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ze(r,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:zi(l);return u=u.replace(/ $/,"%20"),!i&&u.startsWith("//")&&(u=r+u),new URL(u,r)}function Mp(l,i,r="/"){return fb(l,i,r,!1)}function fb(l,i,r,u){let c=typeof i=="string"?Al(i):i,f=Ln(c.pathname||"/",r);if(f==null)return null;let h=Lp(l);hb(h);let p=null;for(let y=0;p==null&&y<h.length;++y){let m=Eb(f);p=xb(h[y],m,u)}return p}function Lp(l,i=[],r=[],u="",c=!1){let f=(h,p,y=c,m)=>{let g={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(u)&&y)return;Ze(g.relativePath.startsWith(u),`Absolute route path "${g.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(u.length)}let v=Mn([u,g.relativePath]),w=r.concat(g);h.children&&h.children.length>0&&(Ze(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Lp(h.children,i,w,v,y)),!(h.path==null&&!h.index)&&i.push({path:v,score:bb(v,h.index),routesMeta:w})};return l.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))f(h,p);else for(let y of Np(h.path))f(h,p,!0,y)}),i}function Np(l){let i=l.split("/");if(i.length===0)return[];let[r,...u]=i,c=r.endsWith("?"),f=r.replace(/\?$/,"");if(u.length===0)return c?[f,""]:[f];let h=Np(u.join("/")),p=[];return p.push(...h.map(y=>y===""?f:[f,y].join("/"))),c&&p.push(...h),p.map(y=>l.startsWith("/")&&y===""?"/":y)}function hb(l){l.sort((i,r)=>i.score!==r.score?r.score-i.score:Sb(i.routesMeta.map(u=>u.childrenIndex),r.routesMeta.map(u=>u.childrenIndex)))}var db=/^:[\w-]+$/,mb=3,pb=2,yb=1,gb=10,vb=-2,Qm=l=>l==="*";function bb(l,i){let r=l.split("/"),u=r.length;return r.some(Qm)&&(u+=vb),i&&(u+=pb),r.filter(c=>!Qm(c)).reduce((c,f)=>c+(db.test(f)?mb:f===""?yb:gb),u)}function Sb(l,i){return l.length===i.length&&l.slice(0,-1).every((u,c)=>u===i[c])?l[l.length-1]-i[i.length-1]:0}function xb(l,i,r=!1){let{routesMeta:u}=l,c={},f="/",h=[];for(let p=0;p<u.length;++p){let y=u[p],m=p===u.length-1,g=f==="/"?i:i.slice(f.length)||"/",v=ru({path:y.relativePath,caseSensitive:y.caseSensitive,end:m},g),w=y.route;if(!v&&m&&r&&!u[u.length-1].route.index&&(v=ru({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},g)),!v)return null;Object.assign(c,v.params),h.push({params:c,pathname:Mn([f,v.pathname]),pathnameBase:Ab(Mn([f,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(f=Mn([f,v.pathnameBase]))}return h}function ru(l,i){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[r,u]=wb(l.path,l.caseSensitive,l.end),c=i.match(r);if(!c)return null;let f=c[0],h=f.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:u.reduce((m,{paramName:g,isOptional:v},w)=>{if(g==="*"){let U=p[w]||"";h=f.slice(0,f.length-U.length).replace(/(.)\/+$/,"$1")}const S=p[w];return v&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:h,pattern:l}}function wb(l,i=!1,r=!0){jt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],c="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,y)=>(u.push({paramName:p,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(u.push({paramName:"*"}),c+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?c+="\\/*$":l!==""&&l!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),u]}function Eb(l){try{return l.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return jt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),l}}function Ln(l,i){if(i==="/")return l;if(!l.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,u=l.charAt(r);return u&&u!=="/"?null:l.slice(r)||"/"}var Up=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tb=l=>Up.test(l);function kb(l,i="/"){let{pathname:r,search:u="",hash:c=""}=typeof l=="string"?Al(l):l,f;if(r)if(Tb(r))f=r;else{if(r.includes("//")){let h=r;r=r.replace(/\/\/+/g,"/"),jt(!1,`Pathnames cannot have embedded double slashes - normalizing ${h} -> ${r}`)}r.startsWith("/")?f=Xm(r.substring(1),"/"):f=Xm(r,i)}else f=i;return{pathname:f,search:zb(u),hash:Rb(c)}}function Xm(l,i){let r=i.replace(/\/+$/,"").split("/");return l.split("/").forEach(c=>{c===".."?r.length>1&&r.pop():c!=="."&&r.push(c)}),r.length>1?r.join("/"):"/"}function Hs(l,i,r,u){return`Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cb(l){return l.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function mc(l){let i=Cb(l);return i.map((r,u)=>u===i.length-1?r.pathname:r.pathnameBase)}function pc(l,i,r,u=!1){let c;typeof l=="string"?c=Al(l):(c={...l},Ze(!c.pathname||!c.pathname.includes("?"),Hs("?","pathname","search",c)),Ze(!c.pathname||!c.pathname.includes("#"),Hs("#","pathname","hash",c)),Ze(!c.search||!c.search.includes("#"),Hs("#","search","hash",c)));let f=l===""||c.pathname==="",h=f?"/":c.pathname,p;if(h==null)p=r;else{let v=i.length-1;if(!u&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),v-=1;c.pathname=w.join("/")}p=v>=0?i[v]:"/"}let y=kb(c,p),m=h&&h!=="/"&&h.endsWith("/"),g=(f||h===".")&&r.endsWith("/");return!y.pathname.endsWith("/")&&(m||g)&&(y.pathname+="/"),y}var Mn=l=>l.join("/").replace(/\/\/+/g,"/"),Ab=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),zb=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Rb=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,_b=class{constructor(l,i,r,u=!1){this.status=l,this.statusText=i||"",this.internal=u,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Db(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Ob(l){return l.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Hp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bp(l,i){let r=l;if(typeof r!="string"||!Up.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let u=r,c=!1;if(Hp)try{let f=new URL(window.location.href),h=r.startsWith("//")?new URL(f.protocol+r):new URL(r),p=Ln(h.pathname,i);h.origin===f.origin&&p!=null?r=p+h.search+h.hash:c=!0}catch{jt(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:c,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jp=["POST","PUT","PATCH","DELETE"];new Set(jp);var Mb=["GET",...jp];new Set(Mb);var xa=Y.createContext(null);xa.displayName="DataRouter";var cu=Y.createContext(null);cu.displayName="DataRouterState";var Lb=Y.createContext(!1),qp=Y.createContext({isTransitioning:!1});qp.displayName="ViewTransition";var Nb=Y.createContext(new Map);Nb.displayName="Fetchers";var Ub=Y.createContext(null);Ub.displayName="Await";var qt=Y.createContext(null);qt.displayName="Navigation";var _i=Y.createContext(null);_i.displayName="Location";var ln=Y.createContext({outlet:null,matches:[],isDataRoute:!1});ln.displayName="Route";var yc=Y.createContext(null);yc.displayName="RouteError";var Yp="REACT_ROUTER_ERROR",Hb="REDIRECT",Bb="ROUTE_ERROR_RESPONSE";function jb(l){if(l.startsWith(`${Yp}:${Hb}:{`))try{let i=JSON.parse(l.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function qb(l){if(l.startsWith(`${Yp}:${Bb}:{`))try{let i=JSON.parse(l.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new _b(i.status,i.statusText,i.data)}catch{}}function Yb(l,{relative:i}={}){Ze(wa(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:u}=Y.useContext(qt),{hash:c,pathname:f,search:h}=Di(l,{relative:i}),p=f;return r!=="/"&&(p=f==="/"?r:Mn([r,f])),u.createHref({pathname:p,search:h,hash:c})}function wa(){return Y.useContext(_i)!=null}function ul(){return Ze(wa(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(_i).location}var Gp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ip(l){Y.useContext(qt).static||Y.useLayoutEffect(l)}function Vp(){let{isDataRoute:l}=Y.useContext(ln);return l?t1():Gb()}function Gb(){Ze(wa(),"useNavigate() may be used only in the context of a <Router> component.");let l=Y.useContext(xa),{basename:i,navigator:r}=Y.useContext(qt),{matches:u}=Y.useContext(ln),{pathname:c}=ul(),f=JSON.stringify(mc(u)),h=Y.useRef(!1);return Ip(()=>{h.current=!0}),Y.useCallback((y,m={})=>{if(jt(h.current,Gp),!h.current)return;if(typeof y=="number"){r.go(y);return}let g=pc(y,JSON.parse(f),c,m.relative==="path");l==null&&i!=="/"&&(g.pathname=g.pathname==="/"?i:Mn([i,g.pathname])),(m.replace?r.replace:r.push)(g,m.state,m)},[i,r,f,c,l])}Y.createContext(null);function Ib(){let{matches:l}=Y.useContext(ln),i=l[l.length-1];return i?i.params:{}}function Di(l,{relative:i}={}){let{matches:r}=Y.useContext(ln),{pathname:u}=ul(),c=JSON.stringify(mc(r));return Y.useMemo(()=>pc(l,JSON.parse(c),u,i==="path"),[l,c,u,i])}function Vb(l,i){return Qp(l,i)}function Qp(l,i,r,u,c){Ze(wa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=Y.useContext(qt),{matches:h}=Y.useContext(ln),p=h[h.length-1],y=p?p.params:{},m=p?p.pathname:"/",g=p?p.pathnameBase:"/",v=p&&p.route;{let Q=v&&v.path||"";Zp(m,!v||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let w=ul(),S;if(i){let Q=typeof i=="string"?Al(i):i;Ze(g==="/"||Q.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),S=Q}else S=w;let U=S.pathname||"/",L=U;if(g!=="/"){let Q=g.replace(/^\//,"").split("/");L="/"+U.replace(/^\//,"").split("/").slice(Q.length).join("/")}let H=Mp(l,{pathname:L});jt(v||H!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),jt(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=Fb(H&&H.map(Q=>Object.assign({},Q,{params:Object.assign({},y,Q.params),pathname:Mn([g,f.encodeLocation?f.encodeLocation(Q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?g:Mn([g,f.encodeLocation?f.encodeLocation(Q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathnameBase])})),h,r,u,c);return i&&O?Y.createElement(_i.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},O):O}function Qb(){let l=e1(),i=Db(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),r=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:f},"ErrorBoundary")," or"," ",Y.createElement("code",{style:f},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},i),r?Y.createElement("pre",{style:c},r):null,h)}var Xb=Y.createElement(Qb,null),Xp=class extends Y.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,i){return i.location!==l.location||i.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:i.error,location:i.location,revalidation:l.revalidation||i.revalidation}}componentDidCatch(l,i){this.props.onError?this.props.onError(l,i):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const r=qb(l.digest);r&&(l=r)}let i=l!==void 0?Y.createElement(ln.Provider,{value:this.props.routeContext},Y.createElement(yc.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?Y.createElement(Zb,{error:l},i):i}};Xp.contextType=Lb;var Bs=new WeakMap;function Zb({children:l,error:i}){let{basename:r}=Y.useContext(qt);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let u=jb(i.digest);if(u){let c=Bs.get(i);if(c)throw c;let f=Bp(u.location,r);if(Hp&&!Bs.get(i))if(f.isExternal||u.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:u.replace}));throw Bs.set(i,h),h}return Y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return l}function Kb({routeContext:l,match:i,children:r}){let u=Y.useContext(xa);return u&&u.static&&u.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=i.route.id),Y.createElement(ln.Provider,{value:l},r)}function Fb(l,i=[],r=null,u=null,c=null){if(l==null){if(!r)return null;if(r.errors)l=r.matches;else if(i.length===0&&!r.initialized&&r.matches.length>0)l=r.matches;else return null}let f=l,h=r?.errors;if(h!=null){let g=f.findIndex(v=>v.route.id&&h?.[v.route.id]!==void 0);Ze(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,g+1))}let p=!1,y=-1;if(r)for(let g=0;g<f.length;g++){let v=f[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(y=g),v.route.id){let{loaderData:w,errors:S}=r,U=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||U){p=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}let m=r&&u?(g,v)=>{u(g,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Ob(r.matches),errorInfo:v})}:void 0;return f.reduceRight((g,v,w)=>{let S,U=!1,L=null,H=null;r&&(S=h&&v.route.id?h[v.route.id]:void 0,L=v.route.errorElement||Xb,p&&(y<0&&w===0?(Zp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,H=null):y===w&&(U=!0,H=v.route.hydrateFallbackElement||null)));let O=i.concat(f.slice(0,w+1)),Q=()=>{let V;return S?V=L:U?V=H:v.route.Component?V=Y.createElement(v.route.Component,null):v.route.element?V=v.route.element:V=g,Y.createElement(Kb,{match:v,routeContext:{outlet:g,matches:O,isDataRoute:r!=null},children:V})};return r&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?Y.createElement(Xp,{location:r.location,revalidation:r.revalidation,component:L,error:S,children:Q(),routeContext:{outlet:null,matches:O,isDataRoute:!0},onError:m}):Q()},null)}function gc(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wb(l){let i=Y.useContext(xa);return Ze(i,gc(l)),i}function Jb(l){let i=Y.useContext(cu);return Ze(i,gc(l)),i}function Pb(l){let i=Y.useContext(ln);return Ze(i,gc(l)),i}function vc(l){let i=Pb(l),r=i.matches[i.matches.length-1];return Ze(r.route.id,`${l} can only be used on routes that contain a unique "id"`),r.route.id}function $b(){return vc("useRouteId")}function e1(){let l=Y.useContext(yc),i=Jb("useRouteError"),r=vc("useRouteError");return l!==void 0?l:i.errors?.[r]}function t1(){let{router:l}=Wb("useNavigate"),i=vc("useNavigate"),r=Y.useRef(!1);return Ip(()=>{r.current=!0}),Y.useCallback(async(c,f={})=>{jt(r.current,Gp),r.current&&(typeof c=="number"?await l.navigate(c):await l.navigate(c,{fromRouteId:i,...f}))},[l,i])}var Zm={};function Zp(l,i,r){!i&&!Zm[l]&&(Zm[l]=!0,jt(!1,r))}Y.memo(n1);function n1({routes:l,future:i,state:r,onError:u}){return Qp(l,void 0,r,u,i)}function l1({to:l,replace:i,state:r,relative:u}){Ze(wa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=Y.useContext(qt);jt(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=Y.useContext(ln),{pathname:h}=ul(),p=Vp(),y=pc(l,mc(f),h,u==="path"),m=JSON.stringify(y);return Y.useEffect(()=>{p(JSON.parse(m),{replace:i,state:r,relative:u})},[p,m,u,i,r]),null}function tc(l){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function a1({basename:l="/",children:i=null,location:r,navigationType:u="POP",navigator:c,static:f=!1,unstable_useTransitions:h}){Ze(!wa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=l.replace(/^\/*/,"/"),y=Y.useMemo(()=>({basename:p,navigator:c,static:f,unstable_useTransitions:h,future:{}}),[p,c,f,h]);typeof r=="string"&&(r=Al(r));let{pathname:m="/",search:g="",hash:v="",state:w=null,key:S="default"}=r,U=Y.useMemo(()=>{let L=Ln(m,p);return L==null?null:{location:{pathname:L,search:g,hash:v,state:w,key:S},navigationType:u}},[p,m,g,v,w,S,u]);return jt(U!=null,`<Router basename="${p}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:Y.createElement(qt.Provider,{value:y},Y.createElement(_i.Provider,{children:i,value:U}))}function i1({children:l,location:i}){return Vb(nc(l),i)}function nc(l,i=[]){let r=[];return Y.Children.forEach(l,(u,c)=>{if(!Y.isValidElement(u))return;let f=[...i,c];if(u.type===Y.Fragment){r.push.apply(r,nc(u.props.children,f));return}Ze(u.type===tc,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=nc(u.props.children,f)),r.push(h)}),r}var lu="get",au="application/x-www-form-urlencoded";function fu(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function r1(l){return fu(l)&&l.tagName.toLowerCase()==="button"}function u1(l){return fu(l)&&l.tagName.toLowerCase()==="form"}function o1(l){return fu(l)&&l.tagName.toLowerCase()==="input"}function s1(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function c1(l,i){return l.button===0&&(!i||i==="_self")&&!s1(l)}var $r=null;function f1(){if($r===null)try{new FormData(document.createElement("form"),0),$r=!1}catch{$r=!0}return $r}var h1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function js(l){return l!=null&&!h1.has(l)?(jt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${au}"`),null):l}function d1(l,i){let r,u,c,f,h;if(u1(l)){let p=l.getAttribute("action");u=p?Ln(p,i):null,r=l.getAttribute("method")||lu,c=js(l.getAttribute("enctype"))||au,f=new FormData(l)}else if(r1(l)||o1(l)&&(l.type==="submit"||l.type==="image")){let p=l.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||p.getAttribute("action");if(u=y?Ln(y,i):null,r=l.getAttribute("formmethod")||p.getAttribute("method")||lu,c=js(l.getAttribute("formenctype"))||js(p.getAttribute("enctype"))||au,f=new FormData(p,l),!f1()){let{name:m,type:g,value:v}=l;if(g==="image"){let w=m?`${m}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else m&&f.append(m,v)}}else{if(fu(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=lu,u=null,c=au,h=l}return f&&c==="text/plain"&&(h=f,f=void 0),{action:u,method:r.toLowerCase(),encType:c,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bc(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function m1(l,i,r,u){let c=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return r?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${u}`:c.pathname=`${c.pathname}.${u}`:c.pathname==="/"?c.pathname=`_root.${u}`:i&&Ln(c.pathname,i)==="/"?c.pathname=`${i.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function p1(l,i){if(l.id in i)return i[l.id];try{let r=await import(l.module);return i[l.id]=r,r}catch(r){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function y1(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function g1(l,i,r){let u=await Promise.all(l.map(async c=>{let f=i.routes[c.route.id];if(f){let h=await p1(f,r);return h.links?h.links():[]}return[]}));return x1(u.flat(1).filter(y1).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Km(l,i,r,u,c,f){let h=(y,m)=>r[m]?y.route.id!==r[m].route.id:!0,p=(y,m)=>r[m].pathname!==y.pathname||r[m].route.path?.endsWith("*")&&r[m].params["*"]!==y.params["*"];return f==="assets"?i.filter((y,m)=>h(y,m)||p(y,m)):f==="data"?i.filter((y,m)=>{let g=u.routes[y.route.id];if(!g||!g.hasLoader)return!1;if(h(y,m)||p(y,m))return!0;if(y.route.shouldRevalidate){let v=y.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function v1(l,i,{includeHydrateFallback:r}={}){return b1(l.map(u=>{let c=i.routes[u.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),r&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function b1(l){return[...new Set(l)]}function S1(l){let i={},r=Object.keys(l).sort();for(let u of r)i[u]=l[u];return i}function x1(l,i){let r=new Set;return new Set(i),l.reduce((u,c)=>{let f=JSON.stringify(S1(c));return r.has(f)||(r.add(f),u.push({key:f,link:c})),u},[])}function Kp(){let l=Y.useContext(xa);return bc(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function w1(){let l=Y.useContext(cu);return bc(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Sc=Y.createContext(void 0);Sc.displayName="FrameworkContext";function Fp(){let l=Y.useContext(Sc);return bc(l,"You must render this element inside a <HydratedRouter> element"),l}function E1(l,i){let r=Y.useContext(Sc),[u,c]=Y.useState(!1),[f,h]=Y.useState(!1),{onFocus:p,onBlur:y,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=i,w=Y.useRef(null);Y.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let L=O=>{O.forEach(Q=>{h(Q.isIntersecting)})},H=new IntersectionObserver(L,{threshold:.5});return w.current&&H.observe(w.current),()=>{H.disconnect()}}},[l]),Y.useEffect(()=>{if(u){let L=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(L)}}},[u]);let S=()=>{c(!0)},U=()=>{c(!1),h(!1)};return r?l!=="intent"?[f,w,{}]:[f,w,{onFocus:Si(p,S),onBlur:Si(y,U),onMouseEnter:Si(m,S),onMouseLeave:Si(g,U),onTouchStart:Si(v,S)}]:[!1,w,{}]}function Si(l,i){return r=>{l&&l(r),r.defaultPrevented||i(r)}}function T1({page:l,...i}){let{router:r}=Kp(),u=Y.useMemo(()=>Mp(r.routes,l,r.basename),[r.routes,l,r.basename]);return u?Y.createElement(C1,{page:l,matches:u,...i}):null}function k1(l){let{manifest:i,routeModules:r}=Fp(),[u,c]=Y.useState([]);return Y.useEffect(()=>{let f=!1;return g1(l,i,r).then(h=>{f||c(h)}),()=>{f=!0}},[l,i,r]),u}function C1({page:l,matches:i,...r}){let u=ul(),{future:c,manifest:f,routeModules:h}=Fp(),{basename:p}=Kp(),{loaderData:y,matches:m}=w1(),g=Y.useMemo(()=>Km(l,i,m,f,u,"data"),[l,i,m,f,u]),v=Y.useMemo(()=>Km(l,i,m,f,u,"assets"),[l,i,m,f,u]),w=Y.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let L=new Set,H=!1;if(i.forEach(Q=>{let V=f.routes[Q.route.id];!V||!V.hasLoader||(!g.some(re=>re.route.id===Q.route.id)&&Q.route.id in y&&h[Q.route.id]?.shouldRevalidate||V.hasClientLoader?H=!0:L.add(Q.route.id))}),L.size===0)return[];let O=m1(l,p,c.unstable_trailingSlashAwareDataRequests,"data");return H&&L.size>0&&O.searchParams.set("_routes",i.filter(Q=>L.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[O.pathname+O.search]},[p,c.unstable_trailingSlashAwareDataRequests,y,u,f,g,i,l,h]),S=Y.useMemo(()=>v1(v,f),[v,f]),U=k1(v);return Y.createElement(Y.Fragment,null,w.map(L=>Y.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...r})),S.map(L=>Y.createElement("link",{key:L,rel:"modulepreload",href:L,...r})),U.map(({key:L,link:H})=>Y.createElement("link",{key:L,nonce:r.nonce,...H})))}function A1(...l){return i=>{l.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var z1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{z1&&(window.__reactRouterVersion="7.12.0")}catch{}function R1({basename:l,children:i,unstable_useTransitions:r,window:u}){let c=Y.useRef();c.current==null&&(c.current=ub({window:u,v5Compat:!0}));let f=c.current,[h,p]=Y.useState({action:f.action,location:f.location}),y=Y.useCallback(m=>{r===!1?p(m):Y.startTransition(()=>p(m))},[r]);return Y.useLayoutEffect(()=>f.listen(y),[f,y]),Y.createElement(a1,{basename:l,children:i,location:h.location,navigationType:h.action,navigator:f,unstable_useTransitions:r})}var Wp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jp=Y.forwardRef(function({onClick:i,discover:r="render",prefetch:u="none",relative:c,reloadDocument:f,replace:h,state:p,target:y,to:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:w,...S},U){let{basename:L,unstable_useTransitions:H}=Y.useContext(qt),O=typeof m=="string"&&Wp.test(m),Q=Bp(m,L);m=Q.to;let V=Yb(m,{relative:c}),[re,ue,B]=E1(u,S),W=O1(m,{replace:h,state:p,target:y,preventScrollReset:g,relative:c,viewTransition:v,unstable_defaultShouldRevalidate:w,unstable_useTransitions:H});function ce(ye){i&&i(ye),ye.defaultPrevented||W(ye)}let fe=Y.createElement("a",{...S,...B,href:Q.absoluteURL||V,onClick:Q.isExternal||f?i:ce,ref:A1(U,ue),target:y,"data-discover":!O&&r==="render"?"true":void 0});return re&&!O?Y.createElement(Y.Fragment,null,fe,Y.createElement(T1,{page:V})):fe});Jp.displayName="Link";var Pp=Y.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:u="",end:c=!1,style:f,to:h,viewTransition:p,children:y,...m},g){let v=Di(h,{relative:m.relative}),w=ul(),S=Y.useContext(cu),{navigator:U,basename:L}=Y.useContext(qt),H=S!=null&&H1(v)&&p===!0,O=U.encodeLocation?U.encodeLocation(v).pathname:v.pathname,Q=w.pathname,V=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(Q=Q.toLowerCase(),V=V?V.toLowerCase():null,O=O.toLowerCase()),V&&L&&(V=Ln(V,L)||V);const re=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let ue=Q===O||!c&&Q.startsWith(O)&&Q.charAt(re)==="/",B=V!=null&&(V===O||!c&&V.startsWith(O)&&V.charAt(O.length)==="/"),W={isActive:ue,isPending:B,isTransitioning:H},ce=ue?i:void 0,fe;typeof u=="function"?fe=u(W):fe=[u,ue?"active":null,B?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let ye=typeof f=="function"?f(W):f;return Y.createElement(Jp,{...m,"aria-current":ce,className:fe,ref:g,style:ye,to:h,viewTransition:p},typeof y=="function"?y(W):y)});Pp.displayName="NavLink";var _1=Y.forwardRef(({discover:l="render",fetcherKey:i,navigate:r,reloadDocument:u,replace:c,state:f,method:h=lu,action:p,onSubmit:y,relative:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:w,...S},U)=>{let{unstable_useTransitions:L}=Y.useContext(qt),H=N1(),O=U1(p,{relative:m}),Q=h.toLowerCase()==="get"?"get":"post",V=typeof p=="string"&&Wp.test(p),re=ue=>{if(y&&y(ue),ue.defaultPrevented)return;ue.preventDefault();let B=ue.nativeEvent.submitter,W=B?.getAttribute("formmethod")||h,ce=()=>H(B||ue.currentTarget,{fetcherKey:i,method:W,navigate:r,replace:c,state:f,relative:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:w});L&&r!==!1?Y.startTransition(()=>ce()):ce()};return Y.createElement("form",{ref:U,method:Q,action:O,onSubmit:u?y:re,...S,"data-discover":!V&&l==="render"?"true":void 0})});_1.displayName="Form";function D1(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $p(l){let i=Y.useContext(xa);return Ze(i,D1(l)),i}function O1(l,{target:i,replace:r,state:u,preventScrollReset:c,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p,unstable_useTransitions:y}={}){let m=Vp(),g=ul(),v=Di(l,{relative:f});return Y.useCallback(w=>{if(c1(w,i)){w.preventDefault();let S=r!==void 0?r:zi(g)===zi(v),U=()=>m(l,{replace:S,state:u,preventScrollReset:c,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p});y?Y.startTransition(()=>U()):U()}},[g,m,v,r,u,i,l,c,f,h,p,y])}var M1=0,L1=()=>`__${String(++M1)}__`;function N1(){let{router:l}=$p("useSubmit"),{basename:i}=Y.useContext(qt),r=$b(),u=l.fetch,c=l.navigate;return Y.useCallback(async(f,h={})=>{let{action:p,method:y,encType:m,formData:g,body:v}=d1(f,i);if(h.navigate===!1){let w=h.fetcherKey||L1();await u(w,r,h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:g,body:v,formMethod:h.method||y,formEncType:h.encType||m,flushSync:h.flushSync})}else await c(h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:g,body:v,formMethod:h.method||y,formEncType:h.encType||m,replace:h.replace,state:h.state,fromRouteId:r,flushSync:h.flushSync,viewTransition:h.viewTransition})},[u,c,i,r])}function U1(l,{relative:i}={}){let{basename:r}=Y.useContext(qt),u=Y.useContext(ln);Ze(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),f={...Di(l||".",{relative:i})},h=ul();if(l==null){f.search=h.search;let p=new URLSearchParams(f.search),y=p.getAll("index");if(y.some(g=>g==="")){p.delete("index"),y.filter(v=>v).forEach(v=>p.append("index",v));let g=p.toString();f.search=g?`?${g}`:""}}return(!l||l===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(f.pathname=f.pathname==="/"?r:Mn([r,f.pathname])),zi(f)}function H1(l,{relative:i}={}){let r=Y.useContext(qp);Ze(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=$p("useViewTransitionState"),c=Di(l,{relative:i});if(!r.isTransitioning)return!1;let f=Ln(r.currentLocation.pathname,u)||r.currentLocation.pathname,h=Ln(r.nextLocation.pathname,u)||r.nextLocation.pathname;return ru(c.pathname,h)!=null||ru(c.pathname,f)!=null}const B1=`# 10 Grep Commands That'll Make You Feel Like a Linux Wizard


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
-   \`|\`  OR operator (with  \`-E\`  flag)`,j1=`# Server Security Response Guide

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

That means attempted exploitation, not just scanning.`,q1=`# How to Answer a CTO (How You SOUND Matters)

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
Calm, structured thinking under pressure.`,Y1=`## Section 1: Linux Basics

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
    
5.  Add user to group? usermod -aG`,G1=`# Linux Commands: Find All SUID Binaries (for Privilege Escalation)

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
\`\`\``,I1=`# Passwordless SSH Login Using SSH Key Authentication (Step-by-Step Guide)

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
\`\`\``,V1=`# Setting a Login Banner on Linux Servers 

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
\`\`\``,Q1=`## Convert a Meeting from Video .mp4 to Audio with AI in Mac Terminal and Generating MoM's. 

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

> "Summarize the following meeting transcript into key decisions, action items, and important discussion points and generate a MoM for this."`,X1=`# DevOps Commands Cheat Sheet (With Real-World Examples)

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

💡 Why it matters: Every automation leaves behind readable, shareable context—no more "tribal knowledge."`,Z1=`**Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.**


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

to publish the changes to the GitHub repo (main branch) and it will automatically push the new build to the gh-pages branch (where you can check the deployment status).`,F1=`Terminal Tools For Mac OS and Linux
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

nyancat in action`,W1=`# ✏️ Start writing

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
    style="width:200px; height:200px; object-fit:cover; border-radius:10px; display:block; margin:10px 0;">`,J1=Object.assign({"/public/docs/10 Grep Commands for Linux Systems.md":B1,"/public/docs/Hacking Prevention.md":j1,"/public/docs/Interview Preperation.md":q1,"/public/docs/Linux Basic and Advanced Questions.md":Y1,"/public/docs/Linux Hacker Commands.md":G1,"/public/docs/SSH Auth.md":I1,"/public/docs/Setting Up a Login Banner on Linux Server.md":V1,"/public/docs/Transcribe and Generate MoM in Mac Terminal.md":Q1,"/public/docs/devopsCommands.md":X1,"/public/docs/docker.md":Z1,"/public/docs/howTo.md":K1,"/public/docs/macAndLinuxTerminalTools.md":F1,"/public/docs/nginx.md":W1}),xc=Object.entries(J1).map(([l,i])=>{const r=l.split("/").pop().replace(".md",""),u=i.match(/^#\s+(.*)/)?.[1]??r.replace(/-/g," ");return{slug:r,title:u,content:i}});function P1(){return ut.jsx("aside",{style:qs.sidebar,children:xc.map(l=>ut.jsx(Pp,{to:`/docs/${l.slug}`,style:({isActive:i})=>({...qs.link,...i?qs.active:{}}),children:l.title},l.slug))})}const qs={sidebar:{width:260,padding:"1rem",background:"var(--sidebar-bg)",borderRight:"1px solid #e5e7eb"},link:{display:"block",padding:"1rem 1rem",borderRadius:8,textDecoration:"none",color:"var(--text)",marginBottom:4,borderBottom:"1px solid #ccc"},active:{background:"var(--active-bg)",color:"var(--active-text)",fontWeight:600}};function $1(l,i){const r={};return(l[l.length-1]===""?[...l,""]:l).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const e0=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,t0=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,n0={};function Fm(l,i){return(n0.jsx?t0:e0).test(l)}const l0=/[ \t\n\f\r]/g;function a0(l){return typeof l=="object"?l.type==="text"?Wm(l.value):!1:Wm(l)}function Wm(l){return l.replace(l0,"")===""}class Oi{constructor(i,r,u){this.normal=r,this.property=i,u&&(this.space=u)}}Oi.prototype.normal={};Oi.prototype.property={};Oi.prototype.space=void 0;function ey(l,i){const r={},u={};for(const c of l)Object.assign(r,c.property),Object.assign(u,c.normal);return new Oi(r,u,i)}function lc(l){return l.toLowerCase()}class zt{constructor(i,r){this.attribute=r,this.property=i}}zt.prototype.attribute="";zt.prototype.booleanish=!1;zt.prototype.boolean=!1;zt.prototype.commaOrSpaceSeparated=!1;zt.prototype.commaSeparated=!1;zt.prototype.defined=!1;zt.prototype.mustUseProperty=!1;zt.prototype.number=!1;zt.prototype.overloadedBoolean=!1;zt.prototype.property="";zt.prototype.spaceSeparated=!1;zt.prototype.space=void 0;let i0=0;const ve=zl(),nt=zl(),ac=zl(),Z=zl(),Ye=zl(),ba=zl(),Ht=zl();function zl(){return 2**++i0}const ic=Object.freeze(Object.defineProperty({__proto__:null,boolean:ve,booleanish:nt,commaOrSpaceSeparated:Ht,commaSeparated:ba,number:Z,overloadedBoolean:ac,spaceSeparated:Ye},Symbol.toStringTag,{value:"Module"})),Ys=Object.keys(ic);class wc extends zt{constructor(i,r,u,c){let f=-1;if(super(i,r),Jm(this,"space",c),typeof u=="number")for(;++f<Ys.length;){const h=Ys[f];Jm(this,Ys[f],(u&ic[h])===ic[h])}}}wc.prototype.defined=!0;function Jm(l,i,r){r&&(l[i]=r)}function Ea(l){const i={},r={};for(const[u,c]of Object.entries(l.properties)){const f=new wc(u,l.transform(l.attributes||{},u),c,l.space);l.mustUseProperty&&l.mustUseProperty.includes(u)&&(f.mustUseProperty=!0),i[u]=f,r[lc(u)]=u,r[lc(f.attribute)]=u}return new Oi(i,r,l.space)}const ty=Ea({properties:{ariaActiveDescendant:null,ariaAtomic:nt,ariaAutoComplete:null,ariaBusy:nt,ariaChecked:nt,ariaColCount:Z,ariaColIndex:Z,ariaColSpan:Z,ariaControls:Ye,ariaCurrent:null,ariaDescribedBy:Ye,ariaDetails:null,ariaDisabled:nt,ariaDropEffect:Ye,ariaErrorMessage:null,ariaExpanded:nt,ariaFlowTo:Ye,ariaGrabbed:nt,ariaHasPopup:null,ariaHidden:nt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ye,ariaLevel:Z,ariaLive:null,ariaModal:nt,ariaMultiLine:nt,ariaMultiSelectable:nt,ariaOrientation:null,ariaOwns:Ye,ariaPlaceholder:null,ariaPosInSet:Z,ariaPressed:nt,ariaReadOnly:nt,ariaRelevant:null,ariaRequired:nt,ariaRoleDescription:Ye,ariaRowCount:Z,ariaRowIndex:Z,ariaRowSpan:Z,ariaSelected:nt,ariaSetSize:Z,ariaSort:null,ariaValueMax:Z,ariaValueMin:Z,ariaValueNow:Z,ariaValueText:null,role:null},transform(l,i){return i==="role"?i:"aria-"+i.slice(4).toLowerCase()}});function ny(l,i){return i in l?l[i]:i}function ly(l,i){return ny(l,i.toLowerCase())}const r0=Ea({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ba,acceptCharset:Ye,accessKey:Ye,action:null,allow:null,allowFullScreen:ve,allowPaymentRequest:ve,allowUserMedia:ve,alt:null,as:null,async:ve,autoCapitalize:null,autoComplete:Ye,autoFocus:ve,autoPlay:ve,blocking:Ye,capture:null,charSet:null,checked:ve,cite:null,className:Ye,cols:Z,colSpan:null,content:null,contentEditable:nt,controls:ve,controlsList:Ye,coords:Z|ba,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ve,defer:ve,dir:null,dirName:null,disabled:ve,download:ac,draggable:nt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ve,formTarget:null,headers:Ye,height:Z,hidden:ac,high:Z,href:null,hrefLang:null,htmlFor:Ye,httpEquiv:Ye,id:null,imageSizes:null,imageSrcSet:null,inert:ve,inputMode:null,integrity:null,is:null,isMap:ve,itemId:null,itemProp:Ye,itemRef:Ye,itemScope:ve,itemType:Ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ve,low:Z,manifest:null,max:null,maxLength:Z,media:null,method:null,min:null,minLength:Z,multiple:ve,muted:ve,name:null,nonce:null,noModule:ve,noValidate:ve,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ve,optimum:Z,pattern:null,ping:Ye,placeholder:null,playsInline:ve,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ve,referrerPolicy:null,rel:Ye,required:ve,reversed:ve,rows:Z,rowSpan:Z,sandbox:Ye,scope:null,scoped:ve,seamless:ve,selected:ve,shadowRootClonable:ve,shadowRootDelegatesFocus:ve,shadowRootMode:null,shape:null,size:Z,sizes:null,slot:null,span:Z,spellCheck:nt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Z,step:null,style:null,tabIndex:Z,target:null,title:null,translate:null,type:null,typeMustMatch:ve,useMap:null,value:nt,width:Z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ye,axis:null,background:null,bgColor:null,border:Z,borderColor:null,bottomMargin:Z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ve,declare:ve,event:null,face:null,frame:null,frameBorder:null,hSpace:Z,leftMargin:Z,link:null,longDesc:null,lowSrc:null,marginHeight:Z,marginWidth:Z,noResize:ve,noHref:ve,noShade:ve,noWrap:ve,object:null,profile:null,prompt:null,rev:null,rightMargin:Z,rules:null,scheme:null,scrolling:nt,standby:null,summary:null,text:null,topMargin:Z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Z,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ve,disableRemotePlayback:ve,prefix:null,property:null,results:Z,security:null,unselectable:null},space:"html",transform:ly}),u0=Ea({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ht,accentHeight:Z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Z,amplitude:Z,arabicForm:null,ascent:Z,attributeName:null,attributeType:null,azimuth:Z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Z,by:null,calcMode:null,capHeight:Z,className:Ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Z,diffuseConstant:Z,direction:null,display:null,dur:null,divisor:Z,dominantBaseline:null,download:ve,dx:null,dy:null,edgeMode:null,editable:null,elevation:Z,enableBackground:null,end:null,event:null,exponent:Z,externalResourcesRequired:null,fill:null,fillOpacity:Z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ba,g2:ba,glyphName:ba,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Z,horizOriginX:Z,horizOriginY:Z,id:null,ideographic:Z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Z,k:Z,k1:Z,k2:Z,k3:Z,k4:Z,kernelMatrix:Ht,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Z,overlineThickness:Z,paintOrder:null,panose1:null,path:null,pathLength:Z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Z,pointsAtY:Z,pointsAtZ:Z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ht,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ht,rev:Ht,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ht,requiredFeatures:Ht,requiredFonts:Ht,requiredFormats:Ht,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Z,specularExponent:Z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Z,strikethroughThickness:Z,string:null,stroke:null,strokeDashArray:Ht,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Z,strokeOpacity:Z,strokeWidth:null,style:null,surfaceScale:Z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ht,tabIndex:Z,tableValues:null,target:null,targetX:Z,targetY:Z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ht,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Z,underlineThickness:Z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Z,values:null,vAlphabetic:Z,vMathematical:Z,vectorEffect:null,vHanging:Z,vIdeographic:Z,version:null,vertAdvY:Z,vertOriginX:Z,vertOriginY:Z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ny}),ay=Ea({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(l,i){return"xlink:"+i.slice(5).toLowerCase()}}),iy=Ea({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ly}),ry=Ea({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(l,i){return"xml:"+i.slice(3).toLowerCase()}}),o0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},s0=/[A-Z]/g,Pm=/-[a-z]/g,c0=/^data[-\w.:]+$/i;function f0(l,i){const r=lc(i);let u=i,c=zt;if(r in l.normal)return l.property[l.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&c0.test(i)){if(i.charAt(4)==="-"){const f=i.slice(5).replace(Pm,d0);u="data"+f.charAt(0).toUpperCase()+f.slice(1)}else{const f=i.slice(4);if(!Pm.test(f)){let h=f.replace(s0,h0);h.charAt(0)!=="-"&&(h="-"+h),i="data"+h}}c=wc}return new c(u,i)}function h0(l){return"-"+l.toLowerCase()}function d0(l){return l.charAt(1).toUpperCase()}const m0=ey([ty,r0,ay,iy,ry],"html"),Ec=ey([ty,u0,ay,iy,ry],"svg");function p0(l){return l.join(" ").trim()}var ga={},Gs,$m;function y0(){if($m)return Gs;$m=1;var l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,i=/\n/g,r=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,c=/^:\s*/,f=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,h=/^[;\s]*/,p=/^\s+|\s+$/g,y=`
`,m="/",g="*",v="",w="comment",S="declaration";function U(H,O){if(typeof H!="string")throw new TypeError("First argument must be a string");if(!H)return[];O=O||{};var Q=1,V=1;function re(le){var K=le.match(i);K&&(Q+=K.length);var D=le.lastIndexOf(y);V=~D?le.length-D:V+le.length}function ue(){var le={line:Q,column:V};return function(K){return K.position=new B(le),fe(),K}}function B(le){this.start=le,this.end={line:Q,column:V},this.source=O.source}B.prototype.content=H;function W(le){var K=new Error(O.source+":"+Q+":"+V+": "+le);if(K.reason=le,K.filename=O.source,K.line=Q,K.column=V,K.source=H,!O.silent)throw K}function ce(le){var K=le.exec(H);if(K){var D=K[0];return re(D),H=H.slice(D.length),K}}function fe(){ce(r)}function ye(le){var K;for(le=le||[];K=ee();)K!==!1&&le.push(K);return le}function ee(){var le=ue();if(!(m!=H.charAt(0)||g!=H.charAt(1))){for(var K=2;v!=H.charAt(K)&&(g!=H.charAt(K)||m!=H.charAt(K+1));)++K;if(K+=2,v===H.charAt(K-1))return W("End of comment missing");var D=H.slice(2,K-2);return V+=2,re(D),H=H.slice(K),V+=2,le({type:w,comment:D})}}function P(){var le=ue(),K=ce(u);if(K){if(ee(),!ce(c))return W("property missing ':'");var D=ce(f),X=le({type:S,property:L(K[0].replace(l,v)),value:D?L(D[0].replace(l,v)):v});return ce(h),X}}function Ae(){var le=[];ye(le);for(var K;K=P();)K!==!1&&(le.push(K),ye(le));return le}return fe(),Ae()}function L(H){return H?H.replace(p,v):v}return Gs=U,Gs}var ep;function g0(){if(ep)return ga;ep=1;var l=ga&&ga.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(ga,"__esModule",{value:!0}),ga.default=r;const i=l(y0());function r(u,c){let f=null;if(!u||typeof u!="string")return f;const h=(0,i.default)(u),p=typeof c=="function";return h.forEach(y=>{if(y.type!=="declaration")return;const{property:m,value:g}=y;p?c(m,g,y):g&&(f=f||{},f[m]=g)}),f}return ga}var xi={},tp;function v0(){if(tp)return xi;tp=1,Object.defineProperty(xi,"__esModule",{value:!0}),xi.camelCase=void 0;var l=/^--[a-zA-Z0-9_-]+$/,i=/-([a-z])/g,r=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,c=/^-(ms)-/,f=function(m){return!m||r.test(m)||l.test(m)},h=function(m,g){return g.toUpperCase()},p=function(m,g){return"".concat(g,"-")},y=function(m,g){return g===void 0&&(g={}),f(m)?m:(m=m.toLowerCase(),g.reactCompat?m=m.replace(c,p):m=m.replace(u,p),m.replace(i,h))};return xi.camelCase=y,xi}var wi,np;function b0(){if(np)return wi;np=1;var l=wi&&wi.__importDefault||function(c){return c&&c.__esModule?c:{default:c}},i=l(g0()),r=v0();function u(c,f){var h={};return!c||typeof c!="string"||(0,i.default)(c,function(p,y){p&&y&&(h[(0,r.camelCase)(p,f)]=y)}),h}return u.default=u,wi=u,wi}var S0=b0();const x0=su(S0),uy=oy("end"),Tc=oy("start");function oy(l){return i;function i(r){const u=r&&r.position&&r.position[l]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function w0(l){const i=Tc(l),r=uy(l);if(i&&r)return{start:i,end:r}}function ki(l){return!l||typeof l!="object"?"":"position"in l||"type"in l?lp(l.position):"start"in l||"end"in l?lp(l):"line"in l||"column"in l?rc(l):""}function rc(l){return ap(l&&l.line)+":"+ap(l&&l.column)}function lp(l){return rc(l&&l.start)+"-"+rc(l&&l.end)}function ap(l){return l&&typeof l=="number"?l:1}class mt extends Error{constructor(i,r,u){super(),typeof r=="string"&&(u=r,r=void 0);let c="",f={},h=!1;if(r&&("line"in r&&"column"in r?f={place:r}:"start"in r&&"end"in r?f={place:r}:"type"in r?f={ancestors:[r],place:r.position}:f={...r}),typeof i=="string"?c=i:!f.cause&&i&&(h=!0,c=i.message,f.cause=i),!f.ruleId&&!f.source&&typeof u=="string"){const y=u.indexOf(":");y===-1?f.ruleId=u:(f.source=u.slice(0,y),f.ruleId=u.slice(y+1))}if(!f.place&&f.ancestors&&f.ancestors){const y=f.ancestors[f.ancestors.length-1];y&&(f.place=y.position)}const p=f.place&&"start"in f.place?f.place.start:f.place;this.ancestors=f.ancestors||void 0,this.cause=f.cause||void 0,this.column=p?p.column:void 0,this.fatal=void 0,this.file="",this.message=c,this.line=p?p.line:void 0,this.name=ki(f.place)||"1:1",this.place=f.place||void 0,this.reason=this.message,this.ruleId=f.ruleId||void 0,this.source=f.source||void 0,this.stack=h&&f.cause&&typeof f.cause.stack=="string"?f.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}mt.prototype.file="";mt.prototype.name="";mt.prototype.reason="";mt.prototype.message="";mt.prototype.stack="";mt.prototype.column=void 0;mt.prototype.line=void 0;mt.prototype.ancestors=void 0;mt.prototype.cause=void 0;mt.prototype.fatal=void 0;mt.prototype.place=void 0;mt.prototype.ruleId=void 0;mt.prototype.source=void 0;const kc={}.hasOwnProperty,E0=new Map,T0=/[A-Z]/g,k0=new Set(["table","tbody","thead","tfoot","tr"]),C0=new Set(["td","th"]),sy="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function A0(l,i){if(!i||i.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=i.filePath||void 0;let u;if(i.development){if(typeof i.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=N0(r,i.jsxDEV)}else{if(typeof i.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof i.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=L0(r,i.jsx,i.jsxs)}const c={Fragment:i.Fragment,ancestors:[],components:i.components||{},create:u,elementAttributeNameCase:i.elementAttributeNameCase||"react",evaluater:i.createEvaluater?i.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:i.ignoreInvalidStyle||!1,passKeys:i.passKeys!==!1,passNode:i.passNode||!1,schema:i.space==="svg"?Ec:m0,stylePropertyNameCase:i.stylePropertyNameCase||"dom",tableCellAlignToStyle:i.tableCellAlignToStyle!==!1},f=cy(c,l,void 0);return f&&typeof f!="string"?f:c.create(l,c.Fragment,{children:f||void 0},void 0)}function cy(l,i,r){if(i.type==="element")return z0(l,i,r);if(i.type==="mdxFlowExpression"||i.type==="mdxTextExpression")return R0(l,i);if(i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement")return D0(l,i,r);if(i.type==="mdxjsEsm")return _0(l,i);if(i.type==="root")return O0(l,i,r);if(i.type==="text")return M0(l,i)}function z0(l,i,r){const u=l.schema;let c=u;i.tagName.toLowerCase()==="svg"&&u.space==="html"&&(c=Ec,l.schema=c),l.ancestors.push(i);const f=hy(l,i.tagName,!1),h=U0(l,i);let p=Ac(l,i);return k0.has(i.tagName)&&(p=p.filter(function(y){return typeof y=="string"?!a0(y):!0})),fy(l,h,f,i),Cc(h,p),l.ancestors.pop(),l.schema=u,l.create(i,f,h,r)}function R0(l,i){if(i.data&&i.data.estree&&l.evaluater){const u=i.data.estree.body[0];return u.type,l.evaluater.evaluateExpression(u.expression)}Ri(l,i.position)}function _0(l,i){if(i.data&&i.data.estree&&l.evaluater)return l.evaluater.evaluateProgram(i.data.estree);Ri(l,i.position)}function D0(l,i,r){const u=l.schema;let c=u;i.name==="svg"&&u.space==="html"&&(c=Ec,l.schema=c),l.ancestors.push(i);const f=i.name===null?l.Fragment:hy(l,i.name,!0),h=H0(l,i),p=Ac(l,i);return fy(l,h,f,i),Cc(h,p),l.ancestors.pop(),l.schema=u,l.create(i,f,h,r)}function O0(l,i,r){const u={};return Cc(u,Ac(l,i)),l.create(i,l.Fragment,u,r)}function M0(l,i){return i.value}function fy(l,i,r,u){typeof r!="string"&&r!==l.Fragment&&l.passNode&&(i.node=u)}function Cc(l,i){if(i.length>0){const r=i.length>1?i:i[0];r&&(l.children=r)}}function L0(l,i,r){return u;function u(c,f,h,p){const m=Array.isArray(h.children)?r:i;return p?m(f,h,p):m(f,h)}}function N0(l,i){return r;function r(u,c,f,h){const p=Array.isArray(f.children),y=Tc(u);return i(c,f,h,p,{columnNumber:y?y.column-1:void 0,fileName:l,lineNumber:y?y.line:void 0},void 0)}}function U0(l,i){const r={};let u,c;for(c in i.properties)if(c!=="children"&&kc.call(i.properties,c)){const f=B0(l,c,i.properties[c]);if(f){const[h,p]=f;l.tableCellAlignToStyle&&h==="align"&&typeof p=="string"&&C0.has(i.tagName)?u=p:r[h]=p}}if(u){const f=r.style||(r.style={});f[l.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return r}function H0(l,i){const r={};for(const u of i.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&l.evaluater){const f=u.data.estree.body[0];f.type;const h=f.expression;h.type;const p=h.properties[0];p.type,Object.assign(r,l.evaluater.evaluateExpression(p.argument))}else Ri(l,i.position);else{const c=u.name;let f;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&l.evaluater){const p=u.value.data.estree.body[0];p.type,f=l.evaluater.evaluateExpression(p.expression)}else Ri(l,i.position);else f=u.value===null?!0:u.value;r[c]=f}return r}function Ac(l,i){const r=[];let u=-1;const c=l.passKeys?new Map:E0;for(;++u<i.children.length;){const f=i.children[u];let h;if(l.passKeys){const y=f.type==="element"?f.tagName:f.type==="mdxJsxFlowElement"||f.type==="mdxJsxTextElement"?f.name:void 0;if(y){const m=c.get(y)||0;h=y+"-"+m,c.set(y,m+1)}}const p=cy(l,f,h);p!==void 0&&r.push(p)}return r}function B0(l,i,r){const u=f0(l.schema,i);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=u.commaSeparated?$1(r):p0(r)),u.property==="style"){let c=typeof r=="object"?r:j0(l,String(r));return l.stylePropertyNameCase==="css"&&(c=q0(c)),["style",c]}return[l.elementAttributeNameCase==="react"&&u.space?o0[u.property]||u.property:u.attribute,r]}}function j0(l,i){try{return x0(i,{reactCompat:!0})}catch(r){if(l.ignoreInvalidStyle)return{};const u=r,c=new mt("Cannot parse `style` attribute",{ancestors:l.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw c.file=l.filePath||void 0,c.url=sy+"#cannot-parse-style-attribute",c}}function hy(l,i,r){let u;if(!r)u={type:"Literal",value:i};else if(i.includes(".")){const c=i.split(".");let f=-1,h;for(;++f<c.length;){const p=Fm(c[f])?{type:"Identifier",name:c[f]}:{type:"Literal",value:c[f]};h=h?{type:"MemberExpression",object:h,property:p,computed:!!(f&&p.type==="Literal"),optional:!1}:p}u=h}else u=Fm(i)&&!/^[a-z]/.test(i)?{type:"Identifier",name:i}:{type:"Literal",value:i};if(u.type==="Literal"){const c=u.value;return kc.call(l.components,c)?l.components[c]:c}if(l.evaluater)return l.evaluater.evaluateExpression(u);Ri(l)}function Ri(l,i){const r=new mt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:l.ancestors,place:i,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=l.filePath||void 0,r.url=sy+"#cannot-handle-mdx-estrees-without-createevaluater",r}function q0(l){const i={};let r;for(r in l)kc.call(l,r)&&(i[Y0(r)]=l[r]);return i}function Y0(l){let i=l.replace(T0,G0);return i.slice(0,3)==="ms-"&&(i="-"+i),i}function G0(l){return"-"+l.toLowerCase()}const Is={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},I0={};function V0(l,i){const r=I0,u=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,c=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return dy(l,u,c)}function dy(l,i,r){if(Q0(l)){if("value"in l)return l.type==="html"&&!r?"":l.value;if(i&&"alt"in l&&l.alt)return l.alt;if("children"in l)return ip(l.children,i,r)}return Array.isArray(l)?ip(l,i,r):""}function ip(l,i,r){const u=[];let c=-1;for(;++c<l.length;)u[c]=dy(l[c],i,r);return u.join("")}function Q0(l){return!!(l&&typeof l=="object")}const rp=document.createElement("i");function zc(l){const i="&"+l+";";rp.innerHTML=i;const r=rp.textContent;return r.charCodeAt(r.length-1)===59&&l!=="semi"||r===i?!1:r}function fn(l,i,r,u){const c=l.length;let f=0,h;if(i<0?i=-i>c?0:c+i:i=i>c?c:i,r=r>0?r:0,u.length<1e4)h=Array.from(u),h.unshift(i,r),l.splice(...h);else for(r&&l.splice(i,r);f<u.length;)h=u.slice(f,f+1e4),h.unshift(i,0),l.splice(...h),f+=1e4,i+=1e4}function Pt(l,i){return l.length>0?(fn(l,l.length,0,i),l):i}const up={}.hasOwnProperty;function X0(l){const i={};let r=-1;for(;++r<l.length;)Z0(i,l[r]);return i}function Z0(l,i){let r;for(r in i){const c=(up.call(l,r)?l[r]:void 0)||(l[r]={}),f=i[r];let h;if(f)for(h in f){up.call(c,h)||(c[h]=[]);const p=f[h];K0(c[h],Array.isArray(p)?p:p?[p]:[])}}}function K0(l,i){let r=-1;const u=[];for(;++r<i.length;)(i[r].add==="after"?l:u).push(i[r]);fn(l,0,0,u)}function my(l,i){const r=Number.parseInt(l,i);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function Sa(l){return l.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const cn=ol(/[A-Za-z]/),Bt=ol(/[\dA-Za-z]/),F0=ol(/[#-'*+\--9=?A-Z^-~]/);function uc(l){return l!==null&&(l<32||l===127)}const oc=ol(/\d/),W0=ol(/[\dA-Fa-f]/),J0=ol(/[!-/:-@[-`{-~]/);function de(l){return l!==null&&l<-2}function At(l){return l!==null&&(l<0||l===32)}function De(l){return l===-2||l===-1||l===32}const P0=ol(new RegExp("\\p{P}|\\p{S}","u")),$0=ol(/\s/);function ol(l){return i;function i(r){return r!==null&&r>-1&&l.test(String.fromCharCode(r))}}function Ta(l){const i=[];let r=-1,u=0,c=0;for(;++r<l.length;){const f=l.charCodeAt(r);let h="";if(f===37&&Bt(l.charCodeAt(r+1))&&Bt(l.charCodeAt(r+2)))c=2;else if(f<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f))||(h=String.fromCharCode(f));else if(f>55295&&f<57344){const p=l.charCodeAt(r+1);f<56320&&p>56319&&p<57344?(h=String.fromCharCode(f,p),c=1):h="�"}else h=String.fromCharCode(f);h&&(i.push(l.slice(u,r),encodeURIComponent(h)),u=r+c+1,h=""),c&&(r+=c,c=0)}return i.join("")+l.slice(u)}function Ge(l,i,r,u){const c=u?u-1:Number.POSITIVE_INFINITY;let f=0;return h;function h(y){return De(y)?(l.enter(r),p(y)):i(y)}function p(y){return De(y)&&f++<c?(l.consume(y),p):(l.exit(r),i(y))}}const eS={tokenize:tS};function tS(l){const i=l.attempt(this.parser.constructs.contentInitial,u,c);let r;return i;function u(p){if(p===null){l.consume(p);return}return l.enter("lineEnding"),l.consume(p),l.exit("lineEnding"),Ge(l,i,"linePrefix")}function c(p){return l.enter("paragraph"),f(p)}function f(p){const y=l.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=y),r=y,h(p)}function h(p){if(p===null){l.exit("chunkText"),l.exit("paragraph"),l.consume(p);return}return de(p)?(l.consume(p),l.exit("chunkText"),f):(l.consume(p),h)}}const nS={tokenize:lS},op={tokenize:aS};function lS(l){const i=this,r=[];let u=0,c,f,h;return p;function p(V){if(u<r.length){const re=r[u];return i.containerState=re[1],l.attempt(re[0].continuation,y,m)(V)}return m(V)}function y(V){if(u++,i.containerState._closeFlow){i.containerState._closeFlow=void 0,c&&Q();const re=i.events.length;let ue=re,B;for(;ue--;)if(i.events[ue][0]==="exit"&&i.events[ue][1].type==="chunkFlow"){B=i.events[ue][1].end;break}O(u);let W=re;for(;W<i.events.length;)i.events[W][1].end={...B},W++;return fn(i.events,ue+1,0,i.events.slice(re)),i.events.length=W,m(V)}return p(V)}function m(V){if(u===r.length){if(!c)return w(V);if(c.currentConstruct&&c.currentConstruct.concrete)return U(V);i.interrupt=!!(c.currentConstruct&&!c._gfmTableDynamicInterruptHack)}return i.containerState={},l.check(op,g,v)(V)}function g(V){return c&&Q(),O(u),w(V)}function v(V){return i.parser.lazy[i.now().line]=u!==r.length,h=i.now().offset,U(V)}function w(V){return i.containerState={},l.attempt(op,S,U)(V)}function S(V){return u++,r.push([i.currentConstruct,i.containerState]),w(V)}function U(V){if(V===null){c&&Q(),O(0),l.consume(V);return}return c=c||i.parser.flow(i.now()),l.enter("chunkFlow",{_tokenizer:c,contentType:"flow",previous:f}),L(V)}function L(V){if(V===null){H(l.exit("chunkFlow"),!0),O(0),l.consume(V);return}return de(V)?(l.consume(V),H(l.exit("chunkFlow")),u=0,i.interrupt=void 0,p):(l.consume(V),L)}function H(V,re){const ue=i.sliceStream(V);if(re&&ue.push(null),V.previous=f,f&&(f.next=V),f=V,c.defineSkip(V.start),c.write(ue),i.parser.lazy[V.start.line]){let B=c.events.length;for(;B--;)if(c.events[B][1].start.offset<h&&(!c.events[B][1].end||c.events[B][1].end.offset>h))return;const W=i.events.length;let ce=W,fe,ye;for(;ce--;)if(i.events[ce][0]==="exit"&&i.events[ce][1].type==="chunkFlow"){if(fe){ye=i.events[ce][1].end;break}fe=!0}for(O(u),B=W;B<i.events.length;)i.events[B][1].end={...ye},B++;fn(i.events,ce+1,0,i.events.slice(W)),i.events.length=B}}function O(V){let re=r.length;for(;re-- >V;){const ue=r[re];i.containerState=ue[1],ue[0].exit.call(i,l)}r.length=V}function Q(){c.write([null]),f=void 0,c=void 0,i.containerState._closeFlow=void 0}}function aS(l,i,r){return Ge(l,l.attempt(this.parser.constructs.document,i,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function sp(l){if(l===null||At(l)||$0(l))return 1;if(P0(l))return 2}function Rc(l,i,r){const u=[];let c=-1;for(;++c<l.length;){const f=l[c].resolveAll;f&&!u.includes(f)&&(i=f(i,r),u.push(f))}return i}const sc={name:"attention",resolveAll:iS,tokenize:rS};function iS(l,i){let r=-1,u,c,f,h,p,y,m,g;for(;++r<l.length;)if(l[r][0]==="enter"&&l[r][1].type==="attentionSequence"&&l[r][1]._close){for(u=r;u--;)if(l[u][0]==="exit"&&l[u][1].type==="attentionSequence"&&l[u][1]._open&&i.sliceSerialize(l[u][1]).charCodeAt(0)===i.sliceSerialize(l[r][1]).charCodeAt(0)){if((l[u][1]._close||l[r][1]._open)&&(l[r][1].end.offset-l[r][1].start.offset)%3&&!((l[u][1].end.offset-l[u][1].start.offset+l[r][1].end.offset-l[r][1].start.offset)%3))continue;y=l[u][1].end.offset-l[u][1].start.offset>1&&l[r][1].end.offset-l[r][1].start.offset>1?2:1;const v={...l[u][1].end},w={...l[r][1].start};cp(v,-y),cp(w,y),h={type:y>1?"strongSequence":"emphasisSequence",start:v,end:{...l[u][1].end}},p={type:y>1?"strongSequence":"emphasisSequence",start:{...l[r][1].start},end:w},f={type:y>1?"strongText":"emphasisText",start:{...l[u][1].end},end:{...l[r][1].start}},c={type:y>1?"strong":"emphasis",start:{...h.start},end:{...p.end}},l[u][1].end={...h.start},l[r][1].start={...p.end},m=[],l[u][1].end.offset-l[u][1].start.offset&&(m=Pt(m,[["enter",l[u][1],i],["exit",l[u][1],i]])),m=Pt(m,[["enter",c,i],["enter",h,i],["exit",h,i],["enter",f,i]]),m=Pt(m,Rc(i.parser.constructs.insideSpan.null,l.slice(u+1,r),i)),m=Pt(m,[["exit",f,i],["enter",p,i],["exit",p,i],["exit",c,i]]),l[r][1].end.offset-l[r][1].start.offset?(g=2,m=Pt(m,[["enter",l[r][1],i],["exit",l[r][1],i]])):g=0,fn(l,u-1,r-u+3,m),r=u+m.length-g-2;break}}for(r=-1;++r<l.length;)l[r][1].type==="attentionSequence"&&(l[r][1].type="data");return l}function rS(l,i){const r=this.parser.constructs.attentionMarkers.null,u=this.previous,c=sp(u);let f;return h;function h(y){return f=y,l.enter("attentionSequence"),p(y)}function p(y){if(y===f)return l.consume(y),p;const m=l.exit("attentionSequence"),g=sp(y),v=!g||g===2&&c||r.includes(y),w=!c||c===2&&g||r.includes(u);return m._open=!!(f===42?v:v&&(c||!w)),m._close=!!(f===42?w:w&&(g||!v)),i(y)}}function cp(l,i){l.column+=i,l.offset+=i,l._bufferIndex+=i}const uS={name:"autolink",tokenize:oS};function oS(l,i,r){let u=0;return c;function c(S){return l.enter("autolink"),l.enter("autolinkMarker"),l.consume(S),l.exit("autolinkMarker"),l.enter("autolinkProtocol"),f}function f(S){return cn(S)?(l.consume(S),h):S===64?r(S):m(S)}function h(S){return S===43||S===45||S===46||Bt(S)?(u=1,p(S)):m(S)}function p(S){return S===58?(l.consume(S),u=0,y):(S===43||S===45||S===46||Bt(S))&&u++<32?(l.consume(S),p):(u=0,m(S))}function y(S){return S===62?(l.exit("autolinkProtocol"),l.enter("autolinkMarker"),l.consume(S),l.exit("autolinkMarker"),l.exit("autolink"),i):S===null||S===32||S===60||uc(S)?r(S):(l.consume(S),y)}function m(S){return S===64?(l.consume(S),g):F0(S)?(l.consume(S),m):r(S)}function g(S){return Bt(S)?v(S):r(S)}function v(S){return S===46?(l.consume(S),u=0,g):S===62?(l.exit("autolinkProtocol").type="autolinkEmail",l.enter("autolinkMarker"),l.consume(S),l.exit("autolinkMarker"),l.exit("autolink"),i):w(S)}function w(S){if((S===45||Bt(S))&&u++<63){const U=S===45?w:v;return l.consume(S),U}return r(S)}}const hu={partial:!0,tokenize:sS};function sS(l,i,r){return u;function u(f){return De(f)?Ge(l,c,"linePrefix")(f):c(f)}function c(f){return f===null||de(f)?i(f):r(f)}}const py={continuation:{tokenize:fS},exit:hS,name:"blockQuote",tokenize:cS};function cS(l,i,r){const u=this;return c;function c(h){if(h===62){const p=u.containerState;return p.open||(l.enter("blockQuote",{_container:!0}),p.open=!0),l.enter("blockQuotePrefix"),l.enter("blockQuoteMarker"),l.consume(h),l.exit("blockQuoteMarker"),f}return r(h)}function f(h){return De(h)?(l.enter("blockQuotePrefixWhitespace"),l.consume(h),l.exit("blockQuotePrefixWhitespace"),l.exit("blockQuotePrefix"),i):(l.exit("blockQuotePrefix"),i(h))}}function fS(l,i,r){const u=this;return c;function c(h){return De(h)?Ge(l,f,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):f(h)}function f(h){return l.attempt(py,i,r)(h)}}function hS(l){l.exit("blockQuote")}const yy={name:"characterEscape",tokenize:dS};function dS(l,i,r){return u;function u(f){return l.enter("characterEscape"),l.enter("escapeMarker"),l.consume(f),l.exit("escapeMarker"),c}function c(f){return J0(f)?(l.enter("characterEscapeValue"),l.consume(f),l.exit("characterEscapeValue"),l.exit("characterEscape"),i):r(f)}}const gy={name:"characterReference",tokenize:mS};function mS(l,i,r){const u=this;let c=0,f,h;return p;function p(v){return l.enter("characterReference"),l.enter("characterReferenceMarker"),l.consume(v),l.exit("characterReferenceMarker"),y}function y(v){return v===35?(l.enter("characterReferenceMarkerNumeric"),l.consume(v),l.exit("characterReferenceMarkerNumeric"),m):(l.enter("characterReferenceValue"),f=31,h=Bt,g(v))}function m(v){return v===88||v===120?(l.enter("characterReferenceMarkerHexadecimal"),l.consume(v),l.exit("characterReferenceMarkerHexadecimal"),l.enter("characterReferenceValue"),f=6,h=W0,g):(l.enter("characterReferenceValue"),f=7,h=oc,g(v))}function g(v){if(v===59&&c){const w=l.exit("characterReferenceValue");return h===Bt&&!zc(u.sliceSerialize(w))?r(v):(l.enter("characterReferenceMarker"),l.consume(v),l.exit("characterReferenceMarker"),l.exit("characterReference"),i)}return h(v)&&c++<f?(l.consume(v),g):r(v)}}const fp={partial:!0,tokenize:yS},hp={concrete:!0,name:"codeFenced",tokenize:pS};function pS(l,i,r){const u=this,c={partial:!0,tokenize:ue};let f=0,h=0,p;return y;function y(B){return m(B)}function m(B){const W=u.events[u.events.length-1];return f=W&&W[1].type==="linePrefix"?W[2].sliceSerialize(W[1],!0).length:0,p=B,l.enter("codeFenced"),l.enter("codeFencedFence"),l.enter("codeFencedFenceSequence"),g(B)}function g(B){return B===p?(h++,l.consume(B),g):h<3?r(B):(l.exit("codeFencedFenceSequence"),De(B)?Ge(l,v,"whitespace")(B):v(B))}function v(B){return B===null||de(B)?(l.exit("codeFencedFence"),u.interrupt?i(B):l.check(fp,L,re)(B)):(l.enter("codeFencedFenceInfo"),l.enter("chunkString",{contentType:"string"}),w(B))}function w(B){return B===null||de(B)?(l.exit("chunkString"),l.exit("codeFencedFenceInfo"),v(B)):De(B)?(l.exit("chunkString"),l.exit("codeFencedFenceInfo"),Ge(l,S,"whitespace")(B)):B===96&&B===p?r(B):(l.consume(B),w)}function S(B){return B===null||de(B)?v(B):(l.enter("codeFencedFenceMeta"),l.enter("chunkString",{contentType:"string"}),U(B))}function U(B){return B===null||de(B)?(l.exit("chunkString"),l.exit("codeFencedFenceMeta"),v(B)):B===96&&B===p?r(B):(l.consume(B),U)}function L(B){return l.attempt(c,re,H)(B)}function H(B){return l.enter("lineEnding"),l.consume(B),l.exit("lineEnding"),O}function O(B){return f>0&&De(B)?Ge(l,Q,"linePrefix",f+1)(B):Q(B)}function Q(B){return B===null||de(B)?l.check(fp,L,re)(B):(l.enter("codeFlowValue"),V(B))}function V(B){return B===null||de(B)?(l.exit("codeFlowValue"),Q(B)):(l.consume(B),V)}function re(B){return l.exit("codeFenced"),i(B)}function ue(B,W,ce){let fe=0;return ye;function ye(K){return B.enter("lineEnding"),B.consume(K),B.exit("lineEnding"),ee}function ee(K){return B.enter("codeFencedFence"),De(K)?Ge(B,P,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(K):P(K)}function P(K){return K===p?(B.enter("codeFencedFenceSequence"),Ae(K)):ce(K)}function Ae(K){return K===p?(fe++,B.consume(K),Ae):fe>=h?(B.exit("codeFencedFenceSequence"),De(K)?Ge(B,le,"whitespace")(K):le(K)):ce(K)}function le(K){return K===null||de(K)?(B.exit("codeFencedFence"),W(K)):ce(K)}}}function yS(l,i,r){const u=this;return c;function c(h){return h===null?r(h):(l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),f)}function f(h){return u.parser.lazy[u.now().line]?r(h):i(h)}}const Vs={name:"codeIndented",tokenize:vS},gS={partial:!0,tokenize:bS};function vS(l,i,r){const u=this;return c;function c(m){return l.enter("codeIndented"),Ge(l,f,"linePrefix",5)(m)}function f(m){const g=u.events[u.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?h(m):r(m)}function h(m){return m===null?y(m):de(m)?l.attempt(gS,h,y)(m):(l.enter("codeFlowValue"),p(m))}function p(m){return m===null||de(m)?(l.exit("codeFlowValue"),h(m)):(l.consume(m),p)}function y(m){return l.exit("codeIndented"),i(m)}}function bS(l,i,r){const u=this;return c;function c(h){return u.parser.lazy[u.now().line]?r(h):de(h)?(l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),c):Ge(l,f,"linePrefix",5)(h)}function f(h){const p=u.events[u.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?i(h):de(h)?c(h):r(h)}}const SS={name:"codeText",previous:wS,resolve:xS,tokenize:ES};function xS(l){let i=l.length-4,r=3,u,c;if((l[r][1].type==="lineEnding"||l[r][1].type==="space")&&(l[i][1].type==="lineEnding"||l[i][1].type==="space")){for(u=r;++u<i;)if(l[u][1].type==="codeTextData"){l[r][1].type="codeTextPadding",l[i][1].type="codeTextPadding",r+=2,i-=2;break}}for(u=r-1,i++;++u<=i;)c===void 0?u!==i&&l[u][1].type!=="lineEnding"&&(c=u):(u===i||l[u][1].type==="lineEnding")&&(l[c][1].type="codeTextData",u!==c+2&&(l[c][1].end=l[u-1][1].end,l.splice(c+2,u-c-2),i-=u-c-2,u=c+2),c=void 0);return l}function wS(l){return l!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ES(l,i,r){let u=0,c,f;return h;function h(v){return l.enter("codeText"),l.enter("codeTextSequence"),p(v)}function p(v){return v===96?(l.consume(v),u++,p):(l.exit("codeTextSequence"),y(v))}function y(v){return v===null?r(v):v===32?(l.enter("space"),l.consume(v),l.exit("space"),y):v===96?(f=l.enter("codeTextSequence"),c=0,g(v)):de(v)?(l.enter("lineEnding"),l.consume(v),l.exit("lineEnding"),y):(l.enter("codeTextData"),m(v))}function m(v){return v===null||v===32||v===96||de(v)?(l.exit("codeTextData"),y(v)):(l.consume(v),m)}function g(v){return v===96?(l.consume(v),c++,g):c===u?(l.exit("codeTextSequence"),l.exit("codeText"),i(v)):(f.type="codeTextData",m(v))}}class TS{constructor(i){this.left=i?[...i]:[],this.right=[]}get(i){if(i<0||i>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+i+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return i<this.left.length?this.left[i]:this.right[this.right.length-i+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(i,r){const u=r??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(i,u):i>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-i+this.left.length).reverse():this.left.slice(i).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(i,r,u){const c=r||0;this.setCursor(Math.trunc(i));const f=this.right.splice(this.right.length-c,Number.POSITIVE_INFINITY);return u&&Ei(this.left,u),f.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(i){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(i)}pushMany(i){this.setCursor(Number.POSITIVE_INFINITY),Ei(this.left,i)}unshift(i){this.setCursor(0),this.right.push(i)}unshiftMany(i){this.setCursor(0),Ei(this.right,i.reverse())}setCursor(i){if(!(i===this.left.length||i>this.left.length&&this.right.length===0||i<0&&this.left.length===0))if(i<this.left.length){const r=this.left.splice(i,Number.POSITIVE_INFINITY);Ei(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-i,Number.POSITIVE_INFINITY);Ei(this.left,r.reverse())}}}function Ei(l,i){let r=0;if(i.length<1e4)l.push(...i);else for(;r<i.length;)l.push(...i.slice(r,r+1e4)),r+=1e4}function vy(l){const i={};let r=-1,u,c,f,h,p,y,m;const g=new TS(l);for(;++r<g.length;){for(;r in i;)r=i[r];if(u=g.get(r),r&&u[1].type==="chunkFlow"&&g.get(r-1)[1].type==="listItemPrefix"&&(y=u[1]._tokenizer.events,f=0,f<y.length&&y[f][1].type==="lineEndingBlank"&&(f+=2),f<y.length&&y[f][1].type==="content"))for(;++f<y.length&&y[f][1].type!=="content";)y[f][1].type==="chunkText"&&(y[f][1]._isInFirstContentOfListItem=!0,f++);if(u[0]==="enter")u[1].contentType&&(Object.assign(i,kS(g,r)),r=i[r],m=!0);else if(u[1]._container){for(f=r,c=void 0;f--;)if(h=g.get(f),h[1].type==="lineEnding"||h[1].type==="lineEndingBlank")h[0]==="enter"&&(c&&(g.get(c)[1].type="lineEndingBlank"),h[1].type="lineEnding",c=f);else if(!(h[1].type==="linePrefix"||h[1].type==="listItemIndent"))break;c&&(u[1].end={...g.get(c)[1].start},p=g.slice(c,r),p.unshift(u),g.splice(c,r-c+1,p))}}return fn(l,0,Number.POSITIVE_INFINITY,g.slice(0)),!m}function kS(l,i){const r=l.get(i)[1],u=l.get(i)[2];let c=i-1;const f=[];let h=r._tokenizer;h||(h=u.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(h._contentTypeTextTrailing=!0));const p=h.events,y=[],m={};let g,v,w=-1,S=r,U=0,L=0;const H=[L];for(;S;){for(;l.get(++c)[1]!==S;);f.push(c),S._tokenizer||(g=u.sliceStream(S),S.next||g.push(null),v&&h.defineSkip(S.start),S._isInFirstContentOfListItem&&(h._gfmTasklistFirstContentOfListItem=!0),h.write(g),S._isInFirstContentOfListItem&&(h._gfmTasklistFirstContentOfListItem=void 0)),v=S,S=S.next}for(S=r;++w<p.length;)p[w][0]==="exit"&&p[w-1][0]==="enter"&&p[w][1].type===p[w-1][1].type&&p[w][1].start.line!==p[w][1].end.line&&(L=w+1,H.push(L),S._tokenizer=void 0,S.previous=void 0,S=S.next);for(h.events=[],S?(S._tokenizer=void 0,S.previous=void 0):H.pop(),w=H.length;w--;){const O=p.slice(H[w],H[w+1]),Q=f.pop();y.push([Q,Q+O.length-1]),l.splice(Q,2,O)}for(y.reverse(),w=-1;++w<y.length;)m[U+y[w][0]]=U+y[w][1],U+=y[w][1]-y[w][0]-1;return m}const CS={resolve:zS,tokenize:RS},AS={partial:!0,tokenize:_S};function zS(l){return vy(l),l}function RS(l,i){let r;return u;function u(p){return l.enter("content"),r=l.enter("chunkContent",{contentType:"content"}),c(p)}function c(p){return p===null?f(p):de(p)?l.check(AS,h,f)(p):(l.consume(p),c)}function f(p){return l.exit("chunkContent"),l.exit("content"),i(p)}function h(p){return l.consume(p),l.exit("chunkContent"),r.next=l.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,c}}function _S(l,i,r){const u=this;return c;function c(h){return l.exit("chunkContent"),l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),Ge(l,f,"linePrefix")}function f(h){if(h===null||de(h))return r(h);const p=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?i(h):l.interrupt(u.parser.constructs.flow,r,i)(h)}}function by(l,i,r,u,c,f,h,p,y){const m=y||Number.POSITIVE_INFINITY;let g=0;return v;function v(O){return O===60?(l.enter(u),l.enter(c),l.enter(f),l.consume(O),l.exit(f),w):O===null||O===32||O===41||uc(O)?r(O):(l.enter(u),l.enter(h),l.enter(p),l.enter("chunkString",{contentType:"string"}),L(O))}function w(O){return O===62?(l.enter(f),l.consume(O),l.exit(f),l.exit(c),l.exit(u),i):(l.enter(p),l.enter("chunkString",{contentType:"string"}),S(O))}function S(O){return O===62?(l.exit("chunkString"),l.exit(p),w(O)):O===null||O===60||de(O)?r(O):(l.consume(O),O===92?U:S)}function U(O){return O===60||O===62||O===92?(l.consume(O),S):S(O)}function L(O){return!g&&(O===null||O===41||At(O))?(l.exit("chunkString"),l.exit(p),l.exit(h),l.exit(u),i(O)):g<m&&O===40?(l.consume(O),g++,L):O===41?(l.consume(O),g--,L):O===null||O===32||O===40||uc(O)?r(O):(l.consume(O),O===92?H:L)}function H(O){return O===40||O===41||O===92?(l.consume(O),L):L(O)}}function Sy(l,i,r,u,c,f){const h=this;let p=0,y;return m;function m(S){return l.enter(u),l.enter(c),l.consume(S),l.exit(c),l.enter(f),g}function g(S){return p>999||S===null||S===91||S===93&&!y||S===94&&!p&&"_hiddenFootnoteSupport"in h.parser.constructs?r(S):S===93?(l.exit(f),l.enter(c),l.consume(S),l.exit(c),l.exit(u),i):de(S)?(l.enter("lineEnding"),l.consume(S),l.exit("lineEnding"),g):(l.enter("chunkString",{contentType:"string"}),v(S))}function v(S){return S===null||S===91||S===93||de(S)||p++>999?(l.exit("chunkString"),g(S)):(l.consume(S),y||(y=!De(S)),S===92?w:v)}function w(S){return S===91||S===92||S===93?(l.consume(S),p++,v):v(S)}}function xy(l,i,r,u,c,f){let h;return p;function p(w){return w===34||w===39||w===40?(l.enter(u),l.enter(c),l.consume(w),l.exit(c),h=w===40?41:w,y):r(w)}function y(w){return w===h?(l.enter(c),l.consume(w),l.exit(c),l.exit(u),i):(l.enter(f),m(w))}function m(w){return w===h?(l.exit(f),y(h)):w===null?r(w):de(w)?(l.enter("lineEnding"),l.consume(w),l.exit("lineEnding"),Ge(l,m,"linePrefix")):(l.enter("chunkString",{contentType:"string"}),g(w))}function g(w){return w===h||w===null||de(w)?(l.exit("chunkString"),m(w)):(l.consume(w),w===92?v:g)}function v(w){return w===h||w===92?(l.consume(w),g):g(w)}}function Ci(l,i){let r;return u;function u(c){return de(c)?(l.enter("lineEnding"),l.consume(c),l.exit("lineEnding"),r=!0,u):De(c)?Ge(l,u,r?"linePrefix":"lineSuffix")(c):i(c)}}const DS={name:"definition",tokenize:MS},OS={partial:!0,tokenize:LS};function MS(l,i,r){const u=this;let c;return f;function f(S){return l.enter("definition"),h(S)}function h(S){return Sy.call(u,l,p,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(S)}function p(S){return c=Sa(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),S===58?(l.enter("definitionMarker"),l.consume(S),l.exit("definitionMarker"),y):r(S)}function y(S){return At(S)?Ci(l,m)(S):m(S)}function m(S){return by(l,g,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(S)}function g(S){return l.attempt(OS,v,v)(S)}function v(S){return De(S)?Ge(l,w,"whitespace")(S):w(S)}function w(S){return S===null||de(S)?(l.exit("definition"),u.parser.defined.push(c),i(S)):r(S)}}function LS(l,i,r){return u;function u(p){return At(p)?Ci(l,c)(p):r(p)}function c(p){return xy(l,f,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(p)}function f(p){return De(p)?Ge(l,h,"whitespace")(p):h(p)}function h(p){return p===null||de(p)?i(p):r(p)}}const NS={name:"hardBreakEscape",tokenize:US};function US(l,i,r){return u;function u(f){return l.enter("hardBreakEscape"),l.consume(f),c}function c(f){return de(f)?(l.exit("hardBreakEscape"),i(f)):r(f)}}const HS={name:"headingAtx",resolve:BS,tokenize:jS};function BS(l,i){let r=l.length-2,u=3,c,f;return l[u][1].type==="whitespace"&&(u+=2),r-2>u&&l[r][1].type==="whitespace"&&(r-=2),l[r][1].type==="atxHeadingSequence"&&(u===r-1||r-4>u&&l[r-2][1].type==="whitespace")&&(r-=u+1===r?2:4),r>u&&(c={type:"atxHeadingText",start:l[u][1].start,end:l[r][1].end},f={type:"chunkText",start:l[u][1].start,end:l[r][1].end,contentType:"text"},fn(l,u,r-u+1,[["enter",c,i],["enter",f,i],["exit",f,i],["exit",c,i]])),l}function jS(l,i,r){let u=0;return c;function c(g){return l.enter("atxHeading"),f(g)}function f(g){return l.enter("atxHeadingSequence"),h(g)}function h(g){return g===35&&u++<6?(l.consume(g),h):g===null||At(g)?(l.exit("atxHeadingSequence"),p(g)):r(g)}function p(g){return g===35?(l.enter("atxHeadingSequence"),y(g)):g===null||de(g)?(l.exit("atxHeading"),i(g)):De(g)?Ge(l,p,"whitespace")(g):(l.enter("atxHeadingText"),m(g))}function y(g){return g===35?(l.consume(g),y):(l.exit("atxHeadingSequence"),p(g))}function m(g){return g===null||g===35||At(g)?(l.exit("atxHeadingText"),p(g)):(l.consume(g),m)}}const qS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],dp=["pre","script","style","textarea"],YS={concrete:!0,name:"htmlFlow",resolveTo:VS,tokenize:QS},GS={partial:!0,tokenize:ZS},IS={partial:!0,tokenize:XS};function VS(l){let i=l.length;for(;i--&&!(l[i][0]==="enter"&&l[i][1].type==="htmlFlow"););return i>1&&l[i-2][1].type==="linePrefix"&&(l[i][1].start=l[i-2][1].start,l[i+1][1].start=l[i-2][1].start,l.splice(i-2,2)),l}function QS(l,i,r){const u=this;let c,f,h,p,y;return m;function m(x){return g(x)}function g(x){return l.enter("htmlFlow"),l.enter("htmlFlowData"),l.consume(x),v}function v(x){return x===33?(l.consume(x),w):x===47?(l.consume(x),f=!0,L):x===63?(l.consume(x),c=3,u.interrupt?i:E):cn(x)?(l.consume(x),h=String.fromCharCode(x),H):r(x)}function w(x){return x===45?(l.consume(x),c=2,S):x===91?(l.consume(x),c=5,p=0,U):cn(x)?(l.consume(x),c=4,u.interrupt?i:E):r(x)}function S(x){return x===45?(l.consume(x),u.interrupt?i:E):r(x)}function U(x){const J="CDATA[";return x===J.charCodeAt(p++)?(l.consume(x),p===J.length?u.interrupt?i:P:U):r(x)}function L(x){return cn(x)?(l.consume(x),h=String.fromCharCode(x),H):r(x)}function H(x){if(x===null||x===47||x===62||At(x)){const J=x===47,se=h.toLowerCase();return!J&&!f&&dp.includes(se)?(c=1,u.interrupt?i(x):P(x)):qS.includes(h.toLowerCase())?(c=6,J?(l.consume(x),O):u.interrupt?i(x):P(x)):(c=7,u.interrupt&&!u.parser.lazy[u.now().line]?r(x):f?Q(x):V(x))}return x===45||Bt(x)?(l.consume(x),h+=String.fromCharCode(x),H):r(x)}function O(x){return x===62?(l.consume(x),u.interrupt?i:P):r(x)}function Q(x){return De(x)?(l.consume(x),Q):ye(x)}function V(x){return x===47?(l.consume(x),ye):x===58||x===95||cn(x)?(l.consume(x),re):De(x)?(l.consume(x),V):ye(x)}function re(x){return x===45||x===46||x===58||x===95||Bt(x)?(l.consume(x),re):ue(x)}function ue(x){return x===61?(l.consume(x),B):De(x)?(l.consume(x),ue):V(x)}function B(x){return x===null||x===60||x===61||x===62||x===96?r(x):x===34||x===39?(l.consume(x),y=x,W):De(x)?(l.consume(x),B):ce(x)}function W(x){return x===y?(l.consume(x),y=null,fe):x===null||de(x)?r(x):(l.consume(x),W)}function ce(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||At(x)?ue(x):(l.consume(x),ce)}function fe(x){return x===47||x===62||De(x)?V(x):r(x)}function ye(x){return x===62?(l.consume(x),ee):r(x)}function ee(x){return x===null||de(x)?P(x):De(x)?(l.consume(x),ee):r(x)}function P(x){return x===45&&c===2?(l.consume(x),D):x===60&&c===1?(l.consume(x),X):x===62&&c===4?(l.consume(x),k):x===63&&c===3?(l.consume(x),E):x===93&&c===5?(l.consume(x),be):de(x)&&(c===6||c===7)?(l.exit("htmlFlowData"),l.check(GS,j,Ae)(x)):x===null||de(x)?(l.exit("htmlFlowData"),Ae(x)):(l.consume(x),P)}function Ae(x){return l.check(IS,le,j)(x)}function le(x){return l.enter("lineEnding"),l.consume(x),l.exit("lineEnding"),K}function K(x){return x===null||de(x)?Ae(x):(l.enter("htmlFlowData"),P(x))}function D(x){return x===45?(l.consume(x),E):P(x)}function X(x){return x===47?(l.consume(x),h="",ne):P(x)}function ne(x){if(x===62){const J=h.toLowerCase();return dp.includes(J)?(l.consume(x),k):P(x)}return cn(x)&&h.length<8?(l.consume(x),h+=String.fromCharCode(x),ne):P(x)}function be(x){return x===93?(l.consume(x),E):P(x)}function E(x){return x===62?(l.consume(x),k):x===45&&c===2?(l.consume(x),E):P(x)}function k(x){return x===null||de(x)?(l.exit("htmlFlowData"),j(x)):(l.consume(x),k)}function j(x){return l.exit("htmlFlow"),i(x)}}function XS(l,i,r){const u=this;return c;function c(h){return de(h)?(l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),f):r(h)}function f(h){return u.parser.lazy[u.now().line]?r(h):i(h)}}function ZS(l,i,r){return u;function u(c){return l.enter("lineEnding"),l.consume(c),l.exit("lineEnding"),l.attempt(hu,i,r)}}const KS={name:"htmlText",tokenize:FS};function FS(l,i,r){const u=this;let c,f,h;return p;function p(E){return l.enter("htmlText"),l.enter("htmlTextData"),l.consume(E),y}function y(E){return E===33?(l.consume(E),m):E===47?(l.consume(E),ue):E===63?(l.consume(E),V):cn(E)?(l.consume(E),ce):r(E)}function m(E){return E===45?(l.consume(E),g):E===91?(l.consume(E),f=0,U):cn(E)?(l.consume(E),Q):r(E)}function g(E){return E===45?(l.consume(E),S):r(E)}function v(E){return E===null?r(E):E===45?(l.consume(E),w):de(E)?(h=v,X(E)):(l.consume(E),v)}function w(E){return E===45?(l.consume(E),S):v(E)}function S(E){return E===62?D(E):E===45?w(E):v(E)}function U(E){const k="CDATA[";return E===k.charCodeAt(f++)?(l.consume(E),f===k.length?L:U):r(E)}function L(E){return E===null?r(E):E===93?(l.consume(E),H):de(E)?(h=L,X(E)):(l.consume(E),L)}function H(E){return E===93?(l.consume(E),O):L(E)}function O(E){return E===62?D(E):E===93?(l.consume(E),O):L(E)}function Q(E){return E===null||E===62?D(E):de(E)?(h=Q,X(E)):(l.consume(E),Q)}function V(E){return E===null?r(E):E===63?(l.consume(E),re):de(E)?(h=V,X(E)):(l.consume(E),V)}function re(E){return E===62?D(E):V(E)}function ue(E){return cn(E)?(l.consume(E),B):r(E)}function B(E){return E===45||Bt(E)?(l.consume(E),B):W(E)}function W(E){return de(E)?(h=W,X(E)):De(E)?(l.consume(E),W):D(E)}function ce(E){return E===45||Bt(E)?(l.consume(E),ce):E===47||E===62||At(E)?fe(E):r(E)}function fe(E){return E===47?(l.consume(E),D):E===58||E===95||cn(E)?(l.consume(E),ye):de(E)?(h=fe,X(E)):De(E)?(l.consume(E),fe):D(E)}function ye(E){return E===45||E===46||E===58||E===95||Bt(E)?(l.consume(E),ye):ee(E)}function ee(E){return E===61?(l.consume(E),P):de(E)?(h=ee,X(E)):De(E)?(l.consume(E),ee):fe(E)}function P(E){return E===null||E===60||E===61||E===62||E===96?r(E):E===34||E===39?(l.consume(E),c=E,Ae):de(E)?(h=P,X(E)):De(E)?(l.consume(E),P):(l.consume(E),le)}function Ae(E){return E===c?(l.consume(E),c=void 0,K):E===null?r(E):de(E)?(h=Ae,X(E)):(l.consume(E),Ae)}function le(E){return E===null||E===34||E===39||E===60||E===61||E===96?r(E):E===47||E===62||At(E)?fe(E):(l.consume(E),le)}function K(E){return E===47||E===62||At(E)?fe(E):r(E)}function D(E){return E===62?(l.consume(E),l.exit("htmlTextData"),l.exit("htmlText"),i):r(E)}function X(E){return l.exit("htmlTextData"),l.enter("lineEnding"),l.consume(E),l.exit("lineEnding"),ne}function ne(E){return De(E)?Ge(l,be,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):be(E)}function be(E){return l.enter("htmlTextData"),h(E)}}const _c={name:"labelEnd",resolveAll:$S,resolveTo:ex,tokenize:tx},WS={tokenize:nx},JS={tokenize:lx},PS={tokenize:ax};function $S(l){let i=-1;const r=[];for(;++i<l.length;){const u=l[i][1];if(r.push(l[i]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const c=u.type==="labelImage"?4:2;u.type="data",i+=c}}return l.length!==r.length&&fn(l,0,l.length,r),l}function ex(l,i){let r=l.length,u=0,c,f,h,p;for(;r--;)if(c=l[r][1],f){if(c.type==="link"||c.type==="labelLink"&&c._inactive)break;l[r][0]==="enter"&&c.type==="labelLink"&&(c._inactive=!0)}else if(h){if(l[r][0]==="enter"&&(c.type==="labelImage"||c.type==="labelLink")&&!c._balanced&&(f=r,c.type!=="labelLink")){u=2;break}}else c.type==="labelEnd"&&(h=r);const y={type:l[f][1].type==="labelLink"?"link":"image",start:{...l[f][1].start},end:{...l[l.length-1][1].end}},m={type:"label",start:{...l[f][1].start},end:{...l[h][1].end}},g={type:"labelText",start:{...l[f+u+2][1].end},end:{...l[h-2][1].start}};return p=[["enter",y,i],["enter",m,i]],p=Pt(p,l.slice(f+1,f+u+3)),p=Pt(p,[["enter",g,i]]),p=Pt(p,Rc(i.parser.constructs.insideSpan.null,l.slice(f+u+4,h-3),i)),p=Pt(p,[["exit",g,i],l[h-2],l[h-1],["exit",m,i]]),p=Pt(p,l.slice(h+1)),p=Pt(p,[["exit",y,i]]),fn(l,f,l.length,p),l}function tx(l,i,r){const u=this;let c=u.events.length,f,h;for(;c--;)if((u.events[c][1].type==="labelImage"||u.events[c][1].type==="labelLink")&&!u.events[c][1]._balanced){f=u.events[c][1];break}return p;function p(w){return f?f._inactive?v(w):(h=u.parser.defined.includes(Sa(u.sliceSerialize({start:f.end,end:u.now()}))),l.enter("labelEnd"),l.enter("labelMarker"),l.consume(w),l.exit("labelMarker"),l.exit("labelEnd"),y):r(w)}function y(w){return w===40?l.attempt(WS,g,h?g:v)(w):w===91?l.attempt(JS,g,h?m:v)(w):h?g(w):v(w)}function m(w){return l.attempt(PS,g,v)(w)}function g(w){return i(w)}function v(w){return f._balanced=!0,r(w)}}function nx(l,i,r){return u;function u(v){return l.enter("resource"),l.enter("resourceMarker"),l.consume(v),l.exit("resourceMarker"),c}function c(v){return At(v)?Ci(l,f)(v):f(v)}function f(v){return v===41?g(v):by(l,h,p,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(v)}function h(v){return At(v)?Ci(l,y)(v):g(v)}function p(v){return r(v)}function y(v){return v===34||v===39||v===40?xy(l,m,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(v):g(v)}function m(v){return At(v)?Ci(l,g)(v):g(v)}function g(v){return v===41?(l.enter("resourceMarker"),l.consume(v),l.exit("resourceMarker"),l.exit("resource"),i):r(v)}}function lx(l,i,r){const u=this;return c;function c(p){return Sy.call(u,l,f,h,"reference","referenceMarker","referenceString")(p)}function f(p){return u.parser.defined.includes(Sa(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?i(p):r(p)}function h(p){return r(p)}}function ax(l,i,r){return u;function u(f){return l.enter("reference"),l.enter("referenceMarker"),l.consume(f),l.exit("referenceMarker"),c}function c(f){return f===93?(l.enter("referenceMarker"),l.consume(f),l.exit("referenceMarker"),l.exit("reference"),i):r(f)}}const ix={name:"labelStartImage",resolveAll:_c.resolveAll,tokenize:rx};function rx(l,i,r){const u=this;return c;function c(p){return l.enter("labelImage"),l.enter("labelImageMarker"),l.consume(p),l.exit("labelImageMarker"),f}function f(p){return p===91?(l.enter("labelMarker"),l.consume(p),l.exit("labelMarker"),l.exit("labelImage"),h):r(p)}function h(p){return p===94&&"_hiddenFootnoteSupport"in u.parser.constructs?r(p):i(p)}}const ux={name:"labelStartLink",resolveAll:_c.resolveAll,tokenize:ox};function ox(l,i,r){const u=this;return c;function c(h){return l.enter("labelLink"),l.enter("labelMarker"),l.consume(h),l.exit("labelMarker"),l.exit("labelLink"),f}function f(h){return h===94&&"_hiddenFootnoteSupport"in u.parser.constructs?r(h):i(h)}}const Qs={name:"lineEnding",tokenize:sx};function sx(l,i){return r;function r(u){return l.enter("lineEnding"),l.consume(u),l.exit("lineEnding"),Ge(l,i,"linePrefix")}}const iu={name:"thematicBreak",tokenize:cx};function cx(l,i,r){let u=0,c;return f;function f(m){return l.enter("thematicBreak"),h(m)}function h(m){return c=m,p(m)}function p(m){return m===c?(l.enter("thematicBreakSequence"),y(m)):u>=3&&(m===null||de(m))?(l.exit("thematicBreak"),i(m)):r(m)}function y(m){return m===c?(l.consume(m),u++,y):(l.exit("thematicBreakSequence"),De(m)?Ge(l,p,"whitespace")(m):p(m))}}const Ct={continuation:{tokenize:mx},exit:yx,name:"list",tokenize:dx},fx={partial:!0,tokenize:gx},hx={partial:!0,tokenize:px};function dx(l,i,r){const u=this,c=u.events[u.events.length-1];let f=c&&c[1].type==="linePrefix"?c[2].sliceSerialize(c[1],!0).length:0,h=0;return p;function p(S){const U=u.containerState.type||(S===42||S===43||S===45?"listUnordered":"listOrdered");if(U==="listUnordered"?!u.containerState.marker||S===u.containerState.marker:oc(S)){if(u.containerState.type||(u.containerState.type=U,l.enter(U,{_container:!0})),U==="listUnordered")return l.enter("listItemPrefix"),S===42||S===45?l.check(iu,r,m)(S):m(S);if(!u.interrupt||S===49)return l.enter("listItemPrefix"),l.enter("listItemValue"),y(S)}return r(S)}function y(S){return oc(S)&&++h<10?(l.consume(S),y):(!u.interrupt||h<2)&&(u.containerState.marker?S===u.containerState.marker:S===41||S===46)?(l.exit("listItemValue"),m(S)):r(S)}function m(S){return l.enter("listItemMarker"),l.consume(S),l.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||S,l.check(hu,u.interrupt?r:g,l.attempt(fx,w,v))}function g(S){return u.containerState.initialBlankLine=!0,f++,w(S)}function v(S){return De(S)?(l.enter("listItemPrefixWhitespace"),l.consume(S),l.exit("listItemPrefixWhitespace"),w):r(S)}function w(S){return u.containerState.size=f+u.sliceSerialize(l.exit("listItemPrefix"),!0).length,i(S)}}function mx(l,i,r){const u=this;return u.containerState._closeFlow=void 0,l.check(hu,c,f);function c(p){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Ge(l,i,"listItemIndent",u.containerState.size+1)(p)}function f(p){return u.containerState.furtherBlankLines||!De(p)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,h(p)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,l.attempt(hx,i,h)(p))}function h(p){return u.containerState._closeFlow=!0,u.interrupt=void 0,Ge(l,l.attempt(Ct,i,r),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p)}}function px(l,i,r){const u=this;return Ge(l,c,"listItemIndent",u.containerState.size+1);function c(f){const h=u.events[u.events.length-1];return h&&h[1].type==="listItemIndent"&&h[2].sliceSerialize(h[1],!0).length===u.containerState.size?i(f):r(f)}}function yx(l){l.exit(this.containerState.type)}function gx(l,i,r){const u=this;return Ge(l,c,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function c(f){const h=u.events[u.events.length-1];return!De(f)&&h&&h[1].type==="listItemPrefixWhitespace"?i(f):r(f)}}const mp={name:"setextUnderline",resolveTo:vx,tokenize:bx};function vx(l,i){let r=l.length,u,c,f;for(;r--;)if(l[r][0]==="enter"){if(l[r][1].type==="content"){u=r;break}l[r][1].type==="paragraph"&&(c=r)}else l[r][1].type==="content"&&l.splice(r,1),!f&&l[r][1].type==="definition"&&(f=r);const h={type:"setextHeading",start:{...l[u][1].start},end:{...l[l.length-1][1].end}};return l[c][1].type="setextHeadingText",f?(l.splice(c,0,["enter",h,i]),l.splice(f+1,0,["exit",l[u][1],i]),l[u][1].end={...l[f][1].end}):l[u][1]=h,l.push(["exit",h,i]),l}function bx(l,i,r){const u=this;let c;return f;function f(m){let g=u.events.length,v;for(;g--;)if(u.events[g][1].type!=="lineEnding"&&u.events[g][1].type!=="linePrefix"&&u.events[g][1].type!=="content"){v=u.events[g][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||v)?(l.enter("setextHeadingLine"),c=m,h(m)):r(m)}function h(m){return l.enter("setextHeadingLineSequence"),p(m)}function p(m){return m===c?(l.consume(m),p):(l.exit("setextHeadingLineSequence"),De(m)?Ge(l,y,"lineSuffix")(m):y(m))}function y(m){return m===null||de(m)?(l.exit("setextHeadingLine"),i(m)):r(m)}}const Sx={tokenize:xx};function xx(l){const i=this,r=l.attempt(hu,u,l.attempt(this.parser.constructs.flowInitial,c,Ge(l,l.attempt(this.parser.constructs.flow,c,l.attempt(CS,c)),"linePrefix")));return r;function u(f){if(f===null){l.consume(f);return}return l.enter("lineEndingBlank"),l.consume(f),l.exit("lineEndingBlank"),i.currentConstruct=void 0,r}function c(f){if(f===null){l.consume(f);return}return l.enter("lineEnding"),l.consume(f),l.exit("lineEnding"),i.currentConstruct=void 0,r}}const wx={resolveAll:Ey()},Ex=wy("string"),Tx=wy("text");function wy(l){return{resolveAll:Ey(l==="text"?kx:void 0),tokenize:i};function i(r){const u=this,c=this.parser.constructs[l],f=r.attempt(c,h,p);return h;function h(g){return m(g)?f(g):p(g)}function p(g){if(g===null){r.consume(g);return}return r.enter("data"),r.consume(g),y}function y(g){return m(g)?(r.exit("data"),f(g)):(r.consume(g),y)}function m(g){if(g===null)return!0;const v=c[g];let w=-1;if(v)for(;++w<v.length;){const S=v[w];if(!S.previous||S.previous.call(u,u.previous))return!0}return!1}}}function Ey(l){return i;function i(r,u){let c=-1,f;for(;++c<=r.length;)f===void 0?r[c]&&r[c][1].type==="data"&&(f=c,c++):(!r[c]||r[c][1].type!=="data")&&(c!==f+2&&(r[f][1].end=r[c-1][1].end,r.splice(f+2,c-f-2),c=f+2),f=void 0);return l?l(r,u):r}}function kx(l,i){let r=0;for(;++r<=l.length;)if((r===l.length||l[r][1].type==="lineEnding")&&l[r-1][1].type==="data"){const u=l[r-1][1],c=i.sliceStream(u);let f=c.length,h=-1,p=0,y;for(;f--;){const m=c[f];if(typeof m=="string"){for(h=m.length;m.charCodeAt(h-1)===32;)p++,h--;if(h)break;h=-1}else if(m===-2)y=!0,p++;else if(m!==-1){f++;break}}if(i._contentTypeTextTrailing&&r===l.length&&(p=0),p){const m={type:r===l.length||y||p<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:f?h:u.start._bufferIndex+h,_index:u.start._index+f,line:u.end.line,column:u.end.column-p,offset:u.end.offset-p},end:{...u.end}};u.end={...m.start},u.start.offset===u.end.offset?Object.assign(u,m):(l.splice(r,0,["enter",m,i],["exit",m,i]),r+=2)}r++}return l}const Cx={42:Ct,43:Ct,45:Ct,48:Ct,49:Ct,50:Ct,51:Ct,52:Ct,53:Ct,54:Ct,55:Ct,56:Ct,57:Ct,62:py},Ax={91:DS},zx={[-2]:Vs,[-1]:Vs,32:Vs},Rx={35:HS,42:iu,45:[mp,iu],60:YS,61:mp,95:iu,96:hp,126:hp},_x={38:gy,92:yy},Dx={[-5]:Qs,[-4]:Qs,[-3]:Qs,33:ix,38:gy,42:sc,60:[uS,KS],91:ux,92:[NS,yy],93:_c,95:sc,96:SS},Ox={null:[sc,wx]},Mx={null:[42,95]},Lx={null:[]},Nx=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Mx,contentInitial:Ax,disable:Lx,document:Cx,flow:Rx,flowInitial:zx,insideSpan:Ox,string:_x,text:Dx},Symbol.toStringTag,{value:"Module"}));function Ux(l,i,r){let u={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const c={},f=[];let h=[],p=[];const y={attempt:W(ue),check:W(B),consume:Q,enter:V,exit:re,interrupt:W(B,{interrupt:!0})},m={code:null,containerState:{},defineSkip:L,events:[],now:U,parser:l,previous:null,sliceSerialize:w,sliceStream:S,write:v};let g=i.tokenize.call(m,y);return i.resolveAll&&f.push(i),m;function v(ee){return h=Pt(h,ee),H(),h[h.length-1]!==null?[]:(ce(i,0),m.events=Rc(f,m.events,m),m.events)}function w(ee,P){return Bx(S(ee),P)}function S(ee){return Hx(h,ee)}function U(){const{_bufferIndex:ee,_index:P,line:Ae,column:le,offset:K}=u;return{_bufferIndex:ee,_index:P,line:Ae,column:le,offset:K}}function L(ee){c[ee.line]=ee.column,ye()}function H(){let ee;for(;u._index<h.length;){const P=h[u._index];if(typeof P=="string")for(ee=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===ee&&u._bufferIndex<P.length;)O(P.charCodeAt(u._bufferIndex));else O(P)}}function O(ee){g=g(ee)}function Q(ee){de(ee)?(u.line++,u.column=1,u.offset+=ee===-3?2:1,ye()):ee!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===h[u._index].length&&(u._bufferIndex=-1,u._index++)),m.previous=ee}function V(ee,P){const Ae=P||{};return Ae.type=ee,Ae.start=U(),m.events.push(["enter",Ae,m]),p.push(Ae),Ae}function re(ee){const P=p.pop();return P.end=U(),m.events.push(["exit",P,m]),P}function ue(ee,P){ce(ee,P.from)}function B(ee,P){P.restore()}function W(ee,P){return Ae;function Ae(le,K,D){let X,ne,be,E;return Array.isArray(le)?j(le):"tokenize"in le?j([le]):k(le);function k(ae){return Ee;function Ee(Qe){const Ne=Qe!==null&&ae[Qe],Yt=Qe!==null&&ae.null,hn=[...Array.isArray(Ne)?Ne:Ne?[Ne]:[],...Array.isArray(Yt)?Yt:Yt?[Yt]:[]];return j(hn)(Qe)}}function j(ae){return X=ae,ne=0,ae.length===0?D:x(ae[ne])}function x(ae){return Ee;function Ee(Qe){return E=fe(),be=ae,ae.partial||(m.currentConstruct=ae),ae.name&&m.parser.constructs.disable.null.includes(ae.name)?se():ae.tokenize.call(P?Object.assign(Object.create(m),P):m,y,J,se)(Qe)}}function J(ae){return ee(be,E),K}function se(ae){return E.restore(),++ne<X.length?x(X[ne]):D}}}function ce(ee,P){ee.resolveAll&&!f.includes(ee)&&f.push(ee),ee.resolve&&fn(m.events,P,m.events.length-P,ee.resolve(m.events.slice(P),m)),ee.resolveTo&&(m.events=ee.resolveTo(m.events,m))}function fe(){const ee=U(),P=m.previous,Ae=m.currentConstruct,le=m.events.length,K=Array.from(p);return{from:le,restore:D};function D(){u=ee,m.previous=P,m.currentConstruct=Ae,m.events.length=le,p=K,ye()}}function ye(){u.line in c&&u.column<2&&(u.column=c[u.line],u.offset+=c[u.line]-1)}}function Hx(l,i){const r=i.start._index,u=i.start._bufferIndex,c=i.end._index,f=i.end._bufferIndex;let h;if(r===c)h=[l[r].slice(u,f)];else{if(h=l.slice(r,c),u>-1){const p=h[0];typeof p=="string"?h[0]=p.slice(u):h.shift()}f>0&&h.push(l[c].slice(0,f))}return h}function Bx(l,i){let r=-1;const u=[];let c;for(;++r<l.length;){const f=l[r];let h;if(typeof f=="string")h=f;else switch(f){case-5:{h="\r";break}case-4:{h=`
`;break}case-3:{h=`\r
`;break}case-2:{h=i?" ":"	";break}case-1:{if(!i&&c)continue;h=" ";break}default:h=String.fromCharCode(f)}c=f===-2,u.push(h)}return u.join("")}function jx(l){const u={constructs:X0([Nx,...(l||{}).extensions||[]]),content:c(eS),defined:[],document:c(nS),flow:c(Sx),lazy:{},string:c(Ex),text:c(Tx)};return u;function c(f){return h;function h(p){return Ux(u,f,p)}}}function qx(l){for(;!vy(l););return l}const pp=/[\0\t\n\r]/g;function Yx(){let l=1,i="",r=!0,u;return c;function c(f,h,p){const y=[];let m,g,v,w,S;for(f=i+(typeof f=="string"?f.toString():new TextDecoder(h||void 0).decode(f)),v=0,i="",r&&(f.charCodeAt(0)===65279&&v++,r=void 0);v<f.length;){if(pp.lastIndex=v,m=pp.exec(f),w=m&&m.index!==void 0?m.index:f.length,S=f.charCodeAt(w),!m){i=f.slice(v);break}if(S===10&&v===w&&u)y.push(-3),u=void 0;else switch(u&&(y.push(-5),u=void 0),v<w&&(y.push(f.slice(v,w)),l+=w-v),S){case 0:{y.push(65533),l++;break}case 9:{for(g=Math.ceil(l/4)*4,y.push(-2);l++<g;)y.push(-1);break}case 10:{y.push(-4),l=1;break}default:u=!0,l=1}v=w+1}return p&&(u&&y.push(-5),i&&y.push(i),y.push(null)),y}}const Gx=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ix(l){return l.replace(Gx,Vx)}function Vx(l,i,r){if(i)return i;if(r.charCodeAt(0)===35){const c=r.charCodeAt(1),f=c===120||c===88;return my(r.slice(f?2:1),f?16:10)}return zc(r)||l}const Ty={}.hasOwnProperty;function Qx(l,i,r){return typeof i!="string"&&(r=i,i=void 0),Xx(r)(qx(jx(r).document().write(Yx()(l,i,!0))))}function Xx(l){const i={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:f(Dl),autolinkProtocol:fe,autolinkEmail:fe,atxHeading:f(Rl),blockQuote:f(Yt),characterEscape:fe,characterReference:fe,codeFenced:f(hn),codeFencedFenceInfo:h,codeFencedFenceMeta:h,codeIndented:f(hn,h),codeText:f(ka,h),codeTextData:fe,data:fe,codeFlowValue:fe,definition:f(Li),definitionDestinationString:h,definitionLabelString:h,definitionTitleString:h,emphasis:f(dn),hardBreakEscape:f(_l),hardBreakTrailing:f(_l),htmlFlow:f(Ni,h),htmlFlowData:fe,htmlText:f(Ni,h),htmlTextData:fe,image:f(Ui),label:h,link:f(Dl),listItem:f(Ca),listItemValue:w,listOrdered:f(Ol,v),listUnordered:f(Ol),paragraph:f(pu),reference:x,referenceString:h,resourceDestinationString:h,resourceTitleString:h,setextHeading:f(Rl),strong:f(yu),thematicBreak:f(gu)},exit:{atxHeading:y(),atxHeadingSequence:ue,autolink:y(),autolinkEmail:Ne,autolinkProtocol:Qe,blockQuote:y(),characterEscapeValue:ye,characterReferenceMarkerHexadecimal:se,characterReferenceMarkerNumeric:se,characterReferenceValue:ae,characterReference:Ee,codeFenced:y(H),codeFencedFence:L,codeFencedFenceInfo:S,codeFencedFenceMeta:U,codeFlowValue:ye,codeIndented:y(O),codeText:y(K),codeTextData:ye,data:ye,definition:y(),definitionDestinationString:re,definitionLabelString:Q,definitionTitleString:V,emphasis:y(),hardBreakEscape:y(P),hardBreakTrailing:y(P),htmlFlow:y(Ae),htmlFlowData:ye,htmlText:y(le),htmlTextData:ye,image:y(X),label:be,labelText:ne,lineEnding:ee,link:y(D),listItem:y(),listOrdered:y(),listUnordered:y(),paragraph:y(),referenceString:J,resourceDestinationString:E,resourceTitleString:k,resource:j,setextHeading:y(ce),setextHeadingLineSequence:W,setextHeadingText:B,strong:y(),thematicBreak:y()}};ky(i,(l||{}).mdastExtensions||[]);const r={};return u;function u(q){let F={type:"root",children:[]};const he={stack:[F],tokenStack:[],config:i,enter:p,exit:m,buffer:h,resume:g,data:r},Se=[];let Oe=-1;for(;++Oe<q.length;)if(q[Oe][1].type==="listOrdered"||q[Oe][1].type==="listUnordered")if(q[Oe][0]==="enter")Se.push(Oe);else{const Rt=Se.pop();Oe=c(q,Rt,Oe)}for(Oe=-1;++Oe<q.length;){const Rt=i[q[Oe][0]];Ty.call(Rt,q[Oe][1].type)&&Rt[q[Oe][1].type].call(Object.assign({sliceSerialize:q[Oe][2].sliceSerialize},he),q[Oe][1])}if(he.tokenStack.length>0){const Rt=he.tokenStack[he.tokenStack.length-1];(Rt[1]||yp).call(he,void 0,Rt[0])}for(F.position={start:rl(q.length>0?q[0][1].start:{line:1,column:1,offset:0}),end:rl(q.length>0?q[q.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<i.transforms.length;)F=i.transforms[Oe](F)||F;return F}function c(q,F,he){let Se=F-1,Oe=-1,Rt=!1,mn,yt,lt,vt;for(;++Se<=he;){const je=q[Se];switch(je[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{je[0]==="enter"?Oe++:Oe--,vt=void 0;break}case"lineEndingBlank":{je[0]==="enter"&&(mn&&!vt&&!Oe&&!lt&&(lt=Se),vt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:vt=void 0}if(!Oe&&je[0]==="enter"&&je[1].type==="listItemPrefix"||Oe===-1&&je[0]==="exit"&&(je[1].type==="listUnordered"||je[1].type==="listOrdered")){if(mn){let Nn=Se;for(yt=void 0;Nn--;){const $t=q[Nn];if($t[1].type==="lineEnding"||$t[1].type==="lineEndingBlank"){if($t[0]==="exit")continue;yt&&(q[yt][1].type="lineEndingBlank",Rt=!0),$t[1].type="lineEnding",yt=Nn}else if(!($t[1].type==="linePrefix"||$t[1].type==="blockQuotePrefix"||$t[1].type==="blockQuotePrefixWhitespace"||$t[1].type==="blockQuoteMarker"||$t[1].type==="listItemIndent"))break}lt&&(!yt||lt<yt)&&(mn._spread=!0),mn.end=Object.assign({},yt?q[yt][1].start:je[1].end),q.splice(yt||Se,0,["exit",mn,je[2]]),Se++,he++}if(je[1].type==="listItemPrefix"){const Nn={type:"listItem",_spread:!1,start:Object.assign({},je[1].start),end:void 0};mn=Nn,q.splice(Se,0,["enter",Nn,je[2]]),Se++,he++,lt=void 0,vt=!0}}}return q[F][1]._spread=Rt,he}function f(q,F){return he;function he(Se){p.call(this,q(Se),Se),F&&F.call(this,Se)}}function h(){this.stack.push({type:"fragment",children:[]})}function p(q,F,he){this.stack[this.stack.length-1].children.push(q),this.stack.push(q),this.tokenStack.push([F,he||void 0]),q.position={start:rl(F.start),end:void 0}}function y(q){return F;function F(he){q&&q.call(this,he),m.call(this,he)}}function m(q,F){const he=this.stack.pop(),Se=this.tokenStack.pop();if(Se)Se[0].type!==q.type&&(F?F.call(this,q,Se[0]):(Se[1]||yp).call(this,q,Se[0]));else throw new Error("Cannot close `"+q.type+"` ("+ki({start:q.start,end:q.end})+"): it’s not open");he.position.end=rl(q.end)}function g(){return V0(this.stack.pop())}function v(){this.data.expectingFirstListItemValue=!0}function w(q){if(this.data.expectingFirstListItemValue){const F=this.stack[this.stack.length-2];F.start=Number.parseInt(this.sliceSerialize(q),10),this.data.expectingFirstListItemValue=void 0}}function S(){const q=this.resume(),F=this.stack[this.stack.length-1];F.lang=q}function U(){const q=this.resume(),F=this.stack[this.stack.length-1];F.meta=q}function L(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function H(){const q=this.resume(),F=this.stack[this.stack.length-1];F.value=q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function O(){const q=this.resume(),F=this.stack[this.stack.length-1];F.value=q.replace(/(\r?\n|\r)$/g,"")}function Q(q){const F=this.resume(),he=this.stack[this.stack.length-1];he.label=F,he.identifier=Sa(this.sliceSerialize(q)).toLowerCase()}function V(){const q=this.resume(),F=this.stack[this.stack.length-1];F.title=q}function re(){const q=this.resume(),F=this.stack[this.stack.length-1];F.url=q}function ue(q){const F=this.stack[this.stack.length-1];if(!F.depth){const he=this.sliceSerialize(q).length;F.depth=he}}function B(){this.data.setextHeadingSlurpLineEnding=!0}function W(q){const F=this.stack[this.stack.length-1];F.depth=this.sliceSerialize(q).codePointAt(0)===61?1:2}function ce(){this.data.setextHeadingSlurpLineEnding=void 0}function fe(q){const he=this.stack[this.stack.length-1].children;let Se=he[he.length-1];(!Se||Se.type!=="text")&&(Se=pt(),Se.position={start:rl(q.start),end:void 0},he.push(Se)),this.stack.push(Se)}function ye(q){const F=this.stack.pop();F.value+=this.sliceSerialize(q),F.position.end=rl(q.end)}function ee(q){const F=this.stack[this.stack.length-1];if(this.data.atHardBreak){const he=F.children[F.children.length-1];he.position.end=rl(q.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&i.canContainEols.includes(F.type)&&(fe.call(this,q),ye.call(this,q))}function P(){this.data.atHardBreak=!0}function Ae(){const q=this.resume(),F=this.stack[this.stack.length-1];F.value=q}function le(){const q=this.resume(),F=this.stack[this.stack.length-1];F.value=q}function K(){const q=this.resume(),F=this.stack[this.stack.length-1];F.value=q}function D(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const F=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=F,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function X(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const F=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=F,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function ne(q){const F=this.sliceSerialize(q),he=this.stack[this.stack.length-2];he.label=Ix(F),he.identifier=Sa(F).toLowerCase()}function be(){const q=this.stack[this.stack.length-1],F=this.resume(),he=this.stack[this.stack.length-1];if(this.data.inReference=!0,he.type==="link"){const Se=q.children;he.children=Se}else he.alt=F}function E(){const q=this.resume(),F=this.stack[this.stack.length-1];F.url=q}function k(){const q=this.resume(),F=this.stack[this.stack.length-1];F.title=q}function j(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function J(q){const F=this.resume(),he=this.stack[this.stack.length-1];he.label=F,he.identifier=Sa(this.sliceSerialize(q)).toLowerCase(),this.data.referenceType="full"}function se(q){this.data.characterReferenceType=q.type}function ae(q){const F=this.sliceSerialize(q),he=this.data.characterReferenceType;let Se;he?(Se=my(F,he==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Se=zc(F);const Oe=this.stack[this.stack.length-1];Oe.value+=Se}function Ee(q){const F=this.stack.pop();F.position.end=rl(q.end)}function Qe(q){ye.call(this,q);const F=this.stack[this.stack.length-1];F.url=this.sliceSerialize(q)}function Ne(q){ye.call(this,q);const F=this.stack[this.stack.length-1];F.url="mailto:"+this.sliceSerialize(q)}function Yt(){return{type:"blockquote",children:[]}}function hn(){return{type:"code",lang:null,meta:null,value:""}}function ka(){return{type:"inlineCode",value:""}}function Li(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function dn(){return{type:"emphasis",children:[]}}function Rl(){return{type:"heading",depth:0,children:[]}}function _l(){return{type:"break"}}function Ni(){return{type:"html",value:""}}function Ui(){return{type:"image",title:null,url:"",alt:null}}function Dl(){return{type:"link",title:null,url:"",children:[]}}function Ol(q){return{type:"list",ordered:q.type==="listOrdered",start:null,spread:q._spread,children:[]}}function Ca(q){return{type:"listItem",spread:q._spread,checked:null,children:[]}}function pu(){return{type:"paragraph",children:[]}}function yu(){return{type:"strong",children:[]}}function pt(){return{type:"text",value:""}}function gu(){return{type:"thematicBreak"}}}function rl(l){return{line:l.line,column:l.column,offset:l.offset}}function ky(l,i){let r=-1;for(;++r<i.length;){const u=i[r];Array.isArray(u)?ky(l,u):Zx(l,u)}}function Zx(l,i){let r;for(r in i)if(Ty.call(i,r))switch(r){case"canContainEols":{const u=i[r];u&&l[r].push(...u);break}case"transforms":{const u=i[r];u&&l[r].push(...u);break}case"enter":case"exit":{const u=i[r];u&&Object.assign(l[r],u);break}}}function yp(l,i){throw l?new Error("Cannot close `"+l.type+"` ("+ki({start:l.start,end:l.end})+"): a different token (`"+i.type+"`, "+ki({start:i.start,end:i.end})+") is open"):new Error("Cannot close document, a token (`"+i.type+"`, "+ki({start:i.start,end:i.end})+") is still open")}function Kx(l){const i=this;i.parser=r;function r(u){return Qx(u,{...i.data("settings"),...l,extensions:i.data("micromarkExtensions")||[],mdastExtensions:i.data("fromMarkdownExtensions")||[]})}}function Fx(l,i){const r={type:"element",tagName:"blockquote",properties:{},children:l.wrap(l.all(i),!0)};return l.patch(i,r),l.applyData(i,r)}function Wx(l,i){const r={type:"element",tagName:"br",properties:{},children:[]};return l.patch(i,r),[l.applyData(i,r),{type:"text",value:`
`}]}function Jx(l,i){const r=i.value?i.value+`
`:"",u={},c=i.lang?i.lang.split(/\s+/):[];c.length>0&&(u.className=["language-"+c[0]]);let f={type:"element",tagName:"code",properties:u,children:[{type:"text",value:r}]};return i.meta&&(f.data={meta:i.meta}),l.patch(i,f),f=l.applyData(i,f),f={type:"element",tagName:"pre",properties:{},children:[f]},l.patch(i,f),f}function Px(l,i){const r={type:"element",tagName:"del",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function $x(l,i){const r={type:"element",tagName:"em",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function ew(l,i){const r=typeof l.options.clobberPrefix=="string"?l.options.clobberPrefix:"user-content-",u=String(i.identifier).toUpperCase(),c=Ta(u.toLowerCase()),f=l.footnoteOrder.indexOf(u);let h,p=l.footnoteCounts.get(u);p===void 0?(p=0,l.footnoteOrder.push(u),h=l.footnoteOrder.length):h=f+1,p+=1,l.footnoteCounts.set(u,p);const y={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+c,id:r+"fnref-"+c+(p>1?"-"+p:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(h)}]};l.patch(i,y);const m={type:"element",tagName:"sup",properties:{},children:[y]};return l.patch(i,m),l.applyData(i,m)}function tw(l,i){const r={type:"element",tagName:"h"+i.depth,properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function nw(l,i){if(l.options.allowDangerousHtml){const r={type:"raw",value:i.value};return l.patch(i,r),l.applyData(i,r)}}function Cy(l,i){const r=i.referenceType;let u="]";if(r==="collapsed"?u+="[]":r==="full"&&(u+="["+(i.label||i.identifier)+"]"),i.type==="imageReference")return[{type:"text",value:"!["+i.alt+u}];const c=l.all(i),f=c[0];f&&f.type==="text"?f.value="["+f.value:c.unshift({type:"text",value:"["});const h=c[c.length-1];return h&&h.type==="text"?h.value+=u:c.push({type:"text",value:u}),c}function lw(l,i){const r=String(i.identifier).toUpperCase(),u=l.definitionById.get(r);if(!u)return Cy(l,i);const c={src:Ta(u.url||""),alt:i.alt};u.title!==null&&u.title!==void 0&&(c.title=u.title);const f={type:"element",tagName:"img",properties:c,children:[]};return l.patch(i,f),l.applyData(i,f)}function aw(l,i){const r={src:Ta(i.url)};i.alt!==null&&i.alt!==void 0&&(r.alt=i.alt),i.title!==null&&i.title!==void 0&&(r.title=i.title);const u={type:"element",tagName:"img",properties:r,children:[]};return l.patch(i,u),l.applyData(i,u)}function iw(l,i){const r={type:"text",value:i.value.replace(/\r?\n|\r/g," ")};l.patch(i,r);const u={type:"element",tagName:"code",properties:{},children:[r]};return l.patch(i,u),l.applyData(i,u)}function rw(l,i){const r=String(i.identifier).toUpperCase(),u=l.definitionById.get(r);if(!u)return Cy(l,i);const c={href:Ta(u.url||"")};u.title!==null&&u.title!==void 0&&(c.title=u.title);const f={type:"element",tagName:"a",properties:c,children:l.all(i)};return l.patch(i,f),l.applyData(i,f)}function uw(l,i){const r={href:Ta(i.url)};i.title!==null&&i.title!==void 0&&(r.title=i.title);const u={type:"element",tagName:"a",properties:r,children:l.all(i)};return l.patch(i,u),l.applyData(i,u)}function ow(l,i,r){const u=l.all(i),c=r?sw(r):Ay(i),f={},h=[];if(typeof i.checked=="boolean"){const g=u[0];let v;g&&g.type==="element"&&g.tagName==="p"?v=g:(v={type:"element",tagName:"p",properties:{},children:[]},u.unshift(v)),v.children.length>0&&v.children.unshift({type:"text",value:" "}),v.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:i.checked,disabled:!0},children:[]}),f.className=["task-list-item"]}let p=-1;for(;++p<u.length;){const g=u[p];(c||p!==0||g.type!=="element"||g.tagName!=="p")&&h.push({type:"text",value:`
`}),g.type==="element"&&g.tagName==="p"&&!c?h.push(...g.children):h.push(g)}const y=u[u.length-1];y&&(c||y.type!=="element"||y.tagName!=="p")&&h.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:f,children:h};return l.patch(i,m),l.applyData(i,m)}function sw(l){let i=!1;if(l.type==="list"){i=l.spread||!1;const r=l.children;let u=-1;for(;!i&&++u<r.length;)i=Ay(r[u])}return i}function Ay(l){const i=l.spread;return i??l.children.length>1}function cw(l,i){const r={},u=l.all(i);let c=-1;for(typeof i.start=="number"&&i.start!==1&&(r.start=i.start);++c<u.length;){const h=u[c];if(h.type==="element"&&h.tagName==="li"&&h.properties&&Array.isArray(h.properties.className)&&h.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const f={type:"element",tagName:i.ordered?"ol":"ul",properties:r,children:l.wrap(u,!0)};return l.patch(i,f),l.applyData(i,f)}function fw(l,i){const r={type:"element",tagName:"p",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function hw(l,i){const r={type:"root",children:l.wrap(l.all(i))};return l.patch(i,r),l.applyData(i,r)}function dw(l,i){const r={type:"element",tagName:"strong",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function mw(l,i){const r=l.all(i),u=r.shift(),c=[];if(u){const h={type:"element",tagName:"thead",properties:{},children:l.wrap([u],!0)};l.patch(i.children[0],h),c.push(h)}if(r.length>0){const h={type:"element",tagName:"tbody",properties:{},children:l.wrap(r,!0)},p=Tc(i.children[1]),y=uy(i.children[i.children.length-1]);p&&y&&(h.position={start:p,end:y}),c.push(h)}const f={type:"element",tagName:"table",properties:{},children:l.wrap(c,!0)};return l.patch(i,f),l.applyData(i,f)}function pw(l,i,r){const u=r?r.children:void 0,f=(u?u.indexOf(i):1)===0?"th":"td",h=r&&r.type==="table"?r.align:void 0,p=h?h.length:i.children.length;let y=-1;const m=[];for(;++y<p;){const v=i.children[y],w={},S=h?h[y]:void 0;S&&(w.align=S);let U={type:"element",tagName:f,properties:w,children:[]};v&&(U.children=l.all(v),l.patch(v,U),U=l.applyData(v,U)),m.push(U)}const g={type:"element",tagName:"tr",properties:{},children:l.wrap(m,!0)};return l.patch(i,g),l.applyData(i,g)}function yw(l,i){const r={type:"element",tagName:"td",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}const gp=9,vp=32;function gw(l){const i=String(l),r=/\r?\n|\r/g;let u=r.exec(i),c=0;const f=[];for(;u;)f.push(bp(i.slice(c,u.index),c>0,!0),u[0]),c=u.index+u[0].length,u=r.exec(i);return f.push(bp(i.slice(c),c>0,!1)),f.join("")}function bp(l,i,r){let u=0,c=l.length;if(i){let f=l.codePointAt(u);for(;f===gp||f===vp;)u++,f=l.codePointAt(u)}if(r){let f=l.codePointAt(c-1);for(;f===gp||f===vp;)c--,f=l.codePointAt(c-1)}return c>u?l.slice(u,c):""}function vw(l,i){const r={type:"text",value:gw(String(i.value))};return l.patch(i,r),l.applyData(i,r)}function bw(l,i){const r={type:"element",tagName:"hr",properties:{},children:[]};return l.patch(i,r),l.applyData(i,r)}const Sw={blockquote:Fx,break:Wx,code:Jx,delete:Px,emphasis:$x,footnoteReference:ew,heading:tw,html:nw,imageReference:lw,image:aw,inlineCode:iw,linkReference:rw,link:uw,listItem:ow,list:cw,paragraph:fw,root:hw,strong:dw,table:mw,tableCell:yw,tableRow:pw,text:vw,thematicBreak:bw,toml:eu,yaml:eu,definition:eu,footnoteDefinition:eu};function eu(){}const zy=-1,du=0,Ai=1,uu=2,Dc=3,Oc=4,Mc=5,Lc=6,Ry=7,_y=8,Sp=typeof self=="object"?self:globalThis,xw=(l,i)=>{const r=(c,f)=>(l.set(f,c),c),u=c=>{if(l.has(c))return l.get(c);const[f,h]=i[c];switch(f){case du:case zy:return r(h,c);case Ai:{const p=r([],c);for(const y of h)p.push(u(y));return p}case uu:{const p=r({},c);for(const[y,m]of h)p[u(y)]=u(m);return p}case Dc:return r(new Date(h),c);case Oc:{const{source:p,flags:y}=h;return r(new RegExp(p,y),c)}case Mc:{const p=r(new Map,c);for(const[y,m]of h)p.set(u(y),u(m));return p}case Lc:{const p=r(new Set,c);for(const y of h)p.add(u(y));return p}case Ry:{const{name:p,message:y}=h;return r(new Sp[p](y),c)}case _y:return r(BigInt(h),c);case"BigInt":return r(Object(BigInt(h)),c);case"ArrayBuffer":return r(new Uint8Array(h).buffer,h);case"DataView":{const{buffer:p}=new Uint8Array(h);return r(new DataView(p),h)}}return r(new Sp[f](h),c)};return u},xp=l=>xw(new Map,l)(0),va="",{toString:ww}={},{keys:Ew}=Object,Ti=l=>{const i=typeof l;if(i!=="object"||!l)return[du,i];const r=ww.call(l).slice(8,-1);switch(r){case"Array":return[Ai,va];case"Object":return[uu,va];case"Date":return[Dc,va];case"RegExp":return[Oc,va];case"Map":return[Mc,va];case"Set":return[Lc,va];case"DataView":return[Ai,r]}return r.includes("Array")?[Ai,r]:r.includes("Error")?[Ry,r]:[uu,r]},tu=([l,i])=>l===du&&(i==="function"||i==="symbol"),Tw=(l,i,r,u)=>{const c=(h,p)=>{const y=u.push(h)-1;return r.set(p,y),y},f=h=>{if(r.has(h))return r.get(h);let[p,y]=Ti(h);switch(p){case du:{let g=h;switch(y){case"bigint":p=_y,g=h.toString();break;case"function":case"symbol":if(l)throw new TypeError("unable to serialize "+y);g=null;break;case"undefined":return c([zy],h)}return c([p,g],h)}case Ai:{if(y){let w=h;return y==="DataView"?w=new Uint8Array(h.buffer):y==="ArrayBuffer"&&(w=new Uint8Array(h)),c([y,[...w]],h)}const g=[],v=c([p,g],h);for(const w of h)g.push(f(w));return v}case uu:{if(y)switch(y){case"BigInt":return c([y,h.toString()],h);case"Boolean":case"Number":case"String":return c([y,h.valueOf()],h)}if(i&&"toJSON"in h)return f(h.toJSON());const g=[],v=c([p,g],h);for(const w of Ew(h))(l||!tu(Ti(h[w])))&&g.push([f(w),f(h[w])]);return v}case Dc:return c([p,h.toISOString()],h);case Oc:{const{source:g,flags:v}=h;return c([p,{source:g,flags:v}],h)}case Mc:{const g=[],v=c([p,g],h);for(const[w,S]of h)(l||!(tu(Ti(w))||tu(Ti(S))))&&g.push([f(w),f(S)]);return v}case Lc:{const g=[],v=c([p,g],h);for(const w of h)(l||!tu(Ti(w)))&&g.push(f(w));return v}}const{message:m}=h;return c([p,{name:y,message:m}],h)};return f},wp=(l,{json:i,lossy:r}={})=>{const u=[];return Tw(!(i||r),!!i,new Map,u)(l),u},ou=typeof structuredClone=="function"?(l,i)=>i&&("json"in i||"lossy"in i)?xp(wp(l,i)):structuredClone(l):(l,i)=>xp(wp(l,i));function kw(l,i){const r=[{type:"text",value:"↩"}];return i>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(i)}]}),r}function Cw(l,i){return"Back to reference "+(l+1)+(i>1?"-"+i:"")}function Aw(l){const i=typeof l.options.clobberPrefix=="string"?l.options.clobberPrefix:"user-content-",r=l.options.footnoteBackContent||kw,u=l.options.footnoteBackLabel||Cw,c=l.options.footnoteLabel||"Footnotes",f=l.options.footnoteLabelTagName||"h2",h=l.options.footnoteLabelProperties||{className:["sr-only"]},p=[];let y=-1;for(;++y<l.footnoteOrder.length;){const m=l.footnoteById.get(l.footnoteOrder[y]);if(!m)continue;const g=l.all(m),v=String(m.identifier).toUpperCase(),w=Ta(v.toLowerCase());let S=0;const U=[],L=l.footnoteCounts.get(v);for(;L!==void 0&&++S<=L;){U.length>0&&U.push({type:"text",value:" "});let Q=typeof r=="string"?r:r(y,S);typeof Q=="string"&&(Q={type:"text",value:Q}),U.push({type:"element",tagName:"a",properties:{href:"#"+i+"fnref-"+w+(S>1?"-"+S:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(y,S),className:["data-footnote-backref"]},children:Array.isArray(Q)?Q:[Q]})}const H=g[g.length-1];if(H&&H.type==="element"&&H.tagName==="p"){const Q=H.children[H.children.length-1];Q&&Q.type==="text"?Q.value+=" ":H.children.push({type:"text",value:" "}),H.children.push(...U)}else g.push(...U);const O={type:"element",tagName:"li",properties:{id:i+"fn-"+w},children:l.wrap(g,!0)};l.patch(m,O),p.push(O)}if(p.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:f,properties:{...ou(h),id:"footnote-label"},children:[{type:"text",value:c}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:l.wrap(p,!0)},{type:"text",value:`
`}]}}const Dy=(function(l){if(l==null)return Dw;if(typeof l=="function")return mu(l);if(typeof l=="object")return Array.isArray(l)?zw(l):Rw(l);if(typeof l=="string")return _w(l);throw new Error("Expected function, string, or object as test")});function zw(l){const i=[];let r=-1;for(;++r<l.length;)i[r]=Dy(l[r]);return mu(u);function u(...c){let f=-1;for(;++f<i.length;)if(i[f].apply(this,c))return!0;return!1}}function Rw(l){const i=l;return mu(r);function r(u){const c=u;let f;for(f in l)if(c[f]!==i[f])return!1;return!0}}function _w(l){return mu(i);function i(r){return r&&r.type===l}}function mu(l){return i;function i(r,u,c){return!!(Ow(r)&&l.call(this,r,typeof u=="number"?u:void 0,c||void 0))}}function Dw(){return!0}function Ow(l){return l!==null&&typeof l=="object"&&"type"in l}const Oy=[],Mw=!0,Ep=!1,Lw="skip";function Nw(l,i,r,u){let c;typeof i=="function"&&typeof r!="function"?(u=r,r=i):c=i;const f=Dy(c),h=u?-1:1;p(l,void 0,[])();function p(y,m,g){const v=y&&typeof y=="object"?y:{};if(typeof v.type=="string"){const S=typeof v.tagName=="string"?v.tagName:typeof v.name=="string"?v.name:void 0;Object.defineProperty(w,"name",{value:"node ("+(y.type+(S?"<"+S+">":""))+")"})}return w;function w(){let S=Oy,U,L,H;if((!i||f(y,m,g[g.length-1]||void 0))&&(S=Uw(r(y,g)),S[0]===Ep))return S;if("children"in y&&y.children){const O=y;if(O.children&&S[0]!==Lw)for(L=(u?O.children.length:-1)+h,H=g.concat(O);L>-1&&L<O.children.length;){const Q=O.children[L];if(U=p(Q,L,H)(),U[0]===Ep)return U;L=typeof U[1]=="number"?U[1]:L+h}}return S}}}function Uw(l){return Array.isArray(l)?l:typeof l=="number"?[Mw,l]:l==null?Oy:[l]}function My(l,i,r,u){let c,f,h;typeof i=="function"&&typeof r!="function"?(f=void 0,h=i,c=r):(f=i,h=r,c=u),Nw(l,f,p,c);function p(y,m){const g=m[m.length-1],v=g?g.children.indexOf(y):void 0;return h(y,v,g)}}const cc={}.hasOwnProperty,Hw={};function Bw(l,i){const r=i||Hw,u=new Map,c=new Map,f=new Map,h={...Sw,...r.handlers},p={all:m,applyData:qw,definitionById:u,footnoteById:c,footnoteCounts:f,footnoteOrder:[],handlers:h,one:y,options:r,patch:jw,wrap:Gw};return My(l,function(g){if(g.type==="definition"||g.type==="footnoteDefinition"){const v=g.type==="definition"?u:c,w=String(g.identifier).toUpperCase();v.has(w)||v.set(w,g)}}),p;function y(g,v){const w=g.type,S=p.handlers[w];if(cc.call(p.handlers,w)&&S)return S(p,g,v);if(p.options.passThrough&&p.options.passThrough.includes(w)){if("children"in g){const{children:L,...H}=g,O=ou(H);return O.children=p.all(g),O}return ou(g)}return(p.options.unknownHandler||Yw)(p,g,v)}function m(g){const v=[];if("children"in g){const w=g.children;let S=-1;for(;++S<w.length;){const U=p.one(w[S],g);if(U){if(S&&w[S-1].type==="break"&&(!Array.isArray(U)&&U.type==="text"&&(U.value=Tp(U.value)),!Array.isArray(U)&&U.type==="element")){const L=U.children[0];L&&L.type==="text"&&(L.value=Tp(L.value))}Array.isArray(U)?v.push(...U):v.push(U)}}}return v}}function jw(l,i){l.position&&(i.position=w0(l))}function qw(l,i){let r=i;if(l&&l.data){const u=l.data.hName,c=l.data.hChildren,f=l.data.hProperties;if(typeof u=="string")if(r.type==="element")r.tagName=u;else{const h="children"in r?r.children:[r];r={type:"element",tagName:u,properties:{},children:h}}r.type==="element"&&f&&Object.assign(r.properties,ou(f)),"children"in r&&r.children&&c!==null&&c!==void 0&&(r.children=c)}return r}function Yw(l,i){const r=i.data||{},u="value"in i&&!(cc.call(r,"hProperties")||cc.call(r,"hChildren"))?{type:"text",value:i.value}:{type:"element",tagName:"div",properties:{},children:l.all(i)};return l.patch(i,u),l.applyData(i,u)}function Gw(l,i){const r=[];let u=-1;for(i&&r.push({type:"text",value:`
`});++u<l.length;)u&&r.push({type:"text",value:`
`}),r.push(l[u]);return i&&l.length>0&&r.push({type:"text",value:`
`}),r}function Tp(l){let i=0,r=l.charCodeAt(i);for(;r===9||r===32;)i++,r=l.charCodeAt(i);return l.slice(i)}function kp(l,i){const r=Bw(l,i),u=r.one(l,void 0),c=Aw(r),f=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return c&&f.children.push({type:"text",value:`
`},c),f}function Iw(l,i){return l&&"run"in l?async function(r,u){const c=kp(r,{file:u,...i});await l.run(c,u)}:function(r,u){return kp(r,{file:u,...l||i})}}function Cp(l){if(l)throw l}var Xs,Ap;function Vw(){if(Ap)return Xs;Ap=1;var l=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c=function(m){return typeof Array.isArray=="function"?Array.isArray(m):i.call(m)==="[object Array]"},f=function(m){if(!m||i.call(m)!=="[object Object]")return!1;var g=l.call(m,"constructor"),v=m.constructor&&m.constructor.prototype&&l.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!g&&!v)return!1;var w;for(w in m);return typeof w>"u"||l.call(m,w)},h=function(m,g){r&&g.name==="__proto__"?r(m,g.name,{enumerable:!0,configurable:!0,value:g.newValue,writable:!0}):m[g.name]=g.newValue},p=function(m,g){if(g==="__proto__")if(l.call(m,g)){if(u)return u(m,g).value}else return;return m[g]};return Xs=function y(){var m,g,v,w,S,U,L=arguments[0],H=1,O=arguments.length,Q=!1;for(typeof L=="boolean"&&(Q=L,L=arguments[1]||{},H=2),(L==null||typeof L!="object"&&typeof L!="function")&&(L={});H<O;++H)if(m=arguments[H],m!=null)for(g in m)v=p(L,g),w=p(m,g),L!==w&&(Q&&w&&(f(w)||(S=c(w)))?(S?(S=!1,U=v&&c(v)?v:[]):U=v&&f(v)?v:{},h(L,{name:g,newValue:y(Q,U,w)})):typeof w<"u"&&h(L,{name:g,newValue:w}));return L},Xs}var Qw=Vw();const Zs=su(Qw);function fc(l){if(typeof l!="object"||l===null)return!1;const i=Object.getPrototypeOf(l);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in l)&&!(Symbol.iterator in l)}function Xw(){const l=[],i={run:r,use:u};return i;function r(...c){let f=-1;const h=c.pop();if(typeof h!="function")throw new TypeError("Expected function as last argument, not "+h);p(null,...c);function p(y,...m){const g=l[++f];let v=-1;if(y){h(y);return}for(;++v<c.length;)(m[v]===null||m[v]===void 0)&&(m[v]=c[v]);c=m,g?Zw(g,p)(...m):h(null,...m)}}function u(c){if(typeof c!="function")throw new TypeError("Expected `middelware` to be a function, not "+c);return l.push(c),i}}function Zw(l,i){let r;return u;function u(...h){const p=l.length>h.length;let y;p&&h.push(c);try{y=l.apply(this,h)}catch(m){const g=m;if(p&&r)throw g;return c(g)}p||(y&&y.then&&typeof y.then=="function"?y.then(f,c):y instanceof Error?c(y):f(y))}function c(h,...p){r||(r=!0,i(h,...p))}function f(h){c(null,h)}}const sn={basename:Kw,dirname:Fw,extname:Ww,join:Jw,sep:"/"};function Kw(l,i){if(i!==void 0&&typeof i!="string")throw new TypeError('"ext" argument must be a string');Mi(l);let r=0,u=-1,c=l.length,f;if(i===void 0||i.length===0||i.length>l.length){for(;c--;)if(l.codePointAt(c)===47){if(f){r=c+1;break}}else u<0&&(f=!0,u=c+1);return u<0?"":l.slice(r,u)}if(i===l)return"";let h=-1,p=i.length-1;for(;c--;)if(l.codePointAt(c)===47){if(f){r=c+1;break}}else h<0&&(f=!0,h=c+1),p>-1&&(l.codePointAt(c)===i.codePointAt(p--)?p<0&&(u=c):(p=-1,u=h));return r===u?u=h:u<0&&(u=l.length),l.slice(r,u)}function Fw(l){if(Mi(l),l.length===0)return".";let i=-1,r=l.length,u;for(;--r;)if(l.codePointAt(r)===47){if(u){i=r;break}}else u||(u=!0);return i<0?l.codePointAt(0)===47?"/":".":i===1&&l.codePointAt(0)===47?"//":l.slice(0,i)}function Ww(l){Mi(l);let i=l.length,r=-1,u=0,c=-1,f=0,h;for(;i--;){const p=l.codePointAt(i);if(p===47){if(h){u=i+1;break}continue}r<0&&(h=!0,r=i+1),p===46?c<0?c=i:f!==1&&(f=1):c>-1&&(f=-1)}return c<0||r<0||f===0||f===1&&c===r-1&&c===u+1?"":l.slice(c,r)}function Jw(...l){let i=-1,r;for(;++i<l.length;)Mi(l[i]),l[i]&&(r=r===void 0?l[i]:r+"/"+l[i]);return r===void 0?".":Pw(r)}function Pw(l){Mi(l);const i=l.codePointAt(0)===47;let r=$w(l,!i);return r.length===0&&!i&&(r="."),r.length>0&&l.codePointAt(l.length-1)===47&&(r+="/"),i?"/"+r:r}function $w(l,i){let r="",u=0,c=-1,f=0,h=-1,p,y;for(;++h<=l.length;){if(h<l.length)p=l.codePointAt(h);else{if(p===47)break;p=47}if(p===47){if(!(c===h-1||f===1))if(c!==h-1&&f===2){if(r.length<2||u!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(y=r.lastIndexOf("/"),y!==r.length-1){y<0?(r="",u=0):(r=r.slice(0,y),u=r.length-1-r.lastIndexOf("/")),c=h,f=0;continue}}else if(r.length>0){r="",u=0,c=h,f=0;continue}}i&&(r=r.length>0?r+"/..":"..",u=2)}else r.length>0?r+="/"+l.slice(c+1,h):r=l.slice(c+1,h),u=h-c-1;c=h,f=0}else p===46&&f>-1?f++:f=-1}return r}function Mi(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}const eE={cwd:tE};function tE(){return"/"}function hc(l){return!!(l!==null&&typeof l=="object"&&"href"in l&&l.href&&"protocol"in l&&l.protocol&&l.auth===void 0)}function nE(l){if(typeof l=="string")l=new URL(l);else if(!hc(l)){const i=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+l+"`");throw i.code="ERR_INVALID_ARG_TYPE",i}if(l.protocol!=="file:"){const i=new TypeError("The URL must be of scheme file");throw i.code="ERR_INVALID_URL_SCHEME",i}return lE(l)}function lE(l){if(l.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const i=l.pathname;let r=-1;for(;++r<i.length;)if(i.codePointAt(r)===37&&i.codePointAt(r+1)===50){const u=i.codePointAt(r+2);if(u===70||u===102){const c=new TypeError("File URL path must not include encoded / characters");throw c.code="ERR_INVALID_FILE_URL_PATH",c}}return decodeURIComponent(i)}const Ks=["history","path","basename","stem","extname","dirname"];class Ly{constructor(i){let r;i?hc(i)?r={path:i}:typeof i=="string"||aE(i)?r={value:i}:r=i:r={},this.cwd="cwd"in r?"":eE.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Ks.length;){const f=Ks[u];f in r&&r[f]!==void 0&&r[f]!==null&&(this[f]=f==="history"?[...r[f]]:r[f])}let c;for(c in r)Ks.includes(c)||(this[c]=r[c])}get basename(){return typeof this.path=="string"?sn.basename(this.path):void 0}set basename(i){Ws(i,"basename"),Fs(i,"basename"),this.path=sn.join(this.dirname||"",i)}get dirname(){return typeof this.path=="string"?sn.dirname(this.path):void 0}set dirname(i){zp(this.basename,"dirname"),this.path=sn.join(i||"",this.basename)}get extname(){return typeof this.path=="string"?sn.extname(this.path):void 0}set extname(i){if(Fs(i,"extname"),zp(this.dirname,"extname"),i){if(i.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(i.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=sn.join(this.dirname,this.stem+(i||""))}get path(){return this.history[this.history.length-1]}set path(i){hc(i)&&(i=nE(i)),Ws(i,"path"),this.path!==i&&this.history.push(i)}get stem(){return typeof this.path=="string"?sn.basename(this.path,this.extname):void 0}set stem(i){Ws(i,"stem"),Fs(i,"stem"),this.path=sn.join(this.dirname||"",i+(this.extname||""))}fail(i,r,u){const c=this.message(i,r,u);throw c.fatal=!0,c}info(i,r,u){const c=this.message(i,r,u);return c.fatal=void 0,c}message(i,r,u){const c=new mt(i,r,u);return this.path&&(c.name=this.path+":"+c.name,c.file=this.path),c.fatal=!1,this.messages.push(c),c}toString(i){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(i||void 0).decode(this.value)}}function Fs(l,i){if(l&&l.includes(sn.sep))throw new Error("`"+i+"` cannot be a path: did not expect `"+sn.sep+"`")}function Ws(l,i){if(!l)throw new Error("`"+i+"` cannot be empty")}function zp(l,i){if(!l)throw new Error("Setting `"+i+"` requires `path` to be set too")}function aE(l){return!!(l&&typeof l=="object"&&"byteLength"in l&&"byteOffset"in l)}const iE=(function(l){const u=this.constructor.prototype,c=u[l],f=function(){return c.apply(f,arguments)};return Object.setPrototypeOf(f,u),f}),rE={}.hasOwnProperty;class Nc extends iE{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Xw()}copy(){const i=new Nc;let r=-1;for(;++r<this.attachers.length;){const u=this.attachers[r];i.use(...u)}return i.data(Zs(!0,{},this.namespace)),i}data(i,r){return typeof i=="string"?arguments.length===2?($s("data",this.frozen),this.namespace[i]=r,this):rE.call(this.namespace,i)&&this.namespace[i]||void 0:i?($s("data",this.frozen),this.namespace=i,this):this.namespace}freeze(){if(this.frozen)return this;const i=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const c=r.call(i,...u);typeof c=="function"&&this.transformers.use(c)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(i){this.freeze();const r=nu(i),u=this.parser||this.Parser;return Js("parse",u),u(String(r),r)}process(i,r){const u=this;return this.freeze(),Js("process",this.parser||this.Parser),Ps("process",this.compiler||this.Compiler),r?c(void 0,r):new Promise(c);function c(f,h){const p=nu(i),y=u.parse(p);u.run(y,p,function(g,v,w){if(g||!v||!w)return m(g);const S=v,U=u.stringify(S,w);sE(U)?w.value=U:w.result=U,m(g,w)});function m(g,v){g||!v?h(g):f?f(v):r(void 0,v)}}}processSync(i){let r=!1,u;return this.freeze(),Js("processSync",this.parser||this.Parser),Ps("processSync",this.compiler||this.Compiler),this.process(i,c),_p("processSync","process",r),u;function c(f,h){r=!0,Cp(f),u=h}}run(i,r,u){Rp(i),this.freeze();const c=this.transformers;return!u&&typeof r=="function"&&(u=r,r=void 0),u?f(void 0,u):new Promise(f);function f(h,p){const y=nu(r);c.run(i,y,m);function m(g,v,w){const S=v||i;g?p(g):h?h(S):u(void 0,S,w)}}}runSync(i,r){let u=!1,c;return this.run(i,r,f),_p("runSync","run",u),c;function f(h,p){Cp(h),c=p,u=!0}}stringify(i,r){this.freeze();const u=nu(r),c=this.compiler||this.Compiler;return Ps("stringify",c),Rp(i),c(i,u)}use(i,...r){const u=this.attachers,c=this.namespace;if($s("use",this.frozen),i!=null)if(typeof i=="function")y(i,r);else if(typeof i=="object")Array.isArray(i)?p(i):h(i);else throw new TypeError("Expected usable value, not `"+i+"`");return this;function f(m){if(typeof m=="function")y(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[g,...v]=m;y(g,v)}else h(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function h(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");p(m.plugins),m.settings&&(c.settings=Zs(!0,c.settings,m.settings))}function p(m){let g=-1;if(m!=null)if(Array.isArray(m))for(;++g<m.length;){const v=m[g];f(v)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function y(m,g){let v=-1,w=-1;for(;++v<u.length;)if(u[v][0]===m){w=v;break}if(w===-1)u.push([m,...g]);else if(g.length>0){let[S,...U]=g;const L=u[w][1];fc(L)&&fc(S)&&(S=Zs(!0,L,S)),u[w]=[m,S,...U]}}}}const uE=new Nc().freeze();function Js(l,i){if(typeof i!="function")throw new TypeError("Cannot `"+l+"` without `parser`")}function Ps(l,i){if(typeof i!="function")throw new TypeError("Cannot `"+l+"` without `compiler`")}function $s(l,i){if(i)throw new Error("Cannot call `"+l+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Rp(l){if(!fc(l)||typeof l.type!="string")throw new TypeError("Expected node, got `"+l+"`")}function _p(l,i,r){if(!r)throw new Error("`"+l+"` finished async. Use `"+i+"` instead")}function nu(l){return oE(l)?l:new Ly(l)}function oE(l){return!!(l&&typeof l=="object"&&"message"in l&&"messages"in l)}function sE(l){return typeof l=="string"||cE(l)}function cE(l){return!!(l&&typeof l=="object"&&"byteLength"in l&&"byteOffset"in l)}const fE="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Dp=[],Op={allowDangerousHtml:!0},hE=/^(https?|ircs?|mailto|xmpp)$/i,dE=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function mE(l){const i=pE(l),r=yE(l);return gE(i.runSync(i.parse(r),r),l)}function pE(l){const i=l.rehypePlugins||Dp,r=l.remarkPlugins||Dp,u=l.remarkRehypeOptions?{...l.remarkRehypeOptions,...Op}:Op;return uE().use(Kx).use(r).use(Iw,u).use(i)}function yE(l){const i=l.children||"",r=new Ly;return typeof i=="string"&&(r.value=i),r}function gE(l,i){const r=i.allowedElements,u=i.allowElement,c=i.components,f=i.disallowedElements,h=i.skipHtml,p=i.unwrapDisallowed,y=i.urlTransform||vE;for(const g of dE)Object.hasOwn(i,g.from)&&(""+g.from+(g.to?"use `"+g.to+"` instead":"remove it")+fE+g.id,void 0);return My(l,m),A0(l,{Fragment:ut.Fragment,components:c,ignoreInvalidStyle:!0,jsx:ut.jsx,jsxs:ut.jsxs,passKeys:!0,passNode:!0});function m(g,v,w){if(g.type==="raw"&&w&&typeof v=="number")return h?w.children.splice(v,1):w.children[v]={type:"text",value:g.value},v;if(g.type==="element"){let S;for(S in Is)if(Object.hasOwn(Is,S)&&Object.hasOwn(g.properties,S)){const U=g.properties[S],L=Is[S];(L===null||L.includes(g.tagName))&&(g.properties[S]=y(String(U||""),S,g))}}if(g.type==="element"){let S=r?!r.includes(g.tagName):f?f.includes(g.tagName):!1;if(!S&&u&&typeof v=="number"&&(S=!u(g,v,w)),S&&w&&typeof v=="number")return p&&g.children?w.children.splice(v,1,...g.children):w.children.splice(v,1),v}}}function vE(l){const i=l.indexOf(":"),r=l.indexOf("?"),u=l.indexOf("#"),c=l.indexOf("/");return i===-1||c!==-1&&i>c||r!==-1&&i>r||u!==-1&&i>u||hE.test(l.slice(0,i))?l:""}function bE(){const{slug:l}=Ib(),i=xc.find(r=>r.slug===l);return i?ut.jsx("div",{className:"markdown",children:ut.jsx(mE,{children:i.content})}):ut.jsx("div",{children:"Document not found"})}function SE(){return ut.jsx(R1,{children:ut.jsxs("div",{style:{display:"flex",minHeight:"100vh"},children:[ut.jsx(P1,{}),ut.jsxs(i1,{children:[ut.jsx(tc,{path:"/",element:ut.jsx(l1,{to:`/docs/${xc[0].slug}`})}),ut.jsx(tc,{path:"/docs/:slug",element:ut.jsx(bE,{})})]})]})})}rb.createRoot(document.getElementById("root")).render(ut.jsx(Pv.StrictMode,{children:ut.jsx(SE,{})}));
