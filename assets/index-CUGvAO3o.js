(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();function uo(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Mu={exports:{}},vl={};var _p;function Pv(){if(_p)return vl;_p=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(o,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:a,type:o,key:d,ref:c!==void 0?c:null,props:f}}return vl.Fragment=l,vl.jsx=r,vl.jsxs=r,vl}var Lp;function Kv(){return Lp||(Lp=1,Mu.exports=Pv()),Mu.exports}var sn=Kv(),Ou={exports:{}},pe={};var Np;function Zv(){if(Np)return pe;Np=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function S(T){return T===null||typeof T!="object"?null:(T=x&&T[x]||T["@@iterator"],typeof T=="function"?T:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,H={};function O(T,I,w){this.props=T,this.context=I,this.refs=H,this.updater=w||U}O.prototype.isReactComponent={},O.prototype.setState=function(T,I){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,I,"setState")},O.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function V(){}V.prototype=O.prototype;function F(T,I,w){this.props=T,this.context=I,this.refs=H,this.updater=w||U}var re=F.prototype=new V;re.constructor=F,L(re,O.prototype),re.isPureReactComponent=!0;var oe=Array.isArray;function B(){}var K={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function fe(T,I,w){var Z=w.ref;return{$$typeof:a,type:T,key:I,ref:Z!==void 0?Z:null,props:w}}function ge(T,I){return fe(T.type,I,T.props)}function ee(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function J(T){var I={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(w){return I[w]})}var Ae=/\/+/g;function ae(T,I){return typeof T=="object"&&T!==null&&T.key!=null?J(""+T.key):I.toString(36)}function W(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(B,B):(T.status="pending",T.then(function(I){T.status==="pending"&&(T.status="fulfilled",T.value=I)},function(I){T.status==="pending"&&(T.status="rejected",T.reason=I)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function M(T,I,w,Z,ue){var ie=typeof T;(ie==="undefined"||ie==="boolean")&&(T=null);var Ce=!1;if(T===null)Ce=!0;else switch(ie){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(T.$$typeof){case a:case l:Ce=!0;break;case y:return Ce=T._init,M(Ce(T._payload),I,w,Z,ue)}}if(Ce)return ue=ue(T),Ce=Z===""?"."+ae(T,0):Z,oe(ue)?(w="",Ce!=null&&(w=Ce.replace(Ae,"$&/")+"/"),M(ue,I,w,"",function(Yn){return Yn})):ue!=null&&(ee(ue)&&(ue=ge(ue,w+(ue.key==null||T&&T.key===ue.key?"":(""+ue.key).replace(Ae,"$&/")+"/")+Ce)),I.push(ue)),1;Ce=0;var Ve=Z===""?".":Z+":";if(oe(T))for(var Ne=0;Ne<T.length;Ne++)Z=T[Ne],ie=Ve+ae(Z,Ne),Ce+=M(Z,I,w,ie,ue);else if(Ne=S(T),typeof Ne=="function")for(T=Ne.call(T),Ne=0;!(Z=T.next()).done;)Z=Z.value,ie=Ve+ae(Z,Ne++),Ce+=M(Z,I,w,ie,ue);else if(ie==="object"){if(typeof T.then=="function")return M(W(T),I,w,Z,ue);throw I=String(T),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function X(T,I,w){if(T==null)return T;var Z=[],ue=0;return M(T,Z,"","",function(ie){return I.call(w,ie,ue++)}),Z}function te(T){if(T._status===-1){var I=T._result;I=I(),I.then(function(w){(T._status===0||T._status===-1)&&(T._status=1,T._result=w)},function(w){(T._status===0||T._status===-1)&&(T._status=2,T._result=w)}),T._status===-1&&(T._status=0,T._result=I)}if(T._status===1)return T._result.default;throw T._result}var be=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},C={map:X,forEach:function(T,I,w){X(T,function(){I.apply(this,arguments)},w)},count:function(T){var I=0;return X(T,function(){I++}),I},toArray:function(T){return X(T,function(I){return I})||[]},only:function(T){if(!ee(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return pe.Activity=v,pe.Children=C,pe.Component=O,pe.Fragment=r,pe.Profiler=c,pe.PureComponent=F,pe.StrictMode=o,pe.Suspense=g,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,pe.__COMPILER_RUNTIME={__proto__:null,c:function(T){return K.H.useMemoCache(T)}},pe.cache=function(T){return function(){return T.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(T,I,w){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var Z=L({},T.props),ue=T.key;if(I!=null)for(ie in I.key!==void 0&&(ue=""+I.key),I)!ce.call(I,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&I.ref===void 0||(Z[ie]=I[ie]);var ie=arguments.length-2;if(ie===1)Z.children=w;else if(1<ie){for(var Ce=Array(ie),Ve=0;Ve<ie;Ve++)Ce[Ve]=arguments[Ve+2];Z.children=Ce}return fe(T.type,ue,Z)},pe.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},pe.createElement=function(T,I,w){var Z,ue={},ie=null;if(I!=null)for(Z in I.key!==void 0&&(ie=""+I.key),I)ce.call(I,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ue[Z]=I[Z]);var Ce=arguments.length-2;if(Ce===1)ue.children=w;else if(1<Ce){for(var Ve=Array(Ce),Ne=0;Ne<Ce;Ne++)Ve[Ne]=arguments[Ne+2];ue.children=Ve}if(T&&T.defaultProps)for(Z in Ce=T.defaultProps,Ce)ue[Z]===void 0&&(ue[Z]=Ce[Z]);return fe(T,ie,ue)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(T){return{$$typeof:m,render:T}},pe.isValidElement=ee,pe.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:te}},pe.memo=function(T,I){return{$$typeof:p,type:T,compare:I===void 0?null:I}},pe.startTransition=function(T){var I=K.T,w={};K.T=w;try{var Z=T(),ue=K.S;ue!==null&&ue(w,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(B,be)}catch(ie){be(ie)}finally{I!==null&&w.types!==null&&(I.types=w.types),K.T=I}},pe.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},pe.use=function(T){return K.H.use(T)},pe.useActionState=function(T,I,w){return K.H.useActionState(T,I,w)},pe.useCallback=function(T,I){return K.H.useCallback(T,I)},pe.useContext=function(T){return K.H.useContext(T)},pe.useDebugValue=function(){},pe.useDeferredValue=function(T,I){return K.H.useDeferredValue(T,I)},pe.useEffect=function(T,I){return K.H.useEffect(T,I)},pe.useEffectEvent=function(T){return K.H.useEffectEvent(T)},pe.useId=function(){return K.H.useId()},pe.useImperativeHandle=function(T,I,w){return K.H.useImperativeHandle(T,I,w)},pe.useInsertionEffect=function(T,I){return K.H.useInsertionEffect(T,I)},pe.useLayoutEffect=function(T,I){return K.H.useLayoutEffect(T,I)},pe.useMemo=function(T,I){return K.H.useMemo(T,I)},pe.useOptimistic=function(T,I){return K.H.useOptimistic(T,I)},pe.useReducer=function(T,I,w){return K.H.useReducer(T,I,w)},pe.useRef=function(T){return K.H.useRef(T)},pe.useState=function(T){return K.H.useState(T)},pe.useSyncExternalStore=function(T,I,w){return K.H.useSyncExternalStore(T,I,w)},pe.useTransition=function(){return K.H.useTransition()},pe.version="19.2.3",pe}var Up;function hc(){return Up||(Up=1,Ou.exports=Zv()),Ou.exports}var q=hc();const Jv=uo(q);var _u={exports:{}},bl={},Lu={exports:{}},Nu={};var Hp;function $v(){return Hp||(Hp=1,(function(a){function l(M,X){var te=M.length;M.push(X);e:for(;0<te;){var be=te-1>>>1,C=M[be];if(0<c(C,X))M[be]=X,M[te]=C,te=be;else break e}}function r(M){return M.length===0?null:M[0]}function o(M){if(M.length===0)return null;var X=M[0],te=M.pop();if(te!==X){M[0]=te;e:for(var be=0,C=M.length,T=C>>>1;be<T;){var I=2*(be+1)-1,w=M[I],Z=I+1,ue=M[Z];if(0>c(w,te))Z<C&&0>c(ue,w)?(M[be]=ue,M[Z]=te,be=Z):(M[be]=w,M[I]=te,be=I);else if(Z<C&&0>c(ue,te))M[be]=ue,M[Z]=te,be=Z;else break e}}return X}function c(M,X){var te=M.sortIndex-X.sortIndex;return te!==0?te:M.id-X.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();a.unstable_now=function(){return d.now()-m}}var g=[],p=[],y=1,v=null,x=3,S=!1,U=!1,L=!1,H=!1,O=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function re(M){for(var X=r(p);X!==null;){if(X.callback===null)o(p);else if(X.startTime<=M)o(p),X.sortIndex=X.expirationTime,l(g,X);else break;X=r(p)}}function oe(M){if(L=!1,re(M),!U)if(r(g)!==null)U=!0,B||(B=!0,J());else{var X=r(p);X!==null&&W(oe,X.startTime-M)}}var B=!1,K=-1,ce=5,fe=-1;function ge(){return H?!0:!(a.unstable_now()-fe<ce)}function ee(){if(H=!1,B){var M=a.unstable_now();fe=M;var X=!0;try{e:{U=!1,L&&(L=!1,V(K),K=-1),S=!0;var te=x;try{n:{for(re(M),v=r(g);v!==null&&!(v.expirationTime>M&&ge());){var be=v.callback;if(typeof be=="function"){v.callback=null,x=v.priorityLevel;var C=be(v.expirationTime<=M);if(M=a.unstable_now(),typeof C=="function"){v.callback=C,re(M),X=!0;break n}v===r(g)&&o(g),re(M)}else o(g);v=r(g)}if(v!==null)X=!0;else{var T=r(p);T!==null&&W(oe,T.startTime-M),X=!1}}break e}finally{v=null,x=te,S=!1}X=void 0}}finally{X?J():B=!1}}}var J;if(typeof F=="function")J=function(){F(ee)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,ae=Ae.port2;Ae.port1.onmessage=ee,J=function(){ae.postMessage(null)}}else J=function(){O(ee,0)};function W(M,X){K=O(function(){M(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(M){M.callback=null},a.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<M?Math.floor(1e3/M):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(M){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var te=x;x=X;try{return M()}finally{x=te}},a.unstable_requestPaint=function(){H=!0},a.unstable_runWithPriority=function(M,X){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var te=x;x=M;try{return X()}finally{x=te}},a.unstable_scheduleCallback=function(M,X,te){var be=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?be+te:be):te=be,M){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=te+C,M={id:y++,callback:X,priorityLevel:M,startTime:te,expirationTime:C,sortIndex:-1},te>be?(M.sortIndex=te,l(p,M),r(g)===null&&M===r(p)&&(L?(V(K),K=-1):L=!0,W(oe,te-be))):(M.sortIndex=C,l(g,M),U||S||(U=!0,B||(B=!0,J()))),M},a.unstable_shouldYield=ge,a.unstable_wrapCallback=function(M){var X=x;return function(){var te=x;x=X;try{return M.apply(this,arguments)}finally{x=te}}}})(Nu)),Nu}var Bp;function eb(){return Bp||(Bp=1,Lu.exports=$v()),Lu.exports}var Uu={exports:{}},pn={};var Ip;function nb(){if(Ip)return pn;Ip=1;var a=hc();function l(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(l(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,p,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:g,containerInfo:p,implementation:y}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,pn.createPortal=function(g,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(l(299));return f(g,p,null,y)},pn.flushSync=function(g){var p=d.T,y=o.p;try{if(d.T=null,o.p=2,g)return g()}finally{d.T=p,o.p=y,o.d.f()}},pn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(g,p))},pn.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},pn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var y=p.as,v=m(y,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?o.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):y==="script"&&o.d.X(g,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},pn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=m(p.as,p.crossOrigin);o.d.M(g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(g)},pn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,v=m(y,p.crossOrigin);o.d.L(g,y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},pn.preloadModule=function(g,p){if(typeof g=="string")if(p){var y=m(p.as,p.crossOrigin);o.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(g)},pn.requestFormReset=function(g){o.d.r(g)},pn.unstable_batchedUpdates=function(g,p){return g(p)},pn.useFormState=function(g,p,y){return d.H.useFormState(g,p,y)},pn.useFormStatus=function(){return d.H.useHostTransitionStatus()},pn.version="19.2.3",pn}var jp;function tb(){if(jp)return Uu.exports;jp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Uu.exports=nb(),Uu.exports}var qp;function ab(){if(qp)return bl;qp=1;var a=eb(),l=hc(),r=tb();function o(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function p(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(o(188));return n!==e?null:e}for(var t=e,i=n;;){var s=t.return;if(s===null)break;var u=s.alternate;if(u===null){if(i=s.return,i!==null){t=i;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===t)return g(s),e;if(u===i)return g(s),n;u=u.sibling}throw Error(o(188))}if(t.return!==i.return)t=s,i=u;else{for(var h=!1,b=s.child;b;){if(b===t){h=!0,t=s,i=u;break}if(b===i){h=!0,i=s,t=u;break}b=b.sibling}if(!h){for(b=u.child;b;){if(b===t){h=!0,t=u,i=s;break}if(b===i){h=!0,i=u,t=s;break}b=b.sibling}if(!h)throw Error(o(189))}}if(t.alternate!==i)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),F=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case O:return"Profiler";case H:return"StrictMode";case oe:return"Suspense";case B:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case F:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case re:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case ce:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}var W=Array.isArray,M=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},be=[],C=-1;function T(e){return{current:e}}function I(e){0>C||(e.current=be[C],be[C]=null,C--)}function w(e,n){C++,be[C]=e.current,e.current=n}var Z=T(null),ue=T(null),ie=T(null),Ce=T(null);function Ve(e,n){switch(w(ie,n),w(ue,e),w(Z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?tp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=tp(n),e=ap(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(Z),w(Z,e)}function Ne(){I(Z),I(ue),I(ie)}function Yn(e){e.memoizedState!==null&&w(Ce,e);var n=Z.current,t=ap(n,e.type);n!==t&&(w(ue,e),w(Z,t))}function dt(e){ue.current===e&&(I(Z),I(ue)),Ce.current===e&&(I(Ce),pl._currentValue=te)}var Ti,Ll;function ht(e){if(Ti===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ti=n&&n[1]||"",Ll=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ti+e+Ll}var Ra=!1;function za(e,n){if(!e||Ra)return"";Ra=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(_){var z=_}Reflect.construct(e,[],G)}else{try{G.call()}catch(_){z=_}e.call(G.prototype)}}else{try{throw Error()}catch(_){z=_}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(_){if(_&&z&&typeof _.stack=="string")return[_.stack,z.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),h=u[0],b=u[1];if(h&&b){var k=h.split(`
`),R=b.split(`
`);for(s=i=0;i<k.length&&!k[i].includes("DetermineComponentFrameRoot");)i++;for(;s<R.length&&!R[s].includes("DetermineComponentFrameRoot");)s++;if(i===k.length||s===R.length)for(i=k.length-1,s=R.length-1;1<=i&&0<=s&&k[i]!==R[s];)s--;for(;1<=i&&0<=s;i--,s--)if(k[i]!==R[s]){if(i!==1||s!==1)do if(i--,s--,0>s||k[i]!==R[s]){var N=`
`+k[i].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=i&&0<=s);break}}}finally{Ra=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?ht(t):""}function Nl(e,n){switch(e.tag){case 26:case 27:case 5:return ht(e.type);case 16:return ht("Lazy");case 13:return e.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return za(e.type,!1);case 11:return za(e.type.render,!1);case 1:return za(e.type,!0);case 31:return ht("Activity");default:return""}}function Ul(e){try{var n="",t=null;do n+=Nl(e,t),t=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ma=Object.prototype.hasOwnProperty,Oa=a.unstable_scheduleCallback,Ei=a.unstable_cancelCallback,go=a.unstable_shouldYield,yo=a.unstable_requestPaint,gn=a.unstable_now,vo=a.unstable_getCurrentPriorityLevel,j=a.unstable_ImmediatePriority,P=a.unstable_UserBlockingPriority,de=a.unstable_NormalPriority,Se=a.unstable_LowPriority,Oe=a.unstable_IdlePriority,zn=a.log,pt=a.unstable_setDisableYieldValue,yn=null,an=null;function bn(e){if(typeof zn=="function"&&pt(e),an&&typeof an.setStrictMode=="function")try{an.setStrictMode(yn,e)}catch{}}var Ie=Math.clz32?Math.clz32:Ng,Nt=Math.log,et=Math.LN2;function Ng(e){return e>>>=0,e===0?32:31-(Nt(e)/et|0)|0}var Hl=256,Bl=262144,Il=4194304;function ua(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jl(e,n,t){var i=e.pendingLanes;if(i===0)return 0;var s=0,u=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~u,i!==0?s=ua(i):(h&=b,h!==0?s=ua(h):t||(t=b&~e,t!==0&&(s=ua(t))))):(b=i&~u,b!==0?s=ua(b):h!==0?s=ua(h):t||(t=i&~e,t!==0&&(s=ua(t)))),s===0?0:n!==0&&n!==s&&(n&u)===0&&(u=s&-s,t=n&-n,u>=t||u===32&&(t&4194048)!==0)?n:s}function Ai(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ug(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uc(){var e=Il;return Il<<=1,(Il&62914560)===0&&(Il=4194304),e}function bo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Di(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hg(e,n,t,i,s,u){var h=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var b=e.entanglements,k=e.expirationTimes,R=e.hiddenUpdates;for(t=h&~t;0<t;){var N=31-Ie(t),G=1<<N;b[N]=0,k[N]=-1;var z=R[N];if(z!==null)for(R[N]=null,N=0;N<z.length;N++){var _=z[N];_!==null&&(_.lane&=-536870913)}t&=~G}i!==0&&Hc(e,i,0),u!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=u&~(h&~n))}function Hc(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-Ie(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|t&261930}function Bc(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-Ie(t),s=1<<i;s&n|e[i]&n&&(e[i]|=n),t&=~s}}function Ic(e,n){var t=n&-n;return t=(t&42)!==0?1:So(t),(t&(e.suspendedLanes|n))!==0?0:t}function So(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jc(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Ep(e.type))}function qc(e,n){var t=X.p;try{return X.p=e,n()}finally{X.p=t}}var Ut=Math.random().toString(36).slice(2),un="__reactFiber$"+Ut,Sn="__reactProps$"+Ut,_a="__reactContainer$"+Ut,xo="__reactEvents$"+Ut,Bg="__reactListeners$"+Ut,Ig="__reactHandles$"+Ut,Yc="__reactResources$"+Ut,Ri="__reactMarker$"+Ut;function Co(e){delete e[un],delete e[Sn],delete e[xo],delete e[Bg],delete e[Ig]}function La(e){var n=e[un];if(n)return n;for(var t=e.parentNode;t;){if(n=t[_a]||t[un]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=cp(e);e!==null;){if(t=e[un])return t;e=cp(e)}return n}e=t,t=e.parentNode}return null}function Na(e){if(e=e[un]||e[_a]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function zi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(o(33))}function Ua(e){var n=e[Yc];return n||(n=e[Yc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[Ri]=!0}var Gc=new Set,Fc={};function ca(e,n){Ha(e,n),Ha(e+"Capture",n)}function Ha(e,n){for(Fc[e]=n,e=0;e<n.length;e++)Gc.add(n[e])}var jg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vc={},Xc={};function qg(e){return Ma.call(Xc,e)?!0:Ma.call(Vc,e)?!1:jg.test(e)?Xc[e]=!0:(Vc[e]=!0,!1)}function ql(e,n,t){if(qg(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Yl(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function mt(e,n,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+i)}}function Gn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yg(e,n,t){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,u=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(h){t=""+h,u.call(this,h)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return t},setValue:function(h){t=""+h},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ko(e){if(!e._valueTracker){var n=Qc(e)?"checked":"value";e._valueTracker=Yg(e,n,""+e[n])}}function Wc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=Qc(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Gl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gg=/[\n"\\]/g;function Fn(e){return e.replace(Gg,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function To(e,n,t,i,s,u,h,b){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),n!=null?h==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Gn(n)):e.value!==""+Gn(n)&&(e.value=""+Gn(n)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),n!=null?Eo(e,h,Gn(n)):t!=null?Eo(e,h,Gn(t)):i!=null&&e.removeAttribute("value"),s==null&&u!=null&&(e.defaultChecked=!!u),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Gn(b):e.removeAttribute("name")}function Pc(e,n,t,i,s,u,h,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||t!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){ko(e);return}t=t!=null?""+Gn(t):"",n=n!=null?""+Gn(n):t,b||n===e.value||(e.value=n),e.defaultValue=n}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),ko(e)}function Eo(e,n,t){n==="number"&&Gl(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Ba(e,n,t,i){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&i&&(e[t].defaultSelected=!0)}else{for(t=""+Gn(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function Kc(e,n,t){if(n!=null&&(n=""+Gn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Gn(t):""}function Zc(e,n,t,i){if(n==null){if(i!=null){if(t!=null)throw Error(o(92));if(W(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),n=t}t=Gn(n),e.defaultValue=t,i=e.textContent,i===t&&i!==""&&i!==null&&(e.value=i),ko(e)}function Ia(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Fg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jc(e,n,t){var i=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,t):typeof t!="number"||t===0||Fg.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function $c(e,n,t){if(n!=null&&typeof n!="object")throw Error(o(62));if(e=e.style,t!=null){for(var i in t)!t.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in n)i=n[s],n.hasOwnProperty(s)&&t[s]!==i&&Jc(e,s,i)}else for(var u in n)n.hasOwnProperty(u)&&Jc(e,u,n[u])}function Ao(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fl(e){return Xg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gt(){}var Do=null;function Ro(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ja=null,qa=null;function ef(e){var n=Na(e);if(n&&(e=n.stateNode)){var t=e[Sn]||null;e:switch(e=n.stateNode,n.type){case"input":if(To(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Fn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var s=i[Sn]||null;if(!s)throw Error(o(90));To(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(n=0;n<t.length;n++)i=t[n],i.form===e.form&&Wc(i)}break e;case"textarea":Kc(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Ba(e,!!t.multiple,n,!1)}}}var zo=!1;function nf(e,n,t){if(zo)return e(n,t);zo=!0;try{var i=e(n);return i}finally{if(zo=!1,(ja!==null||qa!==null)&&(Mr(),ja&&(n=ja,e=qa,qa=ja=null,ef(n),e)))for(n=0;n<e.length;n++)ef(e[n])}}function Mi(e,n){var t=e.stateNode;if(t===null)return null;var i=t[Sn]||null;if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(o(231,n,typeof t));return t}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mo=!1;if(yt)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){Mo=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{Mo=!1}var Ht=null,Oo=null,Vl=null;function tf(){if(Vl)return Vl;var e,n=Oo,t=n.length,i,s="value"in Ht?Ht.value:Ht.textContent,u=s.length;for(e=0;e<t&&n[e]===s[e];e++);var h=t-e;for(i=1;i<=h&&n[t-i]===s[u-i];i++);return Vl=s.slice(e,1<i?1-i:void 0)}function Xl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ql(){return!0}function af(){return!1}function wn(e){function n(t,i,s,u,h){this._reactName=t,this._targetInst=s,this.type=i,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(t=e[b],this[b]=t?t(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ql:af,this.isPropagationStopped=af,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),n}var fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=wn(fa),_i=v({},fa,{view:0,detail:0}),Qg=wn(_i),_o,Lo,Li,Pl=v({},_i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Li&&(Li&&e.type==="mousemove"?(_o=e.screenX-Li.screenX,Lo=e.screenY-Li.screenY):Lo=_o=0,Li=e),_o)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),lf=wn(Pl),Wg=v({},Pl,{dataTransfer:0}),Pg=wn(Wg),Kg=v({},_i,{relatedTarget:0}),No=wn(Kg),Zg=v({},fa,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=wn(Zg),$g=v({},fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ey=wn($g),ny=v({},fa,{data:0}),rf=wn(ny),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ly(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=iy[e])?!!n[e]:!1}function Uo(){return ly}var ry=v({},_i,{key:function(e){if(e.key){var n=ty[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ay[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uo,charCode:function(e){return e.type==="keypress"?Xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oy=wn(ry),sy=v({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=wn(sy),uy=v({},_i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uo}),cy=wn(uy),fy=v({},fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),dy=wn(fy),hy=v({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),py=wn(hy),my=v({},fa,{newState:0,oldState:0}),gy=wn(my),yy=[9,13,27,32],Ho=yt&&"CompositionEvent"in window,Ni=null;yt&&"documentMode"in document&&(Ni=document.documentMode);var vy=yt&&"TextEvent"in window&&!Ni,sf=yt&&(!Ho||Ni&&8<Ni&&11>=Ni),uf=" ",cf=!1;function ff(e,n){switch(e){case"keyup":return yy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ya=!1;function by(e,n){switch(e){case"compositionend":return df(n);case"keypress":return n.which!==32?null:(cf=!0,uf);case"textInput":return e=n.data,e===uf&&cf?null:e;default:return null}}function Sy(e,n){if(Ya)return e==="compositionend"||!Ho&&ff(e,n)?(e=tf(),Vl=Oo=Ht=null,Ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sf&&n.locale!=="ko"?null:n.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!wy[e.type]:n==="textarea"}function pf(e,n,t,i){ja?qa?qa.push(i):qa=[i]:ja=i,n=Br(n,"onChange"),0<n.length&&(t=new Wl("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var Ui=null,Hi=null;function xy(e){Kh(e,0)}function Kl(e){var n=zi(e);if(Wc(n))return e}function mf(e,n){if(e==="change")return n}var gf=!1;if(yt){var Bo;if(yt){var Io="oninput"in document;if(!Io){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),Io=typeof yf.oninput=="function"}Bo=Io}else Bo=!1;gf=Bo&&(!document.documentMode||9<document.documentMode)}function vf(){Ui&&(Ui.detachEvent("onpropertychange",bf),Hi=Ui=null)}function bf(e){if(e.propertyName==="value"&&Kl(Hi)){var n=[];pf(n,Hi,e,Ro(e)),nf(xy,n)}}function Cy(e,n,t){e==="focusin"?(vf(),Ui=n,Hi=t,Ui.attachEvent("onpropertychange",bf)):e==="focusout"&&vf()}function ky(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(Hi)}function Ty(e,n){if(e==="click")return Kl(n)}function Ey(e,n){if(e==="input"||e==="change")return Kl(n)}function Ay(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Mn=typeof Object.is=="function"?Object.is:Ay;function Bi(e,n){if(Mn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var s=t[i];if(!Ma.call(n,s)||!Mn(e[s],n[s]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wf(e,n){var t=Sf(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Sf(t)}}function xf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Gl(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Gl(e.document)}return n}function jo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Dy=yt&&"documentMode"in document&&11>=document.documentMode,Ga=null,qo=null,Ii=null,Yo=!1;function kf(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Yo||Ga==null||Ga!==Gl(i)||(i=Ga,"selectionStart"in i&&jo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ii&&Bi(Ii,i)||(Ii=i,i=Br(qo,"onSelect"),0<i.length&&(n=new Wl("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Ga)))}function da(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Fa={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},Go={},Tf={};yt&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function ha(e){if(Go[e])return Go[e];if(!Fa[e])return e;var n=Fa[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Tf)return Go[e]=n[t];return e}var Ef=ha("animationend"),Af=ha("animationiteration"),Df=ha("animationstart"),Ry=ha("transitionrun"),zy=ha("transitionstart"),My=ha("transitioncancel"),Rf=ha("transitionend"),zf=new Map,Fo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fo.push("scrollEnd");function nt(e,n){zf.set(e,n),ca(n,[e])}var Zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vn=[],Va=0,Vo=0;function Jl(){for(var e=Va,n=Vo=Va=0;n<e;){var t=Vn[n];Vn[n++]=null;var i=Vn[n];Vn[n++]=null;var s=Vn[n];Vn[n++]=null;var u=Vn[n];if(Vn[n++]=null,i!==null&&s!==null){var h=i.pending;h===null?s.next=s:(s.next=h.next,h.next=s),i.pending=s}u!==0&&Mf(t,s,u)}}function $l(e,n,t,i){Vn[Va++]=e,Vn[Va++]=n,Vn[Va++]=t,Vn[Va++]=i,Vo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Xo(e,n,t,i){return $l(e,n,t,i),er(e)}function pa(e,n){return $l(e,null,null,n),er(e)}function Mf(e,n,t){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t);for(var s=!1,u=e.return;u!==null;)u.childLanes|=t,i=u.alternate,i!==null&&(i.childLanes|=t),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(s=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,s&&n!==null&&(s=31-Ie(t),e=u.hiddenUpdates,i=e[s],i===null?e[s]=[n]:i.push(n),n.lane=t|536870912),u):null}function er(e){if(50<ol)throw ol=0,nu=null,Error(o(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xa={};function Oy(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,n,t,i){return new Oy(e,n,t,i)}function Qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vt(e,n){var t=e.alternate;return t===null?(t=On(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Of(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nr(e,n,t,i,s,u){var h=0;if(i=e,typeof e=="function")Qo(e)&&(h=1);else if(typeof e=="string")h=Hv(e,t,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=On(31,t,n,s),e.elementType=fe,e.lanes=u,e;case L:return ma(t.children,s,u,n);case H:h=8,s|=24;break;case O:return e=On(12,t,n,s|2),e.elementType=O,e.lanes=u,e;case oe:return e=On(13,t,n,s),e.elementType=oe,e.lanes=u,e;case B:return e=On(19,t,n,s),e.elementType=B,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:h=10;break e;case V:h=9;break e;case re:h=11;break e;case K:h=14;break e;case ce:h=16,i=null;break e}h=29,t=Error(o(130,e===null?"null":typeof e,"")),i=null}return n=On(h,t,n,s),n.elementType=e,n.type=i,n.lanes=u,n}function ma(e,n,t,i){return e=On(7,e,i,n),e.lanes=t,e}function Wo(e,n,t){return e=On(6,e,null,n),e.lanes=t,e}function _f(e){var n=On(18,null,null,0);return n.stateNode=e,n}function Po(e,n,t){return n=On(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Lf=new WeakMap;function Xn(e,n){if(typeof e=="object"&&e!==null){var t=Lf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Ul(n)},Lf.set(e,n),n)}return{value:e,source:n,stack:Ul(n)}}var Qa=[],Wa=0,tr=null,ji=0,Qn=[],Wn=0,Bt=null,lt=1,rt="";function bt(e,n){Qa[Wa++]=ji,Qa[Wa++]=tr,tr=e,ji=n}function Nf(e,n,t){Qn[Wn++]=lt,Qn[Wn++]=rt,Qn[Wn++]=Bt,Bt=e;var i=lt;e=rt;var s=32-Ie(i)-1;i&=~(1<<s),t+=1;var u=32-Ie(n)+s;if(30<u){var h=s-s%5;u=(i&(1<<h)-1).toString(32),i>>=h,s-=h,lt=1<<32-Ie(n)+s|t<<s|i,rt=u+e}else lt=1<<u|t<<s|i,rt=e}function Ko(e){e.return!==null&&(bt(e,1),Nf(e,1,0))}function Zo(e){for(;e===tr;)tr=Qa[--Wa],Qa[Wa]=null,ji=Qa[--Wa],Qa[Wa]=null;for(;e===Bt;)Bt=Qn[--Wn],Qn[Wn]=null,rt=Qn[--Wn],Qn[Wn]=null,lt=Qn[--Wn],Qn[Wn]=null}function Uf(e,n){Qn[Wn++]=lt,Qn[Wn++]=rt,Qn[Wn++]=Bt,lt=n.id,rt=n.overflow,Bt=e}var cn=null,Ge=null,Ee=!1,It=null,Pn=!1,Jo=Error(o(519));function jt(e){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qi(Xn(n,e)),Jo}function Hf(e){var n=e.stateNode,t=e.type,i=e.memoizedProps;switch(n[un]=e,n[Sn]=i,t){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(t=0;t<ul.length;t++)xe(ul[t],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Pc(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Zc(n,i.value,i.defaultValue,i.children)}t=i.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||i.suppressHydrationWarning===!0||ep(n.textContent,t)?(i.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),i.onScroll!=null&&xe("scroll",n),i.onScrollEnd!=null&&xe("scrollend",n),i.onClick!=null&&(n.onclick=gt),n=!0):n=!1,n||jt(e,!0)}function Bf(e){for(cn=e.return;cn;)switch(cn.tag){case 5:case 31:case 13:Pn=!1;return;case 27:case 3:Pn=!0;return;default:cn=cn.return}}function Pa(e){if(e!==cn)return!1;if(!Ee)return Bf(e),Ee=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||gu(e.type,e.memoizedProps)),t=!t),t&&Ge&&jt(e),Bf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ge=up(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ge=up(e)}else n===27?(n=Ge,ea(e.type)?(e=wu,wu=null,Ge=e):Ge=n):Ge=cn?Zn(e.stateNode.nextSibling):null;return!0}function ga(){Ge=cn=null,Ee=!1}function $o(){var e=It;return e!==null&&(Tn===null?Tn=e:Tn.push.apply(Tn,e),It=null),e}function qi(e){It===null?It=[e]:It.push(e)}var es=T(null),ya=null,St=null;function qt(e,n,t){w(es,n._currentValue),n._currentValue=t}function wt(e){e._currentValue=es.current,I(es)}function ns(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function ts(e,n,t,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){var h=s.child;u=u.firstContext;e:for(;u!==null;){var b=u;u=s;for(var k=0;k<n.length;k++)if(b.context===n[k]){u.lanes|=t,b=u.alternate,b!==null&&(b.lanes|=t),ns(u.return,t,e),i||(h=null);break e}u=b.next}}else if(s.tag===18){if(h=s.return,h===null)throw Error(o(341));h.lanes|=t,u=h.alternate,u!==null&&(u.lanes|=t),ns(h,t,e),h=null}else h=s.child;if(h!==null)h.return=s;else for(h=s;h!==null;){if(h===e){h=null;break}if(s=h.sibling,s!==null){s.return=h.return,h=s;break}h=h.return}s=h}}function Ka(e,n,t,i){e=null;for(var s=n,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var h=s.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var b=s.type;Mn(s.pendingProps.value,h.value)||(e!==null?e.push(b):e=[b])}}else if(s===Ce.current){if(h=s.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(pl):e=[pl])}s=s.return}e!==null&&ts(n,e,t,i),n.flags|=262144}function ar(e){for(e=e.firstContext;e!==null;){if(!Mn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function va(e){ya=e,St=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fn(e){return If(ya,e)}function ir(e,n){return ya===null&&va(e),If(e,n)}function If(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},St===null){if(e===null)throw Error(o(308));St=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else St=St.next=n;return t}var _y=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Ly=a.unstable_scheduleCallback,Ny=a.unstable_NormalPriority,Je={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function as(){return{controller:new _y,data:new Map,refCount:0}}function Yi(e){e.refCount--,e.refCount===0&&Ly(Ny,function(){e.controller.abort()})}var Gi=null,is=0,Za=0,Ja=null;function Uy(e,n){if(Gi===null){var t=Gi=[];is=0,Za=ou(),Ja={status:"pending",value:void 0,then:function(i){t.push(i)}}}return is++,n.then(jf,jf),n}function jf(){if(--is===0&&Gi!==null){Ja!==null&&(Ja.status="fulfilled");var e=Gi;Gi=null,Za=0,Ja=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Hy(e,n){var t=[],i={status:"pending",value:null,reason:null,then:function(s){t.push(s)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var s=0;s<t.length;s++)(0,t[s])(n)},function(s){for(i.status="rejected",i.reason=s,s=0;s<t.length;s++)(0,t[s])(void 0)}),i}var qf=M.S;M.S=function(e,n){kh=gn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Uy(e,n),qf!==null&&qf(e,n)};var ba=T(null);function ls(){var e=ba.current;return e!==null?e:je.pooledCache}function lr(e,n){n===null?w(ba,ba.current):w(ba,n.pool)}function Yf(){var e=ls();return e===null?null:{parent:Je._currentValue,pool:e}}var $a=Error(o(460)),rs=Error(o(474)),rr=Error(o(542)),or={then:function(){}};function Gf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ff(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(gt,gt),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xf(e),e;default:if(typeof n.status=="string")n.then(gt,gt);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var s=n;s.status="fulfilled",s.value=i}},function(i){if(n.status==="pending"){var s=n;s.status="rejected",s.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xf(e),e}throw wa=n,$a}}function Sa(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(wa=t,$a):t}}var wa=null;function Vf(){if(wa===null)throw Error(o(459));var e=wa;return wa=null,e}function Xf(e){if(e===$a||e===rr)throw Error(o(483))}var ei=null,Fi=0;function sr(e){var n=Fi;return Fi+=1,ei===null&&(ei=[]),Ff(ei,e,n)}function Vi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ur(e,n){throw n.$$typeof===x?Error(o(525)):(e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Qf(e){function n(A,E){if(e){var D=A.deletions;D===null?(A.deletions=[E],A.flags|=16):D.push(E)}}function t(A,E){if(!e)return null;for(;E!==null;)n(A,E),E=E.sibling;return null}function i(A){for(var E=new Map;A!==null;)A.key!==null?E.set(A.key,A):E.set(A.index,A),A=A.sibling;return E}function s(A,E){return A=vt(A,E),A.index=0,A.sibling=null,A}function u(A,E,D){return A.index=D,e?(D=A.alternate,D!==null?(D=D.index,D<E?(A.flags|=67108866,E):D):(A.flags|=67108866,E)):(A.flags|=1048576,E)}function h(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function b(A,E,D,Y){return E===null||E.tag!==6?(E=Wo(D,A.mode,Y),E.return=A,E):(E=s(E,D),E.return=A,E)}function k(A,E,D,Y){var le=D.type;return le===L?N(A,E,D.props.children,Y,D.key):E!==null&&(E.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ce&&Sa(le)===E.type)?(E=s(E,D.props),Vi(E,D),E.return=A,E):(E=nr(D.type,D.key,D.props,null,A.mode,Y),Vi(E,D),E.return=A,E)}function R(A,E,D,Y){return E===null||E.tag!==4||E.stateNode.containerInfo!==D.containerInfo||E.stateNode.implementation!==D.implementation?(E=Po(D,A.mode,Y),E.return=A,E):(E=s(E,D.children||[]),E.return=A,E)}function N(A,E,D,Y,le){return E===null||E.tag!==7?(E=ma(D,A.mode,Y,le),E.return=A,E):(E=s(E,D),E.return=A,E)}function G(A,E,D){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Wo(""+E,A.mode,D),E.return=A,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case S:return D=nr(E.type,E.key,E.props,null,A.mode,D),Vi(D,E),D.return=A,D;case U:return E=Po(E,A.mode,D),E.return=A,E;case ce:return E=Sa(E),G(A,E,D)}if(W(E)||J(E))return E=ma(E,A.mode,D,null),E.return=A,E;if(typeof E.then=="function")return G(A,sr(E),D);if(E.$$typeof===F)return G(A,ir(A,E),D);ur(A,E)}return null}function z(A,E,D,Y){var le=E!==null?E.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return le!==null?null:b(A,E,""+D,Y);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case S:return D.key===le?k(A,E,D,Y):null;case U:return D.key===le?R(A,E,D,Y):null;case ce:return D=Sa(D),z(A,E,D,Y)}if(W(D)||J(D))return le!==null?null:N(A,E,D,Y,null);if(typeof D.then=="function")return z(A,E,sr(D),Y);if(D.$$typeof===F)return z(A,E,ir(A,D),Y);ur(A,D)}return null}function _(A,E,D,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return A=A.get(D)||null,b(E,A,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:return A=A.get(Y.key===null?D:Y.key)||null,k(E,A,Y,le);case U:return A=A.get(Y.key===null?D:Y.key)||null,R(E,A,Y,le);case ce:return Y=Sa(Y),_(A,E,D,Y,le)}if(W(Y)||J(Y))return A=A.get(D)||null,N(E,A,Y,le,null);if(typeof Y.then=="function")return _(A,E,D,sr(Y),le);if(Y.$$typeof===F)return _(A,E,D,ir(E,Y),le);ur(E,Y)}return null}function $(A,E,D,Y){for(var le=null,De=null,ne=E,ye=E=0,Te=null;ne!==null&&ye<D.length;ye++){ne.index>ye?(Te=ne,ne=null):Te=ne.sibling;var Re=z(A,ne,D[ye],Y);if(Re===null){ne===null&&(ne=Te);break}e&&ne&&Re.alternate===null&&n(A,ne),E=u(Re,E,ye),De===null?le=Re:De.sibling=Re,De=Re,ne=Te}if(ye===D.length)return t(A,ne),Ee&&bt(A,ye),le;if(ne===null){for(;ye<D.length;ye++)ne=G(A,D[ye],Y),ne!==null&&(E=u(ne,E,ye),De===null?le=ne:De.sibling=ne,De=ne);return Ee&&bt(A,ye),le}for(ne=i(ne);ye<D.length;ye++)Te=_(ne,A,ye,D[ye],Y),Te!==null&&(e&&Te.alternate!==null&&ne.delete(Te.key===null?ye:Te.key),E=u(Te,E,ye),De===null?le=Te:De.sibling=Te,De=Te);return e&&ne.forEach(function(la){return n(A,la)}),Ee&&bt(A,ye),le}function se(A,E,D,Y){if(D==null)throw Error(o(151));for(var le=null,De=null,ne=E,ye=E=0,Te=null,Re=D.next();ne!==null&&!Re.done;ye++,Re=D.next()){ne.index>ye?(Te=ne,ne=null):Te=ne.sibling;var la=z(A,ne,Re.value,Y);if(la===null){ne===null&&(ne=Te);break}e&&ne&&la.alternate===null&&n(A,ne),E=u(la,E,ye),De===null?le=la:De.sibling=la,De=la,ne=Te}if(Re.done)return t(A,ne),Ee&&bt(A,ye),le;if(ne===null){for(;!Re.done;ye++,Re=D.next())Re=G(A,Re.value,Y),Re!==null&&(E=u(Re,E,ye),De===null?le=Re:De.sibling=Re,De=Re);return Ee&&bt(A,ye),le}for(ne=i(ne);!Re.done;ye++,Re=D.next())Re=_(ne,A,ye,Re.value,Y),Re!==null&&(e&&Re.alternate!==null&&ne.delete(Re.key===null?ye:Re.key),E=u(Re,E,ye),De===null?le=Re:De.sibling=Re,De=Re);return e&&ne.forEach(function(Wv){return n(A,Wv)}),Ee&&bt(A,ye),le}function Be(A,E,D,Y){if(typeof D=="object"&&D!==null&&D.type===L&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case S:e:{for(var le=D.key;E!==null;){if(E.key===le){if(le=D.type,le===L){if(E.tag===7){t(A,E.sibling),Y=s(E,D.props.children),Y.return=A,A=Y;break e}}else if(E.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ce&&Sa(le)===E.type){t(A,E.sibling),Y=s(E,D.props),Vi(Y,D),Y.return=A,A=Y;break e}t(A,E);break}else n(A,E);E=E.sibling}D.type===L?(Y=ma(D.props.children,A.mode,Y,D.key),Y.return=A,A=Y):(Y=nr(D.type,D.key,D.props,null,A.mode,Y),Vi(Y,D),Y.return=A,A=Y)}return h(A);case U:e:{for(le=D.key;E!==null;){if(E.key===le)if(E.tag===4&&E.stateNode.containerInfo===D.containerInfo&&E.stateNode.implementation===D.implementation){t(A,E.sibling),Y=s(E,D.children||[]),Y.return=A,A=Y;break e}else{t(A,E);break}else n(A,E);E=E.sibling}Y=Po(D,A.mode,Y),Y.return=A,A=Y}return h(A);case ce:return D=Sa(D),Be(A,E,D,Y)}if(W(D))return $(A,E,D,Y);if(J(D)){if(le=J(D),typeof le!="function")throw Error(o(150));return D=le.call(D),se(A,E,D,Y)}if(typeof D.then=="function")return Be(A,E,sr(D),Y);if(D.$$typeof===F)return Be(A,E,ir(A,D),Y);ur(A,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,E!==null&&E.tag===6?(t(A,E.sibling),Y=s(E,D),Y.return=A,A=Y):(t(A,E),Y=Wo(D,A.mode,Y),Y.return=A,A=Y),h(A)):t(A,E)}return function(A,E,D,Y){try{Fi=0;var le=Be(A,E,D,Y);return ei=null,le}catch(ne){if(ne===$a||ne===rr)throw ne;var De=On(29,ne,null,A.mode);return De.lanes=Y,De.return=A,De}}}var xa=Qf(!0),Wf=Qf(!1),Yt=!1;function os(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ss(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ft(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ze&2)!==0){var s=i.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),i.pending=n,n=er(e),Mf(e,null,t),n}return $l(e,i,n,t),er(e)}function Xi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Bc(e,t)}}function us(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var s=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var h={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};u===null?s=u=h:u=u.next=h,t=t.next}while(t!==null);u===null?s=u=n:u=u.next=n}else s=u=n;t={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var cs=!1;function Qi(){if(cs){var e=Ja;if(e!==null)throw e}}function Wi(e,n,t,i){cs=!1;var s=e.updateQueue;Yt=!1;var u=s.firstBaseUpdate,h=s.lastBaseUpdate,b=s.shared.pending;if(b!==null){s.shared.pending=null;var k=b,R=k.next;k.next=null,h===null?u=R:h.next=R,h=k;var N=e.alternate;N!==null&&(N=N.updateQueue,b=N.lastBaseUpdate,b!==h&&(b===null?N.firstBaseUpdate=R:b.next=R,N.lastBaseUpdate=k))}if(u!==null){var G=s.baseState;h=0,N=R=k=null,b=u;do{var z=b.lane&-536870913,_=z!==b.lane;if(_?(ke&z)===z:(i&z)===z){z!==0&&z===Za&&(cs=!0),N!==null&&(N=N.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var $=e,se=b;z=n;var Be=t;switch(se.tag){case 1:if($=se.payload,typeof $=="function"){G=$.call(Be,G,z);break e}G=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=se.payload,z=typeof $=="function"?$.call(Be,G,z):$,z==null)break e;G=v({},G,z);break e;case 2:Yt=!0}}z=b.callback,z!==null&&(e.flags|=64,_&&(e.flags|=8192),_=s.callbacks,_===null?s.callbacks=[z]:_.push(z))}else _={lane:z,tag:b.tag,payload:b.payload,callback:b.callback,next:null},N===null?(R=N=_,k=G):N=N.next=_,h|=z;if(b=b.next,b===null){if(b=s.shared.pending,b===null)break;_=b,b=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(!0);N===null&&(k=G),s.baseState=k,s.firstBaseUpdate=R,s.lastBaseUpdate=N,u===null&&(s.shared.lanes=0),Pt|=h,e.lanes=h,e.memoizedState=G}}function Pf(e,n){if(typeof e!="function")throw Error(o(191,e));e.call(n)}function Kf(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Pf(t[e],n)}var ni=T(null),cr=T(0);function Zf(e,n){e=zt,w(cr,e),w(ni,n),zt=e|n.baseLanes}function fs(){w(cr,zt),w(ni,ni.current)}function ds(){zt=cr.current,I(ni),I(cr)}var _n=T(null),Kn=null;function Vt(e){var n=e.alternate;w(Ke,Ke.current&1),w(_n,e),Kn===null&&(n===null||ni.current!==null||n.memoizedState!==null)&&(Kn=e)}function hs(e){w(Ke,Ke.current),w(_n,e),Kn===null&&(Kn=e)}function Jf(e){e.tag===22?(w(Ke,Ke.current),w(_n,e),Kn===null&&(Kn=e)):Xt()}function Xt(){w(Ke,Ke.current),w(_n,_n.current)}function Ln(e){I(_n),Kn===e&&(Kn=null),I(Ke)}var Ke=T(0);function fr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||bu(t)||Su(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xt=0,me=null,Ue=null,$e=null,dr=!1,ti=!1,Ca=!1,hr=0,Pi=0,ai=null,By=0;function We(){throw Error(o(321))}function ps(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Mn(e[t],n[t]))return!1;return!0}function ms(e,n,t,i,s,u){return xt=u,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,M.H=e===null||e.memoizedState===null?Nd:zs,Ca=!1,u=t(i,s),Ca=!1,ti&&(u=ed(n,t,i,s)),$f(e),u}function $f(e){M.H=Ji;var n=Ue!==null&&Ue.next!==null;if(xt=0,$e=Ue=me=null,dr=!1,Pi=0,ai=null,n)throw Error(o(300));e===null||en||(e=e.dependencies,e!==null&&ar(e)&&(en=!0))}function ed(e,n,t,i){me=e;var s=0;do{if(ti&&(ai=null),Pi=0,ti=!1,25<=s)throw Error(o(301));if(s+=1,$e=Ue=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}M.H=Ud,u=n(t,i)}while(ti);return u}function Iy(){var e=M.H,n=e.useState()[0];return n=typeof n.then=="function"?Ki(n):n,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(me.flags|=1024),n}function gs(){var e=hr!==0;return hr=0,e}function ys(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function vs(e){if(dr){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}dr=!1}xt=0,$e=Ue=me=null,ti=!1,Pi=hr=0,ai=null}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?me.memoizedState=$e=e:$e=$e.next=e,$e}function Ze(){if(Ue===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var n=$e===null?me.memoizedState:$e.next;if(n!==null)$e=n,Ue=e;else{if(e===null)throw me.alternate===null?Error(o(467)):Error(o(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},$e===null?me.memoizedState=$e=e:$e=$e.next=e}return $e}function pr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ki(e){var n=Pi;return Pi+=1,ai===null&&(ai=[]),e=Ff(ai,e,n),n=me,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,M.H=n===null||n.memoizedState===null?Nd:zs),e}function mr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ki(e);if(e.$$typeof===F)return fn(e)}throw Error(o(438,String(e)))}function bs(e){var n=null,t=me.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var i=me.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(s){return s.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=pr(),me.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),i=0;i<e;i++)t[i]=ge;return n.index++,t}function Ct(e,n){return typeof n=="function"?n(e):n}function gr(e){var n=Ze();return Ss(n,Ue,e)}function Ss(e,n,t){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var s=e.baseQueue,u=i.pending;if(u!==null){if(s!==null){var h=s.next;s.next=u.next,u.next=h}n.baseQueue=s=u,i.pending=null}if(u=e.baseState,s===null)e.memoizedState=u;else{n=s.next;var b=h=null,k=null,R=n,N=!1;do{var G=R.lane&-536870913;if(G!==R.lane?(ke&G)===G:(xt&G)===G){var z=R.revertLane;if(z===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),G===Za&&(N=!0);else if((xt&z)===z){R=R.next,z===Za&&(N=!0);continue}else G={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},k===null?(b=k=G,h=u):k=k.next=G,me.lanes|=z,Pt|=z;G=R.action,Ca&&t(u,G),u=R.hasEagerState?R.eagerState:t(u,G)}else z={lane:G,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},k===null?(b=k=z,h=u):k=k.next=z,me.lanes|=G,Pt|=G;R=R.next}while(R!==null&&R!==n);if(k===null?h=u:k.next=b,!Mn(u,e.memoizedState)&&(en=!0,N&&(t=Ja,t!==null)))throw t;e.memoizedState=u,e.baseState=h,e.baseQueue=k,i.lastRenderedState=u}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ws(e){var n=Ze(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var i=t.dispatch,s=t.pending,u=n.memoizedState;if(s!==null){t.pending=null;var h=s=s.next;do u=e(u,h.action),h=h.next;while(h!==s);Mn(u,n.memoizedState)||(en=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),t.lastRenderedState=u}return[u,i]}function nd(e,n,t){var i=me,s=Ze(),u=Ee;if(u){if(t===void 0)throw Error(o(407));t=t()}else t=n();var h=!Mn((Ue||s).memoizedState,t);if(h&&(s.memoizedState=t,en=!0),s=s.queue,ks(id.bind(null,i,s,e),[e]),s.getSnapshot!==n||h||$e!==null&&$e.memoizedState.tag&1){if(i.flags|=2048,ii(9,{destroy:void 0},ad.bind(null,i,s,t,n),null),je===null)throw Error(o(349));u||(xt&127)!==0||td(i,n,t)}return t}function td(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=me.updateQueue,n===null?(n=pr(),me.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ad(e,n,t,i){n.value=t,n.getSnapshot=i,ld(n)&&rd(e)}function id(e,n,t){return t(function(){ld(n)&&rd(e)})}function ld(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Mn(e,t)}catch{return!0}}function rd(e){var n=pa(e,2);n!==null&&En(n,e,2)}function xs(e){var n=vn();if(typeof e=="function"){var t=e;if(e=t(),Ca){bn(!0);try{t()}finally{bn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:e},n}function od(e,n,t,i){return e.baseState=t,Ss(e,Ue,typeof i=="function"?i:Ct)}function jy(e,n,t,i,s){if(br(e))throw Error(o(485));if(e=n.action,e!==null){var u={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};M.T!==null?t(!0):u.isTransition=!1,i(u),t=n.pending,t===null?(u.next=n.pending=u,sd(n,u)):(u.next=t.next,n.pending=t.next=u)}}function sd(e,n){var t=n.action,i=n.payload,s=e.state;if(n.isTransition){var u=M.T,h={};M.T=h;try{var b=t(s,i),k=M.S;k!==null&&k(h,b),ud(e,n,b)}catch(R){Cs(e,n,R)}finally{u!==null&&h.types!==null&&(u.types=h.types),M.T=u}}else try{u=t(s,i),ud(e,n,u)}catch(R){Cs(e,n,R)}}function ud(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(i){cd(e,n,i)},function(i){return Cs(e,n,i)}):cd(e,n,t)}function cd(e,n,t){n.status="fulfilled",n.value=t,fd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,sd(e,t)))}function Cs(e,n,t){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=t,fd(n),n=n.next;while(n!==i)}e.action=null}function fd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function dd(e,n){return n}function hd(e,n){if(Ee){var t=je.formState;if(t!==null){e:{var i=me;if(Ee){if(Ge){n:{for(var s=Ge,u=Pn;s.nodeType!==8;){if(!u){s=null;break n}if(s=Zn(s.nextSibling),s===null){s=null;break n}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){Ge=Zn(s.nextSibling),i=s.data==="F!";break e}}jt(i)}i=!1}i&&(n=t[0])}}return t=vn(),t.memoizedState=t.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:n},t.queue=i,t=Od.bind(null,me,i),i.dispatch=t,i=xs(!1),u=Rs.bind(null,me,!1,i.queue),i=vn(),s={state:n,dispatch:null,action:e,pending:null},i.queue=s,t=jy.bind(null,me,s,u,t),s.dispatch=t,i.memoizedState=e,[n,t,!1]}function pd(e){var n=Ze();return md(n,Ue,e)}function md(e,n,t){if(n=Ss(e,n,dd)[0],e=gr(Ct)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=Ki(n)}catch(h){throw h===$a?rr:h}else i=n;n=Ze();var s=n.queue,u=s.dispatch;return t!==n.memoizedState&&(me.flags|=2048,ii(9,{destroy:void 0},qy.bind(null,s,t),null)),[i,u,e]}function qy(e,n){e.action=n}function gd(e){var n=Ze(),t=Ue;if(t!==null)return md(n,t,e);Ze(),n=n.memoizedState,t=Ze();var i=t.queue.dispatch;return t.memoizedState=e,[n,i,!1]}function ii(e,n,t,i){return e={tag:e,create:t,deps:i,inst:n,next:null},n=me.updateQueue,n===null&&(n=pr(),me.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e),e}function yd(){return Ze().memoizedState}function yr(e,n,t,i){var s=vn();me.flags|=e,s.memoizedState=ii(1|n,{destroy:void 0},t,i===void 0?null:i)}function vr(e,n,t,i){var s=Ze();i=i===void 0?null:i;var u=s.memoizedState.inst;Ue!==null&&i!==null&&ps(i,Ue.memoizedState.deps)?s.memoizedState=ii(n,u,t,i):(me.flags|=e,s.memoizedState=ii(1|n,u,t,i))}function vd(e,n){yr(8390656,8,e,n)}function ks(e,n){vr(2048,8,e,n)}function Yy(e){me.flags|=4;var n=me.updateQueue;if(n===null)n=pr(),me.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function bd(e){var n=Ze().memoizedState;return Yy({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function Sd(e,n){return vr(4,2,e,n)}function wd(e,n){return vr(4,4,e,n)}function xd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cd(e,n,t){t=t!=null?t.concat([e]):null,vr(4,4,xd.bind(null,n,e),t)}function Ts(){}function kd(e,n){var t=Ze();n=n===void 0?null:n;var i=t.memoizedState;return n!==null&&ps(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function Td(e,n){var t=Ze();n=n===void 0?null:n;var i=t.memoizedState;if(n!==null&&ps(n,i[1]))return i[0];if(i=e(),Ca){bn(!0);try{e()}finally{bn(!1)}}return t.memoizedState=[i,n],i}function Es(e,n,t){return t===void 0||(xt&1073741824)!==0&&(ke&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Eh(),me.lanes|=e,Pt|=e,t)}function Ed(e,n,t,i){return Mn(t,n)?t:ni.current!==null?(e=Es(e,t,i),Mn(e,n)||(en=!0),e):(xt&42)===0||(xt&1073741824)!==0&&(ke&261930)===0?(en=!0,e.memoizedState=t):(e=Eh(),me.lanes|=e,Pt|=e,n)}function Ad(e,n,t,i,s){var u=X.p;X.p=u!==0&&8>u?u:8;var h=M.T,b={};M.T=b,Rs(e,!1,n,t);try{var k=s(),R=M.S;if(R!==null&&R(b,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var N=Hy(k,i);Zi(e,n,N,Hn(e))}else Zi(e,n,i,Hn(e))}catch(G){Zi(e,n,{then:function(){},status:"rejected",reason:G},Hn())}finally{X.p=u,h!==null&&b.types!==null&&(h.types=b.types),M.T=h}}function Gy(){}function As(e,n,t,i){if(e.tag!==5)throw Error(o(476));var s=Dd(e).queue;Ad(e,s,n,te,t===null?Gy:function(){return Rd(e),t(i)})}function Dd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:te},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rd(e){var n=Dd(e);n.next===null&&(n=e.alternate.memoizedState),Zi(e,n.next.queue,{},Hn())}function Ds(){return fn(pl)}function zd(){return Ze().memoizedState}function Md(){return Ze().memoizedState}function Fy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Hn();e=Gt(t);var i=Ft(n,e,t);i!==null&&(En(i,n,t),Xi(i,n,t)),n={cache:as()},e.payload=n;return}n=n.return}}function Vy(e,n,t){var i=Hn();t={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},br(e)?_d(n,t):(t=Xo(e,n,t,i),t!==null&&(En(t,e,i),Ld(t,n,i)))}function Od(e,n,t){var i=Hn();Zi(e,n,t,i)}function Zi(e,n,t,i){var s={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(br(e))_d(n,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var h=n.lastRenderedState,b=u(h,t);if(s.hasEagerState=!0,s.eagerState=b,Mn(b,h))return $l(e,n,s,0),je===null&&Jl(),!1}catch{}if(t=Xo(e,n,s,i),t!==null)return En(t,e,i),Ld(t,n,i),!0}return!1}function Rs(e,n,t,i){if(i={lane:2,revertLane:ou(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},br(e)){if(n)throw Error(o(479))}else n=Xo(e,t,i,2),n!==null&&En(n,e,2)}function br(e){var n=e.alternate;return e===me||n!==null&&n===me}function _d(e,n){ti=dr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ld(e,n,t){if((t&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Bc(e,t)}}var Ji={readContext:fn,use:mr,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};Ji.useEffectEvent=We;var Nd={readContext:fn,use:mr,useCallback:function(e,n){return vn().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:vd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,yr(4194308,4,xd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return yr(4194308,4,e,n)},useInsertionEffect:function(e,n){yr(4,2,e,n)},useMemo:function(e,n){var t=vn();n=n===void 0?null:n;var i=e();if(Ca){bn(!0);try{e()}finally{bn(!1)}}return t.memoizedState=[i,n],i},useReducer:function(e,n,t){var i=vn();if(t!==void 0){var s=t(n);if(Ca){bn(!0);try{t(n)}finally{bn(!1)}}}else s=n;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=Vy.bind(null,me,e),[i.memoizedState,e]},useRef:function(e){var n=vn();return e={current:e},n.memoizedState=e},useState:function(e){e=xs(e);var n=e.queue,t=Od.bind(null,me,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Ts,useDeferredValue:function(e,n){var t=vn();return Es(t,e,n)},useTransition:function(){var e=xs(!1);return e=Ad.bind(null,me,e.queue,!0,!1),vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var i=me,s=vn();if(Ee){if(t===void 0)throw Error(o(407));t=t()}else{if(t=n(),je===null)throw Error(o(349));(ke&127)!==0||td(i,n,t)}s.memoizedState=t;var u={value:t,getSnapshot:n};return s.queue=u,vd(id.bind(null,i,u,e),[e]),i.flags|=2048,ii(9,{destroy:void 0},ad.bind(null,i,u,t,n),null),t},useId:function(){var e=vn(),n=je.identifierPrefix;if(Ee){var t=rt,i=lt;t=(i&~(1<<32-Ie(i)-1)).toString(32)+t,n="_"+n+"R_"+t,t=hr++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=By++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ds,useFormState:hd,useActionState:hd,useOptimistic:function(e){var n=vn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Rs.bind(null,me,!0,t),t.dispatch=n,[e,n]},useMemoCache:bs,useCacheRefresh:function(){return vn().memoizedState=Fy.bind(null,me)},useEffectEvent:function(e){var n=vn(),t={impl:e};return n.memoizedState=t,function(){if((ze&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}},zs={readContext:fn,use:mr,useCallback:kd,useContext:fn,useEffect:ks,useImperativeHandle:Cd,useInsertionEffect:Sd,useLayoutEffect:wd,useMemo:Td,useReducer:gr,useRef:yd,useState:function(){return gr(Ct)},useDebugValue:Ts,useDeferredValue:function(e,n){var t=Ze();return Ed(t,Ue.memoizedState,e,n)},useTransition:function(){var e=gr(Ct)[0],n=Ze().memoizedState;return[typeof e=="boolean"?e:Ki(e),n]},useSyncExternalStore:nd,useId:zd,useHostTransitionStatus:Ds,useFormState:pd,useActionState:pd,useOptimistic:function(e,n){var t=Ze();return od(t,Ue,e,n)},useMemoCache:bs,useCacheRefresh:Md};zs.useEffectEvent=bd;var Ud={readContext:fn,use:mr,useCallback:kd,useContext:fn,useEffect:ks,useImperativeHandle:Cd,useInsertionEffect:Sd,useLayoutEffect:wd,useMemo:Td,useReducer:ws,useRef:yd,useState:function(){return ws(Ct)},useDebugValue:Ts,useDeferredValue:function(e,n){var t=Ze();return Ue===null?Es(t,e,n):Ed(t,Ue.memoizedState,e,n)},useTransition:function(){var e=ws(Ct)[0],n=Ze().memoizedState;return[typeof e=="boolean"?e:Ki(e),n]},useSyncExternalStore:nd,useId:zd,useHostTransitionStatus:Ds,useFormState:gd,useActionState:gd,useOptimistic:function(e,n){var t=Ze();return Ue!==null?od(t,Ue,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:bs,useCacheRefresh:Md};Ud.useEffectEvent=bd;function Ms(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:v({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Os={enqueueSetState:function(e,n,t){e=e._reactInternals;var i=Hn(),s=Gt(i);s.payload=n,t!=null&&(s.callback=t),n=Ft(e,s,i),n!==null&&(En(n,e,i),Xi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=Hn(),s=Gt(i);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=Ft(e,s,i),n!==null&&(En(n,e,i),Xi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Hn(),i=Gt(t);i.tag=2,n!=null&&(i.callback=n),n=Ft(e,i,t),n!==null&&(En(n,e,t),Xi(n,e,t))}};function Hd(e,n,t,i,s,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,h):n.prototype&&n.prototype.isPureReactComponent?!Bi(t,i)||!Bi(s,u):!0}function Bd(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&Os.enqueueReplaceState(n,n.state,null)}function ka(e,n){var t=n;if("ref"in n){t={};for(var i in n)i!=="ref"&&(t[i]=n[i])}if(e=e.defaultProps){t===n&&(t=v({},t));for(var s in e)t[s]===void 0&&(t[s]=e[s])}return t}function Id(e){Zl(e)}function jd(e){console.error(e)}function qd(e){Zl(e)}function Sr(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function Yd(e,n,t){try{var i=e.onCaughtError;i(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function _s(e,n,t){return t=Gt(t),t.tag=3,t.payload={element:null},t.callback=function(){Sr(e,n)},t}function Gd(e){return e=Gt(e),e.tag=3,e}function Fd(e,n,t,i){var s=t.type.getDerivedStateFromError;if(typeof s=="function"){var u=i.value;e.payload=function(){return s(u)},e.callback=function(){Yd(n,t,i)}}var h=t.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){Yd(n,t,i),typeof s!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Xy(e,n,t,i,s){if(t.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=t.alternate,n!==null&&Ka(n,t,s,!0),t=_n.current,t!==null){switch(t.tag){case 31:case 13:return Kn===null?Or():t.alternate===null&&Pe===0&&(Pe=3),t.flags&=-257,t.flags|=65536,t.lanes=s,i===or?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([i]):n.add(i),iu(e,i,s)),!1;case 22:return t.flags|=65536,i===or?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([i]):t.add(i)),iu(e,i,s)),!1}throw Error(o(435,t.tag))}return iu(e,i,s),Or(),!1}if(Ee)return n=_n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=s,i!==Jo&&(e=Error(o(422),{cause:i}),qi(Xn(e,t)))):(i!==Jo&&(n=Error(o(423),{cause:i}),qi(Xn(n,t))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Xn(i,t),s=_s(e.stateNode,i,s),us(e,s),Pe!==4&&(Pe=2)),!1;var u=Error(o(520),{cause:i});if(u=Xn(u,t),rl===null?rl=[u]:rl.push(u),Pe!==4&&(Pe=2),n===null)return!0;i=Xn(i,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=s&-s,t.lanes|=e,e=_s(t.stateNode,i,e),us(t,e),!1;case 1:if(n=t.type,u=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Kt===null||!Kt.has(u))))return t.flags|=65536,s&=-s,t.lanes|=s,s=Gd(s),Fd(s,e,t,i),us(t,s),!1}t=t.return}while(t!==null);return!1}var Ls=Error(o(461)),en=!1;function dn(e,n,t,i){n.child=e===null?Wf(n,null,t,i):xa(n,e.child,t,i)}function Vd(e,n,t,i,s){t=t.render;var u=n.ref;if("ref"in i){var h={};for(var b in i)b!=="ref"&&(h[b]=i[b])}else h=i;return va(n),i=ms(e,n,t,h,u,s),b=gs(),e!==null&&!en?(ys(e,n,s),kt(e,n,s)):(Ee&&b&&Ko(n),n.flags|=1,dn(e,n,i,s),n.child)}function Xd(e,n,t,i,s){if(e===null){var u=t.type;return typeof u=="function"&&!Qo(u)&&u.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=u,Qd(e,n,u,i,s)):(e=nr(t.type,null,i,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!Ys(e,s)){var h=u.memoizedProps;if(t=t.compare,t=t!==null?t:Bi,t(h,i)&&e.ref===n.ref)return kt(e,n,s)}return n.flags|=1,e=vt(u,i),e.ref=n.ref,e.return=n,n.child=e}function Qd(e,n,t,i,s){if(e!==null){var u=e.memoizedProps;if(Bi(u,i)&&e.ref===n.ref)if(en=!1,n.pendingProps=i=u,Ys(e,s))(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,kt(e,n,s)}return Ns(e,n,t,i,s)}function Wd(e,n,t,i){var s=i.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|t:t,e!==null){for(i=n.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~u}else i=0,n.child=null;return Pd(e,n,u,t,i)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&lr(n,u!==null?u.cachePool:null),u!==null?Zf(n,u):fs(),Jf(n);else return i=n.lanes=536870912,Pd(e,n,u!==null?u.baseLanes|t:t,t,i)}else u!==null?(lr(n,u.cachePool),Zf(n,u),Xt(),n.memoizedState=null):(e!==null&&lr(n,null),fs(),Xt());return dn(e,n,s,t),n.child}function $i(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Pd(e,n,t,i,s){var u=ls();return u=u===null?null:{parent:Je._currentValue,pool:u},n.memoizedState={baseLanes:t,cachePool:u},e!==null&&lr(n,null),fs(),Jf(n),e!==null&&Ka(e,n,i,!0),n.childLanes=s,null}function wr(e,n){return n=Cr({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Kd(e,n,t){return xa(n,e.child,null,t),e=wr(n,n.pendingProps),e.flags|=2,Ln(n),n.memoizedState=null,e}function Qy(e,n,t){var i=n.pendingProps,s=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(i.mode==="hidden")return e=wr(n,i),n.lanes=536870912,$i(null,e);if(hs(n),(e=Ge)?(e=sp(e,Pn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Bt!==null?{id:lt,overflow:rt}:null,retryLane:536870912,hydrationErrors:null},t=_f(e),t.return=n,n.child=t,cn=n,Ge=null)):e=null,e===null)throw jt(n);return n.lanes=536870912,null}return wr(n,i)}var u=e.memoizedState;if(u!==null){var h=u.dehydrated;if(hs(n),s)if(n.flags&256)n.flags&=-257,n=Kd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(o(558));else if(en||Ka(e,n,t,!1),s=(t&e.childLanes)!==0,en||s){if(i=je,i!==null&&(h=Ic(i,t),h!==0&&h!==u.retryLane))throw u.retryLane=h,pa(e,h),En(i,e,h),Ls;Or(),n=Kd(e,n,t)}else e=u.treeContext,Ge=Zn(h.nextSibling),cn=n,Ee=!0,It=null,Pn=!1,e!==null&&Uf(n,e),n=wr(n,i),n.flags|=4096;return n}return e=vt(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function xr(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Ns(e,n,t,i,s){return va(n),t=ms(e,n,t,i,void 0,s),i=gs(),e!==null&&!en?(ys(e,n,s),kt(e,n,s)):(Ee&&i&&Ko(n),n.flags|=1,dn(e,n,t,s),n.child)}function Zd(e,n,t,i,s,u){return va(n),n.updateQueue=null,t=ed(n,i,t,s),$f(e),i=gs(),e!==null&&!en?(ys(e,n,u),kt(e,n,u)):(Ee&&i&&Ko(n),n.flags|=1,dn(e,n,t,u),n.child)}function Jd(e,n,t,i,s){if(va(n),n.stateNode===null){var u=Xa,h=t.contextType;typeof h=="object"&&h!==null&&(u=fn(h)),u=new t(i,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Os,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=i,u.state=n.memoizedState,u.refs={},os(n),h=t.contextType,u.context=typeof h=="object"&&h!==null?fn(h):Xa,u.state=n.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(Ms(n,t,h,i),u.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&Os.enqueueReplaceState(u,u.state,null),Wi(n,i,u,s),Qi(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){u=n.stateNode;var b=n.memoizedProps,k=ka(t,b);u.props=k;var R=u.context,N=t.contextType;h=Xa,typeof N=="object"&&N!==null&&(h=fn(N));var G=t.getDerivedStateFromProps;N=typeof G=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||R!==h)&&Bd(n,u,i,h),Yt=!1;var z=n.memoizedState;u.state=z,Wi(n,i,u,s),Qi(),R=n.memoizedState,b||z!==R||Yt?(typeof G=="function"&&(Ms(n,t,G,i),R=n.memoizedState),(k=Yt||Hd(n,t,k,i,z,R,h))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=R),u.props=i,u.state=R,u.context=h,i=k):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{u=n.stateNode,ss(e,n),h=n.memoizedProps,N=ka(t,h),u.props=N,G=n.pendingProps,z=u.context,R=t.contextType,k=Xa,typeof R=="object"&&R!==null&&(k=fn(R)),b=t.getDerivedStateFromProps,(R=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==G||z!==k)&&Bd(n,u,i,k),Yt=!1,z=n.memoizedState,u.state=z,Wi(n,i,u,s),Qi();var _=n.memoizedState;h!==G||z!==_||Yt||e!==null&&e.dependencies!==null&&ar(e.dependencies)?(typeof b=="function"&&(Ms(n,t,b,i),_=n.memoizedState),(N=Yt||Hd(n,t,N,i,z,_,k)||e!==null&&e.dependencies!==null&&ar(e.dependencies))?(R||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,_,k),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,_,k)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=_),u.props=i,u.state=_,u.context=k,i=N):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),i=!1)}return u=i,xr(e,n),i=(n.flags&128)!==0,u||i?(u=n.stateNode,t=i&&typeof t.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&i?(n.child=xa(n,e.child,null,s),n.child=xa(n,null,t,s)):dn(e,n,t,s),n.memoizedState=u.state,e=n.child):e=kt(e,n,s),e}function $d(e,n,t,i){return ga(),n.flags|=256,dn(e,n,t,i),n.child}var Us={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hs(e){return{baseLanes:e,cachePool:Yf()}}function Bs(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Un),e}function eh(e,n,t){var i=n.pendingProps,s=!1,u=(n.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),h&&(s=!0,n.flags&=-129),h=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(s?Vt(n):Xt(),(e=Ge)?(e=sp(e,Pn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Bt!==null?{id:lt,overflow:rt}:null,retryLane:536870912,hydrationErrors:null},t=_f(e),t.return=n,n.child=t,cn=n,Ge=null)):e=null,e===null)throw jt(n);return Su(e)?n.lanes=32:n.lanes=536870912,null}var b=i.children;return i=i.fallback,s?(Xt(),s=n.mode,b=Cr({mode:"hidden",children:b},s),i=ma(i,s,t,null),b.return=n,i.return=n,b.sibling=i,n.child=b,i=n.child,i.memoizedState=Hs(t),i.childLanes=Bs(e,h,t),n.memoizedState=Us,$i(null,i)):(Vt(n),Is(n,b))}var k=e.memoizedState;if(k!==null&&(b=k.dehydrated,b!==null)){if(u)n.flags&256?(Vt(n),n.flags&=-257,n=js(e,n,t)):n.memoizedState!==null?(Xt(),n.child=e.child,n.flags|=128,n=null):(Xt(),b=i.fallback,s=n.mode,i=Cr({mode:"visible",children:i.children},s),b=ma(b,s,t,null),b.flags|=2,i.return=n,b.return=n,i.sibling=b,n.child=i,xa(n,e.child,null,t),i=n.child,i.memoizedState=Hs(t),i.childLanes=Bs(e,h,t),n.memoizedState=Us,n=$i(null,i));else if(Vt(n),Su(b)){if(h=b.nextSibling&&b.nextSibling.dataset,h)var R=h.dgst;h=R,i=Error(o(419)),i.stack="",i.digest=h,qi({value:i,source:null,stack:null}),n=js(e,n,t)}else if(en||Ka(e,n,t,!1),h=(t&e.childLanes)!==0,en||h){if(h=je,h!==null&&(i=Ic(h,t),i!==0&&i!==k.retryLane))throw k.retryLane=i,pa(e,i),En(h,e,i),Ls;bu(b)||Or(),n=js(e,n,t)}else bu(b)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,Ge=Zn(b.nextSibling),cn=n,Ee=!0,It=null,Pn=!1,e!==null&&Uf(n,e),n=Is(n,i.children),n.flags|=4096);return n}return s?(Xt(),b=i.fallback,s=n.mode,k=e.child,R=k.sibling,i=vt(k,{mode:"hidden",children:i.children}),i.subtreeFlags=k.subtreeFlags&65011712,R!==null?b=vt(R,b):(b=ma(b,s,t,null),b.flags|=2),b.return=n,i.return=n,i.sibling=b,n.child=i,$i(null,i),i=n.child,b=e.child.memoizedState,b===null?b=Hs(t):(s=b.cachePool,s!==null?(k=Je._currentValue,s=s.parent!==k?{parent:k,pool:k}:s):s=Yf(),b={baseLanes:b.baseLanes|t,cachePool:s}),i.memoizedState=b,i.childLanes=Bs(e,h,t),n.memoizedState=Us,$i(e.child,i)):(Vt(n),t=e.child,e=t.sibling,t=vt(t,{mode:"visible",children:i.children}),t.return=n,t.sibling=null,e!==null&&(h=n.deletions,h===null?(n.deletions=[e],n.flags|=16):h.push(e)),n.child=t,n.memoizedState=null,t)}function Is(e,n){return n=Cr({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cr(e,n){return e=On(22,e,null,n),e.lanes=0,e}function js(e,n,t){return xa(n,e.child,null,t),e=Is(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function nh(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),ns(e.return,n,t)}function qs(e,n,t,i,s,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:s,treeForkCount:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=i,h.tail=t,h.tailMode=s,h.treeForkCount=u)}function th(e,n,t){var i=n.pendingProps,s=i.revealOrder,u=i.tail;i=i.children;var h=Ke.current,b=(h&2)!==0;if(b?(h=h&1|2,n.flags|=128):h&=1,w(Ke,h),dn(e,n,i,t),i=Ee?ji:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nh(e,t,n);else if(e.tag===19)nh(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&fr(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),qs(n,!1,s,t,u,i);break;case"backwards":case"unstable_legacy-backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&fr(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}qs(n,!0,t,null,u,i);break;case"together":qs(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function kt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Pt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Ka(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,t=vt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=vt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ys(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ar(e)))}function Wy(e,n,t){switch(n.tag){case 3:Ve(n,n.stateNode.containerInfo),qt(n,Je,e.memoizedState.cache),ga();break;case 27:case 5:Yn(n);break;case 4:Ve(n,n.stateNode.containerInfo);break;case 10:qt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,hs(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Vt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?eh(e,n,t):(Vt(n),e=kt(e,n,t),e!==null?e.sibling:null);Vt(n);break;case 19:var s=(e.flags&128)!==0;if(i=(t&n.childLanes)!==0,i||(Ka(e,n,t,!1),i=(t&n.childLanes)!==0),s){if(i)return th(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),w(Ke,Ke.current),i)break;return null;case 22:return n.lanes=0,Wd(e,n,t,n.pendingProps);case 24:qt(n,Je,e.memoizedState.cache)}return kt(e,n,t)}function ah(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)en=!0;else{if(!Ys(e,t)&&(n.flags&128)===0)return en=!1,Wy(e,n,t);en=(e.flags&131072)!==0}else en=!1,Ee&&(n.flags&1048576)!==0&&Nf(n,ji,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=Sa(n.elementType),n.type=e,typeof e=="function")Qo(e)?(i=ka(e,i),n.tag=1,n=Jd(null,n,e,i,t)):(n.tag=0,n=Ns(null,n,e,i,t));else{if(e!=null){var s=e.$$typeof;if(s===re){n.tag=11,n=Vd(null,n,e,i,t);break e}else if(s===K){n.tag=14,n=Xd(null,n,e,i,t);break e}}throw n=ae(e)||e,Error(o(306,n,""))}}return n;case 0:return Ns(e,n,n.type,n.pendingProps,t);case 1:return i=n.type,s=ka(i,n.pendingProps),Jd(e,n,i,s,t);case 3:e:{if(Ve(n,n.stateNode.containerInfo),e===null)throw Error(o(387));i=n.pendingProps;var u=n.memoizedState;s=u.element,ss(e,n),Wi(n,i,null,t);var h=n.memoizedState;if(i=h.cache,qt(n,Je,i),i!==u.cache&&ts(n,[Je],t,!0),Qi(),i=h.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:h.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=$d(e,n,i,t);break e}else if(i!==s){s=Xn(Error(o(424)),n),qi(s),n=$d(e,n,i,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ge=Zn(e.firstChild),cn=n,Ee=!0,It=null,Pn=!0,t=Wf(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ga(),i===s){n=kt(e,n,t);break e}dn(e,n,i,t)}n=n.child}return n;case 26:return xr(e,n),e===null?(t=pp(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ee||(t=n.type,e=n.pendingProps,i=Ir(ie.current).createElement(t),i[un]=n,i[Sn]=e,hn(i,t,e),rn(i),n.stateNode=i):n.memoizedState=pp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yn(n),e===null&&Ee&&(i=n.stateNode=fp(n.type,n.pendingProps,ie.current),cn=n,Pn=!0,s=Ge,ea(n.type)?(wu=s,Ge=Zn(i.firstChild)):Ge=s),dn(e,n,n.pendingProps.children,t),xr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((s=i=Ge)&&(i=kv(i,n.type,n.pendingProps,Pn),i!==null?(n.stateNode=i,cn=n,Ge=Zn(i.firstChild),Pn=!1,s=!0):s=!1),s||jt(n)),Yn(n),s=n.type,u=n.pendingProps,h=e!==null?e.memoizedProps:null,i=u.children,gu(s,u)?i=null:h!==null&&gu(s,h)&&(n.flags|=32),n.memoizedState!==null&&(s=ms(e,n,Iy,null,null,t),pl._currentValue=s),xr(e,n),dn(e,n,i,t),n.child;case 6:return e===null&&Ee&&((e=t=Ge)&&(t=Tv(t,n.pendingProps,Pn),t!==null?(n.stateNode=t,cn=n,Ge=null,e=!0):e=!1),e||jt(n)),null;case 13:return eh(e,n,t);case 4:return Ve(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=xa(n,null,i,t):dn(e,n,i,t),n.child;case 11:return Vd(e,n,n.type,n.pendingProps,t);case 7:return dn(e,n,n.pendingProps,t),n.child;case 8:return dn(e,n,n.pendingProps.children,t),n.child;case 12:return dn(e,n,n.pendingProps.children,t),n.child;case 10:return i=n.pendingProps,qt(n,n.type,i.value),dn(e,n,i.children,t),n.child;case 9:return s=n.type._context,i=n.pendingProps.children,va(n),s=fn(s),i=i(s),n.flags|=1,dn(e,n,i,t),n.child;case 14:return Xd(e,n,n.type,n.pendingProps,t);case 15:return Qd(e,n,n.type,n.pendingProps,t);case 19:return th(e,n,t);case 31:return Qy(e,n,t);case 22:return Wd(e,n,t,n.pendingProps);case 24:return va(n),i=fn(Je),e===null?(s=ls(),s===null&&(s=je,u=as(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=t),s=u),n.memoizedState={parent:i,cache:s},os(n),qt(n,Je,s)):((e.lanes&t)!==0&&(ss(e,n),Wi(n,null,null,t),Qi()),s=e.memoizedState,u=n.memoizedState,s.parent!==i?(s={parent:i,cache:i},n.memoizedState=s,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=s),qt(n,Je,i)):(i=u.cache,qt(n,Je,i),i!==s.cache&&ts(n,[Je],t,!0))),dn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function Tt(e){e.flags|=4}function Gs(e,n,t,i,s){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(zh())e.flags|=8192;else throw wa=or,rs}else e.flags&=-16777217}function ih(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bp(n))if(zh())e.flags|=8192;else throw wa=or,rs}function kr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Uc():536870912,e.lanes|=n,si|=n)}function el(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function Py(e,n,t){var i=n.pendingProps;switch(Zo(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(n),null;case 1:return Fe(n),null;case 3:return t=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),wt(Je),Ne(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Pa(n)?Tt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,$o())),Fe(n),null;case 26:var s=n.type,u=n.memoizedState;return e===null?(Tt(n),u!==null?(Fe(n),ih(n,u)):(Fe(n),Gs(n,s,null,i,t))):u?u!==e.memoizedState?(Tt(n),Fe(n),ih(n,u)):(Fe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&Tt(n),Fe(n),Gs(n,s,e,i,t)),null;case 27:if(dt(n),t=ie.current,s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&Tt(n);else{if(!i){if(n.stateNode===null)throw Error(o(166));return Fe(n),null}e=Z.current,Pa(n)?Hf(n):(e=fp(s,i,t),n.stateNode=e,Tt(n))}return Fe(n),null;case 5:if(dt(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&Tt(n);else{if(!i){if(n.stateNode===null)throw Error(o(166));return Fe(n),null}if(u=Z.current,Pa(n))Hf(n);else{var h=Ir(ie.current);switch(u){case 1:u=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:u=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":u=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":u=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":u=h.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?h.createElement("select",{is:i.is}):h.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?h.createElement(s,{is:i.is}):h.createElement(s)}}u[un]=n,u[Sn]=i;e:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)u.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=u;e:switch(hn(u,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Tt(n)}}return Fe(n),Gs(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&Tt(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(o(166));if(e=ie.current,Pa(n)){if(e=n.stateNode,t=n.memoizedProps,i=null,s=cn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[un]=n,e=!!(e.nodeValue===t||i!==null&&i.suppressHydrationWarning===!0||ep(e.nodeValue,t)),e||jt(n,!0)}else e=Ir(e).createTextNode(i),e[un]=n,n.stateNode=e}return Fe(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(i=Pa(n),t!==null){if(e===null){if(!i)throw Error(o(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[un]=n}else ga(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Fe(n),e=!1}else t=$o(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(Ln(n),n):(Ln(n),null);if((n.flags&128)!==0)throw Error(o(558))}return Fe(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Pa(n),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[un]=n}else ga(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Fe(n),s=!1}else s=$o(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return n.flags&256?(Ln(n),n):(Ln(n),null)}return Ln(n),(n.flags&128)!==0?(n.lanes=t,n):(t=i!==null,e=e!==null&&e.memoizedState!==null,t&&(i=n.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),kr(n,n.updateQueue),Fe(n),null);case 4:return Ne(),e===null&&fu(n.stateNode.containerInfo),Fe(n),null;case 10:return wt(n.type),Fe(n),null;case 19:if(I(Ke),i=n.memoizedState,i===null)return Fe(n),null;if(s=(n.flags&128)!==0,u=i.rendering,u===null)if(s)el(i,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=fr(e),u!==null){for(n.flags|=128,el(i,!1),e=u.updateQueue,n.updateQueue=e,kr(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Of(t,e),t=t.sibling;return w(Ke,Ke.current&1|2),Ee&&bt(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&gn()>Rr&&(n.flags|=128,s=!0,el(i,!1),n.lanes=4194304)}else{if(!s)if(e=fr(u),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,kr(n,e),el(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Ee)return Fe(n),null}else 2*gn()-i.renderingStartTime>Rr&&t!==536870912&&(n.flags|=128,s=!0,el(i,!1),n.lanes=4194304);i.isBackwards?(u.sibling=n.child,n.child=u):(e=i.last,e!==null?e.sibling=u:n.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=gn(),e.sibling=null,t=Ke.current,w(Ke,s?t&1|2:t&1),Ee&&bt(n,i.treeForkCount),e):(Fe(n),null);case 22:case 23:return Ln(n),ds(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(t&536870912)!==0&&(n.flags&128)===0&&(Fe(n),n.subtreeFlags&6&&(n.flags|=8192)):Fe(n),t=n.updateQueue,t!==null&&kr(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==t&&(n.flags|=2048),e!==null&&I(ba),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),wt(Je),Fe(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function Ky(e,n){switch(Zo(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return wt(Je),Ne(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(Ln(n),n.alternate===null)throw Error(o(340));ga()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ln(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));ga()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I(Ke),null;case 4:return Ne(),null;case 10:return wt(n.type),null;case 22:case 23:return Ln(n),ds(),e!==null&&I(ba),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return wt(Je),null;case 25:return null;default:return null}}function lh(e,n){switch(Zo(n),n.tag){case 3:wt(Je),Ne();break;case 26:case 27:case 5:dt(n);break;case 4:Ne();break;case 31:n.memoizedState!==null&&Ln(n);break;case 13:Ln(n);break;case 19:I(Ke);break;case 10:wt(n.type);break;case 22:case 23:Ln(n),ds(),e!==null&&I(ba);break;case 24:wt(Je)}}function nl(e,n){try{var t=n.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var s=i.next;t=s;do{if((t.tag&e)===e){i=void 0;var u=t.create,h=t.inst;i=u(),h.destroy=i}t=t.next}while(t!==s)}}catch(b){Le(n,n.return,b)}}function Qt(e,n,t){try{var i=n.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var u=s.next;i=u;do{if((i.tag&e)===e){var h=i.inst,b=h.destroy;if(b!==void 0){h.destroy=void 0,s=n;var k=t,R=b;try{R()}catch(N){Le(s,k,N)}}}i=i.next}while(i!==u)}}catch(N){Le(n,n.return,N)}}function rh(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Kf(n,t)}catch(i){Le(e,e.return,i)}}}function oh(e,n,t){t.props=ka(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(i){Le(e,n,i)}}function tl(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof t=="function"?e.refCleanup=t(i):t.current=i}}catch(s){Le(e,n,s)}}function ot(e,n){var t=e.ref,i=e.refCleanup;if(t!==null)if(typeof i=="function")try{i()}catch(s){Le(e,n,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(s){Le(e,n,s)}else t.current=null}function sh(e){var n=e.type,t=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&i.focus();break e;case"img":t.src?i.src=t.src:t.srcSet&&(i.srcset=t.srcSet)}}catch(s){Le(e,e.return,s)}}function Fs(e,n,t){try{var i=e.stateNode;vv(i,e.type,t,n),i[Sn]=n}catch(s){Le(e,e.return,s)}}function uh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ea(e.type)||e.tag===4}function Vs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xs(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=gt));else if(i!==4&&(i===27&&ea(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Xs(e,n,t),e=e.sibling;e!==null;)Xs(e,n,t),e=e.sibling}function Tr(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(i===27&&ea(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Tr(e,n,t),e=e.sibling;e!==null;)Tr(e,n,t),e=e.sibling}function ch(e){var n=e.stateNode,t=e.memoizedProps;try{for(var i=e.type,s=n.attributes;s.length;)n.removeAttributeNode(s[0]);hn(n,i,t),n[un]=e,n[Sn]=t}catch(u){Le(e,e.return,u)}}var Et=!1,nn=!1,Qs=!1,fh=typeof WeakSet=="function"?WeakSet:Set,on=null;function Zy(e,n){if(e=e.containerInfo,pu=Xr,e=Cf(e),jo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var s=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var h=0,b=-1,k=-1,R=0,N=0,G=e,z=null;n:for(;;){for(var _;G!==t||s!==0&&G.nodeType!==3||(b=h+s),G!==u||i!==0&&G.nodeType!==3||(k=h+i),G.nodeType===3&&(h+=G.nodeValue.length),(_=G.firstChild)!==null;)z=G,G=_;for(;;){if(G===e)break n;if(z===t&&++R===s&&(b=h),z===u&&++N===i&&(k=h),(_=G.nextSibling)!==null)break;G=z,z=G.parentNode}G=_}t=b===-1||k===-1?null:{start:b,end:k}}else t=null}t=t||{start:0,end:0}}else t=null;for(mu={focusedElem:e,selectionRange:t},Xr=!1,on=n;on!==null;)if(n=on,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,on=e;else for(;on!==null;){switch(n=on,u=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)s=e[t],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,t=n,s=u.memoizedProps,u=u.memoizedState,i=t.stateNode;try{var $=ka(t.type,s);e=i.getSnapshotBeforeUpdate($,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(se){Le(t,t.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)vu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=n.sibling,e!==null){e.return=n.return,on=e;break}on=n.return}}function dh(e,n,t){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t),i&4&&nl(5,t);break;case 1:if(Dt(e,t),i&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(h){Le(t,t.return,h)}else{var s=ka(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(s,n,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Le(t,t.return,h)}}i&64&&rh(t),i&512&&tl(t,t.return);break;case 3:if(Dt(e,t),i&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Kf(e,n)}catch(h){Le(t,t.return,h)}}break;case 27:n===null&&i&4&&ch(t);case 26:case 5:Dt(e,t),n===null&&i&4&&sh(t),i&512&&tl(t,t.return);break;case 12:Dt(e,t);break;case 31:Dt(e,t),i&4&&mh(e,t);break;case 13:Dt(e,t),i&4&&gh(e,t),i&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=rv.bind(null,t),Ev(e,t))));break;case 22:if(i=t.memoizedState!==null||Et,!i){n=n!==null&&n.memoizedState!==null||nn,s=Et;var u=nn;Et=i,(nn=n)&&!u?Rt(e,t,(t.subtreeFlags&8772)!==0):Dt(e,t),Et=s,nn=u}break;case 30:break;default:Dt(e,t)}}function hh(e){var n=e.alternate;n!==null&&(e.alternate=null,hh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Co(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,xn=!1;function At(e,n,t){for(t=t.child;t!==null;)ph(e,n,t),t=t.sibling}function ph(e,n,t){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(yn,t)}catch{}switch(t.tag){case 26:nn||ot(t,n),At(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:nn||ot(t,n);var i=Xe,s=xn;ea(t.type)&&(Xe=t.stateNode,xn=!1),At(e,n,t),fl(t.stateNode),Xe=i,xn=s;break;case 5:nn||ot(t,n);case 6:if(i=Xe,s=xn,Xe=null,At(e,n,t),Xe=i,xn=s,Xe!==null)if(xn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(t.stateNode)}catch(u){Le(t,n,u)}else try{Xe.removeChild(t.stateNode)}catch(u){Le(t,n,u)}break;case 18:Xe!==null&&(xn?(e=Xe,rp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),gi(e)):rp(Xe,t.stateNode));break;case 4:i=Xe,s=xn,Xe=t.stateNode.containerInfo,xn=!0,At(e,n,t),Xe=i,xn=s;break;case 0:case 11:case 14:case 15:Qt(2,t,n),nn||Qt(4,t,n),At(e,n,t);break;case 1:nn||(ot(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"&&oh(t,n,i)),At(e,n,t);break;case 21:At(e,n,t);break;case 22:nn=(i=nn)||t.memoizedState!==null,At(e,n,t),nn=i;break;default:At(e,n,t)}}function mh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gi(e)}catch(t){Le(n,n.return,t)}}}function gh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gi(e)}catch(t){Le(n,n.return,t)}}function Jy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fh),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fh),n;default:throw Error(o(435,e.tag))}}function Er(e,n){var t=Jy(e);n.forEach(function(i){if(!t.has(i)){t.add(i);var s=ov.bind(null,e,i);i.then(s,s)}})}function Cn(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var s=t[i],u=e,h=n,b=h;e:for(;b!==null;){switch(b.tag){case 27:if(ea(b.type)){Xe=b.stateNode,xn=!1;break e}break;case 5:Xe=b.stateNode,xn=!1;break e;case 3:case 4:Xe=b.stateNode.containerInfo,xn=!0;break e}b=b.return}if(Xe===null)throw Error(o(160));ph(u,h,s),Xe=null,xn=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)yh(n,e),n=n.sibling}var tt=null;function yh(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Cn(n,e),kn(e),i&4&&(Qt(3,e,e.return),nl(3,e),Qt(5,e,e.return));break;case 1:Cn(n,e),kn(e),i&512&&(nn||t===null||ot(t,t.return)),i&64&&Et&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?i:t.concat(i))));break;case 26:var s=tt;if(Cn(n,e),kn(e),i&512&&(nn||t===null||ot(t,t.return)),i&4){var u=t!==null?t.memoizedState:null;if(i=e.memoizedState,t===null)if(i===null)if(e.stateNode===null){e:{i=e.type,t=e.memoizedProps,s=s.ownerDocument||s;n:switch(i){case"title":u=s.getElementsByTagName("title")[0],(!u||u[Ri]||u[un]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(i),s.head.insertBefore(u,s.querySelector("head > title"))),hn(u,i,t),u[un]=e,rn(u),i=u;break e;case"link":var h=yp("link","href",s).get(i+(t.href||""));if(h){for(var b=0;b<h.length;b++)if(u=h[b],u.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&u.getAttribute("rel")===(t.rel==null?null:t.rel)&&u.getAttribute("title")===(t.title==null?null:t.title)&&u.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){h.splice(b,1);break n}}u=s.createElement(i),hn(u,i,t),s.head.appendChild(u);break;case"meta":if(h=yp("meta","content",s).get(i+(t.content||""))){for(b=0;b<h.length;b++)if(u=h[b],u.getAttribute("content")===(t.content==null?null:""+t.content)&&u.getAttribute("name")===(t.name==null?null:t.name)&&u.getAttribute("property")===(t.property==null?null:t.property)&&u.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&u.getAttribute("charset")===(t.charSet==null?null:t.charSet)){h.splice(b,1);break n}}u=s.createElement(i),hn(u,i,t),s.head.appendChild(u);break;default:throw Error(o(468,i))}u[un]=e,rn(u),i=u}e.stateNode=i}else vp(s,e.type,e.stateNode);else e.stateNode=gp(s,i,e.memoizedProps);else u!==i?(u===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):u.count--,i===null?vp(s,e.type,e.stateNode):gp(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Fs(e,e.memoizedProps,t.memoizedProps)}break;case 27:Cn(n,e),kn(e),i&512&&(nn||t===null||ot(t,t.return)),t!==null&&i&4&&Fs(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Cn(n,e),kn(e),i&512&&(nn||t===null||ot(t,t.return)),e.flags&32){s=e.stateNode;try{Ia(s,"")}catch($){Le(e,e.return,$)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Fs(e,s,t!==null?t.memoizedProps:s)),i&1024&&(Qs=!0);break;case 6:if(Cn(n,e),kn(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,t=e.stateNode;try{t.nodeValue=i}catch($){Le(e,e.return,$)}}break;case 3:if(Yr=null,s=tt,tt=jr(n.containerInfo),Cn(n,e),tt=s,kn(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{gi(n.containerInfo)}catch($){Le(e,e.return,$)}Qs&&(Qs=!1,vh(e));break;case 4:i=tt,tt=jr(e.stateNode.containerInfo),Cn(n,e),kn(e),tt=i;break;case 12:Cn(n,e),kn(e);break;case 31:Cn(n,e),kn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Er(e,i)));break;case 13:Cn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Dr=gn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Er(e,i)));break;case 22:s=e.memoizedState!==null;var k=t!==null&&t.memoizedState!==null,R=Et,N=nn;if(Et=R||s,nn=N||k,Cn(n,e),nn=N,Et=R,kn(e),i&8192)e:for(n=e.stateNode,n._visibility=s?n._visibility&-2:n._visibility|1,s&&(t===null||k||Et||nn||Ta(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){k=t=n;try{if(u=k.stateNode,s)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{b=k.stateNode;var G=k.memoizedProps.style,z=G!=null&&G.hasOwnProperty("display")?G.display:null;b.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch($){Le(k,k.return,$)}}}else if(n.tag===6){if(t===null){k=n;try{k.stateNode.nodeValue=s?"":k.memoizedProps}catch($){Le(k,k.return,$)}}}else if(n.tag===18){if(t===null){k=n;try{var _=k.stateNode;s?op(_,!0):op(k.stateNode,!1)}catch($){Le(k,k.return,$)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(t=i.retryQueue,t!==null&&(i.retryQueue=null,Er(e,t))));break;case 19:Cn(n,e),kn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Er(e,i)));break;case 30:break;case 21:break;default:Cn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var t,i=e.return;i!==null;){if(uh(i)){t=i;break}i=i.return}if(t==null)throw Error(o(160));switch(t.tag){case 27:var s=t.stateNode,u=Vs(e);Tr(e,u,s);break;case 5:var h=t.stateNode;t.flags&32&&(Ia(h,""),t.flags&=-33);var b=Vs(e);Tr(e,b,h);break;case 3:case 4:var k=t.stateNode.containerInfo,R=Vs(e);Xs(e,R,k);break;default:throw Error(o(161))}}catch(N){Le(e,e.return,N)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;vh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Dt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)dh(e,n.alternate,n),n=n.sibling}function Ta(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Qt(4,n,n.return),Ta(n);break;case 1:ot(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&oh(n,n.return,t),Ta(n);break;case 27:fl(n.stateNode);case 26:case 5:ot(n,n.return),Ta(n);break;case 22:n.memoizedState===null&&Ta(n);break;case 30:Ta(n);break;default:Ta(n)}e=e.sibling}}function Rt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,s=e,u=n,h=u.flags;switch(u.tag){case 0:case 11:case 15:Rt(s,u,t),nl(4,u);break;case 1:if(Rt(s,u,t),i=u,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(R){Le(i,i.return,R)}if(i=u,s=i.updateQueue,s!==null){var b=i.stateNode;try{var k=s.shared.hiddenCallbacks;if(k!==null)for(s.shared.hiddenCallbacks=null,s=0;s<k.length;s++)Pf(k[s],b)}catch(R){Le(i,i.return,R)}}t&&h&64&&rh(u),tl(u,u.return);break;case 27:ch(u);case 26:case 5:Rt(s,u,t),t&&i===null&&h&4&&sh(u),tl(u,u.return);break;case 12:Rt(s,u,t);break;case 31:Rt(s,u,t),t&&h&4&&mh(s,u);break;case 13:Rt(s,u,t),t&&h&4&&gh(s,u);break;case 22:u.memoizedState===null&&Rt(s,u,t),tl(u,u.return);break;case 30:break;default:Rt(s,u,t)}n=n.sibling}}function Ws(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Yi(t))}function Ps(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yi(e))}function at(e,n,t,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)bh(e,n,t,i),n=n.sibling}function bh(e,n,t,i){var s=n.flags;switch(n.tag){case 0:case 11:case 15:at(e,n,t,i),s&2048&&nl(9,n);break;case 1:at(e,n,t,i);break;case 3:at(e,n,t,i),s&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yi(e)));break;case 12:if(s&2048){at(e,n,t,i),e=n.stateNode;try{var u=n.memoizedProps,h=u.id,b=u.onPostCommit;typeof b=="function"&&b(h,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Le(n,n.return,k)}}else at(e,n,t,i);break;case 31:at(e,n,t,i);break;case 13:at(e,n,t,i);break;case 23:break;case 22:u=n.stateNode,h=n.alternate,n.memoizedState!==null?u._visibility&2?at(e,n,t,i):al(e,n):u._visibility&2?at(e,n,t,i):(u._visibility|=2,li(e,n,t,i,(n.subtreeFlags&10256)!==0||!1)),s&2048&&Ws(h,n);break;case 24:at(e,n,t,i),s&2048&&Ps(n.alternate,n);break;default:at(e,n,t,i)}}function li(e,n,t,i,s){for(s=s&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,h=n,b=t,k=i,R=h.flags;switch(h.tag){case 0:case 11:case 15:li(u,h,b,k,s),nl(8,h);break;case 23:break;case 22:var N=h.stateNode;h.memoizedState!==null?N._visibility&2?li(u,h,b,k,s):al(u,h):(N._visibility|=2,li(u,h,b,k,s)),s&&R&2048&&Ws(h.alternate,h);break;case 24:li(u,h,b,k,s),s&&R&2048&&Ps(h.alternate,h);break;default:li(u,h,b,k,s)}n=n.sibling}}function al(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,i=n,s=i.flags;switch(i.tag){case 22:al(t,i),s&2048&&Ws(i.alternate,i);break;case 24:al(t,i),s&2048&&Ps(i.alternate,i);break;default:al(t,i)}n=n.sibling}}var il=8192;function ri(e,n,t){if(e.subtreeFlags&il)for(e=e.child;e!==null;)Sh(e,n,t),e=e.sibling}function Sh(e,n,t){switch(e.tag){case 26:ri(e,n,t),e.flags&il&&e.memoizedState!==null&&Bv(t,tt,e.memoizedState,e.memoizedProps);break;case 5:ri(e,n,t);break;case 3:case 4:var i=tt;tt=jr(e.stateNode.containerInfo),ri(e,n,t),tt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=il,il=16777216,ri(e,n,t),il=i):ri(e,n,t));break;default:ri(e,n,t)}}function wh(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];on=i,Ch(i,e)}wh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xh(e),e=e.sibling}function xh(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&Qt(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ar(e)):ll(e);break;default:ll(e)}}function Ar(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];on=i,Ch(i,e)}wh(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Qt(8,n,n.return),Ar(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Ar(n));break;default:Ar(n)}e=e.sibling}}function Ch(e,n){for(;on!==null;){var t=on;switch(t.tag){case 0:case 11:case 15:Qt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var i=t.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Yi(t.memoizedState.cache)}if(i=t.child,i!==null)i.return=t,on=i;else e:for(t=e;on!==null;){i=on;var s=i.sibling,u=i.return;if(hh(i),i===t){on=null;break e}if(s!==null){s.return=u,on=s;break e}on=u}}}var $y={getCacheForType:function(e){var n=fn(Je),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return fn(Je).controller.signal}},ev=typeof WeakMap=="function"?WeakMap:Map,ze=0,je=null,we=null,ke=0,_e=0,Nn=null,Wt=!1,oi=!1,Ks=!1,zt=0,Pe=0,Pt=0,Ea=0,Zs=0,Un=0,si=0,rl=null,Tn=null,Js=!1,Dr=0,kh=0,Rr=1/0,zr=null,Kt=null,ln=0,Zt=null,ui=null,Mt=0,$s=0,eu=null,Th=null,ol=0,nu=null;function Hn(){return(ze&2)!==0&&ke!==0?ke&-ke:M.T!==null?ou():jc()}function Eh(){if(Un===0)if((ke&536870912)===0||Ee){var e=Bl;Bl<<=1,(Bl&3932160)===0&&(Bl=262144),Un=e}else Un=536870912;return e=_n.current,e!==null&&(e.flags|=32),Un}function En(e,n,t){(e===je&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(ci(e,0),Jt(e,ke,Un,!1)),Di(e,t),((ze&2)===0||e!==je)&&(e===je&&((ze&2)===0&&(Ea|=t),Pe===4&&Jt(e,ke,Un,!1)),st(e))}function Ah(e,n,t){if((ze&6)!==0)throw Error(o(327));var i=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Ai(e,n),s=i?av(e,n):au(e,n,!0),u=i;do{if(s===0){oi&&!i&&Jt(e,n,0,!1);break}else{if(t=e.current.alternate,u&&!nv(t)){s=au(e,n,!1),u=!1;continue}if(s===2){if(u=n,e.errorRecoveryDisabledLanes&u)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){n=h;e:{var b=e;s=rl;var k=b.current.memoizedState.isDehydrated;if(k&&(ci(b,h).flags|=256),h=au(b,h,!1),h!==2){if(Ks&&!k){b.errorRecoveryDisabledLanes|=u,Ea|=u,s=4;break e}u=Tn,Tn=s,u!==null&&(Tn===null?Tn=u:Tn.push.apply(Tn,u))}s=h}if(u=!1,s!==2)continue}}if(s===1){ci(e,0),Jt(e,n,0,!0);break}e:{switch(i=e,u=s,u){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:Jt(i,n,Un,!Wt);break e;case 2:Tn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(s=Dr+300-gn(),10<s)){if(Jt(i,n,Un,!Wt),jl(i,0,!0)!==0)break e;Mt=n,i.timeoutHandle=ip(Dh.bind(null,i,t,Tn,zr,Js,n,Un,Ea,si,Wt,u,"Throttled",-0,0),s);break e}Dh(i,t,Tn,zr,Js,n,Un,Ea,si,Wt,u,null,-0,0)}}break}while(!0);st(e)}function Dh(e,n,t,i,s,u,h,b,k,R,N,G,z,_){if(e.timeoutHandle=-1,G=n.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gt},Sh(n,u,G);var $=(u&62914560)===u?Dr-gn():(u&4194048)===u?kh-gn():0;if($=Iv(G,$),$!==null){Mt=u,e.cancelPendingCommit=$(Uh.bind(null,e,n,u,t,i,s,h,b,k,N,G,null,z,_)),Jt(e,u,h,!R);return}}Uh(e,n,u,t,i,s,h,b,k)}function nv(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var i=0;i<t.length;i++){var s=t[i],u=s.getSnapshot;s=s.value;try{if(!Mn(u(),s))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jt(e,n,t,i){n&=~Zs,n&=~Ea,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var s=n;0<s;){var u=31-Ie(s),h=1<<u;i[u]=-1,s&=~h}t!==0&&Hc(e,t,n)}function Mr(){return(ze&6)===0?(sl(0),!1):!0}function tu(){if(we!==null){if(_e===0)var e=we.return;else e=we,St=ya=null,vs(e),ei=null,Fi=0,e=we;for(;e!==null;)lh(e.alternate,e),e=e.return;we=null}}function ci(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,wv(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Mt=0,tu(),je=e,we=t=vt(e.current,null),ke=n,_e=0,Nn=null,Wt=!1,oi=Ai(e,n),Ks=!1,si=Un=Zs=Ea=Pt=Pe=0,Tn=rl=null,Js=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var s=31-Ie(i),u=1<<s;n|=e[s],i&=~u}return zt=n,Jl(),t}function Rh(e,n){me=null,M.H=Ji,n===$a||n===rr?(n=Vf(),_e=3):n===rs?(n=Vf(),_e=4):_e=n===Ls?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Nn=n,we===null&&(Pe=1,Sr(e,Xn(n,e.current)))}function zh(){var e=_n.current;return e===null?!0:(ke&4194048)===ke?Kn===null:(ke&62914560)===ke||(ke&536870912)!==0?e===Kn:!1}function Mh(){var e=M.H;return M.H=Ji,e===null?Ji:e}function Oh(){var e=M.A;return M.A=$y,e}function Or(){Pe=4,Wt||(ke&4194048)!==ke&&_n.current!==null||(oi=!0),(Pt&134217727)===0&&(Ea&134217727)===0||je===null||Jt(je,ke,Un,!1)}function au(e,n,t){var i=ze;ze|=2;var s=Mh(),u=Oh();(je!==e||ke!==n)&&(zr=null,ci(e,n)),n=!1;var h=Pe;e:do try{if(_e!==0&&we!==null){var b=we,k=Nn;switch(_e){case 8:tu(),h=6;break e;case 3:case 2:case 9:case 6:_n.current===null&&(n=!0);var R=_e;if(_e=0,Nn=null,fi(e,b,k,R),t&&oi){h=0;break e}break;default:R=_e,_e=0,Nn=null,fi(e,b,k,R)}}tv(),h=Pe;break}catch(N){Rh(e,N)}while(!0);return n&&e.shellSuspendCounter++,St=ya=null,ze=i,M.H=s,M.A=u,we===null&&(je=null,ke=0,Jl()),h}function tv(){for(;we!==null;)_h(we)}function av(e,n){var t=ze;ze|=2;var i=Mh(),s=Oh();je!==e||ke!==n?(zr=null,Rr=gn()+500,ci(e,n)):oi=Ai(e,n);e:do try{if(_e!==0&&we!==null){n=we;var u=Nn;n:switch(_e){case 1:_e=0,Nn=null,fi(e,n,u,1);break;case 2:case 9:if(Gf(u)){_e=0,Nn=null,Lh(n);break}n=function(){_e!==2&&_e!==9||je!==e||(_e=7),st(e)},u.then(n,n);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:Gf(u)?(_e=0,Nn=null,Lh(n)):(_e=0,Nn=null,fi(e,n,u,7));break;case 5:var h=null;switch(we.tag){case 26:h=we.memoizedState;case 5:case 27:var b=we;if(h?bp(h):b.stateNode.complete){_e=0,Nn=null;var k=b.sibling;if(k!==null)we=k;else{var R=b.return;R!==null?(we=R,_r(R)):we=null}break n}}_e=0,Nn=null,fi(e,n,u,5);break;case 6:_e=0,Nn=null,fi(e,n,u,6);break;case 8:tu(),Pe=6;break e;default:throw Error(o(462))}}iv();break}catch(N){Rh(e,N)}while(!0);return St=ya=null,M.H=i,M.A=s,ze=t,we!==null?0:(je=null,ke=0,Jl(),Pe)}function iv(){for(;we!==null&&!go();)_h(we)}function _h(e){var n=ah(e.alternate,e,zt);e.memoizedProps=e.pendingProps,n===null?_r(e):we=n}function Lh(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Zd(t,n,n.pendingProps,n.type,void 0,ke);break;case 11:n=Zd(t,n,n.pendingProps,n.type.render,n.ref,ke);break;case 5:vs(n);default:lh(t,n),n=we=Of(n,zt),n=ah(t,n,zt)}e.memoizedProps=e.pendingProps,n===null?_r(e):we=n}function fi(e,n,t,i){St=ya=null,vs(n),ei=null,Fi=0;var s=n.return;try{if(Xy(e,s,n,t,ke)){Pe=1,Sr(e,Xn(t,e.current)),we=null;return}}catch(u){if(s!==null)throw we=s,u;Pe=1,Sr(e,Xn(t,e.current)),we=null;return}n.flags&32768?(Ee||i===1?e=!0:oi||(ke&536870912)!==0?e=!1:(Wt=e=!0,(i===2||i===9||i===3||i===6)&&(i=_n.current,i!==null&&i.tag===13&&(i.flags|=16384))),Nh(n,e)):_r(n)}function _r(e){var n=e;do{if((n.flags&32768)!==0){Nh(n,Wt);return}e=n.return;var t=Py(n.alternate,n,zt);if(t!==null){we=t;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);Pe===0&&(Pe=5)}function Nh(e,n){do{var t=Ky(e.alternate,e);if(t!==null){t.flags&=32767,we=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=t}while(e!==null);Pe=6,we=null}function Uh(e,n,t,i,s,u,h,b,k){e.cancelPendingCommit=null;do Lr();while(ln!==0);if((ze&6)!==0)throw Error(o(327));if(n!==null){if(n===e.current)throw Error(o(177));if(u=n.lanes|n.childLanes,u|=Vo,Hg(e,t,u,h,b,k),e===je&&(we=je=null,ke=0),ui=n,Zt=e,Mt=t,$s=u,eu=s,Th=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sv(de,function(){return qh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=M.T,M.T=null,s=X.p,X.p=2,h=ze,ze|=4;try{Zy(e,n,t)}finally{ze=h,X.p=s,M.T=i}}ln=1,Hh(),Bh(),Ih()}}function Hh(){if(ln===1){ln=0;var e=Zt,n=ui,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=M.T,M.T=null;var i=X.p;X.p=2;var s=ze;ze|=4;try{yh(n,e);var u=mu,h=Cf(e.containerInfo),b=u.focusedElem,k=u.selectionRange;if(h!==b&&b&&b.ownerDocument&&xf(b.ownerDocument.documentElement,b)){if(k!==null&&jo(b)){var R=k.start,N=k.end;if(N===void 0&&(N=R),"selectionStart"in b)b.selectionStart=R,b.selectionEnd=Math.min(N,b.value.length);else{var G=b.ownerDocument||document,z=G&&G.defaultView||window;if(z.getSelection){var _=z.getSelection(),$=b.textContent.length,se=Math.min(k.start,$),Be=k.end===void 0?se:Math.min(k.end,$);!_.extend&&se>Be&&(h=Be,Be=se,se=h);var A=wf(b,se),E=wf(b,Be);if(A&&E&&(_.rangeCount!==1||_.anchorNode!==A.node||_.anchorOffset!==A.offset||_.focusNode!==E.node||_.focusOffset!==E.offset)){var D=G.createRange();D.setStart(A.node,A.offset),_.removeAllRanges(),se>Be?(_.addRange(D),_.extend(E.node,E.offset)):(D.setEnd(E.node,E.offset),_.addRange(D))}}}}for(G=[],_=b;_=_.parentNode;)_.nodeType===1&&G.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<G.length;b++){var Y=G[b];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Xr=!!pu,mu=pu=null}finally{ze=s,X.p=i,M.T=t}}e.current=n,ln=2}}function Bh(){if(ln===2){ln=0;var e=Zt,n=ui,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=M.T,M.T=null;var i=X.p;X.p=2;var s=ze;ze|=4;try{dh(e,n.alternate,n)}finally{ze=s,X.p=i,M.T=t}}ln=3}}function Ih(){if(ln===4||ln===3){ln=0,yo();var e=Zt,n=ui,t=Mt,i=Th;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ln=5:(ln=0,ui=Zt=null,jh(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Kt=null),wo(t),n=n.stateNode,an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(yn,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=M.T,s=X.p,X.p=2,M.T=null;try{for(var u=e.onRecoverableError,h=0;h<i.length;h++){var b=i[h];u(b.value,{componentStack:b.stack})}}finally{M.T=n,X.p=s}}(Mt&3)!==0&&Lr(),st(e),s=e.pendingLanes,(t&261930)!==0&&(s&42)!==0?e===nu?ol++:(ol=0,nu=e):ol=0,sl(0)}}function jh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Yi(n)))}function Lr(){return Hh(),Bh(),Ih(),qh()}function qh(){if(ln!==5)return!1;var e=Zt,n=$s;$s=0;var t=wo(Mt),i=M.T,s=X.p;try{X.p=32>t?32:t,M.T=null,t=eu,eu=null;var u=Zt,h=Mt;if(ln=0,ui=Zt=null,Mt=0,(ze&6)!==0)throw Error(o(331));var b=ze;if(ze|=4,xh(u.current),bh(u,u.current,h,t),ze=b,sl(0,!1),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(yn,u)}catch{}return!0}finally{X.p=s,M.T=i,jh(e,n)}}function Yh(e,n,t){n=Xn(t,n),n=_s(e.stateNode,n,2),e=Ft(e,n,2),e!==null&&(Di(e,2),st(e))}function Le(e,n,t){if(e.tag===3)Yh(e,e,t);else for(;n!==null;){if(n.tag===3){Yh(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Kt===null||!Kt.has(i))){e=Xn(t,e),t=Gd(2),i=Ft(n,t,2),i!==null&&(Fd(t,i,n,e),Di(i,2),st(i));break}}n=n.return}}function iu(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new ev;var s=new Set;i.set(n,s)}else s=i.get(n),s===void 0&&(s=new Set,i.set(n,s));s.has(t)||(Ks=!0,s.add(t),e=lv.bind(null,e,n,t),n.then(e,e))}function lv(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,je===e&&(ke&t)===t&&(Pe===4||Pe===3&&(ke&62914560)===ke&&300>gn()-Dr?(ze&2)===0&&ci(e,0):Zs|=t,si===ke&&(si=0)),st(e)}function Gh(e,n){n===0&&(n=Uc()),e=pa(e,n),e!==null&&(Di(e,n),st(e))}function rv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gh(e,t)}function ov(e,n){var t=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(n),Gh(e,t)}function sv(e,n){return Oa(e,n)}var Nr=null,di=null,lu=!1,Ur=!1,ru=!1,$t=0;function st(e){e!==di&&e.next===null&&(di===null?Nr=di=e:di=di.next=e),Ur=!0,lu||(lu=!0,cv())}function sl(e,n){if(!ru&&Ur){ru=!0;do for(var t=!1,i=Nr;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var u=0;else{var h=i.suspendedLanes,b=i.pingedLanes;u=(1<<31-Ie(42|e)+1)-1,u&=s&~(h&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(t=!0,Qh(i,u))}else u=ke,u=jl(i,i===je?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Ai(i,u)||(t=!0,Qh(i,u));i=i.next}while(t);ru=!1}}function uv(){Fh()}function Fh(){Ur=lu=!1;var e=0;$t!==0&&Sv()&&(e=$t);for(var n=gn(),t=null,i=Nr;i!==null;){var s=i.next,u=Vh(i,n);u===0?(i.next=null,t===null?Nr=s:t.next=s,s===null&&(di=t)):(t=i,(e!==0||(u&3)!==0)&&(Ur=!0)),i=s}ln!==0&&ln!==5||sl(e),$t!==0&&($t=0)}function Vh(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var h=31-Ie(u),b=1<<h,k=s[h];k===-1?((b&t)===0||(b&i)!==0)&&(s[h]=Ug(b,n)):k<=n&&(e.expiredLanes|=b),u&=~b}if(n=je,t=ke,t=jl(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,t===0||e===n&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ei(i),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Ai(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(i!==null&&Ei(i),wo(t)){case 2:case 8:t=P;break;case 32:t=de;break;case 268435456:t=Oe;break;default:t=de}return i=Xh.bind(null,e),t=Oa(t,i),e.callbackPriority=n,e.callbackNode=t,n}return i!==null&&i!==null&&Ei(i),e.callbackPriority=2,e.callbackNode=null,2}function Xh(e,n){if(ln!==0&&ln!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Lr()&&e.callbackNode!==t)return null;var i=ke;return i=jl(e,e===je?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Ah(e,i,n),Vh(e,gn()),e.callbackNode!=null&&e.callbackNode===t?Xh.bind(null,e):null)}function Qh(e,n){if(Lr())return null;Ah(e,n,!0)}function cv(){xv(function(){(ze&6)!==0?Oa(j,uv):Fh()})}function ou(){if($t===0){var e=Za;e===0&&(e=Hl,Hl<<=1,(Hl&261888)===0&&(Hl=256)),$t=e}return $t}function Wh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fl(""+e)}function Ph(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function fv(e,n,t,i,s){if(n==="submit"&&t&&t.stateNode===s){var u=Wh((s[Sn]||null).action),h=i.submitter;h&&(n=(n=h[Sn]||null)?Wh(n.formAction):h.getAttribute("formAction"),n!==null&&(u=n,h=null));var b=new Wl("action","action",null,i,s);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if($t!==0){var k=h?Ph(s,h):new FormData(s);As(t,{pending:!0,data:k,method:s.method,action:u},null,k)}}else typeof u=="function"&&(b.preventDefault(),k=h?Ph(s,h):new FormData(s),As(t,{pending:!0,data:k,method:s.method,action:u},u,k))},currentTarget:s}]})}}for(var su=0;su<Fo.length;su++){var uu=Fo[su],dv=uu.toLowerCase(),hv=uu[0].toUpperCase()+uu.slice(1);nt(dv,"on"+hv)}nt(Ef,"onAnimationEnd"),nt(Af,"onAnimationIteration"),nt(Df,"onAnimationStart"),nt("dblclick","onDoubleClick"),nt("focusin","onFocus"),nt("focusout","onBlur"),nt(Ry,"onTransitionRun"),nt(zy,"onTransitionStart"),nt(My,"onTransitionCancel"),nt(Rf,"onTransitionEnd"),Ha("onMouseEnter",["mouseout","mouseover"]),Ha("onMouseLeave",["mouseout","mouseover"]),Ha("onPointerEnter",["pointerout","pointerover"]),Ha("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function Kh(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],s=i.event;i=i.listeners;e:{var u=void 0;if(n)for(var h=i.length-1;0<=h;h--){var b=i[h],k=b.instance,R=b.currentTarget;if(b=b.listener,k!==u&&s.isPropagationStopped())break e;u=b,s.currentTarget=R;try{u(s)}catch(N){Zl(N)}s.currentTarget=null,u=k}else for(h=0;h<i.length;h++){if(b=i[h],k=b.instance,R=b.currentTarget,b=b.listener,k!==u&&s.isPropagationStopped())break e;u=b,s.currentTarget=R;try{u(s)}catch(N){Zl(N)}s.currentTarget=null,u=k}}}}function xe(e,n){var t=n[xo];t===void 0&&(t=n[xo]=new Set);var i=e+"__bubble";t.has(i)||(Zh(n,e,2,!1),t.add(i))}function cu(e,n,t){var i=0;n&&(i|=4),Zh(t,e,i,n)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function fu(e){if(!e[Hr]){e[Hr]=!0,Gc.forEach(function(t){t!=="selectionchange"&&(pv.has(t)||cu(t,!1,e),cu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Hr]||(n[Hr]=!0,cu("selectionchange",!1,n))}}function Zh(e,n,t,i){switch(Ep(n)){case 2:var s=Yv;break;case 8:s=Gv;break;default:s=Eu}t=s.bind(null,n,t,e),s=void 0,!Mo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function du(e,n,t,i,s){var u=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var b=i.stateNode.containerInfo;if(b===s)break;if(h===4)for(h=i.return;h!==null;){var k=h.tag;if((k===3||k===4)&&h.stateNode.containerInfo===s)return;h=h.return}for(;b!==null;){if(h=La(b),h===null)return;if(k=h.tag,k===5||k===6||k===26||k===27){i=u=h;continue e}b=b.parentNode}}i=i.return}nf(function(){var R=u,N=Ro(t),G=[];e:{var z=zf.get(e);if(z!==void 0){var _=Wl,$=e;switch(e){case"keypress":if(Xl(t)===0)break e;case"keydown":case"keyup":_=oy;break;case"focusin":$="focus",_=No;break;case"focusout":$="blur",_=No;break;case"beforeblur":case"afterblur":_=No;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=cy;break;case Ef:case Af:case Df:_=Jg;break;case Rf:_=dy;break;case"scroll":case"scrollend":_=Qg;break;case"wheel":_=py;break;case"copy":case"cut":case"paste":_=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=of;break;case"toggle":case"beforetoggle":_=gy}var se=(n&4)!==0,Be=!se&&(e==="scroll"||e==="scrollend"),A=se?z!==null?z+"Capture":null:z;se=[];for(var E=R,D;E!==null;){var Y=E;if(D=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||D===null||A===null||(Y=Mi(E,A),Y!=null&&se.push(cl(E,Y,D))),Be)break;E=E.return}0<se.length&&(z=new _(z,$,null,t,N),G.push({event:z,listeners:se}))}}if((n&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",z&&t!==Do&&($=t.relatedTarget||t.fromElement)&&(La($)||$[_a]))break e;if((_||z)&&(z=N.window===N?N:(z=N.ownerDocument)?z.defaultView||z.parentWindow:window,_?($=t.relatedTarget||t.toElement,_=R,$=$?La($):null,$!==null&&(Be=f($),se=$.tag,$!==Be||se!==5&&se!==27&&se!==6)&&($=null)):(_=null,$=R),_!==$)){if(se=lf,Y="onMouseLeave",A="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(se=of,Y="onPointerLeave",A="onPointerEnter",E="pointer"),Be=_==null?z:zi(_),D=$==null?z:zi($),z=new se(Y,E+"leave",_,t,N),z.target=Be,z.relatedTarget=D,Y=null,La(N)===R&&(se=new se(A,E+"enter",$,t,N),se.target=D,se.relatedTarget=Be,Y=se),Be=Y,_&&$)n:{for(se=mv,A=_,E=$,D=0,Y=A;Y;Y=se(Y))D++;Y=0;for(var le=E;le;le=se(le))Y++;for(;0<D-Y;)A=se(A),D--;for(;0<Y-D;)E=se(E),Y--;for(;D--;){if(A===E||E!==null&&A===E.alternate){se=A;break n}A=se(A),E=se(E)}se=null}else se=null;_!==null&&Jh(G,z,_,se,!1),$!==null&&Be!==null&&Jh(G,Be,$,se,!0)}}e:{if(z=R?zi(R):window,_=z.nodeName&&z.nodeName.toLowerCase(),_==="select"||_==="input"&&z.type==="file")var De=mf;else if(hf(z))if(gf)De=Ey;else{De=ky;var ne=Cy}else _=z.nodeName,!_||_.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?R&&Ao(R.elementType)&&(De=mf):De=Ty;if(De&&(De=De(e,R))){pf(G,De,t,N);break e}ne&&ne(e,z,R),e==="focusout"&&R&&z.type==="number"&&R.memoizedProps.value!=null&&Eo(z,"number",z.value)}switch(ne=R?zi(R):window,e){case"focusin":(hf(ne)||ne.contentEditable==="true")&&(Ga=ne,qo=R,Ii=null);break;case"focusout":Ii=qo=Ga=null;break;case"mousedown":Yo=!0;break;case"contextmenu":case"mouseup":case"dragend":Yo=!1,kf(G,t,N);break;case"selectionchange":if(Dy)break;case"keydown":case"keyup":kf(G,t,N)}var ye;if(Ho)e:{switch(e){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ya?ff(e,t)&&(Te="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Te="onCompositionStart");Te&&(sf&&t.locale!=="ko"&&(Ya||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ya&&(ye=tf()):(Ht=N,Oo="value"in Ht?Ht.value:Ht.textContent,Ya=!0)),ne=Br(R,Te),0<ne.length&&(Te=new rf(Te,e,null,t,N),G.push({event:Te,listeners:ne}),ye?Te.data=ye:(ye=df(t),ye!==null&&(Te.data=ye)))),(ye=vy?by(e,t):Sy(e,t))&&(Te=Br(R,"onBeforeInput"),0<Te.length&&(ne=new rf("onBeforeInput","beforeinput",null,t,N),G.push({event:ne,listeners:Te}),ne.data=ye)),fv(G,e,R,t,N)}Kh(G,n)})}function cl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Br(e,n){for(var t=n+"Capture",i=[];e!==null;){var s=e,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=Mi(e,t),s!=null&&i.unshift(cl(e,s,u)),s=Mi(e,n),s!=null&&i.push(cl(e,s,u))),e.tag===3)return i;e=e.return}return[]}function mv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jh(e,n,t,i,s){for(var u=n._reactName,h=[];t!==null&&t!==i;){var b=t,k=b.alternate,R=b.stateNode;if(b=b.tag,k!==null&&k===i)break;b!==5&&b!==26&&b!==27||R===null||(k=R,s?(R=Mi(t,u),R!=null&&h.unshift(cl(t,R,k))):s||(R=Mi(t,u),R!=null&&h.push(cl(t,R,k)))),t=t.return}h.length!==0&&e.push({event:n,listeners:h})}var gv=/\r\n?/g,yv=/\u0000|\uFFFD/g;function $h(e){return(typeof e=="string"?e:""+e).replace(gv,`
`).replace(yv,"")}function ep(e,n){return n=$h(n),$h(e)===n}function He(e,n,t,i,s,u){switch(t){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||Ia(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&Ia(e,""+i);break;case"className":Yl(e,"class",i);break;case"tabIndex":Yl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Yl(e,t,i);break;case"style":$c(e,i,u);break;case"data":if(n!=="object"){Yl(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(t);break}i=Fl(""+i),e.setAttribute(t,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(t==="formAction"?(n!=="input"&&He(e,n,"name",s.name,s,null),He(e,n,"formEncType",s.formEncType,s,null),He(e,n,"formMethod",s.formMethod,s,null),He(e,n,"formTarget",s.formTarget,s,null)):(He(e,n,"encType",s.encType,s,null),He(e,n,"method",s.method,s,null),He(e,n,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(t);break}i=Fl(""+i),e.setAttribute(t,i);break;case"onClick":i!=null&&(e.onclick=gt);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(t=i.__html,t!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=t}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}t=Fl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,""+i):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":i===!0?e.setAttribute(t,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,i):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(t,i):e.removeAttribute(t);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(t):e.setAttribute(t,i);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ql(e,"popover",i);break;case"xlinkActuate":mt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":mt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":mt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":mt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":mt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":mt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":mt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":mt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":mt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ql(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Vg.get(t)||t,ql(e,t,i))}}function hu(e,n,t,i,s,u){switch(t){case"style":$c(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(t=i.__html,t!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=t}}break;case"children":typeof i=="string"?Ia(e,i):(typeof i=="number"||typeof i=="bigint")&&Ia(e,""+i);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(s=t.endsWith("Capture"),n=t.slice(2,s?t.length-7:void 0),u=e[Sn]||null,u=u!=null?u[t]:null,typeof u=="function"&&e.removeEventListener(n,u,s),typeof i=="function")){typeof u!="function"&&u!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,i,s);break e}t in e?e[t]=i:i===!0?e.setAttribute(t,""):ql(e,t,i)}}}function hn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var i=!1,s=!1,u;for(u in t)if(t.hasOwnProperty(u)){var h=t[u];if(h!=null)switch(u){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:He(e,n,u,h,t,null)}}s&&He(e,n,"srcSet",t.srcSet,t,null),i&&He(e,n,"src",t.src,t,null);return;case"input":xe("invalid",e);var b=u=h=s=null,k=null,R=null;for(i in t)if(t.hasOwnProperty(i)){var N=t[i];if(N!=null)switch(i){case"name":s=N;break;case"type":h=N;break;case"checked":k=N;break;case"defaultChecked":R=N;break;case"value":u=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,n));break;default:He(e,n,i,N,t,null)}}Pc(e,u,b,k,R,h,s,!1);return;case"select":xe("invalid",e),i=h=u=null;for(s in t)if(t.hasOwnProperty(s)&&(b=t[s],b!=null))switch(s){case"value":u=b;break;case"defaultValue":h=b;break;case"multiple":i=b;default:He(e,n,s,b,t,null)}n=u,t=h,e.multiple=!!i,n!=null?Ba(e,!!i,n,!1):t!=null&&Ba(e,!!i,t,!0);return;case"textarea":xe("invalid",e),u=s=i=null;for(h in t)if(t.hasOwnProperty(h)&&(b=t[h],b!=null))switch(h){case"value":i=b;break;case"defaultValue":s=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:He(e,n,h,b,t,null)}Zc(e,i,s,u);return;case"option":for(k in t)t.hasOwnProperty(k)&&(i=t[k],i!=null)&&(k==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":He(e,n,k,i,t,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(i=0;i<ul.length;i++)xe(ul[i],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in t)if(t.hasOwnProperty(R)&&(i=t[R],i!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:He(e,n,R,i,t,null)}return;default:if(Ao(n)){for(N in t)t.hasOwnProperty(N)&&(i=t[N],i!==void 0&&hu(e,n,N,i,t,void 0));return}}for(b in t)t.hasOwnProperty(b)&&(i=t[b],i!=null&&He(e,n,b,i,t,null))}function vv(e,n,t,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,h=null,b=null,k=null,R=null,N=null;for(_ in t){var G=t[_];if(t.hasOwnProperty(_)&&G!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":k=G;default:i.hasOwnProperty(_)||He(e,n,_,null,i,G)}}for(var z in i){var _=i[z];if(G=t[z],i.hasOwnProperty(z)&&(_!=null||G!=null))switch(z){case"type":u=_;break;case"name":s=_;break;case"checked":R=_;break;case"defaultChecked":N=_;break;case"value":h=_;break;case"defaultValue":b=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,n));break;default:_!==G&&He(e,n,z,_,i,G)}}To(e,h,b,k,R,N,u,s);return;case"select":_=h=b=z=null;for(u in t)if(k=t[u],t.hasOwnProperty(u)&&k!=null)switch(u){case"value":break;case"multiple":_=k;default:i.hasOwnProperty(u)||He(e,n,u,null,i,k)}for(s in i)if(u=i[s],k=t[s],i.hasOwnProperty(s)&&(u!=null||k!=null))switch(s){case"value":z=u;break;case"defaultValue":b=u;break;case"multiple":h=u;default:u!==k&&He(e,n,s,u,i,k)}n=b,t=h,i=_,z!=null?Ba(e,!!t,z,!1):!!i!=!!t&&(n!=null?Ba(e,!!t,n,!0):Ba(e,!!t,t?[]:"",!1));return;case"textarea":_=z=null;for(b in t)if(s=t[b],t.hasOwnProperty(b)&&s!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:He(e,n,b,null,i,s)}for(h in i)if(s=i[h],u=t[h],i.hasOwnProperty(h)&&(s!=null||u!=null))switch(h){case"value":z=s;break;case"defaultValue":_=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==u&&He(e,n,h,s,i,u)}Kc(e,z,_);return;case"option":for(var $ in t)z=t[$],t.hasOwnProperty($)&&z!=null&&!i.hasOwnProperty($)&&($==="selected"?e.selected=!1:He(e,n,$,null,i,z));for(k in i)z=i[k],_=t[k],i.hasOwnProperty(k)&&z!==_&&(z!=null||_!=null)&&(k==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":He(e,n,k,z,i,_));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in t)z=t[se],t.hasOwnProperty(se)&&z!=null&&!i.hasOwnProperty(se)&&He(e,n,se,null,i,z);for(R in i)if(z=i[R],_=t[R],i.hasOwnProperty(R)&&z!==_&&(z!=null||_!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,n));break;default:He(e,n,R,z,i,_)}return;default:if(Ao(n)){for(var Be in t)z=t[Be],t.hasOwnProperty(Be)&&z!==void 0&&!i.hasOwnProperty(Be)&&hu(e,n,Be,void 0,i,z);for(N in i)z=i[N],_=t[N],!i.hasOwnProperty(N)||z===_||z===void 0&&_===void 0||hu(e,n,N,z,i,_);return}}for(var A in t)z=t[A],t.hasOwnProperty(A)&&z!=null&&!i.hasOwnProperty(A)&&He(e,n,A,null,i,z);for(G in i)z=i[G],_=t[G],!i.hasOwnProperty(G)||z===_||z==null&&_==null||He(e,n,G,z,i,_)}function np(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),i=0;i<t.length;i++){var s=t[i],u=s.transferSize,h=s.initiatorType,b=s.duration;if(u&&b&&np(h)){for(h=0,b=s.responseEnd,i+=1;i<t.length;i++){var k=t[i],R=k.startTime;if(R>b)break;var N=k.transferSize,G=k.initiatorType;N&&np(G)&&(k=k.responseEnd,h+=N*(k<b?1:(b-R)/(k-R)))}if(--i,n+=8*(u+h)/(s.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pu=null,mu=null;function Ir(e){return e.nodeType===9?e:e.ownerDocument}function tp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ap(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function gu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yu=null;function Sv(){var e=window.event;return e&&e.type==="popstate"?e===yu?!1:(yu=e,!0):(yu=null,!1)}var ip=typeof setTimeout=="function"?setTimeout:void 0,wv=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,xv=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(e){return lp.resolve(null).then(e).catch(Cv)}:ip;function Cv(e){setTimeout(function(){throw e})}function ea(e){return e==="head"}function rp(e,n){var t=n,i=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"||t==="/&"){if(i===0){e.removeChild(s),gi(n);return}i--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")i++;else if(t==="html")fl(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,fl(t);for(var u=t.firstChild;u;){var h=u.nextSibling,b=u.nodeName;u[Ri]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=h}}else t==="body"&&fl(e.ownerDocument.body);t=s}while(t);gi(n)}function op(e,n){var t=e;e=0;do{var i=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=i}while(t)}function vu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":vu(t),Co(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function kv(e,n,t,i){for(;e.nodeType===1;){var s=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ri])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Zn(e.nextSibling),e===null)break}return null}function Tv(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zn(e.nextSibling),e===null))return null;return e}function sp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zn(e.nextSibling),e===null))return null;return e}function bu(e){return e.data==="$?"||e.data==="$~"}function Su(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ev(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var i=function(){n(),t.removeEventListener("DOMContentLoaded",i)};t.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Zn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var wu=null;function up(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Zn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function cp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function fp(e,n,t){switch(n=Ir(t),e){case"html":if(e=n.documentElement,!e)throw Error(o(452));return e;case"head":if(e=n.head,!e)throw Error(o(453));return e;case"body":if(e=n.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function fl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Co(e)}var Jn=new Map,dp=new Set;function jr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ot=X.d;X.d={f:Av,r:Dv,D:Rv,C:zv,L:Mv,m:Ov,X:Lv,S:_v,M:Nv};function Av(){var e=Ot.f(),n=Mr();return e||n}function Dv(e){var n=Na(e);n!==null&&n.tag===5&&n.type==="form"?Rd(n):Ot.r(e)}var hi=typeof document>"u"?null:document;function hp(e,n,t){var i=hi;if(i&&typeof n=="string"&&n){var s=Fn(n);s='link[rel="'+e+'"][href="'+s+'"]',typeof t=="string"&&(s+='[crossorigin="'+t+'"]'),dp.has(s)||(dp.add(s),e={rel:e,crossOrigin:t,href:n},i.querySelector(s)===null&&(n=i.createElement("link"),hn(n,"link",e),rn(n),i.head.appendChild(n)))}}function Rv(e){Ot.D(e),hp("dns-prefetch",e,null)}function zv(e,n){Ot.C(e,n),hp("preconnect",e,n)}function Mv(e,n,t){Ot.L(e,n,t);var i=hi;if(i&&e&&n){var s='link[rel="preload"][as="'+Fn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(s+='[imagesrcset="'+Fn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(s+='[imagesizes="'+Fn(t.imageSizes)+'"]')):s+='[href="'+Fn(e)+'"]';var u=s;switch(n){case"style":u=pi(e);break;case"script":u=mi(e)}Jn.has(u)||(e=v({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Jn.set(u,e),i.querySelector(s)!==null||n==="style"&&i.querySelector(dl(u))||n==="script"&&i.querySelector(hl(u))||(n=i.createElement("link"),hn(n,"link",e),rn(n),i.head.appendChild(n)))}}function Ov(e,n){Ot.m(e,n);var t=hi;if(t&&e){var i=n&&typeof n.as=="string"?n.as:"script",s='link[rel="modulepreload"][as="'+Fn(i)+'"][href="'+Fn(e)+'"]',u=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=mi(e)}if(!Jn.has(u)&&(e=v({rel:"modulepreload",href:e},n),Jn.set(u,e),t.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(hl(u)))return}i=t.createElement("link"),hn(i,"link",e),rn(i),t.head.appendChild(i)}}}function _v(e,n,t){Ot.S(e,n,t);var i=hi;if(i&&e){var s=Ua(i).hoistableStyles,u=pi(e);n=n||"default";var h=s.get(u);if(!h){var b={loading:0,preload:null};if(h=i.querySelector(dl(u)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Jn.get(u))&&xu(e,t);var k=h=i.createElement("link");rn(k),hn(k,"link",e),k._p=new Promise(function(R,N){k.onload=R,k.onerror=N}),k.addEventListener("load",function(){b.loading|=1}),k.addEventListener("error",function(){b.loading|=2}),b.loading|=4,qr(h,n,i)}h={type:"stylesheet",instance:h,count:1,state:b},s.set(u,h)}}}function Lv(e,n){Ot.X(e,n);var t=hi;if(t&&e){var i=Ua(t).hoistableScripts,s=mi(e),u=i.get(s);u||(u=t.querySelector(hl(s)),u||(e=v({src:e,async:!0},n),(n=Jn.get(s))&&Cu(e,n),u=t.createElement("script"),rn(u),hn(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(s,u))}}function Nv(e,n){Ot.M(e,n);var t=hi;if(t&&e){var i=Ua(t).hoistableScripts,s=mi(e),u=i.get(s);u||(u=t.querySelector(hl(s)),u||(e=v({src:e,async:!0,type:"module"},n),(n=Jn.get(s))&&Cu(e,n),u=t.createElement("script"),rn(u),hn(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(s,u))}}function pp(e,n,t,i){var s=(s=ie.current)?jr(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=pi(t.href),t=Ua(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=pi(t.href);var u=Ua(s).hoistableStyles,h=u.get(e);if(h||(s=s.ownerDocument||s,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,h),(u=s.querySelector(dl(e)))&&!u._p&&(h.instance=u,h.state.loading=5),Jn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Jn.set(e,t),u||Uv(s,e,t,h.state))),n&&i===null)throw Error(o(528,""));return h}if(n&&i!==null)throw Error(o(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mi(t),t=Ua(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function pi(e){return'href="'+Fn(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function mp(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Uv(e,n,t,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),hn(n,"link",t),rn(n),e.head.appendChild(n))}function mi(e){return'[src="'+Fn(e)+'"]'}function hl(e){return"script[async]"+e}function gp(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+Fn(t.href)+'"]');if(i)return n.instance=i,rn(i),i;var s=v({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),rn(i),hn(i,"style",s),qr(i,t.precedence,e),n.instance=i;case"stylesheet":s=pi(t.href);var u=e.querySelector(dl(s));if(u)return n.state.loading|=4,n.instance=u,rn(u),u;i=mp(t),(s=Jn.get(s))&&xu(i,s),u=(e.ownerDocument||e).createElement("link"),rn(u);var h=u;return h._p=new Promise(function(b,k){h.onload=b,h.onerror=k}),hn(u,"link",i),n.state.loading|=4,qr(u,t.precedence,e),n.instance=u;case"script":return u=mi(t.src),(s=e.querySelector(hl(u)))?(n.instance=s,rn(s),s):(i=t,(s=Jn.get(u))&&(i=v({},t),Cu(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),rn(s),hn(s,"link",i),e.head.appendChild(s),n.instance=s);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,qr(i,t.precedence,e));return n.instance}function qr(e,n,t){for(var i=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,u=s,h=0;h<i.length;h++){var b=i[h];if(b.dataset.precedence===n)u=b;else if(u!==s)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function xu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Cu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yr=null;function yp(e,n,t){if(Yr===null){var i=new Map,s=Yr=new Map;s.set(t,i)}else s=Yr,i=s.get(t),i||(i=new Map,s.set(t,i));if(i.has(e))return i;for(i.set(e,null),t=t.getElementsByTagName(e),s=0;s<t.length;s++){var u=t[s];if(!(u[Ri]||u[un]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(n)||"";h=e+h;var b=i.get(h);b?b.push(u):i.set(h,[u])}}return i}function vp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Hv(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bv(e,n,t,i){if(t.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=pi(i.href),u=n.querySelector(dl(s));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Gr.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=u,rn(u);return}u=n.ownerDocument||n,i=mp(i),(s=Jn.get(s))&&xu(i,s),u=u.createElement("link"),rn(u);var h=u;h._p=new Promise(function(b,k){h.onload=b,h.onerror=k}),hn(u,"link",i),t.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Gr.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var ku=0;function Iv(e,n){return e.stylesheets&&e.count===0&&Vr(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var i=setTimeout(function(){if(e.stylesheets&&Vr(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&ku===0&&(ku=62500*bv());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vr(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>ku?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Gr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fr=null;function Vr(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fr=new Map,n.forEach(jv,e),Fr=null,Gr.call(e))}function jv(e,n){if(!(n.state.loading&4)){var t=Fr.get(e);if(t)var i=t.get(null);else{t=new Map,Fr.set(e,t);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var h=s[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(t.set(h.dataset.precedence,h),i=h)}i&&t.set(null,i)}s=n.instance,h=s.getAttribute("data-precedence"),u=t.get(h)||i,u===i&&t.set(null,s),t.set(h,s),this.count++,i=Gr.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),u?u.parentNode.insertBefore(s,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),n.state.loading|=4}}var pl={$$typeof:F,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function qv(e,n,t,i,s,u,h,b,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.hiddenUpdates=bo(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Sp(e,n,t,i,s,u,h,b,k,R,N,G){return e=new qv(e,n,t,h,k,R,N,G,b),n=1,u===!0&&(n|=24),u=On(3,null,null,n),e.current=u,u.stateNode=e,n=as(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:i,isDehydrated:t,cache:n},os(u),e}function wp(e){return e?(e=Xa,e):Xa}function xp(e,n,t,i,s,u){s=wp(s),i.context===null?i.context=s:i.pendingContext=s,i=Gt(n),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Ft(e,i,n),t!==null&&(En(t,e,n),Xi(t,e,n))}function Cp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Tu(e,n){Cp(e,n),(e=e.alternate)&&Cp(e,n)}function kp(e){if(e.tag===13||e.tag===31){var n=pa(e,67108864);n!==null&&En(n,e,67108864),Tu(e,67108864)}}function Tp(e){if(e.tag===13||e.tag===31){var n=Hn();n=So(n);var t=pa(e,n);t!==null&&En(t,e,n),Tu(e,n)}}var Xr=!0;function Yv(e,n,t,i){var s=M.T;M.T=null;var u=X.p;try{X.p=2,Eu(e,n,t,i)}finally{X.p=u,M.T=s}}function Gv(e,n,t,i){var s=M.T;M.T=null;var u=X.p;try{X.p=8,Eu(e,n,t,i)}finally{X.p=u,M.T=s}}function Eu(e,n,t,i){if(Xr){var s=Au(i);if(s===null)du(e,n,i,Qr,t),Ap(e,i);else if(Vv(s,e,n,t,i))i.stopPropagation();else if(Ap(e,i),n&4&&-1<Fv.indexOf(e)){for(;s!==null;){var u=Na(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=ua(u.pendingLanes);if(h!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;h;){var k=1<<31-Ie(h);b.entanglements[1]|=k,h&=~k}st(u),(ze&6)===0&&(Rr=gn()+500,sl(0))}}break;case 31:case 13:b=pa(u,2),b!==null&&En(b,u,2),Mr(),Tu(u,2)}if(u=Au(i),u===null&&du(e,n,i,Qr,t),u===s)break;s=u}s!==null&&i.stopPropagation()}else du(e,n,i,null,t)}}function Au(e){return e=Ro(e),Du(e)}var Qr=null;function Du(e){if(Qr=null,e=La(e),e!==null){var n=f(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=d(n),e!==null)return e;e=null}else if(t===31){if(e=m(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Qr=e,null}function Ep(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vo()){case j:return 2;case P:return 8;case de:case Se:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var Ru=!1,na=null,ta=null,aa=null,ml=new Map,gl=new Map,ia=[],Fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ap(e,n){switch(e){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":ta=null;break;case"mouseover":case"mouseout":aa=null;break;case"pointerover":case"pointerout":ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(n.pointerId)}}function yl(e,n,t,i,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:u,targetContainers:[s]},n!==null&&(n=Na(n),n!==null&&kp(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Vv(e,n,t,i,s){switch(n){case"focusin":return na=yl(na,e,n,t,i,s),!0;case"dragenter":return ta=yl(ta,e,n,t,i,s),!0;case"mouseover":return aa=yl(aa,e,n,t,i,s),!0;case"pointerover":var u=s.pointerId;return ml.set(u,yl(ml.get(u)||null,e,n,t,i,s)),!0;case"gotpointercapture":return u=s.pointerId,gl.set(u,yl(gl.get(u)||null,e,n,t,i,s)),!0}return!1}function Dp(e){var n=La(e.target);if(n!==null){var t=f(n);if(t!==null){if(n=t.tag,n===13){if(n=d(t),n!==null){e.blockedOn=n,qc(e.priority,function(){Tp(t)});return}}else if(n===31){if(n=m(t),n!==null){e.blockedOn=n,qc(e.priority,function(){Tp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Au(e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);Do=i,t.target.dispatchEvent(i),Do=null}else return n=Na(t),n!==null&&kp(n),e.blockedOn=t,!1;n.shift()}return!0}function Rp(e,n,t){Wr(e)&&t.delete(n)}function Xv(){Ru=!1,na!==null&&Wr(na)&&(na=null),ta!==null&&Wr(ta)&&(ta=null),aa!==null&&Wr(aa)&&(aa=null),ml.forEach(Rp),gl.forEach(Rp)}function Pr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ru||(Ru=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Xv)))}var Kr=null;function zp(e){Kr!==e&&(Kr=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Kr===e&&(Kr=null);for(var n=0;n<e.length;n+=3){var t=e[n],i=e[n+1],s=e[n+2];if(typeof i!="function"){if(Du(i||t)===null)continue;break}var u=Na(t);u!==null&&(e.splice(n,3),n-=3,As(u,{pending:!0,data:s,method:t.method,action:i},i,s))}}))}function gi(e){function n(k){return Pr(k,e)}na!==null&&Pr(na,e),ta!==null&&Pr(ta,e),aa!==null&&Pr(aa,e),ml.forEach(n),gl.forEach(n);for(var t=0;t<ia.length;t++){var i=ia[t];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ia.length&&(t=ia[0],t.blockedOn===null);)Dp(t),t.blockedOn===null&&ia.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(i=0;i<t.length;i+=3){var s=t[i],u=t[i+1],h=s[Sn]||null;if(typeof u=="function")h||zp(t);else if(h){var b=null;if(u&&u.hasAttribute("formAction")){if(s=u,h=u[Sn]||null)b=h.formAction;else if(Du(s)!==null)continue}else b=h.action;typeof b=="function"?t[i+1]=b:(t.splice(i,3),i-=3),zp(t)}}}function Mp(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(h){return s=h})},focusReset:"manual",scroll:"manual"})}function n(){s!==null&&(s(),s=null),i||setTimeout(t,20)}function t(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),s!==null&&(s(),s=null)}}}function zu(e){this._internalRoot=e}Zr.prototype.render=zu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));var t=n.current,i=Hn();xp(t,i,e,n,null,null)},Zr.prototype.unmount=zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xp(e.current,2,null,e,null,null),Mr(),n[_a]=null}};function Zr(e){this._internalRoot=e}Zr.prototype.unstable_scheduleHydration=function(e){if(e){var n=jc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ia.length&&n!==0&&n<ia[t].priority;t++);ia.splice(t,0,e),t===0&&Dp(e)}};var Op=l.version;if(Op!=="19.2.3")throw Error(o(527,Op,"19.2.3"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Qv={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jr.isDisabled&&Jr.supportsFiber)try{yn=Jr.inject(Qv),an=Jr}catch{}}return bl.createRoot=function(e,n){if(!c(e))throw Error(o(299));var t=!1,i="",s=Id,u=jd,h=qd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),n=Sp(e,1,!1,null,null,t,i,null,s,u,h,Mp),e[_a]=n.current,fu(e),new zu(n)},bl.hydrateRoot=function(e,n,t){if(!c(e))throw Error(o(299));var i=!1,s="",u=Id,h=jd,b=qd,k=null;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError),t.formState!==void 0&&(k=t.formState)),n=Sp(e,1,!0,n,t??null,i,s,k,u,h,b,Mp),n.context=wp(null),t=n.current,i=Hn(),i=So(i),s=Gt(i),s.callback=null,Ft(t,s,i),t=i,n.current.lanes=t,Di(n,t),st(n),e[_a]=n.current,fu(e),new Zr(n)},bl.version="19.2.3",bl}var Yp;function ib(){if(Yp)return _u.exports;Yp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),_u.exports=ab(),_u.exports}var lb=ib();const rb=uo(lb);var Gp="popstate";function ob(a={}){function l(c,f){let{pathname:d="/",search:m="",hash:g=""}=Aa(c.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),ec("",{pathname:d,search:m,hash:g},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function r(c,f){let d=c.document.querySelector("base"),m="";if(d&&d.getAttribute("href")){let g=c.location.href,p=g.indexOf("#");m=p===-1?g:g.slice(0,p)}return m+"#"+(typeof f=="string"?f:Dl(f))}function o(c,f){jn(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return ub(l,r,o,a)}function Qe(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function jn(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function sb(){return Math.random().toString(36).substring(2,10)}function Fp(a,l){return{usr:a.state,key:a.key,idx:l}}function ec(a,l,r=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?Aa(l):l,state:r,key:l&&l.key||o||sb()}}function Dl({pathname:a="/",search:l="",hash:r=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),r&&r!=="#"&&(a+=r.charAt(0)==="#"?r:"#"+r),a}function Aa(a){let l={};if(a){let r=a.indexOf("#");r>=0&&(l.hash=a.substring(r),a=a.substring(0,r));let o=a.indexOf("?");o>=0&&(l.search=a.substring(o),a=a.substring(0,o)),a&&(l.pathname=a)}return l}function ub(a,l,r,o={}){let{window:c=document.defaultView,v5Compat:f=!1}=o,d=c.history,m="POP",g=null,p=y();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function y(){return(d.state||{idx:null}).idx}function v(){m="POP";let H=y(),O=H==null?null:H-p;p=H,g&&g({action:m,location:L.location,delta:O})}function x(H,O){m="PUSH";let V=ec(L.location,H,O);r&&r(V,H),p=y()+1;let F=Fp(V,p),re=L.createHref(V);try{d.pushState(F,"",re)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;c.location.assign(re)}f&&g&&g({action:m,location:L.location,delta:1})}function S(H,O){m="REPLACE";let V=ec(L.location,H,O);r&&r(V,H),p=y();let F=Fp(V,p),re=L.createHref(V);d.replaceState(F,"",re),f&&g&&g({action:m,location:L.location,delta:0})}function U(H){return cb(H)}let L={get action(){return m},get location(){return a(c,d)},listen(H){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(Gp,v),g=H,()=>{c.removeEventListener(Gp,v),g=null}},createHref(H){return l(c,H)},createURL:U,encodeLocation(H){let O=U(H);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:x,replace:S,go(H){return d.go(H)}};return L}function cb(a,l=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(r,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Dl(a);return o=o.replace(/ $/,"%20"),!l&&o.startsWith("//")&&(o=r+o),new URL(o,r)}function _m(a,l,r="/"){return fb(a,l,r,!1)}function fb(a,l,r,o){let c=typeof l=="string"?Aa(l):l,f=Lt(c.pathname||"/",r);if(f==null)return null;let d=Lm(a);db(d);let m=null;for(let g=0;m==null&&g<d.length;++g){let p=Cb(f);m=wb(d[g],p,o)}return m}function Lm(a,l=[],r=[],o="",c=!1){let f=(d,m,g=c,p)=>{let y={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(o)&&g)return;Qe(y.relativePath.startsWith(o),`Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(o.length)}let v=_t([o,y.relativePath]),x=r.concat(y);d.children&&d.children.length>0&&(Qe(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Lm(d.children,l,x,v,g)),!(d.path==null&&!d.index)&&l.push({path:v,score:bb(v,d.index),routesMeta:x})};return a.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))f(d,m);else for(let g of Nm(d.path))f(d,m,!0,g)}),l}function Nm(a){let l=a.split("/");if(l.length===0)return[];let[r,...o]=l,c=r.endsWith("?"),f=r.replace(/\?$/,"");if(o.length===0)return c?[f,""]:[f];let d=Nm(o.join("/")),m=[];return m.push(...d.map(g=>g===""?f:[f,g].join("/"))),c&&m.push(...d),m.map(g=>a.startsWith("/")&&g===""?"/":g)}function db(a){a.sort((l,r)=>l.score!==r.score?r.score-l.score:Sb(l.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var hb=/^:[\w-]+$/,pb=3,mb=2,gb=1,yb=10,vb=-2,Vp=a=>a==="*";function bb(a,l){let r=a.split("/"),o=r.length;return r.some(Vp)&&(o+=vb),l&&(o+=mb),r.filter(c=>!Vp(c)).reduce((c,f)=>c+(hb.test(f)?pb:f===""?gb:yb),o)}function Sb(a,l){return a.length===l.length&&a.slice(0,-1).every((o,c)=>o===l[c])?a[a.length-1]-l[l.length-1]:0}function wb(a,l,r=!1){let{routesMeta:o}=a,c={},f="/",d=[];for(let m=0;m<o.length;++m){let g=o[m],p=m===o.length-1,y=f==="/"?l:l.slice(f.length)||"/",v=ro({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},y),x=g.route;if(!v&&p&&r&&!o[o.length-1].route.index&&(v=ro({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},y)),!v)return null;Object.assign(c,v.params),d.push({params:c,pathname:_t([f,v.pathname]),pathnameBase:Ab(_t([f,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(f=_t([f,v.pathnameBase]))}return d}function ro(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,o]=xb(a.path,a.caseSensitive,a.end),c=l.match(r);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:o.reduce((p,{paramName:y,isOptional:v},x)=>{if(y==="*"){let U=m[x]||"";d=f.slice(0,f.length-U.length).replace(/(.)\/+$/,"$1")}const S=m[x];return v&&!S?p[y]=void 0:p[y]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:d,pattern:a}}function xb(a,l=!1,r=!0){jn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,g)=>(o.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),o]}function Cb(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return jn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function Lt(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let r=l.endsWith("/")?l.length-1:l.length,o=a.charAt(r);return o&&o!=="/"?null:a.slice(r)||"/"}var Um=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kb=a=>Um.test(a);function Tb(a,l="/"){let{pathname:r,search:o="",hash:c=""}=typeof a=="string"?Aa(a):a,f;if(r)if(kb(r))f=r;else{if(r.includes("//")){let d=r;r=r.replace(/\/\/+/g,"/"),jn(!1,`Pathnames cannot have embedded double slashes - normalizing ${d} -> ${r}`)}r.startsWith("/")?f=Xp(r.substring(1),"/"):f=Xp(r,l)}else f=l;return{pathname:f,search:Db(o),hash:Rb(c)}}function Xp(a,l){let r=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?r.length>1&&r.pop():c!=="."&&r.push(c)}),r.length>1?r.join("/"):"/"}function Hu(a,l,r,o){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Eb(a){return a.filter((l,r)=>r===0||l.route.path&&l.route.path.length>0)}function pc(a){let l=Eb(a);return l.map((r,o)=>o===l.length-1?r.pathname:r.pathnameBase)}function mc(a,l,r,o=!1){let c;typeof a=="string"?c=Aa(a):(c={...a},Qe(!c.pathname||!c.pathname.includes("?"),Hu("?","pathname","search",c)),Qe(!c.pathname||!c.pathname.includes("#"),Hu("#","pathname","hash",c)),Qe(!c.search||!c.search.includes("#"),Hu("#","search","hash",c)));let f=a===""||c.pathname==="",d=f?"/":c.pathname,m;if(d==null)m=r;else{let v=l.length-1;if(!o&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),v-=1;c.pathname=x.join("/")}m=v>=0?l[v]:"/"}let g=Tb(c,m),p=d&&d!=="/"&&d.endsWith("/"),y=(f||d===".")&&r.endsWith("/");return!g.pathname.endsWith("/")&&(p||y)&&(g.pathname+="/"),g}var _t=a=>a.join("/").replace(/\/\/+/g,"/"),Ab=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Db=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Rb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,zb=class{constructor(a,l,r,o=!1){this.status=a,this.statusText=l||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Mb(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Ob(a){return a.map(l=>l.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Hm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bm(a,l){let r=a;if(typeof r!="string"||!Um.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let o=r,c=!1;if(Hm)try{let f=new URL(window.location.href),d=r.startsWith("//")?new URL(f.protocol+r):new URL(r),m=Lt(d.pathname,l);d.origin===f.origin&&m!=null?r=m+d.search+d.hash:c=!0}catch{jn(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:c,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Im=["POST","PUT","PATCH","DELETE"];new Set(Im);var _b=["GET",...Im];new Set(_b);var wi=q.createContext(null);wi.displayName="DataRouter";var co=q.createContext(null);co.displayName="DataRouterState";var Lb=q.createContext(!1),jm=q.createContext({isTransitioning:!1});jm.displayName="ViewTransition";var Nb=q.createContext(new Map);Nb.displayName="Fetchers";var Ub=q.createContext(null);Ub.displayName="Await";var qn=q.createContext(null);qn.displayName="Navigation";var zl=q.createContext(null);zl.displayName="Location";var it=q.createContext({outlet:null,matches:[],isDataRoute:!1});it.displayName="Route";var gc=q.createContext(null);gc.displayName="RouteError";var qm="REACT_ROUTER_ERROR",Hb="REDIRECT",Bb="ROUTE_ERROR_RESPONSE";function Ib(a){if(a.startsWith(`${qm}:${Hb}:{`))try{let l=JSON.parse(a.slice(28));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.location=="string"&&typeof l.reloadDocument=="boolean"&&typeof l.replace=="boolean")return l}catch{}}function jb(a){if(a.startsWith(`${qm}:${Bb}:{`))try{let l=JSON.parse(a.slice(40));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string")return new zb(l.status,l.statusText,l.data)}catch{}}function qb(a,{relative:l}={}){Qe(xi(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=q.useContext(qn),{hash:c,pathname:f,search:d}=Ml(a,{relative:l}),m=f;return r!=="/"&&(m=f==="/"?r:_t([r,f])),o.createHref({pathname:m,search:d,hash:c})}function xi(){return q.useContext(zl)!=null}function oa(){return Qe(xi(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(zl).location}var Ym="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Gm(a){q.useContext(qn).static||q.useLayoutEffect(a)}function Fm(){let{isDataRoute:a}=q.useContext(it);return a?nS():Yb()}function Yb(){Qe(xi(),"useNavigate() may be used only in the context of a <Router> component.");let a=q.useContext(wi),{basename:l,navigator:r}=q.useContext(qn),{matches:o}=q.useContext(it),{pathname:c}=oa(),f=JSON.stringify(pc(o)),d=q.useRef(!1);return Gm(()=>{d.current=!0}),q.useCallback((g,p={})=>{if(jn(d.current,Ym),!d.current)return;if(typeof g=="number"){r.go(g);return}let y=mc(g,JSON.parse(f),c,p.relative==="path");a==null&&l!=="/"&&(y.pathname=y.pathname==="/"?l:_t([l,y.pathname])),(p.replace?r.replace:r.push)(y,p.state,p)},[l,r,f,c,a])}q.createContext(null);function Gb(){let{matches:a}=q.useContext(it),l=a[a.length-1];return l?l.params:{}}function Ml(a,{relative:l}={}){let{matches:r}=q.useContext(it),{pathname:o}=oa(),c=JSON.stringify(pc(r));return q.useMemo(()=>mc(a,JSON.parse(c),o,l==="path"),[a,c,o,l])}function Fb(a,l){return Vm(a,l)}function Vm(a,l,r,o,c){Qe(xi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=q.useContext(qn),{matches:d}=q.useContext(it),m=d[d.length-1],g=m?m.params:{},p=m?m.pathname:"/",y=m?m.pathnameBase:"/",v=m&&m.route;{let V=v&&v.path||"";Qm(p,!v||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let x=oa(),S;if(l){let V=typeof l=="string"?Aa(l):l;Qe(y==="/"||V.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${V.pathname}" was given in the \`location\` prop.`),S=V}else S=x;let U=S.pathname||"/",L=U;if(y!=="/"){let V=y.replace(/^\//,"").split("/");L="/"+U.replace(/^\//,"").split("/").slice(V.length).join("/")}let H=_m(a,{pathname:L});jn(v||H!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),jn(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=Pb(H&&H.map(V=>Object.assign({},V,{params:Object.assign({},g,V.params),pathname:_t([y,f.encodeLocation?f.encodeLocation(V.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?y:_t([y,f.encodeLocation?f.encodeLocation(V.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathnameBase])})),d,r,o,c);return l&&O?q.createElement(zl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},O):O}function Vb(){let a=eS(),l=Mb(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:f},"ErrorBoundary")," or"," ",q.createElement("code",{style:f},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},l),r?q.createElement("pre",{style:c},r):null,d)}var Xb=q.createElement(Vb,null),Xm=class extends q.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.onError?this.props.onError(a,l):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const r=jb(a.digest);r&&(a=r)}let l=a!==void 0?q.createElement(it.Provider,{value:this.props.routeContext},q.createElement(gc.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?q.createElement(Qb,{error:a},l):l}};Xm.contextType=Lb;var Bu=new WeakMap;function Qb({children:a,error:l}){let{basename:r}=q.useContext(qn);if(typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){let o=Ib(l.digest);if(o){let c=Bu.get(l);if(c)throw c;let f=Bm(o.location,r);if(Hm&&!Bu.get(l))if(f.isExternal||o.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:o.replace}));throw Bu.set(l,d),d}return q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return a}function Wb({routeContext:a,match:l,children:r}){let o=q.useContext(wi);return o&&o.static&&o.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=l.route.id),q.createElement(it.Provider,{value:a},r)}function Pb(a,l=[],r=null,o=null,c=null){if(a==null){if(!r)return null;if(r.errors)a=r.matches;else if(l.length===0&&!r.initialized&&r.matches.length>0)a=r.matches;else return null}let f=a,d=r?.errors;if(d!=null){let y=f.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);Qe(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,y+1))}let m=!1,g=-1;if(r)for(let y=0;y<f.length;y++){let v=f[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(g=y),v.route.id){let{loaderData:x,errors:S}=r,U=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||U){m=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}let p=r&&o?(y,v)=>{o(y,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Ob(r.matches),errorInfo:v})}:void 0;return f.reduceRight((y,v,x)=>{let S,U=!1,L=null,H=null;r&&(S=d&&v.route.id?d[v.route.id]:void 0,L=v.route.errorElement||Xb,m&&(g<0&&x===0?(Qm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,H=null):g===x&&(U=!0,H=v.route.hydrateFallbackElement||null)));let O=l.concat(f.slice(0,x+1)),V=()=>{let F;return S?F=L:U?F=H:v.route.Component?F=q.createElement(v.route.Component,null):v.route.element?F=v.route.element:F=y,q.createElement(Wb,{match:v,routeContext:{outlet:y,matches:O,isDataRoute:r!=null},children:F})};return r&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?q.createElement(Xm,{location:r.location,revalidation:r.revalidation,component:L,error:S,children:V(),routeContext:{outlet:null,matches:O,isDataRoute:!0},onError:p}):V()},null)}function yc(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kb(a){let l=q.useContext(wi);return Qe(l,yc(a)),l}function Zb(a){let l=q.useContext(co);return Qe(l,yc(a)),l}function Jb(a){let l=q.useContext(it);return Qe(l,yc(a)),l}function vc(a){let l=Jb(a),r=l.matches[l.matches.length-1];return Qe(r.route.id,`${a} can only be used on routes that contain a unique "id"`),r.route.id}function $b(){return vc("useRouteId")}function eS(){let a=q.useContext(gc),l=Zb("useRouteError"),r=vc("useRouteError");return a!==void 0?a:l.errors?.[r]}function nS(){let{router:a}=Kb("useNavigate"),l=vc("useNavigate"),r=q.useRef(!1);return Gm(()=>{r.current=!0}),q.useCallback(async(c,f={})=>{jn(r.current,Ym),r.current&&(typeof c=="number"?await a.navigate(c):await a.navigate(c,{fromRouteId:l,...f}))},[a,l])}var Qp={};function Qm(a,l,r){!l&&!Qp[a]&&(Qp[a]=!0,jn(!1,r))}q.memo(tS);function tS({routes:a,future:l,state:r,onError:o}){return Vm(a,void 0,r,o,l)}function aS({to:a,replace:l,state:r,relative:o}){Qe(xi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=q.useContext(qn);jn(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=q.useContext(it),{pathname:d}=oa(),m=Fm(),g=mc(a,pc(f),d,o==="path"),p=JSON.stringify(g);return q.useEffect(()=>{m(JSON.parse(p),{replace:l,state:r,relative:o})},[m,p,o,l,r]),null}function nc(a){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function iS({basename:a="/",children:l=null,location:r,navigationType:o="POP",navigator:c,static:f=!1,unstable_useTransitions:d}){Qe(!xi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=a.replace(/^\/*/,"/"),g=q.useMemo(()=>({basename:m,navigator:c,static:f,unstable_useTransitions:d,future:{}}),[m,c,f,d]);typeof r=="string"&&(r=Aa(r));let{pathname:p="/",search:y="",hash:v="",state:x=null,key:S="default"}=r,U=q.useMemo(()=>{let L=Lt(p,m);return L==null?null:{location:{pathname:L,search:y,hash:v,state:x,key:S},navigationType:o}},[m,p,y,v,x,S,o]);return jn(U!=null,`<Router basename="${m}"> is not able to match the URL "${p}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:q.createElement(qn.Provider,{value:g},q.createElement(zl.Provider,{children:l,value:U}))}function lS({children:a,location:l}){return Fb(tc(a),l)}function tc(a,l=[]){let r=[];return q.Children.forEach(a,(o,c)=>{if(!q.isValidElement(o))return;let f=[...l,c];if(o.type===q.Fragment){r.push.apply(r,tc(o.props.children,f));return}Qe(o.type===nc,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=tc(o.props.children,f)),r.push(d)}),r}var ao="get",io="application/x-www-form-urlencoded";function fo(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function rS(a){return fo(a)&&a.tagName.toLowerCase()==="button"}function oS(a){return fo(a)&&a.tagName.toLowerCase()==="form"}function sS(a){return fo(a)&&a.tagName.toLowerCase()==="input"}function uS(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function cS(a,l){return a.button===0&&(!l||l==="_self")&&!uS(a)}var $r=null;function fS(){if($r===null)try{new FormData(document.createElement("form"),0),$r=!1}catch{$r=!0}return $r}var dS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Iu(a){return a!=null&&!dS.has(a)?(jn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${io}"`),null):a}function hS(a,l){let r,o,c,f,d;if(oS(a)){let m=a.getAttribute("action");o=m?Lt(m,l):null,r=a.getAttribute("method")||ao,c=Iu(a.getAttribute("enctype"))||io,f=new FormData(a)}else if(rS(a)||sS(a)&&(a.type==="submit"||a.type==="image")){let m=a.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||m.getAttribute("action");if(o=g?Lt(g,l):null,r=a.getAttribute("formmethod")||m.getAttribute("method")||ao,c=Iu(a.getAttribute("formenctype"))||Iu(m.getAttribute("enctype"))||io,f=new FormData(m,a),!fS()){let{name:p,type:y,value:v}=a;if(y==="image"){let x=p?`${p}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else p&&f.append(p,v)}}else{if(fo(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ao,o=null,c=io,d=a}return f&&c==="text/plain"&&(d=f,f=void 0),{action:o,method:r.toLowerCase(),encType:c,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bc(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function pS(a,l,r,o){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${o}`:c.pathname=`${c.pathname}.${o}`:c.pathname==="/"?c.pathname=`_root.${o}`:l&&Lt(c.pathname,l)==="/"?c.pathname=`${l.replace(/\/$/,"")}/_root.${o}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${o}`,c}async function mS(a,l){if(a.id in l)return l[a.id];try{let r=await import(a.module);return l[a.id]=r,r}catch(r){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gS(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function yS(a,l,r){let o=await Promise.all(a.map(async c=>{let f=l.routes[c.route.id];if(f){let d=await mS(f,r);return d.links?d.links():[]}return[]}));return wS(o.flat(1).filter(gS).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Wp(a,l,r,o,c,f){let d=(g,p)=>r[p]?g.route.id!==r[p].route.id:!0,m=(g,p)=>r[p].pathname!==g.pathname||r[p].route.path?.endsWith("*")&&r[p].params["*"]!==g.params["*"];return f==="assets"?l.filter((g,p)=>d(g,p)||m(g,p)):f==="data"?l.filter((g,p)=>{let y=o.routes[g.route.id];if(!y||!y.hasLoader)return!1;if(d(g,p)||m(g,p))return!0;if(g.route.shouldRevalidate){let v=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function vS(a,l,{includeHydrateFallback:r}={}){return bS(a.map(o=>{let c=l.routes[o.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),r&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function bS(a){return[...new Set(a)]}function SS(a){let l={},r=Object.keys(a).sort();for(let o of r)l[o]=a[o];return l}function wS(a,l){let r=new Set;return new Set(l),a.reduce((o,c)=>{let f=JSON.stringify(SS(c));return r.has(f)||(r.add(f),o.push({key:f,link:c})),o},[])}function Wm(){let a=q.useContext(wi);return bc(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function xS(){let a=q.useContext(co);return bc(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Sc=q.createContext(void 0);Sc.displayName="FrameworkContext";function Pm(){let a=q.useContext(Sc);return bc(a,"You must render this element inside a <HydratedRouter> element"),a}function CS(a,l){let r=q.useContext(Sc),[o,c]=q.useState(!1),[f,d]=q.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:p,onMouseLeave:y,onTouchStart:v}=l,x=q.useRef(null);q.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let L=O=>{O.forEach(V=>{d(V.isIntersecting)})},H=new IntersectionObserver(L,{threshold:.5});return x.current&&H.observe(x.current),()=>{H.disconnect()}}},[a]),q.useEffect(()=>{if(o){let L=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(L)}}},[o]);let S=()=>{c(!0)},U=()=>{c(!1),d(!1)};return r?a!=="intent"?[f,x,{}]:[f,x,{onFocus:Sl(m,S),onBlur:Sl(g,U),onMouseEnter:Sl(p,S),onMouseLeave:Sl(y,U),onTouchStart:Sl(v,S)}]:[!1,x,{}]}function Sl(a,l){return r=>{a&&a(r),r.defaultPrevented||l(r)}}function kS({page:a,...l}){let{router:r}=Wm(),o=q.useMemo(()=>_m(r.routes,a,r.basename),[r.routes,a,r.basename]);return o?q.createElement(ES,{page:a,matches:o,...l}):null}function TS(a){let{manifest:l,routeModules:r}=Pm(),[o,c]=q.useState([]);return q.useEffect(()=>{let f=!1;return yS(a,l,r).then(d=>{f||c(d)}),()=>{f=!0}},[a,l,r]),o}function ES({page:a,matches:l,...r}){let o=oa(),{future:c,manifest:f,routeModules:d}=Pm(),{basename:m}=Wm(),{loaderData:g,matches:p}=xS(),y=q.useMemo(()=>Wp(a,l,p,f,o,"data"),[a,l,p,f,o]),v=q.useMemo(()=>Wp(a,l,p,f,o,"assets"),[a,l,p,f,o]),x=q.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let L=new Set,H=!1;if(l.forEach(V=>{let F=f.routes[V.route.id];!F||!F.hasLoader||(!y.some(re=>re.route.id===V.route.id)&&V.route.id in g&&d[V.route.id]?.shouldRevalidate||F.hasClientLoader?H=!0:L.add(V.route.id))}),L.size===0)return[];let O=pS(a,m,c.unstable_trailingSlashAwareDataRequests,"data");return H&&L.size>0&&O.searchParams.set("_routes",l.filter(V=>L.has(V.route.id)).map(V=>V.route.id).join(",")),[O.pathname+O.search]},[m,c.unstable_trailingSlashAwareDataRequests,g,o,f,y,l,a,d]),S=q.useMemo(()=>vS(v,f),[v,f]),U=TS(v);return q.createElement(q.Fragment,null,x.map(L=>q.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...r})),S.map(L=>q.createElement("link",{key:L,rel:"modulepreload",href:L,...r})),U.map(({key:L,link:H})=>q.createElement("link",{key:L,nonce:r.nonce,...H})))}function AS(...a){return l=>{a.forEach(r=>{typeof r=="function"?r(l):r!=null&&(r.current=l)})}}var DS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{DS&&(window.__reactRouterVersion="7.12.0")}catch{}function RS({basename:a,children:l,unstable_useTransitions:r,window:o}){let c=q.useRef();c.current==null&&(c.current=ob({window:o,v5Compat:!0}));let f=c.current,[d,m]=q.useState({action:f.action,location:f.location}),g=q.useCallback(p=>{r===!1?m(p):q.startTransition(()=>m(p))},[r]);return q.useLayoutEffect(()=>f.listen(g),[f,g]),q.createElement(iS,{basename:a,children:l,location:d.location,navigationType:d.action,navigator:f,unstable_useTransitions:r})}var Km=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zm=q.forwardRef(function({onClick:l,discover:r="render",prefetch:o="none",relative:c,reloadDocument:f,replace:d,state:m,target:g,to:p,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:x,...S},U){let{basename:L,unstable_useTransitions:H}=q.useContext(qn),O=typeof p=="string"&&Km.test(p),V=Bm(p,L);p=V.to;let F=qb(p,{relative:c}),[re,oe,B]=CS(o,S),K=OS(p,{replace:d,state:m,target:g,preventScrollReset:y,relative:c,viewTransition:v,unstable_defaultShouldRevalidate:x,unstable_useTransitions:H});function ce(ge){l&&l(ge),ge.defaultPrevented||K(ge)}let fe=q.createElement("a",{...S,...B,href:V.absoluteURL||F,onClick:V.isExternal||f?l:ce,ref:AS(U,oe),target:g,"data-discover":!O&&r==="render"?"true":void 0});return re&&!O?q.createElement(q.Fragment,null,fe,q.createElement(kS,{page:F})):fe});Zm.displayName="Link";var Jm=q.forwardRef(function({"aria-current":l="page",caseSensitive:r=!1,className:o="",end:c=!1,style:f,to:d,viewTransition:m,children:g,...p},y){let v=Ml(d,{relative:p.relative}),x=oa(),S=q.useContext(co),{navigator:U,basename:L}=q.useContext(qn),H=S!=null&&HS(v)&&m===!0,O=U.encodeLocation?U.encodeLocation(v).pathname:v.pathname,V=x.pathname,F=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(V=V.toLowerCase(),F=F?F.toLowerCase():null,O=O.toLowerCase()),F&&L&&(F=Lt(F,L)||F);const re=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let oe=V===O||!c&&V.startsWith(O)&&V.charAt(re)==="/",B=F!=null&&(F===O||!c&&F.startsWith(O)&&F.charAt(O.length)==="/"),K={isActive:oe,isPending:B,isTransitioning:H},ce=oe?l:void 0,fe;typeof o=="function"?fe=o(K):fe=[o,oe?"active":null,B?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let ge=typeof f=="function"?f(K):f;return q.createElement(Zm,{...p,"aria-current":ce,className:fe,ref:y,style:ge,to:d,viewTransition:m},typeof g=="function"?g(K):g)});Jm.displayName="NavLink";var zS=q.forwardRef(({discover:a="render",fetcherKey:l,navigate:r,reloadDocument:o,replace:c,state:f,method:d=ao,action:m,onSubmit:g,relative:p,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:x,...S},U)=>{let{unstable_useTransitions:L}=q.useContext(qn),H=NS(),O=US(m,{relative:p}),V=d.toLowerCase()==="get"?"get":"post",F=typeof m=="string"&&Km.test(m),re=oe=>{if(g&&g(oe),oe.defaultPrevented)return;oe.preventDefault();let B=oe.nativeEvent.submitter,K=B?.getAttribute("formmethod")||d,ce=()=>H(B||oe.currentTarget,{fetcherKey:l,method:K,navigate:r,replace:c,state:f,relative:p,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:x});L&&r!==!1?q.startTransition(()=>ce()):ce()};return q.createElement("form",{ref:U,method:V,action:O,onSubmit:o?g:re,...S,"data-discover":!F&&a==="render"?"true":void 0})});zS.displayName="Form";function MS(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $m(a){let l=q.useContext(wi);return Qe(l,MS(a)),l}function OS(a,{target:l,replace:r,state:o,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:m,unstable_useTransitions:g}={}){let p=Fm(),y=oa(),v=Ml(a,{relative:f});return q.useCallback(x=>{if(cS(x,l)){x.preventDefault();let S=r!==void 0?r:Dl(y)===Dl(v),U=()=>p(a,{replace:S,state:o,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:m});g?q.startTransition(()=>U()):U()}},[y,p,v,r,o,l,a,c,f,d,m,g])}var _S=0,LS=()=>`__${String(++_S)}__`;function NS(){let{router:a}=$m("useSubmit"),{basename:l}=q.useContext(qn),r=$b(),o=a.fetch,c=a.navigate;return q.useCallback(async(f,d={})=>{let{action:m,method:g,encType:p,formData:y,body:v}=hS(f,l);if(d.navigate===!1){let x=d.fetcherKey||LS();await o(x,r,d.action||m,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:v,formMethod:d.method||g,formEncType:d.encType||p,flushSync:d.flushSync})}else await c(d.action||m,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:v,formMethod:d.method||g,formEncType:d.encType||p,replace:d.replace,state:d.state,fromRouteId:r,flushSync:d.flushSync,viewTransition:d.viewTransition})},[o,c,l,r])}function US(a,{relative:l}={}){let{basename:r}=q.useContext(qn),o=q.useContext(it);Qe(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),f={...Ml(a||".",{relative:l})},d=oa();if(a==null){f.search=d.search;let m=new URLSearchParams(f.search),g=m.getAll("index");if(g.some(y=>y==="")){m.delete("index"),g.filter(v=>v).forEach(v=>m.append("index",v));let y=m.toString();f.search=y?`?${y}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(f.pathname=f.pathname==="/"?r:_t([r,f.pathname])),Dl(f)}function HS(a,{relative:l}={}){let r=q.useContext(jm);Qe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=$m("useViewTransitionState"),c=Ml(a,{relative:l});if(!r.isTransitioning)return!1;let f=Lt(r.currentLocation.pathname,o)||r.currentLocation.pathname,d=Lt(r.nextLocation.pathname,o)||r.nextLocation.pathname;return ro(c.pathname,d)!=null||ro(c.pathname,f)!=null}const BS=`# 10 Grep Commands That'll Make You Feel Like a Linux Wizard


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
-   \`|\`  OR operator (with  \`-E\`  flag)`,IS=`# 5 Automation Scripts Every Linux User Should Know


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

This script cleans your system and keeps a record of when it happened and what was done. It removes unnecessary files, helping your Linux system stay clean, efficient, and free of disk space problems.`,jS='# Git Essentials and Cheat Sheet.\n\n### 🟦 Basic Git Commands\n\n1.  `git init`  – Initialize a Git Repository  \n    Creates a new Git repository in the current project folder.  \n    `git init`\n2.  `git clone`  – Copy a Remote Repository  \n    Downloads a complete copy of a repo from GitHub or any Git server.  \n    `git clone https://github.com/user/repo.git`\n3.  `git status`  – View Working Directory Status  \n    Shows changes you made, staged files, and untracked files.  \n    `git status`\n4.  `git add`  – Stage Files for Commit  \n    Moves files to the staging area.  \n    `git add file.txt`  \n    `git add .`  # add all changes\n5.  `git commit`  – Save Changes to Repo  \n    Records staged changes.  \n    `git commit -m "Initial commit"`\n6.  `git config`  – Configure Git Username & Email  \n    Sets author identity for commits.  \n    📌 Example:  \n    `git config --global user.name "Your Name"`  \n    `git config --global user.email "your@email.com"`\n7.  `git log`  – View Commit History  \n    Shows commit messages, authors, and timestamps.  \n    `git log`\n8.  `git show`  – Show Details of a Commit  \n    Displays changes, metadata, and diffs for a commit.  \n    `git show <commit-hash>`\n9.  `git diff`  – Compare Changes  \n    Shows what changed before committing or between commits.  \n    `git diff`  # unstaged changes  \n    `git diff --staged`  # staged changes\n10.  `git reset`  – Unstage or Undo Commits  \n    Undo staged files or move HEAD to a previous commit.  \n    `git reset HEAD file.txt`\n\n### 🟩 Branching & Merging\n\n11.  `git branch`  – List/Create Branches  \n    `git branch`  # list branches  \n    `git branch feature-login`  # create new branch\n12.  `git checkout`  – Switch Branches  \n    Older method for switching branches.  \n    `git checkout feature-login`\n13.  `git switch`  – Modern Branch Switch Command  \n    `git switch feature-login`\n14.  `git merge`  – Merge Branches  \n    Combines one branch into another.  \n    `git merge feature-login`\n15.  `git rebase`  – Reapply Commits  \n    Cleans commit history when merging.  \n    `git rebase main`\n16.  `git cherry-pick`  – Apply a Specific Commit  \n    Used to apply a single commit from another branch.  \n    `git cherry-pick <commit-hash>`\n\n### 🟧 Remote Repository Commands\n\n17.  `git remote`  – Manage Remote URLs  \n    Add or check remotes.  \n    `git remote add origin https://github.com/user/repo.git`\n18.  `git push`  – Upload Changes to Remote  \n    Sends commits to GitHub or other servers.  \n    `git push origin main`\n19.  `git pull`  – Download & Merge Changes  \n    Fetches remote updates and merges them.  \n    📌 Example:  \n    `git pull origin main`\n20.  `git fetch`  – Download Changes (No Merge)  \n    Updates local metadata without affecting working files.  \n    `git fetch origin`\n21.  `git remote -v`  – Show Remote URLs  \n    Displays all connected remotes.  \n    `git remote -v`\n\n### 🟨 Stashing & Cleaning\n\n22.  `git stash`  – Save Uncommitted Work  \n    Temporarily store changes without committing.  \n    📌 Example:  \n    `git stash`\n23.  `git stash pop`  – Restore Stashed Work  \n    📌 Example:  \n    `git stash pop`\n24.  `git stash list`  – View Stashes  \n    `git stash list`\n25.  `git clean`  – Remove Untracked Files  \n    `git clean -f`\n\n### 🟪 Tagging\n\n26.  `git tag`  – Create a Tag  \n    Usually used for release versions.  \n    `git tag -a v1.0 -m "Version 1.0"`\n27.  Delete a Tag  \n    📌 Example:  \n    `git tag -d v1.0`\n28.  Push Tags to Remote  \n    📌 Example:  \n    `git push origin --tags`\n\n### 🟥 Advanced Git Commands\n\n29.  `git bisect`  – Find Bug Introduced Commit  \n    Binary search through commits to find where a bug started.  \n    `git bisect start`\n30.  `git blame`  – Show Line-by-Line Authors  \n    Shows who changed each line of a file.  \n    `git blame file.txt`\n31.  `git reflog`  – View All Reference Logs  \n    Shows all changes to HEAD (including deleted commits).  \n    `git reflog`\n32.  `git submodule`  – Manage Submodules  \n    Used when a project includes another Git repo inside it.  \n    `git submodule add https://github.com/user/repo.git`\n33.  `git archive`  – Create a Zip Archive of Repo  \n    📌 Example:  \n    `git archive --format=zip HEAD > archive.zip`\n34.  `git gc`  – Garbage Collection  \n    Cleans up unnecessary files and optimizes the repo.  \n    `git gc`\n\n### 🟦 GitHub-Specific (GH CLI) Commands\n\n35.  `gh auth login`  – Login to GitHub  \n    `gh auth login`\n36.  `gh repo clone`  – Clone Repo from GitHub  \n    📌 Example:  \n    `gh repo clone user/repo`\n37.  `gh issue list`  – List GitHub Issues  \n    `gh issue list`\n38.  `gh pr create`  – Create Pull Request  \n    `gh pr create --title "New Feature" --body "Description of the feature"`\n39.  `gh repo create`  – Create a New GitHub Repository  \n    `gh repo create my-repo`',qS=`# How to Convert FLAC Music to Apple Lossless and Sync to iPhone

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
`,YS=`# Server Security Response Guide

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

That means attempted exploitation, not just scanning.`,GS=`# How to Answer a CTO (How You SOUND Matters)

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
Calm, structured thinking under pressure.`,FS=`## Section 1: Linux Basics

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
    
5.  Add user to group? usermod -aG`,VS=`# Linux Security Cheat Sheet

## Table of Contents

-   Part 1 — The Essentials
-   Fundamental hygiene and startup configurations.

-   System Updates (apt, yum, dnf)
-   User Management (useradd, usermod)
-   Password Policies (chage, passwd)
-   Locking Root Account (passwd -l root)
-   Basic SSH Config (Port, PermitRootLogin)
-   Firewall Basics (ufw, firewalld)
-   Disabling Services (systemctl disable)
-   File Permissions 101 (chmod, chown)
-   Time Synchronization (timedatectl, ntp)
-   Checking Active Sessions (w, last, who)
-   Shell History Hygiene (history -c)

-   Part 2 — Advanced Hardening (Production Ready)
-   Turning your server into a fortress with pro-level tools.

-   Mastering Sudoers (visudo, NOPASSWD)
-   Advanced SSH Security (SSH Keys, 2FA)
-   Intrusion Prevention (fail2ban, jail.local)
-   Immutable Files (chattr +i, lsattr)
-   Access Control Lists (setfacl, getfacl)
-   Port & Socket Auditing (ss -tulpn, lsof)
-   Kernel Hardening (sysctl.conf, IP Spoofing)
-   Process Limits (ulimit, limits.conf)
-   Log Analysis & Forensics (journalctl, /var/log)
-   Rootkit Scanning (rkhunter, lynis)
-   Cron Job Security (crontab, /etc/cron.*)
-   Legal Warning Banners (/etc/issue.net)

## Part 1 — The Essentials (Day 0 Setup)

Fundamental hygiene and startup configurations. Perform these steps immediately after provisioning a new server.

1.  ### System Updates
    
    Security starts with patching. Never run a server with outdated packages.
    
    \`\`\`
    # Debian / Ubuntu
    sudo apt update && sudo apt upgrade -y
    
    # RHEL / CentOS / AlmaLinux
    sudo yum update -y
    \`\`\`
    
2.  ### User Management
    
    Never run applications or log in as root. Create a privileged user instead.
    
    \`\`\`
    # Create user 'oz' with a home directory and bash shell
    sudo useradd -m -s /bin/bash oz
    
    # Set a strong password
    sudo passwd oz
    
    # Grant Sudo privileges
    # Debian/Ubuntu:
    sudo usermod -aG sudo oz
    
    # RHEL/CentOS:
    sudo usermod -aG wheel oz
    \`\`\`
    
3.  ### Password Policies
    
    Force users to change passwords regularly and expire old accounts.
    
    \`\`\`
    # Check current password aging for user 'oz'
    sudo chage -l oz
    
    # Force password change every 90 days
    sudo chage -M 90 oz
    
    # Lock account after 30 days of inactivity
    sudo chage -I 30 oz
    \`\`\`
    
4.  ### Locking Root Account
    
    Once your sudo user is ready, lock the root account to prevent direct login.
    
    \`\`\`
    # Lock the root account (disables password login)
    sudo passwd -l root
    
    # (Optional) To unlock if absolutely necessary:
    # sudo passwd -u root
    \`\`\`
    
5.  ### Basic SSH Config
    
    Edit /etc/ssh/sshd_config to secure the front door. Always backup config first: cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
    
    \`\`\`
    # Open config
    sudo nano /etc/ssh/sshd_config
    \`\`\`
    
    #### Key Configuration Changes:
    
    \`\`\`
    Port 2222                   # Change default port (Security through obscurity)
    PermitRootLogin no          # The most important line!
    PasswordAuthentication no   # Disable if using SSH Keys (Recommended)
    PermitEmptyPasswords no     # Never allow empty passwords
    MaxAuthTries 3              # Disconnect after 3 failed attempts
    LoginGraceTime 60           # Disconnect if login takes > 60 secs
    # Restart SSH to apply
    sudo systemctl restart sshd
    \`\`\`
    
6.  ### Firewall Basics
    
    Close all doors, then open only what you need.
    
    #### Option A: UFW (Ubuntu/Debian — Recommended for simplicity)
    
    \`\`\`
    # 1. Deny everything incoming by default
    sudo ufw default deny incoming
    
    # 2. Allow outgoing traffic
    sudo ufw default allow outgoing
    
    # 3. Allow SSH (Adjust port if you changed it in Step 5!)
    sudo ufw allow 2222/tcp
    
    # 4. Allow Web Traffic (If needed)
    sudo ufw allow 80/tcp
    sudo ufw allow 443/tcp
    
    # 5. Enable Firewall
    sudo ufw enable
    \`\`\`
    
    #### Option B: Firewalld (RHEL/CentOS)
    
    \`\`\`
    # Add SSH port (if custom)
    sudo firewall-cmd --permanent --add-port=2222/tcp
    
    # Reload firewall
    sudo firewall-cmd --reload
    \`\`\`
    
7.  ### Disabling Services
    
    Reduce attack surface by stopping unused services.
    
    \`\`\`
    # List all enabled services
    systemctl list-unit-files --state=enabled
    
    # Stop and disable a service (e.g., postfix if not needed)
    sudo systemctl stop postfix
    sudo systemctl disable postfix
    \`\`\`
    
8.  ### File Permissions 101
    
    Standardize permissions to prevent unauthorized access.
    
    \`\`\`
    # 755: Owner(RWX), Group(R-X), Others(R-X) -> Directories/Scripts
    chmod 755 script.sh
    
    # 644: Owner(RW), Group(R), Others(R) -> Config files
    chmod 644 config.yaml
    
    # 600: Owner(RW), Others(None) -> Private Keys (CRITICAL)
    chmod 600 id_rsa
    \`\`\`
    
9.  ### Time Synchronization
    
    Logs are useless if timestamps are wrong. Ensure NTP is running.
    
    \`\`\`
    # Enable NTP synchronization
    sudo timedatectl set-ntp on
    
    # Check status
    timedatectl status
    \`\`\`
    
10.  ### Checking Active Sessions
    
    Before maintenance, check if anyone else is connected.
    
    \`\`\`
    # Who is logged in right now?
    w
    
    # Who logged in recently?
    last -n 10
    
    # Who failed to log in? (Brute-force check)
    sudo lastb -n 10
    \`\`\`
    
11.  ### Shell History Hygiene
    
    Don't leave sensitive commands (like passwords passed in CLI) in your history.
    
    \`\`\`
    # Clear current session history
    history -c
    
    # Clear history file permanently
    cat /dev/null > ~/.bash_history
    
    # Prevent history logging for current session
    export HISTSIZE=0
    \`\`\`
    

## Part 2 — Advanced Hardening (Production Ready)

Turning your server into a fortress with pro-level tools and configurations.

12.  ### Mastering Sudoers (visudo)
    
    Fine-tune privileges. Never edit /etc/sudoers directly; always use visudo to prevent syntax errors.
    
    \`\`\`
    sudo visudo
    \`\`\`
    
    #### Common Configurations:
    
    \`\`\`
    # 1. Passwordless Sudo (Use with caution, good for scripts/automation)
    # User 'deploy' can run any command without password
    deploy ALL=(ALL) NOPASSWD: ALL
    
    # 2. Command Restriction (Least Privilege)
    # User 'junior' can ONLY restart Nginx, nothing else
    junior ALL=(ALL) /usr/bin/systemctl restart nginx
    
    # 3. Group Privileges
    # Members of 'sysadmin' group have full access
    %sysadmin ALL=(ALL) ALL
    \`\`\`
    
13.  ### Advanced SSH Security
    
    Move beyond passwords. Use Keys and Multi-Factor Authentication (MFA).
    
    #### Step A: Enforce SSH Keys Only
    
    Ensure you have copied your key (ssh-copy-id) before doing this!
    
    \`\`\`
    # In /etc/ssh/sshd_config
    PasswordAuthentication no
    PubkeyAuthentication yes
    ChallengeResponseAuthentication no
    \`\`\`
    
    #### Step B: 2FA (Google Authenticator)
    
    Add a second layer of defense.
    
    \`\`\`
    sudo dnf install libpam-google-authenticator
    google-authenticator  # Follow on-screen setup
    \`\`\`
    
14.  ### Intrusion Prevention (Fail2Ban)
    
    Automatically ban IPs that show malicious behavior (brute-force).
    
    \`\`\`
    # Install
    sudo dnf install fail2ban -y
    
    # Create a local config (Never edit jail.conf directly)
    sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
    sudo nano /etc/fail2ban/jail.local
    \`\`\`
    
    #### Key jail.local Settings:
    
    \`\`\`
    [sshd]
    enabled = true
    port    = ssh (or your custom port 2222)
    logpath = %(sshd_log)s
    backend = %(sshd_backend)s
    maxretry = 3
    bantime = 1h
    # Restart and Check Status
    sudo systemctl restart fail2ban
    sudo fail2ban-client status sshd
    \`\`\`
    
15.  ### Immutable Files (chattr)
    
    The Hidden Weapon. Make critical files undeletable, even by root.
    
    \`\`\`
    # Lock the file (Immutable bit)
    sudo chattr +i /etc/passwd
    sudo chattr +i /etc/shadow
    
    # Verify attributes (Look for 'i')
    lsattr /etc/passwd
    
    # Try to delete it (Will fail: Operation not permitted)
    rm /etc/passwd
    
    # Unlock the file (To make edits)
    sudo chattr -i /etc/passwd
    \`\`\`
    
16.  ### Access Control Lists (ACLs)
    
    When standard chmod (User/Group/Other) isn't enough.
    
    \`\`\`
    # Grant 'rwx' strictly to user 'john' on a specific file,
    # regardless of who owns it.
    setfacl -m u:john:rwx /var/www/html/index.php
    
    # Remove ACL
    setfacl -x u:john /var/www/html/index.php
    # View ACLs
    getfacl /var/www/html/index.php
    \`\`\`
    
17.  ### Port & Socket Auditing
    
    Detect backdoors or unauthorized listeners.
    
    \`\`\`
    # Show all listening ports (TCP/UDP) with Process ID (PID)
    sudo ss -tulpn
    
    # Who is holding port 8080?
    sudo lsof -i :8080
    
    # Monitor network bandwidth per process
    sudo nethogs eth0
    \`\`\`
    
18.  ### Kernel Hardening (sysctl)
    
    Harden the network stack against IP Spoofing and Man-in-the-Middle attacks.
    
    \`\`\`
    sudo nano /etc/sysctl.conf
    Add/Uncomment these lines:
    \`\`\`
    
    \`\`\`
    # Disable IP Packet Forwarding (If not a router)
    net.ipv4.ip_forward = 0
    
    # Ignore ICMP Echo Requests (Disable Ping response - Stealth Mode)
    net.ipv4.icmp_echo_ignore_all = 1
    # Protect against IP Spoofing
    net.ipv4.conf.all.rp_filter = 1
    net.ipv4.conf.default.rp_filter = 1
    # Disable IPv6 (If not used)
    net.ipv6.conf.all.disable_ipv6 = 1
    
    # Apply changes immediately
    sudo sysctl -p
    \`\`\`
    
19.  ### Process Limits
    
    Prevent DoS (Denial of Service) by limiting resources per user.
    
    \`\`\`
    # nano /etc/security/limits.conf
    
    # User 'oz' can only have 50 processes
    oz hard nproc 50
    
    # Increase open file limit for database user
    postgres soft nofile 4096
    postgres hard nofile 10240
    \`\`\`
    
20.  ### Log Analysis & Forensics
    
    Finding the needle in the haystack.
    
    \`\`\`
    # Real-time monitoring of Auth logs
    tail -f /var/log/auth.log
    
    # Journalctl: Show logs for SSH service only
    journalctl -u sshd --since "1 hour ago"
    
    # Journalctl: Show only Critical and Error messages
    journalctl -p err -b
    \`\`\`
    
21.  ### Rootkit Scanning
    
    Automated security auditing.
    
    \`\`\`
    # Install RKHunter
    sudo dnf install rkhunter -y
    
    # Update database
    sudo rkhunter --propupd
    
    # Run check
    sudo rkhunter --check
    \`\`\`
    
22.  ### Cron Job Security
    
    Malware often hides in scheduled tasks to survive reboots.
    
    \`\`\`
    # List current user's cron
    crontab -l
    
    # Check system-wide crons (Inspect these folders!)
    ls -la /etc/cron.daily/
    ls -la /etc/cron.hourly/
    cat /etc/crontab
    \`\`\`
    
23.  ### Legal Warning Banners
    
    Scare off script kiddies and provide legal standing.
    
    \`\`\`
    # Edit the banner file
    sudo nano /etc/issue.net
    Add text like: "UNAUTHORIZED ACCESS PROHIBITED. ALL ACTIVITY IS LOGGED."
    \`\`\`
    
    #### Enable Banner in SSH config
    
    \`\`\`
    sudo nano /etc/ssh/sshd_config
    # Add/Uncomment:
    Banner /etc/issue.net
    \`\`\``,XS=`# 15 Linux One-Liners That Feel Like Cheating

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
   

   ## 3. Analyze Process Behavior

Once we've identified suspicious processes (high CPU, memory, or stuck in D state), the next question is: Why is the process consuming resources?

### Inspect Open Files / Network / Resources

\`\`\`
lsof -p <PID>
\`\`\`

### Monitor Its Activity

\`\`\`
top -p <PID>
\`\`\`

### Check for I/O Bottlenecks (If stat is D - blocked on I/O)

-   \`\`\`
    iotop -o
    \`\`\`
    
    # Per-process I/O usage
-   \`\`\`
    iostat -x 1 5
    \`\`\`
    
    # Disk device performance
-   \`\`\`
    vmstat 1 5
    \`\`\`
    
    # CPU and I/O wait

### Trace the Process (Optional, Advanced)

\`\`\`
strace -p <PID>
\`\`\`

### Investigate Threads (Multi-threaded app may have one hot thread consuming CPU)

\`\`\`
ps -L -p <PID> -o pid,tid,psr,%cpu,stat,comm
\`\`\`

## Zombies Process

The process has terminated, but its parent hasn't reaped it yet. It consumes no CPU or memory except the process table entry.

\`\`\`
ps -eo pid,ppid,stat,wchan,cmd | awk '$3 ~ /Z/'
\`\`\`

## Uninterruptible Sleep

High load does not always mean high CPU usage. Very often, it means processes are blocked waiting for disk, memory, or other I/O.

### Processes in D State (Uninterruptible Sleep)

\`\`\`
ps -eo pid,ppid,stat,wchan,cmd | awk '$3 ~ /D/'
\`\`\`

# Output

\`\`\`

 PID   PPID  STAT  WCHAN        CMD
 3241  1     D     io_schedule  postgres: writer process
 3242  1     D     io_schedule  postgres: checkpointer

\`\`\`

From this output, we can conclude that multiple processes are stuck in D state (uninterruptible sleep waiting for I/O), indicating that the system is experiencing a disk or storage bottleneck, not an application-level problem.

## 2. Inspect Processes

Once we know the system is under pressure, the next question is simple: which process is responsible?

### Top 10 Memory Consumers

\`\`\`
ps -eo pid,ppid,%cpu,%mem,rss,stat,wchan,cmd --sort=-%mem | head -10
\`\`\`

### Top 10 CPU Consumers

\`\`\`
ps -eo pid,ppid,%cpu,%mem,rss,stat,wchan,cmd --sort=-%cpu | head -10
\`\`\`

pid — process ID

ppid — parent process (helps trace where it came from)

%cpu — Percentage of CPU used

%mem — Percentage of RAM used

rss — Resident Set Size (actual memory used in KB)

stat — process state. Things to watch for:

-   **R**: Running (Application is actively using CPU)
-   **S**: Sleeping (Process is waiting on an event or lock)
-   **D**: Uninterruptible sleep (usually waiting on I/O)
-   **Z**: Zombie (terminated but not reaped by parent)

wchan — kernel function the process is waiting in

cmd — command that started the process

## 1. Start With the Kernel's Perspective

Before digging into logs or blaming applications, let's ask a simple question: is the kernel under pressure?

To answer that, we can check the system load using:

\`\`\`
uptime
\`\`\`

# Output

\`\`\`
14:22:01 up 120 days,  3 users,  load average: 12.4, 10.8, 9.6
\`\`\`

14:22:01 — The current system time.

up 120 days — This server has been running for about 4 months (120 days) without a reboot.

3 users — The number of users currently logged into the system (via SSH or local terminal).

load average: 12.4, 10.8, 9.6 — Represents the average system load over three different time intervals:

-   12.4: The last 1 minute
-   10.8: The last 5 minutes
-   9.6: The last 15 minutes

### Interpreting the Load

Load is the number of processes that are either using the CPU or waiting for the CPU (runnable state), plus processes waiting for I/O (like reading from a disk).

Is a load of 12.4 "High"? It depends entirely on how many CPU cores we have:

-   On a 4-core system — A load of 12 means the system is running at roughly 300% of capacity, which means the kernel has a long queue of tasks waiting to run.
-   On a 16-core system — The same load of 12 is only about 75% utilized, which might be completely fine.

### Reading the Trend

By looking at all three numbers together, we can tell if the problem is getting better or worse:

-   1m > 5m > 15m — load is increasing, things are getting worse
-   1m < 5m < 15m — load is dropping, system is recovering
-   1m ~ 5m ~ 15m — The load is consistent (stable).`,QS=`# Linux Commands: Find All SUID Binaries (for Privilege Escalation)

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
\`\`\``,WS=`# Most Feared Linux Commands to Know

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

This command turns experience into a searchable database. The longer you work in Linux, the more powerful it becomes.`,PS=`# Reflections on My Tenure at Iskaan

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
[Your Full Name]`,KS=`# Run Claude Code Locally on Apple Silicon Using LM Studio and LiteLLM (Zero Cost)

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
\`\`\``,JS=`# Setting a Login Banner on Linux Servers 

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
\`\`\``,$S=`# What SRE Interviewers Really Look For

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

Used correctly, this boosts productivity massively.`,e1=`## Convert a Meeting from Video .mp4 to Audio with AI in Mac Terminal and Generating MoM's. 

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

> "Summarize the following meeting transcript into key decisions, action items, and important discussion points and generate a MoM for this."`,n1=`# Using Manga-Downloader on Mac

Go to site:
  [https://pkg.go.dev/github.com/elboletaire/manga-downloader#readme-installation](https://pkg.go.dev/github.com/elboletaire/manga-downloader#readme-installation)

## Download a Release

[https://github.com/elboletaire/manga-downloader/releases](https://github.com/elboletaire/manga-downloader/releases)

Check on the internet how to permanently download and run this.

## Use Mangadex Only to Download

[https://mangadex.org/](https://mangadex.org/)

Check flags on how to use CLI properly from the documentation.`,t1=`# DevOps Commands Cheat Sheet (With Real-World Examples)

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

💡 Why it matters: Every automation leaves behind readable, shareable context—no more "tribal knowledge."




# 100+ DevOps Commands Every Engineer Must Know — Quick & Complete Guide

## Basic to Advanced Linux Commands

-   Networking commands
-   File Management commands
-   System Monitoring commands
-   Package Management commands
-   Disk and Filesystem commands
-   Scripting & Automation commands
-   Development and Debugging commands
-   Other Useful Commands

## 🔥 Basic Linux Commands

1.  \`pwd\`  – Print Working Directory
    
    Copy:  \`pwd\`  # Shows current directory location
    
    Output:  \`/home/user/project\`
    
2.  \`ls\`  – List Files and Directories
    
    Copy:  \`ls\`  # list items in current directory
    
    Copy:  \`ls -l\`  # list detailed file info (size, permissions)
    
    Copy:  \`ls -a\`  # list all including hidden files
    
3.  \`cd\`  – Change Directory
    
    Copy:  \`cd /var/log\`  # go to /var/log directory
    
    Copy:  \`cd ..\`  # move one step back
    
    Copy:  \`cd ~\`  # go to home directory
    
4.  \`touch\`  – Create an Empty File
    
    Copy:  \`touch file.txt\`  # Creates file.txt in the current directory.
    
5.  \`mkdir\`  – Create a Directory
    
    Copy:  \`mkdir backups\`  # Creates a folder named backups
    
    Copy:  \`mkdir dir1 dir2 dir3\`  # To create multiple directories
    
6.  \`rm\`  – Remove Files or Directories
    
    Copy:  \`rm file.txt\`  # delete a file
    
    Copy:  \`rm -r folder/\`  # delete a directory, ⚠ Use with caution, especially with -r
    
7.  \`rmdir\`  – Remove Empty Directory
    
    Copy:  \`rmdir test_folder\`  # Deletes a directory only if it is empty.
    
8.  \`cp\`  – Copy Files/Directories
    
    Copy:  \`cp file.txt /tmp/\`  # copy file to /tmp/
    
    Copy:  \`cp -r dir1/ dir_backup/\`  # copy directory (recursive)
    
9.  \`mv\`  – Move or Rename Files/Directories
    
    Copy:  \`mv file.txt /tmp/\`  # move file to /tmp
    
    Copy:  \`mv oldname.txt newname.txt\`  # rename file
    
10.  \`cat\`  – View File Content
    
    Copy:  \`cat config.txt\`  # Displays content of a file.
    
    Copy:  \`cat file1.txt file2.txt > merged.txt\`  # You can also combine files.
    
11.  \`echo\`  – Print Text to Terminal
    
    Copy:  \`echo "Hello DevOps!"\`  # Used to display text or write content into files.
    
    Copy:  \`echo "Job Done!" > message.txt\`  # creates file with text
    
    Copy:  \`echo "More data" >> message.txt\`  # append to file
    
12.  \`clear\`  – Clear Terminal Screen
    
    Copy:  \`clear\`  # Clears previously printed commands and output to keep the screen clean.
    
    Copy:  \`Ctrl + L\`  # Shortcut key
    

## 🔥 Intermediate Linux Commands

These commands are widely used in daily DevOps operations — from file permissions to process monitoring, network testing, data transfers, and file management.

13.  \`chmod\`  – Change File Permissions
    
    Copy:  \`chmod 400 test.txt\`  # Controls who can read, write, or execute a file.
    
    Copy:  \`chmod 755 script.sh\`  # read+write+execute for owner, read+execute for others
    
    Copy:  \`chmod 644 file.txt\`  # owner read/write, others read-only
    
14.  \`chown\`  – Change File Ownership
    
    Copy:  \`chown user file.txt\`  # change owner
    
    Copy:  \`chown user:group file.txt\`  # change owner and group
    
15.  \`find\`  – Search Files/Directories
    
    Copy:  \`find /var -name "log*"\`  # search files starting with log
    
    Copy:  \`find . -type f -size +10M\`  # find files larger than 10MB
    
16.  \`grep\`  – Search Text in Files
    
    Copy:  \`grep "error" app.log\`  # search word "error" - Find lines containing a specific pattern.
    
    Copy:  \`grep -i "fail" app.log\`  # case-insensitive search
    
    Copy:  \`grep -r "password" /etc/\`  # search recursively in directories
    
17.  \`wc\`  – Word/Line/Character Count
    
    Copy:  \`wc -l file.txt\`  # count lines
    
    Copy:  \`wc -w file.txt\`  # count words
    
    Copy:  \`wc -c file.txt\`  # count characters
    
18.  \`head\`  – View First Lines of a File
    
    Copy:  \`head file.txt\`  # By default shows first 10 lines.
    
    Copy:  \`head -n 5 file.txt\`  # first 5 lines
    
19.  \`tail\`  – View Last Lines of a File
    
    Copy:  \`tail file.log\`  # By default shows last 10 lines.
    
    Copy:  \`tail -f file.log\`  # live real-time log view - Useful for log monitoring.
    
20.  \`sort\`  – Sort File Content
    
    Copy:  \`sort names.txt\`  # Sorts alphabetically or numerically.
    
    Copy:  \`sort -n numbers.txt\`  # numeric sort
    
21.  \`uniq\`  – Remove Duplicate Lines
    
    Copy:  \`sort data.txt | uniq\`  # Used with sort to filter unique values.
    
22.  \`diff\`  – Compare Two Files
    
    Copy:  \`diff old.conf new.conf\`  # Shows line-by-line differences.
    
23.  \`tar\`  – Create or Extract Tar Archives
    
    Copy:  \`tar -cvf archive.tar folder/\`  # create tar - Used for backups files.
    
    Copy:  \`tar -xvf archive.tar\`  # extract tar
    
24.  \`zip/unzip\`  – Compress & Extract Zip Files
    
    Copy:  \`zip logs.zip *.log\`  # zip files
    
    Copy:  \`unzip logs.zip\`  # extract zip
    
25.  \`df\`  – Disk Space Usage
    
    Copy:  \`df -h\`  # Shows available disk and partition usage in human-readable format
    
26.  \`du\`  – Directory Size
    
    Copy:  \`du -sh /var/log\`  # total size
    
    Copy:  \`du -h *\`  # Shows space used by directories/files.
    
27.  \`top\`  – Live Process Monitoring
    
    Copy:  \`top\`  # Real-time CPU/memory usage display. (Exit with → q)
    
28.  \`ps\`  – Show Running Processes
    
    Copy:  \`ps aux\`  # all processes
    
    Copy:  \`ps -ef | grep nginx\`  # filter specific process
    
29.  \`kill\`  – Terminate Processes
    
    Copy:  \`kill 1234\`  # normal termination.
    
    Copy:  \`kill -9 1234\`  # force kill
    
30.  \`ping\`  – Test Network Reachability
    
    Copy:  \`ping google.com\`  # Checks server connectivity & latency (Stop → Ctrl + C)
    
31.  \`wget\`  – Download Files from Web
    
    Copy:  \`wget https://example.com/file.zip\`  # Simple file download via URL.
    
32.  \`curl\`  – Transfer Data to/from Server
    
    Copy:  \`curl http://example.com\`  # Supports HTTP, FTP, API calls, etc.
    
    Copy:  \`curl -O https://site.com/file.tar.gz\`  # download file
    
33.  \`scp\`  – Secure File Transfer Between Hosts
    
    Copy:  \`scp file.txt user@server:/tmp/\`  # SSH-based file copy.
    
    Copy:  \`scp user@server:/home/logs.zip .\`
    
34.  \`rsync\`  – Fast File Sync/Backup
    
    Copy:  \`rsync -av /data/ /backup/\`  # Efficient incremental copy.
    
    Copy:  \`rsync -avz file user@server:/path/\`
    

## 🔥 Advanced Linux Commands

Perfect for DevOps, SysAdmin, and interview preparation ✔️

35.  \`awk\`  — Text processing and pattern scanning
    
    Copy:  \`awk '{print $1, $3}' file.txt\`  # Prints column 1 and 3 from each line. - Extract columns, filter rows, perform operations
    
36.  \`sed\`  — Stream editor (search, replace, modify text)
    
    Copy:  \`sed 's/error/ok/g' logfile.txt\`  # Replaces all occurrences of error with ok.
    
37.  \`cut\`  — Remove/extract sections of text
    
    Copy:  \`cut -d ":" -f 1 /etc/passwd\`  # Shows only first field (username) using : as delimiter.
    
38.  \`tr\`  — Translate or delete characters
    
    Copy:  \`echo "hello world" | tr 'a-z' 'A-Z'\`  # Converts lowercase to uppercase.
    
39.  \`xargs\`  — Build and execute commands from input
    
    Copy:  \`cat files.txt | xargs rm\`  # Reads file names from files.txt and deletes them.
    
40.  \`ln\`  — Create hard or symbolic links
    
    Copy:  \`ln -s /path/original file_link\`  # Creates a symbolic link to a file or folder.
    
41.  \`df -h\`  — Disk usage in human-readable format
    
    Copy:  \`df -h\`  # Shows disk space in GB/MB
    
42.  \`free\`  — Display memory usage
    
    Copy:  \`free -h\`  # Shows RAM usage in human-readable form.
    
43.  \`iostat\`  — CPU and I/O statistics
    
    Copy:  \`iostat -x 2\`  # Shows extended I/O stats every 2 seconds.
    
44.  \`netstat\`  (deprecated) /  \`ss\`  (modern)
    
    Copy:  \`ss -tulnp\`  # Shows listening ports and services.
    
45.  \`ifconfig\`  /  \`ip\`  — Network configuration
    
    Copy:  \`ip addr show\`  # Shows IP addresses of interfaces.
    
46.  \`iptables\`  — Firewall rule configuration
    
    Copy:  \`sudo iptables -L\`  # Lists current firewall rules.
    
47.  \`systemctl\`  — Manage systemd services
    
    Copy:  \`sudo systemctl restart nginx\`  # Restarts the nginx service.
    
48.  \`journalctl\`  — View system logs
    
    Copy:  \`journalctl -u nginx\`  # Shows logs for the nginx service.`,a1=`# How to Write Markdown .md Files in Your Code and Push It to GitHub Pages (Deployment)

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

to publish the changes to the GitHub repo (main branch) and it will automatically push the new build to the gh-pages branch (where you can check the deployment status).`,i1=`Terminal Tools For Mac OS and Linux
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

nyancat in action`,l1=`# ✏️ Start writing

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
    style="width:200px; height:200px; object-fit:cover; border-radius:10px; display:block; margin:10px 0;">`,r1=Object.assign({"/public/docs/10 Grep Commands for Linux Systems.md":BS,"/public/docs/5 Useful Linux and Mac Automationn Scripts.md":IS,"/public/docs/Basic Git Commands.md":jS,"/public/docs/Download flac and convert to run on Mac and iPhone.md":qS,"/public/docs/Hacking Prevention.md":YS,"/public/docs/Interview Preperation.md":GS,"/public/docs/Linux Basic and Advanced Questions.md":FS,"/public/docs/Linux Cheat Sheet.md":VS,"/public/docs/Linux Commands.md":XS,"/public/docs/Linux Hacker Commands.md":QS,"/public/docs/Most Feared Linux Commands.md":WS,"/public/docs/Reflection Of My Tenure at Iskaan.md":PS,"/public/docs/Run Claude Code Local On Mac.md":KS,"/public/docs/SSH Auth.md":ZS,"/public/docs/Setting Up a Login Banner on Linux Server.md":JS,"/public/docs/Thinking Like an SRE.md":$S,"/public/docs/Transcribe and Generate MoM in Mac Terminal.md":e1,"/public/docs/Use Manga Downloader on Mac.md":n1,"/public/docs/devopsCommands.md":t1,"/public/docs/howTo.md":a1,"/public/docs/macAndLinuxTerminalTools.md":i1,"/public/docs/nginx.md":l1}),wc=Object.entries(r1).map(([a,l])=>{const r=a.split("/").pop().replace(".md",""),o=l.match(/^#\s+(.*)/)?.[1]??r.replace(/-/g," ");return{slug:r,title:o,content:l}});function o1(){return sn.jsx("aside",{style:ju.sidebar,children:wc.map(a=>sn.jsx(Jm,{to:`/docs/${a.slug}`,style:({isActive:l})=>({...ju.link,...l?ju.active:{}}),children:a.title},a.slug))})}const ju={sidebar:{width:260,padding:"1rem",background:"var(--sidebar-bg)",borderRight:"1px solid #e5e7eb"},link:{display:"block",padding:"1rem 1rem",borderRadius:8,textDecoration:"none",color:"var(--text)",marginBottom:4,borderBottom:"1px solid #ccc"},active:{background:"var(--active-bg)",color:"var(--active-text)",fontWeight:600}};function s1(a,l){const r={};return(a[a.length-1]===""?[...a,""]:a).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const u1=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,c1=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,f1={};function Pp(a,l){return(f1.jsx?c1:u1).test(a)}const d1=/[ \t\n\f\r]/g;function h1(a){return typeof a=="object"?a.type==="text"?Kp(a.value):!1:Kp(a)}function Kp(a){return a.replace(d1,"")===""}class Ol{constructor(l,r,o){this.normal=r,this.property=l,o&&(this.space=o)}}Ol.prototype.normal={};Ol.prototype.property={};Ol.prototype.space=void 0;function eg(a,l){const r={},o={};for(const c of a)Object.assign(r,c.property),Object.assign(o,c.normal);return new Ol(r,o,l)}function ac(a){return a.toLowerCase()}class Rn{constructor(l,r){this.attribute=r,this.property=l}}Rn.prototype.attribute="";Rn.prototype.booleanish=!1;Rn.prototype.boolean=!1;Rn.prototype.commaOrSpaceSeparated=!1;Rn.prototype.commaSeparated=!1;Rn.prototype.defined=!1;Rn.prototype.mustUseProperty=!1;Rn.prototype.number=!1;Rn.prototype.overloadedBoolean=!1;Rn.prototype.property="";Rn.prototype.spaceSeparated=!1;Rn.prototype.space=void 0;let p1=0;const ve=Da(),tn=Da(),ic=Da(),Q=Da(),qe=Da(),bi=Da(),Bn=Da();function Da(){return 2**++p1}const lc=Object.freeze(Object.defineProperty({__proto__:null,boolean:ve,booleanish:tn,commaOrSpaceSeparated:Bn,commaSeparated:bi,number:Q,overloadedBoolean:ic,spaceSeparated:qe},Symbol.toStringTag,{value:"Module"})),qu=Object.keys(lc);class xc extends Rn{constructor(l,r,o,c){let f=-1;if(super(l,r),Zp(this,"space",c),typeof o=="number")for(;++f<qu.length;){const d=qu[f];Zp(this,qu[f],(o&lc[d])===lc[d])}}}xc.prototype.defined=!0;function Zp(a,l,r){r&&(a[l]=r)}function Ci(a){const l={},r={};for(const[o,c]of Object.entries(a.properties)){const f=new xc(o,a.transform(a.attributes||{},o),c,a.space);a.mustUseProperty&&a.mustUseProperty.includes(o)&&(f.mustUseProperty=!0),l[o]=f,r[ac(o)]=o,r[ac(f.attribute)]=o}return new Ol(l,r,a.space)}const ng=Ci({properties:{ariaActiveDescendant:null,ariaAtomic:tn,ariaAutoComplete:null,ariaBusy:tn,ariaChecked:tn,ariaColCount:Q,ariaColIndex:Q,ariaColSpan:Q,ariaControls:qe,ariaCurrent:null,ariaDescribedBy:qe,ariaDetails:null,ariaDisabled:tn,ariaDropEffect:qe,ariaErrorMessage:null,ariaExpanded:tn,ariaFlowTo:qe,ariaGrabbed:tn,ariaHasPopup:null,ariaHidden:tn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:qe,ariaLevel:Q,ariaLive:null,ariaModal:tn,ariaMultiLine:tn,ariaMultiSelectable:tn,ariaOrientation:null,ariaOwns:qe,ariaPlaceholder:null,ariaPosInSet:Q,ariaPressed:tn,ariaReadOnly:tn,ariaRelevant:null,ariaRequired:tn,ariaRoleDescription:qe,ariaRowCount:Q,ariaRowIndex:Q,ariaRowSpan:Q,ariaSelected:tn,ariaSetSize:Q,ariaSort:null,ariaValueMax:Q,ariaValueMin:Q,ariaValueNow:Q,ariaValueText:null,role:null},transform(a,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()}});function tg(a,l){return l in a?a[l]:l}function ag(a,l){return tg(a,l.toLowerCase())}const m1=Ci({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:bi,acceptCharset:qe,accessKey:qe,action:null,allow:null,allowFullScreen:ve,allowPaymentRequest:ve,allowUserMedia:ve,alt:null,as:null,async:ve,autoCapitalize:null,autoComplete:qe,autoFocus:ve,autoPlay:ve,blocking:qe,capture:null,charSet:null,checked:ve,cite:null,className:qe,cols:Q,colSpan:null,content:null,contentEditable:tn,controls:ve,controlsList:qe,coords:Q|bi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ve,defer:ve,dir:null,dirName:null,disabled:ve,download:ic,draggable:tn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ve,formTarget:null,headers:qe,height:Q,hidden:ic,high:Q,href:null,hrefLang:null,htmlFor:qe,httpEquiv:qe,id:null,imageSizes:null,imageSrcSet:null,inert:ve,inputMode:null,integrity:null,is:null,isMap:ve,itemId:null,itemProp:qe,itemRef:qe,itemScope:ve,itemType:qe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ve,low:Q,manifest:null,max:null,maxLength:Q,media:null,method:null,min:null,minLength:Q,multiple:ve,muted:ve,name:null,nonce:null,noModule:ve,noValidate:ve,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ve,optimum:Q,pattern:null,ping:qe,placeholder:null,playsInline:ve,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ve,referrerPolicy:null,rel:qe,required:ve,reversed:ve,rows:Q,rowSpan:Q,sandbox:qe,scope:null,scoped:ve,seamless:ve,selected:ve,shadowRootClonable:ve,shadowRootDelegatesFocus:ve,shadowRootMode:null,shape:null,size:Q,sizes:null,slot:null,span:Q,spellCheck:tn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Q,step:null,style:null,tabIndex:Q,target:null,title:null,translate:null,type:null,typeMustMatch:ve,useMap:null,value:tn,width:Q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:qe,axis:null,background:null,bgColor:null,border:Q,borderColor:null,bottomMargin:Q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ve,declare:ve,event:null,face:null,frame:null,frameBorder:null,hSpace:Q,leftMargin:Q,link:null,longDesc:null,lowSrc:null,marginHeight:Q,marginWidth:Q,noResize:ve,noHref:ve,noShade:ve,noWrap:ve,object:null,profile:null,prompt:null,rev:null,rightMargin:Q,rules:null,scheme:null,scrolling:tn,standby:null,summary:null,text:null,topMargin:Q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ve,disableRemotePlayback:ve,prefix:null,property:null,results:Q,security:null,unselectable:null},space:"html",transform:ag}),g1=Ci({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Bn,accentHeight:Q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Q,amplitude:Q,arabicForm:null,ascent:Q,attributeName:null,attributeType:null,azimuth:Q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Q,by:null,calcMode:null,capHeight:Q,className:qe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Q,diffuseConstant:Q,direction:null,display:null,dur:null,divisor:Q,dominantBaseline:null,download:ve,dx:null,dy:null,edgeMode:null,editable:null,elevation:Q,enableBackground:null,end:null,event:null,exponent:Q,externalResourcesRequired:null,fill:null,fillOpacity:Q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:bi,g2:bi,glyphName:bi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Q,horizOriginX:Q,horizOriginY:Q,id:null,ideographic:Q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Q,k:Q,k1:Q,k2:Q,k3:Q,k4:Q,kernelMatrix:Bn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Q,overlineThickness:Q,paintOrder:null,panose1:null,path:null,pathLength:Q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:qe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Q,pointsAtY:Q,pointsAtZ:Q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Bn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Bn,rev:Bn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Bn,requiredFeatures:Bn,requiredFonts:Bn,requiredFormats:Bn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Q,specularExponent:Q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Q,strikethroughThickness:Q,string:null,stroke:null,strokeDashArray:Bn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Q,strokeOpacity:Q,strokeWidth:null,style:null,surfaceScale:Q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Bn,tabIndex:Q,tableValues:null,target:null,targetX:Q,targetY:Q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Bn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Q,underlineThickness:Q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Q,values:null,vAlphabetic:Q,vMathematical:Q,vectorEffect:null,vHanging:Q,vIdeographic:Q,version:null,vertAdvY:Q,vertOriginX:Q,vertOriginY:Q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:tg}),ig=Ci({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(a,l){return"xlink:"+l.slice(5).toLowerCase()}}),lg=Ci({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ag}),rg=Ci({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(a,l){return"xml:"+l.slice(3).toLowerCase()}}),y1={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},v1=/[A-Z]/g,Jp=/-[a-z]/g,b1=/^data[-\w.:]+$/i;function S1(a,l){const r=ac(l);let o=l,c=Rn;if(r in a.normal)return a.property[a.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&b1.test(l)){if(l.charAt(4)==="-"){const f=l.slice(5).replace(Jp,x1);o="data"+f.charAt(0).toUpperCase()+f.slice(1)}else{const f=l.slice(4);if(!Jp.test(f)){let d=f.replace(v1,w1);d.charAt(0)!=="-"&&(d="-"+d),l="data"+d}}c=xc}return new c(o,l)}function w1(a){return"-"+a.toLowerCase()}function x1(a){return a.charAt(1).toUpperCase()}const C1=eg([ng,m1,ig,lg,rg],"html"),Cc=eg([ng,g1,ig,lg,rg],"svg");function k1(a){return a.join(" ").trim()}var yi={},Yu,$p;function T1(){if($p)return Yu;$p=1;var a=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,r=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,c=/^:\s*/,f=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,d=/^[;\s]*/,m=/^\s+|\s+$/g,g=`
`,p="/",y="*",v="",x="comment",S="declaration";function U(H,O){if(typeof H!="string")throw new TypeError("First argument must be a string");if(!H)return[];O=O||{};var V=1,F=1;function re(ae){var W=ae.match(l);W&&(V+=W.length);var M=ae.lastIndexOf(g);F=~M?ae.length-M:F+ae.length}function oe(){var ae={line:V,column:F};return function(W){return W.position=new B(ae),fe(),W}}function B(ae){this.start=ae,this.end={line:V,column:F},this.source=O.source}B.prototype.content=H;function K(ae){var W=new Error(O.source+":"+V+":"+F+": "+ae);if(W.reason=ae,W.filename=O.source,W.line=V,W.column=F,W.source=H,!O.silent)throw W}function ce(ae){var W=ae.exec(H);if(W){var M=W[0];return re(M),H=H.slice(M.length),W}}function fe(){ce(r)}function ge(ae){var W;for(ae=ae||[];W=ee();)W!==!1&&ae.push(W);return ae}function ee(){var ae=oe();if(!(p!=H.charAt(0)||y!=H.charAt(1))){for(var W=2;v!=H.charAt(W)&&(y!=H.charAt(W)||p!=H.charAt(W+1));)++W;if(W+=2,v===H.charAt(W-1))return K("End of comment missing");var M=H.slice(2,W-2);return F+=2,re(M),H=H.slice(W),F+=2,ae({type:x,comment:M})}}function J(){var ae=oe(),W=ce(o);if(W){if(ee(),!ce(c))return K("property missing ':'");var M=ce(f),X=ae({type:S,property:L(W[0].replace(a,v)),value:M?L(M[0].replace(a,v)):v});return ce(d),X}}function Ae(){var ae=[];ge(ae);for(var W;W=J();)W!==!1&&(ae.push(W),ge(ae));return ae}return fe(),Ae()}function L(H){return H?H.replace(m,v):v}return Yu=U,Yu}var em;function E1(){if(em)return yi;em=1;var a=yi&&yi.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(yi,"__esModule",{value:!0}),yi.default=r;const l=a(T1());function r(o,c){let f=null;if(!o||typeof o!="string")return f;const d=(0,l.default)(o),m=typeof c=="function";return d.forEach(g=>{if(g.type!=="declaration")return;const{property:p,value:y}=g;m?c(p,y,g):y&&(f=f||{},f[p]=y)}),f}return yi}var wl={},nm;function A1(){if(nm)return wl;nm=1,Object.defineProperty(wl,"__esModule",{value:!0}),wl.camelCase=void 0;var a=/^--[a-zA-Z0-9_-]+$/,l=/-([a-z])/g,r=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,c=/^-(ms)-/,f=function(p){return!p||r.test(p)||a.test(p)},d=function(p,y){return y.toUpperCase()},m=function(p,y){return"".concat(y,"-")},g=function(p,y){return y===void 0&&(y={}),f(p)?p:(p=p.toLowerCase(),y.reactCompat?p=p.replace(c,m):p=p.replace(o,m),p.replace(l,d))};return wl.camelCase=g,wl}var xl,tm;function D1(){if(tm)return xl;tm=1;var a=xl&&xl.__importDefault||function(c){return c&&c.__esModule?c:{default:c}},l=a(E1()),r=A1();function o(c,f){var d={};return!c||typeof c!="string"||(0,l.default)(c,function(m,g){m&&g&&(d[(0,r.camelCase)(m,f)]=g)}),d}return o.default=o,xl=o,xl}var R1=D1();const z1=uo(R1),og=sg("end"),kc=sg("start");function sg(a){return l;function l(r){const o=r&&r.position&&r.position[a]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function M1(a){const l=kc(a),r=og(a);if(l&&r)return{start:l,end:r}}function Tl(a){return!a||typeof a!="object"?"":"position"in a||"type"in a?am(a.position):"start"in a||"end"in a?am(a):"line"in a||"column"in a?rc(a):""}function rc(a){return im(a&&a.line)+":"+im(a&&a.column)}function am(a){return rc(a&&a.start)+"-"+rc(a&&a.end)}function im(a){return a&&typeof a=="number"?a:1}class mn extends Error{constructor(l,r,o){super(),typeof r=="string"&&(o=r,r=void 0);let c="",f={},d=!1;if(r&&("line"in r&&"column"in r?f={place:r}:"start"in r&&"end"in r?f={place:r}:"type"in r?f={ancestors:[r],place:r.position}:f={...r}),typeof l=="string"?c=l:!f.cause&&l&&(d=!0,c=l.message,f.cause=l),!f.ruleId&&!f.source&&typeof o=="string"){const g=o.indexOf(":");g===-1?f.ruleId=o:(f.source=o.slice(0,g),f.ruleId=o.slice(g+1))}if(!f.place&&f.ancestors&&f.ancestors){const g=f.ancestors[f.ancestors.length-1];g&&(f.place=g.position)}const m=f.place&&"start"in f.place?f.place.start:f.place;this.ancestors=f.ancestors||void 0,this.cause=f.cause||void 0,this.column=m?m.column:void 0,this.fatal=void 0,this.file="",this.message=c,this.line=m?m.line:void 0,this.name=Tl(f.place)||"1:1",this.place=f.place||void 0,this.reason=this.message,this.ruleId=f.ruleId||void 0,this.source=f.source||void 0,this.stack=d&&f.cause&&typeof f.cause.stack=="string"?f.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}mn.prototype.file="";mn.prototype.name="";mn.prototype.reason="";mn.prototype.message="";mn.prototype.stack="";mn.prototype.column=void 0;mn.prototype.line=void 0;mn.prototype.ancestors=void 0;mn.prototype.cause=void 0;mn.prototype.fatal=void 0;mn.prototype.place=void 0;mn.prototype.ruleId=void 0;mn.prototype.source=void 0;const Tc={}.hasOwnProperty,O1=new Map,_1=/[A-Z]/g,L1=new Set(["table","tbody","thead","tfoot","tr"]),N1=new Set(["td","th"]),ug="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function U1(a,l){if(!l||l.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=l.filePath||void 0;let o;if(l.development){if(typeof l.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=F1(r,l.jsxDEV)}else{if(typeof l.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof l.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=G1(r,l.jsx,l.jsxs)}const c={Fragment:l.Fragment,ancestors:[],components:l.components||{},create:o,elementAttributeNameCase:l.elementAttributeNameCase||"react",evaluater:l.createEvaluater?l.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:l.ignoreInvalidStyle||!1,passKeys:l.passKeys!==!1,passNode:l.passNode||!1,schema:l.space==="svg"?Cc:C1,stylePropertyNameCase:l.stylePropertyNameCase||"dom",tableCellAlignToStyle:l.tableCellAlignToStyle!==!1},f=cg(c,a,void 0);return f&&typeof f!="string"?f:c.create(a,c.Fragment,{children:f||void 0},void 0)}function cg(a,l,r){if(l.type==="element")return H1(a,l,r);if(l.type==="mdxFlowExpression"||l.type==="mdxTextExpression")return B1(a,l);if(l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement")return j1(a,l,r);if(l.type==="mdxjsEsm")return I1(a,l);if(l.type==="root")return q1(a,l,r);if(l.type==="text")return Y1(a,l)}function H1(a,l,r){const o=a.schema;let c=o;l.tagName.toLowerCase()==="svg"&&o.space==="html"&&(c=Cc,a.schema=c),a.ancestors.push(l);const f=dg(a,l.tagName,!1),d=V1(a,l);let m=Ac(a,l);return L1.has(l.tagName)&&(m=m.filter(function(g){return typeof g=="string"?!h1(g):!0})),fg(a,d,f,l),Ec(d,m),a.ancestors.pop(),a.schema=o,a.create(l,f,d,r)}function B1(a,l){if(l.data&&l.data.estree&&a.evaluater){const o=l.data.estree.body[0];return o.type,a.evaluater.evaluateExpression(o.expression)}Rl(a,l.position)}function I1(a,l){if(l.data&&l.data.estree&&a.evaluater)return a.evaluater.evaluateProgram(l.data.estree);Rl(a,l.position)}function j1(a,l,r){const o=a.schema;let c=o;l.name==="svg"&&o.space==="html"&&(c=Cc,a.schema=c),a.ancestors.push(l);const f=l.name===null?a.Fragment:dg(a,l.name,!0),d=X1(a,l),m=Ac(a,l);return fg(a,d,f,l),Ec(d,m),a.ancestors.pop(),a.schema=o,a.create(l,f,d,r)}function q1(a,l,r){const o={};return Ec(o,Ac(a,l)),a.create(l,a.Fragment,o,r)}function Y1(a,l){return l.value}function fg(a,l,r,o){typeof r!="string"&&r!==a.Fragment&&a.passNode&&(l.node=o)}function Ec(a,l){if(l.length>0){const r=l.length>1?l:l[0];r&&(a.children=r)}}function G1(a,l,r){return o;function o(c,f,d,m){const p=Array.isArray(d.children)?r:l;return m?p(f,d,m):p(f,d)}}function F1(a,l){return r;function r(o,c,f,d){const m=Array.isArray(f.children),g=kc(o);return l(c,f,d,m,{columnNumber:g?g.column-1:void 0,fileName:a,lineNumber:g?g.line:void 0},void 0)}}function V1(a,l){const r={};let o,c;for(c in l.properties)if(c!=="children"&&Tc.call(l.properties,c)){const f=Q1(a,c,l.properties[c]);if(f){const[d,m]=f;a.tableCellAlignToStyle&&d==="align"&&typeof m=="string"&&N1.has(l.tagName)?o=m:r[d]=m}}if(o){const f=r.style||(r.style={});f[a.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return r}function X1(a,l){const r={};for(const o of l.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&a.evaluater){const f=o.data.estree.body[0];f.type;const d=f.expression;d.type;const m=d.properties[0];m.type,Object.assign(r,a.evaluater.evaluateExpression(m.argument))}else Rl(a,l.position);else{const c=o.name;let f;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&a.evaluater){const m=o.value.data.estree.body[0];m.type,f=a.evaluater.evaluateExpression(m.expression)}else Rl(a,l.position);else f=o.value===null?!0:o.value;r[c]=f}return r}function Ac(a,l){const r=[];let o=-1;const c=a.passKeys?new Map:O1;for(;++o<l.children.length;){const f=l.children[o];let d;if(a.passKeys){const g=f.type==="element"?f.tagName:f.type==="mdxJsxFlowElement"||f.type==="mdxJsxTextElement"?f.name:void 0;if(g){const p=c.get(g)||0;d=g+"-"+p,c.set(g,p+1)}}const m=cg(a,f,d);m!==void 0&&r.push(m)}return r}function Q1(a,l,r){const o=S1(a.schema,l);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=o.commaSeparated?s1(r):k1(r)),o.property==="style"){let c=typeof r=="object"?r:W1(a,String(r));return a.stylePropertyNameCase==="css"&&(c=P1(c)),["style",c]}return[a.elementAttributeNameCase==="react"&&o.space?y1[o.property]||o.property:o.attribute,r]}}function W1(a,l){try{return z1(l,{reactCompat:!0})}catch(r){if(a.ignoreInvalidStyle)return{};const o=r,c=new mn("Cannot parse `style` attribute",{ancestors:a.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw c.file=a.filePath||void 0,c.url=ug+"#cannot-parse-style-attribute",c}}function dg(a,l,r){let o;if(!r)o={type:"Literal",value:l};else if(l.includes(".")){const c=l.split(".");let f=-1,d;for(;++f<c.length;){const m=Pp(c[f])?{type:"Identifier",name:c[f]}:{type:"Literal",value:c[f]};d=d?{type:"MemberExpression",object:d,property:m,computed:!!(f&&m.type==="Literal"),optional:!1}:m}o=d}else o=Pp(l)&&!/^[a-z]/.test(l)?{type:"Identifier",name:l}:{type:"Literal",value:l};if(o.type==="Literal"){const c=o.value;return Tc.call(a.components,c)?a.components[c]:c}if(a.evaluater)return a.evaluater.evaluateExpression(o);Rl(a)}function Rl(a,l){const r=new mn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:a.ancestors,place:l,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=a.filePath||void 0,r.url=ug+"#cannot-handle-mdx-estrees-without-createevaluater",r}function P1(a){const l={};let r;for(r in a)Tc.call(a,r)&&(l[K1(r)]=a[r]);return l}function K1(a){let l=a.replace(_1,Z1);return l.slice(0,3)==="ms-"&&(l="-"+l),l}function Z1(a){return"-"+a.toLowerCase()}const Gu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},J1={};function $1(a,l){const r=J1,o=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,c=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return hg(a,o,c)}function hg(a,l,r){if(ew(a)){if("value"in a)return a.type==="html"&&!r?"":a.value;if(l&&"alt"in a&&a.alt)return a.alt;if("children"in a)return lm(a.children,l,r)}return Array.isArray(a)?lm(a,l,r):""}function lm(a,l,r){const o=[];let c=-1;for(;++c<a.length;)o[c]=hg(a[c],l,r);return o.join("")}function ew(a){return!!(a&&typeof a=="object")}const rm=document.createElement("i");function Dc(a){const l="&"+a+";";rm.innerHTML=l;const r=rm.textContent;return r.charCodeAt(r.length-1)===59&&a!=="semi"||r===l?!1:r}function ft(a,l,r,o){const c=a.length;let f=0,d;if(l<0?l=-l>c?0:c+l:l=l>c?c:l,r=r>0?r:0,o.length<1e4)d=Array.from(o),d.unshift(l,r),a.splice(...d);else for(r&&a.splice(l,r);f<o.length;)d=o.slice(f,f+1e4),d.unshift(l,0),a.splice(...d),f+=1e4,l+=1e4}function $n(a,l){return a.length>0?(ft(a,a.length,0,l),a):l}const om={}.hasOwnProperty;function nw(a){const l={};let r=-1;for(;++r<a.length;)tw(l,a[r]);return l}function tw(a,l){let r;for(r in l){const c=(om.call(a,r)?a[r]:void 0)||(a[r]={}),f=l[r];let d;if(f)for(d in f){om.call(c,d)||(c[d]=[]);const m=f[d];aw(c[d],Array.isArray(m)?m:m?[m]:[])}}}function aw(a,l){let r=-1;const o=[];for(;++r<l.length;)(l[r].add==="after"?a:o).push(l[r]);ft(a,0,0,o)}function pg(a,l){const r=Number.parseInt(a,l);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function Si(a){return a.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ct=sa(/[A-Za-z]/),In=sa(/[\dA-Za-z]/),iw=sa(/[#-'*+\--9=?A-Z^-~]/);function oc(a){return a!==null&&(a<32||a===127)}const sc=sa(/\d/),lw=sa(/[\dA-Fa-f]/),rw=sa(/[!-/:-@[-`{-~]/);function he(a){return a!==null&&a<-2}function Dn(a){return a!==null&&(a<0||a===32)}function Me(a){return a===-2||a===-1||a===32}const ow=sa(new RegExp("\\p{P}|\\p{S}","u")),sw=sa(/\s/);function sa(a){return l;function l(r){return r!==null&&r>-1&&a.test(String.fromCharCode(r))}}function ki(a){const l=[];let r=-1,o=0,c=0;for(;++r<a.length;){const f=a.charCodeAt(r);let d="";if(f===37&&In(a.charCodeAt(r+1))&&In(a.charCodeAt(r+2)))c=2;else if(f<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f))||(d=String.fromCharCode(f));else if(f>55295&&f<57344){const m=a.charCodeAt(r+1);f<56320&&m>56319&&m<57344?(d=String.fromCharCode(f,m),c=1):d="�"}else d=String.fromCharCode(f);d&&(l.push(a.slice(o,r),encodeURIComponent(d)),o=r+c+1,d=""),c&&(r+=c,c=0)}return l.join("")+a.slice(o)}function Ye(a,l,r,o){const c=o?o-1:Number.POSITIVE_INFINITY;let f=0;return d;function d(g){return Me(g)?(a.enter(r),m(g)):l(g)}function m(g){return Me(g)&&f++<c?(a.consume(g),m):(a.exit(r),l(g))}}const uw={tokenize:cw};function cw(a){const l=a.attempt(this.parser.constructs.contentInitial,o,c);let r;return l;function o(m){if(m===null){a.consume(m);return}return a.enter("lineEnding"),a.consume(m),a.exit("lineEnding"),Ye(a,l,"linePrefix")}function c(m){return a.enter("paragraph"),f(m)}function f(m){const g=a.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=g),r=g,d(m)}function d(m){if(m===null){a.exit("chunkText"),a.exit("paragraph"),a.consume(m);return}return he(m)?(a.consume(m),a.exit("chunkText"),f):(a.consume(m),d)}}const fw={tokenize:dw},sm={tokenize:hw};function dw(a){const l=this,r=[];let o=0,c,f,d;return m;function m(F){if(o<r.length){const re=r[o];return l.containerState=re[1],a.attempt(re[0].continuation,g,p)(F)}return p(F)}function g(F){if(o++,l.containerState._closeFlow){l.containerState._closeFlow=void 0,c&&V();const re=l.events.length;let oe=re,B;for(;oe--;)if(l.events[oe][0]==="exit"&&l.events[oe][1].type==="chunkFlow"){B=l.events[oe][1].end;break}O(o);let K=re;for(;K<l.events.length;)l.events[K][1].end={...B},K++;return ft(l.events,oe+1,0,l.events.slice(re)),l.events.length=K,p(F)}return m(F)}function p(F){if(o===r.length){if(!c)return x(F);if(c.currentConstruct&&c.currentConstruct.concrete)return U(F);l.interrupt=!!(c.currentConstruct&&!c._gfmTableDynamicInterruptHack)}return l.containerState={},a.check(sm,y,v)(F)}function y(F){return c&&V(),O(o),x(F)}function v(F){return l.parser.lazy[l.now().line]=o!==r.length,d=l.now().offset,U(F)}function x(F){return l.containerState={},a.attempt(sm,S,U)(F)}function S(F){return o++,r.push([l.currentConstruct,l.containerState]),x(F)}function U(F){if(F===null){c&&V(),O(0),a.consume(F);return}return c=c||l.parser.flow(l.now()),a.enter("chunkFlow",{_tokenizer:c,contentType:"flow",previous:f}),L(F)}function L(F){if(F===null){H(a.exit("chunkFlow"),!0),O(0),a.consume(F);return}return he(F)?(a.consume(F),H(a.exit("chunkFlow")),o=0,l.interrupt=void 0,m):(a.consume(F),L)}function H(F,re){const oe=l.sliceStream(F);if(re&&oe.push(null),F.previous=f,f&&(f.next=F),f=F,c.defineSkip(F.start),c.write(oe),l.parser.lazy[F.start.line]){let B=c.events.length;for(;B--;)if(c.events[B][1].start.offset<d&&(!c.events[B][1].end||c.events[B][1].end.offset>d))return;const K=l.events.length;let ce=K,fe,ge;for(;ce--;)if(l.events[ce][0]==="exit"&&l.events[ce][1].type==="chunkFlow"){if(fe){ge=l.events[ce][1].end;break}fe=!0}for(O(o),B=K;B<l.events.length;)l.events[B][1].end={...ge},B++;ft(l.events,ce+1,0,l.events.slice(K)),l.events.length=B}}function O(F){let re=r.length;for(;re-- >F;){const oe=r[re];l.containerState=oe[1],oe[0].exit.call(l,a)}r.length=F}function V(){c.write([null]),f=void 0,c=void 0,l.containerState._closeFlow=void 0}}function hw(a,l,r){return Ye(a,a.attempt(this.parser.constructs.document,l,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function um(a){if(a===null||Dn(a)||sw(a))return 1;if(ow(a))return 2}function Rc(a,l,r){const o=[];let c=-1;for(;++c<a.length;){const f=a[c].resolveAll;f&&!o.includes(f)&&(l=f(l,r),o.push(f))}return l}const uc={name:"attention",resolveAll:pw,tokenize:mw};function pw(a,l){let r=-1,o,c,f,d,m,g,p,y;for(;++r<a.length;)if(a[r][0]==="enter"&&a[r][1].type==="attentionSequence"&&a[r][1]._close){for(o=r;o--;)if(a[o][0]==="exit"&&a[o][1].type==="attentionSequence"&&a[o][1]._open&&l.sliceSerialize(a[o][1]).charCodeAt(0)===l.sliceSerialize(a[r][1]).charCodeAt(0)){if((a[o][1]._close||a[r][1]._open)&&(a[r][1].end.offset-a[r][1].start.offset)%3&&!((a[o][1].end.offset-a[o][1].start.offset+a[r][1].end.offset-a[r][1].start.offset)%3))continue;g=a[o][1].end.offset-a[o][1].start.offset>1&&a[r][1].end.offset-a[r][1].start.offset>1?2:1;const v={...a[o][1].end},x={...a[r][1].start};cm(v,-g),cm(x,g),d={type:g>1?"strongSequence":"emphasisSequence",start:v,end:{...a[o][1].end}},m={type:g>1?"strongSequence":"emphasisSequence",start:{...a[r][1].start},end:x},f={type:g>1?"strongText":"emphasisText",start:{...a[o][1].end},end:{...a[r][1].start}},c={type:g>1?"strong":"emphasis",start:{...d.start},end:{...m.end}},a[o][1].end={...d.start},a[r][1].start={...m.end},p=[],a[o][1].end.offset-a[o][1].start.offset&&(p=$n(p,[["enter",a[o][1],l],["exit",a[o][1],l]])),p=$n(p,[["enter",c,l],["enter",d,l],["exit",d,l],["enter",f,l]]),p=$n(p,Rc(l.parser.constructs.insideSpan.null,a.slice(o+1,r),l)),p=$n(p,[["exit",f,l],["enter",m,l],["exit",m,l],["exit",c,l]]),a[r][1].end.offset-a[r][1].start.offset?(y=2,p=$n(p,[["enter",a[r][1],l],["exit",a[r][1],l]])):y=0,ft(a,o-1,r-o+3,p),r=o+p.length-y-2;break}}for(r=-1;++r<a.length;)a[r][1].type==="attentionSequence"&&(a[r][1].type="data");return a}function mw(a,l){const r=this.parser.constructs.attentionMarkers.null,o=this.previous,c=um(o);let f;return d;function d(g){return f=g,a.enter("attentionSequence"),m(g)}function m(g){if(g===f)return a.consume(g),m;const p=a.exit("attentionSequence"),y=um(g),v=!y||y===2&&c||r.includes(g),x=!c||c===2&&y||r.includes(o);return p._open=!!(f===42?v:v&&(c||!x)),p._close=!!(f===42?x:x&&(y||!v)),l(g)}}function cm(a,l){a.column+=l,a.offset+=l,a._bufferIndex+=l}const gw={name:"autolink",tokenize:yw};function yw(a,l,r){let o=0;return c;function c(S){return a.enter("autolink"),a.enter("autolinkMarker"),a.consume(S),a.exit("autolinkMarker"),a.enter("autolinkProtocol"),f}function f(S){return ct(S)?(a.consume(S),d):S===64?r(S):p(S)}function d(S){return S===43||S===45||S===46||In(S)?(o=1,m(S)):p(S)}function m(S){return S===58?(a.consume(S),o=0,g):(S===43||S===45||S===46||In(S))&&o++<32?(a.consume(S),m):(o=0,p(S))}function g(S){return S===62?(a.exit("autolinkProtocol"),a.enter("autolinkMarker"),a.consume(S),a.exit("autolinkMarker"),a.exit("autolink"),l):S===null||S===32||S===60||oc(S)?r(S):(a.consume(S),g)}function p(S){return S===64?(a.consume(S),y):iw(S)?(a.consume(S),p):r(S)}function y(S){return In(S)?v(S):r(S)}function v(S){return S===46?(a.consume(S),o=0,y):S===62?(a.exit("autolinkProtocol").type="autolinkEmail",a.enter("autolinkMarker"),a.consume(S),a.exit("autolinkMarker"),a.exit("autolink"),l):x(S)}function x(S){if((S===45||In(S))&&o++<63){const U=S===45?x:v;return a.consume(S),U}return r(S)}}const ho={partial:!0,tokenize:vw};function vw(a,l,r){return o;function o(f){return Me(f)?Ye(a,c,"linePrefix")(f):c(f)}function c(f){return f===null||he(f)?l(f):r(f)}}const mg={continuation:{tokenize:Sw},exit:ww,name:"blockQuote",tokenize:bw};function bw(a,l,r){const o=this;return c;function c(d){if(d===62){const m=o.containerState;return m.open||(a.enter("blockQuote",{_container:!0}),m.open=!0),a.enter("blockQuotePrefix"),a.enter("blockQuoteMarker"),a.consume(d),a.exit("blockQuoteMarker"),f}return r(d)}function f(d){return Me(d)?(a.enter("blockQuotePrefixWhitespace"),a.consume(d),a.exit("blockQuotePrefixWhitespace"),a.exit("blockQuotePrefix"),l):(a.exit("blockQuotePrefix"),l(d))}}function Sw(a,l,r){const o=this;return c;function c(d){return Me(d)?Ye(a,f,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):f(d)}function f(d){return a.attempt(mg,l,r)(d)}}function ww(a){a.exit("blockQuote")}const gg={name:"characterEscape",tokenize:xw};function xw(a,l,r){return o;function o(f){return a.enter("characterEscape"),a.enter("escapeMarker"),a.consume(f),a.exit("escapeMarker"),c}function c(f){return rw(f)?(a.enter("characterEscapeValue"),a.consume(f),a.exit("characterEscapeValue"),a.exit("characterEscape"),l):r(f)}}const yg={name:"characterReference",tokenize:Cw};function Cw(a,l,r){const o=this;let c=0,f,d;return m;function m(v){return a.enter("characterReference"),a.enter("characterReferenceMarker"),a.consume(v),a.exit("characterReferenceMarker"),g}function g(v){return v===35?(a.enter("characterReferenceMarkerNumeric"),a.consume(v),a.exit("characterReferenceMarkerNumeric"),p):(a.enter("characterReferenceValue"),f=31,d=In,y(v))}function p(v){return v===88||v===120?(a.enter("characterReferenceMarkerHexadecimal"),a.consume(v),a.exit("characterReferenceMarkerHexadecimal"),a.enter("characterReferenceValue"),f=6,d=lw,y):(a.enter("characterReferenceValue"),f=7,d=sc,y(v))}function y(v){if(v===59&&c){const x=a.exit("characterReferenceValue");return d===In&&!Dc(o.sliceSerialize(x))?r(v):(a.enter("characterReferenceMarker"),a.consume(v),a.exit("characterReferenceMarker"),a.exit("characterReference"),l)}return d(v)&&c++<f?(a.consume(v),y):r(v)}}const fm={partial:!0,tokenize:Tw},dm={concrete:!0,name:"codeFenced",tokenize:kw};function kw(a,l,r){const o=this,c={partial:!0,tokenize:oe};let f=0,d=0,m;return g;function g(B){return p(B)}function p(B){const K=o.events[o.events.length-1];return f=K&&K[1].type==="linePrefix"?K[2].sliceSerialize(K[1],!0).length:0,m=B,a.enter("codeFenced"),a.enter("codeFencedFence"),a.enter("codeFencedFenceSequence"),y(B)}function y(B){return B===m?(d++,a.consume(B),y):d<3?r(B):(a.exit("codeFencedFenceSequence"),Me(B)?Ye(a,v,"whitespace")(B):v(B))}function v(B){return B===null||he(B)?(a.exit("codeFencedFence"),o.interrupt?l(B):a.check(fm,L,re)(B)):(a.enter("codeFencedFenceInfo"),a.enter("chunkString",{contentType:"string"}),x(B))}function x(B){return B===null||he(B)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),v(B)):Me(B)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),Ye(a,S,"whitespace")(B)):B===96&&B===m?r(B):(a.consume(B),x)}function S(B){return B===null||he(B)?v(B):(a.enter("codeFencedFenceMeta"),a.enter("chunkString",{contentType:"string"}),U(B))}function U(B){return B===null||he(B)?(a.exit("chunkString"),a.exit("codeFencedFenceMeta"),v(B)):B===96&&B===m?r(B):(a.consume(B),U)}function L(B){return a.attempt(c,re,H)(B)}function H(B){return a.enter("lineEnding"),a.consume(B),a.exit("lineEnding"),O}function O(B){return f>0&&Me(B)?Ye(a,V,"linePrefix",f+1)(B):V(B)}function V(B){return B===null||he(B)?a.check(fm,L,re)(B):(a.enter("codeFlowValue"),F(B))}function F(B){return B===null||he(B)?(a.exit("codeFlowValue"),V(B)):(a.consume(B),F)}function re(B){return a.exit("codeFenced"),l(B)}function oe(B,K,ce){let fe=0;return ge;function ge(W){return B.enter("lineEnding"),B.consume(W),B.exit("lineEnding"),ee}function ee(W){return B.enter("codeFencedFence"),Me(W)?Ye(B,J,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(W):J(W)}function J(W){return W===m?(B.enter("codeFencedFenceSequence"),Ae(W)):ce(W)}function Ae(W){return W===m?(fe++,B.consume(W),Ae):fe>=d?(B.exit("codeFencedFenceSequence"),Me(W)?Ye(B,ae,"whitespace")(W):ae(W)):ce(W)}function ae(W){return W===null||he(W)?(B.exit("codeFencedFence"),K(W)):ce(W)}}}function Tw(a,l,r){const o=this;return c;function c(d){return d===null?r(d):(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),f)}function f(d){return o.parser.lazy[o.now().line]?r(d):l(d)}}const Fu={name:"codeIndented",tokenize:Aw},Ew={partial:!0,tokenize:Dw};function Aw(a,l,r){const o=this;return c;function c(p){return a.enter("codeIndented"),Ye(a,f,"linePrefix",5)(p)}function f(p){const y=o.events[o.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?d(p):r(p)}function d(p){return p===null?g(p):he(p)?a.attempt(Ew,d,g)(p):(a.enter("codeFlowValue"),m(p))}function m(p){return p===null||he(p)?(a.exit("codeFlowValue"),d(p)):(a.consume(p),m)}function g(p){return a.exit("codeIndented"),l(p)}}function Dw(a,l,r){const o=this;return c;function c(d){return o.parser.lazy[o.now().line]?r(d):he(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),c):Ye(a,f,"linePrefix",5)(d)}function f(d){const m=o.events[o.events.length-1];return m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?l(d):he(d)?c(d):r(d)}}const Rw={name:"codeText",previous:Mw,resolve:zw,tokenize:Ow};function zw(a){let l=a.length-4,r=3,o,c;if((a[r][1].type==="lineEnding"||a[r][1].type==="space")&&(a[l][1].type==="lineEnding"||a[l][1].type==="space")){for(o=r;++o<l;)if(a[o][1].type==="codeTextData"){a[r][1].type="codeTextPadding",a[l][1].type="codeTextPadding",r+=2,l-=2;break}}for(o=r-1,l++;++o<=l;)c===void 0?o!==l&&a[o][1].type!=="lineEnding"&&(c=o):(o===l||a[o][1].type==="lineEnding")&&(a[c][1].type="codeTextData",o!==c+2&&(a[c][1].end=a[o-1][1].end,a.splice(c+2,o-c-2),l-=o-c-2,o=c+2),c=void 0);return a}function Mw(a){return a!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Ow(a,l,r){let o=0,c,f;return d;function d(v){return a.enter("codeText"),a.enter("codeTextSequence"),m(v)}function m(v){return v===96?(a.consume(v),o++,m):(a.exit("codeTextSequence"),g(v))}function g(v){return v===null?r(v):v===32?(a.enter("space"),a.consume(v),a.exit("space"),g):v===96?(f=a.enter("codeTextSequence"),c=0,y(v)):he(v)?(a.enter("lineEnding"),a.consume(v),a.exit("lineEnding"),g):(a.enter("codeTextData"),p(v))}function p(v){return v===null||v===32||v===96||he(v)?(a.exit("codeTextData"),g(v)):(a.consume(v),p)}function y(v){return v===96?(a.consume(v),c++,y):c===o?(a.exit("codeTextSequence"),a.exit("codeText"),l(v)):(f.type="codeTextData",p(v))}}class _w{constructor(l){this.left=l?[...l]:[],this.right=[]}get(l){if(l<0||l>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+l+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return l<this.left.length?this.left[l]:this.right[this.right.length-l+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(l,r){const o=r??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(l,o):l>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-l+this.left.length).reverse():this.left.slice(l).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(l,r,o){const c=r||0;this.setCursor(Math.trunc(l));const f=this.right.splice(this.right.length-c,Number.POSITIVE_INFINITY);return o&&Cl(this.left,o),f.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(l){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(l)}pushMany(l){this.setCursor(Number.POSITIVE_INFINITY),Cl(this.left,l)}unshift(l){this.setCursor(0),this.right.push(l)}unshiftMany(l){this.setCursor(0),Cl(this.right,l.reverse())}setCursor(l){if(!(l===this.left.length||l>this.left.length&&this.right.length===0||l<0&&this.left.length===0))if(l<this.left.length){const r=this.left.splice(l,Number.POSITIVE_INFINITY);Cl(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-l,Number.POSITIVE_INFINITY);Cl(this.left,r.reverse())}}}function Cl(a,l){let r=0;if(l.length<1e4)a.push(...l);else for(;r<l.length;)a.push(...l.slice(r,r+1e4)),r+=1e4}function vg(a){const l={};let r=-1,o,c,f,d,m,g,p;const y=new _w(a);for(;++r<y.length;){for(;r in l;)r=l[r];if(o=y.get(r),r&&o[1].type==="chunkFlow"&&y.get(r-1)[1].type==="listItemPrefix"&&(g=o[1]._tokenizer.events,f=0,f<g.length&&g[f][1].type==="lineEndingBlank"&&(f+=2),f<g.length&&g[f][1].type==="content"))for(;++f<g.length&&g[f][1].type!=="content";)g[f][1].type==="chunkText"&&(g[f][1]._isInFirstContentOfListItem=!0,f++);if(o[0]==="enter")o[1].contentType&&(Object.assign(l,Lw(y,r)),r=l[r],p=!0);else if(o[1]._container){for(f=r,c=void 0;f--;)if(d=y.get(f),d[1].type==="lineEnding"||d[1].type==="lineEndingBlank")d[0]==="enter"&&(c&&(y.get(c)[1].type="lineEndingBlank"),d[1].type="lineEnding",c=f);else if(!(d[1].type==="linePrefix"||d[1].type==="listItemIndent"))break;c&&(o[1].end={...y.get(c)[1].start},m=y.slice(c,r),m.unshift(o),y.splice(c,r-c+1,m))}}return ft(a,0,Number.POSITIVE_INFINITY,y.slice(0)),!p}function Lw(a,l){const r=a.get(l)[1],o=a.get(l)[2];let c=l-1;const f=[];let d=r._tokenizer;d||(d=o.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(d._contentTypeTextTrailing=!0));const m=d.events,g=[],p={};let y,v,x=-1,S=r,U=0,L=0;const H=[L];for(;S;){for(;a.get(++c)[1]!==S;);f.push(c),S._tokenizer||(y=o.sliceStream(S),S.next||y.push(null),v&&d.defineSkip(S.start),S._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=!0),d.write(y),S._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=void 0)),v=S,S=S.next}for(S=r;++x<m.length;)m[x][0]==="exit"&&m[x-1][0]==="enter"&&m[x][1].type===m[x-1][1].type&&m[x][1].start.line!==m[x][1].end.line&&(L=x+1,H.push(L),S._tokenizer=void 0,S.previous=void 0,S=S.next);for(d.events=[],S?(S._tokenizer=void 0,S.previous=void 0):H.pop(),x=H.length;x--;){const O=m.slice(H[x],H[x+1]),V=f.pop();g.push([V,V+O.length-1]),a.splice(V,2,O)}for(g.reverse(),x=-1;++x<g.length;)p[U+g[x][0]]=U+g[x][1],U+=g[x][1]-g[x][0]-1;return p}const Nw={resolve:Hw,tokenize:Bw},Uw={partial:!0,tokenize:Iw};function Hw(a){return vg(a),a}function Bw(a,l){let r;return o;function o(m){return a.enter("content"),r=a.enter("chunkContent",{contentType:"content"}),c(m)}function c(m){return m===null?f(m):he(m)?a.check(Uw,d,f)(m):(a.consume(m),c)}function f(m){return a.exit("chunkContent"),a.exit("content"),l(m)}function d(m){return a.consume(m),a.exit("chunkContent"),r.next=a.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,c}}function Iw(a,l,r){const o=this;return c;function c(d){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),Ye(a,f,"linePrefix")}function f(d){if(d===null||he(d))return r(d);const m=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?l(d):a.interrupt(o.parser.constructs.flow,r,l)(d)}}function bg(a,l,r,o,c,f,d,m,g){const p=g||Number.POSITIVE_INFINITY;let y=0;return v;function v(O){return O===60?(a.enter(o),a.enter(c),a.enter(f),a.consume(O),a.exit(f),x):O===null||O===32||O===41||oc(O)?r(O):(a.enter(o),a.enter(d),a.enter(m),a.enter("chunkString",{contentType:"string"}),L(O))}function x(O){return O===62?(a.enter(f),a.consume(O),a.exit(f),a.exit(c),a.exit(o),l):(a.enter(m),a.enter("chunkString",{contentType:"string"}),S(O))}function S(O){return O===62?(a.exit("chunkString"),a.exit(m),x(O)):O===null||O===60||he(O)?r(O):(a.consume(O),O===92?U:S)}function U(O){return O===60||O===62||O===92?(a.consume(O),S):S(O)}function L(O){return!y&&(O===null||O===41||Dn(O))?(a.exit("chunkString"),a.exit(m),a.exit(d),a.exit(o),l(O)):y<p&&O===40?(a.consume(O),y++,L):O===41?(a.consume(O),y--,L):O===null||O===32||O===40||oc(O)?r(O):(a.consume(O),O===92?H:L)}function H(O){return O===40||O===41||O===92?(a.consume(O),L):L(O)}}function Sg(a,l,r,o,c,f){const d=this;let m=0,g;return p;function p(S){return a.enter(o),a.enter(c),a.consume(S),a.exit(c),a.enter(f),y}function y(S){return m>999||S===null||S===91||S===93&&!g||S===94&&!m&&"_hiddenFootnoteSupport"in d.parser.constructs?r(S):S===93?(a.exit(f),a.enter(c),a.consume(S),a.exit(c),a.exit(o),l):he(S)?(a.enter("lineEnding"),a.consume(S),a.exit("lineEnding"),y):(a.enter("chunkString",{contentType:"string"}),v(S))}function v(S){return S===null||S===91||S===93||he(S)||m++>999?(a.exit("chunkString"),y(S)):(a.consume(S),g||(g=!Me(S)),S===92?x:v)}function x(S){return S===91||S===92||S===93?(a.consume(S),m++,v):v(S)}}function wg(a,l,r,o,c,f){let d;return m;function m(x){return x===34||x===39||x===40?(a.enter(o),a.enter(c),a.consume(x),a.exit(c),d=x===40?41:x,g):r(x)}function g(x){return x===d?(a.enter(c),a.consume(x),a.exit(c),a.exit(o),l):(a.enter(f),p(x))}function p(x){return x===d?(a.exit(f),g(d)):x===null?r(x):he(x)?(a.enter("lineEnding"),a.consume(x),a.exit("lineEnding"),Ye(a,p,"linePrefix")):(a.enter("chunkString",{contentType:"string"}),y(x))}function y(x){return x===d||x===null||he(x)?(a.exit("chunkString"),p(x)):(a.consume(x),x===92?v:y)}function v(x){return x===d||x===92?(a.consume(x),y):y(x)}}function El(a,l){let r;return o;function o(c){return he(c)?(a.enter("lineEnding"),a.consume(c),a.exit("lineEnding"),r=!0,o):Me(c)?Ye(a,o,r?"linePrefix":"lineSuffix")(c):l(c)}}const jw={name:"definition",tokenize:Yw},qw={partial:!0,tokenize:Gw};function Yw(a,l,r){const o=this;let c;return f;function f(S){return a.enter("definition"),d(S)}function d(S){return Sg.call(o,a,m,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(S)}function m(S){return c=Si(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),S===58?(a.enter("definitionMarker"),a.consume(S),a.exit("definitionMarker"),g):r(S)}function g(S){return Dn(S)?El(a,p)(S):p(S)}function p(S){return bg(a,y,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(S)}function y(S){return a.attempt(qw,v,v)(S)}function v(S){return Me(S)?Ye(a,x,"whitespace")(S):x(S)}function x(S){return S===null||he(S)?(a.exit("definition"),o.parser.defined.push(c),l(S)):r(S)}}function Gw(a,l,r){return o;function o(m){return Dn(m)?El(a,c)(m):r(m)}function c(m){return wg(a,f,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(m)}function f(m){return Me(m)?Ye(a,d,"whitespace")(m):d(m)}function d(m){return m===null||he(m)?l(m):r(m)}}const Fw={name:"hardBreakEscape",tokenize:Vw};function Vw(a,l,r){return o;function o(f){return a.enter("hardBreakEscape"),a.consume(f),c}function c(f){return he(f)?(a.exit("hardBreakEscape"),l(f)):r(f)}}const Xw={name:"headingAtx",resolve:Qw,tokenize:Ww};function Qw(a,l){let r=a.length-2,o=3,c,f;return a[o][1].type==="whitespace"&&(o+=2),r-2>o&&a[r][1].type==="whitespace"&&(r-=2),a[r][1].type==="atxHeadingSequence"&&(o===r-1||r-4>o&&a[r-2][1].type==="whitespace")&&(r-=o+1===r?2:4),r>o&&(c={type:"atxHeadingText",start:a[o][1].start,end:a[r][1].end},f={type:"chunkText",start:a[o][1].start,end:a[r][1].end,contentType:"text"},ft(a,o,r-o+1,[["enter",c,l],["enter",f,l],["exit",f,l],["exit",c,l]])),a}function Ww(a,l,r){let o=0;return c;function c(y){return a.enter("atxHeading"),f(y)}function f(y){return a.enter("atxHeadingSequence"),d(y)}function d(y){return y===35&&o++<6?(a.consume(y),d):y===null||Dn(y)?(a.exit("atxHeadingSequence"),m(y)):r(y)}function m(y){return y===35?(a.enter("atxHeadingSequence"),g(y)):y===null||he(y)?(a.exit("atxHeading"),l(y)):Me(y)?Ye(a,m,"whitespace")(y):(a.enter("atxHeadingText"),p(y))}function g(y){return y===35?(a.consume(y),g):(a.exit("atxHeadingSequence"),m(y))}function p(y){return y===null||y===35||Dn(y)?(a.exit("atxHeadingText"),m(y)):(a.consume(y),p)}}const Pw=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],hm=["pre","script","style","textarea"],Kw={concrete:!0,name:"htmlFlow",resolveTo:$w,tokenize:e0},Zw={partial:!0,tokenize:t0},Jw={partial:!0,tokenize:n0};function $w(a){let l=a.length;for(;l--&&!(a[l][0]==="enter"&&a[l][1].type==="htmlFlow"););return l>1&&a[l-2][1].type==="linePrefix"&&(a[l][1].start=a[l-2][1].start,a[l+1][1].start=a[l-2][1].start,a.splice(l-2,2)),a}function e0(a,l,r){const o=this;let c,f,d,m,g;return p;function p(w){return y(w)}function y(w){return a.enter("htmlFlow"),a.enter("htmlFlowData"),a.consume(w),v}function v(w){return w===33?(a.consume(w),x):w===47?(a.consume(w),f=!0,L):w===63?(a.consume(w),c=3,o.interrupt?l:C):ct(w)?(a.consume(w),d=String.fromCharCode(w),H):r(w)}function x(w){return w===45?(a.consume(w),c=2,S):w===91?(a.consume(w),c=5,m=0,U):ct(w)?(a.consume(w),c=4,o.interrupt?l:C):r(w)}function S(w){return w===45?(a.consume(w),o.interrupt?l:C):r(w)}function U(w){const Z="CDATA[";return w===Z.charCodeAt(m++)?(a.consume(w),m===Z.length?o.interrupt?l:J:U):r(w)}function L(w){return ct(w)?(a.consume(w),d=String.fromCharCode(w),H):r(w)}function H(w){if(w===null||w===47||w===62||Dn(w)){const Z=w===47,ue=d.toLowerCase();return!Z&&!f&&hm.includes(ue)?(c=1,o.interrupt?l(w):J(w)):Pw.includes(d.toLowerCase())?(c=6,Z?(a.consume(w),O):o.interrupt?l(w):J(w)):(c=7,o.interrupt&&!o.parser.lazy[o.now().line]?r(w):f?V(w):F(w))}return w===45||In(w)?(a.consume(w),d+=String.fromCharCode(w),H):r(w)}function O(w){return w===62?(a.consume(w),o.interrupt?l:J):r(w)}function V(w){return Me(w)?(a.consume(w),V):ge(w)}function F(w){return w===47?(a.consume(w),ge):w===58||w===95||ct(w)?(a.consume(w),re):Me(w)?(a.consume(w),F):ge(w)}function re(w){return w===45||w===46||w===58||w===95||In(w)?(a.consume(w),re):oe(w)}function oe(w){return w===61?(a.consume(w),B):Me(w)?(a.consume(w),oe):F(w)}function B(w){return w===null||w===60||w===61||w===62||w===96?r(w):w===34||w===39?(a.consume(w),g=w,K):Me(w)?(a.consume(w),B):ce(w)}function K(w){return w===g?(a.consume(w),g=null,fe):w===null||he(w)?r(w):(a.consume(w),K)}function ce(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||Dn(w)?oe(w):(a.consume(w),ce)}function fe(w){return w===47||w===62||Me(w)?F(w):r(w)}function ge(w){return w===62?(a.consume(w),ee):r(w)}function ee(w){return w===null||he(w)?J(w):Me(w)?(a.consume(w),ee):r(w)}function J(w){return w===45&&c===2?(a.consume(w),M):w===60&&c===1?(a.consume(w),X):w===62&&c===4?(a.consume(w),T):w===63&&c===3?(a.consume(w),C):w===93&&c===5?(a.consume(w),be):he(w)&&(c===6||c===7)?(a.exit("htmlFlowData"),a.check(Zw,I,Ae)(w)):w===null||he(w)?(a.exit("htmlFlowData"),Ae(w)):(a.consume(w),J)}function Ae(w){return a.check(Jw,ae,I)(w)}function ae(w){return a.enter("lineEnding"),a.consume(w),a.exit("lineEnding"),W}function W(w){return w===null||he(w)?Ae(w):(a.enter("htmlFlowData"),J(w))}function M(w){return w===45?(a.consume(w),C):J(w)}function X(w){return w===47?(a.consume(w),d="",te):J(w)}function te(w){if(w===62){const Z=d.toLowerCase();return hm.includes(Z)?(a.consume(w),T):J(w)}return ct(w)&&d.length<8?(a.consume(w),d+=String.fromCharCode(w),te):J(w)}function be(w){return w===93?(a.consume(w),C):J(w)}function C(w){return w===62?(a.consume(w),T):w===45&&c===2?(a.consume(w),C):J(w)}function T(w){return w===null||he(w)?(a.exit("htmlFlowData"),I(w)):(a.consume(w),T)}function I(w){return a.exit("htmlFlow"),l(w)}}function n0(a,l,r){const o=this;return c;function c(d){return he(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),f):r(d)}function f(d){return o.parser.lazy[o.now().line]?r(d):l(d)}}function t0(a,l,r){return o;function o(c){return a.enter("lineEnding"),a.consume(c),a.exit("lineEnding"),a.attempt(ho,l,r)}}const a0={name:"htmlText",tokenize:i0};function i0(a,l,r){const o=this;let c,f,d;return m;function m(C){return a.enter("htmlText"),a.enter("htmlTextData"),a.consume(C),g}function g(C){return C===33?(a.consume(C),p):C===47?(a.consume(C),oe):C===63?(a.consume(C),F):ct(C)?(a.consume(C),ce):r(C)}function p(C){return C===45?(a.consume(C),y):C===91?(a.consume(C),f=0,U):ct(C)?(a.consume(C),V):r(C)}function y(C){return C===45?(a.consume(C),S):r(C)}function v(C){return C===null?r(C):C===45?(a.consume(C),x):he(C)?(d=v,X(C)):(a.consume(C),v)}function x(C){return C===45?(a.consume(C),S):v(C)}function S(C){return C===62?M(C):C===45?x(C):v(C)}function U(C){const T="CDATA[";return C===T.charCodeAt(f++)?(a.consume(C),f===T.length?L:U):r(C)}function L(C){return C===null?r(C):C===93?(a.consume(C),H):he(C)?(d=L,X(C)):(a.consume(C),L)}function H(C){return C===93?(a.consume(C),O):L(C)}function O(C){return C===62?M(C):C===93?(a.consume(C),O):L(C)}function V(C){return C===null||C===62?M(C):he(C)?(d=V,X(C)):(a.consume(C),V)}function F(C){return C===null?r(C):C===63?(a.consume(C),re):he(C)?(d=F,X(C)):(a.consume(C),F)}function re(C){return C===62?M(C):F(C)}function oe(C){return ct(C)?(a.consume(C),B):r(C)}function B(C){return C===45||In(C)?(a.consume(C),B):K(C)}function K(C){return he(C)?(d=K,X(C)):Me(C)?(a.consume(C),K):M(C)}function ce(C){return C===45||In(C)?(a.consume(C),ce):C===47||C===62||Dn(C)?fe(C):r(C)}function fe(C){return C===47?(a.consume(C),M):C===58||C===95||ct(C)?(a.consume(C),ge):he(C)?(d=fe,X(C)):Me(C)?(a.consume(C),fe):M(C)}function ge(C){return C===45||C===46||C===58||C===95||In(C)?(a.consume(C),ge):ee(C)}function ee(C){return C===61?(a.consume(C),J):he(C)?(d=ee,X(C)):Me(C)?(a.consume(C),ee):fe(C)}function J(C){return C===null||C===60||C===61||C===62||C===96?r(C):C===34||C===39?(a.consume(C),c=C,Ae):he(C)?(d=J,X(C)):Me(C)?(a.consume(C),J):(a.consume(C),ae)}function Ae(C){return C===c?(a.consume(C),c=void 0,W):C===null?r(C):he(C)?(d=Ae,X(C)):(a.consume(C),Ae)}function ae(C){return C===null||C===34||C===39||C===60||C===61||C===96?r(C):C===47||C===62||Dn(C)?fe(C):(a.consume(C),ae)}function W(C){return C===47||C===62||Dn(C)?fe(C):r(C)}function M(C){return C===62?(a.consume(C),a.exit("htmlTextData"),a.exit("htmlText"),l):r(C)}function X(C){return a.exit("htmlTextData"),a.enter("lineEnding"),a.consume(C),a.exit("lineEnding"),te}function te(C){return Me(C)?Ye(a,be,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(C):be(C)}function be(C){return a.enter("htmlTextData"),d(C)}}const zc={name:"labelEnd",resolveAll:s0,resolveTo:u0,tokenize:c0},l0={tokenize:f0},r0={tokenize:d0},o0={tokenize:h0};function s0(a){let l=-1;const r=[];for(;++l<a.length;){const o=a[l][1];if(r.push(a[l]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const c=o.type==="labelImage"?4:2;o.type="data",l+=c}}return a.length!==r.length&&ft(a,0,a.length,r),a}function u0(a,l){let r=a.length,o=0,c,f,d,m;for(;r--;)if(c=a[r][1],f){if(c.type==="link"||c.type==="labelLink"&&c._inactive)break;a[r][0]==="enter"&&c.type==="labelLink"&&(c._inactive=!0)}else if(d){if(a[r][0]==="enter"&&(c.type==="labelImage"||c.type==="labelLink")&&!c._balanced&&(f=r,c.type!=="labelLink")){o=2;break}}else c.type==="labelEnd"&&(d=r);const g={type:a[f][1].type==="labelLink"?"link":"image",start:{...a[f][1].start},end:{...a[a.length-1][1].end}},p={type:"label",start:{...a[f][1].start},end:{...a[d][1].end}},y={type:"labelText",start:{...a[f+o+2][1].end},end:{...a[d-2][1].start}};return m=[["enter",g,l],["enter",p,l]],m=$n(m,a.slice(f+1,f+o+3)),m=$n(m,[["enter",y,l]]),m=$n(m,Rc(l.parser.constructs.insideSpan.null,a.slice(f+o+4,d-3),l)),m=$n(m,[["exit",y,l],a[d-2],a[d-1],["exit",p,l]]),m=$n(m,a.slice(d+1)),m=$n(m,[["exit",g,l]]),ft(a,f,a.length,m),a}function c0(a,l,r){const o=this;let c=o.events.length,f,d;for(;c--;)if((o.events[c][1].type==="labelImage"||o.events[c][1].type==="labelLink")&&!o.events[c][1]._balanced){f=o.events[c][1];break}return m;function m(x){return f?f._inactive?v(x):(d=o.parser.defined.includes(Si(o.sliceSerialize({start:f.end,end:o.now()}))),a.enter("labelEnd"),a.enter("labelMarker"),a.consume(x),a.exit("labelMarker"),a.exit("labelEnd"),g):r(x)}function g(x){return x===40?a.attempt(l0,y,d?y:v)(x):x===91?a.attempt(r0,y,d?p:v)(x):d?y(x):v(x)}function p(x){return a.attempt(o0,y,v)(x)}function y(x){return l(x)}function v(x){return f._balanced=!0,r(x)}}function f0(a,l,r){return o;function o(v){return a.enter("resource"),a.enter("resourceMarker"),a.consume(v),a.exit("resourceMarker"),c}function c(v){return Dn(v)?El(a,f)(v):f(v)}function f(v){return v===41?y(v):bg(a,d,m,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(v)}function d(v){return Dn(v)?El(a,g)(v):y(v)}function m(v){return r(v)}function g(v){return v===34||v===39||v===40?wg(a,p,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(v):y(v)}function p(v){return Dn(v)?El(a,y)(v):y(v)}function y(v){return v===41?(a.enter("resourceMarker"),a.consume(v),a.exit("resourceMarker"),a.exit("resource"),l):r(v)}}function d0(a,l,r){const o=this;return c;function c(m){return Sg.call(o,a,f,d,"reference","referenceMarker","referenceString")(m)}function f(m){return o.parser.defined.includes(Si(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?l(m):r(m)}function d(m){return r(m)}}function h0(a,l,r){return o;function o(f){return a.enter("reference"),a.enter("referenceMarker"),a.consume(f),a.exit("referenceMarker"),c}function c(f){return f===93?(a.enter("referenceMarker"),a.consume(f),a.exit("referenceMarker"),a.exit("reference"),l):r(f)}}const p0={name:"labelStartImage",resolveAll:zc.resolveAll,tokenize:m0};function m0(a,l,r){const o=this;return c;function c(m){return a.enter("labelImage"),a.enter("labelImageMarker"),a.consume(m),a.exit("labelImageMarker"),f}function f(m){return m===91?(a.enter("labelMarker"),a.consume(m),a.exit("labelMarker"),a.exit("labelImage"),d):r(m)}function d(m){return m===94&&"_hiddenFootnoteSupport"in o.parser.constructs?r(m):l(m)}}const g0={name:"labelStartLink",resolveAll:zc.resolveAll,tokenize:y0};function y0(a,l,r){const o=this;return c;function c(d){return a.enter("labelLink"),a.enter("labelMarker"),a.consume(d),a.exit("labelMarker"),a.exit("labelLink"),f}function f(d){return d===94&&"_hiddenFootnoteSupport"in o.parser.constructs?r(d):l(d)}}const Vu={name:"lineEnding",tokenize:v0};function v0(a,l){return r;function r(o){return a.enter("lineEnding"),a.consume(o),a.exit("lineEnding"),Ye(a,l,"linePrefix")}}const lo={name:"thematicBreak",tokenize:b0};function b0(a,l,r){let o=0,c;return f;function f(p){return a.enter("thematicBreak"),d(p)}function d(p){return c=p,m(p)}function m(p){return p===c?(a.enter("thematicBreakSequence"),g(p)):o>=3&&(p===null||he(p))?(a.exit("thematicBreak"),l(p)):r(p)}function g(p){return p===c?(a.consume(p),o++,g):(a.exit("thematicBreakSequence"),Me(p)?Ye(a,m,"whitespace")(p):m(p))}}const An={continuation:{tokenize:C0},exit:T0,name:"list",tokenize:x0},S0={partial:!0,tokenize:E0},w0={partial:!0,tokenize:k0};function x0(a,l,r){const o=this,c=o.events[o.events.length-1];let f=c&&c[1].type==="linePrefix"?c[2].sliceSerialize(c[1],!0).length:0,d=0;return m;function m(S){const U=o.containerState.type||(S===42||S===43||S===45?"listUnordered":"listOrdered");if(U==="listUnordered"?!o.containerState.marker||S===o.containerState.marker:sc(S)){if(o.containerState.type||(o.containerState.type=U,a.enter(U,{_container:!0})),U==="listUnordered")return a.enter("listItemPrefix"),S===42||S===45?a.check(lo,r,p)(S):p(S);if(!o.interrupt||S===49)return a.enter("listItemPrefix"),a.enter("listItemValue"),g(S)}return r(S)}function g(S){return sc(S)&&++d<10?(a.consume(S),g):(!o.interrupt||d<2)&&(o.containerState.marker?S===o.containerState.marker:S===41||S===46)?(a.exit("listItemValue"),p(S)):r(S)}function p(S){return a.enter("listItemMarker"),a.consume(S),a.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||S,a.check(ho,o.interrupt?r:y,a.attempt(S0,x,v))}function y(S){return o.containerState.initialBlankLine=!0,f++,x(S)}function v(S){return Me(S)?(a.enter("listItemPrefixWhitespace"),a.consume(S),a.exit("listItemPrefixWhitespace"),x):r(S)}function x(S){return o.containerState.size=f+o.sliceSerialize(a.exit("listItemPrefix"),!0).length,l(S)}}function C0(a,l,r){const o=this;return o.containerState._closeFlow=void 0,a.check(ho,c,f);function c(m){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,Ye(a,l,"listItemIndent",o.containerState.size+1)(m)}function f(m){return o.containerState.furtherBlankLines||!Me(m)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,d(m)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,a.attempt(w0,l,d)(m))}function d(m){return o.containerState._closeFlow=!0,o.interrupt=void 0,Ye(a,a.attempt(An,l,r),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m)}}function k0(a,l,r){const o=this;return Ye(a,c,"listItemIndent",o.containerState.size+1);function c(f){const d=o.events[o.events.length-1];return d&&d[1].type==="listItemIndent"&&d[2].sliceSerialize(d[1],!0).length===o.containerState.size?l(f):r(f)}}function T0(a){a.exit(this.containerState.type)}function E0(a,l,r){const o=this;return Ye(a,c,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function c(f){const d=o.events[o.events.length-1];return!Me(f)&&d&&d[1].type==="listItemPrefixWhitespace"?l(f):r(f)}}const pm={name:"setextUnderline",resolveTo:A0,tokenize:D0};function A0(a,l){let r=a.length,o,c,f;for(;r--;)if(a[r][0]==="enter"){if(a[r][1].type==="content"){o=r;break}a[r][1].type==="paragraph"&&(c=r)}else a[r][1].type==="content"&&a.splice(r,1),!f&&a[r][1].type==="definition"&&(f=r);const d={type:"setextHeading",start:{...a[o][1].start},end:{...a[a.length-1][1].end}};return a[c][1].type="setextHeadingText",f?(a.splice(c,0,["enter",d,l]),a.splice(f+1,0,["exit",a[o][1],l]),a[o][1].end={...a[f][1].end}):a[o][1]=d,a.push(["exit",d,l]),a}function D0(a,l,r){const o=this;let c;return f;function f(p){let y=o.events.length,v;for(;y--;)if(o.events[y][1].type!=="lineEnding"&&o.events[y][1].type!=="linePrefix"&&o.events[y][1].type!=="content"){v=o.events[y][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||v)?(a.enter("setextHeadingLine"),c=p,d(p)):r(p)}function d(p){return a.enter("setextHeadingLineSequence"),m(p)}function m(p){return p===c?(a.consume(p),m):(a.exit("setextHeadingLineSequence"),Me(p)?Ye(a,g,"lineSuffix")(p):g(p))}function g(p){return p===null||he(p)?(a.exit("setextHeadingLine"),l(p)):r(p)}}const R0={tokenize:z0};function z0(a){const l=this,r=a.attempt(ho,o,a.attempt(this.parser.constructs.flowInitial,c,Ye(a,a.attempt(this.parser.constructs.flow,c,a.attempt(Nw,c)),"linePrefix")));return r;function o(f){if(f===null){a.consume(f);return}return a.enter("lineEndingBlank"),a.consume(f),a.exit("lineEndingBlank"),l.currentConstruct=void 0,r}function c(f){if(f===null){a.consume(f);return}return a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),l.currentConstruct=void 0,r}}const M0={resolveAll:Cg()},O0=xg("string"),_0=xg("text");function xg(a){return{resolveAll:Cg(a==="text"?L0:void 0),tokenize:l};function l(r){const o=this,c=this.parser.constructs[a],f=r.attempt(c,d,m);return d;function d(y){return p(y)?f(y):m(y)}function m(y){if(y===null){r.consume(y);return}return r.enter("data"),r.consume(y),g}function g(y){return p(y)?(r.exit("data"),f(y)):(r.consume(y),g)}function p(y){if(y===null)return!0;const v=c[y];let x=-1;if(v)for(;++x<v.length;){const S=v[x];if(!S.previous||S.previous.call(o,o.previous))return!0}return!1}}}function Cg(a){return l;function l(r,o){let c=-1,f;for(;++c<=r.length;)f===void 0?r[c]&&r[c][1].type==="data"&&(f=c,c++):(!r[c]||r[c][1].type!=="data")&&(c!==f+2&&(r[f][1].end=r[c-1][1].end,r.splice(f+2,c-f-2),c=f+2),f=void 0);return a?a(r,o):r}}function L0(a,l){let r=0;for(;++r<=a.length;)if((r===a.length||a[r][1].type==="lineEnding")&&a[r-1][1].type==="data"){const o=a[r-1][1],c=l.sliceStream(o);let f=c.length,d=-1,m=0,g;for(;f--;){const p=c[f];if(typeof p=="string"){for(d=p.length;p.charCodeAt(d-1)===32;)m++,d--;if(d)break;d=-1}else if(p===-2)g=!0,m++;else if(p!==-1){f++;break}}if(l._contentTypeTextTrailing&&r===a.length&&(m=0),m){const p={type:r===a.length||g||m<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:f?d:o.start._bufferIndex+d,_index:o.start._index+f,line:o.end.line,column:o.end.column-m,offset:o.end.offset-m},end:{...o.end}};o.end={...p.start},o.start.offset===o.end.offset?Object.assign(o,p):(a.splice(r,0,["enter",p,l],["exit",p,l]),r+=2)}r++}return a}const N0={42:An,43:An,45:An,48:An,49:An,50:An,51:An,52:An,53:An,54:An,55:An,56:An,57:An,62:mg},U0={91:jw},H0={[-2]:Fu,[-1]:Fu,32:Fu},B0={35:Xw,42:lo,45:[pm,lo],60:Kw,61:pm,95:lo,96:dm,126:dm},I0={38:yg,92:gg},j0={[-5]:Vu,[-4]:Vu,[-3]:Vu,33:p0,38:yg,42:uc,60:[gw,a0],91:g0,92:[Fw,gg],93:zc,95:uc,96:Rw},q0={null:[uc,M0]},Y0={null:[42,95]},G0={null:[]},F0=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Y0,contentInitial:U0,disable:G0,document:N0,flow:B0,flowInitial:H0,insideSpan:q0,string:I0,text:j0},Symbol.toStringTag,{value:"Module"}));function V0(a,l,r){let o={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const c={},f=[];let d=[],m=[];const g={attempt:K(oe),check:K(B),consume:V,enter:F,exit:re,interrupt:K(B,{interrupt:!0})},p={code:null,containerState:{},defineSkip:L,events:[],now:U,parser:a,previous:null,sliceSerialize:x,sliceStream:S,write:v};let y=l.tokenize.call(p,g);return l.resolveAll&&f.push(l),p;function v(ee){return d=$n(d,ee),H(),d[d.length-1]!==null?[]:(ce(l,0),p.events=Rc(f,p.events,p),p.events)}function x(ee,J){return Q0(S(ee),J)}function S(ee){return X0(d,ee)}function U(){const{_bufferIndex:ee,_index:J,line:Ae,column:ae,offset:W}=o;return{_bufferIndex:ee,_index:J,line:Ae,column:ae,offset:W}}function L(ee){c[ee.line]=ee.column,ge()}function H(){let ee;for(;o._index<d.length;){const J=d[o._index];if(typeof J=="string")for(ee=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===ee&&o._bufferIndex<J.length;)O(J.charCodeAt(o._bufferIndex));else O(J)}}function O(ee){y=y(ee)}function V(ee){he(ee)?(o.line++,o.column=1,o.offset+=ee===-3?2:1,ge()):ee!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===d[o._index].length&&(o._bufferIndex=-1,o._index++)),p.previous=ee}function F(ee,J){const Ae=J||{};return Ae.type=ee,Ae.start=U(),p.events.push(["enter",Ae,p]),m.push(Ae),Ae}function re(ee){const J=m.pop();return J.end=U(),p.events.push(["exit",J,p]),J}function oe(ee,J){ce(ee,J.from)}function B(ee,J){J.restore()}function K(ee,J){return Ae;function Ae(ae,W,M){let X,te,be,C;return Array.isArray(ae)?I(ae):"tokenize"in ae?I([ae]):T(ae);function T(ie){return Ce;function Ce(Ve){const Ne=Ve!==null&&ie[Ve],Yn=Ve!==null&&ie.null,dt=[...Array.isArray(Ne)?Ne:Ne?[Ne]:[],...Array.isArray(Yn)?Yn:Yn?[Yn]:[]];return I(dt)(Ve)}}function I(ie){return X=ie,te=0,ie.length===0?M:w(ie[te])}function w(ie){return Ce;function Ce(Ve){return C=fe(),be=ie,ie.partial||(p.currentConstruct=ie),ie.name&&p.parser.constructs.disable.null.includes(ie.name)?ue():ie.tokenize.call(J?Object.assign(Object.create(p),J):p,g,Z,ue)(Ve)}}function Z(ie){return ee(be,C),W}function ue(ie){return C.restore(),++te<X.length?w(X[te]):M}}}function ce(ee,J){ee.resolveAll&&!f.includes(ee)&&f.push(ee),ee.resolve&&ft(p.events,J,p.events.length-J,ee.resolve(p.events.slice(J),p)),ee.resolveTo&&(p.events=ee.resolveTo(p.events,p))}function fe(){const ee=U(),J=p.previous,Ae=p.currentConstruct,ae=p.events.length,W=Array.from(m);return{from:ae,restore:M};function M(){o=ee,p.previous=J,p.currentConstruct=Ae,p.events.length=ae,m=W,ge()}}function ge(){o.line in c&&o.column<2&&(o.column=c[o.line],o.offset+=c[o.line]-1)}}function X0(a,l){const r=l.start._index,o=l.start._bufferIndex,c=l.end._index,f=l.end._bufferIndex;let d;if(r===c)d=[a[r].slice(o,f)];else{if(d=a.slice(r,c),o>-1){const m=d[0];typeof m=="string"?d[0]=m.slice(o):d.shift()}f>0&&d.push(a[c].slice(0,f))}return d}function Q0(a,l){let r=-1;const o=[];let c;for(;++r<a.length;){const f=a[r];let d;if(typeof f=="string")d=f;else switch(f){case-5:{d="\r";break}case-4:{d=`
`;break}case-3:{d=`\r
`;break}case-2:{d=l?" ":"	";break}case-1:{if(!l&&c)continue;d=" ";break}default:d=String.fromCharCode(f)}c=f===-2,o.push(d)}return o.join("")}function W0(a){const o={constructs:nw([F0,...(a||{}).extensions||[]]),content:c(uw),defined:[],document:c(fw),flow:c(R0),lazy:{},string:c(O0),text:c(_0)};return o;function c(f){return d;function d(m){return V0(o,f,m)}}}function P0(a){for(;!vg(a););return a}const mm=/[\0\t\n\r]/g;function K0(){let a=1,l="",r=!0,o;return c;function c(f,d,m){const g=[];let p,y,v,x,S;for(f=l+(typeof f=="string"?f.toString():new TextDecoder(d||void 0).decode(f)),v=0,l="",r&&(f.charCodeAt(0)===65279&&v++,r=void 0);v<f.length;){if(mm.lastIndex=v,p=mm.exec(f),x=p&&p.index!==void 0?p.index:f.length,S=f.charCodeAt(x),!p){l=f.slice(v);break}if(S===10&&v===x&&o)g.push(-3),o=void 0;else switch(o&&(g.push(-5),o=void 0),v<x&&(g.push(f.slice(v,x)),a+=x-v),S){case 0:{g.push(65533),a++;break}case 9:{for(y=Math.ceil(a/4)*4,g.push(-2);a++<y;)g.push(-1);break}case 10:{g.push(-4),a=1;break}default:o=!0,a=1}v=x+1}return m&&(o&&g.push(-5),l&&g.push(l),g.push(null)),g}}const Z0=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function J0(a){return a.replace(Z0,$0)}function $0(a,l,r){if(l)return l;if(r.charCodeAt(0)===35){const c=r.charCodeAt(1),f=c===120||c===88;return pg(r.slice(f?2:1),f?16:10)}return Dc(r)||a}const kg={}.hasOwnProperty;function ex(a,l,r){return typeof l!="string"&&(r=l,l=void 0),nx(r)(P0(W0(r).document().write(K0()(a,l,!0))))}function nx(a){const l={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:f(Ma),autolinkProtocol:fe,autolinkEmail:fe,atxHeading:f(Ra),blockQuote:f(Yn),characterEscape:fe,characterReference:fe,codeFenced:f(dt),codeFencedFenceInfo:d,codeFencedFenceMeta:d,codeIndented:f(dt,d),codeText:f(Ti,d),codeTextData:fe,data:fe,codeFlowValue:fe,definition:f(Ll),definitionDestinationString:d,definitionLabelString:d,definitionTitleString:d,emphasis:f(ht),hardBreakEscape:f(za),hardBreakTrailing:f(za),htmlFlow:f(Nl,d),htmlFlowData:fe,htmlText:f(Nl,d),htmlTextData:fe,image:f(Ul),label:d,link:f(Ma),listItem:f(Ei),listItemValue:x,listOrdered:f(Oa,v),listUnordered:f(Oa),paragraph:f(go),reference:w,referenceString:d,resourceDestinationString:d,resourceTitleString:d,setextHeading:f(Ra),strong:f(yo),thematicBreak:f(vo)},exit:{atxHeading:g(),atxHeadingSequence:oe,autolink:g(),autolinkEmail:Ne,autolinkProtocol:Ve,blockQuote:g(),characterEscapeValue:ge,characterReferenceMarkerHexadecimal:ue,characterReferenceMarkerNumeric:ue,characterReferenceValue:ie,characterReference:Ce,codeFenced:g(H),codeFencedFence:L,codeFencedFenceInfo:S,codeFencedFenceMeta:U,codeFlowValue:ge,codeIndented:g(O),codeText:g(W),codeTextData:ge,data:ge,definition:g(),definitionDestinationString:re,definitionLabelString:V,definitionTitleString:F,emphasis:g(),hardBreakEscape:g(J),hardBreakTrailing:g(J),htmlFlow:g(Ae),htmlFlowData:ge,htmlText:g(ae),htmlTextData:ge,image:g(X),label:be,labelText:te,lineEnding:ee,link:g(M),listItem:g(),listOrdered:g(),listUnordered:g(),paragraph:g(),referenceString:Z,resourceDestinationString:C,resourceTitleString:T,resource:I,setextHeading:g(ce),setextHeadingLineSequence:K,setextHeadingText:B,strong:g(),thematicBreak:g()}};Tg(l,(a||{}).mdastExtensions||[]);const r={};return o;function o(j){let P={type:"root",children:[]};const de={stack:[P],tokenStack:[],config:l,enter:m,exit:p,buffer:d,resume:y,data:r},Se=[];let Oe=-1;for(;++Oe<j.length;)if(j[Oe][1].type==="listOrdered"||j[Oe][1].type==="listUnordered")if(j[Oe][0]==="enter")Se.push(Oe);else{const zn=Se.pop();Oe=c(j,zn,Oe)}for(Oe=-1;++Oe<j.length;){const zn=l[j[Oe][0]];kg.call(zn,j[Oe][1].type)&&zn[j[Oe][1].type].call(Object.assign({sliceSerialize:j[Oe][2].sliceSerialize},de),j[Oe][1])}if(de.tokenStack.length>0){const zn=de.tokenStack[de.tokenStack.length-1];(zn[1]||gm).call(de,void 0,zn[0])}for(P.position={start:ra(j.length>0?j[0][1].start:{line:1,column:1,offset:0}),end:ra(j.length>0?j[j.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<l.transforms.length;)P=l.transforms[Oe](P)||P;return P}function c(j,P,de){let Se=P-1,Oe=-1,zn=!1,pt,yn,an,bn;for(;++Se<=de;){const Ie=j[Se];switch(Ie[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ie[0]==="enter"?Oe++:Oe--,bn=void 0;break}case"lineEndingBlank":{Ie[0]==="enter"&&(pt&&!bn&&!Oe&&!an&&(an=Se),bn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:bn=void 0}if(!Oe&&Ie[0]==="enter"&&Ie[1].type==="listItemPrefix"||Oe===-1&&Ie[0]==="exit"&&(Ie[1].type==="listUnordered"||Ie[1].type==="listOrdered")){if(pt){let Nt=Se;for(yn=void 0;Nt--;){const et=j[Nt];if(et[1].type==="lineEnding"||et[1].type==="lineEndingBlank"){if(et[0]==="exit")continue;yn&&(j[yn][1].type="lineEndingBlank",zn=!0),et[1].type="lineEnding",yn=Nt}else if(!(et[1].type==="linePrefix"||et[1].type==="blockQuotePrefix"||et[1].type==="blockQuotePrefixWhitespace"||et[1].type==="blockQuoteMarker"||et[1].type==="listItemIndent"))break}an&&(!yn||an<yn)&&(pt._spread=!0),pt.end=Object.assign({},yn?j[yn][1].start:Ie[1].end),j.splice(yn||Se,0,["exit",pt,Ie[2]]),Se++,de++}if(Ie[1].type==="listItemPrefix"){const Nt={type:"listItem",_spread:!1,start:Object.assign({},Ie[1].start),end:void 0};pt=Nt,j.splice(Se,0,["enter",Nt,Ie[2]]),Se++,de++,an=void 0,bn=!0}}}return j[P][1]._spread=zn,de}function f(j,P){return de;function de(Se){m.call(this,j(Se),Se),P&&P.call(this,Se)}}function d(){this.stack.push({type:"fragment",children:[]})}function m(j,P,de){this.stack[this.stack.length-1].children.push(j),this.stack.push(j),this.tokenStack.push([P,de||void 0]),j.position={start:ra(P.start),end:void 0}}function g(j){return P;function P(de){j&&j.call(this,de),p.call(this,de)}}function p(j,P){const de=this.stack.pop(),Se=this.tokenStack.pop();if(Se)Se[0].type!==j.type&&(P?P.call(this,j,Se[0]):(Se[1]||gm).call(this,j,Se[0]));else throw new Error("Cannot close `"+j.type+"` ("+Tl({start:j.start,end:j.end})+"): it’s not open");de.position.end=ra(j.end)}function y(){return $1(this.stack.pop())}function v(){this.data.expectingFirstListItemValue=!0}function x(j){if(this.data.expectingFirstListItemValue){const P=this.stack[this.stack.length-2];P.start=Number.parseInt(this.sliceSerialize(j),10),this.data.expectingFirstListItemValue=void 0}}function S(){const j=this.resume(),P=this.stack[this.stack.length-1];P.lang=j}function U(){const j=this.resume(),P=this.stack[this.stack.length-1];P.meta=j}function L(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function H(){const j=this.resume(),P=this.stack[this.stack.length-1];P.value=j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function O(){const j=this.resume(),P=this.stack[this.stack.length-1];P.value=j.replace(/(\r?\n|\r)$/g,"")}function V(j){const P=this.resume(),de=this.stack[this.stack.length-1];de.label=P,de.identifier=Si(this.sliceSerialize(j)).toLowerCase()}function F(){const j=this.resume(),P=this.stack[this.stack.length-1];P.title=j}function re(){const j=this.resume(),P=this.stack[this.stack.length-1];P.url=j}function oe(j){const P=this.stack[this.stack.length-1];if(!P.depth){const de=this.sliceSerialize(j).length;P.depth=de}}function B(){this.data.setextHeadingSlurpLineEnding=!0}function K(j){const P=this.stack[this.stack.length-1];P.depth=this.sliceSerialize(j).codePointAt(0)===61?1:2}function ce(){this.data.setextHeadingSlurpLineEnding=void 0}function fe(j){const de=this.stack[this.stack.length-1].children;let Se=de[de.length-1];(!Se||Se.type!=="text")&&(Se=gn(),Se.position={start:ra(j.start),end:void 0},de.push(Se)),this.stack.push(Se)}function ge(j){const P=this.stack.pop();P.value+=this.sliceSerialize(j),P.position.end=ra(j.end)}function ee(j){const P=this.stack[this.stack.length-1];if(this.data.atHardBreak){const de=P.children[P.children.length-1];de.position.end=ra(j.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&l.canContainEols.includes(P.type)&&(fe.call(this,j),ge.call(this,j))}function J(){this.data.atHardBreak=!0}function Ae(){const j=this.resume(),P=this.stack[this.stack.length-1];P.value=j}function ae(){const j=this.resume(),P=this.stack[this.stack.length-1];P.value=j}function W(){const j=this.resume(),P=this.stack[this.stack.length-1];P.value=j}function M(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const P=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=P,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function X(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const P=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=P,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function te(j){const P=this.sliceSerialize(j),de=this.stack[this.stack.length-2];de.label=J0(P),de.identifier=Si(P).toLowerCase()}function be(){const j=this.stack[this.stack.length-1],P=this.resume(),de=this.stack[this.stack.length-1];if(this.data.inReference=!0,de.type==="link"){const Se=j.children;de.children=Se}else de.alt=P}function C(){const j=this.resume(),P=this.stack[this.stack.length-1];P.url=j}function T(){const j=this.resume(),P=this.stack[this.stack.length-1];P.title=j}function I(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function Z(j){const P=this.resume(),de=this.stack[this.stack.length-1];de.label=P,de.identifier=Si(this.sliceSerialize(j)).toLowerCase(),this.data.referenceType="full"}function ue(j){this.data.characterReferenceType=j.type}function ie(j){const P=this.sliceSerialize(j),de=this.data.characterReferenceType;let Se;de?(Se=pg(P,de==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Se=Dc(P);const Oe=this.stack[this.stack.length-1];Oe.value+=Se}function Ce(j){const P=this.stack.pop();P.position.end=ra(j.end)}function Ve(j){ge.call(this,j);const P=this.stack[this.stack.length-1];P.url=this.sliceSerialize(j)}function Ne(j){ge.call(this,j);const P=this.stack[this.stack.length-1];P.url="mailto:"+this.sliceSerialize(j)}function Yn(){return{type:"blockquote",children:[]}}function dt(){return{type:"code",lang:null,meta:null,value:""}}function Ti(){return{type:"inlineCode",value:""}}function Ll(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ht(){return{type:"emphasis",children:[]}}function Ra(){return{type:"heading",depth:0,children:[]}}function za(){return{type:"break"}}function Nl(){return{type:"html",value:""}}function Ul(){return{type:"image",title:null,url:"",alt:null}}function Ma(){return{type:"link",title:null,url:"",children:[]}}function Oa(j){return{type:"list",ordered:j.type==="listOrdered",start:null,spread:j._spread,children:[]}}function Ei(j){return{type:"listItem",spread:j._spread,checked:null,children:[]}}function go(){return{type:"paragraph",children:[]}}function yo(){return{type:"strong",children:[]}}function gn(){return{type:"text",value:""}}function vo(){return{type:"thematicBreak"}}}function ra(a){return{line:a.line,column:a.column,offset:a.offset}}function Tg(a,l){let r=-1;for(;++r<l.length;){const o=l[r];Array.isArray(o)?Tg(a,o):tx(a,o)}}function tx(a,l){let r;for(r in l)if(kg.call(l,r))switch(r){case"canContainEols":{const o=l[r];o&&a[r].push(...o);break}case"transforms":{const o=l[r];o&&a[r].push(...o);break}case"enter":case"exit":{const o=l[r];o&&Object.assign(a[r],o);break}}}function gm(a,l){throw a?new Error("Cannot close `"+a.type+"` ("+Tl({start:a.start,end:a.end})+"): a different token (`"+l.type+"`, "+Tl({start:l.start,end:l.end})+") is open"):new Error("Cannot close document, a token (`"+l.type+"`, "+Tl({start:l.start,end:l.end})+") is still open")}function ax(a){const l=this;l.parser=r;function r(o){return ex(o,{...l.data("settings"),...a,extensions:l.data("micromarkExtensions")||[],mdastExtensions:l.data("fromMarkdownExtensions")||[]})}}function ix(a,l){const r={type:"element",tagName:"blockquote",properties:{},children:a.wrap(a.all(l),!0)};return a.patch(l,r),a.applyData(l,r)}function lx(a,l){const r={type:"element",tagName:"br",properties:{},children:[]};return a.patch(l,r),[a.applyData(l,r),{type:"text",value:`
`}]}function rx(a,l){const r=l.value?l.value+`
`:"",o={},c=l.lang?l.lang.split(/\s+/):[];c.length>0&&(o.className=["language-"+c[0]]);let f={type:"element",tagName:"code",properties:o,children:[{type:"text",value:r}]};return l.meta&&(f.data={meta:l.meta}),a.patch(l,f),f=a.applyData(l,f),f={type:"element",tagName:"pre",properties:{},children:[f]},a.patch(l,f),f}function ox(a,l){const r={type:"element",tagName:"del",properties:{},children:a.all(l)};return a.patch(l,r),a.applyData(l,r)}function sx(a,l){const r={type:"element",tagName:"em",properties:{},children:a.all(l)};return a.patch(l,r),a.applyData(l,r)}function ux(a,l){const r=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",o=String(l.identifier).toUpperCase(),c=ki(o.toLowerCase()),f=a.footnoteOrder.indexOf(o);let d,m=a.footnoteCounts.get(o);m===void 0?(m=0,a.footnoteOrder.push(o),d=a.footnoteOrder.length):d=f+1,m+=1,a.footnoteCounts.set(o,m);const g={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+c,id:r+"fnref-"+c+(m>1?"-"+m:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(d)}]};a.patch(l,g);const p={type:"element",tagName:"sup",properties:{},children:[g]};return a.patch(l,p),a.applyData(l,p)}function cx(a,l){const r={type:"element",tagName:"h"+l.depth,properties:{},children:a.all(l)};return a.patch(l,r),a.applyData(l,r)}function fx(a,l){if(a.options.allowDangerousHtml){const r={type:"raw",value:l.value};return a.patch(l,r),a.applyData(l,r)}}function Eg(a,l){const r=l.referenceType;let o="]";if(r==="collapsed"?o+="[]":r==="full"&&(o+="["+(l.label||l.identifier)+"]"),l.type==="imageReference")return[{type:"text",value:"!["+l.alt+o}];const c=a.all(l),f=c[0];f&&f.type==="text"?f.value="["+f.value:c.unshift({type:"text",value:"["});const d=c[c.length-1];return d&&d.type==="text"?d.value+=o:c.push({type:"text",value:o}),c}function dx(a,l){const r=String(l.identifier).toUpperCase(),o=a.definitionById.get(r);if(!o)return Eg(a,l);const c={src:ki(o.url||""),alt:l.alt};o.title!==null&&o.title!==void 0&&(c.title=o.title);const f={type:"element",tagName:"img",properties:c,children:[]};return a.patch(l,f),a.applyData(l,f)}function hx(a,l){const r={src:ki(l.url)};l.alt!==null&&l.alt!==void 0&&(r.alt=l.alt),l.title!==null&&l.title!==void 0&&(r.title=l.title);const o={type:"element",tagName:"img",properties:r,children:[]};return a.patch(l,o),a.applyData(l,o)}function px(a,l){const r={type:"text",value:l.value.replace(/\r?\n|\r/g," ")};a.patch(l,r);const o={type:"element",tagName:"code",properties:{},children:[r]};return a.patch(l,o),a.applyData(l,o)}function mx(a,l){const r=String(l.identifier).toUpperCase(),o=a.definitionById.get(r);if(!o)return Eg(a,l);const c={href:ki(o.url||"")};o.title!==null&&o.title!==void 0&&(c.title=o.title);const f={type:"element",tagName:"a",properties:c,children:a.all(l)};return a.patch(l,f),a.applyData(l,f)}function gx(a,l){const r={href:ki(l.url)};l.title!==null&&l.title!==void 0&&(r.title=l.title);const o={type:"element",tagName:"a",properties:r,children:a.all(l)};return a.patch(l,o),a.applyData(l,o)}function yx(a,l,r){const o=a.all(l),c=r?vx(r):Ag(l),f={},d=[];if(typeof l.checked=="boolean"){const y=o[0];let v;y&&y.type==="element"&&y.tagName==="p"?v=y:(v={type:"element",tagName:"p",properties:{},children:[]},o.unshift(v)),v.children.length>0&&v.children.unshift({type:"text",value:" "}),v.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:l.checked,disabled:!0},children:[]}),f.className=["task-list-item"]}let m=-1;for(;++m<o.length;){const y=o[m];(c||m!==0||y.type!=="element"||y.tagName!=="p")&&d.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!c?d.push(...y.children):d.push(y)}const g=o[o.length-1];g&&(c||g.type!=="element"||g.tagName!=="p")&&d.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:f,children:d};return a.patch(l,p),a.applyData(l,p)}function vx(a){let l=!1;if(a.type==="list"){l=a.spread||!1;const r=a.children;let o=-1;for(;!l&&++o<r.length;)l=Ag(r[o])}return l}function Ag(a){const l=a.spread;return l??a.children.length>1}function bx(a,l){const r={},o=a.all(l);let c=-1;for(typeof l.start=="number"&&l.start!==1&&(r.start=l.start);++c<o.length;){const d=o[c];if(d.type==="element"&&d.tagName==="li"&&d.properties&&Array.isArray(d.properties.className)&&d.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const f={type:"element",tagName:l.ordered?"ol":"ul",properties:r,children:a.wrap(o,!0)};return a.patch(l,f),a.applyData(l,f)}function Sx(a,l){const r={type:"element",tagName:"p",properties:{},children:a.all(l)};return a.patch(l,r),a.applyData(l,r)}function wx(a,l){const r={type:"root",children:a.wrap(a.all(l))};return a.patch(l,r),a.applyData(l,r)}function xx(a,l){const r={type:"element",tagName:"strong",properties:{},children:a.all(l)};return a.patch(l,r),a.applyData(l,r)}function Cx(a,l){const r=a.all(l),o=r.shift(),c=[];if(o){const d={type:"element",tagName:"thead",properties:{},children:a.wrap([o],!0)};a.patch(l.children[0],d),c.push(d)}if(r.length>0){const d={type:"element",tagName:"tbody",properties:{},children:a.wrap(r,!0)},m=kc(l.children[1]),g=og(l.children[l.children.length-1]);m&&g&&(d.position={start:m,end:g}),c.push(d)}const f={type:"element",tagName:"table",properties:{},children:a.wrap(c,!0)};return a.patch(l,f),a.applyData(l,f)}function kx(a,l,r){const o=r?r.children:void 0,f=(o?o.indexOf(l):1)===0?"th":"td",d=r&&r.type==="table"?r.align:void 0,m=d?d.length:l.children.length;let g=-1;const p=[];for(;++g<m;){const v=l.children[g],x={},S=d?d[g]:void 0;S&&(x.align=S);let U={type:"element",tagName:f,properties:x,children:[]};v&&(U.children=a.all(v),a.patch(v,U),U=a.applyData(v,U)),p.push(U)}const y={type:"element",tagName:"tr",properties:{},children:a.wrap(p,!0)};return a.patch(l,y),a.applyData(l,y)}function Tx(a,l){const r={type:"element",tagName:"td",properties:{},children:a.all(l)};return a.patch(l,r),a.applyData(l,r)}const ym=9,vm=32;function Ex(a){const l=String(a),r=/\r?\n|\r/g;let o=r.exec(l),c=0;const f=[];for(;o;)f.push(bm(l.slice(c,o.index),c>0,!0),o[0]),c=o.index+o[0].length,o=r.exec(l);return f.push(bm(l.slice(c),c>0,!1)),f.join("")}function bm(a,l,r){let o=0,c=a.length;if(l){let f=a.codePointAt(o);for(;f===ym||f===vm;)o++,f=a.codePointAt(o)}if(r){let f=a.codePointAt(c-1);for(;f===ym||f===vm;)c--,f=a.codePointAt(c-1)}return c>o?a.slice(o,c):""}function Ax(a,l){const r={type:"text",value:Ex(String(l.value))};return a.patch(l,r),a.applyData(l,r)}function Dx(a,l){const r={type:"element",tagName:"hr",properties:{},children:[]};return a.patch(l,r),a.applyData(l,r)}const Rx={blockquote:ix,break:lx,code:rx,delete:ox,emphasis:sx,footnoteReference:ux,heading:cx,html:fx,imageReference:dx,image:hx,inlineCode:px,linkReference:mx,link:gx,listItem:yx,list:bx,paragraph:Sx,root:wx,strong:xx,table:Cx,tableCell:Tx,tableRow:kx,text:Ax,thematicBreak:Dx,toml:eo,yaml:eo,definition:eo,footnoteDefinition:eo};function eo(){}const Dg=-1,po=0,Al=1,oo=2,Mc=3,Oc=4,_c=5,Lc=6,Rg=7,zg=8,Sm=typeof self=="object"?self:globalThis,zx=(a,l)=>{const r=(c,f)=>(a.set(f,c),c),o=c=>{if(a.has(c))return a.get(c);const[f,d]=l[c];switch(f){case po:case Dg:return r(d,c);case Al:{const m=r([],c);for(const g of d)m.push(o(g));return m}case oo:{const m=r({},c);for(const[g,p]of d)m[o(g)]=o(p);return m}case Mc:return r(new Date(d),c);case Oc:{const{source:m,flags:g}=d;return r(new RegExp(m,g),c)}case _c:{const m=r(new Map,c);for(const[g,p]of d)m.set(o(g),o(p));return m}case Lc:{const m=r(new Set,c);for(const g of d)m.add(o(g));return m}case Rg:{const{name:m,message:g}=d;return r(new Sm[m](g),c)}case zg:return r(BigInt(d),c);case"BigInt":return r(Object(BigInt(d)),c);case"ArrayBuffer":return r(new Uint8Array(d).buffer,d);case"DataView":{const{buffer:m}=new Uint8Array(d);return r(new DataView(m),d)}}return r(new Sm[f](d),c)};return o},wm=a=>zx(new Map,a)(0),vi="",{toString:Mx}={},{keys:Ox}=Object,kl=a=>{const l=typeof a;if(l!=="object"||!a)return[po,l];const r=Mx.call(a).slice(8,-1);switch(r){case"Array":return[Al,vi];case"Object":return[oo,vi];case"Date":return[Mc,vi];case"RegExp":return[Oc,vi];case"Map":return[_c,vi];case"Set":return[Lc,vi];case"DataView":return[Al,r]}return r.includes("Array")?[Al,r]:r.includes("Error")?[Rg,r]:[oo,r]},no=([a,l])=>a===po&&(l==="function"||l==="symbol"),_x=(a,l,r,o)=>{const c=(d,m)=>{const g=o.push(d)-1;return r.set(m,g),g},f=d=>{if(r.has(d))return r.get(d);let[m,g]=kl(d);switch(m){case po:{let y=d;switch(g){case"bigint":m=zg,y=d.toString();break;case"function":case"symbol":if(a)throw new TypeError("unable to serialize "+g);y=null;break;case"undefined":return c([Dg],d)}return c([m,y],d)}case Al:{if(g){let x=d;return g==="DataView"?x=new Uint8Array(d.buffer):g==="ArrayBuffer"&&(x=new Uint8Array(d)),c([g,[...x]],d)}const y=[],v=c([m,y],d);for(const x of d)y.push(f(x));return v}case oo:{if(g)switch(g){case"BigInt":return c([g,d.toString()],d);case"Boolean":case"Number":case"String":return c([g,d.valueOf()],d)}if(l&&"toJSON"in d)return f(d.toJSON());const y=[],v=c([m,y],d);for(const x of Ox(d))(a||!no(kl(d[x])))&&y.push([f(x),f(d[x])]);return v}case Mc:return c([m,d.toISOString()],d);case Oc:{const{source:y,flags:v}=d;return c([m,{source:y,flags:v}],d)}case _c:{const y=[],v=c([m,y],d);for(const[x,S]of d)(a||!(no(kl(x))||no(kl(S))))&&y.push([f(x),f(S)]);return v}case Lc:{const y=[],v=c([m,y],d);for(const x of d)(a||!no(kl(x)))&&y.push(f(x));return v}}const{message:p}=d;return c([m,{name:g,message:p}],d)};return f},xm=(a,{json:l,lossy:r}={})=>{const o=[];return _x(!(l||r),!!l,new Map,o)(a),o},so=typeof structuredClone=="function"?(a,l)=>l&&("json"in l||"lossy"in l)?wm(xm(a,l)):structuredClone(a):(a,l)=>wm(xm(a,l));function Lx(a,l){const r=[{type:"text",value:"↩"}];return l>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(l)}]}),r}function Nx(a,l){return"Back to reference "+(a+1)+(l>1?"-"+l:"")}function Ux(a){const l=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",r=a.options.footnoteBackContent||Lx,o=a.options.footnoteBackLabel||Nx,c=a.options.footnoteLabel||"Footnotes",f=a.options.footnoteLabelTagName||"h2",d=a.options.footnoteLabelProperties||{className:["sr-only"]},m=[];let g=-1;for(;++g<a.footnoteOrder.length;){const p=a.footnoteById.get(a.footnoteOrder[g]);if(!p)continue;const y=a.all(p),v=String(p.identifier).toUpperCase(),x=ki(v.toLowerCase());let S=0;const U=[],L=a.footnoteCounts.get(v);for(;L!==void 0&&++S<=L;){U.length>0&&U.push({type:"text",value:" "});let V=typeof r=="string"?r:r(g,S);typeof V=="string"&&(V={type:"text",value:V}),U.push({type:"element",tagName:"a",properties:{href:"#"+l+"fnref-"+x+(S>1?"-"+S:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(g,S),className:["data-footnote-backref"]},children:Array.isArray(V)?V:[V]})}const H=y[y.length-1];if(H&&H.type==="element"&&H.tagName==="p"){const V=H.children[H.children.length-1];V&&V.type==="text"?V.value+=" ":H.children.push({type:"text",value:" "}),H.children.push(...U)}else y.push(...U);const O={type:"element",tagName:"li",properties:{id:l+"fn-"+x},children:a.wrap(y,!0)};a.patch(p,O),m.push(O)}if(m.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:f,properties:{...so(d),id:"footnote-label"},children:[{type:"text",value:c}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:a.wrap(m,!0)},{type:"text",value:`
`}]}}const Mg=(function(a){if(a==null)return jx;if(typeof a=="function")return mo(a);if(typeof a=="object")return Array.isArray(a)?Hx(a):Bx(a);if(typeof a=="string")return Ix(a);throw new Error("Expected function, string, or object as test")});function Hx(a){const l=[];let r=-1;for(;++r<a.length;)l[r]=Mg(a[r]);return mo(o);function o(...c){let f=-1;for(;++f<l.length;)if(l[f].apply(this,c))return!0;return!1}}function Bx(a){const l=a;return mo(r);function r(o){const c=o;let f;for(f in a)if(c[f]!==l[f])return!1;return!0}}function Ix(a){return mo(l);function l(r){return r&&r.type===a}}function mo(a){return l;function l(r,o,c){return!!(qx(r)&&a.call(this,r,typeof o=="number"?o:void 0,c||void 0))}}function jx(){return!0}function qx(a){return a!==null&&typeof a=="object"&&"type"in a}const Og=[],Yx=!0,Cm=!1,Gx="skip";function Fx(a,l,r,o){let c;typeof l=="function"&&typeof r!="function"?(o=r,r=l):c=l;const f=Mg(c),d=o?-1:1;m(a,void 0,[])();function m(g,p,y){const v=g&&typeof g=="object"?g:{};if(typeof v.type=="string"){const S=typeof v.tagName=="string"?v.tagName:typeof v.name=="string"?v.name:void 0;Object.defineProperty(x,"name",{value:"node ("+(g.type+(S?"<"+S+">":""))+")"})}return x;function x(){let S=Og,U,L,H;if((!l||f(g,p,y[y.length-1]||void 0))&&(S=Vx(r(g,y)),S[0]===Cm))return S;if("children"in g&&g.children){const O=g;if(O.children&&S[0]!==Gx)for(L=(o?O.children.length:-1)+d,H=y.concat(O);L>-1&&L<O.children.length;){const V=O.children[L];if(U=m(V,L,H)(),U[0]===Cm)return U;L=typeof U[1]=="number"?U[1]:L+d}}return S}}}function Vx(a){return Array.isArray(a)?a:typeof a=="number"?[Yx,a]:a==null?Og:[a]}function _g(a,l,r,o){let c,f,d;typeof l=="function"&&typeof r!="function"?(f=void 0,d=l,c=r):(f=l,d=r,c=o),Fx(a,f,m,c);function m(g,p){const y=p[p.length-1],v=y?y.children.indexOf(g):void 0;return d(g,v,y)}}const cc={}.hasOwnProperty,Xx={};function Qx(a,l){const r=l||Xx,o=new Map,c=new Map,f=new Map,d={...Rx,...r.handlers},m={all:p,applyData:Px,definitionById:o,footnoteById:c,footnoteCounts:f,footnoteOrder:[],handlers:d,one:g,options:r,patch:Wx,wrap:Zx};return _g(a,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const v=y.type==="definition"?o:c,x=String(y.identifier).toUpperCase();v.has(x)||v.set(x,y)}}),m;function g(y,v){const x=y.type,S=m.handlers[x];if(cc.call(m.handlers,x)&&S)return S(m,y,v);if(m.options.passThrough&&m.options.passThrough.includes(x)){if("children"in y){const{children:L,...H}=y,O=so(H);return O.children=m.all(y),O}return so(y)}return(m.options.unknownHandler||Kx)(m,y,v)}function p(y){const v=[];if("children"in y){const x=y.children;let S=-1;for(;++S<x.length;){const U=m.one(x[S],y);if(U){if(S&&x[S-1].type==="break"&&(!Array.isArray(U)&&U.type==="text"&&(U.value=km(U.value)),!Array.isArray(U)&&U.type==="element")){const L=U.children[0];L&&L.type==="text"&&(L.value=km(L.value))}Array.isArray(U)?v.push(...U):v.push(U)}}}return v}}function Wx(a,l){a.position&&(l.position=M1(a))}function Px(a,l){let r=l;if(a&&a.data){const o=a.data.hName,c=a.data.hChildren,f=a.data.hProperties;if(typeof o=="string")if(r.type==="element")r.tagName=o;else{const d="children"in r?r.children:[r];r={type:"element",tagName:o,properties:{},children:d}}r.type==="element"&&f&&Object.assign(r.properties,so(f)),"children"in r&&r.children&&c!==null&&c!==void 0&&(r.children=c)}return r}function Kx(a,l){const r=l.data||{},o="value"in l&&!(cc.call(r,"hProperties")||cc.call(r,"hChildren"))?{type:"text",value:l.value}:{type:"element",tagName:"div",properties:{},children:a.all(l)};return a.patch(l,o),a.applyData(l,o)}function Zx(a,l){const r=[];let o=-1;for(l&&r.push({type:"text",value:`
`});++o<a.length;)o&&r.push({type:"text",value:`
`}),r.push(a[o]);return l&&a.length>0&&r.push({type:"text",value:`
`}),r}function km(a){let l=0,r=a.charCodeAt(l);for(;r===9||r===32;)l++,r=a.charCodeAt(l);return a.slice(l)}function Tm(a,l){const r=Qx(a,l),o=r.one(a,void 0),c=Ux(r),f=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return c&&f.children.push({type:"text",value:`
`},c),f}function Jx(a,l){return a&&"run"in a?async function(r,o){const c=Tm(r,{file:o,...l});await a.run(c,o)}:function(r,o){return Tm(r,{file:o,...a||l})}}function Em(a){if(a)throw a}var Xu,Am;function $x(){if(Am)return Xu;Am=1;var a=Object.prototype.hasOwnProperty,l=Object.prototype.toString,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,c=function(p){return typeof Array.isArray=="function"?Array.isArray(p):l.call(p)==="[object Array]"},f=function(p){if(!p||l.call(p)!=="[object Object]")return!1;var y=a.call(p,"constructor"),v=p.constructor&&p.constructor.prototype&&a.call(p.constructor.prototype,"isPrototypeOf");if(p.constructor&&!y&&!v)return!1;var x;for(x in p);return typeof x>"u"||a.call(p,x)},d=function(p,y){r&&y.name==="__proto__"?r(p,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):p[y.name]=y.newValue},m=function(p,y){if(y==="__proto__")if(a.call(p,y)){if(o)return o(p,y).value}else return;return p[y]};return Xu=function g(){var p,y,v,x,S,U,L=arguments[0],H=1,O=arguments.length,V=!1;for(typeof L=="boolean"&&(V=L,L=arguments[1]||{},H=2),(L==null||typeof L!="object"&&typeof L!="function")&&(L={});H<O;++H)if(p=arguments[H],p!=null)for(y in p)v=m(L,y),x=m(p,y),L!==x&&(V&&x&&(f(x)||(S=c(x)))?(S?(S=!1,U=v&&c(v)?v:[]):U=v&&f(v)?v:{},d(L,{name:y,newValue:g(V,U,x)})):typeof x<"u"&&d(L,{name:y,newValue:x}));return L},Xu}var eC=$x();const Qu=uo(eC);function fc(a){if(typeof a!="object"||a===null)return!1;const l=Object.getPrototypeOf(a);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function nC(){const a=[],l={run:r,use:o};return l;function r(...c){let f=-1;const d=c.pop();if(typeof d!="function")throw new TypeError("Expected function as last argument, not "+d);m(null,...c);function m(g,...p){const y=a[++f];let v=-1;if(g){d(g);return}for(;++v<c.length;)(p[v]===null||p[v]===void 0)&&(p[v]=c[v]);c=p,y?tC(y,m)(...p):d(null,...p)}}function o(c){if(typeof c!="function")throw new TypeError("Expected `middelware` to be a function, not "+c);return a.push(c),l}}function tC(a,l){let r;return o;function o(...d){const m=a.length>d.length;let g;m&&d.push(c);try{g=a.apply(this,d)}catch(p){const y=p;if(m&&r)throw y;return c(y)}m||(g&&g.then&&typeof g.then=="function"?g.then(f,c):g instanceof Error?c(g):f(g))}function c(d,...m){r||(r=!0,l(d,...m))}function f(d){c(null,d)}}const ut={basename:aC,dirname:iC,extname:lC,join:rC,sep:"/"};function aC(a,l){if(l!==void 0&&typeof l!="string")throw new TypeError('"ext" argument must be a string');_l(a);let r=0,o=-1,c=a.length,f;if(l===void 0||l.length===0||l.length>a.length){for(;c--;)if(a.codePointAt(c)===47){if(f){r=c+1;break}}else o<0&&(f=!0,o=c+1);return o<0?"":a.slice(r,o)}if(l===a)return"";let d=-1,m=l.length-1;for(;c--;)if(a.codePointAt(c)===47){if(f){r=c+1;break}}else d<0&&(f=!0,d=c+1),m>-1&&(a.codePointAt(c)===l.codePointAt(m--)?m<0&&(o=c):(m=-1,o=d));return r===o?o=d:o<0&&(o=a.length),a.slice(r,o)}function iC(a){if(_l(a),a.length===0)return".";let l=-1,r=a.length,o;for(;--r;)if(a.codePointAt(r)===47){if(o){l=r;break}}else o||(o=!0);return l<0?a.codePointAt(0)===47?"/":".":l===1&&a.codePointAt(0)===47?"//":a.slice(0,l)}function lC(a){_l(a);let l=a.length,r=-1,o=0,c=-1,f=0,d;for(;l--;){const m=a.codePointAt(l);if(m===47){if(d){o=l+1;break}continue}r<0&&(d=!0,r=l+1),m===46?c<0?c=l:f!==1&&(f=1):c>-1&&(f=-1)}return c<0||r<0||f===0||f===1&&c===r-1&&c===o+1?"":a.slice(c,r)}function rC(...a){let l=-1,r;for(;++l<a.length;)_l(a[l]),a[l]&&(r=r===void 0?a[l]:r+"/"+a[l]);return r===void 0?".":oC(r)}function oC(a){_l(a);const l=a.codePointAt(0)===47;let r=sC(a,!l);return r.length===0&&!l&&(r="."),r.length>0&&a.codePointAt(a.length-1)===47&&(r+="/"),l?"/"+r:r}function sC(a,l){let r="",o=0,c=-1,f=0,d=-1,m,g;for(;++d<=a.length;){if(d<a.length)m=a.codePointAt(d);else{if(m===47)break;m=47}if(m===47){if(!(c===d-1||f===1))if(c!==d-1&&f===2){if(r.length<2||o!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(g=r.lastIndexOf("/"),g!==r.length-1){g<0?(r="",o=0):(r=r.slice(0,g),o=r.length-1-r.lastIndexOf("/")),c=d,f=0;continue}}else if(r.length>0){r="",o=0,c=d,f=0;continue}}l&&(r=r.length>0?r+"/..":"..",o=2)}else r.length>0?r+="/"+a.slice(c+1,d):r=a.slice(c+1,d),o=d-c-1;c=d,f=0}else m===46&&f>-1?f++:f=-1}return r}function _l(a){if(typeof a!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(a))}const uC={cwd:cC};function cC(){return"/"}function dc(a){return!!(a!==null&&typeof a=="object"&&"href"in a&&a.href&&"protocol"in a&&a.protocol&&a.auth===void 0)}function fC(a){if(typeof a=="string")a=new URL(a);else if(!dc(a)){const l=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+a+"`");throw l.code="ERR_INVALID_ARG_TYPE",l}if(a.protocol!=="file:"){const l=new TypeError("The URL must be of scheme file");throw l.code="ERR_INVALID_URL_SCHEME",l}return dC(a)}function dC(a){if(a.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const l=a.pathname;let r=-1;for(;++r<l.length;)if(l.codePointAt(r)===37&&l.codePointAt(r+1)===50){const o=l.codePointAt(r+2);if(o===70||o===102){const c=new TypeError("File URL path must not include encoded / characters");throw c.code="ERR_INVALID_FILE_URL_PATH",c}}return decodeURIComponent(l)}const Wu=["history","path","basename","stem","extname","dirname"];class Lg{constructor(l){let r;l?dc(l)?r={path:l}:typeof l=="string"||hC(l)?r={value:l}:r=l:r={},this.cwd="cwd"in r?"":uC.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<Wu.length;){const f=Wu[o];f in r&&r[f]!==void 0&&r[f]!==null&&(this[f]=f==="history"?[...r[f]]:r[f])}let c;for(c in r)Wu.includes(c)||(this[c]=r[c])}get basename(){return typeof this.path=="string"?ut.basename(this.path):void 0}set basename(l){Ku(l,"basename"),Pu(l,"basename"),this.path=ut.join(this.dirname||"",l)}get dirname(){return typeof this.path=="string"?ut.dirname(this.path):void 0}set dirname(l){Dm(this.basename,"dirname"),this.path=ut.join(l||"",this.basename)}get extname(){return typeof this.path=="string"?ut.extname(this.path):void 0}set extname(l){if(Pu(l,"extname"),Dm(this.dirname,"extname"),l){if(l.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(l.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=ut.join(this.dirname,this.stem+(l||""))}get path(){return this.history[this.history.length-1]}set path(l){dc(l)&&(l=fC(l)),Ku(l,"path"),this.path!==l&&this.history.push(l)}get stem(){return typeof this.path=="string"?ut.basename(this.path,this.extname):void 0}set stem(l){Ku(l,"stem"),Pu(l,"stem"),this.path=ut.join(this.dirname||"",l+(this.extname||""))}fail(l,r,o){const c=this.message(l,r,o);throw c.fatal=!0,c}info(l,r,o){const c=this.message(l,r,o);return c.fatal=void 0,c}message(l,r,o){const c=new mn(l,r,o);return this.path&&(c.name=this.path+":"+c.name,c.file=this.path),c.fatal=!1,this.messages.push(c),c}toString(l){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(l||void 0).decode(this.value)}}function Pu(a,l){if(a&&a.includes(ut.sep))throw new Error("`"+l+"` cannot be a path: did not expect `"+ut.sep+"`")}function Ku(a,l){if(!a)throw new Error("`"+l+"` cannot be empty")}function Dm(a,l){if(!a)throw new Error("Setting `"+l+"` requires `path` to be set too")}function hC(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const pC=(function(a){const o=this.constructor.prototype,c=o[a],f=function(){return c.apply(f,arguments)};return Object.setPrototypeOf(f,o),f}),mC={}.hasOwnProperty;class Nc extends pC{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=nC()}copy(){const l=new Nc;let r=-1;for(;++r<this.attachers.length;){const o=this.attachers[r];l.use(...o)}return l.data(Qu(!0,{},this.namespace)),l}data(l,r){return typeof l=="string"?arguments.length===2?($u("data",this.frozen),this.namespace[l]=r,this):mC.call(this.namespace,l)&&this.namespace[l]||void 0:l?($u("data",this.frozen),this.namespace=l,this):this.namespace}freeze(){if(this.frozen)return this;const l=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const c=r.call(l,...o);typeof c=="function"&&this.transformers.use(c)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(l){this.freeze();const r=to(l),o=this.parser||this.Parser;return Zu("parse",o),o(String(r),r)}process(l,r){const o=this;return this.freeze(),Zu("process",this.parser||this.Parser),Ju("process",this.compiler||this.Compiler),r?c(void 0,r):new Promise(c);function c(f,d){const m=to(l),g=o.parse(m);o.run(g,m,function(y,v,x){if(y||!v||!x)return p(y);const S=v,U=o.stringify(S,x);vC(U)?x.value=U:x.result=U,p(y,x)});function p(y,v){y||!v?d(y):f?f(v):r(void 0,v)}}}processSync(l){let r=!1,o;return this.freeze(),Zu("processSync",this.parser||this.Parser),Ju("processSync",this.compiler||this.Compiler),this.process(l,c),zm("processSync","process",r),o;function c(f,d){r=!0,Em(f),o=d}}run(l,r,o){Rm(l),this.freeze();const c=this.transformers;return!o&&typeof r=="function"&&(o=r,r=void 0),o?f(void 0,o):new Promise(f);function f(d,m){const g=to(r);c.run(l,g,p);function p(y,v,x){const S=v||l;y?m(y):d?d(S):o(void 0,S,x)}}}runSync(l,r){let o=!1,c;return this.run(l,r,f),zm("runSync","run",o),c;function f(d,m){Em(d),c=m,o=!0}}stringify(l,r){this.freeze();const o=to(r),c=this.compiler||this.Compiler;return Ju("stringify",c),Rm(l),c(l,o)}use(l,...r){const o=this.attachers,c=this.namespace;if($u("use",this.frozen),l!=null)if(typeof l=="function")g(l,r);else if(typeof l=="object")Array.isArray(l)?m(l):d(l);else throw new TypeError("Expected usable value, not `"+l+"`");return this;function f(p){if(typeof p=="function")g(p,[]);else if(typeof p=="object")if(Array.isArray(p)){const[y,...v]=p;g(y,v)}else d(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function d(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");m(p.plugins),p.settings&&(c.settings=Qu(!0,c.settings,p.settings))}function m(p){let y=-1;if(p!=null)if(Array.isArray(p))for(;++y<p.length;){const v=p[y];f(v)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function g(p,y){let v=-1,x=-1;for(;++v<o.length;)if(o[v][0]===p){x=v;break}if(x===-1)o.push([p,...y]);else if(y.length>0){let[S,...U]=y;const L=o[x][1];fc(L)&&fc(S)&&(S=Qu(!0,L,S)),o[x]=[p,S,...U]}}}}const gC=new Nc().freeze();function Zu(a,l){if(typeof l!="function")throw new TypeError("Cannot `"+a+"` without `parser`")}function Ju(a,l){if(typeof l!="function")throw new TypeError("Cannot `"+a+"` without `compiler`")}function $u(a,l){if(l)throw new Error("Cannot call `"+a+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Rm(a){if(!fc(a)||typeof a.type!="string")throw new TypeError("Expected node, got `"+a+"`")}function zm(a,l,r){if(!r)throw new Error("`"+a+"` finished async. Use `"+l+"` instead")}function to(a){return yC(a)?a:new Lg(a)}function yC(a){return!!(a&&typeof a=="object"&&"message"in a&&"messages"in a)}function vC(a){return typeof a=="string"||bC(a)}function bC(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const SC="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Mm=[],Om={allowDangerousHtml:!0},wC=/^(https?|ircs?|mailto|xmpp)$/i,xC=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function CC(a){const l=kC(a),r=TC(a);return EC(l.runSync(l.parse(r),r),a)}function kC(a){const l=a.rehypePlugins||Mm,r=a.remarkPlugins||Mm,o=a.remarkRehypeOptions?{...a.remarkRehypeOptions,...Om}:Om;return gC().use(ax).use(r).use(Jx,o).use(l)}function TC(a){const l=a.children||"",r=new Lg;return typeof l=="string"&&(r.value=l),r}function EC(a,l){const r=l.allowedElements,o=l.allowElement,c=l.components,f=l.disallowedElements,d=l.skipHtml,m=l.unwrapDisallowed,g=l.urlTransform||AC;for(const y of xC)Object.hasOwn(l,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+SC+y.id,void 0);return _g(a,p),U1(a,{Fragment:sn.Fragment,components:c,ignoreInvalidStyle:!0,jsx:sn.jsx,jsxs:sn.jsxs,passKeys:!0,passNode:!0});function p(y,v,x){if(y.type==="raw"&&x&&typeof v=="number")return d?x.children.splice(v,1):x.children[v]={type:"text",value:y.value},v;if(y.type==="element"){let S;for(S in Gu)if(Object.hasOwn(Gu,S)&&Object.hasOwn(y.properties,S)){const U=y.properties[S],L=Gu[S];(L===null||L.includes(y.tagName))&&(y.properties[S]=g(String(U||""),S,y))}}if(y.type==="element"){let S=r?!r.includes(y.tagName):f?f.includes(y.tagName):!1;if(!S&&o&&typeof v=="number"&&(S=!o(y,v,x)),S&&x&&typeof v=="number")return m&&y.children?x.children.splice(v,1,...y.children):x.children.splice(v,1),v}}}function AC(a){const l=a.indexOf(":"),r=a.indexOf("?"),o=a.indexOf("#"),c=a.indexOf("/");return l===-1||c!==-1&&l>c||r!==-1&&l>r||o!==-1&&l>o||wC.test(a.slice(0,l))?a:""}function DC(){const{slug:a}=Gb(),l=wc.find(r=>r.slug===a);return l?sn.jsx("div",{className:"markdown",children:sn.jsx(CC,{children:l.content})}):sn.jsx("div",{children:"Document not found"})}function RC(){return sn.jsx(RS,{children:sn.jsxs("div",{style:{display:"flex",minHeight:"100vh"},children:[sn.jsx(o1,{}),sn.jsxs(lS,{children:[sn.jsx(nc,{path:"/",element:sn.jsx(aS,{to:`/docs/${wc[0].slug}`})}),sn.jsx(nc,{path:"/docs/:slug",element:sn.jsx(DC,{})})]})]})})}rb.createRoot(document.getElementById("root")).render(sn.jsx(Jv.StrictMode,{children:sn.jsx(RC,{})}));
